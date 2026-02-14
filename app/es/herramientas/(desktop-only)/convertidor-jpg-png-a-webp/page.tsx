import Script from 'next/script';
import HeroBanner from '@/components/sections/HeroBanner';
import Breadcrumbs from '@/components/sections/BreadCrumbs';
import JpgPngToWebp from '@/components/sections/tools/JpgPngToWebp';
import ToolsCarousel from '@/components/sections/tools/ToolsCarousel';
import FaqPanels from '@/components/ui/FaqPanels';
import Gap from '@/components/ui/Gap';
import SectionInfo from '@/components/ui/sections/SectionInfo';
import SectionSteps from '@/components/ui/sections/SectionSteps';
import SectionDemo from '@/components/ui/sections/SectionDemo';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/buttons/Button';
import Wrapper from '@/components/ui/Wrapper';
import ToolEditorLayout from '@/components/ui/ToolEditorLayout';
import { toAbsoluteUrl, siteUrl } from '@/utils/absoluteUrl';
import { getToolAlternates } from '@/lib/i18n/pages/tool-meta';
import type { Metadata } from 'next';
import AdSense from '@/components/ui/AdSense';
import {
  RiShieldCheckLine,
  RiInfinityFill,
  RiSpeedLine,
  RiDownloadLine,
  RiFileImageLine,
  RiFlashlightLine,
  RiStackLine,
  RiGlobalLine,
  RiBuilding2Line,
  RiShoppingCartLine,
  RiArticleLine,
  RiCameraLine,
  RiSmartphoneLine,
} from 'react-icons/ri';

const LOCALE = 'es' as const;
const TOOL_KEY = 'jpgToWebp' as const;

export const metadata: Metadata = {
  title: 'Convertidor gratuito de JPG/PNG a WebP online - sin límites',
  description:
    'Convertidor gratuito de JPG y PNG a WebP online. Reduzca el tamaño de las imágenes hasta un 35% sin perder calidad. La conversión se realiza localmente en el navegador, los archivos no se envían a un servidor.',
  alternates: getToolAlternates(TOOL_KEY, LOCALE),
  openGraph: {
    title: 'Convertidor gratuito de JPG/PNG a WebP online - sin límites',
    description: 'Convertidor gratuito de JPG y PNG a WebP online. Reduzca el tamaño de las imágenes hasta un 35% sin perder calidad. Sin registro, sin límites.',
    url: toAbsoluteUrl('/es/herramientas/convertidor-jpg-png-a-webp'),
    type: 'website',
    images: [{ url: toAbsoluteUrl('/assets/tools/narzedzia-jpg-png-na-webp-bez-limitu.webp'), width: 1200, height: 630 }],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Convertidor de JPG y PNG a WebP online - gratuito, sin límites',
  alternateName: 'Convertidor de JPG a WebP y PNG a WebP',
  url: toAbsoluteUrl('/es/herramientas/convertidor-jpg-png-a-webp'),
  applicationCategory: 'MultimediaApplication',
  applicationSubCategory: 'ImageConverter',
  operatingSystem: 'Any',
  description:
    'Convertidor gratuito de JPG y PNG a WebP online. Reduzca el tamaño de las imágenes hasta un 35%, mejore la velocidad de carga y las puntuaciones de Core Web Vitals. La conversión se realiza en el navegador: los archivos no se envían a un servidor.',
  featureList: [
    'Conversión de JPG a WebP',
    'Conversión de PNG a WebP',
    'Ajuste del nivel de calidad (60-95%)',
    'Conversión por lotes de varios archivos',
    'Vista previa del tamaño antes y después de la conversión',
    'Descarga individual de archivos',
    'Descarga de todos los archivos como ZIP',
    'Procesamiento local en el navegador (los archivos no se envían a un servidor)',
  ],
  inLanguage: 'es',
  isAccessibleForFree: true,
  offers: { '@type': 'Offer', price: 0, priceCurrency: 'EUR' },
  publisher: { '@type': 'Organization', name: 'Arteon Agency', url: siteUrl },
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Cómo convertir JPG y PNG a WebP online',
  description: 'Cómo convertir imágenes JPG y PNG a formato WebP. Configuración de calidad (60-95%), mecanismo Smart Quality y descarga de archivos convertidos como ZIP.',
  url: toAbsoluteUrl('/es/herramientas/convertidor-jpg-png-a-webp'),
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Añada archivos para convertir',
      text: 'Arrastre imágenes JPG o PNG sobre el área designada o seleccione archivos desde su dispositivo. Puede añadir varios archivos a la vez.',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Configure el nivel de calidad',
      text: 'Elija la calidad del archivo WebP de salida usando el deslizador (60-95%). El valor predeterminado de 80% es un buen equilibrio entre calidad y tamaño.',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Inicie la conversión',
      text: 'Después de iniciar la conversión, la herramienta procesará todos los archivos en la cola y aplicará automáticamente Smart Quality.',
    },
    { '@type': 'HowToStep', position: 4, name: 'Descargue los archivos convertidos', text: 'Los archivos convertidos pueden descargarse individualmente o todos a la vez como archivo ZIP.' },
  ],
  publisher: { '@type': 'Organization', name: 'Arteon Agency', url: siteUrl },
};

