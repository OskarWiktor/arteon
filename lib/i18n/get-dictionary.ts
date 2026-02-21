import 'server-only';

import type { Locale } from '@/types/locale';
import { z } from 'zod';

const NavSchema = z.object({
  mainNavigation: z.string(),
  logoAlt: z.string(),
  closeMenu: z.string(),
  openMenu: z.string(),
  closeToolsList: z.string(),
  openToolsList: z.string(),
  toolsLabel: z.string(),
  mobileMenu: z.string(),
  aboutLabel: z.string().optional(),
  contactLabel: z.string().optional(),
});

const FooterSchema = z.object({
  copyright: z.string(),
  description: z.string(),
  companyDataLabel: z.string(),
  toolsLabel: z.string(),
  legalLabel: z.string(),
  cookieSettingsLabel: z.string(),
});

const DesktopOnlySchema = z.object({
  title: z.string(),
  description: z.string(),
  tipTitle: z.string(),
  tipText: z.string(),
});

const CookieSchema = z.object({
  title: z.string(),
  description: z.string(),
  setPreferences: z.string(),
  privacyPolicy: z.string(),
  privacyPolicyHref: z.string(),
  reject: z.string(),
  settings: z.string(),
  accept: z.string(),
  panelTitle: z.string(),
  panelDescription: z.string(),
  categoriesLegend: z.string(),
  essentialTitle: z.string(),
  essentialDescription: z.string(),
  essentialStatus: z.string(),
  analyticsTitle: z.string(),
  analyticsDescription: z.string(),
  analyticsLabel: z.string(),
  adsTitle: z.string(),
  adsDescription: z.string(),
  adsLabel: z.string(),
  changeDecision: z.string(),
  save: z.string(),
});

const LegalLinkSchema = z.object({
  key: z.string(),
  href: z.string(),
  label: z.string(),
});

const BreadcrumbsSchema = z.object({
  home: z.string(),
  ariaLabel: z.string(),
});

const ContactFormSchema = z.object({
  nameLabel: z.string(),
  namePlaceholder: z.string(),
  emailLabel: z.string(),
  emailPlaceholder: z.string(),
  subjectLabel: z.string(),
  subjectPlaceholder: z.string(),
  messageLabel: z.string(),
  messagePlaceholder: z.string(),
  send: z.string(),
  error: z.string(),
  success: z.string(),
});

const ToolsCarouselSchema = z.object({
  defaultTitle: z.string(),
  seeAllTools: z.string(),
  carouselLabel: z.string(),
  scrollLeft: z.string(),
  scrollRight: z.string(),
  carouselNavigation: z.string(),
  goToSlide: z.string(),
  of: z.string(),
  slide: z.string(),
  tool: z.string(),
  openTool: z.string(),
});

const LanguageSwitcherSchema = z.object({
  switchTitle: z.string(),
  toggleLabel: z.string(),
  chooseLabel: z.string(),
  popularLabel: z.string(),
  otherLabel: z.string(),
  closeModalLabel: z.string(),
});

const MobileNavSchema = z.object({
  close: z.string(),
  services: z.string(),
  contact: z.string(),
});

const InfoBannerSchema = z.object({
  text: z.string(),
  linkText: z.string(),
});

const DictionarySchema = z.object({
  nav: NavSchema,
  footer: FooterSchema,
  desktopOnly: DesktopOnlySchema,
  cookie: CookieSchema,
  skipToContent: z.string(),
  legal: z.array(LegalLinkSchema),
  breadcrumbs: BreadcrumbsSchema,
  contactForm: ContactFormSchema,
  toolsCarousel: ToolsCarouselSchema,
  languageSwitcher: LanguageSwitcherSchema,
  mobileNav: MobileNavSchema,
  infoBanner: InfoBannerSchema,
});

export type Dictionary = z.infer<typeof DictionarySchema>;
export type NavDictionary = z.infer<typeof NavSchema>;
export type FooterDictionary = z.infer<typeof FooterSchema>;
export type DesktopOnlyDictionary = z.infer<typeof DesktopOnlySchema>;
export type CookieDictionary = z.infer<typeof CookieSchema>;
export type LegalLink = z.infer<typeof LegalLinkSchema>;
export type BreadcrumbsDictionary = z.infer<typeof BreadcrumbsSchema>;
export type ContactFormDictionary = z.infer<typeof ContactFormSchema>;
export type ToolsCarouselDictionary = z.infer<typeof ToolsCarouselSchema>;
export type LanguageSwitcherDictionary = z.infer<typeof LanguageSwitcherSchema>;
export type MobileNavDictionary = z.infer<typeof MobileNavSchema>;
export type InfoBannerDictionary = z.infer<typeof InfoBannerSchema>;

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  pl: () => import('@/data/pl/dictionary.json').then((m) => DictionarySchema.parse(m.default)),
  en: () => import('@/data/en/dictionary.json').then((m) => DictionarySchema.parse(m.default)),
  de: () => import('@/data/de/dictionary.json').then((m) => DictionarySchema.parse(m.default)),
  es: () => import('@/data/es/dictionary.json').then((m) => DictionarySchema.parse(m.default)),
  fr: () => import('@/data/fr/dictionary.json').then((m) => DictionarySchema.parse(m.default)),
  pt: () => import('@/data/pt/dictionary.json').then((m) => DictionarySchema.parse(m.default)),
  it: () => import('@/data/it/dictionary.json').then((m) => DictionarySchema.parse(m.default)),
  ro: () => import('@/data/ro/dictionary.json').then((m) => DictionarySchema.parse(m.default)),
  nl: () => import('@/data/nl/dictionary.json').then((m) => DictionarySchema.parse(m.default)),
  hu: () => import('@/data/hu/dictionary.json').then((m) => DictionarySchema.parse(m.default)),
  tr: () => import('@/data/tr/dictionary.json').then((m) => DictionarySchema.parse(m.default)),
  cs: () => import('@/data/cs/dictionary.json').then((m) => DictionarySchema.parse(m.default)),
  sv: () => import('@/data/sv/dictionary.json').then((m) => DictionarySchema.parse(m.default)),
  sq: () => import('@/data/sq/dictionary.json').then((m) => DictionarySchema.parse(m.default)),
  da: () => import('@/data/da/dictionary.json').then((m) => DictionarySchema.parse(m.default)),
  no: () => import('@/data/no/dictionary.json').then((m) => DictionarySchema.parse(m.default)),
  fi: () => import('@/data/fi/dictionary.json').then((m) => DictionarySchema.parse(m.default)),
  sk: () => import('@/data/sk/dictionary.json').then((m) => DictionarySchema.parse(m.default)),
  hr: () => import('@/data/hr/dictionary.json').then((m) => DictionarySchema.parse(m.default)),
  lt: () => import('@/data/lt/dictionary.json').then((m) => DictionarySchema.parse(m.default)),
  sl: () => import('@/data/sl/dictionary.json').then((m) => DictionarySchema.parse(m.default)),
  el: () => import('@/data/el/dictionary.json').then((m) => DictionarySchema.parse(m.default)),
  bg: () => import('@/data/bg/dictionary.json').then((m) => DictionarySchema.parse(m.default)),
  uk: () => import('@/data/uk/dictionary.json').then((m) => DictionarySchema.parse(m.default)),
};

const cache = new Map<Locale, Dictionary>();

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  const cached = cache.get(locale);
  if (cached) return cached;

  const loader = dictionaries[locale] ?? dictionaries.en;
  const dict = await loader();
  cache.set(locale, dict);
  return dict;
}
