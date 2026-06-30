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

    // "da" (Danish) locale was retired (2026-06-30): no measurable traffic,
    // not worth the crawl budget. Every /da/* page redirects to its exact
    // /en/* equivalent (not a wildcard rewrite — Danish and English slugs
    // are translated, so a 1:1 path mapping is required).
    const retiredLocaleRedirects: Redirect[] = [
      { source: '/da', destination: '/en/tools', statusCode: 301 },
      { source: '/da/vaerktojer', destination: '/en/tools', statusCode: 301 },
      { source: '/da/om-os', destination: '/en/about', statusCode: 301 },
      { source: '/da/kontakt', destination: '/en/contact', statusCode: 301 },
      {
        source: '/da/privatlivspolitik',
        destination: '/en/privacy-policy',
        statusCode: 301,
      },
      {
        source: '/da/brugsvilkar',
        destination: '/en/terms-of-service',
        statusCode: 301,
      },
      {
        source: '/da/vaerktojer/avif-til-jpg-konverter',
        destination: '/en/tools/avif-to-jpg-converter',
        statusCode: 301,
      },
      {
        source: '/da/vaerktojer/avif-til-png-konverter',
        destination: '/en/tools/avif-to-png-converter',
        statusCode: 301,
      },
      {
        source: '/da/vaerktojer/avif-til-tiff-konverter',
        destination: '/en/tools/avif-to-tiff-converter',
        statusCode: 301,
      },
      {
        source: '/da/vaerktojer/avif-til-webp-konverter',
        destination: '/en/tools/avif-to-webp-converter',
        statusCode: 301,
      },
      {
        source: '/da/vaerktojer/base64-til-billede-konverter',
        destination: '/en/tools/base64-to-image-converter',
        statusCode: 301,
      },
      {
        source: '/da/vaerktojer/billede-til-base64-konverter',
        destination: '/en/tools/image-to-base64-converter',
        statusCode: 301,
      },
      {
        source: '/da/vaerktojer/billedrediger',
        destination: '/en/tools/online-image-editor',
        statusCode: 301,
      },
      {
        source: '/da/vaerktojer/bmp-til-avif-konverter',
        destination: '/en/tools/bmp-to-avif-converter',
        statusCode: 301,
      },
      {
        source: '/da/vaerktojer/bmp-til-gif-konverter',
        destination: '/en/tools/bmp-to-gif-converter',
        statusCode: 301,
      },
      {
        source: '/da/vaerktojer/bmp-til-jpg-konverter',
        destination: '/en/tools/bmp-to-jpg-converter',
        statusCode: 301,
      },
      {
        source: '/da/vaerktojer/bmp-til-pdf-konverter',
        destination: '/en/tools/bmp-to-pdf-converter',
        statusCode: 301,
      },
      {
        source: '/da/vaerktojer/bmp-til-png-konverter',
        destination: '/en/tools/bmp-to-png-converter',
        statusCode: 301,
      },
      {
        source: '/da/vaerktojer/bmp-til-tiff-konverter',
        destination: '/en/tools/bmp-to-tiff-converter',
        statusCode: 301,
      },
      {
        source: '/da/vaerktojer/bmp-til-webp-konverter',
        destination: '/en/tools/bmp-to-webp-converter',
        statusCode: 301,
      },
      {
        source: '/da/vaerktojer/bytes-konverter',
        destination: '/en/tools/bytes-converter',
        statusCode: 301,
      },
      {
        source: '/da/vaerktojer/cm-til-px-konverter',
        destination: '/en/tools/cm-to-px-converter',
        statusCode: 301,
      },
      {
        source: '/da/vaerktojer/csv-til-json-konverter',
        destination: '/en/tools/csv-to-json-converter',
        statusCode: 301,
      },
      {
        source: '/da/vaerktojer/decimal-til-binaer-konverter',
        destination: '/en/tools/decimal-to-binary-converter',
        statusCode: 301,
      },
      {
        source: '/da/vaerktojer/decimal-til-hex-konverter',
        destination: '/en/tools/decimal-to-hex-converter',
        statusCode: 301,
      },
      {
        source: '/da/vaerktojer/dpi-til-ppi-konverter',
        destination: '/en/tools/dpi-to-ppi-converter',
        statusCode: 301,
      },
      {
        source: '/da/vaerktojer/em-til-px-konverter',
        destination: '/en/tools/em-to-px-converter',
        statusCode: 301,
      },
      {
        source: '/da/vaerktojer/farvekontrastkontrol',
        destination: '/en/tools/color-contrast-checker',
        statusCode: 301,
      },
      {
        source: '/da/vaerktojer/farvepaletgenerator',
        destination: '/en/tools/color-palette-generator',
        statusCode: 301,
      },
      {
        source: '/da/vaerktojer/farveudtraekker-fra-billede',
        destination: '/en/tools/image-color-extractor',
        statusCode: 301,
      },
      {
        source: '/da/vaerktojer/gif-til-avif-konverter',
        destination: '/en/tools/gif-to-avif-converter',
        statusCode: 301,
      },
      {
        source: '/da/vaerktojer/gif-til-jpg-konverter',
        destination: '/en/tools/gif-to-jpg-converter',
        statusCode: 301,
      },
      {
        source: '/da/vaerktojer/gif-til-png-konverter',
        destination: '/en/tools/gif-to-png-converter',
        statusCode: 301,
      },
      {
        source: '/da/vaerktojer/gif-til-webp-konverter',
        destination: '/en/tools/gif-to-webp-converter',
        statusCode: 301,
      },
      {
        source: '/da/vaerktojer/gratis-e-mail-signatur-generator',
        destination: '/en/tools/free-email-signature-generator',
        statusCode: 301,
      },
      {
        source: '/da/vaerktojer/gratis-favicon-generator',
        destination: '/en/tools/free-favicon-generator',
        statusCode: 301,
      },
      {
        source: '/da/vaerktojer/gratis-qr-kode-generator',
        destination: '/en/tools/free-qr-code-generator',
        statusCode: 301,
      },
      {
        source: '/da/vaerktojer/heic-til-avif-konverter',
        destination: '/en/tools/heic-to-avif-converter',
        statusCode: 301,
      },
      {
        source: '/da/vaerktojer/heic-til-jpg-konverter',
        destination: '/en/tools/heic-to-jpg-converter',
        statusCode: 301,
      },
      {
        source: '/da/vaerktojer/heic-til-pdf-konverter',
        destination: '/en/tools/heic-to-pdf-converter',
        statusCode: 301,
      },
      {
        source: '/da/vaerktojer/heic-til-png-konverter',
        destination: '/en/tools/heic-to-png-converter',
        statusCode: 301,
      },
      {
        source: '/da/vaerktojer/heic-til-tiff-konverter',
        destination: '/en/tools/heic-to-tiff-converter',
        statusCode: 301,
      },
      {
        source: '/da/vaerktojer/heic-til-webp-konverter',
        destination: '/en/tools/heic-to-webp-converter',
        statusCode: 301,
      },
      {
        source: '/da/vaerktojer/hex-til-rgb-konverter',
        destination: '/en/tools/hex-to-rgb-converter',
        statusCode: 301,
      },
      {
        source: '/da/vaerktojer/html-til-markdown-konverter',
        destination: '/en/tools/html-to-markdown-converter',
        statusCode: 301,
      },
      {
        source: '/da/vaerktojer/jpg-til-avif-konverter',
        destination: '/en/tools/jpg-to-avif-converter',
        statusCode: 301,
      },
      {
        source: '/da/vaerktojer/jpg-til-gif-konverter',
        destination: '/en/tools/jpg-to-gif-converter',
        statusCode: 301,
      },
      {
        source: '/da/vaerktojer/jpg-til-pdf-konverter',
        destination: '/en/tools/jpg-to-pdf-converter',
        statusCode: 301,
      },
      {
        source: '/da/vaerktojer/jpg-til-png-konverter',
        destination: '/en/tools/jpg-to-png-converter',
        statusCode: 301,
      },
      {
        source: '/da/vaerktojer/jpg-til-tiff-konverter',
        destination: '/en/tools/jpg-to-tiff-converter',
        statusCode: 301,
      },
      {
        source: '/da/vaerktojer/jpg-til-webp-konverter',
        destination: '/en/tools/jpg-to-webp-converter',
        statusCode: 301,
      },
      {
        source: '/da/vaerktojer/json-til-csv-konverter',
        destination: '/en/tools/json-to-csv-converter',
        statusCode: 301,
      },
      {
        source: '/da/vaerktojer/json-til-xml-konverter',
        destination: '/en/tools/json-to-xml-converter',
        statusCode: 301,
      },
      {
        source: '/da/vaerktojer/json-til-yaml-konverter',
        destination: '/en/tools/json-to-yaml-converter',
        statusCode: 301,
      },
      {
        source: '/da/vaerktojer/lorem-ipsum-generator',
        destination: '/en/tools/lorem-ipsum-generator',
        statusCode: 301,
      },
      {
        source: '/da/vaerktojer/markdown-til-html-konverter',
        destination: '/en/tools/markdown-to-html-converter',
        statusCode: 301,
      },
      {
        source: '/da/vaerktojer/mbps-til-mbs-konverter',
        destination: '/en/tools/mbps-to-mbs-converter',
        statusCode: 301,
      },
      {
        source: '/da/vaerktojer/meta-titel-og-beskrivelse-kontrol',
        destination: '/en/tools/meta-title-description-length-checker',
        statusCode: 301,
      },
      {
        source: '/da/vaerktojer/mm-til-px-konverter',
        destination: '/en/tools/mm-to-px-converter',
        statusCode: 301,
      },
      {
        source: '/da/vaerktojer/ord-og-tegntaeller',
        destination: '/en/tools/word-and-character-counter',
        statusCode: 301,
      },
      {
        source: '/da/vaerktojer/pdf-til-jpg-konverter',
        destination: '/en/tools/pdf-to-jpg-converter',
        statusCode: 301,
      },
      {
        source: '/da/vaerktojer/pdf-til-png-konverter',
        destination: '/en/tools/pdf-to-png-converter',
        statusCode: 301,
      },
      {
        source: '/da/vaerktojer/pdf-til-webp-konverter',
        destination: '/en/tools/pdf-to-webp-converter',
        statusCode: 301,
      },
      {
        source: '/da/vaerktojer/png-til-avif-konverter',
        destination: '/en/tools/png-to-avif-converter',
        statusCode: 301,
      },
      {
        source: '/da/vaerktojer/png-til-gif-konverter',
        destination: '/en/tools/png-to-gif-converter',
        statusCode: 301,
      },
      {
        source: '/da/vaerktojer/png-til-jpg-konverter',
        destination: '/en/tools/png-to-jpg-converter',
        statusCode: 301,
      },
      {
        source: '/da/vaerktojer/png-til-pdf-konverter',
        destination: '/en/tools/png-to-pdf-converter',
        statusCode: 301,
      },
      {
        source: '/da/vaerktojer/png-til-tiff-konverter',
        destination: '/en/tools/png-to-tiff-converter',
        statusCode: 301,
      },
      {
        source: '/da/vaerktojer/png-til-webp-konverter',
        destination: '/en/tools/png-to-webp-converter',
        statusCode: 301,
      },
      {
        source: '/da/vaerktojer/pt-til-px-konverter',
        destination: '/en/tools/pt-to-px-converter',
        statusCode: 301,
      },
      {
        source: '/da/vaerktojer/px-til-cm-konverter',
        destination: '/en/tools/px-to-cm-converter',
        statusCode: 301,
      },
      {
        source: '/da/vaerktojer/rem-til-px-konverter',
        destination: '/en/tools/rem-to-px-converter',
        statusCode: 301,
      },
      {
        source: '/da/vaerktojer/rgb-til-cmyk-konverter',
        destination: '/en/tools/rgb-to-cmyk-converter',
        statusCode: 301,
      },
      {
        source: '/da/vaerktojer/svg-til-avif-konverter',
        destination: '/en/tools/svg-to-avif-converter',
        statusCode: 301,
      },
      {
        source: '/da/vaerktojer/svg-til-gif-konverter',
        destination: '/en/tools/svg-to-gif-converter',
        statusCode: 301,
      },
      {
        source: '/da/vaerktojer/svg-til-jpg-konverter',
        destination: '/en/tools/svg-to-jpg-converter',
        statusCode: 301,
      },
      {
        source: '/da/vaerktojer/svg-til-pdf-konverter',
        destination: '/en/tools/svg-to-pdf-converter',
        statusCode: 301,
      },
      {
        source: '/da/vaerktojer/svg-til-png-konverter',
        destination: '/en/tools/svg-to-png-converter',
        statusCode: 301,
      },
      {
        source: '/da/vaerktojer/svg-til-tiff-konverter',
        destination: '/en/tools/svg-to-tiff-converter',
        statusCode: 301,
      },
      {
        source: '/da/vaerktojer/svg-til-webp-konverter',
        destination: '/en/tools/svg-to-webp-converter',
        statusCode: 301,
      },
      {
        source: '/da/vaerktojer/tiff-til-avif-konverter',
        destination: '/en/tools/tiff-to-avif-converter',
        statusCode: 301,
      },
      {
        source: '/da/vaerktojer/tiff-til-jpg-konverter',
        destination: '/en/tools/tiff-to-jpg-converter',
        statusCode: 301,
      },
      {
        source: '/da/vaerktojer/tiff-til-pdf-konverter',
        destination: '/en/tools/tiff-to-pdf-converter',
        statusCode: 301,
      },
      {
        source: '/da/vaerktojer/tiff-til-png-konverter',
        destination: '/en/tools/tiff-to-png-converter',
        statusCode: 301,
      },
      {
        source: '/da/vaerktojer/tiff-til-webp-konverter',
        destination: '/en/tools/tiff-to-webp-converter',
        statusCode: 301,
      },
      {
        source: '/da/vaerktojer/tommer-til-px-konverter',
        destination: '/en/tools/inches-to-px-converter',
        statusCode: 301,
      },
      {
        source: '/da/vaerktojer/unix-timestamp-konverter',
        destination: '/en/tools/unix-timestamp-converter',
        statusCode: 301,
      },
      {
        source: '/da/vaerktojer/webp-til-avif-konverter',
        destination: '/en/tools/webp-to-avif-converter',
        statusCode: 301,
      },
      {
        source: '/da/vaerktojer/webp-til-gif-konverter',
        destination: '/en/tools/webp-to-gif-converter',
        statusCode: 301,
      },
      {
        source: '/da/vaerktojer/webp-til-jpg-konverter',
        destination: '/en/tools/webp-to-jpg-converter',
        statusCode: 301,
      },
      {
        source: '/da/vaerktojer/webp-til-pdf-konverter',
        destination: '/en/tools/webp-to-pdf-converter',
        statusCode: 301,
      },
      {
        source: '/da/vaerktojer/webp-til-png-konverter',
        destination: '/en/tools/webp-to-png-converter',
        statusCode: 301,
      },
      {
        source: '/da/vaerktojer/webp-til-tiff-konverter',
        destination: '/en/tools/webp-to-tiff-converter',
        statusCode: 301,
      },
      {
        source: '/da/vaerktojer/xml-til-json-konverter',
        destination: '/en/tools/xml-to-json-converter',
        statusCode: 301,
      },
      {
        source: '/da/vaerktojer/yaml-til-json-konverter',
        destination: '/en/tools/yaml-to-json-converter',
        statusCode: 301,
      },
    ];

    return [
      ...staticRedirects,
      ...patternRedirects,
      ...localeRootRedirects,
      ...sitemapRedirects,
      ...retiredLocaleRedirects,
    ];
  },
};

module.exports = withBundleAnalyzer(nextConfig);
