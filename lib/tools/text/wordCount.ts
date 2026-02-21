import type { Locale } from '@/types/locale';
import type { PageTypeConfig, TextMetrics, LengthEvaluation } from '@/types/tools/text';
export type { PageType, PageTypeConfig, LengthStatus, TextMetrics, LengthEvaluation } from '@/types/tools/text';

// ---------------------------------------------------------------------------
// Page type definitions per locale (loaded from JSON)
// ---------------------------------------------------------------------------

import plPt from '@/data/pl/tools-ui/word-count-page-types.json';
import enPt from '@/data/en/tools-ui/word-count-page-types.json';
import dePt from '@/data/de/tools-ui/word-count-page-types.json';
import esPt from '@/data/es/tools-ui/word-count-page-types.json';
import frPt from '@/data/fr/tools-ui/word-count-page-types.json';
import ptPt from '@/data/pt/tools-ui/word-count-page-types.json';
import itPt from '@/data/it/tools-ui/word-count-page-types.json';
import roPt from '@/data/ro/tools-ui/word-count-page-types.json';
import nlPt from '@/data/nl/tools-ui/word-count-page-types.json';
import huPt from '@/data/hu/tools-ui/word-count-page-types.json';
import idPt from '@/data/id/tools-ui/word-count-page-types.json';
import viPt from '@/data/vi/tools-ui/word-count-page-types.json';
import trPt from '@/data/tr/tools-ui/word-count-page-types.json';
import tlPt from '@/data/tl/tools-ui/word-count-page-types.json';
import swPt from '@/data/sw/tools-ui/word-count-page-types.json';
import msPt from '@/data/ms/tools-ui/word-count-page-types.json';
import csPt from '@/data/cs/tools-ui/word-count-page-types.json';
import svPt from '@/data/sv/tools-ui/word-count-page-types.json';
import sqPt from '@/data/sq/tools-ui/word-count-page-types.json';
import daPt from '@/data/da/tools-ui/word-count-page-types.json';
import noPt from '@/data/no/tools-ui/word-count-page-types.json';
import fiPt from '@/data/fi/tools-ui/word-count-page-types.json';
import skPt from '@/data/sk/tools-ui/word-count-page-types.json';
import hrPt from '@/data/hr/tools-ui/word-count-page-types.json';
import ltPt from '@/data/lt/tools-ui/word-count-page-types.json';
import slPt from '@/data/sl/tools-ui/word-count-page-types.json';
import elPt from '@/data/el/tools-ui/word-count-page-types.json';
import bgPt from '@/data/bg/tools-ui/word-count-page-types.json';
import haPt from '@/data/ha/tools-ui/word-count-page-types.json';
import yoPt from '@/data/yo/tools-ui/word-count-page-types.json';
import afPt from '@/data/af/tools-ui/word-count-page-types.json';
import ukPt from '@/data/uk/tools-ui/word-count-page-types.json';
import cebPt from '@/data/ceb/tools-ui/word-count-page-types.json';
import igPt from '@/data/ig/tools-ui/word-count-page-types.json';
import hiPt from '@/data/hi/tools-ui/word-count-page-types.json';
import bnPt from '@/data/bn/tools-ui/word-count-page-types.json';

const PAGE_TYPES: Record<Locale, PageTypeConfig[]> = {
  pl: plPt as PageTypeConfig[],
  en: enPt as PageTypeConfig[],
  de: dePt as PageTypeConfig[],
  es: esPt as PageTypeConfig[],
  fr: frPt as PageTypeConfig[],
  pt: ptPt as PageTypeConfig[],
  it: itPt as PageTypeConfig[],
  ro: roPt as PageTypeConfig[],
  nl: nlPt as PageTypeConfig[],
  hu: huPt as PageTypeConfig[],
  id: idPt as PageTypeConfig[],
  vi: viPt as PageTypeConfig[],
  tr: trPt as PageTypeConfig[],
  tl: tlPt as PageTypeConfig[],
  sw: swPt as PageTypeConfig[],
  ms: msPt as PageTypeConfig[],
  cs: csPt as PageTypeConfig[],
  sv: svPt as PageTypeConfig[],
  sq: sqPt as PageTypeConfig[],
  da: daPt as PageTypeConfig[],
  no: noPt as PageTypeConfig[],
  fi: fiPt as PageTypeConfig[],
  sk: skPt as PageTypeConfig[],
  hr: hrPt as PageTypeConfig[],
  lt: ltPt as PageTypeConfig[],
  sl: slPt as PageTypeConfig[],
  el: elPt as PageTypeConfig[],
  bg: bgPt as PageTypeConfig[],
  ha: haPt as PageTypeConfig[],
  yo: yoPt as PageTypeConfig[],
  af: afPt as PageTypeConfig[],
  uk: ukPt as PageTypeConfig[],
  ceb: cebPt as PageTypeConfig[],
  ig: igPt as PageTypeConfig[],
  hi: hiPt as PageTypeConfig[],
  bn: bnPt as PageTypeConfig[],
};

export function getPageTypes(locale: Locale): PageTypeConfig[] {
  return PAGE_TYPES[locale];
}

export { PAGE_TYPES };

export function countWords(text: string): number {
  if (!text.trim()) return 0;
  return text.trim().split(/\s+/).length;
}

export function countCharsWithSpaces(text: string): number {
  return text.length;
}

export function countCharsWithoutSpaces(text: string): number {
  return text.replace(/\s/g, '').length;
}

export function countParagraphs(text: string): number {
  if (!text.trim()) return 0;
  return text.split(/\n\s*\n/).filter((p) => p.trim().length > 0).length;
}

export function calculateReadingTime(words: number): number {
  const WORDS_PER_MINUTE = 200;
  return Math.max(1, Math.ceil(words / WORDS_PER_MINUTE));
}

export function analyzeText(text: string): TextMetrics {
  const words = countWords(text);
  return {
    words,
    charsWithSpaces: countCharsWithSpaces(text),
    charsWithoutSpaces: countCharsWithoutSpaces(text),
    paragraphs: countParagraphs(text),
    readingTimeMinutes: calculateReadingTime(words),
  };
}

// ---------------------------------------------------------------------------
// Evaluation & report i18n
// EVAL_UI contains arrow functions (tooShort, tooLong, idealGoodLength,
// readingTime) that can't be serialised to JSON, so it stays in TS.
// ---------------------------------------------------------------------------
type EvalUi = {
  wordsUnit: string;
  emptyMessage: string;
  tooShort: (min: number, unit: string, missing: number) => string;
  tooLong: (excess: number, unit: string) => string;
  idealInRange: string;
  idealGoodLength: (label: string) => string;
  readingTime: (minutes: number) => string;
  report: {
    title: string;
    pageType: string;
    range: string;
    statistics: string;
    words: string;
    charsWithSpaces: string;
    charsWithoutSpaces: string;
    paragraphs: string;
    readingTime: string;
    evaluation: string;
    statusIdeal: string;
    statusShort: string;
    statusLong: string;
    generatedBy: string;
  };
};

