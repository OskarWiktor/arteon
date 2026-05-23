import HeroBanner from '@/components/organisms/HeroBanner';
import ButtonLink from '@/components/atoms/buttons/ButtonLink';
import Divider from '@/components/atoms/Divider';
import SectionInfo from '@/components/organisms/sections/SectionInfo';
import SectionSteps from '@/components/organisms/sections/SectionSteps';
import FaqPanels from '@/components/molecules/FaqPanels';
import Wrapper from '@/components/atoms/Wrapper';
import Script from 'next/script';
import {
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
  RiLoopLeftLine,
} from 'react-icons/ri';
import { toAbsoluteUrl, siteUrl } from '@/utils/absoluteUrl';
import { getToolsIndexAlternates } from '@/lib/i18n/pages/tool-meta';

export const metadata = {
  title: 'Herramientas gratuitas | Convertidores, SEO, colores, favicon',
  description:
    'Herramientas gratuitas: Convertidores de imágenes (JPG, PNG, WebP, SVG, BMP,, GIF, AVIF, HEIC, TIFF), generador de favicon, editor de imágenes, contador de texto, paletas de colores y códigos QR. Sin registro.',
  alternates: getToolsIndexAlternates('es'),
  openGraph: {
    title: 'Herramientas gratuitas | Convertidores, SEO, colores, favicon',
    description:
      'Herramientas gratuitas: Convertidores de imágenes (JPG, PNG, WebP, SVG, BMP,, GIF, AVIF, HEIC, TIFF), generador de favicon, editor de imágenes, contador de texto, paletas de colores y códigos QR. Sin registro.',
    url: toAbsoluteUrl('/es/herramientas'),
    type: 'website',
    images: [
      {
        url: toAbsoluteUrl('/assets/arteon-logo-on-mockup.webp'),
        width: 1200,
        height: 630,
      },
      {
        '@type': 'WebApplication',
        position: 35,
        name: 'Convertidor JPG a AVIF',
        description:
          'Convierte fotos JPG a AVIF moderno. Compresion hasta un 50% mejor que JPG manteniendo la calidad.',
        url: toAbsoluteUrl('/es/herramientas/convertidor-jpg-a-avif'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 36,
        name: 'Convertidor PNG a AVIF',
        description:
          'Convierte graficos PNG a AVIF con soporte de transparencia. Archivos significativamente mas pequenos.',
        url: toAbsoluteUrl('/es/herramientas/convertidor-png-a-avif'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 37,
        name: 'Convertidor WebP a AVIF',
        description: 'Convierte archivos WebP a AVIF. Compresion aun mejor en formato moderno.',
        url: toAbsoluteUrl('/es/herramientas/convertidor-webp-a-avif'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 38,
        name: 'Convertidor SVG a AVIF',
        description: 'Convierte graficos vectoriales SVG a formato raster AVIF compacto.',
        url: toAbsoluteUrl('/es/herramientas/convertidor-svg-a-avif'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 39,
        name: 'Convertidor BMP a AVIF',
        description: 'Convierte archivos BMP sin comprimir a AVIF ultracompacto.',
        url: toAbsoluteUrl('/es/herramientas/convertidor-bmp-a-avif'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 40,
        name: 'Convertidor GIF a AVIF',
        description:
          'Convierte el primer fotograma GIF a imagen AVIF estatica con excelente compresion.',
        url: toAbsoluteUrl('/es/herramientas/convertidor-gif-a-avif'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 41,
        name: 'Convertidor HEIC a AVIF',
        description: 'Convierte fotos HEIC del iPhone a formato AVIF moderno.',
        url: toAbsoluteUrl('/es/herramientas/convertidor-heic-a-avif'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 42,
        name: 'Convertidor TIFF a AVIF',
        description:
          'Convierte archivos TIFF a AVIF moderno. Reduccion masiva del tamano de archivo.',
        url: toAbsoluteUrl('/es/herramientas/convertidor-tiff-a-avif'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 43,
        name: 'Convertidor JPG a GIF',
        description: 'Convierte fotos JPG a formato GIF. Perfecto para graficos simples e iconos.',
        url: toAbsoluteUrl('/es/herramientas/convertidor-jpg-a-gif'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 44,
        name: 'Convertidor PNG a GIF',
        description: 'Convierte graficos PNG a GIF. Ideal para iconos simples y graficos.',
        url: toAbsoluteUrl('/es/herramientas/convertidor-png-a-gif'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 45,
        name: 'Convertidor WebP a GIF',
        description: 'Convierte imagenes WebP a formato GIF para maxima compatibilidad.',
        url: toAbsoluteUrl('/es/herramientas/convertidor-webp-a-gif'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 46,
        name: 'Convertidor SVG a GIF',
        description: 'Convierte graficos vectoriales SVG a formato raster GIF.',
        url: toAbsoluteUrl('/es/herramientas/convertidor-svg-a-gif'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 47,
        name: 'Convertidor BMP a GIF',
        description: 'Convierte archivos BMP sin comprimir a GIF ligero.',
        url: toAbsoluteUrl('/es/herramientas/convertidor-bmp-a-gif'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 48,
        name: 'Convertidor JPG a TIFF',
        description: 'Convierte fotos JPG a TIFF sin perdida. Para impresion y archivado.',
        url: toAbsoluteUrl('/es/herramientas/convertidor-jpg-a-tiff'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 49,
        name: 'Convertidor PNG a TIFF',
        description: 'Convierte graficos PNG a formato TIFF profesional.',
        url: toAbsoluteUrl('/es/herramientas/convertidor-png-a-tiff'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 50,
        name: 'Convertidor WebP a TIFF',
        description: 'Convierte imagenes WebP a TIFF profesional para impresion y archivado.',
        url: toAbsoluteUrl('/es/herramientas/convertidor-webp-a-tiff'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 51,
        name: 'Convertidor SVG a TIFF',
        description: 'Convierte graficos vectoriales SVG a raster TIFF de alta calidad.',
        url: toAbsoluteUrl('/es/herramientas/convertidor-svg-a-tiff'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 52,
        name: 'Convertidor BMP a TIFF',
        description: 'Convierte archivos BMP a formato TIFF profesional para impresion.',
        url: toAbsoluteUrl('/es/herramientas/convertidor-bmp-a-tiff'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 53,
        name: 'Convertidor HEIC a TIFF',
        description: 'Convierte fotos HEIC del iPhone a formato TIFF profesional.',
        url: toAbsoluteUrl('/es/herramientas/convertidor-heic-a-tiff'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
    ],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Herramientas gratuitas - convertidores de imágenes, SEO, colores, favicon',
  description:
    'Herramientas gratuitas: Convertidores de imágenes (JPG, PNG, WebP, SVG, BMP,, GIF, AVIF, HEIC, TIFF), generador de favicon, editor de imágenes, contador de texto, paletas de colores y códigos QR. Sin registro.',
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
    { '@type': 'Thing', name: 'Generadores' },
  ],
  mainEntity: {
    '@type': 'ItemList',

    itemListElement: [
      {
        '@type': 'WebApplication',
        position: 1,
        name: 'Convertidor de JPG y PNG a WebP',
        description:
          'Convertidor gratuito de JPG y PNG a WebP. Reduzca el tamaño de las imágenes hasta un 35\u00a0% sin perder calidad. Sin registro, sin envío de archivos a servidores.',
        url: toAbsoluteUrl('/es/herramientas/convertidor-jpg-a-webp'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 2,
        name: 'Editor de imágenes en línea',
        description:
          'Recorte y redimensione imágenes para redes sociales y sitios web. Formatos predefinidos, dimensiones personalizadas en píxeles y soporte para avatares circulares.',
        url: toAbsoluteUrl('/es/herramientas/editor-de-imagenes-en-linea'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 3,
        name: 'Generador de favicon',
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
        description:
          'Generador gratuito de firma de correo HTML. Añada datos de contacto, enlace CTA y perfiles de redes sociales y copie el código HTML listo en Gmail o Outlook.',
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
        name: 'Extractor de colores de imagen',
        description:
          'Extractor de colores de imagen gratuito. Suba una foto o logotipo y obtenga una paleta de hasta 12 colores dominantes con códigos HEX y RGB.',
        url: toAbsoluteUrl('/es/herramientas/extractor-de-colores-de-imagen'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 8,
        name: 'Generador de paletas de colores',
        description:
          'Genere paletas de colores a partir de un solo color base. Esquemas monocromático, triádico, análogo, complementario, además de paletas pastel, oscura y minimalista.',
        url: toAbsoluteUrl('/es/herramientas/generador-de-paletas-de-colores'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 9,
        name: 'Contador de palabras y caracteres',
        description:
          'Contador gratuito de palabras y caracteres con evaluación de extensión del texto. Compruebe si la extensión de su texto es adecuada para una página de inicio, descripción de servicio, artículo de blog o descripción de producto.',
        url: toAbsoluteUrl('/es/herramientas/contador-de-palabras-y-caracteres'),
        applicationCategory: 'DeveloperApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 10,
        name: 'Generador de códigos QR',
        description:
          'Generador gratuito de códigos QR. Cree códigos QR para sitios web, vCards, menús de restaurante o folletos. Exporte a PNG y SVG, sin registro, sin límites.',
        url: toAbsoluteUrl('/es/herramientas/generador-de-codigos-qr-gratuito'),
        applicationCategory: 'UtilityApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 11,
        name: 'Convertidor JPG a WebP',
        description:
          'Convierte fotos JPG a WebP ligero. Reduce el peso de las imágenes hasta un 35%.',
        url: toAbsoluteUrl('/es/herramientas/convertidor-jpg-a-webp'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 12,
        name: 'Convertidor PNG a JPG',
        description:
          'Convierte archivos PNG a JPG en el navegador. Sin límite de archivos, sin registro.',
        url: toAbsoluteUrl('/es/herramientas/convertidor-png-a-jpg'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 13,
        name: 'Convertidor WebP a JPG',
        description:
          'Convierte archivos WebP a JPG compatible con cualquier programa y plataforma.',
        url: toAbsoluteUrl('/es/herramientas/convertidor-webp-a-jpg'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 14,
        name: 'Convertidor PNG a WebP',
        description:
          'Convierte gráficos PNG a WebP. Archivos más pequeños conservando la transparencia.',
        url: toAbsoluteUrl('/es/herramientas/convertidor-png-a-webp'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 15,
        name: 'Convertidor JPG a PNG',
        description:
          'Convierte imágenes JPG a PNG sin pérdida. Conversión local en el navegador, sin límites.',
        url: toAbsoluteUrl('/es/herramientas/convertidor-jpg-a-png'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 16,
        name: 'Convertidor WebP a PNG',
        description:
          'Convierte imágenes WebP a PNG sin pérdida. Conversión local, nada se envía al servidor.',
        url: toAbsoluteUrl('/es/herramientas/convertidor-webp-a-png'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 17,
        name: 'Convertidor SVG a PNG',
        description:
          'Convierte gráficos vectoriales SVG a PNG. Ideal para documentos y redes sociales.',
        url: toAbsoluteUrl('/es/herramientas/convertidor-svg-a-png'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 18,
        name: 'Convertidor SVG a JPG',
        description:
          'Convierte gráficos SVG a JPG compacto. Archivo más pequeño, compatibilidad total.',
        url: toAbsoluteUrl('/es/herramientas/convertidor-svg-a-jpg'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 19,
        name: 'Convertidor BMP a JPG',
        description:
          'Convierte archivos BMP sin comprimir a JPG ligero. Reducción drástica del tamaño.',
        url: toAbsoluteUrl('/es/herramientas/convertidor-bmp-a-jpg'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 20,
        name: 'Convertidor BMP a PNG',
        description:
          'Convierte imágenes BMP a PNG sin pérdida. Conserva la calidad con menor tamaño.',
        url: toAbsoluteUrl('/es/herramientas/convertidor-bmp-a-png'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 21,
        name: 'Convertidor GIF a PNG',
        description:
          'Exporta el primer fotograma de un GIF como imagen PNG estática. Sin pérdida de calidad.',
        url: toAbsoluteUrl('/es/herramientas/convertidor-gif-a-png'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 22,
        name: 'Convertidor GIF a JPG',
        description:
          'Exporta el primer fotograma de un GIF como JPG. Archivo más pequeño, carga más rápida.',
        url: toAbsoluteUrl('/es/herramientas/convertidor-gif-a-jpg'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 23,
        name: 'Convertidor SVG a WebP',
        description: 'Convierte graficos SVG a WebP ligero. Ideal para sitios web.',
        url: toAbsoluteUrl('/es/herramientas/convertidor-svg-a-webp'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 24,
        name: 'Convertidor GIF a WebP',
        description: 'Convierte el primer fotograma GIF a WebP. Archivo mas pequeno.',
        url: toAbsoluteUrl('/es/herramientas/convertidor-gif-a-webp'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 25,
        name: 'Convertidor BMP a WebP',
        description: 'Convierte archivos BMP a WebP ligero. Reduccion de hasta el 95%.',
        url: toAbsoluteUrl('/es/herramientas/convertidor-bmp-a-webp'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 26,
        name: 'Convertidor AVIF a JPG',
        description:
          'Convierte archivos AVIF a JPG universal. Compatible con cualquier plataforma.',
        url: toAbsoluteUrl('/es/herramientas/convertidor-avif-a-jpg'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 27,
        name: 'Convertidor AVIF a PNG',
        description: 'Convierte archivos AVIF a PNG sin perdidas. Calidad y transparencia.',
        url: toAbsoluteUrl('/es/herramientas/convertidor-avif-a-png'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 28,
        name: 'Convertidor AVIF a WebP',
        description: 'Convierte archivos AVIF a WebP. Amplia compatibilidad.',
        url: toAbsoluteUrl('/es/herramientas/convertidor-avif-a-webp'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 29,
        name: 'Convertidor HEIC a JPG',
        description: 'Convierte fotos HEIC de iPhone a JPG universal. Sin registro.',
        url: toAbsoluteUrl('/es/herramientas/convertidor-heic-a-jpg'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 30,
        name: 'Convertidor HEIC a PNG',
        description: 'Convierte fotos HEIC de iPhone a PNG sin perdidas. Calidad completa.',
        url: toAbsoluteUrl('/es/herramientas/convertidor-heic-a-png'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 31,
        name: 'Convertidor HEIC a WebP',
        description: 'Convierte fotos HEIC de iPhone a WebP ligero. Menor tamano.',
        url: toAbsoluteUrl('/es/herramientas/convertidor-heic-a-webp'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 32,
        name: 'Convertidor TIFF a JPG',
        description: 'Convierte archivos TIFF a JPG compacto. Ideal para escaneos.',
        url: toAbsoluteUrl('/es/herramientas/convertidor-tiff-a-jpg'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 33,
        name: 'Convertidor TIFF a PNG',
        description: 'Convierte archivos TIFF a PNG sin perdidas. Calidad de escaneos.',
        url: toAbsoluteUrl('/es/herramientas/convertidor-tiff-a-png'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 34,
        name: 'Convertidor TIFF a WebP',
        description: 'Convierte archivos TIFF a WebP ligero. Enorme reduccion.',
        url: toAbsoluteUrl('/es/herramientas/convertidor-tiff-a-webp'),
        applicationCategory: 'MultimediaApplication',
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
    answer:
      'No. Todas las herramientas se ejecutan completamente en su navegador. Los archivos nunca salen de su ordenador y no se almacenan en ningún sitio.',
  },
  {
    question: '¿Necesito una cuenta?',
    answer: 'No. Puede usarlas de inmediato, sin iniciar sesión ni crear una cuenta.',
  },
  {
    question: '¿Hay un límite de uso?',
    answer:
      'No. Úselas sin restricciones: sin límites diarios, sin límites de archivos, sin límites de conversiones.',
  },
  {
    question: '¿Para qué sirven estas herramientas?',
    answer:
      'Ayudan a preparar materiales para sitios web, redes sociales e impresión: optimizar imágenes, crear favicons, verificar la extensión del texto, generar códigos QR, elegir colores y comprobar su legibilidad.',
  },
  {
    question: '¿Las herramientas funcionan en el móvil?',
    answer:
      'Sí, aunque algunas (convertidor WebP, generador de favicon) funcionan mejor en escritorio debido al procesamiento de archivos grandes.',
  },
];

export default function ToolsIndexPage() {
  return (
    <>
      <HeroBanner
        title='Herramientas gratuitas'
        description='Convertidores de formatos de imagen, editor de imágenes, generador de favicon, contador de texto, herramientas de color y códigos QR. Sin registro, sin límites.'
        backgroundImage='/assets/arteon-logo-on-mockup.webp'
        overlay='black'
      />

      <Wrapper>
        <Divider size='sm' />

        <SectionSteps
          title='Imágenes y favicons'
          description='Herramientas para preparar fotos, gráficos e iconos para sitios web y redes sociales.'
          grid='three'
          items={[
            {
              icon: <RiCropLine className='h-8 w-8' />,
              title: 'Editor de imágenes en línea',
              topImageAlt: 'Editor de imágenes en línea Arteon',
              topImageSrc:
                '/assets/tools/free-image-editor-crop-resize-and-convert/editor-de-imagenes-en-linea-es.webp',
              description: (
                <div className='flex h-full flex-col'>
                  <p>
                    Prepare el recorte perfecto para redes sociales o su web. Elija un formato
                    predefinido o introduzca dimensiones personalizadas y descargue la imagen en
                    PNG, JPG o WebP.
                  </p>
                  <div className='mt-4'>
                    <ButtonLink arrow href='/es/herramientas/editor-de-imagenes-en-linea'>
                      Abrir herramienta
                    </ButtonLink>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiAppsLine className='h-8 w-8' />,
              title: 'Generador de favicon e iconos',
              topImageAlt: 'Generador de favicon Arteon',
              topImageSrc: '/assets/tools/favicon-generator/generador-de-favicon-gratuito-es.webp',
              description: (
                <div className='flex h-full flex-col'>
                  <p>
                    Genere <strong>favicon.ico</strong> e iconos PNG 180x180, 192x192 y 512x512 a
                    partir de una sola imagen, conforme a los requisitos de navegadores y
                    Lighthouse.
                  </p>
                  <div className='mt-4'>
                    <ButtonLink arrow href='/es/herramientas/generador-de-favicon-gratuito'>
                      Abrir herramienta
                    </ButtonLink>
                  </div>
                </div>
              ),
            },
          ]}
        />
        <Divider size='sm' />

        <SectionSteps
          title='Texto y SEO'
          description='Herramientas para comprobar la extensión del texto, las meta etiquetas y la vista previa de su página en los resultados de búsqueda.'
          grid='three'
          items={[
            {
              icon: <RiFileTextLine className='h-8 w-8' />,
              title: 'Verificador de meta título y descripción',
              topImageAlt: 'Verificador de meta título y descripción Arteon',
              topImageSrc:
                '/assets/tools/free-meta-title-and-description-checker-pixel-width/verificador-de-meta-titulo-y-descripcion-es.webp',
              description: (
                <div className='flex h-full flex-col'>
                  <p>
                    Compruebe el número de caracteres, el número de palabras, el ancho en píxeles y
                    vea cómo se muestra su página en Google. Evite títulos y descripciones truncados
                    y ajuste su contenido SEO.
                  </p>
                  <div className='mt-4'>
                    <ButtonLink
                      arrow
                      href='/es/herramientas/verificador-de-meta-titulo-y-descripcion'
                    >
                      Abrir herramienta
                    </ButtonLink>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiArticleLine className='h-8 w-8' />,
              title: 'Contador de palabras y caracteres',
              topImageAlt: 'Contador de palabras y caracteres Arteon',
              topImageSrc:
                '/assets/tools/word-and-character-counter-with-text-formatting-tools/contador-de-palabras-y-caracteres-es.webp',
              description: (
                <div className='flex h-full flex-col'>
                  <p>
                    Compruebe la extensión del texto y evalúe si es adecuada para una página de
                    inicio, descripción de servicio, artículo de blog o descripción de producto. La
                    herramienta cuenta palabras, caracteres, párrafos y tiempo de lectura.
                  </p>
                  <div className='mt-4'>
                    <ButtonLink arrow href='/es/herramientas/contador-de-palabras-y-caracteres'>
                      Abrir herramienta
                    </ButtonLink>
                  </div>
                </div>
              ),
            },

            {
              icon: <RiFileTextLine className='h-8 w-8' />,
              title: 'Generador Lorem Ipsum',
              topImageAlt: 'Generador Lorem Ipsum Arteon',
              topImageSrc: '/assets/tools/lorem-ipsum-generator/generador-lorem-ipsum-es.webp',
              description: (
                <div className='flex h-full flex-col'>
                  <p>
                    Genera texto de relleno en 8 estilos y 9 modos. Lorem Ipsum, Hipster, Business,
                    Bacon y más. Copia como texto o HTML.
                  </p>
                  <div className='mt-4'>
                    <ButtonLink arrow href='/es/herramientas/generador-lorem-ipsum'>
                      Abrir herramienta
                    </ButtonLink>
                  </div>
                </div>
              ),
            },
          ]}
        />

        <Divider size='sm' />

        <SectionSteps
          title='Correo electrónico y comunicación'
          description='Herramientas que ayudan a organizar la comunicación por correo electrónico y la imagen de marca.'
          grid='three'
          items={[
            {
              icon: <RiMailLine className='h-8 w-8' />,
              title: 'Generador de firma de correo HTML gratuito',
              topImageAlt: 'Generador de firma de correo HTML gratuito Arteon',
              topImageSrc:
                '/assets/tools/free-html-email-signature-generator/generador-de-firma-de-correo-gratuito-es.webp',
              description: (
                <div className='flex h-full flex-col'>
                  <p>
                    Cree una firma de correo profesional en minutos. Introduzca sus datos, elija los
                    colores y copie el código HTML listo en Gmail, Outlook y otros clientes de
                    correo.
                  </p>
                  <div className='mt-4'>
                    <ButtonLink arrow href='/es/herramientas/generador-de-firma-de-correo-gratuito'>
                      Abrir herramienta
                    </ButtonLink>
                  </div>
                </div>
              ),
            },
          ]}
        />

        <Divider size='sm' />

        <SectionSteps
          title='Códigos QR'
          description='Generador de códigos QR para sitios web, tarjetas de visita, menús y materiales impresos.'
          grid='three'
          items={[
            {
              icon: <RiQrCodeLine className='h-8 w-8' />,
              title: 'Generador de códigos QR gratuito',
              topImageAlt: 'Generador de códigos QR gratuito Arteon',
              topImageSrc:
                '/assets/tools/qr-code-generator/generador-de-codigos-qr-gratuito-es.webp',
              description: (
                <div className='flex h-full flex-col'>
                  <p>
                    Cree un código QR para un sitio web, vCard, menú de restaurante o folleto.
                    Exporte a PNG y SVG, sin registro, sin límites.
                  </p>
                  <div className='mt-4'>
                    <ButtonLink arrow href='/es/herramientas/generador-de-codigos-qr-gratuito'>
                      Abrir herramienta
                    </ButtonLink>
                  </div>
                </div>
              ),
            },
          ]}
        />

        <Divider size='sm' />

        <SectionSteps
          title='Colores y accesibilidad'
          description='Herramientas para trabajar con colores, contraste y accesibilidad WCAG.'
          grid='three'
          items={[
            {
              icon: <RiContrast2Line className='h-8 w-8' />,
              title: 'Comprobador de contraste y legibilidad de colores',
              topImageAlt: 'Comprobador de contraste de colores Arteon',
              topImageSrc:
                '/assets/tools/color-contrast-and-readability-checker/comprobador-de-contraste-de-colores-es.webp',
              description: (
                <div className='flex h-full flex-col'>
                  <p>
                    Compruebe si los colores de texto y fondo son legibles. Introduzca los códigos
                    de color, vea la relación de contraste según <strong>WCAG</strong> y utilice la
                    función de <strong>coincidencia</strong> para la corrección automática.
                  </p>
                  <div className='mt-4'>
                    <ButtonLink arrow href='/es/herramientas/comprobador-de-contraste-de-colores'>
                      Abrir herramienta
                    </ButtonLink>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiPantoneLine className='h-8 w-8' />,
              title: 'Extractor de colores de imagen',
              topImageAlt: 'Extractor de colores de imagen Arteon',
              topImageSrc:
                '/assets/tools/image-color-extractor/extractor-de-colores-de-imagen-es.webp',
              description: (
                <div className='flex h-full flex-col'>
                  <p>
                    Suba una foto o logotipo y la herramienta extraerá los colores dominantes. Copie
                    los códigos HEX con un solo clic y Úselos donde quiera.
                  </p>
                  <div className='mt-4'>
                    <ButtonLink arrow href='/es/herramientas/extractor-de-colores-de-imagen'>
                      Abrir herramienta
                    </ButtonLink>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiPaletteLine className='h-8 w-8' />,
              title: 'Generador de paletas de colores',
              topImageAlt: 'Generador de paletas de colores Arteon',
              topImageSrc:
                '/assets/tools/color-palette-generator/generador-de-paletas-de-colores-es.webp',
              description: (
                <div className='flex h-full flex-col'>
                  <p>
                    Elija un color base y genere 9 paletas de colores: monocromática,
                    complementaria, triádica, pastel, oscura y más. Copie los códigos HEX con un
                    solo clic.
                  </p>
                  <div className='mt-4'>
                    <ButtonLink arrow href='/es/herramientas/generador-de-paletas-de-colores'>
                      Abrir herramienta
                    </ButtonLink>
                  </div>
                </div>
              ),
            },
          ]}
        />

        <Divider size='sm' />

        <SectionSteps
          title='Convertidores de formatos de imagen'
          description='Convertidores de imágenes - cambie el formato entre JPG, PNG, WebP, SVG, BMP y GIF. Conversión en el navegador, sin envío de archivos.'
          grid='three'
          items={[
            {
              icon: <RiLoopLeftLine className='h-8 w-8' />,
              title: 'Convertidor JPG a WebP',
              topImageAlt: 'Convertidor JPG a WebP Arteon',
              topImageSrc:
                '/assets/tools/jpg-png-to-webp-converter/convertidor-jpg-png-a-webp-es.webp',
              description: (
                <div className='flex h-full flex-col'>
                  <p>
                    Convierte fotos JPG a WebP ligero. Reduce el peso de las imágenes hasta un 35%.
                  </p>
                  <div className='mt-4'>
                    <ButtonLink arrow href='/es/herramientas/convertidor-jpg-a-webp'>
                      Abrir herramienta
                    </ButtonLink>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiLoopLeftLine className='h-8 w-8' />,
              title: 'Convertidor PNG a JPG',
              topImageAlt: 'Convertidor PNG a JPG Arteon',
              topImageSrc:
                '/assets/tools/jpg-png-to-webp-converter/convertidor-jpg-png-a-webp-es.webp',
              description: (
                <div className='flex h-full flex-col'>
                  <p>
                    Convierte archivos PNG a JPG en el navegador. Sin límite de archivos, sin
                    registro.
                  </p>
                  <div className='mt-4'>
                    <ButtonLink arrow href='/es/herramientas/convertidor-png-a-jpg'>
                      Abrir herramienta
                    </ButtonLink>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiLoopLeftLine className='h-8 w-8' />,
              title: 'Convertidor WebP a JPG',
              topImageAlt: 'Convertidor WebP a JPG Arteon',
              topImageSrc:
                '/assets/tools/jpg-png-to-webp-converter/convertidor-jpg-png-a-webp-es.webp',
              description: (
                <div className='flex h-full flex-col'>
                  <p>
                    Convierte archivos WebP a JPG compatible con cualquier programa y plataforma.
                  </p>
                  <div className='mt-4'>
                    <ButtonLink arrow href='/es/herramientas/convertidor-webp-a-jpg'>
                      Abrir herramienta
                    </ButtonLink>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiLoopLeftLine className='h-8 w-8' />,
              title: 'Convertidor PNG a WebP',
              topImageAlt: 'Convertidor PNG a WebP Arteon',
              topImageSrc:
                '/assets/tools/jpg-png-to-webp-converter/convertidor-jpg-png-a-webp-es.webp',
              description: (
                <div className='flex h-full flex-col'>
                  <p>
                    Convierte gráficos PNG a WebP. Archivos más pequeños conservando la
                    transparencia.
                  </p>
                  <div className='mt-4'>
                    <ButtonLink arrow href='/es/herramientas/convertidor-png-a-webp'>
                      Abrir herramienta
                    </ButtonLink>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiLoopLeftLine className='h-8 w-8' />,
              title: 'Convertidor JPG a PNG',
              topImageAlt: 'Convertidor JPG a PNG Arteon',
              topImageSrc:
                '/assets/tools/jpg-png-to-webp-converter/convertidor-jpg-png-a-webp-es.webp',
              description: (
                <div className='flex h-full flex-col'>
                  <p>
                    Convierte imágenes JPG a PNG sin pérdida. Conversión local en el navegador, sin
                    límites.
                  </p>
                  <div className='mt-4'>
                    <ButtonLink arrow href='/es/herramientas/convertidor-jpg-a-png'>
                      Abrir herramienta
                    </ButtonLink>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiLoopLeftLine className='h-8 w-8' />,
              title: 'Convertidor WebP a PNG',
              topImageAlt: 'Convertidor WebP a PNG Arteon',
              topImageSrc:
                '/assets/tools/jpg-png-to-webp-converter/convertidor-jpg-png-a-webp-es.webp',
              description: (
                <div className='flex h-full flex-col'>
                  <p>
                    Convierte imágenes WebP a PNG sin pérdida. Conversión local, nada se envía al
                    servidor.
                  </p>
                  <div className='mt-4'>
                    <ButtonLink arrow href='/es/herramientas/convertidor-webp-a-png'>
                      Abrir herramienta
                    </ButtonLink>
                  </div>
                </div>
              ),
            },
          ]}
        />
        <Divider size='sm' />

        <SectionSteps
          title='Conversores de datos'
          description='Conversores de formatos de datos en línea — convierte entre CSV, JSON, XML, YAML, Markdown y HTML. Procesamiento en el navegador.'
          grid='three'
          items={[
            {
              icon: <RiLoopLeftLine className='h-8 w-8' />,
              title: 'CSV a JSON',
              topImageAlt: 'CSV a JSON Arteon',
              topImageSrc:
                '/assets/tools/jpg-png-to-webp-converter/convertidor-jpg-png-a-webp-es.webp',
              description: (
                <div className='flex h-full flex-col'>
                  <p>
                    Convierte CSV a formato JSON. Detección automática de separadores y formato del
                    resultado.
                  </p>
                  <div className='mt-4'>
                    <ButtonLink arrow href='/es/herramientas/convertidor-csv-a-json'>
                      Abrir herramienta
                    </ButtonLink>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiLoopLeftLine className='h-8 w-8' />,
              title: 'JSON a CSV',
              topImageAlt: 'JSON a CSV Arteon',
              topImageSrc:
                '/assets/tools/jpg-png-to-webp-converter/convertidor-jpg-png-a-webp-es.webp',
              description: (
                <div className='flex h-full flex-col'>
                  <p>Convierte datos JSON a formato CSV. Procesamiento en el navegador.</p>
                  <div className='mt-4'>
                    <ButtonLink arrow href='/es/herramientas/convertidor-json-a-csv'>
                      Abrir herramienta
                    </ButtonLink>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiLoopLeftLine className='h-8 w-8' />,
              title: 'XML a JSON',
              topImageAlt: 'XML a JSON Arteon',
              topImageSrc:
                '/assets/tools/jpg-png-to-webp-converter/convertidor-jpg-png-a-webp-es.webp',
              description: (
                <div className='flex h-full flex-col'>
                  <p>Convierte datos XML a JSON. Conversión en el navegador con validación.</p>
                  <div className='mt-4'>
                    <ButtonLink arrow href='/es/herramientas/convertidor-xml-a-json'>
                      Abrir herramienta
                    </ButtonLink>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiLoopLeftLine className='h-8 w-8' />,
              title: 'JSON a XML',
              topImageAlt: 'JSON a XML Arteon',
              topImageSrc:
                '/assets/tools/jpg-png-to-webp-converter/convertidor-jpg-png-a-webp-es.webp',
              description: (
                <div className='flex h-full flex-col'>
                  <p>Convierte datos JSON a XML válido. Conversión en el navegador con formato.</p>
                  <div className='mt-4'>
                    <ButtonLink arrow href='/es/herramientas/convertidor-json-a-xml'>
                      Abrir herramienta
                    </ButtonLink>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiLoopLeftLine className='h-8 w-8' />,
              title: 'YAML a JSON',
              topImageAlt: 'YAML a JSON Arteon',
              topImageSrc:
                '/assets/tools/jpg-png-to-webp-converter/convertidor-jpg-png-a-webp-es.webp',
              description: (
                <div className='flex h-full flex-col'>
                  <p>Convierte configuración YAML a JSON. Validación y formato en el navegador.</p>
                  <div className='mt-4'>
                    <ButtonLink arrow href='/es/herramientas/convertidor-yaml-a-json'>
                      Abrir herramienta
                    </ButtonLink>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiLoopLeftLine className='h-8 w-8' />,
              title: 'JSON a YAML',
              topImageAlt: 'JSON a YAML Arteon',
              topImageSrc:
                '/assets/tools/jpg-png-to-webp-converter/convertidor-jpg-png-a-webp-es.webp',
              description: (
                <div className='flex h-full flex-col'>
                  <p>Convierte datos JSON a YAML legible. Conversión en el navegador.</p>
                  <div className='mt-4'>
                    <ButtonLink arrow href='/es/herramientas/convertidor-json-a-yaml'>
                      Abrir herramienta
                    </ButtonLink>
                  </div>
                </div>
              ),
            },
          ]}
        />

        <Divider size='sm' />

        <Divider line />

        <SectionInfo title='¿Qué son las herramientas de Arteon?'>
          <p className='mb-4'>
            Un conjunto de herramientas gratuitas para preparar materiales para sitios web, redes
            sociales e impresión. Convertidor de imágenes a WebP, generador de favicon, contador de
            extensión de texto, extractor de colores, generador de paletas y códigos QR.
          </p>
          <p>
            Todas las herramientas se ejecutan en su navegador: los archivos nunca se envían a un
            servidor. Úselas sin registro y sin límites.
          </p>
        </SectionInfo>

        <Divider line />

        <SectionSteps
          title='¿Por qué usar las herramientas de Arteon?'
          grid='two'
          items={[
            {
              icon: <RiShieldCheckLine className='h-6 w-6' />,
              title: 'Privacidad total',
              description:
                'Todas las herramientas procesan los archivos localmente en su navegador. Nada se envía a un servidor: los datos desaparecen al cerrar la pestaña.',
            },
            {
              icon: <RiInfinityFill className='h-6 w-6' />,
              title: 'Sin límites de uso',
              description:
                'Úselas sin restricciones: sin límites diarios, sin límites de archivos, sin límites de conversiones. Tantas veces como necesite.',
            },
            {
              icon: <RiLockLine className='h-6 w-6' />,
              title: 'Sin registro',
              description: 'No necesita una cuenta. Abra la herramienta, Úsela y listo.',
            },
            {
              icon: <RiGlobalLine className='h-6 w-6' />,
              title: 'Disponible en español',
              description:
                'Todas las herramientas están disponibles en español: interfaz, instrucciones y mensajes.',
            },
          ]}
        />

        <Divider line />

        <FaqPanels items={faqItems} title='Preguntas frecuentes sobre nuestras herramientas' />

        <Divider size='sm' />
      </Wrapper>

      <Script id='ld-json-tools-es' type='application/ld+json' strategy='afterInteractive'>
        {JSON.stringify(schema)}
      </Script>
    </>
  );
}
