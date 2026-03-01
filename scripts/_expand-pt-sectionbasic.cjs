/**
 * Expand "Why convert X to Y?" sectionBasic in PT converter files.
 */
const fs = require('fs');
const path = require('path');
const PT_TOOLS = path.join(__dirname, '..', 'data', 'pt', 'tools');

const SOURCE = {
  png: 'O Portable Network Graphics (PNG) é um formato de imagem sem perdas que suporta milhões de cores e transparência alfa completa. O PNG é especialmente indicado para logótipos, ícones, capturas de ecrã e gráficos com arestas nítidas ou texto.',
  jpg: 'O JPEG (JPG) é o formato de imagem mais utilizado no mundo para fotografias digitais. Utiliza compressão com perdas para obter ficheiros compactos, mas não suporta transparência nem armazenamento sem perdas.',
  heic: 'O High Efficiency Image Container (HEIC) é o formato predefinido para fotos em dispositivos Apple desde o iOS 11. O HEIC oferece ficheiros mais leves que o JPEG com qualidade comparável, mas não é suportado nativamente fora do ecossistema Apple.',
  webp: 'O WebP é um formato de imagem moderno desenvolvido pela Google que suporta compressão com e sem perdas. Produz ficheiros significativamente mais leves que PNG e JPEG com qualidade visual comparável e é suportado por todos os navegadores atuais.',
  svg: 'O Scalable Vector Graphics (SVG) é um formato vetorial baseado em XML. Os ficheiros SVG são independentes da resolução e mantêm-se nítidos em qualquer tamanho – ideais para logótipos, ícones e ilustrações.',
  gif: 'O Graphics Interchange Format (GIF) suporta animações e uma paleta de no máximo 256 cores. O GIF é muito utilizado para conteúdos animados nas redes sociais, mas a limitação de cores torna-o inadequado para imagens fotorrealistas.',
  bmp: 'O Bitmap (BMP) é um formato de imagem antigo do Windows que armazena dados de pixels sem compressão. Os ficheiros BMP são extremamente grandes e inadequados para utilização moderna na web ou em dispositivos móveis.',
  tiff: 'O Tagged Image File Format (TIFF) é o padrão da indústria para fotografia profissional, impressão e arquivamento. O TIFF armazena imagens sem perdas com profundidade de cor completa, camadas e metadados.',
  avif: 'O AV1 Image File Format (AVIF) é um formato de imagem de nova geração baseado no codec de vídeo AV1. O AVIF oferece atualmente a melhor compressão disponível – ficheiros até 50% mais leves que o WebP com qualidade visual comparável.',
};

const TARGET = {
  webp: 'O WebP reduz o tamanho do ficheiro em 30–35% em relação a formatos anteriores, sem perda de qualidade visível. Todos os navegadores modernos (Chrome, Firefox, Safari 14+, Edge) suportam totalmente o WebP. Para sites web, isto significa tempos de carregamento mais rápidos e melhor posicionamento no Google.',
  avif: 'O AVIF oferece a compressão mais eficiente de todos os formatos atuais, reduzindo o tamanho até 50% em relação ao JPEG. Chrome, Firefox e Safari 16+ suportam o AVIF. É a escolha ideal para projetos web críticos em desempenho.',
  jpg: 'O JPEG é o formato de imagem mais universal – compatível com todos os dispositivos, navegadores e plataformas. A conversão para JPG garante que as suas imagens podem ser visualizadas em qualquer lugar: desde anexos de e-mail a publicações nas redes sociais.',
  png: 'O PNG preserva a qualidade de imagem completa sem artefactos de compressão e suporta transparência alfa completa. Este formato sem perdas é ideal para gráficos que precisam de ser editados posteriormente.',
  gif: 'O GIF é o formato padrão para animações curtas, memes e gráficos simples com paleta de cores limitada. Com suporte universal nos navegadores, o GIF é especialmente adequado para conteúdos animados nas redes sociais e aplicações de mensagens.',
  tiff: 'O TIFF preserva a qualidade de imagem completa sem qualquer perda de dados e suporta camadas e metadados extensos. Como padrão da indústria para impressão e arquivamento, o TIFF é adequado para fotógrafos profissionais e gráficas.',
};

