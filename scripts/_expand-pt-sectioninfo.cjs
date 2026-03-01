/**
 * Differentiate "in practice" sectionInfo in PT converter files.
 */
const fs = require('fs');
const path = require('path');
const TOOLS = path.join(__dirname, '..', 'data', 'pt', 'tools');

const P = {
  'png-to-webp': [
    'Web designers e proprietários de lojas em Portugal e no Brasil usam PNG para logótipos, recortes de produtos e elementos de interface com transparência. Ao converter para WebP, a transparência mantém-se intacta enquanto o tamanho reduz 25–35% – ganho direto nos tempos de carregamento e Core Web Vitals.',
    'Gráficos com grandes áreas de cor sólida (logótipos, ícones) beneficiam mais: ficheiros de 200–500 KB frequentemente descem abaixo de 100 KB. Para recortes de produtos na Amazon.pt, OLX.pt, KuantoKusta, Mercado Livre ou lojas Shopify, isto significa páginas de categoria mais rápidas.',
    'Todo o processamento é local no navegador – ideal para agências e empresas que precisam cumprir o RGPD. As imagens de produtos ou gráficos de clientes nunca saem do dispositivo.',
  ],
  'png-to-jpg': [
    'Ficheiros PNG com transparência pesam frequentemente vários megabytes. Quando a transparência não é necessária – fotos de CV, digitalizações ou publicações em redes sociais – a conversão para JPG reduz drasticamente o tamanho.',
    'Muitas plataformas como LinkedIn, Net-Empregos ou portais de emprego aceitam apenas JPG. Os anexos de e-mail também beneficiam: uma captura PNG de 3 MB fica com apenas 200–400 KB em JPG. A qualidade a 85% oferece o melhor equilíbrio.',
    'Para documentos de candidatura e ficheiros confidenciais, o processamento local é essencial – os ficheiros nunca saem do dispositivo. Conforme com o RGPD.',
  ],
  'png-to-avif': [
    'AVIF é o formato mais eficiente da geração atual e pode reduzir ficheiros PNG até 50%. Para projetos web onde cada kilobyte conta, PNG para AVIF é a conversão ótima.',
    'AVIF suporta transparência, HDR e até 12 bits por canal. Chrome, Firefox e Safari 16+ suportam nativamente. Para navegadores mais antigos, um fallback via <code>&lt;picture&gt;</code> com PNG ou WebP é recomendado.',
    'As empresas portuguesas e brasileiras que procuram otimizar os resultados PageSpeed beneficiam especialmente: AVIF melhora de forma mensurável o Largest Contentful Paint (LCP). O processamento local garante conformidade com o RGPD.',
  ],
  'png-to-gif': [
    'Gráficos simples como ícones, logótipos ou diagramas com paleta limitada armazenam-se mais compactamente em GIF. A conversão é útil quando a plataforma exige formato GIF.',
    'O GIF suporta apenas 256 cores. Imagens PNG fotorrealistas perdem qualidade visível. A transparência é apenas binária (visível/invisível), não alfa gradual como no PNG.',
    'Para apresentações, gráficos de newsletters ou sistemas que só aceitam GIF, esta conversão é uma solução rápida – inteiramente local e sem upload.',
  ],
  'png-to-tiff': [
    'Gráficas, editoras e sistemas de arquivo frequentemente exigem TIFF em vez de PNG. A conversão preserva a qualidade completa, transparência e adiciona suporte profissional de metadados.',
    'Os ficheiros TIFF são maiores que PNG, mas oferecem vantagens profissionais: suporte de camadas no Photoshop, espaços de cor CMYK para impressão e metadados completos. TIFF é o padrão para arquivo a longo prazo.',
    'As gráficas em Portugal e no Brasil trabalham frequentemente com TIFF. A conversão local permite processar maquetas confidenciais sem envio para a nuvem.',
  ],
  'jpg-to-webp': [
    'JPEG é o padrão para fotos digitais, mas para websites os tamanhos são frequentemente excessivos. WebP comprime imagens JPEG mais 25–35% sem perda visível de qualidade, melhorando diretamente os tempos de carregamento.',
    'Para lojas em Shopify, WooCommerce ou PrestaShop, a mudança de JPG para WebP acelera de forma mensurável as páginas de produto. O Google PageSpeed recomenda WebP como formato de nova geração. A qualidade 80–85%, a diferença é impercetível.',
    'Em Portugal e no Brasil, onde as exigências do RGPD/LGPD são rigorosas, o processamento local é especialmente valioso. As fotos de produtos não saem do dispositivo.',
  ],
  'jpg-to-png': [
    'Por vezes um JPEG precisa de ser convertido para um formato com suporte de transparência ou armazenamento sem perda – por exemplo para edição em Photoshop, Figma ou Canva.',
    'A conversão de JPG para PNG não restaura detalhes perdidos pela compressão JPEG, mas impede perdas adicionais em edições futuras. PNG é ideal quando a imagem serve como base para colagens ou layouts de impressão.',
    'Para designers e agências em Portugal, o processamento local é ideal: o material de clientes permanece no próprio computador sem que um serviço externo aceda.',
  ],
  'jpg-to-avif': [
    'AVIF alcança até 50% melhor compressão que JPEG a qualidade visual comparável. Para sites com muitas fotos – portais imobiliários, revistas online, sites de viagens – os tempos de carregamento reduzem-se consideravelmente.',
    'Plataformas como Idealista.pt, Booking.com ou OLX adotam cada vez mais AVIF para melhorar a experiência móvel. Chrome, Firefox e Safari 16+ suportam nativamente. Para navegadores mais antigos, um fallback WebP ou JPG é recomendado.',
    'A conversão local protege as imagens: fotos imobiliárias, de produtos ou retratos – nada é enviado para nenhum servidor. Conforme com o RGPD/LGPD.',
  ],
  'jpg-to-gif': [
    'A conversão JPG para GIF é útil quando se precisa de uma foto como gráfico simples – miniaturas em sistemas antigos ou newsletters que só suportam GIF.',
    'O GIF limita a paleta a 256 cores, causando perda visível em fotos por dithering. Para a maioria dos usos, WebP ou PNG são melhores opções.',
    'Se o fluxo de trabalho exige exclusivamente GIF, a conversão local oferece uma solução rápida e conforme com a proteção de dados.',
  ],
  'jpg-to-tiff': [
    'Gráficas profissionais e agências fotográficas frequentemente exigem TIFF em vez de JPEG. A conversão preserva a qualidade atual e armazena-a sem perda para processamento posterior.',
    'Os detalhes já perdidos pela compressão JPEG não são restaurados, mas TIFF impede perdas adicionais em retoques. Suporta CMYK, camadas e metadados estendidos – ideal para fluxos de impressão profissionais.',
    'Fotógrafos e agências em Portugal beneficiam do processamento local: fotos de clientes e ficheiros de impressão permanecem no dispositivo.',
  ],
  'heic-to-jpg': [
    'Os utilizadores de iPhone conhecem o problema: as fotos HEIC não abrem em todo o lado. PCs Windows, dispositivos Android, muitos formulários web e clientes de e-mail não suportam HEIC. A conversão para JPG resolve este problema de compatibilidade imediatamente.',
    'A qualidade 85–90%, a diferença entre o original HEIC e o resultado JPG é visualmente quase impercetível. O tamanho é comparável, pois ambos os formatos usam compressão com perda. Especialmente prático: converter várias fotos de iPhone simultaneamente.',
    'Para fotos de CV, digitalizações de documentos de identidade ou documentos pessoais, o processamento local é essencial – os dados sensíveis nunca saem do dispositivo.',
  ],
  'heic-to-png': [
    'Se pretende reutilizar fotos de iPhone sem perda – como bases em Photoshop, Figma ou para projetos de impressão – PNG é o formato ideal. A conversão preserva a qualidade completa do original HEIC.',
    'PNG suporta transparência e armazenamento sem perda, ao contrário do JPG. No entanto, os ficheiros PNG são significativamente maiores que HEIC ou JPG. Para edição em software gráfico não é desvantagem – para uso web recomenda-se depois converter para WebP.',
    'Agências criativas e fotógrafos beneficiam do processamento local: as fotos de iPhone de clientes permanecem confidenciais no próprio computador.',
  ],
  'heic-to-webp': [
    'Usar fotos iPhone HEIC diretamente em websites? WebP é a ponte ideal: combina a compressão eficiente do HEIC com compatibilidade universal de navegadores (Chrome, Firefox, Safari 14+, Edge).',
    'A conversão HEIC para WebP é especialmente eficiente, pois ambos os formatos usam algoritmos modernos. O tamanho mantém-se compacto, a qualidade alta. Para blogs, lojas online e portfólios, é a forma mais rápida de publicar fotos iPhone otimizadas.',
    'Bloggers e e-commerce em Portugal e no Brasil podem converter fotos iPhone localmente e em conformidade com o RGPD/LGPD – sem cloud nem ferramentas externas.',
  ],
  'heic-to-avif': [
    'AVIF oferece eficiência de compressão similar ao HEIC, mas como formato aberto não está ligado ao ecossistema Apple. HEIC para AVIF permite a compressão mais moderna com amplo suporte multiplataforma.',
    'Chrome, Firefox e Safari 16+ suportam AVIF nativamente. Para projetos web críticos em desempenho – galerias, portfólios, portais imobiliários – AVIF oferece o melhor equilíbrio entre tamanho e qualidade.',
    'A conversão local é relevante para fotógrafos e criativos: sessões de iPhone convertem-se diretamente no formato web mais eficiente – sem cloud.',
  ],
  'heic-to-tiff': [
    'Fotógrafos profissionais que trabalham com iPhone frequentemente precisam de TIFF para pós-produção em Lightroom, Capture One ou Photoshop. HEIC para TIFF preserva a qualidade completa num formato padrão da indústria.',
    'TIFF suporta 16 bits de profundidade, camadas e metadados EXIF/IPTC estendidos. Para impressão, arquivo e retoque profissional, TIFF é o formato preferido. Os ficheiros tornam-se consideravelmente maiores que HEIC.',
    'Em Portugal, onde muitas gráficas e agências fotográficas exigem TIFF como padrão, a conversão local oferece um fluxo de trabalho seguro para sessões confidenciais.',
  ],
  'webp-to-jpg': [
    'WebP é ótimo para a web, mas serviços de impressão, Microsoft Office, software antigo e algumas redes sociais exigem JPG.',
    'WebP para JPG assegura compatibilidade máxima. A qualidade 85–90%, a qualidade visual é quase idêntica. Prático para enviar imagens por e-mail a destinatários que não conseguem abrir WebP.',
    'Para agências que precisam entregar imagens em formatos universais, a conversão local é ideal – rápida, segura e conforme com o RGPD.',
  ],
  'webp-to-png': [
    'Imagens WebP com transparência por vezes precisam de ser convertidas para PNG – para software gráfico sem suporte WebP ou ficheiros de impressão que requerem qualidade sem perda.',
    'A conversão preserva transparência e qualidade completamente. Os PNG são maiores mas mais adequados para Photoshop, Illustrator, InDesign e plataformas sem suporte WebP.',
    'Os designers em Portugal podem converter localmente assets WebP em PNG prontos para impressão – sem cloud e em conformidade com o RGPD.',
  ],
  'webp-to-avif': [
    'AVIF oferece compressão ainda melhor que WebP – o passo lógico seguinte para sites que querem otimizar mais os tempos de carregamento.',
    'A qualidade comparável, os ficheiros AVIF são 20–30% menores que WebP. Para sites com centenas de imagens, a poupança é considerável. Um fallback WebP via <code>&lt;picture&gt;</code> cobre navegadores mais antigos.',
    'Os e-commerce portugueses e brasileiros que otimizam Core Web Vitals beneficiam especialmente do AVIF. A conversão local evita o envio para a nuvem.',
  ],
  'webp-to-gif': [
    'O formato GIF é por vezes necessário – sistemas antigos, ferramentas de newsletter ou plataformas que só aceitam GIF. WebP para GIF é a solução mais rápida.',
    'O GIF suporta apenas 256 cores. Imagens fotorrealistas perdem qualidade. A conversão é mais adequada para gráficos simples, ícones ou logótipos.',
    'O processamento local oferece uma alternativa rápida e segura aos serviços de conversão online.',
  ],
  'webp-to-tiff': [
    'Fluxos de impressão profissionais frequentemente exigem TIFF. WebP para TIFF permite preparar imagens web-otimizadas para impressão.',
    'TIFF armazena sem perda com suporte completo de metadados. Os detalhes perdidos pela compressão WebP não são restaurados – para melhor qualidade, partir do original.',
    'Para agências e gráficas em Portugal, a conversão local oferece um meio seguro de preparar assets web para projetos de impressão.',
  ],
  'svg-to-jpg': [
    'SVG não é aceite em todo o lado: redes sociais, marketplaces e muitos CMS só aceitam formatos raster. A conversão para JPG cria ficheiros universalmente compatíveis.',
    'A rasterização converte o vetor em pixéis a resolução fixa. As zonas transparentes são preenchidas com cor de fundo (branco por defeito). Para uso web, recomenda-se 1200–2000px de largura.',
    'Para publicações em redes sociais e anúncios no OLX.pt, Mercado Livre ou Amazon.pt, SVG para JPG é um requisito habitual.',
  ],
  'svg-to-png': [
    'SVG é frequentemente convertido para PNG para redes sociais, mensagens e assinaturas de e-mail – preservando transparência com ampla compatibilidade.',
    'A rasterização para PNG preserva completamente as zonas transparentes – ideal para logótipos sobre diferentes fundos. Excelente também para capturas de documentação e apresentações.',
    'Para agências que entregam logótipos em diferentes formatos, SVG para PNG é um fluxo rápido e conforme com a proteção de dados.',
  ],
  'svg-to-webp': [
    'Para sites que não podem integrar SVG diretamente – CMS com suporte limitado – WebP oferece uma representação pixel compacta com tamanho mínimo.',
    'Os WebP a partir de SVG são tipicamente muito leves (5–30 KB) e carregam instantaneamente. Para ícones e logótipos em sites, é a solução pragmática quando o SVG direto não é possível.',
    'WordPress, WooCommerce e muitos CMS em Portugal suportam WebP nativamente – permitindo usar gráficos vetoriais mesmo nestes ambientes.',
  ],
  'svg-to-avif': [
    'AVIF oferece a melhor compressão para gráficos vetoriais rasterizados. Para sites críticos em desempenho, SVG para AVIF é a escolha ótima quando o SVG direto não é possível.',
    'Os AVIF a partir de SVG são extremamente compactos (3–15 KB). Cada kilobyte conta para os Core Web Vitals: tempos mais rápidos melhoram o LCP e o posicionamento Google.',
    'Desenvolvedores web e especialistas SEO em Portugal e no Brasil usam cada vez mais AVIF – a conversão local simplifica a transição.',
  ],
  'svg-to-gif': [
    'O GIF é por vezes necessário para ícones em sistemas antigos, templates de e-mail ou fóruns. SVG para GIF cria ficheiros compatíveis e leves.',
    'O GIF limita a 256 cores. Para logótipos monocromáticos é suficiente; para ilustrações complexas com gradientes, não. Transparência apenas binária.',
    'Para templates de newsletters e plataformas antigas que só aceitam GIF, é uma solução local rápida.',
  ],
  'svg-to-tiff': [
    'As gráficas necessitam frequentemente de imagens TIFF em vez de vetores. SVG para TIFF cria ficheiros de alta resolução sem perda para impressão profissional.',
    'TIFF armazena em qualidade máxima com plena profundidade de cor e metadados. Para cartões de visita, flyers e posters, recomenda-se mínimo 300 DPI.',
    'As gráficas em Portugal e no Brasil aceitam TIFF como padrão. A conversão local protege maquetas e logótipos confidenciais.',
  ],
  'gif-to-jpg': [
    'Imagens GIF antigas por vezes precisam de ser convertidas para JPG – plataformas que só aceitam JPEG ou otimização para e-mail. Apenas a primeira imagem de um GIF animado é convertida.',
    'JPG oferece 16,7 milhões de cores em vez dos 256 do GIF. Fotos guardadas acidentalmente como GIF beneficiam da profundidade de cor completa.',
    'Para arquivar gráficos antigos num formato moderno e universal, a conversão local é rápida e conforme com a proteção de dados.',
  ],
  'gif-to-png': [
    'Converter GIF para PNG é útil para armazenamento sem perda ou edição em software gráfico. PNG suporta cores de 32 bits e transparência alfa gradual.',
    'Em GIF animados, apenas a primeira imagem é convertida. A qualidade é preservada sem perda. PNG é ideal como formato intermédio para Photoshop, Figma ou Canva.',
    'Para atualizar gráficos web antigos, a conversão local oferece uma solução rápida e segura sem serviços externos.',
  ],
  'gif-to-webp': [
    'WebP oferece compressão muito melhor que GIF. A modernização de GIF para WebP acelera percetivelmente os websites.',
    'GIF estáticos ficam 30–60% menores como WebP, com milhões de cores em vez de 256, melhorando visivelmente a qualidade a tamanho igual ou menor.',
    'Para otimizar sites antigos em Portugal e no Brasil, a mudança de GIF para WebP é um modo simples de melhorar os Core Web Vitals.',
  ],
  'gif-to-avif': [
    'AVIF supera o GIF em tudo: melhor compressão, milhões de cores, animação moderna. Para modernizar conteúdos web antigos, GIF para AVIF é o mais eficiente.',
    'Os AVIF a partir de GIF são drasticamente menores e visualmente melhores. Navegadores antigos ainda não suportam AVIF – um fallback via <code>&lt;picture&gt;</code> é recomendado.',
    'Para maximizar tempos de carregamento, a mudança de GIF para AVIF oferece o maior ganho individual de todas as mudanças de formato.',
  ],
  'tiff-to-jpg': [
    'Ficheiros TIFF de fotografia profissional ou scanners pesam frequentemente 20–100 MB. A conversão para JPG cria ficheiros compactos para web, e-mail e redes sociais – redução típica de mais de 95%.',
    'Transparência e camadas perdem-se na conversão. Para fotografia pura, não é problemático. A qualidade 85–90%, a qualidade visual mantém-se excelente com tamanhos de poucas centenas de KB.',
    'Fotógrafos e utilizadores de scanner em Portugal podem converter TIFF localmente e em conformidade com o RGPD em JPG prontos para envio.',
  ],
  'tiff-to-png': [
    'Quando ficheiros TIFF são necessários para edição em software gráfico ou sites com transparência, PNG é o formato adequado – sem perda e universalmente compatível.',
    'PNG preserva a qualidade completa e transparência do TIFF. Os ficheiros são menores que TIFF mas maiores que JPEG/WebP. Para Figma, Canva ou Photoshop, PNG é ideal.',
    'Para preparar saídas de scanner e imagens de arquivo para uso online, a conversão local oferece um fluxo seguro e rápido.',
  ],
  'tiff-to-webp': [
    'TIFF para WebP oferece a maior redução: ficheiros de 20–100 MB passam a 200 KB – 2 MB. Para publicar fotos profissionais na web, é o mais eficiente.',
    'A qualidade 80–85%, WebP mantém excelente qualidade visual. Para galerias, portfólios e revistas online: qualidade profissional a uma fração do tamanho original.',
    'Fotógrafos e agências em Portugal podem converter sessões de alta resolução em formatos web-otimizados localmente – sem cloud, conforme com o RGPD.',
  ],
  'tiff-to-avif': [
    'AVIF oferece a compressão mais eficiente para grandes ficheiros TIFF. Fotos e digitalizações de alta resolução reduzem-se drasticamente com mínima perda de qualidade.',
    'Para galerias e portfólios web que procuram os melhores tempos de carregamento, TIFF para AVIF é o fluxo ótimo. Chrome, Firefox e Safari 16+ suportam AVIF; fallback WebP para navegadores antigos.',
    'Fotógrafos e agências fotográficas em Portugal beneficiam do processamento local: fotos de clientes de alta resolução otimizadas de forma segura e conforme com o RGPD.',
  ],
  'bmp-to-jpg': [
    'Ficheiros BMP provêm frequentemente de aplicações Windows antigas ou scanners. Não comprimidos e muito grandes, a conversão para JPG reduz o tamanho mais de 95%.',
    'Um BMP de 10 MB torna-se tipicamente 200–400 KB como JPG. Para e-mail, documentação e arquivo, é a forma mais simples de poupar espaço e assegurar compatibilidade.',
    'Para migrar arquivos de imagens antigos e preparar saídas de scanner, a conversão local é rápida e conforme com a proteção de dados.',
  ],
  'bmp-to-png': [
    'BMP para PNG reduz o tamanho por compressão sem perda – a qualidade completa é preservada. Ideal para gráficos com bordos nítidos, texto ou capturas de ecrã.',
    'Ao contrário do JPG, PNG preserva a qualidade pixel exata sem artefactos. Para documentações técnicas e capturas com texto, PNG é a melhor escolha.',
    'A conversão local é adequada para documentos confidenciais e capturas internas – nada é enviado para um servidor externo.',
  ],
  'bmp-to-webp': [
    'BMP é inadequado para a web moderna – não comprimido e enorme. WebP reduz o tamanho até 97% com boa qualidade, modernizando imagens antigas para a web.',
    'A conversão moderniza arquivos antigos de Windows para sites, CMS e lojas atuais. WebP é suportado por todos os navegadores modernos e melhora os tempos de carregamento.',
    'Para empresas portuguesas e brasileiras que preparam arquivos antigos para a presença web, a conversão local é eficiente e conforme com o RGPD/LGPD.',
  ],
  'bmp-to-avif': [
    'AVIF oferece a melhor compressão para BMP não comprimidos: reduções de mais de 98%. Para modernizar arquivos antigos, BMP para AVIF é o mais eficiente.',
    'AVIF suporta HDR, espaços de cor amplos e até 12 bits – a qualidade original é preservada ao máximo. Chrome, Firefox e Safari 16+ suportam nativamente.',
    'A conversão local permite migrar arquivos inteiros sem cloud – rápida, segura e conforme com a proteção de dados.',
  ],
  'bmp-to-gif': [
    'BMP para GIF é útil para sistemas que só aceitam GIF ou gráficos simples com poucas cores onde GIF é mais compacto.',
    'O GIF suporta apenas 256 cores. Imagens fotorrealistas perdem qualidade. Para fotos, JPG ou WebP são preferíveis. GIF é adequado apenas para gráficos simples.',
    'Para requisitos de compatibilidade de sistemas antigos, a conversão local oferece uma solução rápida e segura.',
  ],
  'bmp-to-tiff': [
    'BMP para TIFF é útil para suporte profissional de metadados – arquivo, pré-impressão ou processamento em software profissional.',
    'TIFF preserva a qualidade completa do BMP e adiciona: metadados EXIF, CMYK e camadas. Para arquivo a longo prazo, TIFF é claramente superior a BMP.',
    'Arquivos, bibliotecas e empresas portuguesas que digitalizam fundos antigos beneficiam da conversão local sem dependência da nuvem.',
  ],
  'avif-to-jpg': [
    'AVIF ainda não é suportado por dispositivos antigos, software de edição e algumas plataformas. A conversão para JPG assegura compatibilidade máxima.',
    'A qualidade 85–90%, a qualidade é quase idêntica ao original AVIF. Útil para e-mail a destinatários com sistemas antigos ou serviços de impressão que só aceitam JPEG.',
    'Para empresas que precisam de imagens web-otimizadas (AVIF) e universais (JPG), a conversão local é um fluxo de trabalho eficiente.',
  ],
  'avif-to-png': [
    'Imagens AVIF com transparência por vezes precisam de ser convertidas para PNG – para edição em software gráfico ou plataformas sem suporte AVIF.',
    'PNG preserva transparência e qualidade sem perda. Os ficheiros são maiores que AVIF mas adequados para Photoshop, Figma, Canva e impressão.',
    'Os designers em Portugal usam a conversão local para preparar assets AVIF para diferentes canais – seguro e conforme com o RGPD.',
  ],
  'avif-to-webp': [
    'WebP oferece maior suporte de navegadores que AVIF (Safari 14+ vs 16+) com boa compressão. Se o público usa navegadores mais antigos, WebP é mais seguro.',
    'AVIF para WebP é relevante para CMS e CDN sem suporte AVIF. WebP é suportado nativamente por WordPress, Shopify, Cloudflare e todos os navegadores modernos.',
    'Para projetos web em Portugal que precisam de máxima cobertura de navegadores, WebP continua a ser o formato moderno mais fiável.',
  ],
};

function extractFormats(f) {
  const m = f.match(/converter-(\w+)-to-(\w+)\.json/);
  return m ? { key: `${m[1]}-to-${m[2]}` } : null;
}
let updated = 0, skipped = 0;
const files = fs.readdirSync(TOOLS).filter(f => f.startsWith('converter-') && f.endsWith('.json'));
for (const file of files) {
  const fmt = extractFormats(file);
  if (!fmt || !P[fmt.key]) { skipped++; continue; }
  const [p1, p2, p3] = P[fmt.key];
  const fp = path.join(TOOLS, file);
  const data = JSON.parse(fs.readFileSync(fp, 'utf-8'));
  const block = data.contentBlocks.find(b => b.type === 'sectionInfo' && !b.html.includes('<table') && (b.title.includes('prática') || b.title.includes('na prática')));
  if (!block) { skipped++; continue; }
  block.html = `<p class="text-mid mb-4">${p1}</p><p class="text-mid mb-4">${p2}</p><p class="text-mid">${p3}</p>`;
  fs.writeFileSync(fp, JSON.stringify(data, null, 2) + '\n', 'utf-8');
  updated++;
}
console.log(`PT sectionInfo: Updated: ${updated}, Skipped: ${skipped}`);
