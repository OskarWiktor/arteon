import HeroBanner from '@/components/sections/HeroBanner';
import Button from '@/components/ui/buttons/Button';
import Gap from '@/components/ui/Gap';
import SectionInfo from '@/components/ui/sections/SectionInfo';
import SectionSteps from '@/components/ui/sections/SectionSteps';
import FaqPanels from '@/components/ui/FaqPanels';
import Wrapper from '@/components/ui/Wrapper';
import Script from 'next/script';
import {
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
  RiLoopLeftLine,
} from 'react-icons/ri';
import { toAbsoluteUrl, siteUrl } from '@/utils/absoluteUrl';
import { getToolsIndexAlternates } from '@/lib/i18n/pages/tool-meta';

export const metadata = {
  title: 'Gratis onlineverktyg | Konverterare, SEO, färger, favicon',
  description:
    'Gratis onlineverktyg: 24 bildkonverterare (JPG, PNG, WebP, SVG, BMP,, GIF, AVIF, HEIC, TIFF), favicon-generator, bildredigerare, texträknare, färgpaletter och QR-koder. Utan registrering.',
  alternates: getToolsIndexAlternates('sv'),
  openGraph: {
    title: 'Gratis onlineverktyg | Konverterare, SEO, färger, favicon',
    description:
      'Gratis onlineverktyg: 24 bildkonverterare (JPG, PNG, WebP, SVG, BMP,, GIF, AVIF, HEIC, TIFF), favicon-generator, bildredigerare, texträknare, färgpaletter och QR-koder. Utan registrering.',
    url: toAbsoluteUrl('/sv/verktyg'),
    type: 'website',
    images: [{ url: toAbsoluteUrl('/assets/arteon-logo-on-mockup.webp'), width: 1200, height: 630 }],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Gratis onlineverktyg — bildkonverterare, SEO, färger, favicon',
  description:
    'Gratis onlineverktyg: 24 bildkonverterare (JPG, PNG, WebP, SVG, BMP,, GIF, AVIF, HEIC, TIFF), favicon-generator, bildredigerare, texträknare, färgpaletter och QR-koder. Utan registrering.',
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
      {
        '@type': 'WebApplication',
        position: 11,
        name: 'JPG till WebP-konverterare',
        description: 'Konvertera JPG-foton till lättvikts-WebP. Spara upp till 35% filstorlek.',
        url: toAbsoluteUrl('/sv/verktyg/jpg-till-webp-konverterare'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 12,
        name: 'PNG till JPG-konverterare',
        description: 'Konvertera PNG-filer till JPG i webbläsaren. Utan begränsning, utan registrering.',
        url: toAbsoluteUrl('/sv/verktyg/png-till-jpg-konverterare'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 13,
        name: 'WebP till JPG-konverterare',
        description: 'Konvertera WebP-filer till universellt kompatibelt JPG.',
        url: toAbsoluteUrl('/sv/verktyg/webp-till-jpg-konverterare'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 14,
        name: 'PNG till WebP-konverterare',
        description: 'Konvertera PNG-bilder till WebP. Mindre filer med bibehållen transparens.',
        url: toAbsoluteUrl('/sv/verktyg/png-till-webp-konverterare'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 15,
        name: 'JPG till PNG-konverterare',
        description: 'Konvertera JPG-bilder till förlustfritt PNG. Lokal konvertering i webbläsaren.',
        url: toAbsoluteUrl('/sv/verktyg/jpg-till-png-konverterare'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 16,
        name: 'WebP till PNG-konverterare',
        description: 'Konvertera WebP-bilder till förlustfritt PNG. Lokal konvertering.',
        url: toAbsoluteUrl('/sv/verktyg/webp-till-png-konverterare'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 17,
        name: 'SVG till PNG-konverterare',
        description: 'Konvertera SVG-vektorgrafik till PNG. Perfekt för dokument och sociala medier.',
        url: toAbsoluteUrl('/sv/verktyg/svg-till-png-konverterare'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 18,
        name: 'SVG till JPG-konverterare',
        description: 'Konvertera SVG-filer till kompakt JPG. Mindre fil, full kompatibilitet.',
        url: toAbsoluteUrl('/sv/verktyg/svg-till-jpg-konverterare'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 19,
        name: 'BMP till JPG-konverterare',
        description: 'Konvertera BMP-filer till lättvikts-JPG. Drastisk storleksminskning.',
        url: toAbsoluteUrl('/sv/verktyg/bmp-till-jpg-konverterare'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 20,
        name: 'BMP till PNG-konverterare',
        description: 'Konvertera BMP-bilder till förlustfritt PNG. Kvalitet bevarad, storlek reducerad.',
        url: toAbsoluteUrl('/sv/verktyg/bmp-till-png-konverterare'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 21,
        name: 'GIF till PNG-konverterare',
        description: 'Exportera den första bildrutan i en GIF som statisk PNG. Utan kvalitetsförlust.',
        url: toAbsoluteUrl('/sv/verktyg/gif-till-png-konverterare'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 22,
        name: 'GIF till JPG-konverterare',
        description: 'Exportera den första bildrutan i en GIF som kompakt JPG. Mindre fil.',
        url: toAbsoluteUrl('/sv/verktyg/gif-till-jpg-konverterare'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 23,
        name: 'SVG till WebP-konverterare',
        description: 'Konvertera SVG-grafik till lattvikts-WebP. Idealiskt for webbplatser.',
        url: toAbsoluteUrl('/sv/verktyg/svg-till-webp-konverterare'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 24,
        name: 'GIF till WebP-konverterare',
        description: 'Exportera forsta GIF-bildrutan som lattvikts-WebP. Mindre fil.',
        url: toAbsoluteUrl('/sv/verktyg/gif-till-webp-konverterare'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 25,
        name: 'BMP till WebP-konverterare',
        description: 'Konvertera BMP-filer till lattvikts-WebP. Upp till 95% mindre.',
        url: toAbsoluteUrl('/sv/verktyg/bmp-till-webp-konverterare'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 26,
        name: 'AVIF till JPG-konverterare',
        description: 'Konvertera AVIF-filer till universell JPG. Kompatibel overallt.',
        url: toAbsoluteUrl('/sv/verktyg/avif-till-jpg-konverterare'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 27,
        name: 'AVIF till PNG-konverterare',
        description: 'Konvertera AVIF-filer till forlustfri PNG. Full kvalitet.',
        url: toAbsoluteUrl('/sv/verktyg/avif-till-png-konverterare'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 28,
        name: 'AVIF till WebP-konverterare',
        description: 'Konvertera AVIF-filer till WebP. Bred kompatibilitet.',
        url: toAbsoluteUrl('/sv/verktyg/avif-till-webp-konverterare'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 29,
        name: 'HEIC till JPG-konverterare',
        description: 'Konvertera iPhone HEIC-foton till universell JPG. Ingen registrering.',
        url: toAbsoluteUrl('/sv/verktyg/heic-till-jpg-konverterare'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 30,
        name: 'HEIC till PNG-konverterare',
        description: 'Konvertera iPhone HEIC-foton till forlustfri PNG.',
        url: toAbsoluteUrl('/sv/verktyg/heic-till-png-konverterare'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 31,
        name: 'HEIC till WebP-konverterare',
        description: 'Konvertera iPhone HEIC-foton till lattvikts-WebP.',
        url: toAbsoluteUrl('/sv/verktyg/heic-till-webp-konverterare'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 32,
        name: 'TIFF till JPG-konverterare',
        description: 'Konvertera TIFF-filer till kompakt JPG. Idealiskt for skanningar.',
        url: toAbsoluteUrl('/sv/verktyg/tiff-till-jpg-konverterare'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 33,
        name: 'TIFF till PNG-konverterare',
        description: 'Konvertera TIFF-filer till forlustfri PNG.',
        url: toAbsoluteUrl('/sv/verktyg/tiff-till-png-konverterare'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 34,
        name: 'TIFF till WebP-konverterare',
        description: 'Konvertera TIFF-filer till lattvikts-WebP. Massiv minskning.',
        url: toAbsoluteUrl('/sv/verktyg/tiff-till-webp-konverterare'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 35,
        name: 'JPG till AVIF-konverterare',
        description: 'Konvertera JPG-foton till modernt AVIF. Upp till 50% battre komprimering an JPG.',
        url: toAbsoluteUrl('/sv/verktyg/jpg-till-avif-konverterare'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 36,
        name: 'PNG till AVIF-konverterare',
        description: 'Konvertera PNG-grafik till AVIF med transparensstod. Betydligt mindre filer.',
        url: toAbsoluteUrl('/sv/verktyg/png-till-avif-konverterare'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 37,
        name: 'WebP till AVIF-konverterare',
        description: 'Konvertera WebP-filer till AVIF. Annu battre komprimering i ett modernt format.',
        url: toAbsoluteUrl('/sv/verktyg/webp-till-avif-konverterare'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 38,
        name: 'SVG till AVIF-konverterare',
        description: 'Konvertera vektor-SVG-grafik till kompakt AVIF-rasterformat.',
        url: toAbsoluteUrl('/sv/verktyg/svg-till-avif-konverterare'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 39,
        name: 'BMP till AVIF-konverterare',
        description: 'Konvertera okomprimerade BMP-filer till ultrakompakt AVIF.',
        url: toAbsoluteUrl('/sv/verktyg/bmp-till-avif-konverterare'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 40,
        name: 'GIF till AVIF-konverterare',
        description: 'Konvertera forsta GIF-bildrutan till statisk AVIF-bild med utmarkt komprimering.',
        url: toAbsoluteUrl('/sv/verktyg/gif-till-avif-konverterare'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 41,
        name: 'HEIC till AVIF-konverterare',
        description: 'Konvertera iPhone HEIC-foton till modernt AVIF-format.',
        url: toAbsoluteUrl('/sv/verktyg/heic-till-avif-konverterare'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 42,
        name: 'TIFF till AVIF-konverterare',
        description: 'Konvertera TIFF-filer till modernt AVIF. Massiv filstorleksreducering.',
        url: toAbsoluteUrl('/sv/verktyg/tiff-till-avif-konverterare'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 43,
        name: 'JPG till GIF-konverterare',
        description: 'Konvertera JPG-foton till GIF-format. Perfekt for enkel grafik och ikoner.',
        url: toAbsoluteUrl('/sv/verktyg/jpg-till-gif-konverterare'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 44,
        name: 'PNG till GIF-konverterare',
        description: 'Konvertera PNG-grafik till GIF. Idealiskt for enkla ikoner och grafik.',
        url: toAbsoluteUrl('/sv/verktyg/png-till-gif-konverterare'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 45,
        name: 'WebP till GIF-konverterare',
        description: 'Konvertera WebP-bilder till GIF-format for maximal kompatibilitet.',
        url: toAbsoluteUrl('/sv/verktyg/webp-till-gif-konverterare'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 46,
        name: 'SVG till GIF-konverterare',
        description: 'Konvertera vektor-SVG-grafik till GIF-rasterformat.',
        url: toAbsoluteUrl('/sv/verktyg/svg-till-gif-konverterare'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 47,
        name: 'BMP till GIF-konverterare',
        description: 'Konvertera okomprimerade BMP-filer till lattvikts-GIF.',
        url: toAbsoluteUrl('/sv/verktyg/bmp-till-gif-konverterare'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 48,
        name: 'JPG till TIFF-konverterare',
        description: 'Konvertera JPG-foton till forlustfritt TIFF. For utskrift och arkivering.',
        url: toAbsoluteUrl('/sv/verktyg/jpg-till-tiff-konverterare'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 49,
        name: 'PNG till TIFF-konverterare',
        description: 'Konvertera PNG-grafik till professionellt TIFF-format.',
        url: toAbsoluteUrl('/sv/verktyg/png-till-tiff-konverterare'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 50,
        name: 'WebP till TIFF-konverterare',
        description: 'Konvertera WebP-bilder till professionellt TIFF for utskrift och arkivering.',
        url: toAbsoluteUrl('/sv/verktyg/webp-till-tiff-konverterare'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 51,
        name: 'SVG till TIFF-konverterare',
        description: 'Konvertera vektor-SVG-grafik till hogkvalitativt TIFF-raster.',
        url: toAbsoluteUrl('/sv/verktyg/svg-till-tiff-konverterare'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 52,
        name: 'BMP till TIFF-konverterare',
        description: 'Konvertera BMP-filer till professionellt TIFF-format for utskrift.',
        url: toAbsoluteUrl('/sv/verktyg/bmp-till-tiff-konverterare'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 53,
        name: 'HEIC till TIFF-konverterare',
        description: 'Konvertera iPhone HEIC-foton till professionellt TIFF-format.',
        url: toAbsoluteUrl('/sv/verktyg/heic-till-tiff-konverterare'),
        applicationCategory: 'MultimediaApplication',
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
        description="24 bildformatskonverterare, bildredigerare, favicon-generator, texträknare, färgverktyg och QR-koder. Utan registrering, utan begränsningar."
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
              icon: <RiCropLine className="h-8 w-8" />,
              title: 'Bildredigerare online',
              topImageAlt: 'Bildredigerare online Arteon',
              topImageSrc: '/assets/tools/free-image-editor-crop-resize-and-convert/bildredigerare-online-sv.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Förbered den perfekta beskärningen för sociala medier eller din webbplats. Välj ett färdigt format eller ange egna pixelmått och ladda ner bilden som PNG, JPG eller WebP.</p>
                  <div className="mt-4">
                    <Button arrow link="/sv/verktyg/bildredigerare-online">
                      Öppna verktyg
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
        <Gap size="sm" />

        <SectionSteps
          title="Bildformatskonverterare"
          description="24 bildkonverterare online — konvertera mellan JPG, PNG, WebP, SVG, BMP och GIF. Konvertering i webbläsaren, inga filer skickas."
          grid="three"
          items={[
            {
              icon: <RiLoopLeftLine className="h-8 w-8" />,
              title: 'JPG till WebP-konverterare',
              topImageAlt: 'JPG till WebP-konverterare Arteon',
              topImageSrc: '/assets/tools/jpg-png-to-webp-converter/jpg-png-till-webp-konverterare-sv.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Konvertera JPG-foton till lättvikts-WebP. Spara upp till 35% filstorlek.</p>
                  <div className="mt-4">
                    <Button arrow link="/sv/verktyg/jpg-till-webp-konverterare">
                      Öppna verktyg
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiLoopLeftLine className="h-8 w-8" />,
              title: 'PNG till JPG-konverterare',
              topImageAlt: 'PNG till JPG-konverterare Arteon',
              topImageSrc: '/assets/tools/jpg-png-to-webp-converter/jpg-png-till-webp-konverterare-sv.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Konvertera PNG-filer till JPG i webbläsaren. Utan begränsning, utan registrering.</p>
                  <div className="mt-4">
                    <Button arrow link="/sv/verktyg/png-till-jpg-konverterare">
                      Öppna verktyg
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiLoopLeftLine className="h-8 w-8" />,
              title: 'WebP till JPG-konverterare',
              topImageAlt: 'WebP till JPG-konverterare Arteon',
              topImageSrc: '/assets/tools/jpg-png-to-webp-converter/jpg-png-till-webp-konverterare-sv.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Konvertera WebP-filer till universellt kompatibelt JPG.</p>
                  <div className="mt-4">
                    <Button arrow link="/sv/verktyg/webp-till-jpg-konverterare">
                      Öppna verktyg
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiLoopLeftLine className="h-8 w-8" />,
              title: 'PNG till WebP-konverterare',
              topImageAlt: 'PNG till WebP-konverterare Arteon',
              topImageSrc: '/assets/tools/jpg-png-to-webp-converter/jpg-png-till-webp-konverterare-sv.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Konvertera PNG-bilder till WebP. Mindre filer med bibehållen transparens.</p>
                  <div className="mt-4">
                    <Button arrow link="/sv/verktyg/png-till-webp-konverterare">
                      Öppna verktyg
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiLoopLeftLine className="h-8 w-8" />,
              title: 'JPG till PNG-konverterare',
              topImageAlt: 'JPG till PNG-konverterare Arteon',
              topImageSrc: '/assets/tools/jpg-png-to-webp-converter/jpg-png-till-webp-konverterare-sv.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Konvertera JPG-bilder till förlustfritt PNG. Lokal konvertering i webbläsaren.</p>
                  <div className="mt-4">
                    <Button arrow link="/sv/verktyg/jpg-till-png-konverterare">
                      Öppna verktyg
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiLoopLeftLine className="h-8 w-8" />,
              title: 'WebP till PNG-konverterare',
              topImageAlt: 'WebP till PNG-konverterare Arteon',
              topImageSrc: '/assets/tools/jpg-png-to-webp-converter/jpg-png-till-webp-konverterare-sv.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Konvertera WebP-bilder till förlustfritt PNG. Lokal konvertering.</p>
                  <div className="mt-4">
                    <Button arrow link="/sv/verktyg/webp-till-png-konverterare">
                      Öppna verktyg
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiLoopLeftLine className="h-8 w-8" />,
              title: 'SVG till PNG-konverterare',
              topImageAlt: 'SVG till PNG-konverterare Arteon',
              topImageSrc: '/assets/tools/jpg-png-to-webp-converter/jpg-png-till-webp-konverterare-sv.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Konvertera SVG-vektorgrafik till PNG. Perfekt för dokument och sociala medier.</p>
                  <div className="mt-4">
                    <Button arrow link="/sv/verktyg/svg-till-png-konverterare">
                      Öppna verktyg
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiLoopLeftLine className="h-8 w-8" />,
              title: 'SVG till JPG-konverterare',
              topImageAlt: 'SVG till JPG-konverterare Arteon',
              topImageSrc: '/assets/tools/jpg-png-to-webp-converter/jpg-png-till-webp-konverterare-sv.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Konvertera SVG-filer till kompakt JPG. Mindre fil, full kompatibilitet.</p>
                  <div className="mt-4">
                    <Button arrow link="/sv/verktyg/svg-till-jpg-konverterare">
                      Öppna verktyg
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiLoopLeftLine className="h-8 w-8" />,
              title: 'BMP till JPG-konverterare',
              topImageAlt: 'BMP till JPG-konverterare Arteon',
              topImageSrc: '/assets/tools/jpg-png-to-webp-converter/jpg-png-till-webp-konverterare-sv.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Konvertera BMP-filer till lättvikts-JPG. Drastisk storleksminskning.</p>
                  <div className="mt-4">
                    <Button arrow link="/sv/verktyg/bmp-till-jpg-konverterare">
                      Öppna verktyg
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />

        <Gap size="sm" />

        <Gap variant="line" />
        <SectionInfo title="Vad ar Arteons verktyg?">
          <p className="mb-4">
            34 gratis verktyg for att forbereda material for webbplatser, sociala medier och tryck -- WebP-konverterare, favicon-generator, textraknare, fargextraktor, palettgenerator och QR-kod.
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
