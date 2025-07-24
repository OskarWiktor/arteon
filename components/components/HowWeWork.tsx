'use client';

import SectionFour from '../ui/SectionFour';

const HowWeWorkItems = [
  { number: '1', title: 'Rozmowa i brief', description: 'Zaczynamy od rozmowy. Słuchamy uważnie, zadajemy pytania, odkrywamy prawdziwy potencjał Twojej marki. Na tej podstawie budujemy plan.' },
  {
    number: '2',
    title: 'Projekt i koncepcja',
    description: 'Budujemy wizję opartą na realnych potrzebach. Łączymy estetykę z funkcją, strategię z emocją. Pokazujemy kierunek, który rozwija Twoją markę.',
  },
  {
    number: '3',
    title: 'Realizacja i wdrożenie',
    description: 'Wdrażamy projekt krok po kroku. Kodujemy, testujemy, optymalizujemy. Forma łączy się z treścią, a Twoja strona zaczyna pracować na Twój wynik.',
  },
  {
    number: '4',
    title: 'Rozwój Twojej marki',
    description: 'Publikacja to początek. Dbamy o wzrost: SEO, social media, analiza. Twoja marka żyje, rozwija się i przyciąga właściwych klientów.',
  },
];

export default function HowWeWork() {
  return (
    <SectionFour
      items={HowWeWorkItems}
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
