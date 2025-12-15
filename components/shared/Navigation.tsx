'use client';

import { useState } from 'react';
import { RiMenuLine, RiCloseLine, RiInstagramLine, RiFacebookFill } from 'react-icons/ri';
import Image from 'next/image';

import MobileNavigation from './navigation-types/MobileNavigation';
import DesktopNavigation from './navigation-types/DesktopNavigation';
import Wrapper from '@/components/ui/Wrapper';
import SocialIconLink from '@/components/ui/SocialIconLink';
import IconButton from '@/components/ui/buttons/IconButton';
import Link from 'next/link';
import { useEscapeKey } from '@/hooks/useEscapeKey';

const ui = {
  pl: {
    mainNavigation: 'Nawigacja główna',
    logoAlt: 'Arteon - logo firmy',
    instagramLabel: 'Firmowy Instagram',
    facebookLabel: 'Firmowy Facebook',
    closeMenu: 'Zamknij menu',
    openMenu: 'Otwórz menu',
  },
} as const;

export default function Navigation() {
  const t = ui.pl;
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  useEscapeKey(() => setIsOpen(false), isOpen);

  return (
    <header id="navigation" className="sticky top-0 z-50 w-full bg-white/95 shadow-xl backdrop-blur-sm">
      <Wrapper>
        <nav className="flex h-14 items-center justify-between md:h-16 lg:h-18" aria-label={t.mainNavigation}>
          <Link href="/">
            <Image src="/assets/arteon-logo.webp" width={140} height={50} alt={t.logoAlt} priority />
          </Link>

          <DesktopNavigation />

          <div className="hidden items-center gap-2 md:flex">
            <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer" className="mr-3 cursor-pointer text-sm font-normal text-light">
              #MadeWithNext.js
            </a>

            <SocialIconLink
              href="https://www.instagram.com/arteon.pl"
              label={t.instagramLabel}
              className="rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              icon={<RiInstagramLine className="h-6 w-6 text-slate-500" aria-hidden="true" />}
            />
            <SocialIconLink
              href="https://www.facebook.com/people/Arteon/61583260915021/"
              label={t.facebookLabel}
              className="rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              icon={<RiFacebookFill className="h-6 w-6 text-slate-500" aria-hidden="true" />}
            />
          </div>

          <IconButton
            onClick={toggleMenu}
            label={isOpen ? t.closeMenu : t.openMenu}
            aria-expanded={isOpen}
            size="md"
            className="block h-auto w-auto p-1 lg:hidden"
          >
            {isOpen ? <RiCloseLine size={28} aria-hidden="true" /> : <RiMenuLine size={28} aria-hidden="true" />}
          </IconButton>
        </nav>

        <MobileNavigation isOpen={isOpen} setIsOpen={setIsOpen} />
      </Wrapper>
    </header>
  );
}
