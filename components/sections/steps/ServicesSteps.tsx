import { RiCodeSSlashFill, RiShoppingCartLine, RiArticleLine, RiPaletteLine, RiFileTextLine, RiMegaphoneLine } from 'react-icons/ri';
import Button from '@/components/ui/buttons/Button';
import SectionSteps from '@/components/ui/sections/SectionSteps';

const ui = {
  pl: {
    title: 'Poznaj nasze usługi',
    subtitle: 'Partner',
    description: 'Posiadamy szeroką ofertę, dzięki czemu niezależnie od Twojej branży, celów i budżetu, jesteśmy w stanie zrealizować Twój plan',
    btnOne: 'Skontaktuj się',
    checkOffer: 'Sprawdź ofertę',
    urls: {
      websites: '/uslugi/strony-internetowe',
      shops: '/uslugi/sklepy-internetowe',
      blogs: '/uslugi/blogi-internetowe',
      graphicProjects: '/uslugi/projekty-graficzne',
      contentCreation: '/uslugi/tworzenie-tresci',
      marketing: '/uslugi/marketing',
      contact: '/kontakt',
    },
  },
} as const;

function getItems() {
  const t = ui.pl;
  return [
    {
      icon: <RiCodeSSlashFill className="h-8 w-8" />,
      title: 'Strony internetowe',
      subtitle: 'od 1 600 zł',
      description: (
        <div className="flex h-full flex-col">
          <ul className="mb-3 list-disc space-y-1 pl-4 text-sm">
            <li>Nowoczesny wygląd i redakcja treści pod sprzedaż</li>
            <li>Darmowe wsparcie prawne</li>
            <li>Dopasowanie technologii do Twoich celów</li>
            <li>Bezpłatne szkolenie PDF z obsługi strony</li>
          </ul>
          <div className="mt-auto">
            <Button arrow link={t.urls.websites}>
              {t.checkOffer}
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
            <li>Konfiguracja płatności i dostaw</li>
            <li>Łatwa edycja produktów i kategorii</li>
            <li>Darmowe wsparcie prawne</li>
            <li>Bezpłatne szkolenie PDF dla właściciela sklepu</li>
          </ul>
          <div className="mt-auto">
            <Button arrow link={t.urls.shops}>
              {t.checkOffer}
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
            <li>Proste systemy tworzenia treści</li>
            <li>Techniczne SEO w cenie</li>
            <li>Darmowe wsparcie prawne</li>
            <li>Bezpłatne szkolenie PDF z obsługi bloga</li>
          </ul>
          <div className="mt-auto">
            <Button arrow link={t.urls.blogs}>
              {t.checkOffer}
            </Button>
          </div>
        </div>
      ),
    },
    {
      icon: <RiPaletteLine className="h-8 w-8" />,
      title: 'Projekty graficzne',
      subtitle: 'od 180 zł',
      description: (
        <div className="flex h-full flex-col">
          <ul className="mb-3 list-disc space-y-1 pl-4 text-sm">
            <li>Loga i identyfikacje wizualne</li>
            <li>Materiały do druku</li>
            <li>Materiały online</li>
            <li>Makiety stron</li>
          </ul>
          <div className="mt-auto">
            <Button arrow link={t.urls.graphicProjects}>
              {t.checkOffer}
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
            <Button arrow link={t.urls.contentCreation}>
              {t.checkOffer}
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
            <Button arrow link={t.urls.marketing}>
              {t.checkOffer}
            </Button>
          </div>
        </div>
      ),
    },
  ];
}

export default function ServicesSteps() {
  const t = ui.pl;
  const items = getItems();
  return <SectionSteps items={items} title={t.title} subtitle={t.subtitle} description={t.description} btnOne={t.btnOne} btnOneVariant="accent" btnOneLink={t.urls.contact} />;
}
