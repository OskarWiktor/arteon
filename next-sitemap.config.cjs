const fg = require('fast-glob');
const path = require('node:path');

module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.arteonagency.pl',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  exclude: ['/404','/500','/_next/*','/api/*','/drafts/*'],
  transform: async (config, p) => {
    const isHome = p === '/';
    const isServices = p.startsWith('/uslugi/');
    const isProjects = p.startsWith('/realizacje');
    return {
      loc: p,
      changefreq: isHome ? 'daily' : isServices ? 'weekly' : isProjects ? 'monthly' : 'weekly',
      priority: isHome ? 1.0 : isServices ? 0.8 : isProjects ? 0.6 : 0.7,
      lastmod: new Date().toISOString(),
      alternateRefs: [],
    };
  },

  additionalPaths: async () => {
    const add = [];

    // 1) Projekty z danych
    try {
      const { projects } = require('./data/pl/projects.json');
      for (const p of projects ?? []) {
        add.push({
          loc: `/realizacje/${p.slug}`,
          changefreq: 'monthly',
          priority: 0.6,
          lastmod: (p.updatedAt ? new Date(p.updatedAt) : new Date()).toISOString(),
        });
      }
    } catch {}

    // 2) Skan app/ – dorzucamy też SSR
    const appDir = path.join(process.cwd(), 'app');
    const files = await fg(['**/page.{ts,tsx,mdx}'], {
      cwd: appDir,
      ignore: [
        '**/(_*)/**',          // grupy routingu (np. (pl))
        '**/_*',
        'api/**',
        '**/components/**',
        '**/shared/**',
        '**/layout.{ts,tsx}',
        '_not-found/**',
        '**/_not-found/**',
      ],
    });

    const toRoute = (file) => {
      // root
      if (file === 'page.tsx' || file === 'page.mdx' || file === 'page.ts') return '/';

      let r = '/' + file.replace(/\\/g, '/').replace(/\/page\.(ts|tsx|mdx)$/, '');
      // usuń grupy routingu /(…)
      r = r.replace(/\/\([^/]+\)/g, '');
      // pomiń segmenty dynamiczne
      if (/\[.+?\]/.test(r)) return null;
      // index safety
      if (r === '/index') r = '/';
      // wykluczki
      if (r === '/_not-found' || r === '/api') return null;
      return r;
    };

    const seen = new Set(add.map(x => x.loc));
    for (const f of files) {
      const route = toRoute(f);
      if (!route) continue;
      if (seen.has(route)) continue;
      seen.add(route);
      add.push({
        loc: route,
        changefreq: route === '/' ? 'daily' : route.startsWith('/uslugi/') ? 'weekly' : 'weekly',
        priority: route === '/' ? 1.0 : route.startsWith('/uslugi/') ? 0.8 : 0.7,
        lastmod: new Date().toISOString(),
      });
    }

    return add;
  },
};
