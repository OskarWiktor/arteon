'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLocale, type Locale } from '@/lib/LocaleContext';
import { getAlternateToolHref } from '@/lib/i18n/tool-registry';
import { SUPPORTED_LOCALES, LOCALE_CONFIG } from '@/lib/i18n/locales';

type AlternateLink = {
  locale: Locale;
  href: string;
  label: string;
  hreflang: string;
  title: string;
};

const switchTitle: Record<Locale, string> = {
  pl: 'Przejdź na polski',
  en: 'Switch to English',
};

function getAlternateLinks(pathname: string, currentLocale: Locale): AlternateLink[] {
  const links: AlternateLink[] = [];

  for (const targetLocale of SUPPORTED_LOCALES) {
    if (targetLocale === currentLocale) continue;

    const href = getAlternateToolHref(pathname, currentLocale, targetLocale);
    if (!href) continue;

    const config = LOCALE_CONFIG[targetLocale];
    links.push({
      locale: targetLocale,
      href,
      label: config.label,
      hreflang: config.hreflang,
      title: switchTitle[targetLocale] ?? `Switch to ${config.name}`,
    });
  }

  return links;
}

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();

  const links = getAlternateLinks(pathname, locale);

  if (links.length === 0) return null;

  // For 2 languages: single button (like before)
  // For 3+ languages: render all buttons inline
  return (
    <div className="flex items-center gap-1">
      {links.map((link) => (
        <Link
          key={link.locale}
          href={link.href}
          className="inline-flex items-center rounded-md border border-black/10 bg-white px-2.5 py-1 text-xs font-semibold tracking-wide uppercase transition hover:bg-neutral-100"
          hrefLang={link.hreflang}
          title={link.title}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}
