import Image from 'next/image';
import Script from 'next/script';
import {
  RiSpeedFill,
  RiToolsLine,
  RiShieldCheckLine,
  RiDeviceLine,
  RiBarChart2Fill,
  RiFileList2Line,
} from 'react-icons/ri';
import Divider from '@/components/atoms/Divider';
import Wrapper from '@/components/atoms/Wrapper';
import Breadcrumbs from '@/components/molecules/BreadCrumbs';
import BenefitBelt from '@/components/organisms/BenefitBelt';
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
import { buildServiceSchema } from '@/lib/seo/serviceSchema';
import { largeIconSizeClasses, normalIconSizeClasses } from '@/lib/uiClasses';
import { cn } from '@/lib/utils';
import { siteUrl } from '@/utils/absoluteUrl';

export const metadata = {
  title:
    'Optymalizacja strony WordPress - wynik 90+/100 lub brak opłaty | Arteon',
  description:
    'Optymalizacja stron WordPress z gwarancją wyniku 90+/100 w PageSpeed. Szybsze ładowanie, lepsze Core Web Vitals.',
  alternates: {
    canonical:
      'https://www.arteonagency.pl/uslugi/tworzenie-stron-wordpress/optymalizacja-strony-wordpress',
  },
  openGraph: {
    title:
      'Optymalizacja strony WordPress - wynik 90+/100 lub brak opłaty | Arteon',
    description:
      'Optymalizacja stron WordPress z gwarancją wyniku 90+/100 w PageSpeed. Szybsze ładowanie, lepsze Core Web Vitals.',
    url: `${siteUrl}/uslugi/tworzenie-stron-wordpress/optymalizacja-strony-wordpress`,
    type: 'website',
    siteName: 'Arteon',
    images: [
      {
        url: `${siteUrl}/assets/projects/arteon-baners-camper-albania-mockup.webp`,
        width: 1200,
        height: 630,
      },
    ],
  },
} as const;

function ServiceSchema() {
  const json = buildServiceSchema({
    path: '/uslugi/tworzenie-stron-wordpress/optymalizacja-strony-wordpress',
    serviceName: 'Optymalizacja strony WordPress',
    description:
      'Optymalizacja stron WordPress z naciskiem na wydajność, stabilność i wersję mobilną. Strona zyskuje lepsze wyniki w testach szybkości i solidne podstawy pod SEO.',
    availableLanguages: ['pl'],
    includeServiceChannel: true,
  });

  return (
    <Script
      id='schema-service-optymalizacja-wordpress'
      type='application/ld+json'
    >
      {JSON.stringify(json)}
    </Script>
  );
}

/**
 * Renders the "Optymalizacja strony WordPress" marketing and offer page.
 *
 * The page includes hero banner, benefits belt, breadcrumbs, multiple informational
 * sections (features, steps, pricing, testimonials, FAQs), contact form, related
 * services, CTAs, and JSON-LD service schema for SEO.
 *
 * @returns The React element representing the complete WordPress optimization offer page.
 */
