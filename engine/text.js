/*
 * MSP Search — text processing.
 *
 * fold()        case + diacritics folding that is safe for Latin, Cyrillic and Turkish
 *               ("İstanbul" -> "istanbul", "Köln" -> "koln", "ёлка" -> "елка")
 * tokenize()    word tokenizer that keeps "c++", "c#", "f#" intact
 * stem()        light stemmer: English plurals, Turkish plural, Russian endings
 * translit()    Cyrillic -> Latin variants ("яндекс" -> yandeks / yandex)
 * swapLayout()  ЙЦУКЕН <-> QWERTY ("пщщпду" -> "google", "ghbdtn" -> "привет")
 * distance()    Damerau-Levenshtein (optimal string alignment) with early exit
 * highlight()   HTML-safe highlighting of query terms
 */
(function (root) {
  'use strict';

  const MSP = root.MSP;
  const T = MSP.text = {};

  /* ------------------------------------------------------------------ folding */

  const FOLD_MAP = { 'ı': 'i', 'ß': 'ss', 'æ': 'ae', 'ø': 'o', 'œ': 'oe', 'ł': 'l', 'đ': 'd', 'ð': 'd', 'þ': 'th' };
  const MARKS = /[\u0300-\u036f]/g;
  const SPECIAL = /[ıßæøœłđðþ]/g;

  T.fold = function (s) {
    return String(s == null ? '' : s)
      .toLowerCase()
      .normalize('NFD')
      .replace(MARKS, '')
      .replace(SPECIAL, c => FOLD_MAP[c]);
  };

  T.CYR = /[\u0400-\u04ff]/;
  T.isCyrillic = s => T.CYR.test(s);

  /* ------------------------------------------------------------------ tokenizing */

  const WORD_RE = /[\p{L}\p{N}]+(?:[+#]+(?![\p{L}\p{N}]))?/gu;

  /** Folded tokens. */
  T.tokenize = function (s) {
    const out = [];
    const f = T.fold(s);
    WORD_RE.lastIndex = 0;
    let m;
    while ((m = WORD_RE.exec(f))) out.push(m[0]);
    return out;
  };

  /** Tokens with their original (unfolded) spelling, needed for case-sensitive aliases like "US". */
  T.tokenizeRaw = function (s) {
    const out = [];
    const str = String(s == null ? '' : s);
    WORD_RE.lastIndex = 0;
    let m;
    while ((m = WORD_RE.exec(str))) {
      const tok = T.fold(m[0]);
      if (tok) out.push({ raw: m[0], tok: tok });
    }
    return out;
  };

  /* ------------------------------------------------------------------ stop / soft words */

  const STOP = new Set((
    // en
    'a an the of in on at to for from by with and or is are was were be been it its this that these those as into ' +
    'about how what where who whom why when which do does did i me my we our you your he she they them his her us ' +
    // ru
    'и в во на с со к ко о об от по за из у для что как где это я мы вы он она они не же ли бы а но то или ' +
    // tr
    've ile bir bu şu da de mi mı mu mü ne nasıl nerede için en ya veya ' +
    // de
    'der die das und im am zu zum zur mit von für ein eine einen den dem des ist sind wie wo was oder ' +
    // fr / es / it
    'le la les du et un une pour avec el los las y del il lo gli di'
  ).split(/\s+/).map(T.fold));

  /** Words that rarely carry meaning in a navigational search; they never decide relevance. */
  const SOFT = new Set((
    'best top free online official site website web page app apps login log sign signin account www http https ' +
    'com org net io html home main cheap cheapest good new near me download near' +
    ' официальный официальная сайт сайта онлайн бесплатно бесплатные вход скачать лучшие дешево дешевые' +
    ' resmi site sitesi online giriş ücretsiz indir ucuz en iyi' +
    ' offizielle offizielle seite kostenlos anmelden günstig billig herunterladen'
  ).split(/\s+/).map(T.fold));

  T.isStop = t => STOP.has(t);
  T.isSoft = t => SOFT.has(t);

  /* ------------------------------------------------------------------ stemming */

  // Longest-first Russian endings (after folding, so й->и and ё->е already happened).
  const RU_ENDINGS = [
    'иями', 'ями', 'ами', 'иях', 'иям', 'ием', 'ией', 'ого', 'его', 'ому', 'ему', 'ыми', 'ими', 'ешь', 'ете',
    'ишь', 'ите', 'ить', 'ать', 'ять', 'еть', 'уть', 'ии', 'ию', 'ия', 'ие', 'ии', 'еи', 'ов', 'ев', 'ах', 'ях',
    'ам', 'ям', 'ом', 'ем', 'ои', 'ыи', 'ии', 'ая', 'яя', 'ое', 'ее', 'ые', 'ых', 'их', 'ую', 'юю', 'ть',
    'а', 'я', 'о', 'е', 'и', 'ы', 'у', 'ю', 'ь'
  ].sort((a, b) => b.length - a.length);

  const EN_KEEP = new Set(('news series species bus gas yes this his is was its us plus focus status virus campus ' +
    'bonus atlas canvas alias analysis basis crisis thesis chaos lens maps ios macos windows always perhaps ' +
    'whereas sms dns aws vps gps css js jobs').split(' '));

  function stemRu(t) {
    for (const e of RU_ENDINGS) {
      if (t.length - e.length >= 3 && t.endsWith(e)) return t.slice(0, -e.length);
    }
    return t;
  }

  function stemLatin(t) {
    if (EN_KEEP.has(t)) return t;
    // Turkish plural (haberler -> haber, arabalar -> araba)
    if (t.length >= 7 && /(lar|ler)$/.test(t)) return t.slice(0, -3);
    if (t.endsWith('ies') && t.length > 4) return t.slice(0, -3) + 'y';
    if (/(ches|shes|sses|xes|zes)$/.test(t)) return t.slice(0, -2);
    if (t.endsWith('s') && !/(ss|us|is|os)$/.test(t)) return t.slice(0, -1);
    return t;
  }

  T.stem = function (t) {
    if (!t || t.length < 4 || /\d/.test(t)) return t;
    return T.CYR.test(t) ? stemRu(t) : stemLatin(t);
  };

  /* ------------------------------------------------------------------ transliteration */

  const TRL = {
    'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'e', 'ж': 'zh', 'з': 'z', 'и': 'i', 'к': 'k',
    'л': 'l', 'м': 'm', 'н': 'n', 'о': 'o', 'п': 'p', 'р': 'r', 'с': 's', 'т': 't', 'у': 'u', 'ф': 'f',
    'х': 'kh', 'ц': 'ts', 'ч': 'ch', 'ш': 'sh', 'щ': 'shch', 'ъ': '', 'ы': 'y', 'ь': '', 'э': 'e',
    'ю': 'yu', 'я': 'ya', 'і': 'i', 'є': 'ye', 'ґ': 'g'
  };

  /** Latin variants of a folded Cyrillic token: [] when the token has no Cyrillic. */
  T.translit = function (tok) {
    if (!T.CYR.test(tok)) return [];
    let base = '';
    for (const ch of tok) base += (TRL[ch] !== undefined ? TRL[ch] : ch);
    const out = [base];
    const x = base.replace(/ks/g, 'x');
    if (x !== base) out.push(x);
    const h = base.replace(/kh/g, 'h');
    if (h !== base) out.push(h);
    return out;
  };

  /* ------------------------------------------------------------------ keyboard layout */

  const EN_L = "`qwertyuiop[]asdfghjkl;'zxcvbnm,./";
  const RU_L = 'ёйцукенгшщзхъфывапролджэячсмитьбю.';
  const EN_U = '~QWERTYUIOP{}ASDFGHJKL:"ZXCVBNM<>?';
  const RU_U = 'ЁЙЦУКЕНГШЩЗХЪФЫВАПРОЛДЖЭЯЧСМИТЬБЮ,';
  const EN2RU = new Map(), RU2EN = new Map();
  for (let i = 0; i < EN_L.length; i++) {
    EN2RU.set(EN_L[i], RU_L[i]); RU2EN.set(RU_L[i], EN_L[i]);
    EN2RU.set(EN_U[i], RU_U[i]); RU2EN.set(RU_U[i], EN_U[i]);
  }

  /** Re-types the string as if the other keyboard layout had been active. */
  T.swapLayout = function (s) {
    const str = String(s == null ? '' : s);
    const map = T.CYR.test(str) ? RU2EN : EN2RU;
    let out = '';
    for (const ch of str) out += map.has(ch) ? map.get(ch) : ch;
    return out;
  };

  /** Cheap "does this look like a real word" check (vowel ratio + consonant runs). */
  T.plausibleWord = function (w) {
    const cyr = T.CYR.test(w);
    const vowels = cyr ? 'аеиоуыэюяіїє' : 'aeiouy';
    let v = 0, run = 0, maxRun = 0, letters = 0;
    for (const ch of w) {
      if (!/\p{L}/u.test(ch)) continue;
      letters++;
      if (vowels.includes(ch)) { v++; run = 0; } else { run++; if (run > maxRun) maxRun = run; }
    }
    if (letters < 2) return true;
    const ratio = v / letters;
    return ratio >= 0.18 && ratio <= 0.8 && maxRun <= 4;
  };

  /* ------------------------------------------------------------------ edit distance */

  /** Optimal-string-alignment Damerau-Levenshtein. Returns max+1 as soon as it is exceeded. */
  T.distance = function (a, b, max) {
    if (a === b) return 0;
    const la = a.length, lb = b.length;
    if (Math.abs(la - lb) > max) return max + 1;
    let prev2 = null;
    let prev = new Array(lb + 1);
    for (let j = 0; j <= lb; j++) prev[j] = j;
    for (let i = 1; i <= la; i++) {
      const cur = new Array(lb + 1);
      cur[0] = i;
      let rowMin = i;
      for (let j = 1; j <= lb; j++) {
        const cost = a[i - 1] === b[j - 1] ? 0 : 1;
        let v = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + cost);
        if (i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) v = Math.min(v, prev2[j - 2] + 1);
        cur[j] = v;
        if (v < rowMin) rowMin = v;
      }
      if (rowMin > max) return max + 1;
      prev2 = prev;
      prev = cur;
    }
    return prev[lb];
  };

  /* ------------------------------------------------------------------ highlighting */

  /**
   * Escapes `text` and wraps every word that starts with one of the folded `terms`.
   * Works on folded forms, so "koln" highlights "Köln" and "istanbul" highlights "İstanbul".
   */
  T.highlight = function (text, terms) {
    const esc = MSP.util.escapeHtml;
    const s = String(text == null ? '' : text);
    if (!terms || !terms.length) return esc(s);
    const re = /[\p{L}\p{N}]+/gu;
    let out = '', last = 0, m;
    while ((m = re.exec(s))) {
      const w = T.fold(m[0]);
      if (terms.some(t => (t.length >= 2 ? w.startsWith(t) : w === t))) {
        out += esc(s.slice(last, m.index)) + '<span class="highlight">' + esc(m[0]) + '</span>';
        last = m.index + m[0].length;
      }
    }
    return out + esc(s.slice(last));
  };
})(typeof globalThis !== 'undefined' ? globalThis : this);
