import HeroBaner from '@/components/components/HeroBaner';
import SectionInfo from '@/components/ui/SectionInfo';

import SectionBasic from '@/components/ui/SectionBasic';
import { Metadata } from 'next';
import FaqShop from '@/components/components/FaqShop';

export const metadata: Metadata = {
  title: 'Sklepy internetowe | Arteon',
  description: 'Projektujemy funkcjonalne i atrakcyjne sklepy internetowe, które zwiększają sprzedaż i ułatwiają zarządzanie. Arteon – Twój partner w e-commerce.',
  keywords: [
    'sklepy internetowe Arteon',
    'sklepy internetowe',
    'tworzenie sklepów online',
    'projektowanie sklepów internetowych',
    'sklep internetowy na zamówienie',
    'platforma e-commerce',
    'sklep WooCommerce',
    'sklep Webflow',
    'sklep Next',
    'sklep z integracją płatności',
    'responsywny sklep internetowy',
    'optymalizacja sklepu online',
    'projekt UX dla sklepu',
    'sklep internetowy z obsługą',
    'zwiększenie sprzedaży online',
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
      <FaqShop />
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
