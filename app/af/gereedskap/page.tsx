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
  title: 'Gratis gereedskap | Beelde, SEO, kleure, favicon',
  description: '10 gratis gereedskap: WebP-omskakelaar, favicon-generator, woordteller, kleuronttrekking en QR-kodes. Vir webwerwe en sosiale media.',
  alternates: getToolsIndexAlternates('af'),
  openGraph: {
    title: 'Gratis gereedskap | Beelde, SEO, kleure, favicon',
    description: '10 gratis gereedskap: WebP-omskakelaar, favicon-generator, woordteller, kleuronttrekking en QR-kodes. Vir webwerwe en sosiale media.',
    url: toAbsoluteUrl('/af/gereedskap'),
    type: 'website',
    images: [{ url: toAbsoluteUrl('/assets/arteon-logo-on-mockup.webp'), width: 1200, height: 630 }],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Gratis gereedskap',
  description: '10 gratis gereedskap vir webwerwe, sosiale media en drukwerk.',
  url: toAbsoluteUrl('/af/gereedskap'),
  inLanguage: 'af',
  isPartOf: { '@type': 'WebSite', name: 'Arteon Agency', url: siteUrl },
  about: [
    { '@type': 'Thing', name: 'Beeldoptimalisering' },
    { '@type': 'Thing', name: 'SEO' },
    { '@type': 'Thing', name: 'Kleure en handelsmerk' },
    { '@type': 'Thing', name: 'Generators' },
  ],
  mainEntity: {
    '@type': 'ItemList',
    numberOfItems: 10,
    itemListElement: [
      {
        '@type': 'WebApplication',
        position: 1,
        name: 'JPG/PNG-na-WebP-omskakelaar',
        url: toAbsoluteUrl('/af/gereedskap/jpg-png-na-webp-omskakelaar'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      { '@type': 'WebApplication', position: 2, name: 'Beeldredigeerder', url: toAbsoluteUrl('/af/gereedskap/beeldredigeerder'), applicationCategory: 'MultimediaApplication', operatingSystem: 'Any' },
      {
        '@type': 'WebApplication',
        position: 3,
        name: 'Gratis favicon-generator',
        url: toAbsoluteUrl('/af/gereedskap/gratis-favicon-generator'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 4,
        name: 'Meta-titel-en-beskrywing-nagaaier',
        url: toAbsoluteUrl('/af/gereedskap/meta-titel-en-beskrywing-nagaaier'),
        applicationCategory: 'DeveloperApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 5,
        name: 'Woord-en-karakter-teller',
        url: toAbsoluteUrl('/af/gereedskap/woord-en-karakter-teller'),
        applicationCategory: 'DeveloperApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 6,
        name: 'Gratis e-poshandtekening-generator',
        url: toAbsoluteUrl('/af/gereedskap/gratis-e-pos-handtekening-generator'),
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 7,
        name: 'Kleurkontras-nagaaier',
        url: toAbsoluteUrl('/af/gereedskap/kleurkontras-nagaaier'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 8,
        name: 'Kleuronttrekker uit beeld',
        url: toAbsoluteUrl('/af/gereedskap/kleur-onttrekker-uit-beeld'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 9,
        name: 'Kleurpalet-generator',
        url: toAbsoluteUrl('/af/gereedskap/kleurpalet-generator'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 10,
        name: 'Gratis QR-kode-generator',
        url: toAbsoluteUrl('/af/gereedskap/gratis-qr-kode-generator'),
        applicationCategory: 'UtilityApplication',
        operatingSystem: 'Any',
      },
    ],
  },
};

const faqItems = [
  { question: 'Hoeveel kos die gereedskap?', answer: 'Niks. Alle gereedskap is heeltemal gratis, sonder intekening en verborge koste.' },
  { question: "Word my l\u00eaers na 'n bediener gestuur?", answer: 'Nee. Alle gereedskap werk direk in die blaaier. L\u00eaers verlaat nooit jou toestel nie en word nêrens gestoor nie.' },
  { question: "Het ek 'n rekening nodig?", answer: 'Nee. Jy kan die gereedskap dadelik gebruik sonder om aan te meld of te registreer.' },
  { question: 'Is daar gebruikslimiete?', answer: 'Nee. Gebruik sonder beperkings \u2013 geen daaglikse limiet, geen l\u00eaerlimiet, geen omskakelingslimiet nie.' },
  {
    question: 'Waarvoor is die gereedskap bedoel?',
    answer:
      'Dit help om materiaal voor te berei vir webwerwe, sosiale media en drukwerk: beelde optimaliseer, favicons skep, tekslengte nagaan, QR-kodes genereer, kleure kies en leesbaarheid nagaan.',
  },
  { question: "Werk die gereedskap op 'n selfoon?", answer: "Ja, maar sommige gereedskap (WebP-omskakelaar, favicon-generator) werk beter op 'n rekenaar omdat hulle groter l\u00eaers verwerk." },
];

export default function ToolsIndexPage() {
  return (
    <>
      <HeroBanner
        title="Gratis gereedskap"
        description="Beelomskakelaar, favicon-generator, woordteller, kleurgereedskap en QR-kodes. Sonder registrasie, sonder beperkings \u2013 alles werk in die blaaier."
        backgroundImage="/assets/arteon-logo-on-mockup.webp"
        overlay="black"
      />
      <Wrapper>
        <Gap size="sm" />
        <SectionSteps
          title="Beelde en favicon"
          description="Gereedskap om beelde, grafika en ikone voor te berei vir webwerwe en sosiale media."
          grid="three"
          items={[
            {
              icon: <RiImageEditLine className="h-8 w-8" />,
              title: 'JPG/PNG-na-WebP-omskakelaar',
              topImageAlt: 'JPG/PNG-na-WebP-omskakelaar Arteon',
              topImageSrc: '/assets/tools/narzedzia-jpg-png-na-webp-bez-limitu.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    Skakel JPG- en PNG-beelde om na <strong>WebP</strong>-formaat en verminder l\u00eaergrootte. Vinniger bladsylading.
                  </p>
                  <div className="mt-4">
                    <Button arrow link="/af/gereedskap/jpg-png-na-webp-omskakelaar">
                      Maak oop
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiCropLine className="h-8 w-8" />,
              title: 'Beeldredigeerder',
              topImageAlt: 'Beeldredigeerder Arteon',
              topImageSrc: '/assets/tools/narzedzia-zmiana-rozmiaru-i-kadrowanie-zdjecia.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Sny jou beeld vir sosiale media of webwerf. Kies \'n voorafbepaalde formaat of voer pasgemaakte afmetings in \u2013 laai af in PNG, JPG of WebP.</p>
                  <div className="mt-4">
                    <Button arrow link="/af/gereedskap/beeldredigeerder">
                      Maak oop
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiAppsLine className="h-8 w-8" />,
              title: 'Gratis favicon-generator',
              topImageAlt: 'Favicon-generator Arteon',
              topImageSrc: '/assets/tools/narzedzia-darmowy-generator-favicon-ico.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    Skep <strong>favicon.ico</strong> en PNG-ikone van 180x180, 192x192 en 512x512 vanaf een beeld \u2013 volgens blaaier- en Lighthouse-vereistes.
                  </p>
                  <div className="mt-4">
                    <Button arrow link="/af/gereedskap/gratis-favicon-generator">
                      Maak oop
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />
        <Gap size="sm" />
        <SectionSteps
          title="Teks en SEO"
          description="Gereedskap om tekslengte, meta-etikette en bladsyvoorskou in soekresultate na te gaan."
          grid="three"
          items={[
            {
              icon: <RiFileTextLine className="h-8 w-8" />,
              title: 'Meta-titel-en-beskrywing-nagaaier',
              topImageAlt: 'Meta-titel-nagaaier Arteon',
              topImageSrc: '/assets/tools/narzedzia-licznik-dlugosci-meta-title-i-description.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Gaan die aantal karakters en woorde asook die breedte in piksels na \u2013 met Google-voorskou. Vermy afgeknipte titels en beskrywings in soekresultate.</p>
                  <div className="mt-4">
                    <Button arrow link="/af/gereedskap/meta-titel-en-beskrywing-nagaaier">
                      Maak oop
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiArticleLine className="h-8 w-8" />,
              title: 'Woord-en-karakter-teller',
              topImageAlt: 'Woord-en-karakter-teller Arteon',
              topImageSrc: '/assets/tools/narzedzia-licznik-slow-i-znakow.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Gaan tekslengte na en evalueer of dit geskik is vir \'n tuisblad, diensbladsy, blogartikel of produkbeskrywing. Tel woorde, karakters, paragrawe en leestyd.</p>
                  <div className="mt-4">
                    <Button arrow link="/af/gereedskap/woord-en-karakter-teller">
                      Maak oop
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />
        <Gap size="sm" />
        <SectionSteps
          title="E-pos en kommunikasie"
          description="Gereedskap vir professionele e-poskommunikasie en eenvormige visuele identiteit."
          grid="three"
          items={[
            {
              icon: <RiMailLine className="h-8 w-8" />,
              title: 'Gratis e-poshandtekening-generator',
              topImageAlt: 'E-poshandtekening-generator Arteon',
              topImageSrc: '/assets/tools/narzedzia-darmowy-generator-stopki-mailowej.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Skep \'n professionele e-poshandtekening binne minute. Voer jou besonderhede in, kies kleure en kopieer die voltooide HTML-kode na Gmail, Outlook of \'n ander kli\u00ebnt.</p>
                  <div className="mt-4">
                    <Button arrow link="/af/gereedskap/gratis-e-pos-handtekening-generator">
                      Maak oop
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />
        <Gap size="sm" />
        <SectionSteps
          title="QR-kodes"
          description="QR-kode-generator vir webwerwe, besigheidskaartjies, spyskaarte en drukwerk."
          grid="three"
          items={[
            {
              icon: <RiQrCodeLine className="h-8 w-8" />,
              title: 'Gratis QR-kode-generator',
              topImageAlt: 'QR-kode-generator Arteon',
              topImageSrc: '/assets/tools/narzedzia-generator-kodu-qr.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Skep \'n QR-kode vir \'n webwerf, vCard, restaurantspyskaart of vlugskrif. Voer uit na PNG en SVG \u2013 sonder registrasie, sonder beperkings.</p>
                  <div className="mt-4">
                    <Button arrow link="/af/gereedskap/gratis-qr-kode-generator">
                      Maak oop
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />
        <Gap size="sm" />
        <SectionSteps
          title="Kleure en toeganklikheid"
          description="Gereedskap om met kleure, kontras en WCAG-toeganklikheid te werk."
          grid="three"
          items={[
            {
              icon: <RiContrast2Line className="h-8 w-8" />,
              title: 'Kleurkontras-nagaaier',
              topImageAlt: 'Kleurkontras-nagaaier Arteon',
              topImageSrc: '/assets/tools/narzedzia-tester-kontrastu-kolorow-wcag.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    Gaan na of die teks- en agtergrondkleure leesbaar is. Voer kleurkodes in, gaan die kontrasverhouding volgens die <strong>WCAG</strong>-standaard na en gebruik die{' '}
                    <strong>Match</strong>-funksie vir outomatiese regstelling.
                  </p>
                  <div className="mt-4">
                    <Button arrow link="/af/gereedskap/kleurkontras-nagaaier">
                      Maak oop
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiPantoneLine className="h-8 w-8" />,
              title: 'Kleuronttrekker uit beeld',
              topImageAlt: 'Kleuronttrekker Arteon',
              topImageSrc: '/assets/tools/narzedzia-generator-palety-kolorow-z-obrazu.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Laai \'n foto of logo op \u2013 die gereedskap sal die dominante kleure onttrek. Kopieer HEX-kodes met een klik en gebruik dit oral.</p>
                  <div className="mt-4">
                    <Button arrow link="/af/gereedskap/kleur-onttrekker-uit-beeld">
                      Maak oop
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiPaletteLine className="h-8 w-8" />,
              title: 'Kleurpalet-generator',
              topImageAlt: 'Kleurpalet-generator Arteon',
              topImageSrc: '/assets/tools/narzedzia-generator-palet-kolorow-online.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Kies \'n basiskleur en skep 9 kleurpalette: monochromaties, komplementêr, triadies, pastel, donker en meer. Kopieer HEX-kodes met een klik.</p>
                  <div className="mt-4">
                    <Button arrow link="/af/gereedskap/kleurpalet-generator">
                      Maak oop
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />
        <Gap variant="line" />
        <SectionInfo title="Wat is Arteon-gereedskap?">
          <p className="mb-4">
            10 gratis gereedskap om materiaal voor te berei vir webwerwe, sosiale media en drukwerk \u2013 WebP-omskakelaar, favicon-generator, woordteller, kleuronttrekking, paletgenerator en
            QR-kodes.
          </p>
          <p>Alle gereedskap werk in die blaaier \u2013 l\u00eaers word nooit na \'n bediener gestuur nie. Gebruik sonder registrasie en sonder beperkings.</p>
        </SectionInfo>
        <Gap variant="line" />
        <SectionSteps
          title="Hoekom Arteon-gereedskap gebruik?"
          grid="two"
          items={[
            {
              icon: <RiShieldCheckLine className="h-6 w-6" />,
              title: 'Volledige privaatheid',
              description: "Alle gereedskap verwerk l\u00eaers plaaslik in die blaaier. Niks word na 'n bediener gestuur nie \u2013 data verdwyn wanneer jy die oortjie sluit.",
            },
            {
              icon: <RiInfinityFill className="h-6 w-6" />,
              title: 'Geen gebruikslimiete',
              description: 'Gebruik sonder beperkings \u2013 geen daaglikse limiet, geen l\u00eaerlimiet, geen omskakelingslimiet nie. So dikwels as jy nodig het.',
            },
            { icon: <RiLockLine className="h-6 w-6" />, title: 'Geen registrasie', description: "'n Rekening is nie nodig nie. Maak die gereedskap oop, gebruik dit, klaar." },
            {
              icon: <RiGlobalLine className="h-6 w-6" />,
              title: 'Beskikbaar in Afrikaans',
              description: 'Alle gereedskap is beskikbaar in Afrikaans \u2013 koppelvlak, instruksies en kennisgewings.',
            },
          ]}
        />
        <Gap variant="line" />
        <FaqPanels items={faqItems} title="Gereelde vrae oor ons gereedskap" />
        <Gap size="sm" />
      </Wrapper>
      <Script id="ld-json-tools-af" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(schema)}
      </Script>
    </>
  );
}
