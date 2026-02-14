import type { Locale } from '@/types/locale';
import type { PageTypeConfig, TextMetrics, LengthEvaluation } from '@/types/tools/text';
export type { PageType, PageTypeConfig, LengthStatus, TextMetrics, LengthEvaluation } from '@/types/tools/text';

// ---------------------------------------------------------------------------
// Page type definitions per locale (Record<Locale> enforces completeness)
// ---------------------------------------------------------------------------
const PAGE_TYPES: Record<Locale, PageTypeConfig[]> = {
  pl: [
    {
      key: 'product',
      label: 'Opis produktu w sklepie',
      minWords: 80,
      maxWords: 400,
      description: 'Im prostszy produkt, tym krótszy opis. Złożony sprzęt (np. elektronika) wymaga więcej wyjaśnień i specyfikacji.',
    },
    { key: 'service', label: 'Strona usługi', minWords: 500, maxWords: 1500, description: 'Prosta usługa lokalna wymaga mniej słów. Złożona oferta z wieloma etapami i pytaniami klientów - więcej.' },
    {
      key: 'homepage',
      label: 'Strona główna',
      minWords: 400,
      maxWords: 1000,
      description: 'Strona główna to miejsce, które kieruje dalej do podstron. Jasny przekaz i czytelna struktura ułatwiają nawigację.',
    },
    { key: 'landing', label: 'Strona ofertowa', minWords: 600, maxWords: 2500, description: 'Droższa oferta wymaga więcej wyjaśnień i budowania zaufania. Prosta oferta może być krótsza.' },
    {
      key: 'blog',
      label: 'Artykuł blogowy',
      minWords: 1200,
      maxWords: 3000,
      description: 'Długość zależy od złożoności tematu. Tekst powinien odpowiadać na pytania czytelnika w sposób wyczerpujący i konkretny.',
    },
    { key: 'guide', label: 'Poradnik / przewodnik', minWords: 2500, maxWords: 6000, description: 'Szczegółowe opracowanie tematu z wieloma aspektami. Długość zależy od zakresu zagadnienia.' },
  ],
  en: [
    {
      key: 'product',
      label: 'Product description',
      minWords: 80,
      maxWords: 400,
      description: 'Simple products need shorter descriptions. Complex items (e.g. electronics) require more detail and specifications.',
    },
    {
      key: 'service',
      label: 'Service page',
      minWords: 500,
      maxWords: 1500,
      description: 'A simple local service needs fewer words. A complex offering with multiple stages and client questions needs more.',
    },
    { key: 'homepage', label: 'Homepage', minWords: 400, maxWords: 1000, description: 'The homepage guides visitors to subpages. A clear message and readable structure make navigation easier.' },
    { key: 'landing', label: 'Landing page', minWords: 600, maxWords: 2500, description: 'Higher-priced offers require more explanation and trust-building. Simple offers can be shorter.' },
    { key: 'blog', label: 'Blog post', minWords: 1200, maxWords: 3000, description: "Length depends on topic complexity. The text should answer the reader's questions thoroughly and concisely." },
    { key: 'guide', label: 'Guide / tutorial', minWords: 2500, maxWords: 6000, description: 'A detailed treatment of a topic with many aspects. Length depends on the scope of the subject.' },
  ],
  de: [
    {
      key: 'product',
      label: 'Produktbeschreibung',
      minWords: 80,
      maxWords: 400,
      description: 'Je einfacher das Produkt, desto kürzer die Beschreibung. Komplexe Produkte (z.\u00a0B. Elektronik) erfordern mehr Erklärungen und Spezifikationen.',
    },
    {
      key: 'service',
      label: 'Dienstleistungsseite',
      minWords: 500,
      maxWords: 1500,
      description: 'Eine einfache lokale Dienstleistung braucht weniger Text. Ein komplexes Angebot mit mehreren Schritten und häufigen Fragen erfordert mehr.',
    },
    {
      key: 'homepage',
      label: 'Startseite',
      minWords: 400,
      maxWords: 1000,
      description: 'Die Startseite leitet Besucher zu Unterseiten weiter. Eine klare Botschaft und übersichtliche Struktur erleichtern die Navigation.',
    },
    { key: 'landing', label: 'Landingpage', minWords: 600, maxWords: 2500, description: 'Teurere Angebote erfordern mehr Erklärung und Vertrauensaufbau. Ein einfaches Angebot kann kürzer sein.' },
    {
      key: 'blog',
      label: 'Blogartikel',
      minWords: 1200,
      maxWords: 3000,
      description: 'Die Länge hängt von der Komplexität des Themas ab. Der Text sollte die Fragen des Lesers gründlich und konkret beantworten.',
    },
    {
      key: 'guide',
      label: 'Ratgeber / Leitfaden',
      minWords: 2500,
      maxWords: 6000,
      description: 'Eine ausführliche Behandlung eines Themas mit vielen Aspekten. Die Länge hängt vom Umfang des Themas ab.',
    },
  ],
  es: [
    {
      key: 'product',
      label: 'Descripción de producto',
      minWords: 80,
      maxWords: 400,
      description: 'Cuanto más sencillo el producto, más corta la descripción. Productos complejos (p.\u00a0ej. electrónica) requieren más explicaciones y especificaciones.',
    },
    {
      key: 'service',
      label: 'Página de servicio',
      minWords: 500,
      maxWords: 1500,
      description: 'Un servicio local sencillo necesita menos texto. Una oferta compleja con varias etapas y preguntas frecuentes requiere más.',
    },
    {
      key: 'homepage',
      label: 'Página de inicio',
      minWords: 400,
      maxWords: 1000,
      description: 'La página de inicio dirige a los visitantes a las subpáginas. Un mensaje claro y una estructura legible facilitan la navegación.',
    },
    {
      key: 'landing',
      label: 'Landing page',
      minWords: 600,
      maxWords: 2500,
      description: 'Las ofertas de mayor precio requieren más explicación y generación de confianza. Una oferta sencilla puede ser más corta.',
    },
    {
      key: 'blog',
      label: 'Artículo de blog',
      minWords: 1200,
      maxWords: 3000,
      description: 'La extensión depende de la complejidad del tema. El texto debe responder a las preguntas del lector de forma completa y concreta.',
    },
    { key: 'guide', label: 'Guía / tutorial', minWords: 2500, maxWords: 6000, description: 'Un tratamiento detallado de un tema con muchos aspectos. La extensión depende del alcance del asunto.' },
  ],
  fr: [
    {
      key: 'product',
      label: 'Description de produit',
      minWords: 80,
      maxWords: 400,
      description: "Plus le produit est simple, plus la description est courte. Les produits complexes (ex.\u00a0: électronique) nécessitent plus d'explications et de spécifications.",
    },
    {
      key: 'service',
      label: 'Page de service',
      minWords: 500,
      maxWords: 1500,
      description: 'Un service local simple nécessite moins de texte. Une offre complexe avec plusieurs étapes et questions fréquentes en demande davantage.',
    },
    {
      key: 'homepage',
      label: "Page d'accueil",
      minWords: 400,
      maxWords: 1000,
      description: "La page d'accueil oriente les visiteurs vers les sous-pages. Un message clair et une structure lisible facilitent la navigation.",
    },
    {
      key: 'landing',
      label: "Page d'atterrissage",
      minWords: 600,
      maxWords: 2500,
      description: "Les offres plus coûteuses nécessitent plus d'explications et de mise en confiance. Une offre simple peut être plus courte.",
    },
    {
      key: 'blog',
      label: 'Article de blog',
      minWords: 1200,
      maxWords: 3000,
      description: 'La longueur dépend de la complexité du sujet. Le texte doit répondre aux questions du lecteur de manière complète et concrète.',
    },
    {
      key: 'guide',
      label: 'Guide / tutoriel',
      minWords: 2500,
      maxWords: 6000,
      description: "Un traitement détaillé d'un sujet comportant de nombreux aspects. La longueur dépend de l'ampleur du sujet.",
    },
  ],
  pt: [
    {
      key: 'product',
      label: 'Descrição de produto',
      minWords: 80,
      maxWords: 400,
      description: 'Quanto mais simples o produto, mais curta a descrição. Produtos complexos (ex.: eletrónica) exigem mais explicações e especificações.',
    },
    {
      key: 'service',
      label: 'Página de serviço',
      minWords: 500,
      maxWords: 1500,
      description: 'Um serviço local simples necessita de menos texto. Uma oferta complexa com várias etapas e perguntas frequentes exige mais.',
    },
    {
      key: 'homepage',
      label: 'Página inicial',
      minWords: 400,
      maxWords: 1000,
      description: 'A página inicial direciona os visitantes para as subpáginas. Uma mensagem clara e uma estrutura legível facilitam a navegação.',
    },
    {
      key: 'landing',
      label: 'Landing page',
      minWords: 600,
      maxWords: 2500,
      description: 'Ofertas de preço mais elevado exigem mais explicação e construção de confiança. Uma oferta simples pode ser mais curta.',
    },
    {
      key: 'blog',
      label: 'Artigo de blog',
      minWords: 1200,
      maxWords: 3000,
      description: 'O comprimento depende da complexidade do tema. O texto deve responder às perguntas do leitor de forma completa e concreta.',
    },
    { key: 'guide', label: 'Guia / tutorial', minWords: 2500, maxWords: 6000, description: 'Um tratamento detalhado de um tema com muitos aspetos. O comprimento depende do âmbito do assunto.' },
  ],
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
// Evaluation & report i18n (Record<Locale> enforces completeness)
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
      generatedBy: 'Erstellt mit: arteonagency.pl/de/werkzeuge/wort-und-zeichenzaehler',
    },
  },
  es: {
    wordsUnit: 'palabras',
    emptyMessage: 'Pega o escribe un texto para ver el análisis.',
    tooShort: (min, unit, missing) => `El texto está por debajo del mínimo aproximado (${min} ${unit}). Si el tema está cubierto, puede ser suficiente. Faltan unas ${missing} ${unit}.`,
    tooLong: (excess, unit) => `El texto supera el máximo aproximado en ${excess} ${unit}. Si cada frase aporta valor, la extensión está justificada.`,
    idealInRange: 'La extensión está dentro del rango recomendado. El valor para el lector es clave: los rangos sirven como referencia.',
    idealGoodLength: (label) => `Buena extensión para ${label.toLowerCase()}. Cada párrafo debería aportar valor concreto al lector.`,
    readingTime: (m) => (m === 1 ? '1 minuto' : `${m} minutos`),
    report: {
      title: '📊 INFORME DE EXTENSIÓN DEL TEXTO',
      pageType: 'Tipo de página',
      range: 'Rango recomendado',
      statistics: '📝 ESTADÍSTICAS:',
      words: 'Palabras',
      charsWithSpaces: 'Caracteres (con espacios)',
      charsWithoutSpaces: 'Caracteres (sin espacios)',
      paragraphs: 'Párrafos',
      readingTime: 'Tiempo de lectura',
      evaluation: '📈 EVALUACIÓN',
      statusIdeal: '✅ Buena extensión',
      statusShort: '⚠️ Demasiado corto',
      statusLong: '⚠️ Demasiado largo',
      generatedBy: 'Generado por: arteonagency.pl/es/herramientas/contador-de-palabras-y-caracteres',
    },
  },
  fr: {
    wordsUnit: 'mots',
    emptyMessage: "Collez ou saisissez un texte pour voir l'analyse.",
    tooShort: (min, unit, missing) => `Le texte est en dessous du minimum approximatif (${min} ${unit}). Si le sujet est couvert, cela peut suffire. Il manque environ ${missing} ${unit}.`,
    tooLong: (excess, unit) => `Le texte dépasse le maximum approximatif de ${excess} ${unit}. Si chaque phrase apporte de la valeur, la longueur est justifiée.`,
    idealInRange: 'La longueur se situe dans la plage recommandée. La valeur pour le lecteur est essentielle\u00a0: les plages servent de référence.',
    idealGoodLength: (label) => `Bonne longueur pour ${label.toLowerCase()}. Chaque paragraphe devrait apporter une valeur concrète au lecteur.`,
    readingTime: (m) => (m === 1 ? '1 minute' : `${m} minutes`),
    report: {
      title: '\ud83d\udcca RAPPORT DE LONGUEUR DU TEXTE',
      pageType: 'Type de page',
      range: 'Plage recommandée',
      statistics: '\ud83d\udcdd STATISTIQUES\u00a0:',
      words: 'Mots',
      charsWithSpaces: 'Caractères (avec espaces)',
      charsWithoutSpaces: 'Caractères (sans espaces)',
      paragraphs: 'Paragraphes',
      readingTime: 'Temps de lecture',
      evaluation: '\ud83d\udcc8 \u00c9VALUATION',
      statusIdeal: '\u2705 Bonne longueur',
      statusShort: '\u26a0\ufe0f Trop court',
      statusLong: '\u26a0\ufe0f Trop long',
      generatedBy: 'Généré par\u00a0: arteonagency.pl/fr/outils/compteur-de-mots-et-caracteres',
    },
  },
  pt: {
    wordsUnit: 'palavras',
    emptyMessage: 'Cole ou escreva um texto para ver a análise.',
    tooShort: (min, unit, missing) => `O texto está abaixo do mínimo aproximado (${min} ${unit}). Se o tema está coberto, pode ser suficiente. Faltam cerca de ${missing} ${unit}.`,
    tooLong: (excess, unit) => `O texto excede o máximo aproximado em ${excess} ${unit}. Se cada frase acrescenta valor, o comprimento é justificado.`,
    idealInRange: 'O comprimento está dentro do intervalo recomendado. O valor para o leitor é fundamental\u00a0: os intervalos servem como referência.',
    idealGoodLength: (label) => `Bom comprimento para ${label.toLowerCase()}. Cada parágrafo deve oferecer valor concreto ao leitor.`,
    readingTime: (m) => (m === 1 ? '1 minuto' : `${m} minutos`),
    report: {
      title: '\ud83d\udcca RELATÓRIO DE COMPRIMENTO DO TEXTO',
      pageType: 'Tipo de página',
      range: 'Intervalo recomendado',
      statistics: '\ud83d\udcdd ESTATÍSTICAS:',
      words: 'Palavras',
      charsWithSpaces: 'Caracteres (com espaços)',
      charsWithoutSpaces: 'Caracteres (sem espaços)',
      paragraphs: 'Parágrafos',
      readingTime: 'Tempo de leitura',
      evaluation: '\ud83d\udcc8 AVALIAÇÃO',
      statusIdeal: '\u2705 Bom comprimento',
      statusShort: '\u26a0\ufe0f Demasiado curto',
      statusLong: '\u26a0\ufe0f Demasiado longo',
      generatedBy: 'Gerado por: arteonagency.pl/pt/ferramentas/contador-de-palavras-e-caracteres',
    },
  },
};

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
    '─'.repeat(30),
    `${r.pageType}: ${pageType.label}`,
    `${r.range}: ${pageType.minWords}–${pageType.maxWords} ${EVAL_UI[locale].wordsUnit}`,
    '',
    r.statistics,
    `• ${r.words}: ${metrics.words}`,
    `• ${r.charsWithSpaces}: ${metrics.charsWithSpaces}`,
    `• ${r.charsWithoutSpaces}: ${metrics.charsWithoutSpaces}`,
    `• ${r.paragraphs}: ${metrics.paragraphs}`,
    `• ${r.readingTime}: ${formatReadingTime(metrics.readingTimeMinutes, locale)}`,
    '',
    `${r.evaluation}: ${statusLabel}`,
    evaluation.message,
    '',
    '─'.repeat(30),
    r.generatedBy,
  ];

  return lines.join('\n');
}
