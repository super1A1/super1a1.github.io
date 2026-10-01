/*
 * MSP Search — engine orchestrator.
 *
 *   const engine = MSP.createEngine(window.MSP_CONFIG);
 *   engine.search('buy auto Berlin', { page: 1, onUpdate: render }).then(render);
 *
 * Pipeline: keyboard-layout fix -> parse -> local index (sync, instant first paint)
 *           -> live providers in parallel (Wikipedia, YouTube, remote) -> blend -> page.
 * onUpdate fires after the local pass and again whenever a provider finishes.
 */
(function (root) {
  'use strict';

  const MSP = root.MSP;
  const U = MSP.util, T = MSP.text;

  const DEFAULTS = {
    pageSize: 10,
    defaultRegion: null,          // e.g. 'TR' to slightly prefer Turkish sites when the query has no region
    layoutFix: true,              // пщщпду -> google
    spellFix: true,               // yotube -> youtube
    providers: {
      wikipedia: {
        enabled: true, lang: 'auto', languages: ['en', 'ru', 'tr', 'de', 'fr', 'es', 'it', 'uk', 'pl'],
        limit: 8, timeoutMs: 5000, cacheMinutes: 30, panel: true
      },
      youtube: {
        enabled: true, apiKey: '', proxy: '', trigger: 'intent', limit: 4,
        timeoutMs: 5000, cacheMinutes: 60, safeSearch: 'moderate'
      },
      remote: { enabled: false, endpoint: '', mode: 'augment', weight: 1, timeoutMs: 4000 }
    }
  };

  const YT_WORDS = new Set(['youtube', 'ютуб', 'ютюб', 'yt']);

  function escapeRe(s) { return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }
  function replaceWord(str, from, to) {
    const re = new RegExp('(^|[^\\p{L}\\p{N}])' + escapeRe(from) + '(?=$|[^\\p{L}\\p{N}])', 'iu');
    return str.replace(re, (m, pre) => pre + to);
  }

  class Engine {
    constructor(config) {
      this.config = U.merge(DEFAULTS, config || {});
      this.lex = new MSP.Lexicon(MSP.data);
      this.parser = new MSP.QueryParser(this.lex);
      this.local = new MSP.LocalProvider(MSP.data, this.lex, this.config);
      this.seq = 0;
    }

    /* ------------------------------------------------------------ query analysis */

    _known(t) {
      const idx = this.local.index;
      if (idx.has(t) || this.lex.isKnownWord(t)) return true;
      if (t.length >= 4 && idx.stems.has(T.stem(t))) return true;
      return T.translit(t).some(v => idx.has(v));
    }

    _plausibility(s) {
      const toks = T.tokenize(s).filter(t => t.length >= 2 && /^\p{L}+$/u.test(t));
      if (!toks.length) return 0;
      let sum = 0;
      for (const t of toks) sum += this._known(t) ? 1 : (T.plausibleWord(t) ? 0.35 : 0);
      return sum / toks.length;
    }

    /** Returns the re-typed query when it was clearly typed in the wrong keyboard layout. */
    layoutFix(text) {
      if (!text || /^[a-z]+:\/\//i.test(text)) return null;
      const swapped = T.swapLayout(text);
      if (swapped === text) return null;
      const a = this._plausibility(text), b = this._plausibility(swapped);
      return (b >= 0.6 && b - a >= 0.4) ? swapped : null;
    }

    analyze(raw, opts) {
      opts = opts || {};
      let text = String(raw == null ? '' : raw).replace(/\s+/g, ' ').trim();
      let correction = null;
      if (!opts.exact && this.config.layoutFix) {
        const fixed = this.layoutFix(text);
        if (fixed) { correction = { kind: 'layout', text: fixed, original: text }; text = fixed; }
      }
      return { q: this.parser.parse(text), correction };
    }

    /* ------------------------------------------------------------ searching */

    /** Synchronous local-only search (tests, offline use). */
    searchLocal(raw, opts) {
      const state = this._start(raw, opts || {});
      return this._compose(state);
    }

    /** Full search with live providers. Resolves with the final ResultSet. */
    search(raw, opts) {
      opts = opts || {};
      const seq = ++this.seq;
      const state = this._start(raw, opts);
      const emit = () => {
        if (seq !== this.seq) return null;
        const set = this._compose(state);
        if (opts.onUpdate) opts.onUpdate(set);
        return set;
      };
      emit();

      const jobs = this._jobs(state, opts);
      if (!jobs.length) return Promise.resolve(this._compose(state));

      return Promise.all(jobs.map(job => job.promise
        .then(res => { state.live[job.id] = res; })
        .catch(err => { state.errors.push({ source: job.id, message: String(err && err.message || err) }); })
        .then(() => { state.pending.delete(job.id); emit(); })
      )).then(() => this._compose(state));
    }

    _start(raw, opts) {
      const t0 = Date.now();
      const { q, correction } = this.analyze(raw, opts);
      const state = {
        t0, raw: String(raw == null ? '' : raw).trim(), q, correction,
        page: Math.max(1, parseInt(opts.page, 10) || 1),
        local: { results: [], corrections: [], navExact: false, topNorm: 0, topCoord: 0, siteScoped: [] },
        live: {}, pending: new Set(), errors: [], suggestion: null
      };
      if (!q.raw) return state;

      state.local = this.local.search(q);

      // Spelling: fuzzy matches were already scored; report the corrected query.
      if (!opts.exact && this.config.spellFix && state.local.corrections.length && state.local.results.length) {
        let fixed = correction ? correction.text : q.raw;
        for (const c of state.local.corrections) fixed = replaceWord(fixed, c.from, c.to);
        if (fixed !== q.raw) state.correction = { kind: correction ? 'layout' : 'spelling', text: fixed, original: state.raw };
      }

      // Text for live providers (corrected words applied).
      let liveText = q.free || q.raw;
      for (const c of state.local.corrections) liveText = replaceWord(liveText, c.from, c.to);
      state.liveText = liveText;

      // Video intent for the YouTube provider.
      const ytScoped = state.local.siteScoped.find(s => /(^|\.)youtube\.com$/.test(s.host));
      q.videoIntent = q.concepts.includes('video') || !!ytScoped || q.site === 'youtube.com';
      if (ytScoped && ytScoped.residual) state.ytText = ytScoped.residual;
      else {
        state.ytText = q.terms
          .filter(t => (t.kind === 'text' || t.kind === 'geo') && !t.toks.every(x => YT_WORDS.has(x)))
          .map(t => t.surface).join(' ') || (q.site === 'youtube.com' ? q.free : '');
      }

      // Words for highlighting.
      const hl = new Set();
      for (const t of q.terms) {
        if (t.kind === 'stop') continue;
        for (const tok of t.toks) { hl.add(tok); const s = T.stem(tok); if (s.length >= 3) hl.add(s); }
      }
      for (const c of state.local.corrections) hl.add(c.to);
      state.highlight = Array.from(hl);
      return state;
    }

    _jobs(state, opts) {
      const q = state.q, P = this.config.providers, jobs = [];
      if (!q.raw) return jobs;
      const ctxBase = { signal: opts.signal, page: state.page };
      const add = (id, provider, cfg, ctx) => {
        if (!provider || !cfg || !provider.shouldRun(q, cfg, ctx)) return;
        state.pending.add(id);
        jobs.push({ id, promise: Promise.resolve().then(() => provider.run(q, cfg, ctx)) });
      };

      const remoteCfg = P.remote;
      if (remoteCfg && remoteCfg.enabled && remoteCfg.mode === 'replace') {
        state.replace = true;
        add('remote', MSP.providers.remote, remoteCfg, Object.assign({ text: q.raw }, ctxBase));
        if (jobs.length) return jobs;
        state.replace = false;
      }

      add('wikipedia', MSP.providers.wikipedia, P.wikipedia, Object.assign({
        text: state.liveText,
        allowPanel: state.page === 1 && (!q.intent || q.geoOnly || state.local.topCoord < 1)
      }, ctxBase));
      add('youtube', MSP.providers.youtube, P.youtube, Object.assign({ text: state.ytText }, ctxBase));
      add('remote', MSP.providers.remote, remoteCfg, Object.assign({ text: q.raw }, ctxBase));
      return jobs;
    }

    /* ------------------------------------------------------------ blending */

    _wikiBase(state, wiki) {
      const q = state.q, local = state.local;
      if (local.navExact) return 0.6;
      if (q.geoOnly) return 0.9;
      if (q.intent) {
        // Intent queries ("NY news") belong to sites when the sites explain the whole query.
        if (local.topCoord >= 1) return 0.14;
        // "steve jobs" has the jobs intent, but Wikipedia has an article named exactly that:
        // it is an entity. "nurse jobs" has no such article, so job sites stay on top.
        const top = wiki.results[0];
        return top && MSP.providers.wikipedia.titleMatches(top.title, q) ? 0.92 : 0.25;
      }
      return U.clamp(0.97 - 0.55 * local.topNorm, 0.4, 0.97);
    }

    _compose(state) {
      const q = state.q, live = state.live, cfg = this.config;
      let items = [];

      const remoteOk = live.remote && live.remote.results && live.remote.results.length;
      const replaceMode = state.replace && (remoteOk || state.pending.has('remote'));

      if (q.url) {
        items.push({
          id: 'direct', kind: 'direct', source: 'direct', title: 'Go to ' + U.host(q.url),
          url: q.url, snippet: q.url, sitelinks: [], _s: 9
        });
      }

      if (!replaceMode) {
        for (const r of state.local.results) items.push(Object.assign({ _s: r.norm }, r));

        const wiki = live.wikipedia;
        if (wiki && wiki.results) {
          const base = this._wikiBase(state, wiki);
          wiki.results.forEach((r, i) => items.push(Object.assign({ _s: base * Math.pow(0.86, i) }, r)));
        }
        const yt = live.youtube;
        if (yt && yt.results) {
          const base = q.videoIntent ? 0.78 : 0.42;
          yt.results.forEach((r, i) => items.push(Object.assign({ _s: base * Math.pow(0.9, i) }, r)));
        }
      }
      if (remoteOk) {
        const w = cfg.providers.remote.weight || 1;
        for (const r of live.remote.results) items.push(Object.assign({}, r, { _s: replaceMode ? r.score : r.score * w }));
      }

      // A known site typed as a domain: show its rich local result first instead of "Go to".
      if (q.url) {
        const dk = U.canonicalUrl(q.url);
        const hit = items.find(it => it.source === 'local' && U.canonicalUrl(it.url) === dk);
        if (hit) { hit._s = 9; items = items.filter(it => it.kind !== 'direct'); }
      }

      // De-duplicate by canonical URL, keeping the best-scored copy.
      const seen = new Map();
      for (const it of items) {
        const key = U.canonicalUrl(it.url);
        const prev = seen.get(key);
        if (!prev || it._s > prev._s) seen.set(key, it);
      }
      items = Array.from(seen.values());

      // Knowledge panel (page 1 only); its article is not repeated in the list.
      let panel = null;
      if (state.page === 1 && live.wikipedia && live.wikipedia.panel && !replaceMode) {
        panel = live.wikipedia.panel;
        const pk = U.canonicalUrl(panel.url);
        items = items.filter(it => it.kind !== 'wiki' || U.canonicalUrl(it.url) !== pk);
      }

      items.sort((a, b) => b._s - a._s);

      const size = cfg.pageSize;
      const total = items.length;
      const pageCount = Math.max(1, Math.ceil(total / size));
      const page = Math.min(state.page, pageCount);

      let correction = state.correction;
      let suggestion = null;
      const wiki = live.wikipedia;
      if (wiki && wiki.corrected && !correction) correction = { kind: 'spelling', text: wiki.corrected, original: state.raw };
      else if (wiki && wiki.suggestion && !correction && !state.local.results.length) suggestion = wiki.suggestion;

      const sources = {};
      for (const it of items) sources[it.source] = (sources[it.source] || 0) + 1;

      return {
        query: state.raw,
        effectiveQuery: q.raw,
        correction,
        suggestion,
        panel,
        results: items.slice((page - 1) * size, page * size),
        total,
        page,
        pageCount,
        pending: Array.from(state.pending),
        errors: state.errors.slice(),
        highlight: state.highlight || [],
        understood: {
          lang: q.lang,
          geo: q.geo.map(c => ({ code: c, name: this.lex.placeName(c) })),
          concepts: q.concepts,
          intent: q.intent,
          site: q.site,
          category: q.category
        },
        sources,
        timeMs: Date.now() - state.t0
      };
    }
  }

  MSP.DEFAULT_CONFIG = DEFAULTS;
  MSP.Engine = Engine;
  MSP.createEngine = config => new Engine(config);
})(typeof globalThis !== 'undefined' ? globalThis : this);
