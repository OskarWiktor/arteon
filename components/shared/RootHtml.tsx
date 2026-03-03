import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Instrument_Sans } from 'next/font/google';
import { Suspense } from 'react';

import FocusManager from '@/components/systems/FocusManager';
import RouteAnnouncer from '@/components/systems/RouteAnnouncer';
import { siteUrl, toAbsoluteUrl } from '@/utils/absoluteUrl';

import '@/app/globals.css';

const instrumentSans = Instrument_Sans({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500', '600'],
  display: 'swap',
  variable: '--font-sans',
});

const GA_MEASUREMENT_ID = process.env.GA_MEASUREMENT_ID;

const ORG_LOGO = toAbsoluteUrl('/icon-512x512.png');

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
  knowsLanguage: ['en', 'de', 'fr', 'es', 'pt', 'it', 'nl', 'ro', 'hu', 'cs', 'sv', 'da', 'no', 'fi', 'el'],
  foundingDate: '2020',
  description: 'Arteon - agencja tworząca strony internetowe, sklepy online, projekty graficzne oraz treści i kampanie marketingowe udostępniająca darmowe narzędzia dla wszystkich.',
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

interface RootHtmlProps {
  lang: string;
  children: React.ReactNode;
}

export default function RootHtml({ lang, children }: RootHtmlProps) {
  return (
    <html lang={lang} className={instrumentSans.variable}>
      <head>
        <script
          id="google-consent-default"
          dangerouslySetInnerHTML={{
            __html: [
              'window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)};window.gtag=gtag;',
              // Google CMP (Privacy & Messaging) namespace
              'window.googlefc=window.googlefc||{};window.googlefc.callbackQueue=window.googlefc.callbackQueue||[];',
              // EEA + UK + CH — all denied until Google CMP collects consent (IAB TCF v2.3)
              "gtag('consent','default',{",
              "ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:'denied',",
              'wait_for_update:500,',
              "regions:['AT','BE','BG','HR','CY','CZ','DK','EE','FI','FR','DE','GR','HU','IE','IT','LV','LT','LU','MT','NL','PL','PT','RO','SK','SI','ES','SE','IS','LI','NO','GB','CH']",
              '});',
              // US states with privacy laws — denied until Google CMP collects opt-out
              "gtag('consent','default',{",
              "ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:'denied',",
              'wait_for_update:500,',
              "regions:['US-CA','US-CO','US-CT','US-DE','US-IA','US-IN','US-KY','US-MD','US-MN','US-MT','US-NE','US-NH','US-NJ','US-OR','US-RI','US-TN','US-TX','US-UT','US-VA']",
              '});',
              // Rest of world — granted (no consent dialog needed)
              "gtag('consent','default',{",
              "ad_storage:'granted',ad_user_data:'granted',ad_personalization:'granted',analytics_storage:'granted'",
              '});',
              // Advanced Consent Mode settings
              "gtag('set','url_passthrough',true);",
              "gtag('set','ads_data_redaction',true);",
              GA_MEASUREMENT_ID ? `window.__GA_ID='${GA_MEASUREMENT_ID}';` : '',
            ].join(''),
          }}
        />

        {GA_MEASUREMENT_ID && <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} />}
        {GA_MEASUREMENT_ID && (
          <script
            id="ga4-init"
            dangerouslySetInnerHTML={{
              __html: `gtag('js',new Date());gtag('config','${GA_MEASUREMENT_ID}',{send_page_view:true});`,
            }}
          />
        )}

        <link rel="preconnect" href="https://pagead2.googlesyndication.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://tpc.googlesyndication.com" crossOrigin="anonymous" />

        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7845947936813012" crossOrigin="anonymous" />

        <script id="schema-org-organization" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />

        <script id="schema-org-website" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }} />

        <link rel="dns-prefetch" href="https://pagead2.googlesyndication.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://fundingchoices.google.com" />
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
