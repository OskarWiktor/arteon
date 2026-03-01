/**
 * Generate missing content JSON files where the original script's regex
 * failed on descriptions containing apostrophes.
 */
const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data');
const registryPath = path.join(__dirname, '..', 'lib', 'i18n', 'tool-registry.ts');
const registryCode = fs.readFileSync(registryPath, 'utf8');

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

// Robust parser for registry entries with apostrophes
function getRegistryLocale(key, locale) {
  const keyIdx = registryCode.indexOf(`key: '${key}'`);
  if (keyIdx === -1) return null;
  const area = registryCode.slice(keyIdx, keyIdx + 3000);
  const localeIdx = area.indexOf(`${locale}: { slug: '`);
  if (localeIdx === -1) return null;
  const line = area.slice(localeIdx, area.indexOf('\n', localeIdx));

  const slugMatch = line.match(/slug: '([^']+)'/);
  const titleMatch = line.match(/title: '([^']+)'/);
  if (!slugMatch || !titleMatch) return null;

  const descStart = line.indexOf("description: '");
  if (descStart === -1) return null;
  const descContent = line.slice(descStart + 14);
  // Find closing: look for pattern ' } or ' },
  const closeMatch = descContent.match(/' \}/);
  if (!closeMatch) return null;
  const description = descContent.slice(0, closeMatch.index);

  return { slug: slugMatch[1], title: titleMatch[1], description };
}

