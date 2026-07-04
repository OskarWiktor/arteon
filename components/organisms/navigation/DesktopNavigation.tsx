'use client';

import { usePathname } from 'next/navigation';
import { startTransition, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { RiArrowDownSLine, RiArrowRightSLine } from 'react-icons/ri';
import Wrapper from '@/components/atoms/Wrapper';
import {
  DESKTOP_NAV_ITEMS_PL,
  OFFER_SECTIONS_PL,
} from '@/data/pl/navigation-data-pl';
import type {
  ToolsSectionKey,
  OfferSectionKey,
} from '@/data/pl/navigation-data-pl';
import { useAnimatedUnmount } from '@/hooks/useAnimatedUnmount';
import { useEscapeKey } from '@/hooks/useEscapeKey';
import { useIsMounted } from '@/hooks/useIsMounted';
import { useMenuKeyboardNavigation } from '@/hooks/useMenuKeyboardNavigation';
import { useOutsideClick } from '@/hooks/useOutsideClick';
import { cn } from '@/lib/clsx';
import { getDesktopToolsSections } from '@/lib/i18n/toolRegistry';
import { useLocale, useDictionary, useLocaleConfig } from '@/lib/LocaleContext';
import {
  flexCenterClasses,
  focusRingClasses,
  normalIconSizeClasses,
  smallIconSizeClasses,
} from '@/lib/uiClasses';
import InlineLink from '../../atoms/InlineLink';
const plUi = {
  closeServicesList: 'Zamknij listę usług',
  openServicesList: 'Otwórz listę usług',
} as const;

type ToolsNavItemProps = {
  liRef: React.RefObject<HTMLLIElement | null>;
  btnRef: React.RefObject<HTMLButtonElement | null>;
  href: string;
  isActive: boolean;
  label: string;
  isOpen: boolean;
  buttonId: string;
  menuId: string;
  onToggle: () => void;
  onButtonKeyDown: (e: React.KeyboardEvent<HTMLButtonElement>) => void;
  openLabel: string;
  closeLabel: string;
};

/** The "Tools" nav item with its dropdown trigger button (shared between PL inline and non-PL standalone layouts) */
function ToolsNavItem({
  liRef,
  btnRef,
  href,
  isActive,
  label,
  isOpen,
  buttonId,
  menuId,
  onToggle,
  onButtonKeyDown,
  openLabel,
  closeLabel,
}: ToolsNavItemProps) {
  return (
    <li ref={liRef} className='group relative flex items-center gap-0.5'>
      <InlineLink
        href={href}
        variant='navigation'
        aria-current={isActive ? 'page' : undefined}
        className={isActive ? 'font-semibold text-dark' : ''}
      >
        {label}
      </InlineLink>

      <button
        id={buttonId}
        type='button'
        onClick={onToggle}
        onKeyDown={onButtonKeyDown}
        aria-haspopup='menu'
        aria-expanded={isOpen}
        aria-controls={menuId}
        ref={btnRef}
        className={cn(
          '-mr-3.5 h-7 w-7 cursor-pointer rounded text-primary transition-colors hover:bg-primary-light',
          flexCenterClasses,
          focusRingClasses,
        )}
        aria-label={isOpen ? closeLabel : openLabel}
      >
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
    </li>
  );
}

type OfferNavItemProps = {
  liRef: React.RefObject<HTMLLIElement | null>;
  btnRef: React.RefObject<HTMLButtonElement | null>;
  href: string;
  isActive: boolean;
  label: string;
  isOpen: boolean;
  buttonId: string;
  menuId: string;
  onToggle: () => void;
  onButtonKeyDown: (e: React.KeyboardEvent<HTMLButtonElement>) => void;
};

/** The "Offer" (usługi) nav item with its dropdown trigger button */
function OfferNavItem({
  liRef,
  btnRef,
  href,
  isActive,
  label,
  isOpen,
  buttonId,
  menuId,
  onToggle,
  onButtonKeyDown,
}: OfferNavItemProps) {
  return (
    <li ref={liRef} className='group relative flex items-center gap-0.5'>
      <InlineLink
        href={href}
        variant='navigation'
        aria-current={isActive ? 'page' : undefined}
        className={isActive ? 'font-semibold text-dark' : ''}
      >
        {label}
      </InlineLink>

      <button
        id={buttonId}
        type='button'
        onClick={onToggle}
        onKeyDown={onButtonKeyDown}
        aria-haspopup='menu'
        aria-expanded={isOpen}
        aria-controls={menuId}
        ref={btnRef}
        className={cn(
          '-mr-3.5 h-7 w-7 cursor-pointer rounded text-primary transition-colors hover:bg-primary-light',
          flexCenterClasses,
          focusRingClasses,
        )}
        aria-label={isOpen ? plUi.closeServicesList : plUi.openServicesList}
      >
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
    </li>
  );
}

/**
 * Render the desktop navigation bar with localized links and two dropdown menus: Offer and Tools.
 *
 * The component manages dropdown open state, active categories, keyboard navigation, and focus handling.
 * Dropdowns close on outside click, Escape key, or route changes. For the Polish (`pl`) locale dropdown
 * panels are rendered into document.body via portals; otherwise Tools is integrated into the main nav.
 *
 * @returns A JSX element representing the responsive desktop navigation bar with its dropdown panels.
 */
export default function DesktopNavigation() {
  const locale = useLocale();
  const isPl = locale === 'pl';
  const t = useDictionary().nav;
  const localeConfig = useLocaleConfig();
  const toolsSections = getDesktopToolsSections(locale);
  const pathname = usePathname();
  const [isOfferOpen, setIsOfferOpen] = useState(false);
  const [isToolsOpen, setIsToolsOpen] = useState(false);
  const [activeOfferCategory, setActiveOfferCategory] =
    useState<OfferSectionKey>('witryny');
  const [activeToolsCategory, setActiveToolsCategory] =
    useState<ToolsSectionKey>('obrazy');

  const toggleOffer = () => startTransition(() => setIsOfferOpen(p => !p));
  const toggleTools = () => startTransition(() => setIsToolsOpen(p => !p));

  // Keep each mega-menu mounted briefly after closing so it can animate out
  // instead of vanishing. `*Rendered` gates the portal; `*Closing` swaps the
  // entrance animation for the exit one.
  const { shouldRender: offerRendered, isClosing: offerClosing } =
    useAnimatedUnmount(isOfferOpen);
  const { shouldRender: toolsRendered, isClosing: toolsClosing } =
    useAnimatedUnmount(isToolsOpen);

  const offerLiRef = useRef<HTMLLIElement>(null);
  const offerBtnRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const toolsLiRef = useRef<HTMLLIElement>(null);
  const toolsBtnRef = useRef<HTMLButtonElement>(null);
  const toolsMenuRef = useRef<HTMLDivElement>(null);

  const offerPanelRef = useRef<HTMLDivElement>(null);
  const toolsPanelRef = useRef<HTMLDivElement>(null);

  const mounted = useIsMounted();
  const [headerBottom, setHeaderBottom] = useState(0);

  // Zamknięcie menu z powrotem focusu na wyzwalacz (wzorzec menu: Tab/Escape
  // zamyka, a focus nie ucieka do portalu/przeglądarki).
  const closeOfferMenu = () => {
    setIsOfferOpen(false);
    offerBtnRef.current?.focus();
  };
  const closeToolsMenu = () => {
    setIsToolsOpen(false);
    toolsBtnRef.current?.focus();
  };

  const offerMenuKeyboard = useMenuKeyboardNavigation(menuRef, {
    onClose: closeOfferMenu,
  });
  const toolsMenuKeyboard = useMenuKeyboardNavigation(toolsMenuRef, {
    onClose: closeToolsMenu,
    // Lewa kolumna „Narzędzi" to <button> (przełączniki kategorii), prawa to linki.
    itemSelector: 'a[href], button',
  });

  const buttonId = 'offer-button';
  const menuId = 'offer-submenu';

  const toolsButtonId = 'tools-button';
  const toolsMenuId = 'tools-submenu';

  useOutsideClick(
    [offerLiRef, offerPanelRef],
    () => setIsOfferOpen(false),
    isOfferOpen,
  );
  useOutsideClick(
    [toolsLiRef, toolsPanelRef],
    () => setIsToolsOpen(false),
    isToolsOpen,
  );

  useEscapeKey(() => {
    setIsOfferOpen(false);
    setIsToolsOpen(false);
    (offerBtnRef.current ?? toolsBtnRef.current)?.focus();
  }, isOfferOpen || isToolsOpen);

  useEffect(() => {
    setIsOfferOpen(false);
    setIsToolsOpen(false);
  }, [pathname]);

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

  const handleCategoryHover = (key: OfferSectionKey) => {
    setActiveOfferCategory(key);
  };

  const handleToolsCategoryHover = (key: ToolsSectionKey) => {
    setActiveToolsCategory(key);
  };

  const navigationItems = isPl ? DESKTOP_NAV_ITEMS_PL : [];

  const activeSection =
    (isPl && OFFER_SECTIONS_PL.find(s => s.key === activeOfferCategory)) ||
    OFFER_SECTIONS_PL[0];
  const activeToolsSection =
    toolsSections.find(s => s.key === activeToolsCategory) || toolsSections[0];

  const handleOfferButtonKeyDown = (
    e: React.KeyboardEvent<HTMLButtonElement>,
  ) => {
    if (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      if (!isOfferOpen) setIsOfferOpen(true);
      requestAnimationFrame(() => offerMenuKeyboard.focusFirst());
    }
  };

  const handleMenuKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) =>
    offerMenuKeyboard.onKeyDown(e);

  const handleToolsButtonKeyDown = (
    e: React.KeyboardEvent<HTMLButtonElement>,
  ) => {
    if (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      if (!isToolsOpen) setIsToolsOpen(true);
      requestAnimationFrame(() => toolsMenuKeyboard.focusFirst());
    }
  };

  const handleToolsMenuKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) =>
    toolsMenuKeyboard.onKeyDown(e);

  const toolsHref = localeConfig.toolsIndexHref;
  const isToolsActive = pathname.startsWith(localeConfig.toolsBasePath);

  return (
    <div className='hidden lg:flex lg:items-center lg:gap-4'>
      <ul className='relative flex items-center gap-4 lg:gap-6'>
        {/* Tools link + dropdown rendered at correct position for non-PL (standalone) */}
        {!isPl && (
          <ToolsNavItem
            liRef={toolsLiRef}
            btnRef={toolsBtnRef}
            href={toolsHref}
            isActive={isToolsActive}
            label={t.toolsLabel}
            isOpen={isToolsOpen}
            buttonId={toolsButtonId}
            menuId={toolsMenuId}
            onToggle={toggleTools}
            onButtonKeyDown={handleToolsButtonKeyDown}
            openLabel={t.openToolsList}
            closeLabel={t.closeToolsList}
          />
        )}

        {!isPl && localeConfig.aboutHref && (
          <li className='relative flex items-center'>
            <InlineLink
              href={localeConfig.aboutHref}
              variant='navigation'
              aria-current={
                pathname.startsWith(localeConfig.aboutHref) ? 'page' : undefined
              }
              className={
                pathname.startsWith(localeConfig.aboutHref)
                  ? 'font-semibold text-dark'
                  : ''
              }
            >
              {t.aboutLabel}
            </InlineLink>
          </li>
        )}

        {!isPl && localeConfig.contactHref && (
          <li className='relative flex items-center'>
            <InlineLink
              href={localeConfig.contactHref}
              variant='navigation'
              aria-current={
                pathname.startsWith(localeConfig.contactHref)
                  ? 'page'
                  : undefined
              }
              className={
                pathname.startsWith(localeConfig.contactHref)
                  ? 'font-semibold text-dark'
                  : ''
              }
            >
              {t.contactLabel}
            </InlineLink>
          </li>
        )}

        {/* PL nav items (Tools rendered in correct order within the loop) */}
        {navigationItems.map(({ href, label, exact, key: itemKey }) => {
          const isActivePage = exact
            ? pathname === href
            : pathname.startsWith(href);

          if (itemKey === 'narzedzia') {
            return (
              <ToolsNavItem
                key={label}
                liRef={toolsLiRef}
                btnRef={toolsBtnRef}
                href={toolsHref}
                isActive={isToolsActive}
                label={t.toolsLabel}
                isOpen={isToolsOpen}
                buttonId={toolsButtonId}
                menuId={toolsMenuId}
                onToggle={toggleTools}
                onButtonKeyDown={handleToolsButtonKeyDown}
                openLabel={t.openToolsList}
                closeLabel={t.closeToolsList}
              />
            );
          }

          if (itemKey === 'uslugi') {
            return (
              <OfferNavItem
                key={label}
                liRef={offerLiRef}
                btnRef={offerBtnRef}
                href={href}
                isActive={pathname.startsWith('/uslugi')}
                label={label}
                isOpen={isOfferOpen}
                buttonId={buttonId}
                menuId={menuId}
                onToggle={toggleOffer}
                onButtonKeyDown={handleOfferButtonKeyDown}
              />
            );
          }

          return (
            <li key={label} className='relative flex items-center'>
              <InlineLink
                href={href}
                variant='navigation'
                aria-current={isActivePage ? 'page' : undefined}
                className={isActivePage ? 'font-semibold text-dark' : ''}
              >
                {label}
              </InlineLink>
            </li>
          );
        })}
      </ul>

      {isPl &&
        mounted &&
        offerRendered &&
        activeSection &&
        createPortal(
          <div
            ref={offerPanelRef}
            id={menuId}
            role='menu'
            aria-labelledby={buttonId}
            tabIndex={-1}
            onKeyDown={handleMenuKeyDown}
            className={cn(
              'fixed left-0 z-50 w-full bg-white/95 py-6 shadow-[0_8px_20px_-4px_rgba(0,0,0,0.08)] backdrop-blur-sm',
              offerClosing
                ? 'animate-[dropdown-out_0.16s_ease-in_both]'
                : 'animate-[dropdown-in_0.2s_ease-out_both]',
            )}
            style={{ top: headerBottom }}
          >
            <Wrapper>
              <div ref={menuRef} className='grid grid-cols-5 gap-0'>
                <div
                  className='border-r border-primary-light pr-4'
                  data-menu-col='0'
                >
                  <div className='flex flex-col gap-1'>
                    {OFFER_SECTIONS_PL.map(section => {
                      const isActiveCategory =
                        activeOfferCategory === section.key;
                      const CategoryIcon = section.icon;
                      return (
                        <InlineLink
                          key={section.key}
                          href={section.hubHref || '#'}
                          role='menuitem'
                          tabIndex={-1}
                          onMouseEnter={() => handleCategoryHover(section.key)}
                          onFocus={() => handleCategoryHover(section.key)}
                          className={cn(
                            'group/cat w-full justify-between gap-3 rounded-lg px-4 py-3 text-left transition-all duration-200',
                            {
                              'bg-white text-primary': isActiveCategory,
                              'text-primary-mid hover:bg-white hover:text-primary':
                                !isActiveCategory,
                            },
                          )}
                        >
                          <span className='flex items-center gap-3'>
                            {CategoryIcon && (
                              <CategoryIcon
                                className={cn(
                                  'transition-colors duration-200',
                                  normalIconSizeClasses,
                                  {
                                    'text-primary': isActiveCategory,
                                    'text-primary-mid group-hover/cat:text-primary':
                                      !isActiveCategory,
                                  },
                                )}
                                aria-hidden='true'
                              />
                            )}
                            <span className='text-sm font-medium'>
                              {section.title}
                            </span>
                          </span>
                          <RiArrowRightSLine
                            className={cn(
                              'transition-all duration-200',
                              smallIconSizeClasses,
                              {
                                'translate-x-0.5 text-primary':
                                  isActiveCategory,
                                'text-primary-mid': !isActiveCategory,
                              },
                            )}
                            aria-hidden='true'
                          />
                        </InlineLink>
                      );
                    })}
                  </div>
                </div>

                <div className='col-span-4 pl-6' data-menu-col='1'>
                  <div
                    key={activeOfferCategory}
                    className='animate-[fade-slide-in_0.15s_ease-out_both]'
                  >
                    <div className='grid grid-cols-4 gap-2'>
                      {activeSection.items.map(item => {
                        const ItemIcon = item.icon;
                        return (
                          <InlineLink
                            key={item.href}
                            href={item.href}
                            role='menuitem'
                            tabIndex={-1}
                            className='group/link gap-3 rounded-lg px-3 py-2.5 transition-colors duration-150 hover:bg-white'
                          >
                            {ItemIcon ? (
                              <ItemIcon
                                className={cn(
                                  'shrink-0 text-primary-mid transition-colors group-hover/link:text-primary',
                                  normalIconSizeClasses,
                                )}
                                aria-hidden='true'
                              />
                            ) : (
                              <span className='h-2 w-2 shrink-0 rounded-lg bg-primary-light' />
                            )}
                            <span className='text-sm font-medium text-mid transition-colors group-hover/link:text-primary'>
                              {item.title}
                            </span>
                          </InlineLink>
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
        toolsRendered &&
        createPortal(
          <div
            ref={toolsPanelRef}
            id={toolsMenuId}
            role='menu'
            aria-labelledby={toolsButtonId}
            tabIndex={-1}
            onKeyDown={handleToolsMenuKeyDown}
            className={cn(
              'fixed left-0 z-50 w-full bg-white/95 py-6 shadow-[0_8px_20px_-4px_rgba(0,0,0,0.08)] backdrop-blur-sm',
              toolsClosing
                ? 'animate-[dropdown-out_0.16s_ease-in_both]'
                : 'animate-[dropdown-in_0.2s_ease-out_both]',
            )}
            style={{ top: headerBottom }}
          >
            <Wrapper>
              <div
                ref={toolsMenuRef}
                className='grid gap-0'
                style={{ gridTemplateColumns: 'minmax(180px, auto) 1fr' }}
              >
                <div
                  className='border-r border-primary-light pr-4'
                  data-menu-col='0'
                >
                  <div className='flex flex-col gap-1'>
                    {toolsSections.map(section => {
                      const isActiveCategory =
                        activeToolsCategory === section.key;
                      const CategoryIcon = section.icon;
                      return (
                        <button
                          key={section.key}
                          type='button'
                          role='menuitem'
                          tabIndex={-1}
                          onMouseEnter={() =>
                            handleToolsCategoryHover(section.key)
                          }
                          onFocus={() => handleToolsCategoryHover(section.key)}
                          className={cn(
                            'group/cat flex w-full items-center justify-between gap-3 rounded-lg px-4 py-3 text-left transition-all duration-200',
                            {
                              'bg-white text-primary': isActiveCategory,
                              'text-primary-mid hover:bg-white hover:text-primary':
                                !isActiveCategory,
                            },
                          )}
                        >
                          <span className='flex items-center gap-3'>
                            {CategoryIcon && (
                              <CategoryIcon
                                className={cn(
                                  'transition-colors duration-200',
                                  normalIconSizeClasses,
                                  {
                                    'text-primary': isActiveCategory,
                                    'text-primary-mid group-hover/cat:text-primary':
                                      !isActiveCategory,
                                  },
                                )}
                                aria-hidden='true'
                              />
                            )}
                            <span className='text-sm font-medium'>
                              {section.title}
                            </span>
                          </span>
                          <RiArrowRightSLine
                            className={cn(
                              'transition-all duration-200',
                              smallIconSizeClasses,
                              {
                                'translate-x-0.5 text-primary':
                                  isActiveCategory,
                                'text-primary-mid': !isActiveCategory,
                              },
                            )}
                            aria-hidden='true'
                          />
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className='pl-6' data-menu-col='1'>
                  <div
                    key={activeToolsCategory}
                    className='animate-[fade-slide-in_0.15s_ease-out_both]'
                  >
                    <div
                      className={
                        activeToolsCategory === 'konwertery' ||
                        activeToolsCategory === 'jednostki' ||
                        activeToolsCategory === 'dokumenty'
                          ? 'grid grid-cols-6 gap-2'
                          : 'grid grid-cols-4 gap-2'
                      }
                      style={
                        activeToolsCategory === 'konwertery' ||
                        activeToolsCategory === 'jednostki' ||
                        activeToolsCategory === 'dokumenty'
                          ? {
                              gridAutoFlow: 'column',
                              gridTemplateRows: `repeat(${Math.ceil(activeToolsSection.items.length / 6)}, minmax(0, 1fr))`,
                            }
                          : undefined
                      }
                    >
                      {activeToolsSection.items.map(item => {
                        const ItemIcon = item.icon;
                        return (
                          <InlineLink
                            key={item.href}
                            href={item.href}
                            role='menuitem'
                            tabIndex={-1}
                            className='group/link gap-3 rounded-lg px-3 py-2.5 transition-colors duration-150 hover:bg-white'
                          >
                            {ItemIcon ? (
                              <ItemIcon
                                className={cn(
                                  'shrink-0 text-primary-mid transition-colors group-hover/link:text-primary',
                                  normalIconSizeClasses,
                                )}
                                aria-hidden='true'
                              />
                            ) : (
                              <span className='h-2 w-2 shrink-0 rounded-lg bg-primary-light' />
                            )}
                            <span className='text-sm font-medium text-primary transition-colors group-hover/link:text-primary'>
                              {item.title}
                            </span>
                          </InlineLink>
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
    </div>
  );
}
