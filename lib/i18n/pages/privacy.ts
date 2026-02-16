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
  ro: {
    slug: 'politica-de-confidentialitate',
    title: 'Politica de confiden\u021bialitate \u2013 Arteon instrumente gratuite | Protec\u021bia datelor \u0219i GDPR',
    description:
      'Politica de confiden\u021bialitate pentru instrumentele gratuite Arteon. Toate fi\u0219ierele sunt procesate local \u00een browser. Afla\u021bi cum gestion\u0103m cookie-urile, analiza (GA4) \u0219i publicitatea (AdSense) \u00een conformitate cu GDPR.',
  },
  nl: {
    slug: 'privacybeleid',
    title: 'Privacybeleid \u2013 Arteon gratis online tools | Gegevensbescherming & AVG',
    description:
      'Privacybeleid voor de gratis online tools van Arteon. Alle bestanden worden lokaal in uw browser verwerkt. Lees hoe wij omgaan met cookies, analyses (GA4) en advertenties (AdSense) in overeenstemming met de AVG.',
  },
  hu: {
    slug: 'adatvedelmi-iranyelvek',
    title: 'Adatv\u00e9delmi ir\u00e1nyelv \u2013 Arteon ingyenes online eszk\u00f6z\u00f6k | GDPR',
    description:
      'Az Arteon ingyenes online eszk\u00f6z\u00f6k adatv\u00e9delmi ir\u00e1nyelve. Minden f\u00e1jl helyben, a b\u00f6ng\u00e9sz\u0151j\u00e9ben ker\u00fcl feldolgoz\u00e1sra. Tudja meg, hogyan kezelj\u00fck a s\u00fctiket, az elemz\u00e9seket (GA4) \u00e9s a hirdet\u00e9seket (AdSense) a GDPR-nak megfelel\u0151en.',
  },
  id: {
    slug: 'kebijakan-privasi',
    title: 'Kebijakan Privasi – Arteon Alat Gratis | Perlindungan Data & GDPR',
    description: 'Kebijakan privasi untuk alat gratis Arteon. Semua file diproses secara lokal di browser Anda. Pelajari cara kami menangani cookie, analitik (GA4), dan iklan (AdSense) sesuai GDPR.',
  },
  vi: {
    slug: 'chinh-sach-bao-mat',
    title: 'Chính Sách Bảo Mật – Arteon Công Cụ Miễn Phí | Bảo Vệ Dữ Liệu & GDPR',
    description:
      'Chính sách bảo mật cho các công cụ miễn phí của Arteon. Tất cả file được xử lý cục bộ trên trình duyệt của bạn. Tìm hiểu cách chúng tôi xử lý cookie, phân tích (GA4) và quảng cáo (AdSense) theo GDPR.',
  },
  tr: {
    slug: 'gizlilik-politikasi',
    title: 'Gizlilik Politikası – Arteon Ücretsiz Araçlar | Veri Koruma & KVKK',
    description:
      "Arteon ücretsiz araçları için gizlilik politikası. Tüm dosyalar tarayıcınızda yerel olarak işlenir. Çerezleri, analizleri (GA4) ve reklamcılığı (AdSense) KVKK'ya uygun şekilde nasıl yönettiğimizi öğrenin.",
  },
  tl: {
    slug: 'patakaran-sa-privacy',
    title: 'Patakaran sa Privacy \u2013 Arteon Mga Libreng Tool | Proteksyon ng Data at GDPR',
    description:
      'Patakaran sa privacy para sa mga libreng tool ng Arteon. Lahat ng file ay pinoproseso nang lokal sa browser mo. Alamin kung paano namin pinamamahalaan ang cookies, analytics (GA4) at advertising (AdSense) alinsunod sa GDPR.',
  },
  sw: {
    slug: 'sera-ya-faragha',
    title: 'Sera ya Faragha \u2013 Arteon Zana za Bure | Ulinzi wa Data na GDPR',
    description:
      'Sera ya faragha kwa zana za bure za Arteon. Faili zote zinashughulikiwa ndani ya kivinjari chako. Jifunze jinsi tunavyoshughulikia vidakuzi, uchambuzi (GA4) na matangazo (AdSense) kwa mujibu wa GDPR.',
  },
  ms: {
    slug: 'dasar-privasi',
    title: 'Dasar Privasi \u2013 Arteon Alat Percuma | Perlindungan Data & GDPR',
    description:
      'Dasar privasi untuk alat percuma Arteon. Semua fail diproses secara tempatan dalam pelayar anda. Ketahui cara kami mengendalikan kuki, analitik (GA4) dan pengiklanan (AdSense) mengikut GDPR.',
  },
  cs: {
    slug: 'zasady-ochrany-soukromi',
    title: 'Z\u00e1sady ochrany osobn\u00edch \u00fadaj\u016f \u2013 Arteon bezplatn\u00e9 n\u00e1stroje | GDPR',
    description:
      'Z\u00e1sady ochrany osobn\u00edch \u00fadaj\u016f pro bezplatn\u00e9 n\u00e1stroje Arteon. V\u0161echny soubory se zpracov\u00e1vaj\u00ed lok\u00e1ln\u011b ve va\u0161em prohl\u00ed\u017ee\u010di. Zjist\u011bte, jak nakl\u00e1d\u00e1me s cookies, analytikou (GA4) a reklamou (AdSense) v souladu s GDPR.',
  },
  sv: {
    slug: 'integritetspolicy',
    title: 'Integritetspolicy \u2013 Arteon gratis verktyg | Dataskydd & GDPR',
    description:
      'Integritetspolicy f\u00f6r Arteons gratis verktyg. Alla filer bearbetas lokalt i din webbl\u00e4sare. L\u00e4s hur vi hanterar cookies, analys (GA4) och annonsering (AdSense) i enlighet med GDPR.',
  },
  sq: {
    slug: 'politika-e-privatesise',
    title: 'Politika e Privat\u00ebsis\u00eb \u2013 Arteon Mjete Falas | Mbrojtja e t\u00eb Dh\u00ebnave & GDPR',
    description:
      'Politika e privat\u00ebsis\u00eb p\u00ebr mjetet falas t\u00eb Arteon. T\u00eb gjith\u00eb skedar\u00ebt p\u00ebrpunohen lokalisht n\u00eb shfletuesin tuaj. M\u00ebsoni si i menaxhojm\u00eb cookie-t, analitik\u00ebn (GA4) dhe reklamat (AdSense) n\u00eb p\u00ebrputhje me GDPR.',
  },
  da: {
    slug: 'privatlivspolitik',
    title: 'Privatlivspolitik \u2013 Arteon gratis v\u00e6rkt\u00f8jer | Databeskyttelse & GDPR',
    description:
      'Privatlivspolitik for Arteons gratis v\u00e6rkt\u00f8jer. Alle filer behandles lokalt i din browser. L\u00e6s hvordan vi h\u00e5ndterer cookies, analyse (GA4) og annoncering (AdSense) i overensstemmelse med GDPR.',
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
