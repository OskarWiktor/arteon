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
  title: 'Mjete falas | Imazhe, SEO, ngjyra, favicon',
  description: '10 mjete falas: konvertues WebP, gjenerues favicon, numerues teksti, nxjerres ngjyrash dhe kod QR. Per faqe interneti, media sociale dhe printim. Pa regjistrim.',
  alternates: getToolsIndexAlternates('sq'),
  openGraph: {
    title: 'Mjete falas | Imazhe, SEO, ngjyra, favicon',
    description: '10 mjete falas: konvertues WebP, gjenerues favicon, numerues teksti, nxjerres ngjyrash dhe kod QR. Per faqe interneti, media sociale dhe printim. Pa regjistrim.',
    url: toAbsoluteUrl('/sq/mjetet'),
    type: 'website',
    images: [{ url: toAbsoluteUrl('/assets/arteon-logo-on-mockup.webp'), width: 1200, height: 630 }],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Mjete falas',
  description: '10 mjete falas per faqe interneti, media sociale dhe printim.',
  url: toAbsoluteUrl('/sq/mjetet'),
  inLanguage: 'sq',
  isPartOf: { '@type': 'WebSite', name: 'Arteon Agency', url: siteUrl },
  about: [
    { '@type': 'Thing', name: 'Optimizimi i imazheve' },
    { '@type': 'Thing', name: 'SEO' },
    { '@type': 'Thing', name: 'Ngjyrat dhe brendimi' },
    { '@type': 'Thing', name: 'Gjenerues' },
  ],
  mainEntity: {
    '@type': 'ItemList',
    numberOfItems: 10,
    itemListElement: [
      {
        '@type': 'WebApplication',
        position: 1,
        name: 'Konvertues JPG/PNG ne WebP',
        url: toAbsoluteUrl('/sq/mjetet/konvertues-jpg-png-ne-webp'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      { '@type': 'WebApplication', position: 2, name: 'Redaktues imazhesh', url: toAbsoluteUrl('/sq/mjetet/redaktues-imazhesh'), applicationCategory: 'MultimediaApplication', operatingSystem: 'Any' },
      { '@type': 'WebApplication', position: 3, name: 'Gjenerues favicon', url: toAbsoluteUrl('/sq/mjetet/gjenerues-favicon-falas'), applicationCategory: 'DesignApplication', operatingSystem: 'Any' },
      {
        '@type': 'WebApplication',
        position: 4,
        name: 'Kontrollues meta titull dhe pershkrim',
        url: toAbsoluteUrl('/sq/mjetet/kontrollues-meta-titull-dhe-pershkrim'),
        applicationCategory: 'DeveloperApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 5,
        name: 'Gjenerues nenshkrimi email',
        url: toAbsoluteUrl('/sq/mjetet/gjenerues-nenshkrimi-email-falas'),
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 6,
        name: 'Kontrollues kontrasti ngjyrash',
        url: toAbsoluteUrl('/sq/mjetet/kontrollues-kontrasti-ngjyrave'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 7,
        name: 'Nxjerres ngjyrash nga imazhi',
        url: toAbsoluteUrl('/sq/mjetet/nxjerres-ngjyrash-nga-imazhi'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 8,
        name: 'Gjenerues paletash ngjyrash',
        url: toAbsoluteUrl('/sq/mjetet/gjenerues-paletash-ngjyrash'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 9,
        name: 'Numerues fjalesh dhe karakteresh',
        url: toAbsoluteUrl('/sq/mjetet/numerues-fjalesh-dhe-karakteresh'),
        applicationCategory: 'DeveloperApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 10,
        name: 'Gjenerues kodi QR falas',
        url: toAbsoluteUrl('/sq/mjetet/gjenerues-kodi-qr-falas'),
        applicationCategory: 'UtilityApplication',
        operatingSystem: 'Any',
      },
    ],
  },
};

const faqItems = [
  { question: 'Sa kushtojne keto mjete?', answer: 'Asgje. Te gjitha mjetet jane falas, pa abonim dhe pa tarifa te fshehura.' },
  { question: 'A dergohen skedaret e mi ne server?', answer: 'Jo. Te gjitha mjetet funksionojne plotesisht ne shfletues. Skedaret nuk largohen kurre nga kompjuteri dhe nuk ruhen askund.' },
  { question: 'A kam nevoje per nje llogari?', answer: 'Jo. Mund ti perdorni direkt pa u identifikuar ose pa krijuar nje llogari.' },
  { question: 'A ka kufizime perdorimi?', answer: 'Jo. Perdorni pa kufizime -- pa limit ditor, pa limit skedaresh, pa limit konvertimesh.' },
  {
    question: 'Per cfare sherbejne keto mjete?',
    answer:
      'Ndihmojne ne pergatitjen e materialeve per faqe interneti, media sociale dhe printim: optimizimi i imazheve, krijimi i favicon, kontrolli i gjatesise se tekstit, krijimi i kodeve QR, zgjedhja e ngjyrave dhe kontrolli i lexueshmerise.',
  },
  { question: 'A funksionojne mjetet ne celular?', answer: 'Po, por disa mjete (konvertuesi WebP, gjeneruesi favicon) funksionojne me mire ne desktop sepse perpunojne skedare me te medhenj.' },
];

export default function ToolsIndexPage() {
  return (
    <>
      <HeroBanner
        title="Mjete falas"
        description="Konvertues imazhesh, gjenerues favicon, numerues teksti, mjete ngjyrash dhe kod QR. Pa regjistrim, pa kufizime -- te gjitha funksionojne ne shfletues."
        backgroundImage="/assets/arteon-logo-on-mockup.webp"
        overlay="black"
      />
      <Wrapper>
        <Gap size="sm" />
        <SectionSteps
          title="Imazhe dhe favicon"
          description="Mjete per pergatitjen e fotove, grafikave dhe ikonave per faqe interneti dhe media sociale."
          grid="three"
          items={[
            {
              icon: <RiImageEditLine className="h-8 w-8" />,
              title: 'Konvertues JPG/PNG ne WebP',
              topImageAlt: 'Konvertues JPG/PNG ne WebP Arteon',
              topImageSrc: '/assets/tools/narzedzia-jpg-png-na-webp-bez-limitu.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    Konvertoni imazhet JPG ose PNG ne formatin <strong>WebP</strong> dhe zvogoloni madhesine e skedarit. Ngarkim me i shpejte per faqen tuaj te internetit.
                  </p>
                  <div className="mt-4">
                    <Button arrow link="/sq/mjetet/konvertues-jpg-png-ne-webp">
                      Hap mjetin
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiCropLine className="h-8 w-8" />,
              title: 'Redaktues imazhesh',
              topImageAlt: 'Redaktues imazhesh Arteon',
              topImageSrc: '/assets/tools/narzedzia-zmiana-rozmiaru-i-kadrowanie-zdjecia.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    Pritni imazhin ne menyre perfekte per media sociale ose faqen tuaj te internetit. Zgjidhni nje format te gatshem ose vendosni permasa te personalizuara pikselesh -- shkarkoni ne
                    PNG, JPG ose WebP.
                  </p>
                  <div className="mt-4">
                    <Button arrow link="/sq/mjetet/redaktues-imazhesh">
                      Hap mjetin
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiAppsLine className="h-8 w-8" />,
              title: 'Gjenerues favicon dhe ikonash',
              topImageAlt: 'Gjenerues favicon Arteon',
              topImageSrc: '/assets/tools/narzedzia-darmowy-generator-favicon-ico.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    Krijoni <strong>favicon.ico</strong> dhe ikona PNG 180x180, 192x192 dhe 512x512 nga nje imazh i vetem -- ne perputhje me kerkesat e shfletuesit dhe Lighthouse.
                  </p>
                  <div className="mt-4">
                    <Button arrow link="/sq/mjetet/gjenerues-favicon-falas">
                      Hap mjetin
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />
        <Gap size="sm" />
        <SectionSteps
          title="Tekst dhe SEO"
          description="Mjete per kontrollimin e gjatesise se tekstit, meta etiketave dhe parashikimin e faqes ne rezultatet e kerkimit."
          grid="three"
          items={[
            {
              icon: <RiFileTextLine className="h-8 w-8" />,
              title: 'Kontrollues meta titull dhe pershkrim',
              topImageAlt: 'Kontrollues meta titull dhe pershkrim Arteon',
              topImageSrc: '/assets/tools/narzedzia-licznik-dlugosci-meta-title-i-description.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Kontrolloni numrin e karaktereve, numrin e fjaleve dhe gjeresine ne piksel -- me parashikim Google. Shmangni titujt dhe pershkrimet e prera ne rezultatet e kerkimit.</p>
                  <div className="mt-4">
                    <Button arrow link="/sq/mjetet/kontrollues-meta-titull-dhe-pershkrim">
                      Hap mjetin
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiArticleLine className="h-8 w-8" />,
              title: 'Numerues fjalesh dhe karakteresh',
              topImageAlt: 'Numerues fjalesh dhe karakteresh Arteon',
              topImageSrc: '/assets/tools/narzedzia-licznik-slow-i-znakow.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    Kontrolloni gjatesine e tekstit dhe vleresoni nese pershtatet per faqen kryesore, faqen e sherbimit, postimin ne blog ose pershkrimin e produktit. Mjeti numeron fjalet, karakteret,
                    paragrafet dhe kohen e leximit.
                  </p>
                  <div className="mt-4">
                    <Button arrow link="/sq/mjetet/numerues-fjalesh-dhe-karakteresh">
                      Hap mjetin
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />
        <Gap size="sm" />
        <SectionSteps
          title="Email dhe komunikim"
          description="Mjete per komunikim profesional me email dhe imazh te qendrueshme te brendit."
          grid="three"
          items={[
            {
              icon: <RiMailLine className="h-8 w-8" />,
              title: 'Gjenerues nenshkrimi email HTML falas',
              topImageAlt: 'Gjenerues nenshkrimi email falas Arteon',
              topImageSrc: '/assets/tools/narzedzia-darmowy-generator-stopki-mailowej.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    Krijoni nje nenshkrim profesional emaili brenda disa minutash. Vendosni te dhenat, zgjidhni ngjyrat dhe kopjoni kodin HTML te gatshem ne Gmail, Outlook ose klient tjeter emaili.
                  </p>
                  <div className="mt-4">
                    <Button arrow link="/sq/mjetet/gjenerues-nenshkrimi-email-falas">
                      Hap mjetin
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />
        <Gap size="sm" />
        <SectionSteps
          title="Kod QR"
          description="Gjenerues kodi QR per faqe interneti, karta biznesi, menu dhe materiale printimi."
          grid="three"
          items={[
            {
              icon: <RiQrCodeLine className="h-8 w-8" />,
              title: 'Gjenerues kodi QR falas',
              topImageAlt: 'Gjenerues kodi QR falas Arteon',
              topImageSrc: '/assets/tools/narzedzia-generator-kodu-qr.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Krijoni nje kod QR per faqe interneti, vCard, menu restoranti ose fletushke. Eksportoni ne PNG dhe SVG -- pa identifikim, pa kufizime.</p>
                  <div className="mt-4">
                    <Button arrow link="/sq/mjetet/gjenerues-kodi-qr-falas">
                      Hap mjetin
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />
        <Gap size="sm" />
        <SectionSteps
          title="Ngjyrat dhe aksesibiliteti"
          description="Mjete per punen me ngjyra, kontrast dhe aksesibilitetin WCAG."
          grid="three"
          items={[
            {
              icon: <RiContrast2Line className="h-8 w-8" />,
              title: 'Kontrollues kontrasti ngjyrash',
              topImageAlt: 'Kontrollues kontrasti ngjyrash Arteon',
              topImageSrc: '/assets/tools/narzedzia-tester-kontrastu-kolorow-wcag.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    Kontrolloni nese ngjyrat e tekstit dhe sfondit jane te lexueshme. Vendosni kodet e ngjyrave, shikoni raportin e kontrastit sipas <strong>WCAG</strong> dhe perdorni funksionin{' '}
                    <strong>Match</strong> per korrigjim automatik.
                  </p>
                  <div className="mt-4">
                    <Button arrow link="/sq/mjetet/kontrollues-kontrasti-ngjyrave">
                      Hap mjetin
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiPantoneLine className="h-8 w-8" />,
              title: 'Nxjerres ngjyrash nga imazhi',
              topImageAlt: 'Nxjerres ngjyrash nga imazhi Arteon',
              topImageSrc: '/assets/tools/narzedzia-generator-palety-kolorow-z-obrazu.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Ngarkoni nje foto ose logo -- mjeti do te nxjerre ngjyrat dominuese. Kopjoni kodet HEX me nje klikim dhe perdorni kudo.</p>
                  <div className="mt-4">
                    <Button arrow link="/sq/mjetet/nxjerres-ngjyrash-nga-imazhi">
                      Hap mjetin
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiPaletteLine className="h-8 w-8" />,
              title: 'Gjenerues paletash ngjyrash',
              topImageAlt: 'Gjenerues paletash ngjyrash Arteon',
              topImageSrc: '/assets/tools/narzedzia-generator-palet-kolorow-online.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Zgjidhni nje ngjyre baze dhe krijoni 9 paleta ngjyrash: monokromatike, komplementare, triadike, pastel, te erreta dhe me shume. Kopjoni kodet HEX me nje klikim.</p>
                  <div className="mt-4">
                    <Button arrow link="/sq/mjetet/gjenerues-paletash-ngjyrash">
                      Hap mjetin
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />
        <Gap variant="line" />
        <SectionInfo title="Cfare jane mjetet e Arteon?">
          <p className="mb-4">
            10 mjete falas per pergatitjen e materialeve per faqe interneti, media sociale dhe printim -- konvertues WebP, gjenerues favicon, numerues teksti, nxjerres ngjyrash, gjenerues paletash dhe
            kod QR.
          </p>
          <p>Te gjitha mjetet funksionojne ne shfletues -- skedaret nuk dergohen kurre ne server. Perdorni pa regjistrim dhe pa kufizime.</p>
        </SectionInfo>
        <Gap variant="line" />
        <SectionSteps
          title="Pse te perdorni mjetet e Arteon?"
          grid="two"
          items={[
            {
              icon: <RiShieldCheckLine className="h-6 w-6" />,
              title: 'Privatesi e plote',
              description: 'Te gjitha mjetet perpunojne skedaret lokalisht ne shfletues. Asgje nuk dergohet ne server -- te dhenat zhduken kur mbyllni skedarin.',
            },
            {
              icon: <RiInfinityFill className="h-6 w-6" />,
              title: 'Pa kufizime perdorimi',
              description: 'Perdorni pa kufizime -- pa limit ditor, pa limit skedaresh, pa limit konvertimesh. Sa here te deshironi.',
            },
            { icon: <RiLockLine className="h-6 w-6" />, title: 'Pa regjistrim', description: 'Nuk keni nevoje per llogari. Hapni mjetin, perdorni, perfundoni.' },
            { icon: <RiGlobalLine className="h-6 w-6" />, title: 'E disponueshme ne shqip', description: 'Te gjitha mjetet jane te disponueshme ne shqip -- nderfaqja, udhezimet dhe mesazhet.' },
          ]}
        />
        <Gap variant="line" />
        <FaqPanels items={faqItems} title="Pyetjet me te shpeshta per mjetet tona" />
        <Gap size="sm" />
      </Wrapper>
      <Script id="ld-json-tools-sq" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(schema)}
      </Script>
    </>
  );
}
