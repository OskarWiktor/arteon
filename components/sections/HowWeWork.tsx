'use client';

import SectionFour from '../ui/SectionFour';

const HowWeWorkItems = [
  { number: '1', title: 'Rozmowa i brief', description: 'Zaczynamy od rozmowy. Słuchamy, pytamy, odczytujemy intencję. Szukamy tego, co autentyczne w Twojej marce – i na tym budujemy.' },
  { number: '2', title: 'Projekt i koncepcja', description: 'Tworzymy wizję, która ma strukturę. Łączymy estetykę z funkcją, intuicję z strategią. Pokazujemy kierunek – a Ty go zatwierdzasz.' },
  { number: '3', title: 'Realizacja i wdrożenie', description: 'Wprowadzamy ideę w życie. Kodujemy, optymalizujemy, testujemy. To moment, gdy forma spotyka treść, a projekt staje się narzędziem.' },
  {
    number: '4',
    title: 'Wzrost i rozwój Twojej marki',
    description: 'Nie kończymy na publikacji. Pomagamy Twojej marce oddychać: SEO, social media, analiza – wszystko, co prowadzi ku rozpoznawalności.',
  },
];

export default function HowWeWork() {
  return (
    <SectionFour
      items={HowWeWorkItems}
      renderItem={({ number, title, description }, index) => (
        <article role="group" aria-labelledby={`step-title-${index}`} aria-describedby={`step-desc-${index}`} tabIndex={0} className="flex flex-col py-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200">
            <span className="text-xl" aria-hidden="true">
              {number}
            </span>
          </div>
          <h3 id={`step-title-${index}`} className="mt-4 mb-4 w-fit border-b border-b-amber-500 text-2xl font-semibold text-balance text-gray-900 capitalize" tabIndex={0}>
            {title}
          </h3>
          <p id={`step-desc-${index}`} className="text-balance text-gray-800 md:text-lg" tabIndex={0}>
            {description}
          </p>
        </article>
      )}
    />
  );
}
