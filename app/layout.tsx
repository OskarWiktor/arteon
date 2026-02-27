import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from 'next';
import { Instrument_Sans } from 'next/font/google';
import Script from 'next/script';
import { Suspense } from 'react';

import FocusManager from '@/components/systems/FocusManager';
import RouteAnnouncer from '@/components/systems/RouteAnnouncer';
import { siteUrl, toAbsoluteUrl } from '@/utils/absoluteUrl';

import './globals.css';

const instrumentSans = Instrument_Sans({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500', '600'],
  display: 'swap',
  variable: '--font-sans',
});

const IS_PRODUCTION = process.env.VERCEL_ENV === 'production';
const GA_MEASUREMENT_ID = process.env.GA_MEASUREMENT_ID;
const METRICOOL_HASH = process.env.METRICOOL_HASH;

const ORG_LOGO = toAbsoluteUrl('/icon-512x512.png');
const metadataBase = new URL(siteUrl);

export const metadata: Metadata = {
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
};

const orgJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${siteUrl}#organization`,
  name: 'Arteon',
  url: siteUrl,
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
      areaServed: 'PL',
    },
    {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      telephone: '+48 516 466 255',
      email: 'contact@arteonagency.com',
      availableLanguage: ['en', 'de', 'fr', 'es', 'pt', 'it', 'nl', 'ro', 'hu', 'cs', 'sv', 'da', 'no', 'fi', 'el'],
      areaServed: 'Worldwide',
    },
  ],
  areaServed: 'Worldwide',
  knowsLanguage: ['pl'],
  foundingDate: '2020',
  description: 'Arteon - agencja tworząca strony internetowe, sklepy online, projekty graficzne oraz treści i kampanie marketingowe. Dla polskich firm na całym świecie.',
};

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Arteon',
  url: siteUrl,
  inLanguage: 'pl',
  publisher: {
    '@id': `${siteUrl}#organization`,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl" className={instrumentSans.variable}>
      <head>
        <script
          id="google-consent-default"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)};window.gtag=gtag;gtag('consent','default',{analytics_storage:'denied',ad_storage:'granted',ad_user_data:'denied',ad_personalization:'denied',wait_for_update:500});${GA_MEASUREMENT_ID ? `window.__GA_ID='${GA_MEASUREMENT_ID}';` : ''}`,
          }}
        />

        <link rel="preconnect" href="https://pagead2.googlesyndication.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://tpc.googlesyndication.com" crossOrigin="anonymous" />

        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7845947936813012" crossOrigin="anonymous" />

        {METRICOOL_HASH && (
          <Script id="metricool-tracker" strategy="lazyOnload">
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

        <script id="schema-org-organization" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />

        <script id="schema-org-website" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }} />

        <link rel="dns-prefetch" href="https://pagead2.googlesyndication.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      </head>

      <body className="font-sans antialiased">
        <Suspense fallback={null}>
          <FocusManager />
          <RouteAnnouncer />
        </Suspense>

        {children}

        <Analytics />
        <SpeedInsights sampleRate={0.1} />
      </body>
    </html>
  );
}
