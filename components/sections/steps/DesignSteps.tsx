'use client';

import { RiPencilRuler2Line, RiLayoutMasonryLine, RiStackLine } from 'react-icons/ri';
import Button from '@/components/ui/Button';
import SectionSteps from '@/components/ui/sections/SectionSteps';

const items = [
  {
    icon: <RiPencilRuler2Line className="h-8 w-8" />,
    title: 'Identyfikacja marki',
    description: (
      <div className="flex h-full flex-col">
        <ul className="mb-3 list-disc space-y-1 pl-4 text-sm">
          <li>Sygnety, loga, kolory i typografie</li>
          <li>Wizytówki, ulotki, foldery i katalogi</li>
          <li>Ubrania firmowe oraz gadżety</li>
        </ul>
        <div className="mt-auto">
          <Button arrow link="#kontakt">
            Wyceń projekt
          </Button>
        </div>
      </div>
    ),
  },
  {
    icon: <RiLayoutMasonryLine className="h-8 w-8" />,
    title: 'Strony',
    description: (
      <div className="flex h-full flex-col">
        <ul className="mb-3 list-disc space-y-1 pl-4 text-sm">
          <li>Makiety układu i wyglądu strony</li>
          <li>Retusz oraz optymalizacje grafik</li>
          <li>Retusz zdjęć do strony i sklepu</li>
        </ul>
        <div className="mt-auto">
          <Button arrow link="#kontakt">
            Zapytaj o wycenę
          </Button>
        </div>
      </div>
    ),
  },
  {
    icon: <RiStackLine className="h-8 w-8" />,
    title: 'Social media',
    description: (
      <div className="flex h-full flex-col">
        <ul className="mb-3 list-disc space-y-1 pl-4 text-sm">
          <li>Posty, stories i karuzele</li>
          <li>Szablony dla spójności marki</li>
          <li>Montaż filmów</li>
        </ul>
        <div className="mt-auto">
          <Button arrow link="#kontakt">
            Wyceń projekt
          </Button>
        </div>
      </div>
    ),
  },
];

export default function DesignSteps() {
  return <SectionSteps items={items} title="Oferta grafiki" subtitle="Przejrzyście i konkretnie" description="Wizualny fundament Twojej marki - od logo po ubrania firmowe." />;
}
