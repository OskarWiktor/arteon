import cs from '@/data/cs/pages/privacy.json';
import de from '@/data/de/pages/privacy.json';
import el from '@/data/el/pages/privacy.json';
import en from '@/data/en/pages/privacy.json';
import es from '@/data/es/pages/privacy.json';
import fi from '@/data/fi/pages/privacy.json';
import fr from '@/data/fr/pages/privacy.json';
import it from '@/data/it/pages/privacy.json';
import nl from '@/data/nl/pages/privacy.json';
import pt from '@/data/pt/pages/privacy.json';
import { LOCALE_CONFIG, SUPPORTED_LOCALES } from '@/lib/i18n/locales';
import type { Locale } from '@/types/locale';
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

const PRIVACY_META: Partial<Record<Locale, PrivacyPageMeta>> = {
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
