'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { RiMenuLine, RiCloseLine, RiSearchLine, RiMailSettingsLine } from 'react-icons/ri';
import Image from 'next/image';

import MobileNavigation from './navigation/MobileNavigation';
import DesktopNavigation from './navigation/DesktopNavigation';
import Wrapper from '@/components/ui/Wrapper';
import IconButton from '@/components/ui/buttons/IconButton';
import Link from 'next/link';
import { useEscapeKey } from '@/hooks/useEscapeKey';
import SectionInfoBanner from '../ui/sections/SectionInfoBanner';
import LanguageSwitcher from '@/components/shared/LanguageSwitcher';
import { useLocale, type Locale } from '@/lib/LocaleContext';
import { NAVIGATION_UI, LOCALE_CONFIG } from '@/lib/i18n/locales';
import { getToolHref } from '@/lib/i18n/tool-registry';

const SearchDialog = dynamic(() => import('@/components/ui/SearchDialog'), { ssr: false });

export default function Navigation() {
  const locale = useLocale();
  const isPl = locale === 'pl';
  const t = NAVIGATION_UI[locale];
  const localeConfig = LOCALE_CONFIG[locale];
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
      <SectionInfoBanner
        items={[
          {
            icon: <RiMailSettingsLine className="h-4 w-4" aria-hidden="true" />,
            ...(
              {
                pl: {
                  text: 'Aktualizacja generatora stopki mailowej - sprawdź nowe możliwości',
                  linkText: 'narzędzia',
                  linkHref: '/narzedzia/darmowy-generator-stopki-mailowej',
                },
                en: {
                  text: 'Email signature generator update - check out new features',
                  linkText: 'tools',
                  linkHref: getToolHref('emailSignature', locale),
                },
                de: {
                  text: 'Update des E-Mail-Signatur-Generators – entdecken Sie die neuen Funktionen',
                  linkText: 'Werkzeuge',
                  linkHref: getToolHref('emailSignature', locale),
                },
                es: {
                  text: 'Actualización del generador de firmas de correo: descubra las nuevas funciones',
                  linkText: 'herramientas',
                  linkHref: getToolHref('emailSignature', locale),
                },
                fr: {
                  text: 'Mise à jour du générateur de signature e-mail : découvrez les nouvelles fonctionnalités',
                  linkText: 'outils',
                  linkHref: getToolHref('emailSignature', locale),
                },
                pt: {
                  text: 'Atualização do gerador de assinatura de e-mail: descubra as novas funcionalidades',
                  linkText: 'ferramentas',
                  linkHref: getToolHref('emailSignature', locale),
                },
              } satisfies Record<Locale, { text: string; linkText: string; linkHref: string }>
            )[locale],
          },
        ]}
      />

      <Wrapper>
        <nav className="flex h-14 items-center justify-between md:h-16 lg:h-18" aria-label={t.mainNavigation}>
          <Link href={isPl ? '/' : localeConfig.toolsIndexHref}>
            <Image src="/assets/arteon-logo.webp" width={140} height={50} alt={t.logoAlt} priority sizes="140px" />
          </Link>

          <DesktopNavigation />

          <div className="hidden items-center gap-2 md:flex">
            {isPl && (
              <button
                type="button"
                onClick={() => setIsSearchOpen(true)}
                className="text-primary hover:bg-primary-light focus-visible:ring-primary flex h-8 w-8 items-center justify-center rounded-lg transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                aria-label="Wyszukaj (Ctrl+K)"
              >
                <RiSearchLine className="h-5 w-5" aria-hidden="true" />
              </button>
            )}

            <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer" className="text-light mr-3 cursor-pointer text-sm font-normal">
              #MadeWithNext.js
            </a>

            <LanguageSwitcher />
          </div>

          <div className="flex items-center gap-1 lg:hidden">
            <LanguageSwitcher />
            {isPl && (
              <button
                type="button"
                onClick={() => setIsSearchOpen(true)}
                className="text-primary hover:bg-primary-light hover:text-primary focus-visible:ring-primary flex h-10 w-10 items-center justify-center rounded-lg transition focus:outline-none focus-visible:ring-2"
                aria-label="Wyszukaj"
              >
                <RiSearchLine className="h-6 w-6" aria-hidden="true" />
              </button>
            )}
            <IconButton onClick={toggleMenu} label={isOpen ? t.closeMenu : t.openMenu} aria-expanded={isOpen} size="md" className="block h-auto w-auto p-1">
              {isOpen ? <RiCloseLine size={28} aria-hidden="true" /> : <RiMenuLine size={28} aria-hidden="true" />}
            </IconButton>
          </div>
        </nav>

        <MobileNavigation isOpen={isOpen} setIsOpen={setIsOpen} />

        {isPl && <SearchDialog isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />}
      </Wrapper>
    </header>
  );
}
