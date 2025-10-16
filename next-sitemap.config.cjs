/* next-sitemap.config.js */
const fg = require('fast-glob');
const path = require('node:path');
const fs = require('node:fs');
const { execSync } = require('node:child_process');

/** Bezpieczne pobranie daty ostatniego commita Gita dla pliku */
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

/** Fallback: mtime pliku (ISO) */
function fileMTimeISO(filePath) {
  try {
    const stat = fs.statSync(filePath);
    return stat.mtime.toISOString();
  } catch {
    return null;
  }
}

/** Mapowanie ścieżki pliku app/.../page.* -> route */
function toRoute(file) {
  if (file === 'page.tsx' || file === 'page.ts' || file === 'page.mdx') return '/';
  let r = '/' + file.replace(/\\/g, '/').replace(/\/page\.(ts|tsx|mdx)$/, '');
  // usuń grupy route'ów (np. /(pl))
  r = r.replace(/\/\([^/]+\)/g, '');
  // pomiń dynamiczne
  if (/\[.+?\]/.test(r)) return null;
  if (r === '/index') r = '/';
  if (r === '/_not-found' || r === '/api') return null;
  return r;
}

/** Zbuduj mapę: route -> lastmod (ISO) na podstawie Gita/mtime */
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

    const gitDate = gitLastCommitISO(abs);
    const lastmod = gitDate || fileMTimeISO(abs);
    if (lastmod) map.set(route, lastmod);
  }
  return map;
}

/** Spróbuj domyślnie odczytać listę projektów */
function readProjects() {
  try {
    // dostosuj ścieżkę jeśli masz inny katalog z danymi
    const { projects } = require('./data/pl/projects.json');
    return Array.isArray(projects) ? projects : [];
  } catch {
    return [];
  }
}

const ROUTE_LASTMOD = buildRouteLastmodMap();
const PROJECTS = readProjects();

/** Opcjonalnie: mapowanie projektu -> lastmod z repo (jeśli trzymasz pliki treści/MDX per projekt) */
function projectLastmodFromFiles(slug) {
  // Przykładowe heurystyki: MDX treści projektu, JSON, obrazy – weź najnowszy commit z dopasowań
  const candidates = fg.sync(
    [
      `content/projects/${slug}.mdx`,
      `content/projects/${slug}/**/*`,
      `data/pl/projects.json`,
      `public/assets/projects/${slug}/**/*`,
    ],
    { dot: false }
  );

  let newestISO = null;
  for (const rel of candidates) {
    const abs = path.join(process.cwd(), rel);
    const gitDate = gitLastCommitISO(abs) || fileMTimeISO(abs);
    if (gitDate && (!newestISO || new Date(gitDate) > new Date(newestISO))) {
      newestISO = gitDate;
    }
  }
  return newestISO;
}

module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.arteonagency.pl',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  exclude: ['/404', '/500', '/_next/*', '/api/*', '/drafts/*'],

  /**
   * Każdy route: changefreq = 'weekly'.
   * lastmod z mapy Gita/mtime; jeśli brak – nie nadpisujemy.
   */
  transform: async (config, loc) => {
    const base = {
      loc,
      changefreq: 'weekly',
      priority: loc === '/' ? 1.0 : loc.startsWith('/uslugi/') ? 0.8 : loc.startsWith('/realizacje') ? 0.6 : 0.7,
      alternateRefs: [],
    };

    const lastmod = ROUTE_LASTMOD.get(loc);
    return lastmod ? { ...base, lastmod } : base;
  },

  /**
   * Dodatkowe ścieżki:
   * - projekty z /realizacje/[slug] z lastmod z updatedAt, a jeśli brak, z Gita/plików
   * - pozostałe route’y z app/…/page.* które nie weszły automatycznie (gdyby transform ich nie dorzucił)
   */
  additionalPaths: async () => {
    const add = [];

    // Projekty
    for (const p of PROJECTS) {
      const loc = `/realizacje/${p.slug}`;
      const iso =
        (p.updatedAt && new Date(p.updatedAt).toISOString()) ||
        projectLastmodFromFiles(p.slug) ||
        ROUTE_LASTMOD.get(loc) ||
        null;

      const entry = {
        loc,
        changefreq: 'weekly',
        priority: 0.6,
      };
      if (iso) entry.lastmod = iso;
      add.push(entry);
    }

    // Dodatkowe strony z app (upewniamy się, że wszystkie mają sensowne lastmod)
    const appDir = path.join(process.cwd(), 'app');
    const files = await fg(['**/page.{ts,tsx,mdx}'], {
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

    const seen = new Set(add.map((x) => x.loc));
    for (const f of files) {
      const route = toRoute(f);
      if (!route || seen.has(route)) continue;
      seen.add(route);

      const abs = path.join(appDir, f);
      const iso = gitLastCommitISO(abs) || fileMTimeISO(abs);

      const entry = {
        loc: route,
        changefreq: 'weekly',
        priority: route === '/' ? 1.0 : route.startsWith('/uslugi/') ? 0.8 : 0.7,
      };
      if (iso) entry.lastmod = iso;
      add.push(entry);
    }

    return add;
  },
};
