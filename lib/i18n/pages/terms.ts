import cs from '@/data/cs/pages/terms.json';
import de from '@/data/de/pages/terms.json';
import el from '@/data/el/pages/terms.json';
import en from '@/data/en/pages/terms.json';
import es from '@/data/es/pages/terms.json';
import fi from '@/data/fi/pages/terms.json';
import fr from '@/data/fr/pages/terms.json';
import it from '@/data/it/pages/terms.json';
import nl from '@/data/nl/pages/terms.json';
import pt from '@/data/pt/pages/terms.json';
import { LOCALE_CONFIG, SUPPORTED_LOCALES } from '@/lib/i18n/locales';
import type { Locale } from '@/types/locale';
import { toAbsoluteUrl } from '@/utils/absoluteUrl';

// ---------------------------------------------------------------------------
// Non-PL "Terms of Service" page – centralised locale data (loaded from JSON)
// ---------------------------------------------------------------------------

export type TermsSection = {
  id: string;
  title: string;
  content: string;
};

export type TermsPageData = {
  slug: string;
  metadata: {
    title: string;
    description: string;
  };
  hero: {
    title: string;
    description: string;
  };
  version: string;
  sections: TermsSection[];
  cta: {
    title: string;
    description: string;
    btnOne: string;
  };
};

const TERMS_DATA: Partial<Record<Locale, TermsPageData>> = {
  en,
  de,
  es,
  fr,
  pt,
  it,
  nl,
  cs,
  fi,
  el,
};

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

export function getTermsPageData(locale: Locale): TermsPageData | null {
  return TERMS_DATA[locale] ?? null;
}

export function getTermsAlternates(locale: Locale) {
  const config = LOCALE_CONFIG[locale];
  if (!config.termsHref) return {};

  const languages: Record<string, string> = {};
  for (const loc of SUPPORTED_LOCALES) {
    const c = LOCALE_CONFIG[loc];
    if (c.termsHref) {
      languages[c.hreflang] = toAbsoluteUrl(c.termsHref);
    }
  }
  languages['x-default'] = toAbsoluteUrl(LOCALE_CONFIG.en.termsHref!);

  return {
    canonical: toAbsoluteUrl(config.termsHref),
    languages,
  };
}
