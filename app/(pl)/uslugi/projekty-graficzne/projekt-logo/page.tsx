import WorkSteps from '@/components/sections/steps/WorkSteps';
import HeroBanner from '@/components/sections/HeroBanner';
import BenefitBelt from '@/components/sections/BenefitBelt';
import CTABanner from '@/components/sections/CTABanner';
import Gap from '@/components/ui/Gap';
import SectionBento from '@/components/ui/sections/SectionBento';
import { RiPencilRuler2Line, RiBrushLine, RiBarChart2Fill, RiLightbulbFlashLine, RiBookOpenLine, RiKey2Line, RiPantoneLine, RiQuillPenLine, RiMoneyDollarCircleLine } from 'react-icons/ri';
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
  title: 'Projekt logo | Arteon',
  description: 'Logo jako fundament identyfikacji wizualnej. Tworzymy czytelny znak z wersjami kolorystycznymi i mini-księgą znaku.',
  alternates: { canonical: 'https://www.arteonagency.pl/uslugi/projekty-graficzne/projekt-logo' },
  openGraph: {
    title: 'Projekt logo | Arteon',
    description: 'Profesjonalne logo dopasowane do charakteru marki. Wektory, warianty i mini-księga znaku.',
    url: 'https://www.arteonagency.pl/uslugi/projekty-graficzne/projekt-logo',
    type: 'website',
    images: [{ url: 'https://www.arteonagency.pl/assets/projects/finish-masters/logo-finish-masters-case-study.webp', width: 1200, height: 630 }],
  },
} as const;

function ServiceSchema() {
  const json = buildServiceSchema({
    path: '/uslugi/projekty-graficzne/projekt-logo',
    serviceName: 'Projekt logo',
    description: 'Znak marki z podstawową księgą znaku: warianty, siatka, wersje kolorystyczne. Pliki wektorowe gotowe do użycia.',
    availableLanguages: ['pl'],
    includeServiceChannel: true,
  });

  return (
    <Script id="schema-service-projekt-logo" type="application/ld+json">
      {JSON.stringify(json)}
    </Script>
  );
}

