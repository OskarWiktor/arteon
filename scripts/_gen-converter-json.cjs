/**
 * Generate content JSON files for 19 new converters × 15 non-PL locales = 285 files.
 * Uses PL template structure with locale-specific translations.
 */
const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data');

// Locale config: toolsBasePath, breadcrumbLabel, contactHref
const localeConfig = {
  en: { base: '/en/tools', label: 'Tools', contactHref: '/en/contact' },
  de: { base: '/de/werkzeuge', label: 'Werkzeuge', contactHref: '/de/kontakt' },
  es: { base: '/es/herramientas', label: 'Herramientas', contactHref: '/es/contacto' },
  fr: { base: '/fr/outils', label: 'Outils', contactHref: '/fr/contact' },
  pt: { base: '/pt/ferramentas', label: 'Ferramentas', contactHref: '/pt/contacto' },
  it: { base: '/it/strumenti', label: 'Strumenti', contactHref: '/it/contatto' },
  ro: { base: '/ro/instrumente', label: 'Instrumente', contactHref: '/ro/contact' },
  nl: { base: '/nl/tools', label: 'Tools', contactHref: '/nl/contact' },
  hu: { base: '/hu/eszkozok', label: 'Eszközök', contactHref: '/hu/kapcsolat' },
  cs: { base: '/cs/nastroje', label: 'Nástroje', contactHref: '/cs/kontakt' },
  sv: { base: '/sv/verktyg', label: 'Verktyg', contactHref: '/sv/kontakt' },
  da: { base: '/da/vaerktojer', label: 'Værktøjer', contactHref: '/da/kontakt' },
  no: { base: '/no/verktoy', label: 'Verktøy', contactHref: '/no/kontakt' },
  fi: { base: '/fi/tyokalut', label: 'Työkalut', contactHref: '/fi/yhteystiedot' },
  el: { base: '/el/ergaleia', label: 'Εργαλεία', contactHref: '/el/epikoinonia' },
};

