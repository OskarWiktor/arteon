import Script from 'next/script';
import HeroBanner from '@/components/sections/HeroBanner';
import Breadcrumbs from '@/components/sections/BreadCrumbs';
import FaviconGenerator from '@/components/sections/tools/FaviconGenerator';
import ToolsCarousel from '@/components/sections/tools/ToolsCarousel';
import FaqPanels from '@/components/ui/FaqPanels';
import Gap from '@/components/ui/Gap';
import SectionInfo from '@/components/ui/sections/SectionInfo';
import SectionSteps from '@/components/ui/sections/SectionSteps';
import SectionDemo from '@/components/ui/sections/SectionDemo';
import SectionTabs from '@/components/ui/sections/SectionTabs';
import Wrapper from '@/components/ui/Wrapper';
import ToolEditorLayout from '@/components/ui/ToolEditorLayout';
import { toAbsoluteUrl, siteUrl } from '@/utils/absoluteUrl';
import { getToolAlternates } from '@/lib/i18n/pages/tool-meta';
import type { Metadata } from 'next';
import AdSense from '@/components/ui/AdSense';
import {
  RiUploadLine,
  RiAppsLine,
  RiDownloadLine,
  RiGlobalLine,
  RiSmartphoneLine,
  RiSearchLine,
  RiBookmarkLine,
  RiCodeLine,
  RiFileZipLine,
  RiFolderZipLine,
  RiFileDownloadLine,
  RiWordpressLine,
  RiHtml5Line,
  RiReactjsLine,
  RiShapeLine,
  RiAspectRatioLine,
  RiZoomInLine,
  RiImageLine,
  RiContrastLine,
} from 'react-icons/ri';

const LOCALE = 'pt' as const;
const TOOL_KEY = 'favicon' as const;