const EVAL_UI: Record<Locale, EvalUi> = {
  pl: {
    wordsUnit: 'słów',
    emptyMessage: 'Wklej lub wpisz tekst, aby zobaczyć analizę.',
    tooShort: (min, unit, missing) => `Tekst poniżej orientacyjnego minimum (${min} ${unit}). Jeśli temat jest wyczerpany - to może wystarczyć. Brakuje około ${missing} ${unit}.`,
    tooLong: (excess, unit) => `Tekst powyżej orientacyjnego maksimum o ${excess} ${unit}. Jeśli każde zdanie wnosi wartość - długość jest uzasadniona.`,
    idealInRange: 'Długość w zalecanym zakresie. Wartość dla czytelnika jest kluczowa, a zakresy służą jako punkt odniesienia.',
    idealGoodLength: (label) => `Dobra długość dla ${label.toLowerCase()}. Każdy akapit powinien wnosić konkretną wartość dla czytelnika.`,
    readingTime: (m) => (m === 1 ? '1 minuta' : m >= 2 && m <= 4 ? `${m} minuty` : `${m} minut`),
    report: {
      title: '📊 RAPORT DŁUGOŚCI TEKSTU',
      pageType: 'Typ strony',
      range: 'Zalecany zakres',
      statistics: '📝 STATYSTYKI:',
      words: 'Słowa',
      charsWithSpaces: 'Znaki (ze spacjami)',
      charsWithoutSpaces: 'Znaki (bez spacji)',
      paragraphs: 'Akapity',
      readingTime: 'Czas czytania',
      evaluation: '📈 OCENA',
      statusIdeal: '✅ Dobra długość',
      statusShort: '⚠️ Za krótki',
      statusLong: '⚠️ Za długi',
      generatedBy: 'Wygenerowano przez: arteonagency.pl/narzedzia/licznik-slow-i-znakow',
    },
  },
  en: {
    wordsUnit: 'words',
    emptyMessage: 'Paste or type text to see the analysis.',
    tooShort: (min, unit, missing) => `Text is below the approximate minimum (${min} ${unit}). If the topic is covered - it may be enough. About ${missing} words short.`,
    tooLong: (excess, unit) => `Text exceeds the approximate maximum by ${excess} ${unit}. If every sentence adds value - the length is justified.`,
    idealInRange: 'Length is within the recommended range. Value for the reader is key - ranges serve as a reference point.',
    idealGoodLength: (label) => `Good length for a ${label.toLowerCase()}. Each paragraph should provide concrete value for the reader.`,
    readingTime: (m) => (m === 1 ? '1 minute' : `${m} minutes`),
    report: {
      title: '📊 TEXT LENGTH REPORT',
      pageType: 'Page type',
      range: 'Recommended range',
      statistics: '📝 STATISTICS:',
      words: 'Words',
      charsWithSpaces: 'Characters (with spaces)',
      charsWithoutSpaces: 'Characters (without spaces)',
      paragraphs: 'Paragraphs',
      readingTime: 'Reading time',
      evaluation: '📈 EVALUATION',
      statusIdeal: '✅ Good length',
      statusShort: '⚠️ Too short',
      statusLong: '⚠️ Too long',
      generatedBy: 'Generated by: arteonagency.pl/en/tools/word-and-character-counter',
    },
  },
  de: {
    wordsUnit: 'Wörter',
    emptyMessage: 'Text einfügen oder eingeben, um die Analyse zu sehen.',
    tooShort: (min, unit, missing) => `Text liegt unter dem ungefähren Minimum (${min} ${unit}). Wenn das Thema abgedeckt ist, kann das ausreichen. Es fehlen etwa ${missing} ${unit}.`,
    tooLong: (excess, unit) => `Text überschreitet das ungefähre Maximum um ${excess} ${unit}. Wenn jeder Satz einen Mehrwert bietet, ist die Länge gerechtfertigt.`,
    idealInRange: 'Länge im empfohlenen Bereich. Der Mehrwert für den Leser ist entscheidend — die Bereiche dienen als Orientierung.',
    idealGoodLength: (label) => `Gute Länge für ${label}. Jeder Absatz sollte dem Leser konkreten Mehrwert bieten.`,
    readingTime: (m) => (m === 1 ? '1 Minute' : `${m} Minuten`),
    report: {
      title: '📊 TEXTLÄNGEN-BERICHT',
      pageType: 'Seitentyp',
      range: 'Empfohlener Bereich',
      statistics: '📝 STATISTIKEN:',
      words: 'Wörter',
      charsWithSpaces: 'Zeichen (mit Leerzeichen)',
      charsWithoutSpaces: 'Zeichen (ohne Leerzeichen)',
      paragraphs: 'Absätze',
      readingTime: 'Lesezeit',
      evaluation: '📈 BEWERTUNG',
      statusIdeal: '✅ Gute Länge',
      statusShort: '⚠️ Zu kurz',
      statusLong: '⚠️ Zu lang',
      generatedBy: 'Erstellt von: arteonagency.pl/de/werkzeuge/wort-und-zeichenzaehler',
    },
  },
  es: {
    wordsUnit: 'palabras',
    emptyMessage: 'Pega o escribe un texto para ver el análisis.',
    tooShort: (min, unit, missing) => `El texto está por debajo del mínimo aproximado (${min} ${unit}). Si el tema está cubierto, puede ser suficiente. Faltan unas ${missing} ${unit}.`,
    tooLong: (excess, unit) => `El texto supera el máximo aproximado en ${excess} ${unit}. Si cada frase aporta valor, la longitud está justificada.`,
    idealInRange: 'La longitud está dentro del rango recomendado. El valor para el lector es clave: los rangos sirven como referencia.',
    idealGoodLength: (label) => `Buena longitud para ${label.toLowerCase()}. Cada párrafo debe aportar valor concreto al lector.`,
    readingTime: (m) => (m === 1 ? '1 minuto' : `${m} minutos`),
    report: {
      title: '📊 INFORME DE LONGITUD DEL TEXTO',
      pageType: 'Tipo de página',
      range: 'Rango recomendado',
      statistics: '📝 ESTADÍSTICAS:',
      words: 'Palabras',
      charsWithSpaces: 'Caracteres (con espacios)',
      charsWithoutSpaces: 'Caracteres (sin espacios)',
      paragraphs: 'Párrafos',
      readingTime: 'Tiempo de lectura',
      evaluation: '📈 EVALUACIÓN',
      statusIdeal: '✅ Buena longitud',
      statusShort: '⚠️ Demasiado corto',
      statusLong: '⚠️ Demasiado largo',
      generatedBy: 'Generado por: arteonagency.pl/es/herramientas/contador-de-palabras-y-caracteres',
    },
  },
  fr: {
    wordsUnit: 'mots',
    emptyMessage: 'Collez ou saisissez un texte pour voir l\u2019analyse.',
    tooShort: (min, unit, missing) => `Le texte est en dessous du minimum approximatif (${min} ${unit}). Si le sujet est couvert, cela peut suffire. Il manque environ ${missing} ${unit}.`,
    tooLong: (excess, unit) => `Le texte d\u00e9passe le maximum approximatif de ${excess} ${unit}. Si chaque phrase apporte de la valeur, la longueur est justifi\u00e9e.`,
    idealInRange: 'La longueur est dans la fourchette recommand\u00e9e. La valeur pour le lecteur est essentielle \u2014 les fourchettes servent de r\u00e9f\u00e9rence.',
    idealGoodLength: (label) => `Bonne longueur pour ${label.toLowerCase()}. Chaque paragraphe doit apporter une valeur concr\u00e8te au lecteur.`,
    readingTime: (m) => (m === 1 ? '1 minute' : `${m} minutes`),
    report: {
      title: '📊 RAPPORT DE LONGUEUR DU TEXTE',
      pageType: 'Type de page',
      range: 'Fourchette recommand\u00e9e',
      statistics: '📝 STATISTIQUES :',
      words: 'Mots',
      charsWithSpaces: 'Caract\u00e8res (avec espaces)',
      charsWithoutSpaces: 'Caract\u00e8res (sans espaces)',
      paragraphs: 'Paragraphes',
      readingTime: 'Temps de lecture',
      evaluation: '📈 \u00c9VALUATION',
      statusIdeal: '\u2705 Bonne longueur',
      statusShort: '\u26a0\ufe0f Trop court',
      statusLong: '\u26a0\ufe0f Trop long',
      generatedBy: 'G\u00e9n\u00e9r\u00e9 par : arteonagency.pl/fr/outils/compteur-de-mots-et-de-caracteres',
    },
  },
  pt: {
    wordsUnit: 'palavras',
    emptyMessage: 'Cole ou digite um texto para ver a an\u00e1lise.',
    tooShort: (min, unit, missing) => `O texto est\u00e1 abaixo do m\u00ednimo aproximado (${min} ${unit}). Se o tema est\u00e1 coberto, pode ser suficiente. Faltam cerca de ${missing} ${unit}.`,
    tooLong: (excess, unit) => `O texto ultrapassa o m\u00e1ximo aproximado em ${excess} ${unit}. Se cada frase agrega valor, o comprimento \u00e9 justificado.`,
    idealInRange: 'O comprimento est\u00e1 dentro do intervalo recomendado. O valor para o leitor \u00e9 fundamental \u2014 os intervalos servem como refer\u00eancia.',
    idealGoodLength: (label) => `Bom comprimento para ${label.toLowerCase()}. Cada par\u00e1grafo deve fornecer valor concreto ao leitor.`,
    readingTime: (m) => (m === 1 ? '1 minuto' : `${m} minutos`),
    report: {
      title: '📊 RELAT\u00d3RIO DE COMPRIMENTO DO TEXTO',
      pageType: 'Tipo de p\u00e1gina',
      range: 'Intervalo recomendado',
      statistics: '📝 ESTAT\u00cdSTICAS:',
      words: 'Palavras',
      charsWithSpaces: 'Caracteres (com espa\u00e7os)',
      charsWithoutSpaces: 'Caracteres (sem espa\u00e7os)',
      paragraphs: 'Par\u00e1grafos',
      readingTime: 'Tempo de leitura',
      evaluation: '📈 AVALIA\u00c7\u00c3O',
      statusIdeal: '\u2705 Bom comprimento',
      statusShort: '\u26a0\ufe0f Muito curto',
      statusLong: '\u26a0\ufe0f Muito longo',
      generatedBy: 'Gerado por: arteonagency.pl/pt/ferramentas/contador-de-palavras-e-caracteres',
    },
  },
  it: {
    wordsUnit: 'parole',
    emptyMessage: 'Incolla o digita un testo per visualizzare l\u2019analisi.',
    tooShort: (min, unit, missing) =>
      `Il testo \u00e8 al di sotto del minimo approssimativo (${min} ${unit}). Se l\u2019argomento \u00e8 coperto, potrebbe essere sufficiente. Mancano circa ${missing} ${unit}.`,
    tooLong: (excess, unit) => `Il testo supera il massimo approssimativo di ${excess} ${unit}. Se ogni frase aggiunge valore, la lunghezza \u00e8 giustificata.`,
    idealInRange: 'La lunghezza \u00e8 nell\u2019intervallo raccomandato. Il valore per il lettore \u00e8 fondamentale \u2014 gli intervalli servono come riferimento.',
    idealGoodLength: (label) => `Buona lunghezza per ${label.toLowerCase()}. Ogni paragrafo dovrebbe fornire valore concreto al lettore.`,
    readingTime: (m) => (m === 1 ? '1 minuto' : `${m} minuti`),
    report: {
      title: '📊 RAPPORTO SULLA LUNGHEZZA DEL TESTO',
      pageType: 'Tipo di pagina',
      range: 'Intervallo consigliato',
      statistics: '📝 STATISTICHE:',
      words: 'Parole',
      charsWithSpaces: 'Caratteri (con spazi)',
      charsWithoutSpaces: 'Caratteri (senza spazi)',
      paragraphs: 'Paragrafi',
      readingTime: 'Tempo di lettura',
      evaluation: '📈 VALUTAZIONE',
      statusIdeal: '\u2705 Buona lunghezza',
      statusShort: '\u26a0\ufe0f Troppo corto',
      statusLong: '\u26a0\ufe0f Troppo lungo',
      generatedBy: 'Generato da: arteonagency.pl/it/strumenti/contatore-parole-e-caratteri',
    },
  },
  ro: {
    wordsUnit: 'cuvinte',
    emptyMessage: 'Lipi\u021bi sau introduce\u021bi text pentru a vedea analiza.',
    tooShort: (min, unit, missing) => `Textul este sub minimul aproximativ (${min} ${unit}). Dac\u0103 subiectul este acoperit, poate fi suficient. Lipsesc aproximativ ${missing} ${unit}.`,
    tooLong: (excess, unit) => `Textul dep\u0103\u0219e\u0219te maximul aproximativ cu ${excess} ${unit}. Dac\u0103 fiecare propozi\u021bie adaug\u0103 valoare, lungimea este justificat\u0103.`,
    idealInRange: 'Lungimea este \u00een intervalul recomandat. Valoarea pentru cititor este esen\u021bial\u0103 \u2014 intervalele servesc ca referin\u021b\u0103.',
    idealGoodLength: (label) => `Lungime bun\u0103 pentru ${label.toLowerCase()}. Fiecare paragraf ar trebui s\u0103 ofere valoare concret\u0103 cititorului.`,
    readingTime: (m) => (m === 1 ? '1 minut' : `${m} minute`),
    report: {
      title: '📊 RAPORT DE LUNGIME A TEXTULUI',
      pageType: 'Tip de pagin\u0103',
      range: 'Interval recomandat',
      statistics: '📝 STATISTICI:',
      words: 'Cuvinte',
      charsWithSpaces: 'Caractere (cu spa\u021bii)',
      charsWithoutSpaces: 'Caractere (f\u0103r\u0103 spa\u021bii)',
      paragraphs: 'Paragrafe',
      readingTime: 'Timp de citire',
      evaluation: '📈 EVALUARE',
      statusIdeal: '\u2705 Lungime bun\u0103',
      statusShort: '\u26a0\ufe0f Prea scurt',
      statusLong: '\u26a0\ufe0f Prea lung',
      generatedBy: 'Generat de: arteonagency.pl/ro/instrumente/numarator-de-cuvinte-si-caractere',
    },
  },
  nl: {
    wordsUnit: 'woorden',
    emptyMessage: 'Plak of typ tekst om de analyse te zien.',
    tooShort: (min, unit, missing) => `Tekst is onder het geschatte minimum (${min} ${unit}). Als het onderwerp behandeld is, kan het voldoende zijn. Ongeveer ${missing} ${unit} te weinig.`,
    tooLong: (excess, unit) => `Tekst overschrijdt het geschatte maximum met ${excess} ${unit}. Als elke zin waarde toevoegt, is de lengte gerechtvaardigd.`,
    idealInRange: 'Lengte is binnen het aanbevolen bereik. Waarde voor de lezer is essentieel \u2014 bereiken dienen als referentiepunt.',
    idealGoodLength: (label) => `Goede lengte voor ${label.toLowerCase()}. Elke alinea moet concrete waarde bieden aan de lezer.`,
    readingTime: (m) => (m === 1 ? '1 minuut' : `${m} minuten`),
    report: {
      title: '📊 TEKSTLENGTERAPPORT',
      pageType: 'Paginatype',
      range: 'Aanbevolen bereik',
      statistics: '📝 STATISTIEKEN:',
      words: 'Woorden',
      charsWithSpaces: 'Tekens (met spaties)',
      charsWithoutSpaces: 'Tekens (zonder spaties)',
      paragraphs: 'Alinea\u2019s',
      readingTime: 'Leestijd',
      evaluation: '📈 BEOORDELING',
      statusIdeal: '\u2705 Goede lengte',
      statusShort: '\u26a0\ufe0f Te kort',
      statusLong: '\u26a0\ufe0f Te lang',
      generatedBy: 'Gegenereerd door: arteonagency.pl/nl/tools/woord-en-tekenteller',
    },
  },
  hu: {
    wordsUnit: 'sz\u00f3',
    emptyMessage: 'Illesszen be vagy \u00edrjon sz\u00f6veget az elemz\u00e9s megtekint\u00e9s\u00e9hez.',
    tooShort: (min, unit, missing) =>
      `A sz\u00f6veg a k\u00f6zel\u00edt\u0151 minimum alatt van (${min} ${unit}). Ha a t\u00e9ma lefedett, elegend\u0151 lehet. K\u00f6r\u00fclbel\u00fcl ${missing} ${unit} hi\u00e1nyzik.`,
    tooLong: (excess, unit) => `A sz\u00f6veg ${excess} ${unit}-val meghaladja a k\u00f6zel\u00edt\u0151 maximumot. Ha minden mondat \u00e9rt\u00e9ket ad, a hossz indokolt.`,
    idealInRange:
      'A hossz az aj\u00e1nlott tartom\u00e1nyon bel\u00fcl van. Az olvas\u00f3 sz\u00e1m\u00e1ra ny\u00fajtott \u00e9rt\u00e9k a kulcs \u2014 a tartom\u00e1nyok referenciapontk\u00e9nt szolg\u00e1lnak.',
    idealGoodLength: (label) => `J\u00f3 hossz a(z) ${label.toLowerCase()} sz\u00e1m\u00e1ra. Minden bekezd\u00e9snek konkr\u00e9t \u00e9rt\u00e9ket kell ny\u00fajtania az olvas\u00f3nak.`,
    readingTime: (m) => (m === 1 ? '1 perc' : `${m} perc`),
    report: {
      title: '📊 SZ\u00d6VEGHOSSZ JELENT\u00c9S',
      pageType: 'Oldalt\u00edpus',
      range: 'Aj\u00e1nlott tartom\u00e1ny',
      statistics: '📝 STATISZTIK\u00c1K:',
      words: 'Szavak',
      charsWithSpaces: 'Karakterek (sz\u00f3k\u00f6z\u00f6kkel)',
      charsWithoutSpaces: 'Karakterek (sz\u00f3k\u00f6z\u00f6k n\u00e9lk\u00fcl)',
      paragraphs: 'Bekezd\u00e9sek',
      readingTime: 'Olvas\u00e1si id\u0151',
      evaluation: '📈 \u00c9RT\u00c9KEL\u00c9S',
      statusIdeal: '\u2705 J\u00f3 hossz',
      statusShort: '\u26a0\ufe0f T\u00fal r\u00f6vid',
      statusLong: '\u26a0\ufe0f T\u00fal hossz\u00fa',
      generatedBy: 'K\u00e9sz\u00edtette: arteonagency.pl/hu/eszkozok/szo-es-karakterszamlalo',
    },
  },
  id: {
    wordsUnit: 'kata',
    emptyMessage: 'Tempel atau ketik teks untuk melihat analisis.',
    tooShort: (min, unit, missing) => `Teks di bawah perkiraan minimum (${min} ${unit}). Jika topik sudah tercakup, mungkin sudah cukup. Kurang sekitar ${missing} ${unit}.`,
    tooLong: (excess, unit) => `Teks melebihi perkiraan maksimum sebanyak ${excess} ${unit}. Jika setiap kalimat menambah nilai, panjangnya dapat dibenarkan.`,
    idealInRange: 'Panjang dalam rentang yang direkomendasikan. Nilai bagi pembaca adalah kunci \u2014 rentang berfungsi sebagai titik referensi.',
    idealGoodLength: (label) => `Panjang yang baik untuk ${label.toLowerCase()}. Setiap paragraf harus memberikan nilai konkret bagi pembaca.`,
    readingTime: (m) => `${m} menit`,
    report: {
      title: '📊 LAPORAN PANJANG TEKS',
      pageType: 'Jenis halaman',
      range: 'Rentang yang direkomendasikan',
      statistics: '📝 STATISTIK:',
      words: 'Kata',
      charsWithSpaces: 'Karakter (dengan spasi)',
      charsWithoutSpaces: 'Karakter (tanpa spasi)',
      paragraphs: 'Paragraf',
      readingTime: 'Waktu baca',
      evaluation: '📈 EVALUASI',
      statusIdeal: '\u2705 Panjang baik',
      statusShort: '\u26a0\ufe0f Terlalu pendek',
      statusLong: '\u26a0\ufe0f Terlalu panjang',
      generatedBy: 'Dibuat oleh: arteonagency.pl/id/alat/penghitung-kata-dan-karakter',
    },
  },
  vi: {
    wordsUnit: 't\u1eeb',
    emptyMessage: 'D\u00e1n ho\u1eb7c nh\u1eadp v\u0103n b\u1ea3n \u0111\u1ec3 xem ph\u00e2n t\u00edch.',
    tooShort: (min, unit, missing) =>
      `V\u0103n b\u1ea3n d\u01b0\u1edbi m\u1ee9c t\u1ed1i thi\u1ec3u x\u1ea5p x\u1ec9 (${min} ${unit}). N\u1ebfu ch\u1ee7 \u0111\u1ec1 \u0111\u00e3 \u0111\u01b0\u1ee3c \u0111\u1ec1 c\u1eadp, c\u00f3 th\u1ec3 \u0111\u00e3 \u0111\u1ee7. C\u00f2n thi\u1ebfu kho\u1ea3ng ${missing} ${unit}.`,
    tooLong: (excess, unit) =>
      `V\u0103n b\u1ea3n v\u01b0\u1ee3t m\u1ee9c t\u1ed1i \u0111a x\u1ea5p x\u1ec9 ${excess} ${unit}. N\u1ebfu m\u1ed7i c\u00e2u \u0111\u1ec1u c\u00f3 gi\u00e1 tr\u1ecb, \u0111\u1ed9 d\u00e0i l\u00e0 h\u1ee3p l\u00fd.`,
    idealInRange:
      '\u0110\u1ed9 d\u00e0i n\u1eb1m trong ph\u1ea1m vi khuy\u1ebfn ngh\u1ecb. Gi\u00e1 tr\u1ecb cho ng\u01b0\u1eddi \u0111\u1ecdc l\u00e0 ch\u00eda kh\u00f3a \u2014 ph\u1ea1m vi ch\u1ec9 l\u00e0 \u0111i\u1ec3m tham chi\u1ebfu.',
    idealGoodLength: (label) =>
      `\u0110\u1ed9 d\u00e0i t\u1ed1t cho ${label.toLowerCase()}. M\u1ed7i \u0111o\u1ea1n v\u0103n n\u00ean cung c\u1ea5p gi\u00e1 tr\u1ecb c\u1ee5 th\u1ec3 cho ng\u01b0\u1eddi \u0111\u1ecdc.`,
    readingTime: (m) => `${m} ph\u00fat`,
    report: {
      title: '📊 B\u00c1O C\u00c1O \u0110\u1ed8 D\u00c0I V\u0102N B\u1ea2N',
      pageType: 'Lo\u1ea1i trang',
      range: 'Ph\u1ea1m vi khuy\u1ebfn ngh\u1ecb',
      statistics: '📝 TH\u1ed0NG K\u00ca:',
      words: 'T\u1eeb',
      charsWithSpaces: 'K\u00fd t\u1ef1 (c\u00f3 d\u1ea5u c\u00e1ch)',
      charsWithoutSpaces: 'K\u00fd t\u1ef1 (kh\u00f4ng d\u1ea5u c\u00e1ch)',
      paragraphs: '\u0110o\u1ea1n v\u0103n',
      readingTime: 'Th\u1eddi gian \u0111\u1ecdc',
      evaluation: '📈 \u0110\u00c1NH GI\u00c1',
      statusIdeal: '\u2705 \u0110\u1ed9 d\u00e0i t\u1ed1t',
      statusShort: '\u26a0\ufe0f Qu\u00e1 ng\u1eafn',
      statusLong: '\u26a0\ufe0f Qu\u00e1 d\u00e0i',
      generatedBy: 'T\u1ea1o b\u1edfi: arteonagency.pl/vi/cong-cu/bo-dem-tu-va-ky-tu',
    },
  },
  tr: {
    wordsUnit: 'kelime',
    emptyMessage: 'Analizi g\u00f6rmek i\u00e7in metin yap\u0131\u015ft\u0131r\u0131n veya yaz\u0131n.',
    tooShort: (min, unit, missing) => `Metin yakla\u015f\u0131k minimumun alt\u0131nda (${min} ${unit}). Konu kapsanm\u0131\u015fsa yeterli olabilir. Yakla\u015f\u0131k ${missing} ${unit} eksik.`,
    tooLong: (excess, unit) => `Metin yakla\u015f\u0131k maksimumu ${excess} ${unit} a\u015f\u0131yor. Her c\u00fcmle de\u011fer kat\u0131yorsa uzunluk hakl\u0131d\u0131r.`,
    idealInRange: 'Uzunluk \u00f6nerilen aral\u0131kta. Okuyucu i\u00e7in de\u011fer \u00f6nemlidir \u2014 aral\u0131klar referans noktas\u0131 olarak hizmet eder.',
    idealGoodLength: (label) => `${label} i\u00e7in iyi uzunluk. Her paragraf okuyucuya somut de\u011fer sunmal\u0131d\u0131r.`,
    readingTime: (m) => (m === 1 ? '1 dakika' : `${m} dakika`),
    report: {
      title: '📊 MET\u0130N UZUNLU\u011eU RAPORU',
      pageType: 'Sayfa t\u00fcr\u00fc',
      range: '\u00d6nerilen aral\u0131k',
      statistics: '📝 \u0130STAT\u0130ST\u0130KLER:',
      words: 'Kelimeler',
      charsWithSpaces: 'Karakterler (bo\u015fluklu)',
      charsWithoutSpaces: 'Karakterler (bo\u015fluksuz)',
      paragraphs: 'Paragraflar',
      readingTime: 'Okuma s\u00fcresi',
      evaluation: '📈 DE\u011eERLEND\u0130RME',
      statusIdeal: '\u2705 \u0130yi uzunluk',
      statusShort: '\u26a0\ufe0f \u00c7ok k\u0131sa',
      statusLong: '\u26a0\ufe0f \u00c7ok uzun',
      generatedBy: 'Olu\u015fturan: arteonagency.pl/tr/araclar/kelime-ve-karakter-sayaci',
    },
  },
  tl: {
    wordsUnit: 'salita',
    emptyMessage: 'Mag-paste o mag-type ng teksto para makita ang analisis.',
    tooShort: (min, unit, missing) => `Ang teksto ay nasa ibaba ng tinatayang minimum (${min} ${unit}). Kung sakop na ang paksa, maaaring sapat na. Kulang ng humigit-kumulang ${missing} ${unit}.`,
    tooLong: (excess, unit) => `Ang teksto ay lumampas sa tinatayang maximum ng ${excess} ${unit}. Kung bawat pangungusap ay may halaga, makatwiran ang haba.`,
    idealInRange: 'Ang haba ay nasa inirerekomendang saklaw. Ang halaga para sa mambabasa ang susi \u2014 ang mga saklaw ay nagsisilbing sanggunian.',
    idealGoodLength: (label) => `Magandang haba para sa ${label.toLowerCase()}. Ang bawat talata ay dapat magbigay ng kongkretong halaga sa mambabasa.`,
    readingTime: (m) => `${m} minuto`,
    report: {
      title: '📊 ULAT NG HABA NG TEKSTO',
      pageType: 'Uri ng pahina',
      range: 'Inirerekomendang saklaw',
      statistics: '📝 ESTADISTIKA:',
      words: 'Mga salita',
      charsWithSpaces: 'Mga karakter (may puwang)',
      charsWithoutSpaces: 'Mga karakter (walang puwang)',
      paragraphs: 'Mga talata',
      readingTime: 'Oras ng pagbabasa',
      evaluation: '📈 EBALWASYON',
      statusIdeal: '\u2705 Magandang haba',
      statusShort: '\u26a0\ufe0f Masyadong maikli',
      statusLong: '\u26a0\ufe0f Masyadong mahaba',
      generatedBy: 'Ginawa ng: arteonagency.pl/tl/mga-kasangkapan/bilang-ng-salita-at-karakter',
    },
  },
  sw: {
    wordsUnit: 'maneno',
    emptyMessage: 'Bandika au andika maandishi kuona uchambuzi.',
    tooShort: (min, unit, missing) => `Maandishi yako chini ya kiwango cha chini kinachokadiriwa (${min} ${unit}). Ikiwa mada imefunikwa, inaweza kutosha. Upungufu wa takriban ${missing} ${unit}.`,
    tooLong: (excess, unit) => `Maandishi yanazidi kiwango cha juu kinachokadiriwa kwa ${excess} ${unit}. Ikiwa kila sentensi inaongeza thamani, urefu ni halali.`,
    idealInRange: 'Urefu uko ndani ya masafa yanayopendekezwa. Thamani kwa msomaji ni muhimu \u2014 masafa hutumika kama kumbukumbu.',
    idealGoodLength: (label) => `Urefu mzuri kwa ${label.toLowerCase()}. Kila aya inapaswa kutoa thamani halisi kwa msomaji.`,
    readingTime: (m) => `dakika ${m}`,
    report: {
      title: '📊 RIPOTI YA UREFU WA MAANDISHI',
      pageType: 'Aina ya ukurasa',
      range: 'Masafa yanayopendekezwa',
      statistics: '📝 TAKWIMU:',
      words: 'Maneno',
      charsWithSpaces: 'Herufi (pamoja na nafasi)',
      charsWithoutSpaces: 'Herufi (bila nafasi)',
      paragraphs: 'Aya',
      readingTime: 'Muda wa kusoma',
      evaluation: '📈 TATHMINI',
      statusIdeal: '\u2705 Urefu mzuri',
      statusShort: '\u26a0\ufe0f Fupi sana',
      statusLong: '\u26a0\ufe0f Ndefu sana',
      generatedBy: 'Imetengenezwa na: arteonagency.pl/sw/zana/kihesabu-maneno-na-herufi',
    },
  },
  ms: {
    wordsUnit: 'perkataan',
    emptyMessage: 'Tampal atau taip teks untuk melihat analisis.',
    tooShort: (min, unit, missing) => `Teks di bawah anggaran minimum (${min} ${unit}). Jika topik sudah diliputi, mungkin sudah mencukupi. Kurang lebih ${missing} ${unit} lagi.`,
    tooLong: (excess, unit) => `Teks melebihi anggaran maksimum sebanyak ${excess} ${unit}. Jika setiap ayat menambah nilai, panjang teks adalah wajar.`,
    idealInRange: 'Panjang dalam julat yang disyorkan. Nilai untuk pembaca adalah kunci \u2014 julat berfungsi sebagai titik rujukan.',
    idealGoodLength: (label) => `Panjang yang baik untuk ${label.toLowerCase()}. Setiap perenggan harus memberikan nilai konkrit kepada pembaca.`,
    readingTime: (m) => `${m} minit`,
    report: {
      title: '📊 LAPORAN PANJANG TEKS',
      pageType: 'Jenis halaman',
      range: 'Julat yang disyorkan',
      statistics: '📝 STATISTIK:',
      words: 'Perkataan',
      charsWithSpaces: 'Aksara (dengan ruang)',
      charsWithoutSpaces: 'Aksara (tanpa ruang)',
      paragraphs: 'Perenggan',
      readingTime: 'Masa membaca',
      evaluation: '📈 PENILAIAN',
      statusIdeal: '\u2705 Panjang baik',
      statusShort: '\u26a0\ufe0f Terlalu pendek',
      statusLong: '\u26a0\ufe0f Terlalu panjang',
      generatedBy: 'Dijana oleh: arteonagency.pl/ms/alatan/pengira-kata-dan-aksara',
    },
  },
  cs: {
    wordsUnit: 'slov',
    emptyMessage: 'Vlo\u017ete nebo zadejte text pro zobrazen\u00ed anal\u00fdzy.',
    tooShort: (min, unit, missing) =>
      `Text je pod p\u0159ibli\u017en\u00fdm minimem (${min} ${unit}). Pokud je t\u00e9ma pokryto, m\u016f\u017ee to sta\u010dit. Chyb\u00ed p\u0159ibli\u017en\u011b ${missing} ${unit}.`,
    tooLong: (excess, unit) =>
      `Text p\u0159ekra\u010duje p\u0159ibli\u017en\u00e9 maximum o ${excess} ${unit}. Pokud ka\u017ed\u00e1 v\u011bta p\u0159id\u00e1v\u00e1 hodnotu, d\u00e9lka je od\u016fvodn\u011bn\u00e1.`,
    idealInRange: 'D\u00e9lka je v doporu\u010den\u00e9m rozsahu. Hodnota pro \u010dten\u00e1\u0159e je kl\u00ed\u010dov\u00e1 \u2014 rozsahy slou\u017e\u00ed jako referen\u010dn\u00ed bod.',
    idealGoodLength: (label) => `Dobr\u00e1 d\u00e9lka pro ${label.toLowerCase()}. Ka\u017ed\u00fd odstavec by m\u011bl \u010dten\u00e1\u0159i poskytnout konkr\u00e9tn\u00ed hodnotu.`,
    readingTime: (m) => (m === 1 ? '1 minuta' : m >= 2 && m <= 4 ? `${m} minuty` : `${m} minut`),
    report: {
      title: '📊 ZPR\u00c1VA O D\u00c9LCE TEXTU',
      pageType: 'Typ str\u00e1nky',
      range: 'Doporu\u010den\u00fd rozsah',
      statistics: '📝 STATISTIKY:',
      words: 'Slova',
      charsWithSpaces: 'Znaky (s mezerami)',
      charsWithoutSpaces: 'Znaky (bez mezer)',
      paragraphs: 'Odstavce',
      readingTime: '\u010cas \u010dten\u00ed',
      evaluation: '📈 HODNOCEN\u00cd',
      statusIdeal: '\u2705 Dobr\u00e1 d\u00e9lka',
      statusShort: '\u26a0\ufe0f P\u0159\u00edli\u0161 kr\u00e1tk\u00fd',
      statusLong: '\u26a0\ufe0f P\u0159\u00edli\u0161 dlouh\u00fd',
      generatedBy: 'Vygenerov\u00e1no: arteonagency.pl/cs/nastroje/pocitadlo-slov-a-znaku',
    },
  },
  sv: {
    wordsUnit: 'ord',
    emptyMessage: 'Klistra in eller skriv text f\u00f6r att se analysen.',
    tooShort: (min, unit, missing) =>
      `Texten \u00e4r under det ungef\u00e4rliga minimumet (${min} ${unit}). Om \u00e4mnet \u00e4r t\u00e4ckt kan det r\u00e4cka. Ungef\u00e4r ${missing} ${unit} fattas.`,
    tooLong: (excess, unit) => `Texten \u00f6verskrider det ungef\u00e4rliga maximet med ${excess} ${unit}. Om varje mening tillf\u00f6r v\u00e4rde \u00e4r l\u00e4ngden motiverad.`,
    idealInRange: 'L\u00e4ngden \u00e4r inom det rekommenderade intervallet. V\u00e4rde f\u00f6r l\u00e4saren \u00e4r nyckeln \u2014 intervallen fungerar som referenspunkt.',
    idealGoodLength: (label) => `Bra l\u00e4ngd f\u00f6r ${label.toLowerCase()}. Varje stycke b\u00f6r ge konkret v\u00e4rde \u00e5t l\u00e4saren.`,
    readingTime: (m) => (m === 1 ? '1 minut' : `${m} minuter`),
    report: {
      title: '📊 TEXTL\u00c4NGDSRAPPORT',
      pageType: 'Sidtyp',
      range: 'Rekommenderat intervall',
      statistics: '📝 STATISTIK:',
      words: 'Ord',
      charsWithSpaces: 'Tecken (med mellanslag)',
      charsWithoutSpaces: 'Tecken (utan mellanslag)',
      paragraphs: 'Stycken',
      readingTime: 'L\u00e4stid',
      evaluation: '📈 BED\u00d6MNING',
      statusIdeal: '\u2705 Bra l\u00e4ngd',
      statusShort: '\u26a0\ufe0f F\u00f6r kort',
      statusLong: '\u26a0\ufe0f F\u00f6r l\u00e5ng',
      generatedBy: 'Genererad av: arteonagency.pl/sv/verktyg/ord-och-teckenraknare',
    },
  },
  sq: {
    wordsUnit: 'fjal\u00eb',
    emptyMessage: 'Ngjisni ose shkruani tekst p\u00ebr t\u00eb par\u00eb analiz\u00ebn.',
    tooShort: (min, unit, missing) =>
      `Teksti \u00ebsht\u00eb n\u00ebn minimumin e p\u00ebraf\u00ebrt (${min} ${unit}). N\u00ebse tema \u00ebsht\u00eb mbuluar, mund t\u00eb mjaftoj\u00eb. Mungojn\u00eb rreth ${missing} ${unit}.`,
    tooLong: (excess, unit) => `Teksti tejkalon maksimumin e p\u00ebraf\u00ebrt me ${excess} ${unit}. N\u00ebse \u00e7do fjali shton vler\u00eb, gjat\u00ebsia \u00ebsht\u00eb e arsyeshme.`,
    idealInRange:
      'Gjat\u00ebsia \u00ebsht\u00eb brenda diapazonit t\u00eb rekomanduar. Vlera p\u00ebr lexuesin \u00ebsht\u00eb \u00e7el\u00ebsi \u2014 diapazonet sh\u00ebrbejn\u00eb si pik\u00eb referimi.',
    idealGoodLength: (label) => `Gjat\u00ebsi e mir\u00eb p\u00ebr ${label.toLowerCase()}. \u00c7do paragraf duhet t\u2019i jap\u00eb vler\u00eb konkrete lexuesit.`,
    readingTime: (m) => (m === 1 ? '1 minut\u00eb' : `${m} minuta`),
    report: {
      title: '📊 RAPORT I GJAT\u00cbSIS\u00cb S\u00cb TEKSTIT',
      pageType: 'Lloji i faqes',
      range: 'Diapazoni i rekomanduar',
      statistics: '📝 STATISTIKA:',
      words: 'Fjal\u00ebt',
      charsWithSpaces: 'Karakteret (me hap\u00ebsira)',
      charsWithoutSpaces: 'Karakteret (pa hap\u00ebsira)',
      paragraphs: 'Paragraf\u00ebt',
      readingTime: 'Koha e leximit',
      evaluation: '📈 VLER\u00cbSIMI',
      statusIdeal: '\u2705 Gjat\u00ebsi e mir\u00eb',
      statusShort: '\u26a0\ufe0f Shum\u00eb i shkurt\u00ebr',
      statusLong: '\u26a0\ufe0f Shum\u00eb i gjat\u00eb',
      generatedBy: 'Gjeneruar nga: arteonagency.pl/sq/mjetet/numerues-fjalesh-dhe-karakteresh',
    },
  },
  da: {
    wordsUnit: 'ord',
    emptyMessage: 'Inds\u00e6t eller skriv tekst for at se analysen.',
    tooShort: (min, unit, missing) => `Teksten er under det omtrentlige minimum (${min} ${unit}). Hvis emnet er d\u00e6kket, kan det v\u00e6re nok. Der mangler ca. ${missing} ${unit}.`,
    tooLong: (excess, unit) => `Teksten overstiger det omtrentlige maksimum med ${excess} ${unit}. Hvis hver s\u00e6tning tilfører v\u00e6rdi, er l\u00e6ngden berettiget.`,
    idealInRange: 'L\u00e6ngden er inden for det anbefalede interval. V\u00e6rdi for l\u00e6seren er n\u00f8glen \u2014 intervallerne fungerer som referencepunkt.',
    idealGoodLength: (label) => `God l\u00e6ngde for ${label.toLowerCase()}. Hvert afsnit b\u00f8r give konkret v\u00e6rdi til l\u00e6seren.`,
    readingTime: (m) => (m === 1 ? '1 minut' : `${m} minutter`),
    report: {
      title: '📊 TEKSTL\u00c6NGDERAPPORT',
      pageType: 'Sidetype',
      range: 'Anbefalet interval',
      statistics: '📝 STATISTIK:',
      words: 'Ord',
      charsWithSpaces: 'Tegn (med mellemrum)',
      charsWithoutSpaces: 'Tegn (uden mellemrum)',
      paragraphs: 'Afsnit',
      readingTime: 'L\u00e6setid',
      evaluation: '📈 VURDERING',
      statusIdeal: '\u2705 God l\u00e6ngde',
      statusShort: '\u26a0\ufe0f For kort',
      statusLong: '\u26a0\ufe0f For lang',
      generatedBy: 'Genereret af: arteonagency.pl/da/vaerktojer/ord-og-tegntaeller',
    },
  },
  no: {
    wordsUnit: 'ord',
    emptyMessage: 'Lim inn eller skriv tekst for \u00e5 se analysen.',
    tooShort: (min, unit, missing) => `Teksten er under det omtrentlige minimum (${min} ${unit}). Hvis emnet er dekket, kan det v\u00e6re nok. Det mangler ca. ${missing} ${unit}.`,
    tooLong: (excess, unit) => `Teksten overskrider det omtrentlige maksimum med ${excess} ${unit}. Hvis hver setning tilfører verdi, er lengden berettiget.`,
    idealInRange: 'Lengden er innenfor det anbefalte intervallet. Verdi for leseren er n\u00f8kkelen \u2014 intervallene fungerer som referansepunkt.',
    idealGoodLength: (label) => `God lengde for ${label.toLowerCase()}. Hvert avsnitt b\u00f8r gi konkret verdi til leseren.`,
    readingTime: (m) => (m === 1 ? '1 minutt' : `${m} minutter`),
    report: {
      title: '📊 TEKSTLENGDERAPPORT',
      pageType: 'Sidetype',
      range: 'Anbefalt intervall',
      statistics: '📝 STATISTIKK:',
      words: 'Ord',
      charsWithSpaces: 'Tegn (med mellomrom)',
      charsWithoutSpaces: 'Tegn (uten mellomrom)',
      paragraphs: 'Avsnitt',
      readingTime: 'Lesetid',
      evaluation: '📈 VURDERING',
      statusIdeal: '\u2705 God lengde',
      statusShort: '\u26a0\ufe0f For kort',
      statusLong: '\u26a0\ufe0f For lang',
      generatedBy: 'Generert av: arteonagency.pl/no/verktoy/ord-og-tegnteller',
    },
  },
  fi: {
    wordsUnit: 'sanaa',
    emptyMessage: 'Liit\u00e4 tai kirjoita teksti\u00e4 n\u00e4hd\u00e4ksesi analyysin.',
    tooShort: (min, unit, missing) => `Teksti on alle likimääräisen minimin (${min} ${unit}). Jos aihe on katettu, se voi riittää. Puuttuu noin ${missing} ${unit}.`,
    tooLong: (excess, unit) => `Teksti ylitt\u00e4\u00e4 likim\u00e4\u00e4r\u00e4isen maksimin ${excess} ${unit}. Jos jokainen lause tuo lis\u00e4arvoa, pituus on perusteltu.`,
    idealInRange: 'Pituus on suositellun vaihteluv\u00e4lin sis\u00e4ll\u00e4. Arvo lukijalle on avainasia \u2014 vaihteluv\u00e4lit toimivat viitepisteein\u00e4.',
    idealGoodLength: (label) => `Hyv\u00e4 pituus ${label.toLowerCase()}. Jokaisen kappaleen tulisi tarjota konkreettista arvoa lukijalle.`,
    readingTime: (m) => (m === 1 ? '1 minuutti' : `${m} minuuttia`),
    report: {
      title: '📊 TEKSTIN PITUUSRAPORTTI',
      pageType: 'Sivutyyppi',
      range: 'Suositeltu vaihteluv\u00e4li',
      statistics: '📝 TILASTOT:',
      words: 'Sanat',
      charsWithSpaces: 'Merkit (v\u00e4lily\u00f6nnein)',
      charsWithoutSpaces: 'Merkit (ilman v\u00e4lily\u00f6ntej\u00e4)',
      paragraphs: 'Kappaleet',
      readingTime: 'Lukuaika',
      evaluation: '📈 ARVIOINTI',
      statusIdeal: '\u2705 Hyv\u00e4 pituus',
      statusShort: '\u26a0\ufe0f Liian lyhyt',
      statusLong: '\u26a0\ufe0f Liian pitk\u00e4',
      generatedBy: 'Luonut: arteonagency.pl/fi/tyokalut/sana-ja-merkkilaskuri',
    },
  },
  sk: {
    wordsUnit: 'slov',
    emptyMessage: 'Prilepte alebo zadajte text pre zobrazenie anal\u00fdzy.',
    tooShort: (min, unit, missing) =>
      `Text je pod pribli\u017en\u00fdm minimom (${min} ${unit}). Ak je t\u00e9ma pokryt\u00e1, m\u00f4\u017ee to sta\u010di\u0165. Ch\u00fdba pribli\u017ene ${missing} ${unit}.`,
    tooLong: (excess, unit) => `Text prekra\u010duje pribli\u017en\u00e9 maximum o ${excess} ${unit}. Ak ka\u017ed\u00e1 veta prid\u00e1va hodnotu, d\u013a\u017eka je od\u00f4vodnen\u00e1.`,
    idealInRange: 'D\u013a\u017eka je v odpor\u00fa\u010danom rozsahu. Hodnota pre \u010ditate\u013ea je k\u013e\u00fa\u010dov\u00e1 \u2014 rozsahy sl\u00fa\u017eia ako referen\u010dn\u00fd bod.',
    idealGoodLength: (label) => `Dobr\u00e1 d\u013a\u017eka pre ${label.toLowerCase()}. Ka\u017ed\u00fd odsek by mal \u010ditate\u013eovi poskytn\u00fa\u0165 konkr\u00e9tnu hodnotu.`,
    readingTime: (m) => (m === 1 ? '1 min\u00fata' : m >= 2 && m <= 4 ? `${m} min\u00faty` : `${m} min\u00fat`),
    report: {
      title: '📊 SPR\u00c1VA O D\u013a\u017dKE TEXTU',
      pageType: 'Typ str\u00e1nky',
      range: 'Odpor\u00fa\u010dan\u00fd rozsah',
      statistics: '📝 \u0160TATISTIKY:',
      words: 'Slov\u00e1',
      charsWithSpaces: 'Znaky (s medzerami)',
      charsWithoutSpaces: 'Znaky (bez medzier)',
      paragraphs: 'Odseky',
      readingTime: '\u010cas \u010d\u00edtania',
      evaluation: '📈 HODNOTENIE',
      statusIdeal: '\u2705 Dobr\u00e1 d\u013a\u017eka',
      statusShort: '\u26a0\ufe0f Pr\u00edli\u0161 kr\u00e1tky',
      statusLong: '\u26a0\ufe0f Pr\u00edli\u0161 dlh\u00fd',
      generatedBy: 'Vygenerovan\u00e9: arteonagency.pl/sk/nastroje/pocitadlo-slov-a-znakov',
    },
  },
  hr: {
    wordsUnit: 'rije\u010di',
    emptyMessage: 'Zalijepite ili upi\u0161ite tekst za prikaz analize.',
    tooShort: (min, unit, missing) => `Tekst je ispod pribli\u017enog minimuma (${min} ${unit}). Ako je tema pokrivena, mo\u017ee biti dovoljno. Nedostaje otprilike ${missing} ${unit}.`,
    tooLong: (excess, unit) => `Tekst prema\u0161uje pribli\u017eni maksimum za ${excess} ${unit}. Ako svaka re\u010denica dodaje vrijednost, duljina je opravdana.`,
    idealInRange: 'Duljina je unutar preporu\u010denog raspona. Vrijednost za \u010ditatelja je klju\u010dna \u2014 rasponi slu\u017ee kao referentna to\u010dka.',
    idealGoodLength: (label) => `Dobra duljina za ${label.toLowerCase()}. Svaki odlomak trebao bi \u010ditatelju pru\u017eiti konkretnu vrijednost.`,
    readingTime: (m) => (m === 1 ? '1 minuta' : m >= 2 && m <= 4 ? `${m} minute` : `${m} minuta`),
    report: {
      title: '📊 IZVJE\u0160TAJ O DULJINI TEKSTA',
      pageType: 'Vrsta stranice',
      range: 'Preporu\u010deni raspon',
      statistics: '📝 STATISTIKE:',
      words: 'Rije\u010di',
      charsWithSpaces: 'Znakovi (s razmacima)',
      charsWithoutSpaces: 'Znakovi (bez razmaka)',
      paragraphs: 'Odlomci',
      readingTime: 'Vrijeme \u010ditanja',
      evaluation: '📈 OCJENA',
      statusIdeal: '\u2705 Dobra duljina',
      statusShort: '\u26a0\ufe0f Prekratko',
      statusLong: '\u26a0\ufe0f Predugo',
      generatedBy: 'Generirano: arteonagency.pl/hr/alati/brojac-rijeci-i-znakova',
    },
  },
  lt: {
    wordsUnit: '\u017eod\u017ei\u0173',
    emptyMessage: '\u012eklijuokite arba \u012fveskite tekst\u0105 nor\u0117dami pamatyti analiz\u0119.',
    tooShort: (min, unit, missing) => `Tekstas yra \u017eemiau apytikrio minimumo (${min} ${unit}). Jei tema i\u0161samiai apr\u0117pta, to gali pakakti. Tr\u016bksta apytiksliai ${missing} ${unit}.`,
    tooLong: (excess, unit) => `Tekstas vir\u0161ija apytikr\u012f maksimum\u0105 ${excess} ${unit}. Jei kiekvienas sakinys suteikia vert\u0119, ilgis yra pateisinamas.`,
    idealInRange: 'Ilgis yra rekomenduojamame diapazone. Vert\u0117 skaitytojui yra svarbiausia \u2014 diapazonai yra orientacinis ta\u0161kas.',
    idealGoodLength: (label) => `Geras ilgis ${label.toLowerCase()}. Kiekviena pastraipa tur\u0117t\u0173 suteikti konkreci\u0105 vert\u0119 skaitytojui.`,
    readingTime: (m) => (m === 1 ? '1 minut\u0117' : `${m} minu\u010di\u0173`),
    report: {
      title: '📊 TEKSTO ILGIO ATASKAITA',
      pageType: 'Puslapio tipas',
      range: 'Rekomenduojamas diapazonas',
      statistics: '📝 STATISTIKA:',
      words: '\u017dod\u017eiai',
      charsWithSpaces: 'Simboliai (su tarpais)',
      charsWithoutSpaces: 'Simboliai (be tarp\u0173)',
      paragraphs: 'Pastraipos',
      readingTime: 'Skaitymo laikas',
      evaluation: '📈 \u012eVERTINIMAS',
      statusIdeal: '\u2705 Geras ilgis',
      statusShort: '\u26a0\ufe0f Per trumpas',
      statusLong: '\u26a0\ufe0f Per ilgas',
      generatedBy: 'Sugeneravo: arteonagency.pl/lt/irankiai/zodziu-ir-simboliu-skaiciuokle',
    },
  },
  sl: {
    wordsUnit: 'besed',
    emptyMessage: 'Prilepite ali vnesite besedilo za prikaz analize.',
    tooShort: (min, unit, missing) => `Besedilo je pod pribli\u017enim minimumom (${min} ${unit}). \u010ce je tema pokrita, je morda dovolj. Manjka pribli\u017eno ${missing} ${unit}.`,
    tooLong: (excess, unit) => `Besedilo presega pribli\u017eni maksimum za ${excess} ${unit}. \u010ce vsak stavek dodaja vrednost, je dol\u017eina upravi\u010dena.`,
    idealInRange: 'Dol\u017eina je v priporo\u010denem razponu. Vrednost za bralca je klju\u010dna \u2014 razponi slu\u017eijo kot referen\u010dna to\u010dka.',
    idealGoodLength: (label) => `Dobra dol\u017eina za ${label.toLowerCase()}. Vsak odstavek mora bralcu ponuditi konkretno vrednost.`,
    readingTime: (m) => (m === 1 ? '1 minuta' : m === 2 ? '2 minuti' : m >= 3 && m <= 4 ? `${m} minute` : `${m} minut`),
    report: {
      title: '📊 PORO\u010cILO O DOL\u017dINI BESEDILA',
      pageType: 'Vrsta strani',
      range: 'Priporo\u010den razpon',
      statistics: '📝 STATISTIKA:',
      words: 'Besede',
      charsWithSpaces: 'Znaki (s presledki)',
      charsWithoutSpaces: 'Znaki (brez presledkov)',
      paragraphs: 'Odstavki',
      readingTime: '\u010cas branja',
      evaluation: '📈 OCENA',
      statusIdeal: '\u2705 Dobra dol\u017eina',
      statusShort: '\u26a0\ufe0f Prekratko',
      statusLong: '\u26a0\ufe0f Predolgo',
      generatedBy: 'Ustvarjeno: arteonagency.pl/sl/orodja/stevec-besed-in-znakov',
    },
  },
  el: {
    wordsUnit: '\u03bb\u03ad\u03be\u03b5\u03b9\u03c2',
    emptyMessage:
      '\u0395\u03c0\u03b9\u03ba\u03bf\u03bb\u03bb\u03ae\u03c3\u03c4\u03b5 \u03ae \u03c0\u03bb\u03b7\u03ba\u03c4\u03c1\u03bf\u03bb\u03bf\u03b3\u03ae\u03c3\u03c4\u03b5 \u03ba\u03b5\u03af\u03bc\u03b5\u03bd\u03bf \u03b3\u03b9\u03b1 \u03bd\u03b1 \u03b4\u03b5\u03af\u03c4\u03b5 \u03c4\u03b7\u03bd \u03b1\u03bd\u03ac\u03bb\u03c5\u03c3\u03b7.',
    tooShort: (min, unit, missing) =>
      `\u03a4\u03bf \u03ba\u03b5\u03af\u03bc\u03b5\u03bd\u03bf \u03b5\u03af\u03bd\u03b1\u03b9 \u03ba\u03ac\u03c4\u03c9 \u03b1\u03c0\u03cc \u03c4\u03bf \u03ba\u03b1\u03c4\u03ac \u03c0\u03c1\u03bf\u03c3\u03ad\u03b3\u03b3\u03b9\u03c3\u03b7 \u03b5\u03bb\u03ac\u03c7\u03b9\u03c3\u03c4\u03bf (${min} ${unit}). \u0391\u03bd \u03c4\u03bf \u03b8\u03ad\u03bc\u03b1 \u03ba\u03b1\u03bb\u03cd\u03c0\u03c4\u03b5\u03c4\u03b1\u03b9 \u2013 \u03bc\u03c0\u03bf\u03c1\u03b5\u03af \u03bd\u03b1 \u03b1\u03c1\u03ba\u03b5\u03af. \u039b\u03b5\u03af\u03c0\u03bf\u03c5\u03bd \u03c0\u03b5\u03c1\u03af\u03c0\u03bf\u03c5 ${missing} ${unit}.`,
    tooLong: (excess, unit) =>
      `\u03a4\u03bf \u03ba\u03b5\u03af\u03bc\u03b5\u03bd\u03bf \u03c5\u03c0\u03b5\u03c1\u03b2\u03b1\u03af\u03bd\u03b5\u03b9 \u03c4\u03bf \u03ba\u03b1\u03c4\u03ac \u03c0\u03c1\u03bf\u03c3\u03ad\u03b3\u03b3\u03b9\u03c3\u03b7 \u03bc\u03ad\u03b3\u03b9\u03c3\u03c4\u03bf \u03ba\u03b1\u03c4\u03ac ${excess} ${unit}. \u0391\u03bd \u03ba\u03ac\u03b8\u03b5 \u03c0\u03c1\u03cc\u03c4\u03b1\u03c3\u03b7 \u03c0\u03c1\u03bf\u03c3\u03b8\u03ad\u03c4\u03b5\u03b9 \u03b1\u03be\u03af\u03b1 \u2013 \u03c4\u03bf \u03bc\u03ae\u03ba\u03bf\u03c2 \u03b5\u03af\u03bd\u03b1\u03b9 \u03b4\u03b9\u03ba\u03b1\u03b9\u03bf\u03bb\u03bf\u03b3\u03b7\u03bc\u03ad\u03bd\u03bf.`,
    idealInRange:
      '\u03a4\u03bf \u03bc\u03ae\u03ba\u03bf\u03c2 \u03b5\u03af\u03bd\u03b1\u03b9 \u03b5\u03bd\u03c4\u03cc\u03c2 \u03c4\u03bf\u03c5 \u03c3\u03c5\u03bd\u03b9\u03c3\u03c4\u03ce\u03bc\u03b5\u03bd\u03bf\u03c5 \u03b5\u03cd\u03c1\u03bf\u03c5\u03c2. \u0397 \u03b1\u03be\u03af\u03b1 \u03b3\u03b9\u03b1 \u03c4\u03bf\u03bd \u03b1\u03bd\u03b1\u03b3\u03bd\u03ce\u03c3\u03c4\u03b7 \u03b5\u03af\u03bd\u03b1\u03b9 \u03ba\u03bb\u03b5\u03b9\u03b4\u03af.',
    idealGoodLength: (label) =>
      `\u039a\u03b1\u03bb\u03cc \u03bc\u03ae\u03ba\u03bf\u03c2 \u03b3\u03b9\u03b1 ${label.toLowerCase()}. \u039a\u03ac\u03b8\u03b5 \u03c0\u03b1\u03c1\u03ac\u03b3\u03c1\u03b1\u03c6\u03bf\u03c2 \u03c0\u03c1\u03ad\u03c0\u03b5\u03b9 \u03bd\u03b1 \u03c0\u03c1\u03bf\u03c3\u03c6\u03ad\u03c1\u03b5\u03b9 \u03c3\u03c5\u03b3\u03ba\u03b5\u03ba\u03c1\u03b9\u03bc\u03ad\u03bd\u03b7 \u03b1\u03be\u03af\u03b1.`,
    readingTime: (m) => (m === 1 ? '1 \u03bb\u03b5\u03c0\u03c4\u03cc' : `${m} \u03bb\u03b5\u03c0\u03c4\u03ac`),
    report: {
      title: '\ud83d\udcca \u0391\u039d\u0391\u03a6\u039f\u03a1\u0391 \u039c\u0397\u039a\u039f\u03a5\u03a3 \u039a\u0395\u0399\u039c\u0395\u039d\u039f\u03a5',
      pageType: '\u03a4\u03cd\u03c0\u03bf\u03c2 \u03c3\u03b5\u03bb\u03af\u03b4\u03b1\u03c2',
      range: '\u03a3\u03c5\u03bd\u03b9\u03c3\u03c4\u03ce\u03bc\u03b5\u03bd\u03bf \u03b5\u03cd\u03c1\u03bf\u03c2',
      statistics: '\ud83d\udcdd \u03a3\u03a4\u0391\u03a4\u0399\u03a3\u03a4\u0399\u039a\u0391:',
      words: '\u039b\u03ad\u03be\u03b5\u03b9\u03c2',
      charsWithSpaces: '\u03a7\u03b1\u03c1\u03b1\u03ba\u03c4\u03ae\u03c1\u03b5\u03c2 (\u03bc\u03b5 \u03ba\u03b5\u03bd\u03ac)',
      charsWithoutSpaces: '\u03a7\u03b1\u03c1\u03b1\u03ba\u03c4\u03ae\u03c1\u03b5\u03c2 (\u03c7\u03c9\u03c1\u03af\u03c2 \u03ba\u03b5\u03bd\u03ac)',
      paragraphs: '\u03a0\u03b1\u03c1\u03ac\u03b3\u03c1\u03b1\u03c6\u03bf\u03b9',
      readingTime: '\u03a7\u03c1\u03cc\u03bd\u03bf\u03c2 \u03b1\u03bd\u03ac\u03b3\u03bd\u03c9\u03c3\u03b7\u03c2',
      evaluation: '\ud83d\udcc8 \u0391\u039e\u0399\u039f\u039b\u039f\u0393\u0397\u03a3\u0397',
      statusIdeal: '\u2705 \u039a\u03b1\u03bb\u03cc \u03bc\u03ae\u03ba\u03bf\u03c2',
      statusShort: '\u26a0\ufe0f \u03a0\u03bf\u03bb\u03cd \u03ba\u03bf\u03bd\u03c4\u03cc',
      statusLong: '\u26a0\ufe0f \u03a0\u03bf\u03bb\u03cd \u03bc\u03b1\u03ba\u03c1\u03cd',
      generatedBy: '\u0394\u03b7\u03bc\u03b9\u03bf\u03c5\u03c1\u03b3\u03ae\u03b8\u03b7\u03ba\u03b5 \u03b1\u03c0\u03cc: arteonagency.pl/el/ergaleia/metritis-lexeon-kai-charaktiron',
    },
  },
  bg: {
    wordsUnit: '\u0434\u0443\u043c\u0438',
    emptyMessage:
      '\u041f\u043e\u0441\u0442\u0430\u0432\u0435\u0442\u0435 \u0438\u043b\u0438 \u0432\u044a\u0432\u0435\u0434\u0435\u0442\u0435 \u0442\u0435\u043a\u0441\u0442, \u0437\u0430 \u0434\u0430 \u0432\u0438\u0434\u0438\u0442\u0435 \u0430\u043d\u0430\u043b\u0438\u0437\u0430.',
    tooShort: (min, unit, missing) =>
      `\u0422\u0435\u043a\u0441\u0442\u044a\u0442 \u0435 \u043f\u043e\u0434 \u043f\u0440\u0438\u0431\u043b\u0438\u0437\u0438\u0442\u0435\u043b\u043d\u0438\u044f \u043c\u0438\u043d\u0438\u043c\u0443\u043c (${min} ${unit}). \u0410\u043a\u043e \u0442\u0435\u043c\u0430\u0442\u0430 \u0435 \u043f\u043e\u043a\u0440\u0438\u0442\u0430 \u2013 \u043c\u043e\u0436\u0435 \u0434\u0430 \u0435 \u0434\u043e\u0441\u0442\u0430\u0442\u044a\u0447\u043d\u043e. \u041b\u0438\u043f\u0441\u0432\u0430\u0442 \u043e\u043a\u043e\u043b\u043e ${missing} ${unit}.`,
    tooLong: (excess, unit) =>
      `\u0422\u0435\u043a\u0441\u0442\u044a\u0442 \u043f\u0440\u0435\u0432\u0438\u0448\u0430\u0432\u0430 \u043f\u0440\u0438\u0431\u043b\u0438\u0437\u0438\u0442\u0435\u043b\u043d\u0438\u044f \u043c\u0430\u043a\u0441\u0438\u043c\u0443\u043c \u0441 ${excess} ${unit}. \u0410\u043a\u043e \u0432\u0441\u044f\u043a\u043e \u0438\u0437\u0440\u0435\u0447\u0435\u043d\u0438\u0435 \u043d\u043e\u0441\u0438 \u0441\u0442\u043e\u0439\u043d\u043e\u0441\u0442 \u2013 \u0434\u044a\u043b\u0436\u0438\u043d\u0430\u0442\u0430 \u0435 \u043e\u043f\u0440\u0430\u0432\u0434\u0430\u043d\u0430.`,
    idealInRange:
      '\u0414\u044a\u043b\u0436\u0438\u043d\u0430\u0442\u0430 \u0435 \u0432 \u043f\u0440\u0435\u043f\u043e\u0440\u044a\u0447\u0438\u0442\u0435\u043b\u043d\u0438\u044f \u0434\u0438\u0430\u043f\u0430\u0437\u043e\u043d. \u0421\u0442\u043e\u0439\u043d\u043e\u0441\u0442\u0442\u0430 \u0437\u0430 \u0447\u0438\u0442\u0430\u0442\u0435\u043b\u044f \u0435 \u043a\u043b\u044e\u0447\u043e\u0432\u0430.',
    idealGoodLength: (label) =>
      `\u0414\u043e\u0431\u0440\u0430 \u0434\u044a\u043b\u0436\u0438\u043d\u0430 \u0437\u0430 ${label.toLowerCase()}. \u0412\u0441\u0435\u043a\u0438 \u0430\u0431\u0437\u0430\u0446 \u0442\u0440\u044f\u0431\u0432\u0430 \u0434\u0430 \u043d\u043e\u0441\u0438 \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u0430 \u0441\u0442\u043e\u0439\u043d\u043e\u0441\u0442.`,
    readingTime: (m) => (m === 1 ? '1 \u043c\u0438\u043d\u0443\u0442\u0430' : `${m} \u043c\u0438\u043d\u0443\u0442\u0438`),
    report: {
      title: '\ud83d\udcca \u0414\u041e\u041a\u041b\u0410\u0414 \u0417\u0410 \u0414\u042a\u041b\u0416\u0418\u041d\u0410 \u041d\u0410 \u0422\u0415\u041a\u0421\u0422\u0410',
      pageType: '\u0422\u0438\u043f \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430',
      range: '\u041f\u0440\u0435\u043f\u043e\u0440\u044a\u0447\u0438\u0442\u0435\u043b\u0435\u043d \u0434\u0438\u0430\u043f\u0430\u0437\u043e\u043d',
      statistics: '\ud83d\udcdd \u0421\u0422\u0410\u0422\u0418\u0421\u0422\u0418\u041a\u0410:',
      words: '\u0414\u0443\u043c\u0438',
      charsWithSpaces: '\u0417\u043d\u0430\u0446\u0438 (\u0441 \u0438\u043d\u0442\u0435\u0440\u0432\u0430\u043b\u0438)',
      charsWithoutSpaces: '\u0417\u043d\u0430\u0446\u0438 (\u0431\u0435\u0437 \u0438\u043d\u0442\u0435\u0440\u0432\u0430\u043b\u0438)',
      paragraphs: '\u0410\u0431\u0437\u0430\u0446\u0438',
      readingTime: '\u0412\u0440\u0435\u043c\u0435 \u0437\u0430 \u0447\u0435\u0442\u0435\u043d\u0435',
      evaluation: '\ud83d\udcc8 \u041e\u0426\u0415\u041d\u041a\u0410',
      statusIdeal: '\u2705 \u0414\u043e\u0431\u0440\u0430 \u0434\u044a\u043b\u0436\u0438\u043d\u0430',
      statusShort: '\u26a0\ufe0f \u041f\u0440\u0435\u043a\u0430\u043b\u0435\u043d\u043e \u043a\u044a\u0441\u043e',
      statusLong: '\u26a0\ufe0f \u041f\u0440\u0435\u043a\u0430\u043b\u0435\u043d\u043e \u0434\u044a\u043b\u0433\u043e',
      generatedBy: '\u0413\u0435\u043d\u0435\u0440\u0438\u0440\u0430\u043d\u043e \u043e\u0442: arteonagency.pl/bg/instrumenti/broiach-na-dumi-i-simvoli',
    },
  },
  ha: {
    wordsUnit: 'kalmomi',
    emptyMessage: 'Manna ko rubuta rubutu don ganin nazari.',
    tooShort: (min, unit, missing) => `Rubutu yana kasa da mafi karancin da ake tsammani (${min} ${unit}). Idan an rufe batun \u2013 watakila ya isa. Akwai ragi kusan ${missing} ${unit}.`,
    tooLong: (excess, unit) => `Rubutu ya wuce mafi girman da ake tsammani da ${excess} ${unit}. Idan kowace jimla tana da daraja \u2013 tsawon yana da hujja.`,
    idealInRange: 'Tsawon yana cikin kewayon da aka ba da shawarar. Darajar ga mai karatu ita ce mabudin.',
    idealGoodLength: (label) => `Kyakkyawan tsawo don ${label.toLowerCase()}. Kowace sakin layi ya kamata ta ba da wata daraja ga mai karatu.`,
    readingTime: (m) => (m === 1 ? 'Minti 1' : `Mintuna ${m}`),
    report: {
      title: '\ud83d\udcca RAHOTON TSAWON RUBUTU',
      pageType: "Nau'in shafi",
      range: 'Kewayon da aka ba da shawarar',
      statistics: '\ud83d\udcdd KIDIDDIGA:',
      words: 'Kalmomi',
      charsWithSpaces: 'Haruffa (tare da sarari)',
      charsWithoutSpaces: 'Haruffa (ba tare da sarari ba)',
      paragraphs: 'Sakin layi',
      readingTime: 'Lokacin karatu',
      evaluation: '\ud83d\udcc8 KIMANTAWA',
      statusIdeal: '\u2705 Kyakkyawan tsawo',
      statusShort: '\u26a0\ufe0f Gajere sosai',
      statusLong: '\u26a0\ufe0f Doguwa sosai',
      generatedBy: 'An samar da shi: arteonagency.pl/ha/kayan-aiki/kidaya-kalmomi-da-haruffa',
    },
  },
  yo: {
    wordsUnit: '\u1ecdr\u1ecd',
    emptyMessage: 'L\u00e8 tabi t\u1eb9 \u1ecdr\u1ecd lati ri \u00e0t\u00fap\u00e0l\u1eb9\u0300.',
    tooShort: (min, unit, missing) =>
      `\u1ecdr\u1ecd k\u00f9r\u00fa j\u00f9 \u00ecw\u1ecdnt\u00fan\u00ecw\u1ecdns\u00ec t\u00ed a \u015b\u00e0y\u1eb9\u0300w\u00f2 (${min} ${unit}). T\u00ed \u00e0k\u00f3r\u00ed b\u00e1 t\u00ed b\u00f2 \u2013 \u00f3 l\u00e8 t\u00f3. \u00d3 k\u00f9 n\u00ed\u00eckan ${missing} ${unit}.`,
    tooLong: (excess, unit) =>
      `\u1ecdr\u1ecd p\u1ecd j\u00f9 \u00ecw\u1ecdnt\u00fan\u00ecw\u1ecdns\u00ec n\u00ed ${excess} ${unit}. T\u00ed gb\u00f3gb\u00f3 gb\u00f3l\u00f3h\u00f9n b\u00e1 \u00fan \u00ecy\u00ed \u2013 g\u00edg\u00f9n n\u00e1\u00e0 t\u1ecd\u0301.`,
    idealInRange:
      'G\u00edg\u00f9n w\u00e0 l\u00e1\u00e0r\u00ecn \u00ecw\u1ecdnt\u00fan\u00ecw\u1ecdns\u00ec t\u00ed a \u015b\u00e0b\u00e0. \u00ccy\u00ed f\u00fan ol\u00f9k\u00e0 ni p\u00e0t\u00e0k\u00ec.',
    idealGoodLength: (label) =>
      `G\u00edg\u00f9n t\u00f3 d\u00e1ra f\u00fan ${label.toLowerCase()}. Gb\u00f3gb\u00f3 \u00ec\u00fap\u00ecn y\u1eb9 k\u00ed \u00f3 m\u00fa \u00ecy\u00ed w\u00e1 f\u00fan ol\u00f9k\u00e0.`,
    readingTime: (m) => (m === 1 ? '\u00ccs\u1eb9\u0301j\u00fa 1' : `\u00ccs\u1eb9\u0301j\u00fa ${m}`),
    report: {
      title: '\ud83d\udcca \u00ccJ\u00c1B\u1ecc\u0300 G\u00cdG\u00d9N \u1eccR\u1ecc',
      pageType: 'Ir\u00fa oj\u00fa-\u00ecw\u00e9',
      range: '\u00ccw\u1ecdnt\u00fan\u00ecw\u1ecdns\u00ec t\u00ed a \u015b\u00e0b\u00e0',
      statistics: '\ud83d\udcdd \u00ccD\u00cdY\u00c9L\u00c9:',
      words: '\u1eccr\u1ecd',
      charsWithSpaces: 'L\u1eb9\u0301t\u00e0 (\u00e0ti \u00e0l\u00e0f\u00f3)',
      charsWithoutSpaces: 'L\u1eb9\u0301t\u00e0 (l\u00e1\u00ecl\u00e1\u00ec \u00e0l\u00e0f\u00f3)',
      paragraphs: '\u00ccpin',
      readingTime: '\u00c0k\u00f3k\u00f2 k\u00edk\u00e0',
      evaluation: '\ud83d\udcc8 \u00c0Y\u1eb8\u0300W\u00d2',
      statusIdeal: '\u2705 G\u00edg\u00f9n t\u00f3 d\u00e1ra',
      statusShort: '\u26a0\ufe0f K\u00far\u00fa j\u00f9',
      statusLong: '\u26a0\ufe0f Gun j\u00f9',
      generatedBy: '\u1e62\u00e8d\u00e1 n\u00edp\u0430s\u1eb9\u0300: arteonagency.pl/yo/awon-irinse/oluka-oro-ati-ohun-kikoo',
    },
  },
  af: {
    wordsUnit: 'woorde',
    emptyMessage: 'Plak of tik teks om die ontleding te sien.',
    tooShort: (min, unit, missing) => `Teks is onder die benaderde minimum (${min} ${unit}). As die onderwerp gedek is \u2013 kan dit genoeg wees. Ongeveer ${missing} ${unit} kort.`,
    tooLong: (excess, unit) => `Teks oorskry die benaderde maksimum met ${excess} ${unit}. As elke sin waarde toevoeg \u2013 is die lengte geregverdig.`,
    idealInRange: 'Lengte is binne die aanbevole reeks. Waarde vir die leser is die sleutel.',
    idealGoodLength: (label) => `Goeie lengte vir ${label.toLowerCase()}. Elke paragraaf behoort konkrete waarde vir die leser te bied.`,
    readingTime: (m) => (m === 1 ? '1 minuut' : `${m} minute`),
    report: {
      title: '\ud83d\udcca TEKSLENGTEVERSLAG',
      pageType: 'Bladsytipe',
      range: 'Aanbevole reeks',
      statistics: '\ud83d\udcdd STATISTIEKE:',
      words: 'Woorde',
      charsWithSpaces: 'Karakters (met spasies)',
      charsWithoutSpaces: 'Karakters (sonder spasies)',
      paragraphs: 'Paragrawe',
      readingTime: 'Leestyd',
      evaluation: '\ud83d\udcc8 EVALUERING',
      statusIdeal: '\u2705 Goeie lengte',
      statusShort: '\u26a0\ufe0f Te kort',
      statusLong: '\u26a0\ufe0f Te lank',
      generatedBy: 'Gegenereer deur: arteonagency.pl/af/gereedskap/woord-en-karakter-teller',
    },
  },
  uk: {
    wordsUnit: 'слів',
    emptyMessage: 'Вставте або введіть текст, щоб побачити аналіз.',
    tooShort: (min, unit, missing) => `Текст нижче орієнтовного мінімуму (${min} ${unit}). Якщо тему розкрито \u2014 цього може бути достатньо. Бракує близько ${missing} ${unit}.`,
    tooLong: (excess, unit) => `Текст перевищує орієнтовний максимум на ${excess} ${unit}. Якщо кожне речення несе цінність \u2014 довжина виправдана.`,
    idealInRange: 'Довжина в рекомендованому діапазоні. Цінність для читача \u2014 головне, а діапазони служать орієнтиром.',
    idealGoodLength: (label) => `Гарна довжина для ${label.toLowerCase()}. Кожен абзац повинен нести конкретну цінність для читача.`,
    readingTime: (m) => (m === 1 ? '1 хвилина' : m >= 2 && m <= 4 ? `${m} хвилини` : `${m} хвилин`),
    report: {
      title: '\ud83d\udcca ЗВІТ ПРО ДОВЖИНУ ТЕКСТУ',
      pageType: 'Тип сторінки',
      range: 'Рекомендований діапазон',
      statistics: '\ud83d\udcdd СТАТИСТИКА:',
      words: 'Слова',
      charsWithSpaces: 'Символи (з пробілами)',
      charsWithoutSpaces: 'Символи (без пробілів)',
      paragraphs: 'Абзаци',
      readingTime: 'Час читання',
      evaluation: '\ud83d\udcc8 ОЦІНКА',
      statusIdeal: '\u2705 Гарна довжина',
      statusShort: '\u26a0\ufe0f Занадто коротко',
      statusLong: '\u26a0\ufe0f Занадто довго',
      generatedBy: 'Згенеровано: arteonagency.pl/uk/instrumenty/lichylnyk-sliv-i-symvoliv',
    },
  },
  ceb: {
    wordsUnit: 'mga pulong',
    emptyMessage: 'Pag-paste o pag-type og teksto aron makita ang pag-analisa.',
    tooShort: (min, unit, missing) => `Ang teksto ubos sa gibanabana nga minimum (${min} ${unit}). Kung nahisgutan na ang topiko \u2014 basin igo na kini. Kulang og mga ${missing} ${unit}.`,
    tooLong: (excess, unit) => `Ang teksto milabaw sa gibanabana nga maximum og ${excess} ${unit}. Kung matag sentence adunay bili \u2014 ang gitas-on husto.`,
    idealInRange: 'Ang gitas-on anaa sa girekomenda nga sakop. Ang bili para sa magbabasa mao ang yawe \u2014 ang mga sakop nagserbisyo isip punto sa reperensya.',
    idealGoodLength: (label) => `Maayo nga gitas-on para sa ${label.toLowerCase()}. Matag parapo kinahanglan magdala og konkreto nga bili para sa magbabasa.`,
    readingTime: (m) => (m === 1 ? '1 minuto' : `${m} minuto`),
    report: {
      title: '\ud83d\udcca REPORT SA GITAS-ON SA TEKSTO',
      pageType: 'Tipo sa panid',
      range: 'Girekomenda nga sakop',
      statistics: '\ud83d\udcdd ESTADISTIKA:',
      words: 'Mga pulong',
      charsWithSpaces: 'Mga karakter (may espasyo)',
      charsWithoutSpaces: 'Mga karakter (walay espasyo)',
      paragraphs: 'Mga parapo',
      readingTime: 'Oras sa pagbasa',
      evaluation: '\ud83d\udcc8 EBALWASYON',
      statusIdeal: '\u2705 Maayo nga gitas-on',
      statusShort: '\u26a0\ufe0f Mubo kaayo',
      statusLong: '\u26a0\ufe0f Taas kaayo',
      generatedBy: 'Gihimo sa: arteonagency.pl/ceb/mga-himan/tigihap-sa-pulong-ug-karakter',
    },
  },
  ig: {
    wordsUnit: 'okwu',
    emptyMessage: 'Mado ma ọ bụ dee ederede iji hụ nyocha.',
    tooShort: (min, unit, missing) => `Ederede dị n'okpuru nke kachasị nta (${min} ${unit}). Ọ bụrụ na isiokwu zuru ezu — nke a nwere ike ịkwu. Ọ dị mkpa ihe dịka ${missing} ${unit}.`,
    tooLong: (excess, unit) => `Ederede karịrị nke kachasị site na ${excess} ${unit}. Ọ bụrụ na ahiriị okwu ọ bụla na-enye uru — ogologo kwesịrị ekwesị.`,
    idealInRange: 'Ogologo dị n’oke a tụrụ aro. Uru maka onye ọgụ bụ nke kachasị mkpa — oke na-ejeịrị dịka ebe ntugharị.',
    idealGoodLength: (label) => `Ogologo dị mma maka ${label.toLowerCase()}. Paragraf ọ bụla kwesịrị ịnye onye ọgụ uru dị ịchị.`,
    readingTime: (m) => (m === 1 ? '1 nkeji' : `${m} nkeji`),
    report: {
      title: '\ud83d\udcca AKỤKỌ OGOLOGO EDEREDE',
      pageType: '\u1ee4dị peeji',
      range: 'Oke a tụrụ aro',
      statistics: '\ud83d\udcdd \u1eccN\u1ee4\u1eccG\u1ee4:',
      words: 'Okwu',
      charsWithSpaces: 'Mkpụrụedemede (nwere oghere)',
      charsWithoutSpaces: 'Mkpụrụedemede (enweghị oghere)',
      paragraphs: 'Paragraf',
      readingTime: 'Oge ọgụ',
      evaluation: '\ud83d\udcc8 NYOCHA',
      statusIdeal: '\u2705 Ogologo dị mma',
      statusShort: '\u26a0\ufe0f Dị mkpụmkpụ',
      statusLong: '\u26a0\ufe0f Dị ogologo',
      generatedBy: 'Mepụtara site na: arteonagency.pl/ig/ngwa-oru/agu-okwu-na-mkpuruedemede',
    },
  },
  hi: {
    wordsUnit: 'शब्द',
    emptyMessage: 'विश्लेषण देखने के लिए टेक्स्ट पेस्ट करें या टाइप करें।',
    tooShort: (min, unit, missing) => `टेक्स्ट अनुमानित न्यूनतम (${min} ${unit}) से कम है। यदि विषय पूरा हो गया है — तो यह पर्याप्त हो सकता है। लगभग ${missing} ${unit} की कमी है।`,
    tooLong: (excess, unit) => `टेक्स्ट अनुमानित अधिकतम से ${excess} ${unit} अधिक है। यदि हर वाक्य मूल्य जोड़ता है — तो लंबाई उचित है।`,
    idealInRange: 'लंबाई अनुशंसित सीमा में है। पाठक के लिए मूल्य सबसे महत्वपूर्ण है — सीमाएँ संदर्भ बिंदु हैं।',
    idealGoodLength: (label) => `${label} के लिए अच्छी लंबाई। हर पैराग्राफ को पाठक के लिए ठोस मूल्य प्रदान करना चाहिए।`,
    readingTime: (m) => (m === 1 ? '1 मिनट' : `${m} मिनट`),
    report: {
      title: '\ud83d\udcca टेक्स्ट लंबाई रिपोर्ट',
      pageType: 'पेज का प्रकार',
      range: 'अनुशंसित सीमा',
      statistics: '\ud83d\udcdd आँकड़े:',
      words: 'शब्द',
      charsWithSpaces: 'अक्षर (स्पेस सहित)',
      charsWithoutSpaces: 'अक्षर (बिना स्पेस)',
      paragraphs: 'पैराग्राफ',
      readingTime: 'पढ़ने का समय',
      evaluation: '\ud83d\udcc8 मूल्यांकन',
      statusIdeal: '\u2705 अच्छी लंबाई',
      statusShort: '\u26a0\ufe0f बहुत छोटा',
      statusLong: '\u26a0\ufe0f बहुत लंबा',
      generatedBy: 'जनरेट किया: arteonagency.pl/hi/upkaran/shabd-ganak',
    },
  },
  bn: {
    wordsUnit: 'শব্দ',
    emptyMessage: 'বিশ্লেষণ দেখতে টেক্সট পেস্ট করুন বা টাইপ করুন।',
    tooShort: (min, unit, missing) => `টেক্সট আনুমানিক ন্যূনতম (${min} ${unit}) এর চেয়ে কম। বিষয় সম্পূর্ণ হলে — এটি যথেষ্ট হতে পারে। প্রায় ${missing} ${unit} কম আছে।`,
    tooLong: (excess, unit) => `টেক্সট আনুমানিক সর্বোচ্চ থেকে ${excess} ${unit} বেশি। প্রতিটি বাক্য মূল্য যোগ করলে — দৈর্ঘ্য যুক্তিসঙ্গত।`,
    idealInRange: 'দৈর্ঘ্য সুপারিশকৃত সীমায় আছে। পাঠকের জন্য মূল্য সবচেয়ে গুরুত্বপূর্ণ — সীমাগুলো রেফারেন্স পয়েন্ট।',
    idealGoodLength: (label) => `${label} এর জন্য ভালো দৈর্ঘ্য। প্রতিটি অনুচ্ছেদ পাঠকের জন্য সুনির্দিষ্ট মূল্য প্রদান করা উচিত।`,
    readingTime: (m) => (m === 1 ? '1 মিনিট' : `${m} মিনিট`),
    report: {
      title: '\ud83d\udcca টেক্সট দৈর্ঘ্য রিপোর্ট',
      pageType: 'পেজের ধরন',
      range: 'সুপারিশকৃত সীমা',
      statistics: '\ud83d\udcdd পরিসংখ্যান:',
      words: 'শব্দ',
      charsWithSpaces: 'অক্ষর (স্পেসসহ)',
      charsWithoutSpaces: 'অক্ষর (স্পেস ছাড়া)',
      paragraphs: 'অনুচ্ছেদ',
      readingTime: 'পড়ার সময়',
      evaluation: '\ud83d\udcc8 মূল্যায়ন',
      statusIdeal: '\u2705 ভালো দৈর্ঘ্য',
      statusShort: '\u26a0\ufe0f খুব ছোট',
      statusLong: '\u26a0\ufe0f খুব লম্বা',
      generatedBy: 'তৈরি করেছে: arteonagency.pl/bn/yantra/shobdo-gonok',
    },
  },
};

