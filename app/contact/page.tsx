import { generatePageMetadata } from '@/lib/generatePageMetadata';

import ContactForm from '@/components/sections/ContactForm';
import HeroBaner from '@/components/sections/HeroBaner';
import ContactSteps from '@/components/sections/steps/ContactSteps';
import Gap from '@/components/ui/Gap';

export async function generateMetadata() {
  return generatePageMetadata('contact');
}

export default function ContactPage() {
  return (
    <>
      <HeroBaner
        title="Porozmawiajmy o Twojej firmie"
        description="Skontaktuj się z nami — przygotujemy ofertę i plan działania szyty na miarę"
        backgroundImage="/assets/bg/abstract-bg12.jpg"
        overlay="black"
      />

      <Gap size="sm" />

      <ContactSteps />

      <Gap size="sm" />

      <ContactForm />

      <Gap size="sm" />
    </>
  );
}
