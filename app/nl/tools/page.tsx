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
  title: 'Gratis online tools | Afbeeldingen, SEO, kleuren, favicon',
  description: '10 gratis online tools: WebP-converter, favicon-generator, tekstteller, kleurextractor en QR-codes. Voor websites, social media en drukwerk. Zonder registratie.',
  alternates: getToolsIndexAlternates('nl'),
  openGraph: {
    title: 'Gratis online tools | Afbeeldingen, SEO, kleuren, favicon',
    description: '10 gratis online tools: WebP-converter, favicon-generator, tekstteller, kleurextractor en QR-codes. Voor websites, social media en drukwerk. Zonder registratie.',
    url: toAbsoluteUrl('/nl/tools'),
    type: 'website',
    images: [{ url: toAbsoluteUrl('/assets/arteon-logo-on-mockup.webp'), width: 1200, height: 630 }],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Gratis online tools',
  description: '10 gratis online tools: WebP-converter, favicon-generator, tekstteller, kleurextractor en QR-codes. Voor websites, social media en drukwerk. Zonder registratie.',
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
    numberOfItems: 10,
    itemListElement: [
      {
        '@type': 'WebApplication',
        position: 1,
        name: 'JPG- en PNG-naar-WebP-converter online',
        description: 'Gratis online JPG- en PNG-naar-WebP-converter. Verklein bestanden tot 35\u00a0% zonder zichtbaar kwaliteitsverlies. Zonder registratie — bestanden blijven in uw browser.',
        url: toAbsoluteUrl('/nl/tools/jpg-png-naar-webp-converter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 2,
        name: 'Online afbeeldingeneditor',
        description: 'Snijd afbeeldingen bij en schaal ze voor social media en websites. Kant-en-klare formaten, aangepaste pixelafmetingen en ronde avatars.',
        url: toAbsoluteUrl('/nl/tools/afbeeldingeneditor'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 3,
        name: 'Online favicon-generator',
        description: 'Gratis online favicon-generator. Maak favicon.ico en PNG-pictogrammen (16×16 tot 512×512) vanuit één afbeelding — conform browser- en Lighthouse-vereisten.',
        url: toAbsoluteUrl('/nl/tools/gratis-favicon-generator'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 4,
        name: 'Meta-titel & beschrijving checker',
        description: 'Checker voor meta-titel en -beschrijving met Google-voorbeeld. Toont het aantal tekens en de pixelbreedte zodat titels en beschrijvingen niet worden afgekapt.',
        url: toAbsoluteUrl('/nl/tools/meta-titel-beschrijving-checker'),
        applicationCategory: 'DeveloperApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 5,
        name: 'HTML-e-mailhandtekening generator',
        description: 'Gratis HTML-e-mailhandtekening generator. Voer contactgegevens, CTA-link en social-mediaprofielen in en kopieer de kant-en-klare HTML-code naar Gmail of Outlook.',
        url: toAbsoluteUrl('/nl/tools/gratis-e-mailhandtekening-generator'),
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 6,
        name: 'Kleurcontrast checker',
        description: 'Controleer het contrast en de leesbaarheid van tekst- en achtergrondkleuren volgens WCAG. Berekent de contrastverhouding en helpt met automatische kleuraanpassing.',
        url: toAbsoluteUrl('/nl/tools/kleurcontrast-checker'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 7,
        name: 'Kleurextractor uit afbeelding online',
        description: 'Gratis online kleurextractor. Upload een foto of logo en ontvang een palet met maximaal 12 dominante kleuren (HEX en RGB).',
        url: toAbsoluteUrl('/nl/tools/kleurextractor-uit-afbeelding'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 8,
        name: 'Kleurpalettengenerator online',
        description: 'Genereer kleurpaletten vanuit een basiskleur. Monochromatisch, triadisch, analoog, complementair en meer — plus pastel-, donkere en minimalistische varianten.',
        url: toAbsoluteUrl('/nl/tools/kleurpalettengenerator'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 9,
        name: 'Woorden- en tekenteller online',
        description: 'Gratis woorden- en tekenteller met lengtebeoordeling. Controleer of de tekstlengte geschikt is voor een homepage, servicepagina, blogartikel of productbeschrijving.',
        url: toAbsoluteUrl('/nl/tools/woorden-en-tekenteller'),
        applicationCategory: 'DeveloperApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 10,
        name: 'QR-code generator online',
        description: "Gratis online QR-code generator. Maak QR-codes voor websites, vCards, menu's of flyers. Export naar PNG en SVG, zonder registratie, zonder limieten.",
        url: toAbsoluteUrl('/nl/tools/gratis-qr-code-generator'),
        applicationCategory: 'UtilityApplication',
        operatingSystem: 'Any',
      },
    ],
  },
};

const faqItems = [
  { question: 'Wat kosten de tools?', answer: 'Niets. Alle tools zijn gratis, zonder abonnementen en zonder verborgen kosten.' },
  { question: 'Worden mijn bestanden naar een server gestuurd?', answer: 'Nee. Alle tools draaien volledig in uw browser. Bestanden verlaten nooit uw computer en worden nergens opgeslagen.' },
  { question: 'Heb ik een account nodig?', answer: 'Nee. U kunt de tools direct gebruiken, zonder in te loggen of een account aan te maken.' },
  { question: 'Is er een gebruikslimiet?', answer: 'Nee. Gebruik zonder beperkingen — geen dagelijkse limieten, geen bestandslimieten, geen conversielimieten.' },
  {
    question: 'Waar zijn deze tools voor?',
    answer:
      'Ze helpen bij het voorbereiden van materialen voor websites, social media en drukwerk: afbeeldingen optimaliseren, favicons maken, tekstlengte controleren, QR-codes genereren, kleuren kiezen en leesbaarheid controleren.',
  },
  { question: 'Werken de tools op mobiel?', answer: 'Ja, maar sommige tools (WebP-converter, favicon-generator) werken beter op desktop vanwege de verwerking van grotere bestanden.' },
];

export default function ToolsIndexPage() {
  return (
    <>
      <HeroBanner
        title="Gratis online tools"
        description="Afbeeldingsconverter, favicon-generator, tekstteller, kleurtools en QR-codes. Zonder registratie, zonder limieten — alles draait in uw browser."
        backgroundImage="/assets/arteon-logo-on-mockup.webp"
        overlay="black"
      />

      <Wrapper>
        <Gap size="sm" />

        <SectionSteps
          title="Afbeeldingen & favicons"
          description="Tools voor het voorbereiden van foto's, graphics en pictogrammen voor websites en social media."
          grid="three"
          items={[
            {
              icon: <RiImageEditLine className="h-8 w-8" />,
              title: 'JPG/PNG naar WebP-converter',
              topImageAlt: 'JPG/PNG naar WebP-converter Arteon',
              topImageSrc: '/assets/tools/jpg-png-to-webp-converter/jpg-png-naar-webp-converter-nl.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    Converteer JPG- of PNG-afbeeldingen naar <strong>WebP</strong>-formaat en verklein de bestandsgrootte. Snellere laadtijden voor uw website.
                  </p>
                  <div className="mt-4">
                    <Button arrow link="/nl/tools/jpg-png-naar-webp-converter">
                      Tool openen
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiCropLine className="h-8 w-8" />,
              title: 'Afbeeldingeneditor',
              topImageAlt: 'Afbeeldingeneditor Arteon',
              topImageSrc: '/assets/tools/free-image-editor-crop-resize-and-convert/afbeeldingeneditor-nl.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Snijd afbeeldingen perfect bij voor social media of uw website. Kies een vooraf ingesteld formaat of voer aangepaste pixelafmetingen in — download als PNG, JPG of WebP.</p>
                  <div className="mt-4">
                    <Button arrow link="/nl/tools/afbeeldingeneditor">
                      Tool openen
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiAppsLine className="h-8 w-8" />,
              title: 'Favicon- & pictogramgenerator',
              topImageAlt: 'Favicon-generator Arteon',
              topImageSrc: '/assets/tools/favicon-generator/gratis-favicon-generator-nl.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    Genereer <strong>favicon.ico</strong> en PNG-pictogrammen 180x180, 192x192 en 512x512 vanuit één afbeelding — conform browser- en Lighthouse-vereisten.
                  </p>
                  <div className="mt-4">
                    <Button arrow link="/nl/tools/gratis-favicon-generator">
                      Tool openen
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />

        <Gap size="sm" />

        <SectionSteps
          title="Tekst & SEO"
          description="Tools voor het controleren van tekstlengte, meta-tags en het bekijken van een voorbeeld van uw pagina in zoekresultaten."
          grid="three"
          items={[
            {
              icon: <RiFileTextLine className="h-8 w-8" />,
              title: 'Meta-titel & beschrijving checker',
              topImageAlt: 'Meta-titel en beschrijving checker Arteon',
              topImageSrc: '/assets/tools/narzedzia-licznik-dlugosci-meta-title-i-description.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Controleer het aantal tekens, woorden en pixelbreedte — met Google-voorbeeld. Vermijd afgekapte titels en beschrijvingen in zoekresultaten.</p>
                  <div className="mt-4">
                    <Button arrow link="/nl/tools/meta-titel-beschrijving-checker">
                      Tool openen
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiArticleLine className="h-8 w-8" />,
              title: 'Woorden- & tekenteller',
              topImageAlt: 'Woorden- en tekenteller Arteon',
              topImageSrc: '/assets/tools/narzedzia-licznik-slow-i-znakow.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    Controleer de tekstlengte en beoordeel of deze geschikt is voor een homepage, servicepagina, blogartikel of productbeschrijving. De tool telt woorden, tekens, alinea&apos;s en
                    leestijd.
                  </p>
                  <div className="mt-4">
                    <Button arrow link="/nl/tools/woorden-en-tekenteller">
                      Tool openen
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />

        <Gap size="sm" />

        <SectionSteps
          title="E-mail & communicatie"
          description="Tools voor professionele e-mailcommunicatie en een consistent merkimago."
          grid="three"
          items={[
            {
              icon: <RiMailLine className="h-8 w-8" />,
              title: 'Gratis HTML-e-mailhandtekening generator',
              topImageAlt: 'Gratis HTML-e-mailhandtekening generator Arteon',
              topImageSrc: '/assets/tools/narzedzia-darmowy-generator-stopki-mailowej.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    Maak in enkele minuten een professionele e-mailhandtekening. Voer uw gegevens in, kies kleuren en kopieer de kant-en-klare HTML-code naar Gmail, Outlook of een andere e-mailclient.
                  </p>
                  <div className="mt-4">
                    <Button arrow link="/nl/tools/gratis-e-mailhandtekening-generator">
                      Tool openen
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />

        <Gap size="sm" />

        <SectionSteps
          title="QR-codes"
          description="QR-code generator voor websites, visitekaartjes, menu's en drukwerk."
          grid="three"
          items={[
            {
              icon: <RiQrCodeLine className="h-8 w-8" />,
              title: 'Gratis QR-code generator',
              topImageAlt: 'Gratis QR-code generator Arteon',
              topImageSrc: '/assets/tools/qr-code-generator/gratis-qr-code-generator-nl.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Maak een QR-code voor een website, vCard, restaurantmenu of flyer. Export naar PNG en SVG — zonder registratie, zonder limieten.</p>
                  <div className="mt-4">
                    <Button arrow link="/nl/tools/gratis-qr-code-generator">
                      Tool openen
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />

        <Gap size="sm" />

        <SectionSteps
          title="Kleuren & toegankelijkheid"
          description="Tools voor het werken met kleuren, contrast en WCAG-toegankelijkheid."
          grid="three"
          items={[
            {
              icon: <RiContrast2Line className="h-8 w-8" />,
              title: 'Kleurcontrast checker',
              topImageAlt: 'Kleurcontrast checker Arteon',
              topImageSrc: '/assets/tools/color-contrast-and-readability-checker/kleurcontrast-checker-nl.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    Controleer of uw tekst- en achtergrondkleuren leesbaar zijn. Voer kleurcodes in, bekijk de contrastverhouding volgens <strong>WCAG</strong> en gebruik de <strong>Match</strong>
                    -functie voor automatische correctie.
                  </p>
                  <div className="mt-4">
                    <Button arrow link="/nl/tools/kleurcontrast-checker">
                      Tool openen
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiPantoneLine className="h-8 w-8" />,
              title: 'Kleurextractor uit afbeelding',
              topImageAlt: 'Kleurextractor uit afbeelding Arteon',
              topImageSrc: '/assets/tools/image-color-extractor/kleurextractor-uit-afbeelding-nl.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Upload een foto of logo — de tool extraheert de dominante kleuren. Kopieer HEX-codes met één klik en gebruik ze overal.</p>
                  <div className="mt-4">
                    <Button arrow link="/nl/tools/kleurextractor-uit-afbeelding">
                      Tool openen
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiPaletteLine className="h-8 w-8" />,
              title: 'Kleurpalettengenerator',
              topImageAlt: 'Kleurpalettengenerator Arteon',
              topImageSrc: '/assets/tools/color-palette-generator/kleurpalettengenerator-nl.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Kies een basiskleur en genereer 9 kleurpaletten: monochromatisch, complementair, triadisch, pastel, donker en meer. Kopieer HEX-codes met één klik.</p>
                  <div className="mt-4">
                    <Button arrow link="/nl/tools/kleurpalettengenerator">
                      Tool openen
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />

        <Gap variant="line" />

        <SectionInfo title="Wat zijn Arteon-tools?">
          <p className="mb-4">
            10 gratis online tools voor het voorbereiden van materialen voor websites, social media en drukwerk — WebP-converter, favicon-generator, tekstteller, kleurextractor, palettengenerator en
            QR-codes.
          </p>
          <p>Alle tools draaien in uw browser — bestanden worden nooit naar een server gestuurd. Gebruik ze zonder registratie en zonder limieten.</p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionSteps
          title="Waarom Arteon-tools gebruiken?"
          grid="two"
          items={[
            {
              icon: <RiShieldCheckLine className="h-6 w-6" />,
              title: 'Volledige privacy',
              description: 'Alle tools verwerken bestanden lokaal in uw browser. Niets wordt naar een server gestuurd — gegevens verdwijnen wanneer u het tabblad sluit.',
            },
            {
              icon: <RiInfinityFill className="h-6 w-6" />,
              title: 'Geen gebruikslimieten',
              description: 'Gebruik zonder beperkingen — geen dagelijkse limieten, geen bestandslimieten, geen conversielimieten. Zo vaak als u nodig heeft.',
            },
            {
              icon: <RiLockLine className="h-6 w-6" />,
              title: 'Geen registratie',
              description: 'Geen account nodig. Open de tool, gebruik hem en klaar.',
            },
            {
              icon: <RiGlobalLine className="h-6 w-6" />,
              title: 'Beschikbaar in het Nederlands',
              description: 'Alle tools zijn beschikbaar in het Nederlands — interface, instructies en meldingen.',
            },
          ]}
        />

        <Gap variant="line" />

        <FaqPanels items={faqItems} title="Veelgestelde vragen over onze tools" />

        <Gap size="sm" />
      </Wrapper>

      <Script id="ld-json-tools-nl" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(schema)}
      </Script>
    </>
  );
}
