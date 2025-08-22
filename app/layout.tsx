import type { Metadata } from 'next';
import Script from "next/script";
import React from 'react';
import { headers } from 'next/headers';

import './globals.css';
import Footer from '@/components/shared/Footer';
import Navigation from '@/components/shared/Navigation';

import { Analytics } from '@vercel/analytics/next';

export const metadata: Metadata = {
  title: 'Arteon',
  description: 'Arteon',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const headersList = await headers();
  const host = headersList.get('host') || '';
  const locale = host.endsWith('.pl') ? 'pl' : 'en';

  return (
    <html lang={locale}>
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/zae8yif.css" />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-89KYXWSGYS"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-89KYXWSGYS');
          `}
        </Script>
      </head>
      <body className="font-sans antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
