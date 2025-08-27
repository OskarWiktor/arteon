'use client';

import SectionSteps from '../../ui/sections/SectionSteps';

const WorkStepsItems = [
  {
    icon: '1',
    title: 'Rozmowa',
    borderClassName: 'border-b-amber-500',
    description: <>Opowiadasz nam o swojej marce, celach i wyzwaniach. Zbieramy kluczowe informacje, aby przygotować precyzyjny plan działania.</>,
  },
  {
    icon: '2',
    title: 'Projekt',
    borderClassName: 'border-b-amber-500',
    description: <>Budujemy wizję opartą na realnych potrzebach. Łączymy estetykę z funkcją w spójną wizję Twojej marki.</>,
  },
  {
    icon: '3',
    title: 'Realizacja',
    borderClassName: 'border-b-amber-500',
    description: <>Realizujemy projekt od makiet po kod. Testujemy, optymalizujemy i dbamy o płynne działanie, aby witryna angażowała i konwertowała.</>,
  },
  {
    icon: '4',
    title: 'Rozwój',
    borderClassName: 'border-b-amber-500',
    description: <>Publikacja to początek. Dbamy o wzrost: SEO, social media, analiza. Twoja marka żyje, rozwija się i przyciąga właściwych klientów.</>,
  },
];

export default function WorkSteps() {
  return <SectionSteps items={WorkStepsItems} title="Nasz proces pracy" />;
}
