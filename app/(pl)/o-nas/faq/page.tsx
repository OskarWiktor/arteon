import Breadcrumbs from '@/components/sections/BreadCrumbs';
import CTABanner from '@/components/sections/CTABanner';
import HeroBanner from '@/components/sections/HeroBanner';
import Gap from '@/components/ui/Gap';
import FaqPanels from '@/components/ui/FaqPanels';
import Wrapper from '@/components/ui/Wrapper';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';

const SITE_URL = 'https://www.arteonagency.pl';
const PAGE_URL = `${SITE_URL}/o-nas/faq`;

type FaqItem = {
  question: string;
  answer: string | ReactNode;
  answerSchemaText?: string;
};

const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'Od czego zaczynamy współpracę i co jest potrzebne do wyceny?',
    answer: (
      <p>
        Zawsze zaczynamy od rozmowy i poznania Twoich indywidualnych potrzeb. Cały plan jak i wycenę dostosowujemy do Twoich: celów, odbiorców, zakresu prac i priorytetów. Do pierwszej wyceny zwykle
        wystarczy zarys zakresu prac oraz Twoich oczekiwań - resztę dopracujemy po dokładniejszym zapoznaniu. Najszybciej możesz skontaktować się z przez{' '}
        <a href="/kontakt" className="inline-link">
          formularz kontaktowy
        </a>
        .
      </p>
    ),
    answerSchemaText:
      'Zawsze zaczynamy od rozmowy i poznania Twoich indywidualnych potrzeb. Cały plan jak i wycenę dostosowujemy do Twoich: celów, odbiorców, zakresu prac i priorytetów. Do pierwszej wyceny zwykle wystarczy zarys zakresu prac oraz Twoich oczekiwań - resztę dopracujemy po dokładniejszym zapoznaniu. Najszybciej możesz skontaktować się z przez formularz kontaktowy',
  },
  {
    question: 'Jak szybko dostanę wstępną wycenę?',
    answer:
      'Zwykle wracamy z wstępną wyceną po krótkim zapoznaniu z Twoimi potrzebami i tym co chcesz stworzyć. Jeśli projekt jest większy, proponujemy rozłożenie realizacji na jasne etapy, które usprawnią cały proces i pozwolą zwiększyć efekt ( np. w przypadku pozycjonowania stron ).',
  },
  {
    question: 'Czy możecie pomóc mi wymyślić plan działania?',
    answer:
      'Tak, jeśli masz kilka pomysłów na rozwój i nie wiesz od czego zacząć to podzielimy prace na etapy, które pozwolą na szybszy start prac i zwiększając ich efekt. Dzięki temu wystartujesz szybciej i nie przepalisz budżetu.',
  },
  {
    question: 'Jak wygląda proces współpracy?',
    answer:
      'Najczęściej zaczynamy od krótkiej rozmowy, tworzymy wycenę, wyznaczamy kroki współpracy i ustalamy terminy. Każda proces jest indywidualny - mamy elastyczne podejście do planowania i realizacji.',
  },
  {
    question: 'Czy zajmujecie się tworzeniem treści i pozycjonowaniem? Czy mogę to zlecić po czasie?',
    answer: (
      <p>
        Tak, po zrealizowaniu każdego projektu, w tym witryny internetowej, zawsze dajemy kilka porad co można zrobić aby zwiększyć widoczność czy ułatwić prace ( np. poprzez dodanie automatyzacji
        takich jak kalendarz rezerwacji ) Jeśli potrzebujesz pełnego wsparcia w tekstach, napisz do nas lub sprawdź naszą ofertę{' '}
        <a href="/uslugi/tworzenie-tresci" className="inline-link">
          tworzenia treści
        </a>
        i{' '}
        <a href="/uslugi/marketing" className="inline-link">
          marketingu
        </a>
        .
      </p>
    ),
    answerSchemaText:
      'Tak, po zrealizowaniu każdego projektu, w tym witryny internetowej, zawsze dajemy kilka porad co można zrobić aby zwiększyć widoczność czy ułatwić prace ( np. poprzez dodanie automatyzacji takich jak kalendarz rezerwacji ) Jeśli potrzebujesz pełnego wsparcia w tekstach, napisz do nas lub sprawdź naszą ofertę tworzenia treści i marketingu.',
  },
  {
    question: 'Czy mogę poprosić o jakąś poradę np. związaną z pozycjonowaniem?',
    answer:
      'Tak, jak najbardziej. Jeśli potrzebujesz jakiejkolwiek porady związanej z rozwojem swojej firmy, możesz śmiało do nas napisać - nawet jeśli nie wiesz jeszcze co chcesz zbudować lub jeśli nie masz budżetu, lubimy pomagać :D',
  },
  {
    question: 'Czy po realizacji projektu mogę zlecić utrzymanie i rozwój serwisu?',
    answer:
      'Tak, po relizacji prac nad budową Twojej witryny możemy stale pracować nad jej rozbudową oraz utrzymaniem. Przy takim typie współpracy, w oparciu o Twoje potrzeby, tworzymy plan i dajemy sprawdzone pomysły na rozwój a następnie realizujemy je wystawiając na koniec miesiąca jedną zbiorczą fakturę z całych prac, stale informując Cie o kosztach na każdym etapie, tak abyś miał pełną kontrolę nad budżetem.',
  },
  {
    question: 'Ile kosztuje strona internetowa i co wpływa na wycenę?',
    answer:
      'Koszt zależy od zakresu: liczby podstron, złożoności projektu wyglądu, wersji językowych, funkcji (np. formularze, rezerwacje), integracji oraz ewentualnego przygotowania przez nas dodatkowych treści czy grafik,',
  },
  {
    question: 'Czy mogę rozliczać projekt etapami?',
    answer:
      'Tak, jak najbardziej. Często gdy projekt jest bardziej złożony dzielimy go na etapy w taki sposób, który ułatwia proces rozliczenia. Jeśli np. nie masz jeszcze części materiałów ale chcesz zacząć realizacje napisz do nas - podzielimy prace tak abyś mógł szubko i bezpiecznie wystartować.',
  },
  {
    question: 'Ile trwa realizacja strony internetowej?',
    answer:
      'To zależy od zakresu i tego czy od razu będziemy mieć wszystkie materiały. Do kazdego projektu podchodzimy indywidualnie. Jeśli wszystkie materiały są gotowe to realizacja strony z kilkoma zakładkami ( 6-10 podstron ) może zająć np. 6 dni roboczyć',
  },
  {
    question: 'Czy mogę dostarczyć własny projekt strony (np. w Figma) albo inspiracje?',
    answer: 'Jak najbardziej, przed startem pracy nad stroną sami zawsze przygotowujemy jej wygląd. Gotowy projekt lub inspiracja mogą znaczącą skrócić czas realizacji jak i jej koszt.',
  },
  {
    question: 'Czy dbacie o szybkość strony i wydajność? Czego mogę oczekiwać, jakiego wyniku?',
    answer:
      'Tak, szybkosc i wygoda działania tworzonych witryn to dla nas podstawa, dlatego zawsze dbamy o wydajność. Końcowy wynik zależy od wybranej technologii jednak zawzsze celujemy w wydajność na poziomie 90+ na 100 według PageSpeed/Google Lighthouse',
  },
  {
    question: 'Czy wdrożycie analitykę od razu (GA4, GTM, Pixel)?',
    answer: 'Zawsze rekomendujemy analitykę bo dzięki niej widać jak radzi sobie witryna, nie jest to jednak domyślna modyfikacja. Wdrażamy ją po Twoim zatwierdzeniu.',
  },
  {
    question: 'Czy mogę mieć wersję wielojęzyczną strony?',
    answer: 'Bez problemu, wdrażamy wersje językowe w taki sposób aby maksymalnie wzmocnić efekt SEO dla Twojej witryny.',
  },
  {
    question: 'Czy przeniesiecie treści ze starej strony (migracja)?',
    answer: 'Tak, zajmuje się również migracją stron bez utraty pozycji. Po zapoznaniu się z Twoją starą stroną przygotujemy dokłądny plan dla takiego projektu.',
  },
  {
    question: 'Czy zapewniacie hosting i domenę?',
    answer:
      'Możemy pomóc w wyborze i konfiguracji hostingu oraz domeny. Najważniejsze pod tym kątem jest dla nas bezpieczeństwo, kopie zapasowe i stabilność - na tym opieramy się przy rekomendacjach.',
  },
  {
    question: 'Czy będę mógł/mogła samodzielnie edytować treści?',
    answer:
      'Tak. Zależy nam abyś po zakończeniu naszej pracy miał pełną kontrolę nad tym co zostało zbudowane. W tym celu otrzymujesz zawsze pełny dostęp a w razie potrzeby również dedykowane szkolenie z obsługi dopasowane do Twojej wiedzy technicznej.',
  },
  {
    question: 'Czy zrobicie integracje (CRM, newsletter, kalendarz, płatności)?',
    answer:
      'Tak, wdrażamy wszelkiego typu integracje a także w razie potrzeb Tworzymy dedykowane rozwiązania i funkcjonalności. Możesz zerknąć na naszą stronę Narzędzia aby sprawdzić jak sobie radzimy z dedykowanymi rozwiązaniami :D',
  },
  {
    question: 'Czy pomożecie z RODO/cookies i zgodnością witryny z prawem?',
    answer:
      'Tak, w każdym projekcie witryny przewidujemy pomoc w zakresie dostosowania witryny do wszelkich standardów w tym również do WCAG 2.1 AA. Jeśli nie jesteś pewien co jest potrzebne na Twojej stronie możesz bez obaw nam to powierzyć, jesteśmy tu by jak najlepiej Ci pomóc.',
  },
  {
    question: 'Jak wygląda komunikacja w trakcie projektu?',
    answer:
      'Przeważnie komunikujemy się poprzez wiadomości e-mail, rozmowy wideo online oraz rozmowy telefoniczne. Proces komunikacji dopasowujemy do tego co jest dla Ciebie najlepsze. W trakcie współpracy dostajesz od nas pełne raporty zrealizowanych prac oraz aktualny postęp bardziej złożonych etapów.',
  },
  {
    question: 'Kto jest właścicielem strony, plików i dostępu po zakończeniu?',
    answer:
      'Ty, po wdrożeniu przekazujemy pełne dostępy i wszystkie materiały. Domyślnie wszystkie prawa są Twoje - jeśli masz obawy możemy podpisać kontrakt B2B czy też umowę o przekazanie pełnych praw.',
  },
];

