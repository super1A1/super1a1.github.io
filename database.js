const POPULAR_SITES_DATABASE = [
    {
        "title": "Google",
        "url": "https://www.google.com",
        "description": "Search the world's information, including webpages, images, and more.",
        "type": "Search Engine"
    },
    {
        "title": "Bing",
        "url": "https://www.bing.com",
        "description": "Microsoft's search engine with visual search capabilities.",
        "type": "Search Engine"
    },
    {
        "title": "DuckDuckGo",
        "url": "https://duckduckgo.com",
        "description": "Privacy-focused search engine that doesn't track you.",
        "type": "Search Engine"
    },
    {
        "title": "Facebook",
        "url": "https://www.facebook.com",
        "description": "Connect with friends and family, share photos and messages.",
        "type": "Social Network"
    },
    {
        "title": "Instagram",
        "url": "https://www.instagram.com",
        "description": "Share photos and videos with your followers.",
        "type": "Social Network"
    },
    {
        "title": "Twitter/X",
        "url": "https://www.twitter.com",
        "description": "Share and discover what's happening in the world right now.",
        "type": "Social Network"
    },
    {
        "title": "TikTok",
        "url": "https://www.tiktok.com",
        "description": "Discover and create short-form videos.",
        "type": "Social Network"
    },
    {
        "title": "LinkedIn",
        "url": "https://www.linkedin.com",
        "description": "Professional networking and job search platform.",
        "type": "Professional Network"
    },
    {
        "title": "Reddit",
        "url": "https://www.reddit.com",
        "description": "The front page of the internet - Communities and discussions.",
        "type": "Social Community"
    },
    {
        "title": "Discord",
        "url": "https://discord.com",
        "description": "All-in-one voice, video, and text chat platform.",
        "type": "Communication"
    },
    {
        "title": "YouTube",
        "url": "https://www.youtube.com",
        "description": "Watch, upload, share and discover videos worldwide.",
        "type": "Video Platform",
        "subpages": [
            {
                "title": "YouTube Music",
                "url": "https://music.youtube.com"
            },
            {
                "title": "YouTube Studio",
                "url": "https://studio.youtube.com"
            },
            {
                "title": "YouTube Shorts",
                "url": "https://www.youtube.com/shorts"
            },
            {
                "title": "YouTube Learning",
                "url": "https://learning.youtube.com"
            },
            {
                "title": "YouTube Trends",
                "url": "https://www.youtube.com/feed/trending"
            }
        ]
    },
    {
        "title": "Netflix",
        "url": "https://www.netflix.com",
        "description": "Stream movies and TV shows on demand.",
        "type": "Streaming Service"
    },
    {
        "title": "Twitch",
        "url": "https://www.twitch.tv",
        "description": "Live streaming platform for gamers and creators.",
        "type": "Live Streaming"
    },
    {
        "title": "Amazon",
        "url": "https://www.amazon.com",
        "description": "Earth's biggest selection of products with fast shipping.",
        "type": "Ecommerce"
    },
    {
        "title": "eBay",
        "url": "https://www.ebay.com",
        "description": "Buy and sell items in online auctions and fixed price sales.",
        "type": "Marketplace"
    },
    {
        "title": "Etsy",
        "url": "https://www.etsy.com",
        "description": "Marketplace for unique, handmade, and vintage items.",
        "type": "Marketplace"
    },
    {
        "title": "GitHub",
        "url": "https://www.github.com",
        "description": "Where the world builds software. Version control & collaboration.",
        "type": "Code Repository",
        "subpages": [
            {
                "title": "GitHub Copilot",
                "url": "https://github.com/features/copilot"
            },
            {
                "title": "GitHub Actions",
                "url": "https://github.com/features/actions"
            },
            {
                "title": "GitHub Discussions",
                "url": "https://github.com/features/discussions"
            },
            {
                "title": "GitHub Pages",
                "url": "https://pages.github.com/"
            },
            {
                "title": "GitHub Issues",
                "url": "https://github.com/features/issues"
            }
        ]
    },
    {
        "title": "Stack Overflow",
        "url": "https://stackoverflow.com",
        "description": "Q&A community for programmers of all levels.",
        "type": "Q&A Platform",
        "subpages": [
            {
                "title": "Python Questions",
                "url": "https://stackoverflow.com/questions/tagged/python"
            },
            {
                "title": "JavaScript Questions",
                "url": "https://stackoverflow.com/questions/tagged/javascript"
            },
            {
                "title": "React Questions",
                "url": "https://stackoverflow.com/questions/tagged/reactjs"
            },
            {
                "title": "Node.js Questions",
                "url": "https://stackoverflow.com/questions/tagged/node.js"
            },
            {
                "title": "Tags",
                "url": "https://stackoverflow.com/tags"
            }
        ]
    },
    {
        "title": "React",
        "url": "https://react.dev",
        "description": "JavaScript library for building user interfaces.",
        "type": "JavaScript Framework"
    },
    {
        "title": "Node.js",
        "url": "https://nodejs.org",
        "description": "JavaScript runtime built on Chrome's V8 engine.",
        "type": "Runtime"
    },
    {
        "title": "Python",
        "url": "https://www.python.org",
        "description": "Powerful programming language that's easy to learn.",
        "type": "Programming Language"
    },
    {
        "title": "Django",
        "url": "https://www.djangoproject.com",
        "description": "High-level Python web framework for rapid development.",
        "type": "Python Framework"
    },
    {
        "title": "AWS",
        "url": "https://aws.amazon.com",
        "description": "Amazon Web Services - Cloud computing solutions.",
        "type": "Cloud Platform",
        "subpages": [
            {
                "title": "EC2",
                "url": "https://aws.amazon.com/ec2/"
            },
            {
                "title": "S3",
                "url": "https://aws.amazon.com/s3/"
            },
            {
                "title": "Lambda",
                "url": "https://aws.amazon.com/lambda/"
            },
            {
                "title": "RDS",
                "url": "https://aws.amazon.com/rds/"
            },
            {
                "title": "Documentation",
                "url": "https://docs.aws.amazon.com/"
            }
        ]
    },
    {
        "title": "Google Cloud",
        "url": "https://cloud.google.com",
        "description": "Google's cloud computing platform.",
        "type": "Cloud Platform"
    },
    {
        "title": "Microsoft Azure",
        "url": "https://azure.microsoft.com",
        "description": "Microsoft's cloud computing services.",
        "type": "Cloud Platform"
    },
    {
        "title": "Figma",
        "url": "https://www.figma.com",
        "description": "Collaborative interface design tool in the browser.",
        "type": "Design Tool"
    },
    {
        "title": "Canva",
        "url": "https://www.canva.com",
        "description": "Easy-to-use design tool for creating graphics and content.",
        "type": "Design Tool"
    },
    {
        "title": "Adobe Creative Cloud",
        "url": "https://www.adobe.com",
        "description": "Professional design software suite (Photoshop, Illustrator, etc).",
        "type": "Software Suite"
    },
    {
        "title": "Notion",
        "url": "https://www.notion.so",
        "description": "All-in-one workspace for notes, databases, and collaboration.",
        "type": "Workspace"
    },
    {
        "title": "Slack",
        "url": "https://slack.com",
        "description": "Team communication and collaboration platform.",
        "type": "Communication"
    },
    {
        "title": "Trello",
        "url": "https://trello.com",
        "description": "Visual project management tool using boards and cards.",
        "type": "Project Management"
    },
    {
        "title": "Zoom",
        "url": "https://zoom.us",
        "description": "Video conferencing and online meeting platform.",
        "type": "Video Conferencing"
    },
    {
        "title": "Coursera",
        "url": "https://www.coursera.org",
        "description": "Learn from top universities and companies online.",
        "type": "Learning Platform"
    },
    {
        "title": "Udemy",
        "url": "https://www.udemy.com",
        "description": "Online learning courses on thousands of topics.",
        "type": "Learning Platform"
    },
    {
        "title": "Khan Academy",
        "url": "https://www.khanacademy.org",
        "description": "Free educational resources for students of all ages.",
        "type": "Learning Platform"
    },
    {
        "title": "Codecademy",
        "url": "https://www.codecademy.com",
        "description": "Interactive platform to learn coding skills.",
        "type": "Learning Platform"
    },
    {
        "title": "BBC",
        "url": "https://www.bbc.com",
        "description": "Breaking news, world news and UK news from the BBC.",
        "type": "News Media"
    },
    {
        "title": "CNN",
        "url": "https://www.cnn.com",
        "description": "International news and breaking news stories.",
        "type": "News Network"
    },
    {
        "title": "The New York Times",
        "url": "https://www.nytimes.com",
        "description": "Breaking news, world news and multimedia stories.",
        "type": "News Publication"
    },
    {
        "title": "Medium",
        "url": "https://medium.com",
        "description": "Platform for writers and publications to share stories.",
        "type": "Publishing Platform"
    },
    {
        "title": "IMDb",
        "url": "https://www.imdb.com",
        "description": "The internet's most popular database of movies and TV shows.",
        "type": "Database"
    },
    {
        "title": "Goodreads",
        "url": "https://www.goodreads.com",
        "description": "Social network for readers to discover and share books.",
        "type": "Social Network"
    },
    {
        "title": "Spotify",
        "url": "https://www.spotify.com",
        "description": "Stream millions of songs and podcasts.",
        "type": "Streaming Service"
    },
    {
        "title": "Apple Music",
        "url": "https://music.apple.com",
        "description": "Apple's music streaming service with millions of songs.",
        "type": "Streaming Service"
    },
    {
        "title": "YouTube Music",
        "url": "https://music.youtube.com",
        "description": "YouTube's music streaming service.",
        "type": "Streaming Service"
    },
    {
        "title": "Booking.com",
        "url": "https://www.booking.com",
        "description": "Book hotels, flights, and vacation rentals worldwide.",
        "type": "Travel Booking"
    },
    {
        "title": "Airbnb",
        "url": "https://www.airbnb.com",
        "description": "Find and book unique accommodations and experiences.",
        "type": "Marketplace"
    },
    {
        "title": "Google Maps",
        "url": "https://maps.google.com",
        "description": "Navigate, discover, and explore the world.",
        "type": "Navigation"
    },
    {
        "title": "PayPal",
        "url": "https://www.paypal.com",
        "description": "Send money, make payments, and manage your wallet online.",
        "type": "Payment Service"
    },
    {
        "title": "Stripe",
        "url": "https://stripe.com",
        "description": "Payment processing for online businesses and creators.",
        "type": "Payment Processor"
    },
    {
        "title": "Coinbase",
        "url": "https://www.coinbase.com",
        "description": "Secure platform to buy, sell, and trade cryptocurrency.",
        "type": "Crypto Exchange"
    },
    {
        "title": "Bitcoin",
        "url": "https://bitcoin.org",
        "description": "Decentralized digital currency and blockchain.",
        "type": "Cryptocurrency"
    },
    {
        "title": "MyFitnessPal",
        "url": "https://www.myfitnesspal.com",
        "description": "Track calories, nutrition, and fitness with our app.",
        "type": "Fitness App"
    },
    {
        "title": "WebMD",
        "url": "https://www.webmd.com",
        "description": "Medical information, drugs, and health services.",
        "type": "Health Info"
    },
    {
        "title": "Steam",
        "url": "https://steampowered.com",
        "description": "Platform for buying and playing PC games.",
        "type": "Gaming Platform"
    },
    {
        "title": "Epic Games Store",
        "url": "https://www.epicgames.com/store",
        "description": "Digital game store and game development platform.",
        "type": "Gaming Platform"
    },
    {
        "title": "League of Legends",
        "url": "https://www.leagueoflegends.com",
        "description": "Multiplayer online battle arena (MOBA) game.",
        "type": "Online Game"
    },
    {
        "title": "Grammarly",
        "url": "https://www.grammarly.com",
        "description": "AI-powered writing assistant to improve your grammar.",
        "type": "Writing Tool"
    },
    {
        "title": "LastPass",
        "url": "https://www.lastpass.com",
        "description": "Password manager for securely storing and organizing passwords.",
        "type": "Security Tool"
    },
    {
        "title": "VLC Media Player",
        "url": "https://www.videolan.org/vlc/",
        "description": "Free and open-source media player for all video formats.",
        "type": "Media Player"
    },
    {
        "title": "ChatGPT",
        "url": "https://chatgpt.com",
        "description": "AI-powered chatbot for conversational assistance.",
        "type": "AI Assistant"
    },
    {
        "title": "Claude",
        "url": "https://claude.ai",
        "description": "Constitutional AI assistant by Anthropic.",
        "type": "AI Assistant"
    },
    {
        "title": "Kaggle",
        "url": "https://www.kaggle.com",
        "description": "Data science platform and machine learning competition site.",
        "type": "Data Platform"
    },
    {
        "title": "Gmail",
        "url": "https://mail.google.com",
        "description": "Fast, searchable, and secure email with 15GB of storage.",
        "type": "Email Service"
    },
    {
        "title": "Outlook",
        "url": "https://outlook.live.com",
        "description": "Microsoft's email and calendar service.",
        "type": "Email Service"
    },
    {
        "title": "ProtonMail",
        "url": "https://protonmail.com",
        "description": "Encrypted email service with privacy-first approach.",
        "type": "Email Service"
    },
    {
        "title": "Wikipedia",
        "url": "https://www.wikipedia.org",
        "description": "Free online encyclopedia that anyone can edit.",
        "type": "Encyclopedia",
        "subpages": [
            {
                "title": "Minecraft",
                "url": "https://en.wikipedia.org/wiki/Minecraft"
            },
            {
                "title": "Artificial Intelligence",
                "url": "https://en.wikipedia.org/wiki/Artificial_intelligence"
            },
            {
                "title": "Python (language)",
                "url": "https://en.wikipedia.org/wiki/Python_(programming_language)"
            },
            {
                "title": "Cloud Computing",
                "url": "https://en.wikipedia.org/wiki/Cloud_computing"
            },
            {
                "title": "Machine Learning",
                "url": "https://en.wikipedia.org/wiki/Machine_learning"
            }
        ]
    },
    {
        "title": "Internet Archive",
        "url": "https://archive.org",
        "description": "Digital library with millions of free books and files.",
        "type": "Digital Library"
    },
    {
        "title": "Project Gutenberg",
        "url": "https://www.gutenberg.org",
        "description": "Free ebooks - Over 70,000 titles available.",
        "type": "Ebook Library"
    },
    {
        "title": "Uber",
        "url": "https://www.uber.com",
        "description": "Get a ride, deliver food, or get a courier service.",
        "type": "Service"
    },
    {
        "title": "DoorDash",
        "url": "https://www.doordash.com",
        "description": "Food delivery service connecting diners with restaurants.",
        "type": "Delivery Service"
    },
    {
        "title": "Fiverr",
        "url": "https://www.fiverr.com",
        "description": "Marketplace for freelance services and gigs.",
        "type": "Marketplace"
    },
    {
        "title": "Upwork",
        "url": "https://www.upwork.com",
        "description": "Hire freelancers for projects and remote work.",
        "type": "Marketplace"
    }
];
