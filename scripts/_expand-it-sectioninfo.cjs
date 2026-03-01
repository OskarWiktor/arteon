/**
 * Differentiate "in practice" sectionInfo in IT converter files.
 */
const fs = require('fs');
const path = require('path');
const TOOLS = path.join(__dirname, '..', 'data', 'it', 'tools');

const P = {
  'png-to-webp': [
    'Web designer e proprietari di e-commerce in Italia usano il PNG per loghi, ritagli di prodotti ed elementi di interfaccia con trasparenza. Passando a WebP, la trasparenza resta intatta mentre la dimensione si riduce del 25–35% – un vantaggio diretto per i tempi di caricamento e i Core Web Vitals.',
    'Le grafiche con grandi aree di colore pieno (loghi, icone) ne beneficiano di più: file da 200–500 KB spesso scendono sotto i 100 KB. Per i ritagli di prodotti su Amazon.it, Subito.it, eBay.it o negozi Shopify, ciò significa pagine categoria più veloci e migliore esperienza mobile.',
    'L\'elaborazione avviene interamente in locale nel browser – ideale per agenzie e aziende che devono rispettare il GDPR. Le immagini di prodotti o grafiche dei clienti non lasciano mai il dispositivo.',
  ],
  'png-to-jpg': [
    'I file PNG con trasparenza pesano spesso diversi megabyte. Quando la trasparenza non è necessaria – foto per il CV, scansioni di documenti o post sui social – la conversione in JPG riduce drasticamente la dimensione.',
    'Molte piattaforme come LinkedIn, Indeed o portali di lavoro accettano solo JPG. Anche gli allegati e-mail ne beneficiano: uno screenshot PNG da 3 MB diventa solo 200–400 KB in JPG. La qualità all\'85% offre il miglior compromesso tra dimensione e qualità visiva.',
    'Per documenti di candidatura e file riservati, l\'elaborazione locale nel browser è essenziale – i file non lasciano mai il dispositivo. Pienamente conforme al GDPR.',
  ],
  'png-to-avif': [
    'AVIF è il formato più efficiente della generazione attuale e può ridurre i file PNG fino al 50%. Per progetti web dove ogni kilobyte conta, PNG a AVIF è la conversione ottimale.',
    'AVIF supporta trasparenza, HDR e fino a 12 bit per canale. Chrome, Firefox e Safari 16+ lo supportano nativamente. Per i browser più vecchi, un fallback tramite <code>&lt;picture&gt;</code> con PNG o WebP è consigliato.',
    'Le aziende italiane che vogliono ottimizzare i punteggi PageSpeed ne beneficiano particolarmente: AVIF migliora misurabilmente il Largest Contentful Paint (LCP). L\'elaborazione locale garantisce la conformità al GDPR.',
  ],
  'png-to-gif': [
    'Grafiche semplici come icone, loghi o diagrammi con palette limitata si memorizzano più compattamente in GIF che in PNG. La conversione è utile quando la piattaforma richiede il formato GIF.',
    'Il GIF supporta solo 256 colori. Le immagini PNG fotorealistiche perdono qualità visibile nella conversione. La trasparenza è solo binaria (visibile/invisibile), non alfa graduale come nel PNG.',
    'Per presentazioni, grafiche newsletter o sistemi che accettano solo GIF, questa conversione è una soluzione rapida – interamente locale e senza upload.',
  ],
  'png-to-tiff': [
    'Tipografie, case editrici e sistemi di archiviazione spesso richiedono TIFF anziché PNG. La conversione preserva la qualità completa, la trasparenza e aggiunge il supporto professionale dei metadati.',
    'I file TIFF sono più grandi dei PNG, ma offrono vantaggi per i flussi professionali: supporto livelli in Photoshop, spazi colore CMYK per la stampa e metadati completi. TIFF è lo standard industriale per l\'archiviazione a lungo termine.',
    'Le tipografie in Italia lavorano frequentemente con TIFF. La conversione locale permette di elaborare bozze riservate senza upload nel cloud.',
  ],
  'jpg-to-webp': [
    'JPEG è lo standard per le foto digitali, ma per i siti web le dimensioni sono spesso eccessive. WebP comprime le immagini JPEG del 25–35% in più senza perdita di qualità visibile, migliorando direttamente i tempi di caricamento e i Core Web Vitals.',
    'Per gli e-commerce su WooCommerce, Shopify o PrestaShop, il passaggio da JPG a WebP velocizza misurabilmente le pagine prodotto. Google PageSpeed raccomanda esplicitamente WebP come formato di nuova generazione. A qualità 80–85%, la differenza è impercettibile.',
    'In Italia, dove le normative GDPR sono rigorose, l\'elaborazione locale delle immagini nel browser è particolarmente preziosa. Le foto dei prodotti non lasciano il dispositivo.',
  ],
  'jpg-to-png': [
    'A volte un JPEG deve essere convertito in un formato che supporta trasparenza o memorizzazione senza perdita – ad esempio per la modifica in Photoshop, Figma o Canva.',
    'La conversione da JPG a PNG non ripristina i dettagli persi dalla compressione JPEG, ma impedisce ulteriori perdite nelle modifiche future. Il PNG è ideale quando l\'immagine serve come base per collage, sovrapposizioni o layout di stampa.',
    'Per grafici e agenzie in Italia, l\'elaborazione locale è ideale: il materiale dei clienti resta sul proprio computer senza che un servizio esterno vi acceda.',
  ],
  'jpg-to-avif': [
    'AVIF raggiunge fino al 50% di compressione migliore del JPEG a qualità visiva comparabile. Per siti con molte foto – portali immobiliari, riviste online, siti di viaggi – i tempi di caricamento si riducono notevolmente.',
    'Piattaforme come Immobiliare.it, Booking.com o Subito.it adottano sempre più AVIF per migliorare l\'esperienza mobile. Chrome, Firefox e Safari 16+ lo supportano nativamente. Per browser più vecchi, un fallback WebP o JPG è consigliato.',
    'La conversione locale nel browser protegge le immagini: foto immobiliari, di prodotti o ritratti – nulla viene caricato su nessun server. Conforme al GDPR.',
  ],
  'jpg-to-gif': [
    'La conversione da JPG a GIF è utile quando serve una foto come grafica semplice con palette limitata – miniature in sistemi vecchi o newsletter che supportano solo GIF.',
    'Il GIF limita la palette a 256 colori. Nelle foto, ciò causa perdita visibile per dithering. Per la maggior parte degli usi, WebP o PNG sono scelte migliori.',
    'Se il flusso di lavoro richiede esclusivamente GIF, la conversione locale offre una soluzione rapida e conforme alla protezione dei dati.',
  ],
  'jpg-to-tiff': [
    'Tipografie professionali e agenzie fotografiche spesso richiedono TIFF anziché JPEG. La conversione preserva la qualità attuale e la memorizza senza perdita per elaborazioni successive.',
    'I dettagli già persi dalla compressione JPEG non vengono ripristinati, ma TIFF impedisce ulteriori perdite nei ritocchi. Supporta CMYK, livelli e metadati estesi – ideale per flussi di stampa professionali.',
    'Fotografi e agenzie in Italia beneficiano dell\'elaborazione locale: foto dei clienti e file di stampa restano sul dispositivo.',
  ],
  'heic-to-jpg': [
    'Gli utenti iPhone conoscono il problema: le foto HEIC non si aprono ovunque. PC Windows, dispositivi Android, molti moduli web e client e-mail non supportano HEIC. La conversione in JPG risolve immediatamente questo problema di compatibilità.',
    'A qualità 85–90%, la differenza tra originale HEIC e risultato JPG è visivamente quasi impercettibile. La dimensione è comparabile, poiché entrambi i formati usano compressione con perdita. Particolarmente pratico: convertire più foto iPhone simultaneamente.',
    'Per foto del CV, scansioni di documenti d\'identità o documenti personali, l\'elaborazione locale è essenziale – i dati sensibili non lasciano mai il dispositivo.',
  ],
  'heic-to-png': [
    'Se vuoi riutilizzare le foto iPhone senza perdita – come basi in Photoshop, Figma o per progetti di stampa – il PNG è il formato ideale. La conversione preserva la qualità completa dell\'originale HEIC.',
    'Il PNG supporta trasparenza e memorizzazione senza perdita, a differenza del JPG. I file PNG sono però significativamente più grandi di HEIC o JPG. Per la modifica in software grafici non è uno svantaggio – per l\'uso web si consiglia poi una conversione in WebP.',
    'Agenzie creative e fotografi beneficiano dell\'elaborazione locale: le foto iPhone dei clienti o degli shooting restano riservate sul proprio computer.',
  ],
  'heic-to-webp': [
    'Usare le foto iPhone HEIC direttamente sui siti web? WebP è il ponte ideale: combina la compressione efficiente di HEIC con la compatibilità universale dei browser (Chrome, Firefox, Safari 14+, Edge).',
    'La conversione da HEIC a WebP è particolarmente efficiente, poiché entrambi i formati usano algoritmi di compressione moderni. La dimensione resta compatta, la qualità alta. Per blog, negozi online e portfolio, è il modo più rapido per pubblicare foto iPhone ottimizzate.',
    'Blogger e e-commerce in Italia possono convertire le foto iPhone localmente e in conformità al GDPR – senza servizi cloud né strumenti esterni.',
  ],
  'heic-to-avif': [
    'AVIF offre efficienza di compressione simile a HEIC, ma come formato aperto non è legato all\'ecosistema Apple. HEIC a AVIF permette la compressione più moderna con ampio supporto multipiattaforma.',
    'Chrome, Firefox e Safari 16+ supportano AVIF nativamente. Per progetti web critici in performance – gallerie, portfolio, portali immobiliari – AVIF offre il miglior equilibrio tra dimensione e qualità.',
    'La conversione locale è particolarmente rilevante per fotografi e creativi: gli shooting iPhone si convertono direttamente nel formato web più efficiente – senza cloud.',
  ],
  'heic-to-tiff': [
    'I fotografi professionisti che lavorano con iPhone spesso necessitano TIFF per la post-produzione in Lightroom, Capture One o Photoshop. HEIC a TIFF preserva la qualità completa in un formato standard del settore.',
    'TIFF supporta 16 bit di profondità, livelli e metadati EXIF/IPTC estesi. Per la stampa, l\'archiviazione e il ritocco professionale, TIFF è il formato preferito. I file diventano però considerevolmente più grandi di HEIC.',
    'In Italia, dove molte tipografie e agenzie fotografiche richiedono TIFF come standard, la conversione locale offre un flusso di lavoro sicuro per shooting riservati.',
  ],
  'webp-to-jpg': [
    'WebP è ottimale per il web, ma servizi di stampa, Microsoft Office, software vecchi e alcuni social network richiedono JPG.',
    'WebP a JPG assicura la massima compatibilità. A qualità 85–90%, la qualità visiva è quasi identica. Pratico per inviare immagini via e-mail a destinatari che non possono aprire WebP.',
    'Per le agenzie che devono consegnare immagini in formati universali, la conversione locale è ideale – rapida, sicura e conforme al GDPR.',
  ],
  'webp-to-png': [
    'Le immagini WebP con trasparenza a volte devono essere convertite in PNG – per software grafici senza supporto WebP o file di stampa che richiedono qualità senza perdita.',
    'La conversione preserva trasparenza e qualità completamente. I PNG sono più grandi ma più adatti a Photoshop, Illustrator, InDesign e piattaforme senza supporto WebP.',
    'I designer in Italia possono convertire localmente asset WebP in PNG pronti per la stampa – senza cloud e in conformità al GDPR.',
  ],
  'webp-to-avif': [
    'AVIF offre compressione ancora migliore di WebP – il passo logico successivo per i siti che vogliono ottimizzare ulteriormente i tempi di caricamento.',
    'A qualità comparabile, i file AVIF sono il 20–30% più piccoli di WebP. Per siti con centinaia di immagini, il risparmio è considerevole. Un fallback WebP tramite <code>&lt;picture&gt;</code> copre i browser più vecchi.',
    'Gli e-commerce italiani che ottimizzano i Core Web Vitals beneficiano particolarmente di AVIF. La conversione locale evita l\'upload nel cloud.',
  ],
  'webp-to-gif': [
    'Il formato GIF è a volte necessario – sistemi vecchi, strumenti newsletter o piattaforme che accettano solo GIF. WebP a GIF è la soluzione più rapida.',
    'Il GIF supporta solo 256 colori. Le immagini fotorealistiche perdono qualità. La conversione è più adatta per grafiche semplici, icone o loghi.',
    'L\'elaborazione locale offre un\'alternativa rapida e sicura ai servizi di conversione online.',
  ],
  'webp-to-tiff': [
    'I flussi di stampa professionali spesso richiedono TIFF come formato di input. WebP a TIFF permette di preparare immagini web-ottimizzate per la stampa.',
    'TIFF memorizza senza perdita con supporto completo dei metadati. I dettagli persi dalla compressione WebP non vengono ripristinati – per la migliore qualità, partire dall\'originale.',
    'Per agenzie e tipografie in Italia, la conversione locale offre un mezzo sicuro per preparare asset web per progetti di stampa.',
  ],
  'svg-to-jpg': [
    'I SVG non sono accettati ovunque: social network, marketplace e molti CMS accettano solo formati raster. La conversione in JPG crea file universalmente compatibili.',
    'La rasterizzazione converte il vettore in pixel a risoluzione fissa. Le zone trasparenti vengono riempite con colore di sfondo (bianco di default). Per l\'uso web, si consiglia 1200–2000px di larghezza.',
    'Per pubblicazioni sui social e annunci su Subito.it, eBay.it o Amazon.it, SVG a JPG è un requisito comune.',
  ],
  'svg-to-png': [
    'I SVG vengono spesso convertiti in PNG per social network, messaggistica e firme e-mail – preservando la trasparenza con ampia compatibilità.',
    'La rasterizzazione in PNG preserva completamente le zone trasparenti – ideale per loghi su diversi sfondi. Ottimo anche per screenshot di documentazione e presentazioni.',
    'Per le agenzie che consegnano loghi in diversi formati, SVG a PNG è un flusso di lavoro rapido e conforme alla protezione dei dati.',
  ],
  'svg-to-webp': [
    'Per i siti che non possono integrare direttamente SVG – CMS con supporto limitato – WebP offre una rappresentazione pixel compatta con dimensione minima.',
    'I WebP da SVG sono tipicamente molto leggeri (5–30 KB) e si caricano istantaneamente. Per icone e loghi sui siti, è la soluzione più pragmatica quando l\'SVG diretto non è possibile.',
    'WordPress, WooCommerce e molti CMS in Italia supportano WebP nativamente – permettendo l\'uso di grafiche vettoriali anche in questi ambienti.',
  ],
  'svg-to-avif': [
    'AVIF offre la migliore compressione disponibile per grafiche vettoriali rasterizzate. Per siti critici in performance, SVG a AVIF è la scelta ottimale quando l\'SVG diretto non è possibile.',
    'I file AVIF da SVG sono estremamente compatti (3–15 KB). Ogni kilobyte conta per i Core Web Vitals: tempi di caricamento più rapidi migliorano il LCP e il posizionamento Google.',
    'Sviluppatori web e specialisti SEO in Italia usano sempre più AVIF come standard – la conversione locale semplifica la transizione.',
  ],
  'svg-to-gif': [
    'Il GIF è a volte necessario per icone in sistemi vecchi, template e-mail o forum. SVG a GIF crea file compatibili e leggeri.',
    'Il GIF limita a 256 colori. Per loghi monocromi è sufficiente; per illustrazioni complesse con sfumature, no. Trasparenza solo binaria.',
    'Per template newsletter e piattaforme vecchie che accettano solo GIF, è una soluzione locale rapida.',
  ],
  'svg-to-tiff': [
    'Le tipografie necessitano spesso immagini TIFF anziché vettori. SVG a TIFF crea file ad alta risoluzione senza perdita per la stampa professionale.',
    'TIFF memorizza in qualità massima con piena profondità di colore e metadati. Per biglietti da visita, volantini e poster, si consiglia minimo 300 DPI.',
    'Le tipografie in Italia accettano TIFF come standard. La conversione locale protegge bozze e loghi riservati.',
  ],
  'gif-to-jpg': [
    'Le vecchie immagini GIF a volte devono essere convertite in JPG – piattaforme che accettano solo JPEG o ottimizzazione per e-mail. Solo la prima immagine di un GIF animato viene convertita.',
    'JPG offre 16,7 milioni di colori anziché i 256 del GIF. Le foto salvate accidentalmente come GIF beneficiano della piena profondità di colore.',
    'Per archiviare vecchie grafiche in un formato moderno e universale, la conversione locale è rapida e conforme alla protezione dei dati.',
  ],
  'gif-to-png': [
    'Convertire GIF in PNG è utile per la memorizzazione senza perdita o la modifica in software grafici. Il PNG supporta colori a 32 bit e trasparenza alfa graduale.',
    'Nei GIF animati, solo la prima immagine viene convertita. La qualità è preservata senza perdita. Il PNG è ideale come formato intermedio per Photoshop, Figma o Canva.',
    'Per aggiornare vecchie grafiche web, la conversione locale offre una soluzione rapida e sicura senza servizi esterni.',
  ],
  'gif-to-webp': [
    'WebP offre compressione molto migliore del GIF. La modernizzazione dei GIF in WebP velocizza percettibilmente i siti web.',
    'I GIF statici si riducono del 30–60% come WebP, con milioni di colori anziché 256, migliorando nettamente la qualità visiva a dimensione uguale o inferiore.',
    'Per ottimizzare vecchi siti in Italia, il passaggio da GIF a WebP è un modo semplice per migliorare i Core Web Vitals.',
  ],
  'gif-to-avif': [
    'AVIF supera il GIF in tutto: migliore compressione, milioni di colori, animazione moderna. Per modernizzare vecchi contenuti web, GIF a AVIF è il più efficiente.',
    'I file AVIF da GIF sono drasticamente più piccoli e visivamente migliori. I browser vecchi non supportano ancora AVIF – un fallback tramite <code>&lt;picture&gt;</code> è consigliato.',
    'Per massimizzare i tempi di caricamento, il passaggio da GIF ad AVIF offre il maggior guadagno individuale di tutti i cambi di formato.',
  ],
  'tiff-to-jpg': [
    'I file TIFF da fotografia professionale o scanner pesano spesso 20–100 MB. La conversione in JPG crea file compatti per web, e-mail e social – riduzione tipica di oltre il 95%.',
    'Trasparenza e livelli si perdono nella conversione. Per la pura fotografia, non è un problema. A qualità 85–90%, la qualità visiva resta eccellente con dimensioni di poche centinaia di KB.',
    'Fotografi e utenti di scanner in Italia possono convertire i TIFF localmente e in conformità al GDPR in JPG pronti per l\'invio – ideale per presentazioni ai clienti.',
  ],
  'tiff-to-png': [
    'Quando i TIFF servono per la modifica in software grafici o per siti con trasparenza, il PNG è il formato adatto – senza perdita e universalmente compatibile.',
    'Il PNG preserva la qualità completa e la trasparenza del TIFF. I file sono più piccoli del TIFF ma più grandi di JPEG/WebP. Per Figma, Canva o Photoshop, il PNG è ideale.',
    'Per preparare output di scanner e immagini d\'archivio per l\'uso online, la conversione locale offre un flusso sicuro e rapido.',
  ],
  'tiff-to-webp': [
    'TIFF a WebP offre la maggiore riduzione: file da 20–100 MB passano a 200 KB – 2 MB. Per pubblicare foto professionali sul web, è il più efficiente.',
    'A qualità 80–85%, WebP mantiene eccellente qualità visiva. Per gallerie, portfolio e riviste online: qualità professionale a una frazione della dimensione originale.',
    'Fotografi e agenzie in Italia possono convertire shooting ad alta risoluzione in formati web-ottimizzati localmente – senza cloud, conforme al GDPR.',
  ],
  'tiff-to-avif': [
    'AVIF offre la compressione più efficiente per grandi file TIFF. Foto e scansioni ad alta risoluzione si riducono drasticamente con minima perdita di qualità.',
    'Per gallerie e portfolio web che cercano i migliori tempi di caricamento, TIFF a AVIF è il flusso ottimale. Chrome, Firefox e Safari 16+ supportano AVIF; fallback WebP per browser vecchi.',
    'Fotografi e agenzie fotografiche in Italia beneficiano dell\'elaborazione locale: foto dei clienti ad alta risoluzione ottimizzate in modo sicuro e conforme al GDPR.',
  ],
  'bmp-to-jpg': [
    'I file BMP provengono spesso da vecchie applicazioni Windows o scanner. Non compressi e molto grandi, la conversione in JPG riduce la dimensione di oltre il 95%.',
    'Un BMP da 10 MB diventa tipicamente 200–400 KB come JPG. Per e-mail, documentazione e archiviazione, è il modo più semplice per risparmiare spazio e assicurare compatibilità.',
    'Per migrare archivi di immagini vecchi e preparare output di scanner, la conversione locale è rapida e conforme alla protezione dei dati.',
  ],
  'bmp-to-png': [
    'BMP a PNG riduce la dimensione tramite compressione senza perdita – la qualità completa è preservata. Ideale per grafiche con bordi netti, testo o screenshot.',
    'A differenza del JPG, il PNG preserva la qualità pixel esatta senza artefatti. Per documentazioni tecniche e screenshot con testo, il PNG è la scelta migliore.',
    'La conversione locale è adatta per documenti riservati e screenshot interni – nulla viene inviato a un server esterno.',
  ],
  'bmp-to-webp': [
    'I BMP sono inadatti al web moderno – non compressi e enormi. WebP riduce la dimensione fino al 97% con buona qualità, modernizzando vecchie immagini per il web.',
    'La conversione modernizza vecchi archivi Windows per siti, CMS e negozi attuali. WebP è supportato da tutti i browser moderni e migliora i tempi di caricamento.',
    'Per le aziende italiane che preparano vecchi archivi per la presenza web, la conversione locale è efficiente e conforme al GDPR.',
  ],
  'bmp-to-avif': [
    'AVIF offre la migliore compressione per BMP non compressi: riduzioni di oltre il 98%. Per modernizzare vecchi archivi, BMP a AVIF è il più efficiente.',
    'AVIF supporta HDR, ampi spazi colore e fino a 12 bit – la qualità originale è preservata al meglio. Chrome, Firefox e Safari 16+ lo supportano nativamente.',
    'La conversione locale permette la migrazione di interi archivi senza cloud – rapida, sicura e conforme alla protezione dei dati.',
  ],
  'bmp-to-gif': [
    'BMP a GIF è utile per sistemi che accettano solo GIF o grafiche semplici con pochi colori dove GIF è più compatto.',
    'Il GIF supporta solo 256 colori. Le immagini fotorealistiche perdono qualità. Per le foto, JPG o WebP sono preferibili. GIF è adatto solo per grafiche semplici.',
    'Per requisiti di compatibilità di sistemi vecchi, la conversione locale offre una soluzione rapida e sicura.',
  ],
  'bmp-to-tiff': [
    'BMP a TIFF è utile per il supporto professionale dei metadati – archiviazione, prestampa o elaborazione in software professionali.',
    'TIFF preserva la qualità completa del BMP e aggiunge: metadati EXIF, CMYK e livelli. Per l\'archiviazione a lungo termine, TIFF è nettamente superiore a BMP.',
    'Archivi, biblioteche e aziende italiane che digitalizzano fondi vecchi beneficiano della conversione locale senza dipendenza dal cloud.',
  ],
  'avif-to-jpg': [
    'AVIF non è ancora supportato da vecchi dispositivi, software di editing e alcune piattaforme. La conversione in JPG assicura la massima compatibilità.',
    'A qualità 85–90%, la qualità è quasi identica all\'originale AVIF. Utile per e-mail a destinatari con sistemi vecchi o servizi di stampa che accettano solo JPEG.',
    'Per le aziende che necessitano immagini web-ottimizzate (AVIF) e universali (JPG), la conversione locale è un flusso di lavoro efficiente.',
  ],
  'avif-to-png': [
    'Le immagini AVIF con trasparenza a volte devono essere convertite in PNG – per la modifica in software grafici o piattaforme senza supporto AVIF.',
    'Il PNG preserva trasparenza e qualità senza perdita. I file sono più grandi di AVIF ma adatti a Photoshop, Figma, Canva e alla stampa.',
    'I designer in Italia usano la conversione locale per preparare asset AVIF per diversi canali – sicuro e conforme al GDPR.',
  ],
  'avif-to-webp': [
    'WebP offre maggior supporto browser di AVIF (Safari 14+ vs 16+) con buona compressione. Se il tuo pubblico usa browser più vecchi, WebP è più sicuro.',
    'AVIF a WebP è rilevante per CMS e CDN senza supporto AVIF. WebP è supportato nativamente da WordPress, Shopify, Cloudflare e tutti i browser moderni.',
    'Per progetti web in Italia che necessitano massima copertura browser, WebP resta il formato moderno più affidabile.',
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
  const block = data.contentBlocks.find(b => b.type === 'sectionInfo' && !b.html.includes('<table') && (b.title.includes('pratica') || b.title.includes('nella pratica')));
  if (!block) { skipped++; continue; }
  block.html = `<p class="text-mid mb-4">${p1}</p><p class="text-mid mb-4">${p2}</p><p class="text-mid">${p3}</p>`;
  fs.writeFileSync(fp, JSON.stringify(data, null, 2) + '\n', 'utf-8');
  updated++;
}
console.log(`IT sectionInfo: Updated: ${updated}, Skipped: ${skipped}`);
