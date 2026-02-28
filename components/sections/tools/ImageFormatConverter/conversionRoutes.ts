import type { ImageFormat, OutputFormat } from './types';

export interface ConversionRoute {
  source: ImageFormat;
  target: OutputFormat;
  slug: string;
  href: string;
  desktopOnly: boolean;
}

export const CONVERSION_ROUTES: ConversionRoute[] = [
  { source: 'png', target: 'jpg', slug: 'konwerter-png-na-jpg', href: '/narzedzia/konwerter-png-na-jpg', desktopOnly: false },
  { source: 'jpg', target: 'png', slug: 'konwerter-jpg-na-png', href: '/narzedzia/konwerter-jpg-na-png', desktopOnly: false },
  { source: 'webp', target: 'jpg', slug: 'konwerter-webp-na-jpg', href: '/narzedzia/konwerter-webp-na-jpg', desktopOnly: false },
  { source: 'webp', target: 'png', slug: 'konwerter-webp-na-png', href: '/narzedzia/konwerter-webp-na-png', desktopOnly: false },
  { source: 'svg', target: 'png', slug: 'konwerter-svg-na-png', href: '/narzedzia/konwerter-svg-na-png', desktopOnly: false },
  { source: 'svg', target: 'jpg', slug: 'konwerter-svg-na-jpg', href: '/narzedzia/konwerter-svg-na-jpg', desktopOnly: false },
  { source: 'bmp', target: 'jpg', slug: 'konwerter-bmp-na-jpg', href: '/narzedzia/konwerter-bmp-na-jpg', desktopOnly: false },
  { source: 'bmp', target: 'png', slug: 'konwerter-bmp-na-png', href: '/narzedzia/konwerter-bmp-na-png', desktopOnly: false },
  { source: 'gif', target: 'png', slug: 'konwerter-gif-na-png', href: '/narzedzia/konwerter-gif-na-png', desktopOnly: false },
  { source: 'gif', target: 'jpg', slug: 'konwerter-gif-na-jpg', href: '/narzedzia/konwerter-gif-na-jpg', desktopOnly: false },
  { source: 'jpg', target: 'webp', slug: 'konwerter-jpg-na-webp', href: '/narzedzia/konwerter-jpg-na-webp', desktopOnly: true },
  { source: 'png', target: 'webp', slug: 'konwerter-png-na-webp', href: '/narzedzia/konwerter-png-na-webp', desktopOnly: true },
];

export function getConversionRoute(source: ImageFormat, target: OutputFormat): ConversionRoute | undefined {
  return CONVERSION_ROUTES.find((r) => r.source === source && r.target === target);
}

export const SOURCE_FORMATS: ImageFormat[] = ['jpg', 'png', 'webp', 'svg', 'bmp', 'gif'];
export const TARGET_FORMATS: OutputFormat[] = ['jpg', 'png', 'webp'];

export function getAvailableTargets(source: ImageFormat): OutputFormat[] {
  return CONVERSION_ROUTES.filter((r) => r.source === source).map((r) => r.target);
}

export function getAvailableSources(target: OutputFormat): ImageFormat[] {
  return CONVERSION_ROUTES.filter((r) => r.target === target).map((r) => r.source);
}
