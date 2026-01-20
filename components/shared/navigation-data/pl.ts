import type { IconType } from 'react-icons';

import {
  RiAppsLine,
  RiArticleLine,
  RiBookletLine,
  RiCodeSSlashFill,
  RiContrast2Line,
  RiCoupon2Line,
  RiCropLine,
  RiFileList2Line,
  RiFileTextLine,
  RiFolderOpenLine,
  RiIdCardLine,
  RiImageEditLine,
  RiLayoutLine,
  RiMailLine,
  RiMegaphoneLine,
  RiPaletteLine,
  RiPantoneLine,
  RiPriceTag3Line,
  RiQrCodeLine,
  RiQuillPenLine,
  RiRestaurant2Line,
  RiSearchLine,
  RiShoppingCartLine,
  RiTeamLine,
  RiTShirt2Line,
} from 'react-icons/ri';

export type HeaderNavItemKey = 'realizacje' | 'uslugi' | 'oNas' | 'edukacja' | 'narzedzia' | 'kontakt';

export type HeaderNavItem = {
  key: HeaderNavItemKey;
  href: string;
  label: string;
  exact?: boolean;
};

export const DESKTOP_NAV_ITEMS_PL: HeaderNavItem[] = [
  { key: 'realizacje', href: '/realizacje', label: 'Realizacje', exact: true },
  { key: 'uslugi', href: '/uslugi', label: 'Usługi' },
  { key: 'oNas', href: '/o-nas', label: 'O nas' },
  { key: 'edukacja', href: '/edukacja', label: 'Edukacja' },
  { key: 'narzedzia', href: '/narzedzia', label: 'Narzędzia' },
  { key: 'kontakt', href: '/kontakt', label: 'Kontakt' },
];

export const MOBILE_NAV_ITEMS_PL: HeaderNavItem[] = DESKTOP_NAV_ITEMS_PL.filter((it) => it.key !== 'uslugi');

export type AboutItemKey = 'faq' | 'joinNetwork';

export type AboutNavItem = {
  key: AboutItemKey;
  href: string;
  title: string;
  icon?: IconType;
};

export const ABOUT_NAV_ITEMS_PL: AboutNavItem[] = [
  { key: 'faq', href: '/o-nas/faq', title: 'FAQ', icon: RiFileList2Line },
  { key: 'joinNetwork', href: '/o-nas/dolacz-do-sieci', title: 'Dołącz do sieci', icon: RiTeamLine },
];

export type OfferSectionKey = 'witryny' | 'marketing' | 'grafika' | 'tresc';

export type OfferItemKey =
  | 'websites'
  | 'shops'
  | 'blogs'
  | 'auditSeo'
  | 'optimizationSeo'
  | 'positioning'
  | 'priceList'
  | 'visualIdentity'
  | 'loyaltyCard'
  | 'catalogs'
  | 'coupons'
  | 'websiteDesign'
  | 'logo'
  | 'restaurantMenu'
  | 'companyClothing'
  | 'companyPaper'
  | 'socialTemplates'
  | 'offerFolder'
  | 'flyers'
  | 'businessCards'
  | 'contentCreation';

export type OfferSectionItem = {
  key: OfferItemKey;
  href: string;
  title: string;
  desc?: string;
  icon?: IconType;
};

export type OfferSection = {
  key: OfferSectionKey;
  title: string;
  hubHref?: string;
  items: OfferSectionItem[];
};

