import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import {
  RiLayoutGridLine,
  RiEqualizerLine,
  RiDraftLine,
  RiDownload2Line,
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
  title: 'Strona internetowa dla producenta | Arteon',
  description:
    'Tworzymy, modernizujemy i pozycjonujemy strony dla producentów mebli na wymiar, schodów, okien, ogrodzeń, konstrukcji i wyrobów gotowych. Wszystko czego potrzebuje Twoja firma - katalog produktów, konfigurator, wycena z projektu, strefa dla architektów, pozycjonowanie, indywidualny projekt i nowoczesna technologia.',
  alternates: {
    canonical:
      'https://www.arteonagency.pl/uslugi/strona-internetowa-dla-producenta',
  },
  openGraph: {
    title: 'Strona internetowa dla producenta | Arteon',
    description:
      'Tworzymy, modernizujemy i pozycjonujemy strony dla producentów mebli na wymiar, schodów, okien, ogrodzeń, konstrukcji i wyrobów gotowych. Wszystko czego potrzebuje Twoja firma - katalog produktów, konfigurator, wycena z projektu, strefa dla architektów, pozycjonowanie, indywidualny projekt i nowoczesna technologia.',
    url: 'https://www.arteonagency.pl/uslugi/strona-internetowa-dla-producenta',
    type: 'website',
    images: [
      {
        url: 'https://www.arteonagency.pl/assets/projects/stepard/strona/moskup-strony-stepard.webp',
        width: 1200,
        height: 630,
      },
    ],
  },
} as const;

const FAQ_ITEMS = [
  {
    question: 'Ile kosztuje strona internetowa dla producenta?',
    answer:
      'Cena zależy od liczby produktów, podstron i funkcji, które chcesz mieć na stronie. Standardowo strona dla producenta u nas kosztuje od 2 200 do 4 200 zł brutto w wersji na WordPress. W tej cenie otrzymujesz indywidualny projekt, katalog produktów, formularz zapytania z możliwością załączenia projektu, osobne podstrony kategorii i optymalizację pod SEO. Konfigurator produktu i najszybszą wersję w technologii Next.js wyceniamy osobno, bo wymagają napisania dedykowanego kodu.',
  },
  {
    question: 'Mam już stronę. Lepiej ją przebudować, czy zrobić nową?',
    answer:
      'To zależy od stanu obecnej witryny i tego, co chcesz zmienić. Jeśli strona wolno się wczytuje, nie ma katalogu albo słabo wypada w Google, zwykle lepiej przejść na nowocześniejsze rozwiązanie z pełnym katalogiem produktów. Tak zrobiliśmy dla NaPilota, gdzie z jednostronicowej wizytówki zbudowaliśmy stronę z katalogiem 25 produktów i osobnymi podstronami ofert. Po rozmowie i spojrzeniu na obecną witrynę powiemy Ci, które rozwiązanie przyniesie w Twoim przypadku najlepszy efekt.',
  },
  {
    question:
      'Produkuję różne rzeczy i mam dużo produktów. Czy ogarniecie taki katalog?',
    answer:
      'Tak, to nasza codzienność. Budujemy katalog z filtrowaniem po typie, materiale i kolekcji, dzięki czemu klient szybko trafia na to, czego szuka, nawet przy dużej liczbie produktów. Każdą ważniejszą kategorię umieszczamy na osobnej podstronie, żeby pojawiała się w Google na swoje frazy. Pomagamy też uporządkować i opisać produkty, jeśli nie masz na to czasu.',
  },
  {
    question: 'Czym jest konfigurator produktu i czy pasuje do mojej branży?',
    answer:
      'Konfigurator to narzędzie, w którym klient sam wybiera wymiary, materiał, kolor i warianty produktu, a na końcu widzi podsumowanie swojej konfiguracji i wysyła gotowe zapytanie. Sprawdza się wszędzie tam, gdzie produkujesz na wymiar, na przykład przy meblach, schodach, oknach czy ogrodzeniach. Dzięki niemu dostajesz zapytanie z kompletem informacji i od razu możesz je wycenić.',
  },
  {
    question: 'Czy zrobicie sklep, żebym sprzedawał gotowe produkty ze strony?',
    answer:
      'Tak. Jeśli oprócz zamówień na wymiar sprzedajesz gotowe produkty, próbki albo akcesoria, dołożymy do strony sklep, w którym klient kupi je bez czekania na wycenę. Możemy połączyć oba światy na jednej stronie: katalog i konfigurator dla zamówień na wymiar oraz zwykłą sprzedaż dla produktów z półki.',
  },
  {
    question:
      'Czy przygotujecie materiały do pobrania dla architektów i wykonawców?',
    answer:
      'Tak. Do producenta często trafiają architekci, projektanci i wykonawcy, którzy potrzebują materiałów do pracy. Przygotujemy strefę z plikami do pobrania, takimi jak karty techniczne, certyfikaty i katalog PDF. To ułatwia współpracę B2B i sprawia, że projektanci chętniej wpisują Twoje produkty w swoje projekty.',
  },
  {
    question: 'Jak długo trwa realizacja i czy muszę płacić z góry?',
    answer:
      'Standardowy czas realizacji od pierwszej rozmowy do publikacji wynosi od 5 do 14 dni roboczych, zależnie od liczby podstron i tego, jak szybko skompletujemy materiały. Rozbudowany katalog lub konfigurator mogą ten czas wydłużyć, o czym mówimy wcześniej. Nie pobieramy zaliczek - fakturę wystawiamy dopiero po publikacji i Twojej pełnej akceptacji strony.',
  },
  {
    question: 'Czy sprawicie, że strona będzie widoczna w Google?',
    answer:
      'Tak, pozycjonowanie to jedna z naszych specjalizacji. Budujemy osobne podstrony dla poszczególnych produktów i kategorii, dzięki czemu strona trafia na frazy, które realnie wpisują klienci szukający konkretnego wyrobu. Po uruchomieniu możemy zająć się pełnym pozycjonowaniem i prowadzeniem bloga, który przyciąga klientów jeszcze przed decyzją o zakupie.',
  },
];

