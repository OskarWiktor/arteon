/**
 * Expand "Why convert X to Y?" sectionBasic in CS converter files.
 */
const fs = require('fs');
const path = require('path');
const TOOLS = path.join(__dirname, '..', 'data', 'cs', 'tools');

const SOURCE = {
  png: 'Portable Network Graphics (PNG) je bezeztrátový obrazový formát podporující miliony barev a plnou alfa transparenci. PNG je obzvláště vhodný pro loga, ikony, snímky obrazovky a grafiku s ostrými hranami nebo textem.',
  jpg: 'JPEG (JPG) je celosvětově nejrozšířenější formát pro digitální fotografie. Využívá ztrátovou kompresi pro kompaktní soubory, ale nepodporuje transparenci ani bezeztrátové ukládání.',
  heic: 'High Efficiency Image Container (HEIC) je výchozí formát fotografií na zařízeních Apple od iOS 11. HEIC nabízí menší soubory než JPEG při srovnatelné kvalitě, ale není nativně podporován mimo ekosystém Apple – ani ve Windows, Androidu nebo na mnoha webových platformách.',
  webp: 'WebP je moderní obrazový formát od Googlu podporující jak ztrátovou, tak bezeztrátovou kompresi. Vytváří výrazně menší soubory než PNG a JPEG při srovnatelné vizuální kvalitě a je podporován všemi aktuálními prohlížeči.',
  svg: 'Scalable Vector Graphics (SVG) je vektorový formát založený na XML. SVG soubory jsou nezávislé na rozlišení a zůstávají ostré v jakékoli velikosti – ideální pro loga, ikony a ilustrace.',
  gif: 'Graphics Interchange Format (GIF) podporuje animace a paletu maximálně 256 barev. GIF je široce používán pro animovaný obsah na sociálních sítích, ale omezení barev ho činí nevhodným pro fotorealistické snímky.',
  bmp: 'Bitmap (BMP) je starší obrazový formát Windows ukládající pixelová data bez komprese. BMP soubory jsou proto extrémně velké a nevhodné pro moderní použití na webu nebo mobilních zařízeních.',
  tiff: 'Tagged Image File Format (TIFF) je průmyslový standard pro profesionální fotografii, tisk a archivaci. TIFF ukládá obrázky bezeztrátově s plnou barevnou hloubkou, vrstvami a metadaty.',
  avif: 'AV1 Image File Format (AVIF) je obrazový formát nové generace založený na video kodeku AV1. AVIF nabízí aktuálně nejlepší dostupnou kompresi – soubory až o 50% menší než WebP při srovnatelné vizuální kvalitě.',
};

const TARGET = {
  webp: 'WebP zmenšuje velikost souboru o 30–35% oproti starším formátům bez viditelné ztráty kvality. Všechny moderní prohlížeče (Chrome, Firefox, Safari 14+, Edge) plně podporují WebP. Pro webové stránky to znamená rychlejší načítání a lepší umístění v Google.',
  avif: 'AVIF nabízí nejefektivnější kompresi ze všech aktuálních obrazových formátů a dokáže zmenšit velikost až o 50% oproti JPEG. Chrome, Firefox a Safari 16+ podporují AVIF. Je to optimální volba pro výkonnostně kritické webové projekty.',
  jpg: 'JPEG je nejuniverzálnější obrazový formát – kompatibilní s každým zařízením, prohlížečem a platformou. Převod do JPG zajistí, že vaše obrázky budou bez problémů zobrazeny kdekoli: od e-mailových příloh po příspěvky na sociálních sítích.',
  png: 'PNG zachovává plnou kvalitu obrazu bez kompresních artefaktů a podporuje plnou alfa transparenci. Tento bezeztrátový formát je ideální pro grafiku určenou k dalšímu zpracování a pro obrázky, kde musí zůstat zachovány průhledné oblasti.',
  gif: 'GIF je standardní formát pro krátké animace, memy a jednoduchou grafiku s omezenou paletou barev. S univerzální podporou v prohlížečích je GIF obzvláště vhodný pro animovaný obsah na sociálních sítích a v komunikátorech.',
  tiff: 'TIFF zachovává plnou kvalitu obrazu bez jakékoli ztráty dat a podporuje vrstvy a rozsáhlá metadata. Jako průmyslový standard pro tisk a archivaci je TIFF vhodný pro profesionální fotografy a tiskárny.',
};

