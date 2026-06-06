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
 * Derive an approximate school-grade level from a 0-100 readability score.
 * Used for locales with adapted Flesch formulas (DE, ES/PT/RO, NL, FR)
 * so the grade reflects the localized score rather than the US-calibrated formula.
 */
function scoreToGrade(score: number): number {
  if (score >= 90) return 3; // elementary
  if (score >= 80) return 5;
  if (score >= 70) return 6;
  if (score >= 60) return 8;
  if (score >= 50) return 10;
  if (score >= 30) return 13; // college
  return 16; // graduate / specialist
}

/**
 * Calculate Flesch Reading Ease and Flesch-Kincaid Grade Level.
 *
 * Requires at least 1 sentence and 1 word to produce a meaningful result.
 * Returns null scores when the text is too short.
 *
 * Language-adapted formulas are used where available:
 * - DE: Amstad formula
 * - ES/PT/RO: Fernández-Huerta formula (Romance languages)
 * - NL: Flesch-Douma formula
 * - IT: Gulpease index (native Italian, character-based)
 * - FR: Kandel-Moles adaptation
 * - PL: Flesch with reduced ASW coefficient (60) for inflectional morphology
 * - CS: Flesch with reduced ASW coefficient (52) for Slavic morphology
 * - HU: Flesch with reduced ASW coefficient (55) for agglutinative morphology
 * - EL: Flesch with reduced ASW coefficient (66) for Greek morphology
 * - SV/DA/NO/FI: LIX (Björnsson Readability Index) mapped to 0-100 scale
 * - EN: standard Flesch formula
 */
