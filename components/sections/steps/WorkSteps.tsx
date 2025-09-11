'use client';

import SectionSteps from '../../ui/sections/SectionSteps';

const WorkStepsItems = [
  {
    icon: '1',
    title: 'Rozmowa',
    borderClassName: 'border-b-indigo-800',
    description: <>Opowiadasz nam o swojej marce, celach oraz wyzwaniach</>,
  },
  {
    icon: '2',
    title: 'Plan',
    borderClassName: 'border-b-indigo-800',
    description: <>Na podstawie Twojej wizji i naszej wiedzy, tworzymy plan działania</>,
  },
  {
    icon: '3',
    title: 'Realizacja',
    borderClassName: 'border-b-indigo-800',
    description: <>Realizujemy projekt, stale informując Cie o postępach</>,
  },
];

export default function WorkSteps() {
  return <SectionSteps items={WorkStepsItems} title="Proces pracy" subtitle="Nasze praktyki" description="Transparentny. Prosty. Skuteczny." btnOne="Rozpocznij wycenę" btnOneLink="/contact" />;
}
