'use client';

import { useState } from 'react';
import { RiInstagramLine, RiFacebookFill, RiMenuLine, RiCloseLine } from 'react-icons/ri';
import Image from 'next/image';

import MobileNavigation from './navigation/MobileNavigation';
import DesktopNavigation from './navigation/DesktopNavigation';
import Wrapper from '@/components/ui/Wrapper';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <div className="sticky top-0 z-50 w-full bg-white/90 px-4 shadow-xl backdrop-blur-sm md:px-6 lg:px-0">
      <Wrapper>
        <section className="flex h-16 items-center justify-between lg:h-20">
          <Image src="/assets/arteon-logo.png" width={200} height={50} alt="Arteon company logo" />

          <DesktopNavigation />

          <div className="hidden items-center gap-2 md:flex">
            <div className="mr-2 lg:mr-4">
              <button className="cursor-pointer text-xl text-amber-500 focus-visible:outline-2 focus-visible:outline-black">PL</button>
              <span className="text-xl"> / </span>
              <button className="cursor-pointer text-xl focus-visible:outline-2 focus-visible:outline-black">EN</button>
            </div>
            <a href="https://www.instagram.com/arteon.pl" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="focus-visible:outline-2 focus-visible:outline-black">
              <RiInstagramLine className="h-6 w-6 text-gray-900 transition hover:text-amber-500" />
            </a>
            <a href="https://www.facebook.com/arteonpl" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="focus-visible:outline-2 focus-visible:outline-black">
              <RiFacebookFill className="h-6 w-6 text-gray-900 transition hover:text-amber-500" />
            </a>
          </div>

          <button onClick={toggleMenu} className="block md:hidden" aria-label={isOpen ? 'Zamknij menu' : 'Otwórz menu'}>
            {isOpen ? <RiCloseLine size={28} /> : <RiMenuLine size={28} />}
          </button>
        </section>

        <MobileNavigation isOpen={isOpen} setIsOpen={setIsOpen} />
      </Wrapper>
    </div>
  );
}
