/**
 * Expand "Why convert X to Y?" sectionBasic in HU converter files.
 */
const fs = require('fs');
const path = require('path');
const TOOLS = path.join(__dirname, '..', 'data', 'hu', 'tools');

const SOURCE = {
  png: 'A Portable Network Graphics (PNG) egy veszteségmentes képformátum, amely több millió színt és teljes alfa-átlátszóságot támogat. A PNG különösen alkalmas logókhoz, ikonokhoz, képernyőképekhez és éles szélű vagy szöveges grafikákhoz.',
  jpg: 'A JPEG (JPG) a világ legelterjedtebb képformátuma digitális fényképekhez. Veszteséges tömörítést használ kompakt fájlokhoz, de nem támogatja az átlátszóságot vagy a veszteségmentes tárolást.',
  heic: 'A High Efficiency Image Container (HEIC) az Apple eszközök alapértelmezett fényképformátuma az iOS 11 óta. A HEIC kisebb fájlokat kínál, mint a JPEG hasonló minőségben, de az Apple ökoszisztémán kívül – Windowson, Androidon és sok webes platformon – nem támogatott natívan.',
  webp: 'A WebP a Google által fejlesztett modern képformátum, amely veszteséges és veszteségmentes tömörítést is támogat. Jelentősen kisebb fájlokat eredményez, mint a PNG és JPEG hasonló vizuális minőségben, és minden jelenlegi böngésző támogatja.',
  svg: 'A Scalable Vector Graphics (SVG) egy XML-alapú vektorformátum kétdimenziós grafikákhoz. Az SVG fájlok felbontás-függetlenek és bármilyen méretben élesek maradnak – ideálisak logókhoz, ikonokhoz és illusztrációkhoz.',
  gif: 'A Graphics Interchange Format (GIF) animációkat és legfeljebb 256 színű palettát támogat. A GIF széles körben használt animált tartalmakhoz a közösségi médiában, de a színkorlátozás miatt nem alkalmas fotórealisztikus képekhez.',
  bmp: 'A Bitmap (BMP) egy régebbi Windows képformátum, amely tömörítés nélkül tárolja a pixeladatokat. A BMP fájlok ezért rendkívül nagyok és alkalmatlanok modern webes vagy mobilhasználatra.',
  tiff: 'A Tagged Image File Format (TIFF) az iparági szabvány a professzionális fotózáshoz, nyomtatáshoz és archiváláshoz. A TIFF veszteségmentesen tárolja a képeket teljes színmélységgel, rétegekkel és metaadatokkal.',
  avif: 'Az AV1 Image File Format (AVIF) egy új generációs képformátum az AV1 videokodek alapján. Az AVIF jelenleg a legjobb elérhető tömörítést kínálja – akár 50%-kal kisebb fájlok, mint a WebP hasonló vizuális minőségben.',
};

const TARGET = {
  webp: 'A WebP 30–35%-kal csökkenti a fájlméretet a régebbi formátumokhoz képest, látható minőségromlás nélkül. Minden modern böngésző (Chrome, Firefox, Safari 14+, Edge) teljes mértékben támogatja a WebP-t. Webhelyek számára ez gyorsabb betöltési időt és jobb Google-helyezést jelent.',
  avif: 'Az AVIF a leghatékonyabb tömörítést kínálja az összes jelenlegi képformátum közül, akár 50%-kal csökkentve a fájlméretet a JPEG-hez képest. A Chrome, Firefox és Safari 16+ támogatja az AVIF-ot. Optimális választás teljesítménykritikus webprojektekhez.',
  jpg: 'A JPEG a leguniverzálisabb képformátum – kompatibilis minden eszközzel, böngészővel és platformmal. A JPG-re konvertálás biztosítja, hogy képei bárhol problémamentesen megjelenjenek: e-mail mellékletektől a közösségi média bejegyzésekig.',
  png: 'A PNG megőrzi a teljes képminőséget tömörítési műtermékek nélkül, és támogatja a teljes alfa-átlátszóságot. Ez a veszteségmentes formátum ideális a további szerkesztésre szánt grafikákhoz és az átlátszó területeket megőrzendő képekhez.',
  gif: 'A GIF a rövid animációk, mémek és egyszerű, korlátozott színpalettájú grafikák standard formátuma. Univerzális böngészőtámogatással a GIF különösen alkalmas animált tartalmakhoz a közösségi médiában és üzenetküldő alkalmazásokban.',
  tiff: 'A TIFF megőrzi a teljes képminőséget bármilyen adatveszteség nélkül, és támogatja a rétegeket és kiterjedt metaadatokat. Iparági szabványként a nyomtatáshoz és archiváláshoz a TIFF professzionális fotósok és nyomdák számára alkalmas.',
};

