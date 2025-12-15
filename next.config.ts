import type { NextConfig } from 'next';

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  async headers() {
    if (process.env.VERCEL_ENV === 'production') {
      return [];
    }

    return [
      {
        source: '/:path*',
        headers: [{ key: 'X-Robots-Tag', value: 'noindex, nofollow' }],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/narzedzia/palette-extractor',
        has: [{ type: 'host', value: 'arteonagency.pl' }],
        destination: 'https://www.arteonagency.pl/narzedzia/generator-palety-kolorow-z-obrazu',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'arteonagency.pl' }],
        destination: 'https://www.arteonagency.pl/:path*',
        permanent: true,
      },
      { source: '/narzedzia/palette-extractor', destination: '/narzedzia/generator-palety-kolorow-z-obrazu', permanent: true },
      { source: '/services', destination: '/uslugi', permanent: true },
      { source: '/services/websites', destination: '/uslugi/strony-internetowe', permanent: true },
      { source: '/services/online-stores', destination: '/uslugi/sklepy-internetowe', permanent: true },
      { source: '/services/blogs', destination: '/uslugi/blogi-internetowe', permanent: true },
      { source: '/services/design', destination: '/uslugi/projekty-graficzne', permanent: true },
      { source: '/services/marketing', destination: '/uslugi/marketing', permanent: true },
      { source: '/services/content', destination: '/uslugi/tworzenie-tresci', permanent: true },
      { source: '/projects', destination: '/realizacje', permanent: true },
      { source: '/projects/:slug', destination: '/realizacje/:slug', permanent: true },
      { source: '/contact', destination: '/kontakt', permanent: true },
      { source: '/offer', destination: '/uslugi', permanent: true },
      { source: '/calculator', destination: '/', permanent: true },
      { source: '/uslugi/grafika', destination: '/uslugi/projekty-graficzne', permanent: true },
      { source: '/narzedzia/jpg-png-na-webp', destination: '/narzedzia/jpg-png-na-webp-bez-limitu', permanent: true },
      { source: '/realizacje/cennik-dla-salonu-kosmetycznego', destination: '/realizacje/', permanent: true },
      { source: '/realizacje/trilllizo', destination: '/realizacje/sklep-dla-firmy-odziezowej-trilllizo', permanent: true },
      { source: '/realizacje/pilka-nozna-pl', destination: '/realizacje/blog-sportowy-pilka-nozna-pl', permanent: true },
      { source: '/realizacje/msc-psychotherapy', destination: '/realizacje/strona-dla-psychologa-msc-psychotherapy', permanent: true },
      { source: '/projects/msc-psychotherapy', destination: '/realizacje/strona-dla-psychologa-msc-psychotherapy', permanent: true },
      { source: '/projects/trilllizo', destination: '/realizacje/sklep-dla-firmy-odziezowej-trilllizo', permanent: true },
      { source: '/realizacje/katalog-produktów-restoquality', destination: '/realizacje/katalog-produktow-restoquality', permanent: true },
    ];
  },
  webpack(config, { dev }) {
    if (!dev && config.cache) {
      config.cache = Object.freeze({ type: 'memory' });
    }

    return config;
  },
};

module.exports = nextConfig;
