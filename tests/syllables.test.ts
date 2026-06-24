import { describe, expect, it } from 'vitest';
import {
  countSyllablesInWord,
  countSyllables,
} from '@/lib/tools/text/syllables';

describe('countSyllablesInWord', () => {
  it('counts multiple vowel groups in an English word, not just 1', () => {
    // Regression test: a previous bug used regex.exec().length (always 1)
    // instead of counting actual vowel-group matches.
    expect(countSyllablesInWord('beautiful', 'en')).toBeGreaterThan(1);
  });

  it('counts syllables correctly for a long Polish word', () => {
    // "niesamowity" has 5 vowel groups: nie-sa-mo-wi-ty.
    expect(countSyllablesInWord('niesamowity', 'pl')).toBe(5);
  });

  it('counts syllables for a long German word with multiple vowel groups', () => {
    expect(countSyllablesInWord('Geschwindigkeit', 'de')).toBeGreaterThan(2);
  });

  it('counts each vowel separately for Hungarian (no diphthongs)', () => {
    // "alma" = a-l-m-a -> 2 vowels -> 2 syllables.
    expect(countSyllablesInWord('alma', 'hu')).toBe(2);
  });

  it('returns 0 for input with no letters', () => {
    expect(countSyllablesInWord('123', 'en')).toBe(0);
  });

  it('returns at least 1 for a short real word', () => {
    expect(countSyllablesInWord('cat', 'en')).toBeGreaterThanOrEqual(1);
  });
});

describe('countSyllables', () => {
  it('sums syllables across a multi-word sentence, scaling with length', () => {
    const short = countSyllables('cat dog', 'en');
    const long = countSyllables(
      'internationalization accessibility documentation',
      'en',
    );
    // Regression test: before the fix, every word counted as ~1 syllable
    // regardless of length, so this ratio would be close to 1.
    expect(long).toBeGreaterThan(short * 3);
  });

  it('returns 0 for empty/whitespace-only text', () => {
    expect(countSyllables('   ', 'pl')).toBe(0);
  });
});
