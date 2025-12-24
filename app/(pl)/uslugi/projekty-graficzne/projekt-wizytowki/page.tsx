import WorkSteps from '@/components/sections/steps/WorkSteps';
import HeroBanner from '@/components/sections/HeroBanner';
import BenefitBelt from '@/components/sections/BenefitBelt';
import CTABanner from '@/components/sections/CTABanner';
import Gap from '@/components/ui/Gap';
import ServicesSteps from '@/components/sections/steps/ServicesSteps';
import { RiPencilRuler2Line, RiBrushLine, RiBarChart2Fill, RiLightbulbFlashLine, RiFileTextLine, RiIdCardLine, RiMoneyDollarCircleLine } from 'react-icons/ri';
import ContactForm from '@/components/sections/ContactForm';
import Wrapper from '@/components/ui/Wrapper';
import ProjectsCarousel from '@/components/sections/projects/ProjectsCarousel';
import Breadcrumbs from '@/components/sections/BreadCrumbs';
import FaqPanels from '@/components/ui/FaqPanels';
import FeatureGrid from '@/components/sections/FeatureGrid';
import SectionInfo from '@/components/ui/sections/SectionInfo';
import SectionPrices from '@/components/ui/sections/SectionPrices';
import SectionSteps from '@/components/ui/sections/SectionSteps';
import Button from '@/components/ui/buttons/Button';
import { IoColorPalette } from 'react-icons/io5';
import Script from 'next/script';
import { buildServiceSchema } from '@/lib/serviceSchema';
import TestimonialsCarousel from '@/components/sections/TestimonialsCarousel';
import { toAbsoluteUrl, siteUrl } from '@/lib/url';

export const metadata = {
  title: 'Projekt wizytówki - Arteon',
  description: 'Projekt wizytówki firmowej, która wyjaśnia ofertę w kilka sekund i buduje zaufanie od pierwszego spojrzenia. Pliki źródłowe i gotowe do druku.',
  alternates: {
    canonical: toAbsoluteUrl('/uslugi/projekty-graficzne/projekt-wizytowki'),
  },
  openGraph: {
    title: 'Projekt wizytówki - Arteon',
    description: 'Profesjonalny projekt wizytówki: czytelność, elegancja i pliki gotowe do druku.',
    url: toAbsoluteUrl('/uslugi/projekty-graficzne/projekt-wizytowki'),
    type: 'website',
    images: [{ url: toAbsoluteUrl('/assets/projects/luxnova/wizytowka-dla-kancelari-luxnova-mockup.webp') }],
  },
} as const;

function ServiceSchema() {
  const json = buildServiceSchema({
    baseUrl: siteUrl,
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
        description={<>Zadbaj o dobre pierwsze wrażenie. Projektujemy wizytówki dopasowane do Twojej marki - czytelne, eleganckie, gotowe do druku.</>}
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

        <SectionInfo title="Co zyskujesz zamawiając projekt wizytówki?">
          <p>
            <strong>Profesjonalnie zaprojektowana wizytówka </strong> to schludny układ, czytelne dane i spójny styl ułatwiają zapamiętanie firmy oraz szybki powrót do kontaktu po spotkaniu. Wizytówka
            staje się fizycznym śladem rozmowy, który może zamienić się w telefon lub wiadomość po kilku dniach czy tygodniach.
          </p>

          <br />

          <p>
            <strong>Estetyka materiałów realnie wpływa na ocenę wiarygodności marki.</strong> Jakość oprawy wizualnej - także na małym formacie - podnosi zaufanie do firmy i ułatwia decyzję o
            współpracy
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
              icon: <RiIdCardLine className="h-6 w-6 text-slate-700" />,
            },
            {
              title: 'Pliki gotowe do druku',
              description: <>Otrzymujesz pliki przygotowane do druku</>,
              icon: <RiFileTextLine className="h-6 w-6 text-slate-700" />,
            },
            {
              title: 'Spójność z identyfikacją marki',
              description: <>Dopasowujemy kolory, typografię i styl do Twojej marki aby zachować spójność wizerunku.</>,
              icon: <IoColorPalette className="h-6 w-6 text-slate-700" />,
            },
            {
              title: 'Faktura po realizacji',
              description: <>Płacisz dopiero po otrzymaniu gotowego projektu w finalnej formie.</>,
              icon: <RiMoneyDollarCircleLine className="h-6 w-6 text-slate-700" />,
            },
          ]}
        />

        <Gap variant="line" />

        <SectionInfo title="Dla kogo projekt wizytówki ma największy sens?" subtitle="Dla kogo">
          <ul className="ml-5 list-disc space-y-2">
            <li>
              <strong>Dla specjalistów,</strong> - prawników, terapeutów, doradców, trenerów - którzy często spotykają się z klientami i chcą ułatwić im ponowny kontakt.
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

        <ProjectsCarousel title="Wyróżnione realizacje projektów graficznych" category="grafika" subtitle="Portfolio" />

        <Gap variant="line" />

        <TestimonialsCarousel />

        <Gap variant="line" />

        <SectionPrices
          title="Projekt wizytówki - przykładowe pakiety"
          subtitle="Zakres dopasowany do Twojej marki"
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

        <ContactForm
          title="Zamów projekt wizytówki"
          description="Napisz, czym się zajmujesz, jakie dane mają znaleźć się na wizytówce (imię, funkcja, numer, adres strony) oraz czy potrzebujesz jednego czy kilku wariantów. Na tej podstawie przygotujemy wycenę i zaproponujemy termin realizacji."
          defaultSubject="Projekt wizytówki"
        />

        <Gap variant="line" />

        <FaqPanels
          openByDefault={1}
          pageUrl={toAbsoluteUrl('/uslugi/projekty-graficzne/projekt-wizytowki')}
          title="Najczęstsze pytania o projekt wizytówki"
          items={[
            {
              question: 'Ile trwa trwa realizacja projektu wizytówki?',
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

        <SectionSteps
          title="Z czym można połączyć projekt wizytówki?"
          subtitle="Zobacz też"
          description="Wizytówka jest często pierwszym elementem większej układanki. Najlepszy efekt daje, gdy jest częścią spójnego systemu identyfikacji i promocji Twojej firmy."
          items={[
            {
              icon: <IoColorPalette className="h-8 w-8" />,
              title: 'Projekt identyfikacji wizualnej',
              description: (
                <div className="flex h-full flex-col">
                  <p className="mb-3 text-sm">
                    Aby wszystko było spójne, możesz rozważyć stworzenie pełnej identyfikacji wizualnej: logo, ulotki, papier firmowy - wszystko zrealizujesz w jednym miejscu.
                  </p>
                  <div className="mt-auto">
                    <Button arrow link="/uslugi/projekty-graficzne/projekt-identyfikacji-wizualnej">
                      Zobacz projekt identyfikacji wizualnej
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiFileTextLine className="h-8 w-8" />,
              title: 'Szablony postów do mediów społecznościowych',
              description: (
                <div className="flex h-full flex-col">
                  <p className="mb-3 text-sm">
                    Tworzenie treści do mediów społecznościowych bywa męczące lecz jest to jeden z najlepszych sposobów na budowanie profesjonalnego wizerunku firmy. Z nami możesz skrócić czas
                    tworzenia kolejnych treści - tworząc pakiet szablonów dla dedykowanych platform społecznościowych
                  </p>
                  <div className="mt-auto">
                    <Button arrow link="/uslugi/projekty-graficzne/szablony-postow-social-media">
                      Zobacz szablony social media
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
          grid="two"
        />

        <Gap variant="line" />

        <ServicesSteps />

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
