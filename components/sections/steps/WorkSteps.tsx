'use client';

import SectionSteps from '../../ui/sections/SectionSteps';

const WorkStepsItems = [
  {
    title: (
      <>
        <span className="font-extrabold text-slate-600">1 </span>Rozmowa
      </>
    ),
    description: <>Opowiadasz nam o swojej marce, celach oraz wyzwaniach</>,
  },
  {
    title: (
      <>
        <span className="font-extrabold text-slate-600">2 </span>Plan
      </>
    ),
    description: <>Na podstawie Twojej wizji i naszej wiedzy, tworzymy plan działania</>,
  },
  {
    title: (
      <>
        <span className="font-extrabold text-slate-600">3 </span>Realizacja
      </>
    ),
    description: <>Realizujemy projekt, stale informując Cie o postępach</>,
  },
];

export default function WorkSteps() {
  return <SectionSteps items={WorkStepsItems} title="Nasz proces współpracy" subtitle="Nasze praktyki" description="Transparentny. Prosty. Skuteczny." />;
}
