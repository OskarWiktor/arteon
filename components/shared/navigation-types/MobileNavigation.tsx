'use client';

import { useEffect, useRef, useState, type JSX } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { createPortal } from 'react-dom';
import Eyebrow from '../../ui/typography/Eyebrow';
import IconText from '../../ui/IconText';
// NAV-001: Tymczasowo zakomentowane - do przywrócenia gdy profile social media będą gotowe
// import SocialIconLink from '../../ui/SocialIconLink';
import { ABOUT_NAV_ITEMS_PL, LEGAL_LINKS_PL, MOBILE_NAV_ITEMS_PL, OFFER_SECTIONS_PL, TOOLS_SECTIONS_PL } from '@/components/shared/navigation-data/pl';
import { useEscapeKey } from '@/hooks/useEscapeKey';
import { useFocusTrap } from '@/hooks/useFocusTrap';
import { useRestoreFocus } from '@/hooks/useRestoreFocus';
import { useScrollLock } from '@/hooks/useScrollLock';
import { useEventListener } from '@/hooks/useEventListener';
import { useTimeout } from '@/hooks/useTimeout';
import { RiArrowDownSLine } from 'react-icons/ri';
// NAV-001: Tymczasowo zakomentowane - do przywrócenia gdy profile social media będą gotowe
// import { RiInstagramLine, RiFacebookFill } from 'react-icons/ri';

