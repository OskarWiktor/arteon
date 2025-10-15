import ContactForm from '@/components/sections/ContactForm';
import HeroBaner from '@/components/sections/HeroBaner';
import Gap from '@/components/ui/Gap';
import Wrapper from '@/components/ui/Wrapper';
import SectionSteps from '@/components/ui/sections/SectionSteps';
import { RiPhoneLine, RiMailLine, RiMapPinLine } from 'react-icons/ri';

export const metadata = {
  title: 'Kontakt - wycena Twojego plany | Arteon',
  description: 'Napisz, czego potrzebujesz. Przygotujemy darmową wycenę i jasny plan działania',
  keywords: ['wycena strony', 'wycena sklepu', 'kontakt agencja', 'projekt graficzny', 'kampanie online'],
  alternates: { canonical: '/kontakt' },
  openGraph: {
    title: 'Kontakt - wycena Twojego plany | Arteon',
    description: 'Napisz, czego potrzebujesz. Przygotujemy darmową wycenę i jasny plan działania',
    url: 'https://www.arteonagency.pl/kontakt',
    type: 'website',
  },
} as const;

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
                <>
                  <span>
                    <a href="tel:+48516466255" className="text-lg md:text-xl">
                      516 466 255
                    </a>
                  </span>
                </>
              ),
            },
            {
              title: 'Email',
              icon: <RiMailLine />,
              description: (
                <span>
                  <a href="mailto:contact@arteonagency.com" className="text-lg md:text-xl">
                    contact@arteonagency.com
                  </a>
                </span>
              ),
            },
            {
              title: 'Godziny otwarcia',
              icon: <RiMapPinLine />,
              description: <span className="text-lg md:text-xl">Jesteśmy do Twojej dyspozycji od poniedziałku do piątku: 8 - 16</span>,
            },
          ]}
          title="Dane kontaktowe"
        />

        <Gap size="sm" />
      </Wrapper>
    </>
  );
}
