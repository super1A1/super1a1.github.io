/*
 * Concepts: language-independent meanings. A query word that matches any phrase below
 * becomes the concept, so "купить авто", "araba satın al" and "buy car" all mean
 * {buy, car}. Sites receive concepts from their category and from their `tags`.
 *
 * intent: true  -> transactional / navigational need (shop, news, weather…). Wikipedia is
 *                  ranked low for these and no knowledge panel is shown.
 * Phrases are comma separated; diacritics and case do not matter.
 */
MSP.data.addConcepts([
  { id: 'search', intent: true, words: {
    en: 'search engine, search engines, web search', ru: 'поисковик, поисковая система, поисковики',
    tr: 'arama motoru', de: 'suchmaschine, suchmaschinen' } },
  { id: 'ai', intent: true, words: {
    en: 'ai, artificial intelligence, chatbot, chat bot, ai chat, ai assistant, llm, gpt', ru: 'ии, нейросеть, нейросети, искусственный интеллект, чат бот',
    tr: 'yapay zeka', de: 'ki, künstliche intelligenz' } },
  { id: 'social', intent: true, words: {
    en: 'social network, social networks, social media, social', ru: 'соцсеть, соцсети, социальная сеть, социальные сети',
    tr: 'sosyal medya, sosyal ağ', de: 'soziale netzwerke, soziales netzwerk' } },
  { id: 'forum', intent: false, words: {
    en: 'forum, forums, community, communities, discussion, q&a', ru: 'форум, форумы, сообщество',
    tr: 'forum, topluluk', de: 'forum, foren' } },
  { id: 'chat', intent: true, words: {
    en: 'messenger, messengers, messaging, chat, video call, video calls, video chat', ru: 'мессенджер, мессенджеры, чат, видеозвонок, видеозвонки',
    tr: 'mesajlaşma, sohbet, görüntülü arama', de: 'videoanruf, videokonferenz' } },
  { id: 'email', intent: true, words: {
    en: 'email, e-mail, mail, inbox, mailbox, webmail', ru: 'почта, электронная почта, имейл, емейл, почтовый ящик',
    tr: 'e-posta, eposta', de: 'postfach' } },
  { id: 'video', intent: true, words: {
    en: 'video, videos, watch, clips, vlog', ru: 'видео, ролики, ролик, смотреть видео, видеоролики',
    tr: 'videolar, izle', de: 'videos' } },
  { id: 'movies', intent: true, words: {
    en: 'movies, movie, films, film, cinema, watch movies, watch online', ru: 'фильмы, фильм, кино, кинотеатр, смотреть фильмы, смотреть онлайн',
    tr: 'filmler, sinema, film izle', de: 'filme, kino' } },
  { id: 'tv', intent: true, words: {
    en: 'tv, tv shows, series, tv series, shows, live tv', ru: 'сериалы, сериал, тв, телевидение, телеканалы',
    tr: 'dizi, diziler, dizi izle, canlı tv', de: 'serien, fernsehen' } },
  { id: 'streaming', intent: true, words: {
    en: 'streaming, streaming service, streaming services', ru: 'стриминг, онлайн кинотеатр, онлайн кинотеатры',
    tr: 'dijital platform', de: 'streamingdienst, streamingdienste' } },
  { id: 'music', intent: true, words: {
    en: 'music, songs, song, playlist, playlists, albums, mp3', ru: 'музыка, песни, песня, слушать музыку',
    tr: 'müzik, şarkı, şarkılar, müzik dinle', de: 'musik, lieder' } },
  { id: 'podcast', intent: true, words: { en: 'podcast, podcasts', ru: 'подкаст, подкасты' } },
  { id: 'lyrics', intent: true, words: {
    en: 'lyrics, song lyrics', ru: 'текст песни, тексты песен', tr: 'şarkı sözleri', de: 'songtext, liedtext' } },
  { id: 'radio', intent: true, words: {
    en: 'radio, online radio, radio stations', ru: 'радио, радиостанции', tr: 'radyo' } },
  { id: 'news', intent: true, words: {
    en: 'news, headlines, breaking news, latest news, newspaper, newspapers', ru: 'новости, новость, последние новости, газета, газеты, сми',
    tr: 'haber, haberler, son dakika, gazete, gazeteler, güncel haberler', de: 'nachrichten, zeitung, zeitungen, schlagzeilen',
    fr: 'actualités, journal', es: 'noticias, periódico' } },
  { id: 'buy', intent: true, words: {
    en: 'buy, shop, shopping, store, online shop, online store, order, purchase, for sale, deals',
    ru: 'купить, куплю, магазин, магазины, интернет магазин, заказать, покупка, цена, цены',
    tr: 'satın al, alışveriş, mağaza, sipariş, fiyat, fiyatları, satılık',
    de: 'kaufen, einkaufen, bestellen, onlineshop, zu verkaufen', fr: 'acheter, boutique', es: 'comprar, tienda' } },
  { id: 'sell', intent: true, words: {
    en: 'sell, selling', ru: 'продать, продам, продажа', tr: 'satmak, satış', de: 'verkaufen' } },
  { id: 'classifieds', intent: true, words: {
    en: 'classifieds, classified ads, listings, marketplace, flea market', ru: 'объявления, объявление, барахолка, доска объявлений',
    tr: 'ilan, ilanlar, ilanları, ikinci el ilan', de: 'kleinanzeigen, anzeigen, flohmarkt, marktplatz' } },
  { id: 'used', intent: true, words: {
    en: 'used, second hand, secondhand, pre-owned, refurbished', ru: 'б/у, бу, подержанный, подержанные, с пробегом',
    tr: 'ikinci el', de: 'gebraucht, gebrauchte, gebrauchtes' } },
  { id: 'car', intent: true, words: {
    en: 'car, cars, auto, autos, automobile, vehicle, vehicles, used cars, new cars, suv',
    ru: 'авто, автомобиль, автомобили, машина, машины, машину, тачка, автомобиль с пробегом',
    tr: 'araba, arabalar, otomobil, araç, oto, vasıta, ikinci el araba', de: 'wagen, pkw, gebrauchtwagen, neuwagen, fahrzeug',
    fr: 'voiture, voitures', es: 'coche, coches' } },
  { id: 'carrental', intent: true, words: {
    en: 'rent a car, car rental, car hire, rental car', ru: 'аренда авто, прокат авто, аренда машины, прокат автомобилей',
    tr: 'araç kiralama, araba kiralama', de: 'mietwagen, autovermietung, auto mieten' } },
  { id: 'realestate', intent: true, words: {
    en: 'real estate, property, properties, house, houses, homes, apartment, apartments, flat, flats, condo, housing',
    ru: 'недвижимость, квартира, квартиры, квартиру, дом, дома, жилье, новостройки',
    tr: 'emlak, daire, konut, satılık daire, kiralık daire, ev ilanları',
    de: 'immobilien, wohnung, wohnungen, haus, häuser, eigentumswohnung', fr: 'immobilier, appartement', es: 'pisos, inmobiliaria' } },
  { id: 'rent', intent: true, words: {
    en: 'rent, rental, rentals, for rent, to rent, lease, renting', ru: 'аренда, снять, сдать, сдам, сниму, посуточно',
    tr: 'kiralık, kira, kiralama', de: 'mieten, miete, vermieten, mietwohnung, zur miete', fr: 'louer', es: 'alquiler, alquilar' } },
  { id: 'jobs', intent: true, words: {
    en: 'jobs, job, vacancies, vacancy, careers, career, hiring, employment, job search, remote jobs, resume, cv',
    ru: 'работа, вакансии, вакансия, работу, поиск работы, резюме, трудоустройство',
    tr: 'iş ilanları, iş ilanı, iş arama, kariyer, eleman, işe alım',
    de: 'stellenangebote, stellenanzeigen, stellen, arbeit, jobsuche, karriere', fr: 'emploi', es: 'empleo, trabajo' } },
  { id: 'freelance', intent: true, words: {
    en: 'freelance, freelancer, freelancers, gigs', ru: 'фриланс, фрилансер, удаленная работа', tr: 'serbest çalışma', de: 'freiberuflich' } },
  { id: 'travel', intent: true, words: {
    en: 'travel, trip, trips, vacation, holiday, holidays, tours, tour, tourism', ru: 'путешествия, путешествие, туры, тур, отдых, туризм, поездка',
    tr: 'seyahat, tatil, tur, turlar, gezi', de: 'reisen, reise, urlaub, pauschalreise', fr: 'voyage', es: 'viajes' } },
  { id: 'flights', intent: true, words: {
    en: 'flights, flight, airline, airlines, plane tickets, air tickets, airfare', ru: 'авиабилеты, авиабилет, билеты на самолет, самолет, рейсы, авиакомпания',
    tr: 'uçak bileti, uçak, uçuş, havayolu', de: 'flug, flüge, flugtickets, fluggesellschaft', fr: 'vols', es: 'vuelos' } },
  { id: 'hotels', intent: true, words: {
    en: 'hotel, hotels, hostel, hostels, accommodation, resort, resorts', ru: 'отель, отели, гостиница, гостиницы, хостел',
    tr: 'otel, oteller, konaklama, pansiyon', de: 'unterkunft, ferienwohnung', es: 'hoteles' } },
  { id: 'trains', intent: true, words: {
    en: 'train, trains, train tickets, railway, rail', ru: 'поезд, поезда, жд билеты, электричка, электрички',
    tr: 'tren, tren bileti, yht', de: 'zug, züge, bahn, zugtickets, bahntickets' } },
  { id: 'bus', intent: true, words: {
    en: 'bus, buses, bus tickets, coach', ru: 'автобус, автобусы, билеты на автобус', tr: 'otobüs, otobüs bileti', de: 'fernbus' } },
  { id: 'taxi', intent: true, words: { en: 'taxi, cab, rideshare, ride sharing', ru: 'такси', tr: 'taksi' } },
  { id: 'maps', intent: true, words: {
    en: 'map, maps, directions, navigation, route, gps, satellite map', ru: 'карта, карты, маршрут, навигатор, схема проезда',
    tr: 'harita, haritalar, yol tarifi, navigasyon', de: 'landkarte, stadtplan, routenplaner' } },
  { id: 'transport', intent: true, words: {
    en: 'public transport, transit, subway, metro, underground, tram, timetable', ru: 'общественный транспорт, метро, расписание, транспорт',
    tr: 'toplu taşıma, metro, metrobüs', de: 'öpnv, nahverkehr, u-bahn, s-bahn, fahrplan' } },
  { id: 'food', intent: true, words: {
    en: 'food, food delivery, restaurant, restaurants, takeaway, takeout, order food, pizza, sushi, burger',
    ru: 'еда, доставка еды, рестораны, ресторан, кафе, пицца, суши, роллы',
    tr: 'yemek, yemek siparişi, restoran, restoranlar, pizza, döner', de: 'essen, essen bestellen, lieferdienst, restaurant, restaurants' } },
  { id: 'groceries', intent: true, words: {
    en: 'groceries, grocery, supermarket, grocery delivery', ru: 'продукты, доставка продуктов, супермаркет',
    tr: 'market, süpermarket', de: 'lebensmittel, supermarkt' } },
  { id: 'recipes', intent: true, words: {
    en: 'recipes, recipe, cooking, how to cook', ru: 'рецепты, рецепт, как приготовить, кулинария',
    tr: 'tarif, tarifler, yemek tarifi, yemek tarifleri', de: 'rezepte, rezept, kochen' } },
  { id: 'finance', intent: true, words: {
    en: 'finance, money, investing, invest, investment, personal finance', ru: 'финансы, деньги, инвестиции',
    tr: 'finans, para, yatırım', de: 'finanzen, geld, investieren' } },
  { id: 'bank', intent: true, words: {
    en: 'bank, banks, banking, online banking, credit card, credit cards, loan, loans, mortgage',
    ru: 'банк, банки, кредит, ипотека, онлайн банк', tr: 'banka, bankalar, kredi, internet bankacılığı, kredi kartı',
    de: 'banken, online banking, kredit, girokonto' } },
  { id: 'stocks', intent: true, words: {
    en: 'stocks, stock, stock market, shares, trading, quotes, stock price, forex, broker', ru: 'акции, биржа, котировки, трейдинг, брокер',
    tr: 'borsa, hisse, hisseler, hisse senedi', de: 'aktien, börse, aktienkurs' } },
  { id: 'currency', intent: true, words: {
    en: 'exchange rate, exchange rates, currency, currency converter, dollar rate, euro rate',
    ru: 'курс валют, курс доллара, курс евро, валюта, конвертер валют', tr: 'döviz, döviz kuru, dolar kuru, euro kuru, altın fiyatları',
    de: 'wechselkurs, währungsrechner' } },
  { id: 'payment', intent: true, words: {
    en: 'payments, payment, send money, money transfer, transfer money, wallet', ru: 'перевод денег, денежный перевод, оплата, платежи',
    tr: 'ödeme, para transferi, para gönder', de: 'zahlung, überweisung, geld senden' } },
  { id: 'crypto', intent: true, words: {
    en: 'crypto, cryptocurrency, cryptocurrencies, bitcoin, btc, ethereum, blockchain, crypto exchange',
    ru: 'криптовалюта, криптовалюты, крипта, биткоин, биткойн', tr: 'kripto, kripto para', de: 'krypto, kryptowährung' } },
  { id: 'code', intent: false, words: {
    en: 'programming, coding, code, developer, developers, software development, source code, programmer',
    ru: 'программирование, программист, разработка, разработчик, код, исходный код', tr: 'programlama, yazılım, kodlama, yazılımcı',
    de: 'programmieren, programmierung, entwickler, softwareentwicklung' } },
  { id: 'documentation', intent: false, words: {
    en: 'documentation, docs, api docs, api reference, manual', ru: 'документация, справочник', tr: 'dokümantasyon', de: 'dokumentation' } },
  { id: 'cloud', intent: true, words: {
    en: 'cloud, hosting, web hosting, vps, server, servers, cloud computing, deploy, cdn, domain, domains', ru: 'хостинг, облако, сервер, домен',
    tr: 'sunucu, bulut', de: 'webhosting' } },
  { id: 'productivity', intent: true, words: {
    en: 'productivity, notes, note taking, todo, to-do, tasks, calendar, documents, spreadsheet, spreadsheets, office, cloud storage',
    ru: 'заметки, задачи, календарь, документы, таблицы, облачное хранилище', tr: 'notlar, görevler, takvim, belgeler',
    de: 'notizen, aufgaben, kalender, dokumente, tabellen' } },
  { id: 'tools', intent: true, words: {
    en: 'tools, tool, utility, utilities, converter, generator, calculator, online tools, software', ru: 'инструменты, конвертер, калькулятор, программы',
    tr: 'araçlar, dönüştürücü, hesap makinesi', de: 'werkzeuge, rechner, konverter' } },
  { id: 'translate', intent: true, words: {
    en: 'translate, translator, translation, translations', ru: 'переводчик, перевод, перевести, переводить',
    tr: 'çeviri, çevirmen, tercüme', de: 'übersetzer, übersetzen, übersetzung', fr: 'traduction, traducteur', es: 'traductor' } },
  { id: 'browser', intent: true, words: { en: 'browser, web browser, browsers', ru: 'браузер, браузеры', tr: 'tarayıcı' } },
  { id: 'design', intent: true, words: {
    en: 'design, graphic design, ui design, logo, logos, illustration, mockup, prototype', ru: 'дизайн, логотип', tr: 'tasarım', de: 'grafikdesign' } },
  { id: 'photos', intent: true, words: {
    en: 'photos, photo, images, image, pictures, stock photos, wallpaper, wallpapers', ru: 'фото, фотографии, картинки, обои, изображения',
    tr: 'fotoğraf, fotoğraflar, resim, resimler, duvar kağıdı', de: 'fotos, bilder, bild' } },
  { id: 'learn', intent: false, words: {
    en: 'learn, learning, course, courses, tutorial, tutorials, lessons, lesson, online courses, study, education',
    ru: 'обучение, курсы, курс, уроки, урок, учеба, образование, учить', tr: 'eğitim, kurs, kurslar, ders, dersler, öğren',
    de: 'lernen, kurse, bildung, nachhilfe' } },
  { id: 'research', intent: false, words: {
    en: 'research, papers, scientific papers, academic, science', ru: 'научные статьи, исследования, наука',
    tr: 'akademik, makale, makaleler, bilimsel', de: 'forschung, wissenschaft' } },
  { id: 'reference', intent: false, words: {
    en: 'encyclopedia, wiki, facts', ru: 'энциклопедия, вики', tr: 'ansiklopedi, viki', de: 'enzyklopädie, lexikon' } },
  { id: 'dictionary', intent: false, words: {
    en: 'dictionary, dictionaries, definition, meaning, synonyms, thesaurus, spelling', ru: 'словарь, словари, значение слова, синонимы, орфография',
    tr: 'sözlük, eş anlamlı', de: 'wörterbuch, bedeutung, synonym, synonyme, rechtschreibung' } },
  { id: 'books', intent: true, words: {
    en: 'books, book, ebooks, ebook, audiobooks, audiobook, novels, library', ru: 'книги, книга, электронные книги, аудиокниги, библиотека',
    tr: 'kitap, kitaplar, sesli kitap', de: 'bücher, buch, hörbücher' } },
  { id: 'reviews', intent: true, words: {
    en: 'reviews, review, ratings, rating', ru: 'отзывы, отзыв, рейтинг, обзор, обзоры', tr: 'yorumlar, değerlendirme, inceleme',
    de: 'bewertungen, rezensionen' } },
  { id: 'anime', intent: true, words: { en: 'anime, manga', ru: 'аниме, манга' } },
  { id: 'games', intent: true, words: {
    en: 'games, game, gaming, video games, play games, pc games, online games', ru: 'игры, игра, игры онлайн, компьютерные игры',
    tr: 'oyun, oyunlar, oyna', de: 'spiele, spiel' } },
  { id: 'sports', intent: true, words: {
    en: 'sports, sport, football, soccer, scores, live scores, basketball, hockey, tennis, matches',
    ru: 'спорт, футбол, хоккей, баскетбол, теннис, результаты матчей', tr: 'spor, futbol, maç, maçlar, canlı skor, basketbol, süper lig',
    de: 'fußball, ergebnisse, bundesliga, eishockey' } },
  { id: 'weather', intent: true, words: {
    en: 'weather, forecast, weather forecast, temperature, rain, radar', ru: 'погода, прогноз погоды, прогноз',
    tr: 'hava, hava durumu, hava tahmini', de: 'wetter, wettervorhersage, regenradar', fr: 'météo', es: 'clima' } },
  { id: 'health', intent: false, words: {
    en: 'health, medical, medicine, doctor, doctors, symptoms, hospital, pharmacy, drugs', ru: 'здоровье, врач, врачи, симптомы, больница, аптека, лекарства, медицина',
    tr: 'sağlık, doktor, hastane, eczane, ilaç, randevu', de: 'gesundheit, arzt, ärzte, krankenhaus, apotheke, symptome, medikamente' } },
  { id: 'fitness', intent: false, words: {
    en: 'fitness, workout, running, gym, exercise', ru: 'фитнес, тренировки, бег, спортзал', tr: 'spor salonu, egzersiz, koşu', de: 'laufen' } },
  { id: 'government', intent: true, words: {
    en: 'government, government services, public services, city services, visa, passport, taxes, tax, residence permit',
    ru: 'госуслуги, правительство, паспорт, виза, налоги, налог, мэрия', tr: 'devlet, e-devlet, vergi, pasaport, vize, ikamet, belediye',
    de: 'regierung, behörde, bürgeramt, visum, reisepass, steuern, steuererklärung, aufenthaltstitel' } },
  { id: 'security', intent: true, words: {
    en: 'security, antivirus, vpn, password manager, passwords, privacy, malware', ru: 'безопасность, антивирус, впн, пароли',
    tr: 'güvenlik, antivirüs, şifre', de: 'sicherheit, passwort' } },
  { id: 'parcel', intent: true, words: {
    en: 'parcel, package, package tracking, track package, tracking, shipping, courier, post office, postal',
    ru: 'посылка, посылки, отслеживание, трек номер, почта, курьер, доставка посылок', tr: 'kargo, kargo takip, gönderi takip, kurye',
    de: 'paket, sendungsverfolgung, paketverfolgung, post, versand' } },
  { id: 'electronics', intent: true, words: {
    en: 'electronics, laptop, laptops, smartphone, smartphones, phone, phones, headphones, computer, pc parts, gpu',
    ru: 'электроника, ноутбук, ноутбуки, смартфон, смартфоны, телефон, телефоны, наушники, компьютер',
    tr: 'elektronik, telefon, cep telefonu, bilgisayar, kulaklık', de: 'elektronik, handy, fernseher, kopfhörer' } },
  { id: 'fashion', intent: true, words: {
    en: 'fashion, clothes, clothing, shoes, sneakers, dresses', ru: 'одежда, обувь, мода, кроссовки', tr: 'giyim, moda, ayakkabı, elbise',
    de: 'mode, kleidung, schuhe' } },
  { id: 'furniture', intent: true, words: { en: 'furniture, home decor', ru: 'мебель', tr: 'mobilya', de: 'möbel' } },
  { id: 'prices', intent: true, words: {
    en: 'price comparison, compare prices', ru: 'сравнение цен', tr: 'fiyat karşılaştırma', de: 'preisvergleich' } },
  { id: 'tickets', intent: true, words: {
    en: 'tickets, ticket, events, concerts, concert, showtimes, theater, theatre', ru: 'билеты, концерты, афиша, театр, мероприятия',
    tr: 'bilet, biletler, konser, etkinlik, tiyatro', de: 'konzert, konzerte, veranstaltungen' } }
]);
