'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, LayoutGroup, motion } from 'framer-motion';
import { RiArrowDownSLine, RiCodeSSlashFill, RiShoppingCartLine, RiArticleLine, RiPaletteLine, RiFileTextLine, RiMegaphoneLine, RiInstagramLine, RiFacebookFill } from 'react-icons/ri';

const navigationItems = [
  { href: '/', label: 'Home', exact: true },
  { href: '/projects', label: 'Projekty' },
  { href: '/offer', label: 'Oferta' },
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
                transition: {
                  staggerChildren: 0.08,
                  delayChildren: 0.1,
                },
              },
            }}
            className="m-auto flex w-[90%] max-w-[1280px] flex-col gap-3"
          >
            <LayoutGroup>
              {navigationItems.map(({ href, label, exact }) => {
                const isActivePage = exact ? pathname === href : pathname.startsWith(href);

                if (label === 'Oferta') {
                  return (
                    <div key={label}>
                      <motion.li className="flex items-center justify-between" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
                        <button onClick={() => setIsOfferOpen((prev) => !prev)} className="flex w-full items-center text-left hover:text-indigo-800">
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
                            className="mt-2 ml-1 grid grid-cols-2 gap-3"
                          >
                            {offerSubPages.map((item) => (
                              <Link key={item.href} href={item.href} onClick={() => setIsOpen(false)} className="group rounded-md-md flex items-center gap-2 hover:text-indigo-800">
                                <div>{item.icon}</div>
                                <div>
                                  <p>{item.title}</p>
                                </div>
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <motion.li key={label} className="relative" variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0 } }}>
                    <Link href={href} onClick={() => setIsOpen(false)} className={`hover:text-indigo-800 ${isActivePage ? 'font-semibold text-[#2B2B2B]' : ''}`}>
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
              <div className="flex gap-2">
                <Link href="https://www.instagram.com/arteon.pl" target="_blank" aria-label="Instagram">
                  <RiInstagramLine className="h-6 w-6 text-[#2B2B2B] transition hover:text-indigo-800" />
                </Link>
                <Link href="https://www.facebook.com/arteonpl" target="_blank" aria-label="Facebook">
                  <RiFacebookFill className="h-6 w-6 text-[#2B2B2B] transition hover:text-indigo-800" />
                </Link>
              </div>
            </motion.li>
          </motion.ul>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
