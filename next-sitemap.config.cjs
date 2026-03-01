const fg = require('fast-glob');
const path = require('node:path');
const fs = require('node:fs');
const { execSync } = require('node:child_process');

function gitLastCommitISO(filePath) {
  try {
    const out = execSync(`git log -1 --format=%cI -- "${filePath}"`, { stdio: ['ignore', 'pipe', 'ignore'] })
      .toString()
      .trim();
    return out || null;
  } catch {
    return null;
  }
}
function fileMTimeISO(filePath) {
  try {
    return fs.statSync(filePath).mtime.toISOString();
  } catch {
    return null;
  }
}
function parseISO(str) {
  if (!str) return null;
  const d = new Date(str);
  return isNaN(d.getTime()) ? null : d.toISOString();
}
function maxISO(list) {
  const arr = list.map(parseISO).filter(Boolean).sort();
  return arr.length ? arr[arr.length - 1] : null;
}
function slugify(input) {
  return String(input)
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

function toRoute(file) {
  if (file === 'page.tsx' || file === 'page.ts' || file === 'page.mdx') return '/';
  let r = '/' + file.replace(/\\/g, '/').replace(/\/page\.(ts|tsx|mdx)$/, '');
  r = r.replace(/\/\([^/]+\)/g, '');
  if (r === '') r = '/'; // Fix: route group at root becomes empty string
  if (/\[.+?\]/.test(r)) return null;
  if (r === '/index') r = '/';
  if (r === '/_not-found' || r === '/api') return null;
  return r;
}
function buildRouteLastmodMap() {
  const appDir = path.join(process.cwd(), 'app');
  const files = fg.sync(['**/page.{ts,tsx,mdx}'], {
    cwd: appDir,
    ignore: ['**/(_*)/**', '**/_*', 'api/**', '**/components/**', '**/shared/**', '**/layout.{ts,tsx}', '_not-found/**', '**/_not-found/**'],
  });

  const map = new Map();
  for (const f of files) {
    const abs = path.join(appDir, f);
    const route = toRoute(f);
    if (!route) continue;
    const gitDate = gitLastCommitISO(abs);
    const lastmod = gitDate || fileMTimeISO(abs);
    if (lastmod) map.set(route, lastmod);
  }
  return map;
}

function readProjects() {
  try {
    const { projects } = require('./data/pl/projects.json');
    return Array.isArray(projects) ? projects : [];
  } catch {
    return [];
  }
}
function projectLastmodFromFiles(slug) {
  const candidates = fg.sync([`content/projects/${slug}.mdx`, `content/projects/${slug}/**/*`, `data/pl/projects.json`, `public/assets/projects/${slug}/**/*`], { dot: false });

  let newest = null;
  for (const rel of candidates) {
    const abs = path.join(process.cwd(), rel);
    const iso = gitLastCommitISO(abs) || fileMTimeISO(abs);
    if (iso && (!newest || new Date(iso) > new Date(newest))) newest = iso;
  }
  return newest;
}

function readBlog() {
  try {
    const blog = require('./data/pl/blog.json');
    return Array.isArray(blog.articles) ? blog.articles : [];
  } catch {
    return [];
  }
}
function primaryCategorySlug(article) {
  const primary = article.primaryCategory || (article.category && article.category[0]) || 'inne';
  return slugify(primary);
}
function articleAssetsLastmod(article) {
  const slug = article.slug;
  const candidates = fg.sync([`content/blog/${slug}.mdx`, `content/blog/${slug}/**/*`, `public/assets/blog/${slug}/**/*`, `data/pl/blog.json`], { dot: false });

  let newest = null;
  for (const rel of candidates) {
    const abs = path.join(process.cwd(), rel);
    const iso = gitLastCommitISO(abs) || fileMTimeISO(abs);
    if (iso && (!newest || new Date(iso) > new Date(newest))) newest = iso;
  }
  return newest;
}

const ROUTE_LASTMOD = buildRouteLastmodMap();
const PROJECTS = readProjects();
const ARTICLES = readBlog();
const SITE_URL = 'https://www.arteonagency.pl';
const IS_PRODUCTION = process.env.VERCEL_ENV === 'production';

// ---------------------------------------------------------------------------
// Full 5-locale hreflang data (mirrors lib/i18n/tool-registry.ts + locales.ts)
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

// Non-tool multilingual pages (all locales except PL which has its own separate pages)
const MULTILINGUAL_PAGES = [
  {
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

// Build a slug→tool lookup for every locale
const SLUG_TO_TOOL = new Map();
for (const tool of TOOLS) {
  for (const [lang, slug] of Object.entries(tool)) {
    SLUG_TO_TOOL.set(`${LOCALE_TOOLS_BASE[lang]}/${slug}`, tool);
  }
}

/** Return alternateRefs (all locales + x-default) for any sitemap loc, or [] if not multilingual */
function getAlternateRefs(loc) {
  const LOCALES = ['pl', 'en', 'de', 'es', 'fr', 'pt', 'it', 'ro', 'nl', 'hu', 'cs', 'sv', 'da', 'no', 'fi', 'el'];

  // Tool index pages
  if (Object.values(LOCALE_TOOLS_BASE).includes(loc)) {
    const refs = LOCALES.map((lang) => ({ href: `${SITE_URL}${LOCALE_TOOLS_BASE[lang]}`, hreflang: lang }));
    refs.push({ href: `${SITE_URL}${LOCALE_TOOLS_BASE.en}`, hreflang: 'x-default' });
    return refs;
  }

  // Individual tool pages
  const tool = SLUG_TO_TOOL.get(loc);
  if (tool) {
    const refs = LOCALES.map((lang) => ({ href: `${SITE_URL}${LOCALE_TOOLS_BASE[lang]}/${tool[lang]}`, hreflang: lang }));
    refs.push({ href: `${SITE_URL}${LOCALE_TOOLS_BASE.en}/${tool.en}`, hreflang: 'x-default' });
    return refs;
  }

  // Non-tool multilingual pages (about, contact, privacy)
  for (const page of MULTILINGUAL_PAGES) {
    if (Object.values(page).includes(loc)) {
      const refs = Object.entries(page).map(([lang, href]) => ({ href: `${SITE_URL}${href}`, hreflang: lang }));
      refs.push({ href: `${SITE_URL}${page.en}`, hreflang: 'x-default' });
      return refs;
    }
  }

  return [];
}

const ROUTE_IMAGE = new Map();

ROUTE_IMAGE.set('/', '/assets/arteon-logo-on-mockup.webp');
ROUTE_IMAGE.set('/uslugi', '/assets/projects/arteon-baners-msc.webp');
ROUTE_IMAGE.set('/uslugi/projekty-graficzne', '/assets/projects/luxnova/teczka-ofertowa-dla-kancelarii-luxnova-mockup.webp');
ROUTE_IMAGE.set('/uslugi/projekty-graficzne/projekt-logo', '/assets/projects/finish-masters/logo-finish-masters-case-study.webp');
ROUTE_IMAGE.set('/uslugi/projekty-graficzne/projekt-wizytowki', '/assets/projects/luxnova/wizytowka-dla-kancelari-luxnova-mockup.webp');
ROUTE_IMAGE.set('/uslugi/projekty-graficzne/projekt-ulotki', '/assets/projects/simba-group/folder-reklamowy-simba-group-przod.webp');
ROUTE_IMAGE.set('/uslugi/projekty-graficzne/projekt-katalogu', '/assets/projects/gazetka-mockup.webp');
ROUTE_IMAGE.set('/uslugi/projekty-graficzne/projekt-cennika', '/assets/projects/cennik-mockup.webp');
ROUTE_IMAGE.set('/uslugi/projekty-graficzne/projekt-papieru-firmowego', '/assets/projects/luxnova/papier-firmowy-dla-kancelarii-luxnova.webp');
ROUTE_IMAGE.set('/uslugi/projekty-graficzne/projekt-teczki-ofertowej', '/assets/projects/luxnova/teczka-ofertowa-dla-kancelarii-luxnova-mockup.webp');
ROUTE_IMAGE.set('/uslugi/projekty-graficzne/projekt-menu-restauracji', '/assets/projects/nocturna/menu-dla-baru-nocturna-mockup.webp');
ROUTE_IMAGE.set(
  '/uslugi/projekty-graficzne/projekt-karty-lojalnosciowej',
  '/assets/blog/czym-jest-social-proof-i-dlaczego-opinie-innych-wplywaja-na-nasze-decyzje/czym-jest-social-proof-i-dlaczego-opinie-innych-wplywaja-na-nasze-decyzje.webp',
);
ROUTE_IMAGE.set('/uslugi/projekty-graficzne/projekt-kuponu-rabatowego-i-vouchera', '/assets/projects/arteon-baner-voucher-gabinet-kosmetyczny-kasia-mockup-2.webp');
ROUTE_IMAGE.set('/uslugi/projekty-graficzne/szablony-postow-media-spolecznosciowe', '/assets/projects/arteon-baner-szablon-social-media-msc-mockup.webp');
ROUTE_IMAGE.set(
  '/uslugi/projekty-graficzne/projekt-identyfikacji-wizualnej',
  '/assets/blog/jak-identyfikacja-wizualna-zwieksza-zaufanie-klientow/jak-identyfikacja-wizualna-zwieksza-zaufanie-klientow.webp',
);
ROUTE_IMAGE.set('/uslugi/projekty-graficzne/projekt-odziezy-firmowej', '/assets/blog/jak-identyfikacja-wizualna-zwieksza-zaufanie-klientow/jak-identyfikacja-wizualna-zwieksza-zaufanie-klientow.webp');
ROUTE_IMAGE.set('/uslugi/projekty-graficzne/projekt-graficzny-strony', '/assets/projects/arteon-baners-msc.webp');
ROUTE_IMAGE.set('/uslugi/tworzenie-stron-wordpress', '/assets/projects/arteon-baners-msc.webp');
ROUTE_IMAGE.set('/uslugi/tworzenie-stron-wordpress/optymalizacja-strony-wordpress', '/assets/projects/arteon-baners-camper-albania-mockup.webp');
ROUTE_IMAGE.set('/uslugi/sklepy-internetowe', '/assets/projects/arteon-baners-trilllizo.webp');
ROUTE_IMAGE.set('/uslugi/blogi-internetowe', '/assets/projects/arteon-baners-msc.webp');
ROUTE_IMAGE.set('/uslugi/tworzenie-tresci', '/assets/blog/czym-jest-content-marketing/czym-jest-content-marketing.webp');
ROUTE_IMAGE.set('/uslugi/marketing', '/assets/projects/arteon-baners-msc.webp');
ROUTE_IMAGE.set('/uslugi/marketing/audyt-seo', '/assets/projects/arteon-baners-msc.webp');
ROUTE_IMAGE.set('/uslugi/marketing/optymalizacja-seo', '/assets/projects/arteon-baners-msc.webp');
ROUTE_IMAGE.set('/uslugi/marketing/pozycjonowanie-stron', '/assets/projects/arteon-baners-msc.webp');
ROUTE_IMAGE.set('/narzedzia', '/assets/arteon-logo-on-mockup.webp');

function sitemapImage(relativePath) {
  if (!relativePath) return undefined;
  const abs = relativePath.startsWith('http') ? relativePath : `${SITE_URL}${relativePath.startsWith('/') ? '' : '/'}${relativePath}`;
  return [{ loc: new URL(abs) }];
}

(function enrichEducationLastmods() {
  for (const a of ARTICLES) {
    const cat = primaryCategorySlug(a);
    const pathLoc = `/edukacja/${cat}/${a.slug}`;
    const fromData = parseISO(a.dateModified) || parseISO(a.datePublished);
    const fallback = articleAssetsLastmod(a);
    const last = fromData || fallback;
    if (last) ROUTE_LASTMOD.set(pathLoc, last);
  }

  const byCat = new Map();
  for (const a of ARTICLES) {
    const datestr = parseISO(a.dateModified) || parseISO(a.datePublished) || articleAssetsLastmod(a);
    const primary = a.primaryCategory || (a.category && a.category[0]);
    const allCats = [primary, ...(a.category || [])].filter(Boolean);
    for (const c of allCats) {
      const s = slugify(c);
      if (!byCat.has(s)) byCat.set(s, []);
      if (datestr) byCat.get(s).push(datestr);
    }
  }
  for (const [cat, list] of byCat.entries()) {
    const last = maxISO(list);
    if (last) ROUTE_LASTMOD.set(`/edukacja/${cat}`, last);
  }

  const allDates = ARTICLES.map((a) => parseISO(a.dateModified) || parseISO(a.datePublished) || articleAssetsLastmod(a)).filter(Boolean);
  const newest = maxISO(allDates);
  if (newest) ROUTE_LASTMOD.set('/edukacja', newest);
})();

module.exports = {
  siteUrl: SITE_URL,
  generateRobotsTxt: true,
  sitemapSize: 7000,
  exclude: ['/404', '/500', '/_next/*', '/api/*', '/drafts/*', '/edukacja/*/*'],

  transform: async (config, loc) => {
    const base = {
      loc,
      changefreq: 'weekly',
      priority:
        loc === '/'
          ? 1.0
          : loc.startsWith('/en/') ||
              loc.startsWith('/de/') ||
              loc.startsWith('/es/') ||
              loc.startsWith('/fr/') ||
              loc.startsWith('/pt/') ||
              loc.startsWith('/it/') ||
              loc.startsWith('/ro/') ||
              loc.startsWith('/nl/') ||
              loc.startsWith('/hu/') ||
              loc.startsWith('/id/') ||
              loc.startsWith('/vi/') ||
              loc.startsWith('/tr/')
            ? 0.7
            : loc.startsWith('/uslugi/')
              ? 0.8
              : loc.startsWith('/edukacja')
                ? 0.75
                : loc.startsWith('/realizacje')
                  ? 0.6
                  : 0.7,
      alternateRefs: [],
    };
    const lastmod = ROUTE_LASTMOD.get(loc);
    if (lastmod) base.lastmod = lastmod;
    const img = ROUTE_IMAGE.get(loc);
    if (img) base.images = sitemapImage(img);

    // hreflang handled by postbuild script (next-sitemap v4 appends loc to alternateRefs.href, incompatible with different slugs per locale)

    return base;
  },

  additionalPaths: async () => {
    const add = [];

    // Add ALL static routes from ROUTE_LASTMOD so sitemap doesn't depend on
    // next-sitemap auto-discovery (broken with Next.js 15 App Router - no prerender-manifest.json).
    for (const [loc, last] of ROUTE_LASTMOD.entries()) {
      // Skip individual article pages - added from ARTICLES data below with cover images
      if (loc.startsWith('/edukacja/') && loc.split('/').length > 3) continue;
      // Skip individual project pages - added from PROJECTS data below with images
      if (loc.startsWith('/realizacje/') && loc !== '/realizacje') continue;

      const priority =
        loc === '/'
          ? 1.0
          : loc.startsWith('/en/') ||
              loc.startsWith('/de/') ||
              loc.startsWith('/es/') ||
              loc.startsWith('/fr/') ||
              loc.startsWith('/pt/') ||
              loc.startsWith('/it/') ||
              loc.startsWith('/ro/') ||
              loc.startsWith('/nl/') ||
              loc.startsWith('/hu/') ||
              loc.startsWith('/id/') ||
              loc.startsWith('/vi/') ||
              loc.startsWith('/tr/')
            ? 0.7
            : loc.startsWith('/uslugi/')
              ? 0.8
              : loc.startsWith('/edukacja')
                ? 0.75
                : loc.startsWith('/realizacje')
                  ? 0.6
                  : 0.7;

      const entry = { loc, changefreq: 'weekly', priority };
      if (last) entry.lastmod = last;
      const img = ROUTE_IMAGE.get(loc);
      if (img) entry.images = sitemapImage(img);

      add.push(entry);
    }

    for (const p of PROJECTS) {
      const loc = `/realizacje/${p.slug}`;
      const iso = (p.updatedAt && parseISO(p.updatedAt)) || projectLastmodFromFiles(p.slug) || ROUTE_LASTMOD.get(loc) || null;

      const entry = { loc, changefreq: 'weekly', priority: 0.6 };
      if (iso) entry.lastmod = iso;
      if (p.image) entry.images = sitemapImage(p.image);
      add.push(entry);
    }

    for (const a of ARTICLES) {
      const cat = primaryCategorySlug(a);
      const loc = `/edukacja/${cat}/${a.slug}`;
      const fromData = parseISO(a.dateModified) || parseISO(a.datePublished);
      const fallback = articleAssetsLastmod(a);
      const lastmod = fromData || fallback;
      const entry = { loc, changefreq: 'weekly', priority: 0.72 };
      if (lastmod) entry.lastmod = lastmod;
      if (a.cover) entry.images = sitemapImage(a.cover);
      add.push(entry);
    }

    return add;
  },

  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        disallow: ['/_next/data/', '/api/', '/fonts/', '/favicon.ico'],
        allow: ['/_next/static/', '/_next/image'],
      },
    ],
    additionalSitemaps: [],
    transformRobotsTxt: async () => {
      return [
        'User-agent: *',
        'Allow: /_next/static/',
        'Allow: /_next/image',
        'Disallow: /_next/data/',
        'Disallow: /api/',
        'Disallow: /fonts/',
        'Disallow: /favicon.ico',
        '',
        `Host: ${SITE_URL}`,
        '',
        `Sitemap: ${SITE_URL}/sitemap.xml`,
      ].join('\n');
    },
  },
};
