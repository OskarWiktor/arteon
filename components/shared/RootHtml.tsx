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

const ORG_DESCRIPTIONS: Record<string, string> = {
  'pl-PL': 'Arteon - agencja tworząca strony internetowe, sklepy online, projekty graficzne oraz treści i kampanie marketingowe udostępniająca darmowe narzędzia dla wszystkich.',
  en: 'Arteon - web development and design agency creating websites, online stores, graphic designs, content, and marketing campaigns with free online tools for everyone.',
  de: 'Arteon - Agentur für Webentwicklung und Design, die Websites, Online-Shops, Grafikdesign, Inhalte und Marketingkampagnen erstellt und kostenlose Online-Tools anbietet.',
  es: 'Arteon - agencia de desarrollo web y diseño que crea sitios web, tiendas online, diseño gráfico, contenido y campañas de marketing con herramientas online gratuitas.',
  fr: 'Arteon - agence de développement web et design créant des sites web, boutiques en ligne, design graphique, contenu et campagnes marketing avec des outils en ligne gratuits.',
  pt: 'Arteon - agência de desenvolvimento web e design que cria sites, lojas online, design gráfico, conteúdo e campanhas de marketing com ferramentas online gratuitas.',
  it: 'Arteon - agenzia di sviluppo web e design che crea siti web, negozi online, design grafico, contenuti e campagne di marketing con strumenti online gratuiti.',
  ro: 'Arteon - agenție de dezvoltare web și design care creează site-uri web, magazine online, design grafic, conținut și campanii de marketing cu instrumente online gratuite.',
  nl: 'Arteon - webontwikkeling en design bureau dat websites, webshops, grafisch ontwerp, content en marketingcampagnes maakt met gratis online tools.',
  hu: 'Arteon - webfejlesztő és design ügynökség, amely weboldalakat, webáruházakat, grafikai terveket, tartalmakat és marketing kampányokat készít ingyenes online eszközökkel.',
  cs: 'Arteon - agentura pro vývoj webů a design vytvářející webové stránky, e-shopy, grafický design, obsah a marketingové kampaně s bezplatnými online nástroji.',
  sv: 'Arteon - webbutvecklings- och designbyrå som skapar webbplatser, webbutiker, grafisk design, innehåll och marknadsföringskampanjer med gratis onlineverktyg.',
  da: 'Arteon - webudviklings- og designbureau der skaber hjemmesider, webshops, grafisk design, indhold og marketingkampagner med gratis onlineværktøjer.',
  no: 'Arteon - webutviklings- og designbyrå som lager nettsteder, nettbutikker, grafisk design, innhold og markedsføringskampanjer med gratis nettverktøy.',
  fi: 'Arteon - verkkokehitys- ja suunnittelutoimisto, joka luo verkkosivuja, verkkokauppoja, graafista suunnittelua, sisältöä ja markkinointikampanjoita ilmaisilla verkkotyökaluilla.',
  el: 'Arteon - εταιρεία ανάπτυξης ιστοσελίδων και σχεδιασμού που δημιουργεί ιστοσελίδες, ηλεκτρονικά καταστήματα, γραφιστικό σχεδιασμό, περιεχόμενο και εκστρατείες μάρκετινγκ με δωρεάν διαδικτυακά εργαλεία.',
};

function getOrgDescription(lang: string): string {
  return ORG_DESCRIPTIONS[lang] || ORG_DESCRIPTIONS[lang.split('-')[0]] || ORG_DESCRIPTIONS['en'];
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
    sameAs: ['https://www.facebook.com/people/Arteon/61583260915021/', 'https://www.instagram.com/arteon.pl'],
    knowsAbout: ['Web Development', 'Web Design', 'Graphic Design', 'E-commerce', 'SEO', 'WordPress', 'Next.js', 'Online Marketing', 'Brand Identity', 'UI/UX Design'],
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
    description: getOrgDescription(lang),
  };
}

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Arteon',
  url: siteUrl,
  inLanguage: ['pl', 'en', 'de', 'es', 'fr', 'pt', 'it', 'ro', 'nl', 'hu', 'cs', 'sv', 'da', 'no', 'fi', 'el'],
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
              // EEA + UK + CH - denied until Google CMP collects consent (IAB TCF v2.3 / opt-in).
              // wait_for_update:2000 gives returning users' stored consent enough time to load
              // before GA4 fires events with denied defaults. AdSense uses googlefc independently.
              "gtag('consent','default',{",
              "ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:'denied',",
              'wait_for_update:2000,',
              // PL intentionally included — Poland is an EU member state subject to GDPR/RODO.
              "regions:['AT','BE','BG','HR','CY','CZ','DK','EE','FI','FR','DE','GR','HU','IE','IT','LV','LT','LU','MT','NL','PL','PT','RO','SK','SI','ES','SE','IS','LI','NO','GB','CH']",
              '});',
              // US states - opt-out model (CCPA/CPRA/CPA etc.), so consent STARTS as granted.
              // Google Funding Choices shows "Do Not Sell" link; only updates to denied if user
              // explicitly opts out. Starting denied (opt-in) would limit all US ads by default.
              "gtag('consent','default',{",
              "ad_storage:'granted',ad_user_data:'granted',ad_personalization:'granted',analytics_storage:'granted',",
              'wait_for_update:1000,',
              "regions:['US-CA','US-CO','US-CT','US-DE','US-IA','US-IN','US-KY','US-MD','US-MN','US-MT','US-NE','US-NH','US-NJ','US-OR','US-RI','US-TN','US-TX','US-UT','US-VA']",
              '});',
              // Rest of world - granted (no consent dialog needed)
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

        {/* Early connection hints — must precede external scripts for maximum effect */}
        <link rel="preconnect" href="https://pagead2.googlesyndication.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fundingchoicesmessages.google.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://tpc.googlesyndication.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://pagead2.googlesyndication.com" />
        <link rel="dns-prefetch" href="https://fundingchoicesmessages.google.com" />
        <link rel="dns-prefetch" href="https://fundingchoices.google.com" />
        <link rel="dns-prefetch" href="https://tpc.googlesyndication.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://formspree.io" />
        <link rel="dns-prefetch" href="https://vitals.vercel-insights.com" />

        <meta name="theme-color" content="#171717" />

        {/* AdSense + Google CMP (consent dialog) — loaded before GA4 for faster consent prompt */}
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7845947936813012" crossOrigin="anonymous" />

        {GA_MEASUREMENT_ID && <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} />}
        {GA_MEASUREMENT_ID && (
          <script
            id="ga4-init"
            dangerouslySetInnerHTML={{
              __html: `gtag('js',new Date());gtag('config','${GA_MEASUREMENT_ID}',{send_page_view:true});`,
            }}
          />
        )}

        <script id="schema-org-organization" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildOrgJsonLd(lang)) }} />

        <script id="schema-org-website" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }} />
      </head>

      <body className="font-sans antialiased">
        <Suspense fallback={null}>
          <FocusManager />
          <RouteAnnouncer />
        </Suspense>

        {children}

        <Analytics />
        <SpeedInsights sampleRate={0.02} />
      </body>
    </html>
  );
}
