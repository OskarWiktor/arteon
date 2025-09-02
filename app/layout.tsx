import type { Metadata } from 'next';
import Script from 'next/script';
import React from 'react';
import { headers } from 'next/headers';

import './globals.css';
import Footer from '@/components/shared/Footer';
import Navigation from '@/components/shared/Navigation';

import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import CookieConsent from '@/components/sections/CookieConsent';

export const metadata: Metadata = {
  title: 'Arteon',
  description: 'Arteon',
};

const GA_ID = process.env.NEXT_PUBLIC_GA_ID; // ustaw w .env.local

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const headersList = await headers();
  const host = headersList.get('host') || '';
  const locale = host.endsWith('.pl') ? 'pl' : 'en';

  return (
    <html lang={locale}>
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/zae8yif.css" />

        {/* 1) TYLKO domyślna odmowa + stub gtag (bez ładowania gtag/js) */}
        <Script id="ga-consent-default" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            // domyślnie brak zgody
            gtag('consent', 'default', {
              analytics_storage: 'denied',
              ad_user_data: 'denied',
              ad_personalization: 'denied',
              ad_storage: 'denied'
            });
          `}
        </Script>

        {/* 2) Przekazanie GA_ID do client-side + helper do otwierania panelu */}
        <Script id="arteon-globals" strategy="afterInteractive">
          {`
            window.__GA_ID = ${GA_ID ? JSON.stringify(GA_ID) : 'undefined'};
            window.ArteonConsent = {
              open: () => document.dispatchEvent(new CustomEvent('arteon:open-consent'))
            };
          `}
        </Script>
      </head>

      <body className="font-sans antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />

        {/* Vercel Analytics i SpeedInsights są cookieless — mogą być przed zgodą */}
        <Analytics />
        <SpeedInsights />

        <CookieConsent />
      </body>
    </html>
  );
}
