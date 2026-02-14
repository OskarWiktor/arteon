import Script from 'next/script';
import HeroBanner from '@/components/sections/HeroBanner';
import Breadcrumbs from '@/components/sections/BreadCrumbs';
import EmailSignatureGenerator from '@/components/sections/tools/EmailSignatureGenerator';
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
  RiMailLine,
  RiPaletteLine,
  RiFileCopyLine,
  RiSettings3Line,
  RiShieldCheckLine,
  RiInfinityLine,
  RiLayoutLine,
  RiUserLine,
  RiLinksLine,
  RiImageLine,
  RiFontSize,
  RiCodeLine,
  RiDownloadLine,
  RiGlobalLine,
  RiSmartphoneLine,
} from 'react-icons/ri';

const LOCALE = 'de' as const;
const TOOL_KEY = 'emailSignature' as const;

export const metadata: Metadata = {
  title: 'Kostenloser E-Mail-Signatur-Generator online - HTML für Gmail & Outlook',
  description:
    'Kostenloser HTML-E-Mail-Signatur-Generator. Fügen Sie Kontaktdaten, CTA-Link und Social-Media-Profile hinzu und kopieren Sie den fertigen HTML-Code in Gmail oder Outlook. Ohne Registrierung.',
  alternates: getToolAlternates(TOOL_KEY, LOCALE),
  openGraph: {
    title: 'Kostenloser E-Mail-Signatur-Generator online',
    description: 'Erstellen Sie eine professionelle E-Mail-Signatur in Minuten. Kopieren Sie den fertigen HTML-Code in Gmail oder Outlook.',
    url: toAbsoluteUrl('/de/werkzeuge/kostenloser-e-mail-signatur-generator'),
    type: 'website',
    images: [{ url: toAbsoluteUrl('/assets/tools/narzedzia-darmowy-generator-stopki-mailowej.webp'), width: 1200, height: 630 }],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'HTML-E-Mail-Signatur-Generator - Gmail & Outlook',
  alternateName: [
    'E-Mail-Signatur erstellen online',
    'HTML-Signatur-Generator',
    'Gmail-Signatur-Generator',
    'Outlook-Signatur-Generator',
    'Professionelle E-Mail-Signatur',
    'E-Mail-Fußzeile erstellen',
  ],
  url: toAbsoluteUrl('/de/werkzeuge/kostenloser-e-mail-signatur-generator'),
  applicationCategory: 'BusinessApplication',
  applicationSubCategory: 'EmailTool',
  operatingSystem: 'Any',
  description: 'Kostenloser HTML-E-Mail-Signatur-Generator. 8 Layouts, anpassbare Farben, Social-Media-Icons, CTA-Link. Für Gmail, Outlook und andere Clients. Lokale Verarbeitung.',
  featureList: [
    '8 Layouts: Standard, Oberer Balken, Beschriftungen links, Zentriert, Kompakt, Zwei Spalten, Minimalistisch, Unterer Balken',
    'Anpassbare Farben und Schriftarten',
    'Social-Media-Icons (12 Plattformen)',
    'CTA-Button / Aktionslink',
    'Profilbild und Firmenlogo',
    'Rechtlicher Hinweis / Disclaimer',
    'Export und Import von Einstellungen',
    'Kopieren als formatierter Text oder HTML-Code',
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
  name: 'So erstellen Sie eine professionelle E-Mail-Signatur',
  description: 'Erstellen Sie eine HTML-E-Mail-Signatur mit Kontaktdaten, Social-Media-Links und CTA-Button. Kopieren Sie den fertigen Code in Gmail oder Outlook.',
  url: toAbsoluteUrl('/de/werkzeuge/kostenloser-e-mail-signatur-generator'),
  step: [
    { '@type': 'HowToStep', name: 'Kontaktdaten eingeben', text: 'Füllen Sie Name, Position, Unternehmen, Telefon, E-Mail und Website aus.' },
    { '@type': 'HowToStep', name: 'Layout und Design wählen', text: 'Wählen Sie eines der 8 Layouts und passen Sie Farben, Schriftart und Abstände an.' },
    { '@type': 'HowToStep', name: 'Social Media und CTA hinzufügen', text: 'Fügen Sie optional Social-Media-Links und einen CTA-Button hinzu.' },
    { '@type': 'HowToStep', name: 'Signatur kopieren', text: 'Kopieren Sie die Signatur als formatierten Text (für Gmail/Outlook) oder als HTML-Code.' },
  ],
  publisher: { '@type': 'Organization', name: 'Arteon Agency', url: siteUrl },
};

const faqItems = [
  {
    question: 'Wie füge ich die Signatur in Gmail ein?',
    answer:
      'Klicken Sie auf „Signatur kopieren (Gmail / Outlook)", öffnen Sie Gmail → Einstellungen → Alle Einstellungen → Signatur, und fügen Sie die Signatur mit Strg+V (oder Cmd+V) ein. Die Formatierung wird automatisch übernommen - Farben, Links und Social-Media-Icons bleiben erhalten.',
    answerSchemaText: 'Signatur kopieren, Gmail → Einstellungen → Signatur öffnen, Strg+V einfügen.',
  },
  {
    question: 'Funktioniert die Signatur in Outlook?',
    answer:
      'Ja. In Outlook Desktop: Datei → Optionen → E-Mail → Signaturen → Einfügen. In Outlook Web (OWA): Einstellungen → E-Mail → Verfassen und Antworten → E-Mail-Signatur. Beide Varianten unterstützen den formatierten Text.',
    answerSchemaText: 'Ja. Desktop: Datei → Optionen → Signaturen. Web: Einstellungen → E-Mail → Signatur.',
  },
  {
    question: 'Welche Layouts stehen zur Verfügung?',
    answer:
      '8 Layouts: Standard, Oberer Balken, Beschriftungen links, Zentriert, Kompakt, Zwei Spalten, Minimalistisch und Unterer Balken. Jedes Layout hat eine andere Anordnung von Kontaktdaten, Profilbild und Social-Media-Icons.',
    answerSchemaText: '8 Layouts: Standard, Oberer Balken, Links, Zentriert, Kompakt, Zwei Spalten, Minimalistisch, Unterer Balken.',
  },
  {
    question: 'Kann ich Social-Media-Links hinzufügen?',
    answer:
      'Ja. Sie können Links zu LinkedIn, Instagram, Facebook, TikTok, YouTube, X (Twitter), GitHub, Dribbble, Behance, WhatsApp, Telegram und Pinterest hinzufügen. Nur Plattformen mit eingegebener URL erscheinen in der Signatur.',
    answerSchemaText: '12 Plattformen: LinkedIn, Instagram, Facebook, TikTok, YouTube, X, GitHub, Dribbble, Behance, WhatsApp, Telegram, Pinterest.',
  },
  {
    question: 'Kann ich ein Profilbild oder Firmenlogo einfügen?',
    answer:
      'Ja. Sie können eine Bild-URL für Ihr Profilbild und/oder Firmenlogo angeben. Das Bild wird in der Signatur angezeigt. Verwenden Sie eine öffentlich zugängliche URL (z.\u00a0B. von Ihrer Website).',
    answerSchemaText: 'Ja. Profilbild und Firmenlogo über URL einfügen.',
  },
  {
    question: 'Werden meine Daten gespeichert?',
    answer:
      'Alle Daten werden lokal in Ihrem Browser gespeichert (localStorage). Nichts wird an einen Server gesendet. Sie können die Einstellungen exportieren und importieren, um die Signatur zwischen Geräten zu übertragen.',
    answerSchemaText: 'Lokal im Browser (localStorage). Keine Serverübertragung. Export/Import möglich.',
  },
  {
    question: 'Was ist ein CTA-Link in der Signatur?',
    answer:
      'Ein CTA-Link (Call to Action) ist ein optionaler Button oder Link am Ende der Signatur - z.\u00a0B. „Termin vereinbaren", „Angebot anfordern" oder „Portfolio ansehen". Er leitet den Empfänger direkt zu einer gewünschten Seite weiter.',
    answerSchemaText: 'Ein optionaler Aktionslink wie „Termin vereinbaren" am Ende der Signatur.',
  },
  {
    question: 'Kann ich einen rechtlichen Hinweis hinzufügen?',
    answer:
      'Ja. Das Tool enthält ein Feld für einen rechtlichen Hinweis (Disclaimer). Der Text wird in kleinerer Schrift unter der Signatur angezeigt - z.\u00a0B. Vertraulichkeitshinweise oder DSGVO-Informationen.',
    answerSchemaText: 'Ja. Eigenes Feld für Disclaimer/DSGVO-Hinweis unter der Signatur.',
  },
  {
    question: 'Wie exportiere oder importiere ich die Signatur-Einstellungen?',
    answer:
      'Unter der Vorschau finden Sie die Buttons Einstellungen exportieren und Einstellungen importieren. Der Export speichert die vollständige Konfiguration (Daten, Farben, Layout, Abstände, Textstile) als JSON-Datei. Der Import lädt die Konfiguration aus einer Datei und wendet alle Einstellungen automatisch an.',
    answerSchemaText: 'Export als JSON-Datei, Import lädt die Konfiguration und wendet sie automatisch an.',
  },
  {
    question: 'Wie kann ich den HTML-Quellcode der Signatur anzeigen?',
    answer:
      'Der Button HTML-Code anzeigen unter der Vorschau öffnet ein modales Fenster mit dem vollständigen HTML-Quellcode. Sie können den Code direkt aus dem Fenster kopieren. Alternativ kopiert HTML-Code kopieren den Code in die Zwischenablage, und Als HTML herunterladen speichert ihn als Datei.',
    answerSchemaText: 'Button HTML-Code anzeigen öffnet ein Fenster mit dem Quellcode. Alternativ kopieren oder als Datei herunterladen.',
  },
  {
    question: 'Kann ich Form und Größe des Avatars ändern?',
    answer:
      'Ja. Nach Eingabe der Bild-URL im Tab Daten erscheinen zusätzliche Optionen: Form des Avatars (rund, abgerundet, quadratisch) und Größe des Avatars (klein - 40\u00a0px, mittel - 56\u00a0px, groß - 72\u00a0px). Die Einstellungen gelten für alle Layouts.',
    answerSchemaText: 'Ja. Form (rund, abgerundet, quadratisch) und Größe (40, 56 oder 72 px) wählbar.',
  },
  {
    question: 'Wie ändere ich den Stil der Trennlinie?',
    answer:
      'Im Tab Disclaimer / DSGVO aktivieren Sie die Option Trennlinie anzeigen. Anschließend können Sie Stil (durchgezogen, gestrichelt, gepunktet), Dicke (1–3\u00a0px) und Farbe (Standard-Grau oder beliebige Farbe aus der Palette) einstellen.',
    answerSchemaText: 'Trennlinie aktivieren, dann Stil, Dicke und Farbe einstellen.',
  },
  {
    question: 'Der Kopier-Button ist inaktiv – warum?',
    answer: 'Zum Kopieren der Signatur müssen mindestens zwei Felder ausgefüllt sein: Name und E-Mail-Adresse. Prüfen Sie, ob beide Felder Daten enthalten.',
    answerSchemaText: 'Name und E-Mail-Adresse müssen ausgefüllt sein.',
  },
];

export default function EmailSignatureGeneratorPage() {
  return (
    <>
      <Script id="ld-json-email-signature-de" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Script id="ld-json-email-howto-de" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />

      <HeroBanner
        title="E-Mail-Signatur-Generator"
        description="Erstellen Sie eine professionelle E-Mail-Signatur in wenigen Minuten. Geben Sie Ihre Daten ein, wählen Sie Farben und Layout, und kopieren Sie den fertigen HTML-Code in Gmail, Outlook oder andere E-Mail-Clients."
        overlay="black"
        backgroundImage="/assets/tools/narzedzia-darmowy-generator-stopki-mailowej.webp"
      />

      <Breadcrumbs
        second={{ href: '/de/werkzeuge', label: 'Werkzeuge' }}
        third={{ href: '/de/werkzeuge/kostenloser-e-mail-signatur-generator', label: 'E-Mail-Signatur-Generator' }}
        includeJsonLd
        locale="de"
      />

      <ToolEditorLayout>
        <AdSense variant="tool-banner" className="my-3" />
        <EmailSignatureGenerator />
      </ToolEditorLayout>

      <Wrapper>
        <Gap variant="line" />

        <SectionInfo title="Warum eine professionelle E-Mail-Signatur?">
          <p className="text-mid">
            Eine E-Mail-Signatur ist mehr als nur Kontaktdaten am Ende einer Nachricht. Sie enthält Ihren Namen, Ihre Position, Ihr Unternehmen, Kontaktinformationen und optional einen CTA-Link oder
            Social-Media-Profile. Eine konsistente, professionell gestaltete Signatur stärkt den Markenauftritt in jeder gesendeten E-Mail.
          </p>
          <p className="text-mid mt-3">
            Im Durchschnitt versendet ein Büroangestellter 30–40 E-Mails pro Tag. Jede dieser E-Mails ist eine Gelegenheit, Ihre Marke zu präsentieren, einen CTA-Link zu platzieren und dem Empfänger
            den direkten Zugang zu Ihren Social-Media-Profilen zu ermöglichen. Mit diesem Tool erstellen Sie eine Signatur, die diesen Anforderungen gerecht wird.
          </p>
        </SectionInfo>

        <Gap size="sm" />

        <SectionSteps
          title="So verwenden Sie den Signatur-Generator"
          description="Die Erstellung einer Signatur dauert weniger als 5 Minuten:"
          grid="four"
          items={[
            {
              icon: <RiMailLine className="h-6 w-6" />,
              title: '1. Daten eingeben',
              description: 'Füllen Sie Name, Position, Unternehmen, Kontaktdaten und optional Social-Media-Links aus.',
            },
            {
              icon: <RiPaletteLine className="h-6 w-6" />,
              title: '2. Design anpassen',
              description: 'Wählen Sie Layout, Farbschema, Schriftart und passen Sie Abstände und Textstile an.',
            },
            {
              icon: <RiLinksLine className="h-6 w-6" />,
              title: '3. CTA und Social Media',
              description: 'Fügen Sie optional einen Aktionslink und Social-Media-Profile hinzu.',
            },
            {
              icon: <RiFileCopyLine className="h-6 w-6" />,
              title: '4. Kopieren',
              description: 'Kopieren Sie die Signatur und fügen Sie sie in Gmail, Outlook oder einen anderen Client ein.',
            },
          ]}
        />

        <Gap variant="line" />

        <SectionSteps
          title="8 Layouts - welches passt zu Ihnen?"
          description="Jedes Layout ordnet die Elemente anders an:"
          grid="four"
          items={[
            {
              icon: <RiLayoutLine className="h-6 w-6" />,
              title: 'Standard',
              description: 'Klassische Anordnung mit Profilbild links und Kontaktdaten rechts.',
            },
            {
              icon: <RiLayoutLine className="h-6 w-6" />,
              title: 'Oberer Balken',
              description: 'Farbbalken oben mit Name und Position, darunter Kontaktdaten.',
            },
            {
              icon: <RiLayoutLine className="h-6 w-6" />,
              title: 'Beschriftungen links',
              description: 'Labels (Telefon, E-Mail, Website) links, Werte rechts.',
            },
            {
              icon: <RiLayoutLine className="h-6 w-6" />,
              title: 'Zentriert',
              description: 'Alle Elemente mittig ausgerichtet - ideal für kreative Branchen.',
            },
            {
              icon: <RiLayoutLine className="h-6 w-6" />,
              title: 'Kompakt',
              description: 'Platzsparend - alle Informationen in wenigen Zeilen.',
            },
            {
              icon: <RiLayoutLine className="h-6 w-6" />,
              title: 'Zwei Spalten',
              description: 'Profilbild und Name links, Kontaktdaten und Social Media rechts.',
            },
            {
              icon: <RiLayoutLine className="h-6 w-6" />,
              title: 'Minimalistisch',
              description: 'Reduziert auf das Wesentliche - Name, Position und ein Link.',
            },
            {
              icon: <RiLayoutLine className="h-6 w-6" />,
              title: 'Unterer Balken',
              description: 'Kontaktdaten oben, Farbbalken mit CTA und Social Media unten.',
            },
          ]}
        />

        <Gap variant="line" />

        <SectionDemo
          title="Was kann die Signatur enthalten?"
          demo={
            <div className="space-y-2">
              <div className="flex items-center gap-3 rounded-lg border border-neutral-200 bg-white p-3">
                <RiUserLine className="text-primary-light0 h-5 w-5 shrink-0" />
                <div className="text-mid text-sm!">
                  <strong>Persönliche Daten</strong> - Name, Position, Unternehmen, Abteilung
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-lg border border-neutral-200 bg-white p-3">
                <RiSmartphoneLine className="text-primary-light0 h-5 w-5 shrink-0" />
                <div className="text-mid text-sm!">
                  <strong>Kontaktdaten</strong> — Telefon, E-Mail, Website, Postadresse
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-lg border border-neutral-200 bg-white p-3">
                <RiImageLine className="text-primary-light0 h-5 w-5 shrink-0" />
                <div className="text-mid text-sm!">
                  <strong>Bilder</strong> - Profilbild und/oder Firmenlogo (URL)
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-lg border border-neutral-200 bg-white p-3">
                <RiGlobalLine className="text-primary-light0 h-5 w-5 shrink-0" />
                <div className="text-mid text-sm!">
                  <strong>Social Media</strong> - 12 Plattformen mit automatischen Icons
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-lg border border-neutral-200 bg-white p-3">
                <RiLinksLine className="text-primary-light0 h-5 w-5 shrink-0" />
                <div className="text-mid text-sm!">
                  <strong>CTA-Link</strong> - Aktionsbutton (z.\u00a0B. „Termin vereinbaren")
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-lg border border-neutral-200 bg-white p-3">
                <RiShieldCheckLine className="text-primary-light0 h-5 w-5 shrink-0" />
                <div className="text-mid text-sm!">
                  <strong>Disclaimer</strong> - Rechtlicher Hinweis / DSGVO-Information
                </div>
              </div>
            </div>
          }
        >
          <p className="text-mid mb-4">Der Signatur-Generator bietet umfangreiche Anpassungsmöglichkeiten für alle Elemente einer professionellen E-Mail-Signatur:</p>
          <ul className="text-mid list-disc space-y-2 pl-5">
            <li>
              <strong>Persönliche Daten</strong> - Name, Position, Unternehmen und Abteilung.
            </li>
            <li>
              <strong>Kontaktdaten</strong> — Telefon, E-Mail, Website und Postadresse.
            </li>
            <li>
              <strong>Visuelle Elemente</strong> - Profilbild, Firmenlogo, Farbschema und Schriftart.
            </li>
            <li>
              <strong>Social Media</strong> - Links zu 12 Plattformen mit automatisch generierten Icons.
            </li>
            <li>
              <strong>CTA-Button</strong> - optionaler Aktionslink mit benutzerdefiniertem Text und URL.
            </li>
            <li>
              <strong>Disclaimer</strong> - rechtlicher Hinweis in kleinerer Schrift am Ende der Signatur.
            </li>
          </ul>
        </SectionDemo>

        <Gap variant="line" />

        <SectionSteps
          title="Design-Optionen im Detail"
          description="Passen Sie jeden Aspekt der Signatur an Ihre Marke an:"
          grid="three"
          items={[
            {
              icon: <RiPaletteLine className="h-6 w-6" />,
              title: 'Farbschema',
              description: 'Primärfarbe und Textfarbe frei wählbar. Beeinflusst Trennlinien, Links und Social-Media-Icons.',
            },
            {
              icon: <RiFontSize className="h-6 w-6" />,
              title: 'Schriftart und -größe',
              description: 'Wählen Sie aus mehreren Schriftarten und passen Sie die Größe für Name, Position und Kontaktdaten an.',
            },
            {
              icon: <RiSettings3Line className="h-6 w-6" />,
              title: 'Abstände und Stile',
              description: 'Abstände zwischen Elementen, Trennliniendicke, Icon-Größe und Textstile individuell einstellbar.',
            },
          ]}
        />

        <Gap variant="line" />

        <SectionInfo title="Welche Daten kann die Signatur enthalten?">
          <p className="text-mid">
            Im Tab <strong>Daten</strong> finden Sie alle Felder, die Sie ausfüllen können. Nur zwei Felder sind erforderlich: Name und E-Mail-Adresse. Alle anderen Felder sind optional und erscheinen
            nur in der Signatur, wenn sie ausgefüllt sind.
          </p>

          <h3 className="h5 mt-6 mb-3">Felder im Tab Daten</h3>
          <ul className="text-mid list-disc space-y-2 pl-6">
            <li>
              <strong>Zeile über dem Namen</strong> – zusätzlicher Text über dem Namen, z.{'\u00a0'}B. Firmenname oder Slogan.
            </li>
            <li>
              <strong>Avatar / Logo (Bild-URL)</strong> – URL zu einem Profilbild oder Firmenlogo. Das Bild sollte quadratisch (min. 120×120{'\u00a0'}px) und öffentlich zugänglich sein. Nach Eingabe
              der URL können Sie Form (rund, abgerundet, quadratisch) und Größe (40, 56 oder 72{'\u00a0'}px) wählen.
            </li>
            <li>
              <strong>Name</strong> – Pflichtfeld. Ihr vollständiger Name.
            </li>
            <li>
              <strong>Tag neben dem Namen</strong> – kurzer Text neben dem Namen, z.{'\u00a0'}B. Pronomen oder Kurzbezeichnung.
            </li>
            <li>
              <strong>Position</strong> – Ihre Rolle im Unternehmen.
            </li>
            <li>
              <strong>Unternehmen</strong> – Name der Organisation.
            </li>
            <li>
              <strong>Zusätzliche Zeile</strong> – kurze Beschreibung Ihrer Tätigkeit oder Ihres Angebots.
            </li>
            <li>
              <strong>E-Mail</strong> – Pflichtfeld. Ihre geschäftliche E-Mail-Adresse.
            </li>
            <li>
              <strong>Telefon</strong> – Kontaktnummer in beliebigem Format.
            </li>
            <li>
              <strong>Website</strong> – vollständige URL Ihrer Website (https://...).
            </li>
            <li>
              <strong>Adresse</strong> – Firmenadresse (Straße, Stadt, PLZ).
            </li>
            <li>
              <strong>Formale Daten</strong> – USt-IdNr., Handelsregisternummer oder branchenspezifische Pflichtangaben.
            </li>
          </ul>
        </SectionInfo>

        <Gap variant="line" />

        <SectionInfo title="CTA-Buttons hinzufügen">
          <p className="text-mid">
            Ein CTA-Button (Call to Action) ist ein klickbares Element, das den Empfänger zu einer bestimmten Seite weiterleitet – z.{'\u00a0'}B. Terminkalender, Kontaktformular oder Angebot. Der
            Generator unterstützt zwei CTA-Buttons.
          </p>

          <h3 className="h5 mt-6 mb-3">Hauptbutton</h3>
          <ol className="text-mid list-decimal space-y-2 pl-6">
            <li>
              Öffnen Sie den Tab <strong>Buttons</strong> im Editor.
            </li>
            <li>Geben Sie den Buttontext ein, z.{'\u00a0'}B. „Termin vereinbaren".</li>
            <li>Fügen Sie die Ziel-URL ein (muss mit https:// beginnen).</li>
          </ol>

          <h3 className="h5 mt-6 mb-3">Zusätzlicher Button</h3>
          <p className="text-mid">
            Optional können Sie einen zweiten Button im Outline-Stil (transparenter Hintergrund mit Rahmen) hinzufügen. Füllen Sie die Felder im Abschnitt <strong>Zusätzlicher Button</strong> analog
            zum Hauptbutton aus.
          </p>

          <p className="text-mid mt-4">Wenn beide Felder (Text und Link) leer bleiben, wird der Button nicht angezeigt. Beide Felder müssen ausgefüllt sein, damit der Button erscheint.</p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionInfo title="Social-Media-Links hinzufügen">
          <p className="text-mid">
            Im Tab <strong>Social Media</strong> können Sie Links zu Ihren Profilen hinzufügen. Der Generator unterstützt zwölf Plattformen: LinkedIn, Instagram, Facebook, TikTok, YouTube, X (ehemals
            Twitter), GitHub, Dribbble, Behance, WhatsApp, Telegram und Pinterest.
          </p>

          <h3 className="h5 mt-6 mb-3">So funktioniert es</h3>
          <ol className="text-mid list-decimal space-y-2 pl-6">
            <li>
              Öffnen Sie den Tab <strong>Social Media</strong> im Editor.
            </li>
            <li>Fügen Sie bei jeder Plattform die vollständige Profil-URL ein.</li>
            <li>Füllen Sie nur die Felder aus, die Sie benötigen. Leere Felder erscheinen nicht in der Signatur.</li>
          </ol>

          <h3 className="h5 mt-6 mb-3">Icon-Optionen</h3>
          <p className="text-mid">
            Aktivieren Sie <strong>Icons neben Plattformnamen anzeigen</strong>, um farbige SVG-Icons statt reiner Textnamen anzuzeigen. Sie können die Icon-Größe (16, 20 oder 24{'\u00a0'}px) und den
            Farbmodus (Plattformfarben, Akzentfarbe oder Textfarbe) wählen.
          </p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionInfo title="Rechtlicher Hinweis / DSGVO">
          <p className="text-mid">
            Im Tab <strong>Disclaimer / DSGVO</strong> können Sie einen rechtlichen Hinweis einfügen, der in kleinerer Schrift am Ende der Signatur erscheint.
          </p>

          <h3 className="h5 mt-6 mb-3">Wann ist ein Disclaimer sinnvoll?</h3>
          <ul className="text-mid list-disc space-y-2 pl-6">
            <li>
              <strong>Geschäftskorrespondenz</strong> – Vertraulichkeitshinweis und Bitte um Löschung bei Fehlzustellung.
            </li>
            <li>
              <strong>Branchenanforderungen</strong> – bestimmte Branchen (Recht, Medizin, Finanzen) erfordern spezifische Angaben.
            </li>
            <li>
              <strong>DSGVO</strong> – Hinweis zur Verarbeitung personenbezogener Daten.
            </li>
          </ul>

          <h3 className="h5 mt-6 mb-3">Trennlinie</h3>
          <p className="text-mid">
            Aktivieren Sie <strong>Trennlinie anzeigen</strong>, um eine horizontale Linie zwischen Kontaktdaten und Disclaimer einzufügen. Sie können Stil (durchgezogen, gestrichelt, gepunktet),
            Dicke (1–3{'\u00a0'}px) und Farbe anpassen.
          </p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionInfo title="Personalisierung des Erscheinungsbilds">
          <p className="text-mid">
            Im Tab <strong>Erscheinungsbild</strong> können Sie Farben, Schriftart und andere visuelle Elemente der Signatur anpassen.
          </p>

          <h3 className="h5 mt-6 mb-3">Farbthemen</h3>
          <p className="text-mid">
            Oben im Tab finden Sie fünf vorgefertigte Themen: Dunkel, Blau, Violett, Grün und Grau. Ein Klick auf ein Thema setzt automatisch die Akzentfarbe und Textfarbe. Das ist der schnellste Weg
            zu einem einheitlichen Erscheinungsbild.
          </p>

          <h3 className="h5 mt-6 mb-3">Farben</h3>
          <ul className="text-mid list-disc space-y-2 pl-6">
            <li>
              <strong>Akzentfarbe</strong> – wird für die Seitenleiste/obere Leiste, CTA-Button und Links verwendet. Sie können eine beliebige Farbe aus der Palette wählen.
            </li>
            <li>
              <strong>Textfarbe</strong> – Farbe aller Texte in der Signatur (Name, Kontaktdaten, Disclaimer).
            </li>
            <li>
              <strong>Hintergrundfarbe</strong> – Farbe des gesamten Signaturhintergrunds. Standardmäßig weiß, kann aber geändert werden.
            </li>
          </ul>

          <h3 className="h5 mt-6 mb-3">Schriftart und Größe</h3>
          <ul className="text-mid list-disc space-y-2 pl-6">
            <li>
              <strong>Schriftart</strong> – Auswahl: Arial, Verdana, Tahoma, Trebuchet MS und Georgia. Alle sind E-Mail-sicher und werden beim Empfänger korrekt angezeigt.
            </li>
            <li>
              <strong>Textgröße</strong> – drei Optionen: Klein (12{'\u00a0'}px), Standard (14{'\u00a0'}px) und Größer (16{'\u00a0'}px).
            </li>
          </ul>
        </SectionInfo>

        <Gap variant="line" />

        <SectionInfo title="Textstil – Farben und Größen einzelner Elemente">
          <p className="text-mid">
            Im Tab <strong>Textstil</strong> können Sie für jedes Textelement in der Signatur individuell Farbe und Schriftgröße anpassen.
          </p>

          <h3 className="h5 mt-6 mb-3">Verfügbare Elemente</h3>
          <p className="text-mid">Es werden nur Elemente angezeigt, die aktuell Daten enthalten. Für jedes Element können Sie einstellen:</p>
          <ul className="text-mid mt-3 list-disc space-y-2 pl-6">
            <li>
              <strong>Name</strong> – wird standardmäßig in der Akzentfarbe angezeigt.
            </li>
            <li>
              <strong>Position</strong> – Ihre Rolle im Unternehmen.
            </li>
            <li>
              <strong>Unternehmen</strong> – Name der Organisation.
            </li>
            <li>
              <strong>Kontaktdaten</strong> – E-Mail, Telefon, Website (Labels).
            </li>
            <li>
              <strong>Social Media</strong> – Links zu Profilen.
            </li>
            <li>
              <strong>Disclaimer</strong> – rechtlicher Hinweis am Ende der Signatur.
            </li>
          </ul>

          <h3 className="h5 mt-6 mb-3">Farbe ändern</h3>
          <p className="text-mid">
            Bei jedem Element finden Sie eine Reihe von Farboptionen. Klicken Sie auf ein Farbquadrat, um es auszuwählen. Sie können auch eine eigene Farbe hinzufügen, indem Sie auf das Farbquadrat
            mit dem Pluszeichen klicken – Farbe wählen und Speichern klicken. Eigene Farben (bis zu 8) werden zwischen allen Elementen geteilt.
          </p>
          <p className="text-mid mt-3">Der Button mit dem Reset-Icon setzt die Standardfarbe des Elements zurück.</p>

          <h3 className="h5 mt-6 mb-3">Größe ändern</h3>
          <p className="text-mid">
            In der zweiten Zeile finden Sie die Größensteuerung mit Buttons - und +. Der Wert zeigt die Abweichung von der Basisschriftgröße (eingestellt im Tab Erscheinungsbild). Bereich: -4 bis +4
            {'\u00a0'}Pixel.
          </p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionInfo title="Abstände zwischen Elementen">
          <p className="text-mid">
            Im Tab <strong>Abstände</strong> können Sie die Abstände zwischen den einzelnen Elementen der Signatur präzise steuern.
          </p>

          <h3 className="h5 mt-6 mb-3">Innenabstand der Signatur</h3>
          <p className="text-mid">
            Oben im Tab finden Sie die Option für den Innenabstand – also den Abstand zwischen dem Inhalt der Signatur und ihren Rändern. Drei Werte stehen zur Verfügung: 8{'\u00a0'}px (klein), 16
            {'\u00a0'}px (mittel) und 24{'\u00a0'}px (groß).
          </p>

          <h3 className="h5 mt-6 mb-3">Abstände zwischen Elementen</h3>
          <p className="text-mid">
            Unterhalb des Innenabstands finden Sie Steuerelemente für die einzelnen Signaturelemente. Jedes Steuerelement hat Buttons + und - zum Vergrößern oder Verkleinern des Abstands. Es werden
            nur Optionen für Elemente angezeigt, die aktuell in der Signatur vorhanden sind.
          </p>
          <ul className="text-mid mt-3 list-disc space-y-2 pl-6">
            <li>
              <strong>Nach dem Namen</strong> – Abstand unter der Namenszeile.
            </li>
            <li>
              <strong>Nach Position / Unternehmen</strong> – Abstand unter Position und Firmenname.
            </li>
            <li>
              <strong>Nach der zusätzlichen Zeile</strong> – Abstand unter der Beschreibung (falls ausgefüllt).
            </li>
            <li>
              <strong>Nach den Kontaktdaten</strong> – Abstand unter E-Mail, Telefon und Website.
            </li>
            <li>
              <strong>Nach Social Media</strong> – Abstand unter den Profillinks.
            </li>
            <li>
              <strong>Nach dem CTA-Button</strong> – Abstand unter dem Button (falls aktiviert).
            </li>
            <li>
              <strong>Vor dem Disclaimer</strong> – Abstand über dem rechtlichen Hinweis.
            </li>
          </ul>
          <p className="text-mid mt-4">Wenn Sie Daten aus einem Feld entfernen (z.{'\u00a0'}B. Telefonnummer löschen), verschwindet die entsprechende Abstandsoption automatisch aus dem Tab.</p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionInfo title="Automatisches Speichern und Zurücksetzen">
          <p className="text-mid">
            Alle Einstellungen werden automatisch im Browser gespeichert (localStorage). Nach dem Neuladen der Seite bleiben Daten, Layout, Farben und alle anderen Optionen erhalten.
          </p>
          <p className="text-mid mt-3">
            Unter der Vorschau finden Sie den Button <strong>Design zurücksetzen</strong>, der alle Daten und Einstellungen auf die Standardwerte zurücksetzt (nach Bestätigung). Die Konfiguration kann
            auch als JSON-Datei exportiert und auf einem anderen Gerät importiert werden.
          </p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionSteps
          title="Für wen ist der Signatur-Generator?"
          description="Das Tool eignet sich für alle, die geschäftliche E-Mails versenden:"
          grid="two"
          items={[
            {
              icon: <RiUserLine className="h-6 w-6" />,
              title: 'Unternehmer und Freelancer',
              description: 'Professionelle Signatur in jeder E-Mail – ohne Designkosten.',
            },
            {
              icon: <RiGlobalLine className="h-6 w-6" />,
              title: 'Teams und Unternehmen',
              description: 'Jeder Mitarbeiter erstellt eine eigene Signatur im einheitlichen Firmenstil.',
            },
            {
              icon: <RiLinksLine className="h-6 w-6" />,
              title: 'Vertrieb und Marketing',
              description: 'CTA-Button mit Link zum Kalender oder Angebot erhöht die Konversionsrate.',
            },
            {
              icon: <RiShieldCheckLine className="h-6 w-6" />,
              title: 'Rechtsanwälte, Ärzte, Berater',
              description: 'Disclaimer, Lizenznummern und branchenspezifische Pflichtangaben direkt in der Signatur.',
            },
          ]}
        />

        <Gap variant="line" />

        <SectionInfo title="Vorschau und Exportoptionen">
          <p className="text-mid">
            Das Vorschau-Panel wird rechts neben dem Editor angezeigt und aktualisiert sich automatisch bei jeder Änderung. Die Vorschau ist am Bildschirm fixiert (sticky) und bleibt auch beim
            Scrollen durch die Bearbeitungsoptionen sichtbar.
          </p>

          <h3 className="h5 mt-6 mb-3">Hintergrund der Vorschau</h3>
          <p className="text-mid">
            Über der Vorschau finden Sie drei Buttons zur Hintergrundauswahl: <strong>Hell</strong> (Standard-grauer Hintergrund), <strong>Dunkel</strong> (dunkler Hintergrund, nützlich zur
            Überprüfung der Lesbarkeit) und <strong>Schachbrett</strong> (Schachbrettmuster, zeigt Transparenz und Ränder der Signatur).
          </p>

          <h3 className="h5 mt-6 mb-3">Aktionsbuttons</h3>
          <p className="text-mid">Unter der Vorschau finden Sie mehrere Buttons:</p>
          <ul className="text-mid mt-3 list-disc space-y-2 pl-6">
            <li>
              <strong>Signatur kopieren (Gmail / Outlook)</strong> – kopiert die Signatur als formatierten HTML-Text in die Zwischenablage. Einfach in das Signaturfeld einfügen (Strg+V / Cmd+V).
            </li>
            <li>
              <strong>HTML-Code kopieren</strong> – kopiert den reinen HTML-Quellcode. Ideal für HTML-Editoren oder CMS-Systeme.
            </li>
            <li>
              <strong>Als HTML herunterladen</strong> – speichert den Signaturcode als .html-Datei. Nützlich zur Archivierung oder Weitergabe an Entwickler.
            </li>
            <li>
              <strong>HTML-Code anzeigen</strong> – öffnet ein modales Fenster mit dem vollständigen HTML-Quellcode. Code kann direkt aus dem Fenster kopiert werden.
            </li>
            <li>
              <strong>Einstellungen exportieren</strong> – speichert die vollständige Konfiguration (Daten, Farben, Layout, Abstände, Textstile) als JSON-Datei.
            </li>
            <li>
              <strong>Einstellungen importieren</strong> – lädt eine Konfiguration aus einer JSON-Datei. Alle Einstellungen werden automatisch angewendet.
            </li>
            <li>
              <strong>Design zurücksetzen</strong> – setzt alle Daten und Einstellungen auf die Standardwerte zurück (nach Bestätigung).
            </li>
          </ul>
        </SectionInfo>

        <Gap variant="line" />

        <SectionSteps
          title="Was macht diesen Signatur-Generator besonders?"
          grid="two"
          items={[
            {
              icon: <RiLayoutLine className="h-6 w-6" />,
              title: '8 Layouts',
              description: 'Standard, Oberer Balken, Beschriftungen links, Zentriert, Kompakt, Zwei Spalten, Minimalistisch und Unterer Balken.',
            },
            {
              icon: <RiPaletteLine className="h-6 w-6" />,
              title: 'Vollständige Anpassung',
              description: 'Farbschema, Schriftart, Schriftgröße, Abstände und individuelle Textstile.',
            },
            {
              icon: <RiCodeLine className="h-6 w-6" />,
              title: 'Zwei Kopiermethoden',
              description: 'Formatierter Text für Gmail/Outlook oder reiner HTML-Code für technische Setups.',
            },
            {
              icon: <RiShieldCheckLine className="h-6 w-6" />,
              title: 'Volle Privatsphäre',
              description: 'Alle Daten werden lokal verarbeitet und gespeichert. Nichts wird an einen Server gesendet.',
            },
            {
              icon: <RiDownloadLine className="h-6 w-6" />,
              title: 'Export und Import',
              description: 'Signatureinstellungen als Datei exportieren und auf einem anderen Gerät importieren.',
            },
            {
              icon: <RiInfinityLine className="h-6 w-6" />,
              title: 'Ohne Limits',
              description: 'Beliebig viele Signaturen erstellen — ohne Registrierung und ohne Einschränkungen.',
            },
          ]}
        />

        <Gap variant="line" />

        <FaqPanels pageUrl={toAbsoluteUrl('/de/werkzeuge/kostenloser-e-mail-signatur-generator')} title="Häufig gestellte Fragen zum E-Mail-Signatur-Generator" openByDefault={1} items={faqItems} />

        <Gap variant="line" />

        <ToolsCarousel title="Weitere Tools entdecken" />

        <Gap size="sm" />
      </Wrapper>
    </>
  );
}
