import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import { GoLaw } from 'react-icons/go';
import {
  RiSpeedUpLine,
  RiArticleLine,
  RiPencilRuler2Line,
  RiCheckboxCircleLine,
  RiLayoutLine,
  RiKey2Line,
  RiShieldCheckLine,
  RiCustomerService2Line,
  RiCheckDoubleLine,
  RiMailSendLine,
  RiWordpressLine,
  RiReactjsLine,
  RiSecurePaymentLine,
  RiPriceTag3Line,
} from 'react-icons/ri';
import ButtonLink from '@/components/atoms/buttons/ButtonLink';
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
import SectionPrices from '@/components/organisms/sections/SectionPrices';
import SectionSteps from '@/components/organisms/sections/SectionSteps';
import SectionTimeline from '@/components/organisms/sections/SectionTimeline';
import { getArticlePreviewsByCategory } from '@/lib/blogDataService';
import { cn } from '@/lib/clsx';
import { buildServiceSchema } from '@/lib/seo/serviceSchema';
import { normalIconSizeClasses } from '@/lib/uiClasses';

export const metadata = {
  title: 'Strony internetowe dla firm | Arteon',
  description:
    'Tworzymy, modernizujemy i pozycjonujemy strony internetowe dla firm - od prostej wizytówki po zaawansowane funkcje dopasowane do branży. Indywidualny projekt w Figma, WordPress lub Next.js, dedykowane narzędzia i pełna własność. Sprawdź cennik.',
  alternates: {
    canonical: 'https://www.arteonagency.pl/uslugi/strony-internetowe-dla-firm',
  },
  openGraph: {
    title: 'Strony internetowe dla firm | Arteon',
    description:
      'Tworzymy, modernizujemy i pozycjonujemy strony internetowe dla firm - od prostej wizytówki po zaawansowane funkcje dopasowane do branży. Indywidualny projekt w Figma, WordPress lub Next.js, dedykowane narzędzia i pełna własność. Sprawdź cennik.',
    url: 'https://www.arteonagency.pl/uslugi/strony-internetowe-dla-firm',
    type: 'website',
    images: [
      {
        url: 'https://www.arteonagency.pl/assets/projects/msc/moskup-strony-msc-psychotherapy.webp',
        width: 1200,
        height: 630,
      },
    ],
  },
} as const;

