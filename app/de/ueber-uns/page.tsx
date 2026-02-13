import HeroBanner from '@/components/sections/HeroBanner';
import CTABanner from '@/components/sections/CTABanner';
import Gap from '@/components/ui/Gap';
import SectionInfo from '@/components/ui/sections/SectionInfo';
import SectionSteps from '@/components/ui/sections/SectionSteps';
import Wrapper from '@/components/ui/Wrapper';
import { toAbsoluteUrl } from '@/utils/absoluteUrl';
import { RiLockLine, RiInfinityFill, RiToolsFill, RiRocketLine, RiImageEditLine, RiSearchLine, RiMailLine, RiPaletteLine, RiQrCodeLine } from 'react-icons/ri';

export const metadata = {
  title: 'Über uns – Kostenlose Online-Tools - Arteon',
  description: 'Arteon entwickelt kostenlose Online-Tools für Unternehmer, Webentwickler und alle, die online arbeiten. Ohne Registrierung, ohne Limits, ohne Datei-Upload auf Server.',
  alternates: {
    canonical: toAbsoluteUrl('/de/ueber-uns'),
    languages: {
      en: toAbsoluteUrl('/en/about'),
      de: toAbsoluteUrl('/de/ueber-uns'),
      es: toAbsoluteUrl('/es/sobre-nosotros'),
      fr: toAbsoluteUrl('/fr/a-propos'),
    },
  },
  openGraph: {
    title: 'Über uns – Kostenlose Online-Tools - Arteon',
    description: 'Arteon entwickelt kostenlose Online-Tools für Unternehmer, Webentwickler und alle, die online arbeiten. Ohne Registrierung, ohne Limits, ohne Datei-Upload auf Server.',
    url: toAbsoluteUrl('/de/ueber-uns'),
    type: 'website',
  },
};

