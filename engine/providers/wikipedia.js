/*
 * MSP Search — Wikipedia provider (live, from the browser).
 *
 * Uses the public MediaWiki Action API with origin=* (anonymous CORS, no key, no
 * preflight). One request for the result list; a second one only when the top hit
 * deserves a knowledge panel. Responses are cached in sessionStorage.
 *
 * Language: the query's detected language (ru for Cyrillic, tr for Turkish words, …),
 * falling back to English when that wiki has nothing.
 */
(function (root) {
  'use strict';

  const MSP = root.MSP;
  const U = MSP.util, T = MSP.text;

  function articleUrl(lang, title) {
    const path = encodeURIComponent(String(title).replace(/ /g, '_')).replace(/%2F/g, '/').replace(/%3A/g, ':');
    return 'https://' + lang + '.wikipedia.org/wiki/' + path;
  }

  function api(lang, params) {
    return 'https://' + lang + '.wikipedia.org/w/api.php?' +
      U.qs(Object.assign({ format: 'json', formatversion: 2, origin: '*' }, params));
  }

  /** Does the article title answer the query directly? ("python" -> "Python (programming language)") */
  function titleMatches(title, q) {
    const tt = new Set(T.tokenize(String(title).replace(/\(.*?\)/g, ' ')).filter(t => !T.isStop(t)));
    const qt = (q.panelTokens || q.coreTokens).filter(t => !T.isStop(t));
    if (!qt.length || !tt.size) return false;
    const covered = qt.filter(t => tt.has(t) || Array.from(tt).some(x => T.stem(x) === T.stem(t))).length;
    return covered === qt.length && tt.size <= qt.length + 2;
  }

  const Wikipedia = {
    id: 'wikipedia',

    shouldRun(q, cfg) {
      if (!cfg.enabled || !q.free || q.url) return false;
      if (q.site && !/wikipedia\.org$/.test(q.site)) return false;
      if (q.category && q.category !== 'reference') return false;
      return true;
    },

    async run(q, cfg, ctx) {
      const pick = cfg.lang === 'auto' ? q.lang : cfg.lang;
      const lang = (cfg.languages || []).includes(pick) ? pick : 'en';
      let res = await this._search(lang, ctx.text, cfg, ctx);

      if (!res.results.length && res.suggestion) {
        const again = await this._search(lang, res.suggestion, cfg, ctx);
        if (again.results.length) { again.corrected = res.suggestion; res = again; }
      }
      if (!res.results.length && lang !== 'en') {
        const en = await this._search('en', ctx.text, cfg, ctx);
        if (en.results.length) res = en;
      }

      if (cfg.panel && ctx.allowPanel && res.results.length && titleMatches(res.results[0].title, q)) {
        try { res.panel = await this._panel(res.lang, res.results[0].title, cfg, ctx); } catch (e) { res.panel = null; }
      }
      return res;
    },

    async _search(lang, text, cfg, ctx) {
      const key = 'wiki:' + lang + ':' + cfg.limit + ':' + text;
      const cached = U.cache.get(key);
      if (cached) return cached;

      const data = await U.fetchJson(api(lang, {
        action: 'query', list: 'search', srsearch: text, srlimit: cfg.limit,
        srprop: 'snippet', srinfo: 'suggestion|totalhits', utf8: 1
      }), { timeoutMs: cfg.timeoutMs, signal: ctx.signal });

      const query = (data && data.query) || {};
      const info = query.searchinfo || {};
      const out = {
        lang: lang,
        total: info.totalhits || 0,
        suggestion: info.suggestion || null,
        results: (query.search || []).map(h => ({
          id: 'wiki:' + lang + ':' + h.pageid,
          kind: 'wiki',
          source: 'wikipedia',
          title: h.title,
          url: articleUrl(lang, h.title),
          snippet: U.stripTags(h.snippet) + '…',
          category: 'reference',
          categoryLabel: 'Wikipedia' + (lang !== 'en' ? ' (' + lang + ')' : ''),
          sitelinks: []
        }))
      };
      U.cache.set(key, out, (cfg.cacheMinutes || 30) * 60000);
      return out;
    },

    async _panel(lang, title, cfg, ctx) {
      const key = 'wikipanel:' + lang + ':' + title;
      const cached = U.cache.get(key);
      if (cached) return cached;

      const data = await U.fetchJson(api(lang, {
        action: 'query', prop: 'extracts|pageimages|description', titles: title, redirects: 1,
        exintro: 1, explaintext: 1, exsentences: 3, piprop: 'thumbnail', pithumbsize: 240
      }), { timeoutMs: cfg.timeoutMs, signal: ctx.signal });

      const page = data && data.query && data.query.pages && data.query.pages[0];
      if (!page || page.missing || !page.extract) return null;
      const panel = {
        title: page.title,
        description: page.description || '',
        extract: page.extract,
        thumbnail: page.thumbnail ? page.thumbnail.source : null,
        url: articleUrl(lang, page.title),
        source: 'Wikipedia',
        lang: lang
      };
      U.cache.set(key, panel, (cfg.cacheMinutes || 30) * 60000);
      return panel;
    }
  };

  Wikipedia.titleMatches = titleMatches;
  MSP.providers.wikipedia = Wikipedia;
})(typeof globalThis !== 'undefined' ? globalThis : this);
