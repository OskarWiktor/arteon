import WorkSteps from '@/components/sections/steps/WorkSteps';
import HeroBanner from '@/components/sections/HeroBanner';
import BenefitBelt from '@/components/sections/BenefitBelt';
import CTABanner from '@/components/sections/CTABanner';
import Gap from '@/components/ui/Gap';
import ServicesSteps from '@/components/sections/steps/ServicesSteps';
import { RiPencilRuler2Line, RiBrushLine, RiBarChart2Fill, RiLightbulbFlashLine, RiBookOpenLine, RiFileTextLine, RiMessage2Line, RiMoneyDollarCircleLine } from 'react-icons/ri';
import ContactForm from '@/components/sections/ContactForm';
import Wrapper from '@/components/ui/Wrapper';
import ProjectsCarousel from '@/components/sections/projects/ProjectsCarousel';
import Breadcrumbs from '@/components/sections/BreadCrumbs';
import FaqPanels from '@/components/ui/FaqPanels';
import FeatureGrid from '@/components/sections/FeatureGrid';
import SectionInfo from '@/components/ui/sections/SectionInfo';
import Script from 'next/script';
import { buildServiceSchema } from '@/lib/serviceSchema';
import TestimonialsCarousel from '@/components/sections/TestimonialsCarousel';
import SectionPrices from '@/components/ui/sections/SectionPrices';
import SectionSteps from '@/components/ui/sections/SectionSteps';
import Button from '@/components/ui/buttons/Button';

export const metadata = {
  title: 'Projekt papieru firmowego | Arteon',
  description: 'Papier firmowy, który wzmacnia wizerunek w korespondencji. Szablony Word/PDF oraz wersje gotowe do druku.',
  alternates: {
    canonical: 'https://www.arteonagency.pl/uslugi/projekty-graficzne/projekt-papieru-firmowego',
  },
  openGraph: {
    title: 'Projekt papieru firmowego | Arteon',
    description: 'Profesjonalny papier firmowy: szablony i pliki drukarskie zgodne z identyfikacją.',
    url: 'https://www.arteonagency.pl/uslugi/projekty-graficzne/projekt-papieru-firmowego',
    type: 'website',
    images: [{ url: 'https://www.arteonagency.pl/assets/projects/luxnova/papier-firmowy-dla-kancelarii-luxnova.webp' }],
  },
} as const;

const BASE = 'https://www.arteonagency.pl';

function ServiceSchema() {
  const json = buildServiceSchema({
    baseUrl: BASE,
    path: '/uslugi/projekty-graficzne/projekt-papieru-firmowego',
    serviceName: 'Projekt papieru firmowego',
    description: 'Papier firmowy i szablony korespondencji: układ zgodny z identyfikacją, wersje do druku i PDF/DOC.',
    availableLanguages: ['pl'],
    includeServiceChannel: true,
  });

  return (
    <Script id="schema-service-projekt-papieru-firmowego" type="application/ld+json">
      {JSON.stringify(json)}
    </Script>
  );
}

