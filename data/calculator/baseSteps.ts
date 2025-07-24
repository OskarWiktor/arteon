import type { Step } from '@/types/calculator';

export const baseSteps: Step[] = [
  {
    title: 'Czego potrzebuje Twoja firma?',
    options: [
      {
        label: 'Strona internetowa',
        value: 'website',
        price: 800,
        tooltip: 'Witryna, która reprezentuje Twoją markę',
      },
      {
        label: 'Sklep online',
        value: 'shop',
        price: 1200,
        tooltip: 'Sklep z koszykiem, płatnościami i panelem klienta — gotowy do sprzedaży 24/7.',
      },
      {
        label: 'Blog',
        value: 'blog',
        price: 1000,
        tooltip: 'Blog lub portal dla Twoich czytelników',
      },
      {
        label: 'Redesign',
        value: 'redesign',
        price: 500,
        tooltip: 'Odświeżenie wyglądu Twojej marki lub witryny',
      },
      {
        label: 'Rozbudowa',
        value: 'expansion',
        price: 700,
        tooltip: 'Rozbudowa istniejącej witryny, sklepu lub bloga',
      },
      {
        label: 'Treść',
        value: 'content',
        price: 0,
        tooltip: 'Treść na Twoją witrynę lub media społecznościowe',
      },
      {
        label: 'Grafika i Branding',
        value: 'graphics',
        price: 0,
        tooltip: 'Logo, identyfikacja wizualna, materiały materiały do internetu i druku',
      },
      {
        label: 'Marketing / Reklama',
        value: 'marketing',
        price: 0,
        tooltip: 'Kampanie reklamowe, widoczność w Google, social media',
      },
    ],
  },
];
