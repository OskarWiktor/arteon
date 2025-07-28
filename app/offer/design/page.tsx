import HeroBaner from '@/components/sections/HeroBaner';
import SectionInfo from '@/components/ui/sections/SectionInfo';

import Mission from '@/components/sections/steps/Mission';
import SectionBasic from '@/components/ui/sections/SectionBasic';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Grafika komputerowa | Arteon',
  description:
    'Profesjonalne usługi grafiki komputerowej online i offline: projektowanie logo, identyfikacji wizualnej, materiałów reklamowych oraz grafik na potrzeby stron i mediów społecznościowych.',
  keywords: [
    'grafika komputerowa Arteon',
    'grafika komputerowa',
    'projektowanie logo',
    'identyfikacja wizualna',
    'grafika na strony internetowe',
    'grafika na social media',
    'projekty materiałów reklamowych',
    'drukowane materiały reklamowe',
    'branding',
    'projektowanie wizytówek',
    'grafika reklamowa online',
    'grafika reklamowa offline',
    'grafika wektorowa',
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
