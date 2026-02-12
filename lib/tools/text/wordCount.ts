import type { Locale } from '@/types/locale';
import type { PageTypeConfig, TextMetrics, LengthEvaluation } from '@/types/tools/text';
export type { PageType, PageTypeConfig, LengthStatus, TextMetrics, LengthEvaluation } from '@/types/tools/text';

const PAGE_TYPES_PL: PageTypeConfig[] = [
  {
    key: 'product',
    label: 'Opis produktu w sklepie',
    minWords: 80,
    maxWords: 400,
    description: 'Im prostszy produkt, tym krótszy opis. Złożony sprzęt (np. elektronika) wymaga więcej wyjaśnień i specyfikacji.',
  },
  {
    key: 'service',
    label: 'Strona usługi',
    minWords: 500,
    maxWords: 1500,
    description: 'Prosta usługa lokalna wymaga mniej słów. Złożona oferta z wieloma etapami i pytaniami klientów - więcej.',
  },
  {
    key: 'homepage',
    label: 'Strona główna',
    minWords: 400,
    maxWords: 1000,
    description: 'Strona główna to miejsce, które kieruje dalej do podstron. Jasny przekaz i czytelna struktura ułatwiają nawigację.',
  },
  {
    key: 'landing',
    label: 'Strona ofertowa',
    minWords: 600,
    maxWords: 2500,
    description: 'Droższa oferta wymaga więcej wyjaśnień i budowania zaufania. Prosta oferta może być krótsza.',
  },
  {
    key: 'blog',
    label: 'Artykuł blogowy',
    minWords: 1200,
    maxWords: 3000,
    description: 'Długość zależy od złożoności tematu. Tekst powinien odpowiadać na pytania czytelnika w sposób wyczerpujący i konkretny.',
  },
  {
    key: 'guide',
    label: 'Poradnik / przewodnik',
    minWords: 2500,
    maxWords: 6000,
    description: 'Szczegółowe opracowanie tematu z wieloma aspektami. Długość zależy od zakresu zagadnienia.',
  },
];

const PAGE_TYPES_EN: PageTypeConfig[] = [
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
  {
    key: 'homepage',
    label: 'Homepage',
    minWords: 400,
    maxWords: 1000,
    description: 'The homepage guides visitors to subpages. A clear message and readable structure make navigation easier.',
  },
  {
    key: 'landing',
    label: 'Landing page',
    minWords: 600,
    maxWords: 2500,
    description: 'Higher-priced offers require more explanation and trust-building. Simple offers can be shorter.',
  },
  {
    key: 'blog',
    label: 'Blog post',
    minWords: 1200,
    maxWords: 3000,
    description: "Length depends on topic complexity. The text should answer the reader's questions thoroughly and concisely.",
  },
  {
    key: 'guide',
    label: 'Guide / tutorial',
    minWords: 2500,
    maxWords: 6000,
    description: 'A detailed treatment of a topic with many aspects. Length depends on the scope of the subject.',
  },
];

export function getPageTypes(locale: Locale): PageTypeConfig[] {
  return locale === 'en' ? PAGE_TYPES_EN : PAGE_TYPES_PL;
}

export const PAGE_TYPES = PAGE_TYPES_PL;

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

