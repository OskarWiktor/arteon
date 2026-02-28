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
  title: 'Gratis onlineværktøjer | Konvertere, SEO, farver, favicon',
  description:
    'Gratis onlineværktøjer: 12 billedkonvertere (JPG, PNG, WebP, SVG, BMP,, GIF, AVIF, HEIC, TIFF), favicon-generator, billedredaktør, teksttæller, farvepaletter og QR-koder. Uden registrering.',
  alternates: getToolsIndexAlternates('da'),
  openGraph: {
    title: 'Gratis onlineværktøjer | Konvertere, SEO, farver, favicon',
    description:
      'Gratis onlineværktøjer: 12 billedkonvertere (JPG, PNG, WebP, SVG, BMP,, GIF, AVIF, HEIC, TIFF), favicon-generator, billedredaktør, teksttæller, farvepaletter og QR-koder. Uden registrering.',
    url: toAbsoluteUrl('/da/vaerktojer'),
    type: 'website',
    images: [{ url: toAbsoluteUrl('/assets/arteon-logo-on-mockup.webp'), width: 1200, height: 630 }],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Gratis onlineværktøjer — billedkonvertere, SEO, farver, favicon',
  description:
    'Gratis onlineværktøjer: 12 billedkonvertere (JPG, PNG, WebP, SVG, BMP,, GIF, AVIF, HEIC, TIFF), favicon-generator, billedredaktør, teksttæller, farvepaletter og QR-koder. Uden registrering.',
  url: toAbsoluteUrl('/da/vaerktojer'),
  inLanguage: 'da',
  isPartOf: { '@type': 'WebSite', name: 'Arteon Agency', url: siteUrl },
  about: [
    { '@type': 'Thing', name: 'Billedoptimering' },
    { '@type': 'Thing', name: 'SEO' },
    { '@type': 'Thing', name: 'Farver og branding' },
    { '@type': 'Thing', name: 'Generatorer' },
  ],
  mainEntity: {
    '@type': 'ItemList',

    itemListElement: [
      {
        '@type': 'WebApplication',
        position: 1,
        name: 'JPG/PNG til WebP-konverter',
        url: toAbsoluteUrl('/da/vaerktojer/jpg-til-webp-konverter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      { '@type': 'WebApplication', position: 2, name: 'Billedrediger', url: toAbsoluteUrl('/da/vaerktojer/billedrediger'), applicationCategory: 'MultimediaApplication', operatingSystem: 'Any' },
      {
        '@type': 'WebApplication',
        position: 3,
        name: 'Favicon-generator',
        url: toAbsoluteUrl('/da/vaerktojer/gratis-favicon-generator'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 4,
        name: 'Meta-titel og beskrivelseskontrol',
        url: toAbsoluteUrl('/da/vaerktojer/meta-titel-og-beskrivelse-kontrol'),
        applicationCategory: 'DeveloperApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 5,
        name: 'E-mail-signatur-generator',
        url: toAbsoluteUrl('/da/vaerktojer/gratis-e-mail-signatur-generator'),
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 6,
        name: 'Farvekontrastkontrol',
        url: toAbsoluteUrl('/da/vaerktojer/farvekontrastkontrol'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 7,
        name: 'Farveudtraekker fra billede',
        url: toAbsoluteUrl('/da/vaerktojer/farveudtraekker-fra-billede'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 8,
        name: 'Farvepaletgenerator',
        url: toAbsoluteUrl('/da/vaerktojer/farvepaletgenerator'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 9,
        name: 'Ord- og tegntaeller',
        url: toAbsoluteUrl('/da/vaerktojer/ord-og-tegntaeller'),
        applicationCategory: 'DeveloperApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 10,
        name: 'Gratis QR-kode-generator',
        url: toAbsoluteUrl('/da/vaerktojer/gratis-qr-kode-generator'),
        applicationCategory: 'UtilityApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 11,
        name: 'JPG til WebP-konverter',
        description: 'Konvertér JPG-fotos til let WebP. Spar op til 35% filstørrelse.',
        url: toAbsoluteUrl('/da/vaerktojer/jpg-til-webp-konverter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 12,
        name: 'PNG til JPG-konverter',
        description: 'Konvertér PNG-filer til JPG i browseren. Uden begrænsning, uden registrering.',
        url: toAbsoluteUrl('/da/vaerktojer/png-til-jpg-konverter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 13,
        name: 'WebP til JPG-konverter',
        description: 'Konvertér WebP-filer til universelt kompatibelt JPG.',
        url: toAbsoluteUrl('/da/vaerktojer/webp-til-jpg-konverter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 14,
        name: 'PNG til WebP-konverter',
        description: 'Konvertér PNG-grafik til WebP. Mindre filer med bevaret gennemsigtighed.',
        url: toAbsoluteUrl('/da/vaerktojer/png-til-webp-konverter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 15,
        name: 'JPG til PNG-konverter',
        description: 'Konvertér JPG-billeder til tabsfrit PNG. Lokal konvertering i browseren.',
        url: toAbsoluteUrl('/da/vaerktojer/jpg-til-png-konverter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 16,
        name: 'WebP til PNG-konverter',
        description: 'Konvertér WebP-billeder til tabsfrit PNG. Lokal konvertering.',
        url: toAbsoluteUrl('/da/vaerktojer/webp-til-png-konverter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 17,
        name: 'SVG til PNG-konverter',
        description: 'Konvertér SVG-vektorgrafik til PNG. Ideel til dokumenter og sociale medier.',
        url: toAbsoluteUrl('/da/vaerktojer/svg-til-png-konverter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 18,
        name: 'SVG til JPG-konverter',
        description: 'Konvertér SVG-grafik til kompakt JPG. Mindre fil, fuld kompatibilitet.',
        url: toAbsoluteUrl('/da/vaerktojer/svg-til-jpg-konverter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 19,
        name: 'BMP til JPG-konverter',
        description: 'Konvertér BMP-filer til let JPG. Drastisk størrelsesreduktion.',
        url: toAbsoluteUrl('/da/vaerktojer/bmp-til-jpg-konverter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 20,
        name: 'BMP til PNG-konverter',
        description: 'Konvertér BMP-billeder til tabsfrit PNG. Kvalitet bevaret, størrelse reduceret.',
        url: toAbsoluteUrl('/da/vaerktojer/bmp-til-png-konverter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 21,
        name: 'GIF til PNG-konverter',
        description: 'Eksportér den første frame af en GIF som statisk PNG. Uden kvalitetstab.',
        url: toAbsoluteUrl('/da/vaerktojer/gif-til-png-konverter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 22,
        name: 'GIF til JPG-konverter',
        description: 'Eksportér den første frame af en GIF som kompakt JPG. Mindre fil.',
        url: toAbsoluteUrl('/da/vaerktojer/gif-til-jpg-konverter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 23,
        name: 'SVG til WebP-konverter',
        description: 'Konverter SVG-grafik til let WebP. Ideel til websites.',
        url: toAbsoluteUrl('/da/vaerktojer/svg-til-webp-konverter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 24,
        name: 'GIF til WebP-konverter',
        description: 'Eksporter forste GIF-frame som let WebP. Mindre fil.',
        url: toAbsoluteUrl('/da/vaerktojer/gif-til-webp-konverter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 25,
        name: 'BMP til WebP-konverter',
        description: 'Konverter BMP-filer til let WebP. Op til 95% mindre.',
        url: toAbsoluteUrl('/da/vaerktojer/bmp-til-webp-konverter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 26,
        name: 'AVIF til JPG-konverter',
        description: 'Konverter AVIF-filer til universel JPG. Kompatibel overalt.',
        url: toAbsoluteUrl('/da/vaerktojer/avif-til-jpg-konverter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 27,
        name: 'AVIF til PNG-konverter',
        description: 'Konverter AVIF-filer til tabsfri PNG. Fuld kvalitet.',
        url: toAbsoluteUrl('/da/vaerktojer/avif-til-png-konverter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 28,
        name: 'AVIF til WebP-konverter',
        description: 'Konverter AVIF-filer til WebP. Bred kompatibilitet.',
        url: toAbsoluteUrl('/da/vaerktojer/avif-til-webp-konverter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 29,
        name: 'HEIC til JPG-konverter',
        description: 'Konverter iPhone HEIC-fotos til universel JPG. Ingen registrering.',
        url: toAbsoluteUrl('/da/vaerktojer/heic-til-jpg-konverter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 30,
        name: 'HEIC til PNG-konverter',
        description: 'Konverter iPhone HEIC-fotos til tabsfri PNG.',
        url: toAbsoluteUrl('/da/vaerktojer/heic-til-png-konverter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 31,
        name: 'HEIC til WebP-konverter',
        description: 'Konverter iPhone HEIC-fotos til let WebP.',
        url: toAbsoluteUrl('/da/vaerktojer/heic-til-webp-konverter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 32,
        name: 'TIFF til JPG-konverter',
        description: 'Konverter TIFF-filer til kompakt JPG. Ideel til scanninger.',
        url: toAbsoluteUrl('/da/vaerktojer/tiff-til-jpg-konverter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 33,
        name: 'TIFF til PNG-konverter',
        description: 'Konverter TIFF-filer til tabsfri PNG.',
        url: toAbsoluteUrl('/da/vaerktojer/tiff-til-png-konverter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 34,
        name: 'TIFF til WebP-konverter',
        description: 'Konverter TIFF-filer til let WebP. Massiv reduktion.',
        url: toAbsoluteUrl('/da/vaerktojer/tiff-til-webp-konverter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 35,
        name: 'JPG til AVIF-konverter',
        description: 'Konverter JPG-fotos til moderne AVIF. Op til 50% bedre komprimering end JPG.',
        url: toAbsoluteUrl('/da/vaerktojer/jpg-til-avif-konverter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 36,
        name: 'PNG til AVIF-konverter',
        description: 'Konverter PNG-grafik til AVIF med gennemsigtighedsunderstottelse. Markant mindre filer.',
        url: toAbsoluteUrl('/da/vaerktojer/png-til-avif-konverter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 37,
        name: 'WebP til AVIF-konverter',
        description: 'Konverter WebP-filer til AVIF. Endnu bedre komprimering i et moderne format.',
        url: toAbsoluteUrl('/da/vaerktojer/webp-til-avif-konverter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 38,
        name: 'SVG til AVIF-konverter',
        description: 'Konverter vektor-SVG-grafik til kompakt AVIF-rasterformat.',
        url: toAbsoluteUrl('/da/vaerktojer/svg-til-avif-konverter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 39,
        name: 'BMP til AVIF-konverter',
        description: 'Konverter ukomprimerede BMP-filer til ultrakompakt AVIF.',
        url: toAbsoluteUrl('/da/vaerktojer/bmp-til-avif-konverter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 40,
        name: 'GIF til AVIF-konverter',
        description: 'Konverter forste GIF-billede til statisk AVIF-billede med fremragende komprimering.',
        url: toAbsoluteUrl('/da/vaerktojer/gif-til-avif-konverter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 41,
        name: 'HEIC til AVIF-konverter',
        description: 'Konverter iPhone HEIC-fotos til moderne AVIF-format.',
        url: toAbsoluteUrl('/da/vaerktojer/heic-til-avif-konverter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 42,
        name: 'TIFF til AVIF-konverter',
        description: 'Konverter TIFF-filer til moderne AVIF. Massiv filstorrelsesreduktion.',
        url: toAbsoluteUrl('/da/vaerktojer/tiff-til-avif-konverter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 43,
        name: 'JPG til GIF-konverter',
        description: 'Konverter JPG-fotos til GIF-format. Perfekt til simpel grafik og ikoner.',
        url: toAbsoluteUrl('/da/vaerktojer/jpg-til-gif-konverter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 44,
        name: 'PNG til GIF-konverter',
        description: 'Konverter PNG-grafik til GIF. Ideel til simple ikoner og grafik.',
        url: toAbsoluteUrl('/da/vaerktojer/png-til-gif-konverter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 45,
        name: 'WebP til GIF-konverter',
        description: 'Konverter WebP-billeder til GIF-format for maksimal kompatibilitet.',
        url: toAbsoluteUrl('/da/vaerktojer/webp-til-gif-konverter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 46,
        name: 'SVG til GIF-konverter',
        description: 'Konverter vektor-SVG-grafik til GIF-rasterformat.',
        url: toAbsoluteUrl('/da/vaerktojer/svg-til-gif-konverter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 47,
        name: 'BMP til GIF-konverter',
        description: 'Konverter ukomprimerede BMP-filer til let GIF.',
        url: toAbsoluteUrl('/da/vaerktojer/bmp-til-gif-konverter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 48,
        name: 'JPG til TIFF-konverter',
        description: 'Konverter JPG-fotos til tabsfrit TIFF. Til udskrivning og arkivering.',
        url: toAbsoluteUrl('/da/vaerktojer/jpg-til-tiff-konverter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 49,
        name: 'PNG til TIFF-konverter',
        description: 'Konverter PNG-grafik til professionelt TIFF-format.',
        url: toAbsoluteUrl('/da/vaerktojer/png-til-tiff-konverter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 50,
        name: 'WebP til TIFF-konverter',
        description: 'Konverter WebP-billeder til professionelt TIFF til udskrivning og arkivering.',
        url: toAbsoluteUrl('/da/vaerktojer/webp-til-tiff-konverter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 51,
        name: 'SVG til TIFF-konverter',
        description: 'Konverter vektor-SVG-grafik til hojkvalitets TIFF-raster.',
        url: toAbsoluteUrl('/da/vaerktojer/svg-til-tiff-konverter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 52,
        name: 'BMP til TIFF-konverter',
        description: 'Konverter BMP-filer til professionelt TIFF-format til udskrivning.',
        url: toAbsoluteUrl('/da/vaerktojer/bmp-til-tiff-konverter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 53,
        name: 'HEIC til TIFF-konverter',
        description: 'Konverter iPhone HEIC-fotos til professionelt TIFF-format.',
        url: toAbsoluteUrl('/da/vaerktojer/heic-til-tiff-konverter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
    ],
  },
};

const faqItems = [
  { question: 'Hvad koster vaerktojerne?', answer: 'Ingenting. Alle vaerktojer er gratis, uden abonnement og uden skjulte gebyrer.' },
  { question: 'Sendes mine filer til en server?', answer: 'Nej. Alle vaerktojer korer helt i browseren. Filerne forlader aldrig computeren og gemmes ikke noget sted.' },
  { question: 'Har jeg brug for en konto?', answer: 'Nej. Du kan bruge dem med det samme uden at logge ind eller oprette en konto.' },
  { question: 'Er der nogen brugsgraense?', answer: 'Nej. Brug uden begraensninger -- ingen daglig graense, ingen filgraense, ingen konverteringsgraense.' },
  {
    question: 'Hvad er vaerktojerne til?',
    answer:
      'De hjaelper med at forberede materialer til hjemmesider, sociale medier og tryk: optimere billeder, oprette favicons, kontrollere tekstlaengde, oprette QR-koder, vaelge farver og kontrollere deres laesbarhed.',
  },
  { question: 'Virker vaerktojerne pa mobilen?', answer: 'Ja, men nogle vaerktojer (WebP-konverter, favicon-generator) fungerer bedre pa desktop, da de behandler storre filer.' },
];

export default function ToolsIndexPage() {
  return (
    <>
      <HeroBanner
        title="Gratis vaerktojer"
        description="12 billedformat-konvertere, billedredaktør, favicon-generator, teksttæller, farveværktøjer og QR-koder. Uden registrering, uden begrænsninger."
        backgroundImage="/assets/arteon-logo-on-mockup.webp"
        overlay="black"
      />
      <Wrapper>
        <Gap size="sm" />
        <SectionSteps
          title="Billeder og favicon"
          description="Vaerktojer til forberedelse af fotos, grafik og ikoner til hjemmesider og sociale medier."
          grid="three"
          items={[
            {
              icon: <RiCropLine className="h-8 w-8" />,
              title: 'Online billedredaktør',
              topImageAlt: 'Online billedredaktør Arteon',
              topImageSrc: '/assets/tools/free-image-editor-crop-resize-and-convert/online-billedredaktor-da.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    Forbered den perfekte beskæring til sociale medier eller dit website. Vælg et færdigt format eller angiv brugerdefinerede pixelmål og download billedet som PNG, JPG eller WebP.
                  </p>
                  <div className="mt-4">
                    <Button arrow link="/da/vaerktojer/billedrediger">
                      Åbn værktøj
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiAppsLine className="h-8 w-8" />,
              title: 'Favicon- og ikongenerator',
              topImageAlt: 'Favicon-generator Arteon',
              topImageSrc: '/assets/tools/favicon-generator/gratis-favicon-generator-da.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    Opret <strong>favicon.ico</strong> og PNG-ikoner 180x180, 192x192 og 512x512 fra et enkelt billede -- i overensstemmelse med browserens og Lighthouse krav.
                  </p>
                  <div className="mt-4">
                    <Button arrow link="/da/vaerktojer/gratis-favicon-generator">
                      Abn vaerktojet
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />

        <SectionSteps
          title="Tekst og SEO"
          description="Vaerktojer til kontrol af tekstlaengde, meta-tags og forhadsvisning af siden i sogeresultater."
          grid="three"
          items={[
            {
              icon: <RiFileTextLine className="h-8 w-8" />,
              title: 'Meta-titel og beskrivelseskontrol',
              topImageAlt: 'Meta-titel og beskrivelseskontrol Arteon',
              topImageSrc: '/assets/tools/free-meta-title-and-description-checker-pixel-width/meta-titel-og-beskrivelse-kontrol-da.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Kontroller antal tegn, antal ord og pixelbredde -- med Google-forhadsvisning. Undga afkortede titler og beskrivelser i sogeresultaterne.</p>
                  <div className="mt-4">
                    <Button arrow link="/da/vaerktojer/meta-titel-og-beskrivelse-kontrol">
                      Abn vaerktojet
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiArticleLine className="h-8 w-8" />,
              title: 'Ord- og tegntaeller',
              topImageAlt: 'Ord- og tegntaeller Arteon',
              topImageSrc: '/assets/tools/word-and-character-counter-with-text-formatting-tools/ord-og-tegntaeller-da.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Kontroller tekstlaengden og vurder om den passer til en forside, serviceside, blogindlaeg eller produktbeskrivelse. Vaerktojet taeller ord, tegn, afsnit og laesetid.</p>
                  <div className="mt-4">
                    <Button arrow link="/da/vaerktojer/ord-og-tegntaeller">
                      Abn vaerktojet
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />
        <Gap size="sm" />
        <SectionSteps
          title="E-mail og kommunikation"
          description="Vaerktojer til professionel e-mail-kommunikation og konsekvent brand-image."
          grid="three"
          items={[
            {
              icon: <RiMailLine className="h-8 w-8" />,
              title: 'Gratis HTML e-mail-signatur-generator',
              topImageAlt: 'Gratis e-mail-signatur-generator Arteon',
              topImageSrc: '/assets/tools/free-html-email-signature-generator/gratis-e-mail-signatur-generator-da.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Opret en professionel e-mail-signatur pa fa minutter. Indtast dine oplysninger, vaelg farver og kopier den faerdige HTML-kode til Gmail, Outlook eller en anden e-mail-klient.</p>
                  <div className="mt-4">
                    <Button arrow link="/da/vaerktojer/gratis-e-mail-signatur-generator">
                      Abn vaerktojet
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />
        <Gap size="sm" />
        <SectionSteps
          title="QR-kode"
          description="QR-kode-generator til hjemmesider, visitkort, menuer og tryksager."
          grid="three"
          items={[
            {
              icon: <RiQrCodeLine className="h-8 w-8" />,
              title: 'Gratis QR-kode-generator',
              topImageAlt: 'Gratis QR-kode-generator Arteon',
              topImageSrc: '/assets/tools/qr-code-generator/gratis-qr-kode-generator-da.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Opret en QR-kode til en hjemmeside, vCard, restaurantmenu eller flyer. Eksporter til PNG og SVG -- uden login, uden begraensninger.</p>
                  <div className="mt-4">
                    <Button arrow link="/da/vaerktojer/gratis-qr-kode-generator">
                      Abn vaerktojet
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />
        <Gap size="sm" />
        <SectionSteps
          title="Farver og tilgaengelighed"
          description="Vaerktojer til at arbejde med farver, kontrast og WCAG-tilgaengelighed."
          grid="three"
          items={[
            {
              icon: <RiContrast2Line className="h-8 w-8" />,
              title: 'Farvekontrastkontrol',
              topImageAlt: 'Farvekontrastkontrol Arteon',
              topImageSrc: '/assets/tools/color-contrast-and-readability-checker/farvekontrastkontrol-da.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    Kontroller om tekst- og baggrundsfarverne er laesbare. Indtast farvekoder, se kontrastforholdet ifolge <strong>WCAG</strong> og brug <strong>Match</strong>-funktionen til
                    automatisk korrektion.
                  </p>
                  <div className="mt-4">
                    <Button arrow link="/da/vaerktojer/farvekontrastkontrol">
                      Abn vaerktojet
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiPantoneLine className="h-8 w-8" />,
              title: 'Farveudtraekker fra billede',
              topImageAlt: 'Farveudtraekker fra billede Arteon',
              topImageSrc: '/assets/tools/image-color-extractor/farveudtraekker-fra-billede-da.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Upload et foto eller logo -- vaerktojet udtraekker de dominerende farver. Kopier HEX-koder med et klik og brug dem hvor som helst.</p>
                  <div className="mt-4">
                    <Button arrow link="/da/vaerktojer/farveudtraekker-fra-billede">
                      Abn vaerktojet
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiPaletteLine className="h-8 w-8" />,
              title: 'Farvepaletgenerator',
              topImageAlt: 'Farvepaletgenerator Arteon',
              topImageSrc: '/assets/tools/color-palette-generator/farvepaletgenerator-da.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Vaelg en basisfarve og opret 9 farvepaletter: monokromatisk, komplementaer, triadisk, pastel, mork og flere. Kopier HEX-koder med et klik.</p>
                  <div className="mt-4">
                    <Button arrow link="/da/vaerktojer/farvepaletgenerator">
                      Abn vaerktojet
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />
        <Gap size="sm" />

        <SectionSteps
          title="Billedformat-konvertere"
          description="12 online billedkonvertere — konvertér mellem JPG, PNG, WebP, SVG, BMP og GIF. Konvertering i browseren, ingen filer sendes."
          grid="three"
          items={[
            {
              icon: <RiLoopLeftLine className="h-8 w-8" />,
              title: 'JPG til WebP-konverter',
              topImageAlt: 'JPG til WebP-konverter Arteon',
              topImageSrc: '/assets/tools/jpg-png-to-webp-converter/jpg-png-til-webp-konverter-da.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Konvertér JPG-fotos til let WebP. Spar op til 35% filstørrelse.</p>
                  <div className="mt-4">
                    <Button arrow link="/da/vaerktojer/jpg-til-webp-konverter">
                      Åbn værktøj
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiLoopLeftLine className="h-8 w-8" />,
              title: 'PNG til JPG-konverter',
              topImageAlt: 'PNG til JPG-konverter Arteon',
              topImageSrc: '/assets/tools/jpg-png-to-webp-converter/jpg-png-til-webp-konverter-da.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Konvertér PNG-filer til JPG i browseren. Uden begrænsning, uden registrering.</p>
                  <div className="mt-4">
                    <Button arrow link="/da/vaerktojer/png-til-jpg-konverter">
                      Åbn værktøj
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiLoopLeftLine className="h-8 w-8" />,
              title: 'WebP til JPG-konverter',
              topImageAlt: 'WebP til JPG-konverter Arteon',
              topImageSrc: '/assets/tools/jpg-png-to-webp-converter/jpg-png-til-webp-konverter-da.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Konvertér WebP-filer til universelt kompatibelt JPG.</p>
                  <div className="mt-4">
                    <Button arrow link="/da/vaerktojer/webp-til-jpg-konverter">
                      Åbn værktøj
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiLoopLeftLine className="h-8 w-8" />,
              title: 'PNG til WebP-konverter',
              topImageAlt: 'PNG til WebP-konverter Arteon',
              topImageSrc: '/assets/tools/jpg-png-to-webp-converter/jpg-png-til-webp-konverter-da.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Konvertér PNG-grafik til WebP. Mindre filer med bevaret gennemsigtighed.</p>
                  <div className="mt-4">
                    <Button arrow link="/da/vaerktojer/png-til-webp-konverter">
                      Åbn værktøj
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiLoopLeftLine className="h-8 w-8" />,
              title: 'JPG til PNG-konverter',
              topImageAlt: 'JPG til PNG-konverter Arteon',
              topImageSrc: '/assets/tools/jpg-png-to-webp-converter/jpg-png-til-webp-konverter-da.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Konvertér JPG-billeder til tabsfrit PNG. Lokal konvertering i browseren.</p>
                  <div className="mt-4">
                    <Button arrow link="/da/vaerktojer/jpg-til-png-konverter">
                      Åbn værktøj
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiLoopLeftLine className="h-8 w-8" />,
              title: 'WebP til PNG-konverter',
              topImageAlt: 'WebP til PNG-konverter Arteon',
              topImageSrc: '/assets/tools/jpg-png-to-webp-converter/jpg-png-til-webp-konverter-da.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Konvertér WebP-billeder til tabsfrit PNG. Lokal konvertering.</p>
                  <div className="mt-4">
                    <Button arrow link="/da/vaerktojer/webp-til-png-konverter">
                      Åbn værktøj
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiLoopLeftLine className="h-8 w-8" />,
              title: 'SVG til PNG-konverter',
              topImageAlt: 'SVG til PNG-konverter Arteon',
              topImageSrc: '/assets/tools/jpg-png-to-webp-converter/jpg-png-til-webp-konverter-da.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Konvertér SVG-vektorgrafik til PNG. Ideel til dokumenter og sociale medier.</p>
                  <div className="mt-4">
                    <Button arrow link="/da/vaerktojer/svg-til-png-konverter">
                      Åbn værktøj
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiLoopLeftLine className="h-8 w-8" />,
              title: 'SVG til JPG-konverter',
              topImageAlt: 'SVG til JPG-konverter Arteon',
              topImageSrc: '/assets/tools/jpg-png-to-webp-converter/jpg-png-til-webp-konverter-da.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Konvertér SVG-grafik til kompakt JPG. Mindre fil, fuld kompatibilitet.</p>
                  <div className="mt-4">
                    <Button arrow link="/da/vaerktojer/svg-til-jpg-konverter">
                      Åbn værktøj
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiLoopLeftLine className="h-8 w-8" />,
              title: 'BMP til JPG-konverter',
              topImageAlt: 'BMP til JPG-konverter Arteon',
              topImageSrc: '/assets/tools/jpg-png-to-webp-converter/jpg-png-til-webp-konverter-da.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Konvertér BMP-filer til let JPG. Drastisk størrelsesreduktion.</p>
                  <div className="mt-4">
                    <Button arrow link="/da/vaerktojer/bmp-til-jpg-konverter">
                      Åbn værktøj
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />

        <Gap size="sm" />

        <Gap variant="line" />
        <SectionInfo title="Hvad er Arteons vaerktojer?">
          <p className="mb-4">
            10 gratis vaerktojer til forberedelse af materialer til hjemmesider, sociale medier og tryk -- WebP-konverter, favicon-generator, teksttaeller, farveudtraekker, paletgenerator og QR-kode.
          </p>
          <p>Alle vaerktojer korer i browseren -- filer sendes aldrig til en server. Brug uden registrering og uden begraensninger.</p>
        </SectionInfo>
        <Gap variant="line" />
        <SectionSteps
          title="Hvorfor bruge Arteons vaerktojer?"
          grid="two"
          items={[
            {
              icon: <RiShieldCheckLine className="h-6 w-6" />,
              title: 'Fuld privatlivsbeskyttelse',
              description: 'Alle vaerktojer behandler filer lokalt i browseren. Intet sendes til en server -- data forsvinder nar du lukker fanen.',
            },
            {
              icon: <RiInfinityFill className="h-6 w-6" />,
              title: 'Uden brugsgraense',
              description: 'Brug uden begraensninger -- ingen daglig graense, ingen filgraense, ingen konverteringsgraense. Sa mange gange du har brug for.',
            },
            { icon: <RiLockLine className="h-6 w-6" />, title: 'Uden registrering', description: 'Ingen konto nodvendig. Abn vaerktojet, brug det, faerdigt.' },
            { icon: <RiGlobalLine className="h-6 w-6" />, title: 'Tilgaengelig pa dansk', description: 'Alle vaerktojer er tilgaengelige pa dansk -- graenseflade, vejledninger og beskeder.' },
          ]}
        />
        <Gap variant="line" />
        <FaqPanels items={faqItems} title="Ofte stillede sporgsmal om vores vaerktojer" />
        <Gap size="sm" />
      </Wrapper>
      <Script id="ld-json-tools-da" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(schema)}
      </Script>
    </>
  );
}
