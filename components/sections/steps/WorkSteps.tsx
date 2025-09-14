'use client';

import SectionSteps from '../../ui/sections/SectionSteps';

const WorkStepsItems = [
  {
    title: <><span className='text-slate-600 font-extrabold'>1 </span>Rozmowa</>,
    description: <>Opowiadasz nam o swojej marce, celach oraz wyzwaniach</>,
  },
  {
    title: <><span className='text-slate-600 font-extrabold'>2 </span>Plan</>,
    description: <>Na podstawie Twojej wizji i naszej wiedzy, tworzymy plan działania</>,
  },
  {
    title: <><span className='text-slate-600 font-extrabold'>3 </span>Realizacja</>,
    description: <>Realizujemy projekt, stale informując Cie o postępach</>,
  },
];

export default function WorkSteps() {
  return <SectionSteps items={WorkStepsItems} title="Proces pracy" subtitle="Nasze praktyki" description="Transparentny. Prosty. Skuteczny." btnOne="Rozpocznij wycenę" btnOneLink="/contact" />;
}
