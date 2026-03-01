/**
 * Fix missing diacritics in converter JSON files AND _gen-converter-json.cjs uiStrings.
 * Applies word-level replacements per locale to all text fields.
 *
 * Usage: node scripts/_fix-diacritics.cjs [--dry-run]
 */
const fs = require('fs');
const path = require('path');

const DRY = process.argv.includes('--dry-run');
const DATA = path.join(__dirname, '..', 'data');

// -----------------------------------------------------------------------
// Per-locale word/phrase replacements: ASCII → correct diacritics
// Order matters: longer phrases first to avoid partial replacements
// -----------------------------------------------------------------------
const REPLACEMENTS = {
  ro: [
    // Phrases (longer first)
    ['Converteste fisiere', 'Convertește fișiere'],
    ['Converteste fotografii', 'Convertește fotografii'],
    ['Converteste imagini', 'Convertește imagini'],
    ['Converteste grafice', 'Convertește grafice'],
    ['Convertor BMP in', 'Convertor BMP în'],
    ['Convertor JPG in', 'Convertor JPG în'],
    ['Convertor PNG in', 'Convertor PNG în'],
    ['Convertor WebP in', 'Convertor WebP în'],
    ['Convertor SVG in', 'Convertor SVG în'],
    ['Convertor GIF in', 'Convertor GIF în'],
    ['Convertor HEIC in', 'Convertor HEIC în'],
    ['Convertor TIFF in', 'Convertor TIFF în'],
    ['Convertor AVIF in', 'Convertor AVIF în'],
    ['Cum sa convertesti', 'Cum să convertiți'],
    ['Cum functioneaza convertorul', 'Cum funcționează convertorul'],
    ['Conversia se face integral in browser', 'Conversia se face integral în browser'],
    ['fisierele nu sunt trimise niciodata pe un server', 'fișierele nu sunt trimise niciodată pe un server'],
    ['Fara inregistrare, fara limita', 'Fără înregistrare, fără limită'],
    ['Fisierele nu parasesc niciodata computerul', 'Fișierele nu părăsesc niciodată computerul'],
    ['Conversia in GIF reduce calitatea', 'Conversia în GIF reduce calitatea'],
    ['Functioneaza AVIF in toate browserele', 'Funcționează AVIF în toate browserele'],
    ['Sunt fisierele mele trimise pe un server', 'Sunt fișierele mele trimise pe un server'],
    ['Sunt fisierele TIFF mai mari decat JPG', 'Sunt fișierele TIFF mai mari decât JPG'],
    ['Fisierele TIFF sunt de obicei mult mai mari deoarece folosesc compresie fara pierderi', 'Fișierele TIFF sunt de obicei mult mai mari deoarece folosesc compresie fără pierderi'],
    ['fisierele pot fi cu pana la', 'fișierele pot fi cu până la'],
    ['Ofera compresie excelenta', 'Oferă compresie excelentă'],
    ['Conversie in lot', 'Conversie în lot'],
    ['Procesare locala in browser', 'Procesare locală în browser'],
    ['Incarca fisiere', 'Încărcați fișiere'],
    ['Trage fisierele pe pagina', 'Trageți fișierele pe pagină'],
    ['da clic pentru a le selecta', 'faceți clic pentru a le selecta'],
    ['Seteaza calitatea', 'Setați calitatea'],
    ['Ajusteaza cursorul de calitate', 'Ajustați cursorul de calitate'],
    ['valori mai mici produc fisiere mai mici', 'valori mai mici produc fișiere mai mici'],
    ['Da clic pe Converteste', 'Faceți clic pe Convertiți'],
    ['fisierele sunt procesate local in browser', 'fișierele sunt procesate local în browser'],
    ['Descarca fisierele', 'Descărcați fișierele'],
    ['individual sau toate deodata', 'individual sau toate deodată'],
    ['Intrebari frecvente', 'Întrebări frecvente'],
    ['Ai nevoie de mai mult', 'Aveți nevoie de mai mult'],
    ['Contacteaza-ne', 'Contactați-ne'],
    ['te vom ajuta sa gasesti solutia potrivita', 'vă vom ajuta să găsiți soluția potrivită'],
    ['Scrie-ne', 'Scriați-ne'],
    ['Alte instrumente', 'Alte instrumente'],
    // Single words / short patterns (after phrases)
    ['necomprimate in AVIF', 'necomprimate în AVIF'],
    ['necomprimate in ', 'necomprimate în '],
    ['suporta pana la', 'suportă până la'],
    ['larg suportat', 'larg suportat'],
    ['grafice simple si pictograme', 'grafice simple și pictograme'],
    ['Fotografiile pot pierde detalii', 'Fotografiile pot pierde detalii'],
    ['foloseste o paleta limitata', 'folosește o paletă limitată'],
    ['fara pierderi folosit in tiparire', 'fără pierderi folosit în tipărire'],
    ['publicare si arhivare', 'publicare și arhivare'],
    ['format de imagine profesional fara pierderi', 'format de imagine profesional fără pierderi'],
    ['format modern de imagine bazat pe codecul AV1', 'format modern de imagine bazat pe codecul AV1'],
    ['AVIF este suportat de Chrome, Edge si Firefox', 'AVIF este suportat de Chrome, Edge și Firefox'],
    ['Safari are suport limitat pentru AVIF', 'Safari are suport limitat pentru AVIF'],
    ['compatibilitàte totală', 'compatibilitate totală'],
    ['Fisier mai mic', 'Fișier mai mic'],
    ['Conversie in ', 'Conversie în '],
    [' in AVIF', ' în AVIF'],
    [' in TIFF', ' în TIFF'],
    [' in GIF', ' în GIF'],
    [' in JPG', ' în JPG'],
    [' in PNG', ' în PNG'],
    [' in WebP', ' în WebP'],
    [' in format', ' în format'],
    [' in browser', ' în browser'],
    [' in tiparire', ' în tipărire'],
    ['fisiere ', 'fișiere '],
    ['fisierele ', 'fișierele '],
    ['Fisierele ', 'Fișierele '],
  ],
  cs: [
    // Phrases
    ['Prevedte fotky', 'Převeďte fotky'],
    ['Prevedte soubory', 'Převeďte soubory'],
    ['Prevedte nekomprimovane soubory', 'Převeďte nekomprimované soubory'],
    ['Prevedte obrazky', 'Převeďte obrázky'],
    ['Jak prevest', 'Jak převést'],
    ['Jak funguje prevodnik', 'Jak funguje převodník'],
    ['Konverze probiha cele v prohlizeci', 'Konverze probíhá celá v prohlížeči'],
    ['soubory se nikdy neodesilaji na server', 'soubory se nikdy neodesílají na server'],
    ['Bez registrace, bez limitu souboru', 'Bez registrace, bez limitu souborů'],
    ['Soubory nikdy neopusti pocitac', 'Soubory nikdy neopustí počítač'],
    ['Konverze do ', 'Konverze do '],
    ['Nastaveni kvality', 'Nastavení kvality'],
    ['Davkova konverze', 'Dávková konverze'],
    ['Lokalni zpracovani v prohlizeci', 'Lokální zpracování v prohlížeči'],
    ['Pretahnete soubory na stranku nebo kliknete pro vyber z disku', 'Přetáhněte soubory na stránku nebo klikněte pro výběr z disku'],
    ['Upravte posuvnik kvality', 'Upravte posuvník kvality'],
    ['nizsi hodnoty vytvareji mensi soubory', 'nižší hodnoty vytvářejí menší soubory'],
    ['Kliknete na Konvertovat', 'Klikněte na Konvertovat'],
    ['soubory se zpracuji lokalne v prohlizeci', 'soubory se zpracují lokálně v prohlížeči'],
    ['Stahnete hotove soubory', 'Stáhněte hotové soubory'],
    ['jednotlive nebo vsechny naraz', 'jednotlivě nebo všechny naraz'],
    ['Nejcastejsi dotazy', 'Nejčastější dotazy'],
    ['Potrebujete vic', 'Potřebujete víc'],
    ['Kontaktujte nas', 'Kontaktujte nás'],
    ['pomuzeme vam najit spravne reseni', 'pomůžeme vám najít správné řešení'],
    ['Napiste nam', 'Napište nám'],
    ['Dalsi nastroje', 'Další nástroje'],
    ['profesionalni format TIFF', 'profesionální formát TIFF'],
    ['profesionalni bezztratovy obrazovy format', 'profesionální bezztrátový obrazový formát'],
    ['pouzivany v tisku, vydavatelstvi a archivaci', 'používaný v tisku, vydavatelství a archivaci'],
    ['Jsou soubory TIFF vetsi nez JPG', 'Jsou soubory TIFF větší než JPG'],
    ['Soubory TIFF jsou obvykle mnohem vetsi, protoze pouzivaji bezztratovou kompresi', 'Soubory TIFF jsou obvykle mnohem větší, protože používají bezztrátovou kompresi'],
    ['moderni obrazovy format zalozeny na kodeku AV1', 'moderní obrazový formát založený na kodeku AV1'],
    ['Nabizi vynikajici kompresi', 'Nabízí vynikající kompresi'],
    ['soubory mohou byt az o 50% mensi nez JPG', 'soubory mohou být až o 50% menší než JPG'],
    ['Funguje AVIF ve vsech prohlizecich', 'Funguje AVIF ve všech prohlížečích'],
    ['AVIF je podporovan Chrome, Edge a Firefoxem', 'AVIF je podporován Chrome, Edge a Firefoxem'],
    ['Safari ma omezenou podporu AVIF', 'Safari má omezenou podporu AVIF'],
    ['Jsou moje soubory odeslany na server', 'Jsou moje soubory odeslány na server'],
    ['siroce podporovany obrazovy format', 'široce podporovaný obrazový formát'],
    ['ktery podporuje az 256 barev', 'který podporuje až 256 barev'],
    ['Idealni pro jednoduchou grafiku a ikony', 'Ideální pro jednoduchou grafiku a ikony'],
    ['Snizuje konverze do GIF kvalitu', 'Snižuje konverze do GIF kvalitu'],
    ['GIF pouziva omezenou paletu 256 barev', 'GIF používá omezenou paletu 256 barev'],
    ['Fotografie mohou ztratit detaily', 'Fotografie mohou ztratit detaily'],
    ['na univerzalni JPG', 'na univerzální JPG'],
    ['Kompatibilni s kazdym programem', 'Kompatibilní s každým programem'],
    ['ultrakompaktni AVIF', 'ultrakompaktní AVIF'],
    ['profesionalni TIFF', 'profesionální TIFF'],
    ['na profesionalni', 'na profesionální'],
  ],
  hu: [
    ['Konvertalas ', 'Konvertálás '],
    ['konvertalasa', 'konvertálása'],
    ['Minoseg beallitasa', 'Minőség beállítása'],
    ['Kotegelt konvertalas', 'Kötegelt konvertálás'],
    ['Helyi feldolgozas a bongeszoben', 'Helyi feldolgozás a böngészőben'],
    ['Fajlok feltoltese', 'Fájlok feltöltése'],
    ['Huzd a fajlokat az oldalra vagy kattints a kivalasztasukhoz', 'Húzd a fájlokat az oldalra vagy kattints a kiválasztásukhoz'],
    ['Allitsd be a', 'Állítsd be a'],
    ['minoseg csuszkajat', 'minőség csúszkáját'],
    ['alacsonyabb ertekek kisebb fajlokat eredmenyeznek', 'alacsonyabb értékek kisebb fájlokat eredményeznek'],
    ['Kattints a Konvertalas gombra', 'Kattints a Konvertálás gombra'],
    ['a fajlok helyben, a bongeszoben kerulnek feldolgozasra', 'a fájlok helyben, a böngészőben kerülnek feldolgozásra'],
    ['Toltsd le a', 'Töltsd le a'],
    ['fajlokat', 'fájlokat'],
    ['egyenkent vagy mindet egyszerre', 'egyenként vagy mindet egyszerre'],
    ['Hogyan mukodik', 'Hogyan működik'],
    ['Hogyan konvertalhato', 'Hogyan konvertálható'],
    ['konvertalas teljes egeszeben a bongeszoben tortenik', 'konvertálás teljes egészében a böngészőben történik'],
    ['a fajlok soha nem kerulnek szerverre', 'a fájlok soha nem kerülnek szerverre'],
    ['Regisztracio nelkul, fajl limit nelkul', 'Regisztráció nélkül, fájl limit nélkül'],
    ['Gyakran ismetelt kerdesek', 'Gyakran ismételt kérdések'],
    ['Tobbre van szukseged', 'Többre van szükséged'],
    ['Lepj kapcsolatba velunk', 'Lépj kapcsolatba velünk'],
    ['segitunk megtalalni a megfelelo megoldast', 'segítünk megtalálni a megfelelő megoldást'],
    ['Irj nekunk', 'Írj nekünk'],
    ['Mas eszkozok', 'Más eszközök'],
    ['Tomoritetlen BMP fajlok konvertálása ultrakompakt', 'Tömörítetlen BMP fájlok konvertálása ultrakompakt'],
    ['Tomoritetlen BMP', 'Tömörítetlen BMP'],
    ['Mi az AVIF formatum', 'Mi az AVIF formátum'],
    ['Az AVIF egy modern kepformatum az AV1 kodek alapjan', 'Az AVIF egy modern képformátum az AV1 kodek alapján'],
    ['Kivaloan tomorit', 'Kiválóan tömörít'],
    ['a fajlok akar 50%-kal kisebbek lehetnek mint JPG', 'a fájlok akár 50%-kal kisebbek lehetnek mint JPG'],
    ['Mukodik az AVIF minden bongeszoben', 'Működik az AVIF minden böngészőben'],
    ['Az AVIF-et a Chrome, Edge es Firefox tamogatja', 'Az AVIF-et a Chrome, Edge és Firefox támogatja'],
    ['A Safari korlatozott AVIF tamogatassal rendelkezik', 'A Safari korlátozott AVIF támogatással rendelkezik'],
    ['A fajljaim elkuldésre kerulnek egy szerverre', 'A fájljaim elküldésre kerülnek egy szerverre'],
    ['A fajlok soha nem hagyjak el a szamitogepet', 'A fájlok soha nem hagyják el a számítógépet'],
    ['Mi a GIF formatum', 'Mi a GIF formátum'],
    ['szeles korben tamogatott kepformatum', 'széles körben támogatott képformátum'],
    ['amely legfeljebb 256 szint tamogat', 'amely legfeljebb 256 színt támogat'],
    ['Idealis egyszeru grafikakhoz es ikonokhoz', 'Ideális egyszerű grafikákhoz és ikonokhoz'],
    ['A GIF konvertalas rontja a minosegét', 'A GIF konvertálás rontja a minőségét'],
    ['A GIF korlatozott 256 szinu palettat hasznal', 'A GIF korlátozott 256 színű palettát használ'],
    ['A fenykepek elveszithetnek reszleteket', 'A fényképek elveszíthetnek részleteket'],
    ['Mi a TIFF formatum', 'Mi a TIFF formátum'],
    ['professzionalis veszteségmentes kepformatum', 'professzionális veszteségmentes képformátum'],
    ['amelyet nyomtatasban, kiadas es archivalasban hasznalnak', 'amelyet nyomtatásban, kiadás és archiválásban használnak'],
    ['A TIFF fajlok nagyobbak mint a JPG', 'A TIFF fájlok nagyobbak mint a JPG'],
    ['A TIFF fajlok altalaban sokkal nagyobbak, mert veszteségmentes tomorittest hasznalnak', 'A TIFF fájlok általában sokkal nagyobbak, mert veszteségmentes tömörítést használnak'],
    ['univerzalis JPG', 'univerzális JPG'],
    ['fajlok konvertalasa', 'fájlok konvertálása'],
    ['Kompatibilis minden', 'Kompatibilis minden'],
  ],
  de: [
    ['Qualitatsanpassung', 'Qualitätsanpassung'],
    ['Qualitatsregler', 'Qualitätsregler'],
    ['Qualitat einstellen', 'Qualität einstellen'],
    ['Stapelkonvertierung', 'Stapelkonvertierung'],
    ['Dateien auf die Seite ziehen oder klicken, um sie auszuwahlen', 'Dateien auf die Seite ziehen oder klicken, um sie auszuwählen'],
    ['niedrigere Werte ergeben kleinere Dateien', 'niedrigere Werte ergeben kleinere Dateien'],
    ['vollstandig im Browser', 'vollständig im Browser'],
    ['Haufig gestellte Fragen', 'Häufig gestellte Fragen'],
    ['die richtige Losung zu finden', 'die richtige Lösung zu finden'],
    ['Dateien konnen bis zu 50% kleiner', 'Dateien können bis zu 50% kleiner'],
    ['bei vergleichbarer Qualitat', 'bei vergleichbarer Qualität'],
    ['eingeschrankte AVIF-Unterstutzung', 'eingeschränkte AVIF-Unterstützung'],
    ['Dateien verlassen nie Ihren Computer', 'Dateien verlassen nie Ihren Computer'],
    ['Ideal fur einfache Grafiken', 'Ideal für einfache Grafiken'],
    ['Fotos konnen Details verlieren', 'Fotos können Details verlieren'],
    ['Am besten fur Grafiken', 'Am besten für Grafiken'],
    ['fur Druck, Verlagswesen und Archivierung', 'für Druck, Verlagswesen und Archivierung'],
    ['Sind TIFF-Dateien grosser als JPG', 'Sind TIFF-Dateien größer als JPG'],
    ['viel grosser, da sie verlustfreie Kompression verwenden', 'viel größer, da sie verlustfreie Kompression verwenden'],
    ['nicht kompresses', 'non compressés'],
  ],
  fr: [
    ['Reglage de la qualite', 'Réglage de la qualité'],
    ['Telecharger les fichiers', 'Télécharger les fichiers'],
    ['Glissez les fichiers sur la page ou cliquez pour les selectionner', 'Glissez les fichiers sur la page ou cliquez pour les sélectionner'],
    ['Regler la qualite', 'Régler la qualité'],
    ['des valeurs plus basses donnent des fichiers plus petits', 'des valeurs plus basses donnent des fichiers plus petits'],
    ['entierement dans votre navigateur', 'entièrement dans votre navigateur'],
    ['les fichiers ne sont jamais envoyes a un serveur', 'les fichiers ne sont jamais envoyés à un serveur'],
    ['Questions frequemment posees', 'Questions fréquemment posées'],
    ['nous vous aiderons a trouver la bonne solution', 'nous vous aiderons à trouver la bonne solution'],
    ['Ecrivez-nous', 'Écrivez-nous'],
    ['base sur le codec AV1', 'basé sur le codec AV1'],
    ['les fichiers peuvent etre jusqu', 'les fichiers peuvent être jusqu'],
    ['plus petits que JPG', 'plus petits que JPG'],
    ['Les fichiers ne quittent jamais votre ordinateur', 'Les fichiers ne quittent jamais votre ordinateur'],
    ['largement supporte', 'largement supporté'],
    ['utilise une palette limitee', 'utilise une palette limitée'],
    ['peuvent perdre des details', 'peuvent perdre des détails'],
    ['sans perte utilise pour l', 'sans perte utilisé pour l'],
    ['generalement beaucoup plus volumineux', 'généralement beaucoup plus volumineux'],
    ['non compresses en AVIF', 'non compressés en AVIF'],
    ['Convertissez les fichiers BMP non compresses', 'Convertissez les fichiers BMP non compressés'],
  ],
  es: [
    ['Conversion a ', 'Conversión a '],
    ['Conversion por lotes', 'Conversión por lotes'],
    ['Ajuste de calidad', 'Ajuste de calidad'],
    ['Arrastra archivos a la pagina o haz clic para seleccionarlos', 'Arrastra archivos a la página o haz clic para seleccionarlos'],
    ['valores mas bajos producen archivos mas pequenos', 'valores más bajos producen archivos más pequeños'],
    ['Como funciona el convertidor', 'Cómo funciona el convertidor'],
    ['Como convertir', 'Cómo convertir'],
    ['los archivos nunca se envian a un servidor', 'los archivos nunca se envían a un servidor'],
    ['Preguntas frecuentes', 'Preguntas frecuentes'],
    ['Necesitas mas', 'Necesitas más'],
    ['Contactanos', 'Contáctanos'],
    ['te ayudaremos a encontrar la solucion adecuada', 'te ayudaremos a encontrar la solución adecuada'],
    ['Escribenos', 'Escríbenos'],
    ['Que es el formato AVIF', 'Qué es el formato AVIF'],
    ['Ofrece excelente compresion', 'Ofrece excelente compresión'],
    ['los archivos pueden ser hasta un 50% mas pequenos', 'los archivos pueden ser hasta un 50% más pequeños'],
    ['Se envian mis archivos', 'Se envían mis archivos'],
    ['Los archivos nunca salen de tu computadora', 'Los archivos nunca salen de tu computadora'],
    ['Que es el formato GIF', 'Qué es el formato GIF'],
    ['Que es el formato TIFF', 'Qué es el formato TIFF'],
    ['sin perdida utilizado en impresion, publicacion y archivado', 'sin pérdida utilizado en impresión, publicación y archivado'],
    ['Son los archivos TIFF mas grandes que JPG', 'Son los archivos TIFF más grandes que JPG'],
    ['tipicamente mucho mas grandes porque usan compresion sin perdida', 'típicamente mucho más grandes porque usan compresión sin pérdida'],
    ['Convertir a GIF reduce la calidad', 'Convertir a GIF reduce la calidad'],
  ],
  pt: [
    ['Conversao para ', 'Conversão para '],
    ['Conversao em lote', 'Conversão em lote'],
    ['Carregar ficheiros', 'Carregar ficheiros'],
    ['Arraste ficheiros para a pagina ou clique para selecionar', 'Arraste ficheiros para a página ou clique para selecionar'],
    ['Definir qualidade', 'Definir qualidade'],
    ['valores mais baixos produzem ficheiros mais pequenos', 'valores mais baixos produzem ficheiros mais pequenos'],
    ['os ficheiros sao processados localmente', 'os ficheiros são processados localmente'],
    ['Descarregue os ficheiros', 'Descarregue os ficheiros'],
    ['A conversao e feita inteiramente', 'A conversão é feita inteiramente'],
    ['os ficheiros nunca sao enviados para um servidor', 'os ficheiros nunca são enviados para um servidor'],
    ['Perguntas frequentes', 'Perguntas frequentes'],
    ['Precisa de mais', 'Precisa de mais'],
    ['Contacte-nos', 'Contacte-nos'],
    ['ajudamos a encontrar a solucao adequada', 'ajudamos a encontrar a solução adequada'],
    ['Escreva-nos', 'Escreva-nos'],
    ['O que e o formato AVIF', 'O que é o formato AVIF'],
    ['AVIF e um formato', 'AVIF é um formato'],
    ['Oferece excelente compressao', 'Oferece excelente compressão'],
    ['os ficheiros podem ser ate 50% menores', 'os ficheiros podem ser até 50% menores'],
    ['O AVIF funciona em todos os navegadores', 'O AVIF funciona em todos os navegadores'],
    ['AVIF e suportado pelo', 'AVIF é suportado pelo'],
    ['Os meus ficheiros sao enviados para um servidor', 'Os meus ficheiros são enviados para um servidor'],
    ['A conversao e feita inteiramente no seu navegador', 'A conversão é feita inteiramente no seu navegador'],
    ['Os ficheiros nunca saem do seu computador', 'Os ficheiros nunca saem do seu computador'],
    ['O que e o formato GIF', 'O que é o formato GIF'],
    ['GIF e um formato de imagem amplamente suportado', 'GIF é um formato de imagem amplamente suportado'],
    ['O que e o formato TIFF', 'O que é o formato TIFF'],
    ['TIFF e um formato', 'TIFF é um formato'],
    ['Os ficheiros TIFF sao maiores que JPG', 'Os ficheiros TIFF são maiores que JPG'],
    ['Os ficheiros TIFF sao tipicamente', 'Os ficheiros TIFF são tipicamente'],
    ['Nao comprimidos', 'Não comprimidos'],
    ['ficheiros BMP não comprimidos', 'ficheiros BMP não comprimidos'],
    ['Converta ficheiros BMP nao comprimidos', 'Converta ficheiros BMP não comprimidos'],
  ],
  it: [
    ['Regolazione qualita', 'Regolazione qualità'],
    ['Imposta qualita', 'Imposta qualità'],
    ['valori piu bassi producono file piu piccoli', 'valori più bassi producono file più piccoli'],
    ['AVIF e un formato immagine moderno', 'AVIF è un formato immagine moderno'],
    ["un'eccellente compressione", "un'eccellente compressione"],
    ['i file possono essere fino al 50% piu piccoli', 'i file possono essere fino al 50% più piccoli'],
    ['AVIF e supportato da Chrome', 'AVIF è supportato da Chrome'],
    ['GIF e un formato immagine ampiamente supportato', 'GIF è un formato immagine ampiamente supportato'],
    ['La conversione in GIF riduce la qualita', 'La conversione in GIF riduce la qualità'],
    ['Le fotografie possono perdere dettagli', 'Le fotografie possono perdere dettagli'],
    ['TIFF e un formato immagine professionale', 'TIFF è un formato immagine professionale'],
    ['I file TIFF sono piu grandi di JPG', 'I file TIFF sono più grandi di JPG'],
    ['I file TIFF sono tipicamente molto piu grandi', 'I file TIFF sono tipicamente molto più grandi'],
    ['perche utilizzano compressione lossless', 'perché utilizzano compressione lossless'],
  ],
  sv: [
    ['Kvalitetsjustering', 'Kvalitetsjustering'],
    ['Lokal bearbetning i webblasaren', 'Lokal bearbetning i webbläsaren'],
    ['klicka for att valja fran disk', 'klicka för att välja från disk'],
    ['Stall in kvalitet', 'Ställ in kvalitet'],
    ['lagre varden ger mindre filer', 'lägre värden ger mindre filer'],
    ['Klicka pa Konvertera', 'Klicka på Konvertera'],
    ['filerna bearbetas lokalt i webblasaren', 'filerna bearbetas lokalt i webbläsaren'],
    ['enskilt eller alla pa en gang', 'enskilt eller alla på en gång'],
    ['Hur fungerar', 'Hur fungerar'],
    ['Konverteringen sker helt i webblasaren', 'Konverteringen sker helt i webbläsaren'],
    ['filer skickas aldrig till en server', 'filer skickas aldrig till en server'],
    ['Utan registrering, utan begransning', 'Utan registrering, utan begränsning'],
    ['Vanliga fragor', 'Vanliga frågor'],
    ['Behover du mer', 'Behöver du mer'],
    ['vi hjalper dig hitta ratt losning', 'vi hjälper dig hitta rätt lösning'],
    ['Andra verktyg', 'Andra verktyg'],
    ['Vad ar AVIF-format', 'Vad är AVIF-format'],
    ['AVIF ar ett modernt bildformat baserat pa AV1-codec', 'AVIF är ett modernt bildformat baserat på AV1-codec'],
    ['Det erbjuder utmarkt komprimering', 'Det erbjuder utmärkt komprimering'],
    ['filer kan vara upp till 50% mindre an JPG', 'filer kan vara upp till 50% mindre än JPG'],
    ['Fungerar AVIF i alla webblasare', 'Fungerar AVIF i alla webbläsare'],
    ['Safari har begransat AVIF-stod', 'Safari har begränsat AVIF-stöd'],
    ['Skickas mina filer till en server', 'Skickas mina filer till en server'],
    ['Filer lamnar aldrig din dator', 'Filer lämnar aldrig din dator'],
    ['Vad ar GIF-format', 'Vad är GIF-format'],
    ['GIF ar ett brett stott bildformat som stodjer upp till 256 farger', 'GIF är ett brett stött bildformat som stödjer upp till 256 färger'],
    ['Idealiskt for enkel grafik', 'Idealiskt för enkel grafik'],
    ['Minskar GIF-konvertering kvaliteten', 'Minskar GIF-konvertering kvaliteten'],
    ['GIF anvander en begransad 256-fargspalett', 'GIF använder en begränsad 256-färgspalett'],
    ['Fotografier kan forlora detaljer', 'Fotografier kan förlora detaljer'],
    ['Vad ar TIFF-format', 'Vad är TIFF-format'],
    ['TIFF ar ett professionellt forlustfritt bildformat', 'TIFF är ett professionellt förlustfritt bildformat'],
    ['som anvands for utskrift, publicering och arkivering', 'som används för utskrift, publicering och arkivering'],
    ['Ar TIFF-filer storre an JPG', 'Är TIFF-filer större än JPG'],
    ['TIFF-filer ar vanligtvis mycket storre', 'TIFF-filer är vanligtvis mycket större'],
    ['eftersom de anvander forlustfri komprimering', 'eftersom de använder förlustfri komprimering'],
  ],
  da: [
    ['Lokal behandling i browseren', 'Lokal behandling i browseren'],
    ['Traek filer til siden eller klik for at vaelge fra disken', 'Træk filer til siden eller klik for at vælge fra disken'],
    ['Indstil kvalitet', 'Indstil kvalitet'],
    ['lavere vaerdier giver mindre filer', 'lavere værdier giver mindre filer'],
    ['Klik pa Konverter', 'Klik på Konverter'],
    ['filerne behandles lokalt i browseren', 'filerne behandles lokalt i browseren'],
    ['enkeltvis eller alle pa en gang', 'enkeltvis eller alle på en gang'],
    ['Konverteringen foregaar helt i browseren', 'Konverteringen foregår helt i browseren'],
    ['filer sendes aldrig til en server', 'filer sendes aldrig til en server'],
    ['Uden registrering, uden begraensning', 'Uden registrering, uden begrænsning'],
    ['Ofte stillede sporgsmal', 'Ofte stillede spørgsmål'],
    ['Har du brug for mere', 'Har du brug for mere'],
    ['vi hjaelper dig med at finde den rigtige losning', 'vi hjælper dig med at finde den rigtige løsning'],
    ['Andre vaerktojer', 'Andre værktøjer'],
    ['Hvad er AVIF-format', 'Hvad er AVIF-format'],
    ['AVIF er et moderne billedformat baseret pa AV1-codec', 'AVIF er et moderne billedformat baseret på AV1-codec'],
    ['Det tilbyder fremragende komprimering', 'Det tilbyder fremragende komprimering'],
    ['filer kan vaere op til 50% mindre end JPG', 'filer kan være op til 50% mindre end JPG'],
    ['TIFF er et professionelt tabsfrit billedformat, der bruges til udskrivning', 'TIFF er et professionelt tabsfrit billedformat, der bruges til udskrivning'],
    ['Er TIFF-filer storre end JPG', 'Er TIFF-filer større end JPG'],
    ['TIFF-filer er typisk meget storre fordi de bruger tabsfri komprimering', 'TIFF-filer er typisk meget større fordi de bruger tabsfri komprimering'],
    ['GIF er et bredt understoettet billedformat', 'GIF er et bredt understøttet billedformat'],
    ['der understoetter op til 256 farver', 'der understøtter op til 256 farver'],
    ['Reducerer GIF-konvertering kvaliteten', 'Reducerer GIF-konvertering kvaliteten'],
    ['GIF bruger en begraenset 256-farve palette', 'GIF bruger en begrænset 256-farve palette'],
    ['Fotografier kan miste detaljer', 'Fotografier kan miste detaljer'],
  ],
  no: [
    ['Lokal behandling i nettleseren', 'Lokal behandling i nettleseren'],
    ['Dra filer til siden eller klikk for a velge fra disk', 'Dra filer til siden eller klikk for å velge fra disk'],
    ['Still inn kvalitet', 'Still inn kvalitet'],
    ['lavere verdier gir mindre filer', 'lavere verdier gir mindre filer'],
    ['Klikk pa Konverter', 'Klikk på Konverter'],
    ['filene behandles lokalt i nettleseren', 'filene behandles lokalt i nettleseren'],
    ['enkeltvis eller alle pa en gang', 'enkeltvis eller alle på en gang'],
    ['Konverteringen skjer helt i nettleseren', 'Konverteringen skjer helt i nettleseren'],
    ['filer sendes aldri til en server', 'filer sendes aldri til en server'],
    ['Uten registrering, uten begrensning', 'Uten registrering, uten begrensning'],
    ['Ofte stilte sporsmal', 'Ofte stilte spørsmål'],
    ['Trenger du mer', 'Trenger du mer'],
    ['vi hjelper deg a finne den riktige losningen', 'vi hjelper deg å finne den riktige løsningen'],
    ['Andre verktoy', 'Andre verktøy'],
    ['Hva er AVIF-format', 'Hva er AVIF-format'],
    ['AVIF er et moderne bildeformat basert pa AV1-codec', 'AVIF er et moderne bildeformat basert på AV1-codec'],
    ['Det tilbyr utmerket komprimering', 'Det tilbyr utmerket komprimering'],
    ['filer kan vaere opptil 50% mindre enn JPG', 'filer kan være opptil 50% mindre enn JPG'],
    ['Fungerer AVIF i alle nettlesere', 'Fungerer AVIF i alle nettlesere'],
    ['AVIF stottes av Chrome, Edge og Firefox', 'AVIF støttes av Chrome, Edge og Firefox'],
    ['Safari har begrenset AVIF-stotte', 'Safari har begrenset AVIF-støtte'],
    ['Sendes filene mine til en server', 'Sendes filene mine til en server'],
    ['Filer forlater aldri datamaskinen din', 'Filer forlater aldri datamaskinen din'],
    ['Hva er GIF-format', 'Hva er GIF-format'],
    ['GIF er et bredt stottet bildeformat som stotter opptil 256 farger', 'GIF er et bredt støttet bildeformat som støtter opptil 256 farger'],
    ['Ideelt for enkel grafikk', 'Ideelt for enkel grafikk'],
    ['Reduserer GIF-konvertering kvaliteten', 'Reduserer GIF-konvertering kvaliteten'],
    ['GIF bruker en begrenset 256-fargepalett', 'GIF bruker en begrenset 256-fargepalett'],
    ['Fotografier kan miste detaljer', 'Fotografier kan miste detaljer'],
    ['Hva er TIFF-format', 'Hva er TIFF-format'],
    ['TIFF er et profesjonelt tapsfritt bildeformat', 'TIFF er et profesjonelt tapsfritt bildeformat'],
    ['Er TIFF-filer storre enn JPG', 'Er TIFF-filer større enn JPG'],
    ['TIFF-filer er vanligvis mye storre fordi de bruker tapsfri komprimering', 'TIFF-filer er vanligvis mye større fordi de bruker tapsfri komprimering'],
  ],
  fi: [
    ['Laadun saato', 'Laadun säätö'],
    ['Eramuunnos', 'Erämuunnos'],
    ['Paikallinen kasittely selaimessa', 'Paikallinen käsittely selaimessa'],
    ['Vedä tiedostot sivulle tai napsauta valitaksesi levylta', 'Vedä tiedostot sivulle tai napsauta valitaksesi levyltä'],
    ['Aseta laatu', 'Aseta laatu'],
    ['Saada', 'Säädä'],
    ['laatuliukusaadinta', 'laatuliukusäädintä'],
    ['alhaisemmat arvot tuottavat pienempia tiedostoja', 'alhaisemmat arvot tuottavat pienempiä tiedostoja'],
    ['tiedostot kasitellaan paikallisesti selaimessa', 'tiedostot käsitellään paikallisesti selaimessa'],
    ['yksittain tai kaikki kerralla', 'yksittäin tai kaikki kerralla'],
    ['Muunnos tapahtuu kokonaan selaimessa', 'Muunnos tapahtuu kokonaan selaimessa'],
    ['tiedostoja ei koskaan lahetetä palvelimelle', 'tiedostoja ei koskaan lähetetä palvelimelle'],
    ['Ilman rekisteroitymista, ilman rajoituksia', 'Ilman rekisteröitymistä, ilman rajoituksia'],
    ['Usein kysytyt kysymykset', 'Usein kysytyt kysymykset'],
    ['Tarvitsetko lisaa', 'Tarvitsetko lisää'],
    ['Ota yhteytta', 'Ota yhteyttä'],
    ['autamme loytamaan oikean ratkaisun', 'autamme löytämään oikean ratkaisun'],
    ['Kirjoita meille', 'Kirjoita meille'],
    ['Muut tyokalut', 'Muut työkalut'],
    ['Mika on AVIF-muoto', 'Mikä on AVIF-muoto'],
    ['moderni kuvamuoto, joka perustuu AV1-koodekkiin', 'moderni kuvamuoto, joka perustuu AV1-koodekkiin'],
    ['Se tarjoaa erinomaisen pakkauksen', 'Se tarjoaa erinomaisen pakkauksen'],
    ['tiedostot voivat olla jopa 50% pienempia kuin JPG', 'tiedostot voivat olla jopa 50% pienempiä kuin JPG'],
    ['Toimiiko AVIF kaikissa selaimissa', 'Toimiiko AVIF kaikissa selaimissa'],
    ['Safarilla on rajallinen AVIF-tuki', 'Safarilla on rajallinen AVIF-tuki'],
    ['Lahetetaanko tiedostoni palvelimelle', 'Lähetetäänkö tiedostoni palvelimelle'],
    ['Tiedostot eivat koskaan poistu tietokoneeltasi', 'Tiedostot eivät koskaan poistu tietokoneeltasi'],
    ['Mika on GIF-muoto', 'Mikä on GIF-muoto'],
    ['laajasti tuettu kuvamuoto, joka tukee enintaan 256 varia', 'laajasti tuettu kuvamuoto, joka tukee enintään 256 väriä'],
    ['Ihanteellinen yksinkertaisille grafiikoille ja kuvakkeille', 'Ihanteellinen yksinkertaisille grafiikoille ja kuvakkeille'],
    ['Vahentaako GIF-muunnos laatua', 'Vähentääkö GIF-muunnos laatua'],
    ['GIF kayttaa rajattua 256 varin palettia', 'GIF käyttää rajattua 256 värin palettia'],
    ['Valokuvat voivat menettaa yksityiskohtia', 'Valokuvat voivat menettää yksityiskohtia'],
    ['Mika on TIFF-muoto', 'Mikä on TIFF-muoto'],
    ['ammattimainen haviöton kuvamuoto', 'ammattimainen häviötön kuvamuoto'],
    ['jota kaytetaan tulostuksessa, julkaisussa ja arkistoinnissa', 'jota käytetään tulostuksessa, julkaisussa ja arkistoinnissa'],
    ['Ovatko TIFF-tiedostot suurempia kuin JPG', 'Ovatko TIFF-tiedostot suurempia kuin JPG'],
    ['TIFF-tiedostot ovat tyypillisesti paljon suurempia, koska ne kayttavat haviötöntä pakkausta', 'TIFF-tiedostot ovat tyypillisesti paljon suurempia, koska ne käyttävät häviötöntä pakkausta'],
    ['Muunna pakkaamattomat BMP-tiedostot ultrakompaktiin AVIF-muotoon', 'Muunna pakkaamattomat BMP-tiedostot ultrakompaktiin AVIF-muotoon'],
    ['Muunna AVIF-tiedostot yleiseen JPG-muotoon', 'Muunna AVIF-tiedostot yleiseen JPG-muotoon'],
  ],
  el: [
    // Greek text in the _gen script mostly has correct diacritics already (Unicode)
    // But some descriptions in tool-registry have stripped accents
    ['ασυμπιεστα αρχεια BMP σε υπερσυμπαγες AVIF', 'ασυμπίεστα αρχεία BMP σε υπερσυμπαγές AVIF'],
    ['Μετατρεψτε αρχεια AVIF σε καθολικο JPG', 'Μετατρέψτε αρχεία AVIF σε καθολικό JPG'],
    ['Συμβατο με καθε προγραμμα', 'Συμβατό με κάθε πρόγραμμα'],
  ],
};