export const OFFER_SECTIONS_PL: OfferSection[] = [
  {
    key: 'witryny',
    title: 'Witryny',
    items: [
      {
        key: 'websites',
        href: '/uslugi/strony-internetowe',
        title: 'Strony internetowe',
        icon: RiCodeSSlashFill,
      },
      {
        key: 'shops',
        href: '/uslugi/sklepy-internetowe',
        title: 'Sklepy internetowe',
        icon: RiShoppingCartLine,
      },
      {
        key: 'blogs',
        href: '/uslugi/blogi-internetowe',
        title: 'Blogi internetowe',
        icon: RiArticleLine,
      },
    ],
  },
  {
    key: 'marketing',
    title: 'Marketing',
    hubHref: '/uslugi/marketing',
    items: [
      {
        key: 'auditSeo',
        href: '/uslugi/marketing/audyt-seo',
        title: 'Audyt SEO',
        desc: 'Diagnostyka i priorytety działań',
        icon: RiSearchLine,
      },
      {
        key: 'optimizationSeo',
        href: '/uslugi/marketing/optymalizacja-seo',
        title: 'Optymalizacja SEO',
        icon: RiPriceTag3Line,
      },
      {
        key: 'positioning',
        href: '/uslugi/marketing/pozycjonowanie-stron',
        title: 'Pozycjonowanie stron',
        icon: RiMegaphoneLine,
      },
    ],
  },
  {
    key: 'grafika',
    title: 'Projekty graficzne',
    hubHref: '/uslugi/projekty-graficzne',
    items: [
      { key: 'priceList', href: '/uslugi/projekty-graficzne/projekt-cennika', title: 'Cenniki', icon: RiPriceTag3Line },
      {
        key: 'visualIdentity',
        href: '/uslugi/projekty-graficzne/projekt-identyfikacji-wizualnej',
        title: 'Identyfikacja wizualna',
        icon: RiPantoneLine,
      },
      { key: 'loyaltyCard', href: '/uslugi/projekty-graficzne/projekt-karty-lojalnosciowej', title: 'Karty lojalnościowe', icon: RiPriceTag3Line },
      { key: 'catalogs', href: '/uslugi/projekty-graficzne/projekt-katalogu', title: 'Katalogi', icon: RiBookletLine },
      { key: 'coupons', href: '/uslugi/projekty-graficzne/projekt-kuponu-rabatowego-i-vouchera', title: 'Kupony i vouchery', icon: RiCoupon2Line },
      { key: 'websiteDesign', href: '/uslugi/projekty-graficzne/projekt-graficzny-strony', title: 'Projekt graficzny strony', icon: RiLayoutLine },
      { key: 'logo', href: '/uslugi/projekty-graficzne/projekt-logo', title: 'Logo', icon: RiQuillPenLine },
      { key: 'restaurantMenu', href: '/uslugi/projekty-graficzne/projekt-menu-restauracji', title: 'Menu restauracji', icon: RiRestaurant2Line },
      { key: 'companyClothing', href: '/uslugi/projekty-graficzne/projekt-odziezy-firmowej', title: 'Odzież firmowa', icon: RiTShirt2Line },
      { key: 'companyPaper', href: '/uslugi/projekty-graficzne/projekt-papieru-firmowego', title: 'Papier firmowy', icon: RiFileTextLine },
      { key: 'socialTemplates', href: '/uslugi/projekty-graficzne/szablony-postow-media-spolecznosciowe', title: 'Szablony do mediów społecznościowych', icon: RiLayoutLine },
      { key: 'offerFolder', href: '/uslugi/projekty-graficzne/projekt-teczki-ofertowej', title: 'Teczki ofertowe', icon: RiFolderOpenLine },
      { key: 'flyers', href: '/uslugi/projekty-graficzne/projekt-ulotki', title: 'Ulotki', icon: RiFileList2Line },
      { key: 'businessCards', href: '/uslugi/projekty-graficzne/projekt-wizytowki', title: 'Wizytówki', icon: RiIdCardLine },
    ],
  },
  {
    key: 'tresc',
    title: 'Tworzenie treści',
    hubHref: '/uslugi/tworzenie-tresci',
    items: [
      {
        key: 'contentCreation',
        href: '/uslugi/tworzenie-tresci',
        title: 'Tworzenie treści',
        desc: 'Teksty na strony, blog, oferty',
        icon: RiFileTextLine,
      },
    ],
  },
];

export type ToolsSectionKey = 'obrazy' | 'seo' | 'email' | 'kolory' | 'druk';

export type ToolItemKey = 'jpgToWebp' | 'imageResize' | 'favicon' | 'metaCounter' | 'wordCounter' | 'emailSignature' | 'contrastChecker' | 'paletteExtractor' | 'colorPalette' | 'qrCode';

export type ToolSectionItem = {
  key: ToolItemKey;
  href: string;
  title: string;
  description: string;
  image: string;
  icon?: IconType;
};

export type ToolsSection = {
  key: ToolsSectionKey;
  title: string;
  items: ToolSectionItem[];
};

