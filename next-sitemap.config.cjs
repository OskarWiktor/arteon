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
      priority: loc === '/' ? 1.0 : loc.startsWith('/uslugi/') ? 0.8 : loc.startsWith('/edukacja') ? 0.75 : loc.startsWith('/realizacje') ? 0.6 : 0.7,
      alternateRefs: [],
    };
    const lastmod = ROUTE_LASTMOD.get(loc);
    return lastmod ? { ...base, lastmod } : base;
  },

  additionalPaths: async () => {
    const add = [];

    // Explicitly add all /narzedzia/* routes to ensure they're always in sitemap
    // (next-sitemap may filter routes with file-extension-like patterns, e.g. "favicon-ico")
    for (const [loc, last] of ROUTE_LASTMOD.entries()) {
      if (loc.startsWith('/narzedzia/') && loc !== '/narzedzia') {
        const entry = { loc, changefreq: 'weekly', priority: 0.7 };
        if (last) entry.lastmod = last;
        add.push(entry);
      }
    }

    for (const p of PROJECTS) {
      const loc = `/realizacje/${p.slug}`;
      const iso = (p.updatedAt && parseISO(p.updatedAt)) || projectLastmodFromFiles(p.slug) || ROUTE_LASTMOD.get(loc) || null;

      const entry = { loc, changefreq: 'weekly', priority: 0.6 };
      if (iso) entry.lastmod = iso;
      add.push(entry);
    }

    const seenCategories = new Set();
    for (const [loc, last] of ROUTE_LASTMOD.entries()) {
      if (loc.startsWith('/edukacja/') && loc.split('/').length === 3) {
        const category = loc.split('/')[2];
        if (!seenCategories.has(category)) {
          seenCategories.add(category);
          add.push({ loc, changefreq: 'weekly', priority: 0.75, lastmod: last });
        }
      }
    }

    for (const a of ARTICLES) {
      const cat = primaryCategorySlug(a);
      const loc = `/edukacja/${cat}/${a.slug}`;
      const fromData = parseISO(a.dateModified) || parseISO(a.datePublished);
      const fallback = articleAssetsLastmod(a);
      const lastmod = fromData || fallback;
      const entry = { loc, changefreq: 'weekly', priority: 0.72 };
      if (lastmod) entry.lastmod = lastmod;
      add.push(entry);
    }

    return add;
  },

  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        disallow: ['/_next/', '/api/', '/fonts/', '/favicon.ico', '/*.json$'],
        allow: ['/_next/image'],
      },
    ],
    additionalSitemaps: [],
    transformRobotsTxt: async () => {
      return [
        'User-agent: *',
        'Disallow: /_next/',
        'Allow: /_next/image',
        'Disallow: /api/',
        'Disallow: /fonts/',
        'Disallow: /favicon.ico',
        'Disallow: /*.json$',
        '',
        `Host: ${SITE_URL}`,
        '',
        `Sitemap: ${SITE_URL}/sitemap.xml`,
      ].join('\n');
    },
  },
};
