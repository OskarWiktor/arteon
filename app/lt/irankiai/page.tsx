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
  title: 'Nemokami įrankiai | Vaizdai, SEO, spalvos, favicon',
  description: '10 nemokamų įrankių: WebP konverteris, favicon generatorius, žodžių skaitiklis, spalvų išrinkimas ir QR kodai. Svetainėms ir socialiniams tinklams.',
  alternates: getToolsIndexAlternates('lt'),
  openGraph: {
    title: 'Nemokami įrankiai | Vaizdai, SEO, spalvos, favicon',
    description: '10 nemokamų įrankių: WebP konverteris, favicon generatorius, žodžių skaitiklis, spalvų išrinkimas ir QR kodai. Svetainėms ir socialiniams tinklams.',
    url: toAbsoluteUrl('/lt/irankiai'),
    type: 'website',
    images: [{ url: toAbsoluteUrl('/assets/arteon-logo-on-mockup.webp'), width: 1200, height: 630 }],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Nemokami įrankiai',
  description: '10 nemokamų įrankių svetainėms, socialiniams tinklams ir spaudai.',
  url: toAbsoluteUrl('/lt/irankiai'),
  inLanguage: 'lt',
  isPartOf: { '@type': 'WebSite', name: 'Arteon Agency', url: siteUrl },
  about: [
    { '@type': 'Thing', name: 'Vaizdų optimizavimas' },
    { '@type': 'Thing', name: 'SEO' },
    { '@type': 'Thing', name: 'Spalvos ir prekės ženklas' },
    { '@type': 'Thing', name: 'Generatoriai' },
  ],
  mainEntity: {
    '@type': 'ItemList',
    numberOfItems: 10,
    itemListElement: [
      {
        '@type': 'WebApplication',
        position: 1,
        name: 'JPG/PNG į WebP konverteris',
        url: toAbsoluteUrl('/lt/irankiai/jpg-png-i-webp-konverteris'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 2,
        name: 'Vaizdų redaktorius',
        url: toAbsoluteUrl('/lt/irankiai/vaizdu-redaktorius'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 3,
        name: 'Favicon generatorius',
        url: toAbsoluteUrl('/lt/irankiai/nemokamas-favicon-generatorius'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 4,
        name: 'Meta pavadinimo ir aprašymo tikrintuvas',
        url: toAbsoluteUrl('/lt/irankiai/meta-pavadinimo-ir-aprasymo-tikrintuvas'),
        applicationCategory: 'DeveloperApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 5,
        name: 'Žodžių ir simbolių skaitiklis',
        url: toAbsoluteUrl('/lt/irankiai/zodziu-ir-simboliu-skaitiklis'),
        applicationCategory: 'DeveloperApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 6,
        name: 'El. pašto parašo generatorius',
        url: toAbsoluteUrl('/lt/irankiai/nemokamas-el-paraso-paraso-generatorius'),
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 7,
        name: 'Spalvų kontrasto tikrintuvas',
        url: toAbsoluteUrl('/lt/irankiai/spalvu-kontrasto-tikrintuvas'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 8,
        name: 'Spalvų išrinkimas iš vaizdo',
        url: toAbsoluteUrl('/lt/irankiai/spalvu-isrinkimas-is-vaizdo'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 9,
        name: 'Spalvų paletių generatorius',
        url: toAbsoluteUrl('/lt/irankiai/spalvu-paletes-generatorius'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 10,
        name: 'Nemokamas QR kodo generatorius',
        url: toAbsoluteUrl('/lt/irankiai/nemokamas-qr-kodo-generatorius'),
        applicationCategory: 'UtilityApplication',
        operatingSystem: 'Any',
      },
    ],
  },
};

const faqItems = [
  { question: 'Kiek kainuoja įrankiai?', answer: 'Nieko. Visi įrankiai yra visiškai nemokami, be prenumeratų ir paslėptų mokesčių.' },
  { question: 'Ar mano failai siunčiami į serverį?', answer: 'Ne. Visi įrankiai veikia tiesiogiai naršyklėje. Failai niekada nepalieka jūsų kompiuterio ir niekur nesaugomi.' },
  { question: 'Ar reikia paskyros?', answer: 'Ne. Įrankius galite naudoti iš karto be prisijungimo ar registracijos.' },
  { question: 'Ar yra naudojimo apribojimai?', answer: 'Ne. Naudokite be apribojimų – be dienos limito, be failų limito, be konversijų limito.' },
  {
    question: 'Kam skirti įrankiai?',
    answer:
      'Jie padeda paruošti medžiagą svetainėms, socialiniams tinklams ir spaudai: optimizuoti vaizdus, sukurti favicons, patikrinti teksto ilgį, generuoti QR kodus, pasirinkti spalvas ir patikrinti skaitomumą.',
  },
  { question: 'Ar įrankiai veikia mobiliajame?', answer: 'Taip, tačiau kai kurie įrankiai (WebP konverteris, favicon generatorius) geriau veikia kompiuteryje, nes apdoroja didesnius failus.' },
];

export default function ToolsIndexPage() {
  return (
    <>
      <HeroBanner
        title="Nemokami įrankiai"
        description="Vaizdų konverteris, favicon generatorius, žodžių skaitiklis, spalvų įrankiai ir QR kodai. Be registracijos, be apribojimų – viskas veikia naršyklėje."
        backgroundImage="/assets/arteon-logo-on-mockup.webp"
        overlay="black"
      />
      <Wrapper>
        <Gap size="sm" />
        <SectionSteps
          title="Vaizdai ir favicon"
          description="Įrankiai vaizdų, grafikos ir piktogramų paruošimui svetainėms ir socialiniams tinklams."
          grid="three"
          items={[
            {
              icon: <RiImageEditLine className="h-8 w-8" />,
              title: 'JPG/PNG į WebP konverteris',
              topImageAlt: 'JPG/PNG į WebP konverteris Arteon',
              topImageSrc: '/assets/tools/narzedzia-jpg-png-na-webp-bez-limitu.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    Konvertuokite JPG ir PNG vaizdus į <strong>WebP</strong> formatą ir sumažinkite failų dydį. Greitesnis svetainės įkėlimas.
                  </p>
                  <div className="mt-4">
                    <Button arrow link="/lt/irankiai/jpg-png-i-webp-konverteris">
                      Atidaryti įrankį
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiCropLine className="h-8 w-8" />,
              title: 'Vaizdų redaktorius',
              topImageAlt: 'Vaizdų redaktorius Arteon',
              topImageSrc: '/assets/tools/narzedzia-zmiana-rozmiaru-i-kadrowanie-zdjecia.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Apkirpkite vaizdą socialiniams tinklams ar svetainei. Pasirinkite gatavą formatą arba įveskite pasirinktinius matmenis – atsisiųskite PNG, JPG arba WebP formatu.</p>
                  <div className="mt-4">
                    <Button arrow link="/lt/irankiai/vaizdu-redaktorius">
                      Atidaryti įrankį
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiAppsLine className="h-8 w-8" />,
              title: 'Favicon generatorius',
              topImageAlt: 'Favicon generatorius Arteon',
              topImageSrc: '/assets/tools/narzedzia-darmowy-generator-favicon-ico.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    Sukurkite <strong>favicon.ico</strong> ir PNG piktogramas 180x180, 192x192 ir 512x512 iš vieno vaizdo – atitinkančias naršyklės ir Lighthouse reikalavimus.
                  </p>
                  <div className="mt-4">
                    <Button arrow link="/lt/irankiai/nemokamas-favicon-generatorius">
                      Atidaryti įrankį
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />
        <Gap size="sm" />
        <SectionSteps
          title="Tekstas ir SEO"
          description="Įrankiai teksto ilgiui, meta žymoms tikrinti ir puslapio peržiūrai paieškos rezultatuose."
          grid="three"
          items={[
            {
              icon: <RiFileTextLine className="h-8 w-8" />,
              title: 'Meta pavadinimo ir aprašymo tikrintuvas',
              topImageAlt: 'Meta pavadinimo ir aprašymo tikrintuvas Arteon',
              topImageSrc: '/assets/tools/narzedzia-licznik-dlugosci-meta-title-i-description.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Patikrinkite simbolių ir žodžių skaičių bei pikselių plotį – su Google peržiūra. Išvenkite sutrumpintų pavadinimų ir aprašymų paieškos rezultatuose.</p>
                  <div className="mt-4">
                    <Button arrow link="/lt/irankiai/meta-pavadinimo-ir-aprasymo-tikrintuvas">
                      Atidaryti įrankį
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiArticleLine className="h-8 w-8" />,
              title: 'Žodžių ir simbolių skaitiklis',
              topImageAlt: 'Žodžių ir simbolių skaitiklis Arteon',
              topImageSrc: '/assets/tools/narzedzia-licznik-slow-i-znakow.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    Patikrinkite teksto ilgį ir įvertinkite, ar jis tinka pagrindiniam puslapiui, paslaugų puslapiui, tinklaraščio įrašui ar produkto aprašymui. Įrankis skaičiuoja žodžius, simbolius,
                    pastraipas ir skaitymo laiką.
                  </p>
                  <div className="mt-4">
                    <Button arrow link="/lt/irankiai/zodziu-ir-simboliu-skaitiklis">
                      Atidaryti įrankį
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />
        <Gap size="sm" />
        <SectionSteps
          title="El. paštas ir komunikacija"
          description="Įrankiai profesionaliai el. pašto komunikacijai ir vieningam prekės ženklo vaizdui."
          grid="three"
          items={[
            {
              icon: <RiMailLine className="h-8 w-8" />,
              title: 'Nemokamas el. pašto parašo generatorius',
              topImageAlt: 'El. pašto parašo generatorius Arteon',
              topImageSrc: '/assets/tools/narzedzia-darmowy-generator-stopki-mailowej.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    Sukurkite profesionalų el. pašto parašą per kelias minutes. Įveskite duomenis, pasirinkite spalvas ir nukopijuokite gatavą HTML kodą į Gmail, Outlook ar kitą el. pašto programą.
                  </p>
                  <div className="mt-4">
                    <Button arrow link="/lt/irankiai/nemokamas-el-paraso-paraso-generatorius">
                      Atidaryti įrankį
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />
        <Gap size="sm" />
        <SectionSteps
          title="QR kodai"
          description="QR kodų generatorius svetainėms, vizitinėms kortelėms, meniu ir spaudiniams."
          grid="three"
          items={[
            {
              icon: <RiQrCodeLine className="h-8 w-8" />,
              title: 'Nemokamas QR kodo generatorius',
              topImageAlt: 'QR kodo generatorius Arteon',
              topImageSrc: '/assets/tools/narzedzia-generator-kodu-qr.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Sukurkite QR kodą svetainei, vCard vizitinei kortelei, restorano meniu ar skrajutei. Eksportuokite į PNG ir SVG – be prisijungimo, be apribojimų.</p>
                  <div className="mt-4">
                    <Button arrow link="/lt/irankiai/nemokamas-qr-kodo-generatorius">
                      Atidaryti įrankį
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />
        <Gap size="sm" />
        <SectionSteps
          title="Spalvos ir prieinamumas"
          description="Įrankiai spalvoms, kontrastui ir WCAG prieinamumui tvarkyti."
          grid="three"
          items={[
            {
              icon: <RiContrast2Line className="h-8 w-8" />,
              title: 'Spalvų kontrasto tikrintuvas',
              topImageAlt: 'Spalvų kontrasto tikrintuvas Arteon',
              topImageSrc: '/assets/tools/narzedzia-tester-kontrastu-kolorow-wcag.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    Patikrinkite, ar teksto ir fono spalvos yra įskaitomos. Įveskite spalvų kodus, patikrinkite kontrasto santykį pagal <strong>WCAG</strong> ir naudokite <strong>Match</strong>{' '}
                    funkciją automatiniam pataisymui.
                  </p>
                  <div className="mt-4">
                    <Button arrow link="/lt/irankiai/spalvu-kontrasto-tikrintuvas">
                      Atidaryti įrankį
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiPantoneLine className="h-8 w-8" />,
              title: 'Spalvų išrinkimas iš vaizdo',
              topImageAlt: 'Spalvų išrinkimas iš vaizdo Arteon',
              topImageSrc: '/assets/tools/narzedzia-generator-palety-kolorow-z-obrazu.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Įkelkite nuotrauką arba logotipą – įrankis išrinks dominuojančias spalvas. Nukopijuokite HEX kodus vienu paspaudimu ir naudokite juos bet kur.</p>
                  <div className="mt-4">
                    <Button arrow link="/lt/irankiai/spalvu-isrinkimas-is-vaizdo">
                      Atidaryti įrankį
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiPaletteLine className="h-8 w-8" />,
              title: 'Spalvų paletių generatorius',
              topImageAlt: 'Spalvų paletių generatorius Arteon',
              topImageSrc: '/assets/tools/narzedzia-generator-palet-kolorow-online.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    Pasirinkite pagrindinę spalvą ir sugeneruokite 9 spalvų paletes: monochromatinę, komplementarinę, triadinę, pastelinę, tamsią ir kitas. Nukopijuokite HEX kodus vienu paspaudimu.
                  </p>
                  <div className="mt-4">
                    <Button arrow link="/lt/irankiai/spalvu-paletes-generatorius">
                      Atidaryti įrankį
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />
        <Gap variant="line" />
        <SectionInfo title="Kas yra Arteon įrankiai?">
          <p className="mb-4">
            10 nemokamų įrankių medžiagai paruošti svetainėms, socialiniams tinklams ir spaudai – WebP konverteris, favicon generatorius, žodžių skaitiklis, spalvų išrinkimas, paletių generatorius ir
            QR kodai.
          </p>
          <p>Visi įrankiai veikia naršyklėje – failai niekada nesiunčiami į serverį. Naudokite be registracijos ir be apribojimų.</p>
        </SectionInfo>
        <Gap variant="line" />
        <SectionSteps
          title="Kodėl naudoti Arteon įrankius?"
          grid="two"
          items={[
            {
              icon: <RiShieldCheckLine className="h-6 w-6" />,
              title: 'Visiškas privatumas',
              description: 'Visi įrankiai apdoroja failus lokaliai naršyklėje. Niekas nesiunčiama į serverį – duomenys dingsta uždarius skirtuką.',
            },
            {
              icon: <RiInfinityFill className="h-6 w-6" />,
              title: 'Be naudojimo apribojimų',
              description: 'Naudokite be apribojimų – be dienos limito, be failų limito, be konversijų limito. Kiek kartų reikia.',
            },
            { icon: <RiLockLine className="h-6 w-6" />, title: 'Be registracijos', description: 'Paskyros nereikia. Atidarykite įrankį, naudokite, baigta.' },
            { icon: <RiGlobalLine className="h-6 w-6" />, title: 'Prieinama lietuvių kalba', description: 'Visi įrankiai prieinami lietuvių kalba – sąsaja, instrukcijos ir pranešimai.' },
          ]}
        />
        <Gap variant="line" />
        <FaqPanels items={faqItems} title="Dažniausiai užduodami klausimai apie mūsų įrankius" />
        <Gap size="sm" />
      </Wrapper>
      <Script id="ld-json-tools-lt" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(schema)}
      </Script>
    </>
  );
}