export function calculateReadability(
  text: string,
  locale: Locale = 'en',
): ReadabilityResult {
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
      fleschGrade = scoreToGrade(fleschScore);
      break;
    }
    case 'es':
    case 'pt':
    case 'ro': {
      // Fernández-Huerta formula (Spanish/Portuguese/Romanian)
      // Romanian is a Romance language with similar syllable structure
      fleschScore = 206.84 - 60 * ASW - 1.02 * ASL;
      fleschGrade = scoreToGrade(fleschScore);
      break;
    }
    case 'nl': {
      // Flesch-Douma formula (Dutch)
      fleschScore = 206.835 - 0.93 * ASL - 77 * ASW;
      fleschGrade = scoreToGrade(fleschScore);
      break;
    }
    case 'it': {
      // Gulpease index (Italian) - native scale 0-100, character-based
      const chars = text.replace(/\s/g, '').length;
      const gulpease = 89 + (300 * sentences - 10 * chars) / words;
      fleschScore = Math.min(100, Math.max(0, gulpease));
      // Gulpease grade: approximate education level (elementary=3, middle=7, high=11, university=15)
      fleschGrade =
        gulpease >= 80 ? 3 : gulpease >= 60 ? 7 : gulpease >= 40 ? 11 : 15;
      break;
    }
    case 'fr': {
      // Kandel-Moles adaptation (French)
      fleschScore = 207 - 1.015 * ASL - 73.6 * ASW;
      fleschGrade = scoreToGrade(fleschScore);
      break;
    }
    case 'pl': {
      // Polish adaptation - reduced ASW coefficient (84.6 → 60) to account for
      // Polish inflectional morphology producing longer words (~1.9 syl/word vs EN ~1.3)
      fleschScore = 206.835 - 1.015 * ASL - 60 * ASW;
      fleschGrade = scoreToGrade(fleschScore);
      break;
    }
    case 'cs': {
      // Czech adaptation - Slavic inflectional language; higher ASW than Polish
      fleschScore = 206.835 - 1.015 * ASL - 52 * ASW;
      fleschGrade = scoreToGrade(fleschScore);
      break;
    }
    case 'hu': {
      // Hungarian adaptation - agglutinative language with very long words (~2.0+ syl/word)
      fleschScore = 206.835 - 1.015 * ASL - 55 * ASW;
      fleschGrade = scoreToGrade(fleschScore);
      break;
    }
    case 'el': {
      // Greek adaptation - inflectional, longer words than EN but less extreme than PL/HU
      fleschScore = 206.835 - 1.015 * ASL - 66 * ASW;
      fleschGrade = scoreToGrade(fleschScore);
      break;
    }
    case 'sv':
    case 'da':
    case 'no':
    case 'fi': {
      // LIX - Björnsson Readability Index (Scandinavian + Finnish)
      // Finnish is agglutinative with very long compound words;
      // LIX (word-length-based) is a better fit than syllable-based Flesch.
      // LIX = ASL + (percentage of words longer than 6 characters)
      const wordList = text.match(/\p{L}+/gu) || [];
      const longWords = wordList.filter(w => w.length > 6).length;
      const longPct =
        wordList.length > 0 ? (longWords / wordList.length) * 100 : 0;
      const lix = ASL + longPct;
      // Map LIX (typically 20-60) to Flesch-like 0-100 scale (inverted: low LIX = easy)
      fleschScore = Math.max(0, Math.min(100, 100 - (lix - 20) * 1.67));
      // LIX grade mapping: <25=children, 25-35=easy, 35-45=average, 45-55=difficult, >55=very difficult
      fleschGrade =
        lix < 25 ? 3 : lix < 35 ? 6 : lix < 45 ? 9 : lix < 55 ? 13 : 16;
      break;
    }
    default: {
      // Standard Flesch formulas (EN only)
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

const READABILITY_LABELS: Record<
  Locale,
  {
    veryEasy: string;
    easy: string;
    moderate: string;
    difficult: string;
    veryDifficult: string;
  }
> = {
  en: {
    veryEasy: 'Very easy',
    easy: 'Easy',
    moderate: 'Moderate',
    difficult: 'Difficult',
    veryDifficult: 'Very difficult',
  },
  pl: {
    veryEasy: 'Bardzo łatwy',
    easy: 'Łatwy',
    moderate: 'Umiarkowany',
    difficult: 'Trudny',
    veryDifficult: 'Bardzo trudny',
  },
  de: {
    veryEasy: 'Sehr leicht',
    easy: 'Leicht',
    moderate: 'Mittel',
    difficult: 'Schwierig',
    veryDifficult: 'Sehr schwierig',
  },
  es: {
    veryEasy: 'Muy fácil',
    easy: 'Fácil',
    moderate: 'Moderado',
    difficult: 'Difícil',
    veryDifficult: 'Muy difícil',
  },
  fr: {
    veryEasy: 'Très facile',
    easy: 'Facile',
    moderate: 'Modéré',
    difficult: 'Difficile',
    veryDifficult: 'Très difficile',
  },
  pt: {
    veryEasy: 'Muito fácil',
    easy: 'Fácil',
    moderate: 'Moderado',
    difficult: 'Difícil',
    veryDifficult: 'Muito difícil',
  },
  it: {
    veryEasy: 'Molto facile',
    easy: 'Facile',
    moderate: 'Moderato',
    difficult: 'Difficile',
    veryDifficult: 'Molto difficile',
  },
  ro: {
    veryEasy: 'Foarte ușor',
    easy: 'Ușor',
    moderate: 'Moderat',
    difficult: 'Dificil',
    veryDifficult: 'Foarte dificil',
  },
  nl: {
    veryEasy: 'Zeer eenvoudig',
    easy: 'Eenvoudig',
    moderate: 'Gemiddeld',
    difficult: 'Moeilijk',
    veryDifficult: 'Zeer moeilijk',
  },
  hu: {
    veryEasy: 'Nagyon könnyű',
    easy: 'Könnyű',
    moderate: 'Közepes',
    difficult: 'Nehéz',
    veryDifficult: 'Nagyon nehéz',
  },
  cs: {
    veryEasy: 'Velmi snadné',
    easy: 'Snadné',
    moderate: 'Střední',
    difficult: 'Obtížné',
    veryDifficult: 'Velmi obtížné',
  },
  sv: {
    veryEasy: 'Mycket lätt',
    easy: 'Lätt',
    moderate: 'Medel',
    difficult: 'Svår',
    veryDifficult: 'Mycket svår',
  },
  da: {
    veryEasy: 'Meget let',
    easy: 'Let',
    moderate: 'Middel',
    difficult: 'Svær',
    veryDifficult: 'Meget svær',
  },
  no: {
    veryEasy: 'Veldig lett',
    easy: 'Lett',
    moderate: 'Middels',
    difficult: 'Vanskelig',
    veryDifficult: 'Veldig vanskelig',
  },
  fi: {
    veryEasy: 'Erittäin helppo',
    easy: 'Helppo',
    moderate: 'Keskitaso',
    difficult: 'Vaikea',
    veryDifficult: 'Erittäin vaikea',
  },
  el: {
    veryEasy: 'Πολύ εύκολο',
    easy: 'Εύκολο',
    moderate: 'Μέτριο',
    difficult: 'Δύσκολο',
    veryDifficult: 'Πολύ δύσκολο',
  },
};

// Locale-aware thresholds for readability labels.
// Most locales use the standard Flesch thresholds (90/70/50/30).
// Italian Gulpease has its own education-level-based scale.
const READABILITY_THRESHOLDS: Partial<
  Record<Locale, [number, number, number, number]>
> = {
  it: [80, 60, 40, 20], // Gulpease: 80+ elementary, 60+ middle school, 40+ high school, <40 university
  pl: [80, 60, 40, 20], // Polish adapted formula: shifted thresholds for inflectional language
  cs: [80, 60, 40, 20], // Czech adapted formula: Slavic, similar to Polish
  hu: [80, 60, 40, 20], // Hungarian adapted formula: agglutinative, long words
  el: [80, 60, 45, 25], // Greek adapted formula: inflectional, moderate correction
};

const DEFAULT_THRESHOLDS: [number, number, number, number] = [90, 70, 50, 30];

/**
 * Get a human-readable readability label based on the Flesch score.
 *
 * Default scale (most locales):
 *  90-100  Very easy (5th grade)
 *  70-89   Easy (6th-7th grade)
 *  50-69   Moderate (8th-9th grade)
 *  30-49   Difficult (college level)
 *   0-29   Very difficult (academic)
 *
 * Italian Gulpease scale:
 *  80-100  Very easy (elementary)
 *  60-79   Easy (middle school)
 *  40-59   Moderate (high school)
 *  20-39   Difficult (university)
 *   0-19   Very difficult (specialist)
 */
export function getReadabilityLabel(
  score: number | null,
  locale: Locale = 'en',
): string {
  if (score === null) return '-';
  const labels = READABILITY_LABELS[locale];
  const [veryEasy, easy, moderate, difficult] =
    READABILITY_THRESHOLDS[locale] ?? DEFAULT_THRESHOLDS;
  if (score >= veryEasy) return labels.veryEasy;
  if (score >= easy) return labels.easy;
  if (score >= moderate) return labels.moderate;
  if (score >= difficult) return labels.difficult;
  return labels.veryDifficult;
}

/**
 * Get a CSS-friendly color class for the readability score.
 * Uses locale-aware thresholds to match getReadabilityLabel.
 */
export function getReadabilityColor(
  score: number | null,
  locale: Locale = 'en',
): string {
  if (score === null) return 'text-neutral-400';
  const [, easy, moderate, difficult] =
    READABILITY_THRESHOLDS[locale] ?? DEFAULT_THRESHOLDS;
  if (score >= easy) return 'text-green-600';
  if (score >= moderate) return 'text-yellow-600';
  if (score >= difficult) return 'text-orange-500';
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
export function calculateKeywordDensity(
  text: string,
  topN: number = 10,
): KeywordDensityEntry[] {
  if (!text.trim()) return [];

  const words = text
    .toLocaleLowerCase()
    .replace(/[^\p{L}\p{N}\s]/gu, '')
    .split(/\s+/)
    .filter(w => w.length > 2); // skip very short words

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
