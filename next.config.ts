import type { NextConfig } from 'next';
import type { Redirect } from 'next/dist/lib/load-custom-routes';
import bundleAnalyzer from '@next/bundle-analyzer';
import { ALL_STATIC_REDIRECTS } from './lib/redirects';

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

const IS_PROD = process.env.VERCEL_ENV === 'production' || process.env.NODE_ENV === 'production';

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
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'Cross-Origin-Opener-Policy', value: 'same-origin-allow-popups' },
  { key: 'Cross-Origin-Resource-Policy', value: 'same-site' },
];

const nextConfig: NextConfig = {
  trailingSlash: false,
  poweredByHeader: false,
  // Cache Components (Next.js 16.1.6 - top-level)
  cacheComponents: true,
  experimental: {
    // Build performance optimizations (Next.js 16.1.6)
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
      // Client-side dependencies optimization
      'jspdf',
      'marked',
      'turndown',
      'qrcode',
    ],
    // Optimize CSS
    optimizeCss: true,
  },
  // Externalize native dependencies from server bundle
  serverExternalPackages: ['sharp', 'pdfjs-dist', 'heic2any', 'gifenc', 'utif2'],
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 1080, 1920],
    imageSizes: [96, 256, 384],
    minimumCacheTTL: 31536000,
  },
  async headers() {
    // Cache-Control for pages/tools is managed exclusively in vercel.json to avoid duplicate headers.
    // Only static asset headers that vercel.json does not cover are defined here.
    const staticAssetHeaders = [
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
    ];

    return IS_PROD
      ? [
          {
            source: '/:path*',
            headers: securityHeaders,
          },
          ...staticAssetHeaders,
        ]
      : [
          {
            source: '/:path*',
            headers: [{ key: 'X-Robots-Tag', value: 'noindex, nofollow' }],
          },
          ...staticAssetHeaders,
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

    // Canonical host redirect (HTTP→HTTPS, non-www→www, trailing slash)
    // is handled by middleware.ts at the edge level in a single 301 hop.

    return [...staticRedirects, ...patternRedirects];
  },
};

module.exports = withBundleAnalyzer(nextConfig);
