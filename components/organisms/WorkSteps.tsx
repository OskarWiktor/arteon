import InlineLink from '../atoms/InlineLink';
import SectionSteps from './sections/SectionSteps';

const REGULATIONS_URL = '/regulamin';

type Variant = 'home' | 'web' | 'marketing' | 'content' | 'design';

const stepsHome = [
  {
    title: (
      <>
        <span className='font-extrabold text-primary'>1 </span>Rozmowa
      </>
    ),
    description: (
      <p>
        Ustalamy cele, odbiorców i priorytety. Zbieramy wszystkie niezbędne informacje, aby stworzyć
        efekt, na którym Ci zależy.
      </p>
    ),
  },
  {
    title: (
      <>
        <span className='font-extrabold text-primary'>2 </span>Plan
      </>
    ),
    description: (
      <p>Tworzymy dokładny plan: ustalamy zakres, termin i tworzymy dedykowaną wycenę.</p>
    ),
  },
  {
    title: (
      <>
        <span className='font-extrabold text-primary'>3 </span>Realizacja
      </>
    ),
    description: (
      <p>
        Tworzymy to, czego potrzebujesz: stronę, grafiki, treści lub kampanie. Dbamy o widoczność w
        Google i dostępność (WCAG).
      </p>
    ),
  },
  {
    title: (
      <>
        <span className='font-extrabold text-primary'>4 </span>Publikacja i wsparcie
      </>
    ),
    description: (
      <p>
        Uruchamiamy i dostarczamy pliki. Tworzymy darmową listę kroków „co dalej”, by Twoja firma
        rosła szybciej.
      </p>
    ),
  },
];

const stepsWeb = [
  {
    title: (
      <>
        <span className='font-extrabold text-light'>1 </span>Rozmowa
      </>
    ),
    description: (
      <p>
        Ustalamy cele, odbiorców i funkcje. Zbieramy treści oraz sprawdzamy konkurencję, żeby
        zbudować właściwy kierunek.
      </p>
    ),
  },
  {
    title: (
      <>
        <span className='font-extrabold text-light'>2 </span>Plan
      </>
    ),
    description: (
      <p>
        Wyznaczamy jasny zakres, termin oraz cenę. Dobieramy technologię dla lepszych rezultatów.
        Wiesz, co powstanie, kiedy i za ile.
      </p>
    ),
  },
  {
    title: (
      <>
        <span className='font-extrabold text-light'>3 </span>Projekt i realizacja
      </>
    ),
    description: (
      <p>
        Projektujemy układ i wygląd, a następnie tworzymy stronę, blog lub sklep. Jesteśmy w stałym
        kontakcie, abyś miał pełny wgląd do postępów.
      </p>
    ),
  },
  {
    title: (
      <>
        <span className='font-extrabold text-light'>4 </span>Publikacja i wzrost
      </>
    ),
    description: (
      <p>
        Uruchamiamy witrynę oraz dajemy darmową propozycję „co dalej”, by Twoja firma rosła
        szybciej. Gwarancja 60 dni i jasne rozliczenia -{' '}
        <InlineLink
          href={REGULATIONS_URL}
          variant='default'
          className='underline underline-offset-4'
        >
          regulamin
        </InlineLink>
        .
      </p>
    ),
  },
];

const stepsMarketing = [
  {
    title: (
      <>
        <span className='font-extrabold text-light'>1 </span>Analiza
      </>
    ),
    description: (
      <p>
        Poznajemy rynek, klientów i Twoją ofertę. Ustalamy, co ma rosnąć: zapytania, sprzedaż,
        rozpoznawalność.
      </p>
    ),
  },
  {
    title: (
      <>
        <span className='font-extrabold text-light'>2 </span>Plan
      </>
    ),
    description: (
      <p>Wybieramy kanały, treści i harmonogram. Ustalamy budżet i sposób mierzenia efektu.</p>
    ),
  },
  {
    title: (
      <>
        <span className='font-extrabold text-light'>3 </span>Kreacje
      </>
    ),
    description: <p>Konfigurujemy reklamy, tworzymy treści, optymalizujemy strony.</p>,
  },
  {
    title: (
      <>
        <span className='font-extrabold text-light'>4 </span>Pomiar i wzrost
      </>
    ),
    description: <p>Pokazujemy efekty i planujemy następne kroki.</p>,
  },
];

const stepsContent = [
  {
    title: (
      <>
        <span className='font-extrabold text-light'>1 </span>Analiza
      </>
    ),
    description: <p>Definiujemy tematy, pytania klientów i ton komunikacji.</p>,
  },
  {
    title: (
      <>
        <span className='font-extrabold text-light'>2 </span>Plan
      </>
    ),
    description: <p>Układamy mapę tematów. Uzgadniamy priorytety: co tworzymy najpierw i gdzie.</p>,
  },
  {
    title: (
      <>
        <span className='font-extrabold text-light'>3 </span>Tworzenie
      </>
    ),
    description: (
      <p>
        Tworzymy klarowne treści z wezwaniami do działania, dbając o widoczność w wyszukiwarkach.
      </p>
    ),
  },
  {
    title: (
      <>
        <span className='font-extrabold text-light'>4 </span>Publikacja
      </>
    ),
    description: <p>Wprowadzamy treści w wybranej formie i monitorujemy wyniki.</p>,
  },
];

const stepsDesign = [
  {
    title: (
      <>
        <span className='font-extrabold text-light'>1 </span>Analiza
      </>
    ),
    description: (
      <p>Zbieramy wszystkie dane, kontekst użycia i wymagania. Ustalamy jasne cele oraz wycenę.</p>
    ),
  },
  {
    title: (
      <>
        <span className='font-extrabold text-light'>2 </span>Koncepcje
      </>
    ),
    description: (
      <p>Przygotowujemy 2-3 kierunki z uzasadnieniem. Wybierasz drogę, my dopracowujemy detale.</p>
    ),
  },
  {
    title: (
      <>
        <span className='font-extrabold text-light'>3 </span>Realizacja
      </>
    ),
    description: (
      <p>Tworzymy odpowiednie materiały. Przygotowujemy pliki do druku i/lub do internetu.</p>
    ),
  },
  {
    title: (
      <>
        <span className='font-extrabold text-light'>4 </span>Dostarczenie
      </>
    ),
    description: (
      <p>Przekazujemy pliki w różnych formatach oraz tłumaczymy, jak najlepiej ich użyć.</p>
    ),
  },
];

const VARIANTS: Record<Variant, typeof stepsHome> = {
  home: stepsHome,
  web: stepsWeb,
  marketing: stepsMarketing,
  content: stepsContent,
  design: stepsDesign,
};

export default function WorkSteps({
  variant = 'home',
  title,
  subtitle,
  description,
}: {
  variant?: Variant;
  title?: string;
  subtitle?: string;
  description?: string;
}) {
  const items = VARIANTS[variant];

  return (
    <SectionSteps
      title={title ?? (variant === 'home' ? 'Jak pracujemy?' : 'Nasz proces współpracy')}
      subtitle={subtitle ?? undefined}
      description={description ?? undefined}
      grid='four'
      items={items}
    />
  );
}
