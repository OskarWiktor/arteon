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

const TOOL_SLUG_MAP_PL_TO_EN = {
  'jpg-png-na-webp-bez-limitu': 'jpg-png-to-webp-unlimited',
  'edytor-zdjec-online': 'online-image-editor',
  'darmowy-generator-favicon-ico': 'free-favicon-generator',
  'licznik-dlugosci-meta-title-i-description': 'meta-title-description-length-checker',
  'licznik-slow-i-znakow': 'word-and-character-counter',
  'darmowy-generator-stopki-mailowej': 'free-email-signature-generator',
  'sprawdz-czytelnosc-kolorow': 'color-contrast-checker',
  'kontrast-i-czytelnosc-kolorow': 'color-contrast-checker',
  'ekstraktor-kolorow-z-obrazu': 'image-color-extractor',
  'generator-palet-kolorow': 'color-palette-generator',
  'darmowy-generator-kodow-qr': 'free-qr-code-generator',
};
const TOOL_SLUG_MAP_EN_TO_PL = Object.fromEntries(Object.entries(TOOL_SLUG_MAP_PL_TO_EN).map(([pl, en]) => [en, pl]));

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
      priority: loc === '/' ? 1.0 : loc.startsWith('/en/') ? 0.7 : loc.startsWith('/uslugi/') ? 0.8 : loc.startsWith('/edukacja') ? 0.75 : loc.startsWith('/realizacje') ? 0.6 : 0.7,
      alternateRefs: [],
    };
    const lastmod = ROUTE_LASTMOD.get(loc);
    if (lastmod) base.lastmod = lastmod;
    const img = ROUTE_IMAGE.get(loc);
    if (img) base.images = sitemapImage(img);

    // hreflang for PL tool pages
    if (loc === '/narzedzia') {
      base.alternateRefs = [
        { href: `${SITE_URL}/narzedzia`, hreflang: 'pl' },
        { href: `${SITE_URL}/en/tools`, hreflang: 'en' },
      ];
    } else if (loc.startsWith('/narzedzia/')) {
      const plSlug = loc.replace('/narzedzia/', '');
      const enSlug = TOOL_SLUG_MAP_PL_TO_EN[plSlug];
      if (enSlug) {
        base.alternateRefs = [
          { href: `${SITE_URL}${loc}`, hreflang: 'pl' },
          { href: `${SITE_URL}/en/tools/${enSlug}`, hreflang: 'en' },
        ];
      }
    }
    // hreflang for EN tool pages
    if (loc === '/en/tools') {
      base.alternateRefs = [
        { href: `${SITE_URL}/narzedzia`, hreflang: 'pl' },
        { href: `${SITE_URL}/en/tools`, hreflang: 'en' },
      ];
    } else if (loc.startsWith('/en/tools/')) {
      const enSlug = loc.replace('/en/tools/', '');
      const plSlug = TOOL_SLUG_MAP_EN_TO_PL[enSlug];
      if (plSlug) {
        base.alternateRefs = [
          { href: `${SITE_URL}/narzedzia/${plSlug}`, hreflang: 'pl' },
          { href: `${SITE_URL}${loc}`, hreflang: 'en' },
        ];
      }
    }

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

      const priority = loc === '/' ? 1.0 : loc.startsWith('/en/') ? 0.7 : loc.startsWith('/uslugi/') ? 0.8 : loc.startsWith('/edukacja') ? 0.75 : loc.startsWith('/realizacje') ? 0.6 : 0.7;

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
