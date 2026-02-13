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
    aboutHref: '/en/about',
    contactHref: '/en/contact',
  },
  de: {
    lang: 'de',
    hreflang: 'de',
    label: 'DE',
    name: 'Deutsch',
    toolsBasePath: '/de/werkzeuge',
    toolsIndexHref: '/de/werkzeuge',
    aboutHref: '/de/ueber-uns',
    contactHref: '/de/kontakt',
  },
  es: {
    lang: 'es',
    hreflang: 'es',
    label: 'ES',
    name: 'Español',
    toolsBasePath: '/es/herramientas',
    toolsIndexHref: '/es/herramientas',
    aboutHref: '/es/sobre-nosotros',
    contactHref: '/es/contacto',
  },
  fr: {
    lang: 'fr',
    hreflang: 'fr',
    label: 'FR',
    name: 'Français',
    toolsBasePath: '/fr/outils',
    toolsIndexHref: '/fr/outils',
    aboutHref: '/fr/a-propos',
    contactHref: '/fr/contact',
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
    { key: 'privacy', href: '/en/privacy-policy', label: 'Privacy Policy' },
  ],
  de: [
    { key: 'privacy', href: '/de/datenschutzrichtlinie', label: 'Datenschutzrichtlinie' },
  ],
  es: [
    { key: 'privacy', href: '/es/politica-de-privacidad', label: 'Política de privacidad' },
  ],
  fr: [
    { key: 'privacy', href: '/fr/politique-de-confidentialite', label: 'Politique de confidentialité' },
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
    aboutLabel: 'About',
    contactLabel: 'Contact',
  },
  de: {
    mainNavigation: 'Hauptnavigation',
    logoAlt: 'Arteon - Firmenlogo',
    closeMenu: 'Menü schließen',
    openMenu: 'Menü öffnen',
    closeToolsList: 'Werkzeugliste schließen',
    openToolsList: 'Werkzeugliste öffnen',
    toolsLabel: 'Werkzeuge',
    mobileMenu: 'Mobiles Menü',
    aboutLabel: 'Über uns',
    contactLabel: 'Kontakt',
  },
  es: {
    mainNavigation: 'Navegación principal',
    logoAlt: 'Arteon - logotipo de la empresa',
    closeMenu: 'Cerrar menú',
    openMenu: 'Abrir menú',
    closeToolsList: 'Cerrar lista de herramientas',
    openToolsList: 'Abrir lista de herramientas',
    toolsLabel: 'Herramientas',
    mobileMenu: 'Menú móvil',
    aboutLabel: 'Sobre nosotros',
    contactLabel: 'Contacto',
  },
  fr: {
    mainNavigation: 'Navigation principale',
    logoAlt: "Arteon - logo de l'entreprise",
    closeMenu: 'Fermer le menu',
    openMenu: 'Ouvrir le menu',
    closeToolsList: 'Fermer la liste des outils',
    openToolsList: 'Ouvrir la liste des outils',
    toolsLabel: 'Outils',
    mobileMenu: 'Menu mobile',
    aboutLabel: 'À propos',
    contactLabel: 'Contact',
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
    cookieSettingsLabel: 'Ustawienia plików cookie',
  },
  en: {
    copyright: 'All rights reserved.',
    description: 'Free online tools for web developers, designers, and marketers.',
    companyDataLabel: 'Company info',
    toolsLabel: 'Tools',
    legalLabel: 'Legal documents',
    cookieSettingsLabel: 'Cookie settings',
  },
  de: {
    copyright: 'Alle Rechte vorbehalten.',
    description: 'Kostenlose Online-Tools für Webentwickler, Designer und Marketer.',
    companyDataLabel: 'Firmeninformationen',
    toolsLabel: 'Werkzeuge',
    legalLabel: 'Rechtliche Dokumente',
    cookieSettingsLabel: 'Cookie-Einstellungen',
  },
  es: {
    copyright: 'Todos los derechos reservados.',
    description: 'Herramientas en línea gratuitas para desarrolladores web, diseñadores y especialistas en marketing.',
    companyDataLabel: 'Datos de la empresa',
    toolsLabel: 'Herramientas',
    legalLabel: 'Documentos legales',
    cookieSettingsLabel: 'Configuración de cookies',
  },
  fr: {
    copyright: 'Tous droits réservés.',
    description: 'Outils en ligne gratuits pour développeurs web, designers et spécialistes du marketing.',
    companyDataLabel: "Informations sur l'entreprise",
    toolsLabel: 'Outils',
    legalLabel: 'Documents juridiques',
    cookieSettingsLabel: 'Paramètres des cookies',
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
  es: {
    title: 'Esta herramienta funciona en una pantalla más grande',
    description: 'Para usar esta herramienta cómodamente, ábrala en un portátil, ordenador de escritorio o tableta en modo horizontal.',
    tipTitle: 'Consejo',
    tipText: 'Si usa una tableta, gírela a modo horizontal: cuando el ancho de la ventana sea suficiente, la herramienta se cargará automáticamente.',
  },
  fr: {
    title: 'Cet outil fonctionne sur un écran plus grand',
    description: 'Pour utiliser cet outil confortablement, ouvrez-le sur un ordinateur portable, un ordinateur de bureau ou une tablette en mode paysage.',
    tipTitle: 'Conseil',
    tipText: "Si vous utilisez une tablette, passez en mode paysage\u00a0: lorsque la largeur de la fenêtre sera suffisante, l'outil se chargera automatiquement.",
  },
};
