import type { IconType } from 'react-icons';

export type HeaderNavItemKey = 'realizacje' | 'uslugi' | 'oNas' | 'edukacja' | 'narzedzia' | 'kontakt';

export type HeaderNavItem = {
  key: HeaderNavItemKey;
  href: string;
  label: string;
  exact?: boolean;
};

export type AboutItemKey = 'faq' | 'joinNetwork';

export type AboutNavItem = {
  key: AboutItemKey;
  href: string;
  title: string;
  icon?: IconType;
};

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
  icon?: IconType;
  items: OfferSectionItem[];
};

export type LegalLinkKey = 'regulamin' | 'privacy';

export type LegalLink = {
  key: LegalLinkKey;
  href: string;
  label: string;
};

export type LegalLinkPL = LegalLink;
export type LegalLinkEN = LegalLink;

export type HeaderNavItemKeyEN = 'tools';

export type HeaderNavItemEN = {
  key: HeaderNavItemKeyEN;
  href: string;
  label: string;
  exact?: boolean;
};
