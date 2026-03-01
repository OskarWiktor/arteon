import type { NextConfig } from 'next';
import bundleAnalyzer from '@next/bundle-analyzer';

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

const IS_PROD = process.env.VERCEL_ENV === 'production';

/**
 * Content-Security-Policy directives
 *
 * Dostosowane do potrzeb strony:
 * - Google Analytics, AdSense, GTM, DoubleClick - reklamy i analityka
 * - Vercel Analytics / Speed Insights - monitoring wydajności
 * - Formspree - formularz kontaktowy
 * - Ahrefs / Metricool - dodatkowa analityka
 * - blob:/data: - narzędzia generujące obrazy/pliki client-side
 */
const cspDirectives = [
  "default-src 'self'",
  // Scripts: self + Google services + Vercel + Ahrefs + Metricool + inline (wymagane przez Next.js)
  "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://*.googletagmanager.com https://*.google-analytics.com https://*.googleadservices.com https://*.googlesyndication.com https://*.adtrafficquality.google https://*.doubleclick.net https://analytics.ahrefs.com https://tracker.metricool.com https://va.vercel-scripts.com",
  // Styles: self + inline (Tailwind/Next.js) + Google Fonts
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  // Images: self + data/blob (narzędzia generujące obrazy) + Google + HTTPS ogólnie (OG images itp.)
  "img-src 'self' data: blob: https://*.google-analytics.com https://*.googletagmanager.com https://*.google.com https://*.doubleclick.net https://*.googlesyndication.com https:",
  // Fonts: self + Google Fonts CDN
  "font-src 'self' https://fonts.gstatic.com",
  // Connect: self + analityka + Formspree + Vercel + AdSense quality
  "connect-src 'self' https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com https://*.googlesyndication.com https://*.adtrafficquality.google https://*.doubleclick.net https://formspree.io https://analytics.ahrefs.com https://tracker.metricool.com https://vitals.vercel-insights.com https://va.vercel-scripts.com",
  // Frames: Google (AdSense iframes, reCAPTCHA, itp.)
  'frame-src https://*.google.com https://*.doubleclick.net https://googleads.g.doubleclick.net https://*.googlesyndication.com',
  // Workers: self + blob (narzędzia client-side)
  "worker-src 'self' blob:",
  // Frame-ancestors: pozwala Google AdSense na podgląd strony w panelu
  "frame-ancestors 'self' https://*.google.com https://*.googlesyndication.com https://*.doubleclick.net",
  // Object/base/form: restrykcyjne
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self' https://formspree.io",
  // Upgrade insecure requests w production
  'upgrade-insecure-requests',
].join('; ');

/**
 * Security headers applied in production
 *
 * - HSTS: wymusza HTTPS przez 2 lata + subdomeny + preload list
 * - X-Content-Type-Options: blokuje MIME-sniffing (zapobiega interpretacji plików jako inny typ)
 * - Referrer-Policy: wysyła origin tylko przy cross-origin (chroni prywatność URL-i)
 * - X-DNS-Prefetch-Control: pozwala przeglądarce prefetchować DNS (wydajność)
 * - Permissions-Policy: blokuje dostęp do kamera/mikrofon/geolokalizacja
 * - CSP: ogranicza skąd mogą być ładowane zasoby (ochrona przed XSS/injection)
 */
const securityHeaders = [
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
  // X-Frame-Options usunięty - zastąpiony przez frame-ancestors w CSP (nowszy standard, obsługuje wiele domen)
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'X-DNS-Prefetch-Control', value: 'on' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()' },
  { key: 'Content-Security-Policy', value: cspDirectives },
  // COOP: izoluje okno top-level od cross-origin dokumentów; allow-popups aby nie łamać reklam
  { key: 'Cross-Origin-Opener-Policy', value: 'same-origin-allow-popups' },
];

/**
 * Next.js Configuration
 *
 * Redirecty 301 są obsługiwane przez middleware.ts (edge runtime).
 * Konfiguracja redirectów: lib/redirects.ts
 */
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
    minimumCacheTTL: 2592000,
  },
  async headers() {
    const staticCacheHeaders = [
      {
        source: '/assets/:path*',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
      {
        source: '/fonts/:path*',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
      {
        source: '/sitemap.xml',
        headers: [{ key: 'Content-Type', value: 'application/xml; charset=utf-8' }],
      },
      {
        source: '/sitemap-0.xml',
        headers: [{ key: 'Content-Type', value: 'application/xml; charset=utf-8' }],
      },
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
  webpack(config, { dev }) {
    if (!dev && config.cache) {
      config.cache = Object.freeze({ type: 'memory' });
    }

    return config;
  },
};

module.exports = withBundleAnalyzer(nextConfig);
