import Image from 'next/image';
import Link from 'next/link';
import {
  RiBuilding2Line,
  RiTruckLine,
  RiMedalLine,
  RiShieldCheckLine,
  RiPagesLine,
  RiArticleLine,
  RiPencilRuler2Line,
  RiCheckDoubleLine,
  RiLayoutLine,
  RiMailSendLine,
  RiCustomerService2Line,
  RiWordpressLine,
  RiReactjsLine,
  RiSecurePaymentLine,
  RiPriceTag3Line,
  RiKey2Line,
} from 'react-icons/ri';
import Divider from '@/components/atoms/Divider';
import { JsonLd } from '@/components/atoms/JsonLd';
import Wrapper from '@/components/atoms/Wrapper';
import Breadcrumbs from '@/components/molecules/BreadCrumbs';
import BenefitBelt from '@/components/organisms/BenefitBelt';
import ArticlesCarousel from '@/components/organisms/carousels/ArticlesCarousel';
import ProjectsCarousel from '@/components/organisms/carousels/ProjectsCarousel';
import TestimonialsCarousel from '@/components/organisms/carousels/TestimonialsCarousel';
import CTABanner from '@/components/organisms/CTABanner';
import FeatureGrid from '@/components/organisms/FeatureGrid';
import HeroBanner from '@/components/organisms/HeroBanner';
import SectionBar from '@/components/organisms/sections/SectionBar';
import SectionBasic from '@/components/organisms/sections/SectionBasic';
import SectionBento from '@/components/organisms/sections/SectionBento';
import SectionContactForm from '@/components/organisms/sections/SectionContactForm';
import SectionFaqPanels from '@/components/organisms/sections/SectionFaqPanels';
import SectionInfo from '@/components/organisms/sections/SectionInfo';
import SectionPrices from '@/components/organisms/sections/SectionPrices';
import SectionSteps from '@/components/organisms/sections/SectionSteps';
import SectionTimeline from '@/components/organisms/sections/SectionTimeline';
import { getArticlePreviewsByCategory } from '@/lib/blogDataService';
import { cn } from '@/lib/clsx';
import { buildServiceSchema } from '@/lib/seo/serviceSchema';
import { normalIconSizeClasses } from '@/lib/uiClasses';

export const metadata = {
  title: 'Strona internetowa dla firmy budowlanej | Arteon',
  description:
    'Tworzymy, modernizujemy i pozycjonujemy strony dla firm budowlanych - budowa domów i obiektów, stany surowe, dachy, fundamenty oraz generalne wykonawstwo. Wszystko czego potrzebuje Twoja firma - dokumentacja etapów budowy, prezentacja sprzętu, uprawnień i ubezpieczenia OC, formularz zapytania, pozycjonowanie lokalne, indywidualny projekt i nowoczesna technologia.',
  alternates: {
    canonical:
      'https://www.arteonagency.pl/uslugi/strona-internetowa-dla-firmy-budowlanej',
  },
  openGraph: {
    title: 'Strona internetowa dla firmy budowlanej | Arteon',
    description:
      'Tworzymy, modernizujemy i pozycjonujemy strony dla firm budowlanych - budowa domów i obiektów, stany surowe, dachy, fundamenty oraz generalne wykonawstwo. Wszystko czego potrzebuje Twoja firma - dokumentacja etapów budowy, prezentacja sprzętu, uprawnień i ubezpieczenia OC, formularz zapytania, pozycjonowanie lokalne, indywidualny projekt i nowoczesna technologia.',
    url: 'https://www.arteonagency.pl/uslugi/strona-internetowa-dla-firmy-budowlanej',
    type: 'website',
    images: [
      {
        url: 'https://www.arteonagency.pl/assets/projects/izoluk/strona-internetowa-firma-budowlana-ocieplenia-izoluk-mockup-realizacja-arteon.webp',
        width: 1200,
        height: 630,
      },
    ],
  },
} as const;

