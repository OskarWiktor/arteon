'use client';

import SectionSteps from '../../ui/sections/SectionSteps';
import { FaWordpress } from 'react-icons/fa';
import { FaWebflow } from 'react-icons/fa6';
import { SiNextdotjs } from 'react-icons/si';

const TechStepsItems = [
  {
    icon: <FaWordpress className="h-8 w-8" />,
    title: 'WordPress',
    borderClassName: 'border-b-slate-500',
    description: (
      <>
        Popularne i elastyczne rozwiązanie. Sprawdza się w wizytówkach, małych sklepach i blogach. Łatwa edycja treści, tysiące gotowych wtyczek i motywów. W cenie dodatkowe zabezpieczenia oraz
        optymalizacje, aby strona działała szybciej i bezpieczniej.
      </>
    ),
  },
  {
    icon: <FaWebflow className="h-8 w-8" />,
    title: 'Webflow',
    borderClassName: 'border-b-slate-500',
    description: (
      <>
        Międzynarodowy standard. Piękne animacje, pełna zgodność z WCAG 2.1 i wygodny panel edycji. Idealne dla marek, które stawiają na wizerunek, estetykę i prostą obsługę bez udziału programisty.
        Szybkość działania i pełna kontrola nad wyglądem w pakiecie.
      </>
    ),
  },
  {
    icon: <SiNextdotjs className="h-8 w-8" />,
    title: 'Next.js',
    borderClassName: 'border-b-slate-500',
    description: (
      <>
        Technologia klasy premium. Maksymalna wydajność, skalowalność i bezpieczeństwo. Sprawdza się przy niestandardowych funkcjach, integracjach z systemami zewnętrznymi oraz w sklepach i
        aplikacjach, które muszą działać niezawodnie i błyskawicznie. To fundament dla marek planujących długofalowy rozwój.
      </>
    ),
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
      description="Dobieramy rozwiązanie dopasowane do Twoich potrzeb, branży i budżetu. Zawsze wybieramy dla Ciebie opcję, która da najlepszy efekt."
    />
  );
}
