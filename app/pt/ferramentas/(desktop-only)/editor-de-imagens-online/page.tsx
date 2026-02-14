import Script from 'next/script';
import HeroBanner from '@/components/sections/HeroBanner';
import Breadcrumbs from '@/components/sections/BreadCrumbs';
import ImageResizeTool from '@/components/sections/tools/ImageResizeTool';
import ToolsCarousel from '@/components/sections/tools/ToolsCarousel';
import FaqPanels from '@/components/ui/FaqPanels';
import Gap from '@/components/ui/Gap';
import SectionInfo from '@/components/ui/sections/SectionInfo';
import SectionSteps from '@/components/ui/sections/SectionSteps';
import SectionDemo from '@/components/ui/sections/SectionDemo';
import SectionTabs from '@/components/ui/sections/SectionTabs';
import Badge from '@/components/ui/Badge';
import Wrapper from '@/components/ui/Wrapper';
import ToolEditorLayout from '@/components/ui/ToolEditorLayout';
import { toAbsoluteUrl, siteUrl } from '@/utils/absoluteUrl';
import { getToolAlternates } from '@/lib/i18n/pages/tool-meta';
import type { Metadata } from 'next';
import AdSense from '@/components/ui/AdSense';
import {
  RiCropLine,
  RiImageLine,
  RiDownloadLine,
  RiInstagramLine,
  RiFacebookLine,
  RiLinkedinLine,
  RiGlobalLine,
  RiArticleLine,
  RiUserLine,
  RiZoomInLine,
  RiFileImageLine,
  RiAspectRatioLine,
  RiLayoutGridLine,
} from 'react-icons/ri';

const LOCALE = 'pt' as const;
const TOOL_KEY = 'imageResize' as const;

