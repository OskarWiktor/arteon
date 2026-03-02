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
  title: 'Ilmaiset online-työkalut | Muuntimet, SEO, värit, favicon',
  description:
    '22 ilmaista online-työkalua: 12 kuvamuunninta (JPG, PNG, WebP, SVG, BMP,, GIF, AVIF, HEIC, TIFF), favicon-generaattori, kuvaeditori, tekstilaskuri, väripaletit ja QR-koodit. Ilman rekisteröitymistä.',
  alternates: getToolsIndexAlternates('fi'),
  openGraph: {
    title: 'Ilmaiset online-työkalut | Muuntimet, SEO, värit, favicon',
    description:
      '22 ilmaista online-työkalua: 12 kuvamuunninta (JPG, PNG, WebP, SVG, BMP,, GIF, AVIF, HEIC, TIFF), favicon-generaattori, kuvaeditori, tekstilaskuri, väripaletit ja QR-koodit. Ilman rekisteröitymistä.',
    url: toAbsoluteUrl('/fi/tyokalut'),
    type: 'website',
    images: [{ url: toAbsoluteUrl('/assets/arteon-logo-on-mockup.webp'), width: 1200, height: 630 }],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Ilmaiset online-työkalut — kuvamuuntimet, SEO, värit, favicon',
  description:
    '22 ilmaista online-työkalua: 12 kuvamuunninta (JPG, PNG, WebP, SVG, BMP,, GIF, AVIF, HEIC, TIFF), favicon-generaattori, kuvaeditori, tekstilaskuri, väripaletit ja QR-koodit. Ilman rekisteröitymistä.',
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

    itemListElement: [
      {
        '@type': 'WebApplication',
        position: 1,
        name: 'JPG/PNG–WebP-muunnin',
        url: toAbsoluteUrl('/fi/tyokalut/jpg-webp-muunnin'),
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
      {
        '@type': 'WebApplication',
        position: 11,
        name: 'JPG WebP -muunnin',
        description: 'Muunna JPG-valokuvat kevyeen WebP-muotoon. Pienennä tiedostokokoa jopa 35%.',
        url: toAbsoluteUrl('/fi/tyokalut/jpg-webp-muunnin'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 12,
        name: 'PNG JPG -muunnin',
        description: 'Muunna PNG-tiedostot JPG-muotoon selaimessa. Rajaton, ilman rekisteröitymistä.',
        url: toAbsoluteUrl('/fi/tyokalut/png-jpg-muunnin'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 13,
        name: 'WebP JPG -muunnin',
        description: 'Muunna WebP-tiedostot yleisesti yhteensopivaan JPG-muotoon.',
        url: toAbsoluteUrl('/fi/tyokalut/webp-jpg-muunnin'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 14,
        name: 'PNG WebP -muunnin',
        description: 'Muunna PNG-grafiikat WebP-muotoon. Pienemmät tiedostot läpinäkyvyys säilyttäen.',
        url: toAbsoluteUrl('/fi/tyokalut/png-webp-muunnin'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 15,
        name: 'JPG PNG -muunnin',
        description: 'Muunna JPG-kuvat häviöttömään PNG-muotoon. Paikallinen käsittely selaimessa.',
        url: toAbsoluteUrl('/fi/tyokalut/jpg-png-muunnin'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 16,
        name: 'WebP PNG -muunnin',
        description: 'Muunna WebP-kuvat häviöttömään PNG-muotoon. Paikallinen käsittely.',
        url: toAbsoluteUrl('/fi/tyokalut/webp-png-muunnin'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 17,
        name: 'SVG PNG -muunnin',
        description: 'Muunna SVG-vektorigrafiikka PNG-muotoon. Ihanteellinen dokumentteihin ja sosiaaliseen mediaan.',
        url: toAbsoluteUrl('/fi/tyokalut/svg-png-muunnin'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 18,
        name: 'SVG JPG -muunnin',
        description: 'Muunna SVG-grafiikat kompaktiin JPG-muotoon. Pienempi tiedosto, täysi yhteensopivuus.',
        url: toAbsoluteUrl('/fi/tyokalut/svg-jpg-muunnin'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 19,
        name: 'BMP JPG -muunnin',
        description: 'Muunna BMP-tiedostot kevyeen JPG-muotoon. Dramaattinen koon pienentyminen.',
        url: toAbsoluteUrl('/fi/tyokalut/bmp-jpg-muunnin'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 20,
        name: 'BMP PNG -muunnin',
        description: 'Muunna BMP-kuvat häviöttömään PNG-muotoon. Laatu säilyy, koko pienenee.',
        url: toAbsoluteUrl('/fi/tyokalut/bmp-png-muunnin'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 21,
        name: 'GIF PNG -muunnin',
        description: 'Vie GIF-kuvan ensimmäinen ruutu staattisena PNG-kuvana. Ilman laadun heikkenemistä.',
        url: toAbsoluteUrl('/fi/tyokalut/gif-png-muunnin'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 22,
        name: 'GIF JPG -muunnin',
        description: 'Vie GIF-kuvan ensimmäinen ruutu kompaktina JPG-kuvana. Pienempi tiedosto.',
        url: toAbsoluteUrl('/fi/tyokalut/gif-jpg-muunnin'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 23,
        name: 'SVG WebP -muunnin',
        description: 'Muunna SVG-grafiikat kevyeen WebP-muotoon. Ihanteellinen verkkosivuille.',
        url: toAbsoluteUrl('/fi/tyokalut/svg-webp-muunnin'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 24,
        name: 'GIF WebP -muunnin',
        description: 'Vie GIF-kuvan ensimmainen ruutu kevyena WebP-kuvana.',
        url: toAbsoluteUrl('/fi/tyokalut/gif-webp-muunnin'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 25,
        name: 'BMP WebP -muunnin',
        description: 'Muunna BMP-tiedostot kevyeen WebP-muotoon. Jopa 95% pienempi.',
        url: toAbsoluteUrl('/fi/tyokalut/bmp-webp-muunnin'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 26,
        name: 'AVIF JPG -muunnin',
        description: 'Muunna AVIF-tiedostot yleiseen JPG-muotoon. Yhteensopiva kaikkialla.',
        url: toAbsoluteUrl('/fi/tyokalut/avif-jpg-muunnin'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 27,
        name: 'AVIF PNG -muunnin',
        description: 'Muunna AVIF-tiedostot haviottomaan PNG-muotoon. Taysi laatu.',
        url: toAbsoluteUrl('/fi/tyokalut/avif-png-muunnin'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 28,
        name: 'AVIF WebP -muunnin',
        description: 'Muunna AVIF-tiedostot WebP-muotoon. Laaja yhteensopivuus.',
        url: toAbsoluteUrl('/fi/tyokalut/avif-webp-muunnin'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 29,
        name: 'HEIC JPG -muunnin',
        description: 'Muunna iPhone HEIC-valokuvat yleiseen JPG-muotoon. Ei rekisteroitymista.',
        url: toAbsoluteUrl('/fi/tyokalut/heic-jpg-muunnin'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 30,
        name: 'HEIC PNG -muunnin',
        description: 'Muunna iPhone HEIC-valokuvat haviottomaan PNG-muotoon.',
        url: toAbsoluteUrl('/fi/tyokalut/heic-png-muunnin'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 31,
        name: 'HEIC WebP -muunnin',
        description: 'Muunna iPhone HEIC-valokuvat kevyeen WebP-muotoon.',
        url: toAbsoluteUrl('/fi/tyokalut/heic-webp-muunnin'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 32,
        name: 'TIFF JPG -muunnin',
        description: 'Muunna TIFF-tiedostot kompaktiin JPG-muotoon. Ihanteellinen skannauksille.',
        url: toAbsoluteUrl('/fi/tyokalut/tiff-jpg-muunnin'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 33,
        name: 'TIFF PNG -muunnin',
        description: 'Muunna TIFF-tiedostot haviottomaan PNG-muotoon.',
        url: toAbsoluteUrl('/fi/tyokalut/tiff-png-muunnin'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 34,
        name: 'TIFF WebP -muunnin',
        description: 'Muunna TIFF-tiedostot kevyeen WebP-muotoon. Valtava vahenema.',
        url: toAbsoluteUrl('/fi/tyokalut/tiff-webp-muunnin'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 35,
        name: 'JPG AVIF -muunnin',
        description: 'Muunna JPG-kuvat moderniin AVIF-muotoon. Jopa 50% parempi pakkaus kuin JPG.',
        url: toAbsoluteUrl('/fi/tyokalut/jpg-avif-muunnin'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 36,
        name: 'PNG AVIF -muunnin',
        description: 'Muunna PNG-grafiikat AVIF-muotoon lapinakvyystuella. Huomattavasti pienemmat tiedostot.',
        url: toAbsoluteUrl('/fi/tyokalut/png-avif-muunnin'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 37,
        name: 'WebP AVIF -muunnin',
        description: 'Muunna WebP-tiedostot AVIF-muotoon. Viela parempi pakkaus modernissa formaatissa.',
        url: toAbsoluteUrl('/fi/tyokalut/webp-avif-muunnin'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 38,
        name: 'SVG AVIF -muunnin',
        description: 'Muunna vektori-SVG-grafiikat kompaktiin AVIF-rasterimuotoon.',
        url: toAbsoluteUrl('/fi/tyokalut/svg-avif-muunnin'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 39,
        name: 'BMP AVIF -muunnin',
        description: 'Muunna pakkaamattomat BMP-tiedostot ultrakompaktiin AVIF-muotoon.',
        url: toAbsoluteUrl('/fi/tyokalut/bmp-avif-muunnin'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 40,
        name: 'GIF AVIF -muunnin',
        description: 'Muunna GIF:n ensimmainen ruutu staattiseksi AVIF-kuvaksi erinomaisella pakkauksella.',
        url: toAbsoluteUrl('/fi/tyokalut/gif-avif-muunnin'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 41,
        name: 'HEIC AVIF -muunnin',
        description: 'Muunna iPhonen HEIC-kuvat moderniin AVIF-muotoon.',
        url: toAbsoluteUrl('/fi/tyokalut/heic-avif-muunnin'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 42,
        name: 'TIFF AVIF -muunnin',
        description: 'Muunna TIFF-tiedostot moderniin AVIF-muotoon. Valtava tiedostokoon pienennys.',
        url: toAbsoluteUrl('/fi/tyokalut/tiff-avif-muunnin'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 43,
        name: 'JPG GIF -muunnin',
        description: 'Muunna JPG-kuvat GIF-muotoon. Taydellinen yksinkertaisille grafiikoille ja kuvakkeille.',
        url: toAbsoluteUrl('/fi/tyokalut/jpg-gif-muunnin'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 44,
        name: 'PNG GIF -muunnin',
        description: 'Muunna PNG-grafiikat GIF-muotoon. Ihanteellinen yksinkertaisille kuvakkeille ja grafiikoille.',
        url: toAbsoluteUrl('/fi/tyokalut/png-gif-muunnin'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 45,
        name: 'WebP GIF -muunnin',
        description: 'Muunna WebP-kuvat GIF-muotoon maksimaalisen yhteensopivuuden saavuttamiseksi.',
        url: toAbsoluteUrl('/fi/tyokalut/webp-gif-muunnin'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 46,
        name: 'SVG GIF -muunnin',
        description: 'Muunna vektori-SVG-grafiikat GIF-rasterimuotoon.',
        url: toAbsoluteUrl('/fi/tyokalut/svg-gif-muunnin'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 47,
        name: 'BMP GIF -muunnin',
        description: 'Muunna pakkaamattomat BMP-tiedostot kevyeen GIF-muotoon.',
        url: toAbsoluteUrl('/fi/tyokalut/bmp-gif-muunnin'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 48,
        name: 'JPG TIFF -muunnin',
        description: 'Muunna JPG-kuvat haviottomaan TIFF-muotoon. Tulostukseen ja arkistointiin.',
        url: toAbsoluteUrl('/fi/tyokalut/jpg-tiff-muunnin'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 49,
        name: 'PNG TIFF -muunnin',
        description: 'Muunna PNG-grafiikat ammattimaiseen TIFF-muotoon.',
        url: toAbsoluteUrl('/fi/tyokalut/png-tiff-muunnin'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 50,
        name: 'WebP TIFF -muunnin',
        description: 'Muunna WebP-kuvat ammattimaiseen TIFF-muotoon tulostukseen ja arkistointiin.',
        url: toAbsoluteUrl('/fi/tyokalut/webp-tiff-muunnin'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 51,
        name: 'SVG TIFF -muunnin',
        description: 'Muunna vektori-SVG-grafiikat korkealaatuiseen TIFF-rasterimuotoon.',
        url: toAbsoluteUrl('/fi/tyokalut/svg-tiff-muunnin'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 52,
        name: 'BMP TIFF -muunnin',
        description: 'Muunna BMP-tiedostot ammattimaiseen TIFF-muotoon tulostusta varten.',
        url: toAbsoluteUrl('/fi/tyokalut/bmp-tiff-muunnin'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 53,
        name: 'HEIC TIFF -muunnin',
        description: 'Muunna iPhonen HEIC-kuvat ammattimaiseen TIFF-muotoon.',
        url: toAbsoluteUrl('/fi/tyokalut/heic-tiff-muunnin'),
        applicationCategory: 'MultimediaApplication',
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
        description="12 kuvaformaattimuunninta, kuvaeditori, favicon-generaattori, tekstilaskuri, värityökalut ja QR-koodit. Ilman rekisteröitymistä, ilman rajoituksia."
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
              icon: <RiCropLine className="h-8 w-8" />,
              title: 'Kuvaeditori verkossa',
              topImageAlt: 'Kuvaeditori verkossa Arteon',
              topImageSrc: '/assets/tools/free-image-editor-crop-resize-and-convert/kuvaeditori-fi.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Valmistele täydellinen rajaus sosiaaliseen mediaan tai verkkosivustollesi. Valitse valmis muoto tai syötä omat pikselimitat ja lataa kuva PNG-, JPG- tai WebP-muodossa.</p>
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
              topImageSrc: '/assets/tools/free-meta-title-and-description-checker-pixel-width/meta-otsikko-ja-kuvaus-tarkistus-fi.webp',
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
        <Gap size="sm" />

        <SectionSteps
          title="Kuvaformaattimuuntimet"
          description="12 online-kuvamuunninta — muunna JPG, PNG, WebP, SVG, BMP ja GIF välillä. Muunnos selaimessa, tiedostoja ei lähetetä."
          grid="three"
          items={[
            {
              icon: <RiLoopLeftLine className="h-8 w-8" />,
              title: 'JPG WebP -muunnin',
              topImageAlt: 'JPG WebP -muunnin Arteon',
              topImageSrc: '/assets/tools/jpg-png-to-webp-converter/jpg-png-webp-muunnin-fi.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Muunna JPG-valokuvat kevyeen WebP-muotoon. Pienennä tiedostokokoa jopa 35%.</p>
                  <div className="mt-4">
                    <Button arrow link="/fi/tyokalut/jpg-webp-muunnin">
                      Avaa työkalu
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiLoopLeftLine className="h-8 w-8" />,
              title: 'PNG JPG -muunnin',
              topImageAlt: 'PNG JPG -muunnin Arteon',
              topImageSrc: '/assets/tools/jpg-png-to-webp-converter/jpg-png-webp-muunnin-fi.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Muunna PNG-tiedostot JPG-muotoon selaimessa. Rajaton, ilman rekisteröitymistä.</p>
                  <div className="mt-4">
                    <Button arrow link="/fi/tyokalut/png-jpg-muunnin">
                      Avaa työkalu
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiLoopLeftLine className="h-8 w-8" />,
              title: 'WebP JPG -muunnin',
              topImageAlt: 'WebP JPG -muunnin Arteon',
              topImageSrc: '/assets/tools/jpg-png-to-webp-converter/jpg-png-webp-muunnin-fi.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Muunna WebP-tiedostot yleisesti yhteensopivaan JPG-muotoon.</p>
                  <div className="mt-4">
                    <Button arrow link="/fi/tyokalut/webp-jpg-muunnin">
                      Avaa työkalu
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiLoopLeftLine className="h-8 w-8" />,
              title: 'PNG WebP -muunnin',
              topImageAlt: 'PNG WebP -muunnin Arteon',
              topImageSrc: '/assets/tools/jpg-png-to-webp-converter/jpg-png-webp-muunnin-fi.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Muunna PNG-grafiikat WebP-muotoon. Pienemmät tiedostot läpinäkyvyys säilyttäen.</p>
                  <div className="mt-4">
                    <Button arrow link="/fi/tyokalut/png-webp-muunnin">
                      Avaa työkalu
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiLoopLeftLine className="h-8 w-8" />,
              title: 'JPG PNG -muunnin',
              topImageAlt: 'JPG PNG -muunnin Arteon',
              topImageSrc: '/assets/tools/jpg-png-to-webp-converter/jpg-png-webp-muunnin-fi.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Muunna JPG-kuvat häviöttömään PNG-muotoon. Paikallinen käsittely selaimessa.</p>
                  <div className="mt-4">
                    <Button arrow link="/fi/tyokalut/jpg-png-muunnin">
                      Avaa työkalu
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiLoopLeftLine className="h-8 w-8" />,
              title: 'WebP PNG -muunnin',
              topImageAlt: 'WebP PNG -muunnin Arteon',
              topImageSrc: '/assets/tools/jpg-png-to-webp-converter/jpg-png-webp-muunnin-fi.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Muunna WebP-kuvat häviöttömään PNG-muotoon. Paikallinen käsittely.</p>
                  <div className="mt-4">
                    <Button arrow link="/fi/tyokalut/webp-png-muunnin">
                      Avaa työkalu
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiLoopLeftLine className="h-8 w-8" />,
              title: 'SVG PNG -muunnin',
              topImageAlt: 'SVG PNG -muunnin Arteon',
              topImageSrc: '/assets/tools/jpg-png-to-webp-converter/jpg-png-webp-muunnin-fi.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Muunna SVG-vektorigrafiikka PNG-muotoon. Ihanteellinen dokumentteihin ja sosiaaliseen mediaan.</p>
                  <div className="mt-4">
                    <Button arrow link="/fi/tyokalut/svg-png-muunnin">
                      Avaa työkalu
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiLoopLeftLine className="h-8 w-8" />,
              title: 'SVG JPG -muunnin',
              topImageAlt: 'SVG JPG -muunnin Arteon',
              topImageSrc: '/assets/tools/jpg-png-to-webp-converter/jpg-png-webp-muunnin-fi.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Muunna SVG-grafiikat kompaktiin JPG-muotoon. Pienempi tiedosto, täysi yhteensopivuus.</p>
                  <div className="mt-4">
                    <Button arrow link="/fi/tyokalut/svg-jpg-muunnin">
                      Avaa työkalu
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiLoopLeftLine className="h-8 w-8" />,
              title: 'BMP JPG -muunnin',
              topImageAlt: 'BMP JPG -muunnin Arteon',
              topImageSrc: '/assets/tools/jpg-png-to-webp-converter/jpg-png-webp-muunnin-fi.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Muunna BMP-tiedostot kevyeen JPG-muotoon. Dramaattinen koon pienentyminen.</p>
                  <div className="mt-4">
                    <Button arrow link="/fi/tyokalut/bmp-jpg-muunnin">
                      Avaa työkalu
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />

        <Gap size="sm" />

        <Gap variant="line" />
        <SectionInfo title="Mitä Arteonin työkalut ovat?">
          <p className="mb-4">
            22 ilmaista työkalua materiaalien valmisteluun verkkosivuille, sosiaaliseen mediaan ja painotuotteisiin – WebP-muunnin, favicon-generaattori, tekstilaskuri, värien poiminta, palettien
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
