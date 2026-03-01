// Website Links Database with Cookie Support
// This file contains all the links and their information for the search functionality

const DEFAULT_LINKS = [];

// Original example links for reference/restore option
const ORIGINAL_DEFAULT_LINKS = [
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

// ~200 Popular websites database
const POPULAR_SITES_DATABASE = [
    // Search & Navigation
    { title: 'Google', url: 'https://www.google.com', description: 'Search engine', category: 'Search' },
    { title: 'Bing', url: 'https://www.bing.com', description: 'Microsoft search engine', category: 'Search' },
    { title: 'DuckDuckGo', url: 'https://duckduckgo.com', description: 'Privacy-focused search', category: 'Search' },
    { title: 'Google Maps', url: 'https://maps.google.com', description: 'Navigation and maps', category: 'Maps' },
    { title: 'Wikipedia', url: 'https://www.wikipedia.org', description: 'Free encyclopedia', category: 'Reference' },
    { title: 'Waze', url: 'https://www.waze.com', description: 'Real-time navigation', category: 'Maps' },

    // Social Media
    { title: 'Facebook', url: 'https://www.facebook.com', description: 'Social network', category: 'Social' },
    { title: 'Instagram', url: 'https://www.instagram.com', description: 'Photo sharing platform', category: 'Social' },
    { title: 'Twitter/X', url: 'https://www.twitter.com', description: 'Social media platform', category: 'Social' },
    { title: 'TikTok', url: 'https://www.tiktok.com', description: 'Short-form video platform', category: 'Social' },
    { title: 'LinkedIn', url: 'https://www.linkedin.com', description: 'Professional networking', category: 'Social' },
    { title: 'Reddit', url: 'https://www.reddit.com', description: 'Community discussion forum', category: 'Social' },
    { title: 'Snapchat', url: 'https://www.snapchat.com', description: 'Messaging and stories', category: 'Social' },
    { title: 'Pinterest', url: 'https://www.pinterest.com', description: 'Visual discovery platform', category: 'Social' },
    { title: 'Telegram', url: 'https://telegram.org', description: 'Messaging app', category: 'Social' },
    { title: 'Discord', url: 'https://discord.com', description: 'Community chat platform', category: 'Social' },

    // Video Streaming
    { title: 'YouTube', url: 'https://www.youtube.com', description: 'Video sharing platform', category: 'Video' },
    { title: 'Netflix', url: 'https://www.netflix.com', description: 'Streaming service', category: 'Video' },
    { title: 'Prime Video', url: 'https://www.primevideo.com', description: 'Amazon streaming service', category: 'Video' },
    { title: 'Hulu', url: 'https://www.hulu.com', description: 'TV and movie streaming', category: 'Video' },
    { title: 'Disney+', url: 'https://www.disneyplus.com', description: 'Disney streaming service', category: 'Video' },
    { title: 'HBO Max', url: 'https://www.hbomax.com', description: 'Warner Bros streaming', category: 'Video' },
    { title: 'Twitch', url: 'https://www.twitch.tv', description: 'Live streaming platform', category: 'Video' },
    { title: 'Vimeo', url: 'https://vimeo.com', description: 'Video hosting platform', category: 'Video' },

    // Shopping & E-commerce
    { title: 'Amazon', url: 'https://www.amazon.com', description: 'Online shopping', category: 'Shopping' },
    { title: 'eBay', url: 'https://www.ebay.com', description: 'Online auctions and sales', category: 'Shopping' },
    { title: 'Walmart', url: 'https://www.walmart.com', description: 'Retail shopping', category: 'Shopping' },
    { title: 'Target', url: 'https://www.target.com', description: 'Department store', category: 'Shopping' },
    { title: 'Etsy', url: 'https://www.etsy.com', description: 'Handmade marketplace', category: 'Shopping' },
    { title: 'Aliexpress', url: 'https://www.aliexpress.com', description: 'Chinese e-commerce', category: 'Shopping' },
    { title: 'ASOS', url: 'https://www.asos.com', description: 'Fashion e-commerce', category: 'Shopping' },
    { title: 'Shein', url: 'https://www.shein.com', description: 'Fast fashion', category: 'Shopping' },
    { title: 'H&M', url: 'https://www.hm.com', description: 'Fashion retailer', category: 'Shopping' },
    { title: 'Zara', url: 'https://www.zara.com', description: 'Fashion store', category: 'Shopping' },

    // Programming & Development
    { title: 'GitHub', url: 'https://www.github.com', description: 'Code repository', category: 'Development' },
    { title: 'Stack Overflow', url: 'https://stackoverflow.com', description: 'Programming Q&A', category: 'Development' },
    { title: 'GitLab', url: 'https://gitlab.com', description: 'Git repository manager', category: 'Development' },
    { title: 'Bitbucket', url: 'https://bitbucket.org', description: 'Git repository hosting', category: 'Development' },
    { title: 'CodePen', url: 'https://codepen.io', description: 'Frontend code playground', category: 'Development' },
    { title: 'JSFiddle', url: 'https://jsfiddle.net', description: 'JavaScript playground', category: 'Development' },
    { title: 'Replit', url: 'https://replit.com', description: 'Online IDE', category: 'Development' },
    { title: 'VS Code', url: 'https://code.visualstudio.com', description: 'Code editor', category: 'Development' },
    { title: 'Docker', url: 'https://www.docker.com', description: 'Container platform', category: 'Development' },
    { title: 'Kubernetes', url: 'https://kubernetes.io', description: 'Container orchestration', category: 'Development' },

    // Programming Languages & Frameworks
    { title: 'Python', url: 'https://www.python.org', description: 'Python language', category: 'Programming' },
    { title: 'JavaScript', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', description: 'JavaScript docs', category: 'Programming' },
    { title: 'Java', url: 'https://www.java.com', description: 'Java language', category: 'Programming' },
    { title: 'Node.js', url: 'https://nodejs.org', description: 'JavaScript runtime', category: 'Programming' },
    { title: 'React', url: 'https://react.dev', description: 'JavaScript library', category: 'Programming' },
    { title: 'Vue.js', url: 'https://vuejs.org', description: 'JavaScript framework', category: 'Programming' },
    { title: 'Angular', url: 'https://angular.io', description: 'Web framework', category: 'Programming' },
    { title: 'Django', url: 'https://www.djangoproject.com', description: 'Python framework', category: 'Programming' },
    { title: 'Flask', url: 'https://flask.palletsprojects.com', description: 'Python framework', category: 'Programming' },
    { title: 'Ruby on Rails', url: 'https://rubyonrails.org', description: 'Ruby framework', category: 'Programming' },

    // Cloud Services
    { title: 'AWS', url: 'https://aws.amazon.com', description: 'Amazon Web Services', category: 'Cloud' },
    { title: 'Google Cloud', url: 'https://cloud.google.com', description: 'Google cloud platform', category: 'Cloud' },
    { title: 'Microsoft Azure', url: 'https://azure.microsoft.com', description: 'Microsoft cloud services', category: 'Cloud' },
    { title: 'Heroku', url: 'https://www.heroku.com', description: 'Cloud application platform', category: 'Cloud' },
    { title: 'DigitalOcean', url: 'https://www.digitalocean.com', description: 'Cloud hosting', category: 'Cloud' },
    { title: 'Vercel', url: 'https://vercel.com', description: 'Frontend platform', category: 'Cloud' },
    { title: 'Netlify', url: 'https://www.netlify.com', description: 'Web hosting platform', category: 'Cloud' },
    { title: 'Firebase', url: 'https://firebase.google.com', description: 'Google backend platform', category: 'Cloud' },

    // Design & Graphics
    { title: 'Canva', url: 'https://www.canva.com', description: 'Design tool', category: 'Design' },
    { title: 'Figma', url: 'https://www.figma.com', description: 'UI/UX design tool', category: 'Design' },
    { title: 'Adobe Creative Cloud', url: 'https://www.adobe.com', description: 'Design software suite', category: 'Design' },
    { title: 'Photoshop', url: 'https://www.adobe.com/products/photoshop.html', description: 'Image editor', category: 'Design' },
    { title: 'Illustrator', url: 'https://www.adobe.com/products/illustrator.html', description: 'Vector graphics', category: 'Design' },
    { title: 'CorelDRAW', url: 'https://www.coreldraw.com', description: 'Vector design software', category: 'Design' },
    { title: 'GIMP', url: 'https://www.gimp.org', description: 'Free image editor', category: 'Design' },
    { title: 'Inkscape', url: 'https://inkscape.org', description: 'Free vector graphics', category: 'Design' },
    { title: 'Unsplash', url: 'https://unsplash.com', description: 'Free stock photos', category: 'Design' },
    { title: 'Pexels', url: 'https://www.pexels.com', description: 'Free stock images', category: 'Design' },

    // Productivity & Office
    { title: 'Google Workspace', url: 'https://workspace.google.com', description: 'Google productivity suite', category: 'Productivity' },
    { title: 'Microsoft 365', url: 'https://www.microsoft.com/en-us/microsoft-365', description: 'Office suite', category: 'Productivity' },
    { title: 'Notion', url: 'https://www.notion.so', description: 'All-in-one workspace', category: 'Productivity' },
    { title: 'Trello', url: 'https://trello.com', description: 'Project management', category: 'Productivity' },
    { title: 'Asana', url: 'https://asana.com', description: 'Work management platform', category: 'Productivity' },
    { title: 'Monday.com', url: 'https://monday.com', description: 'Project management', category: 'Productivity' },
    { title: 'Jira', url: 'https://www.atlassian.com/software/jira', description: 'Issue tracking', category: 'Productivity' },
    { title: 'Slack', url: 'https://slack.com', description: 'Team communication', category: 'Productivity' },
    { title: 'Microsoft Teams', url: 'https://www.microsoft.com/en-us/microsoft-teams', description: 'Team collaboration', category: 'Productivity' },
    { title: 'Zoom', url: 'https://zoom.us', description: 'Video conferencing', category: 'Productivity' },
    { title: 'Google Meet', url: 'https://meet.google.com', description: 'Video calls', category: 'Productivity' },
    { title: 'Evernote', url: 'https://evernote.com', description: 'Note-taking app', category: 'Productivity' },
    { title: 'OneNote', url: 'https://www.onenote.com', description: 'Digital notebook', category: 'Productivity' },

    // Learning & Education
    { title: 'Coursera', url: 'https://www.coursera.org', description: 'Online courses', category: 'Education' },
    { title: 'edX', url: 'https://www.edx.org', description: 'University courses', category: 'Education' },
    { title: 'Udemy', url: 'https://www.udemy.com', description: 'Online learning platform', category: 'Education' },
    { title: 'Skillshare', url: 'https://www.skillshare.com', description: 'Creative courses', category: 'Education' },
    { title: 'Khan Academy', url: 'https://www.khanacademy.org', description: 'Free education', category: 'Education' },
    { title: 'Codecademy', url: 'https://www.codecademy.com', description: 'Coding courses', category: 'Education' },
    { title: 'freeCodeCamp', url: 'https://www.freecodecamp.org', description: 'Free coding education', category: 'Education' },
    { title: 'Duolingo', url: 'https://www.duolingo.com', description: 'Language learning', category: 'Education' },
    { title: 'Babbel', url: 'https://www.babbel.com', description: 'Language courses', category: 'Education' },
    { title: 'Rosetta Stone', url: 'https://www.rosettastone.com', description: 'Language learning', category: 'Education' },

    // News & Media
    { title: 'BBC', url: 'https://www.bbc.com', description: 'News broadcaster', category: 'News' },
    { title: 'CNN', url: 'https://www.cnn.com', description: 'News network', category: 'News' },
    { title: 'Reuters', url: 'https://www.reuters.com', description: 'News agency', category: 'News' },
    { title: 'AP News', url: 'https://apnews.com', description: 'News agency', category: 'News' },
    { title: 'NPR', url: 'https://www.npr.org', description: 'Public radio', category: 'News' },
    { title: 'The Guardian', url: 'https://www.theguardian.com', description: 'News publication', category: 'News' },
    { title: 'The New York Times', url: 'https://www.nytimes.com', description: 'News publication', category: 'News' },
    { title: 'The Washington Post', url: 'https://www.washingtonpost.com', description: 'News publication', category: 'News' },
    { title: 'Medium', url: 'https://medium.com', description: 'Publishing platform', category: 'News' },
    { title: 'Hacker News', url: 'https://news.ycombinator.com', description: 'Tech news community', category: 'News' },

    // Entertainment
    { title: 'IMDb', url: 'https://www.imdb.com', description: 'Movie database', category: 'Entertainment' },
    { title: 'Rotten Tomatoes', url: 'https://www.rottentomatoes.com', description: 'Movie reviews', category: 'Entertainment' },
    { title: 'Letterboxd', url: 'https://letterboxd.com', description: 'Movie social network', category: 'Entertainment' },
    { title: 'MyAnimeList', url: 'https://myanimelist.net', description: 'Anime database', category: 'Entertainment' },
    { title: 'Goodreads', url: 'https://www.goodreads.com', description: 'Book social network', category: 'Entertainment' },

    // Music & Audio
    { title: 'Spotify', url: 'https://www.spotify.com', description: 'Music streaming', category: 'Music' },
    { title: 'Apple Music', url: 'https://music.apple.com', description: 'Apple streaming service', category: 'Music' },
    { title: 'YouTube Music', url: 'https://music.youtube.com', description: 'YouTube music service', category: 'Music' },
    { title: 'Tidal', url: 'https://tidal.com', description: 'Music streaming service', category: 'Music' },
    { title: 'SoundCloud', url: 'https://soundcloud.com', description: 'Music platform', category: 'Music' },
    { title: 'Bandcamp', url: 'https://bandcamp.com', description: 'Artist music platform', category: 'Music' },
    { title: 'Genius', url: 'https://genius.com', description: 'Lyrics and annotations', category: 'Music' },
    { title: 'Audible', url: 'https://www.audible.com', description: 'Audiobooks', category: 'Music' },

    // Travel & Booking
    { title: 'Google Flights', url: 'https://www.google.com/flights', description: 'Flight search', category: 'Travel' },
    { title: 'Booking.com', url: 'https://www.booking.com', description: 'Hotel bookings', category: 'Travel' },
    { title: 'Airbnb', url: 'https://www.airbnb.com', description: 'Home rentals', category: 'Travel' },
    { title: 'Expedia', url: 'https://www.expedia.com', description: 'Travel booking', category: 'Travel' },
    { title: 'TripAdvisor', url: 'https://www.tripadvisor.com', description: 'Travel reviews', category: 'Travel' },
    { title: 'Kayak', url: 'https://www.kayak.com', description: 'Travel search', category: 'Travel' },
    { title: 'Skyscanner', url: 'https://www.skyscanner.com', description: 'Flight comparison', category: 'Travel' },
    { title: 'Hotels.com', url: 'https://www.hotels.com', description: 'Hotel search', category: 'Travel' },

    // Finance & Banking
    { title: 'PayPal', url: 'https://www.paypal.com', description: 'Online payments', category: 'Finance' },
    { title: 'Stripe', url: 'https://stripe.com', description: 'Payment processing', category: 'Finance' },
    { title: 'Wise', url: 'https://wise.com', description: 'International transfers', category: 'Finance' },
    { title: 'Coinbase', url: 'https://www.coinbase.com', description: 'Crypto exchange', category: 'Finance' },
    { title: 'Kraken', url: 'https://www.kraken.com', description: 'Crypto exchange', category: 'Finance' },
    { title: 'Yahoo Finance', url: 'https://finance.yahoo.com', description: 'Financial news', category: 'Finance' },
    { title: 'Bloomberg', url: 'https://www.bloomberg.com', description: 'Financial news', category: 'Finance' },
    { title: 'MarketWatch', url: 'https://www.marketwatch.com', description: 'Financial data', category: 'Finance' },
    { title: 'Robinhood', url: 'https://robinhood.com', description: 'Stock trading', category: 'Finance' },

    // Health & Fitness
    { title: 'MyFitnessPal', url: 'https://www.myfitnesspal.com', description: 'Fitness tracking', category: 'Health' },
    { title: 'Fitbit', url: 'https://www.fitbit.com', description: 'Fitness tracker', category: 'Health' },
    { title: 'Strava', url: 'https://www.strava.com', description: 'Activity tracking', category: 'Health' },
    { title: 'Peloton', url: 'https://www.onepeloton.com', description: 'Fitness classes', category: 'Health' },
    { title: 'WebMD', url: 'https://www.webmd.com', description: 'Health information', category: 'Health' },
    { title: 'Healthline', url: 'https://www.healthline.com', description: 'Health news', category: 'Health' },
    { title: 'MedlinePlus', url: 'https://medlineplus.gov', description: 'Medical information', category: 'Health' },

    // Gaming
    { title: 'Steam', url: 'https://steampowered.com', description: 'Game platform', category: 'Gaming' },
    { title: 'Epic Games Store', url: 'https://www.epicgames.com/store', description: 'Game store', category: 'Gaming' },
    { title: 'GOG', url: 'https://www.gog.com', description: 'Game store', category: 'Gaming' },
    { title: 'Nintendo Switch Online', url: 'https://www.nintendo.com', description: 'Nintendo service', category: 'Gaming' },
    { title: 'PlayStation Network', url: 'https://www.playstation.com', description: 'PlayStation service', category: 'Gaming' },
    { title: 'Xbox Game Pass', url: 'https://www.xbox.com/en-US/xbox-game-pass', description: 'Game subscription', category: 'Gaming' },
    { title: 'Itch.io', url: 'https://itch.io', description: 'Indie game platform', category: 'Gaming' },
    { title: 'League of Legends', url: 'https://www.leagueoflegends.com', description: 'Online game', category: 'Gaming' },
    { title: 'Valorant', url: 'https://playvalorant.com', description: 'Tactical shooter', category: 'Gaming' },
    { title: 'Dota 2', url: 'https://www.dota2.com', description: 'MOBA game', category: 'Gaming' },

    // Sports
    { title: 'ESPN', url: 'https://www.espn.com', description: 'Sports news', category: 'Sports' },
    { title: 'Sports Illustrated', url: 'https://www.si.com', description: 'Sports magazine', category: 'Sports' },
    { title: 'The Athletic', url: 'https://theathletic.com', description: 'Sports journalism', category: 'Sports' },
    { title: 'Fantasy Premier League', url: 'https://fantasy.premierleague.com', description: 'Fantasy football', category: 'Sports' },

    // Crypto & Blockchain
    { title: 'Bitcoin', url: 'https://bitcoin.org', description: 'Bitcoin network', category: 'Crypto' },
    { title: 'Ethereum', url: 'https://ethereum.org', description: 'Ethereum blockchain', category: 'Crypto' },
    { title: 'CoinMarketCap', url: 'https://coinmarketcap.com', description: 'Crypto data', category: 'Crypto' },
    { title: 'CoinGecko', url: 'https://www.coingecko.com', description: 'Crypto analytics', category: 'Crypto' },

    // Tools & Utilities
    { title: 'Grammarly', url: 'https://www.grammarly.com', description: 'Writing assistant', category: 'Tools' },
    { title: 'LastPass', url: 'https://www.lastpass.com', description: 'Password manager', category: 'Tools' },
    { title: '1Password', url: 'https://1password.com', description: 'Password manager', category: 'Tools' },
    { title: 'Bitwarden', url: 'https://bitwarden.com', description: 'Password manager', category: 'Tools' },
    { title: 'VirtualBox', url: 'https://www.virtualbox.org', description: 'Virtualization software', category: 'Tools' },
    { title: 'VLC Media Player', url: 'https://www.videolan.org/vlc/', description: 'Media player', category: 'Tools' },
    { title: 'WinRAR', url: 'https://www.winrar.com', description: 'File compression', category: 'Tools' },
    { title: '7-Zip', url: 'https://www.7-zip.org', description: 'File compression', category: 'Tools' },
    { title: 'Audacity', url: 'https://www.audacityteam.org', description: 'Audio editor', category: 'Tools' },
    { title: 'OBS Studio', url: 'https://obsproject.com', description: 'Screen recording', category: 'Tools' },

    // Email Services
    { title: 'Gmail', url: 'https://mail.google.com', description: 'Email service', category: 'Email' },
    { title: 'Outlook', url: 'https://outlook.live.com', description: 'Email service', category: 'Email' },
    { title: 'Yahoo Mail', url: 'https://mail.yahoo.com', description: 'Email service', category: 'Email' },
    { title: 'ProtonMail', url: 'https://protonmail.com', description: 'Encrypted email', category: 'Email' },

    // Internet Archive & Reference
    { title: 'Internet Archive', url: 'https://archive.org', description: 'Digital library', category: 'Library' },
    { title: 'Project Gutenberg', url: 'https://www.gutenberg.org', description: 'Free ebooks', category: 'Library' },
    { title: 'Open Library', url: 'https://openlibrary.org', description: 'Book library', category: 'Library' },
    { title: 'Standard Ebooks', url: 'https://standardebooks.org', description: 'Quality ebooks', category: 'Library' },

    // AI & Machine Learning
    { title: 'ChatGPT', url: 'https://chatgpt.com', description: 'AI assistant', category: 'AI' },
    { title: 'Claude', url: 'https://claude.ai', description: 'AI assistant', category: 'AI' },
    { title: 'Gemini', url: 'https://gemini.google.com', description: 'Google AI', category: 'AI' },
    { title: 'Hugging Face', url: 'https://huggingface.co', description: 'ML models', category: 'AI' },
    { title: 'Kaggle', url: 'https://www.kaggle.com', description: 'Data science platform', category: 'AI' },
    { title: 'OpenAI', url: 'https://openai.com', description: 'AI research company', category: 'AI' },
    { title: 'Anthropic', url: 'https://www.anthropic.com', description: 'AI safety company', category: 'AI' },

    // More Social Media
    { title: 'Mastodon', url: 'https://joinmastodon.org', description: 'Decentralized social', category: 'Social' },
    { title: 'Bluesky', url: 'https://bsky.app', description: 'Social media platform', category: 'Social' },
    { title: 'Threads', url: 'https://www.threads.net', description: 'Meta social app', category: 'Social' },
    { title: 'Nextdoor', url: 'https://nextdoor.com', description: 'Neighborhood network', category: 'Social' },
    { title: 'Quora', url: 'https://www.quora.com', description: 'Q&A platform', category: 'Social' },
    { title: 'Medium', url: 'https://medium.com', description: 'Writing platform', category: 'Publishing' },

    // More Shopping & Marketplaces
    { title: 'Wish', url: 'https://www.wish.com', description: 'Shopping app', category: 'Shopping' },
    { title: 'Mercari', url: 'https://www.mercari.com', description: 'Marketplace app', category: 'Shopping' },
    { title: 'Vinted', url: 'https://www.vinted.com', description: 'Fashion marketplace', category: 'Shopping' },
    { title: 'Poshmark', url: 'https://poshmark.com', description: 'Social marketplace', category: 'Shopping' },
    { title: 'Grailed', url: 'https://www.grailed.com', description: 'Menswear marketplace', category: 'Shopping' },
    { title: 'ThredUP', url: 'https://www.thredup.com', description: 'Secondhand fashion', category: 'Shopping' },

    // More Developer Tools
    { title: 'npm', url: 'https://www.npmjs.com', description: 'JavaScript packages', category: 'Development' },
    { title: 'Maven Central', url: 'https://mvnrepository.com', description: 'Java packages', category: 'Development' },
    { title: 'PyPI', url: 'https://pypi.org', description: 'Python packages', category: 'Development' },
    { title: 'Homebrew', url: 'https://brew.sh', description: 'Package manager', category: 'Development' },
    { title: 'Postman', url: 'https://www.postman.com', description: 'API testing', category: 'Development' },
    { title: 'Swagger', url: 'https://swagger.io', description: 'API documentation', category: 'Development' },

    // More Productivity
    { title: 'Todoist', url: 'https://todoist.com', description: 'Task manager', category: 'Productivity' },
    { title: 'Any.do', url: 'https://www.any.do', description: 'Task management', category: 'Productivity' },
    { title: 'Obsidian', url: 'https://obsidian.md', description: 'Note-taking app', category: 'Productivity' },
    { title: 'Roam Research', url: 'https://roamresearch.com', description: 'Knowledge base', category: 'Productivity' },
    { title: 'Logseq', url: 'https://logseq.com', description: 'Knowledge management', category: 'Productivity' },
    { title: 'Typora', url: 'https://typora.io', description: 'Markdown editor', category: 'Productivity' },

    // More Video Platforms
    { title: 'Dailymotion', url: 'https://www.dailymotion.com', description: 'Video sharing', category: 'Video' },
    { title: 'Rumble', url: 'https://rumble.com', description: 'Video platform', category: 'Video' },
    { title: 'Odysee', url: 'https://odysee.com', description: 'Video platform', category: 'Video' },

    // More News Sources
    { title: 'Al Jazeera', url: 'https://www.aljazeera.com', description: 'News network', category: 'News' },
    { title: 'CNBC', url: 'https://www.cnbc.com', description: 'Business news', category: 'News' },
    { title: 'Fox News', url: 'https://www.foxnews.com', description: 'News network', category: 'News' },
    { title: 'MSNBC', url: 'https://www.msnbc.com', description: 'News network', category: 'News' },
    { title: 'Politico', url: 'https://www.politico.com', description: 'Political news', category: 'News' },
    { title: 'The Hill', url: 'https://thehill.com', description: 'News and politics', category: 'News' },

    // More Entertainment
    { title: 'Metacritic', url: 'https://www.metacritic.com', description: 'Reviews aggregator', category: 'Entertainment' },
    { title: 'Anime-Planet', url: 'https://www.anime-planet.com', description: 'Anime database', category: 'Entertainment' },
    { title: 'AniList', url: 'https://anilist.co', description: 'Anime tracking', category: 'Entertainment' },

    // More Education
    { title: 'LinkedIn Learning', url: 'https://www.linkedin.com/learning', description: 'Professional courses', category: 'Education' },
    { title: 'Brilliant', url: 'https://brilliant.org', description: 'STEM learning', category: 'Education' },
    { title: 'DataCamp', url: 'https://www.datacamp.com', description: 'Data science courses', category: 'Education' },

    // Streaming Services
    { title: 'Paramount+', url: 'https://www.paramountplus.com', description: 'Streaming service', category: 'Video' },
    { title: 'Peacock', url: 'https://www.peacocktv.com', description: 'NBC streaming', category: 'Video' },
    { title: 'Apple TV+', url: 'https://tv.apple.com', description: 'Apple streaming', category: 'Video' },

    // More Tools
    { title: 'Figma Community', url: 'https://www.figma.com/community', description: 'Design resources', category: 'Design' },
    { title: '1Doc', url: 'https://www.1doc.co', description: 'Documentation tool', category: 'Tools' },
    { title: 'Nextdns', url: 'https://nextdns.io', description: 'DNS service', category: 'Tools' },
    { title: 'Cloudflare', url: 'https://www.cloudflare.com', description: 'CDN service', category: 'Tools' },

    // More Learning Platforms
    { title: 'Pluralsight', url: 'https://www.pluralsight.com', description: 'Tech training', category: 'Education' },
    { title: 'A Cloud Guru', url: 'https://acloudguru.com', description: 'Cloud courses', category: 'Education' },
    { title: 'Linux Academy', url: 'https://linuxacademy.com', description: 'Linux training', category: 'Education' },

    // More Crypto Services
    { title: 'Binance', url: 'https://www.binance.com', description: 'Crypto exchange', category: 'Crypto' },
    { title: 'Bybit', url: 'https://www.bybit.com', description: 'Crypto exchange', category: 'Crypto' },
    { title: 'OKX', url: 'https://www.okx.com', description: 'Crypto exchange', category: 'Crypto' },

    // More Services
    { title: 'DoorDash', url: 'https://www.doordash.com', description: 'Food delivery', category: 'Services' },
    { title: 'Uber Eats', url: 'https://www.ubereats.com', description: 'Food delivery', category: 'Services' },
    { title: 'Grubhub', url: 'https://www.grubhub.com', description: 'Food delivery', category: 'Services' },
    { title: 'Uber', url: 'https://www.uber.com', description: 'Ride sharing', category: 'Services' },
    { title: 'Lyft', url: 'https://www.lyft.com', description: 'Ride sharing', category: 'Services' },
    { title: 'TaskRabbit', url: 'https://www.taskrabbit.com', description: 'Task service', category: 'Services' },
    { title: 'Fiverr', url: 'https://www.fiverr.com', description: 'Freelance marketplace', category: 'Services' },
    { title: 'Upwork', url: 'https://www.upwork.com', description: 'Freelance platform', category: 'Services' },
    { title: 'Toptal', url: 'https://www.toptal.com', description: 'Tech freelancers', category: 'Services' },
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
    module.exports = { LINKS_DATABASE, saveLinksToCookie, DEFAULT_LINKS, ORIGINAL_DEFAULT_LINKS, POPULAR_SITES_DATABASE };
}
