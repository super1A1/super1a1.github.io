/* Social networks, communities, messaging and email. */
MSP.data.addSites('social', [
  { title: 'Facebook', url: 'https://www.facebook.com', rank: 95, aliases: 'fb, фейсбук, фб', desc: 'Social network to connect with friends, groups and pages.',
    sub: [{ title: 'Facebook Marketplace', url: 'https://www.facebook.com/marketplace' }, { title: 'Groups', url: 'https://www.facebook.com/groups' }] },
  { title: 'Instagram', url: 'https://www.instagram.com', rank: 95, aliases: 'insta, ig, инстаграм, инста', tags: 'photos, reels', desc: 'Photo and short-video sharing network.' },
  { title: 'X (Twitter)', url: 'https://x.com', rank: 90, aliases: 'twitter, твиттер, икс', tags: 'microblogging', desc: 'Short posts, news and real-time conversation.', search: 'https://x.com/search?q={q}' },
  { title: 'TikTok', url: 'https://www.tiktok.com', rank: 92, aliases: 'тикток, tik tok', tags: 'short videos', desc: 'Short-form video platform.', search: 'https://www.tiktok.com/search?q={q}' },
  { title: 'LinkedIn', url: 'https://www.linkedin.com', rank: 85, aliases: 'линкедин', tags: 'professional network, jobs, careers', desc: 'Professional network for careers, jobs and business.',
    sub: [{ title: 'LinkedIn Jobs', url: 'https://www.linkedin.com/jobs/' }, { title: 'LinkedIn Learning', url: 'https://www.linkedin.com/learning/' }] },
  { title: 'Reddit', url: 'https://www.reddit.com', rank: 92, aliases: 'реддит', tags: 'forum, communities, discussion', desc: 'Communities and discussions on every topic.', search: 'https://www.reddit.com/search/?q={q}' },
  { title: 'Pinterest', url: 'https://www.pinterest.com', rank: 75, aliases: 'пинтерест', tags: 'ideas, inspiration, images', desc: 'Visual discovery of ideas, recipes, decor and style.', search: 'https://www.pinterest.com/search/pins/?q={q}' },
  { title: 'Threads', url: 'https://www.threads.com', rank: 60, aliases: 'тредс', desc: 'Meta\'s text-based conversation app.' },
  { title: 'Bluesky', url: 'https://bsky.app', rank: 60, aliases: 'bsky', desc: 'Decentralized microblogging network.' },
  { title: 'Mastodon', url: 'https://joinmastodon.org', rank: 45, tags: 'fediverse, decentralized', desc: 'Decentralized, open-source social network.' },
  { title: 'Snapchat', url: 'https://www.snapchat.com', rank: 65, aliases: 'snap, снапчат', desc: 'Messaging with disappearing photos and stories.' },
  { title: 'Tumblr', url: 'https://www.tumblr.com', rank: 50, tags: 'blog', desc: 'Microblogging and fandom community.' },
  { title: 'Quora', url: 'https://www.quora.com', rank: 60, tags: 'q&a, questions', desc: 'Questions and answers from people with knowledge.' },
  { title: 'Medium', url: 'https://medium.com', rank: 60, tags: 'blog, articles', desc: 'Articles and blogs from writers and experts.' },
  { title: 'Substack', url: 'https://substack.com', rank: 50, tags: 'newsletters, blog', desc: 'Independent newsletters and writers.' },
  { title: 'WordPress.com', url: 'https://wordpress.com', rank: 50, aliases: 'wordpress', tags: 'blog, website builder', desc: 'Create a blog or website.' },
  { title: 'Flickr', url: 'https://www.flickr.com', rank: 45, tags: 'photos, photography', desc: 'Photo sharing community.' },
  { title: 'DeviantArt', url: 'https://www.deviantart.com', rank: 45, tags: 'art, illustration', desc: 'Online art gallery and community.' },
  { title: 'Nextdoor', url: 'https://nextdoor.com', rank: 40, geo: 'US', tags: 'neighborhood, local', desc: 'Neighborhood network for local news and recommendations.' },
  { title: 'Weibo', url: 'https://weibo.com', rank: 45, geo: 'CN', aliases: 'вейбо', desc: 'Chinese microblogging platform.' },
  { title: 'VK', url: 'https://vk.com', rank: 88, geo: 'RU', aliases: 'вконтакте, вк, vkontakte', desc: 'Largest Russian social network with music, video and groups.', search: 'https://vk.com/search?c%5Bq%5D={q}' },
  { title: 'Odnoklassniki', url: 'https://ok.ru', rank: 70, geo: 'RU', aliases: 'одноклассники, ок, ok', desc: 'Russian social network to find classmates and friends.' },
  { title: 'Dzen', url: 'https://dzen.ru', rank: 60, geo: 'RU', aliases: 'дзен, яндекс дзен, zen', tags: 'blog, articles', desc: 'Russian blogging platform and feed of articles and videos.' },
  { title: 'Pikabu', url: 'https://pikabu.ru', rank: 55, geo: 'RU', aliases: 'пикабу', tags: 'forum, humor, community', desc: 'Russian community of stories, humor and discussions.' },
  { title: 'LiveJournal', url: 'https://www.livejournal.com', rank: 35, geo: 'RU', aliases: 'жж, живой журнал, lj', tags: 'blog', desc: 'Blogging platform popular in Russia.' },
  { title: 'Ekşi Sözlük', url: 'https://eksisozluk.com', rank: 60, geo: 'TR', aliases: 'eksi sozluk, ekşi, eksi', tags: 'forum, community', desc: 'Popular Turkish collaborative community of entries on every topic.' },
  { title: 'Technopat', url: 'https://www.technopat.net', rank: 40, geo: 'TR', tags: 'forum, technology, hardware', desc: 'Turkish technology forum and news.' },
  { title: 'Stack Exchange', url: 'https://stackexchange.com', rank: 50, tags: 'q&a, questions', desc: 'Network of Q&A sites on many topics.' }
]);