export const metadata: Metadata = {
  title: 'Gerador de favicon gratuito online – favicon.ico e ícones PNG',
  description:
    'Gerador de favicon gratuito online. Crie favicon.ico e ícones PNG 16x16, 32x32, 180x180, 192x192 e 512x512 a partir de uma única imagem – em conformidade com os requisitos dos navegadores e do Lighthouse.',
  alternates: getToolAlternates(TOOL_KEY, LOCALE),
  openGraph: {
    title: 'Gerador de favicon gratuito online',
    description: 'Crie favicon.ico e ícones PNG a partir de uma única imagem – em conformidade com os requisitos dos navegadores e do Lighthouse.',
    url: toAbsoluteUrl('/pt/ferramentas/gerador-de-favicon-gratuito'),
    type: 'website',
    images: [{ url: toAbsoluteUrl('/assets/tools/narzedzia-darmowy-generator-favicon-ico.webp'), width: 1200, height: 630 }],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Gerador de favicon online – favicon.ico e ícones PNG',
  alternateName: ['Criar um favicon online', 'Gerador favicon.ico', 'Gerador Apple Touch Icon', 'Criar ícones PWA', 'Favicon a partir de uma imagem'],
  url: toAbsoluteUrl('/pt/ferramentas/gerador-de-favicon-gratuito'),
  applicationCategory: 'DesignApplication',
  applicationSubCategory: 'FaviconTool',
  operatingSystem: 'Any',
  description: 'Gerador de favicon gratuito. favicon.ico e ícones PNG 16x16, 32x32, 180x180, 192x192 e 512x512. site.webmanifest opcional. Conforme ao Lighthouse.',
  featureList: [
    'favicon.ico (16x16 + 32x32 combinados)',
    'Ícones PNG: 16x16, 32x32, 180x180, 192x192, 512x512',
    'Apple Touch Icon (180x180)',
    'Ícones Android/PWA (192x192, 512x512)',
    'site.webmanifest opcional',
    'Transferência ZIP de todos os ficheiros',
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
  name: 'Como criar um favicon para o seu site',
  description: 'Importe uma imagem e gere favicon.ico e ícones PNG em todos os tamanhos necessários – em conformidade com os requisitos dos navegadores e do Lighthouse.',
  url: toAbsoluteUrl('/pt/ferramentas/gerador-de-favicon-gratuito'),
  step: [
    { '@type': 'HowToStep', name: 'Importar uma imagem', text: 'Importe uma imagem quadrada (pelo menos 512x512 px). Formatos suportados: PNG, JPG, WebP.' },
    { '@type': 'HowToStep', name: 'Escolher as opções', text: 'Selecione os tamanhos desejados e se um site.webmanifest deve ser gerado.' },
    { '@type': 'HowToStep', name: 'Transferir o ZIP', text: 'Transfira todos os ficheiros gerados num arquivo ZIP e adicione-os ao seu site.' },
  ],
  publisher: { '@type': 'Organization', name: 'Arteon Agency', url: siteUrl },
};

const faqItems = [
  {
    question: 'O que é um favicon?',
    answer:
      'Um favicon é o pequeno ícone apresentado no separador do navegador junto ao título da página. Também aparece nos favoritos, no histórico, no ecrã inicial dos dispositivos móveis e nos resultados de pesquisa. Um favicon profissional reforça a identidade da marca e melhora o reconhecimento.',
    answerSchemaText: 'Um pequeno ícone no separador do navegador, favoritos e ecrã inicial. Reforça a identidade da marca.',
  },
  {
    question: 'Que tamanhos a ferramenta gera?',
    answer:
      'A ferramenta gera favicon.ico (16x16 e 32x32 combinados) bem como ícones PNG em 16x16, 32x32, 180x180 (Apple Touch Icon), 192x192 e 512x512 (Android/PWA). Todos os tamanhos correspondem aos requisitos atuais dos navegadores e do Lighthouse.',
    answerSchemaText: 'favicon.ico (16+32) + PNG: 16, 32, 180 (Apple), 192, 512 (PWA). Conforme ao Lighthouse.',
  },
  {
    question: 'Que formato de imagem devo utilizar?',
    answer:
      'Idealmente, uma imagem quadrada em PNG, JPG ou WebP com pelo menos 512x512 píxeis. A ferramenta redimensiona automaticamente a imagem para todos os tamanhos necessários. Quanto maior e mais detalhada a imagem fonte, melhor o resultado.',
    answerSchemaText: 'Imagem quadrada (PNG/JPG/WebP) com pelo menos 512x512 px.',
  },
  {
    question: 'O site.webmanifest também é gerado?',
    answer: 'Sim. Pode opcionalmente gerar um ficheiro site.webmanifest que referencia os ícones PWA (192x192 e 512x512). O ficheiro é incluído no arquivo ZIP com os ícones.',
    answerSchemaText: 'Sim, opcionalmente. Referencia os ícones PWA e é incluído no ZIP.',
  },
  {
    question: 'As minhas imagens são enviadas para um servidor?',
    answer: 'Não. Todo o processamento é feito localmente no seu navegador através da API Canvas. Os seus ficheiros nunca saem do seu computador e não são armazenados em lado nenhum.',
    answerSchemaText: 'Não. Processamento local no navegador. Os ficheiros não saem do seu dispositivo.',
  },
  {
    question: 'O que é que o Lighthouse verifica em relação aos favicons?',
    answer:
      'O Lighthouse verifica se uma página possui um favicon válido. Espera no mínimo um ficheiro favicon.ico ou um elemento <link rel="icon">. Verifica também a presença de um Apple Touch Icon (180x180) e de ícones PWA no site.webmanifest. Esta ferramenta gera todos os ficheiros necessários.',
    answerSchemaText: 'O Lighthouse verifica favicon.ico, Apple Touch Icon e ícones PWA no manifest.',
  },
  {
    question: 'Como integrar os favicons no meu site?',
    answer:
      'Copie os ficheiros gerados para a raiz do seu site. Depois adicione os elementos <link> correspondentes na secção <head>. Abaixo da ferramenta, encontra um guia com o código HTML necessário.',
    answerSchemaText: 'Copiar os ficheiros para a raiz e adicionar os elementos <link> no <head>.',
  },
];

export default function FaviconGeneratorPage() {
  return (
    <>
      <Script id="ld-json-favicon-generator-pt" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Script id="ld-json-favicon-howto-pt" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />

      <HeroBanner
        title="Gerador de favicon"
        description="Crie a partir de uma única imagem favicon.ico e ícones PNG em todos os tamanhos necessários. Conforme aos requisitos dos navegadores e do Lighthouse – tudo é executado localmente no seu navegador."
        overlay="black"
        backgroundImage="/assets/tools/narzedzia-darmowy-generator-favicon-ico.webp"
      />

      <Breadcrumbs second={{ href: '/pt/ferramentas', label: 'Ferramentas' }} third={{ href: '/pt/ferramentas/gerador-de-favicon-gratuito', label: 'Gerador de favicon' }} includeJsonLd locale="pt" />

      <ToolEditorLayout>
        <AdSense variant="tool-banner" className="my-3" />
        <FaviconGenerator />
      </ToolEditorLayout>

      <Wrapper>
        <Gap variant="line" />

        <SectionInfo title="Porque é que cada site precisa de um favicon?">
          <p className="text-mid">
            Um favicon é muito mais do que um pequeno ícone – é um elemento essencial da identidade da marca na web. Os navegadores apresentam-no no separador, os utilizadores veem-no nos favoritos e no
            histórico, e o Lighthouse verifica a sua presença como boa prática. Sem favicon, um site parece incompleto.
          </p>
          <p className="text-mid mt-3">
            Os sites modernos precisam de favicons em vários tamanhos: um favicon.ico para navegadores antigos, ícones PNG para navegadores de desktop, um Apple Touch Icon para dispositivos iOS e ícones
            maiores para instalações PWA no Android. Esta ferramenta gera todos os ficheiros necessários a partir de uma única imagem.
          </p>
        </SectionInfo>

        <Gap size="sm" />

        <SectionSteps
          title="Como usar o gerador de favicon"
          description="A geração demora apenas alguns segundos:"
          grid="three"
          items={[
            {
              icon: <RiUploadLine className="h-6 w-6" />,
              title: '1. Importar uma imagem',
              description: 'Importe uma imagem quadrada (pelo menos 512x512 px). Formatos suportados: PNG, JPG, WebP.',
            },
            {
              icon: <RiAppsLine className="h-6 w-6" />,
              title: '2. Escolher as opções',
              description: 'Selecione os tamanhos desejados e se um site.webmanifest deve ser gerado.',
            },
            {
              icon: <RiDownloadLine className="h-6 w-6" />,
              title: '3. Transferir o ZIP',
              description: 'Transfira todos os ficheiros gerados num arquivo ZIP e adicione-os ao seu site.',
            },
          ]}
        />

        <Gap variant="line" />

        <SectionDemo
          title="Que ficheiros são gerados?"
          demo={
            <div className="overflow-x-auto">
              <table className="text-mid w-full text-left text-sm!">
                <thead>
                  <tr className="border-b border-neutral-200">
                    <th className="py-2 pr-4 font-semibold">Ficheiro</th>
                    <th className="py-2 pr-4 font-semibold">Tamanho</th>
                    <th className="py-2 font-semibold">Utilização</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-neutral-100">
                    <td className="py-2 pr-4 font-medium">favicon.ico</td>
                    <td className="py-2 pr-4">16×16 + 32×32</td>
                    <td className="text-primary-light0 py-2">Separador do navegador (padrão)</td>
                  </tr>
                  <tr className="border-b border-neutral-100">
                    <td className="py-2 pr-4 font-medium">favicon-16x16.png</td>
                    <td className="py-2 pr-4">16×16</td>
                    <td className="text-primary-light0 py-2">Separador do navegador (pequeno)</td>
                  </tr>
                  <tr className="border-b border-neutral-100">
                    <td className="py-2 pr-4 font-medium">favicon-32x32.png</td>
                    <td className="py-2 pr-4">32×32</td>
                    <td className="text-primary-light0 py-2">Separador do navegador (Retina)</td>
                  </tr>
                  <tr className="border-b border-neutral-100">
                    <td className="py-2 pr-4 font-medium">apple-touch-icon.png</td>
                    <td className="py-2 pr-4">180×180</td>
                    <td className="text-primary-light0 py-2">Ecrã inicial iOS, Safari</td>
                  </tr>
                  <tr className="border-b border-neutral-100">
                    <td className="py-2 pr-4 font-medium">android-chrome-192x192.png</td>
                    <td className="py-2 pr-4">192×192</td>
                    <td className="text-primary-light0 py-2">Android, instalação PWA</td>
                  </tr>
                  <tr className="border-b border-neutral-100">
                    <td className="py-2 pr-4 font-medium">android-chrome-512x512.png</td>
                    <td className="py-2 pr-4">512×512</td>
                    <td className="text-primary-light0 py-2">Splashscreen PWA, resultados Google</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-medium">site.webmanifest</td>
                    <td className="py-2 pr-4">-</td>
                    <td className="text-primary-light0 py-2">Configuração PWA (opcional)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          }
        >
          <p className="text-mid">A ferramenta gera todos os ficheiros favicon exigidos pelos navegadores modernos e pelo Lighthouse. Cada ficheiro tem uma função específica:</p>
          <ul className="text-mid mt-3 list-disc space-y-2 pl-5">
            <li>
              <strong>favicon.ico</strong> – o formato clássico, suportado por todos os navegadores. Contém 16×16 e 32×32 num único ficheiro.
            </li>
            <li>
              <strong>Apple Touch Icon</strong> – apresentado no ecrã inicial iOS quando um utilizador adiciona o site aos favoritos.
            </li>
            <li>
              <strong>Ícones PWA</strong> – para dispositivos Android e Progressive Web Apps. Utilizados na instalação no ecrã inicial.
            </li>
          </ul>
        </SectionDemo>

        <Gap variant="line" />

        <SectionSteps
          title="Onde é apresentado o favicon?"
          description="O favicon aparece em diferentes locais na web:"
          grid="three"
          items={[
            {
              icon: <RiGlobalLine className="h-6 w-6" />,
              title: 'Separadores do navegador',
              description: 'O favicon aparece junto ao título da página no separador – o local mais visível.',
            },
            {
              icon: <RiBookmarkLine className="h-6 w-6" />,
              title: 'Favoritos e histórico',
              description: 'Os navegadores utilizam o favicon na barra de favoritos e no histórico.',
            },
            {
              icon: <RiSmartphoneLine className="h-6 w-6" />,
              title: 'Ecrã inicial (móvel)',
              description: 'Quando um utilizador adiciona o site ao ecrã inicial, o Apple Touch Icon ou o ícone PWA é utilizado.',
            },
            {
              icon: <RiSearchLine className="h-6 w-6" />,
              title: 'Resultados Google',
              description: 'A Google apresenta o favicon junto ao URL nos resultados de pesquisa móveis.',
            },
            {
              icon: <RiCodeLine className="h-6 w-6" />,
              title: 'Auditoria Lighthouse',
              description: 'O Lighthouse verifica a presença de um favicon – é uma boa prática para o desempenho web.',
            },
            {
              icon: <RiFileZipLine className="h-6 w-6" />,
              title: 'Instalação PWA',
              description: 'Na instalação de uma PWA, os ícones 192×192 e 512×512 são utilizados como ícone da aplicação.',
            },
          ]}
        />

        <Gap variant="line" />

        <SectionSteps
          title="Como transferir os ficheiros gerados"
          description="Após a geração dos ícones, tem várias opções de transferência:"
          grid="two"
          items={[
            {
              icon: <RiFolderZipLine className="h-6 w-6" />,
              title: 'Transferir tudo em ZIP',
              description:
                'O botão «Transferir tudo» agrupa todos os ficheiros gerados num único arquivo ZIP. A opção mais prática quando precisa do conjunto completo de ícones.',
            },
            {
              icon: <RiFileDownloadLine className="h-6 w-6" />,
              title: 'Transferir ficheiros individuais',
              description:
                'Cada ícone gerado tem o seu próprio botão de transferência: pode transferir um único ficheiro sem o conjunto completo. Útil quando precisa de atualizar apenas um tamanho.',
            },
          ]}
        />

        <Gap variant="line" />

        <SectionTabs
          title="Onde e como adicionar um favicon"
          tabs={[
            {
              title: 'WordPress',
              icon: <RiWordpressLine className="h-5 w-5" />,
              content: (
                <div>
                  <p className="text-mid mb-3">A maioria dos temas WordPress possui uma opção integrada para configurar o ícone do site. Encontra-a no painel de administração:</p>
                  <p className="text-mid mb-3">
                    <strong>Aparência → Personalizar → Identidade do site → Ícone do site</strong>
                  </p>
                  <p className="text-light">
                    Importe o ficheiro 512×512: o WordPress gera automaticamente os tamanhos mais pequenos. Para controlo total sobre os ícones, também pode importar os ficheiros diretamente para o
                    diretório raiz via FTP.
                  </p>
                </div>
              ),
            },
            {
              title: 'HTML',
              icon: <RiHtml5Line className="h-5 w-5" />,
              content: (
                <div>
                  <p className="text-mid mb-3">
                    Coloque os ficheiros gerados no diretório raiz do seu site (onde está o index.html). Depois adicione as tags correspondentes na secção &lt;head&gt;:
                  </p>
                  <pre className="bg-primary-light mb-3 overflow-x-auto rounded-lg p-4 text-sm">
                    <code>{`<link rel="icon" href="/favicon.ico" sizes="32x32">
<link rel="icon" href="/icon-32x32.png" type="image/png" sizes="32x32">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">`}</code>
                  </pre>
                  <p className="text-light">O código acima é um exemplo: adapte os caminhos à estrutura do seu site.</p>
                </div>
              ),
            },
            {
              title: 'Next.js / React',
              icon: <RiReactjsLine className="h-5 w-5" />,
              content: (
                <div>
                  <p className="text-mid mb-3">
                    No Next.js (App Router), coloque os ficheiros favicon no diretório <code>app/</code> ou <code>public/</code>:
                  </p>
                  <ul className="text-light mb-3 list-disc pl-5">
                    <li>
                      <code>app/favicon.ico</code> – reconhecido automaticamente pelo Next.js
                    </li>
                    <li>
                      <code>app/apple-icon.png</code> – ícone Apple
                    </li>
                    <li>
                      <code>public/</code> – ícones restantes (192×192, 512×512)
                    </li>
                  </ul>
                  <p className="text-light">
                    Também pode configurar os ícones em <code>layout.tsx</code> através do objeto <code>metadata.icons</code>.
                  </p>
                </div>
              ),
            },
          ]}
        />

        <Gap variant="line" />

        <SectionSteps
          title="Que imagem fonte funciona melhor?"
          description="Um favicon é um gráfico muito pequeno, tão pequeno quanto 16×16 píxeis. Nem toda a imagem é adequada como fonte:"
          grid="two"
          items={[
            {
              icon: <RiShapeLine className="h-6 w-6" />,
              title: 'Formas simples e símbolos legíveis',
              description: 'Logótipos simples, letras individuais ou símbolos funcionam melhor. Evite gráficos complexos com muitos detalhes.',
            },
            {
              icon: <RiAspectRatioLine className="h-6 w-6" />,
              title: 'Formato quadrado',
              description: 'Um favicon é quadrado. Se a imagem fonte tiver proporções diferentes de 1:1, será recortada ou esticada.',
            },
            {
              icon: <RiZoomInLine className="h-6 w-6" />,
              title: 'Tamanho suficientemente grande',
              description: 'Recomendamos uma imagem fonte de pelo menos 512×512 píxeis. Imagens mais pequenas serão ampliadas.',
            },
            {
              icon: <RiImageLine className="h-6 w-6" />,
              title: 'O formato SVG como fonte ideal',
              description: 'O SVG redimensiona-se sem perda de qualidade, portanto os ícones em todos os tamanhos serão nítidos.',
            },
            {
              icon: <RiContrastLine className="h-6 w-6" />,
              title: 'Cores com forte contraste',
              description: 'Um favicon deve ser visível em diferentes fundos (separadores claros, modo escuro). Escolha cores que mantenham a legibilidade.',
            },
          ]}
        />

        <Gap variant="line" />

        <SectionInfo title="Opções de geração: o que faz cada uma?">
          <div className="space-y-4">
            <div>
              <h3 className="h5 mb-2">Fundo (transparente ou cor)</h3>
              <p className="text-mid">Por predefinição, o gerador mantém a transparência. Também pode escolher uma cor de fundo específica.</p>
            </div>
            <div>
              <h3 className="h5 mb-2">Gerar o manifest (site.webmanifest)</h3>
              <p className="text-mid">Ficheiro JSON para aplicações web (PWA). Se não está a criar uma PWA, esta opção não é necessária.</p>
            </div>
          </div>
        </SectionInfo>

        <Gap variant="line" />

        <SectionSteps
          title="O que torna este gerador de favicon especial"
          grid="two"
          items={[
            {
              icon: <RiCodeLine className="h-6 w-6" />,
              title: 'Conforme ao Lighthouse',
              description: 'Todos os tamanhos exigidos pelo Lighthouse e pelos navegadores modernos – gerados numa única etapa.',
            },
            {
              icon: <RiDownloadLine className="h-6 w-6" />,
              title: 'Todos os formatos numa única etapa',
              description: 'favicon.ico, ícones PNG e site.webmanifest opcional – tudo a partir de uma única imagem.',
            },
            {
              icon: <RiImageLine className="h-6 w-6" />,
              title: 'Suporte PNG, JPG e SVG',
              description: 'Pode utilizar o seu logótipo em qualquer formato. Se tiver um SVG, os ícones serão nítidos em todos os tamanhos.',
            },
            {
              icon: <RiSmartphoneLine className="h-6 w-6" />,
              title: 'Pronto para o site e para PWA',
              description: 'A ferramenta gera o ficheiro manifest.json para aplicações web. Abaixo encontra as instruções de integração dos ícones.',
            },
          ]}
        />

        <Gap variant="line" />

        <FaqPanels
          pageUrl={toAbsoluteUrl('/pt/ferramentas/gerador-de-favicon-gratuito')}
          title="Perguntas frequentes sobre o gerador de favicon"
          openByDefault={1}
          items={[
            ...faqItems,
            {
              question: 'Porque é que o favicon não muda depois de importar um novo ficheiro?',
              answer:
                'Os navegadores fazem cache agressivo dos favicons. Depois de importar um novo ícone, limpe a cache do navegador ou adicione um parâmetro de versão ao caminho do ficheiro (ex.: /favicon.ico?v=2). A alteração pode só ficar visível após algumas horas.',
              answerSchemaText: 'Os navegadores fazem cache dos favicons. Limpe a cache ou adicione um parâmetro de versão.',
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
