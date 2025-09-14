'use client';

import { RiSearchLine, RiBarChart2Line, RiMegaphoneLine, RiFundsLine, RiBrushLine, RiShareForwardLine, RiSettings3Line, RiFileList2Line, RiUserHeartLine } from 'react-icons/ri';
import Button from '@/components/ui/Button';
import SectionSteps from '@/components/ui/sections/SectionSteps';

/**
 * Oferta "Marketing" - 9 sekcji zgodnych z Twoim cennikiem.
 * SEO, Reklamy, Social, Audyty/Strategie, Branding psychologiczny + elementy „w cenie”.
 * Widełki i pozycje: zgodnie z cennikiem Arteon (SEO, Reklamy, Social Media, Audyty i strategie, Branding i psychologia marki).
 */
const items = [
  {
    icon: <RiSearchLine className="h-8 w-8" />,
    title: 'SEO: audyt i on-page',
    subtitle: 'od 700 zł',
    description: (
      <div className="flex h-full flex-col">
        <ul className="mb-3 list-disc space-y-1 pl-4 text-sm">
          <li>Audyt SEO techniczny: 700-1 200 zł</li>
          <li>On-page (10 podstron): 1 200-1 600 zł</li>
          <li>Rozszerzenie: 120-160 zł / podstrona</li>
        </ul>
        <div className="mt-auto">
          <Button arrow link="/kontakt">
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
          <li>Linki, Treści, monitoring</li>
          <li>Raporty efektów i rekomendacje</li>
          <li>Plan wzrostu widoczności</li>
        </ul>
        <div className="mt-auto">
          <Button arrow link="/kontakt">
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
          <li>Kampania startowa (5 kreacji): 700-1 000 zł</li>
          <li>Meta / Google / Display</li>
          <li>Setup + konfiguracja zdarzeń</li>
        </ul>
        <div className="mt-auto">
          <Button arrow link="/kontakt">
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
          <li>Budżet ≤ 5 000 zł: 1 000-1 400 zł / mies.</li>
          <li>Budżet 5-20 tys. zł: 1 600-2 200 zł / mies.</li>
          <li>Optymalizacja i testy A/B</li>
        </ul>
        <div className="mt-auto">
          <Button arrow link="/kontakt">
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
          <li>Pakiet 10 formatów: 900-1 400 zł</li>
          <li>Spójność z identyfikacją</li>
          <li>Warianty do testów</li>
        </ul>
        <div className="mt-auto">
          <Button arrow link="/kontakt">
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
          <li>Start: 1 100-1 600 zł / mies.</li>
          <li>Firmowy: 2 200-3 000 zł / mies.</li>
          <li>Premium: 3 800-5 000 zł / mies.</li>
        </ul>
        <div className="mt-auto">
          <Button arrow link="/kontakt">
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
          <li>Automatyzacja procesów: 400-600 zł</li>
          <li>Tagowanie zdarzeń i integracje</li>
          <li>Prosty workflow dla zespołu</li>
        </ul>
        <div className="mt-auto">
          <Button arrow link="/kontakt">
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
          <li>Audyt strony (SEO + prawo + UX + WCAG): 1 200-1 800 zł</li>
          <li>Analiza konkurencji (do 5 firm): 800-1 200 zł</li>
          <li>Strategia marketingowa: 2 500-3 800 zł</li>
        </ul>
        <div className="mt-auto">
          <Button arrow link="/kontakt">
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
          <li>Archetyp marki: 1 200-1 800 zł</li>
          <li>Strategia komunikacji emocjonalnej: 2 200-3 500 zł</li>
          <li>Oferta sprzedażowa (Why → How → What): 900-1 500 zł</li>
        </ul>
        <div className="mt-auto">
          <Button arrow link="/kontakt">
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
      description="SEO, reklamy i social - oparte na danych i psychologii decyzji. Ty dostajesz efekt."
      btnOne="Skontaktuj się"
      btnOneVariant="dark"
      btnOneLink="/kontakt"
    />
  );
}
