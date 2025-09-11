'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, LayoutGroup, motion } from 'framer-motion';
import { RiArrowDownSLine, RiCodeSSlashFill, RiShoppingCartLine, RiArticleLine, RiPaletteLine, RiFileTextLine, RiMegaphoneLine, RiInstagramLine } from 'react-icons/ri';

const navigationItems = [
  { href: '/', label: 'Strona Główna', exact: true },
  { href: '/projects', label: 'Realizacje' },
  { href: '/services', label: 'Usługi' },
  { href: '/contact', label: 'Kontakt' },
];

const offerSubPages = [
  { href: '/services/websites', icon: <RiCodeSSlashFill aria-hidden="true" />, title: 'Strony internetowe' },
  { href: '/services/online-stores', icon: <RiShoppingCartLine aria-hidden="true" />, title: 'Sklepy online' },
  { href: '/services/online-blogs', icon: <RiArticleLine aria-hidden="true" />, title: 'Blogi' },
  { href: '/services/design', icon: <RiPaletteLine aria-hidden="true" />, title: 'Grafika' },
  { href: '/services/content', icon: <RiFileTextLine aria-hidden="true" />, title: 'Content' },
  { href: '/services/marketing', icon: <RiMegaphoneLine aria-hidden="true" />, title: 'Marketing' },
];

export default function MobileNavigation({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (val: boolean) => void }) {
  const pathname = usePathname();
  const [isOfferOpen, setIsOfferOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);
  const offerBtnRef = useRef<HTMLButtonElement>(null);
  const submenuRef = useRef<HTMLDivElement>(null);

  const offerButtonId = 'mobile-offer-button';
  const submenuId = 'mobile-offer-submenu';

  useEffect(() => {
    const handleFocusOut = (event: FocusEvent) => {
      if (isOpen && menuRef.current && event.relatedTarget instanceof Node && !menuRef.current.contains(event.relatedTarget)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      window.addEventListener('focusout', handleFocusOut);
    } else {
      window.removeEventListener('focusout', handleFocusOut);
    }
    return () => window.removeEventListener('focusout', handleFocusOut);
  }, [isOpen, setIsOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [isOpen, setIsOpen]);

  useEffect(() => {
    setIsOfferOpen(false);
  }, [pathname]);

  const handleOfferKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setIsOfferOpen((p) => !p);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (!isOfferOpen) setIsOfferOpen(true);
      requestAnimationFrame(() => {
        const first = submenuRef.current?.querySelector<HTMLAnchorElement>('a[href]');
        first?.focus();
      });
    }
  };

  const handleSubmenuKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const items = submenuRef.current?.querySelectorAll<HTMLAnchorElement>('a[href]');
    if (!items || items.length === 0) return;
    const list = Array.from(items);
    const idx = list.findIndex((el) => el === document.activeElement);
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      list[Math.min(idx + 1, list.length - 1)]?.focus();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      list[Math.max(idx - 1, 0)]?.focus();
    } else if (e.key === 'Strona Główna') {
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
        <motion.nav
          initial={{ opacity: 0, scaleY: 0.95 }}
          animate={{ opacity: 1, scaleY: 1 }}
          exit={{ opacity: 0, scaleY: 0.95 }}
          transition={{ duration: 0.3 }}
          className="absolute top-16 left-0 z-50 w-full origin-top bg-white pt-2 pb-6 shadow-lg md:hidden"
          ref={menuRef}
          aria-label="Mobile navigation menu"
        >
          <motion.ul
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.08, delayChildren: 0.1 },
              },
            }}
            className="m-auto flex w-[90%] max-w-[1280px] flex-col gap-3"
          >
            <LayoutGroup>
              {navigationItems.map(({ href, label, exact }) => {
                const isActivePage = exact ? pathname === href : pathname.startsWith(href);

                if (label === 'Usługi') {
                  return (
                    <motion.li key={label} className="flex flex-col" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
                      <button
                        id={offerButtonId}
                        ref={offerBtnRef}
                        type="button"
                        aria-haspopup="listbox"
                        aria-expanded={isOfferOpen}
                        aria-controls={submenuId}
                        onClick={() => setIsOfferOpen((prev) => !prev)}
                        onKeyDown={handleOfferKeyDown}
                        className="flex w-full items-center justify-between rounded text-left hover:text-indigo-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-800 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                      >
                        <span>{label}</span>
                        <motion.span aria-hidden="true" animate={{ rotate: isOfferOpen ? 180 : 0 }} transition={{ duration: 0.3 }} className="inline-flex">
                          <RiArrowDownSLine className="h-5 w-5" />
                        </motion.span>
                      </button>

                      <AnimatePresence>
                        {isOfferOpen && (
                          <motion.div
                            id={submenuId}
                            aria-labelledby={offerButtonId}
                            initial={{ opacity: 0, y: -6 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -6 }}
                            transition={{ duration: 0.3 }}
                            className="mt-2 ml-1 grid grid-cols-2 gap-3"
                            ref={submenuRef}
                            onKeyDown={handleSubmenuKeyDown}
                          >
                            {offerSubPages.map((item) => (
                              <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className="group flex items-center gap-2 rounded hover:text-indigo-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-800 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                              >
                                <span className="[&_svg]:h-5 [&_svg]:w-5" aria-hidden="true">
                                  {item.icon}
                                </span>
                                <span>{item.title}</span>
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.li>
                  );
                }

                return (
                  <motion.li key={label} className="relative" variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0 } }}>
                    <Link
                      href={href}
                      onClick={() => setIsOpen(false)}
                      aria-current={isActivePage ? 'page' : undefined}
                      className={`rounded hover:text-indigo-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-800 focus-visible:ring-offset-2 focus-visible:ring-offset-white ${
                        isActivePage ? 'font-semibold text-[#2B2B2B]' : ''
                      }`}
                    >
                      {label}
                    </Link>
                  </motion.li>
                );
              })}
            </LayoutGroup>

            <motion.li variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} className="flex justify-between border-t border-gray-300 pt-4">
              {/* 
                           <div>
                <button className="cursor-pointer text-lg text-indigo-800 focus-visible:outline-2 focus-visible:outline-black">PL</button>
                <span className="text-lg text-[#2B2B2B]"> / </span>
                <button className="cursor-pointer text-lg focus-visible:outline-2 focus-visible:outline-black">EN</button>
              </div> 
              
              */}
              <div className="flex w-full justify-between gap-2" role="group">
                <a href="https://nextjs.org/" target="_blank" className="mr-3 cursor-pointer text-sm font-normal text-[#5e5e5e]">
                  #MadeWithNext.js
                </a>

                <a
                  href="https://www.instagram.com/arteon.pl"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-800 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                >
                  <RiInstagramLine className="h-6 w-6 text-[#2B2B2B] transition hover:text-indigo-800" aria-hidden="true" />
                </a>
              </div>
            </motion.li>
          </motion.ul>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
