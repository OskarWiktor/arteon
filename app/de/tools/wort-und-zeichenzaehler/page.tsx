import Breadcrumbs from '@/components/sections/BreadCrumbs';
import HeroBanner from '@/components/sections/HeroBanner';
import WordCountTool from '@/components/sections/tools/WordCountTool';
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
import Script from 'next/script';
import AdSense from '@/components/ui/AdSense';
import {
  RiListCheck2,
  RiFileTextLine,
  RiBarChartLine,
  RiFileCopyLine,
  RiText,
  RiSpaceShipLine,
  RiParagraph,
  RiTimeLine,
  RiHashtag,
  RiEditLine,
  RiBloggerLine,
  RiShoppingBagLine,
  RiSearchLine,
  RiGraduationCapLine,
  RiTranslate2,
  RiInfinityLine,
  RiCheckboxCircleLine,
  RiUserLine,
  RiTimerLine,
} from 'react-icons/ri';

export const metadata: Metadata = {
  title: 'Kostenloser Wort- und Zeichenzähler online - Textlänge prüfen',
  description:
    'Kostenloser Online-Wort- und Zeichenzähler. Zählen Sie Wörter, Zeichen, Absätze und Lesezeit. Prüfen Sie die optimale Textlänge für SEO - Blogartikel, Produktbeschreibung, Dienstleistungsseite. Ohne Registrierung.',
  alternates: {
    canonical: toAbsoluteUrl('/de/tools/wort-und-zeichenzaehler'),
    languages: { pl: toAbsoluteUrl('/narzedzia/licznik-slow-i-znakow'), en: toAbsoluteUrl('/en/tools/word-and-character-counter'), de: toAbsoluteUrl('/de/tools/wort-und-zeichenzaehler') },
  },
  openGraph: {
    title: 'Kostenloser Wort- und Zeichenzähler online - Textlänge prüfen',
    description: 'Kostenloser Online-Wort- und Zeichenzähler. Zählen Sie Wörter, Zeichen, Absätze und Lesezeit. Prüfen Sie die optimale Textlänge für SEO. Ohne Registrierung.',
    url: toAbsoluteUrl('/de/tools/wort-und-zeichenzaehler'),
    type: 'website',
    images: [{ url: toAbsoluteUrl('/assets/tools/narzedzia-licznik-slow-i-znakow.webp'), width: 1200, height: 630 }],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Kostenloser Wort- und Zeichenzähler online',
  alternateName: [
    'Wortzähler mit Textlängen-Bewertung',
    'Online-Zeichenzähler',
    'Wortzähler für Texter',
    'Lesezeit-Rechner',
    'Online-Wortzähler',
    'Prüfen, wie viele Wörter ein Text hat',
    'Wortzähler für SEO',
    'Optimale Textlänge für Blogartikel prüfen',
  ],
  url: toAbsoluteUrl('/de/tools/wort-und-zeichenzaehler'),
  applicationCategory: 'UtilitiesApplication',
  applicationSubCategory: 'TextApplication',
  operatingSystem: 'Any',
  description:
    'Kostenloser Wort- und Zeichenzähler. Prüft Wortanzahl, Zeichen, Absätze und geschätzte Lesezeit. Bewertet die Textlänge für verschiedene Seitentypen: Produktbeschreibung, Dienstleistungsseite, Startseite, Landingpage, Blogartikel, Ratgeber.',
  inLanguage: 'de',
  isAccessibleForFree: true,
  featureList: [
    'Wortanzahl',
    'Zeichenanzahl mit und ohne Leerzeichen',
    'Absatzanzahl',
    'Geschätzte Lesezeit',
    'Textlängen-Bewertung für verschiedene Seitentypen',
    'Empfohlene Bereiche für: Produktbeschreibung, Dienstleistungsseite, Startseite, Landingpage, Blogartikel, Ratgeber',
    'Bericht in die Zwischenablage kopieren',
  ],
  offers: { '@type': 'Offer', price: 0, priceCurrency: 'EUR' },
  publisher: { '@type': 'Organization', name: 'Arteon Agency', url: siteUrl },
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'So verwenden Sie den Wort- und Zeichenzähler',
  description:
    'Prüfen Sie die Länge Ihres Textes und bewerten Sie, ob sie für einen bestimmten Seitentyp angemessen ist. Erfahren Sie, wie viele Wörter eine Produktbeschreibung, Dienstleistungsseite, ein Blogartikel oder Ratgeber haben sollte.',
  url: toAbsoluteUrl('/de/tools/wort-und-zeichenzaehler'),
  totalTime: 'PT2M',
  step: [
    {
      '@type': 'HowToStep',
      name: 'Seitentyp wählen',
      text: 'Wählen Sie im Dropdown-Menü, für welchen Seitentyp Sie schreiben. Jeder Typ hat unterschiedliche empfohlene Wortanzahlen.',
    },
    {
      '@type': 'HowToStep',
      name: 'Text einfügen',
      text: 'Fügen Sie Text in das Textfeld ein oder tippen Sie ihn ein. Das Tool zählt automatisch Wörter, Zeichen (mit und ohne Leerzeichen), Absätze und schätzt die Lesezeit.',
    },
    {
      '@type': 'HowToStep',
      name: 'Bewertung prüfen',
      text: 'Schauen Sie auf den farbigen Fortschrittsbalken und Status. Grün bedeutet gute Länge, Gelb bedeutet zu kurz, Rot bedeutet zu lang.',
    },
    {
      '@type': 'HowToStep',
      name: 'Bericht kopieren',
      text: 'Die Schaltfläche „Bericht kopieren" kopiert eine Zusammenfassung mit allen Statistiken und der Längenbewertung in die Zwischenablage.',
    },
  ],
  publisher: { '@type': 'Organization', name: 'Arteon Agency', url: siteUrl },
};

const faqItems = [
  {
    question: 'Beeinflusst die Textlänge das Google-Ranking?',
    answer:
      'Die Textlänge allein ist kein Ranking-Faktor. Google bewertet, ob der Inhalt die Frage des Nutzers beantwortet und für ihn wertvoll ist. Kürzerer Text, der eine Frage umfassend beantwortet, kann gut ranken - entscheidend ist der Wert für den Leser. Die Bereiche in diesem Tool basieren auf Analysen von Inhalten, die in den Suchergebnissen gut abschneiden.',
    answerSchemaText: 'Die Textlänge ist kein direkter Ranking-Faktor. Google bewertet den Wert des Inhalts für den Nutzer.',
  },
  {
    question: 'Warum sind die Wortbereiche so breit?',
    answer:
      'Derselbe Seitentyp kann je nach Themenkomplexität unterschiedliche Längen erfordern. Eine einfache Produktbeschreibung (z.\u00a0B. eine Tasse) umfasst 80–150 Wörter - nur Material, Fassungsvermögen und Einsatzzweck. Eine Laptop-Beschreibung benötigt 300–400 Wörter, weil Käufer nach Prozessor, Speicher, Bildschirm und Akku fragen. Ähnlich bei Dienstleistungen: Eine lokale Klempner-Seite umfasst 500–700 Wörter, während eine umfassende B2B-Seite mit Prozessschritten und FAQ 1.200–1.500 Wörter erreicht.',
    answerSchemaText: 'Der Unterschied ergibt sich aus der Themenkomplexität - ein einfaches Produkt braucht weniger Wörter als ein komplexes.',
  },
  {
    question: 'Wie interpretiere ich „zu kurz" oder „zu lang"?',
    answer:
      'Die Bewertung zeigt, wo Ihr Text im Vergleich zu typischen Inhalten dieses Typs liegt. Wenn der Text als „zu kurz" markiert ist, aber alle Fragen des Lesers beantwortet - ist die Länge in Ordnung. Wenn er als „zu lang" markiert ist, aber jeder Absatz neue Informationen liefert - ist die Länge gerechtfertigt.',
    answerSchemaText: 'Die Bewertung zeigt, wo der Text im Vergleich zu typischen Inhalten liegt. Wenn der Text die Fragen des Lesers beantwortet, ist die Länge angemessen.',
  },
  {
    question: 'Wie funktioniert der Lesezeit-Rechner?',
    answer:
      'Das Tool teilt die Wortanzahl durch 200 - die durchschnittliche Lesegeschwindigkeit für typischen Text. Technischer oder anspruchsvoller Text (z.\u00a0B. Dokumentation, AGB) wird langsamer gelesen. Ein leichter Lifestyle-Artikel - schneller. Das Ergebnis ist ein Näherungswert, der einschätzen hilft, wie lange ein Leser mit dem Text verbringt.',
    answerSchemaText: 'Das Tool rechnet mit einer Lesegeschwindigkeit von 200 Wörtern pro Minute. Es handelt sich um einen Näherungswert für typischen Text.',
  },
  {
    question: 'Woher stammen die empfohlenen Bereiche?',
    answer:
      'Die Bereiche basieren auf Analysen von Inhalten, die in Suchmaschinen gut ranken, sowie auf Best Practices der Content-Erstellung. Sie sind bewusst breit, weil derselbe Seitentyp je nach Branche, Themenkomplexität und Leserbedürfnissen unterschiedliche Längen erfordern kann. Die Bereiche dienen als Ausgangspunkt für die Bewertung, ob der Text im typischen Rahmen für einen bestimmten Seitentyp liegt.',
    answerSchemaText: 'Die Bereiche basieren auf SEO-Analysen und Best Practices der Content-Erstellung.',
  },
  {
    question: 'Kann ich den Bericht mit Statistiken kopieren?',
    answer:
      'Ja. Unterhalb der Statistiken finden Sie eine Schaltfläche „Bericht kopieren" - sie kopiert eine Zusammenfassung mit Wortanzahl, Zeichenanzahl, Absätzen, Lesezeit und Längenbewertung in die Zwischenablage. Sie können die Zusammenfassung in ein Dokument einfügen oder an Kollegen senden.',
    answerSchemaText: 'Ja. Klicken Sie auf „Bericht kopieren" unterhalb der Statistiken. Eine Zusammenfassung mit allen Kennzahlen und der Bewertung wird in die Zwischenablage kopiert.',
  },
];

export default function WordCounterPage() {
  return (
    <>
      <Script id="ld-json-word-count-tool-de" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Script id="ld-json-word-count-howto-de" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />

      <HeroBanner
        title="Wort- und Zeichenzähler mit Längenbewertung"
        description="Text einfügen, Seitentyp wählen - und das Tool zeigt Ihnen Wortanzahl, Zeichenanzahl und Absätze. Außerdem bewertet es, ob die Länge für den gewählten Inhaltstyp passt."
        overlay="black"
        backgroundImage="/assets/tools/narzedzia-licznik-slow-i-znakow.webp"
      />

      <Breadcrumbs second={{ href: '/de/tools', label: 'Tools' }} third={{ href: '/de/tools/wort-und-zeichenzaehler', label: 'Wort- und Zeichenzähler' }} includeJsonLd locale="de" />

      <ToolEditorLayout>
        <AdSense variant="tool-banner" className="my-3" />
        <WordCountTool />
      </ToolEditorLayout>

      <Wrapper>
        <Gap variant="line" />

        <SectionInfo title="Kostenloser Wortzähler online - Textlänge zählen und bewerten">
          <p className="text-mid">
            Mit diesem Wortzähler prüfen Sie schnell die Länge eines beliebigen Textes. Fügen Sie Ihren Inhalt ein, und der Zähler ermittelt sofort Wörter, Zeichen und Absätze. Zusätzlich sehen Sie
            die geschätzte Lesezeit und ob die Länge zum gewählten Seitentyp passt.
          </p>
          <p className="text-mid mt-3">
            Jeder Seitentyp hat einen anderen Zweck - eine Produktbeschreibung beantwortet Käuferfragen, ein Blogartikel behandelt ein Thema ausführlich, und eine Dienstleistungsseite erklärt, was der
            Kunde erhält. Der Zähler zeigt Bereiche für jeden dieser Typen, basierend auf Analysen von Inhalten, die gut ranken.
          </p>
        </SectionInfo>

        <Gap size="sm" />

        <SectionSteps
          title="So verwenden Sie den Wort- und Zeichenzähler"
          description="Die Überprüfung der Textlänge dauert weniger als eine Minute:"
          grid="four"
          items={[
            {
              icon: <RiListCheck2 className="h-6 w-6" />,
              title: '1. Seitentyp wählen',
              description: 'Wählen Sie im Dropdown-Menü, für welchen Seitentyp Sie schreiben. Jeder Typ hat unterschiedliche empfohlene Wortanzahlen.',
            },
            {
              icon: <RiFileTextLine className="h-6 w-6" />,
              title: '2. Text einfügen',
              description: 'Fügen Sie Text in das große Feld ein oder tippen Sie ihn ein. Das Tool zählt sofort Wörter, Zeichen (mit und ohne Leerzeichen), Absätze und schätzt die Lesezeit.',
            },
            {
              icon: <RiBarChartLine className="h-6 w-6" />,
              title: '3. Bewertung prüfen',
              description: 'Schauen Sie auf den farbigen Fortschrittsbalken und den Status. Grün bedeutet gute Länge, Gelb - zu kurz, Rot - zu lang.',
            },
            {
              icon: <RiFileCopyLine className="h-6 w-6" />,
              title: '4. Bericht kopieren',
              description: 'Die Schaltfläche kopiert eine Zusammenfassung mit Wortanzahl, Zeichenanzahl, Absätzen, Lesezeit und Längenbewertung in die Zwischenablage.',
            },
          ]}
        />

        <Gap variant="line" />

        <SectionSteps
          title="Was der Zähler misst - Wörter, Zeichen, Lesezeit"
          description="Der Zähler erfasst fünf wichtige Kennzahlen:"
          grid="two"
          items={[
            { icon: <RiText className="h-6 w-6" />, title: 'Wörter', description: 'Gesamtanzahl der Wörter - die wichtigste Kennzahl für die Textlänge.' },
            { icon: <RiSpaceShipLine className="h-6 w-6" />, title: 'Zeichen (mit Leerzeichen)', description: 'Alle Zeichen einschließlich Leerzeichen. Nützlich bei CMS-Zeichenlimits.' },
            {
              icon: <RiHashtag className="h-6 w-6" />,
              title: 'Zeichen (ohne Leerzeichen)',
              description: 'Nur Buchstaben, Ziffern und Satzzeichen. Wird oft für Druckereien oder Übersetzungsabrechnungen benötigt.',
            },
            { icon: <RiParagraph className="h-6 w-6" />, title: 'Absätze', description: 'Anzahl der durch Leerzeilen getrennten Textblöcke. Hilft bei der Bewertung der Textstruktur.' },
            {
              icon: <RiTimeLine className="h-6 w-6" />,
              title: 'Lesezeit',
              description: 'Der Lesezeit-Rechner zeigt, wie viele Minuten das Lesen bei einer Durchschnittsgeschwindigkeit von 200 Wörtern pro Minute dauert.',
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
                  Gute Länge
                </Badge>
                <span className="text-mid text-sm!">Text liegt im Bereich</span>
              </div>
              <div className="flex items-center gap-3 rounded-lg border border-neutral-200 bg-white p-3">
                <Badge variant="warning" size="sm">
                  Unter dem Bereich
                </Badge>
                <span className="text-mid text-sm!">Text ist kürzer als üblich</span>
              </div>
              <div className="flex items-center gap-3 rounded-lg border border-neutral-200 bg-white p-3">
                <Badge variant="error" size="sm">
                  Über dem Bereich
                </Badge>
                <span className="text-mid text-sm!">Text ist länger als üblich</span>
              </div>
              <div className="mt-2 rounded-lg bg-neutral-100 p-3">
                <div className="mb-1 flex items-center justify-between text-sm!">
                  <span className="text-dark font-medium">Fortschritt</span>
                  <span className="text-mid">1200 / 1200-3000</span>
                </div>
                <div className="h-2 w-full rounded-full bg-neutral-200">
                  <div className="bg-success-icon h-2 w-2/5 rounded-full" />
                </div>
              </div>
            </div>
          }
        >
          <p className="text-mid mb-4">Der farbige Fortschrittsbalken und Status helfen Ihnen, die Textlänge schnell einzuschätzen:</p>
          <ul className="text-mid list-disc space-y-2 pl-5">
            <li>
              <strong className="text-success-text">Gute Länge</strong> (grün) - der Text liegt im ungefähren Bereich für den gewählten Seitentyp.
            </li>
            <li>
              <strong className="text-warning-text">Unter dem Bereich</strong> (gelb) - der Text ist kürzer als üblich für diesen Seitentyp. Wenn er alle Fragen des Lesers beantwortet, kann die Länge
              trotzdem ausreichend sein.
            </li>
            <li>
              <strong className="text-error-text">Über dem Bereich</strong> (rot) - der Text ist länger als üblich. Wenn jeder Absatz neue Informationen liefert, ist die Länge gerechtfertigt.
            </li>
          </ul>
          <p className="text-mid mt-4">
            Die Bereiche basieren auf Analysen von Inhalten, die in Suchmaschinen gut ranken. Wenn der Text die Fragen des Lesers beantwortet, ist die Länge unabhängig vom Zählerergebnis angemessen.
          </p>
        </SectionDemo>

        <Gap variant="line" />

        <SectionInfo title="Wie viele Wörter sollte ein Text haben - optimale Länge für SEO">
          <p className="text-mid mb-4">
            Die folgenden Bereiche basieren auf Analysen von Inhalten, die in Suchmaschinen gut ranken. Die Textlänge an sich beeinflusst das Google-Ranking nicht - entscheidend ist, ob der Inhalt die
            Fragen des Lesers beantwortet.
          </p>
          <div className="overflow-x-auto">
            <table className="text-mid w-full text-left">
              <thead>
                <tr className="border-b border-neutral-200">
                  <th className="py-2 pr-4 font-semibold">Seitentyp</th>
                  <th className="py-2 pr-4 font-semibold">Bereich</th>
                  <th className="py-2 font-semibold">Wann kürzer, wann länger?</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-neutral-100">
                  <td className="py-2 pr-4">Produktbeschreibung</td>
                  <td className="py-2 pr-4 whitespace-nowrap">80–400 Wörter</td>
                  <td className="text-primary-light0 py-2 text-sm">
                    Einfaches Produkt (z.&nbsp;B. eine Tasse) - 80–150 Wörter. Komplexes Gerät (z.&nbsp;B. ein Laptop) - 300–400 Wörter, weil Käufer mehr Fragen haben.
                  </td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="py-2 pr-4">Dienstleistungsseite</td>
                  <td className="py-2 pr-4 whitespace-nowrap">500–1500 Wörter</td>
                  <td className="text-primary-light0 py-2 text-sm">Lokale Dienstleistung (z.&nbsp;B. Klempner) - 500–700 Wörter. B2B-Dienstleistung mit Prozess und FAQ - 1.200–1.500 Wörter.</td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="py-2 pr-4">Startseite</td>
                  <td className="py-2 pr-4 whitespace-nowrap">400–1000 Wörter</td>
                  <td className="text-primary-light0 py-2 text-sm">
                    Die Startseite vermittelt den Hauptnutzen und leitet Besucher weiter - der Text unterstützt die Navigation, er ersetzt keine Unterseiten.
                  </td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="py-2 pr-4">Landingpage</td>
                  <td className="py-2 pr-4 whitespace-nowrap">600–2500 Wörter</td>
                  <td className="text-primary-light0 py-2 text-sm">Einfaches Angebot - 600–1.000 Wörter. Angebot mit Prozessbeschreibung, Varianten und häufigen Fragen - 1.500–2.500 Wörter.</td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="py-2 pr-4">Blogartikel</td>
                  <td className="py-2 pr-4 whitespace-nowrap">1200–3000 Wörter</td>
                  <td className="text-primary-light0 py-2 text-sm">Antwort auf eine einfache Frage - 1.200–1.800 Wörter. Komplexes Thema mit vielen Aspekten - 2.000–3.000 Wörter.</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">Ratgeber</td>
                  <td className="py-2 pr-4 whitespace-nowrap">2500–6000 Wörter</td>
                  <td className="text-primary-light0 py-2 text-sm">Enges Thema - 2.500–3.500 Wörter. Breites Thema mit vielen Schritten und Beispielen - 4.000–6.000 Wörter.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </SectionInfo>

        <Gap variant="line" />

        <SectionSteps
          title="Für wen ist der Online-Wortzähler?"
          description="Ein Wortzähler für Texter und darüber hinaus - hier sind die häufigsten Nutzer:"
          grid="three"
          items={[
            {
              icon: <RiEditLine className="h-6 w-6" />,
              title: 'Texter und Content-Ersteller',
              description: 'Prüfen Sie, ob der Text im empfohlenen Bereich für einen bestimmten Seitentyp liegt. Der SEO-Wortzähler hilft zu bewerten, ob ein Artikel ausreichend ausgearbeitet ist.',
            },
            {
              icon: <RiBloggerLine className="h-6 w-6" />,
              title: 'Blogger',
              description: 'Beitragslänge im Blick behalten, um Veröffentlichungen konsistent zu halten. Lesezeit vor dem Publizieren prüfen.',
            },
            {
              icon: <RiShoppingBagLine className="h-6 w-6" />,
              title: 'E-Commerce-Betreiber',
              description: 'Produktbeschreibungen auf die Zeichenlimits von Verkaufsplattformen wie Amazon, eBay oder Etsy prüfen.',
            },
            {
              icon: <RiSearchLine className="h-6 w-6" />,
              title: 'SEO-Spezialisten',
              description: 'Seiteninhalte mit der Konkurrenz vergleichen und prüfen, ob die Länge im optimalen Bereich liegt.',
            },
            {
              icon: <RiGraduationCapLine className="h-6 w-6" />,
              title: 'Studenten und Akademiker',
              description: 'Prüfen, ob eine Arbeit das geforderte Wort- oder Zeichenlimit erfüllt.',
            },
            {
              icon: <RiTranslate2 className="h-6 w-6" />,
              title: 'Übersetzer',
              description: 'Zeichen ohne Leerzeichen zählen - die gängige Abrechnungsgrundlage bei Übersetzungen.',
            },
          ]}
        />

        <Gap variant="line" />

        <SectionInfo title="Zeichenlimits auf beliebten Plattformen">
          <p className="text-mid mb-4">Der Zeichenzähler ist nützlich, wenn Sie Inhalte für Plattformen mit Längenbeschränkungen erstellen:</p>
          <div className="overflow-x-auto">
            <table className="text-mid w-full text-left">
              <thead>
                <tr className="border-b border-neutral-200">
                  <th className="py-2 pr-4 font-semibold">Plattform / Element</th>
                  <th className="py-2 pr-4 font-semibold">Zeichenlimit</th>
                  <th className="py-2 font-semibold">Hinweise</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-neutral-100">
                  <td className="py-2 pr-4">Google - Meta-Titel</td>
                  <td className="py-2 pr-4 whitespace-nowrap">50–60 Zeichen</td>
                  <td className="text-primary-light0 py-2 text-sm">Längere Titel werden in den Suchergebnissen abgeschnitten.</td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="py-2 pr-4">Google - Meta-Description</td>
                  <td className="py-2 pr-4 whitespace-nowrap">150–160 Zeichen</td>
                  <td className="text-primary-light0 py-2 text-sm">Die Beschreibung unter dem Link in den Suchergebnissen.</td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="py-2 pr-4">Amazon - Produkttitel</td>
                  <td className="py-2 pr-4 whitespace-nowrap">200 Zeichen</td>
                  <td className="text-primary-light0 py-2 text-sm">Kurzer, spezifischer Titel mit den wichtigsten Keywords.</td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="py-2 pr-4">Amazon - Aufzählungspunkte</td>
                  <td className="py-2 pr-4 whitespace-nowrap">je 500 Zeichen</td>
                  <td className="text-primary-light0 py-2 text-sm">Bis zu 5 Aufzählungspunkte, die die wichtigsten Produktmerkmale beschreiben.</td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="py-2 pr-4">X (Twitter) - Beitrag</td>
                  <td className="py-2 pr-4 whitespace-nowrap">280 Zeichen</td>
                  <td className="text-primary-light0 py-2 text-sm">Standardlimit für reguläre Nutzer.</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">LinkedIn - Beitrag</td>
                  <td className="py-2 pr-4 whitespace-nowrap">3.000 Zeichen</td>
                  <td className="text-primary-light0 py-2 text-sm">Nach ca. 210 Zeichen erscheint ein „Mehr anzeigen"-Link.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </SectionInfo>

        <Gap variant="line" />

        <SectionSteps
          title="Was macht diesen Wort- und Zeichenzähler besonders?"
          grid="two"
          items={[
            {
              icon: <RiInfinityLine className="h-6 w-6" />,
              title: 'Sechs Seitentypen mit empfohlenen Bereichen',
              description: 'Produktbeschreibung, Dienstleistungsseite, Startseite, Landingpage, Blogartikel und Ratgeber - jeder Typ hat eigene Bereiche.',
            },
            {
              icon: <RiUserLine className="h-6 w-6" />,
              title: 'Lokale Verarbeitung im Browser',
              description: 'Ihr Text wird nie an einen Server gesendet - alle Analysen finden lokal auf Ihrem Gerät statt.',
            },
            {
              icon: <RiCheckboxCircleLine className="h-6 w-6" />,
              title: 'Textlängen-Bewertung',
              description: 'Nicht nur Wörter zählen - sondern auch erfahren, ob die Länge für den gewählten Seitentyp passt.',
            },
            { icon: <RiBarChartLine className="h-6 w-6" />, title: 'SEO-basierte Bereiche', description: 'Empfohlene Längen basieren auf Analysen von Inhalten, die in Suchmaschinen gut ranken.' },
            { icon: <RiTimerLine className="h-6 w-6" />, title: 'Lesezeit', description: 'Zeigt sofort, wie lange das Lesen des Textes ungefähr dauert.' },
            {
              icon: <RiFileCopyLine className="h-6 w-6" />,
              title: 'Bericht kopieren',
              description: 'Die Schaltfläche kopiert eine Zusammenfassung mit allen Statistiken und der Längenbewertung in die Zwischenablage.',
            },
          ]}
        />

        <Gap variant="line" />

        <FaqPanels title="Häufig gestellte Fragen zum Wort- und Zeichenzähler" openByDefault={1} items={faqItems} pageUrl={toAbsoluteUrl('/de/tools/wort-und-zeichenzaehler')} />

        <Gap variant="line" />

        <ToolsCarousel title="Weitere Tools entdecken" />

        <Gap size="sm" />
      </Wrapper>
    </>
  );
}
