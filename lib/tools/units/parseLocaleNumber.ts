import type { Locale } from '@/types/locale';

/**
 * Locales that conventionally write numbers with a comma decimal separator
 * and a dot (or space) thousands separator, e.g. "2.500,5" for two
 * thousand five hundred point five. Everything else (just 'en' here)
 * uses a dot decimal separator and a comma thousands separator.
 */
const COMMA_DECIMAL_LOCALES: ReadonlySet<Locale> = new Set([
  'pl',
  'de',
  'es',
  'fr',
  'pt',
  'it',
  'nl',
  'cs',
  'fi',
  'el',
]);

/**
 * Parse a user-typed number honoring the thousands/decimal separator
 * convention of `locale`, instead of assuming "," is always the decimal
 * point. Without this, a Polish/German user typing "2.500" (meaning two
 * thousand five hundred) would silently get 2.5.
 */
export function parseLocaleNumber(input: string, locale: Locale): number {
  const trimmed = input.trim();
  if (!trimmed) return NaN;

  if (COMMA_DECIMAL_LOCALES.has(locale)) {
    const cleaned = trimmed.replace(/\./g, '').replace(',', '.');
    return parseFloat(cleaned);
  }

  const cleaned = trimmed.replace(/,/g, '');
  return parseFloat(cleaned);
}
