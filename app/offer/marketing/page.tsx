import HeroBaner from '@/components/components/HeroBaner';
import SectionInfo from '@/components/ui/SectionInfo';

import Mission from '@/components/components/Mission';
import SectionBasic from '@/components/ui/SectionBasic';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Marketing internetowy | Arteon',
  description:
    'Skuteczne strategie marketingu internetowego i reklamy online, które zwiększają widoczność Twojej marki i generują więcej klientów. Kompleksowa obsługa SEO, Google Ads, social media i więcej.',
  keywords: [
    'marketing internetowy Arteon',
    'marketing internetowy',
    'reklama online',
    'kampanie Google Ads',
    'pozycjonowanie SEO',
    'pozycjonowanie stron internetowych',
    'marketing w social media',
    'zarządzanie reklamami',
    'strategia marketingowa online',
    'content marketing',
    'email marketing',
    'analiza i optymalizacja kampanii',
    'marketing dla firm',
    'kampanie reklamowe online',
    'remarketing',
    'marketing dla e-commerce',
  ],
};

export default function Page() {
  return (
    <>
      <HeroBaner
        title="Lorem Ipsum Lorem Ipsum"
        description="njkbasdka sbdjabsd bjkbsajdb"
        backgroundImage="/assets/test.jpg"
        buttonTopOne="test1"
        buttonTopTwo="test2"
        buttonTopThree="test3"
        buttonTopFour="test4"
      />
      <SectionInfo title="Lorem ipsum uca sdilaw" description="sjdhjakhsd shduhas bda wd wkdw ahjw" />
      <Mission />
      <SectionBasic
        title="Gotowy, by stworzyć projekt dopasowany do Twojej marki?"
        description="Opisz swoją działalność a my przygotujemy dla Ciebie bezpłatny plan działania"
        imageSrc="/assets/test.jpg"
        imageAlt="Zaproszenie do kontaktu"
        buttonText="Przejdź do formularza"
        buttonLink="/kontakt"
      ></SectionBasic>
    </>
  );
}
