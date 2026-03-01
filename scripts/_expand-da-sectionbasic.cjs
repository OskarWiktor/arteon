/**
 * Expand "Why convert X to Y?" sectionBasic in DA converter files.
 */
const fs = require('fs');
const path = require('path');
const TOOLS = path.join(__dirname, '..', 'data', 'da', 'tools');

const SOURCE = {
  png: 'Portable Network Graphics (PNG) er et tabsfrit billedformat, der understøtter millioner af farver og fuld alfa-gennemsigtighed. PNG er særligt velegnet til logoer, ikoner, skærmbilleder og grafik med skarpe kanter eller tekst.',
  jpg: 'JPEG (JPG) er verdens mest udbredte billedformat til digitale fotos. Det bruger tabsgivende komprimering til kompakte filer, men understøtter hverken gennemsigtighed eller tabsfri lagring.',
  heic: 'High Efficiency Image Container (HEIC) er standardformatet for fotos på Apple-enheder siden iOS 11. HEIC tilbyder mindre filer end JPEG ved sammenlignelig kvalitet, men understøttes ikke nativt uden for Apples økosystem – hverken på Windows, Android eller mange webplatforme.',
  webp: 'WebP er et moderne billedformat udviklet af Google, der understøtter både tabsgivende og tabsfri komprimering. Det producerer markant mindre filer end PNG og JPEG ved sammenlignelig visuel kvalitet og understøttes af alle aktuelle browsere.',
  svg: 'Scalable Vector Graphics (SVG) er et XML-baseret vektorformat til todimensionel grafik. SVG-filer er opløsningsuafhængige og forbliver skarpe i enhver størrelse – ideelle til logoer, ikoner og illustrationer.',
  gif: 'Graphics Interchange Format (GIF) understøtter animationer og en palet på maksimalt 256 farver. GIF bruges meget til animeret indhold på sociale medier, men farvebegrænsningen gør det uegnet til fotorealistiske billeder.',
  bmp: 'Bitmap (BMP) er et ældre Windows-billedformat, der lagrer pixeldata uden komprimering. BMP-filer er derfor ekstremt store og uegnede til moderne brug på nettet eller mobile enheder.',
  tiff: 'Tagged Image File Format (TIFF) er industristandarden for professionel fotografering, tryk og arkivering. TIFF lagrer billeder tabsfrit med fuld farvedybde, lag og metadata.',
  avif: 'AV1 Image File Format (AVIF) er et næste generations billedformat baseret på AV1-videocodecen. AVIF tilbyder den bedste tilgængelige komprimering – filer op til 50% mindre end WebP ved sammenlignelig visuel kvalitet.',
};

const TARGET = {
  webp: 'WebP reducerer filstørrelsen med 30–35% sammenlignet med ældre formater uden synligt kvalitetstab. Alle moderne browsere (Chrome, Firefox, Safari 14+, Edge) understøtter WebP fuldt ud. For hjemmesider betyder det hurtigere indlæsningstider og bedre Google-placering.',
  avif: 'AVIF tilbyder den mest effektive komprimering af alle aktuelle billedformater og kan reducere filstørrelsen op til 50% sammenlignet med JPEG. Chrome, Firefox og Safari 16+ understøtter AVIF. Det er det optimale valg til ydelseskritiske webprojekter.',
  jpg: 'JPEG er det mest universelle billedformat – kompatibelt med enhver enhed, browser og platform. Konvertering til JPG sikrer, at dine billeder vises problemfrit overalt: fra e-mailvedhæftninger til opslag på sociale medier.',
  png: 'PNG bevarer den fulde billedkvalitet uden komprimeringsartefakter og understøtter fuld alfa-gennemsigtighed. Dette tabsfrie format er ideelt til grafik, der skal viderebearbejdes, og billeder hvor gennemsigtige områder skal bevares.',
  gif: 'GIF er standardformatet for korte animationer, memes og enkel grafik med begrænset farvepalet. Med universel browserunderstøttelse er GIF særligt velegnet til animeret indhold på sociale medier og i beskedapps.',
  tiff: 'TIFF bevarer den fulde billedkvalitet uden noget datatab og understøtter lag og omfattende metadata. Som industristandard for tryk og arkivering er TIFF velegnet til professionelle fotografer og trykkerier.',
};

