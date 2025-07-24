// ToDo poprawić teksty

import type { Step } from '@/types/calculator';

export const websiteSteps: Step[] = [
  {
    title: 'Czy posiadasz projekt graficzny witryny?',
    required: true,
    options: [
      { label: 'Tak', value: 'ready', price: 0, tooltip: 'Pracujemy na dostarczonym przez Ciebie projekcie' },
      { label: 'Mam inspiracje / pomysł', value: 'idea', multiplier: 1.2, tooltip: 'Na bazie Twoich pomysłów i inspiracji tworzymy Twoją witrynę' },
      { label: 'Nie', value: 'from-scratch', multiplier: 1.6, tooltip: 'Tworzymy projekt witryny dopasowany do Twojej marki i klientów' },
    ],
  },
  {
    title: 'Czy witryna ma posiadać jedną czy wiele stron?',
    required: true,
    options: [
      { label: 'Jedna strona (onepage)', value: 'onepage', price: 0, tooltip: 'Wszystkie informacje zawarte na jednej, dłuższej stronie' },
      { label: 'Strona z podstronami', value: 'multipage', price: 0, tooltip: 'Struktura z wieloma zakładkami (np. O nas, Kontakt, Oferta)' },
    ],
    branches: {
      multipage: [
        {
          title: 'Jakie podstrony ma zawierać Twoja strona?',
          tooltip: 'Wybierz podstrony i wpisz liczbę innych, jeśli nie ma ich na liście',
          required: true,
          type: 'multi',
          options: [
            { label: 'O nas', value: 'about', price: 150, tooltip: 'Sekcja o firmie, zespole, misji' },
            { label: 'Usługi / Oferta / Cennik', value: 'services', price: 150, tooltip: 'Opis Twoich usług lub produktów' },
            { label: 'Portfolio / Realizacje / Galeria', value: 'portfolio', price: 150, tooltip: 'Galeria projektów lub wykonanych realizacji' },
            { label: 'Kontakt', value: 'contact', price: 150, tooltip: 'Dane kontaktowe, formularz, mapa' },
            { label: 'FAQ', value: 'faq', price: 150, tooltip: 'Odpowiedzi na częste pytania klientów' },
          ],
          input: {
            key: 'custom-pages',
            label: 'Inne strony',
            unitPrice: 150,
          },
        },
        {
          title: 'Czy Twoja strona będzie posiadała artykuły?',
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
      ],
    },
  },
  {
    title: 'Czy posiadasz tekst dla swojej witryny?',
    required: true,
    options: [
      { label: 'Tak', value: 'own-copy', price: 0, tooltip: 'Dostarczasz tekst — my go dodajemy' },
      { label: 'Potrzebuję korekty', value: 'copy-help', multiplier: 1.1, tooltip: 'Poprawiamy tekst pod kątem treści i widoczności' },
      { label: 'Nie', value: 'copy-new', multiplier: 1.4, tooltip: 'Tworzymy tekst od zera na podstawie Twojej branży i oferty' },
    ],
  },
  {
    title: 'W jakim języku będzie strona?',
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
