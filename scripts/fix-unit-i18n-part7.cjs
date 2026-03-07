/**
 * Part 7: Comprehensive fix for ALL remaining EN/DE contamination.
 * Handles comparison table feature names/values, sectionInfo, practical tips, FAQ.
 * Run: node scripts/fix-unit-i18n-part7.cjs
 */
const fs = require('node:fs');
const path = require('node:path');
const DATA = path.join(__dirname, '..', 'data');

// ═══════════════════════════════════════════════════════════════
// COMPARISON TABLE FEATURE NAME TRANSLATIONS
// ═══════════════════════════════════════════════════════════════
const FEAT_NAMES = {
  // dec-to-bin
  'Digits': { el: 'Ψηφία', hu: 'Számjegyek', ro: 'Cifre', fi: 'Numerot' },
  'Used by': { el: 'Χρήση', hu: 'Használja', ro: 'Utilizat de', fi: 'Käyttäjä' },
  'Example: 42': { el: 'Παράδειγμα: 42', hu: 'Példa: 42', ro: 'Exemplu: 42', fi: 'Esimerkki: 42' },
  'Example: 255': { el: 'Παράδειγμα: 255', hu: 'Példa: 255', ro: 'Exemplu: 255', fi: 'Esimerkki: 255' },
  'Readability': { el: 'Αναγνωσιμότητα', hu: 'Olvashatóság', ro: 'Lizibilitate', fi: 'Luettavuus' },
  // dec-to-hex
  'Example: 1000': { el: 'Παράδειγμα: 1000', hu: 'Példa: 1000', ro: 'Exemplu: 1000', fi: 'Esimerkki: 1000' },
  'Used for': { el: 'Χρήση', hu: 'Felhasználás', ro: 'Utilizare', fi: 'Käyttö' },
  'Compactness': { el: 'Συμπαγές', hu: 'Tömörség', ro: 'Compactitate', fi: 'Tiiviys' },
  // dpi-to-ppi
  'Applies to': { el: 'Εφαρμόζεται σε', hu: 'Alkalmazás', ro: 'Se aplică la', fi: 'Koskee' },
  'Measures': { el: 'Μετράει', hu: 'Méri', ro: 'Măsoară', fi: 'Mittaa' },
  'Typical values': { el: 'Τυπικές τιμές', hu: 'Tipikus értékek', ro: 'Valori tipice', fi: 'Tyypilliset arvot' },
  'Print quality': { el: 'Ποιότητα εκτύπωσης', hu: 'Nyomtatási minőség', ro: 'Calitate tipărire', fi: 'Tulostuslaatu' },
  'Common confusion': { el: 'Συνηθισμένη σύγχυση', hu: 'Gyakori tévhit', ro: 'Confuzie frecventă', fi: 'Yleinen sekaannus' },
  // rgb-to-cmyk
  'Model': { el: 'Μοντέλο', hu: 'Modell', ro: 'Model', fi: 'Malli' },
  'Gamut': { el: 'Γκάμα', hu: 'Színtér', ro: 'Gamut', fi: 'Väriavaruus' },
  'Black': { el: 'Μαύρο', hu: 'Fekete', ro: 'Negru', fi: 'Musta' },
  'White': { el: 'Λευκό', hu: 'Fehér', ro: 'Alb', fi: 'Valkoinen' },
  // rgb-to-hsl
  'Values': { el: 'Τιμές', hu: 'Értékek', ro: 'Valori', fi: 'Arvot' },
  'Intuitive': { el: 'Διαισθητικό', hu: 'Intuitív', ro: 'Intuitiv', fi: 'Intuitiivinen' },
  'Color theory': { el: 'Θεωρία χρώματος', hu: 'Színelmélet', ro: 'Teoria culorii', fi: 'Väriteoria' },
  'CSS support': { el: 'Υποστήριξη CSS', hu: 'CSS támogatás', ro: 'Suport CSS', fi: 'CSS-tuki' },
  // hex-to-rgb
  'Format': { el: 'Μορφή', hu: 'Formátum', ro: 'Format', fi: 'Muoto' },
  'Opacity': { el: 'Αδιαφάνεια', hu: 'Átlátszatlanság', ro: 'Opacitate', fi: 'Läpinäkyvyys' },
  'Shorthand': { el: 'Συντόμευση', hu: 'Rövidítés', ro: 'Prescurtare', fi: 'Lyhenne' },
  // bytes-converter
  'Multiplier': { el: 'Πολλαπλασιαστής', hu: 'Szorzó', ro: 'Multiplicator', fi: 'Kerroin' },
  'Units': { el: 'Μονάδες', hu: 'Egységek', ro: 'Unități', fi: 'Yksiköt' },
  '1 TB equals': { el: '1 TB ισούται', hu: '1 TB egyenlő', ro: '1 TB echivalent', fi: '1 TB vastaa' },
  'Difference at 1 TB': { el: 'Διαφορά στο 1 TB', hu: 'Különbség 1 TB-nál', ro: 'Diferență la 1 TB', fi: 'Ero 1 TB:ssä' },
  // unix-timestamp
  'Example': { el: 'Παράδειγμα', hu: 'Példa', ro: 'Exemplu', fi: 'Esimerkki' },
};

