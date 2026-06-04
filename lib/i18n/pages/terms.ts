import type { Locale } from '@/types/locale';
import { LOCALE_CONFIG, SUPPORTED_LOCALES } from '@/lib/i18n/locales';

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

import cs from '@/data/cs/pages/terms.json';
import da from '@/data/da/pages/terms.json';
import de from '@/data/de/pages/terms.json';
import el from '@/data/el/pages/terms.json';
import en from '@/data/en/pages/terms.json';
import es from '@/data/es/pages/terms.json';
import fi from '@/data/fi/pages/terms.json';
import fr from '@/data/fr/pages/terms.json';
import hu from '@/data/hu/pages/terms.json';
import it from '@/data/it/pages/terms.json';
import nl from '@/data/nl/pages/terms.json';
import no from '@/data/no/pages/terms.json';
import pt from '@/data/pt/pages/terms.json';
import ro from '@/data/ro/pages/terms.json';
import sv from '@/data/sv/pages/terms.json';
import { toAbsoluteUrl } from '@/utils/absoluteUrl';

const TERMS_DATA: Partial<Record<Locale, TermsPageData>> = {
  en,
  de,
  es,
  fr,
  pt,
  it,
  ro,
  nl,
  hu,
  cs,
  sv,
  da,
  no,
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
