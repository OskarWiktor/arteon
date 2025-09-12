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

  /*
  const [host, setHost] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setHost(window.location.hostname);
    }
  }, []);

  const isPL = host?.includes('.pl');
  const isEN = host?.includes('.com');

  const getTargetDomain = (target: 'pl' | 'en') => {
    if (target === 'pl') return 'https://www.arteonagency.pl';
    return 'https://www.arteonagency.com';
  };
  */

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
        <nav className="flex h-16 items-center justify-between lg:h-18" aria-label="Nawigacja główna">
          <Link href="/">
            <Image src="/assets/arteon-logo.png" width={160} height={50} alt="Arteon - logo firmy" priority />
          </Link>
          <DesktopNavigation />

          <div className="hidden items-center gap-2 md:flex">
            {/* 
// TO DO in Arteon v.1.2
            <div className="mr-2 lg:mr-4">
              <a href={`${getTargetDomain('pl')}${pathname}`}>
                <button className={`cursor-pointer text-lg focus-visible:outline-2 focus-visible:outline-black ${isPL ? 'text-amber-500' : 'text-[#2B2B2B] hover:text-amber-500'}`}>PL</button>
              </a>
              <span className="text-lg text-[#2B2B2B]"> / </span>
              <a href={`${getTargetDomain('en')}${pathname}`}>
                <button className={`cursor-pointer text-lg focus-visible:outline-2 focus-visible:outline-black ${isEN ? 'text-amber-500' : 'text-[#2B2B2B] hover:text-amber-500'}`}>EN</button>
              </a>
            </div>
*/}

            <a href="https://nextjs.org/" target="_blank" className="mr-3 cursor-pointer text-sm font-normal text-[#5e5e5e]">
              #MadeWithNext.js
            </a>

            <a
              href="https://www.instagram.com/arteon.pl"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            >
              {/*
              <RiInstagramLine className="h-6 w-6 text-[#2B2B2B] transition hover:text-amber-500" aria-hidden="true" />
            */}
            </a>
          </div>

          <button
            type="button"
            onClick={toggleMenu}
            className="block rounded p-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white md:hidden"
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
