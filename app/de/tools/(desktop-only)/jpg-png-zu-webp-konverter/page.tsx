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
    canonical: toAbsoluteUrl('/de/tools/jpg-png-zu-webp-konverter'),
    languages: {
      pl: toAbsoluteUrl('/narzedzia/jpg-png-na-webp-bez-limitu'),
      en: toAbsoluteUrl('/en/tools/jpg-png-to-webp-unlimited'),
      de: toAbsoluteUrl('/de/tools/jpg-png-zu-webp-konverter'),
    },
  },
  openGraph: {
    title: 'Kostenloser JPG/PNG-zu-WebP-Konverter online - ohne Limits',
    description: 'Reduzieren Sie die Dateigröße von Bildern um bis zu 35\u00a0% ohne Qualitätsverlust. Ohne Registrierung, ohne Limits.',
    url: toAbsoluteUrl('/de/tools/jpg-png-zu-webp-konverter'),
    type: 'website',
    images: [{ url: toAbsoluteUrl('/assets/tools/narzedzia-jpg-png-na-webp-bez-limitu.webp'), width: 1200, height: 630 }],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'JPG- und PNG-zu-WebP-Konverter online - ohne Limits',
  alternateName: ['WebP-Konverter online', 'JPG in WebP umwandeln', 'PNG in WebP konvertieren', 'Bilder in WebP umwandeln', 'WebP-Bildkomprimierung', 'Mehrere Bilder gleichzeitig in WebP umwandeln',],
  url: toAbsoluteUrl('/de/tools/jpg-png-zu-webp-konverter'),
  applicationCategory: 'MultimediaApplication',
  applicationSubCategory: 'ImageConverter',
  operatingSystem: 'Any',
  description:
    'Kostenloser Online-Konverter von JPG und PNG zu WebP. Reduzieren Sie die Dateigröße um bis zu 35\u00a0% ohne Qualitätsverlust. Stapelverarbeitung, automatische Optimierung, lokale Verarbeitung.',
  featureList: [
    'JPG- und PNG-Dateien zu WebP konvertieren',
    'Dateigröße um bis zu 35 % reduzieren',
    'Einstellbare Qualität (0–100 %)',
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
  url: toAbsoluteUrl('/de/tools/jpg-png-zu-webp-konverter'),
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

      <Breadcrumbs second={{ href: '/de/tools', label: 'Tools' }} third={{ href: '/de/tools/jpg-png-zu-webp-konverter', label: 'JPG/PNG zu WebP' }} includeJsonLd locale="de" />

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

        <FaqPanels pageUrl={toAbsoluteUrl('/de/tools/jpg-png-zu-webp-konverter')} title="Häufig gestellte Fragen zum WebP-Konverter" openByDefault={1} items={faqItems} />

        <Gap variant="line" />

        <ToolsCarousel title="Weitere Tools entdecken" />

        <Gap size="sm" />
      </Wrapper>
    </>
  );
}
