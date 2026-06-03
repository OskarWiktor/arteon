import {
  RiSpeedFill,
  RiArticleLine,
  RiPencilRuler2Line,
  RiCheckboxCircleLine,
  RiLayoutLine,
  RiKey2Line,
  RiShieldCheckLine,
  RiCustomerService2Line,
  RiCheckDoubleLine,
  RiMailSendLine,
} from 'react-icons/ri';
import HeroBanner from '@/components/organisms/HeroBanner';
import BenefitBelt from '@/components/organisms/BenefitBelt';
import CTABanner from '@/components/organisms/CTABanner';
import Divider from '@/components/atoms/Divider';
import ProjectsCarousel from '@/components/organisms/carousels/ProjectsCarousel';
import SectionBento from '@/components/organisms/sections/SectionBento';
import SectionContactForm from '@/components/organisms/sections/SectionContactForm';
import Wrapper from '@/components/atoms/Wrapper';
import Breadcrumbs from '@/components/molecules/BreadCrumbs';
import SectionFaqPanels from '@/components/organisms/sections/SectionFaqPanels';
import FeatureGrid from '@/components/organisms/FeatureGrid';
import { GoLaw } from 'react-icons/go';
import SectionPrices from '@/components/organisms/sections/SectionPrices';
import SectionInfo from '@/components/organisms/sections/SectionInfo';
import SectionBasic from '@/components/organisms/sections/SectionBasic';
import ArticlesCarousel from '@/components/organisms/carousels/ArticlesCarousel';
import SectionTimeline from '@/components/organisms/sections/SectionTimeline';
import { getArticlePreviewsByCategory } from '@/lib/blogDataService';
import Script from 'next/script';
import { buildServiceSchema } from '@/lib/serviceSchema';
import TestimonialsCarousel from '@/components/organisms/carousels/TestimonialsCarousel';
import { normalIconSizeClasses } from '@/lib/ui-classes';
import { cn } from '@/lib/utils';

export const metadata = {
  title: 'Strony internetowe WordPress dla firm od 2200 zł | Arteon',
  description:
    'Tworzymy strony internetowe WordPress dla firm. Projekt w Figma do akceptacji, Elementor Pro w cenie, gwarancja wydajności 90+/100 dla telefonów. Sprawdź cennik.',
  alternates: { canonical: 'https://www.arteonagency.pl/uslugi/tworzenie-stron-wordpress' },
  openGraph: {
    title: 'Strony internetowe WordPress dla firm od 2200 zł | Arteon',
    description:
      'Tworzymy strony internetowe WordPress dla firm. Projekt w Figma do akceptacji, Elementor Pro w cenie, gwarancja wydajności 90+/100 dla telefonów. Sprawdź cennik.',
    url: 'https://www.arteonagency.pl/uslugi/tworzenie-stron-wordpress',
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
    question: 'Ile kosztuje strona internetowa WordPress?',
    answer:
      'Cena zależy od liczby podstron i złożoności projektu. Strona firmowa (5-8 podstron) kosztuje 2200-2800 zł, strona rozbudowana (9-13 podstron) 2800-3400 zł, strona kompleksowa (14-18 podstron) 3600-4200 zł. Projekty z 19+ podstronami wyceniamy indywidualnie.',
  },
  {
    question: 'Czy muszę wpłacać zaliczkę przed rozpoczęciem prac?',
    answer:
      'Nie. Nie pobieramy zaliczek. Faktura jest wystawiana od razu po zakończeniu prac i prezentacji strony. Masz 7 dni na płatność i 14 dni na zgłoszenie poprawek od momentu prezentacji gotowej witryny.',
  },
  {
    question: 'Ile kosztuje roczne utrzymanie strony WordPress?',
    answer:
      'Nie pobieramy żadnych opłat za utrzymanie strony. Konfigurujemy automatyczne aktualizacje, backupy i optymalizację, które działają bez dodatkowych kosztów. Płacisz tylko za domenę (ok. 50-150 zł/rok) i hosting (ok. 150-400 zł/rok).',
  },
  {
    question: 'Jak długo trwa stworzenie strony internetowej WordPress?',
    answer:
      'Standardowo od 7 do 21 dni roboczych, w zależności od liczby podstron i dostępności materiałów (teksty, zdjęcia). Przed rozpoczęciem prac przygotowujemy projekt w Figma, który wspólnie omawiamy i akceptujesz.',
  },
  {
    question: 'Czy będę mógł samodzielnie edytować stronę?',
    answer:
      'Tak. Każda strona ma panel WordPress z Elementor Pro, który pozwala samodzielnie edytować teksty, dodawać zdjęcia i tworzyć nowe podstrony. Na życzenie przeprowadzamy też szkolenie z obsługi strony.',
  },
  {
    question: 'Co jeśli nie mam gotowych tekstów na stronę?',
    answer:
      'Pomagamy w przygotowaniu treści. Doradzamy strukturę strony pod kątem SEO i pomagamy w redakcji tekstów. Możemy pracować z materiałami, które dostarczysz, lub pomóc stworzyć je od podstaw.',
  },
  {
    question: 'Czy strona internetowa WordPress będzie widoczna w Google?',
    answer:
      'Tak. Wdrażamy techniczne SEO: optymalizację obrazów, poprawne nagłówki, meta tagi, dane strukturalne. Gwarantujemy wydajność 90+/100 dla telefonów. Wspieramy też w rejestracji strony w Google Search Console.',
  },
  {
    question: 'Czy pomagacie z domeną i hostingiem?',
    answer:
      'Tak. Doradzamy w wyborze domeny i hostingu, pomagamy w konfiguracji i podłączeniu. Możemy też przejąć zarządzanie tymi elementami, jeśli tego potrzebujesz.',
  },
  {
    question: 'Co dokładnie wchodzi w cenę strony internetowej WordPress?',
    answer:
      'Każda strona zawiera projekt w Figma do akceptacji przed wdrożeniem. Udostępniamy licencję Elementor Pro bez dodatkowych opłat. Konfigurujemy formularze kontaktowe, mapę dojazdu i ikony mediów społecznościowych. Strona działa poprawnie na wszystkich urządzeniach. Przygotowujemy politykę prywatności i obsługę cookies zgodną z RODO. Wdrażamy automatyczne aktualizacje i backupy. Po uruchomieniu zapewniamy wsparcie techniczne.',
  },
  {
    question: 'Czy wystawiacie faktury dla firm spoza Polski?',
    answer:
      'Tak. Pracujemy z klientami mówiącymi po polsku na całym świecie. Wystawiamy faktury międzynarodowe, a cała komunikacja odbywa się po polsku.',
  },
];