const ui = {
  pl: {
    close: 'Zamknij',
    services: 'Usługi',
    mobileMenu: 'Menu mobilne',
    instagramLabel: 'Firmowy Instagram',
    facebookLabel: 'Firmowy Facebook',
    bookConsultation: 'Umów konsultację',
  },
} as const;

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
  const t = ui.pl;
  const pathname = usePathname();
  const panelRef = useRef<HTMLDivElement>(null);
  const NAV = MOBILE_NAV_ITEMS_PL;
  const ABOUT_ITEMS = ABOUT_NAV_ITEMS_PL.map((it) => {
    const Icon = it.icon;
    return {
      ...it,
      icon: Icon ? <Icon aria-hidden className="h-5 w-5" /> : undefined,
    };
  });
  const SECTIONS: Section[] = OFFER_SECTIONS_PL.map((section) => ({
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
  }));

  const MOBILE_TOOL_KEYS: ToolSectionLink['href'][] = [
    '/narzedzia/licznik-dlugosci-meta-title-i-description',
    '/narzedzia/tester-kontrastu-kolorow-wcag',
    '/narzedzia/generator-palety-kolorow-z-obrazu',
    '/narzedzia/generator-palet-kolorow-online',
  ];

  const TOOLS_SECTIONS_MOBILE: ToolSection[] = TOOLS_SECTIONS_PL.map((section) => ({
    key: section.key,
    title: section.title,
    items: section.items
      .filter((it) => MOBILE_TOOL_KEYS.includes(it.href))
      .map((it) => {
        const Icon = it.icon;
        return {
          href: it.href,
          title: it.title,
          icon: Icon ? <Icon aria-hidden className="h-5 w-5" /> : undefined,
        };
      }),
  })).filter((section) => section.items.length > 0);

  const contactNav = NAV.find((it) => it.key === 'kontakt');
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
  }, [isOpen]);

  const [openKeys, setOpenKeys] = useState<Record<Section['key'], boolean>>({
    witryny: false,
    marketing: false,
    grafika: false,
    tresc: false,
  });

  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isToolsOpen, setIsToolsOpen] = useState(false);

  const toggleKey = (key: Section['key']) => setOpenKeys((s) => ({ ...s, [key]: !s[key] }));
  const toggleAbout = () => setIsAboutOpen((prev) => !prev);
  const toggleTools = () => setIsToolsOpen((prev) => !prev);

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

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <Portal>
            <motion.div
              className="fixed inset-y-0 left-0 z-[999] bg-black/30 backdrop-blur-[1px]"
              style={{ right: `${panelWidth}px` }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              aria-hidden="true"
            />
          </Portal>

          <motion.nav
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label={t.mobileMenu}
            className="z[1000] fixed top-0 right-0 h-[100dvh] w-[88vw] max-w-[300px] bg-white shadow-xl"
            initial={{ x: 24, opacity: 0.98 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 24, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 280, damping: 30 }}
          >
            <div className="flex items-center justify-end px-4 pt-3">
              <button onClick={() => setIsOpen(false)} className="rounded px-3 pt-1 ring-slate-800 ring-offset-2 outline-none focus-visible:ring-2">
                <span className="text-light text-sm font-medium">{t.close}</span>
              </button>
            </div>

            <div className="flex h-[calc(100dvh-49px)] flex-col overflow-y-auto px-4 py-3">
              <Eyebrow variant="dynamic" className="px-3 pb-1 text-[11px] tracking-wider">
                {t.services}
              </Eyebrow>

              <div className="flex flex-col">
                {SECTIONS.map((sec) => {
                  const expanded = openKeys[sec.key];
                  return (
                    <div key={sec.key} className="mb-1">
                      <div className="flex items-center justify-between rounded-xl px-2 py-1 transition hover:bg-neutral-100">
                        {sec.hubHref ? (
                          <Link
                            href={sec.hubHref}
                            onClick={() => setIsOpen(false)}
                            className="text-dark inline-block rounded px-2 py-1 text-[15px] font-semibold outline-none focus-visible:ring-2 focus-visible:ring-slate-800 focus-visible:ring-offset-2"
                          >
                            {sec.title}
                          </Link>
                        ) : (
                          <div className="text-dark px-2 py-1 text-[15px] font-semibold">{sec.title}</div>
                        )}

                        <button
                          type="button"
                          aria-expanded={expanded}
                          aria-controls={`sec-${sec.key}`}
                          onClick={() => toggleKey(sec.key)}
                          className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-800 transition outline-none hover:bg-neutral-200 focus-visible:ring-2 focus-visible:ring-slate-800 focus-visible:ring-offset-2"
                        >
                          <motion.span animate={{ rotate: expanded ? 180 : 0 }} transition={{ duration: 0.2 }}>
                            <RiArrowDownSLine className="h-5 w-5" aria-hidden="true" />
                          </motion.span>
                        </button>
                      </div>

                      <AnimatePresence initial={false}>
                        {expanded && (
                          <motion.div
                            id={`sec-${sec.key}`}
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.18 }}
                            className="overflow-hidden"
                          >
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
                                      onClick={() => setIsOpen(false)}
                                      className="group text-dark flex items-center gap-3 rounded-xl px-2 py-[7px] text-[15px] transition outline-none hover:bg-neutral-100 focus-visible:ring-2 focus-visible:ring-slate-800 focus-visible:ring-offset-2"
                                    >
                                      <IconText icon={it.icon ? <span className="text-slate-800">{it.icon}</span> : undefined} gap="3" className="min-w-0">
                                        <span className="text-dark text-[15px]">{it.title}</span>
                                      </IconText>
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>

              <div className="my-3 h-px w-full bg-neutral-200" />

              <div className="mb-2 flex flex-col gap-1">
                {realizacjeNav ? (
                  <Link
                    key="realizacje"
                    href={realizacjeNav.href}
                    onClick={() => setIsOpen(false)}
                    aria-current={pathname === realizacjeNav.href ? 'page' : pathname.startsWith(realizacjeNav.href) ? 'page' : undefined}
                    className={`block rounded-xl px-3 py-[7px] text-[15px] ring-slate-800 ring-offset-2 outline-none focus-visible:ring-2 ${
                      pathname.startsWith(realizacjeNav.href) ? 'text-dark bg-zinc-100 font-semibold' : 'text-dark hover:bg-neutral-100'
                    }`}
                  >
                    {realizacjeNav.label}
                  </Link>
                ) : null}

                {aboutNav ? (
                  <div className="rounded-xl px-2 py-1 transition hover:bg-neutral-100">
                    <div className="flex items-center justify-between">
                      <Link
                        href={aboutNav.href}
                        onClick={() => setIsOpen(false)}
                        aria-current={pathname.startsWith(aboutNav.href) ? 'page' : undefined}
                        className={`rounded px-2 py-1 text-[15px] font-semibold outline-none focus-visible:ring-2 focus-visible:ring-slate-800 focus-visible:ring-offset-2 ${
                          pathname.startsWith(aboutNav.href) ? 'text-dark' : 'text-dark'
                        }`}
                      >
                        {aboutNav.label}
                      </Link>

                      <button
                        type="button"
                        aria-expanded={isAboutOpen}
                        aria-controls="about-submenu-mobile"
                        onClick={toggleAbout}
                        className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-800 transition outline-none hover:bg-neutral-200 focus-visible:ring-2 focus-visible:ring-slate-800 focus-visible:ring-offset-2"
                      >
                        <motion.span animate={{ rotate: isAboutOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                          <RiArrowDownSLine className="h-5 w-5" aria-hidden="true" />
                        </motion.span>
                      </button>
                    </div>

                    <AnimatePresence initial={false}>
                      {isAboutOpen && ABOUT_ITEMS.length > 0 && (
                        <motion.div
                          id="about-submenu-mobile"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.18 }}
                          className="overflow-hidden"
                        >
                          <ul className="mt-1 ml-3 flex flex-col gap-1 border-l border-neutral-200 pl-3">
                            {ABOUT_ITEMS.map((aboutItem) => {
                              const isSubActive = pathname.startsWith(aboutItem.href);
                              return (
                                <li key={aboutItem.href}>
                                  <Link
                                    href={aboutItem.href}
                                    onClick={() => setIsOpen(false)}
                                    aria-current={isSubActive ? 'page' : undefined}
                                    className={`flex items-center gap-3 rounded-xl px-2 py-[7px] text-[15px] ring-slate-800 ring-offset-2 outline-none focus-visible:ring-2 ${
                                      isSubActive ? 'text-dark bg-zinc-100 font-semibold' : 'text-dark hover:bg-neutral-100'
                                    }`}
                                  >
                                    {aboutItem.icon ? <span className="text-slate-800">{aboutItem.icon}</span> : null}
                                    <span className="min-w-0">{aboutItem.title}</span>
                                  </Link>
                                </li>
                              );
                            })}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : null}

                {edukacjaNav ? (
                  <Link
                    key="edukacja"
                    href={edukacjaNav.href}
                    onClick={() => setIsOpen(false)}
                    aria-current={pathname.startsWith(edukacjaNav.href) ? 'page' : undefined}
                    className={`block rounded-xl px-3 py-[7px] text-[15px] ring-slate-800 ring-offset-2 outline-none focus-visible:ring-2 ${
                      pathname.startsWith(edukacjaNav.href) ? 'text-dark bg-zinc-100 font-semibold' : 'text-dark hover:bg-neutral-100'
                    }`}
                  >
                    {edukacjaNav.label}
                  </Link>
                ) : null}

                {narzedziaNav && TOOLS_SECTIONS_MOBILE.length > 0 ? (
                  <div className="rounded-xl px-2 py-1 transition hover:bg-neutral-100">
                    <div className="flex items-center justify-between">
                      <Link
                        href={narzedziaNav.href}
                        onClick={() => setIsOpen(false)}
                        aria-current={pathname.startsWith(narzedziaNav.href) ? 'page' : undefined}
                        className={`rounded px-2 py-1 text-[15px] font-semibold outline-none focus-visible:ring-2 focus-visible:ring-slate-800 focus-visible:ring-offset-2 ${
                          pathname.startsWith(narzedziaNav.href) ? 'text-dark' : 'text-dark'
                        }`}
                      >
                        {narzedziaNav.label}
                      </Link>

                      <button
                        type="button"
                        aria-expanded={isToolsOpen}
                        aria-controls="tools-submenu-mobile"
                        onClick={toggleTools}
                        className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-800 transition outline-none hover:bg-neutral-200 focus-visible:ring-2 focus-visible:ring-slate-800 focus-visible:ring-offset-2"
                      >
                        <motion.span animate={{ rotate: isToolsOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                          <RiArrowDownSLine className="h-5 w-5" aria-hidden="true" />
                        </motion.span>
                      </button>
                    </div>

                    <AnimatePresence initial={false}>
                      {isToolsOpen && (
                        <motion.div
                          id="tools-submenu-mobile"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.18 }}
                          className="overflow-hidden"
                        >
                          <ul className="mt-1 ml-3 flex flex-col gap-1 border-l border-neutral-200 pl-3">
                            {TOOLS_SECTIONS_MOBILE.flatMap((section) => section.items).map((tool) => {
                              const isToolActive = pathname.startsWith(tool.href);
                              return (
                                <li key={tool.href}>
                                  <Link
                                    href={tool.href}
                                    onClick={() => setIsOpen(false)}
                                    aria-current={isToolActive ? 'page' : undefined}
                                    className={`flex items-center gap-3 rounded-xl px-2 py-[7px] text-[15px] ring-slate-800 ring-offset-2 outline-none focus-visible:ring-2 ${
                                      isToolActive ? 'text-dark bg-zinc-100 font-semibold' : 'text-dark hover:bg-neutral-100'
                                    }`}
                                  >
                                    {tool.icon ? <span className="text-slate-800">{tool.icon}</span> : null}
                                    <span className="min-w-0">{tool.title}</span>
                                  </Link>
                                </li>
                              );
                            })}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : null}

                {contactHref ? (
                  <Link
                    key="kontakt"
                    href={contactHref}
                    onClick={() => setIsOpen(false)}
                    aria-current={pathname.startsWith(contactHref) ? 'page' : undefined}
                    className={`block rounded-xl px-3 py-[7px] text-[15px] ring-slate-800 ring-offset-2 outline-none focus-visible:ring-2 ${
                      pathname.startsWith(contactHref) ? 'text-dark bg-zinc-100 font-semibold' : 'text-dark hover:bg-neutral-100'
                    }`}
                  >
                    {contactNav?.label ?? t.bookConsultation}
                  </Link>
                ) : null}
              </div>

              <ul className="mb-2 flex flex-col gap-1">
                {LEGAL_LINKS_PL.map(({ href, label }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      onClick={() => setIsOpen(false)}
                      className="text-dark block rounded-xl px-3 py-[7px] text-[15px] outline-none hover:bg-neutral-100 focus-visible:ring-2 focus-visible:ring-slate-800 focus-visible:ring-offset-2"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="mt-auto border-t border-zinc-200 pt-3">
                <div className="flex items-center justify-between">
                  {/* NAV-001: Tymczasowo ukryte linki do social media
                  <div className="flex items-center gap-3">
                    <SocialIconLink
                      href="https://www.instagram.com/arteon.pl"
                      label={t.instagramLabel}
                      className="rounded outline-none focus-visible:ring-2 focus-visible:ring-slate-800 focus-visible:ring-offset-2"
                      icon={<RiInstagramLine className="h-5 w-5 text-slate-800" aria-hidden="true" />}
                    />
                    <SocialIconLink
                      href="https://www.facebook.com/people/Arteon/61583260915021/"
                      label={t.facebookLabel}
                      className="rounded outline-none focus-visible:ring-2 focus-visible:ring-slate-800 focus-visible:ring-offset-2"
                      icon={<RiFacebookFill className="h-5 w-5 text-slate-800" aria-hidden="true" />}
                    />
                  </div>
                  */}

                  <div className="flex items-center gap-2">
                    <Link
                      href={contactHref}
                      onClick={() => setIsOpen(false)}
                      className="rounded-2xl bg-slate-800 px-3 py-2 text-sm font-semibold text-white transition outline-none hover:opacity-90 focus-visible:ring-2 focus-visible:ring-slate-800 focus-visible:ring-offset-2"
                    >
                      {t.bookConsultation}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  );
}
