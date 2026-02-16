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
  title: 'Libreng mga kasangkapan | Larawan, SEO, kulay, favicon',
  description: '10 libreng kasangkapan: WebP converter, favicon generator, text counter, color extractor, at QR code. Para sa website, social media, at print. Walang registration.',
  alternates: getToolsIndexAlternates('tl'),
  openGraph: {
    title: 'Libreng mga kasangkapan | Larawan, SEO, kulay, favicon',
    description: '10 libreng kasangkapan: WebP converter, favicon generator, text counter, color extractor, at QR code. Para sa website, social media, at print. Walang registration.',
    url: toAbsoluteUrl('/tl/mga-kasangkapan'),
    type: 'website',
    images: [{ url: toAbsoluteUrl('/assets/arteon-logo-on-mockup.webp'), width: 1200, height: 630 }],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Libreng mga kasangkapan',
  description: '10 libreng kasangkapan: WebP converter, favicon generator, text counter, color extractor, at QR code. Para sa website, social media, at print. Walang registration.',
  url: toAbsoluteUrl('/tl/mga-kasangkapan'),
  inLanguage: 'tl',
  isPartOf: { '@type': 'WebSite', name: 'Arteon Agency', url: siteUrl },
  about: [
    { '@type': 'Thing', name: 'Pag-optimize ng larawan' },
    { '@type': 'Thing', name: 'SEO' },
    { '@type': 'Thing', name: 'Kulay at branding' },
    { '@type': 'Thing', name: 'Mga generator' },
  ],
  mainEntity: {
    '@type': 'ItemList',
    numberOfItems: 10,
    itemListElement: [
      {
        '@type': 'WebApplication',
        position: 1,
        name: 'JPG/PNG sa WebP converter',
        description: 'Libreng JPG at PNG sa WebP converter. Bawasan ang laki ng file nang hanggang 35% nang hindi nawawala ang kalidad. Walang registration — ang mga file ay nananatili sa browser.',
        url: toAbsoluteUrl('/tl/mga-kasangkapan/jpg-png-sa-webp-converter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 2,
        name: 'Editor ng larawan',
        description: 'I-crop at i-resize ang mga larawan para sa social media at website. Mga handa nang format, custom na pixel sizes, at suporta sa bilog na avatar.',
        url: toAbsoluteUrl('/tl/mga-kasangkapan/editor-ng-larawan'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 3,
        name: 'Favicon generator',
        description: 'Libreng favicon generator. Gumawa ng favicon.ico at PNG icon (16x16 hanggang 512x512) mula sa isang larawan — naaayon sa mga kinakailangan ng browser at Lighthouse.',
        url: toAbsoluteUrl('/tl/mga-kasangkapan/libreng-favicon-generator'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 4,
        name: 'Tagasuri ng meta title at description',
        description: 'Tagasuri ng haba ng meta title at description na may Google preview. Ipinapakita ang bilang ng character at pixel width para hindi maputol ang mga titulo at description.',
        url: toAbsoluteUrl('/tl/mga-kasangkapan/tagasuri-ng-meta-title-at-description'),
        applicationCategory: 'DeveloperApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 5,
        name: 'Libreng HTML email signature generator',
        description: 'Libreng HTML email signature generator. Ilagay ang contact details, CTA link, at social media profile, pagkatapos kopyahin ang handa nang HTML code sa Gmail o Outlook.',
        url: toAbsoluteUrl('/tl/mga-kasangkapan/libreng-email-signature-generator'),
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 6,
        name: 'Tagasuri ng contrast ng kulay',
        description: 'Suriin ang contrast at readability ng kulay ng teksto at background ayon sa WCAG. Kinakalkula ang contrast ratio at tumutulong sa automatic na pag-adjust ng kulay.',
        url: toAbsoluteUrl('/tl/mga-kasangkapan/tagasuri-ng-contrast-ng-kulay'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 7,
        name: 'Tagakuha ng kulay mula sa larawan',
        description: 'Libreng color extractor. Mag-upload ng litrato o logo at makakuha ng palette na hanggang 12 dominant na kulay (HEX at RGB).',
        url: toAbsoluteUrl('/tl/mga-kasangkapan/tagakuha-ng-kulay-mula-sa-larawan'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 8,
        name: 'Generator ng palette ng kulay',
        description: 'Gumawa ng color palette mula sa isang base na kulay. Monochromatic, triadic, analogous, complementary, at iba pa — kasama ang pastel, dark, at minimalist na variant.',
        url: toAbsoluteUrl('/tl/mga-kasangkapan/generator-ng-palette-ng-kulay'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 9,
        name: 'Tagabilang ng salita at character',
        description: 'Libreng word at character counter na may text length evaluation. Suriin kung angkop ang haba ng teksto para sa homepage, service page, blog post, o product description.',
        url: toAbsoluteUrl('/tl/mga-kasangkapan/tagabilang-ng-salita-at-character'),
        applicationCategory: 'DeveloperApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 10,
        name: 'Libreng QR code generator',
        description: 'Libreng QR code generator. Gumawa ng QR code para sa website, vCard, restaurant menu, o flyer. I-export sa PNG at SVG, walang login, walang limitasyon.',
        url: toAbsoluteUrl('/tl/mga-kasangkapan/libreng-qr-code-generator'),
        applicationCategory: 'UtilityApplication',
        operatingSystem: 'Any',
      },
    ],
  },
};

const faqItems = [
  { question: 'Magkano ang mga kasangkapan na ito?', answer: 'Libre. Lahat ng kasangkapan ay libre, walang subscription at walang nakatagong bayad.' },
  {
    question: 'Ipinapadala ba ang mga file ko sa server?',
    answer: 'Hindi. Lahat ng kasangkapan ay tumatakbo nang buo sa browser. Ang mga file ay hindi umaalis sa computer at hindi naka-imbak kahit saan.',
  },
  { question: 'Kailangan ko ba ng account?', answer: 'Hindi. Magagamit mo agad ang mga ito nang walang login o paggawa ng account.' },
  { question: 'May limitasyon ba sa paggamit?', answer: 'Wala. Gamitin nang walang limitasyon — walang daily limit, walang file limit, walang conversion limit.' },
  {
    question: 'Para saan ang mga kasangkapan na ito?',
    answer:
      'Tumutulong sa paghahanda ng mga materyal para sa website, social media, at print: pag-optimize ng larawan, paggawa ng favicon, pagsuri ng haba ng teksto, paggawa ng QR code, pagpili ng kulay, at pagsuri ng readability.',
  },
  {
    question: 'Gumagana ba ang mga kasangkapan sa mobile?',
    answer: 'Oo, pero ang ilang kasangkapan (WebP converter, favicon generator) ay mas maganda gamitin sa desktop dahil nagpo-process sila ng mas malalaking file.',
  },
];

export default function ToolsIndexPage() {
  return (
    <>
      <HeroBanner
        title="Libreng mga kasangkapan"
        description="Image converter, favicon generator, text counter, mga color tool, at QR code. Walang registration, walang limitasyon — lahat ay tumatakbo sa browser."
        backgroundImage="/assets/arteon-logo-on-mockup.webp"
        overlay="black"
      />

      <Wrapper>
        <Gap size="sm" />

        <SectionSteps
          title="Larawan at favicon"
          description="Mga kasangkapan para sa paghahanda ng mga litrato, graphic, at icon para sa website at social media."
          grid="three"
          items={[
            {
              icon: <RiImageEditLine className="h-8 w-8" />,
              title: 'JPG/PNG sa WebP converter',
              topImageAlt: 'JPG/PNG sa WebP converter Arteon',
              topImageSrc: '/assets/tools/narzedzia-jpg-png-na-webp-bez-limitu.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    I-convert ang JPG o PNG na larawan sa <strong>WebP</strong> format at bawasan ang laki ng file. Mas mabilis na loading para sa website.
                  </p>
                  <div className="mt-4">
                    <Button arrow link="/tl/mga-kasangkapan/jpg-png-sa-webp-converter">
                      Buksan ang kasangkapan
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiCropLine className="h-8 w-8" />,
              title: 'Editor ng larawan',
              topImageAlt: 'Editor ng larawan Arteon',
              topImageSrc: '/assets/tools/narzedzia-zmiana-rozmiaru-i-kadrowanie-zdjecia.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>I-crop ang larawan nang perpekto para sa social media o website. Pumili ng handa nang format o mag-type ng custom na pixel sizes — i-download sa PNG, JPG, o WebP.</p>
                  <div className="mt-4">
                    <Button arrow link="/tl/mga-kasangkapan/editor-ng-larawan">
                      Buksan ang kasangkapan
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiAppsLine className="h-8 w-8" />,
              title: 'Favicon at icon generator',
              topImageAlt: 'Favicon generator Arteon',
              topImageSrc: '/assets/tools/narzedzia-darmowy-generator-favicon-ico.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    Gumawa ng <strong>favicon.ico</strong> at PNG icon na 180x180, 192x192, at 512x512 mula sa isang larawan — naaayon sa mga kinakailangan ng browser at Lighthouse.
                  </p>
                  <div className="mt-4">
                    <Button arrow link="/tl/mga-kasangkapan/libreng-favicon-generator">
                      Buksan ang kasangkapan
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />

        <Gap size="sm" />

        <SectionSteps
          title="Teksto at SEO"
          description="Mga kasangkapan para sa pagsuri ng haba ng teksto, meta tag, at preview ng page sa search results."
          grid="three"
          items={[
            {
              icon: <RiFileTextLine className="h-8 w-8" />,
              title: 'Tagasuri ng meta title at description',
              topImageAlt: 'Tagasuri ng meta title at description Arteon',
              topImageSrc: '/assets/tools/narzedzia-licznik-dlugosci-meta-title-i-description.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Suriin ang bilang ng character, bilang ng salita, at pixel width — na may Google preview. Iwasan ang naputol na mga titulo at description sa search results.</p>
                  <div className="mt-4">
                    <Button arrow link="/tl/mga-kasangkapan/tagasuri-ng-meta-title-at-description">
                      Buksan ang kasangkapan
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiArticleLine className="h-8 w-8" />,
              title: 'Tagabilang ng salita at character',
              topImageAlt: 'Tagabilang ng salita at character Arteon',
              topImageSrc: '/assets/tools/narzedzia-licznik-slow-i-znakow.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    Suriin ang haba ng teksto at i-evaluate kung angkop ito sa homepage, service page, blog post, o product description. Binibilang ng kasangkapan ang mga salita, character, paragraph,
                    at oras ng pagbasa.
                  </p>
                  <div className="mt-4">
                    <Button arrow link="/tl/mga-kasangkapan/tagabilang-ng-salita-at-character">
                      Buksan ang kasangkapan
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />

        <Gap size="sm" />

        <SectionSteps
          title="Email at komunikasyon"
          description="Mga kasangkapan para sa propesyonal na email communication at consistent na brand image."
          grid="three"
          items={[
            {
              icon: <RiMailLine className="h-8 w-8" />,
              title: 'Libreng HTML email signature generator',
              topImageAlt: 'Libreng HTML email signature generator Arteon',
              topImageSrc: '/assets/tools/narzedzia-darmowy-generator-stopki-mailowej.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    Gumawa ng propesyonal na email signature sa ilang minuto. Ilagay ang mga detalye, pumili ng kulay, at kopyahin ang handa nang HTML code sa Gmail, Outlook, o ibang email client.
                  </p>
                  <div className="mt-4">
                    <Button arrow link="/tl/mga-kasangkapan/libreng-email-signature-generator">
                      Buksan ang kasangkapan
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
          description="QR code generator para sa website, business card, menu, at mga print material."
          grid="three"
          items={[
            {
              icon: <RiQrCodeLine className="h-8 w-8" />,
              title: 'Libreng QR code generator',
              topImageAlt: 'Libreng QR code generator Arteon',
              topImageSrc: '/assets/tools/narzedzia-generator-kodu-qr.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Gumawa ng QR code para sa website, vCard, restaurant menu, o flyer. I-export sa PNG at SVG — walang login, walang limitasyon.</p>
                  <div className="mt-4">
                    <Button arrow link="/tl/mga-kasangkapan/libreng-qr-code-generator">
                      Buksan ang kasangkapan
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />

        <Gap size="sm" />

        <SectionSteps
          title="Kulay at accessibility"
          description="Mga kasangkapan para sa pagtatrabaho sa kulay, contrast, at WCAG accessibility."
          grid="three"
          items={[
            {
              icon: <RiContrast2Line className="h-8 w-8" />,
              title: 'Tagasuri ng contrast ng kulay',
              topImageAlt: 'Tagasuri ng contrast ng kulay Arteon',
              topImageSrc: '/assets/tools/narzedzia-tester-kontrastu-kolorow-wcag.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    Suriin kung nababasa ang kulay ng teksto at background. Ilagay ang mga color code, tingnan ang contrast ratio ayon sa <strong>WCAG</strong>, at gamitin ang <strong>Match</strong>{' '}
                    function para sa automatic na pag-correct.
                  </p>
                  <div className="mt-4">
                    <Button arrow link="/tl/mga-kasangkapan/tagasuri-ng-contrast-ng-kulay">
                      Buksan ang kasangkapan
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiPantoneLine className="h-8 w-8" />,
              title: 'Tagakuha ng kulay mula sa larawan',
              topImageAlt: 'Tagakuha ng kulay mula sa larawan Arteon',
              topImageSrc: '/assets/tools/narzedzia-generator-palety-kolorow-z-obrazu.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Mag-upload ng litrato o logo — kukunin ng kasangkapan ang mga dominant na kulay. Kopyahin ang HEX code sa isang click at gamitin kahit saan.</p>
                  <div className="mt-4">
                    <Button arrow link="/tl/mga-kasangkapan/tagakuha-ng-kulay-mula-sa-larawan">
                      Buksan ang kasangkapan
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiPaletteLine className="h-8 w-8" />,
              title: 'Generator ng palette ng kulay',
              topImageAlt: 'Generator ng palette ng kulay Arteon',
              topImageSrc: '/assets/tools/narzedzia-generator-palet-kolorow-online.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Pumili ng isang base na kulay at gumawa ng 9 na color palette: monochromatic, complementary, triadic, pastel, dark, at iba pa. Kopyahin ang HEX code sa isang click.</p>
                  <div className="mt-4">
                    <Button arrow link="/tl/mga-kasangkapan/generator-ng-palette-ng-kulay">
                      Buksan ang kasangkapan
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />

        <Gap variant="line" />

        <SectionInfo title="Ano ang mga kasangkapan ng Arteon?">
          <p className="mb-4">
            10 libreng kasangkapan para sa paghahanda ng mga materyal para sa website, social media, at print — WebP converter, favicon generator, text counter, color extractor, palette generator, at
            QR code.
          </p>
          <p>Lahat ng kasangkapan ay tumatakbo sa browser — ang mga file ay hindi kailanman ipinapadala sa server. Gamitin nang walang registration at walang limitasyon.</p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionSteps
          title="Bakit gamitin ang mga kasangkapan ng Arteon?"
          grid="two"
          items={[
            {
              icon: <RiShieldCheckLine className="h-6 w-6" />,
              title: 'Buong privacy',
              description: 'Lahat ng kasangkapan ay nagpo-process ng mga file nang lokal sa browser. Walang ipinapadala sa server — nawawala ang data kapag isinara ang tab.',
            },
            {
              icon: <RiInfinityFill className="h-6 w-6" />,
              title: 'Walang limitasyon sa paggamit',
              description: 'Gamitin nang walang limitasyon — walang daily limit, walang file limit, walang conversion limit. Kahit gaano karami ang kailangan.',
            },
            { icon: <RiLockLine className="h-6 w-6" />, title: 'Walang registration', description: 'Hindi kailangan ng account. Buksan ang kasangkapan, gamitin, tapos na.' },
            { icon: <RiGlobalLine className="h-6 w-6" />, title: 'Available sa Filipino', description: 'Lahat ng kasangkapan ay available sa Filipino — interface, mga tagubilin, at mga mensahe.' },
          ]}
        />

        <Gap variant="line" />

        <FaqPanels items={faqItems} title="Mga madalas itanong tungkol sa mga kasangkapan" />

        <Gap size="sm" />
      </Wrapper>

      <Script id="ld-json-tools-tl" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(schema)}
      </Script>
    </>
  );
}
