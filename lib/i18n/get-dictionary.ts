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

const DictionarySchema = z.object({
  nav: NavSchema,
  footer: FooterSchema,
  desktopOnly: DesktopOnlySchema,
  cookie: CookieSchema,
  skipToContent: z.string(),
  legal: z.array(LegalLinkSchema),
});

export type Dictionary = z.infer<typeof DictionarySchema>;
export type NavDictionary = z.infer<typeof NavSchema>;
export type FooterDictionary = z.infer<typeof FooterSchema>;
export type DesktopOnlyDictionary = z.infer<typeof DesktopOnlySchema>;
export type CookieDictionary = z.infer<typeof CookieSchema>;
export type LegalLink = z.infer<typeof LegalLinkSchema>;

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  pl: () => import('@/dictionaries/pl.json').then((m) => DictionarySchema.parse(m.default)),
  en: () => import('@/dictionaries/en.json').then((m) => DictionarySchema.parse(m.default)),
  de: () => import('@/dictionaries/de.json').then((m) => DictionarySchema.parse(m.default)),
  es: () => import('@/dictionaries/es.json').then((m) => DictionarySchema.parse(m.default)),
  fr: () => import('@/dictionaries/fr.json').then((m) => DictionarySchema.parse(m.default)),
  pt: () => import('@/dictionaries/pt.json').then((m) => DictionarySchema.parse(m.default)),
  it: () => import('@/dictionaries/it.json').then((m) => DictionarySchema.parse(m.default)),
  ro: () => import('@/dictionaries/ro.json').then((m) => DictionarySchema.parse(m.default)),
  nl: () => import('@/dictionaries/nl.json').then((m) => DictionarySchema.parse(m.default)),
  hu: () => import('@/dictionaries/hu.json').then((m) => DictionarySchema.parse(m.default)),
  id: () => import('@/dictionaries/id.json').then((m) => DictionarySchema.parse(m.default)),
  vi: () => import('@/dictionaries/vi.json').then((m) => DictionarySchema.parse(m.default)),
  tr: () => import('@/dictionaries/tr.json').then((m) => DictionarySchema.parse(m.default)),
  tl: () => import('@/dictionaries/tl.json').then((m) => DictionarySchema.parse(m.default)),
  sw: () => import('@/dictionaries/sw.json').then((m) => DictionarySchema.parse(m.default)),
  ms: () => import('@/dictionaries/ms.json').then((m) => DictionarySchema.parse(m.default)),
  cs: () => import('@/dictionaries/cs.json').then((m) => DictionarySchema.parse(m.default)),
  sv: () => import('@/dictionaries/sv.json').then((m) => DictionarySchema.parse(m.default)),
  sq: () => import('@/dictionaries/sq.json').then((m) => DictionarySchema.parse(m.default)),
  da: () => import('@/dictionaries/da.json').then((m) => DictionarySchema.parse(m.default)),
  no: () => import('@/dictionaries/no.json').then((m) => DictionarySchema.parse(m.default)),
  fi: () => import('@/dictionaries/fi.json').then((m) => DictionarySchema.parse(m.default)),
  sk: () => import('@/dictionaries/sk.json').then((m) => DictionarySchema.parse(m.default)),
  hr: () => import('@/dictionaries/hr.json').then((m) => DictionarySchema.parse(m.default)),
  lt: () => import('@/dictionaries/lt.json').then((m) => DictionarySchema.parse(m.default)),
  sl: () => import('@/dictionaries/sl.json').then((m) => DictionarySchema.parse(m.default)),
};

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  const loader = dictionaries[locale] ?? dictionaries.en;
  return loader();
}
