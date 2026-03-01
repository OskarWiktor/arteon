/**
 * One-time script to expand short meta descriptions in converter tool JSON files.
 * Run: node scripts/_fix-short-meta-descriptions.cjs
 */
const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, '..', 'data');
const LOCALES = ['pl', 'en', 'de', 'es', 'fr', 'pt', 'it', 'ro', 'nl', 'hu', 'cs', 'sv', 'da', 'no', 'fi', 'el'];
const MIN_LENGTH = 120;

// ---------------------------------------------------------------------------
// Locale-specific expansion templates
// These append trust-signal phrases to existing short descriptions.
// ---------------------------------------------------------------------------
const EXPANSION = {
  pl: [
    'Konwersja w przeglądarce — bez rejestracji, bez limitu plików, pełna prywatność.',
    'Darmowe narzędzie działające lokalnie w przeglądarce. Bez przesyłania na serwer.',
    'Przetwarzanie odbywa się w Twojej przeglądarce — pliki nie opuszczają urządzenia.',
    'Bez instalacji, bez logowania. Działa na każdym urządzeniu z przeglądarką.',
  ],
  en: [
    'Free browser-based tool — no signup, no file limits, complete privacy.',
    'Runs entirely in your browser. No server uploads, no registration required.',
    'All processing happens locally in your browser — files never leave your device.',
    'No installation needed, works on any device. Free, private, and unlimited.',
  ],
  de: [
    'Kostenloses Browser-Tool — ohne Anmeldung, ohne Dateilimit, volle Privatsphäre.',
    'Läuft komplett im Browser. Kein Server-Upload, keine Registrierung nötig.',
    'Verarbeitung direkt im Browser — Dateien verlassen Ihr Gerät nicht.',
    'Ohne Installation, funktioniert auf jedem Gerät. Kostenlos und unbegrenzt.',
  ],
  es: [
    'Herramienta gratuita en el navegador — sin registro, sin límites, privacidad total.',
    'Funciona directamente en tu navegador. Sin subidas al servidor, sin registro.',
    'Todo el procesamiento ocurre en tu navegador — los archivos no salen de tu dispositivo.',
    'Sin instalación, funciona en cualquier dispositivo. Gratis, privado e ilimitado.',
  ],
  fr: [
    'Outil gratuit dans le navigateur — sans inscription, sans limite, confidentialité totale.',
    'Fonctionne directement dans votre navigateur. Sans téléversement, sans inscription.',
    'Tout le traitement se fait dans votre navigateur — vos fichiers restent sur votre appareil.',
    'Sans installation, fonctionne sur tout appareil. Gratuit, privé et illimité.',
  ],
  pt: [
    'Ferramenta gratuita no navegador — sem registo, sem limites, privacidade total.',
    'Funciona diretamente no navegador. Sem envio para servidor, sem registo.',
    'Todo o processamento ocorre no navegador — os ficheiros não saem do dispositivo.',
    'Sem instalação, funciona em qualquer dispositivo. Gratuito, privado e ilimitado.',
  ],
  it: [
    'Strumento gratuito nel browser — senza registrazione, senza limiti, privacy totale.',
    'Funziona direttamente nel browser. Nessun upload sul server, nessuna registrazione.',
    'Elaborazione locale nel browser — i file non lasciano mai il dispositivo.',
    'Senza installazione, funziona su qualsiasi dispositivo. Gratuito, privato e illimitato.',
  ],
  ro: [
    'Instrument gratuit în browser — fără înregistrare, fără limite, confidențialitate totală.',
    'Funcționează direct în browser. Fără upload pe server, fără înregistrare.',
    'Procesarea are loc în browser — fișierele nu părăsesc dispozitivul.',
    'Fără instalare, funcționează pe orice dispozitiv. Gratuit, privat și nelimitat.',
  ],
  nl: [
    'Gratis browsertool — zonder registratie, zonder bestandslimiet, volledige privacy.',
    'Draait volledig in je browser. Geen serveruploads, geen registratie nodig.',
    'Alle verwerking gebeurt lokaal in je browser — bestanden verlaten je apparaat niet.',
    'Geen installatie nodig, werkt op elk apparaat. Gratis, privé en onbeperkt.',
  ],
  hu: [
    'Ingyenes böngészőeszköz — regisztráció nélkül, fájllimit nélkül, teljes adatvédelem.',
    'Közvetlenül a böngészőben fut. Nincs szerverfelöltés, nincs regisztráció.',
    'A feldolgozás a böngészőben történik — a fájlok nem hagyják el az eszközödet.',
    'Telepítés nélkül, bármilyen eszközön működik. Ingyenes, privát és korlátlan.',
  ],
  cs: [
    'Bezplatný nástroj v prohlížeči — bez registrace, bez limitu souborů, plné soukromí.',
    'Běží přímo v prohlížeči. Žádné nahrávání na server, žádná registrace.',
    'Zpracování probíhá v prohlížeči — soubory neopouštějí vaše zařízení.',
    'Bez instalace, funguje na jakémkoli zařízení. Zdarma, soukromé a neomezené.',
  ],
  sv: [
    'Gratis webbläsarverktyg — utan registrering, utan filbegränsning, fullständig integritet.',
    'Körs helt i din webbläsare. Ingen serveruppladdning, ingen registrering krävs.',
    'All bearbetning sker lokalt i webbläsaren — filerna lämnar aldrig din enhet.',
    'Ingen installation behövs, fungerar på alla enheter. Gratis, privat och obegränsat.',
  ],
  da: [
    'Gratis browserværktøj — uden registrering, uden filbegrænsning, fuld privatliv.',
    'Kører helt i din browser. Ingen serveruploads, ingen registrering påkrævet.',
    'Al behandling sker lokalt i browseren — filer forlader aldrig din enhed.',
    'Ingen installation nødvendig, virker på alle enheder. Gratis, privat og ubegrænset.',
  ],
  no: [
    'Gratis nettleserverktøy — uten registrering, uten filbegrensning, full personvern.',
    'Kjører helt i nettleseren din. Ingen serveropplasting, ingen registrering nødvendig.',
    'All behandling skjer lokalt i nettleseren — filene forlater aldri enheten din.',
    'Ingen installasjon nødvendig, fungerer på alle enheter. Gratis, privat og ubegrenset.',
  ],
  fi: [
    'Ilmainen selaintyökalu — ilman rekisteröitymistä, ilman tiedostorajoituksia, täysi yksityisyys.',
    'Toimii kokonaan selaimessasi. Ei palvelinlatauksia, ei rekisteröitymistä.',
    'Kaikki käsittely tapahtuu paikallisesti selaimessa — tiedostot eivät poistu laitteeltasi.',
    'Ei asennusta, toimii kaikilla laitteilla. Ilmainen, yksityinen ja rajoittamaton.',
  ],
  el: [
    'Δωρεάν εργαλείο στο πρόγραμμα περιήγησης — χωρίς εγγραφή, χωρίς όρια αρχείων, πλήρης ιδιωτικότητα.',
    'Εκτελείται εξ ολοκλήρου στο πρόγραμμα περιήγησής σας. Χωρίς μεταφόρτωση σε διακομιστή.',
    'Η επεξεργασία γίνεται τοπικά στο πρόγραμμα περιήγησης — τα αρχεία δεν φεύγουν από τη συσκευή σας.',
    'Χωρίς εγκατάσταση, λειτουργεί σε κάθε συσκευή. Δωρεάν, ιδιωτικό και απεριόριστο.',
  ],
};

