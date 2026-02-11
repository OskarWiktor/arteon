'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { createPortal } from 'react-dom';
import Wrapper from '@/components/ui/Wrapper';
import AppLink from '@/components/ui/Link';
import { TOOLS_SECTIONS_EN } from '@/components/shared/navigation-data/en';
import type { ToolsSectionKey } from '@/components/shared/navigation-data/pl';
import { useEscapeKey } from '@/hooks/useEscapeKey';
import { useOutsideClick } from '@/hooks/useOutsideClick';
import { useMenuKeyboardNavigation } from '@/hooks/useMenuKeyboardNavigation';
import { RiArrowDownSLine, RiArrowRightSLine } from 'react-icons/ri';

const ui = {
  closeToolsList: 'Close tools list',
  openToolsList: 'Open tools list',
} as const;

export default function DesktopNavigationEN() {
  const t = ui;
  const pathname = usePathname();
  const [isToolsOpen, setIsToolsOpen] = useState(false);
  const [activeToolsCategory, setActiveToolsCategory] = useState<ToolsSectionKey>('obrazy');

  const toolsLiRef = useRef<HTMLLIElement>(null);
  const toolsBtnRef = useRef<HTMLButtonElement>(null);
  const toolsMenuRef = useRef<HTMLDivElement>(null);
  const toolsPanelRef = useRef<HTMLDivElement>(null);

  const [mounted, setMounted] = useState(false);
  const [headerBottom, setHeaderBottom] = useState(0);

  const toolsMenuKeyboard = useMenuKeyboardNavigation(toolsMenuRef);

  const toolsButtonId = 'tools-button-en';
  const toolsMenuId = 'tools-submenu-en';

  useOutsideClick([toolsLiRef, toolsPanelRef], () => setIsToolsOpen(false), isToolsOpen);

  useEscapeKey(() => {
    setIsToolsOpen(false);
    toolsBtnRef.current?.focus();
  }, isToolsOpen);

  useEffect(() => {
    setIsToolsOpen(false);
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

  const handleToolsCategoryHover = useCallback((key: ToolsSectionKey) => {
    setActiveToolsCategory(key);
  }, []);

  const activeToolsSection = TOOLS_SECTIONS_EN.find((s) => s.key === activeToolsCategory) || TOOLS_SECTIONS_EN[0];

  const handleToolsButtonKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      if (!isToolsOpen) setIsToolsOpen(true);
      requestAnimationFrame(() => toolsMenuKeyboard.focusFirst());
    }
  };

  const handleToolsMenuKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => toolsMenuKeyboard.onKeyDown(e);

  const isActive = pathname.startsWith('/en/tools');

  return (
    <div className="hidden lg:flex lg:items-center lg:gap-4">
      <ul className="relative flex items-center gap-4 lg:gap-6">
        <li ref={toolsLiRef} className="group relative flex items-center gap-0.5">
          <AppLink href="/en/tools" variant="navigation" aria-current={isActive ? 'page' : undefined} className={isActive ? 'text-dark font-semibold' : ''}>
            Tools
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
            <motion.span animate={{ rotate: isToolsOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
              <RiArrowDownSLine className="h-4 w-4" aria-hidden="true" />
            </motion.span>
          </button>
        </li>
      </ul>

      {mounted &&
        createPortal(
          <AnimatePresence>
            {isToolsOpen && (
              <motion.div
                ref={toolsPanelRef}
                id={toolsMenuId}
                role="menu"
                aria-labelledby={toolsButtonId}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="fixed left-0 z-50 w-full bg-white/95 py-6 shadow-[0_8px_20px_-4px_rgba(0,0,0,0.08)] backdrop-blur-sm"
                style={{ top: headerBottom }}
              >
                <Wrapper>
                  <div ref={toolsMenuRef} onKeyDown={handleToolsMenuKeyDown} className="grid grid-cols-5 gap-0">
                    <div className="border-primary-light border-r pr-4">
                      <div className="flex flex-col gap-1">
                        {TOOLS_SECTIONS_EN.map((section) => {
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
                      <AnimatePresence mode="wait">
                        <motion.div key={activeToolsCategory} initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }} transition={{ duration: 0.15 }}>
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
                        </motion.div>
                      </AnimatePresence>
                    </div>
                  </div>
                </Wrapper>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body,
        )}
    </div>
  );
}
