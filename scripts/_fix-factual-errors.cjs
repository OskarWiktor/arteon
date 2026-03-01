/**
 * Fix factual errors in converter-*-to-tiff.json and converter-*-to-gif.json files.
 *
 * Problems fixed:
 * 1. "Converting X to TIFF/GIF can improve LCP" — FALSE (TIFF is not a web format; GIF is 256 colors, worse than modern formats)
 * 2. "TIFF provides excellent compression" — FALSE (TIFF is lossless/uncompressed, known for quality not compression)
 * 3. "For email marketing and social media, TIFF..." — FALSE (TIFF files are too large for email/social)
 *
 * Approach: Replace the 2nd and 3rd <p> tags in the "in practice" sectionInfo block.
 */
const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, '..', 'data');
const LOCALES = ['en', 'pl', 'cs', 'da', 'de', 'el', 'es', 'fi', 'fr', 'hu', 'it', 'nl', 'no', 'pt', 'ro', 'sv'];

// --- TIFF: replacement for paragraph 2 (LCP claim → professional print/archival) ---
const TIFF_P2 = {
  en: 'TIFF is the industry standard for professional print, archiving, and post-processing workflows. Applications like Adobe Photoshop, Lightroom, and GIMP rely on TIFF for lossless editing. Converting to TIFF preserves full image data including color profiles, layers, and metadata.',
  pl: 'TIFF to branżowy standard dla profesjonalnego druku, archiwizacji i postprodukcji. Programy takie jak Adobe Photoshop, Lightroom i GIMP wykorzystują TIFF w bezstratnych procesach edycji. Konwersja do TIFF zachowuje pełne dane obrazu, w tym profile kolorów, warstwy i metadane.',
  de: 'TIFF ist der Branchenstandard für professionellen Druck, Archivierung und Nachbearbeitung. Programme wie Adobe Photoshop, Lightroom und GIMP nutzen TIFF für verlustfreie Bearbeitungsworkflows. Die Konvertierung in TIFF bewahrt sämtliche Bilddaten einschließlich Farbprofile, Ebenen und Metadaten.',
  fr: "Le TIFF est le standard de l'industrie pour l'impression professionnelle, l'archivage et la post-production. Des logiciels comme Adobe Photoshop, Lightroom et GIMP utilisent le TIFF pour des flux de travail d'édition sans perte. La conversion en TIFF préserve toutes les données de l'image, y compris les profils colorimétriques, les calques et les métadonnées.",
  cs: 'TIFF je průmyslový standard pro profesionální tisk, archivaci a postprodukci. Programy jako Adobe Photoshop, Lightroom a GIMP využívají TIFF pro bezeztrátové editační workflow. Konverze do TIFF zachovává veškerá obrazová data včetně barevných profilů, vrstev a metadat.',
  da: 'TIFF er industristandarden for professionelt tryk, arkivering og efterbehandling. Programmer som Adobe Photoshop, Lightroom og GIMP bruger TIFF til tabsfri redigering. Konvertering til TIFF bevarer alle billeddata inklusive farveprofiler, lag og metadata.',
  el: 'Το TIFF είναι το βιομηχανικό πρότυπο για επαγγελματική εκτύπωση, αρχειοθέτηση και μεταεπεξεργασία. Εφαρμογές όπως το Adobe Photoshop, Lightroom και GIMP χρησιμοποιούν TIFF για ροές εργασίας χωρίς απώλειες. Η μετατροπή σε TIFF διατηρεί όλα τα δεδομένα εικόνας, συμπεριλαμβανομένων προφίλ χρώματος, επιπέδων και μεταδεδομένων.',
  es: 'TIFF es el estándar de la industria para impresión profesional, archivado y postproducción. Programas como Adobe Photoshop, Lightroom y GIMP utilizan TIFF para flujos de trabajo de edición sin pérdidas. La conversión a TIFF preserva todos los datos de imagen, incluidos perfiles de color, capas y metadatos.',
  fi: 'TIFF on alan standardi ammattimaiseen tulostukseen, arkistointiin ja jälkikäsittelyyn. Ohjelmat kuten Adobe Photoshop, Lightroom ja GIMP käyttävät TIFF-muotoa häviöttömiin muokkaustyönkulkuihin. TIFF-muotoon muuntaminen säilyttää kaikki kuvatiedot, mukaan lukien väriprofiilit, tasot ja metatiedot.',
  hu: 'A TIFF az iparági szabvány a professzionális nyomtatáshoz, archiváláshoz és utómunkálatokhoz. Az Adobe Photoshop, Lightroom és GIMP programok TIFF formátumot használnak veszteségmentes szerkesztési munkafolyamatokhoz. A TIFF-re konvertálás megőrzi a teljes képadatot, beleértve a színprofilokat, rétegeket és metaadatokat.',
  it: "Il TIFF è lo standard del settore per la stampa professionale, l'archiviazione e la post-produzione. Programmi come Adobe Photoshop, Lightroom e GIMP utilizzano il TIFF per flussi di lavoro senza perdita di dati. La conversione in TIFF preserva tutti i dati dell'immagine, inclusi profili colore, livelli e metadati.",
  nl: "TIFF is de industriestandaard voor professioneel drukwerk, archivering en nabewerking. Programma's als Adobe Photoshop, Lightroom en GIMP gebruiken TIFF voor verliesvrije bewerkingsworkflows. Conversie naar TIFF behoudt alle beeldgegevens inclusief kleurprofielen, lagen en metadata.",
  no: 'TIFF er bransjestandarden for profesjonell utskrift, arkivering og etterbehandling. Programmer som Adobe Photoshop, Lightroom og GIMP bruker TIFF for tapsfrie redigeringsarbeidsflyter. Konvertering til TIFF bevarer alle bildedata inkludert fargeprofiler, lag og metadata.',
  pt: 'O TIFF é o padrão da indústria para impressão profissional, arquivamento e pós-produção. Programas como Adobe Photoshop, Lightroom e GIMP utilizam TIFF para fluxos de trabalho de edição sem perdas. A conversão para TIFF preserva todos os dados da imagem, incluindo perfis de cor, camadas e metadados.',
  ro: 'TIFF este standardul industrial pentru tipărire profesională, arhivare și post-producție. Programe precum Adobe Photoshop, Lightroom și GIMP utilizează TIFF pentru fluxuri de lucru de editare fără pierderi. Conversia în TIFF păstrează toate datele imaginii, inclusiv profiluri de culoare, straturi și metadate.',
  sv: 'TIFF är branschstandarden för professionellt tryck, arkivering och efterbearbetning. Program som Adobe Photoshop, Lightroom och GIMP använder TIFF för förlustfria redigeringsarbetsflöden. Konvertering till TIFF bevarar all bilddata inklusive färgprofiler, lager och metadata.',
};

