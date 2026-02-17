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
  title: 'Àwọn irinṣẹ́ ọ̀fẹ́ | Àwọrán, SEO, àwọ̀, favicon',
  description: 'Irinṣẹ́ 10 ọ̀fẹ́: olùyípadà WebP, olùpìlẹ̀ṣẹ̀ favicon, olùka ọ̀rọ̀, ísẹ̀duró àwọ̀ àti kóòdù QR. Fún ojú-ìwè ayélujárá àti míià àwùjọ.',
  alternates: getToolsIndexAlternates('yo'),
  openGraph: {
    title: 'Àwọn irinṣẹ́ ọ̀fẹ́ | Àwọrán, SEO, àwọ̀, favicon',
    description: 'Irinṣẹ́ 10 ọ̀fẹ́: olùyípadà WebP, olùpìlẹ̀ṣẹ̀ favicon, olùka ọ̀rọ̀, ísẹ̀duró àwọ̀ àti kóòdù QR.',
    url: toAbsoluteUrl('/yo/awon-irinse'),
    type: 'website',
    images: [{ url: toAbsoluteUrl('/assets/arteon-logo-on-mockup.webp'), width: 1200, height: 630 }],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Àwọn irinṣẹ́ ọ̀fẹ́',
  description: 'Irinṣẹ́ 10 ọ̀fẹ́ fún ojú-ìwè ayélujárá, míià àwùjọ àti ìtẹ̀wé.',
  url: toAbsoluteUrl('/yo/awon-irinse'),
  inLanguage: 'yo',
  isPartOf: { '@type': 'WebSite', name: 'Arteon Agency', url: siteUrl },
  about: [
    { '@type': 'Thing', name: 'Ìmúdara àwọrán' },
    { '@type': 'Thing', name: 'SEO' },
    { '@type': 'Thing', name: 'Àwọ̀ àti àmì' },
    { '@type': 'Thing', name: 'Àwọn olùpìlẹ̀ṣẹ̀' },
  ],
  mainEntity: {
    '@type': 'ItemList',
    numberOfItems: 10,
    itemListElement: [
      {
        '@type': 'WebApplication',
        position: 1,
        name: 'Olùyípadà JPG/PNG sí WebP',
        url: toAbsoluteUrl('/yo/awon-irinse/oluyipada-jpg-png-si-webp'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 2,
        name: 'Olòòtú àwọrán',
        url: toAbsoluteUrl('/yo/awon-irinse/olootu-aworan'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 3,
        name: 'Olùpìlẹ̀ṣẹ̀ favicon ọ̀fẹ́',
        url: toAbsoluteUrl('/yo/awon-irinse/olupilese-favicon-ofe'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 4,
        name: 'Àtúnyẹ̀wò meta àkọ́lé àti àpẹjúwẹ',
        url: toAbsoluteUrl('/yo/awon-irinse/atunyewo-meta-akole-ati-apejuwe'),
        applicationCategory: 'DeveloperApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 5,
        name: 'Olùka ọ̀rọ̀ àti ohun kíkọ̀',
        url: toAbsoluteUrl('/yo/awon-irinse/oluka-oro-ati-ohun-kikoo'),
        applicationCategory: 'DeveloperApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 6,
        name: 'Olùpìlẹ̀ṣẹ̀ ìbuwọ́lù ímeèlì ọ̀fẹ́',
        url: toAbsoluteUrl('/yo/awon-irinse/olupilese-ibuwolu-imeeli-ofe'),
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 7,
        name: 'Àtúnyẹ̀wò ìyatọ̀ àwọn àwọ̀',
        url: toAbsoluteUrl('/yo/awon-irinse/atunyewo-iyato-awon-awoo'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 8,
        name: 'Ísẹ̀duró àwọ̀ láti àwọrán',
        url: toAbsoluteUrl('/yo/awon-irinse/iseduro-awoo-lati-aworan'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 9,
        name: 'Olùpìlẹ̀ṣẹ̀ pálẹ́ẹ̀tì àwọ̀',
        url: toAbsoluteUrl('/yo/awon-irinse/olupilese-paleti-awoo'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 10,
        name: 'Olùpìlẹ̀ṣẹ̀ kóòdù QR ọ̀fẹ́',
        url: toAbsoluteUrl('/yo/awon-irinse/olupilese-koodu-qr-ofe'),
        applicationCategory: 'UtilityApplication',
        operatingSystem: 'Any',
      },
    ],
  },
};

const faqItems = [
  {
    question: 'Èlo wo ni àwọn irinṣẹ́ náà?',
    answer: 'Kòsí kankan. Gbogbo irinṣẹ́ jẹ́ ọ̀fẹ́ pátápátá, láìláí sàn owó oṣooṣù tàbí owó ìpamọ́.',
  },
  {
    question: 'Ṣé a máa fi àwọn fáìlì mi ranṣẹ́ sí sàáfà?',
    answer: 'Rárá. Gbogbo irinṣẹ́ ṣè láàrìn fèrèsè ayélujárá. Àwọn fáìlì kò ní kúrò lórí ẹ̀rọ̀ rẹ rí, kò sí àye tí a ò fi pamọ́ wọn.',
  },
  {
    question: 'Ṣé mo nílò àkáùnùtì?',
    answer: 'Rárá. O lè lo àwọn irinṣẹ́ lẹ́sẹ̀kẹsẹ̀ láìláí wọlé tàbí forukọsilẹ̀.',
  },
  {
    question: 'Ṣé ìcwọ̀n lílò wà?',
    answer: 'Rárá. Máa lo láìláì ìcwọ̀n – láìláì ìcwọ̀n ojúmọ́, láìláì ìcwọ̀n fáìlì, láìláì ìcwọ̀n ìyipada.',
  },
  {
    question: 'Kí ni àwọn irinṣẹ́ náà ṣe?',
    answer: 'Wọn ṣàrànwọ́ láti ṣe àkójọ pò àwọn ohun alò fún ojú-ìwè ayélujárá, míià àwùjọ àti ìtẹ̀wé: ìmúdara àwọrán, ṣíṣẹ̀dá favicon, àyẹ̀wò gígùn ọ̀rọ̀, ṣíṣẹ̀dá kóòdù QR, yían àwọ̀ àti àyẹ̀wò kíkà.',
  },
  {
    question: 'Ṣé àwọn irinṣẹ́ ṣiṣẹ́ lórí fóònù?',
    answer: 'Bẹ́ẹ̀ni, ṣùģbọ́n àwọn irinṣẹ́ kan (olùyípadà WebP, olùpìlẹ̀ṣẹ̀ favicon) ṣè dáadáa jù lórí kọmpùtà, nítorí wọn ṣè pẹ̀lú àwọn fáìlì nlá.',
  },
];

export default function ToolsIndexPage() {
  return (
    <>
      <HeroBanner
        title="Àwọn irinṣẹ́ ọ̀fẹ́"
        description="Olùyípadà àwọrán, olùpìlẹ̀ṣẹ̀ favicon, olùka ọ̀rọ̀, irinṣẹ́ àwọ̀ àti kóòdù QR. Láìláì forukọsilẹ̀, láìláì ìcwọ̀n – gbogbo rẹ̀ ṣiṣẹ́ nínú fèrèsè."
        backgroundImage="/assets/arteon-logo-on-mockup.webp"
        overlay="black"
      />
      <Wrapper>
        <Gap size="sm" />
        <SectionSteps
          title="Àwọrán àti favicon"
          description="Irinṣẹ́ fún ṣíṣàkòsó àwọrán, àwọran àti àwọn àmì fún ojú-ìwè ayélujárá àti míià àwùjọ."
          grid="three"
          items={[
            {
              icon: <RiImageEditLine className="h-8 w-8" />,
              title: 'Olùyípadà JPG/PNG sí WebP',
              topImageAlt: 'Olùyípadà JPG/PNG sí WebP Arteon',
              topImageSrc: '/assets/tools/narzedzia-jpg-png-na-webp-bez-limitu.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    Yí àwọrán JPG àti PNG padà sí ònà <strong>WebP</strong> láti dín ìwọ̀n fáìlì kù. Ìgbékalẹ̀ ojú-ìwè yárá jù.
                  </p>
                  <div className="mt-4">
                    <Button arrow link="/yo/awon-irinse/oluyipada-jpg-png-si-webp">
                      Ṣí irinṣẹ́
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiCropLine className="h-8 w-8" />,
              title: 'Olòòtú àwọrán',
              topImageAlt: 'Olòòtú àwọrán Arteon',
              topImageSrc: '/assets/tools/narzedzia-zmiana-rozmiaru-i-kadrowanie-zdjecia.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Gé àwọran rẹ fún míià àwùjọ tàbí ojú-ìwè. Yan ònà tí a ti ṣètò tàbí fi ìwọ̀n àdáni sí – gba àdàkọ nínú PNG, JPG tàbí WebP.</p>
                  <div className="mt-4">
                    <Button arrow link="/yo/awon-irinse/olootu-aworan">
                      Ṣí irinṣẹ́
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiAppsLine className="h-8 w-8" />,
              title: 'Olùpìlẹ̀ṣẹ̀ favicon',
              topImageAlt: 'Olùpìlẹ̀ṣẹ̀ favicon Arteon',
              topImageSrc: '/assets/tools/narzedzia-darmowy-generator-favicon-ico.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    Ṣẹ̀dá <strong>favicon.ico</strong> àti àwọn àmì PNG 180x180, 192x192 àti 512x512 láti àwọran kan – gẹ́gẹ́ bí àwọn ìbéèrẹ̀ àwọn fèrèsè àti Lighthouse ṣe nílò.
                  </p>
                  <div className="mt-4">
                    <Button arrow link="/yo/awon-irinse/olupilese-favicon-ofe">
                      Ṣí irinṣẹ́
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />
        <Gap size="sm" />
        <SectionSteps
          title="Ọ̀rọ̀ àti SEO"
          description="Irinṣẹ́ fún àyẹ̀wò gígùn ọ̀rọ̀, àwọn àmì meta àti ìwòrán ojú-ìwè nínú àbájádé ìwádìí."
          grid="three"
          items={[
            {
              icon: <RiFileTextLine className="h-8 w-8" />,
              title: 'Àtúnyẹ̀wò meta àkọ́lé àti àpẹjúwẹ',
              topImageAlt: 'Àtúnyẹ̀wò meta àkọ́lé Arteon',
              topImageSrc: '/assets/tools/narzedzia-licznik-dlugosci-meta-title-i-description.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Ṣàyẹ̀wò ìye ohun kíkọ̀ àti ọ̀rọ̀ pẹ̀lú ìbù pixel – pẹ̀lú ìwòrán Google. Yagò fún àkọ́lé àti àpẹjúwẹ tí a gé nínú àbájádé ìwádìí.</p>
                  <div className="mt-4">
                    <Button arrow link="/yo/awon-irinse/atunyewo-meta-akole-ati-apejuwe">
                      Ṣí irinṣẹ́
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiArticleLine className="h-8 w-8" />,
              title: 'Olùka ọ̀rọ̀ àti ohun kíkọ̀',
              topImageAlt: 'Olùka ọ̀rọ̀ Arteon',
              topImageSrc: '/assets/tools/narzedzia-licznik-slow-i-znakow.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Ṣàyẹ̀wò gígùn ọ̀rọ̀ kí o sì ṣàyẹ̀wò bóyá ó bá àkóónú ojú-ìwè àkọ́kọ́, ojú-ìwè iṣẹ́, àrọ̀kọ blọ́ọ̀gù tàbí àpẹjúwẹ ọjà. Ó n ka ọ̀rọ̀, ohun kíkọ̀, àwọn ìpin àti àkókò kíkà.</p>
                  <div className="mt-4">
                    <Button arrow link="/yo/awon-irinse/oluka-oro-ati-ohun-kikoo">
                      Ṣí irinṣẹ́
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />
        <Gap size="sm" />
        <SectionSteps
          title="Ímeèlì àti ìbánisọ̀rọ̀"
          description="Irinṣẹ́ fún ìbánisọ̀rọ̀ ímeèlì alámòjútó àti ìrísí ojulowo kanṣoṣo."
          grid="three"
          items={[
            {
              icon: <RiMailLine className="h-8 w-8" />,
              title: 'Olùpìlẹ̀ṣẹ̀ ìbuwọ́lù ímeèlì',
              topImageAlt: 'Olùpìlẹ̀ṣẹ̀ ìbuwọ́lù ímeèlì Arteon',
              topImageSrc: '/assets/tools/narzedzia-darmowy-generator-stopki-mailowej.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Ṣẹ̀dá ìbuwọ́lù ímeèlì alámòjútó nínú ìsẹ́jú díẹ̀. Fi dátà rẹ sí, yan àwọ̀ kí o sì da kóòdù HTML tí o ti parí sí Gmail, Outlook tàbí àpè mirán.</p>
                  <div className="mt-4">
                    <Button arrow link="/yo/awon-irinse/olupilese-ibuwolu-imeeli-ofe">
                      Ṣí irinṣẹ́
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />
        <Gap size="sm" />
        <SectionSteps
          title="Kóòdù QR"
          description="Olùpìlẹ̀ṣẹ̀ kóòdù QR fún ojú-ìwè, káàdì iṣọ́wò, akojọ onje àti àwọn ìwé ìtẹ̀wé."
          grid="three"
          items={[
            {
              icon: <RiQrCodeLine className="h-8 w-8" />,
              title: 'Olùpìlẹ̀ṣẹ̀ kóòdù QR ọ̀fẹ́',
              topImageAlt: 'Olùpìlẹ̀ṣẹ̀ kóòdù QR Arteon',
              topImageSrc: '/assets/tools/narzedzia-generator-kodu-qr.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Ṣẹ̀dá kóòdù QR fún ojú-ìwè, vCard, akojọ onje ilé ìjeun tàbí ìwé ìpolongo. Fi jádé nínú PNG àti SVG – láìláí forukọsilẹ̀, láìláì ìcwọ̀n.</p>
                  <div className="mt-4">
                    <Button arrow link="/yo/awon-irinse/olupilese-koodu-qr-ofe">
                      Ṣí irinṣẹ́
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />
        <Gap size="sm" />
        <SectionSteps
          title="Àwọ̀ àti àànfààní"
          description="Irinṣẹ́ fún ṣíṣè pẹ̀lú àwọ̀, ìyatọ̀ àti àànfààní WCAG."
          grid="three"
          items={[
            {
              icon: <RiContrast2Line className="h-8 w-8" />,
              title: 'Àtúnyẹ̀wò ìyatọ̀ àwọn àwọ̀',
              topImageAlt: 'Àtúnyẹ̀wò ìyatọ̀ àwọ̀ Arteon',
              topImageSrc: '/assets/tools/narzedzia-tester-kontrastu-kolorow-wcag.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    Ṣàyẹ̀wò bóyá àwọ̀ ọ̀rọ̀ àti abẹ̀lẹ̀ ṣè kà dáadáa. Fi kóòdù àwọ̀ sí, ṣàyẹ̀wò ìpin ìyatọ̀ gẹ́gẹ́ bí òfin <strong>WCAG</strong> kí o sì lo iṣẹ́ <strong>Match</strong> fún àtùnṣe aïdá.í.
                  </p>
                  <div className="mt-4">
                    <Button arrow link="/yo/awon-irinse/atunyewo-iyato-awon-awoo">
                      Ṣí irinṣẹ́
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiPantoneLine className="h-8 w-8" />,
              title: 'Ísẹ̀duró àwọ̀ láti àwọrán',
              topImageAlt: 'Ísẹ̀duró àwọ̀ Arteon',
              topImageSrc: '/assets/tools/narzedzia-generator-palety-kolorow-z-obrazu.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Gbe fọ́tò tàbí àmì soke – irinṣẹ́ yóò fa àwọn àwọ̀ pàtàkì jáde. Da kóòdù HEX pẹ̀lú tí kán kí o sì lo wọn níbìkíbì.</p>
                  <div className="mt-4">
                    <Button arrow link="/yo/awon-irinse/iseduro-awoo-lati-aworan">
                      Ṣí irinṣẹ́
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiPaletteLine className="h-8 w-8" />,
              title: 'Olùpìlẹ̀ṣẹ̀ pálẹ́ẹ̀tì àwọ̀',
              topImageAlt: 'Olùpìlẹ̀ṣẹ̀ pálẹ́ẹ̀tì àwọ̀ Arteon',
              topImageSrc: '/assets/tools/narzedzia-generator-palet-kolorow-online.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Yan àwọ̀ ìpìlẹ̀ kí o sì ṣẹ̀dá pálẹ́ẹ̀tì 9: àwọ̀-kan, àwọ̀-ìkùn, mẹ́tẹ̀ẹ̀ta, àwọ̀ fẹ́ẹ̀rẹ̀, àwọ̀ ṣúkú àti bẹ́ẹ̀ mirán. Da kóòdù HEX pẹ̀lú tí kán.</p>
                  <div className="mt-4">
                    <Button arrow link="/yo/awon-irinse/olupilese-paleti-awoo">
                      Ṣí irinṣẹ́
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />
        <Gap variant="line" />
        <SectionInfo title="Kí ni àwọn irinṣẹ́ Arteon?">
          <p className="mb-4">
            Irinṣẹ́ 10 ọ̀fẹ́ fún ṣíṣàkòsó ohun alò fún ojú-ìwè ayélujárá, míià àwùjọ àti ìtẹ̀wé – olùyípadà WebP, olùpìlẹ̀ṣẹ̀ favicon, olùka ọ̀rọ̀, ísẹ̀duró àwọ̀, olùpìlẹ̀ṣẹ̀ pálẹ́ẹ̀tì àti kóòdù QR.
          </p>
          <p>Gbogbo irinṣẹ́ ṣiṣẹ́ nínú fèrèsè – àwọn fáìlì kò ní fi ranṣẹ́ sí sàáfà rí. Lo láìláì forukọsilẹ̀ àti láìláì ìcwọ̀n.</p>
        </SectionInfo>
        <Gap variant="line" />
        <SectionSteps
          title="Kílódé tí o fi yè kí o lo irinṣẹ́ Arteon?"
          grid="two"
          items={[
            {
              icon: <RiShieldCheckLine className="h-6 w-6" />,
              title: 'Àṣírí pípé',
              description: 'Gbogbo irinṣẹ́ ṣè àwọn fáìlì ní àdúgò nínú fèrèsè. Kòsí ohun tí a fi ranṣẹ́ sí sàáfà – dátà paré nígbà tí o bá pa táàbù náà.',
            },
            {
              icon: <RiInfinityFill className="h-6 w-6" />,
              title: 'Láìláì ìcwọ̀n lílò',
              description: 'Lo láìláì ìcwọ̀n – láìláì ìcwọ̀n ojúmọ́, láìláì ìcwọ̀n fáìlì, láìláì ìcwọ̀n ìyipada. Ìgbà tí o bá nílò.',
            },
            {
              icon: <RiLockLine className="h-6 w-6" />,
              title: 'Láìláì forukọsilẹ̀',
              description: 'Àkáùnùtì kò nílò. Ṣí irinṣẹ́, lo, o ti parí.',
            },
            {
              icon: <RiGlobalLine className="h-6 w-6" />,
              title: 'Wà ní èdè Yorùbá',
              description: 'Gbogbo irinṣẹ́ wà ní èdè Yorùbá – ojú, ìlànà àti àwọn ìkìlọ̀.',
            },
          ]}
        />
        <Gap variant="line" />
        <FaqPanels items={faqItems} title="Àwọn ìbéèrè tí a máa n béèrè nípa irinṣẹ́ wa" />
        <Gap size="sm" />
      </Wrapper>
      <Script id="ld-json-tools-yo" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(schema)}
      </Script>
    </>
  );
}
