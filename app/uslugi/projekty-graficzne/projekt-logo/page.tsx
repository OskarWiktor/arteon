import WorkSteps from '@/components/sections/steps/WorkSteps';
import HeroBanner from '@/components/sections/HeroBanner';
import BenefitBelt from '@/components/sections/BenefitBelt';
import CTABanner from '@/components/sections/CTABanner';
import Gap from '@/components/ui/Gap';
import ServicesSteps from '@/components/sections/steps/ServicesSteps';
import {
  RiPencilRuler2Line,
  RiBrushLine,
  RiBarChart2Fill,
  RiLightbulbFlashLine,
  RiBookOpenLine,
  RiKey2Line,
  RiPantoneLine,
  RiQuillPenLine,
  RiIdCardLine,
  RiMoneyDollarCircleLine,
} from 'react-icons/ri';
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
import { IoColorPalette } from 'react-icons/io5';

export const metadata = {
  title: 'Projekt logo | Arteon',
  description: 'Logo jako fundament identyfikacji wizualnej. Tworzymy czytelny znak z wersjami kolorystycznymi i mini-księgą znaku.',
  alternates: { canonical: '/uslugi/projekty-graficzne/projekt-logo' },
  openGraph: {
    title: 'Projekt logo | Arteon',
    description: 'Profesjonalne logo dopasowane do charakteru marki. Wektory, warianty i mini-księga znaku.',
    url: 'https://www.arteonagency.pl/uslugi/projekty-graficzne/projekt-logo',
    type: 'website',
  },
} as const;

const BASE = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.arteonagency.pl';

