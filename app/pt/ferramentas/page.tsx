import HeroBanner from '@/components/sections/HeroBanner';
import Button from '@/components/ui/buttons/Button';
import Gap from '@/components/ui/Gap';
import SectionInfo from '@/components/ui/sections/SectionInfo';
import SectionSteps from '@/components/ui/sections/SectionSteps';
import FaqPanels from '@/components/ui/FaqPanels';
import Wrapper from '@/components/ui/Wrapper';
import Script from 'next/script';
import {
  RiImageEditLine,
  RiCropLine,
  RiAppsLine,
  RiFileTextLine,
  RiArticleLine,
  RiMailLine,
  RiContrast2Line,
  RiPaletteLine,
  RiPantoneLine,
  RiQrCodeLine,
  RiShieldCheckLine,
  RiInfinityFill,
  RiGlobalLine,
  RiLockLine,
} from 'react-icons/ri';
import { toAbsoluteUrl, siteUrl } from '@/utils/absoluteUrl';
import { getToolsIndexAlternates } from '@/lib/i18n/pages/tool-meta';

export const metadata = {
  title: 'Ferramentas online gratuitas | Imagens, SEO, cores, favicon',
  description: '10 ferramentas gratuitas: conversor WebP, gerador de favicon, contador de texto, extrator de cores e códigos QR. Para sites e redes sociais.',
  alternates: getToolsIndexAlternates('pt'),
  openGraph: {
    title: 'Ferramentas online gratuitas | Imagens, SEO, cores, favicon',
    description: '10 ferramentas gratuitas: conversor WebP, gerador de favicon, contador de texto, extrator de cores e códigos QR. Para sites e redes sociais.',
    url: toAbsoluteUrl('/pt/ferramentas'),
    type: 'website',
    images: [
      {
        url: toAbsoluteUrl('/assets/arteon-logo-on-mockup.webp'),
        width: 1200,
        height: 630,
      },
    ],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Ferramentas online gratuitas',
  description: '10 ferramentas gratuitas: conversor WebP, gerador de favicon, contador de texto, extrator de cores e códigos QR. Para sites e redes sociais.',
  url: toAbsoluteUrl('/pt/ferramentas'),
  inLanguage: 'pt',
  isPartOf: {
    '@type': 'WebSite',
    name: 'Arteon Agency',
    url: siteUrl,
  },
  about: [
    { '@type': 'Thing', name: 'Otimização de imagens' },
    { '@type': 'Thing', name: 'SEO' },
    { '@type': 'Thing', name: 'Cores e branding' },
    { '@type': 'Thing', name: 'Geradores online' },
  ],
  mainEntity: {
    '@type': 'ItemList',
    numberOfItems: 10,
    itemListElement: [
      {
        '@type': 'WebApplication',
        position: 1,
        name: 'Conversor JPG e PNG para WebP online',
        description: 'Conversor online gratuito de JPG e PNG para WebP. Reduz o peso dos ficheiros até 35 % sem perda de qualidade visível. Sem registo – os ficheiros permanecem no seu navegador.',
        url: toAbsoluteUrl('/pt/ferramentas/conversor-jpg-png-para-webp'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 2,
        name: 'Editor de imagens online',
        description: 'Recorte e redimensione as suas imagens para redes sociais e sites. Modelos prontos a usar, dimensões personalizadas e avatares redondos.',
        url: toAbsoluteUrl('/pt/ferramentas/editor-de-imagens-online'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 3,
        name: 'Gerador de favicon online',
        description: 'Gerador de favicon gratuito. Cria favicon.ico e ícones PNG (16×16 a 512×512) a partir de uma única imagem – compatível com todos os navegadores e Lighthouse.',
        url: toAbsoluteUrl('/pt/ferramentas/gerador-de-favicon-gratuito'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 4,
        name: 'Verificador de meta título e descrição',
        description:
          'Verificador de meta título e descrição com pré-visualização Google. Mostra o número de caracteres e a largura em píxeis para evitar títulos e descrições truncados nos resultados de pesquisa.',
        url: toAbsoluteUrl('/pt/ferramentas/verificador-de-meta-titulo-e-descricao'),
        applicationCategory: 'DeveloperApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 5,
        name: 'Gerador de assinatura de e-mail HTML',
        description: 'Gerador gratuito de assinatura de e-mail HTML. Preencha os seus dados de contacto, link CTA e perfis de redes sociais, depois copie o código HTML para o Gmail ou Outlook.',
        url: toAbsoluteUrl('/pt/ferramentas/gerador-de-assinatura-de-email-gratuito'),
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 6,
        name: 'Verificador de contraste e legibilidade de cores',
        description: 'Verifica o contraste e a legibilidade das cores de texto e fundo segundo as WCAG. Calcula o rácio de contraste e propõe ajuste automático.',
        url: toAbsoluteUrl('/pt/ferramentas/verificador-de-contraste-de-cores'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 7,
        name: 'Extrator de cores de imagem online',
        description: 'Extrator de cores gratuito. Importe uma foto ou logótipo e obtenha uma paleta de até 12 cores dominantes (HEX e RGB).',
        url: toAbsoluteUrl('/pt/ferramentas/extrator-de-cores-de-imagem'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 8,
        name: 'Gerador de paletas de cores online',
        description: 'Gere paletas a partir de uma cor de base. Monocromática, triádica, análoga, complementar e mais – com variantes pastel, escura e minimalista.',
        url: toAbsoluteUrl('/pt/ferramentas/gerador-de-paletas-de-cores'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 9,
        name: 'Contador de palavras e caracteres online',
        description:
          'Contador de palavras e caracteres gratuito com avaliação do comprimento. Verifique se o comprimento do texto é adequado para uma página inicial, página de serviço, artigo de blog ou ficha de produto.',
        url: toAbsoluteUrl('/pt/ferramentas/contador-de-palavras-e-caracteres'),
        applicationCategory: 'DeveloperApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 10,
        name: 'Gerador de códigos QR online',
        description: 'Gerador de códigos QR gratuito. Crie códigos QR para sites, vCards, menus ou flyers. Exportação em PNG e SVG, sem registo, sem limite.',
        url: toAbsoluteUrl('/pt/ferramentas/gerador-de-codigos-qr-gratuito'),
        applicationCategory: 'UtilityApplication',
        operatingSystem: 'Any',
      },
    ],
  },
};

const faqItems = [
  {
    question: 'As ferramentas são pagas?',
    answer: 'Não. Todas as ferramentas são gratuitas, sem subscrição e sem custos ocultos.',
  },
  {
    question: 'Os meus ficheiros são enviados para um servidor?',
    answer: 'Não. Todas as ferramentas funcionam inteiramente no seu navegador. Os ficheiros nunca saem do seu computador e não são armazenados em lado nenhum.',
  },
  {
    question: 'Tenho de criar uma conta?',
    answer: 'Não. Pode utilizar as ferramentas imediatamente, sem se registar nem criar conta.',
  },
  {
    question: 'Existe um limite de utilização?',
    answer: 'Não. Utilize as ferramentas sem restrições – sem limite diário, sem limite de ficheiros, sem limite de conversões.',
  },
  {
    question: 'Para que servem estas ferramentas?',
    answer:
      'Ajudam a preparar conteúdos para sites, redes sociais e impressão: otimizar imagens, criar favicons, verificar comprimento de texto, gerar códigos QR, escolher cores e verificar a sua legibilidade.',
  },
  {
    question: 'As ferramentas funcionam no telemóvel?',
    answer: 'Sim, mas algumas ferramentas (por ex. o conversor WebP e o gerador de favicon) estão otimizadas para computador, pois processam ficheiros volumosos.',
  },
];

export default function ToolsIndexPage() {
  return (
    <>
      <HeroBanner
        title="Ferramentas online gratuitas"
        description="Conversor de imagens, gerador de favicon, contador de texto, ferramentas de cores e códigos QR. Sem registo, sem limite – tudo funciona no seu navegador."
        backgroundImage="/assets/arteon-logo-on-mockup.webp"
        overlay="black"
      />

      <Wrapper>
        <Gap size="sm" />

        <SectionSteps
          title="Imagens e favicons"
          description="Ferramentas para preparar fotos, gráficos e ícones para sites e redes sociais."
          grid="three"
          items={[
            {
              icon: <RiImageEditLine className="h-8 w-8" />,
              title: 'Conversor JPG/PNG para WebP',
              topImageAlt: 'Conversor JPG/PNG para WebP Arteon',
              topImageSrc: '/assets/tools/jpg-png-to-webp-converter/conversor-jpg-png-para-webp-pt.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    Converta as suas imagens JPG ou PNG para o formato <strong>WebP</strong> e reduza o peso dos ficheiros. Tempos de carregamento mais rápidos para o seu site.
                  </p>
                  <div className="mt-4">
                    <Button arrow link="/pt/ferramentas/conversor-jpg-png-para-webp">
                      Abrir ferramenta
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiCropLine className="h-8 w-8" />,
              title: 'Editor de imagens online',
              topImageAlt: 'Editor de imagens online Arteon',
              topImageSrc: '/assets/tools/narzedzia-zmiana-rozmiaru-i-kadrowanie-zdjecia.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Recorte as suas imagens no formato ideal para redes sociais ou o seu site. Escolha um formato predefinido ou introduza as suas dimensões – exportação em PNG, JPG ou WebP.</p>
                  <div className="mt-4">
                    <Button arrow link="/pt/ferramentas/editor-de-imagens-online">
                      Abrir ferramenta
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiAppsLine className="h-8 w-8" />,
              title: 'Gerador de favicon',
              topImageAlt: 'Gerador de favicon Arteon',
              topImageSrc: '/assets/tools/narzedzia-darmowy-generator-favicon-ico.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    Gere <strong>favicon.ico</strong> e ícones PNG 180x180, 192x192 e 512x512 a partir de uma única imagem – conforme às exigências dos navegadores e do Lighthouse.
                  </p>
                  <div className="mt-4">
                    <Button arrow link="/pt/ferramentas/gerador-de-favicon-gratuito">
                      Abrir ferramenta
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />

        <Gap size="sm" />

        <SectionSteps
          title="Texto e SEO"
          description="Ferramentas para verificar o comprimento de texto, as tags meta e pré-visualizar a sua página nos resultados de pesquisa."
          grid="three"
          items={[
            {
              icon: <RiFileTextLine className="h-8 w-8" />,
              title: 'Verificador de meta título e descrição',
              topImageAlt: 'Verificador de meta título e descrição Arteon',
              topImageSrc: '/assets/tools/narzedzia-licznik-dlugosci-meta-title-i-description.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Verifique o número de caracteres, palavras e a largura em píxeis – com pré-visualização da aparência da sua página nos resultados Google. Evite títulos e descrições truncados.</p>
                  <div className="mt-4">
                    <Button arrow link="/pt/ferramentas/verificador-de-meta-titulo-e-descricao">
                      Abrir ferramenta
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiArticleLine className="h-8 w-8" />,
              title: 'Contador de palavras e caracteres',
              topImageAlt: 'Contador de palavras e caracteres Arteon',
              topImageSrc: '/assets/tools/narzedzia-licznik-slow-i-znakow.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    Verifique se o comprimento do texto é adequado para uma página inicial, página de serviço, artigo de blog ou ficha de produto. A ferramenta conta palavras, caracteres, parágrafos e
                    estima o tempo de leitura.
                  </p>
                  <div className="mt-4">
                    <Button arrow link="/pt/ferramentas/contador-de-palavras-e-caracteres">
                      Abrir ferramenta
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />

        <Gap size="sm" />

        <SectionSteps
          title="E-mail e comunicação"
          description="Ferramentas para comunicação por e-mail profissional e imagem de marca coerente."
          grid="three"
          items={[
            {
              icon: <RiMailLine className="h-8 w-8" />,
              title: 'Gerador de assinatura de e-mail HTML gratuito',
              topImageAlt: 'Gerador de assinatura de e-mail HTML gratuito Arteon',
              topImageSrc: '/assets/tools/narzedzia-darmowy-generator-stopki-mailowej.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    Crie uma assinatura de e-mail profissional em minutos. Preencha os seus dados, escolha as cores e copie o código HTML para o Gmail, Outlook ou qualquer outro cliente de e-mail.
                  </p>
                  <div className="mt-4">
                    <Button arrow link="/pt/ferramentas/gerador-de-assinatura-de-email-gratuito">
                      Abrir ferramenta
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />

        <Gap size="sm" />

        <SectionSteps
          title="Códigos QR"
          description="Gerador de códigos QR para sites, cartões de visita, menus e suportes impressos."
          grid="three"
          items={[
            {
              icon: <RiQrCodeLine className="h-8 w-8" />,
              title: 'Gerador de códigos QR gratuito',
              topImageAlt: 'Gerador de códigos QR gratuito Arteon',
              topImageSrc: '/assets/tools/qr-code-generator/gerador-de-codigos-qr-gratuito-pt.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Crie um código QR para um site, vCard, menu ou flyer. Exportação em PNG e SVG – sem registo, sem limite.</p>
                  <div className="mt-4">
                    <Button arrow link="/pt/ferramentas/gerador-de-codigos-qr-gratuito">
                      Abrir ferramenta
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />

        <Gap size="sm" />

        <SectionSteps
          title="Cores e acessibilidade"
          description="Ferramentas para trabalhar com cores, contraste e acessibilidade WCAG."
          grid="three"
          items={[
            {
              icon: <RiContrast2Line className="h-8 w-8" />,
              title: 'Verificador de contraste e legibilidade',
              topImageAlt: 'Verificador de contraste de cores Arteon',
              topImageSrc: '/assets/tools/color-contrast-and-readability-checker/verificador-de-contraste-de-cores-pt.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    Verifique se as suas cores de texto e fundo são legíveis. Introduza os códigos de cor, consulte o rácio de contraste <strong>WCAG</strong> e utilize a função{' '}
                    <strong>Ajustar</strong> para correção automática.
                  </p>
                  <div className="mt-4">
                    <Button arrow link="/pt/ferramentas/verificador-de-contraste-de-cores">
                      Abrir ferramenta
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiPantoneLine className="h-8 w-8" />,
              title: 'Extrator de cores de imagem',
              topImageAlt: 'Extrator de cores de imagem Arteon',
              topImageSrc: '/assets/tools/image-color-extractor/extrator-de-cores-de-imagem-pt.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Importe uma foto ou logótipo – a ferramenta extrairá as cores dominantes. Copie os códigos HEX com um clique e utilize-os em qualquer lugar.</p>
                  <div className="mt-4">
                    <Button arrow link="/pt/ferramentas/extrator-de-cores-de-imagem">
                      Abrir ferramenta
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiPaletteLine className="h-8 w-8" />,
              title: 'Gerador de paletas de cores',
              topImageAlt: 'Gerador de paletas de cores Arteon',
              topImageSrc: '/assets/tools/color-palette-generator/gerador-de-paletas-de-cores-pt.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Escolha uma cor de base e gere 9 paletas: monocromática, complementar, triádica, pastel, escura e mais. Copie os códigos HEX com um clique.</p>
                  <div className="mt-4">
                    <Button arrow link="/pt/ferramentas/gerador-de-paletas-de-cores">
                      Abrir ferramenta
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />

        <Gap variant="line" />

        <SectionInfo title="O que são as ferramentas Arteon?">
          <p className="mb-4">
            10 ferramentas online gratuitas para criar e otimizar conteúdos para sites, redes sociais e impressão – conversor WebP, gerador de favicon, contador de texto, extrator de cores, gerador de
            paletas e códigos QR.
          </p>
          <p>Todas as ferramentas funcionam no seu navegador – os ficheiros nunca são enviados para um servidor. Utilize-as sem registo e sem limite.</p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionSteps
          title="Porquê utilizar as ferramentas Arteon?"
          grid="two"
          items={[
            {
              icon: <RiShieldCheckLine className="h-6 w-6" />,
              title: 'Privacidade total',
              description: 'Todas as ferramentas processam os ficheiros localmente no seu navegador. Nada é enviado para um servidor – os dados desaparecem quando fecha o separador.',
            },
            {
              icon: <RiInfinityFill className="h-6 w-6" />,
              title: 'Sem limite de utilização',
              description: 'Utilize as ferramentas sem restrições – sem limite diário, sem limite de ficheiros, sem limite de conversões. Tantas vezes quantas necessário.',
            },
            {
              icon: <RiLockLine className="h-6 w-6" />,
              title: 'Sem registo',
              description: 'Nenhuma conta necessária. Abra a ferramenta, utilize-a, é tudo.',
            },
            {
              icon: <RiGlobalLine className="h-6 w-6" />,
              title: 'Disponível em português',
              description: 'Todas as ferramentas estão disponíveis em português – interface, instruções e mensagens.',
            },
          ]}
        />

        <Gap variant="line" />

        <FaqPanels items={faqItems} title="Perguntas frequentes sobre as nossas ferramentas" />

        <Gap size="sm" />
      </Wrapper>

      <Script id="ld-json-tools-pt" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(schema)}
      </Script>
    </>
  );
}
