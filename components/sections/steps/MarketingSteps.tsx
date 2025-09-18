'use client';

import { RiSearchLine, RiBarChart2Line, RiMegaphoneLine, RiShareForwardLine, RiFileList2Line, RiUserHeartLine } from 'react-icons/ri';
import Button from '@/components/ui/Button';
import SectionSteps from '@/components/ui/sections/SectionSteps';

const items = [
  {
    icon: <RiFileList2Line className="h-8 w-8" />,
    title: 'SEO: audyt',
    subtitle: 'od 800 zł',
    description: (
      <div className="flex h-full flex-col">
        <ul className="mb-3 list-disc space-y-1 pl-4 text-sm">
          <li>Analizujemy Twoją stronę i konkurencję</li>
          <li>Sprawdzamy zgodność z prawem i dostępnością</li>
          <li>Tworzymy jasny plan poprawy widoczności</li>
        </ul>
        <div className="mt-auto">
          <Button arrow link="#kontakt">
            Zamów audyt SEO
          </Button>
        </div>
      </div>
    ),
  },
  {
    icon: <RiSearchLine className="h-8 w-8" />,
    title: 'SEO: optymalizacja',
    subtitle: 'od 600 zł',
    description: (
      <div className="flex h-full flex-col">
        <ul className="mb-3 list-disc space-y-1 pl-4 text-sm">
          <li>Sprawdzamy, czy Twoja strona jest łatwa do znalezienia</li>
          <li>Poprawiamy treści i opisy tak, by przyciągały klientów</li>
          <li>Poprawiamy technicznie Twoją witrynę</li>
        </ul>
        <div className="mt-auto">
          <Button arrow link="#kontakt">
            Zamów optymalizację SEO
          </Button>
        </div>
      </div>
    ),
  },
  {
    icon: <RiBarChart2Line className="h-8 w-8" />,
    title: 'SEO: rozwój',
    subtitle: 'od 1 200 zł / mies.',
    description: (
      <div className="flex h-full flex-col">
        <ul className="mb-3 list-disc space-y-1 pl-4 text-sm">
          <li>Piszemy i publikujemy treści, które podnoszą pozycję strony</li>
          <li>Budujemy sieć wartościowych linków</li>
          <li>Co miesiąc otrzymujesz raport i jasne rekomendacje</li>
        </ul>
        <div className="mt-auto">
          <Button arrow link="#kontakt">
            Zapytaj o abonament SEO
          </Button>
        </div>
      </div>
    ),
  },
  {
    icon: <RiMegaphoneLine className="h-8 w-8" />,
    title: 'Reklamy',
    subtitle: 'od 600 zł',
    description: (
      <div className="flex h-full flex-col">
        <ul className="mb-3 list-disc space-y-1 pl-4 text-sm">
          <li>Konfigurujemy reklamy w Google i Meta</li>
          <li>Tworzymy zestaw dopasowanych grafik i treści</li>
          <li>Ustawiamy śledzenie wyników i zdarzeń</li>
        </ul>
        <div className="mt-auto">
          <Button arrow link="#kontakt">
            Uruchom kampanię
          </Button>
        </div>
      </div>
    ),
  },
  {
    icon: <RiShareForwardLine className="h-8 w-8" />,
    title: 'Social media: prowadzenie',
    subtitle: 'od 1 100 zł / mies.',
    description: (
      <div className="flex h-full flex-col">
        <ul className="mb-3 list-disc space-y-1 pl-4 text-sm">
          <li>Planujemy i publikujemy posty, stories oraz rolki</li>
          <li>Przygotowujemy scenariusze i montujemy filmiki</li>
          <li>Dbamy o regularność i kontakt z odbiorcami</li>
        </ul>
        <div className="mt-auto">
          <Button arrow link="#kontakt">
            Poproś o plan publikacji
          </Button>
        </div>
      </div>
    ),
  },
  {
    icon: <RiUserHeartLine className="h-8 w-8" />,
    title: 'Branding psychologiczny',
    subtitle: 'od 900 zł',
    description: (
      <div className="flex h-full flex-col">
        <ul className="mb-3 list-disc space-y-1 pl-4 text-sm">
          <li>Określamy archetyp marki i jej osobowość</li>
          <li>Budujemy język i komunikację, która trafia w emocje</li>
          <li>Tworzymy oferty z których klienci chcą skorzystać</li>
        </ul>
        <div className="mt-auto">
          <Button arrow link="#kontakt">
            Ustal kierunek marki
          </Button>
        </div>
      </div>
    ),
  },
];

export default function MarketingSteps() {
  return (
    <SectionSteps
      items={items}
      title="Oferta marketingu"
      subtitle="Skutecznie i przejrzyście"
      description="SEO, reklamy i social - opisane prostym językiem, oparte na danych i emocjach. Efekt zawsze widoczny."
    />
  );
}
