/*
 * MSP Search — YouTube provider.
 *
 * YouTube has no keyless search API. Two ways to enable this provider (config.js):
 *
 *   apiKey  A YouTube Data API v3 key restricted by HTTP referrer to your site.
 *           search.list costs 100 quota units, so the default 10,000 units/day
 *           allow ~100 searches/day. Results are cached per session to save quota.
 *   proxy   An endpoint you control (e.g. a TalkON route) that holds the key server-side:
 *             GET <proxy>?q=<text>&max=<n>&lang=<xx>
 *           It may return either the raw YouTube search.list JSON or
 *             { items: [{ id, title, channel, published, thumbnail, description }] }
 *
 * To protect the quota it only runs for video-intent queries ("cats video",
 * "youtube cats", "видео котики") unless trigger is set to 'always'.
 */
(function (root) {
  'use strict';

  const MSP = root.MSP;
  const U = MSP.util;
  let blockedUntil = 0;

  function normalize(item) {
    // raw search.list item
    if (item && item.snippet) {
      const s = item.snippet;
      const th = s.thumbnails || {};
      return {
        id: item.id && item.id.videoId,
        title: U.decodeEntities(s.title),
        description: U.decodeEntities(s.description),
        channel: U.decodeEntities(s.channelTitle),
        published: s.publishedAt,
        thumbnail: (th.medium || th.high || th.default || {}).url || null
      };
    }
    // simplified proxy format
    return {
      id: item.id, title: item.title, description: item.description, channel: item.channel,
      published: item.published, thumbnail: item.thumbnail
    };
  }

  const YouTube = {
    id: 'youtube',

    shouldRun(q, cfg, ctx) {
      if (!cfg.enabled || !(cfg.apiKey || cfg.proxy) || !ctx.text) return false;
      if (Date.now() < blockedUntil) return false;
      if (q.site && !/youtube\.com$/.test(q.site)) return false;
      return cfg.trigger === 'always' || !!q.videoIntent;
    },

    async run(q, cfg, ctx) {
      const max = U.clamp(cfg.limit || 4, 1, 10);
      const key = 'yt:' + max + ':' + q.lang + ':' + ctx.text;
      const cached = U.cache.get(key);
      if (cached) return cached;

      const url = cfg.proxy
        ? cfg.proxy + (cfg.proxy.includes('?') ? '&' : '?') + U.qs({ q: ctx.text, max: max, lang: q.lang })
        : 'https://www.googleapis.com/youtube/v3/search?' + U.qs({
          part: 'snippet', type: 'video', maxResults: max, q: ctx.text, key: cfg.apiKey,
          safeSearch: cfg.safeSearch || 'moderate', relevanceLanguage: q.lang
        });

      let data;
      try {
        data = await U.fetchJson(url, { timeoutMs: cfg.timeoutMs, signal: ctx.signal });
      } catch (e) {
        // 403 = quota exhausted or key/referrer rejected: stop calling for a while.
        if (e.status === 403 || e.status === 429) blockedUntil = Date.now() + 30 * 60000;
        throw e;
      }

      const out = {
        results: ((data && data.items) || []).map(normalize).filter(v => v.id).map(v => ({
          id: 'yt:' + v.id,
          kind: 'video',
          source: 'youtube',
          title: v.title,
          url: 'https://www.youtube.com/watch?v=' + encodeURIComponent(v.id),
          snippet: v.description || '',
          thumbnail: v.thumbnail,
          meta: [v.channel, v.published ? String(v.published).slice(0, 10) : ''].filter(Boolean).join(' · '),
          category: 'video',
          categoryLabel: 'YouTube',
          sitelinks: []
        }))
      };
      U.cache.set(key, out, (cfg.cacheMinutes || 60) * 60000);
      return out;
    }
  };

  MSP.providers.youtube = YouTube;
})(typeof globalThis !== 'undefined' ? globalThis : this);
