import Script from 'next/script';
import HeroBanner from '@/components/sections/HeroBanner';
import Breadcrumbs from '@/components/sections/BreadCrumbs';
import WcagContrastChecker from '@/components/sections/tools/WcagContrastChecker';
import ToolsCarousel from '@/components/sections/tools/ToolsCarousel';
import FaqPanels from '@/components/ui/FaqPanels';
import Gap from '@/components/ui/Gap';
import SectionInfo from '@/components/ui/sections/SectionInfo';
import SectionSteps from '@/components/ui/sections/SectionSteps';
import SectionDemo from '@/components/ui/sections/SectionDemo';
import SectionFeatureComparison from '@/components/ui/sections/SectionFeatureComparison';
import Badge from '@/components/ui/Badge';
import Wrapper from '@/components/ui/Wrapper';
import ToolEditorLayout from '@/components/ui/ToolEditorLayout';
import { toAbsoluteUrl, siteUrl } from '@/utils/absoluteUrl';
import type { Metadata } from 'next';
import AdSense from '@/components/ui/AdSense';
import {
  RiPaletteLine,
  RiPaintBrushLine,
  RiCheckboxCircleLine,
  RiEqualizerLine,
  RiEyeLine,
  RiShieldCheckLine,
  RiMagicLine,
  RiStackLine,
  RiInfinityLine,
  RiGlobalLine,
  RiMailLine,
  RiFileTextLine,
  RiSmartphoneLine,
  RiLayoutGridLine,
  RiArticleLine,
} from 'react-icons/ri';

