'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, LayoutGroup, motion } from 'framer-motion';
import { RiArrowDownSLine, RiCodeSSlashFill, RiShoppingCartLine, RiArticleLine, RiPaletteLine, RiFileTextLine, RiMegaphoneLine } from 'react-icons/ri';
import Wrapper from '@/components/ui/Wrapper';

export default function DesktopNavigation() {
  const pathname = usePathname();
  const [isOfferOpen, setIsOfferOpen] = useState(false);

  const offerLiRef = useRef<HTMLLIElement>(null);
  const offerBtnRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const buttonId = 'offer-button';
  const menuId = 'offer-submenu';

  useEffect(() => {
    const onPointerDown = (e: MouseEvent | TouchEvent) => {
      if (!offerLiRef.current) return;
      if (!offerLiRef.current.contains(e.target as Node)) setIsOfferOpen(false);
    };
    document.addEventListener('mousedown', onPointerDown);
    document.addEventListener('touchstart', onPointerDown);
    return () => {
      document.removeEventListener('mousedown', onPointerDown);
      document.removeEventListener('touchstart', onPointerDown);
    };
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOfferOpen(false);
        offerBtnRef.current?.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => setIsOfferOpen(false), [pathname]);

  const navigationItems = [
    { href: '/realizacje', label: 'Realizacje', exact: true },
    { href: '/uslugi', label: 'Usługi' },
    { href: '/o-nas', label: 'O nas' },
    { href: '/kontakt', label: 'Kontakt' },
  ];

  const offerSubPages = [
    {
      href: '/uslugi/strony-internetowe',
      icon: <RiCodeSSlashFill className="h-6 w-6 text-slate-500" aria-hidden="true" />,
      title: 'Strony internetowe',
      desc: 'WCAG 2.1 AA - Indywidualny projekt - Migracje',
    },
    {
      href: '/uslugi/sklepy-internetowe',
      icon: <RiShoppingCartLine className="h-6 w-6 text-slate-500" aria-hidden="true" />,
      title: 'Sklepy internetowe',
      desc: 'Płatności - Integracje - Automatyzacje',
    },
    { href: '/uslugi/blogi-internetowe', icon: <RiArticleLine className="h-6 w-6 text-slate-500" aria-hidden="true" />, title: 'Blogi internetowe', desc: 'CMS - Architektura - Skalowalne treści' },
    { href: '/uslugi/projekty-graficzne', icon: <RiPaletteLine className="h-6 w-6 text-slate-500" aria-hidden="true" />, title: 'Projekty graficzne', desc: 'Systemy marek - Loga - Do druku' },
    { href: '/uslugi/tworzenie-tresci', icon: <RiFileTextLine className="h-6 w-6 text-slate-500" aria-hidden="true" />, title: 'Tworzenie treści', desc: 'Teksty - Artykuły - Opisy' },
    { href: '/uslugi/marketing', icon: <RiMegaphoneLine className="h-6 w-6 text-slate-500" aria-hidden="true" />, title: 'Marketing', desc: 'SEO - Reklamy - Social Media' },
  ];

  const focusMenuItem = (idx: number) => {
    const items = menuRef.current?.querySelectorAll<HTMLAnchorElement>('a[href]');
    if (!items || items.length === 0) return;
    const i = Math.max(0, Math.min(idx, items.length - 1));
    items[i].focus();
  };

  const handleOfferButtonKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      if (!isOfferOpen) setIsOfferOpen(true);
      requestAnimationFrame(() => focusMenuItem(0));
    }
  };

  const handleMenuKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const items = menuRef.current?.querySelectorAll<HTMLAnchorElement>('a[href]');
    if (!items || items.length === 0) return;
    const currentIndex = Array.from(items).findIndex((el) => el === document.activeElement);

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      focusMenuItem(currentIndex < 0 ? 0 : currentIndex + 1);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      focusMenuItem(currentIndex <= 0 ? 0 : currentIndex - 1);
    } else if (e.key === 'Strona Główna') {
      e.preventDefault();
      focusMenuItem(0);
    } else if (e.key === 'End') {
      e.preventDefault();
      focusMenuItem(items.length - 1);
    }
  };

  return (
    <div className="hidden md:flex">
      <LayoutGroup>
        <ul className="relative flex gap-4 lg:gap-6">
          {navigationItems.map(({ href, label, exact }) => {
            const isActivePage = exact ? pathname === href : pathname.startsWith(href);

            if (label === 'Usługi') {
              return (
                <li ref={offerLiRef} className="group relative flex" key={label}>
                  <button
                    id={buttonId}
                    type="button"
                    onClick={() => setIsOfferOpen((p) => !p)}
                    onKeyDown={handleOfferButtonKeyDown}
                    aria-haspopup="menu"
                    aria-expanded={isOfferOpen}
                    aria-controls={menuId}
                    ref={offerBtnRef}
                    className="mr-[-10px] flex cursor-pointer items-center gap-1 rounded text-base font-medium text-[#2B2B2B] focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                  >
                    {label}
                    <motion.span animate={{ rotate: isOfferOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                      <RiArrowDownSLine className="h-4 w-4" aria-hidden="true" />
                    </motion.span>
                  </button>

                  <AnimatePresence>
                    {isOfferOpen && (
                      <motion.div
                        id={menuId}
                        aria-labelledby={buttonId}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="fixed top-full left-0 z-50 w-full bg-white p-4 shadow-xl"
                      >
                        <Wrapper>
                          <div ref={menuRef} onKeyDown={handleMenuKeyDown} className="grid grid-cols-3 gap-4">
                            {offerSubPages.map((item) => (
                              <Link
                                key={item.href}
                                href={item.href}
                                className="flex gap-4 rounded-xl border border-gray-100 px-4 py-2 shadow-xs transition hover:translate-y-[-2px] hover:shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                              >
                                <div className="leading-tight">
                                  <div className="flex items-center gap-2">
                                    {item.icon}
                                    <span className="block text-base font-semibold text-[#2B2B2B]">{item.title}</span>
                                  </div>
                                  <span className="text-sm">{item.desc}</span>
                                </div>
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
              <li key={label} className="relative">
                <Link
                  href={href}
                  aria-current={isActivePage ? 'page' : undefined}
                  className={`hover-underline rounded text-base font-medium text-[#2B2B2B] focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white ${
                    isActivePage ? 'font-semibold text-[#080808]' : ''
                  }`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </LayoutGroup>
    </div>
  );
}
