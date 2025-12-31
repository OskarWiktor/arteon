import Breadcrumbs from '@/components/sections/BreadCrumbs';
import CTABanner from '@/components/sections/CTABanner';
import HeroBanner from '@/components/sections/HeroBanner';
import MetaTitleDescriptionTool from '@/components/sections/tools/MetaTitleDescriptionTool';
import ToolsCarousel from '@/components/sections/tools/ToolsCarousel';
import Gap from '@/components/ui/Gap';
import SectionSteps from '@/components/ui/sections/SectionSteps';
import Wrapper from '@/components/ui/Wrapper';
import { toAbsoluteUrl, siteUrl } from '@/lib/absoluteUrl';
import type { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Sprawdź długość tytułu i opisu strony w Google',
  description: 'Sprawdź liczbę znaków, słów, szerokość w pikselach oraz ocenę długości meta title i meta description dla swojej strony. Darmowy licznik bez limitu',
  alternates: { canonical: toAbsoluteUrl('/narzedzia/licznik-dlugosci-meta-title-i-description') },
  openGraph: {
    title: 'Sprawdź długość tytułu i opisu strony w Google',
    description: 'Sprawdź liczbę znaków, słów, szerokość w pikselach oraz ocenę długości meta title i meta description dla swojej strony. Darmowy licznik bez limitu',
    url: toAbsoluteUrl('/narzedzia/licznik-dlugosci-meta-title-i-description'),
    type: 'website',
    images: [
      {
        url: toAbsoluteUrl('/assets/tools/narzedzia-licznik-dlugosci-meta-title-i-description.webp'),
      },
    ],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Sprawdź długość tytułu i opisu strony w Google',
  alternateName: 'Licznik meta title i meta description z podglądem Google',
  url: toAbsoluteUrl('/narzedzia/licznik-dlugosci-meta-title-i-description'),
  applicationCategory: 'SEOApplication',
  operatingSystem: 'Any',
  description:
    'Darmowy licznik długości meta title i meta description po polsku. Sprawdza liczbę znaków, słów, szerokość w pikselach i pokazuje podgląd tytułu oraz opisu w wynikach Google - bez limitów i bez logowania.',
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
      <Script id="ld-json-meta-length-tool" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <HeroBanner
        title="Sprawdź długość tytułu i opisu strony w Google"
        description="Wpisz tytuł i opis strony, a narzędzie obliczy liczbę znaków, słów, szerokość w pikselach i pokaże, czy długość jest zgodna z zasadami SEO"
        overlay="black"
        backgroundImage="/assets/arteon-logo-on-mockup.webp"
      />

      <Breadcrumbs
        second={{ href: '/narzedzia', label: 'Narzędzie' }}
        third={{ href: `/narzedzia/licznik-dlugosci-meta-title-i-description`, label: 'Sprawdź długość tytułu i opisu strony w Google' }}
        includeJsonLd
      />

      <Wrapper>
        <Gap size="xs" />

        <MetaTitleDescriptionTool />

        <Gap size="sm" />

        <SectionSteps
          title="Jak korzystać z licznika?"
          description="Sprawdzenie długości meta tagów to dosłownie kilka sekund:"
          grid="three"
          items={[
            {
              title: '1. Wpisz meta title',
              description: 'Wklej lub wpisz tytuł strony. Narzędzie pokaże liczbę znaków, słów i szerokość w pikselach.',
            },
            {
              title: '2. Wpisz meta description',
              description: 'Wklej lub wpisz opis strony. Zobaczysz kolorowy status (za krótki, optymalny, za długi).',
            },
            {
              title: '3. Sprawdź podgląd',
              description: 'Zobacz, jak tytuł i opis wyglądają w wynikach Google.',
            },
          ]}
          btnOne="Zobacz pełną instrukcję"
          btnOneLink="/narzedzia/licznik-dlugosci-meta-title-i-description/instrukcja"
          btnOneVariant="accent"
        />

        <Gap variant="line" />

        <ToolsCarousel title="Sprawdź inne narzędzia" />

        <Gap size="sm" />
      </Wrapper>

      <CTABanner
        title="Potrzebujesz pełnej optymalizacji SEO dla swojej witryny?"
        description="Możemy zająć się tym za Ciebie. Prześlij nam link do swojej strony, a my powiemy, co zrobić, aby klienci mogli Cię łatwiej znaleźć"
        btnOne="Umów rozmowę o SEO"
        btnOneLink="/kontakt"
        btnTwo="Sprawdź ofertę pozycjonowania"
        btnTwoLink="/uslugi/marketing/pozycjonowanie-stron"
        backgroundImage="/assets/arteon-logo-on-mockup.webp"
        overlay="black"
      />
    </>
  );
}
