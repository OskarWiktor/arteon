'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { createPortal } from 'react-dom';
import { NavTranslate2 as RiTranslate2, NavCloseLine as RiCloseLine, NavArrowDownSLine as RiArrowDownSLine } from '@/components/ui/icons/NavIcons';
import Wrapper from '@/components/ui/Wrapper';
import { useLocale, type Locale } from '@/lib/LocaleContext';
import { getAlternateToolHref } from '@/lib/i18n/tool-registry';
import { SUPPORTED_LOCALES, LOCALE_CONFIG } from '@/lib/i18n/locales';
import { useOutsideClick } from '@/hooks/useOutsideClick';
import { useEscapeKey } from '@/hooks/useEscapeKey';
import { useScrollLock } from '@/hooks/useScrollLock';

type AlternateLink = {
  locale: Locale;
  href: string;
  label: string;
  hreflang: string;
  title: string;
  name: string;
};

const switchTitle: Record<Locale, string> = {
  pl: 'Przejdź na polski',
  en: 'Switch to English',
  de: 'Auf Deutsch wechseln',
  es: 'Cambiar a español',
  fr: 'Passer au français',
  pt: 'Mudar para português',
  it: "Passa all'italiano",
  ro: 'Schimbă în română',
  nl: 'Schakel naar Nederlands',
  hu: 'Váltás magyarra',
  id: 'Beralih ke Bahasa Indonesia',
  vi: 'Chuyển sang tiếng Việt',
  tr: 'Türkçeye geç',
  tl: 'Lumipat sa Filipino',
  sw: 'Badili kwa Kiswahili',
  ms: 'Tukar ke Bahasa Melayu',
  cs: 'P\u0159epnout na \u010de\u0161tinu',
  sv: 'Byt till svenska',
  sq: 'Kalo n\u00eb shqip',
  da: 'Skift til dansk',
  no: 'Bytt til norsk',
  fi: 'Vaihda suomeksi',
  sk: 'Prepnúť na slovenčinu',
  hr: 'Prebaci na hrvatski',
  lt: 'Perjungti į lietuvių',
  sl: 'Preklopi na slovenščino',
};

const toggleLabel: Record<Locale, string> = {
  pl: 'Zmień język',
  en: 'Change language',
  de: 'Sprache ändern',
  es: 'Cambiar idioma',
  fr: 'Changer de langue',
  pt: 'Alterar idioma',
  it: 'Cambia lingua',
  ro: 'Schimbă limba',
  nl: 'Taal wijzigen',
  hu: 'Nyelv váltás',
  id: 'Ubah bahasa',
  vi: 'Đổi ngôn ngữ',
  tr: 'Dil değiştir',
  tl: 'Palitan ang wika',
  sw: 'Badilisha lugha',
  ms: 'Tukar bahasa',
  cs: 'Zm\u011bnit jazyk',
  sv: '\u00c4ndra spr\u00e5k',
  sq: 'Ndrysho gjuh\u00ebn',
  da: 'Skift sprog',
  no: 'Bytt spr\u00e5k',
  fi: 'Vaihda kieltä',
  sk: 'Zmeni\u0165 jazyk',
  hr: 'Promijeni jezik',
  lt: 'Pakeisti kalb\u0105',
  sl: 'Spremeni jezik',
};

const chooseLabel: Record<Locale, string> = {
  pl: 'Wybierz język',
  en: 'Choose language',
  de: 'Sprache wählen',
  es: 'Elegir idioma',
  fr: 'Choisir la langue',
  pt: 'Escolher idioma',
  it: 'Scegli lingua',
  ro: 'Alege limba',
  nl: 'Kies taal',
  hu: 'Nyelv választása',
  id: 'Pilih bahasa',
  vi: 'Chọn ngôn ngữ',
  tr: 'Dil seçin',
  tl: 'Pumili ng wika',
  sw: 'Chagua lugha',
  ms: 'Pilih bahasa',
  cs: 'Zvolte jazyk',
  sv: 'V\u00e4lj spr\u00e5k',
  sq: 'Zgjidh gjuh\u00ebn',
  da: 'V\u00e6lg sprog',
  no: 'Velg spr\u00e5k',
  fi: 'Valitse kieli',
  sk: 'Vyberte jazyk',
  hr: 'Odaberite jezik',
  lt: 'Pasirinkite kalb\u0105',
  sl: 'Izberite jezik',
};

