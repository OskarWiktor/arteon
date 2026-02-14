import Script from 'next/script';
import HeroBanner from '@/components/sections/HeroBanner';
import Breadcrumbs from '@/components/sections/BreadCrumbs';
import PaletteExtractor from '@/components/sections/tools/PaletteExtractor';
import ToolsCarousel from '@/components/sections/tools/ToolsCarousel';
import FaqPanels from '@/components/ui/FaqPanels';
import Gap from '@/components/ui/Gap';
import SectionInfo from '@/components/ui/sections/SectionInfo';
import SectionSteps from '@/components/ui/sections/SectionSteps';
import SectionDemo from '@/components/ui/sections/SectionDemo';
import SectionTimeline from '@/components/ui/sections/SectionTimeline';
import Link from 'next/link';
import Wrapper from '@/components/ui/Wrapper';
import ToolEditorLayout from '@/components/ui/ToolEditorLayout';
import { toAbsoluteUrl, siteUrl } from '@/utils/absoluteUrl';
import { getToolAlternates } from '@/lib/i18n/pages/tool-meta';
import type { Metadata } from 'next';
import AdSense from '@/components/ui/AdSense';
import {
  RiUploadLine,
  RiPaletteLine,
  RiFileCopyLine,
  RiShieldCheckLine,
  RiGlobalLine,
  RiImageLine,
  RiSearchEyeLine,
  RiEraserLine,
  RiCropLine,
  RiZoomInLine,
  RiGroupLine,
  RiStarLine,
  RiContrastLine,
  RiBarChartLine,
  RiAlertLine,
  RiErrorWarningLine,
  RiFileWarningLine,
  RiFileImageLine,
  RiBrushLine,
  RiLayoutMasonryLine,
  RiPaintBrushLine,
} from 'react-icons/ri';

const LOCALE = 'pt' as const;
const TOOL_KEY = 'paletteExtractor' as const;

