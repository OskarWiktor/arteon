'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { startTransition, useEffect, useRef, useState, type JSX } from 'react';
import { createPortal } from 'react-dom';
import { RiArrowDownSLine } from 'react-icons/ri';
import LanguageSwitcher from '@/components/organisms/LanguageSwitcher';
import {
  MOBILE_NAV_ITEMS_PL,
  OFFER_SECTIONS_PL,
} from '@/data/pl/navigation-data-pl';
import { useEscapeKey } from '@/hooks/useEscapeKey';
import { useEventListener } from '@/hooks/useEventListener';
import { useFocusTrap } from '@/hooks/useFocusTrap';
import { useIsMounted } from '@/hooks/useIsMounted';
import { useRestoreFocus } from '@/hooks/useRestoreFocus';
import { useScrollLock } from '@/hooks/useScrollLock';
import { useTimeout } from '@/hooks/useTimeout';
import { cn } from '@/lib/clsx';
import { getMobileToolsSections } from '@/lib/i18n/toolRegistry';
import { useLocale, useDictionary, useLocaleConfig } from '@/lib/LocaleContext';
import {
  flexCenterBetweenClasses,
  flexCenterClasses,
  modalBackdropClasses,
  normalIconSizeClasses,
} from '@/lib/uiClasses';
import IconText from '../../atoms/IconText';

type SectionLink = { href: string; title: string; icon?: JSX.Element };
type Section = {
  key: 'witryny' | 'marketing' | 'grafika' | 'tresc';
  title: string;
  hubHref?: string;
  items: SectionLink[];
};

type ToolSectionLink = { href: string; title: string; icon?: JSX.Element };
type ToolSection = {
  key: string;
  title: string;
  items: ToolSectionLink[];
};

function Portal({ children }: { children: React.ReactNode }) {
  const mounted = useIsMounted();
  if (!mounted) return null;
  return createPortal(children, document.body);
}

function onListKeyDown(container: HTMLElement, e: React.KeyboardEvent) {
  const items = container.querySelectorAll<HTMLAnchorElement>('a[href]');
  if (!items.length) return;
  const arr = Array.from(items);
  const idx = arr.findIndex(el => el === document.activeElement);
  if (e.key === 'ArrowDown') {
    e.preventDefault();
    arr[Math.min(idx + 1, arr.length - 1)]?.focus();
  } else if (e.key === 'ArrowUp') {
    e.preventDefault();
    arr[Math.max(idx - 1, 0)]?.focus();
  } else if (e.key === 'Home') {
    e.preventDefault();
    arr[0]?.focus();
  } else if (e.key === 'End') {
    e.preventDefault();
    arr[arr.length - 1]?.focus();
  }
}