const popularLabel: Record<Locale, string> = {
  pl: 'Popularne',
  en: 'Popular',
  de: 'Beliebt',
  es: 'Popular',
  fr: 'Populaire',
  pt: 'Popular',
  it: 'Popolari',
  ro: 'Populare',
  nl: 'Populair',
  hu: 'Népszerű',
  id: 'Populer',
  vi: 'Phổ biến',
  tr: 'Pop\u00fcler',
  tl: 'Sikat',
  sw: 'Maarufu',
  ms: 'Popular',
  cs: 'Obl\u00edben\u00e9',
  sv: 'Popul\u00e4ra',
  sq: 'T\u00eb njohura',
  da: 'Popul\u00e6re',
  no: 'Popul\u00e6re',
  fi: 'Suositut',
  sk: 'Ob\u013e\u00faben\u00e9',
  hr: 'Popularni',
  lt: 'Populiar\u016bs',
  sl: 'Priljubljeni',
};

const otherLabel: Record<Locale, string> = {
  pl: 'Inne',
  en: 'Other',
  de: 'Andere',
  es: 'Otros',
  fr: 'Autres',
  pt: 'Outros',
  it: 'Altre',
  ro: 'Altele',
  nl: 'Overig',
  hu: 'Egyéb',
  id: 'Lainnya',
  vi: 'Khác',
  tr: 'Di\u011fer',
  tl: 'Iba pa',
  sw: 'Nyingine',
  ms: 'Lain-lain',
  cs: 'Ostatn\u00ed',
  sv: '\u00d6vriga',
  sq: 'T\u00eb tjera',
  da: 'Andre',
  no: 'Andre',
  fi: 'Muut',
  sk: 'Ostatn\u00e9',
  hr: 'Ostali',
  lt: 'Kiti',
  sl: 'Ostali',
};

const closeModalLabel: Record<Locale, string> = {
  pl: 'Zamknij',
  en: 'Close',
  de: 'Schließen',
  es: 'Cerrar',
  fr: 'Fermer',
  pt: 'Fechar',
  it: 'Chiudi',
  ro: 'Închide',
  nl: 'Sluiten',
  hu: 'Bezárás',
  id: 'Tutup',
  vi: 'Đóng',
  tr: 'Kapat',
  tl: 'Isara',
  sw: 'Funga',
  ms: 'Tutup',
  cs: 'Zav\u0159\u00edt',
  sv: 'St\u00e4ng',
  sq: 'Mbyll',
  da: 'Luk',
  no: 'Lukk',
  fi: 'Sulje',
  sk: 'Zavrie\u0165',
  hr: 'Zatvori',
  lt: 'U\u017edaryti',
  sl: 'Zapri',
};

const POPULAR_LOCALES: Locale[] = ['pl', 'en', 'de', 'es', 'fr', 'pt', 'it'];

function splitIntoColumns<T>(items: T[], cols: number): T[][] {
  const result: T[][] = Array.from({ length: cols }, () => []);
  const perCol = Math.ceil(items.length / cols);
  items.forEach((item, i) => {
    const col = Math.floor(i / perCol);
    result[Math.min(col, cols - 1)].push(item);
  });
  return result;
}

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
      name: config.name,
      title: switchTitle[targetLocale] ?? `Switch to ${config.name}`,
    });
  }

  return links;
}

