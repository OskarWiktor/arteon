import type { Step } from '@/types/calculator';

export const shopSteps: Step[] = [
  {
    title: 'Czy posiadasz projekt graficzny witryny?',
    required: true,
    options: [
      { label: 'Tak', value: 'ready', price: 0, tooltip: 'Pracujemy na dostarczonym przez Ciebie projekcie' },
      { label: 'Mam inspiracje / pomysł', value: 'idea', multiplier: 1.2, tooltip: 'Na bazie Twoich inspiracji tworzymy dopasowany projekt sklepu' },
      { label: 'Nie', value: 'from-scratch', multiplier: 1.6, tooltip: 'Tworzymy projekt sklepu od zera – zgodny z Twoją marką i klientami' },
    ],
  },
  {
    title: 'Jakie podstrony ma zawierać Twoja strona?',
    tooltip: 'Wybierz podstrony i wpisz liczbę innych, jeśli nie ma ich na liście',
    required: true,
    type: 'multi',
    options: [
      { label: 'O nas', value: 'about', price: 150, tooltip: 'Informacje o firmie, zespole lub misji' },
      { label: 'Usługi / Oferta / Cennik', value: 'services', price: 150, tooltip: 'Opis Twoich usług lub produktów' },
      { label: 'Portfolio / Galeria', value: 'portfolio', price: 150, tooltip: 'Przykłady realizacji lub zdjęcia produktów' },
      { label: 'Kontakt', value: 'contact', price: 150, tooltip: 'Formularz kontaktowy, dane i mapa' },
      { label: 'FAQ', value: 'faq', price: 150, tooltip: 'Najczęstsze pytania i odpowiedzi klientów' },
    ],
    input: {
      key: 'custom-pages',
      label: 'Inne strony',
      unitPrice: 150,
    },
  },
  {
    title: 'Ile produktów mamy przygotować?',
    required: true,
    type: 'single',
    options: [
      { label: '0', value: '0-products', price: 0, tooltip: 'Wprowadzasz je samodzielnie – my budujemy system' },
      { label: '1–10', value: 'few-products', price: 200 },
      { label: '11–30', value: 'mid-products', price: 800 },
      { label: '31–60', value: 'more-products', price: 1600 },
      { label: '60+', value: 'large-products', price: 2000 },
    ],
    input: {
      key: 'custom-product-amount',
      label: 'Dokładna liczba produktów',
      unitPrice: 40,
    },
  },
  {
    title: 'Czy produkty posiadają warianty?',
    required: true,
    type: 'single',
    options: [
      { label: 'Brak wariantów', value: 'no-variants', price: 0, tooltip: 'Każdy produkt ma jedną wersję' },
      { label: 'Proste warianty', value: 'simple-variants', multiplier: 1.1, tooltip: 'Produkty mają kilka opcji, np. kolory lub rozmiary' },
      { label: 'Zaawansowane warianty', value: 'complex-variants', multiplier: 1.2, tooltip: 'Produkty mają wiele opcji, np. rozmiar, kolor i materiał' },
    ],
  },
  {
    title: 'Czy Twój sklep będzie posiadał artykuły?',
    required: true,
    options: [
      { label: 'Tak', value: 'articles', price: 150 },
      { label: 'Nie', value: 'no-articles', price: 0 },
    ],
    branches: {
      articles: [
        {
          title: 'Ile stron z artykułami mamy przygotować?',
          required: true,
          options: [
            { label: '1–3', value: 'articles-1-3', price: 120 },
            { label: '4–10', value: 'articles-4-10', price: 500 },
            { label: '11–30', value: 'articles-11-30', price: 1200 },
            { label: '31–60', value: 'articles-31-60', price: 2400 },
            { label: '60+', value: 'articles-60plus', price: 3600 },
          ],
          input: {
            label: 'Dokładna liczba',
            key: 'custom-article-amount',
            unitPrice: 60,
          },
        },
      ],
    },
  },
  {
    title: 'Czy posiadasz tekst dla swojego sklepu?',
    required: true,
    options: [
      { label: 'Tak', value: 'own-copy', price: 0, tooltip: 'Dostarczasz tekst — my go dodajemy' },
      { label: 'Potrzebuję korekty', value: 'copy-help', multiplier: 1.1, tooltip: 'Poprawiamy tekst pod kątem widoczności i stylu' },
      { label: 'Nie', value: 'copy-new', multiplier: 1.4, tooltip: 'Tworzymy tekst od zera, na podstawie Twojej oferty' },
    ],
  },
  {
    title: 'W jakim języku będzie sklep?',
    required: true,
    options: [
      { label: 'Polski', value: 'lang-pl', price: 0 },
      { label: 'Wielojęzyczna', value: 'lang-multi', multiplier: 1.4 },
      { label: 'Inny język (np. angielski)', value: 'lang-other', multiplier: 1.2 },
    ],
  },
  {
    title: 'Czy elementy witryny mają być animowane?',
    type: 'multi',
    options: [
      { label: 'Tak', value: 'section-animations', multiplier: 1.2 },
      { label: 'Nie', value: 'microinteractions', price: 0 },
    ],
  },
];
