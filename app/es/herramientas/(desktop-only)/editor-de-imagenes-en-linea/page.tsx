import Script from 'next/script';
import HeroBanner from '@/components/sections/HeroBanner';
import Breadcrumbs from '@/components/sections/BreadCrumbs';
import ImageResizeTool from '@/components/sections/tools/ImageResizeTool';
import ToolsCarousel from '@/components/sections/tools/ToolsCarousel';
import FaqPanels from '@/components/ui/FaqPanels';
import Gap from '@/components/ui/Gap';
import SectionInfo from '@/components/ui/sections/SectionInfo';
import SectionSteps from '@/components/ui/sections/SectionSteps';
import SectionDemo from '@/components/ui/sections/SectionDemo';
import SectionTabs from '@/components/ui/sections/SectionTabs';
import Badge from '@/components/ui/Badge';
import Wrapper from '@/components/ui/Wrapper';
import ToolEditorLayout from '@/components/ui/ToolEditorLayout';
import { toAbsoluteUrl, siteUrl } from '@/utils/absoluteUrl';
import type { Metadata } from 'next';
import AdSense from '@/components/ui/AdSense';
import { RiInstagramLine, RiFacebookLine, RiLinkedinLine, RiImageLine, RiCropLine, RiLayoutGridLine, RiFileImageLine, RiAspectRatioLine } from 'react-icons/ri';

