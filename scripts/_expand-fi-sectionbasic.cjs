/**
 * Expand "Why convert X to Y?" sectionBasic in FI converter files.
 */
const fs = require('fs');
const path = require('path');
const TOOLS = path.join(__dirname, '..', 'data', 'fi', 'tools');

const SOURCE = {
  png: 'Portable Network Graphics (PNG) on häviötön kuvamuoto, joka tukee miljoonia värejä ja täyttä alfa-läpinäkyvyyttä. PNG soveltuu erityisen hyvin logoihin, kuvakkeisiin, kuvakaappauksiin ja grafiikkaan, jossa on teräviä reunoja tai tekstiä.',
  jpg: 'JPEG (JPG) on maailman käytetyin kuvamuoto digitaalisille valokuville. Se käyttää häviöllistä pakkausta kompakteihin tiedostoihin, mutta ei tue läpinäkyvyyttä eikä häviötöntä tallennusta.',
  heic: 'High Efficiency Image Container (HEIC) on Apple-laitteiden oletuskuvamuoto iOS 11:stä lähtien. HEIC tarjoaa pienempiä tiedostoja kuin JPEG vastaavalla laadulla, mutta sitä ei tueta natiivisti Applen ekosysteemin ulkopuolella – ei Windowsissa, Androidissa tai monilla verkkoalustoilla.',
  webp: 'WebP on Googlen kehittämä moderni kuvamuoto, joka tukee sekä häviöllistä että häviötöntä pakkausta. Se tuottaa huomattavasti pienempiä tiedostoja kuin PNG ja JPEG vastaavalla visuaalisella laadulla ja on kaikkien nykyisten selainten tukema.',
  svg: 'Scalable Vector Graphics (SVG) on XML-pohjainen vektorimuoto kaksiulotteiselle grafiikalle. SVG-tiedostot ovat resoluutioriippumattomia ja pysyvät terävinä missä tahansa koossa – ihanteellisia logoille, kuvakkeille ja kuvituksille.',
  gif: 'Graphics Interchange Format (GIF) tukee animaatioita ja enintään 256 värin palettia. GIF on laajalti käytetty animoituun sisältöön sosiaalisessa mediassa, mutta värirajoitus tekee siitä sopimattoman valorealistisille kuville.',
  bmp: 'Bitmap (BMP) on vanhempi Windows-kuvamuoto, joka tallentaa pikselitiedot ilman pakkausta. BMP-tiedostot ovat erittäin suuria ja sopimattomia nykyaikaiseen käyttöön verkossa tai mobiililaitteilla.',
  tiff: 'Tagged Image File Format (TIFF) on alan standardi ammattimaiseen valokuvaukseen, tulostukseen ja arkistointiin. TIFF tallentaa kuvat häviöttömästi täydellä värisyvyydellä, tasoilla ja metatiedoilla.',
  avif: 'AV1 Image File Format (AVIF) on seuraavan sukupolven kuvamuoto, joka perustuu AV1-videokoodekkiin. AVIF tarjoaa tällä hetkellä parhaan saatavilla olevan pakkauksen – jopa 50% pienempiä tiedostoja kuin WebP vastaavalla visuaalisella laadulla.',
};

const TARGET = {
  webp: 'WebP pienentää tiedostokokoa 30–35% vanhempiin muotoihin verrattuna ilman näkyvää laadun heikkenemistä. Kaikki nykyaikaiset selaimet (Chrome, Firefox, Safari 14+, Edge) tukevat WebP:tä täysin. Verkkosivuille tämä tarkoittaa nopeampia latausaikoja ja parempaa Google-sijoitusta.',
  avif: 'AVIF tarjoaa tehokkaimman pakkauksen kaikista nykyisistä kuvamuodoista ja voi pienentää tiedostokokoa jopa 50% JPEG:hen verrattuna. Chrome, Firefox ja Safari 16+ tukevat AVIF:ia. Se on optimaalinen valinta suorituskykykriittisiin verkkoprojekteihin.',
  jpg: 'JPEG on universaalein kuvamuoto – yhteensopiva kaikkien laitteiden, selainten ja alustojen kanssa. Muuntaminen JPG-muotoon varmistaa, että kuvasi näkyvät ongelmitta kaikkialla: sähköpostiliitteistä sosiaalisen median julkaisuihin.',
  png: 'PNG säilyttää täyden kuvanlaadun ilman pakkausartefakteja ja tukee täyttä alfa-läpinäkyvyyttä. Tämä häviötön muoto on ihanteellinen grafiikalle, jota on tarkoitus muokata edelleen, ja kuville, joissa läpinäkyvät alueet on säilytettävä.',
  gif: 'GIF on standardimuoto lyhyille animaatioille, meemeille ja yksinkertaiselle grafiikalle rajoitetulla väripaletilla. Universaalilla selaintuella GIF soveltuu erityisen hyvin animoituun sisältöön sosiaalisessa mediassa ja viestipalveluissa.',
  tiff: 'TIFF säilyttää täyden kuvanlaadun ilman minkäänlaista tietojen menetystä ja tukee tasoja ja laajoja metatietoja. Alan standardina tulostuksessa ja arkistoinnissa TIFF soveltuu ammattivalokuvaajille ja painotaloille.',
};

