export type PageType = 'product' | 'service' | 'homepage' | 'landing' | 'blog' | 'guide';

export interface PageTypeConfig {
  key: PageType;
  label: string;
  minWords: number;
  maxWords: number;
  description: string;
}

export const PAGE_TYPES: PageTypeConfig[] = [
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

export type LengthStatus = 'empty' | 'too-short' | 'ideal' | 'too-long';

export interface TextMetrics {
  words: number;
  charsWithSpaces: number;
  charsWithoutSpaces: number;
  paragraphs: number;
  readingTimeMinutes: number;
}

export interface LengthEvaluation {
  status: LengthStatus;
  percentage: number;
  message: string;
}

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

export function evaluateLength(words: number, pageType: PageTypeConfig): LengthEvaluation {
  if (words === 0) {
    return {
      status: 'empty',
      percentage: 0,
      message: 'Wklej lub wpisz tekst, aby zobaczyć analizę.',
    };
  }

  const { minWords, maxWords } = pageType;
  const midPoint = (minWords + maxWords) / 2;

  if (words < minWords) {
    const percentage = Math.round((words / minWords) * 100);
    const missing = minWords - words;
    return {
      status: 'too-short',
      percentage: Math.min(percentage, 99),
      message: `Tekst poniżej orientacyjnego minimum (${minWords} słów). Jeśli temat jest wyczerpany - to może wystarczyć. Brakuje około ${missing} słów.`,
    };
  }

  if (words > maxWords) {
    const excess = words - maxWords;
    return {
      status: 'too-long',
      percentage: 100,
      message: `Tekst powyżej orientacyjnego maksimum o ${excess} słów. Jeśli każde zdanie wnosi wartość - długość jest uzasadniona.`,
    };
  }

  const percentage = Math.round(((words - minWords) / (maxWords - minWords)) * 100);

  if (words < midPoint) {
    return {
      status: 'ideal',
      percentage: Math.max(percentage, 1),
      message: `Długość w zalecanym zakresie. Wartość dla czytelnika jest kluczowa, a zakresy służą jako punkt odniesienia.`,
    };
  }

  return {
    status: 'ideal',
    percentage,
    message: `Dobra długość dla ${pageType.label.toLowerCase()}. Każdy akapit powinien wnosić konkretną wartość dla czytelnika.`,
  };
}

export function formatReadingTime(minutes: number): string {
  if (minutes === 1) return '1 minuta';
  if (minutes >= 2 && minutes <= 4) return `${minutes} minuty`;
  return `${minutes} minut`;
}

export function formatReportText(metrics: TextMetrics, pageType: PageTypeConfig, evaluation: LengthEvaluation): string {
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
