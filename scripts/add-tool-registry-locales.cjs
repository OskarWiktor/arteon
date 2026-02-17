/**
 * Add el, bg, ha, yo, af entries to TOOL_SECTIONS and TOOL_REGISTRY in tool-registry.ts
 * Usage: node scripts/add-tool-registry-locales.cjs
 */
const fs = require('fs');
const path = require('path');
const fp = path.join(__dirname, '..', 'lib', 'i18n', 'tool-registry.ts');

let src = fs.readFileSync(fp, 'utf-8');

// ── TOOL_SECTIONS locale entries ──
const SECTION_TITLES = {
  obrazy: { el: 'Εικόνες και favicon', bg: 'Изображения и favicon', ha: 'Hotuna da favicon', yo: 'Àwọn àwòrán àti favicon', af: 'Beelde en favicons' },
  seo: { el: 'Meta & SEO', bg: 'Meta и SEO', ha: 'Meta & SEO', yo: 'Meta & SEO', af: 'Meta & SEO' },
  email: { el: 'Email & επικοινωνία', bg: 'Имейл и комуникация', ha: 'Imel da sadarwa', yo: 'Ímeèlì àti ìbánisọ̀rọ̀', af: 'E-pos & kommunikasie' },
  kolory: { el: 'Χρώματα & παλέτες', bg: 'Цветове и палитри', ha: 'Launuka da fayafai', yo: 'Àwọ̀ àti pálẹ́ẹ̀tì', af: 'Kleure & palette' },
  druk: { el: 'Εκτύπωση & QR', bg: 'Печат и QR', ha: 'Bugu da QR', yo: 'Ìtẹ̀wé àti QR', af: 'Druk & QR' },
};

for (const [sectionKey, titles] of Object.entries(SECTION_TITLES)) {
  // Find the sl entry in this section and add after it
  const regex = new RegExp(
    `(key: '${sectionKey}'[\\s\\S]*?sl: \\{ title: '[^']*' \\},)`,
    'm'
  );
  const replacement = `$1\n      el: { title: '${titles.el}' },\n      bg: { title: '${titles.bg}' },\n      ha: { title: '${titles.ha}' },\n      yo: { title: '${titles.yo}' },\n      af: { title: '${titles.af}' },`;
  src = src.replace(regex, replacement);
}