function MobileOfferSections({
  sections,
  openKeys,
  toggleKey,
  pathname,
  onNavigate,
}: {
  sections: Section[];
  openKeys: Record<Section['key'], boolean>;
  toggleKey: (key: Section['key']) => void;
  pathname: string;
  onNavigate: () => void;
}) {
  return (
    <div className='flex flex-col'>
      {sections.map(sec => {
        const expanded = openKeys[sec.key];
        return (
          <div key={sec.key} className='mb-1'>
            <div
              className={cn(
                'rounded-lg py-1 transition-colors hover:bg-neutral-100',
                flexCenterBetweenClasses,
              )}
            >
              {sec.hubHref ? (
                <Link
                  href={sec.hubHref}
                  prefetch={false}
                  onClick={onNavigate}
                  className={cn(
                    'inline-block rounded px-3 py-1 text-[15px] text-dark outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
                    {
                      'font-semibold': pathname.startsWith(sec.hubHref),
                    },
                  )}
                >
                  {sec.title}
                </Link>
              ) : (
                <div className='px-3 py-1 text-[15px] text-dark'>
                  {sec.title}
                </div>
              )}

              <button
                type='button'
                aria-expanded={expanded}
                aria-controls={`sec-${sec.key}`}
                onClick={() => toggleKey(sec.key)}
                className={cn(
                  'h-9 w-9 rounded-md text-primary transition-colors outline-none hover:bg-neutral-200 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
                  flexCenterClasses,
                )}
              >
                <span
                  className='inline-flex transition-transform duration-200'
                  style={{
                    transform: expanded ? 'rotate(180deg)' : undefined,
                  }}
                >
                  <RiArrowDownSLine
                    className={normalIconSizeClasses}
                    aria-hidden='true'
                  />
                </span>
              </button>
            </div>

            {expanded && (
              <div id={`sec-${sec.key}`} className='animate-dropdown-in'>
                <div className='ml-3 border-l border-neutral-200 pl-3'>
                  {/* Lista linków nawigacji z progresywną obsługą strzałek
                      (roving focus). Elementy są Tab-nawigowalne; strzałki
                      to dodatek. Reguła daje tu false-positive dla <ul>. */}
                  {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
                  <ul
                    className='flex flex-col gap-1 py-1'
                    onKeyDown={e => {
                      const container =
                        e.currentTarget as unknown as HTMLElement;
                      onListKeyDown(container, e);
                    }}
                  >
                    {sec.items.map(it => (
                      <li key={it.href}>
                        <Link
                          href={it.href}
                          prefetch={false}
                          onClick={onNavigate}
                          className='group flex items-center gap-3 rounded-lg px-2 py-1.75 text-[15px] text-dark transition-colors outline-none hover:bg-neutral-100 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2'
                        >
                          <IconText
                            icon={
                              it.icon ? (
                                <span className='text-primary'>{it.icon}</span>
                              ) : undefined
                            }
                            gap='3'
                            className='min-w-0'
                          >
                            <span className='text-[15px] text-dark'>
                              {it.title}
                            </span>
                          </IconText>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

function navLinkClasses(isActive: boolean) {
  return cn(
    'block rounded-lg px-3 py-1.75 text-[15px] ring-primary ring-offset-2 outline-none focus-visible:ring-2',
    {
      'bg-neutral-50 font-semibold text-dark': isActive,
      'text-dark hover:bg-neutral-100': !isActive,
    },
  );
}

function MobilePlNav({
  realizacjeNav,
  aboutNav,
  edukacjaNav,
  narzedziaNav,
  toolsSections,
  contactHref,
  contactNav,
  mobileNavUi,
  pathname,
  isToolsOpen,
  toggleTools,
  onNavigate,
}: {
  realizacjeNav?: { href: string; label: string };
  aboutNav?: { href: string; label: string };
  edukacjaNav?: { href: string; label: string };
  narzedziaNav?: { href: string; label: string };
  toolsSections: ToolSection[];
  contactHref: string;
  contactNav?: { label: string } | null;
  mobileNavUi: { contact: string };
  pathname: string;
  isToolsOpen: boolean;
  toggleTools: () => void;
  onNavigate: () => void;
}) {
  return (
    <div className='mb-2 flex flex-col gap-1'>
      {realizacjeNav && (
        <Link
          key='realizacje'
          href={realizacjeNav.href}
          prefetch={false}
          onClick={onNavigate}
          aria-current={
            pathname.startsWith(realizacjeNav.href) ? 'page' : undefined
          }
          className={navLinkClasses(pathname.startsWith(realizacjeNav.href))}
        >
          {realizacjeNav.label}
        </Link>
      )}

      {aboutNav && (
        <Link
          key='oNas'
          href={aboutNav.href}
          prefetch={false}
          onClick={onNavigate}
          aria-current={pathname.startsWith(aboutNav.href) ? 'page' : undefined}
          className={navLinkClasses(pathname.startsWith(aboutNav.href))}
        >
          {aboutNav.label}
        </Link>
      )}

      {edukacjaNav && (
        <Link
          key='edukacja'
          href={edukacjaNav.href}
          prefetch={false}
          onClick={onNavigate}
          aria-current={
            pathname.startsWith(edukacjaNav.href) ? 'page' : undefined
          }
          className={navLinkClasses(pathname.startsWith(edukacjaNav.href))}
        >
          {edukacjaNav.label}
        </Link>
      )}

      {narzedziaNav && toolsSections.length > 0 && (
        <div className='rounded-lg py-1 transition-colors hover:bg-neutral-100'>
          <div className={flexCenterBetweenClasses}>
            <Link
              href={narzedziaNav.href}
              prefetch={false}
              onClick={onNavigate}
              aria-current={
                pathname.startsWith(narzedziaNav.href) ? 'page' : undefined
              }
              className={cn(
                'rounded px-3 py-1 text-[15px] outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
                {
                  'font-semibold text-dark': pathname.startsWith(
                    narzedziaNav.href,
                  ),
                  'text-dark': !pathname.startsWith(narzedziaNav.href),
                },
              )}
            >
              {narzedziaNav.label}
            </Link>

            <button
              type='button'
              aria-expanded={isToolsOpen}
              aria-controls='tools-submenu-mobile'
              onClick={toggleTools}
              className={cn(
                'h-9 w-9 rounded-md text-primary transition-colors outline-none hover:bg-neutral-200 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
                flexCenterClasses,
              )}
            >
              <span
                className='inline-flex transition-transform duration-200'
                style={{
                  transform: isToolsOpen ? 'rotate(180deg)' : undefined,
                }}
              >
                <RiArrowDownSLine
                  className={normalIconSizeClasses}
                  aria-hidden='true'
                />
              </span>
            </button>
          </div>

          {isToolsOpen && (
            <div id='tools-submenu-mobile' className='animate-dropdown-in'>
              <ul className='mt-1 ml-3 flex flex-col gap-1 border-l border-neutral-200 pl-3'>
                {toolsSections
                  .flatMap(section => section.items)
                  .map(tool => {
                    const isToolActive = pathname.startsWith(tool.href);
                    return (
                      <li key={tool.href}>
                        <Link
                          href={tool.href}
                          prefetch={false}
                          onClick={onNavigate}
                          aria-current={isToolActive ? 'page' : undefined}
                          className={cn(
                            'flex items-center gap-3 rounded-lg px-2 py-1.75 text-[15px] ring-primary ring-offset-2 outline-none focus-visible:ring-2',
                            {
                              'bg-neutral-50 font-semibold text-dark':
                                isToolActive,
                              'text-dark hover:bg-neutral-100': !isToolActive,
                            },
                          )}
                        >
                          {tool.icon && (
                            <span className='text-primary'>{tool.icon}</span>
                          )}
                          <span className='min-w-0'>{tool.title}</span>
                        </Link>
                      </li>
                    );
                  })}
              </ul>
            </div>
          )}
        </div>
      )}

      {contactHref && (
        <Link
          key='kontakt'
          href={contactHref}
          prefetch={false}
          onClick={onNavigate}
          aria-current={pathname.startsWith(contactHref) ? 'page' : undefined}
          className={navLinkClasses(pathname.startsWith(contactHref))}
        >
          {contactNav?.label ?? mobileNavUi.contact}
        </Link>
      )}
    </div>
  );
}

function MobileToolsOnlyNav({
  localeConfig,
  navUi,
  pathname,
  locale,
  toolsSections,
  openToolSections,
  toggleToolSection,
  onNavigate,
}: {
  localeConfig: {
    toolsIndexHref: string;
    aboutHref?: string;
    contactHref?: string;
  };
  navUi: {
    toolsLabel: string;
    aboutLabel?: string;
    contactLabel?: string;
  };
  pathname: string;
  locale: string;
  toolsSections: ToolSection[];
  openToolSections: Record<string, boolean>;
  toggleToolSection: (key: string) => void;
  onNavigate: () => void;
}) {
  return (
    <>
      <Link
        href={localeConfig.toolsIndexHref}
        prefetch={false}
        onClick={onNavigate}
        aria-current={
          pathname === localeConfig.toolsIndexHref ? 'page' : undefined
        }
        className={cn(
          'mb-2 block rounded-lg px-3 py-1.75 text-[15px] ring-primary ring-offset-2 outline-none focus-visible:ring-2',
          {
            'bg-neutral-50 font-semibold text-dark':
              pathname === localeConfig.toolsIndexHref,
            'text-dark hover:bg-neutral-100':
              pathname !== localeConfig.toolsIndexHref,
          },
        )}
      >
        {navUi.toolsLabel}
      </Link>

      <div className='flex flex-col'>
        {toolsSections.map(sec => {
          const expanded = !!openToolSections[sec.key];
          return (
            <div key={sec.key} className='mb-1'>
              <div
                className={cn(
                  'rounded-lg py-1 transition-colors hover:bg-neutral-100',
                  flexCenterBetweenClasses,
                )}
              >
                <div className='px-3 py-1 text-[15px] text-dark'>
                  {sec.title}
                </div>

                <button
                  type='button'
                  aria-expanded={expanded}
                  aria-controls={`sec-${locale}-${sec.key}`}
                  onClick={() => toggleToolSection(sec.key)}
                  className={cn(
                    'h-9 w-9 rounded-md text-primary transition-colors outline-none hover:bg-neutral-200 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
                    flexCenterClasses,
                  )}
                >
                  <span
                    className='inline-flex transition-transform duration-200'
                    style={{
                      transform: expanded ? 'rotate(180deg)' : undefined,
                    }}
                  >
                    <RiArrowDownSLine
                      className={normalIconSizeClasses}
                      aria-hidden='true'
                    />
                  </span>
                </button>
              </div>

              {expanded && (
                <div
                  id={`sec-${locale}-${sec.key}`}
                  className='animate-dropdown-in'
                >
                  <div className='ml-3 border-l border-neutral-200 pl-3'>
                    {/* Lista linków nawigacji z progresywną obsługą strzałek
                        (roving focus). Elementy są Tab-nawigowalne; strzałki
                        to dodatek. Reguła daje tu false-positive dla <ul>. */}
                    {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
                    <ul
                      className='flex flex-col gap-1 py-1'
                      onKeyDown={e => {
                        const container =
                          e.currentTarget as unknown as HTMLElement;
                        onListKeyDown(container, e);
                      }}
                    >
                      {sec.items.map(it => (
                        <li key={it.href}>
                          <Link
                            href={it.href}
                            prefetch={false}
                            onClick={onNavigate}
                            className='group flex items-center gap-3 rounded-lg px-2 py-1.75 text-[15px] text-dark transition-colors outline-none hover:bg-neutral-100 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2'
                          >
                            <IconText
                              icon={
                                it.icon ? (
                                  <span className='text-primary'>
                                    {it.icon}
                                  </span>
                                ) : undefined
                              }
                              gap='3'
                              className='min-w-0'
                            >
                              <span className='text-[15px] text-dark'>
                                {it.title}
                              </span>
                            </IconText>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {localeConfig.aboutHref && (
        <Link
          href={localeConfig.aboutHref}
          prefetch={false}
          onClick={onNavigate}
          aria-current={
            pathname.startsWith(localeConfig.aboutHref) ? 'page' : undefined
          }
          className={navLinkClasses(
            pathname.startsWith(localeConfig.aboutHref),
          )}
        >
          {navUi.aboutLabel}
        </Link>
      )}

      {localeConfig.contactHref && (
        <Link
          href={localeConfig.contactHref}
          prefetch={false}
          onClick={onNavigate}
          aria-current={
            pathname.startsWith(localeConfig.contactHref) ? 'page' : undefined
          }
          className={navLinkClasses(
            pathname.startsWith(localeConfig.contactHref),
          )}
        >
          {navUi.contactLabel}
        </Link>
      )}

      <div className='my-3 h-px w-full bg-neutral-200' />
    </>
  );
}

/**
 * Renders the mobile slide-over navigation panel and its interactive behaviours.
 *
 * The panel includes locale-aware sections, collapsible subsections, focus trapping,
 * scroll locking, keyboard navigation for lists, and closes on backdrop click, route change,
 * or Escape. It returns `null` when the panel is closed.
 *
 * @param isOpen - Controls whether the mobile navigation is visible
 * @param setIsOpen - Setter used to open or close the mobile navigation
 * @returns The navigation JSX when `isOpen` is true, `null` otherwise
 */
export default function MobileNavigation({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
}) {
  const locale = useLocale();
  const isPl = locale === 'pl';
  const dict = useDictionary();
  const navUi = dict.nav;
  const mobileNavUi = dict.mobileNav;
  const localeConfig = useLocaleConfig();
  const toolsSections = getMobileToolsSections(locale);
  const legalLinks = dict.legal;
  const pathname = usePathname();
  const panelRef = useRef<HTMLDivElement>(null);
  const NAV = isPl ? MOBILE_NAV_ITEMS_PL : [];
  const SECTIONS: Section[] = isPl
    ? OFFER_SECTIONS_PL.map(section => ({
        key: section.key,
        title: section.title,
        hubHref: section.hubHref,
        items: section.items.map(it => {
          const Icon = it.icon;
          return {
            href: it.href,
            title: it.title,
            icon: Icon ? (
              <Icon aria-hidden className={normalIconSizeClasses} />
            ) : undefined,
          };
        }),
      }))
    : [];

  const TOOLS_SECTIONS_MOBILE: ToolSection[] = toolsSections
    .map(section => ({
      key: section.key,
      title: section.title,
      items: section.items
        .filter(it => !it.desktopOnly)
        .map(it => {
          const Icon = it.icon;
          return {
            href: it.href,
            title: it.title,
            icon: Icon ? (
              <Icon aria-hidden className={normalIconSizeClasses} />
            ) : undefined,
          };
        }),
    }))
    .filter(section => section.items.length > 0);

  const [openToolSections, setOpenToolSections] = useState<
    Record<string, boolean>
  >({});

  const toggleToolSection = (key: string) =>
    startTransition(() => {
      setOpenToolSections(prev => {
        const willOpen = !prev[key];
        const next: Record<string, boolean> = {};
        if (willOpen) next[key] = true;
        return next;
      });
    });

  const contactNav = isPl ? NAV.find(it => it.key === 'kontakt') : null;
  const contactHref = contactNav?.href ?? '/kontakt';
  const realizacjeNav = NAV.find(it => it.key === 'realizacje');
  const aboutNav = NAV.find(it => it.key === 'oNas');
  const edukacjaNav = NAV.find(it => it.key === 'edukacja');
  const narzedziaNav = NAV.find(it => it.key === 'narzedzia');

  const { start: focusFirst } = useTimeout();

  const [panelWidth, setPanelWidth] = useState(0);

  const updatePanelWidth = () =>
    setPanelWidth(Math.min(innerWidth * 0.88, 300));
  useEventListener(
    typeof window !== 'undefined' ? window : null,
    'resize',
    updatePanelWidth,
  );

  useEffect(() => {
    updatePanelWidth();
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname, setIsOpen]);

  useScrollLock(isOpen);
  useEscapeKey(() => setIsOpen(false), isOpen);
  useFocusTrap(
    panelRef,
    isOpen,
    'a[href],button:not([disabled]),[tabindex="0"]',
  );
  useRestoreFocus(isOpen);

  useEffect(() => {
    if (!isOpen) return;
    focusFirst(() => {
      const first = panelRef.current?.querySelector<HTMLElement>(
        'a[href],button:not([disabled]),[tabindex="0"]',
      );
      first?.focus();
    }, 0);
  }, [isOpen, focusFirst]);

  const [openKeys, setOpenKeys] = useState<Record<Section['key'], boolean>>({
    witryny: false,
    marketing: false,
    grafika: false,
    tresc: false,
  });

  const [isToolsOpen, setIsToolsOpen] = useState(false);

  const closedKeys = {
    witryny: false,
    marketing: false,
    grafika: false,
    tresc: false,
  } as const;

  const toggleKey = (key: Section['key']) =>
    startTransition(() => {
      const willOpen = !openKeys[key];
      setOpenKeys({ ...closedKeys, [key]: willOpen });
      if (willOpen) {
        setIsToolsOpen(false);
      }
    });

  const toggleTools = () =>
    startTransition(() => {
      const willOpen = !isToolsOpen;
      setIsToolsOpen(willOpen);
      if (willOpen) {
        setOpenKeys(closedKeys);
      }
    });

  if (!isOpen) return null;

  return (
    <>
      <Portal>
        <div
          className={cn(
            'fixed inset-y-0 left-0 z-999 bg-black/40',
            modalBackdropClasses,
          )}
          style={{ right: `${panelWidth}px` }}
          onClick={() => setIsOpen(false)}
          aria-hidden='true'
        />
      </Portal>

      <nav
        ref={panelRef}
        role='dialog'
        aria-modal='true'
        aria-label={navUi.mobileMenu}
        className='z[1000] animate-dropdown-in fixed top-0 right-0 h-dvh w-[88vw] max-w-75 bg-white shadow-lg'
      >
        <div className='flex items-center justify-end px-4 pt-3'>
          <button
            onClick={() => setIsOpen(false)}
            className='rounded px-3 pt-1 ring-primary ring-offset-2 outline-none focus-visible:ring-2'
          >
            <span className='text-sm font-medium text-light'>
              {mobileNavUi.close}
            </span>
          </button>
        </div>

        <div className='flex h-[calc(100dvh-49px)] flex-col overflow-y-auto px-4 py-3'>
          {isPl && (
            <MobileOfferSections
              sections={SECTIONS}
              openKeys={openKeys}
              toggleKey={toggleKey}
              pathname={pathname}
              onNavigate={() => setIsOpen(false)}
            />
          )}

          {isPl && <div className='my-3 h-px w-full bg-neutral-200' />}

          {isPl ? (
            <MobilePlNav
              realizacjeNav={realizacjeNav}
              aboutNav={aboutNav}
              edukacjaNav={edukacjaNav}
              narzedziaNav={narzedziaNav}
              toolsSections={TOOLS_SECTIONS_MOBILE}
              contactHref={contactHref}
              contactNav={contactNav}
              mobileNavUi={mobileNavUi}
              pathname={pathname}
              isToolsOpen={isToolsOpen}
              toggleTools={toggleTools}
              onNavigate={() => setIsOpen(false)}
            />
          ) : (
            <MobileToolsOnlyNav
              localeConfig={localeConfig}
              navUi={navUi}
              pathname={pathname}
              locale={locale}
              toolsSections={TOOLS_SECTIONS_MOBILE}
              openToolSections={openToolSections}
              toggleToolSection={toggleToolSection}
              onNavigate={() => setIsOpen(false)}
            />
          )}

          <ul className='mb-2 flex flex-col gap-1'>
            {legalLinks.map(({ href, label, key: _linkKey }) => (
              <li key={_linkKey}>
                <Link
                  href={href}
                  prefetch={false}
                  onClick={() => setIsOpen(false)}
                  className='block rounded-lg px-3 py-1.75 text-[15px] text-dark outline-none hover:bg-neutral-100 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2'
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <div className='mt-auto border-t border-neutral-200 pt-3'>
            <div className={flexCenterBetweenClasses}>
              <LanguageSwitcher variant='mobile' />
              {isPl && (
                <Link
                  href={contactHref}
                  prefetch={false}
                  onClick={() => setIsOpen(false)}
                  className='rounded-lg bg-primary px-3 py-2 text-sm font-semibold text-white transition-colors outline-none hover:opacity-90 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2'
                >
                  {mobileNavUi.contact}
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
