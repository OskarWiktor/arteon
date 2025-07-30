import type { Step } from '@/types/calculator';

export const websiteSteps: Step[] = [
  {
    title: 'Czy posiadasz projekt graficzny witryny?',
    required: true,
    options: [
      { label: 'Tak', value: 'ready', price: 0, tooltip: 'Pracujemy na dostarczonym przez Ciebie projekcie', icon: 'FiCheckCircle' },
      { label: 'Mam inspiracje / pomysł', value: 'idea', multiplier: 1.2, tooltip: 'Na bazie Twoich pomysłów i inspiracji tworzymy Twoją witrynę', icon: 'FiLightbulb' },
      { label: 'Nie', value: 'from-scratch', multiplier: 1.6, tooltip: 'Tworzymy projekt witryny dopasowany do Twojej marki i klientów', icon: 'FiEdit3' },
    ],
  },
  {
    title: 'Czy witryna ma posiadać jedną czy wiele stron?',
    required: true,
    options: [
      { label: 'Jedna strona (onepage)', value: 'onepage', price: 0, tooltip: 'Wszystkie informacje zawarte na jednej, dłuższej stronie', icon: 'FiAlignJustify' },
      { label: 'Strona z podstronami', value: 'multipage', price: 0, tooltip: 'Struktura z wieloma zakładkami (np. O nas, Kontakt, Oferta)', icon: 'FiLayers' },
    ],
    branches: {
      multipage: [
        {
          title: 'Jakie podstrony ma zawierać Twoja strona?',
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
          title: 'Czy Twoja strona będzie posiadała artykuły?',
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
      ],
    },
  },
  {
    title: 'Czy posiadasz tekst dla swojej witryny?',
    required: true,
    options: [
      { label: 'Tak', value: 'own-copy', price: 0, tooltip: 'Dostarczasz tekst — my go dodajemy', icon: 'FiFile' },
      { label: 'Potrzebuję korekty', value: 'copy-help', multiplier: 1.1, tooltip: 'Poprawiamy tekst pod kątem treści i widoczności', icon: 'FiEdit' },
      { label: 'Nie', value: 'copy-new', multiplier: 1.4, tooltip: 'Tworzymy tekst od zera na podstawie Twojej branży i oferty', icon: 'FiPenTool' },
    ],
  },
  {
    title: 'W jakim języku będzie strona?',
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
