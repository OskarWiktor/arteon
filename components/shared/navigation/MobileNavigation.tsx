'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { RiCodeSSlashFill, RiShoppingCartLine, RiArticleLine, RiPaletteLine, RiFileTextLine, RiMegaphoneLine } from 'react-icons/ri';

type NavItem = { href: string; label: string; exact?: boolean };

const NAV: NavItem[] = [
  { href: '/projects', label: 'Realizacje', exact: true },
  { href: '/contact', label: 'Kontakt' },
];

const SERVICES = [
  { href: '/services/websites', icon: <RiCodeSSlashFill aria-hidden />, title: 'Strony internetowe' },
  { href: '/services/online-stores', icon: <RiShoppingCartLine aria-hidden />, title: 'Sklepy online' },
  { href: '/services/online-blogs', icon: <RiArticleLine aria-hidden />, title: 'Blogi' },
  { href: '/services/design', icon: <RiPaletteLine aria-hidden />, title: 'Grafika' },
  { href: '/services/content', icon: <RiFileTextLine aria-hidden />, title: 'Content' },
  { href: '/services/marketing', icon: <RiMegaphoneLine aria-hidden />, title: 'Marketing' },
];

export default function MobileNavigation({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (val: boolean) => void }) {
  const pathname = usePathname();
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname, setIsOpen]);

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
          <motion.div className="fixed inset-0 z-[60] bg-black/30" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsOpen(false)} aria-hidden="true" />

          <motion.nav
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label="Menu mobilne"
            className="fixed top-0 right-0 z-[61] h-[100dvh] w-[88vw] max-w-[420px] bg-white shadow-xl"
            initial={{ x: 24, opacity: 0.98 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 24, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 280, damping: 30 }}
          >
            <div className="flex items-center justify-between border-b border-zinc-200 px-4 py-3">
              <span className="text-sm tracking-wider text-zinc-600">ARTEON</span>
              <button onClick={() => setIsOpen(false)} className="rounded px-3 py-1.5 text-sm font-medium text-zinc-700 ring-indigo-700 ring-offset-2 outline-none focus-visible:ring-2">
                Zamknij
              </button>
            </div>

            <div className="flex h-[calc(100dvh-49px)] flex-col overflow-y-auto px-4 py-3">
              <div>
                <p className="px-3 pb-1 text-[11px] tracking-wider text-zinc-500 uppercase">Usługi</p>
                <ul id="services" className="grid grid-cols-1 gap-1" onKeyDown={onServicesKeyDown}>
                  {SERVICES.map((s) => (
                    <li key={s.href}>
                      <Link
                        href={s.href}
                        onClick={() => setIsOpen(false)}
                        className="group flex items-center gap-3 rounded-lg px-3 py-2 text-[15px] text-zinc-900 transition outline-none hover:bg-zinc-50 focus-visible:ring-2 focus-visible:ring-indigo-700 focus-visible:ring-offset-2"
                      >
                        <span className="text-zinc-700 group-hover:text-amber-500 [&_svg]:h-5 [&_svg]:w-5">{s.icon}</span>
                        <span>{s.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="my-2 h-px w-full bg-zinc-200/70" />

              <ul className="mb-2 flex flex-col gap-1">
                {NAV.map(({ href, label, exact }) => {
                  const isActive = exact ? pathname === href : pathname.startsWith(href);
                  return (
                    <li key={label}>
                      <Link
                        href={href}
                        onClick={() => setIsOpen(false)}
                        aria-current={isActive ? 'page' : undefined}
                        className={`block rounded-lg px-3 py-2 text-[15px] ring-indigo-700 ring-offset-2 outline-none focus-visible:ring-2 ${
                          isActive ? 'bg-zinc-100 font-semibold text-zinc-900' : 'text-zinc-900 hover:bg-zinc-50'
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
                  <a href="https://nextjs.org/" target="_blank" rel="noreferrer" className="text-xs font-medium text-zinc-600">
                    #MadeWithNext.js
                  </a>
                  <div className="flex items-center gap-3">
                    <Link
                      href="/contact"
                      onClick={() => setIsOpen(false)}
                      className="rounded-lg bg-amber-600 px-3 py-2 text-sm font-semibold text-white transition outline-none hover:opacity-90 focus-visible:ring-2 focus-visible:ring-indigo-700 focus-visible:ring-offset-2"
                    >
                      Umów konsultację
                    </Link>
                    <a
                      href="https://www.instagram.com/arteon.pl"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                      className="rounded p-1.5 transition outline-none hover:bg-zinc-100 focus-visible:ring-2 focus-visible:ring-indigo-700 focus-visible:ring-offset-2"
                    >
                      {/*
                      <RiInstagramLine className="h-8 w-8 text-zinc-800" aria-hidden />
                      */}
                    </a>
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