function ServiceSchema() {
  const json = buildServiceSchema({
    baseUrl: BASE,
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
        backgroundImage="/assets/bg/abstract-bg15.webp"
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
              icon: <RiQuillPenLine className="h-6 w-6 text-slate-500" />,
            },
            {
              title: 'Warianty i zastosowania',
              description: <>Otrzymujesz wersje kolorystyczne, monochromatyczne, poziome i pionowe - gotowe do użycia na stronie, w social mediach i w druku.</>,
              icon: <RiPantoneLine className="h-6 w-6 text-slate-500" />,
            },
            {
              title: 'Prosta instrukcja użycia',
              description: <>Dołączamy mini-księgę znaku z podstawowymi wytycznymi, dzięki czemu każdy w firmie wie, jak poprawnie korzystać z logo.</>,
              icon: <RiBookOpenLine className="h-6 w-6 text-slate-500" />,
            },
            {
              title: 'Pełna własność i pliki źródłowe',
              description: <>Po zakończeniu projektu masz komplet plików wektorowych i pełnię praw - możesz swobodnie rozwijać identyfikację w przyszłości.</>,
              icon: <RiKey2Line className="h-6 w-6 text-slate-500" />,
            },
            {
              title: 'Faktura po realizacji',
              description: <>Płacisz dopiero po otrzymaniu gotowego projektu w finalnej formie.</>,
              icon: <RiMoneyDollarCircleLine className="h-6 w-6 text-slate-500" />,
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
              <strong>Spójny wizerunek na wszystkich nośnikach</strong> - od strony WWW, przez social media, po druk.
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

        <ProjectsOverview title="Wybrane realizacje projektów graficznych" category="grafika" subtitle="Portfolio" />

        <Gap variant="line" />

        <TestimonialsCarousel />

        <Gap variant="line" />

        <SectionPrices
          title="Projekt logo - przykładowe pakiety"
          subtitle="Zakres dopasowany do etapu rozwoju Twojej marki"
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
                'Rekomendacje co do kolejnych kroków (strona, materiały drukowane, social media)',
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

        <ContactForm
          title="Zamów projekt logo"
          description="Opisz, czym się zajmujesz i jaki typ znaku Ci się podoba. Na tej podstawie przygotujemy wycenę, termin i rekomendacje"
          defaultSubject="Projekt logo"
        />

        <Gap variant="line" />

        <FaqPanels
          openByDefault={1}
          pageUrl="https://www.arteonagency.pl/uslugi/projekty-graficzne/projekt-logo"
          items={[
            {
              question: 'Ile kosztuje profesjonalne logo?',
              answer:
                'Cena logo zależy od zakresu pracy: liczby wariantów, wersji kolorystycznych i dodatkowych adaptacji. Dokładną wycenę przygotowujemy po zapoznaniu się z Twoją ofertą, wizją oraz docelowymi klientami',
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
              answer: 'Tak, w standardowym pakiecie uwzględniamy minimum jedną rundy korekt. Razem dopracujemy kształt, proporcje i detale, aby efekt odpowiadał Twojej wizji.',
            },
            {
              question: 'Czy pomogacie określić styl i kierunek logo?',
              answer:
                'Tak, jeśli nie jesteś pewien jakie logo będzie odpowiednie dla Twojej firmy, przygotowujemy moodboardy, przykłady stylów i kierunki, aby wspólnie znaleźć to, co najlepiej pasuje do Twojej marki.',
            },
            {
              question: 'Gdzie mogę używać logo?',
              answer: 'Logo projektujemy tak, aby dobrze działało na stronie WWW, w social mediach, w druku, na gadżetach i odzieży. Dbamy o skalowalność i czytelność w różnych rozmiarach.',
            },
            {
              question: 'Czy dostaję prawa autorskie do logo?',
              answer: 'Tak, po finalizacji projektu przekazujemy Ci pełne prawa autorskie majątkowe do logo oraz komplet plików źródłowych. Możesz swobodnie korzystać z niego w materiałach własnych.',
            },
            {
              question: 'Czy oferujecie espresową realizację logo?',
              answer: 'Tak, dla projektów priorytetowych proponujemy tryb ekspresowy. Zakres, czas i koszt ustalamy indywidualnie przed rozpoczęciem pracy.',
            },
          ]}
        />

        <Gap variant="line" />

        <SectionSteps
          title="Jak rozwinąć logo w pełną identyfikację?"
          subtitle="Zobacz też"
          description="Logo jest fundamentem, ale pełną moc pokazuje dopiero w systemie materiałów. Z nami możesz krok po kroku rozbudować identyfikację, zachowując spójny styl swojej marki."
          items={[
            {
              icon: <RiIdCardLine className="h-8 w-8" />,
              title: 'Projekt wizytówki firmowej',
              description: (
                <div className="flex h-full flex-col">
                  <p className="mb-3 text-sm">
                    Wykorzystaj nowe logo na eleganckiej wizytówce - to najprostszy sposób, by zostawić po spotkaniu konkretny, fizyczny ślad i zachęcić klienta do ponownego kontaktu.
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
              icon: <IoColorPalette className="h-8 w-8" />,
              title: 'Projekt identyfikacji wizualnej',
              description: (
                <div className="flex h-full flex-col">
                  <p className="mb-3 text-sm">
                    Aby wszystko było spójne, możesz rozwarzyć stworzenie pełnej identyfikacji wizualnej: ulotki, katalogi, posty do mediów społecznościowych - wszystko zrealizujesz w jednym miejscu.
                  </p>
                  <div className="mt-auto">
                    <Button arrow link="/uslugi/projekty-graficzne/projekt-identyfikacji-wizualnej">
                      Zobacz projekt identyfikacji wizualnej
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
        title="Znak, który prowadzi markę"
        description="Stworzymy logo, które porządkuje komunikację i zostaje w pamięci."
        btnOne="Skontaktuj się"
        btnOneLink="#kontakt"
        btnTwo="Poznaj usługi graficzne"
        btnTwoLink="/uslugi/projekty-graficzne"
        backgroundImage="/assets/bg/abstract-bg15.webp"
        overlay="black"
      />

      <ServiceSchema />
    </>
  );
}
