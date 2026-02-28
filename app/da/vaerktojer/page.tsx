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
  title: 'Gratis vaerktojer | Billeder, SEO, farver, favicon',
  description: '10 gratis vaerktojer: WebP-konverter, favicon-generator, teksttaeller, farveudtraekker og QR-kode. Til hjemmesider, sociale medier og tryk. Uden registrering.',
  alternates: getToolsIndexAlternates('da'),
  openGraph: {
    title: 'Gratis vaerktojer | Billeder, SEO, farver, favicon',
    description: '10 gratis vaerktojer: WebP-konverter, favicon-generator, teksttaeller, farveudtraekker og QR-kode. Til hjemmesider, sociale medier og tryk. Uden registrering.',
    url: toAbsoluteUrl('/da/vaerktojer'),
    type: 'website',
    images: [{ url: toAbsoluteUrl('/assets/arteon-logo-on-mockup.webp'), width: 1200, height: 630 }],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Gratis vaerktojer',
  description: '10 gratis vaerktojer til hjemmesider, sociale medier og tryk.',
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
    numberOfItems: 10,
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
        description="Billedkonverter, favicon-generator, teksttaeller, farvevaerktojer og QR-kode. Uden registrering, uden begraensninger -- alt korer i browseren."
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
              icon: <RiImageEditLine className="h-8 w-8" />,
              title: 'JPG/PNG til WebP-konverter',
              topImageAlt: 'JPG/PNG til WebP-konverter Arteon',
              topImageSrc: '/assets/tools/jpg-png-to-webp-converter/jpg-png-til-webp-konverter-da.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    Konverter JPG- eller PNG-billeder til <strong>WebP</strong>-format og reducer filstorrelsen. Hurtigere indlaesning af hjemmesiden.
                  </p>
                  <div className="mt-4">
                    <Button arrow link="/da/vaerktojer/jpg-til-webp-konverter">
                      Abn vaerktojet
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiCropLine className="h-8 w-8" />,
              title: 'Billedrediger',
              topImageAlt: 'Billedrediger Arteon',
              topImageSrc: '/assets/tools/free-image-editor-crop-resize-and-convert/billedrediger-da.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Beskaer billedet perfekt til sociale medier eller hjemmesiden. Vaelg et faerdigt format eller indtast brugerdefinerede pixelstorrelser -- download som PNG, JPG eller WebP.</p>
                  <div className="mt-4">
                    <Button arrow link="/da/vaerktojer/billedrediger">
                      Abn vaerktojet
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
        <Gap size="sm" />
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
