import JpgPngToWebp from '@/components/sections/tools/JpgPngToWebp';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Konwerter JPG/PNG na WebP online za darmo bez limitu',
  description:
    'Szybki konwerter JPG/PNG na WebP online. Zmniejsz wagę zdjęć bez widocznej utraty jakości, przyspiesz ładowanie strony i popraw wyniki Core Web Vitals. Bez logowania, bez abonamentu i bez limitu.',
  keywords: ['konwerter jpg na webp', 'konwerter png na webp', 'konwersja obrazów webp online', 'optymalizacja obrazów na stronę', 'webp converter', 'przyspieszenie strony internetowej'],
  alternates: { canonical: '/narzedzia/jpg-na-webp' },
  openGraph: {
    title: 'Konwerter JPG/PNG na WebP online za darmo bez limitu',
    description:
      'Szybki konwerter JPG/PNG na WebP online. Zmniejsz wagę zdjęć bez widocznej utraty jakości, przyspiesz ładowanie strony i popraw wyniki Core Web Vitals. Bez logowania, bez abonamentu i bez limitu.',
    url: 'https://www.arteonagency.pl/narzedzia/jpg-png-na-webp',
    type: 'website',
    images: [
      {
        url: 'https://www.arteonagency.pl/assets/arteon-logo-on-mockup.webp',
      },
    ],
  },
};

export default function Page() {
  return <JpgPngToWebp />;
}
