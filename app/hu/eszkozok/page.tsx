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
  title: 'Ingyenes online eszközök | Képek, SEO, színek, favicon',
  description: '10 ingyenes eszköz: WebP konverter, favicon generátor, szövegszámláló, színkinyerő és QR-kódok. Weboldalakhoz és közösségi médiához. Regisztráció nélkül.',
  alternates: getToolsIndexAlternates('hu'),
  openGraph: {
    title: 'Ingyenes online eszközök | Képek, SEO, színek, favicon',
    description: '10 ingyenes eszköz: WebP konverter, favicon generátor, szövegszámláló, színkinyerő és QR-kódok. Weboldalakhoz és közösségi médiához. Regisztráció nélkül.',
    url: toAbsoluteUrl('/hu/eszkozok'),
    type: 'website',
    images: [{ url: toAbsoluteUrl('/assets/arteon-logo-on-mockup.webp'), width: 1200, height: 630 }],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Ingyenes online eszközök',
  description: '10 ingyenes eszköz: WebP konverter, favicon generátor, szövegszámláló, színkinyerő és QR-kódok. Weboldalakhoz és közösségi médiához. Regisztráció nélkül.',
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
    numberOfItems: 10,
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
        description="Képkonverter, favicon generátor, szövegszámláló, színeszközök és QR-kódok. Regisztráció nélkül, korlátozás nélkül — minden a böngészőjében fut."
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
              icon: <RiImageEditLine className="h-8 w-8" />,
              title: 'JPG/PNG WebP konverter',
              topImageAlt: 'JPG/PNG WebP konverter Arteon',
              topImageSrc: '/assets/tools/jpg-png-to-webp-converter/jpg-webp-konverter-hu.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    Konvertálja JPG vagy PNG képeit <strong>WebP</strong> formátumba és csökkentse a fájlméretet. Gyorsabb betöltési idő a weboldalának.
                  </p>
                  <div className="mt-4">
                    <Button arrow link="/hu/eszkozok/jpg-webp-konverter">
                      Eszköz megnyitása
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiCropLine className="h-8 w-8" />,
              title: 'Képszerkesztő',
              topImageAlt: 'Képszerkesztő Arteon',
              topImageSrc: '/assets/tools/free-image-editor-crop-resize-and-convert/kepszerkeszto-hu.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    Vágja ki képeit tökéletesen a közösségi médiához vagy weboldalához. Válasszon előre beállított formátumot vagy adjon meg egyéni pixelméreteket — letöltés PNG, JPG vagy WebP
                    formátumban.
                  </p>
                  <div className="mt-4">
                    <Button arrow link="/hu/eszkozok/kepszerkeszto">
                      Eszköz megnyitása
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

        <Gap size="sm" />

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

        <Gap variant="line" />

        <SectionInfo title="Mik azok az Arteon eszközök?">
          <p className="mb-4">
            10 ingyenes online eszköz anyagok előkészítéséhez weboldalakhoz, közösségi médiához és nyomtatáshoz — WebP konverter, favicon generátor, szövegszámláló, színkinyerő, paletta generátor és
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
