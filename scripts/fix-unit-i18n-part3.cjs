/**
 * Part 3: Fix remaining DE/EN contamination — sectionBasic, sectionInfo,
 * practical tips, comparison titles/labels, and FAQ items.
 * Run: node scripts/fix-unit-i18n-part3.cjs
 */
const fs = require('node:fs');
const path = require('node:path');
const DATA = path.join(__dirname, '..', 'data');
const LOCALES = ['el', 'hu', 'ro', 'fi', 'nl'];

const REPLACEMENTS = [
  // ═══════════ inches-to-px-dpi ═══════════
  // sectionBasic EN
  ['US paper sizes and print specifications use inches. To prepare digital artwork, convert to pixels: pixels = inches × DPI.</p><p class=\\"text-mid mb-4\\">US Letter paper (8.5 × 11″) at 300 DPI = 2,550 × 3,300 pixels. A 4 × 6″ photo print at 300 DPI = 1,200 × 1,800 pixels.</p><p class=\\"text-mid mb-4\\">This conversion is essential for preparing images for US print shops, setting up document templates, and calculating required image resolution.</p><p class=\\"text-mid\\">All calculations run locally in your browser — nothing is sent to any server.</p>', {
    el: 'Τα αμερικανικά μεγέθη χαρτιού και οι προδιαγραφές εκτύπωσης χρησιμοποιούν ίντσες. Για την προετοιμασία ψηφιακών έργων, μετατρέψτε σε pixel: pixels = inches × DPI.</p><p class=\\"text-mid mb-4\\">US Letter (8,5 × 11″) στα 300 DPI = 2.550 × 3.300 pixel. Εκτύπωση φωτογραφίας 4 × 6″ στα 300 DPI = 1.200 × 1.800 pixel.</p><p class=\\"text-mid mb-4\\">Αυτή η μετατροπή είναι απαραίτητη για την προετοιμασία εικόνων για τυπογραφεία, τη ρύθμιση προτύπων εγγράφων και τον υπολογισμό της απαιτούμενης ανάλυσης.</p><p class=\\"text-mid\\">Όλοι οι υπολογισμοί εκτελούνται τοπικά στον browser σας.</p>',
    hu: 'Az USA-ban a papírméretek és nyomtatási specifikációk hüvelykben vannak megadva. Digitális munkák előkészítéséhez pixelekre kell konvertálni: pixel = hüvelyk × DPI.</p><p class=\\"text-mid mb-4\\">US Letter (8,5 × 11″) 300 DPI-nál = 2.550 × 3.300 pixel. 4 × 6″ fotónyomtatás 300 DPI-nál = 1.200 × 1.800 pixel.</p><p class=\\"text-mid mb-4\\">Ez az átváltás nélkülözhetetlen képek előkészítéséhez nyomdák számára, dokumentumsablonok beállításához és a szükséges képfelbontás kiszámításához.</p><p class=\\"text-mid\\">Minden számítás helyben, a böngészőjében történik.</p>',
    ro: 'Dimensiunile de hârtie din SUA și specificațiile de tipărire folosesc inch-uri. Pentru pregătirea lucrărilor digitale, convertiți în pixeli: pixeli = inchi × DPI.</p><p class=\\"text-mid mb-4\\">US Letter (8,5 × 11″) la 300 DPI = 2.550 × 3.300 pixeli. Fotografie 4 × 6″ la 300 DPI = 1.200 × 1.800 pixeli.</p><p class=\\"text-mid mb-4\\">Această conversie este esențială pentru pregătirea imaginilor pentru tipografii, configurarea șabloanelor de documente și calculul rezoluției necesare.</p><p class=\\"text-mid\\">Toate calculele se efectuează local în browserul dumneavoastră.</p>',
    fi: 'Yhdysvaltain paperikoot ja tulostuksen määritykset käyttävät tuumia. Digitaalisten töiden valmisteluun muunna pikseleiksi: pikselit = tuumat × DPI.</p><p class=\\"text-mid mb-4\\">US Letter (8,5 × 11″) 300 DPI:llä = 2.550 × 3.300 pikseliä. 4 × 6″ valokuvatuloste 300 DPI:llä = 1.200 × 1.800 pikseliä.</p><p class=\\"text-mid mb-4\\">Tämä muunnos on välttämätön kuvien valmisteluun painoille, asiakirjamallien luomiseen ja tarvittavan kuvaresoluution laskemiseen.</p><p class=\\"text-mid\\">Kaikki laskelmat suoritetaan paikallisesti selaimessasi.</p>',
  }],
  // sectionInfo EN
  ['The formula is simply: pixels = inches × DPI. No additional conversion factor needed since DPI is already dots per inch.</p><p class=\\"text-mid mb-4\\">At 300 DPI: 1 inch = 300 pixels. At 72 DPI: 1 inch = 72 pixels.</p><p class=\\"text-mid\\">To find required DPI: DPI = pixels / inches. A 4,000 px image printed at 8″ wide = 500 DPI.</p>', {
    el: 'Ο τύπος είναι απλός: pixel = ίντσες × DPI. Δεν χρειάζεται επιπλέον συντελεστής μετατροπής αφού το DPI είναι ήδη κουκκίδες ανά ίντσα.</p><p class=\\"text-mid mb-4\\">Στα 300 DPI: 1 ίντσα = 300 pixel. Στα 72 DPI: 1 ίντσα = 72 pixel.</p><p class=\\"text-mid\\">Για να βρείτε το απαιτούμενο DPI: DPI = pixel / ίντσες. Εικόνα 4.000 px εκτυπωμένη σε πλάτος 8″ = 500 DPI.</p>',
    hu: 'A képlet egyszerű: pixel = hüvelyk × DPI. Nincs szükség további átváltási tényezőre, mivel a DPI már pont per hüvelyk.</p><p class=\\"text-mid mb-4\\">300 DPI-nál: 1 hüvelyk = 300 pixel. 72 DPI-nál: 1 hüvelyk = 72 pixel.</p><p class=\\"text-mid\\">A szükséges DPI megtalálásához: DPI = pixel / hüvelyk. Egy 4.000 px-es kép 8″ szélességben nyomtatva = 500 DPI.</p>',
    ro: 'Formula este simplă: pixeli = inchi × DPI. Nu este nevoie de factor suplimentar de conversie deoarece DPI este deja puncte per inch.</p><p class=\\"text-mid mb-4\\">La 300 DPI: 1 inch = 300 pixeli. La 72 DPI: 1 inch = 72 pixeli.</p><p class=\\"text-mid\\">Pentru a găsi DPI-ul necesar: DPI = pixeli / inchi. O imagine de 4.000 px tipărită la 8″ lățime = 500 DPI.</p>',
    fi: 'Kaava on yksinkertainen: pikselit = tuumat × DPI. Muuta muunnoskerrointa ei tarvita, koska DPI on jo pisteitä tuumaa kohti.</p><p class=\\"text-mid mb-4\\">300 DPI:llä: 1 tuuma = 300 pikseliä. 72 DPI:llä: 1 tuuma = 72 pikseliä.</p><p class=\\"text-mid\\">Tarvittavan DPI:n löytämiseen: DPI = pikselit / tuumat. 4.000 px:n kuva tulostettuna 8″ leveänä = 500 DPI.</p>',
  }],
  // practical tips EN
  ['Photo prints: 4×6″ at 300 DPI = 1,200×1,800 px (2.16 MP minimum).</li><li>US Letter: 8.5×11″ at 300 DPI = 2,550×3,300 px.</li><li>US Tabloid: 11×17″ at 300 DPI = 3,300×5,100 px.</li><li>Retina display: effective 2× DPI. A "72 DPI" screen image actually needs 144 px per inch on Retina.</li>', {
    el: 'Εκτυπώσεις φωτογραφιών: 4×6″ στα 300 DPI = 1.200×1.800 px (ελάχιστο 2,16 MP).</li><li>US Letter: 8,5×11″ στα 300 DPI = 2.550×3.300 px.</li><li>US Tabloid: 11×17″ στα 300 DPI = 3.300×5.100 px.</li><li>Οθόνη Retina: αποτελεσματικό 2× DPI. Μια εικόνα "72 DPI" χρειάζεται στην πραγματικότητα 144 px ανά ίντσα σε Retina.</li>',
    hu: 'Fotónyomtatás: 4×6″ 300 DPI-nál = 1.200×1.800 px (minimum 2,16 MP).</li><li>US Letter: 8,5×11″ 300 DPI-nál = 2.550×3.300 px.</li><li>US Tabloid: 11×17″ 300 DPI-nál = 3.300×5.100 px.</li><li>Retina kijelző: tényleges 2× DPI. Egy "72 DPI" képernyőkép valójában 144 px/hüvelyk Retinán.</li>',
    ro: 'Tipărire foto: 4×6″ la 300 DPI = 1.200×1.800 px (minimum 2,16 MP).</li><li>US Letter: 8,5×11″ la 300 DPI = 2.550×3.300 px.</li><li>US Tabloid: 11×17″ la 300 DPI = 3.300×5.100 px.</li><li>Ecran Retina: DPI efectiv 2×. O imagine "72 DPI" necesită de fapt 144 px pe inch pe Retina.</li>',
    fi: 'Valokuvatulosteet: 4×6″ 300 DPI:llä = 1.200×1.800 px (vähintään 2,16 MP).</li><li>US Letter: 8,5×11″ 300 DPI:llä = 2.550×3.300 px.</li><li>US Tabloid: 11×17″ 300 DPI:llä = 3.300×5.100 px.</li><li>Retina-näyttö: tehokas 2× DPI. "72 DPI" näyttökuva tarvitsee itse asiassa 144 px tuumaa kohti Retinalla.</li>',
  }],
  // comparison title+labels EN
  ['"title": "Common print sizes at 300 DPI"', { el: '"title": "Συνήθη μεγέθη εκτύπωσης στα 300 DPI"', hu: '"title": "Gyakori nyomtatási méretek 300 DPI-nál"', ro: '"title": "Dimensiuni comune de tipărire la 300 DPI"', fi: '"title": "Yleiset tulostuskoot 300 DPI:llä"' }],
  ['"featureLabel": "Print size"', { el: '"featureLabel": "Μέγεθος εκτύπωσης"', hu: '"featureLabel": "Nyomtatási méret"', ro: '"featureLabel": "Dimensiune tipărire"', fi: '"featureLabel": "Tulostuskoko"' }],
  ['"name": "Wallet"', { el: '"name": "Πορτοφόλι"', hu: '"name": "Pénztárca"', ro: '"name": "Portofel"', fi: '"name": "Lompakko"' }],
  ['"name": "4×6 photo"', { el: '"name": "Φωτογραφία 4×6"', hu: '"name": "4×6 fotó"', ro: '"name": "Foto 4×6"', fi: '"name": "4×6 valokuva"' }],
  ['"name": "8×10 photo"', { el: '"name": "Φωτογραφία 8×10"', hu: '"name": "8×10 fotó"', ro: '"name": "Foto 8×10"', fi: '"name": "8×10 valokuva"' }],
  ['"name": "Poster (24×36)"', { el: '"name": "Αφίσα (24×36)"', hu: '"name": "Poszter (24×36)"', ro: '"name": "Poster (24×36)"', fi: '"name": "Juliste (24×36)"' }],
  // FAQ DE
  ['"Pixel sind 1 Zoll bei 300 DPI?"', { el: '"pixel είναι 1 ίντσα στα 300 DPI;"', hu: '"pixel 1 hüvelyk 300 DPI-nál?"', ro: '"pixeli sunt 1 inch la 300 DPI?"', fi: '"pikseliä on 1 tuuma 300 DPI:llä?"' }],
  ['"answer": "1 Zoll bei 300 DPI = 300 Pixel."', { el: '"answer": "1 ίντσα στα 300 DPI = 300 pixel."', hu: '"answer": "1 hüvelyk 300 DPI-nál = 300 pixel."', ro: '"answer": "1 inch la 300 DPI = 300 pixeli."', fi: '"answer": "1 tuuma 300 DPI:llä = 300 pikseliä."' }],

  // ═══════════ hex-to-rgb (DE sectionBasic for HU/RO/FI) ═══════════
  ['HEX-Farben (#FF5733) und RGB (rgb(255, 87, 51)) stellen dieselbe', {
    hu: 'A HEX-színek (#FF5733) és az RGB (rgb(255, 87, 51)) ugyanazt a',
    ro: 'Culorile HEX (#FF5733) și RGB (rgb(255, 87, 51)) reprezintă aceeași',
    fi: 'HEX-värit (#FF5733) ja RGB (rgb(255, 87, 51)) edustavat samaa',
  }],
  ['Farbe dar, nur in unterschiedlicher Notation', {
    hu: 'színt képviselik, csak eltérő jelölésben',
    ro: 'culoare, doar în notație diferită',
    fi: 'väriä, vain eri merkintätavalla',
  }],
  ['ist ein kompakteres Format; RGB wird für CSS rgba(), JavaScript-Farbmanipulation und programmatische Farbberechnung benötigt.', {
    hu: 'egy kompaktabb formátum; az RGB-re a CSS rgba(), a JavaScript színmanipuláció és a programatikus színszámítás számára van szükség.',
    ro: 'este un format mai compact; RGB este necesar pentru CSS rgba(), manipularea culorilor în JavaScript și calculul programatic al culorilor.',
    fi: 'on kompaktimpi muoto; RGB:tä tarvitaan CSS rgba():ssa, JavaScriptin värikäsittelyssä ja ohjelmallisessa värilaskennassa.',
  }],

  // ═══════════ bytes-converter (EN sectionBasic) ═══════════
  ['Digital storage is measured in bytes and its multiples: kilobytes (KB), megabytes (M', {
    el: 'Η ψηφιακή αποθήκευση μετριέται σε bytes και τα πολλαπλάσιά τους: kilobytes (KB), megabytes (M',
    hu: 'A digitális tárhely bájtokban és azok többszöröseiben mérhető: kilobájt (KB), megabájt (M',
    ro: 'Stocarea digitală se măsoară în octeți și multiplii acestora: kiloocteți (KB), megaocteți (M',
  }],

  // ═══════════ mbps-to-mbs (EN sectionBasic) ═══════════
  ['Internet speeds are advertised in megabits per second (Mbps), but file sizes and dow', {
    el: 'Οι ταχύτητες internet διαφημίζονται σε megabits ανά δευτερόλεπτο (Mbps), αλλά τα μεγέθη αρχείων και οι λήψεις',
    hu: 'Az internetsebességeket megabit per másodpercben (Mbps) hirdetik, de a fájlméretek és a letöltések',
    ro: 'Vitezele de internet sunt promovate în megabiți pe secundă (Mbps), dar dimensiunile fișierelor și descărcările',
  }],

  // ═══════════ mm-to-px-dpi (EN sectionInfo + practical tips) ═══════════
  ['The formula is: pixels = mm × DPI / 25.4. Since 1 inch = 25.4 mm exactly.</p><p class=\\"text-mid mb-4\\">At 300 DPI: 1 mm = 11.811 pixels. At 600 DPI: 1 mm = 23.622 pixels.</p><p class=\\"text-mid\\">For bleed area: add 3 mm (standard) to each edge. A 100 × 50 mm design with 3 mm bleed = 106 × 56 mm = 1,252 × 661 px at 300 DPI.</p>', {
    el: 'Ο τύπος είναι: pixel = mm × DPI / 25,4. Αφού 1 ίντσα = 25,4 mm ακριβώς.</p><p class=\\"text-mid mb-4\\">Στα 300 DPI: 1 mm = 11,811 pixel. Στα 600 DPI: 1 mm = 23,622 pixel.</p><p class=\\"text-mid\\">Για περιοχή bleed: προσθέστε 3 mm (τυπικό) σε κάθε πλευρά. Σχέδιο 100 × 50 mm με 3 mm bleed = 106 × 56 mm = 1.252 × 661 px στα 300 DPI.</p>',
    hu: 'A képlet: pixel = mm × DPI / 25,4. Mivel 1 hüvelyk = pontosan 25,4 mm.</p><p class=\\"text-mid mb-4\\">300 DPI-nál: 1 mm = 11,811 pixel. 600 DPI-nál: 1 mm = 23,622 pixel.</p><p class=\\"text-mid\\">Kifutó területhez: adjon hozzá 3 mm-t (szabványos) minden szélhez. Egy 100 × 50 mm-es terv 3 mm kifutóval = 106 × 56 mm = 1.252 × 661 px 300 DPI-nál.</p>',
    ro: 'Formula este: pixeli = mm × DPI / 25,4. Deoarece 1 inch = exact 25,4 mm.</p><p class=\\"text-mid mb-4\\">La 300 DPI: 1 mm = 11,811 pixeli. La 600 DPI: 1 mm = 23,622 pixeli.</p><p class=\\"text-mid\\">Pentru zona de bleed: adăugați 3 mm (standard) la fiecare margine. Un design de 100 × 50 mm cu 3 mm bleed = 106 × 56 mm = 1.252 × 661 px la 300 DPI.</p>',
    fi: 'Kaava on: pikselit = mm × DPI / 25,4. Koska 1 tuuma = tasan 25,4 mm.</p><p class=\\"text-mid mb-4\\">300 DPI:llä: 1 mm = 11,811 pikseliä. 600 DPI:llä: 1 mm = 23,622 pikseliä.</p><p class=\\"text-mid\\">Leikkuuvaraa varten: lisää 3 mm (vakio) jokaiseen reunaan. 100 × 50 mm suunnitelma 3 mm leikkuuvaralla = 106 × 56 mm = 1.252 × 661 px 300 DPI:llä.</p>',
  }],
  ['Business card: 85 × 55 mm + 3 mm bleed = 91 × 61 mm = 1,075 × 720 px at 300 DPI.</li><li>Standard label: 50 × 25 mm at 300 DPI = 591 × 295 px.</li><li>Wine label: 90 × 120 mm at 300 DPI = 1,063 × 1,417 px.</li><li>Minimum text: 8pt font needs at least 150 DPI to be readable.</li>', {
    el: 'Κάρτα: 85 × 55 mm + 3 mm bleed = 91 × 61 mm = 1.075 × 720 px στα 300 DPI.</li><li>Ετικέτα: 50 × 25 mm στα 300 DPI = 591 × 295 px.</li><li>Ετικέτα κρασιού: 90 × 120 mm στα 300 DPI = 1.063 × 1.417 px.</li><li>Ελάχιστο κείμενο: γραμματοσειρά 8pt χρειάζεται τουλάχιστον 150 DPI για αναγνωσιμότητα.</li>',
    hu: 'Névjegykártya: 85 × 55 mm + 3 mm kifutó = 91 × 61 mm = 1.075 × 720 px 300 DPI-nál.</li><li>Címke: 50 × 25 mm 300 DPI-nál = 591 × 295 px.</li><li>Borcímke: 90 × 120 mm 300 DPI-nál = 1.063 × 1.417 px.</li><li>Minimum szöveg: 8pt betűmérethez legalább 150 DPI szükséges az olvashatósághoz.</li>',
    ro: 'Carte de vizită: 85 × 55 mm + 3 mm bleed = 91 × 61 mm = 1.075 × 720 px la 300 DPI.</li><li>Etichetă: 50 × 25 mm la 300 DPI = 591 × 295 px.</li><li>Etichetă vin: 90 × 120 mm la 300 DPI = 1.063 × 1.417 px.</li><li>Text minim: font 8pt necesită cel puțin 150 DPI pentru lizibilitate.</li>',
    fi: 'Käyntikortti: 85 × 55 mm + 3 mm leikkuuvara = 91 × 61 mm = 1.075 × 720 px 300 DPI:llä.</li><li>Tarra: 50 × 25 mm 300 DPI:llä = 591 × 295 px.</li><li>Viinietiketti: 90 × 120 mm 300 DPI:llä = 1.063 × 1.417 px.</li><li>Minimiteksti: 8pt fontti vaatii vähintään 150 DPI:n luettavuuteen.</li>',
  }],
  // mm-to-px-dpi FAQ DE
  ['"Pixel sind 1 mm bei 300 DPI?"', { el: '"pixel είναι 1 mm στα 300 DPI;"', hu: '"pixel 1 mm 300 DPI-nál?"', ro: '"pixeli sunt 1 mm la 300 DPI?"', fi: '"pikseliä on 1 mm 300 DPI:llä?"' }],
  ['"answer": "1 mm bei 300 DPI = 11,811 Pixel."', { el: '"answer": "1 mm στα 300 DPI = 11,811 pixel."', hu: '"answer": "1 mm 300 DPI-nál = 11,811 pixel."', ro: '"answer": "1 mm la 300 DPI = 11,811 pixeli."', fi: '"answer": "1 mm 300 DPI:llä = 11,811 pikseliä."' }],

  // ═══════════ cm-to-px-dpi remaining FAQ DE ═══════════
  ['"Pixel sind 1 cm bei 300 DPI?"', { hu: '"pixel 1 cm 300 DPI-nál?"', ro: '"pixeli sunt 1 cm la 300 DPI?"' }],
  ['"answer": "1 cm bei 300 DPI = 118,11 Pixel."', { hu: '"answer": "1 cm 300 DPI-nál = 118,11 pixel."', ro: '"answer": "1 cm la 300 DPI = 118,11 pixeli."' }],
  ['"answer": "Ja. Alle Berechnungen erfolgen in Ihrem Browser."', { hu: '"answer": "Igen. Minden számítás a böngészőjében történik."', ro: '"answer": "Da. Toate calculele se efectuează în browserul dumneavoastră."' }],

  // ═══════════ em-to-px remaining EN practical tips ═══════════
  ['Default browser font: 16px. 1em = 16px, 0.875em = 14px, 1.25em = 20px.</li><li>Common heading sizes: h1 = 2em (32px), h2 = 1.5em (24px), h3 = 1.17em (18.7px).</li><li>Padding/margin in em scales with font size — useful for responsive components.</li><li>62.5% trick: setting html font-size to 62.5% makes 1em = 10px for easier math.</li>', {
    hu: 'Alapértelmezett böngésző betűméret: 16px. 1em = 16px, 0,875em = 14px, 1,25em = 20px.</li><li>Gyakori címsor méretek: h1 = 2em (32px), h2 = 1,5em (24px), h3 = 1,17em (18,7px).</li><li>Az em padding/margin a betűmérettel skálázódik — hasznos reszponzív komponensekhez.</li><li>62,5%-os trükk: html font-size 62,5%-ra állítva 1em = 10px az egyszerűbb számoláshoz.</li>',
    ro: 'Font implicit browser: 16px. 1em = 16px, 0,875em = 14px, 1,25em = 20px.</li><li>Dimensiuni comune titluri: h1 = 2em (32px), h2 = 1,5em (24px), h3 = 1,17em (18,7px).</li><li>Padding/margin în em se scalează cu dimensiunea fontului — util pentru componente responsive.</li><li>Trucul 62,5%: setând html font-size la 62,5%, 1em = 10px pentru calcule mai ușoare.</li>',
  }],
  // em-to-px remaining FAQ DE
  ['"Pixel sind 1em?"', { hu: '"pixel 1em?"', ro: '"pixeli sunt 1em?"' }],

  // ═══════════ rem-to-px remaining EN practical tips ═══════════
  ['At 16px root: 0.75rem = 12px, 0.875rem = 14px, 1rem = 16px, 1.25rem = 20px, 1.5rem = 24px, 2rem = 32px.</li><li>Tailwind: text-sm = 0.875rem (14px), text-base = 1rem (16px), text-lg = 1.125rem (18px).</li><li>Minimum touch target: WCAG recommends 44×44px = 2.75rem at 16px root.</li><li>Media queries in rem: @media (min-width: 48rem) = 768px at 16px root.</li>', {
    hu: '16px gyökérnél: 0,75rem = 12px, 0,875rem = 14px, 1rem = 16px, 1,25rem = 20px, 1,5rem = 24px, 2rem = 32px.</li><li>Tailwind: text-sm = 0,875rem (14px), text-base = 1rem (16px), text-lg = 1,125rem (18px).</li><li>Minimális érintési cél: a WCAG 44×44px-t javasol = 2,75rem 16px gyökérnél.</li><li>Media query rem-ben: @media (min-width: 48rem) = 768px 16px gyökérnél.</li>',
    ro: 'La rădăcină de 16px: 0,75rem = 12px, 0,875rem = 14px, 1rem = 16px, 1,25rem = 20px, 1,5rem = 24px, 2rem = 32px.</li><li>Tailwind: text-sm = 0,875rem (14px), text-base = 1rem (16px), text-lg = 1,125rem (18px).</li><li>Țintă minimă de atingere: WCAG recomandă 44×44px = 2,75rem la rădăcină de 16px.</li><li>Media queries în rem: @media (min-width: 48rem) = 768px la rădăcină de 16px.</li>',
    fi: '16px juurella: 0,75rem = 12px, 0,875rem = 14px, 1rem = 16px, 1,25rem = 20px, 1,5rem = 24px, 2rem = 32px.</li><li>Tailwind: text-sm = 0,875rem (14px), text-base = 1rem (16px), text-lg = 1,125rem (18px).</li><li>Minimikosketuskohde: WCAG suosittelee 44×44px = 2,75rem 16px juurella.</li><li>Media queryt rem-arvoissa: @media (min-width: 48rem) = 768px 16px juurella.</li>',
  }],
  // rem-to-px FAQ DE remaining
  ['"Pixel sind 1rem?"', { ro: '"pixeli sunt 1rem?"' }],
  ['"Standardmäßig 1rem = 16px. Änderbar durch Anpassung der Wurzel-Schriftgröße."', { ro: '"Implicit 1rem = 16px. Modificabil prin ajustarea dimensiunii fontului rădăcină."' }],

  // ═══════════ pt-to-px remaining FAQ for RO ═══════════
  ['"Pixel sind 12 pt?"', { ro: '"pixeli sunt 12 pt?"' }],
  ['"answer": "12 pt = 16 px bei 96 PPI. Das este unitatea standardă-Schriftgröße der Browser."', { ro: '"answer": "12 pt = 16 px la 96 PPI. Aceasta este dimensiunea standard a fontului browserelor."' }],

  // ═══════════ unix-timestamp remaining EN sectionInfo ═══════════
  ['Unix time counts seconds from the epoch: January 1, 1970, 00:00:00 UTC. This date wa', {
    el: 'Ο χρόνος Unix μετράει δευτερόλεπτα από τη στιγμή αναφοράς: 1 Ιανουαρίου 1970, 00:00:00 UTC. Αυτή η ημερομηνία ε',
    hu: 'A Unix idő az epochából számolt másodperceket jelenti: 1970. január 1., 00:00:00 UTC. Ezt a dátumot a',
    ro: 'Timpul Unix numără secundele de la epoca de referință: 1 ianuarie 1970, 00:00:00 UTC. Această dată a fost a',
    fi: 'Unix-aika laskee sekunteja epookista: 1. tammikuuta 1970, 00:00:00 UTC. Tämä päivämäärä va',
  }],

  // ═══════════ vw-to-px remaining DE FAQ ═══════════
  ['"answer": "1vw = 1% der Viewport-Breite. Bei 1920px: 19,2px. Bei 375px: 3,75px."', {
    el: '"answer": "1vw = 1% του πλάτους viewport. Σε 1920px: 19,2px. Σε 375px: 3,75px."',
    hu: '"answer": "1vw = a viewport szélességének 1%-a. 1920px-nél: 19,2px. 375px-nél: 3,75px."',
    ro: '"answer": "1vw = 1% din lățimea viewport-ului. La 1920px: 19,2px. La 375px: 3,75px."',
  }],
  // vw-to-px EL FAQ question
  ['"Πόσο μακρύe dauert 1 GB Download bei 100 Mbps?"', { el: '"Πόσο χρόνο χρειάζεται η λήψη 1 GB με 100 Mbps;"' }],
  // mbps-to-mbs RO FAQ question
  ['"Cât de lunge dauert 1 GB Download bei 100 Mbps?"', { ro: '"Cât durează descărcarea a 1 GB la 100 Mbps?"' }],
  // tw-to-px RO FAQ
  ['"answer": "p-4 = 1rem = 16px bei der Standard-Wurzelschriftgröße."', { ro: '"answer": "p-4 = 1rem = 16px la dimensiunea standard a fontului rădăcină."' }],

  // ═══════════ pt-to-px remaining EN practical tips ═══════════
  ['Browser default: 12 pt = 16 px = 1 rem.</li><li>Common conversions: 8 pt = 10.7 px, 10 pt = 13.3 px, 11 pt = 14.7 px, 12 pt = 16 px, 14 pt = 18.7 px.</li><li>Word default body: 11 pt = 14.7 px. Google Docs: 11 pt.</li><li>Minimum readable: 9 pt = 12 px on screen. Print can be smaller (6–7 pt fine print).</li>', {
    el: 'Προεπιλογή browser: 12 pt = 16 px = 1 rem.</li><li>Συνήθεις μετατροπές: 8 pt = 10,7 px, 10 pt = 13,3 px, 11 pt = 14,7 px, 12 pt = 16 px, 14 pt = 18,7 px.</li><li>Προεπιλογή Word: 11 pt = 14,7 px. Google Docs: 11 pt.</li><li>Ελάχιστο αναγνώσιμο: 9 pt = 12 px σε οθόνη. Η εκτύπωση μπορεί να είναι μικρότερη (6–7 pt ψιλά γράμματα).</li>',
    hu: 'Böngésző alapértelmezés: 12 pt = 16 px = 1 rem.</li><li>Gyakori átváltások: 8 pt = 10,7 px, 10 pt = 13,3 px, 11 pt = 14,7 px, 12 pt = 16 px, 14 pt = 18,7 px.</li><li>Word alapértelmezés: 11 pt = 14,7 px. Google Docs: 11 pt.</li><li>Minimum olvasható: 9 pt = 12 px képernyőn. Nyomtatásban kisebb is lehet (6–7 pt apró betűs).</li>',
    ro: 'Implicit browser: 12 pt = 16 px = 1 rem.</li><li>Conversii comune: 8 pt = 10,7 px, 10 pt = 13,3 px, 11 pt = 14,7 px, 12 pt = 16 px, 14 pt = 18,7 px.</li><li>Implicit Word: 11 pt = 14,7 px. Google Docs: 11 pt.</li><li>Minim lizibil: 9 pt = 12 px pe ecran. Tipărirea poate fi mai mică (6–7 pt caractere mici).</li>',
    fi: 'Selaimen oletus: 12 pt = 16 px = 1 rem.</li><li>Yleisiä muunnoksia: 8 pt = 10,7 px, 10 pt = 13,3 px, 11 pt = 14,7 px, 12 pt = 16 px, 14 pt = 18,7 px.</li><li>Wordin oletus: 11 pt = 14,7 px. Google Docs: 11 pt.</li><li>Minimikoko luettavuuteen: 9 pt = 12 px näytöllä. Tulostus voi olla pienempi (6–7 pt pieni teksti).</li>',
  }],

  // ═══════════ cm-to-px-dpi remaining EN practical tips ═══════════
  ['300 DPI (print quality): A4 = 2,480 × 3,508 px, A3 = 3,508 × 4,961 px.</li><li>150 DPI (large format): A2 poster = 2,480 × 3,508 px.</li><li>72 DPI (screen): 10 cm = 283 px, 20 cm = 567 px.</li><li>12 MP camera (4,000 × 3,000 px) prints up to 33.9 × 25.4 cm at 300 DPI.</li>', {
    hu: '300 DPI (nyomtatási minőség): A4 = 2.480 × 3.508 px, A3 = 3.508 × 4.961 px.</li><li>150 DPI (nagy formátum): A2 poszter = 2.480 × 3.508 px.</li><li>72 DPI (képernyő): 10 cm = 283 px, 20 cm = 567 px.</li><li>12 MP kamera (4.000 × 3.000 px) maximum 33,9 × 25,4 cm-es nyomtatást ad 300 DPI-nál.</li>',
    ro: '300 DPI (calitate tipărire): A4 = 2.480 × 3.508 px, A3 = 3.508 × 4.961 px.</li><li>150 DPI (format mare): Poster A2 = 2.480 × 3.508 px.</li><li>72 DPI (ecran): 10 cm = 283 px, 20 cm = 567 px.</li><li>Cameră 12 MP (4.000 × 3.000 px) tipărește până la 33,9 × 25,4 cm la 300 DPI.</li>',
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
console.log(`\n✓ Part 3: Fixed ${totalFixed} strings in ${filesChanged} files`);
