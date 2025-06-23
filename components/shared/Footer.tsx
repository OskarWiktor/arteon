'use client';

import Link from 'next/link';
import Image from 'next/image';
import { RiInstagramLine, RiFacebookFill } from 'react-icons/ri';
import { motion, useAnimation, LayoutGroup } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { useInView } from 'framer-motion';
import { usePathname } from 'next/navigation';

const footerNavItems = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projekty' },
  { href: '/offer', label: 'Oferta' },
  { href: '/about-us', label: 'O nas' },
  { href: '/contact', label: 'Skontaktuj się', isButton: true },
];

const linkVariant = {
  hidden: { opacity: 0, y: 10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.4 },
  }),
};

export default function Footer() {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.2, once: true });
  const controls = useAnimation();
  const pathname = usePathname();

  useEffect(() => {
    if (inView) controls.start('visible');
  }, [inView, controls]);

  return (
    <motion.footer
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{ hidden: {}, visible: {} }}
      className="mt-30 flex w-full flex-col gap-4 border-t border-t-gray-200 px-4 py-8 md:flex-row md:justify-between md:px-8 lg:gap-0 lg:px-16"
      aria-label="Stopka strony"
    >
      <h2 className="sr-only">Nawigacja w stopce</h2>

      <div className="flex w-full flex-wrap gap-2 md:w-2/3 md:gap-6 lg:gap-12">
        <nav className="flex gap-2" aria-label="Główna nawigacja w stopce">
          <ul className="flex flex-col gap-1 md:flex-row md:gap-4">
            <LayoutGroup>
              {footerNavItems.map(({ href, label, isButton }, i) => {
                const isActive = pathname === href;

                return (
                  <motion.li key={label} className="relative list-none" custom={i} variants={linkVariant}>
                    {isButton ? (
                      <Link
                        href={href}
                        className={`rounded-md px-4 py-1.5 text-sm font-semibold transition-colors duration-300 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-black ${isActive ? 'bg-amber-600' : 'bg-amber-500 hover:bg-amber-600'}`}
                      >
                        {label}
                      </Link>
                    ) : (
                      <Link href={href} className="relative text-sm font-semibold hover:text-amber-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
                        {label}
                      </Link>
                    )}
                  </motion.li>
                );
              })}
            </LayoutGroup>
          </ul>
        </nav>
      </div>

      <motion.div className="flex w-full flex-col md:w-1/3 lg:w-1/6" variants={linkVariant} custom={6}>
        <div className="flex justify-center gap-2 md:justify-start">
          <Link
            href="https://www.instagram.com/arteon.pl"
            aria-label="Instagram"
            rel="noopener noreferrer"
            target="_blank"
            className="focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            <RiInstagramLine className="h-8 w-8 text-gray-900 transition hover:text-amber-500" />
          </Link>
          <Link
            href="https://www.facebook.com/arteonpl"
            aria-label="Facebook"
            rel="noopener noreferrer"
            target="_blank"
            className="focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            <RiFacebookFill className="h-8 w-8 text-gray-900 transition hover:text-amber-500" />
          </Link>
        </div>
      </motion.div>

      <motion.div className="flex w-full items-start justify-center md:w-1/3 md:justify-end lg:w-1/6" variants={linkVariant} custom={7}>
        <Image src="/assets/arteon-logo.png" width={160} height={50} alt="Logo firmy Arteon — tworzenie stron internetowych i grafika" className="object-contain" />
      </motion.div>
    </motion.footer>
  );
}