const uiStrings = {
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

const targetFaqs = {
  AVIF: {
    fr: [
      {
        question: "Qu'est-ce que le format AVIF?",
        answer: "AVIF est un format d'image moderne base sur le codec AV1. Il offre une excellente compression — les fichiers peuvent etre jusqu'a 50% plus petits que JPG.",
      },
      { question: 'AVIF fonctionne-t-il dans tous les navigateurs?', answer: 'AVIF est pris en charge par Chrome, Edge et Firefox. Safari a un support limite pour AVIF.' },
      { question: 'Mes fichiers sont-ils envoyes a un serveur?', answer: 'Non. La conversion se fait entierement dans votre navigateur. Les fichiers ne quittent jamais votre ordinateur.' },
    ],
    nl: [
      {
        question: 'Wat is het AVIF-formaat?',
        answer: 'AVIF is een modern afbeeldingsformaat gebaseerd op de AV1-codec. Het biedt uitstekende compressie — bestanden kunnen tot 50% kleiner zijn dan JPG.',
      },
      { question: 'Werkt AVIF in alle browsers?', answer: 'AVIF wordt ondersteund door Chrome, Edge en Firefox. Safari heeft beperkte AVIF-ondersteuning.' },
      { question: 'Worden mijn bestanden naar een server gestuurd?', answer: 'Nee. De conversie vindt volledig plaats in de browser. Bestanden verlaten nooit uw computer.' },
    ],
    it: [
      {
        question: "Cos'e il formato AVIF?",
        answer: "AVIF e un formato immagine moderno basato sul codec AV1. Offre un'eccellente compressione — i file possono essere fino al 50% piu piccoli di JPG.",
      },
      { question: 'AVIF funziona in tutti i browser?', answer: 'AVIF e supportato da Chrome, Edge e Firefox. Safari ha un supporto limitato per AVIF.' },
      { question: 'I miei file vengono inviati a un server?', answer: 'No. La conversione avviene interamente nel browser. I file non lasciano mai il tuo computer.' },
    ],
    el: [
      {
        question: 'Τι είναι η μορφή AVIF;',
        answer: 'Το AVIF είναι μια σύγχρονη μορφή εικόνας βασισμένη στον κωδικοποιητή AV1. Προσφέρει εξαιρετική συμπίεση — τα αρχεία μπορούν να είναι έως 50% μικρότερα από JPG.',
      },
      { question: 'Λειτουργεί το AVIF σε όλα τα προγράμματα περιήγησης;', answer: 'Το AVIF υποστηρίζεται από Chrome, Edge και Firefox. Το Safari έχει περιορισμένη υποστήριξη AVIF.' },
      { question: 'Αποστέλλονται τα αρχεία μου σε διακομιστή;', answer: 'Όχι. Η μετατροπή γίνεται εξ ολοκλήρου στο πρόγραμμα περιήγησης. Τα αρχεία δεν φεύγουν ποτέ από τον υπολογιστή σας.' },
    ],
  },
  GIF: {
    nl: [
      { question: 'Wat is het GIF-formaat?', answer: 'GIF is een breed ondersteund afbeeldingsformaat dat tot 256 kleuren ondersteunt. Ideaal voor eenvoudige afbeeldingen en iconen.' },
      { question: 'Vermindert GIF-conversie de kwaliteit?', answer: "GIF gebruikt een beperkt palet van 256 kleuren. Foto's kunnen detail verliezen." },
      { question: 'Worden mijn bestanden naar een server gestuurd?', answer: 'Nee. De conversie vindt volledig plaats in de browser.' },
    ],
  },
  TIFF: {
    fr: [
      { question: "Qu'est-ce que le format TIFF?", answer: "TIFF est un format d'image professionnel sans perte utilise pour l'impression, l'edition et l'archivage." },
      { question: 'Les fichiers TIFF sont-ils plus grands que JPG?', answer: 'Oui. Les fichiers TIFF sont generalement beaucoup plus volumineux car ils utilisent une compression sans perte.' },
      { question: 'Mes fichiers sont-ils envoyes a un serveur?', answer: 'Non. La conversion se fait entierement dans votre navigateur.' },
    ],
    nl: [
      { question: 'Wat is het TIFF-formaat?', answer: 'TIFF is een professioneel lossless afbeeldingsformaat dat wordt gebruikt voor afdrukken, publiceren en archivering.' },
      { question: 'Zijn TIFF-bestanden groter dan JPG?', answer: 'Ja. TIFF-bestanden zijn doorgaans veel groter omdat ze lossless compressie gebruiken.' },
      { question: 'Worden mijn bestanden naar een server gestuurd?', answer: 'Nee. De conversie vindt volledig plaats in de browser.' },
    ],
    it: [
      { question: "Cos'e il formato TIFF?", answer: "TIFF e un formato immagine professionale lossless utilizzato nella stampa, nell'editoria e nell'archiviazione." },
      { question: 'I file TIFF sono piu grandi di JPG?', answer: 'Si. I file TIFF sono tipicamente molto piu grandi perche utilizzano compressione lossless.' },
      { question: 'I miei file vengono inviati a un server?', answer: 'No. La conversione avviene interamente nel browser.' },
    ],
  },
};

// Missing files to generate
const missingFiles = [
  { locale: 'fr', key: 'heicToAvif', from: 'HEIC', to: 'AVIF', target: 'AVIF' },
  { locale: 'fr', key: 'heicToTiff', from: 'HEIC', to: 'TIFF', target: 'TIFF' },
  { locale: 'fr', key: 'jpgToAvif', from: 'JPG', to: 'AVIF', target: 'AVIF' },
  { locale: 'fr', key: 'jpgToTiff', from: 'JPG', to: 'TIFF', target: 'TIFF' },
  { locale: 'nl', key: 'heicToAvif', from: 'HEIC', to: 'AVIF', target: 'AVIF' },
  { locale: 'nl', key: 'heicToTiff', from: 'HEIC', to: 'TIFF', target: 'TIFF' },
  { locale: 'nl', key: 'jpgToAvif', from: 'JPG', to: 'AVIF', target: 'AVIF' },
  { locale: 'nl', key: 'jpgToTiff', from: 'JPG', to: 'TIFF', target: 'TIFF' },
  { locale: 'nl', key: 'jpgToGif', from: 'JPG', to: 'GIF', target: 'GIF' },
  { locale: 'it', key: 'heicToAvif', from: 'HEIC', to: 'AVIF', target: 'AVIF' },
  { locale: 'it', key: 'heicToTiff', from: 'HEIC', to: 'TIFF', target: 'TIFF' },
  { locale: 'el', key: 'jpgToAvif', from: 'JPG', to: 'AVIF', target: 'AVIF' },
  { locale: 'el', key: 'pngToAvif', from: 'PNG', to: 'AVIF', target: 'AVIF' },
];

let created = 0;

for (const m of missingFiles) {
  const reg = getRegistryLocale(m.key, m.locale);
  if (!reg) {
    console.log('⚠ No registry data for', m.key, m.locale);
    continue;
  }

  const cfg = localeConfig[m.locale];
  const ui = uiStrings[m.locale];
  const faqs = targetFaqs[m.target]?.[m.locale];
  if (!faqs) {
    console.log('⚠ No FAQ data for', m.target, m.locale);
    continue;
  }

  const toolPath = `${cfg.base}/${reg.slug}`;
  const fileName = `converter-${m.from.toLowerCase()}-to-${m.to.toLowerCase()}.json`;
  const dirPath = path.join(dataDir, m.locale, 'tools');
  const filePath = path.join(dirPath, fileName);

  const r = (s) =>
    s
      .replace(/\{FROM\}/g, m.from)
      .replace(/\{TO\}/g, m.to)
      .replace(/\{TARGET\}/g, m.to)
      .replace(/\{DESC\}/g, reg.description);

  const json = {
    toolKey: m.key,
    locale: m.locale,
    metadata: {
      title: `${reg.title} — ${m.from} ${m.to}`,
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
      { type: 'section', title: r(ui.sectionTitle), html: r(ui.sectionHtml) },
      { type: 'steps', title: r(ui.stepsTitle), steps: ui.steps.map((s, i) => ({ position: i + 1, title: s.name, description: r(s.text) })) },
      { type: 'faq', title: ui.faqTitle, items: faqs },
      { type: 'contact', title: ui.contactTitle, description: ui.contactDesc, href: cfg.contactHref, buttonText: ui.contactBtn },
      { type: 'toolsCarousel', title: ui.carouselTitle },
    ],
  };

  fs.mkdirSync(dirPath, { recursive: true });
  fs.writeFileSync(filePath, JSON.stringify(json, null, 2) + '\n', 'utf8');
  created++;
  console.log('✓', m.locale, fileName);
}

console.log(`\n✅ Created ${created} missing JSON files`);
