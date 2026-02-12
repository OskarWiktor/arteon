import type { Locale, LocaleConfig, LegalLink, NavigationUi, FooterUi, DesktopOnlyUi } from '@/types/locale';
export type { LocaleConfig, LegalLink, NavigationUi, FooterUi, DesktopOnlyUi } from '@/types/locale';

export const LOCALE_CONFIG: Record<Locale, LocaleConfig> = {
  pl: {
    lang: 'pl-PL',
    hreflang: 'pl',
    label: 'PL',
    name: 'Polski',
    toolsBasePath: '/narzedzia',
    toolsIndexHref: '/narzedzia',
  },
  en: {
    lang: 'en',
    hreflang: 'en',
    label: 'EN',
    name: 'English',
    toolsBasePath: '/en/tools',
    toolsIndexHref: '/en/tools',
  },
  de: {
    lang: 'de',
    hreflang: 'de',
    label: 'DE',
    name: 'Deutsch',
    toolsBasePath: '/de/tools',
    toolsIndexHref: '/de/tools',
  },
};

export const SUPPORTED_LOCALES = Object.keys(LOCALE_CONFIG) as Locale[];

export function getLocaleConfig(locale: Locale): LocaleConfig {
  return LOCALE_CONFIG[locale];
}

// ---------------------------------------------------------------------------
// Legal links (shared between Footer and MobileNavigation)
// ---------------------------------------------------------------------------

export const LEGAL_LINKS: Record<Locale, LegalLink[]> = {
  pl: [
    { key: 'regulamin', href: '/regulamin', label: 'Regulamin świadczenia usług' },
    { key: 'privacy', href: '/polityka-prywatnosci', label: 'Polityka Prywatności' },
  ],
  en: [
    { key: 'regulamin', href: '/regulamin', label: 'Terms of Service' },
    { key: 'privacy', href: '/polityka-prywatnosci', label: 'Privacy Policy' },
  ],
  de: [
    { key: 'regulamin', href: '/regulamin', label: 'Nutzungsbedingungen' },
    { key: 'privacy', href: '/polityka-prywatnosci', label: 'Datenschutzrichtlinie' },
  ],
};

export function getLegalLinks(locale: Locale): LegalLink[] {
  return LEGAL_LINKS[locale];
}

// ---------------------------------------------------------------------------
// Navigation UI strings
// ---------------------------------------------------------------------------

export const NAVIGATION_UI: Record<Locale, NavigationUi> = {
  pl: {
    mainNavigation: 'Nawigacja główna',
    logoAlt: 'Arteon - logo firmy',
    closeMenu: 'Zamknij menu',
    openMenu: 'Otwórz menu',
    closeToolsList: 'Zamknij listę narzędzi',
    openToolsList: 'Otwórz listę narzędzi',
    toolsLabel: 'Narzędzia',
    mobileMenu: 'Menu mobilne',
  },
  en: {
    mainNavigation: 'Main navigation',
    logoAlt: 'Arteon - company logo',
    closeMenu: 'Close menu',
    openMenu: 'Open menu',
    closeToolsList: 'Close tools list',
    openToolsList: 'Open tools list',
    toolsLabel: 'Tools',
    mobileMenu: 'Mobile menu',
  },
  de: {
    mainNavigation: 'Hauptnavigation',
    logoAlt: 'Arteon - Firmenlogo',
    closeMenu: 'Menü schließen',
    openMenu: 'Menü öffnen',
    closeToolsList: 'Werkzeugliste schließen',
    openToolsList: 'Werkzeugliste öffnen',
    toolsLabel: 'Tools',
    mobileMenu: 'Mobiles Menü',
  },
};

// ---------------------------------------------------------------------------
// Footer UI strings
// ---------------------------------------------------------------------------

export const FOOTER_UI: Record<Locale, FooterUi> = {
  pl: {
    copyright: 'Wszelkie prawa zastrzeżone.',
    description: 'Realizujemy projekty dla polskich firm na całym świecie - z siedzibą w Małopolsce, w okolicach Krakowa.',
    companyDataLabel: 'Dane firmy i lokalizacja',
    toolsLabel: 'Narzędzia',
    legalLabel: 'Dokumenty i ustawienia',
  },
  en: {
    copyright: 'All rights reserved.',
    description: 'Free online tools for web developers, designers, and marketers.',
    companyDataLabel: 'Company info',
    toolsLabel: 'Tools',
    legalLabel: 'Legal documents',
  },
  de: {
    copyright: 'Alle Rechte vorbehalten.',
    description: 'Kostenlose Online-Tools für Webentwickler, Designer und Marketer.',
    companyDataLabel: 'Firmeninformationen',
    toolsLabel: 'Tools',
    legalLabel: 'Rechtliche Dokumente',
  },
};

// ---------------------------------------------------------------------------
// Desktop-only layout UI strings
// ---------------------------------------------------------------------------

export const DESKTOP_ONLY_UI: Record<Locale, DesktopOnlyUi> = {
  pl: {
    title: 'To narzędzie działa na większym ekranie',
    description: 'Żeby wygodnie skorzystać z\u00a0tego narzędzia, otwórz je na laptopie, komputerze stacjonarnym lub tablecie w\u00a0poziomie.',
    tipTitle: 'Podpowiedź',
    tipText: 'Jeśli korzystasz z tabletu, przełącz go w\u00a0tryb poziomy - gdy szerokość okna będzie większa, narzędzie załaduje się automatycznie.',
  },
  en: {
    title: 'This tool works on a larger screen',
    description: 'To use this tool comfortably, open it on a laptop, desktop computer, or tablet in landscape mode.',
    tipTitle: 'Tip',
    tipText: 'If you are using a tablet, switch it to landscape mode - when the window width is large enough, the tool will load automatically.',
  },
  de: {
    title: 'Dieses Tool funktioniert auf einem größeren Bildschirm',
    description: 'Um dieses Tool komfortabel zu nutzen, öffnen Sie es auf einem Laptop, Desktop-Computer oder Tablet im Querformat.',
    tipTitle: 'Tipp',
    tipText: 'Falls Sie ein Tablet nutzen, drehen Sie es ins Querformat - sobald die Fensterbreite ausreicht, lädt das Tool automatisch.',
  },
};
