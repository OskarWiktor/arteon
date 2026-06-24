import cs from '@/data/cs/pages/about.json';
import da from '@/data/da/pages/about.json';
import de from '@/data/de/pages/about.json';
import el from '@/data/el/pages/about.json';
import en from '@/data/en/pages/about.json';
import es from '@/data/es/pages/about.json';
import fi from '@/data/fi/pages/about.json';
import fr from '@/data/fr/pages/about.json';
import hu from '@/data/hu/pages/about.json';
import it from '@/data/it/pages/about.json';
import nl from '@/data/nl/pages/about.json';
import no from '@/data/no/pages/about.json';
import pt from '@/data/pt/pages/about.json';
import ro from '@/data/ro/pages/about.json';
import sv from '@/data/sv/pages/about.json';
import { LOCALE_CONFIG, SUPPORTED_LOCALES } from '@/lib/i18n/locales';
import type { Locale } from '@/types/locale';
import { toAbsoluteUrl } from '@/utils/absoluteUrl';

// ---------------------------------------------------------------------------
// Non-PL "About" page – centralised locale data (loaded from JSON)
// ---------------------------------------------------------------------------

export type AboutPageData = {
  slug: string;
  metadata: {
    title: string;
    description: string;
  };
  hero: {
    title: string;
    description: string;
  };
  whoWeAre: {
    title: string;
    p1: string;
    p2: string;
  };
  whyFree: {
    title: string;
    items: { title: string; description: string }[];
  };
  ourTools: {
    title: string;
    items: { title: string; description: string }[];
  };
  whatsNext: {
    title: string;
    text: string;
  };
  privacy: {
    title: string;
    textBefore: string;
    linkLabel: string;
    textAfter: string;
  };
  cta: {
    title: string;
    description: string;
    btnOne: string;
    btnTwo: string;
  };
};

const ABOUT_DATA: Partial<Record<Locale, AboutPageData>> = {
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

export function getAboutPageData(locale: Locale): AboutPageData | null {
  return ABOUT_DATA[locale] ?? null;
}

export function getAboutAlternates(locale: Locale) {
  const config = LOCALE_CONFIG[locale];
  if (!config.aboutHref) return {};

  const languages: Record<string, string> = {};
  for (const loc of SUPPORTED_LOCALES) {
    const c = LOCALE_CONFIG[loc];
    if (c.aboutHref) {
      languages[c.hreflang] = toAbsoluteUrl(c.aboutHref);
    }
  }
  languages['x-default'] = toAbsoluteUrl(LOCALE_CONFIG.en.aboutHref!);

  return {
    canonical: toAbsoluteUrl(config.aboutHref),
    languages,
  };
}
