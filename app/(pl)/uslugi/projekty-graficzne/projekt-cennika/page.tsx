import WorkSteps from '@/components/sections/steps/WorkSteps';
import HeroBanner from '@/components/sections/HeroBanner';
import BenefitBelt from '@/components/sections/BenefitBelt';
import CTABanner from '@/components/sections/CTABanner';
import Gap from '@/components/ui/Gap';
import SectionBento from '@/components/ui/sections/SectionBento';
import { RiPencilRuler2Line, RiBarChart2Fill, RiFileTextLine, RiTableLine, RiMoneyDollarCircleLine } from 'react-icons/ri';
import SectionContactForm from '@/components/sections/SectionContactForm';
import Wrapper from '@/components/ui/Wrapper';
import ProjectsCarousel from '@/components/sections/projects/ProjectsCarousel';
import Breadcrumbs from '@/components/sections/BreadCrumbs';
import FaqPanels from '@/components/ui/FaqPanels';
import FeatureGrid from '@/components/sections/FeatureGrid';
import SectionInfo from '@/components/ui/sections/SectionInfo';
import { IoColorPalette } from 'react-icons/io5';
import Script from 'next/script';
import { buildServiceSchema } from '@/lib/serviceSchema';
import TestimonialsCarousel from '@/components/sections/TestimonialsCarousel';
import SectionPrices from '@/components/ui/sections/SectionPrices';
import ArticlesCarousel from '@/components/sections/blog/ArticlesCarousel';
import { getAllArticlePreviews } from '@/lib/blogDataService';

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
    images: [{ url: 'https://www.arteonagency.pl/assets/projects/cennik-mockup.webp', width: 1200, height: 630 }],
  },
} as const;

const BASE = 'https://www.arteonagency.pl';

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

