import Script from 'next/script';
import HeroBanner from '@/components/sections/HeroBanner';
import Breadcrumbs from '@/components/sections/BreadCrumbs';
import QrCodeGenerator from '@/components/sections/tools/QrCodeGenerator';
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
  RiQrCodeLine,
  RiDownloadLine,
  RiSettings3Line,
  RiGlobalLine,
  RiContactsLine,
  RiPaletteLine,
  RiInfinityLine,
  RiFileTextLine,
  RiMailLine,
  RiPhoneLine,
  RiShieldCheckLine,
  RiRulerLine,
  RiPrinterLine,
  RiSmartphoneLine,
  RiContactsBookLine,
  RiRestaurantLine,
  RiBuilding2Line,
  RiHome4Line,
  RiTruckLine,
  RiShoppingCartLine,
  RiCalendarEventLine,
  RiHospitalLine,
  RiContrastLine,
  RiLayoutGridLine,
  RiEyeLine,
  RiLockLine,
  RiStackLine,
} from 'react-icons/ri';

const LOCALE = 'pt' as const;
const TOOL_KEY = 'qrCode' as const;

export const metadata: Metadata = {
  title: 'Gerador de códigos QR gratuito online – PNG e SVG',
  description: 'Gerador de códigos QR gratuito online. Crie códigos QR para sites, vCards, menus ou flyers. Exportação em PNG e SVG, sem registo, sem limite.',
  alternates: getToolAlternates(TOOL_KEY, LOCALE),
  openGraph: {
    title: 'Gerador de códigos QR gratuito online',
    description: 'Crie códigos QR para sites, vCards, menus ou flyers. Exportação em PNG e SVG, sem registo.',
    url: toAbsoluteUrl('/pt/ferramentas/gerador-de-codigos-qr-gratuito'),
    type: 'website',
    images: [{ url: toAbsoluteUrl('/assets/tools/narzedzia-generator-kodu-qr.webp'), width: 1200, height: 630 }],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Gerador de códigos QR gratuito online – PNG e SVG',
  alternateName: ['Gerador de códigos QR online', 'Código QR para site', 'Gerador de vCard QR', 'Código QR para menu de restaurante', 'Código QR personalizado'],
  url: toAbsoluteUrl('/pt/ferramentas/gerador-de-codigos-qr-gratuito'),
  applicationCategory: 'UtilitiesApplication',
  applicationSubCategory: 'QRCodeGenerator',
  operatingSystem: 'Any',
  description: 'Gerador de códigos QR gratuito. Crie códigos QR para URL, vCards, texto, e-mail e telefone. Cores e tamanho personalizáveis. Exportação em PNG e SVG.',
  featureList: [
    'Códigos QR para URL, vCard, texto, e-mail, telefone',
    'Cores personalizáveis (primeiro plano e fundo)',
    'Tamanho ajustável',
    'Exportação em PNG e SVG',
    'Execução local no navegador',
    'Sem registo e sem limite',
  ],
  inLanguage: 'pt',
  isAccessibleForFree: true,
  offers: { '@type': 'Offer', price: 0, priceCurrency: 'EUR' },
  publisher: { '@type': 'Organization', name: 'Arteon Agency', url: siteUrl },
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Como criar um código QR',
  description: 'Introduza o conteúdo (URL, vCard, texto), personalize as cores e o tamanho, depois transfira o código QR em PNG ou SVG.',
  url: toAbsoluteUrl('/pt/ferramentas/gerador-de-codigos-qr-gratuito'),
  step: [
    { '@type': 'HowToStep', name: 'Escolher o tipo de conteúdo', text: 'Selecione o tipo de código QR: URL, vCard, texto, e-mail ou telefone.' },
    { '@type': 'HowToStep', name: 'Introduzir o conteúdo', text: 'Introduza o URL, os dados de contacto ou o texto que o código QR deve conter.' },
    { '@type': 'HowToStep', name: 'Personalizar e transferir', text: 'Ajuste as cores e o tamanho, depois transfira o código QR em PNG ou SVG.' },
  ],
  publisher: { '@type': 'Organization', name: 'Arteon Agency', url: siteUrl },
};

const faqItems = [
  {
    question: 'Que tipos de códigos QR posso criar?',
    answer:
      'Pode criar códigos QR para: URLs de sites (o tipo mais comum), vCards (cartão de visita digital com nome, telefone, e-mail), texto livre, endereços de e-mail (abertura da aplicação de e-mail) e números de telefone (chamada direta).',
    answerSchemaText: 'URL, vCard, texto, e-mail, telefone.',
  },
  {
    question: 'Que formatos de transferência estão disponíveis?',
    answer:
      'O código QR pode ser transferido em PNG (imagem raster, ideal para a web e apresentações) e em SVG (imagem vetorial, ideal para impressão sem perda de qualidade em qualquer tamanho).',
    answerSchemaText: 'PNG (raster, para a web) e SVG (vetorial, para impressão).',
  },
  {
    question: 'Posso personalizar as cores do código QR?',
    answer:
      'Sim. Pode modificar a cor de primeiro plano (os módulos) e a cor de fundo do código QR. Certifique-se de manter contraste suficiente para que o código permaneça legível pelos leitores.',
    answerSchemaText: 'Sim. Cor de primeiro plano e de fundo personalizáveis.',
  },
  {
    question: 'Que tamanho de código QR é recomendado?',
    answer:
      'Para a web, 200–400 píxeis são geralmente suficientes. Para impressão, utilize o formato SVG ou um PNG de pelo menos 600 píxeis. Para flyers ou cartazes, um código QR de pelo menos 2 cm × 2 cm a 300 DPI é recomendado.',
    answerSchemaText: 'Web: 200–400 px. Impressão: SVG ou PNG 600 px+. Flyers: mín. 2 cm × 2 cm a 300 DPI.',
  },
  {
    question: 'O que é uma vCard num código QR?',
    answer:
      'Uma vCard é um cartão de visita digital. Quando um utilizador digitaliza o código QR, os dados de contacto (nome, telefone, e-mail, empresa) são adicionados diretamente aos contactos do telefone – sem introdução manual.',
    answerSchemaText: 'Cartão de visita digital. A digitalização adiciona os dados diretamente aos contactos do telefone.',
  },
  {
    question: 'Os meus dados são enviados para um servidor?',
    answer: 'Não. O código QR é gerado localmente no seu navegador. Nenhum dado é enviado nem armazenado.',
    answerSchemaText: 'Não. Geração local no navegador.',
  },
];

export default function QrCodeGeneratorPage() {
  return (
    <>
      <Script id="ld-json-qr-code-pt" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Script id="ld-json-qr-howto-pt" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />

      <HeroBanner
        title="Gerador de códigos QR"
        description="Crie códigos QR para sites, vCards, menus ou flyers. Personalize as cores e o tamanho, depois transfira em PNG ou SVG – tudo é executado localmente no seu navegador."
        overlay="black"
        backgroundImage="/assets/tools/narzedzia-generator-kodu-qr.webp"
      />

      <Breadcrumbs second={{ href: '/pt/ferramentas', label: 'Ferramentas' }} third={{ href: '/pt/ferramentas/gerador-de-codigos-qr-gratuito', label: 'Gerador QR' }} includeJsonLd locale="pt" />

      <ToolEditorLayout>
        <AdSense variant="tool-banner" className="my-3" />
        <QrCodeGenerator />
      </ToolEditorLayout>

      <Wrapper>
        <Gap variant="line" />

        <SectionInfo title="Porquê utilizar códigos QR?">
          <p className="text-mid">
            Os códigos QR tornaram-se uma ferramenta essencial para ligar o mundo físico ao mundo digital. Permitem aos utilizadores aceder instantaneamente a um site, adicionar dados de contacto aos seus
            contactos ou consultar um menu – simplesmente digitalizando o código com o telefone.
          </p>
          <p className="text-mid mt-3">
            Esta ferramenta gera códigos QR para diferentes tipos de conteúdo: URL, vCards, texto, e-mail e telefone. Pode personalizar as cores e o tamanho, depois transferir o código em PNG (para a web)
            ou SVG (para impressão).
          </p>
        </SectionInfo>

        <Gap size="sm" />

        <SectionSteps
          title="Como usar o gerador"
          description="A criação de um código QR demora apenas alguns segundos:"
          grid="three"
          items={[
            { icon: <RiQrCodeLine className="h-6 w-6" />, title: '1. Escolher o tipo', description: 'Selecione o tipo de conteúdo: URL, vCard, texto, e-mail ou telefone.' },
            { icon: <RiSettings3Line className="h-6 w-6" />, title: '2. Introduzir e personalizar', description: 'Introduza o conteúdo, ajuste as cores e o tamanho do código QR.' },
            { icon: <RiDownloadLine className="h-6 w-6" />, title: '3. Transferir', description: 'Transfira o código QR em PNG ou SVG.' },
          ]}
        />

        <Gap variant="line" />

        <SectionSteps
          title="Tipos de códigos QR"
          description="Escolha o tipo de conteúdo adequado à sua necessidade:"
          grid="three"
          items={[
            { icon: <RiGlobalLine className="h-6 w-6" />, title: 'URL / Site', description: 'Redirecione os utilizadores para o seu site, landing page ou loja online.' },
            { icon: <RiContactsLine className="h-6 w-6" />, title: 'vCard', description: 'Cartão de visita digital – a digitalização adiciona os seus dados aos contactos do telefone.' },
            { icon: <RiFileTextLine className="h-6 w-6" />, title: 'Texto', description: 'Texto livre – código Wi-Fi, mensagem, instruções ou qualquer outro texto curto.' },
            { icon: <RiMailLine className="h-6 w-6" />, title: 'E-mail', description: 'Abre a aplicação de e-mail com o endereço, o assunto e o corpo pré-preenchidos.' },
            { icon: <RiPhoneLine className="h-6 w-6" />, title: 'Telefone', description: 'Chamada direta – a digitalização inicia uma chamada para o número indicado.' },
            { icon: <RiPaletteLine className="h-6 w-6" />, title: 'Personalização', description: 'Cores de primeiro plano e de fundo livremente configuráveis.' },
          ]}
        />

        <Gap variant="line" />

        <SectionDemo
          title="PNG ou SVG – que formato escolher?"
          demo={
            <div className="space-y-3">
              <div className="flex items-center gap-3 rounded-lg border border-neutral-200 bg-white p-3">
                <RiSmartphoneLine className="text-primary-light0 h-5 w-5 shrink-0" />
                <div className="text-mid text-sm!">
                  <strong>PNG</strong> – imagem raster. Ideal para a web, e-mails e apresentações.
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-lg border border-neutral-200 bg-white p-3">
                <RiPrinterLine className="text-primary-light0 h-5 w-5 shrink-0" />
                <div className="text-mid text-sm!">
                  <strong>SVG</strong> – imagem vetorial. Ideal para impressão (flyers, cartazes, cartões de visita). Qualidade perfeita em qualquer tamanho.
                </div>
              </div>
            </div>
          }
        >
          <p className="text-mid">A escolha do formato depende da utilização prevista:</p>
          <ul className="text-mid mt-3 list-disc space-y-2 pl-5">
            <li>
              <strong>PNG</strong> – para a web, e-mails e apresentações. Tamanho recomendado: 200–400 px.
            </li>
            <li>
              <strong>SVG</strong> – para impressão. Escalável sem perda de qualidade, ideal para flyers, cartazes e cartões de visita.
            </li>
          </ul>
        </SectionDemo>

        <Gap variant="line" />

        <SectionSteps
          title="Aplicações dos códigos QR: cartões de visita, flyers, menus"
          description="Os códigos QR são utilizados em numerosos setores e cenários:"
          grid="three"
          items={[
            {
              icon: <RiContactsBookLine className="h-6 w-6" />,
              title: 'Cartões de visita',
              description: 'Um código vCard num cartão de visita permite ao destinatário guardar o contacto com uma única digitalização, sem introdução manual.',
            },
            {
              icon: <RiRestaurantLine className="h-6 w-6" />,
              title: 'Menus de restaurante',
              description: 'Um código QR na mesa redireciona para o menu digital. Uma solução higiénica muito difundida desde a pandemia de COVID-19.',
            },
            { icon: <RiPrinterLine className="h-6 w-6" />, title: 'Flyers e cartazes', description: 'Código QR com link para uma página de produto, formulário de inscrição ou oferta especial.' },
            { icon: <RiBuilding2Line className="h-6 w-6" />, title: 'Embalagens de produtos', description: 'Link para o manual de utilização, cartão de garantia ou site do fabricante.' },
            {
              icon: <RiHospitalLine className="h-6 w-6" />,
              title: 'Consultórios médicos',
              description: 'Códigos QR nos cartões de paciente que redirecionam para o portal do paciente ou sistema de marcação de consultas.',
            },
            { icon: <RiHome4Line className="h-6 w-6" />, title: 'Imobiliário', description: 'Códigos nos painéis que redirecionam para o anúncio completo com galeria de fotos e detalhes.' },
            {
              icon: <RiTruckLine className="h-6 w-6" />,
              title: 'Armazéns e logística',
              description: 'Etiquetas QR para rastrear lotes de produtos, localizações de armazenamento e histórico de envios.',
            },
            {
              icon: <RiShoppingCartLine className="h-6 w-6" />,
              title: 'E-commerce',
              description: 'Códigos nas embalagens que redirecionam para instruções de devolução, avaliações de clientes ou programas de fidelização.',
            },
            { icon: <RiCalendarEventLine className="h-6 w-6" />, title: 'Eventos e conferências', description: 'Bilhetes com códigos QR para verificação rápida na entrada.' },
          ]}
        />

        <Gap variant="line" />

        <SectionDemo
          title="Personalização da aparência do código QR"
          variant="left"
          demo={
            <div className="space-y-3">
              <div className="flex items-center justify-between rounded-lg border border-neutral-200 bg-white p-3">
                <span className="text-dark text-sm! font-medium">Tamanho</span>
                <Badge variant="default" size="sm">
                  300 px
                </Badge>
              </div>
              <div className="flex items-center justify-between rounded-lg border border-neutral-200 bg-white p-3">
                <span className="text-dark text-sm! font-medium">Margem</span>
                <Badge variant="default" size="sm">
                  4
                </Badge>
              </div>
              <div className="flex items-center gap-3 rounded-lg border border-neutral-200 bg-white p-3">
                <span className="text-dark text-sm! font-medium">Cor do código</span>
                <span className="inline-block h-6 w-6 rounded border border-neutral-200" style={{ backgroundColor: '#000000' }} />
              </div>
              <div className="flex items-center gap-3 rounded-lg border border-neutral-200 bg-white p-3">
                <span className="text-dark text-sm! font-medium">Cor de fundo</span>
                <span className="inline-block h-6 w-6 rounded border border-neutral-200" style={{ backgroundColor: '#ffffff' }} />
              </div>
            </div>
          }
        >
          <p className="text-mid mb-4">O gerador permite personalizar vários parâmetros que afetam a aparência e a legibilidade do código:</p>
          <ul className="text-mid list-disc space-y-2 pl-5">
            <li>
              <strong>Tamanho (px)</strong> – dimensão do código em píxeis. Para impressão standard (flyers, cartões de visita), escolha 300-500 px. Para uso digital, 150-200 px são suficientes.
            </li>
            <li>
              <strong>Margem</strong> – zona branca à volta do código necessária para uma digitalização correta. O valor recomendado é 2-4. Um valor de 0 pode dificultar a digitalização em fundo escuro.
            </li>
            <li>
              <strong>Cor do código QR</strong> – preto por predefinição (#000000). Pode alterá-la para qualquer cor escura que corresponda à sua identidade visual.
            </li>
            <li>
              <strong>Cor de fundo</strong> – branco por predefinição (#ffffff). Pode alterá-la para qualquer cor clara. O gerador avisará se o contraste for demasiado fraco.
            </li>
          </ul>
          <p className="text-mid mt-3">
            <strong>Dica:</strong> Mantenha contraste elevado entre o código e o fundo (mínimo 3:1). Um código escuro em fundo claro digitaliza-se mais facilmente.
          </p>
        </SectionDemo>

        <Gap variant="line" />

        <SectionDemo
          title="Níveis de correção de erros: L, M, Q, H"
          demo={
            <div className="space-y-2">
              {[
                { level: 'L', pct: '7%', label: 'Baixo', width: '7%' },
                { level: 'M', pct: '15%', label: 'Médio', width: '15%' },
                { level: 'Q', pct: '25%', label: 'Quartil', width: '25%' },
                { level: 'H', pct: '30%', label: 'Alto', width: '30%' },
              ].map((item) => (
                <div key={item.level} className="rounded-lg border border-neutral-200 bg-white p-3">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-dark text-sm! font-medium">
                      {item.level} ({item.label})
                    </span>
                    <Badge variant={item.level === 'M' ? 'selected' : 'default'} size="sm">
                      {item.pct}
                    </Badge>
                  </div>
                  <div className="h-2 w-full rounded-full bg-neutral-100">
                    <div className="bg-primary h-2 rounded-full" style={{ width: `${parseInt(item.pct)}%`, minWidth: '12px' }} />
                  </div>
                </div>
              ))}
            </div>
          }
        >
          <p className="text-mid mb-4">
            A correção de erros é um mecanismo que permite ler um código QR mesmo quando uma parte está danificada, suja ou oculta. O gerador utiliza o algoritmo Reed-Solomon, um padrão para códigos QR.
          </p>
          <ul className="text-mid list-disc space-y-2 pl-5">
            <li>
              <strong>L (Baixo) – 7 %</strong> – redundância mínima, o código é mais compacto. A escolher quando o código será utilizado em condições ideais (ecrã, impressão de alta qualidade).
            </li>
            <li>
              <strong>M (Médio) – 15 %</strong> – valor predefinido, bom equilíbrio entre capacidade e resistência. Adequado para a maioria dos usos.
            </li>
            <li>
              <strong>Q (Quartil) – 25 %</strong> – resistência acrescida a danos. A escolher para códigos impressos em materiais suscetíveis de se sujar.
            </li>
            <li>
              <strong>H (Alto) – 30 %</strong> – resistência máxima. Recomendado para suportes exteriores, embalagens e situações em que o código pode ficar parcialmente oculto (ex.: logótipo ao centro).
            </li>
          </ul>
          <p className="text-mid mt-3">
            <strong>Nota:</strong> Um nível de correção mais elevado significa um código maior e mais complexo. Com grandes quantidades de dados e o nível H, o código pode tornar-se muito denso.
          </p>
        </SectionDemo>

        <Gap variant="line" />

        <SectionFeatureComparison
          title="PNG vs SVG: que formato escolher para impressão?"
          plans={[
            { id: 'png', name: 'PNG (raster)' },
            { id: 'svg', name: 'SVG (vetorial)', highlighted: true },
          ]}
          features={[
            { name: 'Sites e redes sociais', values: { png: true, svg: true } },
            { name: 'Flyers e cartões de visita', values: { png: true, svg: true } },
            { name: 'Cartazes e faixas (grande formato)', values: { png: false, svg: true } },
            { name: 'Escalável sem perda de qualidade', values: { png: false, svg: true } },
            { name: 'Edição em software gráfico', values: { png: false, svg: true } },
            { name: 'Tamanho de ficheiro reduzido', values: { png: false, svg: true } },
            { name: 'Apresentações', values: { png: true, svg: true } },
          ]}
        />

        <Gap variant="line" />

        <SectionSteps
          title="Dicas para impressão de códigos QR"
          description="Para garantir a legibilidade do código QR após impressão, siga estas regras:"
          grid="two"
          items={[
            {
              icon: <RiRulerLine className="h-6 w-6" />,
              title: 'Tamanho mínimo',
              description: 'O código deve medir pelo menos 2×2 cm para digitalização a curta distância. Quanto maior a distância de digitalização, maior deve ser o código.',
            },
            { icon: <RiContrastLine className="h-6 w-6" />, title: 'Contraste', description: 'Código escuro em fundo claro. Evite cores pastel e contraste fraco.' },
            {
              icon: <RiLayoutGridLine className="h-6 w-6" />,
              title: 'Margem à volta do código',
              description: 'Conserve um espaço vazio à volta do código. Não coloque outros elementos gráficos demasiado perto: a margem é essencial para uma digitalização correta.',
            },
            { icon: <RiEyeLine className="h-6 w-6" />, title: 'Testes', description: 'Antes da impressão em massa, teste o código em diferentes telefones e em diversas condições de iluminação.' },
            {
              icon: <RiShieldCheckLine className="h-6 w-6" />,
              title: 'Nível de correção',
              description: 'Para impressão exterior e materiais sujeitos a desgaste, escolha o nível Q ou H.',
            },
          ]}
        />

        <Gap variant="line" />

        <SectionSteps
          title="O que torna este gerador especial?"
          grid="two"
          items={[
            {
              icon: <RiInfinityLine className="h-6 w-6" />,
              title: 'Geração local no navegador',
              description: 'Os dados introduzidos no gerador não são enviados para nenhum servidor: todo o processamento é feito localmente no seu dispositivo.',
            },
            {
              icon: <RiLockLine className="h-6 w-6" />,
              title: 'Cinco tipos de dados numa ferramenta',
              description: 'URL, texto, cartão de visita vCard, e-mail e telefone: cada tipo gera um código QR no padrão apropriado.',
            },
            {
              icon: <RiStackLine className="h-6 w-6" />,
              title: 'Personalização da aparência',
              description: 'Cores do código e do fundo, tamanho em píxeis, margem e nível de correção de erros: cada parâmetro é configurável.',
            },
            {
              icon: <RiPaletteLine className="h-6 w-6" />,
              title: 'Quatro níveis de correção de erros',
              description: 'O algoritmo Reed-Solomon permite escolher a resistência do código a danos: de 7 % (L) a 30 % (H).',
            },
            { icon: <RiEyeLine className="h-6 w-6" />, title: 'Pré-visualização em tempo real', description: 'Veja o resultado imediatamente após a introdução, sem clicar em «Gerar».' },
            { icon: <RiDownloadLine className="h-6 w-6" />, title: 'Exportação PNG e SVG', description: 'Transfira o código no formato adequado ao seu uso.' },
          ]}
        />

        <Gap variant="line" />

        <FaqPanels
          pageUrl={toAbsoluteUrl('/pt/ferramentas/gerador-de-codigos-qr-gratuito')}
          title="Perguntas frequentes sobre o gerador de códigos QR"
          openByDefault={1}
          items={[
            ...faqItems,
            {
              question: 'Um código QR gerado com esta ferramenta expira?',
              answer:
                'Não. Um código QR estático (como o gerado por esta ferramenta) não expira. O conteúdo – por ex. um URL ou dados de cartão de visita – está codificado diretamente no código. Enquanto a página de destino existir, o código funcionará.',
              answerSchemaText: 'Não. Os códigos QR estáticos não expiram. O conteúdo está codificado diretamente no código.',
            },
            {
              question: 'Em que é que uma vCard difere de um código QR com texto?',
              answer:
                'Um código QR vCard contém dados de contacto num formato padronizado (nome, empresa, telefone, e-mail, morada). Ao digitalizar, o telefone propõe automaticamente guardar o contacto no diretório. Um código de texto mostra os dados em texto simples – sem gravação automática.',
              answerSchemaText: 'vCard = formato de contacto padronizado com gravação automática. Texto = texto simples apenas.',
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
