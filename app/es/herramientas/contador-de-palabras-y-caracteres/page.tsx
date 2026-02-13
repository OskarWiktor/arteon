import Breadcrumbs from '@/components/sections/BreadCrumbs';
import HeroBanner from '@/components/sections/HeroBanner';
import WordCountTool from '@/components/sections/tools/WordCountTool';
import ToolsCarousel from '@/components/sections/tools/ToolsCarousel';
import FaqPanels from '@/components/ui/FaqPanels';
import Gap from '@/components/ui/Gap';
import SectionInfo from '@/components/ui/sections/SectionInfo';
import SectionSteps from '@/components/ui/sections/SectionSteps';
import SectionDemo from '@/components/ui/sections/SectionDemo';
import Badge from '@/components/ui/Badge';
import Wrapper from '@/components/ui/Wrapper';
import ToolEditorLayout from '@/components/ui/ToolEditorLayout';
import { toAbsoluteUrl, siteUrl } from '@/utils/absoluteUrl';
import type { Metadata } from 'next';
import Script from 'next/script';
import AdSense from '@/components/ui/AdSense';
import {
  RiListCheck2,
  RiFileTextLine,
  RiBarChartLine,
  RiFileCopyLine,
  RiText,
  RiSpaceShipLine,
  RiParagraph,
  RiTimeLine,
  RiHashtag,
  RiEditLine,
  RiBloggerLine,
  RiShoppingBagLine,
  RiSearchLine,
  RiGraduationCapLine,
  RiTranslate2,
  RiInfinityLine,
  RiCheckboxCircleLine,
  RiUserLine,
  RiTimerLine,
} from 'react-icons/ri';

