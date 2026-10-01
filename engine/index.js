/*
 * MSP Search — inverted index.
 *
 * Documents carry pre-tokenized fields. At build time every (term, doc) pair gets a
 * BM25F pseudo term frequency:
 *
 *     tf~ = Σ_field  weight_field · tf_field / (1 − b_field + b_field · len_field / avglen_field)
 *
 * and at query time a term contributes  idf(term) · tf~·(k1+1) / (tf~+k1).
 *
 * Query tokens are expanded into index terms (exact, stem, transliteration, prefix,
 * reverse-prefix, fuzzy) each with a confidence weight; the scorer keeps the best
 * alternative per document so variants never double-count.
 */
(function (root) {
  'use strict';

  const MSP = root.MSP;
  const T = MSP.text;

  const FIELDS = {
    title:   { w: 3.0, b: 0.5 },
    alias:   { w: 2.6, b: 0.3 },
    host:    { w: 2.4, b: 0.2 },
    tags:    { w: 1.5, b: 0.4 },
    desc:    { w: 1.0, b: 0.75 },
    concept: { w: 1.8, b: 0.0 }
  };
  const K1 = 1.2;
  const MAX_PREFIX = 40;

  class SearchIndex {
    constructor() {
      this.docs = [];
      this.post = new Map();     // term -> Map(docIx -> tf~)
      this.stems = new Map();    // stem -> [terms]
      this.byLen = new Map();    // length -> [terms]   (fuzzy candidates)
      this.byGeo = new Map();    // region code -> Set(docIx), docs are listed under every ancestor too
      this.vocab = [];           // sorted, without concept terms
      this._idf = new Map();
    }

    add(doc) {
      doc.ix = this.docs.length;
      this.docs.push(doc);
      return doc;
    }

    build() {
      const N = this.docs.length;
      const avg = {};
      for (const f of Object.keys(FIELDS)) {
        let sum = 0;
        for (const d of this.docs) sum += (d.fields[f] || []).length;
        avg[f] = N ? sum / N : 1;
      }

      for (const d of this.docs) {
        const all = new Set();
        for (const f of Object.keys(FIELDS)) {
          const toks = d.fields[f] || [];
          if (!toks.length) continue;
          const F = FIELDS[f];
          const norm = avg[f] > 0 ? 1 - F.b + F.b * toks.length / avg[f] : 1;
          const counts = new Map();
          for (const t of toks) counts.set(t, (counts.get(t) || 0) + 1);
          for (const [t, c] of counts) {
            let p = this.post.get(t);
            if (!p) this.post.set(t, p = new Map());
            p.set(d.ix, (p.get(d.ix) || 0) + F.w * c / norm);
            if (f !== 'concept') all.add(t);
          }
        }
        d.terms = all;                       // every searchable token of the doc (exclude / residual checks)

        for (const code of d.geo || []) {
          let c = code;
          while (c) {
            let s = this.byGeo.get(c);
            if (!s) this.byGeo.set(c, s = new Set());
            s.add(d.ix);
            c = MSP.Lexicon.parentCode(c);
          }
        }
      }

      this.vocab = Array.from(this.post.keys()).filter(t => t[0] !== '@').sort();
      for (const t of this.vocab) {
        const s = T.stem(t);
        let a = this.stems.get(s);
        if (!a) this.stems.set(s, a = []);
        a.push(t);
        let b = this.byLen.get(t.length);
        if (!b) this.byLen.set(t.length, b = []);
        b.push(t);
      }
      this.N = N;
      this._idf.clear();
    }

    idf(term) {
      let v = this._idf.get(term);
      if (v === undefined) {
        const p = this.post.get(term);
        const df = p ? p.size : 0;
        v = Math.log(1 + (this.N - df + 0.5) / (df + 0.5));
        this._idf.set(term, v);
      }
      return v;
    }

    static saturate(tf) { return tf * (K1 + 1) / (tf + K1); }

    has(term) { return this.post.has(term); }

    /** Docs whose region is the given code or lies inside it. */
    docsInRegion(code) { return this.byGeo.get(code) || new Set(); }

    _prefixRange(prefix) {
      let lo = 0, hi = this.vocab.length;
      while (lo < hi) {
        const mid = (lo + hi) >> 1;
        if (this.vocab[mid] < prefix) lo = mid + 1; else hi = mid;
      }
      const out = [];
      for (let i = lo; i < this.vocab.length && out.length < MAX_PREFIX; i++) {
        if (!this.vocab[i].startsWith(prefix)) break;
        out.push(this.vocab[i]);
      }
      return out;
    }

    /**
     * Expand one folded query token into weighted index terms.
     * opts: { prefix: bool, fuzzy: bool, isLast: bool }
     * Returns { alts: [{term, w, how}], fuzzyBest: term|null }
     */
    expand(tok, opts) {
      opts = opts || {};
      const out = new Map();
      const add = (term, w, how) => {
        const p = out.get(term);
        if (!p || p.w < w) out.set(term, { term, w, how });
      };

      if (this.post.has(tok)) add(tok, 1, 'exact');
      for (const t of this.stems.get(T.stem(tok)) || []) if (t !== tok) add(t, 0.85, 'stem');

      const variants = T.translit(tok);
      for (const v of variants) {
        if (this.post.has(v)) add(v, 0.9, 'translit');
        for (const t of this.stems.get(T.stem(v)) || []) add(t, 0.8, 'translit');
      }

      const allowPrefix = opts.prefix !== false && (tok.length >= 3 || (opts.isLast && tok.length >= 2));
      if (allowPrefix) {
        for (const p of [tok].concat(variants)) {
          for (const t of this._prefixRange(p)) {
            if (t !== p) add(t, Math.min(0.85, 0.5 + 0.35 * p.length / t.length), 'prefix');
          }
        }
      }

      // Reverse prefix: "haberleri" still finds "haber", "mobilede" finds "mobile".
      if (opts.prefix !== false && tok.length >= 5 && !T.CYR.test(tok)) {
        for (let i = tok.length - 1; i >= 4; i--) {
          const p = tok.slice(0, i);
          if (i / tok.length >= 0.6 && this.post.has(p)) { add(p, 0.6, 'rprefix'); break; }
        }
      }

      let fuzzyBest = null;
      if (!out.size && opts.fuzzy !== false && tok.length >= 4 && !/\d/.test(tok)) {
        const probes = T.CYR.test(tok) ? [tok].concat(variants) : [tok];
        let best = null;
        for (const p of probes) {
          const maxD = p.length >= 8 ? 2 : 1;
          for (let len = p.length - maxD; len <= p.length + maxD; len++) {
            for (const t of this.byLen.get(len) || []) {
              if (t[0] !== p[0] && maxD === 1) continue;    // first letter typos are rare at distance 1
              const d = T.distance(p, t, maxD);
              if (d > maxD) continue;
              add(t, d === 1 ? 0.65 : 0.5, 'fuzzy');
              const df = this.post.get(t).size;
              if (!best || d < best.d || (d === best.d && df > best.df)) best = { term: t, d, df };
            }
          }
        }
        if (best) fuzzyBest = best.term;
      }

      return { alts: Array.from(out.values()), fuzzyBest };
    }
  }

  SearchIndex.FIELDS = FIELDS;
  MSP.SearchIndex = SearchIndex;
})(typeof globalThis !== 'undefined' ? globalThis : this);
