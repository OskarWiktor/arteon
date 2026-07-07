import { describe, expect, it } from 'vitest';
import { parseLocaleNumber } from '@/lib/tools/units/parseLocaleNumber';

describe('parseLocaleNumber', () => {
  it('parses a dot-as-thousands-separator value correctly for PL', () => {
    // Regression test: a previous bug only replaced ',' with '.', so a
    // Polish user typing "2.500" (meaning two thousand five hundred) got
    // silently parsed as 2.5.
    expect(parseLocaleNumber('2.500', 'pl')).toBe(2500);
  });

  it('parses comma-decimal values correctly for PL', () => {
    expect(parseLocaleNumber('3,14', 'pl')).toBeCloseTo(3.14);
  });

  it('accepts a DOT as decimal separator for PL too (both separators work)', () => {
    // Regression: after switching the inputs to type="text", a PL user typing
    // "33.3" with a dot used to get 333 (dot stripped as a thousands sep).
    expect(parseLocaleNumber('33.3', 'pl')).toBeCloseTo(33.3);
    expect(parseLocaleNumber('33,3', 'pl')).toBeCloseTo(33.3);
    expect(parseLocaleNumber('2.54', 'pl')).toBeCloseTo(2.54);
    expect(parseLocaleNumber('17.5', 'pl')).toBeCloseTo(17.5);
  });

  it('treats a single dot with 4+ trailing digits as decimal for PL', () => {
    expect(parseLocaleNumber('1.2345', 'pl')).toBeCloseTo(1.2345);
  });

  it('parses space-separated thousands for PL', () => {
    expect(parseLocaleNumber('1 234,56', 'pl')).toBeCloseTo(1234.56);
  });

  it('parses combined thousands+decimal values for PL', () => {
    expect(parseLocaleNumber('1.234,56', 'pl')).toBeCloseTo(1234.56);
  });

  it('parses dot-decimal values correctly for EN', () => {
    expect(parseLocaleNumber('2.5', 'en')).toBeCloseTo(2.5);
    expect(parseLocaleNumber('33.3', 'en')).toBeCloseTo(33.3);
  });

  it('parses comma-as-thousands-separator values correctly for EN', () => {
    expect(parseLocaleNumber('2,500', 'en')).toBe(2500);
  });

  it('parses combined thousands+decimal values for EN', () => {
    expect(parseLocaleNumber('1,234.56', 'en')).toBeCloseTo(1234.56);
  });

  it('returns NaN for empty input', () => {
    expect(parseLocaleNumber('', 'pl')).toBeNaN();
    expect(parseLocaleNumber('   ', 'en')).toBeNaN();
  });

  it('returns NaN for non-numeric input', () => {
    expect(parseLocaleNumber('abc', 'en')).toBeNaN();
  });

  it('handles a plain negative integer for both conventions', () => {
    expect(parseLocaleNumber('-42', 'pl')).toBe(-42);
    expect(parseLocaleNumber('-42', 'en')).toBe(-42);
  });
});
