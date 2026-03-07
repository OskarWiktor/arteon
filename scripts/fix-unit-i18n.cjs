/**
 * Fix mixed-language content in unit converter JSON files.
 * Run: node scripts/fix-unit-i18n.cjs
 */
const fs = require('node:fs');
const path = require('node:path');
const DATA = path.join(__dirname, '..', 'data');

// Simple string replacements: [find, {locale: replace}]
const REPLACEMENTS = [
  // ── Shared DE FAQ answer (appears in ALL contaminated files) ──
  ['"answer": "Ja. Alle Berechnungen erfolgen in Ihrem Browser."', {
    el: '"answer": "Ναι. Όλοι οι υπολογισμοί εκτελούνται στον browser σας."',
    hu: '"answer": "Igen. Minden számítás a böngészőjében történik."',
    ro: '"answer": "Da. Toate calculele se efectuează în browserul dumneavoastră."',
    fi: '"answer": "Kyllä. Kaikki laskelmat suoritetaan selaimessasi."',
    nl: '"answer": "Ja. Alle berekeningen worden lokaal in uw browser uitgevoerd."',
  }],

  // ── pt-to-px PL descriptions ──
  ['"description": "Eksport wielkości czcionek z Figma/Sketch do CSS: 12 pt = 16 px."', {
    el: '"description": "Εξαγωγή μεγεθών γραμματοσειρών από Figma/Sketch σε CSS: 12 pt = 16 px."',
    hu: '"description": "Betűméretek exportálása Figma/Sketch-ből CSS-be: 12 pt = 16 px."',
    ro: '"description": "Exportul dimensiunilor fonturilor din Figma/Sketch în CSS: 12 pt = 16 px."',
    fi: '"description": "Fonttikoon vienti Figma/Sketchistä CSS:ään: 12 pt = 16 px."',
    nl: '"description": "Exporteer lettergroottes van Figma/Sketch naar CSS: 12 pt = 16 px."',
  }],
  ['"description": "Konwersja rozmiarów z Word/InDesign na wartości pikselowe."', {
    el: '"description": "Μετατροπή μεγεθών από Word/InDesign σε τιμές pixel."',
    hu: '"description": "Word/InDesign méretek konvertálása pixel értékekre."',
    ro: '"description": "Conversia dimensiunilor din Word/InDesign în valori pixeli."',
    fi: '"description": "Koon muuntaminen Word/InDesignista pikseliarvoiksi."',
    nl: '"description": "Conversie van formaten uit Word/InDesign naar pixelwaarden."',
  }],
  ['"description": "Przeliczanie pt na px przy kodowaniu styli czcionek."', {
    el: '"description": "Μετατροπή pt σε px κατά τον προγραμματισμό στυλ γραμματοσειρών."',
    hu: '"description": "Pt átváltása px-re betűstílusok kódolásakor."',
    ro: '"description": "Conversia pt în px la codarea stilurilor de font."',
    fi: '"description": "Pt:n muuntaminen px:ksi fonttityylien koodauksessa."',
    nl: '"description": "Pt naar px omrekenen bij het coderen van lettertypestijlen."',
  }],
  ['"description": "Dopasowanie wielkości tekstu do wyświetlania na ekranie."', {
    el: '"description": "Αντιστοίχιση μεγεθών κειμένου μεταξύ εκτύπωσης και οθόνης."',
    hu: '"description": "Szövegméretek illesztése a képernyős megjelenítéshez."',
    ro: '"description": "Potrivirea dimensiunilor textului pentru afișarea pe ecran."',
    fi: '"description": "Tekstikoon sovittaminen näytölle."',
    nl: '"description": "Tekstgroottes afstemmen op schermweergave."',
  }],

  // ── pt-to-px PL titles ──
  ['"title": "Projektowanie UI"', { el: '"title": "Γραφιστικός σχεδιασμός"', hu: '"title": "UI tervezés"', ro: '"title": "Design UI"', fi: '"title": "UI-suunnittelu"', nl: '"title": "UI-ontwerp"' }],
  ['"title": "Dokumenty"', { el: '"title": "Έγγραφα"', hu: '"title": "Dokumentumok"', ro: '"title": "Documente"', fi: '"title": "Asiakirjat"', nl: '"title": "Documenten"' }],
  ['"title": "Druk vs ekran"', { el: '"title": "Εκτύπωση"', hu: '"title": "Nyomtatás vs képernyő"', ro: '"title": "Tipărire vs ecran"', fi: '"title": "Tulostus vs näyttö"', nl: '"title": "Print vs scherm"' }],

  // ── rem-to-px PL ──
  ['"title": "Kodowanie CSS"', { el: '"title": "Web ανάπτυξη"', hu: '"title": "CSS fejlesztés"', ro: '"title": "Dezvoltare CSS"', fi: '"title": "CSS-kehitys"', nl: '"title": "CSS-ontwikkeling"' }],
  ['"description": "Przeliczanie makiet (px) na rem: padding 24 px = 1,5 rem."', {
    el: '"description": "Μετατροπή mockups (px) σε rem: padding 24 px = 1,5 rem."',
    hu: '"description": "Mockupok (px) átváltása rem-re: padding 24 px = 1,5 rem."',
    ro: '"description": "Conversia mockup-urilor (px) în rem: padding 24 px = 1,5 rem."',
    fi: '"description": "Mockupien (px) muuntaminen rem-arvoiksi: padding 24 px = 1,5 rem."',
    nl: '"description": "Mockups (px) omrekenen naar rem: padding 24 px = 1,5 rem."',
  }],
  ['"title": "Responsywność"', { el: '"title": "Ανταπόκριση"', hu: '"title": "Reszponzivitás"', ro: '"title": "Responsivitate"', fi: '"title": "Responsiivisuus"', nl: '"title": "Responsiviteit"' }],
  ['"description": "Rem skaluje się z preferencjami użytkownika – lepsze od stałych pikseli."', {
    el: '"description": "Το rem κλιμακώνεται με τις προτιμήσεις του χρήστη — καλύτερο από σταθερά pixel."',
    hu: '"description": "A rem a felhasználói beállításokkal együtt skálázódik – jobb, mint a fix pixelek."',
    ro: '"description": "Rem se scalează cu preferințele utilizatorului – mai bun decât pixelii ficși."',
    fi: '"description": "Rem skaalautuu käyttäjän asetusten mukaan – parempi kuin kiinteät pikselit."',
    nl: '"description": "Rem schaalt mee met gebruikersvoorkeuren – beter dan vaste pixels."',
  }],
  ['"title": "Dostępność (WCAG)"', { el: '"title": "Προσβασιμότητα (WCAG)"', hu: '"title": "Akadálymentesítés (WCAG)"', ro: '"title": "Accesibilitate (WCAG)"', fi: '"title": "Saavutettavuus (WCAG)"', nl: '"title": "Toegankelijkheid (WCAG)"' }],
  ['"description": "Rem respektuje ustawienia rozmiaru tekstu użytkownika."', {
    el: '"description": "Το rem σέβεται τις ρυθμίσεις μεγέθους κειμένου του χρήστη."',
    hu: '"description": "A rem tiszteletben tartja a felhasználó szövegméret-beállításait."',
    ro: '"description": "Rem respectă setările de dimensiune a textului utilizatorului."',
    fi: '"description": "Rem kunnioittaa käyttäjän tekstikoon asetuksia."',
    nl: '"description": "Rem respecteert de tekstgrootte-instellingen van de gebruiker."',
  }],
  ['"title": "Systemy projektowe"', { el: '"title": "Συστήματα σχεδίασης"', hu: '"title": "Tervezési rendszerek"', ro: '"title": "Sisteme de design"', fi: '"title": "Suunnittelujärjestelmät"', nl: '"title": "Ontwerpsystemen"' }],
  ['"description": "Skale spacing w rem: 0,25 / 0,5 / 1 / 1,5 / 2 / 3 rem."', {
    el: '"description": "Κλίμακες spacing σε rem: 0,25 / 0,5 / 1 / 1,5 / 2 / 3 rem."',
    hu: '"description": "Térköz-skálák rem-ben: 0,25 / 0,5 / 1 / 1,5 / 2 / 3 rem."',
    ro: '"description": "Scale de spațiere în rem: 0,25 / 0,5 / 1 / 1,5 / 2 / 3 rem."',
    fi: '"description": "Välistys-skaalat rem-arvoissa: 0,25 / 0,5 / 1 / 1,5 / 2 / 3 rem."',
    nl: '"description": "Spacing-schalen in rem: 0,25 / 0,5 / 1 / 1,5 / 2 / 3 rem."',
  }],

  // ── hex-to-rgb PL ──
  ['"description": "Konwertuj <code>#3B82F6</code> na <code>rgb(59, 130, 246)</code> w arkuszach stylów."', {
    el: '"description": "Μετατρέψτε <code>#3B82F6</code> σε <code>rgb(59, 130, 246)</code> στα stylesheets σας."',
    hu: '"description": "Konvertálja a <code>#3B82F6</code>-ot <code>rgb(59, 130, 246)</code>-ra a stíluslapokban."',
    ro: '"description": "Convertiți <code>#3B82F6</code> în <code>rgb(59, 130, 246)</code> în foile de stil."',
    fi: '"description": "Muunna <code>#3B82F6</code> muotoon <code>rgb(59, 130, 246)</code> tyylitiedostoissa."',
    nl: '"description": "Converteer <code>#3B82F6</code> naar <code>rgb(59, 130, 246)</code> in uw stylesheets."',
  }],
  ['"description": "Eksport kolorów z Figma/Sketch na wartości CSS."', {
    el: '"description": "Εξαγωγή χρωμάτων από Figma/Sketch σε τιμές CSS."',
    hu: '"description": "Színek exportálása Figma/Sketch-ből CSS-értékekbe."',
    ro: '"description": "Exportul culorilor din Figma/Sketch în valori CSS."',
    fi: '"description": "Värien vienti Figma/Sketchistä CSS-arvoiksi."',
    nl: '"description": "Kleuren exporteren van Figma/Sketch naar CSS-waarden."',
  }],
  ['"title": "Dostępność"', { el: '"title": "Προσβασιμότητα"', hu: '"title": "Akadálymentesítés"', ro: '"title": "Accesibilitate"', fi: '"title": "Saavutettavuus"', nl: '"title": "Toegankelijkheid"' }],
  ['"description": "Obliczanie kontrastu WCAG wymaga wartości RGB."', {
    el: '"description": "Ο υπολογισμός αντίθεσης WCAG απαιτεί τιμές RGB."',
    hu: '"description": "A WCAG kontrasztszámítás RGB-értékeket igényel."',
    ro: '"description": "Calculul contrastului WCAG necesită valori RGB."',
    fi: '"description": "WCAG-kontrastilaskenta vaatii RGB-arvoja."',
    nl: '"description": "WCAG-contrastberekening vereist RGB-waarden."',
  }],
  ['"title": "Palety kolorów"', { el: '"title": "Παλέτες χρωμάτων"', hu: '"title": "Színpaletták"', ro: '"title": "Palete de culori"', fi: '"title": "Väripaletit"', nl: '"title": "Kleurpaletten"' }],
  ['"description": "Modyfikowanie poszczególnych kanałów (R, G, B) do tworzenia wariantów."', {
    el: '"description": "Τροποποίηση μεμονωμένων καναλιών (R, G, B) για δημιουργία παραλλαγών."',
    hu: '"description": "Egyes csatornák (R, G, B) módosítása változatok létrehozásához."',
    ro: '"description": "Modificarea canalelor individuale (R, G, B) pentru crearea variantelor."',
    fi: '"description": "Yksittäisten kanavien (R, G, B) muokkaus varianttien luomiseksi."',
    nl: '"description": "Wijzig individuele kanalen (R, G, B) om kleurvarianten te maken."',
  }],

  // ── em-to-px PL ──
  ['"title": "Typografia"', { el: '"title": "Τυπογραφία"', hu: '"title": "Tipográfia"', ro: '"title": "Tipografie"', fi: '"title": "Typografia"', nl: '"title": "Typografie"' }],
  ['"description": "Line-height 1,5 em = 150% rozmiaru czcionki rodzica."', {
    el: '"description": "Line-height 1,5 em = 150% του μεγέθους γραμματοσειράς του γονικού."',
    hu: '"description": "Line-height 1,5 em = a szülő betűméret 150%-a."',
    ro: '"description": "Line-height 1,5 em = 150% din dimensiunea fontului părinte."',
    fi: '"description": "Line-height 1,5 em = 150 % emoelementin fonttikoosta."',
    nl: '"description": "Line-height 1,5 em = 150% van de bovenliggende lettergrootte."',
  }],
  ['"title": "Przyciski"', { el: '"title": "Κουμπιά"', hu: '"title": "Gombok"', ro: '"title": "Butoane"', fi: '"title": "Painikkeet"', nl: '"title": "Knoppen"' }],
  ['"description": "Padding w em skaluje się z rozmiarem tekstu przycisku."', {
    el: '"description": "Το padding σε em κλιμακώνεται με το μέγεθος κειμένου του κουμπιού."',
    hu: '"description": "Az em padding a gomb szövegméretével együtt skálázódik."',
    ro: '"description": "Padding-ul în em se scalează cu dimensiunea textului butonului."',
    fi: '"description": "Em-täyte skaalautuu painikkeen tekstikoon mukaan."',
    nl: '"description": "Padding in em schaalt mee met de tekstgrootte van de knop."',
  }],
  ['"title": "Komponenty"', { el: '"title": "Στοιχεία UI"', hu: '"title": "Komponensek"', ro: '"title": "Componente"', fi: '"title": "Komponentit"', nl: '"title": "Componenten"' }],
  ['"description": "Wymiary proporcjonalne do tekstu w komponentach UI."', {
    el: '"description": "Διαστάσεις αναλογικές με το κείμενο σε στοιχεία UI."',
    hu: '"description": "Szövegarányos méretek az UI-komponensekben."',
    ro: '"description": "Dimensiuni proporționale cu textul în componentele UI."',
    fi: '"description": "Tekstin mukaiset mittasuhteet UI-komponenteissa."',
    nl: '"description": "Proportionele afmetingen ten opzichte van tekst in UI-componenten."',
  }],
  ['"description": "Breakpointy w em są odporne na zmianę bazowego font-size."', {
    el: '"description": "Τα breakpoints σε em είναι ανθεκτικά σε αλλαγές του βασικού font-size."',
    hu: '"description": "Az em breakpointok ellenállnak az alap font-size változásainak."',
    ro: '"description": "Breakpoint-urile în em rezistă la modificarea font-size de bază."',
    fi: '"description": "Em-katkaisupisteet kestävät perus font-sizen muutoksia."',
    nl: '"description": "Breakpoints in em zijn bestand tegen wijzigingen in de basis font-size."',
  }],

  // ── cm-to-px-dpi PL ──
  ['"title": "Przygotowanie do druku"', { el: '"title": "Προετοιμασία εκτύπωσης"', hu: '"title": "Nyomtatás-előkészítés"', ro: '"title": "Pregătire pentru tipar"', fi: '"title": "Tulostuksen valmistelu"', nl: '"title": "Drukvoorbereiding"' }],
  ['"description": "A4 przy 300 DPI = 2 480 × 3 508 px. Plakat A3 = 3 508 × 4 961 px."', {
    el: '"description": "A4 σε 300 DPI = 2.480 × 3.508 px. Αφίσα A3 = 3.508 × 4.961 px."',
    hu: '"description": "A4 300 DPI-nál = 2 480 × 3 508 px. A3 poszter = 3 508 × 4 961 px."',
    ro: '"description": "A4 la 300 DPI = 2.480 × 3.508 px. Poster A3 = 3.508 × 4.961 px."',
    fi: '"description": "A4 300 DPI:llä = 2 480 × 3 508 px. A3-juliste = 3 508 × 4 961 px."',
    nl: '"description": "A4 bij 300 DPI = 2.480 × 3.508 px. A3-poster = 3.508 × 4.961 px."',
  }],
  ['"title": "Grafika na stronę"', { el: '"title": "Γραφικά ιστοσελίδας"', hu: '"title": "Webes grafika"', ro: '"title": "Grafică web"', fi: '"title": "Verkkografiikat"', nl: '"title": "Webafbeeldingen"' }],
  ['"description": "Baner 20 × 6 cm przy 96 DPI = 756 × 227 px."', {
    el: '"description": "Banner 20 × 6 cm σε 96 DPI = 756 × 227 px."',
    hu: '"description": "Banner 20 × 6 cm 96 DPI-nál = 756 × 227 px."',
    ro: '"description": "Banner 20 × 6 cm la 96 DPI = 756 × 227 px."',
    fi: '"description": "Banneri 20 × 6 cm 96 DPI:llä = 756 × 227 px."',
    nl: '"description": "Banner 20 × 6 cm bij 96 DPI = 756 × 227 px."',
  }],
  ['"description": "Oblicz wymiary pikseli dla grafik o zadanym rozmiarze fizycznym."', {
    el: '"description": "Υπολογίστε διαστάσεις pixel για γραφικά με συγκεκριμένο φυσικό μέγεθος."',
    hu: '"description": "Számítsa ki a pixelméreteket adott fizikai méretű grafikákhoz."',
    ro: '"description": "Calculați dimensiunile pixelilor pentru grafice cu dimensiuni fizice date."',
    fi: '"description": "Laske pikselikoot tietyn fyysisen koon grafiikoille."',
    nl: '"description": "Bereken pixelafmetingen voor afbeeldingen met een bepaald fysiek formaat."',
  }],
  ['"title": "Fotoksiążki"', { el: '"title": "Φωτοβιβλία"', hu: '"title": "Fotókönyvek"', ro: '"title": "Fotocărți"', fi: '"title": "Valokuvakirjat"', nl: '"title": "Fotoboeken"' }],
  ['"description": "Przelicz wymiary stron fotoksiążki (cm) na wymogi pikseli drukarni."', {
    el: '"description": "Μετατρέψτε διαστάσεις σελίδων φωτοβιβλίου (cm) σε απαιτήσεις pixel του τυπογραφείου."',
    hu: '"description": "Fotókönyv oldalméretének (cm) átváltása a nyomda pixelkövetelményeire."',
    ro: '"description": "Conversia dimensiunilor paginilor fotocărții (cm) în cerințele de pixeli ale tipografiei."',
    fi: '"description": "Muunna valokuvakirjan sivukoot (cm) painon pikselivaatimuksiksi."',
    nl: '"description": "Converteer fotoboekpagina-afmetingen (cm) naar pixelvereisten van de drukker."',
  }],

  // ── mm-to-px-dpi PL ──
  ['"title": "Poligrafia"', { el: '"title": "Εκτύπωση"', hu: '"title": "Nyomdai munkák"', ro: '"title": "Tipografie"', fi: '"title": "Painotyöt"', nl: '"title": "Drukwerk"' }],
  ['"description": "Wizytówka 85 × 55 mm = 1 004 × 650 px przy 300 DPI."', {
    el: '"description": "Κάρτα 85 × 55 mm = 1.004 × 650 px στα 300 DPI."',
    hu: '"description": "Névjegykártya 85 × 55 mm = 1 004 × 650 px 300 DPI-nál."',
    ro: '"description": "Carte de vizită 85 × 55 mm = 1.004 × 650 px la 300 DPI."',
    fi: '"description": "Käyntikortti 85 × 55 mm = 1 004 × 650 px 300 DPI:llä."',
    nl: '"description": "Visitekaartje 85 × 55 mm = 1.004 × 650 px bij 300 DPI."',
  }],
  ['"title": "Ulotki"', { el: '"title": "Φυλλάδια"', hu: '"title": "Szórólapok"', ro: '"title": "Pliante"', fi: '"title": "Esitteet"', nl: '"title": "Flyers"' }],
  ['"description": "Ulotka DL 99 × 210 mm = 1 169 × 2 480 px przy 300 DPI."', {
    el: '"description": "Φυλλάδιο DL 99 × 210 mm = 1.169 × 2.480 px στα 300 DPI."',
    hu: '"description": "DL szórólap 99 × 210 mm = 1 169 × 2 480 px 300 DPI-nál."',
    ro: '"description": "Pliant DL 99 × 210 mm = 1.169 × 2.480 px la 300 DPI."',
    fi: '"description": "DL-esite 99 × 210 mm = 1 169 × 2 480 px 300 DPI:llä."',
    nl: '"description": "DL-flyer 99 × 210 mm = 1.169 × 2.480 px bij 300 DPI."',
  }],
  ['"title": "Spady (bleed)"', { el: '"title": "Περιθώριο αφαίρεσης (bleed)"', hu: '"title": "Kifutó (bleed)"', ro: '"title": "Bleed"', fi: '"title": "Leikkuuvara (bleed)"', nl: '"title": "Afloop (bleed)"' }],
  ['"description": "Oblicz dodatkowe piksele na 3–5 mm spadów wymaganych przez drukarnię."', {
    el: '"description": "Υπολογίστε τα επιπλέον pixel για τα 3–5 mm bleed που απαιτεί το τυπογραφείο."',
    hu: '"description": "Számítsa ki az extra pixeleket a nyomda által megkövetelt 3–5 mm kifutóhoz."',
    ro: '"description": "Calculați pixelii suplimentari pentru 3–5 mm bleed cerut de tipografie."',
    fi: '"description": "Laske lisäpikselit painon vaatimalle 3–5 mm leikkuuvaralle."',
    nl: '"description": "Bereken extra pixels voor de 3–5 mm afloop die de drukker vereist."',
  }],
  ['"title": "Projektowanie opakowaniach"', { el: '"title": "Σχεδιασμός συσκευασίας"', hu: '"title": "Csomagolástervezés"', ro: '"title": "Design ambalaje"', fi: '"title": "Pakkaussuunnittelu"', nl: '"title": "Verpakkingsontwerp"' }],
  ['"description": "Precyzyjne wymiary etykiet, naklejek i opakowaniach w mm → px."', {
    el: '"description": "Ακριβείς διαστάσεις ετικετών, αυτοκόλλητων και συσκευασιών σε mm → px."',
    hu: '"description": "Címkék, matricák és csomagolások pontos méretei mm → px."',
    ro: '"description": "Dimensiuni precise pentru etichete, autocolante și ambalaje în mm → px."',
    fi: '"description": "Tarkkoja mittoja tarroille, tarrille ja pakkauksille mm → px."',
    nl: '"description": "Precieze afmetingen voor labels, stickers en verpakkingen in mm → px."',
  }],

  // ── inches-to-px-dpi PL ──
  ['"title": "Druk US"', { el: '"title": "Εκτύπωση US"', hu: '"title": "US nyomtatás"', ro: '"title": "Tipărire US"', fi: '"title": "US-tulostus"', nl: '"title": "US-print"' }],
  ['"description": "Letter 8,5 × 11″ przy 300 DPI = 2 550 × 3 300 px."', {
    el: '"description": "Letter 8,5 × 11″ στα 300 DPI = 2.550 × 3.300 px."',
    hu: '"description": "Letter 8,5 × 11″ 300 DPI-nál = 2 550 × 3 300 px."',
    ro: '"description": "Letter 8,5 × 11″ la 300 DPI = 2.550 × 3.300 px."',
    fi: '"description": "Letter 8,5 × 11″ 300 DPI:llä = 2 550 × 3 300 px."',
    nl: '"description": "Letter 8,5 × 11″ bij 300 DPI = 2.550 × 3.300 px."',
  }],
  ['"title": "Monitory"', { el: '"title": "Οθόνες"', hu: '"title": "Monitorok"', ro: '"title": "Monitoare"', fi: '"title": "Näytöt"', nl: '"title": "Monitoren"' }],
  ['"description": "Oblicz PPI monitora: 27″ 4K (3840px) = 163 PPI."', {
    el: '"description": "Υπολογίστε PPI οθόνης: 27″ 4K (3840px) = 163 PPI."',
    hu: '"description": "Számítsa ki a monitor PPI-jét: 27″ 4K (3840px) = 163 PPI."',
    ro: '"description": "Calculați PPI-ul monitorului: 27″ 4K (3840px) = 163 PPI."',
    fi: '"description": "Laske näytön PPI: 27″ 4K (3840px) = 163 PPI."',
    nl: '"description": "Bereken monitor-PPI: 27″ 4K (3840px) = 163 PPI."',
  }],
  ['"title": "Fotografia"', { el: '"title": "Φωτογραφία"', hu: '"title": "Fotózás"', ro: '"title": "Fotografie"', fi: '"title": "Valokuvaus"', nl: '"title": "Fotografie"' }],
  ['"description": "Wydruk zdjęcia 4 × 6″ przy 300 DPI = 1 200 × 1 800 px."', {
    el: '"description": "Εκτύπωση φωτογραφίας 4 × 6″ στα 300 DPI = 1.200 × 1.800 px."',
    hu: '"description": "Fotónyomtatás 4 × 6″ 300 DPI-nál = 1 200 × 1 800 px."',
    ro: '"description": "Tipărire foto 4 × 6″ la 300 DPI = 1.200 × 1.800 px."',
    fi: '"description": "Valokuvatulostus 4 × 6″ 300 DPI:llä = 1 200 × 1 800 px."',
    nl: '"description": "Fotoprint 4 × 6″ bij 300 DPI = 1.200 × 1.800 px."',
  }],
  ['"description": "W CSS 1 in = 96 px (definicja CSS)."', {
    el: '"description": "Σε CSS 1 in = 96 px (ορισμός CSS)."',
    hu: '"description": "CSS-ben 1 in = 96 px (CSS-definíció)."',
    ro: '"description": "În CSS 1 in = 96 px (definiție CSS)."',
    fi: '"description": "CSS:ssä 1 in = 96 px (CSS-määritelmä)."',
    nl: '"description": "In CSS is 1 in = 96 px (CSS-definitie)."',
  }],

  // ── dpi-to-ppi PL ──
  ['"description": "Drukarnia żąda 300 DPI – oznacza to, że grafika musi mieć 300 PPI."', {
    el: '"description": "Το τυπογραφείο απαιτεί 300 DPI — αυτό σημαίνει ότι η εικόνα πρέπει να έχει 300 PPI."',
    hu: '"description": "A nyomda 300 DPI-t kér – ez azt jelenti, hogy a grafika 300 PPI-vel kell rendelkezzen."',
    ro: '"description": "Tipografia cere 300 DPI – aceasta înseamnă că graficul trebuie să aibă 300 PPI."',
    fi: '"description": "Paino vaatii 300 DPI – tämä tarkoittaa, että kuvan on oltava 300 PPI."',
    nl: '"description": "De drukker vereist 300 DPI – dat betekent dat de afbeelding 300 PPI moet zijn."',
  }],
  ['"title": "Ekrany i wyświetlacze"', { el: '"title": "Οθόνες"', hu: '"title": "Képernyők"', ro: '"title": "Ecrane"', fi: '"title": "Näytöt"', nl: '"title": "Schermen"' }],
  ['"title": "Eksport grafik"', { el: '"title": "Εξαγωγή γραφικών"', hu: '"title": "Grafika exportálás"', ro: '"title": "Export grafice"', fi: '"title": "Grafiikan vienti"', nl: '"title": "Grafiek exporteren"' }],
  ['"description": "Photoshop \\"DPI\\" = PPI. 72 DPI dla web, 300 DPI dla druku."', {
    el: '"description": "Photoshop \\"DPI\\" = PPI. 72 DPI για web, 300 DPI για εκτύπωση."',
    hu: '"description": "Photoshop \\"DPI\\" = PPI. 72 DPI webhez, 300 DPI nyomtatáshoz."',
    ro: '"description": "Photoshop \\"DPI\\" = PPI. 72 DPI pentru web, 300 DPI pentru tipar."',
    fi: '"description": "Photoshop \\"DPI\\" = PPI. 72 DPI verkkoon, 300 DPI tulostukseen."',
    nl: '"description": "Photoshop \\"DPI\\" = PPI. 72 DPI voor web, 300 DPI voor print."',
  }],
  ['"title": "Edukacja"', { el: '"title": "Εκπαίδευση"', hu: '"title": "Oktatás"', ro: '"title": "Educație"', fi: '"title": "Opetus"', nl: '"title": "Educatie"' }],
  ['"description": "Zrozum różnicę między DPI (druk) a PPI (ekran)."', {
    el: '"description": "Κατανοήστε τη διαφορά μεταξύ DPI (εκτύπωση) και PPI (οθόνη)."',
    hu: '"description": "Értse meg a különbséget a DPI (nyomtatás) és a PPI (képernyő) között."',
    ro: '"description": "Înțelegeți diferența dintre DPI (tipărire) și PPI (ecran)."',
    fi: '"description": "Ymmärrä ero DPI:n (tulostus) ja PPI:n (näyttö) välillä."',
    nl: '"description": "Begrijp het verschil tussen DPI (print) en PPI (scherm)."',
  }],

  // ── rgb-to-hsl PL ──
  ['"description": "Tworzenie wariantów: zmieniaj L (jasność) przy stałym H i S."', {
    el: '"description": "Δημιουργία παραλλαγών: αλλάξτε L (φωτεινότητα) κρατώντας σταθερά τα H και S."',
    hu: '"description": "Változatok létrehozása: változtassa az L (világosság) értékét, miközben H és S állandó."',
    ro: '"description": "Crearea variantelor: modificați L (luminozitate) cu H și S constante."',
    fi: '"description": "Varianttien luominen: muuta L (valoisuus) pitäen H ja S vakiona."',
    nl: '"description": "Varianten maken: wijzig L (helderheid) met constante H en S."',
  }],
  ['"description": "<code>hsl(217, 91%, 60%)</code> – intuicyjny zapis kolorów."', {
    el: '"description": "<code>hsl(217, 91%, 60%)</code> — διαισθητική σημειογραφία χρωμάτων."',
    hu: '"description": "<code>hsl(217, 91%, 60%)</code> — intuitív színjelölés."',
    ro: '"description": "<code>hsl(217, 91%, 60%)</code> — notație intuitivă a culorilor."',
    fi: '"description": "<code>hsl(217, 91%, 60%)</code> — intuitiivinen värimerkintä."',
    nl: '"description": "<code>hsl(217, 91%, 60%)</code> — intuïtieve kleurnotatie."',
  }],
  ['"title": "Tryb ciemny"', { el: '"title": "Σκοτεινή λειτουργία"', hu: '"title": "Sötét mód"', ro: '"title": "Mod întunecat"', fi: '"title": "Tumma tila"', nl: '"title": "Donkere modus"' }],
  ['"description": "Zmiana L z 95% na 10% tworzy wariant ciemnego motywu."', {
    el: '"description": "Αλλαγή L από 95% σε 10% δημιουργεί παραλλαγή σκοτεινού θέματος."',
    hu: '"description": "Az L 95%-ról 10%-ra változtatása sötét téma változatot hoz létre."',
    ro: '"description": "Schimbarea L de la 95% la 10% creează varianta temei întunecate."',
    fi: '"description": "L:n muuttaminen 95 %:sta 10 %:iin luo tumman teeman variantin."',
    nl: '"description": "L wijzigen van 95% naar 10% maakt een donker thema-variant."',
  }],
  ['"title": "Projektowanie"', { el: '"title": "Σχεδιασμός"', hu: '"title": "Tervezés"', ro: '"title": "Design"', fi: '"title": "Suunnittelu"', nl: '"title": "Ontwerp"' }],
  ['"description": "HSL ułatwia tworzenie spójnych palet: obróć H o 120° = kolor komplementarny."', {
    el: '"description": "Το HSL διευκολύνει τη δημιουργία συνεπών παλετών: περιστρέψτε H κατά 120° = συμπληρωματικό χρώμα."',
    hu: '"description": "A HSL megkönnyíti az egységes paletták létrehozását: forgassa el H-t 120°-kal = komplementer szín."',
    ro: '"description": "HSL facilitează crearea paletelor consistente: rotiți H cu 120° = culoare complementară."',
    fi: '"description": "HSL helpottaa yhtenäisten palettien luomista: käännä H 120° = komplementtiväri."',
    nl: '"description": "HSL maakt het eenvoudig om consistente paletten te maken: draai H 120° = complementaire kleur."',
  }],

  // ── rgb-to-cmyk PL ──
  ['"description": "Sprawdź wartości CMYK przed wysłaniem projektu do drukarni."', {
    el: '"description": "Ελέγξτε τις τιμές CMYK πριν στείλετε το σχέδιο στο τυπογραφείο."',
    hu: '"description": "Ellenőrizze a CMYK-értékeket, mielőtt elküldi a tervet a nyomdába."',
    ro: '"description": "Verificați valorile CMYK înainte de a trimite designul la tipografie."',
    fi: '"description": "Tarkista CMYK-arvot ennen suunnitelman lähettämistä painoon."',
    nl: '"description": "Controleer CMYK-waarden voordat u het ontwerp naar de drukker stuurt."',
  }],
  ['"title": "Weryfikacja kolorów"', { el: '"title": "Επαλήθευση χρωμάτων"', hu: '"title": "Szín ellenőrzés"', ro: '"title": "Verificare culori"', fi: '"title": "Värien tarkistus"', nl: '"title": "Kleurverificatie"' }],
  ['"description": "Czy kolor RGB mieści się w zakresie CMYK? Sprawdź przed drukiem."', {
    el: '"description": "Βρίσκεται το χρώμα RGB εντός του εύρους CMYK; Ελέγξτε πριν την εκτύπωση."',
    hu: '"description": "A CMYK gamut-on belül van az RGB szín? Ellenőrizze nyomtatás előtt."',
    ro: '"description": "Culoarea RGB se încadrează în gama CMYK? Verificați înainte de tipărire."',
    fi: '"description": "Onko RGB-väri CMYK-skaalan sisällä? Tarkista ennen tulostusta."',
    nl: '"description": "Past de RGB-kleur binnen het CMYK-gamma? Controleer voor het printen."',
  }],
  ['"title": "Materiały brandingowe"', { el: '"title": "Εταιρική ταυτότητα"', hu: '"title": "Arculati anyagok"', ro: '"title": "Materiale de brand"', fi: '"title": "Brändimateriaalit"', nl: '"title": "Merkmateriaal"' }],
  ['"description": "Dopasuj kolory firmowe do druku: wizytówki, ulotki, katalogi."', {
    el: '"description": "Αντιστοιχίστε εταιρικά χρώματα για εκτύπωση: κάρτες, φυλλάδια, κατάλογοι."',
    hu: '"description": "Illessze a márkaszíneket a nyomtatáshoz: névjegykártyák, szórólapok, katalógusok."',
    ro: '"description": "Potriviți culorile brandului pentru tipar: cărți de vizită, pliante, cataloage."',
    fi: '"description": "Sovita brändivärit tulostukseen: käyntikortit, esitteet, luettelot."',
    nl: '"description": "Pas merkkleuren aan voor druk: visitekaartjes, flyers, catalogi."',
  }],
  ['"description": "Konwersja zdjęć z RGB na CMYK przed drukiem fotoksiążek."', {
    el: '"description": "Μετατροπή φωτογραφιών από RGB σε CMYK πριν την εκτύπωση φωτοβιβλίων."',
    hu: '"description": "Fotók konvertálása RGB-ről CMYK-ra fotókönyv nyomtatása előtt."',
    ro: '"description": "Conversia fotografiilor din RGB în CMYK înainte de tipărirea fotocărților."',
    fi: '"description": "Valokuvien muuntaminen RGB:stä CMYK:ksi ennen valokuvakirjojen tulostusta."',
    nl: '"description": "Converteer foto\'s van RGB naar CMYK vóór het afdrukken van fotoboeken."',
  }],

  // ── bytes-converter PL ──
  ['"title": "Pojemność dysków"', { el: '"title": "Χωρητικότητα δίσκων"', hu: '"title": "Lemezkapacitás"', ro: '"title": "Capacitate discuri"', fi: '"title": "Levykapasiteetti"', nl: '"title": "Schijfcapaciteit"' }],
  ['"description": "Dysk 1 TB (producent) = 931 GB w systemie binarnym."', {
    el: '"description": "Δίσκος 1 TB (κατασκευαστής) = 931 GB σε δυαδικό σύστημα."',
    hu: '"description": "1 TB lemez (gyártó) = 931 GB bináris rendszerben."',
    ro: '"description": "Disc 1 TB (producător) = 931 GB în sistemul binar."',
    fi: '"description": "1 TB levy (valmistaja) = 931 GB binäärijärjestelmässä."',
    nl: '"description": "1 TB schijf (fabrikant) = 931 GB in het binaire systeem."',
  }],
  ['"title": "Limity przesyłania"', { el: '"title": "Όρια μεταφόρτωσης"', hu: '"title": "Feltöltési korlátok"', ro: '"title": "Limite de upload"', fi: '"title": "Latausrajat"', nl: '"title": "Uploadlimieten"' }],
  ['"description": "Załącznik e-mail: 25 MB = 26 214 400 B."', {
    el: '"description": "Συνημμένο email: 25 MB = 26.214.400 B."',
    hu: '"description": "E-mail melléklet: 25 MB = 26 214 400 B."',
    ro: '"description": "Atașament email: 25 MB = 26.214.400 B."',
    fi: '"description": "Sähköpostin liite: 25 MB = 26 214 400 B."',
    nl: '"description": "E-mailbijlage: 25 MB = 26.214.400 B."',
  }],
  ['"title": "Serwery"', { el: '"title": "Διακομιστές"', hu: '"title": "Szerverek"', ro: '"title": "Servere"', fi: '"title": "Palvelimet"', nl: '"title": "Servers"' }],
  ['"description": "Planowanie pojemności: RAM, dyski, transfer."', {
    el: '"description": "Σχεδιασμός χωρητικότητας: RAM, δίσκοι, μεταφορά δεδομένων."',
    hu: '"description": "Kapacitástervezés: RAM, lemezek, adatátvitel."',
    ro: '"description": "Planificarea capacității: RAM, discuri, transfer."',
    fi: '"description": "Kapasiteetin suunnittelu: RAM, levyt, tiedonsiirto."',
    nl: '"description": "Capaciteitsplanning: RAM, schijven, datatransfer."',
  }],
  ['"title": "Pamięć urządzeń"', { el: '"title": "Μνήμη συσκευής"', hu: '"title": "Eszközmemória"', ro: '"title": "Memorie dispozitiv"', fi: '"title": "Laitteen muisti"', nl: '"title": "Apparaatgeheugen"' }],
  ['"description": "Telefon 128 GB = 137 438 953 472 B."', {
    el: '"description": "Τηλέφωνο 128 GB = 137.438.953.472 B."',
    hu: '"description": "Telefon 128 GB = 137 438 953 472 B."',
    ro: '"description": "Telefon 128 GB = 137.438.953.472 B."',
    fi: '"description": "Puhelin 128 GB = 137 438 953 472 B."',
    nl: '"description": "Telefoon 128 GB = 137.438.953.472 B."',
  }],

  // ── unix-timestamp PL ──
  ['"title": "Bazy danych"', { el: '"title": "Βάσεις δεδομένων"', hu: '"title": "Adatbázisok"', ro: '"title": "Baze de date"', fi: '"title": "Tietokannat"', nl: '"title": "Databases"' }],
  ['"description": "Pola created_at, updated_at przechowują timestamp."', {
    el: '"description": "Τα πεδία created_at, updated_at αποθηκεύουν timestamp."',
    hu: '"description": "A created_at, updated_at mezők timestampot tárolnak."',
    ro: '"description": "Câmpurile created_at, updated_at stochează timestamp."',
    fi: '"description": "Kentät created_at, updated_at tallentavat aikaleiman."',
    nl: '"description": "Velden zoals created_at en updated_at slaan timestamps op."',
  }],
  ['"title": "API i JWT"', { el: '"title": "API & JWT"', hu: '"title": "API és JWT"', ro: '"title": "API și JWT"', fi: '"title": "API ja JWT"', nl: '"title": "API & JWT"' }],
  ['"description": "Tokeny JWT: pole exp (wygaśnięcie) to timestamp."', {
    el: '"description": "JWT tokens: το πεδίο exp (λήξη) είναι timestamp."',
    hu: '"description": "JWT tokenek: az exp (lejárat) mező timestamp."',
    ro: '"description": "Token-uri JWT: câmpul exp (expirare) este timestamp."',
    fi: '"description": "JWT-tokenit: exp (vanheneminen) -kenttä on aikaleima."',
    nl: '"description": "JWT-tokens: het exp-veld (vervaldatum) is een timestamp."',
  }],
  ['"title": "Logi serwerów"', { el: '"title": "Αρχεία καταγραφής"', hu: '"title": "Szervernaplók"', ro: '"title": "Jurnale server"', fi: '"title": "Palvelinlokit"', nl: '"title": "Serverlogs"' }],
  ['"description": "Odczytuj timestampy z logów systemowych i aplikacyjnych."', {
    el: '"description": "Ανάγνωση timestamps από αρχεία καταγραφής συστήματος και εφαρμογών."',
    hu: '"description": "Timestampok olvasása rendszer- és alkalmazásnaplókból."',
    ro: '"description": "Citiți timestamp-urile din jurnalele de sistem și aplicații."',
    fi: '"description": "Lue aikaleimoja järjestelmä- ja sovelluslokeista."',
    nl: '"description": "Lees timestamps uit systeem- en applicatielogs."',
  }],
  ['"title": "Debugowanie"', { el: '"title": "Αποσφαλμάτωση"', hu: '"title": "Hibakeresés"', ro: '"title": "Depanare"', fi: '"title": "Virheenkorjaus"', nl: '"title": "Debugging"' }],
  ['"description": "Szybkie sprawdzenie, kiedy wystąpił błąd na podstawie timestamp."', {
    el: '"description": "Γρήγορος έλεγχος πότε προέκυψε σφάλμα βάσει timestamp."',
    hu: '"description": "Gyorsan ellenőrizze, mikor történt a hiba a timestamp alapján."',
    ro: '"description": "Verificați rapid când a apărut eroarea pe baza timestamp-ului."',
    fi: '"description": "Tarkista nopeasti milloin virhe tapahtui aikaleiman perusteella."',
    nl: '"description": "Controleer snel wanneer een fout optrad op basis van de timestamp."',
  }],

  // ── dec-to-bin PL ──
  ['"title": "Programowanie"', { el: '"title": "Προγραμματισμός"', hu: '"title": "Programozás"', ro: '"title": "Programare"', fi: '"title": "Ohjelmointi"', nl: '"title": "Programmeren"' }],
  ['"description": "Operacje bitowe, maski, flagi: 0xFF = 11111111."', {
    el: '"description": "Πράξεις bit, μάσκες, σημαίες: 0xFF = 11111111."',
    hu: '"description": "Bitműveletek, maszkok, jelzők: 0xFF = 11111111."',
    ro: '"description": "Operații pe biți, măști, flag-uri: 0xFF = 11111111."',
    fi: '"description": "Bittioperaatiot, maskit, liput: 0xFF = 11111111."',
    nl: '"description": "Bitbewerkingen, masks, flags: 0xFF = 11111111."',
  }],
  ['"title": "Sieci IP"', { el: '"title": "Δίκτυα IP"', hu: '"title": "IP-hálózatok"', ro: '"title": "Rețele IP"', fi: '"title": "IP-verkot"', nl: '"title": "IP-netwerken"' }],
  ['"description": "Maski podsieci: 255.255.255.0 = /24 (24 jedynki binarnie)."', {
    el: '"description": "Μάσκες υποδικτύου: 255.255.255.0 = /24 (24 άσσοι σε δυαδικό)."',
    hu: '"description": "Alhálózati maszkok: 255.255.255.0 = /24 (24 egyes binárisan)."',
    ro: '"description": "Măști de subrețea: 255.255.255.0 = /24 (24 de unu în binar)."',
    fi: '"description": "Aliverkon maskit: 255.255.255.0 = /24 (24 ykköstä binäärissä)."',
    nl: '"description": "Subnetmaskers: 255.255.255.0 = /24 (24 enen in binair)."',
  }],
  ['"title": "Uprawnienia Unix"', { el: '"title": "Δικαιώματα Unix"', hu: '"title": "Unix jogosultságok"', ro: '"title": "Permisiuni Unix"', fi: '"title": "Unix-oikeudet"', nl: '"title": "Unix-rechten"' }],
  ['"description": "chmod 755 = 111 101 101 binarnie."', {
    el: '"description": "chmod 755 = 111 101 101 σε δυαδικό."',
    hu: '"description": "chmod 755 = 111 101 101 binárisan."',
    ro: '"description": "chmod 755 = 111 101 101 în binar."',
    fi: '"description": "chmod 755 = 111 101 101 binäärissä."',
    nl: '"description": "chmod 755 = 111 101 101 in binair."',
  }],
  ['"title": "Elektronika"', { el: '"title": "Ηλεκτρονικά"', hu: '"title": "Elektronika"', ro: '"title": "Electronică"', fi: '"title": "Elektroniikka"', nl: '"title": "Elektronica"' }],
  ['"description": "Rejestry, porty I/O, protokoły komunikacyjne."', {
    el: '"description": "Καταχωρητές, θύρες I/O, πρωτόκολλα επικοινωνίας."',
    hu: '"description": "Regiszterek, I/O portok, kommunikációs protokollok."',
    ro: '"description": "Registre, porturi I/O, protocoale de comunicație."',
    fi: '"description": "Rekisterit, I/O-portit, tietoliikenneprotokollat."',
    nl: '"description": "Registers, I/O-poorten, communicatieprotocollen."',
  }],

  // ── dec-to-hex PL ──
  ['"title": "Kolory CSS"', { el: '"title": "Χρώματα CSS"', hu: '"title": "CSS színek"', ro: '"title": "Culori CSS"', fi: '"title": "CSS-värit"', nl: '"title": "CSS-kleuren"' }],
  ['"description": "#FF0000 = 255 (czerwony), #00FF00 = 255 (zielony)."', {
    el: '"description": "#FF0000 = 255 (κόκκινο), #00FF00 = 255 (πράσινο)."',
    hu: '"description": "#FF0000 = 255 (piros), #00FF00 = 255 (zöld)."',
    ro: '"description": "#FF0000 = 255 (roșu), #00FF00 = 255 (verde)."',
    fi: '"description": "#FF0000 = 255 (punainen), #00FF00 = 255 (vihreä)."',
    nl: '"description": "#FF0000 = 255 (rood), #00FF00 = 255 (groen)."',
  }],
  ['"description": "Adresy pamięci, bajty, kody znaków Unicode."', {
    el: '"description": "Διευθύνσεις μνήμης, bytes, κωδικοί χαρακτήρων Unicode."',
    hu: '"description": "Memóriacímek, bájtok, Unicode karakterkódok."',
    ro: '"description": "Adrese de memorie, octeți, coduri de caractere Unicode."',
    fi: '"description": "Muistiosoitteet, tavut, Unicode-merkkikoodit."',
    nl: '"description": "Geheugenadressen, bytes, Unicode-tekencodes."',
  }],
  ['"title": "Sieci"', { el: '"title": "Δίκτυα"', hu: '"title": "Hálózatok"', ro: '"title": "Rețele"', fi: '"title": "Verkot"', nl: '"title": "Netwerken"' }],
  ['"description": "Adresy MAC, IPv6, protokoły sieciowe."', {
    el: '"description": "Διευθύνσεις MAC, IPv6, πρωτόκολλα δικτύου."',
    hu: '"description": "MAC-címek, IPv6, hálózati protokollok."',
    ro: '"description": "Adrese MAC, IPv6, protocoale de rețea."',
    fi: '"description": "MAC-osoitteet, IPv6, verkkoprotokollat."',
    nl: '"description": "MAC-adressen, IPv6, netwerkprotocollen."',
  }],
  ['"description": "Hex dump pamięci, analiza plików binarnych."', {
    el: '"description": "Hex dump μνήμης, ανάλυση δυαδικών αρχείων."',
    hu: '"description": "Memória hex dump, bináris fájlok elemzése."',
    ro: '"description": "Hex dump memorie, analiza fișierelor binare."',
    fi: '"description": "Muistin hex-dump, binääritiedostojen analyysi."',
    nl: '"description": "Geheugen hex dump, analyse van binaire bestanden."',
  }],

  // ── mbps-to-mbs PL ──
  ['"title": "Szacowanie pobierania"', { el: '"title": "Εκτίμηση λήψης"', hu: '"title": "Letöltés becslés"', ro: '"title": "Estimare descărcare"', fi: '"title": "Latausarvio"', nl: '"title": "Downloadschatting"' }],
  ['"description": "100 Mbps = plik 1 GB w ok. 80 sekund."', {
    el: '"description": "100 Mbps = αρχείο 1 GB σε περίπου 80 δευτερόλεπτα."',
    hu: '"description": "100 Mbps = 1 GB fájl kb. 80 másodperc alatt."',
    ro: '"description": "100 Mbps = fișier 1 GB în aprox. 80 secunde."',
    fi: '"description": "100 Mbps = 1 GB tiedosto n. 80 sekunnissa."',
    nl: '"description": "100 Mbps = een 1 GB-bestand in ca. 80 seconden."',
  }],
  ['"title": "Wybór pakietu"', { el: '"title": "Σύγκριση πακέτων"', hu: '"title": "Csomag választás"', ro: '"title": "Alegere pachet"', fi: '"title": "Paketin valinta"', nl: '"title": "Pakketkeuze"' }],
  ['"description": "Porównaj oferty operatorów w realnych MB/s."', {
    el: '"description": "Συγκρίνετε προσφορές παρόχων σε πραγματικά MB/s."',
    hu: '"description": "Hasonlítsa össze a szolgáltatói ajánlatokat valós MB/s-ben."',
    ro: '"description": "Comparați ofertele operatorilor în MB/s reali."',
    fi: '"description": "Vertaa operaattoritarjouksia todellisissa MB/s."',
    nl: '"description": "Vergelijk provideraanbiedingen in werkelijke MB/s."',
  }],
  ['"description": "Netflix 4K wymaga 25 Mbps = 3,1 MB/s."', {
    el: '"description": "Το Netflix 4K απαιτεί 25 Mbps = 3,1 MB/s."',
    hu: '"description": "A Netflix 4K 25 Mbps-t igényel = 3,1 MB/s."',
    ro: '"description": "Netflix 4K necesită 25 Mbps = 3,1 MB/s."',
    fi: '"description": "Netflix 4K vaatii 25 Mbps = 3,1 MB/s."',
    nl: '"description": "Netflix 4K vereist 25 Mbps = 3,1 MB/s."',
  }],
  ['"description": "Transfer serwera: 1 TB/miesiąc = ile Mbps potrzebujesz?"', {
    el: '"description": "Εύρος ζώνης server: 1 TB/μήνα = πόσα Mbps χρειάζεστε;"',
    hu: '"description": "Szerver sávszélesség: 1 TB/hónap = hány Mbps szükséges?"',
    ro: '"description": "Lățime de bandă server: 1 TB/lună = câți Mbps aveți nevoie?"',
    fi: '"description": "Palvelimen kaistanleveys: 1 TB/kk = kuinka monta Mbps tarvitset?"',
    nl: '"description": "Serverbandbreedte: 1 TB/maand = hoeveel Mbps heeft u nodig?"',
  }],

  // ── vw-to-px PL ──
  ['"title": "Responsywne układy"', { el: '"title": "Responsive διατάξεις"', hu: '"title": "Reszponzív elrendezések"', ro: '"title": "Layout-uri responsive"', fi: '"title": "Responsiiviset asettelut"', nl: '"title": "Responsieve lay-outs"' }],
  ['"description": "Sekcje pełnoekranowe: width: 100vw, height: 100vh."', {
    el: '"description": "Τμήματα πλήρους οθόνης: width: 100vw, height: 100vh."',
    hu: '"description": "Teljes képernyős szekciók: width: 100vw, height: 100vh."',
    ro: '"description": "Secțiuni full-screen: width: 100vw, height: 100vh."',
    fi: '"description": "Koko näytön osiot: width: 100vw, height: 100vh."',
    nl: '"description": "Volledig scherm secties: width: 100vw, height: 100vh."',
  }],
  ['"description": "Tytuły skalowane: font-size: clamp(2rem, 5vw, 4rem)."', {
    el: '"description": "Κλιμακούμενοι τίτλοι: font-size: clamp(2rem, 5vw, 4rem)."',
    hu: '"description": "Skálázott címsorok: font-size: clamp(2rem, 5vw, 4rem)."',
    ro: '"description": "Titluri scalate: font-size: clamp(2rem, 5vw, 4rem)."',
    fi: '"description": "Skaalautuvat otsikot: font-size: clamp(2rem, 5vw, 4rem)."',
    nl: '"description": "Geschaalde titels: font-size: clamp(2rem, 5vw, 4rem)."',
  }],
  ['"description": "Marginesy i paddingi w vw skalują się z ekranem."', {
    el: '"description": "Τα margins και paddings σε vw κλιμακώνονται με την οθόνη."',
    hu: '"description": "A vw margók és paddingek a képernyővel együtt skálázódnak."',
    ro: '"description": "Marginile și padding-urile în vw se scalează cu ecranul."',
    fi: '"description": "Marginaalit ja täytteet vw:ssä skaalautuvat näytön mukaan."',
    nl: '"description": "Marges en paddings in vw schalen mee met het scherm."',
  }],
  ['"description": "Sprawdź, ile px ma dany vw na konkretnym urządzeniu."', {
    el: '"description": "Ελέγξτε πόσα px αντιστοιχεί ένα vw σε συγκεκριμένη συσκευή."',
    hu: '"description": "Ellenőrizze, hány px egy adott vw érték egy konkrét eszközön."',
    ro: '"description": "Verificați câți px are o valoare vw pe un dispozitiv specific."',
    fi: '"description": "Tarkista kuinka monta px tietty vw-arvo on tietyllä laitteella."',
    nl: '"description": "Controleer hoeveel px een bepaalde vw-waarde is op een specifiek apparaat."',
  }],

  // ── tw-to-px PL ──
  ['"title": "Debugowanie CSS"', { el: '"title": "Αποσφαλμάτωση CSS"', hu: '"title": "CSS hibakeresés"', ro: '"title": "Depanare CSS"', fi: '"title": "CSS-virheenkorjaus"', nl: '"title": "CSS-debugging"' }],
  ['"description": "Ile px ma p-6? Odpowiedź: 24 px (1,5 rem)."', {
    el: '"description": "Πόσα px είναι p-6; Απάντηση: 24 px (1,5 rem)."',
    hu: '"description": "Hány px a p-6? Válasz: 24 px (1,5 rem)."',
    ro: '"description": "Câți px are p-6? Răspuns: 24 px (1,5 rem)."',
    fi: '"description": "Kuinka monta px on p-6? Vastaus: 24 px (1,5 rem)."',
    nl: '"description": "Hoeveel px is p-6? Antwoord: 24 px (1,5 rem)."',
  }],
  ['"title": "Konwersja z Figma"', { el: '"title": "Μετατροπή από Figma"', hu: '"title": "Figma konverzió"', ro: '"title": "Conversie din Figma"', fi: '"title": "Figma-muunnos"', nl: '"title": "Figma-conversie"' }],
  ['"description": "Projekt w px → odpowiednie klasy Tailwind."', {
    el: '"description": "Σχέδιο σε px → αντίστοιχες κλάσεις Tailwind."',
    hu: '"description": "Terv px-ben → megfelelő Tailwind osztályok."',
    ro: '"description": "Design în px → clasele Tailwind corespunzătoare."',
    fi: '"description": "Suunnitelma px:ssä → vastaavat Tailwind-luokat."',
    nl: '"description": "Ontwerp in px → bijpassende Tailwind-klassen."',
  }],
  ['"description": "Dopasowanie układu do wymaganego projektu graficznego."', {
    el: '"description": "Αντιστοίχιση διάταξης με τον απαιτούμενο γραφιστικό σχεδιασμό."',
    hu: '"description": "Az elrendezés illesztése a szükséges grafikai tervhez."',
    ro: '"description": "Potrivirea layout-ului cu designul grafic necesar."',
    fi: '"description": "Asettelun sovittaminen vaadittuun graafiseen suunnitelmaan."',
    nl: '"description": "De lay-out afstemmen op het vereiste grafisch ontwerp."',
  }],
  ['"title": "Współpraca z designerami"', { el: '"title": "Συνεργασία με σχεδιαστές"', hu: '"title": "Együttműködés designerekkel"', ro: '"title": "Colaborare cu designeri"', fi: '"title": "Yhteistyö suunnittelijoiden kanssa"', nl: '"title": "Samenwerking met designers"' }],
  ['"description": "Designer podaje px, programista potrzebuje klas Tailwind."', {
    el: '"description": "Ο σχεδιαστής δίνει px, ο προγραμματιστής χρειάζεται κλάσεις Tailwind."',
    hu: '"description": "A designer px-t ad meg, a fejlesztőnek Tailwind osztályok kellenek."',
    ro: '"description": "Designerul oferă px, programatorul are nevoie de clase Tailwind."',
    fi: '"description": "Suunnittelija antaa px, kehittäjä tarvitsee Tailwind-luokat."',
    nl: '"description": "De designer geeft px, de ontwikkelaar heeft Tailwind-klassen nodig."',
  }],
];

const LOCALES = ['el', 'hu', 'ro', 'fi', 'nl'];

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
        content = content.replace(find, replace);
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

console.log(`\n✓ Fixed ${totalFixed} strings in ${filesChanged} files`);
