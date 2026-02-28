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
  title: 'Ingyenes online eszközök | Konverterek, SEO, színek, favicon',
  description:
    'Ingyenes online eszközök: 12 képkonverter (JPG, PNG, WebP, SVG, BMP,, GIF, AVIF, HEIC, TIFF), favicon-generátor, képszerkesztő, szövegszámláló, színpaletták és QR-kódok. Regisztráció nélkül.',
  alternates: getToolsIndexAlternates('hu'),
  openGraph: {
    title: 'Ingyenes online eszközök | Konverterek, SEO, színek, favicon',
    description:
      'Ingyenes online eszközök: 12 képkonverter (JPG, PNG, WebP, SVG, BMP,, GIF, AVIF, HEIC, TIFF), favicon-generátor, képszerkesztő, szövegszámláló, színpaletták és QR-kódok. Regisztráció nélkül.',
    url: toAbsoluteUrl('/hu/eszkozok'),
    type: 'website',
    images: [{ url: toAbsoluteUrl('/assets/arteon-logo-on-mockup.webp'), width: 1200, height: 630 }],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Ingyenes online eszközök — képkonverterek, SEO, színek, favicon',
  description:
    'Ingyenes online eszközök: 12 képkonverter (JPG, PNG, WebP, SVG, BMP,, GIF, AVIF, HEIC, TIFF), favicon-generátor, képszerkesztő, szövegszámláló, színpaletták és QR-kódok. Regisztráció nélkül.',
  url: toAbsoluteUrl('/hu/eszkozok'),
  inLanguage: 'hu',
  isPartOf: { '@type': 'WebSite', name: 'Arteon Agency', url: siteUrl },
  about: [
    { '@type': 'Thing', name: 'Képoptimalizálás' },
    { '@type': 'Thing', name: 'SEO' },
    { '@type': 'Thing', name: 'Színek és arculat' },
    { '@type': 'Thing', name: 'Online generátorok' },
  ],
  mainEntity: {
    '@type': 'ItemList',

    itemListElement: [
      {
        '@type': 'WebApplication',
        position: 1,
        name: 'JPG és PNG WebP konverter online',
        description: 'Ingyenes online JPG és PNG WebP konverter. Csökkentse a fájlméretet akár 35%-kal látható minőségromlás nélkül. Regisztráció nélkül — a fájlok a böngészőben maradnak.',
        url: toAbsoluteUrl('/hu/eszkozok/jpg-webp-konverter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 2,
        name: 'Online képszerkesztő',
        description: 'Képek vágása és átméretezése közösségi médiához és weboldalakhoz. Előre beállított formátumok, egyéni pixelméretek és kerek avatar támogatás.',
        url: toAbsoluteUrl('/hu/eszkozok/kepszerkeszto'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 3,
        name: 'Online favicon generátor',
        description: 'Ingyenes online favicon generátor. Készítsen favicon.ico-t és PNG ikonokat (16×16-tól 512×512-ig) egyetlen képből — a böngészők és a Lighthouse követelményeinek megfelelően.',
        url: toAbsoluteUrl('/hu/eszkozok/ingyenes-favicon-generator'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 4,
        name: 'Meta cím és leírás ellenőrző',
        description: 'Meta cím és leírás hossz-ellenőrző Google előnézettel. Megmutatja a karakterszámot és a pixelszélességet, hogy elkerülje a csonkolt címeket és leírásokat.',
        url: toAbsoluteUrl('/hu/eszkozok/meta-cim-es-leiras-ellenorzo'),
        applicationCategory: 'DeveloperApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 5,
        name: 'HTML e-mail aláírás generátor',
        description: 'Ingyenes HTML e-mail aláírás generátor. Adja meg az elérhetőségeket, a CTA linket és a közösségi média profilokat, majd másolja a kész HTML kódot a Gmailbe vagy az Outlookba.',
        url: toAbsoluteUrl('/hu/eszkozok/ingyenes-email-alairas-generator'),
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 6,
        name: 'Színkontraszt ellenőrző',
        description: 'Ellenőrizze a szöveg és a háttérszínek kontrasztját és olvashatóságát a WCAG szerint. Kiszámítja a kontrasztarányt és segít az automatikus színbeállításban.',
        url: toAbsoluteUrl('/hu/eszkozok/szinkontraszt-ellenorzo'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 7,
        name: 'Színkinyerő képből online',
        description: 'Ingyenes online színkinyerő. Töltsön fel egy fényképet vagy logót, és kapjon egy palettát legfeljebb 12 domináns színnel (HEX és RGB).',
        url: toAbsoluteUrl('/hu/eszkozok/szinkinyero-kepbol'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 8,
        name: 'Színpaletta generátor online',
        description: 'Generáljon színpalettákat egyetlen alapszínből. Monokromatikus, triádikus, analóg, komplementer sémák, valamint pasztell, sötét és minimalista variánsok.',
        url: toAbsoluteUrl('/hu/eszkozok/szinpaletta-generator'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 9,
        name: 'Szó- és karakterszámláló online',
        description: 'Ingyenes szó- és karakterszámláló szöveghossz-értékeléssel. Ellenőrizze, hogy a szöveg hossza megfelel-e a kezdőlap, szolgáltatásoldal, blogbejegyzés vagy termékleírás számára.',
        url: toAbsoluteUrl('/hu/eszkozok/szo-es-karakterszamlalo'),
        applicationCategory: 'DeveloperApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 10,
        name: 'QR-kód generátor online',
        description:
          'Ingyenes online QR-kód generátor. Hozzon létre QR-kódokat weboldalakhoz, vCard-okhoz, étlapokhoz vagy szórólapokhoz. Export PNG és SVG formátumban, regisztráció és korlátozás nélkül.',
        url: toAbsoluteUrl('/hu/eszkozok/ingyenes-qr-kod-generator'),
        applicationCategory: 'UtilityApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 11,
        name: 'JPG WebP konverter',
        description: 'JPG fotók konvertálása könnyű WebP-re. Képméret csökkentése akár 35%-kal.',
        url: toAbsoluteUrl('/hu/eszkozok/jpg-webp-konverter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 12,
        name: 'PNG JPG konverter',
        description: 'PNG fájlok konvertálása JPG-re a böngészőben. Korlátlan, regisztráció nélkül.',
        url: toAbsoluteUrl('/hu/eszkozok/prevodnik-png-na-jpg'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 13,
        name: 'WebP JPG konverter',
        description: 'WebP fájlok konvertálása univerzálisan kompatibilis JPG-re.',
        url: toAbsoluteUrl('/hu/eszkozok/webp-jpg-konverter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 14,
        name: 'PNG WebP konverter',
        description: 'PNG grafikák konvertálása WebP-re. Kisebb fájlok az átlátszóság megőrzésével.',
        url: toAbsoluteUrl('/hu/eszkozok/png-webp-konverter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 15,
        name: 'JPG PNG konverter',
        description: 'JPG képek konvertálása veszteségmentes PNG-re. Helyi feldolgozás a böngészőben.',
        url: toAbsoluteUrl('/hu/eszkozok/jpg-png-konverter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 16,
        name: 'WebP PNG konverter',
        description: 'WebP képek konvertálása veszteségmentes PNG-re. Helyi feldolgozás.',
        url: toAbsoluteUrl('/hu/eszkozok/webp-png-konverter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 17,
        name: 'SVG PNG konverter',
        description: 'SVG vektorgrafika konvertálása PNG-re. Ideális dokumentumokhoz és közösségi médiához.',
        url: toAbsoluteUrl('/hu/eszkozok/svg-png-konverter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 18,
        name: 'SVG JPG konverter',
        description: 'SVG grafikák konvertálása kompakt JPG-re. Kisebb fájl, teljes kompatibilitás.',
        url: toAbsoluteUrl('/hu/eszkozok/svg-jpg-konverter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 19,
        name: 'BMP JPG konverter',
        description: 'BMP fájlok konvertálása könnyű JPG-re. Drasztikus méretcsökkentés.',
        url: toAbsoluteUrl('/hu/eszkozok/bmp-jpg-konverter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 20,
        name: 'BMP PNG konverter',
        description: 'BMP képek konvertálása veszteségmentes PNG-re. Minőség megőrzése, méret csökkentése.',
        url: toAbsoluteUrl('/hu/eszkozok/bmp-png-konverter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 21,
        name: 'GIF PNG konverter',
        description: 'Exportálja a GIF első képkockáját statikus PNG-ként. Minőségveszteség nélkül.',
        url: toAbsoluteUrl('/hu/eszkozok/gif-png-konverter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 22,
        name: 'GIF JPG konverter',
        description: 'Exportálja a GIF első képkockáját kompakt JPG-ként. Kisebb fájl.',
        url: toAbsoluteUrl('/hu/eszkozok/gif-jpg-konverter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 23,
        name: 'SVG WebP konverter',
        description: 'SVG grafika konvertalasa konnyu WebP-re. Idealis weboldalakhoz.',
        url: toAbsoluteUrl('/hu/eszkozok/svg-webp-konverter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 24,
        name: 'GIF WebP konverter',
        description: 'GIF elso kepkockajanak exportalasa konnyu WebP-re. Kisebb fajl.',
        url: toAbsoluteUrl('/hu/eszkozok/gif-webp-konverter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 25,
        name: 'BMP WebP konverter',
        description: 'BMP fajlok konvertalasa konnyu WebP-re. Akar 95%-os csokkentes.',
        url: toAbsoluteUrl('/hu/eszkozok/bmp-webp-konverter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 26,
        name: 'AVIF JPG konverter',
        description: 'AVIF fajlok konvertalasa univerzalis JPG-re. Kompatibilis mindenutt.',
        url: toAbsoluteUrl('/hu/eszkozok/avif-jpg-konverter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 27,
        name: 'AVIF PNG konverter',
        description: 'AVIF fajlok konvertalasa vesztesgmentes PNG-re. Teljes minoseg.',
        url: toAbsoluteUrl('/hu/eszkozok/avif-png-konverter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 28,
        name: 'AVIF WebP konverter',
        description: 'AVIF fajlok konvertalasa WebP-re. Szeles kompatibilitas.',
        url: toAbsoluteUrl('/hu/eszkozok/avif-webp-konverter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 29,
        name: 'HEIC JPG konverter',
        description: 'iPhone HEIC fotok konvertalasa univerzalis JPG-re. Regisztracio nelkul.',
        url: toAbsoluteUrl('/hu/eszkozok/heic-jpg-konverter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 30,
        name: 'HEIC PNG konverter',
        description: 'iPhone HEIC fotok konvertalasa vesztesgmentes PNG-re.',
        url: toAbsoluteUrl('/hu/eszkozok/heic-png-konverter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 31,
        name: 'HEIC WebP konverter',
        description: 'iPhone HEIC fotok konvertalasa konnyu WebP-re. Kisebb meret.',
        url: toAbsoluteUrl('/hu/eszkozok/heic-webp-konverter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 32,
        name: 'TIFF JPG konverter',
        description: 'TIFF fajlok konvertalasa kompakt JPG-re. Idealis szkenekhez.',
        url: toAbsoluteUrl('/hu/eszkozok/tiff-jpg-konverter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 33,
        name: 'TIFF PNG konverter',
        description: 'TIFF fajlok konvertalasa vesztesgmentes PNG-re.',
        url: toAbsoluteUrl('/hu/eszkozok/tiff-png-konverter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 34,
        name: 'TIFF WebP konverter',
        description: 'TIFF fajlok konvertalasa konnyu WebP-re. Hatalmas meretcsokkentes.',
        url: toAbsoluteUrl('/hu/eszkozok/tiff-webp-konverter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 35,
        name: 'JPG AVIF konverter',
        description: 'JPG fotok konvertalasa modern AVIF formatumra. Akar 50%-kal jobb tomoritest mint JPG.',
        url: toAbsoluteUrl('/hu/eszkozok/jpg-avif-konverter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 36,
        name: 'PNG AVIF konverter',
        description: 'PNG grafika konvertalasa AVIF-re atlatszosag megtartasaval. Jelentosen kisebb fajlok.',
        url: toAbsoluteUrl('/hu/eszkozok/png-avif-konverter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 37,
        name: 'WebP AVIF konverter',
        description: 'WebP fajlok konvertalasa AVIF-re. Meg jobb tomoritest modern formatumban.',
        url: toAbsoluteUrl('/hu/eszkozok/webp-avif-konverter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 38,
        name: 'SVG AVIF konverter',
        description: 'Vektor SVG grafika konvertalasa kompakt AVIF raszter formatumra.',
        url: toAbsoluteUrl('/hu/eszkozok/svg-avif-konverter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 39,
        name: 'BMP AVIF konverter',
        description: 'Tomoritetlen BMP fajlok konvertalasa ultrakompakt AVIF-re.',
        url: toAbsoluteUrl('/hu/eszkozok/bmp-avif-konverter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 40,
        name: 'GIF AVIF konverter',
        description: 'GIF elso kepkocka konvertalasa statikus AVIF keppe kivaloan tomoritest.',
        url: toAbsoluteUrl('/hu/eszkozok/gif-avif-konverter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 41,
        name: 'HEIC AVIF konverter',
        description: 'iPhone HEIC fotok konvertalasa modern AVIF formatumra.',
        url: toAbsoluteUrl('/hu/eszkozok/heic-avif-konverter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 42,
        name: 'TIFF AVIF konverter',
        description: 'TIFF fajlok konvertalasa modern AVIF-re. Hatalmas fajlmeret csokkenes.',
        url: toAbsoluteUrl('/hu/eszkozok/tiff-avif-konverter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 43,
        name: 'JPG GIF konverter',
        description: 'JPG fotok konvertalasa GIF formatumra. Tokeletes egyszeru grafikakhoz es ikonokhoz.',
        url: toAbsoluteUrl('/hu/eszkozok/jpg-gif-konverter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 44,
        name: 'PNG GIF konverter',
        description: 'PNG grafika konvertalasa GIF-re. Idealis egyszeru ikonokhoz es grafikakhoz.',
        url: toAbsoluteUrl('/hu/eszkozok/png-gif-konverter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 45,
        name: 'WebP GIF konverter',
        description: 'WebP kepek konvertalasa GIF formatumra maximalis kompatibilitassal.',
        url: toAbsoluteUrl('/hu/eszkozok/webp-gif-konverter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 46,
        name: 'SVG GIF konverter',
        description: 'Vektor SVG grafika konvertalasa GIF raszter formatumra.',
        url: toAbsoluteUrl('/hu/eszkozok/svg-gif-konverter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 47,
        name: 'BMP GIF konverter',
        description: 'Tomoritetlen BMP fajlok konvertalasa konnyu GIF-re.',
        url: toAbsoluteUrl('/hu/eszkozok/bmp-gif-konverter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 48,
        name: 'JPG TIFF konverter',
        description: 'JPG fotok konvertalasa veszteségmentes TIFF-re. Nyomtatashoz es archivalashoz.',
        url: toAbsoluteUrl('/hu/eszkozok/jpg-tiff-konverter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 49,
        name: 'PNG TIFF konverter',
        description: 'PNG grafika konvertalasa professzionalis TIFF formatumra.',
        url: toAbsoluteUrl('/hu/eszkozok/png-tiff-konverter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 50,
        name: 'WebP TIFF konverter',
        description: 'WebP kepek konvertalasa professzionalis TIFF-re nyomtatashoz es archivalashoz.',
        url: toAbsoluteUrl('/hu/eszkozok/webp-tiff-konverter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 51,
        name: 'SVG TIFF konverter',
        description: 'Vektor SVG grafika konvertalasa kiváló minosegu TIFF raszterre.',
        url: toAbsoluteUrl('/hu/eszkozok/svg-tiff-konverter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 52,
        name: 'BMP TIFF konverter',
        description: 'BMP fajlok konvertalasa professzionalis TIFF formatumra nyomtatashoz.',
        url: toAbsoluteUrl('/hu/eszkozok/bmp-tiff-konverter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 53,
        name: 'HEIC TIFF konverter',
        description: 'iPhone HEIC fotok konvertalasa professzionalis TIFF formatumra.',
        url: toAbsoluteUrl('/hu/eszkozok/heic-tiff-konverter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
    ],
  },
};

const faqItems = [
  { question: 'Mennyibe kerülnek az eszközök?', answer: 'Semmibe. Minden eszköz ingyenes, előfizetés és rejtett díjak nélkül.' },
  {
    question: 'A fájljaim elküldésre kerülnek egy szerverre?',
    answer: 'Nem. Minden eszköz teljes egészében a böngészőjében fut. A fájlok soha nem hagyják el a számítógépét, és sehol sem kerülnek tárolásra.',
  },
  { question: 'Szükségem van fiókra?', answer: 'Nem. Azonnal használhatja az eszközöket bejelentkezés vagy fiók létrehozása nélkül.' },
  { question: 'Van használati korlát?', answer: 'Nincs. Használja korlátozás nélkül — nincs napi limit, nincs fájllimit, nincs konverziós limit.' },
  {
    question: 'Mire valók ezek az eszközök?',
    answer:
      'Segítenek anyagok előkészítésében weboldalakhoz, közösségi médiához és nyomtatáshoz: képek optimalizálása, faviconok készítése, szöveghossz ellenőrzése, QR-kódok generálása, színek kiválasztása és olvashatóságuk ellenőrzése.',
  },
  { question: 'Működnek az eszközök mobilon?', answer: 'Igen, de néhány eszköz (WebP konverter, favicon generátor) jobban működik asztali gépen a nagyobb fájlok feldolgozása miatt.' },
];

export default function ToolsIndexPage() {
  return (
    <>
      <HeroBanner
        title="Ingyenes online eszközök"
        description="12 képformátum konverter, képszerkesztő, favicon-generátor, szövegszámláló, színeszközök és QR-kódok. Regisztráció nélkül, korlátok nélkül."
        backgroundImage="/assets/arteon-logo-on-mockup.webp"
        overlay="black"
      />

      <Wrapper>
        <Gap size="sm" />

        <SectionSteps
          title="Képek és faviconok"
          description="Eszközök fényképek, grafikák és ikonok előkészítéséhez weboldalakhoz és közösségi médiához."
          grid="three"
          items={[
            {
              icon: <RiCropLine className="h-8 w-8" />,
              title: 'Online képszerkesztő',
              topImageAlt: 'Online képszerkesztő Arteon',
              topImageSrc: '/assets/tools/free-image-editor-crop-resize-and-convert/online-kepszerkeszto-hu.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    Készítse el a tökéletes vágást közösségi médiához vagy weboldalához. Válasszon kész formátumot vagy adjon meg egyéni pixelméreteket, és töltse le a képet PNG, JPG vagy WebP
                    formátumban.
                  </p>
                  <div className="mt-4">
                    <Button arrow link="/hu/eszkozok/online-kepszerkeszto">
                      Megnyitás
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiAppsLine className="h-8 w-8" />,
              title: 'Favicon és ikon generátor',
              topImageAlt: 'Favicon generátor Arteon',
              topImageSrc: '/assets/tools/favicon-generator/ingyenes-favicon-generator-hu.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    Generáljon <strong>favicon.ico</strong>-t és PNG ikonokat 180x180, 192x192 és 512x512 méretben egyetlen képből — a böngészők és a Lighthouse követelményeinek megfelelően.
                  </p>
                  <div className="mt-4">
                    <Button arrow link="/hu/eszkozok/ingyenes-favicon-generator">
                      Eszköz megnyitása
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />

        <SectionSteps
          title="Szöveg és SEO"
          description="Eszközök a szöveghossz, a meta-címkék ellenőrzéséhez és az oldal keresési eredményekben való előnézetéhez."
          grid="three"
          items={[
            {
              icon: <RiFileTextLine className="h-8 w-8" />,
              title: 'Meta cím és leírás ellenőrző',
              topImageAlt: 'Meta cím és leírás ellenőrző Arteon',
              topImageSrc: '/assets/tools/free-meta-title-and-description-checker-pixel-width/meta-cim-es-leiras-ellenorzo-hu.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Ellenőrizze a karakterszámot, szószámot és pixelszélességet — Google előnézettel. Kerülje el a csonkolt címeket és leírásokat a keresési eredményekben.</p>
                  <div className="mt-4">
                    <Button arrow link="/hu/eszkozok/meta-cim-es-leiras-ellenorzo">
                      Eszköz megnyitása
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiArticleLine className="h-8 w-8" />,
              title: 'Szó- és karakterszámláló',
              topImageAlt: 'Szó- és karakterszámláló Arteon',
              topImageSrc: '/assets/tools/word-and-character-counter-with-text-formatting-tools/szo-es-karakterszamlalo-hu.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    Ellenőrizze a szöveghosszt és értékelje, hogy megfelel-e egy kezdőlap, szolgáltatásoldal, blogbejegyzés vagy termékleírás számára. Az eszköz szavakat, karaktereket, bekezdéseket és
                    olvasási időt számol.
                  </p>
                  <div className="mt-4">
                    <Button arrow link="/hu/eszkozok/szo-es-karakterszamlalo">
                      Eszköz megnyitása
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />

        <Gap size="sm" />

        <SectionSteps
          title="E-mail és kommunikáció"
          description="Eszközök a professzionális e-mail kommunikációhoz és az egységes márkaarculathoz."
          grid="three"
          items={[
            {
              icon: <RiMailLine className="h-8 w-8" />,
              title: 'Ingyenes HTML e-mail aláírás generátor',
              topImageAlt: 'Ingyenes HTML e-mail aláírás generátor Arteon',
              topImageSrc: '/assets/tools/free-html-email-signature-generator/ingyenes-email-alairas-generator-hu.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Készítsen professzionális e-mail aláírást percek alatt. Adja meg adatait, válasszon színeket, és másolja a kész HTML kódot a Gmailbe, Outlookba vagy más e-mail kliensbe.</p>
                  <div className="mt-4">
                    <Button arrow link="/hu/eszkozok/ingyenes-email-alairas-generator">
                      Eszköz megnyitása
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />

        <Gap size="sm" />

        <SectionSteps
          title="QR-kódok"
          description="QR-kód generátor weboldalakhoz, névjegykártyákhoz, étlapokhoz és nyomtatott anyagokhoz."
          grid="three"
          items={[
            {
              icon: <RiQrCodeLine className="h-8 w-8" />,
              title: 'Ingyenes QR-kód generátor',
              topImageAlt: 'Ingyenes QR-kód generátor Arteon',
              topImageSrc: '/assets/tools/qr-code-generator/ingyenes-qr-kod-generator-hu.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Hozzon létre QR-kódot weboldalhoz, vCard-hoz, étterem étlapjához vagy szórólaphoz. Export PNG és SVG formátumban — regisztráció és korlátozás nélkül.</p>
                  <div className="mt-4">
                    <Button arrow link="/hu/eszkozok/ingyenes-qr-kod-generator">
                      Eszköz megnyitása
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />

        <Gap size="sm" />

        <SectionSteps
          title="Színek és akadálymentesítés"
          description="Eszközök a színekkel, kontraszttal és WCAG akadálymentesítéssel való munkához."
          grid="three"
          items={[
            {
              icon: <RiContrast2Line className="h-8 w-8" />,
              title: 'Színkontraszt ellenőrző',
              topImageAlt: 'Színkontraszt ellenőrző Arteon',
              topImageSrc: '/assets/tools/color-contrast-and-readability-checker/szinkontraszt-ellenorzo-hu.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    Ellenőrizze, hogy a szöveg és a háttérszínek olvashatóak-e. Adja meg a színkódokat, tekintse meg a kontrasztarányt a <strong>WCAG</strong> szerint, és használja a{' '}
                    <strong>Match</strong> funkciót az automatikus korrekcióhoz.
                  </p>
                  <div className="mt-4">
                    <Button arrow link="/hu/eszkozok/szinkontraszt-ellenorzo">
                      Eszköz megnyitása
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiPantoneLine className="h-8 w-8" />,
              title: 'Színkinyerő képből',
              topImageAlt: 'Színkinyerő képből Arteon',
              topImageSrc: '/assets/tools/image-color-extractor/szinkinyero-kepbol-hu.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Töltsön fel egy fényképet vagy logót — az eszköz kinyeri a domináns színeket. Másolja a HEX kódokat egyetlen kattintással és használja őket bárhol.</p>
                  <div className="mt-4">
                    <Button arrow link="/hu/eszkozok/szinkinyero-kepbol">
                      Eszköz megnyitása
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiPaletteLine className="h-8 w-8" />,
              title: 'Színpaletta generátor',
              topImageAlt: 'Színpaletta generátor Arteon',
              topImageSrc: '/assets/tools/color-palette-generator/szinpaletta-generator-hu.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Válasszon egy alapszínt és generáljon 9 színpalettát: monokromatikus, komplementer, triádikus, pasztell, sötét és több. Másolja a HEX kódokat egyetlen kattintással.</p>
                  <div className="mt-4">
                    <Button arrow link="/hu/eszkozok/szinpaletta-generator">
                      Eszköz megnyitása
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />

        <Gap size="sm" />

        <SectionSteps
          title="Képformátum konverterek"
          description="12 online képkonverter — váltson formátumot JPG, PNG, WebP, SVG, BMP és GIF között. Konverzió a böngészőben, fájlok feltöltése nélkül."
          grid="three"
          items={[
            {
              icon: <RiLoopLeftLine className="h-8 w-8" />,
              title: 'JPG WebP konverter',
              topImageAlt: 'JPG WebP konverter Arteon',
              topImageSrc: '/assets/tools/jpg-png-to-webp-converter/jpg-png-webp-konverter-hu.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>JPG fotók konvertálása könnyű WebP-re. Képméret csökkentése akár 35%-kal.</p>
                  <div className="mt-4">
                    <Button arrow link="/hu/eszkozok/jpg-webp-konverter">
                      Megnyitás
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiLoopLeftLine className="h-8 w-8" />,
              title: 'PNG JPG konverter',
              topImageAlt: 'PNG JPG konverter Arteon',
              topImageSrc: '/assets/tools/jpg-png-to-webp-converter/jpg-png-webp-konverter-hu.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>PNG fájlok konvertálása JPG-re a böngészőben. Korlátlan, regisztráció nélkül.</p>
                  <div className="mt-4">
                    <Button arrow link="/hu/eszkozok/prevodnik-png-na-jpg">
                      Megnyitás
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiLoopLeftLine className="h-8 w-8" />,
              title: 'WebP JPG konverter',
              topImageAlt: 'WebP JPG konverter Arteon',
              topImageSrc: '/assets/tools/jpg-png-to-webp-converter/jpg-png-webp-konverter-hu.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>WebP fájlok konvertálása univerzálisan kompatibilis JPG-re.</p>
                  <div className="mt-4">
                    <Button arrow link="/hu/eszkozok/webp-jpg-konverter">
                      Megnyitás
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiLoopLeftLine className="h-8 w-8" />,
              title: 'PNG WebP konverter',
              topImageAlt: 'PNG WebP konverter Arteon',
              topImageSrc: '/assets/tools/jpg-png-to-webp-converter/jpg-png-webp-konverter-hu.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>PNG grafikák konvertálása WebP-re. Kisebb fájlok az átlátszóság megőrzésével.</p>
                  <div className="mt-4">
                    <Button arrow link="/hu/eszkozok/png-webp-konverter">
                      Megnyitás
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiLoopLeftLine className="h-8 w-8" />,
              title: 'JPG PNG konverter',
              topImageAlt: 'JPG PNG konverter Arteon',
              topImageSrc: '/assets/tools/jpg-png-to-webp-converter/jpg-png-webp-konverter-hu.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>JPG képek konvertálása veszteségmentes PNG-re. Helyi feldolgozás a böngészőben.</p>
                  <div className="mt-4">
                    <Button arrow link="/hu/eszkozok/jpg-png-konverter">
                      Megnyitás
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiLoopLeftLine className="h-8 w-8" />,
              title: 'WebP PNG konverter',
              topImageAlt: 'WebP PNG konverter Arteon',
              topImageSrc: '/assets/tools/jpg-png-to-webp-converter/jpg-png-webp-konverter-hu.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>WebP képek konvertálása veszteségmentes PNG-re. Helyi feldolgozás.</p>
                  <div className="mt-4">
                    <Button arrow link="/hu/eszkozok/webp-png-konverter">
                      Megnyitás
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiLoopLeftLine className="h-8 w-8" />,
              title: 'SVG PNG konverter',
              topImageAlt: 'SVG PNG konverter Arteon',
              topImageSrc: '/assets/tools/jpg-png-to-webp-converter/jpg-png-webp-konverter-hu.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>SVG vektorgrafika konvertálása PNG-re. Ideális dokumentumokhoz és közösségi médiához.</p>
                  <div className="mt-4">
                    <Button arrow link="/hu/eszkozok/svg-png-konverter">
                      Megnyitás
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiLoopLeftLine className="h-8 w-8" />,
              title: 'SVG JPG konverter',
              topImageAlt: 'SVG JPG konverter Arteon',
              topImageSrc: '/assets/tools/jpg-png-to-webp-converter/jpg-png-webp-konverter-hu.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>SVG grafikák konvertálása kompakt JPG-re. Kisebb fájl, teljes kompatibilitás.</p>
                  <div className="mt-4">
                    <Button arrow link="/hu/eszkozok/svg-jpg-konverter">
                      Megnyitás
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiLoopLeftLine className="h-8 w-8" />,
              title: 'BMP JPG konverter',
              topImageAlt: 'BMP JPG konverter Arteon',
              topImageSrc: '/assets/tools/jpg-png-to-webp-converter/jpg-png-webp-konverter-hu.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>BMP fájlok konvertálása könnyű JPG-re. Drasztikus méretcsökkentés.</p>
                  <div className="mt-4">
                    <Button arrow link="/hu/eszkozok/bmp-jpg-konverter">
                      Megnyitás
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />

        <Gap size="sm" />

        <Gap variant="line" />

        <SectionInfo title="Mik azok az Arteon eszközök?">
          <p className="mb-4">
            Ingyenes online eszközök anyagok előkészítéséhez weboldalakhoz, közösségi médiához és nyomtatáshoz — WebP konverter, favicon generátor, szövegszámláló, színkinyerő, paletta generátor és
            QR-kódok.
          </p>
          <p>Minden eszköz a böngészőjében fut — a fájlok soha nem kerülnek szerverre küldésre. Használja regisztráció és korlátozás nélkül.</p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionSteps
          title="Miért használja az Arteon eszközöket?"
          grid="two"
          items={[
            {
              icon: <RiShieldCheckLine className="h-6 w-6" />,
              title: 'Teljes adatvédelem',
              description: 'Minden eszköz lokálisan dolgozza fel a fájlokat a böngészőjében. Semmi sem kerül szerverre — az adatok eltűnnek, amikor bezárja a lapot.',
            },
            {
              icon: <RiInfinityFill className="h-6 w-6" />,
              title: 'Nincs használati korlát',
              description: 'Használja korlátozás nélkül — nincs napi limit, nincs fájllimit, nincs konverziós limit. Annyiszor, ahányszor szükséges.',
            },
            {
              icon: <RiLockLine className="h-6 w-6" />,
              title: 'Regisztráció nélkül',
              description: 'Nincs szükség fiókra. Nyissa meg az eszközt, használja, és kész.',
            },
            {
              icon: <RiGlobalLine className="h-6 w-6" />,
              title: 'Magyarul elérhető',
              description: 'Minden eszköz elérhető magyar nyelven — felület, útmutatók és üzenetek.',
            },
          ]}
        />

        <Gap variant="line" />

        <FaqPanels items={faqItems} title="Gyakran ismételt kérdések eszközeinkről" />

        <Gap size="sm" />
      </Wrapper>

      <Script id="ld-json-tools-hu" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(schema)}
      </Script>
    </>
  );
}
