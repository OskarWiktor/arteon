'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, LayoutGroup, motion } from 'framer-motion';
import { RiArrowDownSLine, RiCodeSSlashFill, RiShoppingCartLine, RiArticleLine, RiPaletteLine, RiFileTextLine, RiMegaphoneLine } from 'react-icons/ri';

import Wrapper from '@/components/ui/Wrapper';

const navigationItems = [
  { href: '/', label: 'Home', exact: true },
  { href: '/projects', label: 'Projekty' },
  { href: '/offer', label: 'Oferta' },
  { href: '/calculator', label: 'Wycena' },
  { href: '/about-us', label: 'O nas' },
  { href: '/contact', label: 'Kontakt' },
];

const offerSubPages = [
  { href: '/offer/web', icon: <RiCodeSSlashFill className="h-6 w-6 text-amber-500" />, title: 'Strony WWW', desc: 'Strony internetowe' },
  { href: '/offer/shop', icon: <RiShoppingCartLine className="h-6 w-6 text-amber-500" />, title: 'Sklepy online', desc: 'Sklepy internetowe' },
  { href: '/offer/blog', icon: <RiArticleLine className="h-6 w-6 text-amber-500" />, title: 'Blogi', desc: 'Systemy blogowe i portale' },
  { href: '/offer/design', icon: <RiPaletteLine className="h-6 w-6 text-amber-500" />, title: 'Design', desc: 'Identyfikacja wizualna, logo' },
  { href: '/offer/content', icon: <RiFileTextLine className="h-6 w-6 text-amber-500" />, title: 'Content', desc: 'Teksty, opisy i artykuły' },
  { href: '/offer/marketing', icon: <RiMegaphoneLine className="h-6 w-6 text-amber-500" />, title: 'Marketing', desc: 'SEO, reklamy i social media' },
];

export default function DesktopNavigation() {
  const pathname = usePathname();
  const [isOfferOpen, setIsOfferOpen] = useState(false);

  return (
    <nav className="hidden md:flex" aria-label="Main navigation">
      <LayoutGroup>
        <ul className="relative flex gap-3 lg:gap-6">
          {navigationItems.map(({ href, label, exact }) => {
            const isActivePage = exact ? pathname === href : pathname.startsWith(href);

            if (label === 'Oferta') {
              return (
                <li className="group relative" key={label}>
                  <button onClick={() => setIsOfferOpen((prev) => !prev)} className="flex items-center gap-1 font-semibold hover:text-amber-500 focus-visible:outline-2 focus-visible:outline-black">
                    {label}
                    <motion.span animate={{ rotate: isOfferOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
                      <RiArrowDownSLine className="h-4 w-4" />
                    </motion.span>
                  </button>

                  <AnimatePresence>
                    {isOfferOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="fixed top-full left-0 z-50 w-full bg-white/95 p-4 shadow-xl backdrop-blur-sm"
                      >
                        <Wrapper className="grid grid-cols-3 gap-4">
                          {offerSubPages.map((item) => (
                            <Link key={item.href} href={item.href} className="flex gap-2 rounded-lg border-1 border-gray-100 p-2 hover:border-amber-300 hover:shadow-lg">
                              <div className="mt-1">{item.icon}</div>
                              <div>
                                <h6>{item.title}</h6>
                                <p>{item.desc}</p>
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
                  className={`font-semibold hover:text-amber-500 focus-visible:outline-2 focus-visible:outline-black ${isActivePage ? 'font-bold text-amber-600' : ''}`}
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
