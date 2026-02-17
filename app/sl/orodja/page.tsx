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
  title: 'Brezplačna orodja | Slike, SEO, barve, favicon',
  description: '10 brezplačnih orodij: WebP pretvornik, generator faviconov, števec besed, izločanje barv in QR kode. Za spletne strani in družbena omrežja.',
  alternates: getToolsIndexAlternates('sl'),
  openGraph: {
    title: 'Brezplačna orodja | Slike, SEO, barve, favicon',
    description: '10 brezplačnih orodij: WebP pretvornik, generator faviconov, števec besed, izločanje barv in QR kode. Za spletne strani in družbena omrežja.',
    url: toAbsoluteUrl('/sl/orodja'),
    type: 'website',
    images: [{ url: toAbsoluteUrl('/assets/arteon-logo-on-mockup.webp'), width: 1200, height: 630 }],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Brezplačna orodja',
  description: '10 brezplačnih orodij za spletne strani, družbena omrežja in tisk.',
  url: toAbsoluteUrl('/sl/orodja'),
  inLanguage: 'sl',
  isPartOf: { '@type': 'WebSite', name: 'Arteon Agency', url: siteUrl },
  about: [
    { '@type': 'Thing', name: 'Optimizacija slik' },
    { '@type': 'Thing', name: 'SEO' },
    { '@type': 'Thing', name: 'Barve in blagovna znamka' },
    { '@type': 'Thing', name: 'Generatorji' },
  ],
  mainEntity: {
    '@type': 'ItemList',
    numberOfItems: 10,
    itemListElement: [
      {
        '@type': 'WebApplication',
        position: 1,
        name: 'Pretvornik JPG/PNG v WebP',
        url: toAbsoluteUrl('/sl/orodja/pretvornik-jpg-png-v-webp'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      { '@type': 'WebApplication', position: 2, name: 'Urejevalnik slik', url: toAbsoluteUrl('/sl/orodja/urejevalnik-slik'), applicationCategory: 'MultimediaApplication', operatingSystem: 'Any' },
      {
        '@type': 'WebApplication',
        position: 3,
        name: 'Generator faviconov',
        url: toAbsoluteUrl('/sl/orodja/brezplacni-generator-faviconov'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 4,
        name: 'Preverjanje meta naslova in opisa',
        url: toAbsoluteUrl('/sl/orodja/preverjanje-meta-naslova-in-opisa'),
        applicationCategory: 'DeveloperApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 5,
        name: 'Števec besed in znakov',
        url: toAbsoluteUrl('/sl/orodja/stevec-besed-in-znakov'),
        applicationCategory: 'DeveloperApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 6,
        name: 'Generator podpisa e-pošte',
        url: toAbsoluteUrl('/sl/orodja/brezplacni-generator-podpisa-eposta'),
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 7,
        name: 'Preverjanje kontrasta barv',
        url: toAbsoluteUrl('/sl/orodja/preverjanje-kontrasta-barv'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 8,
        name: 'Izločanje barv iz slike',
        url: toAbsoluteUrl('/sl/orodja/izlocanje-barv-iz-slike'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 9,
        name: 'Generator barvnih palet',
        url: toAbsoluteUrl('/sl/orodja/generator-barvnih-palet'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 10,
        name: 'Brezplačni generator QR kod',
        url: toAbsoluteUrl('/sl/orodja/brezplacni-generator-qr-kod'),
        applicationCategory: 'UtilityApplication',
        operatingSystem: 'Any',
      },
    ],
  },
};

const faqItems = [
  { question: 'Koliko stanejo orodja?', answer: 'Nič. Vsa orodja so popolnoma brezplačna, brez naročnin in skritih stroškov.' },
  { question: 'Ali se moje datoteke pošiljajo na strežnik?', answer: 'Ne. Vsa orodja delujejo neposredno v brskalniku. Datoteke nikoli ne zapustijo vašega računalnika in se nikjer ne shranjujejo.' },
  { question: 'Ali potrebujem račun?', answer: 'Ne. Orodja lahko uporabljate takoj brez prijave ali registracije.' },
  { question: 'Ali obstajajo omejitve uporabe?', answer: 'Ne. Uporabljajte brez omejitev \u2013 brez dnevne omejitve, brez omejitve datotek, brez omejitve pretvorb.' },
  {
    question: 'Za kaj so orodja namenjena?',
    answer:
      'Pomagajo pripraviti materiale za spletne strani, družbena omrežja in tisk: optimizirati slike, ustvariti favicone, preveriti dolžino besedila, generirati QR kode, izbrati barve in preveriti berljivost.',
  },
  { question: 'Ali orodja delujejo na mobilni napravi?', answer: 'Da, vendar nekatera orodja (WebP pretvornik, generator faviconov) bolje delujejo na računalniku, ker obdelujejo večje datoteke.' },
];

export default function ToolsIndexPage() {
  return (
    <>
      <HeroBanner
        title="Brezplačna orodja"
        description="Pretvornik slik, generator faviconov, števec besed, barvna orodja in QR kode. Brez registracije, brez omejitev \u2013 vse deluje v brskalniku."
        backgroundImage="/assets/arteon-logo-on-mockup.webp"
        overlay="black"
      />
      <Wrapper>
        <Gap size="sm" />
        <SectionSteps
          title="Slike in favicon"
          description="Orodja za pripravo slik, grafik in ikon za spletne strani in družbena omrežja."
          grid="three"
          items={[
            {
              icon: <RiImageEditLine className="h-8 w-8" />,
              title: 'Pretvornik JPG/PNG v WebP',
              topImageAlt: 'Pretvornik JPG/PNG v WebP Arteon',
              topImageSrc: '/assets/tools/narzedzia-jpg-png-na-webp-bez-limitu.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    Pretvorite JPG in PNG slike v <strong>WebP</strong> format in zmanjšajte velikost datotek. Hitrejše nalaganje strani.
                  </p>
                  <div className="mt-4">
                    <Button arrow link="/sl/orodja/pretvornik-jpg-png-v-webp">
                      Odpri orodje
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiCropLine className="h-8 w-8" />,
              title: 'Urejevalnik slik',
              topImageAlt: 'Urejevalnik slik Arteon',
              topImageSrc: '/assets/tools/narzedzia-zmiana-rozmiaru-i-kadrowanie-zdjecia.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Obrežite sliko za družbena omrežja ali spletno stran. Izberite prednastavljen format ali vnesite mere po meri \u2013 prenesite v PNG, JPG ali WebP formatu.</p>
                  <div className="mt-4">
                    <Button arrow link="/sl/orodja/urejevalnik-slik">
                      Odpri orodje
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiAppsLine className="h-8 w-8" />,
              title: 'Generator faviconov',
              topImageAlt: 'Generator faviconov Arteon',
              topImageSrc: '/assets/tools/narzedzia-darmowy-generator-favicon-ico.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    Ustvarite <strong>favicon.ico</strong> in PNG ikone 180x180, 192x192 in 512x512 iz ene slike \u2013 v skladu z zahtevami brskalnikov in Lighthouse.
                  </p>
                  <div className="mt-4">
                    <Button arrow link="/sl/orodja/brezplacni-generator-faviconov">
                      Odpri orodje
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />
        <Gap size="sm" />
        <SectionSteps
          title="Besedilo in SEO"
          description="Orodja za preverjanje dolžine besedila, meta oznak in predogled strani v rezultatih iskanja."
          grid="three"
          items={[
            {
              icon: <RiFileTextLine className="h-8 w-8" />,
              title: 'Preverjanje meta naslova in opisa',
              topImageAlt: 'Preverjanje meta naslova in opisa Arteon',
              topImageSrc: '/assets/tools/narzedzia-licznik-dlugosci-meta-title-i-description.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Preverite število znakov in besed ter širino v pikslih \u2013 z Google predogledom. Izognite se skrajšanim naslovom in opisom v rezultatih iskanja.</p>
                  <div className="mt-4">
                    <Button arrow link="/sl/orodja/preverjanje-meta-naslova-in-opisa">
                      Odpri orodje
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiArticleLine className="h-8 w-8" />,
              title: 'Števec besed in znakov',
              topImageAlt: 'Števec besed in znakov Arteon',
              topImageSrc: '/assets/tools/narzedzia-licznik-slow-i-znakow.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Preverite dolžino besedila in ocenite, ali je primerno za domačo stran, stran storitev, članek na blogu ali opis izdelka. Orodje šteje besede, znake, odstavke in čas branja.</p>
                  <div className="mt-4">
                    <Button arrow link="/sl/orodja/stevec-besed-in-znakov">
                      Odpri orodje
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />
        <Gap size="sm" />
        <SectionSteps
          title="E-pošta in komunikacija"
          description="Orodja za profesionalno e-poštno komunikacijo in enotno vizualno podobo."
          grid="three"
          items={[
            {
              icon: <RiMailLine className="h-8 w-8" />,
              title: 'Brezplačni generator podpisa e-pošte',
              topImageAlt: 'Generator podpisa e-pošte Arteon',
              topImageSrc: '/assets/tools/narzedzia-darmowy-generator-stopki-mailowej.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Ustvarite profesionalni podpis e-pošte v nekaj minutah. Vnesite podatke, izberite barve in kopirajte končan HTML kodo v Gmail, Outlook ali drug e-poštni odjemalec.</p>
                  <div className="mt-4">
                    <Button arrow link="/sl/orodja/brezplacni-generator-podpisa-eposta">
                      Odpri orodje
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />
        <Gap size="sm" />
        <SectionSteps
          title="QR kode"
          description="Generator QR kod za spletne strani, vizitke, jedilne liste in tiskovine."
          grid="three"
          items={[
            {
              icon: <RiQrCodeLine className="h-8 w-8" />,
              title: 'Brezplačni generator QR kod',
              topImageAlt: 'Generator QR kod Arteon',
              topImageSrc: '/assets/tools/narzedzia-generator-kodu-qr.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Ustvarite QR kodo za spletno stran, vCard vizitko, jedilni list restavracije ali letak. Izvoz v PNG in SVG \u2013 brez prijave, brez omejitev.</p>
                  <div className="mt-4">
                    <Button arrow link="/sl/orodja/brezplacni-generator-qr-kod">
                      Odpri orodje
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />
        <Gap size="sm" />
        <SectionSteps
          title="Barve in dostopnost"
          description="Orodja za delo z barvami, kontrastom in WCAG dostopnostjo."
          grid="three"
          items={[
            {
              icon: <RiContrast2Line className="h-8 w-8" />,
              title: 'Preverjanje kontrasta barv',
              topImageAlt: 'Preverjanje kontrasta barv Arteon',
              topImageSrc: '/assets/tools/narzedzia-tester-kontrastu-kolorow-wcag.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    Preverite, ali sta barvi besedila in ozadja berljivi. Vnesite barvne kode, preverite razmerje kontrasta po <strong>WCAG</strong> standardu in uporabite funkcijo{' '}
                    <strong>Match</strong> za samodejni popravek.
                  </p>
                  <div className="mt-4">
                    <Button arrow link="/sl/orodja/preverjanje-kontrasta-barv">
                      Odpri orodje
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiPantoneLine className="h-8 w-8" />,
              title: 'Izločanje barv iz slike',
              topImageAlt: 'Izločanje barv iz slike Arteon',
              topImageSrc: '/assets/tools/narzedzia-generator-palety-kolorow-z-obrazu.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Naložite fotografijo ali logotip \u2013 orodje bo izločilo prevladujoče barve. Kopirajte HEX kode z enim klikom in jih uporabite kjerkoli.</p>
                  <div className="mt-4">
                    <Button arrow link="/sl/orodja/izlocanje-barv-iz-slike">
                      Odpri orodje
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiPaletteLine className="h-8 w-8" />,
              title: 'Generator barvnih palet',
              topImageAlt: 'Generator barvnih palet Arteon',
              topImageSrc: '/assets/tools/narzedzia-generator-palet-kolorow-online.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Izberite osnovno barvo in ustvarite 9 barvnih palet: monokromatsko, komplementarno, triadsko, pastelno, temno in druge. Kopirajte HEX kode z enim klikom.</p>
                  <div className="mt-4">
                    <Button arrow link="/sl/orodja/generator-barvnih-palet">
                      Odpri orodje
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />
        <Gap variant="line" />
        <SectionInfo title="Kaj so orodja Arteon?">
          <p className="mb-4">
            10 brezplačnih orodij za pripravo materialov za spletne strani, družbena omrežja in tisk \u2013 WebP pretvornik, generator faviconov, števec besed, izločanje barv, generator palet in QR
            kode.
          </p>
          <p>Vsa orodja delujejo v brskalniku \u2013 datoteke se nikoli ne pošiljajo na strežnik. Uporabljajte brez registracije in brez omejitev.</p>
        </SectionInfo>
        <Gap variant="line" />
        <SectionSteps
          title="Zakaj uporabljati orodja Arteon?"
          grid="two"
          items={[
            {
              icon: <RiShieldCheckLine className="h-6 w-6" />,
              title: 'Popolna zasebnost',
              description: 'Vsa orodja obdelujejo datoteke lokalno v brskalniku. Nič se ne pošilja na strežnik \u2013 podatki izginejo, ko zaprete zavihek.',
            },
            {
              icon: <RiInfinityFill className="h-6 w-6" />,
              title: 'Brez omejitev uporabe',
              description: 'Uporabljajte brez omejitev \u2013 brez dnevne omejitve, brez omejitve datotek, brez omejitve pretvorb. Kolikokrat potrebujete.',
            },
            { icon: <RiLockLine className="h-6 w-6" />, title: 'Brez registracije', description: 'Račun ni potreben. Odprite orodje, uporabite ga, končano.' },
            { icon: <RiGlobalLine className="h-6 w-6" />, title: 'Na voljo v slovenščini', description: 'Vsa orodja so na voljo v slovenščini \u2013 vmesnik, navodila in obvestila.' },
          ]}
        />
        <Gap variant="line" />
        <FaqPanels items={faqItems} title="Pogosto zastavljena vprašanja o naših orodjih" />
        <Gap size="sm" />
      </Wrapper>
      <Script id="ld-json-tools-sl" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(schema)}
      </Script>
    </>
  );
}
