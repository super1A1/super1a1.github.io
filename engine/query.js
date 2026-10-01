/*
 * MSP Search — lexicon and query understanding.
 *
 * Lexicon      compiled lookups over data/concepts.js (intents/topics in en/ru/tr/de/…)
 *              and data/places.js (countries, cities, demonyms, codes).
 * QueryParser  turns a raw query into a structured ParsedQuery:
 *
 *   "buy auto Berlin"  -> concept(buy) concept(car) geo(DE-BE)
 *   "NY news"          -> geo(US-NY) concept(news)
 *   "react hooks -class site:github.com"
 *                      -> text(react) text(hooks), exclude [class], site github.com
 *
 * Supported operators: "exact phrase", -word, -"phrase", site:domain, type:category,
 * cat:category, in:place.
 */
(function (root) {
  'use strict';

  const MSP = root.MSP;
  const T = MSP.text;

  const LANG_GEO = { ru: ['RU'], uk: ['UA'], tr: ['TR'], de: ['DE', 'AT', 'CH'], fr: ['FR'], es: ['ES'], it: ['IT'], pl: ['PL'] };

  // TLDs we accept when deciding whether a query is a bare domain ("mobile.de", "auto.ru").
  const TLDS = new Set(('com org net io dev app ai co uk de ru tr fr it es nl pl ua by kz jp cn in br au ca ch at se no ' +
    'fi dk be pt gr ie cz il ae me tv us eu info biz xyz gov edu int site online store tech page link news blog cloud ' +
    'ly to so fm gl sh gg is nz mx ar kr tw hk sg vn th id my ro hu bg rs hr sk si lt lv ee md ge am az uz su рф').split(' '));

  /* ================================================================== Lexicon */

  class Lexicon {
    constructor(data) {
      this.categories = data.categories;
      this.concepts = new Map();
      this.conceptPhrases = new Map();
      this.conceptStems = new Map();
      this.places = new Map();
      this.placePhrases = new Map();
      this.placeStems = new Map();
      this.known = new Set();
      this.maxN = 1;
      for (const c of data.concepts) this._addConcept(c);
      for (const p of data.places) this._addPlace(p);
      for (const lang in data.words) for (const w of data.words[lang]) this.known.add(T.fold(w));
    }

    _push(map, key, val, same) {
      const arr = map.get(key);
      if (!arr) map.set(key, [val]);
      else if (!arr.some(x => same(x, val))) arr.push(val);
    }

    _addConcept(c) {
      this.concepts.set(c.id, c);
      const sameC = (a, b) => a.id === b.id && a.lang === b.lang;
      for (const lang of Object.keys(c.words || {})) {
        for (const phrase of String(c.words[lang]).split(',')) {
          const toks = T.tokenize(phrase);
          if (!toks.length) continue;
          this.maxN = Math.max(this.maxN, toks.length);
          this._push(this.conceptPhrases, toks.join(' '), { id: c.id, lang }, sameC);
          this._push(this.conceptStems, toks.map(T.stem).join(' '), { id: c.id, lang }, sameC);
          for (const t of toks) this.known.add(t);
        }
      }
    }

    _addPlace(p) {
      this.places.set(p.code, p);
      const sameP = (a, b) => a.code === b.code && a.cs === b.cs;
      const add = (phrase, cs) => {
        phrase = phrase.trim();
        const toks = T.tokenize(phrase);
        if (!toks.length) return;
        this.maxN = Math.max(this.maxN, toks.length);
        const val = { code: p.code, cs: cs ? phrase : null };
        this._push(this.placePhrases, toks.join(' '), val, sameP);
        if (!cs) this._push(this.placeStems, toks.map(T.stem).join(' '), val, sameP);
        if (!cs) for (const t of toks) this.known.add(t);
      };
      add(p.name, false);
      for (const n of String(p.names || '').split(',')) add(n, false);
      for (const n of String(p.cs || '').split(',')) add(n, true);
    }

    /** Concept matches for a token span ({raw,tok}[]), exact phrase first, then stems. */
    lookupConcept(span) {
      const toks = span.map(x => x.tok);
      return this.conceptPhrases.get(toks.join(' ')) || this.conceptStems.get(toks.map(T.stem).join(' ')) || [];
    }

    /** Place matches for a token span. Case-sensitive aliases ("US", "LA") need the exact raw spelling. */
    lookupPlace(span, allCaps) {
      const toks = span.map(x => x.tok);
      const raw = span.map(x => x.raw).join(' ');
      const hits = (this.placePhrases.get(toks.join(' ')) || [])
        .filter(h => !h.cs || (!allCaps && h.cs === raw));
      if (hits.length) return hits;
      return this.placeStems.get(toks.map(T.stem).join(' ')) || [];
    }

    /** All concept ids found anywhere in a token list (used to tag documents). */
    conceptsIn(tokens) {
      const found = new Set();
      for (let i = 0; i < tokens.length; i++) {
        for (let n = Math.min(this.maxN, tokens.length - i); n >= 1; n--) {
          const span = tokens.slice(i, i + n);
          const hits = this.conceptPhrases.get(span.join(' ')) || this.conceptStems.get(span.map(T.stem).join(' '));
          if (hits) { for (const h of hits) found.add(h.id); break; }
        }
      }
      return found;
    }

    isKnownWord(t) {
      return this.known.has(t) || T.isStop(t) || T.isSoft(t);
    }

    placeName(code) {
      const p = this.places.get(code);
      if (p) return p.name;
      const parent = Lexicon.parentCode(code);
      return parent ? this.placeName(parent) : code;
    }

    static parentCode(code) {
      const i = code.lastIndexOf('-');
      return i > 0 ? code.slice(0, i) : null;
    }

    /**
     * 'same'     doc and query name the same region
     * 'inside'   doc region lies inside the query region (NYC site for a "NY" query)
     * 'contains' doc region contains the query region (a Germany-wide site for "Berlin")
     * 'none'     unrelated regions
     */
    static geoRelation(docCode, qCode) {
      if (docCode === qCode) return 'same';
      if (docCode.startsWith(qCode + '-')) return 'inside';
      if (qCode.startsWith(docCode + '-')) return 'contains';
      return 'none';
    }
  }

  /* ================================================================== QueryParser */

  const OP_RE = /(-?)"([^"]*)"?|(\S+)/g;

  class QueryParser {
    constructor(lex) { this.lex = lex; }

    parse(input) {
      const raw = String(input == null ? '' : input).replace(/\s+/g, ' ').trim().slice(0, 300);
      const q = {
        raw: raw,
        free: '',
        phrases: [],        // [[tok, tok], ...]  must appear in this order
        excludes: [],       // [[tok], [tok, tok]]
        site: null,
        category: null,
        url: null,
        terms: [],
        geo: [],
        softGeo: [],
        concepts: [],
        intent: false,
        lang: 'en',
        coreTokens: []
      };
      if (!raw) return q;

      q.url = this._asUrl(raw);

      const free = [];
      OP_RE.lastIndex = 0;
      let m;
      while ((m = OP_RE.exec(raw))) {
        if (m[2] !== undefined) {
          const toks = T.tokenize(m[2]);
          if (!toks.length) continue;
          if (m[1]) q.excludes.push(toks);
          else { q.phrases.push(toks); free.push(m[2]); }
          continue;
        }
        const w = m[3];
        const op = /^(site|type|cat|in):(.+)$/i.exec(w);
        if (op) {
          const kind = op[1].toLowerCase(), val = op[2];
          if (kind === 'site') q.site = val.toLowerCase().replace(/^[a-z]+:\/\//, '').replace(/^www\./, '').replace(/\/.*$/, '');
          else if (kind === 'in') {
            const span = T.tokenizeRaw(val.replace(/[-_]/g, ' '));
            for (const h of this.lex.lookupPlace(span, false)) q.geo.push(h.code);
          } else q.category = this._category(val);
          continue;
        }
        if (w.length > 1 && w[0] === '-' && /[\p{L}\p{N}]/u.test(w[1])) {
          const toks = T.tokenize(w.slice(1));
          if (toks.length) q.excludes.push(toks);
          continue;
        }
        free.push(w);
      }
      q.free = free.join(' ');

      this._analyze(q);
      return q;
    }

    _asUrl(raw) {
      if (/\s/.test(raw)) return null;
      const m = /^(https?:\/\/)?((?:[\p{L}\p{N}-]+\.)+([\p{L}]{2,}))(:\d+)?(\/\S*)?$/iu.exec(raw);
      if (!m) return null;
      if (!m[1] && !TLDS.has(m[3].toLowerCase())) return null;
      return m[1] ? raw : 'https://' + raw;
    }

    _category(val) {
      const v = T.fold(val);
      const cats = this.lex.categories;
      if (cats[v]) return v;
      for (const id of Object.keys(cats)) if (T.fold(cats[id].label).startsWith(v)) return id;
      return null;
    }

    _analyze(q) {
      const lex = this.lex;
      const toks = T.tokenizeRaw(q.free);
      const letters = q.free.replace(/[^\p{L}]/gu, '');
      const allCaps = letters.length > 3 && letters === letters.toUpperCase();
      const terms = [];

      let i = 0;
      while (i < toks.length) {
        let matched = false;
        for (let n = Math.min(lex.maxN, toks.length - i); n >= 1 && !matched; n--) {
          const span = toks.slice(i, i + n);
          const places = lex.lookupPlace(span, allCaps);
          if (places.length) {
            terms.push(this._term('geo', span, { geo: unique(places.map(p => p.code)), weight: 0.5, required: false }));
            i += n; matched = true; break;
          }
          const concepts = lex.lookupConcept(span);
          if (concepts.length) {
            terms.push(this._term('concept', span, {
              concepts: unique(concepts.map(c => c.id)),
              langs: unique(concepts.map(c => c.lang)),
              weight: 1, required: true
            }));
            i += n; matched = true; break;
          }
        }
        if (matched) continue;
        const span = [toks[i++]];
        const t = span[0].tok;
        if (T.isStop(t)) terms.push(this._term('stop', span, { weight: 0, required: false }));
        else if (T.isSoft(t)) terms.push(this._term('soft', span, { weight: 0.3, required: false }));
        else terms.push(this._term('text', span, { weight: 1, required: true }));
      }

      // A query made only of stop words ("the who", "it") is still a query.
      if (terms.length && terms.every(t => t.kind === 'stop')) {
        for (const t of terms) { t.kind = 'text'; t.weight = 1; t.required = true; }
      }

      q.terms = terms;
      for (const t of terms) {
        if (t.kind === 'geo') q.geo.push(...t.geo);
        if (t.kind === 'concept') q.concepts.push(...t.concepts);
      }
      q.geo = unique(q.geo);
      q.concepts = unique(q.concepts);
      q.intent = q.concepts.some(id => (lex.concepts.get(id) || {}).intent);
      q.coreTokens = terms.filter(t => t.kind !== 'stop' && t.kind !== 'soft').flatMap(t => t.toks);
      q.lang = this._language(q, toks);
      if (!q.geo.length && LANG_GEO[q.lang]) q.softGeo = LANG_GEO[q.lang];
      q.geoOnly = q.geo.length > 0 && !terms.some(t => t.required);
    }

    _term(kind, span, extra) {
      return Object.assign({
        kind: kind,
        surface: span.map(x => x.raw).join(' '),
        toks: span.map(x => x.tok),
        concepts: [], langs: [], geo: []
      }, extra);
    }

    _language(q, toks) {
      const votes = {};
      const vote = (l, w) => { votes[l] = (votes[l] || 0) + w; };
      for (const t of q.terms) {
        if (t.kind === 'concept' && t.langs.length) for (const l of t.langs) vote(l, 1 / t.langs.length);
      }
      for (const x of toks) {
        if (T.CYR.test(x.raw)) vote(/[іїєґ]/i.test(x.raw) ? 'uk' : 'ru', 1);
      }
      if (/[ğşıİĞŞ]/.test(q.raw)) vote('tr', 1.5);
      if (/[äöüß]/i.test(q.raw)) vote('de', 0.4);
      let best = 'en', bestV = 0;
      for (const l of Object.keys(votes)) {
        if (votes[l] > bestV || (votes[l] === bestV && l === 'en')) { best = l; bestV = votes[l]; }
      }
      return best;
    }
  }

  function unique(a) { return Array.from(new Set(a)); }

  MSP.Lexicon = Lexicon;
  MSP.QueryParser = QueryParser;
})(typeof globalThis !== 'undefined' ? globalThis : this);
