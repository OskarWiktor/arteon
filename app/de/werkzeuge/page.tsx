import HeroBanner from '@/components/sections/HeroBanner';
import Button from '@/components/ui/buttons/Button';
import Gap from '@/components/ui/Gap';
import SectionInfo from '@/components/ui/sections/SectionInfo';
import SectionSteps from '@/components/ui/sections/SectionSteps';
import FaqPanels from '@/components/ui/FaqPanels';
import Wrapper from '@/components/ui/Wrapper';
import Script from 'next/script';
import {
  RiImageEditLine,
  RiCropLine,
  RiAppsLine,
  RiFileTextLine,
  RiArticleLine,
  RiMailLine,
  RiContrast2Line,
  RiPaletteLine,
  RiPantoneLine,
  RiQrCodeLine,
  RiShieldCheckLine,
  RiInfinityFill,
  RiGlobalLine,
  RiLockLine,
} from 'react-icons/ri';
import { toAbsoluteUrl, siteUrl } from '@/utils/absoluteUrl';
import { getToolsIndexAlternates } from '@/lib/i18n/pages/tool-meta';

export const metadata = {
  title: 'Kostenlose Online-Tools | Bilder, SEO, Farben, Favicon',
  description: '10 kostenlose Online-Tools: WebP-Konverter, Favicon-Generator, Textzähler, Farbextraktor und QR-Codes. Für Websites, Social Media und Druck. Ohne Registrierung.',
  alternates: getToolsIndexAlternates('de'),
  openGraph: {
    title: 'Kostenlose Online-Tools | Bilder, SEO, Farben, Favicon',
    description: '10 kostenlose Online-Tools: WebP-Konverter, Favicon-Generator, Textzähler, Farbextraktor und QR-Codes. Für Websites, Social Media und Druck. Ohne Registrierung.',
    url: toAbsoluteUrl('/de/werkzeuge'),
    type: 'website',
    images: [
      {
        url: toAbsoluteUrl('/assets/arteon-logo-on-mockup.webp'),
        width: 1200,
        height: 630,
      },
    ],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Kostenlose Online-Tools',
  description: '10 kostenlose Online-Tools: WebP-Konverter, Favicon-Generator, Textzähler, Farbextraktor und QR-Codes. Für Websites, Social Media und Druck. Ohne Registrierung.',
  url: toAbsoluteUrl('/de/werkzeuge'),
  inLanguage: 'de',
  isPartOf: {
    '@type': 'WebSite',
    name: 'Arteon Agency',
    url: siteUrl,
  },
  about: [
    { '@type': 'Thing', name: 'Bildoptimierung' },
    { '@type': 'Thing', name: 'SEO' },
    { '@type': 'Thing', name: 'Farben und Branding' },
    { '@type': 'Thing', name: 'Online-Generatoren' },
  ],
  mainEntity: {
    '@type': 'ItemList',
    numberOfItems: 10,
    itemListElement: [
      {
        '@type': 'WebApplication',
        position: 1,
        name: 'JPG- und PNG-zu-WebP-Konverter online',
        description:
          'Kostenloser Online-Konverter von JPG und PNG zu WebP. Reduziert die Dateigröße um bis zu 35\u00a0% ohne sichtbaren Qualitätsverlust. Ohne Registrierung - Dateien bleiben in Ihrem Browser.',
        url: toAbsoluteUrl('/de/werkzeuge/jpg-zu-webp-konverter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 2,
        name: 'Online-Bildeditor',
        description: 'Bilder für Social Media und Websites zuschneiden und skalieren. Fertige Vorlagen, eigene Pixelmaße und runde Avatare.',
        url: toAbsoluteUrl('/de/werkzeuge/online-bildeditor'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 3,
        name: 'Online-Favicon-Generator',
        description: 'Kostenloser Online-Favicon-Generator. Erstellt favicon.ico und PNG-Symbole (16×16 bis 512×512) aus einem einzigen Bild - passend für alle Browser und Lighthouse.',
        url: toAbsoluteUrl('/de/werkzeuge/kostenloser-favicon-generator'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 4,
        name: 'Meta-Tag-Checker',
        description:
          'Meta-Titel- und Beschreibungs-Checker mit Google-Vorschau. Zeigt Zeichenanzahl und Pixelbreite, damit Titel und Beschreibungen in den Suchergebnissen nicht abgeschnitten werden.',
        url: toAbsoluteUrl('/de/werkzeuge/meta-titel-beschreibung-laengenpruefer'),
        applicationCategory: 'DeveloperApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 5,
        name: 'HTML-E-Mail-Signatur-Generator',
        description: 'Kostenloser HTML-E-Mail-Signatur-Generator. Kontaktdaten, CTA-Link und Social-Media-Profile eintragen, fertigen HTML-Code in Gmail oder Outlook einfügen.',
        url: toAbsoluteUrl('/de/werkzeuge/kostenloser-e-mail-signatur-generator'),
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 6,
        name: 'Farbkontrast-Checker',
        description: 'Prüft Kontrast und Lesbarkeit von Text- und Hintergrundfarben gemäß WCAG. Berechnet das Kontrastverhältnis und hilft mit automatischer Farbanpassung.',
        url: toAbsoluteUrl('/de/werkzeuge/farbkontrast-checker'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 7,
        name: 'Bild-Farbextraktor online',
        description: 'Kostenloser Online-Farbextraktor. Foto oder Logo hochladen und eine Palette mit bis zu 12 dominanten Farben (HEX und RGB) erhalten.',
        url: toAbsoluteUrl('/de/werkzeuge/bild-farbextraktor'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 8,
        name: 'Farbpaletten-Generator online',
        description: 'Farbpaletten aus einer Basisfarbe generieren. Monochromatisch, triadisch, analog, komplementär und mehr - plus Pastell-, Dunkel- und minimalistische Varianten.',
        url: toAbsoluteUrl('/de/werkzeuge/farbpaletten-generator'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 9,
        name: 'Wort- und Zeichenzähler online',
        description: 'Kostenloser Wort- und Zeichenzähler mit Längenbewertung. Prüft, ob die Textlänge für Startseite, Dienstleistungsseite, Blogartikel oder Produktbeschreibung passt.',
        url: toAbsoluteUrl('/de/werkzeuge/wort-und-zeichenzaehler'),
        applicationCategory: 'DeveloperApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 10,
        name: 'QR-Code-Generator online',
        description: 'Kostenloser Online-QR-Code-Generator. Erstellen Sie QR-Codes für Websites, vCards, Speisekarten oder Flyer. Export als PNG und SVG, ohne Anmeldung, ohne Limits.',
        url: toAbsoluteUrl('/de/werkzeuge/kostenloser-qr-code-generator'),
        applicationCategory: 'UtilityApplication',
        operatingSystem: 'Any',
      },
    ],
  },
};

const faqItems = [
  {
    question: 'Was kosten die Tools?',
    answer: 'Nichts. Alle Tools sind kostenlos, ohne Abonnements und ohne versteckte Gebühren.',
  },
  {
    question: 'Werden meine Dateien an einen Server gesendet?',
    answer: 'Nein. Alle Tools laufen vollständig in Ihrem Browser. Dateien verlassen nie Ihren Computer und werden nirgendwo gespeichert.',
  },
  {
    question: 'Brauche ich ein Konto?',
    answer: 'Nein. Sie können die Tools sofort nutzen, ohne sich anzumelden oder ein Konto zu erstellen.',
  },
  {
    question: 'Gibt es ein Nutzungslimit?',
    answer: 'Nein. Nutzen Sie die Tools ohne Einschränkungen - kein Tageslimit, kein Dateilimit, keine Begrenzung bei Konvertierungen.',
  },
  {
    question: 'Wofür sind diese Tools gedacht?',
    answer:
      'Sie helfen bei der Vorbereitung von Materialien für Websites, Social Media und Druck: Bilder optimieren, Favicons erstellen, Textlänge prüfen, QR-Codes generieren, Farben auswählen und deren Lesbarkeit überprüfen.',
  },
  {
    question: 'Funktionieren die Tools auf dem Handy?',
    answer: 'Ja, aber einige Tools (z.\u00a0B. WebP-Konverter und Favicon-Generator) sind für den Desktop optimiert, da sie mit größeren Dateien arbeiten.',
  },
];

export default function ToolsIndexPage() {
  return (
    <>
      <HeroBanner
        title="Kostenlose Online-Tools"
        description="Bildkonverter, Favicon-Generator, Textzähler, Farbtools und QR-Codes. Ohne Registrierung, ohne Limits - alles läuft in Ihrem Browser."
        backgroundImage="/assets/arteon-logo-on-mockup.webp"
        overlay="black"
      />

      <Wrapper>
        <Gap size="sm" />

        <SectionSteps
          title="Bilder & Favicons"
          description="Tools zur Vorbereitung von Fotos, Grafiken und Symbolen für Websites und Social Media."
          grid="three"
          items={[
            {
              icon: <RiImageEditLine className="h-8 w-8" />,
              title: 'JPG/PNG-zu-WebP-Konverter',
              topImageAlt: 'JPG/PNG-zu-WebP-Konverter Arteon',
              topImageSrc: '/assets/tools/jpg-png-to-webp-converter/jpg-zu-webp-konverter-de.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    Wandeln Sie JPG- oder PNG-Bilder ins <strong>WebP</strong>-Format um und verkleinern Sie die Dateigröße. Schnellere Ladezeiten für Ihre Website.
                  </p>
                  <div className="mt-4">
                    <Button arrow link="/de/werkzeuge/jpg-zu-webp-konverter">
                      Tool öffnen
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiCropLine className="h-8 w-8" />,
              title: 'Online-Bildeditor',
              topImageAlt: 'Online-Bildeditor Arteon',
              topImageSrc: '/assets/tools/free-image-editor-crop-resize-and-convert/online-bildeditor-de.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Schneiden Sie Bilder passgenau für Social Media oder Ihre Website zu. Wählen Sie ein fertiges Format oder geben Sie eigene Pixelmaße ein - Download als PNG, JPG oder WebP.</p>
                  <div className="mt-4">
                    <Button arrow link="/de/werkzeuge/online-bildeditor">
                      Tool öffnen
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiAppsLine className="h-8 w-8" />,
              title: 'Favicon- & Symbol-Generator',
              topImageAlt: 'Favicon-Generator Arteon',
              topImageSrc: '/assets/tools/favicon-generator/kostenloser-favicon-generator-de.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    Generieren Sie <strong>favicon.ico</strong> und PNG-Symbole 180x180, 192x192 und 512x512 aus einem einzigen Bild - konform mit Browser- und Lighthouse-Anforderungen.
                  </p>
                  <div className="mt-4">
                    <Button arrow link="/de/werkzeuge/kostenloser-favicon-generator">
                      Tool öffnen
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />

        <Gap size="sm" />

        <SectionSteps
          title="Text & SEO"
          description="Tools zur Überprüfung von Textlänge, Meta-Tags und Vorschau Ihrer Seite in den Suchergebnissen."
          grid="three"
          items={[
            {
              icon: <RiFileTextLine className="h-8 w-8" />,
              title: 'Meta-Tag-Checker',
              topImageAlt: 'Meta-Titel- und Beschreibungs-Checker Arteon',
              topImageSrc: '/assets/tools/free-meta-title-and-description-checker-pixel-width/meta-titel-beschreibung-laengenpruefer-de.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    Prüfen Sie Zeichenanzahl, Wortanzahl und Pixelbreite - mit Vorschau, wie Ihre Seite in den Google-Suchergebnissen erscheint. Vermeiden Sie abgeschnittene Titel und Beschreibungen.
                  </p>
                  <div className="mt-4">
                    <Button arrow link="/de/werkzeuge/meta-titel-beschreibung-laengenpruefer">
                      Tool öffnen
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiArticleLine className="h-8 w-8" />,
              title: 'Wort- & Zeichenzähler',
              topImageAlt: 'Wort- und Zeichenzähler Arteon',
              topImageSrc: '/assets/tools/word-and-character-counter-with-text-formatting-tools/wort-und-zeichenzaehler-de.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    Prüfen Sie, ob die Textlänge für eine Startseite, Dienstleistungsseite, einen Blogartikel oder eine Produktbeschreibung passt. Das Tool zählt Wörter, Zeichen, Absätze und schätzt
                    die Lesezeit.
                  </p>
                  <div className="mt-4">
                    <Button arrow link="/de/werkzeuge/wort-und-zeichenzaehler">
                      Tool öffnen
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />

        <Gap size="sm" />

        <SectionSteps
          title="E-Mail & Kommunikation"
          description="Tools für eine professionelle E-Mail-Kommunikation und einen einheitlichen Markenauftritt."
          grid="three"
          items={[
            {
              icon: <RiMailLine className="h-8 w-8" />,
              title: 'Kostenloser HTML-E-Mail-Signatur-Generator',
              topImageAlt: 'Kostenloser HTML-E-Mail-Signatur-Generator Arteon',
              topImageSrc: '/assets/tools/free-html-email-signature-generator/kostenloser-e-mail-signatur-generator-de.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    In wenigen Minuten eine professionelle E-Mail-Signatur erstellen. Daten eingeben, Farben wählen und den fertigen HTML-Code in Gmail, Outlook oder andere E-Mail-Clients einfügen.
                  </p>
                  <div className="mt-4">
                    <Button arrow link="/de/werkzeuge/kostenloser-e-mail-signatur-generator">
                      Tool öffnen
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />

        <Gap size="sm" />

        <SectionSteps
          title="QR-Codes"
          description="QR-Code-Generator für Websites, Visitenkarten, Speisekarten und Druckmaterialien."
          grid="three"
          items={[
            {
              icon: <RiQrCodeLine className="h-8 w-8" />,
              title: 'Kostenloser QR-Code-Generator',
              topImageAlt: 'Kostenloser QR-Code-Generator Arteon',
              topImageSrc: '/assets/tools/qr-code-generator/kostenloser-qr-code-generator-de.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>QR-Code für Website, vCard, Speisekarte oder Flyer erstellen. Export als PNG und SVG - ohne Anmeldung, ohne Limits.</p>
                  <div className="mt-4">
                    <Button arrow link="/de/werkzeuge/kostenloser-qr-code-generator">
                      Tool öffnen
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />

        <Gap size="sm" />

        <SectionSteps
          title="Farben & Barrierefreiheit"
          description="Tools für die Arbeit mit Farben, Kontrast und WCAG-Barrierefreiheit."
          grid="three"
          items={[
            {
              icon: <RiContrast2Line className="h-8 w-8" />,
              title: 'Farbkontrast-Checker',
              topImageAlt: 'Farbkontrast-Checker Arteon',
              topImageSrc: '/assets/tools/color-contrast-and-readability-checker/farbkontrast-checker-de.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    Prüfen Sie, ob Text- und Hintergrundfarben gut lesbar sind. Farbcodes eingeben, Kontrastverhältnis nach <strong>WCAG</strong> ablesen und bei Bedarf die <strong>Match</strong>
                    -Funktion zur automatischen Korrektur nutzen.
                  </p>
                  <div className="mt-4">
                    <Button arrow link="/de/werkzeuge/farbkontrast-checker">
                      Tool öffnen
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiPantoneLine className="h-8 w-8" />,
              title: 'Bild-Farbextraktor',
              topImageAlt: 'Bild-Farbextraktor Arteon',
              topImageSrc: '/assets/tools/image-color-extractor/bild-farbextraktor-de.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Foto oder Logo hochladen - das Tool extrahiert die dominanten Farben. HEX-Codes mit einem Klick kopieren und überall verwenden.</p>
                  <div className="mt-4">
                    <Button arrow link="/de/werkzeuge/bild-farbextraktor">
                      Tool öffnen
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiPaletteLine className="h-8 w-8" />,
              title: 'Farbpaletten-Generator',
              topImageAlt: 'Farbpaletten-Generator Arteon',
              topImageSrc: '/assets/tools/color-palette-generator/farbpaletten-generator-de.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Basisfarbe wählen und 9 Farbpaletten generieren: monochromatisch, komplementär, triadisch, Pastell, dunkel und mehr. HEX-Codes mit einem Klick kopieren.</p>
                  <div className="mt-4">
                    <Button arrow link="/de/werkzeuge/farbpaletten-generator">
                      Tool öffnen
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />

        <Gap variant="line" />

        <SectionInfo title="Was sind Arteon-Tools?">
          <p className="mb-4">
            10 kostenlose Online-Tools zur Erstellung und Optimierung von Inhalten für Websites, Social Media und Druck - WebP-Konverter, Favicon-Generator, Textzähler, Farbextraktor,
            Paletten-Generator und QR-Codes.
          </p>
          <p>Alle Tools laufen in Ihrem Browser - Dateien werden nie an einen Server gesendet. Nutzen Sie sie ohne Registrierung und ohne Limits.</p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionSteps
          title="Warum Arteon-Tools nutzen?"
          grid="two"
          items={[
            {
              icon: <RiShieldCheckLine className="h-6 w-6" />,
              title: 'Volle Privatsphäre',
              description: 'Alle Tools verarbeiten Dateien lokal in Ihrem Browser. Nichts wird an einen Server gesendet - die Daten verschwinden, wenn Sie den Tab schließen.',
            },
            {
              icon: <RiInfinityFill className="h-6 w-6" />,
              title: 'Keine Nutzungslimits',
              description: 'Nutzen Sie die Tools ohne Einschränkungen - kein Tageslimit, kein Dateilimit, keine Begrenzung bei Konvertierungen. So oft wie nötig.',
            },
            {
              icon: <RiLockLine className="h-6 w-6" />,
              title: 'Keine Registrierung',
              description: 'Kein Konto erforderlich. Öffnen Sie das Tool, nutzen Sie es, fertig.',
            },
            {
              icon: <RiGlobalLine className="h-6 w-6" />,
              title: 'Auf Deutsch verfügbar',
              description: 'Alle Tools sind auf Deutsch verfügbar - Oberfläche, Anleitungen und Meldungen.',
            },
          ]}
        />

        <Gap variant="line" />

        <FaqPanels items={faqItems} title="Häufig gestellte Fragen zu unseren Tools" />

        <Gap size="sm" />
      </Wrapper>

      <Script id="ld-json-tools-de" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(schema)}
      </Script>
    </>
  );
}
