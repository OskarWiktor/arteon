import Script from 'next/script';
import HeroBanner from '@/components/sections/HeroBanner';
import Breadcrumbs from '@/components/sections/BreadCrumbs';
import JpgPngToWebp from '@/components/sections/tools/JpgPngToWebp';
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
  RiShieldCheckLine,
  RiInfinityFill,
  RiSpeedLine,
  RiDownloadLine,
  RiFileImageLine,
  RiFlashlightLine,
  RiStackLine,
  RiCheckboxCircleLine,
  RiAlertLine,
  RiCloseLine,
  RiSettings3Line,
  RiImageLine,
  RiGlobalLine,
  RiShoppingBagLine,
  RiArticleLine,
} from 'react-icons/ri';

const LOCALE = 'pt' as const;
const TOOL_KEY = 'jpgToWebp' as const;

export const metadata: Metadata = {
  title: 'Conversor JPG/PNG para WebP gratuito online – sem limites',
  description:
    'Conversor online gratuito de JPG e PNG para WebP. Reduza o tamanho das imagens até 35% sem perda de qualidade. A conversão é feita localmente no seu navegador, os ficheiros nunca são enviados para um servidor.',
  alternates: getToolAlternates(TOOL_KEY, LOCALE),
  openGraph: {
    title: 'Conversor JPG/PNG para WebP gratuito online – sem limites',
    description: 'Reduza o tamanho das imagens até 35% sem perda de qualidade. Sem registo, sem limites.',
    url: toAbsoluteUrl('/pt/ferramentas/conversor-jpg-png-para-webp'),
    type: 'website',
    images: [{ url: toAbsoluteUrl('/assets/tools/narzedzia-jpg-png-na-webp-bez-limitu.webp'), width: 1200, height: 630 }],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Conversor JPG e PNG para WebP online – sem limites',
  alternateName: ['Conversor WebP online', 'Converter JPG para WebP', 'Converter PNG para WebP', 'Converter imagens para WebP', 'Compressão de imagens WebP'],
  url: toAbsoluteUrl('/pt/ferramentas/conversor-jpg-png-para-webp'),
  applicationCategory: 'MultimediaApplication',
  applicationSubCategory: 'ImageConverter',
  operatingSystem: 'Any',
  description:
    'Conversor online gratuito de JPG e PNG para WebP. Reduza o tamanho dos ficheiros até 35% sem perda de qualidade. Processamento em lote, otimização automática, execução local.',
  featureList: [
    'Converter ficheiros JPG e PNG para WebP',
    'Reduzir o tamanho dos ficheiros até 35%',
    'Qualidade ajustável (60–95%)',
    'Otimização automática se o ficheiro de saída for maior',
    'Processamento em lote com transferência ZIP',
    'Execução local no navegador',
    'Sem registo e sem limites',
  ],
  inLanguage: 'pt',
  isAccessibleForFree: true,
  offers: { '@type': 'Offer', price: 0, priceCurrency: 'EUR' },
  publisher: { '@type': 'Organization', name: 'Arteon Agency', url: siteUrl },
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Como converter imagens JPG/PNG para WebP',
  description: 'Converta imagens JPG e PNG para o formato WebP e reduza o tamanho dos ficheiros até 35% sem perda de qualidade visível.',
  url: toAbsoluteUrl('/pt/ferramentas/conversor-jpg-png-para-webp'),
  step: [
    { '@type': 'HowToStep', name: 'Adicionar ficheiros', text: 'Arraste e largue ficheiros JPG ou PNG na zona prevista ou clique para selecionar ficheiros.' },
    { '@type': 'HowToStep', name: 'Ajustar a qualidade', text: 'Escolha a qualidade WebP com o cursor (predefinição: 80%). A ferramenta otimiza automaticamente o tamanho.' },
    { '@type': 'HowToStep', name: 'Converter e transferir', text: 'Transfira os ficheiros convertidos individualmente ou como arquivo ZIP.' },
  ],
  publisher: { '@type': 'Organization', name: 'Arteon Agency', url: siteUrl },
};

const faqItems = [
  {
    question: 'O que é o formato WebP?',
    answer:
      'WebP é um formato de imagem desenvolvido pela Google que oferece melhor compressão do que JPG e PNG. Com qualidade visual igual, os ficheiros WebP são geralmente 25 a 35% mais leves. O formato é suportado por todos os navegadores modernos (Chrome, Firefox, Safari, Edge).',
    answerSchemaText: 'Um formato de imagem da Google, 25–35% mais leve com qualidade igual.',
  },
  {
    question: 'As minhas imagens são enviadas para um servidor?',
    answer:
      'Não. Toda a conversão é feita localmente no seu navegador através da API Canvas. Os seus ficheiros nunca saem do seu computador e não são armazenados em lado nenhum. Ao fechar o separador, todos os dados são eliminados da memória.',
    answerSchemaText: 'Não. A conversão é local. Os ficheiros não saem do seu dispositivo.',
  },
  {
    question: 'Existe um limite de ficheiros?',
    answer: 'Não. Pode converter quantos ficheiros quiser – sem limite diário, sem limite de tamanho e sem registo.',
    answerSchemaText: 'Não. Quantos ficheiros quiser, sem limites.',
  },
  {
    question: 'O que acontece se o ficheiro WebP for maior que o original?',
    answer:
      'A ferramenta reduz automaticamente a qualidade passo a passo se o ficheiro de saída for maior que o original. Assim, obtém sempre um ficheiro que não é maior que o original, com a melhor qualidade possível.',
    answerSchemaText: 'A ferramenta reduz automaticamente a qualidade para que o ficheiro de saída nunca seja maior.',
  },
  {
    question: 'Qual é a definição de qualidade ideal?',
    answer:
      '80% é um bom compromisso entre tamanho de ficheiro e qualidade de imagem para a maioria dos sites. Para fotos detalhadas, utilize 85–90%; para gráficos simples e ícones, 65–70% é suficiente.',
    answerSchemaText: '80% para a maioria dos sites. Fotos: 85–90%. Gráficos simples: 65–70%.',
  },
  {
    question: 'Posso converter ficheiros PNG com transparência?',
    answer: 'WebP suporta transparência (canal alfa). Se o seu ficheiro PNG tiver fundo transparente, a transparência é mantida no ficheiro WebP.',
    answerSchemaText: 'Sim. WebP suporta transparência. O canal alfa é mantido.',
  },
  {
    question: 'Todos os navegadores suportam o formato WebP?',
    answer:
      'Sim, todos os navegadores modernos suportam WebP: Chrome (desde a versão 17), Firefox (desde 65), Safari (desde 14), Edge (desde 18). Apenas o Internet Explorer não o suporta, mas já não é mantido pela Microsoft.',
    answerSchemaText: 'Sim. Chrome, Firefox, Safari, Edge. Não Internet Explorer (obsoleto).',
  },
];

export default function JpgPngToWebpPage() {
  return (
    <>
      <Script id="ld-json-webp-converter-pt" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Script id="ld-json-webp-howto-pt" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />

      <HeroBanner
        title="Conversor JPG/PNG para WebP"
        description="Converta as suas imagens JPG e PNG para o formato WebP e reduza o tamanho dos ficheiros até 35% sem perda de qualidade visível. Tudo é executado localmente no seu navegador."
        overlay="black"
        backgroundImage="/assets/tools/narzedzia-jpg-png-na-webp-bez-limitu.webp"
      />

      <Breadcrumbs second={{ href: '/pt/ferramentas', label: 'Ferramentas' }} third={{ href: '/pt/ferramentas/conversor-jpg-png-para-webp', label: 'JPG/PNG para WebP' }} includeJsonLd locale="pt" />

      <ToolEditorLayout>
        <AdSense variant="tool-banner" className="my-3" />
        <JpgPngToWebp />
      </ToolEditorLayout>

      <Wrapper>
        <Gap variant="line" />

        <SectionInfo title="Porquê converter JPG e PNG para WebP?">
          <p className="text-mid">
            O formato WebP oferece ficheiros significativamente mais leves do que JPG e PNG com qualidade visual equivalente. Imagens mais leves significam tempos de carregamento mais rápidos para o seu
            site, melhores Core Web Vitals e melhor experiência do utilizador. A Google recomenda WebP como formato preferencial para imagens web.
          </p>
          <p className="text-mid mt-3">
            Em comparação com JPG, o WebP produz ficheiros em média 25 a 35% mais leves com qualidade igual. Em comparação com PNG, a poupança pode ser ainda maior em compressão com perdas. O WebP
            suporta compressão com e sem perdas, bem como transparência (canal alfa).
          </p>
        </SectionInfo>

        <Gap size="sm" />

        <SectionSteps
          title="Como usar o conversor WebP"
          description="A conversão demora apenas alguns segundos:"
          grid="three"
          items={[
            {
              icon: <RiFileImageLine className="h-6 w-6" />,
              title: '1. Adicionar ficheiros',
              description: 'Arraste e largue ficheiros JPG ou PNG na zona prevista ou clique para selecionar ficheiros no seu dispositivo.',
            },
            {
              icon: <RiFlashlightLine className="h-6 w-6" />,
              title: '2. Ajustar a qualidade',
              description: 'Escolha a qualidade WebP com o cursor (predefinição: 80%). A ferramenta otimiza automaticamente o tamanho do ficheiro.',
            },
            {
              icon: <RiDownloadLine className="h-6 w-6" />,
              title: '3. Transferir',
              description: 'Transfira os ficheiros convertidos individualmente ou todos juntos num arquivo ZIP.',
            },
          ]}
        />

        <Gap variant="line" />

        <SectionInfo title="Como adicionar ficheiros para converter">
          <p className="text-mid">A ferramenta oferece dois métodos para adicionar ficheiros:</p>
          <ul className="text-mid mt-3 ml-6 list-disc space-y-2">
            <li>
              <strong>Arrastar e largar</strong> – pegue nos ficheiros de uma pasta no seu computador e largue-os na zona prevista. Pode arrastar vários ficheiros de uma vez.
            </li>
            <li>
              <strong>Seleção a partir do dispositivo</strong> – clique na zona de adição de ficheiros para abrir a janela de seleção. Mantenha a tecla Ctrl (ou Cmd no Mac) para selecionar vários
              ficheiros ao mesmo tempo.
            </li>
          </ul>
          <p className="text-mid mt-3">
            A ferramenta aceita apenas ficheiros JPG e PNG. Se adicionar acidentalmente um ficheiro noutro formato (ex.: GIF ou BMP), será automaticamente ignorado e surgirá uma mensagem informativa.
          </p>
          <p className="text-mid mt-3">
            <strong>Privacidade:</strong> Todos os ficheiros são processados localmente no navegador. Não são enviados para lado nenhum – não passam por nenhum servidor. Ao fechar o separador ou o
            navegador, os ficheiros são eliminados da memória.
          </p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionDemo
          title="Como interpretar os resultados"
          subtitle="Estado da conversão"
          demo={
            <div className="space-y-3">
              <div className="flex items-center gap-3 rounded-lg border border-neutral-200 bg-white p-3">
                <Badge variant="success" size="sm">
                  Sucesso
                </Badge>
                <span className="text-mid text-sm!">Ficheiro convertido – WebP é mais leve que o original</span>
              </div>
              <div className="flex items-center gap-3 rounded-lg border border-neutral-200 bg-white p-3">
                <Badge variant="warning" size="sm">
                  Otimizado
                </Badge>
                <span className="text-mid text-sm!">A qualidade foi reduzida automaticamente para que o WebP não seja maior que o original</span>
              </div>
              <div className="flex items-center gap-3 rounded-lg border border-neutral-200 bg-white p-3">
                <Badge variant="error" size="sm">
                  Erro
                </Badge>
                <span className="text-mid text-sm!">Não foi possível converter o ficheiro</span>
              </div>
            </div>
          }
        >
          <p className="text-mid mb-4">Para cada ficheiro convertido, vê o estado e a poupança de tamanho:</p>
          <ul className="text-mid list-disc space-y-2 pl-5">
            <li>
              <strong>Tamanho original</strong> – peso do ficheiro JPG ou PNG de entrada.
            </li>
            <li>
              <strong>Tamanho WebP</strong> – peso do ficheiro WebP convertido.
            </li>
            <li>
              <strong>Poupança</strong> – percentagem de redução em relação ao original.
            </li>
            <li>
              <strong>Estado</strong> – indica se a conversão foi bem-sucedida ou se a qualidade foi ajustada automaticamente.
            </li>
          </ul>
        </SectionDemo>

        <Gap variant="line" />

        <SectionInfo title="Definições de qualidade – recomendações">
          <p className="text-mid mb-4">O nível de qualidade ideal depende da utilização. Eis referências para diferentes casos:</p>
          <div className="overflow-x-auto">
            <table className="text-mid w-full text-left">
              <thead>
                <tr className="border-b border-neutral-200">
                  <th className="py-2 pr-4 font-semibold">Utilização</th>
                  <th className="py-2 pr-4 font-semibold">Qualidade</th>
                  <th className="py-2 font-semibold">Nota</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-neutral-100">
                  <td className="py-2 pr-4 font-medium">Fotos de produtos (e-commerce)</td>
                  <td className="py-2 pr-4 whitespace-nowrap">85–90%</td>
                  <td className="text-primary-light0 py-2 text-sm">Alta fidelidade de detalhes</td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="py-2 pr-4 font-medium">Imagens de artigos de blog</td>
                  <td className="py-2 pr-4 whitespace-nowrap">75–80%</td>
                  <td className="text-primary-light0 py-2 text-sm">Bom compromisso para a maioria dos sites</td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="py-2 pr-4 font-medium">Banners hero e fundos</td>
                  <td className="py-2 pr-4 whitespace-nowrap">70–80%</td>
                  <td className="text-primary-light0 py-2 text-sm">Imagens grandes onde o peso importa mais</td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="py-2 pr-4 font-medium">Miniaturas e pré-visualizações</td>
                  <td className="py-2 pr-4 whitespace-nowrap">65–75%</td>
                  <td className="text-primary-light0 py-2 text-sm">Imagens pequenas – perda de qualidade pouco visível</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-medium">Ícones e gráficos simples</td>
                  <td className="py-2 pr-4 whitespace-nowrap">60–70%</td>
                  <td className="text-primary-light0 py-2 text-sm">Poucos detalhes, alta compressibilidade</td>
                </tr>
              </tbody>
            </table>
          </div>
        </SectionInfo>

        <Gap variant="line" />

        <SectionInfo title="Como funciona a Smart Quality?">
          <p className="text-mid">
            Smart Quality é um mecanismo de otimização automática que garante que o ficheiro WebP convertido nunca será maior que o original. Funciona assim:
          </p>
          <ol className="text-mid mt-3 ml-6 list-decimal space-y-2">
            <li>A ferramenta converte a imagem com a qualidade que definiu (ex.: 80{'\u00a0'}%).</li>
            <li>Verifica se o ficheiro de saída é mais leve que o original.</li>
            <li>Se for maior, a qualidade é automaticamente reduzida e uma nova tentativa é iniciada.</li>
            <li>O processo repete-se até que o ficheiro de saída seja mais leve ou que a qualidade desça abaixo de um mínimo seguro.</li>
          </ol>
          <p className="text-mid mt-3">
            A ferramenta escolhe automaticamente os parâmetros ideais. Se uma imagem já estiver muito comprimida (ex.: um JPG a 60{'\u00a0'}% de qualidade), os parâmetros serão automaticamente ajustados
            para conseguir mesmo assim uma redução de tamanho.
          </p>
          <p className="text-mid mt-3">
            Para cada ficheiro, verá a indicação &quot;Qualidade WebP utilizada&quot; – é a qualidade efetivamente aplicada após um eventual ajuste pela Smart Quality.
          </p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionInfo title="Relatório de poupanças – o que mostra?">
          <p className="text-mid">Abaixo dos botões de conversão, encontra um resumo com as informações sobre as poupanças:</p>
          <ul className="text-mid mt-3 ml-6 list-disc space-y-2">
            <li>
              <strong>Tamanho total (entrada)</strong> – soma dos tamanhos de todos os ficheiros originais.
            </li>
            <li>
              <strong>Tamanho total (após conversão)</strong> – soma dos tamanhos de todos os ficheiros WebP.
            </li>
            <li>
              <strong>Poupado</strong> – quanto espaço ganhou com a conversão (em KB/MB e em percentagem).
            </li>
          </ul>
          <p className="text-mid mt-3">
            <strong>Copiar resumo:</strong> O botão copia o relatório para a área de transferência em formato de texto. Pode colá-lo em notas, um e-mail ou um documento – útil para documentar a
            otimização de imagens.
          </p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionInfo title="Quanto se pode poupar convertendo para WebP?">
          <p className="text-mid mb-4">As poupanças dependem do tipo de imagem e da sua compressão original. Eis exemplos para ficheiros típicos:</p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-lg border border-neutral-200 bg-white p-4">
              <p className="text-dark mb-2 font-semibold">Foto JPG (câmara)</p>
              <p className="text-light text-sm">2,4{'\u00a0'}MB → 890{'\u00a0'}KB</p>
              <p className="text-success-icon mt-1 text-sm font-medium">Poupança: ~63{'\u00a0'}%</p>
            </div>
            <div className="rounded-lg border border-neutral-200 bg-white p-4">
              <p className="text-dark mb-2 font-semibold">Gráfico PNG (logótipo)</p>
              <p className="text-light text-sm">180{'\u00a0'}KB → 45{'\u00a0'}KB</p>
              <p className="text-success-icon mt-1 text-sm font-medium">Poupança: ~75{'\u00a0'}%</p>
            </div>
            <div className="rounded-lg border border-neutral-200 bg-white p-4">
              <p className="text-dark mb-2 font-semibold">Foto de produto</p>
              <p className="text-light text-sm">500{'\u00a0'}KB → 185{'\u00a0'}KB</p>
              <p className="text-success-icon mt-1 text-sm font-medium">Poupança: ~63{'\u00a0'}%</p>
            </div>
          </div>
          <p className="text-light mt-4 text-sm">
            As poupanças reais podem variar. O conversor mostra o tamanho exato antes e depois da conversão para cada ficheiro, bem como um resumo das poupanças totais.
          </p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionSteps
          title="Problemas comuns e soluções"
          description="Se os resultados não correspondem às suas expectativas:"
          grid="two"
          items={[
            {
              icon: <RiCheckboxCircleLine className="h-6 w-6" />,
              title: 'O ficheiro WebP é apenas ligeiramente mais leve',
              description: 'Para ficheiros JPG já muito comprimidos ou gráficos PNG simples, o ganho é menor. Experimente uma qualidade mais baixa.',
            },
            {
              icon: <RiAlertLine className="h-6 w-6" />,
              title: 'Perda de qualidade visível',
              description: 'Aumente a qualidade. Para fotos, as diferenças tornam-se frequentemente visíveis abaixo de 80%, especialmente em detalhes finos e texto.',
            },
            {
              icon: <RiCloseLine className="h-6 w-6" />,
              title: 'O ficheiro não converte',
              description: 'Verifique se o ficheiro está no formato JPG ou PNG. Os outros formatos (GIF, BMP, TIFF) não são suportados.',
            },
            {
              icon: <RiSettings3Line className="h-6 w-6" />,
              title: 'A transparência foi perdida',
              description: 'WebP suporta transparência. Se estiver em falta, verifique se o ficheiro original possui mesmo um canal alfa.',
            },
          ]}
        />

        <Gap variant="line" />

        <SectionSteps
          title="Onde usar WebP?"
          description="WebP é adequado para todas as imagens do seu site:"
          grid="two"
          items={[
            {
              icon: <RiGlobalLine className="h-6 w-6" />,
              title: 'Sites e landing pages',
              description: 'Tempos de carregamento mais rápidos, melhores Core Web Vitals e melhor posicionamento no Google.',
            },
            {
              icon: <RiShoppingBagLine className="h-6 w-6" />,
              title: 'E-commerce e fotos de produtos',
              description: 'Centenas de fotos de produtos mais leves – páginas de categoria significativamente mais rápidas.',
            },
            {
              icon: <RiArticleLine className="h-6 w-6" />,
              title: 'Blogs e páginas de conteúdo',
              description: 'As imagens de artigos em WebP carregam mais rápido e reduzem o consumo de dados em dispositivos móveis.',
            },
            {
              icon: <RiImageLine className="h-6 w-6" />,
              title: 'Portfólios e galerias',
              description: 'Imagens de alta qualidade com peso significativamente reduzido – sem perda de qualidade visível.',
            },
          ]}
        />

        <Gap variant="line" />

        <SectionSteps
          title="O que torna este conversor especial?"
          grid="two"
          items={[
            {
              icon: <RiShieldCheckLine className="h-6 w-6" />,
              title: 'Privacidade total',
              description: 'Todos os ficheiros são processados localmente no seu navegador. Nada é enviado para um servidor.',
            },
            {
              icon: <RiInfinityFill className="h-6 w-6" />,
              title: 'Sem limites',
              description: 'Converta quantos ficheiros quiser – sem registo e sem restrições.',
            },
            {
              icon: <RiSpeedLine className="h-6 w-6" />,
              title: 'Otimização automática',
              description: 'A ferramenta reduz automaticamente a qualidade se o ficheiro de saída for maior que o original.',
            },
            {
              icon: <RiStackLine className="h-6 w-6" />,
              title: 'Processamento em lote',
              description: 'Converta vários ficheiros ao mesmo tempo e transfira tudo num arquivo ZIP.',
            },
          ]}
        />

        <Gap variant="line" />

        <FaqPanels
          pageUrl={toAbsoluteUrl('/pt/ferramentas/conversor-jpg-png-para-webp')}
          title="Perguntas frequentes sobre o conversor WebP"
          openByDefault={1}
          items={[
            ...faqItems,
            {
              question: 'Posso converter ficheiros que não sejam JPG e PNG?',
              answer:
                'A ferramenta está otimizada para os formatos JPG e PNG. Os outros formatos (ex.: GIF, BMP, TIFF) são automaticamente ignorados ao adicionar.',
              answerSchemaText: 'Apenas JPG e PNG. Os outros formatos são automaticamente ignorados.',
            },
            {
              question: 'O que significa a mensagem de que o ficheiro é maior que o original?',
              answer:
                'Se vir um aviso indicando que o ficheiro de saída é maior que o original, significa que a imagem original já estava muito comprimida. Neste caso, a conversão para WebP não trará poupanças – é melhor manter o formato original ou experimentar uma qualidade mais baixa.',
              answerSchemaText: 'A imagem original já estava muito comprimida. Mantenha o formato original ou reduza a qualidade.',
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