// Locale-specific UI strings
const uiStrings = {
  en: {
    featureList: ['Conversion to {TARGET}', 'Quality adjustment (60-95%)', 'Batch conversion', 'Local browser processing'],
    howToName: 'How to convert {FROM} to {TO}',
    steps: [
      { name: 'Upload files', text: 'Drag files onto the page or click to select from disk.' },
      { name: 'Set quality', text: 'Adjust the {TARGET} quality slider — lower values produce smaller files.' },
      { name: 'Convert', text: 'Click Convert — files are processed locally in your browser.' },
      { name: 'Download', text: 'Download the {TARGET} files — individually or all at once.' },
    ],
    sectionTitle: 'How does the {FROM} to {TO} converter work?',
    sectionHtml: '<p>{DESC} Conversion runs entirely in your browser — files are never sent to a server. No registration, no file limit.</p>',
    stepsTitle: 'How to convert {FROM} to {TO}?',
    faqTitle: 'Frequently asked questions',
    contactTitle: 'Need more?',
    contactDesc: 'Contact us — we will help you find the right solution.',
    contactBtn: 'Write to us',
    carouselTitle: 'Other tools',
  },
  de: {
    featureList: ['Konvertierung zu {TARGET}', 'Qualitatsanpassung (60-95%)', 'Stapelkonvertierung', 'Lokale Verarbeitung im Browser'],
    howToName: '{FROM} zu {TO} konvertieren',
    steps: [
      { name: 'Dateien hochladen', text: 'Dateien auf die Seite ziehen oder klicken, um sie auszuwahlen.' },
      { name: 'Qualitat einstellen', text: 'Passen Sie den {TARGET}-Qualitatsregler an — niedrigere Werte ergeben kleinere Dateien.' },
      { name: 'Konvertieren', text: 'Klicken Sie auf Konvertieren — Dateien werden lokal im Browser verarbeitet.' },
      { name: 'Herunterladen', text: 'Laden Sie die {TARGET}-Dateien herunter — einzeln oder alle auf einmal.' },
    ],
    sectionTitle: 'Wie funktioniert der {FROM} zu {TO} Konverter?',
    sectionHtml: '<p>{DESC} Die Konvertierung erfolgt vollstandig im Browser — Dateien werden nie an einen Server gesendet. Ohne Registrierung, ohne Dateilimit.</p>',
    stepsTitle: 'Wie konvertiert man {FROM} zu {TO}?',
    faqTitle: 'Haufig gestellte Fragen',
    contactTitle: 'Brauchen Sie mehr?',
    contactDesc: 'Kontaktieren Sie uns — wir helfen Ihnen, die richtige Losung zu finden.',
    contactBtn: 'Schreiben Sie uns',
    carouselTitle: 'Andere Werkzeuge',
  },
  es: {
    featureList: ['Conversion a {TARGET}', 'Ajuste de calidad (60-95%)', 'Conversion por lotes', 'Procesamiento local en el navegador'],
    howToName: 'Como convertir {FROM} a {TO}',
    steps: [
      { name: 'Subir archivos', text: 'Arrastra archivos a la pagina o haz clic para seleccionarlos.' },
      { name: 'Ajustar calidad', text: 'Ajusta el control de calidad {TARGET} — valores mas bajos producen archivos mas pequenos.' },
      { name: 'Convertir', text: 'Haz clic en Convertir — los archivos se procesan localmente en tu navegador.' },
      { name: 'Descargar', text: 'Descarga los archivos {TARGET} — individualmente o todos a la vez.' },
    ],
    sectionTitle: 'Como funciona el convertidor de {FROM} a {TO}?',
    sectionHtml: '<p>{DESC} La conversion se realiza completamente en tu navegador — los archivos nunca se envian a un servidor. Sin registro, sin limite de archivos.</p>',
    stepsTitle: 'Como convertir {FROM} a {TO}?',
    faqTitle: 'Preguntas frecuentes',
    contactTitle: 'Necesitas mas?',
    contactDesc: 'Contactanos — te ayudaremos a encontrar la solucion adecuada.',
    contactBtn: 'Escribenos',
    carouselTitle: 'Otras herramientas',
  },
  fr: {
    featureList: ['Conversion en {TARGET}', 'Reglage de la qualite (60-95%)', 'Conversion par lots', 'Traitement local dans le navigateur'],
    howToName: 'Comment convertir {FROM} en {TO}',
    steps: [
      { name: 'Telecharger les fichiers', text: 'Glissez les fichiers sur la page ou cliquez pour les selectionner.' },
      { name: 'Regler la qualite', text: 'Ajustez le curseur de qualite {TARGET} — des valeurs plus basses donnent des fichiers plus petits.' },
      { name: 'Convertir', text: 'Cliquez sur Convertir — les fichiers sont traites localement dans votre navigateur.' },
      { name: 'Telecharger', text: 'Telechargez les fichiers {TARGET} — individuellement ou tous a la fois.' },
    ],
    sectionTitle: 'Comment fonctionne le convertisseur {FROM} en {TO}?',
    sectionHtml: '<p>{DESC} La conversion se fait entierement dans votre navigateur — les fichiers ne sont jamais envoyes a un serveur. Sans inscription, sans limite.</p>',
    stepsTitle: 'Comment convertir {FROM} en {TO}?',
    faqTitle: 'Questions frequemment posees',
    contactTitle: 'Besoin de plus?',
    contactDesc: 'Contactez-nous — nous vous aiderons a trouver la bonne solution.',
    contactBtn: 'Ecrivez-nous',
    carouselTitle: 'Autres outils',
  },
  pt: {
    featureList: ['Conversao para {TARGET}', 'Ajuste de qualidade (60-95%)', 'Conversao em lote', 'Processamento local no navegador'],
    howToName: 'Como converter {FROM} para {TO}',
    steps: [
      { name: 'Carregar ficheiros', text: 'Arraste ficheiros para a pagina ou clique para selecionar.' },
      { name: 'Definir qualidade', text: 'Ajuste o controlo de qualidade {TARGET} — valores mais baixos produzem ficheiros mais pequenos.' },
      { name: 'Converter', text: 'Clique em Converter — os ficheiros sao processados localmente no seu navegador.' },
      { name: 'Descarregar', text: 'Descarregue os ficheiros {TARGET} — individualmente ou todos de uma vez.' },
    ],
    sectionTitle: 'Como funciona o conversor de {FROM} para {TO}?',
    sectionHtml: '<p>{DESC} A conversao e feita inteiramente no seu navegador — os ficheiros nunca sao enviados para um servidor. Sem registo, sem limite.</p>',
    stepsTitle: 'Como converter {FROM} para {TO}?',
    faqTitle: 'Perguntas frequentes',
    contactTitle: 'Precisa de mais?',
    contactDesc: 'Contacte-nos — ajudamos a encontrar a solucao adequada.',
    contactBtn: 'Escreva-nos',
    carouselTitle: 'Outras ferramentas',
  },
  it: {
    featureList: ['Conversione in {TARGET}', 'Regolazione qualita (60-95%)', 'Conversione in batch', 'Elaborazione locale nel browser'],
    howToName: 'Come convertire {FROM} in {TO}',
    steps: [
      { name: 'Carica file', text: 'Trascina i file sulla pagina o clicca per selezionarli.' },
      { name: 'Imposta qualita', text: 'Regola il cursore qualita {TARGET} — valori piu bassi producono file piu piccoli.' },
      { name: 'Converti', text: 'Clicca Converti — i file vengono elaborati localmente nel browser.' },
      { name: 'Scarica', text: 'Scarica i file {TARGET} — singolarmente o tutti insieme.' },
    ],
    sectionTitle: 'Come funziona il convertitore {FROM} in {TO}?',
    sectionHtml: '<p>{DESC} La conversione avviene interamente nel browser — i file non vengono mai inviati a un server. Senza registrazione, senza limiti.</p>',
    stepsTitle: 'Come convertire {FROM} in {TO}?',
    faqTitle: 'Domande frequenti',
    contactTitle: 'Hai bisogno di altro?',
    contactDesc: 'Contattaci — ti aiuteremo a trovare la soluzione giusta.',
    contactBtn: 'Scrivici',
    carouselTitle: 'Altri strumenti',
  },
  ro: {
    featureList: ['Conversie in {TARGET}', 'Ajustare calitate (60-95%)', 'Conversie in lot', 'Procesare locala in browser'],
    howToName: 'Cum sa convertesti {FROM} in {TO}',
    steps: [
      { name: 'Incarca fisiere', text: 'Trage fisierele pe pagina sau da clic pentru a le selecta.' },
      { name: 'Seteaza calitatea', text: 'Ajusteaza cursorul de calitate {TARGET} — valori mai mici produc fisiere mai mici.' },
      { name: 'Converteste', text: 'Da clic pe Converteste — fisierele sunt procesate local in browser.' },
      { name: 'Descarca', text: 'Descarca fisierele {TARGET} — individual sau toate deodata.' },
    ],
    sectionTitle: 'Cum functioneaza convertorul {FROM} in {TO}?',
    sectionHtml: '<p>{DESC} Conversia se face integral in browser — fisierele nu sunt trimise niciodata pe un server. Fara inregistrare, fara limita.</p>',
    stepsTitle: 'Cum sa convertesti {FROM} in {TO}?',
    faqTitle: 'Intrebari frecvente',
    contactTitle: 'Ai nevoie de mai mult?',
    contactDesc: 'Contacteaza-ne — te vom ajuta sa gasesti solutia potrivita.',
    contactBtn: 'Scrie-ne',
    carouselTitle: 'Alte instrumente',
  },
  nl: {
    featureList: ['Conversie naar {TARGET}', 'Kwaliteitsaanpassing (60-95%)', 'Batchconversie', 'Lokale verwerking in de browser'],
    howToName: '{FROM} naar {TO} converteren',
    steps: [
      { name: 'Bestanden uploaden', text: 'Sleep bestanden naar de pagina of klik om ze te selecteren.' },
      { name: 'Kwaliteit instellen', text: 'Pas de {TARGET}-kwaliteitsschuifregelaar aan — lagere waarden geven kleinere bestanden.' },
      { name: 'Converteren', text: 'Klik op Converteren — bestanden worden lokaal in de browser verwerkt.' },
      { name: 'Downloaden', text: 'Download de {TARGET}-bestanden — individueel of allemaal tegelijk.' },
    ],
    sectionTitle: 'Hoe werkt de {FROM} naar {TO} converter?',
    sectionHtml: '<p>{DESC} De conversie vindt volledig plaats in de browser — bestanden worden nooit naar een server gestuurd. Zonder registratie, zonder limiet.</p>',
    stepsTitle: 'Hoe converteer je {FROM} naar {TO}?',
    faqTitle: 'Veelgestelde vragen',
    contactTitle: 'Meer nodig?',
    contactDesc: 'Neem contact op — we helpen u de juiste oplossing te vinden.',
    contactBtn: 'Schrijf ons',
    carouselTitle: 'Andere tools',
  },
  hu: {
    featureList: ['Konvertalas {TARGET}-re', 'Minoseg beallitasa (60-95%)', 'Kotegelt konvertalas', 'Helyi feldolgozas a bongeszoben'],
    howToName: '{FROM} konvertalasa {TO}-ra',
    steps: [
      { name: 'Fajlok feltoltese', text: 'Huzd a fajlokat az oldalra vagy kattints a kivalasztasukhoz.' },
      { name: 'Minoseg beallitasa', text: 'Allitsd be a {TARGET} minoseg csuszkajat — alacsonyabb ertekek kisebb fajlokat eredmenyeznek.' },
      { name: 'Konvertalas', text: 'Kattints a Konvertalas gombra — a fajlok helyben, a bongeszoben kerulnek feldolgozasra.' },
      { name: 'Letoltes', text: 'Toltsd le a {TARGET} fajlokat — egyenkent vagy mindet egyszerre.' },
    ],
    sectionTitle: 'Hogyan mukodik a {FROM} {TO} konverter?',
    sectionHtml: '<p>{DESC} A konvertalas teljes egeszeben a bongeszoben tortenik — a fajlok soha nem kerulnek szerverre. Regisztracio nelkul, fajl limit nelkul.</p>',
    stepsTitle: 'Hogyan konvertalhato {FROM} {TO}-ra?',
    faqTitle: 'Gyakran ismetelt kerdesek',
    contactTitle: 'Tobbre van szukseged?',
    contactDesc: 'Lepj kapcsolatba velunk — segitunk megtalalni a megfelelo megoldast.',
    contactBtn: 'Irj nekunk',
    carouselTitle: 'Mas eszkozok',
  },
  cs: {
    featureList: ['Konverze do {TARGET}', 'Nastaveni kvality (60-95%)', 'Davkova konverze', 'Lokalni zpracovani v prohlizeci'],
    howToName: 'Jak prevest {FROM} na {TO}',
    steps: [
      { name: 'Nahrajte soubory', text: 'Pretahnete soubory na stranku nebo kliknete pro vyber z disku.' },
      { name: 'Nastavte kvalitu', text: 'Upravte posuvnik kvality {TARGET} — nizsi hodnoty vytvareji mensi soubory.' },
      { name: 'Konvertujte', text: 'Kliknete na Konvertovat — soubory se zpracuji lokalne v prohlizeci.' },
      { name: 'Stahnete', text: 'Stahnete hotove soubory {TARGET} — jednotlive nebo vsechny naraz.' },
    ],
    sectionTitle: 'Jak funguje prevodnik {FROM} na {TO}?',
    sectionHtml: '<p>{DESC} Konverze probiha cele v prohlizeci — soubory se nikdy neodesilaji na server. Bez registrace, bez limitu souboru.</p>',
    stepsTitle: 'Jak prevest {FROM} na {TO}?',
    faqTitle: 'Nejcastejsi dotazy',
    contactTitle: 'Potrebujete vic?',
    contactDesc: 'Kontaktujte nas — pomuzeme vam najit spravne reseni.',
    contactBtn: 'Napiste nam',
    carouselTitle: 'Dalsi nastroje',
  },
  sv: {
    featureList: ['Konvertering till {TARGET}', 'Kvalitetsjustering (60-95%)', 'Batchkonvertering', 'Lokal bearbetning i webblasaren'],
    howToName: 'Hur konverterar man {FROM} till {TO}',
    steps: [
      { name: 'Ladda upp filer', text: 'Dra filer till sidan eller klicka for att valja fran disk.' },
      { name: 'Stall in kvalitet', text: 'Justera {TARGET}-kvalitetsreglaget — lagre varden ger mindre filer.' },
      { name: 'Konvertera', text: 'Klicka pa Konvertera — filerna bearbetas lokalt i webblasaren.' },
      { name: 'Ladda ner', text: 'Ladda ner {TARGET}-filerna — enskilt eller alla pa en gang.' },
    ],
    sectionTitle: 'Hur fungerar {FROM} till {TO}-konverteraren?',
    sectionHtml: '<p>{DESC} Konverteringen sker helt i webblasaren — filer skickas aldrig till en server. Utan registrering, utan begransning.</p>',
    stepsTitle: 'Hur konverterar man {FROM} till {TO}?',
    faqTitle: 'Vanliga fragor',
    contactTitle: 'Behover du mer?',
    contactDesc: 'Kontakta oss — vi hjalper dig hitta ratt losning.',
    contactBtn: 'Skriv till oss',
    carouselTitle: 'Andra verktyg',
  },
  da: {
    featureList: ['Konvertering til {TARGET}', 'Kvalitetsjustering (60-95%)', 'Batchkonvertering', 'Lokal behandling i browseren'],
    howToName: 'Hvordan konverterer man {FROM} til {TO}',
    steps: [
      { name: 'Upload filer', text: 'Traek filer til siden eller klik for at vaelge fra disken.' },
      { name: 'Indstil kvalitet', text: 'Juster {TARGET}-kvalitetsskyderen — lavere vaerdier giver mindre filer.' },
      { name: 'Konverter', text: 'Klik pa Konverter — filerne behandles lokalt i browseren.' },
      { name: 'Download', text: 'Download {TARGET}-filerne — enkeltvis eller alle pa en gang.' },
    ],
    sectionTitle: 'Hvordan fungerer {FROM} til {TO}-konverteren?',
    sectionHtml: '<p>{DESC} Konverteringen foregaar helt i browseren — filer sendes aldrig til en server. Uden registrering, uden begraensning.</p>',
    stepsTitle: 'Hvordan konverterer man {FROM} til {TO}?',
    faqTitle: 'Ofte stillede sporgsmal',
    contactTitle: 'Har du brug for mere?',
    contactDesc: 'Kontakt os — vi hjaelper dig med at finde den rigtige losning.',
    contactBtn: 'Skriv til os',
    carouselTitle: 'Andre vaerktojer',
  },
  no: {
    featureList: ['Konvertering til {TARGET}', 'Kvalitetsjustering (60-95%)', 'Batchkonvertering', 'Lokal behandling i nettleseren'],
    howToName: 'Hvordan konvertere {FROM} til {TO}',
    steps: [
      { name: 'Last opp filer', text: 'Dra filer til siden eller klikk for a velge fra disk.' },
      { name: 'Still inn kvalitet', text: 'Juster {TARGET}-kvalitetsglideren — lavere verdier gir mindre filer.' },
      { name: 'Konverter', text: 'Klikk pa Konverter — filene behandles lokalt i nettleseren.' },
      { name: 'Last ned', text: 'Last ned {TARGET}-filene — enkeltvis eller alle pa en gang.' },
    ],
    sectionTitle: 'Hvordan fungerer {FROM} til {TO}-konvertereren?',
    sectionHtml: '<p>{DESC} Konverteringen skjer helt i nettleseren — filer sendes aldri til en server. Uten registrering, uten begrensning.</p>',
    stepsTitle: 'Hvordan konvertere {FROM} til {TO}?',
    faqTitle: 'Ofte stilte sporsmal',
    contactTitle: 'Trenger du mer?',
    contactDesc: 'Kontakt oss — vi hjelper deg a finne den riktige losningen.',
    contactBtn: 'Skriv til oss',
    carouselTitle: 'Andre verktoy',
  },
  fi: {
    featureList: ['Muunnos {TARGET}-muotoon', 'Laadun saato (60-95%)', 'Eramuunnos', 'Paikallinen kasittely selaimessa'],
    howToName: 'Kuinka muuntaa {FROM} {TO}-muotoon',
    steps: [
      { name: 'Lataa tiedostot', text: 'Vedä tiedostot sivulle tai napsauta valitaksesi levylta.' },
      { name: 'Aseta laatu', text: 'Saada {TARGET}-laatuliukusaadinta — alhaisemmat arvot tuottavat pienempia tiedostoja.' },
      { name: 'Muunna', text: 'Napsauta Muunna — tiedostot kasitellaan paikallisesti selaimessa.' },
      { name: 'Lataa', text: 'Lataa {TARGET}-tiedostot — yksittain tai kaikki kerralla.' },
    ],
    sectionTitle: 'Miten {FROM}-{TO}-muunnin toimii?',
    sectionHtml: '<p>{DESC} Muunnos tapahtuu kokonaan selaimessa — tiedostoja ei koskaan lahetetä palvelimelle. Ilman rekisteroitymista, ilman rajoituksia.</p>',
    stepsTitle: 'Kuinka muuntaa {FROM} {TO}-muotoon?',
    faqTitle: 'Usein kysytyt kysymykset',
    contactTitle: 'Tarvitsetko lisaa?',
    contactDesc: 'Ota yhteytta — autamme loytamaan oikean ratkaisun.',
    contactBtn: 'Kirjoita meille',
    carouselTitle: 'Muut tyokalut',
  },
  el: {
    featureList: ['Μετατροπή σε {TARGET}', 'Ρύθμιση ποιότητας (60-95%)', 'Ομαδική μετατροπή', 'Τοπική επεξεργασία στο πρόγραμμα περιήγησης'],
    howToName: 'Πώς να μετατρέψετε {FROM} σε {TO}',
    steps: [
      { name: 'Ανεβάστε αρχεία', text: 'Σύρετε αρχεία στη σελίδα ή κάντε κλικ για να τα επιλέξετε.' },
      { name: 'Ρυθμίστε την ποιότητα', text: 'Ρυθμίστε τον δείκτη ποιότητας {TARGET} — χαμηλότερες τιμές δίνουν μικρότερα αρχεία.' },
      { name: 'Μετατρέψτε', text: 'Κάντε κλικ στο Μετατροπή — τα αρχεία επεξεργάζονται τοπικά στο πρόγραμμα περιήγησης.' },
      { name: 'Κατεβάστε', text: 'Κατεβάστε τα αρχεία {TARGET} — μεμονωμένα ή όλα μαζί.' },
    ],
    sectionTitle: 'Πώς λειτουργεί ο μετατροπέας {FROM} σε {TO};',
    sectionHtml: '<p>{DESC} Η μετατροπή γίνεται εξ ολοκλήρου στο πρόγραμμα περιήγησης — τα αρχεία δεν αποστέλλονται ποτέ σε διακομιστή. Χωρίς εγγραφή, χωρίς όριο.</p>',
    stepsTitle: 'Πώς να μετατρέψετε {FROM} σε {TO};',
    faqTitle: 'Συχνές ερωτήσεις',
    contactTitle: 'Χρειάζεστε περισσότερα;',
    contactDesc: 'Επικοινωνήστε μαζί μας — θα σας βοηθήσουμε να βρείτε τη σωστή λύση.',
    contactBtn: 'Γράψτε μας',
    carouselTitle: 'Άλλα εργαλεία',
  },
};

