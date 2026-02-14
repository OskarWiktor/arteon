import Script from 'next/script';
import HeroBanner from '@/components/sections/HeroBanner';
import Breadcrumbs from '@/components/sections/BreadCrumbs';
import EmailSignatureGenerator from '@/components/sections/tools/EmailSignatureGenerator';
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
  RiMailLine,
  RiPaletteLine,
  RiFileCopyLine,
  RiSettings3Line,
  RiShieldCheckLine,
  RiInfinityLine,
  RiLayoutLine,
  RiUserLine,
  RiLinksLine,
  RiImageLine,
  RiFontSize,
  RiGlobalLine,
  RiSmartphoneLine,
  RiSaveLine,
  RiClipboardLine,
  RiBriefcaseLine,
  RiTeamLine,
  RiHandCoinLine,
  RiScales3Line,
  RiTranslate2,
  RiAppsLine,
  RiFileCodeLine,
  RiMailCheckLine,
  RiEyeLine,
} from 'react-icons/ri';

const LOCALE = 'pt' as const;
const TOOL_KEY = 'emailSignature' as const;

export const metadata: Metadata = {
  title: 'Gerador de assinatura de e-mail gratuito online – HTML para Gmail e Outlook',
  description: 'Gerador gratuito de assinatura de e-mail HTML. Adicione os seus dados de contacto, link CTA e perfis de redes sociais, depois copie o código HTML para o Gmail ou Outlook. Sem registo.',
  alternates: getToolAlternates(TOOL_KEY, LOCALE),
  openGraph: {
    title: 'Gerador de assinatura de e-mail gratuito online',
    description: 'Crie uma assinatura de e-mail profissional em minutos. Copie o código HTML para o Gmail ou Outlook.',
    url: toAbsoluteUrl('/pt/ferramentas/gerador-de-assinatura-de-email-gratuito'),
    type: 'website',
    images: [{ url: toAbsoluteUrl('/assets/tools/narzedzia-darmowy-generator-stopki-mailowej.webp'), width: 1200, height: 630 }],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Gerador de assinatura de e-mail HTML – Gmail e Outlook',
  alternateName: ['Criar assinatura de e-mail online', 'Gerador de assinatura HTML', 'Gerador de assinatura Gmail', 'Gerador de assinatura Outlook', 'Assinatura de e-mail profissional'],
  url: toAbsoluteUrl('/pt/ferramentas/gerador-de-assinatura-de-email-gratuito'),
  applicationCategory: 'BusinessApplication',
  applicationSubCategory: 'EmailTool',
  operatingSystem: 'Any',
  description: 'Gerador gratuito de assinatura de e-mail HTML. 8 layouts, cores personalizáveis, ícones de redes sociais, link CTA. Para Gmail, Outlook e outros clientes. Execução local.',
  featureList: [
    '8 layouts: Standard, Barra superior, Labels à esquerda, Centrado, Compacto, Duas colunas, Minimalista, Barra inferior',
    'Cores e tipos de letra personalizáveis',
    'Ícones de redes sociais (12 plataformas)',
    'Botão CTA / Link de ação',
    'Foto de perfil e logótipo da empresa',
    'Aviso legal / Disclaimer',
    'Exportação e importação de definições',
    'Cópia em texto formatado ou código HTML',
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
  name: 'Como criar uma assinatura de e-mail profissional',
  description: 'Crie uma assinatura de e-mail HTML com os seus dados de contacto, links de redes sociais e botão CTA. Copie o código para o Gmail ou Outlook.',
  url: toAbsoluteUrl('/pt/ferramentas/gerador-de-assinatura-de-email-gratuito'),
  step: [
    { '@type': 'HowToStep', name: 'Introduzir os dados', text: 'Preencha nome, cargo, empresa, telefone, e-mail e site.' },
    { '@type': 'HowToStep', name: 'Escolher o layout e o design', text: 'Selecione um dos 8 layouts e personalize cores, tipo de letra e espaçamentos.' },
    { '@type': 'HowToStep', name: 'Adicionar redes sociais e CTA', text: 'Adicione opcionalmente links de redes sociais e um botão CTA.' },
    { '@type': 'HowToStep', name: 'Copiar a assinatura', text: 'Copie a assinatura em texto formatado (para Gmail/Outlook) ou em código HTML.' },
  ],
  publisher: { '@type': 'Organization', name: 'Arteon Agency', url: siteUrl },
};

const faqItems = [
  {
    question: 'Como inserir a assinatura no Gmail?',
    answer:
      'Clique em «Copiar a assinatura (Gmail / Outlook)», abra Gmail → Definições → Ver todas as definições → Assinatura, depois cole com Ctrl+V (ou Cmd+V). A formatação é automaticamente mantida – cores, links e ícones de redes sociais permanecem intactos.',
    answerSchemaText: 'Copiar a assinatura, Gmail → Definições → Assinatura, Ctrl+V.',
  },
  {
    question: 'A assinatura funciona no Outlook?',
    answer:
      'Sim. No Outlook Desktop: Ficheiro → Opções → Correio → Assinaturas → Colar. No Outlook Web (OWA): Definições → Correio → Composição e resposta → Assinatura. Ambas as variantes suportam texto formatado.',
    answerSchemaText: 'Sim. Desktop: Ficheiro → Opções → Assinaturas. Web: Definições → Correio → Assinatura.',
  },
  {
    question: 'Que layouts estão disponíveis?',
    answer:
      '8 layouts: Standard, Barra superior, Labels à esquerda, Centrado, Compacto, Duas colunas, Minimalista e Barra inferior. Cada layout organiza de forma diferente os dados de contacto, a foto de perfil e os ícones de redes sociais.',
    answerSchemaText: '8 layouts: Standard, Barra sup., Labels esq., Centrado, Compacto, Duas colunas, Minimalista, Barra inf.',
  },
  {
    question: 'Posso adicionar links de redes sociais?',
    answer:
      'Sim. Pode adicionar links para LinkedIn, Instagram, Facebook, TikTok, YouTube, X (Twitter), GitHub, Dribbble, Behance, WhatsApp, Telegram e Pinterest. Apenas as plataformas com URL preenchido aparecem na assinatura.',
    answerSchemaText: '12 plataformas: LinkedIn, Instagram, Facebook, TikTok, YouTube, X, GitHub, Dribbble, Behance, WhatsApp, Telegram, Pinterest.',
  },
  {
    question: 'Posso adicionar uma foto de perfil ou um logótipo?',
    answer:
      'Sim. Pode indicar um URL de imagem para a sua foto de perfil e/ou o logótipo da empresa. A imagem aparece na assinatura. Utilize um URL acessível publicamente (ex.: a partir do seu site).',
    answerSchemaText: 'Sim. Foto de perfil e logótipo via URL.',
  },
  {
    question: 'Os meus dados são armazenados?',
    answer:
      'Todos os dados são armazenados localmente no seu navegador (localStorage). Nada é enviado para um servidor. Pode exportar e importar as definições para transferir a assinatura entre dispositivos.',
    answerSchemaText: 'Localmente no navegador (localStorage). Sem envio para servidor. Exportação/importação possível.',
  },
  {
    question: 'O que é um link CTA na assinatura?',
    answer:
      'Um link CTA (Call to Action) é um botão ou link opcional na parte inferior da assinatura – ex.: «Marcar reunião», «Pedir orçamento» ou «Ver portfólio». Redireciona o destinatário diretamente para uma página à sua escolha.',
    answerSchemaText: 'Um link de ação opcional como «Marcar reunião» na parte inferior da assinatura.',
  },
  {
    question: 'Posso adicionar um aviso legal?',
    answer:
      'Sim. A ferramenta inclui um campo para aviso legal (disclaimer). O texto é apresentado em tamanho mais pequeno sob a assinatura – ex.: avisos de confidencialidade ou informações RGPD.',
    answerSchemaText: 'Sim. Campo dedicado para disclaimer/RGPD sob a assinatura.',
  },
  {
    question: 'Como exportar ou importar as definições da assinatura?',
    answer:
      'Abaixo da pré-visualização da assinatura, encontra os botões Exportar definições e Importar definições. A exportação guarda a configuração completa (dados, cores, layout, espaçamentos, estilos de texto) num ficheiro JSON. A importação carrega a configuração a partir de um ficheiro e aplica automaticamente todas as definições.',
    answerSchemaText: 'Exportação em ficheiro JSON, importação carrega a configuração e aplica-a automaticamente.',
  },
  {
    question: 'Como visualizar o código fonte da assinatura gerada?',
    answer:
      'O botão Mostrar código HTML abaixo da pré-visualização abre uma janela modal com o código fonte HTML completo. Pode consultá-lo e copiá-lo diretamente a partir da janela. Em alternativa, Copiar código HTML copia o código para a área de transferência, e Transferir como HTML guarda-o como ficheiro.',
    answerSchemaText: 'Botão Mostrar código HTML abre uma janela com o código fonte. Cópia ou transferência também disponíveis.',
  },
  {
    question: 'Posso alterar a forma e o tamanho do avatar?',
    answer:
      'Sim. Após colar o URL de uma imagem no separador Dados, surgem opções adicionais: Forma do avatar (redondo, arredondado, quadrado) e Tamanho do avatar (pequeno – 40\u00a0px, médio – 56\u00a0px, grande – 72\u00a0px). As definições aplicam-se a todos os layouts.',
    answerSchemaText: 'Sim. Forma (redondo, arredondado, quadrado) e tamanho (40, 56 ou 72 px) configuráveis.',
  },
  {
    question: 'Como alterar o estilo da linha de separação?',
    answer:
      'No separador Aviso legal, ative a opção Mostrar linha de separação. Surgem opções adicionais: estilo de linha (contínua, tracejada, pontilhada), espessura (1–3\u00a0px) e cor (cinzento por predefinição ou qualquer cor da paleta).',
    answerSchemaText: 'Ativar a linha de separação, depois configurar estilo, espessura e cor.',
  },
  {
    question: 'O botão de cópia está inativo – porquê?',
    answer: 'Para copiar a assinatura, preencha pelo menos dois campos: nome e endereço de e-mail. Verifique se ambos os campos contêm dados.',
    answerSchemaText: 'Nome e endereço de e-mail devem estar preenchidos.',
  },
];

export default function EmailSignatureGeneratorPage() {
  return (
    <>
      <Script id="ld-json-email-signature-pt" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Script id="ld-json-email-howto-pt" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />

      <HeroBanner
        title="Gerador de assinatura de e-mail"
        description="Crie uma assinatura de e-mail profissional em minutos. Preencha os seus dados, escolha as cores e o layout, depois copie o código HTML para o Gmail, Outlook ou qualquer outro cliente de e-mail."
        overlay="black"
        backgroundImage="/assets/tools/narzedzia-darmowy-generator-stopki-mailowej.webp"
      />

      <Breadcrumbs second={{ href: '/pt/ferramentas', label: 'Ferramentas' }} third={{ href: '/pt/ferramentas/gerador-de-assinatura-de-email-gratuito', label: 'Assinatura de e-mail' }} includeJsonLd locale="pt" />

      <ToolEditorLayout>
        <AdSense variant="tool-banner" className="my-3" />
        <EmailSignatureGenerator />
      </ToolEditorLayout>

      <Wrapper>
        <Gap variant="line" />

        <SectionInfo title="Porquê uma assinatura de e-mail profissional?">
          <p className="text-mid">
            Uma assinatura de e-mail é muito mais do que simples dados de contacto no fim de uma mensagem. Contém o seu nome, cargo, empresa, contactos e eventualmente um link CTA ou perfis de redes
            sociais. Uma assinatura coerente e profissional reforça a imagem de marca em cada e-mail enviado.
          </p>
          <p className="text-mid mt-3">
            Em média, um profissional de escritório envia 30 a 40 e-mails por dia. Cada um desses e-mails é uma oportunidade para apresentar a sua marca, colocar um link CTA e dar ao destinatário acesso
            direto aos seus perfis de redes sociais. Com esta ferramenta, crie uma assinatura à altura dessas exigências.
          </p>
        </SectionInfo>

        <Gap size="sm" />

        <SectionSteps
          title="Como usar o gerador de assinatura"
          description="A criação de uma assinatura demora menos de 5 minutos:"
          grid="four"
          items={[
            {
              icon: <RiMailLine className="h-6 w-6" />,
              title: '1. Introduzir os dados',
              description: 'Preencha nome, cargo, empresa, contactos e opcionalmente links de redes sociais.',
            },
            {
              icon: <RiPaletteLine className="h-6 w-6" />,
              title: '2. Personalizar o design',
              description: 'Escolha o layout, o esquema de cores, o tipo de letra e ajuste os espaçamentos e estilos de texto.',
            },
            {
              icon: <RiLinksLine className="h-6 w-6" />,
              title: '3. CTA e redes sociais',
              description: 'Adicione opcionalmente um link de ação e perfis de redes sociais.',
            },
            {
              icon: <RiFileCopyLine className="h-6 w-6" />,
              title: '4. Copiar',
              description: 'Copie a assinatura e cole-a no Gmail, Outlook ou qualquer outro cliente.',
            },
          ]}
        />

        <Gap variant="line" />

        <SectionSteps
          title="8 layouts – qual lhe convém?"
          description="Cada layout organiza os elementos de forma diferente:"
          grid="four"
          items={[
            { icon: <RiLayoutLine className="h-6 w-6" />, title: 'Standard', description: 'Disposição clássica com foto de perfil à esquerda e dados de contacto à direita.' },
            { icon: <RiLayoutLine className="h-6 w-6" />, title: 'Barra superior', description: 'Barra de cor no topo com nome e cargo, dados de contacto por baixo.' },
            { icon: <RiLayoutLine className="h-6 w-6" />, title: 'Labels à esquerda', description: 'Labels (telefone, e-mail, site) à esquerda, valores à direita.' },
            { icon: <RiLayoutLine className="h-6 w-6" />, title: 'Centrado', description: 'Todos os elementos centrados – ideal para setores criativos.' },
            { icon: <RiLayoutLine className="h-6 w-6" />, title: 'Compacto', description: 'Poupança de espaço – todas as informações em poucas linhas.' },
            { icon: <RiLayoutLine className="h-6 w-6" />, title: 'Duas colunas', description: 'Foto e nome à esquerda, dados de contacto e redes sociais à direita.' },
            { icon: <RiLayoutLine className="h-6 w-6" />, title: 'Minimalista', description: 'Reduzido ao essencial – nome, cargo e um link.' },
            { icon: <RiLayoutLine className="h-6 w-6" />, title: 'Barra inferior', description: 'Dados de contacto em cima, barra de cor com CTA e redes sociais em baixo.' },
          ]}
        />

        <Gap variant="line" />

        <SectionDemo
          title="O que pode conter a assinatura?"
          demo={
            <div className="space-y-2">
              <div className="flex items-center gap-3 rounded-lg border border-neutral-200 bg-white p-3">
                <RiUserLine className="text-primary-light0 h-5 w-5 shrink-0" />
                <div className="text-mid text-sm!">
                  <strong>Dados pessoais</strong> – nome, cargo, empresa, departamento
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-lg border border-neutral-200 bg-white p-3">
                <RiSmartphoneLine className="text-primary-light0 h-5 w-5 shrink-0" />
                <div className="text-mid text-sm!">
                  <strong>Contactos</strong> – telefone, e-mail, site, morada
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-lg border border-neutral-200 bg-white p-3">
                <RiImageLine className="text-primary-light0 h-5 w-5 shrink-0" />
                <div className="text-mid text-sm!">
                  <strong>Imagens</strong> – foto de perfil e/ou logótipo da empresa (URL)
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-lg border border-neutral-200 bg-white p-3">
                <RiGlobalLine className="text-primary-light0 h-5 w-5 shrink-0" />
                <div className="text-mid text-sm!">
                  <strong>Redes sociais</strong> – 12 plataformas com ícones automáticos
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-lg border border-neutral-200 bg-white p-3">
                <RiLinksLine className="text-primary-light0 h-5 w-5 shrink-0" />
                <div className="text-mid text-sm!">
                  <strong>Link CTA</strong> – botão de ação (ex.: «Marcar reunião»)
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-lg border border-neutral-200 bg-white p-3">
                <RiShieldCheckLine className="text-primary-light0 h-5 w-5 shrink-0" />
                <div className="text-mid text-sm!">
                  <strong>Disclaimer</strong> – aviso legal / informação RGPD
                </div>
              </div>
            </div>
          }
        >
          <p className="text-mid mb-4">O gerador oferece inúmeras opções de personalização para todos os elementos de uma assinatura de e-mail profissional:</p>
          <ul className="text-mid list-disc space-y-2 pl-5">
            <li>
              <strong>Dados pessoais</strong> – nome, cargo, empresa e departamento.
            </li>
            <li>
              <strong>Contactos</strong> – telefone, e-mail, site e morada.
            </li>
            <li>
              <strong>Elementos visuais</strong> – foto de perfil, logótipo, esquema de cores e tipo de letra.
            </li>
            <li>
              <strong>Redes sociais</strong> – links para 12 plataformas com ícones gerados automaticamente.
            </li>
            <li>
              <strong>Botão CTA</strong> – link de ação opcional com texto e URL personalizados.
            </li>
            <li>
              <strong>Disclaimer</strong> – aviso legal em tamanho reduzido na parte inferior da assinatura.
            </li>
          </ul>
        </SectionDemo>

        <Gap variant="line" />

        <SectionSteps
          title="Opções de design em detalhe"
          description="Personalize cada aspeto da assinatura segundo a sua marca:"
          grid="three"
          items={[
            {
              icon: <RiPaletteLine className="h-6 w-6" />,
              title: 'Esquema de cores',
              description: 'Cor principal e cor do texto livremente configuráveis. Influencia separadores, links e ícones de redes sociais.',
            },
            {
              icon: <RiFontSize className="h-6 w-6" />,
              title: 'Tipo de letra e tamanho',
              description: 'Escolha entre vários tipos de letra e ajuste o tamanho para o nome, cargo e dados de contacto.',
            },
            {
              icon: <RiSettings3Line className="h-6 w-6" />,
              title: 'Espaçamentos e estilos',
              description: 'Espaçamentos entre elementos, espessura dos separadores, tamanho dos ícones e estilos de texto ajustáveis individualmente.',
            },
          ]}
        />

        <Gap variant="line" />

        <SectionInfo title="Como preencher os dados da assinatura">
          <p className="text-mid">
            No separador <strong>Dados</strong>, encontra todos os campos a preencher. Apenas dois são obrigatórios: nome e endereço de e-mail. Os restantes campos são opcionais e só aparecem na assinatura se estiverem preenchidos.
          </p>

          <h3 className="h5 mt-6 mb-3">Campos do separador Dados</h3>
          <ul className="text-mid list-disc space-y-2 pl-6">
            <li>
              <strong>Linha acima do nome</strong> – texto adicional apresentado acima do nome. Pode inscrever o nome da empresa, um slogan ou uma frase de efeito.
            </li>
            <li>
              <strong>Avatar / logótipo (URL da imagem)</strong> – URL de uma foto de perfil ou logótipo da empresa. A imagem deve ser quadrada (mín. 120×120{'\u00a0'}px) e acessível publicamente online. Após colar o URL, surgem opções adicionais: <strong>Forma do avatar</strong> (redondo, arredondado ou quadrado) e <strong>Tamanho do avatar</strong> (pequeno – 40{'\u00a0'}px, médio – 56{'\u00a0'}px, grande – 72{'\u00a0'}px).
            </li>
            <li>
              <strong>Nome completo</strong> – campo obrigatório. Introduza o seu nome completo.
            </li>
            <li>
              <strong>Tag junto ao nome</strong> – texto curto junto ao nome, ex.: pronomes ou título abreviado.
            </li>
            <li>
              <strong>Cargo</strong> – o seu papel na empresa, ex.: Diretor comercial, Especialista de marketing.
            </li>
            <li>
              <strong>Nome da empresa</strong> – o nome da organização que representa.
            </li>
            <li>
              <strong>Linha adicional</strong> – uma breve descrição da sua atividade ou da sua oferta.
            </li>
            <li>
              <strong>E-mail</strong> – campo obrigatório. Introduza o seu endereço de e-mail profissional.
            </li>
            <li>
              <strong>Telefone</strong> – número de contacto. Formato livre, ex.: +351 912 345 678.
            </li>
            <li>
              <strong>Site</strong> – URL completo do seu site, começando por https://.
            </li>
            <li>
              <strong>Morada</strong> – morada física da empresa (rua, cidade, código postal).
            </li>
            <li>
              <strong>Dados legais</strong> – NIF, número de licença ou outros dados exigidos pelo seu setor.
            </li>
          </ul>
        </SectionInfo>

        <Gap variant="line" />

        <SectionInfo title="Como adicionar botões CTA">
          <p className="text-mid">
            Um botão CTA (apelo à ação) é um elemento clicável que redireciona o destinatário para uma página à sua escolha. Pode ser um link para um calendário de reuniões, um formulário de contacto ou uma oferta. O gerador permite adicionar dois botões CTA.
          </p>

          <h3 className="h5 mt-6 mb-3">Botão principal</h3>
          <ol className="text-mid list-decimal space-y-2 pl-6">
            <li>
              Abra o separador <strong>Botões</strong> no editor.
            </li>
            <li>
              Na secção <strong>Botão principal</strong>, introduza o texto que o destinatário verá, ex.: Marcar reunião.
            </li>
            <li>
              No campo <strong>Link CTA</strong>, cole o URL completo. O endereço deve começar por https://.
            </li>
          </ol>

          <h3 className="h5 mt-6 mb-3">Botão secundário</h3>
          <p className="text-mid">
            Pode adicionar um segundo botão CTA em estilo outline (fundo transparente com contorno). Preencha os campos da secção <strong>Botão secundário</strong> da mesma forma que o botão principal.
          </p>

          <h3 className="h5 mt-6 mb-3">Arredondamento dos botões</h3>
          <p className="text-mid">
            Na parte inferior do separador Botões, encontra a opção <strong>Arredondamento dos botões</strong>. Três variantes estão disponíveis: Nenhum (cantos retos), Ligeiro (ligeiramente arredondado) ou Completo (botão oval).
          </p>

          <p className="text-mid mt-4">
            Se deixar ambos os campos vazios, o botão não aparecerá na assinatura. Se preencher apenas um campo, o botão também não será visível – ambos são necessários: texto e link.
          </p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionInfo title="Como adicionar os links de redes sociais">
          <p className="text-mid">
            No separador <strong>Redes sociais</strong>, pode adicionar links para os seus perfis. O gerador suporta doze plataformas: LinkedIn, Instagram, Facebook, TikTok, YouTube, X (antigo Twitter), GitHub, Dribbble, Behance, WhatsApp, Telegram e Pinterest.
          </p>

          <h3 className="h5 mt-6 mb-3">Como fazer</h3>
          <ol className="text-mid list-decimal space-y-2 pl-6">
            <li>
              Abra o separador <strong>Redes sociais</strong> no editor.
            </li>
            <li>Junto a cada plataforma, encontra um campo URL. Cole o link completo para o seu perfil, ex.: https://www.linkedin.com/in/meuperfil.</li>
            <li>Preencha apenas os campos necessários. Os campos vazios não aparecerão na assinatura.</li>
          </ol>

          <h3 className="h5 mt-6 mb-3">Ícones de redes sociais</h3>
          <p className="text-mid">
            Na parte inferior do separador Redes sociais, encontra a opção <strong>Mostrar ícones junto aos nomes dos serviços</strong>. Quando ativada, os links são apresentados como ícones SVG a cores em vez de simples nomes.
          </p>
          <ul className="text-mid mt-3 list-disc space-y-2 pl-6">
            <li>
              <strong>Tamanho do ícone</strong> – opções: Pequeno (16 px), Médio (20 px) ou Grande (24 px).
            </li>
            <li>
              <strong>Cor do ícone</strong> – Cores da plataforma (cores predefinidas), Cor de destaque (cor de destaque uniforme) ou Cor do texto.
            </li>
          </ul>
        </SectionInfo>

        <Gap variant="line" />

        <SectionInfo title="Aviso legal: quando adicioná-lo">
          <p className="text-mid">
            No separador <strong>Aviso legal</strong>, pode adicionar um texto jurídico que aparecerá na parte inferior da assinatura em letra reduzida.
          </p>

          <h3 className="h5 mt-6 mb-3">Quando adicionar um aviso legal</h3>
          <ul className="text-mid list-disc space-y-2 pl-6">
            <li>
              <strong>Correspondência profissional</strong> – aviso de confidencialidade e pedido de eliminação em caso de envio errado.
            </li>
            <li>
              <strong>Requisitos setoriais</strong> – certos setores (ex.: jurídico, médico, financeiro) exigem informações específicas em cada mensagem.
            </li>
            <li>
              <strong>RGPD</strong> – informação sobre o tratamento de dados pessoais, se a empresa é responsável pelo tratamento.
            </li>
          </ul>

          <p className="text-mid mt-4">
            Por predefinição, o campo está preenchido com um texto de confidencialidade de exemplo. Pode modificá-lo, eliminá-lo ou substituí-lo pelo seu próprio aviso. Se o campo estiver vazio, nenhum aviso aparecerá na assinatura.
          </p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionInfo title="Personalização da aparência">
          <p className="text-mid">
            No separador <strong>Aparência</strong>, pode personalizar as cores, o tipo de letra e outros elementos visuais da assinatura.
          </p>

          <h3 className="h5 mt-6 mb-3">Temas de cores</h3>
          <p className="text-mid">
            No topo do separador, encontra cinco temas predefinidos: Escuro, Azul, Roxo, Verde e Cinzento. Um clique num tema define automaticamente a cor de destaque e a cor do texto. É a forma mais rápida de obter uma assinatura coerente.
          </p>

          <h3 className="h5 mt-6 mb-3">Cores</h3>
          <ul className="text-mid list-disc space-y-2 pl-6">
            <li>
              <strong>Cor de destaque</strong> – utilizada para a barra lateral/superior, o botão CTA e os links. Pode escolher qualquer cor da paleta.
            </li>
            <li>
              <strong>Cor do texto</strong> – cor de todos os textos da assinatura (nome, contactos, aviso legal).
            </li>
            <li>
              <strong>Cor de fundo</strong> – cor de fundo de toda a assinatura. Branco por predefinição, mas modificável.
            </li>
          </ul>

          <h3 className="h5 mt-6 mb-3">Tipo de letra e tamanho</h3>
          <ul className="text-mid list-disc space-y-2 pl-6">
            <li>
              <strong>Tipo de letra</strong> – opções: Arial, Verdana, Tahoma, Trebuchet MS e Georgia. Todos são compatíveis com os clientes de e-mail e serão apresentados corretamente no destinatário.
            </li>
            <li>
              <strong>Tamanho do texto</strong> – três opções: Pequeno (12{'\u00a0'}px), Standard (14{'\u00a0'}px) e Maior (16{'\u00a0'}px).
            </li>
          </ul>
        </SectionInfo>

        <Gap variant="line" />

        <SectionInfo title="Estilo de texto: cores e tamanhos dos elementos individuais">
          <p className="text-mid">
            No separador <strong>Estilo de texto</strong>, pode personalizar individualmente a cor e o tamanho do tipo de letra de cada elemento textual da assinatura.
          </p>

          <h3 className="h5 mt-6 mb-3">Elementos disponíveis</h3>
          <p className="text-mid">Apenas os elementos que contêm dados são apresentados. Para cada elemento, pode configurar:</p>
          <ul className="text-mid mt-3 list-disc space-y-2 pl-6">
            <li>
              <strong>Nome completo</strong> – apresentado por predefinição na cor de destaque.
            </li>
            <li>
              <strong>Cargo</strong> – o seu papel na empresa.
            </li>
            <li>
              <strong>Empresa</strong> – nome da organização.
            </li>
            <li>
              <strong>Contactos</strong> – e-mail, telefone, site (labels).
            </li>
            <li>
              <strong>Redes sociais</strong> – links para os perfis.
            </li>
            <li>
              <strong>Aviso legal</strong> – texto jurídico na parte inferior da assinatura.
            </li>
          </ul>

          <h3 className="h5 mt-6 mb-3">Como mudar a cor</h3>
          <p className="text-mid">
            Junto a cada elemento, encontra uma fila de opções de cor. Clique num quadrado de cor para o selecionar. Também pode adicionar uma cor personalizada clicando no quadrado com o sinal de mais: escolha uma cor e clique em Guardar. As cores personalizadas (até 8) são partilhadas entre todos os elementos.
          </p>
          <p className="text-mid mt-3">O botão com o ícone de reposição restaura a cor predefinida do elemento.</p>

          <h3 className="h5 mt-6 mb-3">Como mudar o tamanho</h3>
          <p className="text-mid">
            Na segunda linha, encontra o controlo de tamanho com os botões - e +. O valor indica o desvio em relação ao tamanho base do tipo de letra (definido no separador Aparência). Intervalo: de -4 a +4{'\u00a0'}píxeis.
          </p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionInfo title="Espaçamentos entre os elementos">
          <p className="text-mid">
            No separador <strong>Espaçamentos</strong>, pode controlar precisamente as distâncias entre os elementos individuais da assinatura.
          </p>

          <h3 className="h5 mt-6 mb-3">Margem interior da assinatura</h3>
          <p className="text-mid">
            No topo do separador, encontra a opção de margem interior – ou seja, a distância entre o conteúdo da assinatura e os seus limites. Três valores estão disponíveis: 8{'\u00a0'}px (pequeno), 16{'\u00a0'}px (médio) e 24{'\u00a0'}px (grande).
          </p>

          <h3 className="h5 mt-6 mb-3">Espaçamentos entre os elementos</h3>
          <p className="text-mid">
            Abaixo da margem, encontra controlos para os elementos individuais da assinatura. Cada controlo tem botões + e - para aumentar ou diminuir o espaçamento. Apenas as opções dos elementos atualmente presentes na assinatura são apresentadas.
          </p>
          <ul className="text-mid mt-3 list-disc space-y-2 pl-6">
            <li>
              <strong>Após o nome</strong> – espaço abaixo da linha do nome.
            </li>
            <li>
              <strong>Após o cargo / empresa</strong> – espaço abaixo da linha do cargo e do nome da empresa.
            </li>
            <li>
              <strong>Após a linha adicional</strong> – espaço abaixo da descrição (se preenchida).
            </li>
            <li>
              <strong>Após os contactos</strong> – espaço abaixo do e-mail, telefone e site.
            </li>
            <li>
              <strong>Após as redes sociais</strong> – espaço abaixo dos links para os perfis.
            </li>
            <li>
              <strong>Após o botão CTA</strong> – espaço abaixo do botão (se ativado).
            </li>
            <li>
              <strong>Antes do aviso legal</strong> – espaço acima do texto jurídico.
            </li>
          </ul>
          <p className="text-mid mt-4">Se remover os dados de um campo (ex.: apagar o telefone), a opção de espaçamento correspondente desaparece automaticamente do separador.</p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionInfo title="Gravação automática e reposição">
          <p className="text-mid">
            O gerador grava automaticamente todas as definições na memória do navegador (localStorage). Após atualizar a página ou reabrir a ferramenta, os dados, o layout, as cores e todas as outras opções serão restaurados.
          </p>

          <h3 className="h5 mt-6 mb-3">Como funciona a gravação automática</h3>
          <p className="text-mid">Cada alteração (texto, cor, layout, espaçamento) é imediatamente gravada na memória do navegador. A gravação faz-se automaticamente em segundo plano, sem clicar em nenhum botão.</p>

          <h3 className="h5 mt-6 mb-3">Como repor as definições</h3>
          <p className="text-mid">
            Abaixo da pré-visualização da assinatura, encontra o botão <strong>Repor aparência</strong>. Um clique abre uma janela de confirmação. Confirmar a reposição restaura todos os dados e definições para os valores predefinidos. Esta operação é irreversível.
          </p>

          <h3 className="h5 mt-6 mb-3">Exportar e importar a configuração</h3>
          <p className="text-mid">
            Abaixo da pré-visualização da assinatura, encontra dois botões adicionais: <strong>Exportar definições</strong> e <strong>Importar definições</strong>. A exportação guarda todos os dados, cores, layout, espaçamentos e estilos de texto num ficheiro JSON. A importação carrega uma configuração previamente guardada a partir de um ficheiro.
          </p>
          <p className="text-mid mt-3">
            Esta função é particularmente útil para transferir a configuração da assinatura entre computadores, partilhar as definições com colegas ou manter uma cópia de segurança dos seus ajustes antes de uma reposição.
          </p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionSteps
          title="Como copiar a assinatura para o Gmail ou Outlook"
          description="Quando a assinatura estiver pronta, bastam alguns passos para a adicionar ao seu cliente de e-mail:"
          grid="three"
          items={[
            {
              icon: <RiClipboardLine className="h-6 w-6" />,
              title: '1. Copie o código',
              description: 'O botão Copiar a assinatura (Gmail / Outlook) copia a assinatura para a área de transferência em HTML formatado, pronto a colar.',
            },
            {
              icon: <RiSettings3Line className="h-6 w-6" />,
              title: '2. Abra as definições de assinatura',
              description: 'No Gmail: Definições → Ver todas as definições → Assinatura. No Outlook: Ficheiro → Opções → Correio → Assinaturas.',
            },
            {
              icon: <RiSaveLine className="h-6 w-6" />,
              title: '3. Cole e guarde',
              description: 'No campo de assinatura, utilize Ctrl+V (Windows) ou Cmd+V (Mac). A assinatura aparecerá com todas as cores e formatação. Guarde as alterações.',
            },
          ]}
        />

        <Gap variant="line" />

        <SectionInfo title="Pré-visualização da assinatura e opções de exportação">
          <p className="text-mid">
            O painel de pré-visualização apresenta-se à direita do editor e atualiza-se automaticamente a cada alteração. A pré-visualização é fixa no ecrã (sticky) e permanece visível mesmo ao deslocar as opções de edição.
          </p>

          <h3 className="h5 mt-6 mb-3">Mudança de fundo da pré-visualização</h3>
          <p className="text-mid">
            Acima da pré-visualização, encontra três botões de mudança de fundo: <strong>Claro</strong> (fundo cinzento predefinido), <strong>Escuro</strong> (fundo escuro, útil para verificar a legibilidade em fundo escuro) e <strong>Grelha</strong> (padrão em grelha, permite ver a transparência e os limites da assinatura).
          </p>

          <h3 className="h5 mt-6 mb-3">Botões de ação</h3>
          <p className="text-mid">Abaixo da pré-visualização, encontra vários botões:</p>
          <ul className="text-mid mt-3 list-disc space-y-2 pl-6">
            <li>
              <strong>Copiar a assinatura (Gmail / Outlook)</strong> – copia a assinatura em HTML formatado para a área de transferência. Cole-a diretamente nas definições de assinatura.
            </li>
            <li>
              <strong>Copiar código HTML</strong> – copia o código HTML bruto para a área de transferência. Útil para colar num editor HTML ou CMS.
            </li>
            <li>
              <strong>Transferir como HTML</strong> – guarda o código da assinatura como ficheiro .html no disco. Útil para arquivo ou partilha com um programador.
            </li>
            <li>
              <strong>Mostrar código HTML</strong> – abre uma janela modal com o código fonte da assinatura. Pode consultá-lo e copiá-lo diretamente a partir da janela.
            </li>
            <li>
              <strong>Exportar definições</strong> – guarda a configuração completa da assinatura (dados, cores, layout, espaçamentos, estilos) num ficheiro JSON.
            </li>
            <li>
              <strong>Importar definições</strong> – carrega a configuração a partir de um ficheiro JSON. Todas as definições são aplicadas automaticamente.
            </li>
            <li>
              <strong>Repor aparência</strong> – restaura todos os dados e definições para os valores predefinidos (após confirmação).
            </li>
          </ul>
        </SectionInfo>

        <Gap variant="line" />

        <SectionSteps
          title="Para quem é útil o gerador de assinatura?"
          description="A ferramenta é útil para qualquer pessoa que envie e-mails profissionais:"
          grid="two"
          items={[
            { icon: <RiBriefcaseLine className="h-6 w-6" />, title: 'Empresários e freelancers', description: 'Uma assinatura profissional em cada mensagem sem recorrer a um designer.' },
            {
              icon: <RiTeamLine className="h-6 w-6" />,
              title: 'Equipas de empresa',
              description: 'Cada colaborador cria a sua própria assinatura no mesmo estilo. Identidade coerente em toda a empresa.',
            },
            {
              icon: <RiHandCoinLine className="h-6 w-6" />,
              title: 'Comerciais',
              description: 'Um botão CTA com link para um calendário ou uma oferta aumenta as hipóteses de conseguir uma reunião.',
            },
            {
              icon: <RiScales3Line className="h-6 w-6" />,
              title: 'Advogados, contabilistas, médicos',
              description: 'Possibilidade de adicionar aviso legal, número de licença, NIF ou outros dados exigidos pelo setor.',
            },
          ]}
        />

        <Gap variant="line" />

        <SectionSteps
          title="O que torna este gerador especial?"
          grid="three"
          items={[
            {
              icon: <RiInfinityLine className="h-6 w-6" />,
              title: 'Oito layouts',
              description: 'Standard, Barra superior, Labels à esquerda, Centrado, Compacto, Duas colunas, Minimalista e Barra inferior.',
            },
            {
              icon: <RiUserLine className="h-6 w-6" />,
              title: 'Gravação automática no navegador',
              description: 'Cada alteração é automaticamente gravada na memória do navegador. Após atualizar, a assinatura permanece disponível.',
            },
            {
              icon: <RiTranslate2 className="h-6 w-6" />,
              title: 'Exportar e importar a configuração',
              description: 'A configuração completa pode ser exportada num ficheiro JSON e partilhada com colegas.',
            },
            {
              icon: <RiAppsLine className="h-6 w-6" />,
              title: '12 plataformas de redes sociais',
              description: 'LinkedIn, Instagram, Facebook, TikTok, YouTube, X, GitHub, Dribbble, Behance, WhatsApp, Telegram e Pinterest.',
            },
            { icon: <RiPaletteLine className="h-6 w-6" />, title: 'Personalização avançada', description: 'Forma e tamanho do avatar, estilo de linha, cores e tamanhos de texto individuais.' },
            {
              icon: <RiFileCodeLine className="h-6 w-6" />,
              title: 'Múltiplas opções de exportação',
              description: 'Copiar HTML, transferir ficheiro, pré-visualização do código fonte, exportação/importação da configuração JSON.',
            },
            {
              icon: <RiShieldCheckLine className="h-6 w-6" />,
              title: 'Privacidade',
              description: 'Os dados não são enviados para nenhum servidor. O gerador funciona inteiramente no navegador.',
            },
            { icon: <RiMailCheckLine className="h-6 w-6" />, title: 'Compatibilidade', description: 'O código HTML gerado funciona no Gmail, Outlook, Apple Mail e Thunderbird.' },
            { icon: <RiEyeLine className="h-6 w-6" />, title: 'Pré-visualização em tempo real', description: 'Cada alteração é visível instantaneamente em fundo claro, escuro ou grelha.' },
          ]}
        />

        <Gap variant="line" />

        <FaqPanels pageUrl={toAbsoluteUrl('/pt/ferramentas/gerador-de-assinatura-de-email-gratuito')} title="Perguntas frequentes sobre o gerador de assinatura de e-mail" openByDefault={1} items={faqItems} />

        <Gap variant="line" />

        <ToolsCarousel title="Descubra outras ferramentas" />

        <Gap size="sm" />
      </Wrapper>
    </>
  );
}