MSP.data.addSites('messaging', [
  { title: 'WhatsApp Web', url: 'https://web.whatsapp.com', rank: 92, aliases: 'whatsapp, вотсап, ватсап, вацап, wa', tags: 'messenger, calls', desc: 'Chat and call with WhatsApp from the browser.' },
  { title: 'Telegram Web', url: 'https://web.telegram.org', rank: 88, aliases: 'telegram, телеграм, телеграмм, tg, тг', tags: 'messenger, channels', desc: 'Fast messenger with channels, groups and bots.' },
  { title: 'Discord', url: 'https://discord.com', rank: 85, aliases: 'дискорд', tags: 'voice chat, servers, community', desc: 'Voice, video and text chat for communities and gaming.' },
  { title: 'Messenger', url: 'https://www.messenger.com', rank: 70, aliases: 'facebook messenger', desc: 'Facebook\'s messaging app on the web.' },
  { title: 'Signal', url: 'https://signal.org', rank: 55, tags: 'encrypted, private messenger, privacy', desc: 'End-to-end encrypted private messenger.' },
  { title: 'Slack', url: 'https://slack.com', rank: 75, aliases: 'слак', tags: 'team chat, work', desc: 'Team communication and collaboration.' },
  { title: 'Microsoft Teams', url: 'https://teams.microsoft.com', rank: 75, aliases: 'teams, тимс', tags: 'meetings, team chat, video calls', desc: 'Meetings, chat and calls for work and school.' },
  { title: 'Zoom', url: 'https://zoom.us', rank: 80, aliases: 'зум', tags: 'video calls, meetings, conference', desc: 'Video meetings, webinars and calls.' },
  { title: 'Google Meet', url: 'https://meet.google.com', rank: 75, aliases: 'meet', tags: 'video calls, meetings', desc: 'Video meetings from Google.' },
  { title: 'Viber', url: 'https://www.viber.com', rank: 50, aliases: 'вайбер', tags: 'messenger, calls', desc: 'Messaging and calling app.' },
  { title: 'WeChat', url: 'https://www.wechat.com', rank: 45, geo: 'CN', aliases: 'вичат', tags: 'messenger', desc: 'Chinese messaging and payments super-app.' },
  { title: 'Jitsi Meet', url: 'https://meet.jit.si', rank: 35, aliases: 'jitsi', tags: 'video calls, free, open source', desc: 'Free open-source video meetings, no account needed.' },
  { title: 'Element', url: 'https://element.io', rank: 30, aliases: 'matrix', tags: 'encrypted, messenger', desc: 'Secure messenger on the Matrix network.' },
  { title: 'TalkON', url: 'https://super1a1.github.io/chat', rank: 40, aliases: 'talk on', tags: 'messenger, chat', desc: 'TalkON chat on this site.' }
]);

MSP.data.addSites('email', [
  { title: 'Gmail', url: 'https://mail.google.com', rank: 95, aliases: 'гмейл, джимейл, google mail, gmail login', desc: 'Google\'s email service.' },
  { title: 'Outlook', url: 'https://outlook.live.com', rank: 85, aliases: 'hotmail, outlook.com, live mail, аутлук', desc: 'Microsoft email, calendar and contacts.' },
  { title: 'Proton Mail', url: 'https://mail.proton.me', rank: 60, aliases: 'protonmail, proton', tags: 'encrypted email, privacy', desc: 'Encrypted email based in Switzerland.' },
  { title: 'Yahoo Mail', url: 'https://mail.yahoo.com', rank: 60, desc: 'Email from Yahoo.' },
  { title: 'iCloud Mail', url: 'https://www.icloud.com/mail', rank: 55, aliases: 'icloud mail, apple mail', desc: 'Apple\'s email on the web.' },
  { title: 'Yandex Mail', url: 'https://mail.yandex.ru', rank: 70, geo: 'RU', aliases: 'яндекс почта, yandex почта', desc: 'Email from Yandex.' },
  { title: 'Mail.ru', url: 'https://mail.ru', rank: 70, geo: 'RU', aliases: 'мейл ру, мэйл ру, mailru, майл', tags: 'portal, news', desc: 'Russian email service and web portal.' },
  { title: 'Tuta', url: 'https://tuta.com', rank: 35, aliases: 'tutanota', tags: 'encrypted email, privacy', desc: 'Encrypted email from Germany.' },
  { title: 'GMX', url: 'https://www.gmx.net', rank: 45, geo: 'DE AT CH', desc: 'Free email and cloud storage popular in Germany.' },
  { title: 'WEB.DE', url: 'https://web.de', rank: 50, geo: 'DE', aliases: 'webde, web de', tags: 'portal', desc: 'German email service and web portal.' },
  { title: 'Zoho Mail', url: 'https://www.zoho.com/mail/', rank: 35, tags: 'business email', desc: 'Business email hosting.' }
]);
