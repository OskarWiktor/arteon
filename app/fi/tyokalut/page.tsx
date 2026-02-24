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
  title: 'Ilmaiset työkalut | Kuvat, SEO, värit, favicon',
  description: '10 ilmaista työkalua: WebP-muunnin, favicon-generaattori, tekstilaskuri, värien poiminta ja QR-koodi. Verkkosivuille ja sosiaaliseen mediaan.',
  alternates: getToolsIndexAlternates('fi'),
  openGraph: {
    title: 'Ilmaiset työkalut | Kuvat, SEO, värit, favicon',
    description: '10 ilmaista työkalua: WebP-muunnin, favicon-generaattori, tekstilaskuri, värien poiminta ja QR-koodi. Verkkosivuille ja sosiaaliseen mediaan.',
    url: toAbsoluteUrl('/fi/tyokalut'),
    type: 'website',
    images: [{ url: toAbsoluteUrl('/assets/arteon-logo-on-mockup.webp'), width: 1200, height: 630 }],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Ilmaiset työkalut',
  description: '10 ilmaista työkalua verkkosivuille, sosiaaliseen mediaan ja painotuotteisiin.',
  url: toAbsoluteUrl('/fi/tyokalut'),
  inLanguage: 'fi',
  isPartOf: { '@type': 'WebSite', name: 'Arteon Agency', url: siteUrl },
  about: [
    { '@type': 'Thing', name: 'Kuvaoptimointi' },
    { '@type': 'Thing', name: 'SEO' },
    { '@type': 'Thing', name: 'Värit ja brändi' },
    { '@type': 'Thing', name: 'Generaattorit' },
  ],
  mainEntity: {
    '@type': 'ItemList',
    numberOfItems: 10,
    itemListElement: [
      {
        '@type': 'WebApplication',
        position: 1,
        name: 'JPG/PNG–WebP-muunnin',
        url: toAbsoluteUrl('/fi/tyokalut/jpg-png-webp-muunnin'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      { '@type': 'WebApplication', position: 2, name: 'Kuvaeditori', url: toAbsoluteUrl('/fi/tyokalut/kuvaeditori'), applicationCategory: 'MultimediaApplication', operatingSystem: 'Any' },
      {
        '@type': 'WebApplication',
        position: 3,
        name: 'Favicon-generaattori',
        url: toAbsoluteUrl('/fi/tyokalut/ilmainen-favicon-generaattori'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 4,
        name: 'Meta-otsikon ja -kuvauksen tarkistus',
        url: toAbsoluteUrl('/fi/tyokalut/meta-otsikko-ja-kuvaus-tarkistus'),
        applicationCategory: 'DeveloperApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 5,
        name: 'Sähköpostiallekirjoitusgeneraattori',
        url: toAbsoluteUrl('/fi/tyokalut/ilmainen-sahkopostiallekirjoitus-generaattori'),
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 6,
        name: 'Värikontrastin tarkistus',
        url: toAbsoluteUrl('/fi/tyokalut/varikontrasti-tarkistus'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 7,
        name: 'Värien poiminta kuvasta',
        url: toAbsoluteUrl('/fi/tyokalut/varien-poiminta-kuvasta'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 8,
        name: 'Väripalettien generaattori',
        url: toAbsoluteUrl('/fi/tyokalut/varipaletti-generaattori'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 9,
        name: 'Sana- ja merkkilaskuri',
        url: toAbsoluteUrl('/fi/tyokalut/sana-ja-merkkilaskuri'),
        applicationCategory: 'DeveloperApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 10,
        name: 'Ilmainen QR-koodigeneraattori',
        url: toAbsoluteUrl('/fi/tyokalut/ilmainen-qr-koodi-generaattori'),
        applicationCategory: 'UtilityApplication',
        operatingSystem: 'Any',
      },
    ],
  },
};

const faqItems = [
  { question: 'Mitä työkalut maksavat?', answer: 'Ei mitään. Kaikki työkalut ovat ilmaisia, ilman tilauksia ja piilotettuja maksuja.' },
  { question: 'Lähetetäänkö tiedostoni palvelimelle?', answer: 'Ei. Kaikki työkalut toimivat kokonaan selaimessa. Tiedostot eivät koskaan poistu tietokoneeltasi eikä niitä tallenneta minnekään.' },
  { question: 'Tarvitsenko tilin?', answer: 'Et. Voit käyttää niitä heti ilman kirjautumista tai tilin luomista.' },
  { question: 'Onko käyttörajoja?', answer: 'Ei. Käytä ilman rajoituksia – ei päivittäistä rajaa, ei tiedostorajaa, ei muunnosrajaa.' },
  {
    question: 'Mihin työkalut ovat tarkoitettu?',
    answer:
      'Ne auttavat valmistelemaan materiaaleja verkkosivuille, sosiaaliseen mediaan ja painotuotteisiin: optimoimaan kuvia, luomaan faviconeja, tarkistamaan tekstin pituutta, luomaan QR-koodeja, valitsemaan värejä ja tarkistamaan luettavuutta.',
  },
  {
    question: 'Toimivatko työkalut mobiilissa?',
    answer: 'Kyllä, mutta jotkin työkalut (WebP-muunnin, favicon-generaattori) toimivat paremmin tietokoneella, koska ne käsittelevät suurempia tiedostoja.',
  },
];

export default function ToolsIndexPage() {
  return (
    <>
      <HeroBanner
        title="Ilmaiset työkalut"
        description="Kuvamuunnin, favicon-generaattori, tekstilaskuri, värivälineet ja QR-koodi. Ilman rekisteröitymistä, ilman rajoituksia – kaikki toimii selaimessa."
        backgroundImage="/assets/arteon-logo-on-mockup.webp"
        overlay="black"
      />
      <Wrapper>
        <Gap size="sm" />
        <SectionSteps
          title="Kuvat ja favicon"
          description="Työkalut kuvien, grafiikan ja kuvakkeiden valmisteluun verkkosivuille ja sosiaaliseen mediaan."
          grid="three"
          items={[
            {
              icon: <RiImageEditLine className="h-8 w-8" />,
              title: 'JPG/PNG–WebP-muunnin',
              topImageAlt: 'JPG/PNG WebP-muunnin Arteon',
              topImageSrc: '/assets/tools/jpg-png-to-webp-converter/jpg-png-webp-muunnin-fi.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    Muunna JPG- tai PNG-kuvat <strong>WebP</strong>-muotoon ja pienennä tiedostokokoa. Nopeampi sivuston lataus.
                  </p>
                  <div className="mt-4">
                    <Button arrow link="/fi/tyokalut/jpg-png-webp-muunnin">
                      Avaa työkalu
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiCropLine className="h-8 w-8" />,
              title: 'Kuvaeditori',
              topImageAlt: 'Kuvaeditori Arteon',
              topImageSrc: '/assets/tools/free-image-editor-crop-resize-and-convert/kuvaeditori-fi.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Rajaa kuva täydellisesti sosiaalista mediaa tai verkkosivustoa varten. Valitse valmis muoto tai syötä omat pikselikoot – lataa PNG-, JPG- tai WebP-muodossa.</p>
                  <div className="mt-4">
                    <Button arrow link="/fi/tyokalut/kuvaeditori">
                      Avaa työkalu
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiAppsLine className="h-8 w-8" />,
              title: 'Favicon- ja kuvakegeneraattori',
              topImageAlt: 'Favicon-generaattori Arteon',
              topImageSrc: '/assets/tools/favicon-generator/ilmainen-favicon-generaattori-fi.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    Luo <strong>favicon.ico</strong> ja PNG-kuvakkeet 180x180, 192x192 ja 512x512 yhdestä kuvasta – selain- ja Lighthouse-vaatimusten mukaisesti.
                  </p>
                  <div className="mt-4">
                    <Button arrow link="/fi/tyokalut/ilmainen-favicon-generaattori">
                      Avaa työkalu
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />
        <Gap size="sm" />
        <SectionSteps
          title="Teksti ja SEO"
          description="Työkalut tekstin pituuden, metatunnisteiden tarkistamiseen ja sivun esikatseluun hakutuloksissa."
          grid="three"
          items={[
            {
              icon: <RiFileTextLine className="h-8 w-8" />,
              title: 'Meta-otsikon ja -kuvauksen tarkistus',
              topImageAlt: 'Meta-otsikon ja -kuvauksen tarkistus Arteon',
              topImageSrc: '/assets/tools/narzedzia-licznik-dlugosci-meta-title-i-description.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Tarkista merkkien ja sanojen määrä sekä pikselileveys – Google-esikatselulla. Vältä katkenneet otsikot ja kuvaukset hakutuloksissa.</p>
                  <div className="mt-4">
                    <Button arrow link="/fi/tyokalut/meta-otsikko-ja-kuvaus-tarkistus">
                      Avaa työkalu
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiArticleLine className="h-8 w-8" />,
              title: 'Sana- ja merkkilaskuri',
              topImageAlt: 'Sana- ja merkkilaskuri Arteon',
              topImageSrc: '/assets/tools/word-and-character-counter-with-text-formatting-tools/sana-ja-merkkilaskuri-fi.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Tarkista tekstin pituus ja arvioi, sopiiko se etusivulle, palvelusivulle, blogikirjoitukseen tai tuotekuvaukseen. Työkalu laskee sanat, merkit, kappaleet ja lukuajan.</p>
                  <div className="mt-4">
                    <Button arrow link="/fi/tyokalut/sana-ja-merkkilaskuri">
                      Avaa työkalu
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />
        <Gap size="sm" />
        <SectionSteps
          title="Sähköposti ja viestintä"
          description="Työkalut ammattimaiseen sähköpostiviestintään ja yhtenäiseen brändi-ilmeeseen."
          grid="three"
          items={[
            {
              icon: <RiMailLine className="h-8 w-8" />,
              title: 'Ilmainen HTML-sähköpostiallekirjoitusgeneraattori',
              topImageAlt: 'Ilmainen sähköpostiallekirjoitusgeneraattori Arteon',
              topImageSrc: '/assets/tools/free-html-email-signature-generator/ilmainen-sahkopostiallekirjoitus-generaattori-fi.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Luo ammattimainen sähköpostiallekirjoitus muutamassa minuutissa. Syötä tietosi, valitse värit ja kopioi valmis HTML-koodi Gmailiin, Outlookiin tai muuhun sähköpostiohjelmaan.</p>
                  <div className="mt-4">
                    <Button arrow link="/fi/tyokalut/ilmainen-sahkopostiallekirjoitus-generaattori">
                      Avaa työkalu
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />
        <Gap size="sm" />
        <SectionSteps
          title="QR-koodi"
          description="QR-koodigeneraattori verkkosivuille, käyntikorteille, ruokalistoille ja painotuotteille."
          grid="three"
          items={[
            {
              icon: <RiQrCodeLine className="h-8 w-8" />,
              title: 'Ilmainen QR-koodigeneraattori',
              topImageAlt: 'Ilmainen QR-koodigeneraattori Arteon',
              topImageSrc: '/assets/tools/qr-code-generator/ilmainen-qr-koodi-generaattori-fi.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Luo QR-koodi verkkosivulle, vCard-käyntikortille, ravintolan ruokalistalle tai esitteelle. Vie PNG- ja SVG-muotoon – ilman kirjautumista, ilman rajoituksia.</p>
                  <div className="mt-4">
                    <Button arrow link="/fi/tyokalut/ilmainen-qr-koodi-generaattori">
                      Avaa työkalu
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />
        <Gap size="sm" />
        <SectionSteps
          title="Värit ja saavutettavuus"
          description="Työkalut värien, kontrastin ja WCAG-saavutettavuuden käsittelyyn."
          grid="three"
          items={[
            {
              icon: <RiContrast2Line className="h-8 w-8" />,
              title: 'Värikontrastin tarkistus',
              topImageAlt: 'Värikontrastin tarkistus Arteon',
              topImageSrc: '/assets/tools/color-contrast-and-readability-checker/varikontrasti-tarkistus-fi.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    Tarkista, ovatko teksti- ja taustavärit luettavia. Syötä värikoodit, tarkista kontrastisuhde <strong>WCAG</strong>-standardin mukaan ja käytä <strong>Match</strong>-toimintoa
                    automaattiseen korjaukseen.
                  </p>
                  <div className="mt-4">
                    <Button arrow link="/fi/tyokalut/varikontrasti-tarkistus">
                      Avaa työkalu
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiPantoneLine className="h-8 w-8" />,
              title: 'Värien poiminta kuvasta',
              topImageAlt: 'Värien poiminta kuvasta Arteon',
              topImageSrc: '/assets/tools/image-color-extractor/varien-poiminta-kuvasta-fi.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Lataa valokuva tai logo – työkalu poimii hallitsevat värit. Kopioi HEX-koodit yhdellä napsautuksella ja käytä niitä missä tahansa.</p>
                  <div className="mt-4">
                    <Button arrow link="/fi/tyokalut/varien-poiminta-kuvasta">
                      Avaa työkalu
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiPaletteLine className="h-8 w-8" />,
              title: 'Väripalettien generaattori',
              topImageAlt: 'Väripalettien generaattori Arteon',
              topImageSrc: '/assets/tools/color-palette-generator/varipaletti-generaattori-fi.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Valitse perusväri ja luo 9 väripalettia: monokromaattinen, komplementaarinen, triadinen, pastelli, tumma ja muita. Kopioi HEX-koodit yhdellä napsautuksella.</p>
                  <div className="mt-4">
                    <Button arrow link="/fi/tyokalut/varipaletti-generaattori">
                      Avaa työkalu
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />
        <Gap variant="line" />
        <SectionInfo title="Mitä Arteonin työkalut ovat?">
          <p className="mb-4">
            10 ilmaista työkalua materiaalien valmisteluun verkkosivuille, sosiaaliseen mediaan ja painotuotteisiin – WebP-muunnin, favicon-generaattori, tekstilaskuri, värien poiminta, palettien
            generaattori ja QR-koodi.
          </p>
          <p>Kaikki työkalut toimivat selaimessa – tiedostoja ei koskaan lähetetä palvelimelle. Käytä ilman rekisteröitymistä ja ilman rajoituksia.</p>
        </SectionInfo>
        <Gap variant="line" />
        <SectionSteps
          title="Miksi käyttää Arteonin työkaluja?"
          grid="two"
          items={[
            {
              icon: <RiShieldCheckLine className="h-6 w-6" />,
              title: 'Täysi yksityisyys',
              description: 'Kaikki työkalut käsittelevät tiedostot paikallisesti selaimessa. Mitään ei lähetetä palvelimelle – tiedot katoavat, kun suljet välilehden.',
            },
            {
              icon: <RiInfinityFill className="h-6 w-6" />,
              title: 'Ilman käyttörajoja',
              description: 'Käytä ilman rajoituksia – ei päivittäistä rajaa, ei tiedostorajaa, ei muunnosrajaa. Niin monta kertaa kuin tarvitset.',
            },
            { icon: <RiLockLine className="h-6 w-6" />, title: 'Ilman rekisteröitymistä', description: 'Tiliä ei tarvita. Avaa työkalu, käytä sitä, valmis.' },
            { icon: <RiGlobalLine className="h-6 w-6" />, title: 'Saatavilla suomeksi', description: 'Kaikki työkalut ovat saatavilla suomeksi – käyttöliittymä, ohjeet ja ilmoitukset.' },
          ]}
        />
        <Gap variant="line" />
        <FaqPanels items={faqItems} title="Usein kysytyt kysymykset työkaluistamme" />
        <Gap size="sm" />
      </Wrapper>
      <Script id="ld-json-tools-fi" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(schema)}
      </Script>
    </>
  );
}
