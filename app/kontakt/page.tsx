import ContactForm from '@/components/sections/ContactForm';
import HeroBaner from '@/components/sections/HeroBaner';
import Gap from '@/components/ui/Gap';
import Wrapper from '@/components/ui/Wrapper';
import SectionSteps from '@/components/ui/sections/SectionSteps';
import { RiPhoneLine, RiMailLine, RiMapPinLine } from 'react-icons/ri';

export const metadata = {
  title: 'Kontakt - wycena strony, sklepu i kampanii | Arteon',
  description: 'Napisz, czego potrzebujesz. Przygotujemy darmową wycenę i plan działań dla Twojej marki - Kraków i cała Polska.',
  keywords: ['wycena strony', 'wycena sklepu', 'kontakt agencja', 'projekt graficzny', 'kampanie online'],
  alternates: { canonical: '/kontakt' },
  openGraph: {
    title: 'Porozmawiajmy o Twoim projekcie | Arteon',
    description: 'Szybka wycena i jasny plan. Transparentne zasady i gwarancja.',
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
        description="Skontaktuj się z nami - przygotujemy ofertę i plan działania szyty na miarę"
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
                  <span className="font-extrabold text-slate-600">1 </span>Wypełniasz formularz
                </>
              ),
              description: <>Opisujesz swój projekt: cel, zakres i wszelkie inspiracje</>,
            },
            {
              title: (
                <>
                  <span className="font-extrabold text-slate-600">2 </span>Analizujemy potrzeby
                </>
              ),
              description: <>Sprawdzamy Twoją branżę, analizujemy wymagania i dopracowujemy szczegóły</>,
            },
            {
              title: (
                <>
                  <span className="font-extrabold text-slate-600">3 </span>Otrzymujesz ofertę
                </>
              ),
              description: <>Wysyłamy ofertę wraz z wyceną i przewidywanym terminem realizacji</>,
            },
            {
              title: (
                <>
                  <span className="font-extrabold text-slate-600">4 </span>Startujemy z projektem
                </>
              ),
              description: <>Decydujesz, kiedy ruszamy. Realizujemy projekt etapami lub od razu</>,
            },
          ]}
          subtitle="Rozmowa"
          title="Jak wygląda pierwszy kontakt?"
        />

        <Gap size="sm" />

        <ContactForm />

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
              title: 'Godziny pracy',
              icon: <RiMapPinLine />,
              description: <span className="text-lg md:text-xl">Pracujemy od poniedziałku do piątku: 8 - 16</span>,
            },
          ]}
          title="Dane kontaktowe"
        />

        <Gap size="sm" />
      </Wrapper>
    </>
  );
}