let updated = 0;
let skipped = 0;

for (const locale of LOCALES) {
  const toolsDir = path.join(DATA_DIR, locale, 'tools');
  if (!fs.existsSync(toolsDir)) continue;

  const files = fs.readdirSync(toolsDir).filter((f) => f.endsWith('.json'));
  const expansions = EXPANSION[locale];
  if (!expansions) continue;

  for (const file of files) {
    const filePath = path.join(toolsDir, file);
    const raw = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(raw);

    const desc = data.metadata?.description || '';
    if (desc.length >= MIN_LENGTH) {
      skipped++;
      continue;
    }

    // Pick expansion phrase based on hash of filename for consistency
    const hash = file.split('').reduce((a, c) => a + c.charCodeAt(0), 0);
    const expansion = expansions[hash % expansions.length];

    // Build new description: existing + expansion
    const newDesc = desc.endsWith('.') ? `${desc} ${expansion}` : `${desc}. ${expansion}`;

    // Update metadata.description
    data.metadata.description = newDesc;

    // Also update hero.description if it matches the old short description
    if (data.hero?.description === desc) {
      data.hero.description = newDesc;
    }

    // Also update schemas.software.description if it matches
    if (data.schemas?.software?.description === desc) {
      data.schemas.software.description = newDesc;
    }

    fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n', 'utf8');
    updated++;
  }
}

console.log(`Updated: ${updated}, Skipped (already ≥${MIN_LENGTH} chars): ${skipped}`);
