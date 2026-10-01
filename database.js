/*
 * database.js — start-page link storage used by index.html.
 *
 * The search database moved to data/ (one file per area, see docs/ENGINE.md) and the
 * ~1000 template Wikipedia entries were replaced by live Wikipedia results.
 * POPULAR_SITES_DATABASE is kept for backwards compatibility: it lists the curated sites
 * when the search data is loaded on the page, and is empty otherwise.
 */
const DEFAULT_LINKS = [];

const POPULAR_SITES_DATABASE = (typeof MSP !== 'undefined' && MSP.data && MSP.data.sites)
    ? MSP.data.sites.map(s => ({
        title: s.title,
        url: s.url,
        description: s.desc || '',
        type: (MSP.data.categories[s.category] || {}).label || s.category
    }))
    : [];

// Get links from cookie or use default
function getLinksDatabaseFromCookie() {
    const cookieLinks = getCookie('customLinks');
    if (cookieLinks) {
        try {
            return JSON.parse(decodeURIComponent(cookieLinks));
        } catch (e) {
            return DEFAULT_LINKS;
        }
    }
    return DEFAULT_LINKS;
}

// Save links to cookie
function saveLinksToCookie(links) {
    const d = new Date();
    d.setTime(d.getTime() + (30*24*60*60*1000));
    document.cookie = "customLinks=" + encodeURIComponent(JSON.stringify(links)) + ";" + "expires="+ d.toUTCString() + ";path=/";
}

// Cookie helper function
function getCookie(name) {
    const cname = name + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i].trim();
        if (c.indexOf(cname) === 0) return c.substring(cname.length, c.length);
    }
    return "";
}

// Get the actual database (will use cookie if available)
const LINKS_DATABASE = getLinksDatabaseFromCookie();

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { LINKS_DATABASE, saveLinksToCookie, DEFAULT_LINKS, ORIGINAL_DEFAULT_LINKS: POPULAR_SITES_DATABASE, POPULAR_SITES_DATABASE };
}
