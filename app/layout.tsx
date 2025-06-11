import type { Metadata } from 'next';
import React from 'react';

import './globals.css';
import Footer from '@/components/shared/Footer';
import Navigation from '@/components/shared/N'avigation';

export const metadata: Metadata = {
  title: 'Arteon',
  description: 'Arteon',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/zae8yif.css"></link>
      </head>
      <body className="font-sans antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
