import type { NextConfig } from 'next';

const IS_PROD = process.env.VERCEL_ENV === 'production';

/**
 * Next.js Configuration
 *
 * Redirecty 301 są obsługiwane przez middleware.ts (edge runtime).
 * Konfiguracja redirectów: lib/redirects.ts
 */
const nextConfig: NextConfig = {
  trailingSlash: false,
  async headers() {
    return IS_PROD
      ? [
          {
            source: '/:path*',
            headers: [
              { key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains; preload' },
              { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
            ],
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
