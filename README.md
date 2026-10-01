# MSP

Personal start page and search engine on GitHub Pages: https://super1a1.github.io

- `index.html` start page with your own links
- `search.html` search results (engine in `engine/`, site database in `data/`)
- `chat.html` TalkON chat
- `settings.html` theme and avatar

## Search engine

Client-side engine over ~1,100 curated sites with live Wikipedia results:

- Multilingual (en/ru/tr/de) intents and places: "NY news", "buy auto Berlin", "купить машину москва", "kiralık daire istanbul".
- Wrong-keyboard-layout and typo fixes.
- Sitelinks and "Search X on Site" deep links.
- Optional YouTube and TalkON backends.

Details, ranking and the backend contract: [docs/ENGINE.md](docs/ENGINE.md).

```
node tools/test.js        # engine tests (no network needed)
node tools/validate.js    # check the site database after editing data/sites/*.js
```
