import type { Step } from '@/types/calculator';

export const contentSteps: Step[] = [
  {
    title: 'Jakie treści chcesz stworzyć?',
    tooltip: 'Możesz wybrać więcej niż jeden typ',
    required: true,
    type: 'multi',
    options: [
      {
        label: 'Artykuły blogowe / eksperckie',
        value: 'articles',
        price: 0,
        icon: 'FiFileText',
      },
      {
        label: 'Teksty na stronę internetową',
        value: 'web-copy',
        price: 0,
        icon: 'FiGlobe',
      },
      {
        label: 'Treści do social mediów',
        value: 'social',
        price: 0,
        icon: 'FiShare2',
      },
      {
        label: 'Opisy produktów',
        value: 'products',
        price: 0,
        icon: 'FiTag',
      },
    ],
    branches: {
      articles: [
        {
          title: 'Ile artykułów potrzebujesz?',
          required: true,
          options: [
            { label: '1', value: 'articles-1-3', price: 120, icon: 'FiFile' },
            { label: '2–4', value: 'articles-4-10', price: 480, icon: 'FiFilePlus' },
            { label: '5–10', value: 'articles-11-30', price: 1200, icon: 'FiFolder' },
            { label: '11–20', value: 'articles-31-60', price: 2400, icon: 'FiFolderPlus' },
            { label: '20+', value: 'articles-60plus', price: 2800, icon: 'FiArchive' },
          ],
          input: {
            label: 'Dokładna liczba',
            key: 'custom-article-amount',
            unitPrice: 120,
          },
        },
      ],
      'web-copy': [
        {
          title: 'Czy potrzebujesz treści dla całych strony czy sekcji?',
          required: true,
          options: [
            { label: 'Strony', value: 'website', price: 0, icon: 'FiFileText' },
            { label: 'Sekcje', value: 'section', price: 0, icon: 'FiLayout' },
          ],
          branches: {
            website: [
              {
                title: 'Na ile stron potrzebujesz treści?',
                required: true,
                options: [
                  { label: '1', value: 'website-1', price: 120, icon: 'FiFile' },
                  { label: '2-3', value: 'website-2-3', price: 360, icon: 'FiFilePlus' },
                  { label: '4-6', value: 'website-4-6', price: 720, icon: 'FiFolder' },
                  { label: '7-10', value: 'website-7-10', price: 1200, icon: 'FiFolderPlus' },
                ],
                input: {
                  key: 'custom-website-amount',
                  label: 'Dokładna liczba',
                  unitPrice: 120,
                },
              },
            ],
            section: [
              {
                title: 'Do ilu sekcji potrzebujesz treści?',
                required: true,
                options: [
                  { label: '1', value: 'section-1', price: 40, icon: 'FiFile' },
                  { label: '2-3', value: 'section-2-3', price: 120, icon: 'FiFilePlus' },
                  { label: '4-6', value: 'section-4-6', price: 240, icon: 'FiFolder' },
                  { label: '7-10', value: 'section-7-10', price: 400, icon: 'FiFolderPlus' },
                ],
                input: {
                  key: 'custom-section-amount',
                  label: 'Dokładna liczba',
                  unitPrice: 40,
                },
              },
            ],
          },
        },
      ],
      social: [
        {
          title: 'Do ilu postów mamy przygotować treści?',
          required: true,
          options: [
            { label: '1', value: 'post-1', price: 60, icon: 'FiMessageSquare' },
            { label: '2-3', value: 'post-2-3', price: 180, icon: 'FiMessageCircle' },
            { label: '4-6', value: 'post-4-6', price: 360, icon: 'FiSend' },
            { label: '7-10', value: 'post-7-10', price: 600, icon: 'FiFeather' },
          ],
          input: {
            label: 'Dokładna liczba postów',
            key: 'custom-post-amount',
            unitPrice: 60,
          },
        },
      ],
      products: [
        {
          title: 'Ile produktów mamy opisać?',
          required: true,
          options: [
            { label: '1–10', value: 'few-products', price: 400, icon: 'FiBox' },
            { label: '11–30', value: 'mid-products', price: 1200, icon: 'FiGrid' },
            { label: '31–60', value: 'more-products', price: 2400, icon: 'FiLayers' },
            { label: '60+', value: 'large-products', price: 3200, icon: 'FiPackage' },
          ],
          input: {
            key: 'custom-product-amount',
            label: 'Dokładna liczba produktów',
            unitPrice: 40,
          },
        },
      ],
    },
  },
  {
    title: 'W jakich językach mają być treści?',
    required: true,
    options: [
      { label: 'Polski', value: 'lang-pl', price: 0, icon: 'FiFlag' },
      { label: 'Angielski', value: 'lang-en', multiplier: 1.2, icon: 'FiMessageSquare' },
    ],
  },
];
