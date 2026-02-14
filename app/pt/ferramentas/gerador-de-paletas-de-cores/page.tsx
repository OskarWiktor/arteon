import Script from 'next/script';
import HeroBanner from '@/components/sections/HeroBanner';
import Breadcrumbs from '@/components/sections/BreadCrumbs';
import ColorPaletteGenerator from '@/components/sections/tools/ColorPaletteGenerator';
import ToolsCarousel from '@/components/sections/tools/ToolsCarousel';
import FaqPanels from '@/components/ui/FaqPanels';
import Gap from '@/components/ui/Gap';
import SectionInfo from '@/components/ui/sections/SectionInfo';
import SectionSteps from '@/components/ui/sections/SectionSteps';
import SectionDemo from '@/components/ui/sections/SectionDemo';
import Wrapper from '@/components/ui/Wrapper';
import ToolEditorLayout from '@/components/ui/ToolEditorLayout';
import { toAbsoluteUrl, siteUrl } from '@/utils/absoluteUrl';
import { getToolAlternates } from '@/lib/i18n/pages/tool-meta';
import type { Metadata } from 'next';
import AdSense from '@/components/ui/AdSense';
import {
  RiPaletteLine,
  RiFileCopyLine,
  RiContrastLine,
  RiMagicLine,
  RiInfinityLine,
  RiColorFilterLine,
  RiGlobalLine,
  RiSmartphoneLine,
  RiPaintBrushLine,
  RiSettings3Line,
  RiRefreshLine,
  RiSearchLine,
  RiImageLine,
  RiSlideshowLine,
  RiBrushLine,
  RiErrorWarningLine,
  RiCodeLine,
} from 'react-icons/ri';

const LOCALE = 'pt' as const;
const TOOL_KEY = 'colorPalette' as const;