export default function UeberUnsPage() {
  return (
    <>
      <HeroBanner title="Über uns" description="Kostenlose Online-Tools für Unternehmer, Designer, Entwickler und alle, die online arbeiten" backgroundImage="/assets/arteon-logo-on-mockup.webp" overlay="black" variant="center" />

      <Wrapper as="article" itemScope itemType="https://schema.org/AboutPage">
        <Gap size="sm" />

        <SectionInfo title="Wer wir sind">
          <p>
            Arteon ist eine polnische Kreativagentur. Neben unserer kommerziellen Arbeit entwickeln und pflegen wir eine wachsende Sammlung kostenloser Online-Tools für Unternehmer, Website-Ersteller,
            Designer, Marketer und alle, die mit digitalen Inhalten arbeiten.
          </p>
          <p className="mt-2">
            Jedes Tool, das wir entwickeln, löst ein konkretes, alltägliches Problem: Bilder konvertieren, Farbkontraste prüfen, Favicons generieren, QR-Codes erstellen und mehr. Unser Ziel ist es, ein
            umfassendes Toolkit aufzubauen, in dem alles an einem Ort zu finden ist — ohne zwischen dutzenden verschiedenen Websites wechseln zu müssen.
          </p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionSteps
          title="Warum wir kostenlose Tools anbieten"
          grid="two"
          items={[
            {
              title: 'Ohne Registrierung, ohne Limits',
              icon: <RiInfinityFill className="text-primary h-6 w-6" />,
              description: <p>Jedes Tool funktioniert sofort im Browser. Kein Konto, keine Anmeldung, keine Zahlung erforderlich.</p>,
            },
            {
              title: 'Datenschutz an erster Stelle',
              icon: <RiLockLine className="text-primary h-6 w-6" />,
              description: <p>Ihre Dateien verlassen nie Ihr Gerät. Die gesamte Verarbeitung erfolgt lokal im Browser — wir senden Ihre Daten nicht an Server.</p>,
            },
            {
              title: 'Aus echten Bedürfnissen entstanden',
              icon: <RiToolsFill className="text-primary h-6 w-6" />,
              description: <p>Jedes Tool entstand aus einem realen Problem, das wir bei der Arbeit an Kundenprojekten hatten. Wenn wir es brauchten, brauchen Sie es wahrscheinlich auch.</p>,
            },
            {
              title: 'Durch Werbung finanziert, für Sie kostenlos',
              icon: <RiRocketLine className="text-primary h-6 w-6" />,
              description: (
                <p>
                  Wir nutzen Google-AdSense-Banner, um die Kosten für Entwicklung und Hosting zu decken. Dank der Werbeeinnahmen können wir alle Tools kostenlos halten und weiter neue entwickeln.
                </p>
              ),
            },
          ]}
        />

        <Gap variant="line" />

        <SectionSteps
          title="Unsere Tools"
          grid="three"
          items={[
            {
              title: 'Bilder & Favicons',
              icon: <RiImageEditLine className="text-primary h-6 w-6" />,
              description: <p>WebP-Konverter, Online-Bildeditor und Favicon-Generator. 3 Tools für die tägliche Bildarbeit.</p>,
            },
            {
              title: 'Meta & SEO',
              icon: <RiSearchLine className="text-primary h-6 w-6" />,
              description: <p>Meta-Titel- und Beschreibungs-Checker sowie ein Wort- und Zeichenzähler zur Bewertung der Textlänge.</p>,
            },
            {
              title: 'E-Mail & Kommunikation',
              icon: <RiMailLine className="text-primary h-6 w-6" />,
              description: <p>HTML-E-Mail-Signatur-Generator mit fertigem Code für Gmail und Outlook.</p>,
            },
            {
              title: 'Farben & Barrierefreiheit',
              icon: <RiPaletteLine className="text-primary h-6 w-6" />,
              description: <p>WCAG-Kontrast-Checker, Bild-Farbextraktor und Farbpaletten-Generator. 3 Tools für die Farbarbeit.</p>,
            },
            {
              title: 'Druck & Materialien',
              icon: <RiQrCodeLine className="text-primary h-6 w-6" />,
              description: <p>QR-Code-Generator für Websites, vCards, Speisekarten und Flyer. Export als PNG und SVG.</p>,
            },
          ]}
        />

        <Gap variant="line" />

        <SectionInfo title="Was kommt als Nächstes">
          <p>
            Wir arbeiten aktiv daran, das Toolkit zu erweitern. Neue Tools werden regelmäßig auf Basis von Nutzerfeedback und unserer eigenen Erfahrung hinzugefügt. Das Ziel ist eine einzige Plattform,
            auf der Unternehmer, Designer und Entwickler Zugang zu jedem wichtigen Tool haben — alles an einem Ort, alles kostenlos.
          </p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionInfo title="Datenschutz und Sicherheit">
          <p>
            Wir respektieren Ihre Privatsphäre. Dateien, die Sie in unsere Tools hochladen, werden ausschließlich in Ihrem Browser verarbeitet und nie an einen Server gesendet. Wir verwenden Analysen
            (Google Analytics 4) und Werbung (Google AdSense) nur nach Ihrer Zustimmung über das Cookie-Banner. Alle Details finden Sie in unserer{' '}
            <a href="/de/datenschutzrichtlinie" className="inline-link">
              Datenschutzrichtlinie
            </a>
            .
          </p>
        </SectionInfo>

        <Gap size="sm" />
      </Wrapper>

      <CTABanner
        title="Testen Sie unsere Tools"
        description="10 kostenlose Online-Tools — ohne Registrierung, ohne Limits, ohne Datei-Upload auf Server"
        btnOne="Zu den Tools"
        btnOneLink="/de/werkzeuge"
        btnTwo="Kontakt"
        btnTwoLink="/de/kontakt"
        backgroundImage="/assets/arteon-logo-on-mockup.webp"
        overlay="black"
      />
    </>
  );
}