// ── TOOL_REGISTRY locale entries ──
const TOOL_LOCALES = {
  jpgToWebp: {
    el: { slug: 'metatropeas-jpg-png-se-webp', title: 'Μετατροπέας JPG/PNG σε WebP', description: 'Μειώστε το μέγεθος εικόνων χωρίς απώλεια ποιότητας. Μετατρέψτε JPG και PNG σε WebP και επιταχύνετε τον ιστότοπό σας.' },
    bg: { slug: 'konvertor-jpg-png-v-webp', title: 'Конвертор JPG/PNG в WebP', description: 'Намалете размера на изображенията без загуба на качество. Конвертирайте JPG и PNG в WebP и ускорете уебсайта си.' },
    ha: { slug: 'mai-canza-jpg-png-zuwa-webp', title: 'Mai canza JPG/PNG zuwa WebP', description: 'Rage girman hotuna ba tare da rasa inganci ba. Canza JPG da PNG zuwa WebP don saurin shafin yanar gizo.' },
    yo: { slug: 'oluyipada-jpg-png-si-webp', title: 'Olùyípadà JPG/PNG sí WebP', description: 'Dín ìwọ̀n àwọn àwòrán kù láìsí pípàdánù dídára. Yí JPG àti PNG padà sí WebP kí ojú-ìwé ayélujára rẹ lè yára.' },
    af: { slug: 'jpg-png-na-webp-omskakelaar', title: 'JPG/PNG-na-WebP-omskakelaar', description: 'Verminder beeldgrootte sonder kwaliteitverlies. Skakel JPG en PNG om na WebP en versnel jou webwerf.' },
  },
  imageResize: {
    el: { slug: 'epexergasia-eikonas', title: 'Επεξεργασία εικόνας', description: 'Ετοιμάστε το τέλειο κάδρο για μέσα κοινωνικής δικτύωσης ή τον ιστότοπό σας. Επιλέξτε έτοιμη μορφή ή εισάγετε προσαρμοσμένες διαστάσεις.' },
    bg: { slug: 'redaktor-na-izobrazhenia', title: 'Редактор на изображения', description: 'Подгответе перфектното изрязване за социални мрежи или уебсайта си. Изберете готов формат или въведете персонализирани размери.' },
    ha: { slug: 'editan-hoto', title: 'Editan hoto', description: 'Shirya kyakkyawan yanki don kafofin watsa labarun ko shafin yanar gizo. Zabi tsari da aka riga aka yi ko shigar da girman da kake so.' },
    yo: { slug: 'olootu-aworan', title: 'Olóòtú àwòrán', description: 'Pèsè gégé tó dára jùlọ fún ojú-ìwé àwùjọ tàbí ojú-ìwé ayélujára rẹ. Yan ọ̀nà tó ti ṣetán tàbí tẹ ìwọ̀n àdáni.' },
    af: { slug: 'beeldredigeerder', title: 'Beeldredigeerder', description: 'Berei die perfekte snywerk voor vir sosiale media of jou webwerf. Kies \'n voorafbepaalde formaat of voer pasgemaakte afmetings in.' },
  },
  favicon: {
    el: { slug: 'dorean-dimiourgia-favicon', title: 'Δημιουργία favicon', description: 'Δημιουργήστε favicon.ico και εικονίδια PNG από μία εικόνα, σύμφωνα με τις απαιτήσεις προγραμμάτων περιήγησης και Lighthouse.' },
    bg: { slug: 'bezplaten-generator-na-favicon', title: 'Генератор на favicon', description: 'Генерирайте favicon.ico и PNG икони от едно изображение, съобразено с изискванията на браузърите и Lighthouse.' },
    ha: { slug: 'samar-da-favicon-kyauta', title: 'Mai samar da favicon', description: 'Samar da favicon.ico da guntuwar PNG daga hoto guda, daidai da bukatun masu bincike da Lighthouse.' },
    yo: { slug: 'olupilese-favicon-ofe', title: 'Olùpilẹ̀ṣẹ̀ favicon', description: 'Ṣẹ̀dá favicon.ico àti àwọn àmì PNG láti àwòrán kan ṣoṣo, ní ìbámu pẹ̀lú àwọn ìlànà àwọn aṣàwákiri àti Lighthouse.' },
    af: { slug: 'gratis-favicon-generator', title: 'Favicon-generator', description: 'Genereer favicon.ico en PNG-ikone vanuit een beeld, wat voldoen aan blaaier- en Lighthouse-vereistes.' },
  },
  metaCounter: {
    el: { slug: 'elegkhos-meta-titlou-kai-perigrafis', title: 'Έλεγχος meta τίτλου και περιγραφής', description: 'Ελέγξτε τον αριθμό χαρακτήρων και δείτε πώς φαίνεται η σελίδα σας στο Google. Αποφύγετε κομμένους τίτλους και περιγραφές στα αποτελέσματα αναζήτησης.' },
    bg: { slug: 'proverka-na-meta-zaglavie-i-opisanie', title: 'Проверка на meta заглавие и описание', description: 'Проверете броя знаци и прегледайте как страницата ви изглежда в Google. Избягвайте отрязани заглавия и описания в резултатите от търсенето.' },
    ha: { slug: 'tantance-meta-take-da-bayani', title: 'Tantance meta take da bayani', description: 'Duba adadin haruffa kuma ka ga yadda shafinka yake a Google. Guje wa taken da bayanin da aka yanke a sakamakon bincike.' },
    yo: { slug: 'atunyewo-meta-akole-ati-apejuwe', title: 'Àtúnyẹ̀wò meta àkọlé àti àpèjúwe', description: 'Ṣàyẹ̀wò iye àwọn ohun kíkọ kí o sì ṣàgbéyẹ̀wò bí ojú-ìwé rẹ ṣe hàn nínú Google. Yẹra fún àwọn àkọlé àti àpèjúwe tí a gé kúrú nínú àbájáde ìwádìí.' },
    af: { slug: 'meta-titel-en-beskrywing-nagaaier', title: 'Meta-titel- en -beskrywing-nagaaier', description: 'Kontroleer die aantal karakters en sien hoe jou bladsy in Google lyk. Vermy afgekapte titels en beskrywings in soekresultate.' },
  },
  wordCounter: {
    el: { slug: 'metritis-lexeon-kai-charaktiron', title: 'Μετρητής λέξεων και χαρακτήρων', description: 'Ελέγξτε το μήκος κειμένου και αξιολογήστε αν ταιριάζει σε αρχική σελίδα, σελίδα υπηρεσιών, άρθρο ή περιγραφή προϊόντος.' },
    bg: { slug: 'broiach-na-dumi-i-simvoli', title: 'Брояч на думи и символи', description: 'Проверете дължината на текста и преценете дали е подходяща за начална страница, страница за услуги, блог статия или описание на продукт.' },
    ha: { slug: 'kidaya-kalmomi-da-haruffa', title: 'Kidaya kalmomi da haruffa', description: 'Duba tsawon rubutu kuma tantance ko ya dace da shafin farko, shafin sabis, labarin blog, ko bayanin kaya.' },
    yo: { slug: 'oluka-oro-ati-ohun-kikoo', title: 'Olùkà ọ̀rọ̀ àti ohun kíkọ', description: 'Ṣàyẹ̀wò gígùn ọ̀rọ̀ kí o sì ṣe àyẹ̀wò bóyá ó tọ́ fún ojú-ìwé ilé, ojú-ìwé iṣẹ́, àkọlé blog, tàbí àpèjúwe ọjà.' },
    af: { slug: 'woord-en-karakter-teller', title: 'Woord- en karakterteller', description: 'Kontroleer tekslengte en evalueer of dit pas vir \'n tuisblad, diensbladsy, bloginskrywing of produkbeskrywing.' },
  },
  emailSignature: {
    el: { slug: 'dorean-dimiourgia-ypografis-email', title: 'Δημιουργία υπογραφής email', description: 'Δημιουργήστε επαγγελματική υπογραφή email σε λίγα λεπτά. Αντιγράψτε τον έτοιμο κώδικα HTML στο Gmail ή στο Outlook.' },
    bg: { slug: 'bezplaten-generator-na-podpis-za-email', title: 'Генератор на подпис за имейл', description: 'Създайте професионален подпис за имейл за минути. Копирайте готовия HTML код в Gmail или Outlook.' },
    ha: { slug: 'samar-da-sa-hannu-imel-kyauta', title: 'Mai samar da sa hannun imel', description: 'Gina sa hannun imel na kwararru a cikin mintuna kadan. Kwafa lambar HTML da aka riga aka yi zuwa Gmail ko Outlook.' },
    yo: { slug: 'olupilese-ibuwolu-imeeli-ofe', title: 'Olùpilẹ̀ṣẹ̀ ìbuwọ́lù ímeèlì', description: 'Kọ́ ìbuwọ́lù ímeèlì ọjọ́gbọ́n ní ìṣẹ́jú díẹ̀. Ṣe àdàkọ kóòdù HTML tó ti ṣetán sínú Gmail tàbí Outlook.' },
    af: { slug: 'gratis-e-pos-handtekening-generator', title: 'E-poshandtekeninggenerator', description: 'Skep \'n professionele e-poshandtekening binne minute. Kopieer die klaargemaakte HTML-kode na Gmail of Outlook.' },
  },
  contrastChecker: {
    el: { slug: 'elegkhos-kontrast-chromaton', title: 'Έλεγχος αντίθεσης χρωμάτων', description: 'Ελέγξτε αν τα χρώματα κειμένου και φόντου είναι ευανάγνωστα. Το εργαλείο υπολογίζει την αντίθεση σύμφωνα με το WCAG και βοηθά στην επιλογή χρώματος.' },
    bg: { slug: 'proverka-na-kontrast-na-tsvetove', title: 'Проверка на контраст на цветове', description: 'Проверете дали цветовете на текста и фона са четливи. Инструментът изчислява контраста по WCAG и помага при избора на правилния цвят.' },
    ha: { slug: 'tantance-bambancin-launuka', title: 'Tantance bambancin launuka', description: 'Duba ko launukan rubutu da bango suna da saukin karantawa. Kayan aiki yana lissafin bambanci bisa WCAG kuma yana taimakawa wajen zabar launi.' },
    yo: { slug: 'atunyewo-iyato-awon-awoo', title: 'Àtúnyẹ̀wò ìyàtọ̀ àwọn àwọ̀', description: 'Ṣàyẹ̀wò bóyá àwọ̀ ọ̀rọ̀ àti àwọ̀ ẹ̀yìn ṣé kà. Irinṣẹ́ náà ṣe ìṣirò ìyàtọ̀ gẹ́gẹ́ bí WCAG, ó sì ràn ọ́ lọ́wọ́ láti yan àwọ̀ tó tọ́.' },
    af: { slug: 'kleurkontras-nagaaier', title: 'Kleurkontras-nagaaier', description: 'Kontroleer of jou teks- en agtergrondkleure leesbaar is. Die gereedskap bereken kontras volgens WCAG en help om die regte kleur te kies.' },
  },
  paletteExtractor: {
    el: { slug: 'exagogi-chromaton-apo-eikona', title: 'Εξαγωγή χρωμάτων από εικόνα', description: 'Ανεβάστε μια φωτογραφία ή λογότυπο και το εργαλείο θα εξάγει τα κυρίαρχα χρώματα. Αντιγράψτε τους κωδικούς χρωμάτων με ένα κλικ.' },
    bg: { slug: 'ekstraktor-na-tsvetove-ot-izobrazhenie', title: 'Екстрактор на цветове от изображение', description: 'Качете снимка или лого и инструментът ще извлече доминиращите цветове. Копирайте генерираните цветови кодове с едно кликване.' },
    ha: { slug: 'fitar-launuka-daga-hoto', title: 'Fitar launuka daga hoto', description: 'Loda hoto ko alamar kasuwanci kuma kayan aiki zai fitar da manyan launuka. Kwafa lambobin launuka da aka samar da danna guda.' },
    yo: { slug: 'iseduro-awoo-lati-aworan', title: 'Ìṣèdúró àwọ̀ láti àwòrán', description: 'Gbé àwòrán tàbí àmì iṣẹ́ síta, irinṣẹ́ náà yóò fà àwọn àwọ̀ àkọ́kọ́ jáde. Ṣe àdàkọ àwọn kóòdù àwọ̀ pẹ̀lú ìtẹ̀ kan.' },
    af: { slug: 'kleur-onttrekker-uit-beeld', title: 'Kleuronttrekker uit beeld', description: 'Laai \'n foto of logo op en die gereedskap sal die dominante kleure onttrek. Kopieer gegenereerde kleurkodes met een klik.' },
  },
  colorPalette: {
    el: { slug: 'dimiourgia-paletas-chromaton', title: 'Δημιουργία παλέτας χρωμάτων', description: 'Επιλέξτε ένα χρώμα και δημιουργήστε 9 παλέτες: μονοχρωματική, συμπληρωματική, τριαδική και άλλες.' },
    bg: { slug: 'generator-na-tsvetovi-palitri', title: 'Генератор на цветови палитри', description: 'Изберете един цвят и генерирайте 9 палитри: монохроматична, комплементарна, триадична и други.' },
    ha: { slug: 'samar-da-fayafayan-launuka', title: 'Mai samar da fayafayan launuka', description: 'Zabi launi guda kuma samar da fayafai 9: launi guda, karin launi, uku da sauransu.' },
    yo: { slug: 'olupilese-paleti-awoo', title: 'Olùpilẹ̀ṣẹ̀ pálẹ́ẹ̀tì àwọ̀', description: 'Yan àwọ̀ kan kí o sì ṣẹ̀dá pálẹ́ẹ̀tì 9: aláwọ̀kan, aláwọ̀ méjì, aláwọ̀ mẹ́ta àti àwọn mìíràn.' },
    af: { slug: 'kleurpalet-generator', title: 'Kleurpaletgenerator', description: 'Kies een kleur en genereer 9 palette: monochromaties, komplementêr, triadies en meer.' },
  },
  qrCode: {
    el: { slug: 'dorean-dimiourgia-kodikou-qr', title: 'Δωρεάν δημιουργία κωδικού QR', description: 'Δημιουργήστε κωδικό QR για ιστότοπο, vCard, μενού ή φυλλάδιο. Εξαγωγή σε PNG και SVG, χωρίς σύνδεση, χωρίς όρια.' },
    bg: { slug: 'bezplaten-generator-na-qr-kod', title: 'Безплатен генератор на QR код', description: 'Създайте QR код за уебсайт, vCard, меню или брошура. Експорт в PNG и SVG, без регистрация, без ограничения.' },
    ha: { slug: 'samar-da-lambar-qr-kyauta', title: 'Mai samar da lambar QR kyauta', description: 'Kirkiri lambar QR don shafin yanar gizo, vCard, menu, ko takarda. Fitar da PNG da SVG, ba tare da shiga ba, ba tare da iyaka ba.' },
    yo: { slug: 'olupilese-koodu-qr-ofe', title: 'Olùpilẹ̀ṣẹ̀ kóòdù QR ọ̀fẹ́', description: 'Ṣẹ̀dá kóòdù QR fún ojú-ìwé ayélujára, vCard, àkójọ oúnjẹ, tàbí ìwé pélébé. Gbé jáde sí PNG àti SVG, láìsí ìwọlé, láìsí ààlà.' },
    af: { slug: 'gratis-qr-kode-generator', title: 'Gratis QR-kode-generator', description: 'Skep \'n QR-kode vir \'n webwerf, vCard, spyskaart of pamflet. Voer uit na PNG en SVG, sonder aanmelding, sonder perke.' },
  },
};

