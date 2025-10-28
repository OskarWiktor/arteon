import Script from 'next/script';
import ContactForm from '@/components/sections/ContactForm';
import HeroBaner from '@/components/sections/HeroBaner';
import Gap from '@/components/ui/Gap';
import Wrapper from '@/components/ui/Wrapper';
import SectionSteps from '@/components/ui/sections/SectionSteps';
import { RiPhoneLine, RiMailLine, RiMapPinLine } from 'react-icons/ri';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.arteonagency.pl';

export const metadata = {
  title: 'Kontakt – wycena Twojego planu | Arteon',
  description: 'Napisz, czego potrzebujesz. Przygotujemy darmową wycenę i jasny plan działania.',
  // pełny kanoniczny URL
  alternates: { canonical: `${BASE_URL}/kontakt` },
  openGraph: {
    title: 'Kontakt – wycena Twojego planu | Arteon',
    description: 'Napisz, czego potrzebujesz. Przygotujemy darmową wycenę i jasny plan działania.',
    url: `${BASE_URL}/kontakt`,
    siteName: 'Arteon',
    type: 'website',
  },
} as const;

/* ---------- SCHEMA.ORG: LOCAL BOOST ---------- */
function ContactSchemas() {
  // Dane kontaktowe użyte na stronie (spójne z treścią!)
  const phoneE164 = '+48516466255';
  const email = 'contact@arteonagency.com';

  const professionalService = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Arteon',
    url: `${BASE_URL}`,
    image: `${BASE_URL}/icon-512x512.png`,
    telephone: phoneE164,
    email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'ul. Jaśminowa 36',
      addressLocality: 'Zagacie',
      addressRegion: 'małopolskie',
      addressCountry: 'PL',
      // postalCode: '—', // dodaj, gdy będziesz mieć
    },
    // lokalny wektor: wzmacnia Kraków i okolice (globalny masz w Organization w layout)
    areaServed: 'Kraków i okolice',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00',
      },
    ],
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
              title: (
                <>
                  <span className="text-amber-600">1 </span>Wypełniasz formularz
                </>
              ),
              description: <>Opisujesz swoją firmę, pomysł na rozwój oraz swoje potrzeby</>,
            },
            {
              title: (
                <>
                  <span className="text-amber-600">2 </span>Analizujemy potrzeby
                </>
              ),
              description: <>Sprawdzamy Twoją branżę, analizujemy cele i tworzymy plan</>,
            },
            {
              title: (
                <>
                  <span className="text-amber-600">3 </span>Otrzymujesz ofertę
                </>
              ),
              description: <>Wysyłamy ofertę wraz z wyceną i przewidywanym terminem realizacji</>,
            },
            {
              title: (
                <>
                  <span className="text-amber-600">4 </span>Startujemy z projektem
                </>
              ),
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
              icon: <RiMapPinLine />,
              description: <p>Jesteśmy do Twojej dyspozycji od poniedziałku do piątku: 8–18</p>,
            },
            {
              title: 'Lokalizacja',
              icon: <RiMapPinLine />,
              description: <p>Powiat krakowski, gmina Czernichów, Zagacie 32-070, ul. Jaśminowa 36</p>,
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
