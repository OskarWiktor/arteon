import WorkSteps from '@/components/sections/steps/WorkSteps';
import HeroBanner from '@/components/sections/HeroBanner';
import BenefitBelt from '@/components/sections/BenefitBelt';
import CTABanner from '@/components/sections/CTABanner';
import Gap from '@/components/ui/Gap';
import SectionBento from '@/components/ui/sections/SectionBento';
import { RiPencilRuler2Line, RiBrushLine, RiBarChart2Fill, RiLightbulbFlashLine, RiFileTextLine, RiImageLine, RiQuillPenLine, RiTShirt2Line, RiMoneyDollarCircleLine } from 'react-icons/ri';
import SectionContactForm from '@/components/sections/SectionContactForm';
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
import ArticlesCarousel from '@/components/sections/blog/ArticlesCarousel';
import { getAllArticlePreviews } from '@/lib/blogDataService';

export const metadata = {
  title: 'Projekt odzieży firmowej | Arteon',
  description: 'Projekt nadruków i haftów na odzież firmową: koszulki, bluzy, czapki. Pliki techniczne dla drukarni i hafciarni.',
  alternates: {
    canonical: 'https://www.arteonagency.pl/uslugi/projekty-graficzne/projekt-odziezy-firmowej',
  },
  openGraph: {
    title: 'Projekt odzieży firmowej | Arteon',
    description: 'Projekt nadruków i haftów na odzież firmową: koszulki, bluzy, czapki. Pliki techniczne dla drukarni i hafciarni.',
    url: 'https://www.arteonagency.pl/uslugi/projekty-graficzne/projekt-odziezy-firmowej',
    type: 'website',
    images: [
      { url: 'https://www.arteonagency.pl/assets/blog/jak-identyfikacja-wizualna-zwieksza-zaufanie-klientow/jak-identyfikacja-wizualna-zwieksza-zaufanie-klientow.webp', width: 1200, height: 630 },
    ],
  },
} as const;

function ServiceSchema() {
  const json = buildServiceSchema({
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

export default function OfferDesignCorporateApparelPage() {
  return (
    <>
      <HeroBanner
        title="Projekt odzieży firmowej"
        description={
          <>
            Zespół wygląda spójnie, a marka zyskuje widoczność. Przygotowujemy projekty nadruków i haftów - pod sitodruk, DTF i haft komputerowy - zgodnie z identyfikacją wizualną i realiami
            produkcji.
          </>
        }
        buttonAccent="Bezpłatna wycena"
        buttonAccentLink="#kontakt"
        variant="left"
        backgroundImage="/assets/blog/jak-identyfikacja-wizualna-zwieksza-zaufanie-klientow/jak-identyfikacja-wizualna-zwieksza-zaufanie-klientow.webp"
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

        <ProjectsCarousel title="Wyróżnione realizacje projektów graficznych" category="grafika" />

        <Gap variant="line" />

        <SectionInfo title="Co zyskujesz zamawiając projekt odzieży firmowej?">
          <p>
            <strong>Spójny wygląd odzieży zespołu ułatwia identyfikację firmy.</strong> Klient od razu widzi, kto reprezentuje Twoją firmę. Jednolita odzież firmowa buduje wizerunek i wzmacnia
            wiarygodność - zarówno w siedzibie, jak i w terenie. Dzięki temu Twoja marka jest widoczna wszędzie tam, gdzie pojawia się zespół, a to działa jak darmowa reklama mobilna.
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
              icon: <RiTShirt2Line className="text-primary h-6 w-6" />,
            },
            {
              title: 'Wizualizacje i warianty',
              description: <>Przygotowujemy podglądy na koszulkach, bluzach i innych elementach, aby łatwiej było podjąć decyzję.</>,
              icon: <RiImageLine className="text-primary h-6 w-6" />,
            },
            {
              title: 'Dopasowanie do wybranej technologii',
              description: <>Projekt przygotowujemy tak, aby wyglądał dobrze niezależnie od sposobu naniesienia znaków - sitodruk, haft, DTF.</>,
              icon: <RiQuillPenLine className="text-primary h-6 w-6" />,
            },
            {
              title: 'Pliki gotowe do produkcji',
              description: <>Otrzymujesz materiały, które możesz od razu przekazać wykonawcy odzieży.</>,
              icon: <RiFileTextLine className="text-primary h-6 w-6" />,
            },
            {
              title: 'Faktura po realizacji',
              description: <>Płacisz dopiero po otrzymaniu gotowego projektu w finalnej formie.</>,
              icon: <RiMoneyDollarCircleLine className="text-primary h-6 w-6" />,
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

        <TestimonialsCarousel />

        <Gap variant="line" />

        <SectionPrices
          title="Projekt odzieży firmowej - przykładowe pakiety"
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

        <SectionContactForm
          title="Sprawdź koszt realizacji odzieży firmowej"
          description="Napisz jakie elementy chcesz umieścić na odzieży, ile rodzajów ubrań potrzebujesz oraz czy posiadasz logo - otrzymasz darmową wycenę realizacji."
          imageSrc="/assets/blog/jak-identyfikacja-wizualna-zwieksza-zaufanie-klientow/jak-identyfikacja-wizualna-zwieksza-zaufanie-klientow.webp"
          imageAlt="Identyfikacja wizualna i odzież firmowa"
          defaultSubject="Projekt odzieży firmowej"
        />

        <Gap variant="line" />

        <FaqPanels
          openByDefault={1}
          pageUrl="https://www.arteonagency.pl/uslugi/projekty-graficzne/projekt-odziezy-firmowej"
          title="Najczęstsze pytania dotyczące projektów odzieży firmowej"
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
              question: 'Czy mogę zgłosić poprawki do projektu nadruku na odzież?',
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
              title: 'Projekt wizytówki',
              description: 'Elegancka wizytówka dla Twojej firmy',
              size: 'medium',
              backgroundImage: '/assets/projects/luxnova/wizytowka-dla-kancelari-luxnova-mockup.webp',
              btnLabel: 'Zobacz ofertę',
              btnLink: '/uslugi/projekty-graficzne/projekt-wizytowki',
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
              title: 'Projekt papieru firmowego',
              description: 'Profesjonalny wygląd dokumentów',
              size: 'small',
              backgroundImage: '/assets/projects/luxnova/papier-firmowy-dla-kancelarii-luxnova.webp',
              btnLabel: 'Sprawdź ofertę',
              btnLink: '/uslugi/projekty-graficzne/projekt-papieru-firmowego',
            },
          ]}
        />

        <Gap variant="line" />

        <ArticlesCarousel title="Przydatne artykuły dotyczące projektów graficznych" categorySlug="grafika" articles={getAllArticlePreviews()} />

        <Gap size="sm" />
      </Wrapper>

      <CTABanner
        title="Promuj swoją markę w terenie"
        description="Zaprojektujemy nadruki i hafty, które wyróżnią Twoją firmę i wzmocnią profesjonalny wizerunek."
        btnOne="Skontaktuj się"
        btnOneLink="#kontakt"
        btnTwo="Poznaj inne usługi graficzne"
        btnTwoLink="/uslugi/projekty-graficzne"
        backgroundImage="/assets/blog/jak-identyfikacja-wizualna-zwieksza-zaufanie-klientow/jak-identyfikacja-wizualna-zwieksza-zaufanie-klientow.webp"
        overlay="black"
      />

      <ServiceSchema />
    </>
  );
}
