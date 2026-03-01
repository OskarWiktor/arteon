/**
 * Expand thin "Why convert X to Y?" sectionBasic in IT converter files.
 */
const fs = require('fs');
const path = require('path');

const IT_TOOLS = path.join(__dirname, '..', 'data', 'it', 'tools');

const SOURCE = {
  png: 'Il Portable Network Graphics (PNG) è un formato immagine senza perdita che supporta milioni di colori e la trasparenza alfa completa. Il PNG è particolarmente indicato per loghi, icone, screenshot e grafiche con bordi netti o testo – ovunque ogni pixel conti.',
  jpg: "Il JPEG (JPG) è il formato immagine più diffuso al mondo per le fotografie digitali. Utilizza la compressione con perdita per ottenere file compatti, ma non supporta né la trasparenza né l'archiviazione senza perdita.",
  heic: "L'High Efficiency Image Container (HEIC) è il formato predefinito per le foto sui dispositivi Apple da iOS 11. HEIC offre file più leggeri del JPEG a qualità comparabile, ma non è supportato nativamente al di fuori dell'ecosistema Apple – né su Windows, né su Android, né su molte piattaforme web.",
  webp: 'Il WebP è un formato immagine moderno sviluppato da Google che supporta sia la compressione con perdita sia quella senza perdita. Produce file notevolmente più leggeri di PNG e JPEG a qualità visiva comparabile ed è supportato da tutti i browser attuali.',
  svg: 'Lo Scalable Vector Graphics (SVG) è un formato vettoriale basato su XML per la grafica bidimensionale. I file SVG sono indipendenti dalla risoluzione e rimangono nitidi a qualsiasi dimensione – ideali per loghi, icone e illustrazioni.',
  gif: 'Il Graphics Interchange Format (GIF) supporta le animazioni e una palette di massimo 256 colori. Il GIF è molto utilizzato per contenuti animati sui social media e nelle app di messaggistica, ma la limitazione di colori lo rende inadatto alle immagini fotorealistiche.',
  bmp: "Il Bitmap (BMP) è un formato immagine Windows datato che memorizza i dati dei pixel senza compressione. I file BMP sono quindi estremamente grandi e inadatti all'uso moderno sul web, nelle e-mail o sui dispositivi mobili.",
  tiff: "Il Tagged Image File Format (TIFF) è lo standard industriale per la fotografia professionale, la stampa e l'archiviazione. Il TIFF memorizza le immagini senza perdita con profondità di colore completa, livelli e metadati – ma richiede file proporzionalmente grandi.",
  avif: "L'AV1 Image File Format (AVIF) è un formato immagine di nuova generazione basato sul codec video AV1. L'AVIF offre attualmente la migliore compressione disponibile – file fino al 50% più leggeri del WebP a qualità visiva comparabile.",
};

const TARGET = {
  webp: 'Il WebP riduce la dimensione del file del 30–35% rispetto ai formati precedenti, senza perdita di qualità visibile. Tutti i browser moderni (Chrome, Firefox, Safari 14+, Edge) supportano pienamente il WebP. Per i siti web, ciò significa tempi di caricamento più rapidi, migliori Core Web Vitals e un miglior posizionamento su Google.',
  avif: "L'AVIF offre la compressione più efficiente tra tutti i formati immagine attuali, riducendo la dimensione fino al 50% rispetto al JPEG. Chrome, Firefox e Safari 16+ supportano l'AVIF. È la scelta ottimale per progetti web critici in termini di prestazioni e per l'uso mobile.",
  jpg: 'Il JPEG è il formato immagine più universale – compatibile con ogni dispositivo, browser e piattaforma al mondo. La conversione in JPG garantisce che le vostre immagini possano essere visualizzate ovunque senza problemi: dagli allegati e-mail ai post sui social media fino ai servizi di stampa.',
  png: "Il PNG preserva la qualità dell'immagine completa senza artefatti di compressione e supporta la trasparenza alfa completa. Questo formato senza perdita è ideale per grafiche destinate a ulteriori elaborazioni e per immagini in cui le aree trasparenti devono essere conservate.",
  gif: 'Il GIF è il formato standard per brevi animazioni, meme e grafiche semplici con palette di colori limitata. Con supporto universale nei browser, il GIF è particolarmente adatto ai contenuti animati sui social media, nelle app di messaggistica e nelle firme e-mail.',
  tiff: "Il TIFF preserva la qualità dell'immagine completa senza alcuna perdita di dati e supporta livelli e metadati estesi. Come standard industriale per la stampa e l'archiviazione, il TIFF è adatto a fotografi professionisti, tipografie e chiunque desideri conservare immagini alla massima qualità.",
};

