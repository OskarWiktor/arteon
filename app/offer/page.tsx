import HeroBaner from '@/components/sections/HeroBaner';
import SectionInfo from '@/components/ui/sections/SectionInfo';

import SectionBasic from '@/components/ui/sections/SectionBasic';
import { Metadata } from 'next';
import OfferSubPages from '@/components/sections/OfferSubPages';

export const metadata: Metadata = {
  title: 'Oferta| Arteon',
  description: 'Poznaj pełną ofertę Arteon: tworzenie stron i sklepów internetowych, projektowanie graficzne, content marketing, kampanie reklamowe i kompleksowy branding.',
  keywords: [
    'oferta Arteon',
    'usługi kreatywne',
    'tworzenie stron internetowych',
    'strony internetowe',
    'sklepy internetowe',
    'tworzenie sklepów internetowych',
    'tworzenie blogów internetowych',
    'grafika komputerowa',
    'branding i identyfikacja wizualna',
    'copywriting i content marketing',
    'reklamy Google Ads',
    'social media marketing',
    'projektowanie logo',
    'tworzenie treści na strony',
    'kompleksowa oferta marketingowa',
    'agencja kreatywna',
  ],
};

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
