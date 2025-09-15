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
          <li>Rozpoznawalne logo i spójny styl marki</li>
          <li>Sygnet, logotyp, kolory i typografia</li>
          <li>Wektory i warianty kolorystyczne gotowe do użycia</li>
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
          <li>Zestawy ikon w jednym, czytelnym stylu</li>
          <li>Dobre w małych rozmiarach i na telefonie</li>
          <li>Pliki wektorowe, gotowe do wdrożeń</li>
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
    icon: <RiBrushLine className="h-8 w-8" />,
    title: 'Materiały firmowe',
    subtitle: 'od 180 zł',
    description: (
      <div className="flex h-full flex-col">
        <ul className="mb-3 list-disc space-y-1 pl-4 text-sm">
          <li>Wizytówki i papier firmowy</li>
          <li>Teczki ofertowe i stopki mailowe</li>
          <li>Banery i roll-upy gotowe do druku</li>
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
          <li>Ulotki, foldery i katalogi</li>
          <li>Książki, raporty, okładki</li>
          <li>Pliki do druku i do sieci</li>
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
          <li>Etykiety produktowe i serie wariantów</li>
          <li>Pudełka i zestawy opakowań</li>
          <li>Czytelność na półce i w e-commerce</li>
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
    icon: <RiShoppingBag3Line className="h-8 w-8" />,
    title: 'Grafiki na ubrania',
    subtitle: 'wycena indywidualna',
    description: (
      <div className="flex h-full flex-col">
        <ul className="mb-3 list-disc space-y-1 pl-4 text-sm">
          <li>Ubrania firmowe i gadżety</li>
          <li>Wektory i warianty kolorów</li>
          <li>Pliki gotowe do druku</li>
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
      description="Wizualny fundament Twojej marki — od logo po ubrania firmowe."
      btnOne="Skontaktuj się"
      btnOneVariant="dark"
      btnOneLink="/kontakt"
    />
  );
}
