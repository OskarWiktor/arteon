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
        icon: 'FiGlobe',
      },
      {
        label: 'Projekty do druku',
        value: 'offline',
        price: 0,
        icon: 'FiPrinter',
      },
      {
        label: 'Projekty do obu użytków',
        value: 'all',
        price: 0,
        icon: 'FiLayers',
      },
    ],
    type: 'multi',
    branches: {
      online: [
        {
          title: 'Co chcesz zaprojektować?',
          type: 'multi',
          options: [
            { label: 'Logo', value: 'logo-online', price: 800, icon: 'FiAperture' },
            { label: 'Key visual marki (motywy graficzne)', value: 'key-visual', price: 1200, icon: 'FiGrid' },
            { label: 'Szablony do social media (posty, stories, rolki)', value: 'social-templates', price: 500, icon: 'FiInstagram' },
            { label: 'E-book', value: 'pdf-layout', price: 1200, icon: 'FiBookOpen' },
            { label: 'Baner reklamowy (Facebook, Instagram, Google)', value: 'ad-banner', price: 400, icon: 'FiMonitor' },
            { label: 'Projekt graficzny strony typu one-page (np. portfolio)', value: 'web-ui-onepage', price: 600, icon: 'FiLayout' },
            { label: 'Projekt graficzny strony z 3 podstronami (np. Home + O nas + Kontakt)', value: 'web-ui-3pages', price: 1400, icon: 'FiColumns' },
            { label: 'Projekt graficzny strony z 5+ podstronami (np. Home, Oferta, Projekty, Blog, Kontakt)', value: 'web-ui-5pages', price: 2000, icon: 'FiFileText' },
            { label: 'Zestaw ikon w stylu marki', value: 'custom-icons', price: 600, icon: 'FiStar' },
          ],
        },
      ],
      offline: [
        {
          title: 'Co chcesz zaprojektować?',
          type: 'multi',
          options: [
            { label: 'Logo', value: 'logo-offline', price: 800, icon: 'FiAperture' },
            { label: 'Wizytówka', value: 'business-card', price: 150, icon: 'FiCreditCard' },
            { label: 'Ulotka jednostronicowa (A5/A4)', value: 'flyer-single', price: 300, icon: 'FiFile' },
            { label: 'Ulotka składana (broszura)', value: 'flyer-folded', price: 500, icon: 'FiFilePlus' },
            { label: 'Plakat A3/A2', value: 'poster', price: 600, icon: 'FiImage' },
            { label: 'Voucher / Bon prezentowy', value: 'voucher', price: 100, icon: 'FiGift' },
            { label: 'Pocztówka', value: 'postcard', price: 100, icon: 'FiMail' },
            { label: 'Zaproszenie (np. event, ślub)', value: 'invitation', price: 150, icon: 'FiCalendar' },
            { label: 'Menu restauracyjne', value: 'menu', price: 600, icon: 'FiBook' },
            { label: 'Roll-up / ścianka reklamowa', value: 'rollup', price: 800, icon: 'FiSliders' },
            { label: 'Opakowanie', value: 'packaging', price: 1200, icon: 'FiBox' },
          ],
        },
      ],
      all: [
        {
          title: 'Co chcesz zaprojektować?',
          type: 'multi',
          options: [
            { label: 'Logo', value: 'logo-universal', price: 800, icon: 'FiAperture' },
            { label: 'Brandbook firmy (logo, kolory, fonty, użycie)', value: 'mini-brandbook', price: 1400, icon: 'FiBookOpen' },
          ],
        },
      ],
    },
  },
];
