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
  title: 'Zana za bure | Picha, SEO, rangi, favicon',
  description: 'Zana 10 za bure: kibadilishaji WebP, kitengenezaji favicon, kihesabuji maandishi, kitoa rangi, na msimbo QR. Kwa tovuti na mitandao ya kijamii.',
  alternates: getToolsIndexAlternates('sw'),
  openGraph: {
    title: 'Zana za bure | Picha, SEO, rangi, favicon',
    description: 'Zana 10 za bure: kibadilishaji WebP, kitengenezaji favicon, kihesabuji maandishi, kitoa rangi, na msimbo QR. Kwa tovuti na mitandao ya kijamii.',
    url: toAbsoluteUrl('/sw/zana'),
    type: 'website',
    images: [{ url: toAbsoluteUrl('/assets/arteon-logo-on-mockup.webp'), width: 1200, height: 630 }],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Zana za bure',
  description: 'Zana 10 za bure: kibadilishaji WebP, kitengenezaji favicon, kihesabuji maandishi, kitoa rangi, na msimbo QR. Kwa tovuti na mitandao ya kijamii.',
  url: toAbsoluteUrl('/sw/zana'),
  inLanguage: 'sw',
  isPartOf: { '@type': 'WebSite', name: 'Arteon Agency', url: siteUrl },
  about: [
    { '@type': 'Thing', name: 'Uboreshaji wa picha' },
    { '@type': 'Thing', name: 'SEO' },
    { '@type': 'Thing', name: 'Rangi na chapa' },
    { '@type': 'Thing', name: 'Vitengenezaji' },
  ],
  mainEntity: {
    '@type': 'ItemList',
    numberOfItems: 10,
    itemListElement: [
      {
        '@type': 'WebApplication',
        position: 1,
        name: 'Kibadilishaji JPG/PNG hadi WebP',
        description: 'Kibadilishaji bure JPG na PNG hadi WebP. Punguza ukubwa wa faili hadi 35% bila kupoteza ubora. Bila usajili — faili zinabaki kwenye kivinjari chako.',
        url: toAbsoluteUrl('/sw/zana/kibadilishaji-jpg-png-hadi-webp'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 2,
        name: 'Kihariri cha picha',
        description: 'Kata na ubadilishe ukubwa wa picha kwa mitandao ya kijamii na tovuti. Muundo uliokuwa tayari, vipimo maalum vya pikseli, na msaada wa avatar ya duara.',
        url: toAbsoluteUrl('/sw/zana/kihariri-cha-picha'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 3,
        name: 'Kitengenezaji favicon',
        description: 'Kitengenezaji favicon bure. Tengeneza favicon.ico na ikoni za PNG (16x16 hadi 512x512) kutoka picha moja — kulingana na mahitaji ya kivinjari na Lighthouse.',
        url: toAbsoluteUrl('/sw/zana/kitengenezaji-favicon-bure'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 4,
        name: 'Kikaguzi cha meta kichwa na maelezo',
        description: 'Kikaguzi cha urefu wa meta kichwa na maelezo na muhtasari wa Google. Inaonyesha idadi ya herufi na upana wa pikseli ili vichwa na maelezo visikatwe.',
        url: toAbsoluteUrl('/sw/zana/kikaguzi-cha-meta-kichwa-na-maelezo'),
        applicationCategory: 'DeveloperApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 5,
        name: 'Kitengenezaji saini barua pepe bure',
        description:
          'Kitengenezaji bure wa saini ya barua pepe ya HTML. Weka maelezo ya mawasiliano, kiungo cha CTA, na wasifu wa mitandao ya kijamii, kisha nakili msimbo wa HTML uliokuwa tayari kwenye Gmail au Outlook.',
        url: toAbsoluteUrl('/sw/zana/kitengenezaji-saini-barua-pepe-bure'),
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 6,
        name: 'Kikaguzi cha utofautishaji rangi',
        description:
          'Angalia utofautishaji na usomekaji wa rangi za maandishi na mandharinyuma kulingana na WCAG. Huhesabu uwiano wa utofautishaji na husaidia na marekebisho ya kiotomatiki ya rangi.',
        url: toAbsoluteUrl('/sw/zana/kikaguzi-cha-utofautishaji-rangi'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 7,
        name: 'Kitoa rangi kutoka picha',
        description: 'Kitoa rangi bure. Pakia picha au nembo na upate paleti hadi rangi 12 kuu (HEX na RGB).',
        url: toAbsoluteUrl('/sw/zana/kitoa-rangi-kutoka-picha'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 8,
        name: 'Kitengenezaji paleti za rangi',
        description: 'Tengeneza paleti za rangi kutoka rangi moja ya msingi. Rangi moja, tatu, zinazofanana, nyongeza, na zaidi — pamoja na toleo la pastel, giza, na minimalist.',
        url: toAbsoluteUrl('/sw/zana/kitengenezaji-paleti-za-rangi'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 9,
        name: 'Kihesabuji maneno na herufi',
        description:
          'Kihesabuji bure wa maneno na herufi na tathmini ya urefu wa maandishi. Angalia kama urefu wa maandishi unafaa kwa ukurasa wa nyumbani, huduma, chapisho la blogu, au maelezo ya bidhaa.',
        url: toAbsoluteUrl('/sw/zana/kihesabuji-maneno-na-herufi'),
        applicationCategory: 'DeveloperApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 10,
        name: 'Kitengenezaji msimbo QR bure',
        description: 'Kitengenezaji bure wa msimbo QR. Tengeneza msimbo QR kwa tovuti, vCard, menyu ya mkahawa, au kipeperushi. Hamisha kama PNG na SVG, bila kuingia, bila kikomo.',
        url: toAbsoluteUrl('/sw/zana/kitengenezaji-msimbo-qr-bure'),
        applicationCategory: 'UtilityApplication',
        operatingSystem: 'Any',
      },
    ],
  },
};

const faqItems = [
  { question: 'Zana hizi zinagharimu kiasi gani?', answer: 'Bure. Zana zote ni za bure, bila usajili na bila malipo yaliyofichwa.' },
  { question: 'Je, faili zangu zinatumwa kwenye seva?', answer: 'Hapana. Zana zote zinafanya kazi kabisa kwenye kivinjari chako. Faili haziondoki kwenye kompyuta yako na hazihifadhiwi popote.' },
  { question: 'Je, ninahitaji akaunti?', answer: 'Hapana. Unaweza kuzitumia moja kwa moja bila kuingia au kuunda akaunti.' },
  { question: 'Je, kuna kikomo cha matumizi?', answer: 'Hapana. Tumia bila kikomo — hakuna kikomo cha kila siku, hakuna kikomo cha faili, hakuna kikomo cha ubadilishaji.' },
  {
    question: 'Zana hizi ni za nini?',
    answer:
      'Husaidia kuandaa nyenzo kwa tovuti, mitandao ya kijamii, na uchapishaji: kuboresha picha, kuunda favicon, kuangalia urefu wa maandishi, kuunda misimbo QR, kuchagua rangi, na kuangalia usomekaji wake.',
  },
  {
    question: 'Je, zana zinafanya kazi kwenye simu?',
    answer: 'Ndiyo, lakini zana zingine (kibadilishaji WebP, kitengenezaji favicon) zinafanya kazi vizuri zaidi kwenye kompyuta ya mezani kwa sababu zinashughulikia faili kubwa zaidi.',
  },
];

export default function ToolsIndexPage() {
  return (
    <>
      <HeroBanner
        title="Zana za bure"
        description="Kibadilishaji picha, kitengenezaji favicon, kihesabuji maandishi, zana za rangi, na msimbo QR. Bila usajili, bila kikomo — zote zinafanya kazi kwenye kivinjari chako."
        backgroundImage="/assets/arteon-logo-on-mockup.webp"
        overlay="black"
      />

      <Wrapper>
        <Gap size="sm" />

        <SectionSteps
          title="Picha na favicon"
          description="Zana za kuandaa picha, michoro, na ikoni kwa tovuti na mitandao ya kijamii."
          grid="three"
          items={[
            {
              icon: <RiImageEditLine className="h-8 w-8" />,
              title: 'Kibadilishaji JPG/PNG hadi WebP',
              topImageAlt: 'Kibadilishaji JPG/PNG hadi WebP Arteon',
              topImageSrc: '/assets/tools/narzedzia-jpg-png-na-webp-bez-limitu.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    Badilisha picha za JPG au PNG kuwa muundo wa <strong>WebP</strong> na upunguze ukubwa wa faili. Upakiaji wa haraka zaidi kwa tovuti yako.
                  </p>
                  <div className="mt-4">
                    <Button arrow link="/sw/zana/kibadilishaji-jpg-png-hadi-webp">
                      Fungua zana
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiCropLine className="h-8 w-8" />,
              title: 'Kihariri cha picha',
              topImageAlt: 'Kihariri cha picha Arteon',
              topImageSrc: '/assets/tools/narzedzia-zmiana-rozmiaru-i-kadrowanie-zdjecia.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Kata picha kwa ukamilifu kwa mitandao ya kijamii au tovuti yako. Chagua muundo uliokuwa tayari au weka vipimo maalum vya pikseli — pakua kwa PNG, JPG, au WebP.</p>
                  <div className="mt-4">
                    <Button arrow link="/sw/zana/kihariri-cha-picha">
                      Fungua zana
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiAppsLine className="h-8 w-8" />,
              title: 'Kitengenezaji favicon na ikoni',
              topImageAlt: 'Kitengenezaji favicon Arteon',
              topImageSrc: '/assets/tools/narzedzia-darmowy-generator-favicon-ico.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    Tengeneza <strong>favicon.ico</strong> na ikoni za PNG 180x180, 192x192, na 512x512 kutoka picha moja — kulingana na mahitaji ya kivinjari na Lighthouse.
                  </p>
                  <div className="mt-4">
                    <Button arrow link="/sw/zana/kitengenezaji-favicon-bure">
                      Fungua zana
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />

        <Gap size="sm" />

        <SectionSteps
          title="Maandishi na SEO"
          description="Zana za kuangalia urefu wa maandishi, meta tag, na muhtasari wa ukurasa kwenye matokeo ya utafutaji."
          grid="three"
          items={[
            {
              icon: <RiFileTextLine className="h-8 w-8" />,
              title: 'Kikaguzi cha meta kichwa na maelezo',
              topImageAlt: 'Kikaguzi cha meta kichwa na maelezo Arteon',
              topImageSrc: '/assets/tools/narzedzia-licznik-dlugosci-meta-title-i-description.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Angalia idadi ya herufi, idadi ya maneno, na upana wa pikseli — na muhtasari wa Google. Epuka vichwa na maelezo yaliyokatwa kwenye matokeo ya utafutaji.</p>
                  <div className="mt-4">
                    <Button arrow link="/sw/zana/kikaguzi-cha-meta-kichwa-na-maelezo">
                      Fungua zana
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiArticleLine className="h-8 w-8" />,
              title: 'Kihesabuji maneno na herufi',
              topImageAlt: 'Kihesabuji maneno na herufi Arteon',
              topImageSrc: '/assets/tools/narzedzia-licznik-slow-i-znakow.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    Angalia urefu wa maandishi na utathmini kama yanafaa kwa ukurasa wa nyumbani, huduma, chapisho la blogu, au maelezo ya bidhaa. Zana huhesabu maneno, herufi, aya, na muda wa kusoma.
                  </p>
                  <div className="mt-4">
                    <Button arrow link="/sw/zana/kihesabuji-maneno-na-herufi">
                      Fungua zana
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />

        <Gap size="sm" />

        <SectionSteps
          title="Barua pepe na mawasiliano"
          description="Zana za mawasiliano ya kitaalamu ya barua pepe na taswira thabiti ya chapa."
          grid="three"
          items={[
            {
              icon: <RiMailLine className="h-8 w-8" />,
              title: 'Kitengenezaji saini barua pepe bure',
              topImageAlt: 'Kitengenezaji saini barua pepe bure Arteon',
              topImageSrc: '/assets/tools/narzedzia-darmowy-generator-stopki-mailowej.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    Tengeneza saini ya barua pepe ya kitaalamu kwa dakika chache. Weka maelezo yako, chagua rangi, na nakili msimbo wa HTML uliokuwa tayari kwenye Gmail, Outlook, au mteja mwingine wa
                    barua pepe.
                  </p>
                  <div className="mt-4">
                    <Button arrow link="/sw/zana/kitengenezaji-saini-barua-pepe-bure">
                      Fungua zana
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />

        <Gap size="sm" />

        <SectionSteps
          title="Msimbo QR"
          description="Kitengenezaji msimbo QR kwa tovuti, kadi za biashara, menyu, na nyenzo za uchapishaji."
          grid="three"
          items={[
            {
              icon: <RiQrCodeLine className="h-8 w-8" />,
              title: 'Kitengenezaji msimbo QR bure',
              topImageAlt: 'Kitengenezaji msimbo QR bure Arteon',
              topImageSrc: '/assets/tools/narzedzia-generator-kodu-qr.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Tengeneza msimbo QR kwa tovuti, vCard, menyu ya mkahawa, au kipeperushi. Hamisha kama PNG na SVG — bila kuingia, bila kikomo.</p>
                  <div className="mt-4">
                    <Button arrow link="/sw/zana/kitengenezaji-msimbo-qr-bure">
                      Fungua zana
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />

        <Gap size="sm" />

        <SectionSteps
          title="Rangi na ufikivu"
          description="Zana za kufanya kazi na rangi, utofautishaji, na ufikivu wa WCAG."
          grid="three"
          items={[
            {
              icon: <RiContrast2Line className="h-8 w-8" />,
              title: 'Kikaguzi cha utofautishaji rangi',
              topImageAlt: 'Kikaguzi cha utofautishaji rangi Arteon',
              topImageSrc: '/assets/tools/narzedzia-tester-kontrastu-kolorow-wcag.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    Angalia kama rangi za maandishi na mandharinyuma zinasomeka. Weka misimbo ya rangi, angalia uwiano wa utofautishaji kulingana na <strong>WCAG</strong>, na tumia kazi ya{' '}
                    <strong>Match</strong> kwa marekebisho ya kiotomatiki.
                  </p>
                  <div className="mt-4">
                    <Button arrow link="/sw/zana/kikaguzi-cha-utofautishaji-rangi">
                      Fungua zana
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiPantoneLine className="h-8 w-8" />,
              title: 'Kitoa rangi kutoka picha',
              topImageAlt: 'Kitoa rangi kutoka picha Arteon',
              topImageSrc: '/assets/tools/narzedzia-generator-palety-kolorow-z-obrazu.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Pakia picha au nembo — zana itatoa rangi kuu. Nakili misimbo ya HEX kwa kubofya moja na uitumie popote.</p>
                  <div className="mt-4">
                    <Button arrow link="/sw/zana/kitoa-rangi-kutoka-picha">
                      Fungua zana
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiPaletteLine className="h-8 w-8" />,
              title: 'Kitengenezaji paleti za rangi',
              topImageAlt: 'Kitengenezaji paleti za rangi Arteon',
              topImageSrc: '/assets/tools/narzedzia-generator-palet-kolorow-online.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Chagua rangi moja ya msingi na utengeneze paleti 9 za rangi: rangi moja, nyongeza, tatu, pastel, giza, na zaidi. Nakili misimbo ya HEX kwa kubofya moja.</p>
                  <div className="mt-4">
                    <Button arrow link="/sw/zana/kitengenezaji-paleti-za-rangi">
                      Fungua zana
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />

        <Gap variant="line" />

        <SectionInfo title="Zana za Arteon ni nini?">
          <p className="mb-4">
            Zana 10 za bure za kuandaa nyenzo kwa tovuti, mitandao ya kijamii, na uchapishaji — kibadilishaji WebP, kitengenezaji favicon, kihesabuji maandishi, kitoa rangi, kitengenezaji paleti, na
            msimbo QR.
          </p>
          <p>Zana zote zinafanya kazi kwenye kivinjari chako — faili hazitatumwa kwenye seva kamwe. Tumia bila usajili na bila kikomo.</p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionSteps
          title="Kwa nini utumie zana za Arteon?"
          grid="two"
          items={[
            {
              icon: <RiShieldCheckLine className="h-6 w-6" />,
              title: 'Faragha kamili',
              description: 'Zana zote zinashughulikia faili ndani ya kivinjari chako. Hakuna kinachotumwa kwenye seva — data inapotea unapofunga kichupo.',
            },
            {
              icon: <RiInfinityFill className="h-6 w-6" />,
              title: 'Bila kikomo cha matumizi',
              description: 'Tumia bila kikomo — hakuna kikomo cha kila siku, hakuna kikomo cha faili, hakuna kikomo cha ubadilishaji. Kadri unavyohitaji.',
            },
            { icon: <RiLockLine className="h-6 w-6" />, title: 'Bila usajili', description: 'Huhitaji akaunti. Fungua zana, itumie, umalize.' },
            { icon: <RiGlobalLine className="h-6 w-6" />, title: 'Inapatikana kwa Kiswahili', description: 'Zana zote zinapatikana kwa Kiswahili — kiolesura, maagizo, na ujumbe.' },
          ]}
        />

        <Gap variant="line" />

        <FaqPanels items={faqItems} title="Maswali yanayoulizwa mara kwa mara kuhusu zana zetu" />

        <Gap size="sm" />
      </Wrapper>

      <Script id="ld-json-tools-sw" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(schema)}
      </Script>
    </>
  );
}
