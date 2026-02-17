import { RiCodeSSlashFill, RiShoppingCartLine, RiArticleLine, RiPaletteLine, RiFileTextLine, RiMegaphoneLine } from 'react-icons/ri';
import Button from '@/components/ui/buttons/Button';
import SectionSteps from '@/components/ui/sections/SectionSteps';

function getItems() {
  return [
    {
      icon: <RiCodeSSlashFill className="h-8 w-8" />,
      title: 'Strony internetowe',
      description: (
        <div className="flex h-full flex-col">
          <ul className="mb-3 list-disc space-y-1 pl-4 text-sm">
            <li>Nowoczesny wygląd i redakcja treści pod sprzedaż</li>
            <li>Darmowe wsparcie prawne</li>
            <li>Dopasowanie technologii do Twoich celów</li>
            <li>Bezpłatne szkolenie PDF z obsługi strony</li>
          </ul>
          <div className="mt-auto">
            <Button arrow link="/uslugi/tworzenie-stron-wordpress">
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
          <ul className="mb-3 list-disc space-y-1 pl-4 text-sm">
            <li>Konfiguracja płatności i dostaw</li>
            <li>Łatwa edycja produktów i kategorii</li>
            <li>Darmowe wsparcie prawne</li>
            <li>Bezpłatne szkolenie PDF dla właściciela sklepu</li>
          </ul>
          <div className="mt-auto">
            <Button arrow link="/uslugi/sklepy-internetowe">
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
          <ul className="mb-3 list-disc space-y-1 pl-4 text-sm">
            <li>Proste systemy tworzenia treści</li>
            <li>Techniczne SEO w cenie</li>
            <li>Darmowe wsparcie prawne</li>
            <li>Bezpłatne szkolenie PDF z obsługi bloga</li>
          </ul>
          <div className="mt-auto">
            <Button arrow link="/uslugi/blogi-internetowe">
              Sprawdź ofertę
            </Button>
          </div>
        </div>
      ),
    },
    {
      icon: <RiPaletteLine className="h-8 w-8" />,
      title: 'Projekty graficzne',
      description: (
        <div className="flex h-full flex-col">
          <ul className="mb-3 list-disc space-y-1 pl-4 text-sm">
            <li>Loga i identyfikacje wizualne</li>
            <li>Materiały do druku</li>
            <li>Materiały online</li>
            <li>Makiety stron</li>
          </ul>
          <div className="mt-auto">
            <Button arrow link="/uslugi/projekty-graficzne">
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
          <ul className="mb-3 list-disc space-y-1 pl-4 text-sm">
            <li>Artykuły eksperckie</li>
            <li>Treści do stron i e-commerce</li>
            <li>Posty i scenariusze do mediów społecznościowych</li>
            <li>Język marki dopasowany do odbiorców</li>
          </ul>
          <div className="mt-auto">
            <Button arrow link="/uslugi/tworzenie-tresci">
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
          <ul className="mb-3 list-disc space-y-1 pl-4 text-sm">
            <li>Kompleksowe SEO i audyty</li>
            <li>Reklamy FB / IG / Google</li>
            <li>Strategie i archetypy marki</li>
            <li>Automatyzacje i raporty efektów</li>
          </ul>
          <div className="mt-auto">
            <Button arrow link="/uslugi/marketing">
              Sprawdź ofertę
            </Button>
          </div>
        </div>
      ),
    },
  ];
}

export default function ServicesSteps() {
  const items = getItems();
  return (
    <SectionSteps
      items={items}
      title="Poznaj nasze usługi"
      subtitle="Partner"
      description="Posiadamy szeroką ofertę, dzięki czemu niezależnie od Twojej branży, celów i budżetu, jesteśmy w stanie zrealizować Twój plan"
      btnOne="Skontaktuj się"
      btnOneVariant="accent"
      btnOneLink="/kontakt"
    />
  );
}
