import WorkSteps from '@/components/sections/steps/WorkSteps';
import HeroBanner from '@/components/sections/HeroBanner';
import BenefitBelt from '@/components/sections/BenefitBelt';
import CTABanner from '@/components/sections/CTABanner';
import Gap from '@/components/ui/Gap';
import FeesSteps from '@/components/sections/steps/FeesSteps';
import ServicesSteps from '@/components/sections/steps/ServicesSteps';
import ContactForm from '@/components/sections/ContactForm';
import Wrapper from '@/components/ui/Wrapper';
import ProjectsOverview from '@/components/sections/projects/ProjectsOverview';
import Breadcrumbs from '@/components/sections/BreadCrumbs';
import FaqPanels from '@/components/ui/FaqPanels';
import FeatureGrid from '@/components/sections/FeatureGrid';
import SectionInfo from '@/components/ui/sections/SectionInfo';
import { IoColorPalette } from 'react-icons/io5';
import { RiPencilRuler2Line, RiBarChart2Fill, RiFileTextLine, RiTableLine } from 'react-icons/ri';
import Script from 'next/script';
import { buildServiceSchema } from '@/lib/serviceSchema';
import TestimonialsCarousel from '@/components/sections/TestimonialsCarousel';

export const metadata = {
  title: 'Projekt cennika | Arteon',
  description: 'Przejrzysty projekt cennika firmowego. Estetyczny układ, typografia, kolory wraz z przygotowaniem do druku oraz wersją online.',
  keywords: ['projekt cennika', 'cennik usług', 'projekt graficzny cennika', 'cennik do druku', 'projekt cennika restauracji'],
  alternates: { canonical: 'https://www.arteonagency.pl/uslugi/projekty-graficzne/projekt-cennika' },
  openGraph: {
    title: 'Projekt cennika | Arteon',
    description: 'Przejrzysty projekt cennika firmowego. Estetyczny układ, typografia, kolory wraz z przygotowaniem do druku oraz wersją online.',
    url: 'https://www.arteonagency.pl/uslugi/projekty-graficzne/projekt-cennika',
    type: 'website',
  },
} as const;

const BASE = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.arteonagency.pl';

function ServiceSchema() {
  const json = buildServiceSchema({
    baseUrl: BASE,
    path: '/uslugi/projekty-graficzne/projekt-cennika',
    serviceName: 'Projekt cennika',
    description: 'Przejrzysty projekt cennika firmowego. Estetyczny układ, typografia, kolory wraz z przygotowaniem do druku oraz wersją online.',
    availableLanguages: ['pl'],
    includeServiceChannel: true,
  });

  return (
    <Script id="schema-service-projekt-cennika" type="application/ld+json">
      {JSON.stringify(json)}
    </Script>
  );
}

