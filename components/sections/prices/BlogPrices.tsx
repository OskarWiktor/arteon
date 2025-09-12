import SectionPrices, { type SectionPricesPlan, type Note } from '@/components/ui/sections/SectionPrices';

const BlogPlans: SectionPricesPlan[] = [
  {
    name: 'Blog firmowy WordPress',
    platform: 'WordPress',
    price: '4 900 - 6 000 zł',
    description: 'Stabilny blog dla firmy. SEO, kategorie i prosta edycja w panelu.',
    features: [
      'Do 30 artykułów startowych i 5 kategorii',
      'CMS - łatwa edycja treści, kategorie, tagi',
      'SEO on-page + techniczne (sitemap, schema, meta)',
      'Integracja newslettera i podstawowych formularzy',
      'Analityka GA4 i Search Console',
      'WCAG 2.1 AA + Deklaracja (na ile pozwala WP)',
      'Wydajność i bezpieczeństwo - optymalizacja',
      'Instrukcja PDF + wsparcie powdrożeniowe 1 m-c',
    ],
    btnOne: 'Zamów blog WordPress',
    btnOneLink: '/contact',
  },
  {
    name: 'Blog premium Webflow CMS',
    platform: 'Webflow CMS',
    price: '7 500 - 9 000 zł',
    description: 'Design premium, płynny UX i CMS. Blog gotowy do skalowania.',
    features: [
      'Struktura kolekcji: artykuły, kategorie, tagi',
      'Edytor treści dla zespołu - CMS',
      'SEO techniczne + on-page w standardzie',
      'Mikro-animacje i sekcje „polecane” / „najnowsze”',
      'Integracja newslettera i formularzy',
      'Core Web Vitals - szybkość i stabilność',
      'WCAG 2.1 AA + Deklaracja Dostępności',
      'Instrukcja PDF + wsparcie 1 m-c',
    ],
    btnOne: 'Zamów blog Webflow',
    btnOneLink: '/contact',
  },
  {
    name: 'Blog z systemem treści Next.js',
    platform: 'Next.js (headless CMS)',
    price: '13 000 - 15 000 zł',
    description: 'Customowy system treści: AI, newsletter, automatyzacje i pełna kontrola.',
    features: [
      'Headless CMS (np. Sanity/Contentful) - role i workflow',
      'Moduły: kategorie, tagi, serie, autorzy, powiązane treści',
      'Wyszukiwarka, filtry, paginacja - wydajność na produkcji',
      'Integracje: newsletter, CRM, webhooki publikacji',
      'SEO zaawansowane: schema, Open Graph, sitemap, RSS',
      'WCAG 2.1 AA, RWD i wysoka dostępność',
      'Core Web Vitals - LCP/CLS/FID dopracowane',
      'Instrukcja PDF + 1h szkolenie live + wsparcie 1 m-c',
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
