/**
 * URL utilities for generating absolute URLs
 *
 * ZASADY BUDOWANIA URL-i W PROJEKCIE ARTEON:
 *
 * 1. KANONICZNA DOMENA: https://www.arteonagency.pl
 *    - Zawsze używaj www (nie arteonagency.pl)
 *    - Zawsze HTTPS (nie HTTP)
 *
 * 2. TRAILING SLASH: NIE UŻYWAJ
 *    - Poprawnie: /uslugi, /narzedzia/favicon-generator
 *    - Niepoprawnie: /uslugi/, /narzedzia/favicon-generator/
 *    - Wyjątek: root "/" jest OK
 *
 * 3. SPÓJNOŚĆ MIĘDZY:
 *    - canonical (alternates.canonical w metadata)
 *    - og:url (openGraph.url w metadata)
 *    - sitemap (next-sitemap.config.cjs)
 *    - JSON-LD (url, @id, mainEntityOfPage)
 *    - middleware redirects (middleware.ts)
 *
 * 4. PRZY DODAWANIU NOWYCH STRON:
 *    - Użyj toAbsoluteUrl('/sciezka') dla canonical i og:url
 *    - Użyj siteUrl dla @id w JSON-LD (np. `${siteUrl}#organization`)
 *    - NIE używaj względnych URL-i w metadata (np. '/sciezka' bez toAbsoluteUrl)
 *
 * PLIKI POWIĄZANE:
 * - middleware.ts: wymusza redirecty na edge (www, https, trailing slash)
 * - next.config.ts: trailingSlash: false, redirecty legacy
 * - next-sitemap.config.cjs: generowanie sitemap z tym samym SITE_URL
 */

const SITE_URL = 'https://www.arteonagency.pl';

/**
 * Converts a relative or absolute path to an absolute URL
 * @param path - Path to convert (e.g., '/uslugi' or 'https://example.com/page')
 * @returns Absolute URL
 */
export function toAbsoluteUrl(path: string): string {
  if (!path) return SITE_URL;
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${SITE_URL}${cleanPath}`;
}

/**
 * Site URL constant
 */
export const siteUrl = SITE_URL;

/**
 * Generates absolute URL for an image
 * @param imagePath - Image path (relative or absolute)
 * @returns Absolute image URL
 */
export function toAbsoluteImageUrl(imagePath: string | undefined): string | undefined {
  if (!imagePath) return undefined;
  return toAbsoluteUrl(imagePath);
}
