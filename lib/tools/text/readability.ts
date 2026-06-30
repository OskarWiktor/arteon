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

/** Gulpease grade: approximate education level (elementary=3, middle=7, high=11, university=15) */
function gulpeaseGrade(gulpease: number): number {
  if (gulpease >= 80) return 3;
  if (gulpease >= 60) return 7;
  if (gulpease >= 40) return 11;
  return 15;
}

/** LIX grade mapping: <25=children, 25-35=easy, 35-45=average, 45-55=difficult, >55=very difficult */
function lixGrade(lix: number): number {
  if (lix < 25) return 3;
  if (lix < 35) return 6;
  if (lix < 45) return 9;
  if (lix < 55) return 13;
  return 16;
}

type FleschContext = { text: string; words: number; sentences: number };
type FleschFormula = (
  ASL: number,
  ASW: number,
  ctx: FleschContext,
) => { score: number; grade: number };

const standardFlesch =
  (coefficient: number): FleschFormula =>
  (ASL, ASW) => {
    const score = 206.835 - 1.015 * ASL - coefficient * ASW;
    return { score, grade: scoreToGrade(score) };
  };

/** Fernández-Huerta formula (Spanish/Portuguese/Romanian) — Romanian is a Romance
 * language with similar syllable structure */
const fernandezHuerta: FleschFormula = (ASL, ASW) => {
  const score = 206.84 - 60 * ASW - 1.02 * ASL;
  return { score, grade: scoreToGrade(score) };
};

/** LIX - Björnsson Readability Index (Scandinavian + Finnish). Finnish is
 * agglutinative with very long compound words; LIX (word-length-based) is a
 * better fit than syllable-based Flesch. LIX = ASL + (% of words > 6 chars) */
const lixFormula: FleschFormula = (ASL, _ASW, { text }) => {
  const wordList = text.match(/\p{L}+/gu) || [];
  const longWords = wordList.filter(w => w.length > 6).length;
  const longPct = wordList.length > 0 ? (longWords / wordList.length) * 100 : 0;
  const lix = ASL + longPct;
  // Map LIX (typically 20-60) to Flesch-like 0-100 scale (inverted: low LIX = easy)
  const score = Math.max(0, Math.min(100, 100 - (lix - 20) * 1.67));
  return { score, grade: lixGrade(lix) };
};

const FLESCH_FORMULAS: Partial<Record<Locale, FleschFormula>> = {
  // Amstad formula for German
  de: (ASL, ASW) => {
    const score = 180 - ASL - 58.5 * ASW;
    return { score, grade: scoreToGrade(score) };
  },
  es: fernandezHuerta,
  pt: fernandezHuerta,
  // Flesch-Douma formula (Dutch)
  nl: (ASL, ASW) => {
    const score = 206.835 - 0.93 * ASL - 77 * ASW;
    return { score, grade: scoreToGrade(score) };
  },
  // Gulpease index (Italian) - native scale 0-100, character-based
  it: (_ASL, _ASW, { text, sentences, words }) => {
    const chars = text.replace(/\s/g, '').length;
    const gulpease = 89 + (300 * sentences - 10 * chars) / words;
    const score = Math.min(100, Math.max(0, gulpease));
    return { score, grade: gulpeaseGrade(gulpease) };
  },
  // Kandel-Moles adaptation (French)
  fr: (ASL, ASW) => {
    const score = 207 - 1.015 * ASL - 73.6 * ASW;
    return { score, grade: scoreToGrade(score) };
  },
  // Polish adaptation - reduced ASW coefficient (84.6 → 60) to account for
  // Polish inflectional morphology producing longer words (~1.9 syl/word vs EN ~1.3)
  pl: standardFlesch(60),
  // Czech adaptation - Slavic inflectional language; higher ASW than Polish
  cs: standardFlesch(52),
  // Hungarian adaptation - agglutinative language with very long words (~2.0+ syl/word)
  // Greek adaptation - inflectional, longer words than EN but less extreme than PL/HU
  el: standardFlesch(66),
  sv: lixFormula,
  no: lixFormula,
  fi: lixFormula,
};

/**
 * Calculate Flesch Reading Ease and Flesch-Kincaid Grade Level.
 *
 * Requires at least 1 sentence and 1 word to produce a meaningful result.
 * Returns null scores when the text is too short.
 *
 * Language-adapted formulas are used where available (see `FLESCH_FORMULAS`);
 * locales without an adapted formula fall back to the standard EN Flesch formula.
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

  const formula = FLESCH_FORMULAS[locale];
  const { score, grade } = formula
    ? formula(ASL, ASW, { text, words, sentences })
    : {
        // Standard Flesch formulas (EN only)
        score: 206.835 - 1.015 * ASL - 84.6 * ASW,
        grade: 0.39 * ASL + 11.8 * ASW - 15.59,
      };

  // Clamp values to reasonable ranges
  const fleschScore = Math.round(Math.max(0, Math.min(100, score)) * 10) / 10;
  const fleschGrade = Math.round(Math.max(0, grade) * 10) / 10;

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
  nl: {
    veryEasy: 'Zeer eenvoudig',
    easy: 'Eenvoudig',
    moderate: 'Gemiddeld',
    difficult: 'Moeilijk',
    veryDifficult: 'Zeer moeilijk',
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
  if (score === null) return 'text-light';
  const [, easy, moderate, difficult] =
    READABILITY_THRESHOLDS[locale] ?? DEFAULT_THRESHOLDS;
  if (score >= easy) return 'text-success-icon';
  if (score >= moderate) return 'text-warning-icon';
  if (score >= difficult) return 'text-accent-orange';
  return 'text-error-icon';
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
 * Computes the most frequent keywords in the given text and their percentage density.
 *
 * Tokenizes and normalizes words, excludes tokens of length two or less, then returns up to `topN` entries
 * sorted by frequency.
 *
 * @param text - Input text to analyze
 * @param topN - Maximum number of entries to return (default: 10)
 * @returns An array of keyword entries containing `word`, `count`, and `density` (percentage with one decimal). Returns an empty array if the input has no valid words.
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