export default function OfferDesignPriceListPage() {
  return (
    <>
      <HeroBanner
        title="Projekt cennika"
        description={
          <>
            Zaprojektujemy cennik, który porządkuje Twoją ofertę i prowadzi klienta do wyboru właściwej opcji. W kilka dni otrzymasz gotowy plik do druku oraz wersję cyfrową do wykorzystania na
            stronie i w mediach społecznościowych.
          </>
        }
        buttonAccent="Bezpłatna wycena"
        buttonAccentLink="#kontakt"
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

        <ProjectsCarousel title="Przykładowe realizacje projektów graficznych" category="grafika" />

        <Gap variant="line" />

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
          title="Co zyskujesz zamawiając cennik?"
          subtitle="Nasz standard pracy"
          items={[
            {
              title: 'Przejrzysty układ i hierarchia',
              description: <>Projektujemy logiczne sekcje, wyróżniamy kluczowe usługi i podkreślamy rekomendowane opcje, aby ułatwić wybór klientowi, ułatwiając przy tym rozmowę o cenach.</>,
              icon: <RiTableLine className="h-6 w-6 text-primary" />,
            },
            {
              title: 'Spójność z identyfikacją marki',
              description: <>Kolory, czcionki i ikony dopasowujemy do stylu Twojej marki oraz branży. Cennik staje się integralną częścią Twojej komunikacji.</>,
              icon: <IoColorPalette className="h-6 w-6 text-primary" />,
            },
            {
              title: 'Wersje do druku i online',
              description: <>Otrzymasz plik PDF gotowy do druku oraz wersję cyfrową do publikacji na stronie czy mediach społecznościowych. Dostajesz gotową paczkę plików.</>,
              icon: <RiFileTextLine className="h-6 w-6 text-primary" />,
            },
            {
              title: 'Faktura po realizacji',
              description: <>Płacisz dopiero po otrzymaniu gotowego projektu w finalnej formie.</>,
              icon: <RiMoneyDollarCircleLine className="h-6 w-6 text-primary" />,
            },
          ]}
        />

        <Gap variant="line" />

        <SectionInfo title="Dla kogo jest projekt cennika?" subtitle="Kiedy ma największy sens?">
          <ul className="ml-5 list-disc space-y-2">
            <li>Masz kilka lub kilkanaście usług / pakietów i klienci dopytują, czym dokładnie się różnią.</li>
            <li>Obecny cennik nie pasuje do reszty identyfikacji.</li>
            <li>Chcesz podnieść ceny, ale potrzebujesz lepszej argumentacji wizualnej i logicznej struktury oferty.</li>
            <li>Planujesz wprowadzić pakiety (Standard / Premium / VIP) i chcesz, aby klient naturalnie wybierał właściwą opcję.</li>
            <li>Chcesz mieć jeden spójny wizualnie cennik dla punktu stacjonarnego, strony www i mediów społecznościowych.</li>
          </ul>
        </SectionInfo>

        <Gap variant="line" />

        <TestimonialsCarousel />

        <Gap variant="line" />

        <SectionPrices
          title="Projekt cennika - przykładowe zakresy"
          plans={[
            {
              name: 'Cennik jednostronicowy',
              price: '200 zł',
              description: 'Dla firm z kilkunastoma usługami / produktami',
              features: [
                'Układ jednej strony cennika (np. A4) z logicznym podziałem na sekcje',
                'Pliki gotowe do druku i wersja cennika do wykorzystania na stronie i mediach społecznościowych',
                '2 kierunki wyglądu i jedna runda korekt po pierwszej prezentacji',
                'Realizacja w 2-3 dni',
              ],
              btnOne: 'Zamów cennik jednostronicowy',
              btnOneLink: '#kontakt',
            },
            {
              name: 'Cennik dwustronicowy',
              price: '300 zł',
              description: 'Dla firm, które mają bardziej rozbudowaną ofertę',
              features: [
                'Projekt cennika z sekcjami / kategoriami różnych usług i/lub pakietami',
                'Pliki gotowe do druku i wersja cennika do wykorzystania na stronie i mediach społecznościowych',
                '2 kierunki i dwie rundy korekt po pierwszej prezentacji',
                'Realizacja w 3-4 dni',
              ],
              btnOne: 'Zamów cennik dwustronicowy',
              btnOneLink: '#kontakt',
            },
            {
              name: 'Cennik rozbudowany',
              price: 'od 400 zł',
              description: 'Dla restauracji, gabinetów i firm z dużą liczbą pozycji, gdy cennik ma więcej niż 2 strony',
              features: [
                'Projekt cennika wielostronicowego z podziałem na kategorie usług / produktów',
                'Pliki gotowe do druku i wersja cennika do wykorzystania na stronie i mediach społecznościowych',
                '3 kierunki wyglądu i dwie rundy korekt po pierwszej prezentacji',
                'Realizacja w 5-7 dni',
              ],
              btnOne: 'Zamów projekt rozbudowanego cennika',
              btnOneLink: '#kontakt',
            },
          ]}
          legalNote="Podane kwoty są kwotami końcowymi, podanymi na fakturze. Ostateczna wycena zależy od liczby pozycji w cenniku, liczby wersji, języków oraz indywidualnych potrzeb."
        />

        <Gap variant="line" />

        <WorkSteps variant="design" />

        <Gap variant="line" />

        <SectionContactForm
          title="Sprawdź koszt realizacji cennika"
          description="Napisz jak wygląda oferta, ile pozycji ma zawierać cennik oraz czy posiadasz logo i zdjęcia — otrzymasz darmową wycenę realizacji."
          imageSrc="/assets/projects/cennik-mockup.webp"
          imageAlt="Realizacja projektu cennika firmowego"
          defaultSubject="Projekt cennika"
        />

        <Gap variant="line" />

        <FaqPanels
          openByDefault={1}
          pageUrl="https://www.arteonagency.pl/uslugi/projekty-graficzne/projekt-cennika"
          title="Najczęstsze pytania o projekt cennika"
          items={[
            {
              question: 'W jakim formacie przygotujecie cennik?',
              answer: 'Najczęściej tworzymy cenniki w formacie A4 oraz A5. Na życzenie możemy przygotować cennik w innym formacie.',
            },
            {
              question: 'Czy mogę dodać zdjęcia lub ikony do cennika?',
              answer: 'Tak, możemy wzbogacić projekt o grafiki, zdjęcia produktów lub ikony ilustrujące usługi.',
            },
            {
              question: 'Czy mogę później edytować cennik?',
              answer: 'Tak, na życzenie możemy dostarczyć pliki źródłowe oraz prostą instrukcję edycji, dzięki której będziesz w stanie samodzielnie zaktualizować ceny.',
            },
            {
              question: 'Jak długo trwa realizacja?',
              answer: 'Zazwyczaj od 3 do 5 dni roboczych. Dla cenników z dużą liczbą pozycji ( wieloma stronami ) termin ustalamy indywidualnie.',
            },
            {
              question: 'Czy możliwe jest zrealizowanie cennika, który ma wiele stron?',
              answer: 'Tak, możemy zaprojektować katalog cenowy, menu lub broszurę z cennikiem w formie wielostronicowej.',
            },
          ]}
        />

        <Gap variant="line" />

        <SectionBento
          title="Poznaj inne usługi"
          items={[
            {
              title: 'Identyfikacja wizualna',
              description: 'Spójna tożsamość marki od A do Z',
              size: 'large',
              backgroundImage: '/assets/projects/luxnova/teczka-ofertowa-dla-kancelarii-luxnova-mockup.webp',
              btnLabel: 'Zobacz ofertę',
              btnLink: '/uslugi/projekty-graficzne/projekt-identyfikacji-wizualnej',
            },
            {
              title: 'Strony internetowe',
              description: 'Profesjonalna wizytówka Twojej firmy w sieci',
              size: 'medium',
              backgroundImage: '/assets/projects/arteon-baners-pilkanozna-pl.webp',
              btnLabel: 'Zobacz ofertę',
              btnLink: '/uslugi/strony-internetowe',
            },
            {
              title: 'Projekt wizytówki',
              description: 'Elegancka wizytówka dla Twojej firmy',
              size: 'small',
              backgroundImage: '/assets/projects/luxnova/wizytowka-dla-kancelari-luxnova-mockup.webp',
              btnLabel: 'Sprawdź ofertę',
              btnLink: '/uslugi/projekty-graficzne/projekt-wizytowki',
            },
            {
              title: 'Projekt katalogu',
              description: 'Rozbudowana prezentacja oferty',
              size: 'small',
              backgroundImage: '/assets/projects/gazetka-mockup.webp',
              btnLabel: 'Sprawdź ofertę',
              btnLink: '/uslugi/projekty-graficzne/projekt-katalogu',
            },
          ]}
        />

        <Gap variant="line" />

        <ArticlesCarousel title="Przydatne artykuły dotyczące projektów graficznych" categorySlug="grafika" articles={getAllArticlePreviews()} />

        <Gap size="sm" />
      </Wrapper>

      <CTABanner
        title="Wzmocnij swój wizerunek"
        description="Zaprojektujemy przejrzysty cennik, który wzmocni wizerunek Twojej firmy."
        btnOne="Skontaktuj się"
        btnOneLink="#kontakt"
        btnTwo="Poznaj inne usługi graficzne"
        btnTwoLink="/uslugi/projekty-graficzne"
        backgroundImage="/assets/projects/cennik-mockup.webp"
        overlay="black"
      />

      <ServiceSchema />
    </>
  );
}