export const metadata: Metadata = {
  title: 'Editor de imagens online gratuito – recortar e redimensionar',
  description:
    'Editor de imagens online gratuito. Recorte e redimensione as suas imagens para redes sociais e sites. Modelos prontos, dimensões personalizadas, avatares redondos. Exportação em PNG, JPG, WebP.',
  alternates: getToolAlternates(TOOL_KEY, LOCALE),
  openGraph: {
    title: 'Editor de imagens online gratuito – recortar e redimensionar',
    description: 'Recorte e redimensione as suas imagens para redes sociais e sites. Modelos prontos. Exportação em PNG, JPG, WebP.',
    url: toAbsoluteUrl('/pt/ferramentas/editor-de-imagens-online'),
    type: 'website',
    images: [{ url: toAbsoluteUrl('/assets/tools/narzedzia-zmiana-rozmiaru-i-kadrowanie-zdjecia.webp'), width: 1200, height: 630 }],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Editor de imagens online – recortar e redimensionar',
  alternateName: ['Recortar imagens online', 'Redimensionar imagens online', 'Recortar imagens Instagram', 'Tamanho de capa Facebook', 'Criar banner LinkedIn'],
  url: toAbsoluteUrl('/pt/ferramentas/editor-de-imagens-online'),
  applicationCategory: 'MultimediaApplication',
  applicationSubCategory: 'ImageEditor',
  operatingSystem: 'Any',
  description: 'Recorte e redimensione as suas imagens para redes sociais e sites. Modelos para Instagram, Facebook, LinkedIn. Três formas de recorte, exportação em PNG, JPG, WebP.',
  featureList: [
    'Modelos para Instagram, Facebook, LinkedIn, OG Image',
    'Três formas de recorte: retângulo, quadrado, círculo',
    'Dimensões personalizadas em píxeis',
    'Controlo de zoom e posição',
    'Exportação em PNG, JPG, WebP',
    'Ajuste de qualidade para JPG e WebP',
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
  name: 'Como recortar imagens online',
  description: 'Recorte imagens para redes sociais e sites. Utilize modelos prontos ou introduza as suas próprias dimensões.',
  url: toAbsoluteUrl('/pt/ferramentas/editor-de-imagens-online'),
  step: [
    { '@type': 'HowToStep', name: 'Importar uma imagem', text: 'Arraste e largue uma imagem ou selecione um ficheiro. Formatos suportados: JPG, PNG, WebP.' },
    { '@type': 'HowToStep', name: 'Escolher o recorte', text: 'Selecione um modelo (ex.: Post Instagram, capa Facebook) ou introduza as suas dimensões.' },
    { '@type': 'HowToStep', name: 'Ajustar o zoom e a posição', text: 'Ajuste o zoom e a posição para definir o enquadramento desejado.' },
    { '@type': 'HowToStep', name: 'Transferir', text: 'Escolha o formato de saída (PNG, JPG, WebP) e transfira a imagem recortada.' },
  ],
  publisher: { '@type': 'Organization', name: 'Arteon Agency', url: siteUrl },
};

const faqItems = [
  {
    question: 'Que formatos de imagem são suportados?',
    answer:
      'Pode importar imagens JPG, PNG e WebP. O formato de saída (PNG, JPG ou WebP) é escolhido no momento da transferência. Para recortes em forma de círculo, PNG ou WebP é recomendado, pois JPG não suporta transparência.',
    answerSchemaText: 'Entrada: JPG, PNG, WebP. Saída: PNG, JPG, WebP (à escolha).',
  },
  {
    question: 'Que modelos de tamanho estão disponíveis?',
    answer:
      'Modelos para Instagram (quadrado 1080×1080, retrato 1080×1350, story/reels 1080×1920), Facebook (publicação 1200×630, capa 820×360), LinkedIn (publicação 1200×1200, banner 1584×396), OG Image (1200×630), imagem de artigo, banner de site, secção hero e mais.',
    answerSchemaText: 'Instagram, Facebook, LinkedIn, OG Image, imagem de artigo, banner de site e outros.',
  },
  {
    question: 'Posso criar avatares redondos?',
    answer:
      'Sim. O editor suporta três formas de recorte: retângulo, quadrado e círculo. Na forma de círculo, a imagem é guardada com fundo transparente (PNG ou WebP). Ideal para fotos de perfil e avatares.',
    answerSchemaText: 'Sim. Três formas: retângulo, quadrado, círculo. Círculo = fundo transparente.',
  },
  {
    question: 'As minhas imagens são enviadas para um servidor?',
    answer: 'Não. Todo o processamento é feito localmente no seu navegador através da API Canvas. As suas imagens nunca saem do seu computador e não são armazenadas em lado nenhum.',
    answerSchemaText: 'Não. Processamento local no navegador. As imagens não saem do seu dispositivo.',
  },
  {
    question: 'Posso ajustar a qualidade da imagem de saída?',
    answer:
      'Sim. Para os formatos de saída JPG e WebP, pode ajustar o nível de qualidade. Valores mais baixos produzem ficheiros mais leves, mas com uma ligeira perda de qualidade visível. O PNG é guardado sem perdas.',
    answerSchemaText: 'Sim. Ajuste de qualidade para JPG e WebP. PNG é sem perdas.',
  },
  {
    question: 'O que acontece se a minha imagem for menor que o modelo?',
    answer:
      'O editor redimensiona a imagem para o tamanho alvo. Se a imagem original for significativamente menor que o modelo, o resultado pode parecer desfocado. Para melhores resultados, utilize uma imagem pelo menos tão grande quanto o modelo.',
    answerSchemaText: 'A imagem é redimensionada. Para melhor qualidade, o original deve ser pelo menos tão grande quanto o modelo.',
  },
];

export default function ImageResizePage() {
  return (
    <>
      <Script id="ld-json-image-resize-pt" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Script id="ld-json-image-howto-pt" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />

      <HeroBanner
        title="Editor de imagens online"
        description="Recorte e redimensione as suas imagens para redes sociais, sites e materiais impressos. Modelos prontos para Instagram, Facebook e LinkedIn – ou introduza as suas próprias dimensões."
        overlay="black"
        backgroundImage="/assets/tools/narzedzia-zmiana-rozmiaru-i-kadrowanie-zdjecia.webp"
      />

      <Breadcrumbs second={{ href: '/pt/ferramentas', label: 'Ferramentas' }} third={{ href: '/pt/ferramentas/editor-de-imagens-online', label: 'Editor de imagens' }} includeJsonLd locale="pt" />

      <ToolEditorLayout>
        <AdSense variant="tool-banner" className="my-3" />
        <ImageResizeTool />
      </ToolEditorLayout>

      <Wrapper>
        <Gap variant="line" />

        <SectionInfo title="Recorte as suas imagens para cada plataforma">
          <p className="text-mid">
            Cada plataforma tem os seus próprios requisitos de imagem – o Instagram favorece imagens quadradas ou verticais, o Facebook tem dimensões de capa específicas, o LinkedIn espera tamanhos de
            banner precisos. O editor oferece modelos prontos para todos os formatos comuns e permite também introduzir dimensões personalizadas.
          </p>
          <p className="text-mid mt-3">
            A ferramenta funciona inteiramente no seu navegador – nenhuma imagem é enviada para um servidor. Pode ajustar o zoom e a posição do recorte e transferir o resultado em três formatos: PNG
            (sem perdas, com transparência), JPG (ficheiro mais leve, sem transparência) e WebP (compressão ótima).
          </p>
        </SectionInfo>

        <Gap size="sm" />

        <SectionSteps
          title="Como usar o editor de imagens"
          description="O recorte demora apenas alguns segundos:"
          grid="four"
          items={[
            {
              icon: <RiImageLine className="h-6 w-6" />,
              title: '1. Importar uma imagem',
              description: 'Arraste e largue uma imagem ou selecione um ficheiro. Formatos suportados: JPG, PNG, WebP.',
            },
            {
              icon: <RiCropLine className="h-6 w-6" />,
              title: '2. Escolher o recorte',
              description: 'Selecione um modelo predefinido ou introduza as suas próprias dimensões em píxeis.',
            },
            {
              icon: <RiZoomInLine className="h-6 w-6" />,
              title: '3. Ajustar',
              description: 'Ajuste o zoom e a posição para definir o enquadramento desejado.',
            },
            {
              icon: <RiDownloadLine className="h-6 w-6" />,
              title: '4. Transferir',
              description: 'Escolha o formato de saída (PNG, JPG, WebP) e transfira a imagem recortada.',
            },
          ]}
        />

        <Gap variant="line" />

        <SectionInfo title="Como adicionar uma imagem?">
          <p className="text-mid">A ferramenta aceita imagens nos formatos JPG, PNG e WebP. Pode adicionar uma imagem de duas formas:</p>
          <ul className="text-mid mt-3 list-disc space-y-2 pl-5">
            <li>
              <strong>Arrastar e largar</strong> – pegue num ficheiro de uma pasta no seu computador e largue-o na zona prevista (zona com o contorno a tracejado).
            </li>
            <li>
              <strong>Seleção a partir do dispositivo</strong> – clique na zona de adição de ficheiro para abrir a janela de seleção.
            </li>
          </ul>
          <p className="text-mid mt-3">
            Após adicionar, a ferramenta lê automaticamente as dimensões originais da imagem e apresenta uma pré-visualização. Pode agora passar às definições de recorte.
          </p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionInfo title="Definir as dimensões alvo">
          <p className="text-mid">
            No separador <strong>Dimensões em px</strong>, introduza a largura e a altura manualmente. A opção <strong>Manter proporções</strong> ajusta automaticamente a segunda dimensão.
          </p>
          <p className="text-mid mt-3">
            No separador <strong>Modelos</strong>, selecione um formato predefinido (ex.: publicação Instagram, capa Facebook, imagem OG). A ferramenta ajusta automaticamente as dimensões em píxeis.
          </p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionDemo
          title="Tamanhos de imagem recomendados por plataforma"
          demo={
            <div className="overflow-x-auto">
              <table className="text-mid w-full text-left text-sm!">
                <thead>
                  <tr className="border-b border-neutral-200">
                    <th className="py-2 pr-4 font-semibold">Plataforma</th>
                    <th className="py-2 pr-4 font-semibold">Formato</th>
                    <th className="py-2 font-semibold">Tamanho (px)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-neutral-100">
                    <td className="py-2 pr-4">Instagram</td>
                    <td className="py-2 pr-4">Publicação (quadrado)</td>
                    <td className="py-2">1080 × 1080</td>
                  </tr>
                  <tr className="border-b border-neutral-100">
                    <td className="py-2 pr-4">Instagram</td>
                    <td className="py-2 pr-4">Story / Reels</td>
                    <td className="py-2">1080 × 1920</td>
                  </tr>
                  <tr className="border-b border-neutral-100">
                    <td className="py-2 pr-4">Facebook</td>
                    <td className="py-2 pr-4">Publicação</td>
                    <td className="py-2">1200 × 630</td>
                  </tr>
                  <tr className="border-b border-neutral-100">
                    <td className="py-2 pr-4">Facebook</td>
                    <td className="py-2 pr-4">Capa</td>
                    <td className="py-2">820 × 360</td>
                  </tr>
                  <tr className="border-b border-neutral-100">
                    <td className="py-2 pr-4">LinkedIn</td>
                    <td className="py-2 pr-4">Publicação</td>
                    <td className="py-2">1200 × 1200</td>
                  </tr>
                  <tr className="border-b border-neutral-100">
                    <td className="py-2 pr-4">LinkedIn</td>
                    <td className="py-2 pr-4">Banner de perfil</td>
                    <td className="py-2">1584 × 396</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4">Site</td>
                    <td className="py-2 pr-4">Imagem OG</td>
                    <td className="py-2">1200 × 630</td>
                  </tr>
                </tbody>
              </table>
            </div>
          }
        >
          <p className="text-mid">
            Cada plataforma apresenta as imagens em proporções e tamanhos específicos. Se uma imagem não cumprir os requisitos, é automaticamente recortada ou deformada – frequentemente com resultados
            indesejados.
          </p>
          <p className="text-mid mt-3">O editor oferece modelos prontos para todas as plataformas comuns. Basta selecionar o modelo pretendido e a ferramenta ajusta automaticamente as dimensões.</p>
        </SectionDemo>

        <Gap variant="line" />

        <SectionSteps
          title="Modelos por categoria"
          description="O editor oferece modelos para diferentes utilizações:"
          grid="three"
          items={[
            {
              icon: <RiInstagramLine className="h-6 w-6" />,
              title: 'Instagram',
              description: 'Publicação (quadrado), retrato (4:5), story/reels (9:16). Todos na resolução recomendada.',
            },
            {
              icon: <RiFacebookLine className="h-6 w-6" />,
              title: 'Facebook',
              description: 'Publicação (1200×630), capa (820×360), imagem de evento e mais.',
            },
            {
              icon: <RiLinkedinLine className="h-6 w-6" />,
              title: 'LinkedIn',
              description: 'Publicação (1200×1200), banner de perfil (1584×396), capa de página de empresa.',
            },
            {
              icon: <RiGlobalLine className="h-6 w-6" />,
              title: 'Site',
              description: 'Imagem OG (1200×630), banner hero, imagem de artigo e dimensões personalizadas.',
            },
            {
              icon: <RiArticleLine className="h-6 w-6" />,
              title: 'Blog e artigos',
              description: 'Imagens de pré-visualização, imagens de artigo e miniaturas nos tamanhos mais comuns.',
            },
            {
              icon: <RiUserLine className="h-6 w-6" />,
              title: 'Avatares',
              description: 'Fotos de perfil quadradas e redondas em diferentes tamanhos.',
            },
          ]}
        />

        <Gap variant="line" />

        <SectionInfo title="Como recortar uma imagem">
          <p className="text-mid">
            Após definir as dimensões alvo, uma zona de recorte interativa aparece na pré-visualização. A parte luminosa da imagem é a secção que será guardada; o resto é escurecido.
          </p>
          <div className="mt-4 space-y-4">
            <div>
              <p className="text-dark font-semibold">Mover o recorte</p>
              <p className="text-mid mt-1">Agarre a zona luminosa e arraste-a para qualquer lugar na imagem. Assim escolhe que secção da foto será exportada.</p>
            </div>
            <div>
              <p className="text-dark font-semibold">Redimensionar através das pegas</p>
              <p className="text-mid mt-1">
                Nos cantos da zona de recorte encontram-se pequenos quadrados (pegas). Arrastá-los altera o tamanho do recorte: pode aumentá-lo ou reduzi-lo mantendo as proporções escolhidas.
              </p>
            </div>
            <div>
              <p className="text-dark font-semibold">Zoom</p>
              <p className="text-mid mt-1">
                No separador <strong>Zoom</strong>, um cursor permite ajustar o zoom (100-300%). Um valor mais alto significa que o recorte cobre uma secção mais pequena da imagem original, útil para
                recortar um detalhe preciso.
              </p>
            </div>
            <div>
              <p className="text-dark font-semibold">Controlo de posição preciso</p>
              <p className="text-mid mt-1">
                No separador <strong>Posição</strong>, pode definir a posição exata do recorte em percentagens (0-100% para os eixos X e Y). Os botões de centragem permitem posicionar rapidamente o
                recorte no centro da imagem.
              </p>
            </div>
          </div>
        </SectionInfo>

        <Gap variant="line" />

        <SectionDemo
          title="Formas de recorte"
          demo={
            <div className="tool-section space-y-3">
              <div className="flex flex-wrap gap-2">
                <Badge as="button" variant="default" size="lg" className="border-black/10 hover:bg-neutral-100">
                  Retângulo
                </Badge>
                <Badge as="button" variant="selected" size="lg">
                  Quadrado
                </Badge>
                <Badge as="button" variant="default" size="lg" className="border-black/10 hover:bg-neutral-100">
                  Círculo
                </Badge>
              </div>
            </div>
          }
        >
          <p className="text-mid">
            No separador <strong>Formas de recorte</strong>, escolha a forma da imagem exportada: retângulo (com as proporções selecionadas), quadrado (força 1:1) ou círculo (com fundo transparente).
          </p>
          <p className="text-mid mt-3">
            A forma círculo cria um avatar redondo com fundo transparente fora do círculo. A ferramenta muda automaticamente o formato para PNG ou WebP, pois o JPG não suporta transparência.
          </p>
        </SectionDemo>

        <Gap variant="line" />

        <SectionInfo title="Grelha 3×3: para que serve?">
          <p className="text-mid">
            Uma grelha que divide a imagem em 9 partes iguais é visível na zona de recorte. É uma visualização da <strong>regra dos terços</strong>, um dos princípios fundamentais da composição
            fotográfica.
          </p>
          <p className="text-mid mt-3">
            A regra indica que os elementos mais importantes de uma foto (rosto, produto, ponto de interesse) devem ser colocados nas interseções das linhas da grelha ou ao longo delas. Esta
            composição é mais dinâmica e agradável ao olhar do que colocar o sujeito exatamente no centro.
          </p>
          <p className="text-mid mt-3">
            No separador <strong>Cor da grelha</strong>, pode mudar a cor das linhas (verde, branco, preto, vermelho, amarelo) para que a grelha seja claramente visível em diferentes imagens.
          </p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionTabs
          title="Exportação: que formato escolher?"
          tabs={[
            {
              title: 'JPG',
              icon: <RiImageLine className="h-5 w-5" />,
              content: (
                <div>
                  <p className="text-mid mb-3">O formato mais popular para fotos. Boa compressão mantendo a qualidade visual. Não suporta transparência: o fundo será sempre preenchido com uma cor.</p>
                  <p className="text-mid">Uma boa escolha para fotos de produtos, retratos e a maioria dos visuais de sites. O cursor de qualidade (60-100%) controla a compressão.</p>
                </div>
              ),
            },
            {
              title: 'PNG',
              icon: <RiFileImageLine className="h-5 w-5" />,
              content: (
                <div>
                  <p className="text-mid mb-3">Formato sem perdas: preserva a qualidade total, mas os ficheiros são maiores. Suporta transparência (necessário para a forma círculo).</p>
                  <p className="text-mid">Uma boa escolha para visuais com texto, ícones e imagens que necessitam de bordas nítidas.</p>
                </div>
              ),
            },
            {
              title: 'WebP',
              icon: <RiCropLine className="h-5 w-5" />,
              content: (
                <div>
                  <p className="text-mid mb-3">
                    Formato moderno que combina as vantagens do JPG e do PNG: ficheiros leves, boa qualidade, suporte de transparência. Compatível com todos os navegadores modernos.
                  </p>
                  <p className="text-mid">Recomendado para sites: ficheiros mais pequenos significam carregamento mais rápido.</p>
                </div>
              ),
            },
          ]}
        />

        <Gap variant="line" />

        <SectionSteps
          title="Proporções de imagem: o que significam?"
          description="A relação de aspeto é a relação entre a largura e a altura de uma imagem. Escreve-se como dois números separados por dois pontos:"
          grid="two"
          items={[
            { icon: <RiLayoutGridLine className="h-6 w-6" />, title: '1:1 (quadrado)', description: 'A largura é igual à altura. Publicação quadrada Instagram, fotos de perfil, ícones.' },
            {
              icon: <RiAspectRatioLine className="h-6 w-6" />,
              title: '4:5 (vertical)',
              description: 'Formato ligeiramente vertical. Publicação vertical Instagram: ocupa mais espaço no feed do que um quadrado.',
            },
            {
              icon: <RiImageLine className="h-6 w-6" />,
              title: '3:2 (clássico)',
              description: 'Proporções tradicionais da fotografia analógica. Muitas câmaras digitais também utilizam este formato.',
            },
            {
              icon: <RiCropLine className="h-6 w-6" />,
              title: '16:9 (panorâmico)',
              description: 'Formato padrão de vídeo HD, apresentações e monitores. YouTube, vídeo Facebook, banners de sites.',
            },
            {
              icon: <RiInstagramLine className="h-6 w-6" />,
              title: '9:16 (vertical ecrã inteiro)',
              description: '16:9 invertido: formato vertical que preenche todo o ecrã do telefone. Instagram Stories, TikTok, YouTube Shorts.',
            },
          ]}
        />

        <Gap variant="line" />

        <FaqPanels
          pageUrl={toAbsoluteUrl('/pt/ferramentas/editor-de-imagens-online')}
          title="Perguntas frequentes sobre o editor de imagens"
          openByDefault={1}
          items={[
            ...faqItems,
            {
              question: 'Porque é que o formato JPG não está disponível com a forma círculo?',
              answer:
                'O formato JPG não suporta transparência. A forma círculo necessita de fundo transparente fora do círculo, por isso a ferramenta limita automaticamente a escolha a PNG ou WebP – formatos com canal alfa.',
              answerSchemaText: 'JPG não suporta transparência. A forma círculo necessita de PNG ou WebP.',
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
