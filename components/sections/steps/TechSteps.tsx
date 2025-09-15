'use client';

import SectionSteps from '../../ui/sections/SectionSteps';
import { FaWordpress } from 'react-icons/fa';
import { FaWebflow } from 'react-icons/fa6';
import { SiNextdotjs } from 'react-icons/si';

const TechStepsItems = [
  {
    icon: <FaWordpress className="h-8 w-8" />,
    title: 'Wordpress',
    borderClassName: 'border-b-slate-500',
    description: <>Prosta edycja i sprawdzone rozwiązanie. Dobre dla lokalnych i krajowych biznesów. Dodatkowe zabezpieczenia i optymalizacje w cenie.</>,
  },
  {
    icon: <FaWebflow className="h-8 w-8" />,
    title: 'Webflow',
    borderClassName: 'border-b-slate-500',
    description: <>Międzynarodowy stadard, pełna zgodność z WCAG 2.1, większa płynność i piękny wygląd. Idealne dla marek, które stawiają na wizerunek i wygodę edycji.</>,
  },
  {
    icon: <SiNextdotjs className="h-8 w-8" />,
    title: 'Next.js',
    borderClassName: 'border-b-slate-500',
    description: <>Wydajność i skalowalność klasy produktowej. Idealne gdy potrzebujesz niestandardowych funkcji, integracji i niezawodniej prędkości.</>,
  },
];

export default function TechSteps() {
  return (
    <SectionSteps
      overlay="black"
      backgroundImage="/assets/bg/abstract-bg1.webp"
      items={TechStepsItems}
      title="Technologia służy celowi"
      subtitle="Nasza Technologia"
      description="Dobieramy rozwiązanie do Twoich indywidualnych potrzeb oraz budżetu"
    />
  );
}
