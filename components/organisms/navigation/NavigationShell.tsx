'use client';

import dynamic from 'next/dynamic';
import Image from 'next/image';
import { startTransition, useEffect, useState } from 'react';
import { RiCloseLine, RiMenuLine, RiSearchLine } from 'react-icons/ri';
import ButtonIcon from '@/components/atoms/buttons/ButtonIcon';
// ThemeToggle celowo zachowany do przyszłego włączenia przełącznika motywu.
// import ThemeToggle from '@/components/atoms/ThemeToggle';
import Wrapper from '@/components/atoms/Wrapper';
import LanguageSwitcher from '@/components/organisms/LanguageSwitcher';
import { DesktopNavSkeleton } from '@/components/organisms/skeletons/NavSkeleton';
import { useEscapeKey } from '@/hooks/useEscapeKey';
import { cn } from '@/lib/clsx';
import { useLocale, useDictionary, useLocaleConfig } from '@/lib/LocaleContext';
import {
  flexCenterClasses,
  focusRingClasses,
  largeIconSizeClasses,
  normalIconSizeClasses,
} from '@/lib/uiClasses';
import InlineLink from '../../atoms/InlineLink';

// Obie nawigacje renderują się po stronie serwera, więc ich linki trafiają do
// statycznego HTML-a i są widoczne dla robotów bez uruchamiania JavaScriptu.
const MobileNavigation = dynamic(() => import('./MobileNavigation'));
const DesktopNavigation = dynamic(() => import('./DesktopNavigation'), {
  loading: () => <DesktopNavSkeleton />,
});

const SearchDialog = dynamic(
  () => import('@/components/organisms/SearchDialog'),
  { ssr: false },
);

/**
 * Render the site header and navigation shell with responsive desktop and mobile controls, language switching, and an integrated search dialog.
 *
 * The component manages local state for the mobile menu and search dialog, closes the mobile menu on Escape, and opens the search dialog when the user presses Ctrl/Cmd+K or interacts with the search controls.
 *
 * @returns The navigation header element containing logo, desktop and mobile navigation controls, language switcher, and the search dialog.
 */
export default function NavigationShell() {
  const locale = useLocale();
  const isPl = locale === 'pl';
  const dict = useDictionary();
  const t = dict.nav;
  const localeConfig = useLocaleConfig();
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleMenu = () => startTransition(() => setIsOpen(prev => !prev));

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
    <header
      id='navigation'
      className='sticky top-0 z-50 w-full bg-white shadow-[1px_1px_3px_#C6B7A2]'
    >
      {/*
      <SectionInfoBanner
        items={[
          {
            icon: <RiMailSettingsLine className={smallIconSizeClasses} aria-hidden="true" />,
            text: dict.infoBanner.text,
            linkText: dict.infoBanner.linkText,
            linkHref: locale === 'pl' ? '/narzedzia/darmowy-generator-stopki-mailowej' : getToolHref('emailSignature', locale),
          },
        ]}
      />
      */}

      <Wrapper>
        <nav
          className='flex h-12 items-center justify-between md:h-14 lg:h-16'
          aria-label={t.mainNavigation}
        >
          <InlineLink href={isPl ? '/' : localeConfig.toolsIndexHref}>
            <Image
              src='/assets/arteon-logo.webp'
              width={100}
              height={30}
              alt={t.logoAlt}
              sizes='100px'
            />
          </InlineLink>

          <DesktopNavigation />

          <div className='hidden items-center gap-2 lg:flex'>
            <button
              type='button'
              onClick={() => startTransition(() => setIsSearchOpen(true))}
              className={cn(
                'text-primary transition-colors hover:bg-primary-light focus-visible:ring-primary',
                flexCenterClasses,
                largeIconSizeClasses,
                focusRingClasses,
              )}
              aria-haspopup='dialog'
              aria-label={`${dict.search.ariaSearch} (Ctrl+K)`}
            >
              <RiSearchLine
                className={normalIconSizeClasses}
                aria-hidden='true'
              />
            </button>

            <a
              href='https://nextjs.org/'
              target='_blank'
              rel='noopener noreferrer'
              className='mr-3 cursor-pointer text-sm font-normal text-light'
            >
              #MadeWithNext.js
            </a>
            {/*<ThemeToggle />*/}
            <LanguageSwitcher variant='desktop' />
          </div>

          <div className='flex items-center gap-1 lg:hidden'>
            {/*<ThemeToggle />*/}
            <LanguageSwitcher variant='mobile' />
            <button
              type='button'
              onClick={() => startTransition(() => setIsSearchOpen(true))}
              className={cn(
                'h-10 w-10 text-primary transition-colors hover:bg-primary-light hover:text-primary',
                flexCenterClasses,
                focusRingClasses,
              )}
              aria-haspopup='dialog'
              aria-label={dict.search.ariaSearch}
            >
              <RiSearchLine
                className={normalIconSizeClasses}
                aria-hidden='true'
              />
            </button>
            <ButtonIcon
              onClick={toggleMenu}
              label={isOpen ? t.closeMenu : t.openMenu}
              aria-expanded={isOpen}
              className='block h-auto w-auto p-1'
            >
              {isOpen ? (
                <RiCloseLine width={24} height={24} aria-hidden='true' />
              ) : (
                <RiMenuLine width={24} height={24} aria-hidden='true' />
              )}
            </ButtonIcon>
          </div>
        </nav>

        <MobileNavigation isOpen={isOpen} setIsOpen={setIsOpen} />

        <SearchDialog
          isOpen={isSearchOpen}
          onClose={() => setIsSearchOpen(false)}
        />
      </Wrapper>
    </header>
  );
}
