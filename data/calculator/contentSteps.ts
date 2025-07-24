// contentSteps.ts
import type { Step } from '@/types/calculator';

export const contentSteps: Step[] = [
  {
    title: 'Jakie treści chcesz stworzyć?',
    tooltip: 'Możesz wybrać więcej niż jeden typ — dopasujemy styl i strukturę.',
    required: true,
    type: 'multi',
    options: [
      {
        label: 'Artykuły blogowe / eksperckie',
        value: 'articles',
        price: 0,
        tooltip: 'Teksty, które budują widoczność i pozycję eksperta.',
      },
      {
        label: 'Teksty na stronę internetową',
        value: 'web-copy',
        price: 0,
        tooltip: 'Treści do sekcji typu: O nas, oferta, kontakt.',
      },
      {
        label: 'Treści do social mediów',
        value: 'social',
        price: 0,
        tooltip: 'Posty dopasowane do Twoich kanałów.',
      },
      {
        label: 'Opisy produktów',
        value: 'products',
        price: 0,
        tooltip: 'Zoptymalizowane teksty prezentujące ofertę.',
      },
    ],
    branches: {
      articles: [
        {
          title: 'Jaki będzie cel artykułów?',
          tooltip: 'Określenie celu pozwala dobrać styl i długość treści.',
          required: true,
          type: 'multi',

          options: [
            { label: 'Widoczność w Google', value: 'seo', price: 0, tooltip: 'Treści pisane z myślą o wyszukiwarkach.' },
            { label: 'Pozycjonowanie marki eksperta', value: 'authority', price: 0, tooltip: 'Treści budujące zaufanie.' },
            { label: 'Sprzedaż / leady', value: 'sales', price: 0, tooltip: 'Treści kierujące do działania.' },
            { label: 'Edukacja i storytelling', value: 'education', price: 0, tooltip: 'Dzielenie się wiedzą i historią marki.' },
            { label: 'Inny cel', value: 'goal-other', price: 0, tooltip: 'Opisz swój własny cel.' },
          ],
        },
        {
          title: 'Ile artykułów potrzebujesz?',
          tooltip: 'Podaj orientacyjną liczbę lub skorzystaj z opcji dokładnej.',
          required: true,
          options: [
            { label: '1–3 artykuły', value: 'articles-1-3', price: 250, tooltip: 'Krótka paczka treści.' },
            { label: '4–10 artykułów', value: 'articles-4-10', price: 800, tooltip: 'Średni pakiet treści.' },
            { label: '10+ artykułów', value: 'articles-10plus', price: 1500, tooltip: 'Rozbudowany pakiet.' },
          ],
          input: {
            label: 'Dokładna liczba artykułów',
            key: 'custom-article-amount',
            unitPrice: 100,
            tooltip: 'Wpisz dokładną liczbę, jeśli chcesz indywidualną wycenę.',
          },
        },
      ],
      'web-copy': [
        {
          title: 'Czy potrzebujesz treści na całe strony czy na tylko nowych sekcji',
          tooltip: '...',
          required: true,
          options: [
            { label: 'Strony', value: 'website', price: 400, tooltip: '...' },
            { label: 'Sekcje', value: 'section', price: 0, tooltip: '..' },
          ],
          branches: {
            website: [
              {
                title: 'Ile stron',
                tooltip: '...',
                required: true,
                options: [
                  { label: '1', value: 'w1', price: 0, tooltip: '...' },
                  { label: '2-4', value: 'w24', price: 0, tooltip: '..' },
                  { label: '5-10', value: 'w510', price: 0, tooltip: '..' },
                ],
                input: {
                  key: 'custom-website-amount',
                  label: '...',
                  unitPrice: 40,
                  tooltip: 'Wpisz dokładną liczbę, jeśli chcesz indywidualną wycenę.',
                },
              },
            ],
            section: [
              {
                title: 'Ile sekcji',
                tooltip: '...',
                required: true,
                options: [
                  { label: '1', value: 'w1', price: 0, tooltip: '...' },
                  { label: '2-4', value: 'w24', price: 0, tooltip: '..' },
                  { label: '5-10', value: 'w510', price: 0, tooltip: '..' },
                ],
                input: {
                  key: 'custom-section-amount',
                  label: '...',
                  unitPrice: 40,
                  tooltip: 'Wpisz dokładną liczbę, jeśli chcesz indywidualną wycenę.',
                },
              },
            ],
          },
        },
      ],
      social: [
        {
          title: 'Na jakie platformy potrzebujesz treści?',
          tooltip: 'Zadbamy o dopasowanie formy i tonu.',
          required: true,
          type: 'multi',
          options: [
            { label: 'Instagram / Facebook', value: 'ig-fb', price: 0, tooltip: 'Posty z grafikami i opisami.' },
            { label: 'LinkedIn', value: 'linkedin', price: 0, tooltip: 'Treści dla biznesu i profesjonalnego odbiorcy.' },
            { label: 'TikTok', value: 'tiktok', price: 0, tooltip: 'Koncepcje i teksty pod krótkie formy video.' },
            { label: 'Inne', value: 'social-other', price: 0, tooltip: 'Wskaż platformę lub kanał komunikacji.' },
          ],
        },
        {
          title: 'Ile postów lub zestawów treści?',
          tooltip: 'Określ objętość materiału.',
          required: true,
          options: [
            { label: '3 posty', value: 'posts-3', price: 400, tooltip: 'Podstawowy zestaw treści.' },
            { label: '5–10 postów', value: 'posts-5-10', price: 900, tooltip: 'Średni zestaw postów.' },
            { label: '10+ postów', value: 'posts-10plus', price: 1500, tooltip: 'Kompleksowa komunikacja.' },
          ],
          input: {
            label: 'Dokładna liczba postów',
            key: 'custom-post-amount',
            unitPrice: 100,
            tooltip: 'Wpisz dokładną liczbę, jeśli chcesz indywidualną wycenę.',
          },
        },
      ],
      products: [
        {
          title: 'Ile produktów lub usług mamy opisać?',
          tooltip: 'Teksty dopasowane do Twojej oferty.',
          required: true,
          options: [
            { label: '1–5 produktów', value: 'products-1-5', price: 400, tooltip: 'Zestaw krótkich opisów.' },
            { label: '6–15 produktów', value: 'products-6-15', price: 900, tooltip: 'Średni pakiet.' },
            { label: '15+ produktów', value: 'products-15plus', price: 1500, tooltip: 'Duża paczka treści produktowych.' },
          ],
          input: {
            label: 'Dokładna liczba produktów',
            key: 'custom-product-amount',
            unitPrice: 80,
            tooltip: 'Wpisz dokładną liczbę, jeśli chcesz indywidualną wycenę.',
          },
        },
      ],
    },
  },
  {
    title: 'W jakich językach mają być treści?',
    tooltip: 'Możesz wybrać jeden język — angielski podwaja cenę.',
    required: true,
    options: [
      { label: 'Polski', value: 'lang-pl', price: 0, tooltip: 'Treści w języku polskim.' },
      { label: 'Angielski', value: 'lang-en', multiplier: 1.2, tooltip: 'Doliczamy +100% do ceny.' },
    ],
  },
];
