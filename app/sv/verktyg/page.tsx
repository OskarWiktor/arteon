import HeroBanner from '@/components/sections/HeroBanner';
import Button from '@/components/ui/buttons/Button';
import Gap from '@/components/ui/Gap';
import SectionInfo from '@/components/ui/sections/SectionInfo';
import SectionSteps from '@/components/ui/sections/SectionSteps';
import FaqPanels from '@/components/ui/FaqPanels';
import Wrapper from '@/components/ui/Wrapper';
import Script from 'next/script';
import {
  RiImageEditLine,
  RiCropLine,
  RiAppsLine,
  RiFileTextLine,
  RiArticleLine,
  RiMailLine,
  RiContrast2Line,
  RiPaletteLine,
  RiPantoneLine,
  RiQrCodeLine,
  RiShieldCheckLine,
  RiInfinityFill,
  RiGlobalLine,
  RiLockLine,
} from 'react-icons/ri';
import { toAbsoluteUrl, siteUrl } from '@/utils/absoluteUrl';
import { getToolsIndexAlternates } from '@/lib/i18n/pages/tool-meta';

export const metadata = {
  title: 'Gratis verktyg | Bilder, SEO, farger, favicon',
  description: '10 gratis verktyg: WebP-konverterare, favicon-generator, textraknare, fargextraktor och QR-kod. For webbplatser, sociala medier och tryck. Utan registrering.',
  alternates: getToolsIndexAlternates('sv'),
  openGraph: {
    title: 'Gratis verktyg | Bilder, SEO, farger, favicon',
    description: '10 gratis verktyg: WebP-konverterare, favicon-generator, textraknare, fargextraktor och QR-kod. For webbplatser, sociala medier och tryck. Utan registrering.',
    url: toAbsoluteUrl('/sv/verktyg'),
    type: 'website',
    images: [{ url: toAbsoluteUrl('/assets/arteon-logo-on-mockup.webp'), width: 1200, height: 630 }],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Gratis verktyg',
  description: '10 gratis verktyg for webbplatser, sociala medier och tryck.',
  url: toAbsoluteUrl('/sv/verktyg'),
  inLanguage: 'sv',
  isPartOf: { '@type': 'WebSite', name: 'Arteon Agency', url: siteUrl },
  about: [
    { '@type': 'Thing', name: 'Bildoptimering' },
    { '@type': 'Thing', name: 'SEO' },
    { '@type': 'Thing', name: 'Farger och varumarke' },
    { '@type': 'Thing', name: 'Generatorer' },
  ],
  mainEntity: {
    '@type': 'ItemList',
    numberOfItems: 10,
    itemListElement: [
      {
        '@type': 'WebApplication',
        position: 1,
        name: 'JPG/PNG till WebP-konverterare',
        url: toAbsoluteUrl('/sv/verktyg/jpg-till-webp-konverterare'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      { '@type': 'WebApplication', position: 2, name: 'Bildredigerare', url: toAbsoluteUrl('/sv/verktyg/bildredigerare'), applicationCategory: 'MultimediaApplication', operatingSystem: 'Any' },
      {
        '@type': 'WebApplication',
        position: 3,
        name: 'Favicon-generator',
        url: toAbsoluteUrl('/sv/verktyg/gratis-favicon-generator'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 4,
        name: 'Meta-titel och beskrivningskontroll',
        url: toAbsoluteUrl('/sv/verktyg/meta-titel-och-beskrivning-kontroll'),
        applicationCategory: 'DeveloperApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 5,
        name: 'E-postsignatur-generator',
        url: toAbsoluteUrl('/sv/verktyg/gratis-e-postsignatur-generator'),
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 6,
        name: 'Fargkontrastkontroll',
        url: toAbsoluteUrl('/sv/verktyg/fargkontrastkontroll'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 7,
        name: 'Fargextraktor fran bild',
        url: toAbsoluteUrl('/sv/verktyg/fargextraktor-fran-bild'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
      },
      { '@type': 'WebApplication', position: 8, name: 'Fargpalettgenerator', url: toAbsoluteUrl('/sv/verktyg/fargpalettgenerator'), applicationCategory: 'DesignApplication', operatingSystem: 'Any' },
      {
        '@type': 'WebApplication',
        position: 9,
        name: 'Ord- och teckenraknare',
        url: toAbsoluteUrl('/sv/verktyg/ord-och-teckenraknare'),
        applicationCategory: 'DeveloperApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 10,
        name: 'Gratis QR-kodgenerator',
        url: toAbsoluteUrl('/sv/verktyg/gratis-qr-kodgenerator'),
        applicationCategory: 'UtilityApplication',
        operatingSystem: 'Any',
      },
    ],
  },
};

const faqItems = [
  { question: 'Vad kostar verktygen?', answer: 'Ingenting. Alla verktyg ar gratis, utan prenumeration och utan dolda avgifter.' },
  { question: 'Skickas mina filer till en server?', answer: 'Nej. Alla verktyg kor helt i webblasaren. Filerna lamnar aldrig datorn och lagras inte nagontstans.' },
  { question: 'Behover jag ett konto?', answer: 'Nej. Du kan anvanda dem direkt utan att logga in eller skapa ett konto.' },
  { question: 'Finns det nagon anvandningsgrans?', answer: 'Nej. Anvand utan begransningar -- ingen daglig grans, ingen filgrans, ingen konverteringsgrans.' },
  {
    question: 'Vad ar verktygen till for?',
    answer:
      'De hjalper till att forbereda material for webbplatser, sociala medier och tryck: optimera bilder, skapa favicons, kontrollera textlangd, skapa QR-koder, valja farger och kontrollera deras lasbarhet.',
  },
  { question: 'Fungerar verktygen pa mobilen?', answer: 'Ja, men vissa verktyg (WebP-konverterare, favicon-generator) fungerar battre pa skrivbordet eftersom de bearbetar storre filer.' },
];

export default function ToolsIndexPage() {
  return (
    <>
      <HeroBanner
        title="Gratis verktyg"
        description="Bildkonverterare, favicon-generator, textraknare, fargverktyg och QR-kod. Utan registrering, utan begransningar -- allt kor i webblasaren."
        backgroundImage="/assets/arteon-logo-on-mockup.webp"
        overlay="black"
      />
      <Wrapper>
        <Gap size="sm" />
        <SectionSteps
          title="Bilder och favicon"
          description="Verktyg for att forbereda foton, grafik och ikoner for webbplatser och sociala medier."
          grid="three"
          items={[
            {
              icon: <RiImageEditLine className="h-8 w-8" />,
              title: 'JPG/PNG till WebP-konverterare',
              topImageAlt: 'JPG/PNG till WebP-konverterare Arteon',
              topImageSrc: '/assets/tools/jpg-png-to-webp-converter/jpg-png-till-webp-konverterare-sv.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    Konvertera JPG- eller PNG-bilder till <strong>WebP</strong>-format och minska filstorleken. Snabbare laddning for webbplatsen.
                  </p>
                  <div className="mt-4">
                    <Button arrow link="/sv/verktyg/jpg-till-webp-konverterare">
                      Oppna verktyget
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiCropLine className="h-8 w-8" />,
              title: 'Bildredigerare',
              topImageAlt: 'Bildredigerare Arteon',
              topImageSrc: '/assets/tools/free-image-editor-crop-resize-and-convert/bildredigerare-sv.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Beskara bilden perfekt for sociala medier eller webbplatsen. Valj ett fardigt format eller ange egna pixelstorlekar -- ladda ned som PNG, JPG eller WebP.</p>
                  <div className="mt-4">
                    <Button arrow link="/sv/verktyg/bildredigerare">
                      Oppna verktyget
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiAppsLine className="h-8 w-8" />,
              title: 'Favicon- och ikongenerator',
              topImageAlt: 'Favicon-generator Arteon',
              topImageSrc: '/assets/tools/favicon-generator/gratis-favicon-generator-sv.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    Skapa <strong>favicon.ico</strong> och PNG-ikoner 180x180, 192x192 och 512x512 fran en enda bild -- i enlighet med webblasarnas och Lighthouse krav.
                  </p>
                  <div className="mt-4">
                    <Button arrow link="/sv/verktyg/gratis-favicon-generator">
                      Oppna verktyget
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />
        <Gap size="sm" />
        <SectionSteps
          title="Text och SEO"
          description="Verktyg for att kontrollera textlangd, meta-taggar och forhandsgranskning av sidan i sokresultat."
          grid="three"
          items={[
            {
              icon: <RiFileTextLine className="h-8 w-8" />,
              title: 'Meta-titel och beskrivningskontroll',
              topImageAlt: 'Meta-titel och beskrivningskontroll Arteon',
              topImageSrc: '/assets/tools/free-meta-title-and-description-checker-pixel-width/meta-titel-och-beskrivning-kontroll-sv.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Kontrollera antal tecken, antal ord och pixelbredd -- med Google-forhandsgranskning. Undvik avkortade titlar och beskrivningar i sokresultaten.</p>
                  <div className="mt-4">
                    <Button arrow link="/sv/verktyg/meta-titel-och-beskrivning-kontroll">
                      Oppna verktyget
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiArticleLine className="h-8 w-8" />,
              title: 'Ord- och teckenraknare',
              topImageAlt: 'Ord- och teckenraknare Arteon',
              topImageSrc: '/assets/tools/word-and-character-counter-with-text-formatting-tools/ord-och-teckenraknare-sv.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Kontrollera textlangden och bedom om den passar for en startsida, tjanstesida, blogginlagg eller produktbeskrivning. Verktyget raknar ord, tecken, stycken och lastid.</p>
                  <div className="mt-4">
                    <Button arrow link="/sv/verktyg/ord-och-teckenraknare">
                      Oppna verktyget
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />
        <Gap size="sm" />
        <SectionSteps
          title="E-post och kommunikation"
          description="Verktyg for professionell e-postkommunikation och konsekvent varumarkesimage."
          grid="three"
          items={[
            {
              icon: <RiMailLine className="h-8 w-8" />,
              title: 'Gratis HTML e-postsignatur-generator',
              topImageAlt: 'Gratis e-postsignatur-generator Arteon',
              topImageSrc: '/assets/tools/free-html-email-signature-generator/gratis-e-postsignatur-generator-sv.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Skapa en professionell e-postsignatur pa nagra minuter. Ange dina uppgifter, valj farger och kopiera den fardiga HTML-koden till Gmail, Outlook eller annan e-postklient.</p>
                  <div className="mt-4">
                    <Button arrow link="/sv/verktyg/gratis-e-postsignatur-generator">
                      Oppna verktyget
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />
        <Gap size="sm" />
        <SectionSteps
          title="QR-kod"
          description="QR-kodgenerator for webbplatser, visitkort, menyer och trycksaker."
          grid="three"
          items={[
            {
              icon: <RiQrCodeLine className="h-8 w-8" />,
              title: 'Gratis QR-kodgenerator',
              topImageAlt: 'Gratis QR-kodgenerator Arteon',
              topImageSrc: '/assets/tools/qr-code-generator/gratis-qr-kodgenerator-sv.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Skapa en QR-kod for en webbplats, vCard, restaurangmeny eller flygblad. Exportera till PNG och SVG -- utan inloggning, utan begransningar.</p>
                  <div className="mt-4">
                    <Button arrow link="/sv/verktyg/gratis-qr-kodgenerator">
                      Oppna verktyget
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />
        <Gap size="sm" />
        <SectionSteps
          title="Farger och tillganglighet"
          description="Verktyg for att arbeta med farger, kontrast och WCAG-tillganglighet."
          grid="three"
          items={[
            {
              icon: <RiContrast2Line className="h-8 w-8" />,
              title: 'Fargkontrastkontroll',
              topImageAlt: 'Fargkontrastkontroll Arteon',
              topImageSrc: '/assets/tools/color-contrast-and-readability-checker/fargkontrastkontroll-sv.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    Kontrollera om text- och bakgrundsfargerna ar lasbara. Ange fargkoder, se kontrastforhallandet enligt <strong>WCAG</strong> och anvand <strong>Match</strong>-funktionen for
                    automatisk korrigering.
                  </p>
                  <div className="mt-4">
                    <Button arrow link="/sv/verktyg/fargkontrastkontroll">
                      Oppna verktyget
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiPantoneLine className="h-8 w-8" />,
              title: 'Fargextraktor fran bild',
              topImageAlt: 'Fargextraktor fran bild Arteon',
              topImageSrc: '/assets/tools/image-color-extractor/fargextraktor-fran-bild-sv.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Ladda upp ett foto eller logotyp -- verktyget extraherar de dominerande fargerna. Kopiera HEX-koder med ett klick och anvand dem var som helst.</p>
                  <div className="mt-4">
                    <Button arrow link="/sv/verktyg/fargextraktor-fran-bild">
                      Oppna verktyget
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiPaletteLine className="h-8 w-8" />,
              title: 'Fargpalettgenerator',
              topImageAlt: 'Fargpalettgenerator Arteon',
              topImageSrc: '/assets/tools/color-palette-generator/fargpalettgenerator-sv.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Valj en basfarg och skapa 9 fargpaletter: monokromatisk, komplementar, triadisk, pastell, mork och fler. Kopiera HEX-koder med ett klick.</p>
                  <div className="mt-4">
                    <Button arrow link="/sv/verktyg/fargpalettgenerator">
                      Oppna verktyget
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />
        <Gap variant="line" />
        <SectionInfo title="Vad ar Arteons verktyg?">
          <p className="mb-4">
            10 gratis verktyg for att forbereda material for webbplatser, sociala medier och tryck -- WebP-konverterare, favicon-generator, textraknare, fargextraktor, palettgenerator och QR-kod.
          </p>
          <p>Alla verktyg kor i webblasaren -- filer skickas aldrig till en server. Anvand utan registrering och utan begransningar.</p>
        </SectionInfo>
        <Gap variant="line" />
        <SectionSteps
          title="Varfor anvanda Arteons verktyg?"
          grid="two"
          items={[
            {
              icon: <RiShieldCheckLine className="h-6 w-6" />,
              title: 'Fullstandig integritet',
              description: 'Alla verktyg bearbetar filer lokalt i webblasaren. Ingenting skickas till en server -- data forsvinner nar du stanger fliken.',
            },
            {
              icon: <RiInfinityFill className="h-6 w-6" />,
              title: 'Utan anvandningsgrans',
              description: 'Anvand utan begransningar -- ingen daglig grans, ingen filgrans, ingen konverteringsgrans. Sa manga ganger du behover.',
            },
            { icon: <RiLockLine className="h-6 w-6" />, title: 'Utan registrering', description: 'Inget konto behovs. Oppna verktyget, anvand det, klart.' },
            { icon: <RiGlobalLine className="h-6 w-6" />, title: 'Tillgangligt pa svenska', description: 'Alla verktyg ar tillgangliga pa svenska -- granssnitt, instruktioner och meddelanden.' },
          ]}
        />
        <Gap variant="line" />
        <FaqPanels items={faqItems} title="Vanliga fragor om vara verktyg" />
        <Gap size="sm" />
      </Wrapper>
      <Script id="ld-json-tools-sv" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(schema)}
      </Script>
    </>
  );
}
