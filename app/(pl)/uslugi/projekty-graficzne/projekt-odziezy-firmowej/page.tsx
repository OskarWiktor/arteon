import WorkSteps from '@/components/sections/steps/WorkSteps';
import HeroBanner from '@/components/sections/HeroBanner';
import BenefitBelt from '@/components/sections/BenefitBelt';
import CTABanner from '@/components/sections/CTABanner';
import Gap from '@/components/ui/Gap';
import ServicesSteps from '@/components/sections/steps/ServicesSteps';
import { RiPencilRuler2Line, RiBrushLine, RiBarChart2Fill, RiLightbulbFlashLine, RiFileTextLine, RiImageLine, RiQuillPenLine, RiTShirt2Line, RiMoneyDollarCircleLine } from 'react-icons/ri';
import ContactForm from '@/components/sections/ContactForm';
import Wrapper from '@/components/ui/Wrapper';
import ProjectsOverview from '@/components/sections/projects/ProjectsOverview';
import Breadcrumbs from '@/components/sections/BreadCrumbs';
import FaqPanels from '@/components/ui/FaqPanels';
import FeatureGrid from '@/components/sections/FeatureGrid';
import SectionInfo from '@/components/ui/sections/SectionInfo';
import Script from 'next/script';
import { buildServiceSchema } from '@/lib/serviceSchema';
import TestimonialsCarousel from '@/components/sections/TestimonialsCarousel';
import SectionPrices from '@/components/ui/sections/SectionPrices';
import SectionSteps from '@/components/ui/sections/SectionSteps';
import Button from '@/components/ui/Button';

export const metadata = {
  title: 'Projekt odzieży firmowej | Arteon',
  description: 'Projekt nadruków i haftów na odzież firmową - spójny wygląd zespołu i lepsza rozpoznawalność marki w terenie',
  alternates: {
    canonical: '/uslugi/projekty-graficzne/projekt-odziezy-firmowej',
  },
  openGraph: {
    title: 'Projekt odzieży firmowej | Arteon',
    description: 'Projekt nadruków i haftów na odzież firmową - spójny wygląd zespołu i lepsza rozpoznawalność marki w terenie',
    url: 'https://www.arteonagency.pl/uslugi/projekty-graficzne/projekt-odziezy-firmowej',
    type: 'website',
  },
} as const;

const BASE = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.arteonagency.pl';

function ServiceSchema() {
  const json = buildServiceSchema({
    baseUrl: BASE,
    path: '/uslugi/projekty-graficzne/projekt-odziezy-firmowej',
    serviceName: 'Projekt odzieży firmowej',
    description: 'Nadruki na odzież (T-shirt, bluza, polo) spójne z marką. Pliki produkcyjne dla sitodruku/DTF.',
    availableLanguages: ['pl'],
    includeServiceChannel: true,
  });

  return (
    <Script id="schema-service-projekt-odziezy-firmowej" type="application/ld+json">
      {JSON.stringify(json)}
    </Script>
  );
}

