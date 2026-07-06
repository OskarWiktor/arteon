import type { IconType } from 'react-icons';
import {
  RiAppsLine,
  RiArticleLine,
  RiBookletLine,
  RiBrushLine,
  RiBuilding2Line,
  RiCodeSSlashFill,
  RiContrast2Line,
  RiCoupon2Line,
  RiCropLine,
  RiFileEditLine,
  RiFileList2Line,
  RiFileTextLine,
  RiFolderOpenLine,
  RiGlobalLine,
  RiIdCardLine,
  RiImageEditLine,
  RiLayoutLine,
  RiLineChartLine,
  RiLoopLeftLine,
  RiMailLine,
  RiMegaphoneLine,
  RiMentalHealthLine,
  RiPaintBrushLine,
  RiPaletteLine,
  RiPantoneLine,
  RiPriceTag3Line,
  RiQrCodeLine,
  RiQuillPenLine,
  RiRestaurant2Line,
  RiSearchLine,
  RiShoppingCartLine,
  RiTShirt2Line,
} from 'react-icons/ri';
import type { ToolsSection } from '@/types/tools/common';
export type {
  ToolsSectionKey,
  ToolItemKey,
  ToolSectionItem,
  ToolsSection,
} from '@/types/tools/common';

export type HeaderNavItemKey =
  | 'realizacje'
  | 'uslugi'
  | 'oNas'
  | 'edukacja'
  | 'narzedzia'
  | 'kontakt';

export type HeaderNavItem = {
  key: HeaderNavItemKey;
  href: string;
  label: string;
  exact?: boolean;
};

export type OfferSectionKey = 'witryny' | 'marketing' | 'grafika' | 'tresc';

export type OfferItemKey =
  | 'websites'
  | 'shops'
  | 'blogs'
  | 'websitePsychologist'
  | 'websiteFinishing'
  | 'websiteConstruction'
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
  | 'wordpressOptimization'
  | 'contentCreation';

export type OfferSectionItem = {
  key: OfferItemKey;
  href: string;
  title: string;
  desc?: string;
  icon?: IconType;
};

export type OfferSubGroup = {
  key: string;
  title: string;
  items: OfferSectionItem[];
};

export type OfferSection = {
  key: OfferSectionKey;
  title: string;
  hubHref?: string;
  icon?: IconType;
  items: OfferSectionItem[];
  /**
   * Optional labelled sub-groups (e.g. "Oferty ogólne" / "Oferty specjalne").
   * When present, desktop and mobile navigation render these groups with headings;
   * `items` stays the flat concatenation used by search index, sitemap and the offer hub.
   */
  groups?: OfferSubGroup[];
};

export const DESKTOP_NAV_ITEMS_PL: HeaderNavItem[] = [
  { key: 'realizacje', href: '/realizacje', label: 'Realizacje', exact: true },
  { key: 'uslugi', href: '/uslugi', label: 'Usługi' },
  { key: 'oNas', href: '/o-nas', label: 'O nas' },
  { key: 'edukacja', href: '/edukacja', label: 'Edukacja' },
  { key: 'narzedzia', href: '/narzedzia', label: 'Narzędzia' },
  { key: 'kontakt', href: '/kontakt', label: 'Kontakt' },
];

export const MOBILE_NAV_ITEMS_PL: HeaderNavItem[] = DESKTOP_NAV_ITEMS_PL.filter(
  it => it.key !== 'uslugi',
);

export const OFFER_WITRYNY_GENERAL_PL: OfferSectionItem[] = [
  {
    key: 'websites',
    href: '/uslugi/tworzenie-stron-wordpress',
    title: 'Tworzenie stron WordPress',
    icon: RiCodeSSlashFill,
  },
  {
    key: 'wordpressOptimization',
    href: '/uslugi/tworzenie-stron-wordpress/optymalizacja-strony-wordpress',
    title: 'Optymalizacja strony WordPress',
    icon: RiCodeSSlashFill,
  },
  {
    key: 'shops',
    href: '/uslugi/sklepy-internetowe',
    title: 'Tworzenie sklepów internetowych',
    icon: RiShoppingCartLine,
  },
  {
    key: 'blogs',
    href: '/uslugi/blogi-internetowe',
    title: 'Tworzenie blogów internetowych',
    icon: RiArticleLine,
  },
];

