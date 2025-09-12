'use client';

import FeatureGrid, { type FeatureItem } from '../FeatureGrid';
import { RiArticleLine, RiDeviceLine, RiDatabase2Line, RiBarChart2Line, RiShareForwardLine, RiBookOpenLine, RiMailLine } from 'react-icons/ri';
import { IoAccessibility } from 'react-icons/io5';
import { GoLaw } from 'react-icons/go';
import { MdSupportAgent } from 'react-icons/md';

const items: FeatureItem[] = [
  {
    title: 'Redakcja treści pod SEO i sprzedaż',
    icon: <RiArticleLine className="h-6 w-6 text-amber-500" />,
  },
  {
    title: 'Pełna responsywność i dostępność (WCAG 2.1 AA)',
    icon: <IoAccessibility className="h-6 w-6 text-amber-500" />,
  },
  {
    title: 'Wsparcie prawne: polityka prywatności i regulaminy',
    icon: <GoLaw className="h-6 w-6 text-amber-500" />,
  },
  {
    title: 'Optymalizacja SEO techniczna i treściowa',
    icon: <RiBarChart2Line className="h-6 w-6 text-amber-500" />,
  },
  {
    title: 'Łatwe zarządzanie treściami i produktami (CMS)',
    icon: <RiDatabase2Line className="h-6 w-6 text-amber-500" />,
  },
  {
    title: 'Integracja z social mediami i analityką',
    icon: <RiShareForwardLine className="h-6 w-6 text-amber-500" />,
  },
  {
    title: 'Dedykowane darmowe szkolenie PDF z obsługi',
    icon: <RiBookOpenLine className="h-6 w-6 text-amber-500" />,
  },
  {
    title: 'Bezpłatne wsparcie i poprawki po wdrożeniu',
    icon: <MdSupportAgent className="h-6 w-6 text-amber-500" />,
  },
];

export default function ArteonFeatures() {
  return <FeatureGrid title="W cenie każdej realizacji" subtitle="Standard Arteon" items={items} />;
}
