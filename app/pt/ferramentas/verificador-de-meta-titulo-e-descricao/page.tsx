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

const LOCALE = 'pt' as const;
const TOOL_KEY = 'metaCounter' as const;

export const metadata: Metadata = {
  title: 'Verificador gratuito de meta título e descrição online',
  description:
    'Verificador gratuito de meta título e descrição. Verifique o número de caracteres, a largura em píxeis e a pré-visualização Google. Evite títulos e descrições truncados nos resultados de pesquisa.',
  alternates: getToolAlternates(TOOL_KEY, LOCALE),
  openGraph: {
    title: 'Verificador gratuito de meta título e descrição online',
    description: 'Verifique o número de caracteres, a largura em píxeis e a pré-visualização Google. Evite títulos e descrições truncados.',
    url: toAbsoluteUrl('/pt/ferramentas/verificador-de-meta-titulo-e-descricao'),
    type: 'website',
    images: [{ url: toAbsoluteUrl('/assets/tools/narzedzia-licznik-dlugosci-meta-title-i-description.webp'), width: 1200, height: 630 }],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Verificador de meta título e descrição online',
  alternateName: ['Verificador de meta título com pré-visualização Google', 'Contador de caracteres meta título', 'Pré-visualização SERP Google', 'Verificador de comprimento SEO'],
  url: toAbsoluteUrl('/pt/ferramentas/verificador-de-meta-titulo-e-descricao'),
  applicationCategory: 'DeveloperApplication',
  applicationSubCategory: 'SEOTool',
  operatingSystem: 'Any',
  description: 'Verificador de meta título e descrição com pré-visualização Google. Mostra o número de caracteres, palavras e largura em píxeis para evitar títulos e descrições truncados.',
  featureList: [
    'Contador de caracteres e palavras',
    'Medição da largura em píxeis',
    'Pré-visualização do resultado Google (SERP)',
    'Avaliação do comprimento (demasiado curto / bom / demasiado longo)',
    'URL opcional na pré-visualização',
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
  name: 'Como verificar o comprimento do meta título e da descrição',
  description: 'Introduza o seu meta título e descrição para verificar o número de caracteres, a largura em píxeis e a pré-visualização nos resultados Google.',
  url: toAbsoluteUrl('/pt/ferramentas/verificador-de-meta-titulo-e-descricao'),
  step: [
    {
      '@type': 'HowToStep',
      name: 'Introduzir o meta título',
      text: 'Introduza o título da sua página no campo previsto. A ferramenta mostra imediatamente o número de caracteres e a largura em píxeis.',
    },
    { '@type': 'HowToStep', name: 'Introduzir a meta descrição', text: 'Introduza a descrição da sua página. Verifique se o comprimento se situa no intervalo recomendado.' },
    { '@type': 'HowToStep', name: 'Verificar a pré-visualização', text: 'Consulte a pré-visualização do resultado Google para ver como a sua página aparecerá nas SERP.' },
  ],
  publisher: { '@type': 'Organization', name: 'Arteon Agency', url: siteUrl },
};

const faqItems = [
  {
    question: 'Qual é o comprimento ideal de um meta título?',
    answer:
      'O Google mostra geralmente os títulos até cerca de 580–600 píxeis de largura, o que corresponde a cerca de 50–60 caracteres. Um título mais longo corre o risco de ser truncado nos resultados de pesquisa. A ferramenta mede tanto os caracteres como a largura em píxeis.',
    answerSchemaText: 'Cerca de 50–60 caracteres / 580–600 píxeis. Para além disso, o título pode ser truncado.',
  },
  {
    question: 'Qual é o comprimento ideal de uma meta descrição?',
    answer: 'O intervalo recomendado é de cerca de 120–160 caracteres (até ~920 píxeis). Para além disso, o Google pode truncar a descrição ou substituí-la por um excerto do conteúdo da página.',
    answerSchemaText: 'Cerca de 120–160 caracteres / até ~920 píxeis.',
  },
  {
    question: 'Porque é que a largura em píxeis é importante?',
    answer:
      'O Google não corta os títulos por número de caracteres, mas por largura em píxeis. As letras como «W» ou «M» são mais largas do que «i» ou «l». Um título de 55 caracteres com muitas letras largas pode ser truncado, enquanto um título de 60 caracteres com letras estreitas poderá ser mostrado na íntegra.',
    answerSchemaText: 'O Google trunca por largura em píxeis, não por número de caracteres. As letras largas ocupam mais espaço.',
  },
  {
    question: 'A pré-visualização Google é exata?',
    answer:
      'A pré-visualização é aproximada. O Google pode ajustar o título e a descrição em função da largura do ecrã, da consulta de pesquisa e do conteúdo da página. No entanto, a pré-visualização dá uma boa indicação da aparência nas SERP.',
    answerSchemaText: 'Aproximada. O Google pode adaptar segundo o ecrã e a consulta.',
  },
  {
    question: 'Os meus dados são enviados para um servidor?',
    answer: 'Não. Todo o processamento é feito localmente no seu navegador. Nenhum dado é enviado nem armazenado.',
    answerSchemaText: 'Não. Processamento local no navegador.',
  },
];

export default function MetaTitlePage() {
  return (
    <>
      <Script id="ld-json-meta-title-pt" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Script id="ld-json-meta-howto-pt" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />

      <HeroBanner
        title="Verificador de meta título e descrição"
        description="Verifique o número de caracteres, palavras e a largura em píxeis dos seus meta títulos e descrições. Pré-visualização em tempo real da aparência da sua página nos resultados Google."
        overlay="black"
        backgroundImage="/assets/tools/narzedzia-licznik-dlugosci-meta-title-i-description.webp"
      />

      <Breadcrumbs
        second={{ href: '/pt/ferramentas', label: 'Ferramentas' }}
        third={{ href: '/pt/ferramentas/verificador-de-meta-titulo-e-descricao', label: 'Meta título e descrição' }}
        includeJsonLd
        locale="pt"
      />

      <ToolEditorLayout>
        <AdSense variant="tool-banner" className="my-3" />
        <MetaTitleDescriptionTool />
      </ToolEditorLayout>

      <Wrapper>
        <Gap variant="line" />

        <SectionInfo title="Porque verificar o comprimento do meta título e da descrição?">
          <p className="text-mid">
            O meta título e a meta descrição são os primeiros elementos que os utilizadores veem nos resultados de pesquisa Google. Um título truncado ou uma descrição cortada pode reduzir a taxa de
            cliques e prejudicar o referenciamento da sua página.
          </p>
          <p className="text-mid mt-3">
            Esta ferramenta verifica o número de caracteres, o número de palavras e a largura em píxeis do seu título e descrição. Mostra uma pré-visualização em tempo real da aparência da sua página
            nos resultados Google, permitindo otimizar cada elemento antes da publicação.
          </p>
        </SectionInfo>

        <Gap size="sm" />

        <SectionSteps
          title="Como usar o verificador"
          description="A verificação demora apenas alguns segundos:"
          grid="three"
          items={[
            {
              icon: <RiPencilLine className="h-6 w-6" />,
              title: '1. Introduzir o meta título',
              description: 'Introduza o título da sua página. A ferramenta mostra imediatamente o número de caracteres e a largura em píxeis.',
            },
            {
              icon: <RiFileTextLine className="h-6 w-6" />,
              title: '2. Introduzir a descrição',
              description: 'Introduza a meta descrição. Verifique se o comprimento se situa no intervalo recomendado.',
            },
            {
              icon: <RiEyeLine className="h-6 w-6" />,
              title: '3. Verificar a pré-visualização',
              description: 'Consulte a pré-visualização Google para ver como a sua página aparecerá nos resultados de pesquisa.',
            },
          ]}
        />

        <Gap variant="line" />

        <SectionInfo title="Quantos caracteres devem ter o meta título e a descrição?">
          <p className="text-mid mb-4">O Google trunca os títulos e descrições demasiado longos. Eis os intervalos recomendados que reduzem o risco de corte nos resultados de pesquisa.</p>
          <div className="overflow-x-auto">
            <table className="text-mid w-full text-left">
              <thead>
                <tr className="border-b border-neutral-200">
                  <th className="py-2 pr-4 font-semibold">Elemento</th>
                  <th className="py-2 pr-4 font-semibold">Caracteres</th>
                  <th className="py-2 pr-4 font-semibold">Píxeis</th>
                  <th className="py-2 font-semibold">Observações</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-neutral-100">
                  <td className="py-2 pr-4 font-medium">Meta título</td>
                  <td className="py-2 pr-4 whitespace-nowrap">50–60 caracteres</td>
                  <td className="py-2 pr-4 whitespace-nowrap">até ~580 px</td>
                  <td className="text-primary-light0 py-2 text-sm">Coloque as palavras mais importantes no início. Nome da marca no final.</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-medium">Meta descrição</td>
                  <td className="py-2 pr-4 whitespace-nowrap">120–160 caracteres</td>
                  <td className="py-2 pr-4 whitespace-nowrap">até ~920 px</td>
                  <td className="text-primary-light0 py-2 text-sm">2-3 frases curtas são suficientes. Termine com um apelo à ação.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-mid mt-4 text-sm">Estes são valores aproximados: o Google não publica limites rígidos e pode ajustá-los conforme o dispositivo e o contexto da consulta.</p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionDemo
          title="Como interpretar os resultados"
          demo={
            <div className="space-y-3">
              <div className="rounded-lg border border-neutral-200 bg-white p-3">
                <p className="text-dark mb-2 text-sm! font-medium">Meta título</p>
                <div className="flex flex-wrap gap-2 text-sm!">
                  <span className="text-mid">
                    Caracteres: <strong>52</strong>
                  </span>
                  <span className="text-mid">
                    Palavras: <strong>7</strong>
                  </span>
                  <span className="text-mid">
                    Píxeis: <strong>456px</strong>
                  </span>
                </div>
                <Badge variant="success" size="sm" className="mt-2">
                  Bom comprimento
                </Badge>
              </div>
              <div className="rounded-lg border border-neutral-200 bg-white p-3">
                <p className="text-dark mb-2 text-sm! font-medium">Meta descrição</p>
                <div className="flex flex-wrap gap-2 text-sm!">
                  <span className="text-mid">
                    Caracteres: <strong>142</strong>
                  </span>
                  <span className="text-mid">
                    Palavras: <strong>21</strong>
                  </span>
                  <span className="text-mid">
                    Píxeis: <strong>812px</strong>
                  </span>
                </div>
                <Badge variant="success" size="sm" className="mt-2">
                  Bom comprimento
                </Badge>
              </div>
            </div>
          }
        >
          <p className="text-mid mb-4">A ferramenta mostra três métricas para cada campo, bem como uma avaliação de comprimento codificada por cores:</p>

          <h3 className="h5 mt-6 mb-2">Métricas</h3>
          <ul className="text-mid list-disc space-y-2 pl-5">
            <li>
              <strong>Caracteres</strong> – número total de caracteres (espaços incluídos). Fácil de compreender, mas menos preciso do que os píxeis.
            </li>
            <li>
              <strong>Palavras</strong> – número de palavras. Útil para uma avaliação rápida do comprimento.
            </li>
            <li>
              <strong>Largura (px)</strong> – largura do texto em píxeis. É o valor que o Google utiliza efetivamente para truncar.
            </li>
          </ul>

          <h3 className="h5 mt-6 mb-2">Estados de avaliação</h3>
          <ul className="text-mid list-disc space-y-2 pl-5">
            <li>
              <strong className="text-success-text">Bom comprimento</strong> (verde) – o texto está no intervalo recomendado. O Google deverá mostrá-lo na íntegra.
            </li>
            <li>
              <strong className="text-warning-text">Demasiado curto</strong> (amarelo) – o texto é muito curto. Tem espaço para mais informação que pode incentivar os cliques.
            </li>
            <li>
              <strong className="text-error-text">Demasiado longo</strong> (vermelho) – o texto ultrapassa o intervalo recomendado. O Google provavelmente irá truncá-lo. Considere encurtá-lo.
            </li>
            <li>
              <strong className="text-light">Sem dados</strong> (cinzento) – o campo está vazio. Introduza texto para ver a análise.
            </li>
          </ul>
        </SectionDemo>

        <Gap variant="line" />

        <SectionDemo
          title="Porque é que a largura em píxeis é mais importante do que o número de caracteres?"
          demo={
            <div className="space-y-3">
              <div className="rounded-lg border border-neutral-200 bg-white p-3">
                <p className="text-dark text-sm! font-medium">iiiiiiiiiiiiiiii (16 caracteres)</p>
                <div className="bg-success-icon mt-1 h-3 w-1/4 rounded-full" />
                <p className="text-light mt-1 text-xs!">~64{'\u00a0'}px de largura</p>
              </div>
              <div className="rounded-lg border border-neutral-200 bg-white p-3">
                <p className="text-dark text-sm! font-medium">WWWWWWWWWWWWWWWW (16 caracteres)</p>
                <div className="bg-error-icon mt-1 h-3 w-3/4 rounded-full" />
                <p className="text-light mt-1 text-xs!">~256{'\u00a0'}px de largura</p>
              </div>
            </div>
          }
        >
          <p className="text-mid">
            As diferentes letras têm larguras diferentes. Compare «iiii» e «WWWW»: ambas têm 4 caracteres, mas a largura visual é completamente diferente. O Google mede a largura do texto em píxeis,
            não em caracteres.
          </p>
          <p className="text-mid mt-3">
            Por isso, um título com muitas letras estreitas (i, l, t, f) pode ser mais longo do que um título com letras largas (W, M, O), apesar do mesmo número de caracteres. A ferramenta mostra
            ambos os valores: o número de caracteres (mais fácil de compreender) e a largura em píxeis (mais preciso para o Google).
          </p>
        </SectionDemo>

        <Gap variant="line" />

        <SectionInfo title="Pré-visualização do snippet: o que mostra?">
          <p className="text-mid">
            A pré-visualização (snippet preview) simula a aparência do título e da descrição da página nos resultados de pesquisa Google. É uma visualização indicativa: a aparência real pode variar
            ligeiramente conforme o dispositivo e o navegador.
          </p>
          <h3 className="h5 mt-6 mb-2">Elementos da pré-visualização</h3>
          <ul className="text-mid list-disc space-y-2 pl-5">
            <li>
              <strong>URL</strong> – o endereço da página apresentado acima do título. Pode introduzi-lo num campo opcional para um resultado mais realista.
            </li>
            <li>
              <strong>Título</strong> – o cabeçalho azul. Se for demasiado longo, a ferramenta trunca-o automaticamente e adiciona reticências.
            </li>
            <li>
              <strong>Descrição</strong> – o texto cinzento sob o título. Também é truncado se exceder o limite.
            </li>
          </ul>
        </SectionInfo>

        <Gap variant="line" />

        <SectionSteps
          title="Problemas comuns e soluções"
          grid="two"
          items={[
            {
              icon: <RiRulerLine className="h-6 w-6" />,
              title: 'O título é demasiado longo',
              description:
                'Encurte o título mantendo as palavras mais importantes no início. Remova adjetivos como «melhor» ou «profissional», que raramente acrescentam valor. Coloque o nome da marca no final após um separador.',
            },
            {
              icon: <RiFileTextLine className="h-6 w-6" />,
              title: 'A descrição é demasiado curta',
              description: 'Adicione mais informação: o que o utilizador encontrará na página, que benefício terá, o que diferencia a oferta. Termine com um apelo à ação.',
            },
            {
              icon: <RiRuler2Line className="h-6 w-6" />,
              title: 'A largura em píxeis é diferente do esperado',
              description: 'A ferramenta mede a largura com um tipo de letra padrão semelhante ao utilizado pelo Google. O resultado pode variar ligeiramente conforme o navegador.',
            },
          ]}
        />

        <Gap variant="line" />

        <SectionSteps
          title="Dicas para meta títulos eficazes"
          description="Um bom meta título influencia a taxa de cliques nos resultados de pesquisa:"
          grid="two"
          items={[
            {
              icon: <RiSearchLine className="h-6 w-6" />,
              title: 'Palavra-chave principal no início',
              description: 'Coloque a palavra-chave mais importante no início do título para melhor visibilidade.',
            },
            { icon: <RiRulerLine className="h-6 w-6" />, title: 'Respeitar o intervalo ideal', description: '50–60 caracteres / 450–580 píxeis – o intervalo que geralmente é mostrado na íntegra.' },
            { icon: <RiEditLine className="h-6 w-6" />, title: 'Ser descritivo e único', description: 'Cada página deve ter um título único que descreva com precisão o seu conteúdo.' },
            { icon: <RiMegaphoneLine className="h-6 w-6" />, title: 'Incentivar o clique', description: 'Utilize termos que despertem vontade de clicar – sem cair no clickbait.' },
          ]}
        />

        <Gap variant="line" />

        <SectionSteps
          title="Para quem é útil o verificador de meta?"
          description="O verificador de meta é útil para qualquer pessoa que crie conteúdo web:"
          grid="two"
          items={[
            {
              icon: <RiShoppingBagLine className="h-6 w-6" />,
              title: 'Proprietários de sites e lojas',
              description: 'Verifique se os títulos e descrições são truncados nos resultados Google antes de publicar uma nova página ou produto.',
            },
            {
              icon: <RiSearchLine className="h-6 w-6" />,
              title: 'Especialistas SEO',
              description: 'Teste diferentes variantes de título e descrição, verifique a pré-visualização dos resultados de pesquisa e o cumprimento das recomendações.',
            },
            { icon: <RiEditLine className="h-6 w-6" />, title: 'Redatores', description: 'Redija títulos e descrições que respeitem os limites e incentivem os cliques.' },
            {
              icon: <RiMegaphoneLine className="h-6 w-6" />,
              title: 'Profissionais de marketing',
              description: 'Crie meta para campanhas e landing pages, otimizando a taxa de cliques nos resultados orgânicos.',
            },
            { icon: <RiCodeLine className="h-6 w-6" />, title: 'Programadores', description: 'Verifique as tags meta antes de colocar uma página em produção.' },
          ]}
        />

        <Gap variant="line" />

        <SectionSteps
          title="O que torna este verificador especial?"
          grid="two"
          items={[
            {
              icon: <RiRuler2Line className="h-6 w-6" />,
              title: 'Medição em píxeis',
              description: 'Não contamos apenas caracteres: medimos a largura real do texto tal como o Google faz.',
            },
            {
              icon: <RiEyeLine className="h-6 w-6" />,
              title: 'Pré-visualização Google',
              description: 'Veja como o título e a descrição aparecem nos resultados de pesquisa antes de publicar a sua página.',
            },
            {
              icon: <RiCheckboxCircleLine className="h-6 w-6" />,
              title: 'Avaliação codificada por cores',
              description: 'Saiba instantaneamente se o texto é demasiado curto, ideal ou demasiado longo.',
            },
            {
              icon: <RiInfinityLine className="h-6 w-6" />,
              title: 'Píxeis e caracteres em conjunto',
              description: 'A ferramenta mostra os dois valores simultaneamente: pode comparar se o título respeita tanto o limite de caracteres como o de píxeis.',
            },
            {
              icon: <RiUserLine className="h-6 w-6" />,
              title: 'Título e descrição numa única vista',
              description: 'Verifique o meta título e a descrição em simultâneo, sem mudar de separador.',
            },
          ]}
        />

        <Gap variant="line" />

        <FaqPanels
          pageUrl={toAbsoluteUrl('/pt/ferramentas/verificador-de-meta-titulo-e-descricao')}
          title="Perguntas frequentes sobre o verificador de meta título"
          openByDefault={1}
          items={faqItems}
        />

        <Gap variant="line" />

        <ToolsCarousel title="Descubra outras ferramentas" />

        <Gap size="sm" />
      </Wrapper>
    </>
  );
}
