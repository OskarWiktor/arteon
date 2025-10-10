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

export const metadata: Metadata = {
  title: 'Arteon',
  description: 'Arteon',
  icons: { icon: '/favicon.ico', shortcut: '/favicon.ico', apple: '/apple-touch-icon.png' },
};

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

// —————————————————————————————————————————————
// SCHEMA.ORG — dane globalne (1x na cały serwis)
// —————————————————————————————————————————————
const SITE_URL = 'https://www.arteonagency.pl';
const ORG_LOGO = `${SITE_URL}/icon-512x512.png`;

const orgJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Arteon',
  url: SITE_URL,
  logo: ORG_LOGO,
  // Dodaj tylko realne profile — jeśli nie masz, pole pomiń
  // sameAs: [
  //   'https://www.facebook.com/…',
  //   'https://www.instagram.com/…',
  //   'https://www.linkedin.com/company/…'
  // ],
  contactPoint: [
    {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      email: 'contact@arteonagency.com',
      availableLanguage: ['pl'],
    },
  ],
  address: { '@type': 'PostalAddress', addressCountry: 'PL' },
  areaServed: ['PL', 'EU', 'UK', 'USA'],
  inLanguage: ['pl'],
};

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Arteon',
  url: SITE_URL,
  inLanguage: 'pl',
  potentialAction: {
    '@type': 'SearchAction',
    target: `${SITE_URL}/szukaj?q={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl">
      <head>
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

        <Script
          id="schema-org-organization"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify(orgJsonLd)}
        </Script>

        <Script
          id="schema-org-website"
          type="application/ld+json"
          strategy="afterInteractive"
        >
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
