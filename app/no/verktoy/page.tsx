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
  title: 'Gratis verktoy | Bilder, SEO, farger, favicon',
  description: '10 gratis verktoy: WebP-konverterer, favicon-generator, tekstteller, fargeuttrrekker og QR-kode. For nettsider, sosiale medier og trykk. Uten registrering.',
  alternates: getToolsIndexAlternates('no'),
  openGraph: {
    title: 'Gratis verktoy | Bilder, SEO, farger, favicon',
    description: '10 gratis verktoy: WebP-konverterer, favicon-generator, tekstteller, fargeuttrrekker og QR-kode. For nettsider, sosiale medier og trykk. Uten registrering.',
    url: toAbsoluteUrl('/no/verktoy'),
    type: 'website',
    images: [{ url: toAbsoluteUrl('/assets/arteon-logo-on-mockup.webp'), width: 1200, height: 630 }],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Gratis verktoy',
  description: '10 gratis verktoy for nettsider, sosiale medier og trykk.',
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
    numberOfItems: 10,
    itemListElement: [
      {
        '@type': 'WebApplication',
        position: 1,
        name: 'JPG/PNG til WebP-konverterer',
        url: toAbsoluteUrl('/no/verktoy/jpg-png-til-webp-konverterer'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      { '@type': 'WebApplication', position: 2, name: 'Bilderedigerer', url: toAbsoluteUrl('/no/verktoy/bilderedigerer'), applicationCategory: 'MultimediaApplication', operatingSystem: 'Any' },
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
        name: 'Fargeuttrrekker fra bilde',
        url: toAbsoluteUrl('/no/verktoy/fargeuttrrekker-fra-bilde'),
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
    ],
  },
};

const faqItems = [
  { question: 'Hva koster verktoyene?', answer: 'Ingenting. Alle verktoy er gratis, uten abonnement og uten skjulte gebyrer.' },
  { question: 'Sendes filene mine til en server?', answer: 'Nei. Alle verktoy kjorer helt i nettleseren. Filene forlater aldri datamaskinen og lagres ikke noe sted.' },
  { question: 'Trenger jeg en konto?', answer: 'Nei. Du kan bruke dem umiddelbart uten aa logge inn eller opprette en konto.' },
  { question: 'Er det noen bruksgrense?', answer: 'Nei. Bruk uten begrensninger -- ingen daglig grense, ingen filgrense, ingen konverteringsgrense.' },
  {
    question: 'Hva er verktoyene til?',
    answer:
      'De hjelper med aa forberede materialer for nettsider, sosiale medier og trykk: optimalisere bilder, lage faviconer, sjekke tekstlengde, lage QR-koder, velge farger og sjekke lesbarheten.',
  },
  { question: 'Fungerer verktoyene paa mobil?', answer: 'Ja, men noen verktoy (WebP-konverterer, favicon-generator) fungerer bedre paa desktop, da de behandler storre filer.' },
];

export default function ToolsIndexPage() {
  return (
    <>
      <HeroBanner
        title="Gratis verktoy"
        description="Bildekonverterer, favicon-generator, tekstteller, fargeverktoy og QR-kode. Uten registrering, uten begrensninger -- alt kjorer i nettleseren."
        backgroundImage="/assets/arteon-logo-on-mockup.webp"
        overlay="black"
      />
      <Wrapper>
        <Gap size="sm" />
        <SectionSteps
          title="Bilder og favicon"
          description="Verktoy for forberedelse av bilder, grafikk og ikoner for nettsider og sosiale medier."
          grid="three"
          items={[
            {
              icon: <RiImageEditLine className="h-8 w-8" />,
              title: 'JPG/PNG til WebP-konverterer',
              topImageAlt: 'JPG/PNG til WebP-konverterer Arteon',
              topImageSrc: '/assets/tools/jpg-png-to-webp-converter/jpg-png-til-webp-konverterer-no.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    Konverter JPG- eller PNG-bilder til <strong>WebP</strong>-format og reduser filstorrelsen. Raskere lasting av nettsiden.
                  </p>
                  <div className="mt-4">
                    <Button arrow link="/no/verktoy/jpg-png-til-webp-konverterer">
                      Aapne verktoyet
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiCropLine className="h-8 w-8" />,
              title: 'Bilderedigerer',
              topImageAlt: 'Bilderedigerer Arteon',
              topImageSrc: '/assets/tools/narzedzia-zmiana-rozmiaru-i-kadrowanie-zdjecia.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Beskjaer bildet perfekt for sosiale medier eller nettsiden. Velg et ferdig format eller skriv inn egne pikselstorrelser -- last ned som PNG, JPG eller WebP.</p>
                  <div className="mt-4">
                    <Button arrow link="/no/verktoy/bilderedigerer">
                      Aapne verktoyet
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiAppsLine className="h-8 w-8" />,
              title: 'Favicon- og ikongenerator',
              topImageAlt: 'Favicon-generator Arteon',
              topImageSrc: '/assets/tools/favicon-generator/gratis-favicon-generator-no.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    Lag <strong>favicon.ico</strong> og PNG-ikoner 180x180, 192x192 og 512x512 fra ett enkelt bilde -- i samsvar med nettleser- og Lighthouse-krav.
                  </p>
                  <div className="mt-4">
                    <Button arrow link="/no/verktoy/gratis-favicon-generator">
                      Aapne verktoyet
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
          description="Verktoy for kontroll av tekstlengde, meta-tagger og forhaandsvisning av siden i sokeresultater."
          grid="three"
          items={[
            {
              icon: <RiFileTextLine className="h-8 w-8" />,
              title: 'Meta-tittel- og beskrivelsessjekker',
              topImageAlt: 'Meta-tittel- og beskrivelsessjekker Arteon',
              topImageSrc: '/assets/tools/narzedzia-licznik-dlugosci-meta-title-i-description.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Sjekk antall tegn, antall ord og pikselbredde -- med Google-forhaandsvisning. Unngaa avkortede titler og beskrivelser i sokeresultatene.</p>
                  <div className="mt-4">
                    <Button arrow link="/no/verktoy/meta-tittel-og-beskrivelse-sjekker">
                      Aapne verktoyet
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiArticleLine className="h-8 w-8" />,
              title: 'Ord- og tegnteller',
              topImageAlt: 'Ord- og tegnteller Arteon',
              topImageSrc: '/assets/tools/narzedzia-licznik-slow-i-znakow.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Sjekk tekstlengden og vurder om den passer for en forside, tjenesteside, blogginnlegg eller produktbeskrivelse. Verktoyet teller ord, tegn, avsnitt og lesetid.</p>
                  <div className="mt-4">
                    <Button arrow link="/no/verktoy/ord-og-tegnteller">
                      Aapne verktoyet
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />
        <Gap size="sm" />
        <SectionSteps
          title="E-post og kommunikasjon"
          description="Verktoy for profesjonell e-postkommunikasjon og konsekvent merkevarebilde."
          grid="three"
          items={[
            {
              icon: <RiMailLine className="h-8 w-8" />,
              title: 'Gratis HTML e-postsignatur-generator',
              topImageAlt: 'Gratis e-postsignatur-generator Arteon',
              topImageSrc: '/assets/tools/narzedzia-darmowy-generator-stopki-mailowej.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Lag en profesjonell e-postsignatur paa faa minutter. Skriv inn informasjonen din, velg farger og kopier den ferdige HTML-koden til Gmail, Outlook eller en annen e-postklient.</p>
                  <div className="mt-4">
                    <Button arrow link="/no/verktoy/gratis-e-postsignatur-generator">
                      Aapne verktoyet
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
          description="QR-kode-generator for nettsider, visittkort, menyer og trykkmateriell."
          grid="three"
          items={[
            {
              icon: <RiQrCodeLine className="h-8 w-8" />,
              title: 'Gratis QR-kode-generator',
              topImageAlt: 'Gratis QR-kode-generator Arteon',
              topImageSrc: '/assets/tools/qr-code-generator/gratis-qr-kode-generator-no.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Lag en QR-kode for en nettside, vCard, restaurantmeny eller flygeblad. Eksporter til PNG og SVG -- uten innlogging, uten begrensninger.</p>
                  <div className="mt-4">
                    <Button arrow link="/no/verktoy/gratis-qr-kode-generator">
                      Aapne verktoyet
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />
        <Gap size="sm" />
        <SectionSteps
          title="Farger og tilgjengelighet"
          description="Verktoy for aa jobbe med farger, kontrast og WCAG-tilgjengelighet."
          grid="three"
          items={[
            {
              icon: <RiContrast2Line className="h-8 w-8" />,
              title: 'Fargekontrastsjekker',
              topImageAlt: 'Fargekontrastsjekker Arteon',
              topImageSrc: '/assets/tools/color-contrast-and-readability-checker/fargekontrastsjekker-no.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    Sjekk om tekst- og bakgrunnsfargene er lesbare. Skriv inn fargekoder, se kontrastforholdet i henhold til <strong>WCAG</strong> og bruk <strong>Match</strong>-funksjonen for
                    automatisk korrigering.
                  </p>
                  <div className="mt-4">
                    <Button arrow link="/no/verktoy/fargekontrastsjekker">
                      Aapne verktoyet
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiPantoneLine className="h-8 w-8" />,
              title: 'Fargeuttrrekker fra bilde',
              topImageAlt: 'Fargeuttrrekker fra bilde Arteon',
              topImageSrc: '/assets/tools/image-color-extractor/fargeutrekker-fra-bilde-no.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Last opp et foto eller en logo -- verktoyet trekker ut de dominerende fargene. Kopier HEX-koder med ett klikk og bruk dem hvor som helst.</p>
                  <div className="mt-4">
                    <Button arrow link="/no/verktoy/fargeuttrrekker-fra-bilde">
                      Aapne verktoyet
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiPaletteLine className="h-8 w-8" />,
              title: 'Fargepalettgenerator',
              topImageAlt: 'Fargepalettgenerator Arteon',
              topImageSrc: '/assets/tools/color-palette-generator/fargepalettgenerator-no.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Velg en basisfarge og lag 9 fargepaletter: monokromatisk, komplementaer, triadisk, pastell, mork og flere. Kopier HEX-koder med ett klikk.</p>
                  <div className="mt-4">
                    <Button arrow link="/no/verktoy/fargepalettgenerator">
                      Aapne verktoyet
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />
        <Gap variant="line" />
        <SectionInfo title="Hva er Arteons verktoy?">
          <p className="mb-4">
            10 gratis verktoy for forberedelse av materialer for nettsider, sosiale medier og trykk -- WebP-konverterer, favicon-generator, tekstteller, fargeuttrrekker, palettgenerator og QR-kode.
          </p>
          <p>Alle verktoy kjorer i nettleseren -- filer sendes aldri til en server. Bruk uten registrering og uten begrensninger.</p>
        </SectionInfo>
        <Gap variant="line" />
        <SectionSteps
          title="Hvorfor bruke Arteons verktoy?"
          grid="two"
          items={[
            {
              icon: <RiShieldCheckLine className="h-6 w-6" />,
              title: 'Fullt personvern',
              description: 'Alle verktoy behandler filer lokalt i nettleseren. Ingenting sendes til en server -- data forsvinner naar du lukker fanen.',
            },
            {
              icon: <RiInfinityFill className="h-6 w-6" />,
              title: 'Uten bruksgrense',
              description: 'Bruk uten begrensninger -- ingen daglig grense, ingen filgrense, ingen konverteringsgrense. Saa mange ganger du trenger.',
            },
            { icon: <RiLockLine className="h-6 w-6" />, title: 'Uten registrering', description: 'Ingen konto nodvendig. Aapne verktoyet, bruk det, ferdig.' },
            { icon: <RiGlobalLine className="h-6 w-6" />, title: 'Tilgjengelig paa norsk', description: 'Alle verktoy er tilgjengelige paa norsk -- grensesnitt, veiledninger og meldinger.' },
          ]}
        />
        <Gap variant="line" />
        <FaqPanels items={faqItems} title="Ofte stilte sporsmaal om vaare verktoy" />
        <Gap size="sm" />
      </Wrapper>
      <Script id="ld-json-tools-no" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(schema)}
      </Script>
    </>
  );
}
