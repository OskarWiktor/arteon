import FeatureGrid, { FeatureItem } from '../FeatureGrid';
import { RiPencilRuler2Line, RiArticleLine, RiShieldCheckLine, RiDeviceLine, RiDatabase2Line, RiBookOpenLine } from 'react-icons/ri';

import { IoAccessibility } from 'react-icons/io5';
import { GoLaw } from 'react-icons/go';

const items: FeatureItem[] = [
  {
    title: 'Indywidualny projekt graficzny',
    icon: <RiPencilRuler2Line className="h-6 w-6 text-slate-500" />,
  },
  {
    title: 'Redakcja treści dla lepszej konwersji i SEO',
    icon: <RiArticleLine className="h-6 w-6 text-slate-500" />,
  },
  {
    title: 'Deklaracja Dostępności (WCAG 2.1 AA)',
    icon: <IoAccessibility className="h-5 w-5 text-slate-500" />,
  },
  {
    title: 'Wsparcie prawne: polityki i regulaminy',
    icon: <GoLaw className="h-6 w-6 text-slate-500" />,
  },
  {
    title: 'Bezpieczeństwo i certyfikaty SSL',
    icon: <RiShieldCheckLine className="h-6 w-6 text-slate-500" />,
  },
  {
    title: 'Pełna Rezponsywność na różnych urządzeniach',
    icon: <RiDeviceLine className="h-6 w-6 text-slate-500" />,
  },
  {
    title: 'Łatwe zarządzanie treścią (CMS)',
    icon: <RiDatabase2Line className="h-6 w-6 text-slate-500" />,
  },
  {
    title: 'Darmowe, dedykowane szkolenie PDF z obsługi',
    icon: <RiBookOpenLine className="h-6 w-6 text-slate-500" />,
  },
];

export default function WebFeatures() {
  return <FeatureGrid title="Co dostajesz" subtitle="Nasz standard pracy" items={items} />;
}