const PAIR = {
  'png-to-webp':
    "Il WebP supporta la trasparenza alfa esattamente come il PNG – tutte le aree trasparenti dell'immagine vengono conservate integralmente. Potete scegliere tra compressione con e senza perdita per trovare l'equilibrio ottimale tra dimensione del file e qualità dell'immagine.",
  'png-to-jpg':
    'Nella conversione da PNG a JPG, la trasparenza viene persa – le aree trasparenti vengono riempite con un colore di sfondo (bianco per impostazione predefinita). In compenso, ottenete file notevolmente più leggeri, più adatti a foto e contenuti web che non richiedono trasparenza.',
  'png-to-avif':
    "L'AVIF offre una compressione ancora migliore del WebP e può ridurre la dimensione delle immagini PNG fino al 50%. La trasparenza alfa è completamente supportata. Tenete presente che i browser meno recenti potrebbero non supportare ancora l'AVIF.",
  'png-to-gif':
    'La conversione riduce la palette a un massimo di 256 colori. Il risultato è adatto a grafiche semplici, icone e loghi, ma meno indicato per immagini fotorealistiche. La trasparenza è supportata, ma solo in modo binario (visibile o invisibile), non in modo graduale.',
  'png-to-tiff':
    "La conversione preserva la qualità completa e la trasparenza del PNG originale nel formato TIFF. Il TIFF è particolarmente adatto all'elaborazione successiva in programmi come Photoshop o alla stampa professionale. Tenete presente che i file TIFF possono essere significativamente più grandi dei PNG.",
  'jpg-to-webp':
    "Il WebP può ridurre la dimensione delle foto JPEG del 25–35% senza perdita di qualità visibile. Poiché il JPEG non supporta la trasparenza, nessuna informazione dell'immagine viene persa in questa conversione.",
  'jpg-to-png':
    "La conversione da JPG a PNG trasforma l'immagine in un formato senza perdita. Tuttavia, i dettagli già persi dalla compressione JPEG non possono essere recuperati. Il PNG è adatto se desiderate elaborare l'immagine senza rischiare ulteriori perdite di qualità.",
  'jpg-to-avif':
    "L'AVIF raggiunge una compressione fino al 50% migliore del JPEG a qualità visiva comparabile. Questo formato di nuova generazione è ideale per siti web critici in termini di prestazioni ed è supportato da Chrome, Firefox e Safari 16+.",
  'jpg-to-gif':
    'La palette di colori viene ridotta a 256, causando perdite di qualità visibili nelle fotografie. Questa conversione è adatta principalmente a grafiche semplici o quando il formato GIF è richiesto per ragioni di compatibilità.',
  'jpg-to-tiff':
    "La conversione preserva la qualità attuale del JPEG e la memorizza senza perdita nel formato TIFF. I dettagli già persi dalla compressione JPEG non possono essere recuperati, ma il TIFF consente l'elaborazione successiva senza ulteriori perdite di qualità.",
  'heic-to-jpg':
    "La conversione da HEIC a JPG trasforma il formato proprietario Apple nel formato JPEG universalmente compatibile. L'eventuale trasparenza e le informazioni HDR vengono perse, ma la qualità dell'immagine rimane praticamente identica all'originale con impostazioni a partire dall'85%.",
  'heic-to-png':
    "La conversione preserva la qualità completa dell'originale HEIC senza perdita nel formato PNG. Il PNG è supportato da tutti i dispositivi e piattaforme ed è particolarmente adatto se desiderate elaborare l'immagine o conservare la trasparenza.",
  'heic-to-webp':
    'Il WebP offre un eccellente equilibrio tra dimensione del file e qualità. La conversione da HEIC a WebP produce file compatti supportati da tutti i browser moderni – ideale per siti web e piattaforme online.',
  'heic-to-avif':
    "L'AVIF offre un'efficienza di compressione simile all'HEIC, ma come formato aperto è molto più ampiamente supportato. La conversione consente di utilizzare la compressione moderna senza le restrizioni dell'ecosistema Apple.",
  'heic-to-tiff':
    'La conversione trasforma le foto iPhone nel formato TIFF professionale. Ideale per i fotografi che desiderano archiviare i loro scatti mobili in un formato senza perdita ed elaborarli in programmi professionali come Photoshop o Lightroom.',
  'webp-to-jpg':
    'La conversione da WebP a JPEG assicura la massima compatibilità. Il JPG è supportato da ogni dispositivo e software – indispensabile per inviare immagini via e-mail o caricarle su piattaforme che non accettano il WebP.',
  'webp-to-png':
    "La conversione da WebP a PNG preserva la trasparenza dell'immagine e la memorizza senza perdita. Il PNG è particolarmente adatto all'elaborazione successiva nei programmi grafici e per le piattaforme che non supportano il formato WebP.",
  'webp-to-avif':
    "L'AVIF offre una compressione ancora migliore del WebP a qualità visiva comparabile. Se desiderate ottimizzare le immagini per gli standard web di nuova generazione, la conversione da WebP ad AVIF è un passo logico.",
  'webp-to-gif': 'La conversione riduce la palette a 256 colori. È adatta principalmente a grafiche semplici o quando il formato GIF è necessario per animazioni o ragioni di compatibilità.',
  'webp-to-tiff':
    "La conversione trasforma i file WebP nel formato TIFF professionale. Ideale per la produzione di stampa e l'archiviazione a lungo termine, dove sono richieste qualità senza perdita e supporto completo dei metadati.",
  'svg-to-jpg':
    "La rasterizzazione da SVG a JPG converte l'immagine vettoriale scalabile in un'immagine a pixel con risoluzione fissa. Le aree trasparenti vengono riempite con un colore di sfondo. Il risultato è adatto a piattaforme e applicazioni che non accettano SVG.",
  'svg-to-png':
    "La rasterizzazione da SVG a PNG converte l'immagine vettoriale in un'immagine a pixel preservando integralmente la trasparenza. Il PNG è particolarmente adatto a social media, messaggistica e firme e-mail che non supportano SVG.",
  'svg-to-webp':
    'La conversione produce immagini a pixel compatte dai grafici vettoriali nel formato WebP moderno. Il WebP è ideale per i siti web dove file leggeri e tempi di caricamento rapidi sono determinanti.',
  'svg-to-avif':
    "L'AVIF offre la migliore compressione per la rasterizzazione dei file SVG. Ideale per siti web critici in termini di prestazioni dove ogni kilobyte contribuisce a migliori tempi di caricamento e Core Web Vitals.",
  'svg-to-gif':
    "La conversione trasforma l'immagine vettoriale in un'immagine a pixel con massimo 256 colori. Il GIF è adatto a icone semplici e grafiche animate, ma non a illustrazioni complesse con molti colori o sfumature.",
  'svg-to-tiff':
    "La rasterizzazione da SVG a TIFF produce un'immagine a pixel senza perdita alla massima qualità. Ideale per la stampa professionale di grafiche vettoriali quando è necessaria una risoluzione fissa in pixel.",
  'gif-to-jpg':
    'Nella conversione da GIF a JPG, i frame di animazione e la trasparenza vengono persi – viene convertita solo la prima immagine. In compenso, ottenete un formato fotografico universalmente compatibile con profondità di colore completa (16,7 milioni di colori).',
  'gif-to-png':
    "La conversione preserva la qualità dell'immagine senza perdita e supporta la trasparenza binaria. Per i GIF animati, viene convertito solo il primo frame. Il PNG è particolarmente adatto alla rielaborazione di grafiche GIF.",
  'gif-to-webp':
    'Il WebP supporta sia immagini fisse sia animazioni con una compressione significativamente migliore del GIF. Per i GIF statici, la conversione produce file più leggeri a qualità visiva uguale o superiore.',
  'gif-to-avif':
    "L'AVIF offre una compressione superiore al GIF e supporta milioni di colori invece di soli 256. Ideale per modernizzare le vecchie grafiche GIF sui siti web per migliori tempi di caricamento.",
  'tiff-to-jpg':
    "La conversione riduce i file TIFF, spesso molto voluminosi, a dimensioni JPEG compatte. L'eventuale trasparenza e le informazioni sui livelli vengono perse, ma ottenete file universalmente compatibili per web, e-mail e social media.",
  'tiff-to-png':
    "La conversione preserva la qualità dell'immagine senza perdita e conserva la trasparenza se presente. I file PNG sono significativamente più leggeri dei TIFF e sono supportati da tutti i dispositivi, browser e piattaforme.",
  'tiff-to-webp':
    "Il WebP riduce drasticamente la dimensione dei file TIFF – spesso di oltre il 90%. Ideale per ottimizzare fotografie professionali o scansioni ad alta risoluzione per l'uso sul web.",
  'tiff-to-avif':
    "L'AVIF offre la compressione più efficiente per la conversione di file TIFF grandi. Ideale per l'ottimizzazione web della fotografia professionale e delle scansioni ad alta risoluzione con perdita di qualità minima.",
  'bmp-to-jpg':
    'I file BMP non sono compressi e sono quindi estremamente grandi. La conversione in JPEG riduce drasticamente la dimensione (spesso oltre il 95%) e produce file universalmente compatibili per tutti gli usi moderni.',
  'bmp-to-png':
    "La conversione da BMP a PNG riduce considerevolmente la dimensione tramite compressione senza perdita. A differenza del JPEG, la qualità dell'immagine completa viene preservata – ideale per grafiche con bordi netti e testo.",
  'bmp-to-webp': "Il WebP riduce le enormi dimensioni BMP fino al 97% con buona qualità visiva. La conversione modernizza le immagini legacy per l'uso su siti web e nelle applicazioni moderne.",
  'bmp-to-avif':
    "L'AVIF offre la migliore compressione per la modernizzazione di file BMP non compressi. La dimensione viene ridotta fino al 98% – ideale per la migrazione di vecchi archivi di immagini in formati moderni.",
  'bmp-to-gif':
    'La conversione riduce la palette a 256 colori e comprime considerevolmente il file. Adatto a grafiche semplici da sistemi datati, ma per immagini BMP fotorealistiche si raccomanda JPG o WebP.',
  'bmp-to-tiff':
    "La conversione da BMP a TIFF preserva la qualità dell'immagine completa e aggiunge il supporto professionale dei metadati. Il TIFF è più adatto del BMP per l'archiviazione a lungo termine e i flussi di lavoro di stampa professionali.",
  'avif-to-jpg':
    'La conversione da AVIF a JPEG assicura la massima compatibilità. Il JPG è supportato da ogni dispositivo e software – necessario quando destinatari o piattaforme non supportano ancora il formato AVIF più recente.',
  'avif-to-png':
    "La conversione preserva la qualità dell'immagine senza perdita nel formato PNG universalmente supportato. Il PNG è particolarmente adatto se desiderate conservare la trasparenza o elaborare l'immagine in programmi grafici.",
  'avif-to-webp':
    "Il WebP offre una compatibilità browser più ampia dell'AVIF con buona compressione. La conversione ha senso quando la piattaforma di destinazione supporta il WebP ma non ancora l'AVIF – uno scenario frequente con browser e CMS meno recenti.",
};

const PRIVACY =
  'Questo convertitore funziona interamente in locale nel vostro browser – i file non lasciano mai il vostro dispositivo. Nessun caricamento, nessun server, nessuna registrazione. Pienamente conforme al GDPR e gratuito senza alcuna limitazione.';

function extractFormats(filename) {
  const m = filename.match(/converter-(\w+)-to-(\w+)\.json/);
  return m ? { source: m[1], target: m[2], key: `${m[1]}-to-${m[2]}` } : null;
}

let updated = 0,
  skipped = 0;
const files = fs.readdirSync(IT_TOOLS).filter((f) => f.startsWith('converter-') && f.endsWith('.json'));

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

  const filePath = path.join(IT_TOOLS, file);
  const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  const block = data.contentBlocks.find((b) => b.type === 'sectionBasic');
  if (!block) {
    skipped++;
    continue;
  }

  block.html = `<p class="text-mid mb-4">${s}</p>` + `<p class="text-mid mb-4">${t}</p>` + `<p class="text-mid mb-4">${p}</p>` + `<p class="text-mid">${PRIVACY}</p>`;

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n', 'utf-8');
  updated++;
}
console.log(`IT: Updated: ${updated}, Skipped: ${skipped}`);