const PAIR = {
  'png-to-webp':
    'WebP podporuje alfa transparenci stejně jako PNG – všechny průhledné oblasti vašeho obrázku zůstanou plně zachovány. Můžete si vybrat mezi ztrátovou a bezeztrátovou kompresí pro optimální poměr velikosti a kvality.',
  'png-to-jpg':
    'Při převodu PNG na JPG se ztrácí transparence – průhledné oblasti se vyplní barvou pozadí. Na druhou stranu získáte výrazně menší soubory, vhodnější pro fotografie a webový obsah bez transparence.',
  'png-to-avif': 'AVIF nabízí ještě lepší kompresi než WebP a dokáže zmenšit PNG obrázky až o 50%. Alfa transparence je plně podporována. Starší prohlížeče nemusí AVIF ještě podporovat.',
  'png-to-gif':
    'Převod redukuje paletu na maximálně 256 barev. Výsledek je vhodný pro jednoduchou grafiku, ikony a loga. Transparence je podporována pouze binárně (viditelná nebo neviditelná), nikoli postupně.',
  'png-to-tiff':
    'Převod zachovává plnou kvalitu a transparenci PNG originálu v TIFF formátu. TIFF je vhodný pro další zpracování v Photoshopu nebo profesionální tisk. TIFF soubory jsou větší než PNG.',
  'jpg-to-webp': 'WebP dokáže zmenšit vaše JPEG fotografie o 25–35% bez viditelné ztráty kvality. Jelikož JPEG nepodporuje transparenci, při této konverzi se neztrácejí žádné obrazové informace.',
  'jpg-to-png':
    'Převod JPG na PNG převede obrázek do bezeztrátového formátu. Detaily již ztracené JPEG kompresí však nelze obnovit. PNG je vhodné, pokud chcete obrázek dále upravovat bez dalších ztrát kvality.',
  'jpg-to-avif':
    'AVIF dosahuje až o 50% lepší komprese než JPEG při srovnatelné vizuální kvalitě. Tento formát nové generace je ideální pro výkonnostně kritické webové stránky a je podporován Chrome, Firefox a Safari 16+.',
  'jpg-to-gif':
    'Paleta barev se redukuje na 256, což u fotografií vede k viditelným ztrátám kvality. Tento převod je vhodný hlavně pro jednoduchou grafiku nebo když je GIF formát vyžadován z důvodu kompatibility.',
  'jpg-to-tiff':
    'Převod zachovává aktuální kvalitu vašeho JPEG a ukládá ji bezeztrátově ve formátu TIFF. Detaily ztracené JPEG kompresí nelze obnovit, ale TIFF umožňuje další úpravy bez dalších ztrát.',
  'heic-to-jpg':
    'Převod HEIC na JPG transformuje proprietární Apple formát do univerzálně kompatibilního JPEG. Transparence a HDR informace se ztrácí, ale kvalita obrazu zůstává při nastavení od 85% prakticky identická s originálem.',
  'heic-to-png':
    'Převod zachovává plnou kvalitu vašeho HEIC originálu bezeztrátově ve formátu PNG. PNG je podporován všemi zařízeními a je vhodný zejména pokud chcete obrázek dále upravovat nebo zachovat transparenci.',
  'heic-to-webp':
    'WebP nabízí vynikající rovnováhu mezi velikostí souboru a kvalitou. Převod HEIC na WebP vytváří kompaktní soubory podporované všemi moderními prohlížeči – ideální pro webové stránky.',
  'heic-to-avif': 'AVIF nabízí podobnou efektivitu komprese jako HEIC, ale jako otevřený formát má mnohem širší podporu. Převod umožňuje využít moderní kompresi bez omezení ekosystému Apple.',
  'heic-to-tiff':
    'Převod transformuje vaše iPhone fotografie do profesionálního TIFF formátu. Ideální pro fotografy, kteří chtějí archivovat mobilní snímky v bezeztrátovém formátu a dále je upravovat v Photoshopu nebo Lightroomu.',
  'webp-to-jpg':
    'Převod WebP na JPEG zajišťuje maximální kompatibilitu. JPG je podporován každým zařízením a softwarem – nezbytný pro odesílání obrázků e-mailem nebo nahrávání na platformy nepřijímající WebP.',
  'webp-to-png': 'Převod WebP na PNG zachovává transparenci obrázku a ukládá ho bezeztrátově. PNG je vhodný pro další úpravy v grafických programech a pro platformy nepodporující WebP.',
  'webp-to-avif': 'AVIF nabízí ještě lepší kompresi než WebP při srovnatelné kvalitě. Pokud chcete optimalizovat obrázky pro webové standardy nové generace, převod WebP na AVIF je logický krok.',
  'webp-to-gif': 'Převod redukuje paletu na 256 barev. Je vhodný pro jednoduchou grafiku nebo když je GIF formát potřeba pro animace či z důvodu kompatibility.',
  'webp-to-tiff':
    'Převod transformuje vaše WebP soubory do profesionálního TIFF formátu. Ideální pro tiskovou produkci a dlouhodobou archivaci, kde je vyžadována bezeztrátová kvalita a plná podpora metadat.',
  'svg-to-jpg':
    'Rasterizace SVG na JPG převádí škálovatelnou vektorovou grafiku na pixelový obrázek s pevným rozlišením. Průhledné oblasti se vyplní barvou pozadí. Vhodné pro platformy nepřijímající SVG.',
  'svg-to-png': 'Rasterizace SVG na PNG převádí vektorový obrázek na pixelový se zachováním transparence. PNG je vhodný pro sociální sítě a komunikátory nepodporující SVG.',
  'svg-to-webp': 'Převod vytváří kompaktní pixelové obrázky z vektorové grafiky ve formátu WebP. WebP je ideální pro webové stránky, kde jsou rozhodující malé soubory a rychlé načítání.',
  'svg-to-avif': 'AVIF nabízí nejlepší kompresi pro rasterizaci SVG souborů. Ideální pro výkonnostně kritické weby, kde každý kilobajt přispívá k lepšímu načítání a Core Web Vitals.',
  'svg-to-gif': 'Převod transformuje vektorový obrázek na pixelový s maximálně 256 barvami. GIF je vhodný pro jednoduché ikony a animované grafiky, nikoli pro složité ilustrace s barevnými přechody.',
  'svg-to-tiff': 'Rasterizace SVG na TIFF vytváří bezeztrátový pixelový obrázek v nejvyšší kvalitě. Ideální pro profesionální tisk vektorové grafiky, když je potřeba pevné pixelové rozlišení.',
  'gif-to-jpg':
    'Při převodu GIF na JPG se ztrácí animační snímky a transparence – převede se pouze první obrázek. Získáte univerzálně kompatibilní formát s plnou barevnou hloubkou (16,7 milionu barev).',
  'gif-to-png': 'Převod zachovává kvalitu bezeztrátově a podporuje binární transparenci. U animovaných GIF se převede pouze první snímek. PNG je vhodný pro další zpracování GIF grafiky.',
  'gif-to-webp': 'WebP podporuje jak statické obrázky, tak animace s výrazně lepší kompresí než GIF. U statických GIF převod vytváří menší soubory při stejné nebo lepší kvalitě.',
  'gif-to-avif': 'AVIF nabízí nadřazenou kompresi oproti GIF a podporuje miliony barev místo pouhých 256. Ideální pro modernizaci starších GIF grafik na webových stránkách.',
  'tiff-to-jpg':
    'Převod redukuje často velmi velké TIFF soubory na kompaktní JPEG. Transparence a informace o vrstvách se ztrácí, ale získáte univerzálně kompatibilní soubory pro web, e-mail a sociální sítě.',
  'tiff-to-png': 'Převod zachovává kvalitu bezeztrátově a uchovává transparenci, pokud existuje. PNG soubory jsou výrazně menší než TIFF a jsou podporovány všemi zařízeními a platformami.',
  'tiff-to-webp': 'WebP drasticky zmenšuje TIFF soubory – často o více než 90%. Ideální pro optimalizaci profesionálních fotografií nebo vysokorozlišovacích skenů pro webové použití.',
  'tiff-to-avif': 'AVIF nabízí nejefektivnější kompresi pro převod velkých TIFF souborů. Ideální pro webovou optimalizaci profesionální fotografie s minimální ztrátou kvality.',
  'bmp-to-jpg': 'BMP soubory jsou nekomprimované a proto extrémně velké. Převod na JPEG drasticky zmenšuje velikost (často o více než 95%) a vytváří univerzálně kompatibilní soubory.',
  'bmp-to-png': 'Převod BMP na PNG výrazně zmenšuje velikost bezeztrátovou kompresí. Na rozdíl od JPEG zůstává plná kvalita zachována – ideální pro grafiku s ostrými hranami a textem.',
  'bmp-to-webp': 'WebP zmenšuje obrovské BMP soubory až o 97% s dobrou vizuální kvalitou. Převod modernizuje vaše starší obrázky pro použití na webových stránkách.',
  'bmp-to-avif': 'AVIF nabízí nejlepší kompresi pro modernizaci nekomprimovaných BMP souborů. Velikost se sníží až o 98% – ideální pro migraci starých obrazových fondů do moderních formátů.',
  'bmp-to-gif': 'Převod redukuje paletu na 256 barev a soubor výrazně komprimuje. Vhodné pro jednoduchou grafiku ze starších systémů, ale pro fotorealistické BMP se doporučuje JPG nebo WebP.',
  'bmp-to-tiff': 'Převod BMP na TIFF zachovává plnou kvalitu a přidává profesionální podporu metadat. TIFF je vhodnější než BMP pro dlouhodobou archivaci a profesionální tiskové workflow.',
  'avif-to-jpg': 'Převod AVIF na JPEG zajišťuje maximální kompatibilitu. JPG je podporován všemi zařízeními – nezbytný, když příjemci nebo platformy ještě nepodporují novější formát AVIF.',
  'avif-to-png': 'Převod zachovává kvalitu bezeztrátově v univerzálně podporovaném PNG formátu. PNG je vhodný pokud chcete zachovat transparenci nebo obrázek dále upravovat v grafických programech.',
  'avif-to-webp':
    'WebP nabízí širší podporu prohlížečů než AVIF s dobrou kompresí. Převod má smysl, když vaše cílová platforma podporuje WebP, ale ještě ne AVIF – častý scénář u starších prohlížečů a CMS.',
};

const PRIVACY =
  'Tento převodník pracuje zcela lokálně ve vašem prohlížeči – soubory nikdy neopustí vaše zařízení. Žádné nahrávání, žádné servery, žádná registrace. Plně v souladu s GDPR a zdarma bez jakýchkoli omezení.';

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
  const filePath = path.join(TOOLS, file);
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
console.log(`CS: Updated: ${updated}, Skipped: ${skipped}`);
