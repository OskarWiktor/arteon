import type { ReactNode } from 'react';
import InlineLink from '@/components/atoms/InlineLink';

/**
 * Process/"how we work" steps, shared by every service page and the homepage.
 * Shaped for {@link SectionTimeline}: the step number is the timeline marker
 * (`icon`), `title` is the step name and `description` its copy. Each variant
 * mirrors the wording that used to live in the removed `WorkSteps` component.
 */
interface ProcessStep {
  icon: ReactNode;
  title: string;
  description: ReactNode;
}

interface ProcessStepsSection {
  title: string;
  items: ProcessStep[];
}

const REGULATIONS_URL = '/regulamin';

const stepNumber = (n: number): ReactNode => (
  <span className='text-lg font-bold'>{n}</span>
);

/**
 * Home ("Jak pracujemy?") steps as plain text. Kept as raw strings so the exact
 * same wording feeds both the visible timeline and the homepage `HowTo`
 * structured data — the two must match. Edit the copy here in one place.
 */
export const homeProcessSteps: { name: string; text: string }[] = [
  {
    name: 'Rozmowa',
    text: 'Pierwszy etap to zawsze rozmowa na której opowiadasz o tym czym się zajmujesz i co chcesz zrealizować.',
  },
  {
    name: 'Plan',
    text: 'Po rozmowie zawsze dostajesz plan, który jest nastawiony na Twoje potrzeby oraz Twoich odbiorców wraz z etapami realizacji oraz wyceną, której zawsze się trzymamy. Każdy plan dopracowujemy abyś dostał dokładnie to czego potrzebujesz.',
  },
  {
    name: 'Realizacja',
    text: 'Po akceptacji planu przechodzimy do realizacji: tworzymy projekt graficzny stronę, sklep lub zajmujemy się zwiększeniem Twojej widoczności w sieci. Każdą koncepcję zawsze omawiamy, tak abyś wiedział jakie korzyści da Ci konkretne rozwiązania.',
  },
  {
    name: 'Publikacja i wsparcie',
    text: 'Po realizacji dajemy Ci pełen dostęp do wszelkich plików, zintegrowanych platform czy projektów graficznych. Po przekazaniu wszystko staje się własnością Twoją i Twojej firmy. Po realizacji zawsze możesz liczyć na dalsze wsparcie w rozwoju biznesu.',
  },
];

const stepsHome: ProcessStep[] = homeProcessSteps.map((step, index) => ({
  icon: stepNumber(index + 1),
  title: step.name,
  description: step.text,
}));

const stepsWeb: ProcessStep[] = [
  {
    icon: stepNumber(1),
    title: 'Rozmowa',
    description:
      'Ustalamy cele, odbiorców i funkcje. Zbieramy treści oraz sprawdzamy konkurencję, żeby zbudować właściwy kierunek.',
  },
  {
    icon: stepNumber(2),
    title: 'Plan',
    description:
      'Wyznaczamy jasny zakres, termin oraz cenę. Dobieramy technologię dla lepszych rezultatów. Wiesz, co powstanie, kiedy i za ile.',
  },
  {
    icon: stepNumber(3),
    title: 'Projekt i realizacja',
    description:
      'Projektujemy układ i wygląd, a następnie tworzymy stronę, blog lub sklep. Jesteśmy w stałym kontakcie, abyś miał pełny wgląd do postępów.',
  },
  {
    icon: stepNumber(4),
    title: 'Publikacja i wzrost',
    description: (
      <>
        Uruchamiamy witrynę oraz dajemy darmową propozycję „co dalej”, by Twoja
        firma rosła szybciej. Gwarancja 60 dni i jasne rozliczenia -{' '}
        <InlineLink
          href={REGULATIONS_URL}
          variant='default'
          className='underline underline-offset-4'
        >
          regulamin
        </InlineLink>
        .
      </>
    ),
  },
];

const stepsMarketing: ProcessStep[] = [
  {
    icon: stepNumber(1),
    title: 'Analiza',
    description:
      'Poznajemy rynek, klientów i Twoją ofertę. Ustalamy, co ma rosnąć: zapytania, sprzedaż, rozpoznawalność.',
  },
  {
    icon: stepNumber(2),
    title: 'Plan',
    description:
      'Wybieramy kanały, treści i harmonogram. Ustalamy budżet i sposób mierzenia efektu.',
  },
  {
    icon: stepNumber(3),
    title: 'Kreacje',
    description:
      'Konfigurujemy reklamy, tworzymy treści, optymalizujemy strony.',
  },
  {
    icon: stepNumber(4),
    title: 'Pomiar i wzrost',
    description: 'Pokazujemy efekty i planujemy następne kroki.',
  },
];

const stepsContent: ProcessStep[] = [
  {
    icon: stepNumber(1),
    title: 'Analiza',
    description: 'Definiujemy tematy, pytania klientów i ton komunikacji.',
  },
  {
    icon: stepNumber(2),
    title: 'Plan',
    description:
      'Układamy mapę tematów. Uzgadniamy priorytety: co tworzymy najpierw i gdzie.',
  },
  {
    icon: stepNumber(3),
    title: 'Tworzenie',
    description:
      'Tworzymy klarowne treści z wezwaniami do działania, dbając o widoczność w wyszukiwarkach.',
  },
  {
    icon: stepNumber(4),
    title: 'Publikacja',
    description: 'Wprowadzamy treści w wybranej formie i monitorujemy wyniki.',
  },
];

const stepsDesign: ProcessStep[] = [
  {
    icon: stepNumber(1),
    title: 'Analiza',
    description:
      'Zbieramy wszystkie dane, kontekst użycia i wymagania. Ustalamy jasne cele oraz wycenę.',
  },
  {
    icon: stepNumber(2),
    title: 'Koncepcje',
    description:
      'Przygotowujemy 2-3 kierunki z uzasadnieniem. Wybierasz drogę, my dopracowujemy detale.',
  },
  {
    icon: stepNumber(3),
    title: 'Realizacja',
    description:
      'Tworzymy odpowiednie materiały. Przygotowujemy pliki do druku i/lub do internetu.',
  },
  {
    icon: stepNumber(4),
    title: 'Dostarczenie',
    description:
      'Przekazujemy pliki w różnych formatach oraz tłumaczymy, jak najlepiej ich użyć.',
  },
];

export const processStepsSections: Record<
  'home' | 'web' | 'marketing' | 'content' | 'design',
  ProcessStepsSection
> = {
  home: { title: 'Jak pracujemy?', items: stepsHome },
  web: { title: 'Nasz proces współpracy', items: stepsWeb },
  marketing: { title: 'Nasz proces współpracy', items: stepsMarketing },
  content: { title: 'Nasz proces współpracy', items: stepsContent },
  design: { title: 'Nasz proces współpracy', items: stepsDesign },
};