const FAQ_ITEMS = [
  {
    question: 'Ile kosztuje strona internetowa dla firmy budowlanej?',
    answer:
      'Cena zależy od liczby podstron i funkcji, które chcesz mieć na stronie. Standardowo strona dla firmy budowlanej u nas kosztuje od 2 200 do 4 200 zł brutto. W tej cenie otrzymujesz indywidualny projekt, dokumentację etapów budowy, sekcję uprawnień i ubezpieczenia, formularz zapytania, osobne podstrony usług i optymalizację pod SEO lokalne. Każdą realizację wyceniamy indywidualnie, dopasowując do Twoich potrzeb.',
  },
  {
    question: 'Mam już stronę. Lepiej ją przebudować, czy zrobić nową?',
    answer:
      'To zależy od stanu obecnej witryny, technologii, w jakiej jest zrobiona, i tego, co chcesz zmienić. Jeśli obecna strona wolno się wczytuje albo słabo wypada w Google, bo w Twoim regionie jest duża konkurencja, zwykle warto przejść na nowocześniejsze rozwiązanie, które pozwala na pełne pozycjonowanie bez opłat za wtyczki. Tak zrobiliśmy dla firmy budowlanej Izoluk - starą stronę na Wix zamieniliśmy na nowoczesną witrynę nastawioną na pozyskiwanie zleceń. Po rozmowie i spojrzeniu na obecną witrynę powiemy Ci, które rozwiązanie przyniesie w Twoim przypadku najlepszy efekt.',
  },
  {
    question:
      'Mam mało zdjęć z budów i nie mam czasu napisać tekstów, czy możecie pomóc?',
    answer:
      'Tak, to bardzo częsta sytuacja. Pomagamy przygotować teksty opisujące Twoje usługi, sprzęt i doświadczenie, a także doradzamy, jak fotografować kolejne etapy budowy, żeby najlepiej pokazywały technologię, precyzję i porządek na placu budowy.',
  },
  {
    question: 'Czy na stronie będzie formularz wyceny?',
    answer:
      'Tak, w formie dopasowanej do budownictwa. Budowy nie da się rzetelnie wycenić z metrów w kilka sekund, dlatego pytamy o to, co ma znaczenie na tym etapie - czy inwestor ma już projekt budowlany, czy szuka generalnego wykonawcy, na jakim etapie jest budowa oraz czy rozliczenie ma być transzowe za poszczególne etapy. Dzięki temu od razu dostajesz konkretne informacje o inwestycji.',
  },
  {
    question:
      'Czy pokażecie na stronie nasze uprawnienia, ubezpieczenie i sprzęt?',
    answer:
      'Tak, to jeden z najważniejszych elementów strony budowlanej. Budujemy osobne sekcje prezentujące uprawnienia budowlane, kierownika budowy w zespole, certyfikaty, ubezpieczenie OC firmy oraz zaplecze techniczne, takie jak koparki, szalunki czy rusztowania. To buduje autorytet firmy i daje inwestorowi pewność, że powierza budowę profesjonalistom.',
  },
  {
    question: 'Jak długo trwa realizacja i czy muszę płacić z góry?',
    answer:
      'Standardowy czas realizacji od pierwszej rozmowy do publikacji wynosi od 5 do 14 dni roboczych, zależnie od liczby podstron i tego, jak szybko skompletujemy materiały. Nie pobieramy zaliczek - fakturę wystawiamy dopiero po publikacji i Twojej pełnej akceptacji strony. Zanim cokolwiek zapłacisz, widzisz projekt wyglądu witryny, a po publikacji masz jeszcze czas na poprawki.',
  },
  {
    question: 'Czy sprawicie, że strona będzie widoczna w Google?',
    answer:
      'Tak, pozycjonowanie to jedna z naszych specjalizacji. Budujemy osobne podstrony dla poszczególnych usług, takich jak stany surowe, dachy czy ocieplenia, dzięki czemu strona trafia na frazy, które realnie wpisują inwestorzy szukający wykonawcy w Twojej okolicy. Po uruchomieniu możemy zająć się pełnym pozycjonowaniem i prowadzeniem bloga, który przyciąga klientów szukających konkretnych prac budowlanych.',
  },
  {
    question:
      'Czy będę mógł samodzielnie dodawać realizacje i edytować stronę?',
    answer:
      'Tak. Stronę przygotowujemy tak, abyś bez znajomości kodu mógł dodawać nowe realizacje i zmieniać treści. Na życzenie przygotowujemy dedykowane szkolenie z obsługi. Możemy też przejąć prowadzenie strony i pozycjonowanie w całości, dzięki czemu zaoszczędzisz swój czas.',
  },
];

