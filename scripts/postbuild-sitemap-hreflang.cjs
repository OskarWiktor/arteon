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
};

// ---------------------------------------------------------------------------
// All 10 tools with slugs per locale
// ---------------------------------------------------------------------------
const TOOLS = [
  { pl: 'jpg-png-na-webp-bez-limitu', en: 'jpg-png-to-webp-unlimited', de: 'jpg-png-zu-webp-konverter', es: 'convertidor-jpg-png-a-webp', fr: 'convertisseur-jpg-png-en-webp' },
  { pl: 'edytor-zdjec-online', en: 'online-image-editor', de: 'online-bildeditor', es: 'editor-de-imagenes-en-linea', fr: 'editeur-d-images-en-ligne' },
  { pl: 'darmowy-generator-favicon-ico', en: 'free-favicon-generator', de: 'kostenloser-favicon-generator', es: 'generador-de-favicon-gratuito', fr: 'generateur-de-favicon-gratuit' },
  {
    pl: 'licznik-dlugosci-meta-title-i-description',
    en: 'meta-title-description-length-checker',
    de: 'meta-titel-beschreibung-laengenpruefer',
    es: 'verificador-de-meta-titulo-y-descripcion',
    fr: 'verificateur-meta-titre-et-description',
  },
  { pl: 'licznik-slow-i-znakow', en: 'word-and-character-counter', de: 'wort-und-zeichenzaehler', es: 'contador-de-palabras-y-caracteres', fr: 'compteur-de-mots-et-caracteres' },
  {
    pl: 'darmowy-generator-stopki-mailowej',
    en: 'free-email-signature-generator',
    de: 'kostenloser-e-mail-signatur-generator',
    es: 'generador-de-firma-de-correo-gratuito',
    fr: 'generateur-de-signature-email-gratuit',
  },
  { pl: 'kontrast-i-czytelnosc-kolorow', en: 'color-contrast-checker', de: 'farbkontrast-checker', es: 'comprobador-de-contraste-de-colores', fr: 'verificateur-de-contraste-des-couleurs' },
  { pl: 'ekstraktor-kolorow-z-obrazu', en: 'image-color-extractor', de: 'bild-farbextraktor', es: 'extractor-de-colores-de-imagen', fr: 'extracteur-de-couleurs-d-image' },
  { pl: 'generator-palet-kolorow', en: 'color-palette-generator', de: 'farbpaletten-generator', es: 'generador-de-paletas-de-colores', fr: 'generateur-de-palettes-de-couleurs' },
  { pl: 'darmowy-generator-kodow-qr', en: 'free-qr-code-generator', de: 'kostenloser-qr-code-generator', es: 'generador-de-codigos-qr-gratuito', fr: 'generateur-de-codes-qr-gratuit' },
];

// Non-tool multilingual pages (EN/DE/ES/FR only – PL has its own separate pages)
const MULTILINGUAL_PAGES = [
  { en: '/en/about', de: '/de/ueber-uns', es: '/es/sobre-nosotros', fr: '/fr/a-propos' },
  { en: '/en/contact', de: '/de/kontakt', es: '/es/contacto', fr: '/fr/contact' },
  { en: '/en/privacy-policy', de: '/de/datenschutzrichtlinie', es: '/es/politica-de-privacidad', fr: '/fr/politique-de-confidentialite' },
];

const LOCALES = ['pl', 'en', 'de', 'es', 'fr'];

// ---------------------------------------------------------------------------
// Build lookup: path → array of { hreflang, href }
// ---------------------------------------------------------------------------
const HREFLANG_MAP = new Map();

// Tool index pages (all 5 locales)
for (const lang of LOCALES) {
  const p = LOCALE_TOOLS_BASE[lang];
  const refs = LOCALES.map((l) => ({ hreflang: l, href: `${SITE_URL}${LOCALE_TOOLS_BASE[l]}` }));
  refs.push({ hreflang: 'x-default', href: `${SITE_URL}${LOCALE_TOOLS_BASE.en}` });
  HREFLANG_MAP.set(`${SITE_URL}${p}`, refs);
}

// Individual tool pages (all 5 locales × 10 tools)
for (const tool of TOOLS) {
  for (const lang of LOCALES) {
    const fullUrl = `${SITE_URL}${LOCALE_TOOLS_BASE[lang]}/${tool[lang]}`;
    const refs = LOCALES.map((l) => ({ hreflang: l, href: `${SITE_URL}${LOCALE_TOOLS_BASE[l]}/${tool[l]}` }));
    refs.push({ hreflang: 'x-default', href: `${SITE_URL}${LOCALE_TOOLS_BASE.en}/${tool.en}` });
    HREFLANG_MAP.set(fullUrl, refs);
  }
}

// Non-tool multilingual pages (EN/DE/ES/FR)
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