export const metadata: Metadata = {
  title: 'Contador de palabras y caracteres online gratuito - compruebe la extensión del texto',
  description:
    'Contador de palabras y caracteres online gratuito. Cuente palabras, caracteres, párrafos y tiempo de lectura. Compruebe la extensión óptima del texto para SEO: artículo de blog, descripción de producto, página de servicio. Sin registro.',
  alternates: {
    canonical: toAbsoluteUrl('/es/herramientas/contador-de-palabras-y-caracteres'),
    languages: {
      pl: toAbsoluteUrl('/narzedzia/licznik-slow-i-znakow'),
      en: toAbsoluteUrl('/en/tools/word-and-character-counter'),
      de: toAbsoluteUrl('/de/werkzeuge/wort-und-zeichenzaehler'),
      es: toAbsoluteUrl('/es/herramientas/contador-de-palabras-y-caracteres'),
      fr: toAbsoluteUrl('/fr/outils/compteur-de-mots-et-caracteres'),
    },
  },
  openGraph: {
    title: 'Contador de palabras y caracteres online gratuito - compruebe la extensión del texto',
    description:
      'Contador de palabras y caracteres online gratuito. Cuente palabras, caracteres, párrafos y tiempo de lectura. Compruebe la extensión óptima del texto para SEO: artículo de blog, descripción de producto, página de servicio. Sin registro.',
    url: toAbsoluteUrl('/es/herramientas/contador-de-palabras-y-caracteres'),
    type: 'website',
    images: [{ url: toAbsoluteUrl('/assets/tools/narzedzia-licznik-slow-i-znakow.webp'), width: 1200, height: 630 }],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Contador de palabras y caracteres online gratuito',
  alternateName: [
    'Contador de palabras con evaluación de extensión de texto',
    'Contador de caracteres online',
    'Herramienta de recuento de palabras para redactores',
    'Calculadora de tiempo de lectura',
    'Contador de palabras online',
    'Comprobar cuántas palabras tiene un texto',
    'Contador de palabras para SEO',
    'Extensión óptima de texto para un artículo de blog',
  ],
  url: toAbsoluteUrl('/es/herramientas/contador-de-palabras-y-caracteres'),
  applicationCategory: 'UtilitiesApplication',
  applicationSubCategory: 'TextApplication',
  operatingSystem: 'Any',
  description:
    'Contador de palabras y caracteres gratuito. Comprueba el número de palabras, caracteres, párrafos y el tiempo de lectura estimado. Evalúa la extensión del texto para diferentes tipos de página: descripción de producto, página de servicio, página de inicio, landing page, artículo de blog, guía.',
  inLanguage: 'es',
  isAccessibleForFree: true,
  featureList: [
    'Recuento de palabras',
    'Recuento de caracteres con y sin espacios',
    'Recuento de párrafos',
    'Tiempo de lectura estimado',
    'Evaluación de extensión de texto para diferentes tipos de página',
    'Rangos recomendados para: descripción de producto, página de servicio, página de inicio, landing page, artículo de blog, guía',
    'Copiar informe al portapapeles',
  ],
  offers: {
    '@type': 'Offer',
    price: 0,
    priceCurrency: 'EUR',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Arteon Agency',
    url: siteUrl,
  },
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Cómo usar el contador de palabras y caracteres',
  description:
    'Compruebe la extensión de su texto y evalúe si es adecuada para un tipo de página específico. Descubra cuántas palabras debe tener una descripción de producto, una página de servicio, un artículo de blog o una guía.',
  url: toAbsoluteUrl('/es/herramientas/contador-de-palabras-y-caracteres'),
  totalTime: 'PT2M',
  step: [
    {
      '@type': 'HowToStep',
      name: 'Seleccione un tipo de página',
      text: 'Elija en el desplegable para qué tipo de página está escribiendo. Cada tipo tiene diferentes rangos de recuento de palabras recomendados.',
    },
    {
      '@type': 'HowToStep',
      name: 'Pegue su texto',
      text: 'Pegue o escriba texto en el campo de texto. La herramienta contará automáticamente palabras, caracteres (con y sin espacios), párrafos y estimará el tiempo de lectura.',
    },
    {
      '@type': 'HowToStep',
      name: 'Compruebe la evaluación',
      text: 'Observe la barra de progreso de color y el estado. Verde significa buena extensión, amarillo significa demasiado corto, rojo significa demasiado largo.',
    },
    {
      '@type': 'HowToStep',
      name: 'Copie el informe',
      text: 'El botón Copiar informe copia un resumen con todas las estadísticas y la evaluación de extensión al portapapeles.',
    },
  ],
  publisher: {
    '@type': 'Organization',
    name: 'Arteon Agency',
    url: siteUrl,
  },
};

const faqItems = [
  {
    question: '¿La extensión del texto influye en el posicionamiento en Google?',
    answer:
      'La extensión del texto por sí misma no es un factor de posicionamiento. Google evalúa si el contenido responde a la pregunta del usuario y es valioso para íl. Un texto más corto que responda exhaustivamente a una pregunta puede posicionarse bien: lo que importa es el valor para el lector. Los rangos de esta herramienta se basan en análisis de contenido que se posiciona bien en los resultados de búsqueda.',
    answerSchemaText: 'La extensión del texto no es un factor de posicionamiento directo. Google evalúa el valor del contenido para el usuario.',
  },
  {
    question: '¿Por qué los rangos de palabras son tan amplios?',
    answer:
      'El mismo tipo de página puede requerir diferentes extensiones según la complejidad del tema. Una descripción de producto simple (p. ej., una taza) son 80-150 palabras: solo material, capacidad y uso. Una descripción de portátil son 300-400 palabras porque los compradores preguntan sobre el procesador, la memoria, la pantalla y la batería. Del mismo modo con los servicios: la página de un fontanero local son 500-700 palabras, mientras que una página B2B completa con pasos del proceso y FAQ son 1.200-1.500 palabras.',
    answerSchemaText: 'La diferencia proviene de la complejidad del tema: un producto simple necesita menos palabras que uno complejo.',
  },
  {
    question: '¿Cómo debo interpretar "demasiado corto" o "demasiado largo"?',
    answer:
      'La evaluación muestra dónde se sitúa su texto en relación con el contenido típico de ese tipo. Si el texto está marcado como "demasiado corto" pero responde a todas las preguntas del lector, la extensión está bien. Si es "demasiado largo" pero cada párrafo aporta información nueva, la extensión está justificada.',
    answerSchemaText: 'La evaluación muestra dónde se sitúa el texto respecto al contenido típico. Si el texto responde a las preguntas del lector, la extensión es adecuada.',
  },
  {
    question: '¿Cómo funciona la calculadora de tiempo de lectura?',
    answer:
      'La herramienta divide el número de palabras entre 200, la velocidad de lectura media para un texto típico. Un texto técnico o exigente (p. ej., documentación, condiciones de servicio) se lee más lento. Un artículo ligero de estilo de vida, más rápido. El resultado es un valor aproximado que ayuda a estimar cuánto tiempo pasará un lector con el texto.',
    answerSchemaText: 'La herramienta asume una velocidad de lectura media de 200 palabras por minuto. Es un valor aproximado para texto típico.',
  },
  {
    question: '¿De dónde provienen los rangos recomendados?',
    answer:
      'Los rangos se basan en análisis de contenido que se posiciona bien en los motores de búsqueda y en las mejores prácticas de creación de contenido. Son intencionadamente amplios porque el mismo tipo de página puede requerir diferentes extensiones según el sector, la complejidad del tema y las necesidades del lector. Los rangos sirven como punto de partida para evaluar si el texto se encuentra dentro de un rango típico para un tipo de página específico.',
    answerSchemaText: 'Los rangos se basan en análisis SEO y mejores prácticas de creación de contenido.',
  },
  {
    question: '¿Puedo copiar el informe con las estadísticas?',
    answer:
      'Sí. Debajo de las estadísticas encontrará un botón Copiar informe: copia un resumen con el recuento de palabras, caracteres, párrafos, tiempo de lectura y la evaluación de extensión al portapapeles. Puede pegarlo en un documento o enviarlo a colaboradores.',
    answerSchemaText: 'Sí. Haga clic en el botón Copiar informe debajo de las estadísticas. Se copiará un resumen con todas las métricas y la evaluación al portapapeles.',
  },
];

export default function WordCounterPage() {
  return (
    <>
      <Script id="ld-json-word-count-tool-es" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Script id="ld-json-word-count-howto-es" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />

      <HeroBanner
        title="Contador de palabras y caracteres con evaluación de extensión"
        description="Pegue su texto, seleccione un tipo de página y la herramienta mostrará el recuento de palabras, caracteres, párrafos y evaluará si la extensión es adecuada para ese tipo de contenido"
        overlay="black"
        backgroundImage="/assets/tools/narzedzia-licznik-slow-i-znakow.webp"
      />

      <Breadcrumbs
        second={{ href: '/es/herramientas', label: 'Herramientas' }}
        third={{ href: '/es/herramientas/contador-de-palabras-y-caracteres', label: 'Contador de palabras y caracteres' }}
        includeJsonLd
        locale="es"
      />

      <ToolEditorLayout>
        <AdSense variant="tool-banner" className="my-3" />

        <WordCountTool />
      </ToolEditorLayout>

      <Wrapper>
        <Gap variant="line" />

        <SectionInfo title="Contador de palabras online gratuito: cuente y evalúe la extensión del texto">
          <p className="text-mid">
            Esta herramienta de conteo de palabras le permite comprobar rápidamente la extensión de cualquier texto. Pegue su contenido y el contador sumará palabras, caracteres y párrafos. También
            verá cuántos minutos se tarda en leer y si la extensión se ajusta al tipo de página que seleccione.
          </p>
          <p className="text-mid mt-3">
            Cada tipo de página tiene un propósito diferente: una descripción de producto responde a las preguntas del comprador, un artículo de blog profundiza en un tema y una página de servicio
            explica lo que recibirá el cliente. El contador muestra rangos para cada uno de estos tipos basados en análisis de contenido bien posicionado.
          </p>
        </SectionInfo>

        <Gap size="sm" />

        <SectionSteps
          title="Cómo usar el contador de palabras y caracteres"
          description="Comprobar la extensión del texto lleva menos de un minuto:"
          grid="four"
          items={[
            {
              icon: <RiListCheck2 className="h-6 w-6" />,
              title: '1. Seleccione el tipo de página',
              description: 'Elija en el desplegable para qué tipo de página está escribiendo. Cada tipo tiene diferentes recuentos de palabras mínimos y máximos recomendados.',
            },
            {
              icon: <RiFileTextLine className="h-6 w-6" />,
              title: '2. Pegue su texto',
              description:
                'Pegue o escriba texto en el campo grande de la derecha. La herramienta contará inmediatamente palabras, caracteres (con y sin espacios), párrafos y estimará el tiempo de lectura.',
            },
            {
              icon: <RiBarChartLine className="h-6 w-6" />,
              title: '3. Compruebe la evaluación',
              description:
                'Observe la barra de progreso de color y el estado. Verde significa buena extensión, amarillo significa demasiado corto, rojo significa demasiado largo. Debajo encontrará un consejo útil.',
            },
            {
              icon: <RiFileCopyLine className="h-6 w-6" />,
              title: '4. Copie el informe',
              description: 'El botón Copiar informe copia un resumen con el recuento de palabras, caracteres, párrafos, tiempo de lectura y la evaluación de extensión al portapapeles.',
            },
          ]}
        />

        <Gap variant="line" />

        <SectionSteps
          title="Qué mide el contador: palabras, caracteres, tiempo de lectura"
          description="El contador registra cinco métricas clave:"
          grid="two"
          items={[
            {
              icon: <RiText className="h-6 w-6" />,
              title: 'Palabras',
              description: 'Recuento total de palabras. Este es el indicador principal de la extensión del texto.',
            },
            {
              icon: <RiSpaceShipLine className="h-6 w-6" />,
              title: 'Caracteres (con espacios)',
              description: 'Todos los caracteres incluidos los espacios. útil cuando un CMS tiene un límite de caracteres (p. ej., listados en marketplaces).',
            },
            {
              icon: <RiHashtag className="h-6 w-6" />,
              title: 'Caracteres (sin espacios)',
              description: 'Solo letras, dígitos y signos de puntuación. A veces requerido por imprentas o para facturación de traducciones.',
            },
            {
              icon: <RiParagraph className="h-6 w-6" />,
              title: 'Párrafos',
              description: 'Cuántos bloques de texto separados por líneas en blanco tiene. Ayuda a evaluar si el texto está bien estructurado.',
            },
            {
              icon: <RiTimeLine className="h-6 w-6" />,
              title: 'Tiempo de lectura',
              description: 'La calculadora de tiempo de lectura muestra cuántos minutos se tarda en leer el texto a una velocidad media de 200 palabras por minuto.',
            },
          ]}
        />

        <Gap variant="line" />

        <SectionDemo
          title="Cómo interpretar los resultados"
          subtitle="Estados de evaluación"
          demo={
            <div className="space-y-3">
              <div className="flex items-center gap-3 rounded-lg border border-neutral-200 bg-white p-3">
                <Badge variant="success" size="sm">
                  Buena extensión
                </Badge>
                <span className="text-mid text-sm!">El texto está dentro del rango</span>
              </div>
              <div className="flex items-center gap-3 rounded-lg border border-neutral-200 bg-white p-3">
                <Badge variant="warning" size="sm">
                  Por debajo del rango
                </Badge>
                <span className="text-mid text-sm!">El texto es más corto de lo típico</span>
              </div>
              <div className="flex items-center gap-3 rounded-lg border border-neutral-200 bg-white p-3">
                <Badge variant="error" size="sm">
                  Por encima del rango
                </Badge>
                <span className="text-mid text-sm!">El texto es más largo de lo típico</span>
              </div>
              <div className="mt-2 rounded-lg bg-neutral-100 p-3">
                <div className="mb-1 flex items-center justify-between text-sm!">
                  <span className="text-dark font-medium">Progreso</span>
                  <span className="text-mid">1200 / 1200-3000</span>
                </div>
                <div className="h-2 w-full rounded-full bg-neutral-200">
                  <div className="bg-success-icon h-2 w-2/5 rounded-full" />
                </div>
              </div>
            </div>
          }
        >
          <p className="text-mid mb-4">La barra de progreso de color y el estado le ayudan a evaluar rápidamente la extensión del texto:</p>
          <ul className="text-mid list-disc space-y-2 pl-5">
            <li>
              <strong className="text-success-text">Buena extensión</strong> (verde) - el texto se encuentra dentro del rango aproximado para el tipo de página seleccionado.
            </li>
            <li>
              <strong className="text-warning-text">Por debajo del rango</strong> (amarillo) - el texto es más corto de lo típico para este tipo de página. Si responde a todas las preguntas del
              lector, la extensión puede ser correcta.
            </li>
            <li>
              <strong className="text-error-text">Por encima del rango</strong> (rojo) - el texto es más largo de lo típico. Si cada párrafo aporta información nueva, la extensión está justificada.
            </li>
          </ul>
          <p className="text-mid mt-4">
            Los rangos se basan en análisis de contenido que se posiciona bien en los motores de búsqueda. Si el texto responde a las preguntas del lector, la extensión es adecuada independientemente
            del resultado del contador.
          </p>
        </SectionDemo>

        <Gap variant="line" />

        <SectionInfo title="Cuántas palabras debe tener un texto: extensión óptima para SEO">
          <p className="text-mid mb-4">
            Los rangos a continuación se basan en análisis de contenido que se posiciona bien en los motores de búsqueda. La extensión del texto por sí misma no influye en el posicionamiento en
            Google: lo que importa es si el contenido responde a las preguntas del lector.
          </p>
          <div className="overflow-x-auto">
            <table className="text-mid w-full text-left">
              <thead>
                <tr className="border-b border-neutral-200">
                  <th className="py-2 pr-4 font-semibold">Tipo de página</th>
                  <th className="py-2 pr-4 font-semibold">Rango</th>
                  <th className="py-2 font-semibold">Cuándo más corto, cuándo más largo?</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-neutral-100">
                  <td className="py-2 pr-4">Descripción de producto</td>
                  <td className="py-2 pr-4 whitespace-nowrap">80?"400 palabras</td>
                  <td className="text-primary-light0 py-2 text-sm">
                    Producto simple (p. ej., una taza): 80?"150 palabras. Equipamiento complejo (p. ej., un portátil): 300?"400 palabras, porque los compradores tienen más preguntas.
                  </td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="py-2 pr-4">Página de servicio</td>
                  <td className="py-2 pr-4 whitespace-nowrap">500?"1500 palabras</td>
                  <td className="text-primary-light0 py-2 text-sm">Servicio local (p. ej., fontanero): 500?"700 palabras. Servicio B2B con proceso y FAQ: 1.200?"1.500 palabras.</td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="py-2 pr-4">Página de inicio</td>
                  <td className="py-2 pr-4 whitespace-nowrap">400?"1000 palabras</td>
                  <td className="text-primary-light0 py-2 text-sm">
                    La página de inicio transmite el valor principal y guía a los visitantes: el texto apoya la navegación, no sustituye a las subpáginas.
                  </td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="py-2 pr-4">Landing page</td>
                  <td className="py-2 pr-4 whitespace-nowrap">600?"2500 palabras</td>
                  <td className="text-primary-light0 py-2 text-sm">Oferta simple: 600?"1.000 palabras. Oferta que requiere explicar proceso, variantes y objeciones: 1.500?"2.500 palabras.</td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="py-2 pr-4">Artículo de blog</td>
                  <td className="py-2 pr-4 whitespace-nowrap">1200?"3000 palabras</td>
                  <td className="text-primary-light0 py-2 text-sm">Respuesta a una pregunta simple: 1.200?"1.800 palabras. Tema complejo con muchos aspectos: 2.000?"3.000 palabras.</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">Guía</td>
                  <td className="py-2 pr-4 whitespace-nowrap">2500?"6000 palabras</td>
                  <td className="text-primary-light0 py-2 text-sm">Tema acotado: 2.500?"3.500 palabras. Tema amplio con muchos pasos y ejemplos: 4.000?"6.000 palabras.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </SectionInfo>

        <Gap variant="line" />

        <SectionSteps
          title="¿Para quién es el contador de palabras online?"
          description="Una herramienta de conteo de palabras para redactores y más: estos son quienes más usan el contador:"
          grid="three"
          items={[
            {
              icon: <RiEditLine className="h-6 w-6" />,
              title: 'Redactores y creadores de contenido',
              description:
                'Compruebe si el texto se encuentra dentro del rango recomendado para un tipo de página específico. El contador de palabras SEO ayuda a evaluar si un artículo está suficientemente desarrollado.',
            },
            {
              icon: <RiBloggerLine className="h-6 w-6" />,
              title: 'Bloggers',
              description: 'Controle la extensión de las publicaciones para mantener la consistencia. Compruebe el tiempo de lectura antes de publicar.',
            },
            {
              icon: <RiShoppingBagLine className="h-6 w-6" />,
              title: 'Propietarios de tiendas online',
              description: 'Verifique las descripciones de productos contra los límites de caracteres en las plataformas de venta (Amazon, eBay, Etsy).',
            },
            {
              icon: <RiSearchLine className="h-6 w-6" />,
              title: 'Especialistas en SEO',
              description: 'Evalúe si el contenido de la página tiene una extensión óptima en comparación con la competencia. Analice la relación palabras-tema.',
            },
            {
              icon: <RiGraduationCapLine className="h-6 w-6" />,
              title: 'Estudiantes y acadímicos',
              description: 'Compruebe si un trabajo cumple con el límite de palabras o caracteres requerido.',
            },
            {
              icon: <RiTranslate2 className="h-6 w-6" />,
              title: 'Traductores',
              description: 'Cuente caracteres sin espacios para presupuestos de traducción (una unidad de facturación estándar).',
            },
          ]}
        />

        <Gap variant="line" />

        <SectionInfo title="Límites de caracteres en plataformas populares">
          <p className="text-mid mb-4">El contador de caracteres es útil al crear contenido para plataformas con restricciones de longitud:</p>
          <div className="overflow-x-auto">
            <table className="text-mid w-full text-left">
              <thead>
                <tr className="border-b border-neutral-200">
                  <th className="py-2 pr-4 font-semibold">Plataforma / Elemento</th>
                  <th className="py-2 pr-4 font-semibold">Límite de caracteres</th>
                  <th className="py-2 font-semibold">Notas</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-neutral-100">
                  <td className="py-2 pr-4">Google - meta título</td>
                  <td className="py-2 pr-4 whitespace-nowrap">50-60 caracteres</td>
                  <td className="text-primary-light0 py-2 text-sm">Los títulos más largos se truncan en los resultados de búsqueda.</td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="py-2 pr-4">Google - meta descripción</td>
                  <td className="py-2 pr-4 whitespace-nowrap">150-160 caracteres</td>
                  <td className="text-primary-light0 py-2 text-sm">Descripción visible debajo del enlace en los resultados de búsqueda.</td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="py-2 pr-4">Amazon - título de producto</td>
                  <td className="py-2 pr-4 whitespace-nowrap">200 caracteres</td>
                  <td className="text-primary-light0 py-2 text-sm">Título conciso con las palabras clave más importantes.</td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="py-2 pr-4">X (Twitter) - publicación</td>
                  <td className="py-2 pr-4 whitespace-nowrap">280 caracteres</td>
                  <td className="text-primary-light0 py-2 text-sm">Límite estándar para usuarios regulares.</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">LinkedIn - publicación</td>
                  <td className="py-2 pr-4 whitespace-nowrap">3000 caracteres</td>
                  <td className="text-primary-light0 py-2 text-sm">Después de ~210 caracteres aparece "ver más".</td>
                </tr>
              </tbody>
            </table>
          </div>
        </SectionInfo>

        <Gap variant="line" />

        <SectionSteps
          title="¿Qué hace especial a este contador de palabras y caracteres?"
          grid="two"
          items={[
            {
              icon: <RiInfinityLine className="h-6 w-6" />,
              title: 'Seis tipos de página con rangos recomendados',
              description: 'Descripción de producto, página de servicio, página de inicio, landing page, artículo de blog y guía: cada tipo tiene sus propios rangos basados en análisis.',
            },
            {
              icon: <RiUserLine className="h-6 w-6" />,
              title: 'Procesamiento local en el navegador',
              description: 'Su texto nunca se envía a ningún servidor: todo el análisis se realiza localmente en su dispositivo.',
            },
            {
              icon: <RiCheckboxCircleLine className="h-6 w-6" />,
              title: 'Evaluación de extensión del texto',
              description: 'No solo cuenta palabras: obtiene información sobre si la extensión es adecuada para el tipo de página seleccionado.',
            },
            {
              icon: <RiBarChartLine className="h-6 w-6" />,
              title: 'Rangos basados en SEO',
              description: 'Las extensiones recomendadas se basan en análisis de contenido que se posiciona bien en los motores de búsqueda.',
            },
            {
              icon: <RiTimerLine className="h-6 w-6" />,
              title: 'Tiempo de lectura',
              description: 'Sepa de inmediato cuántos minutos tardarán los lectores en leer el texto.',
            },
            {
              icon: <RiFileCopyLine className="h-6 w-6" />,
              title: 'Copiar informe',
              description: 'El botón Copiar informe copia un resumen con todas las estadísticas y la evaluación de extensión al portapapeles.',
            },
          ]}
        />

        <Gap variant="line" />

        <FaqPanels
          title="Preguntas frecuentes sobre el contador de palabras y caracteres"
          openByDefault={1}
          items={faqItems}
          pageUrl={toAbsoluteUrl('/es/herramientas/contador-de-palabras-y-caracteres')}
        />

        <Gap variant="line" />

        <ToolsCarousel title="Explore otras herramientas" />

        <Gap size="sm" />
      </Wrapper>
    </>
  );
}
