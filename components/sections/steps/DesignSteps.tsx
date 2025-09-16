'use client';

import { RiPencilRuler2Line, RiLayoutMasonryLine, RiStackLine, RiImageLine } from 'react-icons/ri';
import Button from '@/components/ui/Button';
import SectionSteps from '@/components/ui/sections/SectionSteps';

const items = [
  {
    icon: <RiPencilRuler2Line className="h-8 w-8" />,
    title: 'Identyfikacja marki',
    subtitle: 'od 180 zł',
    description: (
      <div className="flex h-full flex-col">
        <ul className="mb-3 list-disc space-y-1 pl-4 text-sm">
          <li>Sygnety, loga, kolory i typografie</li>
          <li>Dedykowane zestawy ikon</li>
          <li>Wizytówki, ulotki, foldery i katalogi</li>
          <li>Ubrania firmowe oraz gadżety</li>
        </ul>
        <div className="mt-auto">
          <Button arrow link="/kontakt">
            Wyceń projekt
          </Button>
        </div>
      </div>
    ),
  },
  {
    icon: <RiLayoutMasonryLine className="h-8 w-8" />,
    title: 'Strony',
    subtitle: 'wycena indywidualna',
    description: (
      <div className="flex h-full flex-col">
        <ul className="mb-3 list-disc space-y-1 pl-4 text-sm">
          <li>Makiety układu i wyglądu strony</li>
          <li>Proporcje i układy zgodne ze złotym podziałem</li>
          <li>Gotowe do wdrożenia w Next.js / Webflow</li>
        </ul>
        <div className="mt-auto">
          <Button arrow link="/kontakt">
            Zapytaj o wycenę
          </Button>
        </div>
      </div>
    ),
  },
    {
    icon: <RiStackLine className="h-8 w-8" />,
    title: 'Social media',
    subtitle: 'od 60 zł',
    description: (
      <div className="flex h-full flex-col">
        <ul className="mb-3 list-disc space-y-1 pl-4 text-sm">
          <li>Posty, stories i karuzele spójne z marką</li>
          <li>Szablony, które przyspieszają publikacje</li>
          <li>Rolki: proste i z animacjami</li>
        </ul>
        <div className="mt-auto">
          <Button arrow link="/kontakt">
            Wyceń projekt
          </Button>
        </div>
      </div>
    ),
  },
  {
    icon: <RiImageLine className="h-8 w-8" />,
    title: 'Obróbka zdjęć i video',
    subtitle: 'wycena indywidualna',
    description: (
      <div className="flex h-full flex-col">
        <ul className="mb-3 list-disc space-y-1 pl-4 text-sm">
          <li>Retusz zdjęć do strony i sklepu</li>
          <li>Montaż krótkich filmów na IG/TikTok</li>
          <li>Treść i napisy w pakiecie</li>
        </ul>
        <div className="mt-auto">
          <Button arrow link="/kontakt">
            Zapytaj o wycenę
          </Button>
        </div>
      </div>
    ),
  },
];

export default function DesignSteps() {
  return (
    <SectionSteps
      items={items}
      title="Oferta grafiki"
      subtitle="Przejrzyście i konkretnie"
      grid='two'
      description="Wizualny fundament Twojej marki - od logo po ubrania firmowe."
      btnOne="Skontaktuj się"
      btnOneVariant="dark"
      btnOneLink="/kontakt"
    />
  );
}
