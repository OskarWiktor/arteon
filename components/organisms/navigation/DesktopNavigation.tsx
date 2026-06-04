'use client';

import { startTransition, useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { createPortal } from 'react-dom';
import Wrapper from '@/components/atoms/Wrapper';
import {
  DESKTOP_NAV_ITEMS_PL,
  OFFER_SECTIONS_PL,
  type OfferSectionKey,
} from '@/data/pl/navigation-data-pl';
import { useLocale, useDictionary, useLocaleConfig } from '@/lib/LocaleContext';
import { useIsMounted } from '@/hooks/useIsMounted';
import { getDesktopToolsSections, type ToolsSectionKey } from '@/lib/i18n/tool-registry';
import { useEscapeKey } from '@/hooks/useEscapeKey';
import { useOutsideClick } from '@/hooks/useOutsideClick';
import { useMenuKeyboardNavigation } from '@/hooks/useMenuKeyboardNavigation';
import {
  NavArrowDownSLine as RiArrowDownSLine,
  NavArrowRightSLine as RiArrowRightSLine,
} from '@/components/atoms/NavIcons';

import InlineLink from '../../atoms/InlineLink';
import { cn } from '@/lib/utils';
import {
  flexCenterClasses,
  focusRingClasses,
  normalIconSizeClasses,
  smallIconSizeClasses,
} from '@/lib/ui-classes';
const plUi = {
  closeServicesList: 'Zamknij listę usług',
  openServicesList: 'Otwórz listę usług',
} as const;

export default function DesktopNavigation() {
  const locale = useLocale();
  const isPl = locale === 'pl';
  const t = useDictionary().nav;
  const localeConfig = useLocaleConfig();
  const toolsSections = getDesktopToolsSections(locale);
  const pathname = usePathname();
  const [isOfferOpen, setIsOfferOpen] = useState(false);
  const [isToolsOpen, setIsToolsOpen] = useState(false);
  const [activeOfferCategory, setActiveOfferCategory] = useState<OfferSectionKey>('witryny');
  const [activeToolsCategory, setActiveToolsCategory] = useState<ToolsSectionKey>('obrazy');

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

  const offerMenuKeyboard = useMenuKeyboardNavigation(menuRef);
  const toolsMenuKeyboard = useMenuKeyboardNavigation(toolsMenuRef);

  const buttonId = 'offer-button';
  const menuId = 'offer-submenu';

  const toolsButtonId = 'tools-button';
  const toolsMenuId = 'tools-submenu';

  useOutsideClick([offerLiRef, offerPanelRef], () => setIsOfferOpen(false), isOfferOpen);
  useOutsideClick([toolsLiRef, toolsPanelRef], () => setIsToolsOpen(false), isToolsOpen);

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
    (isPl && OFFER_SECTIONS_PL.find(s => s.key === activeOfferCategory)) || OFFER_SECTIONS_PL[0];
  const activeToolsSection =
    toolsSections.find(s => s.key === activeToolsCategory) || toolsSections[0];

  const handleOfferButtonKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      if (!isOfferOpen) setIsOfferOpen(true);
      requestAnimationFrame(() => offerMenuKeyboard.focusFirst());
    }
  };

  const handleMenuKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) =>
    offerMenuKeyboard.onKeyDown(e);

  const handleToolsButtonKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
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
          <li ref={toolsLiRef} className='group relative flex items-center gap-0.5'>
            <InlineLink
              href={toolsHref}
              variant='navigation'
              aria-current={isToolsActive ? 'page' : undefined}
              className={isToolsActive ? 'font-semibold text-dark' : ''}
            >
              {t.toolsLabel}
            </InlineLink>

            <button
              id={toolsButtonId}
              type='button'
              onClick={() => startTransition(() => setIsToolsOpen(p => !p))}
              onKeyDown={handleToolsButtonKeyDown}
              aria-haspopup='menu'
              aria-expanded={isToolsOpen}
              aria-controls={toolsMenuId}
              ref={toolsBtnRef}
              className={cn(
                '-mr-3.5 h-7 w-7 cursor-pointer rounded text-primary transition-colors hover:bg-primary-light',
                flexCenterClasses,
                focusRingClasses,
              )}
              aria-label={isToolsOpen ? t.closeToolsList : t.openToolsList}
            >
              <span
                className='inline-flex transition-transform duration-200'
                style={{ transform: isToolsOpen ? 'rotate(180deg)' : undefined }}
              >
                <RiArrowDownSLine className={smallIconSizeClasses} aria-hidden='true' />
              </span>
            </button>
          </li>
        )}

        {!isPl && localeConfig.aboutHref && (
          <li className='relative flex items-center'>
            <InlineLink
              href={localeConfig.aboutHref}
              variant='navigation'
              aria-current={pathname.startsWith(localeConfig.aboutHref) ? 'page' : undefined}
              className={
                pathname.startsWith(localeConfig.aboutHref) ? 'font-semibold text-dark' : ''
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
              aria-current={pathname.startsWith(localeConfig.contactHref) ? 'page' : undefined}
              className={
                pathname.startsWith(localeConfig.contactHref) ? 'font-semibold text-dark' : ''
              }
            >
              {t.contactLabel}
            </InlineLink>
          </li>
        )}

        {/* PL nav items (Tools rendered in correct order within the loop) */}
        {navigationItems.map(({ href, label, exact, key: itemKey }) => {
          const isActivePage = exact ? pathname === href : pathname.startsWith(href);

          if (itemKey === 'narzedzia') {
            return (
              <li ref={toolsLiRef} className='group relative flex items-center gap-0.5' key={label}>
                <InlineLink
                  href={toolsHref}
                  variant='navigation'
                  aria-current={isToolsActive ? 'page' : undefined}
                  className={isToolsActive ? 'font-semibold text-dark' : ''}
                >
                  {t.toolsLabel}
                </InlineLink>

                <button
                  id={toolsButtonId}
                  type='button'
                  onClick={() => startTransition(() => setIsToolsOpen(p => !p))}
                  onKeyDown={handleToolsButtonKeyDown}
                  aria-haspopup='menu'
                  aria-expanded={isToolsOpen}
                  aria-controls={toolsMenuId}
                  ref={toolsBtnRef}
                  className={cn(
                    '-mr-3.5 h-7 w-7 cursor-pointer rounded text-primary transition-colors hover:bg-primary-light',
                    flexCenterClasses,
                    focusRingClasses,
                  )}
                  aria-label={isToolsOpen ? t.closeToolsList : t.openToolsList}
                >
                  <span
                    className='inline-flex transition-transform duration-200'
                    style={{ transform: isToolsOpen ? 'rotate(180deg)' : undefined }}
                  >
                    <RiArrowDownSLine className={smallIconSizeClasses} aria-hidden='true' />
                  </span>
                </button>
              </li>
            );
          }

          if (itemKey === 'uslugi') {
            const isActive = pathname.startsWith('/uslugi');
            return (
              <li ref={offerLiRef} className='group relative flex items-center gap-0.5' key={label}>
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
                  onClick={() => startTransition(() => setIsOfferOpen(p => !p))}
                  onKeyDown={handleOfferButtonKeyDown}
                  aria-haspopup='menu'
                  aria-expanded={isOfferOpen}
                  aria-controls={menuId}
                  ref={offerBtnRef}
                  className={cn(
                    '-mr-3.5 h-7 w-7 cursor-pointer rounded text-primary transition-colors hover:bg-primary-light',
                    flexCenterClasses,
                    focusRingClasses,
                  )}
                  aria-label={isOfferOpen ? plUi.closeServicesList : plUi.openServicesList}
                >
                  <span
                    className='inline-flex transition-transform duration-200'
                    style={{ transform: isOfferOpen ? 'rotate(180deg)' : undefined }}
                  >
                    <RiArrowDownSLine className={smallIconSizeClasses} aria-hidden='true' />
                  </span>
                </button>
              </li>
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
        isOfferOpen &&
        activeSection &&
        createPortal(
          <div
            ref={offerPanelRef}
            id={menuId}
            role='menu'
            aria-labelledby={buttonId}
            className='animate-dropdown-in fixed left-0 z-50 w-full bg-white/95 py-6 shadow-[0_8px_20px_-4px_rgba(0,0,0,0.08)] backdrop-blur-sm'
            style={{ top: headerBottom }}
          >
            <Wrapper>
              <div ref={menuRef} onKeyDown={handleMenuKeyDown} className='grid grid-cols-5 gap-0'>
                <div className='border-r border-primary-light pr-4'>
                  <div className='flex flex-col gap-1'>
                    {OFFER_SECTIONS_PL.map(section => {
                      const isActiveCategory = activeOfferCategory === section.key;
                      const CategoryIcon = section.icon;
                      return (
                        <InlineLink
                          key={section.key}
                          href={section.hubHref || '#'}
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
                            <span className='text-sm font-medium'>{section.title}</span>
                          </span>
                          <RiArrowRightSLine
                            className={cn('transition-all duration-200', smallIconSizeClasses, {
                              'translate-x-0.5 text-primary': isActiveCategory,
                              'text-primary-mid': !isActiveCategory,
                            })}
                            aria-hidden='true'
                          />
                        </InlineLink>
                      );
                    })}
                  </div>
                </div>

                <div className='col-span-4 pl-6'>
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
        isToolsOpen &&
        createPortal(
          <div
            ref={toolsPanelRef}
            id={toolsMenuId}
            role='menu'
            aria-labelledby={toolsButtonId}
            className='animate-dropdown-in fixed left-0 z-50 w-full bg-white/95 py-6 shadow-[0_8px_20px_-4px_rgba(0,0,0,0.08)] backdrop-blur-sm'
            style={{ top: headerBottom }}
          >
            <Wrapper>
              <div
                ref={toolsMenuRef}
                onKeyDown={handleToolsMenuKeyDown}
                className='grid gap-0'
                style={{ gridTemplateColumns: 'minmax(180px, auto) 1fr' }}
              >
                <div className='border-r border-primary-light pr-4'>
                  <div className='flex flex-col gap-1'>
                    {toolsSections.map(section => {
                      const isActiveCategory = activeToolsCategory === section.key;
                      const CategoryIcon = section.icon;
                      return (
                        <button
                          key={section.key}
                          type='button'
                          onMouseEnter={() => handleToolsCategoryHover(section.key)}
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
                            <span className='text-sm font-medium'>{section.title}</span>
                          </span>
                          <RiArrowRightSLine
                            className={cn('transition-all duration-200', smallIconSizeClasses, {
                              'translate-x-0.5 text-primary': isActiveCategory,
                              'text-primary-mid': !isActiveCategory,
                            })}
                            aria-hidden='true'
                          />
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className='pl-6'>
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
