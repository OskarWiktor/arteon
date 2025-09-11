import SectionPrices, { type SectionPricesPlan, type Note } from '@/components/ui/sections/SectionPrices';

const ShopPlans: SectionPricesPlan[] = [
  {
    name: 'Sklep internetowy WooCommerce - Start',
    platform: 'WordPress / WooCommerce',
    price: '3 900 - 5 900 zł',
    description: 'Prosty i skuteczny sklep. Idealny na początek sprzedaży online.',
    features: [
      'Do 50 produktów',
      'Koszyk i szybki zakup (checkout)',
      'Płatności i dostawy dopasowane do potrzeb',
      'Integracja z paczkomatami i kurierami',
      'Opisy produktów przygotowane pod SEO',
      'Responsywny wygląd dopasowany do Twojej marki',
      'Zgodność z WCAG 2.1 AA (dostępność)',
      'Polityka prywatności i regulamin (wsparcie w przygotowaniu)',
      'Instrukcja PDF jak dodawać produkty i zmieniać treści',
      'Bezpłatna pomoc w wyborze hostingu i domeny',
    ],
    btnOne: 'Zamów sklep Start',
    btnOneLink: '/contact',
  },
  {
    name: 'Sklep firmowy WooCommerce',
    platform: 'WordPress / WooCommerce',
    price: '6 900 - 9 900 zł',
    description: 'Rozbudowany sklep dla firm. Więcej produktów i automatyzacji.',
    features: [
      'Setki produktów, atrybuty i warianty (rozmiary, kolory)',
      'Zaawansowane filtry i wyszukiwarka produktów',
      'Płatności i dostawy dopasowane do potrzeb',
      'Zestawy, promocje, kody rabatowe, sprzedaż krzyżowa',
      'Opisy produktów przygotowane pod SEO',
      'Strony: o nas, blog, kontakt, zwroty i reklamacje',
      'Banery i sekcje promocyjne na stronie głównej',
      'Zgodność z WCAG 2.1 AA + Deklaracja Dostępności',
      'Wsparcie w przygotowaniu polityk i regulaminów',
      'Instrukcja PDF dla sklepu + krótkie wideo z obsługi',
      'Bezpłatna pomoc z hostingiem i domeną',
    ],
    btnOne: 'Zamów sklep firmowy',
    btnOneLink: '/contact',
  },
  {
    name: 'Sklep premium Webflow Ecommerce',
    platform: 'Webflow',
    price: '9 900 - 14 900 zł',
    description: 'Design klasy premium. Animacje, płynny UX i treści zarządzane w CMS.',
    features: [
      'Projekt premium z animacjami poprawiającymi sprzedaż',
      'CMS do prostego zarządzania produktami i treściami',
      'Szybkość działania i SEO na najwyższym poziomie',
      'Koszyk, checkout i integracje płatności',
      'Sekcje kolekcji, bestsellery, rekomendacje',
      'Blog i treści edukacyjne wspierające SEO',
      'Zgodność z WCAG 2.1 AA + Deklaracja Dostępności',
      'Wsparcie w polityce prywatności i regulaminach',
      'Instrukcja PDF + krótkie wideo jak obsługiwać sklep',
      'Bezpłatna pomoc z hostingiem i domeną',
    ],
    btnOne: 'Zamów sklep premium',
    btnOneLink: '/contact',
    lastPlan: true,
  },
];

const ShopPlansNote: Note = {
  text: (
    <p className="text-[#5e5e5e]">
      <strong className="text-[#080808]">Masz niestandardowe potrzeby?</strong> Tworzymy dedykowane e-commerce w Next.js (np. konfiguratory, kalkulatory, subskrypcje, integracje magazynowe) -
      rozwiązania szyte na miarę Twojego modelu sprzedaży.
    </p>
  ),
  ctaLabel: 'Porozmawiajmy o e-commerce',
  ctaLink: '/contact',
};

export default function ShopPrices() {
  return <SectionPrices id="pricing-shops" subtitle="Cennik sklepów internetowych" title="Przykładowe realizacje" plans={ShopPlans} note={ShopPlansNote} />;
}
