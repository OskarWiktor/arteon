'use client';

import FeatureGrid, { type FeatureItem } from '../FeatureGrid';
import { RiArticleLine, RiDatabase2Line, RiBrushLine, RiBarChart2Line, RiShareForwardLine, RiBookOpenLine } from 'react-icons/ri';
import { IoAccessibility } from 'react-icons/io5';
import { GoLaw } from 'react-icons/go';
import { MdSupportAgent } from 'react-icons/md';
import { HiSparkles } from 'react-icons/hi';

const items: FeatureItem[] = [
  {
    title: 'Treści dopasowane do marki',
    icon: <RiArticleLine className="h-6 w-6 text-slate-500" />,
  },
  {
    title: 'Projekt graficzny spójny online i offline',
    icon: <RiBrushLine className="h-6 w-6 text-slate-500" />,
  },
  {
    title: 'Responsywność i dostępność (WCAG 2.1 AA)',
    icon: <IoAccessibility className="h-6 w-6 text-slate-500" />,
  },
  {
    title: 'Wsparcie prawne - polityki i regulaminy',
    icon: <GoLaw className="h-6 w-6 text-slate-500" />,
  },
  {
    title: 'Strategie marketingowe oparte na emocjach',
    icon: <RiBarChart2Line className="h-6 w-6 text-slate-500" />,
  },
  {
    title: 'Łatwe zarządzanie treściami i produktami (CMS)',
    icon: <RiDatabase2Line className="h-6 w-6 text-slate-500" />,
  },
  {
    title: 'Integracje z social mediami i analityką',
    icon: <RiShareForwardLine className="h-6 w-6 text-slate-500" />,
  },
  {
    title: 'Dedykowane szkolenie i instrukcje',
    icon: <RiBookOpenLine className="h-6 w-6 text-slate-500" />,
  },
  {
    title: 'Stałe wsparcie po wdrożeniu',
    icon: <MdSupportAgent className="h-6 w-6 text-slate-500" />,
  },
  {
    title: 'Inspiracje z globalnych marek',
    icon: <HiSparkles className="h-6 w-6 text-slate-500" />,
  },
];

export default function ArteonFeatures() {
  return <FeatureGrid title="Nasz standard współpracy" subtitle="Co zawsze dostajesz w Arteon" items={items} />;
}
