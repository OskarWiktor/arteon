import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import {
  RiDraftLine,
  RiImage2Line,
  RiPagesLine,
  RiShieldCheckLine,
  RiMapPin2Line,
  RiPhoneLine,
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
import Wrapper from '@/components/atoms/Wrapper';
import Breadcrumbs from '@/components/molecules/BreadCrumbs';
import BenefitBelt from '@/components/organisms/BenefitBelt';
import ArticlesCarousel from '@/components/organisms/carousels/ArticlesCarousel';
import ProjectsCarousel from '@/components/organisms/carousels/ProjectsCarousel';
import TestimonialsCarousel from '@/components/organisms/carousels/TestimonialsCarousel';
import CTABanner from '@/components/organisms/CTABanner';
import FeatureGrid from '@/components/organisms/FeatureGrid';
import HeroBanner from '@/components/organisms/HeroBanner';
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
  title: 'Strona internetowa dla firmy wykończeniowej i remontowej | Arteon',
  description:
    'Tworzymy, modernizujemy i pozycjonujemy strony dla firm wykończeniowych i remontowych - wykończenia i remonty mieszkań, domów, inwestycji deweloperskich i lokali usługowych. Wszystko czego potrzebuje Twoja firma - formularz wyceny, galeria realizacji przed i po, osobne podstrony usług, pozycjonowanie lokalne, indywidualny projekt i nowoczesna technologia.',
  alternates: {
    canonical:
      'https://www.arteonagency.pl/uslugi/strona-internetowa-dla-firmy-wykonczeniowej',
  },
  openGraph: {
    title: 'Strona internetowa dla firmy wykończeniowej i remontowej | Arteon',
    description:
      'Tworzymy, modernizujemy i pozycjonujemy strony dla firm wykończeniowych i remontowych - wykończenia i remonty mieszkań, domów, inwestycji deweloperskich i lokali usługowych. Wszystko czego potrzebuje Twoja firma - formularz wyceny, galeria realizacji przed i po, osobne podstrony usług, pozycjonowanie lokalne, indywidualny projekt i nowoczesna technologia.',
    url: 'https://www.arteonagency.pl/uslugi/strona-internetowa-dla-firmy-wykonczeniowej',
    type: 'website',
    images: [
      {
        url: 'https://www.arteonagency.pl/assets/projects/finish-masters/strona/moskup-strony-finish-masters.webp',
        width: 1200,
        height: 630,
      },
    ],
  },
} as const;

