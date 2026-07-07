import type { Locale } from '@/types/locale';

/**
 * Locales that conventionally write numbers with a comma decimal separator
 * and a dot (or space) thousands separator, e.g. "2.500,5" for two
 * thousand five hundred point five. Everything else (just 'en' here)
 * uses a dot decimal separator and a comma thousands separator.
 */
export const COMMA_DECIMAL_LOCALES: ReadonlySet<Locale> = new Set([
  'pl',
  'de',
  'es',
  'fr',
  'pt',
  'it',
  'cs',
  'el',
]);

/**
 * Parse a user-typed number, accepting BOTH "." and "," as the decimal
 * separator so a Polish user gets the same right answer whether they type
 * "33,3" or "33.3" (both -> 33.3). This matters because the input fields are
 * plain text (a native number input would silently mangle the comma), so the
 * raw string reaches here and we must disambiguate it ourselves.
 *
 * Rules, in order:
 *  - Both separators present -> the right-most one is the decimal mark, the
 *    other groups thousands: "1.234,56" -> 1234.56, "1,234.56" -> 1234.56.
 *  - One separator, appearing more than once -> thousands grouping only:
 *    "1.234.567" -> 1234567.
 *  - One separator appearing once:
 *      - with exactly 3 trailing digits it is ambiguous (decimal vs a
 *        thousands group), so `locale` breaks the tie: in comma-decimal
 *        locales "2.500" means 2500 and "2,500" means 2.5, and the reverse
 *        for `en`;
 *      - with any other number of trailing digits it is unambiguously the
 *        decimal mark: "33.3" -> 33.3, "2.54" -> 2.54, "1.2345" -> 1.2345.
 *  - Spaces (incl. non-breaking) are stripped as thousands separators.
 */
/** Both "." and "," present: the right-most one is the decimal mark. */
function normalizeMixedSeparators(trimmed: string): string {
  const decimalSep =
    trimmed.lastIndexOf('.') > trimmed.lastIndexOf(',') ? '.' : ',';
  const thousandsSep = decimalSep === '.' ? ',' : '.';
  return trimmed.split(thousandsSep).join('').replace(decimalSep, '.');
}

/** Exactly one kind of separator present. */
function normalizeSingleSeparator(
  trimmed: string,
  sep: '.' | ',',
  locale: Locale,
): string {
  const parts = trimmed.split(sep);
  const after = parts[parts.length - 1];

  // Repeated separator (e.g. "1.234.567") is always thousands grouping.
  if (parts.length > 2) return parts.join('');

  // Exactly 3 trailing digits is ambiguous (decimal "2,540" vs thousands
  // group "2.500"); the locale convention breaks the tie. Any other count
  // is unambiguously the decimal mark.
  if (after.length === 3) {
    const sepIsDecimal = COMMA_DECIMAL_LOCALES.has(locale)
      ? sep === ','
      : sep === '.';
    return sepIsDecimal ? `${parts[0]}.${after}` : parts[0] + after;
  }
  return `${parts[0]}.${after}`;
}

export function parseLocaleNumber(input: string, locale: Locale): number {
  // JS \s already matches regular, non-breaking and narrow spaces, all of
  // which appear as thousands separators across locales.
  const trimmed = input.trim().replace(/\s/g, '');
  if (!trimmed) return NaN;

  const hasDot = trimmed.includes('.');
  const hasComma = trimmed.includes(',');

  let normalized: string;
  if (hasDot && hasComma) {
    normalized = normalizeMixedSeparators(trimmed);
  } else if (hasDot || hasComma) {
    normalized = normalizeSingleSeparator(trimmed, hasDot ? '.' : ',', locale);
  } else {
    normalized = trimmed;
  }

  return parseFloat(normalized);
}
