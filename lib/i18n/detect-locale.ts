import type { Locale } from '@/types/locale';

/**
 * Locale prefixes used in URL paths.
 * PL is the default locale with no prefix (routes under `(pl)`).
 */
const LOCALE_PREFIXES: Locale[] = ['en', 'de', 'es', 'fr', 'pt', 'it', 'ro', 'nl', 'hu', 'cs', 'sv', 'da', 'no', 'fi', 'el'];

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
