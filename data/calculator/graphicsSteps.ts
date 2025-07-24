import type { Step } from '@/types/calculator';

export const graphicsSteps: Step[] = [
  {
    title: 'Jaki typ projektu Cię interesuje?',
    required: true,
    options: [
      {
        label: 'Projekty dla internetu',
        value: 'online',
        price: 0,
      },
      {
        label: 'Projekty do druku',
        value: 'offline',
        price: 0,
      },
      {
        label: 'Projekty do obu użytków',
        value: 'all',
        price: 0,
      },
    ],
    type: 'multi',
    branches: {
      online: [
        {
          title: 'Co chcesz zaprojektować?',
          type: 'multi',
          options: [
            {
              label: 'Logo',
              value: 'logo-online',
              price: 800,
            },
            {
              label: 'Key visual marki (motywy graficzne)',
              value: 'key-visual',
              price: 1200,
            },
            {
              label: 'Szablony do social media (posty, stories, rolki)',
              value: 'social-templates',
              price: 500,
            },
            {
              label: 'E-book',
              value: 'pdf-layout',
              price: 1200,
            },
            {
              label: 'Baner reklamowy (Facebook, Instagram, Google)',
              value: 'ad-banner',
              price: 400,
            },
            {
              label: 'Projekt graficzny strony typu one-page ( np. portfolio)',
              value: 'web-ui-onepage',
              price: 600,
            },
            {
              label: 'Projekt graficzny strony z 3 podstronami (np. Home + O nas + Kontakt)',
              value: 'web-ui-3pages',
              price: 1400,
            },
            {
              label: 'Projekt graficzny strony z 5+ podstronami (np. Home, Oferta, Projekty, Blog, Kontakt)',
              value: 'web-ui-5pages',
              price: 2000,
            },

            {
              label: 'Zestaw ikon w stylu marki',
              value: 'custom-icons',
              price: 600,
            },
          ],
        },
      ],
      offline: [
        {
          title: 'Co chcesz zaprojektować?',
          type: 'multi',
          options: [
            {
              label: 'Logo',
              value: 'logo-offline',
              price: 800,
            },
            {
              label: 'Wizytówka',
              value: 'business-card',
              price: 150,
            },
            {
              label: 'Ulotka jednostronicowa (A5/A4)',
              value: 'flyer-single',
              price: 300,
            },
            {
              label: 'Ulotka składana (broszura)',
              value: 'flyer-folded',
              price: 500,
            },
            {
              label: 'Plakat A3/A2',
              value: 'poster',
              price: 600,
            },
            {
              label: 'Voucher / Bon prezentowy',
              value: 'voucher',
              price: 100,
            },
            {
              label: 'Pocztówka',
              value: 'postcard',
              price: 100,
            },
            {
              label: 'Zaproszenie (np. event, ślub)',
              value: 'invitation',
              price: 150,
            },
            {
              label: 'Menu restauracyjne',
              value: 'menu',
              price: 600,
            },
            {
              label: 'Roll-up / ścianka reklamowa',
              value: 'rollup',
              price: 800,
            },
            {
              label: 'Opakowanie',
              value: 'packaging',
              price: 1200,
            },
          ],
        },
      ],
      all: [
        {
          title: 'Co chcesz zaprojektować?',
          type: 'multi',
          options: [
            {
              label: 'Logo',
              value: 'logo-universal',
              price: 800,
            },
            {
              label: 'Brandbook firmy (logo, kolory, fonty, użycie)',
              value: 'mini-brandbook',
              price: 1400,
            },
          ],
        },
      ],
    },
  },
];
