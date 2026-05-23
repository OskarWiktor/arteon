import type { Locale } from '@/types/locale';
import { SUPPORTED_LOCALES } from '@/lib/i18n/locales';

/**
 * Locale prefixes used in URL paths.
 * PL is the default locale with no prefix (routes under `(pl)`).
 */
const LOCALE_PREFIXES: Locale[] = SUPPORTED_LOCALES.filter(l => l !== 'pl');

/**
 * Detect locale from a URL pathname.
 * Returns the locale if the path starts with a known locale prefix, otherwise 'pl'.
 */
export function detectLocaleFromPath(pathname: string): Locale {
  const segment = pathname.split('/')[1]; // first segment after leading /
  if (segment && LOCALE_PREFIXES.includes(segment as Locale)) {
    return segment as Locale;
  }
  return 'pl';
}
