/**
 * Add 15 locale entries to each of the 20 new converter tools in tool-registry.ts.
 * Each tool currently only has `pl` locale. We add en, de, es, fr, pt, it, ro, nl, hu, cs, sv, da, no, fi, el.
 */
const fs = require('fs');
const path = require('path');

const registryPath = path.join(__dirname, '..', 'lib', 'i18n', 'tool-registry.ts');

// Define all 20 new converters with their locale data
const converters = [
  {
    key: 'jpgToAvif',
    locales: {
      en: { slug: 'jpg-to-avif-converter', title: 'JPG to AVIF converter', description: 'Convert JPG photos to modern AVIF. Up to 50% better compression than JPG while maintaining quality.' },
      de: { slug: 'jpg-zu-avif-konverter', title: 'JPG zu AVIF Konverter', description: 'JPG-Fotos in modernes AVIF umwandeln. Bis zu 50% bessere Kompression als JPG bei gleicher Qualitat.' },
      es: { slug: 'convertidor-jpg-a-avif', title: 'Convertidor JPG a AVIF', description: 'Convierte fotos JPG a AVIF moderno. Compresion hasta un 50% mejor que JPG manteniendo la calidad.' },
      fr: { slug: 'convertisseur-jpg-en-avif', title: 'Convertisseur JPG en AVIF', description: 'Convertissez les photos JPG en AVIF moderne. Compression jusqu\'a 50% meilleure que JPG.' },
      pt: { slug: 'conversor-jpg-para-avif', title: 'Conversor JPG para AVIF', description: 'Converta fotos JPG para AVIF moderno. Compressao ate 50% melhor que JPG mantendo a qualidade.' },
      it: { slug: 'convertitore-jpg-in-avif', title: 'Convertitore JPG in AVIF', description: 'Converti foto JPG in AVIF moderno. Compressione fino al 50% migliore di JPG mantenendo la qualita.' },
      ro: { slug: 'convertor-jpg-in-avif', title: 'Convertor JPG in AVIF', description: 'Converteste fotografii JPG in AVIF modern. Compresie cu pana la 50% mai buna decat JPG.' },
      nl: { slug: 'jpg-naar-avif-converter', title: 'JPG naar AVIF converter', description: 'Converteer JPG-foto\'s naar modern AVIF. Tot 50% betere compressie dan JPG met behoud van kwaliteit.' },
      hu: { slug: 'jpg-avif-konverter', title: 'JPG AVIF konverter', description: 'JPG fotok konvertalasa modern AVIF formatumra. Akar 50%-kal jobb tomoritest mint JPG.' },
      cs: { slug: 'prevodnik-jpg-na-avif', title: 'Převodník JPG na AVIF', description: 'Prevedte fotky JPG na moderni AVIF. Az o 50% lepsi komprese nez JPG pri zachovani kvality.' },
      sv: { slug: 'jpg-till-avif-konverterare', title: 'JPG till AVIF-konverterare', description: 'Konvertera JPG-foton till modernt AVIF. Upp till 50% battre komprimering an JPG.' },
      da: { slug: 'jpg-til-avif-konverter', title: 'JPG til AVIF-konverter', description: 'Konverter JPG-fotos til moderne AVIF. Op til 50% bedre komprimering end JPG.' },
      no: { slug: 'jpg-til-avif-konverterer', title: 'JPG til AVIF-konverterer', description: 'Konverter JPG-bilder til moderne AVIF. Opptil 50% bedre komprimering enn JPG.' },
      fi: { slug: 'jpg-avif-muunnin', title: 'JPG AVIF -muunnin', description: 'Muunna JPG-kuvat moderniin AVIF-muotoon. Jopa 50% parempi pakkaus kuin JPG.' },
      el: { slug: 'metatropeas-jpg-se-avif', title: 'Μετατροπέας JPG σε AVIF', description: 'Μετατρεψτε φωτογραφιες JPG σε συγχρονο AVIF. Εως 50% καλυτερη συμπιεση απο JPG.' },
    },
  },
  {
    key: 'pngToAvif',
    locales: {
      en: { slug: 'png-to-avif-converter', title: 'PNG to AVIF converter', description: 'Convert PNG graphics to AVIF with transparency support. Significantly smaller files.' },
      de: { slug: 'png-zu-avif-konverter', title: 'PNG zu AVIF Konverter', description: 'PNG-Grafiken in AVIF umwandeln mit Transparenzunterstutzung. Deutlich kleinere Dateien.' },
      es: { slug: 'convertidor-png-a-avif', title: 'Convertidor PNG a AVIF', description: 'Convierte graficos PNG a AVIF con soporte de transparencia. Archivos significativamente mas pequenos.' },
      fr: { slug: 'convertisseur-png-en-avif', title: 'Convertisseur PNG en AVIF', description: 'Convertissez les graphiques PNG en AVIF avec transparence. Fichiers beaucoup plus petits.' },
      pt: { slug: 'conversor-png-para-avif', title: 'Conversor PNG para AVIF', description: 'Converta graficos PNG para AVIF com suporte a transparencia. Ficheiros significativamente menores.' },
      it: { slug: 'convertitore-png-in-avif', title: 'Convertitore PNG in AVIF', description: 'Converti grafiche PNG in AVIF con supporto trasparenza. File notevolmente piu piccoli.' },
      ro: { slug: 'convertor-png-in-avif', title: 'Convertor PNG in AVIF', description: 'Converteste grafice PNG in AVIF cu suport transparenta. Fisiere semnificativ mai mici.' },
      nl: { slug: 'png-naar-avif-converter', title: 'PNG naar AVIF converter', description: 'Converteer PNG-afbeeldingen naar AVIF met transparantie-ondersteuning. Aanzienlijk kleinere bestanden.' },
      hu: { slug: 'png-avif-konverter', title: 'PNG AVIF konverter', description: 'PNG grafika konvertalasa AVIF-re atlatszosag megtartasaval. Jelentosen kisebb fajlok.' },
      cs: { slug: 'prevodnik-png-na-avif', title: 'Převodník PNG na AVIF', description: 'Prevedte grafiku PNG na AVIF s podporou pruhlednosti. Vyrazne mensi soubory.' },
      sv: { slug: 'png-till-avif-konverterare', title: 'PNG till AVIF-konverterare', description: 'Konvertera PNG-grafik till AVIF med transparensstod. Betydligt mindre filer.' },
      da: { slug: 'png-til-avif-konverter', title: 'PNG til AVIF-konverter', description: 'Konverter PNG-grafik til AVIF med gennemsigtighedsunderstottelse. Markant mindre filer.' },
      no: { slug: 'png-til-avif-konverterer', title: 'PNG til AVIF-konverterer', description: 'Konverter PNG-grafikk til AVIF med transparensstotte. Betydelig mindre filer.' },
      fi: { slug: 'png-avif-muunnin', title: 'PNG AVIF -muunnin', description: 'Muunna PNG-grafiikat AVIF-muotoon lapinakvyystuella. Huomattavasti pienemmat tiedostot.' },
      el: { slug: 'metatropeas-png-se-avif', title: 'Μετατροπέας PNG σε AVIF', description: 'Μετατρεψτε γραφικα PNG σε AVIF με υποστηριξη διαφανειας. Σημαντικα μικροτερα αρχεια.' },
    },
  },
  {
    key: 'webpToAvif',
    locales: {
      en: { slug: 'webp-to-avif-converter', title: 'WebP to AVIF converter', description: 'Convert WebP files to AVIF. Even better compression in a modern format.' },
      de: { slug: 'webp-zu-avif-konverter', title: 'WebP zu AVIF Konverter', description: 'WebP-Dateien in AVIF umwandeln. Noch bessere Kompression im modernen Format.' },
      es: { slug: 'convertidor-webp-a-avif', title: 'Convertidor WebP a AVIF', description: 'Convierte archivos WebP a AVIF. Compresion aun mejor en formato moderno.' },
      fr: { slug: 'convertisseur-webp-en-avif', title: 'Convertisseur WebP en AVIF', description: 'Convertissez les fichiers WebP en AVIF. Compression encore meilleure dans un format moderne.' },
      pt: { slug: 'conversor-webp-para-avif', title: 'Conversor WebP para AVIF', description: 'Converta ficheiros WebP para AVIF. Compressao ainda melhor num formato moderno.' },
      it: { slug: 'convertitore-webp-in-avif', title: 'Convertitore WebP in AVIF', description: 'Converti file WebP in AVIF. Compressione ancora migliore in un formato moderno.' },
      ro: { slug: 'convertor-webp-in-avif', title: 'Convertor WebP in AVIF', description: 'Converteste fisiere WebP in AVIF. Compresie si mai buna intr-un format modern.' },
      nl: { slug: 'webp-naar-avif-converter', title: 'WebP naar AVIF converter', description: 'Converteer WebP-bestanden naar AVIF. Nog betere compressie in een modern formaat.' },
      hu: { slug: 'webp-avif-konverter', title: 'WebP AVIF konverter', description: 'WebP fajlok konvertalasa AVIF-re. Meg jobb tomoritest modern formatumban.' },
      cs: { slug: 'prevodnik-webp-na-avif', title: 'Převodník WebP na AVIF', description: 'Prevedte soubory WebP na AVIF. Jeste lepsi komprese v modernim formatu.' },
      sv: { slug: 'webp-till-avif-konverterare', title: 'WebP till AVIF-konverterare', description: 'Konvertera WebP-filer till AVIF. Annu battre komprimering i ett modernt format.' },
      da: { slug: 'webp-til-avif-konverter', title: 'WebP til AVIF-konverter', description: 'Konverter WebP-filer til AVIF. Endnu bedre komprimering i et moderne format.' },
      no: { slug: 'webp-til-avif-konverterer', title: 'WebP til AVIF-konverterer', description: 'Konverter WebP-filer til AVIF. Enda bedre komprimering i et moderne format.' },
      fi: { slug: 'webp-avif-muunnin', title: 'WebP AVIF -muunnin', description: 'Muunna WebP-tiedostot AVIF-muotoon. Viela parempi pakkaus modernissa formaatissa.' },
      el: { slug: 'metatropeas-webp-se-avif', title: 'Μετατροπέας WebP σε AVIF', description: 'Μετατρεψτε αρχεια WebP σε AVIF. Ακομη καλυτερη συμπιεση σε συγχρονη μορφη.' },
    },
  },
  {
    key: 'svgToAvif',
    locales: {
      en: { slug: 'svg-to-avif-converter', title: 'SVG to AVIF converter', description: 'Convert vector SVG graphics to compact AVIF raster format.' },
      de: { slug: 'svg-zu-avif-konverter', title: 'SVG zu AVIF Konverter', description: 'Vektor-SVG-Grafiken in kompaktes AVIF-Rasterformat umwandeln.' },
      es: { slug: 'convertidor-svg-a-avif', title: 'Convertidor SVG a AVIF', description: 'Convierte graficos vectoriales SVG a formato raster AVIF compacto.' },
      fr: { slug: 'convertisseur-svg-en-avif', title: 'Convertisseur SVG en AVIF', description: 'Convertissez les graphiques vectoriels SVG en format raster AVIF compact.' },
      pt: { slug: 'conversor-svg-para-avif', title: 'Conversor SVG para AVIF', description: 'Converta graficos vetoriais SVG para formato raster AVIF compacto.' },
      it: { slug: 'convertitore-svg-in-avif', title: 'Convertitore SVG in AVIF', description: 'Converti grafiche vettoriali SVG in formato raster AVIF compatto.' },
      ro: { slug: 'convertor-svg-in-avif', title: 'Convertor SVG in AVIF', description: 'Converteste grafice vectoriale SVG in format raster AVIF compact.' },
      nl: { slug: 'svg-naar-avif-converter', title: 'SVG naar AVIF converter', description: 'Converteer vector SVG-afbeeldingen naar compact AVIF-rasterformaat.' },
      hu: { slug: 'svg-avif-konverter', title: 'SVG AVIF konverter', description: 'Vektor SVG grafika konvertalasa kompakt AVIF raszter formatumra.' },
      cs: { slug: 'prevodnik-svg-na-avif', title: 'Převodník SVG na AVIF', description: 'Prevedte vektorovou grafiku SVG na kompaktni rastrovy format AVIF.' },
      sv: { slug: 'svg-till-avif-konverterare', title: 'SVG till AVIF-konverterare', description: 'Konvertera vektor-SVG-grafik till kompakt AVIF-rasterformat.' },
      da: { slug: 'svg-til-avif-konverter', title: 'SVG til AVIF-konverter', description: 'Konverter vektor-SVG-grafik til kompakt AVIF-rasterformat.' },
      no: { slug: 'svg-til-avif-konverterer', title: 'SVG til AVIF-konverterer', description: 'Konverter vektor-SVG-grafikk til kompakt AVIF-rasterformat.' },
      fi: { slug: 'svg-avif-muunnin', title: 'SVG AVIF -muunnin', description: 'Muunna vektori-SVG-grafiikat kompaktiin AVIF-rasterimuotoon.' },
      el: { slug: 'metatropeas-svg-se-avif', title: 'Μετατροπέας SVG σε AVIF', description: 'Μετατρεψτε διανυσματικα γραφικα SVG σε συμπαγη μορφη raster AVIF.' },
    },
  },
  {
    key: 'bmpToAvif',
    locales: {
      en: { slug: 'bmp-to-avif-converter', title: 'BMP to AVIF converter', description: 'Convert uncompressed BMP files to ultra-compact AVIF.' },
      de: { slug: 'bmp-zu-avif-konverter', title: 'BMP zu AVIF Konverter', description: 'Unkomprimierte BMP-Dateien in ultrakompaktes AVIF umwandeln.' },
      es: { slug: 'convertidor-bmp-a-avif', title: 'Convertidor BMP a AVIF', description: 'Convierte archivos BMP sin comprimir a AVIF ultracompacto.' },
      fr: { slug: 'convertisseur-bmp-en-avif', title: 'Convertisseur BMP en AVIF', description: 'Convertissez les fichiers BMP non compresses en AVIF ultra-compact.' },
      pt: { slug: 'conversor-bmp-para-avif', title: 'Conversor BMP para AVIF', description: 'Converta ficheiros BMP nao comprimidos para AVIF ultracompacto.' },
      it: { slug: 'convertitore-bmp-in-avif', title: 'Convertitore BMP in AVIF', description: 'Converti file BMP non compressi in AVIF ultracompatto.' },
      ro: { slug: 'convertor-bmp-in-avif', title: 'Convertor BMP in AVIF', description: 'Converteste fisiere BMP necomprimate in AVIF ultracompact.' },
      nl: { slug: 'bmp-naar-avif-converter', title: 'BMP naar AVIF converter', description: 'Converteer ongecomprimeerde BMP-bestanden naar ultracompact AVIF.' },
      hu: { slug: 'bmp-avif-konverter', title: 'BMP AVIF konverter', description: 'Tomoritetlen BMP fajlok konvertalasa ultrakompakt AVIF-re.' },
      cs: { slug: 'prevodnik-bmp-na-avif', title: 'Převodník BMP na AVIF', description: 'Prevedte nekomprimovane soubory BMP na ultrakompaktni AVIF.' },
      sv: { slug: 'bmp-till-avif-konverterare', title: 'BMP till AVIF-konverterare', description: 'Konvertera okomprimerade BMP-filer till ultrakompakt AVIF.' },
      da: { slug: 'bmp-til-avif-konverter', title: 'BMP til AVIF-konverter', description: 'Konverter ukomprimerede BMP-filer til ultrakompakt AVIF.' },
      no: { slug: 'bmp-til-avif-konverterer', title: 'BMP til AVIF-konverterer', description: 'Konverter ukomprimerte BMP-filer til ultrakompakt AVIF.' },
      fi: { slug: 'bmp-avif-muunnin', title: 'BMP AVIF -muunnin', description: 'Muunna pakkaamattomat BMP-tiedostot ultrakompaktiin AVIF-muotoon.' },
      el: { slug: 'metatropeas-bmp-se-avif', title: 'Μετατροπέας BMP σε AVIF', description: 'Μετατρεψτε ασυμπιεστα αρχεια BMP σε υπερσυμπαγες AVIF.' },
    },
  },
  {
    key: 'gifToAvif',
    locales: {
      en: { slug: 'gif-to-avif-converter', title: 'GIF to AVIF converter', description: 'Convert GIF first frame to static AVIF image with excellent compression.' },
      de: { slug: 'gif-zu-avif-konverter', title: 'GIF zu AVIF Konverter', description: 'Erstes GIF-Frame in statisches AVIF-Bild mit exzellenter Kompression umwandeln.' },
      es: { slug: 'convertidor-gif-a-avif', title: 'Convertidor GIF a AVIF', description: 'Convierte el primer fotograma GIF a imagen AVIF estatica con excelente compresion.' },
      fr: { slug: 'convertisseur-gif-en-avif', title: 'Convertisseur GIF en AVIF', description: 'Convertissez la premiere image GIF en image AVIF statique avec excellente compression.' },
      pt: { slug: 'conversor-gif-para-avif', title: 'Conversor GIF para AVIF', description: 'Converta o primeiro quadro GIF para imagem AVIF estatica com excelente compressao.' },
      it: { slug: 'convertitore-gif-in-avif', title: 'Convertitore GIF in AVIF', description: 'Converti il primo fotogramma GIF in immagine AVIF statica con compressione eccellente.' },
      ro: { slug: 'convertor-gif-in-avif', title: 'Convertor GIF in AVIF', description: 'Converteste primul cadru GIF in imagine AVIF statica cu compresie excelenta.' },
      nl: { slug: 'gif-naar-avif-converter', title: 'GIF naar AVIF converter', description: 'Converteer het eerste GIF-frame naar statisch AVIF-beeld met uitstekende compressie.' },
      hu: { slug: 'gif-avif-konverter', title: 'GIF AVIF konverter', description: 'GIF elso kepkocka konvertalasa statikus AVIF keppe kivaloan tomoritest.' },
      cs: { slug: 'prevodnik-gif-na-avif', title: 'Převodník GIF na AVIF', description: 'Prevedte prvni snimek GIF na staticky obraz AVIF s vynikajici kompresi.' },
      sv: { slug: 'gif-till-avif-konverterare', title: 'GIF till AVIF-konverterare', description: 'Konvertera forsta GIF-bildrutan till statisk AVIF-bild med utmarkt komprimering.' },
      da: { slug: 'gif-til-avif-konverter', title: 'GIF til AVIF-konverter', description: 'Konverter forste GIF-billede til statisk AVIF-billede med fremragende komprimering.' },
      no: { slug: 'gif-til-avif-konverterer', title: 'GIF til AVIF-konverterer', description: 'Konverter forste GIF-bilde til statisk AVIF-bilde med utmerket komprimering.' },
      fi: { slug: 'gif-avif-muunnin', title: 'GIF AVIF -muunnin', description: 'Muunna GIF:n ensimmainen ruutu staattiseksi AVIF-kuvaksi erinomaisella pakkauksella.' },
      el: { slug: 'metatropeas-gif-se-avif', title: 'Μετατροπέας GIF σε AVIF', description: 'Μετατρεψτε το πρωτο καρε GIF σε στατικη εικονα AVIF με εξαιρετικη συμπιεση.' },
    },
  },
  {
    key: 'heicToAvif',
    locales: {
      en: { slug: 'heic-to-avif-converter', title: 'HEIC to AVIF converter', description: 'Convert iPhone HEIC photos to modern AVIF format.' },
      de: { slug: 'heic-zu-avif-konverter', title: 'HEIC zu AVIF Konverter', description: 'iPhone HEIC-Fotos in modernes AVIF-Format umwandeln.' },
      es: { slug: 'convertidor-heic-a-avif', title: 'Convertidor HEIC a AVIF', description: 'Convierte fotos HEIC del iPhone a formato AVIF moderno.' },
      fr: { slug: 'convertisseur-heic-en-avif', title: 'Convertisseur HEIC en AVIF', description: 'Convertissez les photos HEIC d\'iPhone en format AVIF moderne.' },
      pt: { slug: 'conversor-heic-para-avif', title: 'Conversor HEIC para AVIF', description: 'Converta fotos HEIC do iPhone para formato AVIF moderno.' },
      it: { slug: 'convertitore-heic-in-avif', title: 'Convertitore HEIC in AVIF', description: 'Converti foto HEIC dell\'iPhone in formato AVIF moderno.' },
      ro: { slug: 'convertor-heic-in-avif', title: 'Convertor HEIC in AVIF', description: 'Converteste fotografii HEIC de pe iPhone in format AVIF modern.' },
      nl: { slug: 'heic-naar-avif-converter', title: 'HEIC naar AVIF converter', description: 'Converteer iPhone HEIC-foto\'s naar modern AVIF-formaat.' },
      hu: { slug: 'heic-avif-konverter', title: 'HEIC AVIF konverter', description: 'iPhone HEIC fotok konvertalasa modern AVIF formatumra.' },
      cs: { slug: 'prevodnik-heic-na-avif', title: 'Převodník HEIC na AVIF', description: 'Prevedte fotky HEIC z iPhonu na moderni format AVIF.' },
      sv: { slug: 'heic-till-avif-konverterare', title: 'HEIC till AVIF-konverterare', description: 'Konvertera iPhone HEIC-foton till modernt AVIF-format.' },
      da: { slug: 'heic-til-avif-konverter', title: 'HEIC til AVIF-konverter', description: 'Konverter iPhone HEIC-fotos til moderne AVIF-format.' },
      no: { slug: 'heic-til-avif-konverterer', title: 'HEIC til AVIF-konverterer', description: 'Konverter iPhone HEIC-bilder til moderne AVIF-format.' },
      fi: { slug: 'heic-avif-muunnin', title: 'HEIC AVIF -muunnin', description: 'Muunna iPhonen HEIC-kuvat moderniin AVIF-muotoon.' },
      el: { slug: 'metatropeas-heic-se-avif', title: 'Μετατροπέας HEIC σε AVIF', description: 'Μετατρεψτε φωτογραφιες HEIC του iPhone σε συγχρονη μορφη AVIF.' },
    },
  },
  {
    key: 'tiffToAvif',
    locales: {
      en: { slug: 'tiff-to-avif-converter', title: 'TIFF to AVIF converter', description: 'Convert TIFF files to modern AVIF. Massive file size reduction.' },
      de: { slug: 'tiff-zu-avif-konverter', title: 'TIFF zu AVIF Konverter', description: 'TIFF-Dateien in modernes AVIF umwandeln. Massive Dateigrossen-Reduzierung.' },
      es: { slug: 'convertidor-tiff-a-avif', title: 'Convertidor TIFF a AVIF', description: 'Convierte archivos TIFF a AVIF moderno. Reduccion masiva del tamano de archivo.' },
      fr: { slug: 'convertisseur-tiff-en-avif', title: 'Convertisseur TIFF en AVIF', description: 'Convertissez les fichiers TIFF en AVIF moderne. Reduction massive de la taille.' },
      pt: { slug: 'conversor-tiff-para-avif', title: 'Conversor TIFF para AVIF', description: 'Converta ficheiros TIFF para AVIF moderno. Reducao massiva do tamanho do ficheiro.' },
      it: { slug: 'convertitore-tiff-in-avif', title: 'Convertitore TIFF in AVIF', description: 'Converti file TIFF in AVIF moderno. Riduzione massiva delle dimensioni del file.' },
      ro: { slug: 'convertor-tiff-in-avif', title: 'Convertor TIFF in AVIF', description: 'Converteste fisiere TIFF in AVIF modern. Reducere masiva a dimensiunii fisierului.' },
      nl: { slug: 'tiff-naar-avif-converter', title: 'TIFF naar AVIF converter', description: 'Converteer TIFF-bestanden naar modern AVIF. Enorme bestandsgrootte-reductie.' },
      hu: { slug: 'tiff-avif-konverter', title: 'TIFF AVIF konverter', description: 'TIFF fajlok konvertalasa modern AVIF-re. Hatalmas fajlmeret csokkenes.' },
      cs: { slug: 'prevodnik-tiff-na-avif', title: 'Převodník TIFF na AVIF', description: 'Prevedte soubory TIFF na moderni AVIF. Masivni snizeni velikosti souboru.' },
      sv: { slug: 'tiff-till-avif-konverterare', title: 'TIFF till AVIF-konverterare', description: 'Konvertera TIFF-filer till modernt AVIF. Massiv filstorleksreducering.' },
      da: { slug: 'tiff-til-avif-konverter', title: 'TIFF til AVIF-konverter', description: 'Konverter TIFF-filer til moderne AVIF. Massiv filstorrelsesreduktion.' },
      no: { slug: 'tiff-til-avif-konverterer', title: 'TIFF til AVIF-konverterer', description: 'Konverter TIFF-filer til moderne AVIF. Massiv filstorrelsesreduksjon.' },
      fi: { slug: 'tiff-avif-muunnin', title: 'TIFF AVIF -muunnin', description: 'Muunna TIFF-tiedostot moderniin AVIF-muotoon. Valtava tiedostokoon pienennys.' },
      el: { slug: 'metatropeas-tiff-se-avif', title: 'Μετατροπέας TIFF σε AVIF', description: 'Μετατρεψτε αρχεια TIFF σε συγχρονο AVIF. Τεραστια μειωση μεγεθους αρχειου.' },
    },
  },
  // GIF target converters
  {
    key: 'jpgToGif',
    locales: {
      en: { slug: 'jpg-to-gif-converter', title: 'JPG to GIF converter', description: 'Convert JPG photos to GIF format. Perfect for simple graphics and icons.' },
      de: { slug: 'jpg-zu-gif-konverter', title: 'JPG zu GIF Konverter', description: 'JPG-Fotos in GIF-Format umwandeln. Perfekt fur einfache Grafiken und Icons.' },
      es: { slug: 'convertidor-jpg-a-gif', title: 'Convertidor JPG a GIF', description: 'Convierte fotos JPG a formato GIF. Perfecto para graficos simples e iconos.' },
      fr: { slug: 'convertisseur-jpg-en-gif', title: 'Convertisseur JPG en GIF', description: 'Convertissez les photos JPG en format GIF. Parfait pour graphiques simples et icones.' },
      pt: { slug: 'conversor-jpg-para-gif', title: 'Conversor JPG para GIF', description: 'Converta fotos JPG para formato GIF. Perfeito para graficos simples e icones.' },
      it: { slug: 'convertitore-jpg-in-gif', title: 'Convertitore JPG in GIF', description: 'Converti foto JPG in formato GIF. Perfetto per grafiche semplici e icone.' },
      ro: { slug: 'convertor-jpg-in-gif', title: 'Convertor JPG in GIF', description: 'Converteste fotografii JPG in format GIF. Perfect pentru grafice simple si pictograme.' },
      nl: { slug: 'jpg-naar-gif-converter', title: 'JPG naar GIF converter', description: 'Converteer JPG-foto\'s naar GIF-formaat. Perfect voor eenvoudige afbeeldingen en iconen.' },
      hu: { slug: 'jpg-gif-konverter', title: 'JPG GIF konverter', description: 'JPG fotok konvertalasa GIF formatumra. Tokeletes egyszeru grafikakhoz es ikonokhoz.' },
      cs: { slug: 'prevodnik-jpg-na-gif', title: 'Převodník JPG na GIF', description: 'Prevedte fotky JPG na format GIF. Idealni pro jednoduchou grafiku a ikony.' },
      sv: { slug: 'jpg-till-gif-konverterare', title: 'JPG till GIF-konverterare', description: 'Konvertera JPG-foton till GIF-format. Perfekt for enkel grafik och ikoner.' },
      da: { slug: 'jpg-til-gif-konverter', title: 'JPG til GIF-konverter', description: 'Konverter JPG-fotos til GIF-format. Perfekt til simpel grafik og ikoner.' },
      no: { slug: 'jpg-til-gif-konverterer', title: 'JPG til GIF-konverterer', description: 'Konverter JPG-bilder til GIF-format. Perfekt for enkel grafikk og ikoner.' },
      fi: { slug: 'jpg-gif-muunnin', title: 'JPG GIF -muunnin', description: 'Muunna JPG-kuvat GIF-muotoon. Taydellinen yksinkertaisille grafiikoille ja kuvakkeille.' },
      el: { slug: 'metatropeas-jpg-se-gif', title: 'Μετατροπέας JPG σε GIF', description: 'Μετατρεψτε φωτογραφιες JPG σε μορφη GIF. Ιδανικο για απλα γραφικα και εικονιδια.' },
    },
  },
  {
    key: 'pngToGif',
    locales: {
      en: { slug: 'png-to-gif-converter', title: 'PNG to GIF converter', description: 'Convert PNG graphics to GIF. Ideal for simple icons and graphics.' },
      de: { slug: 'png-zu-gif-konverter', title: 'PNG zu GIF Konverter', description: 'PNG-Grafiken in GIF umwandeln. Ideal fur einfache Icons und Grafiken.' },
      es: { slug: 'convertidor-png-a-gif', title: 'Convertidor PNG a GIF', description: 'Convierte graficos PNG a GIF. Ideal para iconos simples y graficos.' },
      fr: { slug: 'convertisseur-png-en-gif', title: 'Convertisseur PNG en GIF', description: 'Convertissez les graphiques PNG en GIF. Ideal pour icones simples et graphiques.' },
      pt: { slug: 'conversor-png-para-gif', title: 'Conversor PNG para GIF', description: 'Converta graficos PNG para GIF. Ideal para icones simples e graficos.' },
      it: { slug: 'convertitore-png-in-gif', title: 'Convertitore PNG in GIF', description: 'Converti grafiche PNG in GIF. Ideale per icone semplici e grafiche.' },
      ro: { slug: 'convertor-png-in-gif', title: 'Convertor PNG in GIF', description: 'Converteste grafice PNG in GIF. Ideal pentru pictograme simple si grafice.' },
      nl: { slug: 'png-naar-gif-converter', title: 'PNG naar GIF converter', description: 'Converteer PNG-afbeeldingen naar GIF. Ideaal voor eenvoudige iconen en afbeeldingen.' },
      hu: { slug: 'png-gif-konverter', title: 'PNG GIF konverter', description: 'PNG grafika konvertalasa GIF-re. Idealis egyszeru ikonokhoz es grafikakhoz.' },
      cs: { slug: 'prevodnik-png-na-gif', title: 'Převodník PNG na GIF', description: 'Prevedte grafiku PNG na GIF. Idealni pro jednoduche ikony a grafiku.' },
      sv: { slug: 'png-till-gif-konverterare', title: 'PNG till GIF-konverterare', description: 'Konvertera PNG-grafik till GIF. Idealiskt for enkla ikoner och grafik.' },
      da: { slug: 'png-til-gif-konverter', title: 'PNG til GIF-konverter', description: 'Konverter PNG-grafik til GIF. Ideel til simple ikoner og grafik.' },
      no: { slug: 'png-til-gif-konverterer', title: 'PNG til GIF-konverterer', description: 'Konverter PNG-grafikk til GIF. Ideell for enkle ikoner og grafikk.' },
      fi: { slug: 'png-gif-muunnin', title: 'PNG GIF -muunnin', description: 'Muunna PNG-grafiikat GIF-muotoon. Ihanteellinen yksinkertaisille kuvakkeille ja grafiikoille.' },
      el: { slug: 'metatropeas-png-se-gif', title: 'Μετατροπέας PNG σε GIF', description: 'Μετατρεψτε γραφικα PNG σε GIF. Ιδανικο για απλα εικονιδια και γραφικα.' },
    },
  },
  {
    key: 'webpToGif',
    locales: {
      en: { slug: 'webp-to-gif-converter', title: 'WebP to GIF converter', description: 'Convert WebP images to GIF format for maximum compatibility.' },
      de: { slug: 'webp-zu-gif-konverter', title: 'WebP zu GIF Konverter', description: 'WebP-Bilder in GIF-Format umwandeln fur maximale Kompatibilitat.' },
      es: { slug: 'convertidor-webp-a-gif', title: 'Convertidor WebP a GIF', description: 'Convierte imagenes WebP a formato GIF para maxima compatibilidad.' },
      fr: { slug: 'convertisseur-webp-en-gif', title: 'Convertisseur WebP en GIF', description: 'Convertissez les images WebP en format GIF pour une compatibilite maximale.' },
      pt: { slug: 'conversor-webp-para-gif', title: 'Conversor WebP para GIF', description: 'Converta imagens WebP para formato GIF para maxima compatibilidade.' },
      it: { slug: 'convertitore-webp-in-gif', title: 'Convertitore WebP in GIF', description: 'Converti immagini WebP in formato GIF per massima compatibilita.' },
      ro: { slug: 'convertor-webp-in-gif', title: 'Convertor WebP in GIF', description: 'Converteste imagini WebP in format GIF pentru compatibilitate maxima.' },
      nl: { slug: 'webp-naar-gif-converter', title: 'WebP naar GIF converter', description: 'Converteer WebP-afbeeldingen naar GIF-formaat voor maximale compatibiliteit.' },
      hu: { slug: 'webp-gif-konverter', title: 'WebP GIF konverter', description: 'WebP kepek konvertalasa GIF formatumra maximalis kompatibilitassal.' },
      cs: { slug: 'prevodnik-webp-na-gif', title: 'Převodník WebP na GIF', description: 'Prevedte obrazky WebP na format GIF pro maximalni kompatibilitu.' },
      sv: { slug: 'webp-till-gif-konverterare', title: 'WebP till GIF-konverterare', description: 'Konvertera WebP-bilder till GIF-format for maximal kompatibilitet.' },
      da: { slug: 'webp-til-gif-konverter', title: 'WebP til GIF-konverter', description: 'Konverter WebP-billeder til GIF-format for maksimal kompatibilitet.' },
      no: { slug: 'webp-til-gif-konverterer', title: 'WebP til GIF-konverterer', description: 'Konverter WebP-bilder til GIF-format for maksimal kompatibilitet.' },
      fi: { slug: 'webp-gif-muunnin', title: 'WebP GIF -muunnin', description: 'Muunna WebP-kuvat GIF-muotoon maksimaalisen yhteensopivuuden saavuttamiseksi.' },
      el: { slug: 'metatropeas-webp-se-gif', title: 'Μετατροπέας WebP σε GIF', description: 'Μετατρεψτε εικονες WebP σε μορφη GIF για μεγιστη συμβατοτητα.' },
    },
  },
  {
    key: 'svgToGif',
    locales: {
      en: { slug: 'svg-to-gif-converter', title: 'SVG to GIF converter', description: 'Convert vector SVG graphics to GIF raster format.' },
      de: { slug: 'svg-zu-gif-konverter', title: 'SVG zu GIF Konverter', description: 'Vektor-SVG-Grafiken in GIF-Rasterformat umwandeln.' },
      es: { slug: 'convertidor-svg-a-gif', title: 'Convertidor SVG a GIF', description: 'Convierte graficos vectoriales SVG a formato raster GIF.' },
      fr: { slug: 'convertisseur-svg-en-gif', title: 'Convertisseur SVG en GIF', description: 'Convertissez les graphiques vectoriels SVG en format raster GIF.' },
      pt: { slug: 'conversor-svg-para-gif', title: 'Conversor SVG para GIF', description: 'Converta graficos vetoriais SVG para formato raster GIF.' },
      it: { slug: 'convertitore-svg-in-gif', title: 'Convertitore SVG in GIF', description: 'Converti grafiche vettoriali SVG in formato raster GIF.' },
      ro: { slug: 'convertor-svg-in-gif', title: 'Convertor SVG in GIF', description: 'Converteste grafice vectoriale SVG in format raster GIF.' },
      nl: { slug: 'svg-naar-gif-converter', title: 'SVG naar GIF converter', description: 'Converteer vector SVG-afbeeldingen naar GIF-rasterformaat.' },
      hu: { slug: 'svg-gif-konverter', title: 'SVG GIF konverter', description: 'Vektor SVG grafika konvertalasa GIF raszter formatumra.' },
      cs: { slug: 'prevodnik-svg-na-gif', title: 'Převodník SVG na GIF', description: 'Prevedte vektorovou grafiku SVG na rastrovy format GIF.' },
      sv: { slug: 'svg-till-gif-konverterare', title: 'SVG till GIF-konverterare', description: 'Konvertera vektor-SVG-grafik till GIF-rasterformat.' },
      da: { slug: 'svg-til-gif-konverter', title: 'SVG til GIF-konverter', description: 'Konverter vektor-SVG-grafik til GIF-rasterformat.' },
      no: { slug: 'svg-til-gif-konverterer', title: 'SVG til GIF-konverterer', description: 'Konverter vektor-SVG-grafikk til GIF-rasterformat.' },
      fi: { slug: 'svg-gif-muunnin', title: 'SVG GIF -muunnin', description: 'Muunna vektori-SVG-grafiikat GIF-rasterimuotoon.' },
      el: { slug: 'metatropeas-svg-se-gif', title: 'Μετατροπέας SVG σε GIF', description: 'Μετατρεψτε διανυσματικα γραφικα SVG σε μορφη raster GIF.' },
    },
  },
  {
    key: 'bmpToGif',
    locales: {
      en: { slug: 'bmp-to-gif-converter', title: 'BMP to GIF converter', description: 'Convert uncompressed BMP files to lightweight GIF.' },
      de: { slug: 'bmp-zu-gif-konverter', title: 'BMP zu GIF Konverter', description: 'Unkomprimierte BMP-Dateien in leichtes GIF umwandeln.' },
      es: { slug: 'convertidor-bmp-a-gif', title: 'Convertidor BMP a GIF', description: 'Convierte archivos BMP sin comprimir a GIF ligero.' },
      fr: { slug: 'convertisseur-bmp-en-gif', title: 'Convertisseur BMP en GIF', description: 'Convertissez les fichiers BMP non compresses en GIF leger.' },
      pt: { slug: 'conversor-bmp-para-gif', title: 'Conversor BMP para GIF', description: 'Converta ficheiros BMP nao comprimidos para GIF leve.' },
      it: { slug: 'convertitore-bmp-in-gif', title: 'Convertitore BMP in GIF', description: 'Converti file BMP non compressi in GIF leggero.' },
      ro: { slug: 'convertor-bmp-in-gif', title: 'Convertor BMP in GIF', description: 'Converteste fisiere BMP necomprimate in GIF usor.' },
      nl: { slug: 'bmp-naar-gif-converter', title: 'BMP naar GIF converter', description: 'Converteer ongecomprimeerde BMP-bestanden naar lichtgewicht GIF.' },
      hu: { slug: 'bmp-gif-konverter', title: 'BMP GIF konverter', description: 'Tomoritetlen BMP fajlok konvertalasa konnyu GIF-re.' },
      cs: { slug: 'prevodnik-bmp-na-gif', title: 'Převodník BMP na GIF', description: 'Prevedte nekomprimovane soubory BMP na lehky GIF.' },
      sv: { slug: 'bmp-till-gif-konverterare', title: 'BMP till GIF-konverterare', description: 'Konvertera okomprimerade BMP-filer till lattvikts-GIF.' },
      da: { slug: 'bmp-til-gif-konverter', title: 'BMP til GIF-konverter', description: 'Konverter ukomprimerede BMP-filer til let GIF.' },
      no: { slug: 'bmp-til-gif-konverterer', title: 'BMP til GIF-konverterer', description: 'Konverter ukomprimerte BMP-filer til lettvekts GIF.' },
      fi: { slug: 'bmp-gif-muunnin', title: 'BMP GIF -muunnin', description: 'Muunna pakkaamattomat BMP-tiedostot kevyeen GIF-muotoon.' },
      el: { slug: 'metatropeas-bmp-se-gif', title: 'Μετατροπέας BMP σε GIF', description: 'Μετατρεψτε ασυμπιεστα αρχεια BMP σε ελαφρυ GIF.' },
    },
  },
  // TIFF target converters
  {
    key: 'jpgToTiff',
    locales: {
      en: { slug: 'jpg-to-tiff-converter', title: 'JPG to TIFF converter', description: 'Convert JPG photos to lossless TIFF. For printing and archiving.' },
      de: { slug: 'jpg-zu-tiff-konverter', title: 'JPG zu TIFF Konverter', description: 'JPG-Fotos in verlustfreies TIFF umwandeln. Zum Drucken und Archivieren.' },
      es: { slug: 'convertidor-jpg-a-tiff', title: 'Convertidor JPG a TIFF', description: 'Convierte fotos JPG a TIFF sin perdida. Para impresion y archivado.' },
      fr: { slug: 'convertisseur-jpg-en-tiff', title: 'Convertisseur JPG en TIFF', description: 'Convertissez les photos JPG en TIFF sans perte. Pour l\'impression et l\'archivage.' },
      pt: { slug: 'conversor-jpg-para-tiff', title: 'Conversor JPG para TIFF', description: 'Converta fotos JPG para TIFF sem perdas. Para impressao e arquivamento.' },
      it: { slug: 'convertitore-jpg-in-tiff', title: 'Convertitore JPG in TIFF', description: 'Converti foto JPG in TIFF lossless. Per stampa e archiviazione.' },
      ro: { slug: 'convertor-jpg-in-tiff', title: 'Convertor JPG in TIFF', description: 'Converteste fotografii JPG in TIFF fara pierderi. Pentru tiparire si arhivare.' },
      nl: { slug: 'jpg-naar-tiff-converter', title: 'JPG naar TIFF converter', description: 'Converteer JPG-foto\'s naar lossless TIFF. Voor afdrukken en archivering.' },
      hu: { slug: 'jpg-tiff-konverter', title: 'JPG TIFF konverter', description: 'JPG fotok konvertalasa veszteségmentes TIFF-re. Nyomtatashoz es archivalashoz.' },
      cs: { slug: 'prevodnik-jpg-na-tiff', title: 'Převodník JPG na TIFF', description: 'Prevedte fotky JPG na bezztratovy TIFF. Pro tisk a archivaci.' },
      sv: { slug: 'jpg-till-tiff-konverterare', title: 'JPG till TIFF-konverterare', description: 'Konvertera JPG-foton till forlustfritt TIFF. For utskrift och arkivering.' },
      da: { slug: 'jpg-til-tiff-konverter', title: 'JPG til TIFF-konverter', description: 'Konverter JPG-fotos til tabsfrit TIFF. Til udskrivning og arkivering.' },
      no: { slug: 'jpg-til-tiff-konverterer', title: 'JPG til TIFF-konverterer', description: 'Konverter JPG-bilder til tapsfritt TIFF. For utskrift og arkivering.' },
      fi: { slug: 'jpg-tiff-muunnin', title: 'JPG TIFF -muunnin', description: 'Muunna JPG-kuvat haviottomaan TIFF-muotoon. Tulostukseen ja arkistointiin.' },
      el: { slug: 'metatropeas-jpg-se-tiff', title: 'Μετατροπέας JPG σε TIFF', description: 'Μετατρεψτε φωτογραφιες JPG σε TIFF χωρις απωλειες. Για εκτυπωση και αρχειοθετηση.' },
    },
  },
  {
    key: 'pngToTiff',
    locales: {
      en: { slug: 'png-to-tiff-converter', title: 'PNG to TIFF converter', description: 'Convert PNG graphics to professional TIFF format.' },
      de: { slug: 'png-zu-tiff-konverter', title: 'PNG zu TIFF Konverter', description: 'PNG-Grafiken in professionelles TIFF-Format umwandeln.' },
      es: { slug: 'convertidor-png-a-tiff', title: 'Convertidor PNG a TIFF', description: 'Convierte graficos PNG a formato TIFF profesional.' },
      fr: { slug: 'convertisseur-png-en-tiff', title: 'Convertisseur PNG en TIFF', description: 'Convertissez les graphiques PNG en format TIFF professionnel.' },
      pt: { slug: 'conversor-png-para-tiff', title: 'Conversor PNG para TIFF', description: 'Converta graficos PNG para formato TIFF profissional.' },
      it: { slug: 'convertitore-png-in-tiff', title: 'Convertitore PNG in TIFF', description: 'Converti grafiche PNG in formato TIFF professionale.' },
      ro: { slug: 'convertor-png-in-tiff', title: 'Convertor PNG in TIFF', description: 'Converteste grafice PNG in format TIFF profesional.' },
      nl: { slug: 'png-naar-tiff-converter', title: 'PNG naar TIFF converter', description: 'Converteer PNG-afbeeldingen naar professioneel TIFF-formaat.' },
      hu: { slug: 'png-tiff-konverter', title: 'PNG TIFF konverter', description: 'PNG grafika konvertalasa professzionalis TIFF formatumra.' },
      cs: { slug: 'prevodnik-png-na-tiff', title: 'Převodník PNG na TIFF', description: 'Prevedte grafiku PNG na profesionalni format TIFF.' },
      sv: { slug: 'png-till-tiff-konverterare', title: 'PNG till TIFF-konverterare', description: 'Konvertera PNG-grafik till professionellt TIFF-format.' },
      da: { slug: 'png-til-tiff-konverter', title: 'PNG til TIFF-konverter', description: 'Konverter PNG-grafik til professionelt TIFF-format.' },
      no: { slug: 'png-til-tiff-konverterer', title: 'PNG til TIFF-konverterer', description: 'Konverter PNG-grafikk til profesjonelt TIFF-format.' },
      fi: { slug: 'png-tiff-muunnin', title: 'PNG TIFF -muunnin', description: 'Muunna PNG-grafiikat ammattimaiseen TIFF-muotoon.' },
      el: { slug: 'metatropeas-png-se-tiff', title: 'Μετατροπέας PNG σε TIFF', description: 'Μετατρεψτε γραφικα PNG σε επαγγελματικη μορφη TIFF.' },
    },
  },
  {
    key: 'webpToTiff',
    locales: {
      en: { slug: 'webp-to-tiff-converter', title: 'WebP to TIFF converter', description: 'Convert WebP images to professional TIFF for printing and archiving.' },
      de: { slug: 'webp-zu-tiff-konverter', title: 'WebP zu TIFF Konverter', description: 'WebP-Bilder in professionelles TIFF fur Druck und Archivierung umwandeln.' },
      es: { slug: 'convertidor-webp-a-tiff', title: 'Convertidor WebP a TIFF', description: 'Convierte imagenes WebP a TIFF profesional para impresion y archivado.' },
      fr: { slug: 'convertisseur-webp-en-tiff', title: 'Convertisseur WebP en TIFF', description: 'Convertissez les images WebP en TIFF professionnel pour impression et archivage.' },
      pt: { slug: 'conversor-webp-para-tiff', title: 'Conversor WebP para TIFF', description: 'Converta imagens WebP para TIFF profissional para impressao e arquivo.' },
      it: { slug: 'convertitore-webp-in-tiff', title: 'Convertitore WebP in TIFF', description: 'Converti immagini WebP in TIFF professionale per stampa e archiviazione.' },
      ro: { slug: 'convertor-webp-in-tiff', title: 'Convertor WebP in TIFF', description: 'Converteste imagini WebP in TIFF profesional pentru tiparire si arhivare.' },
      nl: { slug: 'webp-naar-tiff-converter', title: 'WebP naar TIFF converter', description: 'Converteer WebP-afbeeldingen naar professioneel TIFF voor afdrukken en archivering.' },
      hu: { slug: 'webp-tiff-konverter', title: 'WebP TIFF konverter', description: 'WebP kepek konvertalasa professzionalis TIFF-re nyomtatashoz es archivalashoz.' },
      cs: { slug: 'prevodnik-webp-na-tiff', title: 'Převodník WebP na TIFF', description: 'Prevedte obrazky WebP na profesionalni TIFF pro tisk a archivaci.' },
      sv: { slug: 'webp-till-tiff-konverterare', title: 'WebP till TIFF-konverterare', description: 'Konvertera WebP-bilder till professionellt TIFF for utskrift och arkivering.' },
      da: { slug: 'webp-til-tiff-konverter', title: 'WebP til TIFF-konverter', description: 'Konverter WebP-billeder til professionelt TIFF til udskrivning og arkivering.' },
      no: { slug: 'webp-til-tiff-konverterer', title: 'WebP til TIFF-konverterer', description: 'Konverter WebP-bilder til profesjonelt TIFF for utskrift og arkivering.' },
      fi: { slug: 'webp-tiff-muunnin', title: 'WebP TIFF -muunnin', description: 'Muunna WebP-kuvat ammattimaiseen TIFF-muotoon tulostukseen ja arkistointiin.' },
      el: { slug: 'metatropeas-webp-se-tiff', title: 'Μετατροπέας WebP σε TIFF', description: 'Μετατρεψτε εικονες WebP σε επαγγελματικο TIFF για εκτυπωση και αρχειοθετηση.' },
    },
  },
  {
    key: 'svgToTiff',
    locales: {
      en: { slug: 'svg-to-tiff-converter', title: 'SVG to TIFF converter', description: 'Convert vector SVG graphics to high-quality TIFF raster.' },
      de: { slug: 'svg-zu-tiff-konverter', title: 'SVG zu TIFF Konverter', description: 'Vektor-SVG-Grafiken in hochwertiges TIFF-Raster umwandeln.' },
      es: { slug: 'convertidor-svg-a-tiff', title: 'Convertidor SVG a TIFF', description: 'Convierte graficos vectoriales SVG a raster TIFF de alta calidad.' },
      fr: { slug: 'convertisseur-svg-en-tiff', title: 'Convertisseur SVG en TIFF', description: 'Convertissez les graphiques vectoriels SVG en raster TIFF haute qualite.' },
      pt: { slug: 'conversor-svg-para-tiff', title: 'Conversor SVG para TIFF', description: 'Converta graficos vetoriais SVG para raster TIFF de alta qualidade.' },
      it: { slug: 'convertitore-svg-in-tiff', title: 'Convertitore SVG in TIFF', description: 'Converti grafiche vettoriali SVG in raster TIFF di alta qualita.' },
      ro: { slug: 'convertor-svg-in-tiff', title: 'Convertor SVG in TIFF', description: 'Converteste grafice vectoriale SVG in raster TIFF de inalta calitate.' },
      nl: { slug: 'svg-naar-tiff-converter', title: 'SVG naar TIFF converter', description: 'Converteer vector SVG-afbeeldingen naar hoogwaardig TIFF-raster.' },
      hu: { slug: 'svg-tiff-konverter', title: 'SVG TIFF konverter', description: 'Vektor SVG grafika konvertalasa kiváló minosegu TIFF raszterre.' },
      cs: { slug: 'prevodnik-svg-na-tiff', title: 'Převodník SVG na TIFF', description: 'Prevedte vektorovou grafiku SVG na kvalitni rastrovy TIFF.' },
      sv: { slug: 'svg-till-tiff-konverterare', title: 'SVG till TIFF-konverterare', description: 'Konvertera vektor-SVG-grafik till hogkvalitativt TIFF-raster.' },
      da: { slug: 'svg-til-tiff-konverter', title: 'SVG til TIFF-konverter', description: 'Konverter vektor-SVG-grafik til hojkvalitets TIFF-raster.' },
      no: { slug: 'svg-til-tiff-konverterer', title: 'SVG til TIFF-konverterer', description: 'Konverter vektor-SVG-grafikk til hoykvalitets TIFF-raster.' },
      fi: { slug: 'svg-tiff-muunnin', title: 'SVG TIFF -muunnin', description: 'Muunna vektori-SVG-grafiikat korkealaatuiseen TIFF-rasterimuotoon.' },
      el: { slug: 'metatropeas-svg-se-tiff', title: 'Μετατροπέας SVG σε TIFF', description: 'Μετατρεψτε διανυσματικα γραφικα SVG σε υψηλης ποιοτητας raster TIFF.' },
    },
  },
  {
    key: 'bmpToTiff',
    locales: {
      en: { slug: 'bmp-to-tiff-converter', title: 'BMP to TIFF converter', description: 'Convert BMP files to professional TIFF format for printing.' },
      de: { slug: 'bmp-zu-tiff-konverter', title: 'BMP zu TIFF Konverter', description: 'BMP-Dateien in professionelles TIFF-Format fur den Druck umwandeln.' },
      es: { slug: 'convertidor-bmp-a-tiff', title: 'Convertidor BMP a TIFF', description: 'Convierte archivos BMP a formato TIFF profesional para impresion.' },
      fr: { slug: 'convertisseur-bmp-en-tiff', title: 'Convertisseur BMP en TIFF', description: 'Convertissez les fichiers BMP en format TIFF professionnel pour impression.' },
      pt: { slug: 'conversor-bmp-para-tiff', title: 'Conversor BMP para TIFF', description: 'Converta ficheiros BMP para formato TIFF profissional para impressao.' },
      it: { slug: 'convertitore-bmp-in-tiff', title: 'Convertitore BMP in TIFF', description: 'Converti file BMP in formato TIFF professionale per la stampa.' },
      ro: { slug: 'convertor-bmp-in-tiff', title: 'Convertor BMP in TIFF', description: 'Converteste fisiere BMP in format TIFF profesional pentru tiparire.' },
      nl: { slug: 'bmp-naar-tiff-converter', title: 'BMP naar TIFF converter', description: 'Converteer BMP-bestanden naar professioneel TIFF-formaat voor afdrukken.' },
      hu: { slug: 'bmp-tiff-konverter', title: 'BMP TIFF konverter', description: 'BMP fajlok konvertalasa professzionalis TIFF formatumra nyomtatashoz.' },
      cs: { slug: 'prevodnik-bmp-na-tiff', title: 'Převodník BMP na TIFF', description: 'Prevedte soubory BMP na profesionalni format TIFF pro tisk.' },
      sv: { slug: 'bmp-till-tiff-konverterare', title: 'BMP till TIFF-konverterare', description: 'Konvertera BMP-filer till professionellt TIFF-format for utskrift.' },
      da: { slug: 'bmp-til-tiff-konverter', title: 'BMP til TIFF-konverter', description: 'Konverter BMP-filer til professionelt TIFF-format til udskrivning.' },
      no: { slug: 'bmp-til-tiff-konverterer', title: 'BMP til TIFF-konverterer', description: 'Konverter BMP-filer til profesjonelt TIFF-format for utskrift.' },
      fi: { slug: 'bmp-tiff-muunnin', title: 'BMP TIFF -muunnin', description: 'Muunna BMP-tiedostot ammattimaiseen TIFF-muotoon tulostusta varten.' },
      el: { slug: 'metatropeas-bmp-se-tiff', title: 'Μετατροπέας BMP σε TIFF', description: 'Μετατρεψτε αρχεια BMP σε επαγγελματικη μορφη TIFF για εκτυπωση.' },
    },
  },
  {
    key: 'heicToTiff',
    locales: {
      en: { slug: 'heic-to-tiff-converter', title: 'HEIC to TIFF converter', description: 'Convert iPhone HEIC photos to professional TIFF format.' },
      de: { slug: 'heic-zu-tiff-konverter', title: 'HEIC zu TIFF Konverter', description: 'iPhone HEIC-Fotos in professionelles TIFF-Format umwandeln.' },
      es: { slug: 'convertidor-heic-a-tiff', title: 'Convertidor HEIC a TIFF', description: 'Convierte fotos HEIC del iPhone a formato TIFF profesional.' },
      fr: { slug: 'convertisseur-heic-en-tiff', title: 'Convertisseur HEIC en TIFF', description: 'Convertissez les photos HEIC d\'iPhone en format TIFF professionnel.' },
      pt: { slug: 'conversor-heic-para-tiff', title: 'Conversor HEIC para TIFF', description: 'Converta fotos HEIC do iPhone para formato TIFF profissional.' },
      it: { slug: 'convertitore-heic-in-tiff', title: 'Convertitore HEIC in TIFF', description: 'Converti foto HEIC dell\'iPhone in formato TIFF professionale.' },
      ro: { slug: 'convertor-heic-in-tiff', title: 'Convertor HEIC in TIFF', description: 'Converteste fotografii HEIC de pe iPhone in format TIFF profesional.' },
      nl: { slug: 'heic-naar-tiff-converter', title: 'HEIC naar TIFF converter', description: 'Converteer iPhone HEIC-foto\'s naar professioneel TIFF-formaat.' },
      hu: { slug: 'heic-tiff-konverter', title: 'HEIC TIFF konverter', description: 'iPhone HEIC fotok konvertalasa professzionalis TIFF formatumra.' },
      cs: { slug: 'prevodnik-heic-na-tiff', title: 'Převodník HEIC na TIFF', description: 'Prevedte fotky HEIC z iPhonu na profesionalni format TIFF.' },
      sv: { slug: 'heic-till-tiff-konverterare', title: 'HEIC till TIFF-konverterare', description: 'Konvertera iPhone HEIC-foton till professionellt TIFF-format.' },
      da: { slug: 'heic-til-tiff-konverter', title: 'HEIC til TIFF-konverter', description: 'Konverter iPhone HEIC-fotos til professionelt TIFF-format.' },
      no: { slug: 'heic-til-tiff-konverterer', title: 'HEIC til TIFF-konverterer', description: 'Konverter iPhone HEIC-bilder til profesjonelt TIFF-format.' },
      fi: { slug: 'heic-tiff-muunnin', title: 'HEIC TIFF -muunnin', description: 'Muunna iPhonen HEIC-kuvat ammattimaiseen TIFF-muotoon.' },
      el: { slug: 'metatropeas-heic-se-tiff', title: 'Μετατροπέας HEIC σε TIFF', description: 'Μετατρεψτε φωτογραφιες HEIC του iPhone σε επαγγελματικη μορφη TIFF.' },
    },
  },
];

