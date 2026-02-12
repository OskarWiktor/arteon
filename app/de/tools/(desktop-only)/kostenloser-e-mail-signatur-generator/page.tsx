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

export const metadata: Metadata = {
  title: 'Kostenloser E-Mail-Signatur-Generator online - HTML für Gmail & Outlook',
  description:
    'Kostenloser HTML-E-Mail-Signatur-Generator. Fügen Sie Kontaktdaten, CTA-Link und Social-Media-Profile hinzu und kopieren Sie den fertigen HTML-Code in Gmail oder Outlook. Ohne Registrierung.',
  alternates: {
    canonical: toAbsoluteUrl('/de/tools/kostenloser-e-mail-signatur-generator'),
    languages: {
      pl: toAbsoluteUrl('/narzedzia/darmowy-generator-stopki-mailowej'),
      en: toAbsoluteUrl('/en/tools/free-email-signature-generator'),
      de: toAbsoluteUrl('/de/tools/kostenloser-e-mail-signatur-generator'),
    },
  },
  openGraph: {
    title: 'Kostenloser E-Mail-Signatur-Generator online',
    description: 'Erstellen Sie eine professionelle E-Mail-Signatur in Minuten. Kopieren Sie den fertigen HTML-Code in Gmail oder Outlook.',
    url: toAbsoluteUrl('/de/tools/kostenloser-e-mail-signatur-generator'),
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
  url: toAbsoluteUrl('/de/tools/kostenloser-e-mail-signatur-generator'),
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
  url: toAbsoluteUrl('/de/tools/kostenloser-e-mail-signatur-generator'),
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

      <Breadcrumbs second={{ href: '/de/tools', label: 'Tools' }} third={{ href: '/de/tools/kostenloser-e-mail-signatur-generator', label: 'E-Mail-Signatur-Generator' }} includeJsonLd locale="de" />

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

        <SectionInfo title="So fügen Sie die Signatur ein">
          <p className="text-mid mb-4">Das Tool bietet zwei Kopiermethoden - wählen Sie die passende für Ihren E-Mail-Client:</p>
          <ul className="text-mid list-disc space-y-2 pl-5">
            <li>
              <strong>Signatur kopieren (Gmail / Outlook)</strong> - kopiert die Signatur als formatierten Text. Einfach in das Signaturfeld Ihres E-Mail-Clients einfügen (Strg+V / Cmd+V). Die
              Formatierung wird automatisch übernommen.
            </li>
            <li>
              <strong>HTML-Code kopieren</strong> - kopiert den reinen HTML-Quellcode. Ideal für technisch versierte Nutzer, benutzerdefinierte Setups oder E-Mail-Marketing-Tools.
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

        <FaqPanels pageUrl={toAbsoluteUrl('/de/tools/kostenloser-e-mail-signatur-generator')} title="Häufig gestellte Fragen zum E-Mail-Signatur-Generator" openByDefault={1} items={faqItems} />

        <Gap variant="line" />

        <ToolsCarousel title="Weitere Tools entdecken" />

        <Gap size="sm" />
      </Wrapper>
    </>
  );
}