// Target format FAQ per locale — generic questions about AVIF, GIF, TIFF
const targetFaqs = {
  AVIF: {
    en: [
      { question: 'What is AVIF format?', answer: 'AVIF is a modern image format based on the AV1 codec. It offers excellent compression — files can be up to 50% smaller than JPG while maintaining comparable quality. It supports transparency and wide color gamuts.' },
      { question: 'Does AVIF work in all browsers?', answer: 'AVIF is supported by Chrome, Edge, and Firefox. Safari has limited AVIF support.' },
      { question: 'Are my files sent to a server?', answer: 'No. Conversion runs entirely in your browser. Files never leave your computer.' },
    ],
    de: [
      { question: 'Was ist das AVIF-Format?', answer: 'AVIF ist ein modernes Bildformat basierend auf dem AV1-Codec. Es bietet hervorragende Kompression — Dateien konnen bis zu 50% kleiner als JPG sein bei vergleichbarer Qualitat.' },
      { question: 'Funktioniert AVIF in allen Browsern?', answer: 'AVIF wird von Chrome, Edge und Firefox unterstutzt. Safari hat eingeschrankte AVIF-Unterstutzung.' },
      { question: 'Werden meine Dateien an einen Server gesendet?', answer: 'Nein. Die Konvertierung erfolgt vollstandig im Browser. Dateien verlassen nie Ihren Computer.' },
    ],
    es: [
      { question: 'Que es el formato AVIF?', answer: 'AVIF es un formato de imagen moderno basado en el codec AV1. Ofrece excelente compresion — los archivos pueden ser hasta un 50% mas pequenos que JPG.' },
      { question: 'Funciona AVIF en todos los navegadores?', answer: 'AVIF es compatible con Chrome, Edge y Firefox. Safari tiene soporte limitado para AVIF.' },
      { question: 'Se envian mis archivos a un servidor?', answer: 'No. La conversion se realiza completamente en tu navegador. Los archivos nunca salen de tu computadora.' },
    ],
    fr: [
      { question: 'Qu\'est-ce que le format AVIF?', answer: 'AVIF est un format d\'image moderne base sur le codec AV1. Il offre une excellente compression — les fichiers peuvent etre jusqu\'a 50% plus petits que JPG.' },
      { question: 'AVIF fonctionne-t-il dans tous les navigateurs?', answer: 'AVIF est pris en charge par Chrome, Edge et Firefox. Safari a un support limite pour AVIF.' },
      { question: 'Mes fichiers sont-ils envoyes a un serveur?', answer: 'Non. La conversion se fait entierement dans votre navigateur. Les fichiers ne quittent jamais votre ordinateur.' },
    ],
    pt: [
      { question: 'O que e o formato AVIF?', answer: 'AVIF e um formato de imagem moderno baseado no codec AV1. Oferece excelente compressao — os ficheiros podem ser ate 50% menores que JPG.' },
      { question: 'O AVIF funciona em todos os navegadores?', answer: 'AVIF e suportado pelo Chrome, Edge e Firefox. O Safari tem suporte limitado para AVIF.' },
      { question: 'Os meus ficheiros sao enviados para um servidor?', answer: 'Nao. A conversao e feita inteiramente no seu navegador. Os ficheiros nunca saem do seu computador.' },
    ],
    it: [
      { question: 'Cos\'e il formato AVIF?', answer: 'AVIF e un formato immagine moderno basato sul codec AV1. Offre un\'eccellente compressione — i file possono essere fino al 50% piu piccoli di JPG.' },
      { question: 'AVIF funziona in tutti i browser?', answer: 'AVIF e supportato da Chrome, Edge e Firefox. Safari ha un supporto limitato per AVIF.' },
      { question: 'I miei file vengono inviati a un server?', answer: 'No. La conversione avviene interamente nel browser. I file non lasciano mai il tuo computer.' },
    ],
    ro: [
      { question: 'Ce este formatul AVIF?', answer: 'AVIF este un format modern de imagine bazat pe codecul AV1. Ofera compresie excelenta — fisierele pot fi cu pana la 50% mai mici decat JPG.' },
      { question: 'Functioneaza AVIF in toate browserele?', answer: 'AVIF este suportat de Chrome, Edge si Firefox. Safari are suport limitat pentru AVIF.' },
      { question: 'Sunt fisierele mele trimise pe un server?', answer: 'Nu. Conversia se face integral in browser. Fisierele nu parasesc niciodata computerul.' },
    ],
    nl: [
      { question: 'Wat is het AVIF-formaat?', answer: 'AVIF is een modern afbeeldingsformaat gebaseerd op de AV1-codec. Het biedt uitstekende compressie — bestanden kunnen tot 50% kleiner zijn dan JPG.' },
      { question: 'Werkt AVIF in alle browsers?', answer: 'AVIF wordt ondersteund door Chrome, Edge en Firefox. Safari heeft beperkte AVIF-ondersteuning.' },
      { question: 'Worden mijn bestanden naar een server gestuurd?', answer: 'Nee. De conversie vindt volledig plaats in de browser. Bestanden verlaten nooit uw computer.' },
    ],
    hu: [
      { question: 'Mi az AVIF formatum?', answer: 'Az AVIF egy modern kepformatum az AV1 kodek alapjan. Kivaloan tomorit — a fajlok akar 50%-kal kisebbek lehetnek mint JPG.' },
      { question: 'Mukodik az AVIF minden bongeszoben?', answer: 'Az AVIF-et a Chrome, Edge es Firefox tamogatja. A Safari korlatozott AVIF tamogatassal rendelkezik.' },
      { question: 'A fajljaim elkuldésre kerulnek egy szerverre?', answer: 'Nem. A konvertalas teljes egeszeben a bongeszoben tortenik. A fajlok soha nem hagyjak el a szamitogepet.' },
    ],
    cs: [
      { question: 'Co je format AVIF?', answer: 'AVIF je moderni obrazovy format zalozeny na kodeku AV1. Nabizi vynikajici kompresi — soubory mohou byt az o 50% mensi nez JPG.' },
      { question: 'Funguje AVIF ve vsech prohlizecich?', answer: 'AVIF je podporovan Chrome, Edge a Firefoxem. Safari ma omezenou podporu AVIF.' },
      { question: 'Jsou moje soubory odeslany na server?', answer: 'Ne. Konverze probiha cele v prohlizeci. Soubory nikdy neopusti pocitac.' },
    ],
    sv: [
      { question: 'Vad ar AVIF-format?', answer: 'AVIF ar ett modernt bildformat baserat pa AV1-codec. Det erbjuder utmarkt komprimering — filer kan vara upp till 50% mindre an JPG.' },
      { question: 'Fungerar AVIF i alla webblasare?', answer: 'AVIF stods av Chrome, Edge och Firefox. Safari har begransat AVIF-stod.' },
      { question: 'Skickas mina filer till en server?', answer: 'Nej. Konverteringen sker helt i webblasaren. Filer lamnar aldrig din dator.' },
    ],
    da: [
      { question: 'Hvad er AVIF-format?', answer: 'AVIF er et moderne billedformat baseret pa AV1-codec. Det tilbyder fremragende komprimering — filer kan vaere op til 50% mindre end JPG.' },
      { question: 'Virker AVIF i alle browsere?', answer: 'AVIF understøttes af Chrome, Edge og Firefox. Safari har begrænset AVIF-understøttelse.' },
      { question: 'Sendes mine filer til en server?', answer: 'Nej. Konverteringen foregår helt i browseren. Filer forlader aldrig din computer.' },
    ],
    no: [
      { question: 'Hva er AVIF-format?', answer: 'AVIF er et moderne bildeformat basert pa AV1-codec. Det tilbyr utmerket komprimering — filer kan vaere opptil 50% mindre enn JPG.' },
      { question: 'Fungerer AVIF i alle nettlesere?', answer: 'AVIF stottes av Chrome, Edge og Firefox. Safari har begrenset AVIF-stotte.' },
      { question: 'Sendes filene mine til en server?', answer: 'Nei. Konverteringen skjer helt i nettleseren. Filer forlater aldri datamaskinen din.' },
    ],
    fi: [
      { question: 'Mika on AVIF-muoto?', answer: 'AVIF on moderni kuvamuoto, joka perustuu AV1-koodekkiin. Se tarjoaa erinomaisen pakkauksen — tiedostot voivat olla jopa 50% pienempia kuin JPG.' },
      { question: 'Toimiiko AVIF kaikissa selaimissa?', answer: 'AVIF:ää tukevat Chrome, Edge ja Firefox. Safarilla on rajallinen AVIF-tuki.' },
      { question: 'Lahetetaanko tiedostoni palvelimelle?', answer: 'Ei. Muunnos tapahtuu kokonaan selaimessa. Tiedostot eivat koskaan poistu tietokoneeltasi.' },
    ],
    el: [
      { question: 'Τι είναι η μορφή AVIF;', answer: 'Το AVIF είναι μια σύγχρονη μορφή εικόνας βασισμένη στον κωδικοποιητή AV1. Προσφέρει εξαιρετική συμπίεση — τα αρχεία μπορούν να είναι έως 50% μικρότερα από JPG.' },
      { question: 'Λειτουργεί το AVIF σε όλα τα προγράμματα περιήγησης;', answer: 'Το AVIF υποστηρίζεται από Chrome, Edge και Firefox. Το Safari έχει περιορισμένη υποστήριξη AVIF.' },
      { question: 'Αποστέλλονται τα αρχεία μου σε διακομιστή;', answer: 'Όχι. Η μετατροπή γίνεται εξ ολοκλήρου στο πρόγραμμα περιήγησης. Τα αρχεία δεν φεύγουν ποτέ από τον υπολογιστή σας.' },
    ],
  },
  GIF: {
    en: [
      { question: 'What is GIF format?', answer: 'GIF is a widely supported image format that supports up to 256 colors. It is ideal for simple graphics, icons, and illustrations.' },
      { question: 'Does converting to GIF reduce quality?', answer: 'GIF uses a limited 256-color palette, so photographs may lose some detail. It works best for graphics with flat colors.' },
      { question: 'Are my files sent to a server?', answer: 'No. Conversion runs entirely in your browser. Files never leave your computer.' },
    ],
    de: [
      { question: 'Was ist das GIF-Format?', answer: 'GIF ist ein weit verbreitetes Bildformat mit bis zu 256 Farben. Ideal fur einfache Grafiken, Icons und Illustrationen.' },
      { question: 'Verringert die GIF-Konvertierung die Qualitat?', answer: 'GIF verwendet eine begrenzte 256-Farben-Palette. Fotos konnen Details verlieren. Am besten fur Grafiken mit flachen Farben.' },
      { question: 'Werden meine Dateien an einen Server gesendet?', answer: 'Nein. Die Konvertierung erfolgt vollstandig im Browser.' },
    ],
    es: [
      { question: 'Que es el formato GIF?', answer: 'GIF es un formato de imagen ampliamente compatible que soporta hasta 256 colores. Ideal para graficos simples e iconos.' },
      { question: 'Convertir a GIF reduce la calidad?', answer: 'GIF usa una paleta limitada de 256 colores. Las fotografias pueden perder detalle. Funciona mejor para graficos con colores planos.' },
      { question: 'Se envian mis archivos a un servidor?', answer: 'No. La conversion se realiza completamente en tu navegador.' },
    ],
    fr: [
      { question: 'Qu\'est-ce que le format GIF?', answer: 'GIF est un format d\'image largement supporte qui prend en charge jusqu\'a 256 couleurs. Ideal pour les graphiques simples et les icones.' },
      { question: 'La conversion en GIF reduit-elle la qualite?', answer: 'GIF utilise une palette limitee de 256 couleurs. Les photographies peuvent perdre des details.' },
      { question: 'Mes fichiers sont-ils envoyes a un serveur?', answer: 'Non. La conversion se fait entierement dans votre navigateur.' },
    ],
    pt: [
      { question: 'O que e o formato GIF?', answer: 'GIF e um formato de imagem amplamente suportado que suporta ate 256 cores. Ideal para graficos simples e icones.' },
      { question: 'Converter para GIF reduz a qualidade?', answer: 'GIF usa uma paleta limitada de 256 cores. Fotografias podem perder detalhes.' },
      { question: 'Os meus ficheiros sao enviados para um servidor?', answer: 'Nao. A conversao e feita inteiramente no seu navegador.' },
    ],
    it: [
      { question: 'Cos\'e il formato GIF?', answer: 'GIF e un formato immagine ampiamente supportato che supporta fino a 256 colori. Ideale per grafiche semplici e icone.' },
      { question: 'La conversione in GIF riduce la qualita?', answer: 'GIF utilizza una palette limitata di 256 colori. Le fotografie possono perdere dettagli.' },
      { question: 'I miei file vengono inviati a un server?', answer: 'No. La conversione avviene interamente nel browser.' },
    ],
    ro: [
      { question: 'Ce este formatul GIF?', answer: 'GIF este un format de imagine larg suportat care suporta pana la 256 culori. Ideal pentru grafice simple si pictograme.' },
      { question: 'Conversia in GIF reduce calitatea?', answer: 'GIF foloseste o paleta limitata de 256 culori. Fotografiile pot pierde detalii.' },
      { question: 'Sunt fisierele mele trimise pe un server?', answer: 'Nu. Conversia se face integral in browser.' },
    ],
    nl: [
      { question: 'Wat is het GIF-formaat?', answer: 'GIF is een breed ondersteund afbeeldingsformaat dat tot 256 kleuren ondersteunt. Ideaal voor eenvoudige afbeeldingen en iconen.' },
      { question: 'Vermindert GIF-conversie de kwaliteit?', answer: 'GIF gebruikt een beperkt palet van 256 kleuren. Foto\'s kunnen detail verliezen.' },
      { question: 'Worden mijn bestanden naar een server gestuurd?', answer: 'Nee. De conversie vindt volledig plaats in de browser.' },
    ],
    hu: [
      { question: 'Mi a GIF formatum?', answer: 'A GIF egy szeles korben tamogatott kepformatum, amely legfeljebb 256 szint tamogat. Idealis egyszeru grafikakhoz es ikonokhoz.' },
      { question: 'A GIF konvertalas rontja a minosegét?', answer: 'A GIF korlatozott 256 szinu palettat hasznal. A fenykepek elveszithetnek reszleteket.' },
      { question: 'A fajljaim elkuldésre kerulnek egy szerverre?', answer: 'Nem. A konvertalas teljes egeszeben a bongeszoben tortenik.' },
    ],
    cs: [
      { question: 'Co je format GIF?', answer: 'GIF je siroce podporovany obrazovy format, ktery podporuje az 256 barev. Idealni pro jednoduchou grafiku a ikony.' },
      { question: 'Snizuje konverze do GIF kvalitu?', answer: 'GIF pouziva omezenou paletu 256 barev. Fotografie mohou ztratit detaily.' },
      { question: 'Jsou moje soubory odeslany na server?', answer: 'Ne. Konverze probiha cele v prohlizeci.' },
    ],
    sv: [
      { question: 'Vad ar GIF-format?', answer: 'GIF ar ett brett stott bildformat som stodjer upp till 256 farger. Idealiskt for enkel grafik och ikoner.' },
      { question: 'Minskar GIF-konvertering kvaliteten?', answer: 'GIF anvander en begransad 256-fargspalett. Fotografier kan forlora detaljer.' },
      { question: 'Skickas mina filer till en server?', answer: 'Nej. Konverteringen sker helt i webblasaren.' },
    ],
    da: [
      { question: 'Hvad er GIF-format?', answer: 'GIF er et bredt understoettet billedformat, der understoetter op til 256 farver. Ideelt til simpel grafik og ikoner.' },
      { question: 'Reducerer GIF-konvertering kvaliteten?', answer: 'GIF bruger en begraenset 256-farve palette. Fotografier kan miste detaljer.' },
      { question: 'Sendes mine filer til en server?', answer: 'Nej. Konverteringen foregaar helt i browseren.' },
    ],
    no: [
      { question: 'Hva er GIF-format?', answer: 'GIF er et bredt stottet bildeformat som stotter opptil 256 farger. Ideelt for enkel grafikk og ikoner.' },
      { question: 'Reduserer GIF-konvertering kvaliteten?', answer: 'GIF bruker en begrenset 256-fargepalett. Fotografier kan miste detaljer.' },
      { question: 'Sendes filene mine til en server?', answer: 'Nei. Konverteringen skjer helt i nettleseren.' },
    ],
    fi: [
      { question: 'Mika on GIF-muoto?', answer: 'GIF on laajasti tuettu kuvamuoto, joka tukee enintaan 256 varia. Ihanteellinen yksinkertaisille grafiikoille ja kuvakkeille.' },
      { question: 'Vahentaako GIF-muunnos laatua?', answer: 'GIF kayttaa rajattua 256 varin palettia. Valokuvat voivat menettaa yksityiskohtia.' },
      { question: 'Lahetetaanko tiedostoni palvelimelle?', answer: 'Ei. Muunnos tapahtuu kokonaan selaimessa.' },
    ],
    el: [
      { question: 'Τι είναι η μορφή GIF;', answer: 'Το GIF είναι μια ευρέως υποστηριζόμενη μορφή εικόνας που υποστηρίζει έως 256 χρώματα. Ιδανικό για απλά γραφικά και εικονίδια.' },
      { question: 'Η μετατροπή σε GIF μειώνει την ποιότητα;', answer: 'Το GIF χρησιμοποιεί περιορισμένη παλέτα 256 χρωμάτων. Οι φωτογραφίες μπορεί να χάσουν λεπτομέρειες.' },
      { question: 'Αποστέλλονται τα αρχεία μου σε διακομιστή;', answer: 'Όχι. Η μετατροπή γίνεται εξ ολοκλήρου στο πρόγραμμα περιήγησης.' },
    ],
  },
  TIFF: {
    en: [
      { question: 'What is TIFF format?', answer: 'TIFF is a professional lossless image format used in printing, publishing, and archiving. It supports high color depth and multiple layers.' },
      { question: 'Are TIFF files larger than JPG?', answer: 'Yes. TIFF files are typically much larger because they use lossless compression or no compression at all.' },
      { question: 'Are my files sent to a server?', answer: 'No. Conversion runs entirely in your browser. Files never leave your computer.' },
    ],
    de: [
      { question: 'Was ist das TIFF-Format?', answer: 'TIFF ist ein professionelles verlustfreies Bildformat fur Druck, Verlagswesen und Archivierung.' },
      { question: 'Sind TIFF-Dateien grosser als JPG?', answer: 'Ja. TIFF-Dateien sind typischerweise viel grosser, da sie verlustfreie Kompression verwenden.' },
      { question: 'Werden meine Dateien an einen Server gesendet?', answer: 'Nein. Die Konvertierung erfolgt vollstandig im Browser.' },
    ],
    es: [
      { question: 'Que es el formato TIFF?', answer: 'TIFF es un formato de imagen profesional sin perdida utilizado en impresion, publicacion y archivado.' },
      { question: 'Son los archivos TIFF mas grandes que JPG?', answer: 'Si. Los archivos TIFF son tipicamente mucho mas grandes porque usan compresion sin perdida.' },
      { question: 'Se envian mis archivos a un servidor?', answer: 'No. La conversion se realiza completamente en tu navegador.' },
    ],
    fr: [
      { question: 'Qu\'est-ce que le format TIFF?', answer: 'TIFF est un format d\'image professionnel sans perte utilise pour l\'impression, l\'edition et l\'archivage.' },
      { question: 'Les fichiers TIFF sont-ils plus grands que JPG?', answer: 'Oui. Les fichiers TIFF sont generalement beaucoup plus volumineux car ils utilisent une compression sans perte.' },
      { question: 'Mes fichiers sont-ils envoyes a un serveur?', answer: 'Non. La conversion se fait entierement dans votre navigateur.' },
    ],
    pt: [
      { question: 'O que e o formato TIFF?', answer: 'TIFF e um formato de imagem profissional sem perdas utilizado em impressao, publicacao e arquivamento.' },
      { question: 'Os ficheiros TIFF sao maiores que JPG?', answer: 'Sim. Os ficheiros TIFF sao tipicamente muito maiores porque usam compressao sem perdas.' },
      { question: 'Os meus ficheiros sao enviados para um servidor?', answer: 'Nao. A conversao e feita inteiramente no seu navegador.' },
    ],
    it: [
      { question: 'Cos\'e il formato TIFF?', answer: 'TIFF e un formato immagine professionale lossless utilizzato nella stampa, nell\'editoria e nell\'archiviazione.' },
      { question: 'I file TIFF sono piu grandi di JPG?', answer: 'Si. I file TIFF sono tipicamente molto piu grandi perche utilizzano compressione lossless.' },
      { question: 'I miei file vengono inviati a un server?', answer: 'No. La conversione avviene interamente nel browser.' },
    ],
    ro: [
      { question: 'Ce este formatul TIFF?', answer: 'TIFF este un format de imagine profesional fara pierderi folosit in tiparire, publicare si arhivare.' },
      { question: 'Sunt fisierele TIFF mai mari decat JPG?', answer: 'Da. Fisierele TIFF sunt de obicei mult mai mari deoarece folosesc compresie fara pierderi.' },
      { question: 'Sunt fisierele mele trimise pe un server?', answer: 'Nu. Conversia se face integral in browser.' },
    ],
    nl: [
      { question: 'Wat is het TIFF-formaat?', answer: 'TIFF is een professioneel lossless afbeeldingsformaat dat wordt gebruikt voor afdrukken, publiceren en archivering.' },
      { question: 'Zijn TIFF-bestanden groter dan JPG?', answer: 'Ja. TIFF-bestanden zijn doorgaans veel groter omdat ze lossless compressie gebruiken.' },
      { question: 'Worden mijn bestanden naar een server gestuurd?', answer: 'Nee. De conversie vindt volledig plaats in de browser.' },
    ],
    hu: [
      { question: 'Mi a TIFF formatum?', answer: 'A TIFF egy professzionalis veszteségmentes kepformatum, amelyet nyomtatasban, kiadas es archivalasban hasznalnak.' },
      { question: 'A TIFF fajlok nagyobbak mint a JPG?', answer: 'Igen. A TIFF fajlok altalaban sokkal nagyobbak, mert veszteségmentes tomorittest hasznalnak.' },
      { question: 'A fajljaim elkuldésre kerulnek egy szerverre?', answer: 'Nem. A konvertalas teljes egeszeben a bongeszoben tortenik.' },
    ],
    cs: [
      { question: 'Co je format TIFF?', answer: 'TIFF je profesionalni bezztratovy obrazovy format pouzivany v tisku, vydavatelstvi a archivaci.' },
      { question: 'Jsou soubory TIFF vetsi nez JPG?', answer: 'Ano. Soubory TIFF jsou obvykle mnohem vetsi, protoze pouzivaji bezztratovou kompresi.' },
      { question: 'Jsou moje soubory odeslany na server?', answer: 'Ne. Konverze probiha cele v prohlizeci.' },
    ],
    sv: [
      { question: 'Vad ar TIFF-format?', answer: 'TIFF ar ett professionellt forlustfritt bildformat som anvands for utskrift, publicering och arkivering.' },
      { question: 'Ar TIFF-filer storre an JPG?', answer: 'Ja. TIFF-filer ar vanligtvis mycket storre eftersom de anvander forlustfri komprimering.' },
      { question: 'Skickas mina filer till en server?', answer: 'Nej. Konverteringen sker helt i webblasaren.' },
    ],
    da: [
      { question: 'Hvad er TIFF-format?', answer: 'TIFF er et professionelt tabsfrit billedformat, der bruges til udskrivning, publicering og arkivering.' },
      { question: 'Er TIFF-filer storre end JPG?', answer: 'Ja. TIFF-filer er typisk meget storre fordi de bruger tabsfri komprimering.' },
      { question: 'Sendes mine filer til en server?', answer: 'Nej. Konverteringen foregaar helt i browseren.' },
    ],
    no: [
      { question: 'Hva er TIFF-format?', answer: 'TIFF er et profesjonelt tapsfritt bildeformat som brukes til utskrift, publisering og arkivering.' },
      { question: 'Er TIFF-filer storre enn JPG?', answer: 'Ja. TIFF-filer er vanligvis mye storre fordi de bruker tapsfri komprimering.' },
      { question: 'Sendes filene mine til en server?', answer: 'Nei. Konverteringen skjer helt i nettleseren.' },
    ],
    fi: [
      { question: 'Mika on TIFF-muoto?', answer: 'TIFF on ammattimainen haviöton kuvamuoto, jota kaytetaan tulostuksessa, julkaisussa ja arkistoinnissa.' },
      { question: 'Ovatko TIFF-tiedostot suurempia kuin JPG?', answer: 'Kylla. TIFF-tiedostot ovat tyypillisesti paljon suurempia, koska ne kayttavat haviötöntä pakkausta.' },
      { question: 'Lahetetaanko tiedostoni palvelimelle?', answer: 'Ei. Muunnos tapahtuu kokonaan selaimessa.' },
    ],
    el: [
      { question: 'Τι είναι η μορφή TIFF;', answer: 'Το TIFF είναι μια επαγγελματική μορφή εικόνας χωρίς απώλειες που χρησιμοποιείται στην εκτύπωση, την έκδοση και την αρχειοθέτηση.' },
      { question: 'Είναι τα αρχεία TIFF μεγαλύτερα από JPG;', answer: 'Ναι. Τα αρχεία TIFF είναι συνήθως πολύ μεγαλύτερα επειδή χρησιμοποιούν συμπίεση χωρίς απώλειες.' },
      { question: 'Αποστέλλονται τα αρχεία μου σε διακομιστή;', answer: 'Όχι. Η μετατροπή γίνεται εξ ολοκλήρου στο πρόγραμμα περιήγησης.' },
    ],
  },
};

