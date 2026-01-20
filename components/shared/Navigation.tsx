'use client';

import { useEffect, useState } from 'react';
import { RiMenuLine, RiCloseLine, RiSearchLine } from 'react-icons/ri';
// NAV-001: Tymczasowo zakomentowane - do przywrócenia gdy profile social media będą gotowe
// import { RiInstagramLine, RiFacebookFill } from 'react-icons/ri';
import Image from 'next/image';

import MobileNavigation from './navigation-types/MobileNavigation';
import DesktopNavigation from './navigation-types/DesktopNavigation';
import Wrapper from '@/components/ui/Wrapper';
// NAV-001: Tymczasowo zakomentowane - do przywrócenia gdy profile social media będą gotowe
// import SocialIconLink from '@/components/ui/SocialIconLink';
import IconButton from '@/components/ui/buttons/IconButton';
import Link from 'next/link';
import { useEscapeKey } from '@/hooks/useEscapeKey';
import SearchDialog from '@/components/ui/SearchDialog';

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
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  useEscapeKey(() => setIsOpen(false), isOpen);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <header id="navigation" className="sticky top-0 z-50 w-full bg-white/95 shadow-xl backdrop-blur-sm">
      <Wrapper>
        <nav className="flex h-14 items-center justify-between md:h-16 lg:h-18" aria-label={t.mainNavigation}>
          <Link href="/">
            <Image src="/assets/arteon-logo.webp" width={140} height={50} alt={t.logoAlt} priority />
          </Link>

          <DesktopNavigation />

          <div className="hidden items-center gap-2 md:flex">
            <button
              type="button"
              onClick={() => setIsSearchOpen(true)}
              className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-800 transition hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-800 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              aria-label="Wyszukaj (Ctrl+K)"
            >
              <RiSearchLine className="h-5 w-5" aria-hidden="true" />
            </button>

            <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer" className="text-light mr-3 cursor-pointer text-sm font-normal">
              #MadeWithNext.js
            </a>

            {/* NAV-001: Tymczasowo ukryte linki do social media
            <SocialIconLink
              href="https://www.instagram.com/arteon.pl"
              label={t.instagramLabel}
              className="rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-800 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              icon={<RiInstagramLine className="h-6 w-6 text-slate-800" aria-hidden="true" />}
            />
            <SocialIconLink
              href="https://www.facebook.com/people/Arteon/61583260915021/"
              label={t.facebookLabel}
              className="rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-800 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              icon={<RiFacebookFill className="h-6 w-6 text-slate-800" aria-hidden="true" />}
            />
            */}
          </div>

          <div className="flex items-center gap-1 lg:hidden">
            <button
              type="button"
              onClick={() => setIsSearchOpen(true)}
              className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-800 transition hover:bg-slate-100 hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-800"
              aria-label="Wyszukaj"
            >
              <RiSearchLine className="h-6 w-6" aria-hidden="true" />
            </button>
            <IconButton onClick={toggleMenu} label={isOpen ? t.closeMenu : t.openMenu} aria-expanded={isOpen} size="md" className="block h-auto w-auto p-1">
              {isOpen ? <RiCloseLine size={28} aria-hidden="true" /> : <RiMenuLine size={28} aria-hidden="true" />}
            </IconButton>
          </div>
        </nav>

        <MobileNavigation isOpen={isOpen} setIsOpen={setIsOpen} />

        <SearchDialog isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      </Wrapper>
    </header>
  );
}
