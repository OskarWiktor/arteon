import Script from 'next/script';
import HeroBanner from '@/components/sections/HeroBanner';
import Breadcrumbs from '@/components/sections/BreadCrumbs';
import JpgPngToWebp from '@/components/sections/tools/JpgPngToWebp';
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
import type { Metadata } from 'next';
import AdSense from '@/components/ui/AdSense';
import {
  RiShieldCheckLine,
  RiInfinityFill,
  RiSpeedLine,
  RiDownloadLine,
  RiFileImageLine,
  RiFlashlightLine,
  RiStackLine,
  RiCheckboxCircleLine,
  RiAlertLine,
  RiCloseLine,
  RiSettings3Line,
  RiImageLine,
  RiGlobalLine,
  RiShoppingBagLine,
  RiArticleLine,
} from 'react-icons/ri';

export const metadata: Metadata = {
  title: 'Kostenloser JPG/PNG-zu-WebP-Konverter online - ohne Limits',
  description:
    'Kostenloser Online-Konverter von JPG und PNG zu WebP. Reduzieren Sie die Dateigröße von Bildern um bis zu 35\u00a0% ohne Qualitätsverlust. Die Konvertierung erfolgt lokal im Browser, Dateien werden nicht an einen Server gesendet.',
  alternates: {
    canonical: toAbsoluteUrl('/de/werkzeuge/jpg-png-zu-webp-konverter'),
    languages: {
      pl: toAbsoluteUrl('/narzedzia/jpg-png-na-webp-bez-limitu'),
      en: toAbsoluteUrl('/en/tools/jpg-png-to-webp-unlimited'),
      de: toAbsoluteUrl('/de/werkzeuge/jpg-png-zu-webp-konverter'),
      es: toAbsoluteUrl('/es/herramientas/convertidor-jpg-png-a-webp'),
      fr: toAbsoluteUrl('/fr/outils/convertisseur-jpg-png-en-webp'),
    },
  },
  openGraph: {
    title: 'Kostenloser JPG/PNG-zu-WebP-Konverter online - ohne Limits',
    description: 'Reduzieren Sie die Dateigröße von Bildern um bis zu 35\u00a0% ohne Qualitätsverlust. Ohne Registrierung, ohne Limits.',
    url: toAbsoluteUrl('/de/werkzeuge/jpg-png-zu-webp-konverter'),
    type: 'website',
    images: [{ url: toAbsoluteUrl('/assets/tools/narzedzia-jpg-png-na-webp-bez-limitu.webp'), width: 1200, height: 630 }],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'JPG- und PNG-zu-WebP-Konverter online - ohne Limits',
  alternateName: ['WebP-Konverter online', 'JPG in WebP umwandeln', 'PNG in WebP konvertieren', 'Bilder in WebP umwandeln', 'WebP-Bildkomprimierung', 'Mehrere Bilder gleichzeitig in WebP umwandeln'],
  url: toAbsoluteUrl('/de/werkzeuge/jpg-png-zu-webp-konverter'),
  applicationCategory: 'MultimediaApplication',
  applicationSubCategory: 'ImageConverter',
  operatingSystem: 'Any',
  description:
    'Kostenloser Online-Konverter von JPG und PNG zu WebP. Reduzieren Sie die Dateigröße um bis zu 35\u00a0% ohne Qualitätsverlust. Stapelverarbeitung, automatische Optimierung, lokale Verarbeitung.',
  featureList: [
    'JPG- und PNG-Dateien zu WebP konvertieren',
    'Dateigröße um bis zu 35 % reduzieren',
    'Einstellbare Qualität (60–95 %)',
    'Automatische Optimierung bei größeren Ausgabedateien',
    'Stapelverarbeitung mit ZIP-Download',
    'Lokale Verarbeitung im Browser',
    'Ohne Registrierung und ohne Limits',
  ],
  inLanguage: 'de',
  isAccessibleForFree: true,
  offers: { '@type': 'Offer', price: 0, priceCurrency: 'EUR' },
  publisher: { '@type': 'Organization', name: 'Arteon Agency', url: siteUrl },
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'So konvertieren Sie JPG/PNG-Bilder in WebP',
  description: 'Konvertieren Sie JPG- und PNG-Bilder in das WebP-Format und reduzieren Sie die Dateigröße um bis zu 35 % ohne sichtbaren Qualitätsverlust.',
  url: toAbsoluteUrl('/de/werkzeuge/jpg-png-zu-webp-konverter'),
  step: [
    { '@type': 'HowToStep', name: 'Dateien hinzufügen', text: 'Ziehen Sie JPG- oder PNG-Dateien in den markierten Bereich oder klicken Sie, um Dateien von Ihrem Gerät auszuwählen.' },
    { '@type': 'HowToStep', name: 'Qualität einstellen', text: 'Wählen Sie die WebP-Qualität mit dem Schieberegler (Standard: 80 %). Das Tool optimiert die Dateigröße automatisch.' },
    { '@type': 'HowToStep', name: 'Konvertieren und herunterladen', text: 'Laden Sie die konvertierten Dateien einzeln oder als ZIP-Archiv herunter.' },
  ],
  publisher: { '@type': 'Organization', name: 'Arteon Agency', url: siteUrl },
};

const faqItems = [
  {
    question: 'Was ist das WebP-Format?',
    answer:
      'WebP ist ein von Google entwickeltes Bildformat, das eine bessere Komprimierung als JPG und PNG bietet. Bei gleicher visueller Qualität sind WebP-Dateien in der Regel 25–35\u00a0% kleiner. Das Format wird von allen modernen Browsern unterstützt (Chrome, Firefox, Safari, Edge).',
    answerSchemaText: 'Ein von Google entwickeltes Bildformat mit 25–35 % kleinerer Dateigröße bei gleicher Qualität.',
  },
  {
    question: 'Werden meine Bilder an einen Server gesendet?',
    answer:
      'Nein. Die gesamte Konvertierung erfolgt lokal in Ihrem Browser mithilfe der Canvas API. Ihre Dateien verlassen nie Ihren Computer und werden nirgendwo gespeichert. Nach dem Schließen des Tabs werden alle Daten aus dem Speicher entfernt.',
    answerSchemaText: 'Nein. Die Konvertierung erfolgt lokal im Browser. Dateien verlassen nicht Ihr Gerät.',
  },
  {
    question: 'Gibt es ein Limit für die Anzahl der Dateien?',
    answer: 'Nein. Sie können beliebig viele Dateien konvertieren - ohne tägliche Limits, ohne Dateigrößenbeschränkungen und ohne Registrierung.',
    answerSchemaText: 'Nein. Beliebig viele Dateien, ohne Limits.',
  },
  {
    question: 'Was passiert, wenn die WebP-Datei größer als das Original ist?',
    answer:
      'Das Tool senkt automatisch die Qualität schrittweise, wenn die Ausgabedatei größer als das Original wäre. So erhalten Sie immer eine Datei, die nicht größer als das Original ist - bei bestmöglicher Qualität.',
    answerSchemaText: 'Das Tool senkt automatisch die Qualität, damit die Ausgabedatei nie größer als das Original ist.',
  },
  {
    question: 'Welche Qualitätseinstellung ist optimal?',
    answer:
      '80\u00a0% ist ein guter Kompromiss zwischen Dateigröße und Bildqualität für die meisten Websites. Für Fotos mit vielen Details können Sie 85–90\u00a0% verwenden, für einfache Grafiken und Icons reichen 65–70\u00a0%.',
    answerSchemaText: '80 % für die meisten Websites. Fotos: 85–90 %. Einfache Grafiken: 65–70 %.',
  },
  {
    question: 'Kann ich auch PNG-Dateien mit Transparenz konvertieren?',
    answer: 'WebP unterstützt Transparenz (Alphakanal). Wenn Ihre PNG-Datei einen transparenten Hintergrund hat, bleibt die Transparenz in der WebP-Datei erhalten.',
    answerSchemaText: 'Ja. WebP unterstützt Transparenz. Der Alphakanal bleibt erhalten.',
  },
  {
    question: 'Unterstützen alle Browser das WebP-Format?',
    answer:
      'Ja, alle modernen Browser unterstützen WebP: Chrome (ab Version 17), Firefox (ab 65), Safari (ab 14), Edge (ab 18). Nur der Internet Explorer unterstützt WebP nicht - er wird jedoch von Microsoft nicht mehr gewartet.',
    answerSchemaText: 'Ja. Chrome, Firefox, Safari, Edge. Nur Internet Explorer nicht (veraltet).',
  },
];

export default function JpgPngToWebpPage() {
  return (
    <>
      <Script id="ld-json-webp-converter-de" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Script id="ld-json-webp-howto-de" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />

      <HeroBanner
        title="JPG/PNG-zu-WebP-Konverter"
        description="Konvertieren Sie JPG- und PNG-Bilder in das WebP-Format und reduzieren Sie die Dateigröße um bis zu 35\u00a0% ohne sichtbaren Qualitätsverlust. Alles läuft lokal in Ihrem Browser."
        overlay="black"
        backgroundImage="/assets/tools/narzedzia-jpg-png-na-webp-bez-limitu.webp"
      />

      <Breadcrumbs second={{ href: '/de/werkzeuge', label: 'Werkzeuge' }} third={{ href: '/de/werkzeuge/jpg-png-zu-webp-konverter', label: 'JPG/PNG zu WebP' }} includeJsonLd locale="de" />

      <ToolEditorLayout>
        <AdSense variant="tool-banner" className="my-3" />
        <JpgPngToWebp />
      </ToolEditorLayout>

      <Wrapper>
        <Gap variant="line" />

        <SectionInfo title="Warum JPG und PNG in WebP konvertieren?">
          <p className="text-mid">
            Das WebP-Format bietet bei gleicher visueller Qualität deutlich kleinere Dateien als JPG und PNG. Kleinere Bilddateien bedeuten schnellere Ladezeiten für Ihre Website, bessere Core Web
            Vitals und ein besseres Nutzererlebnis. Google empfiehlt WebP als bevorzugtes Format für Webbilder.
          </p>
          <p className="text-mid mt-3">
            Im Vergleich zu JPG liefert WebP bei gleicher Qualität durchschnittlich 25–35\u00a0% kleinere Dateien. Im Vergleich zu PNG kann die Einsparung bei verlustbehafteter Komprimierung noch
            höher ausfallen. WebP unterstützt sowohl verlustbehaftete als auch verlustfreie Komprimierung sowie Transparenz (Alphakanal).
          </p>
        </SectionInfo>

        <Gap size="sm" />

        <SectionSteps
          title="So verwenden Sie den WebP-Konverter"
          description="Die Konvertierung dauert nur wenige Sekunden:"
          grid="three"
          items={[
            {
              icon: <RiFileImageLine className="h-6 w-6" />,
              title: '1. Dateien hinzufügen',
              description: 'Ziehen Sie JPG- oder PNG-Dateien in den markierten Bereich oder klicken Sie, um Dateien von Ihrem Gerät auszuwählen.',
            },
            {
              icon: <RiFlashlightLine className="h-6 w-6" />,
              title: '2. Qualität einstellen',
              description: 'Wählen Sie die WebP-Qualität mit dem Schieberegler (Standard: 80\u00a0%). Das Tool optimiert die Dateigröße automatisch.',
            },
            {
              icon: <RiDownloadLine className="h-6 w-6" />,
              title: '3. Herunterladen',
              description: 'Laden Sie die konvertierten Dateien einzeln oder alle zusammen als ZIP-Archiv herunter.',
            },
          ]}
        />

        <Gap variant="line" />

        <SectionInfo title="Dateien zur Konvertierung hinzufügen">
          <p className="text-mid">Das Tool bietet zwei Möglichkeiten, Dateien hinzuzufügen:</p>
          <ul className="text-mid mt-3 ml-6 list-disc space-y-2">
            <li>
              <strong>Drag &amp; Drop</strong> – ziehen Sie Dateien aus einem Ordner auf Ihrem Computer und legen Sie sie im markierten Bereich ab. Sie können mehrere Dateien gleichzeitig ziehen.
            </li>
            <li>
              <strong>Auswahl vom Gerät</strong> – klicken Sie in den Bereich zum Hinzufügen von Dateien. Es öffnet sich ein Auswahldialog. Mit gedrückter Strg-Taste (oder Cmd auf Mac) können Sie mehrere Dateien gleichzeitig auswählen.
            </li>
          </ul>
          <p className="text-mid mt-3">
            Das Tool akzeptiert nur JPG- und PNG-Dateien. Wenn Sie versehentlich eine Datei in einem anderen Format (z.{'\u00a0'}B. GIF oder BMP) hinzufügen, wird sie automatisch übersprungen und Sie sehen eine Informationsmeldung.
          </p>
          <p className="text-mid mt-3">
            <strong>Datenschutz:</strong> Alle Dateien werden lokal im Browser verarbeitet. Sie werden nirgendwohin gesendet – sie gelangen auf keinen Server. Nach dem Schließen des Tabs oder Browsers werden die Dateien aus dem Speicher gelöscht.
          </p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionDemo
          title="So interpretieren Sie die Ergebnisse"
          subtitle="Konvertierungsstatus"
          demo={
            <div className="space-y-3">
              <div className="flex items-center gap-3 rounded-lg border border-neutral-200 bg-white p-3">
                <Badge variant="success" size="sm">
                  Erfolgreich
                </Badge>
                <span className="text-mid text-sm!">Datei konvertiert - WebP ist kleiner als das Original</span>
              </div>
              <div className="flex items-center gap-3 rounded-lg border border-neutral-200 bg-white p-3">
                <Badge variant="warning" size="sm">
                  Optimiert
                </Badge>
                <span className="text-mid text-sm!">Qualität wurde automatisch gesenkt, damit WebP nicht größer als das Original ist</span>
              </div>
              <div className="flex items-center gap-3 rounded-lg border border-neutral-200 bg-white p-3">
                <Badge variant="error" size="sm">
                  Fehler
                </Badge>
                <span className="text-mid text-sm!">Die Datei konnte nicht konvertiert werden</span>
              </div>
            </div>
          }
        >
          <p className="text-mid mb-4">Für jede konvertierte Datei sehen Sie den Status und die Größenersparnis:</p>
          <ul className="text-mid list-disc space-y-2 pl-5">
            <li>
              <strong>Originalgröße</strong> - Dateigröße der JPG- oder PNG-Eingabedatei.
            </li>
            <li>
              <strong>WebP-Größe</strong> - Dateigröße der konvertierten WebP-Datei.
            </li>
            <li>
              <strong>Ersparnis</strong> - prozentuale Größenreduzierung gegenüber dem Original.
            </li>
            <li>
              <strong>Status</strong> - zeigt, ob die Konvertierung erfolgreich war oder ob die Qualität automatisch angepasst wurde.
            </li>
          </ul>
        </SectionDemo>

        <Gap variant="line" />

        <SectionInfo title="Qualitätseinstellungen - Empfehlungen">
          <p className="text-mid mb-4">Die optimale Qualitätsstufe hängt vom Verwendungszweck ab. Hier sind Richtwerte für verschiedene Anwendungsfälle:</p>
          <div className="overflow-x-auto">
            <table className="text-mid w-full text-left">
              <thead>
                <tr className="border-b border-neutral-200">
                  <th className="py-2 pr-4 font-semibold">Anwendung</th>
                  <th className="py-2 pr-4 font-semibold">Qualität</th>
                  <th className="py-2 font-semibold">Hinweis</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-neutral-100">
                  <td className="py-2 pr-4 font-medium">Produktfotos (E-Commerce)</td>
                  <td className="py-2 pr-4 whitespace-nowrap">85–90 %</td>
                  <td className="text-primary-light0 py-2 text-sm">Hohe Detailtreue für Produktbilder</td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="py-2 pr-4 font-medium">Blog-Bilder und Artikelfotos</td>
                  <td className="py-2 pr-4 whitespace-nowrap">75–80 %</td>
                  <td className="text-primary-light0 py-2 text-sm">Guter Kompromiss für die meisten Websites</td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="py-2 pr-4 font-medium">Hero-Banner und Hintergrundbilder</td>
                  <td className="py-2 pr-4 whitespace-nowrap">70–80 %</td>
                  <td className="text-primary-light0 py-2 text-sm">Große Bilder, bei denen Dateigröße wichtiger ist</td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="py-2 pr-4 font-medium">Thumbnails und Vorschaubilder</td>
                  <td className="py-2 pr-4 whitespace-nowrap">65–75 %</td>
                  <td className="text-primary-light0 py-2 text-sm">Kleine Bilder - Qualitätsverlust kaum sichtbar</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-medium">Icons und einfache Grafiken</td>
                  <td className="py-2 pr-4 whitespace-nowrap">60–70 %</td>
                  <td className="text-primary-light0 py-2 text-sm">Wenig Details, hohe Komprimierbarkeit</td>
                </tr>
              </tbody>
            </table>
          </div>
        </SectionInfo>

        <Gap variant="line" />

        <SectionInfo title="Wie funktioniert Smart Quality?">
          <p className="text-mid">
            Smart Quality ist ein automatischer Optimierungsmechanismus, der sicherstellt, dass die konvertierte WebP-Datei nie größer als das Original ist. So funktioniert es:
          </p>
          <ol className="text-mid mt-3 ml-6 list-decimal space-y-2">
            <li>Das Tool konvertiert das Bild mit der von Ihnen eingestellten Qualität (z.{'\u00a0'}B. 80{'\u00a0'}%).</li>
            <li>Es prüft, ob die Ausgabedatei kleiner als das Original ist.</li>
            <li>Falls sie größer ist, wird die Qualität automatisch gesenkt und ein neuer Versuch gestartet.</li>
            <li>Der Vorgang wiederholt sich, bis die Ausgabedatei kleiner ist oder die Qualität unter ein sicheres Minimum fällt.</li>
          </ol>
          <p className="text-mid mt-3">
            Das Tool wählt automatisch die optimalen Einstellungen. Wenn ein Bild bereits stark komprimiert ist (z.{'\u00a0'}B. ein JPG mit 60{'\u00a0'}% Qualität), werden die Parameter automatisch angepasst, um dennoch eine Größenersparnis zu erzielen.
          </p>
          <p className="text-mid mt-3">Bei jeder Datei sehen Sie die Information &quot;Verwendete WebP-Qualität&quot; – das ist die tatsächlich angewandte Qualität nach eventueller Anpassung durch Smart Quality.</p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionInfo title="Einsparungsbericht – was zeigt er?">
          <p className="text-mid">Unter den Konvertierungsbuttons finden Sie eine Zusammenfassung mit Informationen zur Einsparung:</p>
          <ul className="text-mid mt-3 ml-6 list-disc space-y-2">
            <li>
              <strong>Gesamtgröße (Eingabe)</strong> – Summe der Größen aller Originaldateien.
            </li>
            <li>
              <strong>Gesamtgröße (nach Konvertierung)</strong> – Summe der Größen aller WebP-Dateien.
            </li>
            <li>
              <strong>Eingespart</strong> – wie viel Speicherplatz Sie durch die Konvertierung gewonnen haben (in KB/MB und Prozent).
            </li>
          </ul>
          <p className="text-mid mt-3">
            <strong>Zusammenfassung kopieren:</strong> Der Button kopiert den Bericht als Text in die Zwischenablage. Sie können ihn in Notizen, E-Mails oder Dokumente einfügen – nützlich zur Dokumentation der Bildoptimierung.
          </p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionInfo title="Wie viel kann man durch die Konvertierung zu WebP sparen?">
          <p className="text-mid mb-4">Die Einsparungen hängen vom Bildtyp und der ursprünglichen Komprimierung ab. Hier sind Beispielwerte für typische Dateien:</p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-lg border border-neutral-200 bg-white p-4">
              <p className="text-dark mb-2 font-semibold">JPG-Foto (Kamera)</p>
              <p className="text-light text-sm">2,4{'\u00a0'}MB → 890{'\u00a0'}KB</p>
              <p className="text-success-icon mt-1 text-sm font-medium">Ersparnis: ~63{'\u00a0'}%</p>
            </div>
            <div className="rounded-lg border border-neutral-200 bg-white p-4">
              <p className="text-dark mb-2 font-semibold">PNG-Grafik (Logo)</p>
              <p className="text-light text-sm">180{'\u00a0'}KB → 45{'\u00a0'}KB</p>
              <p className="text-success-icon mt-1 text-sm font-medium">Ersparnis: ~75{'\u00a0'}%</p>
            </div>
            <div className="rounded-lg border border-neutral-200 bg-white p-4">
              <p className="text-dark mb-2 font-semibold">Produktfoto</p>
              <p className="text-light text-sm">500{'\u00a0'}KB → 185{'\u00a0'}KB</p>
              <p className="text-success-icon mt-1 text-sm font-medium">Ersparnis: ~63{'\u00a0'}%</p>
            </div>
          </div>
          <p className="text-light mt-4 text-sm">
            Die tatsächlichen Einsparungen können variieren. Der Konverter zeigt für jede Datei die genaue Größe vor und nach der Konvertierung sowie eine Zusammenfassung der Gesamtersparnis.
          </p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionSteps
          title="Häufige Probleme und Lösungen"
          description="Falls die Ergebnisse nicht Ihren Erwartungen entsprechen:"
          grid="two"
          items={[
            {
              icon: <RiCheckboxCircleLine className="h-6 w-6" />,
              title: 'WebP-Datei ist kaum kleiner',
              description: 'Bei bereits stark komprimierten JPG-Dateien oder einfachen PNG-Grafiken fällt die Einsparung durch WebP geringer aus. Versuchen Sie eine niedrigere Qualitätsstufe.',
            },
            {
              icon: <RiAlertLine className="h-6 w-6" />,
              title: 'Sichtbarer Qualitätsverlust',
              description: 'Erhöhen Sie die Qualitätsstufe. Bei Fotos werden Unterschiede unter 80 % oft sichtbar, besonders bei feinen Details und Text.',
            },
            {
              icon: <RiCloseLine className="h-6 w-6" />,
              title: 'Datei wird nicht konvertiert',
              description: 'Prüfen Sie, ob die Datei im JPG- oder PNG-Format vorliegt. Andere Formate (GIF, BMP, TIFF) werden nicht unterstützt.',
            },
            {
              icon: <RiSettings3Line className="h-6 w-6" />,
              title: 'Transparenz geht verloren',
              description: 'WebP unterstützt Transparenz. Falls sie fehlt, prüfen Sie, ob die Originaldatei tatsächlich einen Alphakanal hat.',
            },
          ]}
        />

        <Gap variant="line" />

        <SectionSteps
          title="Wo sollten Sie WebP einsetzen?"
          description="WebP eignet sich für alle Bilder auf Ihrer Website:"
          grid="two"
          items={[
            {
              icon: <RiGlobalLine className="h-6 w-6" />,
              title: 'Webseiten und Landingpages',
              description: 'Schnellere Ladezeiten, bessere Core Web Vitals und ein verbessertes Google-Ranking.',
            },
            {
              icon: <RiShoppingBagLine className="h-6 w-6" />,
              title: 'E-Commerce und Produktbilder',
              description: 'Hunderte Produktbilder in kleinerer Dateigröße — spürbar schnellere Kategorieseiten.',
            },
            {
              icon: <RiArticleLine className="h-6 w-6" />,
              title: 'Blogs und Content-Seiten',
              description: 'Artikelbilder in WebP laden schneller und reduzieren den Datenverbrauch für mobile Nutzer.',
            },
            {
              icon: <RiImageLine className="h-6 w-6" />,
              title: 'Portfolios und Galerien',
              description: 'Hochwertige Bilder mit deutlich reduzierter Dateigröße - ohne sichtbaren Qualitätsverlust.',
            },
          ]}
        />

        <Gap variant="line" />

        <SectionSteps
          title="Was macht diesen Konverter besonders?"
          grid="two"
          items={[
            {
              icon: <RiShieldCheckLine className="h-6 w-6" />,
              title: 'Volle Privatsphäre',
              description: 'Alle Dateien werden lokal in Ihrem Browser verarbeitet. Nichts wird an einen Server gesendet.',
            },
            {
              icon: <RiInfinityFill className="h-6 w-6" />,
              title: 'Ohne Limits',
              description: 'Beliebig viele Dateien konvertieren — ohne Registrierung und ohne Einschränkungen.',
            },
            {
              icon: <RiSpeedLine className="h-6 w-6" />,
              title: 'Automatische Optimierung',
              description: 'Das Tool senkt die Qualität automatisch, wenn die Ausgabedatei größer als das Original wäre.',
            },
            {
              icon: <RiStackLine className="h-6 w-6" />,
              title: 'Stapelverarbeitung',
              description: 'Konvertieren Sie mehrere Dateien gleichzeitig und laden Sie alles als ZIP-Archiv herunter.',
            },
          ]}
        />

        <Gap variant="line" />

        <FaqPanels
          pageUrl={toAbsoluteUrl('/de/werkzeuge/jpg-png-zu-webp-konverter')}
          title="Häufig gestellte Fragen zum WebP-Konverter"
          openByDefault={1}
          items={[
            ...faqItems,
            {
              question: 'Kann ich auch andere Formate als JPG und PNG konvertieren?',
              answer:
                'Das Tool ist für die Formate JPG und PNG optimiert. Andere Formate (z.\u00a0B. GIF, BMP, TIFF) werden beim Hinzufügen automatisch übersprungen.',
              answerSchemaText: 'Nur JPG und PNG. Andere Formate werden automatisch übersprungen.',
            },
            {
              question: 'Was bedeutet die Meldung, dass die Datei größer als das Original ist?',
              answer:
                'Wenn Sie eine Warnung sehen, dass die Ausgabedatei größer als das Original ist, bedeutet das, dass das Originalbild bereits sehr stark komprimiert war. In diesem Fall bringt die Konvertierung zu WebP keine Einsparung – es ist besser, beim Originalformat zu bleiben oder eine niedrigere Qualitätsstufe zu versuchen.',
              answerSchemaText: 'Das Originalbild war bereits stark komprimiert. Originalformat beibehalten oder niedrigere Qualität versuchen.',
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
