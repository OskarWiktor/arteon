import type { Metadata } from 'next';
import React from 'react';
import './globals.css';
import Navigation from '@/components/ui/navigation';

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
      <body className='font-sans antialiased max-w-[1220px] w-full m-auto'><Navigation /><main>{children}</main></body>
    </html>
  );
}
