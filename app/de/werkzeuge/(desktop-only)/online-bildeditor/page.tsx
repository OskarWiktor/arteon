import Script from 'next/script';
import HeroBanner from '@/components/sections/HeroBanner';
import Breadcrumbs from '@/components/sections/BreadCrumbs';
import ImageResizeTool from '@/components/sections/tools/ImageResizeTool';
import ToolsCarousel from '@/components/sections/tools/ToolsCarousel';
import FaqPanels from '@/components/ui/FaqPanels';
import Gap from '@/components/ui/Gap';
import SectionInfo from '@/components/ui/sections/SectionInfo';
import SectionSteps from '@/components/ui/sections/SectionSteps';
import SectionDemo from '@/components/ui/sections/SectionDemo';
import Badge from '@/components/ui/Badge';
import Wrapper from '@/components/ui/Wrapper';
import ToolEditorLayout from '@/components/ui/ToolEditorLayout';
import { toAbsoluteUrl, siteUrl } from '@/utils/absoluteUrl';
import { getToolAlternates } from '@/lib/i18n/pages/tool-meta';
import type { Metadata } from 'next';
import AdSense from '@/components/ui/AdSense';
import {
  RiCropLine,
  RiImageLine,
  RiDownloadLine,
  RiSettings3Line,
  RiSmartphoneLine,
  RiInfinityLine,
  RiInstagramLine,
  RiFacebookLine,
  RiLinkedinLine,
  RiGlobalLine,
  RiArticleLine,
  RiUserLine,
  RiShieldCheckLine,
  RiZoomInLine,
} from 'react-icons/ri';

const LOCALE = 'de' as const;
const TOOL_KEY = 'imageResize' as const;

