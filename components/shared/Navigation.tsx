'use client';

import { useState, useEffect, useState as useClientState } from 'react';
import { usePathname } from 'next/navigation';
import { RiInstagramLine, RiFacebookFill, RiMenuLine, RiCloseLine } from 'react-icons/ri';
import Image from 'next/image';

import MobileNavigation from './navigation/MobileNavigation';
import DesktopNavigation from './navigation/DesktopNavigation';
import Wrapper from '@/components/ui/Wrapper';

export default function Navigation() {
  const [isOpen, setIsOpen] = useClientState(false);
  const pathname = usePathname();
  const [host, setHost] = useState<string | null>(null);

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

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <div className="sticky top-0 z-50 w-full bg-white/90 shadow-xl backdrop-blur-sm">
      <Wrapper>
        <section className="flex h-16 items-center justify-between lg:h-18">
          <Image src="/assets/arteon-logo.png" width={160} height={50} alt="Arteon company logo" />

          <DesktopNavigation />

          <div className="hidden items-center gap-2 md:flex">
            <div className="mr-2 lg:mr-4">
              <a href={`${getTargetDomain('pl')}${pathname}`}>
                <button className={`cursor-pointer text-lg focus-visible:outline-2 focus-visible:outline-black ${isPL ? 'text-amber-500' : 'text-[#2B2B2B] hover:text-amber-500'}`}>PL</button>
              </a>
              <span className="text-lg text-[#2B2B2B]"> / </span>
              <a href={`${getTargetDomain('en')}${pathname}`}>
                <button className={`cursor-pointer text-lg focus-visible:outline-2 focus-visible:outline-black ${isEN ? 'text-amber-500' : 'text-[#2B2B2B] hover:text-amber-500'}`}>EN</button>
              </a>
            </div>

            <a href="https://www.instagram.com/arteon.pl" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="focus-visible:outline-2 focus-visible:outline-black">
              <RiInstagramLine className="h-6 w-6 text-[#2B2B2B] transition hover:text-amber-500" />
            </a>
            <a href="https://www.facebook.com/arteonpl" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="focus-visible:outline-2 focus-visible:outline-black">
              <RiFacebookFill className="h-6 w-6 text-[#2B2B2B] transition hover:text-amber-500" />
            </a>
          </div>

          <button onClick={toggleMenu} className="block md:hidden" aria-label={isOpen ? 'Close menu' : 'Open menu'}>
            {isOpen ? <RiCloseLine size={28} /> : <RiMenuLine size={28} />}
          </button>
        </section>

        <MobileNavigation isOpen={isOpen} setIsOpen={setIsOpen} />
      </Wrapper>
    </div>
  );
}