// Read registry
let code = fs.readFileSync(registryPath, 'utf8');

for (const conv of converters) {
  // Find the entry by key
  const keyPattern = `key: '${conv.key}',`;
  const idx = code.indexOf(keyPattern);
  if (idx === -1) {
    console.log('⚠ Not found:', conv.key);
    continue;
  }

  // Find `locales: {` after this key
  const localesStart = code.indexOf('locales: {', idx);
  if (localesStart === -1) continue;

  // Find the pl: { ... }, line
  const plLine = code.indexOf('pl: {', localesStart);
  if (plLine === -1) continue;

  // Find the closing `},` of locales (the `},` followed by `\n  },` for the tool entry)
  const plLineEnd = code.indexOf('\n', plLine);
  const closingLocales = code.indexOf('\n    },', plLineEnd);
  if (closingLocales === -1) continue;

  // Build the new locale lines
  const localeEntries = Object.entries(conv.locales)
    .map(([loc, data]) => {
      const desc = data.description.replace(/'/g, "\\'");
      const title = data.title.replace(/'/g, "\\'");
      const slug = data.slug;
      return `      ${loc}: { slug: '${slug}', title: '${title}', description: '${desc}' },`;
    })
    .join('\n');

  // Insert after the pl line
  code = code.slice(0, plLineEnd + 1) + localeEntries + '\n' + code.slice(plLineEnd + 1);

  console.log('✓', conv.key);
}

fs.writeFileSync(registryPath, code, 'utf8');
console.log('\n✅ Registry updated with 15 locales for 20 converters');
