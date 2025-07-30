import { generatePageMetadata } from '@/lib/generatePageMetadata';

import HeroBaner from '@/components/sections/HeroBaner';
import Calculator from '@/components/sections/Calculator';
import SectionBasic from '@/components/ui/sections/SectionBasic';

export async function generateMetadata() {
  return generatePageMetadata('calculator');
}

export default function Page() {
  return (
    <>
      <HeroBaner title="Kalkulator wycen" description="Sprawdź, ile kosztuje Twój wymarzony projekt w kilka sekund" backgroundImage="/assets/test.jpg" />

      <Calculator />

      <SectionBasic
        title="Gotowy, by zacząć projekt?"
        description="Opisz swoje wymagania a my przyślemy dedykowaną ofertę!"
        imageSrc="/assets/test.jpg"
        imageAlt="Zaproszenie do kontaktu"
        buttonText="Kontakt"
        buttonLink="/contact"
      />
    </>
  );
}
