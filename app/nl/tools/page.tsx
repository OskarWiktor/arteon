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
import ButtonLink from '@/components/atoms/buttons/ButtonLink';
import Divider from '@/components/atoms/Divider';
import Wrapper from '@/components/atoms/Wrapper';
import HeroBanner from '@/components/organisms/HeroBanner';
import SectionFaqPanels from '@/components/organisms/sections/SectionFaqPanels';
import SectionInfo from '@/components/organisms/sections/SectionInfo';
import SectionSteps from '@/components/organisms/sections/SectionSteps';
import { getToolsIndexAlternates } from '@/lib/i18n/pages/tool-meta';
import { largeIconSizeClasses, normalIconSizeClasses } from '@/lib/ui-classes';
import { toAbsoluteUrl, siteUrl } from '@/utils/absoluteUrl';

export const metadata = {
  title: 'Gratis tools | Converters, SEO, kleuren, favicon',
  description:
    'Gratis tools: 12 afbeeldingsconverters (JPG, PNG, WebP, SVG, BMP,, GIF, AVIF, HEIC, TIFF), favicon-generator, afbeeldingseditor, tekst-teller, kleurpaletten en QR-codes. Zonder registratie.',
  alternates: getToolsIndexAlternates('nl'),
  openGraph: {
    title: 'Gratis tools | Converters, SEO, kleuren, favicon',
    description:
      'Gratis tools: 12 afbeeldingsconverters (JPG, PNG, WebP, SVG, BMP,, GIF, AVIF, HEIC, TIFF), favicon-generator, afbeeldingseditor, tekst-teller, kleurpaletten en QR-codes. Zonder registratie.',
    url: toAbsoluteUrl('/nl/tools'),
    type: 'website',
    images: [
      { url: toAbsoluteUrl('/assets/arteon-logo-on-mockup.webp'), width: 1200, height: 630 },
    ],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Gratis tools - afbeeldingsconverters, SEO, kleuren, favicon',
  description:
    'Gratis tools: 12 afbeeldingsconverters (JPG, PNG, WebP, SVG, BMP,, GIF, AVIF, HEIC, TIFF), favicon-generator, afbeeldingseditor, tekst-teller, kleurpaletten en QR-codes. Zonder registratie.',
  url: toAbsoluteUrl('/nl/tools'),
  inLanguage: 'nl',
  isPartOf: { '@type': 'WebSite', name: 'Arteon Agency', url: siteUrl },
  about: [
    { '@type': 'Thing', name: 'Beeldoptimalisatie' },
    { '@type': 'Thing', name: 'SEO' },
    { '@type': 'Thing', name: 'Kleuren en branding' },
    { '@type': 'Thing', name: 'Online generatoren' },
  ],
  mainEntity: {
    '@type': 'ItemList',

    itemListElement: [
      {
        '@type': 'WebApplication',
        position: 1,
        name: 'JPG- en PNG-naar-WebP-converter',
        description:
          'Gratis JPG- en PNG-naar-WebP-converter. Verklein bestanden tot 35\u00a0% zonder zichtbaar kwaliteitsverlies. Zonder registratie - bestanden blijven in uw browser.',
        url: toAbsoluteUrl('/nl/tools/jpg-naar-webp-converter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 2,
        name: 'Online afbeeldingeneditor',
        description:
          'Snijd afbeeldingen bij en schaal ze voor social media en websites. Kant-en-klare formaten, aangepaste pixelafmetingen en ronde avatars.',
        url: toAbsoluteUrl('/nl/tools/afbeeldingeneditor'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 3,
        name: 'Online favicon-generator',
        description:
          'Gratis favicon-generator. Maak favicon.ico en PNG-pictogrammen (16×16 tot 512×512) vanuit één afbeelding - conform browser- en Lighthouse-vereisten.',
        url: toAbsoluteUrl('/nl/tools/gratis-favicon-generator'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 4,
        name: 'Meta-titel & beschrijving checker',
        description:
          'Checker voor meta-titel en -beschrijving met Google-voorbeeld. Toont het aantal tekens en de pixelbreedte zodat titels en beschrijvingen niet worden afgekapt.',
        url: toAbsoluteUrl('/nl/tools/meta-titel-beschrijving-checker'),
        applicationCategory: 'DeveloperApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 5,
        name: 'HTML-e-mailhandtekening generator',
        description:
          'Gratis HTML-e-mailhandtekening generator. Voer contactgegevens, CTA-link en social-mediaprofielen in en kopieer de kant-en-klare HTML-code naar Gmail of Outlook.',
        url: toAbsoluteUrl('/nl/tools/gratis-e-mailhandtekening-generator'),
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 6,
        name: 'Kleurcontrast checker',
        description:
          'Controleer het contrast en de leesbaarheid van tekst- en achtergrondkleuren volgens WCAG. Berekent de contrastverhouding en helpt met automatische kleuraanpassing.',
        url: toAbsoluteUrl('/nl/tools/kleurcontrast-checker'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 7,
        name: 'Kleurextractor uit afbeelding',
        description:
          'Gratis kleurextractor. Upload een foto of logo en ontvang een palet met maximaal 12 dominante kleuren (HEX en RGB).',
        url: toAbsoluteUrl('/nl/tools/kleurextractor-uit-afbeelding'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 8,
        name: 'Kleurpalettengenerator',
        description:
          'Genereer kleurpaletten vanuit een basiskleur. Monochromatisch, triadisch, analoog, complementair en meer - plus pastel-, donkere en minimalistische varianten.',
        url: toAbsoluteUrl('/nl/tools/kleurpalettengenerator'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 9,
        name: 'Woorden- en tekenteller',
        description:
          'Gratis woorden- en tekenteller met lengtebeoordeling. Controleer of de tekstlengte geschikt is voor een homepage, servicepagina, blogartikel of productbeschrijving.',
        url: toAbsoluteUrl('/nl/tools/woorden-en-tekenteller'),
        applicationCategory: 'DeveloperApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 10,
        name: 'QR-code generator',
        description:
          "Gratis QR-code generator. Maak QR-codes voor websites, vCards, menu's of flyers. Export naar PNG en SVG, zonder registratie, zonder limieten.",
        url: toAbsoluteUrl('/nl/tools/gratis-qr-code-generator'),
        applicationCategory: 'UtilityApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 11,
        name: 'JPG naar WebP converter',
        description:
          "Converteer JPG-foto's naar lichtgewicht WebP. Bespaar tot 35% bestandsgrootte.",
        url: toAbsoluteUrl('/nl/tools/jpg-naar-webp-converter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 12,
        name: 'PNG naar JPG converter',
        description:
          'Converteer PNG-bestanden naar JPG in de browser. Zonder limiet, zonder registratie.',
        url: toAbsoluteUrl('/nl/tools/png-naar-jpg-converter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 13,
        name: 'WebP naar JPG converter',
        description: 'Converteer WebP-bestanden naar universeel compatibel JPG.',
        url: toAbsoluteUrl('/nl/tools/webp-naar-jpg-converter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 14,
        name: 'PNG naar WebP converter',
        description:
          'Converteer PNG-afbeeldingen naar WebP. Kleinere bestanden met behoud van transparantie.',
        url: toAbsoluteUrl('/nl/tools/png-naar-webp-converter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 15,
        name: 'JPG naar PNG converter',
        description:
          'Converteer JPG-afbeeldingen naar verliesvrij PNG. Lokale verwerking in de browser.',
        url: toAbsoluteUrl('/nl/tools/jpg-naar-png-converter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 16,
        name: 'WebP naar PNG converter',
        description: 'Converteer WebP-afbeeldingen naar verliesvrij PNG. Lokale verwerking.',
        url: toAbsoluteUrl('/nl/tools/webp-naar-png-converter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 17,
        name: 'SVG naar PNG converter',
        description:
          'Converteer SVG-vectorafbeeldingen naar PNG. Ideaal voor documenten en social media.',
        url: toAbsoluteUrl('/nl/tools/svg-naar-png-converter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 18,
        name: 'SVG naar JPG converter',
        description:
          'Converteer SVG-afbeeldingen naar compact JPG. Kleiner bestand, volledige compatibiliteit.',
        url: toAbsoluteUrl('/nl/tools/svg-naar-jpg-converter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 19,
        name: 'BMP naar JPG converter',
        description: 'Converteer BMP-bestanden naar lichtgewicht JPG. Drastische verkleining.',
        url: toAbsoluteUrl('/nl/tools/bmp-naar-jpg-converter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 20,
        name: 'BMP naar PNG converter',
        description:
          'Converteer BMP-afbeeldingen naar verliesvrij PNG. Kwaliteit behouden, kleiner bestand.',
        url: toAbsoluteUrl('/nl/tools/bmp-naar-png-converter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 21,
        name: 'GIF naar PNG converter',
        description:
          'Exporteer het eerste frame van een GIF als statisch PNG. Zonder kwaliteitsverlies.',
        url: toAbsoluteUrl('/nl/tools/gif-naar-png-converter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 22,
        name: 'GIF naar JPG converter',
        description: 'Exporteer het eerste frame van een GIF als compact JPG. Kleiner bestand.',
        url: toAbsoluteUrl('/nl/tools/gif-naar-jpg-converter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 23,
        name: 'SVG naar WebP converter',
        description: 'Converteer SVG-afbeeldingen naar lichtgewicht WebP. Ideaal voor websites.',
        url: toAbsoluteUrl('/nl/tools/svg-naar-webp-converter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 24,
        name: 'GIF naar WebP converter',
        description: 'Exporteer het eerste GIF-frame als lichtgewicht WebP. Kleiner bestand.',
        url: toAbsoluteUrl('/nl/tools/gif-naar-webp-converter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 25,
        name: 'BMP naar WebP converter',
        description: 'Converteer BMP-bestanden naar lichtgewicht WebP. Tot 95% kleiner.',
        url: toAbsoluteUrl('/nl/tools/bmp-naar-webp-converter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 26,
        name: 'AVIF naar JPG converter',
        description: 'Converteer AVIF-bestanden naar universeel JPG. Compatibel overal.',
        url: toAbsoluteUrl('/nl/tools/avif-naar-jpg-converter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 27,
        name: 'AVIF naar PNG converter',
        description: 'Converteer AVIF-bestanden naar verliesvrij PNG. Volledige kwaliteit.',
        url: toAbsoluteUrl('/nl/tools/avif-naar-png-converter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 28,
        name: 'AVIF naar WebP converter',
        description: 'Converteer AVIF-bestanden naar WebP. Brede compatibiliteit.',
        url: toAbsoluteUrl('/nl/tools/avif-naar-webp-converter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 29,
        name: 'HEIC naar JPG converter',
        description: 'Converteer iPhone HEIC-fotos naar universeel JPG. Zonder registratie.',
        url: toAbsoluteUrl('/nl/tools/heic-naar-jpg-converter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 30,
        name: 'HEIC naar PNG converter',
        description: 'Converteer iPhone HEIC-fotos naar verliesvrij PNG.',
        url: toAbsoluteUrl('/nl/tools/heic-naar-png-converter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 31,
        name: 'HEIC naar WebP converter',
        description: 'Converteer iPhone HEIC-fotos naar lichtgewicht WebP.',
        url: toAbsoluteUrl('/nl/tools/heic-naar-webp-converter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 32,
        name: 'TIFF naar JPG converter',
        description: 'Converteer TIFF-bestanden naar compact JPG. Ideaal voor scans.',
        url: toAbsoluteUrl('/nl/tools/tiff-naar-jpg-converter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 33,
        name: 'TIFF naar PNG converter',
        description: 'Converteer TIFF-bestanden naar verliesvrij PNG.',
        url: toAbsoluteUrl('/nl/tools/tiff-naar-png-converter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 34,
        name: 'TIFF naar WebP converter',
        description: 'Converteer TIFF-bestanden naar lichtgewicht WebP. Enorme reductie.',
        url: toAbsoluteUrl('/nl/tools/tiff-naar-webp-converter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 35,
        name: 'PNG naar AVIF converter',
        description:
          'Converteer PNG-afbeeldingen naar AVIF met transparantie-ondersteuning. Aanzienlijk kleinere bestanden.',
        url: toAbsoluteUrl('/nl/tools/png-naar-avif-converter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 36,
        name: 'WebP naar AVIF converter',
        description:
          'Converteer WebP-bestanden naar AVIF. Nog betere compressie in een modern formaat.',
        url: toAbsoluteUrl('/nl/tools/webp-naar-avif-converter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 37,
        name: 'SVG naar AVIF converter',
        description: 'Converteer vector SVG-afbeeldingen naar compact AVIF-rasterformaat.',
        url: toAbsoluteUrl('/nl/tools/svg-naar-avif-converter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 38,
        name: 'BMP naar AVIF converter',
        description: 'Converteer ongecomprimeerde BMP-bestanden naar ultracompact AVIF.',
        url: toAbsoluteUrl('/nl/tools/bmp-naar-avif-converter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 39,
        name: 'GIF naar AVIF converter',
        description:
          'Converteer het eerste GIF-frame naar statisch AVIF-beeld met uitstekende compressie.',
        url: toAbsoluteUrl('/nl/tools/gif-naar-avif-converter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 40,
        name: 'TIFF naar AVIF converter',
        description: 'Converteer TIFF-bestanden naar modern AVIF. Enorme bestandsgrootte-reductie.',
        url: toAbsoluteUrl('/nl/tools/tiff-naar-avif-converter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 41,
        name: 'PNG naar GIF converter',
        description:
          'Converteer PNG-afbeeldingen naar GIF. Ideaal voor eenvoudige iconen en afbeeldingen.',
        url: toAbsoluteUrl('/nl/tools/png-naar-gif-converter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 42,
        name: 'WebP naar GIF converter',
        description: 'Converteer WebP-afbeeldingen naar GIF-formaat voor maximale compatibiliteit.',
        url: toAbsoluteUrl('/nl/tools/webp-naar-gif-converter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 43,
        name: 'SVG naar GIF converter',
        description: 'Converteer vector SVG-afbeeldingen naar GIF-rasterformaat.',
        url: toAbsoluteUrl('/nl/tools/svg-naar-gif-converter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 44,
        name: 'BMP naar GIF converter',
        description: 'Converteer ongecomprimeerde BMP-bestanden naar lichtgewicht GIF.',
        url: toAbsoluteUrl('/nl/tools/bmp-naar-gif-converter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 45,
        name: 'PNG naar TIFF converter',
        description: 'Converteer PNG-afbeeldingen naar professioneel TIFF-formaat.',
        url: toAbsoluteUrl('/nl/tools/png-naar-tiff-converter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 46,
        name: 'WebP naar TIFF converter',
        description:
          'Converteer WebP-afbeeldingen naar professioneel TIFF voor afdrukken en archivering.',
        url: toAbsoluteUrl('/nl/tools/webp-naar-tiff-converter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 47,
        name: 'SVG naar TIFF converter',
        description: 'Converteer vector SVG-afbeeldingen naar hoogwaardig TIFF-raster.',
        url: toAbsoluteUrl('/nl/tools/svg-naar-tiff-converter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 48,
        name: 'BMP naar TIFF converter',
        description: 'Converteer BMP-bestanden naar professioneel TIFF-formaat voor afdrukken.',
        url: toAbsoluteUrl('/nl/tools/bmp-naar-tiff-converter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 49,
        name: 'JPG naar AVIF converter',
        description:
          "Converteer JPG-foto's naar modern AVIF. Tot 50% betere compressie dan JPG met behoud van kwaliteit.",
        url: toAbsoluteUrl('/nl/tools/jpg-naar-avif-converter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 50,
        name: 'HEIC naar AVIF converter',
        description: "Converteer iPhone HEIC-foto's naar modern AVIF-formaat.",
        url: toAbsoluteUrl('/nl/tools/heic-naar-avif-converter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 51,
        name: 'JPG naar GIF converter',
        description:
          "Converteer JPG-foto's naar GIF-formaat. Perfect voor eenvoudige afbeeldingen en iconen.",
        url: toAbsoluteUrl('/nl/tools/jpg-naar-gif-converter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 52,
        name: 'JPG naar TIFF converter',
        description: "Converteer JPG-foto's naar lossless TIFF. Voor afdrukken en archivering.",
        url: toAbsoluteUrl('/nl/tools/jpg-naar-tiff-converter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 53,
        name: 'HEIC naar TIFF converter',
        description: "Converteer iPhone HEIC-foto's naar professioneel TIFF-formaat.",
        url: toAbsoluteUrl('/nl/tools/heic-naar-tiff-converter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
    ],
  },
};

const faqItems = [
  {
    question: 'Wat kosten de tools?',
    answer: 'Niets. Alle tools zijn gratis, zonder abonnementen en zonder verborgen kosten.',
  },
  {
    question: 'Worden mijn bestanden naar een server gestuurd?',
    answer:
      'Nee. Alle tools draaien volledig in uw browser. Bestanden verlaten nooit uw computer en worden nergens opgeslagen.',
  },
  {
    question: 'Heb ik een account nodig?',
    answer:
      'Nee. U kunt de tools direct gebruiken, zonder in te loggen of een account aan te maken.',
  },
  {
    question: 'Is er een gebruikslimiet?',
    answer:
      'Nee. Gebruik zonder beperkingen - geen dagelijkse limieten, geen bestandslimieten, geen conversielimieten.',
  },
  {
    question: 'Waar zijn deze tools voor?',
    answer:
      'Ze helpen bij het voorbereiden van materialen voor websites, social media en drukwerk: afbeeldingen optimaliseren, favicons maken, tekstlengte controleren, QR-codes genereren, kleuren kiezen en leesbaarheid controleren.',
  },
  {
    question: 'Werken de tools op mobiel?',
    answer:
      'Ja, maar sommige tools (WebP-converter, favicon-generator) werken beter op desktop vanwege de verwerking van grotere bestanden.',
  },
];

export default function ToolsIndexPage() {
  return (
    <>
      <HeroBanner
        title='Gratis tools'
        description='12 afbeeldingsformaat converters, afbeeldingseditor, favicon-generator, tekst-teller, kleurtools en QR-codes. Zonder registratie, zonder limieten.'
        backgroundImage='/assets/arteon-logo-on-mockup.webp'
        overlay='black'
      />

      <Wrapper>
        <Divider size='sm' />

        <SectionSteps
          title='Afbeeldingen & favicons'
          description="Tools voor het voorbereiden van foto's, graphics en pictogrammen voor websites en social media."
          grid='three'
          items={[
            {
              icon: <RiCropLine className={largeIconSizeClasses} />,
              title: 'Online afbeeldingseditor',
              topImageAlt: 'Online afbeeldingseditor Arteon',
              topImageSrc:
                '/assets/tools/free-image-editor-crop-resize-and-convert/afbeeldingeneditor-nl.webp',
              description: (
                <div className='flex h-full flex-col'>
                  <p>
                    Bereid de perfecte uitsnede voor social media of uw website voor. Kies een
                    kant-en-klaar formaat of voer aangepaste pixelafmetingen in en download de
                    afbeelding als PNG, JPG of WebP.
                  </p>
                  <div className='mt-4'>
                    <ButtonLink arrow href='/nl/tools/afbeeldingeneditor'>
                      Open tool
                    </ButtonLink>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiAppsLine className={largeIconSizeClasses} />,
              title: 'Favicon- & pictogramgenerator',
              topImageAlt: 'Favicon-generator Arteon',
              topImageSrc: '/assets/tools/favicon-generator/gratis-favicon-generator-nl.webp',
              description: (
                <div className='flex h-full flex-col'>
                  <p>
                    Genereer <strong>favicon.ico</strong> en PNG-pictogrammen 180x180, 192x192 en
                    512x512 vanuit één afbeelding - conform browser- en Lighthouse-vereisten.
                  </p>
                  <div className='mt-4'>
                    <ButtonLink arrow href='/nl/tools/gratis-favicon-generator'>
                      Tool openen
                    </ButtonLink>
                  </div>
                </div>
              ),
            },
          ]}
        />
        <Divider size='sm' />

        <SectionSteps
          title='Tekst & SEO'
          description='Tools voor het controleren van tekstlengte, meta-tags en het bekijken van een voorbeeld van uw pagina in zoekresultaten.'
          grid='three'
          items={[
            {
              icon: <RiFileTextLine className={largeIconSizeClasses} />,
              title: 'Meta-titel & beschrijving checker',
              topImageAlt: 'Meta-titel en beschrijving checker Arteon',
              topImageSrc:
                '/assets/tools/free-meta-title-and-description-checker-pixel-width/meta-titel-beschrijving-checker-nl.webp',
              description: (
                <div className='flex h-full flex-col'>
                  <p>
                    Controleer het aantal tekens, woorden en pixelbreedte - met Google-voorbeeld.
                    Vermijd afgekapte titels en beschrijvingen in zoekresultaten.
                  </p>
                  <div className='mt-4'>
                    <ButtonLink arrow href='/nl/tools/meta-titel-beschrijving-checker'>
                      Tool openen
                    </ButtonLink>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiArticleLine className={largeIconSizeClasses} />,
              title: 'Woorden- & tekenteller',
              topImageAlt: 'Woorden- en tekenteller Arteon',
              topImageSrc:
                '/assets/tools/word-and-character-counter-with-text-formatting-tools/woorden-en-tekenteller-nl.webp',
              description: (
                <div className='flex h-full flex-col'>
                  <p>
                    Controleer de tekstlengte en beoordeel of deze geschikt is voor een homepage,
                    servicepagina, blogartikel of productbeschrijving. De tool telt woorden, tekens,
                    alinea&apos;s en leestijd.
                  </p>
                  <div className='mt-4'>
                    <ButtonLink arrow href='/nl/tools/woorden-en-tekenteller'>
                      Tool openen
                    </ButtonLink>
                  </div>
                </div>
              ),
            },

            {
              icon: <RiFileTextLine className={largeIconSizeClasses} />,
              title: 'Lorem Ipsum-generator',
              topImageAlt: 'Lorem Ipsum-generator Arteon',
              topImageSrc: '/assets/tools/lorem-ipsum-generator/lorem-ipsum-generator-nl.webp',
              description: (
                <div className='flex h-full flex-col'>
                  <p>
                    Genereer opvultekst in 8 stijlen en 9 modi. Lorem Ipsum, Hipster, Business,
                    Bacon en meer. Kopieer als tekst of HTML.
                  </p>
                  <div className='mt-4'>
                    <ButtonLink arrow href='/nl/tools/lorem-ipsum-generator'>
                      Tool openen
                    </ButtonLink>
                  </div>
                </div>
              ),
            },
          ]}
        />

        <Divider size='sm' />

        <SectionSteps
          title='E-mail & communicatie'
          description='Tools voor professionele e-mailcommunicatie en een consistent merkimago.'
          grid='three'
          items={[
            {
              icon: <RiMailLine className={largeIconSizeClasses} />,
              title: 'Gratis HTML-e-mailhandtekening generator',
              topImageAlt: 'Gratis HTML-e-mailhandtekening generator Arteon',
              topImageSrc:
                '/assets/tools/free-html-email-signature-generator/gratis-e-mailhandtekening-generator-nl.webp',
              description: (
                <div className='flex h-full flex-col'>
                  <p>
                    Maak in enkele minuten een professionele e-mailhandtekening. Voer uw gegevens
                    in, kies kleuren en kopieer de kant-en-klare HTML-code naar Gmail, Outlook of
                    een andere e-mailclient.
                  </p>
                  <div className='mt-4'>
                    <ButtonLink arrow href='/nl/tools/gratis-e-mailhandtekening-generator'>
                      Tool openen
                    </ButtonLink>
                  </div>
                </div>
              ),
            },
          ]}
        />

        <Divider size='sm' />

        <SectionSteps
          title='QR-codes'
          description="QR-code generator voor websites, visitekaartjes, menu's en drukwerk."
          grid='three'
          items={[
            {
              icon: <RiQrCodeLine className={largeIconSizeClasses} />,
              title: 'Gratis QR-code generator',
              topImageAlt: 'Gratis QR-code generator Arteon',
              topImageSrc: '/assets/tools/qr-code-generator/gratis-qr-code-generator-nl.webp',
              description: (
                <div className='flex h-full flex-col'>
                  <p>
                    Maak een QR-code voor een website, vCard, restaurantmenu of flyer. Export naar
                    PNG en SVG - zonder registratie, zonder limieten.
                  </p>
                  <div className='mt-4'>
                    <ButtonLink arrow href='/nl/tools/gratis-qr-code-generator'>
                      Tool openen
                    </ButtonLink>
                  </div>
                </div>
              ),
            },
          ]}
        />

        <Divider size='sm' />

        <SectionSteps
          title='Kleuren & toegankelijkheid'
          description='Tools voor het werken met kleuren, contrast en WCAG-toegankelijkheid.'
          grid='three'
          items={[
            {
              icon: <RiContrast2Line className={largeIconSizeClasses} />,
              title: 'Kleurcontrast checker',
              topImageAlt: 'Kleurcontrast checker Arteon',
              topImageSrc:
                '/assets/tools/color-contrast-and-readability-checker/kleurcontrast-checker-nl.webp',
              description: (
                <div className='flex h-full flex-col'>
                  <p>
                    Controleer of uw tekst- en achtergrondkleuren leesbaar zijn. Voer kleurcodes in,
                    bekijk de contrastverhouding volgens <strong>WCAG</strong> en gebruik de{' '}
                    <strong>Match</strong>
                    -functie voor automatische correctie.
                  </p>
                  <div className='mt-4'>
                    <ButtonLink arrow href='/nl/tools/kleurcontrast-checker'>
                      Tool openen
                    </ButtonLink>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiPantoneLine className={largeIconSizeClasses} />,
              title: 'Kleurextractor uit afbeelding',
              topImageAlt: 'Kleurextractor uit afbeelding Arteon',
              topImageSrc:
                '/assets/tools/image-color-extractor/kleurextractor-uit-afbeelding-nl.webp',
              description: (
                <div className='flex h-full flex-col'>
                  <p>
                    Upload een foto of logo - de tool extraheert de dominante kleuren. Kopieer
                    HEX-codes met één klik en gebruik ze overal.
                  </p>
                  <div className='mt-4'>
                    <ButtonLink arrow href='/nl/tools/kleurextractor-uit-afbeelding'>
                      Tool openen
                    </ButtonLink>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiPaletteLine className={largeIconSizeClasses} />,
              title: 'Kleurpalettengenerator',
              topImageAlt: 'Kleurpalettengenerator Arteon',
              topImageSrc: '/assets/tools/color-palette-generator/kleurpalettengenerator-nl.webp',
              description: (
                <div className='flex h-full flex-col'>
                  <p>
                    Kies een basiskleur en genereer 9 kleurpaletten: monochromatisch, complementair,
                    triadisch, pastel, donker en meer. Kopieer HEX-codes met één klik.
                  </p>
                  <div className='mt-4'>
                    <ButtonLink arrow href='/nl/tools/kleurpalettengenerator'>
                      Tool openen
                    </ButtonLink>
                  </div>
                </div>
              ),
            },
          ]}
        />

        <Divider size='sm' />

        <SectionSteps
          title='Afbeeldingsformaat converters'
          description='12 afbeeldingsconverters - converteer tussen JPG, PNG, WebP, SVG, BMP en GIF. Conversie in de browser, geen bestanden verzonden.'
          grid='three'
          items={[
            {
              icon: <RiLoopLeftLine className={largeIconSizeClasses} />,
              title: 'JPG naar WebP converter',
              topImageAlt: 'JPG naar WebP converter Arteon',
              topImageSrc:
                '/assets/tools/jpg-png-to-webp-converter/jpg-png-naar-webp-converter-nl.webp',
              description: (
                <div className='flex h-full flex-col'>
                  <p>
                    Converteer JPG-foto\'s naar lichtgewicht WebP. Bespaar tot 35% bestandsgrootte.
                  </p>
                  <div className='mt-4'>
                    <ButtonLink arrow href='/nl/tools/jpg-naar-webp-converter'>
                      Open tool
                    </ButtonLink>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiLoopLeftLine className={largeIconSizeClasses} />,
              title: 'PNG naar JPG converter',
              topImageAlt: 'PNG naar JPG converter Arteon',
              topImageSrc:
                '/assets/tools/jpg-png-to-webp-converter/jpg-png-naar-webp-converter-nl.webp',
              description: (
                <div className='flex h-full flex-col'>
                  <p>
                    Converteer PNG-bestanden naar JPG in de browser. Zonder limiet, zonder
                    registratie.
                  </p>
                  <div className='mt-4'>
                    <ButtonLink arrow href='/nl/tools/png-naar-jpg-converter'>
                      Open tool
                    </ButtonLink>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiLoopLeftLine className={largeIconSizeClasses} />,
              title: 'WebP naar JPG converter',
              topImageAlt: 'WebP naar JPG converter Arteon',
              topImageSrc:
                '/assets/tools/jpg-png-to-webp-converter/jpg-png-naar-webp-converter-nl.webp',
              description: (
                <div className='flex h-full flex-col'>
                  <p>Converteer WebP-bestanden naar universeel compatibel JPG.</p>
                  <div className='mt-4'>
                    <ButtonLink arrow href='/nl/tools/webp-naar-jpg-converter'>
                      Open tool
                    </ButtonLink>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiLoopLeftLine className={largeIconSizeClasses} />,
              title: 'PNG naar WebP converter',
              topImageAlt: 'PNG naar WebP converter Arteon',
              topImageSrc:
                '/assets/tools/jpg-png-to-webp-converter/jpg-png-naar-webp-converter-nl.webp',
              description: (
                <div className='flex h-full flex-col'>
                  <p>
                    Converteer PNG-afbeeldingen naar WebP. Kleinere bestanden met behoud van
                    transparantie.
                  </p>
                  <div className='mt-4'>
                    <ButtonLink arrow href='/nl/tools/png-naar-webp-converter'>
                      Open tool
                    </ButtonLink>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiLoopLeftLine className={largeIconSizeClasses} />,
              title: 'JPG naar PNG converter',
              topImageAlt: 'JPG naar PNG converter Arteon',
              topImageSrc:
                '/assets/tools/jpg-png-to-webp-converter/jpg-png-naar-webp-converter-nl.webp',
              description: (
                <div className='flex h-full flex-col'>
                  <p>
                    Converteer JPG-afbeeldingen naar verliesvrij PNG. Lokale verwerking in de
                    browser.
                  </p>
                  <div className='mt-4'>
                    <ButtonLink arrow href='/nl/tools/jpg-naar-png-converter'>
                      Open tool
                    </ButtonLink>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiLoopLeftLine className={largeIconSizeClasses} />,
              title: 'WebP naar PNG converter',
              topImageAlt: 'WebP naar PNG converter Arteon',
              topImageSrc:
                '/assets/tools/jpg-png-to-webp-converter/jpg-png-naar-webp-converter-nl.webp',
              description: (
                <div className='flex h-full flex-col'>
                  <p>Converteer WebP-afbeeldingen naar verliesvrij PNG. Lokale verwerking.</p>
                  <div className='mt-4'>
                    <ButtonLink arrow href='/nl/tools/webp-naar-png-converter'>
                      Open tool
                    </ButtonLink>
                  </div>
                </div>
              ),
            },
          ]}
        />
        <Divider size='sm' />

        <SectionSteps
          title='Dataconverters'
          description='Online dataformaatconverters — converteer tussen CSV, JSON, XML, YAML, Markdown en HTML. Verwerking in uw browser.'
          grid='three'
          items={[
            {
              icon: <RiLoopLeftLine className={largeIconSizeClasses} />,
              title: 'CSV naar JSON',
              topImageAlt: 'CSV naar JSON Arteon',
              topImageSrc:
                '/assets/tools/jpg-png-to-webp-converter/jpg-png-naar-webp-converter-nl.webp',
              description: (
                <div className='flex h-full flex-col'>
                  <p>Converteer CSV naar JSON-formaat. Automatische scheidingstekens en opmaak.</p>
                  <div className='mt-4'>
                    <ButtonLink arrow href='/nl/tools/csv-naar-json-converter'>
                      Tool openen
                    </ButtonLink>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiLoopLeftLine className={largeIconSizeClasses} />,
              title: 'JSON naar CSV',
              topImageAlt: 'JSON naar CSV Arteon',
              topImageSrc:
                '/assets/tools/jpg-png-to-webp-converter/jpg-png-naar-webp-converter-nl.webp',
              description: (
                <div className='flex h-full flex-col'>
                  <p>Converteer JSON-gegevens naar CSV-formaat. Verwerking in de browser.</p>
                  <div className='mt-4'>
                    <ButtonLink arrow href='/nl/tools/json-naar-csv-converter'>
                      Tool openen
                    </ButtonLink>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiLoopLeftLine className={largeIconSizeClasses} />,
              title: 'XML naar JSON',
              topImageAlt: 'XML naar JSON Arteon',
              topImageSrc:
                '/assets/tools/jpg-png-to-webp-converter/jpg-png-naar-webp-converter-nl.webp',
              description: (
                <div className='flex h-full flex-col'>
                  <p>Converteer XML-gegevens naar JSON. Conversie in de browser met validatie.</p>
                  <div className='mt-4'>
                    <ButtonLink arrow href='/nl/tools/xml-naar-json-converter'>
                      Tool openen
                    </ButtonLink>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiLoopLeftLine className={largeIconSizeClasses} />,
              title: 'JSON naar XML',
              topImageAlt: 'JSON naar XML Arteon',
              topImageSrc:
                '/assets/tools/jpg-png-to-webp-converter/jpg-png-naar-webp-converter-nl.webp',
              description: (
                <div className='flex h-full flex-col'>
                  <p>Converteer JSON-gegevens naar geldig XML. Conversie in de browser.</p>
                  <div className='mt-4'>
                    <ButtonLink arrow href='/nl/tools/json-naar-xml-converter'>
                      Tool openen
                    </ButtonLink>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiLoopLeftLine className={largeIconSizeClasses} />,
              title: 'YAML naar JSON',
              topImageAlt: 'YAML naar JSON Arteon',
              topImageSrc:
                '/assets/tools/jpg-png-to-webp-converter/jpg-png-naar-webp-converter-nl.webp',
              description: (
                <div className='flex h-full flex-col'>
                  <p>Converteer YAML-configuratie naar JSON. Validatie en opmaak in de browser.</p>
                  <div className='mt-4'>
                    <ButtonLink arrow href='/nl/tools/yaml-naar-json-converter'>
                      Tool openen
                    </ButtonLink>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiLoopLeftLine className={largeIconSizeClasses} />,
              title: 'JSON naar YAML',
              topImageAlt: 'JSON naar YAML Arteon',
              topImageSrc:
                '/assets/tools/jpg-png-to-webp-converter/jpg-png-naar-webp-converter-nl.webp',
              description: (
                <div className='flex h-full flex-col'>
                  <p>Converteer JSON-gegevens naar leesbaar YAML. Verwerking in de browser.</p>
                  <div className='mt-4'>
                    <ButtonLink arrow href='/nl/tools/json-naar-yaml-converter'>
                      Tool openen
                    </ButtonLink>
                  </div>
                </div>
              ),
            },
          ]}
        />

        <Divider size='sm' />

        <Divider line />

        <SectionInfo title='Wat zijn Arteon-tools?'>
          <p className='mb-4'>
            Gratis tools voor het voorbereiden van materialen voor websites, social media en
            drukwerk - WebP-converter, favicon-generator, tekstteller, kleurextractor,
            palettengenerator en QR-codes.
          </p>
          <p>
            Alle tools draaien in uw browser - bestanden worden nooit naar een server gestuurd.
            Gebruik ze zonder registratie en zonder limieten.
          </p>
        </SectionInfo>

        <Divider line />

        <SectionSteps
          title='Waarom Arteon-tools gebruiken?'
          grid='two'
          items={[
            {
              icon: <RiShieldCheckLine className={normalIconSizeClasses} />,
              title: 'Volledige privacy',
              description:
                'Alle tools verwerken bestanden lokaal in uw browser. Niets wordt naar een server gestuurd - gegevens verdwijnen wanneer u het tabblad sluit.',
            },
            {
              icon: <RiInfinityFill className={normalIconSizeClasses} />,
              title: 'Geen gebruikslimieten',
              description:
                'Gebruik zonder beperkingen - geen dagelijkse limieten, geen bestandslimieten, geen conversielimieten. Zo vaak als u nodig heeft.',
            },
            {
              icon: <RiLockLine className={normalIconSizeClasses} />,
              title: 'Geen registratie',
              description: 'Geen account nodig. Open de tool, gebruik hem en klaar.',
            },
            {
              icon: <RiGlobalLine className={normalIconSizeClasses} />,
              title: 'Beschikbaar in het Nederlands',
              description:
                'Alle tools zijn beschikbaar in het Nederlands - interface, instructies en meldingen.',
            },
          ]}
        />

        <Divider line />

        <SectionFaqPanels items={faqItems} title='Veelgestelde vragen over onze tools' />

        <Divider size='sm' />
      </Wrapper>

      <Script id='ld-json-tools-nl' type='application/ld+json' strategy='afterInteractive'>
        {JSON.stringify(schema)}
      </Script>
    </>
  );
}
