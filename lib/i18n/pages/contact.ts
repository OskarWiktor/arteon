import cs from '@/data/cs/pages/contact.json';
import de from '@/data/de/pages/contact.json';
import el from '@/data/el/pages/contact.json';
import en from '@/data/en/pages/contact.json';
import es from '@/data/es/pages/contact.json';
import fi from '@/data/fi/pages/contact.json';
import fr from '@/data/fr/pages/contact.json';
import it from '@/data/it/pages/contact.json';
import nl from '@/data/nl/pages/contact.json';
import no from '@/data/no/pages/contact.json';
import pt from '@/data/pt/pages/contact.json';
import sv from '@/data/sv/pages/contact.json';
import { LOCALE_CONFIG, SUPPORTED_LOCALES } from '@/lib/i18n/locales';
import type { Locale } from '@/types/locale';
import { toAbsoluteUrl } from '@/utils/absoluteUrl';

// ---------------------------------------------------------------------------
// Non-PL "Contact" page – centralised locale data (loaded from JSON)
// ---------------------------------------------------------------------------

export type ContactPageData = {
  slug: string;
  metadata: {
    title: string;
    description: string;
  };
  hero: {
    title: string;
    description: string;
  };
  intro: {
    title: string;
    textBefore: string;
    textAfter: string;
  };
  formTitle: string;
  details: {
    title: string;
    emailLabel: string;
    hoursLabel: string;
    hoursValue: string;
  };
  cta: {
    title: string;
    description: string;
    btnOne: string;
  };
};

const CONTACT_DATA: Partial<Record<Locale, ContactPageData>> = {
  en,
  de,
  es,
  fr,
  pt,
  it,
  nl,
  cs,
  sv,
  no,
  fi,
  el,
};

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

export function getContactPageData(locale: Locale): ContactPageData | null {
  return CONTACT_DATA[locale] ?? null;
}

export function getContactAlternates(locale: Locale) {
  const config = LOCALE_CONFIG[locale];
  if (!config.contactHref) return {};

  const languages: Record<string, string> = {};
  for (const loc of SUPPORTED_LOCALES) {
    const c = LOCALE_CONFIG[loc];
    if (c.contactHref) {
      languages[c.hreflang] = toAbsoluteUrl(c.contactHref);
    }
  }
  languages['x-default'] = toAbsoluteUrl(LOCALE_CONFIG.en.contactHref!);

  return {
    canonical: toAbsoluteUrl(config.contactHref),
    languages,
  };
}