const FAQ_ITEMS = [
  {
    question: 'Ile kosztuje strona internetowa dla firmy wykończeniowej?',
    answer:
      'Cena zależy od liczby podstron i funkcji, które chcesz mieć na stronie. Standardowo strona dla firmy wykończeniowej u nas kosztuje od 2 200 do 4 200 zł brutto. W tej cenie otrzymujesz indywidualny projekt, formularz wyceny, galerię realizacji, osobne podstrony usług i optymalizację pod SEO lokalne. Każdą realizację wyceniamy indywidualnie, dopasowując do Twoich potrzeb.',
  },
  {
    question: 'Mam już stronę. Lepiej ją przebudować, czy zrobić nową?',
    answer:
      'To zależy od stanu obecnej witryny, technologii, w jakiej jest zrobiona, i tego, co chcesz zmienić. Jeśli obecna strona wolno się wczytuje albo słabo wypada w Google, bo w Twoim mieście jest duża konkurencja, zwykle warto przejść na nowocześniejsze rozwiązanie, które pozwala na pełne pozycjonowanie bez opłat za wtyczki. Po rozmowie i spojrzeniu na obecną witrynę powiemy Ci, które rozwiązanie przyniesie w Twoim przypadku najlepszy efekt.',
  },
  {
    question:
      'Mam mało zdjęć realizacji i nie mam czasu napisać tekstów, czy możecie pomóc?',
    answer:
      'Tak, to bardzo częsta sytuacja. Pomagamy przygotować teksty opisujące Twoje usługi i firmę, a także doradzamy, jak sfotografować realizacje przed i po, żeby najlepiej budowały zaufanie.',
  },
  {
    question: 'Czy na stronie będzie formularz wyceny?',
    answer:
      'Tak, to jeden z najważniejszych elementów strony wykończeniowej. Konfigurujemy formularz wyceny, w którym klient poda zakres prac, metraż czy doda zdjęcia. Dzięki temu od razu dostajesz konkretne informacje o zleceniu.',
  },
  {
    question: 'Jak długo trwa realizacja i czy muszę płacić z góry?',
    answer:
      'Standardowy czas realizacji od pierwszej rozmowy do publikacji wynosi od 5 do 14 dni roboczych, zależnie od liczby podstron i tego, jak szybko skompletujemy materiały. Nie pobieramy zaliczek - fakturę wystawiamy dopiero po publikacji i Twojej pełnej akceptacji strony. Zanim cokolwiek zapłacisz, widzisz projekt wyglądu witryny, a po publikacji masz jeszcze czas na poprawki.',
  },
  {
    question: 'Czy sprawicie, że strona będzie widoczna w Google?',
    answer:
      'Tak, pozycjonowanie to jedna z naszych specjalizacji. Budujemy osobne podstrony dla poszczególnych usług, dzięki czemu strona trafia na frazy, które realnie wpisują klienci szukający wykonawcy w Twojej okolicy. Po uruchomieniu możemy zająć się pełnym pozycjonowaniem i prowadzeniem bloga, który przyciąga klientów szukających konkretnych prac wykończeniowych.',
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
    path: '/uslugi/strona-internetowa-dla-firmy-wykonczeniowej',
    serviceName: 'Strona internetowa dla firmy wykończeniowej i remontowej',
    description:
      'Tworzymy, modernizujemy i pozycjonujemy strony dla firm wykończeniowych i remontowych - wykończenia i remonty mieszkań, domów, inwestycji deweloperskich i lokali usługowych. Wszystko czego potrzebuje Twoja firma - formularz wyceny, galeria realizacji przed i po, osobne podstrony usług, pozycjonowanie lokalne, indywidualny projekt i nowoczesna technologia.',
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
    <Script
      id='schema-service-strona-dla-firmy-wykonczeniowej'
      type='application/ld+json'
    >
      {JSON.stringify(extendedJson)}
    </Script>
  );
}

/**
 * Offer landing page for finishing / renovation company websites.
 *
 * Follows the shared offer-page blueprint (docs/WZORZEC-STRONY-OFERTOWEJ-BRANZOWEJ.md) and the house
 * voice locked on the psychologist page: end client first, then "dlatego we do X", warm second person,
 * honest incl. downsides, dual benefit (client trust + Google). Based on the Finish Masters realization.
 */
