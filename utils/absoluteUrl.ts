const SITE_URL = 'https://www.arteonagency.pl';

export function toAbsoluteUrl(path: string): string {
  if (!path || path === '/') return SITE_URL;
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${SITE_URL}${cleanPath}`;
}

export const siteUrl = SITE_URL;

export function toAbsoluteImageUrl(
  imagePath: string | undefined,
): string | undefined {
  if (!imagePath) return undefined;
  return toAbsoluteUrl(imagePath);
}
