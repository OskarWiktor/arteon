import Script from 'next/script';
import HeroBanner from '@/components/sections/HeroBanner';
import Breadcrumbs from '@/components/sections/BreadCrumbs';
import MetaTitleDescriptionTool from '@/components/sections/tools/MetaTitleDescriptionTool';
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
  RiPencilLine,
  RiFileTextLine,
  RiEyeLine,
  RiToolsLine,
  RiRulerLine,
  RiShoppingBagLine,
  RiSearchLine,
  RiEditLine,
  RiMegaphoneLine,
  RiCodeLine,
  RiRuler2Line,
  RiCheckboxCircleLine,
  RiInfinityLine,
  RiUserLine,
} from 'react-icons/ri';

export const metadata: Metadata = {
  title: 'Kostenloser Meta-Tag-Checker online',
  description:
    'Kostenloser Online-Checker für Meta-Titel und Meta-Beschreibung. Prüfen Sie Zeichenanzahl, Pixelbreite und Google-Vorschau. Vermeiden Sie abgeschnittene Titel und Beschreibungen in den Suchergebnissen.',
  alternates: {
    canonical: toAbsoluteUrl('/de/werkzeuge/meta-titel-beschreibung-laengenpruefer'),
    languages: {
      pl: toAbsoluteUrl('/narzedzia/licznik-dlugosci-meta-title-i-description'),
      en: toAbsoluteUrl('/en/tools/meta-title-description-length-checker'),
      de: toAbsoluteUrl('/de/werkzeuge/meta-titel-beschreibung-laengenpruefer'),
      es: toAbsoluteUrl('/es/herramientas/verificador-de-meta-titulo-y-descripcion'),
      fr: toAbsoluteUrl('/fr/outils/verificateur-meta-titre-et-description'),
    },
  },
  openGraph: {
    title: 'Kostenloser Meta-Tag-Checker online',
    description: 'Prüfen Sie Zeichenanzahl, Pixelbreite und Google-Vorschau. Vermeiden Sie abgeschnittene Titel und Beschreibungen in den Suchergebnissen.',
    url: toAbsoluteUrl('/de/werkzeuge/meta-titel-beschreibung-laengenpruefer'),
    type: 'website',
    images: [{ url: toAbsoluteUrl('/assets/tools/narzedzia-licznik-dlugosci-meta-title-i-description.webp'), width: 1200, height: 630 }],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Meta-Tag-Checker online',
  alternateName: [
    'Meta-Titel- und Beschreibungschecker mit Google-Vorschau',
    'Google-Snippet-Vorschau online',
    'SEO-Titellänge in Pixeln prüfen',
    'Meta-Tag-Längenprüfer online',
    'Google-SERP-Vorschau-Tool',
    'Wie lang darf eine Meta-Description sein',
    'Optimale Titel- und Beschreibungslänge',
    'SEO-Meta-Tag-Checker',
  ],
  url: toAbsoluteUrl('/de/werkzeuge/meta-titel-beschreibung-laengenpruefer'),
  applicationCategory: 'BusinessApplication',
  applicationSubCategory: 'SEOTool',
  operatingSystem: 'Any',
  description:
    'Kostenloser Meta-Titel- und Beschreibungs-Längenprüfer. Prüft Zeichenanzahl, Wortanzahl und Pixelbreite. Zeigt eine Vorschau, wie Titel und Beschreibung in den Google-Suchergebnissen erscheinen.',
  featureList: [
    'Zeichenzähler für Meta-Titel',
    'Zeichenzähler für Meta-Beschreibung',
    'Pixelbreite-Messung (Google-kompatibel)',
    'Wortzähler für Titel und Beschreibung',
    'Google-Suchergebnis-Vorschau',
    'Farbcodierte Längenbewertung (zu kurz / optimal / zu lang)',
    'Warnung bei abgeschnittenen Titeln und Beschreibungen',
    'Empfehlungen zur optimalen Länge',
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
  name: 'So prüfen Sie die Länge von Meta-Titel und Beschreibung',
  description:
    'Prüfen Sie die Länge Ihres Meta-Titels und Ihrer Beschreibung in Pixeln und Zeichen. Erfahren Sie, wie viele Zeichen ein Titel (50–60) und eine Beschreibung (120–160) haben sollten und wie Sie Abschneidungen bei Google vermeiden.',
  url: toAbsoluteUrl('/de/werkzeuge/meta-titel-beschreibung-laengenpruefer'),
  totalTime: 'PT3M',
  step: [
    {
      '@type': 'HowToStep',
      name: 'Meta-Titel eingeben',
      text: 'Fügen Sie Ihren Seitentitel in das Meta-Titel-Feld ein oder tippen Sie ihn ein. Das Tool berechnet automatisch Zeichenanzahl, Wortanzahl und Pixelbreite.',
    },
    {
      '@type': 'HowToStep',
      name: 'Meta-Beschreibung eingeben',
      text: 'Fügen Sie die Seitenbeschreibung im Beschreibungsfeld hinzu. Sie sehen Längenkennzahlen und eine Bewertung, ob die Beschreibung im empfohlenen Bereich liegt.',
    },
    {
      '@type': 'HowToStep',
      name: 'Google-Vorschau prüfen',
      text: 'Sehen Sie, wie Titel und Beschreibung in einem simulierten Google-Suchergebnis aussehen. Die Vorschau schneidet Text automatisch ab, wie es die Suchmaschine tun würde.',
    },
    { '@type': 'HowToStep', name: 'Anhand der Tipps anpassen', text: 'Wenn der Status „Zu kurz" oder „Zu lang" zeigt, passen Sie den Text an und beobachten Sie die Änderungen in Echtzeit.' },
  ],
  publisher: { '@type': 'Organization', name: 'Arteon Agency', url: siteUrl },
};

const faqItems = [
  {
    question: 'Warum zeigt das Tool die Pixelbreite statt nur der Zeichenanzahl?',
    answer:
      'Verschiedene Buchstaben haben unterschiedliche Breiten. Der Buchstabe „i" nimmt viel weniger Platz ein als „m" oder „W". Google schneidet Titel und Beschreibungen anhand der Pixelbreite ab, nicht der Zeichenanzahl. Das bedeutet, dass Text mit vielen schmalen Buchstaben länger sein kann als Text mit breiten Buchstaben, selbst bei gleicher Zeichenanzahl.',
    answerSchemaText: 'Google schneidet anhand der Pixelbreite ab, nicht der Zeichenanzahl. Verschiedene Buchstaben haben unterschiedliche Breiten.',
  },
  {
    question: 'Zeigt Google immer meinen Meta-Titel und meine Beschreibung an?',
    answer:
      'Nicht immer. Google kann den angezeigten Titel oder die Beschreibung ändern, wenn es einen anderen Text für passender zur Suchanfrage hält. Häufig werden Snippets aus dem Seiteninhalt verwendet. Gut geschriebene Meta-Tags erhöhen die Chance, dass Google sie verwendet, aber eine 100%ige Garantie gibt es nicht.',
    answerSchemaText: 'Nicht immer. Google kann den angezeigten Titel oder die Beschreibung ändern, um sie besser an die Suchanfrage anzupassen.',
  },
  {
    question: 'Wie lang sollten Meta-Titel und Meta-Beschreibung sein?',
    answer:
      'Der Meta-Titel sollte etwa 50–60 Zeichen haben (bis ca. 580 Pixel breit). Die Meta-Beschreibung funktioniert am besten bei 120–160 Zeichen (bis ca. 920 Pixel). Dies sind Näherungswerte - Google veröffentlicht keine festen Grenzen und kann sie anpassen.',
    answerSchemaText: 'Meta-Titel: 50–60 Zeichen (~580px). Meta-Beschreibung: 120–160 Zeichen (~920px). Dies sind Näherungswerte.',
  },
  {
    question: 'Beeinflusst die Meta-Beschreibung das Ranking bei Google?',
    answer:
      'Die Meta-Beschreibung ist kein direkter Ranking-Faktor - Google verwendet sie nicht zur Bestimmung der Seitenposition. Eine gute Beschreibung erhöht jedoch die Klickrate in den Suchergebnissen, und eine höhere CTR kann sich indirekt auf das Ranking auswirken.',
    answerSchemaText: 'Die Meta-Beschreibung ist kein direkter Ranking-Faktor, aber eine gute Beschreibung kann die CTR erhöhen und das Ranking indirekt beeinflussen.',
  },
  {
    question: 'Was sollte ich tun, wenn mein Titel zu lang ist?',
    answer:
      'Kürzen Sie den Titel und behalten Sie die wichtigsten Wörter am Anfang. Streichen Sie Füllwörter (z.\u00a0B. „bester“, „professioneller“) und stellen Sie den konkreten Nutzen für den Leser in den Vordergrund. Den Markennamen am besten ans Ende nach einem Trennzeichen setzen.',
    answerSchemaText: 'Kürzen Sie den Titel, behalten Sie wichtige Wörter am Anfang und setzen Sie den Markennamen ans Ende.',
  },
];

export default function MetaTitleDescriptionPage() {
  return (
    <>
      <Script id="ld-json-meta-title-de" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Script id="ld-json-meta-title-howto-de" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />

      <HeroBanner
        title="Meta-Tag-Checker"
        description="Prüfen Sie Zeichenanzahl und Pixelbreite und sehen Sie in der Vorschau, wie Ihre Seite in den Google-Suchergebnissen erscheint. So vermeiden Sie abgeschnittene Titel und Beschreibungen."
        overlay="black"
        backgroundImage="/assets/tools/narzedzia-licznik-dlugosci-meta-title-i-description.webp"
      />

      <Breadcrumbs
        second={{ href: '/de/werkzeuge', label: 'Werkzeuge' }}
        third={{ href: '/de/werkzeuge/meta-titel-beschreibung-laengenpruefer', label: 'Meta-Tag-Checker' }}
        includeJsonLd
        locale="de"
      />

      <ToolEditorLayout>
        <AdSense variant="tool-banner" className="my-3" />
        <MetaTitleDescriptionTool />
      </ToolEditorLayout>

      <Wrapper>
        <Gap variant="line" />

        <SectionInfo title="Warum Meta-Titel und Beschreibung optimieren?">
          <p className="text-mid">
            Der Meta-Titel und die Meta-Beschreibung sind die ersten Elemente, die Nutzer in den Google-Suchergebnissen sehen. Ein abgeschnittener Titel oder eine unvollständige Beschreibung können
            die Klickrate erheblich senken. Mit diesem Tool prüfen Sie sofort, ob Ihre Texte im empfohlenen Bereich liegen.
          </p>
          <p className="text-mid mt-3">
            Meta-Tags beschreiben den Seiteninhalt für Suchmaschinen und Nutzer. Der Meta-Titel erscheint als klickbare blaue Überschrift in den Suchergebnissen, die Beschreibung als grauer Text
            darunter. Gut geschriebene Meta-Tags erhöhen die Chance, dass jemand auf Ihre Seite klickt.
          </p>
        </SectionInfo>

        <Gap size="sm" />

        <SectionSteps
          title="So verwenden Sie den Meta-Checker"
          description="Die Prüfung von Meta-Titel und Beschreibung dauert weniger als eine Minute:"
          grid="four"
          items={[
            {
              icon: <RiPencilLine className="h-6 w-6" />,
              title: '1. Titel eingeben',
              description: 'Geben Sie Ihren Meta-Titel in das erste Feld ein. Das Tool berechnet automatisch Zeichenanzahl, Wortanzahl und Pixelbreite.',
            },
            {
              icon: <RiFileTextLine className="h-6 w-6" />,
              title: '2. Beschreibung eingeben',
              description: 'Geben Sie Ihre Meta-Beschreibung ein. Sie sehen sofort, ob die Länge im empfohlenen Bereich liegt.',
            },
            {
              icon: <RiEyeLine className="h-6 w-6" />,
              title: '3. Vorschau prüfen',
              description: 'Sehen Sie, wie Titel und Beschreibung in einem simulierten Google-Suchergebnis aussehen.',
            },
            {
              icon: <RiToolsLine className="h-6 w-6" />,
              title: '4. Anpassen',
              description: 'Wenn der Status „Zu kurz" oder „Zu lang" zeigt, passen Sie den Text an und beobachten Sie die Änderungen in Echtzeit.',
            },
          ]}
        />

        <Gap variant="line" />

        <SectionInfo title="Wie viele Zeichen sollten Meta-Titel und Meta-Beschreibung haben?">
          <p className="text-mid mb-4">
            Google veröffentlicht keine festen Grenzen. Die Bereiche basieren auf umfangreichen Analysen der tatsächlichen Suchergebnisse. Der praktische Ansatz: Halten Sie die wichtigsten Wörter am
            Anfang, dann ist selbst ein leicht abgeschnittener Text noch informativ.
          </p>
          <div className="overflow-x-auto">
            <table className="text-mid w-full text-left">
              <thead>
                <tr className="border-b border-neutral-200">
                  <th className="py-2 pr-4 font-semibold">Element</th>
                  <th className="py-2 pr-4 font-semibold">Zeichen</th>
                  <th className="py-2 pr-4 font-semibold">Pixelbreite</th>
                  <th className="py-2 font-semibold">Hinweis</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-neutral-100">
                  <td className="py-2 pr-4 font-medium">Meta-Titel</td>
                  <td className="py-2 pr-4 whitespace-nowrap">50–60</td>
                  <td className="py-2 pr-4 whitespace-nowrap">bis ca. 580 px</td>
                  <td className="text-primary-light0 py-2 text-sm">Der wichtigste Faktor. Schlüsselwörter am Anfang, Markenname am Ende.</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-medium">Meta-Beschreibung</td>
                  <td className="py-2 pr-4 whitespace-nowrap">120–160</td>
                  <td className="py-2 pr-4 whitespace-nowrap">bis ca. 920 px</td>
                  <td className="text-primary-light0 py-2 text-sm">Beschreibung des Seiteninhalts. Beeinflusst die CTR, nicht direkt das Ranking.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </SectionInfo>

        <Gap variant="line" />

        <SectionDemo
          title="So interpretieren Sie die Ergebnisse"
          subtitle="Bewertungsstatus"
          demo={
            <div className="space-y-3">
              <div className="flex items-center gap-3 rounded-lg border border-neutral-200 bg-white p-3">
                <Badge variant="success" size="sm">
                  Gute Länge
                </Badge>
                <span className="text-mid text-sm!">Titel oder Beschreibung liegen im empfohlenen Bereich</span>
              </div>
              <div className="flex items-center gap-3 rounded-lg border border-neutral-200 bg-white p-3">
                <Badge variant="warning" size="sm">
                  Zu kurz
                </Badge>
                <span className="text-mid text-sm!">Text ist kürzer als empfohlen</span>
              </div>
              <div className="flex items-center gap-3 rounded-lg border border-neutral-200 bg-white p-3">
                <Badge variant="error" size="sm">
                  Zu lang
                </Badge>
                <span className="text-mid text-sm!">Text wird wahrscheinlich abgeschnitten</span>
              </div>
            </div>
          }
        >
          <p className="text-mid mb-4">Für jedes Feld (Titel und Beschreibung) sehen Sie Kennzahlen und einen farbigen Status:</p>
          <ul className="text-mid list-disc space-y-2 pl-5">
            <li>
              <strong>Zeichen</strong> - aktuelle Zeichenanzahl und empfohlener Bereich.
            </li>
            <li>
              <strong>Wörter</strong> - Wortanzahl im Feld.
            </li>
            <li>
              <strong>Pixelbreite</strong> - geschätzte Breite in Pixeln, wie von Google gerendert. Verschiedene Buchstaben haben unterschiedliche Breiten - „i" ist schmaler als „m".
            </li>
            <li>
              <strong>Status</strong> - farbige Bewertung: Grün (gute Länge), Gelb (zu kurz), Rot (zu lang).
            </li>
          </ul>
        </SectionDemo>

        <Gap variant="line" />

        <SectionDemo
          title="Warum die Pixelbreite wichtiger ist als die Zeichenanzahl"
          variant="left"
          demo={
            <div className="space-y-3">
              <div className="rounded-lg border border-neutral-200 bg-white p-3">
                <p className="text-dark text-sm! font-medium">Beispiel mit schmalen Buchstaben</p>
                <p className="text-mid mt-1 font-mono text-sm!">iiiiiiiiiiiiiiiiiiiiiiiiiiiiii</p>
                <p className="text-light mt-1 text-xs!">28 Zeichen = ca. 100 px</p>
              </div>
              <div className="rounded-lg border border-neutral-200 bg-white p-3">
                <p className="text-dark text-sm! font-medium">Beispiel mit breiten Buchstaben</p>
                <p className="text-mid mt-1 font-mono text-sm!">MMMMMMMMMMMMMMMMMMMMMMMMMMMM</p>
                <p className="text-light mt-1 text-xs!">28 Zeichen = ca. 480 px</p>
              </div>
            </div>
          }
        >
          <p className="text-mid">
            Google schneidet Titel und Beschreibungen anhand der Pixelbreite ab, nicht der Zeichenanzahl. Verschiedene Buchstaben haben unterschiedliche Breiten - ein „i" ist viel schmaler als ein
            „M".
          </p>
          <p className="text-mid mt-3">
            Das Tool schätzt die Pixelbreite mit einer Methode, die der von Google verwendeten ähnelt. Dadurch sehen Sie, ob Ihr Text in den sichtbaren Bereich der Suchergebnisse passt - unabhängig
            davon, welche Zeichen er enthält.
          </p>
        </SectionDemo>

        <Gap variant="line" />

        <SectionInfo title="Google-Vorschau - was zeigt sie?">
          <p className="text-mid">
            Unterhalb der Eingabefelder sehen Sie eine Vorschau, die ein Google-Suchergebnis simuliert. Die Vorschau zeigt genau, wie der Titel (blauer Link) und die Beschreibung (grauer Text) in den
            Suchergebnissen aussehen würden.
          </p>
          <p className="text-mid mt-3">
            Wenn ein Titel oder eine Beschreibung den verfügbaren Platz überschreitet, schneidet die Vorschau sie automatisch ab - genau wie Google. Dies hilft Ihnen zu sehen, wo der Text abbricht und
            ob die wichtigsten Informationen sichtbar bleiben.
          </p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionSteps
          title="Häufige Probleme und Lösungen"
          description="Die meisten Probleme mit Meta-Tags lassen sich leicht beheben:"
          grid="two"
          items={[
            {
              icon: <RiRulerLine className="h-6 w-6" />,
              title: 'Titel zu lang',
              description: 'Entfernen Sie Füllwörter, kürzen Sie den Markennamen oder verschieben Sie ihn ans Ende. Behalten Sie die wichtigsten Schlüsselwörter am Anfang.',
            },
            {
              icon: <RiFileTextLine className="h-6 w-6" />,
              title: 'Beschreibung zu kurz',
              description: 'Beschreiben Sie den konkreten Nutzen für den Leser. Beantworten Sie die Frage: Warum sollte jemand auf genau dieses Ergebnis klicken?',
            },
            {
              icon: <RiSearchLine className="h-6 w-6" />,
              title: 'Google zeigt anderen Text',
              description:
                'Wenn Google die Meta-Tags als unpassend zur Suchanfrage einschätzt, generiert es eigene Snippets. Stellen Sie sicher, dass der Titel und die Beschreibung zum Seiteninhalt passen.',
            },
            {
              icon: <RiRuler2Line className="h-6 w-6" />,
              title: 'Gleiche Zeichenanzahl, aber unterschiedlich lang',
              description: 'Text mit vielen Großbuchstaben oder breiten Buchstaben (M, W, Ö) verbraucht mehr Pixel. Das Tool zeigt die tatsächliche Pixelbreite an.',
            },
          ]}
        />

        <Gap variant="line" />

        <SectionSteps
          title="Für wen ist der Meta-Tag-Checker?"
          description="Jeder, der Webinhalte veröffentlicht, profitiert von der Optimierung der Meta-Tags:"
          grid="three"
          items={[
            {
              icon: <RiShoppingBagLine className="h-6 w-6" />,
              title: 'E-Commerce-Betreiber',
              description: 'Optimieren Sie Produktseiten-Titel und -Beschreibungen, um mehr Klicks in den Suchergebnissen zu erhalten.',
            },
            {
              icon: <RiEditLine className="h-6 w-6" />,
              title: 'Texter und Content-Ersteller',
              description: 'Prüfen Sie Meta-Tags vor der Veröffentlichung jedes Artikels oder jeder Seite.',
            },
            {
              icon: <RiSearchLine className="h-6 w-6" />,
              title: 'SEO-Spezialisten',
              description: 'Analysieren Sie Meta-Tags im Vergleich zu Wettbewerbern. Schnelle Prüfung der Zeichenanzahl und Pixelbreite.',
            },
            {
              icon: <RiMegaphoneLine className="h-6 w-6" />,
              title: 'Marketing-Manager',
              description: 'Sicherstellen, dass Landingpages in den Suchergebnissen so erscheinen wie gewünscht.',
            },
            {
              icon: <RiCodeLine className="h-6 w-6" />,
              title: 'Webentwickler',
              description: 'Meta-Tags vor dem Deployment prüfen. Schneller Check ohne zusätzliche Abhängigkeiten.',
            },
          ]}
        />

        <Gap variant="line" />

        <SectionSteps
          title="Was macht diesen Meta-Tag-Checker besonders?"
          grid="two"
          items={[
            {
              icon: <RiRuler2Line className="h-6 w-6" />,
              title: 'Pixelbreite-Messung',
              description: 'Das Tool misst nicht nur die Zeichenanzahl, sondern auch die tatsächliche Pixelbreite - genau wie Google.',
            },
            {
              icon: <RiEyeLine className="h-6 w-6" />,
              title: 'Google-Suchergebnis-Vorschau',
              description: 'Sehen Sie, wie Ihr Eintrag in den Suchergebnissen aussehen wird, einschließlich automatischer Abschneidung.',
            },
            {
              icon: <RiCheckboxCircleLine className="h-6 w-6" />,
              title: 'Farbcodierte Bewertung',
              description: 'Grün, Gelb und Rot zeigen sofort, ob die Länge optimal ist, zu kurz oder zu lang.',
            },
            {
              icon: <RiInfinityLine className="h-6 w-6" />,
              title: 'Echtzeit-Analyse',
              description: 'Alle Kennzahlen aktualisieren sich sofort beim Tippen — keine Wartezeit, kein Formular absenden.',
            },
            {
              icon: <RiUserLine className="h-6 w-6" />,
              title: 'Lokale Verarbeitung',
              description: 'Ihr Text wird nie an einen Server gesendet — die gesamte Analyse läuft im Browser.',
            },
          ]}
        />

        <Gap variant="line" />

        <FaqPanels title="Häufig gestellte Fragen zum Meta-Checker" openByDefault={1} items={faqItems} pageUrl={toAbsoluteUrl('/de/werkzeuge/meta-titel-beschreibung-laengenpruefer')} />

        <Gap variant="line" />

        <ToolsCarousel title="Weitere Tools entdecken" />

        <Gap size="sm" />
      </Wrapper>
    </>
  );
}
