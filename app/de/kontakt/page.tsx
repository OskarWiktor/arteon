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
  title: 'Kontakt - Arteon',
  description: 'Haben Sie eine Frage zu unseren Tools? Einen Fehler gefunden oder einen Vorschlag für ein neues Tool? Schreiben Sie uns — wir antworten innerhalb eines Werktags.',
  alternates: {
    canonical: toAbsoluteUrl('/de/kontakt'),
    languages: {
      en: toAbsoluteUrl('/en/contact'),
      de: toAbsoluteUrl('/de/kontakt'),
      es: toAbsoluteUrl('/es/contacto'),
      fr: toAbsoluteUrl('/fr/contact'),
    },
  },
  openGraph: {
    title: 'Kontakt - Arteon',
    description: 'Haben Sie eine Frage zu unseren Tools? Einen Fehler gefunden oder einen Vorschlag für ein neues Tool? Schreiben Sie uns — wir antworten innerhalb eines Werktags.',
    url: toAbsoluteUrl('/de/kontakt'),
    type: 'website',
  },
};

export default function KontaktPage() {
  return (
    <>
      <HeroBanner title="Kontakt" description="Haben Sie eine Frage zu unseren Tools? Schreiben Sie uns" backgroundImage="/assets/bg/abstract-bg10.webp" overlay="black" variant="center" />

      <Wrapper>
        <Gap size="sm" />

        <SectionInfo title="Frage oder Vorschlag?">
          <p>
            Wir freuen uns über Ihr Feedback zu unseren Tools. Wenn Sie einen Fehler gefunden haben, eine Idee für ein neues Tool haben oder Hilfe benötigen — schreiben Sie uns an{' '}
            <a href="mailto:kontakt@arteonagency.pl" className="inline-link">
              kontakt@arteonagency.pl
            </a>
            . Wir antworten innerhalb eines Werktags.
          </p>
        </SectionInfo>

        <Gap variant="line" />

        <ContactForm title="Nachricht senden" locale="de" />

        <Gap variant="line" />

        <SectionSteps
          variant="contact"
          items={[
            {
              title: 'E-Mail',
              icon: <RiMailLine className="h-6 w-6" />,
              description: (
                <p>
                  <a href="mailto:kontakt@arteonagency.pl">kontakt@arteonagency.pl</a>
                </p>
              ),
            },
            {
              title: 'Geschäftszeiten',
              icon: <RiMapPinTimeLine className="h-6 w-6" />,
              description: <p>Montag – Freitag: 8:00 – 16:00 (MEZ)</p>,
            },
          ]}
          title="Kontaktdaten"
        />

        <Gap size="sm" />
      </Wrapper>

      <CTABanner
        title="Zurück zu den Tools"
        description="10 kostenlose Online-Tools für die Arbeit mit Bildern, Text und Farben"
        btnOne="Werkzeuge"
        btnOneLink="/de/werkzeuge"
        backgroundImage="/assets/bg/abstract-bg10.webp"
        overlay="black"
      />
    </>
  );
}
