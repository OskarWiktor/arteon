'use client';

import { startTransition, useEffect, useRef, useState, type JSX } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { createPortal } from 'react-dom';
import Eyebrow from '../../ui/typography/Eyebrow';
import IconText from '../../ui/IconText';
// NAV-001: Tymczasowo zakomentowane - do przywrócenia gdy profile media społecznościowe będą gotowe
// import SocialIconLink from '../../ui/SocialIconLink';
import { ABOUT_NAV_ITEMS_PL, MOBILE_NAV_ITEMS_PL, OFFER_SECTIONS_PL } from '@/components/shared/navigation-data/pl';
import { useLocale, useDictionary, useLocaleConfig } from '@/lib/LocaleContext';
import { getMobileToolsSections } from '@/lib/i18n/tool-registry';
import LanguageSwitcher from '@/components/shared/LanguageSwitcher';
import { useEscapeKey } from '@/hooks/useEscapeKey';
import { useFocusTrap } from '@/hooks/useFocusTrap';
import { useRestoreFocus } from '@/hooks/useRestoreFocus';
import { useScrollLock } from '@/hooks/useScrollLock';
import { useEventListener } from '@/hooks/useEventListener';
import { useTimeout } from '@/hooks/useTimeout';
import { NavArrowDownSLine as RiArrowDownSLine } from '@/components/ui/icons/NavIcons';
// NAV-001: Tymczasowo zakomentowane - do przywrócenia gdy profile media społecznościowe będą gotowe
// import { RiInstagramLine, RiFacebookFill } from 'react-icons/ri';

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
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return createPortal(children, document.body);
}

