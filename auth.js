/**
 * auth.js — TalkON Account Module
 * Handles login/register via WebSocket, cookie persistence, and avatar replacement.
 * Drop this <script> into every page EXCEPT index and search.
 *
 * Usage:
 *   <script src="auth.js"></script>
 *   On page load it auto-logs in from cookies and swaps avatar placeholders.
 *
 * For the settings account panel, see: settings-account-section.html
 */

const TalkONAuth = (() => {
  const WS_URL    = "ws://158.180.58.45:8765";
  const COOKIE_USER = "talkon_user";
  const COOKIE_PASS = "talkon_pass";

  // ── Cookie helpers ────────────────────────────────────────────────────────

  function setCookie(name, value, days = 365) {
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

  // ── Public API ────────────────────────────────────────────────────────────

  function isLoggedIn() {
    return !!(getCookie(COOKIE_USER) && getCookie(COOKIE_PASS));
  }

  function getUsername() {
    return getCookie(COOKIE_USER) || null;
  }

  /**
   * Open a WebSocket, wait for the banner, then send an action.
   * Returns a Promise that resolves with { ws, firstOkText } on success,
   * or rejects with an error message string on failure.
   *
   * @param {"login"|"register"} action
   * @param {string} username
   * @param {string} password
   */
  function _wsAction(action, username, password) {
    return new Promise((resolve, reject) => {
      const ws = new WebSocket(WS_URL);
      let bannerReceived = false;

      const timeout = setTimeout(() => {
        ws.close();
        reject("Connection timed out. Is the server running?");
      }, 8000);

      ws.onopen = () => {};

      ws.onmessage = (event) => {
        let msg;
        try { msg = JSON.parse(event.data); } catch { return; }

        // 1. Wait for the server banner first
        if (!bannerReceived) {
          if (msg.type === "banner") {
            bannerReceived = true;
            ws.send(JSON.stringify({ action, username, password }));
          }
          return;
        }

        // 2. Handle response to our action
        if (msg.type === "ok") {
          clearTimeout(timeout);
          resolve({ ws, text: msg.text });
        } else if (msg.type === "error") {
          clearTimeout(timeout);
          ws.close();
          reject(msg.text || "Unknown error");
        }
      };

      ws.onerror = () => {
        clearTimeout(timeout);
        reject("WebSocket error — server unreachable.");
      };

      ws.onclose = (e) => {
        clearTimeout(timeout);
        // If we never resolved, treat as failure
      };
    });
  }

  /**
   * Collect all avatar-shaped elements on the page and swap them
   * to the base64 image returned by the server.
   */
  function _replaceAvatars(base64png) {
    if (!base64png) return;
    const src = `data:image/png;base64,${base64png}`;

    // Target common avatar selectors used in chat/UI themes
    const selectors = [
      "#user-avatar",
      "#header-avatar",
      "#nav-avatar",
      ".user-avatar",
      ".avatar-img",
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
          // div/span: set as background
          el.style.backgroundImage = `url('${src}')`;
          el.style.backgroundSize  = "cover";
          el.style.backgroundPosition = "center";
        }
      });
    });

    // Also store for other scripts to read
    window._talkon_avatar_b64 = base64png;

    // Fire a custom event so other scripts can react
    document.dispatchEvent(new CustomEvent("talkon:avatar", { detail: { src } }));
  }

  /**
   * Listen on the WS for the avatar packet that the server auto-pushes
   * after a successful login.
   */
  function _listenForOwnAvatar(ws, username) {
    ws.addEventListener("message", (event) => {
      let msg;
      try { msg = JSON.parse(event.data); } catch { return; }
      if (msg.type === "avatar" && msg.username === username && msg.data) {
        _replaceAvatars(msg.data);
        // Persist avatar in sessionStorage so other pages can pick it up
        try { sessionStorage.setItem("talkon_avatar", msg.data); } catch {}
        ws.close(); // We're done — auth.js doesn't manage the chat WS
      }
    });
  }

  /**
   * Login with username + password.
   * Stores credentials in cookies on success.
   * Returns Promise<string> — resolves with server ok text or rejects with error.
   */
  async function login(username, password) {
    username = username.trim();
    if (!username || !password) throw "Username and password are required.";

    const { ws, text } = await _wsAction("login", username, password);

    // Persist credentials
    setCookie(COOKIE_USER, username);
    setCookie(COOKIE_PASS, password);

    // Wait briefly for the server to push the avatar packet
    _listenForOwnAvatar(ws, username);

    // Fire login event for UI to react
    document.dispatchEvent(new CustomEvent("talkon:login", { detail: { username } }));

    return text;
  }

  /**
   * Register a new account.
   * Returns Promise<string> — resolves with ok text or rejects with error.
   * Does NOT auto-login; call login() afterward.
   */
  async function register(username, password) {
    username = username.trim();
    if (!username || !password) throw "Username and password are required.";
    if (password.length < 4)    throw "Password must be at least 4 characters.";

    const { ws, text } = await _wsAction("register", username, password);
    ws.close();
    return text;
  }

  /**
   * Logout: clear cookies, clear cached avatar, fire event.
   */
  function logout() {
    deleteCookie(COOKIE_USER);
    deleteCookie(COOKIE_PASS);
    try { sessionStorage.removeItem("talkon_avatar"); } catch {}
    window._talkon_avatar_b64 = null;
    document.dispatchEvent(new CustomEvent("talkon:logout"));
  }

  /**
   * Helper: open a short-lived WS to run a single authenticated action.
   * Useful for set_avatar, set_profile, get_profile, etc.
   *
   * @param {Function} onReady  Called with the ws once login is confirmed.
   * Returns Promise that resolves when onReady calls resolve(value).
   */
  function _authedWS(onReady) {
    const username = getCookie(COOKIE_USER);
    const password = getCookie(COOKIE_PASS);
    if (!username || !password) return Promise.reject("Not logged in.");

    return new Promise((resolve, reject) => {
      const ws = new WebSocket(WS_URL);
      let bannerReceived = false;
      let loginDone      = false;

      const timeout = setTimeout(() => { ws.close(); reject("Timeout"); }, 10000);

      ws.onmessage = (event) => {
        let msg;
        try { msg = JSON.parse(event.data); } catch { return; }

        if (!bannerReceived) {
          if (msg.type === "banner") {
            bannerReceived = true;
            ws.send(JSON.stringify({ action: "login", username, password }));
          }
          return;
        }

        if (!loginDone) {
          if (msg.type === "ok") {
            loginDone = true;
            clearTimeout(timeout);
            // Drain system/history/avatar packets, then call onReady
            setTimeout(() => {
              onReady(ws, resolve, reject);
            }, 300);
          } else if (msg.type === "error") {
            clearTimeout(timeout);
            ws.close();
            reject(msg.text);
          }
          return;
        }
      };

      ws.onerror = () => { clearTimeout(timeout); reject("Connection error"); };
    });
  }

  /**
   * Upload a new avatar (PNG File object).
   * Returns Promise<string> ok text.
   */
  function setAvatar(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const base64 = e.target.result.split(",")[1];
        if (!base64) { reject("Failed to read file"); return; }

        _authedWS((ws, res, rej) => {
          ws.send(JSON.stringify({ action: "set_avatar", data: base64 }));

          ws.addEventListener("message", (ev) => {
            let msg;
            try { msg = JSON.parse(ev.data); } catch { return; }
            if (msg.type === "ok") {
              _replaceAvatars(base64);
              try { sessionStorage.setItem("talkon_avatar", base64); } catch {}
              ws.close();
              res(msg.text);
            } else if (msg.type === "error") {
              ws.close();
              rej(msg.text);
            }
          });
        }).then(resolve).catch(reject);
      };
      reader.onerror = () => reject("File read error");
      reader.readAsDataURL(file);
    });
  }

  /**
   * Update profile bio.
   * Returns Promise<string> ok text.
   */
  function setProfile(description) {
    return _authedWS((ws, resolve, reject) => {
      ws.send(JSON.stringify({ action: "set_profile", description }));
      ws.addEventListener("message", (ev) => {
        let msg;
        try { msg = JSON.parse(ev.data); } catch { return; }
        if (msg.type === "ok")    { ws.close(); resolve(msg.text); }
        if (msg.type === "error") { ws.close(); reject(msg.text); }
      });
    });
  }

  /**
   * Fetch own profile (bio, posts, avatar).
   * Returns Promise<Object> profile data.
   */
  function getProfile() {
    const username = getCookie(COOKIE_USER);
    if (!username) return Promise.reject("Not logged in.");

    return _authedWS((ws, resolve, reject) => {
      ws.send(JSON.stringify({ action: "get_profile", username }));
      ws.addEventListener("message", (ev) => {
        let msg;
        try { msg = JSON.parse(ev.data); } catch { return; }
        if (msg.type === "profile") { ws.close(); resolve(msg); }
        if (msg.type === "error")   { ws.close(); reject(msg.text); }
      });
    });
  }

  // ── Auto-login on page load ───────────────────────────────────────────────

  function _autoLogin() {
    const username = getCookie(COOKIE_USER);
    const password = getCookie(COOKIE_PASS);
    if (!username || !password) return;

    // Try cached avatar from sessionStorage first (instant, no WS needed)
    const cached = (() => { try { return sessionStorage.getItem("talkon_avatar"); } catch { return null; } })();
    if (cached) _replaceAvatars(cached);

    // Validate session with server in background & get fresh avatar
    const ws = new WebSocket(WS_URL);
    let bannerDone = false;
    let loginDone  = false;

    ws.onmessage = (event) => {
      let msg;
      try { msg = JSON.parse(event.data); } catch { return; }

      if (!bannerDone) {
        if (msg.type === "banner") {
          bannerDone = true;
          ws.send(JSON.stringify({ action: "login", username, password }));
        }
        return;
      }

      if (!loginDone) {
        if (msg.type === "ok") {
          loginDone = true;
          document.dispatchEvent(new CustomEvent("talkon:login", { detail: { username } }));
        } else if (msg.type === "error") {
          // Credentials invalid — clear stale cookies
          deleteCookie(COOKIE_USER);
          deleteCookie(COOKIE_PASS);
          ws.close();
          document.dispatchEvent(new CustomEvent("talkon:logout"));
        }
        return;
      }

      // After login, listen for auto-pushed avatar
      if (msg.type === "avatar" && msg.username === username && msg.data) {
        _replaceAvatars(msg.data);
        try { sessionStorage.setItem("talkon_avatar", msg.data); } catch {}
        ws.close();
      }

      // Close after system packet (joined #general) — no avatar stored is fine
      if (msg.type === "system" && loginDone) {
        setTimeout(() => { try { ws.close(); } catch {} }, 1000);
      }
    };

    ws.onerror = () => { try { ws.close(); } catch {} };
  }

  // Run on DOM ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", _autoLogin);
  } else {
    _autoLogin();
  }

  // ── Public interface ──────────────────────────────────────────────────────
  return { login, register, logout, isLoggedIn, getUsername, setAvatar, setProfile, getProfile };
})();