function ServiceSchema() {
  const json = buildServiceSchema({
    path: '/uslugi/tworzenie-stron-wordpress',
    serviceName: 'Tworzenie stron internetowych WordPress dla firm',
    description:
      'Projektujemy i wdrażamy strony WordPress widoczne w Google. Elementor Pro w cenie, wydajność 90+/100 dla mobile, faktura po realizacji, brak ukrytych kosztów utrzymania.',
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
    <Script id='schema-service-tworzenie-stron-wordpress' type='application/ld+json'>
      {JSON.stringify(extendedJson)}
    </Script>
  );
}

export default function TworzenieStronWordPressPage() {
  return (
    <>
      <HeroBanner
        title='Strony internetowe WordPress dla firm'
        description={
          <>
            Tworzymy strony internetowe WordPress, nastawione na widoczność w Google. Indywidualny
            projekt graficzny strony, wydajność 90+/100 dla telefonów, zgodność ze standardami
            Google i SEO.
          </>
        }
        variant='left'
        backgroundImage='/assets/projects/izoluk/strona-internetowa-firma-budowlana-ocieplenia-izoluk-mockup-realizacja-arteon.webp'
        overlay='black'
      />

      <BenefitBelt variant='carousel' />

      <Breadcrumbs
        second={{ href: '/uslugi', label: 'Usługi' }}
        third={{ href: '/uslugi/tworzenie-stron-wordpress', label: 'Strony internetowe WordPress' }}
        includeJsonLd
      />

      <Wrapper>
        <Divider size='xs' />

        <ProjectsCarousel title='Realizacje stron internetowych' category='strona' />

        <Divider line />

        <SectionInfo title='Dlaczego strona internetowa WordPress?'>
          <p>
            WordPress to najpopularniejszy system do tworzenia stron na świecie - ponad{' '}
            <strong>43% wszystkich stron</strong> działa właśnie na tej platformie (dane:{' '}
            <a
              href='https://w3techs.com/technologies/details/cm-wordpress'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-link'
            >
              W3Techs, 2024
            </a>
            ). Oznacza to, że łatwo znajdziesz specjalistów, wtyczki i rozwiązania do praktycznie
            każdego problemu.
          </p>
          <br />
          <p>
            <strong>Dla właściciela firmy WordPress daje trzy główne korzyści:</strong>
          </p>
          <ul className='mt-2 ml-5 list-disc space-y-1'>
            <li>
              <strong>Samodzielna edycja</strong> - możesz zmieniać teksty, dodawać zdjęcia i nowe
              podstrony bez programisty
            </li>
            <li>
              <strong>Niezależność</strong> - strona jest Twoja, możesz przenieść ją do dowolnego
              hostingu lub zlecić rozwój komukolwiek
            </li>
            <li>
              <strong>Rozbudowa w dowolnym momencie</strong> - blog, sklep, rezerwacje, newsletter -
              WordPress obsługuje praktycznie wszystko
            </li>
          </ul>
        </SectionInfo>

        <Divider line />

        <FeatureGrid
          title='Co dostajesz w ramach strony internetowej WordPress?'
          variant='centered'
          columns={3}
          items={[
            {
              title: 'Licencja Elementor Pro',
              description: (
                <>
                  Elementor Pro to kreator stron, który daje pełną kontrolę nad wyglądem.
                  Udostępniamy licencję w cenie - nie płacisz za nią ani teraz, ani później.
                </>
              ),
              icon: <RiLayoutLine className={cn('text-primary', normalIconSizeClasses)} />,
            },
            {
              title: 'Projekt w Figma przed realizacją',
              description: (
                <>
                  Zanim zaczniemy kodować, przygotowujemy projekt graficzny strony głównej.
                  Dostajesz link do podglądu i wspólnie ustalamy finalny wygląd.
                </>
              ),
              icon: <RiPencilRuler2Line className={cn('text-primary', normalIconSizeClasses)} />,
            },
            {
              title: 'Wydajność 90+/100 dla telefonów',
              description: (
                <>
                  Gwarantujemy wynik w{' '}
                  <a
                    href='https://pagespeed.web.dev/'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-link'
                  >
                    PageSpeed Insights
                  </a>{' '}
                  na poziomie minimum 90/100 dla urządzeń mobilnych. Optymalizujemy obrazy, kod i
                  konfigurację serwera.
                </>
              ),
              icon: <RiSpeedFill className={cn('text-primary', normalIconSizeClasses)} />,
            },
            {
              title: 'Automatyzacja utrzymania',
              description: (
                <>
                  Konfigurujemy automatyczne aktualizacje wtyczek, kopie zapasowe i optymalizację
                  obrazów. Nie musisz się martwić o techniczne aspekty utrzymania strony.
                </>
              ),
              icon: <RiShieldCheckLine className={cn('text-primary', normalIconSizeClasses)} />,
            },
            {
              title: 'Pomoc z treściami i SEO',
              description: (
                <>
                  Doradzamy strukturę strony pod kątem widoczności w Google. Pomagamy w
                  przygotowaniu i redakcji tekstów, które odpowiadają na pytania potencjalnych
                  klientów.
                </>
              ),
              icon: <RiArticleLine className={cn('text-primary', normalIconSizeClasses)} />,
            },
            {
              title: 'Zgodność prawna i dostępność',
              description: (
                <>
                  Przygotowujemy politykę prywatności, obsługę cookies (RODO) i deklarację
                  dostępności. Kolory zgodne z WCAG 2.1 AA - strona czytelna dla każdego.
                </>
              ),
              icon: <GoLaw className={cn('text-primary', normalIconSizeClasses)} />,
            },
            {
              title: 'Formularze, mapy i media społecznościowe',
              description: (
                <>
                  Formularz kontaktowy, mapa dojazdu, ikony mediów społecznościowych, przyciski do
                  dzwonienia i pisania maili - wszystko w cenie standardowej.
                </>
              ),
              icon: <RiCheckboxCircleLine className={cn('text-primary', normalIconSizeClasses)} />,
            },
            {
              title: 'Pełna własność i dostępy',
              description: (
                <>
                  Przekazujemy wszystkie hasła i dostępy - do hostingu, domeny, panelu WordPress i
                  Google Search Console. Strona jest Twoja w 100%.
                </>
              ),
              icon: <RiKey2Line className={cn('text-primary', normalIconSizeClasses)} />,
            },
            {
              title: 'Wsparcie po realizacji',
              description: (
                <>
                  Po uruchomieniu strony nie zostawiamy Cię samego. Odpowiadamy na pytania,
                  doradzamy jak zwiększać widoczność i pomagamy przy kolejnych krokach.
                </>
              ),
              icon: (
                <RiCustomerService2Line className={cn('text-primary', normalIconSizeClasses)} />
              ),
            },
          ]}
        />
        <Divider line />

        <SectionTimeline
          title='Jak wygląda współpraca przy tworzeniu strony internetowej w WordPress?'
          items={[
            {
              icon: <RiPencilRuler2Line className={normalIconSizeClasses} />,
              title: 'Wycena i projekt',
              description:
                'Opisujesz swoją firmę i potrzeby. Przygotowujemy wycenę i projekt graficzny strony głównej w Figma. Dostajesz link do podglądu - możesz oglądać i komentować.',
            },
            {
              icon: <RiCheckDoubleLine className={normalIconSizeClasses} />,
              title: 'Akceptacja projektu',
              description:
                'Wspólnie omawiamy projekt. Wprowadzamy poprawki aż do pełnej akceptacji. Dopiero wtedy przechodzimy do budowania strony.',
            },
            {
              icon: <RiLayoutLine className={normalIconSizeClasses} />,
              title: 'Wdrożenie strony',
              description:
                'Budujemy stronę w WordPress z Elementor Pro. Konfigurujemy formularze, optymalizujemy obrazy, wdrażamy SEO techniczne i testujemy na wszystkich urządzeniach.',
            },
            {
              icon: <RiMailSendLine className={normalIconSizeClasses} />,
              title: 'Faktura po odbiorze',
              description:
                'Prezentujemy gotową stronę. Faktura wystawiana jest od razu po zakończeniu prac. Masz 7 dni na płatność i 14 dni na zgłoszenie poprawek.',
            },
          ]}
        />

        <Divider line />

        <SectionBasic
          variant='left'
          imageSrc='/assets/projects/perly-mocy/strona-internetowa-osrodek-psychoterapii-dzieci-i-mlodziezy-perla-mocy-mockup-realizacji-arteon.webp'
          imageAlt='Strona WordPress dla ośrodka psychoterapii Perły Mocy - mockup realizacji Arteon'
          subtitle='Dla kogo tworzymy strony?'
          title='Strony WordPress dla firm usługowych'
          description='Specjalizujemy się w stronach dla małych i średnich firm usługowych. Kancelarie, gabinety, firmy budowlane, warsztaty - rozumiemy specyfikę tych branż.'
        >
          <ul className='mt-4 list-disc space-y-2 pl-5 text-sm'>
            <li>
              <strong>Prezentacja oferty</strong> - jasny opis usług z cenami lub zakresem prac
            </li>
            <li>
              <strong>Kontakt i lokalizacja</strong> - formularz, telefon, mapa dojazdu
            </li>
            <li>
              <strong>Budowanie zaufania</strong> - opinie klientów, certyfikaty, realizacje
            </li>
          </ul>
        </SectionBasic>

        <Divider line />

        <SectionBasic
          variant='right'
          imageSrc='/assets/projects/izoluk/strona-internetowa-firma-budowlana-ocieplenia-wynik-optymalizacji-witryny-w-pagespeed-dla-urzadzen-mobilnych.webp'
          imageAlt='Wynik optymalizacji strony WordPress w PageSpeed Insights - 98/100 dla mobile'
          subtitle='Dlaczego wydajność ma znaczenie?'
          title='Szybka strona oznacza więcej klientów z Google'
          description='Google oficjalnie potwierdza, że szybkość strony wpływa na pozycję w wynikach wyszukiwania. Wolna strona traci klientów na dwa sposoby:'
        >
          <ul className='mt-4 list-disc space-y-2 pl-5 text-sm'>
            <li>
              <strong>Gorsza pozycja w Google</strong> - wyszukiwarka faworyzuje szybkie strony,
              szczególnie na telefonach
            </li>
            <li>
              <strong>Porzucanie strony</strong> - użytkownicy zamykają kartę, jeśli strona ładuje
              się dłużej niż 3 sekundy
            </li>
          </ul>
          <p className='mt-4 text-sm'>
            Dlatego gwarantujemy wynik <strong>90+/100 w PageSpeed Insights</strong> dla każdej
            strony, którą tworzymy.
          </p>
        </SectionBasic>

        <Divider line />

        <TestimonialsCarousel />

        <Divider line />

        <SectionPrices
          id='pricing-web'
          title='Ile kosztuje strona internetowa WordPress?'
          plans={
            [
              {
                name: 'Strona firmowa',
                price: '2 200 - 2 800 zł',
                description: 'Dla firm z kilkoma usługami. Idealna na start.',
                features: [
                  '5-8 podstron (strona główna, oferta, o nas, kontakt)',
                  'Projekt w Figma do akceptacji',
                  'Licencja Elementor Pro w cenie',
                  'Wydajność 90+/100 dla mobile',
                  'Optymalizacja obrazów i SEO techniczne',
                  'Formularze, mapy, ikony mediów społecznościowych',
                  'Polityka prywatności i cookies (RODO)',
                  'Panel do samodzielnej edycji',
                  'Automatyzacja aktualizacji i backupów',
                  'Wsparcie po realizacji',
                ],
                btnOne: 'Wyceń stronę firmową',
                btnOneHref: '#kontakt',
              },
              {
                name: 'Strona rozbudowana',
                price: '2 800 - 3 400 zł',
                description: 'Dla firm z większą ofertą i wieloma usługami.',
                features: [
                  '9-13 podstron z rozbudowaną strukturą',
                  'Projekt w Figma do akceptacji',
                  'Licencja Elementor Pro w cenie',
                  'Wydajność 90+/100 dla mobile',
                  'Optymalizacja obrazów i SEO techniczne',
                  'Formularze, mapy, ikony mediów społecznościowych',
                  'Polityka prywatności i cookies (RODO)',
                  'Panel do samodzielnej edycji',
                  'Automatyzacja aktualizacji i backupów',
                  'Wsparcie po realizacji',
                ],
                btnOne: 'Wyceń stronę rozbudowaną',
                btnOneHref: '#kontakt',
              },
              {
                name: 'Strona kompleksowa',
                price: '3 600 - 4 200 zł',
                description: 'Dla firm z wieloma działami i rozbudowaną ofertą.',
                features: [
                  '14-18 podstron z pełną architekturą',
                  'Projekt w Figma do akceptacji',
                  'Licencja Elementor Pro w cenie',
                  'Wydajność 90+/100 dla mobile',
                  'Optymalizacja obrazów i SEO techniczne',
                  'Formularze, mapy, ikony mediów społecznościowych',
                  'Polityka prywatności i cookies (RODO)',
                  'Panel do samodzielnej edycji',
                  'Automatyzacja aktualizacji i backupów',
                  'Wsparcie po realizacji',
                ],
                btnOne: 'Wyceń stronę kompleksową',
                btnOneHref: '#kontakt',
                lastPlan: true,
              },
            ]
          }
          note={
            {
              text: (
                <p className='text-light'>
                  <strong className='text-dark'>
                    Potrzebujesz 19+ podstron, bloga lub dedykowanych funkcji?{' '}
                  </strong>
                  Przygotujemy wycenę dopasowaną do skali projektu. Opisz swoje potrzeby w
                  formularzu.
                </p>
              ),
              ctaLabel: 'Opisz swój projekt',
              ctaLink: '#kontakt',
            }
          }
          legalNote='Podane ceny są cenami końcowymi na fakturze. Wycena nie obejmuje kosztów domeny i hostingu (ok. 200-500 zł/rok).'
        />

        <Divider line />

        <SectionBasic
          variant='right'
          imageSrc='/assets/projects/msc/moskup-strony-msc-psychotherapy.webp'
          imageAlt='Realizacja strony internetowej WordPress - MSC mockup'
          subtitle='Jak wygląda współpraca?'
          title='Faktura po realizacji - bez zaliczek i ukrytych kosztów'
          description='Wiemy, że zlecenie strony to decyzja finansowa. Dlatego płacisz dopiero wtedy, gdy strona jest gotowa i zaakceptowana.'
        >
          <ul className='mt-4 list-disc space-y-2 pl-5 text-sm'>
            <li>
              <strong>Bez zaliczek</strong> - nie pobieramy płatności z góry
            </li>
            <li>
              <strong>Faktura od razu po zakończeniu</strong> - wystawiamy ją w momencie prezentacji
              gotowej strony
            </li>
            <li>
              <strong>7 dni na płatność</strong> - termin płatności od daty wystawienia faktury
            </li>
            <li>
              <strong>14 dni na poprawki</strong> - od momentu prezentacji gotowej strony
            </li>
            <li>
              <strong>Zero opłat za utrzymanie</strong> - płacisz tylko za domenę i hosting (ok.
              200-500 zł/rok)
            </li>
          </ul>
        </SectionBasic>

        <Divider line />

        <SectionInfo
          title='Dodatkowe funkcje strony internetowej WordPress'
          subtitle='Wyceniane indywidualnie'
        >
          <p>
            Każdą stronę można rozbudować o dodatkowe funkcje. Wyceniamy je osobno, w zależności od
            złożoności:
          </p>
          <br />
          <ul className='ml-5 list-disc space-y-2'>
            <li>
              <strong>Blog firmowy</strong> - artykuły, które wspierają widoczność w Google i budują
              pozycję eksperta
            </li>
            <li>
              <strong>Kalkulatory i wyceny online</strong> - interaktywne narzędzia do szacowania
              kosztów usług
            </li>
            <li>
              <strong>System rezerwacji</strong> - umawianie wizyt, konsultacji lub spotkań przez
              stronę
            </li>
            <li>
              <strong>Newsletter</strong> - zbieranie adresów e-mail i integracja z Mailchimp lub
              GetResponse
            </li>
            <li>
              <strong>Wielojęzyczność</strong> - strona w kilku wersjach językowych z przełącznikiem
            </li>
            <li>
              <strong>Integracje zewnętrzne</strong> - połączenie z CRM, ERP lub innymi systemami
            </li>
          </ul>
        </SectionInfo>

        <Divider line />

        <SectionContactForm
          title='Sprawdź koszt realizacji strony WordPress'
          description='Napisz co chciałbyś/aś umieścić na swojej stronie, czy potrzebujesz pomocy z tworzeniem treści oraz czy posiadasz materiały graficzne (logo oraz zdjęcia) i otrzymaj darmową wycenę realizacji.'
          imageSrc='/assets/projects/arteon-baners-camper-albania-mockup.webp'
          imageAlt='Realizacja strony internetowej WordPress - Camper Albania mockup'
          defaultSubject='Strona internetowa WordPress'
          messagePlaceholder='Opisz swoją firmę, branżę i cele strony. Im więcej szczegółów, tym dokładniejsza wycena.'
        />

        <Divider line />

        <SectionFaqPanels
          defaultOpenIndex={1}
          pageUrl='https://www.arteonagency.pl/uslugi/tworzenie-stron-wordpress'
          title='Najczęstsze pytania dotyczące stworzenia strony internetowej WordPress'
          items={FAQ_ITEMS}
        />

        <Divider line />

        <SectionBento
          title='Poznaj inne usługi'
          items={[
            {
              title: 'Sklepy internetowe',
              size: 'large',
              backgroundImage: '/assets/projects/trilllizo/moskup-strony-trilllizo.webp',
              btnLabel: 'Sprawdź ofertę',
              btnLink: '/uslugi/sklepy-internetowe',
            },
            {
              title: 'Pozycjonowanie stron',
              size: 'medium',
              backgroundImage: '/assets/projects/napilota/mockup-strony-napilota.webp',
              btnLabel: 'Sprawdź ofertę',
              btnLink: '/uslugi/marketing/pozycjonowanie-stron',
            },
            {
              title: 'Projekt logo',
              size: 'small',
              backgroundImage: '/assets/projects/stepard/logo/mockup-logo-stepard.webp',
              btnLabel: 'Sprawdź ofertę',
              btnLink: '/uslugi/projekty-graficzne/projekt-logo',
            },
            {
              title: 'Tworzenie treści',
              size: 'small',
              backgroundImage: '/assets/projects/msc/moskup-strony-msc-psychotherapy.webp',
              btnLabel: 'Sprawdź ofertę',
              btnLink: '/uslugi/tworzenie-tresci',
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
        title='Strona internetowa WordPress, która pomaga pozyskiwać klientów'
        description='Otrzymujesz stronę zoptymalizowaną pod Google z gwarancją wydajności 90+/100 dla telefonów. Płacisz dopiero po zakończeniu prac.'
        btnOne='Wyceń swoją stronę'
        btnOneHref='#kontakt'
        backgroundImage='/assets/projects/izoluk/strona-internetowa-firma-budowlana-ocieplenia-izoluk-mockup-realizacja-arteon.webp'
        overlay='black'
      />

      <ServiceSchema />
    </>
  );
}
