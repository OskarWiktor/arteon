import type { NextConfig } from 'next';

const nextConfig: NextConfig = [
  (module.exports = {
    i18n: {
      locales: ['pl', 'en'],
      defaultLocale: 'pl',
      domains: [
        {
          domain: 'arteonagency.pl',
          defaultLocale: 'pl',
        },
        {
          domain: 'arteonagency.com',
          defaultLocale: 'en',
        },
      ],
    },
  }),
];

export default nextConfig;
