// Website Links Database - Google-like Structure
// Rich metadata for enhanced search and discovery

const DEFAULT_LINKS = [];

// POPULAR_SITES_DATABASE - Organized like Google Knowledge Graph
// Each site has: title, url, description, category, tags, rating, popularity, icon, type, founded, country
const POPULAR_SITES_DATABASE = [
    // ============ SEARCH ENGINES ============
    {
        title: 'Google',
        url: 'https://www.google.com',
        description: 'Search the world\'s information, including webpages, images, and more.',
        category: 'Search',
        tags: ['search', 'engine', 'web', 'information'],
        rating: 5,
        popularity: 5,
        icon: '🔍',
        type: 'Search Engine',
        founded: 1998,
        country: 'USA'
    },
    {
        title: 'Bing',
        url: 'https://www.bing.com',
        description: 'Microsoft\'s search engine with visual search capabilities.',
        category: 'Search',
        tags: ['search', 'microsoft', 'engine'],
        rating: 4,
        popularity: 3,
        icon: '🔎',
        type: 'Search Engine',
        founded: 2009,
        country: 'USA'
    },
    {
        title: 'DuckDuckGo',
        url: 'https://duckduckgo.com',
        description: 'Privacy-focused search engine that doesn\'t track you.',
        category: 'Search',
        tags: ['search', 'privacy', 'anonymous'],
        rating: 4,
        popularity: 3,
        icon: '🦆',
        type: 'Search Engine',
        founded: 2008,
        country: 'USA'
    },

    // ============ SOCIAL MEDIA ============
    {
        title: 'Facebook',
        url: 'https://www.facebook.com',
        description: 'Connect with friends and family, share photos and messages.',
        category: 'Social',
        tags: ['social', 'network', 'friends', 'messaging'],
        rating: 4,
        popularity: 5,
        icon: 'f',
        type: 'Social Network',
        founded: 2004,
        country: 'USA'
    },
    {
        title: 'Instagram',
        url: 'https://www.instagram.com',
        description: 'Share photos and videos with your followers.',
        category: 'Social',
        tags: ['social', 'photos', 'video', 'stories'],
        rating: 4,
        popularity: 5,
        icon: '📸',
        type: 'Social Network',
        founded: 2010,
        country: 'USA'
    },
    {
        title: 'Twitter/X',
        url: 'https://www.twitter.com',
        description: 'Share and discover what\'s happening in the world right now.',
        category: 'Social',
        tags: ['social', 'tweets', 'trending', 'news'],
        rating: 3,
        popularity: 4,
        icon: '𝕏',
        type: 'Social Network',
        founded: 2006,
        country: 'USA'
    },
    {
        title: 'TikTok',
        url: 'https://www.tiktok.com',
        description: 'Discover and create short-form videos.',
        category: 'Social',
        tags: ['social', 'video', 'short-form', 'trends'],
        rating: 4,
        popularity: 5,
        icon: '🎵',
        type: 'Social Network',
        founded: 2016,
        country: 'China'
    },
    {
        title: 'LinkedIn',
        url: 'https://www.linkedin.com',
        description: 'Professional networking and job search platform.',
        category: 'Social',
        tags: ['professional', 'networking', 'jobs', 'career'],
        rating: 4,
        popularity: 4,
        icon: '💼',
        type: 'Professional Network',
        founded: 2003,
        country: 'USA'
    },
    {
        title: 'Reddit',
        url: 'https://www.reddit.com',
        description: 'The front page of the internet - Communities and discussions.',
        category: 'Social',
        tags: ['community', 'forum', 'discussion', 'memes'],
        rating: 4,
        popularity: 4,
        icon: '🤖',
        type: 'Social Community',
        founded: 2005,
        country: 'USA'
    },
    {
        title: 'Discord',
        url: 'https://discord.com',
        description: 'All-in-one voice, video, and text chat platform.',
        category: 'Social',
        tags: ['chat', 'voice', 'gaming', 'community'],
        rating: 4,
        popularity: 4,
        icon: '💬',
        type: 'Communication',
        founded: 2015,
        country: 'USA'
    },

    // ============ VIDEO PLATFORMS ============
    {
        title: 'YouTube',
        url: 'https://www.youtube.com',
        description: 'Watch, upload, share and discover videos worldwide.',
        category: 'Video',
        tags: ['video', 'streaming', 'entertainment', 'music'],
        rating: 5,
        popularity: 5,
        icon: '▶️',
        type: 'Video Platform',
        founded: 2005,
        country: 'USA'
    },
    {
        title: 'Netflix',
        url: 'https://www.netflix.com',
        description: 'Stream movies and TV shows on demand.',
        category: 'Video',
        tags: ['streaming', 'movies', 'series', 'entertainment'],
        rating: 4,
        popularity: 5,
        icon: '🎬',
        type: 'Streaming Service',
        founded: 1997,
        country: 'USA'
    },
    {
        title: 'Twitch',
        url: 'https://www.twitch.tv',
        description: 'Live streaming platform for gamers and creators.',
        category: 'Video',
        tags: ['streaming', 'live', 'gaming', 'creators'],
        rating: 4,
        popularity: 4,
        icon: '🎮',
        type: 'Live Streaming',
        founded: 2011,
        country: 'USA'
    },

    // ============ SHOPPING ============
    {
        title: 'Amazon',
        url: 'https://www.amazon.com',
        description: 'Earth\'s biggest selection of products with fast shipping.',
        category: 'Shopping',
        tags: ['ecommerce', 'shopping', 'delivery', 'products'],
        rating: 4,
        popularity: 5,
        icon: '🛍️',
        type: 'Ecommerce',
        founded: 1994,
        country: 'USA'
    },
    {
        title: 'eBay',
        url: 'https://www.ebay.com',
        description: 'Buy and sell items in online auctions and fixed price sales.',
        category: 'Shopping',
        tags: ['ecommerce', 'auctions', 'marketplace'],
        rating: 4,
        popularity: 4,
        icon: '🏪',
        type: 'Marketplace',
        founded: 1995,
        country: 'USA'
    },
    {
        title: 'Etsy',
        url: 'https://www.etsy.com',
        description: 'Marketplace for unique, handmade, and vintage items.',
        category: 'Shopping',
        tags: ['handmade', 'marketplace', 'vintage', 'crafts'],
        rating: 4,
        popularity: 3,
        icon: '🎨',
        type: 'Marketplace',
        founded: 2005,
        country: 'USA'
    },

    // ============ PROGRAMMING & DEVELOPMENT ============
    {
        title: 'GitHub',
        url: 'https://www.github.com',
        description: 'Where the world builds software. Version control & collaboration.',
        category: 'Development',
        tags: ['coding', 'git', 'repositories', 'open-source'],
        rating: 5,
        popularity: 5,
        icon: '💻',
        type: 'Code Repository',
        founded: 2008,
        country: 'USA'
    },
    {
        title: 'Stack Overflow',
        url: 'https://stackoverflow.com',
        description: 'Q&A community for programmers of all levels.',
        category: 'Development',
        tags: ['programming', 'qa', 'help', 'coding'],
        rating: 5,
        popularity: 5,
        icon: '❓',
        type: 'Q&A Platform',
        founded: 2008,
        country: 'USA'
    },
    {
        title: 'React',
        url: 'https://react.dev',
        description: 'JavaScript library for building user interfaces.',
        category: 'Programming',
        tags: ['javascript', 'framework', 'frontend', 'library'],
        rating: 5,
        popularity: 5,
        icon: '⚛️',
        type: 'JavaScript Framework',
        founded: 2013,
        country: 'USA'
    },
    {
        title: 'Node.js',
        url: 'https://nodejs.org',
        description: 'JavaScript runtime built on Chrome\'s V8 engine.',
        category: 'Programming',
        tags: ['javascript', 'runtime', 'backend', 'server'],
        rating: 5,
        popularity: 5,
        icon: '🟢',
        type: 'Runtime',
        founded: 2009,
        country: 'USA'
    },
    {
        title: 'Python',
        url: 'https://www.python.org',
        description: 'Powerful programming language that\'s easy to learn.',
        category: 'Programming',
        tags: ['programming', 'language', 'ai', 'data-science'],
        rating: 5,
        popularity: 5,
        icon: '🐍',
        type: 'Programming Language',
        founded: 1990,
        country: 'Netherlands'
    },
    {
        title: 'Django',
        url: 'https://www.djangoproject.com',
        description: 'High-level Python web framework for rapid development.',
        category: 'Programming',
        tags: ['python', 'framework', 'web', 'backend'],
        rating: 4,
        popularity: 4,
        icon: '🎯',
        type: 'Python Framework',
        founded: 2005,
        country: 'USA'
    },

    // ============ CLOUD SERVICES ============
    {
        title: 'AWS',
        url: 'https://aws.amazon.com',
        description: 'Amazon Web Services - Cloud computing solutions.',
        category: 'Cloud',
        tags: ['cloud', 'hosting', 'servers', 'infrastructure'],
        rating: 5,
        popularity: 5,
        icon: '☁️',
        type: 'Cloud Platform',
        founded: 2006,
        country: 'USA'
    },
    {
        title: 'Google Cloud',
        url: 'https://cloud.google.com',
        description: 'Google\'s cloud computing platform.',
        category: 'Cloud',
        tags: ['cloud', 'hosting', 'google', 'infrastructure'],
        rating: 4,
        popularity: 4,
        icon: '☁️',
        type: 'Cloud Platform',
        founded: 2008,
        country: 'USA'
    },
    {
        title: 'Microsoft Azure',
        url: 'https://azure.microsoft.com',
        description: 'Microsoft\'s cloud computing services.',
        category: 'Cloud',
        tags: ['cloud', 'microsoft', 'hosting', 'infrastructure'],
        rating: 4,
        popularity: 4,
        icon: '☁️',
        type: 'Cloud Platform',
        founded: 2010,
        country: 'USA'
    },

    // ============ DESIGN ============
    {
        title: 'Figma',
        url: 'https://www.figma.com',
        description: 'Collaborative interface design tool in the browser.',
        category: 'Design',
        tags: ['design', 'ui', 'collaboration', 'prototyping'],
        rating: 5,
        popularity: 5,
        icon: '🎨',
        type: 'Design Tool',
        founded: 2012,
        country: 'USA'
    },
    {
        title: 'Canva',
        url: 'https://www.canva.com',
        description: 'Easy-to-use design tool for creating graphics and content.',
        category: 'Design',
        tags: ['design', 'graphics', 'templates', 'creative'],
        rating: 4,
        popularity: 4,
        icon: '🖼️',
        type: 'Design Tool',
        founded: 2013,
        country: 'Australia'
    },
    {
        title: 'Adobe Creative Cloud',
        url: 'https://www.adobe.com',
        description: 'Professional design software suite (Photoshop, Illustrator, etc).',
        category: 'Design',
        tags: ['design', 'professional', 'creative', 'editing'],
        rating: 5,
        popularity: 5,
        icon: '🎬',
        type: 'Software Suite',
        founded: 1982,
        country: 'USA'
    },

    // ============ PRODUCTIVITY ============
    {
        title: 'Notion',
        url: 'https://www.notion.so',
        description: 'All-in-one workspace for notes, databases, and collaboration.',
        category: 'Productivity',
        tags: ['productivity', 'notes', 'collaboration', 'workspace'],
        rating: 4,
        popularity: 4,
        icon: '📝',
        type: 'Workspace',
        founded: 2016,
        country: 'USA'
    },
    {
        title: 'Slack',
        url: 'https://slack.com',
        description: 'Team communication and collaboration platform.',
        category: 'Productivity',
        tags: ['communication', 'team', 'messaging', 'collaboration'],
        rating: 4,
        popularity: 4,
        icon: '💬',
        type: 'Communication',
        founded: 2013,
        country: 'USA'
    },
    {
        title: 'Trello',
        url: 'https://trello.com',
        description: 'Visual project management tool using boards and cards.',
        category: 'Productivity',
        tags: ['project', 'management', 'planning', 'tasks'],
        rating: 4,
        popularity: 4,
        icon: '📋',
        type: 'Project Management',
        founded: 2011,
        country: 'USA'
    },
    {
        title: 'Zoom',
        url: 'https://zoom.us',
        description: 'Video conferencing and online meeting platform.',
        category: 'Productivity',
        tags: ['video', 'conference', 'meeting', 'communication'],
        rating: 4,
        popularity: 5,
        icon: '📹',
        type: 'Video Conferencing',
        founded: 2011,
        country: 'USA'
    },

    // ============ EDUCATION ============
    {
        title: 'Coursera',
        url: 'https://www.coursera.org',
        description: 'Learn from top universities and companies online.',
        category: 'Education',
        tags: ['learning', 'courses', 'education', 'certificates'],
        rating: 4,
        popularity: 4,
        icon: '📚',
        type: 'Learning Platform',
        founded: 2012,
        country: 'USA'
    },
    {
        title: 'Udemy',
        url: 'https://www.udemy.com',
        description: 'Online learning courses on thousands of topics.',
        category: 'Education',
        tags: ['learning', 'courses', 'skills', 'teaching'],
        rating: 4,
        popularity: 4,
        icon: '🎓',
        type: 'Learning Platform',
        founded: 2010,
        country: 'USA'
    },
    {
        title: 'Khan Academy',
        url: 'https://www.khanacademy.org',
        description: 'Free educational resources for students of all ages.',
        category: 'Education',
        tags: ['education', 'free', 'learning', 'students'],
        rating: 5,
        popularity: 4,
        icon: '📖',
        type: 'Learning Platform',
        founded: 2008,
        country: 'USA'
    },
    {
        title: 'Codecademy',
        url: 'https://www.codecademy.com',
        description: 'Interactive platform to learn coding skills.',
        category: 'Education',
        tags: ['coding', 'programming', 'learning', 'interactive'],
        rating: 4,
        popularity: 3,
        icon: '💻',
        type: 'Learning Platform',
        founded: 2011,
        country: 'USA'
    },

    // ============ NEWS & MEDIA ============
    {
        title: 'BBC',
        url: 'https://www.bbc.com',
        description: 'Breaking news, world news and UK news from the BBC.',
        category: 'News',
        tags: ['news', 'media', 'journalism', 'world'],
        rating: 5,
        popularity: 5,
        icon: '📰',
        type: 'News Media',
        founded: 1922,
        country: 'UK'
    },
    {
        title: 'CNN',
        url: 'https://www.cnn.com',
        description: 'International news and breaking news stories.',
        category: 'News',
        tags: ['news', 'media', 'world', 'breaking'],
        rating: 4,
        popularity: 4,
        icon: '📺',
        type: 'News Network',
        founded: 1980,
        country: 'USA'
    },
    {
        title: 'The New York Times',
        url: 'https://www.nytimes.com',
        description: 'Breaking news, world news and multimedia stories.',
        category: 'News',
        tags: ['news', 'journalism', 'world', 'politics'],
        rating: 5,
        popularity: 4,
        icon: '📄',
        type: 'News Publication',
        founded: 1851,
        country: 'USA'
    },
    {
        title: 'Medium',
        url: 'https://medium.com',
        description: 'Platform for writers and publications to share stories.',
        category: 'News',
        tags: ['writing', 'stories', 'blogs', 'publishing'],
        rating: 4,
        popularity: 4,
        icon: '✍️',
        type: 'Publishing Platform',
        founded: 2012,
        country: 'USA'
    },

    // ============ ENTERTAINMENT ============
    {
        title: 'IMDb',
        url: 'https://www.imdb.com',
        description: 'The internet\'s most popular database of movies and TV shows.',
        category: 'Entertainment',
        tags: ['movies', 'tv', 'ratings', 'database'],
        rating: 5,
        popularity: 5,
        icon: '🎬',
        type: 'Database',
        founded: 1990,
        country: 'USA'
    },
    {
        title: 'Goodreads',
        url: 'https://www.goodreads.com',
        description: 'Social network for readers to discover and share books.',
        category: 'Entertainment',
        tags: ['books', 'reading', 'reviews', 'social'],
        rating: 4,
        popularity: 3,
        icon: '📚',
        type: 'Social Network',
        founded: 2006,
        country: 'USA'
    },

    // ============ MUSIC ============
    {
        title: 'Spotify',
        url: 'https://www.spotify.com',
        description: 'Stream millions of songs and podcasts.',
        category: 'Music',
        tags: ['music', 'streaming', 'audio', 'podcasts'],
        rating: 4,
        popularity: 5,
        icon: '🎵',
        type: 'Streaming Service',
        founded: 2008,
        country: 'Sweden'
    },
    {
        title: 'Apple Music',
        url: 'https://music.apple.com',
        description: 'Apple\'s music streaming service with millions of songs.',
        category: 'Music',
        tags: ['music', 'streaming', 'apple', 'audio'],
        rating: 4,
        popularity: 4,
        icon: '🎧',
        type: 'Streaming Service',
        founded: 2015,
        country: 'USA'
    },
    {
        title: 'YouTube Music',
        url: 'https://music.youtube.com',
        description: 'YouTube\'s music streaming service.',
        category: 'Music',
        tags: ['music', 'streaming', 'youtube', 'video'],
        rating: 4,
        popularity: 4,
        icon: '🎼',
        type: 'Streaming Service',
        founded: 2015,
        country: 'USA'
    },

    // ============ TRAVEL ============
    {
        title: 'Booking.com',
        url: 'https://www.booking.com',
        description: 'Book hotels, flights, and vacation rentals worldwide.',
        category: 'Travel',
        tags: ['hotels', 'travel', 'bookings', 'vacation'],
        rating: 4,
        popularity: 5,
        icon: '✈️',
        type: 'Travel Booking',
        founded: 1996,
        country: 'Netherlands'
    },
    {
        title: 'Airbnb',
        url: 'https://www.airbnb.com',
        description: 'Find and book unique accommodations and experiences.',
        category: 'Travel',
        tags: ['travel', 'rentals', 'accommodation', 'vacation'],
        rating: 4,
        popularity: 4,
        icon: '🏠',
        type: 'Marketplace',
        founded: 2008,
        country: 'USA'
    },
    {
        title: 'Google Maps',
        url: 'https://maps.google.com',
        description: 'Navigate, discover, and explore the world.',
        category: 'Maps',
        tags: ['maps', 'navigation', 'location', 'directions'],
        rating: 5,
        popularity: 5,
        icon: '🗺️',
        type: 'Navigation',
        founded: 2005,
        country: 'USA'
    },

    // ============ FINANCE & CRYPTO ============
    {
        title: 'PayPal',
        url: 'https://www.paypal.com',
        description: 'Send money, make payments, and manage your wallet online.',
        category: 'Finance',
        tags: ['payments', 'money', 'transactions', 'wallet'],
        rating: 4,
        popularity: 5,
        icon: '💳',
        type: 'Payment Service',
        founded: 1998,
        country: 'USA'
    },
    {
        title: 'Stripe',
        url: 'https://stripe.com',
        description: 'Payment processing for online businesses and creators.',
        category: 'Finance',
        tags: ['payments', 'business', 'processing', 'ecommerce'],
        rating: 5,
        popularity: 4,
        icon: '💰',
        type: 'Payment Processor',
        founded: 2010,
        country: 'USA'
    },
    {
        title: 'Coinbase',
        url: 'https://www.coinbase.com',
        description: 'Secure platform to buy, sell, and trade cryptocurrency.',
        category: 'Finance',
        tags: ['crypto', 'bitcoin', 'ethereum', 'trading'],
        rating: 3,
        popularity: 4,
        icon: '₿',
        type: 'Crypto Exchange',
        founded: 2012,
        country: 'USA'
    },
    {
        title: 'Bitcoin',
        url: 'https://bitcoin.org',
        description: 'Decentralized digital currency and blockchain.',
        category: 'Crypto',
        tags: ['crypto', 'bitcoin', 'blockchain', 'currency'],
        rating: 4,
        popularity: 5,
        icon: '₿',
        type: 'Cryptocurrency',
        founded: 2009,
        country: 'Decentralized'
    },

    // ============ HEALTH & FITNESS ============
    {
        title: 'MyFitnessPal',
        url: 'https://www.myfitnesspal.com',
        description: 'Track calories, nutrition, and fitness with our app.',
        category: 'Health',
        tags: ['fitness', 'health', 'tracking', 'nutrition'],
        rating: 4,
        popularity: 4,
        icon: '💪',
        type: 'Fitness App',
        founded: 2005,
        country: 'USA'
    },
    {
        title: 'WebMD',
        url: 'https://www.webmd.com',
        description: 'Medical information, drugs, and health services.',
        category: 'Health',
        tags: ['health', 'medical', 'information', 'wellness'],
        rating: 4,
        popularity: 4,
        icon: '🏥',
        type: 'Health Info',
        founded: 1996,
        country: 'USA'
    },

    // ============ GAMING ============
    {
        title: 'Steam',
        url: 'https://steampowered.com',
        description: 'Platform for buying and playing PC games.',
        category: 'Gaming',
        tags: ['games', 'gaming', 'pc', 'entertainment'],
        rating: 5,
        popularity: 5,
        icon: '🎮',
        type: 'Gaming Platform',
        founded: 2003,
        country: 'USA'
    },
    {
        title: 'Epic Games Store',
        url: 'https://www.epicgames.com/store',
        description: 'Digital game store and game development platform.',
        category: 'Gaming',
        tags: ['games', 'gaming', 'store', 'unreal'],
        rating: 3,
        popularity: 3,
        icon: '🎯',
        type: 'Gaming Platform',
        founded: 1991,
        country: 'USA'
    },
    {
        title: 'League of Legends',
        url: 'https://www.leagueoflegends.com',
        description: 'Multiplayer online battle arena (MOBA) game.',
        category: 'Gaming',
        tags: ['games', 'moba', 'esports', 'online'],
        rating: 4,
        popularity: 4,
        icon: '⚔️',
        type: 'Online Game',
        founded: 2009,
        country: 'USA'
    },

    // ============ TOOLS & UTILITIES ============
    {
        title: 'Grammarly',
        url: 'https://www.grammarly.com',
        description: 'AI-powered writing assistant to improve your grammar.',
        category: 'Tools',
        tags: ['writing', 'grammar', 'ai', 'editing'],
        rating: 4,
        popularity: 4,
        icon: '✍️',
        type: 'Writing Tool',
        founded: 2009,
        country: 'USA'
    },
    {
        title: 'LastPass',
        url: 'https://www.lastpass.com',
        description: 'Password manager for securely storing and organizing passwords.',
        category: 'Tools',
        tags: ['security', 'passwords', 'manager', 'privacy'],
        rating: 4,
        popularity: 4,
        icon: '🔐',
        type: 'Security Tool',
        founded: 2008,
        country: 'USA'
    },
    {
        title: 'VLC Media Player',
        url: 'https://www.videolan.org/vlc/',
        description: 'Free and open-source media player for all video formats.',
        category: 'Tools',
        tags: ['media', 'video', 'player', 'open-source'],
        rating: 5,
        popularity: 5,
        icon: '▶️',
        type: 'Media Player',
        founded: 2001,
        country: 'France'
    },

    // ============ AI & MACHINE LEARNING ============
    {
        title: 'ChatGPT',
        url: 'https://chatgpt.com',
        description: 'AI-powered chatbot for conversational assistance.',
        category: 'AI',
        tags: ['ai', 'chatbot', 'language', 'assistant'],
        rating: 4,
        popularity: 5,
        icon: '🤖',
        type: 'AI Assistant',
        founded: 2022,
        country: 'USA'
    },
    {
        title: 'Claude',
        url: 'https://claude.ai',
        description: 'Constitutional AI assistant by Anthropic.',
        category: 'AI',
        tags: ['ai', 'chatbot', 'language', 'assistant'],
        rating: 4,
        popularity: 4,
        icon: '🤖',
        type: 'AI Assistant',
        founded: 2023,
        country: 'USA'
    },
    {
        title: 'Kaggle',
        url: 'https://www.kaggle.com',
        description: 'Data science platform and machine learning competition site.',
        category: 'AI',
        tags: ['data-science', 'machine-learning', 'competition'],
        rating: 4,
        popularity: 4,
        icon: '📊',
        type: 'Data Platform',
        founded: 2010,
        country: 'USA'
    },

    // ============ EMAIL SERVICES ============
    {
        title: 'Gmail',
        url: 'https://mail.google.com',
        description: 'Fast, searchable, and secure email with 15GB of storage.',
        category: 'Email',
        tags: ['email', 'google', 'communication', 'storage'],
        rating: 5,
        popularity: 5,
        icon: '📧',
        type: 'Email Service',
        founded: 2004,
        country: 'USA'
    },
    {
        title: 'Outlook',
        url: 'https://outlook.live.com',
        description: 'Microsoft\'s email and calendar service.',
        category: 'Email',
        tags: ['email', 'microsoft', 'calendar', 'productivity'],
        rating: 4,
        popularity: 4,
        icon: '📬',
        type: 'Email Service',
        founded: 1997,
        country: 'USA'
    },
    {
        title: 'ProtonMail',
        url: 'https://protonmail.com',
        description: 'Encrypted email service with privacy-first approach.',
        category: 'Email',
        tags: ['email', 'security', 'encryption', 'privacy'],
        rating: 4,
        popularity: 3,
        icon: '🔒',
        type: 'Email Service',
        founded: 2013,
        country: 'Switzerland'
    },

    // ============ REFERENCE & LIBRARY ============
    {
        title: 'Wikipedia',
        url: 'https://www.wikipedia.org',
        description: 'Free online encyclopedia that anyone can edit.',
        category: 'Reference',
        tags: ['encyclopedia', 'knowledge', 'reference', 'free'],
        rating: 4,
        popularity: 5,
        icon: 'W',
        type: 'Encyclopedia',
        founded: 2001,
        country: 'USA'
    },
    {
        title: 'Internet Archive',
        url: 'https://archive.org',
        description: 'Digital library with millions of free books and files.',
        category: 'Library',
        tags: ['library', 'archive', 'books', 'history'],
        rating: 5,
        popularity: 4,
        icon: '📚',
        type: 'Digital Library',
        founded: 1996,
        country: 'USA'
    },
    {
        title: 'Project Gutenberg',
        url: 'https://www.gutenberg.org',
        description: 'Free ebooks - Over 70,000 titles available.',
        category: 'Library',
        tags: ['ebooks', 'books', 'literature', 'free'],
        rating: 4,
        popularity: 3,
        icon: '📖',
        type: 'Ebook Library',
        founded: 1971,
        country: 'USA'
    },

    // ============ SERVICES ============
    {
        title: 'Uber',
        url: 'https://www.uber.com',
        description: 'Get a ride, deliver food, or get a courier service.',
        category: 'Services',
        tags: ['transportation', 'delivery', 'service', 'app'],
        rating: 4,
        popularity: 5,
        icon: '🚗',
        type: 'Service',
        founded: 2009,
        country: 'USA'
    },
    {
        title: 'DoorDash',
        url: 'https://www.doordash.com',
        description: 'Food delivery service connecting diners with restaurants.',
        category: 'Services',
        tags: ['delivery', 'food', 'restaurants', 'service'],
        rating: 4,
        popularity: 4,
        icon: '🍔',
        type: 'Delivery Service',
        founded: 2013,
        country: 'USA'
    },
    {
        title: 'Fiverr',
        url: 'https://www.fiverr.com',
        description: 'Marketplace for freelance services and gigs.',
        category: 'Services',
        tags: ['freelance', 'services', 'marketplace', 'gigs'],
        rating: 4,
        popularity: 4,
        icon: '💼',
        type: 'Marketplace',
        founded: 2010,
        country: 'Israel'
    },
    {
        title: 'Upwork',
        url: 'https://www.upwork.com',
        description: 'Hire freelancers for projects and remote work.',
        category: 'Services',
        tags: ['freelance', 'work', 'jobs', 'remote'],
        rating: 4,
        popularity: 4,
        icon: '🏢',
        type: 'Marketplace',
        founded: 2015,
        country: 'USA'
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
    module.exports = { LINKS_DATABASE, saveLinksToCookie, DEFAULT_LINKS, ORIGINAL_DEFAULT_LINKS: POPULAR_SITES_DATABASE, POPULAR_SITES_DATABASE };
}
