/**
 * Single source of truth for locale configuration used by sitemap scripts.
 *
 * Consumed by:
 *   - next-sitemap.config.cjs  (build-time sitemap generation)
 *   - scripts/postbuild-sitemap-hreflang.cjs  (post-build sitemap splitting)
 *
 * Canonical TypeScript source: lib/i18n/locales.ts
 * This CJS mirror exists because both consumers run in Node CJS context (not TS).
 * When adding/changing locales, update BOTH this file and lib/i18n/locales.ts.
 */

const fs = require('node:fs');
const path = require('node:path');

const SITE_URL = 'https://www.arteonagency.pl';

const LOCALES = [
  'pl',
  'en',
  'de',
  'es',
  'fr',
  'pt',
  'it',
  'ro',
  'nl',
  'hu',
  'cs',
  'sv',
  'da',
  'no',
  'fi',
  'el',
];

const LOCALE_TOOLS_BASE = {
  pl: '/narzedzia',
  en: '/en/tools',
  de: '/de/werkzeuge',
  es: '/es/herramientas',
  fr: '/fr/outils',
  pt: '/pt/ferramentas',
  it: '/it/strumenti',
  ro: '/ro/instrumente',
  nl: '/nl/tools',
  hu: '/hu/eszkozok',
  cs: '/cs/nastroje',
  sv: '/sv/verktyg',
  da: '/da/vaerktojer',
  no: '/no/verktoy',
  fi: '/fi/tyokalut',
  el: '/el/ergaleia',
};

const LOCALE_TO_HREFLANG = {
  pl: 'pl',
  en: 'en',
  de: 'de',
  es: 'es',
  fr: 'fr',
  pt: 'pt',
  it: 'it',
  ro: 'ro',
  nl: 'nl',
  hu: 'hu',
  cs: 'cs',
  sv: 'sv',
  da: 'da',
  no: 'no',
  fi: 'fi',
  el: 'el',
};

const MULTILINGUAL_PAGES = [
  {
    pl: '/o-nas',
    en: '/en/about',
    de: '/de/ueber-uns',
    es: '/es/sobre-nosotros',
    fr: '/fr/a-propos',
    pt: '/pt/sobre-nos',
    it: '/it/chi-siamo',
    ro: '/ro/despre-noi',
    nl: '/nl/over-ons',
    hu: '/hu/rolunk',
    cs: '/cs/o-nas',
    sv: '/sv/om-oss',
    da: '/da/om-os',
    no: '/no/om-oss',
    fi: '/fi/tietoa-meista',
    el: '/el/sxetika-me-emas',
  },
  {
    pl: '/kontakt',
    en: '/en/contact',
    de: '/de/kontakt',
    es: '/es/contacto',
    fr: '/fr/contact',
    pt: '/pt/contacto',
    it: '/it/contatto',
    ro: '/ro/contact',
    nl: '/nl/contact',
    hu: '/hu/kapcsolat',
    cs: '/cs/kontakt',
    sv: '/sv/kontakt',
    da: '/da/kontakt',
    no: '/no/kontakt',
    fi: '/fi/yhteystiedot',
    el: '/el/epikoinonia',
  },
  {
    pl: '/polityka-prywatnosci',
    en: '/en/privacy-policy',
    de: '/de/datenschutzrichtlinie',
    es: '/es/politica-de-privacidad',
    fr: '/fr/politique-de-confidentialite',
    pt: '/pt/politica-de-privacidade',
    it: '/it/informativa-sulla-privacy',
    ro: '/ro/politica-de-confidentialitate',
    nl: '/nl/privacybeleid',
    hu: '/hu/adatvedelmi-iranyelvek',
    cs: '/cs/zasady-ochrany-soukromi',
    sv: '/sv/integritetspolicy',
    da: '/da/privatlivspolitik',
    no: '/no/personvernpolicy',
    fi: '/fi/tietosuojakaytanto',
    el: '/el/politiki-aporritou',
  },
  {
    pl: '/regulamin',
    en: '/en/terms-of-service',
    de: '/de/nutzungsbedingungen',
    es: '/es/terminos-de-servicio',
    fr: '/fr/conditions-utilisation',
    pt: '/pt/termos-de-servico',
    it: '/it/termini-di-servizio',
    ro: '/ro/termeni-si-conditii',
    nl: '/nl/gebruiksvoorwaarden',
    hu: '/hu/felhasznalasi-feltetelek',
    cs: '/cs/podminky-pouzivani',
    sv: '/sv/anvandarvillkor',
    da: '/da/brugsvilkar',
    no: '/no/bruksvilkar',
    fi: '/fi/kayttoehdot',
    el: '/el/oroi-chrisis',
  },
];

/**
 * Build a map of toolKey → { locale: metadata.path } by reading every tool JSON
 * from data/{locale}/tools/*.json. Covers all 92 tools x 16 locales automatically.
 */
function buildToolLocalePathsMap() {
  const byKey = new Map();
  for (const locale of LOCALES) {
    const dir = path.join(process.cwd(), 'data', locale, 'tools');
    if (!fs.existsSync(dir)) continue;
    const files = fs.readdirSync(dir).filter(f => f.endsWith('.json'));
    for (const file of files) {
      try {
        const data = JSON.parse(fs.readFileSync(path.join(dir, file), 'utf8'));
        if (!data.toolKey || !data.metadata?.path) continue;
        if (!byKey.has(data.toolKey)) byKey.set(data.toolKey, {});
        byKey.get(data.toolKey)[locale] = data.metadata.path;
      } catch {
        /* skip malformed files */
      }
    }
  }
  return byKey;
}

/**
 * Build reverse map: path → toolKey (for O(1) lookup)
 */
function buildPathToToolKey(toolLocalePathsMap) {
  const map = new Map();
  for (const [key, localePaths] of toolLocalePathsMap.entries()) {
    for (const lpath of Object.values(localePaths)) {
      map.set(lpath, key);
    }
  }
  return map;
}

module.exports = {
  SITE_URL,
  LOCALES,
  LOCALE_TOOLS_BASE,
  LOCALE_TO_HREFLANG,
  MULTILINGUAL_PAGES,
  buildToolLocalePathsMap,
  buildPathToToolKey,
};
