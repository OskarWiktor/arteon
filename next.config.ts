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
      { source: '/edukacja/psychologia/jak-kolorystyka-wplywa-na-decyzje-zakupowe-klientow', destination: '/edukacja/design/jak-kolorystyka-wplywa-na-decyzje-zakupowe-klientow', permanent: true },
      { source: '/edukacja/widocznosc/ile-czasu-trwa-pozycjonowanie-strony-firmowej-i-kiedy-widac-efekty', destination: '/edukacja/seo/ile-czasu-trwa-pozycjonowanie-strony-firmowej-i-kiedy-widac-efekty', permanent: true },
      { source: '/edukacja/widocznosc/czy-lokalne-firmy-potrzebuja-bloga-na-stronie-internetowej-aby-rosnac-w-google', destination: '/edukacja/seo/czy-lokalne-firmy-potrzebuja-bloga-na-stronie-internetowej-aby-rosnac-w-google', permanent: true },
      { source: '/edukacja/seo/jak-zoptymalizowac-zdjecia-na-strone-www-aby-byla-szybsza-rozmiary-formaty-i-webp', destination: '/edukacja/zdjecia/jak-zoptymalizowac-zdjecia-na-strone-www-aby-byla-szybsza-rozmiary-formaty-i-webp', permanent: true },
      { source: '/edukacja/tresci/jak-pisac-tresci-na-stronie-internetowej-aby-byc-wyzej-w-wyszukiwarce-google', destination: '/edukacja/seo/jak-pisac-tresci-na-stronie-internetowej-aby-byc-wyzej-w-wyszukiwarce-google', permanent: true },
      { source: '/edukacja/branding/jak-identyfikacja-wizualna-zwieksza-zaufanie-klientow', destination: '/edukacja/design/jak-identyfikacja-wizualna-zwieksza-zaufanie-klientow', permanent: true },
      { source: '/edukacja/widocznosc/dlaczego-strona-internetowa-nie-wyswietla-sie-w-google-i-jak-to-naprawic', destination: '/edukacja/seo/dlaczego-strona-internetowa-nie-wyswietla-sie-w-google-i-jak-to-naprawic', permanent: true },
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
