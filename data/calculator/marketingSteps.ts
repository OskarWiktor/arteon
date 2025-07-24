import type { Step } from '@/types/calculator';

export const marketingSteps: Step[] = [
  {
    title: 'Jak działa Twój biznes?',
    tooltip: 'Określ, czy sprzedajesz lokalnie, online czy łączysz oba modele. Nie musisz znać wszystkich szczegółów — pomożemy to poukładać.',
    options: [
      {
        label: 'Tylko lokalnie / stacjonarnie',
        value: 'local',
        price: 0,
        tooltip: 'Usługi na miejscu, w określonym regionie — np. salon, siłownia czy restauracja.',
      },
      {
        label: 'Tylko online',
        value: 'online',
        price: 0,
        tooltip: 'Produkty lub usługi sprzedawane w 100% online — np. kursy, sklep internetowy.',
      },
      {
        label: 'Hybrydowy: lokalnie + online',
        value: 'hybrid',
        price: 0,
        tooltip: 'Masz klientów w regionie, ale chcesz docierać też online — np. sklep z wysyłką.',
      },
    ],
  },
  {
    title: 'Jakie kanały chcesz wykorzystać?',
    tooltip: 'Zaznacz, co jest Ci najbliższe — resztę zaplanujemy razem.',
    options: [
      {
        label: 'Reklama w Google (Google Ads)',
        value: 'google',
        price: 1000,
        tooltip: 'Pojawiasz się tam, gdzie klienci szukają Twoich usług lub produktów.',
      },
      {
        label: 'Meta Ads (Instagram/Facebook)',
        value: 'meta',
        price: 800,
        tooltip: 'Płatna promocja postów, stories i kampanii na IG i FB.',
      },
      {
        label: 'LinkedIn Ads',
        value: 'linkedin',
        price: 1000,
        tooltip: 'Reklama B2B — docierasz do decydentów i firm.',
      },
      {
        label: 'Content marketing',
        value: 'content',
        price: 600,
        tooltip: 'Tworzenie artykułów i eksperckich treści — budujesz zaufanie i widoczność.',
      },
      {
        label: 'Google Moja Firma',
        value: 'gmf',
        price: 400,
        tooltip: 'Profil lokalny z mapą, opiniami i zdjęciami — buduje zaufanie w regionie.',
      },
    ],
    type: 'multi',
  },
  {
    title: 'Jak długo planujesz działania?',
    tooltip: 'Zdecyduj, czy chcesz jednorazową kampanię, czy stałą opiekę i rozwój.',
    options: [
      {
        label: 'Pojedyncza kampania',
        value: 'one-off',
        price: 0,
        tooltip: 'Krótka akcja promocyjna — np. sezonowa lub testowa.',
      },
      {
        label: 'Stała obsługa marketingowa',
        value: 'retainer',
        price: 1200,
        tooltip: 'Długofalowa strategia, testy A/B, optymalizacja i raporty.',
      },
    ],
  },
  {
    title: 'Co jest dla Ciebie najważniejsze?',
    tooltip: 'Zdefiniuj priorytet — dzięki temu zaplanujemy budżet i działania. Jeśli nie wiesz — ustalimy to razem.',
    options: [
      {
        label: 'Nowi klienci i zapytania',
        value: 'new-clients',
        price: 0,
        tooltip: 'Celem są zapytania, telefony, leady i zamówienia.',
      },
      {
        label: 'Większa rozpoznawalność marki',
        value: 'visibility',
        price: 0,
        tooltip: 'Budujesz markę, zasięg i zaufanie — klienci Cię zapamiętują.',
      },
      {
        label: 'Budowa bazy mailingowej',
        value: 'mailing',
        price: 0,
        tooltip: 'Zbierasz adresy e-mail, żeby informować klientów o nowościach i ofertach.',
      },
    ],
    type: 'multi',
  },
];
