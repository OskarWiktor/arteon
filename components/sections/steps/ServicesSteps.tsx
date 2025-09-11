'use client';

import { TbWorld } from 'react-icons/tb';
import { FiShoppingCart } from 'react-icons/fi';
import { HiOutlineSearch, HiSpeakerphone } from 'react-icons/hi';
import { TfiWrite } from 'react-icons/tfi';
import { MdOutlineDesignServices } from 'react-icons/md';
import Button from '@/components/ui/Button';
import SectionSteps from '@/components/ui/sections/SectionSteps';

const items = [
  {
    icon: <TbWorld className="h-8 w-8" />,
    title: 'Strony internetowe',
    description: (
      <>
        Nowoczesne, czytelne i dostosowane do każdego urządzenia. W cenie treści, SEO i szkolenie z obsługi.
        <div className="mt-3">
          <Button arrow link="/services/www">
            Sprawdź ofertę
          </Button>
        </div>
      </>
    ),
  },
  {
    icon: <FiShoppingCart className="h-8 w-8" />,
    title: 'Sklepy internetowe',
    description: (
      <>
        Sklep gotowy do sprzedaży – płatności online, łatwa obsługa produktów i wsparcie w rozwoju biznesu.
        <div className="mt-3">
          <Button arrow link="/services/shops">
            Sprawdź ofertę
          </Button>
        </div>
      </>
    ),
  },
  {
    icon: <HiOutlineSearch className="h-8 w-8" />,
    title: 'Blogi',
    description: (
      <>
        Blog, który buduje widoczność w Google i pozycję eksperta. Proste zarządzanie i gotowe pomysły na treści.
        <div className="mt-3">
          <Button arrow link="/services/blog-seo">
            Sprawdź ofertę
          </Button>
        </div>
      </>
    ),
  },
  {
    icon: <TfiWrite className="h-8 w-8" />,
    title: 'Tworzenie treści',
    description: (
      <>
        Artykuły, opisy, treści do social mediów. Wszystko pisane prostym językiem, by Twoja marka była bliżej ludzi.
        <div className="mt-3">
          <Button arrow link="/services/content">
            Sprawdź ofertę
          </Button>
        </div>
      </>
    ),
  },
  {
    icon: <MdOutlineDesignServices className="h-8 w-8" />,
    title: 'Grafika',
    description: (
      <>
        Logo, identyfikacja wizualna, materiały do internetu i do druku. Spójny wygląd Twojej marki w każdym kanale.
        <div className="mt-3">
          <Button arrow link="/services/design">
            Sprawdź ofertę
          </Button>
        </div>
      </>
    ),
  },
  {
    icon: <HiSpeakerphone className="h-8 w-8" />,
    title: 'Marketing',
    description: (
      <>
        Pozycjonowanie, reklamy i prowadzenie social mediów. Budujemy widoczność i przyciągamy klientów do Twojej firmy.
        <div className="mt-3">
          <Button arrow link="/services/marketing">
            Sprawdź ofertę
          </Button>
        </div>
      </>
    ),
  },
];

export default function ServicesSteps() {
  return <SectionSteps items={items} title="Poznaj nasze usługi" subtitle="Partner" description="Sprawdź szczegóły naszej oferty lub umów sie na bezpłatne konsultacje" overlay="none" />;
}
