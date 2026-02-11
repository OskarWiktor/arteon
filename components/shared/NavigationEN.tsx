'use client';

import { useState } from 'react';
import { RiMenuLine, RiCloseLine } from 'react-icons/ri';
import Image from 'next/image';
import Link from 'next/link';

import Wrapper from '@/components/ui/Wrapper';
import IconButton from '@/components/ui/buttons/IconButton';
import { useEscapeKey } from '@/hooks/useEscapeKey';
import LanguageSwitcher from '@/components/shared/LanguageSwitcher';
import DesktopNavigationEN from '@/components/shared/navigation-types/DesktopNavigationEN';
import MobileNavigationEN from '@/components/shared/navigation-types/MobileNavigationEN';

const ui = {
  mainNavigation: 'Main navigation',
  logoAlt: 'Arteon - company logo',
  closeMenu: 'Close menu',
  openMenu: 'Open menu',
} as const;

export default function NavigationEN() {
  const t = ui;
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  useEscapeKey(() => setIsOpen(false), isOpen);

  return (
    <header id="navigation" className="sticky top-0 z-50 w-full bg-white/95 shadow-xl backdrop-blur-sm">
      <Wrapper>
        <nav className="flex h-14 items-center justify-between md:h-16 lg:h-18" aria-label={t.mainNavigation}>
          <Link href="/en/tools">
            <Image src="/assets/arteon-logo.webp" width={140} height={50} alt={t.logoAlt} priority />
          </Link>

          <DesktopNavigationEN />

          <div className="hidden items-center gap-2 md:flex">
            <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer" className="text-light mr-3 cursor-pointer text-sm font-normal">
              #MadeWithNext.js
            </a>

            <LanguageSwitcher />
          </div>

          <div className="flex items-center gap-1 lg:hidden">
            <IconButton onClick={toggleMenu} label={isOpen ? t.closeMenu : t.openMenu} aria-expanded={isOpen} size="md" className="block h-auto w-auto p-1">
              {isOpen ? <RiCloseLine size={28} aria-hidden="true" /> : <RiMenuLine size={28} aria-hidden="true" />}
            </IconButton>
          </div>
        </nav>

        <MobileNavigationEN isOpen={isOpen} setIsOpen={setIsOpen} />
      </Wrapper>
    </header>
  );
}
