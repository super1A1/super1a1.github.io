/* Search engines and AI assistants. Schema: docs/ENGINE.md#site-schema */
MSP.data.addSites('search', [
  { title: 'Google', url: 'https://www.google.com', rank: 100, aliases: 'гугл, гугол', desc: 'The world\'s most used search engine for web pages, images, videos and news.', search: 'https://www.google.com/search?q={q}',
    sub: [{ title: 'Google Images', url: 'https://images.google.com' }, { title: 'Google Shopping', url: 'https://shopping.google.com' }, { title: 'Google Books', url: 'https://books.google.com' }, { title: 'Advanced Search', url: 'https://www.google.com/advanced_search' }] },
  { title: 'Bing', url: 'https://www.bing.com', rank: 85, aliases: 'бинг, microsoft bing', desc: 'Microsoft\'s search engine with image, video and Copilot answers.', search: 'https://www.bing.com/search?q={q}' },
  { title: 'DuckDuckGo', url: 'https://duckduckgo.com', rank: 80, aliases: 'ddg, duck duck go', tags: 'private search, privacy, no tracking', desc: 'Private search engine that does not track or profile you.', search: 'https://duckduckgo.com/?q={q}' },
  { title: 'Yandex', url: 'https://yandex.ru', rank: 85, geo: 'RU', aliases: 'яндекс, ya.ru, я ру', desc: 'Russia\'s largest search engine and web portal.', search: 'https://yandex.ru/search/?text={q}' },
  { title: 'Yandex (International)', url: 'https://yandex.com', rank: 60, aliases: 'yandex com', desc: 'International version of Yandex search, strong for image search.', search: 'https://yandex.com/search/?text={q}' },
  { title: 'Brave Search', url: 'https://search.brave.com', rank: 65, tags: 'private search, independent index', desc: 'Independent, privacy-focused search engine with its own index.', search: 'https://search.brave.com/search?q={q}' },
  { title: 'Startpage', url: 'https://www.startpage.com', rank: 50, tags: 'private search', desc: 'Google results without tracking, based in the Netherlands.', search: 'https://www.startpage.com/do/search?q={q}' },
  { title: 'Ecosia', url: 'https://www.ecosia.org', rank: 55, tags: 'green search, plants trees', desc: 'Search engine that uses its profits to plant trees.', search: 'https://www.ecosia.org/search?q={q}' },
  { title: 'Qwant', url: 'https://www.qwant.com', rank: 45, geo: 'FR', tags: 'private search', desc: 'French privacy-respecting search engine.', search: 'https://www.qwant.com/?q={q}' },
  { title: 'Yahoo', url: 'https://www.yahoo.com', rank: 75, aliases: 'яху', tags: 'portal, mail, news', desc: 'Web portal with search, news, mail and finance.', search: 'https://search.yahoo.com/search?p={q}' },
  { title: 'Baidu', url: 'https://www.baidu.com', rank: 60, geo: 'CN', aliases: 'байду', desc: 'China\'s leading search engine.', search: 'https://www.baidu.com/s?wd={q}' },
  { title: 'Naver', url: 'https://www.naver.com', rank: 50, geo: 'KR', desc: 'South Korea\'s largest search portal.' },
  { title: 'Kagi', url: 'https://kagi.com', rank: 40, tags: 'paid search, ad-free', desc: 'Paid, ad-free search engine with personalization.' },
  { title: 'Mojeek', url: 'https://www.mojeek.com', rank: 30, tags: 'independent index, private search', desc: 'Independent search engine with its own crawler.' }
]);

MSP.data.addSites('ai', [
  { title: 'ChatGPT', url: 'https://chatgpt.com', rank: 95, aliases: 'chat gpt, openai chat, чатгпт, чат гпт', tags: 'ai chat, chatbot', desc: 'OpenAI\'s conversational AI assistant for writing, coding and questions.' },
  { title: 'Claude', url: 'https://claude.ai', rank: 85, aliases: 'anthropic claude, клод', tags: 'ai chat, chatbot, coding', desc: 'Anthropic\'s AI assistant for writing, analysis and coding.' },
  { title: 'Gemini', url: 'https://gemini.google.com', rank: 85, aliases: 'google gemini, bard, джемини', tags: 'ai chat, chatbot', desc: 'Google\'s AI assistant.' },
  { title: 'Microsoft Copilot', url: 'https://copilot.microsoft.com', rank: 75, aliases: 'copilot, bing chat, копилот', tags: 'ai chat, chatbot', desc: 'Microsoft\'s AI assistant with web search.' },
  { title: 'Perplexity', url: 'https://www.perplexity.ai', rank: 70, tags: 'ai search, answer engine', desc: 'AI answer engine that cites its web sources.' },
  { title: 'DeepSeek', url: 'https://chat.deepseek.com', rank: 70, aliases: 'дипсик', tags: 'ai chat, chatbot', desc: 'AI chat assistant by DeepSeek.' },
  { title: 'Grok', url: 'https://grok.com', rank: 60, aliases: 'xai', tags: 'ai chat, chatbot', desc: 'xAI\'s chatbot.' },
  { title: 'Le Chat (Mistral)', url: 'https://chat.mistral.ai', rank: 50, aliases: 'mistral, le chat', tags: 'ai chat, chatbot', desc: 'Mistral AI\'s European AI assistant.' },
  { title: 'Hugging Face', url: 'https://huggingface.co', rank: 70, aliases: 'huggingface, hf', tags: 'models, datasets, machine learning', desc: 'Hub for open machine-learning models, datasets and demos.', search: 'https://huggingface.co/search/full-text?q={q}' },
  { title: 'Midjourney', url: 'https://www.midjourney.com', rank: 55, tags: 'image generation, ai art', desc: 'AI image generator.' },
  { title: 'GigaChat', url: 'https://giga.chat', rank: 45, geo: 'RU', aliases: 'гигачат, сбер ии', tags: 'ai chat, нейросеть', desc: 'Sber\'s Russian-language AI assistant.' },
  { title: 'Alice (Yandex)', url: 'https://alice.yandex.ru', rank: 50, geo: 'RU', aliases: 'алиса, yandexgpt, яндекс gpt, алиса яндекс', tags: 'ai chat, нейросеть', desc: 'Yandex\'s AI assistant Alice.' },
  { title: 'Character.AI', url: 'https://character.ai', rank: 50, aliases: 'character ai, c ai', tags: 'ai chat, characters', desc: 'Chat with AI characters.' },
  { title: 'Poe', url: 'https://poe.com', rank: 40, tags: 'ai chat, many models', desc: 'Chat with many AI models in one place.' },
  { title: 'OpenAI Platform', url: 'https://platform.openai.com', rank: 50, aliases: 'openai api', tags: 'api, developers, docs', desc: 'OpenAI API keys, docs and playground.' },
  { title: 'Claude Console', url: 'https://console.anthropic.com', rank: 45, aliases: 'anthropic console, anthropic api, claude api', tags: 'api, developers, docs', desc: 'Anthropic API keys, workbench and usage.' }
]);
