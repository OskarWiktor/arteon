import HeroBaner from '@/components/sections/HeroBaner';
import SectionInfo from '@/components/ui/sections/SectionInfo';

import SectionBasic from '@/components/ui/sections/SectionBasic';
import { Metadata } from 'next';
import FaqWebsite from '@/components/sections/faqs/FaqWebsite';

export const metadata: Metadata = {
  title: 'Strony internetowe | Arteon',
  description: 'Tworzymy nowoczesne, szybkie i responsywne strony internetowe dopasowane do Twoich potrzeb. Arteon to połączenie estetyki, funkcjonalności i skuteczności',
  keywords: [
    'strony internetowe Arteon',
    'strony internetowe',
    'tworzenie stron internetowych',
    'projektowanie stron www',
    'nowoczesne strony internetowe',
    'responsywna strona internetowa',
    'strona firmowa',
    'landing page',
    'projekt strony internetowej',
    'oferta tworzenia stron',
    'agencja web design',
    'web development',
    'projekt UX UI',
    'optymalizacja strony www',
    'strony WordPress',
    'strony Webflow',
    'strony Custom Code',
    'strony bez szablonów',
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

      <FaqWebsite />

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
