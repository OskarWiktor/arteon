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
  title: 'Kayan aiki na kyauta | Hotuna, SEO, launuka, favicon',
  description: 'Kayan aiki 10 na kyauta: mai canza WebP, mai samar da favicon, mai ƙidaya kalmomi, fitar launuka da lambobin QR. Don shafukan yanar gizo da kafofin watsa labarai.',
  alternates: getToolsIndexAlternates('ha'),
  openGraph: {
    title: 'Kayan aiki na kyauta | Hotuna, SEO, launuka, favicon',
    description: 'Kayan aiki 10 na kyauta: mai canza WebP, mai samar da favicon, mai ƙidaya kalmomi, fitar launuka da lambobin QR. Don shafukan yanar gizo da kafofin watsa labarai.',
    url: toAbsoluteUrl('/ha/kayan-aiki'),
    type: 'website',
    images: [{ url: toAbsoluteUrl('/assets/arteon-logo-on-mockup.webp'), width: 1200, height: 630 }],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Kayan aiki na kyauta',
  description: 'Kayan aiki 10 na kyauta don shafukan yanar gizo, kafofin watsa labarai da bugu.',
  url: toAbsoluteUrl('/ha/kayan-aiki'),
  inLanguage: 'ha',
  isPartOf: { '@type': 'WebSite', name: 'Arteon Agency', url: siteUrl },
  about: [
    { '@type': 'Thing', name: 'Inganta hotuna' },
    { '@type': 'Thing', name: 'SEO' },
    { '@type': 'Thing', name: 'Launuka da alama' },
    { '@type': 'Thing', name: 'Masu samarwa' },
  ],
  mainEntity: {
    '@type': 'ItemList',
    numberOfItems: 10,
    itemListElement: [
      {
        '@type': 'WebApplication',
        position: 1,
        name: 'Mai canza JPG/PNG zuwa WebP',
        url: toAbsoluteUrl('/ha/kayan-aiki/mai-canza-jpg-png-zuwa-webp'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      { '@type': 'WebApplication', position: 2, name: 'Editan hoto', url: toAbsoluteUrl('/ha/kayan-aiki/editan-hoto'), applicationCategory: 'MultimediaApplication', operatingSystem: 'Any' },
      {
        '@type': 'WebApplication',
        position: 3,
        name: 'Samar da favicon kyauta',
        url: toAbsoluteUrl('/ha/kayan-aiki/samar-da-favicon-kyauta'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 4,
        name: 'Tantance meta take da bayani',
        url: toAbsoluteUrl('/ha/kayan-aiki/tantance-meta-take-da-bayani'),
        applicationCategory: 'DeveloperApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 5,
        name: 'Ƙidaya kalmomi da haruffa',
        url: toAbsoluteUrl('/ha/kayan-aiki/kidaya-kalmomi-da-haruffa'),
        applicationCategory: 'DeveloperApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 6,
        name: 'Samar da sa hannun imel kyauta',
        url: toAbsoluteUrl('/ha/kayan-aiki/samar-da-sa-hannu-imel-kyauta'),
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 7,
        name: 'Tantance bambancin launuka',
        url: toAbsoluteUrl('/ha/kayan-aiki/tantance-bambancin-launuka'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 8,
        name: 'Fitar launuka daga hoto',
        url: toAbsoluteUrl('/ha/kayan-aiki/fitar-launuka-daga-hoto'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 9,
        name: 'Samar da fayafayan launuka',
        url: toAbsoluteUrl('/ha/kayan-aiki/samar-da-fayafayan-launuka'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 10,
        name: 'Samar da lambar QR kyauta',
        url: toAbsoluteUrl('/ha/kayan-aiki/samar-da-lambar-qr-kyauta'),
        applicationCategory: 'UtilityApplication',
        operatingSystem: 'Any',
      },
    ],
  },
};

const faqItems = [
  { question: 'Nawa ne kayan aikin ke kashewa?', answer: 'Komai. Duk kayan aikin kyauta ne gaba ɗaya, ba tare da biyan kudin wata-wata ko ƙaruwar kudi ba.' },
  {
    question: 'Ana aika fayilolina zuwa sabar?',
    answer: 'A’a. Duk kayan aikin suna aiki kai tsaye a cikin mai bincike. Fayiloli ba sa taɓa na’urar ku kuma ba a adana su ko’ina.',
  },
  { question: 'Ina bukatar asusu?', answer: 'A’a. Kuna iya amfani da kayan aikin nan da nan ba tare da shiga ko rajista ba.' },
  { question: 'Akwai iyakar amfani?', answer: 'A’a. Yi amfani ba tare da iyaka ba – babu iyakar yau da kullun, babu iyakar fayiloli, babu iyakar canjawa.' },
  {
    question: 'Don me ake amfani da kayan aikin?',
    answer:
      'Suna taimakawa wajen shirya kayan aiki don shafukan yanar gizo, kafofin watsa labarai da bugu: inganta hotuna, samar da favicon, tantance tsawon rubutu, samar da lambobin QR, zaɓen launuka da tantance saukin karantawa.',
  },
  { question: 'Kayan aikin suna aiki a wayar hannu?', answer: 'Eh, amma wasu kayan aiki (mai canza WebP, mai samar da favicon) sun fi aiki da kyau a kwamfuta, domin suna sarrafa manyan fayiloli.' },
];

export default function ToolsIndexPage() {
  return (
    <>
      <HeroBanner
        title="Kayan aiki na kyauta"
        description="Mai canza hotuna, mai samar da favicon, mai ƙidaya kalmomi, kayan aikin launuka da lambobin QR. Ba tare da rajista ba, ba tare da iyaka ba – duka suna aiki a cikin mai bincike."
        backgroundImage="/assets/arteon-logo-on-mockup.webp"
        overlay="black"
      />
      <Wrapper>
        <Gap size="sm" />
        <SectionSteps
          title="Hotuna da favicon"
          description="Kayan aiki don shirya hotuna, zane-zane da guntuwar hotuna don shafukan yanar gizo da kafofin watsa labarai."
          grid="three"
          items={[
            {
              icon: <RiImageEditLine className="h-8 w-8" />,
              title: 'Mai canza JPG/PNG zuwa WebP',
              topImageAlt: 'Mai canza JPG/PNG zuwa WebP Arteon',
              topImageSrc: '/assets/tools/narzedzia-jpg-png-na-webp-bez-limitu.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    Canza hotuna JPG da PNG zuwa tsarin <strong>WebP</strong> don rage girman fayiloli. Saurin loda shafuka.
                  </p>
                  <div className="mt-4">
                    <Button arrow link="/ha/kayan-aiki/mai-canza-jpg-png-zuwa-webp">
                      Buɗe kayan aiki
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiCropLine className="h-8 w-8" />,
              title: 'Editan hoto',
              topImageAlt: 'Editan hoto Arteon',
              topImageSrc: '/assets/tools/narzedzia-zmiana-rozmiaru-i-kadrowanie-zdjecia.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Yanke hoton ku don kafofin watsa labarai ko shafin yanar gizo. Zaɓi tsarin da aka riga aka saita ko shigar da ma’aunin ku – zazzage a cikin PNG, JPG ko WebP.</p>
                  <div className="mt-4">
                    <Button arrow link="/ha/kayan-aiki/editan-hoto">
                      Buɗe kayan aiki
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiAppsLine className="h-8 w-8" />,
              title: 'Samar da favicon kyauta',
              topImageAlt: 'Samar da favicon Arteon',
              topImageSrc: '/assets/tools/narzedzia-darmowy-generator-favicon-ico.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    Samar da <strong>favicon.ico</strong> da guntuwar PNG 180x180, 192x192 da 512x512 daga hoto guda – bisa ka’idojin masu bincike da Lighthouse.
                  </p>
                  <div className="mt-4">
                    <Button arrow link="/ha/kayan-aiki/samar-da-favicon-kyauta">
                      Buɗe kayan aiki
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />
        <Gap size="sm" />
        <SectionSteps
          title="Rubutu da SEO"
          description="Kayan aiki don tantance tsawon rubutu, alamomin meta da ganin yadda shafi zai bayyana a sakamakon bincike."
          grid="three"
          items={[
            {
              icon: <RiFileTextLine className="h-8 w-8" />,
              title: 'Tantance meta take da bayani',
              topImageAlt: 'Tantance meta take da bayani Arteon',
              topImageSrc: '/assets/tools/narzedzia-licznik-dlugosci-meta-title-i-description.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Duba adadin haruffa da kalmomi tare da faɗin pixel – da ganin Google. Guji yanke take da bayanai a sakamakon bincike.</p>
                  <div className="mt-4">
                    <Button arrow link="/ha/kayan-aiki/tantance-meta-take-da-bayani">
                      Buɗe kayan aiki
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiArticleLine className="h-8 w-8" />,
              title: 'Ƙidaya kalmomi da haruffa',
              topImageAlt: 'Ƙidaya kalmomi da haruffa Arteon',
              topImageSrc: '/assets/tools/narzedzia-licznik-slow-i-znakow.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Duba tsawon rubutu kuma tantance ko ya dace da babban shafi, shafin ayyuka, labarin blog ko bayanin kaya. Yana ƙidaya kalmomi, haruffa, sakin layi da lokacin karatu.</p>
                  <div className="mt-4">
                    <Button arrow link="/ha/kayan-aiki/kidaya-kalmomi-da-haruffa">
                      Buɗe kayan aiki
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />
        <Gap size="sm" />
        <SectionSteps
          title="Imel da sadarwa"
          description="Kayan aiki don sadarwar imel na ƙwararru da kama-karya na gani guda."
          grid="three"
          items={[
            {
              icon: <RiMailLine className="h-8 w-8" />,
              title: 'Samar da sa hannun imel kyauta',
              topImageAlt: 'Samar da sa hannun imel Arteon',
              topImageSrc: '/assets/tools/narzedzia-darmowy-generator-stopki-mailowej.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Samar da sa hannun imel na ƙwararru a cikin ƙananan mintuna. Shigar da bayananku, zaɓi launuka kuma kwafi lambar HTML da aka gama zuwa Gmail, Outlook ko wata manhaja.</p>
                  <div className="mt-4">
                    <Button arrow link="/ha/kayan-aiki/samar-da-sa-hannu-imel-kyauta">
                      Buɗe kayan aiki
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />
        <Gap size="sm" />
        <SectionSteps
          title="Lambobin QR"
          description="Mai samar da lambobin QR don shafukan yanar gizo, katunan kasuwanci, jerin abinci da takardun bugu."
          grid="three"
          items={[
            {
              icon: <RiQrCodeLine className="h-8 w-8" />,
              title: 'Samar da lambar QR kyauta',
              topImageAlt: 'Samar da lambar QR Arteon',
              topImageSrc: '/assets/tools/narzedzia-generator-kodu-qr.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Samar da lambar QR don shafin yanar gizo, vCard, jerin abincin gidan abinci ko handbil. Fitar a cikin PNG da SVG – ba tare da rajista ba, ba tare da iyaka ba.</p>
                  <div className="mt-4">
                    <Button arrow link="/ha/kayan-aiki/samar-da-lambar-qr-kyauta">
                      Buɗe kayan aiki
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />
        <Gap size="sm" />
        <SectionSteps
          title="Launuka da samuɗauki"
          description="Kayan aiki don aiki da launuka, bambanci da samuɗaukin WCAG."
          grid="three"
          items={[
            {
              icon: <RiContrast2Line className="h-8 w-8" />,
              title: 'Tantance bambancin launuka',
              topImageAlt: 'Tantance bambancin launuka Arteon',
              topImageSrc: '/assets/tools/narzedzia-tester-kontrastu-kolorow-wcag.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    Duba ko launukan rubutu da bango suna da saukin karantawa. Shigar da lambobin launi, duba rabon bambanci bisa ka’idar <strong>WCAG</strong> kuma yi amfani da aikin{' '}
                    <strong>Match</strong> don gyara ta atomatik.
                  </p>
                  <div className="mt-4">
                    <Button arrow link="/ha/kayan-aiki/tantance-bambancin-launuka">
                      Buɗe kayan aiki
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiPantoneLine className="h-8 w-8" />,
              title: 'Fitar launuka daga hoto',
              topImageAlt: 'Fitar launuka daga hoto Arteon',
              topImageSrc: '/assets/tools/narzedzia-generator-palety-kolorow-z-obrazu.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Ɓulla hoto ko alama – kayan aikin zai fitar da manyan launuka. Kwafi lambobin HEX da danna guda ɗaya kuma yi amfani da su ko’ina.</p>
                  <div className="mt-4">
                    <Button arrow link="/ha/kayan-aiki/fitar-launuka-daga-hoto">
                      Buɗe kayan aiki
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiPaletteLine className="h-8 w-8" />,
              title: 'Samar da fayafayan launuka',
              topImageAlt: 'Samar da fayafayan launuka Arteon',
              topImageSrc: '/assets/tools/narzedzia-generator-palet-kolorow-online.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Zaɓi launin tushe kuma samar da fayafai 9: na launi guda, na cike juna, na uku, mai haske, mai duhu da sauransu. Kwafi lambobin HEX da danna guda ɗaya.</p>
                  <div className="mt-4">
                    <Button arrow link="/ha/kayan-aiki/samar-da-fayafayan-launuka">
                      Buɗe kayan aiki
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />
        <Gap variant="line" />
        <SectionInfo title="Menene kayan aikin Arteon?">
          <p className="mb-4">
            Kayan aiki 10 na kyauta don shirya kayan aiki don shafukan yanar gizo, kafofin watsa labarai da bugu – mai canza WebP, mai samar da favicon, mai ƙidaya kalmomi, fitar launuka, mai samar da
            fayafai da lambobin QR.
          </p>
          <p>Duk kayan aikin suna aiki a cikin mai bincike – ba a taɓa fayiloli zuwa sabar ba. Yi amfani ba tare da rajista ba kuma ba tare da iyaka ba.</p>
        </SectionInfo>
        <Gap variant="line" />
        <SectionSteps
          title="Me ya sa za ku yi amfani da kayan aikin Arteon?"
          grid="two"
          items={[
            {
              icon: <RiShieldCheckLine className="h-6 w-6" />,
              title: 'Cikakken sirri',
              description: 'Duk kayan aikin suna sarrafa fayiloli a wurin a cikin mai bincike. Ba a aika komai zuwa sabar ba – bayanai sun ɓace lokacin da kuka rufe shafin.',
            },
            {
              icon: <RiInfinityFill className="h-6 w-6" />,
              title: 'Babu iyakar amfani',
              description: 'Yi amfani ba tare da iyaka ba – babu iyakar yau da kullun, babu iyakar fayiloli, babu iyakar canjawa. Sau nawa kuke bukata.',
            },
            { icon: <RiLockLine className="h-6 w-6" />, title: 'Babu rajista', description: 'Ba a bukatar asusu ba. Buɗe kayan aiki, yi amfani, an gama.' },
            { icon: <RiGlobalLine className="h-6 w-6" />, title: 'Ana samun sa a Hausa', description: 'Duk kayan aikin suna samuwa a Hausa – fuska, umarni da sanarwa.' },
          ]}
        />
        <Gap variant="line" />
        <FaqPanels items={faqItems} title="Tambayoyin da ake yawan yi game da kayan aikinmu" />
        <Gap size="sm" />
      </Wrapper>
      <Script id="ld-json-tools-ha" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(schema)}
      </Script>
    </>
  );
}
