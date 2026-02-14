import Script from 'next/script';
import HeroBanner from '@/components/sections/HeroBanner';
import Breadcrumbs from '@/components/sections/BreadCrumbs';
import FaviconGenerator from '@/components/sections/tools/FaviconGenerator';
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
import { getToolAlternates } from '@/lib/i18n/pages/tool-meta';
import type { Metadata } from 'next';
import AdSense from '@/components/ui/AdSense';
import {
  RiShieldCheckLine,
  RiDownloadLine,
  RiImageLine,
  RiSmartphoneLine,
  RiUploadLine,
  RiLayoutGridLine,
  RiSettings3Line,
  RiFolderZipLine,
  RiFileDownloadLine,
  RiWordpressLine,
  RiHtml5Line,
  RiReactjsLine,
  RiShapeLine,
  RiAspectRatioLine,
  RiZoomInLine,
  RiContrastLine,
} from 'react-icons/ri';

const LOCALE = 'es' as const;
const TOOL_KEY = 'favicon' as const;

export const metadata: Metadata = {
  title: 'Generador gratuito de favicon online - iconos ICO y PNG',
  description:
    'Generador gratuito de favicon online. Cree favicon.ico e iconos PNG (16x16, 32x32, 180x180, 512x512) a partir de una sola imagen. El procesamiento se realiza localmente en el navegador.',
  alternates: getToolAlternates(TOOL_KEY, LOCALE),
  openGraph: {
    title: 'Generador gratuito de favicon online - iconos ICO y PNG',
    description: 'Generador gratuito de favicon online. Cree favicon.ico e iconos PNG a partir de una sola imagen. Compatible con los requisitos de navegadores y Lighthouse.',
    url: toAbsoluteUrl('/es/herramientas/generador-de-favicon-gratuito'),
    type: 'website',
    images: [{ url: toAbsoluteUrl('/assets/tools/narzedzia-darmowy-generator-favicon-ico.webp'), width: 1200, height: 630 }],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Generador de favicon online - creador de iconos gratuito para sitios web',
  alternateName: 'Generador de favicon.ico e iconos PNG',
  url: toAbsoluteUrl('/es/herramientas/generador-de-favicon-gratuito'),
  applicationCategory: 'DesignApplication',
  applicationSubCategory: 'IconGenerator',
  operatingSystem: 'Any',
  description:
    'Generador gratuito de favicon online. Cree favicon.ico e iconos PNG 16x16, 32x32, 180x180, 192x192 y 512x512 sin límites y sin enviar archivos a un servidor. El procesamiento se realiza localmente en el navegador.',
  featureList: [
    'Generar favicon.ico (16x16, 32x32, 48x48 en un archivo)',
    'Generar iconos PNG 16x16 y 32x32',
    'Generar apple-touch-icon 180x180',
    'Generar iconos PWA 192x192 y 512x512',
    'Soporte de imágenes fuente PNG, JPG y SVG',
    'Configuración de color de fondo',
    'Generar archivo manifest.json para PWA',
    'Descargar todos los archivos como ZIP',
    'Descargar archivos individuales',
    'Conformidad con Lighthouse',
    'Procesamiento en el navegador (los archivos no se envían a un servidor)',
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
  name: 'Cómo crear un favicon para un sitio web',
  description: 'Cómo generar favicon.ico e iconos PNG (16x16, 32x32, 180x180, 512x512) a partir de una sola imagen. Qué tamaños se necesitan y cómo añadir el favicon a WordPress, HTML y Next.js.',
  url: toAbsoluteUrl('/es/herramientas/generador-de-favicon-gratuito'),
  step: [
    {
      '@type': 'HowToStep',
      name: 'Añada una imagen fuente',
      text: 'Arrastre un archivo sobre el área designada o seleccione un gráfico desde su dispositivo. Un logotipo simple o icono en formato PNG, JPG o SVG funciona mejor.',
    },
    { '@type': 'HowToStep', name: 'Elija los tamaños de icono', text: 'Seleccione qué tamaños de icono necesita: favicon.ico (32x32), iconos PNG (16x16, 32x32, 180x180, 192x192, 512x512).' },
    {
      '@type': 'HowToStep',
      name: 'Configure las opciones',
      text: 'Establezca el color de fondo (o mantenga transparente), decida si generar un archivo manifest y si los archivos deben descargarse automáticamente.',
    },
    { '@type': 'HowToStep', name: 'Genere y descargue los archivos', text: 'Después de la generación, los archivos pueden descargarse como archivo ZIP o cada icono individualmente.' },
  ],
  publisher: { '@type': 'Organization', name: 'Arteon Agency', url: siteUrl },
};

const faqItems = [
  {
    question: '¿Qué tamaño debe tener la imagen fuente para generar favicons?',
    answer:
      'El tamaño recomendado es al menos 512×512 píxeles en formato cuadrado (1:1). Con esa fuente, los iconos en todos los tamaños serán nítidos y legibles. Si tiene un logotipo en formato SVG, Asselo, ya que los gráficos vectoriales se escalan sin pérdida de calidad.',
    answerSchemaText: 'Al menos 512×512 px, cuadrado (1:1). SVG es ideal ya que se escala sin pérdida de calidad.',
  },
  {
    question: '¿Puedo generar solo favicon.ico sin los demás iconos?',
    answer: 'Sí. Antes de generar, puede seleccionar exactamente qué tamaños necesita, p. ej., solo favicon.ico o solo tamaños PNG seleccionados.',
    answerSchemaText: 'Sí, puede seleccionar tamaños individuales antes de generar.',
  },
  {
    question: '¿Qué formatos de imagen admite el generador de favicon?',
    answer: 'El generador acepta imágenes en formatos PNG, JPG y SVG. Como salida, genera un archivo favicon.ico e iconos PNG en los tamaños seleccionados, listos para subir a su sitio web.',
    answerSchemaText: 'Entrada: PNG, JPG, SVG. Salida: favicon.ico e iconos PNG.',
  },
  {
    question: '¿Un favicon afecta al posicionamiento en Google?',
    answer:
      'No directamente: el favicon no es un factor de posicionamiento. Sin embargo, afecta indirectamente al reconocimiento de marca: un sitio con un icono profesional es más fácilmente identificable entre muchas pestañas abiertas, lo que puede traducirse en una mayor tasa de clics en los resultados de búsqueda.',
    answerSchemaText: 'No directamente. Indirectamente mejora el reconocimiento de marca y la tasa de clics.',
  },
  {
    question: '¿Qué tamaños de icono son esenciales para un sitio web normal?',
    answer:
      'Para un sitio web típico, tres archivos son suficientes: favicon.ico (32×32), un icono PNG de 32×32 y apple-touch-icon de 180×180. Si el sitio debe funcionar como aplicación web (PWA), también necesita iconos de 192×192 y 512×512 más un archivo manifest.',
    answerSchemaText: 'favicon.ico, PNG 32×32 y apple-touch-icon 180×180. Para PWA añada 192×192 y 512×512.',
  },
  {
    question: '¿Qué es un archivo site.webmanifest y cuándo se necesita?',
    answer:
      'Es un archivo de configuración para aplicaciones web (PWA) que contiene información sobre el icono, nombre y colores de la aplicación. Se requiere cuando el sitio debe funcionar como una app aíadida a la pantalla de inicio del teléfono. Para sitios web normales no es necesario.',
    answerSchemaText: 'Archivo de configuración PWA. Necesario para apps en pantalla de inicio, no para sitios web normales.',
  },
];

export default function FaviconGeneratorPage() {
  return (
    <>
      <Script id="ld-json-favicon-tool-es" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Script id="ld-json-favicon-howto-es" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />

      <HeroBanner
        title="Cree un favicon online - generador de iconos gratuito"
        description="Genere favicon.ico y un conjunto completo de iconos PNG para su sitio web a partir de una sola imagen. Todo el procesamiento se realiza localmente en el navegador."
        overlay="black"
        backgroundImage="/assets/tools/narzedzia-darmowy-generator-favicon-ico.webp"
      />

      <Breadcrumbs
        second={{ href: '/es/herramientas', label: 'Herramientas' }}
        third={{ href: '/es/herramientas/generador-de-favicon-gratuito', label: 'Generador de favicon' }}
        includeJsonLd
        locale="es"
      />

      <ToolEditorLayout>
        <AdSense variant="tool-banner" className="my-3" />
        <FaviconGenerator />
      </ToolEditorLayout>

      <Wrapper>
        <Gap variant="line" />

        <SectionInfo title="¿Qué es un favicon y por qué debería tener uno?">
          <p className="text-mid mb-4">
            Un favicon es un pequeño icono que aparece en la pestaña del navegador junto al título de la página. También lo ve en los marcadores, el historial de navegación y en la pantalla de inicio
            del teléfono cuando alguien añade el sitio como acceso directo.
          </p>
          <p className="text-mid mb-4">
            Este pequeño gráfico cumple una función importante: ayuda a los usuarios a reconocer rápidamente un sitio entre muchas pestañas abiertas. Cuando alguien tiene una docena de pestañas
            abiertas en el navegador, el favicon suele ser el único elemento visible que identifica el sitio.
          </p>
          <p className="text-mid">
            El generador crea un conjunto completo de iconos: un archivo favicon.ico clásico para navegadores, iconos PNG en varios tamaños y un apple-touch-icon para dispositivos Apple. Si está
            construyendo una aplicación web (PWA), también puede generar iconos de 192x192 y 512x512 junto con un archivo manifest.
          </p>
        </SectionInfo>

        <Gap size="xs" />

        <SectionSteps
          title="Cómo crear un favicon en 3 pasos"
          description="Generar un favicon tarda solo unos segundos:"
          grid="three"
          items={[
            {
              title: '1. Añada una imagen',
              description: 'Arrastre un archivo sobre el área designada o seleccione un gráfico desde su dispositivo. Formatos admitidos: PNG, JPG, SVG. Tamaño recomendado: mín. 512×512 píxeles.',
            },
            { title: '2. Elija los tamaños', description: 'Seleccione los tamaños de icono que necesita. Para un sitio web normal: favicon.ico, 32×32 y 180×180. Para PWA, añada 192×192 y 512×512.' },
            {
              title: '3. Descargue los archivos',
              description: 'Después de generar, descargue todos los archivos como ZIP o cada icono individualmente. Debajo de la herramienta encontrará instrucciones para añadir el favicon a su sitio.',
            },
          ]}
        />

        <Gap variant="line" />

        <SectionInfo title="¿Qué tamaños de icono genera la herramienta?">
          <p className="text-mid mb-6">Cada tamaño tiene su uso:</p>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-neutral-200 p-4">
              <p className="mb-2 font-semibold">favicon.ico (32×32)</p>
              <p className="text-mid text-sm">Formato clásico reconocido por todos los navegadores. Se muestra en la pestaña del navegador.</p>
            </div>
            <div className="rounded-lg border border-neutral-200 p-4">
              <p className="mb-2 font-semibold">PNG 16×16 y 32×32</p>
              <p className="text-mid text-sm">Tamaños estándar para navegadores modernos. Se muestran en pestañas y marcadores.</p>
            </div>
            <div className="rounded-lg border border-neutral-200 p-4">
              <p className="mb-2 font-semibold">PNG 180×180 (apple-touch-icon)</p>
              <p className="text-mid text-sm">Icono para dispositivos Apple (iPhone, iPad). Se muestra cuando alguien añade el sitio a su pantalla de inicio.</p>
            </div>
            <div className="rounded-lg border border-neutral-200 p-4">
              <p className="mb-2 font-semibold">PNG 192×192 y 512×512</p>
              <p className="text-mid text-sm">Iconos para aplicaciones web (PWA). Requeridos por el manifest y usados en tiendas de aplicaciones.</p>
            </div>
          </div>
          <p className="text-light mt-6">Si no está construyendo una PWA, solo necesita: favicon.ico, PNG 32×32 y PNG 180×180. Estos tres archivos cubren la mayoría de los casos de uso.</p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionSteps
          title="¿Qué hace especial al generador de favicon?"
          grid="two"
          items={[
            {
              icon: <RiShieldCheckLine className="h-6 w-6" />,
              title: 'Privacidad: los archivos nunca salen de su ordenador',
              description: 'Todas las operaciones se realizan localmente en el navegador. La imagen no se envía a ningún servidor. Al cerrar la página, todos los datos se eliminan.',
            },
            {
              icon: <RiDownloadLine className="h-6 w-6" />,
              title: 'Conjunto completo en un solo lugar',
              description: 'Favicon.ico, iconos PNG, apple-touch-icon, iconos PWA y manifest: todo desde una imagen, en una herramienta.',
            },
            {
              icon: <RiImageLine className="h-6 w-6" />,
              title: 'Soporte de PNG, JPG y SVG',
              description: 'Puede usar un logotipo en cualquier formato. Si tiene SVG, los iconos serán nítidos en todos los tamaños.',
            },
            {
              icon: <RiSmartphoneLine className="h-6 w-6" />,
              title: 'Listo para sitio web y PWA',
              description: 'La herramienta genera un archivo manifest.json para aplicaciones web. Debajo encontrará instrucciones para integrar los iconos.',
            },
          ]}
        />

        <Gap variant="line" />

        <SectionSteps
          title="Cómo usar el generador de favicon"
          description="Generar un favicon son unos simples pasos:"
          grid="two"
          items={[
            {
              icon: <RiUploadLine className="h-6 w-6" />,
              title: '1. Añada la imagen fuente',
              description:
                'Arrastre un archivo sobre el área designada o seleccione un gráfico desde su dispositivo. Formatos admitidos: PNG, JPG, SVG. Un logotipo simple o icono de al menos 512×512 píxeles funciona mejor.',
            },
            {
              icon: <RiLayoutGridLine className="h-6 w-6" />,
              title: '2. Elija los tamaños de icono',
              description: 'Seleccione qué tamaños de icono necesita. Puede seleccionar todos o solo algunos. Para un sitio web normal: favicon.ico, 32×32 y 180×180.',
            },
            {
              icon: <RiSettings3Line className="h-6 w-6" />,
              title: '3. Configure las opciones de generación',
              description: 'Establezca opciones adicionales: fondo (transparente o color elegido), manifest (archivo de configuración PWA) y descarga automática.',
            },
            {
              icon: <RiDownloadLine className="h-6 w-6" />,
              title: '4. Genere y descargue los archivos',
              description:
                'Después de iniciar la generación, la herramienta procesa la imagen localmente: nada se envía a un servidor. Descargue todos los archivos como archivo ZIP o los iconos individuales por separado.',
            },
          ]}
        />

        <Gap variant="line" />

        <SectionDemo
          title="Opciones de generación: ¿qué hace cada una?"
          demo={
            <div className="tool-section space-y-4">
              <div className="tool-info-box">
                <p className="text-light mb-2! text-sm! font-medium tracking-wide uppercase">Tamaños PNG</p>
                <div className="flex flex-wrap gap-2">
                  <Badge as="label" variant="selected" size="lg" className="flex cursor-pointer items-center justify-between">
                    <input type="checkbox" defaultChecked disabled className="mr-1 h-4 w-4! p-0! align-middle" />
                    16×16
                  </Badge>
                  <Badge as="label" variant="selected" size="lg" className="flex cursor-pointer items-center justify-between">
                    <input type="checkbox" defaultChecked disabled className="mr-1 h-4 w-4! p-0! align-middle" />
                    32×32
                  </Badge>
                  <Badge as="label" variant="default" size="lg" className="flex cursor-pointer items-center justify-between">
                    <input type="checkbox" disabled className="mr-1 h-4 w-4! p-0! align-middle" />
                    180×180
                  </Badge>
                </div>
              </div>
              <div className="tool-info-box flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-2">
                  <input type="checkbox" defaultChecked disabled className="h-4 w-4! rounded border-neutral-300 p-0!" />
                  <span className="text-mid text-sm!">Fondo transparente (PNG/ICO)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-light text-sm">Color de fondo:</span>
                  <input type="color" defaultValue="#ffffff" disabled className="h-8! w-7! cursor-pointer border-none bg-white p-0!" />
                </div>
              </div>
            </div>
          }
        >
          <div className="space-y-4">
            <div>
              <h3 className="h5 mb-2">Fondo (transparente o color)</h3>
              <p className="text-mid">Por defecto, el generador preserva la transparencia. También puede elegir un color de fondo específico.</p>
            </div>
            <div>
              <h3 className="h5 mb-2">Generar manifest (site.webmanifest)</h3>
              <p className="text-mid">Un archivo JSON para aplicaciones web (PWA). Si no está construyendo una PWA, esta opción no es necesaria.</p>
            </div>
          </div>
        </SectionDemo>

        <Gap variant="line" />

        <SectionSteps
          title="Cómo descargar los archivos generados"
          description="Después de generar los iconos, tiene varias opciones de descarga:"
          grid="two"
          items={[
            {
              icon: <RiFolderZipLine className="h-6 w-6" />,
              title: 'Descargar todo como ZIP',
              description: 'El botón "Descargar todo" empaqueta todos los archivos generados en un solo archivo ZIP. Esta es la opción más cómoda cuando necesita el conjunto completo de iconos.',
            },
            {
              icon: <RiFileDownloadLine className="h-6 w-6" />,
              title: 'Descargar archivos individuales',
              description:
                'Cada icono generado tiene su propio botón de descarga: puede descargar un solo archivo sin descargar el conjunto completo. útil cuando solo necesita actualizar un tamaño.',
            },
          ]}
        />

        <Gap variant="line" />

        <SectionTabs
          title="Dónde y cómo añadir un favicon"
          tabs={[
            {
              title: 'WordPress',
              icon: <RiWordpressLine className="h-5 w-5" />,
              content: (
                <div>
                  <p className="text-mid mb-3">La mayoría de los temas de WordPress tienen una opción integrada para configurar el icono del sitio. La encontrará en el panel de administración:</p>
                  <p className="text-mid mb-3">
                    <strong>Apariencia → Personalizar → Identidad del sitio → Icono del sitio</strong>
                  </p>
                  <p className="text-light">
                    Suba allí el archivo de 512×512: WordPress generará automáticamente los tamaños más pequeños. Para un control total sobre los iconos, también puede subir archivos directamente al
                    directorio raíz mediante FTP.
                  </p>
                </div>
              ),
            },
            {
              title: 'HTML',
              icon: <RiHtml5Line className="h-5 w-5" />,
              content: (
                <div>
                  <p className="text-mid mb-3">
                    Coloque los archivos generados en el directorio raíz de su sitio (donde está index.html). Luego añada las etiquetas correspondientes en la sección &lt;head&gt;:
                  </p>
                  <pre className="bg-primary-light mb-3 overflow-x-auto rounded-lg p-4 text-sm">
                    <code>{`<link rel="icon" href="/favicon.ico" sizes="32x32">
<link rel="icon" href="/icon-32x32.png" type="image/png" sizes="32x32">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">`}</code>
                  </pre>
                  <p className="text-light">El código anterior es un ejemplo: adapte las rutas a la estructura de su sitio.</p>
                </div>
              ),
            },
            {
              title: 'Next.js / React',
              icon: <RiReactjsLine className="h-5 w-5" />,
              content: (
                <div>
                  <p className="text-mid mb-3">
                    En Next.js (App Router), coloque los archivos de favicon en el directorio <code>app/</code> o <code>public/</code>:
                  </p>
                  <ul className="text-light mb-3 list-disc pl-5">
                    <li>
                      <code>app/favicon.ico</code> - reconocido automáticamente por Next.js
                    </li>
                    <li>
                      <code>app/apple-icon.png</code> - icono de Apple
                    </li>
                    <li>
                      <code>public/</code> - iconos restantes (192×192, 512×512)
                    </li>
                  </ul>
                  <p className="text-light">
                    También puede configurar los iconos en <code>layout.tsx</code> mediante el objeto <code>metadata.icons</code>.
                  </p>
                </div>
              ),
            },
          ]}
        />

        <Gap variant="line" />

        <SectionSteps
          title="¿Qué imagen fuente funciona mejor?"
          description="Un favicon es un gráfico muy pequeño, tan pequeño como 16×16 píxeles. No toda imagen funciona bien como fuente:"
          grid="two"
          items={[
            {
              icon: <RiShapeLine className="h-6 w-6" />,
              title: 'Formas simples y símbolos legibles',
              description: 'Los logotipos simples, letras individuales o símbolos funcionan mejor. Evite gráficos complejos con muchos detalles.',
            },
            {
              icon: <RiAspectRatioLine className="h-6 w-6" />,
              title: 'Formato cuadrado',
              description: 'Un favicon es cuadrado. Si la imagen fuente tiene una proporción distinta de 1:1, se recortará o estirará.',
            },
            {
              icon: <RiZoomInLine className="h-6 w-6" />,
              title: 'Tamaño suficientemente grande',
              description: 'Recomendamos una imagen fuente de al menos 512×512 píxeles. Las imágenes más pequeñas se ampliarán.',
            },
            {
              icon: <RiImageLine className="h-6 w-6" />,
              title: 'Formato SVG como fuente ideal',
              description: 'SVG se escala sin pérdida de calidad, por lo que los iconos en todos los tamaños serán nítidos.',
            },
            {
              icon: <RiContrastLine className="h-6 w-6" />,
              title: 'Colores de alto contraste',
              description: 'Un favicon debe ser visible en diferentes fondos (pestañas claras, modo oscuro). Elija colores que mantengan la legibilidad.',
            },
          ]}
        />

        <Gap variant="line" />

        <FaqPanels
          title="Preguntas frecuentes sobre el generador de favicon"
          items={[
            ...faqItems,
            {
              question: '¿El favicon se muestra igual en todos los navegadores?',
              answer:
                'La mayoría de los navegadores modernos (Chrome, Firefox, Edge, Safari) reconocen el archivo favicon.ico y los iconos PNG. Pueden haber diferencias en el tamaño de icono mostrado: Chrome prefiere PNG 32×32, mientras que Safari en iOS usa apple-touch-icon 180×180. Para mejor compatibilidad, recomendamos generar el conjunto completo de tamaños.',
              answerSchemaText: 'Generalmente sí. Genere el conjunto completo de tamaños para mejor compatibilidad.',
            },
            {
              question: '¿Por qué el favicon no cambia después de subir un archivo nuevo?',
              answer:
                'Los navegadores almacenan en cachí los favicons de forma agresiva. Después de subir un nuevo icono, intente limpiar la cachí del navegador o añadir un parámetro de versión a la ruta del archivo (p. ej., /favicon.ico?v=2). El cambio puede tardar varias horas en hacerse visible.',
              answerSchemaText: 'Los navegadores almacenan en cachí los favicons agresivamente. Limpie la cachí o añada un parámetro de versión.',
            },
          ]}
          openByDefault={0}
          pageUrl={toAbsoluteUrl('/es/herramientas/generador-de-favicon-gratuito')}
        />

        <Gap variant="line" />

        <ToolsCarousel title="Explore otras herramientas" />

        <Gap size="sm" />
      </Wrapper>
    </>
  );
}
