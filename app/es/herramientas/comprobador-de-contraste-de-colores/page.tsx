import Script from 'next/script';
import HeroBanner from '@/components/sections/HeroBanner';
import Breadcrumbs from '@/components/sections/BreadCrumbs';
import WcagContrastChecker from '@/components/sections/tools/WcagContrastChecker';
import ToolsCarousel from '@/components/sections/tools/ToolsCarousel';
import FaqPanels from '@/components/ui/FaqPanels';
import Gap from '@/components/ui/Gap';
import SectionInfo from '@/components/ui/sections/SectionInfo';
import SectionSteps from '@/components/ui/sections/SectionSteps';
import SectionDemo from '@/components/ui/sections/SectionDemo';
import SectionFeatureComparison from '@/components/ui/sections/SectionFeatureComparison';
import Badge from '@/components/ui/Badge';
import Wrapper from '@/components/ui/Wrapper';
import ToolEditorLayout from '@/components/ui/ToolEditorLayout';
import { toAbsoluteUrl, siteUrl } from '@/utils/absoluteUrl';
import { getToolAlternates } from '@/lib/i18n/pages/tool-meta';
import type { Metadata } from 'next';
import AdSense from '@/components/ui/AdSense';
import {
  RiPaletteLine,
  RiPaintBrushLine,
  RiCheckboxCircleLine,
  RiEqualizerLine,
  RiGlobalLine,
  RiShoppingCartLine,
  RiSlideshowLine,
  RiPrinterLine,
  RiSmartphoneLine,
  RiRestaurantLine,
  RiEyeLine,
  RiShieldCheckLine,
  RiMagicLine,
  RiStackLine,
  RiInfinityLine,
} from 'react-icons/ri';

const LOCALE = 'es' as const;
const TOOL_KEY = 'contrastChecker' as const;

