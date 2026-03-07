/**
 * Part 6: Fix remaining DE contamination in sectionInfo, FAQ, sectionBasic
 * for dec-to-bin, dpi-to-ppi, rgb-to-cmyk, rgb-to-hsl, mbps-to-mbs,
 * cm-to-px-dpi, bytes-converter, dec-to-hex.
 * Run: node scripts/fix-unit-i18n-part6.cjs
 */
const fs = require('node:fs');
const path = require('node:path');
const DATA = path.join(__dirname, '..', 'data');
const LOCALES = ['el', 'hu', 'ro', 'fi', 'nl'];

const REPLACEMENTS = [
  // ═══════════ dec-to-bin sectionInfo DE ═══════════
  ['"html": "<p class=\\"text-mid mb-4\\">Wiederholt durch 2 teilen und Reste notieren. Von unten nach oben lesen.</p><p class=\\"text-mid\\">8 Bit = 1 Byte = Werte 0–255.</p>"', {
    el: '"html": "<p class=\\"text-mid mb-4\\">Διαιρέστε επαναληπτικά δια 2 και σημειώστε τα υπόλοιπα. Διαβάστε από κάτω προς τα πάνω.</p><p class=\\"text-mid\\">8 bit = 1 byte = τιμές 0–255.</p>"',
    hu: '"html": "<p class=\\"text-mid mb-4\\">Ismételten ossza el 2-vel és jegyezze fel a maradékokat. Alulról felfelé olvassa.</p><p class=\\"text-mid\\">8 bit = 1 bájt = értékek 0–255.</p>"',
    ro: '"html": "<p class=\\"text-mid mb-4\\">Împărțiți repetat la 2 și notați resturile. Citiți de jos în sus.</p><p class=\\"text-mid\\">8 biți = 1 octet = valori 0–255.</p>"',
    fi: '"html": "<p class=\\"text-mid mb-4\\">Jaa toistuvasti kahdella ja merkitse jakojäännökset. Lue alhaalta ylöspäin.</p><p class=\\"text-mid\\">8 bittiä = 1 tavu = arvot 0–255.</p>"',
  }],

  // dec-to-bin practical tips EN
  ['Powers of 2: 1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024.</li><li>1 byte = 8 bits = 0–255. Common in RGB colors, ASCII codes.</li><li>IP address: 192.168.1.1 = 11000000.10101000.00000001.00000001.</li><li>Negative numbers use two\'s complement in most systems.</li>', {
    el: 'Δυνάμεις του 2: 1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024.</li><li>1 byte = 8 bit = 0–255. Συνηθισμένο σε χρώματα RGB, κωδικούς ASCII.</li><li>Διεύθυνση IP: 192.168.1.1 = 11000000.10101000.00000001.00000001.</li><li>Αρνητικοί αριθμοί χρησιμοποιούν συμπλήρωμα ως προς δύο στα περισσότερα συστήματα.</li>',
    hu: 'A 2 hatványai: 1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024.</li><li>1 bájt = 8 bit = 0–255. Gyakori RGB színeknél, ASCII kódoknál.</li><li>IP cím: 192.168.1.1 = 11000000.10101000.00000001.00000001.</li><li>Negatív számok kettes komplemens ábrázolást használnak a legtöbb rendszerben.</li>',
    ro: 'Puterile lui 2: 1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024.</li><li>1 octet = 8 biți = 0–255. Frecvent în culori RGB, coduri ASCII.</li><li>Adresă IP: 192.168.1.1 = 11000000.10101000.00000001.00000001.</li><li>Numerele negative folosesc complement față de doi în majoritatea sistemelor.</li>',
    fi: 'Kakkosen potenssit: 1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024.</li><li>1 tavu = 8 bittiä = 0–255. Yleinen RGB-väreissä, ASCII-koodeissa.</li><li>IP-osoite: 192.168.1.1 = 11000000.10101000.00000001.00000001.</li><li>Negatiiviset luvut käyttävät kahden komplementtia useimmissa järjestelmissä.</li>',
  }],

  // ═══════════ dpi-to-ppi FAQ DE ═══════════
  ['"question": "Ist DPI gleich PPI?"', {
    el: '"question": "Είναι το DPI ίδιο με το PPI;"',
    hu: '"question": "Ugyanaz a DPI és a PPI?"',
    ro: '"question": "Este DPI la fel cu PPI?"',
    fi: '"question": "Onko DPI sama kuin PPI?"',
  }],
  ['"answer": "Nicht genau. DPI misst Druckerpunkte, PPI Bildschirm-/Bildpixel. In der Praxis sind sie für die Bildauflösung austauschbar."', {
    el: '"answer": "Όχι ακριβώς. Το DPI μετράει κουκκίδες εκτυπωτή, το PPI pixel οθόνης/εικόνας. Στην πράξη χρησιμοποιούνται εναλλακτικά για την ανάλυση εικόνας."',
    hu: '"answer": "Nem pontosan. A DPI nyomtatópontokat mér, a PPI képernyő-/képpixeleket. A gyakorlatban a képfelbontásnál felcserélhetők."',
    ro: '"answer": "Nu exact. DPI măsoară punctele imprimantei, PPI pixelii ecranului/imaginii. În practică sunt interschimbabile pentru rezoluția imaginii."',
    fi: '"answer": "Ei tarkalleen. DPI mittaa tulostimen pisteitä, PPI näytön/kuvan pikseleitä. Käytännössä ne ovat vaihdettavissa kuvan resoluution osalta."',
  }],

  // ═══════════ rgb-to-cmyk FAQ DE ═══════════
  ['"question": "Miért sehen CMYK-Drucke anders aus?"', {
    el: '"question": "Γιατί οι εκτυπώσεις CMYK φαίνονται διαφορετικές;"',
    hu: '"question": "Miért néznek ki másképp a CMYK-nyomatok?"',
    ro: '"question": "De ce arată diferit tipăririle CMYK?"',
    fi: '"question": "Miksi CMYK-tulosteet näyttävät erilaisilta?"',
  }],
  ['"answer": "Bildschirme strahlen Licht aus (RGB), Drucker verwenden Tinte (CMYK). Der CMYK-Farbraum ist kleiner."', {
    el: '"answer": "Οι οθόνες εκπέμπουν φως (RGB), οι εκτυπωτές χρησιμοποιούν μελάνι (CMYK). Ο χρωματικός χώρος CMYK είναι μικρότερος."',
    hu: '"answer": "A képernyők fényt bocsátanak ki (RGB), a nyomtatók tintát használnak (CMYK). A CMYK színtér kisebb."',
    ro: '"answer": "Ecranele emit lumină (RGB), imprimantele folosesc cerneală (CMYK). Spațiul de culoare CMYK este mai mic."',
    fi: '"answer": "Näytöt säteilevät valoa (RGB), tulostimet käyttävät mustetta (CMYK). CMYK-väriavaruus on pienempi."',
  }],

  // ═══════════ rgb-to-hsl sectionInfo DE ═══════════
  ['"html": "<p class=\\"text-mid mb-4\\">RGB auf 0–1 normalisieren. Max und Min finden. L = (max + min) / 2.</p><p class=\\"text-mid\\">HSL ist vollständig umkehrbar — zurück zu RGB ergibt exakt dieselbe Farbe.</p>"', {
    el: '"html": "<p class=\\"text-mid mb-4\\">Κανονικοποίηση RGB σε 0–1. Εύρεση Max και Min. L = (max + min) / 2.</p><p class=\\"text-mid\\">Το HSL είναι πλήρως αντιστρέψιμο — η επιστροφή σε RGB δίνει ακριβώς το ίδιο χρώμα.</p>"',
    hu: '"html": "<p class=\\"text-mid mb-4\\">RGB normalizálása 0–1-re. Max és Min megtalálása. L = (max + min) / 2.</p><p class=\\"text-mid\\">A HSL teljesen visszafordítható — az RGB-re való visszakonvertálás pontosan ugyanazt a színt adja.</p>"',
    ro: '"html": "<p class=\\"text-mid mb-4\\">Normalizați RGB la 0–1. Găsiți Max și Min. L = (max + min) / 2.</p><p class=\\"text-mid\\">HSL este complet reversibil — conversia înapoi la RGB produce exact aceeași culoare.</p>"',
    fi: '"html": "<p class=\\"text-mid mb-4\\">Normalisoi RGB arvoon 0–1. Etsi Max ja Min. L = (max + min) / 2.</p><p class=\\"text-mid\\">HSL on täysin palautettavissa — takaisin RGB:ksi muuntaminen tuottaa täsmälleen saman värin.</p>"',
  }],

  // rgb-to-hsl FAQ DE answer
  ['"answer": "Farbton (Winkel 0–360°), Sättigung (Intensität 0–100 %), Helligkeit (0–100 %). Intuitivere Farbarbeit."', {
    el: '"answer": "Απόχρωση (γωνία 0–360°), Κορεσμός (ένταση 0–100%), Φωτεινότητα (0–100%). Πιο διαισθητική εργασία με χρώματα."',
    hu: '"answer": "Árnyalat (szög 0–360°), Telítettség (intenzitás 0–100%), Világosság (0–100%). Intuitívabb színkezelés."',
    ro: '"answer": "Nuanță (unghi 0–360°), Saturație (intensitate 0–100%), Luminozitate (0–100%). Lucru mai intuitiv cu culorile."',
    fi: '"answer": "Sävy (kulma 0–360°), Kylläisyys (intensiteetti 0–100%), Kirkkaus (0–100%). Intuitiivisempi värityöskentely."',
  }],

  // rgb-to-hsl practical tips EN
  ['Red: hsl(0, 100%, 50%). Green: hsl(120, 100%, 50%). Blue: hsl(240, 100%, 50%).</li><li>Complementary color: add 180° to hue. Red (0°) → Cyan (180°).</li><li>Lighten: increase L%. Darken: decrease L%. L=0% = black, L=100% = white.</li><li>Desaturate: decrease S%. S=0% = grayscale. S=100% = pure color.</li>', {
    el: 'Κόκκινο: hsl(0, 100%, 50%). Πράσινο: hsl(120, 100%, 50%). Μπλε: hsl(240, 100%, 50%).</li><li>Συμπληρωματικό χρώμα: προσθέστε 180° στην απόχρωση. Κόκκινο (0°) → Κυανό (180°).</li><li>Φωτεινότερο: αυξήστε L%. Σκοτεινότερο: μειώστε L%. L=0% = μαύρο, L=100% = λευκό.</li><li>Αποκορεσμός: μειώστε S%. S=0% = γκρι κλίμακα. S=100% = καθαρό χρώμα.</li>',
    hu: 'Piros: hsl(0, 100%, 50%). Zöld: hsl(120, 100%, 50%). Kék: hsl(240, 100%, 50%).</li><li>Komplementer szín: adjon hozzá 180°-ot az árnyalathoz. Piros (0°) → Ciánkék (180°).</li><li>Világosítás: növelje L%-ot. Sötétítés: csökkentse L%-ot. L=0% = fekete, L=100% = fehér.</li><li>Telítettségcsökkentés: csökkentse S%-ot. S=0% = szürkeárnyalat. S=100% = tiszta szín.</li>',
    ro: 'Roșu: hsl(0, 100%, 50%). Verde: hsl(120, 100%, 50%). Albastru: hsl(240, 100%, 50%).</li><li>Culoare complementară: adăugați 180° la nuanță. Roșu (0°) → Cyan (180°).</li><li>Luminare: creșteți L%. Întunecare: reduceți L%. L=0% = negru, L=100% = alb.</li><li>Desaturare: reduceți S%. S=0% = tonuri de gri. S=100% = culoare pură.</li>',
    fi: 'Punainen: hsl(0, 100%, 50%). Vihreä: hsl(120, 100%, 50%). Sininen: hsl(240, 100%, 50%).</li><li>Vastaväri: lisää 180° sävyyn. Punainen (0°) → Syaani (180°).</li><li>Vaalenna: lisää L%. Tummenna: vähennä L%. L=0% = musta, L=100% = valkoinen.</li><li>Poista kylläisyys: vähennä S%. S=0% = harmaasävy. S=100% = puhdas väri.</li>',
  }],

  // ═══════════ mbps-to-mbs FAQ mixed DE questions ═══════════
  ['"question": "Γιατί ist mein Download langsamer als beworben?"', {
    el: '"question": "Γιατί η λήψη μου είναι πιο αργή από τη διαφήμιση;"',
  }],
  ['"question": "Miért ist mein Download langsamer als beworben?"', {
    hu: '"question": "Miért lassabb a letöltésem a hirdetettől?"',
  }],
  ['"question": "De ce ist mein Download langsamer als beworben?"', {
    ro: '"question": "De ce este descărcarea mea mai lentă decât cea promovată?"',
  }],
  // mbps-to-mbs FAQ answer with mixed DE
  ['Tatsächliche Sebesség ist typischerweise 70–90% davon."', {
    hu: 'A valós sebesség jellemzően 70–90%-a ennek."',
  }],
  ['Tatsächliche Vitesse ist typischerweise 70–90% davon."', {
    ro: 'Viteza reală este de obicei 70–90% din aceasta."',
  }],

  // ═══════════ cm-to-px-dpi sectionBasic still DE in HU/RO ═══════════
  ['Im Druckdesign werden Maße in Zentimetern angegeben, digitale Bilder jedoch in Pixeln. Die átváltás hängt von der DPI-Auflösung ab: Pixel = cm × DPI / 2,54', {
    hu: 'A nyomtatott tervezésben a méretek centiméterben vannak megadva, a digitális képek viszont pixelekben. Az átváltás a DPI-felbontástól függ: Pixel = cm × DPI / 2,54',
  }],
  ['Im Druckdesign werden Maße in Zentimetern angegeben, digitale Bilder jedoch in Pixeln. Die conversia hängt von der DPI-Auflösung ab: Pixel = cm × DPI / 2,54', {
    ro: 'În designul de tipărire dimensiunile sunt în centimetri, dar imaginile digitale sunt în pixeli. Conversia depinde de rezoluția DPI: Pixel = cm × DPI / 2,54',
  }],

  // ═══════════ bytes-converter FAQ mixed DE question ═══════════
  ['"question": "Πόσα MB ist 1 GB?"', { el: '"question": "Πόσα MB είναι 1 GB;"' }],
  ['"question": "Câți MB ist 1 GB?"', { ro: '"question": "Câți MB are 1 GB?"' }],

  // ═══════════ dec-to-hex FAQ DE answer ═══════════
  ['"answer": "0x ist ein Präfix für Hexadezimalzahlen in den meisten Sprachen (C, JavaScript, Python)."', {
    el: '"answer": "0x είναι πρόθεμα για δεκαεξαδικούς αριθμούς στις περισσότερες γλώσσες (C, JavaScript, Python)."',
    hu: '"answer": "0x egy előtag hexadecimális számokhoz a legtöbb nyelvben (C, JavaScript, Python)."',
    ro: '"answer": "0x este un prefix pentru numere hexadecimale în majoritatea limbajelor (C, JavaScript, Python)."',
    fi: '"answer": "0x on heksadesimaalilukujen etuliite useimmissa kielissä (C, JavaScript, Python)."',
  }],

  // ═══════════ rgb-to-cmyk sectionInfo DE ═══════════
  ['First, normalize RGB to 0–1 range: R\'=R/255, G\'=G/255, B\'=B/255. K = 1 – max(R\',', {
    el: 'Αρχικά, κανονικοποιήστε RGB σε εύρος 0–1: R\'=R/255, G\'=G/255, B\'=B/255. K = 1 – max(R\',',
    hu: 'Először normalizálja az RGB-t 0–1 tartományra: R\'=R/255, G\'=G/255, B\'=B/255. K = 1 – max(R\',',
    ro: 'Mai întâi, normalizați RGB la intervalul 0–1: R\'=R/255, G\'=G/255, B\'=B/255. K = 1 – max(R\',',
    fi: 'Ensin normalisoi RGB alueelle 0–1: R\'=R/255, G\'=G/255, B\'=B/255. K = 1 – max(R\',',
  }],

  // rgb-to-cmyk practical tips EN
  ['Pure black: RGB(0,0,0) = CMYK(0,0,0,100). Rich black for print: CMYK(75,68,67,90).</li><li>Pure white: RGB(255,255,255) = CMYK(0,0,0,0).</li><li>Monitor colors may not match print — always order a proof.</li><li>Total ink coverage: C+M+Y+K should usually not exceed 300% for offset printing.</li>', {
    el: 'Καθαρό μαύρο: RGB(0,0,0) = CMYK(0,0,0,100). Rich black για εκτύπωση: CMYK(75,68,67,90).</li><li>Καθαρό λευκό: RGB(255,255,255) = CMYK(0,0,0,0).</li><li>Τα χρώματα οθόνης μπορεί να μην ταιριάζουν με την εκτύπωση — παραγγείλτε πάντα δοκίμιο.</li><li>Συνολική κάλυψη μελανιού: C+M+Y+K δεν πρέπει συνήθως να υπερβαίνει 300% για offset εκτύπωση.</li>',
    hu: 'Tiszta fekete: RGB(0,0,0) = CMYK(0,0,0,100). Rich black nyomtatáshoz: CMYK(75,68,67,90).</li><li>Tiszta fehér: RGB(255,255,255) = CMYK(0,0,0,0).</li><li>A monitor színei nem biztos, hogy megegyeznek a nyomtatással — mindig rendeljen próbanyomatot.</li><li>Teljes festékfedés: C+M+Y+K általában nem haladhatja meg a 300%-ot offset nyomtatásnál.</li>',
    ro: 'Negru pur: RGB(0,0,0) = CMYK(0,0,0,100). Rich black pentru tipărire: CMYK(75,68,67,90).</li><li>Alb pur: RGB(255,255,255) = CMYK(0,0,0,0).</li><li>Culorile monitorului pot să nu corespundă cu tipărirea — comandați întotdeauna o probă.</li><li>Acoperirea totală cu cerneală: C+M+Y+K nu trebuie de obicei să depășească 300% pentru tipărire offset.</li>',
    fi: 'Puhdas musta: RGB(0,0,0) = CMYK(0,0,0,100). Rich black tulostukseen: CMYK(75,68,67,90).</li><li>Puhdas valkoinen: RGB(255,255,255) = CMYK(0,0,0,0).</li><li>Näytön värit eivät välttämättä vastaa tulostetta — tilaa aina vedos.</li><li>Kokonaismustepeitto: C+M+Y+K ei yleensä saa ylittää 300% offset-tulostuksessa.</li>',
  }],

  // ═══════════ dec-to-hex sectionInfo DE ═══════════
  ['Repeatedly divide by 16 and record remainders (using A–F for 10–15). Read remainders bottom-up.</p><p class=\\"text-mid\\">Hex is compact: one hex digit = 4 bits = one nibble. Two hex digits = 1 byte = 0–255.</p>', {
    el: 'Διαιρέστε επαναληπτικά δια 16 και σημειώστε τα υπόλοιπα (χρησιμοποιώντας A–F για 10–15). Διαβάστε τα υπόλοιπα από κάτω προς τα πάνω.</p><p class=\\"text-mid\\">Το hex είναι συμπαγές: ένα ψηφίο hex = 4 bit = ένα nibble. Δύο ψηφία hex = 1 byte = 0–255.</p>',
    hu: 'Ismételten ossza el 16-tal és jegyezze fel a maradékokat (A–F-et használva 10–15-re). Olvassa a maradékokat alulról felfelé.</p><p class=\\"text-mid\\">A hex tömör: egy hex számjegy = 4 bit = egy nibble. Két hex számjegy = 1 bájt = 0–255.</p>',
    ro: 'Împărțiți repetat la 16 și notați resturile (folosind A–F pentru 10–15). Citiți resturile de jos în sus.</p><p class=\\"text-mid\\">Hex este compact: o cifră hex = 4 biți = un nibble. Două cifre hex = 1 octet = 0–255.</p>',
    fi: 'Jaa toistuvasti 16:lla ja merkitse jakojäännökset (käyttäen A–F arvoille 10–15). Lue jäännökset alhaalta ylöspäin.</p><p class=\\"text-mid\\">Hex on tiivis: yksi hex-numero = 4 bittiä = yksi nibble. Kaksi hex-numeroa = 1 tavu = 0–255.</p>',
  }],

  // dec-to-hex practical tips EN
  ['Hex digits: 0123456789ABCDEF. A=10, B=11, C=12, D=13, E=14, F=15.</li><li>Colors: #RRGGBB. Each pair is 00–FF (0–255). #FF0000 = red, #00FF00 = green.</li><li>Memory addresses typically shown in hex: 0x7FFF5FBF.</li><li>MAC address: 6 hex pairs (e.g., 00:1A:2B:3C:4D:5E).</li>', {
    el: 'Ψηφία hex: 0123456789ABCDEF. A=10, B=11, C=12, D=13, E=14, F=15.</li><li>Χρώματα: #RRGGBB. Κάθε ζεύγος είναι 00–FF (0–255). #FF0000 = κόκκινο, #00FF00 = πράσινο.</li><li>Διευθύνσεις μνήμης εμφανίζονται τυπικά σε hex: 0x7FFF5FBF.</li><li>Διεύθυνση MAC: 6 ζεύγη hex (π.χ. 00:1A:2B:3C:4D:5E).</li>',
    hu: 'Hex számjegyek: 0123456789ABCDEF. A=10, B=11, C=12, D=13, E=14, F=15.</li><li>Színek: #RRGGBB. Minden pár 00–FF (0–255). #FF0000 = piros, #00FF00 = zöld.</li><li>Memóriacímek tipikusan hexben: 0x7FFF5FBF.</li><li>MAC cím: 6 hex pár (pl. 00:1A:2B:3C:4D:5E).</li>',
    ro: 'Cifre hex: 0123456789ABCDEF. A=10, B=11, C=12, D=13, E=14, F=15.</li><li>Culori: #RRGGBB. Fiecare pereche este 00–FF (0–255). #FF0000 = roșu, #00FF00 = verde.</li><li>Adresele de memorie sunt afișate tipic în hex: 0x7FFF5FBF.</li><li>Adresă MAC: 6 perechi hex (ex. 00:1A:2B:3C:4D:5E).</li>',
    fi: 'Hex-numerot: 0123456789ABCDEF. A=10, B=11, C=12, D=13, E=14, F=15.</li><li>Värit: #RRGGBB. Jokainen pari on 00–FF (0–255). #FF0000 = punainen, #00FF00 = vihreä.</li><li>Muistiosoitteet näytetään tyypillisesti heksana: 0x7FFF5FBF.</li><li>MAC-osoite: 6 hex-paria (esim. 00:1A:2B:3C:4D:5E).</li>',
  }],

  // ═══════════ rgb-to-cmyk sectionInfo DE ═══════════
  ['Zuerst RGB auf 0–1 normalisieren', {
    el: 'Αρχικά κανονικοποιήστε RGB σε 0–1',
    hu: 'Először normalizálja az RGB-t 0–1-re',
    ro: 'Mai întâi normalizați RGB la 0–1',
    fi: 'Ensin normalisoi RGB arvoon 0–1',
  }],

  // mbps-to-mbs sectionInfo EN
  ['1 byte = 8 bits. Therefore: Mbps ÷ 8 = MB/s, and MB/s × 8 = Mbps.</p><p class=\\"text-mid\\">Overhead from network protocols (TCP/IP headers) typically reduces actual throughput by 5–10%.</p>', {
    el: '1 byte = 8 bit. Επομένως: Mbps ÷ 8 = MB/s, και MB/s × 8 = Mbps.</p><p class=\\"text-mid\\">Το overhead από τα πρωτόκολλα δικτύου (κεφαλίδες TCP/IP) μειώνει τυπικά τη ρυθμαπόδοση κατά 5–10%.</p>',
    hu: '1 bájt = 8 bit. Tehát: Mbps ÷ 8 = MB/s, és MB/s × 8 = Mbps.</p><p class=\\"text-mid\\">A hálózati protokollok overheadje (TCP/IP fejlécek) jellemzően 5–10%-kal csökkenti a tényleges átviteli sebességet.</p>',
    ro: '1 octet = 8 biți. Prin urmare: Mbps ÷ 8 = MB/s, și MB/s × 8 = Mbps.</p><p class=\\"text-mid\\">Overhead-ul de la protocoalele de rețea (anteturi TCP/IP) reduce de obicei viteza reală cu 5–10%.</p>',
    fi: '1 tavu = 8 bittiä. Siksi: Mbps ÷ 8 = MB/s, ja MB/s × 8 = Mbps.</p><p class=\\"text-mid\\">Verkkoprotokollien yleisrasite (TCP/IP-otsikot) vähentää tyypillisesti todellista läpäisykykyä 5–10%.</p>',
  }],

  // mbps-to-mbs practical tips EN
  ['50 Mbps = 6.25 MB/s. Good for streaming, browsing, video calls.</li><li>100 Mbps = 12.5 MB/s. Comfortable for multiple users, 4K streaming.</li><li>1 Gbps = 125 MB/s. Large file transfers, professional use.</li><li>5G can reach 1–10 Gbps in ideal conditions (125–1,250 MB/s).</li>', {
    el: '50 Mbps = 6,25 MB/s. Κατάλληλο για streaming, περιήγηση, βιντεοκλήσεις.</li><li>100 Mbps = 12,5 MB/s. Άνετο για πολλούς χρήστες, streaming 4K.</li><li>1 Gbps = 125 MB/s. Μεγάλες μεταφορές αρχείων, επαγγελματική χρήση.</li><li>Το 5G μπορεί να φτάσει 1–10 Gbps σε ιδανικές συνθήκες (125–1.250 MB/s).</li>',
    hu: '50 Mbps = 6,25 MB/s. Jó streaminghez, böngészéshez, videohívásokhoz.</li><li>100 Mbps = 12,5 MB/s. Kényelmes több felhasználónak, 4K streaminghez.</li><li>1 Gbps = 125 MB/s. Nagy fájlátvitelek, professzionális használat.</li><li>Az 5G ideális körülmények között elérheti az 1–10 Gbps-t (125–1.250 MB/s).</li>',
    ro: '50 Mbps = 6,25 MB/s. Bun pentru streaming, navigare, apeluri video.</li><li>100 Mbps = 12,5 MB/s. Confortabil pentru mai mulți utilizatori, streaming 4K.</li><li>1 Gbps = 125 MB/s. Transferuri mari de fișiere, utilizare profesională.</li><li>5G poate atinge 1–10 Gbps în condiții ideale (125–1.250 MB/s).</li>',
    fi: '50 Mbps = 6,25 MB/s. Hyvä suoratoistoon, selaamiseen, videopuheluihin.</li><li>100 Mbps = 12,5 MB/s. Mukava useille käyttäjille, 4K-suoratoistoon.</li><li>1 Gbps = 125 MB/s. Suuret tiedostosiirrot, ammattimainen käyttö.</li><li>5G voi saavuttaa 1–10 Gbps ihanteellisissa olosuhteissa (125–1.250 MB/s).</li>',
  }],

  // ═══════════ EL mbps-to-mbs FAQ mixed answer ═══════════
  ['Tatsächliche ταχύτητα ist typischerweise 70–90% davon."', {
    el: 'Η πραγματική ταχύτητα είναι τυπικά 70–90% αυτής."',
  }],
];

let totalFixed = 0;
let filesChanged = 0;

for (const locale of LOCALES) {
  const toolsDir = path.join(DATA, locale, 'tools');
  if (!fs.existsSync(toolsDir)) continue;
  const files = fs.readdirSync(toolsDir).filter(f => f.startsWith('unit-') && f.endsWith('.json'));
  for (const file of files) {
    const filePath = path.join(toolsDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    let changed = false;
    for (const [find, translations] of REPLACEMENTS) {
      const replace = translations[locale];
      if (!replace) continue;
      if (content.includes(find)) {
        content = content.replaceAll(find, replace);
        changed = true;
        totalFixed++;
      }
    }
    if (changed) {
      fs.writeFileSync(filePath, content, 'utf8');
      filesChanged++;
      console.log(`  ✓ ${locale}/${file}`);
    }
  }
}
console.log(`\n✓ Part 6: Fixed ${totalFixed} strings in ${filesChanged} files`);
