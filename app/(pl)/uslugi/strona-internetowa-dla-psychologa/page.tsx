import Image from 'next/image';
import Script from 'next/script';
import {
  RiArticleLine,
  RiCalendarCheckLine,
  RiVideoChatLine,
  RiGraduationCapLine,
  RiQuestionnaireLine,
  RiPencilRuler2Line,
  RiCheckDoubleLine,
  RiLayoutLine,
  RiMailSendLine,
  RiMentalHealthLine,
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
import SectionPrices from '@/components/organisms/sections/SectionPrices';
import SectionSteps from '@/components/organisms/sections/SectionSteps';
import SectionTimeline from '@/components/organisms/sections/SectionTimeline';
import { getArticlePreviewsByCategory } from '@/lib/blogDataService';
import { cn } from '@/lib/clsx';
import { buildServiceSchema } from '@/lib/seo/serviceSchema';
import { normalIconSizeClasses } from '@/lib/uiClasses';

export const metadata = {
  title:
    'Strona internetowa dla psychologa, terapeuty i gabinetu psychoterapii | Arteon',
  description:
    'Tworzymy, modernizujemy i pozycjonujemy strony dla psychologów, psychoterapeutów i ośrodków terapeutycznych. Wszystko czego potrzebuje Twój gabinet - profile terapeutów, blog ekspercki, testy przesiewowe, umawianie wizyt, zgodność z RODO, indywidualny projekt i nowoczesna technologia.',
  alternates: {
    canonical:
      'https://www.arteonagency.pl/uslugi/strona-internetowa-dla-psychologa',
  },
  openGraph: {
    title:
      'Strona internetowa dla psychologa, terapeuty i gabinetu psychoterapii | Arteon',
    description:
      'Tworzymy, modernizujemy i pozycjonujemy strony dla psychologów, psychoterapeutów i ośrodków terapeutycznych. Wszystko czego potrzebuje Twój gabinet - profile terapeutów, blog ekspercki, testy przesiewowe, umawianie wizyt, zgodność z RODO, indywidualny projekt i nowoczesna technologia.',
    url: 'https://www.arteonagency.pl/uslugi/strona-internetowa-dla-psychologa',
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
    question: 'Ile kosztuje strona internetowa dla psychologa?',
    answer:
      'Cena zależy od ilości stron oraz funkcjonalności, które chcesz mieć na stronie. Standardowo strona dla psychologa u nas kosztuje od 2 200 do 4 200 zł brutto. W tej cenie otrzymujesz indywidualny projekt, konfigurację bloga eksperckiego, testy przesiewowe dla pacjentów, pozycjonowanie stron ofertowych i optymalizację pod SEO lokalne. Każdą realizację wyceniamy indywidualnie.',
  },
  {
    question: 'Mam już stronę. Lepiej ją przebudować, czy zrobić nową?',
    answer:
      'To zależy od stanu obecnej witryny, technologi w jakiej jest zrobiona i tego co chcesz wprowadzić. Jeśli obecna strona osiąga słabe pozycję w Google bo np. w Twoim mieście jest duża konkurencja, dobrym pomysłem może być przejście na nowocześniejszą technologię, która pozwoli na pełne SEO bez konieczności wykupowania wtyczek. Po rozmowie i spojrzeniu na obecną witrynę powiemy, które rozwiązanie ma w Twoim przypadku przyniesie najlepszy efekt.',
  },
  {
    question:
      'Nie mam gotowych tekstów ani zdjęć na stronę, czy możecie mi pomóc?',
    answer:
      'Tak, to bardzo częsta sytuacja. Wiemy, że pisanie o sobie i swojej pracy bywa trudne, dlatego pomagamy w przygotowywaniu tekstów z myślą o potrzebach Twoich pacjentów. Możemy również przerobić istniejące materiały czy przygotować nowe zdjęcia.',
  },
  {
    question:
      'Czy po uruchomieniu strony będę w stanie ją samodzielnie edytować?',
    answer:
      'Tak. Strony przygotowujemy tak, abyś bez znajomości kodu wygodnie zmieniał treści, dodawał wpisy na blog i aktualizował ofertę. Możemy stworzyć również dedykowane szkolenie z obsługi. Możemy również przejąć prowadzenie strony, bloga i mediów społecznościowych w całości, dzięki czemu zaoszczędzisz swój cenny czas.',
  },
  {
    question: 'Jak długo trwa realizacja i czy muszę płacić z góry?',
    answer:
      'Standardowy czas realizacji od pierwszej rozmowy do pełnej publikacji wynosi od 5 do 14 dni roboczych. Zależy to od liczby podstron i tego, jak szybko skompletujemy materiały. Nie pobieramy zaliczek - fakturę wystawiamy dopiero po publikacji i Twojej pełnej akceptacji strony. Zanim cokolwiek zapłacisz, widzisz projekt wyglądu witryny, a po publikacji masz jeszcze czas na zgłoszenie poprawek.',
  },
  {
    question:
      'Czy zadbacie o zgodność z RODO i bezpieczeństwo danych pacjentów?',
    answer:
      'Tak, i traktujemy to poważnie, bo dane o zdrowiu to dane wrażliwe. Przygotowujemy formularze ze świadomą zgodą, politykę prywatności uwzględniającą przetwarzanie danych o zdrowiu oraz obsługę cookies, a same formularze skonfigurujemy z myślą o dyskrecji, tak aby pacjent czuł się bezpiecznie.',
  },
  {
    question: 'Czy sprawicie że strona będzie widoczna w Google?',
    answer:
      'Tak, pozycjonowanie to jedna z naszych specjalizacji. Każdą stronę budujemy technicznie pod wyszukiwarkę, a treści układamy tak, aby trafiały na frazy, które realnie wpisują pacjenci. Po uruchomieniu możemy zająć się pełnym pozycjonowaniem i prowadzeniem bloga, który w tematyce zdrowia jest jednym z najskuteczniejszych sposobów na pozyskiwanie pacjentów z Google.',
  },
];

function ServiceSchema() {
  const json = buildServiceSchema({
    path: '/uslugi/strona-internetowa-dla-psychologa',
    serviceName:
      'Strona internetowa dla psychologa, terapeuty i gabinetu psychoterapii',
    description:
      'Tworzymy, modernizujemy i pozycjonujemy strony dla psychologów, psychoterapeutów i ośrodków terapeutycznych. Wszystko czego potrzebuje Twój gabinet - profile terapeutów, blog ekspercki, testy przesiewowe, umawianie wizyt, zgodność z RODO, indywidualny projekt i nowoczesna technologia.',
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
      id='schema-service-strona-dla-psychologa'
      type='application/ld+json'
    >
      {JSON.stringify(extendedJson)}
    </Script>
  );
}

/**
 * Offer landing page for psychologist / psychotherapy websites.
 *
 * Structured as a single sales journey (see docs/WZORZEC-STRONY-OFERTOWEJ-BRANZOWEJ.md), in order:
 * hero, proof (realizacje), empathy, one value stack, mechanism (WordPress vs Next.js with the
 * Next.js SEO capability framed as the client's potential), risk reversal, case studies, process,
 * segment split, testimonials, pricing, consultation, FAQ, cross-sell.
 */
export default function StronaDlaPsychologaPage() {
  return (
    <>
      <HeroBanner
        title='Strona internetowa dla psychologa i gabinetu psychoterapii'
        description={
          <>
            Tworzymy, modernizujemy i pozycjonujemy strony dla psychologów,
            psychoterapeutów i ośrodków terapeutycznych. Projektujemy je z myślą
            o pacjencie - tak aby od pierwszego wejścia czuł, że trafił do
            właściwej osoby.
          </>
        }
        backgroundImage='/assets/projects/msc/moskup-strony-msc-psychotherapy.webp'
        overlay='black'
        primaryCtaLabel='Umów bezpłatną konsultację'
        primaryCtaHref='#kontakt'
      />

      <BenefitBelt variant='carousel' />

      <Breadcrumbs
        second={{ href: '/uslugi', label: 'Usługi' }}
        third={{
          href: '/uslugi/strona-internetowa-dla-psychologa',
          label: 'Strona dla psychologa',
        }}
        includeJsonLd
      />

      <Wrapper>
        <Divider size='xs' />

        <ProjectsCarousel
          title='Nasze realizacje stron internetowych'
          category='strony'
        />

        <Divider line />

        <SectionBasic
          title='Rozumiemy Twoją pracę i potrzeby Twoich pacjentów'
          imageSrc='/assets/projects/msc/moskup-strony-msc-psychotherapy.webp'
          imageAlt='Wizualizacja realizacji strony internetowej dla psycholog w Londynie'
        >
          <p>
            <strong>
              Pacjent umówi wizytę wtedy, gdy poczuje, że trafił do właściwej
              osoby.
            </strong>
          </p>
          <br />
          <p>
            W branży terapeutycznej zaufanie to dosłownie kwestia zdrowia i
            bezpieczeństwa pacjenta, a algorytmy Google traktują te strony z
            wyjątkową surowością.
          </p>
          <br />
          <p>
            Dzięki realizacjom dla gabinetów i ośrodków psychoterapii wiemy, na
            co zwracają uwagę zarówno Twoi pacjenci, jak i Google, co
            przekładamy na konkretne elementy strony oraz całą strategię
            budowania marki w sieci.
          </p>
        </SectionBasic>

        <Divider line />

        <TestimonialsCarousel />

        <Divider line />

        <FeatureGrid
          title='Co zawiera nasza oferta stron dla psychologów i gabinetów psychoterapii?'
          description='Wszystko czego potrzebuje Twój gabinet, aby pacjent od pierwszego wejścia poczuł, że trafił do właściwej osoby.'
          variant='centered'
          columns={3}
          items={[
            {
              title: 'Profil terapeuty z kwalifikacjami',
              description: (
                <p>
                  Pacjenci zawsze dokładnie patrzą na profil terapeuty, szukając
                  informacji, które pomogą im zweryfikować czy Twoje podejście i
                  sposób pracy pokrywa się z ich oczekiwaniami. Ze względu na
                  to, przygotowujemy czytelną osobną stronę z Twoim
                  wykształceniem, nurtem terapeutycznym, doświadczeniem,
                  superwizją, certyfikatami i przynależnością do towarzystw.
                </p>
              ),
              icon: (
                <RiGraduationCapLine
                  className={cn('text-primary', normalIconSizeClasses)}
                />
              ),
            },
            {
              title: 'Opisy obszarów terapii',
              description: (
                <p>
                  Pacjenci mierzący się z problemem szukają szczegółowych
                  informacji o konkretnych terapiach, obszarach leczenia a także
                  często wpisują bezpośrednio swoje objawy w wyszukiwarce,
                  dlatego budujemy osobne podstrony dla oferty np. leczenia
                  nerwicy, depresji, zaburzeń odżywiania czy terapii par w
                  kryzysie. Każda oferta trafia do konkretnego pacjenta i
                  pojawia się precyzyjnie na odpowiednie frazy w wyszukiwarce.
                </p>
              ),
              icon: (
                <RiMentalHealthLine
                  className={cn('text-primary', normalIconSizeClasses)}
                />
              ),
            },
            {
              title: 'Testy przesiewowe dla pacjentów',
              description: (
                <p>
                  Pacjenci często sprawdzają swoje objawy poprzez darmowe testy
                  online, weryfikują czy ich objawy wskazują na depresję czy
                  nerwicę. Z myślą o tym, dodajemy testy zgodne ze standardami
                  zdrowia, które pomagają pacjentowi zrozumieć swój problem i
                  zachęcają do kontaktu. Taki test pomaga wahającemu się
                  pacjentowi zrobić pierwszy krok i umówić się na wizytę.
                </p>
              ),
              icon: (
                <RiQuestionnaireLine
                  className={cn('text-primary', normalIconSizeClasses)}
                />
              ),
            },
            {
              title: 'Pomocne poradniki i artykuły',
              description: (
                <p>
                  Pacjenci borykający się z problemami zdrowia psychicznego
                  szukają poradników i artykułów, które pomagają im zrozumieć
                  swój problem. W tematyce zdrowia prowadzenie bloga to jedno z
                  najskuteczniejszych źródeł organicznego ruchu w Google,
                  dlatego pomagamy budować czytelny blog ekspercki z poradnikami
                  i artykułami, które pomagają pacjentowi i jednocześnie
                  pozycjonują Twój gabinet w wyszukiwarce.
                </p>
              ),
              icon: (
                <RiArticleLine
                  className={cn('text-primary', normalIconSizeClasses)}
                />
              ),
            },
            {
              title: 'Terapie zdalne i wideokonsultacje',
              description: (
                <p>
                  Coraz więcej osób szuka zdalnych rozwiązań, które pozwalają na
                  terapię z domu. Jest to zdecydowanie wygodniejsze dla wielu
                  pacjentów, w szczególności tych zmagających się z lękami
                  społecznymi. Z myślą o nich przygotowujemy czytelne materiały
                  o terapii zdalnej dla pacjentów, którzy preferują ten typ
                  terapii. Dzięki temu Twój zasięg rośnie poza najbliższą
                  okolicę.
                </p>
              ),
              icon: (
                <RiVideoChatLine
                  className={cn('text-primary', normalIconSizeClasses)}
                />
              ),
            },
            {
              title: 'Umawianie wizyt na stronie',
              description: (
                <p>
                  Pacjenci czasem szukają mniej bezpośredniego sposobu na
                  umówienie wizyty, w szczególności gdy zmagają się z
                  wstydliwymi dla nich problemami o których niekoniecznie chcą
                  mówić głośno przez telefon. Z myślą o nich zawsze budujemy
                  alternatywne sposoby kontaktu przez formularze lub przez
                  rezerwację wizyt bezpośrednio w kalendarzu na Twojej stronie.
                  Pacjent może od razu sprawdzić dostępne terminy i zarezerwować
                  wizytę.
                </p>
              ),
              icon: (
                <RiCalendarCheckLine
                  className={cn('text-primary', normalIconSizeClasses)}
                />
              ),
            },
          ]}
        />

        <Divider line />

        <SectionBasic
          title='Co jeszcze zyskujesz?'
          imageSrc='/assets/projects/perly-mocy/mockup-strony-perly-mocy.webp'
          imageAlt='Wizualizacja realizacji strony internetowej dla ośrodka psychoterapii dzieci i młodzieży'
          btnOne='Umów bezpłatną konsultację'
          btnOneHref='#kontakt'
        >
          <p>
            Specjalizujemy się nie tylko w budowie stron www ale również w
            projektach graficznych oraz pozycjonowaniu. Możemy w 100% zająć się
            prowadzeniem Twojej strony www, kampaniami reklamowymi, prowadzeniem
            bloga czy mediów społecznościowych. Współpracujemy z gabinetami i
            ośrodkami psychoterapii w całej Polsce, a także za granicą.
          </p>
          <br />
          <p>
            Rozumiemy również że każdy psycholog ma inne potrzeby i cele,
            dlatego oferujemy spersonalizowane rozwiązania - możemy pomóc Ci
            również ze sprzedażą własnych e-booków czy promocją webinarów. Jeśli
            zależy Ci na kompleksowym podejściu do promocji swojej praktyki,
            jesteśmy tu, aby Ci pomóc, niezależnie od tego, czy jesteś świeżym
            psychologiem, czy masz już stałych pacjentów.
          </p>
          <p></p>
        </SectionBasic>

        <Divider line />

        <SectionTimeline
          title='Jak wygląda współpraca?'
          items={[
            {
              icon: <RiPencilRuler2Line className={normalIconSizeClasses} />,
              title: 'Rozmowa',
              description:
                'W pierwszej kolejności chcemy dokładnie poznać czym się zajmujesz aby jak najlepiej dopasować ofertę do Twoich potrzeb. Opowiadasz o swojej praktyce, obszarach terapii i grupie pacjentów. Na tej podstawie przygotowujemy ofertę oraz plan działania, z myślą o Twoich celach.',
            },
            {
              icon: <RiCheckDoubleLine className={normalIconSizeClasses} />,
              title: 'Projekt',
              description:
                'Po omówieniu celów przechodzimy do projektu Twojej strony. Przygotowujemy propozycję wyglądu Twojej witryny z myślą o odbiorze przez pacjentów i nastawieniu na wysoki wynik w Google. Następnie udostępniamy Ci link do projektu, na który możesz nanieść wszelkie uwagi, omawiamy go oraz tłumaczymy jakie korzyści dadzą poszczególne elementy. Następnie pomagamy stworzyć odpowiednie opisy obszarów terapii czy przebieg pierwszej wizyty.',
            },
            {
              icon: <RiLayoutLine className={normalIconSizeClasses} />,
              title: 'Realizacja',
              description:
                'Po pełnej akceptacji projektu przechodzimy do realizacji - budujemy stronę, konfigurujemy formularze, tworzymy testy przesiewowe czy umawianie wizyt online. Wdrażamy sprawdzone techniki pozycjonowania i testujemy stronę na wszystkich urządzeniach.',
            },
            {
              icon: <RiMailSendLine className={normalIconSizeClasses} />,
              title: 'Odbiór i publikacja',
              description:
                'Po realizacji prezentujemy gotową witrynę, konfigurujemy narzędzia analityczne oraz zabezpieczenia i damy Ci pełen dostęp do wszystkiego. Po tym masz czas na wdrożenie wszelkich uwag. Fakturę wystawiamy po zakończeniu prac.',
            },
            {
              icon: <RiMailSendLine className={normalIconSizeClasses} />,
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
          imageSrc='/assets/projects/msc/mockup-szablon-social-media-msc-mockup.webp'
          imageAlt='Szablony postów na media społecznościowe dla gabinetu MSC Psychotherapy - realizacja Arteon'
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
          id='pricing-psycholog'
          title='Ile kosztuje strona internetowa dla psychologa?'
          description='Każdą realizację wyceniamy indywidualnie, jednak abyś miał punkty odniesienia, przygotowaliśmy trzy przykładowe pakiety.'
          plans={[
            {
              name: 'Gabinet indywidualny',
              price: '2 200 - 2 800 zł',
              description:
                'Dla psychologa lub psychoterapeuty pracującego samodzielnie.',
              features: [
                'Profil terapeuty z kwalifikacjami',
                'Strony z typami terapii oraz usługami',
                'Cennik sesji i przebieg pierwszej wizyty',
                'Formularz ze świadomą zgodą (RODO)',
                'Panel do samodzielnej edycji',
              ],
              btnOne: 'Umów bezpłatną konsultację',
              btnOneHref: '#kontakt',
            },
            {
              name: 'Gabinet z blogiem i testem',
              price: '2 800 - 3 600 zł',
              description:
                'Dla terapeuty, który buduje pozycję eksperta i pozyskuje pacjentów z Google.',
              features: [
                'Wszystko z pakietu gabinetu indywidualnego',
                'Konfiguracja bloga eksperckiego',
                'Dowolny test przesiewowy dla pacjentów',
                'Pozycjonowanie stron ofertowych',
                'Optymalizacja pod SEO lokalne',
              ],
              btnOne: 'Umów bezpłatną konsultację',
              btnOneHref: '#kontakt',
              lastPlan: true,
            },
            {
              name: 'Ośrodek z zespołem',
              price: '3 600 - 4 200 zł',
              description:
                'Dla ośrodka z kilkoma specjalistami i sprzedażą materiałów cyfrowych.',
              features: [
                'Wszystko z pakietu gabinetu z blogiem',
                'Osobna podstrona dla każdego specjalisty',
                'Wybór specjalisty pod problem pacjenta',
                'Sklep z materiałami cyfrowymi (audio, wideo, PDF)',
                'Konfiguracja płatności',
              ],
              btnOne: 'Umów bezpłatną konsultację',
              btnOneHref: '#kontakt',
            },
          ]}
        />

        <Divider line />

        <SectionContactForm
          title='Umów bezpłatną konsultację'
          imageSrc='/assets/projects/msc/moskup-strony-msc-psychotherapy.webp'
          imageAlt='Realizacja strony dla psychoterapeutki MSC Psychotherapy - mockup'
          defaultSubject='Strona internetowa dla psychologa'
          messagePlaceholder='Opisz swoją praktykę: obszary terapii, czy pracujesz samodzielnie, czy w zespole, czy potrzebujesz nowej strony, czy może chcesz przebudować obecną.'
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
                  samodzielnie edytować treści czy dodać wpis na blog. Płacisz
                  jednorazowo, bez abonamentu za samą stronę. Minus? Wordpress
                  wymaga aktualizacji i wtyczek, które często są płatne. Przy
                  zaawansowanych funkcjonalnościach koszt utrzymania strony może
                  być wysoki przez wtyczki. Strony w Wordpress są też ciężkie -
                  wczytują się wolniej a samo pozycjonowanie w Google jest
                  trudniejsze.
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
                  wysokiej pozycji w Google. Tej technologi używamy na naszej
                  witrynie. Strony w Next.js działają błyskawicznie, dają
                  największą pewność wysokiej pozycji oraz pozwalają na
                  tworzenie funkcjonalności każdego typu bez dodatkowych
                  comiesięcznych opłat - możesz mieć nawet własną platformę na
                  której prowadzisz webinary na żywo. Minus? Strony w Next.js są
                  droższe w realizacji, bo wymagają pisania całego kodu ręcznie.
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
            Nasza witryna po 3 miesięcach pozycjonowania, pojawia się na ponad
            900 fraz, z czego na ponad 120 jesteśmy w Top 3. Dane z Ahrefs, 4
            lipca 2026.
          </figcaption>
        </figure>

        <Divider line />

        <SectionFaqPanels
          defaultOpenIndex={1}
          pageUrl='https://www.arteonagency.pl/uslugi/strona-internetowa-dla-psychologa'
          title='Najczęstsze pytania o stronę dla psychologa'
          items={FAQ_ITEMS}
        />

        <Divider line />

        <SectionBento
          title='Poznaj inne usługi'
          items={[
            {
              title: 'Tworzenie treści i blog',
              size: 'large',
              backgroundImage:
                '/assets/projects/msc/moskup-strony-msc-psychotherapy.webp',
              btnLabel: 'Sprawdź ofertę',
              btnLink: '/uslugi/tworzenie-tresci',
            },
            {
              title: 'Pozycjonowanie stron',
              size: 'medium',
              backgroundImage:
                '/assets/projects/perly-mocy/mockup-strony-perly-mocy.webp',
              btnLabel: 'Sprawdź ofertę',
              btnLink: '/uslugi/marketing/pozycjonowanie-stron',
            },
            {
              title: 'Szablony na media społecznościowe',
              size: 'small',
              backgroundImage:
                '/assets/projects/msc/mockup-szablon-social-media-msc-mockup.webp',
              btnLabel: 'Sprawdź ofertę',
              btnLink:
                '/uslugi/projekty-graficzne/szablony-postow-media-spolecznosciowe',
            },
            {
              title: 'Projekt logo',
              size: 'small',
              backgroundImage:
                '/assets/projects/stepard/logo/mockup-logo-stepard.webp',
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
        title='Zbudujmy stronę dla Twojego gabinetu psychoterapii'
        description='Umów bezpłatną konsultację. Doradzimy najlepsze rozwiązanie, pokażemy możliwości i przygotujemy bezpłatną, niezobowiązującą wycenę.'
        btnOne='Umów bezpłatną konsultację'
        btnOneHref='#kontakt'
        backgroundImage='/assets/projects/perly-mocy/strona-internetowa-osrodek-psychoterapii-dzieci-i-mlodziezy-perla-mocy-mockup-realizacji-arteon.webp'
        overlay='black'
      />

      <ServiceSchema />
    </>
  );
}
