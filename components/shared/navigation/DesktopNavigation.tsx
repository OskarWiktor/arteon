'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { createPortal } from 'react-dom';
import Wrapper from '@/components/ui/Wrapper';
import AppLink from '@/components/ui/Link';
import { ABOUT_NAV_ITEMS_PL, DESKTOP_NAV_ITEMS_PL, OFFER_SECTIONS_PL, type OfferSectionKey } from '@/components/shared/navigation-data/pl';
import { useLocale } from '@/lib/LocaleContext';
import { getToolsSections, type ToolsSectionKey } from '@/lib/i18n/tool-registry';
import { NAVIGATION_UI, LOCALE_CONFIG } from '@/lib/i18n/locales';
import { useEscapeKey } from '@/hooks/useEscapeKey';
import { useOutsideClick } from '@/hooks/useOutsideClick';
import { useMenuKeyboardNavigation } from '@/hooks/useMenuKeyboardNavigation';
import { NavArrowDownSLine as RiArrowDownSLine, NavArrowRightSLine as RiArrowRightSLine } from '@/components/ui/icons/NavIcons';

const plUi = {
  closeServicesList: 'Zamknij listę usług',
  openServicesList: 'Otwórz listę usług',
  closeAboutList: 'Zamknij listę O nas',
  openAboutList: 'Otwórz listę O nas',
} as const;

