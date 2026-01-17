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
    minWords: 100,
    maxWords: 300,
    description: 'Krótki, konkretny opis produktu z najważniejszymi informacjami dla kupującego.',
  },
  {
    key: 'service',
    label: 'Strona usługi',
    minWords: 800,
    maxWords: 1500,
    description: 'Opis usługi z korzyściami, procesem i odpowiedziami na typowe pytania.',
  },
  {
    key: 'homepage',
    label: 'Strona główna',
    minWords: 800,
    maxWords: 1500,
    description: 'Prezentacja firmy, najważniejsze usługi i zachęta do dalszego poznania oferty.',
  },
  {
    key: 'landing',
    label: 'Landing page',
    minWords: 1500,
    maxWords: 3000,
    description: 'Strona sprzedażowa z pełną argumentacją, dowodami i wezwaniem do działania.',
  },
  {
    key: 'blog',
    label: 'Artykuł blogowy',
    minWords: 2500,
    maxWords: 4000,
    description: 'Wnikliwy artykuł odpowiadający na konkretne pytanie, budujący autorytet.',
  },
  {
    key: 'guide',
    label: 'Poradnik / przewodnik',
    minWords: 4000,
    maxWords: 7000,
    description: 'Kompleksowy materiał omawiający temat dogłębnie, często z podziałem na rozdziały.',
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
      message: `Tekst jest za krótki. Brakuje około ${missing} słów do minimum dla ${pageType.label.toLowerCase()}.`,
    };
  }

  if (words > maxWords) {
    const excess = words - maxWords;
    return {
      status: 'too-long',
      percentage: 100,
      message: `Tekst przekracza zalecany zakres o ${excess} słów. Rozważ podzielenie na mniejsze części lub skrócenie.`,
    };
  }

  const percentage = Math.round(((words - minWords) / (maxWords - minWords)) * 100);

  if (words < midPoint) {
    return {
      status: 'ideal',
      percentage: Math.max(percentage, 1),
      message: `Długość jest w zalecanym zakresie. Możesz dodać więcej treści, aby wyczerpać temat.`,
    };
  }

  return {
    status: 'ideal',
    percentage,
    message: `Idealna długość dla ${pageType.label.toLowerCase()}. Tekst powinien dobrze pozycjonować się w Google.`,
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
    `📈 OCENA: ${evaluation.status === 'ideal' ? '✅ Dobra długość' : evaluation.status === 'too-short' ? '⚠️ Za krótki' : evaluation.status === 'too-long' ? '⚠️ Za długi' : '—'}`,
    evaluation.message,
    '',
    '─'.repeat(30),
    'Wygenerowano przez: arteonagency.pl/narzedzia/licznik-slow-i-znakow',
  ];

  return lines.join('\n');
}