const faqItems = [
  {
    question: '¿Qué es WebP y en qué se diferencia de JPG?',
    answer:
      'WebP es un formato de imagen creado por Google que combina las ventajas de JPG (archivos de fotos pequeños) y PNG (transparencia). Los archivos WebP son en promedio un 25-35% más pequeños que JPG a una calidad visual comparable. Todos los navegadores modernos (Chrome, Firefox, Safari, Edge) admiten WebP.',
    answerSchemaText: 'WebP es un formato de imagen de Google, un 25-35% más pequeño que JPG. Todos los navegadores modernos lo admiten.',
  },
  {
    question: '¿WebP admite transparencia como PNG?',
    answer:
      'Sí. WebP admite el canal alfa (transparencia): los archivos PNG con fondo transparente se convertirán correctamente. Sin embargo, el ahorro de tamaño para PNGs con transparencia puede ser menor que para fotos JPG normales.',
    answerSchemaText: 'Sí, WebP admite transparencia alfa. Los archivos PNG con fondo transparente se convierten correctamente.',
  },
  {
    question: '¿Qué nivel de calidad debo elegir?',
    answer:
      'Para la mayoría de los usos (sitios web, tiendas, blogs), la calidad del 80% proporciona un buen equilibrio entre tamaño de archivo y apariencia. Para fotos de productos o portafolios, puede elegir 85-90%. Los valores por debajo del 70% reducirán significativamente el tamaño, pero pueden introducir artefactos visibles.',
    answerSchemaText: '80% para la mayoría de usos. 85-90% para fotos de productos. Por debajo del 70% para máxima compresión.',
  },
  {
    question: '¿Cuánto espacio puedo ahorrar?',
    answer:
      'El ahorro típico es del 25-35% respecto a JPG. Por ejemplo, una foto JPG de 500 KB después de la conversión a WebP será de unos 325-375 KB. Para PNG, el ahorro puede ser aún mayor: hasta un 50-70%.',
    answerSchemaText: '25-35% para JPG, hasta 50-70% para PNG.',
  },
  {
    question: '¿Puedo convertir varios archivos a la vez?',
    answer: 'Sí. Puede añadir cualquier cantidad de archivos a la vez, sin límite. Todos se convertirán, y puede descargarlos individualmente o como archivo ZIP.',
    answerSchemaText: 'Sí, conversión por lotes ilimitada con descarga ZIP.',
  },
  {
    question: '¿Qué es Smart Quality?',
    answer:
      'Smart Quality es un mecanismo de ajuste automático de calidad que garantiza que el archivo WebP de salida nunca sea más grande que el original. Si la conversión resultara en un archivo más grande (lo que puede ocurrir con imágenes ya muy comprimidas), la herramienta reduce automáticamente la calidad hasta que el resultado sea más pequeño.',
    answerSchemaText: 'Ajuste automático de calidad que garantiza que el archivo de salida sea siempre más pequeño que el original.',
  },
  {
    question: '¿WebP acelera un sitio web?',
    answer:
      'Sí. Los archivos de imagen más pequeños significan una carga de página más rápida. Esto impacta directamente en la métrica LCP (Largest Contentful Paint) de Core Web Vitals, uno de los factores de posicionamiento de Google. Herramientas como PageSpeed Insights suelen recomendar convertir imágenes a WebP.',
    answerSchemaText: 'Sí, los archivos más pequeños mejoran el LCP y las puntuaciones de Core Web Vitals.',
  },
];

