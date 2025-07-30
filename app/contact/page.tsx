import { generatePageMetadata } from '@/lib/generatePageMetadata';

import ContactForm from '@/components/sections/ContactForm';
import HeroBaner from '@/components/sections/HeroBaner';
import SectionBasic from '@/components/ui/sections/SectionBasic';
import ContactSteps from '@/components/sections/steps/ContactSteps';

export async function generateMetadata() {
  return generatePageMetadata('contact');
}

export default function Page() {
  return (
    <>
      <HeroBaner title="Porozmawiajmy o Twojej firmie" description="Skontaktuj się z nami — przygotujemy ofertę i plan działania szyty na miarę" backgroundImage="/assets/test.jpg" />

      <ContactSteps />

      <ContactForm />

      <SectionBasic
        title="Szybka wycena"
        description="Zastanawiasz się jaki może być potencjalny koszt Twojego projektu? Kliknij i przejdź do naszego bezpłatnego kalkulatora!"
        imageSrc="/assets/test.jpg"
        imageAlt="Kalkulator"
        buttonLink="/calculator"
        buttonText="Kalkulator"
      />
    </>
  );
}
