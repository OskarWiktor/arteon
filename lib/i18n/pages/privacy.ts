import type { Locale } from '@/types/locale';
import { LOCALE_CONFIG, SUPPORTED_LOCALES } from '@/lib/i18n/locales';
import { toAbsoluteUrl } from '@/utils/absoluteUrl';

// ---------------------------------------------------------------------------
// Non-PL "Privacy Policy" page – centralised metadata & alternates
// (Legal body content stays in per-locale page files due to complexity)
// ---------------------------------------------------------------------------

export type PrivacyPageMeta = {
  slug: string;
  title: string;
  description: string;
};

const PRIVACY_META: Partial<Record<Locale, PrivacyPageMeta>> = {
  en: {
    slug: 'privacy-policy',
    title: 'Privacy Policy – Arteon Free Online Tools | Data Protection & GDPR',
    description:
      'Privacy policy for Arteon free online tools. All files are processed locally in your browser. Learn how we handle cookies, analytics (GA4) and advertising (AdSense) in compliance with GDPR.',
  },
  de: {
    slug: 'datenschutzrichtlinie',
    title: 'Datenschutzrichtlinie – Arteon kostenlose Online-Tools | DSGVO',
    description:
      'Datenschutzrichtlinie für die kostenlosen Online-Tools von Arteon. Alle Dateien werden lokal in Ihrem Browser verarbeitet. Erfahren Sie, wie wir Cookies, Analysen (GA4) und Werbung (AdSense) DSGVO-konform handhaben.',
  },
  es: {
    slug: 'politica-de-privacidad',
    title: 'Política de privacidad – Arteon herramientas online gratuitas | RGPD',
    description:
      'Política de privacidad de las herramientas online gratuitas de Arteon. Todos los archivos se procesan localmente en su navegador. Conozca cómo gestionamos cookies, análisis (GA4) y publicidad (AdSense) conforme al RGPD.',
  },
  fr: {
    slug: 'politique-de-confidentialite',
    title: 'Politique de confidentialité – Arteon outils en ligne gratuits | RGPD',
    description:
      'Politique de confidentialité des outils en ligne gratuits d\u2019Arteon. Tous les fichiers sont traités localement dans votre navigateur. Découvrez comment nous gérons les cookies, les analyses (GA4) et la publicité (AdSense) conformément au RGPD.',
  },
  it: {
    slug: 'informativa-sulla-privacy',
    title: 'Informativa sulla privacy – Arteon strumenti online gratuiti | GDPR',
    description:
      'Informativa sulla privacy degli strumenti online gratuiti di Arteon. Tutti i file vengono elaborati localmente nel tuo browser. Scopri come gestiamo cookie, analisi (GA4) e pubblicit\u00e0 (AdSense) in conformit\u00e0 con il GDPR.',
  },
  pt: {
    slug: 'politica-de-privacidade',
    title: 'Política de Privacidade – Arteon ferramentas online gratuitas | RGPD',
    description:
      'Política de privacidade das ferramentas online gratuitas da Arteon. Todos os ficheiros são processados localmente no seu navegador. Saiba como gerimos cookies, análises (GA4) e publicidade (AdSense) em conformidade com o RGPD.',
  },
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
  // PL privacy page exists at /polityka-prywatnosci
  languages['pl'] = toAbsoluteUrl('/polityka-prywatnosci');
  languages['x-default'] = toAbsoluteUrl(LOCALE_CONFIG.en.privacyHref!);

  return {
    canonical: toAbsoluteUrl(config.privacyHref),
    languages,
  };
}