// ---------------------------------------------------------------------------
// Evaluation helpers
// ---------------------------------------------------------------------------

export function evaluateLength(words: number, pageType: PageTypeConfig, locale: Locale = 'pl'): LengthEvaluation {
  const t = EVAL_UI[locale];

  if (words === 0) {
    return { status: 'empty', percentage: 0, message: t.emptyMessage };
  }

  const { minWords, maxWords } = pageType;
  const midPoint = (minWords + maxWords) / 2;

  if (words < minWords) {
    const percentage = Math.round((words / minWords) * 100);
    const missing = minWords - words;
    return { status: 'too-short', percentage: Math.min(percentage, 99), message: t.tooShort(minWords, t.wordsUnit, missing) };
  }

  if (words > maxWords) {
    const excess = words - maxWords;
    return { status: 'too-long', percentage: 100, message: t.tooLong(excess, t.wordsUnit) };
  }

  const percentage = Math.round(((words - minWords) / (maxWords - minWords)) * 100);

  if (words < midPoint) {
    return { status: 'ideal', percentage: Math.max(percentage, 1), message: t.idealInRange };
  }

  return { status: 'ideal', percentage, message: t.idealGoodLength(pageType.label) };
}

export function formatReadingTime(minutes: number, locale: Locale = 'pl'): string {
  return EVAL_UI[locale].readingTime(minutes);
}

