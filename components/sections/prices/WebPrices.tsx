import SectionPrices, { type SectionPricesPlan, type Note } from '@/components/ui/sections/SectionPrices';

const WebPlans: SectionPricesPlan[] = [
  {
    name: 'Strona wizytówka WordPress',
    price: '1 900 - 2 300 zł',
    description: 'Szybki start. Nowoczesny one-page w standardzie SEO i WCAG 2.1 AA.',
    features: [
      'Jedna strona (one-page) z klarowną strukturą',
      'Copy i redakcja pod SEO - w cenie',
      'Wygląd dopasowany do marki i odbiorcy',
      'Formularz kontaktowy + wybrane integracje',
      'Optymalizacja techniczna - szybkie ładowanie',
      'Darmowe szkolenie PDF z obsługi',
    ],
    btnOne: 'Zamów stronę wizytówkę',
    btnOneLink: '/contact',
  },
  {
    name: 'Strona firmowa WordPress',
    price: '4 500 - 5 500 zł',
    description: 'Kompletna strona dla firmy: 6-10 podstron, SEO i analityka w cenie.',
    features: [
      '6-10 podstron (np. oferta, o nas, realizacje, blog, kontakt)',
      'Strategia treści + analiza konkurencji',
      'Spójna architektura informacji i design',
      'SEO on-page + copy w cenie - lepsza widoczność',
      'Formularze, mapy, wybrane integracje',
      'Optymalizacja prędkości i bezpieczeństwo',
      'Darmowe szkolenie PDF z obsługi',
    ],
    btnOne: 'Zamów stronę firmową',
    btnOneLink: '/contact',
  },
  {
    name: 'Strona firmowa Premium',
    platform: 'Webflow',
    price: '6 500 - 8 000 zł',
    description: 'Design premium, CMS i animacje. Perfekcyjny UX, SEO i dostępność.',
    features: [
      'Projekt premium z mikro-animacjami pod sprzedaż',
      'CMS - samodzielna edycja treści i blog',
      'SEO techniczne + on-page - gotowe do pozycjonowania',
      'Zgodność z WCAG 2.1 AA + Deklaracja Dostępności',
      'Wybrane integracje biznesowe (formularze, CRM, analityka)',
      'Optymalizacja performance - Core Web Vitals',
      'Darmowe szkolenie PDF z obsługi',
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
      Tworzymy dedykowane strony, aplikacje i sklepy w Next.js - rozwiązania szyte na miarę, które spełnią nawet najbardziej wymagające cele biznesowe.
    </p>
  ),
  ctaLabel: 'Porozmawiajmy o Twoim projekcie',
  ctaLink: '/contact',
};

export default function WebPrices() {
  return <SectionPrices id="pricing-web" subtitle="Cennik stron internetowych" title="Przykładowe realizacje" plans={WebPlans} note={WebPlansNote} />;
}
