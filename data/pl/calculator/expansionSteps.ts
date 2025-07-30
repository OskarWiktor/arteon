import type { Step } from '@/types/calculator';

export const expansionSteps: Step[] = [
  {
    title: 'Co chcesz rozbudować?',
    required: true,
    options: [
      { label: 'Stronę internetową', value: 'website', price: 0, icon: 'FiGlobe' },
      { label: 'Sklep internetowy', value: 'shop', price: 0, icon: 'FiShoppingCart' },
      { label: 'Blog', value: 'blog', price: 0, icon: 'FiEdit3' },
    ],
    branches: {
      website: [
        {
          title: 'Co chcesz dodać?',
          tooltip: 'Możesz wybrać więcej niż jedno.',
          required: true,
          type: 'multi',
          options: [
            { label: 'Nowe strony', value: 'website-pages', price: 0, icon: 'FiFile' },
            { label: 'Nowe sekcje', value: 'website-sections', price: 0, icon: 'FiLayout' },
            { label: 'Funkcjonalności', value: 'website-functions', price: 0, icon: 'FiSettings' },
          ],
          branches: {
            'website-pages': [
              {
                title: 'Ile stron chcesz dodać?',
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
            ],
            'website-sections': [
              {
                title: 'Ile sekcji chcesz dodać?',
                tooltip: 'Przykładowo: Nasz Zespół, FAQ, Karuzela, Opinie',
                required: true,
                type: 'single',
                options: [
                  { label: '1', value: 'section-1', price: 60, icon: 'FiFile' },
                  { label: '2-3', value: 'section-2-3', price: 180, icon: 'FiFilePlus' },
                  { label: '4-6', value: 'section-4-6', price: 360, icon: 'FiFolder' },
                  { label: '7-10', value: 'section-7-10', price: 600, icon: 'FiFolderPlus' },
                ],
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
                type: 'single',
                options: [
                  { label: '1–2', value: '1-2-functions', price: 400, icon: 'FiCpu' },
                  { label: '3–5', value: '3-5-functions', price: 1000, icon: 'FiCpu' },
                  { label: '6+', value: '6plus-functions', price: 1200, icon: 'FiCpu' },
                ],
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
          type: 'multi',
          options: [
            { label: 'Produkty', value: 'shop-products', price: 0, icon: 'FiBox' },
            { label: 'Nowe strony', value: 'shop-pages', price: 0, icon: 'FiFile' },
            { label: 'Nowe sekcje', value: 'shop-sections', price: 0, icon: 'FiLayout' },
            { label: 'Funkcjonalności', value: 'shop-functions', price: 0, icon: 'FiSettings' },
          ],
          branches: {
            'shop-products': [
              {
                title: 'Ile produktów mamy przygotować?',
                required: true,
                type: 'single',
                options: [
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
            ],
            'shop-pages': [
              {
                title: 'Ile stron chcesz dodać?',
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
            ],
            'shop-sections': [
              {
                title: 'Ile sekcji chcesz dodać?',
                tooltip: 'Przykładowo: Nasz Zespół, FAQ, Karuzela, Opinie',
                required: true,
                type: 'single',
                options: [
                  { label: '1', value: 'section-1', price: 60, icon: 'FiFile' },
                  { label: '2-3', value: 'section-2-3', price: 180, icon: 'FiFilePlus' },
                  { label: '4-6', value: 'section-4-6', price: 360, icon: 'FiFolder' },
                  { label: '7-10', value: 'section-7-10', price: 600, icon: 'FiFolderPlus' },
                ],
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
                type: 'single',
                options: [
                  { label: '1–2', value: '1-2-functions', price: 400, icon: 'FiCpu' },
                  { label: '3–5', value: '3-5-functions', price: 1000, icon: 'FiCpu' },
                  { label: '6+', value: '6plus-functions', price: 1200, icon: 'FiCpu' },
                ],
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
          type: 'multi',
          options: [
            { label: 'Nowe strony', value: 'blog-pages', price: 0, icon: 'FiFile' },
            { label: 'Nowe sekcje', value: 'blog-sections', price: 0, icon: 'FiLayout' },
            { label: 'Artykuły', value: 'blog-articles', price: 0, icon: 'FiFileText' },
            { label: 'Funkcjonalności', value: 'blog-functions', price: 0, icon: 'FiSettings' },
          ],
          branches: {
            'blog-articles': [
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
            'blog-pages': [
              {
                title: 'Ile stron chcesz dodać?',
                tooltip: 'Przykładowo: O nas, Galeria, Oferta',
                required: true,
                options: [
                  { label: '1', value: 'website-1', price: 200, icon: 'FiFile' },
                  { label: '2-3', value: 'website-2-3', price: 600, icon: 'FiFilePlus' },
                  { label: '4-6', value: 'website-4-6', price: 1200, icon: 'FiFolder' },
                  { label: '7-10', value: 'website-7-10', price: 2000, icon: 'FiFolderPlus' },
                ],
                type: 'single',
                input: {
                  key: 'custom-pages-amount',
                  label: 'Dokładna liczba stron',
                  unitPrice: 200,
                },
              },
            ],
            'blog-sections': [
              {
                title: 'Ile sekcji chcesz dodać?',
                tooltip: 'Przykładowo: Nasz Zespół, FAQ, Karuzela, Opinie',
                required: true,
                options: [
                  { label: '1', value: 'section-1', price: 60, icon: 'FiFile' },
                  { label: '2-3', value: 'section-2-3', price: 180, icon: 'FiFilePlus' },
                  { label: '4-6', value: 'section-4-6', price: 360, icon: 'FiFolder' },
                  { label: '7-10', value: 'section-7-10', price: 600, icon: 'FiFolderPlus' },
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
                  { label: '1–2', value: '1-2-functions', price: 400, icon: 'FiCpu' },
                  { label: '3–5', value: '3-5-functions', price: 1000, icon: 'FiCpu' },
                  { label: '6+', value: '6plus-functions', price: 1200, icon: 'FiCpu' },
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
