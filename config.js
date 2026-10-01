/*
 * MSP Search configuration. Everything here is optional; defaults live in engine/engine.js.
 * This file is public (GitHub Pages), so never put a secret here that is not restricted.
 */
window.MSP_CONFIG = {
  pageSize: 10,

  // Slightly prefer sites from this region when the query names no place, e.g. 'TR' or 'DE'.
  // null = neutral. (Queries written in Russian/Turkish/German already prefer RU/TR/DE sites.)
  defaultRegion: null,

  layoutFix: true,   // "пщщпду" -> "google", "ghbdtn" -> "привет"
  spellFix: true,    // "yotube" -> "youtube"

  providers: {
    wikipedia: {
      enabled: true,
      lang: 'auto',      // 'auto' = language of the query, or a fixed code like 'en'
      limit: 8,
      panel: true        // knowledge panel for "what is X" style queries
    },

    youtube: {
      enabled: true,
      // Option A: a YouTube Data API v3 key. Restrict it in Google Cloud Console:
      //   Application restrictions -> Websites -> https://super1a1.github.io/*
      //   API restrictions         -> YouTube Data API v3 only
      // Each search costs 100 units; the free 10,000 units/day = ~100 searches/day.
      apiKey: '',
      // Option B (recommended later): your own endpoint that keeps the key on the server,
      // e.g. 'https://talkon.duckdns.org/api/youtube'. See docs/ENGINE.md for the format.
      proxy: '',
      trigger: 'intent', // 'intent' = only for video queries ("youtube cats", "cats video"); 'always'
      limit: 4
    },

    // Future TalkON search backend (see docs/ENGINE.md, "Remote backend contract").
    remote: {
      enabled: false,
      endpoint: '',      // e.g. 'https://talkon.duckdns.org/api/search'
      mode: 'augment',   // 'augment' = blend with local results, 'replace' = server ranks everything
      weight: 1
    }
  }
};
