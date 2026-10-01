/*
 * MSP Search — remote provider (future TalkON / any server backend).
 *
 * Contract (version 1):
 *
 *   GET <endpoint>?q=<query>&lang=<xx>&page=<n>&v=1
 *
 *   200 application/json
 *   {
 *     "results": [
 *       { "title": "...", "url": "https://...", "snippet": "...",
 *         "score": 0.0-1.0,                       // optional, default 0.5
 *         "kind": "site|web|wiki|video|news",     // optional, default "web"
 *         "source": "talkon",                     // optional
 *         "thumbnail": "https://...",             // optional
 *         "category": "news", "categoryLabel": "News" }   // optional
 *     ]
 *   }
 *
 * mode "augment": results are blended with local/Wikipedia (score × weight).
 * mode "replace": the server owns ranking; the browser engine is only used as a
 *                 fallback when the server is down. The CORS policy of the server must
 *                 allow the site's origin.
 */
(function (root) {
  'use strict';

  const MSP = root.MSP;
  const U = MSP.util;

  const Remote = {
    id: 'remote',

    shouldRun(q, cfg) {
      return !!(cfg.enabled && cfg.endpoint && q.raw);
    },

    async run(q, cfg, ctx) {
      const url = cfg.endpoint + (cfg.endpoint.includes('?') ? '&' : '?') +
        U.qs({ q: ctx.text, lang: q.lang, page: ctx.page || 1, v: 1 });
      const data = await U.fetchJson(url, { timeoutMs: cfg.timeoutMs, signal: ctx.signal });
      const list = (data && Array.isArray(data.results)) ? data.results : [];
      return {
        results: list
          .filter(r => r && r.title && r.url && U.safeUrl(r.url) !== '#')
          .slice(0, 50)
          .map((r, i) => ({
            id: 'remote:' + i + ':' + r.url,
            kind: r.kind || 'web',
            source: r.source || 'remote',
            title: String(r.title),
            url: String(r.url),
            snippet: r.snippet ? String(r.snippet) : '',
            thumbnail: r.thumbnail || null,
            category: r.category || '',
            categoryLabel: r.categoryLabel || '',
            score: U.clamp(typeof r.score === 'number' ? r.score : 0.5, 0, 1),
            sitelinks: []
          }))
      };
    }
  };

  MSP.providers.remote = Remote;
})(typeof globalThis !== 'undefined' ? globalThis : this);
