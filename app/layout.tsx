import type { Metadata } from 'next';
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
