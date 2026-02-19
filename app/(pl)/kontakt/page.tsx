import ContactForm from '@/components/sections/ContactForm';
import HeroBanner from '@/components/sections/HeroBanner';
import Gap from '@/components/ui/Gap';
import Wrapper from '@/components/ui/Wrapper';
import SectionSteps from '@/components/ui/sections/SectionSteps';
import { RiPhoneLine, RiMailLine, RiMapPinTimeLine } from 'react-icons/ri';
import { toAbsoluteUrl } from '@/utils/absoluteUrl';
import { getContactAlternates } from '@/lib/i18n/pages/contact';

export const metadata = {
  title: 'Kontakt - wycena Twojego planu - Arteon',
  description: 'Strona kontaktowa Arteon. Napisz, co chcesz stworzyć. Przygotujemy dla Ciebie darmową wycenę i jasny plan działania.',
  alternates: getContactAlternates('pl'),
  openGraph: {
    title: 'Kontakt - wycena Twojego planu - Arteon',
    description: 'Strona kontaktowa Arteon. Napisz, co chcesz stworzyć. Przygotujemy dla Ciebie darmową wycenę i jasny plan działania.',
    url: toAbsoluteUrl('/kontakt'),
    siteName: 'Arteon',
    type: 'website',
    // TODO: Add unique OpenGraph image for contact page: /assets/og/kontakt.webp (1200x630px)
    images: [
      {
        url: toAbsoluteUrl('/assets/bg/abstract-bg10.webp'),
        width: 1200,
        height: 630,
        alt: 'Kontakt - Arteon',
      },
    ],
  },
} as const;

function ContactSchemas() {
  const breadcrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Strona główna', item: toAbsoluteUrl('/') },
      { '@type': 'ListItem', position: 2, name: 'Kontakt', item: toAbsoluteUrl('/kontakt') },
    ],
  };

  const howToContact = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'Jak wygląda pierwszy kontakt z Arteon',
    description: 'Proces nawiązania współpracy: wypełnienie formularza, analiza potrzeb, otrzymanie oferty, start projektu.',
    step: [
      {
        '@type': 'HowToStep',
        position: 1,
        name: 'Wypełniasz formularz',
        text: 'Opisujesz swoją firmę, pomysł na rozwój oraz swoje potrzeby',
      },
      {
        '@type': 'HowToStep',
        position: 2,
        name: 'Analizujemy potrzeby',
        text: 'Sprawdzamy Twoją branżę, analizujemy cele i tworzymy plan',
      },
      {
        '@type': 'HowToStep',
        position: 3,
        name: 'Otrzymujesz ofertę',
        text: 'Wysyłamy ofertę wraz z wyceną i przewidywanym terminem realizacji',
      },
      {
        '@type': 'HowToStep',
        position: 4,
        name: 'Startujemy z projektem',
        text: 'Decydujesz, kiedy ruszamy z realizacją',
      },
    ],
  };

  return (
    <>
      <script id="schema-breadcrumbs" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script id="schema-howto-contact" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToContact) }} />
    </>
  );
}

export default function ContactPage() {
  return (
    <>
      <HeroBanner
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
          variant="contact"
          items={[
            {
              title: 'Telefon',
              icon: <RiPhoneLine className="h-6 w-6" />,
              description: (
                <p>
                  <a href="tel:+48516466255">516 466 255</a>
                </p>
              ),
            },
            {
              title: 'Email',
              icon: <RiMailLine className="h-6 w-6" />,
              description: (
                <p>
                  <a href="mailto:kontakt@arteonagency.pl">kontakt@arteonagency.pl</a>
                </p>
              ),
            },
            {
              title: 'Godziny otwarcia',
              icon: <RiMapPinTimeLine className="h-6 w-6" />,
              description: <p>Jesteśmy do Twojej dyspozycji od poniedziałku do piątku: 8-16</p>,
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
