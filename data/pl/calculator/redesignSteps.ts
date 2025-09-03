import type { Step } from '@/types/calculator';

export const redesignSteps: Step[] = [
  {
    title: 'Co chcesz zmienić?',
    required: true,
    options: [
      { label: 'Stronę internetową', value: 'website', price: 0, icon: 'FiGlobe' },
      { label: 'Sklep internetowy', value: 'shop', price: 0, icon: 'FiShoppingCart' },
      { label: 'Blog', value: 'blog', price: 0, icon: 'FiEdit3' },
    ],
    branches: {
      website: [
        {
          title: 'Czy posiadasz nowy projekt graficzny?',
          required: true,
          options: [
            { label: 'Tak', value: 'ready-design', price: 0, tooltip: 'Pracujemy na Twoim gotowym projekcie', icon: 'FiCheckCircle' },
            { label: 'Mam inspiracje', value: 'idea-redesign', multiplier: 1.2, tooltip: 'Zaprojektujemy nowy wygląd na podstawie inspiracji', icon: 'FiLightbulb' },
            { label: 'Potrzebuję nowego projektu', value: 'new-redesign', multiplier: 1.5, tooltip: 'Kompletny redesign dopasowany do marki', icon: 'FiEdit3' },
          ],
        },
        {
          title: 'Czy treść pozostaje taka sama?',
          required: true,
          options: [
            { label: 'Tak', value: 'same-copy', price: 0, icon: 'FiFileText' },
            { label: 'Nie', value: 'newcopy', price: 0, icon: 'FiEdit' },
          ],
          branches: {
            newcopy: [
              {
                title: 'Czy posiadasz nowy tekst dla swojej witryny?',
                required: true,
                options: [
                  { label: 'Tak', value: 'own-copy', price: 0, tooltip: 'Dostarczasz tekst — my go dodajemy', icon: 'FiFile' },
                  { label: 'Potrzebuję korekty', value: 'copy-help', multiplier: 1.1, tooltip: 'Poprawiamy tekst pod kątem treści i widoczności', icon: 'FiEdit' },
                  { label: 'Nie', value: 'copy-new', multiplier: 1.4, tooltip: 'Tworzymy tekst od zera na podstawie Twojej branży i oferty', icon: 'FiPenTool' },
                ],
              },
            ],
          },
        },
        {
          title: 'Ile stron zawiera Twoja witryna?',
          tooltip: 'Przykładowo: O nas, Galeria, Oferta',
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
        {
          title: 'Czy strona ma zostać rozbudowana o nowe podstrony?',
          required: true,
          options: [
            { label: 'Nie', value: 'no-expand', price: 0, icon: 'FiMinusCircle' },
            { label: 'Tak', value: 'expand', price: 0, icon: 'FiPlusCircle' },
          ],
          branches: {
            expand: [
              {
                title: 'Ile nowych podstron chcesz dodać?',
                tooltip: 'Nowe podstrony jak np. Oferta, Galeria',
                required: true,
                type: 'single',
                options: [
                  { label: '1', value: 'extra-1', price: 200, icon: 'FiFile' },
                  { label: '2–3', value: 'extra-2-3', price: 600, icon: 'FiFilePlus' },
                  { label: '4–6', value: 'extra-4-6', price: 1200, icon: 'FiFolder' },
                  { label: '7–10', value: 'extra-7-10', price: 2000, icon: 'FiFolderPlus' },
                ],
                input: {
                  key: 'custom-extra-pages',
                  label: 'Dokładna liczba nowych podstron',
                  unitPrice: 200,
                },
              },
            ],
          },
        },
        {
          title: 'Czy Twója strona posiada artykuły?',
          required: true,
          options: [
            { label: 'Tak', value: 'articles', price: 150, icon: 'FiFileText' },
            { label: 'Nie', value: 'no-articles', price: 0, icon: 'FiXCircle' },
          ],
          branches: {
            articles: [
              {
                title: 'Ile stron z artykułami posiada witryna?',
                required: true,
                options: [
                  { label: '1–3', value: 'articles-1-3', price: 60, icon: 'FiFile' },
                  { label: '4–10', value: 'articles-4-10', price: 250, icon: 'FiFilePlus' },
                  { label: '11–30', value: 'articles-11-30', price: 600, icon: 'FiFolder' },
                  { label: '31–60', value: 'articles-31-60', price: 1200, icon: 'FiFolderPlus' },
                  { label: '60+', value: 'articles-60plus', price: 1800, icon: 'FiArchive' },
                ],
                input: {
                  label: 'Dokładna liczba',
                  key: 'custom-article-amount',
                  unitPrice: 30,
                },
              },
            ],
          },
        },
        {
          title: 'Czy elementy mają być animowane?',
          type: 'multi',
          options: [
            { label: 'Tak', value: 'section-animations', multiplier: 1.2, icon: 'FiPlayCircle' },
            { label: 'Nie', value: 'no-animations', price: 0, icon: 'FiPauseCircle' },
          ],
        },
      ],
      shop: [
        {
          title: 'Czy posiadasz nowy projekt graficzny?',
          required: true,
          options: [
            { label: 'Tak', value: 'ready-design', price: 0, tooltip: 'Pracujemy na Twoim gotowym projekcie', icon: 'FiCheckCircle' },
            { label: 'Mam inspiracje', value: 'idea-redesign', multiplier: 1.2, tooltip: 'Zaprojektujemy nowy wygląd na podstawie inspiracji', icon: 'FiLightbulb' },
            { label: 'Potrzebuję nowego projektu', value: 'new-redesign', multiplier: 1.5, tooltip: 'Kompletny redesign dopasowany do marki', icon: 'FiEdit3' },
          ],
        },
        {
          title: 'Czy treść pozostaje taka sama?',
          required: true,
          options: [
            { label: 'Tak', value: 'same-copy', price: 0, icon: 'FiFileText' },
            { label: 'Nie', value: 'newcopy', price: 0, icon: 'FiEdit' },
          ],
          branches: {
            newcopy: [
              {
                title: 'Czy posiadasz nowy tekst dla swojej witryny?',
                required: true,
                options: [
                  { label: 'Tak', value: 'own-copy', price: 0, tooltip: 'Dostarczasz tekst — my go dodajemy', icon: 'FiFile' },
                  { label: 'Potrzebuję korekty', value: 'copy-help', multiplier: 1.1, tooltip: 'Poprawiamy tekst pod kątem treści i widoczności', icon: 'FiEdit' },
                  { label: 'Nie', value: 'copy-new', multiplier: 1.4, tooltip: 'Tworzymy tekst od zera na podstawie Twojej branży i oferty', icon: 'FiPenTool' },
                ],
              },
            ],
          },
        },
        {
          title: 'Ile stron zawiera Twoja witryna?',
          tooltip: 'Przykładowo: O nas, Galeria, Oferta',
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
        {
          title: 'Czy sklep ma zostać rozbudowana o nowe podstrony?',
          required: true,
          options: [
            { label: 'Nie', value: 'no-expand', price: 0, icon: 'FiMinusCircle' },
            { label: 'Tak', value: 'expand', price: 0, icon: 'FiPlusCircle' },
          ],
          branches: {
            expand: [
              {
                title: 'Ile nowych podstron chcesz dodać?',
                tooltip: 'Nowe podstrony jak np. Oferta, Galeria',
                required: true,
                type: 'single',
                options: [
                  { label: '1', value: 'extra-1', price: 200, icon: 'FiFile' },
                  { label: '2–3', value: 'extra-2-3', price: 600, icon: 'FiFilePlus' },
                  { label: '4–6', value: 'extra-4-6', price: 1200, icon: 'FiFolder' },
                  { label: '7–10', value: 'extra-7-10', price: 2000, icon: 'FiFolderPlus' },
                ],
                input: {
                  key: 'custom-extra-pages',
                  label: 'Dokładna liczba nowych podstron',
                  unitPrice: 200,
                },
              },
            ],
          },
        },
        {
          title: 'Ile produktów posiada sklep?',
          required: true,
          type: 'single',
          options: [
            { label: '1–10', value: 'few-products', price: 400, icon: 'FiBox' },
            { label: '11–30', value: 'mid-products', price: 600, icon: 'FiGrid' },
            { label: '31–60', value: 'more-products', price: 1200, icon: 'FiLayers' },
            { label: '60+', value: 'large-products', price: 1400, icon: 'FiPackage' },
          ],
          input: {
            key: 'custom-product-amount',
            label: 'Dokładna liczba produktów',
            unitPrice: 20,
          },
        },
        {
          title: 'Czy Twój sklep posiada artykuły?',
          required: true,
          options: [
            { label: 'Tak', value: 'articles', price: 150, icon: 'FiFileText' },
            { label: 'Nie', value: 'no-articles', price: 0, icon: 'FiXCircle' },
          ],
          branches: {
            articles: [
              {
                title: 'Ile stron z artykułami posiada sklep?',
                required: true,
                options: [
                  { label: '1–3', value: 'articles-1-3', price: 60, icon: 'FiFile' },
                  { label: '4–10', value: 'articles-4-10', price: 250, icon: 'FiFilePlus' },
                  { label: '11–30', value: 'articles-11-30', price: 600, icon: 'FiFolder' },
                  { label: '31–60', value: 'articles-31-60', price: 1200, icon: 'FiFolderPlus' },
                  { label: '60+', value: 'articles-60plus', price: 1800, icon: 'FiArchive' },
                ],
                input: {
                  label: 'Dokładna liczba',
                  key: 'custom-article-amount',
                  unitPrice: 30,
                },
              },
            ],
          },
        },
        {
          title: 'Czy elementy mają być animowane?',
          type: 'multi',
          options: [
            { label: 'Tak', value: 'section-animations', multiplier: 1.2, icon: 'FiPlayCircle' },
            { label: 'Nie', value: 'no-animations', price: 0, icon: 'FiPauseCircle' },
          ],
        },
      ],
      blog: [
        {
          title: 'Czy posiadasz nowy projekt graficzny?',
          required: true,
          options: [
            { label: 'Tak', value: 'ready-design', price: 0, tooltip: 'Pracujemy na Twoim gotowym projekcie', icon: 'FiCheckCircle' },
            { label: 'Mam inspiracje', value: 'idea-redesign', multiplier: 1.2, tooltip: 'Zaprojektujemy nowy wygląd na podstawie inspiracji', icon: 'FiLightbulb' },
            { label: 'Potrzebuję nowego projektu', value: 'new-redesign', multiplier: 1.5, tooltip: 'Kompletny redesign dopasowany do marki', icon: 'FiEdit3' },
          ],
        },
        {
          title: 'Czy treść pozostaje taka sama?',
          required: true,
          options: [
            { label: 'Tak', value: 'same-copy', price: 0, icon: 'FiFileText' },
            { label: 'Nie', value: 'newcopy', price: 0, icon: 'FiEdit' },
          ],
          branches: {
            newcopy: [
              {
                title: 'Czy posiadasz nowy tekst dla swojej witryny?',
                required: true,
                options: [
                  { label: 'Tak', value: 'own-copy', price: 0, tooltip: 'Dostarczasz tekst — my go dodajemy', icon: 'FiFile' },
                  { label: 'Potrzebuję korekty', value: 'copy-help', multiplier: 1.1, tooltip: 'Poprawiamy tekst pod kątem treści i widoczności', icon: 'FiEdit' },
                  { label: 'Nie', value: 'copy-new', multiplier: 1.4, tooltip: 'Tworzymy tekst od zera na podstawie Twojej branży i oferty', icon: 'FiPenTool' },
                ],
              },
            ],
          },
        },
        {
          title: 'Ile stron zawiera Twój blog?',
          tooltip: 'Przykładowo: O nas, Galeria, Oferta',
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
        {
          title: 'Czy blog ma zostać rozbudowany o nowe podstrony?',
          required: true,
          options: [
            { label: 'Nie', value: 'no-expand', price: 0, icon: 'FiMinusCircle' },
            { label: 'Tak', value: 'expand', price: 0, icon: 'FiPlusCircle' },
          ],
          branches: {
            expand: [
              {
                title: 'Ile nowych podstron chcesz dodać?',
                tooltip: 'Nowe podstrony jak np. Oferta, Galeria',
                required: true,
                type: 'single',
                options: [
                  { label: '1', value: 'extra-1', price: 200, icon: 'FiFile' },
                  { label: '2–3', value: 'extra-2-3', price: 600, icon: 'FiFilePlus' },
                  { label: '4–6', value: 'extra-4-6', price: 1200, icon: 'FiFolder' },
                  { label: '7–10', value: 'extra-7-10', price: 2000, icon: 'FiFolderPlus' },
                ],
                input: {
                  key: 'custom-extra-pages',
                  label: 'Dokładna liczba nowych podstron',
                  unitPrice: 200,
                },
              },
            ],
          },
        },
        {
          title: 'Ile stron z artykułami posiada blog?',
          required: true,
          options: [
            { label: '1–3', value: 'articles-1-3', price: 60, icon: 'FiFile' },
            { label: '4–10', value: 'articles-4-10', price: 250, icon: 'FiFilePlus' },
            { label: '11–30', value: 'articles-11-30', price: 600, icon: 'FiFolder' },
            { label: '31–60', value: 'articles-31-60', price: 1200, icon: 'FiFolderPlus' },
            { label: '60+', value: 'articles-60plus', price: 1800, icon: 'FiArchive' },
          ],
          input: {
            label: 'Dokładna liczba',
            key: 'custom-article-amount',
            unitPrice: 30,
          },
        },
        {
          title: 'Czy elementy mają być animowane?',
          type: 'multi',
          options: [
            { label: 'Tak', value: 'section-animations', multiplier: 1.2, icon: 'FiPlayCircle' },
            { label: 'Nie', value: 'no-animations', price: 0, icon: 'FiPauseCircle' },
          ],
        },
      ],
    },
  },
];
