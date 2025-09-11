'use client';

import { RiCodeSSlashFill, RiShoppingCartLine, RiArticleLine, RiPaletteLine, RiFileTextLine, RiMegaphoneLine } from 'react-icons/ri';
import Button from '@/components/ui/Button';
import SectionSteps from '@/components/ui/sections/SectionSteps';

const items = [
  {
    icon: <RiCodeSSlashFill className="h-8 w-8" />,
    title: 'Strony internetowe',
    description: (
      <div className="flex h-full flex-col">
        <p className="mb-3">Nowoczesne, czytelne i dostosowane do każdego urządzenia. W cenie treści, SEO i szkolenie z obsługi.</p>
        <div className="mt-auto">
          <Button arrow link="/services/www">
            Sprawdź ofertę
          </Button>
        </div>
      </div>
    ),
  },
  {
    icon: <RiShoppingCartLine className="h-8 w-8" />,
    title: 'Sklepy internetowe',
    description: (
      <div className="flex h-full flex-col">
        <p className="mb-3">Sklep gotowy do sprzedaży - płatności online, łatwa obsługa produktów i wsparcie w rozwoju biznesu.</p>
        <div className="mt-auto">
          <Button arrow link="/services/shops">
            Sprawdź ofertę
          </Button>
        </div>
      </div>
    ),
  },
  {
    icon: <RiArticleLine className="h-8 w-8" />,
    title: 'Blogi',
    description: (
      <div className="flex h-full flex-col">
        <p className="mb-3">Blog, który buduje widoczność w Google i pozycję eksperta. Proste zarządzanie i gotowe pomysły na treści.</p>
        <div className="mt-auto">
          <Button arrow link="/services/blog-seo">
            Sprawdź ofertę
          </Button>
        </div>
      </div>
    ),
  },
  {
    icon: <RiPaletteLine className="h-8 w-8" />,
    title: 'Grafika',
    description: (
      <div className="flex h-full flex-col">
        <p className="mb-3">Logo, identyfikacja wizualna, materiały do internetu i do druku. Spójny wygląd Twojej marki w każdym kanale.</p>
        <div className="mt-auto">
          <Button arrow link="/services/design">
            Sprawdź ofertę
          </Button>
        </div>
      </div>
    ),
  },
  {
    icon: <RiFileTextLine className="h-8 w-8" />,
    title: 'Tworzenie treści',
    description: (
      <div className="flex h-full flex-col">
        <p className="mb-3">Artykuły, opisy, treści do social mediów. Wszystko pisane prostym językiem, by Twoja marka była bliżej ludzi.</p>
        <div className="mt-auto">
          <Button arrow link="/services/content">
            Sprawdź ofertę
          </Button>
        </div>
      </div>
    ),
  },
  {
    icon: <RiMegaphoneLine className="h-8 w-8" />,
    title: 'Marketing',
    description: (
      <div className="flex h-full flex-col">
        <p className="mb-3">Pozycjonowanie, reklamy i prowadzenie social mediów. Budujemy widoczność i przyciągamy klientów do Twojej firmy.</p>
        <div className="mt-auto">
          <Button arrow link="/services/marketing">
            Sprawdź ofertę
          </Button>
        </div>
      </div>
    ),
  },
];

export default function ServicesSteps() {
  return <SectionSteps items={items} title="Poznaj nasze usługi" subtitle="Partner" description="Sprawdź szczegóły naszej oferty lub umów sie na bezpłatne konsultacje" overlay="none" />;
}