const PAIR = {
  'png-to-webp':
    'WebP understøtter alfa-gennemsigtighed præcis som PNG – alle gennemsigtige områder bevares fuldstændigt. Du kan vælge mellem tabsgivende og tabsfri komprimering for at finde den optimale balance mellem filstørrelse og kvalitet.',
  'png-to-jpg':
    'Ved konvertering fra PNG til JPG mistes gennemsigtigheden – gennemsigtige områder fyldes med en baggrundsfarve. Til gengæld får du markant mindre filer, velegnet til fotos og webindhold uden gennemsigtighed.',
  'png-to-avif':
    'AVIF tilbyder endnu bedre komprimering end WebP og kan reducere PNG-billedernes størrelse op til 50%. Alfa-gennemsigtighed understøttes fuldt ud. Ældre browsere understøtter muligvis endnu ikke AVIF.',
  'png-to-gif':
    'Konverteringen reducerer paletten til maksimalt 256 farver. Resultatet er velegnet til enkel grafik, ikoner og logoer. Gennemsigtighed understøttes kun binært (synlig eller usynlig), ikke graduelt.',
  'png-to-tiff':
    'Konverteringen bevarer den fulde kvalitet og gennemsigtighed af PNG-originalen i TIFF-format. TIFF er velegnet til videre behandling i Photoshop eller professionelt tryk. TIFF-filer er større end PNG.',
  'jpg-to-webp': 'WebP kan reducere dine JPEG-fotos med 25–35% uden synligt kvalitetstab. Da JPEG ikke understøtter gennemsigtighed, mistes ingen billedinformation ved denne konvertering.',
  'jpg-to-png':
    'Konvertering fra JPG til PNG omdanner billedet til et tabsfrit format. Detaljer allerede tabt ved JPEG-komprimering kan dog ikke gendannes. PNG er velegnet, hvis du vil redigere billedet uden yderligere kvalitetstab.',
  'jpg-to-avif':
    'AVIF opnår op til 50% bedre komprimering end JPEG ved sammenlignelig visuel kvalitet. Dette næste generations format er ideelt til ydelseskritiske hjemmesider og understøttes af Chrome, Firefox og Safari 16+.',
  'jpg-to-gif':
    'Farvepaletten reduceres til 256, hvilket ved fotos fører til synlige kvalitetstab. Denne konvertering er primært velegnet til enkel grafik eller når GIF-formatet kræves af kompatibilitetsårsager.',
  'jpg-to-tiff':
    'Konverteringen bevarer den aktuelle kvalitet af dit JPEG og gemmer den tabsfrit i TIFF-format. Detaljer tabt ved JPEG-komprimering kan ikke gendannes, men TIFF muliggør videre redigering uden yderligere tab.',
  'heic-to-jpg':
    'Konvertering fra HEIC til JPG omdanner Apples proprietære format til det universelt kompatible JPEG-format. Eventuel gennemsigtighed og HDR-information mistes, men billedkvaliteten forbliver praktisk talt identisk med originalen ved indstillinger fra 85%.',
  'heic-to-png':
    'Konverteringen bevarer den fulde kvalitet af dit HEIC-original tabsfrit i PNG-format. PNG understøttes af alle enheder og er særligt velegnet, hvis du vil redigere billedet eller bevare gennemsigtigheden.',
  'heic-to-webp':
    'WebP tilbyder en fremragende balance mellem filstørrelse og kvalitet. Konvertering fra HEIC til WebP producerer kompakte filer understøttet af alle moderne browsere – ideelt til hjemmesider.',
  'heic-to-avif':
    'AVIF tilbyder lignende komprimeringseffektivitet som HEIC, men understøttes som åbent format langt bredere. Konverteringen muliggør moderne komprimering uden begrænsningerne i Apples økosystem.',
  'heic-to-tiff':
    'Konverteringen omdanner dine iPhone-fotos til det professionelle TIFF-format. Ideelt for fotografer, der vil arkivere mobilbilleder i et tabsfrit format og viderebearbejde dem i Photoshop eller Lightroom.',
  'webp-to-jpg':
    'Konvertering fra WebP til JPEG sikrer maksimal kompatibilitet. JPG understøttes af enhver enhed og software – uundværligt for at sende billeder via e-mail eller uploade til platforme, der ikke accepterer WebP.',
  'webp-to-png':
    'Konvertering fra WebP til PNG bevarer gennemsigtigheden og gemmer billedet tabsfrit. PNG er velegnet til videre redigering i grafikprogrammer og til platforme, der ikke understøtter WebP.',
  'webp-to-avif':
    'AVIF tilbyder endnu bedre komprimering end WebP ved sammenlignelig kvalitet. Hvis du vil optimere dine billeder til næste generations webstandarder, er konvertering fra WebP til AVIF et logisk skridt.',
  'webp-to-gif': 'Konverteringen reducerer paletten til 256 farver. Den er velegnet til enkel grafik eller når GIF-formatet er nødvendigt til animationer eller af kompatibilitetsårsager.',
  'webp-to-tiff':
    'Konverteringen omdanner dine WebP-filer til det professionelle TIFF-format. Ideelt til trykproduktion og langtidsarkivering, hvor tabsfri kvalitet og fuld metadataunderstøttelse er påkrævet.',
  'svg-to-jpg':
    'Rasterisering fra SVG til JPG konverterer den skalerbare vektorgrafik til et pixelbillede med fast opløsning. Gennemsigtige områder fyldes med en baggrundsfarve. Velegnet til platforme, der ikke accepterer SVG.',
  'svg-to-png':
    'Rasterisering fra SVG til PNG konverterer vektorbilledet til pixels med fuld bevarelse af gennemsigtighed. PNG er velegnet til sociale medier og beskedapps, der ikke understøtter SVG.',
  'svg-to-webp': 'Konverteringen producerer kompakte pixelbilleder fra dine vektorgrafikker i WebP-format. WebP er ideelt til hjemmesider, hvor små filer og hurtige indlæsningstider er afgørende.',
  'svg-to-avif':
    'AVIF tilbyder den bedste komprimering til rasterisering af SVG-filer. Ideelt til ydelseskritiske hjemmesider, hvor hver kilobyte bidrager til bedre indlæsningstider og Core Web Vitals.',
  'svg-to-gif':
    'Konverteringen omdanner vektorbilledet til et pixelbillede med maksimalt 256 farver. GIF er velegnet til enkle ikoner og animeret grafik, men ikke til komplekse illustrationer med mange farver eller gradienter.',
  'svg-to-tiff': 'Rasterisering fra SVG til TIFF producerer et tabsfrit pixelbillede i højeste kvalitet. Ideelt til professionelt tryk af vektorgrafik, når en fast pixelopløsning er nødvendig.',
  'gif-to-jpg':
    'Ved konvertering fra GIF til JPG mistes animationsframes og gennemsigtighed – kun det første billede konverteres. Du får et universelt kompatibelt fotoformat med fuld farvedybde (16,7 millioner farver).',
  'gif-to-png':
    "Konverteringen bevarer kvaliteten tabsfrit og understøtter binær gennemsigtighed. Ved animerede GIF'er konverteres kun det første frame. PNG er velegnet til videre bearbejdning af GIF-grafik.",
  'gif-to-webp': "WebP understøtter både stillbilleder og animationer med markant bedre komprimering end GIF. Ved statiske GIF'er giver konverteringen mindre filer ved samme eller bedre kvalitet.",
  'gif-to-avif': 'AVIF tilbyder overlegen komprimering sammenlignet med GIF og understøtter millioner af farver i stedet for kun 256. Ideelt til at modernisere ældre GIF-grafik på hjemmesider.',
  'tiff-to-jpg':
    'Konverteringen reducerer de ofte meget store TIFF-filer til kompakte JPEG-størrelser. Gennemsigtighed og laginformation mistes, men du får universelt kompatible filer til web, e-mail og sociale medier.',
  'tiff-to-png': 'Konverteringen bevarer kvaliteten tabsfrit og bevarer gennemsigtighed, hvis den er til stede. PNG-filer er markant mindre end TIFF og understøttes af alle enheder og platforme.',
  'tiff-to-webp': 'WebP reducerer dine TIFF-filers størrelse drastisk – ofte med mere end 90%. Ideelt til at optimere professionelle fotos eller højopløsningsscans til webbrug.',
  'tiff-to-avif': 'AVIF tilbyder den mest effektive komprimering til konvertering af store TIFF-filer. Ideelt til weboptimering af professionel fotografering med minimalt kvalitetstab.',
  'bmp-to-jpg': 'BMP-filer er ukomprimerede og derfor ekstremt store. Konvertering til JPEG reducerer størrelsen drastisk (ofte mere end 95%) og producerer universelt kompatible filer.',
  'bmp-to-png':
    'Konvertering fra BMP til PNG reducerer størrelsen markant gennem tabsfri komprimering. I modsætning til JPEG bevares den fulde kvalitet – ideelt til grafik med skarpe kanter og tekst.',
  'bmp-to-webp': 'WebP reducerer de enorme BMP-filstørrelser med op til 97% ved god visuel kvalitet. Konverteringen moderniserer dine ældre billeder til brug på hjemmesider.',
  'bmp-to-avif':
    'AVIF tilbyder den bedste komprimering til modernisering af ukomprimerede BMP-filer. Størrelsen reduceres med op til 98% – ideelt til migrering af gamle billedarkiver til moderne formater.',
  'bmp-to-gif':
    'Konverteringen reducerer paletten til 256 farver og komprimerer filen markant. Velegnet til enkel grafik fra ældre systemer, men for fotorealistiske BMP-billeder anbefales JPG eller WebP.',
  'bmp-to-tiff':
    'Konvertering fra BMP til TIFF bevarer den fulde kvalitet og tilføjer professionel metadataunderstøttelse. TIFF er bedre egnet end BMP til langtidsarkivering og professionelle tryk-workflows.',
  'avif-to-jpg':
    'Konvertering fra AVIF til JPEG sikrer maksimal kompatibilitet. JPG understøttes af alle enheder – nødvendigt, når modtagere eller platforme endnu ikke understøtter det nyere AVIF-format.',
  'avif-to-png':
    'Konverteringen bevarer kvaliteten tabsfrit i det universelt understøttede PNG-format. PNG er velegnet, hvis du vil bevare gennemsigtighed eller redigere billedet i grafikprogrammer.',
  'avif-to-webp':
    'WebP tilbyder bredere browserunderstøttelse end AVIF med god komprimering. Konverteringen giver mening, når din målplatform understøtter WebP men endnu ikke AVIF – et hyppigt scenarie med ældre browsere og CMS-systemer.',
};