const PAIR = {
  'png-to-webp':
    'O WebP suporta transparência alfa exatamente como o PNG – todas as áreas transparentes são integralmente preservadas. Pode escolher entre compressão com e sem perdas para encontrar o equilíbrio ideal entre tamanho e qualidade.',
  'png-to-jpg':
    'Na conversão de PNG para JPG, a transparência é perdida – as áreas transparentes são preenchidas com cor de fundo. Em contrapartida, obtém ficheiros mais leves, adequados para fotos e conteúdos web sem transparência.',
  'png-to-avif':
    'O AVIF oferece compressão ainda melhor que o WebP e pode reduzir o tamanho das imagens PNG até 50%. A transparência alfa é totalmente suportada. Note que navegadores mais antigos podem não suportar AVIF.',
  'png-to-gif':
    'A conversão reduz a paleta para no máximo 256 cores. O resultado é adequado para gráficos simples, ícones e logótipos. A transparência é suportada apenas em modo binário (visível ou invisível), não de forma gradual.',
  'png-to-tiff':
    'A conversão preserva a qualidade completa e a transparência do PNG original no formato TIFF. O TIFF é adequado para processamento posterior em Photoshop ou para impressão profissional. Os ficheiros TIFF são maiores que os PNG.',
  'jpg-to-webp': 'O WebP pode reduzir o tamanho das suas fotos JPEG em 25–35% sem perda de qualidade visível. Como o JPEG não suporta transparência, nenhuma informação é perdida nesta conversão.',
  'jpg-to-png':
    'A conversão de JPG para PNG transforma a imagem num formato sem perdas. Os detalhes já perdidos pela compressão JPEG não podem ser restaurados. PNG é adequado se pretende editar a imagem sem perdas adicionais.',
  'jpg-to-avif':
    'O AVIF atinge compressão até 50% melhor que o JPEG com qualidade visual comparável. Este formato de nova geração é ideal para sites web críticos em desempenho e é suportado por Chrome, Firefox e Safari 16+.',
  'jpg-to-gif':
    'A paleta de cores é reduzida para 256, provocando perdas de qualidade visíveis em fotografias. Esta conversão é adequada principalmente para gráficos simples ou quando o formato GIF é necessário por razões de compatibilidade.',
  'jpg-to-tiff':
    'A conversão preserva a qualidade atual do JPEG e armazena-a sem perdas no formato TIFF. Os detalhes já perdidos pela compressão JPEG não podem ser restaurados, mas o TIFF permite edição posterior sem perdas adicionais.',
  'heic-to-jpg':
    'A conversão de HEIC para JPG transforma o formato proprietário da Apple no formato JPEG universalmente compatível. A transparência e informações HDR são perdidas, mas a qualidade permanece praticamente idêntica ao original com definições a partir de 85%.',
  'heic-to-png':
    'A conversão preserva a qualidade completa do original HEIC sem perdas no formato PNG. O PNG é suportado por todos os dispositivos e é especialmente adequado se pretende editar a imagem ou conservar a transparência.',
  'heic-to-webp':
    'O WebP oferece um excelente equilíbrio entre tamanho do ficheiro e qualidade. A conversão de HEIC para WebP produz ficheiros compactos suportados por todos os navegadores modernos – ideal para sites web.',
  'heic-to-avif':
    'O AVIF oferece eficiência de compressão semelhante ao HEIC, mas como formato aberto tem suporte muito mais amplo. A conversão permite utilizar compressão moderna sem as restrições do ecossistema Apple.',
  'heic-to-tiff':
    'A conversão transforma as suas fotos iPhone no formato TIFF profissional. Ideal para fotógrafos que desejam arquivar capturas móveis num formato sem perdas e editá-las em programas como Photoshop ou Lightroom.',
  'webp-to-jpg':
    'A conversão de WebP para JPEG assegura a máxima compatibilidade. O JPG é suportado por todos os dispositivos e software – indispensável para enviar imagens por e-mail ou carregá-las em plataformas que não aceitam WebP.',
  'webp-to-png':
    'A conversão de WebP para PNG preserva a transparência da imagem e armazena-a sem perdas. O PNG é adequado para edição posterior em programas gráficos e para plataformas que não suportam WebP.',
  'webp-to-avif':
    'O AVIF oferece compressão ainda melhor que o WebP com qualidade visual comparável. Se pretende otimizar imagens para os padrões web de nova geração, a conversão de WebP para AVIF é um passo lógico.',
  'webp-to-gif': 'A conversão reduz a paleta para 256 cores. É adequada para gráficos simples ou quando o formato GIF é necessário para animações ou por razões de compatibilidade.',
  'webp-to-tiff':
    'A conversão transforma ficheiros WebP no formato TIFF profissional. Ideal para produção de impressão e arquivamento a longo prazo, onde são necessárias qualidade sem perdas e suporte completo de metadados.',
  'svg-to-jpg':
    'A rasterização de SVG para JPG converte a imagem vetorial numa imagem de pixels com resolução fixa. As áreas transparentes são preenchidas com cor de fundo. Adequado para plataformas que não aceitam SVG.',
  'svg-to-png': 'A rasterização de SVG para PNG converte a imagem vetorial preservando integralmente a transparência. O PNG é adequado para redes sociais e mensagens que não suportam SVG.',
  'svg-to-webp':
    'A conversão produz imagens de pixels compactas a partir de gráficos vetoriais no formato WebP. O WebP é ideal para sites web onde ficheiros leves e tempos de carregamento rápidos são determinantes.',
  'svg-to-avif': 'O AVIF oferece a melhor compressão para a rasterização de ficheiros SVG. Ideal para sites web críticos em desempenho onde cada kilobyte contribui para melhores Core Web Vitals.',
  'svg-to-gif':
    'A conversão transforma a imagem vetorial numa imagem de pixels com no máximo 256 cores. O GIF é adequado para ícones simples e gráficos animados, mas não para ilustrações complexas com degradês.',
  'svg-to-tiff':
    'A rasterização de SVG para TIFF produz uma imagem de pixels sem perdas na máxima qualidade. Ideal para impressão profissional de gráficos vetoriais quando é necessária uma resolução fixa.',
  'gif-to-jpg':
    'Na conversão de GIF para JPG, os frames de animação e a transparência são perdidos – apenas a primeira imagem é convertida. Obtém um formato universalmente compatível com profundidade de cor completa (16,7 milhões de cores).',
  'gif-to-png':
    'A conversão preserva a qualidade sem perdas e suporta transparência binária. Para GIFs animados, apenas o primeiro frame é convertido. O PNG é adequado para a reedição de gráficos GIF.',
  'gif-to-webp':
    'O WebP suporta imagens estáticas e animações com compressão significativamente melhor que o GIF. Para GIFs estáticos, a conversão produz ficheiros mais leves com qualidade visual igual ou superior.',
  'gif-to-avif':
    'O AVIF oferece compressão superior ao GIF e suporta milhões de cores em vez de apenas 256. Ideal para modernizar gráficos GIF antigos em sites web para melhores tempos de carregamento.',
  'tiff-to-jpg':
    'A conversão reduz os ficheiros TIFF volumosos para tamanhos JPEG compactos. A transparência e informações de camadas são perdidas, mas obtém ficheiros universalmente compatíveis para web, e-mail e redes sociais.',
  'tiff-to-png':
    'A conversão preserva a qualidade sem perdas e conserva a transparência se presente. Os ficheiros PNG são significativamente mais leves que os TIFF e são suportados por todos os dispositivos e plataformas.',
  'tiff-to-webp': 'O WebP reduz drasticamente o tamanho dos ficheiros TIFF – frequentemente mais de 90%. Ideal para otimizar fotografias profissionais ou digitalizações de alta resolução para a web.',
  'tiff-to-avif':
    'O AVIF oferece a compressão mais eficiente para ficheiros TIFF grandes. Ideal para otimização web de fotografia profissional e digitalizações de alta resolução com perda de qualidade mínima.',
  'bmp-to-jpg':
    'Os ficheiros BMP não são comprimidos e são extremamente grandes. A conversão para JPEG reduz drasticamente o tamanho (frequentemente mais de 95%) e produz ficheiros universalmente compatíveis.',
  'bmp-to-png':
    'A conversão de BMP para PNG reduz consideravelmente o tamanho através de compressão sem perdas. Ao contrário do JPEG, a qualidade completa é preservada – ideal para gráficos com arestas nítidas e texto.',
  'bmp-to-webp': 'O WebP reduz os enormes tamanhos BMP até 97% com boa qualidade visual. A conversão moderniza imagens legacy para utilização em sites web e aplicações modernas.',
  'bmp-to-avif': 'O AVIF oferece a melhor compressão para ficheiros BMP não comprimidos. O tamanho é reduzido até 98% – ideal para a migração de antigos acervos de imagens para formatos modernos.',
  'bmp-to-gif':
    'A conversão reduz a paleta para 256 cores e comprime consideravelmente o ficheiro. Adequado para gráficos simples de sistemas antigos, mas para imagens BMP fotorrealistas recomenda-se JPG ou WebP.',
  'bmp-to-tiff':
    'A conversão de BMP para TIFF preserva a qualidade completa e adiciona suporte profissional de metadados. O TIFF é mais adequado que o BMP para arquivamento a longo prazo e fluxos de trabalho de impressão.',
  'avif-to-jpg':
    'A conversão de AVIF para JPEG assegura a máxima compatibilidade. O JPG é suportado por todos os dispositivos – necessário quando destinatários ou plataformas ainda não suportam o formato AVIF.',
  'avif-to-png':
    'A conversão preserva a qualidade sem perdas no formato PNG universalmente suportado. O PNG é adequado se pretende conservar a transparência ou editar a imagem em programas gráficos.',
  'avif-to-webp': 'O WebP oferece compatibilidade de navegadores mais ampla que o AVIF com boa compressão. A conversão faz sentido quando a plataforma de destino suporta WebP mas ainda não AVIF.',
};

