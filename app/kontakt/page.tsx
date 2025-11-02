import Script from 'next/script';
import ContactForm from '@/components/sections/ContactForm';
import HeroBaner from '@/components/sections/HeroBaner';
import Gap from '@/components/ui/Gap';
import Wrapper from '@/components/ui/Wrapper';
import SectionSteps from '@/components/ui/sections/SectionSteps';
import { RiPhoneLine, RiMailLine, RiMapPinTimeLine } from 'react-icons/ri';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.arteonagency.pl';

export const metadata = {
  title: 'Kontakt – wycena Twojego planu | Arteon',
  description: 'Napisz, czego potrzebujesz. Przygotujemy darmową wycenę i jasny plan działania.',
  alternates: { canonical: `${BASE_URL}/kontakt` },
  openGraph: {
    title: 'Kontakt – wycena Twojego planu | Arteon',
    description: 'Napisz, czego potrzebujesz. Przygotujemy darmową wycenę i jasny plan działania.',
    url: `${BASE_URL}/kontakt`,
    siteName: 'Arteon',
    type: 'website',
  },
} as const;

function ContactSchemas() {
  const professionalService = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${BASE_URL}#local`,
    name: 'Arteon',
    url: `${BASE_URL}`,
    image: `${BASE_URL}/icon-512x512.png`,
    telephone: '+48516466255',
    email: 'contact@arteonagency.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'ul. Jaśminowa 36',
      addressLocality: 'Zagacie',
      addressRegion: 'małopolskie',
      addressCountry: 'PL',
      postalCode: '32-070',
    },
    parentOrganization: { '@id': `${BASE_URL}#organization` },

    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: { '@type': 'GeoCoordinates', latitude: 50.0053746, longitude: 19.7094865 },
      geoRadius: 50000,
    },
    areaServed: ['Kraków', 'Skawina', 'Czernichów', 'Liszki', 'Zabierzów', 'Wieliczka'],

    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '16:00',
      },
    ],
    hasMap:
      'https://www.google.com/maps/place/Ja%C5%9Bminowa+36,+32-070+Zagacie/@49.955128,19.7525321,11z/data=!4m6!3m5!1s0x47165fee99b80287:0x35a17883ddf6b10c!8m2!3d50.0053746!4d19.7094865!16s%2Fg%2F11vl3bnz_y',
  };

  const breadcrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Strona główna', item: `${BASE_URL}` },
      { '@type': 'ListItem', position: 2, name: 'Kontakt', item: `${BASE_URL}/kontakt` },
    ],
  };

  return (
    <>
      <Script id="schema-professional-service" type="application/ld+json">
        {JSON.stringify(professionalService)}
      </Script>
      <Script id="schema-breadcrumbs" type="application/ld+json">
        {JSON.stringify(breadcrumbs)}
      </Script>
    </>
  );
}

export default function ContactPage() {
  return (
    <>
      <HeroBaner
        title="Porozmawiajmy o Twojej firmie"
        variant="center"
        description="Wypełnij formularz i uzyskaj darmową wycenę dla swojej firmy"
        backgroundImage="/assets/bg/abstract-bg10.webp"
        overlay="black"
      />

      <Wrapper>
        <Gap size="sm" />

        <SectionSteps
          items={[
            {
              title: <>Wypełniasz formularz</>,
              description: <>Opisujesz swoją firmę, pomysł na rozwój oraz swoje potrzeby</>,
            },
            {
              title: <>Analizujemy potrzeby</>,
              description: <>Sprawdzamy Twoją branżę, analizujemy cele i tworzymy plan</>,
            },
            {
              title: <>Otrzymujesz ofertę</>,
              description: <>Wysyłamy ofertę wraz z wyceną i przewidywanym terminem realizacji</>,
            },
            {
              title: <>Startujemy z projektem</>,
              description: <>Decydujesz, kiedy ruszamy z realizacją</>,
            },
          ]}
          subtitle="Rozmowa"
          title="Jak wygląda pierwszy kontakt?"
        />

        <Gap size="sm" />

        <ContactForm title="Rozwiń swoją firmę" description="Opisz swoją wizję, potrzeby oraz cele i otrzymaj darmową wycenę swojego projektu" />

        <Gap variant="line" />

        <SectionSteps
          items={[
            {
              title: 'Telefon',
              icon: <RiPhoneLine />,
              description: (
                <p>
                  <a href="tel:+48516466255">516 466 255</a>
                </p>
              ),
            },
            {
              title: 'Email',
              icon: <RiMailLine />,
              description: (
                <p>
                  <a href="mailto:contact@arteonagency.com">contact@arteonagency.com</a>
                </p>
              ),
            },
            {
              title: 'Godziny otwarcia',
              icon: <RiMapPinTimeLine />,
              description: <p>Jesteśmy do Twojej dyspozycji od poniedziałku do piątku: 8–16</p>,
            },
          ]}
          title="Dane kontaktowe"
        />

        <Gap size="sm" />
      </Wrapper>

      <ContactSchemas />
    </>
  );
}