export function evaluateLength(words: number, pageType: PageTypeConfig, locale: Locale = 'pl'): LengthEvaluation {
  if (words === 0) {
    return {
      status: 'empty',
      percentage: 0,
      message: locale === 'en' ? 'Paste or type text to see the analysis.' : 'Wklej lub wpisz tekst, aby zobaczyć analizę.',
    };
  }

  const { minWords, maxWords } = pageType;
  const midPoint = (minWords + maxWords) / 2;
  const wordsLabel = locale === 'en' ? 'words' : 'słów';

  if (words < minWords) {
    const percentage = Math.round((words / minWords) * 100);
    const missing = minWords - words;
    return {
      status: 'too-short',
      percentage: Math.min(percentage, 99),
      message:
        locale === 'en'
          ? `Text is below the approximate minimum (${minWords} ${wordsLabel}). If the topic is covered - it may be enough. About ${missing} words short.`
          : `Tekst poniżej orientacyjnego minimum (${minWords} ${wordsLabel}). Jeśli temat jest wyczerpany - to może wystarczyć. Brakuje około ${missing} ${wordsLabel}.`,
    };
  }

  if (words > maxWords) {
    const excess = words - maxWords;
    return {
      status: 'too-long',
      percentage: 100,
      message:
        locale === 'en'
          ? `Text exceeds the approximate maximum by ${excess} words. If every sentence adds value - the length is justified.`
          : `Tekst powyżej orientacyjnego maksimum o ${excess} słów. Jeśli każde zdanie wnosi wartość - długość jest uzasadniona.`,
    };
  }

  const percentage = Math.round(((words - minWords) / (maxWords - minWords)) * 100);

  if (words < midPoint) {
    return {
      status: 'ideal',
      percentage: Math.max(percentage, 1),
      message:
        locale === 'en'
          ? 'Length is within the recommended range. Value for the reader is key - ranges serve as a reference point.'
          : 'Długość w zalecanym zakresie. Wartość dla czytelnika jest kluczowa, a zakresy służą jako punkt odniesienia.',
    };
  }

  return {
    status: 'ideal',
    percentage,
    message:
      locale === 'en'
        ? `Good length for a ${pageType.label.toLowerCase()}. Each paragraph should provide concrete value for the reader.`
        : `Dobra długość dla ${pageType.label.toLowerCase()}. Każdy akapit powinien wnosić konkretną wartość dla czytelnika.`,
  };
}

export function formatReadingTime(minutes: number, locale: Locale = 'pl'): string {
  if (locale === 'en') {
    return minutes === 1 ? '1 minute' : `${minutes} minutes`;
  }
  if (minutes === 1) return '1 minuta';
  if (minutes >= 2 && minutes <= 4) return `${minutes} minuty`;
  return `${minutes} minut`;
}

export function formatReportText(metrics: TextMetrics, pageType: PageTypeConfig, evaluation: LengthEvaluation, locale: Locale = 'pl'): string {
  if (locale === 'en') {
    const statusLabel = evaluation.status === 'ideal' ? '✅ Good length' : evaluation.status === 'too-short' ? '⚠️ Too short' : evaluation.status === 'too-long' ? '⚠️ Too long' : '-';
    const lines = [
      '📊 TEXT LENGTH REPORT',
      '─'.repeat(30),
      `Page type: ${pageType.label}`,
      `Recommended range: ${pageType.minWords}–${pageType.maxWords} words`,
      '',
      '📝 STATISTICS:',
      `• Words: ${metrics.words}`,
      `• Characters (with spaces): ${metrics.charsWithSpaces}`,
      `• Characters (without spaces): ${metrics.charsWithoutSpaces}`,
      `• Paragraphs: ${metrics.paragraphs}`,
      `• Reading time: ${formatReadingTime(metrics.readingTimeMinutes, locale)}`,
      '',
      `📈 EVALUATION: ${statusLabel}`,
      evaluation.message,
      '',
      '─'.repeat(30),
      'Generated by: arteonagency.pl/en/tools/word-and-character-counter',
    ];
    return lines.join('\n');
  }

  const lines = [
    '📊 RAPORT DŁUGOŚCI TEKSTU',
    '─'.repeat(30),
    `Typ strony: ${pageType.label}`,
    `Zalecany zakres: ${pageType.minWords}–${pageType.maxWords} słów`,
    '',
    '📝 STATYSTYKI:',
    `• Słowa: ${metrics.words}`,
    `• Znaki (ze spacjami): ${metrics.charsWithSpaces}`,
    `• Znaki (bez spacji): ${metrics.charsWithoutSpaces}`,
    `• Akapity: ${metrics.paragraphs}`,
    `• Czas czytania: ${formatReadingTime(metrics.readingTimeMinutes)}`,
    '',
    `📈 OCENA: ${evaluation.status === 'ideal' ? '✅ Dobra długość' : evaluation.status === 'too-short' ? '⚠️ Za krótki' : evaluation.status === 'too-long' ? '⚠️ Za długi' : '-'}`,
    evaluation.message,
    '',
    '─'.repeat(30),
    'Wygenerowano przez: arteonagency.pl/narzedzia/licznik-slow-i-znakow',
  ];

  return lines.join('\n');
}