function ServiceSchema() {
  const json = buildServiceSchema({
    path: '/uslugi/strona-internetowa-dla-firmy-budowlanej',
    serviceName: 'Strona internetowa dla firmy budowlanej',
    description:
      'Tworzymy, modernizujemy i pozycjonujemy strony dla firm budowlanych - budowa domów i obiektów, stany surowe, dachy, fundamenty oraz generalne wykonawstwo. Dokumentacja etapów budowy, prezentacja sprzętu, uprawnień i ubezpieczenia, formularz zapytania, osobne podstrony usług, pozycjonowanie lokalne, indywidualny projekt i nowoczesna technologia.',
    availableLanguages: ['pl'],
    includeServiceChannel: true,
  });

  const extendedJson = {
    ...json,
    areaServed: {
      '@type': 'Language',
      name: 'Polish',
    },
    priceRange: '2200-4200+ PLN',
  };

  return (
    <JsonLd
      id='schema-service-strona-dla-firmy-budowlanej'
      schema={extendedJson}
    />
  );
}

/**
 * Offer landing page for construction company websites (heavy construction: shells, roofs,
 * foundations, general contracting, B2B / developers).
 *
 * Follows the shared offer-page blueprint (docs/WZORZEC-STRONY-OFERTOWEJ-BRANZOWEJ.md) and the house
 * voice: end client first, then "dlatego we do X", warm second person, honest, dual benefit (client
 * trust + Google). Deliberately differentiated from the finishing/renovation page: build-stage
 * documentation, equipment, permits/certificates, OC insurance/BHP, a qualifying inquiry form
 * (project, general contractor, staged settlement) instead of a simple m2 calculator. Based on Izoluk.
 */
