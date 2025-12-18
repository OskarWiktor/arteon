import Breadcrumbs from '@/components/sections/BreadCrumbs';
import CTABanner from '@/components/sections/CTABanner';
import HeroBanner from '@/components/sections/HeroBanner';
import Gap from '@/components/ui/Gap';
import FaqPanels from '@/components/ui/FaqPanels';
import SectionInfo from '@/components/ui/sections/SectionInfo';
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
        Zaczynamy od rozmowy i prostego briefu: cel, odbiorcy, zakres i priorytety. Do pierwszej wyceny zwykle wystarczy zarys - resztę doprecyzujemy.
        Najszybciej złapiesz nas przez{' '}
        <a href="/kontakt" className="inline-link">
          formularz kontaktowy
        </a>
        .
      </p>
    ),
    answerSchemaText:
      'Zaczynamy od rozmowy i krótkiego briefu: cel, odbiorcy, zakres i priorytety. Do pierwszej wyceny zwykle wystarczy zarys - resztę doprecyzujemy w rozmowie.',
  },
  {
    question: 'Czy możecie pomóc mi ustalić zakres (MVP vs pełna wersja)?',
    answer:
      'Tak. Porządkujemy zakres na: must-have, should-have i nice-to-have. Dzięki temu startujesz szybciej, a rozwój planujesz bez chaosu i przepalania budżetu.',
  },
  {
    question: 'Jak wygląda proces współpracy krok po kroku?',
    answer:
      'Najczęściej: brief → struktura i treści → projekt UI → wdrożenie → testy → publikacja → wsparcie po starcie. Każdy etap ma jasny cel, akceptację i listę “co dalej”.',
  },
  {
    question: 'Czy zajmujecie się treściami (copywriting) i SEO?',
    answer: (
      <p>
        Tak - łączymy projekt, wdrożenie i treści. Jeśli potrzebujesz pełnego wsparcia w tekstach, zobacz usługę{' '}
        <a href="/uslugi/tworzenie-tresci" className="inline-link">
          tworzenie treści
        </a>
        , a w obszarze widoczności w Google: ofertę{' '}
        <a href="/uslugi/marketing" className="inline-link">
          marketing
        </a>
        .
      </p>
    ),
    answerSchemaText:
      'Tak - łączymy projekt, wdrożenie i treści. W razie potrzeby zapewniamy copywriting oraz wsparcie SEO (od planu treści po optymalizację i strategię widoczności).',
  },
  {
    question: 'Gdzie mogę zobaczyć ofertę stron i sklepów internetowych?',
    answer: (
      <p>
        Najlepiej zacząć od oferty{' '}
        <a href="/uslugi/strony-internetowe" className="inline-link">
          stron internetowych
        </a>{' '}
        i{' '}
        <a href="/uslugi/sklepy-internetowe" className="inline-link">
          sklepów internetowych
        </a>
        . Jeśli nie wiesz, co będzie lepsze dla Twojego biznesu - napisz do nas, pomożemy dobrać kierunek.
      </p>
    ),
    answerSchemaText:
      'Najlepiej zacząć od oferty stron internetowych i sklepów internetowych. Jeśli nie wiesz, co będzie lepsze dla Twojego biznesu, pomożemy dobrać kierunek.',
  },
  {
    question: 'Gdzie znajdę więcej porad o stronach, SEO i UX?',
    answer: (
      <p>
        Regularnie publikujemy materiały w sekcji{' '}
        <a href="/edukacja" className="inline-link">
          Edukacja
        </a>
        . To dobre miejsce, żeby przygotować się do projektu, zebrać wymagania i zrozumieć, co realnie wpływa na wyniki (ruch, leady, sprzedaż).
      </p>
    ),
    answerSchemaText:
      'Publikujemy materiały w sekcji Edukacja. To dobre miejsce, żeby przygotować się do projektu, zebrać wymagania i zrozumieć, co realnie wpływa na wyniki (ruch, leady, sprzedaż).',
  },
  {
    question: 'Czy po wdrożeniu zostaję sam/sama z administracją strony?',
    answer:
      'Nie. Po starcie przekazujemy instrukcję obsługi i pomagamy wdrożyć zmiany. Możesz też zlecić nam stałe utrzymanie i rozwój serwisu.',
  },
  {
    question: 'Jak szybko dostanę wstępną wycenę?',
    answer:
      'Zwykle wracamy z wstępną wyceną po krótkiej rozmowie i zebraniu podstaw: celu, zakresu i priorytetów. Jeśli projekt jest większy, proponujemy 2-3 warianty (MVP, standard, rozwojowy).',
  },
  {
    question: 'Ile kosztuje strona internetowa i co wpływa na wycenę?',
    answer:
      'Koszt zależy od zakresu: liczby podstron, złożoności projektu UI, przygotowania treści, wersji językowych, funkcji (formularze, rezerwacje, konfiguratory), integracji oraz ewentualnej migracji ze starej strony.',
  },
  {
    question: 'Czy mogę rozliczać projekt etapami?',
    answer:
      'Tak. Dzielimy prace na etapy (np. projekt, wdrożenie, publikacja) i rozliczamy po akceptacji kolejnych kamieni milowych. To daje przewidywalność i kontrolę budżetu.',
  },
  {
    question: 'Ile trwa realizacja strony internetowej?',
    answer:
      'To zależy od zakresu i tego, kiedy mamy komplet materiałów. Typowa strona firmowa zwykle mieści się w kilku tygodniach od startu prac. Dla większych serwisów ustalamy harmonogram etapami.',
  },
  {
    question: 'Czy mogę dostarczyć własny projekt (np. Figma) albo inspiracje?',
    answer:
      'Tak. Możemy pracować na Twoim projekcie (po weryfikacji wykonalności i spójności) albo przygotować projekt na bazie inspiracji. Ważne, aby ustalić cele i priorytety UX, nie tylko wygląd.',
  },
  {
    question: 'Czy strona będzie dobrze działała na telefonie (RWD)?',
    answer:
      'Tak. Projekt i wdrożenie robimy responsywnie - sprawdzamy kluczowe widoki (mobile/tablet/desktop), nawigację, czytelność oraz formularze. Zależy nam, żeby użytkownik mógł wykonać cel bez “walki” z interfejsem.',
  },
  {
    question: 'Czy dbacie o szybkość strony i Core Web Vitals?',
    answer:
      'Tak. Optymalizujemy m.in. obrazy, sposób ładowania zasobów i strukturę strony. Szybkość traktujemy jako element UX i SEO, więc pilnujemy, żeby rozwiązanie było lekkie i przewidywalne.',
  },
  {
    question: 'Czy robicie SEO techniczne na etapie wdrożenia?',
    answer:
      'Tak. Ustawiamy podstawy: meta dane, nagłówki, linkowanie wewnętrzne, adresy URL, dane strukturalne, mapę strony oraz poprawne indeksowanie. Dalszy wzrost widoczności zależy też od treści i regularnej pracy, w czym również możemy pomóc.',
  },
  {
    question: 'Czy wdrożycie analitykę (GA4, GTM, Pixel)?',
    answer:
      'Tak. Konfigurujemy analitykę i tagi marketingowe oraz pomagamy poukładać zdarzenia (np. wysłanie formularza, kliknięcie telefonu, pobranie PDF). Jeśli masz już konta i dostęp, wdrożenie jest szybkie.',
  },
  {
    question: 'Czy mogę mieć wersję wielojęzyczną strony?',
    answer:
      'Tak. Dobieramy podejście do języków (osobne adresy, przełącznik języka, odpowiednia struktura) i dbamy o poprawne oznaczenia SEO dla wersji językowych. Treści możesz dostarczyć lub możemy je przygotować.',
  },
  {
    question: 'Czy przeniesiecie treści ze starej strony (migracja)?',
    answer:
      'Tak. Migrację planujemy tak, aby nie stracić ruchu: mapujemy stare i nowe adresy, ustawiamy przekierowania 301 i weryfikujemy, czy kluczowe podstrony zachowują sens i strukturę.',
  },
  {
    question: 'Czy zapewniacie hosting i domenę?',
    answer:
      'Możemy pomóc w wyborze i konfiguracji hostingu oraz domeny, albo pracować na Twojej infrastrukturze. Ważne jest bezpieczeństwo, kopie zapasowe i stabilność - na tym się skupiamy przy rekomendacjach.',
  },
  {
    question: 'Czy będę mógł/mogła samodzielnie edytować treści?',
    answer:
      'Tak. Zależy nam, żebyś miał(a) kontrolę nad tym, co zmieniasz najczęściej (teksty, zdjęcia, oferta). Dobieramy sposób edycji do potrzeb: od prostych rozwiązań po pełny panel CMS.',
  },
  {
    question: 'Czy będę mógł/mogła dodawać wpisy na blogu lub aktualności?',
    answer:
      'Tak. Jeśli planujesz edukację i SEO content, wdrażamy sekcję blog/aktualności tak, aby dodawanie treści było proste, a struktura (nagłówki, linki, obrazy) wspierała widoczność w Google.',
  },
  {
    question: 'Czy wdrożycie formularze, mapę Google i klikalne CTA (telefon, mail)?',
    answer:
      'Tak. Formularze i CTA projektujemy pod realne zapytania (lead), a nie “żeby były”. Możemy dodać mapę, opinie, sekcje zaufania oraz mierzenie konwersji w analityce.',
  },
  {
    question: 'Czy zrobicie integracje (CRM, newsletter, kalendarz, płatności)?',
    answer:
      'Tak. Integracje planujemy na podstawie celu: zbieranie leadów, automatyzacje, rezerwacje lub sprzedaż. Jeśli masz już narzędzia, dopasujemy wdrożenie do Twoich procesów.',
  },
  {
    question: 'Czy pomożecie z RODO/cookies i banerem zgód?',
    answer:
      'Tak. Wdrażamy mechanizmy zgód na cookies/analitykę oraz pomagamy poprawnie podpiąć skrypty. Treści prawne (np. polityka prywatności) zwykle dostarcza klient lub kancelaria - możemy pomóc we wdrożeniu i ułożeniu na stronie.',
  },
  {
    question: 'Jak wygląda komunikacja w trakcie projektu?',
    answer:
      'Ustalamy kanał kontaktu, częstotliwość statusów i sposób akceptacji etapów. W praktyce dostajesz jasne “co zrobione / co dalej / czego potrzebujemy”, bez znikania na tygodnie.',
  },
  {
    question: 'Kto jest właścicielem strony, plików i dostępu po zakończeniu?',
    answer:
      'Ty. Po wdrożeniu przekazujemy dostępy i materiały zgodnie z ustaleniami. Zależy nam, żeby projekt był bezpieczny i możliwy do rozwijania, nawet jeśli kiedyś zmienisz wykonawcę.',
  },
  {
    question: 'Czy oferujecie utrzymanie, aktualizacje i rozwój strony?',
    answer:
      'Tak. Możemy przejąć opiekę techniczną: aktualizacje, poprawki, monitoring, kopie zapasowe oraz rozwój funkcji. To wygodne, jeśli chcesz mieć “spokój” i stałe wsparcie.',
  },
  {
    question: 'Czy możecie zrobić audyt mojej obecnej strony przed redesignem?',
    answer:
      'Tak. Audyt pomaga określić priorytety: co zostawić, co poprawić, co przebudować. Sprawdzamy m.in. UX, treści, strukturę SEO i elementy techniczne, żeby nowa wersja była realnie lepsza, a nie tylko ładniejsza.',
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
  title: 'FAQ - najczęstsze pytania o współpracę | Arteon',
  description:
    'Odpowiadamy na najczęstsze pytania o współpracę z Arteon: proces, terminy, wycena, treści, SEO, utrzymanie i odpowiedzialność po wdrożeniu.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'FAQ - najczęstsze pytania o współpracę | Arteon',
    description:
      'Odpowiadamy na najczęstsze pytania o współpracę z Arteon: proces, terminy, wycena, treści, SEO, utrzymanie i odpowiedzialność po wdrożeniu.',
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
        description="Najczęstsze pytania o współpracę z Arteon. Konkretne odpowiedzi, które pomogą Ci podjąć decyzję i zaplanować projekt bez stresu."
        backgroundImage="/assets/arteon-logo-on-mockup.webp"
        overlay="black"
        variant="center"
      />

      <Breadcrumbs second={{ href: '/o-nas', label: 'O nas' }} third={{ href: '/o-nas/faq', label: 'FAQ' }} includeJsonLd />

      <Wrapper as="article" itemScope itemType="https://schema.org/FAQPage">
        <Gap size="xs" />

        <SectionInfo
          title="FAQ o współpracy"
          description="Jeśli nie znajdujesz odpowiedzi na swoje pytanie - napisz do nas. Wracamy z odpowiedzią i dopasujemy najlepszą drogę do efektu."
          btnOne="Skontaktuj się"
          btnOneLink="/kontakt"
          btnTwo="Poznaj ofertę"
          btnTwoLink="/uslugi"
        />

        <Gap variant="line" />

        <FaqPanels items={FAQ_ITEMS} openByDefault={1} generateSchema={false} pageUrl={PAGE_URL} />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSON_LD) }} />

        <Gap size="sm" />
      </Wrapper>

      <CTABanner
        title="Masz dodatkowe pytania?"
        description="Napisz - dostaniesz jasną odpowiedź i propozycję kolejnych kroków."
        btnOne="Skontaktuj się"
        btnOneLink="/kontakt"
        btnTwo="Zobacz usługi"
        btnTwoLink="/uslugi"
        backgroundImage="/assets/arteon-logo-on-mockup.webp"
        overlay="black"
      />
    </>
  );
}