const PRIVACY =
  'Este conversor funciona inteiramente em local no seu navegador – os seus ficheiros nunca saem do seu dispositivo. Sem carregamentos, sem servidores, sem registo. Totalmente conforme com o RGPD e gratuito sem qualquer limitação.';

function extractFormats(f) {
  const m = f.match(/converter-(\w+)-to-(\w+)\.json/);
  return m ? { source: m[1], target: m[2], key: `${m[1]}-to-${m[2]}` } : null;
}

let updated = 0,
  skipped = 0;
const files = fs.readdirSync(PT_TOOLS).filter((f) => f.startsWith('converter-') && f.endsWith('.json'));
for (const file of files) {
  const fmt = extractFormats(file);
  if (!fmt) {
    skipped++;
    continue;
  }
  const s = SOURCE[fmt.source],
    t = TARGET[fmt.target],
    p = PAIR[fmt.key];
  if (!s || !t || !p) {
    console.log(`SKIP: ${file}`);
    skipped++;
    continue;
  }
  const filePath = path.join(PT_TOOLS, file);
  const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  const block = data.contentBlocks.find((b) => b.type === 'sectionBasic');
  if (!block) {
    skipped++;
    continue;
  }
  block.html = `<p class="text-mid mb-4">${s}</p><p class="text-mid mb-4">${t}</p><p class="text-mid mb-4">${p}</p><p class="text-mid">${PRIVACY}</p>`;
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n', 'utf-8');
  updated++;
}
console.log(`PT: Updated: ${updated}, Skipped: ${skipped}`);
