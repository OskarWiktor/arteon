import type { Step } from '@/types/calculator';

export const shopSteps: Step[] = [
  {
    title: 'Czy posiadasz projekt graficzny witryny?',
    required: true,
    options: [
      { label: 'Tak', value: 'ready', price: 0, tooltip: 'Pracujemy na dostarczonym przez Ciebie projekcie', icon: 'FiCheckCircle' },
      { label: 'Mam inspiracje / pomysł', value: 'idea', multiplier: 1.2, tooltip: 'Na bazie Twoich inspiracji tworzymy dopasowany projekt sklepu', icon: 'FiLightbulb' },
      { label: 'Nie', value: 'from-scratch', multiplier: 1.6, tooltip: 'Tworzymy projekt sklepu od zera – zgodny z Twoją marką i klientami', icon: 'FiEdit3' },
    ],
  },
  {
    title: 'Jakie podstrony ma zawierać Twój sklep?',
    tooltip: 'Przykładowo: O nas, Galeria, Oferta',
    required: true,
    type: 'single',
    options: [
      { label: '1', value: 'website-1', price: 200, icon: 'FiFile' },
      { label: '2-3', value: 'website-2-3', price: 600, icon: 'FiFilePlus' },
      { label: '4-6', value: 'website-4-6', price: 1200, icon: 'FiFolder' },
      { label: '7-10', value: 'website-7-10', price: 2000, icon: 'FiFolderPlus' },
    ],
    input: {
      key: 'custom-pages-amount',
      label: 'Dokładna liczba stron',
      unitPrice: 200,
    },
  },
  {
    title: 'Ile produktów mamy przygotować?',
    required: true,
    type: 'single',
    options: [
      { label: '0', value: '0-products', price: 0, tooltip: 'Wprowadzasz je samodzielnie – my budujemy system', icon: 'FiMinusCircle' },
      { label: '1–10', value: 'few-products', price: 200, icon: 'FiBox' },
      { label: '11–30', value: 'mid-products', price: 800, icon: 'FiGrid' },
      { label: '31–60', value: 'more-products', price: 1600, icon: 'FiLayers' },
      { label: '60+', value: 'large-products', price: 2000, icon: 'FiPackage' },
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
      { label: 'Brak wariantów', value: 'no-variants', price: 0, tooltip: 'Każdy produkt ma jedną wersję', icon: 'FiXCircle' },
      { label: 'Proste warianty', value: 'simple-variants', multiplier: 1.1, tooltip: 'Produkty mają kilka opcji, np. kolory lub rozmiary', icon: 'FiToggleLeft' },
      { label: 'Zaawansowane warianty', value: 'complex-variants', multiplier: 1.2, tooltip: 'Produkty mają wiele opcji, np. rozmiar, kolor i materiał', icon: 'FiSliders' },
    ],
  },
  {
    title: 'Czy Twój sklep będzie posiadał artykuły?',
    required: true,
    options: [
      { label: 'Tak', value: 'articles', price: 150, icon: 'FiFileText' },
      { label: 'Nie', value: 'no-articles', price: 0, icon: 'FiXCircle' },
    ],
    branches: {
      articles: [
        {
          title: 'Ile stron z artykułami mamy przygotować?',
          required: true,
          options: [
            { label: '1–3', value: 'articles-1-3', price: 120, icon: 'FiFile' },
            { label: '4–10', value: 'articles-4-10', price: 500, icon: 'FiFilePlus' },
            { label: '11–30', value: 'articles-11-30', price: 1200, icon: 'FiFolder' },
            { label: '31–60', value: 'articles-31-60', price: 2400, icon: 'FiFolderPlus' },
            { label: '60+', value: 'articles-60plus', price: 3600, icon: 'FiArchive' },
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
      { label: 'Tak', value: 'own-copy', price: 0, tooltip: 'Dostarczasz tekst — my go dodajemy', icon: 'FiFile' },
      { label: 'Potrzebuję korekty', value: 'copy-help', multiplier: 1.1, tooltip: 'Poprawiamy tekst pod kątem widoczności i stylu', icon: 'FiEdit' },
      { label: 'Nie', value: 'copy-new', multiplier: 1.4, tooltip: 'Tworzymy tekst od zera, na podstawie Twojej oferty', icon: 'FiPenTool' },
    ],
  },
  {
    title: 'W jakim języku będzie sklep?',
    required: true,
    options: [
      { label: 'Polski', value: 'lang-pl', price: 0, icon: 'FiFlag' },
      { label: 'Wielojęzyczna', value: 'lang-multi', multiplier: 1.4, icon: 'FiGlobe' },
      { label: 'Inny język (np. angielski)', value: 'lang-other', multiplier: 1.2, icon: 'FiMessageSquare' },
    ],
  },
  {
    title: 'Czy elementy witryny mają być animowane?',
    type: 'multi',
    options: [
      { label: 'Tak', value: 'section-animations', multiplier: 1.2, icon: 'FiPlayCircle' },
      { label: 'Nie', value: 'microinteractions', price: 0, icon: 'FiPauseCircle' },
    ],
  },
];
