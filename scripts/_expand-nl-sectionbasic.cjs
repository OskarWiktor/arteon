/**
 * Expand "Why convert X to Y?" sectionBasic in NL converter files.
 */
const fs = require('fs');
const path = require('path');
const NL_TOOLS = path.join(__dirname, '..', 'data', 'nl', 'tools');

const SOURCE = {
  png: "Portable Network Graphics (PNG) is een verliesvrij beeldformaat dat miljoenen kleuren en volledige alfa-transparantie ondersteunt. PNG is bijzonder geschikt voor logo's, pictogrammen, schermafbeeldingen en afbeeldingen met scherpe randen of tekst.",
  jpg: "JPEG (JPG) is het meest gebruikte beeldformaat ter wereld voor digitale foto's. Het gebruikt compressie met verlies voor compacte bestanden, maar ondersteunt geen transparantie of verliesvrije opslag.",
  heic: "High Efficiency Image Container (HEIC) is het standaardformaat voor foto's op Apple-apparaten sinds iOS 11. HEIC biedt kleinere bestanden dan JPEG bij vergelijkbare kwaliteit, maar wordt buiten het Apple-ecosysteem niet standaard ondersteund.",
  webp: 'WebP is een modern beeldformaat ontwikkeld door Google dat zowel compressie met als zonder verlies ondersteunt. Het levert aanzienlijk kleinere bestanden dan PNG en JPEG bij vergelijkbare visuele kwaliteit.',
  svg: "Scalable Vector Graphics (SVG) is een XML-gebaseerd vectorformaat voor tweedimensionale afbeeldingen. SVG-bestanden zijn resolutieonafhankelijk en blijven scherp op elke grootte – ideaal voor logo's, pictogrammen en illustraties.",
  gif: 'Graphics Interchange Format (GIF) ondersteunt animaties en een palet van maximaal 256 kleuren. GIF wordt veel gebruikt voor geanimeerde content op sociale media, maar de kleurbeperking maakt het ongeschikt voor fotorealistische afbeeldingen.',
  bmp: 'Bitmap (BMP) is een ouder Windows-beeldformaat dat pixeldata ongecomprimeerd opslaat. BMP-bestanden zijn daardoor extreem groot en ongeschikt voor modern gebruik op het web of mobiele apparaten.',
  tiff: 'Tagged Image File Format (TIFF) is de industriestandaard voor professionele fotografie, drukwerk en archivering. TIFF slaat afbeeldingen verliesvrij op met volledige kleurdiepte, lagen en metadata.',
  avif: 'AV1 Image File Format (AVIF) is een beeldformaat van de volgende generatie, gebaseerd op de AV1-videocodec. AVIF biedt momenteel de beste beschikbare compressie – bestanden tot 50% kleiner dan WebP bij vergelijkbare visuele kwaliteit.',
};

const TARGET = {
  webp: 'WebP vermindert de bestandsgrootte met 30–35% ten opzichte van oudere formaten, zonder zichtbaar kwaliteitsverlies. Alle moderne browsers (Chrome, Firefox, Safari 14+, Edge) ondersteunen WebP volledig. Voor websites betekent dit snellere laadtijden en een betere Google-ranking.',
  avif: 'AVIF biedt de meest efficiënte compressie van alle huidige beeldformaten en kan de bestandsgrootte tot 50% verminderen ten opzichte van JPEG. Chrome, Firefox en Safari 16+ ondersteunen AVIF. Het is de optimale keuze voor prestatiekritische webprojecten.',
  jpg: 'JPEG is het meest universele beeldformaat – compatibel met elk apparaat, elke browser en elk platform. De conversie naar JPG garandeert dat uw afbeeldingen overal probleemloos worden weergegeven: van e-mailbijlagen tot social-mediaposts.',
  png: 'PNG behoudt de volledige beeldkwaliteit zonder compressieartefacten en ondersteunt volledige alfa-transparantie. Dit verliesvrije formaat is ideaal voor afbeeldingen die verder bewerkt moeten worden en voor beelden waarbij transparante gebieden behouden moeten blijven.',
  gif: 'GIF is het standaardformaat voor korte animaties, memes en eenvoudige afbeeldingen met beperkt kleurenpalet. Met universele browserondersteuning is GIF bijzonder geschikt voor geanimeerde content op sociale media en in berichtenapps.',
  tiff: 'TIFF behoudt de volledige beeldkwaliteit zonder enig gegevensverlies en ondersteunt lagen en uitgebreide metadata. Als industriestandaard voor drukwerk en archivering is TIFF geschikt voor professionele fotografen en drukkerijen.',
};

