import type { Step } from '@/types/calculator';

export const expansionSteps: Step[] = [
  {
    title: 'Co chcesz rozbudować?',
    required: true,
    options: [
      {
        label: 'Stronę internetową',
        value: 'website',
        price: 0,
      },
      {
        label: 'Sklep internetowy',
        value: 'shop',
        price: 0,
      },
      {
        label: 'Blog',
        value: 'blog',
        price: 0,
      },
    ],
    branches: {
      website: [
        {
          title: 'Co chcesz dodać?',
          tooltip: 'Możesz wybrać więcej niż jedno.',
          required: true,
          options: [
            { label: 'Nowe strony', value: 'website-pages', price: 0, tooltip: 'Dodamy pełne, osobne podstrony' },
            { label: 'Nowe sekcje', value: 'website-sections', price: 0, tooltip: 'Dodamy sekcje do istniejących stron' },
            { label: 'Funkcjonalności', value: 'website-functions', price: 0, tooltip: 'Rozszerzymy stronę o użyteczne funkcje' },
          ],
          type: 'multi',
          branches: {
            'website-pages': [
              {
                title: 'Ile stron chcesz dodać?',
                tooltip: 'Przykładowo: O nas, Galeria, Oferta',
                required: true,
                options: [
                  { label: '1–3 strony', value: '1-3-pages', price: 500 },
                  { label: '4–6 stron', value: '4-6-pages', price: 1000 },
                  { label: '7+ stron', value: '7plus-pages', price: 1400 },
                ],
                type: 'single',
                input: {
                  key: 'custom-pages-amount',
                  label: 'Dokładna liczba stron',
                  unitPrice: 150,
                },
              },
            ],
            'website-sections': [
              {
                title: 'Ile sekcji chcesz dodać?',
                tooltip: 'Przykładowo: Nasz Zespół, FAQ, Karuzela, Opinie',
                required: true,
                options: [
                  { label: '1–3 sekcje', value: '1-3-sections', price: 150 },
                  { label: '4–6 sekcji', value: '4-6-sections', price: 300 },
                  { label: '7+ sekcji', value: '7plus-sections', price: 420 },
                ],
                type: 'single',
                input: {
                  key: 'custom-sections-amount',
                  label: 'Dokładna liczba sekcji',
                  unitPrice: 60,
                },
              },
            ],
            'website-functions': [
              {
                title: 'Ile funkcji chcesz dodać?',
                tooltip: 'Przykładowo: formularze, logowanie użytkownika, funkcje sklepu ).',
                required: true,
                options: [
                  { label: '1–2 funkcje', value: '1-2-functions', price: 300 },
                  { label: '3–5 funkcji', value: '3-5-functions', price: 700 },
                  { label: '6+ funkcji', value: '6plus-functions', price: 1000 },
                ],
                type: 'single',
                input: {
                  key: 'custom-functions-amount',
                  label: 'Dokładna liczba funkcji',
                  unitPrice: 200,
                },
              },
            ],
          },
        },
      ],
      shop: [
        {
          title: 'Co chcesz rozbudować w sklepie?',
          tooltip: 'Możesz wybrać więcej niż jedno.',
          required: true,
          options: [
            { label: 'Produkty', value: 'shop-products', price: 0, tooltip: 'Dodamy nowe produkty do oferty.' },
            { label: 'Nowe strony', value: 'shop-pages', price: 0, tooltip: 'Dodamy pełne, osobne podstrony.' },
            { label: 'Nowe sekcje', value: 'shop-sections', price: 0, tooltip: 'Dodamy sekcje do istniejących stron.' },
            { label: 'Funkcjonalności', value: 'shop-functions', price: 0, tooltip: 'Rozszerzymy stronę o użyteczne moduły.' },
          ],
          type: 'multi',
          branches: {
            'shop-products': [
              {
                title: 'Ile produktów mamy przygotować?',
                required: true,
                type: 'single',
                options: [
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
            ],
            'shop-pages': [
              {
                title: 'Ile stron chcesz dodać?',
                tooltip: 'Przykładowo: O nas, Galeria, Oferta',
                required: true,
                options: [
                  { label: '1–3 strony', value: '1-3-pages', price: 500 },
                  { label: '4–6 stron', value: '4-6-pages', price: 1000 },
                  { label: '7+ stron', value: '7plus-pages', price: 1400 },
                ],
                type: 'single',
                input: {
                  key: 'custom-pages-amount',
                  label: 'Dokładna liczba stron',
                  unitPrice: 150,
                },
              },
            ],
            'shop-sections': [
              {
                title: 'Ile sekcji chcesz dodać?',
                tooltip: 'Przykładowo: Nasz Zespół, FAQ, Karuzela, Opinie',
                required: true,
                options: [
                  { label: '1–3 sekcje', value: '1-3-sections', price: 150 },
                  { label: '4–6 sekcji', value: '4-6-sections', price: 300 },
                  { label: '7+ sekcji', value: '7plus-sections', price: 420 },
                ],
                type: 'single',
                input: {
                  key: 'custom-sections-amount',
                  label: 'Dokładna liczba sekcji',
                  unitPrice: 60,
                },
              },
            ],
            'shop-functions': [
              {
                title: 'Ile funkcji chcesz dodać?',
                tooltip: 'Przykładowo: formularze, logowanie użytkownika, funkcje sklepu ).',
                required: true,
                options: [
                  { label: '1–2 funkcje', value: '1-2-functions', price: 300 },
                  { label: '3–5 funkcji', value: '3-5-functions', price: 700 },
                  { label: '6+ funkcji', value: '6plus-functions', price: 1000 },
                ],
                type: 'single',
                input: {
                  key: 'custom-functions-amount',
                  label: 'Dokładna liczba funkcji',
                  unitPrice: 200,
                },
              },
            ],
          },
        },
      ],
      blog: [
        {
          title: 'Co chcesz rozbudować na blogu?',
          tooltip: 'Możesz wybrać więcej niż jedno.',
          required: true,
          options: [
            { label: 'Nowe strony', value: 'blog-pages', price: 0, tooltip: 'Dodamy dodatkowe strony blogowe.' },
            { label: 'Nowe sekcje', value: 'blog-sections', price: 0, tooltip: 'Dodamy sekcje w ramach bloga.' },
            { label: 'Artykuły', value: 'blog-articles', price: 0, tooltip: 'Dodamy nowe treści na blogu.' },
            { label: 'Funkcjonalności', value: 'blog-functions', price: 0, tooltip: 'Dodamy nowe funkcje bloga.' },
          ],
          type: 'multi',
          branches: {
            'blog-articles': [
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
            'blog-pages': [
              {
                title: 'Ile stron chcesz dodać?',
                tooltip: 'Przykładowo: O nas, Galeria, Oferta',
                required: true,
                options: [
                  { label: '1–3 strony', value: '1-3-pages', price: 500 },
                  { label: '4–6 stron', value: '4-6-pages', price: 1000 },
                  { label: '7+ stron', value: '7plus-pages', price: 1400 },
                ],
                type: 'single',
                input: {
                  key: 'custom-pages-amount',
                  label: 'Dokładna liczba stron',
                  unitPrice: 150,
                },
              },
            ],
            'blog-sections': [
              {
                title: 'Ile sekcji chcesz dodać?',
                tooltip: 'Przykładowo: Nasz Zespół, FAQ, Karuzela, Opinie',
                required: true,
                options: [
                  { label: '1–3 sekcje', value: '1-3-sections', price: 150 },
                  { label: '4–6 sekcji', value: '4-6-sections', price: 300 },
                  { label: '7+ sekcji', value: '7plus-sections', price: 420 },
                ],
                type: 'single',
                input: {
                  key: 'custom-sections-amount',
                  label: 'Dokładna liczba sekcji',
                  unitPrice: 60,
                },
              },
            ],
            'blog-functions': [
              {
                title: 'Ile funkcji chcesz dodać?',
                tooltip: 'Przykładowo: formularze, logowanie użytkownika, funkcje sklepu ).',
                required: true,
                options: [
                  { label: '1–2 funkcje', value: '1-2-functions', price: 300 },
                  { label: '3–5 funkcji', value: '3-5-functions', price: 700 },
                  { label: '6+ funkcji', value: '6plus-functions', price: 1000 },
                ],
                type: 'single',
                input: {
                  key: 'custom-functions-amount',
                  label: 'Dokładna liczba funkcji',
                  unitPrice: 200,
                },
              },
            ],
          },
        },
      ],
    },
  },
];
