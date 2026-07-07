import { describe, expect, it } from 'vitest';
import { formatLocaleNumber } from '@/lib/tools/units/formatLocaleNumber';

describe('formatLocaleNumber', () => {
  it('strips trailing zeros instead of padding to full precision', () => {
    // Regression: 33 in → cm used to render "83,8200"; it should read "83,82".
    expect(formatLocaleNumber(33 * 2.54, 4, 'pl')).toBe('83,82');
    expect(formatLocaleNumber(33.3 * 2.54, 4, 'pl')).toBe('84,582');
  });

  it('uses a comma separator for comma-decimal locales', () => {
    expect(formatLocaleNumber(2.54, 4, 'pl')).toBe('2,54');
    expect(formatLocaleNumber(2.54, 4, 'de')).toBe('2,54');
  });

  it('uses a dot separator for EN', () => {
    expect(formatLocaleNumber(2.54, 4, 'en')).toBe('2.54');
  });

  it('rounds to an integer when precision is 0', () => {
    expect(formatLocaleNumber(845.82, 0, 'pl')).toBe('846');
    expect(formatLocaleNumber(845.4, 0, 'en')).toBe('845');
  });

  it('rounds to the requested precision', () => {
    expect(formatLocaleNumber(1 / 3, 4, 'en')).toBe('0.3333');
  });

  it('drops the decimal separator entirely for whole results', () => {
    expect(formatLocaleNumber(100, 4, 'pl')).toBe('100');
    expect(formatLocaleNumber(100, 2, 'en')).toBe('100');
  });

  it('returns an empty string for non-finite input', () => {
    expect(formatLocaleNumber(Infinity, 2, 'pl')).toBe('');
    expect(formatLocaleNumber(NaN, 2, 'en')).toBe('');
  });
});
