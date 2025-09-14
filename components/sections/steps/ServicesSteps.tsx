'use client';

import { RiCodeSSlashFill, RiShoppingCartLine, RiArticleLine, RiPaletteLine, RiFileTextLine, RiMegaphoneLine } from 'react-icons/ri';
import Button from '@/components/ui/Button';
import SectionSteps from '@/components/ui/sections/SectionSteps';

const items = [
  {
    icon: <RiCodeSSlashFill className="h-8 w-8" />,
    title: 'Strony internetowe',
    subtitle: 'od 1 600 zł',
    description: (
      <div className="flex h-full flex-col">
        <ul className="mb-3 list-disc space-y-1 pl-4 text-sm">
          <li>Nowoczesny design + SEO w cenie</li>
          <li>Darmowe wsparcie prawne</li>
          <li>Bezpłatne szkolenie PDF z obsługi strony</li>
          <li>Dopasowanie technologii do Twoich celów</li>
        </ul>
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
    subtitle: 'od 4 000 zł',
    description: (
      <div className="flex h-full flex-col">
        <ul className="mb-3 list-disc space-y-1 pl-4 text-sm">
          <li>Płatności online i szybki checkout</li>
          <li>Łatwa edycja produktów</li>
          <li>Darmowe wsparcie prawne</li>
          <li>Bezpłatne szkolenie PDF z obsługi strony</li>
        </ul>
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
    subtitle: 'od 2 900 zł',
    description: (
      <div className="flex h-full flex-col">
        <ul className="mb-3 list-disc space-y-1 pl-4 text-sm">
          <li>Redakcja treści i SEO w cenie</li>
          <li>Proste systemy tworzenia treści</li>
          <li>Darmowe wsparcie prawne</li>
          <li>Bezpłatne szkolenie PDF z obsługi strony</li>
        </ul>
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
    subtitle: 'od 180 zł',
    description: (
      <div className="flex h-full flex-col">
        <ul className="mb-3 list-disc space-y-1 pl-4 text-sm">
          <li>Loga i identyfikacja wizualna</li>
          <li>Materiały do druku i online</li>
          <li>Szablony pod social media</li>
          <li>Pliki wektorowe i instrukcje w cenie</li>
        </ul>
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
    subtitle: 'od 300 zł',
    description: (
      <div className="flex h-full flex-col">
        <ul className="mb-3 list-disc space-y-1 pl-4 text-sm">
          <li>Artykuły eksperckie</li>
          <li>Treści do stron i e-commerce</li>
          <li>Posty i scenariusze do social mediów</li>
          <li>Język marki dopasowany do odbiorców</li>
        </ul>
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
    subtitle: 'od 700 zł',
    description: (
      <div className="flex h-full flex-col">
        <ul className="mb-3 list-disc space-y-1 pl-4 text-sm">
          <li>Kompleksowe SEO i audyty</li>
          <li>Reklamy FB / IG / Google</li>
          <li>Strategie i archetypy marki</li>
          <li>Automatyzacje i raporty efektów</li>
        </ul>
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
  return (
    <SectionSteps
      items={items}
      title="Poznaj nasze usługi"
      subtitle="Partner"
      description="Sprawdź szczegóły naszej oferty lub umów sie na bezpłatne konsultacje"
      btnOne="Skontaktuj się"
      btnOneVariant="dark"
      btnOneLink="/contact"
    />
  );
}
