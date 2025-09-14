'use client';

import SectionSteps from '../../ui/sections/SectionSteps';

const ContactStepsItems = [
  {
    title: (
      <>
        <span className="font-extrabold text-slate-600">1 </span>Wypełniasz formularz
      </>
    ),
    description: <>Opisujesz swój projekt: cel, zakres i wszelkie inspiracje</>,
  },
  {
    title: (
      <>
        <span className="font-extrabold text-slate-600">2 </span>Analizujemy potrzeby
      </>
    ),
    description: <>Sprawdzamy Twoją branżę, analizujemy wymagania i dopracowujemy szczegóły</>,
  },
  {
    title: (
      <>
        <span className="font-extrabold text-slate-600">3 </span>Otrzymujesz ofertę
      </>
    ),
    description: <>Wysyłamy ofertę wraz z wyceną i przewidywanym terminem realizacji</>,
  },
  {
    title: (
      <>
        <span className="font-extrabold text-slate-600">4 </span>Startujemy z projektem
      </>
    ),
    description: <>Decydujesz, kiedy ruszamy. Realizujemy projekt etapami lub od razu</>,
  },
];

export default function ContactSteps() {
  return <SectionSteps items={ContactStepsItems} subtitle="Rozmowa" title="Jak wygląda pierwszy kontakt?" />;
}
