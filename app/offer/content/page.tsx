import HeroBaner from '@/components/sections/HeroBaner';
import SectionInfo from '@/components/ui/sections/SectionInfo';

import SectionBasic from '@/components/ui/sections/SectionBasic';
import { Metadata } from 'next';
import FaqContent from '@/components/sections/faqs/FaqContent';

export const metadata: Metadata = {
  title: 'Tworzenie treści | Arteon',
  description: 'Tworzenie treści dla stron internetowych, sklepów, blogów i mediów społecznościowych. Skuteczny content, który angażuje, sprzedaje i wzmacnia Twoją markę online.',
  keywords: [
    'tworzenie treści Arteon',
    'tworzenie treści',
    'content marketing',
    'teksty na stronę internetową',
    'opisy produktów do sklepu',
    'artykuły blogowe',
    'copywriting SEO',
    'treści do social mediów',
    'pisanie postów na Facebooka i Instagrama',
    'strategie contentowe',
    'pisanie tekstów sprzedażowych',
    'opisy usług',
    'redakcja i korekta treści',
    'treści na landing page',
    'kompleksowy content dla firm',
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
      <FaqContent />
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
