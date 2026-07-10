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
import Divider from '@/components/atoms/Divider';
import Wrapper from '@/components/atoms/Wrapper';
import ToolCardFooter from '@/components/molecules/ToolCardFooter';
import HeroBanner from '@/components/organisms/HeroBanner';
import SectionFaqPanels from '@/components/organisms/sections/SectionFaqPanels';
import SectionInfo from '@/components/organisms/sections/SectionInfo';
import SectionSteps from '@/components/organisms/sections/SectionSteps';
import { getToolsIndexAlternates } from '@/lib/i18n/pages/toolMeta';
import { largeIconSizeClasses, normalIconSizeClasses } from '@/lib/uiClasses';
import { toAbsoluteUrl, siteUrl } from '@/utils/absoluteUrl';

export const metadata = {
  title: 'Bezplatné nástroje | Převodníky, SEO, barvy, favicon',
  description:
    'Bezplatné nástroje: 12 převodníků obrázků (JPG, PNG, WebP, SVG, BMP,, GIF, AVIF, HEIC, TIFF), generátor favicon, editor obrázků, počítadlo textu, barevné palety a QR kódy. Bez registrace.',
  alternates: getToolsIndexAlternates('cs'),
  openGraph: {
    title: 'Bezplatné nástroje | Převodníky, SEO, barvy, favicon',
    description:
      'Bezplatné nástroje: 12 převodníků obrázků (JPG, PNG, WebP, SVG, BMP,, GIF, AVIF, HEIC, TIFF), generátor favicon, editor obrázků, počítadlo textu, barevné palety a QR kódy. Bez registrace.',
    url: toAbsoluteUrl('/cs/nastroje'),
    type: 'website',
    images: [
      {
        url: toAbsoluteUrl('/assets/arteon-logo-on-mockup.webp'),
        width: 1200,
        height: 630,
      },
    ],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Bezplatné nástroje - převodníky obrázků, SEO, barvy, favicon',
  description:
    'Bezplatné nástroje: 12 převodníků obrázků (JPG, PNG, WebP, SVG, BMP,, GIF, AVIF, HEIC, TIFF), generátor favicon, editor obrázků, počítadlo textu, barevné palety a QR kódy. Bez registrace.',
  url: toAbsoluteUrl('/cs/nastroje'),
  inLanguage: 'cs',
  isPartOf: { '@type': 'WebSite', name: 'Arteon Agency', url: siteUrl },
  about: [
    { '@type': 'Thing', name: 'Optimalizace obrazku' },
    { '@type': 'Thing', name: 'SEO' },
    { '@type': 'Thing', name: 'Barvy a branding' },
    { '@type': 'Thing', name: 'Generatory' },
  ],
  mainEntity: {
    '@type': 'ItemList',

    itemListElement: [
      {
        '@type': 'WebApplication',
        position: 1,
        name: 'Konvertor JPG/PNG na WebP',
        description:
          'Bezplatny konvertor JPG a PNG na WebP. Zmensete velikost souboru az o 35 % bez ztraty kvality. Bez registrace - soubory zustavaji v prohlizeci.',
        url: toAbsoluteUrl('/cs/nastroje/prevodnik-jpg-na-webp'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 2,
        name: 'Editor obrazku',
        description:
          'Oriznete a zmente velikost obrazku pro socialni site a web. Prednastavene formaty, vlastni rozmery v pixelech a podpora kulateho avataru.',
        url: toAbsoluteUrl('/cs/nastroje/editor-obrazku'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 3,
        name: 'Generator favicon',
        description:
          'Bezplatny generator favicon. Vytvorte favicon.ico a PNG ikony (16x16 az 512x512) z jednoho obrazku - v souladu s pozadavky prohlizecu a Lighthouse.',
        url: toAbsoluteUrl('/cs/nastroje/generator-favicon-zdarma'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 4,
        name: 'Kontrola meta titulku a popisu',
        description:
          'Kontrola delky meta titulku a popisu s nahledem Google. Zobrazuje pocet znaku a sirku v pixelech, aby se titulky a popisy neorezavaly.',
        url: toAbsoluteUrl('/cs/nastroje/kontrola-meta-titulku-a-popisu'),
        applicationCategory: 'DeveloperApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 5,
        name: 'Generator podpisu e-mailu zdarma',
        description:
          'Bezplatny generator HTML podpisu e-mailu. Zadejte kontaktni udaje, CTA odkaz a profily na soc. sitich, pak zkopirujte hotovy HTML kod do Gmailu nebo Outlooku.',
        url: toAbsoluteUrl('/cs/nastroje/generator-podpisu-emailu-zdarma'),
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 6,
        name: 'Kontrola kontrastu barev',
        description:
          'Zkontrolujte kontrast a citelnost barev textu a pozadi podle WCAG. Vypocita pomer kontrastu a pomuze s automatickou upravou barvy.',
        url: toAbsoluteUrl('/cs/nastroje/kontrola-kontrastu-barev'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 7,
        name: 'Extraktor barev z obrazku',
        description:
          'Bezplatny extraktor barev. Nahrajte fotografii nebo logo a ziskejte paletu az 12 dominantnich barev (HEX a RGB).',
        url: toAbsoluteUrl('/cs/nastroje/extraktor-barev-z-obrazku'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 8,
        name: 'Generator barevnych palet',
        description:
          'Vytvorte barevnou paletu z jedne zakladni barvy. Monochromaticka, triadicka, analogicka, komplementarni a dalsi - vcetne pastelove, tmave a minimalisticke varianty.',
        url: toAbsoluteUrl('/cs/nastroje/generator-barevnych-palet'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 9,
        name: 'Pocitadlo slov a znaku',
        description:
          'Bezplatne pocitadlo slov a znaku s hodnocenim delky textu. Zkontrolujte, zda delka textu odpovida hlavni strance, sluzbe, clanku na blog nebo popisu produktu.',
        url: toAbsoluteUrl('/cs/nastroje/pocitadlo-slov-a-znaku'),
        applicationCategory: 'DeveloperApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 10,
        name: 'Generator QR kodu zdarma',
        description:
          'Bezplatny generator QR kodu. Vytvorte QR kod pro web, vCard, menu restaurace nebo letak. Export do PNG a SVG, bez prihlaseni, bez limitu.',
        url: toAbsoluteUrl('/cs/nastroje/generator-qr-kodu-zdarma'),
        applicationCategory: 'UtilityApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 11,
        name: 'Převodník JPG na WebP',
        description:
          'Převeďte fotky JPG na lehké WebP. Snižte váhu obrázků až o 35%.',
        url: toAbsoluteUrl('/cs/nastroje/prevodnik-jpg-na-webp'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 12,
        name: 'Převodník PNG na JPG',
        description:
          'Převeďte soubory PNG na JPG v prohlížeči. Bez limitu, bez registrace.',
        url: toAbsoluteUrl('/cs/nastroje/prevodnik-png-na-jpg'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 13,
        name: 'Převodník WebP na JPG',
        description: 'Převeďte soubory WebP na univerzálně kompatibilní JPG.',
        url: toAbsoluteUrl('/cs/nastroje/prevodnik-webp-na-jpg'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 14,
        name: 'Převodník PNG na WebP',
        description:
          'Převeďte grafiku PNG na WebP. Menší soubory se zachováním průhlednosti.',
        url: toAbsoluteUrl('/cs/nastroje/prevodnik-png-na-webp'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 15,
        name: 'Převodník JPG na PNG',
        description:
          'Převeďte obrázky JPG na bezeztrátové PNG. Lokální zpracování v prohlížeči.',
        url: toAbsoluteUrl('/cs/nastroje/prevodnik-jpg-na-png'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 16,
        name: 'Převodník WebP na PNG',
        description:
          'Převeďte obrázky WebP na bezeztrátové PNG. Lokální zpracování.',
        url: toAbsoluteUrl('/cs/nastroje/prevodnik-webp-na-png'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 17,
        name: 'Převodník SVG na PNG',
        description:
          'Převeďte vektorovou grafiku SVG na rastrové PNG. Ideální pro dokumenty a sociální sítě.',
        url: toAbsoluteUrl('/cs/nastroje/prevodnik-svg-na-png'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 18,
        name: 'Převodník SVG na JPG',
        description:
          'Převeďte grafiku SVG na kompaktní JPG. Menší soubor, plná kompatibilita.',
        url: toAbsoluteUrl('/cs/nastroje/prevodnik-svg-na-jpg'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 19,
        name: 'Převodník BMP na JPG',
        description:
          'Převeďte soubory BMP na lehké JPG. Drastické zmenšení velikosti.',
        url: toAbsoluteUrl('/cs/nastroje/prevodnik-bmp-na-jpg'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 20,
        name: 'Převodník BMP na PNG',
        description:
          'Převeďte obrázky BMP na bezeztrátové PNG. Kvalita zachována, velikost snížena.',
        url: toAbsoluteUrl('/cs/nastroje/prevodnik-bmp-na-png'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 21,
        name: 'Převodník GIF na PNG',
        description:
          'Exportujte první snímek GIFu jako statické PNG. Bez ztráty kvality.',
        url: toAbsoluteUrl('/cs/nastroje/prevodnik-gif-na-png'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 22,
        name: 'Převodník GIF na JPG',
        description:
          'Exportujte první snímek GIFu jako kompaktní JPG. Menší soubor.',
        url: toAbsoluteUrl('/cs/nastroje/prevodnik-gif-na-jpg'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 23,
        name: 'Prevodnik SVG na WebP',
        description: 'Prevedte grafiku SVG na lehke WebP. Idealni pro weby.',
        url: toAbsoluteUrl('/cs/nastroje/prevodnik-svg-na-webp'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 24,
        name: 'Prevodnik GIF na WebP',
        description:
          'Exportujte prvni snimek GIFu jako lehke WebP. Mensi soubor.',
        url: toAbsoluteUrl('/cs/nastroje/prevodnik-gif-na-webp'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 25,
        name: 'Prevodnik BMP na WebP',
        description: 'Prevedte soubory BMP na lehke WebP. Snizeni az o 95%.',
        url: toAbsoluteUrl('/cs/nastroje/prevodnik-bmp-na-webp'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 26,
        name: 'Prevodnik AVIF na JPG',
        description:
          'Prevedte soubory AVIF na univerzalni JPG. Kompatibilni vsude.',
        url: toAbsoluteUrl('/cs/nastroje/prevodnik-avif-na-jpg'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 27,
        name: 'Prevodnik AVIF na PNG',
        description: 'Prevedte soubory AVIF na bezztratove PNG. Plna kvalita.',
        url: toAbsoluteUrl('/cs/nastroje/prevodnik-avif-na-png'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 28,
        name: 'Prevodnik AVIF na WebP',
        description: 'Prevedte soubory AVIF na WebP. Siroka kompatibilita.',
        url: toAbsoluteUrl('/cs/nastroje/prevodnik-avif-na-webp'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 29,
        name: 'Prevodnik HEIC na JPG',
        description:
          'Prevedte fotky HEIC z iPhonu na univerzalni JPG. Bez registrace.',
        url: toAbsoluteUrl('/cs/nastroje/prevodnik-heic-na-jpg'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 30,
        name: 'Prevodnik HEIC na PNG',
        description: 'Prevedte fotky HEIC z iPhonu na bezztratove PNG.',
        url: toAbsoluteUrl('/cs/nastroje/prevodnik-heic-na-png'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 31,
        name: 'Prevodnik HEIC na WebP',
        description: 'Prevedte fotky HEIC z iPhonu na lehke WebP.',
        url: toAbsoluteUrl('/cs/nastroje/prevodnik-heic-na-webp'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 32,
        name: 'Prevodnik TIFF na JPG',
        description:
          'Prevedte soubory TIFF na kompaktni JPG. Idealni pro skeny.',
        url: toAbsoluteUrl('/cs/nastroje/prevodnik-tiff-na-jpg'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 33,
        name: 'Prevodnik TIFF na PNG',
        description: 'Prevedte soubory TIFF na bezztratove PNG.',
        url: toAbsoluteUrl('/cs/nastroje/prevodnik-tiff-na-png'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 34,
        name: 'Prevodnik TIFF na WebP',
        description: 'Prevedte soubory TIFF na lehke WebP. Masivni snizeni.',
        url: toAbsoluteUrl('/cs/nastroje/prevodnik-tiff-na-webp'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 35,
        name: 'Převodník JPG na AVIF',
        description:
          'Prevedte fotky JPG na moderni AVIF. Az o 50% lepsi komprese nez JPG pri zachovani kvality.',
        url: toAbsoluteUrl('/cs/nastroje/prevodnik-jpg-na-avif'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 36,
        name: 'Převodník PNG na AVIF',
        description:
          'Prevedte grafiku PNG na AVIF s podporou pruhlednosti. Vyrazne mensi soubory.',
        url: toAbsoluteUrl('/cs/nastroje/prevodnik-png-na-avif'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 37,
        name: 'Převodník WebP na AVIF',
        description:
          'Prevedte soubory WebP na AVIF. Jeste lepsi komprese v modernim formatu.',
        url: toAbsoluteUrl('/cs/nastroje/prevodnik-webp-na-avif'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 38,
        name: 'Převodník SVG na AVIF',
        description:
          'Prevedte vektorovou grafiku SVG na kompaktni rastrovy format AVIF.',
        url: toAbsoluteUrl('/cs/nastroje/prevodnik-svg-na-avif'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 39,
        name: 'Převodník BMP na AVIF',
        description:
          'Prevedte nekomprimovane soubory BMP na ultrakompaktni AVIF.',
        url: toAbsoluteUrl('/cs/nastroje/prevodnik-bmp-na-avif'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 40,
        name: 'Převodník GIF na AVIF',
        description:
          'Prevedte prvni snimek GIF na staticky obraz AVIF s vynikajici kompresi.',
        url: toAbsoluteUrl('/cs/nastroje/prevodnik-gif-na-avif'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 41,
        name: 'Převodník HEIC na AVIF',
        description: 'Prevedte fotky HEIC z iPhonu na moderni format AVIF.',
        url: toAbsoluteUrl('/cs/nastroje/prevodnik-heic-na-avif'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 42,
        name: 'Převodník TIFF na AVIF',
        description:
          'Prevedte soubory TIFF na moderni AVIF. Masivni snizeni velikosti souboru.',
        url: toAbsoluteUrl('/cs/nastroje/prevodnik-tiff-na-avif'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 43,
        name: 'Převodník JPG na GIF',
        description:
          'Prevedte fotky JPG na format GIF. Idealni pro jednoduchou grafiku a ikony.',
        url: toAbsoluteUrl('/cs/nastroje/prevodnik-jpg-na-gif'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 44,
        name: 'Převodník PNG na GIF',
        description:
          'Prevedte grafiku PNG na GIF. Idealni pro jednoduche ikony a grafiku.',
        url: toAbsoluteUrl('/cs/nastroje/prevodnik-png-na-gif'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 45,
        name: 'Převodník WebP na GIF',
        description:
          'Prevedte obrazky WebP na format GIF pro maximalni kompatibilitu.',
        url: toAbsoluteUrl('/cs/nastroje/prevodnik-webp-na-gif'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 46,
        name: 'Převodník SVG na GIF',
        description: 'Prevedte vektorovou grafiku SVG na rastrovy format GIF.',
        url: toAbsoluteUrl('/cs/nastroje/prevodnik-svg-na-gif'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 47,
        name: 'Převodník BMP na GIF',
        description: 'Prevedte nekomprimovane soubory BMP na lehky GIF.',
        url: toAbsoluteUrl('/cs/nastroje/prevodnik-bmp-na-gif'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 48,
        name: 'Převodník JPG na TIFF',
        description:
          'Prevedte fotky JPG na bezztratovy TIFF. Pro tisk a archivaci.',
        url: toAbsoluteUrl('/cs/nastroje/prevodnik-jpg-na-tiff'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 49,
        name: 'Převodník PNG na TIFF',
        description: 'Prevedte grafiku PNG na profesionalni format TIFF.',
        url: toAbsoluteUrl('/cs/nastroje/prevodnik-png-na-tiff'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 50,
        name: 'Převodník WebP na TIFF',
        description:
          'Prevedte obrazky WebP na profesionalni TIFF pro tisk a archivaci.',
        url: toAbsoluteUrl('/cs/nastroje/prevodnik-webp-na-tiff'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 51,
        name: 'Převodník SVG na TIFF',
        description:
          'Prevedte vektorovou grafiku SVG na kvalitni rastrovy TIFF.',
        url: toAbsoluteUrl('/cs/nastroje/prevodnik-svg-na-tiff'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 52,
        name: 'Převodník BMP na TIFF',
        description:
          'Prevedte soubory BMP na profesionalni format TIFF pro tisk.',
        url: toAbsoluteUrl('/cs/nastroje/prevodnik-bmp-na-tiff'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 53,
        name: 'Převodník HEIC na TIFF',
        description:
          'Prevedte fotky HEIC z iPhonu na profesionalni format TIFF.',
        url: toAbsoluteUrl('/cs/nastroje/prevodnik-heic-na-tiff'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
    ],
  },
};

const faqItems = [
  {
    question: 'Kolik nastroje stoji?',
    answer:
      'Nic. Vsechny nastroje jsou zdarma, bez predplatneho a bez skrytych poplatku.',
  },
  {
    question: 'Odesilaji se soubory na server?',
    answer:
      'Ne. Vsechny nastroje bezi kompletne v prohlizeci. Soubory nikdy neopousteji pocitac a nejsou nikde ukladany.',
  },
  {
    question: 'Potrebuji ucet?',
    answer: 'Ne. Muzete je pouzivat rovnou bez prihlaseni nebo vytvareni uctu.',
  },
  {
    question: 'Existuji nejake limity pouziti?',
    answer:
      'Ne. Pouzivejte bez omezeni - zadny denni limit, zadny limit souboru, zadny limit konverzi.',
  },
  {
    question: 'K cemu tyto nastroje slouzi?',
    answer:
      'Pomahaji pripravit materialy pro web, socialni site a tisk: optimalizovat obrazky, vytvorit favicon, zkontrolovat delku textu, vytvorit QR kod, vybrat barvy a overit jejich citelnost.',
  },
  {
    question: 'Funguji nastroje na mobilu?',
    answer:
      'Ano, ale nektere nastroje (konvertor WebP, generator favicon) se lepe pouzivaji na desktopu, protoze zpracovavaji vetsi soubory.',
  },
];

export default function ToolsIndexPage() {
  return (
    <>
      <HeroBanner
        title='Bezplatne nastroje'
        description='12 převodníků obrazových formátů, editor obrázků, generátor favicon, počítadlo textu, barevné nástroje a QR kódy. Bez registrace, bez limitů.'
        backgroundImage='/assets/arteon-logo-on-mockup.webp'
        overlay='black'
      />

      <Wrapper>
        <Divider size='xs' />

        <SectionSteps
          title='Obrazky a favicon'
          description='Nastroje pro pripravu fotek, grafiky a ikon pro web a socialni site.'
          grid='three'
          cardVariant='dark'
          items={[
            {
              icon: <RiCropLine className={largeIconSizeClasses} />,
              title: 'Online editor obrázků',
              topImageAlt: 'Online editor obrázků Arteon',
              topImageSrc:
                '/assets/tools/free-image-editor-crop-resize-and-convert/editor-obrazku-cs.webp',
              description: (
                <div className='flex h-full flex-col'>
                  <p>
                    Připravte ideální ořez pro sociální sítě nebo web. Vyberte
                    hotový formát nebo zadejte vlastní rozměry a stáhněte
                    obrázek jako PNG, JPG nebo WebP.
                  </p>
                  <ToolCardFooter
                    href='/cs/nastroje/editor-obrazku'
                    label='Otevřít nástroj'
                  />
                </div>
              ),
            },
            {
              icon: <RiAppsLine className={largeIconSizeClasses} />,
              title: 'Generator favicon a ikon',
              topImageAlt: 'Generator favicon Arteon',
              topImageSrc:
                '/assets/tools/favicon-generator/generator-favicon-zdarma-cs.webp',
              description: (
                <div className='flex h-full flex-col'>
                  <p>
                    Vytvorte <strong>favicon.ico</strong> a PNG ikony 180x180,
                    192x192 a 512x512 z jednoho obrazku - v souladu s pozadavky
                    prohlizecu a Lighthouse.
                  </p>
                  <ToolCardFooter
                    href='/cs/nastroje/generator-favicon-zdarma'
                    label='Otevrit nastroj'
                  />
                </div>
              ),
            },
          ]}
        />
        <Divider size='sm' />

        <SectionSteps
          title='Text a SEO'
          description='Nastroje pro kontrolu delky textu, meta tagu a nahled stranky ve vysledcich vyhledavani.'
          grid='three'
          cardVariant='dark'
          items={[
            {
              icon: <RiFileTextLine className={largeIconSizeClasses} />,
              title: 'Kontrola meta titulku a popisu',
              topImageAlt: 'Kontrola meta titulku a popisu Arteon',
              topImageSrc:
                '/assets/tools/free-meta-title-and-description-checker-pixel-width/kontrola-meta-titulku-a-popisu-cs.webp',
              description: (
                <div className='flex h-full flex-col'>
                  <p>
                    Zkontrolujte pocet znaku, pocet slov a sirku v pixelech - s
                    nahledem Google. Vyhnete se oriznutym titulkum a popisum ve
                    vysledcich vyhledavani.
                  </p>
                  <ToolCardFooter
                    href='/cs/nastroje/kontrola-meta-titulku-a-popisu'
                    label='Otevrit nastroj'
                  />
                </div>
              ),
            },
            {
              icon: <RiArticleLine className={largeIconSizeClasses} />,
              title: 'Pocitadlo slov a znaku',
              topImageAlt: 'Pocitadlo slov a znaku Arteon',
              topImageSrc:
                '/assets/tools/word-and-character-counter-with-text-formatting-tools/pocitadlo-slov-a-znaku-cs.webp',
              description: (
                <div className='flex h-full flex-col'>
                  <p>
                    Zkontrolujte delku textu a vyhodnotte, zda se hodi pro
                    hlavni stranku, stranku sluzeb, clanek na blog nebo popis
                    produktu. Nastroj pocita slova, znaky, odstavce a dobu
                    cteni.
                  </p>
                  <ToolCardFooter
                    href='/cs/nastroje/pocitadlo-slov-a-znaku'
                    label='Otevrit nastroj'
                  />
                </div>
              ),
            },

            {
              icon: <RiFileTextLine className={largeIconSizeClasses} />,
              title: 'Generátor Lorem Ipsum',
              topImageAlt: 'Generátor Lorem Ipsum Arteon',
              topImageSrc:
                '/assets/tools/lorem-ipsum-generator/generator-lorem-ipsum-cs.webp',
              description: (
                <div className='flex h-full flex-col'>
                  <p>
                    Vygenerujte zástupný text v 8 stylech a 9 režimech. Lorem
                    Ipsum, Hipster, Business, Bacon a další. Zkopírujte jako
                    text nebo HTML.
                  </p>
                  <ToolCardFooter
                    href='/cs/nastroje/generator-lorem-ipsum'
                    label='Otevřít nástroj'
                  />
                </div>
              ),
            },
          ]}
        />

        <Divider size='sm' />

        <SectionSteps
          title='E-mail a komunikace'
          description='Nastroje pro profesionalni e-mailovou komunikaci a konzistentni image znacky.'
          grid='three'
          cardVariant='dark'
          items={[
            {
              icon: <RiMailLine className={largeIconSizeClasses} />,
              title: 'Generator podpisu e-mailu zdarma',
              topImageAlt: 'Generator podpisu e-mailu zdarma Arteon',
              topImageSrc:
                '/assets/tools/free-html-email-signature-generator/generator-podpisu-emailu-zdarma-cs.webp',
              description: (
                <div className='flex h-full flex-col'>
                  <p>
                    Vytvorte profesionalni podpis e-mailu za par minut. Zadejte
                    sve udaje, vyberte barvy a zkopirujte hotovy HTML kod do
                    Gmailu, Outlooku nebo jineho e-mailoveho klienta.
                  </p>
                  <ToolCardFooter
                    href='/cs/nastroje/generator-podpisu-emailu-zdarma'
                    label='Otevrit nastroj'
                  />
                </div>
              ),
            },
          ]}
        />

        <Divider size='sm' />

        <SectionSteps
          title='QR kod'
          description='Generator QR kodu pro web, vizitky, menu a tiskoviny.'
          grid='three'
          cardVariant='dark'
          items={[
            {
              icon: <RiQrCodeLine className={largeIconSizeClasses} />,
              title: 'Generator QR kodu zdarma',
              topImageAlt: 'Generator QR kodu zdarma Arteon',
              topImageSrc:
                '/assets/tools/qr-code-generator/generator-qr-kodu-zdarma-cs.webp',
              description: (
                <div className='flex h-full flex-col'>
                  <p>
                    Vytvorte QR kod pro web, vCard, menu restaurace nebo letak.
                    Export do PNG a SVG - bez prihlaseni, bez limitu.
                  </p>
                  <ToolCardFooter
                    href='/cs/nastroje/generator-qr-kodu-zdarma'
                    label='Otevrit nastroj'
                  />
                </div>
              ),
            },
          ]}
        />

        <Divider size='sm' />

        <SectionSteps
          title='Barvy a pristupnost'
          description='Nastroje pro praci s barvami, kontrastem a pristupnosti WCAG.'
          grid='three'
          cardVariant='dark'
          items={[
            {
              icon: <RiContrast2Line className={largeIconSizeClasses} />,
              title: 'Kontrola kontrastu barev',
              topImageAlt: 'Kontrola kontrastu barev Arteon',
              topImageSrc:
                '/assets/tools/color-contrast-and-readability-checker/kontrola-kontrastu-barev-cs.webp',
              description: (
                <div className='flex h-full flex-col'>
                  <p>
                    Zkontrolujte, zda jsou barvy textu a pozadi citelne. Zadejte
                    kody barev, zobrazte pomer kontrastu podle{' '}
                    <strong>WCAG</strong> a pouzijte funkci{' '}
                    <strong>Match</strong> pro automatickou opravu.
                  </p>
                  <ToolCardFooter
                    href='/cs/nastroje/kontrola-kontrastu-barev'
                    label='Otevrit nastroj'
                  />
                </div>
              ),
            },
            {
              icon: <RiPantoneLine className={largeIconSizeClasses} />,
              title: 'Extraktor barev z obrazku',
              topImageAlt: 'Extraktor barev z obrazku Arteon',
              topImageSrc:
                '/assets/tools/image-color-extractor/extraktor-barev-z-obrazku-cs.webp',
              description: (
                <div className='flex h-full flex-col'>
                  <p>
                    Nahrajte fotografii nebo logo - nastroj extrahuje dominantni
                    barvy. Zkopirujte HEX kody jednim kliknutim a pouzijte je
                    kdekoliv.
                  </p>
                  <ToolCardFooter
                    href='/cs/nastroje/extraktor-barev-z-obrazku'
                    label='Otevrit nastroj'
                  />
                </div>
              ),
            },
            {
              icon: <RiPaletteLine className={largeIconSizeClasses} />,
              title: 'Generator barevnych palet',
              topImageAlt: 'Generator barevnych palet Arteon',
              topImageSrc:
                '/assets/tools/color-palette-generator/generator-barevnych-palet-cs.webp',
              description: (
                <div className='flex h-full flex-col'>
                  <p>
                    Vyberte jednu zakladni barvu a vytvorte 9 barevnych palet:
                    monochromatickou, komplementarni, triadickou, pastelovou,
                    tmavou a dalsi. Zkopirujte HEX kody jednim kliknutim.
                  </p>
                  <ToolCardFooter
                    href='/cs/nastroje/generator-barevnych-palet'
                    label='Otevrit nastroj'
                  />
                </div>
              ),
            },
          ]}
        />

        <Divider size='sm' />

        <SectionSteps
          title='Převodníky obrazových formátů'
          description='12 převodníků obrázků - převádějte mezi JPG, PNG, WebP, SVG, BMP a GIF. Převod v prohlížeči, bez odesílání souborů.'
          grid='three'
          cardVariant='dark'
          items={[
            {
              icon: <RiLoopLeftLine className={largeIconSizeClasses} />,
              title: 'Převodník JPG na WebP',
              topImageAlt: 'Převodník JPG na WebP Arteon',
              topImageSrc:
                '/assets/tools/jpg-png-to-webp-converter/konvertor-jpg-png-na-webp-cs.webp',
              description: (
                <div className='flex h-full flex-col'>
                  <p>
                    Převeďte fotky JPG na lehké WebP. Snižte váhu obrázků až o
                    35%.
                  </p>
                  <ToolCardFooter
                    href='/cs/nastroje/prevodnik-jpg-na-webp'
                    label='Otevřít nástroj'
                  />
                </div>
              ),
            },
            {
              icon: <RiLoopLeftLine className={largeIconSizeClasses} />,
              title: 'Převodník PNG na JPG',
              topImageAlt: 'Převodník PNG na JPG Arteon',
              topImageSrc:
                '/assets/tools/jpg-png-to-webp-converter/konvertor-jpg-png-na-webp-cs.webp',
              description: (
                <div className='flex h-full flex-col'>
                  <p>
                    Převeďte soubory PNG na JPG v prohlížeči. Bez limitu, bez
                    registrace.
                  </p>
                  <ToolCardFooter
                    href='/cs/nastroje/prevodnik-png-na-jpg'
                    label='Otevřít nástroj'
                  />
                </div>
              ),
            },
            {
              icon: <RiLoopLeftLine className={largeIconSizeClasses} />,
              title: 'Převodník WebP na JPG',
              topImageAlt: 'Převodník WebP na JPG Arteon',
              topImageSrc:
                '/assets/tools/jpg-png-to-webp-converter/konvertor-jpg-png-na-webp-cs.webp',
              description: (
                <div className='flex h-full flex-col'>
                  <p>Převeďte soubory WebP na univerzálně kompatibilní JPG.</p>
                  <ToolCardFooter
                    href='/cs/nastroje/prevodnik-webp-na-jpg'
                    label='Otevřít nástroj'
                  />
                </div>
              ),
            },
            {
              icon: <RiLoopLeftLine className={largeIconSizeClasses} />,
              title: 'Převodník PNG na WebP',
              topImageAlt: 'Převodník PNG na WebP Arteon',
              topImageSrc:
                '/assets/tools/jpg-png-to-webp-converter/konvertor-jpg-png-na-webp-cs.webp',
              description: (
                <div className='flex h-full flex-col'>
                  <p>
                    Převeďte grafiku PNG na WebP. Menší soubory se zachováním
                    průhlednosti.
                  </p>
                  <ToolCardFooter
                    href='/cs/nastroje/prevodnik-png-na-webp'
                    label='Otevřít nástroj'
                  />
                </div>
              ),
            },
            {
              icon: <RiLoopLeftLine className={largeIconSizeClasses} />,
              title: 'Převodník JPG na PNG',
              topImageAlt: 'Převodník JPG na PNG Arteon',
              topImageSrc:
                '/assets/tools/jpg-png-to-webp-converter/konvertor-jpg-png-na-webp-cs.webp',
              description: (
                <div className='flex h-full flex-col'>
                  <p>
                    Převeďte obrázky JPG na bezeztrátové PNG. Lokální zpracování
                    v prohlížeči.
                  </p>
                  <ToolCardFooter
                    href='/cs/nastroje/prevodnik-jpg-na-png'
                    label='Otevřít nástroj'
                  />
                </div>
              ),
            },
            {
              icon: <RiLoopLeftLine className={largeIconSizeClasses} />,
              title: 'Převodník WebP na PNG',
              topImageAlt: 'Převodník WebP na PNG Arteon',
              topImageSrc:
                '/assets/tools/jpg-png-to-webp-converter/konvertor-jpg-png-na-webp-cs.webp',
              description: (
                <div className='flex h-full flex-col'>
                  <p>
                    Převeďte obrázky WebP na bezeztrátové PNG. Lokální
                    zpracování.
                  </p>
                  <ToolCardFooter
                    href='/cs/nastroje/prevodnik-webp-na-png'
                    label='Otevřít nástroj'
                  />
                </div>
              ),
            },
          ]}
        />
        <Divider size='sm' />

        <SectionSteps
          title='Datové převodníky'
          description='Online převodníky datových formátů — převádějte mezi CSV, JSON, XML, YAML, Markdown a HTML. Zpracování v prohlížeči.'
          grid='three'
          cardVariant='dark'
          items={[
            {
              icon: <RiLoopLeftLine className={largeIconSizeClasses} />,
              title: 'CSV na JSON',
              topImageAlt: 'CSV na JSON Arteon',
              topImageSrc:
                '/assets/tools/jpg-png-to-webp-converter/konvertor-jpg-png-na-webp-cs.webp',
              description: (
                <div className='flex h-full flex-col'>
                  <p>
                    Převeďte CSV do formátu JSON. Automatické rozpoznání
                    oddělovačů a formátování.
                  </p>
                  <ToolCardFooter
                    href='/cs/nastroje/prevodnik-csv-na-json'
                    label='Otevřít nástroj'
                  />
                </div>
              ),
            },
            {
              icon: <RiLoopLeftLine className={largeIconSizeClasses} />,
              title: 'JSON na CSV',
              topImageAlt: 'JSON na CSV Arteon',
              topImageSrc:
                '/assets/tools/jpg-png-to-webp-converter/konvertor-jpg-png-na-webp-cs.webp',
              description: (
                <div className='flex h-full flex-col'>
                  <p>
                    Převeďte JSON data do formátu CSV. Zpracování v prohlížeči.
                  </p>
                  <ToolCardFooter
                    href='/cs/nastroje/prevodnik-json-na-csv'
                    label='Otevřít nástroj'
                  />
                </div>
              ),
            },
            {
              icon: <RiLoopLeftLine className={largeIconSizeClasses} />,
              title: 'XML na JSON',
              topImageAlt: 'XML na JSON Arteon',
              topImageSrc:
                '/assets/tools/jpg-png-to-webp-converter/konvertor-jpg-png-na-webp-cs.webp',
              description: (
                <div className='flex h-full flex-col'>
                  <p>
                    Převeďte XML data do JSON. Konverze v prohlížeči s validací
                    struktury.
                  </p>
                  <ToolCardFooter
                    href='/cs/nastroje/prevodnik-xml-na-json'
                    label='Otevřít nástroj'
                  />
                </div>
              ),
            },
            {
              icon: <RiLoopLeftLine className={largeIconSizeClasses} />,
              title: 'JSON na XML',
              topImageAlt: 'JSON na XML Arteon',
              topImageSrc:
                '/assets/tools/jpg-png-to-webp-converter/konvertor-jpg-png-na-webp-cs.webp',
              description: (
                <div className='flex h-full flex-col'>
                  <p>
                    Převeďte JSON data do platného XML. Konverze v prohlížeči s
                    formátováním.
                  </p>
                  <ToolCardFooter
                    href='/cs/nastroje/prevodnik-json-na-xml'
                    label='Otevřít nástroj'
                  />
                </div>
              ),
            },
            {
              icon: <RiLoopLeftLine className={largeIconSizeClasses} />,
              title: 'YAML na JSON',
              topImageAlt: 'YAML na JSON Arteon',
              topImageSrc:
                '/assets/tools/jpg-png-to-webp-converter/konvertor-jpg-png-na-webp-cs.webp',
              description: (
                <div className='flex h-full flex-col'>
                  <p>
                    Převeďte YAML konfiguraci do JSON. Validace a formátování v
                    prohlížeči.
                  </p>
                  <ToolCardFooter
                    href='/cs/nastroje/prevodnik-yaml-na-json'
                    label='Otevřít nástroj'
                  />
                </div>
              ),
            },
            {
              icon: <RiLoopLeftLine className={largeIconSizeClasses} />,
              title: 'JSON na YAML',
              topImageAlt: 'JSON na YAML Arteon',
              topImageSrc:
                '/assets/tools/jpg-png-to-webp-converter/konvertor-jpg-png-na-webp-cs.webp',
              description: (
                <div className='flex h-full flex-col'>
                  <p>
                    Převeďte JSON data do čitelného YAML. Zpracování v
                    prohlížeči.
                  </p>
                  <ToolCardFooter
                    href='/cs/nastroje/prevodnik-json-na-yaml'
                    label='Otevřít nástroj'
                  />
                </div>
              ),
            },
          ]}
        />

        <Divider size='sm' />

        <Divider line />

        <SectionInfo title='Co jsou nastroje Arteon?'>
          <p className='mb-4'>
            34 bezplatnych nastroju pro pripravu materialu pro web, socialni
            site a tisk - konvertor WebP, generator favicon, pocitadlo textu,
            extraktor barev, generator palet a QR kod.
          </p>
          <p>
            Vsechny nastroje bezi v prohlizeci - soubory se nikdy neodesilaji na
            server. Pouzivejte bez registrace a bez omezeni.
          </p>
        </SectionInfo>

        <Divider line />

        <SectionSteps
          title='Proc pouzivat nastroje Arteon?'
          grid='two'
          items={[
            {
              icon: <RiShieldCheckLine className={normalIconSizeClasses} />,
              title: 'Uplne soukromi',
              description:
                'Vsechny nastroje zpracovavaji soubory lokalne v prohlizeci. Nic se neodesila na server - data zmizi po zavreni karty.',
            },
            {
              icon: <RiInfinityFill className={normalIconSizeClasses} />,
              title: 'Bez omezeni pouziti',
              description:
                'Pouzivejte bez omezeni - zadny denni limit, zadny limit souboru, zadny limit konverzi. Kolikrat potrebujete.',
            },
            {
              icon: <RiLockLine className={normalIconSizeClasses} />,
              title: 'Bez registrace',
              description:
                'Nepotrebujete ucet. Otevrete nastroj, pouzijte, hotovo.',
            },
            {
              icon: <RiGlobalLine className={normalIconSizeClasses} />,
              title: 'K dispozici v cestine',
              description:
                'Vsechny nastroje jsou k dispozici v cestine - rozhrani, navody i hlasky.',
            },
          ]}
        />

        <Divider line />

        <SectionFaqPanels
          items={faqItems}
          title='Casto kladene otazky o nasich nastrojich'
        />

        <Divider size='sm' />
      </Wrapper>

      <Script
        id='ld-json-tools-cs'
        type='application/ld+json'
        strategy='afterInteractive'
      >
        {JSON.stringify(schema)}
      </Script>
    </>
  );
}
