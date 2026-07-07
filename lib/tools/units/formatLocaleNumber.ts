import type { Locale } from '@/types/locale';
import { COMMA_DECIMAL_LOCALES } from './parseLocaleNumber';

/**
 * Format a conversion result for display, honoring the decimal separator
 * convention of `locale` and removing trailing zeros so the user sees
 * "83,82" instead of "83,8200".
 *
 * `precision` is the maximum number of decimal places to round to; the
 * value is first rounded to that precision, then any trailing zeros (and a
 * left-over decimal separator) are stripped. Comma-decimal locales (pl, de,
 * …) get a comma separator; everyone else keeps the dot.
 *
 * @param value - The numeric result to format.
 * @param precision - Maximum number of decimal places (0 rounds to an integer).
 * @param locale - Locale whose decimal-separator convention to apply.
 * @returns The formatted string, or an empty string for non-finite input.
 */
export function formatLocaleNumber(
  value: number,
  precision: number,
  locale: Locale,
): string {
  if (!Number.isFinite(value)) return '';

  let formatted: string;
  if (precision <= 0) {
    formatted = Math.round(value).toString();
  } else {
    // toFixed avoids exponential notation for the value ranges these tools
    // handle. It pads with trailing zeros ("83.8200"); trim them (and a
    // dangling decimal point) by hand to sidestep a backtracking regex.
    formatted = value.toFixed(precision);
    let end = formatted.length;
    while (end > 0 && formatted[end - 1] === '0') end--;
    if (formatted[end - 1] === '.') end--;
    formatted = formatted.slice(0, end);
  }

  if (COMMA_DECIMAL_LOCALES.has(locale)) {
    formatted = formatted.replace('.', ',');
  }
  return formatted;
}
