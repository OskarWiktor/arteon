'use client';

import { RiFileTextLine, RiArticleLine, RiShoppingCartLine, RiShareForwardLine, RiFilePdfLine, RiBookOpenLine, RiChatQuoteLine, RiPencilLine, RiLightbulbFlashLine } from 'react-icons/ri';
import Button from '@/components/ui/Button';
import SectionSteps from '@/components/ui/sections/SectionSteps';

/**
 * Oferta "Treści" - 9 sekcji zgodnych z cennikiem i ofertą.
 * Źródło widełek: Strony www, Artykuły, E-commerce, Social media, Oferty/Case, + elementy ZA DARMO.
 */
const items = [
  {
    icon: <RiFileTextLine className="h-8 w-8" />,
    title: 'Strony www',
    subtitle: 'od 600 zł',
    description: (
      <div className="flex h-full flex-col">
        <ul className="mb-3 list-disc space-y-1 pl-4 text-sm">
          <li>Wizytówka (5 sekcji): 600-900 zł</li>
          <li>Strona firmowa (10 podstron): 2 400-3 200 zł</li>
          <li>Landing sprzedażowy (storytelling): 1 200-1 800 zł</li>
          <li>Dodatkowa podstrona: 250-400 zł</li>
        </ul>
        <div className="mt-auto">
          <Button arrow link="/kontakt">
            Wyceń treści do strony
          </Button>
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
          <li>3 000 zzs (SEO): 300-400 zł</li>
          <li>6 000 zzs (analiza): 600-800 zł</li>
          <li>Pakiet 4 artykułów: 1 000-3 000 zł</li>
          <li>Pakiet 8 artykułów: 2 000-5 000 zł</li>
        </ul>
        <div className="mt-auto">
          <Button arrow link="/kontakt">
            Zamów artykuły
          </Button>
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
          <li>Produkt prosty (1 000 zzs): 40-60 zł</li>
          <li>Produkt premium (2 000 zzs): 80-120 zł</li>
          <li>Opis kategorii (3 000 zzs): 200-300 zł</li>
          <li>Pakiet startowy (50 produktów): 1 800-2 400 zł</li>
        </ul>
        <div className="mt-auto">
          <Button arrow link="/kontakt">
            Wyceń treści do sklepu
          </Button>
        </div>
      </div>
    ),
  },
  {
    icon: <RiShareForwardLine className="h-8 w-8" />,
    title: 'Social media: copy',
    subtitle: 'od 30 zł',
    description: (
      <div className="flex h-full flex-col">
        <ul className="mb-3 list-disc space-y-1 pl-4 text-sm">
          <li>Post (copy + hashtagi): 60-120 zł</li>
          <li>Story (CTA): 30-60 zł</li>
          <li>Rolka (scenariusz 30 s): 100-200 zł</li>
          <li>Pakiet 12 postów + 12 stories: 600-1 000 zł</li>
        </ul>
        <div className="mt-auto">
          <Button arrow link="/kontakt">
            Zamów copy do social
          </Button>
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
          <li>Oferta sprzedażowa (PDF, 5-10 str.): 800-1 400 zł</li>
          <li>Case study (ok. 3 000 zzs): 400-600 zł</li>
          <li>Prezentacja sprzedażowa (10 slajdów): 600-1 000 zł</li>
        </ul>
        <div className="mt-auto">
          <Button arrow link="/kontakt">
            Poproś o ofertę PDF
          </Button>
        </div>
      </div>
    ),
  },
  {
    icon: <RiBookOpenLine className="h-8 w-8" />,
    title: 'Język marki i archetyp',
    subtitle: 'w cenie',
    description: (
      <div className="flex h-full flex-col">
        <ul className="mb-3 list-disc space-y-1 pl-4 text-sm">
          <li>Dopasowanie tonu do archetypu</li>
          <li>Spójny styl: strona, social, e-commerce</li>
          <li>Prosty język bez żargonu</li>
        </ul>
        <div className="mt-auto">
          <Button arrow link="/kontakt">
            Ustalmy język marki
          </Button>
        </div>
      </div>
    ),
  },
  {
    icon: <RiLightbulbFlashLine className="h-8 w-8" />,
    title: 'CTA i nagłówki psychologiczne',
    subtitle: 'w cenie',
    description: (
      <div className="flex h-full flex-col">
        <ul className="mb-3 list-disc space-y-1 pl-4 text-sm">
          <li>Hooki pod intencje i potrzeby</li>
          <li>Struktury sprzedażowe (Why → How → What)</li>
          <li>Warianty do A/B testów</li>
        </ul>
        <div className="mt-auto">
          <Button arrow link="/kontakt">
            Zaprojektujmy CTA
          </Button>
        </div>
      </div>
    ),
  },
  {
    icon: <RiPencilLine className="h-8 w-8" />,
    title: 'Korekta i redakcja',
    subtitle: 'w cenie',
    description: (
      <div className="flex h-full flex-col">
        <ul className="mb-3 list-disc space-y-1 pl-4 text-sm">
          <li>Korekta językowa i stylistyczna</li>
          <li>SEO on-page w tekście</li>
          <li>Ujednolicenie formatowania</li>
        </ul>
        <div className="mt-auto">
          <Button arrow link="/kontakt">
            Prześlij tekst do korekty
          </Button>
        </div>
      </div>
    ),
  },
  {
    icon: <RiChatQuoteLine className="h-8 w-8" />,
    title: 'Instrukcje i wytyczne',
    subtitle: 'w cenie',
    description: (
      <div className="flex h-full flex-col">
        <ul className="mb-3 list-disc space-y-1 pl-4 text-sm">
          <li>Guidelines do dalszego pisania</li>
          <li>Szablony sekcji i akapitów</li>
          <li>Lista kontrolna publikacji</li>
        </ul>
        <div className="mt-auto">
          <Button arrow link="/kontakt">
            Poproś o wytyczne
          </Button>
        </div>
      </div>
    ),
  },
];

export default function ContentSteps() {
  return (
    <SectionSteps
      items={items}
      title="Oferta treści"
      subtitle="Czytelnie i skutecznie"
      description="Teksty, które pozycjonują i sprzedają - od strony www, przez blog, po e-commerce i social media."
      btnOne="Skontaktuj się"
      btnOneVariant="dark"
      btnOneLink="/kontakt"
    />
  );
}
