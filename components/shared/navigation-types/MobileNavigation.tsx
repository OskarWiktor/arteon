'use client';

import { JSX, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { createPortal } from 'react-dom';

import {
  RiArrowDownSLine,
  RiCodeSSlashFill,
  RiShoppingCartLine,
  RiArticleLine,
  RiMegaphoneLine,
  RiSearchLine,
  RiPriceTag3Line,
  RiIdCardLine,
  RiFileList2Line,
  RiFolderOpenLine,
  RiFileTextLine,
  RiTShirt2Line,
  RiQuillPenLine,
  RiBookletLine,
  RiPantoneLine,
  RiLayoutLine,
  RiCoupon2Line,
  RiRestaurant2Line,
} from 'react-icons/ri';

type NavItem = { href: string; label: string; exact?: boolean };

const NAV: NavItem[] = [
  { href: '/realizacje', label: 'Realizacje', exact: true },
  { href: '/o-nas', label: 'O nas' },
  { href: '/edukacja', label: 'Edukacja' },
  { href: '/kontakt', label: 'Kontakt' },
];

type SectionLink = { href: string; title: string; icon?: JSX.Element };
type Section = {
  key: 'witryny' | 'marketing' | 'grafika' | 'tresc';
  title: string;
  hubHref?: string;
  items: SectionLink[];
};

const SECTIONS: Section[] = [
  {
    key: 'witryny',
    title: 'Witryny',
    items: [
      { href: '/uslugi/strony-internetowe', title: 'Strony internetowe', icon: <RiCodeSSlashFill aria-hidden className="h-5 w-5" /> },
      { href: '/uslugi/sklepy-internetowe', title: 'Sklepy internetowe', icon: <RiShoppingCartLine aria-hidden className="h-5 w-5" /> },
      { href: '/uslugi/blogi-internetowe', title: 'Blogi internetowe', icon: <RiArticleLine aria-hidden className="h-5 w-5" /> },
    ],
  },
  {
    key: 'marketing',
    title: 'Marketing',
    hubHref: '/uslugi/marketing',
    items: [
      { href: '/uslugi/marketing/audyt-seo', title: 'Audyt SEO', icon: <RiSearchLine aria-hidden className="h-5 w-5" /> },
      { href: '/uslugi/marketing/optymalizacja-seo', title: 'Optymalizacja SEO', icon: <RiPriceTag3Line aria-hidden className="h-5 w-5" /> },
      { href: '/uslugi/marketing/pozycjonowanie-stron', title: 'Pozycjonowanie stron', icon: <RiMegaphoneLine aria-hidden className="h-5 w-5" /> },
    ],
  },
  {
    key: 'grafika',
    title: 'Grafika',
    hubHref: '/uslugi/projekty-graficzne',
    items: [
      { href: '/uslugi/projekty-graficzne/projekt-cennika', title: 'Cenniki', icon: <RiPriceTag3Line aria-hidden className="h-5 w-5" /> },
      { href: '/uslugi/projekty-graficzne/projekt-identyfikacji-wizualnej', title: 'Identyfikacja wizualna', icon: <RiPantoneLine aria-hidden className="h-5 w-5" /> },
      { href: '/uslugi/projekty-graficzne/projekt-karty-lojalnosciowej', title: 'Karty lojalnościowe', icon: <RiPriceTag3Line aria-hidden className="h-5 w-5" /> },
      { href: '/uslugi/projekty-graficzne/projekt-katalogu', title: 'Katalogi', icon: <RiBookletLine aria-hidden className="h-5 w-5" /> },
      { href: '/uslugi/projekty-graficzne/projekt-kuponu-rabatowego-i-vouchera', title: 'Kupony i vouchery', icon: <RiCoupon2Line aria-hidden className="h-5 w-5" /> },
      { href: '/uslugi/projekty-graficzne/projekt-graficzny-strony', title: 'Layout strony', icon: <RiLayoutLine aria-hidden className="h-5 w-5" /> },
      { href: '/uslugi/projekty-graficzne/projekt-logo', title: 'Logo', icon: <RiQuillPenLine aria-hidden className="h-5 w-5" /> },
      { href: '/uslugi/projekty-graficzne/projekt-menu-restauracji', title: 'Menu restauracji', icon: <RiRestaurant2Line aria-hidden className="h-5 w-5" /> },
      { href: '/uslugi/projekty-graficzne/projekt-odziezy-firmowej', title: 'Odzież firmowa', icon: <RiTShirt2Line aria-hidden className="h-5 w-5" /> },
      { href: '/uslugi/projekty-graficzne/projekt-papieru-firmowego', title: 'Papier firmowy', icon: <RiFileTextLine aria-hidden className="h-5 w-5" /> },
      { href: '/uslugi/projekty-graficzne/szablony-postow-social-media', title: 'Szablony social media', icon: <RiLayoutLine aria-hidden className="h-5 w-5" /> },
      { href: '/uslugi/projekty-graficzne/projekt-teczki-ofertowej', title: 'Teczki ofertowe', icon: <RiFolderOpenLine aria-hidden className="h-5 w-5" /> },
      { href: '/uslugi/projekty-graficzne/projekt-ulotki', title: 'Ulotki', icon: <RiFileList2Line aria-hidden className="h-5 w-5" /> },
      { href: '/uslugi/projekty-graficzne/projekt-wizytowki', title: 'Wizytówki', icon: <RiIdCardLine aria-hidden className="h-5 w-5" /> },
    ],
  },
  {
    key: 'tresc',
    title: 'Tworzenie treści',
    hubHref: '/uslugi/tworzenie-tresci',
    items: [{ href: '/uslugi/tworzenie-tresci', title: 'Tworzenie treści', icon: <RiFileTextLine aria-hidden className="h-5 w-5" /> }],
  },
];

function Portal({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return createPortal(children, document.body);
}

export default function MobileNavigation({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (val: boolean) => void }) {
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

  const [openKeys, setOpenKeys] = useState<Record<Section['key'], boolean>>({
    witryny: false,
    marketing: false,
    grafika: false,
    tresc: false,
  });

  const toggleKey = (key: Section['key']) => setOpenKeys((s) => ({ ...s, [key]: !s[key] }));

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
            aria-label="Menu mobilne"
            className="z[1000] fixed top-0 right-0 h-[100dvh] w-[88vw] max-w-[300px] bg-white shadow-xl"
            initial={{ x: 24, opacity: 0.98 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 24, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 280, damping: 30 }}
          >
            <div className="flex items-center justify-end px-4 pt-3">
              <button onClick={() => setIsOpen(false)} className="rounded px-3 pt-1 text-sm font-medium text-[#5e5e5e] ring-slate-700 ring-offset-2 outline-none focus-visible:ring-2">
                Zamknij
              </button>
            </div>

            <div className="flex h-[calc(100dvh-49px)] flex-col overflow-y-auto px-4 py-3">
              <p className="px-3 pb-1 text-[11px] tracking-wider text-[#5e5e5e] uppercase">Usługi</p>

              <div className="flex flex-col">
                {SECTIONS.map((sec) => {
                  const expanded = openKeys[sec.key];
                  return (
                    <div key={sec.key} className="mb-1 rounded-xl border border-neutral-200">
                      <div className="flex items-center justify-between">
                        {sec.hubHref ? (
                          <Link
                            href={sec.hubHref}
                            onClick={() => setIsOpen(false)}
                            className="m-2 inline-block rounded px-2 py-1 text-[14px] font-semibold text-[#080808] outline-none hover:bg-neutral-100 focus-visible:ring-2 focus-visible:ring-slate-700 focus-visible:ring-offset-2"
                          >
                            {sec.title}
                          </Link>
                        ) : (
                          <div className="m-2 px-2 py-1 text-[14px] font-semibold text-[#080808]">{sec.title}</div>
                        )}

                        <button
                          type="button"
                          aria-expanded={expanded}
                          aria-controls={`sec-${sec.key}`}
                          onClick={() => toggleKey(sec.key)}
                          className="m-2 inline-flex items-center gap-1 rounded px-2 py-1 text-sm text-[#5e5e5e] outline-none hover:bg-neutral-100 focus-visible:ring-2 focus-visible:ring-slate-700 focus-visible:ring-offset-2"
                        >
                          <RiArrowDownSLine className={`h-4 w-4 transition-transform ${expanded ? 'rotate-180' : ''}`} aria-hidden="true" />
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
                            className="overflow-hidden border-t border-neutral-200"
                          >
                            <ul
                              className="p-2"
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
                                    className="group flex items-center gap-3 rounded-xl px-3 py-2 text-[15px] text-[#080808] transition outline-none hover:bg-neutral-100 focus-visible:ring-2 focus-visible:ring-slate-700 focus-visible:ring-offset-2"
                                  >
                                    {it.icon && <span className="text-[#5e5e5e] group-hover:text-slate-600">{it.icon}</span>}
                                    <span>{it.title}</span>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>

              <div className="my-3 h-px w-full bg-neutral-200" />

              <ul className="mb-2 flex flex-col gap-1">
                {NAV.map(({ href, label, exact }) => {
                  const pathname = window.location?.pathname ?? '';
                  const isActive = exact ? pathname === href : pathname.startsWith(href);
                  return (
                    <li key={label}>
                      <Link
                        href={href}
                        onClick={() => setIsOpen(false)}
                        aria-current={isActive ? 'page' : undefined}
                        className={`block rounded-xl px-3 py-[7px] text-[15px] ring-slate-700 ring-offset-2 outline-none focus-visible:ring-2 ${
                          isActive ? 'bg-zinc-100 font-semibold text-[#080808]' : 'text-[#080808] hover:bg-neutral-100'
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
                {[
                  { href: '/regulamin', label: 'Regulamin świadczenia usług', exact: true },
                  { href: '/polityka-prywatnosci', label: 'Polityka Prywatności' },
                ].map(({ href, label }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      onClick={() => setIsOpen(false)}
                      className="block rounded-xl px-3 py-[7px] text-[15px] text-[#080808] outline-none hover:bg-neutral-100 focus-visible:ring-2 focus-visible:ring-slate-700 focus-visible:ring-offset-2"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="mt-auto border-t border-zinc-200 pt-3">
                <div className="flex items-center justify-between">
                  <a href="https://nextjs.org/" target="_blank" rel="noreferrer" className="text-xs font-medium text-[#5e5e5e]">
                    #MadeWithNext.js
                  </a>
                  <div className="flex items-center gap-2">
                    <Link
                      href="/kontakt"
                      onClick={() => setIsOpen(false)}
                      className="rounded-2xl bg-slate-600 px-3 py-2 text-sm font-semibold text-white transition outline-none hover:opacity-90 focus-visible:ring-2 focus-visible:ring-slate-700 focus-visible:ring-offset-2"
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
