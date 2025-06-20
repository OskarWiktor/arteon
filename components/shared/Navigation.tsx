'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { RiInstagramLine, RiFacebookFill, RiMenuLine, RiCloseLine } from 'react-icons/ri';

import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';

const navigationItems = [
  { href: '/', label: 'Home', exact: true },
  { href: '/projects', label: 'Projekty' },
  { href: '/offer', label: 'Oferta' },
  { href: '/about-us', label: 'O nas' },
  { href: '/contact', label: 'Kontakt' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setIsOpen(!isOpen);

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
  }, [isOpen]);

  return (
    <div className="sticky top-0 z-50 w-full border-b border-b-gray-200 bg-white px-4 md:px-8 lg:px-16">
      <section className="flex h-16 items-center justify-between lg:h-20">
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <Image src="/assets/arteon-logo.png" width={200} height={50} alt="Arteon company logo" />
        </motion.div>

        <nav className="hidden md:flex" aria-label="Główna nawigacja">
          <ul className="flex gap-6">
            <LayoutGroup>
              {navigationItems.map(({ href, label, exact }) => {
                const isActivePage = exact ? pathname === href : pathname.startsWith(href);

                if (label === 'Kontakt') {
                  return (
                    <li key={label} className="list-none">
                      <Link
                        href={href}
                        className={`rounded-md px-4 py-1.5 text-sm font-medium transition-colors duration-300 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-black ${isActivePage ? 'bg-gray-400' : 'bg-gray-300 hover:bg-gray-400'}`}
                        aria-current={isActivePage ? 'page' : undefined}
                      >
                        {label}
                      </Link>
                    </li>
                  );
                }

                return (
                  <li key={label} className="relative list-none">
                    <Link href={href} className="relative focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black" aria-current={isActivePage ? 'page' : undefined}>
                      {label}
                      {isActivePage && <motion.div layoutId="underline" className="absolute top-full right-0 left-0 h-0.5 bg-black" transition={{ type: 'spring', stiffness: 500, damping: 30 }} />}
                    </Link>
                  </li>
                );
              })}
            </LayoutGroup>
          </ul>
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <div>
            <button className="cursor-pointer text-xl text-amber-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">PL</button>
            <span className="text-xl"> / </span>
            <button className="cursor-pointer text-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">EN</button>
          </div>
          <Link href="/" className="focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
            <RiInstagramLine className="h-6 w-6" />
          </Link>
          <Link href="/" className="focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
            <RiFacebookFill className="h-6 w-6" />
          </Link>
        </div>

        <button
          onClick={toggleMenu}
          className="block focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black md:hidden"
          aria-label={isOpen ? 'Zamknij menu' : 'Otwórz menu'}
        >
          {isOpen ? <RiCloseLine size={28} /> : <RiMenuLine size={28} />}
        </button>
      </section>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, scaleY: 0.95 }}
            animate={{ opacity: 1, scaleY: 1 }}
            exit={{ opacity: 0, scaleY: 0.95 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="absolute top-16 left-0 z-50 w-full origin-top bg-white px-6 pt-2 pb-6 shadow-md md:hidden"
            ref={menuRef}
            aria-label="Mobilne menu nawigacji"
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
              {navigationItems.map(({ href, label, exact }) => {
                const isActivePage = exact ? pathname === href : pathname.startsWith(href);
                return (
                  <motion.li key={label} variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0 } }}>
                    <Link
                      href={href}
                      onClick={() => setIsOpen(false)}
                      className={`text-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black ${isActivePage ? 'font-semibold underline' : ''}`}
                      aria-current={isActivePage ? 'page' : undefined}
                    >
                      {label}
                    </Link>
                  </motion.li>
                );
              })}

              <motion.li variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} className="flex justify-between border-t border-gray-200 pt-4">
                <div>
                  <button className="cursor-pointer text-amber-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">PL</button>
                  <span className="text-gray-600"> / </span>
                  <button className="cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">EN</button>
                </div>
                <div className="flex gap-4">
                  <Link href="/" className="focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
                    <RiInstagramLine className="h-6 w-6" />
                  </Link>
                  <Link href="/" className="focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
                    <RiFacebookFill className="h-6 w-6" />
                  </Link>
                </div>
              </motion.li>
            </motion.ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
}
