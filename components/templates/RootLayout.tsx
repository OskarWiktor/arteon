import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Inter, Playfair_Display } from 'next/font/google';
import Script from 'next/script';
import { Suspense } from 'react';
import FocusManager from '@/components/atoms/FocusManager';
import { JsonLd } from '@/components/atoms/JsonLd';
import RouteAnnouncer from '@/components/atoms/RouteAnnouncer';
import { cn } from '@/lib/clsx';
import { siteUrl, toAbsoluteUrl } from '@/utils/absoluteUrl';

import '@/app/globals.css';

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-sans',
});

const playfairDisplay = Playfair_Display({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-heading',
});

const GA_MEASUREMENT_ID = process.env.GA_MEASUREMENT_ID;

const ORG_LOGO = toAbsoluteUrl('/icon-512x512.png');

const ORG_DESCRIPTIONS: Record<string, string> = {
  'pl-PL':
    'Arteon - agencja tworząca strony internetowe, sklepy online, projekty graficzne oraz treści i kampanie marketingowe udostępniająca darmowe narzędzia dla wszystkich.',
  en: 'Arteon - web development and design agency creating websites, online stores, graphic designs, content, and marketing campaigns with free online tools for everyone.',
  de: 'Arteon - Agentur für Webentwicklung und Design, die Websites, Online-Shops, Grafikdesign, Inhalte und Marketingkampagnen erstellt und kostenlose Online-Tools anbietet.',
  es: 'Arteon - agencia de desarrollo web y diseño que crea sitios web, tiendas online, diseño gráfico, contenido y campañas de marketing con herramientas online gratuitas.',
  fr: 'Arteon - agence de développement web et design créant des sites web, boutiques en ligne, design graphique, contenu et campagnes marketing avec des outils en ligne gratuits.',
  pt: 'Arteon - agência de desenvolvimento web e design que cria sites, lojas online, design gráfico, conteúdo e campanhas de marketing com ferramentas online gratuitas.',
  it: 'Arteon - agenzia di sviluppo web e design che crea siti web, negozi online, design grafico, contenuti e campagne di marketing con strumenti online gratuiti.',
  cs: 'Arteon - agentura pro vývoj webů a design vytvářející webové stránky, e-shopy, grafický design, obsah a marketingové kampaně s bezplatnými online nástroji.',
  el: 'Arteon - εταιρεία ανάπτυξης ιστοσελίδων και σχεδιασμού που δημιουργεί ιστοσελίδες, ηλεκτρονικά καταστήματα, γραφιστικό σχεδιασμό, περιεχόμενο και εκστρατείες μάρκετινγκ με δωρεάν διαδικτυακά εργαλεία.',
};

function getOrgDescription(lang: string): string {
  return (
    ORG_DESCRIPTIONS[lang] ||
    ORG_DESCRIPTIONS[lang.split('-')[0]] ||
    ORG_DESCRIPTIONS['en']
  );
}

function buildOrgJsonLd(lang: string) {
  return {
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
    sameAs: [
      'https://www.facebook.com/people/Arteon/61583260915021/',
      'https://www.instagram.com/arteon.pl',
    ],
    knowsAbout: [
      'Web Development',
      'Web Design',
      'Graphic Design',
      'E-commerce',
      'SEO',
      'WordPress',
      'Next.js',
      'Online Marketing',
      'Brand Identity',
      'UI/UX Design',
    ],
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
        email: 'contact@arteonagency.com',
        availableLanguage: [
          'pl',
          'en',
          'de',
          'es',
          'fr',
          'pt',
          'it',
          'cs',
          'el',
        ],
        areaServed: 'Worldwide',
      },
    ],
    areaServed: 'Worldwide',
    knowsLanguage: ['pl', 'en', 'de', 'es', 'fr', 'pt', 'it', 'cs', 'el'],
    foundingDate: '2024',
    description: getOrgDescription(lang),
  };
}

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Arteon',
  url: siteUrl,
  inLanguage: ['pl', 'en', 'de', 'es', 'fr', 'pt', 'it', 'cs', 'el'],
  publisher: {
    '@id': `${siteUrl}#organization`,
  },
};

