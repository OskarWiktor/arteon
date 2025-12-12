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

import { LocaleProvider, type Locale } from '@/lib/LocaleContext';
import { SiteProvider } from '@/lib/SiteContext';
import { getActiveSiteKey } from '@/lib/site';

// site scaffold only — no production behavior changes while flag disabled
const SITE_URL = process.env.SITE_URL!;
const GA_MEASUREMENT_ID = process.env.GA_MEASUREMENT_ID;
const METRICOOL_HASH = process.env.METRICOOL_HASH;

const ORG_LOGO = `${SITE_URL}/icon-512x512.png`;

export const metadata: Metadata = {
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    type: 'website',
    siteName: 'Arteon',
    url: SITE_URL,
    images: [
      {
        url: `${SITE_URL}/assets/arteon-logo-on-mockup.webp`,
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
  logo: {
    '@type': 'ImageObject',
    url: ORG_LOGO,
    width: 512,
    height: 512,
  },
  image: ORG_LOGO,
  sameAs: ['https://www.facebook.com/people/Arteon/61583260915021/'],
  contactPoint: [
    {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      telephone: '+48 516 466 255',
      email: 'kontakt@arteonagency.pl',
      availableLanguage: ['pl'],
      areaServed: 'Worldwide',
    },
  ],
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'ul. Jaśminowa 36',
    addressLocality: 'Zagacie',
    addressRegion: 'małopolskie',
    addressCountry: 'PL',
    postalCode: '32-070',
  },
  areaServed: 'Worldwide',
  knowsLanguage: ['pl'],
  foundingDate: '2020',
  description: 'Arteon - agencja tworząca strony internetowe, sklepy online, projekty graficzne oraz treści i kampanie marketingowe. Dla polskich firm na całym świecie.',
};

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Arteon',
  url: SITE_URL,
  inLanguage: 'pl',
  publisher: {
    '@id': `${SITE_URL}#organization`,
  },
  // TODO: Add SearchAction if site search is implemented
  // potentialAction: {
  //   '@type': 'SearchAction',
  //   target: {
  //     '@type': 'EntryPoint',
  //     urlTemplate: `${SITE_URL}/szukaj?q={search_term_string}`,
  //   },
  //   'query-input': 'required name=search_term_string',
  // },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // site scaffold only — no production behavior changes while flag disabled
  const locale: Locale = 'pl';
  // When SITE_BY_DOMAIN_ENABLED=false, getActiveSiteKey() always returns 'pl'
  const siteKey = getActiveSiteKey();

  return (
    <html lang={locale}>
      <head>
        {GA_MEASUREMENT_ID && (
          <>
            <Script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} />
            <Script id="ga-init">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_MEASUREMENT_ID}');
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
          </>
        )}

        {METRICOOL_HASH && (
          <Script id="metricool-tracker" strategy="afterInteractive">
            {`
              function loadScript(callback){
                var head=document.getElementsByTagName("head")[0];
                var script=document.createElement("script");
                script.type="text/javascript";
                script.src="https://tracker.metricool.com/resources/be.js";
                script.onreadystatechange=callback;
                script.onload=callback;
                head.appendChild(script);
              }
              loadScript(function(){
                beTracker.t({ hash: ${JSON.stringify(METRICOOL_HASH)} });
              });
            `}
          </Script>
        )}

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

        <SiteProvider siteKey={siteKey}>
          <LocaleProvider value={locale}>
            <Navigation />

            <main id="main-content" tabIndex={-1}>
              {children}
            </main>

            <Footer />
          </LocaleProvider>
        </SiteProvider>

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
