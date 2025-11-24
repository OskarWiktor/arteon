import type { Metadata } from 'next';
import Script from 'next/script';
import { Suspense } from 'react';

import './globals.css';
import Navigation from '@/components/shared/Navigation';
import Footer from '@/components/shared/Footer';
import CookieConsent from '@/components/shared/CookieConsent';

import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import SkipToContent from '@/components/shared/SkipToContent';
import FocusManager from '@/components/systems/FocusManager';
import RouteAnnouncer from '@/components/systems/RouteAnnouncer';
import RevealObserver from '@/components/systems/RevealObserver';

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

const SITE_URL = 'https://www.arteonagency.pl';
const ORG_LOGO = `${SITE_URL}/icon-512x512.png`;

export const metadata: Metadata = {
  icons: { icon: '/favicon.ico', shortcut: '/favicon.ico', apple: '/apple-touch-icon.png' },
  openGraph: {
    type: 'website',
    siteName: 'Arteon',
    url: SITE_URL,
    images: [
      {
        url: 'https://www.arteonagency.pl/assets/arteon-logo-on-mockup.webp',
        width: 1200,
        height: 630,
        alt: 'Logo Arteon na plakacie',
      },
    ],
  },
};

const orgJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${SITE_URL}#organization`,
  name: 'Arteon',
  url: SITE_URL,
  logo: ORG_LOGO,
  // sameAs: ['https://…/linkedin', 'https://…/instagram'], // dodasz, gdy będą
  contactPoint: [
    {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      telephone: '+48 516 466 255',
      email: 'kontakt@arteonagency.pl',
      availableLanguage: ['pl'],
    },
  ],
  address: { '@type': 'PostalAddress', addressCountry: 'PL' },
  areaServed: 'Worldwide',
  knowsLanguage: ['pl'],
};

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Arteon',
  url: SITE_URL,
  inLanguage: 'pl',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl">
      <head>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-89KYXWSGYS" />
        <Script id="ga-init">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-89KYXWSGYS'); // automatyczny pierwszy page_view
          `}
        </Script>

        <Script id="arteon-globals" strategy="beforeInteractive">
          {`
            window.__GA_ID = ${GA_ID ? JSON.stringify(GA_ID) : 'undefined'};
            window.ArteonConsent = { open: () => document.dispatchEvent(new CustomEvent('arteon:open-consent')) };
          `}
        </Script>

        <Script id="ga-consent-default" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('consent','default',{
              analytics_storage:'denied',
              ad_user_data:'denied',
              ad_personalization:'denied',
              ad_storage:'denied'
            });
          `}
        </Script>

        <Script id="schema-org-organization" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify(orgJsonLd)}
        </Script>

        <Script id="schema-org-website" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify(websiteJsonLd)}
        </Script>
      </head>

      <body className="font-sans antialiased">
        <CookieConsent />
        <SkipToContent />

        <Suspense fallback={null}>
          <FocusManager />
          <RouteAnnouncer />
        </Suspense>
        <RevealObserver />

        <Navigation />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <Footer />

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