export default function OfferDesignOdziezFirmowaPage() {
  return (
    <>
      <HeroBanner
        title="Projekt odzieży firmowej"
        description={
          <>
            Zespół wygląda spójnie, a marka zyskuje widoczność. Przygotowujemy projekty nadruków i haftów - pod sitodruk, DTF i haft komputerowy - zgodnie z Twoją identyfikacją i realiami produkcji.
          </>
        }
        buttonAccent="Bezpłatna wycena"
        buttonAccentLink="#kontakt"
        variant="left"
        backgroundImage="/assets/bg/abstract-bg15.webp"
        overlay="black"
      />

      <BenefitBelt
        items={[
          { icon: <RiPencilRuler2Line />, label: 'Spójny wygląd zespołu' },
          { icon: <RiBrushLine />, label: 'Projekt dopasowany do marki' },
          { icon: <RiBarChart2Fill />, label: 'Większa rozpoznawalność w terenie' },
          { icon: <RiLightbulbFlashLine />, label: 'Praktyczne podejście do produkcji' },
        ]}
      />

      <Breadcrumbs
        second={{ href: '/uslugi', label: 'Usługi' }}
        third={{ href: `/uslugi/projekty-graficzne`, label: 'Projekty graficzne' }}
        fourth={{
          href: `/uslugi/projekty-graficzne/projekt-odziezy-firmowej`,
          label: 'Projekt odzieży firmowej',
        }}
        includeJsonLd
      />

      <Wrapper>
        <Gap size="xs" />

        <SectionInfo title="Co zyskujesz zamawiając projekt odzieży firmowej?">
          <p>
            <strong>Spójny wygląd odzieży Twojego zespołu buduje zaufanie w kilka sekund.</strong> Klient od razu widzi, kto reprezentuje Twoją firmę. Jednolita odzież firmowa buduje wizerunek i
            wzmacnia wiarygodność - zarówno w siedzibie, jak i w terenie. Dzięki temu Twoja marka jest widoczna wszędzie tam, gdzie pojawia się zespół, a to działa jak darmowa reklama mobilna.
          </p>

          <br />

          <p>
            <strong>Dobra odzież firmowa robi trzy rzeczy naraz:</strong>
          </p>
          <ul className="ml-5 list-disc">
            <li>Ujednolica zespół i podnosi rozpoznawalność marki,</li>
            <li>Ułatwia obsługę - klient szybciej trafia do właściwej osoby,</li>
            <li>Wzmacnia wizerunek i buduje autorytet Twojej firmy w oczach klientów i partnerów.</li>
          </ul>
        </SectionInfo>

        <Gap variant="line" />

        <FeatureGrid
          title="Co dokładnie dostajesz w ramach projektu odzieży firmowej?"
          subtitle="Nasz standard pracy"
          items={[
            {
              title: 'Spójny wygląd zespołu',
              description: <>Projekt buduje rozpoznawalność marki w terenie, na hali, w salonie i podczas wydarzeń.</>,
              icon: <RiTShirt2Line className="h-6 w-6 text-slate-500" />,
            },
            {
              title: 'Wizualizacje i warianty',
              description: <>Przygotowujemy podglądy na koszulkach, bluzach i innych elementach, aby łatwiej było podjąć decyzję.</>,
              icon: <RiImageLine className="h-6 w-6 text-slate-500" />,
            },
            {
              title: 'Dopasowanie do wybranej technologii',
              description: <>Projekt przygotowujemy tak, aby wyglądał dobrze niezależnie od sposobu naniesienia znaków - sitodruk, haft, DTF.</>,
              icon: <RiQuillPenLine className="h-6 w-6 text-slate-500" />,
            },
            {
              title: 'Pliki gotowe do produkcji',
              description: <>Otrzymujesz materiały, które możesz od razu przekazać wykonawcy odzieży.</>,
              icon: <RiFileTextLine className="h-6 w-6 text-slate-500" />,
            },
            {
              title: 'Faktura po realizacji',
              description: <>Płacisz dopiero po otrzymaniu gotowego projektu w finalnej formie.</>,
              icon: <RiMoneyDollarCircleLine className="h-6 w-6 text-slate-500" />,
            },
          ]}
        />

        <Gap variant="line" />

        <SectionInfo title="Dla kogo projekt odzieży firmowej ma największy sens?" subtitle="Dla kogo">
          <ul className="ml-5 list-disc space-y-2">
            <li>
              <strong>Dla firm usługowych i serwisów w terenie</strong> - ekipy montażowe, serwisowe, budowlane, które codziennie pracują u klientów.
            </li>
            <li>
              <strong>Dla salonów, kawiarni, restauracji i punktów sprzedaży,</strong> gdzie kontakt z klientem opiera się na bezpośredniej obsłudze.
            </li>
            <li>
              <strong>Dla organizatorów wydarzeń, szkół, klubów sportowych,</strong> które chcą spójnego wyglądu zespołu na eventach i turniejach.
            </li>
            <li>
              <strong>Dla marek budujących rozpoznawalność lokalnie,</strong> którym zależy na tym, by logo i nazwa pojawiały się w przestrzeni miejskiej regularnie.
            </li>
          </ul>
        </SectionInfo>

        <Gap variant="line" />

        <ProjectsOverview title="Wyróżnione realizacje projektów graficznych" category="grafika" subtitle="Portfolio" />

        <Gap variant="line" />

        <TestimonialsCarousel />

        <Gap variant="line" />

        <SectionPrices
          title="Projekt odzieży firmowej - przykładowe pakiety"
          subtitle="Zakres dopasowany do zespołu i rodzaju odzieży"
          plans={[
            {
              name: 'Pakiet Start - podstawowy zestaw nadruków',
              price: 'wycena indywidualna',
              description: 'Dla firm, które potrzebują prostego, spójnego projektu nadruku na np. koszulki dla małego zespołu.',
              features: [
                'Krótki brief o marce, zastosowaniu odzieży i liczbie pracowników',
                'Projekt nadruku z logo i podstawowymi elementami identyfikacji',
                'Dopasowanie projektu do jednego typu odzieży (np. T-shirt lub bluza)',
                'Pliki gotowe do produkcji w wybranej technice',
                'Jedna runda poprawek w cenie',
              ],
              btnOne: 'Zamów wycenę pakietu Start',
              btnOneLink: '#kontakt',
            },
            {
              name: 'Pakiet Standard - odzież dla całego zespołu',
              price: 'wycena indywidualna',
              description: 'Dla firm, które chcą dopracowanego systemu nadruków lub haftów na kilka typów odzieży i różne stanowiska.',
              features: [
                'Wszystko z pakietu Start, a dodatkowo:',
                'Warianty dla kilku elementów garderoby (np. T-shirt, bluza, polo)',
                'Dostosowanie projektu do różnych kolorów bazowych odzieży',
                'Wizualizacje na sylwetkach lub mockupach, ułatwiające wybór',
                'Dwie rundy poprawek w cenie',
              ],
              btnOne: 'Zamów wycenę pakietu Standard',
              btnOneLink: '#kontakt',
            },
            {
              name: 'Pakiet Pro - system odzieży dla marki',
              price: 'wycena indywidualna',
              description: 'Dla marek, które chcą kompleksowego systemu - od ubioru zespołu po odzież na eventy i sprzedaż merchu.',
              features: [
                'Wszystko z pakietu Standard, a dodatkowo:',
                'Rozszerzenie o odzież eventową lub sprzedażową (np. merch dla klientów)',
                'Przygotowanie zestawu plików dla różnych dostawców/zleceniobiorców',
                'Proste wytyczne dla produkcji (min. wielkości, marginesy bezpieczeństwa, zastosowania)',
              ],
              btnOne: 'Porozmawiajmy o pakiecie Pro',
              btnOneLink: '#kontakt',
            },
          ]}
          legalNote="Zakres projektu zależy od liczby typów odzieży, wariantów i technik nadruku/haftu. Po briefie otrzymasz dopasowaną wycenę i harmonogram."
        />

        <Gap variant="line" />

        <WorkSteps variant="design" />

        <Gap variant="line" />

        <ContactForm
          title="Zamów projekt odzieży firmowej"
          description="Opisz co chcesz umieścić na firmowej odzieży. Na tej podstawie przygotujemy wycenę, termin i rekomendacje"
          defaultSubject="Projekt odzieży firmowej"
        />

        <Gap variant="line" />

        <FaqPanels
          openByDefault={1}
          pageUrl="https://www.arteonagency.pl/uslugi/projekty-graficzne/projekt-odziezy-firmowej"
          title="Najczęstsze pytania o projekt odzieży firmowej"
          items={[
            {
              question: 'Ile kosztuje projekt odzieży firmowej?',
              answer:
                'Cena zależy od liczby projektów (koszulki, bluzy, czapki) czy techniki druku (sitodruk, haft, DTF). Po dokładnym omówieniu Twojego planu i Twoich potrzeb przygotujemy dedykowaną ofertę.',
            },
            {
              question: 'Jak długo trwa projekt odzieży firmowej?',
              answer: 'Standardowy czas realizacji to zwykle 5-10 dni roboczych.',
            },
            {
              question: 'W jakich formatach otrzymam projekt nadruków?',
              answer: 'Dostarczamy pliki wektorowe oraz rastrowe w wysokiej rozdzielczości, z wariantami kolorystycznymi i adaptacjami do różnych elementów odzieży.',
            },
            {
              question: 'Czy mogę zgłosić poprawki do projektu nadruku na odzieć?',
              answer: 'Tak, w projekcie przewidujemy rundy poprawek. Doprecyzowujemy kolory, umiejscowienie, skalę i szczegóły, aż otrzymasz finalną wersję zgodną z Twoją wizją.',
            },
            {
              question: 'Jaką technikę druku wybrać?',
              answer:
                'Doradzamy dobór techniki (sitodruk, haft, DTF) z uwzględnieniem materiału odzieży, budżetu i oczekiwanej trwałości. Projekt przygotowujemy pod wybrane rozwiązanie po omówieniu szczegółów.',
            },
            {
              question: 'Czy mogę zamówić ekspresowy projekt odzieży firmowej?',
              answer: 'Tak, oferujemy opcję przyspieszonej realizacji za dodatkową opłatą. Przed rozpoczęciem projektu ustalamy możliwy termin oraz dodatkowy koszt.',
            },
          ]}
        />

        <Gap variant="line" />

        <SectionSteps
          title="Jak jeszcze możesz wzmocnić wizerunek swojej marki?"
          subtitle="Zobacz też"
          description="Odzież firmowa działa najlepiej, gdy jest częścią spójnego systemu materiałów - od wizytówek po teczki i papier firmowy."
          items={[
            {
              icon: <RiTShirt2Line className="h-8 w-8" />,
              title: 'Projekt wizytówki firmowej',
              description: (
                <div className="flex h-full flex-col">
                  <p className="mb-3 text-sm">Połącz odzież z dopracowaną wizytówką. Klient zapamięta nie tylko logo na koszulce, ale też konkretne dane kontaktowe.</p>
                  <div className="mt-auto">
                    <Button arrow link="/uslugi/projekty-graficzne/projekt-wizytowki">
                      Zobacz projekt wizytówki
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiFileTextLine className="h-8 w-8" />,
              title: 'Projekt papieru firmowego',
              description: (
                <div className="flex h-full flex-col">
                  <p className="mb-3 text-sm">Ubierz markę także w dokumentach. Spójne logo, kolory i układ na papierze firmowym domykają cały system wizerunkowy.</p>
                  <div className="mt-auto">
                    <Button arrow link="/uslugi/projekty-graficzne/projekt-papieru-firmowego">
                      Zobacz projekt papieru firmowego
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
        title="Promuj swoją markę w terenie"
        description="Zaprojektujemy nadruki i hafty, które wyróżnią Twoją firmę i wzmocnią profesjonalny wizerunek."
        btnOne="Skontaktuj się"
        btnOneLink="#kontakt"
        btnTwo="Poznaj inne usługi graficzne"
        btnTwoLink="/uslugi/projekty-graficzne"
        backgroundImage="/assets/bg/abstract-bg15.webp"
        overlay="black"
      />

      <ServiceSchema />
    </>
  );
}
