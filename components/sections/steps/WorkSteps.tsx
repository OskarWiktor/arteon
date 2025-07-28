'use client';

import SectionSteps from '../../ui/sections/SectionSteps';

const WorkStepsItems = [
  {
    icon: <span className="text-xl font-medium">1</span>,
    title: 'Rozmowa',
    borderClassName: 'border-b-amber-500',
    description: <>Opowiadasz nam o swojej marce, celach i wyzwaniach. Zbieramy kluczowe informacje, aby przygotować precyzyjny plan działania.</>,
  },
  {
    icon: <span className="text-xl font-medium">2</span>,
    title: 'Projekt',
    borderClassName: 'border-b-amber-500',
    description: <>Budujemy wizję opartą na realnych potrzebach. Łączymy estetykę z funkcją w spójną wizję Twojej marki.</>,
  },
  {
    icon: <span className="text-xl font-medium">3</span>,
    title: 'Realizacja',
    borderClassName: 'border-b-amber-500',
    description: <>Realizujemy projekt od makiet po kod. Testujemy, optymalizujemy i dbamy o płynne działanie, aby witryna angażowała i konwertowała.</>,
  },
  {
    icon: <span className="text-xl font-medium">4</span>,
    title: 'Rozwój',
    borderClassName: 'border-b-amber-500',
    description: <>Publikacja to początek. Dbamy o wzrost: SEO, social media, analiza. Twoja marka żyje, rozwija się i przyciąga właściwych klientów.</>,
  },
];

export default function WorkSteps() {
  return <SectionSteps items={WorkStepsItems} title="Nasz proces pracy" />;
}
