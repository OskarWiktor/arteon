'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, LayoutGroup, motion } from 'framer-motion';
import Wrapper from '@/components/ui/Wrapper';
import AppLink from '@/components/ui/Link';
import { ABOUT_NAV_ITEMS_PL, DESKTOP_NAV_ITEMS_PL, OFFER_SECTIONS_PL, TOOLS_SECTIONS_PL } from '@/components/shared/navigation-data/pl';
import { useEscapeKey } from '@/hooks/useEscapeKey';
import { useOutsideClick } from '@/hooks/useOutsideClick';
import { useMenuKeyboardNavigation } from '@/hooks/useMenuKeyboardNavigation';
import { RiArrowDownSLine } from 'react-icons/ri';

const ui = {
  pl: {
    closeServicesList: 'Zamknij listę usług',
    openServicesList: 'Otwórz listę usług',
    closeToolsList: 'Zamknij listę narzędzi',
    openToolsList: 'Otwórz listę narzędzi',
    closeAboutList: 'Zamknij listę O nas',
    openAboutList: 'Otwórz listę O nas',
  },
} as const;

export default function DesktopNavigation() {
  const t = ui.pl;
  const pathname = usePathname();
  const [isOfferOpen, setIsOfferOpen] = useState(false);
  const [isToolsOpen, setIsToolsOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  const offerLiRef = useRef<HTMLLIElement>(null);
  const offerBtnRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const toolsLiRef = useRef<HTMLLIElement>(null);
  const toolsBtnRef = useRef<HTMLButtonElement>(null);
  const toolsMenuRef = useRef<HTMLDivElement>(null);

  const aboutLiRef = useRef<HTMLLIElement>(null);
  const aboutBtnRef = useRef<HTMLButtonElement>(null);
  const aboutMenuRef = useRef<HTMLDivElement>(null);

  const offerMenuKeyboard = useMenuKeyboardNavigation(menuRef);
  const toolsMenuKeyboard = useMenuKeyboardNavigation(toolsMenuRef);
  const aboutMenuKeyboard = useMenuKeyboardNavigation(aboutMenuRef);

  const buttonId = 'offer-button';
  const menuId = 'offer-submenu';

  const toolsButtonId = 'tools-button';
  const toolsMenuId = 'tools-submenu';

  const aboutButtonId = 'about-button';
  const aboutMenuId = 'about-submenu';

  useOutsideClick(offerLiRef, () => setIsOfferOpen(false), isOfferOpen);
  useOutsideClick(toolsLiRef, () => setIsToolsOpen(false), isToolsOpen);
  useOutsideClick(aboutLiRef, () => setIsAboutOpen(false), isAboutOpen);

  useEscapeKey(
    () => {
      setIsOfferOpen(false);
      setIsToolsOpen(false);
      setIsAboutOpen(false);
      (offerBtnRef.current ?? toolsBtnRef.current ?? aboutBtnRef.current)?.focus();
    },
    isOfferOpen || isToolsOpen || isAboutOpen,
  );

  useEffect(() => {
    setIsOfferOpen(false);
    setIsToolsOpen(false);
    setIsAboutOpen(false);
  }, [pathname]);

  const navigationItems = DESKTOP_NAV_ITEMS_PL;

  const offerSections = OFFER_SECTIONS_PL.map((section) => {
    const iconClassName = section.key === 'grafika' ? 'h-5 w-5 text-slate-700' : 'h-6 w-6 text-slate-700';

    return {
      ...section,
      items: section.items.map((item) => {
        const Icon = item.icon;
        return {
          ...item,
          icon: Icon ? <Icon className={iconClassName} /> : undefined,
        };
      }),
    };
  });

  const toolsSections = TOOLS_SECTIONS_PL.map((section) => ({
    ...section,
    items: section.items.map((item) => {
      const Icon = item.icon;
      return {
        ...item,
        icon: Icon ? <Icon className="h-5 w-5 text-slate-700" /> : undefined,
      };
    }),
  }));

  const aboutItems = ABOUT_NAV_ITEMS_PL.map((item) => {
    const Icon = item.icon;
    return {
      ...item,
      icon: Icon ? <Icon className="h-5 w-5 text-slate-700" /> : undefined,
    };
  });

  const handleOfferButtonKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      if (!isOfferOpen) setIsOfferOpen(true);
      requestAnimationFrame(() => offerMenuKeyboard.focusFirst());
    }
  };

  const handleMenuKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => offerMenuKeyboard.onKeyDown(e);

  const handleToolsButtonKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      if (!isToolsOpen) setIsToolsOpen(true);
      requestAnimationFrame(() => toolsMenuKeyboard.focusFirst());
    }
  };

  const handleToolsMenuKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => toolsMenuKeyboard.onKeyDown(e);

  const handleAboutButtonKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      if (!isAboutOpen) setIsAboutOpen(true);
      requestAnimationFrame(() => aboutMenuKeyboard.focusFirst());
    }
  };

  const handleAboutMenuKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => aboutMenuKeyboard.onKeyDown(e);

  return (
    <div className="hidden lg:flex lg:items-center lg:gap-4">
      <LayoutGroup>
        <ul className="relative flex items-center gap-4 lg:gap-6">
          {navigationItems.map(({ href, label, exact, key: itemKey }) => {
            const isActivePage = exact ? pathname === href : pathname.startsWith(href);

            if (itemKey === 'uslugi') {
              const isActive = pathname.startsWith('/uslugi');
              return (
                <li ref={offerLiRef} className="group relative flex items-center gap-0.5" key={label}>
                  <AppLink href={href} variant="navigation" aria-current={isActive ? 'page' : undefined} className={isActive ? 'text-dark font-semibold' : ''}>
                    {label}
                  </AppLink>

                  <button
                    id={buttonId}
                    type="button"
                    onClick={() => setIsOfferOpen((p) => !p)}
                    onKeyDown={handleOfferButtonKeyDown}
                    aria-haspopup="menu"
                    aria-expanded={isOfferOpen}
                    aria-controls={menuId}
                    ref={offerBtnRef}
                    className="mr-[-14px] flex h-7 w-7 cursor-pointer items-center justify-center rounded text-slate-700 transition hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                    aria-label={isOfferOpen ? t.closeServicesList : t.openServicesList}
                  >
                    <motion.span animate={{ rotate: isOfferOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                      <RiArrowDownSLine className="h-4 w-4" aria-hidden="true" />
                    </motion.span>
                  </button>

                  <AnimatePresence>
                    {isOfferOpen && (
                      <motion.div
                        id={menuId}
                        role="menu"
                        aria-labelledby={buttonId}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="fixed top-full left-0 z-50 w-full bg-white/95 p-4 shadow-xl backdrop-blur-sm"
                      >
                        <Wrapper>
                          <div ref={menuRef} onKeyDown={handleMenuKeyDown} className="grid gap-6" style={{ gridTemplateColumns: '1fr 1fr 2fr 1fr' }}>
                            {offerSections.map((section) => (
                              <div key={section.key} className="rounded-2xl border border-slate-200 p-4">
                                <div className="mb-3">
                                  {section.hubHref ? (
                                    <Link
                                      href={section.hubHref}
                                      className="text-dark inline-block rounded px-1 py-0.5 text-sm font-semibold tracking-wide ring-offset-2 ring-offset-white transition outline-none hover:bg-white focus-visible:ring-2 focus-visible:ring-slate-500"
                                    >
                                      {section.title}
                                    </Link>
                                  ) : (
                                    <div className="text-dark text-sm font-semibold tracking-wide">{section.title}</div>
                                  )}
                                </div>

                                <div className={`grid ${section.key === 'grafika' ? 'grid-cols-2' : 'grid-cols-1'} gap-2`}>
                                  {section.items.map((item) => (
                                    <Link
                                      key={item.href + item.title}
                                      href={item.href}
                                      className="group/link flex items-start gap-3 rounded-xl px-3 py-2 transition hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-500"
                                    >
                                      {item.icon ? <span className="mt-0.5 shrink-0">{item.icon}</span> : <span className="mt-0.5 h-2.5 w-2.5 shrink-0 rounded-full bg-slate-300" />}
                                      <span className="text-mid block text-sm font-medium">{item.title}</span>
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        </Wrapper>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            }

            if (itemKey === 'narzedzia') {
              const isActive = pathname.startsWith('/narzedzia');
              return (
                <li ref={toolsLiRef} className="group relative flex items-center gap-0.5" key={label}>
                  <AppLink href={href} variant="navigation" aria-current={isActive ? 'page' : undefined} className={isActive ? 'text-dark font-semibold' : ''}>
                    {label}
                  </AppLink>

                  <button
                    id={toolsButtonId}
                    type="button"
                    onClick={() => setIsToolsOpen((p) => !p)}
                    onKeyDown={handleToolsButtonKeyDown}
                    aria-haspopup="menu"
                    aria-expanded={isToolsOpen}
                    aria-controls={toolsMenuId}
                    ref={toolsBtnRef}
                    className="mr-[-14px] flex h-7 w-7 cursor-pointer items-center justify-center rounded text-slate-700 transition hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                    aria-label={isToolsOpen ? t.closeToolsList : t.openToolsList}
                  >
                    <motion.span animate={{ rotate: isToolsOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                      <RiArrowDownSLine className="h-4 w-4" aria-hidden="true" />
                    </motion.span>
                  </button>

                  <AnimatePresence>
                    {isToolsOpen && (
                      <motion.div
                        id={toolsMenuId}
                        role="menu"
                        aria-labelledby={toolsButtonId}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="fixed top-full left-0 z-50 w-full bg-white/95 p-4 shadow-xl backdrop-blur-sm"
                      >
                        <Wrapper>
                          <div ref={toolsMenuRef} onKeyDown={handleToolsMenuKeyDown} className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                            {toolsSections.map((section) => (
                              <div key={section.key} className="rounded-2xl border border-slate-200 p-4">
                                <div className="text-dark mb-3 text-sm font-semibold tracking-wide">{section.title}</div>

                                <div className="grid grid-cols-1 gap-2">
                                  {section.items.map((item) => (
                                    <Link
                                      key={item.href + item.title}
                                      href={item.href}
                                      className="group/link flex items-start gap-3 rounded-xl px-3 py-2 transition hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-500"
                                    >
                                      {item.icon ? <span className="mt-0.5 shrink-0">{item.icon}</span> : <span className="mt-0.5 h-2.5 w-2.5 shrink-0 rounded-full bg-slate-300" />}
                                      <span className="text-mid block text-sm font-medium">{item.title}</span>
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        </Wrapper>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            }

            if (itemKey === 'oNas') {
              const isActive = pathname.startsWith('/o-nas');
              return (
                <li ref={aboutLiRef} className="group relative flex items-center gap-0.5" key={label}>
                  <AppLink href={href} variant="navigation" aria-current={isActive ? 'page' : undefined} className={isActive ? 'text-dark font-semibold' : ''}>
                    {label}
                  </AppLink>

                  <button
                    id={aboutButtonId}
                    type="button"
                    onClick={() => setIsAboutOpen((p) => !p)}
                    onKeyDown={handleAboutButtonKeyDown}
                    aria-haspopup="menu"
                    aria-expanded={isAboutOpen}
                    aria-controls={aboutMenuId}
                    ref={aboutBtnRef}
                    className="mr-[-14px] flex h-7 w-7 cursor-pointer items-center justify-center rounded text-slate-700 transition hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                    aria-label={isAboutOpen ? t.closeAboutList : t.openAboutList}
                  >
                    <motion.span animate={{ rotate: isAboutOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                      <RiArrowDownSLine className="h-4 w-4" aria-hidden="true" />
                    </motion.span>
                  </button>

                  <AnimatePresence>
                    {isAboutOpen && (
                      <motion.div
                        id={aboutMenuId}
                        role="menu"
                        aria-labelledby={aboutButtonId}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="fixed top-full left-0 z-50 w-full bg-white/95 p-4 shadow-xl backdrop-blur-sm"
                      >
                        <Wrapper>
                          <div ref={aboutMenuRef} onKeyDown={handleAboutMenuKeyDown} className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                            {aboutItems.map((item) => (
                              <Link
                                key={item.href}
                                href={item.href}
                                className="group/link flex items-start gap-3 rounded-2xl border border-slate-200 px-3 py-3 transition hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-500"
                              >
                                {item.icon ? <span className="mt-0.5 shrink-0 text-slate-700">{item.icon}</span> : null}
                                <span className="text-mid block text-sm font-medium">{item.title}</span>
                              </Link>
                            ))}
                          </div>
                        </Wrapper>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            }

            return (
              <li key={label} className="relative flex items-center">
                <AppLink href={href} variant="navigation" aria-current={isActivePage ? 'page' : undefined} className={isActivePage ? 'text-dark font-semibold' : ''}>
                  {label}
                </AppLink>
              </li>
            );
          })}
        </ul>
      </LayoutGroup>
    </div>
  );
}