export const metadata: Metadata = {
  title: 'Gerador de paletas de cores gratuito online – 9 paletas a partir de uma cor',
  description: 'Gerador de paletas de cores gratuito. Escolha uma cor e gere 9 paletas: monocromática, complementar, triádica, pastel, escura e mais. Códigos HEX copiáveis com um clique.',
  alternates: getToolAlternates(TOOL_KEY, LOCALE),
  openGraph: {
    title: 'Gerador de paletas de cores gratuito online',
    description: 'Escolha uma cor e gere 9 paletas: monocromática, complementar, triádica e mais.',
    url: toAbsoluteUrl('/pt/ferramentas/gerador-de-paletas-de-cores'),
    type: 'website',
    images: [{ url: toAbsoluteUrl('/assets/tools/narzedzia-generator-palet-kolorow-online.webp'), width: 1200, height: 630 }],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Gerador de paletas de cores online – 9 paletas a partir de uma cor',
  alternateName: ['Gerador de paletas online', 'Esquemas de cores a partir de uma cor', 'Gerador de cores complementares', 'Paleta monocromática'],
  url: toAbsoluteUrl('/pt/ferramentas/gerador-de-paletas-de-cores'),
  applicationCategory: 'DesignApplication',
  applicationSubCategory: 'ColorTool',
  operatingSystem: 'Any',
  description: 'Gere paletas de cores a partir de uma única cor de base. 9 tipos: monocromática, análoga, complementar, triádica, complementar dividida, pastel, escura, tonal e minimalista.',
  featureList: [
    '9 tipos de paletas a partir de uma cor de base',
    'Monocromática, análoga, complementar, triádica, complementar dividida',
    'Paletas pastel, escura, tonal e minimalista',
    'Códigos HEX copiáveis com um clique',
    'Cálculos baseados no espaço cromático HSL',
    'Execução local no navegador',
  ],
  inLanguage: 'pt',
  isAccessibleForFree: true,
  offers: { '@type': 'Offer', price: 0, priceCurrency: 'EUR' },
  publisher: { '@type': 'Organization', name: 'Arteon Agency', url: siteUrl },
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Como gerar paletas de cores a partir de uma cor',
  description: 'Escolha uma cor de base e obtenha 9 paletas harmoniosas com códigos HEX copiáveis.',
  url: toAbsoluteUrl('/pt/ferramentas/gerador-de-paletas-de-cores'),
  step: [
    { '@type': 'HowToStep', name: 'Escolher a cor de base', text: 'Introduza um código HEX ou utilize o seletor de cores para definir a cor de base.' },
    { '@type': 'HowToStep', name: 'Ver as paletas', text: 'A ferramenta gera automaticamente 9 paletas com várias cores harmoniosas cada.' },
    { '@type': 'HowToStep', name: 'Copiar os códigos HEX', text: 'Clique numa cor para copiar o código HEX para a área de transferência.' },
  ],
  publisher: { '@type': 'Organization', name: 'Arteon Agency', url: siteUrl },
};

const faqItems = [
  {
    question: 'Quantas paletas a ferramenta gera?',
    answer:
      'A ferramenta gera 9 paletas diferentes a partir de uma única cor de base: monocromática, análoga, complementar, triádica, complementar dividida, pastel, escura, tonal (Material Design) e minimalista (estilo Apple).',
    answerSchemaText: '9 paletas: monocromática, análoga, complementar, triádica, complementar dividida, pastel, escura, tonal, minimalista.',
  },
  {
    question: 'O que é uma paleta monocromática?',
    answer:
      'Uma paleta monocromática é composta por variações de uma única tonalidade – todas as cores partilham a mesma tonalidade (H no modelo HSL) e variam apenas em luminosidade e saturação. Estas paletas são harmoniosas e particularmente adequadas para designs profissionais.',
    answerSchemaText: 'Uma paleta de uma única tonalidade com variações de luminosidade e saturação.',
  },
  {
    question: 'O que é uma paleta complementar?',
    answer:
      'Uma paleta complementar combina a cor de base com o seu complemento – a cor oposta no círculo cromático (desfasamento de 180°). Este contraste é um dos princípios fundamentais da teoria das cores e produz um efeito vivo e dinâmico.',
    answerSchemaText: 'A cor de base e a cor oposta no círculo cromático (180°).',
  },
  {
    question: 'Posso copiar as cores geradas?',
    answer: 'Sim. Clique numa cor na paleta para copiar o seu código HEX para a área de transferência. Utilize-o diretamente em CSS, Figma, Adobe ou outras ferramentas de design.',
    answerSchemaText: 'Sim, clique numa cor para copiar o código HEX.',
  },
  {
    question: 'O que é o espaço cromático HSL?',
    answer:
      'HSL significa Hue (tonalidade), Saturation (saturação) e Lightness (luminosidade). Contrariamente ao RGB, o HSL descreve as cores tal como as percecionamos: a tonalidade determina a cor de base, a saturação a intensidade e a luminosidade indica se a cor é clara ou escura. Todas as paletas desta ferramenta baseiam-se em cálculos HSL.',
    answerSchemaText: 'HSL = Tonalidade, Saturação, Luminosidade. Um modelo de cor baseado na perceção humana.',
  },
  {
    question: 'Qual a diferença entre triádica e complementar dividida?',
    answer:
      'Uma paleta triádica utiliza três cores equidistantes no círculo cromático (120° de intervalo). Uma paleta complementar dividida utiliza, em vez do complemento direto, os dois vizinhos do complemento – o que produz um contraste mais subtil.',
    answerSchemaText: 'Triádica: 3 cores a 120°. Complementar dividida: cor de base + 2 vizinhos do complemento.',
  },
];

export default function ColorPalettePage() {
  return (
    <>
      <Script id="ld-json-color-palette-pt" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Script id="ld-json-palette-howto-pt" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />

      <HeroBanner
        title="Gerador de paletas de cores"
        description="Escolha uma cor de base e gere 9 paletas harmoniosas. Monocromática, complementar, triádica, pastel, escura e mais – todos os cálculos são executados localmente no seu navegador."
        overlay="black"
        backgroundImage="/assets/tools/narzedzia-generator-palet-kolorow-online.webp"
      />

      <Breadcrumbs second={{ href: '/pt/ferramentas', label: 'Ferramentas' }} third={{ href: '/pt/ferramentas/gerador-de-paletas-de-cores', label: 'Paletas de cores' }} includeJsonLd locale="pt" />

      <ToolEditorLayout>
        <AdSense variant="tool-banner" className="my-3" />
        <ColorPaletteGenerator />
      </ToolEditorLayout>

      <Wrapper>
        <Gap variant="line" />

        <SectionInfo title="Gerar paletas a partir de uma única cor">
          <p className="text-mid">
            O gerador de paletas cria 9 paletas diferentes a partir de uma única cor de base, apoiando-se na teoria das cores. Cada paleta tem uma composição diferente – das variações monocromáticas
            às cores complementares contrastantes.
          </p>
          <p className="text-mid mt-3">
            Todos os cálculos baseiam-se no espaço cromático HSL (Tonalidade, Saturação, Luminosidade). A tonalidade determina a cor de base, a saturação a intensidade e a luminosidade o caráter claro
            ou escuro. Este modelo corresponde à perceção humana das cores e presta-se perfeitamente à geração de paletas.
          </p>
        </SectionInfo>

        <Gap size="sm" />

        <SectionSteps
          title="Como usar o gerador"
          description="A geração demora apenas alguns segundos:"
          grid="three"
          items={[
            { icon: <RiPaletteLine className="h-6 w-6" />, title: '1. Escolher a cor de base', description: 'Introduza um código HEX ou utilize o seletor de cores.' },
            { icon: <RiColorFilterLine className="h-6 w-6" />, title: '2. Ver as paletas', description: 'A ferramenta gera automaticamente 9 paletas com várias cores harmoniosas.' },
            {
              icon: <RiFileCopyLine className="h-6 w-6" />,
              title: '3. Copiar os códigos HEX',
              description: 'Clique numa cor para copiar o seu código HEX. Utilize-o em CSS, Figma ou outras ferramentas.',
            },
          ]}
        />

        <Gap variant="line" />

        <SectionSteps
          title="9 tipos de paletas – qual convém ao seu projeto?"
          description="Cada paleta tem um caráter diferente:"
          grid="three"
          items={[
            { icon: <RiPaletteLine className="h-6 w-6" />, title: 'Monocromática', description: 'Variações de uma tonalidade em luminosidade e saturação. Elegante, harmoniosa, profissional.' },
            { icon: <RiColorFilterLine className="h-6 w-6" />, title: 'Análoga', description: 'Cores vizinhas no círculo cromático. Transição suave e natural.' },
            { icon: <RiContrastLine className="h-6 w-6" />, title: 'Complementar', description: 'Cor de base + cor oposta (180°). Contraste máximo para designs dinâmicos.' },
            { icon: <RiMagicLine className="h-6 w-6" />, title: 'Triádica', description: 'Três cores a 120° de intervalo. Equilibrada com forte contraste visual.' },
            { icon: <RiSearchLine className="h-6 w-6" />, title: 'Complementar dividida', description: 'Cor de base + os dois vizinhos do complemento. Contraste mais subtil.' },
            { icon: <RiPaintBrushLine className="h-6 w-6" />, title: 'Pastel', description: 'Luminosidade elevada, saturação reduzida. Suave, arejada – ideal para designs amigáveis.' },
            { icon: <RiSettings3Line className="h-6 w-6" />, title: 'Escura', description: 'Luminosidade baixa, tons profundos. Profissional – adequada ao modo escuro e marcas premium.' },
            {
              icon: <RiRefreshLine className="h-6 w-6" />,
              title: 'Tonal (Material Design)',
              description: 'Luminosidade graduada numa mesma tonalidade. Semelhante ao sistema de cores do Google Material Design.',
            },
            { icon: <RiInfinityLine className="h-6 w-6" />, title: 'Minimalista (Apple)', description: 'Base neutra com acento colorido. Limpa, moderna – inspirada no estilo Apple.' },
          ]}
        />

        <Gap variant="line" />

        <SectionDemo
          title="Como funciona o espaço cromático HSL"
          demo={
            <div className="space-y-3">
              <div className="rounded-lg border border-neutral-200 bg-white p-3">
                <p className="text-dark text-sm! font-medium">Exemplo: HSL(210, 80%, 50%)</p>
                <div className="mt-2 flex items-center gap-3">
                  <div className="h-10 w-10 rounded" style={{ backgroundColor: 'hsl(210, 80%, 50%)' }} />
                  <div className="text-mid text-sm!">
                    <p>H = 210° (tonalidade azul)</p>
                    <p>S = 80% (intensa)</p>
                    <p>L = 50% (luminosidade média)</p>
                  </div>
                </div>
              </div>
              <div className="rounded-lg border border-neutral-200 bg-white p-3">
                <p className="text-dark text-sm! font-medium">Mesma tonalidade, luminosidade diferente</p>
                <div className="mt-2 flex gap-1">
                  <div className="h-8 flex-1 rounded" style={{ backgroundColor: 'hsl(210, 80%, 90%)' }} />
                  <div className="h-8 flex-1 rounded" style={{ backgroundColor: 'hsl(210, 80%, 70%)' }} />
                  <div className="h-8 flex-1 rounded" style={{ backgroundColor: 'hsl(210, 80%, 50%)' }} />
                  <div className="h-8 flex-1 rounded" style={{ backgroundColor: 'hsl(210, 80%, 30%)' }} />
                  <div className="h-8 flex-1 rounded" style={{ backgroundColor: 'hsl(210, 80%, 10%)' }} />
                </div>
                <p className="text-light mt-1 text-xs!">L: 90% → 70% → 50% → 30% → 10%</p>
              </div>
            </div>
          }
        >
          <p className="text-mid">
            Todas as paletas desta ferramenta baseiam-se no espaço cromático HSL (Tonalidade, Saturação, Luminosidade). Contrariamente ao HEX ou RGB, o HSL descreve as cores tal como as percecionamos:
          </p>
          <ul className="text-mid mt-3 list-disc space-y-2 pl-5">
            <li>
              <strong>Hue (H)</strong> – a tonalidade no círculo cromático (0°–360°). 0° = vermelho, 120° = verde, 240° = azul.
            </li>
            <li>
              <strong>Saturation (S)</strong> – a intensidade. 0% = cinzento, 100% = cor plenamente saturada.
            </li>
            <li>
              <strong>Lightness (L)</strong> – a luminosidade. 0% = preto, 50% = cor normal, 100% = branco.
            </li>
          </ul>
          <p className="text-mid mt-3">
            Ao modificar seletivamente estes valores, obtêm-se paletas harmoniosas. As paletas monocromáticas variam apenas L, as análogas apenas H e as complementares invertem H em 180°.
          </p>
        </SectionDemo>

        <Gap variant="line" />

        <SectionSteps
          title="Onde utilizar as paletas geradas?"
          grid="two"
          items={[
            {
              icon: <RiBrushLine className="h-6 w-6" />,
              title: 'Identidade visual de marca',
              description: 'Selecione cores complementares para um logótipo existente ou construa uma paleta de branding do zero, para cartões de visita, papelaria e suportes de marketing.',
            },
            {
              icon: <RiGlobalLine className="h-6 w-6" />,
              title: 'Sites',
              description: 'Defina a cor principal, a cor de destaque e os tons de fundo. Os códigos HEX copiados colam-se diretamente nas folhas de estilo CSS ou na configuração de temas.',
            },
            {
              icon: <RiSmartphoneLine className="h-6 w-6" />,
              title: 'Interfaces de aplicações',
              description: 'A paleta tonal fornece variantes de luminosidade de uma cor: mais claras para os fundos, mais escuras para o texto, intermédias para bordas e estados interativos.',
            },
            {
              icon: <RiImageLine className="h-6 w-6" />,
              title: 'Visuais para redes sociais',
              description: 'Cores coerentes para publicações, stories e capas de perfil. As paletas análogas ou pastel funcionam bem para um estilo uniforme e reconhecível.',
            },
            {
              icon: <RiSlideshowLine className="h-6 w-6" />,
              title: 'Apresentações e documentos',
              description: 'Conjuntos de cores harmoniosos para diapositivos, gráficos e infografias. As paletas monocromáticas ou minimalistas mantêm a ordem visual.',
            },
          ]}
        />

        <Gap variant="line" />

        <SectionSteps
          title="Resolução de problemas do gerador de paletas"
          grid="two"
          items={[
            {
              icon: <RiRefreshLine className="h-6 w-6" />,
              title: 'As paletas não mudam após introduzir uma cor',
              description:
                'Simplesmente digitar um código HEX não gera automaticamente as paletas: deve confirmar a alteração com o botão Atualizar cor. Só após a confirmação é que a ferramenta recalcula os 9 esquemas.',
            },
            {
              icon: <RiErrorWarningLine className="h-6 w-6" />,
              title: 'Mensagem de formato inválido',
              description: 'O gerador aceita apenas o formato HEX com # no início, por ex. #FF5500. Os formatos sem # (por ex. FF5500) ou em notação RGB (por ex. rgb(255,85,0)) não são suportados.',
            },
            {
              icon: <RiCodeLine className="h-6 w-6" />,
              title: 'Formato HEX curto e completo',
              description: 'Ambos os formatos são suportados: completo #RRGGBB (por ex. #FF5500) e curto #RGB (por ex. #F50). O gerador reconhece automaticamente ambos e trata-os de forma idêntica.',
            },
          ]}
        />

        <Gap variant="line" />

        <FaqPanels pageUrl={toAbsoluteUrl('/pt/ferramentas/gerador-de-paletas-de-cores')} title="Perguntas frequentes sobre o gerador de paletas" openByDefault={1} items={faqItems} />

        <Gap variant="line" />

        <ToolsCarousel title="Descubra outras ferramentas" />

        <Gap size="sm" />
      </Wrapper>
    </>
  );
}
