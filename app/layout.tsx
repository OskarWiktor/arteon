// app/layout.tsx
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
