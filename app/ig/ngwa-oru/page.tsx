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
  title: "Ngwa ọrụ n'efu | Onyonyo, SEO, agba, favicon",
  description: "Ngwa ọrụ 10 n'efu: ngbanwe WebP, njikọta favicon, ọgụgụ okwu, ngwa ọrụ agba na koodu QR. Maka weebụsaịtị na mgbasa ozi mmekọrịta.",
  alternates: getToolsIndexAlternates('ig'),
  openGraph: {
    title: "Ngwa ọrụ n'efu | Onyonyo, SEO, agba, favicon",
    description: "Ngwa ọrụ 10 n'efu: ngbanwe WebP, njikọta favicon, ọgụgụ okwu, ngwa ọrụ agba na koodu QR.",
    url: toAbsoluteUrl('/ig/ngwa-oru'),
    type: 'website',
    images: [{ url: toAbsoluteUrl('/assets/arteon-logo-on-mockup.webp'), width: 1200, height: 630 }],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: "Ngwa ọrụ n'efu",
  description: "Ngwa ọrụ 10 n'efu maka weebụsaịtị, mgbasa ozi mmekọrịta na ibipụta.",
  url: toAbsoluteUrl('/ig/ngwa-oru'),
  inLanguage: 'ig',
  isPartOf: { '@type': 'WebSite', name: 'Arteon Agency', url: siteUrl },
  about: [
    { '@type': 'Thing', name: 'Imezi onyonyo' },
    { '@type': 'Thing', name: 'SEO' },
    { '@type': 'Thing', name: 'Agba na akara' },
    { '@type': 'Thing', name: 'Ndị njikọta' },
  ],
  mainEntity: {
    '@type': 'ItemList',
    numberOfItems: 10,
    itemListElement: [
      {
        '@type': 'WebApplication',
        position: 1,
        name: 'Ngbanwe JPG/PNG gaa WebP',
        url: toAbsoluteUrl('/ig/ngwa-oru/gbanwee-jpg-png-gaa-webp'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 2,
        name: 'Edita onyonyo',
        url: toAbsoluteUrl('/ig/ngwa-oru/edita-onyonyo'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 3,
        name: "Njikọta favicon n'efu",
        url: toAbsoluteUrl('/ig/ngwa-oru/njikota-favicon-nefu'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 4,
        name: 'Nyocha meta aha na nkọwa',
        url: toAbsoluteUrl('/ig/ngwa-oru/nyocha-meta-aha-na-nkowa'),
        applicationCategory: 'DeveloperApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 5,
        name: 'Ọgụgụ okwu na mkpụrụedemede',
        url: toAbsoluteUrl('/ig/ngwa-oru/agu-okwu-na-mkpuruedemede'),
        applicationCategory: 'DeveloperApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 6,
        name: "Njikọta mbinye aka email n'efu",
        url: toAbsoluteUrl('/ig/ngwa-oru/njikota-mbinye-aka-email-nefu'),
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 7,
        name: 'Nyocha ịdị iche agba',
        url: toAbsoluteUrl('/ig/ngwa-oru/nyocha-idi-iche-agba'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 8,
        name: 'Mwepụta agba site na onyonyo',
        url: toAbsoluteUrl('/ig/ngwa-oru/mweputa-agba-site-na-onyonyo'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 9,
        name: 'Njikọta palette agba',
        url: toAbsoluteUrl('/ig/ngwa-oru/njikota-palette-agba'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 10,
        name: "Njikọta koodu QR n'efu",
        url: toAbsoluteUrl('/ig/ngwa-oru/njikota-koodu-qr-nefu'),
        applicationCategory: 'UtilityApplication',
        operatingSystem: 'Any',
      },
    ],
  },
};

const faqItems = [
  {
    question: 'Ego ole ka ngwa ọrụ ndị a na-efu?',
    answer: "Onweghị ihe ọ bụla. Ngwa ọrụ niile bụ n'efu kpamkpam, enweghị ụgwọ kwa ọnwa ma ọ bụ ụgwọ ezoro ezo.",
  },
  {
    question: 'A na-eziga faịlụ m gaa sava?',
    answer: "Mba. Ngwa ọrụ niile na-arụ ọrụ n'ime ihe nchọgharị. Faịlụ anaghị apụ na ngwaọrụ gị, ọ nweghị ebe a na-echekwa ha.",
  },
  {
    question: 'Achọrọ m akaụntụ?',
    answer: 'Mba. Ị nwere ike iji ngwa ọrụ ozugbo na-enweghị ịbanye ma ọ bụ ịdebanye aha.',
  },
  {
    question: 'Oke ojiji ọ dị?',
    answer: 'Mba. Jiri ha mgbe ọ bụla na-enweghị oke — enweghị oke ụbọchị, enweghị oke faịlụ, enweghị oke ngbanwe.',
  },
  {
    question: 'Gịnị ka ngwa ọrụ ndị a na-eme?',
    answer: 'Ha na-enyere aka ịkwadebe ihe maka weebụsaịtị, mgbasa ozi mmekọrịta na ibipụta: imezi onyonyo, ịmepụta favicon, inyocha ogologo ederede, ịmepụta koodu QR, ịhọrọ agba na inyocha ịgụta.',
  },
  {
    question: 'Ngwa ọrụ ndị a ọ na-arụ ọrụ na ekwentị?',
    answer: "Ee, mana ngwa ọrụ ụfọdụ (ngbanwe WebP, njikọta favicon) na-arụ ọrụ nke ọma karịa na kọmputa, n'ihi na ha na-arụ ọrụ na faịlụ buru ibu.",
  },
];

export default function ToolsIndexPage() {
  return (
    <>
      <HeroBanner
        title="Ngwa ọrụ n'efu"
        description="Ngbanwe onyonyo, njikọta favicon, ọgụgụ okwu, ngwa ọrụ agba na koodu QR. Enweghị ndebanye aha, enweghị oke — ha niile na-arụ ọrụ n'ime ihe nchọgharị."
        backgroundImage="/assets/arteon-logo-on-mockup.webp"
        overlay="black"
      />
      <Wrapper>
        <Gap size="sm" />
        <SectionSteps
          title="Onyonyo na favicon"
          description="Ngwa ọrụ maka ịchịkwa onyonyo, foto na akara maka weebụsaịtị na mgbasa ozi mmekọrịta."
          grid="three"
          items={[
            {
              icon: <RiImageEditLine className="h-8 w-8" />,
              title: 'Ngbanwe JPG/PNG gaa WebP',
              topImageAlt: 'Ngbanwe JPG/PNG gaa WebP Arteon',
              topImageSrc: '/assets/tools/narzedzia-jpg-png-na-webp-bez-limitu.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    Gbanwee onyonyo JPG na PNG gaa usoro <strong>WebP</strong> iji belata nha faịlụ. Peeji na-ebukarị ngwa ngwa.
                  </p>
                  <div className="mt-4">
                    <Button arrow link="/ig/ngwa-oru/gbanwee-jpg-png-gaa-webp">
                      Mepee ngwa ọrụ
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiCropLine className="h-8 w-8" />,
              title: 'Edita onyonyo',
              topImageAlt: 'Edita onyonyo Arteon',
              topImageSrc: '/assets/tools/narzedzia-zmiana-rozmiaru-i-kadrowanie-zdjecia.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Kpụọ foto gị maka mgbasa ozi mmekọrịta ma ọ bụ weebụsaịtị. Họrọ usoro emechara ma ọ bụ tinye nha nke gị — budata na PNG, JPG ma ọ bụ WebP.</p>
                  <div className="mt-4">
                    <Button arrow link="/ig/ngwa-oru/edita-onyonyo">
                      Mepee ngwa ọrụ
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiAppsLine className="h-8 w-8" />,
              title: 'Njikọta favicon',
              topImageAlt: 'Njikọta favicon Arteon',
              topImageSrc: '/assets/tools/narzedzia-darmowy-generator-favicon-ico.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    Mepụta <strong>favicon.ico</strong> na akara PNG 180x180, 192x192 na 512x512 site na otu onyonyo — dịka ihe achọrọ nke ihe nchọgharị na Lighthouse si dị.
                  </p>
                  <div className="mt-4">
                    <Button arrow link="/ig/ngwa-oru/njikota-favicon-nefu">
                      Mepee ngwa ọrụ
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />
        <Gap size="sm" />
        <SectionSteps
          title="Ederede na SEO"
          description="Ngwa ọrụ maka inyocha ogologo ederede, akara meta na ịhụ peeji na nsorita ọchụchọ."
          grid="three"
          items={[
            {
              icon: <RiFileTextLine className="h-8 w-8" />,
              title: 'Nyocha meta aha na nkọwa',
              topImageAlt: 'Nyocha meta aha Arteon',
              topImageSrc: '/assets/tools/narzedzia-licznik-dlugosci-meta-title-i-description.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Lelee ọnụ ọgụgụ mkpụrụedemede na okwu na obosara pixel — nwere nlele Google. Zere aha na nkọwa e bipụtara na nsorita ọchụchọ.</p>
                  <div className="mt-4">
                    <Button arrow link="/ig/ngwa-oru/nyocha-meta-aha-na-nkowa">
                      Mepee ngwa ọrụ
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiArticleLine className="h-8 w-8" />,
              title: 'Ọgụgụ okwu na mkpụrụedemede',
              topImageAlt: 'Ọgụgụ okwu Arteon',
              topImageSrc: '/assets/tools/narzedzia-licznik-slow-i-znakow.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Lelee ogologo ederede wee nyochaa ma ọ dabara maka peeji ụlọ, peeji ọrụ, edemede blọọgụ ma ọ bụ nkọwa ngwaahịa. Ọ na-agụ okwu, mkpụrụedemede, paragraf na oge ọgụ.</p>
                  <div className="mt-4">
                    <Button arrow link="/ig/ngwa-oru/agu-okwu-na-mkpuruedemede">
                      Mepee ngwa ọrụ
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />
        <Gap size="sm" />
        <SectionSteps
          title="Email na nkwurịta ọnụ"
          description="Ngwa ọrụ maka nkwurịta ọnụ email nke ọkachamara na ọdịdị ejiri mara onwe ya."
          grid="three"
          items={[
            {
              icon: <RiMailLine className="h-8 w-8" />,
              title: 'Njikọta mbinye aka email',
              topImageAlt: 'Njikọta mbinye aka email Arteon',
              topImageSrc: '/assets/tools/narzedzia-darmowy-generator-stopki-mailowej.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Wuo mbinye aka email nke ọkachamara n'otu nkeji ole na ole. Tinye data gị, họrọ agba wee detuo koodu HTML emechara gaa Gmail, Outlook ma ọ bụ ngwa ọzọ.</p>
                  <div className="mt-4">
                    <Button arrow link="/ig/ngwa-oru/njikota-mbinye-aka-email-nefu">
                      Mepee ngwa ọrụ
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />
        <Gap size="sm" />
        <SectionSteps
          title="Koodu QR"
          description="Njikọta koodu QR maka weebụsaịtị, kaadị azụmaahịa, ndepụta nri na akwụkwọ mgbasa ozi."
          grid="three"
          items={[
            {
              icon: <RiQrCodeLine className="h-8 w-8" />,
              title: "Njikọta koodu QR n'efu",
              topImageAlt: 'Njikọta koodu QR Arteon',
              topImageSrc: '/assets/tools/narzedzia-generator-kodu-qr.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Mepụta koodu QR maka weebụsaịtị, vCard, ndepụta nri ụlọ oriri ma ọ bụ akwụkwọ mgbasa ozi. Bupụ na PNG na SVG — enweghị ndebanye aha, enweghị oke.</p>
                  <div className="mt-4">
                    <Button arrow link="/ig/ngwa-oru/njikota-koodu-qr-nefu">
                      Mepee ngwa ọrụ
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />
        <Gap size="sm" />
        <SectionSteps
          title="Agba na ịnweta"
          description="Ngwa ọrụ maka ịrụ ọrụ na agba, ịdị iche na ịnweta WCAG."
          grid="three"
          items={[
            {
              icon: <RiContrast2Line className="h-8 w-8" />,
              title: 'Nyocha ịdị iche agba',
              topImageAlt: 'Nyocha ịdị iche agba Arteon',
              topImageSrc: '/assets/tools/narzedzia-tester-kontrastu-kolorow-wcag.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    Lelee ma agba ederede na ndabere gị pụrụ ịgụ. Tinye koodu agba, lelee ọnụọgụ ịdị iche dịka iwu <strong>WCAG</strong> si dị wee jiri ọrụ <strong>Match</strong> maka ndozi na-akpaghị
                    aka.
                  </p>
                  <div className="mt-4">
                    <Button arrow link="/ig/ngwa-oru/nyocha-idi-iche-agba">
                      Mepee ngwa ọrụ
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiPantoneLine className="h-8 w-8" />,
              title: 'Mwepụta agba site na onyonyo',
              topImageAlt: 'Mwepụta agba Arteon',
              topImageSrc: '/assets/tools/narzedzia-generator-palety-kolorow-z-obrazu.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Bulite foto ma ọ bụ logo — ngwa ọrụ a ga-ewepụta agba ndị kachasị. Detuo koodu HEX site n'otu ịpị wee jiri ha ebe ọ bụla.</p>
                  <div className="mt-4">
                    <Button arrow link="/ig/ngwa-oru/mweputa-agba-site-na-onyonyo">
                      Mepee ngwa ọrụ
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiPaletteLine className="h-8 w-8" />,
              title: 'Njikọta palette agba',
              topImageAlt: 'Njikọta palette agba Arteon',
              topImageSrc: '/assets/tools/narzedzia-generator-palet-kolorow-online.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Họrọ otu agba wee mepụta palette 9: monochromatic, complementary, triadic, analogous na ndị ọzọ. Detuo koodu HEX site n'otu ịpị.</p>
                  <div className="mt-4">
                    <Button arrow link="/ig/ngwa-oru/njikota-palette-agba">
                      Mepee ngwa ọrụ
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />
        <Gap variant="line" />
        <SectionInfo title="Gịnị bụ ngwa ọrụ Arteon?">
          <p className="mb-4">
            Ngwa ọrụ 10 n'efu maka ịkwadebe ihe maka weebụsaịtị, mgbasa ozi mmekọrịta na ibipụta — ngbanwe WebP, njikọta favicon, ọgụgụ okwu, mwepụta agba, njikọta palette na koodu QR.
          </p>
          <p>Ngwa ọrụ niile na-arụ ọrụ n'ime ihe nchọgharị — faịlụ anaghị eziga ya gaa sava. Jiri ha na-enweghị ndebanye aha na na-enweghị oke.</p>
        </SectionInfo>
        <Gap variant="line" />
        <SectionSteps
          title="Gịnị mere ị ga-eji ngwa ọrụ Arteon?"
          grid="two"
          items={[
            {
              icon: <RiShieldCheckLine className="h-6 w-6" />,
              title: 'Nzuzo zuru oke',
              description: "Ngwa ọrụ niile na-ahazi faịlụ na nzuzo n'ime ihe nchọgharị. Onweghị ihe a na-eziga gaa sava — data na-agwụ mgbe ị mechiri taabụ.",
            },
            {
              icon: <RiInfinityFill className="h-6 w-6" />,
              title: 'Enweghị oke ojiji',
              description: 'Jiri ha mgbe ọ bụla na-enweghị oke — enweghị oke ụbọchị, enweghị oke faịlụ, enweghị oke ngbanwe. Mgbe ọ bụla ị chọrọ.',
            },
            {
              icon: <RiLockLine className="h-6 w-6" />,
              title: 'Enweghị ndebanye aha',
              description: 'Achọghị akaụntụ. Mepee ngwa ọrụ, jiri ya, ọ gwụla.',
            },
            {
              icon: <RiGlobalLine className="h-6 w-6" />,
              title: "Dị n'asụsụ Igbo",
              description: "Ngwa ọrụ niile dị n'asụsụ Igbo — ihu, ntụziaka na ịdọ aka ná ntị.",
            },
          ]}
        />
        <Gap variant="line" />
        <FaqPanels items={faqItems} title="Ajụjụ a na-ajụkarị gbasara ngwa ọrụ anyị" />
        <Gap size="sm" />
      </Wrapper>
      <Script id="ld-json-tools-ig" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(schema)}
      </Script>
    </>
  );
}
