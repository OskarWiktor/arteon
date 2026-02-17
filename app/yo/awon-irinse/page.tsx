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
  title: '\u00c0w\u1ecdn irinṣ\u1eb9\u0301 \u1ecd\u0300f\u1eb9\u0301 | \u00c0w\u1ecdr\u00e1n, SEO, \u00e0w\u1ecd\u0300, favicon',
  description:
    'Irinṣ\u1eb9\u0301 10 \u1ecd\u0300f\u1eb9\u0301: ol\u00f9y\u00edpad\u00e0 WebP, ol\u00f9p\u00ecl\u1eb9\u0300ṣ\u1eb9\u0300 favicon, ol\u00f9ka \u1ecd\u0300r\u1ecd\u0300, \u00eds\u1eb9\u0300dur\u00f3 \u00e0w\u1ecd\u0300 \u00e0ti k\u00f3\u00f2d\u00f9 QR. F\u00fan oj\u00fa-\u00ecw\u00e8 ay\u00e9luj\u00e1r\u00e1 \u00e0ti m\u00edi\u00e0 \u00e0w\u00f9j\u1ecd.',
  alternates: getToolsIndexAlternates('yo'),
  openGraph: {
    title: '\u00c0w\u1ecdn irinṣ\u1eb9\u0301 \u1ecd\u0300f\u1eb9\u0301 | \u00c0w\u1ecdr\u00e1n, SEO, \u00e0w\u1ecd\u0300, favicon',
    description:
      'Irinṣ\u1eb9\u0301 10 \u1ecd\u0300f\u1eb9\u0301: ol\u00f9y\u00edpad\u00e0 WebP, ol\u00f9p\u00ecl\u1eb9\u0300ṣ\u1eb9\u0300 favicon, ol\u00f9ka \u1ecd\u0300r\u1ecd\u0300, \u00eds\u1eb9\u0300dur\u00f3 \u00e0w\u1ecd\u0300 \u00e0ti k\u00f3\u00f2d\u00f9 QR.',
    url: toAbsoluteUrl('/yo/awon-irinse'),
    type: 'website',
    images: [{ url: toAbsoluteUrl('/assets/arteon-logo-on-mockup.webp'), width: 1200, height: 630 }],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: '\u00c0w\u1ecdn irinṣ\u1eb9\u0301 \u1ecd\u0300f\u1eb9\u0301',
  description: 'Irinṣ\u1eb9\u0301 10 \u1ecd\u0300f\u1eb9\u0301 f\u00fan oj\u00fa-\u00ecw\u00e8 ay\u00e9luj\u00e1r\u00e1, m\u00edi\u00e0 \u00e0w\u00f9j\u1ecd \u00e0ti \u00ect\u1eb9\u0300w\u00e9.',
  url: toAbsoluteUrl('/yo/awon-irinse'),
  inLanguage: 'yo',
  isPartOf: { '@type': 'WebSite', name: 'Arteon Agency', url: siteUrl },
  about: [
    { '@type': 'Thing', name: '\u00ccm\u00fadara \u00e0w\u1ecdr\u00e1n' },
    { '@type': 'Thing', name: 'SEO' },
    { '@type': 'Thing', name: '\u00c0w\u1ecd\u0300 \u00e0ti \u00e0m\u00ec' },
    { '@type': 'Thing', name: '\u00c0w\u1ecdn ol\u00f9p\u00ecl\u1eb9\u0300ṣ\u1eb9\u0300' },
  ],
  mainEntity: {
    '@type': 'ItemList',
    numberOfItems: 10,
    itemListElement: [
      {
        '@type': 'WebApplication',
        position: 1,
        name: 'Ol\u00f9y\u00edpad\u00e0 JPG/PNG s\u00ed WebP',
        url: toAbsoluteUrl('/yo/awon-irinse/oluyipada-jpg-png-si-webp'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 2,
        name: 'Ol\u00f2\u00f2t\u00fa \u00e0w\u1ecdr\u00e1n',
        url: toAbsoluteUrl('/yo/awon-irinse/olootu-aworan'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 3,
        name: 'Ol\u00f9p\u00ecl\u1eb9\u0300ṣ\u1eb9\u0300 favicon \u1ecd\u0300f\u1eb9\u0301',
        url: toAbsoluteUrl('/yo/awon-irinse/olupilese-favicon-ofe'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 4,
        name: '\u00c0t\u00fany\u1eb9\u0300w\u00f2 meta \u00e0k\u1ecd\u0301l\u00e9 \u00e0ti \u00e0p\u1eb9j\u00faw\u1eb9',
        url: toAbsoluteUrl('/yo/awon-irinse/atunyewo-meta-akole-ati-apejuwe'),
        applicationCategory: 'DeveloperApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 5,
        name: 'Ol\u00f9ka \u1ecd\u0300r\u1ecd\u0300 \u00e0ti ohun k\u00edkọ\u0300',
        url: toAbsoluteUrl('/yo/awon-irinse/oluka-oro-ati-ohun-kikoo'),
        applicationCategory: 'DeveloperApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 6,
        name: 'Ol\u00f9p\u00ecl\u1eb9\u0300ṣ\u1eb9\u0300 \u00ecbuw\u1ecd\u0301l\u00f9 \u00edme\u00e8l\u00ec \u1ecd\u0300f\u1eb9\u0301',
        url: toAbsoluteUrl('/yo/awon-irinse/olupilese-ibuwolu-imeeli-ofe'),
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 7,
        name: '\u00c0t\u00fany\u1eb9\u0300w\u00f2 \u00ecyat\u1ecd\u0300 \u00e0w\u1ecdn \u00e0w\u1ecd\u0300',
        url: toAbsoluteUrl('/yo/awon-irinse/atunyewo-iyato-awon-awoo'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 8,
        name: '\u00cds\u1eb9\u0300dur\u00f3 \u00e0w\u1ecd\u0300 l\u00e1ti \u00e0w\u1ecdr\u00e1n',
        url: toAbsoluteUrl('/yo/awon-irinse/iseduro-awoo-lati-aworan'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 9,
        name: 'Ol\u00f9p\u00ecl\u1eb9\u0300ṣ\u1eb9\u0300 p\u00e1l\u1eb9\u0301\u1eb9\u0300t\u00ec \u00e0w\u1ecd\u0300',
        url: toAbsoluteUrl('/yo/awon-irinse/olupilese-paleti-awoo'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 10,
        name: 'Ol\u00f9p\u00ecl\u1eb9\u0300ṣ\u1eb9\u0300 k\u00f3\u00f2d\u00f9 QR \u1ecd\u0300f\u1eb9\u0301',
        url: toAbsoluteUrl('/yo/awon-irinse/olupilese-koodu-qr-ofe'),
        applicationCategory: 'UtilityApplication',
        operatingSystem: 'Any',
      },
    ],
  },
};

const faqItems = [
  {
    question: '\u00c8lo wo ni \u00e0w\u1ecdn irinṣ\u1eb9\u0301 n\u00e1\u00e0?',
    answer:
      'K\u00f2s\u00ed kankan. Gbogbo irinṣ\u1eb9\u0301 j\u1eb9\u0301 \u1ecd\u0300f\u1eb9\u0301 p\u00e1t\u00e1p\u00e1t\u00e1, l\u00e1\u00ecl\u00e1\u00ed s\u00e0n ow\u00f3 oṣooṣ\u00f9 t\u00e0b\u00ed ow\u00f3 \u00ecpam\u1ecd\u0301.',
  },
  {
    question: 'Ṣ\u00e9 a m\u00e1a fi \u00e0w\u1ecdn f\u00e1\u00ecl\u00ec mi ranṣ\u1eb9\u0301 s\u00ed s\u00e0\u00e1f\u00e0?',
    answer:
      'R\u00e1r\u00e1. Gbogbo irinṣ\u1eb9\u0301 \u1e63\u00e8 l\u00e1\u00e0r\u00ecn f\u00e8r\u00e8s\u00e8 ay\u00e9luj\u00e1r\u00e1. \u00c0w\u1ecdn f\u00e1\u00ecl\u00ec k\u00f2 n\u00ed k\u00far\u00f2 l\u00f3r\u00ed \u1eb9\u0300r\u1ecd\u0300 rẹ r\u00ed, k\u00f2 s\u00ed \u00e0ye t\u00ed a \u00f2 fi pam\u1ecd\u0301 w\u1ecdn.',
  },
  {
    question: 'Ṣ\u00e9 mo n\u00edl\u00f2 \u00e0k\u00e1\u00f9n\u00f9t\u00ec?',
    answer:
      'R\u00e1r\u00e1. O l\u00e8 lo \u00e0w\u1ecdn irinṣ\u1eb9\u0301 l\u1eb9\u0301s\u1eb9\u0300kẹs\u1eb9\u0300 l\u00e1\u00ecl\u00e1\u00ed w\u1ecdl\u00e9 t\u00e0b\u00ed foruk\u1ecdsil\u1eb9\u0300.',
  },
  {
    question: 'Ṣ\u00e9 \u00eccw\u1ecd\u0300n l\u00edl\u00f2 w\u00e0?',
    answer:
      'R\u00e1r\u00e1. M\u00e1a lo l\u00e1\u00ecl\u00e1\u00ec \u00eccw\u1ecd\u0300n \u2013 l\u00e1\u00ecl\u00e1\u00ec \u00eccw\u1ecd\u0300n oj\u00fam\u1ecd\u0301, l\u00e1\u00ecl\u00e1\u00ec \u00eccw\u1ecd\u0300n f\u00e1\u00ecl\u00ec, l\u00e1\u00ecl\u00e1\u00ec \u00eccw\u1ecd\u0300n \u00ecyipada.',
  },
  {
    question: 'K\u00ed ni \u00e0w\u1ecdn irinṣ\u1eb9\u0301 n\u00e1\u00e0 ṣe?',
    answer:
      'W\u1ecdn \u1e63\u00e0r\u00e0nw\u1ecd\u0301 l\u00e1ti ṣe \u00e0k\u00f3j\u1ecd p\u00f2 \u00e0w\u1ecdn ohun al\u00f2 f\u00fan oj\u00fa-\u00ecw\u00e8 ay\u00e9luj\u00e1r\u00e1, m\u00edi\u00e0 \u00e0w\u00f9j\u1ecd \u00e0ti \u00ect\u1eb9\u0300w\u00e9: \u00ecm\u00fadara \u00e0w\u1ecdr\u00e1n, \u1e63\u00edṣ\u1eb9\u0300d\u00e1 favicon, \u00e0y\u1eb9\u0300w\u00f2 g\u00edg\u00f9n \u1ecd\u0300r\u1ecd\u0300, \u1e63\u00edṣ\u1eb9\u0300d\u00e1 k\u00f3\u00f2d\u00f9 QR, y\u00edan \u00e0w\u1ecd\u0300 \u00e0ti \u00e0y\u1eb9\u0300w\u00f2 k\u00edk\u00e0.',
  },
  {
    question: 'Ṣ\u00e9 \u00e0w\u1ecdn irinṣ\u1eb9\u0301 ṣiṣ\u1eb9\u0301 l\u00f3r\u00ed f\u00f3\u00f2n\u00f9?',
    answer:
      'B\u1eb9\u0301\u1eb9\u0300ni, ṣ\u00f9g\u0327b\u1ecd\u0301n \u00e0w\u1ecdn irinṣ\u1eb9\u0301 kan (ol\u00f9y\u00edpad\u00e0 WebP, ol\u00f9p\u00ecl\u1eb9\u0300ṣ\u1eb9\u0300 favicon) \u1e63\u00e8 d\u00e1ad\u00e1a j\u00f9 l\u00f3r\u00ed k\u1ecdmp\u00f9t\u00e0, n\u00edtor\u00ed w\u1ecdn \u1e63\u00e8 p\u1eb9\u0300l\u00fa \u00e0w\u1ecdn f\u00e1\u00ecl\u00ec nl\u00e1.',
  },
];

export default function ToolsIndexPage() {
  return (
    <>
      <HeroBanner
        title="\u00c0w\u1ecdn irinṣ\u1eb9\u0301 \u1ecd\u0300f\u1eb9\u0301"
        description="Ol\u00f9y\u00edpad\u00e0 \u00e0w\u1ecdr\u00e1n, ol\u00f9p\u00ecl\u1eb9\u0300ṣ\u1eb9\u0300 favicon, ol\u00f9ka \u1ecd\u0300r\u1ecd\u0300, irinṣ\u1eb9\u0301 \u00e0w\u1ecd\u0300 \u00e0ti k\u00f3\u00f2d\u00f9 QR. L\u00e1\u00ecl\u00e1\u00ec foruk\u1ecdsil\u1eb9\u0300, l\u00e1\u00ecl\u00e1\u00ec \u00eccw\u1ecd\u0300n \u2013 gbogbo r\u1eb9\u0300 ṣiṣ\u1eb9\u0301 n\u00ednú f\u00e8r\u00e8s\u00e8."
        backgroundImage="/assets/arteon-logo-on-mockup.webp"
        overlay="black"
      />
      <Wrapper>
        <Gap size="sm" />
        <SectionSteps
          title="\u00c0w\u1ecdr\u00e1n \u00e0ti favicon"
          description="Irinṣ\u1eb9\u0301 f\u00fan \u1e63\u00ed\u1e63\u00e0k\u00f2s\u00f3 \u00e0w\u1ecdr\u00e1n, \u00e0w\u1ecdran \u00e0ti \u00e0w\u1ecdn \u00e0m\u00ec f\u00fan oj\u00fa-\u00ecw\u00e8 ay\u00e9luj\u00e1r\u00e1 \u00e0ti m\u00edi\u00e0 \u00e0w\u00f9j\u1ecd."
          grid="three"
          items={[
            {
              icon: <RiImageEditLine className="h-8 w-8" />,
              title: 'Ol\u00f9y\u00edpad\u00e0 JPG/PNG s\u00ed WebP',
              topImageAlt: 'Ol\u00f9y\u00edpad\u00e0 JPG/PNG s\u00ed WebP Arteon',
              topImageSrc: '/assets/tools/narzedzia-jpg-png-na-webp-bez-limitu.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    Y\u00ed \u00e0w\u1ecdr\u00e1n JPG \u00e0ti PNG pad\u00e0 s\u00ed \u00f2n\u00e0 <strong>WebP</strong> l\u00e1ti d\u00edn \u00ecw\u1ecd\u0300n f\u00e1\u00ecl\u00ec k\u00f9.
                    \u00ccgb\u00e9kal\u1eb9\u0300 oj\u00fa-\u00ecw\u00e8 y\u00e1r\u00e1 j\u00f9.
                  </p>
                  <div className="mt-4">
                    <Button arrow link="/yo/awon-irinse/oluyipada-jpg-png-si-webp">
                      Ṣ\u00ed irinṣ\u1eb9\u0301
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiCropLine className="h-8 w-8" />,
              title: 'Ol\u00f2\u00f2t\u00fa \u00e0w\u1ecdr\u00e1n',
              topImageAlt: 'Ol\u00f2\u00f2t\u00fa \u00e0w\u1ecdr\u00e1n Arteon',
              topImageSrc: '/assets/tools/narzedzia-zmiana-rozmiaru-i-kadrowanie-zdjecia.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    G\u00e9 \u00e0w\u1ecdran r\u1eb9 f\u00fan m\u00edi\u00e0 \u00e0w\u00f9j\u1ecd t\u00e0b\u00ed oj\u00fa-\u00ecw\u00e8. Yan \u00f2n\u00e0 t\u00ed a ti ṣ\u00e8t\u00f2 t\u00e0b\u00ed fi
                    \u00ecw\u1ecd\u0300n \u00e0d\u00e1ni s\u00ed \u2013 gba \u00e0d\u00e0k\u1ecd n\u00ednú PNG, JPG t\u00e0b\u00ed WebP.
                  </p>
                  <div className="mt-4">
                    <Button arrow link="/yo/awon-irinse/olootu-aworan">
                      Ṣ\u00ed irinṣ\u1eb9\u0301
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiAppsLine className="h-8 w-8" />,
              title: 'Ol\u00f9p\u00ecl\u1eb9\u0300ṣ\u1eb9\u0300 favicon',
              topImageAlt: 'Ol\u00f9p\u00ecl\u1eb9\u0300ṣ\u1eb9\u0300 favicon Arteon',
              topImageSrc: '/assets/tools/narzedzia-darmowy-generator-favicon-ico.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    Ṣ\u1eb9\u0300d\u00e1 <strong>favicon.ico</strong> \u00e0ti \u00e0w\u1ecdn \u00e0m\u00ec PNG 180x180, 192x192 \u00e0ti 512x512 l\u00e1ti \u00e0w\u1ecdran kan \u2013
                    g\u1eb9\u0301g\u1eb9\u0301 b\u00ed \u00e0w\u1ecdn \u00ecb\u00e9\u00e8r\u1eb9\u0300 \u00e0w\u1ecdn f\u00e8r\u00e8s\u00e8 \u00e0ti Lighthouse ṣe n\u00edl\u00f2.
                  </p>
                  <div className="mt-4">
                    <Button arrow link="/yo/awon-irinse/olupilese-favicon-ofe">
                      Ṣ\u00ed irinṣ\u1eb9\u0301
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />
        <Gap size="sm" />
        <SectionSteps
          title="\u1ecc\u0300r\u1ecd\u0300 \u00e0ti SEO"
          description="Irinṣ\u1eb9\u0301 f\u00fan \u00e0y\u1eb9\u0300w\u00f2 g\u00edg\u00f9n \u1ecd\u0300r\u1ecd\u0300, \u00e0w\u1ecdn \u00e0m\u00ec meta \u00e0ti \u00ecw\u00f2r\u00e1n oj\u00fa-\u00ecw\u00e8 n\u00ednú \u00e0b\u00e1j\u00e1d\u00e9 \u00ecw\u00e1d\u00ec\u00ed."
          grid="three"
          items={[
            {
              icon: <RiFileTextLine className="h-8 w-8" />,
              title: '\u00c0t\u00fany\u1eb9\u0300w\u00f2 meta \u00e0k\u1ecd\u0301l\u00e9 \u00e0ti \u00e0p\u1eb9j\u00faw\u1eb9',
              topImageAlt: '\u00c0t\u00fany\u1eb9\u0300w\u00f2 meta \u00e0k\u1ecd\u0301l\u00e9 Arteon',
              topImageSrc: '/assets/tools/narzedzia-licznik-dlugosci-meta-title-i-description.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    Ṣ\u00e0y\u1eb9\u0300w\u00f2 \u00ecye ohun k\u00edkọ\u0300 \u00e0ti \u1ecd\u0300r\u1ecd\u0300 p\u1eb9\u0300l\u00fa \u00ecb\u00f9 pixel \u2013 p\u1eb9\u0300l\u00fa
                    \u00ecw\u00f2r\u00e1n Google. Yag\u00f2 f\u00fan \u00e0k\u1ecd\u0301l\u00e9 \u00e0ti \u00e0p\u1eb9j\u00faw\u1eb9 t\u00ed a g\u00e9 n\u00ednú \u00e0b\u00e1j\u00e1d\u00e9
                    \u00ecw\u00e1d\u00ec\u00ed.
                  </p>
                  <div className="mt-4">
                    <Button arrow link="/yo/awon-irinse/atunyewo-meta-akole-ati-apejuwe">
                      Ṣ\u00ed irinṣ\u1eb9\u0301
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiArticleLine className="h-8 w-8" />,
              title: 'Ol\u00f9ka \u1ecd\u0300r\u1ecd\u0300 \u00e0ti ohun k\u00edkọ\u0300',
              topImageAlt: 'Ol\u00f9ka \u1ecd\u0300r\u1ecd\u0300 Arteon',
              topImageSrc: '/assets/tools/narzedzia-licznik-slow-i-znakow.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    Ṣ\u00e0y\u1eb9\u0300w\u00f2 g\u00edg\u00f9n \u1ecd\u0300r\u1ecd\u0300 k\u00ed o s\u00ec \u1e63\u00e0y\u1eb9\u0300w\u00f2 b\u00f3y\u00e1 \u00f3 b\u00e1 \u00e0k\u00f3\u00f3n\u00fa
                    oj\u00fa-\u00ecw\u00e8 \u00e0k\u1ecd\u0301k\u1ecd\u0301, oj\u00fa-\u00ecw\u00e8 iṣ\u1eb9\u0301, \u00e0r\u1ecd\u0300k\u1ecd bl\u1ecd\u0301\u1ecd\u0300g\u00f9 t\u00e0b\u00ed
                    \u00e0p\u1eb9j\u00faw\u1eb9 \u1ecdj\u00e0. \u00d3 n ka \u1ecd\u0300r\u1ecd\u0300, ohun k\u00edkọ\u0300, \u00e0w\u1ecdn \u00ecpin \u00e0ti \u00e0k\u00f3k\u00f2 k\u00edk\u00e0.
                  </p>
                  <div className="mt-4">
                    <Button arrow link="/yo/awon-irinse/oluka-oro-ati-ohun-kikoo">
                      Ṣ\u00ed irinṣ\u1eb9\u0301
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />
        <Gap size="sm" />
        <SectionSteps
          title="\u00cdme\u00e8l\u00ec \u00e0ti \u00ecb\u00e1nis\u1ecd\u0300r\u1ecd\u0300"
          description="Irinṣ\u1eb9\u0301 f\u00fan \u00ecb\u00e1nis\u1ecd\u0300r\u1ecd\u0300 \u00edme\u00e8l\u00ec al\u00e1m\u00f2j\u00fat\u00f3 \u00e0ti \u00ecr\u00eds\u00ed ojulowo kan\u1e63oṣo."
          grid="three"
          items={[
            {
              icon: <RiMailLine className="h-8 w-8" />,
              title: 'Ol\u00f9p\u00ecl\u1eb9\u0300ṣ\u1eb9\u0300 \u00ecbuw\u1ecd\u0301l\u00f9 \u00edme\u00e8l\u00ec',
              topImageAlt: 'Ol\u00f9p\u00ecl\u1eb9\u0300ṣ\u1eb9\u0300 \u00ecbuw\u1ecd\u0301l\u00f9 \u00edme\u00e8l\u00ec Arteon',
              topImageSrc: '/assets/tools/narzedzia-darmowy-generator-stopki-mailowej.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    Ṣ\u1eb9\u0300d\u00e1 \u00ecbuw\u1ecd\u0301l\u00f9 \u00edme\u00e8l\u00ec al\u00e1m\u00f2j\u00fat\u00f3 n\u00ednú \u00ecs\u1eb9\u0301j\u00fa d\u00ed\u1eb9\u0300. Fi d\u00e1t\u00e0
                    r\u1eb9 s\u00ed, yan \u00e0w\u1ecd\u0300 k\u00ed o s\u00ec da k\u00f3\u00f2d\u00f9 HTML t\u00ed o ti par\u00ed s\u00ed Gmail, Outlook t\u00e0b\u00ed \u00e0p\u00e8 mir\u00e1n.
                  </p>
                  <div className="mt-4">
                    <Button arrow link="/yo/awon-irinse/olupilese-ibuwolu-imeeli-ofe">
                      Ṣ\u00ed irinṣ\u1eb9\u0301
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />
        <Gap size="sm" />
        <SectionSteps
          title="K\u00f3\u00f2d\u00f9 QR"
          description="Ol\u00f9p\u00ecl\u1eb9\u0300ṣ\u1eb9\u0300 k\u00f3\u00f2d\u00f9 QR f\u00fan oj\u00fa-\u00ecw\u00e8, k\u00e1\u00e0d\u00ec iṣ\u1ecd\u0301w\u00f2, akojọ onje \u00e0ti \u00e0w\u1ecdn \u00ecw\u00e9 \u00ect\u1eb9\u0300w\u00e9."
          grid="three"
          items={[
            {
              icon: <RiQrCodeLine className="h-8 w-8" />,
              title: 'Ol\u00f9p\u00ecl\u1eb9\u0300ṣ\u1eb9\u0300 k\u00f3\u00f2d\u00f9 QR \u1ecd\u0300f\u1eb9\u0301',
              topImageAlt: 'Ol\u00f9p\u00ecl\u1eb9\u0300ṣ\u1eb9\u0300 k\u00f3\u00f2d\u00f9 QR Arteon',
              topImageSrc: '/assets/tools/narzedzia-generator-kodu-qr.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    Ṣ\u1eb9\u0300d\u00e1 k\u00f3\u00f2d\u00f9 QR f\u00fan oj\u00fa-\u00ecw\u00e8, vCard, akojọ onje il\u00e9 \u00ecjeun t\u00e0b\u00ed \u00ecw\u00e9 \u00ecpolongo. Fi j\u00e1d\u00e9
                    n\u00ednú PNG \u00e0ti SVG \u2013 l\u00e1\u00ecl\u00e1\u00ed foruk\u1ecdsil\u1eb9\u0300, l\u00e1\u00ecl\u00e1\u00ec \u00eccw\u1ecd\u0300n.
                  </p>
                  <div className="mt-4">
                    <Button arrow link="/yo/awon-irinse/olupilese-koodu-qr-ofe">
                      Ṣ\u00ed irinṣ\u1eb9\u0301
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />
        <Gap size="sm" />
        <SectionSteps
          title="\u00c0w\u1ecd\u0300 \u00e0ti \u00e0\u00e0nf\u00e0\u00e0n\u00ed"
          description="Irinṣ\u1eb9\u0301 f\u00fan \u1e63\u00ed\u1e63\u00e8 p\u1eb9\u0300l\u00fa \u00e0w\u1ecd\u0300, \u00ecyat\u1ecd\u0300 \u00e0ti \u00e0\u00e0nf\u00e0\u00e0n\u00ed WCAG."
          grid="three"
          items={[
            {
              icon: <RiContrast2Line className="h-8 w-8" />,
              title: '\u00c0t\u00fany\u1eb9\u0300w\u00f2 \u00ecyat\u1ecd\u0300 \u00e0w\u1ecdn \u00e0w\u1ecd\u0300',
              topImageAlt: '\u00c0t\u00fany\u1eb9\u0300w\u00f2 \u00ecyat\u1ecd\u0300 \u00e0w\u1ecd\u0300 Arteon',
              topImageSrc: '/assets/tools/narzedzia-tester-kontrastu-kolorow-wcag.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    Ṣ\u00e0y\u1eb9\u0300w\u00f2 b\u00f3y\u00e1 \u00e0w\u1ecd\u0300 \u1ecd\u0300r\u1ecd\u0300 \u00e0ti ab\u1eb9\u0300l\u1eb9\u0300 \u1e63\u00e8 k\u00e0 d\u00e1ad\u00e1a. Fi
                    k\u00f3\u00f2d\u00f9 \u00e0w\u1ecd\u0300 s\u00ed, ṣ\u00e0y\u1eb9\u0300w\u00f2 \u00ecpin \u00ecyat\u1ecd\u0300 g\u1eb9\u0301g\u1eb9\u0301 b\u00ed \u00f2fin <strong>WCAG</strong>{' '}
                    k\u00ed o s\u00ec lo iṣ\u1eb9\u0301 <strong>Match</strong> f\u00fan \u00e0t\u00f9nṣe a\u00efd\u00e1.\u00ed.
                  </p>
                  <div className="mt-4">
                    <Button arrow link="/yo/awon-irinse/atunyewo-iyato-awon-awoo">
                      Ṣ\u00ed irinṣ\u1eb9\u0301
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiPantoneLine className="h-8 w-8" />,
              title: '\u00cds\u1eb9\u0300dur\u00f3 \u00e0w\u1ecd\u0300 l\u00e1ti \u00e0w\u1ecdr\u00e1n',
              topImageAlt: '\u00cds\u1eb9\u0300dur\u00f3 \u00e0w\u1ecd\u0300 Arteon',
              topImageSrc: '/assets/tools/narzedzia-generator-palety-kolorow-z-obrazu.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    Gbe f\u1ecd\u0301t\u00f2 t\u00e0b\u00ed \u00e0m\u00ec soke \u2013 irinṣ\u1eb9\u0301 y\u00f3\u00f2 fa \u00e0w\u1ecdn \u00e0w\u1ecd\u0300 p\u00e0t\u00e0k\u00ec j\u00e1de. Da
                    k\u00f3\u00f2d\u00f9 HEX p\u1eb9\u0300l\u00fa t\u00ed k\u00e1n k\u00ed o s\u00ec lo w\u1ecdn n\u00edb\u00eck\u00edb\u00ec.
                  </p>
                  <div className="mt-4">
                    <Button arrow link="/yo/awon-irinse/iseduro-awoo-lati-aworan">
                      Ṣ\u00ed irinṣ\u1eb9\u0301
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiPaletteLine className="h-8 w-8" />,
              title: 'Ol\u00f9p\u00ecl\u1eb9\u0300ṣ\u1eb9\u0300 p\u00e1l\u1eb9\u0301\u1eb9\u0300t\u00ec \u00e0w\u1ecd\u0300',
              topImageAlt: 'Ol\u00f9p\u00ecl\u1eb9\u0300ṣ\u1eb9\u0300 p\u00e1l\u1eb9\u0301\u1eb9\u0300t\u00ec \u00e0w\u1ecd\u0300 Arteon',
              topImageSrc: '/assets/tools/narzedzia-generator-palet-kolorow-online.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    Yan \u00e0w\u1ecd\u0300 \u00ecp\u00ecl\u1eb9\u0300 k\u00ed o s\u00ec ṣ\u1eb9\u0300d\u00e1 p\u00e1l\u1eb9\u0301\u1eb9\u0300t\u00ec 9: \u00e0w\u1ecd\u0300-kan,
                    \u00e0w\u1ecd\u0300-\u00eck\u00f9n, m\u1eb9\u0301t\u1eb9\u0300\u1eb9\u0300ta, \u00e0w\u1ecd\u0300 f\u1eb9\u0301\u1eb9\u0300r\u1eb9\u0300, \u00e0w\u1ecd\u0300 ṣ\u00fak\u00fa
                    \u00e0ti b\u1eb9\u0301\u1eb9\u0300 mir\u00e1n. Da k\u00f3\u00f2d\u00f9 HEX p\u1eb9\u0300l\u00fa t\u00ed k\u00e1n.
                  </p>
                  <div className="mt-4">
                    <Button arrow link="/yo/awon-irinse/olupilese-paleti-awoo">
                      Ṣ\u00ed irinṣ\u1eb9\u0301
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />
        <Gap variant="line" />
        <SectionInfo title="K\u00ed ni \u00e0w\u1ecdn irinṣ\u1eb9\u0301 Arteon?">
          <p className="mb-4">
            Irinṣ\u1eb9\u0301 10 \u1ecd\u0300f\u1eb9\u0301 f\u00fan \u1e63\u00ed\u1e63\u00e0k\u00f2s\u00f3 ohun al\u00f2 f\u00fan oj\u00fa-\u00ecw\u00e8 ay\u00e9luj\u00e1r\u00e1, m\u00edi\u00e0
            \u00e0w\u00f9j\u1ecd \u00e0ti \u00ect\u1eb9\u0300w\u00e9 \u2013 ol\u00f9y\u00edpad\u00e0 WebP, ol\u00f9p\u00ecl\u1eb9\u0300ṣ\u1eb9\u0300 favicon, ol\u00f9ka \u1ecd\u0300r\u1ecd\u0300,
            \u00eds\u1eb9\u0300dur\u00f3 \u00e0w\u1ecd\u0300, ol\u00f9p\u00ecl\u1eb9\u0300ṣ\u1eb9\u0300 p\u00e1l\u1eb9\u0301\u1eb9\u0300t\u00ec \u00e0ti k\u00f3\u00f2d\u00f9 QR.
          </p>
          <p>
            Gbogbo irinṣ\u1eb9\u0301 ṣiṣ\u1eb9\u0301 n\u00ednú f\u00e8r\u00e8s\u00e8 \u2013 \u00e0w\u1ecdn f\u00e1\u00ecl\u00ec k\u00f2 n\u00ed fi ranṣ\u1eb9\u0301 s\u00ed s\u00e0\u00e1f\u00e0
            r\u00ed. Lo l\u00e1\u00ecl\u00e1\u00ec foruk\u1ecdsil\u1eb9\u0300 \u00e0ti l\u00e1\u00ecl\u00e1\u00ec \u00eccw\u1ecd\u0300n.
          </p>
        </SectionInfo>
        <Gap variant="line" />
        <SectionSteps
          title="K\u00edl\u00f3d\u00e9 t\u00ed o fi y\u00e8 k\u00ed o lo irinṣ\u1eb9\u0301 Arteon?"
          grid="two"
          items={[
            {
              icon: <RiShieldCheckLine className="h-6 w-6" />,
              title: '\u00c0ṣ\u00edr\u00ed p\u00edp\u00e9',
              description:
                'Gbogbo irinṣ\u1eb9\u0301 \u1e63\u00e8 \u00e0w\u1ecdn f\u00e1\u00ecl\u00ec n\u00ed \u00e0d\u00fag\u00f2 n\u00ednú f\u00e8r\u00e8s\u00e8. K\u00f2s\u00ed ohun t\u00ed a fi ranṣ\u1eb9\u0301 s\u00ed s\u00e0\u00e1f\u00e0 \u2013 d\u00e1t\u00e0 par\u00e9 n\u00edgb\u00e0 t\u00ed o b\u00e1 pa t\u00e1\u00e0b\u00f9 n\u00e1\u00e0.',
            },
            {
              icon: <RiInfinityFill className="h-6 w-6" />,
              title: 'L\u00e1\u00ecl\u00e1\u00ec \u00eccw\u1ecd\u0300n l\u00edl\u00f2',
              description:
                'Lo l\u00e1\u00ecl\u00e1\u00ec \u00eccw\u1ecd\u0300n \u2013 l\u00e1\u00ecl\u00e1\u00ec \u00eccw\u1ecd\u0300n oj\u00fam\u1ecd\u0301, l\u00e1\u00ecl\u00e1\u00ec \u00eccw\u1ecd\u0300n f\u00e1\u00ecl\u00ec, l\u00e1\u00ecl\u00e1\u00ec \u00eccw\u1ecd\u0300n \u00ecyipada. \u00ccgb\u00e0 t\u00ed o b\u00e1 n\u00edl\u00f2.',
            },
            {
              icon: <RiLockLine className="h-6 w-6" />,
              title: 'L\u00e1\u00ecl\u00e1\u00ec foruk\u1ecdsil\u1eb9\u0300',
              description: '\u00c0k\u00e1\u00f9n\u00f9t\u00ec k\u00f2 n\u00edl\u00f2. Ṣ\u00ed irinṣ\u1eb9\u0301, lo, o ti par\u00ed.',
            },
            {
              icon: <RiGlobalLine className="h-6 w-6" />,
              title: 'W\u00e0 n\u00ed \u00e8d\u00e8 Yor\u00f9b\u00e1',
              description: 'Gbogbo irinṣ\u1eb9\u0301 w\u00e0 n\u00ed \u00e8d\u00e8 Yor\u00f9b\u00e1 \u2013 oj\u00fa, \u00ecl\u00e0n\u00e0 \u00e0ti \u00e0w\u1ecdn \u00eck\u00ecl\u1ecd\u0300.',
            },
          ]}
        />
        <Gap variant="line" />
        <FaqPanels items={faqItems} title="\u00c0w\u1ecdn \u00ecb\u00e9\u00e8r\u00e8 t\u00ed a m\u00e1a n b\u00e9\u00e8r\u00e8 n\u00edpa irinṣ\u1eb9\u0301 wa" />
        <Gap size="sm" />
      </Wrapper>
      <Script id="ld-json-tools-yo" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(schema)}
      </Script>
    </>
  );
}
