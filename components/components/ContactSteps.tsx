'use client';

import SectionFour from '../ui/SectionFour';

const ContactStepsItems = [
  {
    number: '1',
    title: 'Wypełniasz formularz',
    description: 'Opisujesz swój projekt: cel, zakres i wszelkie inspiracje',
  },
  {
    number: '2',
    title: 'Analizujemy potrzeby',
    description: 'Sprawdzamy Twoją branżę, cele i dopracowujemy szczegóły',
  },
  {
    number: '3',
    title: 'Otrzymujesz ofertę',
    description: 'Wysyłamy ofertę wraz z wyceną i przewidywanym terminem realizacji',
  },
  {
    number: '4',
    title: 'Startujemy z projektem',
    description: 'Decydujesz, kiedy ruszamy. Realizujemy projekt etapami lub od razu',
  },
];

export default function ContactSteps() {
  return (
    <SectionFour
      items={ContactStepsItems}
      variant="smallMargin"
      renderItem={({ number, title, description }, index) => (
        <article role="group" aria-labelledby={`step-title-${index}`} aria-describedby={`step-desc-${index}`} tabIndex={0} className="flex flex-col py-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200">
            <span className="text-xl font-medium" aria-hidden="true">
              {number}
            </span>
          </div>
          <h5 id={`step-title-${index}`} className="mt-2 mb-2 w-fit border-b-2 border-amber-500 font-semibold capitalize" tabIndex={0}>
            {title}
          </h5>
          <p id={`step-desc-${index}`} tabIndex={0} className="text-gray-700">
            {description}
          </p>
        </article>
      )}
    />
  );
}