export default function MobileNavigation({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (val: boolean) => void }) {
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
  const ABOUT_ITEMS = isPl
    ? ABOUT_NAV_ITEMS_PL.map((it) => {
        const Icon = it.icon;
        return {
          ...it,
          icon: Icon ? <Icon aria-hidden className="h-5 w-5" /> : undefined,
        };
      })
    : [];
  const SECTIONS: Section[] = isPl
    ? OFFER_SECTIONS_PL.map((section) => ({
        key: section.key,
        title: section.title,
        hubHref: section.hubHref,
        items: section.items.map((it) => {
          const Icon = it.icon;
          return {
            href: it.href,
            title: it.title,
            icon: Icon ? <Icon aria-hidden className="h-5 w-5" /> : undefined,
          };
        }),
      }))
    : [];

  const TOOLS_SECTIONS_MOBILE: ToolSection[] = toolsSections
    .map((section) => ({
      key: section.key,
      title: section.title,
      items: section.items
        .filter((it) => !it.desktopOnly)
        .map((it) => {
          const Icon = it.icon;
          return {
            href: it.href,
            title: it.title,
            icon: Icon ? <Icon aria-hidden className="h-5 w-5" /> : undefined,
          };
        }),
    }))
    .filter((section) => section.items.length > 0);

  const [openToolSections, setOpenToolSections] = useState<Record<string, boolean>>({});

  const toggleToolSection = (key: string) =>
    startTransition(() => {
      setOpenToolSections((prev) => {
        const willOpen = !prev[key];
        const next: Record<string, boolean> = {};
        if (willOpen) next[key] = true;
        return next;
      });
    });

  const contactNav = isPl ? NAV.find((it) => it.key === 'kontakt') : null;
  const contactHref = contactNav?.href ?? '/kontakt';
  const realizacjeNav = NAV.find((it) => it.key === 'realizacje');
  const aboutNav = NAV.find((it) => it.key === 'oNas');
  const edukacjaNav = NAV.find((it) => it.key === 'edukacja');
  const narzedziaNav = NAV.find((it) => it.key === 'narzedzia');

  const { start: focusFirst } = useTimeout();

  const [panelWidth, setPanelWidth] = useState(0);
  const updatePanelWidth = () => setPanelWidth(Math.min(window.innerWidth * 0.88, 300));
  useEventListener(typeof window !== 'undefined' ? window : null, 'resize', updatePanelWidth);

  useEffect(() => {
    updatePanelWidth();
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname, setIsOpen]);

  useScrollLock(isOpen);
  useEscapeKey(() => setIsOpen(false), isOpen);
  useFocusTrap(panelRef, isOpen, 'a[href],button:not([disabled]),[tabindex="0"]');
  useRestoreFocus(isOpen);

  useEffect(() => {
    if (!isOpen) return;
    focusFirst(() => {
      const first = panelRef.current?.querySelector<HTMLElement>('a[href],button:not([disabled]),[tabindex="0"]');
      first?.focus();
    }, 0);
  }, [isOpen, focusFirst]);

  const [openKeys, setOpenKeys] = useState<Record<Section['key'], boolean>>({
    witryny: false,
    marketing: false,
    grafika: false,
    tresc: false,
  });

  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isToolsOpen, setIsToolsOpen] = useState(false);

  const closedKeys = { witryny: false, marketing: false, grafika: false, tresc: false } as const;

  const toggleKey = (key: Section['key']) =>
    startTransition(() => {
      const willOpen = !openKeys[key];
      setOpenKeys({ ...closedKeys, [key]: willOpen });
      if (willOpen) {
        setIsAboutOpen(false);
        setIsToolsOpen(false);
      }
    });

  const toggleAbout = () =>
    startTransition(() => {
      const willOpen = !isAboutOpen;
      setIsAboutOpen(willOpen);
      if (willOpen) {
        setOpenKeys(closedKeys);
        setIsToolsOpen(false);
      }
    });

  const toggleTools = () =>
    startTransition(() => {
      const willOpen = !isToolsOpen;
      setIsToolsOpen(willOpen);
      if (willOpen) {
        setOpenKeys(closedKeys);
        setIsAboutOpen(false);
      }
    });

  const onListKeyDown = (container: HTMLElement, e: React.KeyboardEvent) => {
    const items = container.querySelectorAll<HTMLAnchorElement>('a[href]');
    if (!items.length) return;
    const arr = Array.from(items);
    const idx = arr.findIndex((el) => el === document.activeElement);
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
  };

  if (!isOpen) return null;

  return (
    <>
      <Portal>
        <div className="animate-modal-backdrop fixed inset-y-0 left-0 z-[999] bg-black/40" style={{ right: `${panelWidth}px` }} onClick={() => setIsOpen(false)} aria-hidden="true" />
      </Portal>

      <nav
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label={navUi.mobileMenu}
        className="z[1000] animate-dropdown-in fixed top-0 right-0 h-[100dvh] w-[88vw] max-w-[300px] bg-white shadow-xl"
      >
        <div className="flex items-center justify-end px-4 pt-3">
          <button onClick={() => setIsOpen(false)} className="ring-primary rounded px-3 pt-1 ring-offset-2 outline-none focus-visible:ring-2">
            <span className="text-light text-sm font-medium">{mobileNavUi.close}</span>
          </button>
        </div>

        <div className="flex h-[calc(100dvh-49px)] flex-col overflow-y-auto px-4 py-3">
          {isPl && (
            <Eyebrow variant="dynamic" className="px-3 pb-1 text-xs tracking-wider">
              {mobileNavUi.services}
            </Eyebrow>
          )}

          {isPl && (
            <div className="flex flex-col">
              {SECTIONS.map((sec) => {
                const expanded = openKeys[sec.key];
                return (
                  <div key={sec.key} className="mb-1">
                    <div className="flex items-center justify-between rounded-xl py-1 transition-colors hover:bg-neutral-100">
                      {sec.hubHref ? (
                        <Link
                          href={sec.hubHref}
                          prefetch={false}
                          onClick={() => setIsOpen(false)}
                          className={`text-dark focus-visible:ring-primary inline-block rounded px-3 py-1 text-[15px] outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${pathname.startsWith(sec.hubHref) ? 'font-semibold' : ''}`}
                        >
                          {sec.title}
                        </Link>
                      ) : (
                        <div className="text-dark px-3 py-1 text-[15px]">{sec.title}</div>
                      )}

                      <button
                        type="button"
                        aria-expanded={expanded}
                        aria-controls={`sec-${sec.key}`}
                        onClick={() => toggleKey(sec.key)}
                        className="text-primary focus-visible:ring-primary flex h-9 w-9 items-center justify-center rounded-lg transition-colors outline-none hover:bg-neutral-200 focus-visible:ring-2 focus-visible:ring-offset-2"
                      >
                        <span className="inline-flex transition-transform duration-200" style={{ transform: expanded ? 'rotate(180deg)' : undefined }}>
                          <RiArrowDownSLine className="h-5 w-5" aria-hidden="true" />
                        </span>
                      </button>
                    </div>

                    {expanded && (
                      <div id={`sec-${sec.key}`} className="animate-dropdown-in">
                        <div className="ml-3 border-l border-neutral-200 pl-3">
                          <ul
                            className="flex flex-col gap-1 py-1"
                            onKeyDown={(e) => {
                              const container = e.currentTarget as unknown as HTMLElement;
                              onListKeyDown(container, e);
                            }}
                          >
                            {sec.items.map((it) => (
                              <li key={it.href}>
                                <Link
                                  href={it.href}
                                  prefetch={false}
                                  onClick={() => setIsOpen(false)}
                                  className="group text-dark focus-visible:ring-primary flex items-center gap-3 rounded-xl px-2 py-[7px] text-[15px] transition-colors outline-none hover:bg-neutral-100 focus-visible:ring-2 focus-visible:ring-offset-2"
                                >
                                  <IconText icon={it.icon ? <span className="text-primary">{it.icon}</span> : undefined} gap="3" className="min-w-0">
                                    <span className="text-dark text-[15px]">{it.title}</span>
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
          )}

          {isPl && <div className="my-3 h-px w-full bg-neutral-200" />}

          {isPl ? (
            <div className="mb-2 flex flex-col gap-1">
              {realizacjeNav ? (
                <Link
                  key="realizacje"
                  href={realizacjeNav.href}
                  prefetch={false}
                  onClick={() => setIsOpen(false)}
                  aria-current={pathname === realizacjeNav.href ? 'page' : pathname.startsWith(realizacjeNav.href) ? 'page' : undefined}
                  className={`ring-primary block rounded-xl px-3 py-[7px] text-[15px] ring-offset-2 outline-none focus-visible:ring-2 ${
                    pathname.startsWith(realizacjeNav.href) ? 'text-dark bg-neutral-50 font-semibold' : 'text-dark hover:bg-neutral-100'
                  }`}
                >
                  {realizacjeNav.label}
                </Link>
              ) : null}

              {aboutNav ? (
                <div className="rounded-xl py-1 transition-colors hover:bg-neutral-100">
                  <div className="flex items-center justify-between">
                    <Link
                      href={aboutNav.href}
                      prefetch={false}
                      onClick={() => setIsOpen(false)}
                      aria-current={pathname.startsWith(aboutNav.href) ? 'page' : undefined}
                      className={`focus-visible:ring-primary rounded px-3 py-1 text-[15px] outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
                        pathname.startsWith(aboutNav.href) ? 'text-dark font-semibold' : 'text-dark'
                      }`}
                    >
                      {aboutNav.label}
                    </Link>

                    <button
                      type="button"
                      aria-expanded={isAboutOpen}
                      aria-controls="about-submenu-mobile"
                      onClick={toggleAbout}
                      className="text-primary focus-visible:ring-primary flex h-9 w-9 items-center justify-center rounded-lg transition-colors outline-none hover:bg-neutral-200 focus-visible:ring-2 focus-visible:ring-offset-2"
                    >
                      <span className="inline-flex transition-transform duration-200" style={{ transform: isAboutOpen ? 'rotate(180deg)' : undefined }}>
                        <RiArrowDownSLine className="h-5 w-5" aria-hidden="true" />
                      </span>
                    </button>
                  </div>

                  {isAboutOpen && ABOUT_ITEMS.length > 0 && (
                    <div id="about-submenu-mobile" className="animate-dropdown-in">
                      <ul className="mt-1 ml-3 flex flex-col gap-1 border-l border-neutral-200 pl-3">
                        {ABOUT_ITEMS.map((aboutItem) => {
                          const isSubActive = pathname.startsWith(aboutItem.href);
                          return (
                            <li key={aboutItem.href}>
                              <Link
                                href={aboutItem.href}
                                prefetch={false}
                                onClick={() => setIsOpen(false)}
                                aria-current={isSubActive ? 'page' : undefined}
                                className={`ring-primary flex items-center gap-3 rounded-xl px-2 py-[7px] text-[15px] ring-offset-2 outline-none focus-visible:ring-2 ${
                                  isSubActive ? 'text-dark bg-neutral-50 font-semibold' : 'text-dark hover:bg-neutral-100'
                                }`}
                              >
                                {aboutItem.icon ? <span className="text-primary">{aboutItem.icon}</span> : null}
                                <span className="min-w-0">{aboutItem.title}</span>
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  )}
                </div>
              ) : null}

              {edukacjaNav ? (
                <Link
                  key="edukacja"
                  href={edukacjaNav.href}
                  prefetch={false}
                  onClick={() => setIsOpen(false)}
                  aria-current={pathname.startsWith(edukacjaNav.href) ? 'page' : undefined}
                  className={`ring-primary block rounded-xl px-3 py-[7px] text-[15px] ring-offset-2 outline-none focus-visible:ring-2 ${
                    pathname.startsWith(edukacjaNav.href) ? 'text-dark bg-neutral-50 font-semibold' : 'text-dark hover:bg-neutral-100'
                  }`}
                >
                  {edukacjaNav.label}
                </Link>
              ) : null}

              {narzedziaNav && TOOLS_SECTIONS_MOBILE.length > 0 ? (
                <div className="rounded-xl py-1 transition-colors hover:bg-neutral-100">
                  <div className="flex items-center justify-between">
                    <Link
                      href={narzedziaNav.href}
                      prefetch={false}
                      onClick={() => setIsOpen(false)}
                      aria-current={pathname.startsWith(narzedziaNav.href) ? 'page' : undefined}
                      className={`focus-visible:ring-primary rounded px-3 py-1 text-[15px] outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
                        pathname.startsWith(narzedziaNav.href) ? 'text-dark font-semibold' : 'text-dark'
                      }`}
                    >
                      {narzedziaNav.label}
                    </Link>

                    <button
                      type="button"
                      aria-expanded={isToolsOpen}
                      aria-controls="tools-submenu-mobile"
                      onClick={toggleTools}
                      className="text-primary focus-visible:ring-primary flex h-9 w-9 items-center justify-center rounded-lg transition-colors outline-none hover:bg-neutral-200 focus-visible:ring-2 focus-visible:ring-offset-2"
                    >
                      <span className="inline-flex transition-transform duration-200" style={{ transform: isToolsOpen ? 'rotate(180deg)' : undefined }}>
                        <RiArrowDownSLine className="h-5 w-5" aria-hidden="true" />
                      </span>
                    </button>
                  </div>

                  {isToolsOpen && (
                    <div id="tools-submenu-mobile" className="animate-dropdown-in">
                      <ul className="mt-1 ml-3 flex flex-col gap-1 border-l border-neutral-200 pl-3">
                        {TOOLS_SECTIONS_MOBILE.flatMap((section) => section.items).map((tool) => {
                          const isToolActive = pathname.startsWith(tool.href);
                          return (
                            <li key={tool.href}>
                              <Link
                                href={tool.href}
                                prefetch={false}
                                onClick={() => setIsOpen(false)}
                                aria-current={isToolActive ? 'page' : undefined}
                                className={`ring-primary flex items-center gap-3 rounded-xl px-2 py-[7px] text-[15px] ring-offset-2 outline-none focus-visible:ring-2 ${
                                  isToolActive ? 'text-dark bg-neutral-50 font-semibold' : 'text-dark hover:bg-neutral-100'
                                }`}
                              >
                                {tool.icon ? <span className="text-primary">{tool.icon}</span> : null}
                                <span className="min-w-0">{tool.title}</span>
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  )}
                </div>
              ) : null}

              {contactHref ? (
                <Link
                  key="kontakt"
                  href={contactHref}
                  prefetch={false}
                  onClick={() => setIsOpen(false)}
                  aria-current={pathname.startsWith(contactHref) ? 'page' : undefined}
                  className={`ring-primary block rounded-xl px-3 py-[7px] text-[15px] ring-offset-2 outline-none focus-visible:ring-2 ${
                    pathname.startsWith(contactHref) ? 'text-dark bg-neutral-50 font-semibold' : 'text-dark hover:bg-neutral-100'
                  }`}
                >
                  {contactNav?.label ?? mobileNavUi.contact}
                </Link>
              ) : null}
            </div>
          ) : (
            /* Non-PL: tools-only mobile nav with category sections */
            <>
              <Link
                href={localeConfig.toolsIndexHref}
                prefetch={false}
                onClick={() => setIsOpen(false)}
                aria-current={pathname === localeConfig.toolsIndexHref ? 'page' : undefined}
                className={`ring-primary mb-2 block rounded-xl px-3 py-[7px] text-[15px] ring-offset-2 outline-none focus-visible:ring-2 ${
                  pathname === localeConfig.toolsIndexHref ? 'text-dark bg-neutral-50 font-semibold' : 'text-dark hover:bg-neutral-100'
                }`}
              >
                {navUi.toolsLabel}
              </Link>

              <div className="flex flex-col">
                {TOOLS_SECTIONS_MOBILE.map((sec) => {
                  const expanded = !!openToolSections[sec.key];
                  return (
                    <div key={sec.key} className="mb-1">
                      <div className="flex items-center justify-between rounded-xl py-1 transition-colors hover:bg-neutral-100">
                        <div className="text-dark px-3 py-1 text-[15px]">{sec.title}</div>

                        <button
                          type="button"
                          aria-expanded={expanded}
                          aria-controls={`sec-${locale}-${sec.key}`}
                          onClick={() => toggleToolSection(sec.key)}
                          className="text-primary focus-visible:ring-primary flex h-9 w-9 items-center justify-center rounded-lg transition-colors outline-none hover:bg-neutral-200 focus-visible:ring-2 focus-visible:ring-offset-2"
                        >
                          <span className="inline-flex transition-transform duration-200" style={{ transform: expanded ? 'rotate(180deg)' : undefined }}>
                            <RiArrowDownSLine className="h-5 w-5" aria-hidden="true" />
                          </span>
                        </button>
                      </div>

                      {expanded && (
                        <div id={`sec-${locale}-${sec.key}`} className="animate-dropdown-in">
                          <div className="ml-3 border-l border-neutral-200 pl-3">
                            <ul
                              className="flex flex-col gap-1 py-1"
                              onKeyDown={(e) => {
                                const container = e.currentTarget as unknown as HTMLElement;
                                onListKeyDown(container, e);
                              }}
                            >
                              {sec.items.map((it) => (
                                <li key={it.href}>
                                  <Link
                                    href={it.href}
                                    prefetch={false}
                                    onClick={() => setIsOpen(false)}
                                    className="group text-dark focus-visible:ring-primary flex items-center gap-3 rounded-xl px-2 py-[7px] text-[15px] transition-colors outline-none hover:bg-neutral-100 focus-visible:ring-2 focus-visible:ring-offset-2"
                                  >
                                    <IconText icon={it.icon ? <span className="text-primary">{it.icon}</span> : undefined} gap="3" className="min-w-0">
                                      <span className="text-dark text-[15px]">{it.title}</span>
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
                  onClick={() => setIsOpen(false)}
                  aria-current={pathname.startsWith(localeConfig.aboutHref) ? 'page' : undefined}
                  className={`ring-primary block rounded-xl px-3 py-[7px] text-[15px] ring-offset-2 outline-none focus-visible:ring-2 ${
                    pathname.startsWith(localeConfig.aboutHref) ? 'text-dark bg-neutral-50 font-semibold' : 'text-dark hover:bg-neutral-100'
                  }`}
                >
                  {navUi.aboutLabel}
                </Link>
              )}

              {localeConfig.contactHref && (
                <Link
                  href={localeConfig.contactHref}
                  prefetch={false}
                  onClick={() => setIsOpen(false)}
                  aria-current={pathname.startsWith(localeConfig.contactHref) ? 'page' : undefined}
                  className={`ring-primary block rounded-xl px-3 py-[7px] text-[15px] ring-offset-2 outline-none focus-visible:ring-2 ${
                    pathname.startsWith(localeConfig.contactHref) ? 'text-dark bg-neutral-50 font-semibold' : 'text-dark hover:bg-neutral-100'
                  }`}
                >
                  {navUi.contactLabel}
                </Link>
              )}

              <div className="my-3 h-px w-full bg-neutral-200" />
            </>
          )}

          <ul className="mb-2 flex flex-col gap-1">
            {legalLinks.map(({ href, label, key: _linkKey }) => (
              <li key={_linkKey}>
                <Link
                  href={href}
                  prefetch={false}
                  onClick={() => setIsOpen(false)}
                  className="text-dark focus-visible:ring-primary block rounded-xl px-3 py-[7px] text-[15px] outline-none hover:bg-neutral-100 focus-visible:ring-2 focus-visible:ring-offset-2"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-auto border-t border-neutral-200 pt-3">
            <div className="flex items-center justify-between">
              <LanguageSwitcher variant="mobile" />
              {isPl && (
                <Link
                  href={contactHref}
                  prefetch={false}
                  onClick={() => setIsOpen(false)}
                  className="bg-primary focus-visible:ring-primary rounded-2xl px-3 py-2 text-sm font-semibold text-white transition-colors outline-none hover:opacity-90 focus-visible:ring-2 focus-visible:ring-offset-2"
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
