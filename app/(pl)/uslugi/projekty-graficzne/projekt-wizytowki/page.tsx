import WorkSteps from '@/components/sections/steps/WorkSteps';
import HeroBanner from '@/components/sections/HeroBanner';
import BenefitBelt from '@/components/sections/BenefitBelt';
import CTABanner from '@/components/sections/CTABanner';
import Gap from '@/components/ui/Gap';
import SectionBento from '@/components/ui/sections/SectionBento';
import { RiPencilRuler2Line, RiBrushLine, RiBarChart2Fill, RiLightbulbFlashLine, RiFileTextLine, RiIdCardLine, RiMoneyDollarCircleLine } from 'react-icons/ri';
import SectionContactForm from '@/components/sections/SectionContactForm';
import Wrapper from '@/components/ui/Wrapper';
import ProjectsCarousel from '@/components/sections/projects/ProjectsCarousel';
import Breadcrumbs from '@/components/sections/BreadCrumbs';
import FaqPanels from '@/components/ui/FaqPanels';
import FeatureGrid from '@/components/sections/FeatureGrid';
import SectionInfo from '@/components/ui/sections/SectionInfo';
import SectionPrices from '@/components/ui/sections/SectionPrices';
import { IoColorPalette } from 'react-icons/io5';
import Script from 'next/script';
import { buildServiceSchema } from '@/lib/serviceSchema';
import TestimonialsCarousel from '@/components/sections/TestimonialsCarousel';
import ArticlesCarousel from '@/components/sections/blog/ArticlesCarousel';
import { getAllArticlePreviews } from '@/lib/blogDataService';

export const metadata = {
  title: 'Projekt wizytówki | Arteon',
  description: 'Projekt wizytówki firmowej z danymi kontaktowymi i ofertą. Pliki źródłowe (AI/PDF) oraz wersje gotowe do druku.',
  alternates: {
    canonical: 'https://www.arteonagency.pl/uslugi/projekty-graficzne/projekt-wizytowki',
  },
  openGraph: {
    title: 'Projekt wizytówki | Arteon',
    description: 'Profesjonalny projekt wizytówki: czytelność, elegancja i pliki gotowe do druku.',
    url: 'https://www.arteonagency.pl/uslugi/projekty-graficzne/projekt-wizytowki',
    type: 'website',
    images: [{ url: 'https://www.arteonagency.pl/assets/projects/luxnova/wizytowka-dla-kancelari-luxnova-mockup.webp', width: 1200, height: 630 }],
  },
} as const;

const BASE = 'https://www.arteonagency.pl';

function ServiceSchema() {
  const json = buildServiceSchema({
    baseUrl: BASE,
    path: '/uslugi/projekty-graficzne/projekt-wizytowki',
    serviceName: 'Projekt wizytówki',
    description: 'Czytelne, eleganckie wizytówki spójne z identyfikacją marki. Pliki do druku + wersje do użycia w sieci.',
    availableLanguages: ['pl'],
    includeServiceChannel: true,
  });

  return (
    <Script id="schema-service-projekt-wizytowki" type="application/ld+json">
      {JSON.stringify(json)}
    </Script>
  );
}