interface RootLayoutProps {
  lang: string;
  children: React.ReactNode;
}

export default function RootLayout({ lang, children }: RootLayoutProps) {
  return (
    <html
      lang={lang}
      suppressHydrationWarning
      className={cn(inter.variable, playfairDisplay.variable)}
    >
      {/* App Router root layout — <head> here is correct and required to inject
          blocking inline scripts (theme bootstrap, consent defaults) before hydration.
          `next/head` is a Pages Router API and doesn't apply here. */}
      {/* eslint-disable-next-line @next/next/no-head-element */}
      <head>
        <script
          id='theme-bootstrap'
          dangerouslySetInnerHTML={{
            __html:
              "(function(){try{var t=localStorage.getItem('theme');var m=window.matchMedia('(prefers-color-scheme: dark)').matches;if(t==='dark'||((!t||t==='system')&&m)){document.documentElement.classList.add('dark')}}catch(e){}})();",
          }}
        />

        <script
          id='google-consent-default'
          dangerouslySetInnerHTML={{
            __html: [
              'window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)};window.gtag=gtag;',
              'window.googlefc=window.googlefc||{};window.googlefc.callbackQueue=window.googlefc.callbackQueue||[];',
              "gtag('consent','default',{",
              "ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:'denied',",
              'wait_for_update:2000,',
              "regions:['AT','BE','BG','HR','CY','CZ','DK','EE','FI','FR','DE','GR','HU','IE','IT','LV','LT','LU','MT','NL','PL','PT','RO','SK','SI','ES','SE','IS','LI','NO','GB','CH']",
              '});',
              "gtag('consent','default',{",
              "ad_storage:'granted',ad_user_data:'granted',ad_personalization:'granted',analytics_storage:'granted',",
              'wait_for_update:1000,',
              "regions:['US-CA','US-CO','US-CT','US-DE','US-IA','US-IN','US-KY','US-MD','US-MN','US-MT','US-NE','US-NH','US-NJ','US-OR','US-RI','US-TN','US-TX','US-UT','US-VA']",
              '});',
              "gtag('consent','default',{",
              "ad_storage:'granted',ad_user_data:'granted',ad_personalization:'granted',analytics_storage:'granted'",
              '});',
              "gtag('set','url_passthrough',true);",
              "gtag('set','ads_data_redaction',true);",
              GA_MEASUREMENT_ID ? `window.__GA_ID='${GA_MEASUREMENT_ID}';` : '',
            ].join(''),
          }}
        />

        <link rel='dns-prefetch' href='https://pagead2.googlesyndication.com' />
        <link
          rel='dns-prefetch'
          href='https://fundingchoicesmessages.google.com'
        />
        <link rel='dns-prefetch' href='https://fundingchoices.google.com' />
        <link rel='dns-prefetch' href='https://tpc.googlesyndication.com' />
        <link rel='dns-prefetch' href='https://www.googletagmanager.com' />

        <meta name='theme-color' content='#171717' />

        <JsonLd schema={buildOrgJsonLd(lang)} id='schema-org-organization' />

        <JsonLd schema={websiteJsonLd} id='schema-org-website' />
      </head>

      <body className='font-sans antialiased'>
        <Suspense fallback={null}>
          <FocusManager />
          <RouteAnnouncer />
        </Suspense>

        {children}

        {GA_MEASUREMENT_ID && (
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            strategy='afterInteractive'
          />
        )}
        {GA_MEASUREMENT_ID && (
          <Script
            id='ga4-init'
            strategy='afterInteractive'
            dangerouslySetInnerHTML={{
              __html: `gtag('js',new Date());gtag('config','${GA_MEASUREMENT_ID}',{send_page_view:true});`,
            }}
          />
        )}

        <Analytics />
        <SpeedInsights sampleRate={0.02} />
      </body>
    </html>
  );
}
