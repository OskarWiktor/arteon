'use client';

import { useEffect, useRef, useState, type JSX } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { createPortal } from 'react-dom';
import IconText from '../../ui/IconText';
import { TOOLS_SECTIONS_EN, LEGAL_LINKS_EN } from '@/components/shared/navigation-data/en';
import { useEscapeKey } from '@/hooks/useEscapeKey';
import { useFocusTrap } from '@/hooks/useFocusTrap';
import { useRestoreFocus } from '@/hooks/useRestoreFocus';
import { useScrollLock } from '@/hooks/useScrollLock';
import { useEventListener } from '@/hooks/useEventListener';
import { useTimeout } from '@/hooks/useTimeout';
import { RiArrowDownSLine } from 'react-icons/ri';
import LanguageSwitcher from '@/components/shared/LanguageSwitcher';

const ui = {
  close: 'Close',
  tools: 'Tools',
  mobileMenu: 'Mobile menu',
} as const;

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

export default function MobileNavigationEN({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (val: boolean) => void }) {
  const t = ui;
  const pathname = usePathname();
  const panelRef = useRef<HTMLDivElement>(null);

  const TOOLS_SECTIONS_MOBILE: ToolSection[] = TOOLS_SECTIONS_EN.map((section) => ({
    key: section.key,
    title: section.title,
    items: section.items.map((it) => {
      const Icon = it.icon;
      return {
        href: it.href,
        title: it.title,
        icon: Icon ? <Icon aria-hidden className="h-5 w-5" /> : undefined,
      };
    }),
  }));

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

  const [openToolSections, setOpenToolSections] = useState<Record<string, boolean>>({});

  const toggleToolSection = (key: string) => {
    setOpenToolSections((prev) => {
      const willOpen = !prev[key];
      const next: Record<string, boolean> = {};
      if (willOpen) next[key] = true;
      return next;
    });
  };

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
              <button onClick={() => setIsOpen(false)} className="ring-primary rounded px-3 pt-1 ring-offset-2 outline-none focus-visible:ring-2">
                <span className="text-light text-sm font-medium">{t.close}</span>
              </button>
            </div>

            <div className="flex h-[calc(100dvh-49px)] flex-col overflow-y-auto px-4 py-3">
              <Link
                href="/en/tools"
                onClick={() => setIsOpen(false)}
                aria-current={pathname === '/en/tools' ? 'page' : undefined}
                className={`ring-primary mb-2 block rounded-xl px-3 py-[7px] text-[15px] font-semibold ring-offset-2 outline-none focus-visible:ring-2 ${
                  pathname === '/en/tools' ? 'text-dark bg-neutral-50' : 'text-dark hover:bg-neutral-100'
                }`}
              >
                {t.tools}
              </Link>

              <div className="flex flex-col">
                {TOOLS_SECTIONS_MOBILE.map((sec) => {
                  const expanded = !!openToolSections[sec.key];
                  return (
                    <div key={sec.key} className="mb-1">
                      <div className="flex items-center justify-between rounded-xl px-2 py-1 transition hover:bg-neutral-100">
                        <div className="text-dark px-2 py-1 text-[15px] font-semibold">{sec.title}</div>

                        <button
                          type="button"
                          aria-expanded={expanded}
                          aria-controls={`sec-en-${sec.key}`}
                          onClick={() => toggleToolSection(sec.key)}
                          className="text-primary focus-visible:ring-primary flex h-9 w-9 items-center justify-center rounded-lg transition outline-none hover:bg-neutral-200 focus-visible:ring-2 focus-visible:ring-offset-2"
                        >
                          <motion.span animate={{ rotate: expanded ? 180 : 0 }} transition={{ duration: 0.2 }}>
                            <RiArrowDownSLine className="h-5 w-5" aria-hidden="true" />
                          </motion.span>
                        </button>
                      </div>

                      <AnimatePresence initial={false}>
                        {expanded && (
                          <motion.div
                            id={`sec-en-${sec.key}`}
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
                                      className="group text-dark focus-visible:ring-primary flex items-center gap-3 rounded-xl px-2 py-[7px] text-[15px] transition outline-none hover:bg-neutral-100 focus-visible:ring-2 focus-visible:ring-offset-2"
                                    >
                                      <IconText icon={it.icon ? <span className="text-primary">{it.icon}</span> : undefined} gap="3" className="min-w-0">
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

              <ul className="mb-2 flex flex-col gap-1">
                {LEGAL_LINKS_EN.map(({ href, label }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      onClick={() => setIsOpen(false)}
                      className="text-dark focus-visible:ring-primary block rounded-xl px-3 py-[7px] text-[15px] outline-none hover:bg-neutral-100 focus-visible:ring-2 focus-visible:ring-offset-2"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="mt-auto border-t border-neutral-200 pt-3">
                <div className="flex items-center justify-end">
                  <LanguageSwitcher />
                </div>
              </div>
            </div>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  );
}
