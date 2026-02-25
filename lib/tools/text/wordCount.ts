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
  return text.split(/[.!?]+/).filter((s) => s.trim().length > 0).length;
}

export function countParagraphs(text: string): number {
  if (!text.trim()) return 0;
  return text.split(/\n\s*\n/).filter((p) => p.trim().length > 0).length;
}

export function countUniqueWords(text: string): number {
  if (!text.trim()) return 0;
  const words = text.trim().toLowerCase().split(/\s+/);
  return new Set(words).size;
}

export function calculateAvgWordLength(text: string): number {
  if (!text.trim()) return 0;
  const words = text.trim().split(/\s+/);
  const totalChars = words.reduce((sum, w) => sum + w.replace(/[^a-zA-Z\u00C0-\u024F\u0370-\u03FF\u0400-\u04FF]/g, '').length, 0);
  return Math.round((totalChars / words.length) * 10) / 10;
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
    paragraphs: countParagraphs(text),
    uniqueWords: countUniqueWords(text),
    avgWordLength: calculateAvgWordLength(text),
    readingTimeMinutes: calculateReadingTime(words),
    syllables: readability.syllables,
    fleschScore: readability.fleschScore,
    fleschGrade: readability.fleschGrade,
    speakingTimeMinutes: calculateSpeakingTime(words),
  };
}

// ---------------------------------------------------------------------------
// Reading-time i18n (kept minimal — only formatting, no page-type evaluation)
// ---------------------------------------------------------------------------
const READING_TIME_FMT: Record<Locale, (m: number) => string> = {
  pl: (m) => (m === 1 ? '1 minuta' : m >= 2 && m <= 4 ? `${m} minuty` : `${m} minut`),
  en: (m) => (m === 1 ? '1 minute' : `${m} minutes`),
  de: (m) => (m === 1 ? '1 Minute' : `${m} Minuten`),
  es: (m) => (m === 1 ? '1 minuto' : `${m} minutos`),
  fr: (m) => (m === 1 ? '1 minute' : `${m} minutes`),
  pt: (m) => (m === 1 ? '1 minuto' : `${m} minutos`),
  it: (m) => (m === 1 ? '1 minuto' : `${m} minuti`),
  ro: (m) => (m === 1 ? '1 minut' : `${m} minute`),
  nl: (m) => (m === 1 ? '1 minuut' : `${m} minuten`),
  hu: (m) => (m === 1 ? '1 perc' : `${m} perc`),
  cs: (m) => (m === 1 ? '1 minuta' : m >= 2 && m <= 4 ? `${m} minuty` : `${m} minut`),
  sv: (m) => (m === 1 ? '1 minut' : `${m} minuter`),
  da: (m) => (m === 1 ? '1 minut' : `${m} minutter`),
  no: (m) => (m === 1 ? '1 minutt' : `${m} minutter`),
  fi: (m) => (m === 1 ? '1 minuutti' : `${m} minuuttia`),
  el: (m) => (m === 1 ? '1 \u03bb\u03b5\u03c0\u03c4\u03cc' : `${m} \u03bb\u03b5\u03c0\u03c4\u03ac`),
};

export function formatReadingTime(minutes: number, locale: Locale = 'pl'): string {
  return READING_TIME_FMT[locale](minutes);
}

// ---------------------------------------------------------------------------
// Text transformation functions
// ---------------------------------------------------------------------------

export function toUpperCase(text: string): string {
  return text.toUpperCase();
}

export function toLowerCase(text: string): string {
  return text.toLowerCase();
}

export function toSentenceCase(text: string): string {
  const lower = text.toLowerCase();
  return lower.replace(/(^\s*|[.!?]\s+)(\p{L})/gu, (_m, sep, char: string) => sep + char.toUpperCase());
}

export function toTitleCase(text: string): string {
  return text.toLowerCase().replace(/(^|\s)\p{L}/gu, (c) => c.toUpperCase());
}

export function toToggleCase(text: string): string {
  return text
    .split('')
    .map((c) => (c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase()))
    .join('');
}

export function removeExtraSpaces(text: string): string {
  return text
    .split('\n')
    .map((line) => line.replace(/[ \t]+/g, ' ').trim())
    .join('\n');
}

export function removeEmptyLines(text: string): string {
  return text
    .split('\n')
    .filter((line) => line.trim().length > 0)
    .join('\n');
}

export function removeDuplicateLines(text: string): string {
  const seen = new Set<string>();
  return text
    .split('\n')
    .filter((line) => {
      if (seen.has(line)) return false;
      seen.add(line);
      return true;
    })
    .join('\n');
}

export function sortLinesAsc(text: string): string {
  return text
    .split('\n')
    .sort((a, b) => a.localeCompare(b))
    .join('\n');
}

export function sortLinesDesc(text: string): string {
  return text
    .split('\n')
    .sort((a, b) => b.localeCompare(a))
    .join('\n');
}