export const metadata: Metadata = {
  title: 'Editor de imágenes gratuito online - redimensionar, recortar y convertir',
  description: 'Redimensione imágenes online gratis. Recorte para Instagram, Facebook, LinkedIn. Convierta JPG a WebP. Cree avatares circulares. Procesamiento local en el navegador.',
  alternates: {
    canonical: toAbsoluteUrl('/es/herramientas/editor-de-imagenes-en-linea'),
    languages: {
      pl: toAbsoluteUrl('/narzedzia/edytor-zdjec-online'),
      en: toAbsoluteUrl('/en/tools/online-image-editor'),
      de: toAbsoluteUrl('/de/werkzeuge/online-bildeditor'),
      es: toAbsoluteUrl('/es/herramientas/editor-de-imagenes-en-linea'),
      fr: toAbsoluteUrl('/fr/outils/editeur-d-images-en-ligne'),
    },
  },
  openGraph: {
    title: 'Editor de imágenes gratuito online - redimensionar, recortar y convertir',
    description: 'Redimensione imágenes online gratis. Recorte para Instagram, Facebook, LinkedIn. Convierta JPG a WebP. Cree avatares circulares. Procesamiento local en el navegador.',
    url: toAbsoluteUrl('/es/herramientas/editor-de-imagenes-en-linea'),
    type: 'website',
    images: [{ url: toAbsoluteUrl('/assets/tools/narzedzia-zmiana-rozmiaru-i-kadrowanie-zdjecia.webp'), width: 1200, height: 630 }],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Editor de imágenes gratuito online',
  alternateName: [
    'Redimensionador de imágenes online',
    'Recortador de imágenes online',
    'Herramienta de tamaño de imagen para Instagram',
    'Herramienta de tamaño de imagen para Facebook',
    'Convertidor de JPG a WebP',
    'Herramienta de foto de perfil circular',
    'Compresión de imágenes online',
  ],
  url: toAbsoluteUrl('/es/herramientas/editor-de-imagenes-en-linea'),
  applicationCategory: 'MultimediaApplication',
  applicationSubCategory: 'ImageEditor',
  operatingSystem: 'Any',
  description:
    'Editor de imágenes gratuito online para redimensionar, recortar y convertir formatos. Formatos predefinidos para Instagram, Facebook y LinkedIn. Creación de avatares circulares. Exportación a JPG, PNG y WebP con control de calidad. Procesamiento local en el navegador.',
  featureList: [
    'Redimensionar imágenes a cualquier dimensión',
    'Recortar con selección de área interactiva',
    'Formatos predefinidos de Instagram (post cuadrado, post vertical, story, reels)',
    'Formatos predefinidos de Facebook (post, portada de página)',
    'Formatos predefinidos de LinkedIn (post, banner de perfil)',
    'Formatos predefinidos web (imagen OG, hero, banner, miniatura)',
    'Formas de recorte: rectángulo, cuadrado, círculo (avatar redondo)',
    'Cuadrícula 3x3 (regla de los tercios) con selección de color',
    'Zoom de recorte 100-300%',
    'Posición precisa de recorte (X, Y) con centrado',
    'Conversión de formato: JPG, PNG, WebP',
    'Control de calidad de compresión 60-100%',
    'Procesamiento local en el navegador',
    'Herramienta gratuita, sin registro',
  ],
  inLanguage: 'es',
  isAccessibleForFree: true,
  offers: { '@type': 'Offer', price: 0, priceCurrency: 'EUR' },
  publisher: { '@type': 'Organization', name: 'Arteon Agency', url: siteUrl },
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Cómo redimensionar y recortar una imagen para redes sociales',
  description: 'Cómo redimensionar una imagen para Instagram (1080x1080, 1080x1350, story), Facebook, LinkedIn e imagen OG. Conversión de JPG a WebP y creación de avatares circulares.',
  url: toAbsoluteUrl('/es/herramientas/editor-de-imagenes-en-linea'),
  step: [
    { '@type': 'HowToStep', name: 'Añada una imagen', text: 'Arrastre un archivo sobre el área designada o seleccione una imagen desde su dispositivo. Formatos admitidos: JPG, PNG, WebP.' },
    {
      '@type': 'HowToStep',
      name: 'Elija dimensiones o un formato predefinido',
      text: 'Introduzca las dimensiones objetivo en píxeles o seleccione un formato predefinido (p. ej., post de Instagram, portada de Facebook, imagen OG).',
    },
    { '@type': 'HowToStep', name: 'Ajuste el recorte', text: 'Mueva y amplíe la imagen para seleccionar la mejor área. El área brillante en la vista previa muestra exactamente lo que se guardará.' },
    { '@type': 'HowToStep', name: 'Elija formato y descargue', text: 'Seleccione el formato de archivo (JPG, PNG o WebP), configure la calidad de compresión y descargue la imagen terminada.' },
  ],
  publisher: { '@type': 'Organization', name: 'Arteon Agency', url: siteUrl },
};

const faqItems = [
  {
    question: '¿El editor maneja imágenes muy grandes?',
    answer:
      'Sí, aunque el procesamiento puede ser más lento para imágenes superiores a 4000×4000 píxeles; esto depende de la potencia del dispositivo y la memoria disponible del navegador. Todo el procesamiento se realiza localmente, sin enviar archivos a un servidor.',
    answerSchemaText: 'Sí. El procesamiento puede ser más lento por encima de 4000×4000 px. Todo el procesamiento es local.',
  },
  {
    question: '¿Qué formato de exportación elegir: JPG, PNG o WebP?',
    answer:
      'JPG es una buena elección para fotos con muchos colores y degradados: los archivos son pequeños con buena calidad. PNG preserva la máxima calidad y admite transparencia (p. ej., avatar circular). WebP combina las ventajas de ambos: archivos pequeños con alta calidad y soporte de transparencia.',
    answerSchemaText: 'JPG para fotos, PNG para transparencia, WebP combina archivos pequeños con alta calidad.',
  },
  {
    question: '¿Cómo crear una foto de perfil circular?',
    answer:
      'En la pestaña Formas de recorte, seleccione la opción Círculo. La herramienta cambiará automáticamente el formato a PNG o WebP (JPG no admite transparencia). El área fuera del círculo será transparente.',
    answerSchemaText: 'Seleccione Círculo en la pestaña Formas de recorte. El área fuera del círculo es transparente.',
  },
  {
    question: '¿Cuáles son las dimensiones de imagen para Instagram?',
    answer:
      'Instagram admite tres formatos principales: post cuadrado (1080×1080 px, proporción 1:1), post vertical (1080×1350 px, proporción 4:5) y story/reels (1080×1920 px, proporción 9:16). La herramienta tiene formatos predefinidos para cada una de estas dimensiones.',
    answerSchemaText: 'Post cuadrado: 1080×1080 px, post vertical: 1080×1350 px, story/reels: 1080×1920 px.',
  },
  {
    question: '¿Cómo funciona el deslizador de calidad?',
    answer:
      'El deslizador de calidad (60-100%) controla el nivel de compresión para los formatos JPG y WebP. Un valor más alto significa mejor calidad de imagen pero un archivo más grande. Para la mayoría de los usos en redes sociales, el valor óptimo es 70-85%.',
    answerSchemaText: 'El deslizador controla la compresión de JPG y WebP. 70-85% es óptimo para redes sociales.',
  },
];

export default function OnlineImageEditorPage() {
  return (
    <>
      <Script id="ld-json-image-editor-es" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Script id="ld-json-image-editor-howto-es" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />

      <HeroBanner
        title="Editor de imágenes gratuito online"
        description="Redimensione, recorte y convierta imágenes para Instagram, Facebook y LinkedIn. Formatos predefinidos, avatares circulares, exportación a JPG, PNG y WebP. Procesamiento local en el navegador."
        overlay="black"
        backgroundImage="/assets/tools/narzedzia-zmiana-rozmiaru-i-kadrowanie-zdjecia.webp"
      />

      <Breadcrumbs
        second={{ href: '/es/herramientas', label: 'Herramientas' }}
        third={{ href: '/es/herramientas/editor-de-imagenes-en-linea', label: 'Editor de imágenes online' }}
        includeJsonLd
        locale="es"
      />

      <ToolEditorLayout>
        <AdSense variant="tool-banner" className="my-3" />
        <ImageResizeTool />
      </ToolEditorLayout>

      <Wrapper>
        <Gap variant="line" />

        <SectionInfo title="Redimensione imágenes online: recorte, convierta y comprima en una sola herramienta">
          <p className="text-mid">
            El editor de imágenes online le permite adaptar rápidamente las imágenes a dimensiones específicas. Puede redimensionar una imagen a cualquier dimensión en píxeles, seleccionar un formato
            predefinido para redes sociales o recortar una sección de la imagen con un encuadre preciso.
          </p>
          <p className="text-mid mt-3">Además de redimensionar, la herramienta ofrece conversión de formato (JPG, PNG, WebP), creación de avatares circulares y control de calidad de compresión.</p>
        </SectionInfo>

        <Gap size="sm" />

        <SectionSteps
          title="Cómo redimensionar una imagen online"
          description="Editar una imagen tarda solo unos segundos:"
          grid="three"
          items={[
            { title: '1. Añada una imagen', description: 'Arrastre un archivo sobre el área designada o seleccione una imagen desde su dispositivo. Formatos admitidos: JPG, PNG, WebP.' },
            { title: '2. Configure las dimensiones', description: 'Introduzca las dimensiones en píxeles o seleccione un formato predefinido (Instagram, Facebook, YouTube, LinkedIn, imagen OG).' },
            { title: '3. Descargue', description: 'Ajuste el recorte, elija el formato de archivo (JPG, PNG, WebP), configure la calidad y descargue la imagen terminada.' },
          ]}
        />

        <Gap variant="line" />

        <SectionInfo title="Cómo añadir una imagen">
          <p className="text-mid">La herramienta acepta imágenes en formatos JPG, PNG y WebP. Puede añadir una imagen de dos formas:</p>
          <ul className="text-mid mt-3 list-disc space-y-2 pl-5">
            <li>
              <strong>Arrastrar y soltar</strong> - tome un archivo de una carpeta de su ordenador y suíltelo sobre el área de carga (el área con borde discontinuo).
            </li>
            <li>
              <strong>Seleccionar desde el dispositivo</strong> - al hacer clic en el área de carga se abre un diálogo de selección de archivos.
            </li>
          </ul>
          <p className="text-mid mt-3">
            Después de añadir una imagen, la herramienta lee automáticamente sus dimensiones originales y muestra una vista previa. Ahora puede proceder a la configuración de recorte.
          </p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionDemo
          title="Configurar las dimensiones objetivo"
          demo={
            <div className="tool-section space-y-3">
              <div className="flex flex-wrap gap-2">
                <button className="bg-primary flex items-center gap-2 rounded-md border px-3 py-1.5 text-[14px]! text-white">
                  <span>Dimensiones en px</span>
                </button>
                <button className="flex items-center gap-2 rounded-md border border-black/10 bg-white px-3 py-1.5 text-[14px]! hover:bg-neutral-100">
                  <span>Formatos predefinidos</span>
                </button>
              </div>
              <div className="space-y-3">
                <div className="grid gap-3 md:grid-cols-2">
                  <div>
                    <label className="text-[14px]! font-medium">Ancho (px)</label>
                    <input type="number" className="mt-1 w-full! rounded-md border border-neutral-300 bg-white px-3! py-2! text-sm!" value="1080" readOnly />
                  </div>
                  <div>
                    <label className="text-[14px]! font-medium">Alto (px)</label>
                    <input type="number" className="mt-1 w-full! rounded-md border border-neutral-300 bg-white px-3! py-2! text-sm!" value="1350" readOnly />
                  </div>
                </div>
                <label className="flex items-center gap-2 text-[14px]! font-medium">
                  <input type="checkbox" defaultChecked disabled className="h-4 w-4! rounded border-neutral-300 p-0!" />
                  <span>Mantener proporciones (segunda dimensión automática)</span>
                </label>
              </div>
            </div>
          }
        >
          <p className="text-mid">
            En la pestaña <strong>Dimensiones en px</strong>, introduce el ancho y el alto manualmente. La opción <strong>Mantener proporciones</strong> ajusta automáticamente la segunda dimensión.
          </p>
        </SectionDemo>

        <Gap variant="line" />

        <SectionInfo title="Dimensiones de imagen para Instagram, Facebook y LinkedIn">
          <p className="text-mid mb-4">La herramienta incluye formatos predefinidos con dimensiones óptimas para las plataformas más populares:</p>
          <div className="overflow-x-auto">
            <table className="text-mid w-full text-left text-sm">
              <thead>
                <tr className="border-b border-neutral-200">
                  <th className="py-2 pr-4 font-semibold">Plataforma</th>
                  <th className="py-2 pr-4 font-semibold">Formato</th>
                  <th className="py-2 pr-4 font-semibold">Dimensiones (px)</th>
                  <th className="py-2 font-semibold">Proporción</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-neutral-100">
                  <td className="py-2 pr-4">Instagram</td>
                  <td className="py-2 pr-4">Post cuadrado</td>
                  <td className="py-2 pr-4">1080 x 1080</td>
                  <td className="py-2">1:1</td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="py-2 pr-4">Instagram</td>
                  <td className="py-2 pr-4">Post vertical</td>
                  <td className="py-2 pr-4">1080 x 1350</td>
                  <td className="py-2">4:5</td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="py-2 pr-4">Instagram</td>
                  <td className="py-2 pr-4">Story / Reels</td>
                  <td className="py-2 pr-4">1080 x 1920</td>
                  <td className="py-2">9:16</td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="py-2 pr-4">Facebook</td>
                  <td className="py-2 pr-4">Post</td>
                  <td className="py-2 pr-4">1200 x 630</td>
                  <td className="py-2">~1.9:1</td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="py-2 pr-4">Facebook</td>
                  <td className="py-2 pr-4">Portada de página</td>
                  <td className="py-2 pr-4">820 x 360</td>
                  <td className="py-2">~2.3:1</td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="py-2 pr-4">LinkedIn</td>
                  <td className="py-2 pr-4">Post</td>
                  <td className="py-2 pr-4">1200 x 1200</td>
                  <td className="py-2">1:1</td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="py-2 pr-4">LinkedIn</td>
                  <td className="py-2 pr-4">Banner de perfil</td>
                  <td className="py-2 pr-4">1584 x 396</td>
                  <td className="py-2">4:1</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">Imagen OG</td>
                  <td className="py-2 pr-4">Compartir enlace</td>
                  <td className="py-2 pr-4">1200 x 630</td>
                  <td className="py-2">~1.9:1</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-mid mt-4 text-sm">
            Las dimensiones de la tabla son tamaños recomendados para cada plataforma. La herramienta configura automáticamente estas dimensiones cuando selecciona el formato correspondiente.
          </p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionSteps
          title="Formatos predefinidos: ¿cuál elegir?"
          description="Cada formato corresponde a requisitos específicos de plataforma o caso de uso:"
          grid="two"
          items={[
            {
              icon: <RiInstagramLine className="h-6 w-6" />,
              title: 'Instagram - post cuadrado (1080×1080)',
              description: 'Formato estándar de post de Instagram. Proporción 1:1. Funciona bien en el feed y se ve bien tanto en teléfono como en escritorio.',
            },
            {
              icon: <RiInstagramLine className="h-6 w-6" />,
              title: 'Instagram - post vertical (1080×1350)',
              description: 'Formato de post vertical (proporción 4:5). Ocupa más espacio en el feed que un cuadrado, lo que puede aumentar la interacción.',
            },
            {
              icon: <RiInstagramLine className="h-6 w-6" />,
              title: 'Instagram - story / reels (1080×1920)',
              description: 'Formato vertical a pantalla completa (proporción 9:16). Se usa en stories y reels. Llena toda la pantalla del teléfono.',
            },
            {
              icon: <RiFacebookLine className="h-6 w-6" />,
              title: 'Facebook - post (1200×630)',
              description: 'Formato óptimo para posts y enlaces compartidos en Facebook. Proporción cercana a 16:9.',
            },
            {
              icon: <RiFacebookLine className="h-6 w-6" />,
              title: 'Facebook - portada de página (820×360)',
              description: 'Foto de fondo para una página empresarial de Facebook. Formato panorámico ancho; puede recortarse de manera diferente en distintos dispositivos.',
            },
            {
              icon: <RiLinkedinLine className="h-6 w-6" />,
              title: 'LinkedIn - post (1200×1200)',
              description: 'Formato cuadrado para posts de LinkedIn. Se ve bien en el feed y en dispositivos móviles.',
            },
            {
              icon: <RiLinkedinLine className="h-6 w-6" />,
              title: 'LinkedIn - banner de perfil (1584×396)',
              description: 'Imagen de fondo para un perfil personal o de empresa en LinkedIn. Formato muy ancho; centre el elemento clave en el recorte.',
            },
            {
              icon: <RiImageLine className="h-6 w-6" />,
              title: 'Imagen OG (1200×630)',
              description: 'Gráfico que se muestra al compartir un enlace en redes sociales (Open Graph). Estándar para Facebook, Twitter, LinkedIn y otras plataformas.',
            },
            {
              icon: <RiFileImageLine className="h-6 w-6" />,
              title: 'Gráfico de artículo (1600×900)',
              description: 'Formato ancho adecuado para cabeceras de artículos de blog. La proporción 16:9 se ve bien en páginas con mucho texto.',
            },
            {
              icon: <RiAspectRatioLine className="h-6 w-6" />,
              title: 'Banner de sitio web (1920×600)',
              description: 'Formato muy ancho para banners de sitio web. Funciona como fondo bajo encabezados o en secciones de ofertas.',
            },
            {
              icon: <RiCropLine className="h-6 w-6" />,
              title: 'Miniatura de artículo (800×600)',
              description: 'Formato más pequeño para miniaturas en listas de artículos, carruseles de productos o vistas previas de resultados de búsqueda.',
            },
            {
              icon: <RiLayoutGridLine className="h-6 w-6" />,
              title: 'Sección hero (1920×1080)',
              description: 'Formato Full HD a pantalla completa. Se usa como fondo de la sección principal en páginas de inicio o páginas de ofertas.',
            },
          ]}
        />

        <Gap variant="line" />

        <SectionInfo title="Cómo recortar una imagen">
          <p className="text-mid">
            Después de configurar las dimensiones objetivo, aparece un área de recorte interactiva en la vista previa. La parte brillante de la imagen es la sección que se guardará; el resto está
            atenuado.
          </p>
          <div className="mt-4 space-y-4">
            <div>
              <p className="text-dark font-semibold">Arrastrar el recorte</p>
              <p className="text-mid mt-1">Agarre el área brillante y arrástrela a cualquier parte de la imagen. Así elige qué sección de la foto se exportará.</p>
            </div>
            <div>
              <p className="text-dark font-semibold">Redimensionar mediante tiradores</p>
              <p className="text-mid mt-1">
                En las esquinas del área de recorte hay pequeños cuadrados (tiradores). Arrastrarlos cambia el tamaño del recorte: puede ampliarlo o reducirlo manteniendo las proporciones elegidas.
              </p>
            </div>
            <div>
              <p className="text-dark font-semibold">Zoom</p>
              <p className="text-mid mt-1">
                En la pestaña <strong>Zoom</strong> encontrará un deslizador para ajustar el zoom (100-300%). Un valor más alto significa que el recorte cubre una sección más pequeña de la imagen
                original, útil cuando quiere recortar un detalle específico.
              </p>
            </div>
            <div>
              <p className="text-dark font-semibold">Control de posición preciso</p>
              <p className="text-mid mt-1">
                En la pestaña <strong>Posición</strong> puede establecer la posición exacta del recorte en porcentajes (0-100% para los ejes X e Y). Los botones de centrado le permiten posicionar
                rápidamente el recorte en el centro de la imagen.
              </p>
            </div>
          </div>
        </SectionInfo>

        <Gap variant="line" />

        <SectionDemo
          title="Formas de recorte"
          demo={
            <div className="tool-section space-y-3">
              <div className="flex flex-wrap gap-2">
                <Badge as="button" variant="default" size="lg" className="border-black/10 hover:bg-neutral-100">
                  Rectángulo
                </Badge>
                <Badge as="button" variant="selected" size="lg">
                  Cuadrado
                </Badge>
                <Badge as="button" variant="default" size="lg" className="border-black/10 hover:bg-neutral-100">
                  Círculo
                </Badge>
              </div>
            </div>
          }
        >
          <p className="text-mid">
            En la pestaña <strong>Formas de recorte</strong>, elige la forma de la imagen exportada: rectángulo (con las proporciones seleccionadas), cuadrado (fuerza 1:1) o círculo (con fondo
            transparente).
          </p>
          <p className="text-mid mt-3">
            La forma de círculo crea un avatar redondo con fondo transparente fuera del círculo. La herramienta cambia automáticamente el formato a PNG o WebP, ya que JPG no admite transparencia.
          </p>
        </SectionDemo>

        <Gap variant="line" />

        <SectionInfo title="Cuadrícula 3×3: ¿para qué sirve?">
          <p className="text-mid">
            Una cuadrícula que divide la imagen en 9 partes iguales es visible en el área de recorte. Es una visualización de la <strong>regla de los tercios</strong>, uno de los principios
            fundamentales de la composición fotográfica.
          </p>
          <p className="text-mid mt-3">
            La regla establece que los elementos más importantes de una foto (rostro, producto, punto de interís) deben colocarse en las intersecciones de las líneas de la cuadrícula o a lo largo de
            ellas. Esta composición es más dinámica y agradable a la vista que colocar el sujeto exactamente en el centro.
          </p>
          <p className="text-mid mt-3">
            En la pestaña <strong>Color de cuadrícula</strong> puede cambiar el color de las líneas (verde, blanco, negro, rojo, amarillo) para que la cuadrícula sea claramente visible en diferentes
            imágenes.
          </p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionTabs
          title="Exportación: ¿qué formato elegir?"
          tabs={[
            {
              title: 'JPG',
              icon: <RiImageLine className="h-5 w-5" />,
              content: (
                <div>
                  <p className="text-mid mb-3">
                    El formato más popular para fotos. Buena compresión manteniendo la calidad visual. No admite transparencia: el fondo siempre estará relleno con un color.
                  </p>
                  <p className="text-mid">
                    Una buena elección para fotos de productos, retratos y la mayoría de los gráficos de sitios web. El deslizador de calidad (60-100%) controla la compresión.
                  </p>
                </div>
              ),
            },
            {
              title: 'PNG',
              icon: <RiFileImageLine className="h-5 w-5" />,
              content: (
                <div>
                  <p className="text-mid mb-3">Formato sin pérdida: preserva la calidad completa, pero los archivos son más grandes. Admite transparencia (necesaria para la forma de círculo).</p>
                  <p className="text-mid">Una buena elección para gráficos con texto, iconos e imágenes que requieren bordes nítidos.</p>
                </div>
              ),
            },
            {
              title: 'WebP',
              icon: <RiCropLine className="h-5 w-5" />,
              content: (
                <div>
                  <p className="text-mid mb-3">
                    Formato moderno que combina las ventajas de JPG y PNG: archivos pequeños, buena calidad, soporte de transparencia. Compatible con todos los navegadores modernos.
                  </p>
                  <p className="text-mid">Recomendado para sitios web: los archivos más pequeños significan una carga más rápida.</p>
                </div>
              ),
            },
          ]}
        />

        <Gap variant="line" />

        <SectionSteps
          title="Proporciones de aspecto: ¿qué significan?"
          description="La proporción de aspecto es la relación entre el ancho y el alto de una imagen. Se escribe como dos números separados por dos puntos:"
          grid="two"
          items={[
            { icon: <RiLayoutGridLine className="h-6 w-6" />, title: '1:1 (cuadrado)', description: 'El ancho es igual al alto. Post cuadrado de Instagram, fotos de perfil, iconos.' },
            {
              icon: <RiAspectRatioLine className="h-6 w-6" />,
              title: '4:5 (vertical)',
              description: 'Formato ligeramente vertical. Post vertical de Instagram: ocupa más espacio en el feed que un cuadrado.',
            },
            {
              icon: <RiImageLine className="h-6 w-6" />,
              title: '3:2 (clásico)',
              description: 'Proporciones tradicionales de la fotografía analógica. Muchas cámaras digitales también usan este formato.',
            },
            {
              icon: <RiCropLine className="h-6 w-6" />,
              title: '16:9 (panorámico)',
              description: 'Formato estándar de vídeo HD, presentaciones y monitores. YouTube, vídeo de Facebook, banners de sitios web.',
            },
            {
              icon: <RiInstagramLine className="h-6 w-6" />,
              title: '9:16 (vertical a pantalla completa)',
              description: '16:9 invertido: formato vertical que llena toda la pantalla del teléfono. Instagram Stories, TikTok, YouTube Shorts.',
            },
          ]}
        />

        <Gap variant="line" />

        <FaqPanels
          title="Preguntas frecuentes sobre el editor de imágenes"
          items={[
            ...faqItems,
            {
              question: '¿Por qué el formato JPG no está disponible con la forma de círculo?',
              answer:
                'El formato JPG no admite transparencia. La forma de círculo requiere un fondo transparente fuera del círculo, por lo que la herramienta limita automáticamente la elección a PNG o WebP, formatos con canal alfa.',
              answerSchemaText: 'JPG no admite transparencia. La forma de círculo requiere PNG o WebP.',
            },
            {
              question: '¿Qué significan las proporciones de aspecto como 4:5 o 16:9?',
              answer:
                'Las proporciones de aspecto definen la relación entre el ancho y el alto de una imagen. Por ejemplo, 4:5 significa que el ancho es 4 partes y el alto es 5 partes. 16:9 es la proporción típica para películas y presentaciones. El post vertical de Instagram usa 4:5, mientras que story y reels usan 9:16.',
              answerSchemaText: '4:5 = ancho 4 partes, alto 5 partes. 16:9 = panorámico estándar.',
            },
          ]}
          openByDefault={1}
          pageUrl={toAbsoluteUrl('/es/herramientas/editor-de-imagenes-en-linea')}
        />

        <Gap variant="line" />

        <ToolsCarousel title="Explore otras herramientas" />

        <Gap size="sm" />
      </Wrapper>
    </>
  );
}
