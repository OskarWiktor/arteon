'use client';

import { startTransition, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import {
  NavMenuLine as RiMenuLine,
  NavCloseLine as RiCloseLine,
  NavSearchLine as RiSearchLine,
} from '@/components/atoms/NavIcons';
import Image from 'next/image';

import { DesktopNavSkeleton } from '@/components/organisms/skeletons/NavSkeleton';

import InlineLink from '../atoms/InlineLink';
const MobileNavigation = dynamic(() => import('./MobileNavigation'), { ssr: false });
const DesktopNavigation = dynamic(() => import('./DesktopNavigation'), {
  ssr: false,
  loading: () => <DesktopNavSkeleton />,
});
import Wrapper from '@/components/atoms/Wrapper';
import ButtonIcon from '@/components/atoms/buttons/ButtonIcon';
import { useEscapeKey } from '@/hooks/useEscapeKey';
import LanguageSwitcher from '@/components/organisms/LanguageSwitcher';
import { useLocale, useDictionary, useLocaleConfig } from '@/lib/LocaleContext';
import { cn } from '@/lib/utils';
import { focusRingClasses } from '@/lib/ui-classes';

const SearchDialog = dynamic(() => import('@/components/organisms/SearchDialog'), { ssr: false });

export default function Navigation() {
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
    <header id='navigation' className='sticky top-0 z-50 w-full bg-white shadow-md'>
      {/*
      <SectionInfoBanner
        items={[
          {
            icon: <RiMailSettingsLine className="h-4 w-4" aria-hidden="true" />,
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
          <InlineLink href={isPl ? '/' : localeConfig.toolsIndexHref} prefetch={false}>
            <Image
              src='/assets/arteon-logo.webp'
              width={100}
              height={30}
              alt={t.logoAlt}
              sizes='100px'
            />
          </InlineLink>

          <DesktopNavigation />

          <div className='hidden items-center gap-2 md:flex'>
            <button
              type='button'
              onClick={() => startTransition(() => setIsSearchOpen(true))}
              className={cn(
                'text-primary hover:bg-primary-light focus-visible:ring-primary flex h-8 w-8 items-center justify-center rounded-md transition-colors',
                focusRingClasses,
              )}
              aria-label={`${dict.search.ariaSearch} (Ctrl+K)`}
            >
              <RiSearchLine className='h-5 w-5' aria-hidden='true' />
            </button>

            <a
              href='https://nextjs.org/'
              target='_blank'
              rel='noopener noreferrer'
              className='text-light mr-3 cursor-pointer text-sm font-normal'
            >
              #MadeWithNext.js
            </a>

            <LanguageSwitcher variant='desktop' />
          </div>

          <div className='flex items-center gap-1 lg:hidden'>
            <LanguageSwitcher variant='mobile' />
            <button
              type='button'
              onClick={() => startTransition(() => setIsSearchOpen(true))}
              className={cn('text-primary hover:bg-primary-light hover:text-primary flex h-10 w-10 items-center justify-center rounded-md transition-colors', focusRingClasses)}
              aria-label={dict.search.ariaSearch}
            >
              <RiSearchLine className='h-6 w-6' aria-hidden='true' />
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

        <SearchDialog isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      </Wrapper>
    </header>
  );
}
