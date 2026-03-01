// Website Links Database with Cookie Support
// This file contains all the links and their information for the search functionality

const DEFAULT_LINKS = [
    { 
        title: 'Wikipedia', 
        url: 'https://www.wikipedia.org',
        description: 'Free encyclopedia with millions of articles on nearly every topic.',
        category: 'Reference'
    },
    { 
        title: 'Internet Archive', 
        url: 'https://archive.org',
        description: 'Digital library with millions of free books, texts, audio and video files.',
        category: 'Library'
    },
    { 
        title: 'GitHub', 
        url: 'https://www.github.com',
        description: 'Where the world builds software. Millions of developers and companies use GitHub.',
        category: 'Development'
    },
    { 
        title: 'YouTube', 
        url: 'https://www.youtube.com',
        description: 'Share your videos with friends, family and the world.',
        category: 'Video'
    },
    { 
        title: 'Python', 
        url: 'https://www.python.org',
        description: 'The official home of the Python Programming Language.',
        category: 'Programming'
    }
];

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
    module.exports = { LINKS_DATABASE, saveLinksToCookie, DEFAULT_LINKS };
}

