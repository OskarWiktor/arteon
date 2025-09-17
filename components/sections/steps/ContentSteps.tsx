'use client';

import { RiFileTextLine, RiArticleLine, RiShoppingCartLine, RiShareForwardLine, RiFilePdfLine, RiBookOpenLine, RiChatQuoteLine, RiPencilLine, RiLightbulbFlashLine } from 'react-icons/ri';
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
          <li>Piszemy treści do stron, które jasno pokazują ofertę</li>
          <li>Budujemy zaufanie i prowadzimy klienta krok po kroku</li>
          <li>Tworzymy landing page, który sprzedaje od pierwszego wejścia</li>
          <li>Dopasowujemy język do Twojej branży i odbiorców</li>
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
          <li>Budują Twój wizerunek jako specjalisty</li>
          <li>Wzmacniają pozycję strony w Google</li>
          <li>Dostarczają klientom wartościowych porad i wiedzy</li>
          <li>Pakiety artykułów zapewniają stały dopływ treści</li>
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
          <li>Opisy, które pokazują korzyści, nie tylko cechy</li>
          <li>Proste teksty dla szybkich decyzji zakupowych</li>
          <li>Rozbudowane opisy premium dla produktów wyższej klasy</li>
          <li>Pakiety opisów przyspieszają start sklepu</li>
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
          <li>Posty, które zatrzymują uwagę i zachęcają do reakcji</li>
          <li>Story z jasnym wezwaniem do działania</li>
          <li>Scenariusze rolek, które zwiększają zasięg</li>
          <li>Gotowe pakiety treści na cały miesiąc</li>
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
          <li>Oferty sprzedażowe, które podkreślają wartość Twojej usługi</li>
          <li>Case studies pokazujące realne efekty</li>
          <li>Prezentacje, które przekonują inwestorów i partnerów</li>
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
          <li>Dopasowujemy ton komunikacji do osobowości marki</li>
          <li>Ujednolicamy styl w każdej publikacji</li>
          <li>Dbamy o prosty, zrozumiały język</li>
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
          <li>Hasła, które od razu przyciągają uwagę</li>
          <li>Struktury sprzedażowe budzące emocje</li>
          <li>Warianty do szybkich testów skuteczności</li>
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
          <li>Poprawiamy błędy językowe i stylistyczne</li>
          <li>Ujednolicamy format i układ treści</li>
          <li>Dostosowujemy tekst pod SEO, by był lepiej widoczny</li>
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
          <li>Dajemy gotowe szablony sekcji i akapitów</li>
          <li>Tworzymy listy kontrolne do publikacji</li>
          <li>Przekazujemy zasady dalszego pisania treści</li>
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
      title="Oferta tworzenia treści"
      subtitle="Czytelnie i skutecznie"
      description="Teksty, które pozycjonują i sprzedają - od strony www, przez blog, po e-commerce i social media."
      btnOne="Skontaktuj się"
      btnOneVariant="dark"
      btnOneLink="/kontakt"
    />
  );
}
