import HeroBanner from '@/components/sections/HeroBanner';
import Button from '@/components/ui/Button';
import Gap from '@/components/ui/Gap';
import SectionInfo from '@/components/ui/sections/SectionInfo';
import SectionSteps from '@/components/ui/sections/SectionSteps';
import Wrapper from '@/components/ui/Wrapper';
import { RiImageEditLine } from 'react-icons/ri';

// type ToolStatus = 'available' | 'soon';

// interface ToolItem {
//   slug: string;
//   name: string;
//   shortDescription: string;
//   category: string;
//   status: ToolStatus;
//   highlight?: string;
// }

// const TOOLS: ToolItem[] = [
//   {
//     slug: 'jpg-png-na-webp',
//     name: 'Konwerter JPG/PNG na WebP',
//     shortDescription: '',
//     category: 'Obrazy i wydajność',
//     status: 'available',
//     highlight: 'Nowość',
//   },
// ];
export const metadata = {
  title: 'Darmowe narzędzia online dla właścicieli stron i firm',
  description: 'Darmowe narzędzia online dla właścicieli stron i marek. Narzędzia, które pomagają przyspieszyć witrynę, poprawić SEO i lepiej planować działania marketingowe.',
  keywords: ['narzędzia dla stron internetowych', 'narzędzia SEO online', 'narzędzia do marketingu internetowego', 'konwerter obrazów WebP', 'optymalizacja strony internetowej', 'Arteon narzędzia'],
  alternates: { canonical: '/narzedzia' },
  openGraph: {
    title: 'Darmowe narzędzia online dla właścicieli stron i firm',
    description: 'Darmowe narzędzia online dla właścicieli stron i marek. Narzędzia, które pomagają przyspieszyć witrynę, poprawić SEO i lepiej planować działania marketingowe.',
    url: 'https://www.arteonagency.pl/narzedzia',
    type: 'website',
    images: [
      {
        url: 'https://www.arteonagency.pl/assets/arteon-logo-on-mockup.webp',
      },
    ],
  },
};

export default function ToolsIndexPage() {
  return (
    <>
      <HeroBanner
        title="Darmowe narzędzia dla właścicieli stron i nie tylko"
        description="W tym miejscu tworzymy użyteczne i w pełni darmowe narzędzia, które pomagają usprawnić prace nad stronami internetowymi i nie tylko. Więcej informacji wkrótce"
        backgroundImage="/assets/arteon-logo-on-mockup.webp"
        overlay="black"
      />
      <Wrapper>
        <Gap size="sm" />

        <SectionSteps
          title="Dostępne narzędzia"
          description="Gotowe do użycia od razu, bez logowania"
          grid="three"
          items={[
            {
              icon: <RiImageEditLine className="h-8 w-8" />,
              title: 'Zamień plik JPG/PNG na WebP',
              description: (
                <div className="flex h-full flex-col">
                  <p>Szybko zmniejsz wagę zdjęć konwertując je do formatu WebP. Bez wysyłania plików na serwer i bez limitu ilości plików.</p>
                  <div className="mt-4">
                    <Button arrow link="/narzedzia/jpg-png-na-webp">
                      Otwórz narzędzie
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />

        <Gap variant="line" />

        <SectionInfo title="Jak korzystać z narzędzi Arteon?" description="Wszystkie narzędzia są tworzone z myślą o właścicielach firm oraz stron">
          <p className="text-xs text-[#5e5e5e]">
            Z czasem ta sekcja będzie rozbudowywana o kolejne moduły: obrazy, SEO, analitykę, wyceny i wiele więcej. Wszystko po to, żebyś miał jedno miejsce, w którym możesz szybko coś policzyć,
            sprawdzić lub przygotować - bez logowania, rejestracji i abonamentu.
          </p>
        </SectionInfo>

        <Gap size="sm" />
      </Wrapper>
    </>
  );
}