// Read registry to get locale data
const registryCode = fs.readFileSync(path.join(__dirname, '..', 'lib', 'i18n', 'tool-registry.ts'), 'utf8');

// Parse converter entries from registry
function getRegistryLocale(key, locale) {
  const keyIdx = registryCode.indexOf(`key: '${key}'`);
  if (keyIdx === -1) return null;
  const localePattern = new RegExp(`${locale}: \\{ slug: '([^']+)', title: '([^']+)', description: '([^']+)' \\}`);
  const searchArea = registryCode.slice(keyIdx, keyIdx + 3000);
  const match = searchArea.match(localePattern);
  if (!match) return null;
  return { slug: match[1], title: match[2], description: match[3] };
}

// Define converter keys and their source/target formats
const converters = [
  { key: 'jpgToAvif', from: 'JPG', to: 'AVIF', target: 'AVIF' },
  { key: 'pngToAvif', from: 'PNG', to: 'AVIF', target: 'AVIF' },
  { key: 'webpToAvif', from: 'WebP', to: 'AVIF', target: 'AVIF' },
  { key: 'svgToAvif', from: 'SVG', to: 'AVIF', target: 'AVIF' },
  { key: 'bmpToAvif', from: 'BMP', to: 'AVIF', target: 'AVIF' },
  { key: 'gifToAvif', from: 'GIF', to: 'AVIF', target: 'AVIF' },
  { key: 'heicToAvif', from: 'HEIC', to: 'AVIF', target: 'AVIF' },
  { key: 'tiffToAvif', from: 'TIFF', to: 'AVIF', target: 'AVIF' },
  { key: 'jpgToGif', from: 'JPG', to: 'GIF', target: 'GIF' },
  { key: 'pngToGif', from: 'PNG', to: 'GIF', target: 'GIF' },
  { key: 'webpToGif', from: 'WebP', to: 'GIF', target: 'GIF' },
  { key: 'svgToGif', from: 'SVG', to: 'GIF', target: 'GIF' },
  { key: 'bmpToGif', from: 'BMP', to: 'GIF', target: 'GIF' },
  { key: 'jpgToTiff', from: 'JPG', to: 'TIFF', target: 'TIFF' },
  { key: 'pngToTiff', from: 'PNG', to: 'TIFF', target: 'TIFF' },
  { key: 'webpToTiff', from: 'WebP', to: 'TIFF', target: 'TIFF' },
  { key: 'svgToTiff', from: 'SVG', to: 'TIFF', target: 'TIFF' },
  { key: 'bmpToTiff', from: 'BMP', to: 'TIFF', target: 'TIFF' },
  { key: 'heicToTiff', from: 'HEIC', to: 'TIFF', target: 'TIFF' },
];

