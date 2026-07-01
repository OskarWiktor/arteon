import type { Locale } from '@/types/locale';

// ---------------------------------------------------------------------------
// Per-language syllable counting heuristics
// ---------------------------------------------------------------------------

/**
 * Determine the number of syllables in a single word using locale-specific heuristics.
 *
 * The input word is normalized and non-letter characters are removed; returns `0` if no letters remain.
 * For supported locales a language-specific heuristic is applied, otherwise a generic vowel-group heuristic is used.
 *
 * @param word - The input word to analyze
 * @param locale - Locale code selecting the language rules (default: `'en'`)
 * @returns The number of syllables in `word`; `0` if the normalized word contains no letters
 */
export function countSyllablesInWord(
  word: string,
  locale: Locale = 'en',
): number {
  const w = word
    .toLocaleLowerCase()
    .replace(/[^a-z\u00C0-\u024F\u0370-\u03FF\u0400-\u04FF]/gi, '');
  if (!w) return 0;

  switch (locale) {
    case 'en':
      return countSyllablesEN(w);
    case 'de':
      return countSyllablesDE(w);
    case 'fr':
      return countSyllablesFR(w);
    case 'es':
    case 'pt':
    case 'it':
      return countSyllablesRomance(w);
    case 'pl':
    case 'cs':
      return countSyllablesSlavic(w);
    case 'el':
      return countSyllablesEL(w);
    default:
      return countSyllablesGeneric(w);
  }
}

/**
 * Count total syllables in a text string.
 */
export function countSyllables(text: string, locale: Locale = 'en'): number {
  if (!text.trim()) return 0;
  const words = text.trim().split(/\s+/);
  return words.reduce(
    (sum, word) => sum + countSyllablesInWord(word, locale),
    0,
  );
}

// ---------------------------------------------------------------------------
// English syllable counter
// ---------------------------------------------------------------------------

function countSyllablesEN(word: string): number {
  if (word.length <= 2) return 1;

  let w = word;

  // Remove trailing silent-e
  if (
    w.endsWith('e') &&
    !w.endsWith('le') &&
    !w.endsWith('ee') &&
    !w.endsWith('ie')
  ) {
    w = w.slice(0, -1);
  }

  // Count vowel groups
  const vowelGroups = w.match(/[aeiouy]+/gi);
  let count = vowelGroups ? vowelGroups.length : 1;

  // Adjustments for common patterns
  if (
    word.endsWith('le') &&
    word.length > 2 &&
    !/[aeiouy]/.test(word[word.length - 3])
  ) {
    count++;
  }
  if (word.endsWith('ed') && !word.endsWith('ted') && !word.endsWith('ded')) {
    count = Math.max(1, count - 1);
  }
  if (
    word.endsWith('es') &&
    !word.endsWith('ses') &&
    !word.endsWith('zes') &&
    !word.endsWith('ces') &&
    !word.endsWith('xes')
  ) {
    count = Math.max(1, count - 1);
  }

  // Common suffixes that add a syllable
  if (/tion$|sion$|cian$/.test(word)) {
    // already counted as vowel group, no change needed
  }

  return Math.max(1, count);
}

// ---------------------------------------------------------------------------
// German syllable counter
// ---------------------------------------------------------------------------

function countSyllablesDE(word: string): number {
  if (word.length <= 2) return 1;

  // German diphthongs count as one syllable: ei, au, eu, äu, ie
  let w = word;
  w = w
    .replace(/ei/g, 'X')
    .replace(/au/g, 'X')
    .replace(/eu/g, 'X')
    .replace(/äu/g, 'X')
    .replace(/ie/g, 'X');

  const vowelGroups = w.match(/[aeiouyäöüX]+/gi);
  return Math.max(1, vowelGroups ? vowelGroups.length : 1);
}

// ---------------------------------------------------------------------------
// French syllable counter
// ---------------------------------------------------------------------------

