'use client';

import Link from 'next/link';
import Image from 'next/image';
import { RiInstagramLine, RiFacebookFill } from 'react-icons/ri';
import { motion, useAnimation } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { useInView } from 'framer-motion';

const footerNavItems = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projekty' },
  { href: '/offer', label: 'Oferta' },
  { href: '/about-us', label: 'O nas' },
  { href: '/contact', label: 'Skontaktuj się z nami', isButton: true },
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

  useEffect(() => {
    if (inView) controls.start('visible');
  }, [inView, controls]);

  return (
    <motion.footer
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{ hidden: {}, visible: {} }}
      className="mt-30 flex w-full flex-col gap-8 border-t border-t-gray-200 px-4 py-8 md:flex-row md:justify-between md:px-8 lg:gap-0 lg:px-16"
      aria-label="Stopka strony"
    >
      <h2 className="sr-only">Nawigacja w stopce</h2>

      <div className="flex w-full flex-wrap gap-6 md:w-2/3 md:flex-nowrap lg:gap-12">
        <nav className="flex flex-col gap-2" aria-label="Główna nawigacja w stopce">
          <ul>
            {footerNavItems.slice(0, 3).map(({ href, label, isButton }, i) => (
              <motion.li key={label} className="list-none" custom={i} variants={linkVariant}>
                <Link
                  href={href}
                  className={`${isButton ? 'w-fit rounded-md bg-gray-300 px-4 py-1.5 text-sm font-medium transition hover:bg-gray-400' : 'hover:underline'} focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black`}
                >
                  {label}
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>

        <nav className="flex flex-col gap-2" aria-label="Dodatkowa nawigacja w stopce">
          <ul>
            {footerNavItems.slice(3).map(({ href, label, isButton }, i) => (
              <motion.li key={label} className="list-none" custom={i + 3} variants={linkVariant}>
                <Link
                  href={href}
                  className={`${isButton ? 'w-fit rounded-md bg-gray-300 px-4 py-1.5 text-sm font-medium transition hover:bg-gray-400' : 'hover:underline'} focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black`}
                >
                  {label}
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>
      </div>

      <motion.div className="flex w-full flex-col md:w-1/3 lg:w-1/6" variants={linkVariant} custom={6}>
        <div className="flex gap-4">
          <Link
            href="https://www.instagram.com"
            aria-label="Instagram"
            rel="noopener noreferrer"
            target="_blank"
            className="focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            <RiInstagramLine className="h-8 w-8 transition hover:text-gray-700" />
          </Link>
          <Link
            href="https://www.facebook.com"
            aria-label="Facebook"
            rel="noopener noreferrer"
            target="_blank"
            className="focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            <RiFacebookFill className="h-8 w-8 transition hover:text-gray-700" />
          </Link>
        </div>
      </motion.div>

      <motion.div className="flex w-full items-start justify-start md:w-1/3 md:justify-end lg:w-1/6" variants={linkVariant} custom={7}>
        <Image src="/assets/arteon-logo.png" width={160} height={50} alt="Logo firmy Arteon — tworzenie stron internetowych i grafika" className="object-contain" />
      </motion.div>
    </motion.footer>
  );
}
