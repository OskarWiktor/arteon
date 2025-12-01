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
import SectionPrices from '@/components/ui/sections/SectionPrices';
import SectionSteps from '@/components/ui/sections/SectionSteps';
import Button from '@/components/ui/Button';

export const metadata = {
  title: 'Projekt cennika | Arteon',
  description: 'Przejrzysty projekt cennika firmowego. Estetyczny układ, typografia, kolory wraz z przygotowaniem do druku oraz wersją online.',
  alternates: {
    canonical: 'https://www.arteonagency.pl/uslugi/projekty-graficzne/projekt-cennika',
  },
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
        backgroundImage="/assets/projects/cennik-mockup.webp"
        overlay="black"
      />

      <BenefitBelt
        items={[
          { icon: <RiPencilRuler2Line />, label: 'Spójny wizerunek marki' },
          { icon: <RiTableLine />, label: 'Czytelna prezentacja cen' },
          { icon: <RiFileTextLine />, label: 'Pliki gotowe do druku i online' },
          { icon: <RiBarChart2Fill />, label: 'Projekt wspierający sprzedaż' },
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
            Dobrze zaprojektowany układ cennika porządkuje ofertę, ułatwia porównanie, zachęca do wyboru droższych opcji oraz buduje profesjonalny wizerunek Twojej firmy. Klient widzi jasną i
            estetyczną strukturę, co dodatkowo wzbudza zaufanie.
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
        </SectionInfo>

        <Gap variant="line" />

        <FeatureGrid
          title="Co zawiera projekt cennika?"
          subtitle="Nasz standard pracy"
          items={[
            {
              title: 'Przejrzysty układ i hierarchia',
              description: <>Projektujemy logiczne sekcje, wyróżniamy kluczowe usługi i podkreślamy rekomendowane opcje, aby ułatwić wybór klientowi, ułatwiając przy tym rozmowę o cenach.</>,
              icon: <RiTableLine className="h-6 w-6 text-slate-500" />,
            },
            {
              title: 'Spójność z identyfikacją marki',
              description: <>Kolory, czcionki i ikony dopasowujemy do stylu Twojej marki oraz branży. Cennik staje się integralną częścią Twojej komunikacji.</>,
              icon: <IoColorPalette className="h-6 w-6 text-slate-500" />,
            },
            {
              title: 'Wersje do druku i online',
              description: <>Otrzymasz plik PDF gotowy do druku oraz wersję cyfrową do publikacji na stronie czy mediach społecznościowych. Dostajesz gotową paczkę plików.</>,
              icon: <RiFileTextLine className="h-6 w-6 text-slate-500" />,
            },
          ]}
        />

        <Gap variant="line" />

        <SectionInfo title="Dla kogo jest projekt cennika?" subtitle="Kiedy ma największy sens?">
          <ul className="ml-5 list-disc space-y-2">
            <li>Masz kilka lub kilkanaście usług / pakietów i klienci dopytują, czym dokładnie się różnią.</li>
            <li>Obecny cennik powstał tymczasowo w Wordzie lub Excelu i nie pasuje do reszty identyfikacji.</li>
            <li>Chcesz podnieść ceny, ale potrzebujesz lepszej argumentacji wizualnej i logicznej struktury oferty.</li>
            <li>Planujesz wprowadzić pakiety (Standard / Premium / VIP) i chcesz, aby klient naturalnie wybierał właściwą opcję.</li>
            <li>Chcesz mieć jeden spójny wizualnie cennik dla punktu stacjonarnego, strony www i mediów społecznościowych.</li>
          </ul>
        </SectionInfo>

        <Gap variant="line" />

        <ProjectsOverview title="Przykładowe realizacje projektów graficznych" category="grafika" subtitle="Portfolio" />

        <Gap variant="line" />

        <TestimonialsCarousel />

        <Gap variant="line" />

        <SectionPrices
          title="Projekt cennika - przykładowe zakresy"
          subtitle="Dobieramy format i poziom szczegółowości do Twojej indywidualnej oferty"
          plans={[
            {
              name: 'Cennik podstawowy',
              price: 'wycena indywidualna',
              description: 'Dla mniejszych ofert, gdy chcesz pokazać ceny w czytelnej, estetycznej formie.',
              features: [
                'Układ jednej strony cennika (np. A4) z logicznym podziałem na sekcje',
                'Dopasowanie kolorów i typografii do Twojej identyfikacji wizualnej',
                'Wersja PDF do druku i wysyłki mailowej',
                'Ustalenie kierunku i jedna runda korekt po pierwszej prezentacji',
              ],
              btnOne: 'Zamów cennik podstawowy',
              btnOneLink: '#kontakt',
            },
            {
              name: 'Cennik z pakietami',
              price: 'wycena indywidualna',
              description: 'Dla firm, które chcą sprzedawać pakiety (np. Standard / Premium / VIP) i potrzebują wizualnej argumentacji dla wyższych opcji.',
              features: [
                'Projekt cennika z pakietami i wyróżnioną ofertą rekomendowaną',
                'Czytelne opisy zakresu oraz dopłat i dodatków',
                'Wersja do druku i wersja pod publikację online',
                'Ustalenie kierunku i dwie rundy korekt po pierwszej prezentacji',
              ],
              btnOne: 'Porozmawiajmy o cenniku z pakietami',
              btnOneLink: '#kontakt',
            },
            {
              name: 'Cennik rozbudowany / menu',
              price: 'wycena indywidualna',
              description: 'Dla restauracji, salonów fryzjerskich, gabinetów i firm z dużą liczbą pozycji - gdy cennik staje się jednocześnie menu lub katalogiem.',
              features: [
                'Projekt cennika wielosekcyjnego lub wielostronicowego',
                'Możliwość dodania zdjęć, ikon oraz wyróżników ofert',
                'Pliki gotowe do druku z wersja online do wykorzystania na stronie i w social mediach ',
                'Ustalenie kierunku i dwie rundy korekt po pierwszej prezentacji',
              ],
              btnOne: 'Zamów projekt rozbudowanego cennika',
              btnOneLink: '#kontakt',
            },
          ]}
          legalNote="Ostateczna wycena zależy m.in. od liczby pozycji w cenniku, liczby wersji (druk / online / różne lokalizacje), języków oraz tego, czy cennik ma być połączony z innymi materiałami (np. menu, katalogiem, identyfikacją wizualną). Po krótkim briefie przygotujemy konkretną propozycję zakresu i harmonogram prac."
        />

        <Gap variant="line" />

        <FeesSteps />

        <Gap variant="line" />

        <WorkSteps variant="design" />

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
              answer: 'Tak - możemy zaprojektować katalog cenowy, menu lub broszurę z cennikiem w formie wielostronicowej.',
            },
          ]}
        />

        <Gap variant="line" />

        <ContactForm
          title="Zamów projekt cennika"
          description="Opisz, czym się zajmujesz, jak wygląda dziś Twoja oferta i w jaki sposób pokazujesz ceny. Na tej podstawie przygotujemy propozycję układu, termin oraz wycenę."
          defaultSubject="Projekt cennika"
        />

        <Gap variant="line" />

        <SectionSteps
          title="Z czym warto połączyć projekt cennika?"
          subtitle="Zobacz też"
          description="Najlepszy efekt daje cennik, który jest częścią spójnego zestawu materiałów sprzedażowych i wizerunkowych - od logo, przez katalog, po identyfikację wizualną i stronę internetową. Z nami możesz zaplanować cały zestaw materiałów graficznych w jednym miejscu, tak aby każdy element opowiadał tę samą historię i pracował na Twój wynik."
          items={[
            {
              icon: <RiTableLine className="h-8 w-8" />,
              title: 'Projekt menu restauracji',
              description: (
                <div className="flex h-full flex-col">
                  <p className="mb-3 text-sm">
                    Jeśli prowadzisz restaurację, kawiarnię lub lokal gastronomiczny, możemy od razu zaprojektować menu, które będzie spójne z cennikiem i wystrojem miejsca.
                  </p>
                  <div className="mt-auto">
                    <Button arrow link="/uslugi/projekty-graficzne/projekt-menu-restauracji">
                      Zobacz projekt menu
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiFileTextLine className="h-8 w-8" />,
              title: 'Katalog lub broszura z ofertą',
              description: (
                <div className="flex h-full flex-col">
                  <p className="mb-3 text-sm">Dla bardziej rozbudowanych usług warto połączyć cennik z katalogiem, w którym pokazujemy szczegóły pakietów, zdjęcia i case studies.</p>
                  <div className="mt-auto">
                    <Button arrow link="/uslugi/projekty-graficzne/projekt-katalogu">
                      Zobacz projekt katalogu
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiPencilRuler2Line className="h-8 w-8" />,
              title: 'Identyfikacja wizualna i wizytówki',
              description: (
                <div className="flex h-full flex-col">
                  <p className="mb-3 text-sm">
                    Cennik najlepiej działa, gdy jest spójny z logo, wizytówkami i resztą materiałów. Możemy zacząć od identyfikacji lub dopasować cennik do systemu, który już masz.
                  </p>
                  <div className="mt-auto">
                    <Button arrow link="/uslugi/projekty-graficzne/projekt-identyfikacji-wizualnej">
                      Zobacz identyfikację wizualną
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
          grid="three"
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
        backgroundImage="/assets/projects/cennik-mockup.webp"
        overlay="black"
      />

      <ServiceSchema />
    </>
  );
}
