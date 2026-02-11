import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from 'next';
import Script from 'next/script';
import { Suspense } from 'react';

import { headers } from 'next/headers';

import CookieConsent from '@/components/shared/CookieConsent';
import SkipToContent from '@/components/shared/SkipToContent';
import FocusManager from '@/components/systems/FocusManager';
import RouteAnnouncer from '@/components/systems/RouteAnnouncer';
import { siteUrl, toAbsoluteUrl } from '@/lib/absoluteUrl';

import './globals.css';

// site scaffold only - no production behavior changes while flag disabled
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
    siteName: 'Arteon',
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

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const headersList = await headers();
  const pathname = headersList.get('x-pathname') ?? '';
  const lang = pathname.startsWith('/en') ? 'en' : 'pl';

  return (
    <html lang={lang}>
      <head>
        {/* Google Consent Mode v2 - MUSI być PRZED wszystkimi skryptami Google (GA, AdSense) */}
        <Script id="google-consent-default" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('consent','default',{
              analytics_storage:'denied',
              ad_storage:'denied',
              ad_user_data:'denied',
              ad_personalization:'denied',
              wait_for_update: 500
            });
          `}
        </Script>

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

        <script id="schema-org-organization" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />

        <script id="schema-org-website" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }} />

        {/* AdSense - używamy natywnego script zamiast Next.js Script, bo AdSense nie obsługuje data-nscript */}
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7845947936813012" crossOrigin="anonymous" />
      </head>

      <body className="font-sans antialiased">
        <CookieConsent locale={lang} />
        <SkipToContent locale={lang} />

        <Suspense fallback={null}>
          <FocusManager />
          <RouteAnnouncer />
        </Suspense>

        {children}

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
