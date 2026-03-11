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

export const dynamic = 'force-static';

export const metadata = {
  title: 'Strumenti online gratuiti | Convertitori, SEO, colori, favicon',
  description:
    'Strumenti gratuiti: Convertitori di immagini (JPG, PNG, WebP, SVG, BMP,, GIF, AVIF, HEIC, TIFF), generatore di favicon, editor di immagini, contatore di testo, palette di colori e codici QR. Senza registrazione.',
  alternates: getToolsIndexAlternates('it'),
  openGraph: {
    title: 'Strumenti online gratuiti | Convertitori, SEO, colori, favicon',
    description:
      'Strumenti gratuiti: Convertitori di immagini (JPG, PNG, WebP, SVG, BMP,, GIF, AVIF, HEIC, TIFF), generatore di favicon, editor di immagini, contatore di testo, palette di colori e codici QR. Senza registrazione.',
    url: toAbsoluteUrl('/it/strumenti'),
    type: 'website',
    images: [
      {
        url: toAbsoluteUrl('/assets/arteon-logo-on-mockup.webp'),
        width: 1200,
        height: 630,
      },
      {
        '@type': 'WebApplication',
        position: 35,
        name: 'Convertitore JPG in AVIF',
        description: 'Converti foto JPG in AVIF moderno. Compressione fino al 50% migliore di JPG mantenendo la qualita.',
        url: toAbsoluteUrl('/it/strumenti/convertitore-jpg-in-avif'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 36,
        name: 'Convertitore PNG in AVIF',
        description: 'Converti grafiche PNG in AVIF con supporto trasparenza. File notevolmente piu piccoli.',
        url: toAbsoluteUrl('/it/strumenti/convertitore-png-in-avif'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 37,
        name: 'Convertitore WebP in AVIF',
        description: 'Converti file WebP in AVIF. Compressione ancora migliore in un formato moderno.',
        url: toAbsoluteUrl('/it/strumenti/convertitore-webp-in-avif'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 38,
        name: 'Convertitore SVG in AVIF',
        description: 'Converti grafiche vettoriali SVG in formato raster AVIF compatto.',
        url: toAbsoluteUrl('/it/strumenti/convertitore-svg-in-avif'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 39,
        name: 'Convertitore BMP in AVIF',
        description: 'Converti file BMP non compressi in AVIF ultracompatto.',
        url: toAbsoluteUrl('/it/strumenti/convertitore-bmp-in-avif'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 40,
        name: 'Convertitore GIF in AVIF',
        description: 'Converti il primo fotogramma GIF in immagine AVIF statica con compressione eccellente.',
        url: toAbsoluteUrl('/it/strumenti/convertitore-gif-in-avif'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 41,
        name: 'Convertitore TIFF in AVIF',
        description: 'Converti file TIFF in AVIF moderno. Riduzione massiva delle dimensioni del file.',
        url: toAbsoluteUrl('/it/strumenti/convertitore-tiff-in-avif'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 42,
        name: 'Convertitore JPG in GIF',
        description: 'Converti foto JPG in formato GIF. Perfetto per grafiche semplici e icone.',
        url: toAbsoluteUrl('/it/strumenti/convertitore-jpg-in-gif'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 43,
        name: 'Convertitore PNG in GIF',
        description: 'Converti grafiche PNG in GIF. Ideale per icone semplici e grafiche.',
        url: toAbsoluteUrl('/it/strumenti/convertitore-png-in-gif'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 44,
        name: 'Convertitore WebP in GIF',
        description: 'Converti immagini WebP in formato GIF per massima compatibilita.',
        url: toAbsoluteUrl('/it/strumenti/convertitore-webp-in-gif'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 45,
        name: 'Convertitore SVG in GIF',
        description: 'Converti grafiche vettoriali SVG in formato raster GIF.',
        url: toAbsoluteUrl('/it/strumenti/convertitore-svg-in-gif'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 46,
        name: 'Convertitore BMP in GIF',
        description: 'Converti file BMP non compressi in GIF leggero.',
        url: toAbsoluteUrl('/it/strumenti/convertitore-bmp-in-gif'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 47,
        name: 'Convertitore JPG in TIFF',
        description: 'Converti foto JPG in TIFF lossless. Per stampa e archiviazione.',
        url: toAbsoluteUrl('/it/strumenti/convertitore-jpg-in-tiff'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 48,
        name: 'Convertitore PNG in TIFF',
        description: 'Converti grafiche PNG in formato TIFF professionale.',
        url: toAbsoluteUrl('/it/strumenti/convertitore-png-in-tiff'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 49,
        name: 'Convertitore WebP in TIFF',
        description: 'Converti immagini WebP in TIFF professionale per stampa e archiviazione.',
        url: toAbsoluteUrl('/it/strumenti/convertitore-webp-in-tiff'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 50,
        name: 'Convertitore SVG in TIFF',
        description: 'Converti grafiche vettoriali SVG in raster TIFF di alta qualita.',
        url: toAbsoluteUrl('/it/strumenti/convertitore-svg-in-tiff'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 51,
        name: 'Convertitore BMP in TIFF',
        description: 'Converti file BMP in formato TIFF professionale per la stampa.',
        url: toAbsoluteUrl('/it/strumenti/convertitore-bmp-in-tiff'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 52,
        name: 'Convertitore HEIC in AVIF',
        description: "Converti foto HEIC dell'iPhone in formato AVIF moderno.",
        url: toAbsoluteUrl('/it/strumenti/convertitore-heic-in-avif'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 53,
        name: 'Convertitore HEIC in TIFF',
        description: "Converti foto HEIC dell'iPhone in formato TIFF professionale.",
        url: toAbsoluteUrl('/it/strumenti/convertitore-heic-in-tiff'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
    ],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Strumenti online gratuiti - convertitori di immagini, SEO, colori, favicon',
  description:
    'Strumenti gratuiti: Convertitori di immagini (JPG, PNG, WebP, SVG, BMP,, GIF, AVIF, HEIC, TIFF), generatore di favicon, editor di immagini, contatore di testo, palette di colori e codici QR. Senza registrazione.',
  url: toAbsoluteUrl('/it/strumenti'),
  inLanguage: 'it',
  isPartOf: {
    '@type': 'WebSite',
    name: 'Arteon Agency',
    url: siteUrl,
  },
  about: [
    { '@type': 'Thing', name: 'Ottimizzazione immagini' },
    { '@type': 'Thing', name: 'SEO' },
    { '@type': 'Thing', name: 'Colori e branding' },
    { '@type': 'Thing', name: 'Generatori online' },
  ],
  mainEntity: {
    '@type': 'ItemList',

    itemListElement: [
      {
        '@type': 'WebApplication',
        position: 1,
        name: 'Convertitore JPG e PNG in WebP online',
        description:
          'Convertitore online gratuito da JPG e PNG a WebP. Riduce il peso dei file fino al 35% senza perdita di qualit\u00e0 visibile. Senza registrazione \u2013 i file restano nel tuo browser.',
        url: toAbsoluteUrl('/it/strumenti/convertitore-jpg-in-webp'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 2,
        name: 'Editor di immagini online',
        description: 'Ritaglia e ridimensiona le tue immagini per i social media e i siti web. Modelli pronti, dimensioni personalizzate e avatar rotondi.',
        url: toAbsoluteUrl('/it/strumenti/editor-di-immagini-online'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 3,
        name: 'Generatore di favicon online',
        description: 'Generatore di favicon gratuito. Crea favicon.ico e icone PNG (16\u00d716 a 512\u00d7512) da una singola immagine \u2013 compatibile con tutti i browser e Lighthouse.',
        url: toAbsoluteUrl('/it/strumenti/generatore-di-favicon-gratuito'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 4,
        name: 'Verificatore di meta titolo e descrizione',
        description:
          'Verificatore di meta titolo e descrizione con anteprima Google. Mostra il numero di caratteri e la larghezza in pixel per evitare titoli e descrizioni troncati nei risultati di ricerca.',
        url: toAbsoluteUrl('/it/strumenti/verificatore-meta-titolo-e-descrizione'),
        applicationCategory: 'DeveloperApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 5,
        name: 'Generatore di firma e-mail HTML',
        description: 'Generatore gratuito di firma e-mail HTML. Inserisci i tuoi dati, link CTA e profili social, poi copia il codice HTML in Gmail o Outlook.',
        url: toAbsoluteUrl('/it/strumenti/generatore-di-firma-email-gratuito'),
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 6,
        name: 'Verificatore di contrasto e leggibilit\u00e0 dei colori',
        description: 'Verifica il contrasto e la leggibilit\u00e0 dei colori del testo e dello sfondo secondo WCAG. Calcola il rapporto di contrasto e propone un adattamento automatico.',
        url: toAbsoluteUrl('/it/strumenti/verificatore-contrasto-colori'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 7,
        name: 'Estrattore di colori da immagine online',
        description: 'Estrattore di colori gratuito. Carica una foto o un logo e ottieni una palette di fino a 12 colori dominanti (HEX e RGB).',
        url: toAbsoluteUrl('/it/strumenti/estrattore-di-colori-da-immagine'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 8,
        name: 'Generatore di palette di colori online',
        description: 'Genera palette da un colore base. Monocromatica, triadica, analoga, complementare e altre \u2013 con varianti pastello, scure e minimaliste.',
        url: toAbsoluteUrl('/it/strumenti/generatore-di-palette-di-colori'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 9,
        name: 'Contatore di parole e caratteri online',
        description:
          'Contatore di parole e caratteri gratuito con valutazione della lunghezza. Verifica se la lunghezza del testo \u00e8 adeguata per una homepage, pagina servizi, articolo del blog o descrizione prodotto.',
        url: toAbsoluteUrl('/it/strumenti/contatore-di-parole-e-caratteri'),
        applicationCategory: 'DeveloperApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 10,
        name: 'Generatore di codici QR online',
        description: 'Generatore di codici QR gratuito. Crea codici QR per siti web, vCard, menu o volantini. Esporta in PNG e SVG, senza registrazione, senza limiti.',
        url: toAbsoluteUrl('/it/strumenti/generatore-di-codici-qr-gratuito'),
        applicationCategory: 'UtilityApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 11,
        name: 'Convertitore JPG in WebP',
        description: 'Converti foto JPG in WebP leggero. Riduci il peso delle immagini fino al 35%.',
        url: toAbsoluteUrl('/it/strumenti/convertitore-jpg-in-webp'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 12,
        name: 'Convertitore PNG in JPG',
        description: 'Converti file PNG in JPG nel browser. Senza limiti, senza registrazione.',
        url: toAbsoluteUrl('/it/strumenti/convertitore-png-in-jpg'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 13,
        name: 'Convertitore WebP in JPG',
        description: 'Converti file WebP in JPG compatibile ovunque. Senza limiti, senza registrazione.',
        url: toAbsoluteUrl('/it/strumenti/convertitore-webp-in-jpg'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 14,
        name: 'Convertitore PNG in WebP',
        description: 'Converti grafiche PNG in WebP. File più piccoli mantenendo la trasparenza.',
        url: toAbsoluteUrl('/it/strumenti/convertitore-png-in-webp'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 15,
        name: 'Convertitore JPG in PNG',
        description: 'Converti immagini JPG in PNG senza perdita. Conversione locale nel browser.',
        url: toAbsoluteUrl('/it/strumenti/convertitore-jpg-in-png'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 16,
        name: 'Convertitore WebP in PNG',
        description: 'Converti immagini WebP in PNG senza perdita. Conversione locale, niente server.',
        url: toAbsoluteUrl('/it/strumenti/convertitore-webp-in-png'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 17,
        name: 'Convertitore SVG in PNG',
        description: 'Converti grafiche vettoriali SVG in PNG. Ideale per documenti e social media.',
        url: toAbsoluteUrl('/it/strumenti/convertitore-svg-in-png'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 18,
        name: 'Convertitore SVG in JPG',
        description: 'Converti grafiche SVG in JPG compatto. File più piccolo, compatibilità totale.',
        url: toAbsoluteUrl('/it/strumenti/convertitore-svg-in-jpg'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 19,
        name: 'Convertitore BMP in JPG',
        description: 'Converti file BMP in JPG leggero. Riduzione drastica delle dimensioni.',
        url: toAbsoluteUrl('/it/strumenti/convertitore-bmp-in-jpg'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 20,
        name: 'Convertitore BMP in PNG',
        description: 'Converti immagini BMP in PNG senza perdita. Qualità preservata, dimensioni ridotte.',
        url: toAbsoluteUrl('/it/strumenti/convertitore-bmp-in-png'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 21,
        name: 'Convertitore GIF in PNG',
        description: 'Esporta il primo fotogramma di un GIF come PNG statico. Senza perdita di qualità.',
        url: toAbsoluteUrl('/it/strumenti/convertitore-gif-in-png'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 22,
        name: 'Convertitore GIF in JPG',
        description: 'Esporta il primo fotogramma di un GIF come JPG compatto. File più piccolo.',
        url: toAbsoluteUrl('/it/strumenti/convertitore-gif-in-jpg'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 23,
        name: 'Convertitore SVG in WebP',
        description: 'Converti grafiche SVG in WebP leggero. Ideale per siti web.',
        url: toAbsoluteUrl('/it/strumenti/convertitore-svg-in-webp'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 24,
        name: 'Convertitore GIF in WebP',
        description: 'Esporta il primo fotogramma GIF in WebP leggero. File piu piccolo.',
        url: toAbsoluteUrl('/it/strumenti/convertitore-gif-in-webp'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 25,
        name: 'Convertitore BMP in WebP',
        description: 'Converti file BMP in WebP leggero. Riduzione fino al 95%.',
        url: toAbsoluteUrl('/it/strumenti/convertitore-bmp-in-webp'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 26,
        name: 'Convertitore AVIF in JPG',
        description: 'Converti file AVIF in JPG universale. Compatibile ovunque.',
        url: toAbsoluteUrl('/it/strumenti/convertitore-avif-in-jpg'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 27,
        name: 'Convertitore AVIF in PNG',
        description: 'Converti file AVIF in PNG lossless. Qualita preservata.',
        url: toAbsoluteUrl('/it/strumenti/convertitore-avif-in-png'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 28,
        name: 'Convertitore AVIF in WebP',
        description: 'Converti file AVIF in WebP. Ampia compatibilita.',
        url: toAbsoluteUrl('/it/strumenti/convertitore-avif-in-webp'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 29,
        name: 'Convertitore HEIC in JPG',
        description: 'Converti foto HEIC da iPhone in JPG universale. Senza registrazione.',
        url: toAbsoluteUrl('/it/strumenti/convertitore-heic-in-jpg'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 30,
        name: 'Convertitore HEIC in PNG',
        description: 'Converti foto HEIC da iPhone in PNG lossless. Qualita completa.',
        url: toAbsoluteUrl('/it/strumenti/convertitore-heic-in-png'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 31,
        name: 'Convertitore HEIC in WebP',
        description: 'Converti foto HEIC da iPhone in WebP leggero.',
        url: toAbsoluteUrl('/it/strumenti/convertitore-heic-in-webp'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 32,
        name: 'Convertitore TIFF in JPG',
        description: 'Converti file TIFF in JPG compatto. Ideale per scansioni.',
        url: toAbsoluteUrl('/it/strumenti/convertitore-tiff-in-jpg'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 33,
        name: 'Convertitore TIFF in PNG',
        description: 'Converti file TIFF in PNG lossless. Qualita preservata.',
        url: toAbsoluteUrl('/it/strumenti/convertitore-tiff-in-png'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 34,
        name: 'Convertitore TIFF in WebP',
        description: 'Converti file TIFF in WebP leggero. Enorme riduzione.',
        url: toAbsoluteUrl('/it/strumenti/convertitore-tiff-in-webp'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
    ],
  },
};

const faqItems = [
  {
    question: 'Gli strumenti sono a pagamento?',
    answer: 'No. Tutti gli strumenti sono gratuiti, senza abbonamento e senza costi nascosti.',
  },
  {
    question: 'I miei file vengono inviati a un server?',
    answer: 'No. Tutti gli strumenti funzionano interamente nel tuo browser. I file non lasciano mai il tuo computer e non vengono archiviati da nessuna parte.',
  },
  {
    question: 'Devo creare un account?',
    answer: 'No. Puoi utilizzare gli strumenti immediatamente, senza registrarti o creare un account.',
  },
  {
    question: "C'\u00e8 un limite di utilizzo?",
    answer: 'No. Usa gli strumenti senza restrizioni \u2013 nessun limite giornaliero, nessun limite di file, nessun limite di conversioni.',
  },
  {
    question: 'A cosa servono questi strumenti?',
    answer:
      'Aiutano a preparare contenuti per siti web, social media e stampa: ottimizzare immagini, creare favicon, verificare la lunghezza del testo, generare codici QR, scegliere colori e verificarne la leggibilit\u00e0.',
  },
  {
    question: 'Gli strumenti funzionano su dispositivi mobili?',
    answer: 'S\u00ec, ma alcuni strumenti (es. il convertitore WebP e il generatore di favicon) sono ottimizzati per il desktop, poich\u00e9 elaborano file di grandi dimensioni.',
  },
];

export default function ToolsIndexPage() {
  return (
    <>
      <HeroBanner
        title="Strumenti online gratuiti"
        description="Convertitori di formati immagine, editor di immagini, generatore di favicon, contatore di testo, strumenti colore e codici QR. Senza registrazione, senza limiti."
        backgroundImage="/assets/arteon-logo-on-mockup.webp"
        overlay="black"
      />

      <Wrapper>
        <Gap size="sm" />

        <SectionSteps
          title="Immagini e favicon"
          description="Strumenti per preparare foto, grafiche e icone per siti web e social media."
          grid="three"
          items={[
            {
              icon: <RiCropLine className="h-8 w-8" />,
              title: 'Editor di immagini online',
              topImageAlt: 'Editor di immagini online Arteon',
              topImageSrc: '/assets/tools/free-image-editor-crop-resize-and-convert/editor-di-immagini-online-it.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Prepara il ritaglio perfetto per i social media o il tuo sito. Scegli un formato pronto o inserisci dimensioni personalizzate e scarica l\'immagine in PNG, JPG o WebP.</p>
                  <div className="mt-4">
                    <Button arrow link="/it/strumenti/editor-di-immagini-online">
                      Apri strumento
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiAppsLine className="h-8 w-8" />,
              title: 'Generatore di favicon',
              topImageAlt: 'Generatore di favicon Arteon',
              topImageSrc: '/assets/tools/favicon-generator/generatore-di-favicon-gratuito-it.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    Genera <strong>favicon.ico</strong> e icone PNG 180x180, 192x192 e 512x512 da una singola immagine \u2013 conforme ai requisiti dei browser e di Lighthouse.
                  </p>
                  <div className="mt-4">
                    <Button arrow link="/it/strumenti/generatore-di-favicon-gratuito">
                      Apri strumento
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />
        <Gap size="sm" />

        <SectionSteps
          title="Testo e SEO"
          description="Strumenti per verificare la lunghezza del testo, i meta tag e visualizzare in anteprima la tua pagina nei risultati di ricerca."
          grid="three"
          items={[
            {
              icon: <RiFileTextLine className="h-8 w-8" />,
              title: 'Verificatore di meta titolo e descrizione',
              topImageAlt: 'Verificatore di meta titolo e descrizione Arteon',
              topImageSrc: '/assets/tools/free-meta-title-and-description-checker-pixel-width/verificatore-meta-titolo-e-descrizione-it.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    Controlla il numero di caratteri, parole e la larghezza in pixel \u2013 con un&apos;anteprima dell&apos;aspetto della tua pagina nei risultati Google. Evita titoli e descrizioni
                    troncati.
                  </p>
                  <div className="mt-4">
                    <Button arrow link="/it/strumenti/verificatore-meta-titolo-e-descrizione">
                      Apri strumento
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiArticleLine className="h-8 w-8" />,
              title: 'Contatore di parole e caratteri',
              topImageAlt: 'Contatore di parole e caratteri Arteon',
              topImageSrc: '/assets/tools/word-and-character-counter-with-text-formatting-tools/contatore-di-parole-e-caratteri-it.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    Verifica se la lunghezza del testo \u00e8 adeguata per una homepage, pagina servizi, articolo del blog o descrizione prodotto. Lo strumento conta parole, caratteri, paragrafi e
                    stima il tempo di lettura.
                  </p>
                  <div className="mt-4">
                    <Button arrow link="/it/strumenti/contatore-di-parole-e-caratteri">
                      Apri strumento
                    </Button>
                  </div>
                </div>
              ),
            },

            {
              icon: <RiFileTextLine className="h-8 w-8" />,
              title: 'Generatore Lorem Ipsum',
              topImageAlt: 'Generatore Lorem Ipsum Arteon',
              topImageSrc: '/assets/tools/lorem-ipsum-generator/generatore-lorem-ipsum-it.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Genera testo segnaposto in 8 stili e 9 modalità. Lorem Ipsum, Hipster, Business, Bacon e altro. Copia come testo o HTML.</p>
                  <div className="mt-4">
                    <Button arrow link="/it/strumenti/generatore-lorem-ipsum">
                      Apri strumento
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />

        <Gap size="sm" />

        <SectionSteps
          title="E-mail e comunicazione"
          description="Strumenti per una comunicazione e-mail professionale e un'immagine aziendale coerente."
          grid="three"
          items={[
            {
              icon: <RiMailLine className="h-8 w-8" />,
              title: 'Generatore di firma e-mail HTML gratuito',
              topImageAlt: 'Generatore di firma e-mail HTML gratuito Arteon',
              topImageSrc: '/assets/tools/free-html-email-signature-generator/generatore-di-firma-email-gratuito-it.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Crea una firma e-mail professionale in pochi minuti. Inserisci i tuoi dati, scegli i colori e copia il codice HTML in Gmail, Outlook o qualsiasi altro client di posta.</p>
                  <div className="mt-4">
                    <Button arrow link="/it/strumenti/generatore-di-firma-email-gratuito">
                      Apri strumento
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />

        <Gap size="sm" />

        <SectionSteps
          title="Codici QR"
          description="Generatore di codici QR per siti web, biglietti da visita, menu e materiali stampati."
          grid="three"
          items={[
            {
              icon: <RiQrCodeLine className="h-8 w-8" />,
              title: 'Generatore di codici QR gratuito',
              topImageAlt: 'Generatore di codici QR gratuito Arteon',
              topImageSrc: '/assets/tools/qr-code-generator/generatore-di-codici-qr-gratuito-it.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Crea un codice QR per un sito web, una vCard, un menu o un volantino. Esporta in PNG e SVG \u2013 senza registrazione, senza limiti.</p>
                  <div className="mt-4">
                    <Button arrow link="/it/strumenti/generatore-di-codici-qr-gratuito">
                      Apri strumento
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />

        <Gap size="sm" />

        <SectionSteps
          title="Colori e accessibilit\u00e0"
          description="Strumenti per lavorare con i colori, il contrasto e l'accessibilit\u00e0 WCAG."
          grid="three"
          items={[
            {
              icon: <RiContrast2Line className="h-8 w-8" />,
              title: 'Verificatore di contrasto e leggibilit\u00e0',
              topImageAlt: 'Verificatore di contrasto colori Arteon',
              topImageSrc: '/assets/tools/color-contrast-and-readability-checker/verificatore-contrasto-colori-it.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    Verifica se i colori del testo e dello sfondo sono leggibili. Inserisci i codici colore, consulta il rapporto di contrasto <strong>WCAG</strong> e usa la funzione{' '}
                    <strong>Adatta</strong> per una correzione automatica.
                  </p>
                  <div className="mt-4">
                    <Button arrow link="/it/strumenti/verificatore-contrasto-colori">
                      Apri strumento
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiPantoneLine className="h-8 w-8" />,
              title: 'Estrattore di colori da immagine',
              topImageAlt: 'Estrattore di colori da immagine Arteon',
              topImageSrc: '/assets/tools/image-color-extractor/estrattore-di-colori-da-immagine-it.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Carica una foto o un logo \u2013 lo strumento estrarre i colori dominanti. Copia i codici HEX con un solo clic e usali ovunque.</p>
                  <div className="mt-4">
                    <Button arrow link="/it/strumenti/estrattore-di-colori-da-immagine">
                      Apri strumento
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiPaletteLine className="h-8 w-8" />,
              title: 'Generatore di palette di colori',
              topImageAlt: 'Generatore di palette di colori Arteon',
              topImageSrc: '/assets/tools/color-palette-generator/generatore-di-palette-di-colori-it.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Scegli un colore base e genera 9 palette: monocromatica, complementare, triadica, pastello, scura e altre. Copia i codici HEX con un solo clic.</p>
                  <div className="mt-4">
                    <Button arrow link="/it/strumenti/generatore-di-palette-di-colori">
                      Apri strumento
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />

        <Gap size="sm" />

        <SectionSteps
          title="Convertitori di formati immagine"
          description="Convertitori di immagini online - converti tra JPG, PNG, WebP, SVG, BMP e GIF. Conversione nel browser, senza invio di file."
          grid="three"
          items={[
            {
              icon: <RiLoopLeftLine className="h-8 w-8" />,
              title: 'Convertitore JPG in WebP',
              topImageAlt: 'Convertitore JPG in WebP Arteon',
              topImageSrc: '/assets/tools/jpg-png-to-webp-converter/convertitore-jpg-png-in-webp-it.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Converti foto JPG in WebP leggero. Riduci il peso delle immagini fino al 35%.</p>
                  <div className="mt-4">
                    <Button arrow link="/it/strumenti/convertitore-jpg-in-webp">
                      Apri strumento
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiLoopLeftLine className="h-8 w-8" />,
              title: 'Convertitore PNG in JPG',
              topImageAlt: 'Convertitore PNG in JPG Arteon',
              topImageSrc: '/assets/tools/jpg-png-to-webp-converter/convertitore-jpg-png-in-webp-it.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Converti file PNG in JPG nel browser. Senza limiti, senza registrazione.</p>
                  <div className="mt-4">
                    <Button arrow link="/it/strumenti/convertitore-png-in-jpg">
                      Apri strumento
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiLoopLeftLine className="h-8 w-8" />,
              title: 'Convertitore WebP in JPG',
              topImageAlt: 'Convertitore WebP in JPG Arteon',
              topImageSrc: '/assets/tools/jpg-png-to-webp-converter/convertitore-jpg-png-in-webp-it.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Converti file WebP in JPG compatibile ovunque. Senza limiti, senza registrazione.</p>
                  <div className="mt-4">
                    <Button arrow link="/it/strumenti/convertitore-webp-in-jpg">
                      Apri strumento
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiLoopLeftLine className="h-8 w-8" />,
              title: 'Convertitore PNG in WebP',
              topImageAlt: 'Convertitore PNG in WebP Arteon',
              topImageSrc: '/assets/tools/jpg-png-to-webp-converter/convertitore-jpg-png-in-webp-it.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Converti grafiche PNG in WebP. File più piccoli mantenendo la trasparenza.</p>
                  <div className="mt-4">
                    <Button arrow link="/it/strumenti/convertitore-png-in-webp">
                      Apri strumento
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiLoopLeftLine className="h-8 w-8" />,
              title: 'Convertitore JPG in PNG',
              topImageAlt: 'Convertitore JPG in PNG Arteon',
              topImageSrc: '/assets/tools/jpg-png-to-webp-converter/convertitore-jpg-png-in-webp-it.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Converti immagini JPG in PNG senza perdita. Conversione locale nel browser.</p>
                  <div className="mt-4">
                    <Button arrow link="/it/strumenti/convertitore-jpg-in-png">
                      Apri strumento
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiLoopLeftLine className="h-8 w-8" />,
              title: 'Convertitore WebP in PNG',
              topImageAlt: 'Convertitore WebP in PNG Arteon',
              topImageSrc: '/assets/tools/jpg-png-to-webp-converter/convertitore-jpg-png-in-webp-it.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Converti immagini WebP in PNG senza perdita. Conversione locale, niente server.</p>
                  <div className="mt-4">
                    <Button arrow link="/it/strumenti/convertitore-webp-in-png">
                      Apri strumento
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />
        <Gap size="sm" />

        <SectionSteps
          title="Convertitori di dati"
          description="Convertitori di formati dati online — converti tra CSV, JSON, XML, YAML, Markdown e HTML. Elaborazione nel browser."
          grid="three"
          items={[
            {
              icon: <RiLoopLeftLine className="h-8 w-8" />,
              title: 'CSV in JSON',
              topImageAlt: 'CSV in JSON Arteon',
              topImageSrc: '/assets/tools/jpg-png-to-webp-converter/convertitore-jpg-png-in-webp-it.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Converti CSV in formato JSON. Rilevamento automatico dei separatori e formattazione.</p>
                  <div className="mt-4">
                    <Button arrow link="/it/strumenti/convertitore-csv-in-json">
                      Apri strumento
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiLoopLeftLine className="h-8 w-8" />,
              title: 'JSON in CSV',
              topImageAlt: 'JSON in CSV Arteon',
              topImageSrc: '/assets/tools/jpg-png-to-webp-converter/convertitore-jpg-png-in-webp-it.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Converti dati JSON in formato CSV. Elaborazione nel browser.</p>
                  <div className="mt-4">
                    <Button arrow link="/it/strumenti/convertitore-json-in-csv">
                      Apri strumento
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiLoopLeftLine className="h-8 w-8" />,
              title: 'XML in JSON',
              topImageAlt: 'XML in JSON Arteon',
              topImageSrc: '/assets/tools/jpg-png-to-webp-converter/convertitore-jpg-png-in-webp-it.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Converti dati XML in JSON. Conversione nel browser con validazione.</p>
                  <div className="mt-4">
                    <Button arrow link="/it/strumenti/convertitore-xml-in-json">
                      Apri strumento
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiLoopLeftLine className="h-8 w-8" />,
              title: 'JSON in XML',
              topImageAlt: 'JSON in XML Arteon',
              topImageSrc: '/assets/tools/jpg-png-to-webp-converter/convertitore-jpg-png-in-webp-it.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Converti dati JSON in XML valido. Conversione nel browser con formattazione.</p>
                  <div className="mt-4">
                    <Button arrow link="/it/strumenti/convertitore-json-in-xml">
                      Apri strumento
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiLoopLeftLine className="h-8 w-8" />,
              title: 'YAML in JSON',
              topImageAlt: 'YAML in JSON Arteon',
              topImageSrc: '/assets/tools/jpg-png-to-webp-converter/convertitore-jpg-png-in-webp-it.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Converti configurazione YAML in JSON. Validazione e formattazione nel browser.</p>
                  <div className="mt-4">
                    <Button arrow link="/it/strumenti/convertitore-yaml-in-json">
                      Apri strumento
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiLoopLeftLine className="h-8 w-8" />,
              title: 'JSON in YAML',
              topImageAlt: 'JSON in YAML Arteon',
              topImageSrc: '/assets/tools/jpg-png-to-webp-converter/convertitore-jpg-png-in-webp-it.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Converti dati JSON in YAML leggibile. Elaborazione nel browser.</p>
                  <div className="mt-4">
                    <Button arrow link="/it/strumenti/convertitore-json-in-yaml">
                      Apri strumento
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />

        <Gap size="sm" />

        <Gap variant="line" />

        <SectionInfo title="Cosa sono gli strumenti Arteon?">
          <p className="mb-4">
            34 strumenti online gratuiti per creare e ottimizzare contenuti per siti web, social media e stampa \u2013 convertitore WebP, generatore di favicon, contatore di testo, estrattore di
            colori, generatore di palette e codici QR.
          </p>
          <p>Tutti gli strumenti funzionano nel tuo browser \u2013 i file non vengono mai inviati a un server. Usali senza registrazione e senza limiti.</p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionSteps
          title="Perch\u00e9 usare gli strumenti Arteon?"
          grid="two"
          items={[
            {
              icon: <RiShieldCheckLine className="h-6 w-6" />,
              title: 'Privacy totale',
              description: 'Tutti gli strumenti elaborano i file localmente nel tuo browser. Nulla viene inviato a un server \u2013 i dati scompaiono quando chiudi la scheda.',
            },
            {
              icon: <RiInfinityFill className="h-6 w-6" />,
              title: 'Nessun limite di utilizzo',
              description: 'Usa gli strumenti senza restrizioni \u2013 nessun limite giornaliero, nessun limite di file, nessun limite di conversioni. Tutte le volte che vuoi.',
            },
            {
              icon: <RiLockLine className="h-6 w-6" />,
              title: 'Senza registrazione',
              description: 'Nessun account necessario. Apri lo strumento, usalo, \u00e8 tutto qui.',
            },
            {
              icon: <RiGlobalLine className="h-6 w-6" />,
              title: 'Disponibile in italiano',
              description: 'Tutti gli strumenti sono disponibili in italiano \u2013 interfaccia, istruzioni e messaggi.',
            },
          ]}
        />

        <Gap variant="line" />

        <FaqPanels items={faqItems} title="Domande frequenti sui nostri strumenti" />

        <Gap size="sm" />
      </Wrapper>

      <Script id="ld-json-tools-it" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(schema)}
      </Script>
    </>
  );
}
