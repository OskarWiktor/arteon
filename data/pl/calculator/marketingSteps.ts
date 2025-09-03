import type { Step } from '@/types/calculator';

export const marketingSteps: Step[] = [
  {
    title: 'Jakie działania marketingowe Cię interesują?',
    required: true,
    type: 'multi',
    options: [
      { label: 'Pozycjonowanie strony (SEO)', value: 'seo', price: 0, tooltip: 'Poprawa widoczności strony w wynikach wyszukiwania Google.', icon: 'FiTrendingUp' },
      { label: 'Reklamy płatne (PPC)', value: 'ppc', price: 0, icon: 'FiCreditCard', tooltip: 'Płatne kampanie, np. Google Ads, gdzie płacisz za kliknięcie.' },
      { label: 'Marketing treści (Content)', value: 'content', price: 0, icon: 'FiFileText', tooltip: 'Tworzenie tekstów, które przyciągają klientów i poprawiają SEO.' },
      { label: 'Social Media', value: 'social', price: 0, icon: 'FiShare2', tooltip: 'Obecność i aktywność Twojej marki w mediach społecznościowych.' },
      { label: 'Analityka / Optymalizacja', value: 'analytics', price: 0, icon: 'FiBarChart2', tooltip: 'Analiza danych oraz poprawa skuteczności działań marketingowych.' },
    ],
    branches: {
      seo: [
        {
          title: 'Jaki zakres pozycjonowania Cię interesuje?',
          required: true,
          options: [
            { label: 'Lokalne SEO', value: 'seo-local', price: 600, icon: 'FiMapPin' },
            { label: 'Ogólnopolskie SEO', value: 'seo-national', price: 1200, icon: 'FiGlobe' },
            { label: 'Branżowe / niszowe', value: 'seo-niche', price: 800, icon: 'FiSearch' },
          ],
        },
        {
          title: 'Ile podstron ma Twoja strona?',
          required: true,
          type: 'single',
          options: [
            { label: '1', value: 'website-1', price: 100, icon: 'FiFile' },
            { label: '2-3', value: 'website-2-3', price: 300, icon: 'FiFilePlus' },
            { label: '4-6', value: 'website-4-6', price: 600, icon: 'FiFolder' },
            { label: '7-10', value: 'website-7-10', price: 1000, icon: 'FiFolderPlus' },
          ],
          input: {
            key: 'custom-pages-amount',
            label: 'Dokładna liczba stron',
            unitPrice: 100,
          },
        },
      ],
      ppc: [
        {
          title: 'Jakie kampanie chcesz prowadzić?',
          required: true,
          type: 'multi',
          options: [
            { label: 'Google Ads – wyszukiwarka', value: 'ppc-search', price: 500, icon: 'FiSearch' },
            { label: 'Google Ads – banery (Display)', value: 'ppc-display', price: 400, icon: 'FiImage' },
            { label: 'Remarketing', value: 'ppc-remarketing', price: 400, icon: 'FiRepeat' },
            { label: 'Meta Ads (Facebook / Instagram)', value: 'ppc-meta', price: 500, icon: 'FiFacebook' },
          ],
        },
      ],
      content: [
        {
          title: 'Jakie treści chcesz zamówić?',
          required: true,
          type: 'multi',
          options: [
            { label: 'Artykuły blogowe / eksperckie', value: 'content-articles', price: 0, icon: 'FiFileText' },
            { label: 'Treści na stronę www', value: 'content-website', price: 0, icon: 'FiGlobe' },
            { label: 'Treści dla postów do social mediów', value: 'content-social', price: 0, icon: 'FiMessageSquare' },
            { label: 'Opisy produktów', value: 'content-products', price: 0, icon: 'FiTag' },
          ],
          branches: {
            'content-articles': [
              {
                title: 'Dla ilu artykułów mamy przygotować treść?',
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
            'content-website': [
              {
                title: 'Dla ilu stron mamy przygotować treść?',
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
            'content-social': [
              {
                title: 'Ile postów mamy przygotować?',
                required: true,
                options: [
                  { label: '1', value: 'post-1', price: 60, icon: 'FiMessageSquare' },
                  { label: '2-3', value: 'post-2-3', price: 180, icon: 'FiMessageCircle' },
                  { label: '4-6', value: 'post-4-6', price: 360, icon: 'FiSend' },
                  { label: '7-10', value: 'post-7-10', price: 600, icon: 'FiFeather' },
                ],
                input: {
                  label: 'Dokładna liczba postów',
                  key: 'custom-social-copy-amount',
                  unitPrice: 60,
                },
              },
            ],
            'content-products': [
              {
                title: 'Dla ilu produktów mamy przygotować treść?',
                required: true,
                options: [
                  { label: '1–10', value: 'products-1-10', price: 400, icon: 'FiBox' },
                  { label: '11–30', value: 'products-11-30', price: 1200, icon: 'FiGrid' },
                  { label: '31–60', value: 'products-31-60', price: 2400, icon: 'FiLayers' },
                  { label: '60+', value: 'products-60plus', price: 3200, icon: 'FiPackage' },
                ],
                input: {
                  key: 'custom-product-copy-amount',
                  label: 'Dokładna liczba produktów',
                  unitPrice: 40,
                },
              },
            ],
          },
        },
      ],
      social: [
        {
          title: 'Na jakich platformach chcesz działać?',
          required: true,
          type: 'multi',
          options: [
            { label: 'Facebook / Instagram', value: 'social-fb-ig', price: 600, icon: 'FiInstagram' },
            { label: 'LinkedIn', value: 'social-linkedin', price: 500, icon: 'FiLinkedin' },
          ],
        },
        {
          title: 'Jakie działania Cię interesują?',
          required: true,
          type: 'multi',
          options: [
            { label: 'Strategia / plan publikacji', value: 'social-strategy', price: 400, icon: 'FiBookOpen' },
            { label: 'Tworzenie grafik / postów', value: 'social-design', price: 500, icon: 'FiImage' },
            { label: 'Moderacja komentarzy', value: 'social-comments', price: 300, icon: 'FiMessageCircle' },
          ],
        },
      ],
      analytics: [
        {
          title: 'Jakie usługi analityczne mamy wykonać?',
          required: true,
          type: 'multi',
          options: [
            { label: 'Instalacja Google Analytics / Pixel', value: 'analytics-install', price: 120, icon: 'FiSettings' },
            { label: 'Miesięczny raport + wnioski', value: 'analytics-report', price: 400, icon: 'FiFile' },
            { label: 'Audyt UX / konwersji', value: 'analytics-ux-audit', price: 600, icon: 'FiActivity' },
          ],
        },
      ],
    },
  },
  {
    title: 'Na jak długo planujesz działania marketingowe?',
    required: true,
    options: [
      { label: 'Jednorazowa kampania', value: 'one-time', price: 0, icon: 'FiZap' },
      { label: '1–3 miesiące', value: 'short-term', multiplier: 1.2, icon: 'FiClock' },
      { label: '4–6 miesięcy', value: 'mid-term', multiplier: 1.4, icon: 'FiCalendar' },
      { label: '6+ miesięcy (ciągła współpraca)', value: 'long-term', multiplier: 1.6, icon: 'FiRepeat' },
    ],
  },
  {
    title: 'Czy posiadasz wcześniejsze dane marketingowe (kampanie, statystyki)?',
    required: true,
    options: [
      { label: 'Tak – udostępnię', value: 'has-data', price: 0, icon: 'FiDatabase' },
      { label: 'Nie – zaczynamy od zera', value: 'no-data', multiplier: 1.1, icon: 'FiAlertCircle' },
    ],
  },
];
