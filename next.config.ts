/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: '/services', destination: '/uslugi', permanent: true },
      { source: '/services/websites', destination: '/uslugi/strony-internetowe', permanent: true },
      { source: '/services/online-stores', destination: '/uslugi/sklepy-internetowe', permanent: true },
      { source: '/services/blogs', destination: '/uslugi/blogi-internetowe', permanent: true },
      { source: '/services/design', destination: '/uslugi/grafika', permanent: true },
      { source: '/services/marketing', destination: '/uslugi/marketing', permanent: true },
      { source: '/services/content', destination: '/uslugi/tworzenie-tresci', permanent: true },

      { source: '/projects', destination: '/realizacje', permanent: true },
      { source: '/projects/:slug', destination: '/realizacje/:slug', permanent: true },

      { source: '/contact', destination: '/kontakt', permanent: true },
      { source: '/offer', destination: '/uslugi', permanent: true },
    ];
  },
};

module.exports = nextConfig;
