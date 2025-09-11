import SectionPrices, { type SectionPricesPlan, type Note } from '@/components/ui/sections/SectionPrices';

const WebPlans: SectionPricesPlan[] = [
  {
    name: 'Strona wizytówka WordPress',
    price: '1 900 zł',
    description: 'Idealna na start - prosta i nowoczesna strona',
    features: [
      'Jedna strona (one-page) z nowoczesnym designem',
      'Treści przygotowane pod SEO - żeby szybciej znaleźć Cię w Google',
      'Wygląd dopasowany do Twojej marki i klientów',
      'Formularz kontaktowy i wybrane integracje',
      'Optymalizacja techniczna - szybkie ładowanie strony',
      'Bezpłatna pomoc w wyborze hostingu i domeny',
      'Instrukcja PDF jak samodzielnie edytować treść',
    ],
    btnOne: 'Zamów stronę wizytówkę',
    btnOneLink: '/contact',
  },
  {
    name: 'Strona firmowa WordPress',
    price: '3 900 - 4 900 zł',
    description: 'Rozbudowana strona dla firm, które chcą zaprezentować swoją ofertę',
    features: [
      '6-10 podstron (np. usługi, o nas, blog, kontakt)',
      'Strategia treści i analiza konkurencji - żeby wyróżnić Twoją firmę',
      'Spójny grafika i architektura informacji dopasowana do klienta',
      'Treści przygotowane pod SEO - lepsza widoczność w wyszukiwarce',
      'Formularze kontaktowe, wybrane funkcje i integracje',
      'Optymalizacja techniczna i analityka odwiedzin',
      'Bezpłatna pomoc w wyborze hostingu i domeny',
      'Instrukcja PDF z obsługi strony',
    ],
    btnOne: 'Zamów stronę firmową',
    btnOneLink: '/contact',
  },
  {
    name: 'Prestiżowa strona Webflow',
    price: '6 900 - 9 900 zł',
    description: 'Strona premium z animacjami, blogiem i perfekcyjnym UX.',
    features: [
      'Projekt premium z animacjami i efektami zwiększającymi sprzedaż',
      'Rozbudowany blog i możliwość samodzielnej edycji treści (CMS)',
      'SEO na najwyższym poziomie - strona gotowa do pozycjonowania',
      'Zgodność z WCAG 2.1 AA + Deklaracja Dostępności',
      'Optymalizacja techniczna - strona szybka i stabilna',
      'Formularze kontaktowe i wybrane integracje biznesowe',
      'Bezpłatna pomoc w wyborze hostingu i domeny',
      'Instrukcja PDF z obsługi strony',
    ],
    btnOne: 'Zamów stronę premium',
    btnOneLink: '/contact',
    lastPlan: true,
  },
];

const WebPlansNote: Note = {
  text: (
    <p className="text-[#5e5e5e]">
      <strong className="text-[#080808]">Potrzebujesz czegoś więcej? </strong>
      Tworzymy dedykowane aplikacje i sklepy internetowe w Next.js - rozwiązania szyte na miarę, które spełnią nawet najbardziej wymagające cele biznesowe.
    </p>
  ),
  ctaLabel: 'Porozmawiajmy o Twoim projekcie',
  ctaLink: '/contact',
};

export default function WebPrices() {
  return <SectionPrices id="pricing-web" subtitle="Cennik stron internetowych" title="Przykładowe realizacje" plans={WebPlans} note={WebPlansNote} />;
}
