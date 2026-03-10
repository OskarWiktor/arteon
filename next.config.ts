import type { NextConfig } from 'next';
import type { Redirect } from 'next/dist/lib/load-custom-routes';
import bundleAnalyzer from '@next/bundle-analyzer';
import { ALL_STATIC_REDIRECTS } from './lib/redirects';

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

const IS_PROD = process.env.VERCEL_ENV === 'production';

const cspDirectives = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${IS_PROD ? '' : " 'unsafe-eval'"} https://*.googletagmanager.com https://*.google-analytics.com https://*.googleadservices.com https://*.googlesyndication.com https://*.adtrafficquality.google https://*.doubleclick.net https://fundingchoicesmessages.google.com https://fundingchoices.google.com https://analytics.ahrefs.com https://tracker.metricool.com https://va.vercel-scripts.com`,
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "img-src 'self' data: blob: https://*.google-analytics.com https://*.googletagmanager.com https://*.google.com https://*.doubleclick.net https://*.googlesyndication.com https:",
  "font-src 'self' https://fonts.gstatic.com",
  "connect-src 'self' https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com https://*.googlesyndication.com https://*.adtrafficquality.google https://*.doubleclick.net https://fundingchoicesmessages.google.com https://fundingchoices.google.com https://formspree.io https://analytics.ahrefs.com https://tracker.metricool.com https://vitals.vercel-insights.com https://va.vercel-scripts.com",
  'frame-src https://*.google.com https://*.doubleclick.net https://googleads.g.doubleclick.net https://*.googlesyndication.com https://*.adtrafficquality.google https://fundingchoicesmessages.google.com',
  "worker-src 'self' blob:",
  "frame-ancestors 'self' https://*.google.com https://*.googlesyndication.com https://*.doubleclick.net",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self' https://formspree.io",
  'upgrade-insecure-requests',
].join('; ');

const securityHeaders = [
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'X-DNS-Prefetch-Control', value: 'on' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), browsing-topics=(), attribution-reporting=()' },
  { key: 'Content-Security-Policy', value: cspDirectives },
  { key: 'Cross-Origin-Opener-Policy', value: 'same-origin-allow-popups' },
  { key: 'Cross-Origin-Resource-Policy', value: 'same-site' },
];

const nextConfig: NextConfig = {
  trailingSlash: false,
  poweredByHeader: false,
  experimental: {
    optimizePackageImports: [
      'react-icons/ri',
      'react-icons/si',
      'react-icons/fa',
      'react-icons/fa6',
      'react-icons/fi',
      'react-icons/md',
      'react-icons/io5',
      'react-icons/bs',
      'react-icons/hi2',
      'react-icons/lu',
      'react-icons/go',
    ],
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 1080, 1920],
    imageSizes: [96, 256, 384],
    minimumCacheTTL: 31536000,
  },
  async headers() {
    const staticCacheHeaders = [
      {
        source: '/assets/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
          { key: 'X-Robots-Tag', value: 'noindex' },
        ],
      },
      {
        source: '/fonts/:path*',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
      {
        source: '/sitemap.xml',
        headers: [
          { key: 'Content-Type', value: 'application/xml; charset=utf-8' },
          { key: 'Cache-Control', value: 'public, max-age=604800, s-maxage=604800, stale-while-revalidate=86400' },
        ],
      },
      {
        source: '/sitemap-:slug.xml',
        headers: [
          { key: 'Content-Type', value: 'application/xml; charset=utf-8' },
          { key: 'Cache-Control', value: 'public, max-age=604800, s-maxage=604800, stale-while-revalidate=86400' },
        ],
      }, // PL
      { source: '/narzedzia/:path*', headers: [{ key: 'Cache-Control', value: 'public, s-maxage=86400, stale-while-revalidate=604800' }] },
      // EN, NL
      { source: '/:locale(en|nl)/tools/:path*', headers: [{ key: 'Cache-Control', value: 'public, s-maxage=86400, stale-while-revalidate=604800' }] },
      // DE
      { source: '/de/werkzeuge/:path*', headers: [{ key: 'Cache-Control', value: 'public, s-maxage=86400, stale-while-revalidate=604800' }] },
      // ES
      { source: '/es/herramientas/:path*', headers: [{ key: 'Cache-Control', value: 'public, s-maxage=86400, stale-while-revalidate=604800' }] },
      // FR
      { source: '/fr/outils/:path*', headers: [{ key: 'Cache-Control', value: 'public, s-maxage=86400, stale-while-revalidate=604800' }] },
      // PT
      { source: '/pt/ferramentas/:path*', headers: [{ key: 'Cache-Control', value: 'public, s-maxage=86400, stale-while-revalidate=604800' }] },
      // IT
      { source: '/it/strumenti/:path*', headers: [{ key: 'Cache-Control', value: 'public, s-maxage=86400, stale-while-revalidate=604800' }] },
      // RO
      { source: '/ro/instrumente/:path*', headers: [{ key: 'Cache-Control', value: 'public, s-maxage=86400, stale-while-revalidate=604800' }] },
      // HU
      { source: '/hu/eszkozok/:path*', headers: [{ key: 'Cache-Control', value: 'public, s-maxage=86400, stale-while-revalidate=604800' }] },
      // CS
      { source: '/cs/nastroje/:path*', headers: [{ key: 'Cache-Control', value: 'public, s-maxage=86400, stale-while-revalidate=604800' }] },
      // SV
      { source: '/sv/verktyg/:path*', headers: [{ key: 'Cache-Control', value: 'public, s-maxage=86400, stale-while-revalidate=604800' }] },
      // DA
      { source: '/da/vaerktojer/:path*', headers: [{ key: 'Cache-Control', value: 'public, s-maxage=86400, stale-while-revalidate=604800' }] },
      // NO
      { source: '/no/verktoy/:path*', headers: [{ key: 'Cache-Control', value: 'public, s-maxage=86400, stale-while-revalidate=604800' }] },
      // FI
      { source: '/fi/tyokalut/:path*', headers: [{ key: 'Cache-Control', value: 'public, s-maxage=86400, stale-while-revalidate=604800' }] },
      // EL
      { source: '/el/ergaleia/:path*', headers: [{ key: 'Cache-Control', value: 'public, s-maxage=86400, stale-while-revalidate=604800' }] },
    ];

    return IS_PROD
      ? [
          {
            source: '/:path*',
            headers: securityHeaders,
          },
          ...staticCacheHeaders,
        ]
      : [
          {
            source: '/:path*',
            headers: [{ key: 'X-Robots-Tag', value: 'noindex, nofollow' }],
          },
          ...staticCacheHeaders,
        ];
  },
  async redirects() {
    const staticRedirects: Redirect[] = Object.entries(ALL_STATIC_REDIRECTS).map(([source, destination]) => ({
      source,
      destination,
      permanent: true,
    }));

    const patternRedirects: Redirect[] = [
      { source: '/projects/:slug', destination: '/realizacje/:slug', permanent: true },
      { source: '/edukacja/design/:path*', destination: '/edukacja/grafika/:path*', permanent: true },
    ];

    const canonicalRedirects: Redirect[] = [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'arteonagency.pl' }],
        destination: 'https://www.arteonagency.pl/:path*',
        permanent: true,
      },
    ];

    return [...canonicalRedirects, ...staticRedirects, ...patternRedirects];
  },
};

module.exports = withBundleAnalyzer(nextConfig);