for (const [toolKey, locales] of Object.entries(TOOL_LOCALES)) {
  for (const [loc, data] of Object.entries(locales)) {
    // Find the sl entry for this tool and add after it
    // We look for the pattern: key: 'toolKey' ... sl: { ... },
    const slRegex = new RegExp(
      `(key: '${toolKey}'[\\s\\S]*?sl: \\{[^}]+\\},)`,
      'm'
    );
    const match = src.match(slRegex);
    if (match) {
      // Only add once - check if locale already exists
      if (!src.includes(`key: '${toolKey}'`) || src.match(new RegExp(`key: '${toolKey}'[\\s\\S]*?${loc}: \\{`))) {
        continue; // skip if already exists
      }
    }
  }

  // Add all 5 locales at once after sl entry
  const slRegex = new RegExp(
    `(key: '${toolKey}'[\\s\\S]*?sl: \\{\\n\\s+slug: '[^']+',\\n\\s+title: '[^']+',\\n\\s+description: '[^']+',\\n\\s+\\},)`,
    'm'
  );
  
  const localeEntries = Object.entries(locales).map(([loc, data]) => {
    const desc = data.description.replace(/'/g, "\\'");
    const title = data.title.replace(/'/g, "\\'");
    return `      ${loc}: {\n        slug: '${data.slug}',\n        title: '${title}',\n        description: '${desc}',\n      },`;
  }).join('\n');

  src = src.replace(slRegex, `$1\n${localeEntries}`);
}

fs.writeFileSync(fp, src, 'utf-8');
console.log('Done! Tool registry updated with el, bg, ha, yo, af entries.');
