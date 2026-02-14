import Script from 'next/script';
import HeroBanner from '@/components/sections/HeroBanner';
import Breadcrumbs from '@/components/sections/BreadCrumbs';
import ColorPaletteGenerator from '@/components/sections/tools/ColorPaletteGenerator';
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
  RiPaletteLine,
  RiFileCopyLine,
  RiContrastLine,
  RiMagicLine,
  RiInfinityLine,
  RiColorFilterLine,
  RiUserLine,
  RiGlobalLine,
  RiShoppingBagLine,
  RiSmartphoneLine,
  RiPaintBrushLine,
  RiSettings3Line,
  RiRefreshLine,
  RiSearchLine,
} from 'react-icons/ri';

const LOCALE = 'de' as const;
const TOOL_KEY = 'colorPalette' as const;

export const metadata: Metadata = {
  title: 'Kostenloser Farbpaletten-Generator online - 9 Paletten aus einer Farbe',
  description:
    'Kostenloser Online-Farbpaletten-Generator. Wählen Sie eine Farbe und generieren Sie 9 Paletten: monochromatisch, komplementär, triadisch, Pastell, dunkel und mehr. HEX-Codes mit einem Klick kopieren.',
  alternates: getToolAlternates(TOOL_KEY, LOCALE),
  openGraph: {
    title: 'Kostenloser Farbpaletten-Generator online',
    description: 'Wählen Sie eine Farbe und generieren Sie 9 Paletten: monochromatisch, komplementär, triadisch und mehr.',
    url: toAbsoluteUrl('/de/werkzeuge/farbpaletten-generator'),
    type: 'website',
    images: [{ url: toAbsoluteUrl('/assets/tools/narzedzia-generator-palet-kolorow-online.webp'), width: 1200, height: 630 }],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Farbpaletten-Generator online - 9 Paletten aus einer Farbe',
  alternateName: [
    'Online-Farbpaletten-Generator',
    'Farbschemata aus einer Farbe generieren',
    'Harmonische Farbpaletten erstellen',
    'Komplementärfarben-Generator',
    'Monochromatische Palette erstellen',
    'Farbtheorie-Tool online',
  ],
  url: toAbsoluteUrl('/de/werkzeuge/farbpaletten-generator'),
  applicationCategory: 'DesignApplication',
  applicationSubCategory: 'ColorTool',
  operatingSystem: 'Any',
  description:
    'Generieren Sie Farbpaletten aus einer einzigen Basisfarbe. 9 Palettentypen: monochromatisch, analog, komplementär, triadisch, split-komplementär, Pastell, dunkel, tonal und minimalistisch.',
  featureList: [
    '9 Palettentypen aus einer Basisfarbe',
    'Monochromatisch, analog, komplementär, triadisch, split-komplementär',
    'Pastell-, Dunkel-, Tonal- und minimalistische Paletten',
    'HEX-Codes mit einem Klick kopieren',
    'Berechnungen basierend auf dem HSL-Farbraum',
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
  name: 'So generieren Sie Farbpaletten aus einer Farbe',
  description: 'Wählen Sie eine Basisfarbe und erhalten Sie 9 harmonische Farbpaletten mit kopierbaren HEX-Codes.',
  url: toAbsoluteUrl('/de/werkzeuge/farbpaletten-generator'),
  step: [
    { '@type': 'HowToStep', name: 'Basisfarbe wählen', text: 'Geben Sie einen HEX-Farbcode ein oder verwenden Sie die Farbauswahl, um eine Basisfarbe festzulegen.' },
    { '@type': 'HowToStep', name: 'Paletten ansehen', text: 'Das Tool generiert automatisch 9 Paletten mit jeweils mehreren harmonischen Farben.' },
    { '@type': 'HowToStep', name: 'HEX-Codes kopieren', text: 'Klicken Sie auf eine Farbe, um den HEX-Code in die Zwischenablage zu kopieren.' },
  ],
  publisher: { '@type': 'Organization', name: 'Arteon Agency', url: siteUrl },
};

const faqItems = [
  {
    question: 'Wie viele Paletten generiert das Tool?',
    answer:
      'Das Tool generiert 9 verschiedene Paletten aus einer einzigen Basisfarbe: monochromatisch, analog, komplementär, triadisch, split-komplementär, Pastell, dunkel, tonal (Material Design) und minimalistisch (Apple-Stil).',
    answerSchemaText: '9 Paletten: monochromatisch, analog, komplementär, triadisch, split-komplementär, Pastell, dunkel, tonal, minimalistisch.',
  },
  {
    question: 'Was ist eine monochromatische Palette?',
    answer:
      'Eine monochromatische Palette besteht aus Variationen eines einzigen Farbtons - alle Farben haben denselben Farbton (H im HSL-Modell) und unterscheiden sich nur in Helligkeit und Sättigung. Diese Paletten sind harmonisch und eignen sich besonders für professionelle Designs.',
    answerSchemaText: 'Eine Palette aus einem Farbton mit Variationen in Helligkeit und Sättigung.',
  },
  {
    question: 'Was ist eine komplementäre Palette?',
    answer:
      'Eine komplementäre Palette kombiniert die Basisfarbe mit ihrem Komplement - der auf dem Farbkreis gegenüberliegenden Farbe (180°-Versatz). Dieser Kontrast gehört zu den grundlegenden Prinzipien der Farbtheorie und erzeugt einen lebhaften, dynamischen Effekt.',
    answerSchemaText: 'Die Basisfarbe plus die gegenüberliegende Farbe auf dem Farbkreis (180°-Versatz).',
  },
  {
    question: 'Kann ich die generierten Farben kopieren?',
    answer: 'Ja. Klicken Sie auf eine Farbe in der Palette, um den HEX-Code in die Zwischenablage zu kopieren. Sie können die Codes direkt in CSS, Figma, Adobe oder anderen Design-Tools verwenden.',
    answerSchemaText: 'Ja, klicken Sie auf eine Farbe, um den HEX-Code zu kopieren.',
  },
  {
    question: 'Was ist der HSL-Farbraum?',
    answer:
      'HSL steht für Hue (Farbton), Saturation (Sättigung) und Lightness (Helligkeit). Im Gegensatz zu RGB beschreibt HSL Farben so, wie wir sie wahrnehmen: der Farbton bestimmt die Grundfarbe, die Sättigung die Intensität und die Helligkeit, wie hell oder dunkel die Farbe ist. Alle Paletten in diesem Tool basieren auf HSL-Berechnungen.',
    answerSchemaText: 'HSL = Hue, Saturation, Lightness. Ein Farbmodell, das Farben nach menschlicher Wahrnehmung beschreibt.',
  },
  {
    question: 'Was ist der Unterschied zwischen triadisch und split-komplementär?',
    answer:
      'Eine triadische Palette verwendet drei Farben, die auf dem Farbkreis gleichmäßig verteilt sind (je 120° Abstand). Eine split-komplementäre Palette nimmt statt des direkten Komplements die beiden Nachbarfarben des Komplements - das ergibt einen etwas subtileren Kontrast als das komplementäre Schema.',
    answerSchemaText: 'Triadisch: 3 Farben à 120° Abstand. Split-komplementär: Basisfarbe + 2 Nachbarn des Komplements.',
  },
];

export default function ColorPalettePage() {
  return (
    <>
      <Script id="ld-json-color-palette-de" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Script id="ld-json-palette-howto-de" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />

      <HeroBanner
        title="Farbpaletten-Generator"
        description="Wählen Sie eine Basisfarbe und generieren Sie 9 harmonische Farbpaletten. Monochromatisch, komplementär, triadisch, Pastell, dunkel und mehr - alle Berechnungen laufen lokal in Ihrem Browser."
        overlay="black"
        backgroundImage="/assets/tools/narzedzia-generator-palet-kolorow-online.webp"
      />

      <Breadcrumbs second={{ href: '/de/werkzeuge', label: 'Werkzeuge' }} third={{ href: '/de/werkzeuge/farbpaletten-generator', label: 'Farbpaletten-Generator' }} includeJsonLd locale="de" />

      <ToolEditorLayout>
        <AdSense variant="tool-banner" className="my-3" />
        <ColorPaletteGenerator />
      </ToolEditorLayout>

      <Wrapper>
        <Gap variant="line" />

        <SectionInfo title="Farbpaletten aus einer einzigen Farbe generieren">
          <p className="text-mid">
            Der Farbpaletten-Generator erstellt aus einer einzigen Basisfarbe 9 verschiedene Farbpaletten auf Grundlage der Farbtheorie. Jede Palette hat eine andere Zusammensetzung - von
            monochromatischen Variationen bis hin zu kontrastierenden Komplementärfarben.
          </p>
          <p className="text-mid mt-3">
            Alle Berechnungen basieren auf dem HSL-Farbraum (Hue, Saturation, Lightness). Der Farbton bestimmt die Grundfarbe, die Sättigung die Intensität und die Helligkeit, wie hell oder dunkel die
            Farbe erscheint. Dieses Modell entspricht der menschlichen Farbwahrnehmung und eignet sich hervorragend für die Palettengenerierung.
          </p>
        </SectionInfo>

        <Gap size="sm" />

        <SectionSteps
          title="So verwenden Sie den Paletten-Generator"
          description="Die Palettengenerierung dauert nur wenige Sekunden:"
          grid="three"
          items={[
            {
              icon: <RiPaletteLine className="h-6 w-6" />,
              title: '1. Basisfarbe wählen',
              description: 'Geben Sie einen HEX-Farbcode ein oder verwenden Sie die Farbauswahl, um eine Basisfarbe festzulegen.',
            },
            {
              icon: <RiColorFilterLine className="h-6 w-6" />,
              title: '2. Paletten ansehen',
              description: 'Das Tool generiert automatisch 9 Paletten mit jeweils mehreren harmonischen Farben.',
            },
            {
              icon: <RiFileCopyLine className="h-6 w-6" />,
              title: '3. HEX-Codes kopieren',
              description: 'Klicken Sie auf eine Farbe, um den HEX-Code zu kopieren. Verwenden Sie ihn in CSS, Figma oder anderen Tools.',
            },
          ]}
        />

        <Gap variant="line" />

        <SectionSteps
          title="9 Palettentypen - welche passt zu Ihrem Projekt?"
          description="Jede Palette hat einen anderen Charakter und eignet sich für unterschiedliche Anwendungen:"
          grid="three"
          items={[
            {
              icon: <RiPaletteLine className="h-6 w-6" />,
              title: 'Monochromatisch',
              description: 'Variationen eines Farbtons in Helligkeit und Sättigung. Elegant, harmonisch, professionell.',
            },
            {
              icon: <RiColorFilterLine className="h-6 w-6" />,
              title: 'Analog',
              description: 'Benachbarte Farben auf dem Farbkreis. Sanfter, natürlicher Übergang ohne harten Kontrast.',
            },
            {
              icon: <RiContrastLine className="h-6 w-6" />,
              title: 'Komplementär',
              description: 'Basisfarbe + gegenüberliegende Farbe (180°). Maximaler Kontrast für dynamische, lebhafte Designs.',
            },
            {
              icon: <RiMagicLine className="h-6 w-6" />,
              title: 'Triadisch',
              description: 'Drei Farben im gleichmäßigen 120°-Abstand. Ausgewogen mit starkem visuellen Kontrast.',
            },
            {
              icon: <RiSearchLine className="h-6 w-6" />,
              title: 'Split-komplementär',
              description: 'Basisfarbe + die zwei Nachbarn des Komplements. Subtilerer Kontrast als rein komplementär.',
            },
            {
              icon: <RiPaintBrushLine className="h-6 w-6" />,
              title: 'Pastell',
              description: 'Hohe Helligkeit, reduzierte Sättigung. Weich, luftig - ideal für freundliche und feminine Designs.',
            },
            {
              icon: <RiSettings3Line className="h-6 w-6" />,
              title: 'Dunkel',
              description: 'Geringe Helligkeit, tiefe Töne. Professionell, ernst - geeignet für Dark-Mode-Designs und Premium-Marken.',
            },
            {
              icon: <RiRefreshLine className="h-6 w-6" />,
              title: 'Tonal (Material Design)',
              description: 'Abgestufte Helligkeit bei gleichem Farbton. Ähnelt dem Farbsystem von Google Material Design.',
            },
            {
              icon: <RiInfinityLine className="h-6 w-6" />,
              title: 'Minimalistisch (Apple)',
              description: 'Neutrale Basis mit einem farbigen Akzent. Sauber, modern - inspiriert vom Apple-Designstil.',
            },
          ]}
        />

        <Gap variant="line" />

        <SectionDemo
          title="Wie der HSL-Farbraum funktioniert"
          demo={
            <div className="space-y-3">
              <div className="rounded-lg border border-neutral-200 bg-white p-3">
                <p className="text-dark text-sm! font-medium">Beispiel: HSL(210, 80%, 50%)</p>
                <div className="mt-2 flex items-center gap-3">
                  <div className="h-10 w-10 rounded" style={{ backgroundColor: 'hsl(210, 80%, 50%)' }} />
                  <div className="text-mid text-sm!">
                    <p>H = 210° (Blauton)</p>
                    <p>S = 80% (kräftig)</p>
                    <p>L = 50% (mittlere Helligkeit)</p>
                  </div>
                </div>
              </div>
              <div className="rounded-lg border border-neutral-200 bg-white p-3">
                <p className="text-dark text-sm! font-medium">Gleicher Farbton, andere Helligkeit</p>
                <div className="mt-2 flex gap-1">
                  <div className="h-8 flex-1 rounded" style={{ backgroundColor: 'hsl(210, 80%, 90%)' }} />
                  <div className="h-8 flex-1 rounded" style={{ backgroundColor: 'hsl(210, 80%, 70%)' }} />
                  <div className="h-8 flex-1 rounded" style={{ backgroundColor: 'hsl(210, 80%, 50%)' }} />
                  <div className="h-8 flex-1 rounded" style={{ backgroundColor: 'hsl(210, 80%, 30%)' }} />
                  <div className="h-8 flex-1 rounded" style={{ backgroundColor: 'hsl(210, 80%, 10%)' }} />
                </div>
                <p className="text-light mt-1 text-xs!">L: 90% → 70% → 50% → 30% → 10%</p>
              </div>
            </div>
          }
        >
          <p className="text-mid">
            Alle Paletten in diesem Tool basieren auf dem HSL-Farbraum (Hue, Saturation, Lightness). Im Gegensatz zu HEX oder RGB beschreibt HSL Farben so, wie wir sie wahrnehmen:
          </p>
          <ul className="text-mid mt-3 list-disc space-y-2 pl-5">
            <li>
              <strong>Hue (H)</strong> - der Farbton auf dem Farbkreis (0°–360°). 0° = Rot, 120° = Grün, 240° = Blau.
            </li>
            <li>
              <strong>Saturation (S)</strong> - die Sättigung. 0% = Grau, 100% = volle Farbintensität.
            </li>
            <li>
              <strong>Lightness (L)</strong> - die Helligkeit. 0% = Schwarz, 50% = Normalfarbe, 100% = Weiß.
            </li>
          </ul>
          <p className="text-mid mt-3">
            Durch gezielte Änderung einzelner Werte lassen sich harmonische Paletten erzeugen. Monochromatische Paletten ändern nur L, analoge nur H, und komplementäre spiegeln H um 180°.
          </p>
        </SectionDemo>

        <Gap variant="line" />

        <SectionSteps
          title="Wo können Sie die Paletten einsetzen?"
          description="Die generierten Farbpaletten eignen sich für verschiedene Anwendungsbereiche:"
          grid="two"
          items={[
            {
              icon: <RiGlobalLine className="h-6 w-6" />,
              title: 'Webdesign',
              description: 'Konsistentes Farbschema für Ihre Website — Hintergrund, Text, Akzente und Schaltflächen.',
            },
            {
              icon: <RiShoppingBagLine className="h-6 w-6" />,
              title: 'Markenidentität',
              description: 'Aus einer Primärfarbe eine vollständige Markenpalette ableiten — für Print, Web und Social Media.',
            },
            {
              icon: <RiSmartphoneLine className="h-6 w-6" />,
              title: 'App-Design',
              description: 'Farbsystem für Ihre App erstellen — von der Navigation bis zu Benachrichtigungen.',
            },
            {
              icon: <RiPaintBrushLine className="h-6 w-6" />,
              title: 'Grafikdesign',
              description: 'Paletten als Ausgangspunkt für Poster, Flyer, Präsentationen und Infografiken nutzen.',
            },
          ]}
        />

        <Gap variant="line" />

        <SectionSteps
          title="Was macht diesen Paletten-Generator besonders?"
          grid="two"
          items={[
            {
              icon: <RiContrastLine className="h-6 w-6" />,
              title: '9 Palettentypen',
              description: 'Monochromatisch, analog, komplementär, triadisch, split-komplementär, Pastell, dunkel, tonal und minimalistisch.',
            },
            {
              icon: <RiMagicLine className="h-6 w-6" />,
              title: 'Basierend auf Farbtheorie',
              description: 'Alle Paletten folgen den Prinzipien der Farbtheorie - Farbkreis, HSL-Farbraum und bewährte Farbschemata.',
            },
            {
              icon: <RiUserLine className="h-6 w-6" />,
              title: 'Lokale Verarbeitung',
              description: 'Alle Berechnungen finden im Browser statt. Keine Daten werden an einen Server gesendet.',
            },
            {
              icon: <RiInfinityLine className="h-6 w-6" />,
              title: 'Ohne Limits',
              description: 'Beliebig viele Paletten generieren — ohne Registrierung und ohne Einschränkungen.',
            },
          ]}
        />

        <Gap variant="line" />

        <FaqPanels pageUrl={toAbsoluteUrl('/de/werkzeuge/farbpaletten-generator')} title="Häufig gestellte Fragen zum Farbpaletten-Generator" openByDefault={1} items={faqItems} />

        <Gap variant="line" />

        <ToolsCarousel title="Weitere Tools entdecken" />

        <Gap size="sm" />
      </Wrapper>
    </>
  );
}
