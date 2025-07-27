'use client';

import SectionFour from '../ui/SectionFour';

const WorkStepsItems = [
  { number: '1', title: 'Rozmowa', description: 'Opowiadasz nam o swojej marce, celach i wyzwaniach. Zbieramy kluczowe informacje, aby przygotować precyzyjny plan działania.' },
  {
    number: '2',
    title: 'Projekt',
    description: 'Budujemy wizję opartą na realnych potrzebach. Łączymy estetykę z funkcją w spójną wizję Twojej marki.',
  },
  {
    number: '3',
    title: 'Realizacja',
    description: 'Realizujemy projekt od makiet po kod. Testujemy, optymalizujemy i dbamy o płynne działanie, aby witryna angażowała i konwertowała.',
  },
  {
    number: '4',
    title: 'Rozwój',
    description: 'Publikacja to początek. Dbamy o wzrost: SEO, social media, analiza. Twoja marka żyje, rozwija się i przyciąga właściwych klientów.',
  },
];

export default function WorkSteps() {
  return (
    <SectionFour
      items={WorkStepsItems}
      title="Nasz proces pracy"
      renderItem={({ number, title, description }, index) => (
        <article role="group" aria-labelledby={`step-title-${index}`} aria-describedby={`step-desc-${index}`} tabIndex={0} className="flex flex-col py-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200">
            <span className="text-xl" aria-hidden="true">
              {number}
            </span>
          </div>
          <h5 id={`step-title-${index}`} className="mt-2 mb-4 w-fit border-b border-b-amber-500" tabIndex={0}>
            {title}
          </h5>
          <p id={`step-desc-${index}`} tabIndex={0}>
            {description}
          </p>
        </article>
      )}
    />
  );
}
