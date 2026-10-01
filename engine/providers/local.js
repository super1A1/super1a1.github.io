/*
 * MSP Search — local provider (the curated site database).
 *
 * Final score of a document:
 *
 *   text      Σ over query terms of  termWeight · best alternative score   (BM25F, see index.js)
 *   × coord²  share of required terms the doc matched (all terms > some terms)
 *   × geo     region fit  (NYC site for "NY news" ↑, Moscow site for "buy auto Berlin" ↓)
 *   × pop     editorial popularity prior from the database (`rank`, 1–100)
 *   × nav     navigational boost when the query *is* the site's name/alias/domain
 *
 * Subpages are indexed as their own documents and folded back into their parent as
 * sitelinks, unless the query names the subpage itself ("youtube music").
 */
(function (root) {
  'use strict';

  const MSP = root.MSP;
  const T = MSP.text, U = MSP.util;
  const Lexicon = MSP.Lexicon;

  const K_NORM = 6;                       // score -> 0..1 squash, see norm()
  const NAV_EXACT = 3.5, NAV_FIXED = 2.8, NAV_SCOPED = 1.8;
  const GEO_SEARCH_CATS = new Set(['weather', 'maps', 'travel']);
  const ARTICLES = new Set(['the', 'der', 'die', 'das', 'le', 'la', 'les', 'el', 'il']);
  const SECOND_LEVEL = new Set(['co', 'com', 'org', 'net', 'gov', 'ac', 'edu', 'or', 'ne', 'go']);

  function splitList(s) {
    if (!s) return [];
    return (Array.isArray(s) ? s : String(s).split(',')).map(x => String(x).trim()).filter(Boolean);
  }
  function splitGeo(s) {
    if (!s) return [];
    return (Array.isArray(s) ? s : String(s).split(/[\s,]+/)).map(x => x.trim().toUpperCase()).filter(Boolean);
  }

  /** "www.autoscout24.co.uk" -> { labels: ['autoscout24', 'co', 'uk'], core: 'autoscout24' } */
  function hostParts(url, host) {
    const labels = host.replace(/^www\d*\./, '').split('.').filter(Boolean);
    let end = labels.length - 1;                                   // drop the TLD
    if (end > 0 && SECOND_LEVEL.has(labels[end - 1]) && labels[end].length === 2) end--;
    const core = end > 0 ? labels[end - 1] : labels[0] || '';
    let path = '/';
    try { path = new URL(url).pathname; } catch (e) { /* keep root */ }
    return {
      labels: labels.map(T.fold),
      core: T.fold(core),
      sub: end > 1,                                 // has a subdomain (mail.google.com)
      root: path === '/' || path === ''
    };
  }

  /** Tokens plus Latin transliterations of Cyrillic tokens, so "yandex" finds "Яндекс". */
  function tokensWithTranslit(text) {
    const out = [];
    for (const t of T.tokenize(text)) {
      out.push(t);
      for (const v of T.translit(t)) out.push(v);
    }
    return out;
  }

  class LocalProvider {
    constructor(data, lex, config) {
      this.lex = lex;
      this.config = config || {};
      this.index = new MSP.SearchIndex();
      this.navMap = new Map();     // normalized name -> [docIx]
      for (const site of data.sites) {
        const parent = this._addDoc(site, null);
        for (const child of site.sub || []) parent.children.push(this._addDoc(child, parent).ix);
      }
      this.index.build();
    }

    /* ---------------------------------------------------------------- indexing */

    _addDoc(src, parent) {
      const lex = this.lex;
      const category = parent ? parent.category : src.category;
      const catDef = lex.categories[category] || { label: category, concepts: [] };
      const host = U.host(src.url);
      const hp = hostParts(src.url, host);
      const aliases = splitList(src.aliases);
      const tags = splitList(src.tags);
      const geo = splitGeo(src.geo);

      const doc = {
        ix: -1,
        title: src.title,
        url: src.url,
        host: host,
        desc: src.desc || '',
        category: category,
        categoryLabel: catDef.label,
        geo: geo.length ? geo : (parent ? parent.geo : []),
        rank: src.rank || (parent ? Math.max(10, parent.rank - 15) : 50),
        search: src.search || null,
        parent: parent ? parent.ix : null,
        children: [],
        aliases: aliases
      };

      const titleToks = T.tokenize(src.title);
      const catConcepts = parent ? [] : catDef.concepts || [];
      const concepts = new Set(catConcepts);
      for (const tag of tags) for (const c of lex.conceptsIn(T.tokenize(tag))) concepts.add(c);
      // Concepts named by the subpage itself ("Kleinanzeigen Autos" -> car), not by the parent's name.
      const parentToks = parent ? new Set(T.tokenize(parent.title)) : null;
      const ownConcepts = parent ? lex.conceptsIn(titleToks.filter(t => !parentToks.has(t))) : new Set();
      for (const c of ownConcepts) concepts.add(c);

      let aliasText = aliases.join(' , ');
      if (parent) aliasText += ' , ' + parent.title + ' , ' + parent.aliases.join(' , ');

      doc.fields = {
        title: tokensWithTranslit(src.title),
        alias: tokensWithTranslit(aliasText),
        host: hp.labels.filter(l => l !== 'www'),
        tags: tokensWithTranslit(tags.join(' ')),
        desc: tokensWithTranslit(src.desc || ''),
        // category concepts count twice: a shop is more "buy" than a game store tagged "store"
        concept: Array.from(concepts).map(c => '@' + c).concat(catConcepts.map(c => '@' + c))
      };
      doc.concepts = concepts;
      doc.ownConcepts = ownConcepts;
      this.index.add(doc);

      // Navigational keys: the names this document answers to on its own.
      const keys = new Map();                        // key -> strong (name) or weak (domain)
      let strong = true;
      const put = k => { if (!keys.has(k) || strong) keys.set(k, strong || keys.get(k) || false); };
      const addKey = toks => {
        if (!toks.length) return;
        put(toks.join(' '));
        if (toks.length > 1) put(toks.join(''));
        // "The Economist" also answers to "economist", but "The City" must not own "city".
        if (toks.length > 1 && ARTICLES.has(toks[0])) {
          const rest = toks.slice(1);
          if (!(rest.length === 1 && lex.isKnownWord(rest[0]))) put(rest.join(' '));
        }
      };
      addKey(titleToks);
      for (const a of aliases) addKey(T.tokenize(a));
      // The domain is a name only for the site's front page ("mobile.de"), not for
      // google.com/maps or images.google.com, which would all claim "google".
      if (hp.root) {
        strong = false;
        addKey(hp.labels.filter(l => l !== 'www'));
        if (!hp.sub && hp.core.length >= 4 && !lex.isKnownWord(hp.core)) put(hp.core);
      }
      for (const [k, isStrong] of keys) {
        let a = this.navMap.get(k);
        if (!a) this.navMap.set(k, a = new Map());
        a.set(doc.ix, (a.get(doc.ix) || false) || isStrong);
      }
      doc.navKeys = new Set(keys.keys());
      return doc;
    }

    /* ---------------------------------------------------------------- searching */

    /**
     * @param q  ParsedQuery from QueryParser
     * @returns { results, corrections, navExact, topNorm, siteScoped }
     */
    search(q) {
      const idx = this.index;
      const terms = q.terms.filter(t => t.kind !== 'stop');
      const req = terms.filter(t => t.required);
      const reqW = req.reduce((s, t) => s + t.weight, 0);
      const corrections = [];
      const hits = new Map();
      const entry = ix => {
        let e = hits.get(ix);
        if (!e) hits.set(ix, e = { text: 0, req: 0, mask: 0, fuzzyMask: 0, strong: 0, fuzzy: 0, base: false });
        return e;
      };

      /* 1. term matching ------------------------------------------------- */
      terms.forEach((term, ti) => {
        const alts = this._alternatives(term, ti, ti === terms.length - 1, corrections);
        if (!alts.length) return;
        const best = new Map();
        for (const a of alts) {
          const plist = idx.post.get(a.term);
          if (!plist) continue;
          const idf = idx.idf(a.idfTerm || a.term);
          for (const [ix, tf] of plist) {
            const s = idf * a.w * MSP.SearchIndex.saturate(tf);
            const b = best.get(ix);
            if (!b || b.s < s) best.set(ix, { s, how: a.how });
          }
        }
        for (const [ix, b] of best) {
          const e = entry(ix);
          e.text += term.weight * b.s;
          if (term.required) e.req += term.weight;
          if (ti < 31) e.mask |= (1 << ti);
          if (b.how === 'fuzzy') { e.fuzzy++; if (ti < 31) e.fuzzyMask |= (1 << ti); } else e.strong++;
        }
      });

      /* 2. region-only queries ("Berlin", "in:moscow") ------------------- */
      if (!req.length && q.geo.length) {
        for (const code of q.geo) {
          for (const ix of idx.docsInRegion(code)) { const e = entry(ix); e.text += 4; e.base = true; }
        }
      }

      /* 3. category browsing ("type:news") -------------------------------- */
      if (!terms.length && !q.geo.length && q.category) {
        for (const d of idx.docs) if (d.category === q.category) { const e = entry(d.ix); e.text += 3; e.base = true; }
      }

      /* 4. navigational matches ------------------------------------------ */
      const nav = this._nav(q, corrections);
      if (q.site) {
        const rest = terms.filter(t => t.kind !== 'soft').map(t => t.surface).join(' ');
        for (const d of idx.docs) {
          if (d.host === q.site || d.host.endsWith('.' + q.site) || q.site.endsWith('.' + d.host.replace(/^www\./, ''))) {
            const e = entry(d.ix); e.base = true; e.site = true;
            if (!e.text) e.text = 3;
            if (rest && !nav.exact.has(d.ix)) nav.scoped.set(d.ix, rest);
          }
        }
      }
      for (const ix of nav.exact) { const e = entry(ix); if (!e.text) e.text = 3; }
      for (const ix of nav.fixed) { const e = entry(ix); if (!e.text) e.text = 3; }

      /* 5. filters + final score ----------------------------------------- */
      const scored = [];
      for (const [ix, e] of hits) {
        const doc = idx.docs[ix];
        if (q.category && doc.category !== q.category) continue;
        if (q.site && !(doc.host === q.site || doc.host.endsWith('.' + q.site) || q.site.endsWith('.' + doc.host.replace(/^www\./, '')))) continue;
        if (q.excludes.length && this._containsAny(doc, q.excludes)) continue;
        if (q.phrases.length && !q.phrases.every(p => this._containsPhrase(doc, p))) continue;

        const coord = (reqW && !e.site) ? e.req / reqW : 1;
        // A site with its own search box can answer the words it does not know itself:
        // for "buy iphone" Amazon matches "buy" and gets "Search “iphone” on Amazon".
        let coordEff = coord;
        if (coord < 1 && doc.search && e.req > 0) {
          const missing = req.filter(t => !(e.mask & (1 << terms.indexOf(t))));
          if (missing.length && missing.every(t => t.kind === 'text' && !this.isSiteName(t))) {
            const missW = missing.reduce((a, t) => a + t.weight, 0);
            coordEff = (e.req + 0.6 * missW) / reqW;
          }
        }
        const navKind = nav.exact.has(ix) ? 'exact' : nav.fixed.has(ix) ? 'exact' : nav.scoped.has(ix) ? 'scoped' : null;
        if (!navKind) {
          if (reqW && e.req === 0 && !e.base) continue;              // matched only optional words
          if (req.length >= 3 && coordEff < 0.5) continue;
          if (e.strong === 0 && e.fuzzy > 0 && coord < 1) continue;   // weak typo-only match
        }

        let s = e.text * coordEff * coordEff;
        const gf = this._geoFactor(doc, q);
        // The user named this site: do not punish it for being regional, only reward fit.
        s *= (nav.exact.has(ix) || nav.fixed.has(ix)) ? Math.max(1, gf) : gf;
        s *= 0.7 + 0.6 * (U.clamp(doc.rank, 1, 100) / 100);
        const weakNav = nav.weak.has(ix) ? 0.85 : 1;                // matched only by its domain
        if (nav.exact.has(ix)) s *= NAV_EXACT * weakNav;
        else if (nav.fixed.has(ix)) s *= NAV_FIXED * weakNav;
        else if (nav.scoped.has(ix)) s *= NAV_SCOPED;

        scored.push({ doc, s, e, coord, nav: navKind, residual: nav.scoped.get(ix) || null });
      }

      /* 6. fold subpages into their parents ------------------------------ */
      const groups = new Map();
      const group = (doc) => {
        let g = groups.get(doc.ix);
        if (!g) groups.set(doc.ix, g = { doc, s: 0, own: null, children: [] });
        return g;
      };
      for (const h of scored) {
        if (h.doc.parent === null || h.nav === 'exact') {
          const g = group(h.doc);
          g.own = h; g.s = Math.max(g.s, h.s);
        } else {
          const g = group(idx.docs[h.doc.parent]);
          g.children.push(h);
          g.s = Math.max(g.s, h.s * 0.9);
        }
      }

      const ordered = Array.from(groups.values()).sort((a, b) => b.s - a.s || b.doc.rank - a.doc.rank);
      let usedFuzzy = 0;
      for (const g of ordered.slice(0, 10)) {
        if (g.own) usedFuzzy |= g.own.e.fuzzyMask;
        for (const c of g.children) usedFuzzy |= c.e.fuzzyMask;
      }
      if (nav.fixed.size) usedFuzzy = ~0;                     // navigational fix ("yotube")
      const kept = corrections.filter(c => c.ti >= 31 || (usedFuzzy & (1 << c.ti)));
      corrections.length = 0;
      Array.prototype.push.apply(corrections, kept);
      const results = ordered.map((g, i) => this._result(g, q, i));
      const navExact = ordered.length > 0 && !!(ordered[0].own && ordered[0].own.nav === 'exact');
      return {
        results,
        corrections,
        navExact,
        topNorm: results.length ? results[0].norm : 0,
        topCoord: results.length ? results[0].coord : 0,
        siteScoped: ordered.filter(g => g.own && g.own.nav === 'scoped').map(g => ({ host: g.doc.host, residual: g.own.residual }))
      };
    }

    _alternatives(term, ti, isLast, corrections) {
      const idx = this.index;
      const alts = [];
      if (term.kind === 'concept') {
        for (const id of term.concepts) alts.push({ term: '@' + id, w: 1, how: 'concept' });
        // The literal word still counts ("Google News" for "news") but with the concept's
        // rarity, so a site that merely says "buy" in its tags cannot beat real shops.
        const common = term.concepts.map(id => '@' + id).filter(t => idx.has(t))
          .sort((a, b) => idx.idf(a) - idx.idf(b))[0];
        if (term.toks.length === 1) {
          for (const a of idx.expand(term.toks[0], { prefix: false, fuzzy: false }).alts) {
            alts.push({ term: a.term, w: a.w * 0.85, how: a.how, idfTerm: common });
          }
        }
        return alts;
      }
      if (term.kind === 'geo') {
        for (const tok of term.toks) {
          if (term.toks.length > 1 && tok.length < 4) continue;
          for (const a of idx.expand(tok, { prefix: tok.length >= 4, fuzzy: false }).alts) alts.push(a);
        }
        return alts;
      }
      const ex = idx.expand(term.toks[0], { isLast, fuzzy: term.kind === 'text' });
      if (ex.fuzzyBest && ex.alts.every(a => a.how === 'fuzzy')) {
        corrections.push({ from: term.surface, fromTok: term.toks[0], to: ex.fuzzyBest, ti: ti });
      }
      return ex.alts;
    }

    /** Navigational analysis: is the query (or a prefix/suffix of it) the name of a site? */
    _nav(q, corrections) {
      const res = { exact: new Set(), fixed: new Set(), weak: new Set(), scoped: new Map() };
      const core = q.terms.filter(t => t.kind !== 'stop' && t.kind !== 'soft');
      if (!core.length) return res;
      const lookup = toks => {
        const keys = [toks.join(' '), toks.join('')];
        if (toks.some(t => T.CYR.test(t))) {
          const tr = toks.map(t => T.translit(t));
          keys.push(tr.map(v => v[0] || '').join(' '), tr.map(v => v[v.length - 1] || '').join(' '));
          keys.push(tr.map(v => v[0] || '').join(''), tr.map(v => v[v.length - 1] || '').join(''));
        }
        const out = new Map();
        for (const k of keys) {
          const m = this.navMap.get(k);
          if (m) for (const [ix, st] of m) out.set(ix, out.get(ix) || st);
        }
        return out;
      };
      const toksOf = list => list.flatMap(t => t.toks);

      for (const [ix, st] of lookup(toksOf(core))) { res.exact.add(ix); if (!st) res.weak.add(ix); }
      if (!res.exact.size && corrections.length) {
        const fixed = toksOf(core).map(t => { const c = corrections.find(x => x.fromTok === t); return c ? c.to : t; });
        for (const [ix, st] of lookup(fixed)) { res.fixed.add(ix); if (!st) res.weak.add(ix); }
      }
      if (core.length >= 2) {
        for (let k = core.length - 1; k >= 1; k--) {
          const head = core.slice(0, k), tail = core.slice(k);
          for (const [nameTerms, rest] of [[head, tail], [tail, head]]) {
            for (const ix of lookup(toksOf(nameTerms)).keys()) {
              if (!res.scoped.has(ix) && !res.exact.has(ix)) res.scoped.set(ix, rest.map(t => t.surface).join(' '));
            }
          }
        }
      }
      return res;
    }

    /** True when the term is the name of a site in the database ("youtube", "amazon"). */
    isSiteName(term) {
      return this.navMap.has(term.toks.join(' '));
    }

    _geoFactor(doc, q) {
      const dg = doc.geo;
      if (q.geo.length) {
        if (!dg.length) return 0.7;
        let best = 0.12;
        for (const c of dg) for (const g of q.geo) {
          const r = Lexicon.geoRelation(c, g);
          if (r === 'same' || r === 'inside') best = Math.max(best, 1.5);
          else if (r === 'contains') best = Math.max(best, 1.2);
        }
        return best;
      }
      const soft = q.softGeo.length ? q.softGeo : (this.config.defaultRegion ? [this.config.defaultRegion] : []);
      if (soft.length) {
        if (!dg.length) return 1;
        const match = dg.some(c => soft.some(g => Lexicon.geoRelation(c, g) !== 'none'));
        return match ? (q.softGeo.length ? 1.35 : 1.15) : 0.75;
      }
      if (!dg.length) return 1;
      return dg.some(c => c.indexOf('-') < 0) ? 0.88 : 0.75;    // national vs city-level site
    }

    _containsAny(doc, excludes) {
      return excludes.some(ex => ex.length === 1
        ? (doc.terms.has(ex[0]) || doc.terms.has(T.stem(ex[0])))
        : this._containsPhrase(doc, ex));
    }

    _containsPhrase(doc, phrase) {
      if (!doc._flat) {
        doc._flat = ' ' + T.tokenize([doc.title, doc.aliases.join(' '), doc.desc, doc.host].join(' ')).join(' ') + ' ';
      }
      return doc._flat.includes(' ' + phrase.join(' ') + ' ');
    }

    /* ---------------------------------------------------------------- result objects */

    _result(g, q, rank) {
      const idx = this.index;
      const doc = g.doc;
      const sitelinks = [];

      // "Search <residual> on <site>" deep link
      if (doc.search && rank < 8) {
        let residual = g.own && g.own.residual;
        if (!residual && !(g.own && g.own.nav === 'exact') && g.s / (g.s + K_NORM) >= 0.25) residual = this._residualFor(doc, q);
        if (residual) {
          sitelinks.push({
            kind: 'search',
            title: 'Search “' + residual + '” on ' + doc.title,
            url: doc.search.replace('{q}', encodeURIComponent(residual))
          });
        }
      }

      // subpages
      const ownMask = g.own ? g.own.e.mask : 0;
      let kids;
      if (g.own && g.own.nav === 'exact' && doc.parent === null) {
        kids = doc.children.map(ix => idx.docs[ix]);
      } else {
        kids = g.children
          .filter(h => (h.e.mask & ~ownMask) !== 0 || q.concepts.some(c => h.doc.ownConcepts.has(c)))
          .sort((a, b) => b.s - a.s)
          .map(h => h.doc);
      }
      for (const k of kids.slice(0, 6)) sitelinks.push({ kind: 'page', title: k.title, url: k.url });

      const parent = doc.parent !== null ? idx.docs[doc.parent] : null;
      return {
        id: 'local:' + doc.ix,
        kind: 'site',
        source: 'local',
        title: doc.title,
        url: doc.url,
        snippet: doc.desc || (parent ? parent.desc : ''),
        category: doc.category,
        categoryLabel: doc.categoryLabel,
        geo: doc.geo,
        geoLabel: doc.geo.length ? this.lex.placeName(this._bestGeo(doc, q)) : '',
        nav: g.own ? g.own.nav : null,
        coord: Math.max(g.own ? g.own.coord : 0, ...g.children.map(h => h.coord)),
        score: g.s,
        norm: g.s / (g.s + K_NORM),
        sitelinks
      };
    }

    _bestGeo(doc, q) {
      for (const c of doc.geo) for (const g of q.geo.concat(q.softGeo)) {
        if (Lexicon.geoRelation(c, g) !== 'none') return c;
      }
      return doc.geo[0];
    }

    /** Words of the query this site did not explain itself — what to search for *on* it. */
    _residualFor(doc, q) {
      const parts = [];
      for (const t of q.terms) {
        if (t.kind === 'text' && !this.isSiteName(t) && !t.toks.every(tok => doc.terms.has(tok) || doc.navKeys.has(tok))) parts.push(t.surface);
        else if (t.kind === 'geo' && GEO_SEARCH_CATS.has(doc.category)) parts.push(t.surface);
      }
      return parts.join(' ');
    }
  }

  LocalProvider.K_NORM = K_NORM;
  MSP.LocalProvider = LocalProvider;
})(typeof globalThis !== 'undefined' ? globalThis : this);
