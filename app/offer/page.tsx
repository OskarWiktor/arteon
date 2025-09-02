import { generatePageMetadata } from '@/lib/generatePageMetadata';

import HeroBaner from '@/components/sections/HeroBaner';
import SectionInfo from '@/components/ui/sections/SectionInfo';
import SectionBasic from '@/components/ui/sections/SectionBasic';
import OfferSubPages from '@/components/sections/OfferSubPages';
import Gap from '@/components/ui/Gap';

export async function generateMetadata() {
  return generatePageMetadata('offer');
}

export default function Page() {
  return (
    <>
      <HeroBaner backgroundImage="/assets/bg/abstract-bg12.jpg" overlay="black" title="Lorem Ipsum Lorem Ipsum" description="njkbasdka sbdjabsd bjkbsajdb asdfasdas asf fawef eaf esf" />

      <Gap size="sm" />

      <SectionInfo id="abcddd" title="Lorem ipsum uca sdilaw" description="sjdhjakhsd shduhas bda wd wkdw ahjw" />

      <Gap />

      <OfferSubPages />

      <Gap />

      <SectionBasic
        id="go-contact"
        title="Gotowy, by stworzyć projekt dopasowany do Twojej marki?"
        description="Opisz swoją działalność a my przygotujemy dla Ciebie bezpłatny plan działania"
        imageSrc="/assets/test.jpg"
        imageAlt="Zaproszenie do kontaktu"
        btnOne="Przejdź do formularza"
        btnOneLink="/kontakt"
      ></SectionBasic>

      <Gap size="sm" />
    </>
  );
}