// ═══════════════════════════════════════════════════════════════
// COMPARISON TABLE FEATURE VALUE TRANSLATIONS
// ═══════════════════════════════════════════════════════════════
const FEAT_VALS = {
  // dec-to-bin
  'Humans': { el: 'Άνθρωποι', hu: 'Emberek', ro: 'Oameni', fi: 'Ihmiset' },
  'Computers': { el: 'Υπολογιστές', hu: 'Számítógépek', ro: 'Calculatoare', fi: 'Tietokoneet' },
  'Easy for humans': { el: 'Εύκολο για ανθρώπους', hu: 'Könnyű az embereknek', ro: 'Ușor pentru oameni', fi: 'Helppo ihmisille' },
  'Long but computer-native': { el: 'Μεγάλο αλλά φυσικό για υπολογιστές', hu: 'Hosszú, de a számítógép natív nyelve', ro: 'Lung dar nativ pentru calculatoare', fi: 'Pitkä mutta tietokoneelle luonnollinen' },
  // dec-to-hex
  'Everyday math': { el: 'Καθημερινά μαθηματικά', hu: 'Mindennapi matematika', ro: 'Matematică zilnică', fi: 'Jokapäiväinen laskenta' },
  'Colors, addresses, data': { el: 'Χρώματα, διευθύνσεις, δεδομένα', hu: 'Színek, címek, adatok', ro: 'Culori, adrese, date', fi: 'Värit, osoitteet, data' },
  'Standard': { el: 'Τυπικό', hu: 'Szabványos', ro: 'Standard', fi: 'Standardi' },
  'More compact than binary': { el: 'Πιο συμπαγές από το δυαδικό', hu: 'Tömörebb a binárisnál', ro: 'Mai compact decât binar', fi: 'Tiiviimpi kuin binääri' },
  // dpi-to-ppi
  'Printers': { el: 'Εκτυπωτές', hu: 'Nyomtatók', ro: 'Imprimante', fi: 'Tulostimet' },
  'Screens and images': { el: 'Οθόνες και εικόνες', hu: 'Képernyők és képek', ro: 'Ecrane și imagini', fi: 'Näytöt ja kuvat' },
  'Physical ink dots': { el: 'Φυσικές κουκκίδες μελανιού', hu: 'Fizikai tintapontok', ro: 'Puncte fizice de cerneală', fi: 'Fyysiset mustepisteet' },
  'Digital pixels': { el: 'Ψηφιακά pixel', hu: 'Digitális pixelek', ro: 'Pixeli digitali', fi: 'Digitaaliset pikselit' },
  'Higher = finer detail': { el: 'Υψηλότερο = λεπτότερη λεπτομέρεια', hu: 'Magasabb = finomabb részletek', ro: 'Mai mare = detalii mai fine', fi: 'Korkeampi = tarkempi yksityiskohta' },
  '300 PPI standard': { el: '300 PPI πρότυπο', hu: '300 PPI szabvány', ro: '300 PPI standard', fi: '300 PPI standardi' },
  'Used for images (incorrectly)': { el: 'Χρήση για εικόνες (λανθασμένα)', hu: 'Képekhez használják (helytelenül)', ro: 'Folosit pentru imagini (incorect)', fi: 'Käytetään kuvista (virheellisesti)' },
  'Correct term for images': { el: 'Σωστός όρος για εικόνες', hu: 'Helyes kifejezés képekre', ro: 'Termen corect pentru imagini', fi: 'Oikea termi kuville' },
  // rgb-to-cmyk
  'Additive (light)': { el: 'Προσθετικό (φως)', hu: 'Additív (fény)', ro: 'Aditiv (lumină)', fi: 'Additiivinen (valo)' },
  'Subtractive (ink)': { el: 'Αφαιρετικό (μελάνι)', hu: 'Szubtraktív (tinta)', ro: 'Substractiv (cerneală)', fi: 'Subtraktiivinen (muste)' },
  'Screens, web': { el: 'Οθόνες, web', hu: 'Képernyők, web', ro: 'Ecrane, web', fi: 'Näytöt, web' },
  'Print, packaging': { el: 'Εκτύπωση, συσκευασία', hu: 'Nyomtatás, csomagolás', ro: 'Tipărire, ambalare', fi: 'Tulostus, pakkaus' },
  'Wider (more colors)': { el: 'Ευρύτερο (περισσότερα χρώματα)', hu: 'Szélesebb (több szín)', ro: 'Mai larg (mai multe culori)', fi: 'Laajempi (enemmän värejä)' },
  'Narrower': { el: 'Στενότερο', hu: 'Szűkebb', ro: 'Mai îngust', fi: 'Kapeampi' },
  'No ink (paper)': { el: 'Χωρίς μελάνι (χαρτί)', hu: 'Nincs tinta (papír)', ro: 'Fără cerneală (hârtie)', fi: 'Ei mustetta (paperi)' },
  // rgb-to-hsl
  'Additive channels': { el: 'Προσθετικά κανάλια', hu: 'Additív csatornák', ro: 'Canale aditive', fi: 'Additiiviset kanavat' },
  'Hue/Saturation/Lightness': { el: 'Απόχρωση/Κορεσμός/Φωτεινότητα', hu: 'Árnyalat/Telítettség/Világosság', ro: 'Nuanță/Saturație/Luminozitate', fi: 'Sävy/Kylläisyys/Kirkkaus' },
  'Hard to predict colors': { el: 'Δύσκολη πρόβλεψη χρωμάτων', hu: 'Nehéz a színek előrejelzése', ro: 'Greu de prezis culorile', fi: 'Vaikea ennustaa värejä' },
  'Easy to adjust colors': { el: 'Εύκολη ρύθμιση χρωμάτων', hu: 'Könnyű a színek módosítása', ro: 'Ușor de ajustat culorile', fi: 'Helppo säätää värejä' },
  'Not color-wheel based': { el: 'Δεν βασίζεται σε χρωματικό κύκλο', hu: 'Nem színkör alapú', ro: 'Nu se bazează pe roata culorilor', fi: 'Ei perustu väriympyrään' },
  'Maps to color wheel': { el: 'Αντιστοιχεί στον χρωματικό κύκλο', hu: 'Színkörre vetíthető', ro: 'Se mapează pe roata culorilor', fi: 'Vastaa väriympyrää' },
  // hex-to-rgb
  'No shorthand': { el: 'Χωρίς συντόμευση', hu: 'Nincs rövidítés', ro: 'Fără prescurtare', fi: 'Ei lyhennettä' },
  'CSS, design tools': { el: 'CSS, εργαλεία σχεδιασμού', hu: 'CSS, tervezőeszközök', ro: 'CSS, instrumente de design', fi: 'CSS, suunnittelutyökalut' },
  'CSS, programming': { el: 'CSS, προγραμματισμός', hu: 'CSS, programozás', ro: 'CSS, programare', fi: 'CSS, ohjelmointi' },
  // bytes-converter
  'Storage manufacturers': { el: 'Κατασκευαστές αποθήκευσης', hu: 'Tároló gyártók', ro: 'Producători de stocare', fi: 'Tallennusvalmistajat' },
  'Operating systems, RAM': { el: 'Λειτουργικά συστήματα, RAM', hu: 'Operációs rendszerek, RAM', ro: 'Sisteme de operare, RAM', fi: 'Käyttöjärjestelmät, RAM' },
  // unix-timestamp
  'PHP, Python, MySQL': { el: 'PHP, Python, MySQL', hu: 'PHP, Python, MySQL', ro: 'PHP, Python, MySQL', fi: 'PHP, Python, MySQL' },
  'JavaScript, Java': { el: 'JavaScript, Java', hu: 'JavaScript, Java', ro: 'JavaScript, Java', fi: 'JavaScript, Java' },
};

