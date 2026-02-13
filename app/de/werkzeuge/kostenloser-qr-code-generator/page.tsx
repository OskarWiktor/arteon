import Script from 'next/script';
import HeroBanner from '@/components/sections/HeroBanner';
import Breadcrumbs from '@/components/sections/BreadCrumbs';
import QrCodeGenerator from '@/components/sections/tools/QrCodeGenerator';
import ToolsCarousel from '@/components/sections/tools/ToolsCarousel';
import FaqPanels from '@/components/ui/FaqPanels';
import Gap from '@/components/ui/Gap';
import SectionInfo from '@/components/ui/sections/SectionInfo';
import SectionSteps from '@/components/ui/sections/SectionSteps';
import SectionDemo from '@/components/ui/sections/SectionDemo';
import SectionFeatureComparison from '@/components/ui/sections/SectionFeatureComparison';
import Wrapper from '@/components/ui/Wrapper';
import ToolEditorLayout from '@/components/ui/ToolEditorLayout';
import { toAbsoluteUrl, siteUrl } from '@/utils/absoluteUrl';
import type { Metadata } from 'next';
import AdSense from '@/components/ui/AdSense';
import {
  RiQrCodeLine,
  RiDownloadLine,
  RiSettings3Line,
  RiGlobalLine,
  RiContactsLine,
  RiPaletteLine,
  RiInfinityLine,
  RiFileTextLine,
  RiMailLine,
  RiPhoneLine,
  RiShieldCheckLine,
  RiRulerLine,
  RiCheckboxCircleLine,
  RiUserLine,
  RiPrinterLine,
  RiSmartphoneLine,
} from 'react-icons/ri';

