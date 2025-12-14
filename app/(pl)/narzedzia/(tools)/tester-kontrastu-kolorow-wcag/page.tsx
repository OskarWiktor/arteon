import Script from 'next/script';
import HeroBanner from '@/components/sections/HeroBanner';
import Wrapper from '@/components/ui/Wrapper';
import Gap from '@/components/ui/Gap';
import type { Metadata } from 'next';
import SectionInfo from '@/components/ui/sections/SectionInfo';
import WcagContrastChecker from '@/components/sections/tools/WcagContrastChecker';
import CTABanner from '@/components/sections/CTABanner';
import Breadcrumbs from '@/components/sections/BreadCrumbs';

export const metadata: Metadata = {
  title: 'Tester kontrastu kolorów WCAG 2.1 AA i AAA',
  description: 'Sprawdź kontrast kolorów zgodnie z wytycznymi WCAG 2.1. Wpisz kolory, zobacz czy spełniasz współczynnik kontrastu na poziomie AA i AAA',
  alternates: { canonical: 'https://www.arteonagency.pl/narzedzia/tester-kontrastu-kolorow-wcag' },
  openGraph: {
    title: 'Tester kontrastu kolorów WCAG 2.1 AA i AAA',
    description: 'Sprawdź kontrast kolorów zgodnie z wytycznymi WCAG 2.1. Wpisz kolory, zobacz czy spełniasz współczynnik kontrastu na poziomie AA i AAA',
    url: '/narzedzia/tester-kontrastu-kolorow-wcag',
    type: 'website',
    images: [
      {
        url: '/assets/tools/narzedzia-tester-kontrastu-kolorow-wcag.webp',
      },
    ],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Tester kontrastu kolorów WCAG online',
  alternateName: 'Sprawdzanie kontrastu kolorów zgodnie z WCAG 2.1',
  url: 'https://www.arteonagency.pl/narzedzia/tester-kontrastu-kolorow-wcag',
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'Any',
  description:
    'Darmowy tester kontrastu kolorów online zgodny z WCAG 2.1. Sprawdź współczynnik kontrastu między dwoma kolorami i zobacz, czy spełniasz poziomy AA oraz AAA dla zwykłego i dużego tekstu.',
  inLanguage: 'pl-PL',
  isAccessibleForFree: true,
  offers: {
    '@type': 'Offer',
    price: 0,
    priceCurrency: 'PLN',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Arteon Agency',
    url: 'https://www.arteonagency.pl',
  },
};

export default function Page() {
  return (
    <>
      <Script id="ld-json-wcag-contrast-tool" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(schema)}
      </Script>

      <HeroBanner
        title="Tester kontrastu kolorów WCAG"
        description="Sprawdź, czy kolory na Twojej stronie spełniają wymagania WCAG 2.1. Wpisz kolory, zobacz współczynnik kontrastu i od razu dowiedz się, czy masz poziom AA lub AAA."
        overlay="black"
        backgroundImage="/assets/arteon-logo-on-mockup.webp"
      />

      <Breadcrumbs second={{ href: '/narzedzia', label: 'Narzędzie' }} third={{ href: `/narzedzia/tester-kontrastu-kolorow-wcag`, label: 'Tester kontrastu kolorów WCAG' }} includeJsonLd />

      <Wrapper>
        <Gap size="sm" />

        <WcagContrastChecker />

        <Gap size="sm" />

        <SectionInfo title="Jak działa tester kontrastu kolorów WCAG?">
          <p className="mb-6">
            To narzędzie liczy kontrast kolorów dokładnie według oficjalnego wzoru WCAG 2.1 (relative luminance). Na podstawie wprowadzonych kolorów oblicza współczynnik kontrastu w skali od{' '}
            <strong>1:1</strong> do <strong>21:1</strong> i sprawdza, czy spełnione są wymagania:
          </p>
          <ul className="mb-6 list-disc pl-5">
            <li>
              <strong>Tekst zwykły</strong> - poziom AA wymaga kontrastu co najmniej <strong>4.5:1</strong>, a AAA co najmniej <strong>7:1</strong>.
            </li>
            <li>
              <strong>Tekst duży</strong> - minimalny kontrast to <strong>3:1</strong>.
            </li>
            <li>
              <strong>Ikony i elementy UI</strong> - minimalny kontrast to <strong>3:1</strong>.
            </li>
          </ul>
          <p className="text-light">Wszystkie obliczenia wykonywane są lokalnie w Twojej przeglądarce</p>
        </SectionInfo>

        <Gap size="sm" />
      </Wrapper>

      <CTABanner
        title="Chcesz, żeby Twoja strona była zgodna z WCAG i lepiej widoczna w Google?"
        description="Prześlij nam link do swojej strony. Sprawdzimy kluczowe elementy: kontrast, hierarchię treści, Core Web Vitals i SEO techniczne - a potem powiemy, co konkretnie poprawić, żeby strona była szybsza, czytelniejsza i generowała więcej zapytań."
        btnOne="Umów rozmowę o stronie www"
        btnOneLink="/kontakt"
        btnTwo="Sprawdź nasze usługi"
        btnTwoLink="/uslugi"
        backgroundImage="/assets/arteon-logo-on-mockup.webp"
        overlay="black"
      />
    </>
  );
}