// --- TIFF: replacement for paragraph 3 (compression claim → lossless quality) ---
const TIFF_P3 = {
  en: 'For professional photography and print production, TIFF ensures lossless quality that meets industry standards. Whether you are a freelancer, small business owner, or enterprise user, this converter handles your image conversion needs reliably and securely.',
  pl: 'Dla profesjonalnej fotografii i produkcji poligraficznej TIFF zapewnia bezstratną jakość spełniającą standardy branżowe. Niezależnie od tego, czy jesteś freelancerem, właścicielem małej firmy czy użytkownikiem korporacyjnym – ten konwerter niezawodnie obsłuży Twoje potrzeby.',
  de: 'Für professionelle Fotografie und Druckproduktion gewährleistet TIFF verlustfreie Qualität nach Industriestandard. Die lokale Verarbeitung gewährleistet dabei vollständige DSGVO-Konformität.',
  fr: "Pour la photographie professionnelle et la production d'impression, le TIFF garantit une qualité sans perte conforme aux standards de l'industrie. Le traitement local garantit la conformité RGPD.",
  cs: 'Pro profesionální fotografii a tiskovou produkci TIFF zajišťuje bezeztrátovou kvalitu splňující průmyslové standardy. Veškeré zpracování probíhá lokálně v prohlížeči, což zajišťuje plný soulad s GDPR.',
  da: 'Til professionel fotografi og trykproduktion sikrer TIFF tabsfri kvalitet efter branchestandarder. Lokal behandling sikrer fuld GDPR-overholdelse.',
  el: 'Για επαγγελματική φωτογραφία και παραγωγή εκτυπώσεων, το TIFF εξασφαλίζει ποιότητα χωρίς απώλειες που πληροί τα βιομηχανικά πρότυπα. Η τοπική επεξεργασία εξασφαλίζει πλήρη συμμόρφωση με τον GDPR.',
  es: 'Para fotografía profesional y producción de impresión, TIFF garantiza calidad sin pérdidas que cumple con los estándares de la industria. El procesamiento local garantiza plena conformidad con el RGPD.',
  fi: 'Ammattivalokuvaukseen ja painotuotantoon TIFF takaa häviöttömän laadun alan standardien mukaisesti. Paikallinen käsittely selaimessa takaa täyden GDPR-vaatimustenmukaisuuden.',
  hu: 'Professzionális fotózáshoz és nyomdai termeléshez a TIFF veszteségmentes minőséget biztosít az iparági szabványoknak megfelelően. A helyi feldolgozás teljes GDPR-megfelelőséget biztosít.',
  it: "Per la fotografia professionale e la produzione di stampa, il TIFF garantisce una qualità senza perdite conforme agli standard del settore. L'elaborazione locale garantisce piena conformità al GDPR.",
  nl: 'Voor professionele fotografie en drukproductie garandeert TIFF verliesvrije kwaliteit die voldoet aan de industrienormen. Lokale verwerking garandeert volledige AVG-conformiteit.',
  no: 'For profesjonell fotografering og trykkproduksjon sikrer TIFF tapsfri kvalitet etter bransjestandarder. Lokal behandling sikrer full GDPR-samsvar.',
  pt: 'Para fotografia profissional e produção gráfica, o TIFF garante qualidade sem perdas que atende aos padrões da indústria. O processamento local garante total conformidade com o RGPD.',
  ro: 'Pentru fotografia profesională și producția tipografică, TIFF asigură o calitate fără pierderi conformă standardelor industriale. Procesarea locală asigură conformitatea deplină cu GDPR.',
  sv: 'För professionell fotografi och tryckproduktion säkerställer TIFF förlustfri kvalitet enligt branschstandarder. Lokal behandling säkerställer full GDPR-efterlevnad.',
};

