'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, LayoutGroup, motion } from 'framer-motion';
import { RiArrowDownSLine, RiCodeSSlashFill, RiShoppingCartLine, RiArticleLine, RiPaletteLine, RiFileTextLine, RiMegaphoneLine, RiInstagramLine, RiFacebookFill } from 'react-icons/ri';

import Button from '@/components/ui/Button';

const navigationItems = [
  { href: '/', label: 'Home', exact: true },
  { href: '/projects', label: 'Projekty' },
  { href: '/offer', label: 'Oferta' },
  { href: '/calculator', label: 'Wycena' },
  { href: '/about-us', label: 'O nas' },
  { href: '/contact', label: 'Kontakt' },
];

const offerSubPages = [
  { href: '/offer/web', icon: <RiCodeSSlashFill />, title: 'Strony WWW' },
  { href: '/offer/shop', icon: <RiShoppingCartLine />, title: 'Sklepy online' },
  { href: '/offer/blog', icon: <RiArticleLine />, title: 'Blogi' },
  { href: '/offer/design', icon: <RiPaletteLine />, title: 'Design' },
  { href: '/offer/content', icon: <RiFileTextLine />, title: 'Content' },
  { href: '/offer/marketing', icon: <RiMegaphoneLine />, title: 'Marketing' },
];

export default function MobileNavigation({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (val: boolean) => void }) {
  const pathname = usePathname();
  const [isOfferOpen, setIsOfferOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

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

    return () => {
      window.removeEventListener('focusout', handleFocusOut);
    };
  }, [isOpen, setIsOpen]);

  useEffect(() => {
    setIsOfferOpen(false);
  }, [pathname]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.nav
          initial={{ opacity: 0, scaleY: 0.95 }}
          animate={{ opacity: 1, scaleY: 1 }}
          exit={{ opacity: 0, scaleY: 0.95 }}
          transition={{ duration: 0.3 }}
          className="absolute top-16 left-0 z-50 w-full origin-top bg-white/90 px-6 pt-2 pb-6 shadow-md backdrop-blur-sm md:hidden"
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
                transition: {
                  staggerChildren: 0.08,
                  delayChildren: 0.1,
                },
              },
            }}
            className="flex flex-col gap-3"
          >
            <LayoutGroup>
              {navigationItems.map(({ href, label, exact }) => {
                const isActivePage = exact ? pathname === href : pathname.startsWith(href);

                if (label === 'Oferta') {
                  return (
                    <div key={label}>
                      <motion.li className="flex items-center justify-between" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
                        <button onClick={() => setIsOfferOpen((prev) => !prev)} className="flex w-full items-center justify-between text-left font-semibold hover:text-amber-500">
                          {label}
                          <motion.span animate={{ rotate: isOfferOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
                            <RiArrowDownSLine className="h-5 w-5" />
                          </motion.span>
                        </button>
                      </motion.li>
                      <AnimatePresence>
                        {isOfferOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: -6 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -6 }}
                            transition={{ duration: 0.3 }}
                            className="mt-2 ml-3 grid grid-cols-1 gap-3"
                          >
                            {offerSubPages.map((item) => (
                              <Link key={item.href} href={item.href} onClick={() => setIsOpen(false)} className="group flex items-start gap-2 rounded-md hover:text-amber-400">
                                <div>{item.icon}</div>
                                <div>
                                  <h6>{item.title}</h6>
                                </div>
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                if (label === 'Kontakt') {
                  return (
                    <motion.li key={label} variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0 } }}>
                      <Link href={href} onClick={() => setIsOpen(false)}>
                        <Button variant="accent" size="big">
                          {label}
                        </Button>
                      </Link>
                    </motion.li>
                  );
                }

                return (
                  <motion.li key={label} className="relative" variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0 } }}>
                    <Link href={href} onClick={() => setIsOpen(false)} className={`text-base font-semibold hover:text-amber-500 ${isActivePage ? 'font-bold text-amber-600' : ''}`}>
                      {label}
                    </Link>
                  </motion.li>
                );
              })}
            </LayoutGroup>

            <motion.li variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} className="flex justify-between border-t border-gray-200 pt-4">
              <div>
                <button className="cursor-pointer text-amber-500 focus-visible:outline-2 focus-visible:outline-black">PL</button>
                <span className="text-gray-800"> / </span>
                <button className="cursor-pointer focus-visible:outline-2 focus-visible:outline-black">EN</button>
              </div>
              <div className="flex gap-2">
                <Link href="https://www.instagram.com/arteon.pl" target="_blank" aria-label="Instagram">
                  <RiInstagramLine className="h-6 w-6 text-gray-900 hover:text-amber-500" />
                </Link>
                <Link href="https://www.facebook.com/arteonpl" target="_blank" aria-label="Facebook">
                  <RiFacebookFill className="h-6 w-6 text-gray-900 hover:text-amber-500" />
                </Link>
              </div>
            </motion.li>
          </motion.ul>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
