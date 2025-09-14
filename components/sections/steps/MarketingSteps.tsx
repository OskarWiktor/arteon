'use client';

import {
  RiSearchLine,
  RiBarChart2Line,
  RiMegaphoneLine,
  RiFundsLine,
  RiBrushLine,
  RiShareForwardLine,
  RiSettings3Line,
  RiFileList2Line,
  RiUserHeartLine,
} from 'react-icons/ri';
import Button from '@/components/ui/Button';
import SectionSteps from '@/components/ui/sections/SectionSteps';

const items = [
  {
    icon: <RiSearchLine className="h-8 w-8" />,
    title: 'SEO: audyt i optymalizacja',
    subtitle: 'od 700 zł',
    description: (
      <div className="flex h-full flex-col">
        <ul className="mb-3 list-disc space-y-1 pl-4 text-sm">
          <li>Sprawdzamy, czy Twoja strona jest łatwa do znalezienia</li>
          <li>Poprawiamy treści i opisy tak, by przyciągały klientów</li>
          <li>Podpowiadamy, co zmienić, by szybciej rosnąć w wynikach</li>
        </ul>
        <div className="mt-auto">
          <Button arrow link="/contact">
            Zamów audyt SEO
          </Button>
        </div>
      </div>
    ),
  },
  {
    icon: <RiBarChart2Line className="h-8 w-8" />,
    title: 'SEO miesięczne',
    subtitle: 'od 1 800 zł / mies.',
    description: (
      <div className="flex h-full flex-col">
        <ul className="mb-3 list-disc space-y-1 pl-4 text-sm">
          <li>Piszemy i publikujemy treści, które podnoszą pozycję strony</li>
          <li>Budujemy sieć wartościowych linków</li>
          <li>Co miesiąc otrzymujesz raport i jasne rekomendacje</li>
        </ul>
        <div className="mt-auto">
          <Button arrow link="/contact">
            Zapytaj o abonament
          </Button>
        </div>
      </div>
    ),
  },
  {
    icon: <RiMegaphoneLine className="h-8 w-8" />,
    title: 'Reklamy: start kampanii',
    subtitle: 'od 700 zł',
    description: (
      <div className="flex h-full flex-col">
        <ul className="mb-3 list-disc space-y-1 pl-4 text-sm">
          <li>Konfigurujemy reklamy w Google i Meta</li>
          <li>Tworzymy zestaw dopasowanych grafik i treści</li>
          <li>Ustawiamy śledzenie wyników i zdarzeń</li>
        </ul>
        <div className="mt-auto">
          <Button arrow link="/contact">
            Uruchom kampanię
          </Button>
        </div>
      </div>
    ),
  },
  {
    icon: <RiFundsLine className="h-8 w-8" />,
    title: 'Obsługa kampanii',
    subtitle: 'od 1 000 zł / mies.',
    description: (
      <div className="flex h-full flex-col">
        <ul className="mb-3 list-disc space-y-1 pl-4 text-sm">
          <li>Prowadzimy i optymalizujemy reklamy na bieżąco</li>
          <li>Testujemy różne wersje i wybieramy najlepsze</li>
          <li>Raportujemy efekty i proponujemy dalsze kroki</li>
        </ul>
        <div className="mt-auto">
          <Button arrow link="/contact">
            Włącz obsługę
          </Button>
        </div>
      </div>
    ),
  },
  {
    icon: <RiBrushLine className="h-8 w-8" />,
    title: 'Kreacje reklamowe',
    subtitle: 'od 900 zł',
    description: (
      <div className="flex h-full flex-col">
        <ul className="mb-3 list-disc space-y-1 pl-4 text-sm">
          <li>Projektujemy reklamy spójne z Twoją marką</li>
          <li>Tworzymy warianty do testów i porównań</li>
          <li>Przygotowujemy zestaw formatów na różne kanały</li>
        </ul>
        <div className="mt-auto">
          <Button arrow link="/contact">
            Zamów kreacje
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
          <li>Planujemy i publikujemy posty, stories i rolki</li>
          <li>Budujemy spójny wizerunek marki</li>
          <li>Dbamy o regularność i kontakt z odbiorcami</li>
        </ul>
        <div className="mt-auto">
          <Button arrow link="/contact">
            Poproś o plan publikacji
          </Button>
        </div>
      </div>
    ),
  },
  {
    icon: <RiSettings3Line className="h-8 w-8" />,
    title: 'Automatyzacje publikacji',
    subtitle: 'od 400 zł',
    description: (
      <div className="flex h-full flex-col">
        <ul className="mb-3 list-disc space-y-1 pl-4 text-sm">
          <li>Automatyzujemy dodawanie treści na różne kanały</li>
          <li>Łączymy systemy tak, by działały bez Twojej ingerencji</li>
          <li>Tworzymy prosty schemat pracy dla zespołu</li>
        </ul>
        <div className="mt-auto">
          <Button arrow link="/contact">
            Ustaw automatyzacje
          </Button>
        </div>
      </div>
    ),
  },
  {
    icon: <RiFileList2Line className="h-8 w-8" />,
    title: 'Audyty i strategie',
    subtitle: 'od 800 zł',
    description: (
      <div className="flex h-full flex-col">
        <ul className="mb-3 list-disc space-y-1 pl-4 text-sm">
          <li>Analizujemy Twoją stronę i konkurencję</li>
          <li>Sprawdzamy zgodność z prawem i dostępnością</li>
          <li>Tworzymy strategię krok po kroku na kolejne miesiące</li>
        </ul>
        <div className="mt-auto">
          <Button arrow link="/contact">
            Zamów audyt/strategię
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
          <li>Tworzymy oferty, które klienci chcą kupować</li>
        </ul>
        <div className="mt-auto">
          <Button arrow link="/contact">
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
      description="SEO, reklamy i social — opisane prostym językiem, oparte na danych i emocjach. Efekt zawsze widoczny."
      btnOne="Skontaktuj się"
      btnOneVariant="dark"
      btnOneLink="/contact"
    />
  );
}
