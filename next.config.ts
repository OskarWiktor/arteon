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
          // NOTE: no X-Robots-Tag: noindex here. These assets are the site's
          // portfolio/blog/tool images, referenced by og:image, twitter:image
          // and the <image:image> entries in the sitemaps — they MUST stay
          // indexable. A prior noindex here (2026-03-21) deindexed them from
          // Google Images. max-image-preview:large keeps large thumbnails.
          { key: 'X-Robots-Tag', value: 'max-image-preview:large' },
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
      { source: '/cs', destination: '/cs/nastroje', statusCode: 301 },
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
        destination: '/en/tools/px-to-cm-converter',
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

    // "ro" (Romanian) locale was retired (2026-06-30): no measurable
    // traffic, not worth the crawl budget. Every /ro/* page redirects to its
    // exact /en/* equivalent (1:1 path mapping, slugs are translated).
    const retiredRoLocaleRedirects: Redirect[] = [
      { source: '/ro', destination: '/en/tools', statusCode: 301 },
      { source: '/ro/instrumente', destination: '/en/tools', statusCode: 301 },
      { source: '/ro/despre-noi', destination: '/en/about', statusCode: 301 },
      { source: '/ro/contact', destination: '/en/contact', statusCode: 301 },
      {
        source: '/ro/politica-de-confidentialitate',
        destination: '/en/privacy-policy',
        statusCode: 301,
      },
      {
        source: '/ro/termeni-si-conditii',
        destination: '/en/terms-of-service',
        statusCode: 301,
      },
      {
        source: '/ro/instrumente/contor-cuvinte-si-caractere',
        destination: '/en/tools/word-and-character-counter',
        statusCode: 301,
      },
      {
        source: '/ro/instrumente/convertor-avif-in-jpg',
        destination: '/en/tools/avif-to-jpg-converter',
        statusCode: 301,
      },
      {
        source: '/ro/instrumente/convertor-avif-in-png',
        destination: '/en/tools/avif-to-png-converter',
        statusCode: 301,
      },
      {
        source: '/ro/instrumente/convertor-avif-in-tiff',
        destination: '/en/tools/avif-to-tiff-converter',
        statusCode: 301,
      },
      {
        source: '/ro/instrumente/convertor-avif-in-webp',
        destination: '/en/tools/avif-to-webp-converter',
        statusCode: 301,
      },
      {
        source: '/ro/instrumente/convertor-base64-in-imagine',
        destination: '/en/tools/base64-to-image-converter',
        statusCode: 301,
      },
      {
        source: '/ro/instrumente/convertor-bmp-in-avif',
        destination: '/en/tools/bmp-to-avif-converter',
        statusCode: 301,
      },
      {
        source: '/ro/instrumente/convertor-bmp-in-gif',
        destination: '/en/tools/bmp-to-gif-converter',
        statusCode: 301,
      },
      {
        source: '/ro/instrumente/convertor-bmp-in-jpg',
        destination: '/en/tools/bmp-to-jpg-converter',
        statusCode: 301,
      },
      {
        source: '/ro/instrumente/convertor-bmp-in-pdf',
        destination: '/en/tools/bmp-to-pdf-converter',
        statusCode: 301,
      },
      {
        source: '/ro/instrumente/convertor-bmp-in-png',
        destination: '/en/tools/bmp-to-png-converter',
        statusCode: 301,
      },
      {
        source: '/ro/instrumente/convertor-bmp-in-tiff',
        destination: '/en/tools/bmp-to-tiff-converter',
        statusCode: 301,
      },
      {
        source: '/ro/instrumente/convertor-bmp-in-webp',
        destination: '/en/tools/bmp-to-webp-converter',
        statusCode: 301,
      },
      {
        source: '/ro/instrumente/convertor-bytes',
        destination: '/en/tools/bytes-converter',
        statusCode: 301,
      },
      {
        source: '/ro/instrumente/convertor-cm-in-px',
        destination: '/en/tools/cm-to-px-converter',
        statusCode: 301,
      },
      {
        source: '/ro/instrumente/convertor-csv-in-json',
        destination: '/en/tools/csv-to-json-converter',
        statusCode: 301,
      },
      {
        source: '/ro/instrumente/convertor-dpi-in-ppi',
        destination: '/en/tools/px-to-cm-converter',
        statusCode: 301,
      },
      {
        source: '/ro/instrumente/convertor-em-in-px',
        destination: '/en/tools/em-to-px-converter',
        statusCode: 301,
      },
      {
        source: '/ro/instrumente/convertor-gif-in-avif',
        destination: '/en/tools/gif-to-avif-converter',
        statusCode: 301,
      },
      {
        source: '/ro/instrumente/convertor-gif-in-jpg',
        destination: '/en/tools/gif-to-jpg-converter',
        statusCode: 301,
      },
      {
        source: '/ro/instrumente/convertor-gif-in-png',
        destination: '/en/tools/gif-to-png-converter',
        statusCode: 301,
      },
      {
        source: '/ro/instrumente/convertor-gif-in-webp',
        destination: '/en/tools/gif-to-webp-converter',
        statusCode: 301,
      },
      {
        source: '/ro/instrumente/convertor-heic-in-avif',
        destination: '/en/tools/heic-to-avif-converter',
        statusCode: 301,
      },
      {
        source: '/ro/instrumente/convertor-heic-in-jpg',
        destination: '/en/tools/heic-to-jpg-converter',
        statusCode: 301,
      },
      {
        source: '/ro/instrumente/convertor-heic-in-pdf',
        destination: '/en/tools/heic-to-pdf-converter',
        statusCode: 301,
      },
      {
        source: '/ro/instrumente/convertor-heic-in-png',
        destination: '/en/tools/heic-to-png-converter',
        statusCode: 301,
      },
      {
        source: '/ro/instrumente/convertor-heic-in-tiff',
        destination: '/en/tools/heic-to-tiff-converter',
        statusCode: 301,
      },
      {
        source: '/ro/instrumente/convertor-heic-in-webp',
        destination: '/en/tools/heic-to-webp-converter',
        statusCode: 301,
      },
      {
        source: '/ro/instrumente/convertor-hex-in-rgb',
        destination: '/en/tools/hex-to-rgb-converter',
        statusCode: 301,
      },
      {
        source: '/ro/instrumente/convertor-html-in-markdown',
        destination: '/en/tools/html-to-markdown-converter',
        statusCode: 301,
      },
      {
        source: '/ro/instrumente/convertor-imagine-in-base64',
        destination: '/en/tools/image-to-base64-converter',
        statusCode: 301,
      },
      {
        source: '/ro/instrumente/convertor-inci-in-px',
        destination: '/en/tools/inches-to-px-converter',
        statusCode: 301,
      },
      {
        source: '/ro/instrumente/convertor-jpg-in-avif',
        destination: '/en/tools/jpg-to-avif-converter',
        statusCode: 301,
      },
      {
        source: '/ro/instrumente/convertor-jpg-in-gif',
        destination: '/en/tools/jpg-to-gif-converter',
        statusCode: 301,
      },
      {
        source: '/ro/instrumente/convertor-jpg-in-pdf',
        destination: '/en/tools/jpg-to-pdf-converter',
        statusCode: 301,
      },
      {
        source: '/ro/instrumente/convertor-jpg-in-png',
        destination: '/en/tools/jpg-to-png-converter',
        statusCode: 301,
      },
      {
        source: '/ro/instrumente/convertor-jpg-in-tiff',
        destination: '/en/tools/jpg-to-tiff-converter',
        statusCode: 301,
      },
      {
        source: '/ro/instrumente/convertor-jpg-in-webp',
        destination: '/en/tools/jpg-to-webp-converter',
        statusCode: 301,
      },
      {
        source: '/ro/instrumente/convertor-json-in-csv',
        destination: '/en/tools/json-to-csv-converter',
        statusCode: 301,
      },
      {
        source: '/ro/instrumente/convertor-json-in-xml',
        destination: '/en/tools/json-to-xml-converter',
        statusCode: 301,
      },
      {
        source: '/ro/instrumente/convertor-json-in-yaml',
        destination: '/en/tools/json-to-yaml-converter',
        statusCode: 301,
      },
      {
        source: '/ro/instrumente/convertor-markdown-in-html',
        destination: '/en/tools/markdown-to-html-converter',
        statusCode: 301,
      },
      {
        source: '/ro/instrumente/convertor-mbps-in-mbs',
        destination: '/en/tools/mbps-to-mbs-converter',
        statusCode: 301,
      },
      {
        source: '/ro/instrumente/convertor-mm-in-px',
        destination: '/en/tools/mm-to-px-converter',
        statusCode: 301,
      },
      {
        source: '/ro/instrumente/convertor-pdf-in-jpg',
        destination: '/en/tools/pdf-to-jpg-converter',
        statusCode: 301,
      },
      {
        source: '/ro/instrumente/convertor-pdf-in-png',
        destination: '/en/tools/pdf-to-png-converter',
        statusCode: 301,
      },
      {
        source: '/ro/instrumente/convertor-pdf-in-webp',
        destination: '/en/tools/pdf-to-webp-converter',
        statusCode: 301,
      },
      {
        source: '/ro/instrumente/convertor-png-in-avif',
        destination: '/en/tools/png-to-avif-converter',
        statusCode: 301,
      },
      {
        source: '/ro/instrumente/convertor-png-in-gif',
        destination: '/en/tools/png-to-gif-converter',
        statusCode: 301,
      },
      {
        source: '/ro/instrumente/convertor-png-in-jpg',
        destination: '/en/tools/png-to-jpg-converter',
        statusCode: 301,
      },
      {
        source: '/ro/instrumente/convertor-png-in-pdf',
        destination: '/en/tools/png-to-pdf-converter',
        statusCode: 301,
      },
      {
        source: '/ro/instrumente/convertor-png-in-tiff',
        destination: '/en/tools/png-to-tiff-converter',
        statusCode: 301,
      },
      {
        source: '/ro/instrumente/convertor-png-in-webp',
        destination: '/en/tools/png-to-webp-converter',
        statusCode: 301,
      },
      {
        source: '/ro/instrumente/convertor-pt-in-px',
        destination: '/en/tools/pt-to-px-converter',
        statusCode: 301,
      },
      {
        source: '/ro/instrumente/convertor-px-in-cm',
        destination: '/en/tools/px-to-cm-converter',
        statusCode: 301,
      },
      {
        source: '/ro/instrumente/convertor-rem-in-px',
        destination: '/en/tools/rem-to-px-converter',
        statusCode: 301,
      },
      {
        source: '/ro/instrumente/convertor-rgb-in-cmyk',
        destination: '/en/tools/rgb-to-cmyk-converter',
        statusCode: 301,
      },
      {
        source: '/ro/instrumente/convertor-svg-in-avif',
        destination: '/en/tools/svg-to-avif-converter',
        statusCode: 301,
      },
      {
        source: '/ro/instrumente/convertor-svg-in-gif',
        destination: '/en/tools/svg-to-gif-converter',
        statusCode: 301,
      },
      {
        source: '/ro/instrumente/convertor-svg-in-jpg',
        destination: '/en/tools/svg-to-jpg-converter',
        statusCode: 301,
      },
      {
        source: '/ro/instrumente/convertor-svg-in-pdf',
        destination: '/en/tools/svg-to-pdf-converter',
        statusCode: 301,
      },
      {
        source: '/ro/instrumente/convertor-svg-in-png',
        destination: '/en/tools/svg-to-png-converter',
        statusCode: 301,
      },
      {
        source: '/ro/instrumente/convertor-svg-in-tiff',
        destination: '/en/tools/svg-to-tiff-converter',
        statusCode: 301,
      },
      {
        source: '/ro/instrumente/convertor-svg-in-webp',
        destination: '/en/tools/svg-to-webp-converter',
        statusCode: 301,
      },
      {
        source: '/ro/instrumente/convertor-tiff-in-avif',
        destination: '/en/tools/tiff-to-avif-converter',
        statusCode: 301,
      },
      {
        source: '/ro/instrumente/convertor-tiff-in-jpg',
        destination: '/en/tools/tiff-to-jpg-converter',
        statusCode: 301,
      },
      {
        source: '/ro/instrumente/convertor-tiff-in-pdf',
        destination: '/en/tools/tiff-to-pdf-converter',
        statusCode: 301,
      },
      {
        source: '/ro/instrumente/convertor-tiff-in-png',
        destination: '/en/tools/tiff-to-png-converter',
        statusCode: 301,
      },
      {
        source: '/ro/instrumente/convertor-tiff-in-webp',
        destination: '/en/tools/tiff-to-webp-converter',
        statusCode: 301,
      },
      {
        source: '/ro/instrumente/convertor-unix-timestamp',
        destination: '/en/tools/unix-timestamp-converter',
        statusCode: 301,
      },
      {
        source: '/ro/instrumente/convertor-webp-in-avif',
        destination: '/en/tools/webp-to-avif-converter',
        statusCode: 301,
      },
      {
        source: '/ro/instrumente/convertor-webp-in-gif',
        destination: '/en/tools/webp-to-gif-converter',
        statusCode: 301,
      },
      {
        source: '/ro/instrumente/convertor-webp-in-jpg',
        destination: '/en/tools/webp-to-jpg-converter',
        statusCode: 301,
      },
      {
        source: '/ro/instrumente/convertor-webp-in-pdf',
        destination: '/en/tools/webp-to-pdf-converter',
        statusCode: 301,
      },
      {
        source: '/ro/instrumente/convertor-webp-in-png',
        destination: '/en/tools/webp-to-png-converter',
        statusCode: 301,
      },
      {
        source: '/ro/instrumente/convertor-webp-in-tiff',
        destination: '/en/tools/webp-to-tiff-converter',
        statusCode: 301,
      },
      {
        source: '/ro/instrumente/convertor-xml-in-json',
        destination: '/en/tools/xml-to-json-converter',
        statusCode: 301,
      },
      {
        source: '/ro/instrumente/convertor-yaml-in-json',
        destination: '/en/tools/yaml-to-json-converter',
        statusCode: 301,
      },
      {
        source: '/ro/instrumente/convertor-zecimal-in-binar',
        destination: '/en/tools/decimal-to-binary-converter',
        statusCode: 301,
      },
      {
        source: '/ro/instrumente/convertor-zecimal-in-hex',
        destination: '/en/tools/decimal-to-hex-converter',
        statusCode: 301,
      },
      {
        source: '/ro/instrumente/editor-de-imagini',
        destination: '/en/tools/online-image-editor',
        statusCode: 301,
      },
      {
        source: '/ro/instrumente/extractor-culori-din-imagine',
        destination: '/en/tools/image-color-extractor',
        statusCode: 301,
      },
      {
        source: '/ro/instrumente/generator-coduri-qr-gratuit',
        destination: '/en/tools/free-qr-code-generator',
        statusCode: 301,
      },
      {
        source: '/ro/instrumente/generator-de-palete-de-culori',
        destination: '/en/tools/color-palette-generator',
        statusCode: 301,
      },
      {
        source: '/ro/instrumente/generator-favicon-gratuit',
        destination: '/en/tools/free-favicon-generator',
        statusCode: 301,
      },
      {
        source: '/ro/instrumente/generator-lorem-ipsum',
        destination: '/en/tools/lorem-ipsum-generator',
        statusCode: 301,
      },
      {
        source: '/ro/instrumente/generator-semnatura-email-gratuit',
        destination: '/en/tools/free-email-signature-generator',
        statusCode: 301,
      },
      {
        source: '/ro/instrumente/verificator-contrast-culori',
        destination: '/en/tools/color-contrast-checker',
        statusCode: 301,
      },
      {
        source: '/ro/instrumente/verificator-meta-titlu-si-descriere',
        destination: '/en/tools/meta-title-description-length-checker',
        statusCode: 301,
      },
    ];

    // "hu" (Hungarian) locale was retired (2026-06-30): no measurable
    // traffic, not worth the crawl budget or translation token spend. Every
    // /hu/* page redirects to its exact /en/* equivalent.
    const retiredHuLocaleRedirects: Redirect[] = [
      { source: '/hu', destination: '/en/tools', statusCode: 301 },
      { source: '/hu/eszkozok', destination: '/en/tools', statusCode: 301 },
      { source: '/hu/rolunk', destination: '/en/about', statusCode: 301 },
      { source: '/hu/kapcsolat', destination: '/en/contact', statusCode: 301 },
      {
        source: '/hu/adatvedelmi-iranyelvek',
        destination: '/en/privacy-policy',
        statusCode: 301,
      },
      {
        source: '/hu/felhasznalasi-feltetelek',
        destination: '/en/terms-of-service',
        statusCode: 301,
      },
      {
        source: '/hu/eszkozok/avif-jpg-konverter',
        destination: '/en/tools/avif-to-jpg-converter',
        statusCode: 301,
      },
      {
        source: '/hu/eszkozok/avif-png-konverter',
        destination: '/en/tools/avif-to-png-converter',
        statusCode: 301,
      },
      {
        source: '/hu/eszkozok/avif-tiff-konverter',
        destination: '/en/tools/avif-to-tiff-converter',
        statusCode: 301,
      },
      {
        source: '/hu/eszkozok/avif-webp-konverter',
        destination: '/en/tools/avif-to-webp-converter',
        statusCode: 301,
      },
      {
        source: '/hu/eszkozok/bajt-atvalto',
        destination: '/en/tools/bytes-converter',
        statusCode: 301,
      },
      {
        source: '/hu/eszkozok/base64-kep-konverter',
        destination: '/en/tools/base64-to-image-converter',
        statusCode: 301,
      },
      {
        source: '/hu/eszkozok/bmp-avif-konverter',
        destination: '/en/tools/bmp-to-avif-converter',
        statusCode: 301,
      },
      {
        source: '/hu/eszkozok/bmp-gif-konverter',
        destination: '/en/tools/bmp-to-gif-converter',
        statusCode: 301,
      },
      {
        source: '/hu/eszkozok/bmp-jpg-konverter',
        destination: '/en/tools/bmp-to-jpg-converter',
        statusCode: 301,
      },
      {
        source: '/hu/eszkozok/bmp-pdf-konverter',
        destination: '/en/tools/bmp-to-pdf-converter',
        statusCode: 301,
      },
      {
        source: '/hu/eszkozok/bmp-png-konverter',
        destination: '/en/tools/bmp-to-png-converter',
        statusCode: 301,
      },
      {
        source: '/hu/eszkozok/bmp-tiff-konverter',
        destination: '/en/tools/bmp-to-tiff-converter',
        statusCode: 301,
      },
      {
        source: '/hu/eszkozok/bmp-webp-konverter',
        destination: '/en/tools/bmp-to-webp-converter',
        statusCode: 301,
      },
      {
        source: '/hu/eszkozok/cm-px-atvalto',
        destination: '/en/tools/cm-to-px-converter',
        statusCode: 301,
      },
      {
        source: '/hu/eszkozok/csv-json-konverter',
        destination: '/en/tools/csv-to-json-converter',
        statusCode: 301,
      },
      {
        source: '/hu/eszkozok/decimalis-binaris-atvalto',
        destination: '/en/tools/decimal-to-binary-converter',
        statusCode: 301,
      },
      {
        source: '/hu/eszkozok/decimalis-hex-atvalto',
        destination: '/en/tools/decimal-to-hex-converter',
        statusCode: 301,
      },
      {
        source: '/hu/eszkozok/dpi-ppi-atvalto',
        destination: '/en/tools/px-to-cm-converter',
        statusCode: 301,
      },
      {
        source: '/hu/eszkozok/em-px-atvalto',
        destination: '/en/tools/em-to-px-converter',
        statusCode: 301,
      },
      {
        source: '/hu/eszkozok/gif-avif-konverter',
        destination: '/en/tools/gif-to-avif-converter',
        statusCode: 301,
      },
      {
        source: '/hu/eszkozok/gif-jpg-konverter',
        destination: '/en/tools/gif-to-jpg-converter',
        statusCode: 301,
      },
      {
        source: '/hu/eszkozok/gif-png-konverter',
        destination: '/en/tools/gif-to-png-converter',
        statusCode: 301,
      },
      {
        source: '/hu/eszkozok/gif-webp-konverter',
        destination: '/en/tools/gif-to-webp-converter',
        statusCode: 301,
      },
      {
        source: '/hu/eszkozok/heic-avif-konverter',
        destination: '/en/tools/heic-to-avif-converter',
        statusCode: 301,
      },
      {
        source: '/hu/eszkozok/heic-jpg-konverter',
        destination: '/en/tools/heic-to-jpg-converter',
        statusCode: 301,
      },
      {
        source: '/hu/eszkozok/heic-pdf-konverter',
        destination: '/en/tools/heic-to-pdf-converter',
        statusCode: 301,
      },
      {
        source: '/hu/eszkozok/heic-png-konverter',
        destination: '/en/tools/heic-to-png-converter',
        statusCode: 301,
      },
      {
        source: '/hu/eszkozok/heic-tiff-konverter',
        destination: '/en/tools/heic-to-tiff-converter',
        statusCode: 301,
      },
      {
        source: '/hu/eszkozok/heic-webp-konverter',
        destination: '/en/tools/heic-to-webp-converter',
        statusCode: 301,
      },
      {
        source: '/hu/eszkozok/hex-rgb-atvalto',
        destination: '/en/tools/hex-to-rgb-converter',
        statusCode: 301,
      },
      {
        source: '/hu/eszkozok/html-markdown-konverter',
        destination: '/en/tools/html-to-markdown-converter',
        statusCode: 301,
      },
      {
        source: '/hu/eszkozok/huvely-px-atvalto',
        destination: '/en/tools/inches-to-px-converter',
        statusCode: 301,
      },
      {
        source: '/hu/eszkozok/ingyenes-email-alairas-generator',
        destination: '/en/tools/free-email-signature-generator',
        statusCode: 301,
      },
      {
        source: '/hu/eszkozok/ingyenes-favicon-generator',
        destination: '/en/tools/free-favicon-generator',
        statusCode: 301,
      },
      {
        source: '/hu/eszkozok/ingyenes-qr-kod-generator',
        destination: '/en/tools/free-qr-code-generator',
        statusCode: 301,
      },
      {
        source: '/hu/eszkozok/jpg-avif-konverter',
        destination: '/en/tools/jpg-to-avif-converter',
        statusCode: 301,
      },
      {
        source: '/hu/eszkozok/jpg-gif-konverter',
        destination: '/en/tools/jpg-to-gif-converter',
        statusCode: 301,
      },
      {
        source: '/hu/eszkozok/jpg-pdf-konverter',
        destination: '/en/tools/jpg-to-pdf-converter',
        statusCode: 301,
      },
      {
        source: '/hu/eszkozok/jpg-png-konverter',
        destination: '/en/tools/jpg-to-png-converter',
        statusCode: 301,
      },
      {
        source: '/hu/eszkozok/jpg-tiff-konverter',
        destination: '/en/tools/jpg-to-tiff-converter',
        statusCode: 301,
      },
      {
        source: '/hu/eszkozok/jpg-webp-konverter',
        destination: '/en/tools/jpg-to-webp-converter',
        statusCode: 301,
      },
      {
        source: '/hu/eszkozok/json-csv-konverter',
        destination: '/en/tools/json-to-csv-converter',
        statusCode: 301,
      },
      {
        source: '/hu/eszkozok/json-xml-konverter',
        destination: '/en/tools/json-to-xml-converter',
        statusCode: 301,
      },
      {
        source: '/hu/eszkozok/json-yaml-konverter',
        destination: '/en/tools/json-to-yaml-converter',
        statusCode: 301,
      },
      {
        source: '/hu/eszkozok/kep-base64-konverter',
        destination: '/en/tools/image-to-base64-converter',
        statusCode: 301,
      },
      {
        source: '/hu/eszkozok/kepszerkeszto',
        destination: '/en/tools/online-image-editor',
        statusCode: 301,
      },
      {
        source: '/hu/eszkozok/lorem-ipsum-generator',
        destination: '/en/tools/lorem-ipsum-generator',
        statusCode: 301,
      },
      {
        source: '/hu/eszkozok/markdown-html-konverter',
        destination: '/en/tools/markdown-to-html-converter',
        statusCode: 301,
      },
      {
        source: '/hu/eszkozok/mbps-mbs-atvalto',
        destination: '/en/tools/mbps-to-mbs-converter',
        statusCode: 301,
      },
      {
        source: '/hu/eszkozok/meta-cim-es-leiras-ellenorzo',
        destination: '/en/tools/meta-title-description-length-checker',
        statusCode: 301,
      },
      {
        source: '/hu/eszkozok/mm-px-atvalto',
        destination: '/en/tools/mm-to-px-converter',
        statusCode: 301,
      },
      {
        source: '/hu/eszkozok/pdf-jpg-konverter',
        destination: '/en/tools/pdf-to-jpg-converter',
        statusCode: 301,
      },
      {
        source: '/hu/eszkozok/pdf-png-konverter',
        destination: '/en/tools/pdf-to-png-converter',
        statusCode: 301,
      },
      {
        source: '/hu/eszkozok/pdf-webp-konverter',
        destination: '/en/tools/pdf-to-webp-converter',
        statusCode: 301,
      },
      {
        source: '/hu/eszkozok/png-avif-konverter',
        destination: '/en/tools/png-to-avif-converter',
        statusCode: 301,
      },
      {
        source: '/hu/eszkozok/png-gif-konverter',
        destination: '/en/tools/png-to-gif-converter',
        statusCode: 301,
      },
      {
        source: '/hu/eszkozok/png-jpg-konverter',
        destination: '/en/tools/png-to-jpg-converter',
        statusCode: 301,
      },
      {
        source: '/hu/eszkozok/png-pdf-konverter',
        destination: '/en/tools/png-to-pdf-converter',
        statusCode: 301,
      },
      {
        source: '/hu/eszkozok/png-tiff-konverter',
        destination: '/en/tools/png-to-tiff-converter',
        statusCode: 301,
      },
      {
        source: '/hu/eszkozok/png-webp-konverter',
        destination: '/en/tools/png-to-webp-converter',
        statusCode: 301,
      },
      {
        source: '/hu/eszkozok/pt-px-atvalto',
        destination: '/en/tools/pt-to-px-converter',
        statusCode: 301,
      },
      {
        source: '/hu/eszkozok/px-cm-atvalto',
        destination: '/en/tools/px-to-cm-converter',
        statusCode: 301,
      },
      {
        source: '/hu/eszkozok/rem-px-atvalto',
        destination: '/en/tools/rem-to-px-converter',
        statusCode: 301,
      },
      {
        source: '/hu/eszkozok/rgb-cmyk-atvalto',
        destination: '/en/tools/rgb-to-cmyk-converter',
        statusCode: 301,
      },
      {
        source: '/hu/eszkozok/svg-avif-konverter',
        destination: '/en/tools/svg-to-avif-converter',
        statusCode: 301,
      },
      {
        source: '/hu/eszkozok/svg-gif-konverter',
        destination: '/en/tools/svg-to-gif-converter',
        statusCode: 301,
      },
      {
        source: '/hu/eszkozok/svg-jpg-konverter',
        destination: '/en/tools/svg-to-jpg-converter',
        statusCode: 301,
      },
      {
        source: '/hu/eszkozok/svg-pdf-konverter',
        destination: '/en/tools/svg-to-pdf-converter',
        statusCode: 301,
      },
      {
        source: '/hu/eszkozok/svg-png-konverter',
        destination: '/en/tools/svg-to-png-converter',
        statusCode: 301,
      },
      {
        source: '/hu/eszkozok/svg-tiff-konverter',
        destination: '/en/tools/svg-to-tiff-converter',
        statusCode: 301,
      },
      {
        source: '/hu/eszkozok/svg-webp-konverter',
        destination: '/en/tools/svg-to-webp-converter',
        statusCode: 301,
      },
      {
        source: '/hu/eszkozok/szinkinyero-kepbol',
        destination: '/en/tools/image-color-extractor',
        statusCode: 301,
      },
      {
        source: '/hu/eszkozok/szinkontraszt-ellenorzo',
        destination: '/en/tools/color-contrast-checker',
        statusCode: 301,
      },
      {
        source: '/hu/eszkozok/szinpaletta-generator',
        destination: '/en/tools/color-palette-generator',
        statusCode: 301,
      },
      {
        source: '/hu/eszkozok/szo-es-karakterszamlalo',
        destination: '/en/tools/word-and-character-counter',
        statusCode: 301,
      },
      {
        source: '/hu/eszkozok/tiff-avif-konverter',
        destination: '/en/tools/tiff-to-avif-converter',
        statusCode: 301,
      },
      {
        source: '/hu/eszkozok/tiff-jpg-konverter',
        destination: '/en/tools/tiff-to-jpg-converter',
        statusCode: 301,
      },
      {
        source: '/hu/eszkozok/tiff-pdf-konverter',
        destination: '/en/tools/tiff-to-pdf-converter',
        statusCode: 301,
      },
      {
        source: '/hu/eszkozok/tiff-png-konverter',
        destination: '/en/tools/tiff-to-png-converter',
        statusCode: 301,
      },
      {
        source: '/hu/eszkozok/tiff-webp-konverter',
        destination: '/en/tools/tiff-to-webp-converter',
        statusCode: 301,
      },
      {
        source: '/hu/eszkozok/unix-idopont-atvalto',
        destination: '/en/tools/unix-timestamp-converter',
        statusCode: 301,
      },
      {
        source: '/hu/eszkozok/webp-avif-konverter',
        destination: '/en/tools/webp-to-avif-converter',
        statusCode: 301,
      },
      {
        source: '/hu/eszkozok/webp-gif-konverter',
        destination: '/en/tools/webp-to-gif-converter',
        statusCode: 301,
      },
      {
        source: '/hu/eszkozok/webp-jpg-konverter',
        destination: '/en/tools/webp-to-jpg-converter',
        statusCode: 301,
      },
      {
        source: '/hu/eszkozok/webp-pdf-konverter',
        destination: '/en/tools/webp-to-pdf-converter',
        statusCode: 301,
      },
      {
        source: '/hu/eszkozok/webp-png-konverter',
        destination: '/en/tools/webp-to-png-converter',
        statusCode: 301,
      },
      {
        source: '/hu/eszkozok/webp-tiff-konverter',
        destination: '/en/tools/webp-to-tiff-converter',
        statusCode: 301,
      },
      {
        source: '/hu/eszkozok/xml-json-konverter',
        destination: '/en/tools/xml-to-json-converter',
        statusCode: 301,
      },
      {
        source: '/hu/eszkozok/yaml-json-konverter',
        destination: '/en/tools/yaml-to-json-converter',
        statusCode: 301,
      },
    ];

    // "no" (Norwegian) locale was retired (2026-06-30): low views/clicks,
    // not worth the crawl budget or translation token spend. Every /no/*
    // page redirects to its exact /en/* equivalent.
    const retiredNoLocaleRedirects: Redirect[] = [
      { source: '/no', destination: '/en/tools', statusCode: 301 },
      { source: '/no/verktoy', destination: '/en/tools', statusCode: 301 },
      { source: '/no/om-oss', destination: '/en/about', statusCode: 301 },
      { source: '/no/kontakt', destination: '/en/contact', statusCode: 301 },
      {
        source: '/no/personvernpolicy',
        destination: '/en/privacy-policy',
        statusCode: 301,
      },
      {
        source: '/no/bruksvilkar',
        destination: '/en/terms-of-service',
        statusCode: 301,
      },
      {
        source: '/no/verktoy/avif-til-jpg-konverterer',
        destination: '/en/tools/avif-to-jpg-converter',
        statusCode: 301,
      },
      {
        source: '/no/verktoy/avif-til-png-konverterer',
        destination: '/en/tools/avif-to-png-converter',
        statusCode: 301,
      },
      {
        source: '/no/verktoy/avif-til-tiff-konverterer',
        destination: '/en/tools/avif-to-tiff-converter',
        statusCode: 301,
      },
      {
        source: '/no/verktoy/avif-til-webp-konverterer',
        destination: '/en/tools/avif-to-webp-converter',
        statusCode: 301,
      },
      {
        source: '/no/verktoy/base64-til-bilde-konverterer',
        destination: '/en/tools/base64-to-image-converter',
        statusCode: 301,
      },
      {
        source: '/no/verktoy/bilde-til-base64-konverterer',
        destination: '/en/tools/image-to-base64-converter',
        statusCode: 301,
      },
      {
        source: '/no/verktoy/bilderedigerer',
        destination: '/en/tools/online-image-editor',
        statusCode: 301,
      },
      {
        source: '/no/verktoy/bmp-til-avif-konverterer',
        destination: '/en/tools/bmp-to-avif-converter',
        statusCode: 301,
      },
      {
        source: '/no/verktoy/bmp-til-gif-konverterer',
        destination: '/en/tools/bmp-to-gif-converter',
        statusCode: 301,
      },
      {
        source: '/no/verktoy/bmp-til-jpg-konverterer',
        destination: '/en/tools/bmp-to-jpg-converter',
        statusCode: 301,
      },
      {
        source: '/no/verktoy/bmp-til-pdf-konverterer',
        destination: '/en/tools/bmp-to-pdf-converter',
        statusCode: 301,
      },
      {
        source: '/no/verktoy/bmp-til-png-konverterer',
        destination: '/en/tools/bmp-to-png-converter',
        statusCode: 301,
      },
      {
        source: '/no/verktoy/bmp-til-tiff-konverterer',
        destination: '/en/tools/bmp-to-tiff-converter',
        statusCode: 301,
      },
      {
        source: '/no/verktoy/bmp-til-webp-konverterer',
        destination: '/en/tools/bmp-to-webp-converter',
        statusCode: 301,
      },
      {
        source: '/no/verktoy/bytes-kalkulator',
        destination: '/en/tools/bytes-converter',
        statusCode: 301,
      },
      {
        source: '/no/verktoy/cm-til-px-kalkulator',
        destination: '/en/tools/cm-to-px-converter',
        statusCode: 301,
      },
      {
        source: '/no/verktoy/csv-til-json-konverterer',
        destination: '/en/tools/csv-to-json-converter',
        statusCode: 301,
      },
      {
        source: '/no/verktoy/desimal-til-binaer-kalkulator',
        destination: '/en/tools/decimal-to-binary-converter',
        statusCode: 301,
      },
      {
        source: '/no/verktoy/desimal-til-hex-kalkulator',
        destination: '/en/tools/decimal-to-hex-converter',
        statusCode: 301,
      },
      {
        source: '/no/verktoy/dpi-til-ppi-kalkulator',
        destination: '/en/tools/px-to-cm-converter',
        statusCode: 301,
      },
      {
        source: '/no/verktoy/em-til-px-kalkulator',
        destination: '/en/tools/em-to-px-converter',
        statusCode: 301,
      },
      {
        source: '/no/verktoy/fargekontrastsjekker',
        destination: '/en/tools/color-contrast-checker',
        statusCode: 301,
      },
      {
        source: '/no/verktoy/fargepalettgenerator',
        destination: '/en/tools/color-palette-generator',
        statusCode: 301,
      },
      {
        source: '/no/verktoy/fargeutrekker-fra-bilde',
        destination: '/en/tools/image-color-extractor',
        statusCode: 301,
      },
      {
        source: '/no/verktoy/gif-til-avif-konverterer',
        destination: '/en/tools/gif-to-avif-converter',
        statusCode: 301,
      },
      {
        source: '/no/verktoy/gif-til-jpg-konverterer',
        destination: '/en/tools/gif-to-jpg-converter',
        statusCode: 301,
      },
      {
        source: '/no/verktoy/gif-til-png-konverterer',
        destination: '/en/tools/gif-to-png-converter',
        statusCode: 301,
      },
      {
        source: '/no/verktoy/gif-til-webp-konverterer',
        destination: '/en/tools/gif-to-webp-converter',
        statusCode: 301,
      },
      {
        source: '/no/verktoy/gratis-e-postsignatur-generator',
        destination: '/en/tools/free-email-signature-generator',
        statusCode: 301,
      },
      {
        source: '/no/verktoy/gratis-favicon-generator',
        destination: '/en/tools/free-favicon-generator',
        statusCode: 301,
      },
      {
        source: '/no/verktoy/gratis-qr-kode-generator',
        destination: '/en/tools/free-qr-code-generator',
        statusCode: 301,
      },
      {
        source: '/no/verktoy/heic-til-avif-konverterer',
        destination: '/en/tools/heic-to-avif-converter',
        statusCode: 301,
      },
      {
        source: '/no/verktoy/heic-til-jpg-konverterer',
        destination: '/en/tools/heic-to-jpg-converter',
        statusCode: 301,
      },
      {
        source: '/no/verktoy/heic-til-pdf-konverterer',
        destination: '/en/tools/heic-to-pdf-converter',
        statusCode: 301,
      },
      {
        source: '/no/verktoy/heic-til-png-konverterer',
        destination: '/en/tools/heic-to-png-converter',
        statusCode: 301,
      },
      {
        source: '/no/verktoy/heic-til-tiff-konverterer',
        destination: '/en/tools/heic-to-tiff-converter',
        statusCode: 301,
      },
      {
        source: '/no/verktoy/heic-til-webp-konverterer',
        destination: '/en/tools/heic-to-webp-converter',
        statusCode: 301,
      },
      {
        source: '/no/verktoy/hex-til-rgb-kalkulator',
        destination: '/en/tools/hex-to-rgb-converter',
        statusCode: 301,
      },
      {
        source: '/no/verktoy/html-til-markdown-konverterer',
        destination: '/en/tools/html-to-markdown-converter',
        statusCode: 301,
      },
      {
        source: '/no/verktoy/jpg-til-avif-konverterer',
        destination: '/en/tools/jpg-to-avif-converter',
        statusCode: 301,
      },
      {
        source: '/no/verktoy/jpg-til-gif-konverterer',
        destination: '/en/tools/jpg-to-gif-converter',
        statusCode: 301,
      },
      {
        source: '/no/verktoy/jpg-til-pdf-konverterer',
        destination: '/en/tools/jpg-to-pdf-converter',
        statusCode: 301,
      },
      {
        source: '/no/verktoy/jpg-til-png-konverterer',
        destination: '/en/tools/jpg-to-png-converter',
        statusCode: 301,
      },
      {
        source: '/no/verktoy/jpg-til-tiff-konverterer',
        destination: '/en/tools/jpg-to-tiff-converter',
        statusCode: 301,
      },
      {
        source: '/no/verktoy/jpg-til-webp-konverterer',
        destination: '/en/tools/jpg-to-webp-converter',
        statusCode: 301,
      },
      {
        source: '/no/verktoy/json-til-csv-konverterer',
        destination: '/en/tools/json-to-csv-converter',
        statusCode: 301,
      },
      {
        source: '/no/verktoy/json-til-xml-konverterer',
        destination: '/en/tools/json-to-xml-converter',
        statusCode: 301,
      },
      {
        source: '/no/verktoy/json-til-yaml-konverterer',
        destination: '/en/tools/json-to-yaml-converter',
        statusCode: 301,
      },
      {
        source: '/no/verktoy/lorem-ipsum-generator',
        destination: '/en/tools/lorem-ipsum-generator',
        statusCode: 301,
      },
      {
        source: '/no/verktoy/markdown-til-html-konverterer',
        destination: '/en/tools/markdown-to-html-converter',
        statusCode: 301,
      },
      {
        source: '/no/verktoy/mbps-til-mbs-kalkulator',
        destination: '/en/tools/mbps-to-mbs-converter',
        statusCode: 301,
      },
      {
        source: '/no/verktoy/meta-tittel-og-beskrivelse-sjekker',
        destination: '/en/tools/meta-title-description-length-checker',
        statusCode: 301,
      },
      {
        source: '/no/verktoy/mm-til-px-kalkulator',
        destination: '/en/tools/mm-to-px-converter',
        statusCode: 301,
      },
      {
        source: '/no/verktoy/ord-og-tegnteller',
        destination: '/en/tools/word-and-character-counter',
        statusCode: 301,
      },
      {
        source: '/no/verktoy/pdf-til-jpg-konverterer',
        destination: '/en/tools/pdf-to-jpg-converter',
        statusCode: 301,
      },
      {
        source: '/no/verktoy/pdf-til-png-konverterer',
        destination: '/en/tools/pdf-to-png-converter',
        statusCode: 301,
      },
      {
        source: '/no/verktoy/pdf-til-webp-konverterer',
        destination: '/en/tools/pdf-to-webp-converter',
        statusCode: 301,
      },
      {
        source: '/no/verktoy/png-til-avif-konverterer',
        destination: '/en/tools/png-to-avif-converter',
        statusCode: 301,
      },
      {
        source: '/no/verktoy/png-til-gif-konverterer',
        destination: '/en/tools/png-to-gif-converter',
        statusCode: 301,
      },
      {
        source: '/no/verktoy/png-til-jpg-konverterer',
        destination: '/en/tools/png-to-jpg-converter',
        statusCode: 301,
      },
      {
        source: '/no/verktoy/png-til-pdf-konverterer',
        destination: '/en/tools/png-to-pdf-converter',
        statusCode: 301,
      },
      {
        source: '/no/verktoy/png-til-tiff-konverterer',
        destination: '/en/tools/png-to-tiff-converter',
        statusCode: 301,
      },
      {
        source: '/no/verktoy/png-til-webp-konverterer',
        destination: '/en/tools/png-to-webp-converter',
        statusCode: 301,
      },
      {
        source: '/no/verktoy/pt-til-px-kalkulator',
        destination: '/en/tools/pt-to-px-converter',
        statusCode: 301,
      },
      {
        source: '/no/verktoy/px-til-cm-kalkulator',
        destination: '/en/tools/px-to-cm-converter',
        statusCode: 301,
      },
      {
        source: '/no/verktoy/rem-til-px-kalkulator',
        destination: '/en/tools/rem-to-px-converter',
        statusCode: 301,
      },
      {
        source: '/no/verktoy/rgb-til-cmyk-kalkulator',
        destination: '/en/tools/rgb-to-cmyk-converter',
        statusCode: 301,
      },
      {
        source: '/no/verktoy/svg-til-avif-konverterer',
        destination: '/en/tools/svg-to-avif-converter',
        statusCode: 301,
      },
      {
        source: '/no/verktoy/svg-til-gif-konverterer',
        destination: '/en/tools/svg-to-gif-converter',
        statusCode: 301,
      },
      {
        source: '/no/verktoy/svg-til-jpg-konverterer',
        destination: '/en/tools/svg-to-jpg-converter',
        statusCode: 301,
      },
      {
        source: '/no/verktoy/svg-til-pdf-konverterer',
        destination: '/en/tools/svg-to-pdf-converter',
        statusCode: 301,
      },
      {
        source: '/no/verktoy/svg-til-png-konverterer',
        destination: '/en/tools/svg-to-png-converter',
        statusCode: 301,
      },
      {
        source: '/no/verktoy/svg-til-tiff-konverterer',
        destination: '/en/tools/svg-to-tiff-converter',
        statusCode: 301,
      },
      {
        source: '/no/verktoy/svg-til-webp-konverterer',
        destination: '/en/tools/svg-to-webp-converter',
        statusCode: 301,
      },
      {
        source: '/no/verktoy/tiff-til-avif-konverterer',
        destination: '/en/tools/tiff-to-avif-converter',
        statusCode: 301,
      },
      {
        source: '/no/verktoy/tiff-til-jpg-konverterer',
        destination: '/en/tools/tiff-to-jpg-converter',
        statusCode: 301,
      },
      {
        source: '/no/verktoy/tiff-til-pdf-konverterer',
        destination: '/en/tools/tiff-to-pdf-converter',
        statusCode: 301,
      },
      {
        source: '/no/verktoy/tiff-til-png-konverterer',
        destination: '/en/tools/tiff-to-png-converter',
        statusCode: 301,
      },
      {
        source: '/no/verktoy/tiff-til-webp-konverterer',
        destination: '/en/tools/tiff-to-webp-converter',
        statusCode: 301,
      },
      {
        source: '/no/verktoy/tommer-til-px-kalkulator',
        destination: '/en/tools/inches-to-px-converter',
        statusCode: 301,
      },
      {
        source: '/no/verktoy/unix-timestamp-kalkulator',
        destination: '/en/tools/unix-timestamp-converter',
        statusCode: 301,
      },
      {
        source: '/no/verktoy/webp-til-avif-konverterer',
        destination: '/en/tools/webp-to-avif-converter',
        statusCode: 301,
      },
      {
        source: '/no/verktoy/webp-til-gif-konverterer',
        destination: '/en/tools/webp-to-gif-converter',
        statusCode: 301,
      },
      {
        source: '/no/verktoy/webp-til-jpg-konverterer',
        destination: '/en/tools/webp-to-jpg-converter',
        statusCode: 301,
      },
      {
        source: '/no/verktoy/webp-til-pdf-konverterer',
        destination: '/en/tools/webp-to-pdf-converter',
        statusCode: 301,
      },
      {
        source: '/no/verktoy/webp-til-png-konverterer',
        destination: '/en/tools/webp-to-png-converter',
        statusCode: 301,
      },
      {
        source: '/no/verktoy/webp-til-tiff-konverterer',
        destination: '/en/tools/webp-to-tiff-converter',
        statusCode: 301,
      },
      {
        source: '/no/verktoy/xml-til-json-konverterer',
        destination: '/en/tools/xml-to-json-converter',
        statusCode: 301,
      },
      {
        source: '/no/verktoy/yaml-til-json-konverterer',
        destination: '/en/tools/yaml-to-json-converter',
        statusCode: 301,
      },
    ];

    // "sv" (Swedish) locale was retired (2026-06-30): low search volume,
    // not worth the crawl budget or translation token spend. Every /sv/*
    // page redirects to its exact /en/* equivalent.
    const retiredSvLocaleRedirects: Redirect[] = [
      { source: '/sv', destination: '/en/tools', statusCode: 301 },
      { source: '/sv/verktyg', destination: '/en/tools', statusCode: 301 },
      { source: '/sv/om-oss', destination: '/en/about', statusCode: 301 },
      { source: '/sv/kontakt', destination: '/en/contact', statusCode: 301 },
      {
        source: '/sv/integritetspolicy',
        destination: '/en/privacy-policy',
        statusCode: 301,
      },
      {
        source: '/sv/anvandarvillkor',
        destination: '/en/terms-of-service',
        statusCode: 301,
      },
      {
        source: '/sv/verktyg/avif-till-jpg-konverterare',
        destination: '/en/tools/avif-to-jpg-converter',
        statusCode: 301,
      },
      {
        source: '/sv/verktyg/avif-till-png-konverterare',
        destination: '/en/tools/avif-to-png-converter',
        statusCode: 301,
      },
      {
        source: '/sv/verktyg/avif-till-tiff-konverterare',
        destination: '/en/tools/avif-to-tiff-converter',
        statusCode: 301,
      },
      {
        source: '/sv/verktyg/avif-till-webp-konverterare',
        destination: '/en/tools/avif-to-webp-converter',
        statusCode: 301,
      },
      {
        source: '/sv/verktyg/base64-till-bild-konverterare',
        destination: '/en/tools/base64-to-image-converter',
        statusCode: 301,
      },
      {
        source: '/sv/verktyg/bild-till-base64-konverterare',
        destination: '/en/tools/image-to-base64-converter',
        statusCode: 301,
      },
      {
        source: '/sv/verktyg/bildredigerare',
        destination: '/en/tools/online-image-editor',
        statusCode: 301,
      },
      {
        source: '/sv/verktyg/bmp-till-avif-konverterare',
        destination: '/en/tools/bmp-to-avif-converter',
        statusCode: 301,
      },
      {
        source: '/sv/verktyg/bmp-till-gif-konverterare',
        destination: '/en/tools/bmp-to-gif-converter',
        statusCode: 301,
      },
      {
        source: '/sv/verktyg/bmp-till-jpg-konverterare',
        destination: '/en/tools/bmp-to-jpg-converter',
        statusCode: 301,
      },
      {
        source: '/sv/verktyg/bmp-till-pdf-konverterare',
        destination: '/en/tools/bmp-to-pdf-converter',
        statusCode: 301,
      },
      {
        source: '/sv/verktyg/bmp-till-png-konverterare',
        destination: '/en/tools/bmp-to-png-converter',
        statusCode: 301,
      },
      {
        source: '/sv/verktyg/bmp-till-tiff-konverterare',
        destination: '/en/tools/bmp-to-tiff-converter',
        statusCode: 301,
      },
      {
        source: '/sv/verktyg/bmp-till-webp-konverterare',
        destination: '/en/tools/bmp-to-webp-converter',
        statusCode: 301,
      },
      {
        source: '/sv/verktyg/bytes-omvandlare',
        destination: '/en/tools/bytes-converter',
        statusCode: 301,
      },
      {
        source: '/sv/verktyg/cm-till-px-omvandlare',
        destination: '/en/tools/cm-to-px-converter',
        statusCode: 301,
      },
      {
        source: '/sv/verktyg/csv-till-json-konverterare',
        destination: '/en/tools/csv-to-json-converter',
        statusCode: 301,
      },
      {
        source: '/sv/verktyg/decimal-till-binaer-omvandlare',
        destination: '/en/tools/decimal-to-binary-converter',
        statusCode: 301,
      },
      {
        source: '/sv/verktyg/decimal-till-hex-omvandlare',
        destination: '/en/tools/decimal-to-hex-converter',
        statusCode: 301,
      },
      {
        source: '/sv/verktyg/dpi-till-ppi-omvandlare',
        destination: '/en/tools/px-to-cm-converter',
        statusCode: 301,
      },
      {
        source: '/sv/verktyg/em-till-px-omvandlare',
        destination: '/en/tools/em-to-px-converter',
        statusCode: 301,
      },
      {
        source: '/sv/verktyg/fargextraktor-fran-bild',
        destination: '/en/tools/image-color-extractor',
        statusCode: 301,
      },
      {
        source: '/sv/verktyg/fargkontrastkontroll',
        destination: '/en/tools/color-contrast-checker',
        statusCode: 301,
      },
      {
        source: '/sv/verktyg/fargpalettgenerator',
        destination: '/en/tools/color-palette-generator',
        statusCode: 301,
      },
      {
        source: '/sv/verktyg/gif-till-avif-konverterare',
        destination: '/en/tools/gif-to-avif-converter',
        statusCode: 301,
      },
      {
        source: '/sv/verktyg/gif-till-jpg-konverterare',
        destination: '/en/tools/gif-to-jpg-converter',
        statusCode: 301,
      },
      {
        source: '/sv/verktyg/gif-till-png-konverterare',
        destination: '/en/tools/gif-to-png-converter',
        statusCode: 301,
      },
      {
        source: '/sv/verktyg/gif-till-webp-konverterare',
        destination: '/en/tools/gif-to-webp-converter',
        statusCode: 301,
      },
      {
        source: '/sv/verktyg/gratis-e-postsignatur-generator',
        destination: '/en/tools/free-email-signature-generator',
        statusCode: 301,
      },
      {
        source: '/sv/verktyg/gratis-favicon-generator',
        destination: '/en/tools/free-favicon-generator',
        statusCode: 301,
      },
      {
        source: '/sv/verktyg/gratis-qr-kodgenerator',
        destination: '/en/tools/free-qr-code-generator',
        statusCode: 301,
      },
      {
        source: '/sv/verktyg/heic-till-avif-konverterare',
        destination: '/en/tools/heic-to-avif-converter',
        statusCode: 301,
      },
      {
        source: '/sv/verktyg/heic-till-jpg-konverterare',
        destination: '/en/tools/heic-to-jpg-converter',
        statusCode: 301,
      },
      {
        source: '/sv/verktyg/heic-till-pdf-konverterare',
        destination: '/en/tools/heic-to-pdf-converter',
        statusCode: 301,
      },
      {
        source: '/sv/verktyg/heic-till-png-konverterare',
        destination: '/en/tools/heic-to-png-converter',
        statusCode: 301,
      },
      {
        source: '/sv/verktyg/heic-till-tiff-konverterare',
        destination: '/en/tools/heic-to-tiff-converter',
        statusCode: 301,
      },
      {
        source: '/sv/verktyg/heic-till-webp-konverterare',
        destination: '/en/tools/heic-to-webp-converter',
        statusCode: 301,
      },
      {
        source: '/sv/verktyg/hex-till-rgb-omvandlare',
        destination: '/en/tools/hex-to-rgb-converter',
        statusCode: 301,
      },
      {
        source: '/sv/verktyg/html-till-markdown-konverterare',
        destination: '/en/tools/html-to-markdown-converter',
        statusCode: 301,
      },
      {
        source: '/sv/verktyg/jpg-till-avif-konverterare',
        destination: '/en/tools/jpg-to-avif-converter',
        statusCode: 301,
      },
      {
        source: '/sv/verktyg/jpg-till-gif-konverterare',
        destination: '/en/tools/jpg-to-gif-converter',
        statusCode: 301,
      },
      {
        source: '/sv/verktyg/jpg-till-pdf-konverterare',
        destination: '/en/tools/jpg-to-pdf-converter',
        statusCode: 301,
      },
      {
        source: '/sv/verktyg/jpg-till-png-konverterare',
        destination: '/en/tools/jpg-to-png-converter',
        statusCode: 301,
      },
      {
        source: '/sv/verktyg/jpg-till-tiff-konverterare',
        destination: '/en/tools/jpg-to-tiff-converter',
        statusCode: 301,
      },
      {
        source: '/sv/verktyg/jpg-till-webp-konverterare',
        destination: '/en/tools/jpg-to-webp-converter',
        statusCode: 301,
      },
      {
        source: '/sv/verktyg/json-till-csv-konverterare',
        destination: '/en/tools/json-to-csv-converter',
        statusCode: 301,
      },
      {
        source: '/sv/verktyg/json-till-xml-konverterare',
        destination: '/en/tools/json-to-xml-converter',
        statusCode: 301,
      },
      {
        source: '/sv/verktyg/json-till-yaml-konverterare',
        destination: '/en/tools/json-to-yaml-converter',
        statusCode: 301,
      },
      {
        source: '/sv/verktyg/lorem-ipsum-generator',
        destination: '/en/tools/lorem-ipsum-generator',
        statusCode: 301,
      },
      {
        source: '/sv/verktyg/markdown-till-html-konverterare',
        destination: '/en/tools/markdown-to-html-converter',
        statusCode: 301,
      },
      {
        source: '/sv/verktyg/mbps-till-mbs-omvandlare',
        destination: '/en/tools/mbps-to-mbs-converter',
        statusCode: 301,
      },
      {
        source: '/sv/verktyg/meta-titel-och-beskrivning-kontroll',
        destination: '/en/tools/meta-title-description-length-checker',
        statusCode: 301,
      },
      {
        source: '/sv/verktyg/mm-till-px-omvandlare',
        destination: '/en/tools/mm-to-px-converter',
        statusCode: 301,
      },
      {
        source: '/sv/verktyg/ord-och-teckenraknare',
        destination: '/en/tools/word-and-character-counter',
        statusCode: 301,
      },
      {
        source: '/sv/verktyg/pdf-till-jpg-konverterare',
        destination: '/en/tools/pdf-to-jpg-converter',
        statusCode: 301,
      },
      {
        source: '/sv/verktyg/pdf-till-png-konverterare',
        destination: '/en/tools/pdf-to-png-converter',
        statusCode: 301,
      },
      {
        source: '/sv/verktyg/pdf-till-webp-konverterare',
        destination: '/en/tools/pdf-to-webp-converter',
        statusCode: 301,
      },
      {
        source: '/sv/verktyg/png-till-avif-konverterare',
        destination: '/en/tools/png-to-avif-converter',
        statusCode: 301,
      },
      {
        source: '/sv/verktyg/png-till-gif-konverterare',
        destination: '/en/tools/png-to-gif-converter',
        statusCode: 301,
      },
      {
        source: '/sv/verktyg/png-till-jpg-konverterare',
        destination: '/en/tools/png-to-jpg-converter',
        statusCode: 301,
      },
      {
        source: '/sv/verktyg/png-till-pdf-konverterare',
        destination: '/en/tools/png-to-pdf-converter',
        statusCode: 301,
      },
      {
        source: '/sv/verktyg/png-till-tiff-konverterare',
        destination: '/en/tools/png-to-tiff-converter',
        statusCode: 301,
      },
      {
        source: '/sv/verktyg/png-till-webp-konverterare',
        destination: '/en/tools/png-to-webp-converter',
        statusCode: 301,
      },
      {
        source: '/sv/verktyg/pt-till-px-omvandlare',
        destination: '/en/tools/pt-to-px-converter',
        statusCode: 301,
      },
      {
        source: '/sv/verktyg/px-till-cm-omvandlare',
        destination: '/en/tools/px-to-cm-converter',
        statusCode: 301,
      },
      {
        source: '/sv/verktyg/rem-till-px-omvandlare',
        destination: '/en/tools/rem-to-px-converter',
        statusCode: 301,
      },
      {
        source: '/sv/verktyg/rgb-till-cmyk-omvandlare',
        destination: '/en/tools/rgb-to-cmyk-converter',
        statusCode: 301,
      },
      {
        source: '/sv/verktyg/svg-till-avif-konverterare',
        destination: '/en/tools/svg-to-avif-converter',
        statusCode: 301,
      },
      {
        source: '/sv/verktyg/svg-till-gif-konverterare',
        destination: '/en/tools/svg-to-gif-converter',
        statusCode: 301,
      },
      {
        source: '/sv/verktyg/svg-till-jpg-konverterare',
        destination: '/en/tools/svg-to-jpg-converter',
        statusCode: 301,
      },
      {
        source: '/sv/verktyg/svg-till-pdf-konverterare',
        destination: '/en/tools/svg-to-pdf-converter',
        statusCode: 301,
      },
      {
        source: '/sv/verktyg/svg-till-png-konverterare',
        destination: '/en/tools/svg-to-png-converter',
        statusCode: 301,
      },
      {
        source: '/sv/verktyg/svg-till-tiff-konverterare',
        destination: '/en/tools/svg-to-tiff-converter',
        statusCode: 301,
      },
      {
        source: '/sv/verktyg/svg-till-webp-konverterare',
        destination: '/en/tools/svg-to-webp-converter',
        statusCode: 301,
      },
      {
        source: '/sv/verktyg/tiff-till-avif-konverterare',
        destination: '/en/tools/tiff-to-avif-converter',
        statusCode: 301,
      },
      {
        source: '/sv/verktyg/tiff-till-jpg-konverterare',
        destination: '/en/tools/tiff-to-jpg-converter',
        statusCode: 301,
      },
      {
        source: '/sv/verktyg/tiff-till-pdf-konverterare',
        destination: '/en/tools/tiff-to-pdf-converter',
        statusCode: 301,
      },
      {
        source: '/sv/verktyg/tiff-till-png-konverterare',
        destination: '/en/tools/tiff-to-png-converter',
        statusCode: 301,
      },
      {
        source: '/sv/verktyg/tiff-till-webp-konverterare',
        destination: '/en/tools/tiff-to-webp-converter',
        statusCode: 301,
      },
      {
        source: '/sv/verktyg/tum-till-px-omvandlare',
        destination: '/en/tools/inches-to-px-converter',
        statusCode: 301,
      },
      {
        source: '/sv/verktyg/unix-timestamp-omvandlare',
        destination: '/en/tools/unix-timestamp-converter',
        statusCode: 301,
      },
      {
        source: '/sv/verktyg/webp-till-avif-konverterare',
        destination: '/en/tools/webp-to-avif-converter',
        statusCode: 301,
      },
      {
        source: '/sv/verktyg/webp-till-gif-konverterare',
        destination: '/en/tools/webp-to-gif-converter',
        statusCode: 301,
      },
      {
        source: '/sv/verktyg/webp-till-jpg-konverterare',
        destination: '/en/tools/webp-to-jpg-converter',
        statusCode: 301,
      },
      {
        source: '/sv/verktyg/webp-till-pdf-konverterare',
        destination: '/en/tools/webp-to-pdf-converter',
        statusCode: 301,
      },
      {
        source: '/sv/verktyg/webp-till-png-konverterare',
        destination: '/en/tools/webp-to-png-converter',
        statusCode: 301,
      },
      {
        source: '/sv/verktyg/webp-till-tiff-konverterare',
        destination: '/en/tools/webp-to-tiff-converter',
        statusCode: 301,
      },
      {
        source: '/sv/verktyg/xml-till-json-konverterare',
        destination: '/en/tools/xml-to-json-converter',
        statusCode: 301,
      },
      {
        source: '/sv/verktyg/yaml-till-json-konverterare',
        destination: '/en/tools/yaml-to-json-converter',
        statusCode: 301,
      },
    ];

    // "nl" (Dutch) locale was retired (2026-07-01): low views/clicks relative
    // to crawl budget. Every /nl/* page redirects to its exact /en/* equivalent.
    const retiredNlLocaleRedirects: Redirect[] = [
      { source: '/nl', destination: '/en/tools', statusCode: 301 },
      { source: '/nl/tools', destination: '/en/tools', statusCode: 301 },
      { source: '/nl/over-ons', destination: '/en/about', statusCode: 301 },
      { source: '/nl/contact', destination: '/en/contact', statusCode: 301 },
      {
        source: '/nl/privacybeleid',
        destination: '/en/privacy-policy',
        statusCode: 301,
      },
      {
        source: '/nl/gebruiksvoorwaarden',
        destination: '/en/terms-of-service',
        statusCode: 301,
      },
      {
        source: '/nl/gereedschappen/cm-naar-inches-converter',
        destination: '/en/tools/cm-to-inches-converter',
        statusCode: 301,
      },
      {
        source: '/nl/gereedschappen/inches-naar-cm-converter',
        destination: '/en/tools/inches-to-cm-converter',
        statusCode: 301,
      },
      {
        source: '/nl/hulpmiddelen/px-naar-cm-converter',
        destination: '/en/tools/px-to-cm-converter',
        statusCode: 301,
      },
      {
        source: '/nl/tools/afbeeldingeneditor',
        destination: '/en/tools/online-image-editor',
        statusCode: 301,
      },
      {
        source: '/nl/tools/afbeelding-naar-base64-converter',
        destination: '/en/tools/image-to-base64-converter',
        statusCode: 301,
      },
      {
        source: '/nl/tools/avif-naar-jpg-converter',
        destination: '/en/tools/avif-to-jpg-converter',
        statusCode: 301,
      },
      {
        source: '/nl/tools/avif-naar-png-converter',
        destination: '/en/tools/avif-to-png-converter',
        statusCode: 301,
      },
      {
        source: '/nl/tools/avif-naar-tiff-converter',
        destination: '/en/tools/avif-to-tiff-converter',
        statusCode: 301,
      },
      {
        source: '/nl/tools/avif-naar-webp-converter',
        destination: '/en/tools/avif-to-webp-converter',
        statusCode: 301,
      },
      {
        source: '/nl/tools/base64-naar-afbeelding-converter',
        destination: '/en/tools/base64-to-image-converter',
        statusCode: 301,
      },
      {
        source: '/nl/tools/bmp-naar-avif-converter',
        destination: '/en/tools/bmp-to-avif-converter',
        statusCode: 301,
      },
      {
        source: '/nl/tools/bmp-naar-gif-converter',
        destination: '/en/tools/bmp-to-gif-converter',
        statusCode: 301,
      },
      {
        source: '/nl/tools/bmp-naar-jpg-converter',
        destination: '/en/tools/bmp-to-jpg-converter',
        statusCode: 301,
      },
      {
        source: '/nl/tools/bmp-naar-pdf-converter',
        destination: '/en/tools/bmp-to-pdf-converter',
        statusCode: 301,
      },
      {
        source: '/nl/tools/bmp-naar-png-converter',
        destination: '/en/tools/bmp-to-png-converter',
        statusCode: 301,
      },
      {
        source: '/nl/tools/bmp-naar-tiff-converter',
        destination: '/en/tools/bmp-to-tiff-converter',
        statusCode: 301,
      },
      {
        source: '/nl/tools/bmp-naar-webp-converter',
        destination: '/en/tools/bmp-to-webp-converter',
        statusCode: 301,
      },
      {
        source: '/nl/tools/bytes-converter',
        destination: '/en/tools/bytes-converter',
        statusCode: 301,
      },
      {
        source: '/nl/tools/cm-naar-px-converter',
        destination: '/en/tools/cm-to-px-converter',
        statusCode: 301,
      },
      {
        source: '/nl/tools/csv-naar-json-converter',
        destination: '/en/tools/csv-to-json-converter',
        statusCode: 301,
      },
      {
        source: '/nl/tools/decimaal-naar-binair-converter',
        destination: '/en/tools/decimal-to-binary-converter',
        statusCode: 301,
      },
      {
        source: '/nl/tools/decimaal-naar-hex-converter',
        destination: '/en/tools/decimal-to-hex-converter',
        statusCode: 301,
      },
      {
        source: '/nl/tools/em-naar-px-converter',
        destination: '/en/tools/em-to-px-converter',
        statusCode: 301,
      },
      {
        source: '/nl/tools/gif-naar-avif-converter',
        destination: '/en/tools/gif-to-avif-converter',
        statusCode: 301,
      },
      {
        source: '/nl/tools/gif-naar-jpg-converter',
        destination: '/en/tools/gif-to-jpg-converter',
        statusCode: 301,
      },
      {
        source: '/nl/tools/gif-naar-png-converter',
        destination: '/en/tools/gif-to-png-converter',
        statusCode: 301,
      },
      {
        source: '/nl/tools/gif-naar-webp-converter',
        destination: '/en/tools/gif-to-webp-converter',
        statusCode: 301,
      },
      {
        source: '/nl/tools/gratis-e-mailhandtekening-generator',
        destination: '/en/tools/free-email-signature-generator',
        statusCode: 301,
      },
      {
        source: '/nl/tools/gratis-favicon-generator',
        destination: '/en/tools/free-favicon-generator',
        statusCode: 301,
      },
      {
        source: '/nl/tools/gratis-qr-code-generator',
        destination: '/en/tools/free-qr-code-generator',
        statusCode: 301,
      },
      {
        source: '/nl/tools/heic-naar-avif-converter',
        destination: '/en/tools/heic-to-avif-converter',
        statusCode: 301,
      },
      {
        source: '/nl/tools/heic-naar-jpg-converter',
        destination: '/en/tools/heic-to-jpg-converter',
        statusCode: 301,
      },
      {
        source: '/nl/tools/heic-naar-pdf-converter',
        destination: '/en/tools/heic-to-pdf-converter',
        statusCode: 301,
      },
      {
        source: '/nl/tools/heic-naar-png-converter',
        destination: '/en/tools/heic-to-png-converter',
        statusCode: 301,
      },
      {
        source: '/nl/tools/heic-naar-tiff-converter',
        destination: '/en/tools/heic-to-tiff-converter',
        statusCode: 301,
      },
      {
        source: '/nl/tools/heic-naar-webp-converter',
        destination: '/en/tools/heic-to-webp-converter',
        statusCode: 301,
      },
      {
        source: '/nl/tools/hex-naar-rgb-converter',
        destination: '/en/tools/hex-to-rgb-converter',
        statusCode: 301,
      },
      {
        source: '/nl/tools/html-naar-markdown-converter',
        destination: '/en/tools/html-to-markdown-converter',
        statusCode: 301,
      },
      {
        source: '/nl/tools/inches-naar-px-converter',
        destination: '/en/tools/inches-to-px-converter',
        statusCode: 301,
      },
      {
        source: '/nl/tools/jpg-naar-avif-converter',
        destination: '/en/tools/jpg-to-avif-converter',
        statusCode: 301,
      },
      {
        source: '/nl/tools/jpg-naar-gif-converter',
        destination: '/en/tools/jpg-to-gif-converter',
        statusCode: 301,
      },
      {
        source: '/nl/tools/jpg-naar-pdf-converter',
        destination: '/en/tools/jpg-to-pdf-converter',
        statusCode: 301,
      },
      {
        source: '/nl/tools/jpg-naar-png-converter',
        destination: '/en/tools/jpg-to-png-converter',
        statusCode: 301,
      },
      {
        source: '/nl/tools/jpg-naar-tiff-converter',
        destination: '/en/tools/jpg-to-tiff-converter',
        statusCode: 301,
      },
      {
        source: '/nl/tools/jpg-naar-webp-converter',
        destination: '/en/tools/jpg-to-webp-converter',
        statusCode: 301,
      },
      {
        source: '/nl/tools/json-naar-csv-converter',
        destination: '/en/tools/json-to-csv-converter',
        statusCode: 301,
      },
      {
        source: '/nl/tools/json-naar-xml-converter',
        destination: '/en/tools/json-to-xml-converter',
        statusCode: 301,
      },
      {
        source: '/nl/tools/json-naar-yaml-converter',
        destination: '/en/tools/json-to-yaml-converter',
        statusCode: 301,
      },
      {
        source: '/nl/tools/kg-naar-pond-converter',
        destination: '/en/tools/kg-to-lb-converter',
        statusCode: 301,
      },
      {
        source: '/nl/tools/kleurcontrast-checker',
        destination: '/en/tools/color-contrast-checker',
        statusCode: 301,
      },
      {
        source: '/nl/tools/kleurextractor-uit-afbeelding',
        destination: '/en/tools/image-color-extractor',
        statusCode: 301,
      },
      {
        source: '/nl/tools/kleurpalettengenerator',
        destination: '/en/tools/color-palette-generator',
        statusCode: 301,
      },
      {
        source: '/nl/tools/markdown-naar-html-converter',
        destination: '/en/tools/markdown-to-html-converter',
        statusCode: 301,
      },
      {
        source: '/nl/tools/mbps-naar-mbs-converter',
        destination: '/en/tools/mbps-to-mbs-converter',
        statusCode: 301,
      },
      {
        source: '/nl/tools/meta-titel-beschrijving-checker',
        destination: '/en/tools/meta-title-description-length-checker',
        statusCode: 301,
      },
      {
        source: '/nl/tools/mm-naar-px-converter',
        destination: '/en/tools/mm-to-px-converter',
        statusCode: 301,
      },
      {
        source: '/nl/tools/pdf-naar-jpg-converter',
        destination: '/en/tools/pdf-to-jpg-converter',
        statusCode: 301,
      },
      {
        source: '/nl/tools/pdf-naar-png-converter',
        destination: '/en/tools/pdf-to-png-converter',
        statusCode: 301,
      },
      {
        source: '/nl/tools/pdf-naar-webp-converter',
        destination: '/en/tools/pdf-to-webp-converter',
        statusCode: 301,
      },
      {
        source: '/nl/tools/png-naar-avif-converter',
        destination: '/en/tools/png-to-avif-converter',
        statusCode: 301,
      },
      {
        source: '/nl/tools/png-naar-gif-converter',
        destination: '/en/tools/png-to-gif-converter',
        statusCode: 301,
      },
      {
        source: '/nl/tools/png-naar-jpg-converter',
        destination: '/en/tools/png-to-jpg-converter',
        statusCode: 301,
      },
      {
        source: '/nl/tools/png-naar-pdf-converter',
        destination: '/en/tools/png-to-pdf-converter',
        statusCode: 301,
      },
      {
        source: '/nl/tools/png-naar-tiff-converter',
        destination: '/en/tools/png-to-tiff-converter',
        statusCode: 301,
      },
      {
        source: '/nl/tools/png-naar-webp-converter',
        destination: '/en/tools/png-to-webp-converter',
        statusCode: 301,
      },
      {
        source: '/nl/tools/pond-naar-kg-converter',
        destination: '/en/tools/lb-to-kg-converter',
        statusCode: 301,
      },
      {
        source: '/nl/tools/pt-naar-px-converter',
        destination: '/en/tools/pt-to-px-converter',
        statusCode: 301,
      },
      {
        source: '/nl/tools/px-naar-mm-converter',
        destination: '/en/tools/px-to-mm-converter',
        statusCode: 301,
      },
      {
        source: '/nl/tools/rem-naar-px-converter',
        destination: '/en/tools/rem-to-px-converter',
        statusCode: 301,
      },
      {
        source: '/nl/tools/rgb-naar-cmyk-converter',
        destination: '/en/tools/rgb-to-cmyk-converter',
        statusCode: 301,
      },
      {
        source: '/nl/tools/svg-naar-avif-converter',
        destination: '/en/tools/svg-to-avif-converter',
        statusCode: 301,
      },
      {
        source: '/nl/tools/svg-naar-gif-converter',
        destination: '/en/tools/svg-to-gif-converter',
        statusCode: 301,
      },
      {
        source: '/nl/tools/svg-naar-jpg-converter',
        destination: '/en/tools/svg-to-jpg-converter',
        statusCode: 301,
      },
      {
        source: '/nl/tools/svg-naar-pdf-converter',
        destination: '/en/tools/svg-to-pdf-converter',
        statusCode: 301,
      },
      {
        source: '/nl/tools/svg-naar-png-converter',
        destination: '/en/tools/svg-to-png-converter',
        statusCode: 301,
      },
      {
        source: '/nl/tools/svg-naar-tiff-converter',
        destination: '/en/tools/svg-to-tiff-converter',
        statusCode: 301,
      },
      {
        source: '/nl/tools/svg-naar-webp-converter',
        destination: '/en/tools/svg-to-webp-converter',
        statusCode: 301,
      },
      {
        source: '/nl/tools/tiff-naar-avif-converter',
        destination: '/en/tools/tiff-to-avif-converter',
        statusCode: 301,
      },
      {
        source: '/nl/tools/tiff-naar-jpg-converter',
        destination: '/en/tools/tiff-to-jpg-converter',
        statusCode: 301,
      },
      {
        source: '/nl/tools/tiff-naar-pdf-converter',
        destination: '/en/tools/tiff-to-pdf-converter',
        statusCode: 301,
      },
      {
        source: '/nl/tools/tiff-naar-png-converter',
        destination: '/en/tools/tiff-to-png-converter',
        statusCode: 301,
      },
      {
        source: '/nl/tools/tiff-naar-webp-converter',
        destination: '/en/tools/tiff-to-webp-converter',
        statusCode: 301,
      },
      {
        source: '/nl/tools/unix-timestamp-converter',
        destination: '/en/tools/unix-timestamp-converter',
        statusCode: 301,
      },
      {
        source: '/nl/tools/webp-naar-avif-converter',
        destination: '/en/tools/webp-to-avif-converter',
        statusCode: 301,
      },
      {
        source: '/nl/tools/webp-naar-gif-converter',
        destination: '/en/tools/webp-to-gif-converter',
        statusCode: 301,
      },
      {
        source: '/nl/tools/webp-naar-jpg-converter',
        destination: '/en/tools/webp-to-jpg-converter',
        statusCode: 301,
      },
      {
        source: '/nl/tools/webp-naar-pdf-converter',
        destination: '/en/tools/webp-to-pdf-converter',
        statusCode: 301,
      },
      {
        source: '/nl/tools/webp-naar-png-converter',
        destination: '/en/tools/webp-to-png-converter',
        statusCode: 301,
      },
      {
        source: '/nl/tools/webp-naar-tiff-converter',
        destination: '/en/tools/webp-to-tiff-converter',
        statusCode: 301,
      },
      {
        source: '/nl/tools/woorden-en-tekenteller',
        destination: '/en/tools/word-and-character-counter',
        statusCode: 301,
      },
      {
        source: '/nl/tools/xml-naar-json-converter',
        destination: '/en/tools/xml-to-json-converter',
        statusCode: 301,
      },
      {
        source: '/nl/tools/yaml-naar-json-converter',
        destination: '/en/tools/yaml-to-json-converter',
        statusCode: 301,
      },
    ];

    // "fi" (Finnish) locale was retired (2026-07-01): low views/clicks relative
    // to crawl budget. Every /fi/* page redirects to its exact /en/* equivalent.
    const retiredFiLocaleRedirects: Redirect[] = [
      { source: '/fi', destination: '/en/tools', statusCode: 301 },
      { source: '/fi/tyokalut', destination: '/en/tools', statusCode: 301 },
      {
        source: '/fi/tietoa-meista',
        destination: '/en/about',
        statusCode: 301,
      },
      {
        source: '/fi/yhteystiedot',
        destination: '/en/contact',
        statusCode: 301,
      },
      {
        source: '/fi/tietosuojakaytanto',
        destination: '/en/privacy-policy',
        statusCode: 301,
      },
      {
        source: '/fi/kayttoehdot',
        destination: '/en/terms-of-service',
        statusCode: 301,
      },
      {
        source: '/fi/tyokalut/avif-jpg-muunnin',
        destination: '/en/tools/avif-to-jpg-converter',
        statusCode: 301,
      },
      {
        source: '/fi/tyokalut/avif-png-muunnin',
        destination: '/en/tools/avif-to-png-converter',
        statusCode: 301,
      },
      {
        source: '/fi/tyokalut/avif-tiff-muunnin',
        destination: '/en/tools/avif-to-tiff-converter',
        statusCode: 301,
      },
      {
        source: '/fi/tyokalut/avif-webp-muunnin',
        destination: '/en/tools/avif-to-webp-converter',
        statusCode: 301,
      },
      {
        source: '/fi/tyokalut/base64-kuva-muunnin',
        destination: '/en/tools/base64-to-image-converter',
        statusCode: 301,
      },
      {
        source: '/fi/tyokalut/bmp-avif-muunnin',
        destination: '/en/tools/bmp-to-avif-converter',
        statusCode: 301,
      },
      {
        source: '/fi/tyokalut/bmp-gif-muunnin',
        destination: '/en/tools/bmp-to-gif-converter',
        statusCode: 301,
      },
      {
        source: '/fi/tyokalut/bmp-jpg-muunnin',
        destination: '/en/tools/bmp-to-jpg-converter',
        statusCode: 301,
      },
      {
        source: '/fi/tyokalut/bmp-pdf-muunnin',
        destination: '/en/tools/bmp-to-pdf-converter',
        statusCode: 301,
      },
      {
        source: '/fi/tyokalut/bmp-png-muunnin',
        destination: '/en/tools/bmp-to-png-converter',
        statusCode: 301,
      },
      {
        source: '/fi/tyokalut/bmp-tiff-muunnin',
        destination: '/en/tools/bmp-to-tiff-converter',
        statusCode: 301,
      },
      {
        source: '/fi/tyokalut/bmp-webp-muunnin',
        destination: '/en/tools/bmp-to-webp-converter',
        statusCode: 301,
      },
      {
        source: '/fi/tyokalut/cm-px-muunnin',
        destination: '/en/tools/cm-to-px-converter',
        statusCode: 301,
      },
      {
        source: '/fi/tyokalut/cm-tuumiksi-muunnin',
        destination: '/en/tools/cm-to-inches-converter',
        statusCode: 301,
      },
      {
        source: '/fi/tyokalut/csv-json-muunnin',
        destination: '/en/tools/csv-to-json-converter',
        statusCode: 301,
      },
      {
        source: '/fi/tyokalut/desimaali-binaari-muunnin',
        destination: '/en/tools/decimal-to-binary-converter',
        statusCode: 301,
      },
      {
        source: '/fi/tyokalut/desimaali-heksa-muunnin',
        destination: '/en/tools/decimal-to-hex-converter',
        statusCode: 301,
      },
      {
        source: '/fi/tyokalut/em-px-muunnin',
        destination: '/en/tools/em-to-px-converter',
        statusCode: 301,
      },
      {
        source: '/fi/tyokalut/gif-avif-muunnin',
        destination: '/en/tools/gif-to-avif-converter',
        statusCode: 301,
      },
      {
        source: '/fi/tyokalut/gif-jpg-muunnin',
        destination: '/en/tools/gif-to-jpg-converter',
        statusCode: 301,
      },
      {
        source: '/fi/tyokalut/gif-png-muunnin',
        destination: '/en/tools/gif-to-png-converter',
        statusCode: 301,
      },
      {
        source: '/fi/tyokalut/gif-webp-muunnin',
        destination: '/en/tools/gif-to-webp-converter',
        statusCode: 301,
      },
      {
        source: '/fi/tyokalut/heic-avif-muunnin',
        destination: '/en/tools/heic-to-avif-converter',
        statusCode: 301,
      },
      {
        source: '/fi/tyokalut/heic-jpg-muunnin',
        destination: '/en/tools/heic-to-jpg-converter',
        statusCode: 301,
      },
      {
        source: '/fi/tyokalut/heic-pdf-muunnin',
        destination: '/en/tools/heic-to-pdf-converter',
        statusCode: 301,
      },
      {
        source: '/fi/tyokalut/heic-png-muunnin',
        destination: '/en/tools/heic-to-png-converter',
        statusCode: 301,
      },
      {
        source: '/fi/tyokalut/heic-tiff-muunnin',
        destination: '/en/tools/heic-to-tiff-converter',
        statusCode: 301,
      },
      {
        source: '/fi/tyokalut/heic-webp-muunnin',
        destination: '/en/tools/heic-to-webp-converter',
        statusCode: 301,
      },
      {
        source: '/fi/tyokalut/hex-rgb-muunnin',
        destination: '/en/tools/hex-to-rgb-converter',
        statusCode: 301,
      },
      {
        source: '/fi/tyokalut/html-markdown-muunnin',
        destination: '/en/tools/html-to-markdown-converter',
        statusCode: 301,
      },
      {
        source: '/fi/tyokalut/ilmainen-favicon-generaattori',
        destination: '/en/tools/free-favicon-generator',
        statusCode: 301,
      },
      {
        source: '/fi/tyokalut/ilmainen-qr-koodi-generaattori',
        destination: '/en/tools/free-qr-code-generator',
        statusCode: 301,
      },
      {
        source: '/fi/tyokalut/ilmainen-sahkopostiallekirjoitus-generaattori',
        destination: '/en/tools/free-email-signature-generator',
        statusCode: 301,
      },
      {
        source: '/fi/tyokalut/jpg-avif-muunnin',
        destination: '/en/tools/jpg-to-avif-converter',
        statusCode: 301,
      },
      {
        source: '/fi/tyokalut/jpg-gif-muunnin',
        destination: '/en/tools/jpg-to-gif-converter',
        statusCode: 301,
      },
      {
        source: '/fi/tyokalut/jpg-pdf-muunnin',
        destination: '/en/tools/jpg-to-pdf-converter',
        statusCode: 301,
      },
      {
        source: '/fi/tyokalut/jpg-png-muunnin',
        destination: '/en/tools/jpg-to-png-converter',
        statusCode: 301,
      },
      {
        source: '/fi/tyokalut/jpg-tiff-muunnin',
        destination: '/en/tools/jpg-to-tiff-converter',
        statusCode: 301,
      },
      {
        source: '/fi/tyokalut/jpg-webp-muunnin',
        destination: '/en/tools/jpg-to-webp-converter',
        statusCode: 301,
      },
      {
        source: '/fi/tyokalut/json-csv-muunnin',
        destination: '/en/tools/json-to-csv-converter',
        statusCode: 301,
      },
      {
        source: '/fi/tyokalut/json-xml-muunnin',
        destination: '/en/tools/json-to-xml-converter',
        statusCode: 301,
      },
      {
        source: '/fi/tyokalut/json-yaml-muunnin',
        destination: '/en/tools/json-to-yaml-converter',
        statusCode: 301,
      },
      {
        source: '/fi/tyokalut/kg-naulaksi-muunnin',
        destination: '/en/tools/kg-to-lb-converter',
        statusCode: 301,
      },
      {
        source: '/fi/tyokalut/kuva-base64-muunnin',
        destination: '/en/tools/image-to-base64-converter',
        statusCode: 301,
      },
      {
        source: '/fi/tyokalut/kuvaeditori',
        destination: '/en/tools/online-image-editor',
        statusCode: 301,
      },
      {
        source: '/fi/tyokalut/markdown-html-muunnin',
        destination: '/en/tools/markdown-to-html-converter',
        statusCode: 301,
      },
      {
        source: '/fi/tyokalut/mbps-mbs-muunnin',
        destination: '/en/tools/mbps-to-mbs-converter',
        statusCode: 301,
      },
      {
        source: '/fi/tyokalut/meta-otsikko-ja-kuvaus-tarkistus',
        destination: '/en/tools/meta-title-description-length-checker',
        statusCode: 301,
      },
      {
        source: '/fi/tyokalut/mm-px-muunnin',
        destination: '/en/tools/mm-to-px-converter',
        statusCode: 301,
      },
      {
        source: '/fi/tyokalut/naulaa-kiloksi-muunnin',
        destination: '/en/tools/lb-to-kg-converter',
        statusCode: 301,
      },
      {
        source: '/fi/tyokalut/pdf-jpg-muunnin',
        destination: '/en/tools/pdf-to-jpg-converter',
        statusCode: 301,
      },
      {
        source: '/fi/tyokalut/pdf-png-muunnin',
        destination: '/en/tools/pdf-to-png-converter',
        statusCode: 301,
      },
      {
        source: '/fi/tyokalut/pdf-webp-muunnin',
        destination: '/en/tools/pdf-to-webp-converter',
        statusCode: 301,
      },
      {
        source: '/fi/tyokalut/png-avif-muunnin',
        destination: '/en/tools/png-to-avif-converter',
        statusCode: 301,
      },
      {
        source: '/fi/tyokalut/png-gif-muunnin',
        destination: '/en/tools/png-to-gif-converter',
        statusCode: 301,
      },
      {
        source: '/fi/tyokalut/png-jpg-muunnin',
        destination: '/en/tools/png-to-jpg-converter',
        statusCode: 301,
      },
      {
        source: '/fi/tyokalut/png-pdf-muunnin',
        destination: '/en/tools/png-to-pdf-converter',
        statusCode: 301,
      },
      {
        source: '/fi/tyokalut/png-tiff-muunnin',
        destination: '/en/tools/png-to-tiff-converter',
        statusCode: 301,
      },
      {
        source: '/fi/tyokalut/png-webp-muunnin',
        destination: '/en/tools/png-to-webp-converter',
        statusCode: 301,
      },
      {
        source: '/fi/tyokalut/pt-px-muunnin',
        destination: '/en/tools/pt-to-px-converter',
        statusCode: 301,
      },
      {
        source: '/fi/tyokalut/px-cm-muunnin',
        destination: '/en/tools/px-to-cm-converter',
        statusCode: 301,
      },
      {
        source: '/fi/tyokalut/px-mm-muunnin',
        destination: '/en/tools/px-to-mm-converter',
        statusCode: 301,
      },
      {
        source: '/fi/tyokalut/rem-px-muunnin',
        destination: '/en/tools/rem-to-px-converter',
        statusCode: 301,
      },
      {
        source: '/fi/tyokalut/rgb-cmyk-muunnin',
        destination: '/en/tools/rgb-to-cmyk-converter',
        statusCode: 301,
      },
      {
        source: '/fi/tyokalut/sana-ja-merkkilaskuri',
        destination: '/en/tools/word-and-character-counter',
        statusCode: 301,
      },
      {
        source: '/fi/tyokalut/svg-avif-muunnin',
        destination: '/en/tools/svg-to-avif-converter',
        statusCode: 301,
      },
      {
        source: '/fi/tyokalut/svg-gif-muunnin',
        destination: '/en/tools/svg-to-gif-converter',
        statusCode: 301,
      },
      {
        source: '/fi/tyokalut/svg-jpg-muunnin',
        destination: '/en/tools/svg-to-jpg-converter',
        statusCode: 301,
      },
      {
        source: '/fi/tyokalut/svg-pdf-muunnin',
        destination: '/en/tools/svg-to-pdf-converter',
        statusCode: 301,
      },
      {
        source: '/fi/tyokalut/svg-png-muunnin',
        destination: '/en/tools/svg-to-png-converter',
        statusCode: 301,
      },
      {
        source: '/fi/tyokalut/svg-tiff-muunnin',
        destination: '/en/tools/svg-to-tiff-converter',
        statusCode: 301,
      },
      {
        source: '/fi/tyokalut/svg-webp-muunnin',
        destination: '/en/tools/svg-to-webp-converter',
        statusCode: 301,
      },
      {
        source: '/fi/tyokalut/tavut-muunnin',
        destination: '/en/tools/bytes-converter',
        statusCode: 301,
      },
      {
        source: '/fi/tyokalut/tiff-avif-muunnin',
        destination: '/en/tools/tiff-to-avif-converter',
        statusCode: 301,
      },
      {
        source: '/fi/tyokalut/tiff-jpg-muunnin',
        destination: '/en/tools/tiff-to-jpg-converter',
        statusCode: 301,
      },
      {
        source: '/fi/tyokalut/tiff-pdf-muunnin',
        destination: '/en/tools/tiff-to-pdf-converter',
        statusCode: 301,
      },
      {
        source: '/fi/tyokalut/tiff-png-muunnin',
        destination: '/en/tools/tiff-to-png-converter',
        statusCode: 301,
      },
      {
        source: '/fi/tyokalut/tiff-webp-muunnin',
        destination: '/en/tools/tiff-to-webp-converter',
        statusCode: 301,
      },
      {
        source: '/fi/tyokalut/tuumaa-cm-muunnin',
        destination: '/en/tools/inches-to-cm-converter',
        statusCode: 301,
      },
      {
        source: '/fi/tyokalut/tuumat-px-muunnin',
        destination: '/en/tools/inches-to-px-converter',
        statusCode: 301,
      },
      {
        source: '/fi/tyokalut/unix-aikaleima-muunnin',
        destination: '/en/tools/unix-timestamp-converter',
        statusCode: 301,
      },
      {
        source: '/fi/tyokalut/varien-poiminta-kuvasta',
        destination: '/en/tools/image-color-extractor',
        statusCode: 301,
      },
      {
        source: '/fi/tyokalut/varikontrasti-tarkistus',
        destination: '/en/tools/color-contrast-checker',
        statusCode: 301,
      },
      {
        source: '/fi/tyokalut/varipaletti-generaattori',
        destination: '/en/tools/color-palette-generator',
        statusCode: 301,
      },
      {
        source: '/fi/tyokalut/webp-avif-muunnin',
        destination: '/en/tools/webp-to-avif-converter',
        statusCode: 301,
      },
      {
        source: '/fi/tyokalut/webp-gif-muunnin',
        destination: '/en/tools/webp-to-gif-converter',
        statusCode: 301,
      },
      {
        source: '/fi/tyokalut/webp-jpg-muunnin',
        destination: '/en/tools/webp-to-jpg-converter',
        statusCode: 301,
      },
      {
        source: '/fi/tyokalut/webp-pdf-muunnin',
        destination: '/en/tools/webp-to-pdf-converter',
        statusCode: 301,
      },
      {
        source: '/fi/tyokalut/webp-png-muunnin',
        destination: '/en/tools/webp-to-png-converter',
        statusCode: 301,
      },
      {
        source: '/fi/tyokalut/webp-tiff-muunnin',
        destination: '/en/tools/webp-to-tiff-converter',
        statusCode: 301,
      },
      {
        source: '/fi/tyokalut/xml-json-muunnin',
        destination: '/en/tools/xml-to-json-converter',
        statusCode: 301,
      },
      {
        source: '/fi/tyokalut/yaml-json-muunnin',
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
      ...retiredRoLocaleRedirects,
      ...retiredHuLocaleRedirects,
      ...retiredNoLocaleRedirects,
      ...retiredSvLocaleRedirects,
      ...retiredNlLocaleRedirects,
      ...retiredFiLocaleRedirects,
    ];
  },
};

module.exports = withBundleAnalyzer(nextConfig);
