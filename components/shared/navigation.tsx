'use client';

import { useState } from 'react';
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

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="sticky top-0 z-50 w-full border-b border-b-gray-200 bg-white px-4 md:px-8 lg:px-16">
      <section className="flex h-16 items-center justify-between lg:h-20">
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <Image src="/assets/arteon-logo.png" width={200} height={50} alt="Arteon company logo" />
        </motion.div>

        <nav className="hidden gap-6 md:flex">
          <LayoutGroup>
            {navigationItems.map(({ href, label, exact }) => {
              const isActivePage = exact ? pathname === href : pathname.startsWith(href);
              return (
                <li key={label} className="relative list-none">
                  <Link href={href} className="relative">
                    {label}
                    {isActivePage && <motion.div layoutId="underline" className="absolute top-full right-0 left-0 h-0.5 bg-black" transition={{ type: 'spring', stiffness: 500, damping: 30 }} />}
                  </Link>
                </li>
              );
            })}
          </LayoutGroup>
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <div>
            <button className="cursor-pointer text-xl text-amber-600">PL</button>
            <span className="text-xl"> / </span>
            <button className="cursor-pointer text-xl">EN</button>
          </div>
          <Link href="/">
            <RiInstagramLine className="h-6 w-6" />
          </Link>
          <Link href="/">
            <RiFacebookFill className="h-6 w-6" />
          </Link>
        </div>

        <button onClick={toggleMenu} className="block md:hidden">
          {isOpen ? <RiCloseLine size={28} /> : <RiMenuLine size={28} />}
        </button>
      </section>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scaleY: 0.95 }}
            animate={{ opacity: 1, scaleY: 1 }}
            exit={{ opacity: 0, scaleY: 0.95 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="absolute top-16 left-0 z-50 w-full origin-top bg-white px-4 pt-2 pb-6 shadow-md md:hidden"
          >
            <motion.div
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
                  <motion.div key={label} variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0 } }}>
                    <Link href={href} onClick={() => setIsOpen(false)} className={`text-lg ${isActivePage ? 'font-semibold underline' : ''}`}>
                      {label}
                    </Link>
                  </motion.div>
                );
              })}

              <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} className="flex justify-between border-t border-gray-200 pt-4">
                <div>
                  <button className="cursor-pointer text-amber-600">PL</button>
                  <span className="text-gray-600"> / </span>
                  <button className="cursor-pointer">EN</button>
                </div>
                <div className="flex gap-4">
                  <Link href="/">
                    <RiInstagramLine className="h-6 w-6" />
                  </Link>
                  <Link href="/">
                    <RiFacebookFill className="h-6 w-6" />
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