export default function StronaDlaFirmyWykonczeniowejPage() {
  return (
    <>
      <HeroBanner
        title='Strona internetowa dla firmy wykończeniowej i remontowej'
        description={
          <>
            Tworzymy, modernizujemy i pozycjonujemy strony internetowe dla firm
            zajmujących się wykończeniami i remontami mieszkań, domów, lokali
            usługowych czy inwestycjami deweloperskimi. Projektujemy je z myślą
            o Twoich klientach lub inwestorach - tak aby od razu zaufali Twojej
            firmie i zostawili swój kontakt.
          </>
        }
        backgroundImage='/assets/projects/finish-masters/strona/moskup-strony-finish-masters.webp'
        overlay='black'
        secondaryCtaLabel='Darmowa wycena'
        secondaryCtaHref='#kontakt'
      />

      <BenefitBelt variant='carousel' />

      <Breadcrumbs
        second={{ href: '/uslugi', label: 'Usługi' }}
        third={{
          href: '/uslugi/strona-internetowa-dla-firmy-wykonczeniowej',
          label: 'Strona dla firmy wykończeniowej',
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
          title='Rozumiemy Twoją pracę i obawy Twoich klientów'
          imageSrc='/assets/projects/finish-masters/strona/moskup-strony-finish-masters.webp'
          imageAlt='Wizualizacja realizacji strony internetowej dla firmy wykończeniowej Finish Masters z Krakowa'
        >
          <p>
            <strong>
              Klient zleca remont firmie, która pokazuje swoje kwalifikacje i
              realizacje przekonujące go, że praca zostanie wykonana dobrze, w
              umówionej cenie i terminie.
            </strong>
          </p>
          <br />
          <p>
            W branży wykończeniowej klient wybiera spośród wielu ofert i przede
            wszystkim chce mieć pewność, że firma potrafi wykonać prace solidnie
            i że nie pojawią się ukryte koszty. Dlatego ocenia Cię po
            realizacjach,opiniach oraz tym, jak jasno przedstawiasz zakres prac
            oraz cenę.
          </p>
          <br />
          <p>
            Dzięki realizacjom dla firm wykończeniowych i budowlanych wiemy, na
            co zwracają uwagę zarówno Twoi klienci, jak i Google, co przekładamy
            na konkretne elementy strony oraz całą strategię pozyskiwania zleceń
            w sieci.
          </p>
        </SectionBasic>

        <Divider line />

        <TestimonialsCarousel />

        <Divider line />

        <FeatureGrid
          title='Co zawiera nasza oferta stron dla firm wykończeniowych i remontowych?'
          description='Wszystko czego potrzebuje Twoja firma, aby klient od razu Ci zaufał i poprosił o wycenę.'
          variant='centered'
          columns={3}
          items={[
            {
              title: 'Formularz wyceny remontu',
              description: (
                <p>
                  Klient przed zleceniem chce znać orientacyjny koszt. Z myślą o
                  tym budujemy wygodne formularze wycen, w których klient może
                  łatwo podać zakres prac, metraż czy dodać zdjęcia. Dzięki temu
                  od razu dostajesz konkretne dane potrzebne do rzetelnej wyceny
                  realizacji.
                </p>
              ),
              icon: (
                <RiDraftLine
                  className={cn('text-primary', normalIconSizeClasses)}
                />
              ),
            },
            {
              title: 'Galeria realizacji przed i po',
              description: (
                <p>
                  Realizacje to najważniejszy dowód umiejętności - klient ocenia
                  wykonawcę po tym, jak wykonuje prace. Dlatego budujemy galerię
                  realizacji przed i po, uporządkowaną według typu prac. Zdjęcia
                  budują zaufanie, i jednocześnie wpływają pozytywnie na pozycję
                  strony, w szczególności na lokalne frazy zwiazane z Twoimi
                  usługami.
                </p>
              ),
              icon: (
                <RiImage2Line
                  className={cn('text-primary', normalIconSizeClasses)}
                />
              ),
            },
            {
              title: 'Osobne podstrony usług',
              description: (
                <p>
                  Klient rzadko wpisuje ogólne frazy jak 'firma remontowa',
                  częściej wpisuje konkretną usługę, jak wykończenie łazienki,
                  gładzie, montaż paneli czy zrywanie tapet. Dlatego budujemy
                  osobne podstrony dla każdej usługi. Każda z nich trafia
                  pojawia się precyzyjnie na odpowiednie frazy, które interesują
                  klienta.
                </p>
              ),
              icon: (
                <RiPagesLine
                  className={cn('text-primary', normalIconSizeClasses)}
                />
              ),
            },
            {
              title: 'Opinie, gwarancje i zaufanie',
              description: (
                <p>
                  Klient najbardziej obawia się, że zapłaci za prace, które
                  zostaną wykonane źle, albo że w trakcie remontu pojawią się
                  ukryte koszty. Z myślą o tym eksponujemy opinie zadowolonych
                  klientów, zakończone realizacje, gwarancje czy jasne warunki
                  współpracy. Dzięki temu klient nabiera pewności co do jakości
                  Twoich usług .
                </p>
              ),
              icon: (
                <RiShieldCheckLine
                  className={cn('text-primary', normalIconSizeClasses)}
                />
              ),
            },
            {
              title: 'Obszar działania i pozycjonowanie lokalne',
              description: (
                <p>
                  Klient szuka wykonawcy w swojej okolicy, bo remont wymaga
                  obecności na miejscu. Z myślą o tym pokazujemy obszar Twojego
                  działania i optymalizujemy stronę pod pozycjonowanie
                  lokalne.Dzięki temu Twoja strona trafia do klientów z Twojego
                  miasta i terenu na którym działasz.
                </p>
              ),
              icon: (
                <RiMapPin2Line
                  className={cn('text-primary', normalIconSizeClasses)}
                />
              ),
            },
            {
              title: 'Szybki kontakt z firmą',
              description: (
                <p>
                  Klient zwykle pyta kilka firm naraz i wybiera tę, która
                  odpowie najszybciej i najkonkretniej. Dlatego zawsze
                  eksponujemy dane kontaktowe np. numer telefonu, formularze
                  wyceny czy kalkulatory. Im prostszy i szybszy pierwszy
                  kontakt, tym większa szansa, że zlecenie trafi właśnie do
                  Ciebie.
                </p>
              ),
              icon: (
                <RiPhoneLine
                  className={cn('text-primary', normalIconSizeClasses)}
                />
              ),
            },
          ]}
        />

        <Divider line />

        <SectionInfo title='Tak modernizujemy strony'>
          <p>
            Jeśli masz już stronę, która wygląda kiepsko albo nie przynosi
            klientów możemy ją przebudować. Zobacz, jak zmieniliśmy stronę firmy
            budowlano-wykończeniowej Izoluk - ze starej witryny na Wix na
            nowoczesną stronę nastawioną na pozyskiwanie zleceń.
          </p>
          <div className='mt-6 grid grid-cols-1 gap-4 md:grid-cols-2'>
            <figure>
              <div className='relative aspect-16/10 overflow-hidden rounded-lg border border-neutral-200 bg-neutral-50'>
                <Image
                  src='/assets/projects/izoluk/strona-internetowa-firma-budowlana-ocieplenia-izoluk-wczesniejszy-wyglad-strony-stworzony-w-wix.webp'
                  alt='Stara strona firmy budowlano-wykończeniowej Izoluk zbudowana na Wix - przed przebudową'
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
              <div className='relative aspect-16/10 overflow-hidden rounded-lg border border-neutral-200 bg-neutral-50'>
                <Image
                  src='/assets/projects/izoluk/strona-internetowa-firma-budowlana-ocieplenia-izoluk-projekt-realizacji-stworzony-w-figma.webp'
                  alt='Nowa strona firmy budowlano-wykończeniowej Izoluk zaprojektowana przez Arteon - po przebudowie'
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
          imageSrc='/assets/projects/finish-masters/wizytowki/mockup-wizytowki-finish-masters.webp'
          imageAlt='Wizytówki dla firmy wykończeniowej Finish Masters - realizacja Arteon'
          btnOne='Darmowa wycena'
          btnOneHref='#kontakt'
        >
          <p>
            Specjalizujemy się nie tylko w budowie stron www ale również w
            projektach graficznych oraz pozycjonowaniu. Możemy zaprojektować Ci{' '}
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
            prowadzeniem bloga, który przyciąga klientów szukających konkretnych
            usług. Współpracujemy z firmami wykończeniowymi i budowlanymi w
            całej Polsce.
          </p>
          <br />
          <p>
            Rozumiemy również że każda firma działa inaczej - inaczej wygląda
            strona małej ekipy remontowej, a inaczej firmy realizującej
            wykończenia inwestycji deweloperskich pod klucz. Dlatego ofertę
            dopasowujemy do skali Twojej działalności, niezależnie od tego, czy
            dopiero zaczynasz, czy masz już zespół i portfolio pełne realizacji.
          </p>
          <br />
          <p>
            Jeśli wykańczasz całe inwestycje dla deweloperów, przygotujemy
            stronę nastawioną na współpracę B2B - z portfolio zrealizowanych
            inwestycji i sekcją skierowaną do firm zamiast do klientów
            indywidualnych.
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
                'W pierwszej kolejności chcemy dokładnie poznać Twoją firmę, aby jak najlepiej dopasować naszą ofertę jak i przedstawić Twoją. Opowiadasz o zakresie usług oraz obszarze działania. Na tej podstawie przygotowujemy ofertę oraz plan, z myślą o Twoich celach.',
            },
            {
              icon: <RiCheckDoubleLine className={normalIconSizeClasses} />,
              title: 'Projekt',
              description:
                'Po omówieniu celów przechodzimy do projektu Twojej strony. Przygotowujemy propozycję wyglądu witryny z myślą o odbiorze przez klientów i nastawieniu na wysokie wynik w Google. Udostępniamy Ci link do projektu, na który możesz nanieść uwagi, omawiamy go i tłumaczymy, jakie korzyści dadzą poszczególne elementy. Pomagamy też przygotować opisy usług i realizacji.',
            },
            {
              icon: <RiLayoutLine className={normalIconSizeClasses} />,
              title: 'Realizacja',
              description:
                'Po pełnej akceptacji projektu przechodzimy do realizacji - budujemy stronę, konfigurujemy formularze wycen, tworzymy galerię realizacji i osobne podstrony usług. Wdrażamy sprawdzone techniki pozycjonowania i testujemy stronę na wszystkich urządzeniach.',
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

        <SectionBasic
          variant='right'
          title='Jasne gwarancje, jasne zasady'
          imageSrc='/assets/projects/izoluk/strona-internetowa-firma-budowlana-ocieplenia-izoluk-mockup-realizacja-arteon.webp'
          imageAlt='Realizacja strony internetowej dla firmy wykończeniowej i budowlanej Izoluk - mockup Arteon'
        >
          <div className='mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2'>
            {[
              {
                icon: RiPencilRuler2Line,
                title: 'Indywidualny projekt strony',
                text: 'Każda strona jest projektowana od zera - masz pełną kontrolę nad wyglądem i układem treści.',
              },
              {
                icon: RiSecurePaymentLine,
                title: 'Brak zaliczek',
                text: 'Nie pobieramy zaliczek. Fakturę wystawiamy po publikacji i pełnej akceptacji witryny.',
              },
              {
                icon: RiPriceTag3Line,
                title: 'Brak opłat abonamentowych',
                text: 'Nie pobieramy comiesięcznych opłat za samą stronę. Płacisz jednorazowo, a licencję na Elementor Pro dostajesz w cenie.',
              },
              {
                icon: RiKey2Line,
                title: 'Pełna własność',
                text: 'Wszystko co stworzymy staje się Twoją własnością. Otrzymujesz stronę i dostępy do wszelkich zintegrowanych platform.',
              },
            ].map(tile => (
              <div
                key={tile.title}
                className='rounded-lg border border-neutral-200 bg-white p-4'
              >
                <tile.icon className='mb-2 h-5 w-5 text-primary' />
                <p className='text-sm font-medium text-dark'>{tile.title}</p>
                <p className='mt-1 text-xs text-light'>{tile.text}</p>
              </div>
            ))}
          </div>
        </SectionBasic>

        <Divider line />

        <SectionInfo
          title='Kalkulator wyceny, który przysyła gotowych klientów'
          subtitle='Koniec z zapytaniami, które znikają'
        >
          <p>
            Wielu klientów firm wykończeniowych chce tylko poznać orientacyjną
            cenę i znika gdy tylko dostanie wycenę. Z myślą o tym, możemy
            zbudować kalkulator kosztów prac, który pokazuje wycenę w czasie
            rzeczywistym - klient podaje metraż i typ usługi, i od razu widzi
            orientacyjne widełki.
          </p>
          <br />
          <p>
            Osoby, które tylko sprawdzają cenę, dostają odpowiedź na miejscu, a
            zapytanie zostawiają przede wszystkim ci, którzy realnie planują
            remont. Do Ciebie trafiają więc kontakty bardziej nastawione na
            zlecenie, a nie na samo pytanie o cenę.
          </p>
        </SectionInfo>

        <Divider line />

        <SectionPrices
          id='pricing-wykonczeniowa'
          title='Ile kosztuje strona internetowa dla firmy wykończeniowej?'
          description='Każdą realizację wyceniamy indywidualnie, jednak abyś miał punkty odniesienia, przygotowaliśmy trzy przykładowe pakiety.'
          plans={[
            {
              name: 'Strona podstawowa',
              technology: 'WordPress',
              price: '2 200 - 2 800 zł',
              description:
                'Dla firmy, która potrzebuje solidnej strony z ofertą i formularzem wyceny.',
              features: [
                'Strona główna, strony ofertowe, strona o firmie i kontakt',
                'Formularz wyceny',
                'Galeria realizacji przed i po',
                'Obszar działania',
                'Panel do samodzielnej edycji',
              ],
              btnOne: 'Darmowa wycena',
              btnOneHref: '#kontakt',
            },
            {
              name: 'Rozbudowana strona firmowa',
              technology: 'WordPress',
              price: '3 500 - 4 800 zł',
              description:
                'Dla firmy z szeroką ofertą, która chce pozyskiwać zlecenia z Google w swojej okolicy.',
              features: [
                'Wszystko z pakietu strony podstawowej',
                'Więcej podstrony dla poszczególnych usług',
                'Rozbudowana galeria realizacji według typu prac',
                'Konfiguracja bloga eksperckiego',
                'Analiza konkurencji i strategia SEO',
                'Pozycjonowanie stron ofertowych i SEO lokalne',
                'Kalkulator wycen',
              ],
              btnOne: 'Darmowa wycena',
              btnOneHref: '#kontakt',
              lastPlan: true,
            },
            {
              name: 'Strona w technologii Next.js',
              technology: 'Next.js',
              price: 'od 8 000 zł',
              description:
                'Dla firmy, która chce najszybszej strony i pewności wysokiej pozycji w Google.',
              features: [
                'Wszystko z pakietu rozbudowanej strony firmowej',
                'Błyskawiczna prędkość (Core Web Vitals) jako przewaga w Google',
                'Pewność wysokiej pozycji na trudne, konkurencyjne frazy',
                'Zaawansowany kalkulator wyceny liczony na żywo, bez wtyczek',
                'Galeria przed i po z dużą liczbą zdjęć bez utraty prędkości',
                'Możliwość zbudowania dedykowanych narzędzi i rozwiązań dla klientów oraz zespołu',
              ],
              btnOne: 'Darmowa wycena',
              btnOneHref: '#kontakt',
            },
          ]}
        />

        <Divider line />

        <SectionContactForm
          title='Darmowa wycena'
          imageSrc='/assets/projects/napilota/mockup-strony-napilota.webp'
          imageAlt='Realizacja strony internetowej dla firmy NaPilota - mockup Arteon'
          defaultSubject='Strona internetowa dla firmy wykończeniowej'
          messagePlaceholder='Napisz co chcesz zrealizować'
        />

        <Divider line />

        <SectionSteps
          title='W jakiej technologii budujemy strony internetowe?'
          description='Tworzymy witryny w różnych technologiach ale naszą główną specjalizacją jest Wordpress oraz Next.js. Rozwiązanie dopasowujemy do Twoich celów i budżetu.'
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
                  Wordpress wymaga częstych aktualizacji i wtyczek, dających
                  dodatkowe funkcje które bywają drogie. Przy zaawansowanych
                  funkcjonalnościach koszt utrzymania strony może być wysoki
                  przez wtyczki. Strony w Wordpress są też ciężkie - wczytują
                  się wolniej a samo pozycjonowanie w Google jest trudniejsze i
                  trwa dłużej.
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
                  comiesięcznych opłat - możesz mieć własny kalkulator kosztów
                  remontu na stronie czy zaawansowane animacje 3D z przeszłych
                  inwestycji deweloperskich. Minus? Strony w Next.js są droższe
                  w realizacji, bo wymagają pisania całego kodu ręcznie.
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
            className='h-auto w-full rounded-lg border border-neutral-200'
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

        <SectionFaqPanels
          variant='offer'
          defaultOpenIndex={1}
          pageUrl='https://www.arteonagency.pl/uslugi/strona-internetowa-dla-firmy-wykonczeniowej'
          title='Najczęstsze pytania o stronę dla firmy wykończeniowej'
          items={FAQ_ITEMS}
        />

        <Divider line />

        <SectionBento
          title='Poznaj inne usługi'
          items={[
            {
              title: 'Pozycjonowanie stron',
              size: 'large',
              backgroundImage:
                '/assets/projects/stepard/strona/moskup-strony-stepard.webp',
              btnLabel: 'Sprawdź ofertę',
              btnLink: '/uslugi/marketing/pozycjonowanie-stron',
            },
            {
              title: 'Tworzenie treści i blog',
              size: 'medium',
              backgroundImage:
                '/assets/projects/jstax/moskup-strony-jstax.webp',
              btnLabel: 'Sprawdź ofertę',
              btnLink: '/uslugi/tworzenie-tresci',
            },
            {
              title: 'Projekt wizytówki',
              size: 'small',
              backgroundImage:
                '/assets/projects/luxnova/wizytowki/mockup-wizytowki-lux-nova.webp',
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
        backgroundImage='/assets/projects/izoluk/strona-internetowa-firma-budowlana-ocieplenia-izoluk-mockup-realizacja-arteon.webp'
        overlay='black'
      />

      <ServiceSchema />
    </>
  );
}
