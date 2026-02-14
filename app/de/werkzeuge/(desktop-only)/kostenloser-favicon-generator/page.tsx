import Script from 'next/script';
import HeroBanner from '@/components/sections/HeroBanner';
import Breadcrumbs from '@/components/sections/BreadCrumbs';
import FaviconGenerator from '@/components/sections/tools/FaviconGenerator';
import ToolsCarousel from '@/components/sections/tools/ToolsCarousel';
import FaqPanels from '@/components/ui/FaqPanels';
import Gap from '@/components/ui/Gap';
import SectionInfo from '@/components/ui/sections/SectionInfo';
import SectionSteps from '@/components/ui/sections/SectionSteps';
import SectionDemo from '@/components/ui/sections/SectionDemo';
import Wrapper from '@/components/ui/Wrapper';
import ToolEditorLayout from '@/components/ui/ToolEditorLayout';
import { toAbsoluteUrl, siteUrl } from '@/utils/absoluteUrl';
import { getToolAlternates } from '@/lib/i18n/pages/tool-meta';
import type { Metadata } from 'next';
import AdSense from '@/components/ui/AdSense';
import {
  RiUploadLine,
  RiAppsLine,
  RiDownloadLine,
  RiCheckboxCircleLine,
  RiShieldCheckLine,
  RiInfinityLine,
  RiGlobalLine,
  RiSmartphoneLine,
  RiSearchLine,
  RiBookmarkLine,
  RiCodeLine,
  RiFileZipLine,
} from 'react-icons/ri';

const LOCALE = 'de' as const;
const TOOL_KEY = 'favicon' as const;

