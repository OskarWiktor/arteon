'use client';

import {
  RiFileTextLine,
  RiArticleLine,
  RiShoppingCartLine,
  RiShareForwardLine,
  RiFilePdfLine,
  RiPencilLine,
} from 'react-icons/ri';
import Button from '@/components/ui/Button';
import SectionSteps from '@/components/ui/sections/SectionSteps';

const items = [
  {
    icon: <RiFileTextLine className="h-8 w-8" />,
    title: 'Strony www',
    subtitle: 'od 600 zł',
    description: (
      <div className="flex h-full flex-col">
        <ul className="mb-3 list-disc space-y-1 pl-4 text-sm">
          <li>Piszemy treści, które jasno przedstawiają ofertę</li>
          <li>Układamy strukturę, by prowadziła odbiorcę krok po kroku</li>
          <li>Dostosowujemy język do Twojej branży i klientów</li>
        </ul>
        <div className="mt-auto">
          <Button arrow link="/kontakt">Wyceń treści do strony</Button>
        </div>
      </div>
    ),
  },
  {
    icon: <RiArticleLine className="h-8 w-8" />,
    title: 'Artykuły eksperckie',
    subtitle: 'od 300 zł',
    description: (
      <div className="flex h-full flex-col">
        <ul className="mb-3 list-disc space-y-1 pl-4 text-sm">
          <li>Przygotowujemy artykuły eksperckie i edukacyjne</li>
          <li>Optymalizujemy je pod SEO, by wzmacniały widoczność</li>
          <li>Planujemy publikacje, by utrzymać regularność i wspomóc SEO</li>
        </ul>
        <div className="mt-auto">
          <Button arrow link="/kontakt">Zamów artykuły</Button>
        </div>
      </div>
    ),
  },
  {
    icon: <RiShoppingCartLine className="h-8 w-8" />,
    title: 'E-commerce: opisy',
    subtitle: 'od 40 zł / szt.',
    description: (
      <div className="flex h-full flex-col">
        <ul className="mb-3 list-disc space-y-1 pl-4 text-sm">
          <li>Piszemy opisy produktów pokazujące korzyści</li>
          <li>Tworzymy krótkie treści do szybkich decyzji zakupowych</li>
          <li>Przygotowujemy rozbudowane opisy premium dla produktów wyższej klasy</li>
        </ul>
        <div className="mt-auto">
          <Button arrow link="/kontakt">Wyceń treści do sklepu</Button>
        </div>
      </div>
    ),
  },
  {
    icon: <RiShareForwardLine className="h-8 w-8" />,
    title: 'Social media: treści',
    subtitle: 'od 30 zł',
    description: (
      <div className="flex h-full flex-col">
        <ul className="mb-3 list-disc space-y-1 pl-4 text-sm">
          <li>Przygotowujemy posty, które zatrzymują uwagę i reakcje</li>
          <li>Piszemy scenariusze z jasnym wezwaniem do działania</li>
          <li>Układamy scenariusze rolek pod większe zasięgi</li>
        </ul>
        <div className="mt-auto">
          <Button arrow link="/kontakt">Zamów copy do social</Button>
        </div>
      </div>
    ),
  },
  {
    icon: <RiFilePdfLine className="h-8 w-8" />,
    title: 'Oferty i case studies',
    subtitle: 'od 400 zł',
    description: (
      <div className="flex h-full flex-col">
        <ul className="mb-3 list-disc space-y-1 pl-4 text-sm">
          <li>Projektujemy oferty sprzedażowe podkreślające Twoją wartość</li>
          <li>Opracowujemy case studies pokazujące efekty współpracy</li>
        </ul>
        <div className="mt-auto">
          <Button arrow link="/kontakt">Poproś o ofertę PDF</Button>
        </div>
      </div>
    ),
  },
  {
    icon: <RiPencilLine className="h-8 w-8" />,
    title: 'Korekta i redakcja',
    subtitle: 'wycena indywidualna',
    description: (
      <div className="flex h-full flex-col">
        <ul className="mb-3 list-disc space-y-1 pl-4 text-sm">
          <li>Poprawiamy błędy językowe i stylistyczne</li>
          <li>Ujednolicamy format, ton i układ treści</li>
          <li>Dostosowujemy teksty pod SEO dla lepszej widoczności</li>
        </ul>
        <div className="mt-auto">
          <Button arrow link="/kontakt">Prześlij tekst do korekty</Button>
        </div>
      </div>
    ),
  },
];

export default function ContentSteps() {
  return (
    <SectionSteps
      items={items}
      title="Oferta tworzenia treści"
      subtitle="Czytelnie i skutecznie"
      description="Pisanie, redakcja i optymalizacja treści — strona www, blog, e-commerce i social media."
      btnOne="Skontaktuj się"
      btnOneVariant="dark"
      btnOneLink="/kontakt"
    />
  );
}
