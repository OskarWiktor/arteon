import type { Locale } from '@/types/locale';
import { countSyllables } from './syllables';
import { countWords, countSentences } from './wordCount';

// ---------------------------------------------------------------------------
// Readability score calculation
// ---------------------------------------------------------------------------

export interface ReadabilityResult {
  fleschScore: number | null;
  fleschGrade: number | null;
  syllables: number;
}

/**
 * Calculate Flesch Reading Ease and Flesch-Kincaid Grade Level.
 *
 * Requires at least 1 sentence and 1 word to produce a meaningful result.
 * Returns null scores when the text is too short.
 *
 * Language-adapted formulas are used where available:
 * - DE: Amstad formula
 * - ES: Fernández-Huerta formula
 * - NL: Flesch-Douma formula
 * - IT: Gulpease index (mapped to 0-100 scale)
 * - FR: Kandel-Moles adaptation
 * - All others: standard Flesch formula
 */
export function calculateReadability(text: string, locale: Locale = 'en'): ReadabilityResult {
  const words = countWords(text);
  const sentences = countSentences(text);
  const syllables = countSyllables(text, locale);

  if (words < 3 || sentences < 1) {
    return { fleschScore: null, fleschGrade: null, syllables };
  }

  const ASL = words / sentences; // average sentence length
  const ASW = syllables / words; // average syllables per word

  let fleschScore: number;
  let fleschGrade: number;

  switch (locale) {
    case 'de': {
      // Amstad formula for German
      fleschScore = 180 - ASL - 58.5 * ASW;
      fleschGrade = 0.39 * ASL + 11.8 * ASW - 15.59;
      break;
    }
    case 'es':
    case 'pt': {
      // Fernández-Huerta formula (Spanish/Portuguese)
      fleschScore = 206.84 - 60 * ASW - 1.02 * ASL;
      fleschGrade = 0.39 * ASL + 11.8 * ASW - 15.59;
      break;
    }
    case 'nl': {
      // Flesch-Douma formula (Dutch)
      fleschScore = 206.835 - 0.93 * ASL - 77 * ASW;
      fleschGrade = 0.39 * ASL + 11.8 * ASW - 15.59;
      break;
    }
    case 'it': {
      // Gulpease index (Italian) — native scale 0-100
      const chars = text.replace(/\s/g, '').length;
      const gulpease = 89 + (300 * sentences - 10 * chars) / words;
      // Map Gulpease to approximate Flesch scale (Gulpease 100=easy → Flesch 100)
      fleschScore = Math.min(100, Math.max(0, gulpease));
      fleschGrade = 0.39 * ASL + 11.8 * ASW - 15.59;
      break;
    }
    case 'fr': {
      // Kandel-Moles adaptation (French)
      fleschScore = 207 - 1.015 * ASL - 73.6 * ASW;
      fleschGrade = 0.39 * ASL + 11.8 * ASW - 15.59;
      break;
    }
    default: {
      // Standard Flesch formulas (EN, PL, and all others)
      fleschScore = 206.835 - 1.015 * ASL - 84.6 * ASW;
      fleschGrade = 0.39 * ASL + 11.8 * ASW - 15.59;
      break;
    }
  }

  // Clamp values to reasonable ranges
  fleschScore = Math.round(Math.max(0, Math.min(100, fleschScore)) * 10) / 10;
  fleschGrade = Math.round(Math.max(0, fleschGrade) * 10) / 10;

  return { fleschScore, fleschGrade, syllables };
}

// ---------------------------------------------------------------------------
// Readability labels (human-readable interpretation)
// ---------------------------------------------------------------------------