export function formatReportText(metrics: TextMetrics, pageType: PageTypeConfig, evaluation: LengthEvaluation, locale: Locale = 'pl'): string {
  const r = EVAL_UI[locale].report;
  const statusLabel = evaluation.status === 'ideal' ? r.statusIdeal : evaluation.status === 'too-short' ? r.statusShort : evaluation.status === 'too-long' ? r.statusLong : '-';

  const lines = [
    r.title,
    '\u2500'.repeat(30),
    `${r.pageType}: ${pageType.label}`,
    `${r.range}: ${pageType.minWords}\u2013${pageType.maxWords} ${EVAL_UI[locale].wordsUnit}`,
    '',
    r.statistics,
    `\u2022 ${r.words}: ${metrics.words}`,
    `\u2022 ${r.charsWithSpaces}: ${metrics.charsWithSpaces}`,
    `\u2022 ${r.charsWithoutSpaces}: ${metrics.charsWithoutSpaces}`,
    `\u2022 ${r.paragraphs}: ${metrics.paragraphs}`,
    `\u2022 ${r.readingTime}: ${formatReadingTime(metrics.readingTimeMinutes, locale)}`,
    '',
    `${r.evaluation}: ${statusLabel}`,
    evaluation.message,
    '',
    '\u2500'.repeat(30),
    r.generatedBy,
  ];

  return lines.join('\n');
}
