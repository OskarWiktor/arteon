'use client';

import { useEffect, useState } from 'react';
import { RiMenuLine, RiCloseLine } from 'react-icons/ri';
import Image from 'next/image';

import MobileNavigation from './navigation-types/MobileNavigation';
import DesktopNavigation from './navigation-types/DesktopNavigation';
import Wrapper from '@/components/ui/Wrapper';
import Link from 'next/link';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen]);

  return (
    <header id="navigation" className="sticky top-0 z-50 w-full bg-white/90 shadow-xl backdrop-blur-sm">
      <Wrapper>
        <nav className="flex h-14 items-center justify-between md:h-16 lg:h-18" aria-label="Nawigacja główna">
          <Link href="/">
            <Image src="/assets/arteon-logo.png" width={140} height={50} alt="Arteon - logo firmy" priority />
          </Link>
          <DesktopNavigation />

          <div className="hidden items-center gap-2 md:flex">
            <a href="https://nextjs.org/" target="_blank" className="mr-3 cursor-pointer text-sm font-normal text-[#5e5e5e]">
              #MadeWithNext.js
            </a>
            {/*

            <a
              href="https://www.instagram.com/arteon.pl"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            >
              <RiInstagramLine className="h-6 w-6 text-[#2B2B2B] transition hover:text-slate-500" aria-hidden="true" />
            </a>
                        */}
          </div>

          <button
            type="button"
            onClick={toggleMenu}
            className="block rounded p-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white md:hidden"
            aria-label={isOpen ? 'Zamknij menu' : 'Otwórz menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <RiCloseLine size={28} aria-hidden="true" /> : <RiMenuLine size={28} aria-hidden="true" />}
          </button>
        </nav>

        <MobileNavigation isOpen={isOpen} setIsOpen={setIsOpen} />
      </Wrapper>
    </header>
  );
}