export default function OfferDesignLogoPage() {
  return (
    <>
      <HeroBanner
        title="Projekt logo"
        description={
          <>
            Silny znak porządkuje komunikację i wyróżnia markę. Projektujemy logo z myślą o czytelności, skalowalności i psychologii odbiorcy - z wersjami kolorystycznymi oraz mini-księgą znaku, którą
            wykorzystasz przez lata.
          </>
        }
        buttonAccent="Bezpłatna wycena"
        buttonAccentLink="#kontakt"
        variant="left"
        backgroundImage="/assets/projects/finish-masters/logo-finish-masters-case-study.webp"
        overlay="black"
      />

      <BenefitBelt
        items={[
          { icon: <RiPencilRuler2Line />, label: 'Logo dopasowane do marki' },
          { icon: <RiBrushLine />, label: 'Perfekcja detalu i proporcji' },
          { icon: <RiBarChart2Fill />, label: 'Znak, który wspiera sprzedaż' },
          { icon: <RiLightbulbFlashLine />, label: 'Psychologia odbioru w praktyce' },
        ]}
      />

      <Breadcrumbs
        second={{ href: '/uslugi', label: 'Usługi' }}
        third={{ href: `/uslugi/projekty-graficzne`, label: 'Projekty graficzne' }}
        fourth={{ href: `/uslugi/projekty-graficzne/projekt-logo`, label: 'Projekt logo' }}
        includeJsonLd
      />

      <Wrapper>
        <Gap size="xs" />

        <ProjectsCarousel title="Wybrane realizacje projektów graficznych" category="grafika" />

        <Gap variant="line" />

        <SectionInfo title="Co zyskujesz zamawiając projekt logo?">
          <p>
            <strong>Profesjonalne logo wzmacnia wizerunek i ułatwia sprzedaż.</strong> Spójny branding realnie przekłada się na wynik - firmy utrzymujące konsekwentną identyfikację raportują ok.{` `}
            <strong>10-20% wyższy wzrost/przychody</strong>
            <a href="https://www.marq.com/blog/brand-consistency-competitive-advantage" target="_blank" rel="noopener noreferrer" className="inline-link ml-1">
              (źródło)
            </a>
            .
          </p>

          <br />

          <p>
            <strong>Logo buduje wiarygodność w ułamku sekundy.</strong> Jakość oprawy wizualnej (logo, układ, estetyka) silnie wpływa na ocenę firmy: ok.{` `}
            <strong>75%</strong> osób przypisuje wiarygodność marce na podstawie tego, jak wyglądają jej materiały
            <a href="https://rareformnewmedia.com/credibility-in-web-design/" target="_blank" rel="noopener noreferrer" className="inline-link ml-1">
              (źródło)
            </a>
            .
          </p>

          <br />

          <p>
            <strong>Dobre logo robi trzy rzeczy naraz:</strong>
          </p>
          <ul className="ml-5 list-disc">
            <li>Porządkuje komunikację i ułatwia tworzenie kolejnych materiałów,</li>
            <li>Buduje rozpoznawalność i pamięć marki w głowie klienta,</li>
            <li>Podnosi zaufanie.</li>
          </ul>
        </SectionInfo>

        <Gap variant="line" />

        <FeatureGrid
          title="Co zyskujesz zamawiając logo u nas?"
          subtitle="Nasz standard pracy"
          items={[
            {
              title: 'Znak, który prowadzi markę',
              description: <>Tworzymy logo, które jest czytelne, charakterystyczne i łatwe do zapamiętania - również w małych rozmiarach.</>,
              icon: <RiQuillPenLine className="text-primary h-6 w-6" />,
            },
            {
              title: 'Warianty i zastosowania',
              description: <>Otrzymujesz wersje kolorystyczne, monochromatyczne, poziome i pionowe - gotowe do użycia na stronie, w mediach społecznościowych i w druku.</>,
              icon: <RiPantoneLine className="text-primary h-6 w-6" />,
            },
            {
              title: 'Prosta instrukcja użycia',
              description: <>Dołączamy mini-księgę znaku z podstawowymi wytycznymi, dzięki czemu każdy w firmie wie, jak poprawnie korzystać z logo.</>,
              icon: <RiBookOpenLine className="text-primary h-6 w-6" />,
            },
            {
              title: 'Pełna własność i pliki źródłowe',
              description: <>Po zakończeniu projektu masz komplet plików wektorowych i pełnię praw - możesz swobodnie rozwijać identyfikację w przyszłości.</>,
              icon: <RiKey2Line className="text-primary h-6 w-6" />,
            },
            {
              title: 'Faktura po realizacji',
              description: <>Płacisz dopiero po otrzymaniu gotowego projektu w finalnej formie.</>,
              icon: <RiMoneyDollarCircleLine className="text-primary h-6 w-6" />,
            },
          ]}
        />

        <Gap variant="line" />

        <SectionInfo title="Dla kogo projekt logo ma największy sens?" subtitle="Dla kogo">
          <ul className="ml-5 list-disc space-y-2">
            <li>
              <strong>Dla nowych firm i start-upów,</strong> które chcą od początku wejść na rynek z klarowną, przemyślaną identyfikacją.
            </li>
            <li>
              <strong>Dla lokalnych biznesów,</strong> które rozwijają się i potrzebują logo na poziomie jakości usług, które oferują.
            </li>
            <li>
              <strong>Dla ekspertów i marek osobistych,</strong> gdzie logo musi współgrać z reputacją, jaką budujesz latami.
            </li>
            <li>
              <strong>Dla firm w rebrandingu,</strong> które zmieniają kierunek, grupę docelową lub poziom usług i potrzebują nowego symbolu tej zmiany.
            </li>
          </ul>
        </SectionInfo>

        <Gap variant="line" />

        <SectionInfo title="Jakie efekty możesz zobaczyć po wdrożeniu nowego logo?" subtitle="Efekty po wdrożeniu">
          <ul className="ml-5 list-disc space-y-2">
            <li>
              <strong>Spójny wizerunek na wszystkich nośnikach</strong> - od strony WWW, przez media społecznościowe, po druk.
            </li>
            <li>
              <strong>Łatwiejsze tworzenie materiałów,</strong> bo logo wyznacza kierunek dla kolorów, typografii i stylu.
            </li>
            <li>
              <strong>Wyższe postrzegane zaufanie,</strong> co ułatwia domykanie sprzedaży i podnoszenie stawek.
            </li>
            <li>
              <strong>Większa rozpoznawalność,</strong> gdy ten sam znak konsekwentnie pojawia się w wielu miejscach.
            </li>
          </ul>
        </SectionInfo>

        <Gap variant="line" />

        <TestimonialsCarousel />

        <Gap variant="line" />

        <SectionPrices
          title="Projekt logo - przykładowe pakiety"
          plans={[
            {
              name: 'Pakiet Start - logo dla nowej marki',
              price: 'wycena indywidualna',
              description: 'Dla jednoosobowych działalności i małych firm, które potrzebują solidnego znaku na start.',
              features: [
                'Krótkie konsultacje i brief online',
                '2-3 wstępne kierunki logo do wyboru',
                'Dopracowanie wybranego kierunku',
                'Wersje na jasne i ciemne tło',
                'Pliki PNG i SVG do użycia online',
              ],
              btnOne: 'Zamów wycenę pakietu Start',
              btnOneLink: '#kontakt',
            },
            {
              name: 'Pakiet Standard - logo + mini-księga znaku',
              price: 'wycena indywidualna',
              description: 'Dla firm, które chcą mieć logo oraz podstawowe zasady jego stosowania w jednym miejscu.',
              features: [
                'Wszystko z pakietu Start, a dodatkowo:',
                'Wersje poziome i pionowe logo',
                'Wersje kolorystyczne i monochromatyczne',
                'Podstawowa mini-księga znaku (pole ochronne, minimalne wymiary, tła)',
                'Pliki wektorowe (AI, EPS, SVG) do druku i produkcji',
              ],
              btnOne: 'Zamów wycenę pakietu Standard',
              btnOneLink: '#kontakt',
            },
            {
              name: 'Pakiet Pro - logo i system identyfikacji',
              price: 'wycena indywidualna',
              description: 'Dla marek, które chcą od razu zbudować szerszy system wizualny: logo, podstawowe materiały i spójne zasady.',
              features: [
                'Wszystko z pakietu Standard, a dodatkowo:',
                'Rozszerzona mini-księga znaku (kolory, typografia, przykładowe zastosowania)',
                'Propozycje zastosowań na wizytówkach, papierze firmowym czy mediach społecznościowych',
                'Zestaw plików przygotowany pod dalszy rozwój identyfikacji',
                'Rekomendacje co do kolejnych kroków (strona, materiały drukowane, media społecznościowe)',
              ],
              btnOne: 'Porozmawiajmy o pakiecie Pro',
              btnOneLink: '#kontakt',
            },
          ]}
          legalNote="Ostateczna wycena zależy m.in. od liczby kierunków, zakresu księgi znaku oraz dodatkowych materiałów. Po krótkim briefie przygotujemy dopasowaną, klarowną propozycję."
        />

        <Gap variant="line" />

        <WorkSteps variant="design" />

        <Gap variant="line" />

        <SectionContactForm
          title="Sprawdź koszt realizacji logo"
          description="Napisz czym zajmuje się Twoja firma i jaki typ znaku Ci się podoba (symbol, logotyp, monogram) - otrzymasz darmową wycenę realizacji."
          imageSrc="/assets/projects/finish-masters/logo-finish-masters-case-study.webp"
          imageAlt="Realizacja projektu logo - Finish Masters"
          defaultSubject="Projekt logo"
        />

        <Gap variant="line" />

        <FaqPanels
          openByDefault={1}
          title="Najczęstsze pytania dotyczące projektów logo"
          pageUrl="https://www.arteonagency.pl/uslugi/projekty-graficzne/projekt-logo"
          items={[
            {
              question: 'Ile kosztuje profesjonalne logo?',
              answer:
                'Cena logo zależy od zakresu pracy: liczby wariantów, wersji kolorystycznych i dodatkowych adaptacji. Dokładną wycenę przygotowujemy po zapoznaniu się z Twoją ofertą, wizją oraz docelowymi klientami.',
            },
            {
              question: 'Jak długo trwa realizacja projektu logo?',
              answer: 'Standardowy proces trwa około 5-10 dni roboczych, w zależności od liczby kierunków i rund poprawek. Przy pilnych zleceniach możemy zaproponować tryb ekspresowy.',
            },
            {
              question: 'W jakich formatach otrzymam logo?',
              answer: 'Otrzymasz pliki wektorowe oraz rastrowe w wysokiej rozdzielczości - w wersjach kolorystycznych, monochromatycznych oraz na jasne i ciemne tło, wraz z mini-księgą znaku.',
            },
            {
              question: 'Czy mogę zgłosić poprawki do logo?',
              answer: 'Tak, w standardowym pakiecie uwzględniamy minimum jedną rundę korekt. Razem dopracujemy kształt, proporcje i detale, aby efekt odpowiadał Twojej wizji.',
            },
            {
              question: 'Czy pomogacie określić styl i kierunek logo?',
              answer:
                'Tak, jeśli nie jesteś pewien, jakie logo będzie odpowiednie dla Twojej firmy, przygotowujemy moodboardy, przykłady stylów i kierunki, aby wspólnie znaleźć to, co najlepiej pasuje do Twojej marki.',
            },
            {
              question: 'Gdzie mogę używać logo?',
              answer:
                'Logo projektujemy tak, aby dobrze działało na stronie WWW, w mediach społecznościowych, w druku, na gadżetach i odzieży. Dbamy o skalowalność i czytelność w różnych rozmiarach.',
            },
            {
              question: 'Czy dostaję prawa autorskie do logo?',
              answer: 'Tak, po finalizacji projektu przekazujemy Ci pełne prawa autorskie majątkowe do logo oraz komplet plików źródłowych. Możesz swobodnie korzystać z niego w materiałach własnych.',
            },
            {
              question: 'Czy oferujecie ekspresową realizację logo?',
              answer: 'Tak, dla projektów priorytetowych proponujemy tryb ekspresowy. Zakres, czas i koszt ustalamy indywidualnie przed rozpoczęciem pracy.',
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
              btnLink: '/uslugi/tworzenie-stron-wordpress',
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
        title="Znak, który prowadzi markę"
        description="Stworzymy logo, które zostaje w pamięci i kreuje profesjonalny wizerunek."
        btnOne="Skontaktuj się"
        btnOneLink="#kontakt"
        btnTwo="Poznaj usługi graficzne"
        btnTwoLink="/uslugi/projekty-graficzne"
        backgroundImage="/assets/projects/finish-masters/logo-finish-masters-case-study.webp"
        overlay="black"
      />

      <ServiceSchema />
    </>
  );
}
