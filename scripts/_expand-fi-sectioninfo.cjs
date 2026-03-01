/**
 * Differentiate "in practice" sectionInfo in FI converter files.
 */
const fs = require('fs');
const path = require('path');
const TOOLS = path.join(__dirname, '..', 'data', 'fi', 'tools');

const P = {
  'png-to-webp': [
    'Suomalaiset verkkosuunnittelijat ja verkkokauppiaat käyttävät PNG:tä logoihin, tuoteleikkauksiin ja käyttöliittymäelementteihin, joissa on läpinäkyvyys. WebP:hen siirtyessä läpinäkyvyys säilyy täysin, kun tiedostokoko pienenee 25–35 % – suora hyöty latausaikoihin ja Core Web Vitals -tuloksiin.',
    'Suurilla yksiväristen alueiden grafiikoilla (logot, kuvakkeet) hyöty on suurin: 200–500 KB:n tiedostot pienenevät usein alle 100 KB:n. Tuotekuville Tori.fi:ssä, Verkkokauppa.com:issa tai Shopify-kaupoissa tämä tarkoittaa nopeampia kategoriasivuja ja parempaa mobiilikokemusta.',
    'Kaikki käsittely tapahtuu paikallisesti selaimessa – ihanteellista toimistoille ja yrityksille, joiden on noudatettava GDPR:ää. Tuotekuvat tai asiakkaiden grafiikat eivät koskaan poistu laitteeltasi.',
  ],
  'png-to-jpg': [
    'Läpinäkyvät PNG-tiedostot painavat usein useita megatavuja. Kun läpinäkyvyyttä ei tarvita – CV-kuvat, asiakirjojen skannaukset tai some-julkaisut – muunnos JPG:ksi pienentää kokoa dramaattisesti.',
    'Monet alustat kuten LinkedIn, Duunitori tai työpaikkasivustot hyväksyvät vain JPG:n. Myös sähköpostiliitteet hyötyvät: 3 MB:n PNG-kuvakaappaus on JPG:nä vain 200–400 KB. Laatu 85 %:ssa tarjoaa parhaan kompromissin.',
    'Työhakemusasiakirjoille ja luottamuksellisille tiedostoille paikallinen käsittely on välttämätöntä – tiedostosi eivät koskaan poistu laitteeltasi. Täysin GDPR-yhteensopiva.',
  ],
  'png-to-avif': [
    'AVIF on nykyisen sukupolven tehokkain kuvamuoto ja voi pienentää PNG-tiedostoja jopa 50 %. Suorituskykykriittisille verkkoprojekteille PNG-AVIF-muunnos on optimaalinen.',
    'AVIF tukee läpinäkyvyyttä, HDR:ää ja jopa 12 bitin värisyvyyttä kanavaa kohden. Chrome, Firefox ja Safari 16+ tukevat AVIF:ia natiivisti. Vanhemmille selaimille fallback <code>&lt;picture&gt;</code>-elementin kautta on suositeltavaa.',
    'Suomalaiset yritykset, jotka haluavat optimoida PageSpeed-tuloksiaan, hyötyvät erityisesti: AVIF parantaa mitattavasti Largest Contentful Paint (LCP) -tulosta. Paikallinen käsittely takaa GDPR-yhteensopivuuden.',
  ],
  'png-to-gif': [
    'Yksinkertaiset grafiikat kuten kuvakkeet, logot tai kaaviot rajoitetulla väripaletilla tallentuvat GIF:nä kompaktimmin. Muunnos on hyödyllinen, kun kohdealusta vaatii GIF-muotoa.',
    'GIF tukee enintään 256 väriä. Valokuvamaisten PNG-kuvien laatu heikkenee näkyvästi. Läpinäkyvyys on vain binäärinen (näkyvä/näkymätön), ei asteittainen alfa kuten PNG:ssä.',
    'Esityksiin, uutiskirjegrafiikoihin tai vain GIF:iä hyväksyviin järjestelmiin tämä muunnos on nopea ratkaisu – kokonaan paikallisesti ilman tiedostojen latausta.',
  ],
  'png-to-tiff': [
    'Painotalot, kustantajat ja arkistointijärjestelmät vaativat usein TIFF:iä PNG:n sijaan. Muunnos säilyttää täyden laadun, läpinäkyvyyden ja lisää ammattimaisen metadatatuen.',
    'TIFF-tiedostot ovat suurempia kuin PNG, mutta tarjoavat etuja ammattimaisiin työnkulkuihin: tasojen tuki Photoshopissa, CMYK-väriavaruudet painoon ja täydelliset metatiedot. TIFF on teollisuusstandardi pitkäaikaisarkistointiin.',
    'Painotalot Suomessa ja Pohjoismaissa työskentelevät usein TIFF:n kanssa. Paikallinen muunnos mahdollistaa luottamuksellisten suunnitelmien käsittelyn ilman pilvilatausta.',
  ],
  'jpg-to-webp': [
    'JPEG on standardimuoto digitaalikuville, mutta verkkosivuille tiedostokoot ovat usein liian suuria. WebP pakkaa JPEG-kuvat 25–35 % lisää ilman näkyvää laadun heikkenemistä, parantaen latausaikoja suoraan.',
    'Verkkokauppojen Shopify-, WooCommerce- tai MyCashflow-alustoilla siirtyminen JPG:stä WebP:hen nopeuttaa mitattavasti tuotesivuja. Google PageSpeed suosittelee WebP:tä uuden sukupolven muotona. Laatu 80–85 %:ssa on ero huomaamaton.',
    'Suomessa, missä tiukat GDPR-säännöt ovat voimassa, paikallinen kuvankäsittely selaimessa on erityisen arvokasta. Tuotekuvat eivät poistu laitteeltasi.',
  ],
  'jpg-to-png': [
    'Joskus JPEG-kuva on muunnettava muotoon, joka tukee läpinäkyvyyttä tai häviötöntä tallennusta – esimerkiksi muokattavaksi Photoshopissa, Figmassa tai Canvassa.',
    'JPG-PNG-muunnos ei palauta JPEG-pakkauksen kadottamia yksityiskohtia, mutta estää lisähäviöt tulevissa muokkauksissa. PNG on ihanteellinen, kun kuva toimii pohjana kollaaseille tai painoasetteluille.',
    'Suomalaisille graafikoille ja toimistoille paikallinen käsittely on ihanteellista: asiakasmateriaalit pysyvät omalla koneella ilman ulkopuolisten palvelujen pääsyä.',
  ],
  'jpg-to-avif': [
    'AVIF saavuttaa jopa 50 % paremman pakkauksen kuin JPEG vastaavalla visuaalisella laadulla. Runsaasti kuvia sisältäville sivustoille – kiinteistöportaalit, verkkolehdet, matkailusivut – latausajat lyhenevät huomattavasti.',
    'Alustat kuten Etuovi.com, Booking.com tai Tori.fi omaksuvat yhä enemmän AVIF:ia paremman mobiilikokemuksen vuoksi. Chrome, Firefox ja Safari 16+ tukevat natiivisti.',
    'Paikallinen muunnos selaimessa suojaa kuviasi: kiinteistökuvat, tuotekuvat tai muotokuvat – mitään ei ladata palvelimelle. Täysin GDPR-yhteensopiva.',
  ],
  'jpg-to-gif': [
    'JPG-GIF-muunnos on hyödyllinen, kun valokuvaa tarvitaan yksinkertaisena grafiikkana – esikatselukuvina vanhoissa järjestelmissä tai uutiskirjeissä, jotka tukevat vain GIF:iä.',
    'GIF rajoittaa paletin 256 väriin, mikä aiheuttaa näkyvää laadun heikkenemistä valokuvissa. Useimpiin käyttötarkoituksiin WebP tai PNG on parempi valinta.',
    'Jos työnkulkusi vaatii yksinomaan GIF:iä, paikallinen muunnos tarjoaa nopean ja tietosuojaa noudattavan ratkaisun.',
  ],
  'jpg-to-tiff': [
    'Ammattipainotalot ja kuvatoimistot vaativat usein TIFF:iä JPEG:n sijaan. Muunnos säilyttää nykyisen laadun ja tallentaa sen häviöttömästi jatkokäsittelyä varten.',
    'JPEG-pakkauksen kadottamia yksityiskohtia ei palauteta, mutta TIFF estää lisähäviöt retusoinneissa. Tukee CMYK:tä, tasoja ja laajennettuja metatietoja – ihanteellinen ammattimaisiin painotyönkulkuihin.',
    'Valokuvaajat ja toimistot Suomessa hyötyvät paikallisesta käsittelystä: asiakaskuvat ja painotiedostot pysyvät laitteellasi.',
  ],
  'heic-to-jpg': [
    'iPhone-käyttäjät tuntevat ongelman: HEIC-kuvia ei voi avata kaikkialla. Windows-tietokoneet, Android-laitteet, monet verkkolomakkeet ja sähköpostisovellukset eivät tue HEIC:iä. Muunnos JPG:ksi ratkaisee yhteensopivuusongelman välittömästi.',
    'Laatu 85–90 %:ssa HEIC-alkuperäisen ja JPG-tuloksen ero on visuaalisesti lähes huomaamaton. Tiedostokoko pysyy vertailukelpoisena. Erityisen kätevää: muuntaa useita iPhone-kuvia samanaikaisesti.',
    'CV-kuville, henkilöllisyystodistusskannauksille tai henkilökohtaisille asiakirjoille paikallinen käsittely on välttämätöntä – arkaluonteiset tiedot eivät koskaan poistu laitteeltasi.',
  ],
  'heic-to-png': [
    'Jos haluat käyttää iPhone-kuvia häviöttömästi – pohjina Photoshopissa, Figmassa tai painoprojekteissa – PNG on ihanteellinen kohdemuoto.',
    'PNG tukee läpinäkyvyyttä ja häviötöntä tallennusta toisin kuin JPG. PNG-tiedostot ovat kuitenkin huomattavasti suurempia. Grafiikkaohjelmissa muokkaukseen tämä ei ole haitta – verkkokäyttöön suositellaan jatkomuunnosta WebP:hen.',
    'Luovat toimistot ja valokuvaajat hyötyvät paikallisesta käsittelystä: asiakkaiden iPhone-kuvat pysyvät luottamuksellisina omalla koneella.',
  ],
  'heic-to-webp': [
    'iPhone-kuvia HEIC-muodossa suoraan verkkosivuille? WebP on ihanteellinen silta: se yhdistää HEIC:n tehokkaan pakkauksen yleiseen selainyhteensopivuuteen (Chrome, Firefox, Safari 14+, Edge).',
    'HEIC-WebP-muunnos on erityisen tehokasta, sillä molemmat muodot käyttävät moderneja pakkausalgoritmeja. Blogeille, verkkokaupoille ja portfolioille tämä on nopein tapa julkaista optimoituja iPhone-kuvia.',
    'Bloggaajat ja verkkokauppiaat Suomessa voivat muuntaa iPhone-kuviaan paikallisesti ja GDPR-yhteensopivasti – ilman pilvipalveluja tai ulkoisia työkaluja.',
  ],
  'heic-to-avif': [
    'AVIF tarjoaa samankaltaisen pakkaustehokkuuden kuin HEIC, mutta avoimena muotona se ei ole sidottu Applen ekosysteemiin. HEIC-AVIF mahdollistaa modernimman pakkauksen laajalla alustantuella.',
    'Chrome, Firefox ja Safari 16+ tukevat AVIF:ia natiivisti. Suorituskykykriittisille projekteille – kuvagalleriat, portfoliot, kiinteistöportaalit – AVIF tarjoaa parhaan tasapainon.',
    'Paikallinen muunnos on erityisen oleellista valokuvaajille: iPhone-kuvaukset muunnetaan suoraan tehokkaimpaan verkkomuotoon – ilman pilveä.',
  ],
  'heic-to-tiff': [
    'Ammattivalokuvaajat, jotka työskentelevät iPhoneilla, tarvitsevat usein TIFF:iä jälkikäsittelyyn Lightroomissa, Capture Onessa tai Photoshopissa.',
    'TIFF tukee 16-bittistä värisyvyyttä, tasoja ja laajennettuja EXIF/IPTC-metatietoja. Painoon, arkistointiin ja ammattimaiseen retusointiin TIFF on suositeltu muoto. Tiedostot kasvavat kuitenkin huomattavasti.',
    'Suomessa, missä painotalot ja kuvatoimistot vaativat TIFF:iä standardina, paikallinen muunnos tarjoaa turvallisen työnkulun luottamuksellisille kuvauksille.',
  ],
  'webp-to-jpg': [
    'WebP on optimaalinen verkossa, mutta painopalvelut, Microsoft Office, vanhempi ohjelmisto ja jotkin sosiaalisen median alustat vaativat JPG:tä.',
    'WebP-JPG varmistaa maksimaalisen yhteensopivuuden. Laatu 85–90 %:ssa laatu pysyy lähes identtisenä. Käytännöllistä kuvien lähettämiseen vastaanottajille, jotka eivät voi avata WebP:tä.',
    'Toimistoille, joiden on toimitettava kuvia yleismuodoissa, paikallinen muunnos on ihanteellista – nopeaa, turvallista ja GDPR-yhteensopivaa.',
  ],
  'webp-to-png': [
    'Läpinäkyvät WebP-kuvat on joskus muunnettava PNG:ksi – grafiikkaohjelmille ilman WebP-tukea tai painotiedostoille, jotka vaativat häviötöntä laatua.',
    'Muunnos säilyttää läpinäkyvyyden ja laadun täysin. PNG:t ovat suurempia mutta soveltuvat paremmin Photoshopiin, Illustratoriin ja alustoille ilman WebP-tukea.',
    'Graafiset suunnittelijat Suomessa voivat muuntaa paikallisesti WebP-assetteja painovalmiiksi PNG-tiedostoiksi – ilman pilveä ja GDPR-yhteensopivasti.',
  ],
  'webp-to-avif': [
    'AVIF tarjoaa vielä parempaa pakkausta kuin WebP – seuraava looginen askel sivustoille, jotka haluavat optimoida latausaikojaan entisestään.',
    'Vertailukelpoisella laadulla AVIF-tiedostot ovat 20–30 % pienempiä kuin WebP. Satojen kuvien sivustoille säästö on merkittävä. WebP-fallback <code>&lt;picture&gt;</code>-elementin kautta kattaa vanhemmat selaimet.',
    'Suomalaiset verkkokaupat, jotka optimoivat Core Web Vitals -tuloksiaan, hyötyvät erityisesti AVIF:ista. Paikallinen muunnos välttää pilvilatauksen.',
  ],
  'webp-to-gif': [
    'GIF-muotoa tarvitaan joskus – vanhemmat järjestelmät, uutiskirjetyökalut tai alustat, jotka hyväksyvät vain GIF:in.',
    'GIF tukee enintään 256 väriä. Valokuvamaiset kuvat menettävät laatua. Muunnos sopii parhaiten yksinkertaisille grafiikoille, kuvakkeille tai logoille.',
    'Paikallinen käsittely tarjoaa nopean ja turvallisen vaihtoehdon pilvipohjaisille muunnospalveluille.',
  ],
  'webp-to-tiff': [
    'Ammattimaiset painotyönkulut vaativat usein TIFF:iä. WebP-TIFF mahdollistaa verkko-optimoitujen kuvien valmistelun painoon.',
    'TIFF tallentaa häviöttömästi täydellä metatietotuella. WebP-pakkauksen kadottamia yksityiskohtia ei palauteta – parhaan laadun saamiseksi lähtökohtana tulee olla alkuperäinen kuva.',
    'Toimistoille ja painotaloille Suomessa paikallinen muunnos tarjoaa turvallisen tavan valmistella verkkoassetteja painoprojekteihin.',
  ],
  'svg-to-jpg': [
    'SVG-vektorigrafiikoita ei hyväksytä kaikkialla: sosiaalinen media, markkinapaikat ja monet CMS:t hyväksyvät vain rasterimuotoja. Muunnos JPG:ksi luo yleisesti yhteensopivia tiedostoja.',
    'Rasterointi muuntaa vektorin pikselikuvaksi kiinteällä resoluutiolla. Läpinäkyvät alueet täytetään taustavärillä (oletus valkoinen). Verkkokäyttöön suositellaan 1200–2000 px leveyttä.',
    'Sosiaalisen median julkaisuihin ja ilmoituksiin Tori.fi:ssä, Verkkokauppa.com:issa tai Amazonissa SVG-JPG on yleinen vaatimus.',
  ],
  'svg-to-png': [
    'SVG muunnetaan usein PNG:ksi sosiaalista mediaa, viestisovelluksia ja sähköpostin allekirjoituksia varten – säilyttäen läpinäkyvyyden laajalla yhteensopivuudella.',
    'Rasterointi PNG:ksi säilyttää läpinäkyvät alueet täysin – ihanteellista logoille eri taustoilla. Erinomaista myös dokumentaation kuvakaappauksiin ja esityksiin.',
    'Toimistoille, jotka toimittavat logoja eri muodoissa, SVG-PNG on nopea ja tietosuojan mukainen työnkulku.',
  ],
  'svg-to-webp': [
    'Sivustoille, jotka eivät voi upottaa SVG:tä suoraan – CMS:t rajoitetulla SVG-tuella – WebP tarjoaa kompaktin pikseliesityksen minimaalisella koolla.',
    'SVG-lähteistä saadut WebP-tiedostot ovat tyypillisesti hyvin kevyitä (5–30 KB) ja latautuvat välittömästi. Kuvakkeille ja logoille verkkosivuilla tämä on käytännöllisin ratkaisu.',
    'WordPress, MyCashflow ja monet muut CMS:t Suomessa tukevat WebP:tä natiivisti – muunnos mahdollistaa vektorigrafiikoiden käytön näissäkin ympäristöissä.',
  ],
  'svg-to-avif': [
    'AVIF tarjoaa parhaan pakkauksen rasteroiduille vektorigrafiikoille. Suorituskykykriittisille sivustoille SVG-AVIF on optimaalinen valinta.',
    'SVG-lähteistä saadut AVIF-tiedostot ovat äärimmäisen kompakteja (3–15 KB). Jokainen kilotavu merkitsee Core Web Vitals -tuloksissa: nopeampi lataus parantaa LCP:tä ja Google-sijoitusta.',
    'Web-kehittäjät ja SEO-asiantuntijat Suomessa käyttävät yhä enemmän AVIF:ia – paikallinen muunnos yksinkertaistaa siirtymää.',
  ],
  'svg-to-gif': [
    'GIF:iä tarvitaan joskus kuvakkeisiin vanhoissa järjestelmissä, sähköpostimalleissa tai foorumeilla. SVG-GIF luo yhteensopivia ja kevyitä tiedostoja.',
    'GIF rajoittaa 256 väriin. Yksivärisille logoille se riittää; monimutkaisille kuvituksille liukuväreillä ei. Läpinäkyvyys vain binäärinen.',
    'Uutiskirjemalleihin ja vanhoille alustoille, jotka hyväksyvät vain GIF:in, tämä on nopea paikallinen ratkaisu.',
  ],
  'svg-to-tiff': [
    'Painotalot tarvitsevat tuotantoon usein pikselikuvia TIFF:nä vektoritiedostojen sijaan. SVG-TIFF tuottaa korkealaatuisia häviöttömiä tiedostoja ammattimaiseen painoon.',
    'TIFF tallentaa rasteroidun grafiikan korkeimmassa laadussa täydellä värisyvyydellä ja metatietotuella. Käyntikortteihin, esitteisiin ja julisteisiin suositellaan min. 300 DPI.',
    'Painotalot Suomessa ja Pohjoismaissa hyväksyvät TIFF:n vakiopikselimuotona. Paikallinen muunnos suojaa luottamuksellisia suunnitelmia ja tuotemerkkien logoja.',
  ],
  'gif-to-jpg': [
    'Vanhoja GIF-kuvia on joskus muunnettava JPG:ksi – alustoille, jotka hyväksyvät vain JPEG:n, tai sähköpostin tiedostokoon optimointiin. Vain animoidun GIF:n ensimmäinen kuva muunnetaan.',
    'JPG tarjoaa täydet 16,7 miljoonaa väriä GIF:n 256 värin sijaan. Vahingossa GIF:nä tallennetut valokuvat hyötyvät täydestä värisyvyydestä.',
    'Vanhojen grafiikoiden arkistointiin modernissa, yleisesti yhteensopivassa muodossa paikallinen muunnos on nopea ja tietosuojan mukainen.',
  ],
  'gif-to-png': [
    'GIF-PNG-muunnos on hyödyllinen häviöttömään tallennukseen tai muokkaukseen grafiikkaohjelmissa. PNG tukee 32-bittisiä värejä ja asteittaista alfa-läpinäkyvyyttä.',
    'Animoiduista GIF:eistä muunnetaan vain ensimmäinen kuva. Laatu säilyy häviöttömänä. PNG on ihanteellinen välimuotona Photoshopiin, Figmaan tai Canvaan.',
    'Vanhojen verkkografiikoiden päivittämiseen paikallinen muunnos tarjoaa nopean ja turvallisen ratkaisun ilman ulkoisia palveluja.',
  ],
  'gif-to-webp': [
    'WebP tarjoaa huomattavasti parempaa pakkausta kuin GIF. Vanhojen GIF-kuvien modernisointi WebP:ksi nopeuttaa verkkosivuja tuntuvasti.',
    'Staattiset GIF-tiedostot pienenevät WebP:nä tyypillisesti 30–60 % miljoonilla väreillä 256:n sijaan, parantaen visuaalista laatua selvästi.',
    'Vanhojen verkkosivujen optimointiin Suomessa GIF-WebP-vaihto on yksinkertainen tapa parantaa Core Web Vitals -tuloksia.',
  ],
  'gif-to-avif': [
    'AVIF ylittää GIF:n kaikessa: parempi pakkaus, miljoonia värejä, moderni animaatiotuki. Vanhan verkkosisällön modernisointiin GIF-AVIF on tehokkainta.',
    'GIF-lähteistä saadut AVIF-tiedostot ovat dramaattisesti pienempiä ja visuaalisesti parempia. Vanhemmat selaimet eivät vielä tue AVIF:ia – fallback <code>&lt;picture&gt;</code>-elementin kautta on suositeltavaa.',
    'Latausaikojen maksimointiin GIF-AVIF tarjoaa suurimman yksittäisen hyödyn kaikista muotomuutoksista.',
  ],
  'tiff-to-jpg': [
    'Ammattivalokuvauksesta tai skannereista peräisin olevat TIFF-tiedostot painavat usein 20–100 MB. Muunnos JPG:ksi tuottaa kompakteja tiedostoja – tyypillinen pienennys yli 95 %.',
    'Läpinäkyvyys ja tasotiedot menetetään. Puhtaalle valokuvaukselle tämä ei ole ongelma. Laatu 85–90 %:ssa visuaalinen laatu pysyy erinomaisena muutamissa sadoissa kilotavuissa.',
    'Valokuvaajat ja skannerin käyttäjät Suomessa voivat muuntaa TIFF-tiedostonsa paikallisesti ja GDPR-yhteensopivasti lähetysvalmiiksi JPG:ksi.',
  ],
  'tiff-to-png': [
    'Kun TIFF-tiedostoja tarvitaan muokkaukseen grafiikkaohjelmissa tai sivustoille, joilla tarvitaan läpinäkyvyyttä, PNG on sopiva muoto – häviötön ja yleisesti yhteensopiva.',
    'PNG säilyttää TIFF:n täyden laadun ja läpinäkyvyyden. Tiedostot ovat pienempiä kuin TIFF mutta suurempia kuin JPEG/WebP. Figmaan, Canvaan tai Photoshopiin PNG on ihanteellinen.',
    'Skanneritulosten ja arkistokuvien valmisteluun verkkokäyttöön paikallinen muunnos tarjoaa turvallisen ja nopean työnkulun.',
  ],
  'tiff-to-webp': [
    'TIFF-WebP saavuttaa suurimman pienennyksen: 20–100 MB:n tiedostot kutistuvat usein 200 KB – 2 MB:n kokoisiksi. Ammattikuvien julkaisuun verkossa tämä on tehokkain tapa.',
    'Laatu 80–85 %:ssa WebP säilyttää erinomaisen visuaalisen laadun. Kuvagallerioihin, portfolioihin ja verkkolehteen: ammattilaatu murto-osassa alkuperäisestä koosta.',
    'Valokuvaajat ja toimistot Suomessa voivat muuntaa korkearesoluutioisia kuvauksia paikallisesti verkko-optimoituihin muotoihin – ilman pilveä, GDPR-yhteensopivasti.',
  ],
  'tiff-to-avif': [
    'AVIF tarjoaa tehokkainta pakkausta suurille TIFF-tiedostoille. Ammattikuvat ja korkearesoluutioiset skannaukset pienenevät dramaattisesti minimaalisella laadun heikkenemisellä.',
    'Kuvagallerioille ja portfoliosivustoille TIFF-AVIF on optimaalinen työnkulku. Chrome, Firefox ja Safari 16+ tukevat AVIF:ia; WebP-fallback vanhemmille selaimille.',
    'Ammattivalokuvaajat Suomessa hyötyvät paikallisesta käsittelystä: asiakkaiden korkearesoluutioiset kuvat optimoidaan turvallisesti ja GDPR-yhteensopivasti.',
  ],
  'bmp-to-jpg': [
    'BMP-tiedostot ovat peräisin usein vanhoista Windows-sovelluksista tai skannereista. Pakkaamattomat ja valtavan kokoisia – muunnos JPG:ksi pienentää yli 95 %.',
    '10 MB:n BMP-kuvakaappaus on JPG:nä tyypillisesti vain 200–400 KB. Sähköpostiin, dokumentointiin ja arkistointiin tämä on yksinkertaisin tapa säästää tilaa.',
    'Vanhojen kuva-arkistojen siirtoon ja skanneritulosten valmisteluun paikallinen muunnos on nopea ja tietosuojan mukainen ratkaisu.',
  ],
  'bmp-to-png': [
    'BMP-PNG pienentää kokoa häviöttömällä pakkauksella – täysi laatu säilyy. Ihanteellista grafiikoille terävillä reunoilla, tekstillä tai kuvakaappauksille.',
    'Toisin kuin JPG, PNG säilyttää tarkan pikselilaadun ilman artefakteja. Teknisiin dokumentaatioihin ja tekstin sisältäviin kuvakaappauksiin PNG on parempi valinta.',
    'Paikallinen muunnos sopii luottamuksellisille asiakirjoille ja sisäisille kuvakaappauksille – mitään ei lähetetä ulkoiselle palvelimelle.',
  ],
  'bmp-to-webp': [
    'BMP on täysin soveltumaton nykyaikaiseen verkkokäyttöön – pakkaamaton ja valtava. WebP pienentää jopa 97 % hyvällä laadulla, modernisoiden vanhat kuvat verkkoon.',
    'Muunnos modernisoi vanhoja Windows-tiedostoja nykyaikaisille sivustoille, CMS:ille ja verkkokaupoille. WebP:tä tukevat kaikki nykyaikaiset selaimet.',
    'Suomalaisille yrityksille, jotka valmistelevat vanhoja arkistoja verkkoon, paikallinen muunnos on tehokas ja GDPR-yhteensopiva.',
  ],
  'bmp-to-avif': [
    'AVIF tarjoaa parhaan pakkauksen pakkaamattomille BMP-tiedostoille: yli 98 %:n pienennykset ovat realistisia.',
    'AVIF tukee HDR:ää, laajoja väriavaruuksia ja jopa 12 bittiä – alkuperäinen laatu säilyy parhaalla mahdollisella tavalla. Chrome, Firefox ja Safari 16+ tukevat natiivisti.',
    'Paikallinen muunnos mahdollistaa kokonaisten arkistojen siirron ilman pilveä – nopeasti, turvallisesti ja tietosuojaa noudattaen.',
  ],
  'bmp-to-gif': [
    'BMP-GIF on hyödyllinen järjestelmille, jotka hyväksyvät vain GIF:in, tai yksinkertaisille grafiikoille vähillä väreillä.',
    'GIF tukee enintään 256 väriä. Valokuvamaiset kuvat menettävät huomattavasti laatua. Valokuville JPG tai WebP on parempi. GIF sopii vain yksinkertaisille grafiikoille.',
    'Vanhojen järjestelmien yhteensopivuusvaatimuksiin paikallinen muunnos tarjoaa nopean ja turvallisen ratkaisun.',
  ],
  'bmp-to-tiff': [
    'BMP-TIFF on hyödyllinen ammattimaista metatietojen tukea varten – arkistointiin, painon esivalmisteluun tai käsittelyyn ammattiohjelmistoissa.',
    'TIFF säilyttää BMP:n täyden laadun ja lisää: EXIF-metatiedot, CMYK-väriavaruudet ja tasojen tuen. Pitkäaikaisarkistointiin TIFF on selvästi BMP:tä parempi.',
    'Arkistot, kirjastot ja suomalaiset yritykset, jotka digitoivat vanhoja kokoelmia, hyötyvät paikallisesta muunnosta ilman pilviriippuvuutta.',
  ],
  'avif-to-jpg': [
    'AVIF:ia eivät vielä tue vanhemmat laitteet, kuvankäsittelyohjelmat ja jotkin alustat. Muunnos JPG:ksi varmistaa maksimaalisen yhteensopivuuden.',
    'Laatu 85–90 %:ssa laatu on lähes identtinen AVIF-alkuperäisen kanssa. Hyödyllinen sähköpostiin vastaanottajille vanhoilla järjestelmillä tai painopalveluille, jotka hyväksyvät vain JPEG:n.',
    'Yrityksille, jotka tarvitsevat sekä verkko-optimoituja (AVIF) että yleisesti yhteensopivia (JPG) kuvia, paikallinen muunnos on tehokas työnkulku.',
  ],
  'avif-to-png': [
    'Läpinäkyvät AVIF-kuvat on joskus muunnettava PNG:ksi – grafiikkaohjelmille tai alustoille ilman AVIF-tukea.',
    'PNG säilyttää läpinäkyvyyden ja laadun häviöttömästi. Tiedostot ovat suurempia kuin AVIF mutta sopivia Photoshopiin, Figmaan, Canvaan ja painoon.',
    'Graafiset suunnittelijat Suomessa käyttävät paikallista muunnosta AVIF-assettien turvalliseen valmisteluun eri jakelukanaviin – GDPR-yhteensopivasti.',
  ],
  'avif-to-webp': [
    'WebP tarjoaa laajemman selaintuen kuin AVIF (Safari 14+ vs. 16+) hyvällä pakkauksella. Jos yleisösi käyttää vanhempia selaimia, WebP on turvallisempi valinta.',
    'AVIF-WebP on oleellista CMS:ille ja CDN:ille ilman AVIF-tukea. WebP:tä tukevat natiivisti WordPress, Shopify, Cloudflare ja kaikki nykyaikaiset selaimet.',
    'Verkkoprojekteille Suomessa, jotka tarvitsevat maksimaalisen selainpeiton, WebP on edelleen luotettavin moderni muoto.',
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
  const block = data.contentBlocks.find(b => b.type === 'sectionInfo' && !b.html.includes('<table') && (b.title.includes('käytännössä') || b.title.includes('käytännössä')));
  if (!block) { skipped++; continue; }
  block.html = `<p class="text-mid mb-4">${p1}</p><p class="text-mid mb-4">${p2}</p><p class="text-mid">${p3}</p>`;
  fs.writeFileSync(fp, JSON.stringify(data, null, 2) + '\n', 'utf-8');
  updated++;
}
console.log(`FI sectionInfo: Updated: ${updated}, Skipped: ${skipped}`);
