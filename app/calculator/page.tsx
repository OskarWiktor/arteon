import { getPageMetadata } from '@/data/seo';
import type { Metadata } from 'next';
import { headers } from 'next/headers';

import HeroBaner from '@/components/sections/HeroBaner';
import Calculator from '@/components/sections/Calculator';
import SectionBasic from '@/components/ui/sections/SectionBasic';

export async function generateMetadata(): Promise<Metadata> {
  const headersList = await headers();
  const host = headersList.get('host') || '';
  const locale = host.endsWith('.pl') ? 'pl' : 'en';

  return getPageMetadata('calculator', locale);
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
