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
  title: 'Besplatni alati | Slike, SEO, boje, favicon',
  description: '10 besplatnih alata: WebP pretvarač, generator favicona, brojač riječi, ekstraktor boja i QR kodovi. Za web stranice i društvene mreže.',
  alternates: getToolsIndexAlternates('hr'),
  openGraph: {
    title: 'Besplatni alati | Slike, SEO, boje, favicon',
    description: '10 besplatnih alata: WebP pretvarač, generator favicona, brojač riječi, ekstraktor boja i QR kodovi. Za web stranice i društvene mreže.',
    url: toAbsoluteUrl('/hr/alati'),
    type: 'website',
    images: [{ url: toAbsoluteUrl('/assets/arteon-logo-on-mockup.webp'), width: 1200, height: 630 }],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Besplatni alati',
  description: '10 besplatnih alata za web stranice, društvene mreže i tiskovine.',
  url: toAbsoluteUrl('/hr/alati'),
  inLanguage: 'hr',
  isPartOf: { '@type': 'WebSite', name: 'Arteon Agency', url: siteUrl },
  about: [
    { '@type': 'Thing', name: 'Optimizacija slika' },
    { '@type': 'Thing', name: 'SEO' },
    { '@type': 'Thing', name: 'Boje i brend' },
    { '@type': 'Thing', name: 'Generatori' },
  ],
  mainEntity: {
    '@type': 'ItemList',
    numberOfItems: 10,
    itemListElement: [
      {
        '@type': 'WebApplication',
        position: 1,
        name: 'Pretvaranje JPG/PNG u WebP',
        url: toAbsoluteUrl('/hr/alati/pretvaranje-jpg-png-u-webp'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      { '@type': 'WebApplication', position: 2, name: 'Urednik slika', url: toAbsoluteUrl('/hr/alati/urednik-slika'), applicationCategory: 'MultimediaApplication', operatingSystem: 'Any' },
      {
        '@type': 'WebApplication',
        position: 3,
        name: 'Generator favicona',
        url: toAbsoluteUrl('/hr/alati/besplatni-generator-favicona'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 4,
        name: 'Provjera meta naslova i opisa',
        url: toAbsoluteUrl('/hr/alati/provjera-meta-naslova-i-opisa'),
        applicationCategory: 'DeveloperApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 5,
        name: 'Brojač riječi i znakova',
        url: toAbsoluteUrl('/hr/alati/brojac-rijeci-i-znakova'),
        applicationCategory: 'DeveloperApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 6,
        name: 'Generator potpisa e-pošte',
        url: toAbsoluteUrl('/hr/alati/besplatni-generator-potpisa-emaila'),
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 7,
        name: 'Provjera kontrasta boja',
        url: toAbsoluteUrl('/hr/alati/provjera-kontrasta-boja'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 8,
        name: 'Izdvajanje boja iz slike',
        url: toAbsoluteUrl('/hr/alati/izdvajanje-boja-iz-slike'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 9,
        name: 'Generator paleta boja',
        url: toAbsoluteUrl('/hr/alati/generator-paleta-boja'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 10,
        name: 'Besplatni generator QR kodova',
        url: toAbsoluteUrl('/hr/alati/besplatni-generator-qr-kodova'),
        applicationCategory: 'UtilityApplication',
        operatingSystem: 'Any',
      },
    ],
  },
};

const faqItems = [
  { question: 'Koliko koštaju alati?', answer: 'Ništa. Svi alati su potpuno besplatni, bez pretplata i skrivenih naknada.' },
  { question: 'Šalju li se moje datoteke na poslužitelj?', answer: 'Ne. Svi alati rade izravno u pregledniku. Datoteke nikada ne napuštaju vaše računalo i nigdje se ne pohranjuju.' },
  { question: 'Trebam li račun?', answer: 'Ne. Alate možete koristiti odmah bez prijave ili registracije.' },
  { question: 'Postoje li ograničenja korištenja?', answer: 'Ne. Koristite bez ograničenja \u2013 bez dnevnog limita, bez limita datoteka, bez limita konverzija.' },
  {
    question: 'Za što su alati namijenjeni?',
    answer:
      'Pomažu pripremiti materijale za web stranice, društvene mreže i tiskovine: optimizirati slike, kreirati favicone, provjeriti duljinu teksta, generirati QR kodove, odabrati boje i provjeriti čitljivost.',
  },
  { question: 'Rade li alati na mobitelu?', answer: 'Da, ali neki alati (WebP pretvarač, generator favicona) bolje rade na računalu jer obrađuju veće datoteke.' },
];

export default function ToolsIndexPage() {
  return (
    <>
      <HeroBanner
        title="Besplatni alati"
        description="Pretvarač slika, generator favicona, brojač riječi, alati za boje i QR kodovi. Bez registracije, bez ograničenja \u2013 sve radi u pregledniku."
        backgroundImage="/assets/arteon-logo-on-mockup.webp"
        overlay="black"
      />
      <Wrapper>
        <Gap size="sm" />
        <SectionSteps
          title="Slike i favicon"
          description="Alati za pripremu slika, grafika i ikona za web stranice i društvene mreže."
          grid="three"
          items={[
            {
              icon: <RiImageEditLine className="h-8 w-8" />,
              title: 'Pretvaranje JPG/PNG u WebP',
              topImageAlt: 'Pretvaranje JPG/PNG u WebP Arteon',
              topImageSrc: '/assets/tools/narzedzia-jpg-png-na-webp-bez-limitu.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    Pretvorite JPG i PNG slike u <strong>WebP</strong> format i smanjite veličinu datoteka. Brže učitavanje stranice.
                  </p>
                  <div className="mt-4">
                    <Button arrow link="/hr/alati/pretvaranje-jpg-png-u-webp">
                      Otvori alat
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiCropLine className="h-8 w-8" />,
              title: 'Urednik slika',
              topImageAlt: 'Urednik slika Arteon',
              topImageSrc: '/assets/tools/narzedzia-zmiana-rozmiaru-i-kadrowanie-zdjecia.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Izrežite sliku za društvene mreže ili web stranicu. Odaberite gotov format ili unesite prilagođene dimenzije \u2013 preuzmite u PNG, JPG ili WebP formatu.</p>
                  <div className="mt-4">
                    <Button arrow link="/hr/alati/urednik-slika">
                      Otvori alat
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiAppsLine className="h-8 w-8" />,
              title: 'Generator favicona',
              topImageAlt: 'Generator favicona Arteon',
              topImageSrc: '/assets/tools/narzedzia-darmowy-generator-favicon-ico.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    Izradite <strong>favicon.ico</strong> i PNG ikone 180x180, 192x192 i 512x512 iz jedne slike \u2013 u skladu sa zahtjevima preglednika i Lighthousea.
                  </p>
                  <div className="mt-4">
                    <Button arrow link="/hr/alati/besplatni-generator-favicona">
                      Otvori alat
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />
        <Gap size="sm" />
        <SectionSteps
          title="Tekst i SEO"
          description="Alati za provjeru duljine teksta, meta oznaka i pregled stranice u rezultatima pretraživanja."
          grid="three"
          items={[
            {
              icon: <RiFileTextLine className="h-8 w-8" />,
              title: 'Provjera meta naslova i opisa',
              topImageAlt: 'Provjera meta naslova i opisa Arteon',
              topImageSrc: '/assets/tools/narzedzia-licznik-dlugosci-meta-title-i-description.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Provjerite broj znakova i riječi te širinu u pikselima \u2013 s Google pregledom. Izbjegnite skraćene naslove i opise u rezultatima pretraživanja.</p>
                  <div className="mt-4">
                    <Button arrow link="/hr/alati/provjera-meta-naslova-i-opisa">
                      Otvori alat
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiArticleLine className="h-8 w-8" />,
              title: 'Brojač riječi i znakova',
              topImageAlt: 'Brojač riječi i znakova Arteon',
              topImageSrc: '/assets/tools/narzedzia-licznik-slow-i-znakow.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    Provjerite duljinu teksta i ocijenite odgovara li početnoj stranici, stranici usluga, članku na blogu ili opisu proizvoda. Alat broji riječi, znakove, odlomke i vrijeme čitanja.
                  </p>
                  <div className="mt-4">
                    <Button arrow link="/hr/alati/brojac-rijeci-i-znakova">
                      Otvori alat
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />
        <Gap size="sm" />
        <SectionSteps
          title="E-pošta i komunikacija"
          description="Alati za profesionalnu e-mail komunikaciju i ujednačen vizualni identitet."
          grid="three"
          items={[
            {
              icon: <RiMailLine className="h-8 w-8" />,
              title: 'Besplatni generator potpisa e-pošte',
              topImageAlt: 'Generator potpisa e-pošte Arteon',
              topImageSrc: '/assets/tools/narzedzia-darmowy-generator-stopki-mailowej.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Izradite profesionalni potpis e-pošte u nekoliko minuta. Unesite podatke, odaberite boje i kopirajte gotov HTML kod u Gmail, Outlook ili drugi e-mail klijent.</p>
                  <div className="mt-4">
                    <Button arrow link="/hr/alati/besplatni-generator-potpisa-emaila">
                      Otvori alat
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />
        <Gap size="sm" />
        <SectionSteps
          title="QR kodovi"
          description="Generator QR kodova za web stranice, posjetnice, jelovnike i tiskovine."
          grid="three"
          items={[
            {
              icon: <RiQrCodeLine className="h-8 w-8" />,
              title: 'Besplatni generator QR kodova',
              topImageAlt: 'Generator QR kodova Arteon',
              topImageSrc: '/assets/tools/narzedzia-generator-kodu-qr.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Izradite QR kod za web stranicu, vCard posjetnicu, jelovnik restorana ili letak. Izvoz u PNG i SVG \u2013 bez prijave, bez ograničenja.</p>
                  <div className="mt-4">
                    <Button arrow link="/hr/alati/besplatni-generator-qr-kodova">
                      Otvori alat
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />
        <Gap size="sm" />
        <SectionSteps
          title="Boje i pristupačnost"
          description="Alati za rad s bojama, kontrastom i WCAG pristupačnošću."
          grid="three"
          items={[
            {
              icon: <RiContrast2Line className="h-8 w-8" />,
              title: 'Provjera kontrasta boja',
              topImageAlt: 'Provjera kontrasta boja Arteon',
              topImageSrc: '/assets/tools/narzedzia-tester-kontrastu-kolorow-wcag.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    Provjerite jesu li boje teksta i pozadine čitljive. Unesite kodove boja, provjerite omjer kontrasta prema <strong>WCAG</strong> standardu i koristite funkciju{' '}
                    <strong>Match</strong> za automatski ispravak.
                  </p>
                  <div className="mt-4">
                    <Button arrow link="/hr/alati/provjera-kontrasta-boja">
                      Otvori alat
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiPantoneLine className="h-8 w-8" />,
              title: 'Izdvajanje boja iz slike',
              topImageAlt: 'Izdvajanje boja iz slike Arteon',
              topImageSrc: '/assets/tools/narzedzia-generator-palety-kolorow-z-obrazu.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Prenesite fotografiju ili logo \u2013 alat će izdvojiti dominantne boje. Kopirajte HEX kodove jednim klikom i koristite ih bilo gdje.</p>
                  <div className="mt-4">
                    <Button arrow link="/hr/alati/izdvajanje-boja-iz-slike">
                      Otvori alat
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiPaletteLine className="h-8 w-8" />,
              title: 'Generator paleta boja',
              topImageAlt: 'Generator paleta boja Arteon',
              topImageSrc: '/assets/tools/narzedzia-generator-palet-kolorow-online.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Odaberite osnovnu boju i generirajte 9 paleta boja: monokromatsku, komplementarnu, trijadsku, pastelnu, tamnu i druge. Kopirajte HEX kodove jednim klikom.</p>
                  <div className="mt-4">
                    <Button arrow link="/hr/alati/generator-paleta-boja">
                      Otvori alat
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />
        <Gap variant="line" />
        <SectionInfo title="Što su Arteonovi alati?">
          <p className="mb-4">
            10 besplatnih alata za pripremu materijala za web stranice, društvene mreže i tiskovine \u2013 WebP pretvarač, generator favicona, brojač riječi, ekstraktor boja, generator paleta i QR
            kodovi.
          </p>
          <p>Svi alati rade u pregledniku \u2013 datoteke se nikada ne šalju na poslužitelj. Koristite bez registracije i bez ograničenja.</p>
        </SectionInfo>
        <Gap variant="line" />
        <SectionSteps
          title="Zašto koristiti Arteonove alate?"
          grid="two"
          items={[
            {
              icon: <RiShieldCheckLine className="h-6 w-6" />,
              title: 'Potpuna privatnost',
              description: 'Svi alati obrađuju datoteke lokalno u pregledniku. Ništa se ne šalje na poslužitelj \u2013 podaci nestaju kada zatvorite karticu.',
            },
            {
              icon: <RiInfinityFill className="h-6 w-6" />,
              title: 'Bez ograničenja korištenja',
              description: 'Koristite bez ograničenja \u2013 bez dnevnog limita, bez limita datoteka, bez limita konverzija. Koliko god puta trebate.',
            },
            { icon: <RiLockLine className="h-6 w-6" />, title: 'Bez registracije', description: 'Račun nije potreban. Otvorite alat, koristite ga, gotovo.' },
            { icon: <RiGlobalLine className="h-6 w-6" />, title: 'Dostupno na hrvatskom', description: 'Svi alati dostupni su na hrvatskom jeziku \u2013 sučelje, upute i obavijesti.' },
          ]}
        />
        <Gap variant="line" />
        <FaqPanels items={faqItems} title="Često postavljana pitanja o našim alatima" />
        <Gap size="sm" />
      </Wrapper>
      <Script id="ld-json-tools-hr" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(schema)}
      </Script>
    </>
  );
}