// --- GIF: replacement for paragraph 2 (LCP claim → animation/compatibility) ---
const GIF_P2 = {
  en: 'While GIF is not the most efficient format for static images, it remains essential for simple animations, memes, and graphics with limited color palettes. The 256-color limit makes GIF less suitable for photographs but ideal for icons, logos, and animated content shared on social media and messaging platforms.',
  pl: 'Chociaż GIF nie jest najwydajniejszym formatem dla statycznych obrazów, pozostaje niezbędny dla prostych animacji, memów i grafik z ograniczoną paletą kolorów. Limit 256 kolorów sprawia, że GIF jest mniej odpowiedni dla fotografii, ale idealny dla ikon, logotypów i animowanych treści udostępnianych w mediach społecznościowych i komunikatorach.',
  de: 'Obwohl GIF nicht das effizienteste Format für statische Bilder ist, bleibt es unverzichtbar für einfache Animationen, Memes und Grafiken mit begrenzter Farbpalette. Das Limit von 256 Farben macht GIF weniger geeignet für Fotos, aber ideal für Icons, Logos und animierte Inhalte in sozialen Medien und Messenger-Diensten.',
  fr: 'Bien que le GIF ne soit pas le format le plus efficace pour les images statiques, il reste incontournable pour les animations simples, les mèmes et les graphiques à palette de couleurs limitée. La limite de 256 couleurs rend le GIF moins adapté aux photographies, mais idéal pour les icônes, logos et contenus animés partagés sur les réseaux sociaux et les messageries.',
  cs: 'Ačkoli GIF není nejefektivnější formát pro statické obrázky, zůstává nezbytný pro jednoduché animace, memy a grafiku s omezenou paletou barev. Limit 256 barev dělá GIF méně vhodným pro fotografie, ale ideálním pro ikony, loga a animovaný obsah sdílený na sociálních sítích a v komunikátorech.',
  da: 'Selvom GIF ikke er det mest effektive format for statiske billeder, er det stadig uundværligt for simple animationer, memes og grafik med begrænset farvepalet. Grænsen på 256 farver gør GIF mindre egnet til fotografier, men ideel til ikoner, logoer og animeret indhold delt på sociale medier og beskedtjenester.',
  el: 'Αν και το GIF δεν είναι η πιο αποδοτική μορφή για στατικές εικόνες, παραμένει απαραίτητο για απλές κινούμενες εικόνες, memes και γραφικά με περιορισμένη χρωματική παλέτα. Το όριο των 256 χρωμάτων καθιστά το GIF λιγότερο κατάλληλο για φωτογραφίες, αλλά ιδανικό για εικονίδια, λογότυπα και κινούμενο περιεχόμενο σε κοινωνικά δίκτυα και εφαρμογές ανταλλαγής μηνυμάτων.',
  es: 'Aunque GIF no es el formato más eficiente para imágenes estáticas, sigue siendo esencial para animaciones simples, memes y gráficos con paleta de colores limitada. El límite de 256 colores hace que GIF sea menos adecuado para fotografías, pero ideal para iconos, logotipos y contenido animado compartido en redes sociales y aplicaciones de mensajería.',
  fi: 'Vaikka GIF ei ole tehokkain muoto staattisille kuville, se on edelleen välttämätön yksinkertaisille animaatioille, meemeille ja grafiikalle, jossa on rajoitettu väripaletti. 256 värin raja tekee GIF:stä vähemmän sopivan valokuville, mutta ihanteellisen kuvakkeille, logoille ja animoidulle sisällölle sosiaalisessa mediassa ja viestipalveluissa.',
  hu: 'Bár a GIF nem a leghatékonyabb formátum statikus képekhez, továbbra is nélkülözhetetlen egyszerű animációkhoz, mémekhez és korlátozott színpalettájú grafikákhoz. A 256 színes korlát miatt a GIF kevésbé alkalmas fényképekhez, de ideális ikonokhoz, logókhoz és animált tartalmakhoz közösségi médiában és üzenetküldő alkalmazásokban.',
  it: 'Sebbene il GIF non sia il formato più efficiente per le immagini statiche, resta indispensabile per animazioni semplici, meme e grafiche con palette di colori limitata. Il limite di 256 colori rende il GIF meno adatto alle fotografie, ma ideale per icone, loghi e contenuti animati condivisi sui social media e nelle app di messaggistica.',
  nl: "Hoewel GIF niet het meest efficiënte formaat is voor statische afbeeldingen, blijft het onmisbaar voor eenvoudige animaties, memes en afbeeldingen met een beperkt kleurenpalet. De limiet van 256 kleuren maakt GIF minder geschikt voor foto's, maar ideaal voor iconen, logo's en geanimeerde content op sociale media en berichtenapps.",
  no: 'Selv om GIF ikke er det mest effektive formatet for statiske bilder, er det fortsatt uunnværlig for enkle animasjoner, memes og grafikk med begrenset fargepalett. Grensen på 256 farger gjør GIF mindre egnet for fotografier, men ideelt for ikoner, logoer og animert innhold delt på sosiale medier og meldingsapper.',
  pt: 'Embora o GIF não seja o formato mais eficiente para imagens estáticas, permanece essencial para animações simples, memes e gráficos com paleta de cores limitada. O limite de 256 cores torna o GIF menos adequado para fotografias, mas ideal para ícones, logotipos e conteúdo animado partilhado nas redes sociais e aplicações de mensagens.',
  ro: 'Deși GIF nu este cel mai eficient format pentru imagini statice, rămâne esențial pentru animații simple, meme-uri și grafică cu paletă de culori limitată. Limita de 256 de culori face GIF-ul mai puțin potrivit pentru fotografii, dar ideal pentru pictograme, logouri și conținut animat distribuit pe rețelele sociale și aplicațiile de mesagerie.',
  sv: 'Även om GIF inte är det mest effektiva formatet för statiska bilder, är det fortfarande oumbärligt för enkla animationer, memes och grafik med begränsad färgpalett. Gränsen på 256 färger gör GIF mindre lämpligt för fotografier, men idealiskt för ikoner, logotyper och animerat innehåll på sociala medier och meddelandetjänster.',
};

