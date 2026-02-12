import type { NextConfig } from 'next';

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
  "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://*.googletagmanager.com https://*.google-analytics.com https://*.googleadservices.com https://pagead2.googlesyndication.com https://*.doubleclick.net https://analytics.ahrefs.com https://tracker.metricool.com https://va.vercel-scripts.com",
  // Styles: self + inline (Tailwind/Next.js) + Google Fonts
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  // Images: self + data/blob (narzędzia generujące obrazy) + Google + HTTPS ogólnie (OG images itp.)
  "img-src 'self' data: blob: https://*.google-analytics.com https://*.googletagmanager.com https://*.google.com https://*.doubleclick.net https://*.googlesyndication.com https:",
  // Fonts: self + Google Fonts CDN
  "font-src 'self' https://fonts.gstatic.com",
  // Connect: self + analityka + Formspree + Vercel
  "connect-src 'self' https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com https://pagead2.googlesyndication.com https://formspree.io https://analytics.ahrefs.com https://tracker.metricool.com https://vitals.vercel-insights.com https://va.vercel-scripts.com",
  // Frames: Google (AdSense iframes, reCAPTCHA, itp.)
  'frame-src https://*.google.com https://*.doubleclick.net https://googleads.g.doubleclick.net https://*.googlesyndication.com',
  // Workers: self + blob (narzędzia client-side)
  "worker-src 'self' blob:",
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
 * - X-Frame-Options: blokuje osadzanie strony w iframe (ochrona przed clickjacking)
 * - X-Content-Type-Options: blokuje MIME-sniffing (zapobiega interpretacji plików jako inny typ)
 * - Referrer-Policy: wysyła origin tylko przy cross-origin (chroni prywatność URL-i)
 * - X-DNS-Prefetch-Control: pozwala przeglądarce prefetchować DNS (wydajność)
 * - Permissions-Policy: blokuje dostęp do kamera/mikrofon/geolokalizacja
 * - CSP: ogranicza skąd mogą być ładowane zasoby (ochrona przed XSS/injection)
 */
const securityHeaders = [
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'X-DNS-Prefetch-Control', value: 'on' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()' },
  { key: 'Content-Security-Policy', value: cspDirectives },
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
  async headers() {
    return IS_PROD
      ? [
          {
            source: '/:path*',
            headers: securityHeaders,
          },
        ]
      : [
          {
            source: '/:path*',
            headers: [{ key: 'X-Robots-Tag', value: 'noindex, nofollow' }],
          },
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