const READABILITY_LABELS: Record<Locale, { veryEasy: string; easy: string; moderate: string; difficult: string; veryDifficult: string }> = {
  en: { veryEasy: 'Very easy', easy: 'Easy', moderate: 'Moderate', difficult: 'Difficult', veryDifficult: 'Very difficult' },
  pl: { veryEasy: 'Bardzo łatwy', easy: 'Łatwy', moderate: 'Umiarkowany', difficult: 'Trudny', veryDifficult: 'Bardzo trudny' },
  de: { veryEasy: 'Sehr leicht', easy: 'Leicht', moderate: 'Mittel', difficult: 'Schwierig', veryDifficult: 'Sehr schwierig' },
  es: { veryEasy: 'Muy fácil', easy: 'Fácil', moderate: 'Moderado', difficult: 'Difícil', veryDifficult: 'Muy difícil' },
  fr: { veryEasy: 'Très facile', easy: 'Facile', moderate: 'Modéré', difficult: 'Difficile', veryDifficult: 'Très difficile' },
  pt: { veryEasy: 'Muito fácil', easy: 'Fácil', moderate: 'Moderado', difficult: 'Difícil', veryDifficult: 'Muito difícil' },
  it: { veryEasy: 'Molto facile', easy: 'Facile', moderate: 'Moderato', difficult: 'Difficile', veryDifficult: 'Molto difficile' },
  ro: { veryEasy: 'Foarte ușor', easy: 'Ușor', moderate: 'Moderat', difficult: 'Dificil', veryDifficult: 'Foarte dificil' },
  nl: { veryEasy: 'Zeer eenvoudig', easy: 'Eenvoudig', moderate: 'Gemiddeld', difficult: 'Moeilijk', veryDifficult: 'Zeer moeilijk' },
  hu: { veryEasy: 'Nagyon könnyű', easy: 'Könnyű', moderate: 'Közepes', difficult: 'Nehéz', veryDifficult: 'Nagyon nehéz' },
  cs: { veryEasy: 'Velmi snadné', easy: 'Snadné', moderate: 'Střední', difficult: 'Obtížné', veryDifficult: 'Velmi obtížné' },
  sv: { veryEasy: 'Mycket lätt', easy: 'Lätt', moderate: 'Medel', difficult: 'Svår', veryDifficult: 'Mycket svår' },
  da: { veryEasy: 'Meget let', easy: 'Let', moderate: 'Middel', difficult: 'Svær', veryDifficult: 'Meget svær' },
  no: { veryEasy: 'Veldig lett', easy: 'Lett', moderate: 'Middels', difficult: 'Vanskelig', veryDifficult: 'Veldig vanskelig' },
  fi: { veryEasy: 'Erittäin helppo', easy: 'Helppo', moderate: 'Keskitaso', difficult: 'Vaikea', veryDifficult: 'Erittäin vaikea' },
  el: { veryEasy: 'Πολύ εύκολο', easy: 'Εύκολο', moderate: 'Μέτριο', difficult: 'Δύσκολο', veryDifficult: 'Πολύ δύσκολο' },
};

/**
 * Get a human-readable readability label based on the Flesch score.
 *
 * Scale:
 *  90-100  Very easy (5th grade)
 *  70-89   Easy (6th-7th grade)
 *  50-69   Moderate (8th-9th grade)
 *  30-49   Difficult (college level)
 *   0-29   Very difficult (academic)
 */
export function getReadabilityLabel(score: number | null, locale: Locale = 'en'): string {
  if (score === null) return '—';
  const labels = READABILITY_LABELS[locale];
  if (score >= 90) return labels.veryEasy;
  if (score >= 70) return labels.easy;
  if (score >= 50) return labels.moderate;
  if (score >= 30) return labels.difficult;
  return labels.veryDifficult;
}

/**
 * Get a CSS-friendly color class for the readability score.
 */
export function getReadabilityColor(score: number | null): string {
  if (score === null) return 'text-neutral-400';
  if (score >= 70) return 'text-green-600';
  if (score >= 50) return 'text-yellow-600';
  if (score >= 30) return 'text-orange-500';
  return 'text-red-500';
}

// ---------------------------------------------------------------------------
// Keyword density
// ---------------------------------------------------------------------------

export interface KeywordDensityEntry {
  word: string;
  count: number;
  density: number; // percentage
}

/**
 * Calculate keyword density for all words in the text.
 * Returns top N entries sorted by frequency.
 */
export function calculateKeywordDensity(text: string, topN: number = 10): KeywordDensityEntry[] {
  if (!text.trim()) return [];

  const words = text
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s]/gu, '')
    .split(/\s+/)
    .filter((w) => w.length > 2); // skip very short words

  if (words.length === 0) return [];

  const freq = new Map<string, number>();
  for (const word of words) {
    freq.set(word, (freq.get(word) || 0) + 1);
  }

  const total = words.length;
  return Array.from(freq.entries())
    .map(([word, count]) => ({
      word,
      count,
      density: Math.round((count / total) * 1000) / 10, // one decimal
    }))
    .sort((a, b) => b.count - a.count)
    .slice(0, topN);
}

// ---------------------------------------------------------------------------
// Speaking time
// ---------------------------------------------------------------------------

const WORDS_PER_MINUTE_SPEAKING = 130;

export function calculateSpeakingTime(words: number): number {
  return Math.max(1, Math.ceil(words / WORDS_PER_MINUTE_SPEAKING));
}
