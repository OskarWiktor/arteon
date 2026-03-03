/**
 * Postbuild script: inject xhtml:link hreflang elements into the generated sitemap.
 *
 * next-sitemap v4 treats alternateRefs.href as a prefix and appends the loc path,
 * which breaks for pages with different slugs per locale (e.g. tool pages).
 * This script reads the generated sitemap-0.xml, finds multilingual URLs,
 * and injects the correct <xhtml:link> elements.
 */

const fs = require('node:fs');
const path = require('node:path');

const SITE_URL = 'https://www.arteonagency.pl';

// ---------------------------------------------------------------------------
// Locale tool base paths
// ---------------------------------------------------------------------------
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

// ---------------------------------------------------------------------------
// All tools — dynamically extracted from tool-registry.ts
// Each entry is { pl: '<slug>', en: '<slug>', ... } for every locale that has a slug.
// Tools with empty locales (e.g. deprecated jpgToWebp) are skipped.
// ---------------------------------------------------------------------------
const TOOLS = (() => {
  const registryPath = path.join(__dirname, '..', 'lib', 'i18n', 'tool-registry.ts');
  const lines = fs.readFileSync(registryPath, 'utf8').split('\n');

  const tools = [];
  let currentKey = null;
  let currentSlugs = {};
  let currentLocale = null;

  for (const line of lines) {
    // Detect tool key
    const km = line.match(/key:\s*'(\w+)'/);
    if (km) {
      if (currentKey && Object.keys(currentSlugs).length >= 2) {
        tools.push(currentSlugs);
      }
      currentKey = km[1];
      currentSlugs = {};
      currentLocale = null;
      continue;
    }

    if (!currentKey) continue;

    // Single-line locale: `pl: { slug: 'xxx', title: '...', description: '...' },`
    const singleLine = line.match(/^\s*(\w{2}):\s*\{[^}]*slug:\s*'([^']+)'/);
    if (singleLine) {
      currentSlugs[singleLine[1]] = singleLine[2];
      continue;
    }

    // Multi-line locale opening: `pl: {`
    const localeOpen = line.match(/^\s*(\w{2}):\s*\{\s*$/);
    if (localeOpen) {
      currentLocale = localeOpen[1];
      continue;
    }

    // Multi-line slug: `slug: 'xxx',`
    if (currentLocale) {
      const slugLine = line.match(/^\s*slug:\s*'([^']+)'/);
      if (slugLine) {
        currentSlugs[currentLocale] = slugLine[1];
        currentLocale = null;
      }
    }
  }
  // Flush last tool
  if (currentKey && Object.keys(currentSlugs).length >= 2) {
    tools.push(currentSlugs);
  }

  console.log(`[hreflang] Extracted ${tools.length} tools from tool-registry.ts`);
  return tools;
})();

// Non-tool multilingual pages (including PL for reciprocal hreflang)
// Only active locales (16): pl, en, de, es, fr, pt, it, ro, nl, hu, cs, sv, da, no, fi, el
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

const LOCALES = ['pl', 'en', 'de', 'es', 'fr', 'pt', 'it', 'ro', 'nl', 'hu', 'cs', 'sv', 'da', 'no', 'fi', 'el'];

// ---------------------------------------------------------------------------
// Build lookup: path → array of { hreflang, href }
// ---------------------------------------------------------------------------
const HREFLANG_MAP = new Map();

// Tool index pages (all 16 locales)
for (const lang of LOCALES) {
  const p = LOCALE_TOOLS_BASE[lang];
  const refs = LOCALES.map((l) => ({ hreflang: l, href: `${SITE_URL}${LOCALE_TOOLS_BASE[l]}` }));
  refs.push({ hreflang: 'x-default', href: `${SITE_URL}${LOCALE_TOOLS_BASE.en}` });
  HREFLANG_MAP.set(`${SITE_URL}${p}`, refs);
}

// Individual tool pages (all locales × all tools)
for (const tool of TOOLS) {
  // Only include locales that have a slug for this tool
  const toolLocales = LOCALES.filter((l) => tool[l]);
  for (const lang of toolLocales) {
    const fullUrl = `${SITE_URL}${LOCALE_TOOLS_BASE[lang]}/${tool[lang]}`;
    const refs = toolLocales.map((l) => ({ hreflang: l, href: `${SITE_URL}${LOCALE_TOOLS_BASE[l]}/${tool[l]}` }));
    refs.push({ hreflang: 'x-default', href: `${SITE_URL}${LOCALE_TOOLS_BASE.en}/${tool.en}` });
    HREFLANG_MAP.set(fullUrl, refs);
  }
}

// Non-tool multilingual pages (all locales)
for (const page of MULTILINGUAL_PAGES) {
  for (const [lang, p] of Object.entries(page)) {
    const fullUrl = `${SITE_URL}${p}`;
    const refs = Object.entries(page).map(([l, href]) => ({ hreflang: l, href: `${SITE_URL}${href}` }));
    refs.push({ hreflang: 'x-default', href: `${SITE_URL}${page.en}` });
    HREFLANG_MAP.set(fullUrl, refs);
  }
}

// ---------------------------------------------------------------------------
// Process sitemap XML
// ---------------------------------------------------------------------------
const sitemapPath = path.join(process.cwd(), 'public', 'sitemap-0.xml');

if (!fs.existsSync(sitemapPath)) {
  console.log('[hreflang] sitemap-0.xml not found, skipping.');
  process.exit(0);
}

let xml = fs.readFileSync(sitemapPath, 'utf8');

// Ensure xmlns:xhtml is declared in the urlset tag
if (!xml.includes('xmlns:xhtml=')) {
  xml = xml.replace('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"', '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml"');
}

let injected = 0;

// For each <url>...</url> block, check if the <loc> matches a multilingual page
xml = xml.replace(/<url>([\s\S]*?)<\/url>/g, (match, inner) => {
  const locMatch = inner.match(/<loc>([^<]+)<\/loc>/);
  if (!locMatch) return match;
  const loc = locMatch[1];

  const refs = HREFLANG_MAP.get(loc);
  if (!refs || refs.length === 0) return match;

  // Remove any existing xhtml:link elements (in case of re-run)
  const cleaned = inner.replace(/<xhtml:link[^/]*\/>/g, '');

  const links = refs.map((r) => `<xhtml:link rel="alternate" hreflang="${r.hreflang}" href="${r.href}"/>`).join('');
  injected++;
  return `<url>${cleaned}${links}</url>`;
});

fs.writeFileSync(sitemapPath, xml, 'utf8');
console.log(`[hreflang] Injected hreflang into ${injected} URLs in sitemap-0.xml`);
