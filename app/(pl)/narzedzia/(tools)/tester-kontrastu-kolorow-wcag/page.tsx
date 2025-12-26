import Script from 'next/script';
import HeroBanner from '@/components/sections/HeroBanner';
import Wrapper from '@/components/ui/Wrapper';
import Gap from '@/components/ui/Gap';
import type { Metadata } from 'next';
import SectionSteps from '@/components/ui/sections/SectionSteps';
import WcagContrastChecker from '@/components/sections/tools/WcagContrastChecker';
import CTABanner from '@/components/sections/CTABanner';
import Breadcrumbs from '@/components/sections/BreadCrumbs';
import ToolsCarousel from '@/components/sections/tools/ToolsCarousel';
import { toAbsoluteUrl, siteUrl } from '@/lib/url';

export const metadata: Metadata = {
  title: 'Tester kontrastu kolorów WCAG 2.1 AA i AAA',
  description: 'Sprawdź kontrast kolorów zgodnie z wytycznymi WCAG 2.1. Wpisz kolory, zobacz czy spełniasz współczynnik kontrastu na poziomie AA i AAA',
  alternates: { canonical: toAbsoluteUrl('/narzedzia/tester-kontrastu-kolorow-wcag') },
  openGraph: {
    title: 'Tester kontrastu kolorów WCAG 2.1 AA i AAA',
    description: 'Sprawdź kontrast kolorów zgodnie z wytycznymi WCAG 2.1. Wpisz kolory, zobacz czy spełniasz współczynnik kontrastu na poziomie AA i AAA',
    url: toAbsoluteUrl('/narzedzia/tester-kontrastu-kolorow-wcag'),
    type: 'website',
    images: [
      {
        url: toAbsoluteUrl('/assets/tools/narzedzia-tester-kontrastu-kolorow-wcag.webp'),
      },
    ],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Tester kontrastu kolorów WCAG online',
  alternateName: 'Sprawdzanie kontrastu kolorów zgodnie z WCAG 2.1',
  url: toAbsoluteUrl('/narzedzia/tester-kontrastu-kolorow-wcag'),
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
    url: siteUrl,
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

        <SectionSteps
          title="Jak korzystać z testera?"
          description="Sprawdzenie kontrastu to dosłownie kilka sekund:"
          grid="three"
          items={[
            {
              title: '1. Wpisz kolor tekstu',
              description: 'Podaj kolor tekstu jako HEX, RGB lub HSL (np. #000000).',
            },
            {
              title: '2. Wpisz kolor tła',
              description: 'Podaj kolor tła na którym będzie wyświetlany tekst.',
            },
            {
              title: '3. Sprawdź wynik',
              description: 'Zobacz współczynnik kontrastu i czy spełniasz poziom AA lub AAA.',
            },
          ]}
          btnOne="Zobacz pełną instrukcję"
          btnOneLink="/narzedzia/tester-kontrastu-kolorow-wcag/instrukcja"
          btnOneVariant="accent"
        />

        <Gap variant="line" />

        <ToolsCarousel title="Sprawdź inne narzędzia" />

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
