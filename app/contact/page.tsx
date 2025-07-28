import type { Metadata } from 'next';
import ContactForm from '@/components/sections/ContactForm';
import HeroBaner from '@/components/sections/HeroBaner';
import SectionBasic from '@/components/ui/sections/SectionBasic';
import ContactSteps from '@/components/sections/steps/ContactSteps';

export const metadata: Metadata = {
  title: 'Kontakt | Arteon',
  description: 'Skontaktuj się z Arteon i opisz swój projekt strony, sklepu lub bloga. Szybko przygotujemy ofertę i plan działania dopasowany do Twoich potrzeb.',
  keywords: [
    'kontakt Arteon',
    'studio kreatywne',
    'tworzenie stron internetowych',
    'projektowanie sklepów internetowych',
    'tworzenie blogów',
    'grafika komputerowa',
    'identyfikacja wizualna',
    'marketing internetowy',
    'reklamy online',
    'oferta strony internetowej',
    'nowa strona firmowa',
    'branding i design',
    'seo i reklama',
    'projekt graficzny',
  ],
};

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