const FAQ_ITEMS = [
  {
    question: 'Ile kosztuje stworzenie strony internetowej?',
    answer:
      'Cena zależy od liczby podstron, funkcji i wybranej technologii. Strona firmowa na WordPress kosztuje od 2 200 do 2 800 zł, strona rozbudowana z pozycjonowaniem od 3 500 do 4 800 zł, a strona w technologii Next.js od 8 000 zł. Projekty z dużą liczbą podstron lub dedykowanymi funkcjami wyceniamy indywidualnie.',
  },
  {
    question: 'W jakiej technologii budujecie strony?',
    answer:
      'Najczęściej w WordPress lub Next.js, a wybór dopasowujemy do Twoich celów i budżetu. WordPress to sprawdzony standard z łatwą samodzielną edycją i jednorazową płatnością. Next.js to technologia, w której zbudowana jest nasza własna witryna - daje najszybsze ładowanie, największą pewność wysokiej pozycji w Google i pozwala tworzyć dowolne dedykowane funkcje bez opłat za wtyczki.',
  },
  {
    question: 'Czy mogę zrobić stronę internetową samodzielnie albo za darmo?',
    answer:
      'Tak, darmowe kreatory takie jak Wix pozwalają postawić prostą stronę samodzielnie, a ChatGPT pomoże wygenerować podstawowy kod. To rozwiązanie sprawdza się przy stronie hobbystycznej lub testowej. Jeśli jednak strona ma realnie pozyskiwać klientów z Google, ograniczenia takich rozwiązań, jak słabsza wydajność, brak pełnej własności kodu i brak indywidualnego projektu, zwykle przeważają nad oszczędnością.',
  },
  {
    question: 'Czy muszę wpłacać zaliczkę przed rozpoczęciem prac?',
    answer:
      'Nie. Nie pobieramy zaliczek. Faktura jest wystawiana od razu po zakończeniu prac i prezentacji strony. Masz 7 dni na płatność i 14 dni na zgłoszenie poprawek od momentu prezentacji gotowej witryny.',
  },
  {
    question: 'Ile kosztuje miesięczne utrzymanie strony internetowej?',
    answer:
      'Nie pobieramy żadnych opłat za utrzymanie strony - to koszt 0 zł miesięcznie. Konfigurujemy automatyczne aktualizacje, kopie zapasowe i optymalizację, które działają bez dodatkowych opłat. Jedyne stałe koszty to domena (ok. 50-150 zł rocznie) i hosting (ok. 150-400 zł rocznie).',
  },
  {
    question: 'Jak długo trwa stworzenie strony internetowej?',
    answer:
      'Standardowo od 7 do 21 dni roboczych, w zależności od liczby podstron i dostępności materiałów (teksty, zdjęcia). Przed rozpoczęciem prac przygotowujemy projekt w Figma, który wspólnie omawiamy i akceptujesz. Dedykowane narzędzia, jak kalkulatory czy konfiguratory, mogą ten czas wydłużyć, o czym mówimy wcześniej.',
  },
  {
    question: 'Czy będę mógł samodzielnie edytować stronę?',
    answer:
      'Tak. Strony na WordPress mają panel z Elementor Pro, który pozwala samodzielnie edytować teksty, dodawać zdjęcia i tworzyć nowe podstrony. Strony w Next.js również przygotowujemy tak, abyś mógł zarządzać treściami bez znajomości kodu. Na życzenie przeprowadzamy szkolenie z obsługi.',
  },
  {
    question:
      'Czy strona jest robiona z gotowego szablonu, czy projektowana indywidualnie?',
    answer:
      'Każda strona ma indywidualny projekt graficzny, który przygotowujemy w Figma i przedstawiamy do akceptacji przed wdrożeniem. Nie korzystamy z gotowych szablonów, dzięki czemu strona wygląda inaczej niż strony konkurencji i jest dopasowana do Twojej marki.',
  },
  {
    question: 'Potrzebuję nietypowej funkcji. Zbudujecie ją?',
    answer:
      'Tak. Oprócz standardowych stron budujemy dedykowane narzędzia dopasowane do branży - kalkulatory wyceny, konfiguratory produktu, testy dla klientów czy systemy rezerwacji. Że potrafimy tworzyć takie funkcje od zera, widać po naszych własnych darmowych narzędziach, jak generator stopek mailowych, konwertery obrazów czy generator kodów QR.',
  },
  {
    question: 'Co jeśli nie mam gotowych tekstów na stronę?',
    answer:
      'Pomagamy w przygotowaniu treści. Doradzamy strukturę strony pod kątem SEO i pomagamy w redakcji tekstów. Możemy pracować z materiałami, które dostarczysz, lub pomóc stworzyć je od podstaw.',
  },
  {
    question: 'Czy strona internetowa będzie widoczna w Google?',
    answer:
      'Tak, pozycjonowanie to jedna z naszych specjalizacji. Wdrażamy techniczne SEO, optymalizujemy wydajność i budujemy strukturę podstron pod frazy, których szukają Twoi klienci. Po uruchomieniu możemy zająć się pełnym pozycjonowaniem i prowadzeniem bloga. Największą pewność wysokiej pozycji, nawet na trudne frazy, daje technologia Next.js.',
  },
  {
    question: 'Czy pomagacie z domeną i hostingiem?',
    answer:
      'Tak. Doradzamy w wyborze domeny i hostingu, pomagamy w konfiguracji i podłączeniu. Możemy też przejąć zarządzanie tymi elementami, jeśli tego potrzebujesz.',
  },
];

