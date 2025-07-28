import HeroBaner from '@/components/sections/HeroBaner';
import SectionInfo from '@/components/ui/sections/SectionInfo';

import SectionBasic from '@/components/ui/sections/SectionBasic';
import { Metadata } from 'next';
import FaqBlog from '@/components/sections/faqs/FaqBlog';

export const metadata: Metadata = {
  title: 'Blogi internetowe | Arteon',
  description: 'Tworzymy funkcjonalne i estetyczne blogi internetowe, które przyciągają czytelników i wspierają Twoją markę. Profesjonalna budowa bloga dostosowana do Twoich potrzeb.',
  keywords: [
    'blogi internetowe Arteon',
    'blogi internetowe',
    'tworzenie blogów',
    'projektowanie blogów internetowych',
    'blog na zamówienie',
    'platforma blogowa',
    'blog WordPress',
    'blog z indywidualnym designem',
    'blog firmowy',
    'optymalizacja bloga',
    'blog responsywny',
    'zarządzanie blogiem',
    'blog SEO',
    'blog dla marki osobistej',
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
      <FaqBlog />
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