export default function OfferOptimizationWordPressPage() {
  return (
    <>
      <HeroBanner
        title='Wydajniejsza strona WordPress = więcej klientów'
        description={
          <>
            Strona, która szybko się ładuje i działa stabilnie, daje lepsze
            wyniki w Google i więcej zapytań od klientów. W ramach tej usługi
            WordPress zyskuje wynik <strong>90+/100 w PageSpeed</strong> albo
            nie ponosisz kosztu optymalizacji. Faktura wystawiana jest dopiero
            po realizacji prac.
          </>
        }
        secondaryCtaLabel='Sprawdź swoją stronę'
        secondaryCtaHref='#kontakt'
        variant='left'
        backgroundImage='/assets/projects/arteon-baners-camper-albania-mockup.webp'
        overlay='black'
        subtitle='Oferta specjalna: optymalizacja WordPress'
      />

      <BenefitBelt variant='carousel' />

      <Breadcrumbs
        second={{ href: '/uslugi', label: 'Usługi' }}
        third={{
          href: '/uslugi/tworzenie-stron-wordpress',
          label: 'Tworzenie stron WordPress',
        }}
        fourth={{
          href: '/uslugi/tworzenie-stron-wordpress/optymalizacja-strony-wordpress',
          label: 'Optymalizacja strony WordPress',
        }}
        includeJsonLd
      />

      <Wrapper>
        <Divider size='xs' />

        <SectionInfo
          title='Co realnie daje optymalizacja strony WordPress?'
          subtitle='Wydajność, stabilność i gotowość na ruch'
        >
          <p>
            Wolna lub niestabilna strona WordPress utrudnia pozyskiwanie
            klientów. Długi czas ładowania, problemy na telefonach i
            przeładowanie wtyczkami powodują, że użytkownicy szybciej zamykają
            kartę, a systemy reklamowe i Google mniej chętnie kierują na taką
            witrynę ruch.
          </p>

          <br />

          <p>
            Optymalizacja strony WordPress porządkuje warstwę techniczną tak,
            aby witryna ładowała się wyraźnie szybciej, była czytelna na
            urządzeniach mobilnych i stanowiła stabilną bazę pod SEO oraz
            kampanie reklamowe. Efektem jest wygodniejsza ścieżka użytkownika i
            większa gotowość biznesu na intensywniejszy ruch.
          </p>
        </SectionInfo>

        <Divider line />

        <SectionBasic
          variant='right'
          imageSrc='/assets/projects/finish-masters/strona/finish-masters-optymalizacja-strony-wynik.webp'
          imageAlt='Wynik optymalizacji strony WordPress - raport PageSpeed Insights firmy Finish Masters'
          subtitle='Dla kogo'
          title='Kiedy optymalizacja WordPress ma największy sens?'
          description='Największe korzyści pojawiają się wtedy, gdy strona już działa, ale jej szybkość lub stabilność ogranicza rozwój. Z takiej usługi najczęściej korzystają:'
          btnOne='Sprawdź, czy warto optymalizować'
          btnOneHref='#kontakt'
        >
          <ul className='mt-4 list-disc space-y-2 pl-5 text-sm'>
            <li>
              firmy posiadające stronę WordPress, która działa wolno lub
              niestabilnie,
            </li>
            <li>
              biznesy planujące działania SEO lub kampanie reklamowe i
              potrzebujące solidnej bazy technicznej,
            </li>
            <li>
              marki, których witryny przez lata rozbudowano o wiele wtyczek,
              motywów i dodatków.
            </li>
          </ul>
        </SectionBasic>

        <Divider line />

        <FeatureGrid
          title='Co robimy w ramach optymalizacji WordPress?'
          subtitle='Zakres działań i efekty'
          items={[
            {
              title: 'Szybsze ładowanie i lepsze Core Web Vitals',
              description: (
                <>
                  Optymalizujemy kod, konfigurację oraz zasoby, aby skrócić czas
                  ładowania strony i poprawić wyniki w PageSpeed Insights.
                  Efekt: lepsze doświadczenie użytkownika i wyższa widoczność w
                  Google, szczególnie na urządzeniach mobilnych.
                </>
              ),
              icon: (
                <RiSpeedFill
                  className={cn('text-primary', normalIconSizeClasses)}
                />
              ),
            },
            {
              title: 'Porządki we wtyczkach i motywie',
              description: (
                <>
                  Usuwamy zbędne wtyczki, porządkujemy konfigurację i wskazujemy
                  elementy, które spowalniają stronę lub powodują konflikty.
                  Efekt: stabilniejsza strona i mniej problemów technicznych
                  przy dalszych aktualizacjach.
                </>
              ),
              icon: (
                <RiToolsLine
                  className={cn('text-primary', normalIconSizeClasses)}
                />
              ),
            },
            {
              title: 'Obrazy dopasowane do urządzeń',
              description: (
                <>
                  Kompresujemy grafiki, ustawiamy właściwe rozmiary i formaty
                  (np. WebP) oraz wdrażamy poprawne ładowanie. Efekt: mniejsze
                  zużycie transferu i znacznie lepsza szybkość działania
                  witryny.
                </>
              ),
              icon: (
                <RiFileList2Line
                  className={cn('text-primary', normalIconSizeClasses)}
                />
              ),
            },
            {
              title: 'Wersja mobilna i wygoda korzystania',
              description: (
                <>
                  Korygowane są marginesy, czcionki i przyciski na telefonach.
                  Efekt: strona jest czytelna, łatwa w obsłudze i lepiej
                  przygotowana na ruch z urządzeń mobilnych.
                </>
              ),
              icon: (
                <RiDeviceLine
                  className={cn('text-primary', normalIconSizeClasses)}
                />
              ),
            },
          ]}
        />

        <Divider line />

        <SectionInfo
          title='Jakie efekty mierzone są po optymalizacji WordPress?'
          subtitle='KPI i raport po wdrożeniu'
        >
          <ul className='ml-5 list-disc space-y-2'>
            <li>
              <strong>Wyniki testów szybkości:</strong> porównanie parametrów
              PageSpeed/Lighthouse oraz odczuwalnego czasu ładowania strony
              przed i po optymalizacji.
            </li>
            <li>
              <strong>Zachowanie użytkowników:</strong> obserwacja, czy po
              wprowadzeniu zmian użytkownikom łatwiej jest dotrzeć do oferty,
              formularza kontaktowego lub koszyka.
            </li>
            <li>
              <strong>Stabilność i wygoda dalszego rozwoju:</strong> po
              uporządkowaniu wtyczek i motywu łatwiej jest rozbudowywać stronę
              bez kolejnych spowolnień i konfliktów technicznych.
            </li>
          </ul>
        </SectionInfo>

        <Divider line />

        <SectionSteps
          title='Jak przebiega optymalizacja strony WordPress?'
          subtitle='Etapy współpracy'
          items={[
            {
              title: '1. Krótkie rozpoznanie i dostęp do strony',
              description: (
                <div className='flex h-full flex-col'>
                  <p className='mb-3 text-sm'>
                    Na początku ustalane są główne problemy: szybkość,
                    zachowanie strony na telefonach, błędy lub niestabilność.
                    Następnie przekazywany jest dostęp administratora do panelu
                    WordPress oraz, w razie potrzeby, do hostingu.
                  </p>
                </div>
              ),
            },
            {
              title: '2. Audyt techniczny WordPress',
              description: (
                <div className='flex h-full flex-col'>
                  <p className='mb-3 text-sm'>
                    Sprawdzane są wtyczki, motyw, sposób ładowania zasobów i
                    zachowanie strony na różnych urządzeniach. Na tej podstawie
                    powstaje plan zmian, który pozwala osiągnąć docelowy wynik w
                    PageSpeed.
                  </p>
                </div>
              ),
            },
            {
              title: '3. Wdrożenie zmian i testy „przed i po"',
              description: (
                <div className='flex h-full flex-col'>
                  <p className='mb-3 text-sm'>
                    Wprowadzane są uzgodnione zmiany, konfiguracja cache oraz
                    optymalizacja grafik. Następnie wykonywane są testy
                    szybkości i stabilności, a wyniki prezentowane są w formie
                    porównania „przed i po".
                  </p>
                </div>
              ),
            },
            {
              title: '4. Podsumowanie, rekomendacje i rozliczenie',
              description: (
                <div className='flex h-full flex-col'>
                  <p className='mb-3 text-sm'>
                    Na koniec przygotowywane jest krótkie podsumowanie prac oraz
                    rekomendacje dalszych działań technicznych lub SEO. Jeśli
                    wynik 90+/100 nie jest możliwy z powodów niezależnych (np.
                    ograniczenia hostingu lub motywu), zasady rozliczenia są
                    omawiane jeszcze przed startem prac.
                  </p>
                </div>
              ),
            },
          ]}
        />

        <Divider line />

        <SectionBasic
          variant='left'
          imageSrc='/assets/projects/izoluk/izoluk-optymalizacja-strony-wynik.webp'
          imageAlt='Wynik optymalizacji strony WordPress - raport PageSpeed Insights firmy Izoluk'
          subtitle='Typowe rezultaty'
          title='Jakie zmiany najczęściej widać po optymalizacji strony WordPress?'
          description='Zakres efektów zależy od punktu wyjścia i hostingu, ale w większości realizacji po optymalizacji widoczne są:'
        >
          <ul className='mt-4 grid grid-cols-1 gap-3 pl-0 text-sm md:grid-cols-3'>
            <li className='list-none rounded-lg bg-white p-4 ring-1 ring-neutral-200'>
              Wyraźnie szybsze ładowanie strony - szczególnie na urządzeniach
              mobilnych.
            </li>
            <li className='list-none rounded-lg bg-white p-4 ring-1 ring-neutral-200'>
              Stabilniejsza praca WordPressa dzięki mniejszej liczbie konfliktów
              między wtyczkami i motywami.
            </li>
            <li className='list-none rounded-lg bg-white p-4 ring-1 ring-neutral-200'>
              Czytelniejsza wersja mobilna i prostsza ścieżka do kontaktu,
              rezerwacji lub zakupu.
            </li>
          </ul>
        </SectionBasic>

        <Divider line />

        <SectionInfo
          title='Realne wyniki optymalizacji - przed i po'
          subtitle='Porównanie stanu stron klientów'
        >
          <p className='mb-6'>
            Każda optymalizacja kończy się raportem porównującym stan strony
            przed wdrożeniem i po zakończeniu prac. Poniżej kilka realnych
            przykładów z wdrożeń dla naszych klientów.
          </p>

          <div className='grid gap-8'>
            <div>
              <h3 className='h5 mb-3'>
                Camper Albania - wypożyczalnia kamperów
              </h3>
              <div className='grid grid-cols-2 gap-4 md:grid-cols-4'>
                <figure>
                  <div className='overflow-hidden rounded-lg border border-neutral-200'>
                    <Image
                      src='/assets/projects/camper-albania/camper-albania-optymalizacja-strony-wynik-przed.webp'
                      alt='Camper Albania - wynik PageSpeed przed optymalizacją'
                      width={1010}
                      height={875}
                      sizes='(min-width:768px) 50vw, 100vw'
                      className='h-auto w-full object-contain'
                    />
                  </div>
                  <figcaption className='mt-2 text-sm text-light'>
                    Przed optymalizacją
                  </figcaption>
                </figure>
                <figure>
                  <div className='overflow-hidden rounded-lg border border-neutral-200'>
                    <Image
                      src='/assets/projects/camper-albania/camper-albania-optymalizacja-strony-wynik-po.webp'
                      alt='Camper Albania - wynik PageSpeed po optymalizacji'
                      width={1010}
                      height={875}
                      sizes='(min-width:768px) 50vw, 100vw'
                      className='h-auto w-full object-contain'
                    />
                  </div>
                  <figcaption className='mt-2 text-sm font-semibold text-light'>
                    Po optymalizacji
                  </figcaption>
                </figure>
              </div>
            </div>

            <div>
              <h3 className='h5 mb-3'>
                MSC Psychotherapy - gabinet psychologiczny
              </h3>
              <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
                <figure>
                  <div className='overflow-hidden rounded-lg border border-neutral-200'>
                    <Image
                      src='/assets/projects/msc/msc-optymalizacja-strony-wynik-przed.webp'
                      alt='MSC Psychotherapy - wynik PageSpeed przed optymalizacją'
                      width={1009}
                      height={832}
                      sizes='(min-width:768px) 50vw, 100vw'
                      className='h-auto w-full object-contain'
                    />
                  </div>
                  <figcaption className='mt-2 text-sm text-light'>
                    Przed optymalizacją
                  </figcaption>
                </figure>
                <figure>
                  <div className='overflow-hidden rounded-lg border border-neutral-200'>
                    <Image
                      src='/assets/projects/msc/msc-optymalizacja-strony-wynik-po.webp'
                      alt='MSC Psychotherapy - wynik PageSpeed po optymalizacji'
                      width={1009}
                      height={832}
                      sizes='(min-width:768px) 50vw, 100vw'
                      className='h-auto w-full object-contain'
                    />
                  </div>
                  <figcaption className='mt-2 text-sm font-semibold text-light'>
                    Po optymalizacji
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </SectionInfo>

        <Divider line />

        <SectionPrices
          title='Cennik optymalizacji strony WordPress'
          plans={[
            {
              name: 'Optymalizacja WordPress: strona firmowa',
              price: 'od 650 do 850 zł',
              description:
                'Dla prostych stron firmowych i landing page, gdzie potrzebne jest przyspieszenie ładowania oraz porządki we wtyczkach.',
              features: [
                'Analiza stanu technicznego WordPressa i hostingu',
                'Konfiguracja cache i optymalizacja kluczowych zasobów',
                'Porządki we wtyczkach (usunięcie zbędnych dodatków)',
                'Optymalizacja wybranych grafik i podstawowe poprawki wersji mobilnej',
                'Raport „przed i po" z wynikami testów szybkości',
              ],
              btnOne: 'Poproś o wycenę w tym przedziale',
              btnOneHref: '#kontakt',
            },
            {
              name: 'Optymalizacja WordPress: rozbudowana witryna',
              price: 'od 850 do 1050 zł',
              description:
                'Dla stron z większą liczbą podstron lub rozbudowaną strukturą, gdzie liczy się wydajność, wersja mobilna i dalszy rozwój.',
              features: [
                'Wszystko z pakietu dla stron firmowych, a dodatkowo:',
                'Optymalizacja większej liczby podstron i szablonów',
                'Szersze porządki we wtyczkach i integracjach',
                'Dopasowanie wersji mobilnej kluczowych podstron',
                'Rekomendacje pod kolejne działania SEO i rozwój witryny',
              ],
              btnOne: 'Zamów szczegółową wycenę',
              btnOneHref: '#kontakt',
            },
          ]}
          legalNote='Większość realizacji mieści się w przedziale 650-1050 zł. Ostateczna wycena zależy od wielkości strony, hostingu oraz stanu wyjściowego WordPressa. Przed rozpoczęciem prac przedstawiamy jasny zakres działań, szacowany wynik oraz zasady rozliczenia przy braku możliwości osiągnięcia 90+/100.'
        />

        <Divider line />

        <TestimonialsCarousel />

        <Divider line />

        <SectionSteps
          title='Zobacz też'
          subtitle='Usługi powiązane z optymalizacją WordPress'
          description='Optymalizacja WordPress często łączy się z działaniami SEO oraz stałą opieką techniczną nad stroną.'
          items={[
            {
              icon: <RiBarChart2Fill className={largeIconSizeClasses} />,
              title: 'Optymalizacja SEO (wdrożenia)',
              description: (
                <div className='flex h-full flex-col'>
                  <p className='mb-3 text-sm'>
                    Po uporządkowaniu WordPressa można przejść do wdrożeń SEO:
                    dopracowania tytułów, opisów i struktury treści, aby lepiej
                    wykorzystać poprawioną wydajność.
                  </p>
                  <div className='mt-auto'>
                    <a
                      href='/uslugi/marketing/optymalizacja-seo'
                      className='inline-link text-sm'
                    >
                      Przejdź do optymalizacji SEO
                    </a>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiShieldCheckLine className={largeIconSizeClasses} />,
              title: 'Audyt SEO',
              description: (
                <div className='flex h-full flex-col'>
                  <p className='mb-3 text-sm'>
                    Pełna diagnoza widoczności strony w Google oraz plan działań
                    na kolejne miesiące. Dobry krok po optymalizacji technicznej
                    WordPressa.
                  </p>
                  <div className='mt-auto'>
                    <a
                      href='/uslugi/marketing/audyt-seo'
                      className='inline-link text-sm'
                    >
                      Zobacz audyt SEO
                    </a>
                  </div>
                </div>
              ),
            },
          ]}
          grid='two'
        />

        <Divider size='sm' />

        <SectionContactForm
          title='Sprawdź koszt optymalizacji strony WordPress'
          description='Podaj adres swojej strony WordPress i napisz co najbardziej przeszkadza w jej działaniu (szybkość, wersja mobilna, błędy) - otrzymasz darmową wycenę realizacji.'
          imageSrc='/assets/projects/izoluk/strona-internetowa-firma-budowlana-ocieplenia-wynik-optymalizacji-witryny-w-pagespeed-dla-urzadzen-mobilnych.webp'
          imageAlt='Wynik optymalizacji strony WordPress w PageSpeed Insights'
          defaultSubject='Kampania - optymalizacja strony WordPress'
        />

        <Divider line />

        <SectionFaqPanels
          defaultOpenIndex={1}
          pageUrl='https://www.arteonagency.pl/uslugi/tworzenie-stron-wordpress/optymalizacja-strony-wordpress'
          title='Najczęstsze pytania dotyczące optymalizacji stron internetowych w WordPress'
          items={[
            {
              question:
                'Czy w każdym przypadku da się osiągnąć wynik 90+/100 w PageSpeed?',
              answer:
                'Nie zawsze jest to możliwe w stu procentach. Wpływ na wynik mają m.in. wybrany motyw, konstrukcja strony i ograniczenia hostingu. Przed rozpoczęciem prac sygnalizujemy, jaki poziom wyniku jest realny do osiągnięcia oraz na jakich zasadach obowiązuje gwarancja braku opłaty.',
            },
            {
              question:
                'Co się dzieje, jeśli wynik 90+/100 nie zostanie osiągnięty?',
              answer:
                'Jeżeli mimo wdrożenia optymalizacji wynik nie osiąga założonego poziomu z powodów technicznych niezależnych od prac (np. specyfika motywu lub serwera), sposób rozliczenia ustalany jest jeszcze przed startem. Zasada jest prosta: klient zna warunki i nie ponosi kosztu za obietnicę, której nie da się spełnić.',
            },
            {
              question:
                'Jakie dostępy są potrzebne do optymalizacji strony WordPress?',
              answer:
                'Do przeprowadzenia prac potrzebny jest dostęp administratora do panelu WordPress. Przy głębszych zmianach lub konieczności modyfikacji ustawień serwera wymagany może być także dostęp do hostingu.',
            },
            {
              question:
                'Czy optymalizacja WordPress sama w sobie poprawi pozycje w Google?',
              answer:
                'Optymalizacja techniczna wspiera SEO, ponieważ poprawia szybkość i komfort korzystania ze strony, co jest jednym z elementów ocenianych przez wyszukiwarkę. Same pozycje zależą jednak także od treści, linków i wielu innych czynników, dlatego optymalizacja WordPress często łączona jest z działaniami SEO.',
            },
            {
              question:
                'Czy po optymalizacji będzie można dalej swobodnie rozwijać stronę?',
              answer:
                'Tak. Celem jest uporządkowanie systemu tak, aby dalsza rozbudowa była wygodniejsza i mniej obciążała WordPressa. Po zakończeniu prac strona pozostaje w pełni edytowalna, a dobre praktyki ustalone podczas optymalizacji ułatwiają kolejne kroki.',
            },
          ]}
        />

        <Divider line />

        {/*      <SectionImageGallery
        grid='six'
        images={[
          {
            alt: 'Autokorfu',
            src: '/assets/projects/autokorfu/autokorfu-optymalizacja-strony-wynik-przed.webp',
          },
          {
            alt: 'Autokorfu',
            src: '/assets/projects/autokorfu/autokorfu-optymalizacja-strony-wynik-po.webp',
          },
          {
            alt: 'Camper Albania',
            src: '/assets/projects/camper-albania/camper-albania-optymalizacja-strony-wynik-przed.webp',
          },
          {
            alt: 'Camper Albania',
            src: '/assets/projects/camper-albania/camper-albania-optymalizacja-strony-wynik-po.webp',
          },
          {
            alt: 'MSC Psychotherapy',
            src: '/assets/projects/msc/msc-optymalizacja-strony-wynik-przed.webp',
          },
          {
            alt: 'MSC Psychotherapy',
            src: '/assets/projects/msc/msc-optymalizacja-strony-wynik-po.webp',
          },
          {
            alt: 'Eliza Wrońska',
            src: '/assets/projects/eliza-wronska/eliza-wronska-optymalizacja-strony-wynik-przed.webp',
          },
          {
            alt: 'Eliza Wrońska',
            src: '/assets/projects/eliza-wronska/eliza-wronska-optymalizacja-strony-wynik-po.webp',
          },
          {
            alt: 'NaPilota',
            src: '/assets/projects/napilota/napilota-wynik-wydajnosci-witryny.webp',
          },
          {
            alt: 'StepArd',
            src: '/assets/projects/stepard/strona/stepard-wynik-wydajnosci-witryny.webp',
          },
          { alt: 'Izoluk', src: '/assets/projects/izoluk/izoluk-optymalizacja-strony-wynik.webp' },
          {
            alt: 'Finish Masters',
            src: '/assets/projects/finish-masters/strona/finish-masters-optymalizacja-strony-wynik.webp',
          },
        ]}
      />*/}

        <SectionBento
          title='Poznaj inne usługi'
          items={[
            {
              title: 'Pozycjonowanie stron',
              size: 'large',
              backgroundImage:
                '/assets/projects/napilota/mockup-strony-napilota.webp',
              btnLabel: 'Sprawdź ofertę',
              btnLink: '/uslugi/marketing/pozycjonowanie-stron',
            },
            {
              title: 'Strony WordPress',
              size: 'medium',
              backgroundImage:
                '/assets/projects/izoluk/strona-internetowa-firma-budowlana-ocieplenia-izoluk-mockup-realizacja-arteon.webp',
              btnLabel: 'Sprawdź ofertę',
              btnLink: '/uslugi/tworzenie-stron-wordpress',
            },
            {
              title: 'Audyt SEO',
              size: 'small',
              backgroundImage:
                '/assets/projects/kolorowe-talerze/moskup-strony-kolorowe-talerze.webp',
              btnLabel: 'Sprawdź ofertę',
              btnLink: '/uslugi/marketing/audyt-seo',
            },
            {
              title: 'Optymalizacja SEO',
              size: 'small',
              backgroundImage:
                '/assets/projects/arteon-baners-camper-albania-mockup.webp',
              btnLabel: 'Sprawdź ofertę',
              btnLink: '/uslugi/marketing/optymalizacja-seo',
            },
          ]}
        />

        <Divider size='sm' />
      </Wrapper>

      <CTABanner
        title='Zadbaj o wydajność swojej strony WordPress'
        description='Szybsza, stabilniejsza strona ułatwia pozyskiwanie klientów, wspiera SEO i pozwala bez obaw kierować większy ruch z kampanii.'
        btnOne='Sprawdź, co można poprawić'
        btnOneHref='#kontakt'
        backgroundImage='/assets/projects/arteon-baners-camper-albania-mockup.webp'
        overlay='black'
      />

      <ServiceSchema />
    </>
  );
}
