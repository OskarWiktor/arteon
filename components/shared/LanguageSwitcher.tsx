'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLocale } from '@/lib/LocaleContext';

const TOOL_SLUG_MAP: Record<string, string> = {
  // PL → EN
  'jpg-png-na-webp-bez-limitu': 'jpg-png-to-webp-unlimited',
  'edytor-zdjec-online': 'online-image-editor',
  'darmowy-generator-favicon-ico': 'free-favicon-generator',
  'licznik-dlugosci-meta-title-i-description': 'meta-title-description-length-checker',
  'licznik-slow-i-znakow': 'word-and-character-counter',
  'darmowy-generator-stopki-mailowej': 'free-email-signature-generator',
  'sprawdz-czytelnosc-kolorow': 'color-contrast-checker',
  'ekstraktor-kolorow-z-obrazu': 'image-color-extractor',
  'generator-palet-kolorow': 'color-palette-generator',
  'darmowy-generator-kodow-qr': 'free-qr-code-generator',
  // EN → PL (reverse)
  'jpg-png-to-webp-unlimited': 'jpg-png-na-webp-bez-limitu',
  'online-image-editor': 'edytor-zdjec-online',
  'free-favicon-generator': 'darmowy-generator-favicon-ico',
  'meta-title-description-length-checker': 'licznik-dlugosci-meta-title-i-description',
  'word-and-character-counter': 'licznik-slow-i-znakow',
  'free-email-signature-generator': 'darmowy-generator-stopki-mailowej',
  'color-contrast-checker': 'sprawdz-czytelnosc-kolorow',
  'image-color-extractor': 'ekstraktor-kolorow-z-obrazu',
  'color-palette-generator': 'generator-palet-kolorow',
  'free-qr-code-generator': 'darmowy-generator-kodow-qr',
};

function getAlternateHref(pathname: string, currentLocale: 'pl' | 'en'): string | null {
  if (currentLocale === 'pl') {
    // /narzedzia → /en/tools
    if (pathname === '/narzedzia') return '/en/tools';

    // /narzedzia/[slug] → /en/tools/[en-slug]
    const plMatch = pathname.match(/^\/narzedzia\/(.+?)(?:\/instrukcja)?$/);
    if (plMatch) {
      const enSlug = TOOL_SLUG_MAP[plMatch[1]];
      return enSlug ? `/en/tools/${enSlug}` : null;
    }
  }

  if (currentLocale === 'en') {
    // /en/tools → /narzedzia
    if (pathname === '/en/tools') return '/narzedzia';

    // /en/tools/[slug] → /narzedzia/[pl-slug]
    const enMatch = pathname.match(/^\/en\/tools\/(.+)$/);
    if (enMatch) {
      const plSlug = TOOL_SLUG_MAP[enMatch[1]];
      return plSlug ? `/narzedzia/${plSlug}` : null;
    }
  }

  return null;
}

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();

  const alternateHref = getAlternateHref(pathname, locale);

  if (!alternateHref) return null;

  const targetLabel = locale === 'pl' ? 'EN' : 'PL';

  return (
    <Link
      href={alternateHref}
      className="inline-flex items-center rounded-md border border-black/10 bg-white px-2.5 py-1 text-xs font-semibold tracking-wide uppercase transition hover:bg-neutral-100"
      hrefLang={locale === 'pl' ? 'en' : 'pl'}
      title={locale === 'pl' ? 'Switch to English' : 'Przejdź na polski'}
    >
      {targetLabel}
    </Link>
  );
}