export const metadata: Metadata = {
  title: 'Kostenloser Farbkontrast-Checker online - WCAG-Konformität',
  description:
    'Kostenloser Online-Farbkontrast-Checker. Testen Sie die Lesbarkeit von Text- und Hintergrundfarben gemäß WCAG 2.1. Auto-Match-Funktion hilft bei der Suche nach barrierefreien Farbkombinationen. Ohne Registrierung.',
  alternates: {
    canonical: toAbsoluteUrl('/de/werkzeuge/farbkontrast-checker'),
    languages: {
      pl: toAbsoluteUrl('/narzedzia/kontrast-i-czytelnosc-kolorow'),
      en: toAbsoluteUrl('/en/tools/color-contrast-checker'),
      de: toAbsoluteUrl('/de/werkzeuge/farbkontrast-checker'),
      es: toAbsoluteUrl('/es/herramientas/comprobador-de-contraste-de-colores'),
      fr: toAbsoluteUrl('/fr/outils/verificateur-de-contraste-des-couleurs'),
    },
  },
  openGraph: {
    title: 'Kostenloser Farbkontrast-Checker online - WCAG-Konformität',
    description: 'Testen Sie die Lesbarkeit von Text- und Hintergrundfarben gemäß WCAG 2.1. Auto-Match-Funktion hilft bei barrierefreien Farbkombinationen.',
    url: toAbsoluteUrl('/de/werkzeuge/farbkontrast-checker'),
    type: 'website',
    images: [{ url: toAbsoluteUrl('/assets/tools/narzedzia-tester-kontrastu-kolorow-wcag.webp'), width: 1200, height: 630 }],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Farbkontrast-Checker online',
  alternateName: [
    'WCAG-Kontrastprüfer',
    'Online-Lesbarkeitstest für Farben',
    'Textkontrast-Checker WCAG 2.1',
    'AA- und AAA-Kontrast-Checker',
    'Farben auf Barrierefreiheit prüfen',
    'Farben auf Lesbarkeit prüfen',
  ],
  url: toAbsoluteUrl('/de/werkzeuge/farbkontrast-checker'),
  applicationCategory: 'DesignApplication',
  applicationSubCategory: 'AccessibilityTool',
  operatingSystem: 'Any',
  description:
    'Prüfen Sie, ob Text- und Hintergrundfarben für alle Nutzer lesbar sind. Das Tool berechnet das Kontrastverhältnis gemäß WCAG 2.1 und zeigt, ob die Barrierefreiheitsanforderungen erfüllt sind.',
  featureList: [
    'Kontrastberechnung (1:1 bis 21:1)',
    'WCAG 2.1 AA- und AAA-Bewertung',
    'Prüfung für normalen Text, großen Text und Symbole',
    'Automatische Farbvorschläge (Auto-Match)',
    'Unterstützung für HEX, RGB, RGBA, HSL, HSLA',
    'Echtzeit-Vorschau beim Tippen',
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
  name: 'So prüfen Sie den Farbkontrast gemäß WCAG',
  description:
    'Prüfen Sie, ob Ihre Text- und Hintergrundfarben die WCAG 2.1-Anforderungen erfüllen. Geben Sie zwei Farben ein und sehen Sie sofort das Kontrastverhältnis und die Bewertung für AA und AAA.',
  url: toAbsoluteUrl('/de/werkzeuge/farbkontrast-checker'),
  step: [
    { '@type': 'HowToStep', name: 'Textfarbe eingeben', text: 'Geben Sie einen Farbcode (z.\u00a0B. #333333) im HEX-, RGB- oder HSL-Format ein - oder wählen Sie eine Farbe aus der Farbauswahl.' },
    { '@type': 'HowToStep', name: 'Hintergrundfarbe eingeben', text: 'Geben Sie die Hintergrundfarbe ein, auf der der Text angezeigt wird.' },
    {
      '@type': 'HowToStep',
      name: 'Ergebnis ablesen',
      text: 'Das Tool berechnet das Kontrastverhältnis und zeigt, ob die Farben die WCAG-Anforderungen für normalen Text, großen Text und Symbole erfüllen.',
    },
    { '@type': 'HowToStep', name: 'Farben anpassen', text: 'Bei zu geringem Kontrast schlägt die Auto-Match-Funktion automatisch eine Farbvariante vor, die den gewählten Schwellenwert erfüllt.' },
  ],
  publisher: { '@type': 'Organization', name: 'Arteon Agency', url: siteUrl },
};

const faqItems = [
  {
    question: 'Was ist ein Farbkontrastverhältnis?',
    answer:
      'Ein Kontrastverhältnis ist ein Maß für den Helligkeitsunterschied zwischen zwei Farben. Die Skala reicht von 1:1 (kein Unterschied) bis 21:1 (maximaler Unterschied - schwarzer Text auf weißem Hintergrund). Je höher das Verhältnis, desto leichter ist der Text vom Hintergrund zu unterscheiden.',
    answerSchemaText: 'Ein Maß für den Helligkeitsunterschied zwischen zwei Farben. Skala von 1:1 bis 21:1.',
  },
  {
    question: 'Welcher Kontrast ist laut WCAG ausreichend?',
    answer:
      'Für normalen Text ist das Minimum 4,5:1 (Level AA). Für großen Text - Überschriften ab 18pt oder fetten Text ab 14pt - reicht 3:1. Für Symbole und UI-Komponenten ist ebenfalls 3:1 erforderlich.',
    answerSchemaText: 'Normaler Text: min. 4,5:1 (AA). Großer Text: min. 3:1. Symbole: min. 3:1.',
  },
  {
    question: 'Muss ich AAA-Kontraststufe erfüllen?',
    answer:
      'Nicht zwingend. Level AA (4,5:1 für normalen Text) ist das Minimum laut EU-Barrierefreiheitsrichtlinie. Level AAA (7:1) bietet bessere Lesbarkeit, ist aber schwieriger umzusetzen. Für kritische Inhalte wie Warnungen oder Sicherheitshinweise ist AAA empfehlenswert.',
    answerSchemaText: 'AA ist das Minimum. AAA bietet bessere Lesbarkeit, wird aber für kritische Inhalte empfohlen.',
  },
  {
    question: 'Was ist der WCAG-Standard?',
    answer:
      'WCAG (Web Content Accessibility Guidelines) ist ein internationaler Standard für barrierefreie Webinhalte, entwickelt vom W3C. Er definiert unter anderem Mindest-Kontrastwerte, Überschriftenstruktur und Tastaturnavigation.',
    answerSchemaText: 'WCAG ist ein W3C-Standard für barrierefreie Webinhalte, der Kontrastwerte, Struktur und Navigation definiert.',
  },
  {
    question: 'Wo finde ich die Farbcodes meiner Website?',
    answer:
      'In Chrome, Firefox oder Edge öffnen Sie die Entwicklertools (Rechtsklick → Untersuchen). Im Tab „Styles“ sehen Sie die verwendeten Farben. Alternativ kann eine Browsererweiterung wie ColorZilla die Farbe jedes Elements auf der Seite ermitteln.',
    answerSchemaText: 'Browser-Entwicklertools (Rechtsklick → Untersuchen → Styles) oder Erweiterungen wie ColorZilla.',
  },
  {
    question: 'Wie funktioniert die Auto-Match-Funktion?',
    answer:
      'Wenn der Kontrast unter dem gewählten Schwellenwert liegt, sucht die Match-Funktion automatisch die nächstliegende Textfarbe, die den Mindestkontrast erfüllt. Die vorgeschlagene Farbe bleibt so nah wie möglich am Original, ändert sich aber gerade so weit, dass die Anforderung erfüllt wird.',
    answerSchemaText: 'Die Match-Funktion findet automatisch die nächstliegende Textfarbe, die den Mindestkontrast erfüllt.',
  },
  {
    question: 'Ist der Kontrast-Checker auch für Farbenblinde relevant?',
    answer:
      'Teilweise. Der WCAG-Kontrasttest prüft den Helligkeitsunterschied, nicht die Farbunterscheidung. Menschen mit Rot-Grün-Schwäche können Schwierigkeiten haben, bestimmte Farben zu unterscheiden, selbst wenn der Kontrastwert gut ist. Verwenden Sie zusätzlich Muster, Beschriftungen oder Symbole - nie nur Farbe allein zur Informationsvermittlung.',
    answerSchemaText: 'Der Kontrasttest prüft Helligkeit, nicht Farbunterscheidung. Verwenden Sie zusätzlich Muster oder Symbole.',
  },
];

export default function ColorContrastCheckerPage() {
  return (
    <>
      <Script id="ld-json-contrast-checker-de" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Script id="ld-json-contrast-howto-de" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />

      <HeroBanner
        title="Farbkontrast-Checker"
        description="Geben Sie eine Text- und Hintergrundfarbe ein, und das Tool zeigt, ob der Kontrast ausreichend ist. Die Berechnung basiert auf dem internationalen Barrierefreiheitsstandard WCAG 2.1."
        overlay="black"
        backgroundImage="/assets/tools/narzedzia-tester-kontrastu-kolorow-wcag.webp"
      />

      <Breadcrumbs second={{ href: '/de/werkzeuge', label: 'Werkzeuge' }} third={{ href: '/de/werkzeuge/farbkontrast-checker', label: 'Farbkontrast-Checker' }} includeJsonLd locale="de" />

      <ToolEditorLayout>
        <AdSense variant="tool-banner" className="my-3" />
        <WcagContrastChecker />
      </ToolEditorLayout>

      <Wrapper>
        <Gap variant="line" />

        <SectionInfo title="Warum ist Farblesbarkeit wichtig?">
          <p className="text-mid">
            Lesbarkeit hängt vom Helligkeitsunterschied zwischen Text- und Hintergrundfarbe ab. Je größer dieser Unterschied, desto leichter ist der Text zu lesen. Zu geringer Kontrast erschwert das
            Lesen - besonders für Menschen mit Sehbeeinträchtigungen, ältere Personen oder bei schwierigen Lichtverhältnissen.
          </p>
          <p className="text-mid mt-3">
            Laut der{' '}
            <a href="https://www.who.int/news-room/fact-sheets/detail/blindness-and-visual-impairment" target="_blank" rel="noopener noreferrer" className="underline">
              Weltgesundheitsorganisation (WHO)
            </a>{' '}
            haben weltweit etwa 2,2 Milliarden Menschen eine Form von Sehbeeinträchtigung.
          </p>
          <p className="text-mid mt-3">
            Das Kontrastverhältnis wird nach der{' '}
            <a href="https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html" target="_blank" rel="noopener noreferrer" className="underline">
              WCAG 2.1-Formel
            </a>{' '}
            berechnet. Es beschreibt den Helligkeitsunterschied zwischen zwei Farben auf einer Skala von 1:1 (kein Unterschied) bis 21:1 (maximaler Unterschied).
          </p>
        </SectionInfo>

        <Gap size="sm" />

        <SectionSteps
          title="So verwenden Sie den Farbkontrast-Checker"
          description="Die Überprüfung der Lesbarkeit dauert nur wenige Sekunden:"
          grid="four"
          items={[
            {
              icon: <RiPaletteLine className="h-6 w-6" />,
              title: '1. Textfarbe eingeben',
              description: 'Geben Sie einen Farbcode (z.\u00a0B. #333333) im HEX-, RGB- oder HSL-Format ein - oder wählen Sie eine Farbe aus der Farbauswahl.',
            },
            {
              icon: <RiPaintBrushLine className="h-6 w-6" />,
              title: '2. Hintergrundfarbe eingeben',
              description: 'Geben Sie die Hintergrundfarbe ein, auf der der Text angezeigt wird.',
            },
            {
              icon: <RiCheckboxCircleLine className="h-6 w-6" />,
              title: '3. Ergebnis ablesen',
              description: 'Das Tool berechnet das Kontrastverhältnis und zeigt, ob die Farben die WCAG-Anforderungen erfüllen.',
            },
            {
              icon: <RiEqualizerLine className="h-6 w-6" />,
              title: '4. Farben anpassen',
              description: 'Bei zu geringem Kontrast schlägt die Match-Funktion automatisch eine Farbvariante vor, die den gewählten Schwellenwert erfüllt.',
            },
          ]}
        />

        <Gap variant="line" />

        <SectionDemo
          title="So interpretieren Sie die Ergebnisse"
          subtitle="Bewertungsstatus"
          demo={
            <div className="space-y-3">
              <div className="flex items-center gap-3 rounded-lg border border-neutral-200 bg-white p-3">
                <Badge variant="success" size="sm">
                  Bestanden
                </Badge>
                <span className="text-mid text-sm!">Kontrast erfüllt die Anforderung</span>
              </div>
              <div className="flex items-center gap-3 rounded-lg border border-neutral-200 bg-white p-3">
                <Badge variant="error" size="sm">
                  Nicht bestanden
                </Badge>
                <span className="text-mid text-sm!">Kontrast ist zu gering</span>
              </div>
              <div className="mt-2 rounded-lg bg-neutral-100 p-3">
                <p className="text-dark text-sm! font-medium">Kontrastverhältnis</p>
                <p className="text-mid mt-1 text-2xl! font-bold">4.56 : 1</p>
              </div>
            </div>
          }
        >
          <p className="text-mid mb-4">Das Tool zeigt das Kontrastverhältnis und die Bewertung für drei Inhaltstypen:</p>
          <ul className="text-mid list-disc space-y-2 pl-5">
            <li>
              <strong>Normaler Text</strong> - Standardtext auf der Seite. Minimum: 4,5:1 (AA) oder 7:1 (AAA).
            </li>
            <li>
              <strong>Großer Text</strong> - Überschriften ab 18pt oder fetter Text ab 14pt. Minimum: 3:1 (AA) oder 4,5:1 (AAA).
            </li>
            <li>
              <strong>UI-Komponenten und Symbole</strong> - Schaltflächen, Formularfelder, Icons. Minimum: 3:1 (AA).
            </li>
          </ul>
        </SectionDemo>

        <Gap variant="line" />

        <SectionInfo title="Was bedeuten die Ergebnisse des Lesbarkeitstests?">
          <p className="text-mid mb-4">
            Das Tool zeigt das Kontrastverhältnis auf einer Skala von 1:1 (kein Kontrast) bis 21:1 (maximaler Kontrast – Schwarz auf Weiß). Das Ergebnis wird mit den im WCAG-Standard definierten Schwellenwerten verglichen:
          </p>
          <ul className="text-mid list-disc space-y-2 pl-5">
            <li>
              <strong>Normaler Text</strong> – erfordert mindestens 4,5:1 für Level AA (Mindeststandard) oder 7:1 für Level AAA (erweiterter Standard). Gilt für Text unter 18pt (24px) oder unter 14pt (18,5px) fett.
            </li>
            <li>
              <strong>Großer / fetter Text</strong> – erfordert mindestens 3:1 für Level AA oder 4,5:1 für Level AAA. Gilt für Text ab 18pt (24px) oder ab 14pt (18,5px) fett – Überschriften, Buttons, Hervorhebungen.
            </li>
            <li>
              <strong>Symbole und UI-Elemente</strong> – erfordern mindestens 3:1 für Level AA. Gilt für Icons, Buttons, Formularfelder und andere Oberflächenelemente, die Informationen vermitteln.
            </li>
          </ul>
          <p className="text-mid mt-3">
            <strong>Level AA</strong> ist das Minimum, das von den Barrierefreiheitsvorschriften in vielen Ländern verlangt wird, einschließlich der{' '}
            <a href="https://eur-lex.europa.eu/legal-content/DE/TXT/?uri=CELEX:32016L2102" target="_blank" rel="noopener noreferrer" className="underline">
              EU-Richtlinie über die Barrierefreiheit von Websites
            </a>
            . <strong>Level AAA</strong> bietet bessere Lesbarkeit, ist aber nicht immer für alle Elemente praktisch umsetzbar.
          </p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionInfo title="Automatische Farbanpassung - Match-Funktion">
          <p className="text-mid">
            Wenn die gewählte Farbkombination den Kontrastschwellenwert nicht erfüllt, schlägt die Match-Funktion automatisch die nächstliegende Textfarbe vor, die die Anforderung erfüllt. Die
            vorgeschlagene Farbe bleibt so nah wie möglich am Original.
          </p>
          <p className="text-mid mt-3">
            Sie können den Schwellenwert zwischen AA (4,5:1) und AAA (7:1) umschalten, und die Match-Funktion passt die Vorschläge entsprechend an. Dies erleichtert die Suche nach barrierefreien
            Farbkombinationen, ohne den gewünschten Farbton komplett aufgeben zu müssen.
          </p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionFeatureComparison
          title="Was bedeuten die Stufen AA und AAA?"
          plans={[
            { id: 'aa', name: 'Level AA (Minimum)', highlighted: true },
            { id: 'aaa', name: 'Level AAA (Erweitert)' },
          ]}
          features={[
            { name: 'Normaler Text - min. 4,5:1', values: { aa: true, aaa: true } },
            { name: 'Normaler Text - min. 7:1', values: { aa: false, aaa: true } },
            { name: 'Großer / fetter Text - min. 3:1', values: { aa: true, aaa: true } },
            { name: 'Großer / fetter Text - min. 4,5:1', values: { aa: false, aaa: true } },
            { name: 'Symbole und UI-Elemente - min. 3:1', values: { aa: true, aaa: true } },
            { name: 'Gesetzlich vorgeschrieben (EU-Richtlinie)', values: { aa: true, aaa: false } },
            { name: 'Empfohlen für wichtige Inhalte', values: { aa: true, aaa: true } },
          ]}
        />

        <Gap variant="line" />

        <SectionInfo title="Fehlerbehebung beim Farbkontrast-Checker">
          <h3 className="h5 mb-2">Fehlermeldung zum Farbformat</h3>
          <p className="text-mid mb-4">
            Überprüfen Sie das Farbformat. Ein HEX-Code muss mit <code className="rounded bg-black/5 px-1">#</code> beginnen und 3 oder 6 Zeichen enthalten (z.{'\u00a0'}B.{' '}
            <code className="rounded bg-black/5 px-1">#fff</code> oder <code className="rounded bg-black/5 px-1">#ffffff</code>). Beim RGB-Format müssen die Werte durch Kommas getrennt sein und im Bereich 0–255 liegen.
          </p>

          <h3 className="h5 mb-2">Die Match-Funktion findet keine passende Farbe</h3>
          <p className="text-mid mb-4">
            Wenn Hintergrund und Text eine ähnliche Helligkeit im gleichen Farbton haben, kann der Algorithmus möglicherweise keine Variante finden, die die Anforderungen erfüllt, ohne den Farbton zu ändern. In diesem Fall sollten Sie die Hintergrundfarbe ändern oder eine ganz andere Textfarbe wählen.
          </p>

          <h3 className="h5 mb-2">Farbe im Farbwähler stimmt nicht mit dem eingegebenen Code überein</h3>
          <p className="text-mid">
            Der Farbwähler des Browsers unterstützt nur das HEX-Format ohne Transparenz. Wenn Sie eine Farbe im RGBA- oder HSLA-Format mit Transparenz eingeben, zeigt der Farbwähler nur den Farbanteil (ohne Alpha). Die Kontrastberechnung berücksichtigt die Transparenz weiterhin.
          </p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionSteps
          title="Wo sollten Sie die Farblesbarkeit prüfen?"
          description="Der Kontrast-Checker hilft bei der Bewertung verschiedener Bereiche einer Website:"
          grid="three"
          items={[
            {
              icon: <RiGlobalLine className="h-6 w-6" />,
              title: 'Navigation und Menüs',
              description: 'Menüpunkte müssen auf dem Hintergrund gut lesbar sein - auch bei Hover- und Fokuszuständen.',
            },
            {
              icon: <RiFileTextLine className="h-6 w-6" />,
              title: 'Fließtext und Artikel',
              description: 'Text auf weißem oder farbigem Hintergrund. Besonders kritisch bei hellen Grautönen als Textfarbe.',
            },
            {
              icon: <RiMailLine className="h-6 w-6" />,
              title: 'Formulare und Buttons',
              description: 'Formularfelder, Fehlermeldungen und CTA-Buttons müssen gut sichtbar sein.',
            },
            {
              icon: <RiSmartphoneLine className="h-6 w-6" />,
              title: 'Mobile Ansicht',
              description: 'Auf kleinen Bildschirmen und bei direkter Sonneneinstrahlung ist ein höherer Kontrast besonders wichtig.',
            },
            {
              icon: <RiLayoutGridLine className="h-6 w-6" />,
              title: 'Hero-Banner und Overlays',
              description: 'Weißer Text auf Bildhintergründen - häufige Problemquelle. Prüfen Sie den Kontrast gegen die dunkelste Stelle.',
            },
            {
              icon: <RiArticleLine className="h-6 w-6" />,
              title: 'Footer und rechtliche Hinweise',
              description: 'Footer-Text ist oft klein und hell — eine häufige Schwachstelle bei der Barrierefreiheit.',
            },
          ]}
        />

        <Gap variant="line" />

        <SectionInfo title="Farblesbarkeit für Farbenblinde">
          <p className="text-mid">
            Etwa 8 % der Männer und 0,5 % der Frauen haben eine Farbsehschwäche. Die häufigste Form ist die Rot-Grün-Schwäche (Deuteranomalie), bei der rote und grüne Töne schwer zu unterscheiden
            sind.
          </p>
          <p className="text-mid mt-3">
            Der WCAG-Kontrasttest prüft nur den Helligkeitsunterschied, nicht die Farbunterscheidung. Beachten Sie daher zusätzlich: Verwenden Sie nie nur Farbe allein, um Informationen zu vermitteln
            (z.&nbsp;B. „rote Felder sind Pflichtfelder"). Ergänzen Sie Farbe stets durch Beschriftungen, Muster oder Symbole.
          </p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionSteps
          title="Was macht diesen Kontrast-Checker besonders?"
          grid="two"
          items={[
            {
              icon: <RiEyeLine className="h-6 w-6" />,
              title: 'Objektive Bewertung',
              description: 'Das Kontrastverhältnis wird nach der WCAG-Formel berechnet — unabhängig von Ihren Monitoreinstellungen.',
            },
            {
              icon: <RiShieldCheckLine className="h-6 w-6" />,
              title: 'WCAG-Konformität',
              description: 'Basiert auf den WCAG-2.1-Anforderungen — der Grundlage der EU-Barrierefreiheitsrichtlinie.',
            },
            {
              icon: <RiMagicLine className="h-6 w-6" />,
              title: 'Automatische Farbanpassung',
              description: 'Die Match-Funktion findet automatisch eine Textfarbe, die den gewählten Kontrastschwellenwert erfüllt.',
            },
            {
              icon: <RiStackLine className="h-6 w-6" />,
              title: 'Fünf Farbformate',
              description: 'Unterstützte Formate: HEX, RGB, RGBA, HSL und HSLA.',
            },
            {
              icon: <RiInfinityLine className="h-6 w-6" />,
              title: 'Drei Inhaltstypen in einem Test',
              description: 'Ein Test — drei Ergebnisse: normaler Text, großer Text und Symbole.',
            },
          ]}
        />

        <Gap variant="line" />

        <FaqPanels
          pageUrl={toAbsoluteUrl('/de/werkzeuge/farbkontrast-checker')}
          title="Häufig gestellte Fragen zum Farbkontrast-Checker"
          openByDefault={1}
          items={[
            ...faqItems,
            {
              question: 'Welche Farbpaare auf meiner Website sollte ich zuerst prüfen?',
              answer:
                'Am wichtigsten: Text auf dem Haupthintergrund, Text auf Bannern und farbigen Abschnitten, Buttons (Textfarbe und Button-Hintergrund gegenüber dem Seitenhintergrund), Links und Icons. Achten Sie besonders auf Elemente, die je nach Abschnitt auf unterschiedlichen Hintergründen erscheinen.',
              answerSchemaText: 'Zuerst prüfen: Text auf Haupthintergrund, Banner, Buttons, Links und Icons.',
            },
          ]}
        />

        <Gap variant="line" />

        <ToolsCarousel title="Weitere kostenlose Tools entdecken" />

        <Gap size="sm" />
      </Wrapper>
    </>
  );
}
