import SectionPrices, { type SectionPricesPlan, type Note } from '@/components/ui/sections/SectionPrices';

const WebPlans: SectionPricesPlan[] = [
  {
    name: 'Landing One-Page',
    platform: 'WordPress',
    price: '4 900–7 900 zł',
    description: 'Start, szybkie wdrożenie, pełen standard jakości.',
    features: [
      '1 strona z sekcjami (one-page).',
      'Treści i microcopy w cenie.',
      'SEO on-page i techniczne.',
      'WCAG 2.1 AA + Deklaracja Dostępności.',
      'Formularz, analityka, podstawowe integracje.',
      'CMS + szkolenie PDF.',
    ],
    btnOne: 'Zamów landing',
    btnOneLink: '/kontakt',
    btnTwo: 'Dobierz stack',
    btnTwoLink: '#tech',
  },
  {
    name: 'Strona firmowa 5–10',
    platform: 'WordPress',
    price: '9 900–15 900 zł',
    description: 'Rozwój, blog, portfolio, więcej sekcji i integracji.',
    features: [
      '5–10 podstron + blog/aktualności.',
      'Architektura informacji i treść.',
      'Zaawansowane SEO i schemy danych.',
      'WCAG 2.1 AA + Deklaracja Dostępności.',
      'Szybkość, cache, bezpieczeństwo.',
      'CMS + szkolenie PDF i wideo.',
    ],
    btnOne: 'Zamów stronę',
    btnOneLink: '/kontakt',
    btnTwo: 'Co w cenie',
    btnTwoLink: '#value',
  },
  {
    name: 'Prestiżowa strona',
    platform: 'Webflow',
    price: '17 900–29 900 zł',
    description: 'Luksus UX, animacje, CMS i perfekcyjny detal.',
    features: [
      'Projekt premium, mikro-interakcje i animacje.',
      'CMS kolekcje: blog, portfolio, case studies.',
      'SEO i wydajność klasy enterprise.',
      'WCAG 2.1 AA + Deklaracja Dostępności.',
      'Komponenty i style jak w design systemie.',
      'Szkolenie PDF + wideo, dokumentacja edycji.',
    ],
    btnOne: 'Zamów prestiż',
    btnOneLink: '/kontakt',
    btnTwo: 'Zobacz technologię',
    btnTwoLink: '#tech',
    lastPlan: true,
    badgeLabel: 'Polecane',
  },
];

const WebPlansNote: Note = {
  text: (
    <p className="text-[#5e5e5e]">
      <strong className="text-[#080808]">Potrzebujesz funkcji niestandardowych?</strong> Liga Next.js obsłuży aplikacje, panele, integracje i logikę biznesową. <em>Wycena indywidualna</em> po
      warsztacie celów.
    </p>
  ),
  ctaLabel: 'Porozmawiaj o Next.js',
  ctaLink: '/kontakt',
};

export default function WebPrices() {
  return <SectionPrices id="pricing-blog" subtitle="Cennik" title="Blog i content" plans={WebPlans} note={WebPlansNote} />;
}
