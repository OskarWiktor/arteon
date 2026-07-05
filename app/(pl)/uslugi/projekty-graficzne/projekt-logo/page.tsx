import Script from 'next/script';
import {
  RiBookOpenLine,
  RiKey2Line,
  RiPantoneLine,
  RiQuillPenLine,
  RiMoneyDollarCircleLine,
} from 'react-icons/ri';
import Divider from '@/components/atoms/Divider';
import Wrapper from '@/components/atoms/Wrapper';
import Breadcrumbs from '@/components/molecules/BreadCrumbs';
import BenefitBelt from '@/components/organisms/BenefitBelt';
import ArticlesCarousel from '@/components/organisms/carousels/ArticlesCarousel';
import ProjectsCarousel from '@/components/organisms/carousels/ProjectsCarousel';
import TestimonialsCarousel from '@/components/organisms/carousels/TestimonialsCarousel';
import CTABanner from '@/components/organisms/CTABanner';
import FeatureGrid from '@/components/organisms/FeatureGrid';
import HeroBanner from '@/components/organisms/HeroBanner';
import SectionBento from '@/components/organisms/sections/SectionBento';
import SectionContactForm from '@/components/organisms/sections/SectionContactForm';
import SectionFaqPanels from '@/components/organisms/sections/SectionFaqPanels';
import SectionInfo from '@/components/organisms/sections/SectionInfo';
import SectionPrices from '@/components/organisms/sections/SectionPrices';
import WorkSteps from '@/components/organisms/WorkSteps';
import { getArticlePreviewsByCategory } from '@/lib/blogDataService';
import { cn } from '@/lib/clsx';
import { buildServiceSchema } from '@/lib/seo/serviceSchema';
import { normalIconSizeClasses } from '@/lib/uiClasses';

export const metadata = {
  title: 'Projekt logo | Arteon',
  description:
    'Logo jako fundament identyfikacji wizualnej. Tworzymy czytelny znak z wersjami kolorystycznymi i mini-księgą znaku.',
  alternates: {
    canonical:
      'https://www.arteonagency.pl/uslugi/projekty-graficzne/projekt-logo',
  },
  openGraph: {
    title: 'Projekt logo | Arteon',
    description:
      'Profesjonalne logo dopasowane do charakteru marki. Wektory, warianty i mini-księga znaku.',
    url: 'https://www.arteonagency.pl/uslugi/projekty-graficzne/projekt-logo',
    type: 'website',
    images: [
      {
        url: 'https://www.arteonagency.pl/assets/projects/finish-masters/logo/logo-finish-masters-case-study.webp',
        width: 1200,
        height: 630,
      },
    ],
  },
} as const;

function ServiceSchema() {
  const json = buildServiceSchema({
    path: '/uslugi/projekty-graficzne/projekt-logo',
    serviceName: 'Projekt logo',
    description:
      'Znak marki z podstawową księgą znaku: warianty, siatka, wersje kolorystyczne. Pliki wektorowe gotowe do użycia.',
    availableLanguages: ['pl'],
    includeServiceChannel: true,
  });

  return (
    <Script id='schema-service-projekt-logo' type='application/ld+json'>
      {JSON.stringify(json)}
    </Script>
  );
}

