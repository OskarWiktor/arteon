import SectionPrices, { type SectionPricesPlan, type Note } from '@/components/ui/sections/SectionPrices';

const BlogPlans: SectionPricesPlan[] = [
  {
    name: 'Blog firmowy',
    platform: 'WordPress',
    price: '2 900 - 4 000 zł',
    description: 'Stabilny blog dla firmy. SEO, kategorie i prosta edycja w panelu.',
    features: [
      'Do 30 artykułów',
      'SEO techniczne w cenie',
      'Newsletter i wskazane integracje',
      'Analityka GA4 i Search Console',
      'Wydajność i bezpieczeństwo - optymalizacja',
      'Darmowe wsparcie prawne - Polityka prywatności, regulaminy',
      'Możliwość samodzielnej edycji i wprowadzania treści',
      'Darmowe szkolenie PDF z obsługi',
    ],
    btnOne: 'Zamów blog WordPress',
    btnOneLink: '/contact',
  },
  {
    name: 'Blog premium',
    platform: 'Webflow CMS',
    price: '6 500 - 9 000 zł',
    description: 'Design premium, płynny UX i CMS. Blog gotowy do skalowania.',
    features: [
      'Struktura kolekcji: artykuły, kategorie, tagi',
      'SEO techniczne w cenie',
      'Mikro-animacje i sekcje „polecane” / „najnowsze”',
      'Newsletter i wskazane integracje',
      'Core Web Vitals - szybkość i stabilność',
      'WCAG 2.1 AA + Deklaracja Dostępności',
      'Darmowe wsparcie prawne - Polityka prywatności, regulaminy',
      'Możliwość samodzielnej edycji i wprowadzania treści',
      'Darmowe szkolenie PDF z obsługi',
    ],
    btnOne: 'Zamów blog Webflow',
    btnOneLink: '/contact',
  },
  {
    name: 'Blog z systemem treści',
    platform: 'Next.js (headless CMS)',
    price: '13 000 - 15 000 zł',
    description: 'Customowy system treści: AI, newsletter, automatyzacje i pełna kontrola.',
    features: [
      'Headless CMS (np. Sanity/Contentful) - role i workflow',
      'Moduły: kategorie, tagi, serie, autorzy, powiązane treści',
      'Wyszukiwarka, filtry, paginacja - wydajność na produkcji',
      'Integracje: newsletter, CRM, webhooki publikacji',
      'SEO zaawansowane techniczne w cenie',
      'WCAG 2.1 AA + Deklaracja Dostępności',
      'Darmowe wsparcie prawne - Polityka prywatności, regulaminy',
      'Możliwość samodzielnej edycji i wprowadzania treści',
      'Darmowe szkolenie PDF z obsługi',
    ],
    btnOne: 'Zamów blog Next.js',
    btnOneLink: '/contact',
    lastPlan: true,
  },
];

const BlogPlansNote: Note = {
  text: (
    <p className="text-[#5e5e5e]">
      <strong className="text-[#080808]">Potrzebujesz czegoś więcej? </strong>
      Tworzymy dedykowane strony, aplikacje i sklepy w Next.js - rozwiązania szyte na miarę, które spełnią nawet najbardziej wymagające cele biznesowe.
    </p>
  ),
  ctaLabel: 'Porozmawiajmy o Twoim projekcie',
  ctaLink: '/contact',
};

export default function BlogPrices() {
  return <SectionPrices id="pricing-blogs" subtitle="Cennik blogów internetowych" title="Przykładowe realizacje" plans={BlogPlans} note={BlogPlansNote} />;
}
