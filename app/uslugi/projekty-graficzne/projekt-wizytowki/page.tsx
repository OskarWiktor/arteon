import WorkSteps from '@/components/sections/steps/WorkSteps';
import HeroBanner from '@/components/sections/HeroBanner';
import BenefitBelt from '@/components/sections/BenefitBelt';
import CTABanner from '@/components/sections/CTABanner';
import Gap from '@/components/ui/Gap';
import FeesSteps from '@/components/sections/steps/FeesSteps';
import ServicesSteps from '@/components/sections/steps/ServicesSteps';
import { RiPencilRuler2Line, RiBrushLine, RiBarChart2Fill, RiLightbulbFlashLine, RiFileTextLine, RiIdCardLine } from 'react-icons/ri';
import ContactForm from '@/components/sections/ContactForm';
import Wrapper from '@/components/ui/Wrapper';
import ProjectsOverview from '@/components/sections/projects/ProjectsOverview';
import Breadcrumbs from '@/components/sections/BreadCrumbs';
import FaqPanels from '@/components/ui/FaqPanels';
import FeatureGrid from '@/components/sections/FeatureGrid';
import SectionInfo from '@/components/ui/sections/SectionInfo';
import SectionPrices from '@/components/ui/sections/SectionPrices';
import SectionSteps from '@/components/ui/sections/SectionSteps';
import Button from '@/components/ui/Button';
import { IoColorPalette } from 'react-icons/io5';
import Script from 'next/script';
import { buildServiceSchema } from '@/lib/serviceSchema';
import TestimonialsCarousel from '@/components/sections/TestimonialsCarousel';

export const metadata = {
  title: 'Projekt wizytówki | Arteon',
  description: 'Projekt wizytówki firmowej, która wyjaśnia ofertę w kilka sekund i buduje zaufanie od pierwszego spojrzenia. Pliki źródłowe i gotowe do druku.',
  alternates: {
    canonical: 'https://www.arteonagency.pl/uslugi/projekty-graficzne/projekt-wizytowki',
  },
  openGraph: {
    title: 'Projekt wizytówki | Arteon',
    description: 'Profesjonalny projekt wizytówki: czytelność, elegancja i pliki gotowe do druku.',
    url: 'https://www.arteonagency.pl/uslugi/projekty-graficzne/projekt-wizytowki',
    type: 'website',
  },
} as const;

const BASE = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.arteonagency.pl';

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

