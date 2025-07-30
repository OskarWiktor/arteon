import { generatePageMetadata } from '@/lib/generatePageMetadata';

import HeroBaner from '@/components/sections/HeroBaner';
import SectionInfo from '@/components/ui/sections/SectionInfo';
import SectionBasic from '@/components/ui/sections/SectionBasic';
import OfferSubPages from '@/components/sections/OfferSubPages';

export async function generateMetadata() {
  return generatePageMetadata('offer');
}

export default function Page() {
  return (
    <>
      <HeroBaner title="Lorem Ipsum Lorem Ipsum" description="njkbasdka sbdjabsd bjkbsajdb" backgroundImage="/assets/test.jpg" />
      <SectionInfo title="Lorem ipsum uca sdilaw" description="sjdhjakhsd shduhas bda wd wkdw ahjw" />

      <OfferSubPages />

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
