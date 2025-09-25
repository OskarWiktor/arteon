/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.arteonagency.pl',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  exclude: [
    '/404', '/500', '/_next/*',
    '/api/*',
    '/drafts/*',
  ],
  transform: async (config, path) => {
    // Priorytety i częstotliwości wg typu ścieżki
    const isHome = path === '/';
    const isServices = path.startsWith('/uslugi/');
    const isProjects = path.startsWith('/realizacje');

    return {
      loc: path,
      changefreq: isHome ? 'daily' : isServices ? 'weekly' : isProjects ? 'monthly' : 'weekly',
      priority: isHome ? 1.0 : isServices ? 0.8 : isProjects ? 0.6 : 0.7,
      lastmod: new Date().toISOString(),
      alternateRefs: [], // dodasz, gdy uruchomisz .com / EN
    };
  },
  // Dodatkowe ścieżki z danych (np. projekty/blog)
  additionalPaths: async (config) => {
    const add = [];
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
    // analogicznie blog, gdy będzie
    return add;
  },
};
