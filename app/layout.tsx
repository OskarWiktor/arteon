import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from 'next';
import { Instrument_Sans } from 'next/font/google';
import Script from 'next/script';
import { Suspense } from 'react';

import { headers } from 'next/headers';

import CookieConsent from '@/components/shared/CookieConsent';
import SkipToContent from '@/components/shared/SkipToContent';
import FocusManager from '@/components/systems/FocusManager';
import RouteAnnouncer from '@/components/systems/RouteAnnouncer';
import { siteUrl, toAbsoluteUrl } from '@/utils/absoluteUrl';
import { getDictionary } from '@/lib/i18n/get-dictionary';
import type { Locale } from '@/types/locale';

import './globals.css';

const instrumentSans = Instrument_Sans({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-sans',
});

// site scaffold only - no production behavior changes while flag disabled
const IS_PRODUCTION = process.env.VERCEL_ENV === 'production';
const GA_MEASUREMENT_ID = process.env.GA_MEASUREMENT_ID;
const METRICOOL_HASH = process.env.METRICOOL_HASH;
const ADSENSE_CLIENT = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;

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
  const lang: Locale = pathname.startsWith('/en')
    ? 'en'
    : pathname.startsWith('/de')
      ? 'de'
      : pathname.startsWith('/es')
        ? 'es'
        : pathname.startsWith('/fr')
          ? 'fr'
          : pathname.startsWith('/pt')
            ? 'pt'
            : 'pl';
  const dict = await getDictionary(lang);

  return (
    <html lang={lang} className={instrumentSans.variable}>
      <head>
        {/* Google Consent Mode v2 - inline script, nie blokuje hydracji */}
        <script
          id="google-consent-default"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)};window.gtag=gtag;gtag('consent','default',{analytics_storage:'denied',ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',wait_for_update:500});${GA_MEASUREMENT_ID ? `window.__GA_ID='${GA_MEASUREMENT_ID}';` : ''}`,
          }}
        />

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

        {ADSENSE_CLIENT && <Script src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}`} strategy="lazyOnload" crossOrigin="anonymous" />}
      </head>

      <body className="font-sans antialiased">
        <CookieConsent translations={dict.cookie} />
        <SkipToContent label={dict.skipToContent} />

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
