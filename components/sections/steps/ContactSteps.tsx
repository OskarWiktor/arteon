'use client';

import SectionSteps from '../../ui/sections/SectionSteps';

const ContactStepsItems = [
  {
    icon: <span className="text-xl font-medium">1</span>,
    title: 'Wypełniasz formularz',
    description: <>Opisujesz swój projekt: cel, zakres i wszelkie inspiracje</>,
  },
  {
    icon: <span className="text-xl font-medium">2</span>,
    title: 'Analizujemy potrzeby',
    description: <>Sprawdzamy Twoją branżę, analizujemy wymagania i dopracowujemy szczegóły</>,
  },
  {
    icon: <span className="text-xl font-medium">3</span>,
    title: 'Otrzymujesz ofertę',
    description: <>Wysyłamy ofertę wraz z wyceną i przewidywanym terminem realizacji</>,
  },
  {
    icon: <span className="text-xl font-medium">4</span>,
    title: 'Startujemy z projektem',
    description: <>Decydujesz, kiedy ruszamy. Realizujemy projekt etapami lub od razu</>,
  },
];

export default function ContactSteps() {
  return <SectionSteps items={ContactStepsItems} title="Jak przebiega kontakt?" />;
}