const PAIR = {
  'png-to-webp':
    'A WebP pontosan úgy támogatja az alfa-átlátszóságot, mint a PNG – a kép összes átlátszó területe teljes mértékben megmarad. Választhat veszteséges és veszteségmentes tömörítés között az optimális fájlméret-minőség egyensúly eléréséhez.',
  'png-to-jpg':
    'A PNG-ből JPG-be konvertálásnál az átlátszóság elveszik – az átlátszó területek háttérszínnel töltődnek ki. Cserébe jelentősen kisebb fájlokat kap, amelyek jobban megfelelnek fényképeknek és átlátszóságot nem igénylő webes tartalomnak.',
  'png-to-avif':
    'Az AVIF még jobb tömörítést kínál, mint a WebP, és akár 50%-kal csökkentheti a PNG-képek méretét. Az alfa-átlátszóság teljes mértékben támogatott. A régebbi böngészők esetleg még nem támogatják az AVIF-ot.',
  'png-to-gif':
    'A konvertálás legfeljebb 256 színre csökkenti a palettát. Az eredmény egyszerű grafikákhoz, ikonokhoz és logókhoz alkalmas. Az átlátszóság csak binárisan támogatott (látható vagy láthatatlan), nem fokozatosan.',
  'png-to-tiff':
    'A konvertálás megőrzi a PNG eredeti teljes minőségét és átlátszóságát TIFF formátumban. A TIFF alkalmas Photoshop-ban történő további feldolgozásra vagy professzionális nyomtatásra. A TIFF fájlok nagyobbak a PNG-nél.',
  'jpg-to-webp': 'A WebP 25–35%-kal csökkentheti JPEG fényképei méretét látható minőségromlás nélkül. Mivel a JPEG nem támogatja az átlátszóságot, ennél a konvertálásnál nem vész el képinformáció.',
  'jpg-to-png':
    'A JPG-ből PNG-be konvertálás veszteségmentes formátumba alakítja a képet. A JPEG-tömörítés során már elveszett részletek azonban nem állíthatók helyre. A PNG alkalmas, ha a képet további minőségromlás nélkül szeretné szerkeszteni.',
  'jpg-to-avif':
    'Az AVIF akár 50%-kal jobb tömörítést ér el, mint a JPEG hasonló vizuális minőségben. Ez az új generációs formátum ideális teljesítménykritikus weboldalakhoz, és a Chrome, Firefox és Safari 16+ támogatja.',
  'jpg-to-gif':
    'A színpaletta 256-ra csökken, ami fényképeknél látható minőségromlást okoz. Ez a konvertálás főként egyszerű grafikákhoz alkalmas, vagy amikor a GIF formátum kompatibilitási okokból szükséges.',
  'jpg-to-tiff':
    'A konvertálás megőrzi a JPEG jelenlegi minőségét és veszteségmentesen tárolja TIFF formátumban. A JPEG-tömörítés során elveszett részletek nem állíthatók helyre, de a TIFF további veszteség nélküli szerkesztést tesz lehetővé.',
  'heic-to-jpg':
    'A HEIC-ből JPG-be konvertálás az Apple saját formátumát univerzálisan kompatibilis JPEG-re alakítja. Az átlátszóság és HDR-információk elvesznek, de a képminőség 85%-os beállítástól gyakorlatilag azonos marad az eredetivel.',
  'heic-to-png':
    'A konvertálás veszteségmentesen megőrzi a HEIC eredeti teljes minőségét PNG formátumban. A PNG minden eszköz által támogatott, és különösen alkalmas, ha a képet szerkeszteni vagy az átlátszóságot megőrizni szeretné.',
  'heic-to-webp':
    'A WebP kiváló egyensúlyt kínál fájlméret és minőség között. A HEIC-ből WebP-be konvertálás kompakt fájlokat eredményez, amelyeket minden modern böngésző támogat – ideális weboldalakhoz.',
  'heic-to-avif':
    'Az AVIF hasonló tömörítési hatékonyságot kínál, mint a HEIC, de nyílt formátumként sokkal szélesebb körben támogatott. A konvertálás modern tömörítést tesz lehetővé az Apple ökoszisztéma korlátozásai nélkül.',
  'heic-to-tiff':
    'A konvertálás iPhone-fényképeit professzionális TIFF formátumba alakítja. Ideális fotósok számára, akik mobilfelvételeiket veszteségmentes formátumban szeretnék archiválni és Photoshopban vagy Lightroomban szerkeszteni.',
  'webp-to-jpg':
    'A WebP-ből JPEG-be konvertálás maximális kompatibilitást biztosít. A JPG-t minden eszköz és szoftver támogatja – nélkülözhetetlen képek e-mailben való küldéséhez vagy WebP-t nem fogadó platformokra feltöltéséhez.',
  'webp-to-png':
    'A WebP-ből PNG-be konvertálás megőrzi a kép átlátszóságát és veszteségmentesen tárolja. A PNG alkalmas grafikai programokban történő további szerkesztésre és WebP-t nem támogató platformokhoz.',
  'webp-to-avif':
    'Az AVIF még jobb tömörítést kínál, mint a WebP hasonló minőségben. Ha képeit a következő generációs webszabványokra szeretné optimalizálni, a WebP-ből AVIF-ba konvertálás logikus lépés.',
  'webp-to-gif': 'A konvertálás 256 színre csökkenti a palettát. Egyszerű grafikákhoz alkalmas, vagy amikor a GIF formátum animációkhoz vagy kompatibilitási okokból szükséges.',
  'webp-to-tiff':
    'A konvertálás WebP fájljait professzionális TIFF formátumba alakítja. Ideális nyomdai termeléshez és hosszú távú archiváláshoz, ahol veszteségmentes minőség és teljes metaadat-támogatás szükséges.',
  'svg-to-jpg':
    'Az SVG raszterizálása JPG-be a skálázható vektorgrafikát fix felbontású pixelképpé alakítja. Az átlátszó területek háttérszínnel töltődnek ki. SVG-t nem fogadó platformokhoz alkalmas.',
  'svg-to-png':
    'Az SVG raszterizálása PNG-be a vektorképet pixelképpé alakítja az átlátszóság teljes megőrzésével. A PNG alkalmas közösségi médiához és üzenetküldőkhöz, amelyek nem támogatják az SVG-t.',
  'svg-to-webp': 'A konvertálás kompakt pixelképeket hoz létre vektorgrafikáiból WebP formátumban. A WebP ideális weboldalakhoz, ahol a kis fájlméret és a gyors betöltési idő meghatározó.',
  'svg-to-avif': 'Az AVIF a legjobb tömörítést kínálja SVG fájlok raszterizálásához. Ideális teljesítménykritikus weboldalakhoz, ahol minden kilobájt hozzájárul a jobb Core Web Vitals értékekhez.',
  'svg-to-gif': 'A konvertálás a vektorképet legfeljebb 256 színű pixelképpé alakítja. A GIF egyszerű ikonokhoz és animált grafikákhoz alkalmas, de nem összetett, színátmenetes illusztrációkhoz.',
  'svg-to-tiff': 'Az SVG raszterizálása TIFF-be a lehető legmagasabb minőségű veszteségmentes pixelképet eredményezi. Ideális vektorgrafika professzionális nyomtatásához fix pixelfelbontásban.',
  'gif-to-jpg':
    'A GIF-ből JPG-be konvertálásnál az animációs képkockák és az átlátszóság elvesznek – csak az első kép konvertálódik. Cserébe univerzálisan kompatibilis formátumot kap teljes színmélységgel (16,7 millió szín).',
  'gif-to-png':
    'A konvertálás veszteségmentesen megőrzi a minőséget és támogatja a bináris átlátszóságot. Animált GIF-eknél csak az első képkocka konvertálódik. A PNG alkalmas GIF-grafikák további szerkesztéséhez.',
  'gif-to-webp':
    'A WebP statikus képeket és animációkat is támogat, jelentősen jobb tömörítéssel, mint a GIF. Statikus GIF-eknél a konvertálás kisebb fájlokat eredményez azonos vagy jobb minőségben.',
  'gif-to-avif': 'Az AVIF felülmúlja a GIF tömörítését és millió színt támogat 256 helyett. Ideális régi GIF-grafikák modernizálásához weboldalakon a jobb betöltési időkért.',
  'tiff-to-jpg':
    'A konvertálás a gyakran nagyon nagy TIFF fájlokat kompakt JPEG-méretre csökkenti. Az átlátszóság és réteginformációk elvesznek, de univerzálisan kompatibilis fájlokat kap webhez, e-mailhez és közösségi médiához.',
  'tiff-to-png': 'A konvertálás veszteségmentesen megőrzi a minőséget és az átlátszóságot, ha van. A PNG fájlok jelentősen kisebbek a TIFF-nél, és minden eszköz és platform támogatja.',
  'tiff-to-webp': 'A WebP drasztikusan csökkenti a TIFF fájlok méretét – gyakran több mint 90%-kal. Ideális professzionális fényképek vagy nagyfelbontású szkennelések webes optimalizálásához.',
  'tiff-to-avif':
    'Az AVIF a leghatékonyabb tömörítést kínálja nagy TIFF fájlok konvertálásához. Ideális professzionális fotózás és nagyfelbontású szkennelések webes optimalizálásához minimális minőségromlással.',
  'bmp-to-jpg':
    'A BMP fájlok tömörítetlenek és rendkívül nagyok. A JPEG-re konvertálás drasztikusan csökkenti a méretet (gyakran több mint 95%-kal) és univerzálisan kompatibilis fájlokat eredményez.',
  'bmp-to-png':
    'A BMP-ből PNG-be konvertálás jelentősen csökkenti a méretet veszteségmentes tömörítéssel. A JPEG-pel ellentétben a teljes képminőség megmarad – ideális éles szélű grafikákhoz és szövegekhez.',
  'bmp-to-webp': 'A WebP akár 97%-kal csökkenti a hatalmas BMP fájlokat jó vizuális minőségben. A konvertálás modernizálja régi képeit weboldalak és modern alkalmazások számára.',
  'bmp-to-avif': 'Az AVIF a legjobb tömörítést kínálja tömörítetlen BMP fájlok modernizálásához. A méret akár 98%-kal csökken – ideális régi képarchívumok modern formátumokba történő migrálásához.',
  'bmp-to-gif':
    'A konvertálás 256 színre csökkenti a palettát és jelentősen tömöríti a fájlt. Régebbi rendszerek egyszerű grafikáihoz alkalmas, de fotórealisztikus BMP-képekhez JPG vagy WebP ajánlott.',
  'bmp-to-tiff':
    'A BMP-ből TIFF-be konvertálás megőrzi a teljes minőséget és professzionális metaadat-támogatást ad hozzá. A TIFF alkalmasabb a BMP-nél hosszú távú archiváláshoz és professzionális nyomtatási munkafolyamatokhoz.',
  'avif-to-jpg':
    'Az AVIF-ból JPEG-be konvertálás maximális kompatibilitást biztosít. A JPG-t minden eszköz támogatja – szükséges, ha a címzettek vagy platformok még nem támogatják az újabb AVIF formátumot.',
  'avif-to-png':
    'A konvertálás veszteségmentesen megőrzi a minőséget az univerzálisan támogatott PNG formátumban. A PNG alkalmas, ha az átlátszóságot meg szeretné őrizni vagy a képet grafikai programokban szerkeszteni.',
  'avif-to-webp':
    'A WebP szélesebb böngészőtámogatást kínál, mint az AVIF jó tömörítéssel. A konvertálás akkor célszerű, ha a célplatform támogatja a WebP-t, de az AVIF-ot még nem – gyakori helyzet régebbi böngészőknél és CMS-rendszereknél.',
};

const PRIVACY =
  'Ez a konverter teljes mértékben helyben, a böngészőjében működik – fájljai soha nem hagyják el az eszközét. Nincs feltöltés, nincs szerver, nincs regisztráció. Teljes mértékben GDPR-kompatibilis és korlátlanul ingyenes.';

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
console.log(`HU: Updated: ${updated}, Skipped: ${skipped}`);
