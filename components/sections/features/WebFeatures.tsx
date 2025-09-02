import FeatureGrid, { FeatureItem } from '../FeatureGrid';

const items: FeatureItem[] = [
  {
    title: 'Indywidualny projekt',
  },
  {
    title: 'Redakcje treści',
  },
  {
    title: 'Wsparcie prawne: polityki i regulaminy',
  },
  {
    title: 'Deklaracja Dostępności (WCAG) z danymi naszej firmy',
  },
  {
    title: 'Podstawy SEO',
  },
  {
    title: 'Szkolenie PDF z obsługi strony',
  },
];

export default function WebFeatures() {
  return <FeatureGrid title="Co dostajesz" subtitle="Nasz standard pracy" items={items} />;
}
