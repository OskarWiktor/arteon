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
import Divider from '@/components/atoms/Divider';
import Wrapper from '@/components/atoms/Wrapper';
import ToolCardFooter from '@/components/molecules/ToolCardFooter';
import HeroBanner from '@/components/organisms/HeroBanner';
import SectionFaqPanels from '@/components/organisms/sections/SectionFaqPanels';
import SectionInfo from '@/components/organisms/sections/SectionInfo';
import SectionSteps from '@/components/organisms/sections/SectionSteps';
import { getToolsIndexAlternates } from '@/lib/i18n/pages/toolMeta';
import { largeIconSizeClasses, normalIconSizeClasses } from '@/lib/uiClasses';
import { toAbsoluteUrl, siteUrl } from '@/utils/absoluteUrl';

export const metadata = {
  title: 'Ferramentas gratuitas | Conversores, SEO, cores, favicon',
  description:
    'Ferramentas gratuitas: Conversores de imagens (JPG, PNG, WebP, SVG, BMP,, GIF, AVIF, HEIC, TIFF), gerador de favicon, editor de imagens, contador de texto, paletas de cores e códigos QR. Sem registo.',
  alternates: getToolsIndexAlternates('pt'),
  openGraph: {
    title: 'Ferramentas gratuitas | Conversores, SEO, cores, favicon',
    description:
      'Ferramentas gratuitas: Conversores de imagens (JPG, PNG, WebP, SVG, BMP,, GIF, AVIF, HEIC, TIFF), gerador de favicon, editor de imagens, contador de texto, paletas de cores e códigos QR. Sem registo.',
    url: toAbsoluteUrl('/pt/ferramentas'),
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
        name: 'Conversor JPG para AVIF',
        description:
          'Converta fotos JPG para AVIF moderno. Compressao ate 50% melhor que JPG mantendo a qualidade.',
        url: toAbsoluteUrl('/pt/ferramentas/conversor-jpg-para-avif'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 36,
        name: 'Conversor PNG para AVIF',
        description:
          'Converta graficos PNG para AVIF com suporte a transparencia. Ficheiros significativamente menores.',
        url: toAbsoluteUrl('/pt/ferramentas/conversor-png-para-avif'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 37,
        name: 'Conversor WebP para AVIF',
        description:
          'Converta ficheiros WebP para AVIF. Compressao ainda melhor num formato moderno.',
        url: toAbsoluteUrl('/pt/ferramentas/conversor-webp-para-avif'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 38,
        name: 'Conversor SVG para AVIF',
        description:
          'Converta graficos vetoriais SVG para formato raster AVIF compacto.',
        url: toAbsoluteUrl('/pt/ferramentas/conversor-svg-para-avif'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 39,
        name: 'Conversor BMP para AVIF',
        description:
          'Converta ficheiros BMP nao comprimidos para AVIF ultracompacto.',
        url: toAbsoluteUrl('/pt/ferramentas/conversor-bmp-para-avif'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 40,
        name: 'Conversor GIF para AVIF',
        description:
          'Converta o primeiro quadro GIF para imagem AVIF estatica com excelente compressao.',
        url: toAbsoluteUrl('/pt/ferramentas/conversor-gif-para-avif'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 41,
        name: 'Conversor HEIC para AVIF',
        description: 'Converta fotos HEIC do iPhone para formato AVIF moderno.',
        url: toAbsoluteUrl('/pt/ferramentas/conversor-heic-para-avif'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 42,
        name: 'Conversor TIFF para AVIF',
        description:
          'Converta ficheiros TIFF para AVIF moderno. Reducao massiva do tamanho do ficheiro.',
        url: toAbsoluteUrl('/pt/ferramentas/conversor-tiff-para-avif'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 43,
        name: 'Conversor JPG para GIF',
        description:
          'Converta fotos JPG para formato GIF. Perfeito para graficos simples e icones.',
        url: toAbsoluteUrl('/pt/ferramentas/conversor-jpg-para-gif'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 44,
        name: 'Conversor PNG para GIF',
        description:
          'Converta graficos PNG para GIF. Ideal para icones simples e graficos.',
        url: toAbsoluteUrl('/pt/ferramentas/conversor-png-para-gif'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 45,
        name: 'Conversor WebP para GIF',
        description:
          'Converta imagens WebP para formato GIF para maxima compatibilidade.',
        url: toAbsoluteUrl('/pt/ferramentas/conversor-webp-para-gif'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 46,
        name: 'Conversor SVG para GIF',
        description: 'Converta graficos vetoriais SVG para formato raster GIF.',
        url: toAbsoluteUrl('/pt/ferramentas/conversor-svg-para-gif'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 47,
        name: 'Conversor BMP para GIF',
        description: 'Converta ficheiros BMP nao comprimidos para GIF leve.',
        url: toAbsoluteUrl('/pt/ferramentas/conversor-bmp-para-gif'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 48,
        name: 'Conversor JPG para TIFF',
        description:
          'Converta fotos JPG para TIFF sem perdas. Para impressao e arquivamento.',
        url: toAbsoluteUrl('/pt/ferramentas/conversor-jpg-para-tiff'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 49,
        name: 'Conversor PNG para TIFF',
        description: 'Converta graficos PNG para formato TIFF profissional.',
        url: toAbsoluteUrl('/pt/ferramentas/conversor-png-para-tiff'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 50,
        name: 'Conversor WebP para TIFF',
        description:
          'Converta imagens WebP para TIFF profissional para impressao e arquivo.',
        url: toAbsoluteUrl('/pt/ferramentas/conversor-webp-para-tiff'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 51,
        name: 'Conversor SVG para TIFF',
        description:
          'Converta graficos vetoriais SVG para raster TIFF de alta qualidade.',
        url: toAbsoluteUrl('/pt/ferramentas/conversor-svg-para-tiff'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 52,
        name: 'Conversor BMP para TIFF',
        description:
          'Converta ficheiros BMP para formato TIFF profissional para impressao.',
        url: toAbsoluteUrl('/pt/ferramentas/conversor-bmp-para-tiff'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 53,
        name: 'Conversor HEIC para TIFF',
        description:
          'Converta fotos HEIC do iPhone para formato TIFF profissional.',
        url: toAbsoluteUrl('/pt/ferramentas/conversor-heic-para-tiff'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
    ],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Ferramentas gratuitas - conversores de imagens, SEO, cores, favicon',
  description:
    'Ferramentas gratuitas: Conversores de imagens (JPG, PNG, WebP, SVG, BMP,, GIF, AVIF, HEIC, TIFF), gerador de favicon, editor de imagens, contador de texto, paletas de cores e códigos QR. Sem registo.',
  url: toAbsoluteUrl('/pt/ferramentas'),
  inLanguage: 'pt',
  isPartOf: {
    '@type': 'WebSite',
    name: 'Arteon Agency',
    url: siteUrl,
  },
  about: [
    { '@type': 'Thing', name: 'Otimização de imagens' },
    { '@type': 'Thing', name: 'SEO' },
    { '@type': 'Thing', name: 'Cores e branding' },
    { '@type': 'Thing', name: 'Geradores' },
  ],
  mainEntity: {
    '@type': 'ItemList',

    itemListElement: [
      {
        '@type': 'WebApplication',
        position: 1,
        name: 'Conversor JPG e PNG para WebP',
        description:
          'Conversor gratuito de JPG e PNG para WebP. Reduz o peso dos ficheiros até 35 % sem perda de qualidade visível. Sem registo – os ficheiros permanecem no seu navegador.',
        url: toAbsoluteUrl('/pt/ferramentas/conversor-jpg-para-webp'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 2,
        name: 'Editor de imagens',
        description:
          'Recorte e redimensione as suas imagens para redes sociais e sites. Modelos prontos a usar, dimensões personalizadas e avatares redondos.',
        url: toAbsoluteUrl('/pt/ferramentas/editor-de-imagens-online'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 3,
        name: 'Gerador de favicon',
        description:
          'Gerador de favicon gratuito. Cria favicon.ico e ícones PNG (16×16 a 512×512) a partir de uma única imagem – compatível com todos os navegadores e Lighthouse.',
        url: toAbsoluteUrl('/pt/ferramentas/gerador-de-favicon-gratuito'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 4,
        name: 'Verificador de meta título e descrição',
        description:
          'Verificador de meta título e descrição com pré-visualização Google. Mostra o número de caracteres e a largura em píxeis para evitar títulos e descrições truncados nos resultados de pesquisa.',
        url: toAbsoluteUrl(
          '/pt/ferramentas/verificador-de-meta-titulo-e-descricao',
        ),
        applicationCategory: 'DeveloperApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 5,
        name: 'Gerador de assinatura de e-mail HTML',
        description:
          'Gerador gratuito de assinatura de e-mail HTML. Preencha os seus dados de contacto, link CTA e perfis de redes sociais, depois copie o código HTML para o Gmail ou Outlook.',
        url: toAbsoluteUrl(
          '/pt/ferramentas/gerador-de-assinatura-de-email-gratuito',
        ),
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 6,
        name: 'Verificador de contraste e legibilidade de cores',
        description:
          'Verifica o contraste e a legibilidade das cores de texto e fundo segundo as WCAG. Calcula o rácio de contraste e propõe ajuste automático.',
        url: toAbsoluteUrl('/pt/ferramentas/verificador-de-contraste-de-cores'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 7,
        name: 'Extrator de cores de imagem',
        description:
          'Extrator de cores gratuito. Importe uma foto ou logótipo e obtenha uma paleta de até 12 cores dominantes (HEX e RGB).',
        url: toAbsoluteUrl('/pt/ferramentas/extrator-de-cores-de-imagem'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 8,
        name: 'Gerador de paletas de cores',
        description:
          'Gere paletas a partir de uma cor de base. Monocromática, triádica, análoga, complementar e mais – com variantes pastel, escura e minimalista.',
        url: toAbsoluteUrl('/pt/ferramentas/gerador-de-paletas-de-cores'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 9,
        name: 'Contador de palavras e caracteres',
        description:
          'Contador de palavras e caracteres gratuito com avaliação do comprimento. Verifique se o comprimento do texto é adequado para uma página inicial, página de serviço, artigo de blog ou ficha de produto.',
        url: toAbsoluteUrl('/pt/ferramentas/contador-de-palavras-e-caracteres'),
        applicationCategory: 'DeveloperApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 10,
        name: 'Gerador de códigos QR',
        description:
          'Gerador de códigos QR gratuito. Crie códigos QR para sites, vCards, menus ou flyers. Exportação em PNG e SVG, sem registo, sem limite.',
        url: toAbsoluteUrl('/pt/ferramentas/gerador-de-codigos-qr-gratuito'),
        applicationCategory: 'UtilityApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 11,
        name: 'Conversor JPG para WebP',
        description:
          'Converta fotos JPG para WebP leve. Reduza o peso das imagens até 35%.',
        url: toAbsoluteUrl('/pt/ferramentas/conversor-jpg-para-webp'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 12,
        name: 'Conversor PNG para JPG',
        description:
          'Converta ficheiros PNG para JPG no navegador. Sem limite de ficheiros, sem registo.',
        url: toAbsoluteUrl('/pt/ferramentas/conversor-png-para-jpg'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 13,
        name: 'Conversor WebP para JPG',
        description:
          'Converta ficheiros WebP para JPG compatível com tudo. Sem limites, sem registo.',
        url: toAbsoluteUrl('/pt/ferramentas/conversor-webp-para-jpg'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 14,
        name: 'Conversor PNG para WebP',
        description:
          'Converta gráficos PNG para WebP. Ficheiros menores mantendo a transparência.',
        url: toAbsoluteUrl('/pt/ferramentas/conversor-png-para-webp'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 15,
        name: 'Conversor JPG para PNG',
        description:
          'Converta imagens JPG para PNG sem perdas. Conversão local no navegador.',
        url: toAbsoluteUrl('/pt/ferramentas/conversor-jpg-para-png'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 16,
        name: 'Conversor WebP para PNG',
        description:
          'Converta imagens WebP para PNG sem perdas. Conversão local, nada enviado ao servidor.',
        url: toAbsoluteUrl('/pt/ferramentas/conversor-webp-para-png'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 17,
        name: 'Conversor SVG para PNG',
        description:
          'Converta gráficos vetoriais SVG para PNG. Ideal para documentos e redes sociais.',
        url: toAbsoluteUrl('/pt/ferramentas/conversor-svg-para-png'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 18,
        name: 'Conversor SVG para JPG',
        description:
          'Converta gráficos SVG para JPG compacto. Ficheiro menor, compatibilidade total.',
        url: toAbsoluteUrl('/pt/ferramentas/conversor-svg-para-jpg'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 19,
        name: 'Conversor BMP para JPG',
        description:
          'Converta ficheiros BMP para JPG leve. Redução drástica do tamanho.',
        url: toAbsoluteUrl('/pt/ferramentas/conversor-bmp-para-jpg'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 20,
        name: 'Conversor BMP para PNG',
        description:
          'Converta imagens BMP para PNG sem perdas. Qualidade preservada, tamanho reduzido.',
        url: toAbsoluteUrl('/pt/ferramentas/conversor-bmp-para-png'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 21,
        name: 'Conversor GIF para PNG',
        description:
          'Exporte o primeiro fotograma de um GIF como PNG estático. Sem perdas de qualidade.',
        url: toAbsoluteUrl('/pt/ferramentas/conversor-gif-para-png'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 22,
        name: 'Conversor GIF para JPG',
        description:
          'Exporte o primeiro fotograma de um GIF como JPG compacto. Ficheiro menor.',
        url: toAbsoluteUrl('/pt/ferramentas/conversor-gif-para-jpg'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 23,
        name: 'Conversor SVG para WebP',
        description: 'Converta graficos SVG para WebP leve. Ideal para sites.',
        url: toAbsoluteUrl('/pt/ferramentas/conversor-svg-para-webp'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 24,
        name: 'Conversor GIF para WebP',
        description:
          'Converta o primeiro fotograma GIF para WebP leve. Ficheiro menor.',
        url: toAbsoluteUrl('/pt/ferramentas/conversor-gif-para-webp'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 25,
        name: 'Conversor BMP para WebP',
        description:
          'Converta ficheiros BMP para WebP leve. Reducao de ate 95%.',
        url: toAbsoluteUrl('/pt/ferramentas/conversor-bmp-para-webp'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 26,
        name: 'Conversor AVIF para JPG',
        description:
          'Converta ficheiros AVIF para JPG universal. Compativel com tudo.',
        url: toAbsoluteUrl('/pt/ferramentas/conversor-avif-para-jpg'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 27,
        name: 'Conversor AVIF para PNG',
        description:
          'Converta ficheiros AVIF para PNG sem perdas. Qualidade preservada.',
        url: toAbsoluteUrl('/pt/ferramentas/conversor-avif-para-png'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 28,
        name: 'Conversor AVIF para WebP',
        description:
          'Converta ficheiros AVIF para WebP. Ampla compatibilidade.',
        url: toAbsoluteUrl('/pt/ferramentas/conversor-avif-para-webp'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 29,
        name: 'Conversor HEIC para JPG',
        description:
          'Converta fotos HEIC do iPhone para JPG universal. Sem registo.',
        url: toAbsoluteUrl('/pt/ferramentas/conversor-heic-para-jpg'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 30,
        name: 'Conversor HEIC para PNG',
        description: 'Converta fotos HEIC do iPhone para PNG sem perdas.',
        url: toAbsoluteUrl('/pt/ferramentas/conversor-heic-para-png'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 31,
        name: 'Conversor HEIC para WebP',
        description:
          'Converta fotos HEIC do iPhone para WebP leve. Menor tamanho.',
        url: toAbsoluteUrl('/pt/ferramentas/conversor-heic-para-webp'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 32,
        name: 'Conversor TIFF para JPG',
        description:
          'Converta ficheiros TIFF para JPG compacto. Ideal para digitalizacoes.',
        url: toAbsoluteUrl('/pt/ferramentas/conversor-tiff-para-jpg'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 33,
        name: 'Conversor TIFF para PNG',
        description: 'Converta ficheiros TIFF para PNG sem perdas.',
        url: toAbsoluteUrl('/pt/ferramentas/conversor-tiff-para-png'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 34,
        name: 'Conversor TIFF para WebP',
        description: 'Converta ficheiros TIFF para WebP leve. Enorme reducao.',
        url: toAbsoluteUrl('/pt/ferramentas/conversor-tiff-para-webp'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
    ],
  },
};

const faqItems = [
  {
    question: 'As ferramentas são pagas?',
    answer:
      'Não. Todas as ferramentas são gratuitas, sem subscrição e sem custos ocultos.',
  },
  {
    question: 'Os meus ficheiros são enviados para um servidor?',
    answer:
      'Não. Todas as ferramentas funcionam inteiramente no seu navegador. Os ficheiros nunca saem do seu computador e não são armazenados em lado nenhum.',
  },
  {
    question: 'Tenho de criar uma conta?',
    answer:
      'Não. Pode utilizar as ferramentas imediatamente, sem se registar nem criar conta.',
  },
  {
    question: 'Existe um limite de utilização?',
    answer:
      'Não. Utilize as ferramentas sem restrições – sem limite diário, sem limite de ficheiros, sem limite de conversões.',
  },
  {
    question: 'Para que servem estas ferramentas?',
    answer:
      'Ajudam a preparar conteúdos para sites, redes sociais e impressão: otimizar imagens, criar favicons, verificar comprimento de texto, gerar códigos QR, escolher cores e verificar a sua legibilidade.',
  },
  {
    question: 'As ferramentas funcionam no telemóvel?',
    answer:
      'Sim, mas algumas ferramentas (por ex. o conversor WebP e o gerador de favicon) estão otimizadas para computador, pois processam ficheiros volumosos.',
  },
];

export default function ToolsIndexPage() {
  return (
    <>
      <HeroBanner
        title='Ferramentas gratuitas'
        description='Conversores de formatos de imagem, editor de imagens, gerador de favicon, contador de texto, ferramentas de cor e códigos QR. Sem registo, sem limites.'
        backgroundImage='/assets/arteon-logo-on-mockup.webp'
        overlay='black'
      />

      <Wrapper>
        <Divider size='xs' />

        <SectionSteps
          title='Imagens e favicons'
          description='Ferramentas para preparar fotos, gráficos e ícones para sites e redes sociais.'
          grid='three'
          cardVariant='dark'
          items={[
            {
              icon: <RiCropLine className={largeIconSizeClasses} />,
              title: 'Editor de imagens',
              topImageAlt: 'Editor de imagens Arteon',
              topImageSrc:
                '/assets/tools/free-image-editor-crop-resize-and-convert/editor-de-imagens-online-pt.webp',
              description: (
                <div className='flex h-full flex-col'>
                  <p>
                    Prepare o corte perfeito para redes sociais ou o seu site.
                    Escolha um formato predefinido ou introduza dimensões
                    personalizadas e descarregue a imagem em PNG, JPG ou WebP.
                  </p>
                  <ToolCardFooter
                    href='/pt/ferramentas/editor-de-imagens-online'
                    label='Abrir ferramenta'
                  />
                </div>
              ),
            },
            {
              icon: <RiAppsLine className={largeIconSizeClasses} />,
              title: 'Gerador de favicon',
              topImageAlt: 'Gerador de favicon Arteon',
              topImageSrc:
                '/assets/tools/favicon-generator/gerador-de-favicon-gratuito-pt.webp',
              description: (
                <div className='flex h-full flex-col'>
                  <p>
                    Gere <strong>favicon.ico</strong> e ícones PNG 180x180,
                    192x192 e 512x512 a partir de uma única imagem – conforme às
                    exigências dos navegadores e do Lighthouse.
                  </p>
                  <ToolCardFooter
                    href='/pt/ferramentas/gerador-de-favicon-gratuito'
                    label='Abrir ferramenta'
                  />
                </div>
              ),
            },
          ]}
        />
        <Divider size='sm' />

        <SectionSteps
          title='Texto e SEO'
          description='Ferramentas para verificar o comprimento de texto, as tags meta e pré-visualizar a sua página nos resultados de pesquisa.'
          grid='three'
          cardVariant='dark'
          items={[
            {
              icon: <RiFileTextLine className={largeIconSizeClasses} />,
              title: 'Verificador de meta título e descrição',
              topImageAlt: 'Verificador de meta título e descrição Arteon',
              topImageSrc:
                '/assets/tools/free-meta-title-and-description-checker-pixel-width/verificador-de-meta-titulo-e-descricao-pt.webp',
              description: (
                <div className='flex h-full flex-col'>
                  <p>
                    Verifique o número de caracteres, palavras e a largura em
                    píxeis – com pré-visualização da aparência da sua página nos
                    resultados Google. Evite títulos e descrições truncados.
                  </p>
                  <ToolCardFooter
                    href='/pt/ferramentas/verificador-de-meta-titulo-e-descricao'
                    label='Abrir ferramenta'
                  />
                </div>
              ),
            },
            {
              icon: <RiArticleLine className={largeIconSizeClasses} />,
              title: 'Contador de palavras e caracteres',
              topImageAlt: 'Contador de palavras e caracteres Arteon',
              topImageSrc:
                '/assets/tools/word-and-character-counter-with-text-formatting-tools/contador-de-palavras-e-caracteres-pt.webp',
              description: (
                <div className='flex h-full flex-col'>
                  <p>
                    Verifique se o comprimento do texto é adequado para uma
                    página inicial, página de serviço, artigo de blog ou ficha
                    de produto. A ferramenta conta palavras, caracteres,
                    parágrafos e estima o tempo de leitura.
                  </p>
                  <ToolCardFooter
                    href='/pt/ferramentas/contador-de-palavras-e-caracteres'
                    label='Abrir ferramenta'
                  />
                </div>
              ),
            },

            {
              icon: <RiFileTextLine className={largeIconSizeClasses} />,
              title: 'Gerador Lorem Ipsum',
              topImageAlt: 'Gerador Lorem Ipsum Arteon',
              topImageSrc:
                '/assets/tools/lorem-ipsum-generator/gerador-lorem-ipsum-pt.webp',
              description: (
                <div className='flex h-full flex-col'>
                  <p>
                    Gere texto de preenchimento em 8 estilos e 9 modos. Lorem
                    Ipsum, Hipster, Business, Bacon e mais. Copie como texto ou
                    HTML.
                  </p>
                  <ToolCardFooter
                    href='/pt/ferramentas/gerador-lorem-ipsum'
                    label='Abrir ferramenta'
                  />
                </div>
              ),
            },
          ]}
        />

        <Divider size='sm' />

        <SectionSteps
          title='E-mail e comunicação'
          description='Ferramentas para comunicação por e-mail profissional e imagem de marca coerente.'
          grid='three'
          cardVariant='dark'
          items={[
            {
              icon: <RiMailLine className={largeIconSizeClasses} />,
              title: 'Gerador de assinatura de e-mail HTML gratuito',
              topImageAlt:
                'Gerador de assinatura de e-mail HTML gratuito Arteon',
              topImageSrc:
                '/assets/tools/free-html-email-signature-generator/gerador-de-assinatura-de-email-gratuito-pt.webp',
              description: (
                <div className='flex h-full flex-col'>
                  <p>
                    Crie uma assinatura de e-mail profissional em minutos.
                    Preencha os seus dados, escolha as cores e copie o código
                    HTML para o Gmail, Outlook ou qualquer outro cliente de
                    e-mail.
                  </p>
                  <ToolCardFooter
                    href='/pt/ferramentas/gerador-de-assinatura-de-email-gratuito'
                    label='Abrir ferramenta'
                  />
                </div>
              ),
            },
          ]}
        />

        <Divider size='sm' />

        <SectionSteps
          title='Códigos QR'
          description='Gerador de códigos QR para sites, cartões de visita, menus e suportes impressos.'
          grid='three'
          cardVariant='dark'
          items={[
            {
              icon: <RiQrCodeLine className={largeIconSizeClasses} />,
              title: 'Gerador de códigos QR gratuito',
              topImageAlt: 'Gerador de códigos QR gratuito Arteon',
              topImageSrc:
                '/assets/tools/qr-code-generator/gerador-de-codigos-qr-gratuito-pt.webp',
              description: (
                <div className='flex h-full flex-col'>
                  <p>
                    Crie um código QR para um site, vCard, menu ou flyer.
                    Exportação em PNG e SVG – sem registo, sem limite.
                  </p>
                  <ToolCardFooter
                    href='/pt/ferramentas/gerador-de-codigos-qr-gratuito'
                    label='Abrir ferramenta'
                  />
                </div>
              ),
            },
          ]}
        />

        <Divider size='sm' />

        <SectionSteps
          title='Cores e acessibilidade'
          description='Ferramentas para trabalhar com cores, contraste e acessibilidade WCAG.'
          grid='three'
          cardVariant='dark'
          items={[
            {
              icon: <RiContrast2Line className={largeIconSizeClasses} />,
              title: 'Verificador de contraste e legibilidade',
              topImageAlt: 'Verificador de contraste de cores Arteon',
              topImageSrc:
                '/assets/tools/color-contrast-and-readability-checker/verificador-de-contraste-de-cores-pt.webp',
              description: (
                <div className='flex h-full flex-col'>
                  <p>
                    Verifique se as suas cores de texto e fundo são legíveis.
                    Introduza os códigos de cor, consulte o rácio de contraste{' '}
                    <strong>WCAG</strong> e utilize a função{' '}
                    <strong>Ajustar</strong> para correção automática.
                  </p>
                  <ToolCardFooter
                    href='/pt/ferramentas/verificador-de-contraste-de-cores'
                    label='Abrir ferramenta'
                  />
                </div>
              ),
            },
            {
              icon: <RiPantoneLine className={largeIconSizeClasses} />,
              title: 'Extrator de cores de imagem',
              topImageAlt: 'Extrator de cores de imagem Arteon',
              topImageSrc:
                '/assets/tools/image-color-extractor/extrator-de-cores-de-imagem-pt.webp',
              description: (
                <div className='flex h-full flex-col'>
                  <p>
                    Importe uma foto ou logótipo – a ferramenta extrairá as
                    cores dominantes. Copie os códigos HEX com um clique e
                    utilize-os em qualquer lugar.
                  </p>
                  <ToolCardFooter
                    href='/pt/ferramentas/extrator-de-cores-de-imagem'
                    label='Abrir ferramenta'
                  />
                </div>
              ),
            },
            {
              icon: <RiPaletteLine className={largeIconSizeClasses} />,
              title: 'Gerador de paletas de cores',
              topImageAlt: 'Gerador de paletas de cores Arteon',
              topImageSrc:
                '/assets/tools/color-palette-generator/gerador-de-paletas-de-cores-pt.webp',
              description: (
                <div className='flex h-full flex-col'>
                  <p>
                    Escolha uma cor de base e gere 9 paletas: monocromática,
                    complementar, triádica, pastel, escura e mais. Copie os
                    códigos HEX com um clique.
                  </p>
                  <ToolCardFooter
                    href='/pt/ferramentas/gerador-de-paletas-de-cores'
                    label='Abrir ferramenta'
                  />
                </div>
              ),
            },
          ]}
        />

        <Divider size='sm' />

        <SectionSteps
          title='Conversores de formatos de imagem'
          description='Conversores de imagens - converta entre JPG, PNG, WebP, SVG, BMP e GIF. Conversão no navegador, sem envio de ficheiros.'
          grid='three'
          cardVariant='dark'
          items={[
            {
              icon: <RiLoopLeftLine className={largeIconSizeClasses} />,
              title: 'Conversor JPG para WebP',
              topImageAlt: 'Conversor JPG para WebP Arteon',
              topImageSrc:
                '/assets/tools/jpg-png-to-webp-converter/conversor-jpg-png-para-webp-pt.webp',
              description: (
                <div className='flex h-full flex-col'>
                  <p>
                    Converta fotos JPG para WebP leve. Reduza o peso das imagens
                    até 35%.
                  </p>
                  <ToolCardFooter
                    href='/pt/ferramentas/conversor-jpg-para-webp'
                    label='Abrir ferramenta'
                  />
                </div>
              ),
            },
            {
              icon: <RiLoopLeftLine className={largeIconSizeClasses} />,
              title: 'Conversor PNG para JPG',
              topImageAlt: 'Conversor PNG para JPG Arteon',
              topImageSrc:
                '/assets/tools/jpg-png-to-webp-converter/conversor-jpg-png-para-webp-pt.webp',
              description: (
                <div className='flex h-full flex-col'>
                  <p>
                    Converta ficheiros PNG para JPG no navegador. Sem limite de
                    ficheiros, sem registo.
                  </p>
                  <ToolCardFooter
                    href='/pt/ferramentas/conversor-png-para-jpg'
                    label='Abrir ferramenta'
                  />
                </div>
              ),
            },
            {
              icon: <RiLoopLeftLine className={largeIconSizeClasses} />,
              title: 'Conversor WebP para JPG',
              topImageAlt: 'Conversor WebP para JPG Arteon',
              topImageSrc:
                '/assets/tools/jpg-png-to-webp-converter/conversor-jpg-png-para-webp-pt.webp',
              description: (
                <div className='flex h-full flex-col'>
                  <p>
                    Converta ficheiros WebP para JPG compatível com tudo. Sem
                    limites, sem registo.
                  </p>
                  <ToolCardFooter
                    href='/pt/ferramentas/conversor-webp-para-jpg'
                    label='Abrir ferramenta'
                  />
                </div>
              ),
            },
            {
              icon: <RiLoopLeftLine className={largeIconSizeClasses} />,
              title: 'Conversor PNG para WebP',
              topImageAlt: 'Conversor PNG para WebP Arteon',
              topImageSrc:
                '/assets/tools/jpg-png-to-webp-converter/conversor-jpg-png-para-webp-pt.webp',
              description: (
                <div className='flex h-full flex-col'>
                  <p>
                    Converta gráficos PNG para WebP. Ficheiros menores mantendo
                    a transparência.
                  </p>
                  <ToolCardFooter
                    href='/pt/ferramentas/conversor-png-para-webp'
                    label='Abrir ferramenta'
                  />
                </div>
              ),
            },
            {
              icon: <RiLoopLeftLine className={largeIconSizeClasses} />,
              title: 'Conversor JPG para PNG',
              topImageAlt: 'Conversor JPG para PNG Arteon',
              topImageSrc:
                '/assets/tools/jpg-png-to-webp-converter/conversor-jpg-png-para-webp-pt.webp',
              description: (
                <div className='flex h-full flex-col'>
                  <p>
                    Converta imagens JPG para PNG sem perdas. Conversão local no
                    navegador.
                  </p>
                  <ToolCardFooter
                    href='/pt/ferramentas/conversor-jpg-para-png'
                    label='Abrir ferramenta'
                  />
                </div>
              ),
            },
            {
              icon: <RiLoopLeftLine className={largeIconSizeClasses} />,
              title: 'Conversor WebP para PNG',
              topImageAlt: 'Conversor WebP para PNG Arteon',
              topImageSrc:
                '/assets/tools/jpg-png-to-webp-converter/conversor-jpg-png-para-webp-pt.webp',
              description: (
                <div className='flex h-full flex-col'>
                  <p>
                    Converta imagens WebP para PNG sem perdas. Conversão local,
                    nada enviado ao servidor.
                  </p>
                  <ToolCardFooter
                    href='/pt/ferramentas/conversor-webp-para-png'
                    label='Abrir ferramenta'
                  />
                </div>
              ),
            },
          ]}
        />
        <Divider size='sm' />

        <SectionSteps
          title='Conversores de dados'
          description='Conversores de formatos de dados — converta entre CSV, JSON, XML, YAML, Markdown e HTML. Processamento no navegador.'
          grid='three'
          cardVariant='dark'
          items={[
            {
              icon: <RiLoopLeftLine className={largeIconSizeClasses} />,
              title: 'CSV para JSON',
              topImageAlt: 'CSV para JSON Arteon',
              topImageSrc:
                '/assets/tools/jpg-png-to-webp-converter/conversor-jpg-png-para-webp-pt.webp',
              description: (
                <div className='flex h-full flex-col'>
                  <p>
                    Converta CSV para formato JSON. Detecção automática de
                    separadores e formatação.
                  </p>
                  <ToolCardFooter
                    href='/pt/ferramentas/conversor-csv-para-json'
                    label='Abrir ferramenta'
                  />
                </div>
              ),
            },
            {
              icon: <RiLoopLeftLine className={largeIconSizeClasses} />,
              title: 'JSON para CSV',
              topImageAlt: 'JSON para CSV Arteon',
              topImageSrc:
                '/assets/tools/jpg-png-to-webp-converter/conversor-jpg-png-para-webp-pt.webp',
              description: (
                <div className='flex h-full flex-col'>
                  <p>
                    Converta dados JSON para formato CSV. Processamento no
                    navegador.
                  </p>
                  <ToolCardFooter
                    href='/pt/ferramentas/conversor-json-para-csv'
                    label='Abrir ferramenta'
                  />
                </div>
              ),
            },
            {
              icon: <RiLoopLeftLine className={largeIconSizeClasses} />,
              title: 'XML para JSON',
              topImageAlt: 'XML para JSON Arteon',
              topImageSrc:
                '/assets/tools/jpg-png-to-webp-converter/conversor-jpg-png-para-webp-pt.webp',
              description: (
                <div className='flex h-full flex-col'>
                  <p>
                    Converta dados XML para JSON. Conversão no navegador com
                    validação.
                  </p>
                  <ToolCardFooter
                    href='/pt/ferramentas/conversor-xml-para-json'
                    label='Abrir ferramenta'
                  />
                </div>
              ),
            },
            {
              icon: <RiLoopLeftLine className={largeIconSizeClasses} />,
              title: 'JSON para XML',
              topImageAlt: 'JSON para XML Arteon',
              topImageSrc:
                '/assets/tools/jpg-png-to-webp-converter/conversor-jpg-png-para-webp-pt.webp',
              description: (
                <div className='flex h-full flex-col'>
                  <p>
                    Converta dados JSON para XML válido. Conversão no navegador
                    com formatação.
                  </p>
                  <ToolCardFooter
                    href='/pt/ferramentas/conversor-json-para-xml'
                    label='Abrir ferramenta'
                  />
                </div>
              ),
            },
            {
              icon: <RiLoopLeftLine className={largeIconSizeClasses} />,
              title: 'YAML para JSON',
              topImageAlt: 'YAML para JSON Arteon',
              topImageSrc:
                '/assets/tools/jpg-png-to-webp-converter/conversor-jpg-png-para-webp-pt.webp',
              description: (
                <div className='flex h-full flex-col'>
                  <p>
                    Converta configuração YAML para JSON. Validação e formatação
                    no navegador.
                  </p>
                  <ToolCardFooter
                    href='/pt/ferramentas/conversor-yaml-para-json'
                    label='Abrir ferramenta'
                  />
                </div>
              ),
            },
            {
              icon: <RiLoopLeftLine className={largeIconSizeClasses} />,
              title: 'JSON para YAML',
              topImageAlt: 'JSON para YAML Arteon',
              topImageSrc:
                '/assets/tools/jpg-png-to-webp-converter/conversor-jpg-png-para-webp-pt.webp',
              description: (
                <div className='flex h-full flex-col'>
                  <p>
                    Converta dados JSON para YAML legível. Processamento no
                    navegador.
                  </p>
                  <ToolCardFooter
                    href='/pt/ferramentas/conversor-json-para-yaml'
                    label='Abrir ferramenta'
                  />
                </div>
              ),
            },
          ]}
        />

        <Divider size='sm' />

        <Divider line />

        <SectionInfo title='O que são as ferramentas Arteon?'>
          <p className='mb-4'>
            34 ferramentas gratuitas para criar e otimizar conteúdos para sites,
            redes sociais e impressão – conversor WebP, gerador de favicon,
            contador de texto, extrator de cores, gerador de paletas e códigos
            QR.
          </p>
          <p>
            Todas as ferramentas funcionam no seu navegador – os ficheiros nunca
            são enviados para um servidor. Utilize-as sem registo e sem limite.
          </p>
        </SectionInfo>

        <Divider line />

        <SectionSteps
          title='Porquê utilizar as ferramentas Arteon?'
          grid='two'
          items={[
            {
              icon: <RiShieldCheckLine className={normalIconSizeClasses} />,
              title: 'Privacidade total',
              description:
                'Todas as ferramentas processam os ficheiros localmente no seu navegador. Nada é enviado para um servidor – os dados desaparecem quando fecha o separador.',
            },
            {
              icon: <RiInfinityFill className={normalIconSizeClasses} />,
              title: 'Sem limite de utilização',
              description:
                'Utilize as ferramentas sem restrições – sem limite diário, sem limite de ficheiros, sem limite de conversões. Tantas vezes quantas necessário.',
            },
            {
              icon: <RiLockLine className={normalIconSizeClasses} />,
              title: 'Sem registo',
              description:
                'Nenhuma conta necessária. Abra a ferramenta, utilize-a, é tudo.',
            },
            {
              icon: <RiGlobalLine className={normalIconSizeClasses} />,
              title: 'Disponível em português',
              description:
                'Todas as ferramentas estão disponíveis em português – interface, instruções e mensagens.',
            },
          ]}
        />

        <Divider line />

        <SectionFaqPanels
          items={faqItems}
          title='Perguntas frequentes sobre as nossas ferramentas'
        />

        <Divider size='sm' />
      </Wrapper>

      <Script
        id='ld-json-tools-pt'
        type='application/ld+json'
        strategy='afterInteractive'
      >
        {JSON.stringify(schema)}
      </Script>
    </>
  );
}
