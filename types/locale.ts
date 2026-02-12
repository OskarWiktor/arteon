export type Locale = 'pl' | 'en' | 'de';

export type LocaleConfig = {
  lang: string;
  hreflang: string;
  label: string;
  name: string;
  toolsBasePath: string;
  toolsIndexHref: string;
};

export type LegalLink = {
  key: string;
  href: string;
  label: string;
};

export type NavigationUi = {
  mainNavigation: string;
  logoAlt: string;
  closeMenu: string;
  openMenu: string;
  closeToolsList: string;
  openToolsList: string;
  toolsLabel: string;
  mobileMenu: string;
};

export type FooterUi = {
  copyright: string;
  description: string;
  companyDataLabel: string;
  toolsLabel: string;
  legalLabel: string;
};

export type DesktopOnlyUi = {
  title: string;
  description: string;
  tipTitle: string;
  tipText: string;
};
