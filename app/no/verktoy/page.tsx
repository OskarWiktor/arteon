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
import { getToolsIndexAlternates } from '@/lib/i18n/pages/toolMeta';
import { largeIconSizeClasses, normalIconSizeClasses } from '@/lib/uiClasses';
import { toAbsoluteUrl, siteUrl } from '@/utils/absoluteUrl';

export const metadata = {
  title: 'Gratis nettverktøy | Konverterere, SEO, farger, favicon',
  description:
    'Gratis nettverktøy: 24 bildekonverterere (JPG, PNG, WebP, SVG, BMP,, GIF, AVIF, HEIC, TIFF), favicon-generator, bildeeditor, tekstteller, fargepaletter og QR-koder. Uten registrering.',
  alternates: getToolsIndexAlternates('no'),
  openGraph: {
    title: 'Gratis nettverktøy | Konverterere, SEO, farger, favicon',
    description:
      'Gratis nettverktøy: 24 bildekonverterere (JPG, PNG, WebP, SVG, BMP,, GIF, AVIF, HEIC, TIFF), favicon-generator, bildeeditor, tekstteller, fargepaletter og QR-koder. Uten registrering.',
    url: toAbsoluteUrl('/no/verktoy'),
    type: 'website',
    images: [
      { url: toAbsoluteUrl('/assets/arteon-logo-on-mockup.webp'), width: 1200, height: 630 },
    ],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Gratis nettverktøy - bildekonverterere, SEO, farger, favicon',
  description:
    'Gratis nettverktøy: 24 bildekonverterere (JPG, PNG, WebP, SVG, BMP,, GIF, AVIF, HEIC, TIFF), favicon-generator, bildeeditor, tekstteller, fargepaletter og QR-koder. Uten registrering.',
  url: toAbsoluteUrl('/no/verktoy'),
  inLanguage: 'no',
  isPartOf: { '@type': 'WebSite', name: 'Arteon Agency', url: siteUrl },
  about: [
    { '@type': 'Thing', name: 'Bildeoptimalisering' },
    { '@type': 'Thing', name: 'SEO' },
    { '@type': 'Thing', name: 'Farger og merkevarebygging' },
    { '@type': 'Thing', name: 'Generatorer' },
  ],
  mainEntity: {
    '@type': 'ItemList',

    itemListElement: [
      {
        '@type': 'WebApplication',
        position: 1,
        name: 'JPG/PNG til WebP-konverterer',
        url: toAbsoluteUrl('/no/verktoy/jpg-til-webp-konverterer'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 2,
        name: 'Bilderedigerer',
        url: toAbsoluteUrl('/no/verktoy/bilderedigerer'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 3,
        name: 'Favicon-generator',
        url: toAbsoluteUrl('/no/verktoy/gratis-favicon-generator'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 4,
        name: 'Meta-tittel- og beskrivelsessjekker',
        url: toAbsoluteUrl('/no/verktoy/meta-tittel-og-beskrivelse-sjekker'),
        applicationCategory: 'DeveloperApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 5,
        name: 'E-postsignatur-generator',
        url: toAbsoluteUrl('/no/verktoy/gratis-e-postsignatur-generator'),
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 6,
        name: 'Fargekontrastsjekker',
        url: toAbsoluteUrl('/no/verktoy/fargekontrastsjekker'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 7,
        name: 'Fargeutrekker fra bilde',
        url: toAbsoluteUrl('/no/verktoy/fargeutrekker-fra-bilde'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 8,
        name: 'Fargepalettgenerator',
        url: toAbsoluteUrl('/no/verktoy/fargepalettgenerator'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 9,
        name: 'Ord- og tegnteller',
        url: toAbsoluteUrl('/no/verktoy/ord-og-tegnteller'),
        applicationCategory: 'DeveloperApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 10,
        name: 'Gratis QR-kode-generator',
        url: toAbsoluteUrl('/no/verktoy/gratis-qr-kode-generator'),
        applicationCategory: 'UtilityApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 11,
        name: 'JPG til WebP-konverterer',
        description: 'Konverter JPG-bilder til lett WebP. Spar opptil 35% filstørrelse.',
        url: toAbsoluteUrl('/no/verktoy/jpg-til-webp-konverterer'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 12,
        name: 'PNG til JPG-konverterer',
        description:
          'Konverter PNG-filer til JPG i nettleseren. Uten begrensning, uten registrering.',
        url: toAbsoluteUrl('/no/verktoy/png-til-jpg-konverterer'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 13,
        name: 'WebP til JPG-konverterer',
        description: 'Konverter WebP-filer til universelt kompatibelt JPG.',
        url: toAbsoluteUrl('/no/verktoy/webp-til-jpg-konverterer'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 14,
        name: 'PNG til WebP-konverterer',
        description: 'Konverter PNG-grafikk til WebP. Mindre filer med bevart gjennomsiktighet.',
        url: toAbsoluteUrl('/no/verktoy/png-til-webp-konverterer'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 15,
        name: 'JPG til PNG-konverterer',
        description: 'Konverter JPG-bilder til tapsfritt PNG. Lokal konvertering i nettleseren.',
        url: toAbsoluteUrl('/no/verktoy/jpg-til-png-konverterer'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 16,
        name: 'WebP til PNG-konverterer',
        description: 'Konverter WebP-bilder til tapsfritt PNG. Lokal konvertering.',
        url: toAbsoluteUrl('/no/verktoy/webp-til-png-konverterer'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 17,
        name: 'SVG til PNG-konverterer',
        description:
          'Konverter SVG-vektorgrafikk til PNG. Ideell for dokumenter og sosiale medier.',
        url: toAbsoluteUrl('/no/verktoy/svg-til-png-konverterer'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 18,
        name: 'SVG til JPG-konverterer',
        description: 'Konverter SVG-grafikk til kompakt JPG. Mindre fil, full kompatibilitet.',
        url: toAbsoluteUrl('/no/verktoy/svg-til-jpg-konverterer'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 19,
        name: 'BMP til JPG-konverterer',
        description: 'Konverter BMP-filer til lett JPG. Drastisk størrelsesreduksjon.',
        url: toAbsoluteUrl('/no/verktoy/bmp-til-jpg-konverterer'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 20,
        name: 'BMP til PNG-konverterer',
        description: 'Konverter BMP-bilder til tapsfritt PNG. Kvalitet bevart, størrelse redusert.',
        url: toAbsoluteUrl('/no/verktoy/bmp-til-png-konverterer'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 21,
        name: 'GIF til PNG-konverterer',
        description: 'Eksporter det første bildet i en GIF som statisk PNG. Uten kvalitetstap.',
        url: toAbsoluteUrl('/no/verktoy/gif-til-png-konverterer'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 22,
        name: 'GIF til JPG-konverterer',
        description: 'Eksporter det første bildet i en GIF som kompakt JPG. Mindre fil.',
        url: toAbsoluteUrl('/no/verktoy/gif-til-jpg-konverterer'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 23,
        name: 'SVG til WebP-konverterer',
        description: 'Konverter SVG-grafikk til lett WebP. Ideell for nettsider.',
        url: toAbsoluteUrl('/no/verktoy/svg-til-webp-konverterer'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 24,
        name: 'GIF til WebP-konverterer',
        description: 'Eksporter forste GIF-bilde som lett WebP. Mindre fil.',
        url: toAbsoluteUrl('/no/verktoy/gif-til-webp-konverterer'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 25,
        name: 'BMP til WebP-konverterer',
        description: 'Konverter BMP-filer til lett WebP. Opptil 95% mindre.',
        url: toAbsoluteUrl('/no/verktoy/bmp-til-webp-konverterer'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 26,
        name: 'AVIF til JPG-konverterer',
        description: 'Konverter AVIF-filer til universell JPG. Kompatibel overalt.',
        url: toAbsoluteUrl('/no/verktoy/avif-til-jpg-konverterer'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 27,
        name: 'AVIF til PNG-konverterer',
        description: 'Konverter AVIF-filer til tapsfri PNG. Full kvalitet.',
        url: toAbsoluteUrl('/no/verktoy/avif-til-png-konverterer'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 28,
        name: 'AVIF til WebP-konverterer',
        description: 'Konverter AVIF-filer til WebP. Bred kompatibilitet.',
        url: toAbsoluteUrl('/no/verktoy/avif-til-webp-konverterer'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 29,
        name: 'HEIC til JPG-konverterer',
        description: 'Konverter iPhone HEIC-bilder til universell JPG. Ingen registrering.',
        url: toAbsoluteUrl('/no/verktoy/heic-til-jpg-konverterer'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 30,
        name: 'HEIC til PNG-konverterer',
        description: 'Konverter iPhone HEIC-bilder til tapsfri PNG.',
        url: toAbsoluteUrl('/no/verktoy/heic-til-png-konverterer'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 31,
        name: 'HEIC til WebP-konverterer',
        description: 'Konverter iPhone HEIC-bilder til lett WebP.',
        url: toAbsoluteUrl('/no/verktoy/heic-til-webp-konverterer'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 32,
        name: 'TIFF til JPG-konverterer',
        description: 'Konverter TIFF-filer til kompakt JPG. Ideell for skanninger.',
        url: toAbsoluteUrl('/no/verktoy/tiff-til-jpg-konverterer'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 33,
        name: 'TIFF til PNG-konverterer',
        description: 'Konverter TIFF-filer til tapsfri PNG.',
        url: toAbsoluteUrl('/no/verktoy/tiff-til-png-konverterer'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 34,
        name: 'TIFF til WebP-konverterer',
        description: 'Konverter TIFF-filer til lett WebP. Massiv reduksjon.',
        url: toAbsoluteUrl('/no/verktoy/tiff-til-webp-konverterer'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 35,
        name: 'JPG til AVIF-konverterer',
        description:
          'Konverter JPG-bilder til moderne AVIF. Opptil 50% bedre komprimering enn JPG.',
        url: toAbsoluteUrl('/no/verktoy/jpg-til-avif-konverterer'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 36,
        name: 'PNG til AVIF-konverterer',
        description:
          'Konverter PNG-grafikk til AVIF med transparensstotte. Betydelig mindre filer.',
        url: toAbsoluteUrl('/no/verktoy/png-til-avif-konverterer'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 37,
        name: 'WebP til AVIF-konverterer',
        description: 'Konverter WebP-filer til AVIF. Enda bedre komprimering i et moderne format.',
        url: toAbsoluteUrl('/no/verktoy/webp-til-avif-konverterer'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 38,
        name: 'SVG til AVIF-konverterer',
        description: 'Konverter vektor-SVG-grafikk til kompakt AVIF-rasterformat.',
        url: toAbsoluteUrl('/no/verktoy/svg-til-avif-konverterer'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 39,
        name: 'BMP til AVIF-konverterer',
        description: 'Konverter ukomprimerte BMP-filer til ultrakompakt AVIF.',
        url: toAbsoluteUrl('/no/verktoy/bmp-til-avif-konverterer'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 40,
        name: 'GIF til AVIF-konverterer',
        description: 'Konverter forste GIF-bilde til statisk AVIF-bilde med utmerket komprimering.',
        url: toAbsoluteUrl('/no/verktoy/gif-til-avif-konverterer'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 41,
        name: 'HEIC til AVIF-konverterer',
        description: 'Konverter iPhone HEIC-bilder til moderne AVIF-format.',
        url: toAbsoluteUrl('/no/verktoy/heic-til-avif-konverterer'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 42,
        name: 'TIFF til AVIF-konverterer',
        description: 'Konverter TIFF-filer til moderne AVIF. Massiv filstorrelsesreduksjon.',
        url: toAbsoluteUrl('/no/verktoy/tiff-til-avif-konverterer'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 43,
        name: 'JPG til GIF-konverterer',
        description: 'Konverter JPG-bilder til GIF-format. Perfekt for enkel grafikk og ikoner.',
        url: toAbsoluteUrl('/no/verktoy/jpg-til-gif-konverterer'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 44,
        name: 'PNG til GIF-konverterer',
        description: 'Konverter PNG-grafikk til GIF. Ideell for enkle ikoner og grafikk.',
        url: toAbsoluteUrl('/no/verktoy/png-til-gif-konverterer'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 45,
        name: 'WebP til GIF-konverterer',
        description: 'Konverter WebP-bilder til GIF-format for maksimal kompatibilitet.',
        url: toAbsoluteUrl('/no/verktoy/webp-til-gif-konverterer'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 46,
        name: 'SVG til GIF-konverterer',
        description: 'Konverter vektor-SVG-grafikk til GIF-rasterformat.',
        url: toAbsoluteUrl('/no/verktoy/svg-til-gif-konverterer'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 47,
        name: 'BMP til GIF-konverterer',
        description: 'Konverter ukomprimerte BMP-filer til lettvekts GIF.',
        url: toAbsoluteUrl('/no/verktoy/bmp-til-gif-konverterer'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 48,
        name: 'JPG til TIFF-konverterer',
        description: 'Konverter JPG-bilder til tapsfritt TIFF. For utskrift og arkivering.',
        url: toAbsoluteUrl('/no/verktoy/jpg-til-tiff-konverterer'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 49,
        name: 'PNG til TIFF-konverterer',
        description: 'Konverter PNG-grafikk til profesjonelt TIFF-format.',
        url: toAbsoluteUrl('/no/verktoy/png-til-tiff-konverterer'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 50,
        name: 'WebP til TIFF-konverterer',
        description: 'Konverter WebP-bilder til profesjonelt TIFF for utskrift og arkivering.',
        url: toAbsoluteUrl('/no/verktoy/webp-til-tiff-konverterer'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 51,
        name: 'SVG til TIFF-konverterer',
        description: 'Konverter vektor-SVG-grafikk til hoykvalitets TIFF-raster.',
        url: toAbsoluteUrl('/no/verktoy/svg-til-tiff-konverterer'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 52,
        name: 'BMP til TIFF-konverterer',
        description: 'Konverter BMP-filer til profesjonelt TIFF-format for utskrift.',
        url: toAbsoluteUrl('/no/verktoy/bmp-til-tiff-konverterer'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 53,
        name: 'HEIC til TIFF-konverterer',
        description: 'Konverter iPhone HEIC-bilder til profesjonelt TIFF-format.',
        url: toAbsoluteUrl('/no/verktoy/heic-til-tiff-konverterer'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
    ],
  },
};

const faqItems = [
  {
    question: 'Hva koster verktoyene?',
    answer: 'Ingenting. Alle verktoy er gratis, uten abonnement og uten skjulte gebyrer.',
  },
  {
    question: 'Sendes filene mine til en server?',
    answer:
      'Nei. Alle verktoy kjorer helt i nettleseren. Filene forlater aldri datamaskinen og lagres ikke noe sted.',
  },
  {
    question: 'Trenger jeg en konto?',
    answer: 'Nei. Du kan bruke dem umiddelbart uten aa logge inn eller opprette en konto.',
  },
  {
    question: 'Er det noen bruksgrense?',
    answer:
      'Nei. Bruk uten begrensninger -- ingen daglig grense, ingen filgrense, ingen konverteringsgrense.',
  },
  {
    question: 'Hva er verktoyene til?',
    answer:
      'De hjelper med aa forberede materialer for nettsider, sosiale medier og trykk: optimalisere bilder, lage faviconer, sjekke tekstlengde, lage QR-koder, velge farger og sjekke lesbarheten.',
  },
  {
    question: 'Fungerer verktoyene paa mobil?',
    answer:
      'Ja, men noen verktoy (WebP-konverterer, favicon-generator) fungerer bedre paa desktop, da de behandler storre filer.',
  },
];

export default function ToolsIndexPage() {
  return (
    <>
      <HeroBanner
        title='Gratis verktoy'
        description='24 bildformat-konverterere, bildeeditor, favicon-generator, tekstteller, fargeverktøy og QR-koder. Uten registrering, uten begrensninger.'
        backgroundImage='/assets/arteon-logo-on-mockup.webp'
        overlay='black'
      />
      <Wrapper>
        <Divider size='sm' />
        <SectionSteps
          title='Bilder og favicon'
          description='Verktoy for forberedelse av bilder, grafikk og ikoner for nettsider og sosiale medier.'
          grid='three'
          items={[
            {
              icon: <RiCropLine className={largeIconSizeClasses} />,
              title: 'Bildeeditor',
              topImageAlt: 'Bildeeditor Arteon',
              topImageSrc:
                '/assets/tools/free-image-editor-crop-resize-and-convert/bilderedigerer-no.webp',
              description: (
                <div className='flex h-full flex-col'>
                  <p>
                    Forbered det perfekte bildet for sosiale medier eller nettstedet ditt. Velg et
                    ferdig format eller angi egne pikselmål og last ned bildet som PNG, JPG eller
                    WebP.
                  </p>
                  <div className='mt-4'>
                    <ButtonLink arrow href='/no/verktoy/bilderedigerer'>
                      Åpne verktøy
                    </ButtonLink>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiAppsLine className={largeIconSizeClasses} />,
              title: 'Favicon- og ikongenerator',
              topImageAlt: 'Favicon-generator Arteon',
              topImageSrc: '/assets/tools/favicon-generator/gratis-favicon-generator-no.webp',
              description: (
                <div className='flex h-full flex-col'>
                  <p>
                    Lag <strong>favicon.ico</strong> og PNG-ikoner 180x180, 192x192 og 512x512 fra
                    ett enkelt bilde -- i samsvar med nettleser- og Lighthouse-krav.
                  </p>
                  <div className='mt-4'>
                    <ButtonLink arrow href='/no/verktoy/gratis-favicon-generator'>
                      Aapne verktoyet
                    </ButtonLink>
                  </div>
                </div>
              ),
            },
          ]}
        />
        <Divider size='sm' />

        <SectionSteps
          title='Tekst og SEO'
          description='Verktoy for kontroll av tekstlengde, meta-tagger og forhaandsvisning av siden i sokeresultater.'
          grid='three'
          items={[
            {
              icon: <RiFileTextLine className={largeIconSizeClasses} />,
              title: 'Meta-tittel- og beskrivelsessjekker',
              topImageAlt: 'Meta-tittel- og beskrivelsessjekker Arteon',
              topImageSrc:
                '/assets/tools/free-meta-title-and-description-checker-pixel-width/meta-tittel-og-beskrivelse-sjekker-no.webp',
              description: (
                <div className='flex h-full flex-col'>
                  <p>
                    Sjekk antall tegn, antall ord og pikselbredde -- med Google-forhaandsvisning.
                    Unngaa avkortede titler og beskrivelser i sokeresultatene.
                  </p>
                  <div className='mt-4'>
                    <ButtonLink arrow href='/no/verktoy/meta-tittel-og-beskrivelse-sjekker'>
                      Aapne verktoyet
                    </ButtonLink>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiArticleLine className={largeIconSizeClasses} />,
              title: 'Ord- og tegnteller',
              topImageAlt: 'Ord- og tegnteller Arteon',
              topImageSrc:
                '/assets/tools/word-and-character-counter-with-text-formatting-tools/ord-og-tegnteller-no.webp',
              description: (
                <div className='flex h-full flex-col'>
                  <p>
                    Sjekk tekstlengden og vurder om den passer for en forside, tjenesteside,
                    blogginnlegg eller produktbeskrivelse. Verktoyet teller ord, tegn, avsnitt og
                    lesetid.
                  </p>
                  <div className='mt-4'>
                    <ButtonLink arrow href='/no/verktoy/ord-og-tegnteller'>
                      Aapne verktoyet
                    </ButtonLink>
                  </div>
                </div>
              ),
            },

            {
              icon: <RiFileTextLine className={largeIconSizeClasses} />,
              title: 'Lorem Ipsum-generator',
              topImageAlt: 'Lorem Ipsum-generator Arteon',
              topImageSrc: '/assets/tools/lorem-ipsum-generator/lorem-ipsum-generator-no.webp',
              description: (
                <div className='flex h-full flex-col'>
                  <p>
                    Generer utfyllingstekst i 8 stiler og 9 modi. Lorem Ipsum, Hipster, Business,
                    Bacon og mer. Kopier som tekst eller HTML.
                  </p>
                  <div className='mt-4'>
                    <ButtonLink arrow href='/no/verktoy/lorem-ipsum-generator'>
                      Åpne verktøy
                    </ButtonLink>
                  </div>
                </div>
              ),
            },
          ]}
        />
        <Divider size='sm' />
        <SectionSteps
          title='E-post og kommunikasjon'
          description='Verktoy for profesjonell e-postkommunikasjon og konsekvent merkevarebilde.'
          grid='three'
          items={[
            {
              icon: <RiMailLine className={largeIconSizeClasses} />,
              title: 'Gratis HTML e-postsignatur-generator',
              topImageAlt: 'Gratis e-postsignatur-generator Arteon',
              topImageSrc:
                '/assets/tools/free-html-email-signature-generator/gratis-e-postsignatur-generator-no.webp',
              description: (
                <div className='flex h-full flex-col'>
                  <p>
                    Lag en profesjonell e-postsignatur paa faa minutter. Skriv inn informasjonen
                    din, velg farger og kopier den ferdige HTML-koden til Gmail, Outlook eller en
                    annen e-postklient.
                  </p>
                  <div className='mt-4'>
                    <ButtonLink arrow href='/no/verktoy/gratis-e-postsignatur-generator'>
                      Aapne verktoyet
                    </ButtonLink>
                  </div>
                </div>
              ),
            },
          ]}
        />
        <Divider size='sm' />
        <SectionSteps
          title='QR-kode'
          description='QR-kode-generator for nettsider, visittkort, menyer og trykkmateriell.'
          grid='three'
          items={[
            {
              icon: <RiQrCodeLine className={largeIconSizeClasses} />,
              title: 'Gratis QR-kode-generator',
              topImageAlt: 'Gratis QR-kode-generator Arteon',
              topImageSrc: '/assets/tools/qr-code-generator/gratis-qr-kode-generator-no.webp',
              description: (
                <div className='flex h-full flex-col'>
                  <p>
                    Lag en QR-kode for en nettside, vCard, restaurantmeny eller flygeblad. Eksporter
                    til PNG og SVG -- uten innlogging, uten begrensninger.
                  </p>
                  <div className='mt-4'>
                    <ButtonLink arrow href='/no/verktoy/gratis-qr-kode-generator'>
                      Aapne verktoyet
                    </ButtonLink>
                  </div>
                </div>
              ),
            },
          ]}
        />
        <Divider size='sm' />
        <SectionSteps
          title='Farger og tilgjengelighet'
          description='Verktoy for aa jobbe med farger, kontrast og WCAG-tilgjengelighet.'
          grid='three'
          items={[
            {
              icon: <RiContrast2Line className={largeIconSizeClasses} />,
              title: 'Fargekontrastsjekker',
              topImageAlt: 'Fargekontrastsjekker Arteon',
              topImageSrc:
                '/assets/tools/color-contrast-and-readability-checker/fargekontrastsjekker-no.webp',
              description: (
                <div className='flex h-full flex-col'>
                  <p>
                    Sjekk om tekst- og bakgrunnsfargene er lesbare. Skriv inn fargekoder, se
                    kontrastforholdet i henhold til <strong>WCAG</strong> og bruk{' '}
                    <strong>Match</strong>-funksjonen for automatisk korrigering.
                  </p>
                  <div className='mt-4'>
                    <ButtonLink arrow href='/no/verktoy/fargekontrastsjekker'>
                      Aapne verktoyet
                    </ButtonLink>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiPantoneLine className={largeIconSizeClasses} />,
              title: 'Fargeutrekker fra bilde',
              topImageAlt: 'Fargeutrekker fra bilde Arteon',
              topImageSrc: '/assets/tools/image-color-extractor/fargeutrekker-fra-bilde-no.webp',
              description: (
                <div className='flex h-full flex-col'>
                  <p>
                    Last opp et foto eller en logo -- verktoyet trekker ut de dominerende fargene.
                    Kopier HEX-koder med ett klikk og bruk dem hvor som helst.
                  </p>
                  <div className='mt-4'>
                    <ButtonLink arrow href='/no/verktoy/fargeutrekker-fra-bilde'>
                      Aapne verktoyet
                    </ButtonLink>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiPaletteLine className={largeIconSizeClasses} />,
              title: 'Fargepalettgenerator',
              topImageAlt: 'Fargepalettgenerator Arteon',
              topImageSrc: '/assets/tools/color-palette-generator/fargepalettgenerator-no.webp',
              description: (
                <div className='flex h-full flex-col'>
                  <p>
                    Velg en basisfarge og lag 9 fargepaletter: monokromatisk, komplementaer,
                    triadisk, pastell, mork og flere. Kopier HEX-koder med ett klikk.
                  </p>
                  <div className='mt-4'>
                    <ButtonLink arrow href='/no/verktoy/fargepalettgenerator'>
                      Aapne verktoyet
                    </ButtonLink>
                  </div>
                </div>
              ),
            },
          ]}
        />
        <Divider size='sm' />

        <SectionSteps
          title='Bildformat-konverterere'
          description='12 bildekonverterere - konverter mellom JPG, PNG, WebP, SVG, BMP og GIF. Konvertering i nettleseren, ingen filer sendes.'
          grid='three'
          items={[
            {
              icon: <RiLoopLeftLine className={largeIconSizeClasses} />,
              title: 'JPG til WebP-konverterer',
              topImageAlt: 'JPG til WebP-konverterer Arteon',
              topImageSrc:
                '/assets/tools/jpg-png-to-webp-converter/jpg-png-til-webp-konverterer-no.webp',
              description: (
                <div className='flex h-full flex-col'>
                  <p>Konverter JPG-bilder til lett WebP. Spar opptil 35% filstørrelse.</p>
                  <div className='mt-4'>
                    <ButtonLink arrow href='/no/verktoy/jpg-til-webp-konverterer'>
                      Åpne verktøy
                    </ButtonLink>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiLoopLeftLine className={largeIconSizeClasses} />,
              title: 'PNG til JPG-konverterer',
              topImageAlt: 'PNG til JPG-konverterer Arteon',
              topImageSrc:
                '/assets/tools/jpg-png-to-webp-converter/jpg-png-til-webp-konverterer-no.webp',
              description: (
                <div className='flex h-full flex-col'>
                  <p>
                    Konverter PNG-filer til JPG i nettleseren. Uten begrensning, uten registrering.
                  </p>
                  <div className='mt-4'>
                    <ButtonLink arrow href='/no/verktoy/png-til-jpg-konverterer'>
                      Åpne verktøy
                    </ButtonLink>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiLoopLeftLine className={largeIconSizeClasses} />,
              title: 'WebP til JPG-konverterer',
              topImageAlt: 'WebP til JPG-konverterer Arteon',
              topImageSrc:
                '/assets/tools/jpg-png-to-webp-converter/jpg-png-til-webp-konverterer-no.webp',
              description: (
                <div className='flex h-full flex-col'>
                  <p>Konverter WebP-filer til universelt kompatibelt JPG.</p>
                  <div className='mt-4'>
                    <ButtonLink arrow href='/no/verktoy/webp-til-jpg-konverterer'>
                      Åpne verktøy
                    </ButtonLink>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiLoopLeftLine className={largeIconSizeClasses} />,
              title: 'PNG til WebP-konverterer',
              topImageAlt: 'PNG til WebP-konverterer Arteon',
              topImageSrc:
                '/assets/tools/jpg-png-to-webp-converter/jpg-png-til-webp-konverterer-no.webp',
              description: (
                <div className='flex h-full flex-col'>
                  <p>Konverter PNG-grafikk til WebP. Mindre filer med bevart gjennomsiktighet.</p>
                  <div className='mt-4'>
                    <ButtonLink arrow href='/no/verktoy/png-til-webp-konverterer'>
                      Åpne verktøy
                    </ButtonLink>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiLoopLeftLine className={largeIconSizeClasses} />,
              title: 'JPG til PNG-konverterer',
              topImageAlt: 'JPG til PNG-konverterer Arteon',
              topImageSrc:
                '/assets/tools/jpg-png-to-webp-converter/jpg-png-til-webp-konverterer-no.webp',
              description: (
                <div className='flex h-full flex-col'>
                  <p>Konverter JPG-bilder til tapsfritt PNG. Lokal konvertering i nettleseren.</p>
                  <div className='mt-4'>
                    <ButtonLink arrow href='/no/verktoy/jpg-til-png-konverterer'>
                      Åpne verktøy
                    </ButtonLink>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiLoopLeftLine className={largeIconSizeClasses} />,
              title: 'WebP til PNG-konverterer',
              topImageAlt: 'WebP til PNG-konverterer Arteon',
              topImageSrc:
                '/assets/tools/jpg-png-to-webp-converter/jpg-png-til-webp-konverterer-no.webp',
              description: (
                <div className='flex h-full flex-col'>
                  <p>Konverter WebP-bilder til tapsfritt PNG. Lokal konvertering.</p>
                  <div className='mt-4'>
                    <ButtonLink arrow href='/no/verktoy/webp-til-png-konverterer'>
                      Åpne verktøy
                    </ButtonLink>
                  </div>
                </div>
              ),
            },
          ]}
        />
        <Divider size='sm' />

        <SectionSteps
          title='Datakonverterere'
          description='Online dataformatkonverterere — konverter mellom CSV, JSON, XML, YAML, Markdown og HTML. Behandling i nettleseren.'
          grid='three'
          items={[
            {
              icon: <RiLoopLeftLine className={largeIconSizeClasses} />,
              title: 'CSV til JSON',
              topImageAlt: 'CSV til JSON Arteon',
              topImageSrc:
                '/assets/tools/jpg-png-to-webp-converter/jpg-png-til-webp-konverterer-no.webp',
              description: (
                <div className='flex h-full flex-col'>
                  <p>
                    Konverter CSV til JSON-format. Automatisk separatordeteksjon og formatering.
                  </p>
                  <div className='mt-4'>
                    <ButtonLink arrow href='/no/verktoy/csv-til-json-konverterer'>
                      Åpne verktøy
                    </ButtonLink>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiLoopLeftLine className={largeIconSizeClasses} />,
              title: 'JSON til CSV',
              topImageAlt: 'JSON til CSV Arteon',
              topImageSrc:
                '/assets/tools/jpg-png-to-webp-converter/jpg-png-til-webp-konverterer-no.webp',
              description: (
                <div className='flex h-full flex-col'>
                  <p>Konverter JSON-data til CSV-format. Behandling i nettleseren.</p>
                  <div className='mt-4'>
                    <ButtonLink arrow href='/no/verktoy/json-til-csv-konverterer'>
                      Åpne verktøy
                    </ButtonLink>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiLoopLeftLine className={largeIconSizeClasses} />,
              title: 'XML til JSON',
              topImageAlt: 'XML til JSON Arteon',
              topImageSrc:
                '/assets/tools/jpg-png-to-webp-converter/jpg-png-til-webp-konverterer-no.webp',
              description: (
                <div className='flex h-full flex-col'>
                  <p>Konverter XML-data til JSON. Nettleserbasert konvertering med validering.</p>
                  <div className='mt-4'>
                    <ButtonLink arrow href='/no/verktoy/xml-til-json-konverterer'>
                      Åpne verktøy
                    </ButtonLink>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiLoopLeftLine className={largeIconSizeClasses} />,
              title: 'JSON til XML',
              topImageAlt: 'JSON til XML Arteon',
              topImageSrc:
                '/assets/tools/jpg-png-to-webp-converter/jpg-png-til-webp-konverterer-no.webp',
              description: (
                <div className='flex h-full flex-col'>
                  <p>Konverter JSON-data til gyldig XML. Konvertering med formatering.</p>
                  <div className='mt-4'>
                    <ButtonLink arrow href='/no/verktoy/json-til-xml-konverterer'>
                      Åpne verktøy
                    </ButtonLink>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiLoopLeftLine className={largeIconSizeClasses} />,
              title: 'YAML til JSON',
              topImageAlt: 'YAML til JSON Arteon',
              topImageSrc:
                '/assets/tools/jpg-png-to-webp-converter/jpg-png-til-webp-konverterer-no.webp',
              description: (
                <div className='flex h-full flex-col'>
                  <p>Konverter YAML-konfigurasjon til JSON. Validering og formatering.</p>
                  <div className='mt-4'>
                    <ButtonLink arrow href='/no/verktoy/yaml-til-json-konverterer'>
                      Åpne verktøy
                    </ButtonLink>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiLoopLeftLine className={largeIconSizeClasses} />,
              title: 'JSON til YAML',
              topImageAlt: 'JSON til YAML Arteon',
              topImageSrc:
                '/assets/tools/jpg-png-to-webp-converter/jpg-png-til-webp-konverterer-no.webp',
              description: (
                <div className='flex h-full flex-col'>
                  <p>Konverter JSON-data til lesbar YAML. Behandling i nettleseren.</p>
                  <div className='mt-4'>
                    <ButtonLink arrow href='/no/verktoy/json-til-yaml-konverterer'>
                      Åpne verktøy
                    </ButtonLink>
                  </div>
                </div>
              ),
            },
          ]}
        />

        <Divider size='sm' />

        <Divider line />
        <SectionInfo title='Hva er Arteons verktoy?'>
          <p className='mb-4'>
            10 gratis verktoy for forberedelse av materialer for nettsider, sosiale medier og trykk
            -- WebP-konverterer, favicon-generator, tekstteller, fargeutrekker, palettgenerator og
            QR-kode.
          </p>
          <p>
            Alle verktoy kjorer i nettleseren -- filer sendes aldri til en server. Bruk uten
            registrering og uten begrensninger.
          </p>
        </SectionInfo>
        <Divider line />
        <SectionSteps
          title='Hvorfor bruke Arteons verktoy?'
          grid='two'
          items={[
            {
              icon: <RiShieldCheckLine className={normalIconSizeClasses} />,
              title: 'Fullt personvern',
              description:
                'Alle verktoy behandler filer lokalt i nettleseren. Ingenting sendes til en server -- data forsvinner naar du lukker fanen.',
            },
            {
              icon: <RiInfinityFill className={normalIconSizeClasses} />,
              title: 'Uten bruksgrense',
              description:
                'Bruk uten begrensninger -- ingen daglig grense, ingen filgrense, ingen konverteringsgrense. Saa mange ganger du trenger.',
            },
            {
              icon: <RiLockLine className={normalIconSizeClasses} />,
              title: 'Uten registrering',
              description: 'Ingen konto nodvendig. Aapne verktoyet, bruk det, ferdig.',
            },
            {
              icon: <RiGlobalLine className={normalIconSizeClasses} />,
              title: 'Tilgjengelig paa norsk',
              description:
                'Alle verktoy er tilgjengelige paa norsk -- grensesnitt, veiledninger og meldinger.',
            },
          ]}
        />

        <Divider line />
        <SectionFaqPanels items={faqItems} title='Ofte stilte sporsmaal om vaare verktoy' />
        <Divider size='sm' />
      </Wrapper>
      <Script id='ld-json-tools-no' type='application/ld+json' strategy='afterInteractive'>
        {JSON.stringify(schema)}
      </Script>
    </>
  );
}