export default function OfferDesignLetterheadPage() {
  return (
    <>
      <HeroBanner
        title="Projekt papieru firmowego"
        description={
          <>Każda korespondencja może wzmacniać markę. Projektujemy papier firmowy z prawidłowymi szablonami Word/PDF i plikami do druku - czytelny, spójny i profesjonalny w codziennej pracy.</>
        }
        buttonAccent="Bezpłatna wycena"
        buttonAccentLink="#kontakt"
        variant="left"
        backgroundImage="/assets/projects/luxnova/papier-firmowy-dla-kancelarii-luxnova.webp"
        overlay="black"
      />

      <BenefitBelt
        items={[
          { icon: <RiPencilRuler2Line />, label: 'Spójny system dokumentów' },
          { icon: <RiBrushLine />, label: 'Profesjonalna oprawa wizualna' },
          { icon: <RiBarChart2Fill />, label: 'Lepsza percepcja marki' },
          { icon: <RiLightbulbFlashLine />, label: 'Praktyczne szablony na co dzień' },
        ]}
      />

      <Breadcrumbs
        second={{ href: '/uslugi', label: 'Usługi' }}
        third={{ href: `/uslugi/projekty-graficzne`, label: 'Projekty graficzne' }}
        fourth={{
          href: `/uslugi/projekty-graficzne/projekt-papieru-firmowego`,
          label: 'Projekt papieru firmowego',
        }}
        includeJsonLd
      />

      <Wrapper>
        <Gap size="xs" />

        <SectionInfo title="Co zyskujesz zamawiając projekt papieru firmowego?">
          <p>
            <strong>Własny projekt papieru firmowego sprawia, że dokumenty wyglądają profesjonalnie od pierwszej sekundy.</strong> Oferty, umowy i pisma mają jeden, spójny wzór - logo, układ, dane
            kontaktowe - dzięki czemu autorytet Twojej marki wzrasta. Estetyczna oprawa zwiększa postrzeganą wiarygodność marki już w pierwszych sekundach
            <a href="https://credibility.stanford.edu/guidelines/index.html" target="_blank" rel="noopener noreferrer" className="inline-link ml-1">
              (Stanford - web credibility)
            </a>
            .
          </p>

          <br />

          <p>
            <strong>Dobry papier firmowy robi trzy rzeczy naraz:</strong>
          </p>
          <ul className="ml-5 list-disc">
            <li>Ujednolica korespondencję i porządkuje dane,</li>
            <li>Uspójnia wygląd ofert i umów w całej firmie,</li>
            <li>Podnosi zaufanie i ułatwia kontakt z Twoją marką.</li>
          </ul>
        </SectionInfo>

        <Gap variant="line" />

        <FeatureGrid
          title="Co dokładnie dostajesz w ramach projektu papieru firmowego?"
          subtitle="Nasz standard pracy"
          items={[
            {
              title: 'Spójny wygląd korespondencji',
              description: <>Projekt wzmacnia profesjonalny obraz firmy w każdym piśmie i wiadomości.</>,
              icon: <RiFileTextLine className="h-6 w-6 text-slate-700" />,
            },
            {
              title: 'Szablony do codziennej pracy',
              description: <>Otrzymujesz gotowe do użycia pliki w wersji do druku oraz praktyczne szablony elektroniczne.</>,
              icon: <RiBookOpenLine className="h-6 w-6 text-slate-700" />,
            },
            {
              title: 'Dopasowanie danych i układu',
              description: <>Dbamy o czytelność, hierarchię informacji i zgodność z pozostałymi materiałami marki.</>,
              icon: <RiPencilRuler2Line className="h-6 w-6 text-slate-700" />,
            },
            {
              title: 'Szybka realizacja i poprawki',
              description: <>Ustalamy termin, dostarczamy projekt i wspólnie dopracowujemy szczegóły.</>,
              icon: <RiMessage2Line className="h-6 w-6 text-slate-700" />,
            },
            {
              title: 'Faktura po realizacji',
              description: <>Płacisz dopiero po otrzymaniu gotowego projektu w finalnej formie.</>,
              icon: <RiMoneyDollarCircleLine className="h-6 w-6 text-slate-700" />,
            },
          ]}
        />

        <Gap variant="line" />

        <SectionInfo title="Dla kogo projekt papieru firmowego ma największy sens?" subtitle="Dla kogo">
          <ul className="ml-5 list-disc space-y-2">
            <li>
              <strong>Dla kancelarii, biur rachunkowych i doradców,</strong> którzy wysyłają umowy, pisma i opinie w formie drukowanej lub PDF.
            </li>
            <li>
              <strong>Dla firm B2B,</strong> które regularnie przygotowują oferty, specyfikacje, protokoły i chcą, aby każdy dokument wyglądał spójnie.
            </li>
            <li>
              <strong>Dla organizacji, instytucji i NGO,</strong> które komunikują się oficjalnie z partnerami, urzędami i beneficjentami.
            </li>
            <li>
              <strong>Dla marek budujących prestiż również w dokumentach,</strong> a nie tylko na stronie www czy w social mediach.
            </li>
          </ul>
        </SectionInfo>

        <Gap variant="line" />

        <SectionInfo title="Jakie efekty możesz zobaczyć po wdrożeniu papieru firmowego?" subtitle="Efekty po wdrożeniu">
          <ul className="ml-5 list-disc space-y-2">
            <li>
              <strong>Spójniejsze doświadczenie marki,</strong> bo każdy dokument - od krótkiego pisma po wielostronicową ofertę - wygląda tak, jak reszta komunikacji.
            </li>
            <li>
              <strong>Mniej chaosu wśród pracowników,</strong> dzięki gotowym szablonom Word/PDF, z których korzysta cały zespół.
            </li>
            <li>
              <strong>Wyższy poziom zaufania u klientów i partnerów,</strong> gdy dokumenty od początku wyglądają jasno, profesjonalnie i są dobrze podpisane.
            </li>
            <li>
              <strong>Łatwiejsza praca z drukarnią,</strong> bo pliki są już przygotowane zgodnie ze standardami druku i nie wymagają dodatkowego składu.
            </li>
          </ul>
        </SectionInfo>

        <Gap variant="line" />

        <ProjectsCarousel title="Wyróżnione realizacje projektów graficznych" category="grafika" subtitle="Portfolio" />

        <Gap variant="line" />

        <TestimonialsCarousel />

        <Gap variant="line" />

        <SectionPrices
          title="Projekt papieru firmowego - przykładowe pakiety"
          subtitle="Zakres dopasowany do skali Twojej korespondencji"
          plans={[
            {
              name: 'Pakiet Start - papier firmowy do druku',
              price: 'wycena indywidualna',
              description: 'Dla firm, które potrzebują jednego, czytelnego wzoru papieru firmowego w wersji drukowanej i PDF.',
              features: [
                'Krótki brief o marce i typach dokumentów (oferty, pisma, umowy)',
                'Projekt papieru firmowego w formacie A4 dopasowany do identyfikacji wizualnej',
                'Układ logo, danych kontaktowych i miejsca na treść zgodny z dobrymi praktykami',
                'Pliki gotowe do druku (PDF ze spadami) oraz wersja PDF do wysyłki mailowej',
                'Jedna runda poprawek w cenie',
              ],
              btnOne: 'Zamów wycenę pakietu Start',
              btnOneLink: '#kontakt',
            },
            {
              name: 'Pakiet Standard - papier + szablony elektroniczne',
              price: 'wycena indywidualna',
              description: 'Dla firm, które chcą ujednolicić korespondencję drukowaną i elektroniczną dla całego zespołu.',
              features: [
                'Wszystko z pakietu Start, a dodatkowo:',
                'Szablon dokumentu w programie Word lub Google Docs',
                'Dopasowanie pól nagłówka i stopki do sposobu pracy zespołu',
                'Dodatkowy wariant językowy lub drugi wzór (np. dla innego działu)',
                'Dwie rundy poprawek w cenie',
              ],
              btnOne: 'Zamów wycenę pakietu Standard',
              btnOneLink: '#kontakt',
            },
            {
              name: 'Pakiet Pro - system korespondencji firmowej',
              price: 'wycena indywidualna',
              description: 'Dla marek, które chcą pełnego systemu: papier firmowy, szablony pism i spójność z innymi materiałami.',
              features: [
                'Wszystko z pakietu Standard, a dodatkowo:',
                'Rozszerzenie o dodatkowe typy dokumentów (np. protokoły, zaświadczenia, proste raporty)',
                'Dopasowanie papieru firmowego do pozostałych materiałów (wizytówki, teczki, ulotki)',
                'Rekomendacje dotyczące druku (rodzaj papieru, wykończenie - realizacja po stronie drukarni)',
                'Wsparcie przy wdrożeniu szablonów w zespole (proste instrukcje użycia)',
              ],
              btnOne: 'Porozmawiajmy o pakiecie Pro',
              btnOneLink: '#kontakt',
            },
          ]}
          legalNote="Zakres projektu i liczba wariantów są dobierane indywidualnie. Po briefie otrzymasz dopasowaną wycenę oraz harmonogram prac."
        />

        <Gap variant="line" />

        <WorkSteps variant="design" />

        <Gap variant="line" />

        <ContactForm
          title="Zamów projekt papieru firmowego"
          description="Napisz, czym zajmuje się Twoja firma oraz co powinno znajdować się na Twoim papierze firmowym. Na tej podstawie przygotujemy wycenę, termin i rekomendacje"
          defaultSubject="Projekt papieru firmowego"
        />

        <Gap variant="line" />

        <FaqPanels
          openByDefault={1}
          pageUrl="https://www.arteonagency.pl/uslugi/projekty-graficzne/projekt-papieru-firmowego"
          title="Najczęstsze pytania o projekt papieru firmowego"
          items={[
            {
              question: 'Ile kosztuje projekt papieru firmowego?',
              answer:
                'Cena zależy od liczby wariantów (np. osobny wzór dla różnych działów), zakresu szablonów elektronicznych i ewentualnych wersji językowych. Po krótkim zapoznaniu z Twoimi potrzebami przygotujemy wycenę dopasowaną do Twoich potrzeb.',
            },
            {
              question: 'Jak długo trwa wykonanie projektu papieru firmowego?',
              answer: 'Standardowo projekt zajmuje około od 2 do 4 dni roboczych. Przy projektach z wieloma wersjami termin ustalamy indywidualnie.',
            },
            {
              question: 'W jakich formatach dostanę projekt papieru firmowego?',
              answer: 'Otrzymasz pliki PDF do druku z odpowiednimi spadami, wersje PDF do korespondencji elektronicznej oraz - w razie potrzeby - szablony dokumentów w Word lub Google Docs.',
            },
            {
              question: 'Czy mogę zgłosić poprawki?',
              answer: 'Tak, w każdym projekcie przewidujemy rundy poprawek. Wspólnie dopracowujemy układ, hierarchię informacji i detale wizualne, aż efekt będzie spójny z wizerunkiem Twojej marki.',
            },
            {
              question: 'Czy papier firmowy będzie prawidłowo przygotowany do druku?',
              answer: 'Tak, pliki przygotowujemy z zachowaniem spadów, marginesów bezpieczeństwa i odpowiednich ustawień kolorów. Materiały są gotowe do przekazania do drukarni.',
            },
            {
              question: 'Czy mogę zamówić ekspresowy projekt papieru firmowego?',
              answer: 'Tak, oferujemy opcję realizacji w trybie przyspieszonym za dodatkową opłatą. Przed startem ustalamy możliwy termin oraz dodatkowy koszt.',
            },
          ]}
        />

        <Gap variant="line" />

        <SectionSteps
          title="Jak jeszcze możesz wzmocnić wizerunek w korespondencji?"
          subtitle="Zobacz też"
          description="Najlepszy efekt daje spójny system: papier firmowy, wizytówki, teczki i oferta, które razem budują doświadczenie klienta."
          items={[
            {
              icon: <RiFileTextLine className="h-8 w-8" />,
              title: 'Projekt wizytówki firmowej',
              description: (
                <div className="flex h-full flex-col">
                  <p className="mb-3 text-sm">
                    Połącz papier firmowy z wizytówką w tym samym stylu. Klient od razu zauważy spójność co wzbudzi większe zaufanie i stworzy jeszcze bardziej profesjonalny wizerunek.
                  </p>
                  <div className="mt-auto">
                    <Button arrow link="/uslugi/projekty-graficzne/projekt-wizytowki">
                      Zobacz projekt wizytówki
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiBookOpenLine className="h-8 w-8" />,
              title: 'Projekt teczki ofertowej',
              description: (
                <div className="flex h-full flex-col">
                  <p className="mb-3 text-sm">Umieść dopracowane dokumenty w eleganckiej teczce. Cała oferta - od papieru po oprawę - staje się spójnym doświadczeniem dla klienta.</p>
                  <div className="mt-auto">
                    <Button arrow link="/uslugi/projekty-graficzne/projekt-teczki-ofertowej">
                      Zobacz projekt teczki
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
        title="Profesjonalny wygląd dokumentów"
        description="Stworzymy papier firmowy, który zwiększa zaufanie i profesjonalny wizerunek Twojej firmy."
        btnOne="Skontaktuj się"
        btnOneLink="#kontakt"
        btnTwo="Poznaj inne usługi graficzne"
        btnTwoLink="/uslugi/projekty-graficzne"
        backgroundImage="/assets/projects/luxnova/papier-firmowy-dla-kancelarii-luxnova.webp"
        overlay="black"
      />

      <ServiceSchema />
    </>
  );
}
