import type { Step } from '@/types/calculator';

export const redesignSteps: Step[] = [
  {
    title: 'Co chcesz odświeżyć?',
    tooltip: 'Zaznacz, co wymaga nowej energii. Jeśli nie wiesz — doradzimy.',
    options: [
      { label: 'Wygląd (UI)', value: 'ui', price: 500, tooltip: 'Nowy layout, kolory i fonty dopasowane do Twojej marki.' },
      { label: 'Struktura (UX)', value: 'ux', price: 700, tooltip: 'Poprawimy układ, nawigację i flow użytkownika — krok po kroku.' },
      { label: 'Treści', value: 'content', price: 400, tooltip: 'Odświeżymy i zoptymalizujemy teksty tak, by sprzedawały.' },
      { label: 'Nowe sekcje', value: 'new-sections', price: 600, tooltip: 'Dodamy brakujące podstrony i moduły, które wzmacniają ofertę.' },
    ],
    type: 'multi',
  },
  {
    title: 'Masz nową identyfikację wizualną?',
    tooltip: 'Jeśli nie — przygotujemy ją spójnie z Twoją stroną.',
    options: [
      { label: 'Tak, mam gotową', value: 'has-brand', price: 0, tooltip: 'Dostarczasz nowy branding (logo, kolory, fonty).' },
      { label: 'Nie, potrzebuję nowej', value: 'need-brand', price: 800, tooltip: 'Stworzymy pełną identyfikację wizualną — logo, paleta barw, typografia.' },
    ],
  },
  {
    title: 'Chcesz dodać nowe funkcje?',
    tooltip: 'Rozbuduj stronę o moduły, które zwiększają zasięg i interakcję.',
    options: [
      { label: 'Blog', value: 'blog', price: 300, tooltip: 'Sekcja artykułów — wzmocni SEO i buduje wizerunek eksperta.' },
      { label: 'Newsletter', value: 'newsletter', price: 200, tooltip: 'Formularz zapisu — budujesz bazę mailingową i relację.' },
      { label: 'Rezerwacje online', value: 'booking', price: 600, tooltip: 'Kalendarz wizyt — prosty sposób na automatyzację.' },
    ],
    type: 'multi',
  },
  {
    title: 'Wsparcie i optymalizacja',
    tooltip: 'Dodatki, które zadbają o spokój po starcie.',
    options: [
      { label: 'Optymalizacja SEO', value: 'seo', price: 400, tooltip: 'Struktura strony gotowa pod Google + poprawa szybkości.' },
      { label: 'Wsparcie techniczne', value: 'support', price: 200, tooltip: 'Miesięczna opieka i szybkie reakcje na potrzeby.' },
    ],
    type: 'multi',
  },
];
