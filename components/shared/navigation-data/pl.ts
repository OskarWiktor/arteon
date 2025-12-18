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
        desc: 'WCAG 2.2 AA, projekt na miarę',
        icon: RiCodeSSlashFill,
      },
      {
        key: 'shops',
        href: '/uslugi/sklepy-internetowe',
        title: 'Sklepy internetowe',
        desc: 'Płatności, integracje, automatyzacje',
        icon: RiShoppingCartLine,
      },
      {
        key: 'blogs',
        href: '/uslugi/blogi-internetowe',
        title: 'Blogi internetowe',
        desc: 'Architektura treści i CMS',
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
        desc: 'On-page, technikalia, treści',
        icon: RiPriceTag3Line,
      },
      {
        key: 'positioning',
        href: '/uslugi/marketing/pozycjonowanie-stron',
        title: 'Pozycjonowanie stron',
        desc: 'Strategia, linki, wzrost fraz',
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
      { key: 'socialTemplates', href: '/uslugi/projekty-graficzne/szablony-postow-social-media', title: 'Szablony social media', icon: RiLayoutLine },
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

export type ToolsSectionKey = 'obrazy' | 'seo' | 'email' | 'kolory';

export type ToolItemKey =
  | 'jpgToWebp'
  | 'imageResize'
  | 'favicon'
  | 'metaCounter'
  | 'emailSignature'
  | 'contrastChecker'
  | 'paletteExtractor'
  | 'colorPalette';

export type ToolSectionItem = {
  key: ToolItemKey;
  href: string;
  title: string;
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
      { key: 'jpgToWebp', href: '/narzedzia/jpg-png-na-webp-bez-limitu', title: 'Konwerter JPG/PNG na WebP', icon: RiImageEditLine },
      { key: 'imageResize', href: '/narzedzia/zmiana-rozmiaru-i-kadrowanie-zdjecia', title: 'Kadrowanie i zmiana rozmiaru', icon: RiCropLine },
      { key: 'favicon', href: '/narzedzia/darmowy-generator-favicon-ico', title: 'Generator favicon', icon: RiAppsLine },
    ],
  },
  {
    key: 'seo',
    title: 'Meta i SEO',
    items: [{ key: 'metaCounter', href: '/narzedzia/licznik-dlugosci-meta-title-i-description', title: 'Licznik meta title i description', icon: RiFileTextLine }],
  },
  {
    key: 'email',
    title: 'E-mail i komunikacja',
    items: [{ key: 'emailSignature', href: '/narzedzia/darmowy-generator-stopki-mailowej', title: 'Generator stopki mailowej HTML', icon: RiMailLine }],
  },
  {
    key: 'kolory',
    title: 'Kolory i dostępność',
    items: [
      { key: 'contrastChecker', href: '/narzedzia/tester-kontrastu-kolorow-wcag', title: 'Tester kontrastu kolorów WCAG', icon: RiContrast2Line },
      { key: 'paletteExtractor', href: '/narzedzia/generator-palety-kolorow-z-obrazu', title: 'Paleta kolorów z obrazu / logo', icon: RiPantoneLine },
      { key: 'colorPalette', href: '/narzedzia/generator-palet-kolorow-online', title: 'Generator palet kolorów', icon: RiPaletteLine },
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