const locales = ['en', 'de', 'es', 'fr', 'pt', 'it', 'ro', 'nl', 'hu', 'cs', 'sv', 'da', 'no', 'fi', 'el'];

let created = 0;
let skipped = 0;

for (const conv of converters) {
  for (const locale of locales) {
    const reg = getRegistryLocale(conv.key, locale);
    if (!reg) { skipped++; continue; }

    const cfg = localeConfig[locale];
    const ui = uiStrings[locale];
    const faqs = targetFaqs[conv.target][locale];

    const toolPath = `${cfg.base}/${reg.slug}`;
    const fileName = `converter-${conv.from.toLowerCase()}-to-${conv.to.toLowerCase()}.json`;
    const dirPath = path.join(dataDir, locale, 'tools');
    const filePath = path.join(dirPath, fileName);

    // Skip if already exists
    if (fs.existsSync(filePath)) { skipped++; continue; }

    const r = (s) => s.replace(/\{FROM\}/g, conv.from).replace(/\{TO\}/g, conv.to).replace(/\{TARGET\}/g, conv.to).replace(/\{DESC\}/g, reg.description);

    const json = {
      toolKey: conv.key,
      locale: locale,
      metadata: {
        title: `${reg.title} — ${conv.from} ${conv.to}`,
        description: reg.description,
        ogImage: '/assets/tools/jpg-png-to-webp-converter/jpg-png-na-webp-bez-limitu-pl.webp',
        path: toolPath,
      },
      hero: {
        title: reg.title,
        description: reg.description,
        backgroundImage: '/assets/tools/jpg-png-to-webp-converter/jpg-png-na-webp-bez-limitu-pl.webp',
      },
      breadcrumbs: {
        second: { href: cfg.base, label: cfg.label },
        third: { href: toolPath, label: reg.title },
      },
      schemas: {
        software: {
          name: reg.title,
          applicationCategory: 'MultimediaApplication',
          applicationSubCategory: 'ImageConverter',
          description: reg.description,
          featureList: ui.featureList.map(r),
        },
        howTo: {
          name: r(ui.howToName),
          description: reg.description,
          steps: ui.steps.map((s, i) => ({ position: i + 1, name: s.name, text: r(s.text) })),
        },
      },
      contentBlocks: [
        {
          type: 'section',
          title: r(ui.sectionTitle),
          html: r(ui.sectionHtml),
        },
        {
          type: 'steps',
          title: r(ui.stepsTitle),
          steps: ui.steps.map((s, i) => ({ position: i + 1, title: s.name, description: r(s.text) })),
        },
        {
          type: 'faq',
          title: ui.faqTitle,
          items: faqs,
        },
        {
          type: 'contact',
          title: ui.contactTitle,
          description: ui.contactDesc,
          href: cfg.contactHref,
          buttonText: ui.contactBtn,
        },
        {
          type: 'toolsCarousel',
          title: ui.carouselTitle,
        },
      ],
    };

    fs.mkdirSync(dirPath, { recursive: true });
    fs.writeFileSync(filePath, JSON.stringify(json, null, 2) + '\n', 'utf8');
    created++;
  }
}

console.log(`✅ Created ${created} JSON files, skipped ${skipped}`);
