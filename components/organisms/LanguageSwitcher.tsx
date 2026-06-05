'use client';

import { usePathname } from 'next/navigation';
import { startTransition, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import {
  NavTranslate2 as RiTranslate2,
  NavCloseLine as RiCloseLine,
  NavArrowDownSLine as RiArrowDownSLine,
} from '@/components/atoms/NavIcons';
import Wrapper from '@/components/atoms/Wrapper';
import { useEscapeKey } from '@/hooks/useEscapeKey';
import { useIsMounted } from '@/hooks/useIsMounted';
import { useOutsideClick } from '@/hooks/useOutsideClick';
import { useScrollLock } from '@/hooks/useScrollLock';
import { SUPPORTED_LOCALES, LOCALE_CONFIG } from '@/lib/i18n/locales';
import { getAlternateToolHref } from '@/lib/i18n/toolRegistry';
import {
  useLocale,
  useDictionary,
  useLocaleConfig,
  type Locale,
} from '@/lib/LocaleContext';
import {
  flexCenterBetweenClasses,
  flexCenterClasses,
  focusRingClasses,
  largeIconSizeClasses,
  modalBackdropClasses,
  normalIconSizeClasses,
  smallIconSizeClasses,
} from '@/lib/uiClasses';
import { cn } from '@/lib/utils';
import InlineLink from '../atoms/InlineLink';
type AlternateLink = {
  locale: Locale;
  href: string;
  label: string;
  hreflang: string;
  title: string;
  name: string;
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

function getAlternateLinks(
  pathname: string,
  currentLocale: Locale,
): AlternateLink[] {
  const links: AlternateLink[] = [];

  for (const targetLocale of SUPPORTED_LOCALES) {
    if (targetLocale === currentLocale) continue;

    const href = getAlternateToolHref(pathname, currentLocale, targetLocale);
    if (!href) continue;

    const safeHref = href.startsWith('/') ? href : `/${href}`;

    const config = LOCALE_CONFIG[targetLocale];
    links.push({
      locale: targetLocale,
      href: safeHref,
      label: config.label,
      hreflang: config.hreflang,
      name: config.name,
      title: `Switch to ${config.name}`,
    });
  }

  return links;
}

/**
 * Render a language selection control that displays either a desktop dropdown or a mobile modal.
 *
 * @param variant - Chooses the presentation: `'desktop'` shows a header-anchored dropdown, `'mobile'` shows a full-screen modal dialog. Defaults to `'desktop'`.
 * @returns The language switcher UI as a React element, or `null` when there are no alternate locale links.
 */
export default function LanguageSwitcher({
  variant = 'desktop',
}: {
  variant?: 'desktop' | 'mobile';
}) {
  const locale = useLocale();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const mounted = useIsMounted();
  const [headerBottom, setHeaderBottom] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const links = getAlternateLinks(pathname, locale);
  const t = useDictionary().languageSwitcher;
  const currentConfig = useLocaleConfig();

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

  useOutsideClick(
    [containerRef, panelRef],
    () => setIsOpen(false),
    isOpen && variant === 'desktop',
  );

  useEscapeKey(() => {
    setIsOpen(false);
    btnRef.current?.focus();
  }, isOpen);

  useScrollLock(variant === 'mobile' && isOpen);

  const {
    popularCols,
    otherCols,
    popularMobileCols,
    otherMobileCols,
    popularSorted,
    otherSorted,
  } = (() => {
    const popular = links.filter(l => POPULAR_LOCALES.includes(l.locale));
    const other = links.filter(l => !POPULAR_LOCALES.includes(l.locale));
    const pSorted = [...popular].sort((a, b) => a.name.localeCompare(b.name));
    const oSorted = [...other].sort((a, b) => a.name.localeCompare(b.name));
    return {
      popularSorted: pSorted,
      otherSorted: oSorted,
      popularCols: splitIntoColumns(pSorted, 2),
      otherCols: splitIntoColumns(oSorted, 3),
      popularMobileCols: splitIntoColumns(pSorted, 2),
      otherMobileCols: splitIntoColumns(oSorted, 2),
    };
  })();

  if (links.length === 0) return null;

  const close = () => {
    setIsOpen(false);
    btnRef.current?.focus();
  };

  const linkItem = (link: AlternateLink) => (
    <InlineLink
      key={link.locale}
      href={link.href}
      role='menuitem'
      hrefLang={link.hreflang}
      title={link.title}
      onClick={close}
      className='group/link gap-3 rounded-lg px-3 py-2.5 transition-colors hover:bg-white'
    >
      <span className='w-6 text-center text-xs font-semibold text-primary-mid uppercase transition-colors group-hover/link:text-primary'>
        {link.label}
      </span>
      <span className='text-sm font-medium text-mid transition-colors group-hover/link:text-primary'>
        {link.name}
      </span>
    </InlineLink>
  );

  if (variant === 'desktop') {
    return (
      <>
        <div ref={containerRef} className='relative flex items-center gap-0.5'>
          <button
            ref={btnRef}
            type='button'
            onClick={() => startTransition(() => setIsOpen(p => !p))}
            aria-haspopup='menu'
            aria-expanded={isOpen}
            aria-label={t.toggleLabel}
            className={cn(
              'flex h-8 items-center gap-1.5 rounded-md px-2 text-primary transition-colors hover:bg-primary-light',
              focusRingClasses,
            )}
          >
            <RiTranslate2
              className={normalIconSizeClasses}
              aria-hidden='true'
            />
            <span className='text-xs font-semibold tracking-wide uppercase'>
              {currentConfig.label}
            </span>
            <span
              className='inline-flex transition-transform duration-200'
              style={{ transform: isOpen ? 'rotate(180deg)' : undefined }}
            >
              <RiArrowDownSLine
                className={smallIconSizeClasses}
                aria-hidden='true'
              />
            </span>
          </button>
        </div>

        {mounted &&
          isOpen &&
          createPortal(
            <div
              ref={panelRef}
              role='menu'
              className='animate-dropdown-in fixed left-0 z-50 w-full bg-white/95 py-6 shadow-[0_8px_20px_-4px_rgba(0,0,0,0.08)] backdrop-blur-sm'
              style={{ top: headerBottom }}
            >
              <Wrapper>
                <div className='grid grid-cols-6 gap-0'>
                  <div className='border-r border-primary-light pr-4'>
                    <div className='flex items-center gap-3 rounded-lg bg-white px-4 py-3 text-primary'>
                      <RiTranslate2
                        className={cn('shrink-0', normalIconSizeClasses)}
                        aria-hidden='true'
                      />
                      <div>
                        <div className='text-sm font-medium text-dark'>
                          {t.chooseLabel}
                        </div>
                        <div className='text-xs text-light'>
                          {currentConfig.label} - {currentConfig.name}
                        </div>
                      </div>
                    </div>
                  </div>

                  {popularSorted.length > 0 && (
                    <>
                      <div className='border-r border-primary-light pr-4 pl-6'>
                        <span className='mb-2 block px-3 text-[11px] font-semibold tracking-wider text-light uppercase'>
                          {t.popularLabel}
                        </span>
                        <div className='flex flex-col'>
                          {popularCols[0].map(linkItem)}
                        </div>
                      </div>
                      {popularCols[1]?.length > 0 && (
                        <div className='border-r border-primary-light pt-5 pr-4'>
                          <div className='flex flex-col'>
                            {popularCols[1].map(linkItem)}
                          </div>
                        </div>
                      )}
                    </>
                  )}

                  {otherSorted.length > 0 && (
                    <>
                      <div className='pl-6'>
                        <span className='mb-2 block px-3 text-[11px] font-semibold tracking-wider text-light uppercase'>
                          {t.otherLabel}
                        </span>
                        <div className='flex flex-col'>
                          {otherCols[0].map(linkItem)}
                        </div>
                      </div>
                      {otherCols[1]?.length > 0 && (
                        <div className='pt-5'>
                          <div className='flex flex-col'>
                            {otherCols[1].map(linkItem)}
                          </div>
                        </div>
                      )}
                      {otherCols[2]?.length > 0 && (
                        <div className='pt-5'>
                          <div className='flex flex-col'>
                            {otherCols[2].map(linkItem)}
                          </div>
                        </div>
                      )}
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

  return (
    <>
      <div ref={containerRef} className='relative'>
        <button
          ref={btnRef}
          type='button'
          onClick={() => startTransition(() => setIsOpen(p => !p))}
          aria-haspopup='dialog'
          aria-expanded={isOpen}
          aria-label={t.toggleLabel}
          className={cn(
            'flex h-8 items-center gap-1.5 rounded-md px-2 text-primary transition-colors hover:bg-primary-light focus-visible:ring-primary',
            focusRingClasses,
          )}
        >
          <RiTranslate2 className={normalIconSizeClasses} aria-hidden='true' />
          <span className='text-xs font-semibold tracking-wide uppercase'>
            {currentConfig.label}
          </span>
        </button>
      </div>

      {mounted &&
        isOpen &&
        createPortal(
          <>
            <div
              className={cn(
                'fixed inset-0 z-1100 bg-black/50',
                modalBackdropClasses,
              )}
              onClick={close}
              aria-hidden='true'
            />

            <div
              ref={panelRef}
              role='dialog'
              aria-modal='true'
              aria-label={t.chooseLabel}
              className='animate-dropdown-in fixed inset-x-4 top-1/2 z-1101 max-h-[80dvh] -translate-y-1/2 overflow-y-auto rounded-lg bg-white p-5 shadow-2xl sm:inset-x-auto sm:left-1/2 sm:w-105 sm:-translate-x-1/2'
            >
              <div className={cn('mb-4', flexCenterBetweenClasses)}>
                <h2 className='text-base font-semibold text-dark'>
                  {t.chooseLabel}
                </h2>
                <button
                  type='button'
                  onClick={close}
                  className={cn(
                    'rounded-md text-primary transition-colors hover:bg-primary-light focus-visible:ring-primary',
                    flexCenterClasses,
                    focusRingClasses,
                    largeIconSizeClasses,
                  )}
                  aria-label={t.closeModalLabel}
                >
                  <RiCloseLine
                    className={normalIconSizeClasses}
                    aria-hidden='true'
                  />
                </button>
              </div>

              <div className='mb-4 flex items-center gap-2.5 rounded-lg bg-neutral-50 px-3 py-2.5'>
                <RiTranslate2
                  className={cn('shrink-0 text-primary', smallIconSizeClasses)}
                  aria-hidden='true'
                />
                <span className='text-sm font-semibold text-dark'>
                  {currentConfig.label} - {currentConfig.name}
                </span>
              </div>

              {popularSorted.length > 0 && (
                <>
                  <span className='mb-1.5 block px-2 text-[10px] font-semibold tracking-wider text-light uppercase'>
                    {t.popularLabel}
                  </span>
                  <div className='mb-3 grid grid-cols-2 gap-x-2'>
                    <div className='flex flex-col'>
                      {popularMobileCols[0].map(link => (
                        <InlineLink
                          key={link.locale}
                          href={link.href}
                          hrefLang={link.hreflang}
                          title={link.title}
                          onClick={close}
                          className='gap-2 rounded-md px-2 py-2 text-[13px] transition hover:bg-neutral-100'
                        >
                          <span className='w-5 text-center text-[11px] font-semibold text-light uppercase'>
                            {link.label}
                          </span>
                          <span>{link.name}</span>
                        </InlineLink>
                      ))}
                    </div>
                    {popularMobileCols[1]?.length > 0 && (
                      <div className='flex flex-col'>
                        {popularMobileCols[1].map(link => (
                          <InlineLink
                            key={link.locale}
                            href={link.href}
                            hrefLang={link.hreflang}
                            title={link.title}
                            onClick={close}
                            className='gap-2 rounded-md px-2 py-2 text-[13px] transition hover:bg-neutral-100'
                          >
                            <span className='w-5 text-center text-[11px] font-semibold text-light uppercase'>
                              {link.label}
                            </span>
                            <span>{link.name}</span>
                          </InlineLink>
                        ))}
                      </div>
                    )}
                  </div>
                </>
              )}

              {otherSorted.length > 0 && (
                <>
                  <span className='mb-1.5 block px-2 text-[10px] font-semibold tracking-wider text-light uppercase'>
                    {t.otherLabel}
                  </span>
                  <div className='grid grid-cols-2 gap-x-2'>
                    <div className='flex flex-col'>
                      {otherMobileCols[0].map(link => (
                        <InlineLink
                          key={link.locale}
                          href={link.href}
                          hrefLang={link.hreflang}
                          title={link.title}
                          onClick={close}
                          className='gap-2 rounded-md px-2 py-2 text-[13px] transition hover:bg-neutral-100'
                        >
                          <span className='w-5 text-center text-[11px] font-semibold text-light uppercase'>
                            {link.label}
                          </span>
                          <span>{link.name}</span>
                        </InlineLink>
                      ))}
                    </div>
                    {otherMobileCols[1]?.length > 0 && (
                      <div className='flex flex-col'>
                        {otherMobileCols[1].map(link => (
                          <InlineLink
                            key={link.locale}
                            href={link.href}
                            hrefLang={link.hreflang}
                            title={link.title}
                            onClick={close}
                            className='gap-2 rounded-md px-2 py-2 text-[13px] transition hover:bg-neutral-100'
                          >
                            <span className='w-5 text-center text-[11px] font-semibold text-light uppercase'>
                              {link.label}
                            </span>
                            <span>{link.name}</span>
                          </InlineLink>
                        ))}
                      </div>
                    )}
                  </div>
                </>
              )}
            </div>
          </>,
          document.body,
        )}
    </>
  );
}