export default function OfferDesignWizytowkaPage() {
  return (
    <>
      <HeroBanner
        title="Projekt wizytówki"
        description={<>Zadbaj o pierwsze wrażenie, które buduje zaufanie. Projektujemy wizytówki dopasowane do Twojej marki - czytelne, eleganckie i gotowe do druku oraz użycia online.</>}
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
            <strong>Profesjonalnie zaprojektowana wizytówka wyjaśnia, czym się zajmujesz w kilka sekund.</strong> Schludny układ, czytelne dane i spójny styl ułatwiają zapamiętanie firmy oraz szybki
            powrót do kontaktu po spotkaniu. Wizytówka staje się fizycznym śladem rozmowy, który może zamienić się w telefon lub wiadomość po kilku dniach czy tygodniach.
          </p>

          <br />

          <p>
            <strong>Estetyka materiałów realnie wpływa na ocenę wiarygodności marki.</strong> Jakość oprawy wizualnej - także na małym formacie wizytówki - podnosi zaufanie do firmy i ułatwia decyzję
            o współpracy
            <a href="https://credibility.stanford.edu/guidelines/index.html" target="_blank" rel="noopener noreferrer" className="inline-link ml-1">
              (źródło)
            </a>
            .
          </p>

          <br />

          <p>
            <strong>Dobra wizytówka robi trzy rzeczy naraz:</strong>
          </p>
          <ul className="ml-5 list-disc">
            <li>Ułatwia zapamiętanie Twojej marki i osoby,</li>
            <li>Przyspiesza przejście od rozmowy do kontaktu,</li>
            <li>Podnosi zaufanie i buduje wrażenie profesjonalizmu.</li>
          </ul>
        </SectionInfo>

        <Gap variant="line" />

        <FeatureGrid
          title="Co dokładnie dostajesz w ramach projektu wizytówki?"
          subtitle="Nasz standard pracy"
          items={[
            {
              title: 'Czytelny układ i prestiżowy wygląd',
              description: <>Projektujemy wizytówki, które w kilka sekund wyjaśniają, czym się zajmujesz - bez upychania zbyt dużej ilości treści na małej powierzchni.</>,
              icon: <RiIdCardLine className="h-6 w-6 text-slate-500" />,
            },
            {
              title: 'Pliki gotowe do druku i online',
              description: <>Otrzymujesz pliki przygotowane pod drukarnię oraz wersje cyfrowe do wysyłki mailowej lub użycia w prezentacjach.</>,
              icon: <RiFileTextLine className="h-6 w-6 text-slate-500" />,
            },
            {
              title: 'Spójność z identyfikacją marki',
              description: <>Dopasowujemy kolory, typografię i styl do Twojej identyfikacji wizualnej, tak aby każdy materiał mówił jednym językiem.</>,
              icon: <IoColorPalette className="h-6 w-6 text-slate-500" />,
            },
            {
              title: 'Szybka realizacja i poprawki w cenie',
              description: <>Przygotowujemy projekt w krótkim terminie i dopracowujemy szczegóły wspólnie aż do pełnej akceptacji.</>,
              icon: <RiPencilRuler2Line className="h-6 w-6 text-slate-500" />,
            },
          ]}
        />

        <Gap variant="line" />

        <SectionInfo title="Dla kogo projekt wizytówki ma największy sens?" subtitle="Dla kogo">
          <ul className="ml-5 list-disc space-y-2">
            <li>
              <strong>Dla specjalistów usługowych</strong> - prawników, terapeutów, doradców, trenerów - którzy często spotykają się z klientami i chcą zostawić po sobie konkretny, elegancki ślad.
            </li>
            <li>
              <strong>Dla właścicieli firm lokalnych</strong> - salonów, gabinetów, restauracji, serwisów - gdzie wizytówka jest często pierwszym materialnym kontaktem z marką.
            </li>
            <li>
              <strong>Dla osób budujących markę osobistą,</strong> które występują na wydarzeniach, konferencjach i szkoleniach, a po prezentacji rozdają swoje dane kontaktowe.
            </li>
            <li>
              <strong>Dla firm z zespołem sprzedaży,</strong> które chcą zadbać o spójne wizytówki dla kilku lub kilkunastu osób w organizacji.
            </li>
          </ul>
        </SectionInfo>

        <Gap variant="line" />

        <SectionInfo title="Jakie efekty zobaczysz po wdrożeniu nowych wizytówek?" subtitle="Efekty po wdrożeniu">
          <ul className="ml-5 list-disc space-y-2">
            <li>
              <strong>Spójne pierwsze wrażenie marki</strong> - niezależnie od tego, czy klient zobaczy najpierw stronę, social media czy wizytówkę, doświadcza tej samej jakości.
            </li>
            <li>
              <strong>Więcej powrotów do kontaktu</strong> - rozmówca nie musi szukać numeru w notatkach, bo dane ma pod ręką, na dobrze zaprojektowanej karcie.
            </li>
            <li>
              <strong>Mniej chaosu w materiałach drukowanych,</strong> bo wizytówka nie jest „osobnym światem”, tylko elementem całego systemu identyfikacji wizualnej.
            </li>
            <li>
              <strong>Większy komfort podczas przedstawiania się,</strong> bo przekazujesz kartę, która od razu wspiera wizerunek - zamiast próbować „tłumaczyć” za niedopracowany projekt.
            </li>
          </ul>
        </SectionInfo>

        <Gap variant="line" />

        <ProjectsOverview title="Wyróżnione realizacje projektów graficznych" category="grafika" subtitle="Portfolio" />

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

        <FeesSteps />

        <Gap variant="line" />

        <WorkSteps variant="design" />

        <Gap variant="line" />

        <FaqPanels
          openByDefault={1}
          pageUrl="https://www.arteonagency.pl/uslugi/projekty-graficzne/projekt-wizytowki"
          title="Najczęstsze pytania o projekt wizytówki"
          items={[
            {
              question: 'Ile kosztuje projekt wizytówki?',
              answer:
                'Cena zależy od liczby wariantów (np. różne stanowiska, języki), zakresu prac i tego, czy projekt opieramy na istniejącej identyfikacji, czy tworzymy kierunek od zera. Po krótkim briefie otrzymasz dopasowaną wycenę.',
            },
            {
              question: 'Jak długo trwa projekt wizytówki?',
              answer:
                'Standardowo projekt przygotowujemy w około 2-5 dni roboczych od momentu zebrania materiałów. W przypadku większej liczby wariantów lub dodatkowych korekt termin ustalamy indywidualnie.',
            },
            {
              question: 'W jakich formatach dostanę wizytówkę?',
              answer: 'Otrzymasz plik PDF do druku ze spadami, wersje PNG/JPG do wykorzystania w sieci oraz - w zależności od ustaleń - pliki źródłowe (np. Figma, AI).',
            },
            {
              question: 'Czy mogę zgłosić poprawki do projektu wizytówki?',
              answer: 'Tak. W cenie przewidujemy rundy poprawek - dopracowujemy układ, kolory i teksty tak długo, aż projekt będzie spójny z Twoją marką i wygodny w użyciu.',
            },
            {
              question: 'Czy wizytówka będzie czytelna przy małym rozmiarze?',
              answer: 'Dbamy o odpowiedni kontrast, wielkość czcionek i hierarchię informacji. Nawet przy standardowym formacie wizytówki kluczowe dane pozostają czytelne.',
            },
            {
              question: 'Czy mogę zamówić ekspresowy projekt wizytówki?',
              answer: 'Tak, w uzasadnionych sytuacjach realizujemy projekty w trybie przyspieszonym. Termin i koszt trybu ekspresowego ustalamy przed rozpoczęciem prac.',
            },
          ]}
        />

        <Gap variant="line" />

        <ContactForm
          title="Zamów projekt wizytówki"
          description="Napisz, czym się zajmujesz, jakie dane mają znaleźć się na wizytówce (imię, funkcja, numer, adres strony) oraz czy potrzebujesz jednego czy kilku wariantów. Na tej podstawie przygotujemy wycenę i zaproponujemy termin realizacji."
          defaultSubject="Projekt wizytówki"
        />

        <Gap variant="line" />

        <SectionSteps
          title="Kolejne kroki po projekcie wizytówki"
          subtitle="Zobacz też"
          description="Wizytówka jest często pierwszym elementem większej układanki. Najlepsze efekty daje, gdy jest częścią spójnego systemu identyfikacji."
          items={[
            {
              icon: <IoColorPalette className="h-8 w-8" />,
              title: 'Projekt identyfikacji wizualnej',
              description: (
                <div className="flex h-full flex-col">
                  <p className="mb-3 text-sm">Logo, kolory, typografia i zasady stosowania. Dzięki temu wizytówka, strona internetowa i materiały social media tworzą jedną, spójną całość.</p>
                  <div className="mt-auto">
                    <Button arrow link="/uslugi/projekty-graficzne/projekt-identyfikacji-wizualnej">
                      Zobacz identyfikację wizualną
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiFileTextLine className="h-8 w-8" />,
              title: 'Szablony postów social media',
              description: (
                <div className="flex h-full flex-col">
                  <p className="mb-3 text-sm">Uporządkuj wygląd swoich profili tak, aby wizytówka, profil na Instagramie i strona mówiły jednym językiem i prowadziły do tego samego komunikatu.</p>
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
      </Wrapper>

      <CTABanner
        title="Zrób mocne pierwsze wrażenie"
        description="Stworzymy wizytówkę, która jasno komunikuje, czym się zajmujesz i buduje zaufanie od pierwszego spojrzenia."
        btnOne="Skontaktuj się"
        btnOneLink="#kontakt"
        btnTwo="Poznaj usługi graficzne"
        btnTwoLink="/uslugi/projekty-graficzne"
        backgroundImage="/assets/projects/luxnova/wizytowka-dla-kancelari-luxnova-mockup.webp"
        overlay="black"
      />

      <ServiceSchema />
    </>
  );
}