function ServiceSchema() {
  const json = buildServiceSchema({
    path: '/uslugi/strona-internetowa-dla-producenta',
    serviceName: 'Strona internetowa dla producenta',
    description:
      'Tworzymy, modernizujemy i pozycjonujemy strony dla producentów mebli na wymiar, schodów, okien, ogrodzeń, konstrukcji i wyrobów gotowych. Katalog produktów, konfigurator, wycena z projektu, strefa dla architektów, osobne podstrony kategorii, pozycjonowanie, indywidualny projekt i nowoczesna technologia.',
    availableLanguages: ['pl'],
    includeServiceChannel: true,
  });

  const extendedJson = {
    ...json,
    areaServed: {
      '@type': 'Language',
      name: 'Polish',
    },
    priceRange: '2200-8000+ PLN',
  };

  return (
    <Script
      id='schema-service-strona-dla-producenta'
      type='application/ld+json'
    >
      {JSON.stringify(extendedJson)}
    </Script>
  );
}

/**
 * Broad offer landing page for manufacturer websites (Hub 1: made-to-order producers — furniture,
 * stairs, windows, fences, steel structures — plus finished-goods producers).
 *
 * Follows the shared offer-page blueprint (docs/WZORZEC-STRONY-OFERTOWEJ-BRANZOWEJ.md) and the house
 * voice: end client first, then "dlatego we do X", warm second person, honest, dual benefit (client
 * trust + Google). Wider than the service-firm pages because the manufacturer niche needs extra
 * mechanisms: product catalogue, configurator, quote-from-project, B2B/architect download area and an
 * optional shop. Proof anchored on StepArd (stairs) and NaPilota (product catalogue).
 */
