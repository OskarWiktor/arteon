import bundleAnalyzer from '@next/bundle-analyzer';
import type { NextConfig } from 'next';
import type { Redirect } from 'next/dist/lib/load-custom-routes';
import { ALL_STATIC_REDIRECTS } from './lib/redirects';

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

const IS_PROD = process.env.NODE_ENV !== 'development';
const cspDirectives = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${IS_PROD ? '' : " 'unsafe-eval'"} https://*.googletagmanager.com https://*.google-analytics.com https://*.googleadservices.com https://*.googlesyndication.com https://*.adtrafficquality.google https://*.doubleclick.net https://fundingchoicesmessages.google.com https://fundingchoices.google.com https://va.vercel-scripts.com`,
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "img-src 'self' data: blob: https://*.google-analytics.com https://*.googletagmanager.com https://*.google.com https://*.doubleclick.net https://*.googlesyndication.com https:",
  "font-src 'self' https://fonts.gstatic.com",
  "connect-src 'self' https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com https://*.googlesyndication.com https://*.adtrafficquality.google https://*.doubleclick.net https://fundingchoicesmessages.google.com https://fundingchoices.google.com https://formspree.io https://vitals.vercel-insights.com https://va.vercel-scripts.com",
  'frame-src https://*.google.com https://*.doubleclick.net https://googleads.g.doubleclick.net https://*.googlesyndication.com https://*.adtrafficquality.google https://fundingchoicesmessages.google.com',
  "worker-src 'self' blob:",
  "frame-ancestors 'self' https://*.google.com https://*.googlesyndication.com https://*.doubleclick.net",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self' https://formspree.io",
  'upgrade-insecure-requests',
].join('; ');

const securityHeaders = [
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'X-DNS-Prefetch-Control', value: 'on' },
  {
    key: 'Permissions-Policy',
    value:
      'camera=(), microphone=(), geolocation=(), browsing-topics=(), attribution-reporting=()',
  },
  { key: 'Content-Security-Policy', value: cspDirectives },
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'Cross-Origin-Opener-Policy', value: 'same-origin-allow-popups' },
  { key: 'Cross-Origin-Resource-Policy', value: 'same-site' },
];

const nextConfig: NextConfig = {
  trailingSlash: false,
  poweredByHeader: false,
  reactStrictMode: true,
  compiler: {
    removeConsole: IS_PROD ? { exclude: ['error', 'warn'] } : false,
  },
  cacheComponents: true,
  reactCompiler: true,
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
      'jspdf',
      'marked',
      'turndown',
      'qrcode',
    ],
    optimizeCss: true,
  },
  serverExternalPackages: [
    'sharp',
    'pdfjs-dist',
    'heic2any',
    'gifenc',
    'utif2',
  ],
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [420, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [96, 256, 384],
    qualities: [75, 80],
    minimumCacheTTL: 31536000,
  },
  async headers() {
    const staticAssetHeaders = [
      {
        source: '/assets/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
          { key: 'X-Robots-Tag', value: 'noindex' },
        ],
      },
      {
        source: '/fonts/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];

    const devHeaders = [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-cache, no-store, must-revalidate',
          },
          { key: 'Pragma', value: 'no-cache' },
          { key: 'Expires', value: '0' },
        ],
      },
    ];

    return IS_PROD
      ? [
          {
            source: '/:path*',
            headers: securityHeaders,
          },
          ...staticAssetHeaders,
        ]
      : [...devHeaders, ...staticAssetHeaders];
  },
  async redirects() {
    const staticRedirects: Redirect[] = Object.entries(
      ALL_STATIC_REDIRECTS,
    ).map(([source, destination]) => ({
      source,
      destination,
      statusCode: 301,
    }));

    const patternRedirects: Redirect[] = [
      {
        source: '/projects/:slug',
        destination: '/realizacje/:slug',
        statusCode: 301,
      },
      {
        source: '/edukacja/design/:path*',
        destination: '/edukacja/grafika/:path*',
        statusCode: 301,
      },
    ];

    const localeRootRedirects: Redirect[] = [
      { source: '/en', destination: '/en/tools', statusCode: 301 },
      { source: '/de', destination: '/de/werkzeuge', statusCode: 301 },
      { source: '/es', destination: '/es/herramientas', statusCode: 301 },
      { source: '/fr', destination: '/fr/outils', statusCode: 301 },
      { source: '/pt', destination: '/pt/ferramentas', statusCode: 301 },
      { source: '/it', destination: '/it/strumenti', statusCode: 301 },
      { source: '/ro', destination: '/ro/instrumente', statusCode: 301 },
      { source: '/nl', destination: '/nl/tools', statusCode: 301 },
      { source: '/hu', destination: '/hu/eszkozok', statusCode: 301 },
      { source: '/cs', destination: '/cs/nastroje', statusCode: 301 },
      { source: '/sv', destination: '/sv/verktyg', statusCode: 301 },
      { source: '/da', destination: '/da/vaerktojer', statusCode: 301 },
      { source: '/no', destination: '/no/verktoy', statusCode: 301 },
      { source: '/fi', destination: '/fi/tyokalut', statusCode: 301 },
      { source: '/el', destination: '/el/ergaleia', statusCode: 301 },
    ];

    const sitemapRedirects: Redirect[] = [
      {
        source: '/sitemap-0.xml',
        destination: '/sitemap.xml',
        statusCode: 301,
      },
    ];

    return [
      ...staticRedirects,
      ...patternRedirects,
      ...localeRootRedirects,
      ...sitemapRedirects,
    ];
  },
};

module.exports = withBundleAnalyzer(nextConfig);
