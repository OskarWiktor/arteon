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
  title: 'Bezplatné nástroje | Obrázky, SEO, farby, favicon',
  description: '10 bezplatných nástrojov: WebP konvertor, generátor favicon, počítadlo slov, extraktor farieb a QR kódy. Pre webové stránky a sociálne siete.',
  alternates: getToolsIndexAlternates('sk'),
  openGraph: {
    title: 'Bezplatné nástroje | Obrázky, SEO, farby, favicon',
    description: '10 bezplatných nástrojov: WebP konvertor, generátor favicon, počítadlo slov, extraktor farieb a QR kódy. Pre webové stránky a sociálne siete.',
    url: toAbsoluteUrl('/sk/nastroje'),
    type: 'website',
    images: [{ url: toAbsoluteUrl('/assets/arteon-logo-on-mockup.webp'), width: 1200, height: 630 }],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Bezplatné nástroje',
  description: '10 bezplatných nástrojov pre webové stránky, sociálne siete a tlačoviny.',
  url: toAbsoluteUrl('/sk/nastroje'),
  inLanguage: 'sk',
  isPartOf: { '@type': 'WebSite', name: 'Arteon Agency', url: siteUrl },
  about: [
    { '@type': 'Thing', name: 'Optimalizácia obrázkov' },
    { '@type': 'Thing', name: 'SEO' },
    { '@type': 'Thing', name: 'Farby a značka' },
    { '@type': 'Thing', name: 'Generátory' },
  ],
  mainEntity: {
    '@type': 'ItemList',
    numberOfItems: 10,
    itemListElement: [
      {
        '@type': 'WebApplication',
        position: 1,
        name: 'Konvertor JPG/PNG na WebP',
        url: toAbsoluteUrl('/sk/nastroje/konvertor-jpg-png-na-webp'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      { '@type': 'WebApplication', position: 2, name: 'Editor obrázkov', url: toAbsoluteUrl('/sk/nastroje/editor-obrazkov'), applicationCategory: 'MultimediaApplication', operatingSystem: 'Any' },
      {
        '@type': 'WebApplication',
        position: 3,
        name: 'Generátor favicon',
        url: toAbsoluteUrl('/sk/nastroje/generator-favicon-zadarmo'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 4,
        name: 'Kontrola meta titulku a popisu',
        url: toAbsoluteUrl('/sk/nastroje/kontrola-meta-titulku-a-popisu'),
        applicationCategory: 'DeveloperApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 5,
        name: 'Počítadlo slov a znakov',
        url: toAbsoluteUrl('/sk/nastroje/pocitadlo-slov-a-znakov'),
        applicationCategory: 'DeveloperApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 6,
        name: 'Generátor podpisu e-mailu',
        url: toAbsoluteUrl('/sk/nastroje/generator-podpisu-emailu-zadarmo'),
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 7,
        name: 'Kontrola kontrastu farieb',
        url: toAbsoluteUrl('/sk/nastroje/kontrola-kontrastu-farieb'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 8,
        name: 'Extraktor farieb z obrázka',
        url: toAbsoluteUrl('/sk/nastroje/extraktor-farieb-z-obrazka'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 9,
        name: 'Generátor farebných palét',
        url: toAbsoluteUrl('/sk/nastroje/generator-farebnych-palet'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 10,
        name: 'Generátor QR kódov zadarmo',
        url: toAbsoluteUrl('/sk/nastroje/generator-qr-kodov-zadarmo'),
        applicationCategory: 'UtilityApplication',
        operatingSystem: 'Any',
      },
    ],
  },
};

const faqItems = [
  { question: 'Koľko stoja nástroje?', answer: 'Nič. Všetky nástroje sú úplne bezplatné, bez predplatného a skrytých poplatkov.' },
  { question: 'Odosielajú sa moje súbory na server?', answer: 'Nie. Všetky nástroje fungujú priamo v prehliadači. Súbory nikdy neopúšťajú váš počítač a nie sú nikam ukladané.' },
  { question: 'Potrebujem účet?', answer: 'Nie. Nástroje môžete používať okamžite bez prihlásenia alebo registrácie.' },
  { question: 'Existujú obmedzenia používania?', answer: 'Nie. Používajte bez obmedzení \u2013 bez denného limitu, bez limitu súborov, bez limitu konverzií.' },
  {
    question: 'Na čo sú nástroje určené?',
    answer:
      'Pomáhajú pripraviť materiály pre webové stránky, sociálne siete a tlačoviny: optimalizovať obrázky, vytvoriť favicon, skontrolovať dĺžku textu, generovať QR kódy, vyberať farby a kontrolovať čitateľnosť.',
  },
  { question: 'Fungujú nástroje na mobile?', answer: 'Áno, ale niektoré nástroje (WebP konvertor, generátor favicon) fungujú lepšie na počítači, pretože pracujú s väčšími súbormi.' },
];

export default function ToolsIndexPage() {
  return (
    <>
      <HeroBanner
        title="Bezplatné nástroje"
        description="Konvertor obrázkov, generátor favicon, počítadlo slov, farebné nástroje a QR kódy. Bez registrácie, bez obmedzení \u2013 všetko funguje v prehliadači."
        backgroundImage="/assets/arteon-logo-on-mockup.webp"
        overlay="black"
      />
      <Wrapper>
        <Gap size="sm" />
        <SectionSteps
          title="Obrázky a favicon"
          description="Nástroje na prípravu obrázkov, grafiky a ikon pre webové stránky a sociálne siete."
          grid="three"
          items={[
            {
              icon: <RiImageEditLine className="h-8 w-8" />,
              title: 'Konvertor JPG/PNG na WebP',
              topImageAlt: 'Konvertor JPG/PNG na WebP Arteon',
              topImageSrc: '/assets/tools/narzedzia-jpg-png-na-webp-bez-limitu.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    Preveďte JPG a PNG obrázky do formátu <strong>WebP</strong> a zmenšite veľkosť súborov. Rýchlejšie načítanie stránky.
                  </p>
                  <div className="mt-4">
                    <Button arrow link="/sk/nastroje/konvertor-jpg-png-na-webp">
                      Otvoriť nástroj
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiCropLine className="h-8 w-8" />,
              title: 'Editor obrázkov',
              topImageAlt: 'Editor obrázkov Arteon',
              topImageSrc: '/assets/tools/narzedzia-zmiana-rozmiaru-i-kadrowanie-zdjecia.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Orezajte obrázok pre sociálne siete alebo webovú stránku. Vyberte prednastavený formát alebo zadajte vlastné rozmery \u2013 stiahnite vo formáte PNG, JPG alebo WebP.</p>
                  <div className="mt-4">
                    <Button arrow link="/sk/nastroje/editor-obrazkov">
                      Otvoriť nástroj
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiAppsLine className="h-8 w-8" />,
              title: 'Generátor favicon',
              topImageAlt: 'Generátor favicon Arteon',
              topImageSrc: '/assets/tools/narzedzia-darmowy-generator-favicon-ico.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    Vytvorte <strong>favicon.ico</strong> a PNG ikony 180x180, 192x192 a 512x512 z jedného obrázka \u2013 v súlade s požiadavkami prehliadačov a Lighthouse.
                  </p>
                  <div className="mt-4">
                    <Button arrow link="/sk/nastroje/generator-favicon-zadarmo">
                      Otvoriť nástroj
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
          description="Nástroje na kontrolu dĺžky textu, meta značiek a náhľad stránky vo výsledkoch vyhľadávania."
          grid="three"
          items={[
            {
              icon: <RiFileTextLine className="h-8 w-8" />,
              title: 'Kontrola meta titulku a popisu',
              topImageAlt: 'Kontrola meta titulku a popisu Arteon',
              topImageSrc: '/assets/tools/narzedzia-licznik-dlugosci-meta-title-i-description.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Skontrolujte počet znakov a slov a šírku v pixeloch \u2013 s Google náhľadom. Vyhnite sa skráteným titulkom a popisom vo výsledkoch vyhľadávania.</p>
                  <div className="mt-4">
                    <Button arrow link="/sk/nastroje/kontrola-meta-titulku-a-popisu">
                      Otvoriť nástroj
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiArticleLine className="h-8 w-8" />,
              title: 'Počítadlo slov a znakov',
              topImageAlt: 'Počítadlo slov a znakov Arteon',
              topImageSrc: '/assets/tools/narzedzia-licznik-slow-i-znakow.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Skontrolujte dĺžku textu a posúďte, či sa hodí na hlavnú stránku, stránku služieb, článok na blog alebo popis produktu. Nástroj počíta slová, znaky, odseky a čas čítania.</p>
                  <div className="mt-4">
                    <Button arrow link="/sk/nastroje/pocitadlo-slov-a-znakov">
                      Otvoriť nástroj
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />
        <Gap size="sm" />
        <SectionSteps
          title="E-mail a komunikácia"
          description="Nástroje pre profesionálnu e-mailovú komunikáciu a jednotný firemný vzhľad."
          grid="three"
          items={[
            {
              icon: <RiMailLine className="h-8 w-8" />,
              title: 'Generátor podpisu e-mailu zadarmo',
              topImageAlt: 'Generátor podpisu e-mailu Arteon',
              topImageSrc: '/assets/tools/narzedzia-darmowy-generator-stopki-mailowej.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Vytvorte profesionálny e-mailový podpis za pár minút. Zadajte údaje, vyberte farby a skopírujte hotový HTML kód do Gmailu, Outlooku alebo iného e-mailového klienta.</p>
                  <div className="mt-4">
                    <Button arrow link="/sk/nastroje/generator-podpisu-emailu-zadarmo">
                      Otvoriť nástroj
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />
        <Gap size="sm" />
        <SectionSteps
          title="QR kódy"
          description="Generátor QR kódov pre webové stránky, vizitky, jedálne lístky a tlačoviny."
          grid="three"
          items={[
            {
              icon: <RiQrCodeLine className="h-8 w-8" />,
              title: 'Generátor QR kódov zadarmo',
              topImageAlt: 'Generátor QR kódov Arteon',
              topImageSrc: '/assets/tools/narzedzia-generator-kodu-qr.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Vytvorte QR kód pre webovú stránku, vCard vizitku, jedálny lístok reštaurácie alebo leták. Export do PNG a SVG \u2013 bez prihlásenia, bez obmedzení.</p>
                  <div className="mt-4">
                    <Button arrow link="/sk/nastroje/generator-qr-kodov-zadarmo">
                      Otvoriť nástroj
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />
        <Gap size="sm" />
        <SectionSteps
          title="Farby a prístupnosť"
          description="Nástroje na prácu s farbami, kontrastom a prístupnosťou podľa WCAG."
          grid="three"
          items={[
            {
              icon: <RiContrast2Line className="h-8 w-8" />,
              title: 'Kontrola kontrastu farieb',
              topImageAlt: 'Kontrola kontrastu farieb Arteon',
              topImageSrc: '/assets/tools/narzedzia-tester-kontrastu-kolorow-wcag.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    Skontrolujte, či sú farby textu a pozadia čitateľné. Zadajte farebné kódy, skontrolujte kontrastný pomer podľa <strong>WCAG</strong> a použite funkciu <strong>Match</strong> na
                    automatickú opravu.
                  </p>
                  <div className="mt-4">
                    <Button arrow link="/sk/nastroje/kontrola-kontrastu-farieb">
                      Otvoriť nástroj
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiPantoneLine className="h-8 w-8" />,
              title: 'Extraktor farieb z obrázka',
              topImageAlt: 'Extraktor farieb z obrázka Arteon',
              topImageSrc: '/assets/tools/narzedzia-generator-palety-kolorow-z-obrazu.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Nahrajte fotku alebo logo \u2013 nástroj extrahuje dominantné farby. Skopírujte HEX kódy jedným kliknutím a použite ich kdekoľvek.</p>
                  <div className="mt-4">
                    <Button arrow link="/sk/nastroje/extraktor-farieb-z-obrazka">
                      Otvoriť nástroj
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiPaletteLine className="h-8 w-8" />,
              title: 'Generátor farebných palét',
              topImageAlt: 'Generátor farebných palét Arteon',
              topImageSrc: '/assets/tools/narzedzia-generator-palet-kolorow-online.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Vyberte základnú farbu a vygenerujte 9 farebných palét: monochromatickú, komplementárnu, triadickú, pastelovú, tmavú a ďalšie. Skopírujte HEX kódy jedným kliknutím.</p>
                  <div className="mt-4">
                    <Button arrow link="/sk/nastroje/generator-farebnych-palet">
                      Otvoriť nástroj
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />
        <Gap variant="line" />
        <SectionInfo title="Čo sú nástroje Arteon?">
          <p className="mb-4">
            10 bezplatných nástrojov na prípravu materiálov pre webové stránky, sociálne siete a tlačoviny \u2013 WebP konvertor, generátor favicon, počítadlo slov, extraktor farieb, generátor palét a
            QR kódy.
          </p>
          <p>Všetky nástroje fungujú v prehliadači \u2013 súbory sa nikdy neodosielajú na server. Používajte bez registrácie a bez obmedzení.</p>
        </SectionInfo>
        <Gap variant="line" />
        <SectionSteps
          title="Prečo používať nástroje Arteon?"
          grid="two"
          items={[
            {
              icon: <RiShieldCheckLine className="h-6 w-6" />,
              title: 'Plné súkromie',
              description: 'Všetky nástroje spracúvajú súbory lokálne v prehliadači. Nič sa neodosiela na server \u2013 údaje zmiznú po zatvorení karty.',
            },
            {
              icon: <RiInfinityFill className="h-6 w-6" />,
              title: 'Bez obmedzení používania',
              description: 'Používajte bez obmedzení \u2013 bez denného limitu, bez limitu súborov, bez limitu konverzií. Koľkokrát potrebujete.',
            },
            { icon: <RiLockLine className="h-6 w-6" />, title: 'Bez registrácie', description: 'Účet nie je potrebný. Otvorte nástroj, použite ho, hotovo.' },
            { icon: <RiGlobalLine className="h-6 w-6" />, title: 'Dostupné v slovenčine', description: 'Všetky nástroje sú dostupné v slovenčine \u2013 rozhranie, pokyny aj oznámenia.' },
          ]}
        />
        <Gap variant="line" />
        <FaqPanels items={faqItems} title="Často kladené otázky o našich nástrojoch" />
        <Gap size="sm" />
      </Wrapper>
      <Script id="ld-json-tools-sk" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(schema)}
      </Script>
    </>
  );
}
