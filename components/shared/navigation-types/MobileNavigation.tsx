'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { createPortal } from 'react-dom';
import {
  RiCodeSSlashFill,
  RiShoppingCartLine,
  RiArticleLine,
  RiPaletteLine,
  RiFileTextLine,
  RiMegaphoneLine,
} from 'react-icons/ri';

type NavItem = { href: string; label: string; exact?: boolean };

const NAV: NavItem[] = [
  { href: '/realizacje', label: 'Realizacje', exact: true },
  { href: '/o-nas', label: 'O nas' },
  { href: '/kontakt', label: 'Kontakt' },
];

const SERVICES = [
  { href: '/uslugi/strony-internetowe', icon: <RiCodeSSlashFill aria-hidden />, title: 'Strony internetowe' },
  { href: '/uslugi/sklepy-internetowe', icon: <RiShoppingCartLine aria-hidden />, title: 'Sklepy internetowe' },
  { href: '/uslugi/blogi-internetowe', icon: <RiArticleLine aria-hidden />, title: 'Blogi internetowe' },
  { href: '/uslugi/grafika', icon: <RiPaletteLine aria-hidden />, title: 'Grafika' },
  { href: '/uslugi/tworzenie-tresci', icon: <RiFileTextLine aria-hidden />, title: 'Tworzenie treści' },
  { href: '/uslugi/marketing', icon: <RiMegaphoneLine aria-hidden />, title: 'Marketing' },
];

const INFO: NavItem[] = [
  { href: '/regulamin', label: 'Regulamin świadczenia usług', exact: true },
  { href: '/polityka-prywatnosci', label: 'Polityka Prywatności' },
];

function Portal({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return createPortal(children, document.body);
}

export default function MobileNavigation({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
}) {
  const pathname = usePathname();
  const panelRef = useRef<HTMLDivElement>(null);

  const [panelWidth, setPanelWidth] = useState(0);
  useEffect(() => {
    const update = () => setPanelWidth(Math.min(window.innerWidth * 0.88, 300));
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname, setIsOpen]);

  useEffect(() => {
    const root = document.documentElement;
    if (isOpen) root.classList.add('overflow-hidden');
    else root.classList.remove('overflow-hidden');
    return () => root.classList.remove('overflow-hidden');
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
      if (e.key === 'Tab' && panelRef.current) {
        const f = panelRef.current.querySelectorAll<HTMLElement>('a[href],button:not([disabled]),[tabindex="0"]');
        if (!f.length) return;
        const first = f[0];
        const last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          (last as HTMLElement).focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          (first as HTMLElement).focus();
        }
      }
    };
    document.addEventListener('keydown', onKey);
    setTimeout(() => {
      const first = panelRef.current?.querySelector<HTMLElement>('a[href],button:not([disabled]),[tabindex="0"]');
      first?.focus();
    }, 0);
    return () => document.removeEventListener('keydown', onKey);
  }, [isOpen, setIsOpen]);

  const onServicesKeyDown = (e: React.KeyboardEvent<HTMLUListElement>) => {
    const items = panelRef.current?.querySelectorAll<HTMLAnchorElement>('#services a[href]');
    if (!items || !items.length) return;
    const list = Array.from(items);
    const idx = list.findIndex((el) => el === document.activeElement);
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      list[Math.min(idx + 1, list.length - 1)]?.focus();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      list[Math.max(idx - 1, 0)]?.focus();
    } else if (e.key === 'Home') {
      e.preventDefault();
      list[0]?.focus();
    } else if (e.key === 'End') {
      e.preventDefault();
      list[list.length - 1]?.focus();
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
            aria-label="Menu mobilne"
            className="fixed top-0 right-0 z-[1000] h-[100dvh] w-[88vw] max-w-[300px] bg-white shadow-xl"
            initial={{ x: 24, opacity: 0.98 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 24, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 280, damping: 30 }}
          >
            <div className="flex items-center justify-end px-4 pt-3">
              <button
                onClick={() => setIsOpen(false)}
                className="rounded px-3 pt-1 text-sm font-medium text-[#5e5e5e] outline-none ring-slate-700 ring-offset-2 focus-visible:ring-2"
              >
                Zamknij
              </button>
            </div>

            <div className="flex h-[calc(100dvh-49px)] flex-col overflow-y-auto px-4 py-3">
              <div>
                <p className="px-3 pb-1 text-[11px] uppercase tracking-wider text-[#5e5e5e]">Usługi</p>
                <ul id="services" className="grid grid-cols-1 gap-1" onKeyDown={onServicesKeyDown}>
                  {SERVICES.map((s) => (
                    <li key={s.href}>
                      <Link
                        href={s.href}
                        onClick={() => setIsOpen(false)}
                        className="group flex items-center gap-3 rounded-lg px-3 py-[3px] text-[15px] text-[#080808] outline-none transition hover:bg-neutral-100 focus-visible:ring-2 focus-visible:ring-slate-700 focus-visible:ring-offset-2"
                      >
                        <span className="text-[#080808] group-hover:text-slate-600 [&_svg]:h-5 [&_svg]:w-5">
                          {s.icon}
                        </span>
                        <span>{s.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="my-2 h-px w-full bg-neutral-200" />

              <ul className="mb-2 flex flex-col gap-1">
                {NAV.map(({ href, label, exact }) => {
                  const isActive = exact ? pathname === href : pathname.startsWith(href);
                  return (
                    <li key={label}>
                      <Link
                        href={href}
                        onClick={() => setIsOpen(false)}
                        aria-current={isActive ? 'page' : undefined}
                        className={`block rounded-lg px-3 py-[3px] text-[15px] outline-none ring-slate-700 ring-offset-2 focus-visible:ring-2 ${
                          isActive
                            ? 'bg-zinc-100 font-semibold text-[#080808]'
                            : 'text-[#080808] hover:bg-neutral-100'
                        }`}
                      >
                        {label}
                      </Link>
                    </li>
                  );
                })}
              </ul>

              <div className="my-2 h-px w-full bg-neutral-200" />

              <ul className="mb-2 flex flex-col gap-1">
                {INFO.map(({ href, label, exact }) => {
                  const isActive = exact ? pathname === href : pathname.startsWith(href);
                  return (
                    <li key={label}>
                      <Link
                        href={href}
                        onClick={() => setIsOpen(false)}
                        aria-current={isActive ? 'page' : undefined}
                        className={`block rounded-lg px-3 py-[3px] text-[15px] outline-none ring-slate-700 ring-offset-2 focus-visible:ring-2 ${
                          isActive
                            ? 'bg-zinc-100 font-semibold text-[#080808]'
                            : 'text-[#080808] hover:bg-neutral-100'
                        }`}
                      >
                        {label}
                      </Link>
                    </li>
                  );
                })}
              </ul>

              <div className="mt-auto border-t border-zinc-200 pt-3">
                <div className="flex items-center justify-between">
                  <a
                    href="https://nextjs.org/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-medium text-[#5e5e5e]"
                  >
                    #MadeWithNext.js
                  </a>
                  <div className="flex items-center gap-2">
                    <Link
                      href="/kontakt"
                      onClick={() => setIsOpen(false)}
                      className="rounded-xl bg-slate-600 px-3 py-2 text-sm font-semibold text-white outline-none transition hover:opacity-90 focus-visible:ring-2 focus-visible:ring-slate-700 focus-visible:ring-offset-2"
                    >
                      Umów konsultację
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
