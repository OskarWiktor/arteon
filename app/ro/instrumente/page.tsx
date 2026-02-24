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
  title: 'Instrumente online gratuite | Imagini, SEO, culori, favicon',
  description: '10 instrumente gratuite: convertor WebP, generator favicon, contor de text, extractor de culori și coduri QR. Pentru site-uri web și social media.',
  alternates: getToolsIndexAlternates('ro'),
  openGraph: {
    title: 'Instrumente online gratuite | Imagini, SEO, culori, favicon',
    description: '10 instrumente gratuite: convertor WebP, generator favicon, contor de text, extractor de culori și coduri QR. Pentru site-uri web și social media.',
    url: toAbsoluteUrl('/ro/instrumente'),
    type: 'website',
    images: [
      {
        url: toAbsoluteUrl('/assets/arteon-logo-on-mockup.webp'),
        width: 1200,
        height: 630,
      },
    ],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Instrumente online gratuite',
  description: '10 instrumente gratuite: convertor WebP, generator favicon, contor de text, extractor de culori și coduri QR. Pentru site-uri web și social media.',
  url: toAbsoluteUrl('/ro/instrumente'),
  inLanguage: 'ro',
  isPartOf: {
    '@type': 'WebSite',
    name: 'Arteon Agency',
    url: siteUrl,
  },
  about: [
    { '@type': 'Thing', name: 'Optimizarea imaginilor' },
    { '@type': 'Thing', name: 'SEO' },
    { '@type': 'Thing', name: 'Culori și branding' },
    { '@type': 'Thing', name: 'Generatoare online' },
  ],
  mainEntity: {
    '@type': 'ItemList',
    numberOfItems: 10,
    itemListElement: [
      {
        '@type': 'WebApplication',
        position: 1,
        name: 'Convertor JPG și PNG în WebP online',
        description: 'Convertor gratuit online JPG și PNG în WebP. Reduceți dimensiunea fișierelor cu până la 35% fără pierderi vizibile de calitate. Fără înregistrare — fișierele rămân în browser.',
        url: toAbsoluteUrl('/ro/instrumente/convertor-jpg-png-in-webp'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 2,
        name: 'Editor de imagini online',
        description: 'Decupați și redimensionați imagini pentru social media și site-uri web. Formate predefinite, dimensiuni personalizate și suport pentru avatare rotunde.',
        url: toAbsoluteUrl('/ro/instrumente/editor-de-imagini'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 3,
        name: 'Generator de favicon online',
        description: 'Generator gratuit de favicon online. Creați favicon.ico și pictograme PNG (16×16 până la 512×512) dintr-o singură imagine — conform cerințelor browserelor și Lighthouse.',
        url: toAbsoluteUrl('/ro/instrumente/generator-favicon-gratuit'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 4,
        name: 'Verificator meta titlu și descriere',
        description: 'Verificator de lungime meta titlu și descriere cu previzualizare Google. Arată numărul de caractere și lățimea în pixeli pentru a evita trunchierea în rezultatele căutării.',
        url: toAbsoluteUrl('/ro/instrumente/verificator-meta-titlu-si-descriere'),
        applicationCategory: 'DeveloperApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 5,
        name: 'Generator de semnătură e-mail HTML',
        description: 'Generator gratuit de semnătură e-mail HTML. Introduceți datele de contact, linkul CTA și profilurile social media, apoi copiați codul HTML în Gmail sau Outlook.',
        url: toAbsoluteUrl('/ro/instrumente/generator-semnatura-email-gratuit'),
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 6,
        name: 'Verificator contrast culori',
        description: 'Verificați contrastul și lizibilitatea culorilor textului și fundalului conform WCAG. Calculează raportul de contrast și ajută cu ajustarea automată a culorilor.',
        url: toAbsoluteUrl('/ro/instrumente/verificator-contrast-culori'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 7,
        name: 'Extractor de culori din imagine online',
        description: 'Extractor gratuit de culori online. Încărcați o fotografie sau un logo și obțineți o paletă cu până la 12 culori dominante (HEX și RGB).',
        url: toAbsoluteUrl('/ro/instrumente/extractor-culori-din-imagine'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 8,
        name: 'Generator de palete de culori online',
        description: 'Generați palete de culori dintr-o culoare de bază. Monocromatică, triadică, analogă, complementară și multe altele — plus variante pastel, întunecate și minimaliste.',
        url: toAbsoluteUrl('/ro/instrumente/generator-de-palete-de-culori'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 9,
        name: 'Contor de cuvinte și caractere online',
        description:
          'Contor gratuit de cuvinte și caractere cu evaluarea lungimii. Verificați dacă lungimea textului este potrivită pentru pagina principală, pagina de servicii, articol de blog sau descriere de produs.',
        url: toAbsoluteUrl('/ro/instrumente/contor-cuvinte-si-caractere'),
        applicationCategory: 'DeveloperApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 10,
        name: 'Generator de coduri QR online',
        description: 'Generator gratuit de coduri QR online. Creați coduri QR pentru site-uri web, vCard-uri, meniuri sau pliante. Export PNG și SVG, fără înregistrare, fără limite.',
        url: toAbsoluteUrl('/ro/instrumente/generator-coduri-qr-gratuit'),
        applicationCategory: 'UtilityApplication',
        operatingSystem: 'Any',
      },
    ],
  },
};

const faqItems = [
  {
    question: 'Cât costă instrumentele?',
    answer: 'Nimic. Toate instrumentele sunt gratuite, fără abonamente și fără taxe ascunse.',
  },
  {
    question: 'Fișierele mele sunt trimise pe un server?',
    answer: 'Nu. Toate instrumentele rulează complet în browserul dvs. Fișierele nu părăsesc niciodată computerul și nu sunt stocate nicăieri.',
  },
  {
    question: 'Am nevoie de un cont?',
    answer: 'Nu. Puteți folosi instrumentele imediat, fără autentificare sau creare de cont.',
  },
  {
    question: 'Există o limită de utilizare?',
    answer: 'Nu. Utilizați fără restricții — fără limite zilnice, fără limite de fișiere, fără limite de conversii.',
  },
  {
    question: 'Pentru ce sunt aceste instrumente?',
    answer:
      'Ajută la pregătirea materialelor pentru site-uri web, social media și tipărire: optimizarea imaginilor, crearea favicon-urilor, verificarea lungimii textului, generarea codurilor QR, alegerea culorilor și verificarea lizibilității.',
  },
  {
    question: 'Instrumentele funcționează pe mobil?',
    answer: 'Da, dar unele instrumente (convertorul WebP, generatorul de favicon) funcționează mai bine pe desktop deoarece procesează fișiere mai mari.',
  },
];

export default function ToolsIndexPage() {
  return (
    <>
      <HeroBanner
        title="Instrumente online gratuite"
        description="Convertor de imagini, generator favicon, contor de text, instrumente pentru culori și coduri QR. Fără înregistrare, fără limite — totul rulează în browserul dvs."
        backgroundImage="/assets/arteon-logo-on-mockup.webp"
        overlay="black"
      />

      <Wrapper>
        <Gap size="sm" />

        <SectionSteps
          title="Imagini și favicon-uri"
          description="Instrumente pentru pregătirea fotografiilor, graficelor și pictogramelor pentru site-uri web și social media."
          grid="three"
          items={[
            {
              icon: <RiImageEditLine className="h-8 w-8" />,
              title: 'Convertor JPG/PNG în WebP',
              topImageAlt: 'Convertor JPG/PNG în WebP Arteon',
              topImageSrc: '/assets/tools/jpg-png-to-webp-converter/convertor-jpg-png-in-webp-ro.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    Convertiți imagini JPG sau PNG în format <strong>WebP</strong> și reduceți dimensiunea fișierelor. Timp de încărcare mai rapid pentru site-ul dvs.
                  </p>
                  <div className="mt-4">
                    <Button arrow link="/ro/instrumente/convertor-jpg-png-in-webp">
                      Deschide instrumentul
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiCropLine className="h-8 w-8" />,
              title: 'Editor de imagini',
              topImageAlt: 'Editor de imagini Arteon',
              topImageSrc: '/assets/tools/free-image-editor-crop-resize-and-convert/editor-de-imagini-ro.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Decupați imaginile perfect pentru social media sau site-ul dvs. Alegeți un format predefinit sau introduceți dimensiuni personalizate — descărcați în PNG, JPG sau WebP.</p>
                  <div className="mt-4">
                    <Button arrow link="/ro/instrumente/editor-de-imagini">
                      Deschide instrumentul
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiAppsLine className="h-8 w-8" />,
              title: 'Generator favicon și pictograme',
              topImageAlt: 'Generator favicon Arteon',
              topImageSrc: '/assets/tools/favicon-generator/generator-favicon-gratuit-ro.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    Generați <strong>favicon.ico</strong> și pictograme PNG 180x180, 192x192 și 512x512 dintr-o singură imagine — conform cerințelor browserelor și Lighthouse.
                  </p>
                  <div className="mt-4">
                    <Button arrow link="/ro/instrumente/generator-favicon-gratuit">
                      Deschide instrumentul
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />

        <Gap size="sm" />

        <SectionSteps
          title="Text și SEO"
          description="Instrumente pentru verificarea lungimii textului, a etichetelor meta și previzualizarea paginii în rezultatele căutării."
          grid="three"
          items={[
            {
              icon: <RiFileTextLine className="h-8 w-8" />,
              title: 'Verificator meta titlu și descriere',
              topImageAlt: 'Verificator meta titlu și descriere Arteon',
              topImageSrc: '/assets/tools/free-meta-title-and-description-checker-pixel-width/verificator-meta-titlu-si-descriere-ro.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Verificați numărul de caractere, numărul de cuvinte și lățimea în pixeli — cu previzualizare Google. Evitați titlurile și descrierile trunchiate în rezultatele căutării.</p>
                  <div className="mt-4">
                    <Button arrow link="/ro/instrumente/verificator-meta-titlu-si-descriere">
                      Deschide instrumentul
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiArticleLine className="h-8 w-8" />,
              title: 'Contor de cuvinte și caractere',
              topImageAlt: 'Contor de cuvinte și caractere Arteon',
              topImageSrc: '/assets/tools/word-and-character-counter-with-text-formatting-tools/contor-cuvinte-si-caractere-ro.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    Verificați lungimea textului și evaluați dacă este potrivită pentru o pagină principală, pagină de servicii, articol de blog sau descriere de produs. Instrumentul numără cuvinte,
                    caractere, paragrafe și timpul de citire.
                  </p>
                  <div className="mt-4">
                    <Button arrow link="/ro/instrumente/contor-cuvinte-si-caractere">
                      Deschide instrumentul
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />

        <Gap size="sm" />

        <SectionSteps
          title="E-mail și comunicare"
          description="Instrumente pentru o comunicare profesională prin e-mail și o imagine de brand coerentă."
          grid="three"
          items={[
            {
              icon: <RiMailLine className="h-8 w-8" />,
              title: 'Generator gratuit de semnătură e-mail HTML',
              topImageAlt: 'Generator gratuit de semnătură e-mail HTML Arteon',
              topImageSrc: '/assets/tools/free-html-email-signature-generator/generator-semnatura-email-gratuit-ro.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Creați o semnătură e-mail profesională în câteva minute. Introduceți datele, alegeți culorile și copiați codul HTML în Gmail, Outlook sau alt client de e-mail.</p>
                  <div className="mt-4">
                    <Button arrow link="/ro/instrumente/generator-semnatura-email-gratuit">
                      Deschide instrumentul
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />

        <Gap size="sm" />

        <SectionSteps
          title="Coduri QR"
          description="Generator de coduri QR pentru site-uri web, cărți de vizită, meniuri și materiale tipărite."
          grid="three"
          items={[
            {
              icon: <RiQrCodeLine className="h-8 w-8" />,
              title: 'Generator gratuit de coduri QR',
              topImageAlt: 'Generator gratuit de coduri QR Arteon',
              topImageSrc: '/assets/tools/qr-code-generator/generator-coduri-qr-gratuit-ro.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Creați un cod QR pentru un site web, vCard, meniu de restaurant sau pliant. Export PNG și SVG — fără înregistrare, fără limite.</p>
                  <div className="mt-4">
                    <Button arrow link="/ro/instrumente/generator-coduri-qr-gratuit">
                      Deschide instrumentul
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />

        <Gap size="sm" />

        <SectionSteps
          title="Culori și accesibilitate"
          description="Instrumente pentru lucrul cu culori, contrast și accesibilitate WCAG."
          grid="three"
          items={[
            {
              icon: <RiContrast2Line className="h-8 w-8" />,
              title: 'Verificator contrast culori',
              topImageAlt: 'Verificator contrast culori Arteon',
              topImageSrc: '/assets/tools/color-contrast-and-readability-checker/verificator-contrast-culori-ro.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    Verificați dacă culorile textului și fundalului sunt lizibile. Introduceți codurile de culoare, vizualizați raportul de contrast conform <strong>WCAG</strong> și utilizați funcția{' '}
                    <strong>Match</strong> pentru corecție automată.
                  </p>
                  <div className="mt-4">
                    <Button arrow link="/ro/instrumente/verificator-contrast-culori">
                      Deschide instrumentul
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiPantoneLine className="h-8 w-8" />,
              title: 'Extractor de culori din imagine',
              topImageAlt: 'Extractor de culori din imagine Arteon',
              topImageSrc: '/assets/tools/image-color-extractor/extractor-culori-din-imagine-ro.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Încărcați o fotografie sau un logo — instrumentul va extrage culorile dominante. Copiați codurile HEX cu un singur clic și utilizați-le oriunde.</p>
                  <div className="mt-4">
                    <Button arrow link="/ro/instrumente/extractor-culori-din-imagine">
                      Deschide instrumentul
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiPaletteLine className="h-8 w-8" />,
              title: 'Generator de palete de culori',
              topImageAlt: 'Generator de palete de culori Arteon',
              topImageSrc: '/assets/tools/color-palette-generator/generator-de-palete-de-culori-ro.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Alegeți o culoare de bază și generați 9 palete de culori: monocromatică, complementară, triadică, pastel, întunecată și multe altele. Copiați codurile HEX cu un singur clic.</p>
                  <div className="mt-4">
                    <Button arrow link="/ro/instrumente/generator-de-palete-de-culori">
                      Deschide instrumentul
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />

        <Gap variant="line" />

        <SectionInfo title="Ce sunt instrumentele Arteon?">
          <p className="mb-4">
            10 instrumente online gratuite pentru pregătirea materialelor pentru site-uri web, social media și tipărire — convertor WebP, generator favicon, contor de text, extractor de culori,
            generator de palete și coduri QR.
          </p>
          <p>Toate instrumentele rulează în browserul dvs. — fișierele nu sunt trimise niciodată pe un server. Utilizați-le fără înregistrare și fără limite.</p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionSteps
          title="De ce să folosiți instrumentele Arteon?"
          grid="two"
          items={[
            {
              icon: <RiShieldCheckLine className="h-6 w-6" />,
              title: 'Confidențialitate totală',
              description: 'Toate instrumentele procesează fișierele local în browserul dvs. Nimic nu este trimis pe un server — datele dispar când închideți tab-ul.',
            },
            {
              icon: <RiInfinityFill className="h-6 w-6" />,
              title: 'Fără limite de utilizare',
              description: 'Utilizați fără restricții — fără limite zilnice, fără limite de fișiere, fără limite de conversii. De câte ori aveți nevoie.',
            },
            {
              icon: <RiLockLine className="h-6 w-6" />,
              title: 'Fără înregistrare',
              description: 'Nu este necesar un cont. Deschideți instrumentul, utilizați-l și gata.',
            },
            {
              icon: <RiGlobalLine className="h-6 w-6" />,
              title: 'Disponibil în română',
              description: 'Toate instrumentele sunt disponibile în limba română — interfață, instrucțiuni și mesaje.',
            },
          ]}
        />

        <Gap variant="line" />

        <FaqPanels items={faqItems} title="Întrebări frecvente despre instrumentele noastre" />

        <Gap size="sm" />
      </Wrapper>

      <Script id="ld-json-tools-ro" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(schema)}
      </Script>
    </>
  );
}
