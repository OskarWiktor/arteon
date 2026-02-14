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
import { getToolAlternates } from '@/lib/i18n/pages/tool-meta';
import type { Metadata } from 'next';
import Script from 'next/script';
import AdSense from '@/components/ui/AdSense';
import {
  RiFileTextLine,
  RiBarChartLine,
  RiFileCopyLine,
  RiText,
  RiParagraph,
  RiTimeLine,
  RiEditLine,
  RiBloggerLine,
  RiShoppingBagLine,
  RiSearchLine,
  RiInfinityLine,
  RiCheckboxCircleLine,
  RiTimerLine,
  RiGraduationCapLine,
  RiTranslate2,
  RiUserLine,
  RiSpaceShipLine,
  RiHashtag,
} from 'react-icons/ri';

const LOCALE = 'pt' as const;
const TOOL_KEY = 'wordCounter' as const;

export const metadata: Metadata = {
  title: 'Contador de palavras e caracteres gratuito online – verificar comprimento do texto',
  description:
    'Contador de palavras e caracteres gratuito online. Conte palavras, caracteres, parágrafos e tempo de leitura. Verifique o comprimento ideal para SEO – artigo de blog, página de serviço, ficha de produto. Sem registo.',
  alternates: getToolAlternates(TOOL_KEY, LOCALE),
  openGraph: {
    title: 'Contador de palavras e caracteres gratuito online',
    description: 'Conte palavras, caracteres, parágrafos e tempo de leitura. Verifique o comprimento ideal para SEO. Sem registo.',
    url: toAbsoluteUrl('/pt/ferramentas/contador-de-palavras-e-caracteres'),
    type: 'website',
    images: [{ url: toAbsoluteUrl('/assets/tools/narzedzia-licznik-slow-i-znakow.webp'), width: 1200, height: 630 }],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Contador de palavras e caracteres gratuito online',
  alternateName: ['Contador de palavras online', 'Contador de caracteres', 'Verificador de comprimento de texto SEO', 'Contador de parágrafos'],
  url: toAbsoluteUrl('/pt/ferramentas/contador-de-palavras-e-caracteres'),
  applicationCategory: 'DeveloperApplication',
  applicationSubCategory: 'TextAnalysis',
  operatingSystem: 'Any',
  description: 'Contador de palavras e caracteres com avaliação do comprimento. Verifique se o comprimento é adequado para uma página inicial, artigo de blog ou ficha de produto.',
  featureList: [
    'Contador de palavras e caracteres',
    'Caracteres com e sem espaços',
    'Contador de parágrafos',
    'Estimativa do tempo de leitura',
    'Avaliação do comprimento por tipo de página',
    'Cópia do relatório',
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
  name: 'Como verificar o comprimento de texto para SEO',
  description: 'Cole o seu texto, selecione o tipo de página e verifique se o comprimento é o ideal.',
  url: toAbsoluteUrl('/pt/ferramentas/contador-de-palavras-e-caracteres'),
  step: [
    { '@type': 'HowToStep', name: 'Colar o texto', text: 'Cole ou introduza o texto que pretende analisar.' },
    { '@type': 'HowToStep', name: 'Selecionar o tipo de página', text: 'Escolha o tipo de página (artigo de blog, página de serviço, página inicial, etc.).' },
    { '@type': 'HowToStep', name: 'Verificar os resultados', text: 'Consulte o número de palavras, caracteres, parágrafos, tempo de leitura e avaliação do comprimento.' },
  ],
  publisher: { '@type': 'Organization', name: 'Arteon Agency', url: siteUrl },
};

const faqItems = [
  {
    question: 'Qual é o comprimento ideal de um artigo de blog?',
    answer:
      'Para SEO, os artigos de blog com bom desempenho contam geralmente entre 1 500 e 3 000 palavras. Os artigos mais longos e aprofundados tendem a classificar-se melhor nos resultados de pesquisa, desde que o conteúdo seja de qualidade e responda à intenção de pesquisa.',
    answerSchemaText: 'Geralmente 1 500–3 000 palavras para SEO. O conteúdo de qualidade é essencial.',
  },
  {
    question: 'Qual é o comprimento ideal de uma página de serviço?',
    answer:
      'Uma página de serviço deve contar no mínimo 800–1 500 palavras para fornecer informação suficiente aos utilizadores e aos motores de pesquisa. O conteúdo deve descrever claramente o serviço, os seus benefícios e incluir um apelo à ação.',
    answerSchemaText: 'Mínimo 800–1 500 palavras. Descrição clara, benefícios e apelo à ação.',
  },
  {
    question: 'Como é calculado o tempo de leitura?',
    answer:
      'O tempo de leitura é estimado com base em 200–250 palavras por minuto, o que corresponde à velocidade média de leitura de um adulto. O resultado é uma aproximação – a velocidade real depende da complexidade do texto e do leitor.',
    answerSchemaText: 'Baseado em 200–250 palavras/minuto (velocidade média de leitura).',
  },
  {
    question: 'Os meus dados são enviados para um servidor?',
    answer: 'Não. Todo o processamento é feito localmente no seu navegador. Nenhum texto é enviado nem armazenado.',
    answerSchemaText: 'Não. Processamento local no navegador.',
  },
  {
    question: 'A ferramenta funciona para todas as línguas?',
    answer: 'Sim. O contador de palavras funciona com qualquer língua que utilize espaços como separadores de palavras – português, inglês, alemão, espanhol, polaco e muitas outras.',
    answerSchemaText: 'Sim, para todas as línguas que utilizam espaços como separadores.',
  },
];

export default function WordCountPage() {
  return (
    <>
      <Script id="ld-json-word-count-pt" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Script id="ld-json-word-howto-pt" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />

      <HeroBanner
        title="Contador de palavras e caracteres"
        description="Conte as palavras, caracteres, parágrafos e estime o tempo de leitura. Verifique se o comprimento do seu texto é ideal para SEO – artigo de blog, página de serviço ou ficha de produto."
        overlay="black"
        backgroundImage="/assets/tools/narzedzia-licznik-slow-i-znakow.webp"
      />

      <Breadcrumbs
        second={{ href: '/pt/ferramentas', label: 'Ferramentas' }}
        third={{ href: '/pt/ferramentas/contador-de-palavras-e-caracteres', label: 'Contador de palavras' }}
        includeJsonLd
        locale="pt"
      />

      <ToolEditorLayout>
        <AdSense variant="tool-banner" className="my-3" />
        <WordCountTool />
      </ToolEditorLayout>

      <Wrapper>
        <Gap variant="line" />

        <SectionInfo title="Porque é que o comprimento do texto é importante para SEO?">
          <p className="text-mid">
            O comprimento do texto é um dos fatores que influenciam a classificação nos resultados de pesquisa. As páginas demasiado curtas podem ser percecionadas como falta de profundidade, enquanto
            as páginas excessivamente longas sem estrutura clara podem desencorajar os leitores.
          </p>
          <p className="text-mid mt-3">
            Esta ferramenta ajuda a verificar se o comprimento do seu texto corresponde às recomendações para diferentes tipos de páginas – artigos de blog, páginas de serviço, páginas iniciais e
            fichas de produto. Conta as palavras, caracteres, parágrafos e estima o tempo de leitura.
          </p>
        </SectionInfo>

        <Gap size="sm" />

        <SectionSteps
          title="Como usar o contador"
          description="A análise demora apenas alguns segundos:"
          grid="three"
          items={[
            { icon: <RiFileTextLine className="h-6 w-6" />, title: '1. Colar o texto', description: 'Cole ou introduza o texto que pretende analisar.' },
            { icon: <RiBarChartLine className="h-6 w-6" />, title: '2. Escolher o tipo de página', description: 'Selecione o tipo de página para obter uma avaliação do comprimento adequada.' },
            { icon: <RiFileCopyLine className="h-6 w-6" />, title: '3. Copiar o relatório', description: 'Consulte as estatísticas e copie o relatório se necessário.' },
          ]}
        />

        <Gap variant="line" />

        <SectionSteps
          title="O que o contador mede: palavras, caracteres, tempo de leitura"
          description="O contador regista cinco métricas-chave:"
          grid="two"
          items={[
            {
              icon: <RiText className="h-6 w-6" />,
              title: 'Palavras',
              description: 'Número total de palavras. É o indicador principal do comprimento do texto.',
            },
            {
              icon: <RiSpaceShipLine className="h-6 w-6" />,
              title: 'Caracteres (com espaços)',
              description: 'Todos os caracteres, incluindo espaços. Útil quando um CMS impõe um limite de caracteres (ex.: fichas em marketplaces).',
            },
            {
              icon: <RiHashtag className="h-6 w-6" />,
              title: 'Caracteres (sem espaços)',
              description: 'Apenas letras, números e pontuação. Por vezes exigido por gráficas ou para orçamentos de tradução.',
            },
            {
              icon: <RiParagraph className="h-6 w-6" />,
              title: 'Parágrafos',
              description: 'Quantos blocos de texto separados por linhas em branco. Ajuda a avaliar se o texto está bem estruturado.',
            },
            {
              icon: <RiTimeLine className="h-6 w-6" />,
              title: 'Tempo de leitura',
              description: 'O calculador de tempo de leitura indica quantos minutos são necessários para ler o texto a uma velocidade média de 200 palavras por minuto.',
            },
          ]}
        />

        <Gap variant="line" />

        <SectionDemo
          title="Como interpretar os resultados"
          subtitle="Estados de avaliação"
          demo={
            <div className="space-y-3">
              <div className="flex items-center gap-3 rounded-lg border border-neutral-200 bg-white p-3">
                <Badge variant="success" size="sm">
                  Bom comprimento
                </Badge>
                <span className="text-mid text-sm!">O texto situa-se no intervalo recomendado</span>
              </div>
              <div className="flex items-center gap-3 rounded-lg border border-neutral-200 bg-white p-3">
                <Badge variant="warning" size="sm">
                  Abaixo do intervalo
                </Badge>
                <span className="text-mid text-sm!">O texto é mais curto do que a média</span>
              </div>
              <div className="flex items-center gap-3 rounded-lg border border-neutral-200 bg-white p-3">
                <Badge variant="error" size="sm">
                  Acima do intervalo
                </Badge>
                <span className="text-mid text-sm!">O texto é mais longo do que a média</span>
              </div>
              <div className="mt-2 rounded-lg bg-neutral-100 p-3">
                <div className="mb-1 flex items-center justify-between text-sm!">
                  <span className="text-dark font-medium">Progresso</span>
                  <span className="text-mid">1200 / 1200-3000</span>
                </div>
                <div className="h-2 w-full rounded-full bg-neutral-200">
                  <div className="bg-success-icon h-2 w-2/5 rounded-full" />
                </div>
              </div>
            </div>
          }
        >
          <p className="text-mid mb-4">A barra de progresso colorida e o estado ajudam a avaliar rapidamente o comprimento do texto:</p>
          <ul className="text-mid list-disc space-y-2 pl-5">
            <li>
              <strong className="text-success-text">Bom comprimento</strong> (verde) – o texto situa-se no intervalo aproximado para o tipo de página selecionado.
            </li>
            <li>
              <strong className="text-warning-text">Abaixo do intervalo</strong> (amarelo) – o texto é mais curto do que a média para este tipo de página. Se responder a todas as perguntas do leitor,
              o comprimento pode ser adequado.
            </li>
            <li>
              <strong className="text-error-text">Acima do intervalo</strong> (vermelho) – o texto é mais longo do que a média. Se cada parágrafo traz informação nova, o comprimento é justificado.
            </li>
          </ul>
          <p className="text-mid mt-4">
            Os intervalos são baseados na análise de conteúdos bem posicionados nos motores de pesquisa. Se o texto responde às perguntas do leitor, o comprimento é adequado independentemente do
            resultado do contador.
          </p>
        </SectionDemo>

        <Gap variant="line" />

        <SectionInfo title="Quantas palavras deve ter um texto: comprimento ideal para SEO">
          <p className="text-mid mb-4">
            Os intervalos abaixo são baseados na análise de conteúdos bem posicionados nos motores de pesquisa. O comprimento do texto por si só não influencia o posicionamento no Google: o que
            importa é se o conteúdo responde às perguntas do leitor.
          </p>
          <div className="overflow-x-auto">
            <table className="text-mid w-full text-left">
              <thead>
                <tr className="border-b border-neutral-200">
                  <th className="py-2 pr-4 font-semibold">Tipo de página</th>
                  <th className="py-2 pr-4 font-semibold">Intervalo</th>
                  <th className="py-2 font-semibold">Quando mais curto, quando mais longo?</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-neutral-100">
                  <td className="py-2 pr-4">Ficha de produto</td>
                  <td className="py-2 pr-4 whitespace-nowrap">80–400 palavras</td>
                  <td className="text-primary-light0 py-2 text-sm">
                    Produto simples (ex.: uma caneca): 80–150 palavras. Equipamento complexo (ex.: um portátil): 300–400 palavras, pois os compradores têm mais perguntas.
                  </td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="py-2 pr-4">Página de serviço</td>
                  <td className="py-2 pr-4 whitespace-nowrap">500–1 500 palavras</td>
                  <td className="text-primary-light0 py-2 text-sm">Serviço local (ex.: canalizador): 500–700 palavras. Serviço B2B com processo e FAQ: 1 200–1 500 palavras.</td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="py-2 pr-4">Página inicial</td>
                  <td className="py-2 pr-4 whitespace-nowrap">400–1 000 palavras</td>
                  <td className="text-primary-light0 py-2 text-sm">A página inicial transmite o valor principal e orienta os visitantes: o texto apoia a navegação, não substitui as subpáginas.</td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="py-2 pr-4">Landing page</td>
                  <td className="py-2 pr-4 whitespace-nowrap">600–2 500 palavras</td>
                  <td className="text-primary-light0 py-2 text-sm">Oferta simples: 600–1 000 palavras. Oferta que necessita de explicar o processo, variantes e objeções: 1 500–2 500 palavras.</td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="py-2 pr-4">Artigo de blog</td>
                  <td className="py-2 pr-4 whitespace-nowrap">1 200–3 000 palavras</td>
                  <td className="text-primary-light0 py-2 text-sm">Resposta a uma questão simples: 1 200–1 800 palavras. Tema complexo com muitos aspetos: 2 000–3 000 palavras.</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">Guia</td>
                  <td className="py-2 pr-4 whitespace-nowrap">2 500–6 000 palavras</td>
                  <td className="text-primary-light0 py-2 text-sm">Tema específico: 2 500–3 500 palavras. Tema amplo com muitas etapas e exemplos: 4 000–6 000 palavras.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </SectionInfo>

        <Gap variant="line" />

        <SectionSteps
          title="Para quem é útil o contador de palavras online?"
          description="Uma ferramenta de contagem de palavras para redatores e muito mais: eis quem mais utiliza o contador:"
          grid="three"
          items={[
            {
              icon: <RiEditLine className="h-6 w-6" />,
              title: 'Redatores e criadores de conteúdo',
              description:
                'Verifique se o texto se situa no intervalo recomendado para um tipo de página específico. O contador de palavras SEO ajuda a avaliar se um artigo está suficientemente desenvolvido.',
            },
            {
              icon: <RiBloggerLine className="h-6 w-6" />,
              title: 'Bloggers',
              description: 'Controle o comprimento dos artigos para manter a coerência. Verifique o tempo de leitura antes da publicação.',
            },
            {
              icon: <RiShoppingBagLine className="h-6 w-6" />,
              title: 'E-commerce',
              description: 'Verifique as descrições de produtos em relação aos limites de caracteres das plataformas de venda (Amazon, eBay, Etsy).',
            },
            {
              icon: <RiSearchLine className="h-6 w-6" />,
              title: 'Especialistas SEO',
              description: 'Avalie se o conteúdo da página tem um comprimento ideal em relação à concorrência. Analise a relação palavras-tema.',
            },
            {
              icon: <RiGraduationCapLine className="h-6 w-6" />,
              title: 'Estudantes e académicos',
              description: 'Verifique se um trabalho respeita o limite de palavras ou caracteres exigido.',
            },
            {
              icon: <RiTranslate2 className="h-6 w-6" />,
              title: 'Tradutores',
              description: 'Conte os caracteres sem espaços para orçamentos de tradução (uma unidade de faturação standard).',
            },
          ]}
        />

        <Gap variant="line" />

        <SectionInfo title="Limites de caracteres nas plataformas populares">
          <p className="text-mid mb-4">O contador de caracteres é útil para criar conteúdo em plataformas com restrições de comprimento:</p>
          <div className="overflow-x-auto">
            <table className="text-mid w-full text-left">
              <thead>
                <tr className="border-b border-neutral-200">
                  <th className="py-2 pr-4 font-semibold">Plataforma / Elemento</th>
                  <th className="py-2 pr-4 font-semibold">Limite de caracteres</th>
                  <th className="py-2 font-semibold">Observações</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-neutral-100">
                  <td className="py-2 pr-4">Google – meta título</td>
                  <td className="py-2 pr-4 whitespace-nowrap">50–60 caracteres</td>
                  <td className="text-primary-light0 py-2 text-sm">Os títulos mais longos são truncados nos resultados de pesquisa.</td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="py-2 pr-4">Google – meta descrição</td>
                  <td className="py-2 pr-4 whitespace-nowrap">150–160 caracteres</td>
                  <td className="text-primary-light0 py-2 text-sm">Descrição visível sob o link nos resultados de pesquisa.</td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="py-2 pr-4">Amazon – título de produto</td>
                  <td className="py-2 pr-4 whitespace-nowrap">200 caracteres</td>
                  <td className="text-primary-light0 py-2 text-sm">Título conciso com as palavras-chave mais importantes.</td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="py-2 pr-4">X (Twitter) – publicação</td>
                  <td className="py-2 pr-4 whitespace-nowrap">280 caracteres</td>
                  <td className="text-primary-light0 py-2 text-sm">Limite padrão para utilizadores regulares.</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">LinkedIn – publicação</td>
                  <td className="py-2 pr-4 whitespace-nowrap">3 000 caracteres</td>
                  <td className="text-primary-light0 py-2 text-sm">Após ~210 caracteres, o link «ver mais» aparece.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </SectionInfo>

        <Gap variant="line" />

        <SectionSteps
          title="O que torna este contador especial?"
          grid="two"
          items={[
            {
              icon: <RiInfinityLine className="h-6 w-6" />,
              title: 'Seis tipos de páginas com intervalos recomendados',
              description: 'Ficha de produto, página de serviço, página inicial, landing page, artigo de blog e guia: cada tipo tem os seus próprios intervalos baseados na análise.',
            },
            {
              icon: <RiUserLine className="h-6 w-6" />,
              title: 'Processamento local no navegador',
              description: 'O seu texto nunca é enviado para um servidor: toda a análise é feita localmente no seu dispositivo.',
            },
            {
              icon: <RiCheckboxCircleLine className="h-6 w-6" />,
              title: 'Avaliação do comprimento do texto',
              description: 'Não se limita a contar palavras: obtém uma indicação sobre a adequação do comprimento para o tipo de página selecionado.',
            },
            {
              icon: <RiBarChartLine className="h-6 w-6" />,
              title: 'Intervalos baseados em SEO',
              description: 'Os comprimentos recomendados são baseados na análise de conteúdos bem posicionados nos motores de pesquisa.',
            },
            {
              icon: <RiTimerLine className="h-6 w-6" />,
              title: 'Tempo de leitura',
              description: 'Saiba imediatamente quantos minutos os leitores demorarão a ler o texto.',
            },
            {
              icon: <RiFileCopyLine className="h-6 w-6" />,
              title: 'Copiar o relatório',
              description: 'O botão Copiar relatório copia um resumo com todas as estatísticas e a avaliação de comprimento para a área de transferência.',
            },
          ]}
        />

        <Gap variant="line" />

        <FaqPanels
          pageUrl={toAbsoluteUrl('/pt/ferramentas/contador-de-palavras-e-caracteres')}
          title="Perguntas frequentes sobre o contador de palavras"
          openByDefault={1}
          items={[
            ...faqItems,
            {
              question: 'Posso copiar o relatório com as estatísticas?',
              answer:
                'Sim. Abaixo das estatísticas encontra-se um botão Copiar relatório – copia um resumo com o número de palavras, caracteres, parágrafos, o tempo de leitura e a avaliação de comprimento para a área de transferência. Pode colá-lo num documento ou enviá-lo a colaboradores.',
              answerSchemaText: 'Sim. Clique em Copiar relatório. Um resumo com todas as métricas é copiado para a área de transferência.',
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