function countSyllablesFR(word: string): number {
  if (word.length <= 2) return 1;

  let w = word;

  // French silent-e at end (unless preceded by consonant cluster that needs it)
  if (
    w.endsWith('e') &&
    !w.endsWith('ée') &&
    !w.endsWith('ie') &&
    w.length > 2
  ) {
    w = w.slice(0, -1);
  }
  if (w.endsWith('es') && w.length > 3) {
    w = w.slice(0, -2);
  }
  if (w.endsWith('ent') && w.length > 4) {
    w = w.slice(0, -3);
  }

  // French diphthongs
  w = w
    .replace(/ou/g, 'X')
    .replace(/ai/g, 'X')
    .replace(/ei/g, 'X')
    .replace(/au/g, 'X')
    .replace(/eau/g, 'X')
    .replace(/oi/g, 'X');

  const vowelGroups = w.match(/[aeiouyàâéèêëïîôùûüæœX]+/gi);
  return Math.max(1, vowelGroups ? vowelGroups.length : 1);
}

// ---------------------------------------------------------------------------
// Romance languages (ES, PT, IT, RO) syllable counter
// ---------------------------------------------------------------------------

function countSyllablesRomance(word: string): number {
  if (word.length <= 2) return 1;

  // Common Romance diphthongs
  let w = word;
  w = w
    .replace(/ia/g, 'YA')
    .replace(/ie/g, 'YE')
    .replace(/io/g, 'YO')
    .replace(/iu/g, 'YU');
  w = w
    .replace(/ua/g, 'WA')
    .replace(/ue/g, 'WE')
    .replace(/ui/g, 'WI')
    .replace(/uo/g, 'WO');
  w = w
    .replace(/ai/g, 'X')
    .replace(/ei/g, 'X')
    .replace(/oi/g, 'X')
    .replace(/au/g, 'X')
    .replace(/eu/g, 'X');

  const vowelGroups = w.match(/[aeiouyàáâãéèêíîóôõúùûäëïöüășțX]+/gi);
  return Math.max(1, vowelGroups ? vowelGroups.length : 1);
}

// ---------------------------------------------------------------------------
// Slavic languages (PL, CS) syllable counter
// ---------------------------------------------------------------------------

function countSyllablesSlavic(word: string): number {
  if (word.length <= 1) return 1;

  // In Polish/Czech, vowel groups like "ie", "ia", "io" typically form one syllable.
  // The vowel-group approach (matching consecutive vowels) handles this correctly.
  // Vowels: a, e, i, o, u, y, ą, ę, ó (PL) + á, é, í, ú, ů, ý, ě (CS)
  const vowels = word.match(/[aeiouyąęóáéíúůýě]+/gi);
  return Math.max(1, vowels ? vowels.length : 1);
}

// ---------------------------------------------------------------------------
// Greek syllable counter
// ---------------------------------------------------------------------------

function countSyllablesEL(word: string): number {
  if (word.length <= 1) return 1;

  // Greek diphthongs: αι, ει, οι, ου, αυ, ευ, ηυ
  let w = word;
  w = w
    .replace(/αι/g, 'X')
    .replace(/ει/g, 'X')
    .replace(/οι/g, 'X')
    .replace(/ου/g, 'X');
  w = w.replace(/αυ/g, 'X').replace(/ευ/g, 'X').replace(/ηυ/g, 'X');

  const vowels = w.match(/[αεηιοωυάέήίόώύϊϋΐΰX]/gi);
  return Math.max(1, vowels ? vowels.length : 1);
}

// ---------------------------------------------------------------------------
// Generic fallback syllable counter
// ---------------------------------------------------------------------------

function countSyllablesGeneric(word: string): number {
  if (word.length <= 2) return 1;

  // Generic: count groups of characters that look like vowels
  const vowelGroups = word.match(/[aeiouyàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿ]+/gi);
  return Math.max(1, vowelGroups ? vowelGroups.length : 1);
}
