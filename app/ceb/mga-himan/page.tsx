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
  title: 'Libre nga mga himan | Hulagway, SEO, kolor, favicon',
  description: '10 libre nga himan: WebP converter, favicon generator, text counter, color extractor, ug QR code. Para sa website ug social media.',
  alternates: getToolsIndexAlternates('ceb'),
  openGraph: {
    title: 'Libre nga mga himan | Hulagway, SEO, kolor, favicon',
    description: '10 libre nga himan: WebP converter, favicon generator, text counter, color extractor, ug QR code. Para sa website ug social media.',
    url: toAbsoluteUrl('/ceb/mga-himan'),
    type: 'website',
    images: [{ url: toAbsoluteUrl('/assets/arteon-logo-on-mockup.webp'), width: 1200, height: 630 }],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Libre nga mga himan',
  description: '10 libre nga himan: WebP converter, favicon generator, text counter, color extractor, ug QR code. Para sa website ug social media.',
  url: toAbsoluteUrl('/ceb/mga-himan'),
  inLanguage: 'ceb',
  isPartOf: { '@type': 'WebSite', name: 'Arteon Agency', url: siteUrl },
  about: [
    { '@type': 'Thing', name: 'Pag-optimize sa hulagway' },
    { '@type': 'Thing', name: 'SEO' },
    { '@type': 'Thing', name: 'Kolor ug branding' },
    { '@type': 'Thing', name: 'Mga generator' },
  ],
  mainEntity: {
    '@type': 'ItemList',
    numberOfItems: 10,
    itemListElement: [
      {
        '@type': 'WebApplication',
        position: 1,
        name: 'JPG/PNG ngadto WebP converter',
        description: 'Libre nga JPG ug PNG ngadto WebP converter. Gamaya ang gidak-on sa file hangtod 35% nga walay pagkawala sa kalidad. Walay registration — ang mga file nagpabilin sa browser.',
        url: toAbsoluteUrl('/ceb/mga-himan/jpg-png-ngadto-webp-converter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 2,
        name: 'Editor sa hulagway',
        description: 'I-crop ug i-resize ang mga hulagway para sa social media ug website. Mga andam na nga format, custom nga pixel sizes, ug suporta sa bilog nga avatar.',
        url: toAbsoluteUrl('/ceb/mga-himan/editor-sa-hulagway'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 3,
        name: 'Favicon generator',
        description: 'Libre nga favicon generator. Paghimo og favicon.ico ug PNG icon (16x16 hangtod 512x512) gikan sa usa ka hulagway — sumala sa mga kinahanglanon sa browser ug Lighthouse.',
        url: toAbsoluteUrl('/ceb/mga-himan/libre-nga-favicon-generator'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 4,
        name: 'Tigsusi sa meta titulo ug deskripsyon',
        description: 'Tigsusi sa gitas-on sa meta titulo ug deskripsyon nga may Google preview. Gipakita ang ihap sa karakter ug pixel width aron dili maputol ang mga titulo ug deskripsyon.',
        url: toAbsoluteUrl('/ceb/mga-himan/tigsusi-sa-meta-titulo-ug-deskripsyon'),
        applicationCategory: 'DeveloperApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 5,
        name: 'Libre nga HTML email signature generator',
        description: 'Libre nga HTML email signature generator. Isulod ang mga detalye sa kontak, CTA link, ug social media profile, dayon kopyaha ang andam na nga HTML code sa Gmail o Outlook.',
        url: toAbsoluteUrl('/ceb/mga-himan/libre-nga-email-pirma-generator'),
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 6,
        name: 'Tigsusi sa kontras sa kolor',
        description: 'Susiha ang kontras ug readability sa kolor sa teksto ug background sumala sa WCAG. Gikalkula ang contrast ratio ug nagtabang sa awtomatik nga pag-adjust sa kolor.',
        url: toAbsoluteUrl('/ceb/mga-himan/tigsusi-sa-kontras-sa-kolor'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 7,
        name: 'Tigkuha sa kolor gikan sa hulagway',
        description: 'Libre nga color extractor. Pag-upload og litrato o logo ug pagkuha og paleta hangtod 12 dominante nga kolor (HEX ug RGB).',
        url: toAbsoluteUrl('/ceb/mga-himan/tigkuha-sa-kolor-gikan-sa-hulagway'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 8,
        name: 'Generator sa paleta sa kolor',
        description: 'Paghimo og color palette gikan sa usa ka base nga kolor. Monochromatic, triadic, analogous, complementary, ug uban pa — lakip ang pastel, dark, ug minimalist nga variant.',
        url: toAbsoluteUrl('/ceb/mga-himan/generator-sa-paleta-sa-kolor'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 9,
        name: 'Tigihap sa pulong ug karakter',
        description:
          'Libre nga tigihap sa pulong ug karakter nga may ebalwasyon sa gitas-on sa teksto. Susiha kung angay ba ang gitas-on sa teksto para sa homepage, service page, blog post, o product description.',
        url: toAbsoluteUrl('/ceb/mga-himan/tigihap-sa-pulong-ug-karakter'),
        applicationCategory: 'DeveloperApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 10,
        name: 'Libre nga QR code generator',
        description: 'Libre nga QR code generator. Paghimo og QR code para sa website, vCard, menu sa restaurant, o flyer. I-export sa PNG ug SVG, walay login, walay limitasyon.',
        url: toAbsoluteUrl('/ceb/mga-himan/libre-nga-qr-code-generator'),
        applicationCategory: 'UtilityApplication',
        operatingSystem: 'Any',
      },
    ],
  },
};

const faqItems = [
  { question: 'Tagpila kini nga mga himan?', answer: 'Libre. Tanan nga himan libre, walay subscription ug walay natagong bayad.' },
  {
    question: 'Gipadala ba ang akong mga file sa server?',
    answer: 'Dili. Tanan nga himan nagtrabaho sa tibuok sa browser. Ang mga file wala mobiya sa computer ug wala gitipigan bisan asa.',
  },
  { question: 'Kinahanglan ba nako og account?', answer: 'Dili. Magamit nimo dayon nga walay login o paghimo og account.' },
  { question: 'Adunay ba limitasyon sa paggamit?', answer: 'Wala. Gamita nga walay limitasyon — walay adlaw-adlaw nga limit, walay file limit, walay conversion limit.' },
  {
    question: 'Para unsa kini nga mga himan?',
    answer:
      'Nagtabang sa pag-andam sa mga materyales para sa website, social media, ug print: pag-optimize sa hulagway, paghimo og favicon, pagsusi sa gitas-on sa teksto, paghimo og QR code, pagpili og kolor, ug pagsusi sa readability.',
  },
  {
    question: 'Molihok ba ang mga himan sa mobile?',
    answer: 'Oo, apan ang pipila ka himan (WebP converter, favicon generator) mas maayo gamiton sa desktop kay nagproseso sila og mas dagko nga file.',
  },
];

export default function ToolsIndexPage() {
  return (
    <>
      <HeroBanner
        title="Libre nga mga himan"
        description="Image converter, favicon generator, text counter, mga color tool, ug QR code. Walay registration, walay limitasyon — tanan nagtrabaho sa browser."
        backgroundImage="/assets/arteon-logo-on-mockup.webp"
        overlay="black"
      />

      <Wrapper>
        <Gap size="sm" />

        <SectionSteps
          title="Hulagway ug favicon"
          description="Mga himan para sa pag-andam sa mga litrato, graphic, ug icon para sa website ug social media."
          grid="three"
          items={[
            {
              icon: <RiImageEditLine className="h-8 w-8" />,
              title: 'JPG/PNG ngadto WebP converter',
              topImageAlt: 'JPG/PNG ngadto WebP converter Arteon',
              topImageSrc: '/assets/tools/narzedzia-jpg-png-na-webp-bez-limitu.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    I-convert ang JPG o PNG nga hulagway ngadto sa <strong>WebP</strong> format ug gamaya ang gidak-on sa file. Mas paspas nga pag-load para sa website.
                  </p>
                  <div className="mt-4">
                    <Button arrow link="/ceb/mga-himan/jpg-png-ngadto-webp-converter">
                      Ablihi ang himan
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiCropLine className="h-8 w-8" />,
              title: 'Editor sa hulagway',
              topImageAlt: 'Editor sa hulagway Arteon',
              topImageSrc: '/assets/tools/narzedzia-zmiana-rozmiaru-i-kadrowanie-zdjecia.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>I-crop ang hulagway nga perpekto para sa social media o website. Pagpili og andam na nga format o pag-type og custom nga pixel sizes — i-download sa PNG, JPG, o WebP.</p>
                  <div className="mt-4">
                    <Button arrow link="/ceb/mga-himan/editor-sa-hulagway">
                      Ablihi ang himan
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiAppsLine className="h-8 w-8" />,
              title: 'Favicon ug icon generator',
              topImageAlt: 'Favicon generator Arteon',
              topImageSrc: '/assets/tools/narzedzia-darmowy-generator-favicon-ico.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    Paghimo og <strong>favicon.ico</strong> ug PNG icon nga 180x180, 192x192, ug 512x512 gikan sa usa ka hulagway — sumala sa mga kinahanglanon sa browser ug Lighthouse.
                  </p>
                  <div className="mt-4">
                    <Button arrow link="/ceb/mga-himan/libre-nga-favicon-generator">
                      Ablihi ang himan
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />

        <Gap size="sm" />

        <SectionSteps
          title="Teksto ug SEO"
          description="Mga himan para sa pagsusi sa gitas-on sa teksto, meta tag, ug preview sa panid sa search results."
          grid="three"
          items={[
            {
              icon: <RiFileTextLine className="h-8 w-8" />,
              title: 'Tigsusi sa meta titulo ug deskripsyon',
              topImageAlt: 'Tigsusi sa meta titulo ug deskripsyon Arteon',
              topImageSrc: '/assets/tools/narzedzia-licznik-dlugosci-meta-title-i-description.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Susiha ang ihap sa karakter, ihap sa pulong, ug pixel width — uban ang Google preview. Likayan ang mga naputol nga titulo ug deskripsyon sa search results.</p>
                  <div className="mt-4">
                    <Button arrow link="/ceb/mga-himan/tigsusi-sa-meta-titulo-ug-deskripsyon">
                      Ablihi ang himan
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiArticleLine className="h-8 w-8" />,
              title: 'Tigihap sa pulong ug karakter',
              topImageAlt: 'Tigihap sa pulong ug karakter Arteon',
              topImageSrc: '/assets/tools/narzedzia-licznik-slow-i-znakow.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    Susiha ang gitas-on sa teksto ug i-evaluate kung angay kini para sa homepage, service page, blog post, o product description. Gi-ihap sa himan ang mga pulong, karakter, parapo, ug
                    oras sa pagbasa.
                  </p>
                  <div className="mt-4">
                    <Button arrow link="/ceb/mga-himan/tigihap-sa-pulong-ug-karakter">
                      Ablihi ang himan
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />

        <Gap size="sm" />

        <SectionSteps
          title="Email ug komunikasyon"
          description="Mga himan para sa propesyonal nga email communication ug konsistente nga brand image."
          grid="three"
          items={[
            {
              icon: <RiMailLine className="h-8 w-8" />,
              title: 'Libre nga HTML email signature generator',
              topImageAlt: 'Libre nga HTML email signature generator Arteon',
              topImageSrc: '/assets/tools/narzedzia-darmowy-generator-stopki-mailowej.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    Paghimo og propesyonal nga email signature sa pipila ka minuto. Isulod ang mga detalye, pagpili og kolor, ug kopyaha ang andam na nga HTML code sa Gmail, Outlook, o ubang email
                    client.
                  </p>
                  <div className="mt-4">
                    <Button arrow link="/ceb/mga-himan/libre-nga-email-pirma-generator">
                      Ablihi ang himan
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />

        <Gap size="sm" />

        <SectionSteps
          title="QR code"
          description="QR code generator para sa website, business card, menu, ug mga print material."
          grid="three"
          items={[
            {
              icon: <RiQrCodeLine className="h-8 w-8" />,
              title: 'Libre nga QR code generator',
              topImageAlt: 'Libre nga QR code generator Arteon',
              topImageSrc: '/assets/tools/narzedzia-generator-kodu-qr.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Paghimo og QR code para sa website, vCard, menu sa restaurant, o flyer. I-export sa PNG ug SVG — walay login, walay limitasyon.</p>
                  <div className="mt-4">
                    <Button arrow link="/ceb/mga-himan/libre-nga-qr-code-generator">
                      Ablihi ang himan
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />

        <Gap size="sm" />

        <SectionSteps
          title="Kolor ug accessibility"
          description="Mga himan para sa pagtrabaho sa kolor, kontras, ug WCAG accessibility."
          grid="three"
          items={[
            {
              icon: <RiContrast2Line className="h-8 w-8" />,
              title: 'Tigsusi sa kontras sa kolor',
              topImageAlt: 'Tigsusi sa kontras sa kolor Arteon',
              topImageSrc: '/assets/tools/narzedzia-tester-kontrastu-kolorow-wcag.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    Susiha kung mabasa ba ang kolor sa teksto ug background. Isulod ang mga color code, tan-awa ang contrast ratio sumala sa <strong>WCAG</strong>, ug gamita ang <strong>Match</strong>{' '}
                    function para sa awtomatik nga pag-correct.
                  </p>
                  <div className="mt-4">
                    <Button arrow link="/ceb/mga-himan/tigsusi-sa-kontras-sa-kolor">
                      Ablihi ang himan
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiPantoneLine className="h-8 w-8" />,
              title: 'Tigkuha sa kolor gikan sa hulagway',
              topImageAlt: 'Tigkuha sa kolor gikan sa hulagway Arteon',
              topImageSrc: '/assets/tools/narzedzia-generator-palety-kolorow-z-obrazu.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Pag-upload og litrato o logo — kuhaon sa himan ang mga dominante nga kolor. Kopyaha ang HEX code sa usa ka click ug gamita bisan asa.</p>
                  <div className="mt-4">
                    <Button arrow link="/ceb/mga-himan/tigkuha-sa-kolor-gikan-sa-hulagway">
                      Ablihi ang himan
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiPaletteLine className="h-8 w-8" />,
              title: 'Generator sa paleta sa kolor',
              topImageAlt: 'Generator sa paleta sa kolor Arteon',
              topImageSrc: '/assets/tools/narzedzia-generator-palet-kolorow-online.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Pagpili og usa ka base nga kolor ug paghimo og 9 ka color palette: monochromatic, complementary, triadic, pastel, dark, ug uban pa. Kopyaha ang HEX code sa usa ka click.</p>
                  <div className="mt-4">
                    <Button arrow link="/ceb/mga-himan/generator-sa-paleta-sa-kolor">
                      Ablihi ang himan
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />

        <Gap variant="line" />

        <SectionInfo title="Unsa ang mga himan sa Arteon?">
          <p className="mb-4">
            10 libre nga himan para sa pag-andam sa mga materyales para sa website, social media, ug print — WebP converter, favicon generator, text counter, color extractor, palette generator, ug QR
            code.
          </p>
          <p>Tanan nga himan nagtrabaho sa browser — ang mga file dili gayod gipadala sa server. Gamita nga walay registration ug walay limitasyon.</p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionSteps
          title="Ngano gamiton ang mga himan sa Arteon?"
          grid="two"
          items={[
            {
              icon: <RiShieldCheckLine className="h-6 w-6" />,
              title: 'Tibuok nga pribasiya',
              description: 'Tanan nga himan nagproseso sa mga file lokal sa browser. Wala gipadala sa server — mawala ang datos kung isira ang tab.',
            },
            {
              icon: <RiInfinityFill className="h-6 w-6" />,
              title: 'Walay limitasyon sa paggamit',
              description: 'Gamita nga walay limitasyon — walay adlaw-adlaw nga limit, walay file limit, walay conversion limit. Bisan pila ang gikinahanglan.',
            },
            { icon: <RiLockLine className="h-6 w-6" />, title: 'Walay registration', description: 'Dili kinahanglan og account. Ablihi ang himan, gamita, tapos na.' },
            { icon: <RiGlobalLine className="h-6 w-6" />, title: 'Available sa Cebuano', description: 'Tanan nga himan available sa Cebuano — interface, mga instruksyon, ug mga mensahe.' },
          ]}
        />

        <Gap variant="line" />

        <FaqPanels items={faqItems} title="Mga kanunay pangutanon mahitungod sa mga himan" />

        <Gap size="sm" />
      </Wrapper>

      <Script id="ld-json-tools-ceb" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(schema)}
      </Script>
    </>
  );
}
