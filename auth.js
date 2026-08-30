/**
 * auth.js — TalkON Account Module (v2 protocol)
 * Handles login/register via REST, JWT session persistence, WebSocket session
 * resume, and avatar replacement.
 *
 * Drop this <script> into every page EXCEPT index and search.
 *
 * Usage:
 *   <script src="auth.js"></script>
 *   On page load it restores the session from the stored JWT and swaps avatar
 *   placeholders.
 *
 * Protocol (server.py v2):
 *   • POST /auth/register          → { ok, text }
 *   • POST /auth/login             → { ok, token, username }
 *   • WS   wss://host/ws/v1        → banner, then { action: "session.resume", token }
 *   • Namespaced actions: user.set_avatar / user.get_avatar
 *                         user.set_profile / user.get_profile
 *   • Every request may carry req_id; the server echoes it back on the reply.
 *
 * For the settings account panel, see: settings-account-section.html
 */

const TalkONAuth = (() => {
  const HOST         = "talkon.duckdns.org:8766";
  const API_BASE     = `https://${HOST}`;
  const WS_URL       = `wss://${HOST}/ws/v1`;
  const PROTOCOL_V   = 1;

  const COOKIE_TOKEN = "talkon_token";
  const COOKIE_USER  = "talkon_user";
  const COOKIE_PASS  = "talkon_pass";   // legacy v1 — deleted on sight
  const AVATAR_CACHE = "talkon_avatar";

  const MAX_AVATAR_B64 = 256 * 1024;    // must match server MAX_AVATAR_B64

  // ── Error type ────────────────────────────────────────────────────────────
  // toString() returns just the message, so existing UI code that does
  // `el.textContent = err` keeps working, while `err.message` / `err.code`
  // are available for anything that wants them.

  class AuthError extends Error {
    constructor(message, code = "ERROR") {
      super(message);
      this.name = "AuthError";
      this.code = code;
    }
    toString() { return this.message; }
  }

  // ── Cookie helpers ────────────────────────────────────────────────────────

  function setCookie(name, value, days = 7) {
    const expires = new Date(Date.now() + days * 864e5).toUTCString();
    document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/; SameSite=Lax`;
  }

  function getCookie(name) {
    const match = document.cookie.match(new RegExp("(?:^|; )" + name + "=([^;]*)"));
    return match ? decodeURIComponent(match[1]) : null;
  }

  function deleteCookie(name) {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
  }

  // ── Token helpers ─────────────────────────────────────────────────────────

  function _decodeJWT(token) {
    try {
      const payload = token.split(".")[1];
      const json = atob(payload.replace(/-/g, "+").replace(/_/g, "/"));
      return JSON.parse(json);
    } catch { return null; }
  }

  function _tokenAlive(token) {
    if (!token) return false;
    const payload = _decodeJWT(token);
    if (!payload || !payload.exp) return false;
    return payload.exp * 1000 > Date.now();
  }

  function getToken() {
    const token = getCookie(COOKIE_TOKEN);
    return _tokenAlive(token) ? token : null;
  }

  function _clearSession() {
    deleteCookie(COOKIE_TOKEN);
    deleteCookie(COOKIE_USER);
    deleteCookie(COOKIE_PASS);
    try { sessionStorage.removeItem(AVATAR_CACHE); } catch {}
    window._talkon_avatar_b64 = null;
  }

  // ── Public API: session state ─────────────────────────────────────────────

  function isLoggedIn() {
    return !!getToken();
  }

  function getUsername() {
    return getToken() ? (getCookie(COOKIE_USER) || null) : null;
  }

  // ── REST helper ───────────────────────────────────────────────────────────

  /**
   * Call the REST API. Rejects with AuthError carrying the server's
   * machine-readable code when available.
   */
  async function _api(path, { method = "GET", body = null, auth = false } = {}) {
    const headers = {};
    if (body) headers["Content-Type"] = "application/json";
    if (auth) {
      const token = getToken();
      if (!token) throw new AuthError("Not logged in.", "NO_TOKEN");
      headers["Authorization"] = `Bearer ${token}`;
    }

    let res;
    try {
      res = await fetch(API_BASE + path, {
        method,
        headers,
        body: body ? JSON.stringify(body) : undefined,
      });
    } catch {
      throw new AuthError("Server unreachable — is TalkON running?", "NETWORK");
    }

    let data = null;
    try { data = await res.json(); } catch {}

    if (!res.ok) {
      // FastAPI wraps HTTPException detail: { detail: { code, text } }
      const detail = data && data.detail;
      const text =
        (detail && typeof detail === "object" && detail.text) ||
        (typeof detail === "string" && detail) ||
        `Request failed (HTTP ${res.status})`;
      const code =
        (detail && typeof detail === "object" && detail.code) || `HTTP_${res.status}`;
      throw new AuthError(text, code);
    }
    return data;
  }

  // ── WebSocket helpers ─────────────────────────────────────────────────────

  let _reqCounter = 0;
  function _nextReqId() {
    return `r${Date.now().toString(36)}${(++_reqCounter).toString(36)}`;
  }

  function _parse(raw) {
    try { return JSON.parse(raw); } catch { return null; }
  }

  function _send(ws, payload) {
    ws.send(JSON.stringify({ v: PROTOCOL_V, ...payload }));
  }

  /**
   * Open a WebSocket and resume the session with the stored JWT.
   * Resolves with { ws, username } once the server sends `session.resumed`
   * (which it emits last, after avatar / history / DM packets — so by then
   * the connection is fully ready).
   */
  function _openSession({ timeout = 10000 } = {}) {
    const token = getToken();
    if (!token) return Promise.reject(new AuthError("Not logged in.", "NO_TOKEN"));

    return new Promise((resolve, reject) => {
      let ws;
      try {
        ws = new WebSocket(WS_URL);
      } catch {
        reject(new AuthError("Could not open a WebSocket to the server.", "WS_ERROR"));
        return;
      }

      let settled     = false;
      let resumeSent  = false;

      const timer = setTimeout(() => {
        if (settled) return;
        settled = true;
        try { ws.close(); } catch {}
        reject(new AuthError("Connection timed out. Is the server running?", "TIMEOUT"));
      }, timeout);

      const fail = (err) => {
        if (settled) return;
        settled = true;
        clearTimeout(timer);
        try { ws.close(); } catch {}
        reject(err);
      };

      ws.addEventListener("message", (ev) => {
        const msg = _parse(ev.data);
        if (!msg) return;

        // 1. Server greets us first
        if (!resumeSent) {
          if (msg.type === "banner") {
            resumeSent = true;
            _send(ws, { action: "session.resume", token });
          }
          return;
        }

        // 2. Session established
        if (msg.type === "session.resumed") {
          if (settled) return;
          settled = true;
          clearTimeout(timer);
          _watchOwnAvatar(ws, msg.username || getCookie(COOKIE_USER));
          resolve({ ws, username: msg.username || getCookie(COOKIE_USER) });
          return;
        }

        // 3. Token rejected — drop the stale session
        if (!settled && msg.type === "error" &&
            (msg.code === "TOKEN_INVALID" || msg.code === "USER_NOT_FOUND")) {
          _clearSession();
          document.dispatchEvent(new CustomEvent("talkon:logout"));
          fail(new AuthError(msg.text || "Session expired — please sign in again.", msg.code));
        }
      });

      ws.addEventListener("error", () => {
        fail(new AuthError("WebSocket error — server unreachable.", "WS_ERROR"));
      });

      ws.addEventListener("close", () => {
        fail(new AuthError("Connection closed before the session was ready.", "WS_CLOSED"));
      });
    });
  }

  /**
   * Send one request over an established session socket and wait for the
   * matching reply, correlated by req_id.
   */
  function _request(ws, payload, { expect = ["ok"], timeout = 10000 } = {}) {
    return new Promise((resolve, reject) => {
      const req_id = _nextReqId();
      let done = false;

      const timer = setTimeout(() => {
        if (done) return;
        done = true;
        ws.removeEventListener("message", onMessage);
        reject(new AuthError("The server did not respond in time.", "TIMEOUT"));
      }, timeout);

      function settle(fn, value) {
        done = true;
        clearTimeout(timer);
        ws.removeEventListener("message", onMessage);
        fn(value);
      }

      function onMessage(ev) {
        if (done) return;
        const msg = _parse(ev.data);
        if (!msg || msg.req_id !== req_id) return;   // ignore broadcasts & other replies
        if (expect.includes(msg.type)) {
          settle(resolve, msg);
        } else if (msg.type === "error") {
          settle(reject, new AuthError(msg.text || "Unknown error", msg.code || "ERROR"));
        }
      }

      ws.addEventListener("message", onMessage);

      try {
        _send(ws, { ...payload, req_id });
      } catch {
        settle(reject, new AuthError("Failed to send request — connection lost.", "WS_CLOSED"));
      }
    });
  }

  /** Run one action on a short-lived authenticated socket. */
  async function _withSession(fn, opts) {
    const { ws, username } = await _openSession(opts);
    try {
      return await fn(ws, username);
    } finally {
      try { ws.close(); } catch {}
    }
  }

  // ── Avatar handling ───────────────────────────────────────────────────────

  function _cacheAvatar(base64png) {
    window._talkon_avatar_b64 = base64png;
    try { sessionStorage.setItem(AVATAR_CACHE, base64png); } catch {}
  }

  function _cachedAvatar() {
    try { return sessionStorage.getItem(AVATAR_CACHE); } catch { return null; }
  }

  /**
   * Collect all avatar-shaped elements on the page and swap them
   * to the base64 image returned by the server.
   */
  function _replaceAvatars(base64png) {
    if (!base64png) return;
    const src = `data:image/png;base64,${base64png}`;

    const selectors = [
      "#avatar",
      "#user-avatar",
      "#header-avatar",
      "#nav-avatar",
      "#acc-avatar-preview",
      ".user-avatar",
      ".avatar-img",
      ".acc-avatar-img",
      ".nav-avatar",
      "[data-avatar-placeholder]",
      ".account-avatar",
    ];

    selectors.forEach(sel => {
      document.querySelectorAll(sel).forEach(el => {
        if (el.tagName === "IMG") {
          el.src = src;
          el.removeAttribute("data-avatar-placeholder");
        } else {
          el.style.backgroundImage    = `url('${src}')`;
          el.style.backgroundSize     = "cover";
          el.style.backgroundPosition = "center";
        }
      });
    });

    _cacheAvatar(base64png);
    document.dispatchEvent(new CustomEvent("talkon:avatar", { detail: { src, data: base64png } }));
  }

  /** React to avatar packets the server pushes for us on this socket. */
  function _watchOwnAvatar(ws, username) {
    ws.addEventListener("message", (ev) => {
      const msg = _parse(ev.data);
      if (msg && msg.type === "avatar" && msg.username === username && msg.data) {
        _replaceAvatars(msg.data);
      }
    });
  }

  /** Fetch our avatar from the server in the background. Never throws. */
  async function _syncAvatar() {
    try {
      await _withSession(async (ws, username) => {
        try {
          const msg = await _request(ws,
            { action: "user.get_avatar", username },
            { expect: ["avatar"] });
          if (msg.data) _replaceAvatars(msg.data);
        } catch {
          // NOT_FOUND simply means no avatar uploaded yet
        }
      });
    } catch {
      // Offline or expired — auto-login already handled the cleanup
    }
  }

  // ── Public API: auth ──────────────────────────────────────────────────────

  /**
   * Log in with username + password.
   * Stores the JWT on success. Returns Promise<string> ok text.
   */
  async function login(username, password) {
    username = (username || "").trim();
    if (!username || !password) throw new AuthError("Username and password are required.");

    const data = await _api("/auth/login", {
      method: "POST",
      body: { username, password },
    });

    const name = data.username || username;
    setCookie(COOKIE_TOKEN, data.token);
    setCookie(COOKIE_USER, name);
    deleteCookie(COOKIE_PASS);   // never keep the v1 plaintext password around

    document.dispatchEvent(new CustomEvent("talkon:login", { detail: { username: name } }));

    const cached = _cachedAvatar();
    if (cached) _replaceAvatars(cached);
    _syncAvatar();               // fire-and-forget refresh

    return `Logged in as ${name}`;
  }

  /**
   * Register a new account.
   * Does NOT auto-login; call login() afterward.
   * Returns Promise<string> ok text.
   */
  async function register(username, password) {
    username = (username || "").trim();
    if (!username || !password)  throw new AuthError("Username and password are required.");
    if (password.length < 4)     throw new AuthError("Password must be at least 4 characters.");

    const data = await _api("/auth/register", {
      method: "POST",
      body: { username, password },
    });
    return data.text || `Registered as ${username}`;
  }

  /** Log out: clear the token, clear the cached avatar, fire event. */
  function logout() {
    _clearSession();
    document.dispatchEvent(new CustomEvent("talkon:logout"));
  }

  // ── Public API: profile ───────────────────────────────────────────────────

  /**
   * Upload a new avatar (PNG File object).
   * Returns Promise<string> ok text.
   */
  function setAvatar(file) {
    return new Promise((resolve, reject) => {
      if (!file) { reject(new AuthError("No file selected.")); return; }

      const reader = new FileReader();
      reader.onerror = () => reject(new AuthError("File read error."));
      reader.onload = async (e) => {
        const base64 = String(e.target.result).split(",")[1];
        if (!base64) { reject(new AuthError("Failed to read file.")); return; }
        if (base64.length > MAX_AVATAR_B64) {
          reject(new AuthError("Avatar too large (max 256 KB encoded).", "PAYLOAD_TOO_LARGE"));
          return;
        }

        try {
          const text = await _withSession(async (ws) => {
            const msg = await _request(ws, { action: "user.set_avatar", data: base64 });
            return msg.text || "Avatar updated";
          });
          _replaceAvatars(base64);
          resolve(text);
        } catch (err) {
          reject(err);
        }
      };
      reader.readAsDataURL(file);
    });
  }

  /**
   * Update profile bio.
   * Returns Promise<string> ok text.
   */
  function setProfile(description) {
    return _withSession(async (ws) => {
      const msg = await _request(ws, {
        action: "user.set_profile",
        description: description || "",
      });
      return msg.text || "Profile updated";
    });
  }

  /**
   * Fetch a profile (bio, posts, avatar). Defaults to our own.
   * Returns Promise<Object> profile data.
   */
  function getProfile(username) {
    return _withSession(async (ws, me) => {
      const target = (username || me || "").trim();
      if (!target) throw new AuthError("Not logged in.", "NO_TOKEN");
      const msg = await _request(ws,
        { action: "user.get_profile", username: target },
        { expect: ["profile"] });
      if (msg.avatar && target === me) _replaceAvatars(msg.avatar);
      return msg;
    });
  }

  /**
   * Upload a media file via REST. Returns Promise<{ media_id, url, type }>.
   */
  async function uploadMedia(file) {
    const token = getToken();
    if (!token) throw new AuthError("Not logged in.", "NO_TOKEN");

    const form = new FormData();
    form.append("file", file);

    let res;
    try {
      res = await fetch(`${API_BASE}/media/upload`, {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
        body: form,
      });
    } catch {
      throw new AuthError("Server unreachable — is TalkON running?", "NETWORK");
    }
    const data = await res.json().catch(() => null);
    if (!res.ok) {
      const detail = data && data.detail;
      throw new AuthError(
        (detail && detail.text) || `Upload failed (HTTP ${res.status})`,
        (detail && detail.code) || `HTTP_${res.status}`
      );
    }
    return data;
  }

  // ── Session restore on page load ──────────────────────────────────────────

  function _restoreSession() {
    deleteCookie(COOKIE_PASS);   // scrub any leftover v1 password cookie

    const token = getCookie(COOKIE_TOKEN);
    if (!token) return;

    if (!_tokenAlive(token)) {
      _clearSession();
      document.dispatchEvent(new CustomEvent("talkon:logout"));
      return;
    }

    const username = getCookie(COOKIE_USER);

    // Instant paint from the cached avatar, no network needed
    const cached = _cachedAvatar();
    if (cached) _replaceAvatars(cached);

    document.dispatchEvent(new CustomEvent("talkon:login", { detail: { username } }));

    // Validate with the server and pick up a fresh avatar in the background
    _syncAvatar();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", _restoreSession);
  } else {
    _restoreSession();
  }

  // ── Public interface ──────────────────────────────────────────────────────
  return {
    login, register, logout,
    isLoggedIn, getUsername, getToken,
    setAvatar, setProfile, getProfile, uploadMedia,
    API_BASE, WS_URL, AuthError,
  };
})();