export const metadata: Metadata = {
  title: 'Kostenloser Online-Bildeditor - Zuschneiden und Größe ändern',
  description:
    'Kostenloser Online-Bildeditor. Bilder zuschneiden und skalieren für Social Media und Websites. Fertige Größenvorlagen, benutzerdefinierte Pixelmaße, runde Avatare. Export als PNG, JPG, WebP.',
  alternates: getToolAlternates(TOOL_KEY, LOCALE),
  openGraph: {
    title: 'Kostenloser Online-Bildeditor - Zuschneiden und Größe ändern',
    description: 'Bilder zuschneiden und skalieren für Social Media und Websites. Fertige Größenvorlagen, benutzerdefinierte Pixelmaße. Export als PNG, JPG, WebP.',
    url: toAbsoluteUrl('/de/werkzeuge/online-bildeditor'),
    type: 'website',
    images: [{ url: toAbsoluteUrl('/assets/tools/narzedzia-zmiana-rozmiaru-i-kadrowanie-zdjecia.webp'), width: 1200, height: 630 }],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Online-Bildeditor - Zuschneiden und Größe ändern',
  alternateName: ['Bilder online zuschneiden', 'Bildgröße ändern online', 'Instagram-Bilder zuschneiden', 'Facebook-Cover-Größe', 'LinkedIn-Banner erstellen', 'Runde Avatare erstellen'],
  url: toAbsoluteUrl('/de/werkzeuge/online-bildeditor'),
  applicationCategory: 'MultimediaApplication',
  applicationSubCategory: 'ImageEditor',
  operatingSystem: 'Any',
  description: 'Bilder zuschneiden und skalieren für Social Media und Websites. Fertige Größenvorlagen für Instagram, Facebook, LinkedIn. Drei Zuschnittsformen, Export als PNG, JPG, WebP.',
  featureList: [
    'Fertige Vorlagen für Instagram, Facebook, LinkedIn, OG Image',
    'Drei Zuschnittsformen: Rechteck, Quadrat, Kreis',
    'Benutzerdefinierte Pixelmaße',
    'Zoom- und Positionssteuerung',
    'Export als PNG, JPG, WebP',
    'Qualitätseinstellung für JPG und WebP',
    'Lokale Verarbeitung im Browser',
  ],
  inLanguage: 'de',
  isAccessibleForFree: true,
  offers: { '@type': 'Offer', price: 0, priceCurrency: 'EUR' },
  publisher: { '@type': 'Organization', name: 'Arteon Agency', url: siteUrl },
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'So schneiden Sie Bilder online zu',
  description: 'Schneiden Sie Bilder für Social Media und Websites zu. Verwenden Sie fertige Vorlagen oder geben Sie eigene Pixelmaße ein.',
  url: toAbsoluteUrl('/de/werkzeuge/online-bildeditor'),
  step: [
    { '@type': 'HowToStep', name: 'Bild hochladen', text: 'Ziehen Sie ein Bild in den Bereich oder wählen Sie eine Datei aus. Unterstützt: JPG, PNG, WebP.' },
    { '@type': 'HowToStep', name: 'Zuschnitt wählen', text: 'Wählen Sie eine fertige Vorlage (z.\u00a0B. Instagram Post, Facebook Cover) oder geben Sie eigene Pixelmaße ein.' },
    { '@type': 'HowToStep', name: 'Zoom und Position anpassen', text: 'Passen Sie Zoom und Position an, um den gewünschten Bildausschnitt festzulegen.' },
    { '@type': 'HowToStep', name: 'Herunterladen', text: 'Wählen Sie das Ausgabeformat (PNG, JPG, WebP) und laden Sie das zugeschnittene Bild herunter.' },
  ],
  publisher: { '@type': 'Organization', name: 'Arteon Agency', url: siteUrl },
};

const faqItems = [
  {
    question: 'Welche Bildformate werden unterstützt?',
    answer:
      'Sie können JPG-, PNG- und WebP-Bilder hochladen. Das Ausgabeformat (PNG, JPG oder WebP) wählen Sie beim Herunterladen. Bei Kreisform-Zuschnitten wird PNG oder WebP empfohlen, da JPG keine Transparenz unterstützt.',
    answerSchemaText: 'Eingabe: JPG, PNG, WebP. Ausgabe: PNG, JPG, WebP (wählbar).',
  },
  {
    question: 'Welche fertigen Größenvorlagen gibt es?',
    answer:
      'Vorlagen für Instagram (Quadrat 1080×1080, Hochformat 1080×1350, Story/Reels 1080×1920), Facebook (Post 1200×630, Cover 820×360), LinkedIn (Post 1200×1200, Profilbanner 1584×396), OG Image (1200×630), Artikelbild, Website-Banner, Hero-Bereich und mehr.',
    answerSchemaText: 'Instagram, Facebook, LinkedIn, OG Image, Artikelbild, Website-Banner und weitere.',
  },
  {
    question: 'Kann ich runde Avatare erstellen?',
    answer:
      'Ja. Der Bildeditor unterstützt drei Zuschnittsformen: Rechteck, Quadrat und Kreis. Bei Kreisform wird das Bild mit transparentem Hintergrund gespeichert (PNG oder WebP). Dies eignet sich besonders für Profilbilder und Avatare.',
    answerSchemaText: 'Ja. Drei Formen: Rechteck, Quadrat, Kreis. Kreis = transparenter Hintergrund.',
  },
  {
    question: 'Werden meine Bilder an einen Server gesendet?',
    answer: 'Nein. Die gesamte Verarbeitung erfolgt lokal in Ihrem Browser mithilfe der Canvas API. Ihre Bilder verlassen nie Ihren Computer und werden nirgendwo gespeichert.',
    answerSchemaText: 'Nein. Verarbeitung lokal im Browser. Bilder verlassen nicht Ihr Gerät.',
  },
  {
    question: 'Kann ich die Qualität des Ausgabebilds einstellen?',
    answer:
      'Ja. Für JPG- und WebP-Ausgabeformate können Sie die Qualitätsstufe einstellen. Niedrigere Werte ergeben kleinere Dateien, aber mit etwas sichtbarem Qualitätsverlust. PNG wird verlustfrei gespeichert.',
    answerSchemaText: 'Ja. Qualitätseinstellung für JPG und WebP. PNG ist verlustfrei.',
  },
  {
    question: 'Was passiert, wenn mein Bild kleiner als die Vorlage ist?',
    answer:
      'Der Editor skaliert das Bild auf die Zielgröße. Wenn das Originalbild deutlich kleiner ist als die Vorlage, kann das Ergebnis unscharf wirken. Für beste Ergebnisse verwenden Sie ein Bild, das mindestens so groß ist wie die Vorlage.',
    answerSchemaText: 'Das Bild wird skaliert. Für beste Qualität sollte das Original mindestens so groß wie die Vorlage sein.',
  },
];

export default function ImageResizePage() {
  return (
    <>
      <Script id="ld-json-image-resize-de" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Script id="ld-json-image-howto-de" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />

      <HeroBanner
        title="Online-Bildeditor"
        description="Schneiden Sie Bilder für Social Media, Websites und Druckmaterialien zu und ändern Sie die Größe. Fertige Vorlagen für Instagram, Facebook und LinkedIn - oder eigene Pixelmaße eingeben."
        overlay="black"
        backgroundImage="/assets/tools/narzedzia-zmiana-rozmiaru-i-kadrowanie-zdjecia.webp"
      />

      <Breadcrumbs second={{ href: '/de/werkzeuge', label: 'Werkzeuge' }} third={{ href: '/de/werkzeuge/online-bildeditor', label: 'Online-Bildeditor' }} includeJsonLd locale="de" />

      <ToolEditorLayout>
        <AdSense variant="tool-banner" className="my-3" />
        <ImageResizeTool />
      </ToolEditorLayout>

      <Wrapper>
        <Gap variant="line" />

        <SectionInfo title="Bilder für jede Plattform zuschneiden">
          <p className="text-mid">
            Jede Plattform hat eigene Bildanforderungen - Instagram bevorzugt quadratische oder vertikale Bilder, Facebook hat spezifische Cover-Maße, LinkedIn erwartet bestimmte Bannergrößen. Der
            Bildeditor bietet fertige Vorlagen für alle gängigen Formate und ermöglicht auch benutzerdefinierte Pixelmaße.
          </p>
          <p className="text-mid mt-3">
            Das Tool arbeitet vollständig in Ihrem Browser - es werden keine Bilder an einen Server gesendet. Sie können Zoom und Position des Bildausschnitts anpassen und das Ergebnis in drei
            Formaten herunterladen: PNG (verlustfrei, mit Transparenz), JPG (kleinere Datei, ohne Transparenz) und WebP (optimale Komprimierung).
          </p>
        </SectionInfo>

        <Gap size="sm" />

        <SectionSteps
          title="So verwenden Sie den Bildeditor"
          description="Das Zuschneiden dauert nur wenige Sekunden:"
          grid="four"
          items={[
            {
              icon: <RiImageLine className="h-6 w-6" />,
              title: '1. Bild hochladen',
              description: 'Ziehen Sie ein Bild in den Bereich oder wählen Sie eine Datei aus. Unterstützt werden JPG-, PNG- und WebP-Dateien.',
            },
            {
              icon: <RiCropLine className="h-6 w-6" />,
              title: '2. Zuschnitt wählen',
              description: 'Wählen Sie eine fertige Vorlage oder geben Sie eigene Pixelmaße ein.',
            },
            {
              icon: <RiZoomInLine className="h-6 w-6" />,
              title: '3. Anpassen',
              description: 'Passen Sie Zoom und Position an, um den gewünschten Bildausschnitt festzulegen.',
            },
            {
              icon: <RiDownloadLine className="h-6 w-6" />,
              title: '4. Herunterladen',
              description: 'Wählen Sie das Ausgabeformat (PNG, JPG, WebP) und laden Sie das zugeschnittene Bild herunter.',
            },
          ]}
        />

        <Gap variant="line" />

        <SectionInfo title="Wie laden Sie ein Bild hoch?">
          <p className="text-mid">Das Tool akzeptiert Bilder in den Formaten JPG, PNG und WebP. Sie können ein Bild auf zwei Arten hinzufügen:</p>
          <ul className="text-mid mt-3 list-disc space-y-2 pl-5">
            <li>
              <strong>Drag &amp; Drop</strong> – ziehen Sie eine Datei aus einem Ordner auf Ihrem Computer und legen Sie sie im markierten Bereich ab (Feld mit gestricheltem Rahmen).
            </li>
            <li>
              <strong>Auswahl vom Gerät</strong> – klicken Sie in den Bereich zum Hinzufügen von Dateien, um ein Dateiauswahl-Fenster zu öffnen.
            </li>
          </ul>
          <p className="text-mid mt-3">
            Nach dem Hochladen liest das Tool automatisch die Originalmaße des Bildes aus und zeigt eine Vorschau an. Sie können nun mit den Zuschnittseinstellungen fortfahren.
          </p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionDemo
          title="Empfohlene Bildgrößen nach Plattform"
          demo={
            <div className="overflow-x-auto">
              <table className="text-mid w-full text-left text-sm!">
                <thead>
                  <tr className="border-b border-neutral-200">
                    <th className="py-2 pr-4 font-semibold">Plattform</th>
                    <th className="py-2 pr-4 font-semibold">Format</th>
                    <th className="py-2 font-semibold">Größe (px)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-neutral-100">
                    <td className="py-2 pr-4">Instagram</td>
                    <td className="py-2 pr-4">Post (Quadrat)</td>
                    <td className="py-2">1080 × 1080</td>
                  </tr>
                  <tr className="border-b border-neutral-100">
                    <td className="py-2 pr-4">Instagram</td>
                    <td className="py-2 pr-4">Story / Reels</td>
                    <td className="py-2">1080 × 1920</td>
                  </tr>
                  <tr className="border-b border-neutral-100">
                    <td className="py-2 pr-4">Facebook</td>
                    <td className="py-2 pr-4">Post</td>
                    <td className="py-2">1200 × 630</td>
                  </tr>
                  <tr className="border-b border-neutral-100">
                    <td className="py-2 pr-4">Facebook</td>
                    <td className="py-2 pr-4">Cover</td>
                    <td className="py-2">820 × 360</td>
                  </tr>
                  <tr className="border-b border-neutral-100">
                    <td className="py-2 pr-4">LinkedIn</td>
                    <td className="py-2 pr-4">Post</td>
                    <td className="py-2">1200 × 1200</td>
                  </tr>
                  <tr className="border-b border-neutral-100">
                    <td className="py-2 pr-4">LinkedIn</td>
                    <td className="py-2 pr-4">Profilbanner</td>
                    <td className="py-2">1584 × 396</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4">Website</td>
                    <td className="py-2 pr-4">OG Image</td>
                    <td className="py-2">1200 × 630</td>
                  </tr>
                </tbody>
              </table>
            </div>
          }
        >
          <p className="text-mid">
            Jede Plattform zeigt Bilder in bestimmten Proportionen und Größen an. Wenn ein Bild nicht den Anforderungen entspricht, wird es automatisch zugeschnitten oder verzerrt - oft mit
            unerwünschten Ergebnissen.
          </p>
          <p className="text-mid mt-3">
            Der Bildeditor enthält fertige Vorlagen für alle gängigen Plattformen. Wählen Sie einfach die gewünschte Vorlage, und das Tool stellt die Pixelmaße automatisch ein.
          </p>
        </SectionDemo>

        <Gap variant="line" />

        <SectionSteps
          title="Fertige Vorlagen nach Kategorie"
          description="Der Editor enthält Vorlagen für verschiedene Anwendungsbereiche:"
          grid="three"
          items={[
            {
              icon: <RiInstagramLine className="h-6 w-6" />,
              title: 'Instagram',
              description: 'Post (Quadrat), Hochformat (4:5), Story/Reels (9:16). Alle in der empfohlenen Auflösung.',
            },
            {
              icon: <RiFacebookLine className="h-6 w-6" />,
              title: 'Facebook',
              description: 'Post (1200×630), Cover (820×360), Veranstaltungsbild und mehr.',
            },
            {
              icon: <RiLinkedinLine className="h-6 w-6" />,
              title: 'LinkedIn',
              description: 'Post (1200×1200), Profilbanner (1584×396), Unternehmensseiten-Cover.',
            },
            {
              icon: <RiGlobalLine className="h-6 w-6" />,
              title: 'Website',
              description: 'OG Image (1200×630), Hero-Banner, Artikelbild und benutzerdefinierte Größen.',
            },
            {
              icon: <RiArticleLine className="h-6 w-6" />,
              title: 'Blog und Artikel',
              description: 'Vorschaubilder, Artikelbilder und Thumbnails in gängigen Größen.',
            },
            {
              icon: <RiUserLine className="h-6 w-6" />,
              title: 'Avatare',
              description: 'Quadratische und runde Profilbilder in verschiedenen Größen.',
            },
          ]}
        />

        <Gap variant="line" />

        <SectionInfo title="Wie wird ein Bild zugeschnitten?">
          <p className="text-mid">
            Nach dem Festlegen der Zielmaße erscheint im Vorschaubereich ein interaktiver Zuschnittsbereich. Der helle Bildbereich ist der Ausschnitt, der gespeichert wird – der Rest ist abgedunkelt.
          </p>
          <div className="mt-4 space-y-4">
            <div>
              <p className="text-dark font-semibold">Zuschnitt verschieben</p>
              <p className="text-mid mt-1">Fassen Sie den hellen Bereich an und ziehen Sie ihn an die gewünschte Stelle im Bild. So wählen Sie aus, welcher Ausschnitt exportiert wird.</p>
            </div>
            <div>
              <p className="text-dark font-semibold">Zoom</p>
              <p className="text-mid mt-1">
                Im Reiter <strong>Zoom</strong> finden Sie einen Schieberegler (100–300{'\u00a0'}%). Ein höherer Wert bedeutet, dass der Zuschnitt einen kleineren Ausschnitt des Originalbildes umfasst
                – nützlich, wenn Sie ein bestimmtes Detail ausschneiden möchten.
              </p>
            </div>
            <div>
              <p className="text-dark font-semibold">Präzise Positionierung</p>
              <p className="text-mid mt-1">
                Im Reiter <strong>Position</strong> können Sie die genaue Position des Zuschnitts in Prozent einstellen (0–100{'\u00a0'}% für X- und Y-Achse). Zentrierungs-Buttons ermöglichen eine
                schnelle Ausrichtung.
              </p>
            </div>
          </div>
        </SectionInfo>

        <Gap variant="line" />

        <SectionDemo
          title="Zuschnittsformen"
          demo={
            <div className="tool-section space-y-3">
              <div className="flex flex-wrap gap-2">
                <Badge as="button" variant="default" size="lg" className="border-black/10 hover:bg-neutral-100">
                  Rechteck
                </Badge>
                <Badge as="button" variant="selected" size="lg">
                  Quadrat
                </Badge>
                <Badge as="button" variant="default" size="lg" className="border-black/10 hover:bg-neutral-100">
                  Kreis
                </Badge>
              </div>
            </div>
          }
        >
          <p className="text-mid">
            Im Reiter <strong>Zuschnittsformen</strong> wählen Sie die Form des exportierten Bildes: Rechteck (mit gewählten Proportionen), Quadrat (erzwingt 1:1) oder Kreis (mit transparentem
            Hintergrund).
          </p>
          <p className="text-mid mt-3">
            Die Kreisform erstellt einen runden Avatar mit transparentem Hintergrund außerhalb des Kreises. Das Tool wechselt automatisch zum Format PNG oder WebP, da JPG keine Transparenz
            unterstützt.
          </p>
        </SectionDemo>

        <Gap variant="line" />

        <SectionInfo title="3×3-Raster – wozu dient es?">
          <p className="text-mid">
            Im Zuschnittsbereich ist ein Raster sichtbar, das das Bild in 9 gleiche Teile unterteilt. Das ist eine Visualisierung der <strong>Drittelregel</strong> – eines der grundlegenden Prinzipien
            der fotografischen Komposition.
          </p>
          <p className="text-mid mt-3">
            Die Regel besagt, dass die wichtigsten Bildelemente (Gesicht, Produkt, Blickfang) an den Schnittpunkten der Rasterlinien oder entlang dieser platziert werden sollten. Eine solche
            Komposition wirkt dynamischer und angenehmer als eine zentrale Platzierung.
          </p>
          <p className="text-mid mt-3">
            Im Reiter <strong>Rasterfarbe</strong> können Sie die Linienfarbe ändern (grün, weiß, schwarz, rot, gelb), damit das Raster auf verschiedenen Bildern gut sichtbar ist.
          </p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionSteps
          title="Was macht diesen Bildeditor besonders?"
          grid="two"
          items={[
            {
              icon: <RiSettings3Line className="h-6 w-6" />,
              title: 'Fertige Vorlagen',
              description: 'Vorlagen für Instagram, Facebook, LinkedIn, OG Image, Artikelbild, Website-Banner und mehr.',
            },
            {
              icon: <RiSmartphoneLine className="h-6 w-6" />,
              title: 'Drei Zuschnittsformen',
              description: 'Rechteck, Quadrat und Kreis - perfekt für Avatare und Profilbilder.',
            },
            {
              icon: <RiShieldCheckLine className="h-6 w-6" />,
              title: 'Volle Privatsphäre',
              description: 'Alle Bilder werden lokal in Ihrem Browser verarbeitet - nichts wird an einen Server gesendet.',
            },
            {
              icon: <RiInfinityLine className="h-6 w-6" />,
              title: 'Ohne Limits',
              description: 'Beliebig viele Bilder bearbeiten - ohne Registrierung und ohne Einschränkungen.',
            },
          ]}
        />

        <Gap variant="line" />

        <FaqPanels
          pageUrl={toAbsoluteUrl('/de/werkzeuge/online-bildeditor')}
          title="Häufig gestellte Fragen zum Bildeditor"
          openByDefault={1}
          items={[
            ...faqItems,
            {
              question: 'Warum ist das JPG-Format bei der Kreisform nicht verfügbar?',
              answer:
                'Das JPG-Format unterstützt keine Transparenz. Die Kreisform erfordert einen transparenten Hintergrund außerhalb des Kreises, daher beschränkt das Tool die Auswahl automatisch auf PNG oder WebP – Formate mit Alphakanal.',
              answerSchemaText: 'JPG unterstützt keine Transparenz. Kreisform erfordert PNG oder WebP.',
            },
          ]}
        />

        <Gap variant="line" />

        <ToolsCarousel title="Weitere Tools entdecken" />

        <Gap size="sm" />
      </Wrapper>
    </>
  );
}
