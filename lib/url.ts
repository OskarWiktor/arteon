/**
 * URL utilities for generating absolute URLs
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
