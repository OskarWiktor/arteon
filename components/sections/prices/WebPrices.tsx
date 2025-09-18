import SectionPrices, { type SectionPricesPlan, type Note } from '@/components/ui/sections/SectionPrices';

const WebPlans: SectionPricesPlan[] = [
  {
    name: 'Strona wizytówka WordPress',
    price: '1 600 - 2 000 zł',
    description: 'Szybki start. Jednostronicowa witryna z nowoczesnym wyglądem',
    features: [
      'Jedna strona z klarowną strukturą i sekcjami dopasowanymi do biznesu',
      'Treści opracowane pod SEO - w cenie',
      'Wygląd dostosowany do charakteru marki i grupy odbiorczej',
      'Formularz kontaktowy + wybrane integracje / funkcje',
      'Optymalizacja prędkości ładowania i bezpieczeństwa',
      'Darmowe wsparcie prawne - polityka prywatności, regulaminy',
      'Panel umożliwiający samodzielną edycję treści',
      'Wizytówka w Google na życzenie',
      'Darmowe szkolenie PDF z obsługi strony',
    ],
    btnOne: 'Zamów stronę wizytówkę',
    btnOneLink: '#kontakt',
  },
  {
    name: 'Strona firmowa WordPress',
    price: '3 500 - 5 500 zł',
    description: 'Kompletna strona dla firmy. Zawiera od 6 do 10 podstron. Idealna dla małych i średnich biznesów.',
    features: [
      '6-10 podstron dopasowanych do oferty i usług',
      'Strategia treści oraz analiza konkurencji w cenie',
      'Spójna architektura informacji oraz wygląd',
      'SEO techniczne i redakcja treści w cenie',
      'Formularze, mapy, wybrane integracje / funkcje',
      'Optymalizacja prędkości ładowania i bezpieczeństwa',
      'Darmowe wsparcie prawne - polityka prywatności, regulaminy',
      'Panel umożliwiający samodzielną edycję treści',
      'Wizytówka w Google na życzenie',
      'Darmowe szkolenie PDF z obsługi strony',
    ],
    btnOne: 'Zamów stronę firmową',
    btnOneLink: '#kontakt',
  },
  {
    name: 'Strona firmowa Premium',
    platform: 'Webflow',
    price: '5 500 - 8 000 zł',
    description: 'Rozwiązanie premium dla marek, które stawiają na wizerunek. Zgodność z międzynarodowymi przepisami o dostępności',
    features: [
      '10-14 podstron',
      'Projekt graficzny strony premium - więcej możliwości dzięki technologii',
      'SEO techniczne i redakcja treści w cenie',
      'Zgodność z WCAG 2.1 AA + Deklaracja Dostępności',
      'Wybrane integracje oraz dedykowane funkcjonalności',
      'Zaawansowana optymalizacja szybkości i bezpieczeństwa',
      'Darmowe wsparcie prawne - polityka prywatności, regulaminy',
      'Możliwość samodzielnej edycji strony',
      'Wizytówka w Google na życzenie',
      'Darmowe szkolenie PDF z obsługi strony',
    ],
    btnOne: 'Zamów stronę premium',
    btnOneLink: '#kontakt',
    lastPlan: true,
  },
];

const WebPlansNote: Note = {
  text: (
    <p className="text-[#5e5e5e]">
      <strong className="text-[#080808]">Potrzebujesz czegoś więcej? </strong>
      Tworzymy zaawansowane strony, aplikacje i sklepy w Next.js - rozwiązania szyte na miarę, które spełnią najbardziej wymagające cele biznesowe.
    </p>
  ),
  ctaLabel: 'Porozmawiajmy o Twoim projekcie',
  ctaLink: '#kontakt',
};

export default function WebPrices() {
  return <SectionPrices id="pricing-web" subtitle="Cennik stron internetowych" title="Przykładowe realizacje" plans={WebPlans} note={WebPlansNote} />;
}