export const TOOLS_SECTIONS_PL: ToolsSection[] = [
  {
    key: 'obrazy',
    title: 'Obrazy i favicony',
    items: [
      {
        key: 'jpgToWebp',
        href: '/narzedzia/jpg-png-na-webp-bez-limitu',
        title: 'Konwerter JPG/PNG na WebP',
        description: 'Zmniejsz wagę zdjęć bez utraty jakości. Konwertuj JPG i PNG do WebP i przyspiesz ładowanie strony.',
        image: '/assets/tools/narzedzia-jpg-png-na-webp-bez-limitu.webp',
        icon: RiImageEditLine,
      },
      {
        key: 'imageResize',
        href: '/narzedzia/zmiana-rozmiaru-i-kadrowanie-zdjecia',
        title: 'Kadrowanie i zmiana rozmiaru',
        description: 'Przygotuj idealny kadr pod social media lub stronę WWW. Wybierz gotowy format lub wpisz własne wymiary.',
        image: '/assets/tools/narzedzia-zmiana-rozmiaru-i-kadrowanie-zdjecia.webp',
        icon: RiCropLine,
      },
      {
        key: 'favicon',
        href: '/narzedzia/darmowy-generator-favicon-ico',
        title: 'Generator favicon',
        description: 'Z jednego obrazu wygeneruj favicon.ico oraz ikony PNG zgodne z wymaganiami przeglądarek i Lighthouse.',
        image: '/assets/tools/narzedzia-darmowy-generator-favicon-ico.webp',
        icon: RiAppsLine,
      },
    ],
  },
  {
    key: 'seo',
    title: 'Meta i SEO',
    items: [
      {
        key: 'metaCounter',
        href: '/narzedzia/licznik-dlugosci-meta-title-i-description',
        title: 'Licznik meta title i description',
        description: 'Sprawdź liczbę znaków i podgląd wyniku w Google. Uniknij uciętych tytułów i opisów w wynikach wyszukiwania.',
        image: '/assets/tools/narzedzia-licznik-dlugosci-meta-title-i-description.webp',
        icon: RiFileTextLine,
      },
      {
        key: 'wordCounter',
        href: '/narzedzia/licznik-slow-i-znakow',
        title: 'Licznik słów i znaków',
        description: 'Sprawdź długość tekstu i oceń, czy jest odpowiednia dla strony głównej, opisu usługi, artykułu czy opisu produktu.',
        image: '/assets/tools/narzedzia-licznik-slow-i-znakow.webp',
        icon: RiArticleLine,
      },
    ],
  },
  {
    key: 'email',
    title: 'E-mail i komunikacja',
    items: [
      {
        key: 'emailSignature',
        href: '/narzedzia/darmowy-generator-stopki-mailowej',
        title: 'Generator stopki mailowej',
        description: 'Zbuduj profesjonalny podpis e-mail w kilka minut. Skopiuj gotowy kod HTML do Gmaila lub Outlooka.',
        image: '/assets/tools/narzedzia-darmowy-generator-stopki-mailowej.webp',
        icon: RiMailLine,
      },
    ],
  },
  {
    key: 'kolory',
    title: 'Kolory i dostępność',
    items: [
      {
        key: 'contrastChecker',
        href: '/narzedzia/tester-kontrastu-kolorow-wcag',
        title: 'Tester kontrastu WCAG',
        description: 'Sprawdź, czy kolory na Twojej stronie spełniają wymagania WCAG 2.1 dla poziomu AA i AAA.',
        image: '/assets/tools/narzedzia-tester-kontrastu-kolorow-wcag.webp',
        icon: RiContrast2Line,
      },
      {
        key: 'paletteExtractor',
        href: '/narzedzia/ekstraktor-kolorow-z-obrazu',
        title: 'Ekstraktor kolorów z obrazu',
        description: 'Wgraj zdjęcie lub logo, a narzędzie wyciągnie dominujące kolory. Skopiuj kody wygenerowanych kolorów jednym kliknięciem.',
        image: '/assets/tools/narzedzia-generator-palety-kolorow-z-obrazu.webp',
        icon: RiPantoneLine,
      },
      {
        key: 'colorPalette',
        href: '/narzedzia/generator-schematow-kolorow',
        title: 'Generator schematów kolorów',
        description: 'Wybierz jeden kolor i wygeneruj 9 schematów kolorów: monochromatyczny, komplementarny, triadyczny i inne.',
        image: '/assets/tools/narzedzia-generator-palet-kolorow-online.webp',
        icon: RiPaletteLine,
      },
    ],
  },
  {
    key: 'druk',
    title: 'Druk i materiały',
    items: [
      {
        key: 'qrCode',
        href: '/narzedzia/generator-kodu-qr',
        title: 'Generator kodu QR',
        description: 'Stwórz kod QR do strony, wizytówki lub ulotki. Wybierz typ danych, kolor i rozmiar, pobierz PNG lub SVG.',
        image: '/assets/tools/narzedzia-generator-kodu-qr.webp',
        icon: RiQrCodeLine,
      },
    ],
  },
];

export type LegalLinkKey = 'regulamin' | 'privacy';

export type LegalLink = {
  key: LegalLinkKey;
  href: string;
  label: string;
};

export const LEGAL_LINKS_PL: LegalLink[] = [
  { key: 'regulamin', href: '/regulamin', label: 'Regulamin świadczenia usług' },
  { key: 'privacy', href: '/polityka-prywatnosci', label: 'Polityka Prywatności' },
];