// ═══════════════════════════════════════════════════════════════
// SECTION INFO TITLE TRANSLATIONS
// ═══════════════════════════════════════════════════════════════
const INFO_TITLES = {
  'How do Unix timestamps work?': { el: 'Πώς λειτουργούν οι χρονοσφραγίδες Unix;', hu: 'Hogyan működnek a Unix időbélyegek?', ro: 'Cum funcționează marcajele temporale Unix?', fi: 'Miten Unix-aikaleimat toimivat?' },
  'How do DPI and PPI relate?': { el: 'Πώς σχετίζονται DPI και PPI;', hu: 'Hogyan kapcsolódik a DPI és a PPI?', ro: 'Cum se raportează DPI și PPI?', fi: 'Miten DPI ja PPI liittyvät toisiinsa?' },
  'Practical tips': { el: 'Πρακτικές συμβουλές', hu: 'Gyakorlati tippek', ro: 'Sfaturi practice', fi: 'Käytännön vinkkejä' },
};

// ═══════════════════════════════════════════════════════════════
// FULL SECTION INFO HTML REPLACEMENTS (find → locale → replace)
// ═══════════════════════════════════════════════════════════════
const INFO_HTML = [
  // bytes-converter sectionInfo
  ['In the decimal (SI) system: 1 KB = 1,000 bytes, 1 MB = 1,000 KB, 1 GB = 1,000 MB, 1 TB = 1,000 GB. Each step multiplies by 1,000.</p><p class=\\"text-mid mb-4\\">In the binary (IEC) system: 1 KiB = 1,024 bytes, 1 MiB = 1,024 KiB, 1 GiB = 1,024 MiB, 1 TiB = 1,024 GiB. Each step multiplies by 1,024.</p><p class=\\"text-mid\\">The difference grows with size: 1 TB (decimal) = 0.909 TiB (binary). A \\"2 TB\\" drive shows as approximately 1.82 TiB in most operating systems.</p>', {
    el: 'Στο δεκαδικό σύστημα (SI): 1 KB = 1.000 bytes, 1 MB = 1.000 KB, 1 GB = 1.000 MB, 1 TB = 1.000 GB. Κάθε βήμα πολλαπλασιάζει επί 1.000.</p><p class=\\"text-mid mb-4\\">Στο δυαδικό σύστημα (IEC): 1 KiB = 1.024 bytes, 1 MiB = 1.024 KiB, 1 GiB = 1.024 MiB, 1 TiB = 1.024 GiB. Κάθε βήμα πολλαπλασιάζει επί 1.024.</p><p class=\\"text-mid\\">Η διαφορά μεγαλώνει με το μέγεθος: 1 TB (δεκαδικό) = 0,909 TiB (δυαδικό). Ένας δίσκος \\"2 TB\\" εμφανίζεται ως ~1,82 TiB στα περισσότερα λειτουργικά.</p>',
    hu: 'A decimális (SI) rendszerben: 1 KB = 1.000 bájt, 1 MB = 1.000 KB, 1 GB = 1.000 MB, 1 TB = 1.000 GB. Minden lépés 1.000-rel szorozódik.</p><p class=\\"text-mid mb-4\\">A bináris (IEC) rendszerben: 1 KiB = 1.024 bájt, 1 MiB = 1.024 KiB, 1 GiB = 1.024 MiB, 1 TiB = 1.024 GiB. Minden lépés 1.024-gyel szorozódik.</p><p class=\\"text-mid\\">A különbség a mérettel nő: 1 TB (decimális) = 0,909 TiB (bináris). Egy \\"2 TB\\"-os meghajtó kb. 1,82 TiB-ként jelenik meg a legtöbb operációs rendszerben.</p>',
    ro: 'În sistemul zecimal (SI): 1 KB = 1.000 octeți, 1 MB = 1.000 KB, 1 GB = 1.000 MB, 1 TB = 1.000 GB. Fiecare pas se înmulțește cu 1.000.</p><p class=\\"text-mid mb-4\\">În sistemul binar (IEC): 1 KiB = 1.024 octeți, 1 MiB = 1.024 KiB, 1 GiB = 1.024 MiB, 1 TiB = 1.024 GiB. Fiecare pas se înmulțește cu 1.024.</p><p class=\\"text-mid\\">Diferența crește cu dimensiunea: 1 TB (zecimal) = 0,909 TiB (binar). Un disc \\"2 TB\\" apare ca ~1,82 TiB în majoritatea sistemelor de operare.</p>',
  }],

  // bytes-converter practical tips
  ['A typical photo (12 MP): 3–5 MB. A 256 GB phone holds ~50,000–85,000 photos.</li><li>A typical song (MP3): 3–5 MB. A 1 GB playlist contains ~200–300 songs.</li><li>A Full HD movie: 4–8 GB. A 4K movie: 15–30 GB.</li><li>1 Mbps = 125 KB/s. A 100 Mbps connection downloads at ~12.5 MB/s.</li>', {
    el: 'Τυπική φωτογραφία (12 MP): 3–5 MB. Ένα τηλέφωνο 256 GB χωράει ~50.000–85.000 φωτογραφίες.</li><li>Τυπικό τραγούδι (MP3): 3–5 MB. Μια λίστα 1 GB περιέχει ~200–300 τραγούδια.</li><li>Ταινία Full HD: 4–8 GB. Ταινία 4K: 15–30 GB.</li><li>1 Mbps = 125 KB/s. Σύνδεση 100 Mbps κατεβάζει ~12,5 MB/s.</li>',
    hu: 'Tipikus fotó (12 MP): 3–5 MB. Egy 256 GB-os telefon ~50.000–85.000 fotót tárol.</li><li>Tipikus dal (MP3): 3–5 MB. Egy 1 GB-os lejátszási lista ~200–300 dalt tartalmaz.</li><li>Full HD film: 4–8 GB. 4K film: 15–30 GB.</li><li>1 Mbps = 125 KB/s. Egy 100 Mbps-es kapcsolat ~12,5 MB/s-sel tölt le.</li>',
    ro: 'Fotografie tipică (12 MP): 3–5 MB. Un telefon de 256 GB conține ~50.000–85.000 fotografii.</li><li>Melodie tipică (MP3): 3–5 MB. O listă de 1 GB conține ~200–300 melodii.</li><li>Film Full HD: 4–8 GB. Film 4K: 15–30 GB.</li><li>1 Mbps = 125 KB/s. O conexiune de 100 Mbps descarcă la ~12,5 MB/s.</li>',
  }],

  // unix-timestamp sectionInfo html (mixed EN)
  ['as chosen as a convenient reference point for the original Unix operating system.</p><p class=\\"text-mid mb-4\\">Timestamps can be in seconds (10 digits: 1700000000) or milliseconds (13 digits: 1700000000000). JavaScript Date uses milliseconds.</p><p class=\\"text-mid\\">The Year 2038 problem: 32-bit signed integers overflow on January 19, 2038. Most modern systems use 64-bit timestamps to avoid this.</p>', {
    el: 'επιλέχθηκε ως βολικό σημείο αναφοράς για το αρχικό λειτουργικό σύστημα Unix.</p><p class=\\"text-mid mb-4\\">Οι χρονοσφραγίδες μπορεί να είναι σε δευτερόλεπτα (10 ψηφία: 1700000000) ή χιλιοστά δευτερολέπτου (13 ψηφία: 1700000000000). Το JavaScript Date χρησιμοποιεί χιλιοστά δευτερολέπτου.</p><p class=\\"text-mid\\">Το πρόβλημα Έτους 2038: οι 32-bit ακέραιοι υπερχειλίζουν στις 19 Ιανουαρίου 2038. Τα σύγχρονα συστήματα χρησιμοποιούν 64-bit χρονοσφραγίδες.</p>',
    hu: 'kényelmes referenciapontként szolgált az eredeti Unix operációs rendszerhez.</p><p class=\\"text-mid mb-4\\">Az időbélyegek lehetnek másodpercekben (10 számjegy: 1700000000) vagy ezredmásodpercekben (13 számjegy: 1700000000000). A JavaScript Date ezredmásodperceket használ.</p><p class=\\"text-mid\\">A 2038-as probléma: a 32 bites előjeles egész számok túlcsordulnak 2038. január 19-én. A modern rendszerek 64 bites időbélyegeket használnak.</p>',
    ro: 'a fost ales ca punct de referință convenabil pentru sistemul de operare Unix original.</p><p class=\\"text-mid mb-4\\">Marcajele temporale pot fi în secunde (10 cifre: 1700000000) sau milisecunde (13 cifre: 1700000000000). JavaScript Date folosește milisecunde.</p><p class=\\"text-mid\\">Problema Anului 2038: numerele întregi cu semn pe 32 de biți vor depăși pe 19 ianuarie 2038. Sistemele moderne folosesc marcaje temporale pe 64 de biți.</p>',
    fi: 'valittiin käteväksi viitepisteeksi alkuperäiselle Unix-käyttöjärjestelmälle.</p><p class=\\"text-mid mb-4\\">Aikaleimat voivat olla sekunneissa (10 numeroa: 1700000000) tai millisekunneissa (13 numeroa: 1700000000000). JavaScript Date käyttää millisekunteja.</p><p class=\\"text-mid\\">Vuoden 2038 ongelma: 32-bittiset etumerkilliset kokonaisluvut ylivuotavat 19. tammikuuta 2038. Nykyaikaiset järjestelmät käyttävät 64-bittisiä aikaleimoja.</p>',
  }],

  // unix-timestamp practical tips
  ['JavaScript: Date.now() returns milliseconds. Math.floor(Date.now()/1000) for seconds.</li><li>Python: import time; time.time() returns seconds as float.</li><li>PHP: time() returns seconds as integer.</li><li>MySQL: UNIX_TIMESTAMP() and FROM_UNIXTIME() for conversion.</li>', {
    el: 'JavaScript: Date.now() επιστρέφει χιλιοστά δευτερολέπτου. Math.floor(Date.now()/1000) για δευτερόλεπτα.</li><li>Python: import time; time.time() επιστρέφει δευτερόλεπτα ως float.</li><li>PHP: time() επιστρέφει δευτερόλεπτα ως ακέραιο.</li><li>MySQL: UNIX_TIMESTAMP() και FROM_UNIXTIME() για μετατροπή.</li>',
    hu: 'JavaScript: Date.now() ezredmásodperceket ad vissza. Math.floor(Date.now()/1000) másodpercekhez.</li><li>Python: import time; time.time() másodperceket ad vissza floatként.</li><li>PHP: time() másodperceket ad vissza egész számként.</li><li>MySQL: UNIX_TIMESTAMP() és FROM_UNIXTIME() az átváltáshoz.</li>',
    ro: 'JavaScript: Date.now() returnează milisecunde. Math.floor(Date.now()/1000) pentru secunde.</li><li>Python: import time; time.time() returnează secunde ca float.</li><li>PHP: time() returnează secunde ca întreg.</li><li>MySQL: UNIX_TIMESTAMP() și FROM_UNIXTIME() pentru conversie.</li>',
    fi: 'JavaScript: Date.now() palauttaa millisekunteja. Math.floor(Date.now()/1000) sekunneille.</li><li>Python: import time; time.time() palauttaa sekunteja floattina.</li><li>PHP: time() palauttaa sekunteja kokonaislukuna.</li><li>MySQL: UNIX_TIMESTAMP() ja FROM_UNIXTIME() muuntamiseen.</li>',
  }],

  // dec-to-hex sectionInfo
  ['Repeatedly divide by 16 and record remainders (using A–F for 10–15). Read remainders bottom-to-top.</p><p class=\\"text-mid mb-4\\">Example: 255 ÷ 16 = 15 R15 → F, 15 ÷ 16 = 0 R15 → F. Result: FF.</p><p class=\\"text-mid\\">Each hex digit = 4 bits. Two hex digits = 1 byte (0–255). Four hex digits = 2 bytes (0–65,535).</p>', {
    el: 'Διαιρέστε επαναληπτικά δια 16 και σημειώστε τα υπόλοιπα (χρησιμοποιώντας A–F για 10–15). Διαβάστε τα υπόλοιπα από κάτω προς τα πάνω.</p><p class=\\"text-mid mb-4\\">Παράδειγμα: 255 ÷ 16 = 15 Υ15 → F, 15 ÷ 16 = 0 Υ15 → F. Αποτέλεσμα: FF.</p><p class=\\"text-mid\\">Κάθε ψηφίο hex = 4 bit. Δύο ψηφία hex = 1 byte (0–255). Τέσσερα ψηφία hex = 2 bytes (0–65.535).</p>',
    hu: 'Ismételten ossza el 16-tal és jegyezze fel a maradékokat (A–F-et használva 10–15-re). Olvassa a maradékokat alulról felfelé.</p><p class=\\"text-mid mb-4\\">Példa: 255 ÷ 16 = 15 M15 → F, 15 ÷ 16 = 0 M15 → F. Eredmény: FF.</p><p class=\\"text-mid\\">Egy hex számjegy = 4 bit. Két hex számjegy = 1 bájt (0–255). Négy hex számjegy = 2 bájt (0–65.535).</p>',
    ro: 'Împărțiți repetat la 16 și notați resturile (folosind A–F pentru 10–15). Citiți resturile de jos în sus.</p><p class=\\"text-mid mb-4\\">Exemplu: 255 ÷ 16 = 15 R15 → F, 15 ÷ 16 = 0 R15 → F. Rezultat: FF.</p><p class=\\"text-mid\\">O cifră hex = 4 biți. Două cifre hex = 1 octet (0–255). Patru cifre hex = 2 octeți (0–65.535).</p>',
    fi: 'Jaa toistuvasti 16:lla ja merkitse jakojäännökset (käyttäen A–F arvoille 10–15). Lue jäännökset alhaalta ylöspäin.</p><p class=\\"text-mid mb-4\\">Esimerkki: 255 ÷ 16 = 15 J15 → F, 15 ÷ 16 = 0 J15 → F. Tulos: FF.</p><p class=\\"text-mid\\">Yksi hex-numero = 4 bittiä. Kaksi hex-numeroa = 1 tavu (0–255). Neljä hex-numeroa = 2 tavua (0–65.535).</p>',
  }],

  // dec-to-hex practical tips
  ['1 byte: 00–FF (0–255). 2 bytes: 0000–FFFF (0–65,535).</li><li>Common prefixes: 0x (programming), # (CSS colors), U+ (Unicode).</li><li>MAC address: 6 bytes in hex, e.g. AA:BB:CC:DD:EE:FF.</li>', {
    el: '1 byte: 00–FF (0–255). 2 bytes: 0000–FFFF (0–65.535).</li><li>Συνηθισμένα προθέματα: 0x (προγραμματισμός), # (χρώματα CSS), U+ (Unicode).</li><li>Διεύθυνση MAC: 6 bytes σε hex, π.χ. AA:BB:CC:DD:EE:FF.</li>',
    hu: '1 bájt: 00–FF (0–255). 2 bájt: 0000–FFFF (0–65.535).</li><li>Gyakori előtagok: 0x (programozás), # (CSS színek), U+ (Unicode).</li><li>MAC cím: 6 bájt hexben, pl. AA:BB:CC:DD:EE:FF.</li>',
    ro: '1 octet: 00–FF (0–255). 2 octeți: 0000–FFFF (0–65.535).</li><li>Prefixe comune: 0x (programare), # (culori CSS), U+ (Unicode).</li><li>Adresă MAC: 6 octeți în hex, ex. AA:BB:CC:DD:EE:FF.</li>',
    fi: '1 tavu: 00–FF (0–255). 2 tavua: 0000–FFFF (0–65.535).</li><li>Yleiset etuliitteet: 0x (ohjelmointi), # (CSS-värit), U+ (Unicode).</li><li>MAC-osoite: 6 tavua heksana, esim. AA:BB:CC:DD:EE:FF.</li>',
  }],

  // dpi-to-ppi sectionInfo
  ['Numerically, DPI and PPI use the same value when specifying image resolution for print. A 300 DPI setting tells the printer to place 300 dots per inch; simultaneously, the image should have 300 pixels per inch (PPI).</p><p class=\\"text-mid\\">For screen work, only PPI matters. Retina displays have ~220–460 PPI.</p>', {
    el: 'Αριθμητικά, DPI και PPI χρησιμοποιούν την ίδια τιμή όταν ορίζουν ανάλυση εικόνας για εκτύπωση. Η ρύθμιση 300 DPI λέει στον εκτυπωτή να τοποθετεί 300 κουκκίδες ανά ίντσα· ταυτόχρονα, η εικόνα πρέπει να έχει 300 pixel ανά ίντσα (PPI).</p><p class=\\"text-mid\\">Για εργασία σε οθόνη, μόνο το PPI έχει σημασία. Οι οθόνες Retina έχουν ~220–460 PPI.</p>',
    hu: 'Számszerűen a DPI és PPI ugyanazt az értéket használják a nyomtatási képfelbontás megadásakor. A 300 DPI beállítás azt jelenti, hogy a nyomtató 300 pontot helyez el hüvelykenként; egyidejűleg a képnek 300 pixel/hüvelyk (PPI) felbontásúnak kell lennie.</p><p class=\\"text-mid\\">Képernyős munkánál csak a PPI számít. A Retina kijelzők ~220–460 PPI-vel rendelkeznek.</p>',
    ro: 'Numeric, DPI și PPI folosesc aceeași valoare când se specifică rezoluția imaginii pentru tipărire. O setare de 300 DPI spune imprimantei să plaseze 300 de puncte pe inch; simultan, imaginea ar trebui să aibă 300 de pixeli pe inch (PPI).</p><p class=\\"text-mid\\">Pentru lucrul pe ecran, contează doar PPI. Ecranele Retina au ~220–460 PPI.</p>',
    fi: 'Numeerisesti DPI ja PPI käyttävät samaa arvoa kuvan resoluution määrittämiseen tulostusta varten. 300 DPI -asetus käskee tulostimen asettamaan 300 pistettä tuumalle; samanaikaisesti kuvassa tulisi olla 300 pikseliä tuumalle (PPI).</p><p class=\\"text-mid\\">Näyttötyöskentelyyn vain PPI on merkityksellinen. Retina-näytöissä on ~220–460 PPI.</p>',
  }],

  // dpi-to-ppi practical tips
  ['Print standard: 300 DPI/PPI for professional quality.</li><li>Web images: 72–96 PPI is standard (but actual display depends on screen PPI).</li><li>Large format (posters): 150 DPI is often sufficient due to viewing distance.</li><li>Retina/HiDPI: serve 2× resolution images for crisp display.</li>', {
    el: 'Πρότυπο εκτύπωσης: 300 DPI/PPI για επαγγελματική ποιότητα.</li><li>Εικόνες web: 72–96 PPI είναι τυπικό (αλλά η πραγματική εμφάνιση εξαρτάται από το PPI οθόνης).</li><li>Μεγάλες μορφές (αφίσες): 150 DPI είναι συχνά αρκετό λόγω απόστασης θέασης.</li><li>Retina/HiDPI: χρησιμοποιήστε εικόνες 2× ανάλυσης για ευκρινή εμφάνιση.</li>',
    hu: 'Nyomtatási szabvány: 300 DPI/PPI professzionális minőséghez.</li><li>Webes képek: 72–96 PPI a szabvány (de a tényleges megjelenítés a képernyő PPI-jétől függ).</li><li>Nagyformátum (plakátok): 150 DPI gyakran elegendő a nézési távolság miatt.</li><li>Retina/HiDPI: 2× felbontású képek éles megjelenítéshez.</li>',
    ro: 'Standard de tipărire: 300 DPI/PPI pentru calitate profesională.</li><li>Imagini web: 72–96 PPI este standard (dar afișarea reală depinde de PPI-ul ecranului).</li><li>Format mare (postere): 150 DPI este adesea suficient datorită distanței de vizualizare.</li><li>Retina/HiDPI: utilizați imagini cu rezoluție 2× pentru afișare clară.</li>',
    fi: 'Tulostusstandardi: 300 DPI/PPI ammattilaatuun.</li><li>Verkkokuvat: 72–96 PPI on standardi (mutta todellinen näyttö riippuu näytön PPI:stä).</li><li>Suurkuva (julisteet): 150 DPI riittää usein katseluetäisyyden vuoksi.</li><li>Retina/HiDPI: käytä 2× resoluution kuvia terävälle näytölle.</li>',
  }],

  // hex-to-rgb sectionInfo
  ['#000000 = rgb(0,0,0) = black. #FFFFFF = rgb(255,255,255) = white.', {
    el: '#000000 = rgb(0,0,0) = μαύρο. #FFFFFF = rgb(255,255,255) = λευκό.',
    hu: '#000000 = rgb(0,0,0) = fekete. #FFFFFF = rgb(255,255,255) = fehér.',
    ro: '#000000 = rgb(0,0,0) = negru. #FFFFFF = rgb(255,255,255) = alb.',
    fi: '#000000 = rgb(0,0,0) = musta. #FFFFFF = rgb(255,255,255) = valkoinen.',
  }],
  ['#FF0000 = pure red. Shorthand: #F00 = #FF0000.', {
    el: '#FF0000 = καθαρό κόκκινο. Συντόμευση: #F00 = #FF0000.',
    hu: '#FF0000 = tiszta piros. Rövidítés: #F00 = #FF0000.',
    ro: '#FF0000 = roșu pur. Prescurtare: #F00 = #FF0000.',
    fi: '#FF0000 = puhdas punainen. Lyhenne: #F00 = #FF0000.',
  }],
  ['Opacity: #FF573380 = 50% transparent. Or use rgba(255, 87, 51, 0.5).', {
    el: 'Αδιαφάνεια: #FF573380 = 50% διαφανές. Ή χρησιμοποιήστε rgba(255, 87, 51, 0.5).',
    hu: 'Átlátszatlanság: #FF573380 = 50% átlátszó. Vagy használja rgba(255, 87, 51, 0.5).',
    ro: 'Opacitate: #FF573380 = 50% transparent. Sau folosiți rgba(255, 87, 51, 0.5).',
    fi: 'Läpinäkyvyys: #FF573380 = 50% läpinäkyvä. Tai käytä rgba(255, 87, 51, 0.5).',
  }],
  ['CSS named colors: 148 named colors (red, coral, dodgerblue, etc.). Each maps to a hex value.', {
    el: 'Ονομασμένα χρώματα CSS: 148 ονομασμένα χρώματα (red, coral, dodgerblue κ.λπ.). Κάθε ένα αντιστοιχεί σε τιμή hex.',
    hu: 'CSS elnevezett színek: 148 elnevezett szín (red, coral, dodgerblue stb.). Mindegyik egy hex értéknek felel meg.',
    ro: 'Culori CSS numite: 148 culori numite (red, coral, dodgerblue etc.). Fiecare corespunde unei valori hex.',
    fi: 'CSS-nimetyt värit: 148 nimettyä väriä (red, coral, dodgerblue jne.). Jokainen vastaa hex-arvoa.',
  }],

  // rgb-to-cmyk sectionInfo (already partially done in Part 6, but there may be more)
  ['Pure black: RGB(0,0,0) = CMYK(0,0,0,100). Rich black for print: CMYK(60,40,40,100).</li><li>Pure white: RGB(255,255,255) = CMYK(0,0,0,0). No ink needed.</li><li>ICC profiles define exact color mapping. Always use the correct profile for your printer.</li><li>Avoid total ink coverage above 300% for most printing methods.</li>', {
    el: 'Καθαρό μαύρο: RGB(0,0,0) = CMYK(0,0,0,100). Rich black για εκτύπωση: CMYK(60,40,40,100).</li><li>Καθαρό λευκό: RGB(255,255,255) = CMYK(0,0,0,0). Δεν χρειάζεται μελάνι.</li><li>Τα προφίλ ICC ορίζουν ακριβή αντιστοίχιση χρωμάτων. Χρησιμοποιείτε πάντα το σωστό προφίλ για τον εκτυπωτή σας.</li><li>Αποφύγετε συνολική κάλυψη μελανιού πάνω από 300% για τις περισσότερες μεθόδους εκτύπωσης.</li>',
    hu: 'Tiszta fekete: RGB(0,0,0) = CMYK(0,0,0,100). Rich black nyomtatáshoz: CMYK(60,40,40,100).</li><li>Tiszta fehér: RGB(255,255,255) = CMYK(0,0,0,0). Nem kell tinta.</li><li>Az ICC profilok határozzák meg a pontos színleképezést. Mindig a nyomtatójához megfelelő profilt használja.</li><li>Kerülje a 300% feletti teljes festékfedést a legtöbb nyomtatási módszernél.</li>',
    ro: 'Negru pur: RGB(0,0,0) = CMYK(0,0,0,100). Rich black pentru tipărire: CMYK(60,40,40,100).</li><li>Alb pur: RGB(255,255,255) = CMYK(0,0,0,0). Nu este nevoie de cerneală.</li><li>Profilurile ICC definesc maparea exactă a culorilor. Folosiți întotdeauna profilul corect pentru imprimanta dumneavoastră.</li><li>Evitați acoperirea totală cu cerneală peste 300% pentru majoritatea metodelor de tipărire.</li>',
    fi: 'Puhdas musta: RGB(0,0,0) = CMYK(0,0,0,100). Rich black tulostukseen: CMYK(60,40,40,100).</li><li>Puhdas valkoinen: RGB(255,255,255) = CMYK(0,0,0,0). Ei tarvita mustetta.</li><li>ICC-profiilit määrittelevät tarkan värikartoituksen. Käytä aina oikeaa profiilia tulostimellesi.</li><li>Vältä yli 300% kokonaismustepeittoa useimmissa tulostusmenetelmissä.</li>',
  }],

  // rgb-to-cmyk sectionInfo formula
  ['First, normalize RGB to 0–1 range: R\'=R/255, G\'=G/255, B\'=B/255. K = 1 − max(R\', G\', B\'). Then: C = (1−R\'−K)/(1−K), M = (1−G\'−K)/(1−K), Y = (1−B\'−K)/(1−K).</p><p class=\\"text-mid\\">If K=1 (pure black), then C=M=Y=0. Values are then multiplied by 100 for percentage display.</p>', {
    el: 'Αρχικά, κανονικοποιήστε RGB σε εύρος 0–1: R\'=R/255, G\'=G/255, B\'=B/255. K = 1 − max(R\', G\', B\'). Μετά: C = (1−R\'−K)/(1−K), M = (1−G\'−K)/(1−K), Y = (1−B\'−K)/(1−K).</p><p class=\\"text-mid\\">Αν K=1 (καθαρό μαύρο), τότε C=M=Y=0. Οι τιμές πολλαπλασιάζονται επί 100 για ποσοστιαία εμφάνιση.</p>',
    hu: 'Először normalizálja az RGB-t 0–1 tartományra: R\'=R/255, G\'=G/255, B\'=B/255. K = 1 − max(R\', G\', B\'). Aztán: C = (1−R\'−K)/(1−K), M = (1−G\'−K)/(1−K), Y = (1−B\'−K)/(1−K).</p><p class=\\"text-mid\\">Ha K=1 (tiszta fekete), akkor C=M=Y=0. Az értékeket 100-zal szorozzuk a százalékos megjelenítéshez.</p>',
    ro: 'Mai întâi, normalizați RGB la intervalul 0–1: R\'=R/255, G\'=G/255, B\'=B/255. K = 1 − max(R\', G\', B\'). Apoi: C = (1−R\'−K)/(1−K), M = (1−G\'−K)/(1−K), Y = (1−B\'−K)/(1−K).</p><p class=\\"text-mid\\">Dacă K=1 (negru pur), atunci C=M=Y=0. Valorile sunt înmulțite cu 100 pentru afișare procentuală.</p>',
    fi: 'Ensin normalisoi RGB alueelle 0–1: R\'=R/255, G\'=G/255, B\'=B/255. K = 1 − max(R\', G\', B\'). Sitten: C = (1−R\'−K)/(1−K), M = (1−G\'−K)/(1−K), Y = (1−B\'−K)/(1−K).</p><p class=\\"text-mid\\">Jos K=1 (puhdas musta), niin C=M=Y=0. Arvot kerrotaan 100:lla prosenttinäyttöä varten.</p>',
  }],
];

