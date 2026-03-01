/**
 * Expand "Why convert X to Y?" sectionBasic in NO converter files.
 */
const fs = require('fs');
const path = require('path');
const TOOLS = path.join(__dirname, '..', 'data', 'no', 'tools');

const SOURCE = {
  png: 'Portable Network Graphics (PNG) er et tapsfritt bildeformat som støtter millioner av farger og full alfa-gjennomsiktighet. PNG er spesielt egnet for logoer, ikoner, skjermbilder og grafikk med skarpe kanter eller tekst.',
  jpg: 'JPEG (JPG) er verdens mest brukte bildeformat for digitale fotografier. Det bruker tapskomprimering for kompakte filer, men støtter verken gjennomsiktighet eller tapsfri lagring.',
  heic: 'High Efficiency Image Container (HEIC) er standardformatet for bilder på Apple-enheter siden iOS 11. HEIC gir mindre filer enn JPEG ved sammenlignbar kvalitet, men støttes ikke nativt utenfor Apples økosystem – verken på Windows, Android eller mange nettplattformer.',
  webp: 'WebP er et moderne bildeformat utviklet av Google som støtter både tapskomprimering og tapsfri komprimering. Det produserer vesentlig mindre filer enn PNG og JPEG ved sammenlignbar visuell kvalitet og støttes av alle nåværende nettlesere.',
  svg: 'Scalable Vector Graphics (SVG) er et XML-basert vektorformat for todimensjonal grafikk. SVG-filer er oppløsningsuavhengige og forblir skarpe i alle størrelser – ideelle for logoer, ikoner og illustrasjoner.',
  gif: 'Graphics Interchange Format (GIF) støtter animasjoner og en palett på maksimalt 256 farger. GIF brukes mye til animert innhold i sosiale medier, men fargebegrensningen gjør det uegnet for fotorealistiske bilder.',
  bmp: 'Bitmap (BMP) er et eldre Windows-bildeformat som lagrer pikseldata uten komprimering. BMP-filer er derfor ekstremt store og uegnet for moderne bruk på nett eller mobile enheter.',
  tiff: 'Tagged Image File Format (TIFF) er bransjestandarden for profesjonell fotografering, trykk og arkivering. TIFF lagrer bilder tapsfritt med full fargedybde, lag og metadata.',
  avif: 'AV1 Image File Format (AVIF) er et neste generasjons bildeformat basert på AV1-videokodeken. AVIF tilbyr den beste tilgjengelige komprimeringen – filer opptil 50% mindre enn WebP ved sammenlignbar visuell kvalitet.',
};

const TARGET = {
  webp: 'WebP reduserer filstørrelsen med 30–35% sammenlignet med eldre formater uten synlig kvalitetstap. Alle moderne nettlesere (Chrome, Firefox, Safari 14+, Edge) støtter WebP fullt ut. For nettsider betyr dette raskere lastetider og bedre Google-plassering.',
  avif: 'AVIF tilbyr den mest effektive komprimeringen av alle nåværende bildeformater og kan redusere filstørrelsen opptil 50% sammenlignet med JPEG. Chrome, Firefox og Safari 16+ støtter AVIF. Det er det optimale valget for ytelseskritiske nettprosjekter.',
  jpg: 'JPEG er det mest universelle bildeformatet – kompatibelt med alle enheter, nettlesere og plattformer. Konvertering til JPG sikrer at bildene dine vises problemfritt overalt: fra e-postvedlegg til innlegg i sosiale medier.',
  png: 'PNG bevarer full bildekvalitet uten komprimeringsartefakter og støtter full alfa-gjennomsiktighet. Dette tapsfrie formatet er ideelt for grafikk som skal viderebearbeides og bilder der gjennomsiktige områder må bevares.',
  gif: 'GIF er standardformatet for korte animasjoner, memes og enkel grafikk med begrenset fargepalett. Med universell nettleserstøtte er GIF spesielt egnet for animert innhold i sosiale medier og meldingsapper.',
  tiff: 'TIFF bevarer full bildekvalitet uten noe datatap og støtter lag og omfattende metadata. Som bransjestandard for trykk og arkivering er TIFF egnet for profesjonelle fotografer og trykkerier.',
};

