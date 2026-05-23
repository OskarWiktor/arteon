const fg = require('fast-glob');
const path = require('node:path');
const fs = require('node:fs');
const { execSync } = require('node:child_process');
const {
  SITE_URL,
  LOCALES,
  LOCALE_TOOLS_BASE,
  LOCALE_TO_HREFLANG,
  MULTILINGUAL_PAGES,
  buildToolLocalePathsMap,
} = require('./lib/sitemap-locale-config.cjs');

function gitLastCommitISO(filePath) {
  try {
    const out = execSync(`git log -1 --format=%cI -- "${filePath}"`, {
      stdio: ['ignore', 'pipe', 'ignore'],
    })
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
/**
 * For tool pages, extract the JSON data import path from page.tsx.
 * Returns the absolute path to the JSON data file, or null.
 */
function extractToolDataFile(pageTsxPath) {
  try {
    const src = fs.readFileSync(pageTsxPath, 'utf8');
    // Match: import data from '@/data/en/tools/converter-avif-to-jpg.json';
    const m = src.match(/from\s+['"]@\/data\/([^'"]+\.json)['"]/);
    if (!m) return null;
    return path.join(process.cwd(), 'data', m[1]);
  } catch {
    return null;
  }
}

function buildRouteLastmodMap() {
  const appDir = path.join(process.cwd(), 'app');
  const files = fg.sync(['**/page.{ts,tsx,mdx}'], {
    cwd: appDir,
    ignore: [
      '**/(_*)/**',
      '**/_*',
      'api/**',
      '**/components/**',
      '**/shared/**',
      '**/layout.{ts,tsx}',
      '_not-found/**',
      '**/_not-found/**',
    ],
  });

  const map = new Map();
  for (const f of files) {
    const abs = path.join(appDir, f);
    const route = toRoute(f);
    if (!route) continue;

    // For tool pages: use the JSON data file's git date (content source)
    // instead of page.tsx git date (code wrapper that changes on refactors).
    const dataFile = extractToolDataFile(abs);
    let lastmod;
    if (dataFile && fs.existsSync(dataFile)) {
      lastmod = gitLastCommitISO(dataFile) || fileMTimeISO(dataFile);
    } else {
      lastmod = gitLastCommitISO(abs) || fileMTimeISO(abs);
    }

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
  const candidates = fg.sync(
    [
      `content/projects/${slug}.mdx`,
      `content/projects/${slug}/**/*`,
      `data/pl/projects.json`,
      `public/assets/projects/${slug}/**/*`,
    ],
    { dot: false },
  );

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
    const blogDir = path.join(process.cwd(), 'data', 'pl', 'blog');
    const catFiles = fs
      .readdirSync(blogDir)
      .filter(f => f.endsWith('.json') && f !== '_index.json');
    const all = [];
    for (const f of catFiles) {
      const data = JSON.parse(fs.readFileSync(path.join(blogDir, f), 'utf8'));
      all.push(...(data.articles || []));
    }
    return all;
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
  const candidates = fg.sync(
    [
      `content/blog/${slug}.mdx`,
      `content/blog/${slug}/**/*`,
      `public/assets/blog/${slug}/**/*`,
      `data/pl/blog/*.json`,
    ],
    { dot: false },
  );

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
const IS_PROD = process.env.VERCEL_ENV === 'production' || process.env.NODE_ENV === 'production';

// ---------------------------------------------------------------------------
// Locale data imported from single source of truth: lib/sitemap-locale-config.cjs
// ---------------------------------------------------------------------------
const TOOL_LOCALE_PATHS = buildToolLocalePathsMap();
const PATH_TO_TOOL_KEY = new Map();
for (const [key, localePaths] of TOOL_LOCALE_PATHS.entries()) {
  for (const lpath of Object.values(localePaths)) {
    PATH_TO_TOOL_KEY.set(lpath, key);
  }
}

// Locale homepage paths that permanentRedirect — must not appear in sitemap
const REDIRECT_LOCALE_ROOTS = new Set([
  '/en',
  '/de',
  '/es',
  '/fr',
  '/pt',
  '/it',
  '/ro',
  '/nl',
  '/hu',
  '/cs',
  '/sv',
  '/da',
  '/no',
  '/fi',
  '/el',
]);

/** Return alternateRefs (all locales + x-default) for any sitemap loc, or [] if not multilingual */
function getAlternateRefs(loc) {
  // PL homepage — only claim the PL locale; other locales redirect so no true equivalent
  if (loc === '/') {
    return [
      { href: `${SITE_URL}/`, hreflang: 'pl', hrefIsAbsolute: true },
      { href: `${SITE_URL}${LOCALE_TOOLS_BASE.en}`, hreflang: 'x-default', hrefIsAbsolute: true },
    ];
  }

  // Tool index pages
  if (Object.values(LOCALE_TOOLS_BASE).includes(loc)) {
    const refs = LOCALES.map(lang => ({
      href: `${SITE_URL}${LOCALE_TOOLS_BASE[lang]}`,
      hreflang: LOCALE_TO_HREFLANG[lang],
      hrefIsAbsolute: true,
    }));
    refs.push({
      href: `${SITE_URL}${LOCALE_TOOLS_BASE.en}`,
      hreflang: 'x-default',
      hrefIsAbsolute: true,
    });
    return refs;
  }

  // Individual tool pages — dynamic lookup covering all 92 tools × 16 locales
  const toolKey = PATH_TO_TOOL_KEY.get(loc);
  if (toolKey) {
    const localePaths = TOOL_LOCALE_PATHS.get(toolKey);
    const refs = Object.entries(localePaths).map(([lang, href]) => ({
      href: `${SITE_URL}${href}`,
      hreflang: LOCALE_TO_HREFLANG[lang] || lang,
      hrefIsAbsolute: true,
    }));
    const enPath = localePaths['en'];
    if (enPath)
      refs.push({ href: `${SITE_URL}${enPath}`, hreflang: 'x-default', hrefIsAbsolute: true });
    return refs;
  }

  // Non-tool multilingual pages (about, contact, privacy, terms)
  for (const page of MULTILINGUAL_PAGES) {
    if (Object.values(page).includes(loc)) {
      const refs = Object.entries(page).map(([lang, href]) => ({
        href: `${SITE_URL}${href}`,
        hreflang: LOCALE_TO_HREFLANG[lang] || lang,
        hrefIsAbsolute: true,
      }));
      refs.push({ href: `${SITE_URL}${page.en}`, hreflang: 'x-default', hrefIsAbsolute: true });
      return refs;
    }
  }

  return [];
}

// ---------------------------------------------------------------------------
// Priority & changefreq classification
// ---------------------------------------------------------------------------
const LOCALE_PREFIXES = [
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
const TOOLS_BASE_PATHS = Object.values(LOCALE_TOOLS_BASE);

function isToolPage(loc) {
  if (TOOLS_BASE_PATHS.includes(loc)) return true;
  for (const base of TOOLS_BASE_PATHS) {
    if (loc.startsWith(base + '/')) return true;
  }
  return false;
}

function isServicePage(loc) {
  return loc.startsWith('/uslugi');
}

function isArticlePage(loc) {
  return loc.startsWith('/edukacja');
}

function isProjectPage(loc) {
  return loc.startsWith('/realizacje');
}

function getPagePriority(loc) {
  if (loc === '/') return 1.0;
  if (isToolPage(loc)) return 0.9;
  if (isServicePage(loc)) return 0.8;
  if (isArticlePage(loc)) return 0.7;
  if (isProjectPage(loc)) return 0.5;
  return 0.4;
}

function getPageChangefreq(loc) {
  if (loc === '/') return 'daily';
  // Tools index pages
  if (TOOLS_BASE_PATHS.includes(loc)) return 'daily';
  if (isToolPage(loc)) return 'weekly';
  if (isServicePage(loc)) return 'weekly';
  if (isArticlePage(loc)) return 'monthly';
  if (isProjectPage(loc)) return 'monthly';
  // Legal pages, about, contact, etc.
  return 'monthly';
}

const ROUTE_IMAGE = new Map();

ROUTE_IMAGE.set('/', '/assets/arteon-logo-on-mockup.webp');
ROUTE_IMAGE.set('/uslugi', '/assets/projects/arteon-baners-msc.webp');
ROUTE_IMAGE.set(
  '/uslugi/projekty-graficzne',
  '/assets/projects/luxnova/teczka-ofertowa-dla-kancelarii-luxnova-mockup.webp',
);
ROUTE_IMAGE.set(
  '/uslugi/projekty-graficzne/projekt-logo',
  '/assets/projects/finish-masters/logo-finish-masters-case-study.webp',
);
ROUTE_IMAGE.set(
  '/uslugi/projekty-graficzne/projekt-wizytowki',
  '/assets/projects/luxnova/wizytowka-dla-kancelari-luxnova-mockup.webp',
);
ROUTE_IMAGE.set(
  '/uslugi/projekty-graficzne/projekt-ulotki',
  '/assets/projects/simba-group/folder-reklamowy-simba-group-przod.webp',
);
ROUTE_IMAGE.set(
  '/uslugi/projekty-graficzne/projekt-katalogu',
  '/assets/projects/gazetka-mockup.webp',
);
ROUTE_IMAGE.set(
  '/uslugi/projekty-graficzne/projekt-cennika',
  '/assets/projects/cennik-mockup.webp',
);
ROUTE_IMAGE.set(
  '/uslugi/projekty-graficzne/projekt-papieru-firmowego',
  '/assets/projects/luxnova/papier-firmowy-dla-kancelarii-luxnova.webp',
);
ROUTE_IMAGE.set(
  '/uslugi/projekty-graficzne/projekt-teczki-ofertowej',
  '/assets/projects/luxnova/teczka-ofertowa-dla-kancelarii-luxnova-mockup.webp',
);
ROUTE_IMAGE.set(
  '/uslugi/projekty-graficzne/projekt-menu-restauracji',
  '/assets/projects/nocturna/menu-dla-baru-nocturna-mockup.webp',
);
ROUTE_IMAGE.set(
  '/uslugi/projekty-graficzne/projekt-karty-lojalnosciowej',
  '/assets/blog/czym-jest-social-proof-i-dlaczego-opinie-innych-wplywaja-na-nasze-decyzje/czym-jest-social-proof-i-dlaczego-opinie-innych-wplywaja-na-nasze-decyzje.webp',
);
ROUTE_IMAGE.set(
  '/uslugi/projekty-graficzne/projekt-kuponu-rabatowego-i-vouchera',
  '/assets/projects/arteon-baner-voucher-gabinet-kosmetyczny-kasia-mockup-2.webp',
);
ROUTE_IMAGE.set(
  '/uslugi/projekty-graficzne/szablony-postow-media-spolecznosciowe',
  '/assets/projects/arteon-baner-szablon-social-media-msc-mockup.webp',
);
ROUTE_IMAGE.set(
  '/uslugi/projekty-graficzne/projekt-identyfikacji-wizualnej',
  '/assets/blog/jak-identyfikacja-wizualna-zwieksza-zaufanie-klientow/jak-identyfikacja-wizualna-zwieksza-zaufanie-klientow.webp',
);
ROUTE_IMAGE.set(
  '/uslugi/projekty-graficzne/projekt-odziezy-firmowej',
  '/assets/blog/jak-identyfikacja-wizualna-zwieksza-zaufanie-klientow/jak-identyfikacja-wizualna-zwieksza-zaufanie-klientow.webp',
);
ROUTE_IMAGE.set(
  '/uslugi/projekty-graficzne/projekt-graficzny-strony',
  '/assets/projects/arteon-baners-msc.webp',
);
ROUTE_IMAGE.set('/uslugi/tworzenie-stron-wordpress', '/assets/projects/arteon-baners-msc.webp');
ROUTE_IMAGE.set(
  '/uslugi/tworzenie-stron-wordpress/optymalizacja-strony-wordpress',
  '/assets/projects/arteon-baners-camper-albania-mockup.webp',
);
ROUTE_IMAGE.set('/uslugi/sklepy-internetowe', '/assets/projects/arteon-baners-trilllizo.webp');
ROUTE_IMAGE.set('/uslugi/blogi-internetowe', '/assets/projects/arteon-baners-msc.webp');
ROUTE_IMAGE.set(
  '/uslugi/tworzenie-tresci',
  '/assets/blog/czym-jest-content-marketing/czym-jest-content-marketing.webp',
);
ROUTE_IMAGE.set('/uslugi/marketing', '/assets/projects/arteon-baners-msc.webp');
ROUTE_IMAGE.set('/uslugi/marketing/audyt-seo', '/assets/projects/arteon-baners-msc.webp');
ROUTE_IMAGE.set('/uslugi/marketing/optymalizacja-seo', '/assets/projects/arteon-baners-msc.webp');
ROUTE_IMAGE.set(
  '/uslugi/marketing/pozycjonowanie-stron',
  '/assets/projects/arteon-baners-msc.webp',
);
ROUTE_IMAGE.set('/narzedzia', '/assets/arteon-logo-on-mockup.webp');

function sitemapImage(relativePath) {
  if (!relativePath) return undefined;
  const abs = relativePath.startsWith('http')
    ? relativePath
    : `${SITE_URL}${relativePath.startsWith('/') ? '' : '/'}${relativePath}`;
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
    const datestr =
      parseISO(a.dateModified) || parseISO(a.datePublished) || articleAssetsLastmod(a);
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

  const allDates = ARTICLES.map(
    a => parseISO(a.dateModified) || parseISO(a.datePublished) || articleAssetsLastmod(a),
  ).filter(Boolean);
  const newest = maxISO(allDates);
  if (newest) ROUTE_LASTMOD.set('/edukacja', newest);
})();

module.exports = {
  siteUrl: SITE_URL,
  generateRobotsTxt: true,
  sitemapSize: 7000,
  exclude: ['/404', '/500', '/_next/*', '/api/*', '/drafts/*', '/edukacja/*/*'],

  transform: async (config, loc) => {
    // Skip locale root pages that permanentRedirect — they return 301 and must not be in sitemap
    if (REDIRECT_LOCALE_ROOTS.has(loc)) return null;

    const base = {
      loc,
      changefreq: getPageChangefreq(loc),
      priority: getPagePriority(loc),
      alternateRefs: getAlternateRefs(loc),
    };
    const lastmod = ROUTE_LASTMOD.get(loc);
    if (lastmod) base.lastmod = lastmod;
    const img = ROUTE_IMAGE.get(loc);
    if (img) base.images = sitemapImage(img);

    return base;
  },

  additionalPaths: async () => {
    const add = [];

    // Add ALL static routes from ROUTE_LASTMOD so sitemap doesn't depend on
    // next-sitemap auto-discovery (broken with Next.js 15 App Router - no prerender-manifest.json).
    for (const [loc, last] of ROUTE_LASTMOD.entries()) {
      // Skip locale root pages that permanentRedirect (301)
      if (REDIRECT_LOCALE_ROOTS.has(loc)) continue;
      // Skip individual article pages - added from ARTICLES data below with cover images
      if (loc.startsWith('/edukacja/') && loc.split('/').length > 3) continue;
      // Skip individual project pages - added from PROJECTS data below with images
      if (loc.startsWith('/realizacje/') && loc !== '/realizacje') continue;

      const entry = {
        loc,
        changefreq: getPageChangefreq(loc),
        priority: getPagePriority(loc),
        alternateRefs: getAlternateRefs(loc),
      };
      if (last) entry.lastmod = last;
      const img = ROUTE_IMAGE.get(loc);
      if (img) entry.images = sitemapImage(img);

      add.push(entry);
    }

    // Add ALL tool pages explicitly from TOOL_LOCALE_PATHS — do not rely on
    // next-sitemap auto-discovery which can silently drop pages (e.g. favicon tool).
    for (const [, localePaths] of TOOL_LOCALE_PATHS.entries()) {
      for (const [lang, toolPath] of Object.entries(localePaths)) {
        const loc = toolPath;
        // Skip if already added from ROUTE_LASTMOD
        if (add.some(e => e.loc === loc)) continue;
        const entry = {
          loc,
          changefreq: 'weekly',
          priority: 0.9,
          alternateRefs: getAlternateRefs(loc),
        };
        const lastmod = ROUTE_LASTMOD.get(loc);
        if (lastmod) entry.lastmod = lastmod;
        add.push(entry);
      }
    }

    for (const p of PROJECTS) {
      const loc = `/realizacje/${p.slug}`;
      const iso =
        (p.updatedAt && parseISO(p.updatedAt)) ||
        projectLastmodFromFiles(p.slug) ||
        ROUTE_LASTMOD.get(loc) ||
        null;

      const entry = { loc, changefreq: getPageChangefreq(loc), priority: getPagePriority(loc) };
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
      const entry = { loc, changefreq: getPageChangefreq(loc), priority: getPagePriority(loc) };
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
        '# AI search crawlers — allowed (enables citation in AI Overviews)',
        'User-agent: GPTBot',
        'Allow: /',
        '',
        'User-agent: Google-Extended',
        'Allow: /',
        '',
        'User-agent: ChatGPT-User',
        'Allow: /',
        '',
        'User-agent: Applebot-Extended',
        'Allow: /',
        '',
        'User-agent: anthropic-ai',
        'Allow: /',
        '',
        'User-agent: ClaudeBot',
        'Allow: /',
        '',
        'User-agent: PerplexityBot',
        'Allow: /',
        '',
        'User-agent: cohere-ai',
        'Allow: /',
        '',
        '# Unwanted AI training crawlers — blocked',
        'User-agent: Bytespider',
        'Disallow: /',
        '',
        'User-agent: CCBot',
        'Disallow: /',
        '',
        `Host: ${SITE_URL}`,
        '',
        `Sitemap: ${SITE_URL}/sitemap.xml`,
      ].join('\n');
    },
  },
};