// -----------------------------------------------------------------------
// Apply replacements to a string
// -----------------------------------------------------------------------
function applyReplacements(text, locale) {
  if (!text || typeof text !== 'string') return text;
  const reps = REPLACEMENTS[locale];
  if (!reps) return text;
  let result = text;
  for (const [from, to] of reps) {
    if (from === to) continue; // skip no-ops
    // Use split/join for exact string replacement (no regex needed)
    if (result.includes(from)) {
      result = result.split(from).join(to);
    }
  }
  return result;
}

// -----------------------------------------------------------------------
// Recursively apply replacements to all string values in an object
// -----------------------------------------------------------------------
function fixObject(obj, locale) {
  if (typeof obj === 'string') return applyReplacements(obj, locale);
  if (Array.isArray(obj)) return obj.map((item) => fixObject(item, locale));
  if (obj && typeof obj === 'object') {
    const result = {};
    for (const [key, value] of Object.entries(obj)) {
      // Don't touch paths, hrefs, slugs, keys, types, variants, icons, images
      if (
        [
          'href',
          'path',
          'slug',
          'type',
          'variant',
          'icon',
          'key',
          'toolKey',
          'locale',
          'ogImage',
          'backgroundImage',
          'imageSrc',
          'imageAlt',
          'image',
          'applicationCategory',
          'applicationSubCategory',
          'grid',
          'openByDefault',
          'position',
          'carouselOrder',
        ].includes(key)
      ) {
        result[key] = value;
      } else {
        result[key] = fixObject(value, locale);
      }
    }
    return result;
  }
  return obj;
}

