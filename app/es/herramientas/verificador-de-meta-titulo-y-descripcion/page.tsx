import Script from 'next/script';
import HeroBanner from '@/components/sections/HeroBanner';
import Breadcrumbs from '@/components/sections/BreadCrumbs';
import MetaTitleDescriptionTool from '@/components/sections/tools/MetaTitleDescriptionTool';
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
import { getToolAlternates } from '@/lib/i18n/pages/tool-meta';
import type { Metadata } from 'next';
import AdSense from '@/components/ui/AdSense';
import {
  RiPencilLine,
  RiFileTextLine,
  RiEyeLine,
  RiToolsLine,
  RiRulerLine,
  RiShoppingBagLine,
  RiSearchLine,
  RiEditLine,
  RiMegaphoneLine,
  RiCodeLine,
  RiRuler2Line,
  RiCheckboxCircleLine,
  RiInfinityLine,
  RiUserLine,
} from 'react-icons/ri';

const LOCALE = 'es' as const;
const TOOL_KEY = 'metaCounter' as const;

export const metadata: Metadata = {
  title: 'Verificador gratuito de longitud de meta título y descripción - ancho en píxeles',
  description:
    'Verificador gratuito de longitud de meta título y descripción online. Compruebe el número de caracteres, el ancho en píxeles y vea cómo se muestra su página en los resultados de búsqueda de Google. Sin registro.',
  alternates: getToolAlternates(TOOL_KEY, LOCALE),
  openGraph: {
    title: 'Verificador gratuito de longitud de meta título y descripción - ancho en píxeles',
    description:
      'Verificador gratuito de longitud de meta título y descripción online. Compruebe el número de caracteres, el ancho en píxeles y vea cómo se muestra su página en los resultados de búsqueda de Google. Sin registro.',
    url: toAbsoluteUrl('/es/herramientas/verificador-de-meta-titulo-y-descripcion'),
    type: 'website',
    images: [{ url: toAbsoluteUrl('/assets/tools/narzedzia-licznik-dlugosci-meta-title-i-description.webp'), width: 1200, height: 630 }],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Verificador gratuito de longitud de meta título y descripción online',
  alternateName: [
    'Verificador de meta título y descripción con vista previa de Google',
    'Vista previa de snippet de Google online',
    'Comprobar longitud de título SEO en píxeles',
    'Herramienta de verificación de longitud de meta etiquetas',
    'Vista previa de SERP de Google',
    'Cuántos caracteres tiene la meta descripción',
    'Longitud óptima de título y descripción',
    'Verificador de meta etiquetas SEO',
  ],
  url: toAbsoluteUrl('/es/herramientas/verificador-de-meta-titulo-y-descripcion'),
  applicationCategory: 'BusinessApplication',
  applicationSubCategory: 'SEOTool',
  operatingSystem: 'Any',
  description:
    'Verificador gratuito de longitud de meta título y descripción. Comprueba el número de caracteres, el número de palabras y el ancho en píxeles. Muestra una vista previa de cómo aparecen el título y la descripción en los resultados de búsqueda de Google.',
  featureList: [
    'Contador de caracteres para meta título',
    'Contador de caracteres para meta descripción',
    'Medición de ancho en píxeles (compatible con Google)',
    'Contador de palabras para título y descripción',
    'Vista previa de resultados de búsqueda de Google',
    'Evaluación de longitud codificada por colores (demasiado corto / óptimo / demasiado largo)',
    'Aviso de truncamiento para título y descripción',
    'Recomendaciones de longitud óptima',
    'Procesamiento local en el navegador',
  ],
  inLanguage: 'es',
  isAccessibleForFree: true,
  offers: { '@type': 'Offer', price: 0, priceCurrency: 'EUR' },
  publisher: { '@type': 'Organization', name: 'Arteon Agency', url: siteUrl },
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Cómo comprobar la longitud del meta título y la descripción',
  description:
    'Compruebe la longitud de su meta título y descripción en píxeles y caracteres. Descubra cuántos caracteres debe tener un título (50-60) y una descripción (120-160) y cómo evitar el truncamiento en Google.',
  url: toAbsoluteUrl('/es/herramientas/verificador-de-meta-titulo-y-descripcion'),
  totalTime: 'PT3M',
  step: [
    {
      '@type': 'HowToStep',
      name: 'Introduzca el meta título',
      text: 'Pegue o escriba el título de su página en el campo Meta título. La herramienta calculará automáticamente el número de caracteres, el número de palabras y el ancho en píxeles.',
    },
    {
      '@type': 'HowToStep',
      name: 'Introduzca la meta descripción',
      text: 'Añada la descripción de la página en el campo Meta descripción. Verá métricas de longitud y una evaluación de si la descripción se encuentra dentro del rango recomendado.',
    },
    {
      '@type': 'HowToStep',
      name: 'Compruebe la vista previa de Google',
      text: 'Vea cómo se ven el título y la descripción en un resultado de búsqueda de Google simulado. La vista previa trunca automáticamente el texto tal como lo haría el motor de búsqueda.',
    },
    { '@type': 'HowToStep', name: 'Ajuste según los consejos', text: 'Si el estado muestra Demasiado corto o Demasiado largo, ajuste el texto y observe los cambios en tiempo real.' },
  ],
  publisher: { '@type': 'Organization', name: 'Arteon Agency', url: siteUrl },
};

const faqItems = [
  {
    question: '¿Por qué la herramienta muestra el ancho en píxeles en vez de solo el número de caracteres?',
    answer:
      'Las distintas letras tienen anchos diferentes. La letra "i" ocupa mucho menos espacio que "m" o "W". Google trunca los títulos y las descripciones según el ancho en píxeles, no según el número de caracteres. Esto significa que un texto con muchas letras estrechas puede ser más largo que un texto con letras anchas, incluso con el mismo número de caracteres.',
    answerSchemaText: 'Google trunca según el ancho en píxeles, no según el número de caracteres. Las distintas letras tienen anchos diferentes.',
  },
  {
    question: '¿Google siempre muestra mi meta título y descripción?',
    answer:
      'No siempre. Google puede cambiar el título o la descripción mostrados si considera que algo diferente se ajusta mejor a la consulta del usuario. A menudo extrae fragmentos del contenido de la página. Las meta etiquetas bien escritas aumentan la probabilidad de que Google las use, pero no hay garantía del 100\u00a0%.',
    answerSchemaText: 'No siempre. Google puede cambiar el título o la descripción mostrados para ajustarse mejor a la consulta.',
  },
  {
    question: '¿Cuál es la longitud óptima del meta título y la meta descripción?',
    answer:
      'El meta título debe tener unos 50-60 caracteres (hasta ~580 píxeles de ancho). La meta descripción funciona mejor con 120-160 caracteres (hasta ~920 píxeles). Son valores aproximados: Google no publica límites estrictos y puede ajustarlos.',
    answerSchemaText: 'Meta título: 50-60 caracteres (~580px). Meta descripción: 120-160 caracteres (~920px). Son valores aproximados.',
  },
  {
    question: '¿La meta descripción afecta al posicionamiento de la página en Google?',
    answer:
      'La meta descripción no es un factor de posicionamiento directo: Google no la utiliza para determinar la posición de la página. Sin embargo, una buena descripción aumenta la tasa de clics desde los resultados de búsqueda, y un CTR más alto puede influir indirectamente en el posicionamiento.',
    answerSchemaText: 'La meta descripción no es un factor de posicionamiento directo, pero una buena descripción puede aumentar el CTR e influir indirectamente en el posicionamiento.',
  },
  {
    question: '¿Qué debo hacer si mi título es demasiado largo?',
    answer:
      'Acorte el título manteniendo las palabras más importantes al principio. Elimine palabras de relleno (p. ej., "mejor", "profesional") y céntrese en el valor específico para el usuario. Si incluye el nombre de marca, colóquelo al final tras un separador.',
    answerSchemaText: 'Acorte el título, mantenga las palabras importantes al principio y mueva el nombre de marca al final.',
  },
];

export default function MetaTitleDescriptionPage() {
  return (
    <>
      <Script id="ld-json-meta-length-tool-es" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Script id="ld-json-meta-length-howto-es" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />

      <HeroBanner
        title="Compruebe la longitud del título y la descripción de su página en Google"
        description="Introduzca un título y una descripción, y la herramienta calculará el número de caracteres, el número de palabras, el ancho en píxeles y mostrará si la longitud cumple con las mejores prácticas SEO"
        overlay="black"
        backgroundImage="/assets/tools/narzedzia-licznik-dlugosci-meta-title-i-description.webp"
      />

      <Breadcrumbs
        second={{ href: '/es/herramientas', label: 'Herramientas' }}
        third={{ href: '/es/herramientas/verificador-de-meta-titulo-y-descripcion', label: 'Verificador de meta título y descripción' }}
        includeJsonLd
        locale="es"
      />

      <ToolEditorLayout>
        <AdSense variant="tool-banner" className="my-3" />
        <MetaTitleDescriptionTool />
      </ToolEditorLayout>

      <Wrapper>
        <Gap variant="line" />

        <SectionInfo title="¿Qué son el meta título y la meta descripción?">
          <p className="text-mid">
            El meta título y la meta descripción son dos textos cortos que describen el contenido de una página web. No son visibles directamente en la página, pero aparecen en los resultados de
            búsqueda de Google como el título (enlace azul) y la descripción (texto gris debajo del título).
          </p>
          <p className="text-mid mt-3">
            Unas meta etiquetas bien escritas funcionan como un anuncio de su página en los resultados de búsqueda: atraen la atención y aumentan la probabilidad de un clic. Unas etiquetas mal
            escritas o truncadas pueden desanimar los clics, incluso si la página en sí es valiosa.
          </p>
        </SectionInfo>

        <Gap size="sm" />

        <SectionSteps
          title="Cómo usar el verificador de meta título y descripción"
          description="Comprobar la longitud de las meta etiquetas lleva aproximadamente un minuto:"
          grid="four"
          items={[
            {
              icon: <RiPencilLine className="h-6 w-6" />,
              title: '1. Introduzca el título de la página',
              description:
                'Pegue o escriba el meta título en el primer campo de texto. La herramienta mostrará inmediatamente tres métricas: número de caracteres, número de palabras y ancho en píxeles. Junto a ellas aparecerá un estado codificado por colores.',
            },
            {
              icon: <RiFileTextLine className="h-6 w-6" />,
              title: '2. Introduzca la descripción de la página',
              description:
                'Añada la meta descripción en el segundo campo. Verá las mismas métricas. El campo es más grande porque las descripciones son más largas que los títulos: caben 2-3 frases cortas.',
            },
            {
              icon: <RiEyeLine className="h-6 w-6" />,
              title: '3. Compruebe la vista previa',
              description:
                'En el lado derecho (escritorio) o debajo (móvil) verá una vista previa que muestra cómo se ven el título y la descripción en los resultados de búsqueda de Google. El texto se trunca automáticamente como lo haría el motor de búsqueda.',
            },
            {
              icon: <RiToolsLine className="h-6 w-6" />,
              title: '4. Ajuste según los consejos',
              description:
                'Si el estado muestra Demasiado corto o Demasiado largo, ajuste el texto. Los cambios son visibles al instante: puede experimentar hasta obtener la longitud y el contenido óptimos.',
            },
          ]}
        />

        <Gap variant="line" />

        <SectionInfo title="¿Cuántos caracteres deben tener el meta título y la descripción?">
          <p className="text-mid mb-4">
            Google trunca los títulos y las descripciones que son demasiado largos. A continuación se muestran los rangos recomendados que reducen el riesgo de que el texto se corte en los resultados
            de búsqueda.
          </p>
          <div className="overflow-x-auto">
            <table className="text-mid w-full text-left">
              <thead>
                <tr className="border-b border-neutral-200">
                  <th className="py-2 pr-4 font-semibold">Elemento</th>
                  <th className="py-2 pr-4 font-semibold">Caracteres</th>
                  <th className="py-2 pr-4 font-semibold">Píxeles</th>
                  <th className="py-2 font-semibold">Notas</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-neutral-100">
                  <td className="py-2 pr-4 font-medium">Meta título</td>
                  <td className="py-2 pr-4 whitespace-nowrap">50?"60 caracteres</td>
                  <td className="py-2 pr-4 whitespace-nowrap">hasta ~580 px</td>
                  <td className="text-primary-light0 py-2 text-sm">Coloque las palabras más importantes al principio. Nombre de marca al final.</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-medium">Meta descripción</td>
                  <td className="py-2 pr-4 whitespace-nowrap">120?"160 caracteres</td>
                  <td className="py-2 pr-4 whitespace-nowrap">hasta ~920 px</td>
                  <td className="text-primary-light0 py-2 text-sm">Caben 2-3 frases cortas. Termine con una llamada a la acción.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-mid mt-4 text-sm">Son valores aproximados: Google no publica límites estrictos y puede ajustarlos según el dispositivo y el contexto de la consulta.</p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionDemo
          title="Cómo interpretar los resultados"
          demo={
            <div className="space-y-3">
              <div className="rounded-lg border border-neutral-200 bg-white p-3">
                <p className="text-dark mb-2 text-sm! font-medium">Meta título</p>
                <div className="flex flex-wrap gap-2 text-sm!">
                  <span className="text-mid">
                    Caracteres: <strong>52</strong>
                  </span>
                  <span className="text-mid">
                    Palabras: <strong>7</strong>
                  </span>
                  <span className="text-mid">
                    Píxeles: <strong>456px</strong>
                  </span>
                </div>
                <Badge variant="success" size="sm" className="mt-2">
                  Buena longitud
                </Badge>
              </div>
              <div className="rounded-lg border border-neutral-200 bg-white p-3">
                <p className="text-dark mb-2 text-sm! font-medium">Meta descripción</p>
                <div className="flex flex-wrap gap-2 text-sm!">
                  <span className="text-mid">
                    Caracteres: <strong>142</strong>
                  </span>
                  <span className="text-mid">
                    Palabras: <strong>21</strong>
                  </span>
                  <span className="text-mid">
                    Píxeles: <strong>812px</strong>
                  </span>
                </div>
                <Badge variant="success" size="sm" className="mt-2">
                  Buena longitud
                </Badge>
              </div>
            </div>
          }
        >
          <p className="text-mid mb-4">La herramienta muestra tres métricas para cada campo junto con una evaluación de longitud codificada por colores:</p>

          <h3 className="h5 mt-6 mb-2">Mítricas</h3>
          <ul className="text-mid list-disc space-y-2 pl-5">
            <li>
              <strong>Caracteres</strong> - número total de caracteres (incluidos los espacios). Fácil de entender pero menos preciso que los píxeles.
            </li>
            <li>
              <strong>Palabras</strong> - número de palabras. útil para una evaluación rápida de la longitud.
            </li>
            <li>
              <strong>Ancho (px)</strong> - ancho del texto en píxeles. Este es el valor que Google realmente usa al truncar.
            </li>
          </ul>

          <h3 className="h5 mt-6 mb-2">Estados de evaluación</h3>
          <ul className="text-mid list-disc space-y-2 pl-5">
            <li>
              <strong className="text-success-text">Buena longitud</strong> (verde) - el texto está dentro del rango recomendado. Google debería mostrarlo completo.
            </li>
            <li>
              <strong className="text-warning-text">Demasiado corto</strong> (amarillo) - el texto es muy corto. Tiene espacio para más información que podría fomentar los clics.
            </li>
            <li>
              <strong className="text-error-text">Demasiado largo</strong> (rojo) - el texto excede el rango recomendado. Google probablemente lo truncará. Considere acortarlo.
            </li>
            <li>
              <strong className="text-light">Sin datos</strong> (gris) - el campo está vacío. Introduzca texto para ver el análisis.
            </li>
          </ul>
        </SectionDemo>

        <Gap variant="line" />

        <SectionDemo
          title="¿Por qué el ancho en píxeles es más importante que el número de caracteres?"
          demo={
            <div className="space-y-3">
              <div className="rounded-lg border border-neutral-200 bg-white p-3">
                <p className="text-dark text-sm! font-medium">iiiiiiiiiiiiiiii (16 caracteres)</p>
                <div className="bg-success-icon mt-1 h-3 w-1/4 rounded-full" />
                <p className="text-light mt-1 text-xs!">~64px de ancho</p>
              </div>
              <div className="rounded-lg border border-neutral-200 bg-white p-3">
                <p className="text-dark text-sm! font-medium">WWWWWWWWWWWWWWWW (16 caracteres)</p>
                <div className="bg-error-icon mt-1 h-3 w-3/4 rounded-full" />
                <p className="text-light mt-1 text-xs!">~256px de ancho</p>
              </div>
            </div>
          }
        >
          <p className="text-mid">
            Las letras diferentes tienen anchos diferentes. Compare &quot;iiii&quot; y &quot;WWWW&quot;: ambas tienen 4 caracteres, pero el ancho visual es completamente diferente. Google mide el
            ancho del texto en píxeles, no en caracteres.
          </p>
          <p className="text-mid mt-3">
            Por eso, un título con muchas letras estrechas (i, l, t, f) puede ser más largo que un título con letras anchas (W, M, O), a pesar de tener el mismo número de caracteres. La herramienta
            muestra ambos valores: el número de caracteres (más fácil de entender) y el ancho en píxeles (más preciso para Google).
          </p>
        </SectionDemo>

        <Gap variant="line" />

        <SectionInfo title="Vista previa del snippet: ¿qué muestra?">
          <p className="text-mid">
            La vista previa (snippet preview) simula cómo se ven el título y la descripción de la página en los resultados de búsqueda de Google. Es una visualización orientativa: la apariencia real
            puede variar ligeramente según el dispositivo y el navegador.
          </p>
          <h3 className="h5 mt-6 mb-2">Elementos de la vista previa</h3>
          <ul className="text-mid list-disc space-y-2 pl-5">
            <li>
              <strong>URL</strong> - la dirección de la página que se muestra sobre el título. Puede introducirla en un campo opcional para un resultado más realista.
            </li>
            <li>
              <strong>Título</strong> - el encabezado azul. Si es demasiado largo, la herramienta lo trunca automáticamente y añade puntos suspensivos.
            </li>
            <li>
              <strong>Descripción</strong> - el texto gris debajo del título. También se trunca si supera el límite.
            </li>
          </ul>
        </SectionInfo>

        <Gap variant="line" />

        <SectionSteps
          title="Problemas comunes y soluciones"
          grid="two"
          items={[
            {
              icon: <RiRulerLine className="h-6 w-6" />,
              title: 'El título es demasiado largo',
              description:
                'Acorte el título manteniendo las palabras más importantes al principio. Elimine adjetivos como "mejor" o "profesional", que raramente añaden valor. Coloque el nombre de marca al final tras un separador.',
            },
            {
              icon: <RiFileTextLine className="h-6 w-6" />,
              title: 'La descripción es demasiado corta',
              description: 'Añada más información: qué encontrará el usuario en la página, qué beneficio obtendrá, qué diferencia la oferta. Termine con una llamada a la acción.',
            },
            {
              icon: <RiRuler2Line className="h-6 w-6" />,
              title: 'El ancho en píxeles es diferente al esperado',
              description: 'La herramienta mide el ancho usando una fuente estándar similar a la que usa Google. El resultado puede variar ligeramente según el navegador.',
            },
          ]}
        />

        <Gap variant="line" />

        <SectionSteps
          title="¿Para quién es el verificador de meta etiquetas?"
          description="El verificador de meta etiquetas es útil para cualquiera que cree contenido web:"
          grid="two"
          items={[
            {
              icon: <RiShoppingBagLine className="h-6 w-6" />,
              title: 'Propietarios de sitios web y tiendas',
              description: 'Compruebe si los títulos y las descripciones se truncan en los resultados de Google antes de publicar una nueva página o producto.',
            },
            {
              icon: <RiSearchLine className="h-6 w-6" />,
              title: 'Especialistas en SEO',
              description: 'Pruebe diferentes variantes de título y descripción, compruebe la vista previa de resultados de búsqueda y verifique el cumplimiento de las directrices.',
            },
            { icon: <RiEditLine className="h-6 w-6" />, title: 'Redactores', description: 'Escriba títulos y descripciones que se ajusten a los límites y fomenten los clics.' },
            {
              icon: <RiMegaphoneLine className="h-6 w-6" />,
              title: 'Profesionales de marketing',
              description: 'Cree meta etiquetas para campañas y landing pages, optimizando la tasa de clics en los resultados orgánicos.',
            },
            { icon: <RiCodeLine className="h-6 w-6" />, title: 'Desarrolladores', description: 'Verifique las meta etiquetas antes de desplegar una página en producción.' },
          ]}
        />

        <Gap variant="line" />

        <SectionSteps
          title="¿Qué hace especial a este verificador de meta título y descripción?"
          grid="two"
          items={[
            { icon: <RiRuler2Line className="h-6 w-6" />, title: 'Medición en píxeles', description: 'No solo contamos caracteres: medimos el ancho real del texto como lo hace Google.' },
            {
              icon: <RiEyeLine className="h-6 w-6" />,
              title: 'Vista previa de Google',
              description: 'Vea cómo se ven el título y la descripción en los resultados de búsqueda antes de publicar su página.',
            },
            {
              icon: <RiCheckboxCircleLine className="h-6 w-6" />,
              title: 'Evaluación codificada por colores',
              description: 'Sepa al instante si el texto es demasiado corto, óptimo o demasiado largo.',
            },
            {
              icon: <RiInfinityLine className="h-6 w-6" />,
              title: 'Píxeles y caracteres juntos',
              description: 'La herramienta muestra ambos valores a la vez: puede comparar si el título se ajusta tanto al límite de caracteres como al de píxeles.',
            },
            {
              icon: <RiUserLine className="h-6 w-6" />,
              title: 'Título y descripción en una sola vista',
              description: 'Compruebe tanto el meta título como la descripción simultáneamente, sin cambiar entre pestañas.',
            },
          ]}
        />

        <Gap variant="line" />

        <FaqPanels
          pageUrl={toAbsoluteUrl('/es/herramientas/verificador-de-meta-titulo-y-descripcion')}
          title="Preguntas frecuentes sobre el verificador de meta título y descripción"
          openByDefault={1}
          items={faqItems}
        />

        <Gap variant="line" />

        <ToolsCarousel title="Explore otras herramientas" />

        <Gap size="sm" />
      </Wrapper>
    </>
  );
}