export default function StronaDlaFirmyBudowlanejPage() {
  return (
    <>
      <HeroBanner
        title='Strona internetowa dla firmy budowlanej'
        description={
          <>
            Tworzymy, modernizujemy i pozycjonujemy strony dla firm budowlanych
            - budowa domów i obiektów, stany surowe, dachy, fundamenty oraz
            generalne wykonawstwo. Projektujemy je tak, aby inwestor od
            pierwszego wejścia zobaczył, że Twoja firma ma doświadczenie,
            uprawnienia i zaplecze do poprowadzenia całej inwestycji.
          </>
        }
        backgroundImage='/assets/projects/izoluk/strona-internetowa-firma-budowlana-ocieplenia-izoluk-mockup-realizacja-arteon.webp'
        overlay='black'
        secondaryCtaLabel='Darmowa wycena'
        secondaryCtaHref='#kontakt'
        reputation
      />

      <BenefitBelt variant='carousel' />

      <Breadcrumbs
        second={{ href: '/uslugi', label: 'Usługi' }}
        third={{
          href: '/uslugi/strona-internetowa-dla-firmy-budowlanej',
          label: 'Strona dla firmy budowlanej',
        }}
        includeJsonLd
      />

      <Wrapper>
        <Divider size='xs' />

        <ProjectsCarousel
          secondaryTitle='Od prostych wizytówek, przez rozbudowane strony, do pełnych identyfikacji wizualnych'
          title='Nasze realizacje stron internetowych'
          category='strony'
        />

        <Divider line />

        <SectionBasic
          title='Rozumiemy Twoją pracę i potrzeby Twoich inwestorów oraz klientów indywidualnych'
          imageSrc='/assets/projects/stepard/strona/moskup-strony-stepard.webp'
          imageAlt='Wizualizacja realizacji strony internetowej dla firmy produkcyjno-budowlanej StepArd'
        >
          <p>
            <strong>
              Inwestor powierza budowę firmie, która udowodni, że posiada
              odpowiednie doświadczenie, uprawnienia oraz zaplecze do
              poprowadzenia całej inwestycji.
            </strong>
          </p>
          <br />
          <p>
            Budowa domu czy obiektu to inwestycja, która trwa wiele miesięcy a
            nawet lata i kosztuje dużo pieniędzy, dlatego klient przede
            wszystkim chce mieć pewność, że firma zrobi to fachowo i zgodnie z
            prawem budowlanym. Zanim się odezwie, sprawdza realizacje z placu
            budowy, uprawnienia, ubezpieczenie oraz to, jak firma rozlicza
            kolejne etapy prac.
          </p>
          <br />
          <p>
            Dzięki realizacjom dla firm budowlanych, takich jak Izoluk, wiemy,
            na co zwracają uwagę zarówno Twoi inwestorzy, jak i Google, co
            przekładamy na konkretne elementy strony oraz całą strategię
            pozyskiwania zleceń w sieci.
          </p>
        </SectionBasic>

        <Divider line />

        <TestimonialsCarousel />

        <Divider line />

        <FeatureGrid
          title='Co zawiera nasza oferta stron dla firm budowlanych?'
          description='Wszystko czego potrzebuje Twoja firma, aby inwestor od pierwszego wejścia zobaczył doświadczenie, uprawnienia i zaplecze do poprowadzenia całej inwestycji.'
          variant='centered'
          columns={3}
          items={[
            {
              title: 'Dokumentacja etapów budowy',
              description: (
                <p>
                  Przy stanach surowych czy dachach inwestor chce zobaczyć plac
                  budowy: fundamenty, zbrojenia, deskowanie i kolejne etapy
                  prac. To dla niego dowód fachowości. Dlatego budujemy galerię
                  lub osobne podstrony dokumentujące etapy poszczególnych
                  realizacji, które pokazują zastosowaną technikę, precyzję
                  konstrukcyjną i porządek na budowie, które dodatkowo pokazują
                  się na frazy typu budowa domu czy stan surowy w Twoim
                  regionie.
                </p>
              ),
              icon: (
                <RiBuilding2Line
                  className={cn('text-primary', normalIconSizeClasses)}
                />
              ),
            },
            {
              title: 'Zaplecze techniczne i sprzęt',
              description: (
                <p>
                  Inwestor stawiający dom czy halę sprawdza, czy firma ma
                  zaplecze, żeby udźwignąć całą budowę. Z myślą o tym
                  eksponujemy Twój sprzęt, taki jak koparki, szalunki i
                  rusztowania, oraz zespół, który realizuje prace. To pokazuje,
                  że masz wszystko, czego trzeba, aby poprowadzić inwestycję od
                  początku do końca.
                </p>
              ),
              icon: (
                <RiTruckLine
                  className={cn('text-primary', normalIconSizeClasses)}
                />
              ),
            },
            {
              title: 'Uprawnienia, certyfikaty i normy',
              description: (
                <p>
                  Przy dużej inwestycji klient chce mieć pewność, że budowa
                  przebiegnie zgodnie z prawem budowlanym. Dlatego prezentujemy
                  Twoje uprawnienia budowlane, kierownika budowy w zespole,
                  certyfikaty i znajomość norm. To buduje autorytet firmy i daje
                  inwestorowi pewność, że powierza budowę profesjonalistom.
                </p>
              ),
              icon: (
                <RiMedalLine
                  className={cn('text-primary', normalIconSizeClasses)}
                />
              ),
            },
            {
              title: 'Ubezpieczenie OC i bezpieczeństwo prac',
              description: (
                <p>
                  Przy pracach na wysokości i głębokich wykopach inwestor chce
                  mieć pewność że wszystko jest bezpieczne. Dlatego eksponujemy
                  ubezpieczenie OC firmy, na przykład do 1 mln zł, oraz zasady
                  BHP na budowie. To podnosi wiarygodność firmy i daje
                  inwestorowi dodatkową pewność.
                </p>
              ),
              icon: (
                <RiShieldCheckLine
                  className={cn('text-primary', normalIconSizeClasses)}
                />
              ),
            },
            {
              title: 'Osobne podstrony usług',
              description: (
                <p>
                  Klient rzadko wpisuje ogólne frazy jak firma budowlana,
                  częściej wpisuje konkretną usługę, jak stan surowy, więźba i
                  pokrycie dachu, fundamenty czy ocieplenie. Dlatego budujemy
                  osobne podstrony dla każdej usługi. Każda trafia do
                  konkretnego klienta i pojawia się precyzyjnie na odpowiednie
                  frazy w wyszukiwarce.
                </p>
              ),
              icon: (
                <RiPagesLine
                  className={cn('text-primary', normalIconSizeClasses)}
                />
              ),
            },
            {
              title: 'Blog i poradniki budowlane',
              description: (
                <p>
                  Inwestorzy na długo przed budową szukają w Google odpowiedzi,
                  na przykład o etapy budowy domu, prawo budowlane,
                  dofinansowania do ocieplenia czy ogólny koszt przeprowadzenia
                  budowy w aktualnym roku i w danym regionie. Dlatego pomagamy
                  prowadzić blog z poradnikami, które budują Twoją pozycję
                  eksperta i przyciągają klientów z wyszukiwarki, zanim jeszcze
                  podejmą ostateczną decyzję.
                </p>
              ),
              icon: (
                <RiArticleLine
                  className={cn('text-primary', normalIconSizeClasses)}
                />
              ),
            },
          ]}
        />

        <Divider line />

        <SectionInfo
          title='Tak zmieniamy strony'
          subtitle='Przebudowa i modernizacja'
        >
          <p>
            Jeśli masz już stronę, która wygląda kiepsko albo nie przynosi Ci
            klientów, przebudowujemy ją od podstaw. Zobacz, jak zmieniliśmy
            stronę firmy budowlanej Izoluk, specjalizującej się w ociepleniach
            budynków - ze starej witryny na Wix na nowoczesną stronę nastawioną
            na pozyskiwanie zleceń.
          </p>
          <div className='mt-6 grid grid-cols-1 gap-4 md:grid-cols-2'>
            <figure>
              <div className='relative aspect-16/10 overflow-hidden'>
                <Image
                  src='/assets/projects/izoluk/strona-internetowa-firma-budowlana-ocieplenia-izoluk-wczesniejszy-wyglad-strony-stworzony-w-wix.webp'
                  alt='Stara strona firmy budowlanej Izoluk zbudowana na Wix - przed przebudową'
                  fill
                  className='object-contain p-2'
                  sizes='(min-width:768px) 50vw, 100vw'
                />
              </div>
              <figcaption className='mt-2 text-center text-xs text-light'>
                Przed - stara strona na Wix
              </figcaption>
            </figure>
            <figure>
              <div className='relative aspect-16/10 overflow-hidden'>
                <Image
                  src='/assets/projects/izoluk/strona-internetowa-firma-budowlana-ocieplenia-izoluk-projekt-realizacji-stworzony-w-figma.webp'
                  alt='Nowa strona firmy budowlanej Izoluk zaprojektowana przez Arteon - po przebudowie'
                  fill
                  className='object-contain p-2'
                  sizes='(min-width:768px) 50vw, 100vw'
                />
              </div>
              <figcaption className='mt-2 text-center text-xs text-light'>
                Po - nowa strona od Arteon
              </figcaption>
            </figure>
          </div>
        </SectionInfo>

        <Divider line />

        <SectionBasic
          title='Co jeszcze zyskujesz?'
          imageSrc='/assets/projects/napilota/mockup-strony-napilota.webp'
          imageAlt='Wizualizacja realizacji strony internetowej dla firmy NaPilota'
          btnOne='Darmowa wycena'
          btnOneHref='#kontakt'
        >
          <p>
            Specjalizujemy się nie tylko w budowie stron www ale również w
            projektach graficznych oraz pozycjonowaniu. Możemy zaprojektować dla
            Ciebie{' '}
            <Link
              prefetch={false}
              className='inline-link'
              href='/uslugi/projekty-graficzne/projekt-logo'
            >
              logo
            </Link>
            ,{' '}
            <Link
              prefetch={false}
              className='inline-link'
              href='/uslugi/projekty-graficzne/projekt-wizytowki'
            >
              wizytówki
            </Link>{' '}
            i materiały reklamowe, zająć się pozycjonowaniem strony i
            prowadzeniem bloga, który przyciąga inwestorów szukających
            konkretnych prac. Współpracujemy z firmami budowlanymi i
            wykończeniowymi w całej Polsce.
          </p>
          <br />
          <p>
            Rozumiemy również że każda firma działa inaczej - inaczej wygląda
            strona małej ekipy budowlanej, a inaczej generalnego wykonawcy
            realizującego duże inwestycje. Dlatego ofertę dopasowujemy do skali
            Twojej działalności, niezależnie od tego, czy dopiero zaczynasz, czy
            masz już zespół, sprzęt i portfolio realizacji.
          </p>
          <br />
          <p>
            Jeśli działasz jako generalny wykonawca lub realizujesz całe
            inwestycje dla deweloperów, przygotujemy stronę nastawioną na
            współpracę B2B - z portfolio zrealizowanych inwestycji i sekcją
            skierowaną do firm zamiast do klientów indywidualnych.
          </p>
        </SectionBasic>

        <Divider line />

        <SectionTimeline
          title='Jak wygląda współpraca?'
          items={[
            {
              icon: <RiPencilRuler2Line className={normalIconSizeClasses} />,
              title: 'Rozmowa',
              description:
                'W pierwszej kolejności chcemy dokładnie poznać Twoją firmę, aby jak najlepiej dopasować ofertę. Opowiadasz o zakresie usług, obszarze działania, zapleczu i typie inwestycji, które realizujesz. Na tej podstawie przygotowujemy ofertę oraz plan działania, z myślą o Twoich celach.',
            },
            {
              icon: <RiCheckDoubleLine className={normalIconSizeClasses} />,
              title: 'Projekt',
              description:
                'Po omówieniu celów przechodzimy do projektu Twojej strony. Przygotowujemy propozycję wyglądu witryny z myślą o odbiorze przez inwestorów i nastawieniu na wysoki wynik w Google. Udostępniamy Ci link do projektu, na który możesz nanieść uwagi, omawiamy go i tłumaczymy, jakie korzyści dadzą poszczególne elementy. Pomagamy też przygotować opisy usług i realizacji.',
            },
            {
              icon: <RiLayoutLine className={normalIconSizeClasses} />,
              title: 'Realizacja',
              description:
                'Po pełnej akceptacji projektu przechodzimy do realizacji - budujemy stronę, konfigurujemy formularze, galerię dokumentującą etapy budowy i osobne podstrony usług. Wdrażamy sprawdzone techniki pozycjonowania i testujemy stronę na wszystkich urządzeniach.',
            },
            {
              icon: <RiMailSendLine className={normalIconSizeClasses} />,
              title: 'Odbiór i publikacja',
              description:
                'Po realizacji prezentujemy gotową witrynę, konfigurujemy narzędzia analityczne oraz zabezpieczenia i dajemy Ci pełen dostęp do wszystkiego. Po tym masz czas na wdrożenie wszelkich uwag. Fakturę wystawiamy po zakończeniu prac.',
            },
            {
              icon: (
                <RiCustomerService2Line className={normalIconSizeClasses} />
              ),
              title: 'Dalsze wsparcie',
              description:
                'Na koniec możesz zdecydować, czy chcesz samodzielnie prowadzić stronę, czy zlecić nam jej obsługę. Możemy zająć się jej pozycjonowaniem, wesprzeć w prowadzeniu bloga czy promocji w mediach społecznościowych.',
            },
          ]}
        />

        <Divider line />

        <SectionInfo
          title='Formularz, który przysyła gotowych inwestorów'
          subtitle='Zapytania od inwestorów gotowych do budowy'
        >
          <p>
            Budowy nie da się rzetelnie wycenić w kilka sekund, dlatego budujemy
            formularz dopasowany do budownictwa, które ułatwią Ci stworzenie
            wyceny. Pytamy o to, co naprawdę ma znaczenie - czy inwestor ma już
            projekt budowlany, czy szuka generalnego wykonawcy, na jakim etapie
            jest budowa oraz czy rozliczenie ma być transzowe za poszczególne
            etapy prac.
          </p>
          <br />
          <p>
            Dzięki temu trafiają do Ciebie zapytania od inwestorów, którzy
            realnie planują budowę i wiedzą, czego potrzebują. Przy usługach,
            które da się policzyć z powierzchni, jak ocieplenie czy elewacja,
            dokładamy kalkulator pokazujący orientacyjne widełki lub dedykowane
            do danej usługi formularze.
          </p>
        </SectionInfo>

        <Divider line />

        <SectionBar title='Jasne gwarancje, jasne zasady' />

        <div>
          <FeatureGrid
            variant='bare'
            columns={4}
            items={[
              {
                icon: <RiPencilRuler2Line className={normalIconSizeClasses} />,
                title: 'Indywidualne projekty',
                description:
                  'Wszystko projektujemy od zera - nie używamy gotowych szablonów, dzięki czemu Twoja strona, sklep czy projekt graficzny jest w pełni unikalny i dopasowany do Twojej firmy oraz grupy docelowej.',
              },
              {
                icon: <RiSecurePaymentLine className={normalIconSizeClasses} />,
                title: 'Brak zaliczek',
                description:
                  'Nie pobieramy zaliczek dla projektów do 5 tysięcy złotych brutto. Fakturę wystawiamy tylko po zakończeniu prac lub po zakończeniu poszczególnych etapów w przypadku większych projektów.',
              },
              {
                icon: <RiPriceTag3Line className={normalIconSizeClasses} />,
                title: 'Brak opłat abonamentowych',
                description:
                  'Nie pobieramy comiesięcznych opłat za stworzone witryny. Płacisz jednorazowo, za samą realizację a w przypadku dłuższych współprac, prace zawsze rozliczamy zadaniowo. Cenimy transparencję.',
              },
              {
                icon: <RiKey2Line className={normalIconSizeClasses} />,
                title: 'Pełna własność',
                description:
                  'Wszystko co stworzymy staje się Twoją własnością. Otrzymujesz stronę, dostępy do wszelkich zintegrowanych platform oraz pliki źródłowe. Możemy również przygotować umowę, która dodatkowo zabezpiecza Twoje prawa.',
              },
            ]}
          />
        </div>

        <Divider line />

        <SectionPrices
          id='pricing-budowlana'
          title='Ile kosztuje strona internetowa dla firmy budowlanej?'
          description='Każdą realizację wyceniamy indywidualnie, jednak abyś miał punkty odniesienia, przygotowaliśmy trzy przykładowe pakiety.'
          plans={[
            {
              name: 'Strona wizytówka',
              badgeLabel: 'Minimum',
              technology: 'WordPress',
              price: '2 200 - 2 800 zł',
              description:
                'Dla firmy, która chce solidnej strony z ofertą, realizacjami i formularzem zapytania.',
              features: [
                'Strona główna, podstrony ofertowe, o firmie i kontakt',
                'Sekcja uprawnień, certyfikatów i ubezpieczenia',
                'Formularz dopasowany do typu realizowanych budynków',
                'Panel do samodzielnej edycji',
              ],
              btnOne: 'Darmowa wycena',
              btnOneHref: '#kontakt',
            },
            {
              name: 'Strona z pozycjonowaniem',
              badgeLabel: 'Business',
              technology: 'WordPress',
              price: '3 500 - 4 800 zł',
              description:
                'Dla firmy, która chce pozyskiwać zlecenia z Google, także we współpracy B2B.',
              features: [
                'Wszystko z pakietu strony wizytówki',
                'Więcej osobnych podstron dla poszczególnych usług',
                'Rozbudowana galeria według typu prac i inwestycji',
                'Analiza konkurencji i strategia SEO',
                'Pozycjonowanie stron ofertowych i SEO lokalne',
                'Konfiguracja bloga eksperckiego',
              ],
              btnOne: 'Darmowa wycena',
              btnOneHref: '#kontakt',
              lastPlan: true,
            },
            {
              name: 'Strona w technologii Next.js',
              badgeLabel: 'Pro',
              technology: 'Next.js',
              price: 'od 8 000 zł',
              description:
                'Dla firmy, która chce najszybszej strony i pewności pozycji na frazy o wysokiej wartości.',
              features: [
                'Wszystko z pakietu z pozycjonowaniem',
                'Błyskawiczna prędkość (Core Web Vitals) jako przewaga w Google',
                'Największa pewność wysokiej pozycji na trudne frazy B2B',
                'Możliwość zbudowania dedykowanych narzędzi i rozwiązań dla Twoich klientów oraz zespołu',
              ],
              btnOne: 'Darmowa wycena',
              btnOneHref: '#kontakt',
            },
          ]}
          note={{
            title: 'Licencja i wsparcie w cenie',
            badgeLabel: 'Elementor Pro gratis',
            text: 'Do stron w WordPressie licencję Elementor Pro dodajemy w cenie realizacji. Po publikacji dostajesz 60 dni gwarancji oraz bezpłatne wsparcie przy drobnych zmianach.',
          }}
        />

        <Divider line />

        <SectionFaqPanels
          variant='offer'
          defaultOpenIndex={1}
          pageUrl='https://www.arteonagency.pl/uslugi/strona-internetowa-dla-firmy-budowlanej'
          title='Najczęstsze pytania o stronę dla firmy budowlanej'
          items={FAQ_ITEMS}
        />

        <Divider line />

        <SectionContactForm
          title='Darmowa wycena'
          imageSrc='/assets/projects/izoluk/strona-internetowa-firma-budowlana-ocieplenia-izoluk-mockup-realizacja-arteon.webp'
          imageAlt='Realizacja strony dla firmy budowlanej Izoluk - mockup'
          defaultSubject='Strona internetowa dla firmy budowlanej'
          messagePlaceholder='Napisz co chcesz zrealizować'
        />

        <Divider line />

        <SectionSteps
          title='W jakiej technologii budujemy strony internetowe?'
          description='Tworzymy witryny w różnych technologiach ale naszą specjalizacją jest Wordpress oraz Next.js. Rozwiązanie dopasowujemy do Twoich celów i budżetu.'
          grid='two'
          items={[
            {
              icon: (
                <RiWordpressLine
                  className={cn('text-primary', normalIconSizeClasses)}
                />
              ),
              title: 'WordPress - sprawdzony standard',
              description: (
                <p>
                  Wygodny, popularny wybór, gdy zależy Ci na solidnej stronie w
                  przystępnej cenie. Możesz w wygodny i łatwy sposób
                  samodzielnie edytować treści czy dodać nową realizację.
                  Płacisz jednorazowo, bez abonamentu za samą stronę. Minus?
                  Wordpress wymaga aktualizacji i wtyczek, które często są
                  płatne. Przy zaawansowanych funkcjonalnościach koszt
                  utrzymania strony może być wysoki przez wtyczki. Strony w
                  Wordpress są też ciężkie - wczytują się wolniej a samo
                  pozycjonowanie w Google jest trudniejsze.
                </p>
              ),
            },
            {
              icon: (
                <RiReactjsLine
                  className={cn('text-primary', normalIconSizeClasses)}
                />
              ),
              title: 'Next.js - technologia przyszłości',
              description: (
                <p>
                  Wybór dla osób, które chcą maksymalnej swobody i 100% pewności
                  wysokiej pozycji w Google. Tej technologii używamy na naszej
                  witrynie. Strony w Next.js działają błyskawicznie, dają
                  największą pewność wysokiej pozycji oraz pozwalają na
                  tworzenie funkcjonalności każdego typu bez dodatkowych
                  comiesięcznych opłat - możesz mieć własne narzędzia dla
                  inwestorów i dedykowane rozwiązania, których nie ma nikt z
                  konkurencji. Minus? Strony w Next.js są droższe w realizacji,
                  bo wymagają pisania całego kodu ręcznie.
                </p>
              ),
            },
          ]}
        />

        <figure className='mx-auto mt-6 max-w-3xl'>
          <Image
            src='/assets/ahref-organic-positions-arteon-4-07-2026.png'
            alt='Przykład wzrostu widoczności w Google strony zbudowanej w technologii Next.js - dane Ahrefs dla https://www.arteonagency.pl/'
            width={946}
            height={297}
            className='h-auto w-full'
            sizes='(min-width:1024px) 48rem, 100vw'
          />
          <figcaption className='mt-2 text-center text-xs text-light'>
            Tak wygląda widoczność w Google, jaką potrafi dać strona w Next.js.
            Nasza witryna po 3 miesiącach pozycjonowania pojawia się na ponad
            900 fraz, z czego na ponad 120 jesteśmy w Top 3. Dane z Ahrefs, 4
            lipca 2026.
          </figcaption>
        </figure>

        <Divider line />

        <SectionBento
          title='Poznaj inne usługi'
          items={[
            {
              title: 'Pozycjonowanie stron',
              size: 'large',
              backgroundImage:
                '/assets/projects/jstax/moskup-strony-jstax.webp',
              btnLabel: 'Sprawdź ofertę',
              btnLink: '/uslugi/marketing/pozycjonowanie-stron',
            },
            {
              title: 'Tworzenie treści i blog',
              size: 'medium',
              backgroundImage:
                '/assets/projects/finish-masters/strona/moskup-strony-finish-masters.webp',
              btnLabel: 'Sprawdź ofertę',
              btnLink: '/uslugi/tworzenie-tresci',
            },
            {
              title: 'Projekt wizytówki',
              size: 'small',
              backgroundImage:
                '/assets/projects/stepard/wizytowki/mockup-wizytowki-stepard.webp',
              btnLabel: 'Sprawdź ofertę',
              btnLink: '/uslugi/projekty-graficzne/projekt-wizytowki',
            },
            {
              title: 'Projekt logo',
              size: 'small',
              backgroundImage: '/assets/projects/km2/mockup-logo-km2.webp',
              btnLabel: 'Sprawdź ofertę',
              btnLink: '/uslugi/projekty-graficzne/projekt-logo',
            },
          ]}
        />

        <Divider line />

        <ArticlesCarousel
          title='Przydatne artykuły dotyczące stron internetowych'
          categorySlug='strony'
          articles={getArticlePreviewsByCategory('strony', 6)}
        />

        <Divider size='sm' />
      </Wrapper>

      <CTABanner
        title='Zbudujmy stronę, która przynosi Twojej firmie zlecenia'
        description='Darmowa wycena. Doradzimy najlepsze rozwiązanie, pokażemy możliwości i przygotujemy bezpłatną wycenę.'
        btnOne='Darmowa wycena'
        btnOneHref='#kontakt'
        backgroundImage='/assets/projects/stepard/strona/moskup-strony-stepard.webp'
        overlay='black'
      />

      <ServiceSchema />
    </>
  );
}
