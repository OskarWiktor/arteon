import { RiPhoneLine, RiMailLine, RiMapPinTimeLine } from 'react-icons/ri';
import Divider from '@/components/atoms/Divider';
import { JsonLd } from '@/components/atoms/JsonLd';
import Wrapper from '@/components/atoms/Wrapper';
import BenefitBelt from '@/components/organisms/BenefitBelt';
import ContactForm from '@/components/organisms/ContactForm';
import HeroBanner from '@/components/organisms/HeroBanner';
import SectionSteps from '@/components/organisms/sections/SectionSteps';
import { getContactAlternates } from '@/lib/i18n/pages/contact';
import { normalIconSizeClasses } from '@/lib/uiClasses';
import { toAbsoluteUrl } from '@/utils/absoluteUrl';

export const metadata = {
  title: 'Kontakt - wycena Twojego planu - Arteon',
  description:
    'Strona kontaktowa Arteon. Napisz, co chcesz stworzyć. Przygotujemy dla Ciebie darmową wycenę i jasny plan działania.',
  alternates: getContactAlternates('pl'),
  openGraph: {
    title: 'Kontakt - wycena Twojego planu - Arteon',
    description:
      'Strona kontaktowa Arteon. Napisz, co chcesz stworzyć. Przygotujemy dla Ciebie darmową wycenę i jasny plan działania.',
    url: toAbsoluteUrl('/kontakt'),
    siteName: 'Arteon',
    type: 'website',
    images: [
      {
        url: toAbsoluteUrl('/assets/projects/eliza-wronska/moskup-strony-eliza-wronska.webp'),
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
        description='Opowiedz nam o tym czym się zajmujesz i co chciałbyś zrealizować, pomożemy doradzić najlepsze rozwiązanie, które przyciągnie Twoich wymarzonych klientów'
        backgroundImage='/assets/projects/eliza-wronska/moskup-strony-eliza-wronska.webp'
        overlay='black'
      />
      <BenefitBelt variant='carousel' />

      <Wrapper>
        <Divider size='sm' />

        <ContactForm
          title='Rozwiń swoją firmę'
          description='Opisz co chcesz zrealizować - przygotujemy jasny plan realizacji i powiemy co sprawdzi się najlepiej'
        />

        <Divider size='sm' />

        <SectionSteps
          items={[
            {
              title: <>Kontaktujesz się</>,
              description: (
                <>Opisujesz co chciałbym zrealizować poprzez formularz, email lub telefonicznie</>
              ),
            },
            {
              title: <>Analizujemy potrzeby</>,
              description: <>Sprawdzamy Twoją branżę, analizujemy cele i tworzymy plan</>,
            },
            {
              title: <>Otrzymujesz ofertę</>,
              description: <>Wysyłamy ofertę z wyceną i wszelkimi etapami realizacji</>,
            },
            {
              title: <>Dopracowujemy szczegóły</>,
              description: <>Wspólnie dopracowujemy idealny plan i ruszamy z realizacją</>,
            },
          ]}
          title='Jak wygląda pierwszy kontakt?'
        />

        <Divider line />

        <SectionSteps
          items={[
            {
              title: 'Telefon',
              icon: <RiPhoneLine className={normalIconSizeClasses} />,
              description: (
                <p>
                  <a href='tel:+48516466255'>+48 516 466 255</a>
                </p>
              ),
            },
            {
              title: 'Email',
              icon: <RiMailLine className={normalIconSizeClasses} />,
              description: (
                <>
                  <p>
                    Dla polskojęzycznych:
                    <a href='mailto:kontakt@arteonagency.pl'>kontakt@arteonagency.pl</a>
                  </p>
                  <p>
                    For english speaker:
                    <strong>
                      <a href='mailto:contact@arteonagency.com'>contact@arteonagency.com</a>
                    </strong>
                  </p>
                </>
              ),
            },
            {
              title: 'Godziny otwarcia',
              icon: <RiMapPinTimeLine className={normalIconSizeClasses} />,
              description: (
                <p>Jesteśmy do Twojej dyspozycji od poniedziałku do piątku od 9 do 20</p>
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
