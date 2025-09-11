import FeatureGrid, { FeatureItem } from '../FeatureGrid';
import { RiPencilRuler2Line, RiArticleLine, RiBrushLine, RiDeviceLine, RiDatabase2Line, RiBarChart2Line, RiShareForwardLine, RiBookOpenLine } from 'react-icons/ri';

import { IoAccessibility } from 'react-icons/io5';
import { GoLaw } from 'react-icons/go';

const items: FeatureItem[] = [
  {
    title: 'Indywidualny projekt graficzny bloga',
    icon: <RiPencilRuler2Line className="h-6 w-6 text-amber-500" />,
  },
  {
    title: 'Redakcja treści pod SEO i konwersję',
    icon: <RiArticleLine className="h-6 w-6 text-amber-500" />,
  },
  {
    title: 'Deklaracja Dostępności (WCAG 2.1 AA)',
    icon: <IoAccessibility className="h-5 w-5 text-amber-500" />,
  },
  {
    title: 'Wsparcie prawne: polityka prywatności i regulaminy',
    icon: <GoLaw className="h-6 w-6 text-amber-500" />,
  },
  {
    title: 'Oprawa graficzna i zdjęcia do wpisów',
    icon: <RiBrushLine className="h-6 w-6 text-amber-500" />,
  },
  {
    title: 'Pełna responsywność i komfort czytania',
    icon: <RiDeviceLine className="h-6 w-6 text-amber-500" />,
  },
  {
    title: 'Łatwe zarządzanie wpisami i kategoriami (CMS)',
    icon: <RiDatabase2Line className="h-6 w-6 text-amber-500" />,
  },
  {
    title: 'Optymalizacja SEO dla artykułów i struktury bloga',
    icon: <RiBarChart2Line className="h-6 w-6 text-amber-500" />,
  },
  {
    title: 'Integracja z social mediami i newsletterem',
    icon: <RiShareForwardLine className="h-6 w-6 text-amber-500" />,
  },
  {
    title: 'Budowanie marki eksperta przez treści edukacyjne',
    icon: <RiBookOpenLine className="h-6 w-6 text-amber-500" />,
  },
];

export default function BlogFeatures() {
  return <FeatureGrid title="Twój blog gotowy na widoczność i zasięg" subtitle="Co dostajesz" items={items} />;
}
