import SectionPrices, { type SectionPricesPlan, type Note } from '@/components/ui/sections/SectionPrices';

const ShopPlans: SectionPricesPlan[] = [
  {
    name: 'Sklep mały',
    platform: 'WordPress / WooCommerce',
    price: '4 000 - 6 000 zł',
    description: 'Idealny dla startu sprzedaży online. Prosty, skuteczny i zgodny ze standardami SEO.',
    features: [
      'Do 50 produktów',
      'Integracje wybranych płatności i dostaw',
      'SEO techniczne + redakcja treści w cenie',
      'Spójna architektura informacji oraz wygląd',
      'Darmowe wsparcie prawne - Polityka prywatności, regulaminy',
      'Możliwość samodzielnej edycji strony',
      'Darmowe szkolenie PDF z obsługi',
    ],
    btnOne: 'Zamów mały sklep',
    btnOneLink: '/contact',
  },
  {
    name: 'Sklep średni',
    platform: 'WordPress / WooCommerce',
    price: '7 000 - 13 000 zł',
    description: 'Rozbudowany sklep z setkami produktów, promocjami i pełnym zapleczem marketingowym.',
    features: [
      'Do 300 produktów',
      'Zaawansowane filtry i wyszukiwarka produktów',
      'Zestawy, kody rabatowe, promocje',
      'Integracje wybranych płatności i dostaw',
      'SEO techniczne + redakcja treści w cenie',
      'Spójna architektura informacji oraz wygląd',
      'Darmowe wsparcie prawne - Polityka prywatności, regulaminy',
      'Możliwość samodzielnej edycji strony',
      'Darmowe szkolenie PDF z obsługi',
    ],
    btnOne: 'Zamów średni sklep',
    btnOneLink: '/contact',
  },
  {
    name: 'Sklep premium',
    platform: 'Webflow Ecommerce',
    price: '20 000 - 28 000 zł',
    description: 'Design premium z animacjami i CMS. Sklep szybki, elastyczny i gotowy na rozwój.',
    features: [
      'Do 1000 produktów',
      'Projekt graficzny premium - więcej możliwości dzięki technologii',
      'SEO techniczne - najwyższy poziom',
      'Koszyk, checkout i integracje płatności',
      'Sekcje kolekcji, bestsellery, rekomendacje',
      'Blog i treści edukacyjne wspierające SEO',
      'WCAG 2.1 AA + Deklaracja Dostępności',
      'Darmowe wsparcie prawne - Polityka prywatności, regulaminy',
      'Możliwość samodzielnej edycji strony',
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