function extractLocale(filePath) {
  const parts = filePath.split(path.sep);
  const dataIdx = parts.indexOf('data');
  return dataIdx >= 0 ? parts[dataIdx + 1] : null;
}

function isTargetTiff(filename) {
  return /converter-\w+-to-tiff\.json$/.test(filename);
}

function isTargetGif(filename) {
  return /converter-\w+-to-gif\.json$/.test(filename);
}

// Split HTML into <p> tags, preserving class attributes
function splitParagraphs(html) {
  const parts = [];
  const re = /<p\s[^>]*>.*?<\/p>/g;
  let match;
  while ((match = re.exec(html)) !== null) {
    parts.push(match[0]);
  }
  return parts;
}

function rebuildParagraphs(paragraphs) {
  return paragraphs.join('');
}

let stats = { tiffFixed: 0, gifFixed: 0, skipped: 0, errors: [] };

for (const locale of LOCALES) {
  const toolsDir = path.join(DATA_DIR, locale, 'tools');
  if (!fs.existsSync(toolsDir)) continue;

  const files = fs.readdirSync(toolsDir).filter((f) => f.startsWith('converter-') && f.endsWith('.json'));

  for (const file of files) {
    const isTiff = isTargetTiff(file);
    const isGif = isTargetGif(file);
    if (!isTiff && !isGif) continue;

    const filePath = path.join(toolsDir, file);
    try {
      const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
      let changed = false;

      for (const block of data.contentBlocks) {
        if (block.type !== 'sectionInfo' || !block.html) continue;
        if (!block.html.includes('Largest Contentful Paint') && !block.html.includes('LCP')) continue;

        const paragraphs = splitParagraphs(block.html);
        if (paragraphs.length < 2) {
          stats.errors.push(`${locale}/${file}: only ${paragraphs.length} paragraphs found`);
          continue;
        }

        // Replace paragraph 2 (index 1) — the LCP claim
        if (isTiff && TIFF_P2[locale]) {
          paragraphs[1] = `<p class="text-mid mb-4">${TIFF_P2[locale]}</p>`;
          changed = true;
        } else if (isGif && GIF_P2[locale]) {
          paragraphs[1] = `<p class="text-mid mb-4">${GIF_P2[locale]}</p>`;
          changed = true;
        }

        // For TIFF: also replace paragraph 3 (index 2) — the compression claim
        if (isTiff && paragraphs.length >= 3 && TIFF_P3[locale]) {
          paragraphs[2] = `<p class="text-mid">${TIFF_P3[locale]}</p>`;
          changed = true;
        }

        block.html = rebuildParagraphs(paragraphs);
      }

      if (changed) {
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n', 'utf-8');
        if (isTiff) stats.tiffFixed++;
        else stats.gifFixed++;
      } else {
        stats.skipped++;
      }
    } catch (err) {
      stats.errors.push(`${locale}/${file}: ${err.message}`);
    }
  }
}

console.log(`TIFF fixed: ${stats.tiffFixed}`);
console.log(`GIF fixed: ${stats.gifFixed}`);
console.log(`Skipped: ${stats.skipped}`);
if (stats.errors.length) {
  console.log(`\nErrors:`);
  stats.errors.forEach((e) => console.log(`  - ${e}`));
}