export default function StronaDlaProducentaPage() {
  return (
    <>
      <HeroBanner
        title='Strona internetowa dla producenta'
        description={
          <>
            Tworzymy, modernizujemy i pozycjonujemy strony dla producentów mebli
            na wymiar, schodów, okien, ogrodzeń, konstrukcji i wyrobów gotowych.
            Projektujemy je tak, aby klient od pierwszego wejścia zobaczył, co
            realnie produkujesz, i mógł złożyć konkretne zapytanie.
          </>
        }
        backgroundImage='/assets/projects/stepard/strona/moskup-strony-stepard.webp'
        overlay='black'
        secondaryCtaLabel='Darmowa wycena'
        secondaryCtaHref='#kontakt'
      />

      <BenefitBelt variant='carousel' />

      <Breadcrumbs
        second={{ href: '/uslugi', label: 'Usługi' }}
        third={{
          href: '/uslugi/strona-internetowa-dla-producenta',
          label: 'Strona dla producenta',
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
          title='Rozumiemy Twoją pracę i to, jak wybiera Twój klient'
          imageSrc='/assets/projects/napilota/mockup-strony-napilota.webp'
          imageAlt='Wizualizacja realizacji strony internetowej z katalogiem produktów dla firmy NaPilota'
        >
          <p>
            <strong>
              Klient wybiera producenta, u którego widzi, co realnie wychodzi z
              jego zakładu, i łatwo sprawdza, czy zrobi dokładnie to, czego
              potrzebuje.
            </strong>
          </p>
          <br />
          <p>
            Zamówienie u producenta to często wydatek na lata i decyzja, do
            której klient wraca kilka razy. Dlatego zanim się odezwie, przegląda
            katalog realizacji, sprawdza dostępne warianty i materiały oraz to,
            czy dostanie konkretną wycenę. Coraz częściej trafia do Ciebie nie
            tylko klient indywidualny, ale też architekt, projektant wnętrz czy
            wykonawca, który potrzebuje dodatkowo materiałów do projektu.
          </p>
          <br />
          <p>
            Dzięki realizacjom dla producentów, takich jak StepArd, wiemy, na co
            patrzą zarówno Twoi klienci, jak i Google, i przekładamy to na
            katalog, konfigurator oraz strukturę strony, która pozyskuje
            zapytania.
          </p>
        </SectionBasic>

        <Divider line />

        <TestimonialsCarousel />

        <Divider line />

        <FeatureGrid
          title='Co zawiera nasza oferta stron dla producentów?'
          description='Wszystko czego potrzebuje Twoja firma, aby klient od pierwszego wejścia zobaczył Twoje produkty i złożył konkretne zapytanie.'
          variant='centered'
          columns={3}
          items={[
            {
              title: 'Katalog produktów i realizacji',
              description: (
                <p>
                  Klient u producenta chce najpierw zobaczyć, co realnie robisz.
                  Dlatego budujemy katalog produktów i realizacji z filtrowaniem
                  po typie, materiale i kolekcji, żeby każdy szybko trafił na
                  to, czego szuka. Przy okazji każda kategoria pojawia się w
                  Google na swoje frazy, na przykład meble na wymiar czy schody
                  metalowe w Twoim regionie.
                </p>
              ),
              icon: (
                <RiLayoutGridLine
                  className={cn('text-primary', normalIconSizeClasses)}
                />
              ),
            },
            {
              title: 'Konfigurator produktu',
              description: (
                <p>
                  Dajemy klientowi konfigurator, w którym sam wybiera wymiary,
                  materiał, kolor i warianty. Dzięki temu składa precyzyjne
                  zapytanie, a Ty dostajesz komplet informacji potrzebnych do
                  wyceny. To działa tak samo dla mebli, schodów, okien czy
                  ogrodzeń.
                </p>
              ),
              icon: (
                <RiEqualizerLine
                  className={cn('text-primary', normalIconSizeClasses)}
                />
              ),
            },
            {
              title: 'Wycena z projektu lub rysunku',
              description: (
                <p>
                  Produkcji na wymiar nie da się rzetelnie wycenić z samych
                  metrów, dlatego przygotowujemy formularz dopasowany do Twojej
                  branży. Klient dołącza projekt, rysunek albo wymiary i
                  opisuje, na jakim etapie jest inwestycja. Do Ciebie trafia
                  zapytanie, które od razu da się wycenić.
                </p>
              ),
              icon: (
                <RiDraftLine
                  className={cn('text-primary', normalIconSizeClasses)}
                />
              ),
            },
            {
              title: 'Strefa B2B i pliki dla architektów',
              description: (
                <p>
                  Do producenta trafiają też architekci, projektanci i
                  wykonawcy, którzy potrzebują materiałów do pracy. Dlatego
                  przygotowujemy strefę z plikami do pobrania: karty techniczne,
                  certyfikaty i katalog PDF. To ułatwia współpracę B2B i
                  sprawia, że projektanci chętniej wpisują Twoje produkty w
                  swoje projekty.
                </p>
              ),
              icon: (
                <RiDownload2Line
                  className={cn('text-primary', normalIconSizeClasses)}
                />
              ),
            },
            {
              title: 'Osobne podstrony produktów i kategorii',
              description: (
                <p>
                  Klient rzadko szuka ogólnie producenta, częściej wpisuje
                  konkretny produkt, jak kuchnia na wymiar, schody dywanowe czy
                  brama przesuwna. Dlatego budujemy osobne podstrony dla każdej
                  kategorii. Każda trafia do właściwego odbiorcy i pojawia się
                  na precyzyjne frazy w wyszukiwarce.
                </p>
              ),
              icon: (
                <RiPagesLine
                  className={cn('text-primary', normalIconSizeClasses)}
                />
              ),
            },
            {
              title: 'Blog i informacja o dystrybucji',
              description: (
                <p>
                  Klienci na długo przed zakupem szukają w Google porad, na
                  przykład jak dobrać materiał albo ile trwa produkcja. Dlatego
                  pomagamy prowadzić blog z poradnikami, a jeśli sprzedajesz
                  przez punkty i dystrybutorów, dodajemy czytelną sekcję z
                  informacją, gdzie kupić Twoje produkty.
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
          title='Nieważne, co produkujesz - ułożymy to w spójną stronę'
          subtitle='Szeroki zakres branż'
        >
          <p>
            Każdy producent działa inaczej, ale potrzeby strony są podobne:
            pokazać produkty, dać się łatwo wycenić i trafiać w Google na
            konkretne zapytania. Robimy strony dla producentów mebli na wymiar,
            kuchni, szaf i garderób, schodów i balustrad, okien i drzwi,
            ogrodzeń i bram, blatów, kominków oraz konstrukcji stalowych.
          </p>
          <br />
          <p>
            Obsługujemy też producentów wyrobów gotowych, takich jak kosmetyki,
            świece, żywność rzemieślnicza, opakowania czy artykuły dekoracyjne.
            Dla każdej z tych branż dobieramy odpowiedni układ. Tam, gdzie liczy
            się produkcja na wymiar, stawiamy na katalog i konfigurator, a tam,
            gdzie sprzedajesz gotowy produkt, na czytelną prezentację oferty i
            sprzedaż.
          </p>
        </SectionInfo>

        <Divider line />

        <SectionInfo
          title='Konfigurator, który zamienia oglądanie w konkretne zapytanie'
          subtitle='Więcej gotowych zapytań'
        >
          <p>
            Najczęstszy problem producenta to zapytania bez treści. Klient pisze
            „proszę o wycenę", a Ty i tak musisz dopytywać o wszystko. Dlatego
            budujemy konfigurator, w którym klient sam wybiera wymiary,
            materiał, wykończenie i dodatki, a na końcu widzi podsumowanie
            swojej konfiguracji.
          </p>
          <br />
          <p>
            Dzięki temu do Ciebie trafia gotowe, policzalne zapytanie, a klient
            ma poczucie, że zamawia dokładnie to, czego chce. Konfigurator
            tworzymy jako dedykowane narzędzie w Next.js, bez comiesięcznych
            opłat za wtyczki, i dopasowujemy go do tego, co produkujesz.
          </p>
        </SectionInfo>

        <Divider line />

        <SectionBasic
          title='Co jeszcze zyskujesz?'
          imageSrc='/assets/projects/stepard/wizytowki/mockup-wizytowki-stepard.webp'
          imageAlt='Wizytówki dla producenta schodów StepArd - realizacja Arteon'
          btnOne='Darmowa wycena'
          btnOneHref='#kontakt'
        >
          <p>
            Specjalizujemy się nie tylko w budowie stron www, ale również w
            projektach graficznych oraz pozycjonowaniu. Dla StepArd, producenta
            schodów, przygotowaliśmy komplet:{' '}
            <Link
              prefetch={false}
              className='inline-link'
              href='/uslugi/projekty-graficzne/projekt-logo'
            >
              logo
            </Link>
            , stronę i{' '}
            <Link
              prefetch={false}
              className='inline-link'
              href='/uslugi/projekty-graficzne/projekt-wizytowki'
            >
              wizytówki
            </Link>
            . Możemy zaprojektować Ci logo, katalog produktów do druku i
            materiały reklamowe, a także zająć się pozycjonowaniem i
            prowadzeniem bloga.
          </p>
          <br />
          <p>
            Rozumiemy też, że każda firma działa na innej skali. Inaczej wygląda
            strona lokalnego zakładu stolarskiego, a inaczej producenta
            wysyłającego wyroby w całej Polsce. Dlatego ofertę dopasowujemy do
            Twojej wielkości i sposobu sprzedaży, niezależnie od tego, czy
            pracujesz na zamówienia indywidualne, czy współpracujesz z sieciami
            i hurtem.
          </p>
          <br />
          <p>
            Jeśli sprzedajesz głównie do firm, przygotujemy stronę nastawioną na
            współpracę B2B, z katalogiem dla architektów i wykonawców, plikami
            do pobrania oraz sekcją dla dystrybutorów.
          </p>
        </SectionBasic>

        <Divider line />

        <SectionInfo
          title='Chcesz sprzedawać gotowe produkty wprost ze strony?'
          subtitle='Opcjonalny sklep'
        >
          <p>
            Część producentów oprócz zamówień na wymiar sprzedaje też gotowe
            produkty, próbki albo akcesoria. Jeśli chcesz taką możliwość,
            dołożymy do strony sklep, w którym klient kupi wybrane produkty bez
            czekania na wycenę.
          </p>
          <br />
          <p>
            To rozwiązanie łączy dwa światy: katalog i konfigurator dla zamówień
            na wymiar oraz zwykłą sprzedaż dla produktów z półki. Więcej
            znajdziesz w naszej{' '}
            <Link
              prefetch={false}
              className='inline-link'
              href='/uslugi/sklepy-internetowe'
            >
              ofercie sklepów internetowych
            </Link>
            .
          </p>
        </SectionInfo>

        <Divider line />

        <SectionTimeline
          title='Jak wygląda współpraca?'
          items={[
            {
              icon: <RiPencilRuler2Line className={normalIconSizeClasses} />,
              title: 'Rozmowa',
              description:
                'W pierwszej kolejności chcemy dokładnie poznać Twoją produkcję, aby jak najlepiej dopasować ofertę. Opowiadasz o tym, co wytwarzasz, jak sprzedajesz i kto u Ciebie kupuje. Na tej podstawie przygotowujemy ofertę oraz plan działania, z myślą o Twoich celach.',
            },
            {
              icon: <RiCheckDoubleLine className={normalIconSizeClasses} />,
              title: 'Projekt',
              description:
                'Po omówieniu celów przechodzimy do projektu Twojej strony. Przygotowujemy propozycję wyglądu z myślą o prezentacji produktów i wysokim wyniku w Google. Udostępniamy Ci link do projektu, na który możesz nanieść uwagi, i pomagamy uporządkować oraz opisać katalog.',
            },
            {
              icon: <RiLayoutLine className={normalIconSizeClasses} />,
              title: 'Realizacja',
              description:
                'Po pełnej akceptacji projektu budujemy stronę, konfigurujemy katalog z filtrowaniem, formularz zapytania i osobne podstrony kategorii. Jeśli wybierzesz konfigurator lub sklep, przygotowujemy je jako dedykowane narzędzia i testujemy stronę na wszystkich urządzeniach.',
            },
            {
              icon: <RiMailSendLine className={normalIconSizeClasses} />,
              title: 'Odbiór i publikacja',
              description:
                'Po realizacji prezentujemy gotową witrynę, konfigurujemy narzędzia analityczne oraz zabezpieczenia i przekazujemy Ci pełne dostępy. Po tym masz czas na wdrożenie wszelkich uwag. Fakturę wystawiamy po zakończeniu prac.',
            },
            {
              icon: (
                <RiCustomerService2Line className={normalIconSizeClasses} />
              ),
              title: 'Dalsze wsparcie',
              description:
                'Na koniec możesz zdecydować, czy chcesz samodzielnie prowadzić stronę, czy zlecić nam jej obsługę. Możemy zająć się pozycjonowaniem, rozbudową katalogu oraz prowadzeniem bloga i mediów społecznościowych.',
            },
          ]}
        />

        <Divider line />

        <SectionBasic
          variant='right'
          title='Jasne gwarancje, jasne zasady'
          imageSrc='/assets/projects/stepard/logo/mockup-logo-stepard.webp'
          imageAlt='Logo dla producenta schodów StepArd - realizacja Arteon'
        >
          <div className='mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2'>
            {[
              {
                icon: RiPencilRuler2Line,
                title: 'Indywidualny projekt strony',
                text: 'Każda strona jest projektowana od zera - masz pełną kontrolę nad wyglądem i układem katalogu.',
              },
              {
                icon: RiSecurePaymentLine,
                title: 'Brak zaliczek',
                text: 'Nie pobieramy zaliczek za pracę. Fakturę wystawiamy po publikacji i pełnej akceptacji witryny.',
              },
              {
                icon: RiPriceTag3Line,
                title: 'Brak opłat abonamentowych',
                text: 'Nie pobieramy comiesięcznych opłat za samą stronę. Płacisz jednorazowo, a licencję Elementor Pro dostajesz w cenie.',
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

        <SectionPrices
          id='pricing-producent'
          title='Ile kosztuje strona internetowa dla producenta?'
          description='Każdą realizację wyceniamy indywidualnie, jednak abyś miał punkty odniesienia, przygotowaliśmy trzy przykładowe pakiety.'
          plans={[
            {
              name: 'Strona wizytówka',
              technology: 'WordPress',
              price: '2 200 - 2 800 zł',
              description:
                'Dla producenta, który chce solidnej strony z katalogiem i formularzem zapytania.',
              features: [
                'Strona główna, oferta, o firmie i kontakt',
                'Katalog produktów i realizacji',
                'Formularz zapytania z załączeniem projektu',
                'Podstrony kategorii produktów',
                'Panel do samodzielnej edycji',
              ],
              btnOne: 'Darmowa wycena',
              btnOneHref: '#kontakt',
            },
            {
              name: 'Strona z pozycjonowaniem',
              technology: 'WordPress',
              price: '3 500 - 4 800 zł',
              description:
                'Dla producenta, który chce pozyskiwać zapytania z Google, także od architektów i wykonawców.',
              features: [
                'Wszystko z pakietu strony wizytówki',
                'Osobne podstrony produktów i kategorii',
                'Strefa B2B z plikami do pobrania',
                'Konfiguracja bloga z poradnikami',
                'Pozycjonowanie stron ofertowych i SEO lokalne',
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
                'Dla producenta, który chce najszybszej strony, konfiguratora i pewności wysokiej pozycji.',
              features: [
                'Wszystko z pakietu z pozycjonowaniem',
                'Błyskawiczna prędkość (Core Web Vitals) jako przewaga w Google',
                'Największa pewność wysokiej pozycji na trudne frazy',
                'Konfigurator produktu i katalog z filtrowaniem bez wtyczek',
                'Możliwość rozbudowy o sklep',
              ],
              btnOne: 'Darmowa wycena',
              btnOneHref: '#kontakt',
            },
          ]}
        />

        <Divider line />

        <SectionContactForm
          title='Darmowa wycena'
          imageSrc='/assets/projects/stepard/strona/moskup-strony-stepard.webp'
          imageAlt='Realizacja strony dla producenta schodów StepArd - mockup'
          defaultSubject='Strona internetowa dla producenta'
          messagePlaceholder='Opisz swoją produkcję: co wytwarzasz, czy pracujesz na zamówienia na wymiar, czy sprzedajesz gotowe produkty, i czy potrzebujesz nowej strony, czy chcesz przebudować obecną.'
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
                  Wygodny, popularny wybór, gdy zależy Ci na solidnej stronie z
                  katalogiem w przystępnej cenie. Możesz w łatwy sposób
                  samodzielnie edytować treści i dodawać produkty. Płacisz
                  jednorazowo, bez abonamentu za samą stronę. Minus? Wordpress
                  wymaga aktualizacji i wtyczek, które często są płatne. Przy
                  rozbudowanych funkcjach, jak konfigurator, koszt utrzymania
                  przez wtyczki potrafi rosnąć, a same strony wczytują się
                  wolniej, przez co pozycjonowanie jest trudniejsze.
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
                  Wybór dla producentów, którzy chcą maksymalnej swobody i
                  pełnej pewności wysokiej pozycji w Google. Tej technologii
                  używamy na naszej witrynie. Strony w Next.js działają
                  błyskawicznie i pozwalają na tworzenie funkcji każdego typu
                  bez comiesięcznych opłat - możesz mieć własny konfigurator
                  produktu oraz katalog z filtrowaniem, które działają
                  natychmiast. Minus? Strony w Next.js są droższe w realizacji,
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
          pageUrl='https://www.arteonagency.pl/uslugi/strona-internetowa-dla-producenta'
          title='Najczęstsze pytania o stronę dla producenta'
          items={FAQ_ITEMS}
        />

        <Divider line />

        <SectionBento
          title='Poznaj inne usługi'
          items={[
            {
              title: 'Sklepy internetowe',
              size: 'large',
              backgroundImage:
                '/assets/projects/napilota/mockup-strony-napilota.webp',
              btnLabel: 'Sprawdź ofertę',
              btnLink: '/uslugi/sklepy-internetowe',
            },
            {
              title: 'Pozycjonowanie stron',
              size: 'medium',
              backgroundImage:
                '/assets/projects/jstax/moskup-strony-jstax.webp',
              btnLabel: 'Sprawdź ofertę',
              btnLink: '/uslugi/marketing/pozycjonowanie-stron',
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
        title='Zbudujmy stronę, która pokazuje Twoje produkty i przynosi zapytania'
        description='Darmowa wycena. Doradzimy najlepsze rozwiązanie, pokażemy możliwości i przygotujemy bezpłatną, niezobowiązującą wycenę.'
        btnOne='Darmowa wycena'
        btnOneHref='#kontakt'
        backgroundImage='/assets/projects/napilota/mockup-strony-napilota.webp'
        overlay='black'
      />

      <ServiceSchema />
    </>
  );
}