export default function OfferDesignBusinessCardPage() {
  return (
    <>
      <HeroBanner
        title="Projekt wizytówki"
        description={<>Projektujemy wizytówki dopasowane do Twojej marki - czytelne, eleganckie, gotowe do druku. Pliki źródłowe i wersje do druku.</>}
        buttonAccent="Bezpłatna wycena"
        buttonAccentLink="#kontakt"
        variant="left"
        backgroundImage="/assets/projects/luxnova/wizytowka-dla-kancelari-luxnova-mockup.webp"
        overlay="black"
      />

      <BenefitBelt
        items={[
          { icon: <RiPencilRuler2Line />, label: 'Spójność marki' },
          { icon: <RiBrushLine />, label: 'Perfekcja detalu' },
          { icon: <RiBarChart2Fill />, label: 'Transparentna współpraca' },
          { icon: <RiLightbulbFlashLine />, label: 'Psychologia w praktyce' },
        ]}
      />

      <Breadcrumbs
        second={{ href: '/uslugi', label: 'Usługi' }}
        third={{ href: `/uslugi/projekty-graficzne`, label: 'Projekty graficzne' }}
        fourth={{
          href: `/uslugi/projekty-graficzne/projekt-wizytowki`,
          label: 'Projekt wizytówki',
        }}
        includeJsonLd
      />

      <Wrapper>
        <Gap size="xs" />

        <ProjectsCarousel title="Wyróżnione realizacje projektów graficznych" category="grafika" />

        <Gap variant="line" />
        <SectionInfo title="Co zyskujesz zamawiając projekt wizytówki?">
          <p>
            <strong>Profesjonalnie zaprojektowana wizytówka</strong> łączy schludny układ, czytelne dane i spójny styl, co ułatwia zapamiętanie firmy oraz szybki powrót do kontaktu po spotkaniu. Wizytówka
            staje się fizycznym śladem rozmowy, który może zamienić się w telefon lub wiadomość po kilku dniach czy tygodniach.
          </p>

          <br />

          <p>
            <strong>Estetyka materiałów realnie wpływa na ocenę wiarygodności marki.</strong> Jakość oprawy wizualnej - także na małym formacie - podnosi zaufanie do firmy i ułatwia decyzję o
            współpracy.
          </p>

          <br />

          <p>
            <strong>Dobra wizytówka robi trzy rzeczy naraz:</strong>
          </p>
          <ul className="ml-5 list-disc">
            <li>Ułatwia zapamiętanie Twojej marki i osoby,</li>
            <li>Ułatwia późniejszy kontakt,</li>
            <li>Podnosi zaufanie i buduje profesjonalny wizerunek.</li>
          </ul>
        </SectionInfo>

        <Gap variant="line" />

        <FeatureGrid
          title="Co zyskujesz zamawiając wizytówkę?"
          subtitle="Nasz standard pracy"
          items={[
            {
              title: 'Czytelny układ i profesjonalny wygląd',
              description: <>Projektujemy wizytówki, które w kilka sekund wyjaśniają, czym się zajmujesz.</>,
              icon: <RiIdCardLine className="h-6 w-6 text-primary" />,
            },
            {
              title: 'Pliki gotowe do druku',
              description: <>Otrzymujesz pliki przygotowane do druku w standardzie CMYK ze spadami.</>,
              icon: <RiFileTextLine className="h-6 w-6 text-primary" />,
            },
            {
              title: 'Spójność z identyfikacją marki',
              description: <>Dopasowujemy kolory, typografię i styl do Twojej marki, aby zachować spójność wizerunku.</>,
              icon: <IoColorPalette className="h-6 w-6 text-primary" />,
            },
            {
              title: 'Faktura po realizacji',
              description: <>Płacisz dopiero po otrzymaniu gotowego projektu w finalnej formie.</>,
              icon: <RiMoneyDollarCircleLine className="h-6 w-6 text-primary" />,
            },
          ]}
        />

        <Gap variant="line" />

        <SectionInfo title="Dla kogo projekt wizytówki ma największy sens?" subtitle="Dla kogo">
          <ul className="ml-5 list-disc space-y-2">
            <li>
              <strong>Dla specjalistów</strong> - prawników, terapeutów, doradców, trenerów - którzy często spotykają się z klientami i chcą ułatwić im ponowny kontakt.
            </li>
            <li>
              <strong>Dla właścicieli firm lokalnych</strong> - salonów, gabinetów, restauracji, serwisów - gdzie wizytówka jest często pierwszym kontaktem z marką.
            </li>
            <li>
              <strong>Dla osób budujących markę osobistą,</strong> które występują na wydarzeniach, konferencjach i szkoleniach, a po prezentacji rozdają swoje dane kontaktowe.
            </li>
            <li>
              <strong>Dla firm z zespołem,</strong> które chcą zadbać o spójne wizytówki dla kilku lub kilkunastu osób w organizacji.
            </li>
          </ul>
        </SectionInfo>

        <Gap variant="line" />

        <TestimonialsCarousel />

        <Gap variant="line" />

        <SectionPrices
          title="Projekt wizytówki - przykładowe pakiety"
          plans={[
            {
              name: 'Pakiet Start - jedna wizytówka',
              price: 'wycena indywidualna',
              description: 'Dla jednoosobowych działalności i specjalistów, którzy potrzebują jednej, dopracowanej wizytówki w spójnym stylu.',
              features: [
                'Krótki brief o marce i ofercie',
                'Projekt wizytówki (przód + tył) w jednym wariancie',
                'Dopasowanie kolorów i typografii do istniejącej identyfikacji (lub prosty kierunek od zera)',
                'Pliki gotowe do druku (PDF ze spadami) + wersje PNG/JPG',
                'Jedna runda poprawek w cenie',
              ],
              btnOne: 'Zamów wycenę pakietu Start',
              btnOneLink: '#kontakt',
            },
            {
              name: 'Pakiet Standard - kilka wersji i stanowisk',
              price: 'wycena indywidualna',
              description: 'Dla firm, które potrzebują spójnych wizytówek dla kilku osób lub w dwóch wariantach (np. językowych lub funkcji).',
              features: [
                'Wszystko z pakietu Start, a dodatkowo:',
                'Warianty wizytówek dla kilku stanowisk lub języków',
                'Dopasowanie układu do różnych długości imion i funkcji',
                'Propozycja drobnych różnic (np. wyróżnienie osób kluczowych)',
                'Dwie rundy poprawek w cenie',
              ],
              btnOne: 'Zamów wycenę pakietu Standard',
              btnOneLink: '#kontakt',
            },
            {
              name: 'Pakiet Pro - zestaw dla zespołu i marki',
              price: 'wycena indywidualna',
              description: 'Dla firm, które chcą oprzeć wszystkie materiały drukowane na jednym, spójnym systemie i przygotować wizytówki dla większego zespołu.',
              features: [
                'Wszystko z pakietu Standard, a dodatkowo:',
                'Projekt siatki pod wizytówki dla większej liczby osób',
                'Rekomendacje papieru, uszlachetnień i technik druku',
                'Podstawowe wytyczne stosowania wizytówek w identyfikacji marki',
                'Wsparcie przy przygotowaniu plików zbiorczych dla drukarni',
              ],
              btnOne: 'Porozmawiajmy o pakiecie Pro',
              btnOneLink: '#kontakt',
            },
          ]}
          legalNote="Zakres i liczbę wariantów dopasowujemy indywidualnie - po briefie otrzymasz konkretną wycenę i harmonogram prac."
        />

        <Gap variant="line" />

        <WorkSteps variant="design" />

        <Gap variant="line" />

        <SectionContactForm
          title="Sprawdź koszt realizacji wizytówki"
          description="Napisz jakie dane mają znaleźć się na wizytówce, czy potrzebujesz jednego czy kilku wariantów oraz czy posiadasz logo - otrzymasz darmową wycenę realizacji."
          imageSrc="/assets/projects/luxnova/wizytowka-dla-kancelari-luxnova-mockup.webp"
          imageAlt="Realizacja projektu wizytówki - kancelaria Luxnova"
          defaultSubject="Projekt wizytówki"
        />

        <Gap variant="line" />

        <FaqPanels
          openByDefault={1}
          pageUrl="https://www.arteonagency.pl/uslugi/projekty-graficzne/projekt-wizytowki"
          title="Najczęstsze pytania dotyczące projektów wizytówek"
          items={[
            {
              question: 'Ile trwa realizacja projektu wizytówki?',
              answer:
                'Standardowo projekt przygotowujemy w około 2-4 dni roboczych od momentu zebrania materiałów. W przypadku większej liczby wariantów lub dodatkowych korekt termin ustalamy indywidualnie.',
            },
            {
              question: 'W jakich formatach dostanę wizytówkę?',
              answer: 'Otrzymasz plik PDF do druku ze spadami, wersje PNG/JPG do wykorzystania w sieci oraz pliki źródłowe.',
            },
            {
              question: 'Czy mogę zgłosić poprawki do projektu wizytówki?',
              answer: 'Tak, w cenie każdego projektu przewidujemy rundy poprawek - dopracowujemy układ, kolory i teksty tak długo, aż projekt będzie spójny z Twoją marką i wygodny w użyciu.',
            },
            {
              question: 'Czy mogę zamówić ekspresowy projekt wizytówki?',
              answer: 'Tak, realizujemy projekty w trybie przyspieszonym za dodatkową opłatą. Termin i koszt trybu ekspresowego ustalamy przed rozpoczęciem prac.',
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
              title: 'Projekt logo',
              description: 'Zbuduj rozpoznawalny znak firmowy',
              size: 'medium',
              backgroundImage: '/assets/blog/jak-identyfikacja-wizualna-zwieksza-zaufanie-klientow/rozne-wersje-logo-firmy.webp',
              btnLabel: 'Zobacz ofertę',
              btnLink: '/uslugi/projekty-graficzne/projekt-logo',
            },
            {
              title: 'Strony internetowe',
              description: 'Profesjonalna wizytówka w sieci',
              size: 'small',
              backgroundImage: '/assets/projects/arteon-baners-pilkanozna-pl.webp',
              btnLabel: 'Sprawdź ofertę',
              btnLink: '/uslugi/strony-internetowe',
            },
            {
              title: 'Sklepy internetowe',
              description: 'Sprzedawaj produkty online',
              size: 'small',
              backgroundImage: '/assets/projects/arteon-baners-msc.webp',
              btnLabel: 'Sprawdź ofertę',
              btnLink: '/uslugi/sklepy-internetowe',
            },
          ]}
        />

        <Gap variant="line" />

        <ArticlesCarousel title="Przydatne artykuły dotyczące projektów graficznych" categorySlug="grafika" articles={getAllArticlePreviews()} />
      
        <Gap size="sm" />
      </Wrapper>

      <CTABanner
        title="Zachęć klientów do ponownego kontaktu"
        description="Stworzymy wizytówkę, która wzmocni Twój wizerunek i ułatwi kontakt."
        btnOne="Skontaktuj się"
        btnOneLink="#kontakt"
        btnTwo="Poznaj inne usługi graficzne"
        btnTwoLink="/uslugi/projekty-graficzne"
        backgroundImage="/assets/projects/luxnova/wizytowka-dla-kancelari-luxnova-mockup.webp"
        overlay="black"
      />

      <ServiceSchema />
    </>
  );
}
