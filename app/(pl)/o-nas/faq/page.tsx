import Breadcrumbs from '@/components/sections/BreadCrumbs';
import CTABanner from '@/components/sections/CTABanner';
import HeroBanner from '@/components/sections/HeroBanner';
import Gap from '@/components/ui/Gap';
import FaqPanels from '@/components/ui/FaqPanels';
import Wrapper from '@/components/ui/Wrapper';
import { toAbsoluteUrl } from '@/utils/absoluteUrl';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';

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
        Zawsze zaczynamy od rozmowy i poznania Twoich indywidualnych potrzeb. Cały plan i wycenę dostosowujemy do Twoich celów, odbiorców, zakresu prac i priorytetów. Do pierwszej wyceny zwykle
        wystarczy zarys zakresu prac oraz Twoje oczekiwania - resztę dopracujemy po dokładniejszym zapoznaniu się z tematem. Najszybciej możesz skontaktować się przez{' '}
        <a href="/kontakt" className="inline-link">
          formularz kontaktowy
        </a>
        .
      </p>
    ),
    answerSchemaText:
      'Zawsze zaczynamy od rozmowy i poznania Twoich indywidualnych potrzeb. Cały plan i wycenę dostosowujemy do Twoich celów, odbiorców, zakresu prac i priorytetów. Do pierwszej wyceny zwykle wystarczy zarys zakresu prac oraz Twoje oczekiwania - resztę dopracujemy po dokładniejszym zapoznaniu się z tematem. Najszybciej możesz skontaktować się przez formularz kontaktowy.',
  },
  {
    question: 'Jak szybko dostanę wstępną wycenę?',
    answer:
      'Zwykle wracamy z wstępną wyceną po krótkim zapoznaniu z Twoimi potrzebami i tym, co chcesz stworzyć. Jeśli projekt jest większy, proponujemy rozłożenie realizacji na jasne etapy, które usprawnią cały proces i pozwolą zwiększyć efekt (np. w przypadku pozycjonowania stron).',
  },
  {
    question: 'Czy możecie pomóc mi wymyślić plan działania?',
    answer: 'Tak. Jeśli masz kilka pomysłów na rozwój i nie wiesz, od czego zacząć, podzielimy pracę na etapy. Dzięki temu mógł/mogła szybciej wystartować i nie przepalić budżetu.',
  },
  {
    question: 'Jak wygląda proces współpracy?',
    answer:
      'Najczęściej zaczynamy od krótkiej rozmowy, tworzymy wycenę, wyznaczamy kroki współpracy i ustalamy terminy. Każdy proces jest indywidualny - mamy elastyczne podejście do planowania i realizacji.',
  },
  {
    question: 'Czy zajmujecie się tworzeniem treści i pozycjonowaniem? Czy mogę to zlecić po czasie?',
    answer: (
      <p>
        Tak. Po zrealizowaniu każdego projektu, w tym witryny internetowej, zawsze dajemy kilka porad, co można zrobić, aby zwiększyć widoczność lub ułatwić pracę (np. przez dodanie automatyzacji,
        takich jak kalendarz rezerwacji). Jeśli potrzebujesz pełnego wsparcia w tekstach, napisz do nas lub sprawdź naszą ofertę{' '}
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
      'Tak. Po zrealizowaniu każdego projektu, w tym witryny internetowej, zawsze dajemy kilka porad, co można zrobić, aby zwiększyć widoczność lub ułatwić pracę (np. przez dodanie automatyzacji, takich jak kalendarz rezerwacji). Jeśli potrzebujesz pełnego wsparcia w tekstach, napisz do nas lub sprawdź naszą ofertę tworzenia treści i marketingu.',
  },
  {
    question: 'Czy mogę poprosić o jakąś poradę np. związaną z pozycjonowaniem?',
    answer:
      'Tak, jak najbardziej. Jeśli potrzebujesz porady związanej z rozwojem swojej firmy, możesz śmiało do nas napisać - nawet jeśli jeszcze nie wiesz, co chcesz zbudować albo dopiero zbierasz budżet. Chętnie pomożemy.',
  },
  {
    question: 'Czy po realizacji projektu mogę zlecić utrzymanie i rozwój serwisu?',
    answer:
      'Tak. Po realizacji prac nad budową Twojej witryny możemy stale wspierać jej rozwój i utrzymanie. Przy takim typie współpracy, w oparciu o Twoje potrzeby, tworzymy plan i dajemy sprawdzone pomysły na rozwój, a następnie je realizujemy. Na koniec miesiąca wystawiamy jedną zbiorczą fakturę za całość prac, a po drodze informujemy Cię o kosztach na każdym etapie, żebyś miał pełną kontrolę nad budżetem.',
  },
  {
    question: 'Ile kosztuje strona internetowa i co wpływa na wycenę?',
    answer:
      'Koszt zależy od zakresu: liczby podstron, złożoności projektu graficznego, wersji językowych, funkcji (np. formularze, rezerwacje), integracji oraz ewentualnego przygotowania dodatkowych treści lub grafik.',
  },
  {
    question: 'Czy mogę rozliczać projekt etapami?',
    answer:
      'Tak, jak najbardziej. Często, gdy projekt jest bardziej złożony, dzielimy go na etapy w sposób, który ułatwia rozliczenie. Jeśli np. nie masz jeszcze części materiałów, ale chcesz zacząć realizację, napisz do nas - podzielimy pracę tak, żebyś mógł/mogła szybko i bezpiecznie wystartować.',
  },
  {
    question: 'Ile trwa realizacja strony internetowej?',
    answer:
      'To zależy od zakresu i tego, czy od razu będziemy mieć wszystkie materiały. Do każdego projektu podchodzimy indywidualnie. Jeśli wszystkie materiały są gotowe, realizacja strony z kilkoma zakładkami (6–10 podstron) może zająć np. 6 dni roboczych.',
  },
  {
    question: 'Czy mogę dostarczyć własny projekt strony (np. w Figma) albo inspiracje?',
    answer: 'Jak najbardziej. Przed startem pracy nad stroną zawsze przygotowujemy jej wygląd. Gotowy projekt lub inspiracja mogą znacząco skrócić czas realizacji i zmniejszyć jej koszt.',
  },
  {
    question: 'Czy dbacie o szybkość strony i wydajność? Czego mogę oczekiwać, jakiego wyniku?',
    answer:
      'Tak. Szybkość i wygoda działania tworzonych witryn to dla nas podstawa, dlatego zawsze dbamy o wydajność. Końcowy wynik zależy od wybranej technologii, jednak zawsze celujemy w wynik na poziomie 90+ na 100 według PageSpeed Insights / Google Lighthouse.',
  },
  {
    question: 'Czy wdrożycie analitykę od razu (GA4, GTM, Pixel)?',
    answer: 'Zawsze rekomendujemy analitykę, bo dzięki niej widać, jak radzi sobie witryna. Nie jest to jednak domyślna modyfikacja - wdrażamy ją po Twoim zatwierdzeniu.',
  },
  {
    question: 'Czy mogę mieć wersję wielojęzyczną strony?',
    answer: 'Bez problemu. Wdrażamy wersje językowe w taki sposób, aby maksymalnie wzmocnić efekt SEO dla Twojej witryny.',
  },
  {
    question: 'Czy przeniesiecie treści ze starej strony (migracja)?',
    answer: 'Tak, zajmujemy się również migracją stron bez utraty pozycji. Po zapoznaniu się z Twoją starą stroną przygotujemy dokładny plan dla takiego projektu.',
  },
  {
    question: 'Czy zapewniacie hosting i domenę?',
    answer:
      'Możemy pomóc w wyborze i konfiguracji hostingu oraz domeny. Najważniejsze pod tym kątem jest dla nas bezpieczeństwo, kopie zapasowe i stabilność - na tym opieramy się przy rekomendacjach.',
  },
  {
    question: 'Czy będę mógł/mogła samodzielnie edytować treści?',
    answer:
      'Tak. Zależy nam, abyś po zakończeniu naszej pracy miał pełną kontrolę nad tym, co zostało zbudowane. W tym celu zawsze otrzymujesz pełny dostęp, a w razie potrzeby również dedykowane szkolenie z obsługi dopasowane do Twojej wiedzy technicznej.',
  },
  {
    question: 'Czy zrobicie integracje (CRM, newsletter, kalendarz, płatności)?',
    answer:
      'Tak. Wdrażamy wszelkiego typu integracje, a także w razie potrzeby tworzymy dedykowane rozwiązania i funkcjonalności. Możesz zerknąć na naszą stronę Narzędzia, aby zobaczyć przykłady takich rozwiązań.',
  },
  {
    question: 'Czy pomożecie z RODO/cookies i zgodnością witryny z prawem?',
    answer:
      'Tak, w każdym projekcie witryny przewidujemy pomoc w zakresie dostosowania witryny do standardów, w tym również do WCAG 2.1 AA. Jeśli nie jesteś pewien, co jest potrzebne na swojej stronie, możesz bez obaw nam to powierzyć - jesteśmy tu, żeby jak najlepiej Ci pomóc.',
  },
  {
    question: 'Jak wygląda komunikacja w trakcie projektu?',
    answer:
      'Przeważnie komunikujemy się poprzez wiadomości e-mail, rozmowy wideo online oraz rozmowy telefoniczne. Proces komunikacji dopasowujemy do tego, co jest dla Ciebie najlepsze. W trakcie współpracy dostajesz od nas pełne raporty zrealizowanych prac oraz aktualny postęp bardziej złożonych etapów.',
  },
  {
    question: 'Kto jest właścicielem strony, plików i dostępu po zakończeniu?',
    answer:
      'Ty. Po wdrożeniu przekazujemy pełne dostępy i wszystkie materiały. Domyślnie wszystkie prawa są Twoje - jeśli masz obawy, możemy podpisać kontrakt B2B lub umowę o przekazanie pełnych praw.',
  },
];

