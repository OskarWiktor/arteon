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
  const offerRef = useRef<HTMLLIElement>(null);
  const menuId = 'offer-submenu';

  useEffect(() => {
    const onPointerDown = (e: MouseEvent | TouchEvent) => {
      if (!offerRef.current) return;
      if (!offerRef.current.contains(e.target as Node)) setIsOfferOpen(false);
    };
    document.addEventListener('mousedown', onPointerDown);
    document.addEventListener('touchstart', onPointerDown);
    return () => {
      document.removeEventListener('mousedown', onPointerDown);
      document.removeEventListener('touchstart', onPointerDown);
    };
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setIsOfferOpen(false);
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => setIsOfferOpen(false), [pathname]);

  const navigationItems = [
    { href: '/', label: 'Home', exact: true },
    { href: '/projects', label: 'Projekty' },
    { href: '/offer', label: 'Oferta' },
    { href: '/calculator', label: 'Wycena' },
    { href: '/contact', label: 'Kontakt' },
  ];

  const offerSubPages = [
    { href: '/offer/web', icon: <RiCodeSSlashFill className="h-8 w-8 text-amber-500" />, title: 'Strony', desc: 'WCAG 2.2 - Indywidualny projekt - Migracje' },
    { href: '/offer/shop', icon: <RiShoppingCartLine className="h-8 w-8 text-amber-500" />, title: 'Sklepy online', desc: 'Płatności - Integracje - Automatyzacje' },
    { href: '/offer/blog', icon: <RiArticleLine className="h-8 w-8 text-amber-500" />, title: 'Blogi', desc: 'CMS - Architektura - Skalowalne treści' },
    { href: '/offer/design', icon: <RiPaletteLine className="h-8 w-8 text-amber-500" />, title: 'Design', desc: 'Systemy marek - Loga - Do druku' },
    { href: '/offer/content', icon: <RiFileTextLine className="h-8 w-8 text-amber-500" />, title: 'Content', desc: 'Teksty - Artykuły - Opisy' },
    { href: '/offer/marketing', icon: <RiMegaphoneLine className="h-8 w-8 text-amber-500" />, title: 'Marketing', desc: 'SEO - Reklamy - Social Media' },
  ];

  return (
    <nav className="hidden md:flex" aria-label="Main navigation">
      <LayoutGroup>
        <ul className="relative flex gap-4 lg:gap-6">
          {navigationItems.map(({ href, label, exact }) => {
            const isActivePage = exact ? pathname === href : pathname.startsWith(href);

            if (label === 'Oferta') {
              return (
                <li ref={offerRef} className="group relative flex" key={label}>
                  <button
                    onClick={() => setIsOfferOpen((p) => !p)}
                    aria-expanded={isOfferOpen}
                    aria-controls={menuId}
                    className="mr-[-10px] flex items-center gap-1 text-base text-[#2B2B2B] hover:text-amber-500 focus-visible:outline-2 focus-visible:outline-black"
                  >
                    {label}
                    <motion.span animate={{ rotate: isOfferOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                      <RiArrowDownSLine className="h-4 w-4" />
                    </motion.span>
                  </button>

                  <AnimatePresence>
                    {isOfferOpen && (
                      <motion.div
                        id={menuId}
                        role="menu"
                        aria-label="Podstrony oferty"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="fixed top-full left-0 z-50 w-full bg-white p-4 shadow-xl"
                      >
                        <Wrapper className="grid grid-cols-3 gap-4">
                          {offerSubPages.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              role="menuitem"
                              className="flex gap-4 rounded border border-gray-100 p-2 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-black"
                            >
                              <div className="flex items-center">{item.icon}</div>
                              <div className="leading-tight">
                                <span className="block text-base font-semibold text-[#2B2B2B]">{item.title}</span>
                                <span className="text-sm">{item.desc}</span>
                              </div>
                            </Link>
                          ))}
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
                  className={`text-base text-[#2B2B2B] hover:text-amber-500 focus-visible:outline-2 focus-visible:outline-black ${isActivePage ? 'font-semibold text-[#080808]' : ''}`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </LayoutGroup>
    </nav>
  );
}
