import type { Metadata } from 'next';
import HeroBaner from '@/components/components/HeroBaner';
import Calculator from '@/components/components/Calculator';
import SectionBasic from '@/components/ui/SectionBasic';

export const metadata: Metadata = {
  title: 'Kalkulator wycen | Arteon',
  description: 'Skorzystaj z kalkulatora Arteon i sprawdź koszt stworzenia lub przebudowy strony, sklepu, bloga, grafiki, treści oraz działań marketingowych online.',
  keywords: [
    'kalkulator wycen',
    'wycena projektu',
    'wycena strony internetowej',
    'wycena sklepu internetowego',
    'wycena bloga',
    'koszt rozbudowy strony',
    'koszt przebudowy strony',
    'wycena tworzenia treści',
    'wycena artykułu',
    'copywriting na stronę',
    'wycena reklamy w Google',
    'wycena pozycjonowania SEO',
    'wycena grafik na zamówienie',
    'projekt graficzny wycena',
    'koszt marketingu online',
  ],
};

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
      ></SectionBasic>
    </>
  );
}
