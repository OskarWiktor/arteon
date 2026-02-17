'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { NavMenuLine as RiMenuLine, NavCloseLine as RiCloseLine, NavSearchLine as RiSearchLine, NavMailSettingsLine as RiMailSettingsLine } from '@/components/ui/icons/NavIcons';
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
                it: {
                  text: 'Aggiornamento del generatore di firma e-mail: scopri le nuove funzionalità',
                  linkText: 'strumenti',
                  linkHref: getToolHref('emailSignature', locale),
                },
                ro: {
                  text: 'Actualizare generator de semn\u0103tur\u0103 e-mail \u2013 descoperi\u021bi noile func\u021bii',
                  linkText: 'instrumente',
                  linkHref: getToolHref('emailSignature', locale),
                },
                nl: {
                  text: 'Update e-mailhandtekening generator - ontdek de nieuwe functies',
                  linkText: 'tools',
                  linkHref: getToolHref('emailSignature', locale),
                },
                hu: {
                  text: 'E-mail al\u00e1\u00edr\u00e1s gener\u00e1tor friss\u00edt\u00e9s \u2013 fedezze fel az \u00faj funkci\u00f3kat',
                  linkText: 'eszk\u00f6z\u00f6k',
                  linkHref: getToolHref('emailSignature', locale),
                },
                id: {
                  text: 'Pembaruan generator tanda tangan email - temukan fitur baru',
                  linkText: 'alat',
                  linkHref: getToolHref('emailSignature', locale),
                },
                vi: {
                  text: 'Cập nhật trình tạo chữ ký email – khám phá tính năng mới',
                  linkText: 'công cụ',
                  linkHref: getToolHref('emailSignature', locale),
                },
                tr: {
                  text: 'E-posta imza oluşturucu güncellendi – yeni özellikleri keşfedin',
                  linkText: 'araçlar',
                  linkHref: getToolHref('emailSignature', locale),
                },
                tl: {
                  text: 'Na-update ang generator ng email signature \u2013 tingnan ang mga bagong feature',
                  linkText: 'mga tool',
                  linkHref: getToolHref('emailSignature', locale),
                },
                sw: {
                  text: 'Kizalishi cha saini ya barua pepe kimesasishwa \u2013 gundua vipengele vipya',
                  linkText: 'zana',
                  linkHref: getToolHref('emailSignature', locale),
                },
                ms: {
                  text: 'Penjana tandatangan e-mel dikemas kini \u2013 lihat ciri baharu',
                  linkText: 'alatan',
                  linkHref: getToolHref('emailSignature', locale),
                },
                cs: {
                  text: 'Aktualizace gener\u00e1toru e-mailov\u00e9ho podpisu \u2013 objevte nov\u00e9 funkce',
                  linkText: 'n\u00e1stroje',
                  linkHref: getToolHref('emailSignature', locale),
                },
                sv: {
                  text: 'E-postsignatur-generatorn \u00e4r uppdaterad \u2013 uppt\u00e4ck nya funktioner',
                  linkText: 'verktyg',
                  linkHref: getToolHref('emailSignature', locale),
                },
                sq: {
                  text: 'Gjeneruesi i firm\u00ebs s\u00eb email-it u p\u00ebrdit\u00ebsua \u2013 zbuloni funksionet e reja',
                  linkText: 'mjetet',
                  linkHref: getToolHref('emailSignature', locale),
                },
                da: {
                  text: 'E-mail signatur generator opdateret \u2013 opdag nye funktioner',
                  linkText: 'v\u00e6rkt\u00f8jer',
                  linkHref: getToolHref('emailSignature', locale),
                },
                no: {
                  text: 'E-postsignatur-generatoren er oppdatert \u2013 oppdag nye funksjoner',
                  linkText: 'verkt\u00f8y',
                  linkHref: getToolHref('emailSignature', locale),
                },
                fi: {
                  text: 'S\u00e4hk\u00f6postiallekirjoitusgeneraattori p\u00e4ivitetty \u2013 tutustu uusiin ominaisuuksiin',
                  linkText: 'ty\u00f6kalut',
                  linkHref: getToolHref('emailSignature', locale),
                },
                sk: {
                  text: 'Gener\u00e1tor e-mailov\u00e9ho podpisu aktualizovan\u00fd \u2013 objavte nov\u00e9 funkcie',
                  linkText: 'n\u00e1stroje',
                  linkHref: getToolHref('emailSignature', locale),
                },
                hr: {
                  text: 'Generator e-mail potpisa a\u017euriran \u2013 otkrijte nove funkcije',
                  linkText: 'alati',
                  linkHref: getToolHref('emailSignature', locale),
                },
                lt: {
                  text: 'El. pa\u0161to para\u0161o generatorius atnaujintas \u2013 atraskite naujas funkcijas',
                  linkText: '\u012frankiai',
                  linkHref: getToolHref('emailSignature', locale),
                },
                sl: {
                  text: 'Generator e-po\u0161tnega podpisa posodobljen \u2013 odkrijte nove funkcije',
                  linkText: 'orodja',
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

            <LanguageSwitcher variant="desktop" />
          </div>

          <div className="flex items-center gap-1 lg:hidden">
            <LanguageSwitcher variant="mobile" />
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
              {isOpen ? <RiCloseLine width={28} height={28} aria-hidden="true" /> : <RiMenuLine width={28} height={28} aria-hidden="true" />}
            </IconButton>
          </div>
        </nav>

        <MobileNavigation isOpen={isOpen} setIsOpen={setIsOpen} />

        {isPl && <SearchDialog isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />}
      </Wrapper>
    </header>
  );
}