// -----------------------------------------------------------------------
// MAIN
// -----------------------------------------------------------------------
const LOCALES = Object.keys(REPLACEMENTS);
let stats = { filesScanned: 0, filesModified: 0 };

for (const locale of LOCALES) {
  const toolsDir = path.join(DATA, locale, 'tools');
  if (!fs.existsSync(toolsDir)) continue;

  const files = fs.readdirSync(toolsDir).filter((f) => f.startsWith('converter-'));

  for (const file of files) {
    stats.filesScanned++;
    const filePath = path.join(toolsDir, file);

    try {
      const raw = fs.readFileSync(filePath, 'utf8');
      const data = JSON.parse(raw);
      const fixed = fixObject(data, locale);
      const fixedStr = JSON.stringify(fixed, null, 2) + '\n';

      if (fixedStr !== raw) {
        stats.filesModified++;
        if (!DRY) {
          fs.writeFileSync(filePath, fixedStr, 'utf8');
        }
      }
    } catch (err) {
      console.error(`ERROR ${locale}/${file}: ${err.message}`);
    }
  }
}

console.log('=== DIACRITICS FIX ===');
console.log(`Files scanned:  ${stats.filesScanned}`);
console.log(`Files modified: ${stats.filesModified}`);
if (DRY) console.log('(dry run - no files modified)');