export const metadata: Metadata = {
  title: 'Kostenloser QR-Code-Generator online - PNG und SVG',
  description: 'Kostenloser Online-QR-Code-Generator. Erstellen Sie QR-Codes für Websites, vCards, Speisekarten oder Flyer. Export als PNG und SVG, ohne Anmeldung, ohne Limits.',
  alternates: {
    canonical: toAbsoluteUrl('/de/werkzeuge/kostenloser-qr-code-generator'),
    languages: {
      pl: toAbsoluteUrl('/narzedzia/darmowy-generator-kodow-qr'),
      en: toAbsoluteUrl('/en/tools/free-qr-code-generator'),
      de: toAbsoluteUrl('/de/werkzeuge/kostenloser-qr-code-generator'),
      es: toAbsoluteUrl('/es/herramientas/generador-de-codigos-qr-gratuito'),
      fr: toAbsoluteUrl('/fr/outils/generateur-de-codes-qr-gratuit'),
    },
  },
  openGraph: {
    title: 'Kostenloser QR-Code-Generator online',
    description: 'Erstellen Sie QR-Codes für Websites, vCards, Speisekarten oder Flyer. Export als PNG und SVG, ohne Anmeldung.',
    url: toAbsoluteUrl('/de/werkzeuge/kostenloser-qr-code-generator'),
    type: 'website',
    images: [{ url: toAbsoluteUrl('/assets/tools/narzedzia-generator-kodu-qr.webp'), width: 1200, height: 630 }],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Kostenloser QR-Code-Generator online - PNG und SVG',
  alternateName: [
    'QR-Code erstellen online',
    'vCard-QR-Code-Generator',
    'QR-Code für Visitenkarten',
    'QR-Code-Generator ohne Anmeldung',
    'QR-Code für Flyer und Plakate',
    'QR-Code mit eigenem Design',
  ],
  url: toAbsoluteUrl('/de/werkzeuge/kostenloser-qr-code-generator'),
  applicationCategory: 'UtilityApplication',
  applicationSubCategory: 'QRCodeTool',
  operatingSystem: 'Any',
  description: 'Kostenloser Online-QR-Code-Generator. Erstellen Sie QR-Codes für URLs, vCards, E-Mail, Telefon und Freitext. Export als PNG und SVG. Anpassbare Farben, Größe und Fehlerkorrektur.',
  featureList: [
    '5 Datentypen: URL, Text, vCard, E-Mail, Telefon',
    'Export als PNG und SVG',
    '4 Fehlerkorrekturstufen (L, M, Q, H)',
    'Anpassbare QR-Code-Farbe und Hintergrundfarbe',
    'Kontrastwarnung bei zu geringem Farbunterschied',
    'Einstellbare Größe und Rand',
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
  name: 'So erstellen Sie einen QR-Code',
  description: 'Erstellen Sie einen QR-Code für URLs, vCards, E-Mail, Telefon oder Freitext. Passen Sie Farben, Größe und Fehlerkorrektur an und laden Sie den Code als PNG oder SVG herunter.',
  url: toAbsoluteUrl('/de/werkzeuge/kostenloser-qr-code-generator'),
  step: [
    { '@type': 'HowToStep', name: 'Datentyp wählen', text: 'Wählen Sie den Typ: URL, Text, vCard, E-Mail oder Telefon. Jeder Typ hat ein eigenes Eingabeformular.' },
    { '@type': 'HowToStep', name: 'Inhalt eingeben', text: 'Geben Sie die Daten ein - z.\u00a0B. eine URL, Kontaktdaten im vCard-Format oder eine Telefonnummer.' },
    { '@type': 'HowToStep', name: 'Einstellungen anpassen', text: 'Passen Sie Größe, Rand, Farben und Fehlerkorrekturstufe an.' },
    { '@type': 'HowToStep', name: 'QR-Code herunterladen', text: 'Laden Sie den QR-Code als PNG (für Web) oder SVG (für Druck) herunter.' },
  ],
  publisher: { '@type': 'Organization', name: 'Arteon Agency', url: siteUrl },
};

const faqItems = [
  {
    question: 'Welche Datentypen kann ich als QR-Code kodieren?',
    answer: 'URL-Adressen, Freitext, Visitenkarten (vCard), E-Mail-Adressen und Telefonnummern. Jeder Datentyp hat ein eigenes Eingabeformular mit den relevanten Feldern.',
    answerSchemaText: '5 Typen: URL, Text, vCard, E-Mail, Telefon.',
  },
  {
    question: 'Was ist der Unterschied zwischen PNG und SVG?',
    answer:
      'PNG ist eine Rastergrafik mit fester Auflösung - ideal für Web, E-Mail und Bildschirmdarstellung. SVG ist eine Vektorgrafik, die ohne Qualitätsverlust auf jede Größe skaliert werden kann - ideal für Druck, Plakate und großformatige Materialien.',
    answerSchemaText: 'PNG = Rastergrafik für Web. SVG = Vektorgrafik für Druck in jeder Größe.',
  },
  {
    question: 'Was ist die Fehlerkorrekturstufe?',
    answer:
      'Die Fehlerkorrekturstufe bestimmt, welcher Anteil des QR-Codes beschädigt sein darf und dennoch lesbar bleibt. Stufe L (7\u00a0%), M (15\u00a0%), Q (25\u00a0%), H (30\u00a0%). Je höher die Stufe, desto größer der QR-Code, aber desto zuverlässiger das Scannen bei Beschädigungen oder Verschmutzungen.',
    answerSchemaText: 'Bestimmt die Fehlertoleranz: L (7%), M (15%), Q (25%), H (30%). Höhere Stufen sind zuverlässiger.',
  },
  {
    question: 'Welche Größe sollte mein QR-Code haben?',
    answer:
      'Für die Anzeige auf Bildschirmen reichen 200–300\u00a0px. Für Druckmaterialien empfehlen wir mindestens 300\u00a0px mit Fehlerkorrekturstufe H. Für Plakate und große Formate verwenden Sie SVG - es skaliert ohne Qualitätsverlust.',
    answerSchemaText: 'Web: 200–300 px. Druck: min. 300 px mit Stufe H. Große Formate: SVG verwenden.',
  },
  {
    question: 'Kann ich die Farben des QR-Codes anpassen?',
    answer:
      'Ja. Sie können die Farbe des QR-Codes und die Hintergrundfarbe frei wählen. Das Tool warnt Sie automatisch, wenn der Kontrast zwischen den Farben zu gering ist - denn QR-Scanner benötigen ausreichenden Farbunterschied.',
    answerSchemaText: 'Ja, QR-Code-Farbe und Hintergrundfarbe sind frei wählbar. Kontrastwarnung bei zu geringem Unterschied.',
  },
  {
    question: 'Werden meine Daten an einen Server gesendet?',
    answer: 'Nein. Der QR-Code wird vollständig in Ihrem Browser generiert. Die eingegebenen Daten verlassen Ihr Gerät nicht. Auch der Download erfolgt lokal - ohne Serververbindung.',
    answerSchemaText: 'Nein. Der QR-Code wird lokal im Browser generiert. Keine Daten werden gesendet.',
  },
  {
    question: 'Was ist ein vCard-QR-Code?',
    answer:
      'Ein vCard-QR-Code enthält Kontaktdaten (Name, Telefon, E-Mail, Adresse, Website) im standardisierten vCard-Format. Beim Scannen wird der Kontakt automatisch im Adressbuch des Smartphones gespeichert - ohne manuelles Abtippen.',
    answerSchemaText: 'Ein QR-Code mit Kontaktdaten im vCard-Format. Beim Scannen wird der Kontakt automatisch gespeichert.',
  },
];

export default function QrCodeGeneratorPage() {
  return (
    <>
      <Script id="ld-json-qr-code-de" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Script id="ld-json-qr-howto-de" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />

      <HeroBanner
        title="Kostenloser QR-Code-Generator"
        description="Erstellen Sie QR-Codes für Websites, Visitenkarten, Speisekarten und Flyer. Passen Sie Größe, Farben und Fehlerkorrekturstufe an. Export als PNG und SVG - ohne Anmeldung, ohne Limits."
        overlay="black"
        backgroundImage="/assets/tools/narzedzia-generator-kodu-qr.webp"
      />

      <Breadcrumbs second={{ href: '/de/werkzeuge', label: 'Werkzeuge' }} third={{ href: '/de/werkzeuge/kostenloser-qr-code-generator', label: 'QR-Code-Generator' }} includeJsonLd locale="de" />

      <ToolEditorLayout>
        <AdSense variant="tool-banner" className="my-3" />
        <QrCodeGenerator />
      </ToolEditorLayout>

      <Wrapper>
        <Gap variant="line" />

        <SectionInfo title="QR-Codes für jede Anwendung">
          <p className="text-mid">
            Der QR-Code-Generator erstellt Codes für verschiedene Datentypen: Website-URLs, Freitext, Visitenkarten im vCard-Format, E-Mail-Adressen und Telefonnummern. Alle Codes werden lokal in
            Ihrem Browser generiert - es werden keine Daten an einen Server gesendet.
          </p>
          <p className="text-mid mt-3">
            Ein QR-Code (Quick Response Code) ist ein zweidimensionaler Strichcode, der von Smartphones und speziellen Scannern gelesen werden kann. Im Gegensatz zu klassischen Strichcodes speichert
            ein QR-Code deutlich mehr Informationen und kann in Sekundenbruchteilen gescannt werden.
          </p>
        </SectionInfo>

        <Gap size="sm" />

        <SectionSteps
          title="So verwenden Sie den QR-Code-Generator"
          description="Die Erstellung eines QR-Codes dauert weniger als eine Minute:"
          grid="four"
          items={[
            {
              icon: <RiQrCodeLine className="h-6 w-6" />,
              title: '1. Datentyp wählen',
              description: 'Wählen Sie den Typ: URL, Text, vCard, E-Mail oder Telefon. Jeder Typ hat ein eigenes Eingabeformular.',
            },
            {
              icon: <RiFileTextLine className="h-6 w-6" />,
              title: '2. Inhalt eingeben',
              description: 'Geben Sie die Daten ein - z.\u00a0B. eine URL, Kontaktdaten oder eine Telefonnummer.',
            },
            {
              icon: <RiSettings3Line className="h-6 w-6" />,
              title: '3. Anpassen',
              description: 'Passen Sie Größe, Rand, Farben und Fehlerkorrekturstufe an.',
            },
            {
              icon: <RiDownloadLine className="h-6 w-6" />,
              title: '4. Herunterladen',
              description: 'Laden Sie den QR-Code als PNG (für Web) oder SVG (für Druck) herunter.',
            },
          ]}
        />

        <Gap variant="line" />

        <SectionSteps
          title="5 Datentypen - was kann der QR-Code enthalten?"
          description="Jeder Datentyp hat ein eigenes Formular mit den relevanten Eingabefeldern:"
          grid="three"
          items={[
            {
              icon: <RiGlobalLine className="h-6 w-6" />,
              title: 'URL',
              description: 'Nutzer direkt zu einer Webseite, Landingpage oder einem Online-Shop weiterleiten. Der gescannte Link öffnet sich im Browser.',
            },
            {
              icon: <RiFileTextLine className="h-6 w-6" />,
              title: 'Freitext',
              description: 'Beliebiger Text — Notizen, Anleitungen, WLAN-Zugangsdaten oder kurze Nachrichten.',
            },
            {
              icon: <RiContactsLine className="h-6 w-6" />,
              title: 'vCard (Visitenkarte)',
              description: 'Name, Telefon, E-Mail, Adresse und Website als Kontakt. Beim Scannen wird der Kontakt automatisch gespeichert.',
            },
            {
              icon: <RiMailLine className="h-6 w-6" />,
              title: 'E-Mail',
              description: 'Empfänger, Betreff und Nachrichtentext als vorgefüllte E-Mail. Beim Scannen öffnet sich das E-Mail-Programm.',
            },
            {
              icon: <RiPhoneLine className="h-6 w-6" />,
              title: 'Telefon',
              description: 'Telefonnummer als anrufbarer Link. Beim Scannen wird der Anruf direkt gestartet.',
            },
          ]}
        />

        <Gap variant="line" />

        <SectionDemo
          title="Technische Spezifikation von QR-Codes"
          demo={
            <div className="space-y-3">
              <div className="space-y-2">
                <div className="flex items-center justify-between rounded-lg border border-neutral-200 bg-white p-3">
                  <span className="text-dark text-sm! font-medium">Kapazität</span>
                  <span className="text-mid text-sm!">bis zu 4296 Zeichen</span>
                </div>
                <div className="flex items-center justify-between rounded-lg border border-neutral-200 bg-white p-3">
                  <span className="text-dark text-sm! font-medium">Fehlerkorrektur</span>
                  <span className="text-mid text-sm!">7{'\u00a0'}% – 30{'\u00a0'}%</span>
                </div>
                <div className="flex items-center justify-between rounded-lg border border-neutral-200 bg-white p-3">
                  <span className="text-dark text-sm! font-medium">Min. Druckgröße</span>
                  <span className="text-mid text-sm!">2 × 2 cm</span>
                </div>
                <div className="flex items-center justify-between rounded-lg border border-neutral-200 bg-white p-3">
                  <span className="text-dark text-sm! font-medium">Min. Kontrast</span>
                  <span className="text-mid text-sm!">3:1</span>
                </div>
                <div className="flex items-center justify-between rounded-lg border border-neutral-200 bg-white p-3">
                  <span className="text-dark text-sm! font-medium">Rand</span>
                  <span className="text-mid text-sm!">min. 4 Module</span>
                </div>
              </div>
            </div>
          }
        >
          <p className="text-mid mb-4">Die Kenntnis der technischen Parameter hilft, QR-Codes zu erstellen, die unter allen Bedingungen lesbar sind:</p>
          <ul className="text-mid list-disc space-y-2 pl-5">
            <li>
              <strong>Datenkapazität</strong> – ein QR-Code kann bis zu 7089 Ziffern, 4296 alphanumerische Zeichen oder 2953 Bytes Binärdaten speichern. In der Praxis reicht das für URLs und Visitenkarten mehr als aus.
            </li>
            <li>
              <strong>Reed-Solomon-Fehlerkorrektur</strong> – ein mathematischer Algorithmus, der das Lesen des Codes ermöglicht, auch wenn ein Teil beschädigt oder verdeckt ist. Stufen: L (7{'\u00a0'}%), M (15{'\u00a0'}%), Q (25{'\u00a0'}%), H (30{'\u00a0'}%).
            </li>
            <li>
              <strong>Rand</strong> – der weiße Bereich um den Code, der für korrektes Scannen erforderlich ist. Empfohlenes Minimum: 4 Module (Code-Einheiten).
            </li>
          </ul>
        </SectionDemo>

        <Gap variant="line" />

        <SectionDemo
          title="Technische Einstellungen erklärt"
          subtitle="Fehlerkorrekturstufen"
          demo={
            <div className="space-y-3">
              <div className="overflow-x-auto">
                <table className="text-mid w-full text-left text-sm!">
                  <thead>
                    <tr className="border-b border-neutral-200">
                      <th className="py-2 pr-4 font-semibold">Stufe</th>
                      <th className="py-2 pr-4 font-semibold">Toleranz</th>
                      <th className="py-2 font-semibold">Empfehlung</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-neutral-100">
                      <td className="py-2 pr-4 font-medium">L (Low)</td>
                      <td className="py-2 pr-4">ca. 7 %</td>
                      <td className="text-primary-light0 py-2">Bildschirmdarstellung, saubere Oberflächen</td>
                    </tr>
                    <tr className="border-b border-neutral-100">
                      <td className="py-2 pr-4 font-medium">M (Medium)</td>
                      <td className="py-2 pr-4">ca. 15 %</td>
                      <td className="text-primary-light0 py-2">Standard - guter Kompromiss</td>
                    </tr>
                    <tr className="border-b border-neutral-100">
                      <td className="py-2 pr-4 font-medium">Q (Quartile)</td>
                      <td className="py-2 pr-4">ca. 25 %</td>
                      <td className="text-primary-light0 py-2">Etiketten, Verpackungen</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4 font-medium">H (High)</td>
                      <td className="py-2 pr-4">ca. 30 %</td>
                      <td className="text-primary-light0 py-2">Plakate, Flyer, Außenwerbung</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          }
        >
          <p className="text-mid mb-4">Die Fehlerkorrekturstufe bestimmt, welcher Anteil des QR-Codes beschädigt oder verdeckt sein darf:</p>
          <ul className="text-mid list-disc space-y-2 pl-5">
            <li>
              <strong>Höhere Stufe</strong> - größerer QR-Code, aber zuverlässigeres Scannen bei Beschädigungen, Verschmutzungen oder Falten.
            </li>
            <li>
              <strong>Niedrigere Stufe</strong> - kleinerer, kompakterer QR-Code, aber empfindlicher gegenüber Beschädigungen.
            </li>
          </ul>
          <p className="text-mid mt-3">Für Druckmaterialien (Flyer, Plakate, Visitenkarten) empfehlen wir Stufe H. Für Bildschirmdarstellung reicht Stufe L oder M.</p>
        </SectionDemo>

        <Gap variant="line" />

        <SectionDemo
          title="Personalisierung des QR-Code-Aussehens"
          variant="left"
          demo={
            <div className="space-y-3">
              <div className="flex items-center justify-between rounded-lg border border-neutral-200 bg-white p-3">
                <span className="text-dark text-sm! font-medium">Größe</span>
                <span className="text-mid text-sm!">300 px</span>
              </div>
              <div className="flex items-center justify-between rounded-lg border border-neutral-200 bg-white p-3">
                <span className="text-dark text-sm! font-medium">Rand</span>
                <span className="text-mid text-sm!">4</span>
              </div>
              <div className="flex items-center gap-3 rounded-lg border border-neutral-200 bg-white p-3">
                <span className="text-dark text-sm! font-medium">Code-Farbe</span>
                <span className="inline-block h-6 w-6 rounded border border-neutral-200" style={{ backgroundColor: '#000000' }} />
              </div>
              <div className="flex items-center gap-3 rounded-lg border border-neutral-200 bg-white p-3">
                <span className="text-dark text-sm! font-medium">Hintergrundfarbe</span>
                <span className="inline-block h-6 w-6 rounded border border-neutral-200" style={{ backgroundColor: '#ffffff' }} />
              </div>
            </div>
          }
        >
          <p className="text-mid mb-4">Der Generator erlaubt die Anpassung mehrerer Parameter, die das Aussehen und die Lesbarkeit des Codes beeinflussen:</p>
          <ul className="text-mid list-disc space-y-2 pl-5">
            <li>
              <strong>Größe (px)</strong> – die Abmessung des Codes in Pixeln. Für Standarddruck (Flyer, Visitenkarten) wählen Sie 300–500{'\u00a0'}px. Für digitale Nutzung reichen 150–200{'\u00a0'}px.
            </li>
            <li>
              <strong>Rand</strong> – der weiße Bereich um den Code, der für korrektes Scannen erforderlich ist. Empfohlener Wert: 2–4. Ein Wert von 0 kann das Scannen bei dunklem Hintergrund erschweren.
            </li>
            <li>
              <strong>QR-Code-Farbe</strong> – standardmäßig schwarz (#000000). Sie können eine beliebige dunkle Farbe wählen, die zu Ihrer visuellen Identität passt.
            </li>
            <li>
              <strong>Hintergrundfarbe</strong> – standardmäßig weiß (#ffffff). Sie können eine beliebige helle Farbe wählen. Der Generator warnt, wenn der Kontrast zu gering ist.
            </li>
          </ul>
          <p className="text-mid mt-3">
            <strong>Tipp:</strong> Bewahren Sie einen hohen Kontrast zwischen Code und Hintergrund (mindestens 3:1). Ein dunkler Code auf hellem Hintergrund lässt sich am leichtesten scannen.
          </p>
        </SectionDemo>

        <Gap variant="line" />

        <SectionFeatureComparison
          title="PNG vs. SVG – welches Format für den Druck wählen?"
          plans={[
            { id: 'png', name: 'PNG (Raster)' },
            { id: 'svg', name: 'SVG (Vektor)', highlighted: true },
          ]}
          features={[
            { name: 'Websites und soziale Medien', values: { png: true, svg: true } },
            { name: 'Flyer und Visitenkarten', values: { png: true, svg: true } },
            { name: 'Plakate und Banner (Großformat)', values: { png: false, svg: true } },
            { name: 'Skalierung ohne Qualitätsverlust', values: { png: false, svg: true } },
            { name: 'Bearbeitung in Grafikprogrammen', values: { png: false, svg: true } },
            { name: 'Kleinere Dateigröße', values: { png: false, svg: true } },
            { name: 'Präsentationen', values: { png: true, svg: true } },
          ]}
        />

        <Gap variant="line" />

        <SectionSteps
          title="Einsatzmöglichkeiten für QR-Codes"
          description="QR-Codes verbinden die physische und die digitale Welt:"
          grid="three"
          items={[
            {
              icon: <RiPrinterLine className="h-6 w-6" />,
              title: 'Flyer und Plakate',
              description: 'Auf Landingpages, Formulare oder Veranstaltungsdetails verlinken. Für großformatigen Druck SVG verwenden.',
            },
            {
              icon: <RiContactsLine className="h-6 w-6" />,
              title: 'Visitenkarten',
              description: 'vCard-QR-Codes speichern Kontaktdaten direkt im Smartphone - kein Abtippen nötig.',
            },
            {
              icon: <RiSmartphoneLine className="h-6 w-6" />,
              title: 'Speisekarten und Menüs',
              description: 'Restaurants und Cafés stellen ihre Speisekarte per QR-Code online bereit.',
            },
            {
              icon: <RiGlobalLine className="h-6 w-6" />,
              title: 'Produktverpackungen',
              description: 'Kunden zu Anleitungen, Bewertungsseiten oder Registrierungsformularen weiterleiten.',
            },
            {
              icon: <RiMailLine className="h-6 w-6" />,
              title: 'E-Mail-Signaturen',
              description: 'QR-Code mit Kontaktdaten oder Website-Link in die E-Mail-Signatur einfügen.',
            },
            {
              icon: <RiPaletteLine className="h-6 w-6" />,
              title: 'Messen und Events',
              description: 'QR-Codes auf Badges, Ständen und Einladungen für schnellen Informationsaustausch.',
            },
          ]}
        />

        <Gap variant="line" />

        <SectionInfo title="Tipps für den Druck von QR-Codes">
          <p className="text-mid">Damit der QR-Code zuverlässig gescannt werden kann, beachten Sie die folgenden Empfehlungen:</p>
          <ul className="text-mid mt-3 list-disc space-y-2 pl-5">
            <li>
              <strong>Mindestgröße</strong> - mindestens 2×2 cm für den Druck. Kleinere Codes funktionieren nur auf glatten Oberflächen mit hoher Druckauflösung.
            </li>
            <li>
              <strong>Kontrast</strong> - dunkler Code auf hellem Hintergrund. Vermeiden Sie ähnliche Farben oder transparente Hintergründe.
            </li>
            <li>
              <strong>Rand (Quiet Zone)</strong> - lassen Sie einen weißen Rand um den QR-Code. Das Tool fügt diesen Rand automatisch hinzu.
            </li>
            <li>
              <strong>Fehlerkorrekturstufe H</strong> - für Druckmaterialien empfohlen. Toleriert bis zu 30 % Beschädigung.
            </li>
            <li>
              <strong>SVG-Format</strong> - verwenden Sie SVG für professionellen Druck. Es skaliert ohne Qualitätsverlust auf jede Größe.
            </li>
          </ul>
        </SectionInfo>

        <Gap variant="line" />

        <SectionSteps
          title="Was macht diesen QR-Code-Generator besonders?"
          grid="two"
          items={[
            {
              icon: <RiInfinityLine className="h-6 w-6" />,
              title: 'Ohne Limits',
              description: 'Beliebig viele QR-Codes erstellen — ohne Registrierung und ohne Einschränkungen.',
            },
            {
              icon: <RiPaletteLine className="h-6 w-6" />,
              title: 'Anpassbare Farben',
              description: 'Passen Sie QR-Code-Farbe und Hintergrundfarbe an - mit automatischer Kontrastwarnung.',
            },
            {
              icon: <RiShieldCheckLine className="h-6 w-6" />,
              title: '4 Fehlerkorrekturstufen',
              description: 'L, M, Q, H - wählen Sie die passende Stufe je nach Einsatzzweck.',
            },
            {
              icon: <RiRulerLine className="h-6 w-6" />,
              title: 'Einstellbare Größe und Rand',
              description: 'Passen Sie die Pixelgröße und den Rand (Quiet Zone) nach Bedarf an.',
            },
            {
              icon: <RiCheckboxCircleLine className="h-6 w-6" />,
              title: 'PNG und SVG Export',
              description: 'PNG für Web und Bildschirm, SVG für professionellen Druck in jeder Größe.',
            },
            {
              icon: <RiUserLine className="h-6 w-6" />,
              title: 'Lokale Verarbeitung',
              description: 'Alle Daten bleiben in Ihrem Browser. Es wird nichts an einen Server gesendet.',
            },
          ]}
        />

        <Gap variant="line" />

        <FaqPanels
          pageUrl={toAbsoluteUrl('/de/werkzeuge/kostenloser-qr-code-generator')}
          title="Häufig gestellte Fragen zum QR-Code-Generator"
          openByDefault={1}
          items={[
            ...faqItems,
            {
              question: 'Worin unterscheidet sich eine vCard-Visitenkarte von einem QR-Code mit Text?',
              answer:
                'Ein vCard-QR-Code enthält Kontaktdaten in einem standardisierten Format (Name, Firma, Telefon, E-Mail, Adresse). Beim Scannen bietet das Telefon automatisch an, den Kontakt im Adressbuch zu speichern. Ein Textcode zeigt die Daten nur als Klartext an – ohne automatische Speicherfunktion.',
              answerSchemaText: 'vCard = standardisiertes Kontaktformat mit automatischer Speicherfunktion. Text = nur Klartext.',
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