export default function LanguageSwitcher({ variant = 'desktop' }: { variant?: 'desktop' | 'mobile' }) {
  const locale = useLocale();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [headerBottom, setHeaderBottom] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const links = getAlternateLinks(pathname, locale);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (variant !== 'desktop') return;
    const header = document.getElementById('navigation');
    if (!header) return;
    const update = () => setHeaderBottom(header.getBoundingClientRect().bottom);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(header);
    return () => ro.disconnect();
  }, [variant]);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useOutsideClick([containerRef, panelRef], () => setIsOpen(false), isOpen && variant === 'desktop');

  useEscapeKey(() => {
    setIsOpen(false);
    btnRef.current?.focus();
  }, isOpen);

  useScrollLock(variant === 'mobile' && isOpen);

  if (links.length === 0) return null;

  const currentConfig = LOCALE_CONFIG[locale];
  const popular = links.filter((l) => POPULAR_LOCALES.includes(l.locale));
  const other = links.filter((l) => !POPULAR_LOCALES.includes(l.locale));

  const close = () => {
    setIsOpen(false);
    btnRef.current?.focus();
  };

  const popularSorted = [...popular].sort((a, b) => a.name.localeCompare(b.name));
  const otherSorted = [...other].sort((a, b) => a.name.localeCompare(b.name));
  const popularCols = splitIntoColumns(popularSorted, 2);
  const otherCols = splitIntoColumns(otherSorted, 4);

  const linkItem = (link: AlternateLink) => (
    <Link
      key={link.locale}
      href={link.href}
      role="menuitem"
      hrefLang={link.hreflang}
      title={link.title}
      onClick={close}
      className="group/link focus-visible:ring-primary flex items-center gap-3 rounded-xl px-3 py-2.5 transition-colors duration-150 hover:bg-white focus:outline-none focus-visible:ring-2"
    >
      <span className="text-primary-mid group-hover/link:text-primary w-6 text-center text-xs font-semibold uppercase transition-colors">{link.label}</span>
      <span className="text-mid group-hover/link:text-primary text-sm font-medium transition-colors">{link.name}</span>
    </Link>
  );

  /* ── Desktop: full-width flyout panel (matches tools/services submenu) ── */
  if (variant === 'desktop') {
    return (
      <>
        <div ref={containerRef} className="relative flex items-center gap-0.5">
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
            <span className="inline-flex transition-transform duration-200" style={{ transform: isOpen ? 'rotate(180deg)' : undefined }}>
              <RiArrowDownSLine className="h-4 w-4" aria-hidden="true" />
            </span>
          </button>
        </div>

        {mounted &&
          isOpen &&
          createPortal(
            <div
              ref={panelRef}
              role="menu"
              className="animate-dropdown-in fixed left-0 z-50 w-full bg-white/95 py-6 shadow-[0_8px_20px_-4px_rgba(0,0,0,0.08)] backdrop-blur-sm"
              style={{ top: headerBottom }}
            >
              <Wrapper>
                <div className="grid grid-cols-7 gap-0">
                  {/* Column 1: Current language */}
                  <div className="border-primary-light border-r pr-4">
                    <div className="text-primary flex items-center gap-3 rounded-xl bg-white px-4 py-3">
                      <RiTranslate2 className="h-5 w-5 shrink-0" aria-hidden="true" />
                      <div>
                        <div className="text-dark text-sm font-medium">{chooseLabel[locale]}</div>
                        <div className="text-light text-xs">
                          {currentConfig.label} — {currentConfig.name}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Columns 2-3: Popular languages (alphabetical, top-to-bottom) */}
                  {popularSorted.length > 0 && (
                    <>
                      <div className="pl-6">
                        <span className="text-light mb-2 block px-3 text-[11px] font-semibold tracking-wider uppercase">{popularLabel[locale]}</span>
                        <div className="flex flex-col">{popularCols[0].map(linkItem)}</div>
                      </div>
                      <div className="border-primary-light border-r pt-5 pr-4">
                        <div className="flex flex-col">{popularCols[1].map(linkItem)}</div>
                      </div>
                    </>
                  )}

                  {/* Columns 4-5-6-7: Other languages (alphabetical, top-to-bottom) */}
                  {otherSorted.length > 0 && (
                    <>
                      <div className="pl-6">
                        <span className="text-light mb-2 block px-3 text-[11px] font-semibold tracking-wider uppercase">{otherLabel[locale]}</span>
                        <div className="flex flex-col">{otherCols[0].map(linkItem)}</div>
                      </div>
                      <div className="pt-5">
                        <div className="flex flex-col">{otherCols[1].map(linkItem)}</div>
                      </div>
                      <div className="pt-5">
                        <div className="flex flex-col">{otherCols[2].map(linkItem)}</div>
                      </div>
                      <div className="pt-5">
                        <div className="flex flex-col">{otherCols[3].map(linkItem)}</div>
                      </div>
                    </>
                  )}
                </div>
              </Wrapper>
            </div>,
            document.body,
          )}
      </>
    );
  }

  /* ── Mobile: centered modal overlay ──────────────────────────────── */
  return (
    <>
      <div ref={containerRef} className="relative">
        <button
          ref={btnRef}
          type="button"
          onClick={() => setIsOpen((p) => !p)}
          aria-haspopup="dialog"
          aria-expanded={isOpen}
          aria-label={toggleLabel[locale] ?? 'Change language'}
          className="text-primary hover:bg-primary-light focus-visible:ring-primary flex h-8 items-center gap-1.5 rounded-lg px-2 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
        >
          <RiTranslate2 className="h-5 w-5" aria-hidden="true" />
          <span className="text-xs font-semibold tracking-wide uppercase">{currentConfig.label}</span>
        </button>
      </div>

      {mounted &&
        isOpen &&
        createPortal(
          <>
            {/* Backdrop */}
            <div className="animate-modal-backdrop fixed inset-0 z-[1100] bg-black/40 backdrop-blur-[2px]" onClick={close} aria-hidden="true" />

            {/* Modal panel */}
            <div
              ref={panelRef}
              role="dialog"
              aria-modal="true"
              aria-label={chooseLabel[locale]}
              className="animate-dropdown-in fixed inset-x-4 top-1/2 z-[1101] max-h-[80dvh] -translate-y-1/2 overflow-y-auto rounded-2xl bg-white p-5 shadow-2xl sm:inset-x-auto sm:left-1/2 sm:w-[420px] sm:-translate-x-1/2"
            >
              {/* Header */}
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-dark text-base font-semibold">{chooseLabel[locale]}</h2>
                <button
                  type="button"
                  onClick={close}
                  className="text-primary hover:bg-primary-light focus-visible:ring-primary flex h-8 w-8 items-center justify-center rounded-lg transition focus:outline-none focus-visible:ring-2"
                  aria-label={closeModalLabel[locale]}
                >
                  <RiCloseLine className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>

              {/* Current language badge */}
              <div className="mb-4 flex items-center gap-2.5 rounded-xl bg-neutral-50 px-3 py-2.5">
                <RiTranslate2 className="text-primary h-4 w-4 shrink-0" aria-hidden="true" />
                <span className="text-dark text-sm font-semibold">
                  {currentConfig.label} — {currentConfig.name}
                </span>
              </div>

              {/* Two columns */}
              <div className="grid grid-cols-2 gap-x-2">
                {popular.length > 0 && (
                  <div>
                    <span className="text-light mb-1.5 block px-2 text-[10px] font-semibold tracking-wider uppercase">{popularLabel[locale]}</span>
                    <div className="flex flex-col">
                      {popular.map((link) => (
                        <Link
                          key={link.locale}
                          href={link.href}
                          hrefLang={link.hreflang}
                          title={link.title}
                          onClick={close}
                          className="text-dark flex items-center gap-2 rounded-lg px-2 py-2 text-[13px] transition hover:bg-neutral-100"
                        >
                          <span className="text-light w-5 text-center text-[11px] font-semibold uppercase">{link.label}</span>
                          <span>{link.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {other.length > 0 && (
                  <div>
                    <span className="text-light mb-1.5 block px-2 text-[10px] font-semibold tracking-wider uppercase">{otherLabel[locale]}</span>
                    <div className="flex flex-col">
                      {other.map((link) => (
                        <Link
                          key={link.locale}
                          href={link.href}
                          hrefLang={link.hreflang}
                          title={link.title}
                          onClick={close}
                          className="text-dark flex items-center gap-2 rounded-lg px-2 py-2 text-[13px] transition hover:bg-neutral-100"
                        >
                          <span className="text-light w-5 text-center text-[11px] font-semibold uppercase">{link.label}</span>
                          <span>{link.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </>,
          document.body,
        )}
    </>
  );
}
