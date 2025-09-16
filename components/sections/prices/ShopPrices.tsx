import SectionPrices, { type SectionPricesPlan, type Note } from '@/components/ui/sections/SectionPrices';

const ShopPlans: SectionPricesPlan[] = [
  {
    name: 'Sklep mały',
    platform: 'WordPress / WooCommerce',
    price: '4 000 - 6 000 zł',
    description: 'Bezpieczny start sprzedaży online. Prosty w obsłudze, szybki i przygotowany pod SEO - gotowy, by zacząć sprzedawać od pierwszego dnia.',
    features: [
      'Do 50 produktów',
      'Płatności online i dostawy skonfigurowane pod Twój rynek',
      'SEO techniczne i redakcja treści',
      'Przejrzyste kategorie i wygodne wyszukiwanie',
      'Spójna architektura informacji oraz wygląd',
      'Darmowe wsparcie prawne - polityka prywatności, regulaminy',
      'Panel do samodzielnej edycji produktów i treści',
      'Darmowe szkolenie PDF z obsługi sklepu',
    ],
    btnOne: 'Zamów mały sklep',
    btnOneLink: '/contact',
  },
  {
    name: 'Sklep średni',
    platform: 'WordPress / WooCommerce',
    price: '10 000 - 13 000 zł',
    description: 'Sklep dla rosnącej marki. Setki produktów, promocje, kody rabatowe i zaplecze marketingowe, które napędza wyniki.',
    features: [
      'Do 300 produktów',
      'Zaawansowane filtry i wyszukiwarka produktów',
      'Zestawy, kupony, promocje i listy życzeń',
      'Integracje płatności i dostaw dopasowane do branży',
      'SEO techniczne i redakcja treści',
      'Spójna architektura informacji oraz wygląd',
      'Darmowe wsparcie prawne - polityka prywatności, regulaminy',
      'Panel do samodzielnej edycji produktów i treści',
      'Darmowe szkolenie PDF z obsługi sklepu',
    ],
    btnOne: 'Zamów średni sklep',
    btnOneLink: '/contact',
  },
  {
    name: 'Sklep premium',
    platform: 'Webflow Ecommerce',
    price: '20 000 - 28 000 zł',
    description: 'Wygląd premium i płynne doświadczenie zakupowe. Szybki, elastyczny, gotowy na rozwój międzynarodowy.',
    features: [
      'Do 1000 produktów',
      'Projekt graficzny premium - więcej możliwości dzięki technologii',
      'Najwyższy poziom SEO technicznego',
      'Koszyk, checkout i integracje płatności skonfigurowane pod konwersję',
      'Sekcje kolekcji, bestsellery i rekomendacje produktów',
      'Blog i treści edukacyjne wspierające ruch organiczny',
      'WCAG 2.1 AA + Deklaracja Dostępności',
      'Darmowe wsparcie prawne - polityka prywatności, regulaminy',
      'Panel do samodzielnej edycji produktów i treści',
      'Darmowe szkolenie PDF z obsługi sklepu',
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
      Tworzymy zaawansowane sklepy i aplikacje w Next.js - rozwiązania szyte na miarę,
      gotowe na zaawansowane integracje, funkcje oraz duży ruch.
    </p>
  ),
  ctaLabel: 'Porozmawiajmy o Twoim projekcie',
  ctaLink: '/contact',
};

export default function ShopPrices() {
  return <SectionPrices id="pricing-shops" subtitle="Cennik sklepów internetowych" title="Przykładowe realizacje" plans={ShopPlans} note={ShopPlansNote} />;
}
