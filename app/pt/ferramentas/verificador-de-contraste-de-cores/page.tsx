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
  RiEyeLine,
  RiShieldCheckLine,
  RiMagicLine,
  RiInfinityLine,
  RiGlobalLine,
  RiSmartphoneLine,
  RiShoppingCartLine,
  RiSlideshowLine,
  RiPrinterLine,
  RiRestaurantLine,
  RiStackLine,
} from 'react-icons/ri';

const LOCALE = 'pt' as const;
const TOOL_KEY = 'contrastChecker' as const;

export const metadata: Metadata = {
  title: 'Verificador de contraste de cores gratuito online – conformidade WCAG',
  description:
    'Verificador de contraste de cores gratuito. Teste a legibilidade das cores de texto e fundo segundo as WCAG 2.1. Função de ajuste automático para encontrar combinações acessíveis. Sem registo.',
  alternates: getToolAlternates(TOOL_KEY, LOCALE),
  openGraph: {
    title: 'Verificador de contraste de cores gratuito – WCAG',
    description: 'Teste a legibilidade das cores segundo as WCAG 2.1. Ajuste automático para combinações acessíveis.',
    url: toAbsoluteUrl('/pt/ferramentas/verificador-de-contraste-de-cores'),
    type: 'website',
    images: [{ url: toAbsoluteUrl('/assets/tools/narzedzia-tester-kontrastu-kolorow-wcag.webp'), width: 1200, height: 630 }],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Verificador de contraste e legibilidade de cores online',
  alternateName: ['Verificador de contraste WCAG', 'Testador de acessibilidade de cores', 'Rácio de contraste WCAG 2.1', 'Ferramenta de acessibilidade de cores'],
  url: toAbsoluteUrl('/pt/ferramentas/verificador-de-contraste-de-cores'),
  applicationCategory: 'DesignApplication',
  applicationSubCategory: 'AccessibilityTool',
  operatingSystem: 'Any',
  description: 'Verificador de contraste de cores segundo as WCAG 2.1. Calcula o rácio de contraste, avalia a conformidade AA/AAA e propõe ajuste automático das cores.',
  featureList: [
    'Cálculo do rácio de contraste',
    'Avaliação WCAG AA e AAA',
    'Texto normal, texto grande e ícones',
    'Função de ajuste automático',
    'Suporte HEX, RGB, HSL',
    'Pré-visualização em tempo real',
    'Execução local no navegador',
  ],
  inLanguage: 'pt',
  isAccessibleForFree: true,
  offers: { '@type': 'Offer', price: 0, priceCurrency: 'EUR' },
  publisher: { '@type': 'Organization', name: 'Arteon Agency', url: siteUrl },
};

const faqItems = [
  {
    question: 'O que é o rácio de contraste WCAG?',
    answer:
      'O rácio de contraste é um número compreendido entre 1:1 (nenhum contraste) e 21:1 (contraste máximo, preto sobre branco). As WCAG 2.1 definem limiares mínimos: 4,5:1 para texto normal (AA), 3:1 para texto grande (AA) e 7:1 para texto normal (AAA).',
    answerSchemaText: 'Um número de 1:1 a 21:1. AA: 4,5:1 (texto normal), 3:1 (texto grande). AAA: 7:1.',
  },
  {
    question: 'Qual é a diferença entre AA e AAA?',
    answer:
      'AA é o nível de conformidade mínimo recomendado – garante legibilidade suficiente para a maioria dos utilizadores. AAA é o nível mais elevado – oferece contraste ainda melhor, particularmente importante para utilizadores com deficiência visual.',
    answerSchemaText: 'AA: nível mínimo, legibilidade suficiente. AAA: nível elevado, melhor contraste.',
  },
  {
    question: 'O que é a função de ajuste automático?',
    answer:
      'A função de ajuste procura automaticamente uma variante de cor que atinge o limiar de contraste selecionado (AA ou AAA). Ajusta a luminosidade da cor mantendo a tonalidade, propondo a variante mais próxima da cor original.',
    answerSchemaText: 'Pesquisa automática de uma variante de cor conforme ao limiar selecionado.',
  },
  {
    question: 'Que formatos de cor são suportados?',
    answer: 'A ferramenta suporta HEX (#000000), RGB (rgb(0,0,0)), RGBA, HSL (hsl(0,0%,0%)) e nomes de cores CSS (red, blue, etc.).',
    answerSchemaText: 'HEX, RGB, RGBA, HSL e nomes de cores CSS.',
  },
  {
    question: 'Os meus dados são enviados para um servidor?',
    answer: 'Não. Todo o processamento é feito localmente no seu navegador. Nenhum dado é enviado nem armazenado.',
    answerSchemaText: 'Não. Processamento local no navegador.',
  },
];

export default function WcagContrastPage() {
  return (
    <>
      <Script id="ld-json-wcag-contrast-pt" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <HeroBanner
        title="Verificador de contraste de cores"
        description="Verifique se as suas cores de texto e fundo são legíveis segundo as normas WCAG 2.1. Rácio de contraste, avaliação AA/AAA e ajuste automático das cores."
        overlay="black"
        backgroundImage="/assets/tools/narzedzia-tester-kontrastu-kolorow-wcag.webp"
      />

      <Breadcrumbs
        second={{ href: '/pt/ferramentas', label: 'Ferramentas' }}
        third={{ href: '/pt/ferramentas/verificador-de-contraste-de-cores', label: 'Contraste de cores' }}
        includeJsonLd
        locale="pt"
      />

      <ToolEditorLayout>
        <AdSense variant="tool-banner" className="my-3" />
        <WcagContrastChecker />
      </ToolEditorLayout>

      <Wrapper>
        <Gap variant="line" />

        <SectionInfo title="Porque é que o contraste de cores é importante?">
          <p className="text-mid">
            Um contraste insuficiente entre o texto e o fundo torna o conteúdo difícil de ler – em especial para pessoas com deficiência visual, utilizadores idosos ou aqueles que consultam o seu site
            num ecrã ao sol. As diretrizes WCAG 2.1 definem limiares mínimos de contraste para garantir a acessibilidade.
          </p>
          <p className="text-mid mt-3">
            Esta ferramenta calcula o rácio de contraste entre duas cores, avalia a conformidade WCAG (AA e AAA) para texto normal, texto grande e ícones, e propõe uma função de ajuste automático para
            encontrar cores conformes.
          </p>
        </SectionInfo>

        <Gap size="sm" />

        <SectionSteps
          title="Como usar o verificador"
          description="A verificação é instantânea:"
          grid="three"
          items={[
            { icon: <RiPaletteLine className="h-6 w-6" />, title: '1. Introduzir as cores', description: 'Introduza a cor do texto e a cor de fundo em HEX, RGB ou HSL.' },
            { icon: <RiEyeLine className="h-6 w-6" />, title: '2. Verificar o contraste', description: 'Consulte o rácio de contraste e a conformidade WCAG AA/AAA.' },
            { icon: <RiMagicLine className="h-6 w-6" />, title: '3. Ajustar se necessário', description: 'Utilize a função de ajuste para encontrar uma cor conforme automaticamente.' },
          ]}
        />

        <Gap variant="line" />

        <SectionDemo
          title="Níveis de conformidade WCAG"
          demo={
            <div className="space-y-3">
              <div className="flex items-center gap-3 rounded-lg border border-neutral-200 bg-white p-3">
                <Badge variant="success" size="sm">
                  AA
                </Badge>
                <span className="text-mid text-sm!">Texto normal: mín. 4,5:1 — Texto grande: mín. 3:1 — Ícones: mín. 3:1</span>
              </div>
              <div className="flex items-center gap-3 rounded-lg border border-neutral-200 bg-white p-3">
                <Badge variant="success" size="sm">
                  AAA
                </Badge>
                <span className="text-mid text-sm!">Texto normal: mín. 7:1 — Texto grande: mín. 4,5:1</span>
              </div>
            </div>
          }
        >
          <p className="text-mid">As WCAG 2.1 definem dois níveis de conformidade para o contraste de cores:</p>
          <ul className="text-mid mt-3 list-disc space-y-2 pl-5">
            <li>
              <strong>AA (recomendado)</strong> – o nível mínimo para a maioria dos sites. Garante legibilidade suficiente.
            </li>
            <li>
              <strong>AAA (ótimo)</strong> – o nível mais elevado. Recomendado para sites destinados a pessoas com deficiência visual.
            </li>
            <li>
              <strong>Texto grande</strong> – texto de pelo menos 18px (ou 14px a negrito). Os limiares são mais baixos porque as letras grandes são naturalmente mais legíveis.
            </li>
          </ul>
        </SectionDemo>

        <Gap variant="line" />

        <SectionInfo title="O que significam os resultados do teste de legibilidade?">
          <p className="text-mid mb-4">
            A ferramenta apresenta o rácio de contraste numa escala de 1:1 (nenhum contraste) a 21:1 (contraste máximo – preto sobre branco). O resultado é comparado com os limiares definidos na norma
            WCAG:
          </p>
          <ul className="text-mid list-disc space-y-2 pl-5">
            <li>
              <strong>Texto normal</strong> – necessita de pelo menos 4,5:1 para o nível AA (padrão mínimo) ou 7:1 para o nível AAA (padrão melhorado). Aplica-se a texto inferior a 18pt (24px) ou
              inferior a 14pt (18,5px) a negrito.
            </li>
            <li>
              <strong>Texto grande / negrito</strong> – necessita de pelo menos 3:1 para o nível AA ou 4,5:1 para o nível AAA. Aplica-se a texto a partir de 18pt (24px) ou a partir de 14pt (18,5px) a
              negrito – títulos, botões, destaques.
            </li>
            <li>
              <strong>Ícones e elementos de interface</strong> – necessitam de pelo menos 3:1 para o nível AA. Aplica-se a ícones, botões, campos de formulário e outros elementos de interface que
              transmitem informação.
            </li>
          </ul>
          <p className="text-mid mt-3">
            <strong>O nível AA</strong> é o mínimo exigido pelas regulamentações de acessibilidade digital em muitos países, incluindo a{' '}
            <a href="https://eur-lex.europa.eu/legal-content/PT/TXT/?uri=CELEX:32016L2102" target="_blank" rel="noopener noreferrer" className="underline">
              diretiva europeia sobre acessibilidade dos sites web
            </a>
            . <strong>O nível AAA</strong> oferece melhor legibilidade, mas nem sempre é realizável para todos os elementos.
          </p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionInfo title="Ajuste automático das cores às exigências WCAG">
          <p className="text-mid mb-4">
            Se o contraste for demasiado fraco, a função <strong>Ajustar</strong> encontra automaticamente uma variante de cor de texto conforme ao limiar de contraste selecionado.
          </p>
          <p className="text-mid mb-4">Como funciona o ajuste:</p>
          <ol className="text-mid list-decimal space-y-2 pl-5">
            <li>Selecione o objetivo de ajuste na lista, por ex. AA para texto normal ou AAA para texto grande.</li>
            <li>Clique no botão Ajustar.</li>
            <li>A ferramenta pesquisa entre as variantes de luminosidade da cor do texto e sugere a mais próxima conforme às exigências.</li>
            <li>A cor sugerida pode ser copiada para a área de transferência ou definida imediatamente como nova cor de texto.</li>
          </ol>
          <p className="text-mid mt-3">
            O algoritmo preserva a tonalidade e a saturação da cor original, alterando apenas a luminosidade. A cor sugerida mantém-se coerente com a identidade visual, respeitando a norma de
            acessibilidade.
          </p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionFeatureComparison
          title="O que significam os níveis AA e AAA na norma WCAG?"
          plans={[
            { id: 'aa', name: 'Nível AA (mínimo)', highlighted: true },
            { id: 'aaa', name: 'Nível AAA (melhorado)' },
          ]}
          features={[
            { name: 'Texto normal – mín. 4,5:1', values: { aa: true, aaa: true } },
            { name: 'Texto normal – mín. 7:1', values: { aa: false, aaa: true } },
            { name: 'Texto grande / negrito – mín. 3:1', values: { aa: true, aaa: true } },
            { name: 'Texto grande / negrito – mín. 4,5:1', values: { aa: false, aaa: true } },
            { name: 'Ícones e elementos de interface – mín. 3:1', values: { aa: true, aaa: true } },
            { name: 'Legalmente obrigatório (diretiva UE)', values: { aa: true, aaa: false } },
            { name: 'Recomendado para conteúdo essencial', values: { aa: true, aaa: true } },
          ]}
        />

        <Gap variant="line" />

        <SectionInfo title="Resolução de problemas do verificador de contraste">
          <h3 className="h5 mb-2">Mensagem de erro de formato de cor</h3>
          <p className="text-mid mb-4">
            Verifique o formato da cor. Um código HEX deve começar por <code className="rounded bg-black/5 px-1">#</code> e conter 3 ou 6 caracteres (por ex.{' '}
            <code className="rounded bg-black/5 px-1">#fff</code> ou <code className="rounded bg-black/5 px-1">#ffffff</code>). Para o formato RGB, verifique se os valores estão separados por vírgulas
            e compreendidos entre 0 e 255.
          </p>

          <h3 className="h5 mb-2">A função Ajustar não encontra uma cor adequada</h3>
          <p className="text-mid mb-4">
            Quando o fundo e o texto têm luminosidade semelhante na mesma tonalidade, o algoritmo pode não encontrar uma variante conforme às exigências sem alterar a tonalidade. Neste caso, considere
            modificar a cor de fundo ou escolher uma cor de texto completamente diferente.
          </p>

          <h3 className="h5 mb-2">A cor no seletor não corresponde ao código introduzido</h3>
          <p className="text-mid">
            O seletor de cores do navegador suporta apenas o formato HEX sem transparência. Se introduzir uma cor no formato RGBA ou HSLA com transparência, o seletor mostrará apenas a parte colorida
            (sem alfa). Os cálculos de contraste continuam a ter em conta a transparência.
          </p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionSteps
          title="Onde verificar a legibilidade das cores?"
          description="A legibilidade é importante em qualquer lugar onde alguém tenha de ler texto ou reconhecer um elemento de interface:"
          grid="three"
          items={[
            {
              icon: <RiGlobalLine className="h-6 w-6" />,
              title: 'Sites',
              description: 'Texto das páginas, botões, links, formulários. Particularmente importante para sites de empresas cujos visitantes têm idades e capacidades visuais variadas.',
            },
            {
              icon: <RiShoppingCartLine className="h-6 w-6" />,
              title: 'Lojas online',
              description: 'Preços, botões Comprar, informação de produto. Uma legibilidade fraca pode significar encomendas perdidas.',
            },
            {
              icon: <RiSlideshowLine className="h-6 w-6" />,
              title: 'Apresentações',
              description: 'Os diapositivos projetados têm frequentemente contraste mais fraco do que num monitor. Verifique as cores antes de apresentar.',
            },
            {
              icon: <RiPrinterLine className="h-6 w-6" />,
              title: 'Cartazes e flyers',
              description: 'Os suportes impressos vistos em condições de iluminação variadas necessitam de contraste elevado.',
            },
            { icon: <RiSmartphoneLine className="h-6 w-6" />, title: 'Aplicações móveis', description: 'Os telemóveis são usados ao sol, à noite e por pessoas de todas as idades.' },
            {
              icon: <RiRestaurantLine className="h-6 w-6" />,
              title: 'Menus de restaurante',
              description: 'Frequentemente impressos em papel de cor ou com tipos de letra decorativos: é fácil obter contraste demasiado fraco.',
            },
          ]}
        />

        <Gap variant="line" />

        <SectionInfo title="Legibilidade das cores para pessoas daltónicas">
          <p className="text-mid mb-4">
            O daltonismo é uma perturbação da perceção das cores que afeta cerca de 8{'\u00a0'}% dos homens e 0,5{'\u00a0'}% das mulheres. As pessoas daltónicas podem ter dificuldade em distinguir
            certos pares de cores, mesmo que o contraste de luminosidade seja suficiente.
          </p>
          <p className="text-mid mb-4">Tipos mais comuns de daltonismo:</p>
          <ul className="text-mid list-disc space-y-2 pl-5">
            <li>
              <strong>Deuteranopia</strong> – dificuldade em distinguir o verde do vermelho (forma mais comum)
            </li>
            <li>
              <strong>Protanopia</strong> – dificuldade em percecionar o vermelho
            </li>
            <li>
              <strong>Tritanopia</strong> – dificuldade em percecionar o azul e o amarelo (rara)
            </li>
          </ul>
          <p className="text-mid mt-3">
            Esta ferramenta verifica o contraste de luminosidade, que é importante para todos os utilizadores. No entanto, ao conceber, convém evitar combinações de cores problemáticas (por ex. texto
            vermelho sobre fundo verde) e não depender apenas da cor para transmitir informação – utilize também formas, ícones e texto.
          </p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionSteps
          title="O que torna este verificador especial?"
          grid="two"
          items={[
            {
              icon: <RiEyeLine className="h-6 w-6" />,
              title: 'Avaliação objetiva baseada numa fórmula matemática',
              description: 'O rácio de contraste é calculado com a fórmula WCAG: o resultado não depende da configuração do monitor nem da perceção individual das cores.',
            },
            {
              icon: <RiShieldCheckLine className="h-6 w-6" />,
              title: 'Conformidade com a norma internacional WCAG',
              description: 'Os resultados correspondem às exigências das WCAG 2.1, que constituem a base das regulamentações de acessibilidade digital na UE e em muitos outros países.',
            },
            {
              icon: <RiMagicLine className="h-6 w-6" />,
              title: 'Ajuste automático da cor ao limiar',
              description: 'A função Ajustar encontra uma variante de cor de texto conforme ao limiar de contraste selecionado: preserva a tonalidade, altera apenas a luminosidade.',
            },
            {
              icon: <RiStackLine className="h-6 w-6" />,
              title: 'Cinco formatos de cor',
              description: 'Formatos suportados: HEX, RGB, RGBA, HSL e HSLA. O código de cor pode ser colado diretamente do Figma, Photoshop ou de uma folha de estilos CSS.',
            },
            {
              icon: <RiInfinityLine className="h-6 w-6" />,
              title: 'Três tipos de conteúdo num único teste',
              description: 'Uma única verificação mostra o resultado para texto normal, texto grande (títulos, botões) e ícones: não é preciso testar cada tipo separadamente.',
            },
          ]}
        />

        <Gap variant="line" />

        <FaqPanels
          pageUrl={toAbsoluteUrl('/pt/ferramentas/verificador-de-contraste-de-cores')}
          title="Perguntas frequentes sobre o verificador de contraste"
          openByDefault={1}
          items={[
            ...faqItems,
            {
              question: 'Porque é que a minha cor não passa no teste se eu a vejo bem?',
              answer:
                'A perceção pessoal das cores depende das definições do monitor, da iluminação ambiente e das capacidades visuais individuais. A norma WCAG baseia-se numa fórmula matemática objetiva que tem em conta diferentes perturbações da visão. Uma cor legível num ecrã pode ser ilegível noutro ou para outra pessoa.',
              answerSchemaText: 'A perceção depende do monitor, da iluminação e da visão. As WCAG utilizam uma fórmula objetiva.',
            },
            {
              question: 'Onde encontrar os códigos de cor do meu site?',
              answer:
                'No navegador (Chrome, Firefox, Edge), abra as ferramentas de programador (clique direito → Inspecionar). No separador Estilos, verá as cores utilizadas na página. Em alternativa, extensões como ColorZilla permitem obter a cor de qualquer elemento sem tocar no código.',
              answerSchemaText: 'Ferramentas de programador do navegador (clique direito → Inspecionar → Estilos) ou extensões como ColorZilla.',
            },
            {
              question: 'Que pares de cores do meu site verificar primeiro?',
              answer:
                'Os mais importantes: o texto sobre o fundo principal, o texto sobre banners e secções coloridas, os botões (cor do texto e fundo do botão em relação ao fundo da página), os links e os ícones. Preste atenção especial aos elementos que aparecem sobre fundos diferentes conforme as secções.',
              answerSchemaText: 'Verifique primeiro o texto sobre o fundo principal, banners, botões, links e ícones.',
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