const FAQ_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntityOfPage: PAGE_URL,
  mainEntity: FAQ_ITEMS.map((it) => {
    const textForSchema = typeof it.answer === 'string' ? it.answer : (it.answerSchemaText ?? '');
    return {
      '@type': 'Question',
      name: it.question,
      acceptedAnswer: { '@type': 'Answer', text: textForSchema },
    };
  }),
} as const;

export const metadata: Metadata = {
  title: 'FAQ - najczęstsze pytania dotyczące współpracy | Arteon',
  description: 'Odpowiadamy na najczęstsze pytania dotyczące współpracy: proces, terminy, wycena, treści, SEO, utrzymanie i odpowiedzialność po wdrożeniu.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'FAQ - najczęstsze pytania dotyczące współpracy | Arteon',
    description: 'Odpowiadamy na najczęstsze pytania dotyczące współpracy: proces, terminy, wycena, treści, SEO, utrzymanie i odpowiedzialność po wdrożeniu.',
    url: PAGE_URL,
    type: 'website',
    images: [{ url: `${SITE_URL}/assets/arteon-logo-on-mockup.webp` }],
  },
};

export default function AboutFaqPage() {
  return (
    <>
      <HeroBanner
        title="FAQ"
        description="Najczęstsze pytania dotyczące współpracy. Odpowiedzi, które pomogą Ci podjąć właściwą decyzję i rozpocząć współpracę bez stresu."
        backgroundImage="/assets/arteon-logo-on-mockup.webp"
        overlay="black"
        variant="center"
      />

      <Breadcrumbs second={{ href: '/o-nas', label: 'O nas' }} third={{ href: '/o-nas/faq', label: 'FAQ' }} includeJsonLd />

      <Wrapper as="article" itemScope itemType="https://schema.org/FAQPage">
        <Gap size="xs" />

        <FaqPanels items={FAQ_ITEMS} openByDefault={1} generateSchema={false} pageUrl={PAGE_URL} />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSON_LD) }} />

        <Gap size="sm" />
      </Wrapper>

      <CTABanner
        title="Masz dodatkowe pytania?"
        description="Nie znalazłeś odpowiedzi na swoje pytanie w liście? Napisz do nas, z chęcią odpowiemy."
        btnOne="Skontaktuj się"
        btnOneLink="/kontakt"
        btnTwo="Poznaj wszystkie usługi"
        btnTwoLink="/uslugi"
        backgroundImage="/assets/arteon-logo-on-mockup.webp"
        overlay="black"
      />
    </>
  );
}