export default function JpgPngToWebpPage() {
  return (
    <>
      <Script id="ld-json-webp-converter-es" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Script id="ld-json-webp-howto-es" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />

      <HeroBanner
        title="Convertidor de JPG y PNG a WebP online"
        description="Reduzca el tamaño de las imágenes hasta un 35% sin perder calidad. Añada archivos, elija el nivel de calidad y descargue las imágenes en formato WebP. Toda la conversión se realiza localmente en el navegador."
        overlay="black"
        backgroundImage="/assets/tools/narzedzia-jpg-png-na-webp-bez-limitu.webp"
      />

      <Breadcrumbs
        second={{ href: '/es/herramientas', label: 'Herramientas' }}
        third={{ href: '/es/herramientas/convertidor-jpg-png-a-webp', label: 'Convertidor JPG/PNG a WebP' }}
        includeJsonLd
        locale="es"
      />

      <ToolEditorLayout>
        <AdSense variant="tool-banner" className="my-3" />
        <JpgPngToWebp />
      </ToolEditorLayout>

      <Wrapper>
        <Gap variant="line" />

        <SectionInfo title="¿Qué es WebP y por qué convertir imágenes?">
          <p className="text-mid mb-4">
            WebP es un formato de imagen creado por Google que permite reducir el tamaño de los archivos de imagen hasta un 25-35% en comparación con JPG y PNG, manteniendo una calidad visual
            comparable. Los archivos más pequeños significan una carga de página más rápida, lo que se traduce en una mejor experiencia de usuario y puntuaciones más altas en{' '}
            <a href="https://pagespeed.web.dev/" target="_blank" rel="noopener noreferrer">
              PageSpeed Insights
            </a>
            .
          </p>
          <p className="text-mid mb-4">
            El formato WebP es compatible con todos los navegadores modernos: Chrome, Firefox, Safari (desde la versión 14) y Edge. Si tiene un sitio web, tienda online o blog, convertir imágenes a
            WebP es una de las formas más sencillas de mejorar el rendimiento del sitio.
          </p>
          <p className="text-mid">
            El convertidor admite tanto fotos JPG como gráficos PNG (incluidos los que tienen transparencia). Puede convertir cualquier número de archivos a la vez: todos se procesan localmente en el
            navegador, sin enviarse a un servidor.
          </p>
        </SectionInfo>

        <Gap size="xs" />

        <SectionSteps
          title="Cómo convertir imágenes a WebP"
          description="La conversión a WebP tarda solo unos segundos:"
          grid="three"
          items={[
            {
              title: '1. Añada archivos',
              description: 'Arrastre imágenes JPG o PNG sobre el área designada o seleccione archivos desde su dispositivo. Puede añadir cualquier cantidad de archivos a la vez.',
            },
            {
              title: '2. Configure la calidad',
              description: 'Elija el nivel de calidad (predeterminado 80%). Un valor más bajo significa un archivo más pequeño. Para la mayoría de los usos, 80% es la configuración óptima.',
            },
            {
              title: '3. Descargue WebP',
              description: 'Después de la conversión, descargue los archivos individualmente o como archivo ZIP. Cada archivo muestra información sobre el espacio ahorrado.',
            },
          ]}
        />

        <Gap variant="line" />

        <SectionInfo title="¿Cómo añadir archivos para convertir?">
          <p className="text-mid">La herramienta ofrece dos formas de añadir archivos:</p>
          <ul className="text-mid mt-3 ml-6 list-disc space-y-2">
            <li>
              <strong>Arrastrar y soltar</strong> – tome los archivos desde una carpeta en su ordenador y suéltelos en el área con el texto &quot;Arrastre y suelte imágenes aquí&quot;. Puede arrastrar varios archivos a la vez.
            </li>
            <li>
              <strong>Selección desde el dispositivo</strong> – al hacer clic en el área de añadir archivos se abrirá una ventana de selección. Mantener pulsado Ctrl (o Cmd en Mac) permite seleccionar varios archivos a la vez.
            </li>
          </ul>
          <p className="text-mid mt-3">
            La herramienta solo acepta archivos JPG y PNG. Si añade accidentalmente un archivo en otro formato (p. ej., GIF o BMP), se omitirá automáticamente y verá un mensaje informativo.
          </p>
          <p className="text-mid mt-3">
            <strong>Privacidad:</strong> Todos los archivos se procesan localmente en el navegador. No se envían a ningún sitio: no llegan a ningún servidor. Al cerrar la pestaña o el navegador, los archivos se eliminan de la memoria.
          </p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionInfo title="¿Qué significan los estados de los archivos?">
          <p className="text-mid">Cada archivo en la cola tiene uno de cuatro estados que indican el progreso de la conversión:</p>
          <div className="mt-4 space-y-4">
            <div className="flex items-start gap-3">
              <Badge variant="neutral" size="md">
                Pendiente
              </Badge>
              <p className="text-mid">El archivo está en la cola y esperando a ser procesado. La conversión aún no ha comenzado.</p>
            </div>
            <div className="flex items-start gap-3">
              <Badge variant="neutral" size="md">
                Procesando?
              </Badge>
              <p className="text-mid">El archivo se está convirtiendo. Para la mayoría de las imágenes esto tarda una fracción de segundo, pero archivos muy grandes pueden tardar varios segundos.</p>
            </div>
            <div className="flex items-start gap-3">
              <Badge variant="success" size="md">
                Hecho
              </Badge>
              <p className="text-mid">Conversión completada con éxito. El archivo WebP está listo para descargar. Junto al estado también verá el tamaño antes y después de la conversión.</p>
            </div>
            <div className="flex items-start gap-3">
              <Badge variant="error" size="md">
                Error
              </Badge>
              <p className="text-mid">
                Algo salió mal durante la conversión. Puede ser un archivo fuente corrupto o un problema de memoria del navegador con imágenes muy grandes. El botón &quot;Reintentar&quot; le permite
                intentar de nuevo.
              </p>
            </div>
          </div>
        </SectionInfo>

        <Gap variant="line" />

        <SectionInfo title="¿Cómo funciona Smart Quality?">
          <p className="text-mid">Smart Quality es un mecanismo de optimización automática que garantiza que el archivo WebP de salida nunca sea más grande que el original. Funciona así:</p>
          <ol className="text-mid mt-3 ml-6 list-decimal space-y-2">
            <li>La herramienta convierte la imagen a la calidad que usted configura (p. ej., 80%).</li>
            <li>Comprueba si el archivo resultante es más pequeño que el original.</li>
            <li>Si es más grande, reduce automáticamente la calidad y lo intenta de nuevo.</li>
            <li>El proceso se repite hasta que el archivo de salida es más pequeño o la calidad baja del mínimo seguro.</li>
          </ol>
          <p className="text-mid mt-3">
            La herramienta selecciona automáticamente la configuración óptima. Si tiene una imagen que ya está muy comprimida (p. ej., un JPG al 60% de calidad), los parámetros se ajustarán
            automáticamente para seguir consiguiendo ahorro de tamaño.
          </p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionDemo
          title="Configuración de calidad: ¿qué elegir?"
          demo={
            <div className="space-y-4">
              <div>
                <p className="text-dark mb-2 text-sm! font-medium uppercase">Calidad configurada</p>
                <div className="flex items-center">
                  <input type="range" min={60} max={95} defaultValue={80} className="flex-1" disabled />
                  <span className="text-mid w-12 text-right text-sm!">80%</span>
                </div>
                <span className="text-light mt-1 block text-xs">Mayor valor = mejor calidad, archivo más grande</span>
              </div>
              <div className="flex items-center">
                <input type="checkbox" defaultChecked className="h-4 w-4 rounded border-neutral-300" disabled />
                <span className="text-mid pl-2 text-sm!">Descarga automática después de la conversión</span>
              </div>
              <div className="ml-6 flex flex-wrap gap-2">
                <Badge variant="selected" size="sm">
                  Descargar individualmente
                </Badge>
                <Badge variant="default" size="sm">
                  Descargar como ZIP
                </Badge>
              </div>
            </div>
          }
        >
          <p className="text-mid">El deslizador de calidad le permite configurar un valor del 60% al 95%. Un valor más alto significa mejor calidad de imagen pero también un archivo más grande.</p>
          <ul className="text-mid mt-3 ml-6 list-disc space-y-2">
            <li>
              <strong>80% (predeterminado)</strong> - un buen equilibrio para la mayoría de los usos.
            </li>
            <li>
              <strong>85-90%</strong> - para fotos de productos y portafolios de fotografía.
            </li>
            <li>
              <strong>60-70%</strong> - cuando minimizar el tamaño del archivo es la prioridad.
            </li>
          </ul>
        </SectionDemo>

        <Gap variant="line" />

        <SectionDemo
          title="Cómo descargar los archivos convertidos"
          variant="left"
          demo={
            <div className="space-y-3">
              <div className="flex flex-wrap gap-2">
                <Button variant="accent" size="small" disabled>
                  Convertir
                </Button>
                <Button size="small" disabled>
                  Descargar todo
                </Button>
                <Button size="small" disabled>
                  Descargar como ZIP
                </Button>
              </div>
              <div className="flex items-center">
                <input type="checkbox" className="h-4 w-4 rounded border-neutral-300" disabled />
                <span className="text-mid pl-2 text-sm!">Incluir informe CSV en el ZIP</span>
              </div>
              <div className="rounded-lg border border-neutral-200 bg-white p-3 text-sm!">
                <p className="text-light">
                  Tamaño de entrada: <strong className="text-dark">2,4 MB</strong>
                </p>
                <p className="text-light">
                  Tamaño después de la conversión: <strong className="text-dark">890 KB</strong>
                </p>
                <p className="text-light">
                  Ahorrado: <strong className="text-success-icon">1,5 MB (~63%)</strong>
                </p>
              </div>
            </div>
          }
        >
          <p className="text-mid">Después de completar la conversión, tiene varias opciones de descarga:</p>
          <ul className="text-mid mt-3 ml-6 list-disc space-y-2">
            <li>
              <strong>Descargar</strong> (junto a cada archivo) - descarga un solo archivo WebP.
            </li>
            <li>
              <strong>Descargar todo</strong> - descarga todos los archivos uno por uno.
            </li>
            <li>
              <strong>Descargar como ZIP</strong> - crea un archivo con todos los archivos.
            </li>
          </ul>
          <p className="text-mid mt-3">
            <strong>Opción de informe CSV:</strong> Incluya un informe resumido de la conversión en el archivo ZIP.
          </p>
        </SectionDemo>

        <Gap variant="line" />

        <SectionInfo title="Informe de ahorro: ¿qué muestra?">
          <p className="text-mid">Debajo de los botones de conversión encontrará un resumen con información sobre el ahorro:</p>
          <ul className="text-mid mt-3 ml-6 list-disc space-y-2">
            <li>
              <strong>Tamaño total de entrada</strong> – suma de los tamaños de todos los archivos originales.
            </li>
            <li>
              <strong>Tamaño total después de la conversión</strong> – suma de los tamaños de todos los archivos WebP.
            </li>
            <li>
              <strong>Ahorrado</strong> – cuánto espacio ha ganado gracias a la conversión (en KB/MB y porcentaje).
            </li>
          </ul>
          <p className="text-mid mt-3">
            <strong>Copiar resumen:</strong> El botón copia el informe al portapapeles en formato de texto. Puede pegarlo en notas, un correo electrónico o un documento: útil para documentar la optimización de imágenes.
          </p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionInfo title="¿Cuánto se puede ahorrar convirtiendo a WebP?">
          <p className="text-mid mb-4">Los ahorros dependen del tipo de imagen y su compresión original. A continuación, resultados de ejemplo para archivos típicos:</p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-lg border border-neutral-200 bg-white p-4">
              <p className="text-dark mb-2 font-semibold">Foto JPG (cámara)</p>
              <p className="text-light text-sm">2,4 MB → 890 KB</p>
              <p className="text-success-icon mt-1 text-sm font-medium">Ahorro: ~63%</p>
            </div>
            <div className="rounded-lg border border-neutral-200 bg-white p-4">
              <p className="text-dark mb-2 font-semibold">Gráfico PNG (logo)</p>
              <p className="text-light text-sm">180 KB → 45 KB</p>
              <p className="text-success-icon mt-1 text-sm font-medium">Ahorro: ~75%</p>
            </div>
            <div className="rounded-lg border border-neutral-200 bg-white p-4">
              <p className="text-dark mb-2 font-semibold">Foto de producto</p>
              <p className="text-light text-sm">500 KB → 185 KB</p>
              <p className="text-success-icon mt-1 text-sm font-medium">Ahorro: ~63%</p>
            </div>
          </div>
          <p className="text-light mt-4 text-sm">
            Los ahorros reales pueden variar. El convertidor muestra el tamaño exacto antes y después de la conversión para cada archivo, así como un resumen del ahorro total.
          </p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionSteps
          title="¿Qué hace especial a este convertidor JPG/PNG a WebP?"
          grid="two"
          items={[
            {
              icon: <RiShieldCheckLine className="h-6 w-6" />,
              title: 'Privacidad total',
              description: 'Los archivos nunca salen de su ordenador. La conversión se realiza en el navegador: nada se envía a un servidor. Al cerrar la página, los datos se eliminan.',
            },
            {
              icon: <RiInfinityFill className="h-6 w-6" />,
              title: 'Conversión por lotes de varios archivos',
              description:
                'Convierta cualquier cantidad de imágenes a la vez. Todos los archivos se procesan secuencialmente y los resultados están disponibles para descarga individual o como archivo ZIP.',
            },
            {
              icon: <RiSpeedLine className="h-6 w-6" />,
              title: 'Smart Quality',
              description:
                'La herramienta ajusta automáticamente la calidad para que el archivo de salida sea siempre más pequeño que el original. No necesita buscar manualmente la configuración óptima.',
            },
            {
              icon: <RiDownloadLine className="h-6 w-6" />,
              title: 'Descarga como ZIP',
              description: 'Descargue los archivos convertidos individualmente o todos a la vez como archivo ZIP. Opcionalmente, puede incluir un informe CSV con un resumen.',
            },
          ]}
        />

        <Gap variant="line" />

        <SectionSteps
          title="Aspectos a tener en cuenta"
          description="Algunos consejos para evitar problemas durante la conversión:"
          grid="two"
          items={[
            {
              icon: <RiFileImageLine className="h-6 w-6" />,
              title: 'Archivos muy grandes',
              description: 'La conversión de imágenes superiores a 4000×4000 píxeles puede ser más lenta y exigir más del navegador. Si procesa muchos archivos grandes, considere dividirlos en lotes.',
            },
            {
              icon: <RiFlashlightLine className="h-6 w-6" />,
              title: 'Imágenes ya comprimidas',
              description:
                'Si el JPG original se guardAl a muy baja calidad, la conversión a WebP puede no generar grandes ahorros. En casos extremos, el archivo WebP puede ser incluso más grande: Smart Quality reducirá la calidad automáticamente.',
            },
            {
              icon: <RiStackLine className="h-6 w-6" />,
              title: 'Formato PNG con transparencia',
              description:
                'WebP admite transparencia, por lo que los archivos PNG con canal alfa se convertirán correctamente. Sin embargo, el ahorro de tamaño para PNGs con transparencia puede ser menor que para fotos JPG normales.',
            },
            {
              icon: <RiGlobalLine className="h-6 w-6" />,
              title: 'Compatibilidad con navegadores',
              description:
                'Todos los navegadores modernos (Chrome, Firefox, Safari 14+, Edge) admiten WebP. Si el sitio debe funcionar en navegadores antiguos, puede usar la etiqueta <picture> con una fuente alternativa JPG/PNG.',
            },
          ]}
        />

        <Gap variant="line" />

        <SectionSteps
          title="¿Cuándo merece la pena convertir imágenes a WebP?"
          description="La conversión a WebP aporta beneficios en prácticamente todos los casos en que las imágenes se muestran en un navegador:"
          grid="two"
          items={[
            { icon: <RiBuilding2Line className="h-6 w-6" />, title: 'Sitios web empresariales', description: 'Una carga más rápida mejora la primera impresión y reduce la tasa de rebote.' },
            {
              icon: <RiShoppingCartLine className="h-6 w-6" />,
              title: 'Tiendas online',
              description: 'Las fotos de productos suelen ser los archivos más grandes de una página; optimizarlas acelera toda la tienda.',
            },
            { icon: <RiArticleLine className="h-6 w-6" />, title: 'Blogs y portales', description: 'Los artículos con muchas fotos cargan significativamente más rápido.' },
            {
              icon: <RiCameraLine className="h-6 w-6" />,
              title: 'Portafolios de fotografía',
              description: 'Al 85-90% de calidad, la diferencia visual es imperceptible y los archivos son más pequeños.',
            },
            {
              icon: <RiSmartphoneLine className="h-6 w-6" />,
              title: 'Aplicaciones web (PWA)',
              description: 'Los recursos más pequeños significan un rendimiento más rápido, especialmente en dispositivos móviles.',
            },
          ]}
        />

        <Gap variant="line" />

        <FaqPanels
          items={[
            ...faqItems,
            {
              question: '¿Puedo convertir archivos que no sean JPG y PNG?',
              answer:
                'La herramienta está optimizada para formatos JPG y PNG. Otros formatos (p. ej., GIF, BMP, TIFF) se omiten automáticamente al añadirlos.',
              answerSchemaText: 'Solo JPG y PNG. Otros formatos se omiten automáticamente.',
            },
            {
              question: '¿Qué significa el mensaje de archivo más grande que el original?',
              answer:
                'Si ve una advertencia de que el archivo de salida es más grande que el original, significa que la imagen original ya estaba muy comprimida. En ese caso, la conversión a WebP no generará ahorros: es mejor mantener el formato original o probar una calidad más baja.',
              answerSchemaText: 'La imagen original ya estaba muy comprimida. Mantenga el formato original o baje la calidad.',
            },
          ]}
          title="Preguntas frecuentes sobre el convertidor WebP"
          openByDefault={1}
          pageUrl={toAbsoluteUrl('/es/herramientas/convertidor-jpg-png-a-webp')}
        />

        <Gap variant="line" />

        <ToolsCarousel title="Explore otras herramientas" />
        <Gap size="sm" />
      </Wrapper>
    </>
  );
}
