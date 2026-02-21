import type { Locale } from '@/types/locale';
import { LOCALE_CONFIG, SUPPORTED_LOCALES } from '@/lib/i18n/locales';
import { toAbsoluteUrl } from '@/utils/absoluteUrl';

// ---------------------------------------------------------------------------
// Non-PL "Privacy Policy" page – centralised metadata (loaded from JSON)
// (Legal body content stays in per-locale page files due to complexity)
// ---------------------------------------------------------------------------

export type PrivacyPageMeta = {
  slug: string;
  title: string;
  description: string;
};

import en from '@/data/en/pages/privacy.json';
import de from '@/data/de/pages/privacy.json';
import es from '@/data/es/pages/privacy.json';
import fr from '@/data/fr/pages/privacy.json';
import pt from '@/data/pt/pages/privacy.json';
import it from '@/data/it/pages/privacy.json';
import ro from '@/data/ro/pages/privacy.json';
import nl from '@/data/nl/pages/privacy.json';
import hu from '@/data/hu/pages/privacy.json';
import id from '@/data/id/pages/privacy.json';
import vi from '@/data/vi/pages/privacy.json';
import tr from '@/data/tr/pages/privacy.json';
import tl from '@/data/tl/pages/privacy.json';
import sw from '@/data/sw/pages/privacy.json';
import ms from '@/data/ms/pages/privacy.json';
import cs from '@/data/cs/pages/privacy.json';
import sv from '@/data/sv/pages/privacy.json';
import sq from '@/data/sq/pages/privacy.json';
import da from '@/data/da/pages/privacy.json';
import no from '@/data/no/pages/privacy.json';
import fi from '@/data/fi/pages/privacy.json';
import sk from '@/data/sk/pages/privacy.json';
import hr from '@/data/hr/pages/privacy.json';
import lt from '@/data/lt/pages/privacy.json';
import sl from '@/data/sl/pages/privacy.json';
import el from '@/data/el/pages/privacy.json';
import bg from '@/data/bg/pages/privacy.json';
import ha from '@/data/ha/pages/privacy.json';
import yo from '@/data/yo/pages/privacy.json';
import af from '@/data/af/pages/privacy.json';
import uk from '@/data/uk/pages/privacy.json';
import ceb from '@/data/ceb/pages/privacy.json';
import ig from '@/data/ig/pages/privacy.json';
import hi from '@/data/hi/pages/privacy.json';
import bn from '@/data/bn/pages/privacy.json';

const PRIVACY_META: Partial<Record<Locale, PrivacyPageMeta>> = {
  en,
  de,
  es,
  fr,
  pt,
  it,
  ro,
  nl,
  hu,
  id,
  vi,
  tr,
  tl,
  sw,
  ms,
  cs,
  sv,
  sq,
  da,
  no,
  fi,
  sk,
  hr,
  lt,
  sl,
  el,
  bg,
  ha,
  yo,
  af,
  uk,
  ceb,
  ig,
  hi,
  bn,
};

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

export function getPrivacyPageMeta(locale: Locale): PrivacyPageMeta | null {
  return PRIVACY_META[locale] ?? null;
}

export function getPrivacyAlternates(locale: Locale) {
  const config = LOCALE_CONFIG[locale];
  if (!config.privacyHref) return {};

  const languages: Record<string, string> = {};
  for (const loc of SUPPORTED_LOCALES) {
    const c = LOCALE_CONFIG[loc];
    if (c.privacyHref) {
      languages[c.hreflang] = toAbsoluteUrl(c.privacyHref);
    }
  }
  languages['x-default'] = toAbsoluteUrl(LOCALE_CONFIG.en.privacyHref!);

  return {
    canonical: toAbsoluteUrl(config.privacyHref),
    languages,
  };
}
