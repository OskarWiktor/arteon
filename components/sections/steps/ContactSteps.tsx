'use client';

import SectionSteps from '../../ui/sections/SectionSteps';

const ContactStepsItems = [
  {
    icon: '1',
    title: 'Wypełniasz formularz',
    description: <>Opisujesz swój projekt: cel, zakres i wszelkie inspiracje</>,
  },
  {
    icon: '2',
    title: 'Analizujemy potrzeby',
    description: <>Sprawdzamy Twoją branżę, analizujemy wymagania i dopracowujemy szczegóły</>,
  },
  {
    icon: '3',
    title: 'Otrzymujesz ofertę',
    description: <>Wysyłamy ofertę wraz z wyceną i przewidywanym terminem realizacji</>,
  },
  {
    icon: '4',
    title: 'Startujemy z projektem',
    description: <>Decydujesz, kiedy ruszamy. Realizujemy projekt etapami lub od razu</>,
  },
];

export default function ContactSteps() {
  return <SectionSteps items={ContactStepsItems} title="Jak przebiega kontakt?" />;
}