export default function OfferDesignCennikPage() {
  return (
    <>
      <HeroBanner
        title="Projekt cennika"
        description={
          <>
            Zaprojektujemy cennik, który porządkuje Twoją ofertę i prowadzi klienta do wyboru właściwej opcji. W kilka dni otrzymasz gotowy plik do druku oraz wersję cyfrową do wykorzystania na
            stronie i w social mediach.
          </>
        }
        buttonAccent="Bezpłatna wycena"
        buttonAccentLink="#kontakt"
        buttonSecond="Realizacje"
        buttonSecondLink="/realizacje"
        variant="left"
        backgroundImage="/assets/projects/cennik-mockup.png"
        overlay="black"
      />

      <BenefitBelt
        items={[
          { icon: <RiPencilRuler2Line />, label: 'Spójny wizerunek marki' },
          { icon: <RiTableLine />, label: 'Czytelna prezentacja cen' },
          { icon: <RiFileTextLine />, label: 'Gotowe do druku i online' },
          { icon: <RiBarChart2Fill />, label: 'Projekt pod sprzedaż' },
        ]}
      />

      <Breadcrumbs
        second={{ href: '/uslugi', label: 'Usługi' }}
        third={{ href: `/uslugi/projekty-graficzne`, label: 'Projekty graficzne' }}
        fourth={{ href: `/uslugi/projekty-graficzne/projekt-cennika`, label: 'Projekt cennika' }}
        includeJsonLd
      />

      <Wrapper>
        <Gap size="xs" />

        <SectionInfo title="Dlaczego warto mieć profesjonalny projekt cennika?">
          <p>
            Dobrze zaprojektowany układ cennika porządkuje ofertę, ułatwia porównanie, zachęca do wyboru droższych opcji oraz buduje profesjonalny wizerunek Twojej firmy. Klient widzi jasną strukturę,
            zamiast listy przypadkowych pozycji.
          </p>

          <br />

          <p>
            <strong>Wygląd ma wpływ na decyzje zakupowe.</strong> Sposób prezentacji cen może realnie zwiększyć sprzedaż: odpowiednia hierarchia, wyróżnione pakiety oraz czytelne nazwy sprawiają, że
            rozmowa o cenie jest prostsza i mniej konfliktowa.
          </p>

          <br />

          <p>
            <strong>Dobry cennik robi trzy rzeczy naraz:</strong>
          </p>
          <ul className="ml-5 list-disc">
            <li>Porządkuje informacje i buduje profesjonalny wizerunek,</li>
            <li>Ułatwia porównanie i podejmowanie decyzji,</li>
            <li>Wzmacnia zaufanie i zwiększa sprzedaż.</li>
          </ul>

          <br />

          <p>
            Po wdrożeniu nowego cennika łatwiej jest też utrzymać konsekwencję: nowi pracownicy szybciej rozumieją ofertę, a klienci otrzymują spójne informacje niezależnie od tego, kto z nimi
            rozmawia – na żywo, przez telefon czy online.
          </p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionInfo title="Dla kogo jest projekt cennika?" subtitle="Kiedy ma największy sens?">
          <p>Największą wartość z profesjonalnego projektu cennika widzimy u firm, które chcą uporządkować ofertę i ułatwić klientom podjęcie decyzji.</p>

          <br />

          <ul className="ml-5 list-disc space-y-2">
            <li>Masz kilka lub kilkanaście usług / pakietów i klienci dopytują, czym dokładnie się różnią.</li>
            <li>Obecny cennik powstał „tymczasowo” w Wordzie lub Excelu i nie pasuje do reszty identyfikacji.</li>
            <li>Chcesz podnieść ceny, ale potrzebujesz lepszej argumentacji wizualnej i logicznej struktury oferty.</li>
            <li>Planujesz wprowadzić pakiety (Standard / Premium / VIP) i chcesz, aby klient naturalnie wybierał właściwą opcję.</li>
            <li>Chcesz mieć jeden spójny cennik dla punktu stacjonarnego, strony www i social media.</li>
          </ul>

          <br />

          <p>Jeśli Twój cennik jest dziś „roboczym dokumentem”, który trudno pokazać klientowi, projekt graficzny zamienia go w narzędzie sprzedaży – czytelne, estetyczne i spójne z marką.</p>
        </SectionInfo>

        <Gap variant="line" />

        <FeatureGrid
          title="Co zawiera projekt cennika?"
          subtitle="Nasz standard pracy"
          items={[
            {
              title: 'Przejrzysty układ i hierarchia',
              description: <>Projektujemy logiczne sekcje, wyróżniamy kluczowe usługi i podkreślamy rekomendowane opcje, aby ułatwić wybór klientowi i uporządkować rozmowę o cenach.</>,
              icon: <RiTableLine className="h-6 w-6 text-slate-500" />,
            },
            {
              title: 'Spójność z identyfikacją marki',
              description: (
                <>Kolory, czcionki i ikony dopasowujemy do stylu Twojej marki oraz branży. Cennik staje się integralną częścią Twojej komunikacji, a nie osobnym dokumentem „z innej bajki”.</>
              ),
              icon: <IoColorPalette className="h-6 w-6 text-slate-500" />,
            },
            {
              title: 'Wersje do druku i online',
              description: <>Otrzymasz plik PDF gotowy do druku oraz wersję cyfrową do publikacji na stronie, w systemach rezerwacji lub social mediach. Nie musisz dopasowywać plików samodzielnie.</>,
              icon: <RiFileTextLine className="h-6 w-6 text-slate-500" />,
            },
          ]}
        />

        <Gap variant="line" />

        <ProjectsOverview title="Przykładowe realizacje projektów graficznych" category="grafika" subtitle="Portfolio" />

        <Gap variant="line" />

        <TestimonialsCarousel />

        <Gap variant="line" />

        <FeesSteps />

        <Gap variant="line" />

        <WorkSteps variant="design" />

        <Gap size="sm" />

        <ContactForm
          title="Zamów projekt cennika"
          description="Opisz, czym się zajmujesz, jak wygląda dziś Twoja oferta i w jaki sposób pokazujesz ceny. Na tej podstawie przygotujemy propozycję układu, termin oraz wycenę."
          defaultSubject="Projekt cennika"
        />

        <Gap variant="line" />

        <SectionInfo title="Z czym najczęściej łączymy projekt cennika?" subtitle="Powiązane materiały">
          <p>Najlepszy efekt daje cennik, który jest częścią spójnego zestawu materiałów sprzedażowych i wizerunkowych.</p>

          <br />

          <ul className="ml-5 list-disc space-y-2">
            <li>
              projekt{' '}
              <a href="/uslugi/projekty-graficzne/projekt-menu-restauracji" className="inline-link">
                menu restauracji
              </a>{' '}
              lub karty dań,
            </li>
            <li>
              projekt{' '}
              <a href="/uslugi/projekty-graficzne/projekt-katalogu" className="inline-link">
                katalogu ofertowego
              </a>{' '}
              z rozbudowanym opisem usług,
            </li>
            <li>
              projekt{' '}
              <a href="/uslugi/projekty-graficzne/projekt-wizytowki" className="inline-link">
                wizytówki
              </a>{' '}
              oraz{' '}
              <a href="/uslugi/projekty-graficzne/projekt-identyfikacji-wizualnej" className="inline-link">
                identyfikacji wizualnej
              </a>{' '}
              marki,
            </li>
            <li>szablony postów do social media, które spójnie prowadzą klienta od pierwszego kontaktu aż po konkretną ofertę.</li>
          </ul>

          <br />

          <p>
            Możemy zaplanować cały zestaw materiałów w jednym procesie, tak aby każdy element – strona, cennik, katalog, social media – opowiadał tę samą historię i pracował na Twój wynik finansowy.
          </p>
        </SectionInfo>

        <Gap variant="line" />

        <FaqPanels
          openByDefault={1}
          pageUrl="https://www.arteonagency.pl/uslugi/projekty-graficzne/projekt-cennika"
          title="Najczęstsze pytania o projekt cennika"
          items={[
            {
              question: 'W jakim formacie przygotujecie cennik?',
              answer: 'Najczęściej tworzymy cenniki w formacie A4 oraz A5. Możemy dopasować projekt do strony www lub materiałów drukowanych.',
            },
            {
              question: 'Czy mogę dodać zdjęcia lub ikony do cennika?',
              answer: 'Tak. Możemy wzbogacić projekt o grafiki, zdjęcia produktów lub ikony ilustrujące usługi.',
            },
            {
              question: 'Czy mogę później edytować cennik?',
              answer: 'Tak, na życzenie możemy dostarczyć pliki źródłowe oraz prostą instrukcję edycji, dzięki której będziesz w stanie samodzielnie zaktualizować ceny.',
            },
            {
              question: 'Jak długo trwa realizacja?',
              answer: 'Zazwyczaj od 3 do 5 dni roboczych. Dla cenników z dużą liczbą pozycji termin ustalamy indywidualnie.',
            },
            {
              question: 'Czy możliwe jest zrealizowanie cennika, który ma wiele stron?',
              answer: 'Tak – możemy zaprojektować katalog cenowy, menu lub broszurę z cennikiem w formie wielostronicowej.',
            },
          ]}
        />

        <Gap variant="line" />

        <ServicesSteps />

        <Gap size="sm" />
      </Wrapper>

      <CTABanner
        title="Upiększ swoją ofertę"
        description="Zaprojektujemy cennik, który wygląda profesjonalnie i ułatwia sprzedaż każdego dnia."
        btnOne="Skontaktuj się"
        btnOneLink="#kontakt"
        btnTwo="Poznaj usługi graficzne"
        btnTwoLink="/uslugi/projekty-graficzne"
        backgroundImage="/assets/projects/cennik-mockup.png"
        overlay="black"
      />

      <ServiceSchema />
    </>
  );
}