const PAIR = {
  'png-to-webp':
    'WebP tukee alfa-läpinäkyvyyttä aivan kuten PNG – kaikki kuvan läpinäkyvät alueet säilyvät täysin. Voit valita häviöllisen ja häviöttömän pakkauksen välillä optimaalisen tiedostokoon ja laadun tasapainon löytämiseksi.',
  'png-to-jpg':
    'PNG:stä JPG:ksi muunnettaessa läpinäkyvyys menetetään – läpinäkyvät alueet täytetään taustavärillä. Vastineeksi saat huomattavasti pienempiä tiedostoja, jotka soveltuvat paremmin valokuville ja verkkosisällölle ilman läpinäkyvyyttä.',
  'png-to-avif': 'AVIF tarjoaa vielä parempaa pakkausta kuin WebP ja voi pienentää PNG-kuviasi jopa 50%. Alfa-läpinäkyvyys on täysin tuettu. Vanhemmat selaimet eivät välttämättä vielä tue AVIF:ia.',
  'png-to-gif':
    'Muunnos vähentää paletin enintään 256 väriin. Tulos soveltuu yksinkertaiseen grafiikkaan, kuvakkeisiin ja logoihin. Läpinäkyvyys on tuettu vain binäärisesti (näkyvä tai näkymätön), ei asteittain.',
  'png-to-tiff':
    'Muunnos säilyttää PNG-alkuperäisen täyden laadun ja läpinäkyvyyden TIFF-muodossa. TIFF soveltuu jatkokäsittelyyn Photoshopissa tai ammattimaiseen tulostukseen. TIFF-tiedostot ovat suurempia kuin PNG.',
  'jpg-to-webp': 'WebP voi pienentää JPEG-valokuviasi 25–35% ilman näkyvää laadun heikkenemistä. Koska JPEG ei tue läpinäkyvyyttä, tässä muunnoksessa ei menetä mitään kuvatietoja.',
  'jpg-to-png':
    'JPG:stä PNG:ksi muunnos muuntaa kuvan häviöttömään muotoon. JPEG-pakkauksessa jo menetettyjä yksityiskohtia ei kuitenkaan voi palauttaa. PNG soveltuu, jos haluat muokata kuvaa ilman lisälaadun menetystä.',
  'jpg-to-avif':
    'AVIF saavuttaa jopa 50% paremman pakkauksen kuin JPEG vastaavalla visuaalisella laadulla. Tämä seuraavan sukupolven muoto on ihanteellinen suorituskykykriittisille verkkosivuille ja on Chrome-, Firefox- ja Safari 16+ -tuettu.',
  'jpg-to-gif':
    'Väripaletti pienenee 256:een, mikä valokuvissa aiheuttaa näkyviä laadun menetyksiä. Tämä muunnos soveltuu lähinnä yksinkertaiseen grafiikkaan tai kun GIF-muoto vaaditaan yhteensopivuussyistä.',
  'jpg-to-tiff':
    'Muunnos säilyttää JPEG:n nykyisen laadun ja tallentaa sen häviöttömästi TIFF-muodossa. JPEG-pakkauksessa menetettyjä yksityiskohtia ei voi palauttaa, mutta TIFF mahdollistaa jatkomuokkauksen ilman lisähäviöitä.',
  'heic-to-jpg':
    'HEIC:stä JPG:ksi muunnos muuntaa Applen oman muodon universaalisti yhteensopivaksi JPEG:ksi. Läpinäkyvyys ja HDR-tiedot menetetään, mutta kuvanlaatu pysyy lähes identtisenä alkuperäiseen 85%:n asetuksilla.',
  'heic-to-png':
    'Muunnos säilyttää HEIC-alkuperäisen täyden laadun häviöttömästi PNG-muodossa. PNG on kaikkien laitteiden tukema ja soveltuu erityisesti, jos haluat muokata kuvaa tai säilyttää läpinäkyvyyden.',
  'heic-to-webp':
    'WebP tarjoaa erinomaisen tasapainon tiedostokoon ja laadun välillä. HEIC:stä WebP:ksi muunnos tuottaa kompakteja tiedostoja, jotka kaikki nykyaikaiset selaimet tukevat – ihanteellinen verkkosivuille.',
  'heic-to-avif':
    'AVIF tarjoaa HEIC:n kaltaista pakkaustehokkuutta, mutta avoimena muotona sillä on paljon laajempi tuki. Muunnos mahdollistaa nykyaikaisen pakkauksen ilman Applen ekosysteemin rajoituksia.',
  'heic-to-tiff':
    'Muunnos muuntaa iPhone-valokuvasi ammattimaiseen TIFF-muotoon. Ihanteellinen valokuvaajille, jotka haluavat arkistoida mobiiliotoksiaan häviöttömässä muodossa ja muokata niitä Photoshopissa tai Lightroomissa.',
  'webp-to-jpg':
    'WebP:stä JPEG:ksi muunnos varmistaa maksimaalisen yhteensopivuuden. JPG on kaikkien laitteiden ja ohjelmistojen tukema – välttämätön kuvien lähettämiseen sähköpostilla tai lataamiseen alustoille, jotka eivät hyväksy WebP:tä.',
  'webp-to-png': 'WebP:stä PNG:ksi muunnos säilyttää kuvan läpinäkyvyyden ja tallentaa sen häviöttömästi. PNG soveltuu jatkomuokkaukseen grafiikkaohjelmissa ja alustoille, jotka eivät tue WebP:tä.',
  'webp-to-avif':
    'AVIF tarjoaa vielä parempaa pakkausta kuin WebP vastaavalla laadulla. Jos haluat optimoida kuvasi seuraavan sukupolven verkkostandardeille, WebP:stä AVIF:iin muunnos on looginen askel.',
  'webp-to-gif': 'Muunnos vähentää paletin 256 väriin. Se soveltuu yksinkertaiseen grafiikkaan tai kun GIF-muoto tarvitaan animaatioihin tai yhteensopivuussyistä.',
  'webp-to-tiff': 'Muunnos muuntaa WebP-tiedostosi ammattimaiseen TIFF-muotoon. Ihanteellinen painotuotantoon ja pitkäaikaisarkistointiin, jossa tarvitaan häviötön laatu ja täysi metatietotuki.',
  'svg-to-jpg':
    'SVG:n rasterointi JPG:ksi muuntaa skaalautuvan vektorigrafiikan kiinteän resoluution pikselikuvaksi. Läpinäkyvät alueet täytetään taustavärillä. Soveltuu alustoille, jotka eivät hyväksy SVG:tä.',
  'svg-to-png': 'SVG:n rasterointi PNG:ksi muuntaa vektorikuvan pikselikuvaksi säilyttäen läpinäkyvyyden täysin. PNG soveltuu sosiaaliseen mediaan ja viestipalveluihin, jotka eivät tue SVG:tä.',
  'svg-to-webp': 'Muunnos tuottaa kompakteja pikselikuvia vektorigrafiikastasi WebP-muodossa. WebP on ihanteellinen verkkosivuille, joilla pienet tiedostokoot ja nopeat latausajat ovat ratkaisevia.',
  'svg-to-avif': 'AVIF tarjoaa parhaan pakkauksen SVG-tiedostojen rasterointiin. Ihanteellinen suorituskykykriittisille verkkosivuille, joilla jokainen kilotavu parantaa Core Web Vitalsia.',
  'svg-to-gif':
    'Muunnos muuntaa vektorikuvan pikselikuvaksi enintään 256 värillä. GIF soveltuu yksinkertaisiin kuvakkeisiin ja animoituun grafiikkaan, mutta ei monimutkaisiin kuvituksiin väriästeillä.',
  'svg-to-tiff': 'SVG:n rasterointi TIFF:ksi tuottaa häviöttömän pikselikuvan korkeimmalla laadulla. Ihanteellinen vektorigrafiikan ammattimaiseen tulostukseen kiinteällä pikseliresoluutiolla.',
  'gif-to-jpg':
    'GIF:stä JPG:ksi muunnettaessa animaatiokehykset ja läpinäkyvyys menetetään – vain ensimmäinen kuva muunnetaan. Saat universaalisti yhteensopivan muodon täydellä värisyvyydellä (16,7 miljoonaa väriä).',
  'gif-to-png': 'Muunnos säilyttää laadun häviöttömästi ja tukee binääristä läpinäkyvyyttä. Animoiduista GIF:eistä muunnetaan vain ensimmäinen kehys. PNG soveltuu GIF-grafiikan jatkomuokkaukseen.',
  'gif-to-webp':
    'WebP tukee sekä stillkuvia että animaatioita huomattavasti paremmalla pakkauksella kuin GIF. Staattisissa GIF:eissä muunnos tuottaa pienempiä tiedostoja samalla tai paremmalla laadulla.',
  'gif-to-avif': 'AVIF tarjoaa ylivoimaista pakkausta GIF:iin verrattuna ja tukee miljoonia värejä 256:n sijaan. Ihanteellinen vanhojen GIF-grafiikoiden modernisointiin verkkosivuilla.',
  'tiff-to-jpg':
    'Muunnos pienentää usein erittäin suuret TIFF-tiedostot kompakteiksi JPEG:iksi. Läpinäkyvyys ja tasotiedot menetetään, mutta saat universaalisti yhteensopivat tiedostot verkkoon, sähköpostiin ja sosiaaliseen mediaan.',
  'tiff-to-png': 'Muunnos säilyttää laadun häviöttömästi ja säilyttää läpinäkyvyyden, jos sitä on. PNG-tiedostot ovat huomattavasti pienempiä kuin TIFF ja kaikkien laitteiden ja alustojen tukemia.',
  'tiff-to-webp': 'WebP pienentää TIFF-tiedostojasi dramaattisesti – usein yli 90%. Ihanteellinen ammattimaisten valokuvien tai korkearesoluutioisten skannausten optimointiin verkkokäyttöön.',
  'tiff-to-avif':
    'AVIF tarjoaa tehokkaimman pakkauksen suurten TIFF-tiedostojen muuntamiseen. Ihanteellinen ammattimaisen valokuvauksen ja korkearesoluutioisten skannausten verkko-optimointiin minimaalisella laadun menetyksellä.',
  'bmp-to-jpg': 'BMP-tiedostot ovat pakkaamattomia ja erittäin suuria. Muuntaminen JPEG:ksi pienentää tiedostokokoa dramaattisesti (usein yli 95%) ja tuottaa universaalisti yhteensopivia tiedostoja.',
  'bmp-to-png':
    'BMP:stä PNG:ksi muunnos pienentää tiedostokokoa merkittävästi häviöttömällä pakkauksella. Toisin kuin JPEG, täysi kuvanlaatu säilyy – ihanteellinen grafiikalle terävillä reunoilla ja tekstillä.',
  'bmp-to-webp': 'WebP pienentää valtavia BMP-tiedostoja jopa 97% hyvällä visuaalisella laadulla. Muunnos modernisoi vanhat kuvasi verkkosivujen ja nykyaikaisten sovellusten käyttöön.',
  'bmp-to-avif':
    'AVIF tarjoaa parhaan pakkauksen pakkaamattomien BMP-tiedostojen modernisointiin. Tiedostokoko pienenee jopa 98% – ihanteellinen vanhojen kuva-arkistojen siirtämiseen nykyaikaisiin muotoihin.',
  'bmp-to-gif':
    'Muunnos vähentää paletin 256 väriin ja pakkaa tiedoston merkittävästi. Soveltuu yksinkertaiseen grafiikkaan vanhemmista järjestelmistä, mutta valorealistisille BMP-kuville suositellaan JPG:tä tai WebP:tä.',
  'bmp-to-tiff':
    'BMP:stä TIFF:ksi muunnos säilyttää täyden laadun ja lisää ammattimaisen metatietotuen. TIFF soveltuu BMP:tä paremmin pitkäaikaisarkistointiin ja ammattimaisiin tulostustyönkulkuihin.',
  'avif-to-jpg':
    'AVIF:sta JPEG:ksi muunnos varmistaa maksimaalisen yhteensopivuuden. JPG on kaikkien laitteiden tukema – välttämätön, kun vastaanottajat tai alustat eivät vielä tue uudempaa AVIF-muotoa.',
  'avif-to-png': 'Muunnos säilyttää laadun häviöttömästi universaalisti tuetussa PNG-muodossa. PNG soveltuu, jos haluat säilyttää läpinäkyvyyden tai muokata kuvaa grafiikkaohjelmissa.',
  'avif-to-webp':
    'WebP tarjoaa laajemman selaintuen kuin AVIF hyvällä pakkauksella. Muunnos on järkevä, kun kohdealustasi tukee WebP:tä mutta ei vielä AVIF:ia – yleinen tilanne vanhemmissa selaimissa ja CMS-järjestelmissä.',
};

const PRIVACY =
  'Tämä muunnin toimii kokonaan paikallisesti selaimessasi – tiedostosi eivät koskaan poistu laitteeltasi. Ei latauksia, ei palvelimia, ei rekisteröitymistä. Täysin GDPR-yhteensopiva ja maksuton ilman mitään rajoituksia.';

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
console.log(`FI: Updated: ${updated}, Skipped: ${skipped}`);
