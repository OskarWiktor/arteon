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
  title: 'Bezplatne nastroje | Obrazky, SEO, barvy, favicon',
  description: '10 bezplatnych nastroju: konvertor WebP, generator favicon, pocitadlo textu, extraktor barev a QR kod. Pro web, socialni site a tisk. Bez registrace.',
  alternates: getToolsIndexAlternates('cs'),
  openGraph: {
    title: 'Bezplatne nastroje | Obrazky, SEO, barvy, favicon',
    description: '10 bezplatnych nastroju: konvertor WebP, generator favicon, pocitadlo textu, extraktor barev a QR kod. Pro web, socialni site a tisk. Bez registrace.',
    url: toAbsoluteUrl('/cs/nastroje'),
    type: 'website',
    images: [{ url: toAbsoluteUrl('/assets/arteon-logo-on-mockup.webp'), width: 1200, height: 630 }],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Bezplatne nastroje',
  description: '10 bezplatnych nastroju: konvertor WebP, generator favicon, pocitadlo textu, extraktor barev a QR kod. Pro web, socialni site a tisk. Bez registrace.',
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
    numberOfItems: 10,
    itemListElement: [
      {
        '@type': 'WebApplication',
        position: 1,
        name: 'Konvertor JPG/PNG na WebP',
        description: 'Bezplatny konvertor JPG a PNG na WebP. Zmensete velikost souboru az o 35 % bez ztraty kvality. Bez registrace — soubory zustavaji v prohlizeci.',
        url: toAbsoluteUrl('/cs/nastroje/prevodnik-jpg-na-webp'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 2,
        name: 'Editor obrazku',
        description: 'Oriznete a zmente velikost obrazku pro socialni site a web. Prednastavene formaty, vlastni rozmery v pixelech a podpora kulateho avataru.',
        url: toAbsoluteUrl('/cs/nastroje/editor-obrazku'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 3,
        name: 'Generator favicon',
        description: 'Bezplatny generator favicon. Vytvorte favicon.ico a PNG ikony (16x16 az 512x512) z jednoho obrazku — v souladu s pozadavky prohlizecu a Lighthouse.',
        url: toAbsoluteUrl('/cs/nastroje/generator-favicon-zdarma'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 4,
        name: 'Kontrola meta titulku a popisu',
        description: 'Kontrola delky meta titulku a popisu s nahledem Google. Zobrazuje pocet znaku a sirku v pixelech, aby se titulky a popisy neorezavaly.',
        url: toAbsoluteUrl('/cs/nastroje/kontrola-meta-titulku-a-popisu'),
        applicationCategory: 'DeveloperApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 5,
        name: 'Generator podpisu e-mailu zdarma',
        description: 'Bezplatny generator HTML podpisu e-mailu. Zadejte kontaktni udaje, CTA odkaz a profily na soc. sitich, pak zkopirujte hotovy HTML kod do Gmailu nebo Outlooku.',
        url: toAbsoluteUrl('/cs/nastroje/generator-podpisu-emailu-zdarma'),
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 6,
        name: 'Kontrola kontrastu barev',
        description: 'Zkontrolujte kontrast a citelnost barev textu a pozadi podle WCAG. Vypocita pomer kontrastu a pomuze s automatickou upravou barvy.',
        url: toAbsoluteUrl('/cs/nastroje/kontrola-kontrastu-barev'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 7,
        name: 'Extraktor barev z obrazku',
        description: 'Bezplatny extraktor barev. Nahrajte fotografii nebo logo a ziskejte paletu az 12 dominantnich barev (HEX a RGB).',
        url: toAbsoluteUrl('/cs/nastroje/extraktor-barev-z-obrazku'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 8,
        name: 'Generator barevnych palet',
        description: 'Vytvorte barevnou paletu z jedne zakladni barvy. Monochromaticka, triadicka, analogicka, komplementarni a dalsi — vcetne pastelove, tmave a minimalisticke varianty.',
        url: toAbsoluteUrl('/cs/nastroje/generator-barevnych-palet'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 9,
        name: 'Pocitadlo slov a znaku',
        description: 'Bezplatne pocitadlo slov a znaku s hodnocenim delky textu. Zkontrolujte, zda delka textu odpovida hlavni strance, sluzbe, clanku na blog nebo popisu produktu.',
        url: toAbsoluteUrl('/cs/nastroje/pocitadlo-slov-a-znaku'),
        applicationCategory: 'DeveloperApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 10,
        name: 'Generator QR kodu zdarma',
        description: 'Bezplatny generator QR kodu. Vytvorte QR kod pro web, vCard, menu restaurace nebo letak. Export do PNG a SVG, bez prihlaseni, bez limitu.',
        url: toAbsoluteUrl('/cs/nastroje/generator-qr-kodu-zdarma'),
        applicationCategory: 'UtilityApplication',
        operatingSystem: 'Any',
      },
    ],
  },
};

const faqItems = [
  { question: 'Kolik nastroje stoji?', answer: 'Nic. Vsechny nastroje jsou zdarma, bez predplatneho a bez skrytych poplatku.' },
  { question: 'Odesilaji se soubory na server?', answer: 'Ne. Vsechny nastroje bezi kompletne v prohlizeci. Soubory nikdy neopousteji pocitac a nejsou nikde ukladany.' },
  { question: 'Potrebuji ucet?', answer: 'Ne. Muzete je pouzivat rovnou bez prihlaseni nebo vytvareni uctu.' },
  { question: 'Existuji nejake limity pouziti?', answer: 'Ne. Pouzivejte bez omezeni — zadny denni limit, zadny limit souboru, zadny limit konverzi.' },
  {
    question: 'K cemu tyto nastroje slouzi?',
    answer: 'Pomahaji pripravit materialy pro web, socialni site a tisk: optimalizovat obrazky, vytvorit favicon, zkontrolovat delku textu, vytvorit QR kod, vybrat barvy a overit jejich citelnost.',
  },
  { question: 'Funguji nastroje na mobilu?', answer: 'Ano, ale nektere nastroje (konvertor WebP, generator favicon) se lepe pouzivaji na desktopu, protoze zpracovavaji vetsi soubory.' },
];

export default function ToolsIndexPage() {
  return (
    <>
      <HeroBanner
        title="Bezplatne nastroje"
        description="Konvertor obrazku, generator favicon, pocitadlo textu, nastroje pro barvy a QR kod. Bez registrace, bez omezeni — vse bezi v prohlizeci."
        backgroundImage="/assets/arteon-logo-on-mockup.webp"
        overlay="black"
      />

      <Wrapper>
        <Gap size="sm" />

        <SectionSteps
          title="Obrazky a favicon"
          description="Nastroje pro pripravu fotek, grafiky a ikon pro web a socialni site."
          grid="three"
          items={[
            {
              icon: <RiImageEditLine className="h-8 w-8" />,
              title: 'Konvertor JPG/PNG na WebP',
              topImageAlt: 'Konvertor JPG/PNG na WebP Arteon',
              topImageSrc: '/assets/tools/jpg-png-to-webp-converter/konvertor-jpg-png-na-webp-cs.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    Prevedte JPG nebo PNG obrazky do formatu <strong>WebP</strong> a zmensete velikost souboru. Rychlejsi nacitani webu.
                  </p>
                  <div className="mt-4">
                    <Button arrow link="/cs/nastroje/prevodnik-jpg-na-webp">
                      Otevrit nastroj
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiCropLine className="h-8 w-8" />,
              title: 'Editor obrazku',
              topImageAlt: 'Editor obrazku Arteon',
              topImageSrc: '/assets/tools/free-image-editor-crop-resize-and-convert/editor-obrazku-cs.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Oriznete obrazek presne pro socialni site nebo web. Vyberte prednastaveny format nebo zadejte vlastni rozmery v pixelech — stahnete v PNG, JPG nebo WebP.</p>
                  <div className="mt-4">
                    <Button arrow link="/cs/nastroje/editor-obrazku">
                      Otevrit nastroj
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiAppsLine className="h-8 w-8" />,
              title: 'Generator favicon a ikon',
              topImageAlt: 'Generator favicon Arteon',
              topImageSrc: '/assets/tools/favicon-generator/generator-favicon-zdarma-cs.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    Vytvorte <strong>favicon.ico</strong> a PNG ikony 180x180, 192x192 a 512x512 z jednoho obrazku — v souladu s pozadavky prohlizecu a Lighthouse.
                  </p>
                  <div className="mt-4">
                    <Button arrow link="/cs/nastroje/generator-favicon-zdarma">
                      Otevrit nastroj
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />

        <Gap size="sm" />

        <SectionSteps
          title="Text a SEO"
          description="Nastroje pro kontrolu delky textu, meta tagu a nahled stranky ve vysledcich vyhledavani."
          grid="three"
          items={[
            {
              icon: <RiFileTextLine className="h-8 w-8" />,
              title: 'Kontrola meta titulku a popisu',
              topImageAlt: 'Kontrola meta titulku a popisu Arteon',
              topImageSrc: '/assets/tools/free-meta-title-and-description-checker-pixel-width/kontrola-meta-titulku-a-popisu-cs.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Zkontrolujte pocet znaku, pocet slov a sirku v pixelech — s nahledem Google. Vyhnete se oriznutym titulkum a popisum ve vysledcich vyhledavani.</p>
                  <div className="mt-4">
                    <Button arrow link="/cs/nastroje/kontrola-meta-titulku-a-popisu">
                      Otevrit nastroj
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiArticleLine className="h-8 w-8" />,
              title: 'Pocitadlo slov a znaku',
              topImageAlt: 'Pocitadlo slov a znaku Arteon',
              topImageSrc: '/assets/tools/word-and-character-counter-with-text-formatting-tools/pocitadlo-slov-a-znaku-cs.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Zkontrolujte delku textu a vyhodnotte, zda se hodi pro hlavni stranku, stranku sluzeb, clanek na blog nebo popis produktu. Nastroj pocita slova, znaky, odstavce a dobu cteni.</p>
                  <div className="mt-4">
                    <Button arrow link="/cs/nastroje/pocitadlo-slov-a-znaku">
                      Otevrit nastroj
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />

        <Gap size="sm" />

        <SectionSteps
          title="E-mail a komunikace"
          description="Nastroje pro profesionalni e-mailovou komunikaci a konzistentni image znacky."
          grid="three"
          items={[
            {
              icon: <RiMailLine className="h-8 w-8" />,
              title: 'Generator podpisu e-mailu zdarma',
              topImageAlt: 'Generator podpisu e-mailu zdarma Arteon',
              topImageSrc: '/assets/tools/free-html-email-signature-generator/generator-podpisu-emailu-zdarma-cs.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Vytvorte profesionalni podpis e-mailu za par minut. Zadejte sve udaje, vyberte barvy a zkopirujte hotovy HTML kod do Gmailu, Outlooku nebo jineho e-mailoveho klienta.</p>
                  <div className="mt-4">
                    <Button arrow link="/cs/nastroje/generator-podpisu-emailu-zdarma">
                      Otevrit nastroj
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />

        <Gap size="sm" />

        <SectionSteps
          title="QR kod"
          description="Generator QR kodu pro web, vizitky, menu a tiskoviny."
          grid="three"
          items={[
            {
              icon: <RiQrCodeLine className="h-8 w-8" />,
              title: 'Generator QR kodu zdarma',
              topImageAlt: 'Generator QR kodu zdarma Arteon',
              topImageSrc: '/assets/tools/qr-code-generator/generator-qr-kodu-zdarma-cs.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Vytvorte QR kod pro web, vCard, menu restaurace nebo letak. Export do PNG a SVG — bez prihlaseni, bez limitu.</p>
                  <div className="mt-4">
                    <Button arrow link="/cs/nastroje/generator-qr-kodu-zdarma">
                      Otevrit nastroj
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />

        <Gap size="sm" />

        <SectionSteps
          title="Barvy a pristupnost"
          description="Nastroje pro praci s barvami, kontrastem a pristupnosti WCAG."
          grid="three"
          items={[
            {
              icon: <RiContrast2Line className="h-8 w-8" />,
              title: 'Kontrola kontrastu barev',
              topImageAlt: 'Kontrola kontrastu barev Arteon',
              topImageSrc: '/assets/tools/color-contrast-and-readability-checker/kontrola-kontrastu-barev-cs.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    Zkontrolujte, zda jsou barvy textu a pozadi citelne. Zadejte kody barev, zobrazte pomer kontrastu podle <strong>WCAG</strong> a pouzijte funkci <strong>Match</strong> pro
                    automatickou opravu.
                  </p>
                  <div className="mt-4">
                    <Button arrow link="/cs/nastroje/kontrola-kontrastu-barev">
                      Otevrit nastroj
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiPantoneLine className="h-8 w-8" />,
              title: 'Extraktor barev z obrazku',
              topImageAlt: 'Extraktor barev z obrazku Arteon',
              topImageSrc: '/assets/tools/image-color-extractor/extraktor-barev-z-obrazku-cs.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Nahrajte fotografii nebo logo — nastroj extrahuje dominantni barvy. Zkopirujte HEX kody jednim kliknutim a pouzijte je kdekoliv.</p>
                  <div className="mt-4">
                    <Button arrow link="/cs/nastroje/extraktor-barev-z-obrazku">
                      Otevrit nastroj
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiPaletteLine className="h-8 w-8" />,
              title: 'Generator barevnych palet',
              topImageAlt: 'Generator barevnych palet Arteon',
              topImageSrc: '/assets/tools/color-palette-generator/generator-barevnych-palet-cs.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Vyberte jednu zakladni barvu a vytvorte 9 barevnych palet: monochromatickou, komplementarni, triadickou, pastelovou, tmavou a dalsi. Zkopirujte HEX kody jednim kliknutim.</p>
                  <div className="mt-4">
                    <Button arrow link="/cs/nastroje/generator-barevnych-palet">
                      Otevrit nastroj
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />

        <Gap variant="line" />

        <SectionInfo title="Co jsou nastroje Arteon?">
          <p className="mb-4">
            10 bezplatnych nastroju pro pripravu materialu pro web, socialni site a tisk — konvertor WebP, generator favicon, pocitadlo textu, extraktor barev, generator palet a QR kod.
          </p>
          <p>Vsechny nastroje bezi v prohlizeci — soubory se nikdy neodesilaji na server. Pouzivejte bez registrace a bez omezeni.</p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionSteps
          title="Proc pouzivat nastroje Arteon?"
          grid="two"
          items={[
            {
              icon: <RiShieldCheckLine className="h-6 w-6" />,
              title: 'Uplne soukromi',
              description: 'Vsechny nastroje zpracovavaji soubory lokalne v prohlizeci. Nic se neodesila na server — data zmizi po zavreni karty.',
            },
            {
              icon: <RiInfinityFill className="h-6 w-6" />,
              title: 'Bez omezeni pouziti',
              description: 'Pouzivejte bez omezeni — zadny denni limit, zadny limit souboru, zadny limit konverzi. Kolikrat potrebujete.',
            },
            { icon: <RiLockLine className="h-6 w-6" />, title: 'Bez registrace', description: 'Nepotrebujete ucet. Otevrete nastroj, pouzijte, hotovo.' },
            { icon: <RiGlobalLine className="h-6 w-6" />, title: 'K dispozici v cestine', description: 'Vsechny nastroje jsou k dispozici v cestine — rozhrani, navody i hlasky.' },
          ]}
        />

        <Gap variant="line" />

        <FaqPanels items={faqItems} title="Casto kladene otazky o nasich nastrojich" />

        <Gap size="sm" />
      </Wrapper>

      <Script id="ld-json-tools-cs" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(schema)}
      </Script>
    </>
  );
}