export const metadata: Metadata = {
  title: 'Extrator de cores de imagem gratuito online – paleta a partir de uma foto',
  description: 'Extrator de cores gratuito online. Importe uma foto ou logótipo e obtenha uma paleta de até 12 cores dominantes com códigos HEX e RGB. Sem registo.',
  alternates: getToolAlternates(TOOL_KEY, LOCALE),
  openGraph: {
    title: 'Extrator de cores de imagem gratuito online',
    description: 'Importe uma foto ou logótipo e obtenha uma paleta de cores dominantes com códigos HEX e RGB.',
    url: toAbsoluteUrl('/pt/ferramentas/extrator-de-cores-de-imagem'),
    type: 'website',
    images: [{ url: toAbsoluteUrl('/assets/tools/narzedzia-generator-palety-kolorow-z-obrazu.webp'), width: 1200, height: 630 }],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Extrator de cores de imagem online',
  alternateName: ['Paleta de cores a partir de uma imagem', 'Extrator de cores dominantes', 'Gerador de paleta a partir de uma foto'],
  url: toAbsoluteUrl('/pt/ferramentas/extrator-de-cores-de-imagem'),
  applicationCategory: 'DesignApplication',
  applicationSubCategory: 'ColorTool',
  operatingSystem: 'Any',
  description: 'Extrator de cores gratuito. Importe uma foto ou logótipo e obtenha uma paleta de até 12 cores dominantes (HEX e RGB). Execução local.',
  featureList: ['Extração de até 12 cores dominantes', 'Códigos HEX e RGB', 'Cópia com um clique', 'Suporte PNG, JPG/JPEG, SVG', 'Execução local no navegador', 'Sem registo e sem limite'],
  inLanguage: 'pt',
  isAccessibleForFree: true,
  offers: { '@type': 'Offer', price: 0, priceCurrency: 'EUR' },
  publisher: { '@type': 'Organization', name: 'Arteon Agency', url: siteUrl },
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Como extrair as cores de uma imagem',
  description: 'Importe uma imagem e obtenha uma paleta de cores dominantes com códigos HEX copiáveis.',
  url: toAbsoluteUrl('/pt/ferramentas/extrator-de-cores-de-imagem'),
  step: [
    { '@type': 'HowToStep', name: 'Importar uma imagem', text: 'Arraste e largue uma imagem ou selecione um ficheiro PNG, JPG ou SVG.' },
    { '@type': 'HowToStep', name: 'Ver a paleta', text: 'A ferramenta extrai automaticamente as cores dominantes da imagem.' },
    { '@type': 'HowToStep', name: 'Copiar os códigos', text: 'Clique em «Copiar» para copiar o código HEX de uma cor para a área de transferência.' },
  ],
  publisher: { '@type': 'Organization', name: 'Arteon Agency', url: siteUrl },
};

const faqItems = [
  {
    question: 'Quantas cores a ferramenta extrai?',
    answer: 'A ferramenta extrai até 12 cores dominantes da imagem. O número exato depende da complexidade da imagem – uma foto com poucas cores gerará menos resultados.',
    answerSchemaText: 'Até 12 cores dominantes, conforme a complexidade da imagem.',
  },
  {
    question: 'Que formatos de imagem são suportados?',
    answer: 'A ferramenta suporta os formatos PNG, JPG/JPEG e SVG. Os outros formatos não são suportados.',
    answerSchemaText: 'PNG, JPG/JPEG e SVG.',
  },
  {
    question: 'Como funciona a extração de cores?',
    answer:
      'A ferramenta analisa os píxeis da imagem e utiliza um algoritmo de agrupamento para identificar as cores dominantes. O resultado é uma paleta que representa as cores mais presentes na imagem.',
    answerSchemaText: 'Análise dos píxeis e agrupamento para identificar as cores dominantes.',
  },
  {
    question: 'As minhas imagens são enviadas para um servidor?',
    answer: 'Não. Todo o processamento é feito localmente no seu navegador. As suas imagens nunca saem do seu computador.',
    answerSchemaText: 'Não. Processamento local no navegador.',
  },
  {
    question: 'Para que servem as cores extraídas?',
    answer:
      'As cores extraídas podem servir de base para uma paleta de marca, um esquema de cores para um site, publicações nas redes sociais ou qualquer projeto de design. Copie os códigos HEX e utilize-os em CSS, Figma, Adobe ou outras ferramentas.',
    answerSchemaText: 'Paleta de marca, esquema de cores web, redes sociais, design.',
  },
];

export default function PaletteExtractorPage() {
  return (
    <>
      <Script id="ld-json-palette-extractor-pt" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Script id="ld-json-palette-howto-pt" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />

      <HeroBanner
        title="Extrator de cores de imagem"
        description="Importe uma foto ou logótipo e a ferramenta extrairá as cores dominantes. Copie os códigos HEX com um clique – ideal para UI, branding e redes sociais."
        overlay="black"
        backgroundImage="/assets/tools/narzedzia-generator-palety-kolorow-z-obrazu.webp"
      />

      <Breadcrumbs second={{ href: '/pt/ferramentas', label: 'Ferramentas' }} third={{ href: '/pt/ferramentas/extrator-de-cores-de-imagem', label: 'Extrator de cores' }} includeJsonLd locale="pt" />

      <ToolEditorLayout>
        <AdSense variant="tool-banner" className="my-3" />
        <PaletteExtractor />
      </ToolEditorLayout>

      <Wrapper>
        <Gap variant="line" />

        <SectionInfo title="Extrair as cores dominantes de uma imagem">
          <p className="text-mid">
            O extrator de cores analisa a sua imagem e identifica as cores dominantes. O resultado é uma paleta de cores com códigos HEX copiáveis com um clique – pronta a ser utilizada nos seus
            projetos de design, no seu site ou nas suas publicações nas redes sociais.
          </p>
          <p className="text-mid mt-3">
            A ferramenta é particularmente útil para criar uma paleta de marca a partir de um logótipo, encontrar as cores dominantes de uma foto para um esquema de cores coerente, ou simplesmente
            identificar as cores de uma imagem que gosta.
          </p>
        </SectionInfo>

        <Gap size="sm" />

        <SectionSteps
          title="Como usar o extrator"
          description="A extração demora apenas alguns segundos:"
          grid="three"
          items={[
            { icon: <RiUploadLine className="h-6 w-6" />, title: '1. Importar uma imagem', description: 'Arraste e largue uma imagem ou selecione um ficheiro PNG, JPG ou SVG.' },
            { icon: <RiPaletteLine className="h-6 w-6" />, title: '2. Ver a paleta', description: 'A ferramenta extrai automaticamente as cores dominantes da imagem.' },
            { icon: <RiFileCopyLine className="h-6 w-6" />, title: '3. Copiar os códigos', description: 'Clique em «Copiar» para copiar o código HEX para a área de transferência.' },
          ]}
        />

        <Gap variant="line" />

        <SectionDemo
          title="Como se apresenta uma paleta de cores extraída?"
          demo={
            <div className="space-y-3">
              <div className="grid grid-cols-4 gap-2">
                {['#2C5F2D', '#97BC62', '#DAA520', '#4169E1', '#8B4513', '#DC143C', '#2F4F4F', '#FF6347'].map((color) => (
                  <div key={color} className="flex flex-col items-center gap-1">
                    <div className="h-10 w-full rounded-lg border border-neutral-200" style={{ backgroundColor: color }} />
                    <span className="text-mid text-xs!">{color}</span>
                  </div>
                ))}
              </div>
              <p className="text-light text-xs!">Exemplo de cores extraídas de uma imagem de natureza</p>
            </div>
          }
        >
          <p className="text-mid mb-4">
            Após a importação de uma imagem, o extrator apresenta uma lista de cores dominantes ordenadas da mais à menos presente. Cada cor é acompanhada do seu código HEX e do seu valor RGB –
            prontos a ser colados em CSS, Figma ou qualquer aplicação gráfica.
          </p>
          <p className="text-mid">
            O número de cores extraídas depende do conteúdo da imagem. Uma foto de paisagem produzirá uma paleta mais rica (8–12 cores), enquanto um logótipo simples a duas cores dará menos elementos.
          </p>
        </SectionDemo>

        <Gap variant="line" />

        <SectionSteps
          title="Que imagens dão os melhores resultados?"
          description="A qualidade da paleta extraída depende do tipo de imagem importada:"
          grid="two"
          items={[
            {
              icon: <RiImageLine className="h-6 w-6" />,
              title: 'Logótipos e gráficos com paleta limitada',
              description: 'As imagens com poucas cores claramente separadas dão os resultados mais precisos: o extrator identifica cada cor com exatidão.',
            },
            {
              icon: <RiSearchEyeLine className="h-6 w-6" />,
              title: 'Fotos com um tema claro',
              description: 'As fotos de produtos, interiores ou paisagens também produzem paletas úteis, mas contêm mais nuances, incluindo cores de sombras e reflexos.',
            },
            {
              icon: <RiEraserLine className="h-6 w-6" />,
              title: 'Ficheiros PNG com fundo transparente',
              description: 'Os píxeis transparentes são automaticamente ignorados durante a análise. Para extrair as cores apenas do objeto (ex.: um logótipo), utilize um PNG sem fundo.',
            },
            {
              icon: <RiCropLine className="h-6 w-6" />,
              title: 'Imagens sem grande fundo uniforme',
              description: 'Quando o fundo ocupa a maior parte da imagem, a sua cor domina os resultados. Antes de importar, recorte a imagem na zona de interesse.',
            },
          ]}
        />

        <Gap variant="line" />

        <SectionTimeline
          title="Como funciona a extração de cores?"
          description="Após a importação do ficheiro, a ferramenta efetua várias etapas em segundo plano: toda a análise é feita localmente no navegador:"
          items={[
            {
              icon: <RiZoomInLine className="h-5 w-5" />,
              title: 'Redimensionamento da imagem',
              description: 'A imagem é redimensionada para cerca de 240 píxeis de largura. Isto acelera a análise mesmo para fotografias muito grandes, sem afetar a precisão da deteção das cores.',
            },
            {
              icon: <RiGroupLine className="h-5 w-5" />,
              title: 'Agrupamento das cores semelhantes',
              description: 'Cada píxel é analisado e as nuances semelhantes são agrupadas. Dois azuis quase idênticos tornam-se uma única cor na paleta.',
            },
            {
              icon: <RiStarLine className="h-5 w-5" />,
              title: 'Seleção das cores dominantes',
              description: 'O algoritmo escolhe as cores que cobrem a maior superfície da imagem. O resultado é uma lista de até 12 cores ordenadas da mais à menos dominante.',
            },
            {
              icon: <RiContrastLine className="h-5 w-5" />,
              title: 'Omissão dos píxeis transparentes',
              description:
                'Nos ficheiros PNG com fundo transparente, essas zonas não são incluídas na análise: o extrator examina apenas as cores visíveis. Todo o processo demora geralmente menos de um segundo.',
            },
          ]}
        />

        <Gap variant="line" />

        <SectionSteps
          title="Resolução de problemas do extrator de cores"
          grid="two"
          items={[
            {
              icon: <RiBarChartLine className="h-6 w-6" />,
              title: 'O extrator devolveu menos de 12 cores',
              description:
                'O número de cores extraídas depende do conteúdo da imagem. Um logótipo simples a duas cores dará 2-3 resultados: é o comportamento normal. A ferramenta não adiciona cores artificiais; extrai apenas as que aparecem efetivamente na imagem.',
            },
            {
              icon: <RiAlertLine className="h-6 w-6" />,
              title: 'Apareceram cores inesperadas',
              description:
                'Pode tratar-se de cores de sombras, gradientes ou reflexos: os píxeis nessas zonas têm cores diferentes do objeto visível à primeira vista. Utilizar uma imagem com cores mais uniformes ou recortar as zonas escuras melhorará os resultados.',
            },
            {
              icon: <RiErrorWarningLine className="h-6 w-6" />,
              title: 'A cor de fundo domina os resultados',
              description:
                'Quando o fundo cobre mais superfície do que o objeto, a sua cor aparecerá em primeiro na lista. Solução: utilize um PNG com fundo transparente ou recorte a imagem para que o objeto ocupe mais espaço.',
            },
            {
              icon: <RiFileWarningLine className="h-6 w-6" />,
              title: 'O ficheiro não é aceite',
              description: 'A ferramenta aceita apenas os formatos PNG, JPG e SVG. Os ficheiros noutros formatos (GIF, TIFF, HEIC, PDF) necessitam de conversão prévia.',
            },
          ]}
        />

        <Gap variant="line" />

        <SectionSteps
          title="O que torna este extrator especial?"
          grid="two"
          items={[
            {
              icon: <RiShieldCheckLine className="h-6 w-6" />,
              title: 'Análise local: a imagem nunca sai do seu computador',
              description: 'Toda a extração de cores é feita no navegador. A imagem não é enviada para nenhum servidor e os dados são eliminados da memória ao fechar a página.',
            },
            {
              icon: <RiPaletteLine className="h-6 w-6" />,
              title: 'Até 12 cores dominantes de uma imagem',
              description: 'A ferramenta extrai até 12 cores ordenadas por dominância, suficientes para construir uma paleta completa para um projeto.',
            },
            {
              icon: <RiFileImageLine className="h-6 w-6" />,
              title: 'Três formatos de imagem populares',
              description: 'Formatos suportados: PNG, JPG e SVG. Os ficheiros PNG com fundo transparente dão os melhores resultados porque os píxeis transparentes são automaticamente ignorados.',
            },
            {
              icon: <RiGlobalLine className="h-6 w-6" />,
              title: 'Códigos HEX e RGB prontos a colar',
              description: 'Cada cor extraída é acompanhada do seu código HEX (ex.: #2C5F2D) e do seu valor RGB. O código pode ser copiado e colado diretamente em CSS, Figma ou Photoshop.',
            },
          ]}
        />

        <Gap variant="line" />

        <SectionSteps
          title="Onde utilizar as cores extraídas de uma imagem?"
          grid="two"
          items={[
            {
              icon: <RiBrushLine className="h-6 w-6" />,
              title: 'Construção de identidade visual',
              description: 'Importe uma foto que capte a atmosfera da marca (uma paisagem, um interior, uma foto de produto) e extraia cores como ponto de partida para uma paleta de branding.',
            },
            {
              icon: <RiLayoutMasonryLine className="h-6 w-6" />,
              title: 'Visuais para redes sociais',
              description: 'Extraia as cores de uma foto de produto e utilize-as como fundos ou acentos. As publicações baseadas nas cores de uma mesma fonte parecem coerentes no perfil.',
            },
            {
              icon: <RiPaintBrushLine className="h-6 w-6" />,
              title: 'Harmonizar as cores com um site',
              description: 'Extraia as cores do logótipo e utilize-as como paleta do site: cor principal, cor de destaque, tons de fundo. Os códigos HEX colam-se diretamente no CSS.',
            },
            {
              icon: <RiSearchEyeLine className="h-6 w-6" />,
              title: 'Enriquecer uma paleta existente',
              description: (
                <p>
                  Uma cor de base extraída pode ser utilizada no <Link href="/pt/ferramentas/gerador-de-paletas-de-cores">gerador de paletas de cores</Link> para criar um conjunto completo de cores
                  harmoniosas baseado na teoria das cores.
                </p>
              ),
            },
          ]}
        />

        <Gap variant="line" />

        <FaqPanels
          pageUrl={toAbsoluteUrl('/pt/ferramentas/extrator-de-cores-de-imagem')}
          title="Perguntas frequentes sobre o extrator de cores"
          openByDefault={1}
          items={[
            ...faqItems,
            {
              question: 'Posso copiar todas as cores da paleta de uma só vez?',
              answer:
                'Atualmente, a ferramenta permite copiar as cores uma a uma – cada cor dispõe de um botão que copia o código HEX para a área de transferência. O código copiado pode ser colado diretamente no Figma, Photoshop, CSS ou qualquer outra aplicação.',
              answerSchemaText: 'Atualmente, as cores copiam-se uma a uma através do botão junto a cada cor.',
            },
          ]}
        />

        <Gap variant="line" />

        <ToolsCarousel title="Descubra outras ferramentas" />

        <Gap size="sm" />
      </Wrapper>
    </>
  );
}