// ═══════════════════════════════════════════════════════════════
// FAQ TRANSLATIONS
// ═══════════════════════════════════════════════════════════════
const FAQ_FIXES = [
  // tw-to-px FAQ DE questions
  ['"question": "Πόσο ist p-4 in Pixel?"', { el: '"question": "Πόσο είναι p-4 σε pixel;"' }],
  ['"question": "Cât ist p-4 in Pixel?"', { ro: '"question": "Cât este p-4 în pixeli?"' }],
  ['"question": "Was sind die Tailwind-Breakpoints in Pixel?"', {
    el: '"question": "Ποια είναι τα breakpoints Tailwind σε pixel;"',
    hu: '"question": "Mik a Tailwind breakpointok pixelben?"',
    ro: '"question": "Care sunt breakpoint-urile Tailwind în pixeli?"',
  }],
  // fi unix-timestamp FAQ mixed DE
  ['"question": "Mikä on die Unix-Epoche?"', { fi: '"question": "Mikä on Unix-epookki?"' }],
  ['"question": "Mikä on das Jahr-2038-Problem?"', { fi: '"question": "Mikä on vuoden 2038 ongelma?"' }],
  ['um 03:14:07 UTC. Nykyaikaiset järjestelmät käyttävät 64 Bit."', { fi: 'klo 03:14:07 UTC. Nykyaikaiset järjestelmät käyttävät 64-bittisiä aikaleimoja."' }],
  // fi dec-to-hex FAQ DE
  ['"question": "Was bedeutet 0x?"', { fi: '"question": "Mitä 0x tarkoittaa?"' }],
  // ro cm-to-px-dpi FAQ if any remain
  ['Im Druckdesign werden Maße in Zentimetern angegeben, digitale Bilder jedoch in Pixeln. Die conversia depinde de rezoluția DPI: Pixel = cm × DPI / 2,54', {
    ro: 'În designul de tipărire dimensiunile sunt în centimetri, dar imaginile digitale sunt în pixeli. Conversia depinde de rezoluția DPI: Pixel = cm × DPI / 2,54',
  }],
];