export const metadata: Metadata = {
  title: 'Kostenloser Favicon-Generator online - favicon.ico und PNG-Symbole',
  description:
    'Kostenloser Online-Favicon-Generator. Erstellen Sie favicon.ico und PNG-Symbole 16x16, 32x32, 180x180, 192x192 und 512x512 aus einem einzigen Bild - konform mit Browser- und Lighthouse-Anforderungen.',
  alternates: getToolAlternates(TOOL_KEY, LOCALE),
  openGraph: {
    title: 'Kostenloser Favicon-Generator online',
    description: 'Erstellen Sie favicon.ico und PNG-Symbole aus einem einzigen Bild - konform mit Browser- und Lighthouse-Anforderungen.',
    url: toAbsoluteUrl('/de/werkzeuge/kostenloser-favicon-generator'),
    type: 'website',
    images: [{ url: toAbsoluteUrl('/assets/tools/narzedzia-darmowy-generator-favicon-ico.webp'), width: 1200, height: 630 }],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Online-Favicon-Generator - favicon.ico und PNG-Symbole',
  alternateName: ['Favicon erstellen online', 'favicon.ico Generator', 'Apple Touch Icon Generator', 'PWA-Icons erstellen', 'Favicon aus Bild generieren', 'Website-Symbol erstellen'],
  url: toAbsoluteUrl('/de/werkzeuge/kostenloser-favicon-generator'),
  applicationCategory: 'DesignApplication',
  applicationSubCategory: 'FaviconTool',
  operatingSystem: 'Any',
  description: 'Kostenloser Online-Favicon-Generator. favicon.ico und PNG-Symbole 16x16, 32x32, 180x180, 192x192 und 512x512. site.webmanifest optional. Lighthouse-konform.',
  featureList: [
    'favicon.ico (16x16 + 32x32 kombiniert)',
    'PNG-Symbole: 16x16, 32x32, 180x180, 192x192, 512x512',
    'Apple Touch Icon (180x180)',
    'Android/PWA-Symbole (192x192, 512x512)',
    'Optionaler site.webmanifest',
    'ZIP-Download aller Dateien',
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
  name: 'So erstellen Sie ein Favicon für Ihre Website',
  description: 'Laden Sie ein Bild hoch und generieren Sie favicon.ico und PNG-Symbole in allen erforderlichen Größen - konform mit Browser- und Lighthouse-Anforderungen.',
  url: toAbsoluteUrl('/de/werkzeuge/kostenloser-favicon-generator'),
  step: [
    { '@type': 'HowToStep', name: 'Bild hochladen', text: 'Laden Sie ein quadratisches Bild hoch (mindestens 512x512 px). Unterstützt: PNG, JPG, WebP.' },
    { '@type': 'HowToStep', name: 'Optionen wählen', text: 'Wählen Sie die gewünschten Größen und ob ein site.webmanifest generiert werden soll.' },
    { '@type': 'HowToStep', name: 'ZIP herunterladen', text: 'Laden Sie alle generierten Dateien als ZIP-Archiv herunter und fügen Sie sie Ihrer Website hinzu.' },
  ],
  publisher: { '@type': 'Organization', name: 'Arteon Agency', url: siteUrl },
};

const faqItems = [
  {
    question: 'Was ist ein Favicon?',
    answer:
      'Ein Favicon ist das kleine Symbol, das im Browser-Tab neben dem Seitentitel angezeigt wird. Es erscheint auch in Lesezeichen, im Verlauf, auf dem Startbildschirm mobiler Geräte und in den Suchergebnissen. Ein professionelles Favicon stärkt die Markenidentität und verbessert die Wiedererkennung.',
    answerSchemaText: 'Ein kleines Symbol im Browser-Tab, in Lesezeichen und auf dem Startbildschirm. Stärkt die Markenidentität.',
  },
  {
    question: 'Welche Größen generiert das Tool?',
    answer:
      'Das Tool generiert favicon.ico (16x16 und 32x32 kombiniert) sowie PNG-Symbole in den Größen 16x16, 32x32, 180x180 (Apple Touch Icon), 192x192 und 512x512 (Android/PWA). Alle Größen entsprechen den aktuellen Browser- und Lighthouse-Anforderungen.',
    answerSchemaText: 'favicon.ico (16+32) + PNG: 16, 32, 180 (Apple), 192, 512 (PWA). Lighthouse-konform.',
  },
  {
    question: 'Welches Bildformat sollte ich verwenden?',
    answer:
      'Am besten ein quadratisches Bild in PNG, JPG oder WebP mit mindestens 512x512 Pixeln. Das Tool skaliert das Bild automatisch auf alle erforderlichen Größen. Je größer und detaillierter das Ausgangsbild, desto besser das Ergebnis.',
    answerSchemaText: 'Quadratisches Bild (PNG/JPG/WebP) mit mindestens 512x512 px.',
  },
  {
    question: 'Wird auch ein site.webmanifest generiert?',
    answer:
      'Ja. Sie können optional eine site.webmanifest-Datei generieren lassen, die die PWA-Symbole (192x192 und 512x512) referenziert. Die Datei wird zusammen mit den Symbolen im ZIP-Archiv heruntergeladen.',
    answerSchemaText: 'Ja, optional. Referenziert die PWA-Symbole und wird im ZIP mitgeliefert.',
  },
  {
    question: 'Werden meine Bilder an einen Server gesendet?',
    answer: 'Nein. Die gesamte Verarbeitung erfolgt lokal in Ihrem Browser mithilfe der Canvas API. Ihre Dateien verlassen nie Ihren Computer und werden nirgendwo gespeichert.',
    answerSchemaText: 'Nein. Verarbeitung lokal im Browser. Dateien verlassen nicht Ihr Gerät.',
  },
  {
    question: 'Was prüft Lighthouse in Bezug auf Favicons?',
    answer:
      'Lighthouse prüft, ob eine Seite ein gültiges Favicon hat. Es erwartet mindestens eine favicon.ico-Datei oder ein <link rel="icon">-Element. Zusätzlich prüft es, ob ein Apple Touch Icon (180x180) und PWA-Symbole im site.webmanifest vorhanden sind. Dieses Tool generiert alle erforderlichen Dateien.',
    answerSchemaText: 'Lighthouse prüft favicon.ico, Apple Touch Icon und PWA-Symbole im Manifest.',
  },
  {
    question: 'Wie binde ich die Favicons in meine Website ein?',
    answer:
      'Kopieren Sie die generierten Dateien in das Stammverzeichnis Ihrer Website. Fügen Sie dann die entsprechenden <link>-Elemente in den <head>-Bereich ein. Unterhalb des Tools finden Sie eine Anleitung mit dem benötigten HTML-Code.',
    answerSchemaText: 'Dateien ins Stammverzeichnis kopieren und <link>-Elemente in den <head>-Bereich einfügen.',
  },
];

export default function FaviconGeneratorPage() {
  return (
    <>
      <Script id="ld-json-favicon-generator-de" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Script id="ld-json-favicon-howto-de" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />

      <HeroBanner
        title="Favicon-Generator"
        description="Erstellen Sie aus einem einzigen Bild favicon.ico und PNG-Symbole in allen erforderlichen Größen. Konform mit Browser- und Lighthouse-Anforderungen - alles läuft lokal in Ihrem Browser."
        overlay="black"
        backgroundImage="/assets/tools/narzedzia-darmowy-generator-favicon-ico.webp"
      />

      <Breadcrumbs second={{ href: '/de/werkzeuge', label: 'Werkzeuge' }} third={{ href: '/de/werkzeuge/kostenloser-favicon-generator', label: 'Favicon-Generator' }} includeJsonLd locale="de" />

      <ToolEditorLayout>
        <AdSense variant="tool-banner" className="my-3" />
        <FaviconGenerator />
      </ToolEditorLayout>

      <Wrapper>
        <Gap variant="line" />

        <SectionInfo title="Warum braucht jede Website ein Favicon?">
          <p className="text-mid">
            Ein Favicon ist mehr als ein kleines Symbol - es ist ein wesentlicher Teil der Markenidentität im Web. Browser zeigen es im Tab an, Nutzer sehen es in Lesezeichen und im Verlauf, und
            Lighthouse prüft seine Präsenz als Best Practice. Ohne Favicon wirkt eine Website unvollständig.
          </p>
          <p className="text-mid mt-3">
            Moderne Websites benötigen Favicons in mehreren Größen: ein favicon.ico für ältere Browser, PNG-Symbole für Desktop-Browser, ein Apple Touch Icon für iOS-Geräte und größere Symbole für
            PWA-Installationen auf Android. Dieses Tool generiert alle erforderlichen Dateien aus einem einzigen Bild.
          </p>
        </SectionInfo>

        <Gap size="sm" />

        <SectionSteps
          title="So verwenden Sie den Favicon-Generator"
          description="Die Favicon-Generierung dauert nur wenige Sekunden:"
          grid="three"
          items={[
            {
              icon: <RiUploadLine className="h-6 w-6" />,
              title: '1. Bild hochladen',
              description: 'Laden Sie ein quadratisches Bild hoch (mindestens 512x512 px). Unterstützt: PNG, JPG, WebP.',
            },
            {
              icon: <RiAppsLine className="h-6 w-6" />,
              title: '2. Optionen wählen',
              description: 'Wählen Sie die gewünschten Größen und ob ein site.webmanifest generiert werden soll.',
            },
            {
              icon: <RiDownloadLine className="h-6 w-6" />,
              title: '3. ZIP herunterladen',
              description: 'Laden Sie alle generierten Dateien als ZIP-Archiv herunter und fügen Sie sie Ihrer Website hinzu.',
            },
          ]}
        />

        <Gap variant="line" />

        <SectionDemo
          title="Welche Dateien werden generiert?"
          demo={
            <div className="overflow-x-auto">
              <table className="text-mid w-full text-left text-sm!">
                <thead>
                  <tr className="border-b border-neutral-200">
                    <th className="py-2 pr-4 font-semibold">Datei</th>
                    <th className="py-2 pr-4 font-semibold">Größe</th>
                    <th className="py-2 font-semibold">Verwendung</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-neutral-100">
                    <td className="py-2 pr-4 font-medium">favicon.ico</td>
                    <td className="py-2 pr-4">16×16 + 32×32</td>
                    <td className="text-primary-light0 py-2">Browser-Tab (Standard)</td>
                  </tr>
                  <tr className="border-b border-neutral-100">
                    <td className="py-2 pr-4 font-medium">favicon-16x16.png</td>
                    <td className="py-2 pr-4">16×16</td>
                    <td className="text-primary-light0 py-2">Browser-Tab (kleine Darstellung)</td>
                  </tr>
                  <tr className="border-b border-neutral-100">
                    <td className="py-2 pr-4 font-medium">favicon-32x32.png</td>
                    <td className="py-2 pr-4">32×32</td>
                    <td className="text-primary-light0 py-2">Browser-Tab (Retina)</td>
                  </tr>
                  <tr className="border-b border-neutral-100">
                    <td className="py-2 pr-4 font-medium">apple-touch-icon.png</td>
                    <td className="py-2 pr-4">180×180</td>
                    <td className="text-primary-light0 py-2">iOS-Startbildschirm, Safari</td>
                  </tr>
                  <tr className="border-b border-neutral-100">
                    <td className="py-2 pr-4 font-medium">android-chrome-192x192.png</td>
                    <td className="py-2 pr-4">192×192</td>
                    <td className="text-primary-light0 py-2">Android, PWA-Installation</td>
                  </tr>
                  <tr className="border-b border-neutral-100">
                    <td className="py-2 pr-4 font-medium">android-chrome-512x512.png</td>
                    <td className="py-2 pr-4">512×512</td>
                    <td className="text-primary-light0 py-2">PWA-Splashscreen, Google-Suchergebnisse</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-medium">site.webmanifest</td>
                    <td className="py-2 pr-4">-</td>
                    <td className="text-primary-light0 py-2">PWA-Konfiguration (optional)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          }
        >
          <p className="text-mid">Das Tool generiert alle Favicon-Dateien, die von modernen Browsern und Lighthouse gefordert werden. Jede Datei hat eine bestimmte Rolle:</p>
          <ul className="text-mid mt-3 list-disc space-y-2 pl-5">
            <li>
              <strong>favicon.ico</strong> - das klassische Format, das von allen Browsern unterstützt wird. Enthält 16×16 und 32×32 in einer Datei.
            </li>
            <li>
              <strong>Apple Touch Icon</strong> - wird auf dem iOS-Startbildschirm angezeigt, wenn ein Nutzer die Website als Lesezeichen hinzufügt.
            </li>
            <li>
              <strong>PWA-Symbole</strong> - für Android-Geräte und Progressive Web Apps. Werden bei der Installation auf dem Startbildschirm verwendet.
            </li>
          </ul>
        </SectionDemo>

        <Gap variant="line" />

        <SectionSteps
          title="Wo wird das Favicon angezeigt?"
          description="Das Favicon erscheint an verschiedenen Stellen im Web:"
          grid="three"
          items={[
            {
              icon: <RiGlobalLine className="h-6 w-6" />,
              title: 'Browser-Tabs',
              description: 'Das Favicon erscheint neben dem Seitentitel im Browser-Tab - der sichtbarste Ort.',
            },
            {
              icon: <RiBookmarkLine className="h-6 w-6" />,
              title: 'Lesezeichen und Verlauf',
              description: 'Browser verwenden das Favicon in der Lesezeichenleiste und im Browserverlauf.',
            },
            {
              icon: <RiSmartphoneLine className="h-6 w-6" />,
              title: 'Startbildschirm (mobil)',
              description: 'Wenn ein Nutzer die Website zum Startbildschirm hinzufügt, wird das Apple Touch Icon oder PWA-Symbol verwendet.',
            },
            {
              icon: <RiSearchLine className="h-6 w-6" />,
              title: 'Google-Suchergebnisse',
              description: 'Google zeigt das Favicon neben der URL in den mobilen Suchergebnissen an.',
            },
            {
              icon: <RiCodeLine className="h-6 w-6" />,
              title: 'Lighthouse-Audit',
              description: 'Lighthouse prüft, ob ein Favicon vorhanden ist - es ist eine Best Practice für Web Performance.',
            },
            {
              icon: <RiFileZipLine className="h-6 w-6" />,
              title: 'PWA-Installation',
              description: 'Bei der Installation einer PWA werden die 192×192- und 512×512-Symbole als App-Icon verwendet.',
            },
          ]}
        />

        <Gap variant="line" />

        <SectionSteps
          title="Wie laden Sie die generierten Dateien herunter?"
          description="Nach der Generierung der Icons stehen Ihnen mehrere Download-Optionen zur Verfügung:"
          grid="two"
          items={[
            {
              icon: <RiFileZipLine className="h-6 w-6" />,
              title: 'Alle als ZIP herunterladen',
              description: 'Der Button „Alle herunterladen" packt alle generierten Dateien in ein einziges ZIP-Archiv. Die bequemste Option, wenn Sie das komplette Icon-Set benötigen.',
            },
            {
              icon: <RiDownloadLine className="h-6 w-6" />,
              title: 'Einzelne Dateien herunterladen',
              description: 'Jedes generierte Icon hat einen eigenen Download-Button – Sie können eine einzelne Datei herunterladen, ohne das gesamte Set. Nützlich bei einer Aktualisierung einzelner Größen.',
            },
          ]}
        />

        <Gap variant="line" />

        <SectionInfo title="Welches Quellbild eignet sich am besten?">
          <p className="text-mid mb-4">
            Ein Favicon ist eine sehr kleine Grafik – teilweise nur 16×16 Pixel. Daher eignet sich nicht jedes Bild als Quelle:
          </p>
          <ul className="text-mid list-disc space-y-2 pl-5">
            <li><strong>Einfache Formen und lesbare Symbole</strong> – schlichte Logos, einzelne Buchstaben oder Symbole funktionieren am besten. Vermeiden Sie komplexe Grafiken mit vielen Details.</li>
            <li><strong>Quadratisches Format</strong> – ein Favicon ist quadratisch. Bilder mit anderen Proportionen als 1:1 werden zugeschnitten oder verzerrt.</li>
            <li><strong>Ausreichende Größe</strong> – wir empfehlen ein Quellbild von mindestens 512×512 Pixeln. Kleinere Bilder werden hochskaliert.</li>
            <li><strong>SVG als ideale Quelle</strong> – SVG skaliert verlustfrei, sodass Icons in allen Größen scharf sind.</li>
            <li><strong>Kontrastreiche Farben</strong> – ein Favicon muss auf verschiedenen Hintergründen sichtbar sein (helle Tabs, Dark Mode). Wählen Sie Farben, die die Lesbarkeit bewahren.</li>
          </ul>
        </SectionInfo>

        <Gap variant="line" />

        <SectionSteps
          title="Was macht diesen Favicon-Generator besonders?"
          grid="two"
          items={[
            {
              icon: <RiCheckboxCircleLine className="h-6 w-6" />,
              title: 'Lighthouse-konform',
              description: 'Alle Größen, die Lighthouse und moderne Browser verlangen — in einem Schritt generiert.',
            },
            {
              icon: <RiShieldCheckLine className="h-6 w-6" />,
              title: 'Volle Privatsphäre',
              description: 'Alle Dateien werden lokal in Ihrem Browser verarbeitet - nichts wird an einen Server gesendet.',
            },
            {
              icon: <RiAppsLine className="h-6 w-6" />,
              title: 'Alle Formate in einem Schritt',
              description: 'favicon.ico, PNG-Symbole und optional site.webmanifest - alles aus einem einzigen Bild.',
            },
            {
              icon: <RiInfinityLine className="h-6 w-6" />,
              title: 'Ohne Limits',
              description: 'Favicons generieren — ohne Registrierung und ohne Einschränkungen.',
            },
          ]}
        />

        <Gap variant="line" />

        <FaqPanels
          pageUrl={toAbsoluteUrl('/de/werkzeuge/kostenloser-favicon-generator')}
          title="Häufig gestellte Fragen zum Favicon-Generator"
          openByDefault={1}
          items={[
            ...faqItems,
            {
              question: 'Warum ändert sich das Favicon nicht nach dem Hochladen einer neuen Datei?',
              answer:
                'Browser speichern Favicons aggressiv im Cache. Nach dem Hochladen eines neuen Icons sollten Sie den Browser-Cache leeren oder einen Versionsparameter zum Dateipfad hinzufügen (z.\u00a0B. /favicon.ico?v=2). Die Änderung kann erst nach einigen Stunden sichtbar werden.',
              answerSchemaText: 'Browser cachen Favicons aggressiv. Cache leeren oder Versionsparameter hinzufügen.',
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
