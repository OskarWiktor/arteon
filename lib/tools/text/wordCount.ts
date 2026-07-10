import type { Locale } from '@/types/locale';
import type { TextMetrics } from '@/types/tools/text';
export type { TextMetrics } from '@/types/tools/text';
import { calculateReadability, calculateSpeakingTime } from './readability';

// ---------------------------------------------------------------------------
// Core counting helpers
// ---------------------------------------------------------------------------

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

export function countSentences(text: string): number {
  if (!text.trim()) return 0;
  return text.split(/[.!?]+/).filter(s => s.trim().length > 0).length;
}

export function calculateReadingTime(words: number): number {
  const WORDS_PER_MINUTE = 200;
  return Math.max(1, Math.ceil(words / WORDS_PER_MINUTE));
}

export function analyzeText(text: string, locale: Locale = 'en'): TextMetrics {
  const words = countWords(text);
  const readability = calculateReadability(text, locale);
  return {
    words,
    charsWithSpaces: countCharsWithSpaces(text),
    charsWithoutSpaces: countCharsWithoutSpaces(text),
    sentences: countSentences(text),
    readingTimeMinutes: calculateReadingTime(words),
    syllables: readability.syllables,
    fleschScore: readability.fleschScore,
    fleschGrade: readability.fleschGrade,
    speakingTimeMinutes: calculateSpeakingTime(words),
    unsupportedScript: readability.unsupportedScript,
  };
}

// ---------------------------------------------------------------------------
// Reading-time i18n (kept minimal - only formatting, no page-type evaluation)
// ---------------------------------------------------------------------------
const READING_TIME_FMT: Record<Locale, (m: number) => string> = {
  pl: m => {
    if (m === 1) return '1 minuta';
    if (m >= 2 && m <= 4) return `${m} minuty`;
    return `${m} minut`;
  },
  en: m => (m === 1 ? '1 minute' : `${m} minutes`),
  de: m => (m === 1 ? '1 Minute' : `${m} Minuten`),
  es: m => (m === 1 ? '1 minuto' : `${m} minutos`),
  fr: m => (m === 1 ? '1 minute' : `${m} minutes`),
  pt: m => (m === 1 ? '1 minuto' : `${m} minutos`),
  it: m => (m === 1 ? '1 minuto' : `${m} minuti`),
  cs: m => {
    if (m === 1) return '1 minuta';
    if (m >= 2 && m <= 4) return `${m} minuty`;
    return `${m} minut`;
  },
};

export function formatReadingTime(
  minutes: number,
  locale: Locale = 'pl',
): string {
  return READING_TIME_FMT[locale](minutes);
}
