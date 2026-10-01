/*
 * MSP Search — core namespace, data registry and shared utilities.
 *
 * Every engine and data file attaches to the global `MSP` object, so the same files run
 * in the browser (plain <script> tags, no build step) and in Node (tools/, tests, or a
 * future server-side port).
 */
(function (root) {
  'use strict';

  const MSP = root.MSP = root.MSP || {};
  MSP.version = '2.0.0';
  MSP.providers = MSP.providers || {};

  /* ------------------------------------------------------------------ data registry */

  const data = MSP.data = MSP.data || {
    sites: [],          // site entries, see docs/ENGINE.md for the schema
    categories: {},     // id -> { id, label, concepts[] }
    categoryOrder: [],
    concepts: [],       // multilingual intent/topic lexicon
    places: [],         // gazetteer
    words: {}           // lang -> common words (used by keyboard-layout detection)
  };

  data.addCategories = function (list) {
    for (const c of list) {
      if (!data.categories[c.id]) data.categoryOrder.push(c.id);
      data.categories[c.id] = c;
    }
  };
  data.addSites = function (category, list) {
    for (const s of list) data.sites.push(Object.assign({ category: category }, s));
  };
  data.addConcepts = function (list) { Array.prototype.push.apply(data.concepts, list); };
  data.addPlaces = function (list) { Array.prototype.push.apply(data.places, list); };
  data.addWords = function (lang, text) {
    const arr = data.words[lang] || (data.words[lang] = []);
    for (const w of String(text).split(/\s+/)) if (w) arr.push(w);
  };

  /* ------------------------------------------------------------------ utilities */

  const util = MSP.util = {};
  const ENT = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };
  const NAMED = { quot: '"', amp: '&', lt: '<', gt: '>', apos: "'", nbsp: ' ' };

  util.escapeHtml = function (s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, c => ENT[c]);
  };

  util.decodeEntities = function (s) {
    return String(s == null ? '' : s)
      .replace(/&#(\d+);/g, (_, n) => safeCodePoint(+n))
      .replace(/&#x([0-9a-f]+);/gi, (_, n) => safeCodePoint(parseInt(n, 16)))
      .replace(/&(quot|amp|lt|gt|apos|nbsp);/g, (_, e) => NAMED[e]);
  };
  function safeCodePoint(n) {
    try { return String.fromCodePoint(n); } catch (e) { return ''; }
  }

  util.stripTags = function (s) {
    return util.decodeEntities(String(s == null ? '' : s).replace(/<[^>]*>/g, '')).replace(/\s+/g, ' ').trim();
  };

  /** Only http(s) URLs ever reach an href/src. Everything else becomes '#'. */
  util.safeUrl = function (u) {
    try {
      const x = new URL(String(u));
      return (x.protocol === 'https:' || x.protocol === 'http:') ? x.href : '#';
    } catch (e) { return '#'; }
  };

  util.host = function (u) {
    try { return new URL(String(u)).hostname.toLowerCase(); } catch (e) { return ''; }
  };

  /** "https://www.bbc.com/news/world" -> "bbc.com › news › world" */
  util.displayUrl = function (u) {
    try {
      const x = new URL(String(u));
      let path = x.pathname;
      try { path = decodeURIComponent(path); } catch (e) { /* keep raw */ }
      const parts = path.split('/').filter(Boolean).slice(0, 3)
        .map(p => (p.length > 28 ? p.slice(0, 27) + '…' : p));
      return x.hostname.replace(/^www\./, '') + (parts.length ? ' › ' + parts.join(' › ') : '');
    } catch (e) { return String(u || ''); }
  };

  /** Canonical form used to de-duplicate results coming from different providers. */
  util.canonicalUrl = function (u) {
    try {
      const x = new URL(String(u));
      return x.hostname.replace(/^www\./, '').toLowerCase() + x.pathname.replace(/\/+$/, '') + x.search;
    } catch (e) { return String(u || ''); }
  };

  util.qs = function (params) {
    return Object.keys(params)
      .filter(k => params[k] !== undefined && params[k] !== null && params[k] !== '')
      .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
      .join('&');
  };

  util.clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));

  util.isPlainObject = o => o !== null && typeof o === 'object' && !Array.isArray(o);

  /** Deep merge for config objects. Arrays and scalars from `b` replace those in `a`. */
  util.merge = function (a, b) {
    const out = Array.isArray(a) ? a.slice() : Object.assign({}, a);
    if (!util.isPlainObject(b)) return out;
    for (const k of Object.keys(b)) {
      out[k] = util.isPlainObject(a && a[k]) && util.isPlainObject(b[k]) ? util.merge(a[k], b[k]) : b[k];
    }
    return out;
  };

  /* Session cache (sessionStorage with an in-memory fallback). Saves API quota on reloads. */
  const mem = new Map();
  util.cache = {
    get(key) {
      let raw = mem.get(key);
      if (raw === undefined) {
        try { raw = root.sessionStorage ? root.sessionStorage.getItem('msp:' + key) : null; } catch (e) { raw = null; }
      }
      if (!raw) return null;
      try {
        const rec = JSON.parse(raw);
        return rec.exp > Date.now() ? rec.val : null;
      } catch (e) { return null; }
    },
    set(key, val, ttlMs) {
      const raw = JSON.stringify({ exp: Date.now() + (ttlMs || 0), val: val });
      mem.set(key, raw);
      try { if (root.sessionStorage) root.sessionStorage.setItem('msp:' + key, raw); } catch (e) { /* quota or disabled */ }
    }
  };

  /**
   * GET + JSON with timeout and abort support. No custom headers by default, so the
   * request stays a CORS "simple request" (no preflight) for public APIs.
   */
  util.fetchJson = function (url, opts) {
    opts = opts || {};
    if (typeof root.fetch !== 'function') return Promise.reject(new Error('fetch is not available'));
    const ctrl = typeof AbortController !== 'undefined' ? new AbortController() : null;
    const timer = setTimeout(() => { if (ctrl) ctrl.abort(); }, opts.timeoutMs || 5000);
    if (opts.signal && ctrl) {
      if (opts.signal.aborted) ctrl.abort();
      else opts.signal.addEventListener('abort', () => ctrl.abort(), { once: true });
    }
    return root.fetch(url, { signal: ctrl ? ctrl.signal : undefined, headers: opts.headers, credentials: 'omit' })
      .then(r => {
        if (!r.ok) {
          const err = new Error('HTTP ' + r.status);
          err.status = r.status;
          throw err;
        }
        return r.json();
      })
      .finally(() => clearTimeout(timer));
  };
})(typeof globalThis !== 'undefined' ? globalThis : this);