const PAIR = {
  'png-to-webp':
    'WebP støtter alfa-gjennomsiktighet akkurat som PNG – alle gjennomsiktige områder bevares fullstendig. Du kan velge mellom tapskomprimering og tapsfri komprimering for å finne den optimale balansen mellom filstørrelse og kvalitet.',
  'png-to-jpg':
    'Ved konvertering fra PNG til JPG mistes gjennomsiktigheten – gjennomsiktige områder fylles med en bakgrunnsfarge. Til gjengjeld får du vesentlig mindre filer, egnet for fotografier og nettinnhold uten gjennomsiktighet.',
  'png-to-avif':
    'AVIF tilbyr enda bedre komprimering enn WebP og kan redusere PNG-bildenes størrelse opptil 50%. Alfa-gjennomsiktighet støttes fullt ut. Eldre nettlesere støtter kanskje ikke AVIF ennå.',
  'png-to-gif':
    'Konverteringen reduserer paletten til maksimalt 256 farger. Resultatet er egnet for enkel grafikk, ikoner og logoer. Gjennomsiktighet støttes kun binært (synlig eller usynlig), ikke gradvis.',
  'png-to-tiff':
    'Konverteringen bevarer full kvalitet og gjennomsiktighet fra PNG-originalen i TIFF-format. TIFF er egnet for videre behandling i Photoshop eller profesjonelt trykk. TIFF-filer er større enn PNG.',
  'jpg-to-webp': 'WebP kan redusere JPEG-fotografiene dine med 25–35% uten synlig kvalitetstap. Siden JPEG ikke støtter gjennomsiktighet, mistes ingen bildeinformasjon ved denne konverteringen.',
  'jpg-to-png':
    'Konvertering fra JPG til PNG omdanner bildet til et tapsfritt format. Detaljer som allerede er tapt gjennom JPEG-komprimering kan imidlertid ikke gjenopprettes. PNG er egnet hvis du vil redigere bildet uten ytterligere kvalitetstap.',
  'jpg-to-avif':
    'AVIF oppnår opptil 50% bedre komprimering enn JPEG ved sammenlignbar visuell kvalitet. Dette neste generasjons formatet er ideelt for ytelseskritiske nettsider og støttes av Chrome, Firefox og Safari 16+.',
  'jpg-to-gif':
    'Fargepaletten reduseres til 256, noe som ved fotografier fører til synlige kvalitetstap. Denne konverteringen er primært egnet for enkel grafikk eller når GIF-formatet kreves av kompatibilitetsårsaker.',
  'jpg-to-tiff':
    'Konverteringen bevarer den nåværende kvaliteten til JPEG-en din og lagrer den tapsfritt i TIFF-format. Detaljer tapt gjennom JPEG-komprimering kan ikke gjenopprettes, men TIFF muliggjør videre redigering uten ytterligere tap.',
  'heic-to-jpg':
    'Konvertering fra HEIC til JPG omdanner Apples proprietære format til det universelt kompatible JPEG-formatet. Eventuell gjennomsiktighet og HDR-informasjon mistes, men bildekvaliteten forblir praktisk talt identisk med originalen ved innstillinger fra 85%.',
  'heic-to-png':
    'Konverteringen bevarer full kvalitet fra HEIC-originalen tapsfritt i PNG-format. PNG støttes av alle enheter og er spesielt egnet hvis du vil redigere bildet eller bevare gjennomsiktigheten.',
  'heic-to-webp':
    'WebP tilbyr en utmerket balanse mellom filstørrelse og kvalitet. Konvertering fra HEIC til WebP produserer kompakte filer støttet av alle moderne nettlesere – ideelt for nettsider.',
  'heic-to-avif':
    'AVIF tilbyr lignende komprimeringseffektivitet som HEIC, men støttes som åpent format langt bredere. Konverteringen muliggjør moderne komprimering uten begrensningene i Apples økosystem.',
  'heic-to-tiff':
    'Konverteringen omdanner iPhone-fotografiene dine til det profesjonelle TIFF-formatet. Ideelt for fotografer som vil arkivere mobilbilder i et tapsfritt format og viderebearbeide dem i Photoshop eller Lightroom.',
  'webp-to-jpg':
    'Konvertering fra WebP til JPEG sikrer maksimal kompatibilitet. JPG støttes av alle enheter og all programvare – uunnværlig for å sende bilder via e-post eller laste opp til plattformer som ikke aksepterer WebP.',
  'webp-to-png':
    'Konvertering fra WebP til PNG bevarer gjennomsiktigheten og lagrer bildet tapsfritt. PNG er egnet for videre redigering i grafikkprogrammer og for plattformer som ikke støtter WebP.',
  'webp-to-avif':
    'AVIF tilbyr enda bedre komprimering enn WebP ved sammenlignbar kvalitet. Hvis du vil optimalisere bildene dine for neste generasjons nettstandarder, er konvertering fra WebP til AVIF et logisk steg.',
  'webp-to-gif': 'Konverteringen reduserer paletten til 256 farger. Den er egnet for enkel grafikk eller når GIF-formatet er nødvendig for animasjoner eller kompatibilitetsårsaker.',
  'webp-to-tiff':
    'Konverteringen omdanner WebP-filene dine til det profesjonelle TIFF-formatet. Ideelt for trykkproduksjon og langtidsarkivering der tapsfri kvalitet og full metadatastøtte er påkrevd.',
  'svg-to-jpg':
    'Rasterisering fra SVG til JPG konverterer den skalerbare vektorgrafikken til et pikselbilde med fast oppløsning. Gjennomsiktige områder fylles med en bakgrunnsfarge. Egnet for plattformer som ikke aksepterer SVG.',
  'svg-to-png': 'Rasterisering fra SVG til PNG konverterer vektorbildet til piksler med full bevaring av gjennomsiktighet. PNG er egnet for sosiale medier og meldingsapper som ikke støtter SVG.',
  'svg-to-webp': 'Konverteringen produserer kompakte pikselbilder fra vektorgrafikken din i WebP-format. WebP er ideelt for nettsider der små filer og raske lastetider er avgjørende.',
  'svg-to-avif': 'AVIF tilbyr den beste komprimeringen for rasterisering av SVG-filer. Ideelt for ytelseskritiske nettsider der hver kilobyte bidrar til bedre lastetider og Core Web Vitals.',
  'svg-to-gif':
    'Konverteringen omdanner vektorbildet til et pikselbilde med maksimalt 256 farger. GIF er egnet for enkle ikoner og animert grafikk, men ikke for komplekse illustrasjoner med fargegradienter.',
  'svg-to-tiff': 'Rasterisering fra SVG til TIFF produserer et tapsfritt pikselbilde i høyeste kvalitet. Ideelt for profesjonelt trykk av vektorgrafikk når en fast pikseloppløsning er nødvendig.',
  'gif-to-jpg':
    'Ved konvertering fra GIF til JPG mistes animasjonsrammer og gjennomsiktighet – kun det første bildet konverteres. Du får et universelt kompatibelt fotoformat med full fargedybde (16,7 millioner farger).',
  'gif-to-png':
    'Konverteringen bevarer kvaliteten tapsfritt og støtter binær gjennomsiktighet. Ved animerte GIF-er konverteres kun den første rammen. PNG er egnet for videre bearbeiding av GIF-grafikk.',
  'gif-to-webp': 'WebP støtter både stillbilder og animasjoner med vesentlig bedre komprimering enn GIF. Ved statiske GIF-er gir konverteringen mindre filer ved samme eller bedre kvalitet.',
  'gif-to-avif': 'AVIF tilbyr overlegen komprimering sammenlignet med GIF og støtter millioner av farger i stedet for kun 256. Ideelt for å modernisere eldre GIF-grafikk på nettsider.',
  'tiff-to-jpg':
    'Konverteringen reduserer de ofte svært store TIFF-filene til kompakte JPEG-størrelser. Gjennomsiktighet og laginformasjon mistes, men du får universelt kompatible filer for nett, e-post og sosiale medier.',
  'tiff-to-png': 'Konverteringen bevarer kvaliteten tapsfritt og bevarer gjennomsiktighet hvis den er til stede. PNG-filer er vesentlig mindre enn TIFF og støttes av alle enheter og plattformer.',
  'tiff-to-webp': 'WebP reduserer TIFF-filenes størrelse drastisk – ofte med mer enn 90%. Ideelt for å optimalisere profesjonelle fotografier eller høyoppløselige skanninger for nettbruk.',
  'tiff-to-avif': 'AVIF tilbyr den mest effektive komprimeringen for konvertering av store TIFF-filer. Ideelt for nettoptimalisering av profesjonell fotografering med minimalt kvalitetstap.',
  'bmp-to-jpg': 'BMP-filer er ukomprimerte og derfor ekstremt store. Konvertering til JPEG reduserer størrelsen drastisk (ofte mer enn 95%) og produserer universelt kompatible filer.',
  'bmp-to-png':
    'Konvertering fra BMP til PNG reduserer størrelsen vesentlig gjennom tapsfri komprimering. I motsetning til JPEG bevares full kvalitet – ideelt for grafikk med skarpe kanter og tekst.',
  'bmp-to-webp': 'WebP reduserer de enorme BMP-filstørrelsene med opptil 97% med god visuell kvalitet. Konverteringen moderniserer eldre bilder for bruk på nettsider.',
  'bmp-to-avif':
    'AVIF tilbyr den beste komprimeringen for modernisering av ukomprimerte BMP-filer. Størrelsen reduseres med opptil 98% – ideelt for migrering av gamle bildearkiver til moderne formater.',
  'bmp-to-gif':
    'Konverteringen reduserer paletten til 256 farger og komprimerer filen vesentlig. Egnet for enkel grafikk fra eldre systemer, men for fotorealistiske BMP-bilder anbefales JPG eller WebP.',
  'bmp-to-tiff':
    'Konvertering fra BMP til TIFF bevarer full kvalitet og legger til profesjonell metadatastøtte. TIFF er bedre egnet enn BMP for langtidsarkivering og profesjonelle trykkarbeidsflyter.',
  'avif-to-jpg': 'Konvertering fra AVIF til JPEG sikrer maksimal kompatibilitet. JPG støttes av alle enheter – nødvendig når mottakere eller plattformer ennå ikke støtter det nyere AVIF-formatet.',
  'avif-to-png': 'Konverteringen bevarer kvaliteten tapsfritt i det universelt støttede PNG-formatet. PNG er egnet hvis du vil bevare gjennomsiktighet eller redigere bildet i grafikkprogrammer.',
  'avif-to-webp':
    'WebP tilbyr bredere nettleserstøtte enn AVIF med god komprimering. Konverteringen er fornuftig når målplattformen støtter WebP men ennå ikke AVIF – et hyppig scenario med eldre nettlesere og CMS-systemer.',
};

const PRIVACY =
  'Denne konverteren kjører helt lokalt i nettleseren din – filene dine forlater aldri enheten din. Ingen opplastinger, ingen servere, ingen registrering. Fullt GDPR-kompatibel og gratis uten noen begrensninger.';

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
console.log(`NO: Updated: ${updated}, Skipped: ${skipped}`);