const PAIR = {
  'png-to-webp':
    'WebP ondersteunt alfa-transparantie precies zoals PNG – alle transparante gebieden blijven volledig behouden. U kunt kiezen tussen compressie met en zonder verlies om de optimale balans tussen bestandsgrootte en beeldkwaliteit te vinden.',
  'png-to-jpg':
    "Bij de conversie van PNG naar JPG gaat de transparantie verloren – transparante gebieden worden gevuld met een achtergrondkleur. Daar staat tegenover dat u aanzienlijk kleinere bestanden krijgt, beter geschikt voor foto's en webcontent zonder transparantie.",
  'png-to-avif':
    'AVIF biedt nog betere compressie dan WebP en kan de bestandsgrootte van uw PNG-afbeeldingen tot 50% verminderen. Alfa-transparantie wordt volledig ondersteund. Oudere browsers ondersteunen AVIF mogelijk nog niet.',
  'png-to-gif':
    "De conversie reduceert het kleurenpalet tot maximaal 256 kleuren. Het resultaat is geschikt voor eenvoudige afbeeldingen, pictogrammen en logo's. Transparantie wordt ondersteund, maar alleen binair (zichtbaar of onzichtbaar).",
  'png-to-tiff':
    'De conversie behoudt de volledige beeldkwaliteit en transparantie van het PNG-origineel in TIFF-formaat. TIFF is geschikt voor verdere verwerking in Photoshop of professioneel drukwerk. TIFF-bestanden zijn groter dan PNG.',
  'jpg-to-webp':
    "WebP kan de bestandsgrootte van uw JPEG-foto's met 25–35% verminderen zonder zichtbaar kwaliteitsverlies. Aangezien JPEG geen transparantie ondersteunt, gaat er bij deze conversie geen beeldinformatie verloren.",
  'jpg-to-png':
    'De conversie van JPG naar PNG zet uw afbeelding om naar een verliesvrij formaat. Details die al verloren zijn door JPEG-compressie kunnen niet worden hersteld. PNG is geschikt als u de afbeelding wilt bewerken zonder extra kwaliteitsverlies.',
  'jpg-to-avif':
    'AVIF bereikt een tot 50% betere compressie dan JPEG bij vergelijkbare visuele kwaliteit. Dit formaat van de volgende generatie is ideaal voor prestatiekritische websites en wordt ondersteund door Chrome, Firefox en Safari 16+.',
  'jpg-to-gif':
    "Het kleurenpalet wordt gereduceerd tot 256, wat bij foto's tot zichtbaar kwaliteitsverlies leidt. Deze conversie is vooral geschikt voor eenvoudige afbeeldingen of wanneer het GIF-formaat om compatibiliteitsredenen vereist is.",
  'jpg-to-tiff':
    'De conversie behoudt de huidige kwaliteit van uw JPEG en slaat deze verliesvrij op in TIFF-formaat. Details verloren door JPEG-compressie kunnen niet worden hersteld, maar TIFF maakt verdere bewerking mogelijk zonder extra kwaliteitsverlies.',
  'heic-to-jpg':
    'De conversie van HEIC naar JPG zet het eigen Apple-formaat om naar het universeel compatibele JPEG-formaat. Eventuele transparantie en HDR-informatie gaan verloren, maar de beeldkwaliteit blijft bij instellingen vanaf 85% vrijwel identiek aan het origineel.',
  'heic-to-png':
    'De conversie behoudt de volledige beeldkwaliteit van uw HEIC-origineel verliesvrij in PNG-formaat. PNG wordt ondersteund door alle apparaten en is geschikt als u de afbeelding wilt bewerken of de transparantie wilt behouden.',
  'heic-to-webp':
    'WebP biedt een uitstekende balans tussen bestandsgrootte en kwaliteit. De conversie van HEIC naar WebP levert compacte bestanden op die door alle moderne browsers worden ondersteund – ideaal voor websites.',
  'heic-to-avif':
    'AVIF biedt vergelijkbare compressie-efficiëntie als HEIC, maar wordt als open formaat veel breder ondersteund. De conversie maakt moderne compressie mogelijk zonder de beperkingen van het Apple-ecosysteem.',
  'heic-to-tiff':
    "De conversie zet uw iPhone-foto's om naar het professionele TIFF-formaat. Ideaal voor fotografen die hun mobiele opnamen willen archiveren in verliesvrij formaat en verder bewerken in Photoshop of Lightroom.",
  'webp-to-jpg':
    'De conversie van WebP naar JPEG zorgt voor maximale compatibiliteit. JPG wordt ondersteund door elk apparaat en elke software – onmisbaar wanneer u afbeeldingen per e-mail wilt versturen of wilt uploaden naar platforms die geen WebP accepteren.',
  'webp-to-png':
    "De conversie van WebP naar PNG behoudt de transparantie van uw afbeelding en slaat deze verliesvrij op. PNG is geschikt voor verdere bewerking in grafische programma's en voor platforms die WebP niet ondersteunen.",
  'webp-to-avif':
    'AVIF biedt nog betere compressie dan WebP bij vergelijkbare visuele kwaliteit. Als u uw afbeeldingen wilt optimaliseren voor de webstandaarden van de volgende generatie, is de conversie van WebP naar AVIF een logische stap.',
  'webp-to-gif': 'De conversie reduceert het kleurenpalet tot 256. Het is geschikt voor eenvoudige afbeeldingen of wanneer het GIF-formaat nodig is voor animaties of compatibiliteitsredenen.',
  'webp-to-tiff':
    'De conversie zet uw WebP-bestanden om naar het professionele TIFF-formaat. Ideaal voor drukproductie en archivering waar verliesvrije kwaliteit en volledige metadata-ondersteuning vereist zijn.',
  'svg-to-jpg':
    'De rasterisatie van SVG naar JPG zet de schaalbare vectorafbeelding om naar een pixelafbeelding met vaste resolutie. Transparante gebieden worden gevuld met een achtergrondkleur. Geschikt voor platforms die geen SVG accepteren.',
  'svg-to-png':
    'De rasterisatie van SVG naar PNG zet de vectorafbeelding om naar pixels waarbij de transparantie volledig behouden blijft. PNG is geschikt voor sociale media en berichtenapps die geen SVG ondersteunen.',
  'svg-to-webp': 'De conversie produceert compacte pixelafbeeldingen van uw vectorgrafieken in WebP-formaat. WebP is ideaal voor websites waar kleine bestanden en snelle laadtijden bepalend zijn.',
  'svg-to-avif':
    'AVIF biedt de beste compressie voor de rasterisatie van SVG-bestanden. Ideaal voor prestatiekritische websites waar elke kilobyte bijdraagt aan betere laadtijden en Core Web Vitals.',
  'svg-to-gif':
    'De conversie zet de vectorafbeelding om naar pixels met maximaal 256 kleuren. GIF is geschikt voor eenvoudige pictogrammen en geanimeerde afbeeldingen, maar niet voor complexe illustraties met kleurverlopen.',
  'svg-to-tiff':
    'De rasterisatie van SVG naar TIFF produceert een verliesvrije pixelafbeelding in de hoogste kwaliteit. Ideaal voor professioneel drukwerk van vectorgrafieken wanneer een vaste pixelresolutie nodig is.',
  'gif-to-jpg':
    'Bij de conversie van GIF naar JPG gaan animatieframes en transparantie verloren – alleen het eerste beeld wordt geconverteerd. U krijgt een universeel compatibel fotoformaat met volledige kleurdiepte (16,7 miljoen kleuren).',
  'gif-to-png':
    "De conversie behoudt de beeldkwaliteit verliesvrij en ondersteunt binaire transparantie. Bij geanimeerde GIF's wordt alleen het eerste frame geconverteerd. PNG is geschikt voor de verdere bewerking van GIF-afbeeldingen.",
  'gif-to-webp':
    "WebP ondersteunt zowel stilstaande beelden als animaties met aanzienlijk betere compressie dan GIF. Bij statische GIF's levert de conversie kleinere bestanden bij gelijke of betere visuele kwaliteit.",
  'gif-to-avif':
    'AVIF biedt superieure compressie ten opzichte van GIF en ondersteunt miljoenen kleuren in plaats van slechts 256. Ideaal om oudere GIF-afbeeldingen op websites te moderniseren voor betere laadtijden.',
  'tiff-to-jpg':
    'De conversie reduceert de vaak zeer grote TIFF-bestanden tot compacte JPEG-formaten. Eventuele transparantie en laafinformatie gaan verloren, maar u krijgt universeel compatibele bestanden voor web, e-mail en sociale media.',
  'tiff-to-png':
    'De conversie behoudt de beeldkwaliteit verliesvrij en bewaart de transparantie indien aanwezig. PNG-bestanden zijn aanzienlijk kleiner dan TIFF en worden ondersteund door alle apparaten en platforms.',
  'tiff-to-webp':
    "WebP vermindert de bestandsgrootte van uw TIFF-bestanden drastisch – vaak met meer dan 90%. Ideaal om professionele foto's of hoge-resolutiescans te optimaliseren voor gebruik op het web.",
  'tiff-to-avif':
    'AVIF biedt de meest efficiënte compressie voor de conversie van grote TIFF-bestanden. Ideaal voor weboptimalisatie van professionele fotografie en hoge-resolutiescans met minimaal kwaliteitsverlies.',
  'bmp-to-jpg':
    'BMP-bestanden zijn ongecomprimeerd en daardoor extreem groot. De conversie naar JPEG vermindert de bestandsgrootte drastisch (vaak meer dan 95%) en produceert universeel compatibele bestanden.',
  'bmp-to-png':
    'De conversie van BMP naar PNG vermindert de bestandsgrootte aanzienlijk door verliesvrije compressie. In tegenstelling tot JPEG blijft de volledige beeldkwaliteit behouden – ideaal voor afbeeldingen met scherpe randen en tekst.',
  'bmp-to-webp':
    'WebP vermindert de enorme BMP-bestandsgroottes tot 97% met goede visuele kwaliteit. De conversie moderniseert uw legacy-afbeeldingen voor gebruik op websites en in moderne applicaties.',
  'bmp-to-avif':
    'AVIF biedt de beste compressie voor de modernisering van ongecomprimeerde BMP-bestanden. De bestandsgrootte wordt tot 98% verminderd – ideaal voor de migratie van oude beeldbestanden naar moderne formaten.',
  'bmp-to-gif':
    'De conversie reduceert het kleurenpalet tot 256 kleuren en comprimeert het bestand aanzienlijk. Geschikt voor eenvoudige afbeeldingen uit oudere systemen, maar voor fotorealistische BMP-beelden wordt JPG of WebP aanbevolen.',
  'bmp-to-tiff':
    'De conversie van BMP naar TIFF behoudt de volledige beeldkwaliteit en voegt professionele metadata-ondersteuning toe. TIFF is geschikter dan BMP voor langdurige archivering en professionele drukworkflows.',
  'avif-to-jpg':
    'De conversie van AVIF naar JPEG zorgt voor maximale compatibiliteit. JPG wordt ondersteund door alle apparaten en software – noodzakelijk wanneer ontvangers of platforms het nieuwere AVIF-formaat nog niet ondersteunen.',
  'avif-to-png':
    "De conversie behoudt de beeldkwaliteit verliesvrij in het universeel ondersteunde PNG-formaat. PNG is geschikt als u de transparantie wilt behouden of de afbeelding wilt bewerken in grafische programma's.",
  'avif-to-webp':
    'WebP biedt bredere browserondersteuning dan AVIF met goede compressie. De conversie is zinvol wanneer uw doelplatform WebP maar nog geen AVIF ondersteunt – een veelvoorkomend scenario bij oudere browsers en CMS-systemen.',
};

const PRIVACY =
  'Deze converter werkt volledig lokaal in uw browser – uw bestanden verlaten nooit uw apparaat. Geen uploads, geen servers, geen registratie. Volledig AVG-conform en gratis zonder enige beperking.';

function extractFormats(f) {
  const m = f.match(/converter-(\w+)-to-(\w+)\.json/);
  return m ? { source: m[1], target: m[2], key: `${m[1]}-to-${m[2]}` } : null;
}

let updated = 0,
  skipped = 0;
const files = fs.readdirSync(NL_TOOLS).filter((f) => f.startsWith('converter-') && f.endsWith('.json'));
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
  const filePath = path.join(NL_TOOLS, file);
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
console.log(`NL: Updated: ${updated}, Skipped: ${skipped}`);
