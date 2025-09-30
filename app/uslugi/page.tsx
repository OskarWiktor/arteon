import HeroBaner from '@/components/sections/HeroBaner';
import Gap from '@/components/ui/Gap';
import ServicesSteps from '@/components/sections/steps/ServicesSteps';
import Wrapper from '@/components/ui/Wrapper';

export const metadata = {
  title: 'Usługi: strony, sklepy, treści, grafika i marketing | Arteon',
  description: 'Komplet usług wokół Twojej strony: projekt, wdrożenie, treści, grafika i marketing. Jasne pakiety i wsparcie po wdrożeniu.',
  keywords: ['tworzenie stron', 'tworzenie sklepów', 'projektowanie logo', 'treści na stronę', 'marketing internetowy', 'widoczność w Google'],
  alternates: { canonical: '/uslugi' },
  openGraph: {
    title: 'Usługi Arteon - wszystko w jednym miejscu',
    description: 'Strona, sklep, treści i marketing w jednym procesie. Przejrzyste zasady i gwarancja.',
    url: 'https://www.arteonagency.pl/uslugi',
    type: 'website',
  },
} as const;

export default function OfferPage() {
  return (
    <>
      <HeroBaner backgroundImage="/assets/bg/abstract-bg12.webp" overlay="black" title="Nasze usługi" variant="center" />

      <Wrapper>
        <Gap size="sm" />

        <ServicesSteps />

        <Gap size="sm" />
      </Wrapper>
    </>
  );
}
