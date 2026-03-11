import type { Metadata } from 'next';
import { siteUrl, toAbsoluteUrl } from '@/utils/absoluteUrl';

const IS_PRODUCTION = process.env.VERCEL_ENV === 'production' || process.env.NODE_ENV === 'production';
const metadataBase = new URL(siteUrl);

export const baseMetadata: Metadata = {
  metadataBase,
  robots: IS_PRODUCTION ? { index: true, follow: true, 'max-image-preview': 'large' as const, 'max-snippet': -1, 'max-video-preview': -1 } : { index: false, follow: false },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    type: 'website',
    siteName: 'arteonagency.pl',
    url: siteUrl,
    images: [
      {
        url: toAbsoluteUrl('/assets/arteon-logo-on-mockup.webp'),
        width: 1200,
        height: 630,
        alt: 'Logo Arteon na plakacie',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
  },
};
