'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { RiTranslate2 } from 'react-icons/ri';
import { useLocale, type Locale } from '@/lib/LocaleContext';
import { getAlternateToolHref } from '@/lib/i18n/tool-registry';
import { SUPPORTED_LOCALES, LOCALE_CONFIG } from '@/lib/i18n/locales';
import { useOutsideClick } from '@/hooks/useOutsideClick';
import { useEscapeKey } from '@/hooks/useEscapeKey';

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
  de: 'Auf Deutsch wechseln',
  es: 'Cambiar a español',
  fr: 'Passer au français',
  pt: 'Mudar para português',
};

const toggleLabel: Record<Locale, string> = {
  pl: 'Zmień język',
  en: 'Change language',
  de: 'Sprache ändern',
  es: 'Cambiar idioma',
  fr: 'Changer de langue',
  pt: 'Alterar idioma',
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

  return links.sort((a, b) => a.label.localeCompare(b.label));
}

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);

  const links = getAlternateLinks(pathname, locale);

  useOutsideClick(containerRef, () => setIsOpen(false), isOpen);
  useEscapeKey(() => {
    setIsOpen(false);
    btnRef.current?.focus();
  }, isOpen);

  if (links.length === 0) return null;

  const currentConfig = LOCALE_CONFIG[locale];

  return (
    <div ref={containerRef} className="relative">
      <button
        ref={btnRef}
        type="button"
        onClick={() => setIsOpen((p) => !p)}
        aria-haspopup="menu"
        aria-expanded={isOpen}
        aria-label={toggleLabel[locale] ?? 'Change language'}
        className="text-primary hover:bg-primary-light focus-visible:ring-primary flex h-8 items-center gap-1.5 rounded-lg px-2 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
      >
        <RiTranslate2 className="h-5 w-5" aria-hidden="true" />
        <span className="text-xs font-semibold tracking-wide uppercase">{currentConfig.label}</span>
      </button>

      {isOpen && (
        <div role="menu" className="absolute right-0 z-50 mt-1 min-w-[120px] rounded-lg border border-black/10 bg-white py-1 shadow-lg">
          {/* Current language */}
          <span role="menuitem" aria-current="true" className="flex w-full items-center gap-2 px-3 py-1.5 text-sm font-bold">
            {currentConfig.label} - {currentConfig.name}
          </span>

          {/* Alternate languages */}
          {links.map((link) => (
            <Link
              key={link.locale}
              href={link.href}
              role="menuitem"
              hrefLang={link.hreflang}
              title={link.title}
              onClick={() => setIsOpen(false)}
              className="flex w-full items-center gap-2 px-3 py-1.5 text-sm font-normal transition hover:bg-neutral-100"
            >
              {link.label} - {LOCALE_CONFIG[link.locale].name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
