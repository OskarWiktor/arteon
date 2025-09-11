import FeatureGrid, { FeatureItem } from '../FeatureGrid';
import { RiPencilRuler2Line, RiArticleLine, RiBrushLine, RiShieldCheckLine, RiDeviceLine, RiDatabase2Line } from 'react-icons/ri';

import { IoAccessibility } from 'react-icons/io5';
import { GoLaw } from 'react-icons/go';

const items: FeatureItem[] = [
  {
    title: 'Indywidualny projekt graficzny',
    icon: <RiPencilRuler2Line className="h-6 w-6 text-indigo-800" />,
  },
  {
    title: 'Redakcja treści dla lepszej konwersji i SEO',
    icon: <RiArticleLine className="h-6 w-6 text-indigo-800" />,
  },
  {
    title: 'Deklaracja Dostępności (WCAG 2.1 AA)',
    icon: <IoAccessibility className="h-5 w-5 text-indigo-800" />,
  },
  {
    title: 'Wsparcie prawne: polityki i regulaminy',
    icon: <GoLaw className="h-6 w-6 text-indigo-800" />,
  },
  {
    title: 'Wsparcie graficzne i obróbka zdjęć',
    icon: <RiBrushLine className="h-6 w-6 text-indigo-800" />,
  },
  {
    title: 'Bezpieczeństwo i certyfikaty SSL',
    icon: <RiShieldCheckLine className="h-6 w-6 text-indigo-800" />,
  },
  {
    title: 'Pełna responsywność na urządzeniach mobilnych',
    icon: <RiDeviceLine className="h-6 w-6 text-indigo-800" />,
  },
  {
    title: 'Łatwe zarządzanie treścią (CMS)',
    icon: <RiDatabase2Line className="h-6 w-6 text-indigo-800" />,
  },
];

export default function WebFeatures() {
  return <FeatureGrid title="Co dostajesz" subtitle="Nasz standard pracy" items={items} />;
}