// ═══════════════════════════════════════════════════════════════
// EXECUTE FIXES
// ═══════════════════════════════════════════════════════════════
const LOCALES = ['el', 'hu', 'ro', 'fi', 'nl'];
let totalFixed = 0;
let filesChanged = 0;

for (const locale of LOCALES) {
  const toolsDir = path.join(DATA, locale, 'tools');
  if (!fs.existsSync(toolsDir)) continue;
  const files = fs.readdirSync(toolsDir).filter(f => f.startsWith('unit-') && f.endsWith('.json'));

  for (const file of files) {
    const filePath = path.join(toolsDir, file);
    let j;
    try { j = JSON.parse(fs.readFileSync(filePath, 'utf8')); } catch { continue; }
    let changed = false;

    for (const block of j.contentBlocks || []) {
      // Fix comparison table feature names and values
      if (block.type === 'sectionFeatureComparison') {
        for (const feat of block.features || []) {
          if (FEAT_NAMES[feat.name] && FEAT_NAMES[feat.name][locale]) {
            feat.name = FEAT_NAMES[feat.name][locale];
            changed = true;
            totalFixed++;
          }
          for (const [k, v] of Object.entries(feat.values || {})) {
            if (FEAT_VALS[v] && FEAT_VALS[v][locale]) {
              feat.values[k] = FEAT_VALS[v][locale];
              changed = true;
              totalFixed++;
            }
          }
        }
      }

      // Fix sectionInfo titles
      if (block.type === 'sectionInfo' && block.title) {
        if (INFO_TITLES[block.title] && INFO_TITLES[block.title][locale]) {
          block.title = INFO_TITLES[block.title][locale];
          changed = true;
          totalFixed++;
        }
      }
    }

    // Write back JSON if comparison/title fixes were made
    if (changed) {
      fs.writeFileSync(filePath, JSON.stringify(j, null, 2) + '\n', 'utf8');
    }

    // Now do string-based replacements for HTML content and FAQ
    let content = fs.readFileSync(filePath, 'utf8');
    let strChanged = false;

    for (const [find, translations] of INFO_HTML) {
      const replace = translations[locale];
      if (!replace) continue;
      if (content.includes(find)) {
        content = content.replaceAll(find, replace);
        strChanged = true;
        totalFixed++;
      }
    }

    for (const [find, translations] of FAQ_FIXES) {
      const replace = translations[locale];
      if (!replace) continue;
      if (content.includes(find)) {
        content = content.replaceAll(find, replace);
        strChanged = true;
        totalFixed++;
      }
    }

    if (strChanged) {
      fs.writeFileSync(filePath, content, 'utf8');
      changed = true;
    }

    if (changed) {
      filesChanged++;
      console.log(`  ✓ ${locale}/${file}`);
    }
  }
}

console.log(`\n✓ Part 7: Fixed ${totalFixed} strings in ${filesChanged} files`);
