import SectionPrices, { type SectionPricesPlan, type Note } from '@/components/ui/sections/SectionPrices';

const BlogPlans: SectionPricesPlan[] = [
  {
    name: 'Blog mały',
    platform: 'WordPress',
    price: '2 900 - 3 500 zł',
    description: 'Prosty blog firmowy na start. Stabilny, łatwy w obsłudze i przygotowany pod SEO, abyś mógł zacząć publikować i zdobywać klientów od pierwszego dnia.',
    features: [
      'Do 30 artykułów - idealne na początek',
      'SEO techniczne - w cenie',
      'Wybrane integracje (newsletter, formularz)',
      'Analityka GA4 i Search Console do monitorowania wyników',
      'Optymalizacja prędkości i zabezpieczenia',
      'Wsparcie prawne - polityka prywatności, regulaminy',
      'Prosty panel do samodzielnej edycji treści',
      'Darmowe szkolenie PDF z obsługi bloga',
    ],
    btnOne: 'Zamów mały blog',
    btnOneLink: '#kontakt',
  },
  {
    name: 'Blog średni',
    platform: 'WordPress / Webflow',
    price: '4 900 - 6 000 zł',
    description: 'Rozbudowany blog dla firm, które chcą regularnie publikować i budować wizerunek eksperta. Więcej treści, integracje marketingowe i większe możliwości rozwoju.',
    features: [
      'Do 100 artykułów',
      'SEO techniczne i redakcja treści - w pakiecie',
      'Newsletter i wybrane integracje marketingowe (np. mailing)',
      'Zaawansowana analityka i monitoring pozycji',
      'Przejrzysta struktura treści i nawigacji',
      'Wsparcie prawne - polityka prywatności, regulaminy',
      'Panel do edycji treści - WordPress lub Webflow',
      'Darmowe szkolenie PDF z obsługi bloga',
    ],
    btnOne: 'Zamów blog średni',
    btnOneLink: '#kontakt',
  },
  {
    name: 'Blog premium',
    platform: 'Webflow CMS',
    price: '7 500 - 9 000 zł',
    description: 'Blog premium w technologii Webflow. Design klasy premium, płynne animacje i sekcje polecanych treści. Idealny dla marek, które stawiają na estetykę i pełen komfort edycji.',
    features: [
      'Do 300 artykułów, rozbudowane kategorie',
      'SEO techniczne - w cenie',
      'Newsletter i wybrane integracje marketingowe (np. mailing)',
      'Zaawansowana analityka i monitoring pozycji',
      'Przejrzysta struktura treści i nawigacji',
      'Zaawansowana optymalizacja szybkości i bezpieczeństwa',
      'WCAG 2.1 AA + Deklaracja Dostępności',
      'Wsparcie prawne - polityka prywatności, regulaminy',
      'Intuicyjny CMS do samodzielnego zarządzania treścią',
      'Darmowe szkolenie PDF dla Ciebie i zespołu',
    ],
    btnOne: 'Zamów blog premium',
    btnOneLink: '#kontakt',
    lastPlan: true,
  },
];

const BlogPlansNote: Note = {
  text: (
    <p className="text-[#5e5e5e]">
      <strong className="text-[#080808]">Masz większe plany? </strong>
      Tworzymy zaawansowane strony, aplikacje i sklepy w Next.js - rozwiązania szyte na miarę, które spełnią najbardziej wymagające cele biznesowe.
    </p>
  ),
  ctaLabel: 'Porozmawiajmy o Twoim blogu',
  ctaLink: '#kontakt',
};

export default function BlogPrices() {
  return <SectionPrices id="pricing-blogs" subtitle="Cennik blogów internetowych" title="Przykładowe realizacje" plans={BlogPlans} note={BlogPlansNote} />;
}
