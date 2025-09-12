'use client';

import { RiPencilRuler2Line, RiLayoutMasonryLine, RiStackLine, RiBrushLine, RiFileTextLine, RiArchiveDrawerLine, RiShoppingBag3Line, RiImageLine, RiAppsLine } from 'react-icons/ri';
import Button from '@/components/ui/Button';
import SectionSteps from '@/components/ui/sections/SectionSteps';

const items = [
  {
    icon: <RiPencilRuler2Line className="h-8 w-8" />,
    title: 'Logo i identyfikacja',
    subtitle: 'od 1 200 zł',
    description: (
      <div className="flex h-full flex-col">
        <ul className="mb-3 list-disc space-y-1 pl-4 text-sm">
          <li>Logo Start, Core, Premium</li>
          <li>Sygnet, logotyp, kolory, typografia</li>
          <li>Pliki wektorowe (Adobe CC)</li>
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
    icon: <RiAppsLine className="h-8 w-8" />,
    title: 'Ikony',
    subtitle: 'od 600 zł',
    description: (
      <div className="flex h-full flex-col">
        <ul className="mb-3 list-disc space-y-1 pl-4 text-sm">
          <li>Zestawy ikon (12 szt.)</li>
          <li>Proste, spójne ze stylem marki</li>
          <li>Pliki wektorowe gotowe do użycia</li>
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
    icon: <RiStackLine className="h-8 w-8" />,
    title: 'Social media',
    subtitle: 'od 60 zł',
    description: (
      <div className="flex h-full flex-col">
        <ul className="mb-3 list-disc space-y-1 pl-4 text-sm">
          <li>Posty, stories, karuzele</li>
          <li>Pakiety startowe i szablony</li>
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
    icon: <RiBrushLine className="h-8 w-8" />,
    title: 'Materiały firmowe',
    subtitle: 'od 180 zł',
    description: (
      <div className="flex h-full flex-col">
        <ul className="mb-3 list-disc space-y-1 pl-4 text-sm">
          <li>Wizytówki, papier firmowy</li>
          <li>Teczki ofertowe, stopki mailowe</li>
          <li>Banery i roll-upy</li>
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
    icon: <RiFileTextLine className="h-8 w-8" />,
    title: 'Publikacje i skład',
    subtitle: 'od 250 zł',
    description: (
      <div className="flex h-full flex-col">
        <ul className="mb-3 list-disc space-y-1 pl-4 text-sm">
          <li>Ulotki, foldery, katalogi</li>
          <li>Książki i raporty</li>
          <li>Skład stron i DTP</li>
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
    icon: <RiArchiveDrawerLine className="h-8 w-8" />,
    title: 'Opakowania i etykiety',
    subtitle: 'od 240 zł',
    description: (
      <div className="flex h-full flex-col">
        <ul className="mb-3 list-disc space-y-1 pl-4 text-sm">
          <li>Etykiety produktowe</li>
          <li>Seria etykiet (warianty)</li>
          <li>Opakowania pudełka</li>
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
    title: 'Strony w Figmie',
    subtitle: 'wycena indywidualna',
    description: (
      <div className="flex h-full flex-col">
        <ul className="mb-3 list-disc space-y-1 pl-4 text-sm">
          <li>Makiety UX/UI dla stron</li>
          <li>Układy zgodne ze złotym podziałem</li>
          <li>Gotowe do wdrożenia w Next.js/Webflow</li>
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
    icon: <RiShoppingBag3Line className="h-8 w-8" />,
    title: 'Grafiki na ubrania',
    subtitle: 'wycena indywidualna',
    description: (
      <div className="flex h-full flex-col">
        <ul className="mb-3 list-disc space-y-1 pl-4 text-sm">
          <li>Ubrania firmowe i gadżety</li>
          <li>Wektory i warianty kolorów</li>
          <li>Gotowe pliki do druku</li>
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
    icon: <RiImageLine className="h-8 w-8" />,
    title: 'Obróbka zdjęć i video',
    subtitle: 'wycena indywidualna',
    description: (
      <div className="flex h-full flex-col">
        <ul className="mb-3 list-disc space-y-1 pl-4 text-sm">
          <li>Retusz zdjęć pod www</li>
          <li>Montaż rolek na IG/TikTok</li>
          <li>Content + treść w pakiecie</li>
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
      description="Każdy element wizualny Twojej marki - od logo po ubrania firmowe."
      btnOne="Skontaktuj się"
      btnOneVariant="dark"
      btnOneLink="/kontakt"
    />
  );
}