export default function DesktopNavigation() {
  const locale = useLocale();
  const isPl = locale === 'pl';
  const t = NAVIGATION_UI[locale];
  const localeConfig = LOCALE_CONFIG[locale];
  const toolsSections = getToolsSections(locale);
  const pathname = usePathname();
  const [isOfferOpen, setIsOfferOpen] = useState(false);
  const [isToolsOpen, setIsToolsOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [activeOfferCategory, setActiveOfferCategory] = useState<OfferSectionKey>('witryny');
  const [activeToolsCategory, setActiveToolsCategory] = useState<ToolsSectionKey>('obrazy');

  const offerLiRef = useRef<HTMLLIElement>(null);
  const offerBtnRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const toolsLiRef = useRef<HTMLLIElement>(null);
  const toolsBtnRef = useRef<HTMLButtonElement>(null);
  const toolsMenuRef = useRef<HTMLDivElement>(null);

  const aboutLiRef = useRef<HTMLLIElement>(null);
  const aboutBtnRef = useRef<HTMLButtonElement>(null);
  const aboutMenuRef = useRef<HTMLDivElement>(null);

  const offerPanelRef = useRef<HTMLDivElement>(null);
  const toolsPanelRef = useRef<HTMLDivElement>(null);
  const aboutPanelRef = useRef<HTMLDivElement>(null);

  const [mounted, setMounted] = useState(false);
  const [headerBottom, setHeaderBottom] = useState(0);

  const offerMenuKeyboard = useMenuKeyboardNavigation(menuRef);
  const toolsMenuKeyboard = useMenuKeyboardNavigation(toolsMenuRef);
  const aboutMenuKeyboard = useMenuKeyboardNavigation(aboutMenuRef);

  const buttonId = 'offer-button';
  const menuId = 'offer-submenu';

  const toolsButtonId = 'tools-button';
  const toolsMenuId = 'tools-submenu';

  const aboutButtonId = 'about-button';
  const aboutMenuId = 'about-submenu';

  useOutsideClick([offerLiRef, offerPanelRef], () => setIsOfferOpen(false), isOfferOpen);
  useOutsideClick([toolsLiRef, toolsPanelRef], () => setIsToolsOpen(false), isToolsOpen);
  useOutsideClick([aboutLiRef, aboutPanelRef], () => setIsAboutOpen(false), isAboutOpen);

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

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const header = document.getElementById('navigation');
    if (!header) return;

    const update = () => {
      setHeaderBottom(header.getBoundingClientRect().bottom);
    };

    update();
    const ro = new ResizeObserver(update);
    ro.observe(header);

    return () => ro.disconnect();
  }, []);

  const handleCategoryHover = useCallback((key: OfferSectionKey) => {
    setActiveOfferCategory(key);
  }, []);

  const handleToolsCategoryHover = useCallback((key: ToolsSectionKey) => {
    setActiveToolsCategory(key);
  }, []);

  const navigationItems = isPl ? DESKTOP_NAV_ITEMS_PL : [];

  const activeSection = isPl ? OFFER_SECTIONS_PL.find((s) => s.key === activeOfferCategory) || OFFER_SECTIONS_PL[0] : null;
  const activeToolsSection = toolsSections.find((s) => s.key === activeToolsCategory) || toolsSections[0];

  const aboutItems = isPl
    ? ABOUT_NAV_ITEMS_PL.map((item) => {
        const Icon = item.icon;
        return {
          ...item,
          icon: Icon ? <Icon className="text-primary h-5 w-5" /> : undefined,
        };
      })
    : [];

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

  const toolsHref = localeConfig.toolsIndexHref;
  const isToolsActive = pathname.startsWith(localeConfig.toolsBasePath);

  return (
    <div className="hidden lg:flex lg:items-center lg:gap-4">
      <ul className="relative flex items-center gap-4 lg:gap-6">
        {/* Tools link + dropdown rendered at correct position for non-PL (standalone) */}
        {!isPl && (
          <li ref={toolsLiRef} className="group relative flex items-center gap-0.5">
            <AppLink href={toolsHref} variant="navigation" aria-current={isToolsActive ? 'page' : undefined} className={isToolsActive ? 'text-dark font-semibold' : ''}>
              {t.toolsLabel}
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
              className="text-primary hover:bg-primary-light focus-visible:ring-primary mr-[-14px] flex h-7 w-7 cursor-pointer items-center justify-center rounded transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              aria-label={isToolsOpen ? t.closeToolsList : t.openToolsList}
            >
              <span className="inline-flex transition-transform duration-200" style={{ transform: isToolsOpen ? 'rotate(180deg)' : undefined }}>
                <RiArrowDownSLine className="h-4 w-4" aria-hidden="true" />
              </span>
            </button>
          </li>
        )}

        {!isPl && localeConfig.aboutHref && (
          <li className="relative flex items-center">
            <AppLink
              href={localeConfig.aboutHref}
              variant="navigation"
              aria-current={pathname.startsWith(localeConfig.aboutHref) ? 'page' : undefined}
              className={pathname.startsWith(localeConfig.aboutHref) ? 'text-dark font-semibold' : ''}
            >
              {t.aboutLabel}
            </AppLink>
          </li>
        )}

        {!isPl && localeConfig.contactHref && (
          <li className="relative flex items-center">
            <AppLink
              href={localeConfig.contactHref}
              variant="navigation"
              aria-current={pathname.startsWith(localeConfig.contactHref) ? 'page' : undefined}
              className={pathname.startsWith(localeConfig.contactHref) ? 'text-dark font-semibold' : ''}
            >
              {t.contactLabel}
            </AppLink>
          </li>
        )}

        {/* PL nav items (Tools rendered in correct order within the loop) */}
        {navigationItems.map(({ href, label, exact, key: itemKey }) => {
          const isActivePage = exact ? pathname === href : pathname.startsWith(href);

          if (itemKey === 'narzedzia') {
            return (
              <li ref={toolsLiRef} className="group relative flex items-center gap-0.5" key={label}>
                <AppLink href={toolsHref} variant="navigation" aria-current={isToolsActive ? 'page' : undefined} className={isToolsActive ? 'text-dark font-semibold' : ''}>
                  {t.toolsLabel}
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
                  className="text-primary hover:bg-primary-light focus-visible:ring-primary mr-[-14px] flex h-7 w-7 cursor-pointer items-center justify-center rounded transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                  aria-label={isToolsOpen ? t.closeToolsList : t.openToolsList}
                >
                  <span className="inline-flex transition-transform duration-200" style={{ transform: isToolsOpen ? 'rotate(180deg)' : undefined }}>
                    <RiArrowDownSLine className="h-4 w-4" aria-hidden="true" />
                  </span>
                </button>
              </li>
            );
          }

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
                  className="text-primary hover:bg-primary-light focus-visible:ring-primary mr-[-14px] flex h-7 w-7 cursor-pointer items-center justify-center rounded transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                  aria-label={isOfferOpen ? plUi.closeServicesList : plUi.openServicesList}
                >
                  <span className="inline-flex transition-transform duration-200" style={{ transform: isOfferOpen ? 'rotate(180deg)' : undefined }}>
                    <RiArrowDownSLine className="h-4 w-4" aria-hidden="true" />
                  </span>
                </button>
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
                  className="text-primary hover:bg-primary-light focus-visible:ring-primary mr-[-14px] flex h-7 w-7 cursor-pointer items-center justify-center rounded transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                  aria-label={isAboutOpen ? plUi.closeAboutList : plUi.openAboutList}
                >
                  <span className="inline-flex transition-transform duration-200" style={{ transform: isAboutOpen ? 'rotate(180deg)' : undefined }}>
                    <RiArrowDownSLine className="h-4 w-4" aria-hidden="true" />
                  </span>
                </button>
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

      {isPl &&
        mounted &&
        isOfferOpen &&
        activeSection &&
        createPortal(
          <div
            ref={offerPanelRef}
            id={menuId}
            role="menu"
            aria-labelledby={buttonId}
            className="animate-dropdown-in fixed left-0 z-50 w-full bg-white/95 py-6 shadow-[0_8px_20px_-4px_rgba(0,0,0,0.08)] backdrop-blur-sm"
            style={{ top: headerBottom }}
          >
            <Wrapper>
              <div ref={menuRef} onKeyDown={handleMenuKeyDown} className="grid grid-cols-5 gap-0">
                <div className="border-primary-light border-r pr-4">
                  <div className="flex flex-col gap-1">
                    {OFFER_SECTIONS_PL.map((section) => {
                      const isActiveCategory = activeOfferCategory === section.key;
                      const CategoryIcon = section.icon;
                      return (
                        <Link
                          key={section.key}
                          href={section.hubHref || '#'}
                          onMouseEnter={() => handleCategoryHover(section.key)}
                          onFocus={() => handleCategoryHover(section.key)}
                          className={`group/cat focus-visible:ring-primary flex w-full items-center justify-between gap-3 rounded-xl px-4 py-3 text-left transition-all duration-200 focus:outline-none focus-visible:ring-2 ${
                            isActiveCategory ? 'text-primary bg-white' : 'text-primary-mid hover:text-primary hover:bg-white'
                          }`}
                        >
                          <span className="flex items-center gap-3">
                            {CategoryIcon && (
                              <CategoryIcon
                                className={`h-5 w-5 transition-colors duration-200 ${isActiveCategory ? 'text-primary' : 'text-primary-mid group-hover/cat:text-primary'}`}
                                aria-hidden="true"
                              />
                            )}
                            <span className="text-sm font-medium">{section.title}</span>
                          </span>
                          <RiArrowRightSLine className={`h-4 w-4 transition-all duration-200 ${isActiveCategory ? 'text-primary translate-x-0.5' : 'text-primary-mid'}`} aria-hidden="true" />
                        </Link>
                      );
                    })}
                  </div>
                </div>

                <div className="col-span-4 pl-6">
                  <div key={activeOfferCategory} className="animate-fade-slide-in">
                    <div className="grid grid-cols-4 gap-2">
                      {activeSection.items.map((item) => {
                        const ItemIcon = item.icon;
                        return (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="group/link focus-visible:ring-primary flex items-center gap-3 rounded-xl px-3 py-2.5 transition-colors duration-150 hover:bg-white focus:outline-none focus-visible:ring-2"
                          >
                            {ItemIcon ? (
                              <ItemIcon className="text-primary-mid group-hover/link:text-primary h-5 w-5 shrink-0 transition-colors" aria-hidden="true" />
                            ) : (
                              <span className="bg-primary-light h-2 w-2 shrink-0 rounded-full" />
                            )}
                            <span className="text-mid group-hover/link:text-primary text-sm font-medium transition-colors">{item.title}</span>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </Wrapper>
          </div>,
          document.body,
        )}

      {mounted &&
        isToolsOpen &&
        createPortal(
          <div
            ref={toolsPanelRef}
            id={toolsMenuId}
            role="menu"
            aria-labelledby={toolsButtonId}
            className="animate-dropdown-in fixed left-0 z-50 w-full bg-white/95 py-6 shadow-[0_8px_20px_-4px_rgba(0,0,0,0.08)] backdrop-blur-sm"
            style={{ top: headerBottom }}
          >
            <Wrapper>
              <div ref={toolsMenuRef} onKeyDown={handleToolsMenuKeyDown} className="grid grid-cols-5 gap-0">
                <div className="border-primary-light border-r pr-4">
                  <div className="flex flex-col gap-1">
                    {toolsSections.map((section) => {
                      const isActiveCategory = activeToolsCategory === section.key;
                      const CategoryIcon = section.icon;
                      return (
                        <button
                          key={section.key}
                          type="button"
                          onMouseEnter={() => handleToolsCategoryHover(section.key)}
                          onFocus={() => handleToolsCategoryHover(section.key)}
                          className={`group/cat focus-visible:ring-primary flex w-full items-center justify-between gap-3 rounded-xl px-4 py-3 text-left transition-all duration-200 focus:outline-none focus-visible:ring-2 ${
                            isActiveCategory ? 'text-primary bg-white' : 'text-primary-mid hover:text-primary hover:bg-white'
                          }`}
                        >
                          <span className="flex items-center gap-3">
                            {CategoryIcon && (
                              <CategoryIcon
                                className={`h-5 w-5 transition-colors duration-200 ${isActiveCategory ? 'text-primary' : 'text-primary-mid group-hover/cat:text-primary'}`}
                                aria-hidden="true"
                              />
                            )}
                            <span className="text-sm font-medium">{section.title}</span>
                          </span>
                          <RiArrowRightSLine className={`h-4 w-4 transition-all duration-200 ${isActiveCategory ? 'text-primary translate-x-0.5' : 'text-primary-mid'}`} aria-hidden="true" />
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="col-span-4 pl-6">
                  <div key={activeToolsCategory} className="animate-fade-slide-in">
                    <div className="grid grid-cols-4 gap-2">
                      {activeToolsSection.items.map((item) => {
                        const ItemIcon = item.icon;
                        return (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="group/link focus-visible:ring-primary flex items-center gap-3 rounded-xl px-3 py-2.5 transition-colors duration-150 hover:bg-white focus:outline-none focus-visible:ring-2"
                          >
                            {ItemIcon ? (
                              <ItemIcon className="text-primary-mid group-hover/link:text-primary h-5 w-5 shrink-0 transition-colors" aria-hidden="true" />
                            ) : (
                              <span className="bg-primary-light h-2 w-2 shrink-0 rounded-full" />
                            )}
                            <span className="text-primary group-hover/link:text-primary text-sm font-medium transition-colors">{item.title}</span>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </Wrapper>
          </div>,
          document.body,
        )}

      {isPl &&
        mounted &&
        isAboutOpen &&
        createPortal(
          <div
            ref={aboutPanelRef}
            id={aboutMenuId}
            role="menu"
            aria-labelledby={aboutButtonId}
            className="animate-dropdown-in fixed left-0 z-50 w-full bg-white/95 p-4 shadow-[0_8px_20px_-4px_rgba(0,0,0,0.08)] backdrop-blur-sm"
            style={{ top: headerBottom }}
          >
            <Wrapper>
              <div ref={aboutMenuRef} onKeyDown={handleAboutMenuKeyDown} className="flex gap-2">
                {aboutItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group/link focus-visible:ring-primary flex items-center gap-3 rounded-xl px-4 py-3 transition-colors duration-150 hover:bg-white focus:outline-none focus-visible:ring-2"
                  >
                    {item.icon ? <span className="text-primary-mid group-hover/link:text-primary shrink-0 transition-colors">{item.icon}</span> : null}
                    <span className="text-primary group-hover/link:text-primary text-sm font-medium transition-colors">{item.title}</span>
                  </Link>
                ))}
              </div>
            </Wrapper>
          </div>,
          document.body,
        )}
    </div>
  );
}