export const OFFER_WITRYNY_SPECIAL_PL: OfferSectionItem[] = [
  {
    key: 'websitePsychologist',
    href: '/uslugi/strona-internetowa-dla-psychologa',
    title: 'Strona dla psychologa',
    icon: RiMentalHealthLine,
  },
  {
    key: 'websiteFinishing',
    href: '/uslugi/strona-internetowa-dla-firmy-wykonczeniowej',
    title: 'Strona dla firmy wykończeniowej',
    icon: RiPaintBrushLine,
  },
  {
    key: 'websiteConstruction',
    href: '/uslugi/strona-internetowa-dla-firmy-budowlanej',
    title: 'Strona dla firmy budowlanej',
    icon: RiBuilding2Line,
  },
];

export const OFFER_SECTIONS_PL: OfferSection[] = [
  {
    key: 'witryny',
    title: 'Witryny',
    icon: RiGlobalLine,
    items: [...OFFER_WITRYNY_GENERAL_PL, ...OFFER_WITRYNY_SPECIAL_PL],
    groups: [
      {
        key: 'general',
        title: 'Oferty ogólne',
        items: OFFER_WITRYNY_GENERAL_PL,
      },
      {
        key: 'special',
        title: 'Oferty specjalne',
        items: OFFER_WITRYNY_SPECIAL_PL,
      },
    ],
  },
  {
    key: 'marketing',
    title: 'Marketing',
    hubHref: '/uslugi/marketing',
    icon: RiLineChartLine,
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
    icon: RiBrushLine,
    items: [
      {
        key: 'priceList',
        href: '/uslugi/projekty-graficzne/projekt-cennika',
        title: 'Cenniki',
        icon: RiPriceTag3Line,
      },
      {
        key: 'visualIdentity',
        href: '/uslugi/projekty-graficzne/projekt-identyfikacji-wizualnej',
        title: 'Identyfikacja wizualna',
        icon: RiPantoneLine,
      },
      {
        key: 'loyaltyCard',
        href: '/uslugi/projekty-graficzne/projekt-karty-lojalnosciowej',
        title: 'Karty lojalnościowe',
        icon: RiPriceTag3Line,
      },
      {
        key: 'catalogs',
        href: '/uslugi/projekty-graficzne/projekt-katalogu',
        title: 'Katalogi',
        icon: RiBookletLine,
      },
      {
        key: 'coupons',
        href: '/uslugi/projekty-graficzne/projekt-kuponu-rabatowego-i-vouchera',
        title: 'Kupony i vouchery',
        icon: RiCoupon2Line,
      },
      {
        key: 'websiteDesign',
        href: '/uslugi/projekty-graficzne/projekt-graficzny-strony',
        title: 'Projekt graficzny strony',
        icon: RiLayoutLine,
      },
      {
        key: 'logo',
        href: '/uslugi/projekty-graficzne/projekt-logo',
        title: 'Logo',
        icon: RiQuillPenLine,
      },
      {
        key: 'restaurantMenu',
        href: '/uslugi/projekty-graficzne/projekt-menu-restauracji',
        title: 'Menu restauracji',
        icon: RiRestaurant2Line,
      },
      {
        key: 'companyClothing',
        href: '/uslugi/projekty-graficzne/projekt-odziezy-firmowej',
        title: 'Odzież firmowa',
        icon: RiTShirt2Line,
      },
      {
        key: 'companyPaper',
        href: '/uslugi/projekty-graficzne/projekt-papieru-firmowego',
        title: 'Papier firmowy',
        icon: RiFileTextLine,
      },
      {
        key: 'socialTemplates',
        href: '/uslugi/projekty-graficzne/szablony-postow-media-spolecznosciowe',
        title: 'Szablony do mediów społecznościowych',
        icon: RiLayoutLine,
      },
      {
        key: 'offerFolder',
        href: '/uslugi/projekty-graficzne/projekt-teczki-ofertowej',
        title: 'Teczki ofertowe',
        icon: RiFolderOpenLine,
      },
      {
        key: 'flyers',
        href: '/uslugi/projekty-graficzne/projekt-ulotki',
        title: 'Ulotki',
        icon: RiFileList2Line,
      },
      {
        key: 'businessCards',
        href: '/uslugi/projekty-graficzne/projekt-wizytowki',
        title: 'Wizytówki',
        icon: RiIdCardLine,
      },
    ],
  },
  {
    key: 'tresc',
    title: 'Tworzenie treści',
    hubHref: '/uslugi/tworzenie-tresci',
    icon: RiFileEditLine,
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

export const TOOLS_SECTIONS_PL: ToolsSection[] = [
  {
    key: 'obrazy',
    title: 'Obrazy i favicony',
    icon: RiImageEditLine,
    items: [
      {
        key: 'imageResize',
        href: '/narzedzia/edytor-zdjec-online',
        title: 'Edytor zdjęć',
        description:
          'Przygotuj idealny kadr pod media społecznościowe lub stronę WWW. Wybierz gotowy format lub wpisz własne wymiary.',
        icon: RiCropLine,
      },
      {
        key: 'favicon',
        href: '/narzedzia/darmowy-generator-favicon-ico',
        title: 'Generator favicon',
        description:
          'Z jednego obrazu wygeneruj favicon.ico oraz ikony PNG zgodne z wymaganiami przeglądarek i Lighthouse.',
        icon: RiAppsLine,
      },
    ],
  },
  {
    key: 'seo',
    title: 'Meta i SEO',
    icon: RiSearchLine,
    items: [
      {
        key: 'metaCounter',
        href: '/narzedzia/licznik-dlugosci-meta-title-i-description',
        title: 'Licznik meta title i description',
        description:
          'Sprawdź liczbę znaków i podgląd wyniku w Google. Uniknij uciętych tytułów i opisów w wynikach wyszukiwania.',
        icon: RiFileTextLine,
      },
      {
        key: 'wordCounter',
        href: '/narzedzia/licznik-slow-i-znakow',
        title: 'Licznik słów i znaków',
        description:
          'Sprawdź długość tekstu i oceń, czy jest odpowiednia dla strony głównej, opisu usługi, artykułu czy opisu produktu.',
        icon: RiArticleLine,
      },
    ],
  },
  {
    key: 'email',
    title: 'E-mail i komunikacja',
    icon: RiMailLine,
    items: [
      {
        key: 'emailSignature',
        href: '/narzedzia/darmowy-generator-stopki-mailowej',
        title: 'Generator stopki mailowej',
        description:
          'Zbuduj profesjonalny podpis e-mail w kilka minut. Skopiuj gotowy kod HTML do Gmaila lub Outlooka.',
        icon: RiMailLine,
      },
    ],
  },
  {
    key: 'kolory',
    title: 'Kolory i dostępność',
    icon: RiPaletteLine,
    items: [
      {
        key: 'contrastChecker',
        href: '/narzedzia/kontrast-i-czytelnosc-kolorow',
        title: 'Kontrast i czytelność kolorów',
        description:
          'Sprawdź czy kolory tekstu i tła są czytelne. Narzędzie oblicza kontrast według WCAG i pomoże dobrać odpowiedni kolor.',
        icon: RiContrast2Line,
      },
      {
        key: 'paletteExtractor',
        href: '/narzedzia/ekstraktor-kolorow-z-obrazu',
        title: 'Ekstraktor kolorów z obrazu',
        description:
          'Wgraj zdjęcie lub logo, a narzędzie wyciągnie dominujące kolory. Skopiuj kody wygenerowanych kolorów jednym kliknięciem.',
        icon: RiPantoneLine,
      },
      {
        key: 'colorPalette',
        href: '/narzedzia/generator-palet-kolorow',
        title: 'Generator palet kolorów',
        description:
          'Wybierz jeden kolor i wygeneruj 9 palet kolorów: monochromatyczną, komplementarną, triadyczną i inne.',
        icon: RiPaletteLine,
      },
    ],
  },
  {
    key: 'druk',
    title: 'Druk i materiały',
    icon: RiQrCodeLine,
    items: [
      {
        key: 'qrCode',
        href: '/narzedzia/darmowy-generator-kodow-qr',
        title: 'Darmowy generator kodów QR',
        description:
          'Stwórz kod QR do strony, wizytówki vCard, menu lub ulotki. Eksport PNG i SVG, bez logowania, bez limitu.',
        icon: RiQrCodeLine,
      },
    ],
  },
  {
    key: 'konwertery',
    title: 'Konwertery obrazów',
    icon: RiLoopLeftLine,
    items: [
      {
        key: 'jpgToWebpSimple',
        href: '/narzedzia/konwerter-jpg-na-webp',
        title: 'Konwerter JPG na WebP',
        description:
          'Zamień zdjęcia JPG na lekki WebP. Zmniejsz wagę obrazów nawet o 35%.',
        icon: RiLoopLeftLine,
      },
      {
        key: 'pngToWebpSimple',
        href: '/narzedzia/konwerter-png-na-webp',
        title: 'Konwerter PNG na WebP',
        description:
          'Zamień grafiki PNG na WebP. Mniejsze pliki przy zachowaniu przezroczystości.',
        icon: RiLoopLeftLine,
      },
      {
        key: 'webpToJpg',
        href: '/narzedzia/konwerter-webp-na-jpg',
        title: 'Konwerter WebP na JPG',
        description:
          'Zamień pliki WebP na JPG. Kompatybilność z każdym programem i platformą.',
        icon: RiLoopLeftLine,
      },
      {
        key: 'webpToPng',
        href: '/narzedzia/konwerter-webp-na-png',
        title: 'Konwerter WebP na PNG',
        description:
          'Zamień pliki WebP na bezstratny PNG. Konwersja lokalna, bez wysyłania na serwer.',
        icon: RiLoopLeftLine,
      },
      {
        key: 'pngToJpg',
        href: '/narzedzia/konwerter-png-na-jpg',
        title: 'Konwerter PNG na JPG',
        description:
          'Zamień pliki PNG na JPG. Konwersja w przeglądarce, bez limitu plików i rejestracji.',
        icon: RiLoopLeftLine,
      },
      {
        key: 'jpgToPng',
        href: '/narzedzia/konwerter-jpg-na-png',
        title: 'Konwerter JPG na PNG',
        description:
          'Zamień pliki JPG na bezstratny PNG. Konwersja w przeglądarce, bez limitu.',
        icon: RiLoopLeftLine,
      },
      {
        key: 'svgToPng',
        href: '/narzedzia/konwerter-svg-na-png',
        title: 'Konwerter SVG na PNG',
        description: 'Zamień grafikę wektorową SVG na rastrowy PNG.',
        icon: RiLoopLeftLine,
      },
      {
        key: 'bmpToJpg',
        href: '/narzedzia/konwerter-bmp-na-jpg',
        title: 'Konwerter BMP na JPG',
        description: 'Zamień nieskompresowane pliki BMP na lekki JPG.',
        icon: RiLoopLeftLine,
      },
      {
        key: 'jpgToAvif',
        href: '/narzedzia/konwerter-jpg-na-avif',
        title: 'Konwerter JPG na AVIF',
        description:
          'Zamień zdjęcia JPG na nowoczesny AVIF. Kompresja nawet 50% lepsza niż JPG.',
        icon: RiLoopLeftLine,
      },
      {
        key: 'jpgToPdf',
        href: '/narzedzia/konwerter-jpg-na-pdf',
        title: 'Konwerter JPG na PDF',
        description:
          'Zamień zdjęcia JPG na PDF. Połącz wiele obrazów w jeden dokument.',
        icon: RiLoopLeftLine,
      },
      {
        key: 'pngToPdf',
        href: '/narzedzia/konwerter-png-na-pdf',
        title: 'Konwerter PNG na PDF',
        description: 'Zamień grafiki PNG na PDF z zachowaniem jakości.',
        icon: RiLoopLeftLine,
      },
      {
        key: 'webpToPdf',
        href: '/narzedzia/konwerter-webp-na-pdf',
        title: 'Konwerter WebP na PDF',
        description: 'Zamień obrazy WebP na PDF. Konwersja w przeglądarce.',
        icon: RiLoopLeftLine,
      },
      {
        key: 'pdfToJpg',
        href: '/narzedzia/konwerter-pdf-na-jpg',
        title: 'Konwerter PDF na JPG',
        description: 'Zamień strony PDF na obrazy JPG.',
        icon: RiLoopLeftLine,
      },
      {
        key: 'pdfToPng',
        href: '/narzedzia/konwerter-pdf-na-png',
        title: 'Konwerter PDF na PNG',
        description: 'Zamień strony PDF na obrazy PNG w wysokiej jakości.',
        icon: RiLoopLeftLine,
      },
      {
        key: 'pdfToWebp',
        href: '/narzedzia/konwerter-pdf-na-webp',
        title: 'Konwerter PDF na WebP',
        description: 'Zamień strony PDF na lekkie obrazy WebP.',
        icon: RiLoopLeftLine,
      },
      {
        key: 'imageToBase64',
        href: '/narzedzia/konwerter-obraz-na-base64',
        title: 'Konwerter obraz na Base64',
        description: 'Zakoduj obraz do formatu Base64 do CSS lub HTML.',
        icon: RiLoopLeftLine,
      },
      {
        key: 'base64ToImage',
        href: '/narzedzia/konwerter-base64-na-obraz',
        title: 'Konwerter Base64 na obraz',
        description: 'Odkoduj ciąg Base64 na obraz z podglądem.',
        icon: RiLoopLeftLine,
      },
    ],
  },
  {
    key: 'dokumenty',
    title: 'Konwertery danych',
    icon: RiFileTextLine,
    items: [
      {
        key: 'csvToJson',
        href: '/narzedzia/konwerter-csv-na-json',
        title: 'Konwerter CSV na JSON',
        description: 'Zamień plik CSV na poprawny JSON z formatowaniem.',
        icon: RiFileTextLine,
      },
      {
        key: 'jsonToCsv',
        href: '/narzedzia/konwerter-json-na-csv',
        title: 'Konwerter JSON na CSV',
        description: 'Zamień dane JSON na plik CSV.',
        icon: RiFileTextLine,
      },
      {
        key: 'xmlToJson',
        href: '/narzedzia/konwerter-xml-na-json',
        title: 'Konwerter XML na JSON',
        description: 'Zamień dane XML na JSON z walidacją.',
        icon: RiFileTextLine,
      },
      {
        key: 'jsonToXml',
        href: '/narzedzia/konwerter-json-na-xml',
        title: 'Konwerter JSON na XML',
        description: 'Zamień dane JSON na sformatowany XML.',
        icon: RiFileTextLine,
      },
      {
        key: 'yamlToJson',
        href: '/narzedzia/konwerter-yaml-na-json',
        title: 'Konwerter YAML na JSON',
        description: 'Zamień konfigurację YAML na JSON.',
        icon: RiFileTextLine,
      },
      {
        key: 'jsonToYaml',
        href: '/narzedzia/konwerter-json-na-yaml',
        title: 'Konwerter JSON na YAML',
        description: 'Zamień dane JSON na czytelny YAML.',
        icon: RiFileTextLine,
      },
      {
        key: 'markdownToHtml',
        href: '/narzedzia/konwerter-markdown-na-html',
        title: 'Konwerter Markdown na HTML',
        description: 'Zamień tekst Markdown na czysty HTML.',
        icon: RiFileTextLine,
      },
      {
        key: 'htmlToMarkdown',
        href: '/narzedzia/konwerter-html-na-markdown',
        title: 'Konwerter HTML na Markdown',
        description: 'Zamień kod HTML na czytelny Markdown.',
        icon: RiFileTextLine,
      },
    ],
  },
];
