const DEFAULT_LINKS = [];

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
        "title": "Genius",
        "url": "https://genius.com",
        "description": "A platform for song lyrics, annotations, and music knowledge powered by artists and fans.",
        "type": "Music Knowledge Base"
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
    },
    [
  {
    "title": "Christa Pike",
    "url": "https://en.wikipedia.org/wiki/Christa_Pike",
    "description": "Biography and career of Christa Pike.",
    "type": "Person"
  },
  {
    "title": "2026 Asian Games medal table",
    "url": "https://en.wikipedia.org/wiki/2026_Asian_Games_medal_table",
    "description": "General reference article about 2026 Asian Games medal table.",
    "type": "General"
  },
  {
    "title": "India at the 2026 Asian Games",
    "url": "https://en.wikipedia.org/wiki/India_at_the_2026_Asian_Games",
    "description": "General reference article about India at the 2026 Asian Games.",
    "type": "General"
  },
  {
    "title": "Cornell 7",
    "url": "https://en.wikipedia.org/wiki/Cornell_7",
    "description": "General reference article about Cornell 7.",
    "type": "General"
  },
  {
    "title": "2026 Asian Games",
    "url": "https://en.wikipedia.org/wiki/2026_Asian_Games",
    "description": "General reference article about 2026 Asian Games.",
    "type": "General"
  },
  {
    "title": "Lizzie Borden",
    "url": "https://en.wikipedia.org/wiki/Lizzie_Borden",
    "description": "General reference article about Lizzie Borden.",
    "type": "General"
  },
  {
    "title": "Ted Kaczynski",
    "url": "https://en.wikipedia.org/wiki/Ted_Kaczynski",
    "description": "Biography and career of Ted Kaczynski.",
    "type": "Person"
  },
  {
    "title": "Chad Lowe",
    "url": "https://en.wikipedia.org/wiki/Chad_Lowe",
    "description": "General reference article about Chad Lowe.",
    "type": "General"
  },
  {
    "title": "Theory of mind",
    "url": "https://en.wikipedia.org/wiki/Theory_of_mind",
    "description": "General reference article about Theory of mind.",
    "type": "General"
  },
  {
    "title": "Instagram",
    "url": "https://en.wikipedia.org/wiki/Instagram",
    "description": "Technology and computing information about Instagram.",
    "type": "Technology"
  },
  {
    "title": "Esther Rantzen",
    "url": "https://en.wikipedia.org/wiki/Esther_Rantzen",
    "description": "General reference article about Esther Rantzen.",
    "type": "General"
  },
  {
    "title": "Deaths in 2026",
    "url": "https://en.wikipedia.org/wiki/Deaths_in_2026",
    "description": "General reference article about Deaths in 2026.",
    "type": "General"
  },
  {
    "title": "Digger (2026 film)",
    "url": "https://en.wikipedia.org/wiki/Digger_(2026_film)",
    "description": "General reference article about Digger (2026 film).",
    "type": "General"
  },
  {
    "title": "Dancing with the Stars (American TV series) season 35",
    "url": "https://en.wikipedia.org/wiki/Dancing_with_the_Stars_(American_TV_series)_season_35",
    "description": "Overview of Dancing with the Stars (American TV series) season 35, including its production and cultural context.",
    "type": "Film / TV"
  },
  {
    "title": "Aileen Wuornos",
    "url": "https://en.wikipedia.org/wiki/Aileen_Wuornos",
    "description": "General reference article about Aileen Wuornos.",
    "type": "General"
  },
  {
    "title": "Ben Rice",
    "url": "https://en.wikipedia.org/wiki/Ben_Rice",
    "description": "General reference article about Ben Rice.",
    "type": "General"
  },
  {
    "title": "Jack Smith (lawyer)",
    "url": "https://en.wikipedia.org/wiki/Jack_Smith_(lawyer)",
    "description": "General reference article about Jack Smith (lawyer).",
    "type": "General"
  },
  {
    "title": "Eric Schmitt",
    "url": "https://en.wikipedia.org/wiki/Eric_Schmitt",
    "description": "General reference article about Eric Schmitt.",
    "type": "General"
  },
  {
    "title": "Neatsville, Kentucky",
    "url": "https://en.wikipedia.org/wiki/Neatsville,_Kentucky",
    "description": "General reference article about Neatsville, Kentucky.",
    "type": "General"
  },
  {
    "title": "Pac (wrestler)",
    "url": "https://en.wikipedia.org/wiki/Pac_(wrestler)",
    "description": "General reference article about Pac (wrestler).",
    "type": "General"
  },
  {
    "title": "Primetime (film)",
    "url": "https://en.wikipedia.org/wiki/Primetime_(film)",
    "description": "Overview of Primetime (film), including its production and cultural context.",
    "type": "Film / TV"
  },
  {
    "title": "Shubman Gill",
    "url": "https://en.wikipedia.org/wiki/Shubman_Gill",
    "description": "General reference article about Shubman Gill.",
    "type": "General"
  },
  {
    "title": "Cam Schlittler",
    "url": "https://en.wikipedia.org/wiki/Cam_Schlittler",
    "description": "General reference article about Cam Schlittler.",
    "type": "General"
  },
  {
    "title": "Case Keenum",
    "url": "https://en.wikipedia.org/wiki/Case_Keenum",
    "description": "General reference article about Case Keenum.",
    "type": "General"
  },
  {
    "title": "Jeff Bezos",
    "url": "https://en.wikipedia.org/wiki/Jeff_Bezos",
    "description": "Biography and career of Jeff Bezos.",
    "type": "Person"
  },
  {
    "title": "Katie Britt",
    "url": "https://en.wikipedia.org/wiki/Katie_Britt",
    "description": "General reference article about Katie Britt.",
    "type": "General"
  },
  {
    "title": "Killing of the Clancy children",
    "url": "https://en.wikipedia.org/wiki/Killing_of_the_Clancy_children",
    "description": "General reference article about Killing of the Clancy children.",
    "type": "General"
  },
  {
    "title": "The Paradise (2026 Indian film)",
    "url": "https://en.wikipedia.org/wiki/The_Paradise_(2026_Indian_film)",
    "description": "General reference article about The Paradise (2026 Indian film).",
    "type": "General"
  },
  {
    "title": "Resident Evil (2026 film)",
    "url": "https://en.wikipedia.org/wiki/Resident_Evil_(2026_film)",
    "description": "General reference article about Resident Evil (2026 film).",
    "type": "General"
  },
  {
    "title": "Ted Lasso",
    "url": "https://en.wikipedia.org/wiki/Ted_Lasso",
    "description": "Overview of Ted Lasso, including its production and cultural context.",
    "type": "Film / TV"
  },
  {
    "title": "Ansel Adams",
    "url": "https://en.wikipedia.org/wiki/Ansel_Adams",
    "description": "General reference article about Ansel Adams.",
    "type": "General"
  },
  {
    "title": "Limonene",
    "url": "https://en.wikipedia.org/wiki/Limonene",
    "description": "General reference article about Limonene.",
    "type": "General"
  },
  {
    "title": "Wicknell Chivayo",
    "url": "https://en.wikipedia.org/wiki/Wicknell_Chivayo",
    "description": "General reference article about Wicknell Chivayo.",
    "type": "General"
  },
  {
    "title": "Verity (film)",
    "url": "https://en.wikipedia.org/wiki/Verity_(film)",
    "description": "Overview of Verity (film), including its production and cultural context.",
    "type": "Film / TV"
  },
  {
    "title": "Dennis Haskins",
    "url": "https://en.wikipedia.org/wiki/Dennis_Haskins",
    "description": "General reference article about Dennis Haskins.",
    "type": "General"
  },
  {
    "title": "Anthony Head",
    "url": "https://en.wikipedia.org/wiki/Anthony_Head",
    "description": "General reference article about Anthony Head.",
    "type": "General"
  },
  {
    "title": "Jenna Dewan",
    "url": "https://en.wikipedia.org/wiki/Jenna_Dewan",
    "description": "General reference article about Jenna Dewan.",
    "type": "General"
  },
  {
    "title": "National Day for Truth and Reconciliation",
    "url": "https://en.wikipedia.org/wiki/National_Day_for_Truth_and_Reconciliation",
    "description": "General reference article about National Day for Truth and Reconciliation.",
    "type": "General"
  },
  {
    "title": "United States",
    "url": "https://en.wikipedia.org/wiki/United_States",
    "description": "Geographical overview of United States.",
    "type": "Place / Geography"
  },
  {
    "title": "List of highest individual scores in One Day International cricket",
    "url": "https://en.wikipedia.org/wiki/List_of_highest_individual_scores_in_One_Day_International_cricket",
    "description": "Overview of List of highest individual scores in One Day International cricket in the world of sport.",
    "type": "Sports"
  },
  {
    "title": "John McAfee",
    "url": "https://en.wikipedia.org/wiki/John_McAfee",
    "description": "General reference article about John McAfee.",
    "type": "General"
  },
  {
    "title": "Flydubai Flight 1073",
    "url": "https://en.wikipedia.org/wiki/Flydubai_Flight_1073",
    "description": "General reference article about Flydubai Flight 1073.",
    "type": "General"
  },
  {
    "title": "Verity (novel)",
    "url": "https://en.wikipedia.org/wiki/Verity_(novel)",
    "description": "General reference article about Verity (novel).",
    "type": "General"
  },
  {
    "title": "List of S&P 500 companies",
    "url": "https://en.wikipedia.org/wiki/List_of_S&P_500_companies",
    "description": "General reference article about List of S&P 500 companies.",
    "type": "General"
  },
  {
    "title": "ChatGPT",
    "url": "https://en.wikipedia.org/wiki/ChatGPT",
    "description": "Technology and computing information about ChatGPT.",
    "type": "Technology"
  },
  {
    "title": "Ken Griffin",
    "url": "https://en.wikipedia.org/wiki/Ken_Griffin",
    "description": "General reference article about Ken Griffin.",
    "type": "General"
  },
  {
    "title": "Lanterns (TV series)",
    "url": "https://en.wikipedia.org/wiki/Lanterns_(TV_series)",
    "description": "Overview of Lanterns (TV series), including its production and cultural context.",
    "type": "Film / TV"
  },
  {
    "title": "Julia Stiles",
    "url": "https://en.wikipedia.org/wiki/Julia_Stiles",
    "description": "General reference article about Julia Stiles.",
    "type": "General"
  },
  {
    "title": "Slow Horses",
    "url": "https://en.wikipedia.org/wiki/Slow_Horses",
    "description": "General reference article about Slow Horses.",
    "type": "General"
  },
  {
    "title": "Promising Young Woman",
    "url": "https://en.wikipedia.org/wiki/Promising_Young_Woman",
    "description": "General reference article about Promising Young Woman.",
    "type": "General"
  },
  {
    "title": "Dorothy (film)",
    "url": "https://en.wikipedia.org/wiki/Dorothy_(film)",
    "description": "Overview of Dorothy (film), including its production and cultural context.",
    "type": "Film / TV"
  },
  {
    "title": "Amir Jangoo",
    "url": "https://en.wikipedia.org/wiki/Amir_Jangoo",
    "description": "General reference article about Amir Jangoo.",
    "type": "General"
  },
  {
    "title": "List of highest-grossing films",
    "url": "https://en.wikipedia.org/wiki/List_of_highest-grossing_films",
    "description": "General reference article about List of highest-grossing films.",
    "type": "General"
  },
  {
    "title": "Vithya Ramraj",
    "url": "https://en.wikipedia.org/wiki/Vithya_Ramraj",
    "description": "General reference article about Vithya Ramraj.",
    "type": "General"
  },
  {
    "title": "Andy Burnham",
    "url": "https://en.wikipedia.org/wiki/Andy_Burnham",
    "description": "General reference article about Andy Burnham.",
    "type": "General"
  },
  {
    "title": "Chris Hansen",
    "url": "https://en.wikipedia.org/wiki/Chris_Hansen",
    "description": "General reference article about Chris Hansen.",
    "type": "General"
  },
  {
    "title": "Donnie Brasco (film)",
    "url": "https://en.wikipedia.org/wiki/Donnie_Brasco_(film)",
    "description": "Overview of Donnie Brasco (film), including its production and cultural context.",
    "type": "Film / TV"
  },
  {
    "title": "Sophia Bush",
    "url": "https://en.wikipedia.org/wiki/Sophia_Bush",
    "description": "General reference article about Sophia Bush.",
    "type": "General"
  },
  {
    "title": "Hanuman Ansh",
    "url": "https://en.wikipedia.org/wiki/Hanuman_Ansh",
    "description": "General reference article about Hanuman Ansh.",
    "type": "General"
  },
  {
    "title": "Taylor Hanson",
    "url": "https://en.wikipedia.org/wiki/Taylor_Hanson",
    "description": "General reference article about Taylor Hanson.",
    "type": "General"
  },
  {
    "title": "Heart of the Beast",
    "url": "https://en.wikipedia.org/wiki/Heart_of_the_Beast",
    "description": "Overview of Heart of the Beast in art, culture, or entertainment.",
    "type": "Arts / Culture"
  },
  {
    "title": "Forgotten Island",
    "url": "https://en.wikipedia.org/wiki/Forgotten_Island",
    "description": "General reference article about Forgotten Island.",
    "type": "General"
  },
  {
    "title": "Payton Tolle",
    "url": "https://en.wikipedia.org/wiki/Payton_Tolle",
    "description": "General reference article about Payton Tolle.",
    "type": "General"
  },
  {
    "title": "Flydubai",
    "url": "https://en.wikipedia.org/wiki/Flydubai",
    "description": "General reference article about Flydubai.",
    "type": "General"
  },
  {
    "title": "Anne Hathaway",
    "url": "https://en.wikipedia.org/wiki/Anne_Hathaway",
    "description": "Biography and career of Anne Hathaway.",
    "type": "Person"
  },
  {
    "title": "Ella Beatty",
    "url": "https://en.wikipedia.org/wiki/Ella_Beatty",
    "description": "General reference article about Ella Beatty.",
    "type": "General"
  },
  {
    "title": "Rob Lowe",
    "url": "https://en.wikipedia.org/wiki/Rob_Lowe",
    "description": "General reference article about Rob Lowe.",
    "type": "General"
  },
  {
    "title": "Murders of Abigail Williams and Liberty German",
    "url": "https://en.wikipedia.org/wiki/Murders_of_Abigail_Williams_and_Liberty_German",
    "description": "General reference article about Murders of Abigail Williams and Liberty German.",
    "type": "General"
  },
  {
    "title": "Backrooms (film)",
    "url": "https://en.wikipedia.org/wiki/Backrooms_(film)",
    "description": "Overview of Backrooms (film), including its production and cultural context.",
    "type": "Film / TV"
  },
  {
    "title": "Job Corps",
    "url": "https://en.wikipedia.org/wiki/Job_Corps",
    "description": "General reference article about Job Corps.",
    "type": "General"
  },
  {
    "title": "Manchester City F.C.",
    "url": "https://en.wikipedia.org/wiki/Manchester_City_F.C.",
    "description": "General reference article about Manchester City F.C..",
    "type": "General"
  },
  {
    "title": "Unabomber (film)",
    "url": "https://en.wikipedia.org/wiki/Unabomber_(film)",
    "description": "Overview of Unabomber (film), including its production and cultural context.",
    "type": "Film / TV"
  },
  {
    "title": "Ezra Frech",
    "url": "https://en.wikipedia.org/wiki/Ezra_Frech",
    "description": "General reference article about Ezra Frech.",
    "type": "General"
  },
  {
    "title": "Cristiano Ronaldo",
    "url": "https://en.wikipedia.org/wiki/Cristiano_Ronaldo",
    "description": "Biography and career of Cristiano Ronaldo.",
    "type": "Person"
  },
  {
    "title": "Death of Nolan Wells",
    "url": "https://en.wikipedia.org/wiki/Death_of_Nolan_Wells",
    "description": "General reference article about Death of Nolan Wells.",
    "type": "General"
  },
  {
    "title": "India at the 2022 Asian Games",
    "url": "https://en.wikipedia.org/wiki/India_at_the_2022_Asian_Games",
    "description": "General reference article about India at the 2022 Asian Games.",
    "type": "General"
  },
  {
    "title": "Cornell University",
    "url": "https://en.wikipedia.org/wiki/Cornell_University",
    "description": "Overview of Cornell University, its history, and its activities.",
    "type": "Organization"
  },
  {
    "title": "YouTube",
    "url": "https://en.wikipedia.org/wiki/YouTube",
    "description": "Technology and computing information about YouTube.",
    "type": "Technology"
  },
  {
    "title": "Nigella Lawson",
    "url": "https://en.wikipedia.org/wiki/Nigella_Lawson",
    "description": "General reference article about Nigella Lawson.",
    "type": "General"
  },
  {
    "title": "Rohit Sharma",
    "url": "https://en.wikipedia.org/wiki/Rohit_Sharma",
    "description": "Biography and career of Rohit Sharma.",
    "type": "Person"
  },
  {
    "title": "Wikipedia",
    "url": "https://en.wikipedia.org/wiki/Wikipedia",
    "description": "Overview of Wikipedia, its history, and its activities.",
    "type": "Organization"
  },
  {
    "title": "Annette Badland",
    "url": "https://en.wikipedia.org/wiki/Annette_Badland",
    "description": "General reference article about Annette Badland.",
    "type": "General"
  },
  {
    "title": "Dakota Johnson",
    "url": "https://en.wikipedia.org/wiki/Dakota_Johnson",
    "description": "General reference article about Dakota Johnson.",
    "type": "General"
  },
  {
    "title": "Kate Upton",
    "url": "https://en.wikipedia.org/wiki/Kate_Upton",
    "description": "General reference article about Kate Upton.",
    "type": "General"
  },
  {
    "title": "The Odyssey (2026 film)",
    "url": "https://en.wikipedia.org/wiki/The_Odyssey_(2026_film)",
    "description": "General reference article about The Odyssey (2026 film).",
    "type": "General"
  },
  {
    "title": "Justin Verlander",
    "url": "https://en.wikipedia.org/wiki/Justin_Verlander",
    "description": "General reference article about Justin Verlander.",
    "type": "General"
  },
  {
    "title": "Dancing with the Stars (American TV series)",
    "url": "https://en.wikipedia.org/wiki/Dancing_with_the_Stars_(American_TV_series)",
    "description": "Overview of Dancing with the Stars (American TV series), including its production and cultural context.",
    "type": "Film / TV"
  },
  {
    "title": "Sylvester Stallone",
    "url": "https://en.wikipedia.org/wiki/Sylvester_Stallone",
    "description": "Biography and career of Sylvester Stallone.",
    "type": "Person"
  },
  {
    "title": "Tom Bateman (actor)",
    "url": "https://en.wikipedia.org/wiki/Tom_Bateman_(actor)",
    "description": "General reference article about Tom Bateman (actor).",
    "type": "General"
  },
  {
    "title": "Desmond Wilcox",
    "url": "https://en.wikipedia.org/wiki/Desmond_Wilcox",
    "description": "General reference article about Desmond Wilcox.",
    "type": "General"
  },
  {
    "title": "Tyler Cameron",
    "url": "https://en.wikipedia.org/wiki/Tyler_Cameron",
    "description": "General reference article about Tyler Cameron.",
    "type": "General"
  },
  {
    "title": "Artificial intelligence",
    "url": "https://en.wikipedia.org/wiki/Artificial_intelligence",
    "description": "Technology and computing information about Artificial intelligence.",
    "type": "Technology"
  },
  {
    "title": "Tatyana Ali",
    "url": "https://en.wikipedia.org/wiki/Tatyana_Ali",
    "description": "General reference article about Tatyana Ali.",
    "type": "General"
  },
  {
    "title": "JSON-LD",
    "url": "https://en.wikipedia.org/wiki/JSON-LD",
    "description": "General reference article about JSON-LD.",
    "type": "General"
  },
  {
    "title": "Africa",
    "url": "https://en.wikipedia.org/wiki/Africa",
    "description": "Geographical overview of Africa.",
    "type": "Place / Geography"
  },
  {
    "title": "Asia",
    "url": "https://en.wikipedia.org/wiki/Asia",
    "description": "Geographical overview of Asia.",
    "type": "Place / Geography"
  },
  {
    "title": "Europe",
    "url": "https://en.wikipedia.org/wiki/Europe",
    "description": "Geographical overview of Europe.",
    "type": "Place / Geography"
  },
  {
    "title": "North America",
    "url": "https://en.wikipedia.org/wiki/North_America",
    "description": "Geographical overview of North America.",
    "type": "Place / Geography"
  },
  {
    "title": "South America",
    "url": "https://en.wikipedia.org/wiki/South_America",
    "description": "Geographical overview of South America.",
    "type": "Place / Geography"
  },
  {
    "title": "Oceania",
    "url": "https://en.wikipedia.org/wiki/Oceania",
    "description": "Geographical overview of Oceania.",
    "type": "Place / Geography"
  },
  {
    "title": "Antarctica",
    "url": "https://en.wikipedia.org/wiki/Antarctica",
    "description": "Geographical overview of Antarctica.",
    "type": "Place / Geography"
  },
  {
    "title": "United Kingdom",
    "url": "https://en.wikipedia.org/wiki/United_Kingdom",
    "description": "Geographical overview of United Kingdom.",
    "type": "Place / Geography"
  },
  {
    "title": "European Union",
    "url": "https://en.wikipedia.org/wiki/European_Union",
    "description": "Overview of European Union, its history, and its activities.",
    "type": "Organization"
  },
  {
    "title": "Commonwealth of Nations",
    "url": "https://en.wikipedia.org/wiki/Commonwealth_of_Nations",
    "description": "General reference article about Commonwealth of Nations.",
    "type": "General"
  },
  {
    "title": "Arab League",
    "url": "https://en.wikipedia.org/wiki/Arab_League",
    "description": "Overview of Arab League in the world of sport.",
    "type": "Sports"
  },
  {
    "title": "Association of Southeast Asian Nations",
    "url": "https://en.wikipedia.org/wiki/Association_of_Southeast_Asian_Nations",
    "description": "General reference article about Association of Southeast Asian Nations.",
    "type": "General"
  },
  {
    "title": "G7",
    "url": "https://en.wikipedia.org/wiki/G7",
    "description": "General reference article about G7.",
    "type": "General"
  },
  {
    "title": "G20",
    "url": "https://en.wikipedia.org/wiki/G20",
    "description": "General reference article about G20.",
    "type": "General"
  },
  {
    "title": "Organization of Islamic Cooperation",
    "url": "https://en.wikipedia.org/wiki/Organization_of_Islamic_Cooperation",
    "description": "General reference article about Organization of Islamic Cooperation.",
    "type": "General"
  },
  {
    "title": "Organization of American States",
    "url": "https://en.wikipedia.org/wiki/Organization_of_American_States",
    "description": "General reference article about Organization of American States.",
    "type": "General"
  },
  {
    "title": "African Union",
    "url": "https://en.wikipedia.org/wiki/African_Union",
    "description": "General reference article about African Union.",
    "type": "General"
  },
  {
    "title": "Mercosur",
    "url": "https://en.wikipedia.org/wiki/Mercosur",
    "description": "General reference article about Mercosur.",
    "type": "General"
  },
  {
    "title": "BRICS",
    "url": "https://en.wikipedia.org/wiki/BRICS",
    "description": "General reference article about BRICS.",
    "type": "General"
  },
  {
    "title": "Schengen Area",
    "url": "https://en.wikipedia.org/wiki/Schengen_Area",
    "description": "General reference article about Schengen Area.",
    "type": "General"
  },
  {
    "title": "Eurozone",
    "url": "https://en.wikipedia.org/wiki/Eurozone",
    "description": "General reference article about Eurozone.",
    "type": "General"
  },
  {
    "title": "Baltic states",
    "url": "https://en.wikipedia.org/wiki/Baltic_states",
    "description": "General reference article about Baltic states.",
    "type": "General"
  },
  {
    "title": "Benelux",
    "url": "https://en.wikipedia.org/wiki/Benelux",
    "description": "General reference article about Benelux.",
    "type": "General"
  },
  {
    "title": "Scandinavia",
    "url": "https://en.wikipedia.org/wiki/Scandinavia",
    "description": "Geographical overview of Scandinavia.",
    "type": "Place / Geography"
  },
  {
    "title": "Central Asia",
    "url": "https://en.wikipedia.org/wiki/Central_Asia",
    "description": "General reference article about Central Asia.",
    "type": "General"
  },
  {
    "title": "Southeast Asia",
    "url": "https://en.wikipedia.org/wiki/Southeast_Asia",
    "description": "General reference article about Southeast Asia.",
    "type": "General"
  },
  {
    "title": "South Asia",
    "url": "https://en.wikipedia.org/wiki/South_Asia",
    "description": "General reference article about South Asia.",
    "type": "General"
  },
  {
    "title": "East Asia",
    "url": "https://en.wikipedia.org/wiki/East_Asia",
    "description": "General reference article about East Asia.",
    "type": "General"
  },
  {
    "title": "Middle East",
    "url": "https://en.wikipedia.org/wiki/Middle_East",
    "description": "General reference article about Middle East.",
    "type": "General"
  },
  {
    "title": "North Africa",
    "url": "https://en.wikipedia.org/wiki/North_Africa",
    "description": "General reference article about North Africa.",
    "type": "General"
  },
  {
    "title": "Sub-Saharan Africa",
    "url": "https://en.wikipedia.org/wiki/Sub-Saharan_Africa",
    "description": "General reference article about Sub-Saharan Africa.",
    "type": "General"
  },
  {
    "title": "Latin America",
    "url": "https://en.wikipedia.org/wiki/Latin_America",
    "description": "General reference article about Latin America.",
    "type": "General"
  },
  {
    "title": "Caribbean",
    "url": "https://en.wikipedia.org/wiki/Caribbean",
    "description": "General reference article about Caribbean.",
    "type": "General"
  },
  {
    "title": "Western Europe",
    "url": "https://en.wikipedia.org/wiki/Western_Europe",
    "description": "General reference article about Western Europe.",
    "type": "General"
  },
  {
    "title": "Eastern Europe",
    "url": "https://en.wikipedia.org/wiki/Eastern_Europe",
    "description": "General reference article about Eastern Europe.",
    "type": "General"
  },
  {
    "title": "Pacific Islands",
    "url": "https://en.wikipedia.org/wiki/Pacific_Islands",
    "description": "General reference article about Pacific Islands.",
    "type": "General"
  },
  {
    "title": "Indo-Pacific",
    "url": "https://en.wikipedia.org/wiki/Indo-Pacific",
    "description": "General reference article about Indo-Pacific.",
    "type": "General"
  },
  {
    "title": "Mediterranean",
    "url": "https://en.wikipedia.org/wiki/Mediterranean",
    "description": "General reference article about Mediterranean.",
    "type": "General"
  },
  {
    "title": "Black Sea",
    "url": "https://en.wikipedia.org/wiki/Black_Sea",
    "description": "General reference article about Black Sea.",
    "type": "General"
  },
  {
    "title": "Baltic Sea",
    "url": "https://en.wikipedia.org/wiki/Baltic_Sea",
    "description": "General reference article about Baltic Sea.",
    "type": "General"
  },
  {
    "title": "North Sea",
    "url": "https://en.wikipedia.org/wiki/North_Sea",
    "description": "General reference article about North Sea.",
    "type": "General"
  },
  {
    "title": "English Channel",
    "url": "https://en.wikipedia.org/wiki/English_Channel",
    "description": "General reference article about English Channel.",
    "type": "General"
  },
  {
    "title": "Bosporus",
    "url": "https://en.wikipedia.org/wiki/Bosporus",
    "description": "General reference article about Bosporus.",
    "type": "General"
  },
  {
    "title": "Panama Canal",
    "url": "https://en.wikipedia.org/wiki/Panama_Canal",
    "description": "General reference article about Panama Canal.",
    "type": "General"
  },
  {
    "title": "Suez Canal",
    "url": "https://en.wikipedia.org/wiki/Suez_Canal",
    "description": "General reference article about Suez Canal.",
    "type": "General"
  },
  {
    "title": "Strait of Gibraltar",
    "url": "https://en.wikipedia.org/wiki/Strait_of_Gibraltar",
    "description": "General reference article about Strait of Gibraltar.",
    "type": "General"
  },
  {
    "title": "Bering Strait",
    "url": "https://en.wikipedia.org/wiki/Bering_Strait",
    "description": "General reference article about Bering Strait.",
    "type": "General"
  },
  {
    "title": "Himalayas",
    "url": "https://en.wikipedia.org/wiki/Himalayas",
    "description": "Geographical overview of Himalayas.",
    "type": "Place / Geography"
  },
  {
    "title": "Tibetan Plateau",
    "url": "https://en.wikipedia.org/wiki/Tibetan_Plateau",
    "description": "General reference article about Tibetan Plateau.",
    "type": "General"
  },
  {
    "title": "Deccan Plateau",
    "url": "https://en.wikipedia.org/wiki/Deccan_Plateau",
    "description": "General reference article about Deccan Plateau.",
    "type": "General"
  },
  {
    "title": "Great Plains",
    "url": "https://en.wikipedia.org/wiki/Great_Plains",
    "description": "General reference article about Great Plains.",
    "type": "General"
  },
  {
    "title": "Appalachian Mountains",
    "url": "https://en.wikipedia.org/wiki/Appalachian_Mountains",
    "description": "General reference article about Appalachian Mountains.",
    "type": "General"
  },
  {
    "title": "Andes",
    "url": "https://en.wikipedia.org/wiki/Andes",
    "description": "Geographical overview of Andes.",
    "type": "Place / Geography"
  },
  {
    "title": "Amazon Basin",
    "url": "https://en.wikipedia.org/wiki/Amazon_Basin",
    "description": "General reference article about Amazon Basin.",
    "type": "General"
  },
  {
    "title": "Congo Basin",
    "url": "https://en.wikipedia.org/wiki/Congo_Basin",
    "description": "General reference article about Congo Basin.",
    "type": "General"
  },
  {
    "title": "Nile Delta",
    "url": "https://en.wikipedia.org/wiki/Nile_Delta",
    "description": "General reference article about Nile Delta.",
    "type": "General"
  },
  {
    "title": "Nile Valley",
    "url": "https://en.wikipedia.org/wiki/Nile_Valley",
    "description": "General reference article about Nile Valley.",
    "type": "General"
  },
  {
    "title": "Ganges",
    "url": "https://en.wikipedia.org/wiki/Ganges",
    "description": "General reference article about Ganges.",
    "type": "General"
  },
  {
    "title": "Indus River",
    "url": "https://en.wikipedia.org/wiki/Indus_River",
    "description": "General reference article about Indus River.",
    "type": "General"
  },
  {
    "title": "Yangtze River",
    "url": "https://en.wikipedia.org/wiki/Yangtze_River",
    "description": "General reference article about Yangtze River.",
    "type": "General"
  },
  {
    "title": "Yellow River",
    "url": "https://en.wikipedia.org/wiki/Yellow_River",
    "description": "General reference article about Yellow River.",
    "type": "General"
  },
  {
    "title": "Mekong",
    "url": "https://en.wikipedia.org/wiki/Mekong",
    "description": "General reference article about Mekong.",
    "type": "General"
  },
  {
    "title": "Volga",
    "url": "https://en.wikipedia.org/wiki/Volga",
    "description": "General reference article about Volga.",
    "type": "General"
  },
  {
    "title": "Danube",
    "url": "https://en.wikipedia.org/wiki/Danube",
    "description": "Geographical overview of Danube.",
    "type": "Place / Geography"
  },
  {
    "title": "Rhine",
    "url": "https://en.wikipedia.org/wiki/Rhine",
    "description": "Geographical overview of Rhine.",
    "type": "Place / Geography"
  },
  {
    "title": "Mississippi",
    "url": "https://en.wikipedia.org/wiki/Mississippi",
    "description": "General reference article about Mississippi.",
    "type": "General"
  },
  {
    "title": "Colorado River",
    "url": "https://en.wikipedia.org/wiki/Colorado_River",
    "description": "General reference article about Colorado River.",
    "type": "General"
  },
  {
    "title": "Columbia River",
    "url": "https://en.wikipedia.org/wiki/Columbia_River",
    "description": "General reference article about Columbia River.",
    "type": "General"
  },
  {
    "title": "Yukon River",
    "url": "https://en.wikipedia.org/wiki/Yukon_River",
    "description": "General reference article about Yukon River.",
    "type": "General"
  },
  {
    "title": "Murray River",
    "url": "https://en.wikipedia.org/wiki/Murray_River",
    "description": "General reference article about Murray River.",
    "type": "General"
  },
  {
    "title": "Great Lakes",
    "url": "https://en.wikipedia.org/wiki/Great_Lakes",
    "description": "Geographical overview of Great Lakes.",
    "type": "Place / Geography"
  },
  {
    "title": "Mediterranean Sea",
    "url": "https://en.wikipedia.org/wiki/Mediterranean_Sea",
    "description": "Geographical overview of Mediterranean Sea.",
    "type": "Place / Geography"
  },
  {
    "title": "Polynesia",
    "url": "https://en.wikipedia.org/wiki/Polynesia",
    "description": "General reference article about Polynesia.",
    "type": "General"
  },
  {
    "title": "Melanesia",
    "url": "https://en.wikipedia.org/wiki/Melanesia",
    "description": "General reference article about Melanesia.",
    "type": "General"
  },
  {
    "title": "Micronesia",
    "url": "https://en.wikipedia.org/wiki/Micronesia",
    "description": "Geographical overview of Micronesia.",
    "type": "Place / Geography"
  },
  {
    "title": "Japan",
    "url": "https://en.wikipedia.org/wiki/Japan",
    "description": "Geographical overview of Japan.",
    "type": "Place / Geography"
  },
  {
    "title": "Korea",
    "url": "https://en.wikipedia.org/wiki/Korea",
    "description": "General reference article about Korea.",
    "type": "General"
  },
  {
    "title": "China",
    "url": "https://en.wikipedia.org/wiki/China",
    "description": "Geographical overview of China.",
    "type": "Place / Geography"
  },
  {
    "title": "India",
    "url": "https://en.wikipedia.org/wiki/India",
    "description": "Geographical overview of India.",
    "type": "Place / Geography"
  },
  {
    "title": "Pakistan",
    "url": "https://en.wikipedia.org/wiki/Pakistan",
    "description": "Geographical overview of Pakistan.",
    "type": "Place / Geography"
  },
  {
    "title": "Bangladesh",
    "url": "https://en.wikipedia.org/wiki/Bangladesh",
    "description": "Geographical overview of Bangladesh.",
    "type": "Place / Geography"
  },
  {
    "title": "Nepal",
    "url": "https://en.wikipedia.org/wiki/Nepal",
    "description": "Geographical overview of Nepal.",
    "type": "Place / Geography"
  },
  {
    "title": "Sri Lanka",
    "url": "https://en.wikipedia.org/wiki/Sri_Lanka",
    "description": "Geographical overview of Sri Lanka.",
    "type": "Place / Geography"
  },
  {
    "title": "Thailand",
    "url": "https://en.wikipedia.org/wiki/Thailand",
    "description": "Geographical overview of Thailand.",
    "type": "Place / Geography"
  },
  {
    "title": "Vietnam",
    "url": "https://en.wikipedia.org/wiki/Vietnam",
    "description": "Geographical overview of Vietnam.",
    "type": "Place / Geography"
  },
  {
    "title": "Malaysia",
    "url": "https://en.wikipedia.org/wiki/Malaysia",
    "description": "Geographical overview of Malaysia.",
    "type": "Place / Geography"
  },
  {
    "title": "Indonesia",
    "url": "https://en.wikipedia.org/wiki/Indonesia",
    "description": "Geographical overview of Indonesia.",
    "type": "Place / Geography"
  },
  {
    "title": "Philippines",
    "url": "https://en.wikipedia.org/wiki/Philippines",
    "description": "Geographical overview of Philippines.",
    "type": "Place / Geography"
  },
  {
    "title": "Australia",
    "url": "https://en.wikipedia.org/wiki/Australia",
    "description": "Geographical overview of Australia.",
    "type": "Place / Geography"
  },
  {
    "title": "New Zealand",
    "url": "https://en.wikipedia.org/wiki/New_Zealand",
    "description": "Geographical overview of New Zealand.",
    "type": "Place / Geography"
  },
  {
    "title": "Afghanistan",
    "url": "https://en.wikipedia.org/wiki/Afghanistan",
    "description": "Geographical overview of Afghanistan.",
    "type": "Place / Geography"
  },
  {
    "title": "Albania",
    "url": "https://en.wikipedia.org/wiki/Albania",
    "description": "Geographical overview of Albania.",
    "type": "Place / Geography"
  },
  {
    "title": "Algeria",
    "url": "https://en.wikipedia.org/wiki/Algeria",
    "description": "Geographical overview of Algeria.",
    "type": "Place / Geography"
  },
  {
    "title": "Andorra",
    "url": "https://en.wikipedia.org/wiki/Andorra",
    "description": "Geographical overview of Andorra.",
    "type": "Place / Geography"
  },
  {
    "title": "Angola",
    "url": "https://en.wikipedia.org/wiki/Angola",
    "description": "Geographical overview of Angola.",
    "type": "Place / Geography"
  },
  {
    "title": "Antigua and Barbuda",
    "url": "https://en.wikipedia.org/wiki/Antigua_and_Barbuda",
    "description": "Geographical overview of Antigua and Barbuda.",
    "type": "Place / Geography"
  },
  {
    "title": "Argentina",
    "url": "https://en.wikipedia.org/wiki/Argentina",
    "description": "Geographical overview of Argentina.",
    "type": "Place / Geography"
  },
  {
    "title": "Armenia",
    "url": "https://en.wikipedia.org/wiki/Armenia",
    "description": "Geographical overview of Armenia.",
    "type": "Place / Geography"
  },
  {
    "title": "Austria",
    "url": "https://en.wikipedia.org/wiki/Austria",
    "description": "Geographical overview of Austria.",
    "type": "Place / Geography"
  },
  {
    "title": "Azerbaijan",
    "url": "https://en.wikipedia.org/wiki/Azerbaijan",
    "description": "Geographical overview of Azerbaijan.",
    "type": "Place / Geography"
  },
  {
    "title": "Bahamas",
    "url": "https://en.wikipedia.org/wiki/Bahamas",
    "description": "Geographical overview of Bahamas.",
    "type": "Place / Geography"
  },
  {
    "title": "Bahrain",
    "url": "https://en.wikipedia.org/wiki/Bahrain",
    "description": "Geographical overview of Bahrain.",
    "type": "Place / Geography"
  },
  {
    "title": "Barbados",
    "url": "https://en.wikipedia.org/wiki/Barbados",
    "description": "Geographical overview of Barbados.",
    "type": "Place / Geography"
  },
  {
    "title": "Belarus",
    "url": "https://en.wikipedia.org/wiki/Belarus",
    "description": "Geographical overview of Belarus.",
    "type": "Place / Geography"
  },
  {
    "title": "Belgium",
    "url": "https://en.wikipedia.org/wiki/Belgium",
    "description": "Geographical overview of Belgium.",
    "type": "Place / Geography"
  },
  {
    "title": "Belize",
    "url": "https://en.wikipedia.org/wiki/Belize",
    "description": "Geographical overview of Belize.",
    "type": "Place / Geography"
  },
  {
    "title": "Benin",
    "url": "https://en.wikipedia.org/wiki/Benin",
    "description": "Geographical overview of Benin.",
    "type": "Place / Geography"
  },
  {
    "title": "Bhutan",
    "url": "https://en.wikipedia.org/wiki/Bhutan",
    "description": "Geographical overview of Bhutan.",
    "type": "Place / Geography"
  },
  {
    "title": "Bolivia",
    "url": "https://en.wikipedia.org/wiki/Bolivia",
    "description": "Geographical overview of Bolivia.",
    "type": "Place / Geography"
  },
  {
    "title": "Bosnia and Herzegovina",
    "url": "https://en.wikipedia.org/wiki/Bosnia_and_Herzegovina",
    "description": "Geographical overview of Bosnia and Herzegovina.",
    "type": "Place / Geography"
  },
  {
    "title": "Botswana",
    "url": "https://en.wikipedia.org/wiki/Botswana",
    "description": "Geographical overview of Botswana.",
    "type": "Place / Geography"
  },
  {
    "title": "Brazil",
    "url": "https://en.wikipedia.org/wiki/Brazil",
    "description": "Geographical overview of Brazil.",
    "type": "Place / Geography"
  },
  {
    "title": "Brunei",
    "url": "https://en.wikipedia.org/wiki/Brunei",
    "description": "Geographical overview of Brunei.",
    "type": "Place / Geography"
  },
  {
    "title": "Bulgaria",
    "url": "https://en.wikipedia.org/wiki/Bulgaria",
    "description": "Geographical overview of Bulgaria.",
    "type": "Place / Geography"
  },
  {
    "title": "Burkina Faso",
    "url": "https://en.wikipedia.org/wiki/Burkina_Faso",
    "description": "Geographical overview of Burkina Faso.",
    "type": "Place / Geography"
  },
  {
    "title": "Burundi",
    "url": "https://en.wikipedia.org/wiki/Burundi",
    "description": "Geographical overview of Burundi.",
    "type": "Place / Geography"
  },
  {
    "title": "Cabo Verde",
    "url": "https://en.wikipedia.org/wiki/Cabo_Verde",
    "description": "Geographical overview of Cabo Verde.",
    "type": "Place / Geography"
  },
  {
    "title": "Cambodia",
    "url": "https://en.wikipedia.org/wiki/Cambodia",
    "description": "Geographical overview of Cambodia.",
    "type": "Place / Geography"
  },
  {
    "title": "Cameroon",
    "url": "https://en.wikipedia.org/wiki/Cameroon",
    "description": "Geographical overview of Cameroon.",
    "type": "Place / Geography"
  },
  {
    "title": "Canada",
    "url": "https://en.wikipedia.org/wiki/Canada",
    "description": "Geographical overview of Canada.",
    "type": "Place / Geography"
  },
  {
    "title": "Central African Republic",
    "url": "https://en.wikipedia.org/wiki/Central_African_Republic",
    "description": "Geographical overview of Central African Republic.",
    "type": "Place / Geography"
  },
  {
    "title": "Chad",
    "url": "https://en.wikipedia.org/wiki/Chad",
    "description": "Geographical overview of Chad.",
    "type": "Place / Geography"
  },
  {
    "title": "Chile",
    "url": "https://en.wikipedia.org/wiki/Chile",
    "description": "Geographical overview of Chile.",
    "type": "Place / Geography"
  },
  {
    "title": "Colombia",
    "url": "https://en.wikipedia.org/wiki/Colombia",
    "description": "Geographical overview of Colombia.",
    "type": "Place / Geography"
  },
  {
    "title": "Comoros",
    "url": "https://en.wikipedia.org/wiki/Comoros",
    "description": "Geographical overview of Comoros.",
    "type": "Place / Geography"
  },
  {
    "title": "Costa Rica",
    "url": "https://en.wikipedia.org/wiki/Costa_Rica",
    "description": "Geographical overview of Costa Rica.",
    "type": "Place / Geography"
  },
  {
    "title": "Croatia",
    "url": "https://en.wikipedia.org/wiki/Croatia",
    "description": "Geographical overview of Croatia.",
    "type": "Place / Geography"
  },
  {
    "title": "Cuba",
    "url": "https://en.wikipedia.org/wiki/Cuba",
    "description": "Geographical overview of Cuba.",
    "type": "Place / Geography"
  },
  {
    "title": "Cyprus",
    "url": "https://en.wikipedia.org/wiki/Cyprus",
    "description": "Geographical overview of Cyprus.",
    "type": "Place / Geography"
  },
  {
    "title": "Czech Republic",
    "url": "https://en.wikipedia.org/wiki/Czech_Republic",
    "description": "Geographical overview of Czech Republic.",
    "type": "Place / Geography"
  },
  {
    "title": "Democratic Republic of the Congo",
    "url": "https://en.wikipedia.org/wiki/Democratic_Republic_of_the_Congo",
    "description": "Geographical overview of Democratic Republic of the Congo.",
    "type": "Place / Geography"
  },
  {
    "title": "Denmark",
    "url": "https://en.wikipedia.org/wiki/Denmark",
    "description": "Geographical overview of Denmark.",
    "type": "Place / Geography"
  },
  {
    "title": "Djibouti",
    "url": "https://en.wikipedia.org/wiki/Djibouti",
    "description": "Geographical overview of Djibouti.",
    "type": "Place / Geography"
  },
  {
    "title": "Dominica",
    "url": "https://en.wikipedia.org/wiki/Dominica",
    "description": "Geographical overview of Dominica.",
    "type": "Place / Geography"
  },
  {
    "title": "Dominican Republic",
    "url": "https://en.wikipedia.org/wiki/Dominican_Republic",
    "description": "Geographical overview of Dominican Republic.",
    "type": "Place / Geography"
  },
  {
    "title": "Ecuador",
    "url": "https://en.wikipedia.org/wiki/Ecuador",
    "description": "Geographical overview of Ecuador.",
    "type": "Place / Geography"
  },
  {
    "title": "Egypt",
    "url": "https://en.wikipedia.org/wiki/Egypt",
    "description": "Geographical overview of Egypt.",
    "type": "Place / Geography"
  },
  {
    "title": "El Salvador",
    "url": "https://en.wikipedia.org/wiki/El_Salvador",
    "description": "Geographical overview of El Salvador.",
    "type": "Place / Geography"
  },
  {
    "title": "Equatorial Guinea",
    "url": "https://en.wikipedia.org/wiki/Equatorial_Guinea",
    "description": "Geographical overview of Equatorial Guinea.",
    "type": "Place / Geography"
  },
  {
    "title": "Eritrea",
    "url": "https://en.wikipedia.org/wiki/Eritrea",
    "description": "Geographical overview of Eritrea.",
    "type": "Place / Geography"
  },
  {
    "title": "Estonia",
    "url": "https://en.wikipedia.org/wiki/Estonia",
    "description": "Geographical overview of Estonia.",
    "type": "Place / Geography"
  },
  {
    "title": "Eswatini",
    "url": "https://en.wikipedia.org/wiki/Eswatini",
    "description": "Geographical overview of Eswatini.",
    "type": "Place / Geography"
  },
  {
    "title": "Ethiopia",
    "url": "https://en.wikipedia.org/wiki/Ethiopia",
    "description": "Geographical overview of Ethiopia.",
    "type": "Place / Geography"
  },
  {
    "title": "Fiji",
    "url": "https://en.wikipedia.org/wiki/Fiji",
    "description": "Geographical overview of Fiji.",
    "type": "Place / Geography"
  },
  {
    "title": "Finland",
    "url": "https://en.wikipedia.org/wiki/Finland",
    "description": "Geographical overview of Finland.",
    "type": "Place / Geography"
  },
  {
    "title": "France",
    "url": "https://en.wikipedia.org/wiki/France",
    "description": "Geographical overview of France.",
    "type": "Place / Geography"
  },
  {
    "title": "Gabon",
    "url": "https://en.wikipedia.org/wiki/Gabon",
    "description": "Geographical overview of Gabon.",
    "type": "Place / Geography"
  },
  {
    "title": "Gambia",
    "url": "https://en.wikipedia.org/wiki/Gambia",
    "description": "Geographical overview of Gambia.",
    "type": "Place / Geography"
  },
  {
    "title": "Georgia (country)",
    "url": "https://en.wikipedia.org/wiki/Georgia_(country)",
    "description": "Geographical overview of Georgia (country).",
    "type": "Place / Geography"
  },
  {
    "title": "Germany",
    "url": "https://en.wikipedia.org/wiki/Germany",
    "description": "Geographical overview of Germany.",
    "type": "Place / Geography"
  },
  {
    "title": "Ghana",
    "url": "https://en.wikipedia.org/wiki/Ghana",
    "description": "Geographical overview of Ghana.",
    "type": "Place / Geography"
  },
  {
    "title": "Greece",
    "url": "https://en.wikipedia.org/wiki/Greece",
    "description": "Geographical overview of Greece.",
    "type": "Place / Geography"
  },
  {
    "title": "Grenada",
    "url": "https://en.wikipedia.org/wiki/Grenada",
    "description": "Geographical overview of Grenada.",
    "type": "Place / Geography"
  },
  {
    "title": "Guatemala",
    "url": "https://en.wikipedia.org/wiki/Guatemala",
    "description": "Geographical overview of Guatemala.",
    "type": "Place / Geography"
  },
  {
    "title": "Guinea",
    "url": "https://en.wikipedia.org/wiki/Guinea",
    "description": "Geographical overview of Guinea.",
    "type": "Place / Geography"
  },
  {
    "title": "Guinea-Bissau",
    "url": "https://en.wikipedia.org/wiki/Guinea-Bissau",
    "description": "Geographical overview of Guinea-Bissau.",
    "type": "Place / Geography"
  },
  {
    "title": "Guyana",
    "url": "https://en.wikipedia.org/wiki/Guyana",
    "description": "Geographical overview of Guyana.",
    "type": "Place / Geography"
  },
  {
    "title": "Haiti",
    "url": "https://en.wikipedia.org/wiki/Haiti",
    "description": "Geographical overview of Haiti.",
    "type": "Place / Geography"
  },
  {
    "title": "Honduras",
    "url": "https://en.wikipedia.org/wiki/Honduras",
    "description": "Geographical overview of Honduras.",
    "type": "Place / Geography"
  },
  {
    "title": "Hungary",
    "url": "https://en.wikipedia.org/wiki/Hungary",
    "description": "Geographical overview of Hungary.",
    "type": "Place / Geography"
  },
  {
    "title": "Iceland",
    "url": "https://en.wikipedia.org/wiki/Iceland",
    "description": "Geographical overview of Iceland.",
    "type": "Place / Geography"
  },
  {
    "title": "Iran",
    "url": "https://en.wikipedia.org/wiki/Iran",
    "description": "Geographical overview of Iran.",
    "type": "Place / Geography"
  },
  {
    "title": "Iraq",
    "url": "https://en.wikipedia.org/wiki/Iraq",
    "description": "Geographical overview of Iraq.",
    "type": "Place / Geography"
  },
  {
    "title": "Ireland",
    "url": "https://en.wikipedia.org/wiki/Ireland",
    "description": "Geographical overview of Ireland.",
    "type": "Place / Geography"
  },
  {
    "title": "Israel",
    "url": "https://en.wikipedia.org/wiki/Israel",
    "description": "Geographical overview of Israel.",
    "type": "Place / Geography"
  },
  {
    "title": "Italy",
    "url": "https://en.wikipedia.org/wiki/Italy",
    "description": "Geographical overview of Italy.",
    "type": "Place / Geography"
  },
  {
    "title": "Jamaica",
    "url": "https://en.wikipedia.org/wiki/Jamaica",
    "description": "Geographical overview of Jamaica.",
    "type": "Place / Geography"
  },
  {
    "title": "Jordan",
    "url": "https://en.wikipedia.org/wiki/Jordan",
    "description": "Geographical overview of Jordan.",
    "type": "Place / Geography"
  },
  {
    "title": "Kazakhstan",
    "url": "https://en.wikipedia.org/wiki/Kazakhstan",
    "description": "Geographical overview of Kazakhstan.",
    "type": "Place / Geography"
  },
  {
    "title": "Kenya",
    "url": "https://en.wikipedia.org/wiki/Kenya",
    "description": "Geographical overview of Kenya.",
    "type": "Place / Geography"
  },
  {
    "title": "Kiribati",
    "url": "https://en.wikipedia.org/wiki/Kiribati",
    "description": "Geographical overview of Kiribati.",
    "type": "Place / Geography"
  },
  {
    "title": "Kuwait",
    "url": "https://en.wikipedia.org/wiki/Kuwait",
    "description": "Geographical overview of Kuwait.",
    "type": "Place / Geography"
  },
  {
    "title": "Kyrgyzstan",
    "url": "https://en.wikipedia.org/wiki/Kyrgyzstan",
    "description": "Geographical overview of Kyrgyzstan.",
    "type": "Place / Geography"
  },
  {
    "title": "Laos",
    "url": "https://en.wikipedia.org/wiki/Laos",
    "description": "Geographical overview of Laos.",
    "type": "Place / Geography"
  },
  {
    "title": "Latvia",
    "url": "https://en.wikipedia.org/wiki/Latvia",
    "description": "Geographical overview of Latvia.",
    "type": "Place / Geography"
  },
  {
    "title": "Lebanon",
    "url": "https://en.wikipedia.org/wiki/Lebanon",
    "description": "Geographical overview of Lebanon.",
    "type": "Place / Geography"
  },
  {
    "title": "Lesotho",
    "url": "https://en.wikipedia.org/wiki/Lesotho",
    "description": "Geographical overview of Lesotho.",
    "type": "Place / Geography"
  },
  {
    "title": "Liberia",
    "url": "https://en.wikipedia.org/wiki/Liberia",
    "description": "Geographical overview of Liberia.",
    "type": "Place / Geography"
  },
  {
    "title": "Libya",
    "url": "https://en.wikipedia.org/wiki/Libya",
    "description": "Geographical overview of Libya.",
    "type": "Place / Geography"
  },
  {
    "title": "Liechtenstein",
    "url": "https://en.wikipedia.org/wiki/Liechtenstein",
    "description": "Geographical overview of Liechtenstein.",
    "type": "Place / Geography"
  },
  {
    "title": "Lithuania",
    "url": "https://en.wikipedia.org/wiki/Lithuania",
    "description": "Geographical overview of Lithuania.",
    "type": "Place / Geography"
  },
  {
    "title": "Luxembourg",
    "url": "https://en.wikipedia.org/wiki/Luxembourg",
    "description": "Geographical overview of Luxembourg.",
    "type": "Place / Geography"
  },
  {
    "title": "Madagascar",
    "url": "https://en.wikipedia.org/wiki/Madagascar",
    "description": "Geographical overview of Madagascar.",
    "type": "Place / Geography"
  },
  {
    "title": "Malawi",
    "url": "https://en.wikipedia.org/wiki/Malawi",
    "description": "Geographical overview of Malawi.",
    "type": "Place / Geography"
  },
  {
    "title": "Maldives",
    "url": "https://en.wikipedia.org/wiki/Maldives",
    "description": "Geographical overview of Maldives.",
    "type": "Place / Geography"
  },
  {
    "title": "Mali",
    "url": "https://en.wikipedia.org/wiki/Mali",
    "description": "Geographical overview of Mali.",
    "type": "Place / Geography"
  },
  {
    "title": "Malta",
    "url": "https://en.wikipedia.org/wiki/Malta",
    "description": "Geographical overview of Malta.",
    "type": "Place / Geography"
  },
  {
    "title": "Marshall Islands",
    "url": "https://en.wikipedia.org/wiki/Marshall_Islands",
    "description": "Geographical overview of Marshall Islands.",
    "type": "Place / Geography"
  },
  {
    "title": "Mauritania",
    "url": "https://en.wikipedia.org/wiki/Mauritania",
    "description": "Geographical overview of Mauritania.",
    "type": "Place / Geography"
  },
  {
    "title": "Mauritius",
    "url": "https://en.wikipedia.org/wiki/Mauritius",
    "description": "Geographical overview of Mauritius.",
    "type": "Place / Geography"
  },
  {
    "title": "Mexico",
    "url": "https://en.wikipedia.org/wiki/Mexico",
    "description": "Geographical overview of Mexico.",
    "type": "Place / Geography"
  },
  {
    "title": "Moldova",
    "url": "https://en.wikipedia.org/wiki/Moldova",
    "description": "Geographical overview of Moldova.",
    "type": "Place / Geography"
  },
  {
    "title": "Monaco",
    "url": "https://en.wikipedia.org/wiki/Monaco",
    "description": "Geographical overview of Monaco.",
    "type": "Place / Geography"
  },
  {
    "title": "Mongolia",
    "url": "https://en.wikipedia.org/wiki/Mongolia",
    "description": "Geographical overview of Mongolia.",
    "type": "Place / Geography"
  },
  {
    "title": "Montenegro",
    "url": "https://en.wikipedia.org/wiki/Montenegro",
    "description": "Geographical overview of Montenegro.",
    "type": "Place / Geography"
  },
  {
    "title": "Morocco",
    "url": "https://en.wikipedia.org/wiki/Morocco",
    "description": "Geographical overview of Morocco.",
    "type": "Place / Geography"
  },
  {
    "title": "Mozambique",
    "url": "https://en.wikipedia.org/wiki/Mozambique",
    "description": "Geographical overview of Mozambique.",
    "type": "Place / Geography"
  },
  {
    "title": "Myanmar",
    "url": "https://en.wikipedia.org/wiki/Myanmar",
    "description": "Geographical overview of Myanmar.",
    "type": "Place / Geography"
  },
  {
    "title": "Namibia",
    "url": "https://en.wikipedia.org/wiki/Namibia",
    "description": "Geographical overview of Namibia.",
    "type": "Place / Geography"
  },
  {
    "title": "Nauru",
    "url": "https://en.wikipedia.org/wiki/Nauru",
    "description": "Geographical overview of Nauru.",
    "type": "Place / Geography"
  },
  {
    "title": "Netherlands",
    "url": "https://en.wikipedia.org/wiki/Netherlands",
    "description": "Geographical overview of Netherlands.",
    "type": "Place / Geography"
  },
  {
    "title": "Nicaragua",
    "url": "https://en.wikipedia.org/wiki/Nicaragua",
    "description": "Geographical overview of Nicaragua.",
    "type": "Place / Geography"
  },
  {
    "title": "Niger",
    "url": "https://en.wikipedia.org/wiki/Niger",
    "description": "Geographical overview of Niger.",
    "type": "Place / Geography"
  },
  {
    "title": "Nigeria",
    "url": "https://en.wikipedia.org/wiki/Nigeria",
    "description": "Geographical overview of Nigeria.",
    "type": "Place / Geography"
  },
  {
    "title": "North Korea",
    "url": "https://en.wikipedia.org/wiki/North_Korea",
    "description": "Geographical overview of North Korea.",
    "type": "Place / Geography"
  },
  {
    "title": "North Macedonia",
    "url": "https://en.wikipedia.org/wiki/North_Macedonia",
    "description": "Geographical overview of North Macedonia.",
    "type": "Place / Geography"
  },
  {
    "title": "Norway",
    "url": "https://en.wikipedia.org/wiki/Norway",
    "description": "Geographical overview of Norway.",
    "type": "Place / Geography"
  },
  {
    "title": "Oman",
    "url": "https://en.wikipedia.org/wiki/Oman",
    "description": "Geographical overview of Oman.",
    "type": "Place / Geography"
  },
  {
    "title": "Palau",
    "url": "https://en.wikipedia.org/wiki/Palau",
    "description": "Geographical overview of Palau.",
    "type": "Place / Geography"
  },
  {
    "title": "Palestine",
    "url": "https://en.wikipedia.org/wiki/Palestine",
    "description": "Geographical overview of Palestine.",
    "type": "Place / Geography"
  },
  {
    "title": "Panama",
    "url": "https://en.wikipedia.org/wiki/Panama",
    "description": "Geographical overview of Panama.",
    "type": "Place / Geography"
  },
  {
    "title": "Papua New Guinea",
    "url": "https://en.wikipedia.org/wiki/Papua_New_Guinea",
    "description": "Geographical overview of Papua New Guinea.",
    "type": "Place / Geography"
  },
  {
    "title": "Paraguay",
    "url": "https://en.wikipedia.org/wiki/Paraguay",
    "description": "Geographical overview of Paraguay.",
    "type": "Place / Geography"
  },
  {
    "title": "Peru",
    "url": "https://en.wikipedia.org/wiki/Peru",
    "description": "Geographical overview of Peru.",
    "type": "Place / Geography"
  },
  {
    "title": "Poland",
    "url": "https://en.wikipedia.org/wiki/Poland",
    "description": "Geographical overview of Poland.",
    "type": "Place / Geography"
  },
  {
    "title": "Portugal",
    "url": "https://en.wikipedia.org/wiki/Portugal",
    "description": "Geographical overview of Portugal.",
    "type": "Place / Geography"
  },
  {
    "title": "Qatar",
    "url": "https://en.wikipedia.org/wiki/Qatar",
    "description": "Geographical overview of Qatar.",
    "type": "Place / Geography"
  },
  {
    "title": "Republic of the Congo",
    "url": "https://en.wikipedia.org/wiki/Republic_of_the_Congo",
    "description": "Geographical overview of Republic of the Congo.",
    "type": "Place / Geography"
  },
  {
    "title": "Romania",
    "url": "https://en.wikipedia.org/wiki/Romania",
    "description": "Geographical overview of Romania.",
    "type": "Place / Geography"
  },
  {
    "title": "Russia",
    "url": "https://en.wikipedia.org/wiki/Russia",
    "description": "Geographical overview of Russia.",
    "type": "Place / Geography"
  },
  {
    "title": "Rwanda",
    "url": "https://en.wikipedia.org/wiki/Rwanda",
    "description": "Geographical overview of Rwanda.",
    "type": "Place / Geography"
  },
  {
    "title": "Saint Kitts and Nevis",
    "url": "https://en.wikipedia.org/wiki/Saint_Kitts_and_Nevis",
    "description": "Geographical overview of Saint Kitts and Nevis.",
    "type": "Place / Geography"
  },
  {
    "title": "Saint Lucia",
    "url": "https://en.wikipedia.org/wiki/Saint_Lucia",
    "description": "Geographical overview of Saint Lucia.",
    "type": "Place / Geography"
  },
  {
    "title": "Saint Vincent and the Grenadines",
    "url": "https://en.wikipedia.org/wiki/Saint_Vincent_and_the_Grenadines",
    "description": "Geographical overview of Saint Vincent and the Grenadines.",
    "type": "Place / Geography"
  },
  {
    "title": "Samoa",
    "url": "https://en.wikipedia.org/wiki/Samoa",
    "description": "Geographical overview of Samoa.",
    "type": "Place / Geography"
  },
  {
    "title": "San Marino",
    "url": "https://en.wikipedia.org/wiki/San_Marino",
    "description": "Geographical overview of San Marino.",
    "type": "Place / Geography"
  },
  {
    "title": "São Tomé and Príncipe",
    "url": "https://en.wikipedia.org/wiki/S%C3%A3o_Tom%C3%A9_and_Pr%C3%ADncipe",
    "description": "Geographical overview of São Tomé and Príncipe.",
    "type": "Place / Geography"
  },
  {
    "title": "Saudi Arabia",
    "url": "https://en.wikipedia.org/wiki/Saudi_Arabia",
    "description": "Geographical overview of Saudi Arabia.",
    "type": "Place / Geography"
  },
  {
    "title": "Senegal",
    "url": "https://en.wikipedia.org/wiki/Senegal",
    "description": "Geographical overview of Senegal.",
    "type": "Place / Geography"
  },
  {
    "title": "Serbia",
    "url": "https://en.wikipedia.org/wiki/Serbia",
    "description": "Geographical overview of Serbia.",
    "type": "Place / Geography"
  },
  {
    "title": "Seychelles",
    "url": "https://en.wikipedia.org/wiki/Seychelles",
    "description": "Geographical overview of Seychelles.",
    "type": "Place / Geography"
  },
  {
    "title": "Sierra Leone",
    "url": "https://en.wikipedia.org/wiki/Sierra_Leone",
    "description": "Geographical overview of Sierra Leone.",
    "type": "Place / Geography"
  },
  {
    "title": "Singapore",
    "url": "https://en.wikipedia.org/wiki/Singapore",
    "description": "Geographical overview of Singapore.",
    "type": "Place / Geography"
  },
  {
    "title": "Slovakia",
    "url": "https://en.wikipedia.org/wiki/Slovakia",
    "description": "Geographical overview of Slovakia.",
    "type": "Place / Geography"
  },
  {
    "title": "Slovenia",
    "url": "https://en.wikipedia.org/wiki/Slovenia",
    "description": "Geographical overview of Slovenia.",
    "type": "Place / Geography"
  },
  {
    "title": "Solomon Islands",
    "url": "https://en.wikipedia.org/wiki/Solomon_Islands",
    "description": "Geographical overview of Solomon Islands.",
    "type": "Place / Geography"
  },
  {
    "title": "Somalia",
    "url": "https://en.wikipedia.org/wiki/Somalia",
    "description": "Geographical overview of Somalia.",
    "type": "Place / Geography"
  },
  {
    "title": "South Africa",
    "url": "https://en.wikipedia.org/wiki/South_Africa",
    "description": "Geographical overview of South Africa.",
    "type": "Place / Geography"
  },
  {
    "title": "South Korea",
    "url": "https://en.wikipedia.org/wiki/South_Korea",
    "description": "Geographical overview of South Korea.",
    "type": "Place / Geography"
  },
  {
    "title": "South Sudan",
    "url": "https://en.wikipedia.org/wiki/South_Sudan",
    "description": "Geographical overview of South Sudan.",
    "type": "Place / Geography"
  },
  {
    "title": "Spain",
    "url": "https://en.wikipedia.org/wiki/Spain",
    "description": "Geographical overview of Spain.",
    "type": "Place / Geography"
  },
  {
    "title": "Sudan",
    "url": "https://en.wikipedia.org/wiki/Sudan",
    "description": "Geographical overview of Sudan.",
    "type": "Place / Geography"
  },
  {
    "title": "Suriname",
    "url": "https://en.wikipedia.org/wiki/Suriname",
    "description": "Geographical overview of Suriname.",
    "type": "Place / Geography"
  },
  {
    "title": "Sweden",
    "url": "https://en.wikipedia.org/wiki/Sweden",
    "description": "Geographical overview of Sweden.",
    "type": "Place / Geography"
  },
  {
    "title": "Switzerland",
    "url": "https://en.wikipedia.org/wiki/Switzerland",
    "description": "Geographical overview of Switzerland.",
    "type": "Place / Geography"
  },
  {
    "title": "Syria",
    "url": "https://en.wikipedia.org/wiki/Syria",
    "description": "Geographical overview of Syria.",
    "type": "Place / Geography"
  },
  {
    "title": "Taiwan",
    "url": "https://en.wikipedia.org/wiki/Taiwan",
    "description": "Geographical overview of Taiwan.",
    "type": "Place / Geography"
  },
  {
    "title": "Tajikistan",
    "url": "https://en.wikipedia.org/wiki/Tajikistan",
    "description": "Geographical overview of Tajikistan.",
    "type": "Place / Geography"
  },
  {
    "title": "Tanzania",
    "url": "https://en.wikipedia.org/wiki/Tanzania",
    "description": "Geographical overview of Tanzania.",
    "type": "Place / Geography"
  },
  {
    "title": "Timor-Leste",
    "url": "https://en.wikipedia.org/wiki/Timor-Leste",
    "description": "Geographical overview of Timor-Leste.",
    "type": "Place / Geography"
  },
  {
    "title": "Togo",
    "url": "https://en.wikipedia.org/wiki/Togo",
    "description": "Geographical overview of Togo.",
    "type": "Place / Geography"
  },
  {
    "title": "Tonga",
    "url": "https://en.wikipedia.org/wiki/Tonga",
    "description": "Geographical overview of Tonga.",
    "type": "Place / Geography"
  },
  {
    "title": "Trinidad and Tobago",
    "url": "https://en.wikipedia.org/wiki/Trinidad_and_Tobago",
    "description": "Geographical overview of Trinidad and Tobago.",
    "type": "Place / Geography"
  },
  {
    "title": "Tunisia",
    "url": "https://en.wikipedia.org/wiki/Tunisia",
    "description": "Geographical overview of Tunisia.",
    "type": "Place / Geography"
  },
  {
    "title": "Turkey",
    "url": "https://en.wikipedia.org/wiki/Turkey",
    "description": "Geographical overview of Turkey.",
    "type": "Place / Geography"
  },
  {
    "title": "Turkmenistan",
    "url": "https://en.wikipedia.org/wiki/Turkmenistan",
    "description": "Geographical overview of Turkmenistan.",
    "type": "Place / Geography"
  },
  {
    "title": "Tuvalu",
    "url": "https://en.wikipedia.org/wiki/Tuvalu",
    "description": "Geographical overview of Tuvalu.",
    "type": "Place / Geography"
  },
  {
    "title": "Uganda",
    "url": "https://en.wikipedia.org/wiki/Uganda",
    "description": "Geographical overview of Uganda.",
    "type": "Place / Geography"
  },
  {
    "title": "Ukraine",
    "url": "https://en.wikipedia.org/wiki/Ukraine",
    "description": "Geographical overview of Ukraine.",
    "type": "Place / Geography"
  },
  {
    "title": "United Arab Emirates",
    "url": "https://en.wikipedia.org/wiki/United_Arab_Emirates",
    "description": "Geographical overview of United Arab Emirates.",
    "type": "Place / Geography"
  },
  {
    "title": "Uruguay",
    "url": "https://en.wikipedia.org/wiki/Uruguay",
    "description": "Geographical overview of Uruguay.",
    "type": "Place / Geography"
  },
  {
    "title": "Uzbekistan",
    "url": "https://en.wikipedia.org/wiki/Uzbekistan",
    "description": "Geographical overview of Uzbekistan.",
    "type": "Place / Geography"
  },
  {
    "title": "Vanuatu",
    "url": "https://en.wikipedia.org/wiki/Vanuatu",
    "description": "Geographical overview of Vanuatu.",
    "type": "Place / Geography"
  },
  {
    "title": "Vatican City",
    "url": "https://en.wikipedia.org/wiki/Vatican_City",
    "description": "Geographical overview of Vatican City.",
    "type": "Place / Geography"
  },
  {
    "title": "Venezuela",
    "url": "https://en.wikipedia.org/wiki/Venezuela",
    "description": "Geographical overview of Venezuela.",
    "type": "Place / Geography"
  },
  {
    "title": "Yemen",
    "url": "https://en.wikipedia.org/wiki/Yemen",
    "description": "Geographical overview of Yemen.",
    "type": "Place / Geography"
  },
  {
    "title": "Zambia",
    "url": "https://en.wikipedia.org/wiki/Zambia",
    "description": "Geographical overview of Zambia.",
    "type": "Place / Geography"
  },
  {
    "title": "Zimbabwe",
    "url": "https://en.wikipedia.org/wiki/Zimbabwe",
    "description": "Geographical overview of Zimbabwe.",
    "type": "Place / Geography"
  },
  {
    "title": "London",
    "url": "https://en.wikipedia.org/wiki/London",
    "description": "Geographical overview of London.",
    "type": "Place / Geography"
  },
  {
    "title": "Paris",
    "url": "https://en.wikipedia.org/wiki/Paris",
    "description": "Geographical overview of Paris.",
    "type": "Place / Geography"
  },
  {
    "title": "Berlin",
    "url": "https://en.wikipedia.org/wiki/Berlin",
    "description": "Geographical overview of Berlin.",
    "type": "Place / Geography"
  },
  {
    "title": "Madrid",
    "url": "https://en.wikipedia.org/wiki/Madrid",
    "description": "Geographical overview of Madrid.",
    "type": "Place / Geography"
  },
  {
    "title": "Rome",
    "url": "https://en.wikipedia.org/wiki/Rome",
    "description": "Geographical overview of Rome.",
    "type": "Place / Geography"
  },
  {
    "title": "Moscow",
    "url": "https://en.wikipedia.org/wiki/Moscow",
    "description": "Geographical overview of Moscow.",
    "type": "Place / Geography"
  },
  {
    "title": "Kyiv",
    "url": "https://en.wikipedia.org/wiki/Kyiv",
    "description": "Geographical overview of Kyiv.",
    "type": "Place / Geography"
  },
  {
    "title": "Istanbul",
    "url": "https://en.wikipedia.org/wiki/Istanbul",
    "description": "Geographical overview of Istanbul.",
    "type": "Place / Geography"
  },
  {
    "title": "New York City",
    "url": "https://en.wikipedia.org/wiki/New_York_City",
    "description": "Geographical overview of New York City.",
    "type": "Place / Geography"
  },
  {
    "title": "Los Angeles",
    "url": "https://en.wikipedia.org/wiki/Los_Angeles",
    "description": "Geographical overview of Los Angeles.",
    "type": "Place / Geography"
  },
  {
    "title": "Chicago",
    "url": "https://en.wikipedia.org/wiki/Chicago",
    "description": "Geographical overview of Chicago.",
    "type": "Place / Geography"
  },
  {
    "title": "Houston",
    "url": "https://en.wikipedia.org/wiki/Houston",
    "description": "Geographical overview of Houston.",
    "type": "Place / Geography"
  },
  {
    "title": "Toronto",
    "url": "https://en.wikipedia.org/wiki/Toronto",
    "description": "Geographical overview of Toronto.",
    "type": "Place / Geography"
  },
  {
    "title": "Vancouver",
    "url": "https://en.wikipedia.org/wiki/Vancouver",
    "description": "Geographical overview of Vancouver.",
    "type": "Place / Geography"
  },
  {
    "title": "Montreal",
    "url": "https://en.wikipedia.org/wiki/Montreal",
    "description": "Geographical overview of Montreal.",
    "type": "Place / Geography"
  },
  {
    "title": "Mexico City",
    "url": "https://en.wikipedia.org/wiki/Mexico_City",
    "description": "Geographical overview of Mexico City.",
    "type": "Place / Geography"
  },
  {
    "title": "São Paulo",
    "url": "https://en.wikipedia.org/wiki/S%C3%A3o_Paulo",
    "description": "Geographical overview of São Paulo.",
    "type": "Place / Geography"
  },
  {
    "title": "Rio de Janeiro",
    "url": "https://en.wikipedia.org/wiki/Rio_de_Janeiro",
    "description": "Geographical overview of Rio de Janeiro.",
    "type": "Place / Geography"
  },
  {
    "title": "Buenos Aires",
    "url": "https://en.wikipedia.org/wiki/Buenos_Aires",
    "description": "Geographical overview of Buenos Aires.",
    "type": "Place / Geography"
  },
  {
    "title": "Santiago",
    "url": "https://en.wikipedia.org/wiki/Santiago",
    "description": "Geographical overview of Santiago.",
    "type": "Place / Geography"
  },
  {
    "title": "Lima",
    "url": "https://en.wikipedia.org/wiki/Lima",
    "description": "Geographical overview of Lima.",
    "type": "Place / Geography"
  },
  {
    "title": "Bogotá",
    "url": "https://en.wikipedia.org/wiki/Bogot%C3%A1",
    "description": "Geographical overview of Bogotá.",
    "type": "Place / Geography"
  },
  {
    "title": "Caracas",
    "url": "https://en.wikipedia.org/wiki/Caracas",
    "description": "Geographical overview of Caracas.",
    "type": "Place / Geography"
  },
  {
    "title": "Havana",
    "url": "https://en.wikipedia.org/wiki/Havana",
    "description": "Geographical overview of Havana.",
    "type": "Place / Geography"
  },
  {
    "title": "Washington, D.C.",
    "url": "https://en.wikipedia.org/wiki/Washington,_D.C.",
    "description": "Geographical overview of Washington, D.C..",
    "type": "Place / Geography"
  },
  {
    "title": "Boston",
    "url": "https://en.wikipedia.org/wiki/Boston",
    "description": "Geographical overview of Boston.",
    "type": "Place / Geography"
  },
  {
    "title": "Philadelphia",
    "url": "https://en.wikipedia.org/wiki/Philadelphia",
    "description": "Geographical overview of Philadelphia.",
    "type": "Place / Geography"
  },
  {
    "title": "San Francisco",
    "url": "https://en.wikipedia.org/wiki/San_Francisco",
    "description": "Geographical overview of San Francisco.",
    "type": "Place / Geography"
  },
  {
    "title": "Seattle",
    "url": "https://en.wikipedia.org/wiki/Seattle",
    "description": "Geographical overview of Seattle.",
    "type": "Place / Geography"
  },
  {
    "title": "Las Vegas",
    "url": "https://en.wikipedia.org/wiki/Las_Vegas",
    "description": "Geographical overview of Las Vegas.",
    "type": "Place / Geography"
  },
  {
    "title": "Miami",
    "url": "https://en.wikipedia.org/wiki/Miami",
    "description": "Geographical overview of Miami.",
    "type": "Place / Geography"
  },
  {
    "title": "Atlanta",
    "url": "https://en.wikipedia.org/wiki/Atlanta",
    "description": "Geographical overview of Atlanta.",
    "type": "Place / Geography"
  },
  {
    "title": "Dallas",
    "url": "https://en.wikipedia.org/wiki/Dallas",
    "description": "Geographical overview of Dallas.",
    "type": "Place / Geography"
  },
  {
    "title": "Austin",
    "url": "https://en.wikipedia.org/wiki/Austin",
    "description": "Geographical overview of Austin.",
    "type": "Place / Geography"
  },
  {
    "title": "Denver",
    "url": "https://en.wikipedia.org/wiki/Denver",
    "description": "Geographical overview of Denver.",
    "type": "Place / Geography"
  },
  {
    "title": "Phoenix, Arizona",
    "url": "https://en.wikipedia.org/wiki/Phoenix,_Arizona",
    "description": "Geographical overview of Phoenix, Arizona.",
    "type": "Place / Geography"
  },
  {
    "title": "San Diego",
    "url": "https://en.wikipedia.org/wiki/San_Diego",
    "description": "Geographical overview of San Diego.",
    "type": "Place / Geography"
  },
  {
    "title": "Portland, Oregon",
    "url": "https://en.wikipedia.org/wiki/Portland,_Oregon",
    "description": "Geographical overview of Portland, Oregon.",
    "type": "Place / Geography"
  },
  {
    "title": "Detroit",
    "url": "https://en.wikipedia.org/wiki/Detroit",
    "description": "Geographical overview of Detroit.",
    "type": "Place / Geography"
  },
  {
    "title": "Minneapolis",
    "url": "https://en.wikipedia.org/wiki/Minneapolis",
    "description": "Geographical overview of Minneapolis.",
    "type": "Place / Geography"
  },
  {
    "title": "New Orleans",
    "url": "https://en.wikipedia.org/wiki/New_Orleans",
    "description": "Geographical overview of New Orleans.",
    "type": "Place / Geography"
  },
  {
    "title": "Honolulu",
    "url": "https://en.wikipedia.org/wiki/Honolulu",
    "description": "Geographical overview of Honolulu.",
    "type": "Place / Geography"
  },
  {
    "title": "Anchorage, Alaska",
    "url": "https://en.wikipedia.org/wiki/Anchorage,_Alaska",
    "description": "Geographical overview of Anchorage, Alaska.",
    "type": "Place / Geography"
  },
  {
    "title": "Ottawa",
    "url": "https://en.wikipedia.org/wiki/Ottawa",
    "description": "Geographical overview of Ottawa.",
    "type": "Place / Geography"
  },
  {
    "title": "Calgary",
    "url": "https://en.wikipedia.org/wiki/Calgary",
    "description": "Geographical overview of Calgary.",
    "type": "Place / Geography"
  },
  {
    "title": "Edmonton",
    "url": "https://en.wikipedia.org/wiki/Edmonton",
    "description": "Geographical overview of Edmonton.",
    "type": "Place / Geography"
  },
  {
    "title": "Winnipeg",
    "url": "https://en.wikipedia.org/wiki/Winnipeg",
    "description": "Geographical overview of Winnipeg.",
    "type": "Place / Geography"
  },
  {
    "title": "Quebec City",
    "url": "https://en.wikipedia.org/wiki/Quebec_City",
    "description": "Geographical overview of Quebec City.",
    "type": "Place / Geography"
  },
  {
    "title": "Dublin",
    "url": "https://en.wikipedia.org/wiki/Dublin",
    "description": "Geographical overview of Dublin.",
    "type": "Place / Geography"
  },
  {
    "title": "Edinburgh",
    "url": "https://en.wikipedia.org/wiki/Edinburgh",
    "description": "Geographical overview of Edinburgh.",
    "type": "Place / Geography"
  },
  {
    "title": "Glasgow",
    "url": "https://en.wikipedia.org/wiki/Glasgow",
    "description": "Geographical overview of Glasgow.",
    "type": "Place / Geography"
  },
  {
    "title": "Manchester",
    "url": "https://en.wikipedia.org/wiki/Manchester",
    "description": "Geographical overview of Manchester.",
    "type": "Place / Geography"
  },
  {
    "title": "Birmingham",
    "url": "https://en.wikipedia.org/wiki/Birmingham",
    "description": "Geographical overview of Birmingham.",
    "type": "Place / Geography"
  },
  {
    "title": "Liverpool",
    "url": "https://en.wikipedia.org/wiki/Liverpool",
    "description": "Geographical overview of Liverpool.",
    "type": "Place / Geography"
  },
  {
    "title": "Bristol",
    "url": "https://en.wikipedia.org/wiki/Bristol",
    "description": "Geographical overview of Bristol.",
    "type": "Place / Geography"
  },
  {
    "title": "Leeds",
    "url": "https://en.wikipedia.org/wiki/Leeds",
    "description": "Geographical overview of Leeds.",
    "type": "Place / Geography"
  },
  {
    "title": "Amsterdam",
    "url": "https://en.wikipedia.org/wiki/Amsterdam",
    "description": "Geographical overview of Amsterdam.",
    "type": "Place / Geography"
  },
  {
    "title": "Rotterdam",
    "url": "https://en.wikipedia.org/wiki/Rotterdam",
    "description": "Geographical overview of Rotterdam.",
    "type": "Place / Geography"
  },
  {
    "title": "Brussels",
    "url": "https://en.wikipedia.org/wiki/Brussels",
    "description": "Geographical overview of Brussels.",
    "type": "Place / Geography"
  },
  {
    "title": "Antwerp",
    "url": "https://en.wikipedia.org/wiki/Antwerp",
    "description": "Geographical overview of Antwerp.",
    "type": "Place / Geography"
  },
  {
    "title": "Vienna",
    "url": "https://en.wikipedia.org/wiki/Vienna",
    "description": "Geographical overview of Vienna.",
    "type": "Place / Geography"
  },
  {
    "title": "Prague",
    "url": "https://en.wikipedia.org/wiki/Prague",
    "description": "Geographical overview of Prague.",
    "type": "Place / Geography"
  },
  {
    "title": "Budapest",
    "url": "https://en.wikipedia.org/wiki/Budapest",
    "description": "Geographical overview of Budapest.",
    "type": "Place / Geography"
  },
  {
    "title": "Warsaw",
    "url": "https://en.wikipedia.org/wiki/Warsaw",
    "description": "Geographical overview of Warsaw.",
    "type": "Place / Geography"
  },
  {
    "title": "Kraków",
    "url": "https://en.wikipedia.org/wiki/Krak%C3%B3w",
    "description": "Geographical overview of Kraków.",
    "type": "Place / Geography"
  },
  {
    "title": "Copenhagen",
    "url": "https://en.wikipedia.org/wiki/Copenhagen",
    "description": "Geographical overview of Copenhagen.",
    "type": "Place / Geography"
  },
  {
    "title": "Stockholm",
    "url": "https://en.wikipedia.org/wiki/Stockholm",
    "description": "Geographical overview of Stockholm.",
    "type": "Place / Geography"
  },
  {
    "title": "Oslo",
    "url": "https://en.wikipedia.org/wiki/Oslo",
    "description": "Geographical overview of Oslo.",
    "type": "Place / Geography"
  },
  {
    "title": "Helsinki",
    "url": "https://en.wikipedia.org/wiki/Helsinki",
    "description": "Geographical overview of Helsinki.",
    "type": "Place / Geography"
  },
  {
    "title": "Reykjavík",
    "url": "https://en.wikipedia.org/wiki/Reykjav%C3%ADk",
    "description": "Geographical overview of Reykjavík.",
    "type": "Place / Geography"
  },
  {
    "title": "Lisbon",
    "url": "https://en.wikipedia.org/wiki/Lisbon",
    "description": "Geographical overview of Lisbon.",
    "type": "Place / Geography"
  },
  {
    "title": "Porto",
    "url": "https://en.wikipedia.org/wiki/Porto",
    "description": "Geographical overview of Porto.",
    "type": "Place / Geography"
  },
  {
    "title": "Athens",
    "url": "https://en.wikipedia.org/wiki/Athens",
    "description": "Geographical overview of Athens.",
    "type": "Place / Geography"
  },
  {
    "title": "Thessaloniki",
    "url": "https://en.wikipedia.org/wiki/Thessaloniki",
    "description": "Geographical overview of Thessaloniki.",
    "type": "Place / Geography"
  },
  {
    "title": "Sofia",
    "url": "https://en.wikipedia.org/wiki/Sofia",
    "description": "Geographical overview of Sofia.",
    "type": "Place / Geography"
  },
  {
    "title": "Bucharest",
    "url": "https://en.wikipedia.org/wiki/Bucharest",
    "description": "Geographical overview of Bucharest.",
    "type": "Place / Geography"
  },
  {
    "title": "Belgrade",
    "url": "https://en.wikipedia.org/wiki/Belgrade",
    "description": "Geographical overview of Belgrade.",
    "type": "Place / Geography"
  },
  {
    "title": "Zagreb",
    "url": "https://en.wikipedia.org/wiki/Zagreb",
    "description": "Geographical overview of Zagreb.",
    "type": "Place / Geography"
  },
  {
    "title": "Sarajevo",
    "url": "https://en.wikipedia.org/wiki/Sarajevo",
    "description": "Geographical overview of Sarajevo.",
    "type": "Place / Geography"
  },
  {
    "title": "Ljubljana",
    "url": "https://en.wikipedia.org/wiki/Ljubljana",
    "description": "Geographical overview of Ljubljana.",
    "type": "Place / Geography"
  },
  {
    "title": "Skopje",
    "url": "https://en.wikipedia.org/wiki/Skopje",
    "description": "Geographical overview of Skopje.",
    "type": "Place / Geography"
  },
  {
    "title": "Tirana",
    "url": "https://en.wikipedia.org/wiki/Tirana",
    "description": "Geographical overview of Tirana.",
    "type": "Place / Geography"
  },
  {
    "title": "Podgorica",
    "url": "https://en.wikipedia.org/wiki/Podgorica",
    "description": "Geographical overview of Podgorica.",
    "type": "Place / Geography"
  },
  {
    "title": "Vilnius",
    "url": "https://en.wikipedia.org/wiki/Vilnius",
    "description": "Geographical overview of Vilnius.",
    "type": "Place / Geography"
  },
  {
    "title": "Riga",
    "url": "https://en.wikipedia.org/wiki/Riga",
    "description": "Geographical overview of Riga.",
    "type": "Place / Geography"
  },
  {
    "title": "Tallinn",
    "url": "https://en.wikipedia.org/wiki/Tallinn",
    "description": "Geographical overview of Tallinn.",
    "type": "Place / Geography"
  },
  {
    "title": "Minsk",
    "url": "https://en.wikipedia.org/wiki/Minsk",
    "description": "Geographical overview of Minsk.",
    "type": "Place / Geography"
  },
  {
    "title": "Tbilisi",
    "url": "https://en.wikipedia.org/wiki/Tbilisi",
    "description": "Geographical overview of Tbilisi.",
    "type": "Place / Geography"
  },
  {
    "title": "Yerevan",
    "url": "https://en.wikipedia.org/wiki/Yerevan",
    "description": "Geographical overview of Yerevan.",
    "type": "Place / Geography"
  },
  {
    "title": "Baku",
    "url": "https://en.wikipedia.org/wiki/Baku",
    "description": "Geographical overview of Baku.",
    "type": "Place / Geography"
  },
  {
    "title": "Ankara",
    "url": "https://en.wikipedia.org/wiki/Ankara",
    "description": "Geographical overview of Ankara.",
    "type": "Place / Geography"
  },
  {
    "title": "Izmir",
    "url": "https://en.wikipedia.org/wiki/Izmir",
    "description": "Geographical overview of Izmir.",
    "type": "Place / Geography"
  },
  {
    "title": "Antalya",
    "url": "https://en.wikipedia.org/wiki/Antalya",
    "description": "Geographical overview of Antalya.",
    "type": "Place / Geography"
  },
  {
    "title": "Tashkent",
    "url": "https://en.wikipedia.org/wiki/Tashkent",
    "description": "Geographical overview of Tashkent.",
    "type": "Place / Geography"
  },
  {
    "title": "Almaty",
    "url": "https://en.wikipedia.org/wiki/Almaty",
    "description": "Geographical overview of Almaty.",
    "type": "Place / Geography"
  },
  {
    "title": "Astana",
    "url": "https://en.wikipedia.org/wiki/Astana",
    "description": "Geographical overview of Astana.",
    "type": "Place / Geography"
  },
  {
    "title": "Ulaanbaatar",
    "url": "https://en.wikipedia.org/wiki/Ulaanbaatar",
    "description": "Geographical overview of Ulaanbaatar.",
    "type": "Place / Geography"
  },
  {
    "title": "Beijing",
    "url": "https://en.wikipedia.org/wiki/Beijing",
    "description": "Geographical overview of Beijing.",
    "type": "Place / Geography"
  },
  {
    "title": "Shanghai",
    "url": "https://en.wikipedia.org/wiki/Shanghai",
    "description": "Geographical overview of Shanghai.",
    "type": "Place / Geography"
  },
  {
    "title": "Guangzhou",
    "url": "https://en.wikipedia.org/wiki/Guangzhou",
    "description": "Geographical overview of Guangzhou.",
    "type": "Place / Geography"
  },
  {
    "title": "Shenzhen",
    "url": "https://en.wikipedia.org/wiki/Shenzhen",
    "description": "Geographical overview of Shenzhen.",
    "type": "Place / Geography"
  },
  {
    "title": "Hong Kong",
    "url": "https://en.wikipedia.org/wiki/Hong_Kong",
    "description": "Geographical overview of Hong Kong.",
    "type": "Place / Geography"
  },
  {
    "title": "Macau",
    "url": "https://en.wikipedia.org/wiki/Macau",
    "description": "Geographical overview of Macau.",
    "type": "Place / Geography"
  },
  {
    "title": "Tokyo",
    "url": "https://en.wikipedia.org/wiki/Tokyo",
    "description": "Geographical overview of Tokyo.",
    "type": "Place / Geography"
  },
  {
    "title": "Osaka",
    "url": "https://en.wikipedia.org/wiki/Osaka",
    "description": "Geographical overview of Osaka.",
    "type": "Place / Geography"
  },
  {
    "title": "Kyoto",
    "url": "https://en.wikipedia.org/wiki/Kyoto",
    "description": "Geographical overview of Kyoto.",
    "type": "Place / Geography"
  },
  {
    "title": "Seoul",
    "url": "https://en.wikipedia.org/wiki/Seoul",
    "description": "Geographical overview of Seoul.",
    "type": "Place / Geography"
  },
  {
    "title": "Busan",
    "url": "https://en.wikipedia.org/wiki/Busan",
    "description": "Geographical overview of Busan.",
    "type": "Place / Geography"
  },
  {
    "title": "Bangkok",
    "url": "https://en.wikipedia.org/wiki/Bangkok",
    "description": "Geographical overview of Bangkok.",
    "type": "Place / Geography"
  },
  {
    "title": "Hanoi",
    "url": "https://en.wikipedia.org/wiki/Hanoi",
    "description": "Geographical overview of Hanoi.",
    "type": "Place / Geography"
  },
  {
    "title": "Ho Chi Minh City",
    "url": "https://en.wikipedia.org/wiki/Ho_Chi_Minh_City",
    "description": "Geographical overview of Ho Chi Minh City.",
    "type": "Place / Geography"
  },
  {
    "title": "Jakarta",
    "url": "https://en.wikipedia.org/wiki/Jakarta",
    "description": "Geographical overview of Jakarta.",
    "type": "Place / Geography"
  },
  {
    "title": "Kuala Lumpur",
    "url": "https://en.wikipedia.org/wiki/Kuala_Lumpur",
    "description": "Geographical overview of Kuala Lumpur.",
    "type": "Place / Geography"
  },
  {
    "title": "Manila",
    "url": "https://en.wikipedia.org/wiki/Manila",
    "description": "Geographical overview of Manila.",
    "type": "Place / Geography"
  },
  {
    "title": "New Delhi",
    "url": "https://en.wikipedia.org/wiki/New_Delhi",
    "description": "Geographical overview of New Delhi.",
    "type": "Place / Geography"
  },
  {
    "title": "Mumbai",
    "url": "https://en.wikipedia.org/wiki/Mumbai",
    "description": "Geographical overview of Mumbai.",
    "type": "Place / Geography"
  },
  {
    "title": "Bengaluru",
    "url": "https://en.wikipedia.org/wiki/Bengaluru",
    "description": "Geographical overview of Bengaluru.",
    "type": "Place / Geography"
  },
  {
    "title": "Chennai",
    "url": "https://en.wikipedia.org/wiki/Chennai",
    "description": "Geographical overview of Chennai.",
    "type": "Place / Geography"
  },
  {
    "title": "Kolkata",
    "url": "https://en.wikipedia.org/wiki/Kolkata",
    "description": "Geographical overview of Kolkata.",
    "type": "Place / Geography"
  },
  {
    "title": "Kathmandu",
    "url": "https://en.wikipedia.org/wiki/Kathmandu",
    "description": "Geographical overview of Kathmandu.",
    "type": "Place / Geography"
  },
  {
    "title": "Dhaka",
    "url": "https://en.wikipedia.org/wiki/Dhaka",
    "description": "Geographical overview of Dhaka.",
    "type": "Place / Geography"
  },
  {
    "title": "Karachi",
    "url": "https://en.wikipedia.org/wiki/Karachi",
    "description": "Geographical overview of Karachi.",
    "type": "Place / Geography"
  },
  {
    "title": "Lahore",
    "url": "https://en.wikipedia.org/wiki/Lahore",
    "description": "Geographical overview of Lahore.",
    "type": "Place / Geography"
  },
  {
    "title": "Dubai",
    "url": "https://en.wikipedia.org/wiki/Dubai",
    "description": "Geographical overview of Dubai.",
    "type": "Place / Geography"
  },
  {
    "title": "Abu Dhabi",
    "url": "https://en.wikipedia.org/wiki/Abu_Dhabi",
    "description": "Geographical overview of Abu Dhabi.",
    "type": "Place / Geography"
  },
  {
    "title": "Riyadh",
    "url": "https://en.wikipedia.org/wiki/Riyadh",
    "description": "Geographical overview of Riyadh.",
    "type": "Place / Geography"
  },
  {
    "title": "Jeddah",
    "url": "https://en.wikipedia.org/wiki/Jeddah",
    "description": "Geographical overview of Jeddah.",
    "type": "Place / Geography"
  },
  {
    "title": "Jerusalem",
    "url": "https://en.wikipedia.org/wiki/Jerusalem",
    "description": "Geographical overview of Jerusalem.",
    "type": "Place / Geography"
  },
  {
    "title": "Tel Aviv",
    "url": "https://en.wikipedia.org/wiki/Tel_Aviv",
    "description": "Geographical overview of Tel Aviv.",
    "type": "Place / Geography"
  },
  {
    "title": "Cairo",
    "url": "https://en.wikipedia.org/wiki/Cairo",
    "description": "Geographical overview of Cairo.",
    "type": "Place / Geography"
  },
  {
    "title": "Alexandria",
    "url": "https://en.wikipedia.org/wiki/Alexandria",
    "description": "Geographical overview of Alexandria.",
    "type": "Place / Geography"
  },
  {
    "title": "Cape Town",
    "url": "https://en.wikipedia.org/wiki/Cape_Town",
    "description": "Geographical overview of Cape Town.",
    "type": "Place / Geography"
  },
  {
    "title": "Johannesburg",
    "url": "https://en.wikipedia.org/wiki/Johannesburg",
    "description": "Geographical overview of Johannesburg.",
    "type": "Place / Geography"
  },
  {
    "title": "Nairobi",
    "url": "https://en.wikipedia.org/wiki/Nairobi",
    "description": "Geographical overview of Nairobi.",
    "type": "Place / Geography"
  },
  {
    "title": "Lagos",
    "url": "https://en.wikipedia.org/wiki/Lagos",
    "description": "Geographical overview of Lagos.",
    "type": "Place / Geography"
  },
  {
    "title": "Casablanca",
    "url": "https://en.wikipedia.org/wiki/Casablanca",
    "description": "Geographical overview of Casablanca.",
    "type": "Place / Geography"
  },
  {
    "title": "Marrakesh",
    "url": "https://en.wikipedia.org/wiki/Marrakesh",
    "description": "Geographical overview of Marrakesh.",
    "type": "Place / Geography"
  },
  {
    "title": "Accra",
    "url": "https://en.wikipedia.org/wiki/Accra",
    "description": "Geographical overview of Accra.",
    "type": "Place / Geography"
  },
  {
    "title": "Addis Ababa",
    "url": "https://en.wikipedia.org/wiki/Addis_Ababa",
    "description": "Geographical overview of Addis Ababa.",
    "type": "Place / Geography"
  },
  {
    "title": "Dar es Salaam",
    "url": "https://en.wikipedia.org/wiki/Dar_es_Salaam",
    "description": "Geographical overview of Dar es Salaam.",
    "type": "Place / Geography"
  },
  {
    "title": "Perth",
    "url": "https://en.wikipedia.org/wiki/Perth",
    "description": "Geographical overview of Perth.",
    "type": "Place / Geography"
  },
  {
    "title": "Sydney",
    "url": "https://en.wikipedia.org/wiki/Sydney",
    "description": "Geographical overview of Sydney.",
    "type": "Place / Geography"
  },
  {
    "title": "Melbourne",
    "url": "https://en.wikipedia.org/wiki/Melbourne",
    "description": "Geographical overview of Melbourne.",
    "type": "Place / Geography"
  },
  {
    "title": "Brisbane",
    "url": "https://en.wikipedia.org/wiki/Brisbane",
    "description": "Geographical overview of Brisbane.",
    "type": "Place / Geography"
  },
  {
    "title": "Auckland",
    "url": "https://en.wikipedia.org/wiki/Auckland",
    "description": "Geographical overview of Auckland.",
    "type": "Place / Geography"
  },
  {
    "title": "Wellington",
    "url": "https://en.wikipedia.org/wiki/Wellington",
    "description": "Geographical overview of Wellington.",
    "type": "Place / Geography"
  },
  {
    "title": "Christchurch",
    "url": "https://en.wikipedia.org/wiki/Christchurch",
    "description": "Geographical overview of Christchurch.",
    "type": "Place / Geography"
  },
  {
    "title": "Alexander the Great",
    "url": "https://en.wikipedia.org/wiki/Alexander_the_Great",
    "description": "Biography and career of Alexander the Great.",
    "type": "Person"
  },
  {
    "title": "Julius Caesar",
    "url": "https://en.wikipedia.org/wiki/Julius_Caesar",
    "description": "Biography and career of Julius Caesar.",
    "type": "Person"
  },
  {
    "title": "Cleopatra",
    "url": "https://en.wikipedia.org/wiki/Cleopatra",
    "description": "Biography and career of Cleopatra.",
    "type": "Person"
  },
  {
    "title": "Augustus",
    "url": "https://en.wikipedia.org/wiki/Augustus",
    "description": "Biography and career of Augustus.",
    "type": "Person"
  },
  {
    "title": "Genghis Khan",
    "url": "https://en.wikipedia.org/wiki/Genghis_Khan",
    "description": "Biography and career of Genghis Khan.",
    "type": "Person"
  },
  {
    "title": "Charlemagne",
    "url": "https://en.wikipedia.org/wiki/Charlemagne",
    "description": "Biography and career of Charlemagne.",
    "type": "Person"
  },
  {
    "title": "Mansa Musa",
    "url": "https://en.wikipedia.org/wiki/Mansa_Musa",
    "description": "Biography and career of Mansa Musa.",
    "type": "Person"
  },
  {
    "title": "Suleiman the Magnificent",
    "url": "https://en.wikipedia.org/wiki/Suleiman_the_Magnificent",
    "description": "Biography and career of Suleiman the Magnificent.",
    "type": "Person"
  },
  {
    "title": "Elizabeth I",
    "url": "https://en.wikipedia.org/wiki/Elizabeth_I",
    "description": "Biography and career of Elizabeth I.",
    "type": "Person"
  },
  {
    "title": "Catherine the Great",
    "url": "https://en.wikipedia.org/wiki/Catherine_the_Great",
    "description": "Biography and career of Catherine the Great.",
    "type": "Person"
  },
  {
    "title": "George Washington",
    "url": "https://en.wikipedia.org/wiki/George_Washington",
    "description": "Biography and career of George Washington.",
    "type": "Person"
  },
  {
    "title": "Napoleon",
    "url": "https://en.wikipedia.org/wiki/Napoleon",
    "description": "Biography and career of Napoleon.",
    "type": "Person"
  },
  {
    "title": "Simón Bolívar",
    "url": "https://en.wikipedia.org/wiki/Sim%C3%B3n_Bol%C3%ADvar",
    "description": "Biography and career of Simón Bolívar.",
    "type": "Person"
  },
  {
    "title": "Abraham Lincoln",
    "url": "https://en.wikipedia.org/wiki/Abraham_Lincoln",
    "description": "Biography and career of Abraham Lincoln.",
    "type": "Person"
  },
  {
    "title": "Mahatma Gandhi",
    "url": "https://en.wikipedia.org/wiki/Mahatma_Gandhi",
    "description": "Biography and career of Mahatma Gandhi.",
    "type": "Person"
  },
  {
    "title": "Joseph Stalin",
    "url": "https://en.wikipedia.org/wiki/Joseph_Stalin",
    "description": "Biography and career of Joseph Stalin.",
    "type": "Person"
  },
  {
    "title": "Adolf Hitler",
    "url": "https://en.wikipedia.org/wiki/Adolf_Hitler",
    "description": "Biography and career of Adolf Hitler.",
    "type": "Person"
  },
  {
    "title": "Mao Zedong",
    "url": "https://en.wikipedia.org/wiki/Mao_Zedong",
    "description": "Biography and career of Mao Zedong.",
    "type": "Person"
  },
  {
    "title": "Nelson Mandela",
    "url": "https://en.wikipedia.org/wiki/Nelson_Mandela",
    "description": "Biography and career of Nelson Mandela.",
    "type": "Person"
  },
  {
    "title": "Martin Luther",
    "url": "https://en.wikipedia.org/wiki/Martin_Luther",
    "description": "Biography and career of Martin Luther.",
    "type": "Person"
  },
  {
    "title": "Queen Victoria",
    "url": "https://en.wikipedia.org/wiki/Queen_Victoria",
    "description": "Biography and career of Queen Victoria.",
    "type": "Person"
  },
  {
    "title": "Winston Churchill",
    "url": "https://en.wikipedia.org/wiki/Winston_Churchill",
    "description": "Biography and career of Winston Churchill.",
    "type": "Person"
  },
  {
    "title": "Franklin D. Roosevelt",
    "url": "https://en.wikipedia.org/wiki/Franklin_D._Roosevelt",
    "description": "Biography and career of Franklin D. Roosevelt.",
    "type": "Person"
  },
  {
    "title": "John F. Kennedy",
    "url": "https://en.wikipedia.org/wiki/John_F._Kennedy",
    "description": "Biography and career of John F. Kennedy.",
    "type": "Person"
  },
  {
    "title": "Richard Nixon",
    "url": "https://en.wikipedia.org/wiki/Richard_Nixon",
    "description": "Biography and career of Richard Nixon.",
    "type": "Person"
  },
  {
    "title": "Ronald Reagan",
    "url": "https://en.wikipedia.org/wiki/Ronald_Reagan",
    "description": "Biography and career of Ronald Reagan.",
    "type": "Person"
  },
  {
    "title": "Bill Clinton",
    "url": "https://en.wikipedia.org/wiki/Bill_Clinton",
    "description": "Biography and career of Bill Clinton.",
    "type": "Person"
  },
  {
    "title": "George W. Bush",
    "url": "https://en.wikipedia.org/wiki/George_W._Bush",
    "description": "Biography and career of George W. Bush.",
    "type": "Person"
  },
  {
    "title": "Barack Obama",
    "url": "https://en.wikipedia.org/wiki/Barack_Obama",
    "description": "Biography and career of Barack Obama.",
    "type": "Person"
  },
  {
    "title": "Joe Biden",
    "url": "https://en.wikipedia.org/wiki/Joe_Biden",
    "description": "Biography and career of Joe Biden.",
    "type": "Person"
  },
  {
    "title": "Donald Trump",
    "url": "https://en.wikipedia.org/wiki/Donald_Trump",
    "description": "Biography and career of Donald Trump.",
    "type": "Person"
  },
  {
    "title": "Kamala Harris",
    "url": "https://en.wikipedia.org/wiki/Kamala_Harris",
    "description": "Biography and career of Kamala Harris.",
    "type": "Person"
  },
  {
    "title": "Vladimir Putin",
    "url": "https://en.wikipedia.org/wiki/Vladimir_Putin",
    "description": "Biography and career of Vladimir Putin.",
    "type": "Person"
  },
  {
    "title": "Volodymyr Zelenskyy",
    "url": "https://en.wikipedia.org/wiki/Volodymyr_Zelenskyy",
    "description": "Biography and career of Volodymyr Zelenskyy.",
    "type": "Person"
  },
  {
    "title": "Emmanuel Macron",
    "url": "https://en.wikipedia.org/wiki/Emmanuel_Macron",
    "description": "Biography and career of Emmanuel Macron.",
    "type": "Person"
  },
  {
    "title": "Rishi Sunak",
    "url": "https://en.wikipedia.org/wiki/Rishi_Sunak",
    "description": "Biography and career of Rishi Sunak.",
    "type": "Person"
  },
  {
    "title": "Keir Starmer",
    "url": "https://en.wikipedia.org/wiki/Keir_Starmer",
    "description": "Biography and career of Keir Starmer.",
    "type": "Person"
  },
  {
    "title": "Narendra Modi",
    "url": "https://en.wikipedia.org/wiki/Narendra_Modi",
    "description": "Biography and career of Narendra Modi.",
    "type": "Person"
  },
  {
    "title": "Xi Jinping",
    "url": "https://en.wikipedia.org/wiki/Xi_Jinping",
    "description": "Biography and career of Xi Jinping.",
    "type": "Person"
  },
  {
    "title": "Pope Francis",
    "url": "https://en.wikipedia.org/wiki/Pope_Francis",
    "description": "Biography and career of Pope Francis.",
    "type": "Person"
  },
  {
    "title": "Pope Leo XIV",
    "url": "https://en.wikipedia.org/wiki/Pope_Leo_XIV",
    "description": "Biography and career of Pope Leo XIV.",
    "type": "Person"
  },
  {
    "title": "Albert Einstein",
    "url": "https://en.wikipedia.org/wiki/Albert_Einstein",
    "description": "Biography and career of Albert Einstein.",
    "type": "Person"
  },
  {
    "title": "Isaac Newton",
    "url": "https://en.wikipedia.org/wiki/Isaac_Newton",
    "description": "Biography and career of Isaac Newton.",
    "type": "Person"
  },
  {
    "title": "Galileo Galilei",
    "url": "https://en.wikipedia.org/wiki/Galileo_Galilei",
    "description": "Biography and career of Galileo Galilei.",
    "type": "Person"
  },
  {
    "title": "Charles Darwin",
    "url": "https://en.wikipedia.org/wiki/Charles_Darwin",
    "description": "Biography and career of Charles Darwin.",
    "type": "Person"
  },
  {
    "title": "Marie Curie",
    "url": "https://en.wikipedia.org/wiki/Marie_Curie",
    "description": "Biography and career of Marie Curie.",
    "type": "Person"
  },
  {
    "title": "Nikola Tesla",
    "url": "https://en.wikipedia.org/wiki/Nikola_Tesla",
    "description": "Biography and career of Nikola Tesla.",
    "type": "Person"
  },
  {
    "title": "Thomas Edison",
    "url": "https://en.wikipedia.org/wiki/Thomas_Edison",
    "description": "Biography and career of Thomas Edison.",
    "type": "Person"
  },
  {
    "title": "Leonardo da Vinci",
    "url": "https://en.wikipedia.org/wiki/Leonardo_da_Vinci",
    "description": "Biography and career of Leonardo da Vinci.",
    "type": "Person"
  },
  {
    "title": "Michelangelo",
    "url": "https://en.wikipedia.org/wiki/Michelangelo",
    "description": "Biography and career of Michelangelo.",
    "type": "Person"
  },
  {
    "title": "Vincent van Gogh",
    "url": "https://en.wikipedia.org/wiki/Vincent_van_Gogh",
    "description": "Biography and career of Vincent van Gogh.",
    "type": "Person"
  },
  {
    "title": "Pablo Picasso",
    "url": "https://en.wikipedia.org/wiki/Pablo_Picasso",
    "description": "Biography and career of Pablo Picasso.",
    "type": "Person"
  },
  {
    "title": "William Shakespeare",
    "url": "https://en.wikipedia.org/wiki/William_Shakespeare",
    "description": "Biography and career of William Shakespeare.",
    "type": "Person"
  },
  {
    "title": "Leo Tolstoy",
    "url": "https://en.wikipedia.org/wiki/Leo_Tolstoy",
    "description": "Biography and career of Leo Tolstoy.",
    "type": "Person"
  },
  {
    "title": "Mark Twain",
    "url": "https://en.wikipedia.org/wiki/Mark_Twain",
    "description": "Biography and career of Mark Twain.",
    "type": "Person"
  },
  {
    "title": "Jane Austen",
    "url": "https://en.wikipedia.org/wiki/Jane_Austen",
    "description": "Biography and career of Jane Austen.",
    "type": "Person"
  },
  {
    "title": "Charles Dickens",
    "url": "https://en.wikipedia.org/wiki/Charles_Dickens",
    "description": "Biography and career of Charles Dickens.",
    "type": "Person"
  },
  {
    "title": "Homer",
    "url": "https://en.wikipedia.org/wiki/Homer",
    "description": "Biography and career of Homer.",
    "type": "Person"
  },
  {
    "title": "Dante Alighieri",
    "url": "https://en.wikipedia.org/wiki/Dante_Alighieri",
    "description": "Biography and career of Dante Alighieri.",
    "type": "Person"
  },
  {
    "title": "Miguel de Cervantes",
    "url": "https://en.wikipedia.org/wiki/Miguel_de_Cervantes",
    "description": "Biography and career of Miguel de Cervantes.",
    "type": "Person"
  },
  {
    "title": "J. R. R. Tolkien",
    "url": "https://en.wikipedia.org/wiki/J._R._R._Tolkien",
    "description": "Biography and career of J. R. R. Tolkien.",
    "type": "Person"
  },
  {
    "title": "George Orwell",
    "url": "https://en.wikipedia.org/wiki/George_Orwell",
    "description": "Biography and career of George Orwell.",
    "type": "Person"
  },
  {
    "title": "Fyodor Dostoevsky",
    "url": "https://en.wikipedia.org/wiki/Fyodor_Dostoevsky",
    "description": "Biography and career of Fyodor Dostoevsky.",
    "type": "Person"
  },
  {
    "title": "Ernest Hemingway",
    "url": "https://en.wikipedia.org/wiki/Ernest_Hemingway",
    "description": "Biography and career of Ernest Hemingway.",
    "type": "Person"
  },
  {
    "title": "F. Scott Fitzgerald",
    "url": "https://en.wikipedia.org/wiki/F._Scott_Fitzgerald",
    "description": "Biography and career of F. Scott Fitzgerald.",
    "type": "Person"
  },
  {
    "title": "Stephen King",
    "url": "https://en.wikipedia.org/wiki/Stephen_King",
    "description": "Biography and career of Stephen King.",
    "type": "Person"
  },
  {
    "title": "Agatha Christie",
    "url": "https://en.wikipedia.org/wiki/Agatha_Christie",
    "description": "Biography and career of Agatha Christie.",
    "type": "Person"
  },
  {
    "title": "J. K. Rowling",
    "url": "https://en.wikipedia.org/wiki/J._K._Rowling",
    "description": "Biography and career of J. K. Rowling.",
    "type": "Person"
  },
  {
    "title": "Haruki Murakami",
    "url": "https://en.wikipedia.org/wiki/Haruki_Murakami",
    "description": "Biography and career of Haruki Murakami.",
    "type": "Person"
  },
  {
    "title": "Taylor Swift",
    "url": "https://en.wikipedia.org/wiki/Taylor_Swift",
    "description": "Biography and career of Taylor Swift.",
    "type": "Person"
  },
  {
    "title": "Beyoncé",
    "url": "https://en.wikipedia.org/wiki/Beyonc%C3%A9",
    "description": "Biography and career of Beyoncé.",
    "type": "Person"
  },
  {
    "title": "Rihanna",
    "url": "https://en.wikipedia.org/wiki/Rihanna",
    "description": "Biography and career of Rihanna.",
    "type": "Person"
  },
  {
    "title": "Adele",
    "url": "https://en.wikipedia.org/wiki/Adele",
    "description": "Biography and career of Adele.",
    "type": "Person"
  },
  {
    "title": "Lady Gaga",
    "url": "https://en.wikipedia.org/wiki/Lady_Gaga",
    "description": "Biography and career of Lady Gaga.",
    "type": "Person"
  },
  {
    "title": "Ed Sheeran",
    "url": "https://en.wikipedia.org/wiki/Ed_Sheeran",
    "description": "Biography and career of Ed Sheeran.",
    "type": "Person"
  },
  {
    "title": "Justin Bieber",
    "url": "https://en.wikipedia.org/wiki/Justin_Bieber",
    "description": "Biography and career of Justin Bieber.",
    "type": "Person"
  },
  {
    "title": "Bruno Mars",
    "url": "https://en.wikipedia.org/wiki/Bruno_Mars",
    "description": "Biography and career of Bruno Mars.",
    "type": "Person"
  },
  {
    "title": "Drake",
    "url": "https://en.wikipedia.org/wiki/Drake",
    "description": "Biography and career of Drake.",
    "type": "Person"
  },
  {
    "title": "Eminem",
    "url": "https://en.wikipedia.org/wiki/Eminem",
    "description": "Biography and career of Eminem.",
    "type": "Person"
  },
  {
    "title": "Kanye West",
    "url": "https://en.wikipedia.org/wiki/Kanye_West",
    "description": "Biography and career of Kanye West.",
    "type": "Person"
  },
  {
    "title": "The Weeknd",
    "url": "https://en.wikipedia.org/wiki/The_Weeknd",
    "description": "Biography and career of The Weeknd.",
    "type": "Person"
  },
  {
    "title": "Billie Eilish",
    "url": "https://en.wikipedia.org/wiki/Billie_Eilish",
    "description": "Biography and career of Billie Eilish.",
    "type": "Person"
  },
  {
    "title": "Ariana Grande",
    "url": "https://en.wikipedia.org/wiki/Ariana_Grande",
    "description": "Biography and career of Ariana Grande.",
    "type": "Person"
  },
  {
    "title": "Selena Gomez",
    "url": "https://en.wikipedia.org/wiki/Selena_Gomez",
    "description": "Biography and career of Selena Gomez.",
    "type": "Person"
  },
  {
    "title": "Miley Cyrus",
    "url": "https://en.wikipedia.org/wiki/Miley_Cyrus",
    "description": "Biography and career of Miley Cyrus.",
    "type": "Person"
  },
  {
    "title": "Madonna",
    "url": "https://en.wikipedia.org/wiki/Madonna",
    "description": "Biography and career of Madonna.",
    "type": "Person"
  },
  {
    "title": "Elton John",
    "url": "https://en.wikipedia.org/wiki/Elton_John",
    "description": "Biography and career of Elton John.",
    "type": "Person"
  },
  {
    "title": "David Bowie",
    "url": "https://en.wikipedia.org/wiki/David_Bowie",
    "description": "Biography and career of David Bowie.",
    "type": "Person"
  },
  {
    "title": "Freddie Mercury",
    "url": "https://en.wikipedia.org/wiki/Freddie_Mercury",
    "description": "Biography and career of Freddie Mercury.",
    "type": "Person"
  },
  {
    "title": "John Lennon",
    "url": "https://en.wikipedia.org/wiki/John_Lennon",
    "description": "Biography and career of John Lennon.",
    "type": "Person"
  },
  {
    "title": "Paul McCartney",
    "url": "https://en.wikipedia.org/wiki/Paul_McCartney",
    "description": "Biography and career of Paul McCartney.",
    "type": "Person"
  },
  {
    "title": "Michael Jackson",
    "url": "https://en.wikipedia.org/wiki/Michael_Jackson",
    "description": "Biography and career of Michael Jackson.",
    "type": "Person"
  },
  {
    "title": "Elvis Presley",
    "url": "https://en.wikipedia.org/wiki/Elvis_Presley",
    "description": "Biography and career of Elvis Presley.",
    "type": "Person"
  },
  {
    "title": "Bob Dylan",
    "url": "https://en.wikipedia.org/wiki/Bob_Dylan",
    "description": "Biography and career of Bob Dylan.",
    "type": "Person"
  },
  {
    "title": "Bruce Springsteen",
    "url": "https://en.wikipedia.org/wiki/Bruce_Springsteen",
    "description": "Biography and career of Bruce Springsteen.",
    "type": "Person"
  },
  {
    "title": "Ozzy Osbourne",
    "url": "https://en.wikipedia.org/wiki/Ozzy_Osbourne",
    "description": "Biography and career of Ozzy Osbourne.",
    "type": "Person"
  },
  {
    "title": "Jennifer Lopez",
    "url": "https://en.wikipedia.org/wiki/Jennifer_Lopez",
    "description": "Biography and career of Jennifer Lopez.",
    "type": "Person"
  },
  {
    "title": "Angelina Jolie",
    "url": "https://en.wikipedia.org/wiki/Angelina_Jolie",
    "description": "Biography and career of Angelina Jolie.",
    "type": "Person"
  },
  {
    "title": "Brad Pitt",
    "url": "https://en.wikipedia.org/wiki/Brad_Pitt",
    "description": "Biography and career of Brad Pitt.",
    "type": "Person"
  },
  {
    "title": "Tom Cruise",
    "url": "https://en.wikipedia.org/wiki/Tom_Cruise",
    "description": "Biography and career of Tom Cruise.",
    "type": "Person"
  },
  {
    "title": "Leonardo DiCaprio",
    "url": "https://en.wikipedia.org/wiki/Leonardo_DiCaprio",
    "description": "Biography and career of Leonardo DiCaprio.",
    "type": "Person"
  },
  {
    "title": "Johnny Depp",
    "url": "https://en.wikipedia.org/wiki/Johnny_Depp",
    "description": "Biography and career of Johnny Depp.",
    "type": "Person"
  },
  {
    "title": "Robert Downey Jr.",
    "url": "https://en.wikipedia.org/wiki/Robert_Downey_Jr.",
    "description": "Biography and career of Robert Downey Jr..",
    "type": "Person"
  },
  {
    "title": "Chris Hemsworth",
    "url": "https://en.wikipedia.org/wiki/Chris_Hemsworth",
    "description": "Biography and career of Chris Hemsworth.",
    "type": "Person"
  },
  {
    "title": "Chris Evans",
    "url": "https://en.wikipedia.org/wiki/Chris_Evans",
    "description": "Biography and career of Chris Evans.",
    "type": "Person"
  },
  {
    "title": "Dwayne Johnson",
    "url": "https://en.wikipedia.org/wiki/Dwayne_Johnson",
    "description": "Biography and career of Dwayne Johnson.",
    "type": "Person"
  },
  {
    "title": "Will Smith",
    "url": "https://en.wikipedia.org/wiki/Will_Smith",
    "description": "Biography and career of Will Smith.",
    "type": "Person"
  },
  {
    "title": "Keanu Reeves",
    "url": "https://en.wikipedia.org/wiki/Keanu_Reeves",
    "description": "Biography and career of Keanu Reeves.",
    "type": "Person"
  },
  {
    "title": "Tom Hanks",
    "url": "https://en.wikipedia.org/wiki/Tom_Hanks",
    "description": "Biography and career of Tom Hanks.",
    "type": "Person"
  },
  {
    "title": "Meryl Streep",
    "url": "https://en.wikipedia.org/wiki/Meryl_Streep",
    "description": "Biography and career of Meryl Streep.",
    "type": "Person"
  },
  {
    "title": "Nicole Kidman",
    "url": "https://en.wikipedia.org/wiki/Nicole_Kidman",
    "description": "Biography and career of Nicole Kidman.",
    "type": "Person"
  },
  {
    "title": "Emma Stone",
    "url": "https://en.wikipedia.org/wiki/Emma_Stone",
    "description": "Biography and career of Emma Stone.",
    "type": "Person"
  },
  {
    "title": "Emma Watson",
    "url": "https://en.wikipedia.org/wiki/Emma_Watson",
    "description": "Biography and career of Emma Watson.",
    "type": "Person"
  },
  {
    "title": "Jennifer Lawrence",
    "url": "https://en.wikipedia.org/wiki/Jennifer_Lawrence",
    "description": "Biography and career of Jennifer Lawrence.",
    "type": "Person"
  },
  {
    "title": "Scarlett Johansson",
    "url": "https://en.wikipedia.org/wiki/Scarlett_Johansson",
    "description": "Biography and career of Scarlett Johansson.",
    "type": "Person"
  },
  {
    "title": "Margot Robbie",
    "url": "https://en.wikipedia.org/wiki/Margot_Robbie",
    "description": "Biography and career of Margot Robbie.",
    "type": "Person"
  },
  {
    "title": "Zendaya",
    "url": "https://en.wikipedia.org/wiki/Zendaya",
    "description": "Biography and career of Zendaya.",
    "type": "Person"
  },
  {
    "title": "Ryan Reynolds",
    "url": "https://en.wikipedia.org/wiki/Ryan_Reynolds",
    "description": "Biography and career of Ryan Reynolds.",
    "type": "Person"
  },
  {
    "title": "Ryan Gosling",
    "url": "https://en.wikipedia.org/wiki/Ryan_Gosling",
    "description": "Biography and career of Ryan Gosling.",
    "type": "Person"
  },
  {
    "title": "Robert De Niro",
    "url": "https://en.wikipedia.org/wiki/Robert_De_Niro",
    "description": "Biography and career of Robert De Niro.",
    "type": "Person"
  },
  {
    "title": "Al Pacino",
    "url": "https://en.wikipedia.org/wiki/Al_Pacino",
    "description": "Biography and career of Al Pacino.",
    "type": "Person"
  },
  {
    "title": "Arnold Schwarzenegger",
    "url": "https://en.wikipedia.org/wiki/Arnold_Schwarzenegger",
    "description": "Biography and career of Arnold Schwarzenegger.",
    "type": "Person"
  },
  {
    "title": "Morgan Freeman",
    "url": "https://en.wikipedia.org/wiki/Morgan_Freeman",
    "description": "Biography and career of Morgan Freeman.",
    "type": "Person"
  },
  {
    "title": "Jim Carrey",
    "url": "https://en.wikipedia.org/wiki/Jim_Carrey",
    "description": "Biography and career of Jim Carrey.",
    "type": "Person"
  },
  {
    "title": "Jackie Chan",
    "url": "https://en.wikipedia.org/wiki/Jackie_Chan",
    "description": "Biography and career of Jackie Chan.",
    "type": "Person"
  },
  {
    "title": "Bruce Lee",
    "url": "https://en.wikipedia.org/wiki/Bruce_Lee",
    "description": "Biography and career of Bruce Lee.",
    "type": "Person"
  },
  {
    "title": "Marilyn Monroe",
    "url": "https://en.wikipedia.org/wiki/Marilyn_Monroe",
    "description": "Biography and career of Marilyn Monroe.",
    "type": "Person"
  },
  {
    "title": "Audrey Hepburn",
    "url": "https://en.wikipedia.org/wiki/Audrey_Hepburn",
    "description": "Biography and career of Audrey Hepburn.",
    "type": "Person"
  },
  {
    "title": "Charlie Chaplin",
    "url": "https://en.wikipedia.org/wiki/Charlie_Chaplin",
    "description": "Biography and career of Charlie Chaplin.",
    "type": "Person"
  },
  {
    "title": "Walt Disney",
    "url": "https://en.wikipedia.org/wiki/Walt_Disney",
    "description": "Biography and career of Walt Disney.",
    "type": "Person"
  },
  {
    "title": "Steven Spielberg",
    "url": "https://en.wikipedia.org/wiki/Steven_Spielberg",
    "description": "Biography and career of Steven Spielberg.",
    "type": "Person"
  },
  {
    "title": "Christopher Nolan",
    "url": "https://en.wikipedia.org/wiki/Christopher_Nolan",
    "description": "Biography and career of Christopher Nolan.",
    "type": "Person"
  },
  {
    "title": "Martin Scorsese",
    "url": "https://en.wikipedia.org/wiki/Martin_Scorsese",
    "description": "Biography and career of Martin Scorsese.",
    "type": "Person"
  },
  {
    "title": "James Cameron",
    "url": "https://en.wikipedia.org/wiki/James_Cameron",
    "description": "Biography and career of James Cameron.",
    "type": "Person"
  },
  {
    "title": "George Lucas",
    "url": "https://en.wikipedia.org/wiki/George_Lucas",
    "description": "Biography and career of George Lucas.",
    "type": "Person"
  },
  {
    "title": "Stanley Kubrick",
    "url": "https://en.wikipedia.org/wiki/Stanley_Kubrick",
    "description": "Biography and career of Stanley Kubrick.",
    "type": "Person"
  },
  {
    "title": "Quentin Tarantino",
    "url": "https://en.wikipedia.org/wiki/Quentin_Tarantino",
    "description": "Biography and career of Quentin Tarantino.",
    "type": "Person"
  },
  {
    "title": "Alfred Hitchcock",
    "url": "https://en.wikipedia.org/wiki/Alfred_Hitchcock",
    "description": "Biography and career of Alfred Hitchcock.",
    "type": "Person"
  },
  {
    "title": "Christopher Columbus",
    "url": "https://en.wikipedia.org/wiki/Christopher_Columbus",
    "description": "Biography and career of Christopher Columbus.",
    "type": "Person"
  },
  {
    "title": "Marco Polo",
    "url": "https://en.wikipedia.org/wiki/Marco_Polo",
    "description": "Biography and career of Marco Polo.",
    "type": "Person"
  },
  {
    "title": "Isaac Asimov",
    "url": "https://en.wikipedia.org/wiki/Isaac_Asimov",
    "description": "Biography and career of Isaac Asimov.",
    "type": "Person"
  },
  {
    "title": "Alan Turing",
    "url": "https://en.wikipedia.org/wiki/Alan_Turing",
    "description": "Biography and career of Alan Turing.",
    "type": "Person"
  },
  {
    "title": "Ada Lovelace",
    "url": "https://en.wikipedia.org/wiki/Ada_Lovelace",
    "description": "Biography and career of Ada Lovelace.",
    "type": "Person"
  },
  {
    "title": "Stephen Hawking",
    "url": "https://en.wikipedia.org/wiki/Stephen_Hawking",
    "description": "Biography and career of Stephen Hawking.",
    "type": "Person"
  },
  {
    "title": "Richard Feynman",
    "url": "https://en.wikipedia.org/wiki/Richard_Feynman",
    "description": "Biography and career of Richard Feynman.",
    "type": "Person"
  },
  {
    "title": "Carl Sagan",
    "url": "https://en.wikipedia.org/wiki/Carl_Sagan",
    "description": "Biography and career of Carl Sagan.",
    "type": "Person"
  },
  {
    "title": "Neil deGrasse Tyson",
    "url": "https://en.wikipedia.org/wiki/Neil_deGrasse_Tyson",
    "description": "Biography and career of Neil deGrasse Tyson.",
    "type": "Person"
  },
  {
    "title": "Jane Goodall",
    "url": "https://en.wikipedia.org/wiki/Jane_Goodall",
    "description": "Biography and career of Jane Goodall.",
    "type": "Person"
  },
  {
    "title": "Rosalind Franklin",
    "url": "https://en.wikipedia.org/wiki/Rosalind_Franklin",
    "description": "Biography and career of Rosalind Franklin.",
    "type": "Person"
  },
  {
    "title": "Louis Pasteur",
    "url": "https://en.wikipedia.org/wiki/Louis_Pasteur",
    "description": "Biography and career of Louis Pasteur.",
    "type": "Person"
  },
  {
    "title": "Dmitri Mendeleev",
    "url": "https://en.wikipedia.org/wiki/Dmitri_Mendeleev",
    "description": "Biography and career of Dmitri Mendeleev.",
    "type": "Person"
  },
  {
    "title": "Gregor Mendel",
    "url": "https://en.wikipedia.org/wiki/Gregor_Mendel",
    "description": "Biography and career of Gregor Mendel.",
    "type": "Person"
  },
  {
    "title": "Johannes Kepler",
    "url": "https://en.wikipedia.org/wiki/Johannes_Kepler",
    "description": "Biography and career of Johannes Kepler.",
    "type": "Person"
  },
  {
    "title": "Michael Faraday",
    "url": "https://en.wikipedia.org/wiki/Michael_Faraday",
    "description": "Biography and career of Michael Faraday.",
    "type": "Person"
  },
  {
    "title": "James Clerk Maxwell",
    "url": "https://en.wikipedia.org/wiki/James_Clerk_Maxwell",
    "description": "Biography and career of James Clerk Maxwell.",
    "type": "Person"
  },
  {
    "title": "Erwin Schrödinger",
    "url": "https://en.wikipedia.org/wiki/Erwin_Schr%C3%B6dinger",
    "description": "Biography and career of Erwin Schrödinger.",
    "type": "Person"
  },
  {
    "title": "Niels Bohr",
    "url": "https://en.wikipedia.org/wiki/Niels_Bohr",
    "description": "Biography and career of Niels Bohr.",
    "type": "Person"
  },
  {
    "title": "Max Planck",
    "url": "https://en.wikipedia.org/wiki/Max_Planck",
    "description": "Biography and career of Max Planck.",
    "type": "Person"
  },
  {
    "title": "Srinivasa Ramanujan",
    "url": "https://en.wikipedia.org/wiki/Srinivasa_Ramanujan",
    "description": "Biography and career of Srinivasa Ramanujan.",
    "type": "Person"
  },
  {
    "title": "Leonhard Euler",
    "url": "https://en.wikipedia.org/wiki/Leonhard_Euler",
    "description": "Biography and career of Leonhard Euler.",
    "type": "Person"
  },
  {
    "title": "Euclid",
    "url": "https://en.wikipedia.org/wiki/Euclid",
    "description": "Biography and career of Euclid.",
    "type": "Person"
  },
  {
    "title": "Archimedes",
    "url": "https://en.wikipedia.org/wiki/Archimedes",
    "description": "Biography and career of Archimedes.",
    "type": "Person"
  },
  {
    "title": "Carl Friedrich Gauss",
    "url": "https://en.wikipedia.org/wiki/Carl_Friedrich_Gauss",
    "description": "Biography and career of Carl Friedrich Gauss.",
    "type": "Person"
  },
  {
    "title": "Kurt Gödel",
    "url": "https://en.wikipedia.org/wiki/Kurt_G%C3%B6del",
    "description": "Biography and career of Kurt Gödel.",
    "type": "Person"
  },
  {
    "title": "John von Neumann",
    "url": "https://en.wikipedia.org/wiki/John_von_Neumann",
    "description": "Biography and career of John von Neumann.",
    "type": "Person"
  },
  {
    "title": "Grace Hopper",
    "url": "https://en.wikipedia.org/wiki/Grace_Hopper",
    "description": "Biography and career of Grace Hopper.",
    "type": "Person"
  },
  {
    "title": "Tim Berners-Lee",
    "url": "https://en.wikipedia.org/wiki/Tim_Berners-Lee",
    "description": "Biography and career of Tim Berners-Lee.",
    "type": "Person"
  },
  {
    "title": "Linus Torvalds",
    "url": "https://en.wikipedia.org/wiki/Linus_Torvalds",
    "description": "Biography and career of Linus Torvalds.",
    "type": "Person"
  },
  {
    "title": "Bill Gates",
    "url": "https://en.wikipedia.org/wiki/Bill_Gates",
    "description": "Biography and career of Bill Gates.",
    "type": "Person"
  },
  {
    "title": "Steve Jobs",
    "url": "https://en.wikipedia.org/wiki/Steve_Jobs",
    "description": "Biography and career of Steve Jobs.",
    "type": "Person"
  },
  {
    "title": "Mark Zuckerberg",
    "url": "https://en.wikipedia.org/wiki/Mark_Zuckerberg",
    "description": "Biography and career of Mark Zuckerberg.",
    "type": "Person"
  },
  {
    "title": "Larry Page",
    "url": "https://en.wikipedia.org/wiki/Larry_Page",
    "description": "Biography and career of Larry Page.",
    "type": "Person"
  },
  {
    "title": "Sergey Brin",
    "url": "https://en.wikipedia.org/wiki/Sergey_Brin",
    "description": "Biography and career of Sergey Brin.",
    "type": "Person"
  },
  {
    "title": "Elon Musk",
    "url": "https://en.wikipedia.org/wiki/Elon_Musk",
    "description": "Biography and career of Elon Musk.",
    "type": "Person"
  },
  {
    "title": "Sam Altman",
    "url": "https://en.wikipedia.org/wiki/Sam_Altman",
    "description": "Biography and career of Sam Altman.",
    "type": "Person"
  },
  {
    "title": "Warren Buffett",
    "url": "https://en.wikipedia.org/wiki/Warren_Buffett",
    "description": "Biography and career of Warren Buffett.",
    "type": "Person"
  },
  {
    "title": "Henry Ford",
    "url": "https://en.wikipedia.org/wiki/Henry_Ford",
    "description": "Biography and career of Henry Ford.",
    "type": "Person"
  },
  {
    "title": "Oprah Winfrey",
    "url": "https://en.wikipedia.org/wiki/Oprah_Winfrey",
    "description": "Biography and career of Oprah Winfrey.",
    "type": "Person"
  },
  {
    "title": "MrBeast",
    "url": "https://en.wikipedia.org/wiki/MrBeast",
    "description": "Biography and career of MrBeast.",
    "type": "Person"
  },
  {
    "title": "Lionel Messi",
    "url": "https://en.wikipedia.org/wiki/Lionel_Messi",
    "description": "Biography and career of Lionel Messi.",
    "type": "Person"
  },
  {
    "title": "Kylian Mbappé",
    "url": "https://en.wikipedia.org/wiki/Kylian_Mbapp%C3%A9",
    "description": "Biography and career of Kylian Mbappé.",
    "type": "Person"
  },
  {
    "title": "Neymar",
    "url": "https://en.wikipedia.org/wiki/Neymar",
    "description": "Biography and career of Neymar.",
    "type": "Person"
  },
  {
    "title": "LeBron James",
    "url": "https://en.wikipedia.org/wiki/LeBron_James",
    "description": "Biography and career of LeBron James.",
    "type": "Person"
  },
  {
    "title": "Michael Jordan",
    "url": "https://en.wikipedia.org/wiki/Michael_Jordan",
    "description": "Biography and career of Michael Jordan.",
    "type": "Person"
  },
  {
    "title": "Stephen Curry",
    "url": "https://en.wikipedia.org/wiki/Stephen_Curry",
    "description": "Biography and career of Stephen Curry.",
    "type": "Person"
  },
  {
    "title": "Kobe Bryant",
    "url": "https://en.wikipedia.org/wiki/Kobe_Bryant",
    "description": "Biography and career of Kobe Bryant.",
    "type": "Person"
  },
  {
    "title": "Tiger Woods",
    "url": "https://en.wikipedia.org/wiki/Tiger_Woods",
    "description": "Biography and career of Tiger Woods.",
    "type": "Person"
  },
  {
    "title": "Roger Federer",
    "url": "https://en.wikipedia.org/wiki/Roger_Federer",
    "description": "Biography and career of Roger Federer.",
    "type": "Person"
  },
  {
    "title": "Rafael Nadal",
    "url": "https://en.wikipedia.org/wiki/Rafael_Nadal",
    "description": "Biography and career of Rafael Nadal.",
    "type": "Person"
  },
  {
    "title": "Novak Djokovic",
    "url": "https://en.wikipedia.org/wiki/Novak_Djokovic",
    "description": "Biography and career of Novak Djokovic.",
    "type": "Person"
  },
  {
    "title": "Serena Williams",
    "url": "https://en.wikipedia.org/wiki/Serena_Williams",
    "description": "Biography and career of Serena Williams.",
    "type": "Person"
  },
  {
    "title": "Lewis Hamilton",
    "url": "https://en.wikipedia.org/wiki/Lewis_Hamilton",
    "description": "Biography and career of Lewis Hamilton.",
    "type": "Person"
  },
  {
    "title": "Max Verstappen",
    "url": "https://en.wikipedia.org/wiki/Max_Verstappen",
    "description": "Biography and career of Max Verstappen.",
    "type": "Person"
  },
  {
    "title": "Usain Bolt",
    "url": "https://en.wikipedia.org/wiki/Usain_Bolt",
    "description": "Biography and career of Usain Bolt.",
    "type": "Person"
  },
  {
    "title": "Simone Biles",
    "url": "https://en.wikipedia.org/wiki/Simone_Biles",
    "description": "Biography and career of Simone Biles.",
    "type": "Person"
  },
  {
    "title": "Michael Phelps",
    "url": "https://en.wikipedia.org/wiki/Michael_Phelps",
    "description": "Biography and career of Michael Phelps.",
    "type": "Person"
  },
  {
    "title": "Tom Brady",
    "url": "https://en.wikipedia.org/wiki/Tom_Brady",
    "description": "Biography and career of Tom Brady.",
    "type": "Person"
  },
  {
    "title": "Shohei Ohtani",
    "url": "https://en.wikipedia.org/wiki/Shohei_Ohtani",
    "description": "Biography and career of Shohei Ohtani.",
    "type": "Person"
  },
  {
    "title": "Virat Kohli",
    "url": "https://en.wikipedia.org/wiki/Virat_Kohli",
    "description": "Biography and career of Virat Kohli.",
    "type": "Person"
  },
  {
    "title": "Sachin Tendulkar",
    "url": "https://en.wikipedia.org/wiki/Sachin_Tendulkar",
    "description": "Biography and career of Sachin Tendulkar.",
    "type": "Person"
  },
  {
    "title": "Diego Maradona",
    "url": "https://en.wikipedia.org/wiki/Diego_Maradona",
    "description": "Biography and career of Diego Maradona.",
    "type": "Person"
  },
  {
    "title": "Pelé",
    "url": "https://en.wikipedia.org/wiki/Pel%C3%A9",
    "description": "Biography and career of Pelé.",
    "type": "Person"
  },
  {
    "title": "Zinedine Zidane",
    "url": "https://en.wikipedia.org/wiki/Zinedine_Zidane",
    "description": "Biography and career of Zinedine Zidane.",
    "type": "Person"
  },
  {
    "title": "Science",
    "url": "https://en.wikipedia.org/wiki/Science",
    "description": "Scientific overview of Science.",
    "type": "Science"
  },
  {
    "title": "Scientific method",
    "url": "https://en.wikipedia.org/wiki/Scientific_method",
    "description": "Scientific overview of Scientific method.",
    "type": "Science"
  },
  {
    "title": "Physics",
    "url": "https://en.wikipedia.org/wiki/Physics",
    "description": "Scientific overview of Physics.",
    "type": "Science"
  },
  {
    "title": "Chemistry",
    "url": "https://en.wikipedia.org/wiki/Chemistry",
    "description": "Scientific overview of Chemistry.",
    "type": "Science"
  },
  {
    "title": "Biology",
    "url": "https://en.wikipedia.org/wiki/Biology",
    "description": "Scientific overview of Biology.",
    "type": "Science"
  },
  {
    "title": "Mathematics",
    "url": "https://en.wikipedia.org/wiki/Mathematics",
    "description": "Scientific overview of Mathematics.",
    "type": "Science"
  },
  {
    "title": "Astronomy",
    "url": "https://en.wikipedia.org/wiki/Astronomy",
    "description": "Scientific overview of Astronomy.",
    "type": "Science"
  },
  {
    "title": "Earth science",
    "url": "https://en.wikipedia.org/wiki/Earth_science",
    "description": "Scientific overview of Earth science.",
    "type": "Science"
  },
  {
    "title": "Environmental science",
    "url": "https://en.wikipedia.org/wiki/Environmental_science",
    "description": "Scientific overview of Environmental science.",
    "type": "Science"
  },
  {
    "title": "Computer science",
    "url": "https://en.wikipedia.org/wiki/Computer_science",
    "description": "Technology and computing information about Computer science.",
    "type": "Technology"
  },
  {
    "title": "Psychology",
    "url": "https://en.wikipedia.org/wiki/Psychology",
    "description": "Scientific overview of Psychology.",
    "type": "Science"
  },
  {
    "title": "Sociology",
    "url": "https://en.wikipedia.org/wiki/Sociology",
    "description": "Scientific overview of Sociology.",
    "type": "Science"
  },
  {
    "title": "Geology",
    "url": "https://en.wikipedia.org/wiki/Geology",
    "description": "Scientific overview of Geology.",
    "type": "Science"
  },
  {
    "title": "Oceanography",
    "url": "https://en.wikipedia.org/wiki/Oceanography",
    "description": "Scientific overview of Oceanography.",
    "type": "Science"
  },
  {
    "title": "Ecology",
    "url": "https://en.wikipedia.org/wiki/Ecology",
    "description": "Scientific overview of Ecology.",
    "type": "Science"
  },
  {
    "title": "Evolution",
    "url": "https://en.wikipedia.org/wiki/Evolution",
    "description": "Scientific overview of Evolution.",
    "type": "Science"
  },
  {
    "title": "Natural selection",
    "url": "https://en.wikipedia.org/wiki/Natural_selection",
    "description": "Scientific overview of Natural selection.",
    "type": "Science"
  },
  {
    "title": "Genetics",
    "url": "https://en.wikipedia.org/wiki/Genetics",
    "description": "Scientific overview of Genetics.",
    "type": "Science"
  },
  {
    "title": "DNA",
    "url": "https://en.wikipedia.org/wiki/DNA",
    "description": "Scientific overview of DNA.",
    "type": "Science"
  },
  {
    "title": "RNA",
    "url": "https://en.wikipedia.org/wiki/RNA",
    "description": "Scientific overview of RNA.",
    "type": "Science"
  },
  {
    "title": "Protein",
    "url": "https://en.wikipedia.org/wiki/Protein",
    "description": "Scientific overview of Protein.",
    "type": "Science"
  },
  {
    "title": "Cell (biology)",
    "url": "https://en.wikipedia.org/wiki/Cell_(biology)",
    "description": "Scientific overview of Cell (biology).",
    "type": "Science"
  },
  {
    "title": "Cell membrane",
    "url": "https://en.wikipedia.org/wiki/Cell_membrane",
    "description": "Scientific overview of Cell membrane.",
    "type": "Science"
  },
  {
    "title": "Nucleus",
    "url": "https://en.wikipedia.org/wiki/Nucleus",
    "description": "Scientific overview of Nucleus.",
    "type": "Science"
  },
  {
    "title": "Mitochondrion",
    "url": "https://en.wikipedia.org/wiki/Mitochondrion",
    "description": "Scientific overview of Mitochondrion.",
    "type": "Science"
  },
  {
    "title": "Ribosome",
    "url": "https://en.wikipedia.org/wiki/Ribosome",
    "description": "Scientific overview of Ribosome.",
    "type": "Science"
  },
  {
    "title": "Photosynthesis",
    "url": "https://en.wikipedia.org/wiki/Photosynthesis",
    "description": "Scientific overview of Photosynthesis.",
    "type": "Science"
  },
  {
    "title": "Respiration",
    "url": "https://en.wikipedia.org/wiki/Respiration",
    "description": "Scientific overview of Respiration.",
    "type": "Science"
  },
  {
    "title": "Metabolism",
    "url": "https://en.wikipedia.org/wiki/Metabolism",
    "description": "Scientific overview of Metabolism.",
    "type": "Science"
  },
  {
    "title": "Ecosystem",
    "url": "https://en.wikipedia.org/wiki/Ecosystem",
    "description": "Scientific overview of Ecosystem.",
    "type": "Science"
  },
  {
    "title": "Biodiversity",
    "url": "https://en.wikipedia.org/wiki/Biodiversity",
    "description": "Scientific overview of Biodiversity.",
    "type": "Science"
  },
  {
    "title": "Animal",
    "url": "https://en.wikipedia.org/wiki/Animal",
    "description": "Scientific overview of Animal.",
    "type": "Science"
  },
  {
    "title": "Plant",
    "url": "https://en.wikipedia.org/wiki/Plant",
    "description": "Scientific overview of Plant.",
    "type": "Science"
  },
  {
    "title": "Fungus",
    "url": "https://en.wikipedia.org/wiki/Fungus",
    "description": "Scientific overview of Fungus.",
    "type": "Science"
  },
  {
    "title": "Bacteria",
    "url": "https://en.wikipedia.org/wiki/Bacteria",
    "description": "Scientific overview of Bacteria.",
    "type": "Science"
  },
  {
    "title": "Virus",
    "url": "https://en.wikipedia.org/wiki/Virus",
    "description": "Scientific overview of Virus.",
    "type": "Science"
  },
  {
    "title": "Human",
    "url": "https://en.wikipedia.org/wiki/Human",
    "description": "Scientific overview of Human.",
    "type": "Science"
  },
  {
    "title": "Human evolution",
    "url": "https://en.wikipedia.org/wiki/Human_evolution",
    "description": "Scientific overview of Human evolution.",
    "type": "Science"
  },
  {
    "title": "Human body",
    "url": "https://en.wikipedia.org/wiki/Human_body",
    "description": "Scientific overview of Human body.",
    "type": "Science"
  },
  {
    "title": "Brain",
    "url": "https://en.wikipedia.org/wiki/Brain",
    "description": "Scientific overview of Brain.",
    "type": "Science"
  },
  {
    "title": "Heart",
    "url": "https://en.wikipedia.org/wiki/Heart",
    "description": "Scientific overview of Heart.",
    "type": "Science"
  },
  {
    "title": "Lung",
    "url": "https://en.wikipedia.org/wiki/Lung",
    "description": "Scientific overview of Lung.",
    "type": "Science"
  },
  {
    "title": "Liver",
    "url": "https://en.wikipedia.org/wiki/Liver",
    "description": "Scientific overview of Liver.",
    "type": "Science"
  },
  {
    "title": "Kidney",
    "url": "https://en.wikipedia.org/wiki/Kidney",
    "description": "Scientific overview of Kidney.",
    "type": "Science"
  },
  {
    "title": "Blood",
    "url": "https://en.wikipedia.org/wiki/Blood",
    "description": "Scientific overview of Blood.",
    "type": "Science"
  },
  {
    "title": "Bone",
    "url": "https://en.wikipedia.org/wiki/Bone",
    "description": "Scientific overview of Bone.",
    "type": "Science"
  },
  {
    "title": "Muscle",
    "url": "https://en.wikipedia.org/wiki/Muscle",
    "description": "Scientific overview of Muscle.",
    "type": "Science"
  },
  {
    "title": "Skin",
    "url": "https://en.wikipedia.org/wiki/Skin",
    "description": "Scientific overview of Skin.",
    "type": "Science"
  },
  {
    "title": "Immune system",
    "url": "https://en.wikipedia.org/wiki/Immune_system",
    "description": "Scientific overview of Immune system.",
    "type": "Science"
  },
  {
    "title": "Nervous system",
    "url": "https://en.wikipedia.org/wiki/Nervous_system",
    "description": "Scientific overview of Nervous system.",
    "type": "Science"
  },
  {
    "title": "Circulatory system",
    "url": "https://en.wikipedia.org/wiki/Circulatory_system",
    "description": "Scientific overview of Circulatory system.",
    "type": "Science"
  },
  {
    "title": "Respiratory system",
    "url": "https://en.wikipedia.org/wiki/Respiratory_system",
    "description": "Scientific overview of Respiratory system.",
    "type": "Science"
  },
  {
    "title": "Digestive system",
    "url": "https://en.wikipedia.org/wiki/Digestive_system",
    "description": "Scientific overview of Digestive system.",
    "type": "Science"
  },
  {
    "title": "Endocrine system",
    "url": "https://en.wikipedia.org/wiki/Endocrine_system",
    "description": "Scientific overview of Endocrine system.",
    "type": "Science"
  },
  {
    "title": "Skeletal system",
    "url": "https://en.wikipedia.org/wiki/Skeletal_system",
    "description": "Scientific overview of Skeletal system.",
    "type": "Science"
  },
  {
    "title": "Solar System",
    "url": "https://en.wikipedia.org/wiki/Solar_System",
    "description": "Scientific overview of Solar System.",
    "type": "Science"
  },
  {
    "title": "Universe",
    "url": "https://en.wikipedia.org/wiki/Universe",
    "description": "Geographical overview of Universe.",
    "type": "Place / Geography"
  },
  {
    "title": "Milky Way",
    "url": "https://en.wikipedia.org/wiki/Milky_Way",
    "description": "Scientific overview of Milky Way.",
    "type": "Science"
  },
  {
    "title": "Galaxy",
    "url": "https://en.wikipedia.org/wiki/Galaxy",
    "description": "Scientific overview of Galaxy.",
    "type": "Science"
  },
  {
    "title": "Star",
    "url": "https://en.wikipedia.org/wiki/Star",
    "description": "Scientific overview of Star.",
    "type": "Science"
  },
  {
    "title": "Planet",
    "url": "https://en.wikipedia.org/wiki/Planet",
    "description": "Scientific overview of Planet.",
    "type": "Science"
  },
  {
    "title": "Earth",
    "url": "https://en.wikipedia.org/wiki/Earth",
    "description": "Geographical overview of Earth.",
    "type": "Place / Geography"
  },
  {
    "title": "Moon",
    "url": "https://en.wikipedia.org/wiki/Moon",
    "description": "Geographical overview of Moon.",
    "type": "Place / Geography"
  },
  {
    "title": "Sun",
    "url": "https://en.wikipedia.org/wiki/Sun",
    "description": "Geographical overview of Sun.",
    "type": "Place / Geography"
  },
  {
    "title": "Mercury",
    "url": "https://en.wikipedia.org/wiki/Mercury",
    "description": "Scientific overview of Mercury.",
    "type": "Science"
  },
  {
    "title": "Venus",
    "url": "https://en.wikipedia.org/wiki/Venus",
    "description": "Scientific overview of Venus.",
    "type": "Science"
  },
  {
    "title": "Mars",
    "url": "https://en.wikipedia.org/wiki/Mars",
    "description": "Geographical overview of Mars.",
    "type": "Place / Geography"
  },
  {
    "title": "Jupiter",
    "url": "https://en.wikipedia.org/wiki/Jupiter",
    "description": "Scientific overview of Jupiter.",
    "type": "Science"
  },
  {
    "title": "Saturn",
    "url": "https://en.wikipedia.org/wiki/Saturn",
    "description": "Scientific overview of Saturn.",
    "type": "Science"
  },
  {
    "title": "Uranus",
    "url": "https://en.wikipedia.org/wiki/Uranus",
    "description": "Scientific overview of Uranus.",
    "type": "Science"
  },
  {
    "title": "Neptune",
    "url": "https://en.wikipedia.org/wiki/Neptune",
    "description": "Scientific overview of Neptune.",
    "type": "Science"
  },
  {
    "title": "Pluto",
    "url": "https://en.wikipedia.org/wiki/Pluto",
    "description": "Scientific overview of Pluto.",
    "type": "Science"
  },
  {
    "title": "Asteroid",
    "url": "https://en.wikipedia.org/wiki/Asteroid",
    "description": "Scientific overview of Asteroid.",
    "type": "Science"
  },
  {
    "title": "Comet",
    "url": "https://en.wikipedia.org/wiki/Comet",
    "description": "Scientific overview of Comet.",
    "type": "Science"
  },
  {
    "title": "Black hole",
    "url": "https://en.wikipedia.org/wiki/Black_hole",
    "description": "Scientific overview of Black hole.",
    "type": "Science"
  },
  {
    "title": "Big Bang",
    "url": "https://en.wikipedia.org/wiki/Big_Bang",
    "description": "Scientific overview of Big Bang.",
    "type": "Science"
  },
  {
    "title": "Supernova",
    "url": "https://en.wikipedia.org/wiki/Supernova",
    "description": "Scientific overview of Supernova.",
    "type": "Science"
  },
  {
    "title": "Nebula",
    "url": "https://en.wikipedia.org/wiki/Nebula",
    "description": "Scientific overview of Nebula.",
    "type": "Science"
  },
  {
    "title": "Gravity",
    "url": "https://en.wikipedia.org/wiki/Gravity",
    "description": "Scientific overview of Gravity.",
    "type": "Science"
  },
  {
    "title": "Relativity",
    "url": "https://en.wikipedia.org/wiki/Relativity",
    "description": "Scientific overview of Relativity.",
    "type": "Science"
  },
  {
    "title": "Quantum mechanics",
    "url": "https://en.wikipedia.org/wiki/Quantum_mechanics",
    "description": "Scientific overview of Quantum mechanics.",
    "type": "Science"
  },
  {
    "title": "Quantum physics",
    "url": "https://en.wikipedia.org/wiki/Quantum_physics",
    "description": "Scientific overview of Quantum physics.",
    "type": "Science"
  },
  {
    "title": "Electromagnetism",
    "url": "https://en.wikipedia.org/wiki/Electromagnetism",
    "description": "Scientific overview of Electromagnetism.",
    "type": "Science"
  },
  {
    "title": "Thermodynamics",
    "url": "https://en.wikipedia.org/wiki/Thermodynamics",
    "description": "Scientific overview of Thermodynamics.",
    "type": "Science"
  },
  {
    "title": "Classical mechanics",
    "url": "https://en.wikipedia.org/wiki/Classical_mechanics",
    "description": "Scientific overview of Classical mechanics.",
    "type": "Science"
  },
  {
    "title": "Particle physics",
    "url": "https://en.wikipedia.org/wiki/Particle_physics",
    "description": "Scientific overview of Particle physics.",
    "type": "Science"
  },
  {
    "title": "Nuclear physics",
    "url": "https://en.wikipedia.org/wiki/Nuclear_physics",
    "description": "Scientific overview of Nuclear physics.",
    "type": "Science"
  },
  {
    "title": "Optics",
    "url": "https://en.wikipedia.org/wiki/Optics",
    "description": "Scientific overview of Optics.",
    "type": "Science"
  },
  {
    "title": "Sound",
    "url": "https://en.wikipedia.org/wiki/Sound",
    "description": "Scientific overview of Sound.",
    "type": "Science"
  },
  {
    "title": "Light",
    "url": "https://en.wikipedia.org/wiki/Light",
    "description": "Scientific overview of Light.",
    "type": "Science"
  },
  {
    "title": "Energy",
    "url": "https://en.wikipedia.org/wiki/Energy",
    "description": "Scientific overview of Energy.",
    "type": "Science"
  },
  {
    "title": "Force",
    "url": "https://en.wikipedia.org/wiki/Force",
    "description": "Scientific overview of Force.",
    "type": "Science"
  },
  {
    "title": "Motion",
    "url": "https://en.wikipedia.org/wiki/Motion",
    "description": "Scientific overview of Motion.",
    "type": "Science"
  },
  {
    "title": "Time",
    "url": "https://en.wikipedia.org/wiki/Time",
    "description": "Scientific overview of Time.",
    "type": "Science"
  },
  {
    "title": "Space",
    "url": "https://en.wikipedia.org/wiki/Space",
    "description": "Scientific overview of Space.",
    "type": "Science"
  },
  {
    "title": "Atom",
    "url": "https://en.wikipedia.org/wiki/Atom",
    "description": "Scientific overview of Atom.",
    "type": "Science"
  },
  {
    "title": "Molecule",
    "url": "https://en.wikipedia.org/wiki/Molecule",
    "description": "Scientific overview of Molecule.",
    "type": "Science"
  },
  {
    "title": "Chemical element",
    "url": "https://en.wikipedia.org/wiki/Chemical_element",
    "description": "Scientific overview of Chemical element.",
    "type": "Science"
  },
  {
    "title": "Periodic table",
    "url": "https://en.wikipedia.org/wiki/Periodic_table",
    "description": "Scientific overview of Periodic table.",
    "type": "Science"
  },
  {
    "title": "Hydrogen",
    "url": "https://en.wikipedia.org/wiki/Hydrogen",
    "description": "Scientific overview of Hydrogen.",
    "type": "Science"
  },
  {
    "title": "Helium",
    "url": "https://en.wikipedia.org/wiki/Helium",
    "description": "Scientific overview of Helium.",
    "type": "Science"
  },
  {
    "title": "Carbon",
    "url": "https://en.wikipedia.org/wiki/Carbon",
    "description": "Scientific overview of Carbon.",
    "type": "Science"
  },
  {
    "title": "Nitrogen",
    "url": "https://en.wikipedia.org/wiki/Nitrogen",
    "description": "Scientific overview of Nitrogen.",
    "type": "Science"
  },
  {
    "title": "Oxygen",
    "url": "https://en.wikipedia.org/wiki/Oxygen",
    "description": "Scientific overview of Oxygen.",
    "type": "Science"
  },
  {
    "title": "Silicon",
    "url": "https://en.wikipedia.org/wiki/Silicon",
    "description": "Scientific overview of Silicon.",
    "type": "Science"
  },
  {
    "title": "Iron",
    "url": "https://en.wikipedia.org/wiki/Iron",
    "description": "Scientific overview of Iron.",
    "type": "Science"
  },
  {
    "title": "Copper",
    "url": "https://en.wikipedia.org/wiki/Copper",
    "description": "Scientific overview of Copper.",
    "type": "Science"
  },
  {
    "title": "Silver",
    "url": "https://en.wikipedia.org/wiki/Silver",
    "description": "Scientific overview of Silver.",
    "type": "Science"
  },
  {
    "title": "Gold",
    "url": "https://en.wikipedia.org/wiki/Gold",
    "description": "Scientific overview of Gold.",
    "type": "Science"
  },
  {
    "title": "Water",
    "url": "https://en.wikipedia.org/wiki/Water",
    "description": "Scientific overview of Water.",
    "type": "Science"
  },
  {
    "title": "Carbon dioxide",
    "url": "https://en.wikipedia.org/wiki/Carbon_dioxide",
    "description": "Scientific overview of Carbon dioxide.",
    "type": "Science"
  },
  {
    "title": "Acid",
    "url": "https://en.wikipedia.org/wiki/Acid",
    "description": "Scientific overview of Acid.",
    "type": "Science"
  },
  {
    "title": "Base (chemistry)",
    "url": "https://en.wikipedia.org/wiki/Base_(chemistry)",
    "description": "Scientific overview of Base (chemistry).",
    "type": "Science"
  },
  {
    "title": "Chemical bond",
    "url": "https://en.wikipedia.org/wiki/Chemical_bond",
    "description": "Scientific overview of Chemical bond.",
    "type": "Science"
  },
  {
    "title": "Chemical reaction",
    "url": "https://en.wikipedia.org/wiki/Chemical_reaction",
    "description": "Scientific overview of Chemical reaction.",
    "type": "Science"
  },
  {
    "title": "Organic chemistry",
    "url": "https://en.wikipedia.org/wiki/Organic_chemistry",
    "description": "Scientific overview of Organic chemistry.",
    "type": "Science"
  },
  {
    "title": "Inorganic chemistry",
    "url": "https://en.wikipedia.org/wiki/Inorganic_chemistry",
    "description": "Scientific overview of Inorganic chemistry.",
    "type": "Science"
  },
  {
    "title": "Biochemistry",
    "url": "https://en.wikipedia.org/wiki/Biochemistry",
    "description": "Scientific overview of Biochemistry.",
    "type": "Science"
  },
  {
    "title": "Analytical chemistry",
    "url": "https://en.wikipedia.org/wiki/Analytical_chemistry",
    "description": "Scientific overview of Analytical chemistry.",
    "type": "Science"
  },
  {
    "title": "Physical chemistry",
    "url": "https://en.wikipedia.org/wiki/Physical_chemistry",
    "description": "Scientific overview of Physical chemistry.",
    "type": "Science"
  },
  {
    "title": "Geography",
    "url": "https://en.wikipedia.org/wiki/Geography",
    "description": "Scientific overview of Geography.",
    "type": "Science"
  },
  {
    "title": "Climate",
    "url": "https://en.wikipedia.org/wiki/Climate",
    "description": "Scientific overview of Climate.",
    "type": "Science"
  },
  {
    "title": "Climate change",
    "url": "https://en.wikipedia.org/wiki/Climate_change",
    "description": "Scientific overview of Climate change.",
    "type": "Science"
  },
  {
    "title": "Weather",
    "url": "https://en.wikipedia.org/wiki/Weather",
    "description": "Scientific overview of Weather.",
    "type": "Science"
  },
  {
    "title": "Atmosphere of Earth",
    "url": "https://en.wikipedia.org/wiki/Atmosphere_of_Earth",
    "description": "Scientific overview of Atmosphere of Earth.",
    "type": "Science"
  },
  {
    "title": "Ocean",
    "url": "https://en.wikipedia.org/wiki/Ocean",
    "description": "Scientific overview of Ocean.",
    "type": "Science"
  },
  {
    "title": "Sea",
    "url": "https://en.wikipedia.org/wiki/Sea",
    "description": "Scientific overview of Sea.",
    "type": "Science"
  },
  {
    "title": "River",
    "url": "https://en.wikipedia.org/wiki/River",
    "description": "Scientific overview of River.",
    "type": "Science"
  },
  {
    "title": "Lake",
    "url": "https://en.wikipedia.org/wiki/Lake",
    "description": "Scientific overview of Lake.",
    "type": "Science"
  },
  {
    "title": "Mountain",
    "url": "https://en.wikipedia.org/wiki/Mountain",
    "description": "Scientific overview of Mountain.",
    "type": "Science"
  },
  {
    "title": "Volcano",
    "url": "https://en.wikipedia.org/wiki/Volcano",
    "description": "Scientific overview of Volcano.",
    "type": "Science"
  },
  {
    "title": "Earthquake",
    "url": "https://en.wikipedia.org/wiki/Earthquake",
    "description": "Scientific overview of Earthquake.",
    "type": "Science"
  },
  {
    "title": "Tsunami",
    "url": "https://en.wikipedia.org/wiki/Tsunami",
    "description": "Scientific overview of Tsunami.",
    "type": "Science"
  },
  {
    "title": "Glacier",
    "url": "https://en.wikipedia.org/wiki/Glacier",
    "description": "Scientific overview of Glacier.",
    "type": "Science"
  },
  {
    "title": "Desert",
    "url": "https://en.wikipedia.org/wiki/Desert",
    "description": "Scientific overview of Desert.",
    "type": "Science"
  },
  {
    "title": "Forest",
    "url": "https://en.wikipedia.org/wiki/Forest",
    "description": "Scientific overview of Forest.",
    "type": "Science"
  },
  {
    "title": "Rainforest",
    "url": "https://en.wikipedia.org/wiki/Rainforest",
    "description": "Scientific overview of Rainforest.",
    "type": "Science"
  },
  {
    "title": "Arctic",
    "url": "https://en.wikipedia.org/wiki/Arctic",
    "description": "Scientific overview of Arctic.",
    "type": "Science"
  },
  {
    "title": "Continent",
    "url": "https://en.wikipedia.org/wiki/Continent",
    "description": "Scientific overview of Continent.",
    "type": "Science"
  },
  {
    "title": "Geodesy",
    "url": "https://en.wikipedia.org/wiki/Geodesy",
    "description": "Scientific overview of Geodesy.",
    "type": "Science"
  },
  {
    "title": "Cartography",
    "url": "https://en.wikipedia.org/wiki/Cartography",
    "description": "Scientific overview of Cartography.",
    "type": "Science"
  },
  {
    "title": "Statistics",
    "url": "https://en.wikipedia.org/wiki/Statistics",
    "description": "Scientific overview of Statistics.",
    "type": "Science"
  },
  {
    "title": "Probability",
    "url": "https://en.wikipedia.org/wiki/Probability",
    "description": "Scientific overview of Probability.",
    "type": "Science"
  },
  {
    "title": "Algebra",
    "url": "https://en.wikipedia.org/wiki/Algebra",
    "description": "Scientific overview of Algebra.",
    "type": "Science"
  },
  {
    "title": "Geometry",
    "url": "https://en.wikipedia.org/wiki/Geometry",
    "description": "Scientific overview of Geometry.",
    "type": "Science"
  },
  {
    "title": "Calculus",
    "url": "https://en.wikipedia.org/wiki/Calculus",
    "description": "Scientific overview of Calculus.",
    "type": "Science"
  },
  {
    "title": "Trigonometry",
    "url": "https://en.wikipedia.org/wiki/Trigonometry",
    "description": "Scientific overview of Trigonometry.",
    "type": "Science"
  },
  {
    "title": "Number theory",
    "url": "https://en.wikipedia.org/wiki/Number_theory",
    "description": "Scientific overview of Number theory.",
    "type": "Science"
  },
  {
    "title": "Set theory",
    "url": "https://en.wikipedia.org/wiki/Set_theory",
    "description": "Scientific overview of Set theory.",
    "type": "Science"
  },
  {
    "title": "Logic",
    "url": "https://en.wikipedia.org/wiki/Logic",
    "description": "Scientific overview of Logic.",
    "type": "Science"
  },
  {
    "title": "Algorithm",
    "url": "https://en.wikipedia.org/wiki/Algorithm",
    "description": "Scientific overview of Algorithm.",
    "type": "Science"
  },
  {
    "title": "Information theory",
    "url": "https://en.wikipedia.org/wiki/Information_theory",
    "description": "Scientific overview of Information theory.",
    "type": "Science"
  },
  {
    "title": "Cryptography",
    "url": "https://en.wikipedia.org/wiki/Cryptography",
    "description": "Scientific overview of Cryptography.",
    "type": "Science"
  },
  {
    "title": "Machine learning",
    "url": "https://en.wikipedia.org/wiki/Machine_learning",
    "description": "Technology and computing information about Machine learning.",
    "type": "Technology"
  },
  {
    "title": "Neural network",
    "url": "https://en.wikipedia.org/wiki/Neural_network",
    "description": "Scientific overview of Neural network.",
    "type": "Science"
  },
  {
    "title": "Robotics",
    "url": "https://en.wikipedia.org/wiki/Robotics",
    "description": "Scientific overview of Robotics.",
    "type": "Science"
  },
  {
    "title": "Nanotechnology",
    "url": "https://en.wikipedia.org/wiki/Nanotechnology",
    "description": "Technology and computing information about Nanotechnology.",
    "type": "Technology"
  },
  {
    "title": "Biotechnology",
    "url": "https://en.wikipedia.org/wiki/Biotechnology",
    "description": "Technology and computing information about Biotechnology.",
    "type": "Technology"
  },
  {
    "title": "History",
    "url": "https://en.wikipedia.org/wiki/History",
    "description": "Historical or social overview of History.",
    "type": "History / Society"
  },
  {
    "title": "Human history",
    "url": "https://en.wikipedia.org/wiki/Human_history",
    "description": "Historical or social overview of Human history.",
    "type": "History / Society"
  },
  {
    "title": "Prehistory",
    "url": "https://en.wikipedia.org/wiki/Prehistory",
    "description": "Historical or social overview of Prehistory.",
    "type": "History / Society"
  },
  {
    "title": "Archaeology",
    "url": "https://en.wikipedia.org/wiki/Archaeology",
    "description": "Historical or social overview of Archaeology.",
    "type": "History / Society"
  },
  {
    "title": "Ancient history",
    "url": "https://en.wikipedia.org/wiki/Ancient_history",
    "description": "Historical or social overview of Ancient history.",
    "type": "History / Society"
  },
  {
    "title": "Ancient Egypt",
    "url": "https://en.wikipedia.org/wiki/Ancient_Egypt",
    "description": "Historical or social overview of Ancient Egypt.",
    "type": "History / Society"
  },
  {
    "title": "Mesopotamia",
    "url": "https://en.wikipedia.org/wiki/Mesopotamia",
    "description": "Historical or social overview of Mesopotamia.",
    "type": "History / Society"
  },
  {
    "title": "Sumer",
    "url": "https://en.wikipedia.org/wiki/Sumer",
    "description": "Historical or social overview of Sumer.",
    "type": "History / Society"
  },
  {
    "title": "Ancient Greece",
    "url": "https://en.wikipedia.org/wiki/Ancient_Greece",
    "description": "Historical or social overview of Ancient Greece.",
    "type": "History / Society"
  },
  {
    "title": "Ancient Rome",
    "url": "https://en.wikipedia.org/wiki/Ancient_Rome",
    "description": "Historical or social overview of Ancient Rome.",
    "type": "History / Society"
  },
  {
    "title": "Classical antiquity",
    "url": "https://en.wikipedia.org/wiki/Classical_antiquity",
    "description": "Historical or social overview of Classical antiquity.",
    "type": "History / Society"
  },
  {
    "title": "Bronze Age",
    "url": "https://en.wikipedia.org/wiki/Bronze_Age",
    "description": "Historical or social overview of Bronze Age.",
    "type": "History / Society"
  },
  {
    "title": "Iron Age",
    "url": "https://en.wikipedia.org/wiki/Iron_Age",
    "description": "Historical or social overview of Iron Age.",
    "type": "History / Society"
  },
  {
    "title": "Silk Road",
    "url": "https://en.wikipedia.org/wiki/Silk_Road",
    "description": "Historical or social overview of Silk Road.",
    "type": "History / Society"
  },
  {
    "title": "Byzantine Empire",
    "url": "https://en.wikipedia.org/wiki/Byzantine_Empire",
    "description": "Historical or social overview of Byzantine Empire.",
    "type": "History / Society"
  },
  {
    "title": "Middle Ages",
    "url": "https://en.wikipedia.org/wiki/Middle_Ages",
    "description": "Historical or social overview of Middle Ages.",
    "type": "History / Society"
  },
  {
    "title": "Viking Age",
    "url": "https://en.wikipedia.org/wiki/Viking_Age",
    "description": "Historical or social overview of Viking Age.",
    "type": "History / Society"
  },
  {
    "title": "Mongol Empire",
    "url": "https://en.wikipedia.org/wiki/Mongol_Empire",
    "description": "Historical or social overview of Mongol Empire.",
    "type": "History / Society"
  },
  {
    "title": "Ottoman Empire",
    "url": "https://en.wikipedia.org/wiki/Ottoman_Empire",
    "description": "Historical or social overview of Ottoman Empire.",
    "type": "History / Society"
  },
  {
    "title": "Mali Empire",
    "url": "https://en.wikipedia.org/wiki/Mali_Empire",
    "description": "Historical or social overview of Mali Empire.",
    "type": "History / Society"
  },
  {
    "title": "Inca Empire",
    "url": "https://en.wikipedia.org/wiki/Inca_Empire",
    "description": "Historical or social overview of Inca Empire.",
    "type": "History / Society"
  },
  {
    "title": "Aztec Empire",
    "url": "https://en.wikipedia.org/wiki/Aztec_Empire",
    "description": "Historical or social overview of Aztec Empire.",
    "type": "History / Society"
  },
  {
    "title": "Maya civilization",
    "url": "https://en.wikipedia.org/wiki/Maya_civilization",
    "description": "Historical or social overview of Maya civilization.",
    "type": "History / Society"
  },
  {
    "title": "Renaissance",
    "url": "https://en.wikipedia.org/wiki/Renaissance",
    "description": "Historical or social overview of Renaissance.",
    "type": "History / Society"
  },
  {
    "title": "Age of Discovery",
    "url": "https://en.wikipedia.org/wiki/Age_of_Discovery",
    "description": "Historical or social overview of Age of Discovery.",
    "type": "History / Society"
  },
  {
    "title": "Reformation",
    "url": "https://en.wikipedia.org/wiki/Reformation",
    "description": "Historical or social overview of Reformation.",
    "type": "History / Society"
  },
  {
    "title": "Scientific Revolution",
    "url": "https://en.wikipedia.org/wiki/Scientific_Revolution",
    "description": "Historical or social overview of Scientific Revolution.",
    "type": "History / Society"
  },
  {
    "title": "Age of Enlightenment",
    "url": "https://en.wikipedia.org/wiki/Age_of_Enlightenment",
    "description": "Historical or social overview of Age of Enlightenment.",
    "type": "History / Society"
  },
  {
    "title": "British Empire",
    "url": "https://en.wikipedia.org/wiki/British_Empire",
    "description": "Historical or social overview of British Empire.",
    "type": "History / Society"
  },
  {
    "title": "Spanish Empire",
    "url": "https://en.wikipedia.org/wiki/Spanish_Empire",
    "description": "Historical or social overview of Spanish Empire.",
    "type": "History / Society"
  },
  {
    "title": "American Revolution",
    "url": "https://en.wikipedia.org/wiki/American_Revolution",
    "description": "Historical or social overview of American Revolution.",
    "type": "History / Society"
  },
  {
    "title": "French Revolution",
    "url": "https://en.wikipedia.org/wiki/French_Revolution",
    "description": "Historical or social overview of French Revolution.",
    "type": "History / Society"
  },
  {
    "title": "Industrial Revolution",
    "url": "https://en.wikipedia.org/wiki/Industrial_Revolution",
    "description": "Historical or social overview of Industrial Revolution.",
    "type": "History / Society"
  },
  {
    "title": "World War I",
    "url": "https://en.wikipedia.org/wiki/World_War_I",
    "description": "Historical or social overview of World War I.",
    "type": "History / Society"
  },
  {
    "title": "World War II",
    "url": "https://en.wikipedia.org/wiki/World_War_II",
    "description": "Historical or social overview of World War II.",
    "type": "History / Society"
  },
  {
    "title": "Cold War",
    "url": "https://en.wikipedia.org/wiki/Cold_War",
    "description": "Historical or social overview of Cold War.",
    "type": "History / Society"
  },
  {
    "title": "Soviet Union",
    "url": "https://en.wikipedia.org/wiki/Soviet_Union",
    "description": "Historical or social overview of Soviet Union.",
    "type": "History / Society"
  },
  {
    "title": "Great Depression",
    "url": "https://en.wikipedia.org/wiki/Great_Depression",
    "description": "Historical or social overview of Great Depression.",
    "type": "History / Society"
  },
  {
    "title": "Decolonization",
    "url": "https://en.wikipedia.org/wiki/Decolonization",
    "description": "Historical or social overview of Decolonization.",
    "type": "History / Society"
  },
  {
    "title": "Information Age",
    "url": "https://en.wikipedia.org/wiki/Information_Age",
    "description": "Historical or social overview of Information Age.",
    "type": "History / Society"
  },
  {
    "title": "Globalization",
    "url": "https://en.wikipedia.org/wiki/Globalization",
    "description": "Historical or social overview of Globalization.",
    "type": "History / Society"
  },
  {
    "title": "History of science",
    "url": "https://en.wikipedia.org/wiki/History_of_science",
    "description": "Historical or social overview of History of science.",
    "type": "History / Society"
  },
  {
    "title": "History of art",
    "url": "https://en.wikipedia.org/wiki/History_of_art",
    "description": "Historical or social overview of History of art.",
    "type": "History / Society"
  },
  {
    "title": "History of medicine",
    "url": "https://en.wikipedia.org/wiki/History_of_medicine",
    "description": "Historical or social overview of History of medicine.",
    "type": "History / Society"
  },
  {
    "title": "History of music",
    "url": "https://en.wikipedia.org/wiki/History_of_music",
    "description": "Overview of History of music and its place in music and popular culture.",
    "type": "Music"
  },
  {
    "title": "History of technology",
    "url": "https://en.wikipedia.org/wiki/History_of_technology",
    "description": "Technology and computing information about History of technology.",
    "type": "Technology"
  },
  {
    "title": "Military history",
    "url": "https://en.wikipedia.org/wiki/Military_history",
    "description": "Historical or social overview of Military history.",
    "type": "History / Society"
  },
  {
    "title": "Civilization",
    "url": "https://en.wikipedia.org/wiki/Civilization",
    "description": "Historical or social overview of Civilization.",
    "type": "History / Society"
  },
  {
    "title": "Government",
    "url": "https://en.wikipedia.org/wiki/Government",
    "description": "Historical or social overview of Government.",
    "type": "History / Society"
  },
  {
    "title": "Politics",
    "url": "https://en.wikipedia.org/wiki/Politics",
    "description": "Historical or social overview of Politics.",
    "type": "History / Society"
  },
  {
    "title": "Democracy",
    "url": "https://en.wikipedia.org/wiki/Democracy",
    "description": "Historical or social overview of Democracy.",
    "type": "History / Society"
  },
  {
    "title": "Republic",
    "url": "https://en.wikipedia.org/wiki/Republic",
    "description": "Historical or social overview of Republic.",
    "type": "History / Society"
  },
  {
    "title": "Monarchy",
    "url": "https://en.wikipedia.org/wiki/Monarchy",
    "description": "Historical or social overview of Monarchy.",
    "type": "History / Society"
  },
  {
    "title": "Constitution",
    "url": "https://en.wikipedia.org/wiki/Constitution",
    "description": "Historical or social overview of Constitution.",
    "type": "History / Society"
  },
  {
    "title": "Human rights",
    "url": "https://en.wikipedia.org/wiki/Human_rights",
    "description": "Historical or social overview of Human rights.",
    "type": "History / Society"
  },
  {
    "title": "Liberty",
    "url": "https://en.wikipedia.org/wiki/Liberty",
    "description": "Historical or social overview of Liberty.",
    "type": "History / Society"
  },
  {
    "title": "Justice",
    "url": "https://en.wikipedia.org/wiki/Justice",
    "description": "Historical or social overview of Justice.",
    "type": "History / Society"
  },
  {
    "title": "Law",
    "url": "https://en.wikipedia.org/wiki/Law",
    "description": "Historical or social overview of Law.",
    "type": "History / Society"
  },
  {
    "title": "Economics",
    "url": "https://en.wikipedia.org/wiki/Economics",
    "description": "Historical or social overview of Economics.",
    "type": "History / Society"
  },
  {
    "title": "Economy",
    "url": "https://en.wikipedia.org/wiki/Economy",
    "description": "Historical or social overview of Economy.",
    "type": "History / Society"
  },
  {
    "title": "Capitalism",
    "url": "https://en.wikipedia.org/wiki/Capitalism",
    "description": "Historical or social overview of Capitalism.",
    "type": "History / Society"
  },
  {
    "title": "Socialism",
    "url": "https://en.wikipedia.org/wiki/Socialism",
    "description": "Historical or social overview of Socialism.",
    "type": "History / Society"
  },
  {
    "title": "Communism",
    "url": "https://en.wikipedia.org/wiki/Communism",
    "description": "Historical or social overview of Communism.",
    "type": "History / Society"
  },
  {
    "title": "International relations",
    "url": "https://en.wikipedia.org/wiki/International_relations",
    "description": "Historical or social overview of International relations.",
    "type": "History / Society"
  },
  {
    "title": "United Nations",
    "url": "https://en.wikipedia.org/wiki/United_Nations",
    "description": "Overview of United Nations, its history, and its activities.",
    "type": "Organization"
  },
  {
    "title": "NATO",
    "url": "https://en.wikipedia.org/wiki/NATO",
    "description": "Overview of NATO, its history, and its activities.",
    "type": "Organization"
  },
  {
    "title": "World Health Organization",
    "url": "https://en.wikipedia.org/wiki/World_Health_Organization",
    "description": "Overview of World Health Organization, its history, and its activities.",
    "type": "Organization"
  },
  {
    "title": "International Monetary Fund",
    "url": "https://en.wikipedia.org/wiki/International_Monetary_Fund",
    "description": "Overview of International Monetary Fund, its history, and its activities.",
    "type": "Organization"
  },
  {
    "title": "World Bank",
    "url": "https://en.wikipedia.org/wiki/World_Bank",
    "description": "Overview of World Bank, its history, and its activities.",
    "type": "Organization"
  },
  {
    "title": "Education",
    "url": "https://en.wikipedia.org/wiki/Education",
    "description": "Historical or social overview of Education.",
    "type": "History / Society"
  },
  {
    "title": "University",
    "url": "https://en.wikipedia.org/wiki/University",
    "description": "Overview of University, its history, and its activities.",
    "type": "Organization"
  },
  {
    "title": "School",
    "url": "https://en.wikipedia.org/wiki/School",
    "description": "Historical or social overview of School.",
    "type": "History / Society"
  },
  {
    "title": "Language",
    "url": "https://en.wikipedia.org/wiki/Language",
    "description": "Historical or social overview of Language.",
    "type": "History / Society"
  },
  {
    "title": "English language",
    "url": "https://en.wikipedia.org/wiki/English_language",
    "description": "Historical or social overview of English language.",
    "type": "History / Society"
  },
  {
    "title": "German language",
    "url": "https://en.wikipedia.org/wiki/German_language",
    "description": "Historical or social overview of German language.",
    "type": "History / Society"
  },
  {
    "title": "French language",
    "url": "https://en.wikipedia.org/wiki/French_language",
    "description": "Historical or social overview of French language.",
    "type": "History / Society"
  },
  {
    "title": "Spanish language",
    "url": "https://en.wikipedia.org/wiki/Spanish_language",
    "description": "Historical or social overview of Spanish language.",
    "type": "History / Society"
  },
  {
    "title": "Portuguese language",
    "url": "https://en.wikipedia.org/wiki/Portuguese_language",
    "description": "Historical or social overview of Portuguese language.",
    "type": "History / Society"
  },
  {
    "title": "Russian language",
    "url": "https://en.wikipedia.org/wiki/Russian_language",
    "description": "Historical or social overview of Russian language.",
    "type": "History / Society"
  },
  {
    "title": "Chinese language",
    "url": "https://en.wikipedia.org/wiki/Chinese_language",
    "description": "Historical or social overview of Chinese language.",
    "type": "History / Society"
  },
  {
    "title": "Japanese language",
    "url": "https://en.wikipedia.org/wiki/Japanese_language",
    "description": "Historical or social overview of Japanese language.",
    "type": "History / Society"
  },
  {
    "title": "Arabic",
    "url": "https://en.wikipedia.org/wiki/Arabic",
    "description": "Historical or social overview of Arabic.",
    "type": "History / Society"
  },
  {
    "title": "Hindi",
    "url": "https://en.wikipedia.org/wiki/Hindi",
    "description": "Historical or social overview of Hindi.",
    "type": "History / Society"
  },
  {
    "title": "Latin",
    "url": "https://en.wikipedia.org/wiki/Latin",
    "description": "Historical or social overview of Latin.",
    "type": "History / Society"
  },
  {
    "title": "Greek language",
    "url": "https://en.wikipedia.org/wiki/Greek_language",
    "description": "Historical or social overview of Greek language.",
    "type": "History / Society"
  },
  {
    "title": "Linguistics",
    "url": "https://en.wikipedia.org/wiki/Linguistics",
    "description": "Historical or social overview of Linguistics.",
    "type": "History / Society"
  },
  {
    "title": "Grammar",
    "url": "https://en.wikipedia.org/wiki/Grammar",
    "description": "Historical or social overview of Grammar.",
    "type": "History / Society"
  },
  {
    "title": "Writing",
    "url": "https://en.wikipedia.org/wiki/Writing",
    "description": "Historical or social overview of Writing.",
    "type": "History / Society"
  },
  {
    "title": "Literacy",
    "url": "https://en.wikipedia.org/wiki/Literacy",
    "description": "Historical or social overview of Literacy.",
    "type": "History / Society"
  },
  {
    "title": "Communication",
    "url": "https://en.wikipedia.org/wiki/Communication",
    "description": "Historical or social overview of Communication.",
    "type": "History / Society"
  },
  {
    "title": "Culture",
    "url": "https://en.wikipedia.org/wiki/Culture",
    "description": "Historical or social overview of Culture.",
    "type": "History / Society"
  },
  {
    "title": "Society",
    "url": "https://en.wikipedia.org/wiki/Society",
    "description": "Historical or social overview of Society.",
    "type": "History / Society"
  },
  {
    "title": "Community",
    "url": "https://en.wikipedia.org/wiki/Community",
    "description": "Historical or social overview of Community.",
    "type": "History / Society"
  },
  {
    "title": "Festival",
    "url": "https://en.wikipedia.org/wiki/Festival",
    "description": "Historical or social overview of Festival.",
    "type": "History / Society"
  },
  {
    "title": "Folklore",
    "url": "https://en.wikipedia.org/wiki/Folklore",
    "description": "Historical or social overview of Folklore.",
    "type": "History / Society"
  },
  {
    "title": "Popular culture",
    "url": "https://en.wikipedia.org/wiki/Popular_culture",
    "description": "Historical or social overview of Popular culture.",
    "type": "History / Society"
  },
  {
    "title": "Religion",
    "url": "https://en.wikipedia.org/wiki/Religion",
    "description": "Historical or social overview of Religion.",
    "type": "History / Society"
  },
  {
    "title": "Christianity",
    "url": "https://en.wikipedia.org/wiki/Christianity",
    "description": "Historical or social overview of Christianity.",
    "type": "History / Society"
  },
  {
    "title": "Catholic Church",
    "url": "https://en.wikipedia.org/wiki/Catholic_Church",
    "description": "Historical or social overview of Catholic Church.",
    "type": "History / Society"
  },
  {
    "title": "Eastern Orthodox Church",
    "url": "https://en.wikipedia.org/wiki/Eastern_Orthodox_Church",
    "description": "Historical or social overview of Eastern Orthodox Church.",
    "type": "History / Society"
  },
  {
    "title": "Protestantism",
    "url": "https://en.wikipedia.org/wiki/Protestantism",
    "description": "Historical or social overview of Protestantism.",
    "type": "History / Society"
  },
  {
    "title": "Islam",
    "url": "https://en.wikipedia.org/wiki/Islam",
    "description": "Historical or social overview of Islam.",
    "type": "History / Society"
  },
  {
    "title": "Sunni Islam",
    "url": "https://en.wikipedia.org/wiki/Sunni_Islam",
    "description": "Historical or social overview of Sunni Islam.",
    "type": "History / Society"
  },
  {
    "title": "Shia Islam",
    "url": "https://en.wikipedia.org/wiki/Shia_Islam",
    "description": "Historical or social overview of Shia Islam.",
    "type": "History / Society"
  },
  {
    "title": "Judaism",
    "url": "https://en.wikipedia.org/wiki/Judaism",
    "description": "Historical or social overview of Judaism.",
    "type": "History / Society"
  },
  {
    "title": "Hinduism",
    "url": "https://en.wikipedia.org/wiki/Hinduism",
    "description": "Historical or social overview of Hinduism.",
    "type": "History / Society"
  },
  {
    "title": "Buddhism",
    "url": "https://en.wikipedia.org/wiki/Buddhism",
    "description": "Historical or social overview of Buddhism.",
    "type": "History / Society"
  },
  {
    "title": "Mahayana",
    "url": "https://en.wikipedia.org/wiki/Mahayana",
    "description": "Historical or social overview of Mahayana.",
    "type": "History / Society"
  },
  {
    "title": "Theravada",
    "url": "https://en.wikipedia.org/wiki/Theravada",
    "description": "Historical or social overview of Theravada.",
    "type": "History / Society"
  },
  {
    "title": "Sikhism",
    "url": "https://en.wikipedia.org/wiki/Sikhism",
    "description": "Historical or social overview of Sikhism.",
    "type": "History / Society"
  },
  {
    "title": "Jainism",
    "url": "https://en.wikipedia.org/wiki/Jainism",
    "description": "Historical or social overview of Jainism.",
    "type": "History / Society"
  },
  {
    "title": "Taoism",
    "url": "https://en.wikipedia.org/wiki/Taoism",
    "description": "Historical or social overview of Taoism.",
    "type": "History / Society"
  },
  {
    "title": "Shinto",
    "url": "https://en.wikipedia.org/wiki/Shinto",
    "description": "Historical or social overview of Shinto.",
    "type": "History / Society"
  },
  {
    "title": "Confucianism",
    "url": "https://en.wikipedia.org/wiki/Confucianism",
    "description": "Historical or social overview of Confucianism.",
    "type": "History / Society"
  },
  {
    "title": "Atheism",
    "url": "https://en.wikipedia.org/wiki/Atheism",
    "description": "Historical or social overview of Atheism.",
    "type": "History / Society"
  },
  {
    "title": "Secularism",
    "url": "https://en.wikipedia.org/wiki/Secularism",
    "description": "Historical or social overview of Secularism.",
    "type": "History / Society"
  },
  {
    "title": "Philosophy",
    "url": "https://en.wikipedia.org/wiki/Philosophy",
    "description": "Historical or social overview of Philosophy.",
    "type": "History / Society"
  },
  {
    "title": "Philosophy of science",
    "url": "https://en.wikipedia.org/wiki/Philosophy_of_science",
    "description": "Historical or social overview of Philosophy of science.",
    "type": "History / Society"
  },
  {
    "title": "Ethics",
    "url": "https://en.wikipedia.org/wiki/Ethics",
    "description": "Historical or social overview of Ethics.",
    "type": "History / Society"
  },
  {
    "title": "Morality",
    "url": "https://en.wikipedia.org/wiki/Morality",
    "description": "Historical or social overview of Morality.",
    "type": "History / Society"
  },
  {
    "title": "Epistemology",
    "url": "https://en.wikipedia.org/wiki/Epistemology",
    "description": "Historical or social overview of Epistemology.",
    "type": "History / Society"
  },
  {
    "title": "Metaphysics",
    "url": "https://en.wikipedia.org/wiki/Metaphysics",
    "description": "Historical or social overview of Metaphysics.",
    "type": "History / Society"
  },
  {
    "title": "Aesthetics",
    "url": "https://en.wikipedia.org/wiki/Aesthetics",
    "description": "Historical or social overview of Aesthetics.",
    "type": "History / Society"
  },
  {
    "title": "Knowledge",
    "url": "https://en.wikipedia.org/wiki/Knowledge",
    "description": "Historical or social overview of Knowledge.",
    "type": "History / Society"
  },
  {
    "title": "Truth",
    "url": "https://en.wikipedia.org/wiki/Truth",
    "description": "Historical or social overview of Truth.",
    "type": "History / Society"
  },
  {
    "title": "Reason",
    "url": "https://en.wikipedia.org/wiki/Reason",
    "description": "Historical or social overview of Reason.",
    "type": "History / Society"
  },
  {
    "title": "Consciousness",
    "url": "https://en.wikipedia.org/wiki/Consciousness",
    "description": "Historical or social overview of Consciousness.",
    "type": "History / Society"
  },
  {
    "title": "Mind",
    "url": "https://en.wikipedia.org/wiki/Mind",
    "description": "Historical or social overview of Mind.",
    "type": "History / Society"
  },
  {
    "title": "Memory",
    "url": "https://en.wikipedia.org/wiki/Memory",
    "description": "Historical or social overview of Memory.",
    "type": "History / Society"
  },
  {
    "title": "Learning",
    "url": "https://en.wikipedia.org/wiki/Learning",
    "description": "Historical or social overview of Learning.",
    "type": "History / Society"
  }
]
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
