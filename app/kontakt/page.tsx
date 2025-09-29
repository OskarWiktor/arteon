import ContactForm from '@/components/sections/ContactForm';
import HeroBaner from '@/components/sections/HeroBaner';
import ContactSteps from '@/components/sections/steps/ContactSteps';
import Gap from '@/components/ui/Gap';
import ContactInfo from '@/components/sections/steps/ContactInfoSteps';
import Wrapper from '@/components/ui/Wrapper';

export const metadata = {
  title: 'Kontakt - wycena strony, sklepu i kampanii | Arteon',
  description: 'Napisz, czego potrzebujesz. Przygotujemy darmową wycenę i plan działań dla Twojej marki - Kraków i cała Polska.',
  keywords: ['wycena strony', 'wycena sklepu', 'kontakt agencja', 'projekt graficzny', 'kampanie online'],
  alternates: { canonical: '/kontakt' },
  openGraph: {
    title: 'Porozmawiajmy o Twoim projekcie - Arteon',
    description: 'Szybka wycena i jasny plan. Transparentne zasady i gwarancja.',
    url: 'https://www.arteonagency.pl/kontakt',
    type: 'website',
  },
} as const;

export default function ContactPage() {
  return (
    <>
      <HeroBaner
        title="Porozmawiajmy o Twojej firmie"
        variant="center"
        description="Skontaktuj się z nami - przygotujemy ofertę i plan działania szyty na miarę"
        backgroundImage="/assets/bg/abstract-bg10.webp"
        overlay="black"
      />

      <Wrapper>
        <Gap size="sm" />

        <ContactSteps />

        <Gap size="sm" />

        <ContactForm />

        <Gap variant="line" />

        <ContactInfo />

        <Gap size="sm" />
      </Wrapper>
    </>
  );
}
