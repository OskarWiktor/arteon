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
// All 10 tools with slugs per locale
// ---------------------------------------------------------------------------
const TOOLS = [
  {
    pl: 'konwerter-jpg-na-webp',
    en: 'jpg-to-webp-converter',
    de: 'jpg-zu-webp-konverter',
    es: 'convertidor-jpg-a-webp',
    fr: 'convertisseur-jpg-en-webp',
    pt: 'conversor-jpg-para-webp',
    it: 'convertitore-jpg-in-webp',
    ro: 'convertor-jpg-in-webp',
    nl: 'jpg-naar-webp-converter',
    hu: 'jpg-webp-konverter',
    cs: 'prevodnik-jpg-na-webp',
    sv: 'jpg-till-webp-konverterare',
    da: 'jpg-til-webp-konverter',
    no: 'jpg-til-webp-konverterer',
    fi: 'jpg-webp-muunnin',
    el: 'metatropeas-jpg-se-webp',
  },
  {
    pl: 'konwerter-png-na-webp',
    en: 'png-to-webp-converter',
    de: 'png-zu-webp-konverter',
    es: 'convertidor-png-a-webp',
    fr: 'convertisseur-png-en-webp',
    pt: 'conversor-png-para-webp',
    it: 'convertitore-png-in-webp',
    ro: 'convertor-png-in-webp',
    nl: 'png-naar-webp-converter',
    hu: 'png-webp-konverter',
    cs: 'prevodnik-png-na-webp',
    sv: 'png-till-webp-konverterare',
    da: 'png-til-webp-konverter',
    no: 'png-til-webp-konverterer',
    fi: 'png-webp-muunnin',
    el: 'metatropeas-png-se-webp',
  },
  {
    pl: 'edytor-zdjec-online',
    en: 'online-image-editor',
    de: 'online-bildeditor',
    es: 'editor-de-imagenes-en-linea',
    fr: 'editeur-d-images-en-ligne',
    pt: 'editor-de-imagens-online',
    it: 'editor-di-immagini-online',
    ro: 'editor-de-imagini',
    nl: 'afbeeldingeneditor',
    hu: 'kepszerkeszto',
    cs: 'editor-obrazku',
    sv: 'bildredigerare',
    da: 'billedrediger',
    no: 'bilderedigerer',
    fi: 'kuvaeditori',
    el: 'epexergasia-eikonas',
  },
  {
    pl: 'darmowy-generator-favicon-ico',
    en: 'free-favicon-generator',
    de: 'kostenloser-favicon-generator',
    es: 'generador-de-favicon-gratuito',
    fr: 'generateur-de-favicon-gratuit',
    pt: 'gerador-de-favicon-gratuito',
    it: 'generatore-di-favicon-gratuito',
    ro: 'generator-favicon-gratuit',
    nl: 'gratis-favicon-generator',
    hu: 'ingyenes-favicon-generator',
    cs: 'generator-favicon-zdarma',
    sv: 'gratis-favicon-generator',
    da: 'gratis-favicon-generator',
    no: 'gratis-favicon-generator',
    fi: 'ilmainen-favicon-generaattori',
    el: 'dorean-dimiourgia-favicon',
  },
  {
    pl: 'licznik-dlugosci-meta-title-i-description',
    en: 'meta-title-description-length-checker',
    de: 'meta-titel-beschreibung-laengenpruefer',
    es: 'verificador-de-meta-titulo-y-descripcion',
    fr: 'verificateur-meta-titre-et-description',
    pt: 'verificador-de-meta-titulo-e-descricao',
    it: 'verificatore-meta-titolo-e-descrizione',
    ro: 'verificator-meta-titlu-si-descriere',
    nl: 'meta-titel-beschrijving-checker',
    hu: 'meta-cim-es-leiras-ellenorzo',
    cs: 'kontrola-meta-titulku-a-popisu',
    sv: 'meta-titel-och-beskrivning-kontroll',
    da: 'meta-titel-og-beskrivelse-kontrol',
    no: 'meta-tittel-og-beskrivelse-sjekker',
    fi: 'meta-otsikko-ja-kuvaus-tarkistus',
    el: 'elegkhos-meta-titlou-kai-perigrafis',
  },
  {
    pl: 'licznik-slow-i-znakow',
    en: 'word-and-character-counter',
    de: 'wort-und-zeichenzaehler',
    es: 'contador-de-palabras-y-caracteres',
    fr: 'compteur-de-mots-et-caracteres',
    pt: 'contador-de-palavras-e-caracteres',
    it: 'contatore-di-parole-e-caratteri',
    ro: 'contor-cuvinte-si-caractere',
    nl: 'woorden-en-tekenteller',
    hu: 'szo-es-karakterszamlalo',
    cs: 'pocitadlo-slov-a-znaku',
    sv: 'ord-och-teckenraknare',
    da: 'ord-og-tegntaeller',
    no: 'ord-og-tegnteller',
    fi: 'sana-ja-merkkilaskuri',
    el: 'metritis-lexeon-kai-charaktiron',
  },
  {
    pl: 'darmowy-generator-stopki-mailowej',
    en: 'free-email-signature-generator',
    de: 'kostenloser-e-mail-signatur-generator',
    es: 'generador-de-firma-de-correo-gratuito',
    fr: 'generateur-de-signature-email-gratuit',
    pt: 'gerador-de-assinatura-de-email-gratuito',
    it: 'generatore-di-firma-email-gratuito',
    ro: 'generator-semnatura-email-gratuit',
    nl: 'gratis-e-mailhandtekening-generator',
    hu: 'ingyenes-email-alairas-generator',
    cs: 'generator-podpisu-emailu-zdarma',
    sv: 'gratis-e-postsignatur-generator',
    da: 'gratis-e-mail-signatur-generator',
    no: 'gratis-e-postsignatur-generator',
    fi: 'ilmainen-sahkopostiallekirjoitus-generaattori',
    el: 'dorean-dimiourgia-ypografis-email',
  },
  {
    pl: 'kontrast-i-czytelnosc-kolorow',
    en: 'color-contrast-checker',
    de: 'farbkontrast-checker',
    es: 'comprobador-de-contraste-de-colores',
    fr: 'verificateur-de-contraste-des-couleurs',
    pt: 'verificador-de-contraste-de-cores',
    it: 'verificatore-contrasto-colori',
    ro: 'verificator-contrast-culori',
    nl: 'kleurcontrast-checker',
    hu: 'szinkontraszt-ellenorzo',
    cs: 'kontrola-kontrastu-barev',
    sv: 'fargkontrastkontroll',
    da: 'farvekontrastkontrol',
    no: 'fargekontrastsjekker',
    fi: 'varikontrasti-tarkistus',
    el: 'elegkhos-kontrast-chromaton',
  },
  {
    pl: 'ekstraktor-kolorow-z-obrazu',
    en: 'image-color-extractor',
    de: 'bild-farbextraktor',
    es: 'extractor-de-colores-de-imagen',
    fr: 'extracteur-de-couleurs-d-image',
    pt: 'extrator-de-cores-de-imagem',
    it: 'estrattore-di-colori-da-immagine',
    ro: 'extractor-culori-din-imagine',
    nl: 'kleurextractor-uit-afbeelding',
    hu: 'szinkinyero-kepbol',
    cs: 'extraktor-barev-z-obrazku',
    sv: 'fargextraktor-fran-bild',
    da: 'farveudtraekker-fra-billede',
    no: 'fargeutrekker-fra-bilde',
    fi: 'varien-poiminta-kuvasta',
    el: 'exagogi-chromaton-apo-eikona',
  },
  {
    pl: 'generator-palet-kolorow',
    en: 'color-palette-generator',
    de: 'farbpaletten-generator',
    es: 'generador-de-paletas-de-colores',
    fr: 'generateur-de-palettes-de-couleurs',
    pt: 'gerador-de-paletas-de-cores',
    it: 'generatore-di-palette-di-colori',
    ro: 'generator-de-palete-de-culori',
    nl: 'kleurpalettengenerator',
    hu: 'szinpaletta-generator',
    cs: 'generator-barevnych-palet',
    sv: 'fargpalettgenerator',
    da: 'farvepaletgenerator',
    no: 'fargepalettgenerator',
    fi: 'varipaletti-generaattori',
    el: 'dimiourgia-paletas-chromaton',
  },
  {
    pl: 'darmowy-generator-kodow-qr',
    en: 'free-qr-code-generator',
    de: 'kostenloser-qr-code-generator',
    es: 'generador-de-codigos-qr-gratuito',
    fr: 'generateur-de-codes-qr-gratuit',
    pt: 'gerador-de-codigos-qr-gratuito',
    it: 'generatore-di-codici-qr-gratuito',
    ro: 'generator-coduri-qr-gratuit',
    nl: 'gratis-qr-code-generator',
    hu: 'ingyenes-qr-kod-generator',
    cs: 'generator-qr-kodu-zdarma',
    sv: 'gratis-qr-kodgenerator',
    da: 'gratis-qr-kode-generator',
    no: 'gratis-qr-kode-generator',
    fi: 'ilmainen-qr-koodi-generaattori',
    el: 'dorean-dimiourgia-kodikou-qr',
  },
];

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
