import Divider from '@/components/atoms/Divider';
import { JsonLd } from '@/components/atoms/JsonLd';
import Wrapper from '@/components/atoms/Wrapper';
import BenefitBelt from '@/components/organisms/BenefitBelt';
import HeroBanner from '@/components/organisms/HeroBanner';
import SectionSteps from '@/components/organisms/sections/SectionSteps';
import { getContactAlternates } from '@/lib/i18n/pages/contact';
import { toAbsoluteUrl } from '@/utils/absoluteUrl';
import SectionContactForm from '@/components/organisms/sections/SectionContactForm';

export const metadata = {
  title:
    'Kontakt - realizacja stron internetowych, sklepów i projektów graficznych - Arteon',
  description:
    'Strona kontaktowa Arteon. Napisz, co chcesz stworzyć. Przygotujemy dla Ciebie darmową wycenę i jasny plan działania.',
  alternates: getContactAlternates('pl'),
  openGraph: {
    title:
      'Kontakt - realizacja stron internetowych, sklepów i projektów graficznych - Arteon',
    description:
      'Strona kontaktowa Arteon. Napisz, co chcesz stworzyć. Przygotujemy dla Ciebie darmową wycenę i jasny plan działania.',
    url: toAbsoluteUrl('/kontakt'),
    siteName: 'Arteon',
    type: 'website',
    images: [
      {
        url: toAbsoluteUrl(
          '/assets/projects/eliza-wronska/moskup-strony-eliza-wronska.webp',
        ),
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
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Strona główna',
        item: toAbsoluteUrl('/'),
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Kontakt',
        item: toAbsoluteUrl('/kontakt'),
      },
    ],
  };

  const howToContact = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'Jak wygląda pierwszy kontakt z Arteon',
    description:
      'Proces nawiązania współpracy: wypełnienie formularza, analiza potrzeb, otrzymanie oferty, start projektu.',
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
      <JsonLd schema={breadcrumbs} id='schema-breadcrumbs' />
      <JsonLd schema={howToContact} id='schema-howto-contact' />
    </>
  );
}

export default function ContactPage() {
  return (
    <>
      <HeroBanner
        title='Kontakt - realizacja stron internetowych, sklepów i projektów graficznych'
        description='Potrzebujesz strony internetowej, sklepu, projektu graficznego, optymalizacji SEO lub prędkości ładowania witryny? Skontaktuj się z nami, przygotujemy dla Ciebie darmową wycenę i jasny plan działania.'
        backgroundImage='/assets/projects/eliza-wronska/moskup-strony-eliza-wronska.webp'
        overlay='black'
      />
      <BenefitBelt variant='carousel' />

      <Wrapper>
        <Divider size='sm' />

        <SectionContactForm
          imageSrc='/assets/projects/jstax/moskup-strony-jstax.webp'
          imageAlt='Mockup projektu strony internetowej dla kancelarii podatkowej'
        />

        <Divider line />

        <SectionSteps
          items={[
            {
              title: <>Rozmowa</>,
              description: <>Opisujesz co chciałbym stworzyć lub poprawić</>,
            },
            {
              title: <>Analiza</>,
              description: (
                <>Sprawdzamy Twoją branżę, analizujemy cele i tworzymy plan</>
              ),
            },
            {
              title: <>Oferta</>,
              description: (
                <>Wysyłamy ofertę z wyceną i jasnym planem działania</>
              ),
            },
            {
              title: <>Realizacja</>,
              description: (
                <>Wspólnie dopracowujemy szczegóły i ruszamy z realizacją</>
              ),
            },
          ]}
          title='Jak wygląda pierwszy kontakt?'
        />

        <Divider line />

        <SectionSteps
          items={[
            {
              title: 'Telefon',
              description: (
                <p>
                  <a href='tel:+48516466255'>+48 516 466 255</a>
                </p>
              ),
            },
            {
              title: 'E-mail',
              description: (
                <>
                  <p>
                    Dla polskojęzycznych:
                    <a href='mailto:kontakt@arteonagency.pl'>
                      {' '}
                      kontakt@arteonagency.pl
                    </a>
                  </p>
                  <p>
                    For english speaker:
                    <strong>
                      <a href='mailto:contact@arteonagency.com'>
                        {' '}
                        contact@arteonagency.com
                      </a>
                    </strong>
                  </p>
                </>
              ),
            },
            {
              title: 'Godziny pracy',
              description: (
                <p>
                  Jesteśmy do Twojej dyspozycji od poniedziałku do piątku od
                  9:00 do 17:00
                </p>
              ),
            },
          ]}
          title='Dane kontaktowe'
        />

        <Divider size='sm' />
      </Wrapper>

      <ContactSchemas />
    </>
  );
}
