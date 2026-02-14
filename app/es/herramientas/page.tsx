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
  title: 'Herramientas online gratuitas | Imágenes, SEO, colores, favicon',
  description:
    '10 herramientas online gratuitas: convertidor WebP, generador de favicon, contador de texto, extractor de colores y códigos QR. Para sitios web, redes sociales e impresión. Sin registro.',
  alternates: getToolsIndexAlternates('es'),
  openGraph: {
    title: 'Herramientas online gratuitas | Imágenes, SEO, colores, favicon',
    description:
      '10 herramientas online gratuitas: convertidor WebP, generador de favicon, contador de texto, extractor de colores y códigos QR. Para sitios web, redes sociales e impresión. Sin registro.',
    url: toAbsoluteUrl('/es/herramientas'),
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
  name: 'Herramientas online gratuitas',
  description:
    '10 herramientas online gratuitas: convertidor WebP, generador de favicon, contador de texto, extractor de colores y códigos QR. Para sitios web, redes sociales e impresión. Sin registro.',
  url: toAbsoluteUrl('/es/herramientas'),
  inLanguage: 'es',
  isPartOf: {
    '@type': 'WebSite',
    name: 'Arteon Agency',
    url: siteUrl,
  },
  about: [
    { '@type': 'Thing', name: 'Optimización de imágenes' },
    { '@type': 'Thing', name: 'SEO' },
    { '@type': 'Thing', name: 'Colores y branding' },
    { '@type': 'Thing', name: 'Generadores online' },
  ],
  mainEntity: {
    '@type': 'ItemList',
    numberOfItems: 10,
    itemListElement: [
      {
        '@type': 'WebApplication',
        position: 1,
        name: 'Convertidor de JPG y PNG a WebP online',
        description: 'Convertidor gratuito de JPG y PNG a WebP online. Reduzca el tamaño de las imágenes hasta un 35\u00a0% sin perder calidad. Sin registro, sin envío de archivos a servidores.',
        url: toAbsoluteUrl('/es/herramientas/convertidor-jpg-png-a-webp'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 2,
        name: 'Editor de imágenes en línea',
        description: 'Recorte y redimensione imágenes para redes sociales y sitios web. Formatos predefinidos, dimensiones personalizadas en píxeles y soporte para avatares circulares.',
        url: toAbsoluteUrl('/es/herramientas/editor-de-imagenes-en-linea'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 3,
        name: 'Generador de favicon online',
        description:
          'Generador de favicon gratuito. Cree favicon.ico e iconos PNG 16x16, 32x32, 180x180, 192x192 y 512x512 a partir de una sola imagen, conforme a los requisitos de navegadores y Lighthouse.',
        url: toAbsoluteUrl('/es/herramientas/generador-de-favicon-gratuito'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 4,
        name: 'Verificador de longitud de meta título y descripción',
        description:
          'Verificador de longitud de meta título y meta descripción con vista previa de Google. Ajuste el número de caracteres y el ancho en píxeles para que los títulos y descripciones no se trunquen.',
        url: toAbsoluteUrl('/es/herramientas/verificador-de-meta-titulo-y-descripcion'),
        applicationCategory: 'DeveloperApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 5,
        name: 'Generador de firma de correo HTML',
        description: 'Generador gratuito de firma de correo HTML. Añada datos de contacto, enlace CTA y perfiles de redes sociales y copie el código HTML listo en Gmail o Outlook.',
        url: toAbsoluteUrl('/es/herramientas/generador-de-firma-de-correo-gratuito'),
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 6,
        name: 'Comprobador de contraste y legibilidad de colores',
        description:
          'Compruebe el contraste y la legibilidad de los colores de texto y fondo. La herramienta calcula la relación de contraste según WCAG y ayuda a elegir el color adecuado con coincidencia automática.',
        url: toAbsoluteUrl('/es/herramientas/comprobador-de-contraste-de-colores'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 7,
        name: 'Extractor de colores de imagen online',
        description: 'Extractor de colores de imagen gratuito. Suba una foto o logotipo y obtenga una paleta de hasta 12 colores dominantes con códigos HEX y RGB.',
        url: toAbsoluteUrl('/es/herramientas/extractor-de-colores-de-imagen'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 8,
        name: 'Generador de paletas de colores online',
        description: 'Genere paletas de colores a partir de un solo color base. Esquemas monocromático, triádico, análogo, complementario, además de paletas pastel, oscura y minimalista.',
        url: toAbsoluteUrl('/es/herramientas/generador-de-paletas-de-colores'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 9,
        name: 'Contador de palabras y caracteres online',
        description:
          'Contador gratuito de palabras y caracteres con evaluación de extensión del texto. Compruebe si la extensión de su texto es adecuada para una página de inicio, descripción de servicio, artículo de blog o descripción de producto.',
        url: toAbsoluteUrl('/es/herramientas/contador-de-palabras-y-caracteres'),
        applicationCategory: 'DeveloperApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 10,
        name: 'Generador de códigos QR online',
        description: 'Generador gratuito de códigos QR online. Cree códigos QR para sitios web, vCards, menús de restaurante o folletos. Exporte a PNG y SVG, sin registro, sin límites.',
        url: toAbsoluteUrl('/es/herramientas/generador-de-codigos-qr-gratuito'),
        applicationCategory: 'UtilityApplication',
        operatingSystem: 'Any',
      },
    ],
  },
};

const faqItems = [
  {
    question: '¿Cuánto cuestan las herramientas?',
    answer: 'Nada. Todas las herramientas son gratuitas, sin suscripciones ni costes ocultos.',
  },
  {
    question: '¿Se envían mis archivos a un servidor?',
    answer: 'No. Todas las herramientas se ejecutan completamente en su navegador. Los archivos nunca salen de su ordenador y no se almacenan en ningún sitio.',
  },
  {
    question: '¿Necesito una cuenta?',
    answer: 'No. Puede usarlas de inmediato, sin iniciar sesión ni crear una cuenta.',
  },
  {
    question: '¿Hay un límite de uso?',
    answer: 'No. Úselas sin restricciones: sin límites diarios, sin límites de archivos, sin límites de conversiones.',
  },
  {
    question: '¿Para qué sirven estas herramientas?',
    answer:
      'Ayudan a preparar materiales para sitios web, redes sociales e impresión: optimizar imágenes, crear favicons, verificar la extensión del texto, generar códigos QR, elegir colores y comprobar su legibilidad.',
  },
  {
    question: '¿Las herramientas funcionan en el móvil?',
    answer: 'Sí, aunque algunas (convertidor WebP, generador de favicon) funcionan mejor en escritorio debido al procesamiento de archivos grandes.',
  },
];

export default function ToolsIndexPage() {
  return (
    <>
      <HeroBanner
        title="Herramientas online gratuitas"
        description="Convertidor de imágenes, generador de favicon, contador de texto, herramientas de color y códigos QR. Sin registro, sin límites: todo se ejecuta en su navegador."
        backgroundImage="/assets/arteon-logo-on-mockup.webp"
        overlay="black"
      />

      <Wrapper>
        <Gap size="sm" />

        <SectionSteps
          title="Imágenes y favicons"
          description="Herramientas para preparar fotos, gráficos e iconos para sitios web y redes sociales."
          grid="three"
          items={[
            {
              icon: <RiImageEditLine className="h-8 w-8" />,
              title: 'Convertidor JPG/PNG a WebP',
              topImageAlt: 'Convertidor JPG/PNG a WebP Arteon',
              topImageSrc: '/assets/tools/narzedzia-jpg-png-na-webp-bez-limitu.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    Reduzca el tamaño de las imágenes convirtiéndolas de JPG o PNG a formato <strong>WebP</strong>. Descargue los archivos, añádalos a su sitio web y mejore la velocidad de carga.
                  </p>
                  <div className="mt-4">
                    <Button arrow link="/es/herramientas/convertidor-jpg-png-a-webp">
                      Abrir herramienta
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiCropLine className="h-8 w-8" />,
              title: 'Editor de imágenes en línea',
              topImageAlt: 'Editor de imágenes en línea Arteon',
              topImageSrc: '/assets/tools/narzedzia-zmiana-rozmiaru-i-kadrowanie-zdjecia.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    Prepare el recorte perfecto para redes sociales o su sitio web. Elija un formato predefinido o introduzca dimensiones en píxeles personalizadas y descargue la imagen en PNG, JPG o
                    WebP.
                  </p>
                  <div className="mt-4">
                    <Button arrow link="/es/herramientas/editor-de-imagenes-en-linea">
                      Abrir herramienta
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiAppsLine className="h-8 w-8" />,
              title: 'Generador de favicon e iconos',
              topImageAlt: 'Generador de favicon Arteon',
              topImageSrc: '/assets/tools/narzedzia-darmowy-generator-favicon-ico.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    Genere <strong>favicon.ico</strong> e iconos PNG 180x180, 192x192 y 512x512 a partir de una sola imagen, conforme a los requisitos de navegadores y Lighthouse.
                  </p>
                  <div className="mt-4">
                    <Button arrow link="/es/herramientas/generador-de-favicon-gratuito">
                      Abrir herramienta
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />

        <Gap size="sm" />

        <SectionSteps
          title="Texto y SEO"
          description="Herramientas para comprobar la extensión del texto, las meta etiquetas y la vista previa de su página en los resultados de búsqueda."
          grid="three"
          items={[
            {
              icon: <RiFileTextLine className="h-8 w-8" />,
              title: 'Verificador de meta título y descripción',
              topImageAlt: 'Verificador de meta título y descripción Arteon',
              topImageSrc: '/assets/tools/narzedzia-licznik-dlugosci-meta-title-i-description.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    Compruebe el número de caracteres, el número de palabras, el ancho en píxeles y vea cómo se muestra su página en Google. Evite títulos y descripciones truncados y ajuste su
                    contenido SEO.
                  </p>
                  <div className="mt-4">
                    <Button arrow link="/es/herramientas/verificador-de-meta-titulo-y-descripcion">
                      Abrir herramienta
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiArticleLine className="h-8 w-8" />,
              title: 'Contador de palabras y caracteres',
              topImageAlt: 'Contador de palabras y caracteres Arteon',
              topImageSrc: '/assets/tools/narzedzia-licznik-slow-i-znakow.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    Compruebe la extensión del texto y evalúe si es adecuada para una página de inicio, descripción de servicio, artículo de blog o descripción de producto. La herramienta cuenta
                    palabras, caracteres, párrafos y tiempo de lectura.
                  </p>
                  <div className="mt-4">
                    <Button arrow link="/es/herramientas/contador-de-palabras-y-caracteres">
                      Abrir herramienta
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />

        <Gap size="sm" />

        <SectionSteps
          title="Correo electrónico y comunicación"
          description="Herramientas que ayudan a organizar la comunicación por correo electrónico y la imagen de marca."
          grid="three"
          items={[
            {
              icon: <RiMailLine className="h-8 w-8" />,
              title: 'Generador de firma de correo HTML gratuito',
              topImageAlt: 'Generador de firma de correo HTML gratuito Arteon',
              topImageSrc: '/assets/tools/narzedzia-darmowy-generator-stopki-mailowej.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Cree una firma de correo profesional en minutos. Introduzca sus datos, elija los colores y copie el código HTML listo en Gmail, Outlook y otros clientes de correo.</p>
                  <div className="mt-4">
                    <Button arrow link="/es/herramientas/generador-de-firma-de-correo-gratuito">
                      Abrir herramienta
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />

        <Gap size="sm" />

        <SectionSteps
          title="Códigos QR"
          description="Generador de códigos QR para sitios web, tarjetas de visita, menús y materiales impresos."
          grid="three"
          items={[
            {
              icon: <RiQrCodeLine className="h-8 w-8" />,
              title: 'Generador de códigos QR gratuito',
              topImageAlt: 'Generador de códigos QR gratuito Arteon',
              topImageSrc: '/assets/tools/narzedzia-generator-kodu-qr.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Cree un código QR para un sitio web, vCard, menú de restaurante o folleto. Exporte a PNG y SVG, sin registro, sin límites.</p>
                  <div className="mt-4">
                    <Button arrow link="/es/herramientas/generador-de-codigos-qr-gratuito">
                      Abrir herramienta
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />

        <Gap size="sm" />

        <SectionSteps
          title="Colores y accesibilidad"
          description="Herramientas para trabajar con colores, contraste y accesibilidad WCAG."
          grid="three"
          items={[
            {
              icon: <RiContrast2Line className="h-8 w-8" />,
              title: 'Comprobador de contraste y legibilidad de colores',
              topImageAlt: 'Comprobador de contraste de colores Arteon',
              topImageSrc: '/assets/tools/narzedzia-tester-kontrastu-kolorow-wcag.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    Compruebe si los colores de texto y fondo son legibles. Introduzca los códigos de color, vea la relación de contraste según <strong>WCAG</strong> y utilice la función de{' '}
                    <strong>coincidencia</strong> para la corrección automática.
                  </p>
                  <div className="mt-4">
                    <Button arrow link="/es/herramientas/comprobador-de-contraste-de-colores">
                      Abrir herramienta
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiPantoneLine className="h-8 w-8" />,
              title: 'Extractor de colores de imagen',
              topImageAlt: 'Extractor de colores de imagen Arteon',
              topImageSrc: '/assets/tools/narzedzia-generator-palety-kolorow-z-obrazu.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Suba una foto o logotipo y la herramienta extraerá los colores dominantes. Copie los códigos HEX con un solo clic y Úselos donde quiera.</p>
                  <div className="mt-4">
                    <Button arrow link="/es/herramientas/extractor-de-colores-de-imagen">
                      Abrir herramienta
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiPaletteLine className="h-8 w-8" />,
              title: 'Generador de paletas de colores',
              topImageAlt: 'Generador de paletas de colores Arteon',
              topImageSrc: '/assets/tools/narzedzia-generator-palet-kolorow-online.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Elija un color base y genere 9 paletas de colores: monocromática, complementaria, triádica, pastel, oscura y más. Copie los códigos HEX con un solo clic.</p>
                  <div className="mt-4">
                    <Button arrow link="/es/herramientas/generador-de-paletas-de-colores">
                      Abrir herramienta
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />

        <Gap variant="line" />

        <SectionInfo title="¿Qué son las herramientas de Arteon?">
          <p className="mb-4">
            Un conjunto de 10 herramientas online gratuitas para preparar materiales para sitios web, redes sociales e impresión. Convertidor de imágenes a WebP, generador de favicon, contador de
            extensión de texto, extractor de colores, generador de paletas y códigos QR.
          </p>
          <p>Todas las herramientas se ejecutan en su navegador: los archivos nunca se envían a un servidor. Úselas sin registro y sin límites.</p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionSteps
          title="¿Por qué usar las herramientas de Arteon?"
          grid="two"
          items={[
            {
              icon: <RiShieldCheckLine className="h-6 w-6" />,
              title: 'Privacidad total',
              description: 'Todas las herramientas procesan los archivos localmente en su navegador. Nada se envía a un servidor: los datos desaparecen al cerrar la pestaña.',
            },
            {
              icon: <RiInfinityFill className="h-6 w-6" />,
              title: 'Sin límites de uso',
              description: 'Úselas sin restricciones: sin límites diarios, sin límites de archivos, sin límites de conversiones. Tantas veces como necesite.',
            },
            {
              icon: <RiLockLine className="h-6 w-6" />,
              title: 'Sin registro',
              description: 'No necesita una cuenta. Abra la herramienta, Úsela y listo.',
            },
            {
              icon: <RiGlobalLine className="h-6 w-6" />,
              title: 'Disponible en español',
              description: 'Todas las herramientas están disponibles en español: interfaz, instrucciones y mensajes.',
            },
          ]}
        />

        <Gap variant="line" />

        <FaqPanels items={faqItems} title="Preguntas frecuentes sobre nuestras herramientas" />

        <Gap size="sm" />
      </Wrapper>

      <Script id="ld-json-tools-es" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(schema)}
      </Script>
    </>
  );
}
