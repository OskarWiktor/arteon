import SectionPrices, { type SectionPricesPlan, type Note } from '@/components/ui/sections/SectionPrices';

const ShopPlans: SectionPricesPlan[] = [
  {
    name: 'Sklep mały WooCommerce',
    platform: 'WordPress / WooCommerce',
    price: '5 000 - 7 000 zł',
    description: 'Idealny dla startu sprzedaży online. Prosty, skuteczny i zgodny ze standardami SEO.',
    features: [
      'Do 50 produktów',
      'Integracje płatności (Przelewy24, Stripe, PayU)',
      'Integracje dostaw (InPost, kurierzy, Poczta)',
      'Opisy produktów pod SEO',
      'Wygląd dopasowany do marki',
      'WCAG 2.1 AA + Deklaracja Dostępności',
      'Darmowe wsparcie prawne - Polityka prywatności, regulaminy',
      'Bezpłatna pomoc w wyborze hostingu i domeny',
      'Darmowe szkolenie PDF z obsługi',
    ],
    btnOne: 'Zamów sklep mały',
    btnOneLink: '/contact',
  },
  {
    name: 'Sklep średni WooCommerce',
    platform: 'WordPress / WooCommerce',
    price: '10 000 - 13 000 zł',
    description: 'Rozbudowany sklep z setkami produktów, promocjami i pełnym zapleczem marketingowym.',
    features: [
      'Do 300 produktów (import CSV w cenie)',
      'Zaawansowane filtry i wyszukiwarka produktów',
      'Zestawy, kody rabatowe, promocje, sprzedaż krzyżowa',
      'Integracje płatności i dostaw - bez dopłat',
      'SEO techniczne i treściowe - gratis',
      'Podstrony: o nas, blog, zwroty i reklamacje',
      'Banery i sekcje promocyjne na stronie głównej',
      'WCAG 2.1 AA + Deklaracja Dostępności',
      'Darmowe szkolenie PDF z obsługi',
    ],
    btnOne: 'Zamów sklep średni',
    btnOneLink: '/contact',
  },
  {
    name: 'Sklep premium Webflow Ecommerce',
    platform: 'Webflow',
    price: '20 000 - 28 000 zł',
    description: 'Design premium z animacjami i CMS. Sklep szybki, elastyczny i gotowy na rozwój.',
    features: [
      'Projekt premium z mikro-animacjami zwiększającymi sprzedaż',
      'CMS do łatwego zarządzania produktami i treściami',
      'SEO on-page i techniczne - najwyższy poziom',
      'Koszyk, checkout i integracje płatności',
      'Sekcje kolekcji, bestsellery, rekomendacje',
      'Blog i treści edukacyjne wspierające SEO',
      'WCAG 2.1 AA + Deklaracja Dostępności',
      'Polityka prywatności i regulaminy - wsparcie gratis',
      'Darmowe szkolenie PDF z obsługi',
    ],
    btnOne: 'Zamów sklep premium',
    btnOneLink: '/contact',
    lastPlan: true,
  },
];

const ShopPlansNote: Note = {
  text: (
    <p className="text-[#5e5e5e]">
      <strong className="text-[#080808]">Potrzebujesz czegoś więcej? </strong>
      Tworzymy dedykowane strony, aplikacje i sklepy w Next.js - rozwiązania szyte na miarę, które spełnią nawet najbardziej wymagające cele biznesowe.
    </p>
  ),
  ctaLabel: 'Porozmawiajmy o Twoim projekcie',
  ctaLink: '/contact',
};

export default function ShopPrices() {
  return <SectionPrices id="pricing-shops" subtitle="Cennik sklepów internetowych" title="Przykładowe realizacje" plans={ShopPlans} note={ShopPlansNote} />;
}