const FAQ_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntityOfPage: toAbsoluteUrl('/o-nas/faq'),
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
  title: 'FAQ - najczęstsze pytania dotyczące współpracy - Arteon',
  description: 'Odpowiadamy na najczęstsze pytania dotyczące współpracy: proces, terminy, wycena, treści, SEO, utrzymanie i odpowiedzialność po wdrożeniu.',
  alternates: { canonical: toAbsoluteUrl('/o-nas/faq') },
  openGraph: {
    title: 'FAQ - najczęstsze pytania dotyczące współpracy - Arteon',
    description: 'Odpowiadamy na najczęstsze pytania dotyczące współpracy: proces, terminy, wycena, treści, SEO, utrzymanie i odpowiedzialność po wdrożeniu.',
    url: toAbsoluteUrl('/o-nas/faq'),
    type: 'website',
    images: [{ url: toAbsoluteUrl('/assets/arteon-logo-on-mockup.webp'), width: 1200, height: 630 }],
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
      />

      <Breadcrumbs second={{ href: '/o-nas', label: 'O nas' }} third={{ href: '/o-nas/faq', label: 'FAQ' }} includeJsonLd />

      <Wrapper as="article" itemScope itemType="https://schema.org/FAQPage">
        <Gap size="xs" />

        <FaqPanels title="Najczęstsze pytania dotyczące współpracy" items={FAQ_ITEMS} openByDefault={1} generateSchema={false} pageUrl={toAbsoluteUrl('/o-nas/faq')} />

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