function ServiceSchema() {
  const json = buildServiceSchema({
    path: '/uslugi/strony-internetowe-dla-firm',
    serviceName: 'Tworzenie stron internetowych dla firm',
    description:
      'Projektujemy i pozycjonujemy strony internetowe dla firm w technologii WordPress lub Next.js. Indywidualny projekt w Figma, dedykowane narzędzia dopasowane do branży, faktura po realizacji i pełna własność.',
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
      id='schema-service-strony-internetowe-dla-firm'
      type='application/ld+json'
    >
      {JSON.stringify(extendedJson)}
    </Script>
  );
}

/**
 * Pillar page for the company-websites service (`/uslugi/strony-internetowe-dla-firm`).
 *
 * Mirrors the approved niche offer-page flow: realizations right under the hero, a positive "who we
 * are / how we work" intro (not an attack on free builders), testimonials high up, custom-solutions +
 * add-ons merged, an "what else we do" cross-sell, the WordPress vs Next.js comparison with the Ahrefs
 * proof, the shared guarantees tiles, pricing and contact. House voice: end client first, honest,
 * positive, full sentences.
 */
export default function StronyInternetoweDlaFirmPage() {
  return (
    <>
      <HeroBanner
        title='Strony internetowe dla firm'
        description={
          <>
            Projektujemy i pozycjonujemy strony dla firm - od prostej wizytówki
            po zaawansowane funkcje dopasowane do Twojej branży. Indywidualny
            projekt graficzny, nacisk na widoczność w Google i rozwiązania
            dobrane do tego czego potrzebuje Twój klient.
          </>
        }
        backgroundImage='/assets/projects/msc/moskup-strony-msc-psychotherapy.webp'
        overlay='black'
        secondaryCtaLabel='Darmowa wycena'
        secondaryCtaHref='#kontakt'
      />

      <BenefitBelt variant='carousel' />

      <Breadcrumbs
        second={{ href: '/uslugi', label: 'Usługi' }}
        third={{
          href: '/uslugi/strony-internetowe-dla-firm',
          label: 'Strony internetowe dla firm',
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
          title='Projektujemy strony od zera, z myślą o Twoich klientach'
          imageSrc='/assets/projects/jstax/moskup-strony-jstax.webp'
          imageAlt='Realizacja strony internetowej dla kancelarii doradztwa podatkowego JSTax - mockup Arteon'
        >
          <p>
            <strong>
              Jesteśmy agencją, która projektuje strony internetowe dla firm i
              buduje je z myślą o widoczności w Google.
            </strong>
          </p>
          <br />
          <p>
            Zaczynamy od zrozumienia Twojej firmy i tego, jak wybiera Twój
            klient, a potem przekładamy to na indywidualny projekt, treści i
            strukturę strony. Nie pracujemy na gotowych szablonach i nie
            pobieramy abonamentu za samą stronę.
          </p>
          <br />
          <p>
            Technologię dobieramy do Twoich celów i budżetu, w WordPress albo
            Next.js, a Ty dostajesz witrynę w pełni na własność. Tworzymy strony
            dla firm z różnych branż, od gabinetów i kancelarii po firmy
            budowlane i producentów.
          </p>
        </SectionBasic>

        <Divider line />

        <TestimonialsCarousel secondaryTitle='Od prostych wizytówek, przez rozbudowane strony, do pełnych identyfikacji wizualnych' />

        <Divider line />

        <FeatureGrid
          title='Co dostajesz w ramach tworzenia strony internetowej?'
          variant='centered'
          columns={3}
          items={[
            {
              title: 'Indywidualny projekt w Figma',
              description: (
                <p>
                  Zanim zaczniemy budować, przygotowujemy indywidualny projekt
                  graficzny strony głównej od podstaw - nie z gotowego szablonu.
                  Dostajesz link do podglądu i wspólnie ustalamy finalny wygląd.
                </p>
              ),
              icon: (
                <RiPencilRuler2Line
                  className={cn('text-primary', normalIconSizeClasses)}
                />
              ),
            },
            {
              title: 'WordPress lub Next.js',
              description: (
                <p>
                  Dobieramy technologię do Twoich celów i budżetu. WordPress z
                  licencją Elementor Pro w cenie albo Next.js dla maksymalnej
                  prędkości i pewności pozycji w Google.
                </p>
              ),
              icon: (
                <RiLayoutLine
                  className={cn('text-primary', normalIconSizeClasses)}
                />
              ),
            },
            {
              title: 'Optymalizacja wydajności',
              description: (
                <p>
                  Optymalizujemy obrazy, kod i konfigurację, bo{' '}
                  <a
                    href='https://pagespeed.web.dev/'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-link'
                  >
                    prędkość ładowania
                  </a>{' '}
                  jest jednym z czynników rankingowych w Google i realnie wpływa
                  na to, ilu odwiedzających zostaje na stronie.
                </p>
              ),
              icon: (
                <RiSpeedUpLine
                  className={cn('text-primary', normalIconSizeClasses)}
                />
              ),
            },
            {
              title: 'Dedykowane funkcje dla branży',
              description: (
                <p>
                  Kalkulatory wyceny, konfiguratory produktu, testy dla klientów
                  czy systemy rezerwacji - budujemy narzędzia dopasowane do
                  tego, jak sprzedajesz i jak wybiera Twój klient.
                </p>
              ),
              icon: (
                <RiCheckboxCircleLine
                  className={cn('text-primary', normalIconSizeClasses)}
                />
              ),
            },
            {
              title: 'Pomoc z treściami i SEO',
              description: (
                <p>
                  Doradzamy strukturę strony pod kątem widoczności w Google.
                  Pomagamy w przygotowaniu i redakcji tekstów, które odpowiadają
                  na pytania potencjalnych klientów.
                </p>
              ),
              icon: (
                <RiArticleLine
                  className={cn('text-primary', normalIconSizeClasses)}
                />
              ),
            },
            {
              title: 'Automatyzacja utrzymania',
              description: (
                <p>
                  Konfigurujemy automatyczne aktualizacje, kopie zapasowe i
                  optymalizację. Nie musisz się martwić o techniczne aspekty
                  utrzymania strony, a za samą stronę nie płacisz abonamentu.
                </p>
              ),
              icon: (
                <RiShieldCheckLine
                  className={cn('text-primary', normalIconSizeClasses)}
                />
              ),
            },
            {
              title: 'Zgodność prawna i dostępność',
              description: (
                <p>
                  Przygotowujemy politykę prywatności, obsługę cookies (RODO) i
                  deklarację dostępności. Kolory zgodne z WCAG 2.1 AA - strona
                  czytelna dla każdego.
                </p>
              ),
              icon: (
                <GoLaw className={cn('text-primary', normalIconSizeClasses)} />
              ),
            },
            {
              title: 'Pełna własność i dostępy',
              description: (
                <p>
                  Przekazujemy wszystkie hasła i dostępy - do hostingu, domeny,
                  panelu strony i Google Search Console. Strona jest Twoja w
                  100%.
                </p>
              ),
              icon: (
                <RiKey2Line
                  className={cn('text-primary', normalIconSizeClasses)}
                />
              ),
            },
            {
              title: 'Wsparcie po realizacji',
              description: (
                <p>
                  Po uruchomieniu strony nie zostawiamy Cię samego. Odpowiadamy
                  na pytania, doradzamy jak zwiększać widoczność i pomagamy przy
                  kolejnych krokach.
                </p>
              ),
              icon: (
                <RiCustomerService2Line
                  className={cn('text-primary', normalIconSizeClasses)}
                />
              ),
            },
          ]}
        />

        <Divider line />

        <SectionBasic
          variant='right'
          title='Dopasowane rozwiązania, nie gotowe klocki'
          imageSrc='/assets/projects/napilota/mockup-strony-napilota.webp'
          imageAlt='Realizacja strony internetowej z katalogiem produktów dla firmy NaPilota - mockup Arteon'
        >
          <p>
            Jeśli Twoja branża potrzebuje własnego narzędzia, budujemy je od
            zera i dopasowujemy do tego, jak wybiera Twój klient. Kalkulator
            wyceny dla{' '}
            <Link
              prefetch={false}
              className='inline-link'
              href='/uslugi/strona-internetowa-dla-firmy-wykonczeniowej'
            >
              firmy wykończeniowej
            </Link>
            , test przesiewowy dla{' '}
            <Link
              prefetch={false}
              className='inline-link'
              href='/uslugi/strona-internetowa-dla-psychologa'
            >
              psychologa
            </Link>{' '}
            czy konfigurator produktu dla{' '}
            <Link
              prefetch={false}
              className='inline-link'
              href='/uslugi/strona-internetowa-dla-producenta'
            >
              producenta
            </Link>{' '}
            realnie pomagają zamienić odwiedzającego w zapytanie.
          </p>
          <ul className='mt-4 list-disc space-y-2 pl-5 text-sm'>
            <li>
              <strong>Blog firmowy</strong> - artykuły, które wspierają
              widoczność w Google i budują pozycję eksperta
            </li>
            <li>
              <strong>Kalkulatory i konfiguratory</strong> - dopasowane do
              Twoich usług lub produktu
            </li>
            <li>
              <strong>System rezerwacji</strong> - umawianie wizyt, konsultacji
              lub spotkań przez stronę
            </li>
            <li>
              <strong>Sklep internetowy</strong> - sprzedaż produktów wprost ze
              strony, z płatnościami i dostawą
            </li>
            <li>
              <strong>Wielojęzyczność i integracje</strong> - wersje językowe
              oraz połączenie z CRM, ERP lub innymi systemami
            </li>
          </ul>
          <p className='mt-4'>
            Że potrafimy budować dedykowane funkcje, widać po naszych własnych
            darmowych{' '}
            <Link prefetch={false} className='inline-link' href='/narzedzia'>
              narzędziach
            </Link>
            : generatorze stopek mailowych, konwerterach obrazów, edytorze zdjęć
            i generatorze kodów QR.
          </p>
        </SectionBasic>

        <Divider line />

        <SectionSteps
          title='Strona internetowa dla Twojej branży'
          subtitle='Oferty specjalne'
          description='Dla wybranych branż przygotowaliśmy dedykowane oferty. Każda uwzględnia realne potrzeby danej grupy i to, czego szukają jej klienci - od formularza ze świadomą zgodą po konfigurator produktu.'
          grid='four'
          items={[
            {
              topImageSrc:
                '/assets/projects/msc/moskup-strony-msc-psychotherapy.webp',
              topImageAlt:
                'Strona internetowa dla psychoterapeutki MSC Psychotherapy - realizacja Arteon',
              title: 'Strona dla psychologa',
              description: (
                <div className='flex h-full flex-col'>
                  <p className='mb-3 text-sm'>
                    Profil specjalisty, opis terapii i formularz ze świadomą
                    zgodą zgodny z RODO.
                  </p>
                  <div className='mt-auto'>
                    <ButtonLink
                      arrow
                      href='/uslugi/strona-internetowa-dla-psychologa'
                    >
                      Przejdź do oferty
                    </ButtonLink>
                  </div>
                </div>
              ),
            },
            {
              topImageSrc:
                '/assets/projects/finish-masters/strona/moskup-strony-finish-masters.webp',
              topImageAlt:
                'Strona internetowa dla firmy wykończeniowej Finish Masters - realizacja Arteon',
              title: 'Strona dla firmy wykończeniowej',
              description: (
                <div className='flex h-full flex-col'>
                  <p className='mb-3 text-sm'>
                    Galeria realizacji przed i po oraz formularz wyceny, który
                    przysyła gotowych klientów.
                  </p>
                  <div className='mt-auto'>
                    <ButtonLink
                      arrow
                      href='/uslugi/strona-internetowa-dla-firmy-wykonczeniowej'
                    >
                      Przejdź do oferty
                    </ButtonLink>
                  </div>
                </div>
              ),
            },
            {
              topImageSrc:
                '/assets/projects/izoluk/strona-internetowa-firma-budowlana-ocieplenia-izoluk-mockup-realizacja-arteon.webp',
              topImageAlt:
                'Strona internetowa dla firmy budowlanej Izoluk - realizacja Arteon',
              title: 'Strona dla firmy budowlanej',
              description: (
                <div className='flex h-full flex-col'>
                  <p className='mb-3 text-sm'>
                    Dokumentacja etapów budowy, prezentacja sprzętu i uprawnień
                    oraz formularz zapytania dla inwestorów.
                  </p>
                  <div className='mt-auto'>
                    <ButtonLink
                      arrow
                      href='/uslugi/strona-internetowa-dla-firmy-budowlanej'
                    >
                      Przejdź do oferty
                    </ButtonLink>
                  </div>
                </div>
              ),
            },
            {
              topImageSrc:
                '/assets/projects/stepard/strona/moskup-strony-stepard.webp',
              topImageAlt:
                'Strona internetowa dla producenta schodów StepArd - realizacja Arteon',
              title: 'Strona dla producenta',
              description: (
                <div className='flex h-full flex-col'>
                  <p className='mb-3 text-sm'>
                    Katalog produktów, konfigurator i wycena z projektu dla
                    producentów mebli, schodów czy wyrobów gotowych.
                  </p>
                  <div className='mt-auto'>
                    <ButtonLink
                      arrow
                      href='/uslugi/strona-internetowa-dla-producenta'
                    >
                      Przejdź do oferty
                    </ButtonLink>
                  </div>
                </div>
              ),
            },
          ]}
        />

        <Divider line />

        <SectionBasic
          title='Co jeszcze robimy?'
          imageSrc='/assets/projects/stepard/wizytowki/mockup-wizytowki-stepard.webp'
          imageAlt='Wizytówki dla producenta schodów StepArd - realizacja Arteon'
          btnOne='Darmowa wycena'
          btnOneHref='#kontakt'
        >
          <p>
            Specjalizujemy się nie tylko w budowie stron, ale również w
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
            i materiały reklamowe, zająć się{' '}
            <Link
              prefetch={false}
              className='inline-link'
              href='/uslugi/marketing/pozycjonowanie-stron'
            >
              pozycjonowaniem
            </Link>{' '}
            strony i prowadzeniem bloga, a jeśli sprzedajesz produkty, zbudować{' '}
            <Link
              prefetch={false}
              className='inline-link'
              href='/uslugi/sklepy-internetowe'
            >
              sklep internetowy
            </Link>
            .
          </p>
          <br />
          <p>
            Dzięki temu wszystko masz w jednym miejscu: spójne, dopasowane do
            Twojej marki i prowadzone przez jeden zespół.
          </p>
        </SectionBasic>

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
                  przystępnej cenie. Możesz w łatwy sposób samodzielnie edytować
                  treści i dodawać podstrony. Płacisz jednorazowo, bez
                  abonamentu za samą stronę. Minus? Wordpress wymaga
                  aktualizacji i wtyczek, które często są płatne. Przy
                  zaawansowanych funkcjach koszt utrzymania przez wtyczki
                  potrafi rosnąć, a same strony wczytują się wolniej, przez co
                  pozycjonowanie jest trudniejsze.
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
                  Wybór dla firm, które chcą maksymalnej swobody i pełnej
                  pewności wysokiej pozycji w Google. Tej technologii używamy na
                  naszej witrynie. Strony w Next.js działają błyskawicznie i
                  pozwalają na tworzenie funkcji każdego typu bez comiesięcznych
                  opłat - możesz mieć własne kalkulatory, konfiguratory czy
                  testy dla klientów. Minus? Strony w Next.js są droższe w
                  realizacji, bo wymagają pisania całego kodu ręcznie.
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

        <SectionTimeline
          title='Jak wygląda współpraca przy tworzeniu strony?'
          items={[
            {
              icon: <RiPencilRuler2Line className={normalIconSizeClasses} />,
              title: 'Wycena i projekt',
              description:
                'Opisujesz swoją firmę i potrzeby. Przygotowujemy wycenę i projekt graficzny strony głównej w Figma. Dostajesz link do podglądu - możesz oglądać i komentować w dowolnym miejscu.',
            },
            {
              icon: <RiCheckDoubleLine className={normalIconSizeClasses} />,
              title: 'Akceptacja projektu',
              description:
                'Wspólnie omawiamy projekt i tłumaczymy, jakie korzyści dają poszczególne elementy. Wprowadzamy poprawki aż do pełnej akceptacji. Dopiero wtedy przechodzimy do budowania strony.',
            },
            {
              icon: <RiLayoutLine className={normalIconSizeClasses} />,
              title: 'Wdrożenie strony',
              description:
                'Budujemy stronę w wybranej technologii, konfigurujemy formularze i dedykowane funkcje, optymalizujemy wydajność, wdrażamy SEO techniczne i testujemy na wszystkich urządzeniach.',
            },
            {
              icon: <RiMailSendLine className={normalIconSizeClasses} />,
              title: 'Faktura po odbiorze',
              description:
                'Prezentujemy gotową stronę i przekazujemy pełne dostępy. Faktura wystawiana jest od razu po zakończeniu prac. Masz 7 dni na płatność i 14 dni na zgłoszenie poprawek.',
            },
          ]}
        />

        <Divider line />

        <SectionBasic
          variant='right'
          title='Jasne gwarancje, jasne zasady'
          imageSrc='/assets/projects/finish-masters/strona/moskup-strony-finish-masters.webp'
          imageAlt='Realizacja strony internetowej dla firmy Finish Masters - mockup Arteon'
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
          id='pricing-web'
          title='Ile kosztuje stworzenie strony internetowej?'
          description='Każdą realizację wyceniamy indywidualnie, jednak abyś miał punkty odniesienia, przygotowaliśmy trzy przykładowe pakiety.'
          plans={[
            {
              name: 'Strona firmowa',
              technology: 'WordPress',
              price: '2 200 - 2 800 zł',
              description: 'Dla firm z kilkoma usługami. Idealna na start.',
              features: [
                '5-8 podstron (strona główna, oferta, o nas, kontakt)',
                'Indywidualny projekt w Figma do akceptacji',
                'Licencja Elementor Pro w cenie',
                'Optymalizacja wydajności i SEO techniczne',
                'Formularze, mapy, ikony mediów społecznościowych',
                'Polityka prywatności i cookies (RODO)',
                'Panel do samodzielnej edycji',
                'Automatyzacja aktualizacji i backupów',
                'Wsparcie po realizacji',
              ],
              btnOne: 'Darmowa wycena',
              btnOneHref: '#kontakt',
            },
            {
              name: 'Strona rozbudowana',
              technology: 'WordPress',
              price: '3 500 - 4 800 zł',
              description:
                'Dla firm z większą ofertą, które chcą pozyskiwać klientów z Google.',
              features: [
                'Wszystko z pakietu strony firmowej',
                '9+ podstron z rozbudowaną strukturą',
                'Osobne podstrony dla poszczególnych usług',
                'Blog firmowy z szablonem wpisów',
                'Elementy dopasowane do Twojej branży',
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
                'Dla firm, które chcą najszybszej strony, dedykowanych narzędzi i pewności wysokiej pozycji.',
              features: [
                'Wszystko z pakietu rozbudowanego',
                'Błyskawiczna prędkość (Core Web Vitals) jako przewaga w Google',
                'Największa pewność wysokiej pozycji na trudne frazy',
                'Dedykowane narzędzia: kalkulatory, konfiguratory, testy',
                'Możliwość rozbudowy o sklep',
              ],
              btnOne: 'Darmowa wycena',
              btnOneHref: '#kontakt',
            },
          ]}
          note={{
            text: (
              <p className='text-light'>
                <strong className='text-dark'>
                  Potrzebujesz bardzo rozbudowanej strony, sklepu lub
                  dedykowanych funkcji?{' '}
                </strong>
                Przygotujemy wycenę dopasowaną do skali projektu. Opisz swoje
                potrzeby w formularzu.
              </p>
            ),
            ctaLabel: 'Opisz swój projekt',
            ctaLink: '#kontakt',
          }}
          legalNote='Podane ceny są cenami końcowymi na fakturze. Wycena nie obejmuje kosztów domeny i hostingu (ok. 200-500 zł/rok).'
        />

        <Divider line />

        <SectionContactForm
          title='Darmowa wycena'
          description='Napisz co chciałbyś/aś umieścić na swojej stronie, czy potrzebujesz pomocy z tworzeniem treści oraz czy posiadasz materiały graficzne (logo oraz zdjęcia) i otrzymaj darmową wycenę realizacji.'
          imageSrc='/assets/projects/arteon-baners-camper-albania-mockup.webp'
          imageAlt='Realizacja strony internetowej - Camper Albania mockup'
          defaultSubject='Tworzenie strony internetowej'
          messagePlaceholder='Napisz co chcesz zrealizować'
        />

        <Divider line />

        <SectionFaqPanels
          defaultOpenIndex={1}
          pageUrl='https://www.arteonagency.pl/uslugi/strony-internetowe-dla-firm'
          title='Najczęstsze pytania dotyczące tworzenia strony internetowej'
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
                '/assets/projects/trilllizo/moskup-strony-trilllizo.webp',
              btnLabel: 'Sprawdź ofertę',
              btnLink: '/uslugi/sklepy-internetowe',
            },
            {
              title: 'Pozycjonowanie stron',
              size: 'medium',
              backgroundImage:
                '/assets/projects/napilota/mockup-strony-napilota.webp',
              btnLabel: 'Sprawdź ofertę',
              btnLink: '/uslugi/marketing/pozycjonowanie-stron',
            },
            {
              title: 'Projekt logo',
              size: 'small',
              backgroundImage:
                '/assets/projects/stepard/logo/mockup-logo-stepard.webp',
              btnLabel: 'Sprawdź ofertę',
              btnLink: '/uslugi/projekty-graficzne/projekt-logo',
            },
            {
              title: 'Tworzenie treści',
              size: 'small',
              backgroundImage:
                '/assets/projects/msc/moskup-strony-msc-psychotherapy.webp',
              btnLabel: 'Sprawdź ofertę',
              btnLink: '/uslugi/tworzenie-tresci',
            },
          ]}
        />

        <Divider line />

        <ArticlesCarousel
          secondaryTitle='Od prostych wizytówek, przez rozbudowane strony, do pełnych identyfikacji wizualnych'
          title='Przydatne artykuły dotyczące stron internetowych'
          categorySlug='strony'
          articles={getArticlePreviewsByCategory('strony', 6)}
        />

        <Divider size='sm' />
      </Wrapper>

      <CTABanner
        title='Strona internetowa, która pomaga pozyskiwać klientów'
        description='Otrzymujesz stronę zaprojektowaną od zera, zoptymalizowaną pod Google i dopasowaną do Twojej branży. Płacisz dopiero po zakończeniu prac.'
        btnOne='Darmowa wycena'
        btnOneHref='#kontakt'
        backgroundImage='/assets/projects/izoluk/strona-internetowa-firma-budowlana-ocieplenia-izoluk-mockup-realizacja-arteon.webp'
        overlay='black'
      />

      <ServiceSchema />
    </>
  );
}
