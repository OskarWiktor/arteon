import HeroBanner from '@/components/sections/HeroBanner';
import CTABanner from '@/components/sections/CTABanner';
import ContactForm from '@/components/sections/ContactForm';
import Gap from '@/components/ui/Gap';
import SectionInfo from '@/components/ui/sections/SectionInfo';
import SectionSteps from '@/components/ui/sections/SectionSteps';
import Wrapper from '@/components/ui/Wrapper';
import { toAbsoluteUrl } from '@/utils/absoluteUrl';
import { RiMailLine, RiMapPinTimeLine } from 'react-icons/ri';

export const metadata = {
  title: 'Contact - Arteon',
  description: "Vous avez une question sur nos outils\u00a0? Vous avez trouvé un bug ou avez une suggestion pour un nouvel outil\u00a0? Écrivez-nous — nous répondons sous un jour ouvrable.",
  alternates: {
    canonical: toAbsoluteUrl('/fr/contact'),
    languages: {
      en: toAbsoluteUrl('/en/contact'),
      de: toAbsoluteUrl('/de/kontakt'),
      es: toAbsoluteUrl('/es/contacto'),
      fr: toAbsoluteUrl('/fr/contact'),
    },
  },
  openGraph: {
    title: 'Contact - Arteon',
    description: "Vous avez une question sur nos outils\u00a0? Vous avez trouvé un bug ou avez une suggestion pour un nouvel outil\u00a0? Écrivez-nous — nous répondons sous un jour ouvrable.",
    url: toAbsoluteUrl('/fr/contact'),
    type: 'website',
  },
};

export default function ContactPage() {
  return (
    <>
      <HeroBanner title="Contact" description="Vous avez une question sur nos outils&nbsp;? Écrivez-nous" backgroundImage="/assets/bg/abstract-bg10.webp" overlay="black" variant="center" />

      <Wrapper>
        <Gap size="sm" />

        <SectionInfo title="Une question ou une suggestion&nbsp;?">
          <p>
            Nous sommes ravis de recevoir vos retours sur nos outils. Si vous avez trouvé un bug, avez une idée pour un nouvel outil ou avez besoin d&apos;aide — écrivez-nous à{' '}
            <a href="mailto:kontakt@arteonagency.pl" className="inline-link">
              kontakt@arteonagency.pl
            </a>
            . Nous répondons sous un jour ouvrable.
          </p>
        </SectionInfo>

        <Gap variant="line" />

        <ContactForm title="Envoyez-nous un message" locale="fr" />

        <Gap variant="line" />

        <SectionSteps
          variant="contact"
          items={[
            {
              title: 'E-mail',
              icon: <RiMailLine className="h-6 w-6" />,
              description: (
                <p>
                  <a href="mailto:kontakt@arteonagency.pl">kontakt@arteonagency.pl</a>
                </p>
              ),
            },
            {
              title: 'Horaires',
              icon: <RiMapPinTimeLine className="h-6 w-6" />,
              description: <p>Lundi – Vendredi&nbsp;: 8h00 – 16h00 (CET)</p>,
            },
          ]}
          title="Coordonnées"
        />

        <Gap size="sm" />
      </Wrapper>

      <CTABanner
        title="Retour aux outils"
        description="10 outils en ligne gratuits pour travailler avec les images, le texte et les couleurs"
        btnOne="Outils"
        btnOneLink="/fr/outils"
        backgroundImage="/assets/bg/abstract-bg10.webp"
        overlay="black"
      />
    </>
  );
}