export const metadata: Metadata = {
  title: 'Comprobador gratuito de contraste de colores online - conformidad WCAG',
  description:
    'Comprobador gratuito de contraste de colores online. Pruebe la legibilidad de colores de texto y fondo según los estándares WCAG 2.1. La función de coincidencia automática ayuda a encontrar combinaciones de colores accesibles. Sin registro.',
  alternates: getToolAlternates(TOOL_KEY, LOCALE),
  openGraph: {
    title: 'Comprobador gratuito de contraste de colores online - conformidad WCAG',
    description:
      'Comprobador gratuito de contraste de colores online. Pruebe la legibilidad de colores de texto y fondo según los estándares WCAG 2.1. La función de coincidencia automática ayuda a encontrar combinaciones accesibles.',
    url: toAbsoluteUrl('/es/herramientas/comprobador-de-contraste-de-colores'),
    type: 'website',
    images: [{ url: toAbsoluteUrl('/assets/tools/narzedzia-tester-kontrastu-kolorow-wcag.webp'), width: 1200, height: 630 }],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Comprobador de contraste y legibilidad de colores online',
  alternateName: [
    'Probador de legibilidad de colores',
    'Comprobador de contraste de texto y fondo',
    'Herramienta de verificación de legibilidad',
    'Calculadora de contraste de colores',
    'Probador de contraste WCAG',
    'Comprobador de accesibilidad de colores',
  ],
  url: toAbsoluteUrl('/es/herramientas/comprobador-de-contraste-de-colores'),
  applicationCategory: 'DesignApplication',
  applicationSubCategory: 'AccessibilityTool',
  operatingSystem: 'Any',
  description:
    'Compruebe si los colores de texto y fondo son legibles para todos los usuarios. La herramienta calcula la relación de contraste según WCAG 2.1 y muestra si cumple con los requisitos de accesibilidad.',
  featureList: [
    'Cálculo de la relación de contraste',
    'Verificación de conformidad WCAG 2.1 Nivel AA',
    'Verificación de conformidad WCAG 2.1 Nivel AAA',
    'Prueba de texto normal',
    'Prueba de texto grande y encabezados',
    'Prueba de iconos y componentes de interfaz',
    'Soporte de formato de color HEX',
    'Soporte de formato de color RGB y RGBA',
    'Soporte de formato de color HSL y HSLA',
    'Selector de color para selección visual',
    'Vista previa de texto en vivo',
    'Función de coincidencia automática de colores',
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
  name: 'Cómo comprobar el contraste y la legibilidad de colores online',
  description:
    'Cómo comprobar la legibilidad de colores de texto y fondo según el estándar WCAG. Introduzca los colores, lea la relación de contraste y utilice la función de coincidencia automática.',
  url: toAbsoluteUrl('/es/herramientas/comprobador-de-contraste-de-colores'),
  step: [
    { '@type': 'HowToStep', name: 'Elija el color del texto', text: 'Introduzca un código de color (p. ej., #333333) en formato HEX, RGB o HSL, o elija un color desde el selector de colores.' },
    {
      '@type': 'HowToStep',
      name: 'Elija el color de fondo',
      text: 'Introduzca el color de fondo sobre el que se mostrará el texto: puede ser el color de fondo de una sección, bloque o página completa.',
    },
    { '@type': 'HowToStep', name: 'Lea el resultado', text: 'La herramienta mostrará la relación de contraste e indicará si los colores cumplen con los requisitos AA/AAA.' },
    {
      '@type': 'HowToStep',
      name: 'Ajuste los colores',
      text: 'Si el contraste es demasiado bajo, la función Coincidencia sugiere automáticamente una variante de color de texto que cumple con el umbral WCAG seleccionado.',
    },
  ],
  publisher: { '@type': 'Organization', name: 'Arteon Agency', url: siteUrl },
};

const faqItems = [
  {
    question: '¿Qué es una relación de contraste de colores?',
    answer:
      'Una relación de contraste es una medida de la diferencia de luminancia entre dos colores. La escala va de 1:1 (sin diferencia, p. ej., texto blanco sobre fondo blanco) a 21:1 (diferencia máxima, texto negro sobre fondo blanco). Cuanto mayor sea la relación, más fácil será distinguir el texto del fondo.',
    answerSchemaText: 'La relación de contraste mide la diferencia de luminancia entre dos colores, en una escala de 1:1 a 21:1.',
  },
  {
    question: '¿Qué contraste es suficiente según WCAG?',
    answer:
      'Para texto normal, el mínimo es 4,5:1 (Nivel AA). Para texto grande (encabezados desde 18pt o texto en negrita desde 14pt), 3:1 es suficiente. Para iconos y componentes de interfaz, también se requiere 3:1. Estos umbrales garantizan la legibilidad para la mayoría de los usuarios, incluidos los que tienen problemas de visión.',
    answerSchemaText: 'Texto normal: 4,5:1 (AA). Texto grande: 3:1. Iconos: 3:1.',
  },
  {
    question: '¿El contraste de colores es importante para los usuarios daltónicos?',
    answer:
      'El comprobador evalúa el contraste de luminancia, que es importante para todos los usuarios, incluidos los daltónicos. Sin embargo, el daltonismo es un problema de percepción del color, no de luminancia, por lo que, además del contraste, hay que evitar pares de colores problemáticos (p. ej., texto rojo sobre fondo verde) y no depender únicamente del color para transmitir información.',
    answerSchemaText: 'Sí, el contraste de luminancia importa para todos los usuarios. Además, hay que evitar pares de colores problemáticos para los daltónicos.',
  },
  {
    question: '¿Por qué mi color no cumple los requisitos aunque lo veo bien?',
    answer:
      'La percepción personal del color depende de la configuración del monitor, la iluminación de la sala y las capacidades visuales individuales. WCAG se basa en una fórmula matemática objetiva que tiene en cuenta diferentes deficiencias visuales. Un color legible en una pantalla puede ser ilegible en otra o para otra persona.',
    answerSchemaText: 'La percepción personal depende del monitor, la iluminación y la visión. WCAG utiliza una fórmula objetiva.',
  },
  {
    question: '¿Necesito cumplir el nivel de contraste AAA?',
    answer:
      'No siempre. El nivel AA (4,5:1 para texto normal) es el mínimo exigido por las normativas de accesibilidad en la Unión Europea. El nivel AAA (7:1) proporciona mejor legibilidad, pero es más difícil de alcanzar. Para contenido crítico (avisos, instrucciones de seguridad), considere aspirar al AAA.',
    answerSchemaText: 'AA es el mínimo legal. AAA se recomienda para contenido crítico.',
  },
  {
    question: '¿Qué es el estándar WCAG?',
    answer:
      'WCAG (Web Content Accessibility Guidelines) es un conjunto internacional de directrices de accesibilidad web desarrollado por la organización W3C. Define, entre otros aspectos, valores mínimos de contraste de colores, estructura de encabezados, soporte de teclado y otros requisitos que hacen que los sitios web sean accesibles para personas con diversas discapacidades.',
    answerSchemaText: 'WCAG es un conjunto internacional de directrices de accesibilidad web desarrollado por W3C.',
  },
  {
    question: '¿Qué pares de colores de mi sitio debería comprobar primero?',
    answer:
      'Los más importantes: texto sobre el fondo principal, texto en banners y secciones de color, botones (color del texto y fondo del botón respecto al fondo de la página), enlaces e iconos. Preste especial atención a los elementos que aparecen sobre diferentes fondos según la sección.',
    answerSchemaText: 'Compruebe primero el texto sobre el fondo principal, banners, botones, enlaces e iconos.',
  },
];

export default function ColorContrastCheckerPage() {
  return (
    <>
      <Script id="ld-json-contrast-checker-es" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Script id="ld-json-contrast-howto-es" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />

      <HeroBanner
        title="Comprobador de contraste y legibilidad de colores"
        description="Introduzca un color de texto y de fondo, y la herramienta mostrará si el contraste es suficiente. Los cálculos se basan en el estándar internacional de accesibilidad WCAG 2.1, que define valores mínimos de contraste para diferentes tipos de contenido."
        overlay="black"
        backgroundImage="/assets/tools/narzedzia-tester-kontrastu-kolorow-wcag.webp"
      />

      <Breadcrumbs
        second={{ href: '/es/herramientas', label: 'Herramientas' }}
        third={{ href: '/es/herramientas/comprobador-de-contraste-de-colores', label: 'Comprobador de contraste de colores' }}
        includeJsonLd
        locale="es"
      />

      <ToolEditorLayout>
        <AdSense variant="tool-banner" className="my-3" />
        <WcagContrastChecker />
      </ToolEditorLayout>

      <Wrapper>
        <Gap variant="line" />

        <SectionInfo title="¿Por qué importa la legibilidad del color?">
          <p className="text-mid">
            La legibilidad es la diferencia de luminancia entre el color del texto y el color del fondo. Cuanto mayor sea la diferencia, más fácil será leer el texto. Un contraste demasiado bajo hace
            que el contenido sea difícil de leer, especialmente para personas con deficiencias visuales, personas mayores o en condiciones de iluminación difíciles (p. ej., en un teléfono bajo luz
            solar directa).
          </p>
          <p className="text-mid mt-3">
            Según la{' '}
            <a href="https://www.who.int/news-room/fact-sheets/detail/blindness-and-visual-impairment" target="_blank" rel="noopener noreferrer" className="underline">
              Organización Mundial de la Salud (OMS)
            </a>
            , aproximadamente 2.200 millones de personas en todo el mundo tienen algún tipo de deficiencia visual. Además, millones padecen daltonismo (alrededor del 8\u00a0% de los hombres y el
            0,5\u00a0% de las mujeres), y muchos más experimentan un deterioro visual relacionado con la edad.
          </p>
          <p className="text-mid mt-3">
            La herramienta calcula la relación de contraste utilizando la fórmula especificada en las{' '}
            <a href="https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html" target="_blank" rel="noopener noreferrer" className="underline">
              WCAG 2.1 (Web Content Accessibility Guidelines)
            </a>{' '}
            – directrices internacionales de accesibilidad digital. El resultado permite una evaluación objetiva de si los colores son lo suficientemente legibles, independientemente de la
            configuración del monitor o la percepción individual del color.
          </p>
        </SectionInfo>

        <Gap size="sm" />

        <SectionSteps
          title="Cómo usar el comprobador de contraste de colores"
          description="Comprobar la legibilidad lleva solo unos segundos:"
          grid="four"
          items={[
            {
              icon: <RiPaletteLine className="h-6 w-6" />,
              title: '1. Introduzca el color del texto',
              description: 'Escriba un código de color (p. ej., #333333) en formato HEX, RGB o HSL, o elija un color desde el selector de colores.',
            },
            {
              icon: <RiPaintBrushLine className="h-6 w-6" />,
              title: '2. Introduzca el color de fondo',
              description: 'Introduzca el color de fondo sobre el que se mostrará el texto: puede ser el color de fondo de una sección, bloque o página completa.',
            },
            {
              icon: <RiCheckboxCircleLine className="h-6 w-6" />,
              title: '3. Lea el resultado',
              description: 'La herramienta calculará la relación de contraste y mostrará si los colores cumplen con los requisitos WCAG para texto normal, texto grande e iconos.',
            },
            {
              icon: <RiEqualizerLine className="h-6 w-6" />,
              title: '4. Ajuste los colores',
              description: 'Si el contraste es demasiado bajo, la función Coincidencia sugiere automáticamente una variante de color que cumple con el umbral seleccionado.',
            },
          ]}
        />

        <Gap variant="line" />

        <SectionDemo
          title="Cómo interpretar los resultados de la prueba de legibilidad"
          demo={
            <div className="space-y-3">
              <div className="space-y-1">
                <p className="text-dark text-sm! font-medium uppercase">Relación de contraste</p>
                <p className="text-dark text-xl font-semibold">8.59:1</p>
              </div>
              <div className="space-y-2 rounded-lg border border-neutral-200 bg-white p-3">
                <div className="flex items-center justify-between">
                  <p className="text-dark text-sm! font-medium uppercase">Texto normal</p>
                  <div className="flex gap-1">
                    <Badge variant="success" size="sm">
                      AA (mín. 4,5:1)
                    </Badge>
                    <Badge variant="success" size="sm">
                      AAA (mín. 7:1)
                    </Badge>
                  </div>
                </div>
                <div className="rounded-lg border border-neutral-200 px-3 py-2" style={{ color: 'var(--black3)', backgroundColor: 'var(--white)' }}>
                  <p className="text-sm!">Texto normal de ejemplo</p>
                </div>
              </div>
              <div className="space-y-2 rounded-lg border border-neutral-200 bg-white p-3">
                <div className="flex items-center justify-between">
                  <p className="text-dark text-sm! font-medium uppercase">Texto grande</p>
                  <div className="flex gap-1">
                    <Badge variant="success" size="sm">
                      AA (mín. 3:1)
                    </Badge>
                    <Badge variant="success" size="sm">
                      AAA (mín. 4,5:1)
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          }
        >
          <p className="text-mid mb-4">Después de introducir los colores, la herramienta muestra los resultados en tres secciones:</p>
          <ul className="text-mid list-disc space-y-2 pl-5">
            <li>
              <strong>Texto normal</strong> - requiere un contraste de 4,5:1 (AA) o 7:1 (AAA). Se aplica al texto menor de 18pt (24px) o menor de 14pt en negrita.
            </li>
            <li>
              <strong>Texto grande / negrita</strong> - requiere un contraste de 3:1 (AA) o 4,5:1 (AAA). Se aplica a encabezados, botones y resaltados.
            </li>
            <li>
              <strong>Iconos</strong> - requiere un contraste de 3:1 (AA). Se aplica a iconos y elementos gráficos de interfaz que transmiten información.
            </li>
          </ul>
          <p className="text-mid mt-3">
            <strong>Indicador verde</strong> significa que se cumple el requisito. <strong>Indicador rojo</strong> significa que el contraste es demasiado bajo y necesita mejora.
          </p>
        </SectionDemo>

        <Gap variant="line" />

        <SectionInfo title="¿Qué significan los resultados de la prueba de legibilidad?">
          <p className="text-mid mb-4">
            La herramienta muestra la relación de contraste en una escala de 1:1 (sin contraste) a 21:1 (contraste máximo: negro sobre blanco). El resultado se compara con los umbrales definidos en el estándar WCAG:
          </p>
          <ul className="text-mid list-disc space-y-2 pl-5">
            <li>
              <strong>Texto normal</strong> – requiere al menos 4,5:1 para el nivel AA (estándar mínimo) o 7:1 para el nivel AAA (estándar mejorado). Se aplica al texto menor de 18pt (24px) o menor de 14pt (18,5px) en negrita.
            </li>
            <li>
              <strong>Texto grande / negrita</strong> – requiere al menos 3:1 para el nivel AA o 4,5:1 para el nivel AAA. Se aplica al texto desde 18pt (24px) o desde 14pt (18,5px) en negrita: encabezados, botones, resaltados.
            </li>
            <li>
              <strong>Iconos y elementos de interfaz</strong> – requieren al menos 3:1 para el nivel AA. Se aplica a iconos, botones, campos de formulario y otros elementos de interfaz que transmiten información.
            </li>
          </ul>
          <p className="text-mid mt-3">
            <strong>El nivel AA</strong> es el mínimo exigido por las normativas de accesibilidad digital en muchos países, incluida la{' '}
            <a href="https://eur-lex.europa.eu/legal-content/ES/TXT/?uri=CELEX:32016L2102" target="_blank" rel="noopener noreferrer" className="underline">
              directiva de la UE sobre accesibilidad web
            </a>
            . <strong>El nivel AAA</strong> proporciona mejor legibilidad, pero no siempre es práctico de alcanzar para todos los elementos.
          </p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionInfo title="Coincidencia automática de colores con los requisitos WCAG">
          <p className="text-mid mb-4">
            Si el contraste es demasiado bajo, no necesita buscar el color adecuado por ensayo y error. La función <strong>Coincidencia</strong> encuentra automáticamente una variante de color de
            texto que cumple con el umbral de contraste seleccionado.
          </p>
          <p className="text-mid mb-4">Cómo funciona la coincidencia:</p>
          <ol className="text-mid list-decimal space-y-2 pl-5">
            <li>Seleccione el objetivo de coincidencia de la lista, p. ej., AA para texto normal o AAA para texto grande.</li>
            <li>Haga clic en el botón Coincidencia.</li>
            <li>La herramienta buscará entre las variantes de luminosidad del color del texto y sugerirá la más cercana que cumpla con los requisitos.</li>
            <li>El color sugerido se puede copiar al portapapeles o establecer inmediatamente como el nuevo color del texto.</li>
          </ol>
          <p className="text-mid mt-3">
            El algoritmo preserva el tono y la saturación del color original, cambiando solo la luminosidad. El color sugerido se mantiene coherente con la identidad visual al tiempo que cumple con el
            estándar de accesibilidad.
          </p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionFeatureComparison
          title="¿Qué significan los niveles AA y AAA en el estándar WCAG?"
          plans={[
            { id: 'aa', name: 'Nivel AA (mínimo)', highlighted: true },
            { id: 'aaa', name: 'Nivel AAA (mejorado)' },
          ]}
          features={[
            { name: 'Texto normal - mín. 4,5:1', values: { aa: true, aaa: true } },
            { name: 'Texto normal - mín. 7:1', values: { aa: false, aaa: true } },
            { name: 'Texto grande / negrita - mín. 3:1', values: { aa: true, aaa: true } },
            { name: 'Texto grande / negrita - mín. 4,5:1', values: { aa: false, aaa: true } },
            { name: 'Iconos y elementos de interfaz - mín. 3:1', values: { aa: true, aaa: true } },
            { name: 'Legalmente obligatorio (directiva UE)', values: { aa: true, aaa: false } },
            { name: 'Recomendado para contenido clave', values: { aa: true, aaa: true } },
          ]}
        />

        <Gap variant="line" />

        <SectionInfo title="Solución de problemas del comprobador de contraste de colores">
          <h3 className="h5 mb-2">Veo un error de formato de color</h3>
          <p className="text-mid mb-4">
            Compruebe el formato del color. Un código HEX debe empezar con <code className="rounded bg-black/5 px-1">#</code> y contener 3 o 6 caracteres (p. ej.,{' '}
            <code className="rounded bg-black/5 px-1">#fff</code> o <code className="rounded bg-black/5 px-1">#ffffff</code>). Para formato RGB, compruebe que los valores están separados por comas y en el rango 0–255.
          </p>

          <h3 className="h5 mb-2">La función Coincidencia no encuentra un color adecuado</h3>
          <p className="text-mid mb-4">
            Cuando el fondo y el texto tienen una luminosidad similar en el mismo tono, el algoritmo puede no encontrar una variante que cumpla los requisitos sin cambiar el tono. En este caso, considere cambiar el color de fondo o elegir un color de texto completamente diferente.
          </p>

          <h3 className="h5 mb-2">El color en el selector no corresponde al código introducido</h3>
          <p className="text-mid">
            El selector de colores del navegador solo admite el formato HEX sin transparencia. Si introduce un color en formato RGBA o HSLA con transparencia, el selector mostrará solo la parte de color (sin alfa). Los cálculos de contraste siguen teniendo en cuenta la transparencia.
          </p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionSteps
          title="¿Dónde debería comprobar la legibilidad del color?"
          description="La legibilidad importa en todos los lugares donde alguien necesita leer texto o reconocer un elemento de interfaz:"
          grid="three"
          items={[
            {
              icon: <RiGlobalLine className="h-6 w-6" />,
              title: 'Sitios web',
              description: 'Texto en páginas, botones, enlaces, formularios. Especialmente importante para sitios empresariales donde los visitantes tienen diferentes edades y capacidades visuales.',
            },
            {
              icon: <RiShoppingCartLine className="h-6 w-6" />,
              title: 'Tiendas online',
              description: 'Precios, botones de Comprar, información del producto. Una legibilidad baja puede significar pedidos perdidos.',
            },
            {
              icon: <RiSlideshowLine className="h-6 w-6" />,
              title: 'Presentaciones',
              description: 'Las diapositivas mostradas por proyector suelen tener un contraste más díbil que en un monitor. Compruebe los colores antes de presentar.',
            },
            {
              icon: <RiPrinterLine className="h-6 w-6" />,
              title: 'Carteles y folletos',
              description: 'Los materiales impresos vistos en diversas condiciones de iluminación requieren un alto contraste.',
            },
            {
              icon: <RiSmartphoneLine className="h-6 w-6" />,
              title: 'Aplicaciones móviles',
              description: 'Los teléfonos se usan bajo luz solar directa, de noche y por personas de todas las edades.',
            },
            {
              icon: <RiRestaurantLine className="h-6 w-6" />,
              title: 'Menús de restaurante',
              description: 'A menudo impresos en papel de color o con fuentes decorativas: es fácil acabar con un contraste demasiado bajo.',
            },
          ]}
        />

        <Gap variant="line" />

        <SectionInfo title="Legibilidad del color para personas con daltonismo">
          <p className="text-mid mb-4">
            El daltonismo es un trastorno de la percepción del color que afecta a aproximadamente el 8{'\u00a0'}% de los hombres y el 0,5{'\u00a0'}% de las mujeres. Las personas con daltonismo pueden tener dificultades para distinguir ciertos pares de colores, incluso si el contraste de luminancia es suficiente.
          </p>
          <p className="text-mid mb-4">Tipos más comunes de daltonismo:</p>
          <ul className="text-mid list-disc space-y-2 pl-5">
            <li>
              <strong>Deuteranopía</strong> – dificultad para distinguir entre verde y rojo (la forma más común)
            </li>
            <li>
              <strong>Protanopía</strong> – dificultad para ver el color rojo
            </li>
            <li>
              <strong>Tritanopía</strong> – dificultad para ver azul y amarillo (poco frecuente)
            </li>
          </ul>
          <p className="text-mid mt-3">
            Esta herramienta comprueba el contraste de luminancia, que es importante para todos los usuarios. Sin embargo, al diseñar, conviene evitar combinaciones de colores problemáticas (p. ej., texto rojo sobre fondo verde) y no depender únicamente del color para transmitir información: use también formas, iconos y texto.
          </p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionSteps
          title="¿Qué hace especial a este comprobador de contraste y legibilidad?"
          grid="two"
          items={[
            {
              icon: <RiEyeLine className="h-6 w-6" />,
              title: 'Evaluación objetiva basada en una fórmula matemática',
              description: 'La relación de contraste se calcula utilizando la fórmula WCAG: el resultado no depende de la configuración del monitor ni de la percepción individual del color.',
            },
            {
              icon: <RiShieldCheckLine className="h-6 w-6" />,
              title: 'Conformidad con el estándar internacional WCAG',
              description: 'Los resultados coinciden con los requisitos de WCAG 2.1, que constituyen la base de las normativas de accesibilidad digital en la UE y muchos otros países.',
            },
            {
              icon: <RiMagicLine className="h-6 w-6" />,
              title: 'Coincidencia automática de color con el umbral',
              description: 'La función Coincidencia encuentra una variante de color de texto que cumple con el umbral de contraste seleccionado: preserva el tono, cambia solo la luminosidad.',
            },
            {
              icon: <RiStackLine className="h-6 w-6" />,
              title: 'Cinco formatos de color',
              description: 'Formatos compatibles: HEX, RGB, RGBA, HSL y HSLA. El código de color se puede pegar directamente desde Figma, Photoshop o una hoja de estilos CSS.',
            },
            {
              icon: <RiInfinityLine className="h-6 w-6" />,
              title: 'Tres tipos de contenido en una sola prueba',
              description: 'Una sola comprobación muestra el resultado para texto normal, texto grande (encabezados, botones) e iconos: no es necesario probar cada tipo por separado.',
            },
          ]}
        />

        <Gap variant="line" />

        <FaqPanels
          pageUrl={toAbsoluteUrl('/es/herramientas/comprobador-de-contraste-de-colores')}
          title="Preguntas frecuentes sobre el comprobador de contraste de colores"
          openByDefault={1}
          items={[
            ...faqItems,
            {
              question: '¿Dónde puedo obtener los códigos de color de mi sitio web?',
              answer:
                'En el navegador (Chrome, Firefox, Edge), abra las herramientas de desarrollo (clic derecho → Inspeccionar). En la pestaña Styles verá los colores utilizados en la página. Alternativamente, extensiones del navegador como ColorZilla permiten obtener el color de cualquier elemento sin entrar en el código.',
              answerSchemaText: 'Herramientas de desarrollo del navegador (clic derecho → Inspeccionar → Styles) o extensiones como ColorZilla.',
            },
          ]}
        />

        <Gap variant="line" />

        <ToolsCarousel title="Explore otras herramientas gratuitas" />

        <Gap size="sm" />
      </Wrapper>
    </>
  );
}