export default function OfferDesignLogoPage() {
  return (
    <>
      <HeroBanner
        title='Projekt logo'
        description={
          <>
            Silny znak porządkuje komunikację i wyróżnia markę. Projektujemy
            logo z myślą o czytelności, skalowalności i psychologii odbiorcy - z
            wersjami kolorystycznymi oraz mini-księgą znaku, którą wykorzystasz
            przez lata.
          </>
        }
        secondaryCtaLabel='Bezpłatna wycena'
        secondaryCtaHref='#kontakt'
        backgroundImage='/assets/projects/finish-masters/logo/logo-finish-masters-case-study.webp'
        overlay='black'
      />

      <BenefitBelt variant='carousel' />

      <Breadcrumbs
        second={{ href: '/uslugi', label: 'Usługi' }}
        third={{
          href: `/uslugi/projekty-graficzne`,
          label: 'Projekty graficzne',
        }}
        fourth={{
          href: `/uslugi/projekty-graficzne/projekt-logo`,
          label: 'Projekt logo',
        }}
        includeJsonLd
      />

      <Wrapper>
        <Divider size='xs' />

        <ProjectsCarousel
          title='Wybrane realizacje projektów logo dla firm'
          category='loga'
        />

        <Divider line />

        <SectionInfo title='Co zyskujesz zamawiając projekt logo?'>
          <p>
            <strong>
              Profesjonalne logo wzmacnia wizerunek i ułatwia sprzedaż.
            </strong>{' '}
            Spójny branding realnie przekłada się na wynik - firmy utrzymujące
            konsekwentną identyfikację raportują ok.{` `}
            <strong>10-20% wyższy wzrost/przychody</strong>
            <a
              href='https://www.marq.com/blog/brand-consistency-competitive-advantage'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-link ml-1'
            >
              (źródło)
            </a>
            .
          </p>

          <br />

          <p>
            <strong>Logo buduje wiarygodność w ułamku sekundy.</strong> Jakość
            oprawy wizualnej (logo, układ, estetyka) silnie wpływa na ocenę
            firmy: ok.{` `}
            <strong>75%</strong> osób przypisuje wiarygodność marce na podstawie
            tego, jak wyglądają jej materiały
            <a
              href='https://rareformnewmedia.com/credibility-in-web-design/'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-link ml-1'
            >
              (źródło)
            </a>
            .
          </p>

          <br />

          <p>
            <strong>Dobre logo robi trzy rzeczy naraz:</strong>
          </p>
          <ul className='ml-5 list-disc'>
            <li>
              Porządkuje komunikację i ułatwia tworzenie kolejnych materiałów,
            </li>
            <li>Buduje rozpoznawalność i pamięć marki w głowie klienta,</li>
            <li>Podnosi zaufanie.</li>
          </ul>
        </SectionInfo>

        <Divider line />

        <FeatureGrid
          title='Co zyskujesz zamawiając logo u nas?'
          subtitle='Nasz standard pracy'
          items={[
            {
              title: 'Znak, który prowadzi markę',
              description: (
                <p>
                  Tworzymy logo, które jest czytelne, charakterystyczne i łatwe
                  do zapamiętania - również w małych rozmiarach.
                </p>
              ),
              icon: (
                <RiQuillPenLine
                  className={cn('text-primary', normalIconSizeClasses)}
                />
              ),
            },
            {
              title: 'Warianty i zastosowania',
              description: (
                <p>
                  Otrzymujesz wersje kolorystyczne, monochromatyczne, poziome i
                  pionowe - gotowe do użycia na stronie, w mediach
                  społecznościowych i w druku.
                </p>
              ),
              icon: (
                <RiPantoneLine
                  className={cn('text-primary', normalIconSizeClasses)}
                />
              ),
            },
            {
              title: 'Prosta instrukcja użycia',
              description: (
                <p>
                  Dołączamy mini-księgę znaku z podstawowymi wytycznymi, dzięki
                  czemu każdy w firmie wie, jak poprawnie korzystać z logo.
                </p>
              ),
              icon: (
                <RiBookOpenLine
                  className={cn('text-primary', normalIconSizeClasses)}
                />
              ),
            },
            {
              title: 'Pełna własność i pliki źródłowe',
              description: (
                <p>
                  Po zakończeniu projektu masz komplet plików wektorowych i
                  pełnię praw - możesz swobodnie rozwijać identyfikację w
                  przyszłości.
                </p>
              ),
              icon: (
                <RiKey2Line
                  className={cn('text-primary', normalIconSizeClasses)}
                />
              ),
            },
            {
              title: 'Faktura po realizacji',
              description: (
                <p>
                  Płacisz dopiero po otrzymaniu gotowego projektu w finalnej
                  formie.
                </p>
              ),
              icon: (
                <RiMoneyDollarCircleLine
                  className={cn('text-primary', normalIconSizeClasses)}
                />
              ),
            },
          ]}
        />

        <Divider line />

        <SectionInfo
          title='Dla kogo projekt logo ma największy sens?'
          subtitle='Dla kogo'
        >
          <ul className='ml-5 list-disc space-y-2'>
            <li>
              <strong>Dla nowych firm i start-upów,</strong> które chcą od
              początku wejść na rynek z klarowną, przemyślaną identyfikacją.
            </li>
            <li>
              <strong>Dla lokalnych biznesów,</strong> które rozwijają się i
              potrzebują logo na poziomie jakości usług, które oferują.
            </li>
            <li>
              <strong>Dla ekspertów i marek osobistych,</strong> gdzie logo musi
              współgrać z reputacją, jaką budujesz latami.
            </li>
            <li>
              <strong>Dla firm w rebrandingu,</strong> które zmieniają kierunek,
              grupę docelową lub poziom usług i potrzebują nowego symbolu tej
              zmiany.
            </li>
          </ul>
        </SectionInfo>

        <Divider line />

        <SectionInfo
          title='Jakie efekty możesz zobaczyć po wdrożeniu nowego logo?'
          subtitle='Efekty po wdrożeniu'
        >
          <ul className='ml-5 list-disc space-y-2'>
            <li>
              <strong>Spójny wizerunek na wszystkich nośnikach</strong> - od
              strony WWW, przez media społecznościowe, po druk.
            </li>
            <li>
              <strong>Łatwiejsze tworzenie materiałów,</strong> bo logo wyznacza
              kierunek dla kolorów, typografii i stylu.
            </li>
            <li>
              <strong>Wyższe postrzegane zaufanie,</strong> co ułatwia domykanie
              sprzedaży i podnoszenie stawek.
            </li>
            <li>
              <strong>Większa rozpoznawalność,</strong> gdy ten sam znak
              konsekwentnie pojawia się w wielu miejscach.
            </li>
          </ul>
        </SectionInfo>

        <Divider line />

        <TestimonialsCarousel />

        <Divider line />

        <SectionPrices
          title='Projekt logo - przykładowe pakiety'
          plans={[
            {
              name: 'Pakiet Start - logo dla nowej marki',
              price: 'wycena indywidualna',
              description:
                'Dla jednoosobowych działalności i małych firm, które potrzebują solidnego znaku na start.',
              features: [
                'Krótkie konsultacje i brief online',
                '2-3 wstępne kierunki logo do wyboru',
                'Dopracowanie wybranego kierunku',
                'Wersje na jasne i ciemne tło',
                'Pliki PNG i SVG do użycia online',
              ],
              btnOne: 'Zamów wycenę pakietu Start',
              btnOneHref: '#kontakt',
            },
            {
              name: 'Pakiet Standard - logo + mini-księga znaku',
              price: 'wycena indywidualna',
              description:
                'Dla firm, które chcą mieć logo oraz podstawowe zasady jego stosowania w jednym miejscu.',
              features: [
                'Wszystko z pakietu Start, a dodatkowo:',
                'Wersje poziome i pionowe logo',
                'Wersje kolorystyczne i monochromatyczne',
                'Podstawowa mini-księga znaku (pole ochronne, minimalne wymiary, tła)',
                'Pliki wektorowe (AI, EPS, SVG) do druku i produkcji',
              ],
              btnOne: 'Zamów wycenę pakietu Standard',
              btnOneHref: '#kontakt',
            },
            {
              name: 'Pakiet Pro - logo i system identyfikacji',
              price: 'wycena indywidualna',
              description:
                'Dla marek, które chcą od razu zbudować szerszy system wizualny: logo, podstawowe materiały i spójne zasady.',
              features: [
                'Wszystko z pakietu Standard, a dodatkowo:',
                'Rozszerzona mini-księga znaku (kolory, typografia, przykładowe zastosowania)',
                'Propozycje zastosowań na wizytówkach, papierze firmowym czy mediach społecznościowych',
                'Zestaw plików przygotowany pod dalszy rozwój identyfikacji',
                'Rekomendacje co do kolejnych kroków (strona, materiały drukowane, media społecznościowe)',
              ],
              btnOne: 'Porozmawiajmy o pakiecie Pro',
              btnOneHref: '#kontakt',
            },
          ]}
          legalNote='Ostateczna wycena zależy m.in. od liczby kierunków, zakresu księgi znaku oraz dodatkowych materiałów. Po krótkim briefie przygotujemy dopasowaną, klarowną propozycję.'
        />

        <Divider line />

        <WorkSteps variant='design' />

        <Divider line />

        <SectionContactForm
          title='Sprawdź koszt realizacji logo'
          description='Napisz czym zajmuje się Twoja firma i jaki typ znaku Ci się podoba (symbol, logotyp, monogram) - otrzymasz darmową wycenę realizacji.'
          imageSrc='/assets/projects/finish-masters/logo/logo-finish-masters-case-study.webp'
          imageAlt='Realizacja projektu logo - Finish Masters'
          defaultSubject='Projekt logo'
        />

        <Divider line />

        <SectionFaqPanels
          defaultOpenIndex={1}
          title='Najczęstsze pytania dotyczące projektów logo'
          pageUrl='https://www.arteonagency.pl/uslugi/projekty-graficzne/projekt-logo'
          items={[
            {
              question: 'Ile kosztuje profesjonalne logo?',
              answer:
                'Cena logo zależy od zakresu pracy: liczby wariantów, wersji kolorystycznych i dodatkowych adaptacji. Dokładną wycenę przygotowujemy po zapoznaniu się z Twoją ofertą, wizją oraz docelowymi klientami.',
            },
            {
              question: 'Jak długo trwa realizacja projektu logo?',
              answer:
                'Standardowy proces trwa około 5-10 dni roboczych, w zależności od liczby kierunków i rund poprawek. Przy pilnych zleceniach możemy zaproponować tryb ekspresowy.',
            },
            {
              question: 'W jakich formatach otrzymam logo?',
              answer:
                'Otrzymasz pliki wektorowe oraz rastrowe w wysokiej rozdzielczości - w wersjach kolorystycznych, monochromatycznych oraz na jasne i ciemne tło, wraz z mini-księgą znaku.',
            },
            {
              question: 'Czy mogę zgłosić poprawki do logo?',
              answer:
                'Tak, w standardowym pakiecie uwzględniamy minimum jedną rundę korekt. Razem dopracujemy kształt, proporcje i detale, aby efekt odpowiadał Twojej wizji.',
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
              answer:
                'Tak, po finalizacji projektu przekazujemy Ci pełne prawa autorskie majątkowe do logo oraz komplet plików źródłowych. Możesz swobodnie korzystać z niego w materiałach własnych.',
            },
            {
              question: 'Czy oferujecie ekspresową realizację logo?',
              answer:
                'Tak, dla projektów priorytetowych proponujemy tryb ekspresowy. Zakres, czas i koszt ustalamy indywidualnie przed rozpoczęciem pracy.',
            },
          ]}
        />

        <Divider line />

        <SectionBento
          title='Poznaj inne usługi'
          items={[
            {
              title: 'Identyfikacja wizualna',
              size: 'large',
              backgroundImage:
                '/assets/projects/stepard/logo/mockup-logo-stepard.webp',
              btnLabel: 'Sprawdź ofertę',
              btnLink:
                '/uslugi/projekty-graficzne/projekt-identyfikacji-wizualnej',
            },
            {
              title: 'Projekt wizytówki',
              size: 'medium',
              backgroundImage:
                '/assets/projects/finish-masters/wizytowki/mockup-wizytowki-finish-masters.webp',
              btnLabel: 'Sprawdź ofertę',
              btnLink: '/uslugi/projekty-graficzne/projekt-wizytowki',
            },
            {
              title: 'Strony internetowe',
              size: 'small',
              backgroundImage:
                '/assets/projects/izoluk/strona-internetowa-firma-budowlana-ocieplenia-izoluk-mockup-realizacja-arteon.webp',
              btnLabel: 'Sprawdź ofertę',
              btnLink: '/uslugi/tworzenie-stron-wordpress',
            },
            {
              title: 'Sklepy internetowe',
              size: 'small',
              backgroundImage:
                '/assets/projects/trilllizo/moskup-strony-trilllizo.webp',
              btnLabel: 'Sprawdź ofertę',
              btnLink: '/uslugi/sklepy-internetowe',
            },
          ]}
        />

        <Divider line />

        <ArticlesCarousel
          title='Przydatne artykuły dotyczące projektów graficznych'
          categorySlug='grafika'
          articles={getArticlePreviewsByCategory('grafika', 6)}
        />

        <Divider size='sm' />
      </Wrapper>

      <CTABanner
        title='Znak, który prowadzi markę'
        description='Stworzymy logo, które zostaje w pamięci i kreuje profesjonalny wizerunek.'
        btnOne='Skontaktuj się'
        btnOneHref='#kontakt'
        btnTwo='Poznaj usługi graficzne'
        btnTwoHref='/uslugi/projekty-graficzne'
        backgroundImage='/assets/projects/finish-masters/logo/logo-finish-masters-case-study.webp'
        overlay='black'
      />

      <ServiceSchema />
    </>
  );
}
