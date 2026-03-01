/**
 * Differentiate "in practice" sectionInfo in HU converter files.
 */
const fs = require('fs');
const path = require('path');
const TOOLS = path.join(__dirname, '..', 'data', 'hu', 'tools');

const P = {
  'png-to-webp': [
    'Magyar webdesignerek és webáruház-tulajdonosok PNG-t használnak logókhoz, termékfotó-kivágásokhoz és átlátszóságot igénylő felületi elemekhez. WebP-re váltáskor az átlátszóság teljesen megmarad, miközben a fájlméret 25–35%-kal csökken – közvetlen előny a betöltési időkben és a Core Web Vitals mutatókban.',
    'Nagy egyszínű felületeket tartalmazó grafikák (logók, ikonok) profitálnak legjobban: 200–500 KB-os fájlok gyakran 100 KB alá csökkennek. Termékfotókhoz a Vatera.hu-n, Jófogás.hu-n, eMAG.hu-n vagy Shopify webáruházakban ez gyorsabb kategóriaoldalakat jelent.',
    'A teljes feldolgozás helyben, a böngészőben történik – ideális ügynökségek és vállalatok számára, amelyeknek meg kell felelniük a GDPR-nak. A termékképek vagy ügyfélgrafikák soha nem hagyják el az eszközét.',
  ],
  'png-to-jpg': [
    'Az átlátszóságot tartalmazó PNG-fájlok gyakran több megabájtosak. Ha nincs szükség átlátszóságra – önéletrajzi fotók, dokumentumszkennelések vagy közösségimédia-posztok – a JPG-re konvertálás drasztikusan csökkenti a méretet.',
    'Sok platform, mint a Profession.hu, LinkedIn vagy állásportálok kizárólag JPG-t fogadnak el. Az e-mail mellékletek is profitálnak: egy 3 MB-os PNG képernyőkép JPG-ként mindössze 200–400 KB. A 85%-os minőség a legjobb kompromisszum.',
    'Pályázati dokumentumokhoz és bizalmas fájlokhoz a helyi feldolgozás elengedhetetlen – fájljai soha nem hagyják el az eszközét. Teljesen GDPR-kompatibilis.',
  ],
  'png-to-avif': [
    'Az AVIF a jelenlegi generáció leghatékonyabb képformátuma, és akár 50%-kal csökkentheti a PNG-fájlokat. Teljesítménykritikus webprojektekhez a PNG-AVIF konvertálás az optimális választás.',
    'Az AVIF támogatja az átlátszóságot, HDR-t és csatornánként akár 12 bites színmélységet. A Chrome, Firefox és Safari 16+ natívan támogatja. Régebbi böngészőkhöz fallback a <code>&lt;picture&gt;</code> elemen keresztül ajánlott.',
    'Magyar vállalatok, amelyek PageSpeed-eredményeiket szeretnék optimalizálni, különösen profitálnak: az AVIF mérhetően javítja a Largest Contentful Paint (LCP) értéket. A helyi feldolgozás biztosítja a GDPR-megfelelőséget.',
  ],
  'png-to-gif': [
    'Egyszerű grafikák, mint ikonok, logók vagy diagramok korlátozott palettával GIF-ként kompaktabban tárolhatók. A konvertálás hasznos, ha a célplatform GIF formátumot követel.',
    'A GIF maximum 256 színt támogat. Fotórealisztikus PNG-képek láthatóan veszítenek minőségből. Az átlátszóság csak bináris (látható/láthatatlan), nem fokozatos alfa, mint a PNG-nél.',
    'Prezentációkhoz, hírlevélgrafikákhoz vagy kizárólag GIF-et fogadó rendszerekhez ez gyors megoldás – teljesen helyben, fájlfeltöltés nélkül.',
  ],
  'png-to-tiff': [
    'Nyomdák, kiadók és archiválási rendszerek gyakran TIFF-et követelnek PNG helyett. A konvertálás megőrzi a teljes minőséget, átlátszóságot, és professzionális metaadat-támogatást ad hozzá.',
    'A TIFF-fájlok nagyobbak a PNG-nél, de előnyöket kínálnak a professzionális munkafolyamatokhoz: rétegtámogatás Photoshopban, CMYK színterek nyomtatáshoz és teljes metaadatok. A TIFF ipari szabvány a hosszú távú archiváláshoz.',
    'Magyarországi nyomdák gyakran dolgoznak TIFF-fel. A helyi konvertálás lehetővé teszi bizalmas tervek feldolgozását felhőfeltöltés nélkül.',
  ],
  'jpg-to-webp': [
    'A JPEG a digitális fotók szabványformátuma, de weboldalakhoz a fájlméretek gyakran túl nagyok. A WebP további 25–35%-kal tömöríti a JPEG-képeket látható minőségromlás nélkül, közvetlenül javítva a betöltési időket.',
    'Shopify, WooCommerce vagy Shoprenter webáruházak számára a JPG-ről WebP-re váltás mérhetően gyorsabb termékoldalakatjelent. A Google PageSpeed a WebP-t ajánlja újgenerációs formátumként. 80–85%-os minőségnél a különbség észrevehetetlen.',
    'Magyarországon, ahol a szigorú GDPR-szabályok érvényesek, a helyi képfeldolgozás a böngészőben különösen értékes. A termékfotók nem hagyják el az eszközét.',
  ],
  'jpg-to-png': [
    'Néha egy JPEG-képet át kell konvertálni átlátszóságot támogató vagy veszteségmentes formátumba – például Photoshopban, Figmában vagy Canvában való szerkesztéshez.',
    'A JPG-PNG konvertálás nem állítja helyre a JPEG-tömörítés által elveszett részleteket, de megakadályozza a további veszteségeket jövőbeli szerkesztéseknél. A PNG ideális, ha a kép kollázs, overlay vagy nyomtatási elrendezés alapjául szolgál.',
    'Magyar grafikusok és ügynökségek számára a helyi feldolgozás ideális: az ügyfélanyagok a saját számítógépen maradnak, külső szolgáltatás hozzáférése nélkül.',
  ],
  'jpg-to-avif': [
    'Az AVIF akár 50%-kal jobb tömörítést ér el, mint a JPEG, összehasonlítható vizuális minőség mellett. Sok fotót tartalmazó weboldalakhoz – ingatlanportálok, online magazinok, utazási oldalak – a betöltési idők jelentősen csökkennek.',
    'Platformok, mint az Ingatlan.com, Booking.com vagy Jófogás egyre inkább AVIF-et használnak a jobb mobilélmény érdekében. A Chrome, Firefox és Safari 16+ natívan támogatja.',
    'A helyi konvertálás a böngészőben védi képeit: ingatlanfotók, termékképek vagy portrék – semmi sem kerül feltöltésre. Teljesen GDPR-kompatibilis.',
  ],
  'jpg-to-gif': [
    'A JPG-GIF konvertálás hasznos, ha egy fotóra egyszerű, korlátozott palettájú grafikaként van szükség – régi rendszerek bélyegképeihez vagy kizárólag GIF-et támogató hírlevelekhez.',
    'A GIF 256 színre korlátozza a palettát, ami fotóknál látható minőségromlást okoz dithering formájában. A legtöbb felhasználáshoz a WebP vagy PNG jobb választás.',
    'Ha a munkafolyamata kizárólag GIF-et igényel, a helyi konvertálás gyors és adatvédelmi szempontból megfelelő megoldást kínál.',
  ],
  'jpg-to-tiff': [
    'Professzionális nyomdák és képügynökségek gyakran TIFF-et követelnek JPEG helyett. A konvertálás megőrzi a jelenlegi minőséget és veszteségmentesen tárolja.',
    'A JPEG-tömörítéssel elveszett részletek nem állíthatók helyre, de a TIFF megakadályozza a további veszteségeket. Támogatja a CMYK-t, rétegeket és bővített metaadatokat – ideális professzionális nyomtatási munkafolyamatokhoz.',
    'Magyar fotósok és ügynökségek profitálnak a helyi feldolgozásból: ügyfélfotók és nyomtatási fájlok az eszközön maradnak.',
  ],
  'heic-to-jpg': [
    'Az iPhone-felhasználók ismerik a problémát: a HEIC-fotók nem nyílnak meg mindenhol. Windows PC-k, Android-eszközök, sok webes űrlap és e-mail kliens nem támogatja a HEIC-et. A JPG-re konvertálás azonnal megoldja ezt a kompatibilitási problémát.',
    '85–90%-os minőségnél a HEIC-eredeti és a JPG-eredmény közötti különbség vizuálisan szinte észrevehetetlen. A fájlméret összehasonlítható marad. Különösen praktikus: több iPhone-fotó egyidejű konvertálása.',
    'Önéletrajzi fotókhoz, személyi igazolvány szkennelésekhez vagy személyes dokumentumokhoz a helyi feldolgozás elengedhetetlen – érzékeny adatok soha nem hagyják el az eszközét.',
  ],
  'heic-to-png': [
    'Ha iPhone-fotókat veszteségmentesen szeretne újrafelhasználni – Photoshop, Figma alapjaként vagy nyomtatási projektekhez – a PNG az ideális célformátum.',
    'A PNG támogatja az átlátszóságot és veszteségmentes tárolást, ellentétben a JPG-vel. A PNG-fájlok azonban lényegesen nagyobbak. Grafikai szoftverben való szerkesztéshez ez nem hátrány – webes használathoz WebP-re konvertálás ajánlott.',
    'Kreatív ügynökségek és fotósok profitálnak a helyi feldolgozásból: ügyfelek iPhone-fotói bizalmasan maradnak a saját számítógépen.',
  ],
  'heic-to-webp': [
    'iPhone-fotók HEIC formátumban közvetlenül weboldalakra? A WebP az ideális híd: ötvözi a HEIC hatékony tömörítését az univerzális böngésző-kompatibilitással (Chrome, Firefox, Safari 14+, Edge).',
    'A HEIC-WebP konvertálás különösen hatékony, mivel mindkét formátum modern tömörítési algoritmusokat használ. Blogokhoz, webáruházakhoz és portfóliókhoz ez a leggyorsabb út az optimalizált iPhone-fotók közzétételéhez.',
    'Magyar bloggerek és webáruház-tulajdonosok helyben és GDPR-kompatibilisen konvertálhatják iPhone-fotóikat – felhőszolgáltatás vagy külső eszköz nélkül.',
  ],
  'heic-to-avif': [
    'Az AVIF hasonló tömörítési hatékonyságot kínál, mint a HEIC, de nyílt formátumként nem kötődik az Apple ökoszisztémájához. A HEIC-AVIF a legmodernebb tömörítést teszi lehetővé széles platformtámogatással.',
    'A Chrome, Firefox és Safari 16+ natívan támogatja az AVIF-et. Teljesítménykritikus projektekhez – galériák, portfóliók, ingatlanportálok – az AVIF a legjobb egyensúlyt kínálja.',
    'A helyi konvertálás különösen releváns fotósok számára: iPhone-felvételek közvetlenül a leghatékonyabb webformátumba konvertálhatók – felhő nélkül.',
  ],
  'heic-to-tiff': [
    'iPhone-nal dolgozó professzionális fotósoknak gyakran TIFF-re van szükségük Lightroom, Capture One vagy Photoshop utófeldolgozáshoz.',
    'A TIFF 16 bites színmélységet, rétegeket és bővített EXIF/IPTC metaadatokat támogat. Nyomtatáshoz, archiváláshoz és professzionális retusáláshoz a TIFF az előnyben részesített formátum.',
    'Magyarországon, ahol nyomdák és fotóügynökségek TIFF-et követelnek standardként, a helyi konvertálás biztonságos munkafolyamatot kínál bizalmas felvételekhez.',
  ],
  'webp-to-jpg': [
    'A WebP optimális a webhez, de nyomtatási szolgáltatások, Microsoft Office, régebbi szoftver és egyes közösségi médiák JPG-t követelnek.',
    'A WebP-JPG maximális kompatibilitást biztosít. 85–90%-os minőségnél a minőség szinte azonos. Praktikus képek e-mailben küldéséhez olyan címzetteknek, akik nem tudják megnyitni a WebP-t.',
    'Ügynökségek számára, amelyeknek univerzális formátumokban kell képeket szállítaniuk, a helyi konvertálás ideális – gyors, biztonságos és GDPR-kompatibilis.',
  ],
  'webp-to-png': [
    'Az átlátszó WebP-képeket néha PNG-re kell konvertálni – WebP-támogatás nélküli grafikai programokhoz vagy veszteségmentes minőséget igénylő nyomtatási fájlokhoz.',
    'A konvertálás teljesen megőrzi az átlátszóságot és minőséget. A PNG-k nagyobbak, de alkalmasabbak Photoshophoz, Illustratorhoz és WebP nélküli platformokhoz.',
    'Magyar grafikusok helyben konvertálhatnak WebP-asseteket nyomtatáskész PNG-fájlokká – felhő nélkül és GDPR-kompatibilisen.',
  ],
  'webp-to-avif': [
    'Az AVIF még jobb tömörítést kínál, mint a WebP – a következő logikus lépés a betöltési idők további optimalizálásához.',
    'Összehasonlítható minőségnél az AVIF-fájlok 20–30%-kal kisebbek a WebP-nél. Több száz képet tartalmazó oldalaknál a megtakarítás jelentős. WebP-fallback <code>&lt;picture&gt;</code>-en keresztül a régebbi böngészőket fedi le.',
    'Magyar webáruházak, amelyek Core Web Vitals mutatóikat optimalizálják, különösen profitálnak az AVIF-ből. A helyi konvertálás elkerüli a felhőfeltöltést.',
  ],
  'webp-to-gif': [
    'A GIF-formátumra néha szükség van – régebbi rendszerek, hírlevéleszközök vagy kizárólag GIF-et fogadó platformok.',
    'A GIF maximum 256 színt támogat. Fotórealisztikus képek minőséget veszítenek. A konvertálás leginkább egyszerű grafikákhoz, ikonokhoz vagy logókhoz alkalmas.',
    'A helyi böngészős feldolgozás gyors és biztonságos alternatívát kínál a felhőalapú konvertálási szolgáltatásokkal szemben.',
  ],
  'webp-to-tiff': [
    'Professzionális nyomtatási munkafolyamatok gyakran TIFF-et követelnek. A WebP-TIFF lehetővé teszi web-optimalizált képek nyomtatásra való előkészítését.',
    'A TIFF veszteségmentesen tárol teljes metaadat-támogatással. A WebP-tömörítéssel elveszett részletek nem állíthatók helyre – a legjobb minőséghez az eredeti képből érdemes kiindulni.',
    'Magyar ügynökségek és nyomdák számára a helyi konvertálás biztonságos módot kínál web-assetek nyomtatási projektekre való előkészítéséhez.',
  ],
  'svg-to-jpg': [
    'Az SVG-vektorgrafikák nem használhatók mindenhol: közösségi média, piacterek és sok CMS csak raszteres formátumokat fogad el. A JPG-re konvertálás univerzálisan kompatibilis fájlokat hoz létre.',
    'A raszterizálás fix felbontású pixelképpé alakítja a vektort. Az átlátszó területek háttérszínnel töltődnek ki (alapértelmezetten fehér). Webes használathoz 1200–2000 px szélesség ajánlott.',
    'Közösségimédia-posztokhoz és hirdetésekhez a Jófogás.hu-n, Vatera.hu-n vagy Amazonnál az SVG-JPG konvertálás gyakori követelmény.',
  ],
  'svg-to-png': [
    'Az SVG-t gyakran PNG-re konvertálják közösségi médiához, üzenetküldőkhöz és e-mail aláírásokhoz – megőrizve az átlátszóságot széles kompatibilitással.',
    'A PNG-re raszterizálás teljesen megőrzi az átlátszó területeket – ideális logókhoz különböző háttereken. Kiváló dokumentációs képernyőképekhez és prezentációkhoz is.',
    'Logókat különböző formátumokban szállító ügynökségek számára az SVG-PNG gyors és adatvédelmi szempontból megfelelő munkafolyamat.',
  ],
  'svg-to-webp': [
    'SVG-t közvetlenül nem tudó weboldalakhoz – korlátozott SVG-támogatású CMS-ekhez – a WebP kompakt pixelreprezentációt kínál minimális méretben.',
    'SVG-forrásokból készült WebP-fájlok jellemzően nagyon könnyűek (5–30 KB) és azonnal betöltődnek. Ikonokhoz és logókhoz ez a legpraktikusabb megoldás, ha az SVG közvetlen használata nem lehetséges.',
    'WordPress, Shoprenter és sok más magyarországi CMS natívan támogatja a WebP-t – a konvertálás lehetővé teszi vektorgrafikák használatát ezekben a környezetekben is.',
  ],
  'svg-to-avif': [
    'Az AVIF a legjobb elérhető tömörítést kínálja raszterizált vektorgrafikákhoz. Teljesítménykritikus oldalakhoz SVG-AVIF az optimális választás.',
    'SVG-forrásokból készült AVIF-fájlok rendkívül kompaktak (3–15 KB). Minden kilobájt számít a Core Web Vitals-nak: gyorsabb betöltés javítja az LCP-t és a Google-rangsorolást.',
    'Magyar webfejlesztők és SEO-szakértők egyre inkább AVIF-et használnak – a helyi konvertálás egyszerűsíti az átállást.',
  ],
  'svg-to-gif': [
    'A GIF néha szükséges ikonokhoz régi rendszerekben, e-mail sablonokban vagy fórumokon. Az SVG-GIF kompatibilis és könnyű fájlokat hoz létre.',
    'A GIF 256 színre korlátoz. Egyszínű logókhoz elegendő; összetett illusztrációkhoz színátmenetekkel nem. Átlátszóság csak bináris.',
    'Hírlevélsablonokhoz és régi platformokhoz, amelyek csak GIF-et fogadnak el, ez gyors helyi megoldás.',
  ],
  'svg-to-tiff': [
    'Nyomdák gyakran pixelképeket igényelnek TIFF-ben vektorfájlok helyett. Az SVG-TIFF nagy felbontású, veszteségmentes fájlokat hoz létre professzionális nyomtatáshoz.',
    'A TIFF a raszterizált grafikát a legmagasabb minőségben tárolja teljes színmélységgel és metaadat-támogatással. Névjegykártyákhoz, szórólapokhoz és plakátokhoz min. 300 DPI ajánlott.',
    'Magyarországi nyomdák a TIFF-et fogadják el standard pixelformátumként. A helyi konvertálás védi a bizalmas terveket és logókat.',
  ],
  'gif-to-jpg': [
    'Régi GIF-képeket néha JPG-re kell konvertálni – kizárólag JPEG-et fogadó platformokhoz vagy e-mail fájlméret-optimalizáláshoz. Animált GIF-ből csak az első kép konvertálódik.',
    'A JPG teljes 16,7 millió színt kínál a GIF 256 szín helyett. Véletlenül GIF-ként elmentett fotók profitálnak a teljes színmélységből.',
    'Régi grafikák archiválásához modern, univerzálisan kompatibilis formátumban a helyi konvertálás gyors és adatvédelmi szempontból megfelelő.',
  ],
  'gif-to-png': [
    'GIF-PNG konvertálás hasznos veszteségmentes tároláshoz vagy grafikai programokban való szerkesztéshez. A PNG 32 bites színeket és fokozatos alfa-átlátszóságot támogat.',
    'Animált GIF-ekből csak az első kép konvertálódik. A minőség veszteségmentesen megmarad. A PNG ideális köztes formátum Photoshophoz, Figmához vagy Canvához.',
    'Régi webgrafikák frissítéséhez a helyi konvertálás gyors és biztonságos megoldás külső szolgáltatások nélkül.',
  ],
  'gif-to-webp': [
    'A WebP lényegesen jobb tömörítést kínál, mint a GIF. Régi GIF-ek WebP-re modernizálása érzékelhetően gyorsítja a weboldalakat.',
    'Statikus GIF-fájlok WebP-ként jellemzően 30–60%-kal kisebbek, milliónyi színnel 256 helyett, jelentősen javítva a vizuális minőséget.',
    'Régi magyar weboldalak optimalizálásához a GIF-WebP váltás egyszerű módja a Core Web Vitals javításának.',
  ],
  'gif-to-avif': [
    'Az AVIF minden szempontból felülmúlja a GIF-et: jobb tömörítés, milliónyi szín, modern animációtámogatás. Régi webtartalom modernizálásához a GIF-AVIF a leghatékonyabb.',
    'GIF-forrásokból készült AVIF-fájlok drasztikusan kisebbek és vizuálisan jobbak. Régebbi böngészők még nem támogatják – fallback <code>&lt;picture&gt;</code>-en keresztül ajánlott.',
    'A betöltési idők maximalizálásához a GIF-AVIF váltás az összes formátumváltás közül a legnagyobb egyedi nyereséget kínálja.',
  ],
  'tiff-to-jpg': [
    'Professzionális fotózásból vagy szkennerekből származó TIFF-fájlok gyakran 20–100 MB-osak. A JPG-re konvertálás kompakt fájlokat hoz létre – tipikus csökkenés 95% felett.',
    'Az átlátszóság és réteginformáció elvész. Tiszta fotográfiához ez nem probléma. 85–90%-os minőségnél a vizuális minőség kiváló marad néhány száz KB-ban.',
    'Magyar fotósok és szkennerhasználók helyben és GDPR-kompatibilisen konvertálhatják TIFF-fájljaikat küldésre kész JPG-vé.',
  ],
  'tiff-to-png': [
    'Amikor TIFF-fájlokra van szükség grafikai programokban való szerkesztéshez vagy átlátszóságot igénylő oldalakhoz, a PNG a megfelelő formátum – veszteségmentes és univerzálisan kompatibilis.',
    'A PNG megőrzi a TIFF teljes minőségét és átlátszóságát. A fájlok kisebbek a TIFF-nél, de nagyobbak a JPEG/WebP-nél. Figmához, Canvához vagy Photoshophoz a PNG ideális.',
    'Szkenner-kimenetek és archív képek online használatra való előkészítéséhez a helyi konvertálás biztonságos és gyors munkafolyamatot kínál.',
  ],
  'tiff-to-webp': [
    'A TIFF-WebP a legnagyobb csökkenést éri el: 20–100 MB-os fájlok gyakran 200 KB – 2 MB-ra zsugorodnak. Professzionális fotók webes közzétételéhez ez a leghatékonyabb út.',
    '80–85%-os minőségnél a WebP kiváló vizuális minőséget tart. Képgalériákhoz, portfóliókhoz és online magazinokhoz: professzionális minőség az eredeti méret töredékén.',
    'Magyar fotósok és ügynökségek nagyfelbontású felvételeiket helyben konvertálhatják web-optimalizált formátumokba – felhő nélkül, GDPR-kompatibilisen.',
  ],
  'tiff-to-avif': [
    'Az AVIF a leghatékonyabb tömörítést kínálja nagy TIFF-fájlokhoz. Professzionális fotók és nagyfelbontású szkennelések drasztikusan csökkennek minimális minőségromlással.',
    'Képgalériákhoz és portfólió-weboldalakhoz a TIFF-AVIF az optimális munkafolyamat. Chrome, Firefox és Safari 16+ támogatja; WebP-fallback régebbi böngészőkhöz.',
    'Magyar professzionális fotósok profitálnak a helyi feldolgozásból: ügyfelek nagyfelbontású fotói biztonságosan és GDPR-kompatibilisen optimalizálódnak.',
  ],
  'bmp-to-jpg': [
    'BMP-fájlok gyakran régi Windows-alkalmazásokból vagy szkennerekből származnak. Tömörítetlenek és rendkívül nagyok – a JPG-re konvertálás 95% feletti csökkenést eredményez.',
    'Egy 10 MB-os BMP képernyőkép JPG-ként jellemzően mindössze 200–400 KB. E-mailhez, dokumentációhoz és archiváláshoz ez a legegyszerűbb módja a helytakarékosságnak.',
    'Régi képarchívumok migrálásához és szkenner-kimenetek előkészítéséhez a helyi konvertálás gyors és adatvédelmi szempontból megfelelő megoldás.',
  ],
  'bmp-to-png': [
    'A BMP-PNG veszteségmentes tömörítéssel csökkenti a méretet – a teljes minőség megmarad. Ideális éles szélű, szöveges grafikákhoz vagy képernyőképekhez.',
    'A JPG-vel ellentétben a PNG pontos pixelminőséget őriz meg tömörítési műtermékek nélkül. Technikai dokumentációkhoz és szöveges képernyőképekhez a PNG jobb választás.',
    'A helyi konvertálás alkalmas bizalmas dokumentumokhoz és belső képernyőképekhez – semmi nem kerül külső szerverre.',
  ],
  'bmp-to-webp': [
    'A BMP teljesen alkalmatlan modern webes használatra – tömörítetlen és hatalmas. A WebP akár 97%-kal csökkenti a méretet jó minőség mellett, modernizálva régi képeket a webhez.',
    'A konvertálás modernizálja régi Windows-fájlokat jelenlegi weboldalakhoz, CMS-ekhez és webáruházakhoz. A WebP-t minden modern böngésző támogatja.',
    'Magyar vállalatok számára, amelyek régi archívumokat készítenek elő webes jelenlétükhöz, a helyi konvertálás hatékony és GDPR-kompatibilis.',
  ],
  'bmp-to-avif': [
    'Az AVIF a lehető legjobb tömörítést kínálja tömörítetlen BMP-fájlokhoz: 98% feletti csökkenések reálisak.',
    'Az AVIF támogatja a HDR-t, széles színtereket és akár 12 bitet – az eredeti minőség a lehető legjobban megmarad. Chrome, Firefox és Safari 16+ natívan támogatja.',
    'A helyi böngészős konvertálás lehetővé teszi teljes archívumok migrálását felhő nélkül – gyorsan, biztonságosan és adatvédelmi szempontból megfelelően.',
  ],
  'bmp-to-gif': [
    'A BMP-GIF hasznos kizárólag GIF-et fogadó rendszerekhez vagy kevés színt tartalmazó egyszerű grafikákhoz.',
    'A GIF maximum 256 színt támogat. Fotórealisztikus képek jelentős minőséget veszítenek. Fotókhoz JPG vagy WebP jobb. A GIF csak egyszerű grafikákhoz alkalmas.',
    'Régi rendszerek kompatibilitási követelményeihez a helyi konvertálás gyors és biztonságos megoldást kínál.',
  ],
  'bmp-to-tiff': [
    'A BMP-TIFF hasznos professzionális metaadat-támogatáshoz – archiváláshoz, nyomtatás-előkészítéshez vagy professzionális szoftverben való feldolgozáshoz.',
    'A TIFF megőrzi a BMP teljes minőségét és hozzáad: EXIF metaadatok, CMYK színterek és rétegtámogatás. Hosszú távú archiváláshoz a TIFF egyértelműen jobb a BMP-nél.',
    'Archívumok, könyvtárak és magyar vállalatok, amelyek régi gyűjteményeket digitalizálnak, profitálnak a helyi konvertálásból felhőfüggőség nélkül.',
  ],
  'avif-to-jpg': [
    'Az AVIF-et régebbi eszközök, képszerkesztő szoftverek és egyes platformok még nem támogatják. A JPG-re konvertálás maximális kompatibilitást biztosít.',
    '85–90%-os minőségnél a minőség szinte azonos az AVIF-eredetivel. Hasznos e-mailekhez régebbi rendszerű címzetteknek vagy kizárólag JPEG-et fogadó nyomtatási szolgáltatásoknak.',
    'Vállalatok számára, amelyeknek web-optimalizált (AVIF) és univerzálisan kompatibilis (JPG) képekre is szükségük van, a helyi konvertálás hatékony munkafolyamat.',
  ],
  'avif-to-png': [
    'Az átlátszó AVIF-képeket néha PNG-re kell konvertálni – grafikai programokhoz vagy AVIF-támogatás nélküli platformokhoz.',
    'A PNG veszteségmentesen megőrzi az átlátszóságot és minőséget. A fájlok nagyobbak az AVIF-nél, de alkalmasak Photoshophoz, Figmához, Canvához és nyomtatáshoz.',
    'Magyar grafikusok helyi konvertálást használnak AVIF-assetek biztonságos és GDPR-kompatibilis előkészítéséhez különböző kimeneti csatornákhoz.',
  ],
  'avif-to-webp': [
    'A WebP szélesebb böngészőtámogatást kínál, mint az AVIF (Safari 14+ vs. 16+) jó tömörítéssel. Ha a közönsége régebbi böngészőket használ, a WebP biztonságosabb választás.',
    'Az AVIF-WebP releváns AVIF-támogatás nélküli CMS-ekhez és CDN-ekhez. A WebP-t natívan támogatja a WordPress, Shopify, Cloudflare és minden modern böngésző.',
    'Magyar webprojektekhez, amelyeknek maximális böngészőlefedettségre van szükségük, a WebP továbbra is a legmegbízhatóbb modern formátum.',
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
  const block = data.contentBlocks.find(b => b.type === 'sectionInfo' && !b.html.includes('<table') && (b.title.includes('gyakorlatban') || b.title.includes('a gyakorlatban')));
  if (!block) { skipped++; continue; }
  block.html = `<p class="text-mid mb-4">${p1}</p><p class="text-mid mb-4">${p2}</p><p class="text-mid">${p3}</p>`;
  fs.writeFileSync(fp, JSON.stringify(data, null, 2) + '\n', 'utf-8');
  updated++;
}
console.log(`HU sectionInfo: Updated: ${updated}, Skipped: ${skipped}`);