const PRIVACY =
  'Denne konverter kører helt lokalt i din browser – dine filer forlader aldrig din enhed. Ingen uploads, ingen servere, ingen registrering. Fuldt GDPR-kompatibel og gratis uden nogen begrænsninger.';

function extractFormats(f) {
  const m = f.match(/converter-(\w+)-to-(\w+)\.json/);
  return m ? { source: m[1], target: m[2], key: `${m[1]}-to-${m[2]}` } : null;
}
let updated = 0,
  skipped = 0;
const files = fs.readdirSync(TOOLS).filter((f) => f.startsWith('converter-') && f.endsWith('.json'));
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
  const fp = path.join(TOOLS, file);
  const data = JSON.parse(fs.readFileSync(fp, 'utf-8'));
  const block = data.contentBlocks.find((b) => b.type === 'sectionBasic');
  if (!block) {
    skipped++;
    continue;
  }
  block.html = `<p class="text-mid mb-4">${s}</p><p class="text-mid mb-4">${t}</p><p class="text-mid mb-4">${p}</p><p class="text-mid">${PRIVACY}</p>`;
  fs.writeFileSync(fp, JSON.stringify(data, null, 2) + '\n', 'utf-8');
  updated++;
}
console.log(`DA: Updated: ${updated}, Skipped: ${skipped}`);
