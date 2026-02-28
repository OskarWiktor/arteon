/**
 * Update all 15 non-PL hub pages:
 * 1. Remove old combined converter card from "Images" section
 * 2. Insert new "Converters" section with 12 cards
 * 3. Update schema (numberOfItems + 12 new entries)
 * 4. Update metadata title/description
 * 5. Update HeroBanner, SectionInfo, FAQ
 */
const fs = require('fs');
const path = require('path');

// ---------------------------------------------------------------------------
// Converter tool data from registry (ordered as on PL hub)
// ---------------------------------------------------------------------------
const CONVERTER_KEYS = [
  'jpgToWebpSimple', 'pngToJpg', 'webpToJpg', 'pngToWebpSimple',
  'jpgToPng', 'webpToPng', 'svgToPng', 'svgToJpg',
  'bmpToJpg', 'bmpToPng', 'gifToPng', 'gifToJpg',
];

const CONVERTERS = {
  jpgToWebpSimple: {
    desktopOnly: true,
    locales: {
      en: { slug: 'jpg-to-webp-converter', title: 'JPG to WebP converter', desc: 'Convert JPG photos to lightweight WebP. Cut image weight by up to 35% for faster page loads.' },
      es: { slug: 'convertidor-jpg-a-webp', title: 'Convertidor JPG a WebP', desc: 'Convierte fotos JPG a WebP ligero. Reduce el peso de las imágenes hasta un 35%.' },
      fr: { slug: 'convertisseur-jpg-en-webp', title: 'Convertisseur JPG en WebP', desc: 'Convertissez vos photos JPG en WebP léger. Réduisez le poids des images jusqu\'à 35%.' },
      de: { slug: 'jpg-zu-webp-konverter', title: 'JPG zu WebP Konverter', desc: 'JPG-Fotos in leichtes WebP umwandeln. Bildgewicht um bis zu 35% reduzieren.' },
      pt: { slug: 'conversor-jpg-para-webp', title: 'Conversor JPG para WebP', desc: 'Converta fotos JPG para WebP leve. Reduza o peso das imagens até 35%.' },
      it: { slug: 'convertitore-jpg-in-webp', title: 'Convertitore JPG in WebP', desc: 'Converti foto JPG in WebP leggero. Riduci il peso delle immagini fino al 35%.' },
      ro: { slug: 'convertor-jpg-in-webp', title: 'Convertor JPG în WebP', desc: 'Convertește fotografii JPG în WebP ușor. Reducere de până la 35%.' },
      nl: { slug: 'jpg-naar-webp-converter', title: 'JPG naar WebP converter', desc: 'Converteer JPG-foto\'s naar lichtgewicht WebP. Bespaar tot 35% bestandsgrootte.' },
      hu: { slug: 'jpg-webp-konverter', title: 'JPG WebP konverter', desc: 'JPG fotók konvertálása könnyű WebP-re. Képméret csökkentése akár 35%-kal.' },
      cs: { slug: 'prevodnik-jpg-na-webp', title: 'Převodník JPG na WebP', desc: 'Převeďte fotky JPG na lehké WebP. Snižte váhu obrázků až o 35%.' },
      sv: { slug: 'jpg-till-webp-konverterare', title: 'JPG till WebP-konverterare', desc: 'Konvertera JPG-foton till lättvikts-WebP. Spara upp till 35% filstorlek.' },
      da: { slug: 'jpg-til-webp-konverter', title: 'JPG til WebP-konverter', desc: 'Konvertér JPG-fotos til let WebP. Spar op til 35% filstørrelse.' },
      no: { slug: 'jpg-til-webp-konverterer', title: 'JPG til WebP-konverterer', desc: 'Konverter JPG-bilder til lett WebP. Spar opptil 35% filstørrelse.' },
      fi: { slug: 'jpg-webp-muunnin', title: 'JPG WebP -muunnin', desc: 'Muunna JPG-valokuvat kevyeen WebP-muotoon. Pienennä tiedostokokoa jopa 35%.' },
      el: { slug: 'metatropeas-jpg-se-webp', title: 'Μετατροπέας JPG σε WebP', desc: 'Μετατρέψτε φωτογραφίες JPG σε ελαφρύ WebP. Μείωση βάρους έως 35%.' },
    },
  },
  pngToJpg: {
    desktopOnly: false,
    locales: {
      en: { slug: 'png-to-jpg-converter', title: 'PNG to JPG converter', desc: 'Convert PNG files to JPG in your browser. No file limits, no signup, no server uploads.' },
      es: { slug: 'convertidor-png-a-jpg', title: 'Convertidor PNG a JPG', desc: 'Convierte archivos PNG a JPG en el navegador. Sin límite de archivos, sin registro.' },
      fr: { slug: 'convertisseur-png-en-jpg', title: 'Convertisseur PNG en JPG', desc: 'Convertissez vos fichiers PNG en JPG dans le navigateur. Sans limite, sans inscription.' },
      de: { slug: 'png-zu-jpg-konverter', title: 'PNG zu JPG Konverter', desc: 'PNG-Dateien im Browser in JPG umwandeln. Ohne Dateilimit, ohne Registrierung.' },
      pt: { slug: 'conversor-png-para-jpg', title: 'Conversor PNG para JPG', desc: 'Converta ficheiros PNG para JPG no navegador. Sem limite de ficheiros, sem registo.' },
      it: { slug: 'convertitore-png-in-jpg', title: 'Convertitore PNG in JPG', desc: 'Converti file PNG in JPG nel browser. Senza limiti, senza registrazione.' },
      ro: { slug: 'convertor-png-in-jpg', title: 'Convertor PNG în JPG', desc: 'Convertește fișiere PNG în JPG în browser. Fără limită, fără înregistrare.' },
      nl: { slug: 'png-naar-jpg-converter', title: 'PNG naar JPG converter', desc: 'Converteer PNG-bestanden naar JPG in de browser. Zonder limiet, zonder registratie.' },
      hu: { slug: 'prevodnik-png-na-jpg', title: 'PNG JPG konverter', desc: 'PNG fájlok konvertálása JPG-re a böngészőben. Korlátlan, regisztráció nélkül.' },
      cs: { slug: 'prevodnik-png-na-jpg', title: 'Převodník PNG na JPG', desc: 'Převeďte soubory PNG na JPG v prohlížeči. Bez limitu, bez registrace.' },
      sv: { slug: 'png-till-jpg-konverterare', title: 'PNG till JPG-konverterare', desc: 'Konvertera PNG-filer till JPG i webbläsaren. Utan begränsning, utan registrering.' },
      da: { slug: 'png-til-jpg-konverter', title: 'PNG til JPG-konverter', desc: 'Konvertér PNG-filer til JPG i browseren. Uden begrænsning, uden registrering.' },
      no: { slug: 'png-til-jpg-konverterer', title: 'PNG til JPG-konverterer', desc: 'Konverter PNG-filer til JPG i nettleseren. Uten begrensning, uten registrering.' },
      fi: { slug: 'png-jpg-muunnin', title: 'PNG JPG -muunnin', desc: 'Muunna PNG-tiedostot JPG-muotoon selaimessa. Rajaton, ilman rekisteröitymistä.' },
      el: { slug: 'metatropeas-png-se-jpg', title: 'Μετατροπέας PNG σε JPG', desc: 'Μετατρέψτε αρχεία PNG σε JPG στο πρόγραμμα περιήγησης. Χωρίς όριο, χωρίς εγγραφή.' },
    },
  },
  webpToJpg: {
    desktopOnly: false,
    locales: {
      en: { slug: 'webp-to-jpg-converter', title: 'WebP to JPG converter', desc: 'Convert WebP files to universally compatible JPG. Works in every app and platform.' },
      es: { slug: 'convertidor-webp-a-jpg', title: 'Convertidor WebP a JPG', desc: 'Convierte archivos WebP a JPG compatible con cualquier programa y plataforma.' },
      fr: { slug: 'convertisseur-webp-en-jpg', title: 'Convertisseur WebP en JPG', desc: 'Convertissez vos fichiers WebP en JPG universel. Compatible avec tous les logiciels.' },
      de: { slug: 'webp-zu-jpg-konverter', title: 'WebP zu JPG Konverter', desc: 'WebP-Dateien in universell kompatibles JPG umwandeln. Funktioniert überall.' },
      pt: { slug: 'conversor-webp-para-jpg', title: 'Conversor WebP para JPG', desc: 'Converta ficheiros WebP para JPG compatível com tudo. Sem limites, sem registo.' },
      it: { slug: 'convertitore-webp-in-jpg', title: 'Convertitore WebP in JPG', desc: 'Converti file WebP in JPG compatibile ovunque. Senza limiti, senza registrazione.' },
      ro: { slug: 'convertor-webp-in-jpg', title: 'Convertor WebP în JPG', desc: 'Convertește fișiere WebP în JPG compatibil universal.' },
      nl: { slug: 'webp-naar-jpg-converter', title: 'WebP naar JPG converter', desc: 'Converteer WebP-bestanden naar universeel compatibel JPG.' },
      hu: { slug: 'webp-jpg-konverter', title: 'WebP JPG konverter', desc: 'WebP fájlok konvertálása univerzálisan kompatibilis JPG-re.' },
      cs: { slug: 'prevodnik-webp-na-jpg', title: 'Převodník WebP na JPG', desc: 'Převeďte soubory WebP na univerzálně kompatibilní JPG.' },
      sv: { slug: 'webp-till-jpg-konverterare', title: 'WebP till JPG-konverterare', desc: 'Konvertera WebP-filer till universellt kompatibelt JPG.' },
      da: { slug: 'webp-til-jpg-konverter', title: 'WebP til JPG-konverter', desc: 'Konvertér WebP-filer til universelt kompatibelt JPG.' },
      no: { slug: 'webp-til-jpg-konverterer', title: 'WebP til JPG-konverterer', desc: 'Konverter WebP-filer til universelt kompatibelt JPG.' },
      fi: { slug: 'webp-jpg-muunnin', title: 'WebP JPG -muunnin', desc: 'Muunna WebP-tiedostot yleisesti yhteensopivaan JPG-muotoon.' },
      el: { slug: 'metatropeas-webp-se-jpg', title: 'Μετατροπέας WebP σε JPG', desc: 'Μετατρέψτε αρχεία WebP σε καθολικά συμβατό JPG.' },
    },
  },
  pngToWebpSimple: {
    desktopOnly: true,
    locales: {
      en: { slug: 'png-to-webp-converter', title: 'PNG to WebP converter', desc: 'Convert PNG graphics to WebP. Smaller files while preserving transparency.' },
      es: { slug: 'convertidor-png-a-webp', title: 'Convertidor PNG a WebP', desc: 'Convierte gráficos PNG a WebP. Archivos más pequeños conservando la transparencia.' },
      fr: { slug: 'convertisseur-png-en-webp', title: 'Convertisseur PNG en WebP', desc: 'Convertissez vos graphiques PNG en WebP. Fichiers réduits, transparence préservée.' },
      de: { slug: 'png-zu-webp-konverter', title: 'PNG zu WebP Konverter', desc: 'PNG-Grafiken in WebP umwandeln. Kleinere Dateien bei erhaltener Transparenz.' },
      pt: { slug: 'conversor-png-para-webp', title: 'Conversor PNG para WebP', desc: 'Converta gráficos PNG para WebP. Ficheiros menores mantendo a transparência.' },
      it: { slug: 'convertitore-png-in-webp', title: 'Convertitore PNG in WebP', desc: 'Converti grafiche PNG in WebP. File più piccoli mantenendo la trasparenza.' },
      ro: { slug: 'convertor-png-in-webp', title: 'Convertor PNG în WebP', desc: 'Convertește grafice PNG în WebP. Fișiere mai mici păstrând transparența.' },
      nl: { slug: 'png-naar-webp-converter', title: 'PNG naar WebP converter', desc: 'Converteer PNG-afbeeldingen naar WebP. Kleinere bestanden met behoud van transparantie.' },
      hu: { slug: 'png-webp-konverter', title: 'PNG WebP konverter', desc: 'PNG grafikák konvertálása WebP-re. Kisebb fájlok az átlátszóság megőrzésével.' },
      cs: { slug: 'prevodnik-png-na-webp', title: 'Převodník PNG na WebP', desc: 'Převeďte grafiku PNG na WebP. Menší soubory se zachováním průhlednosti.' },
      sv: { slug: 'png-till-webp-konverterare', title: 'PNG till WebP-konverterare', desc: 'Konvertera PNG-bilder till WebP. Mindre filer med bibehållen transparens.' },
      da: { slug: 'png-til-webp-konverter', title: 'PNG til WebP-konverter', desc: 'Konvertér PNG-grafik til WebP. Mindre filer med bevaret gennemsigtighed.' },
      no: { slug: 'png-til-webp-konverterer', title: 'PNG til WebP-konverterer', desc: 'Konverter PNG-grafikk til WebP. Mindre filer med bevart gjennomsiktighet.' },
      fi: { slug: 'png-webp-muunnin', title: 'PNG WebP -muunnin', desc: 'Muunna PNG-grafiikat WebP-muotoon. Pienemmät tiedostot läpinäkyvyys säilyttäen.' },
      el: { slug: 'metatropeas-png-se-webp', title: 'Μετατροπέας PNG σε WebP', desc: 'Μετατρέψτε γραφικά PNG σε WebP. Μικρότερα αρχεία διατηρώντας τη διαφάνεια.' },
    },
  },
  jpgToPng: {
    desktopOnly: false,
    locales: {
      en: { slug: 'jpg-to-png-converter', title: 'JPG to PNG converter', desc: 'Convert JPG images to lossless PNG. Runs locally in your browser, unlimited files.' },
      es: { slug: 'convertidor-jpg-a-png', title: 'Convertidor JPG a PNG', desc: 'Convierte imágenes JPG a PNG sin pérdida. Conversión local en el navegador, sin límites.' },
      fr: { slug: 'convertisseur-jpg-en-png', title: 'Convertisseur JPG en PNG', desc: 'Convertissez vos images JPG en PNG sans perte. Traitement local, fichiers illimités.' },
      de: { slug: 'jpg-zu-png-konverter', title: 'JPG zu PNG Konverter', desc: 'JPG-Bilder verlustfrei in PNG umwandeln. Lokale Verarbeitung, unbegrenzte Dateien.' },
      pt: { slug: 'conversor-jpg-para-png', title: 'Conversor JPG para PNG', desc: 'Converta imagens JPG para PNG sem perdas. Conversão local no navegador.' },
      it: { slug: 'convertitore-jpg-in-png', title: 'Convertitore JPG in PNG', desc: 'Converti immagini JPG in PNG senza perdita. Conversione locale nel browser.' },
      ro: { slug: 'convertor-jpg-in-png', title: 'Convertor JPG în PNG', desc: 'Convertește imagini JPG în PNG fără pierderi. Conversie locală în browser.' },
      nl: { slug: 'jpg-naar-png-converter', title: 'JPG naar PNG converter', desc: 'Converteer JPG-afbeeldingen naar verliesvrij PNG. Lokale verwerking in de browser.' },
      hu: { slug: 'jpg-png-konverter', title: 'JPG PNG konverter', desc: 'JPG képek konvertálása veszteségmentes PNG-re. Helyi feldolgozás a böngészőben.' },
      cs: { slug: 'prevodnik-jpg-na-png', title: 'Převodník JPG na PNG', desc: 'Převeďte obrázky JPG na bezeztrátové PNG. Lokální zpracování v prohlížeči.' },
      sv: { slug: 'jpg-till-png-konverterare', title: 'JPG till PNG-konverterare', desc: 'Konvertera JPG-bilder till förlustfritt PNG. Lokal konvertering i webbläsaren.' },
      da: { slug: 'jpg-til-png-konverter', title: 'JPG til PNG-konverter', desc: 'Konvertér JPG-billeder til tabsfrit PNG. Lokal konvertering i browseren.' },
      no: { slug: 'jpg-til-png-konverterer', title: 'JPG til PNG-konverterer', desc: 'Konverter JPG-bilder til tapsfritt PNG. Lokal konvertering i nettleseren.' },
      fi: { slug: 'jpg-png-muunnin', title: 'JPG PNG -muunnin', desc: 'Muunna JPG-kuvat häviöttömään PNG-muotoon. Paikallinen käsittely selaimessa.' },
      el: { slug: 'metatropeas-jpg-se-png', title: 'Μετατροπέας JPG σε PNG', desc: 'Μετατρέψτε εικόνες JPG σε PNG χωρίς απώλειες. Τοπική επεξεργασία στο πρόγραμμα περιήγησης.' },
    },
  },
  webpToPng: {
    desktopOnly: false,
    locales: {
      en: { slug: 'webp-to-png-converter', title: 'WebP to PNG converter', desc: 'Convert WebP images to lossless PNG. Local conversion, nothing sent to any server.' },
      es: { slug: 'convertidor-webp-a-png', title: 'Convertidor WebP a PNG', desc: 'Convierte imágenes WebP a PNG sin pérdida. Conversión local, nada se envía al servidor.' },
      fr: { slug: 'convertisseur-webp-en-png', title: 'Convertisseur WebP en PNG', desc: 'Convertissez vos images WebP en PNG sans perte. Traitement local.' },
      de: { slug: 'webp-zu-png-konverter', title: 'WebP zu PNG Konverter', desc: 'WebP-Bilder verlustfrei in PNG umwandeln. Lokale Konvertierung, kein Server-Upload.' },
      pt: { slug: 'conversor-webp-para-png', title: 'Conversor WebP para PNG', desc: 'Converta imagens WebP para PNG sem perdas. Conversão local, nada enviado ao servidor.' },
      it: { slug: 'convertitore-webp-in-png', title: 'Convertitore WebP in PNG', desc: 'Converti immagini WebP in PNG senza perdita. Conversione locale, niente server.' },
      ro: { slug: 'convertor-webp-in-png', title: 'Convertor WebP în PNG', desc: 'Convertește imagini WebP în PNG fără pierderi. Conversie locală.' },
      nl: { slug: 'webp-naar-png-converter', title: 'WebP naar PNG converter', desc: 'Converteer WebP-afbeeldingen naar verliesvrij PNG. Lokale verwerking.' },
      hu: { slug: 'webp-png-konverter', title: 'WebP PNG konverter', desc: 'WebP képek konvertálása veszteségmentes PNG-re. Helyi feldolgozás.' },
      cs: { slug: 'prevodnik-webp-na-png', title: 'Převodník WebP na PNG', desc: 'Převeďte obrázky WebP na bezeztrátové PNG. Lokální zpracování.' },
      sv: { slug: 'webp-till-png-konverterare', title: 'WebP till PNG-konverterare', desc: 'Konvertera WebP-bilder till förlustfritt PNG. Lokal konvertering.' },
      da: { slug: 'webp-til-png-konverter', title: 'WebP til PNG-konverter', desc: 'Konvertér WebP-billeder til tabsfrit PNG. Lokal konvertering.' },
      no: { slug: 'webp-til-png-konverterer', title: 'WebP til PNG-konverterer', desc: 'Konverter WebP-bilder til tapsfritt PNG. Lokal konvertering.' },
      fi: { slug: 'webp-png-muunnin', title: 'WebP PNG -muunnin', desc: 'Muunna WebP-kuvat häviöttömään PNG-muotoon. Paikallinen käsittely.' },
      el: { slug: 'metatropeas-webp-se-png', title: 'Μετατροπέας WebP σε PNG', desc: 'Μετατρέψτε εικόνες WebP σε PNG χωρίς απώλειες. Τοπική μετατροπή.' },
    },
  },
  svgToPng: {
    desktopOnly: false,
    locales: {
      en: { slug: 'svg-to-png-converter', title: 'SVG to PNG converter', desc: 'Convert vector SVG graphics to raster PNG. Ideal for documents and social media.' },
      es: { slug: 'convertidor-svg-a-png', title: 'Convertidor SVG a PNG', desc: 'Convierte gráficos vectoriales SVG a PNG. Ideal para documentos y redes sociales.' },
      fr: { slug: 'convertisseur-svg-en-png', title: 'Convertisseur SVG en PNG', desc: 'Convertissez vos graphiques vectoriels SVG en PNG. Idéal pour documents et réseaux sociaux.' },
      de: { slug: 'svg-zu-png-konverter', title: 'SVG zu PNG Konverter', desc: 'SVG-Vektorgrafiken in Raster-PNG umwandeln. Ideal für Dokumente und Social Media.' },
      pt: { slug: 'conversor-svg-para-png', title: 'Conversor SVG para PNG', desc: 'Converta gráficos vetoriais SVG para PNG. Ideal para documentos e redes sociais.' },
      it: { slug: 'convertitore-svg-in-png', title: 'Convertitore SVG in PNG', desc: 'Converti grafiche vettoriali SVG in PNG. Ideale per documenti e social media.' },
      ro: { slug: 'convertor-svg-in-png', title: 'Convertor SVG în PNG', desc: 'Convertește grafice vectoriale SVG în PNG. Ideal pentru documente și social media.' },
      nl: { slug: 'svg-naar-png-converter', title: 'SVG naar PNG converter', desc: 'Converteer SVG-vectorafbeeldingen naar PNG. Ideaal voor documenten en social media.' },
      hu: { slug: 'svg-png-konverter', title: 'SVG PNG konverter', desc: 'SVG vektorgrafika konvertálása PNG-re. Ideális dokumentumokhoz és közösségi médiához.' },
      cs: { slug: 'prevodnik-svg-na-png', title: 'Převodník SVG na PNG', desc: 'Převeďte vektorovou grafiku SVG na rastrové PNG. Ideální pro dokumenty a sociální sítě.' },
      sv: { slug: 'svg-till-png-konverterare', title: 'SVG till PNG-konverterare', desc: 'Konvertera SVG-vektorgrafik till PNG. Perfekt för dokument och sociala medier.' },
      da: { slug: 'svg-til-png-konverter', title: 'SVG til PNG-konverter', desc: 'Konvertér SVG-vektorgrafik til PNG. Ideel til dokumenter og sociale medier.' },
      no: { slug: 'svg-til-png-konverterer', title: 'SVG til PNG-konverterer', desc: 'Konverter SVG-vektorgrafikk til PNG. Ideell for dokumenter og sosiale medier.' },
      fi: { slug: 'svg-png-muunnin', title: 'SVG PNG -muunnin', desc: 'Muunna SVG-vektorigrafiikka PNG-muotoon. Ihanteellinen dokumentteihin ja sosiaaliseen mediaan.' },
      el: { slug: 'metatropeas-svg-se-png', title: 'Μετατροπέας SVG σε PNG', desc: 'Μετατρέψτε διανυσματικά SVG σε PNG. Ιδανικό για έγγραφα και κοινωνικά δίκτυα.' },
    },
  },
  svgToJpg: {
    desktopOnly: false,
    locales: {
      en: { slug: 'svg-to-jpg-converter', title: 'SVG to JPG converter', desc: 'Convert vector SVG files to compact JPG. Smaller file size, full compatibility.' },
      es: { slug: 'convertidor-svg-a-jpg', title: 'Convertidor SVG a JPG', desc: 'Convierte gráficos SVG a JPG compacto. Archivo más pequeño, compatibilidad total.' },
      fr: { slug: 'convertisseur-svg-en-jpg', title: 'Convertisseur SVG en JPG', desc: 'Convertissez vos graphiques SVG en JPG compact. Fichier réduit, compatibilité totale.' },
      de: { slug: 'svg-zu-jpg-konverter', title: 'SVG zu JPG Konverter', desc: 'SVG-Vektordateien in kompaktes JPG umwandeln. Kleinere Datei, volle Kompatibilität.' },
      pt: { slug: 'conversor-svg-para-jpg', title: 'Conversor SVG para JPG', desc: 'Converta gráficos SVG para JPG compacto. Ficheiro menor, compatibilidade total.' },
      it: { slug: 'convertitore-svg-in-jpg', title: 'Convertitore SVG in JPG', desc: 'Converti grafiche SVG in JPG compatto. File più piccolo, compatibilità totale.' },
      ro: { slug: 'convertor-svg-in-jpg', title: 'Convertor SVG în JPG', desc: 'Convertește grafice SVG în JPG compact. Fișier mai mic, compatibilitate totală.' },
      nl: { slug: 'svg-naar-jpg-converter', title: 'SVG naar JPG converter', desc: 'Converteer SVG-afbeeldingen naar compact JPG. Kleiner bestand, volledige compatibiliteit.' },
      hu: { slug: 'svg-jpg-konverter', title: 'SVG JPG konverter', desc: 'SVG grafikák konvertálása kompakt JPG-re. Kisebb fájl, teljes kompatibilitás.' },
      cs: { slug: 'prevodnik-svg-na-jpg', title: 'Převodník SVG na JPG', desc: 'Převeďte grafiku SVG na kompaktní JPG. Menší soubor, plná kompatibilita.' },
      sv: { slug: 'svg-till-jpg-konverterare', title: 'SVG till JPG-konverterare', desc: 'Konvertera SVG-filer till kompakt JPG. Mindre fil, full kompatibilitet.' },
      da: { slug: 'svg-til-jpg-konverter', title: 'SVG til JPG-konverter', desc: 'Konvertér SVG-grafik til kompakt JPG. Mindre fil, fuld kompatibilitet.' },
      no: { slug: 'svg-til-jpg-konverterer', title: 'SVG til JPG-konverterer', desc: 'Konverter SVG-grafikk til kompakt JPG. Mindre fil, full kompatibilitet.' },
      fi: { slug: 'svg-jpg-muunnin', title: 'SVG JPG -muunnin', desc: 'Muunna SVG-grafiikat kompaktiin JPG-muotoon. Pienempi tiedosto, täysi yhteensopivuus.' },
      el: { slug: 'metatropeas-svg-se-jpg', title: 'Μετατροπέας SVG σε JPG', desc: 'Μετατρέψτε γραφικά SVG σε συμπαγές JPG. Μικρότερο αρχείο, πλήρης συμβατότητα.' },
    },
  },
  bmpToJpg: {
    desktopOnly: false,
    locales: {
      en: { slug: 'bmp-to-jpg-converter', title: 'BMP to JPG converter', desc: 'Convert uncompressed BMP files to lightweight JPG. Reduce file size without quality loss.' },
      es: { slug: 'convertidor-bmp-a-jpg', title: 'Convertidor BMP a JPG', desc: 'Convierte archivos BMP sin comprimir a JPG ligero. Reducción drástica del tamaño.' },
      fr: { slug: 'convertisseur-bmp-en-jpg', title: 'Convertisseur BMP en JPG', desc: 'Convertissez vos fichiers BMP non compressés en JPG léger. Réduction massive de taille.' },
      de: { slug: 'bmp-zu-jpg-konverter', title: 'BMP zu JPG Konverter', desc: 'Unkomprimierte BMP-Dateien in leichtes JPG umwandeln. Massive Größenreduktion.' },
      pt: { slug: 'conversor-bmp-para-jpg', title: 'Conversor BMP para JPG', desc: 'Converta ficheiros BMP para JPG leve. Redução drástica do tamanho.' },
      it: { slug: 'convertitore-bmp-in-jpg', title: 'Convertitore BMP in JPG', desc: 'Converti file BMP in JPG leggero. Riduzione drastica delle dimensioni.' },
      ro: { slug: 'convertor-bmp-in-jpg', title: 'Convertor BMP în JPG', desc: 'Convertește fișiere BMP în JPG ușor. Reducere drastică a dimensiunii.' },
      nl: { slug: 'bmp-naar-jpg-converter', title: 'BMP naar JPG converter', desc: 'Converteer BMP-bestanden naar lichtgewicht JPG. Drastische verkleining.' },
      hu: { slug: 'bmp-jpg-konverter', title: 'BMP JPG konverter', desc: 'BMP fájlok konvertálása könnyű JPG-re. Drasztikus méretcsökkentés.' },
      cs: { slug: 'prevodnik-bmp-na-jpg', title: 'Převodník BMP na JPG', desc: 'Převeďte soubory BMP na lehké JPG. Drastické zmenšení velikosti.' },
      sv: { slug: 'bmp-till-jpg-konverterare', title: 'BMP till JPG-konverterare', desc: 'Konvertera BMP-filer till lättvikts-JPG. Drastisk storleksminskning.' },
      da: { slug: 'bmp-til-jpg-konverter', title: 'BMP til JPG-konverter', desc: 'Konvertér BMP-filer til let JPG. Drastisk størrelsesreduktion.' },
      no: { slug: 'bmp-til-jpg-konverterer', title: 'BMP til JPG-konverterer', desc: 'Konverter BMP-filer til lett JPG. Drastisk størrelsesreduksjon.' },
      fi: { slug: 'bmp-jpg-muunnin', title: 'BMP JPG -muunnin', desc: 'Muunna BMP-tiedostot kevyeen JPG-muotoon. Dramaattinen koon pienentyminen.' },
      el: { slug: 'metatropeas-bmp-se-jpg', title: 'Μετατροπέας BMP σε JPG', desc: 'Μετατρέψτε αρχεία BMP σε ελαφρύ JPG. Δραστική μείωση μεγέθους.' },
    },
  },
  bmpToPng: {
    desktopOnly: false,
    locales: {
      en: { slug: 'bmp-to-png-converter', title: 'BMP to PNG converter', desc: 'Convert BMP images to lossless PNG. Preserve quality at a smaller file size.' },
      es: { slug: 'convertidor-bmp-a-png', title: 'Convertidor BMP a PNG', desc: 'Convierte imágenes BMP a PNG sin pérdida. Conserva la calidad con menor tamaño.' },
      fr: { slug: 'convertisseur-bmp-en-png', title: 'Convertisseur BMP en PNG', desc: 'Convertissez vos images BMP en PNG sans perte. Qualité préservée, taille réduite.' },
      de: { slug: 'bmp-zu-png-konverter', title: 'BMP zu PNG Konverter', desc: 'BMP-Bilder verlustfrei in PNG umwandeln. Qualität erhalten, Dateigröße reduzieren.' },
      pt: { slug: 'conversor-bmp-para-png', title: 'Conversor BMP para PNG', desc: 'Converta imagens BMP para PNG sem perdas. Qualidade preservada, tamanho reduzido.' },
      it: { slug: 'convertitore-bmp-in-png', title: 'Convertitore BMP in PNG', desc: 'Converti immagini BMP in PNG senza perdita. Qualità preservata, dimensioni ridotte.' },
      ro: { slug: 'convertor-bmp-in-png', title: 'Convertor BMP în PNG', desc: 'Convertește imagini BMP în PNG fără pierderi. Calitate păstrată, dimensiune redusă.' },
      nl: { slug: 'bmp-naar-png-converter', title: 'BMP naar PNG converter', desc: 'Converteer BMP-afbeeldingen naar verliesvrij PNG. Kwaliteit behouden, kleiner bestand.' },
      hu: { slug: 'bmp-png-konverter', title: 'BMP PNG konverter', desc: 'BMP képek konvertálása veszteségmentes PNG-re. Minőség megőrzése, méret csökkentése.' },
      cs: { slug: 'prevodnik-bmp-na-png', title: 'Převodník BMP na PNG', desc: 'Převeďte obrázky BMP na bezeztrátové PNG. Kvalita zachována, velikost snížena.' },
      sv: { slug: 'bmp-till-png-konverterare', title: 'BMP till PNG-konverterare', desc: 'Konvertera BMP-bilder till förlustfritt PNG. Kvalitet bevarad, storlek reducerad.' },
      da: { slug: 'bmp-til-png-konverter', title: 'BMP til PNG-konverter', desc: 'Konvertér BMP-billeder til tabsfrit PNG. Kvalitet bevaret, størrelse reduceret.' },
      no: { slug: 'bmp-til-png-konverterer', title: 'BMP til PNG-konverterer', desc: 'Konverter BMP-bilder til tapsfritt PNG. Kvalitet bevart, størrelse redusert.' },
      fi: { slug: 'bmp-png-muunnin', title: 'BMP PNG -muunnin', desc: 'Muunna BMP-kuvat häviöttömään PNG-muotoon. Laatu säilyy, koko pienenee.' },
      el: { slug: 'metatropeas-bmp-se-png', title: 'Μετατροπέας BMP σε PNG', desc: 'Μετατρέψτε εικόνες BMP σε PNG χωρίς απώλειες. Ποιότητα διατηρημένη, μέγεθος μειωμένο.' },
    },
  },
  gifToPng: {
    desktopOnly: false,
    locales: {
      en: { slug: 'gif-to-png-converter', title: 'GIF to PNG converter', desc: 'Export the first frame of a GIF as a static PNG image. No quality loss.' },
      es: { slug: 'convertidor-gif-a-png', title: 'Convertidor GIF a PNG', desc: 'Exporta el primer fotograma de un GIF como imagen PNG estática. Sin pérdida de calidad.' },
      fr: { slug: 'convertisseur-gif-en-png', title: 'Convertisseur GIF en PNG', desc: 'Exportez la première image d\'un GIF en PNG statique. Sans perte de qualité.' },
      de: { slug: 'gif-zu-png-konverter', title: 'GIF zu PNG Konverter', desc: 'Erstes Bild eines GIFs als statisches PNG exportieren. Ohne Qualitätsverlust.' },
      pt: { slug: 'conversor-gif-para-png', title: 'Conversor GIF para PNG', desc: 'Exporte o primeiro fotograma de um GIF como PNG estático. Sem perdas de qualidade.' },
      it: { slug: 'convertitore-gif-in-png', title: 'Convertitore GIF in PNG', desc: 'Esporta il primo fotogramma di un GIF come PNG statico. Senza perdita di qualità.' },
      ro: { slug: 'convertor-gif-in-png', title: 'Convertor GIF în PNG', desc: 'Exportă primul cadru al unui GIF ca PNG static. Fără pierderi de calitate.' },
      nl: { slug: 'gif-naar-png-converter', title: 'GIF naar PNG converter', desc: 'Exporteer het eerste frame van een GIF als statisch PNG. Zonder kwaliteitsverlies.' },
      hu: { slug: 'gif-png-konverter', title: 'GIF PNG konverter', desc: 'Exportálja a GIF első képkockáját statikus PNG-ként. Minőségveszteség nélkül.' },
      cs: { slug: 'prevodnik-gif-na-png', title: 'Převodník GIF na PNG', desc: 'Exportujte první snímek GIFu jako statické PNG. Bez ztráty kvality.' },
      sv: { slug: 'gif-till-png-konverterare', title: 'GIF till PNG-konverterare', desc: 'Exportera den första bildrutan i en GIF som statisk PNG. Utan kvalitetsförlust.' },
      da: { slug: 'gif-til-png-konverter', title: 'GIF til PNG-konverter', desc: 'Eksportér den første frame af en GIF som statisk PNG. Uden kvalitetstab.' },
      no: { slug: 'gif-til-png-konverterer', title: 'GIF til PNG-konverterer', desc: 'Eksporter det første bildet i en GIF som statisk PNG. Uten kvalitetstap.' },
      fi: { slug: 'gif-png-muunnin', title: 'GIF PNG -muunnin', desc: 'Vie GIF-kuvan ensimmäinen ruutu staattisena PNG-kuvana. Ilman laadun heikkenemistä.' },
      el: { slug: 'metatropeas-gif-se-png', title: 'Μετατροπέας GIF σε PNG', desc: 'Εξαγωγή του πρώτου καρέ ενός GIF ως στατικό PNG. Χωρίς απώλεια ποιότητας.' },
    },
  },
  gifToJpg: {
    desktopOnly: false,
    locales: {
      en: { slug: 'gif-to-jpg-converter', title: 'GIF to JPG converter', desc: 'Export the first frame of a GIF as a JPG. Smaller file, faster page loads.' },
      es: { slug: 'convertidor-gif-a-jpg', title: 'Convertidor GIF a JPG', desc: 'Exporta el primer fotograma de un GIF como JPG. Archivo más pequeño, carga más rápida.' },
      fr: { slug: 'convertisseur-gif-en-jpg', title: 'Convertisseur GIF en JPG', desc: 'Exportez la première image d\'un GIF en JPG. Fichier réduit, chargement rapide.' },
      de: { slug: 'gif-zu-jpg-konverter', title: 'GIF zu JPG Konverter', desc: 'Erstes Bild eines GIFs als JPG exportieren. Kleinere Datei, schnelleres Laden.' },
      pt: { slug: 'conversor-gif-para-jpg', title: 'Conversor GIF para JPG', desc: 'Exporte o primeiro fotograma de um GIF como JPG compacto. Ficheiro menor.' },
      it: { slug: 'convertitore-gif-in-jpg', title: 'Convertitore GIF in JPG', desc: 'Esporta il primo fotogramma di un GIF come JPG compatto. File più piccolo.' },
      ro: { slug: 'convertor-gif-in-jpg', title: 'Convertor GIF în JPG', desc: 'Exportă primul cadru al unui GIF ca JPG compact. Fișier mai mic.' },
      nl: { slug: 'gif-naar-jpg-converter', title: 'GIF naar JPG converter', desc: 'Exporteer het eerste frame van een GIF als compact JPG. Kleiner bestand.' },
      hu: { slug: 'gif-jpg-konverter', title: 'GIF JPG konverter', desc: 'Exportálja a GIF első képkockáját kompakt JPG-ként. Kisebb fájl.' },
      cs: { slug: 'prevodnik-gif-na-jpg', title: 'Převodník GIF na JPG', desc: 'Exportujte první snímek GIFu jako kompaktní JPG. Menší soubor.' },
      sv: { slug: 'gif-till-jpg-konverterare', title: 'GIF till JPG-konverterare', desc: 'Exportera den första bildrutan i en GIF som kompakt JPG. Mindre fil.' },
      da: { slug: 'gif-til-jpg-konverter', title: 'GIF til JPG-konverter', desc: 'Eksportér den første frame af en GIF som kompakt JPG. Mindre fil.' },
      no: { slug: 'gif-til-jpg-konverterer', title: 'GIF til JPG-konverterer', desc: 'Eksporter det første bildet i en GIF som kompakt JPG. Mindre fil.' },
      fi: { slug: 'gif-jpg-muunnin', title: 'GIF JPG -muunnin', desc: 'Vie GIF-kuvan ensimmäinen ruutu kompaktina JPG-kuvana. Pienempi tiedosto.' },
      el: { slug: 'metatropeas-gif-se-jpg', title: 'Μετατροπέας GIF σε JPG', desc: 'Εξαγωγή του πρώτου καρέ ενός GIF ως συμπαγές JPG. Μικρότερο αρχείο.' },
    },
  },
};

// ---------------------------------------------------------------------------
// Per-locale images
// ---------------------------------------------------------------------------
const BASE = '/assets/tools/jpg-png-to-webp-converter';
const LOCALE_IMAGE = {
  en: `${BASE}/jpg-png-to-webp-unlimited-en.webp`,
  es: `${BASE}/convertidor-jpg-png-a-webp-es.webp`,
  fr: `${BASE}/convertisseur-jpg-png-en-webp-fr.webp`,
  de: `${BASE}/jpg-png-zu-webp-konverter-de.webp`,
  pt: `${BASE}/conversor-jpg-png-para-webp-pt.webp`,
  it: `${BASE}/convertitore-jpg-png-in-webp-it.webp`,
  ro: `${BASE}/convertor-jpg-png-in-webp-ro.webp`,
  nl: `${BASE}/jpg-png-naar-webp-converter-nl.webp`,
  hu: `${BASE}/jpg-png-webp-konverter-hu.webp`,
  cs: `${BASE}/konvertor-jpg-png-na-webp-cs.webp`,
  sv: `${BASE}/jpg-png-till-webp-konverterare-sv.webp`,
  da: `${BASE}/jpg-png-til-webp-konverter-da.webp`,
  no: `${BASE}/jpg-png-til-webp-konverterer-no.webp`,
  fi: `${BASE}/jpg-png-webp-muunnin-fi.webp`,
  el: `${BASE}/metatropeas-jpg-png-se-webp-el.webp`,
};

// ---------------------------------------------------------------------------
// Per-locale tools base path and CTA button text
// ---------------------------------------------------------------------------
const LOCALE_CONFIG = {
  en: { basePath: '/en/tools', cta: 'Open tool' },
  es: { basePath: '/es/herramientas', cta: 'Abrir herramienta' },
  fr: { basePath: '/fr/outils', cta: 'Ouvrir l\'outil' },
  de: { basePath: '/de/werkzeuge', cta: 'Tool öffnen' },
  pt: { basePath: '/pt/ferramentas', cta: 'Abrir ferramenta' },
  it: { basePath: '/it/strumenti', cta: 'Apri strumento' },
  ro: { basePath: '/ro/instrumente', cta: 'Deschide instrumentul' },
  nl: { basePath: '/nl/tools', cta: 'Open tool' },
  hu: { basePath: '/hu/eszkozok', cta: 'Megnyitás' },
  cs: { basePath: '/cs/nastroje', cta: 'Otevřít nástroj' },
  sv: { basePath: '/sv/verktyg', cta: 'Öppna verktyg' },
  da: { basePath: '/da/vaerktojer', cta: 'Åbn værktøj' },
  no: { basePath: '/no/verktoy', cta: 'Åpne verktøy' },
  fi: { basePath: '/fi/tyokalut', cta: 'Avaa työkalu' },
  el: { basePath: '/el/ergaleia', cta: 'Άνοιγμα εργαλείου' },
};

// ---------------------------------------------------------------------------
// Converter section titles + descriptions per locale
// ---------------------------------------------------------------------------
const SECTION_HEADERS = {
  en: { title: 'Image format converters', desc: '12 online image converters — convert between JPG, PNG, WebP, SVG, BMP, and GIF. Runs in your browser, no files sent to servers.' },
  es: { title: 'Convertidores de formatos de imagen', desc: '12 convertidores de imágenes online — cambie el formato entre JPG, PNG, WebP, SVG, BMP y GIF. Conversión en el navegador, sin envío de archivos.' },
  fr: { title: "Convertisseurs de formats d'image", desc: "12 convertisseurs d'images en ligne — changez de format entre JPG, PNG, WebP, SVG, BMP et GIF. Conversion dans le navigateur, sans envoi de fichiers." },
  de: { title: 'Bildformat-Konverter', desc: '12 Online-Bildkonverter — Formate wechseln zwischen JPG, PNG, WebP, SVG, BMP und GIF. Konvertierung im Browser, kein Server-Upload.' },
  pt: { title: 'Conversores de formatos de imagem', desc: '12 conversores de imagens online — converta entre JPG, PNG, WebP, SVG, BMP e GIF. Conversão no navegador, sem envio de ficheiros.' },
  it: { title: 'Convertitori di formati immagine', desc: '12 convertitori di immagini online — converti tra JPG, PNG, WebP, SVG, BMP e GIF. Conversione nel browser, senza invio di file.' },
  ro: { title: 'Convertoare de formate imagine', desc: '12 convertoare de imagini online — convertiți între JPG, PNG, WebP, SVG, BMP și GIF. Conversie în browser, fără trimitere de fișiere.' },
  nl: { title: 'Afbeeldingsformaat converters', desc: '12 online afbeeldingsconverters — converteer tussen JPG, PNG, WebP, SVG, BMP en GIF. Conversie in de browser, geen bestanden verzonden.' },
  hu: { title: 'Képformátum konverterek', desc: '12 online képkonverter — váltson formátumot JPG, PNG, WebP, SVG, BMP és GIF között. Konverzió a böngészőben, fájlok feltöltése nélkül.' },
  cs: { title: 'Převodníky obrazových formátů', desc: '12 online převodníků obrázků — převádějte mezi JPG, PNG, WebP, SVG, BMP a GIF. Převod v prohlížeči, bez odesílání souborů.' },
  sv: { title: 'Bildformatskonverterare', desc: '12 bildkonverterare online — konvertera mellan JPG, PNG, WebP, SVG, BMP och GIF. Konvertering i webbläsaren, inga filer skickas.' },
  da: { title: 'Billedformat-konvertere', desc: '12 online billedkonvertere — konvertér mellem JPG, PNG, WebP, SVG, BMP og GIF. Konvertering i browseren, ingen filer sendes.' },
  no: { title: 'Bildformat-konverterere', desc: '12 online bildekonverterere — konverter mellom JPG, PNG, WebP, SVG, BMP og GIF. Konvertering i nettleseren, ingen filer sendes.' },
  fi: { title: 'Kuvaformaattimuuntimet', desc: '12 online-kuvamuunninta — muunna JPG, PNG, WebP, SVG, BMP ja GIF välillä. Muunnos selaimessa, tiedostoja ei lähetetä.' },
  el: { title: 'Μετατροπείς μορφών εικόνας', desc: '12 online μετατροπείς εικόνων — μετατρέψτε μεταξύ JPG, PNG, WebP, SVG, BMP και GIF. Μετατροπή στο πρόγραμμα περιήγησης, χωρίς αποστολή αρχείων.' },
};

// ---------------------------------------------------------------------------
// Metadata texts per locale
// ---------------------------------------------------------------------------
const META = {
  en: {
    title: 'Free online tools | Image converters, SEO, colors, favicon',
    desc: '22 free online tools: 12 image converters (JPG, PNG, WebP, SVG, BMP, GIF), favicon generator, image editor, text counter, color palettes, and QR codes. No signup required.',
    schemaName: 'Free online tools — image converters, SEO, colors, favicon',
    heroDesc: '12 image format converters, image editor, favicon generator, text counter, color tools, and QR codes. No registration, no limits — everything runs in your browser.',
    sectionInfoCount: '22',
    about: [
      { '@type': 'Thing', name: 'Image format conversion' },
      { '@type': 'Thing', name: 'JPG PNG WebP SVG BMP GIF converter' },
      { '@type': 'Thing', name: 'Image optimization for websites' },
      { '@type': 'Thing', name: 'SEO' },
      { '@type': 'Thing', name: 'Colors, palettes, WCAG contrast' },
      { '@type': 'Thing', name: 'Favicon, QR, email signature generator' },
    ],
  },
  es: {
    title: 'Herramientas online gratuitas | Convertidores, SEO, colores, favicon',
    desc: '22 herramientas gratuitas: 12 convertidores de imágenes (JPG, PNG, WebP, SVG, BMP, GIF), generador de favicon, editor de imágenes, contador de texto, paletas de colores y códigos QR. Sin registro.',
    schemaName: 'Herramientas online gratuitas — convertidores de imágenes, SEO, colores, favicon',
    heroDesc: '12 convertidores de formatos de imagen, editor de imágenes, generador de favicon, contador de texto, herramientas de color y códigos QR. Sin registro, sin límites.',
    sectionInfoCount: '22',
  },
  fr: {
    title: 'Outils en ligne gratuits | Convertisseurs, SEO, couleurs, favicon',
    desc: "22 outils gratuits : 12 convertisseurs d'images (JPG, PNG, WebP, SVG, BMP, GIF), générateur de favicon, éditeur d'images, compteur de texte, palettes de couleurs et codes QR. Sans inscription.",
    schemaName: "Outils en ligne gratuits — convertisseurs d'images, SEO, couleurs, favicon",
    heroDesc: "12 convertisseurs de formats d'image, éditeur d'images, générateur de favicon, compteur de texte, outils couleurs et codes QR. Sans inscription, sans limite.",
    sectionInfoCount: '22',
  },
  de: {
    title: 'Kostenlose Online-Tools | Konverter, SEO, Farben, Favicon',
    desc: '22 kostenlose Online-Tools: 12 Bildkonverter (JPG, PNG, WebP, SVG, BMP, GIF), Favicon-Generator, Bildeditor, Textzähler, Farbpaletten und QR-Codes. Ohne Registrierung.',
    schemaName: 'Kostenlose Online-Tools — Bildkonverter, SEO, Farben, Favicon',
    heroDesc: '12 Bildformat-Konverter, Bildeditor, Favicon-Generator, Textzähler, Farbtools und QR-Codes. Ohne Registrierung, ohne Limits — alles läuft in Ihrem Browser.',
    sectionInfoCount: '22',
  },
  pt: {
    title: 'Ferramentas online gratuitas | Conversores, SEO, cores, favicon',
    desc: '22 ferramentas gratuitas: 12 conversores de imagens (JPG, PNG, WebP, SVG, BMP, GIF), gerador de favicon, editor de imagens, contador de texto, paletas de cores e códigos QR. Sem registo.',
    schemaName: 'Ferramentas online gratuitas — conversores de imagens, SEO, cores, favicon',
    heroDesc: '12 conversores de formatos de imagem, editor de imagens, gerador de favicon, contador de texto, ferramentas de cor e códigos QR. Sem registo, sem limites.',
    sectionInfoCount: '22',
  },
  it: {
    title: 'Strumenti online gratuiti | Convertitori, SEO, colori, favicon',
    desc: '22 strumenti gratuiti: 12 convertitori di immagini (JPG, PNG, WebP, SVG, BMP, GIF), generatore di favicon, editor di immagini, contatore di testo, palette di colori e codici QR. Senza registrazione.',
    schemaName: 'Strumenti online gratuiti — convertitori di immagini, SEO, colori, favicon',
    heroDesc: '12 convertitori di formati immagine, editor di immagini, generatore di favicon, contatore di testo, strumenti colore e codici QR. Senza registrazione, senza limiti.',
    sectionInfoCount: '22',
  },
  ro: {
    title: 'Instrumente online gratuite | Convertoare, SEO, culori, favicon',
    desc: '22 instrumente gratuite: 12 convertoare de imagini (JPG, PNG, WebP, SVG, BMP, GIF), generator de favicon, editor de imagini, contor de text, palete de culori și coduri QR. Fără înregistrare.',
    schemaName: 'Instrumente online gratuite — convertoare de imagini, SEO, culori, favicon',
    heroDesc: '12 convertoare de formate imagine, editor de imagini, generator de favicon, contor de text, instrumente de culoare și coduri QR. Fără înregistrare, fără limite.',
    sectionInfoCount: '22',
  },
  nl: {
    title: 'Gratis online tools | Converters, SEO, kleuren, favicon',
    desc: '22 gratis online tools: 12 afbeeldingsconverters (JPG, PNG, WebP, SVG, BMP, GIF), favicon-generator, afbeeldingseditor, tekst-teller, kleurpaletten en QR-codes. Zonder registratie.',
    schemaName: 'Gratis online tools — afbeeldingsconverters, SEO, kleuren, favicon',
    heroDesc: '12 afbeeldingsformaat converters, afbeeldingseditor, favicon-generator, tekst-teller, kleurtools en QR-codes. Zonder registratie, zonder limieten.',
    sectionInfoCount: '22',
  },
  hu: {
    title: 'Ingyenes online eszközök | Konverterek, SEO, színek, favicon',
    desc: '22 ingyenes online eszköz: 12 képkonverter (JPG, PNG, WebP, SVG, BMP, GIF), favicon-generátor, képszerkesztő, szövegszámláló, színpaletták és QR-kódok. Regisztráció nélkül.',
    schemaName: 'Ingyenes online eszközök — képkonverterek, SEO, színek, favicon',
    heroDesc: '12 képformátum konverter, képszerkesztő, favicon-generátor, szövegszámláló, színeszközök és QR-kódok. Regisztráció nélkül, korlátok nélkül.',
    sectionInfoCount: '22',
  },
  cs: {
    title: 'Bezplatné online nástroje | Převodníky, SEO, barvy, favicon',
    desc: '22 bezplatných online nástrojů: 12 převodníků obrázků (JPG, PNG, WebP, SVG, BMP, GIF), generátor favicon, editor obrázků, počítadlo textu, barevné palety a QR kódy. Bez registrace.',
    schemaName: 'Bezplatné online nástroje — převodníky obrázků, SEO, barvy, favicon',
    heroDesc: '12 převodníků obrazových formátů, editor obrázků, generátor favicon, počítadlo textu, barevné nástroje a QR kódy. Bez registrace, bez limitů.',
    sectionInfoCount: '22',
  },
  sv: {
    title: 'Gratis onlineverktyg | Konverterare, SEO, färger, favicon',
    desc: '22 gratis onlineverktyg: 12 bildkonverterare (JPG, PNG, WebP, SVG, BMP, GIF), favicon-generator, bildredigerare, texträknare, färgpaletter och QR-koder. Utan registrering.',
    schemaName: 'Gratis onlineverktyg — bildkonverterare, SEO, färger, favicon',
    heroDesc: '12 bildformatskonverterare, bildredigerare, favicon-generator, texträknare, färgverktyg och QR-koder. Utan registrering, utan begränsningar.',
    sectionInfoCount: '22',
  },
  da: {
    title: 'Gratis onlineværktøjer | Konvertere, SEO, farver, favicon',
    desc: '22 gratis onlineværktøjer: 12 billedkonvertere (JPG, PNG, WebP, SVG, BMP, GIF), favicon-generator, billedredaktør, teksttæller, farvepaletter og QR-koder. Uden registrering.',
    schemaName: 'Gratis onlineværktøjer — billedkonvertere, SEO, farver, favicon',
    heroDesc: '12 billedformat-konvertere, billedredaktør, favicon-generator, teksttæller, farveværktøjer og QR-koder. Uden registrering, uden begrænsninger.',
    sectionInfoCount: '22',
  },
  no: {
    title: 'Gratis nettverktøy | Konverterere, SEO, farger, favicon',
    desc: '22 gratis nettverktøy: 12 bildekonverterere (JPG, PNG, WebP, SVG, BMP, GIF), favicon-generator, bildeeditor, tekstteller, fargepaletter og QR-koder. Uten registrering.',
    schemaName: 'Gratis nettverktøy — bildekonverterere, SEO, farger, favicon',
    heroDesc: '12 bildformat-konverterere, bildeeditor, favicon-generator, tekstteller, fargeverktøy og QR-koder. Uten registrering, uten begrensninger.',
    sectionInfoCount: '22',
  },
  fi: {
    title: 'Ilmaiset online-työkalut | Muuntimet, SEO, värit, favicon',
    desc: '22 ilmaista online-työkalua: 12 kuvamuunninta (JPG, PNG, WebP, SVG, BMP, GIF), favicon-generaattori, kuvaeditori, tekstilaskuri, väripaletit ja QR-koodit. Ilman rekisteröitymistä.',
    schemaName: 'Ilmaiset online-työkalut — kuvamuuntimet, SEO, värit, favicon',
    heroDesc: '12 kuvaformaattimuunninta, kuvaeditori, favicon-generaattori, tekstilaskuri, värityökalut ja QR-koodit. Ilman rekisteröitymistä, ilman rajoituksia.',
    sectionInfoCount: '22',
  },
  el: {
    title: 'Δωρεάν online εργαλεία | Μετατροπείς, SEO, χρώματα, favicon',
    desc: '22 δωρεάν online εργαλεία: 12 μετατροπείς εικόνων (JPG, PNG, WebP, SVG, BMP, GIF), δημιουργία favicon, επεξεργασία εικόνας, μετρητής κειμένου, παλέτες χρωμάτων και κωδικοί QR. Χωρίς εγγραφή.',
    schemaName: 'Δωρεάν online εργαλεία — μετατροπείς εικόνων, SEO, χρώματα, favicon',
    heroDesc: '12 μετατροπείς μορφών εικόνας, επεξεργασία εικόνας, δημιουργία favicon, μετρητής κειμένου, εργαλεία χρωμάτων και κωδικοί QR. Χωρίς εγγραφή, χωρίς όρια.',
    sectionInfoCount: '22',
  },
};

// ---------------------------------------------------------------------------
// Hub page paths
// ---------------------------------------------------------------------------
const appRoot = path.resolve(__dirname, '..', 'app');
const HUBS = [
  { locale: 'en', file: path.join(appRoot, 'en', 'tools', 'page.tsx') },
  { locale: 'es', file: path.join(appRoot, 'es', 'herramientas', 'page.tsx') },
  { locale: 'fr', file: path.join(appRoot, 'fr', 'outils', 'page.tsx') },
  { locale: 'de', file: path.join(appRoot, 'de', 'werkzeuge', 'page.tsx') },
  { locale: 'pt', file: path.join(appRoot, 'pt', 'ferramentas', 'page.tsx') },
  { locale: 'it', file: path.join(appRoot, 'it', 'strumenti', 'page.tsx') },
  { locale: 'ro', file: path.join(appRoot, 'ro', 'instrumente', 'page.tsx') },
  { locale: 'nl', file: path.join(appRoot, 'nl', 'tools', 'page.tsx') },
  { locale: 'hu', file: path.join(appRoot, 'hu', 'eszkozok', 'page.tsx') },
  { locale: 'cs', file: path.join(appRoot, 'cs', 'nastroje', 'page.tsx') },
  { locale: 'sv', file: path.join(appRoot, 'sv', 'verktyg', 'page.tsx') },
  { locale: 'da', file: path.join(appRoot, 'da', 'vaerktojer', 'page.tsx') },
  { locale: 'no', file: path.join(appRoot, 'no', 'verktoy', 'page.tsx') },
  { locale: 'fi', file: path.join(appRoot, 'fi', 'tyokalut', 'page.tsx') },
  { locale: 'el', file: path.join(appRoot, 'el', 'ergaleia', 'page.tsx') },
];

// ---------------------------------------------------------------------------
// Generate converter section TSX
// ---------------------------------------------------------------------------
function genConverterSection(locale) {
  const hdr = SECTION_HEADERS[locale];
  const cfg = LOCALE_CONFIG[locale];
  const img = LOCALE_IMAGE[locale];

  const items = CONVERTER_KEYS.map((key) => {
    const conv = CONVERTERS[key];
    const loc = conv.locales[locale];
    if (!loc) return null;
    const href = `${cfg.basePath}/${loc.slug}`;
    return `            {
              icon: <RiLoopLeftLine className="h-8 w-8" />,
              title: '${loc.title.replace(/'/g, "\\'")}',
              topImageAlt: '${loc.title.replace(/'/g, "\\'")} Arteon',
              topImageSrc: '${img}',
              description: (
                <div className="flex h-full flex-col">
                  <p>${loc.desc.replace(/'/g, "\\'")}</p>
                  <div className="mt-4">
                    <Button arrow link="${href}">
                      ${cfg.cta}
                    </Button>
                  </div>
                </div>
              ),
            }`;
  }).filter(Boolean);

  return `        <SectionSteps
          title="${hdr.title.replace(/"/g, '\\"')}"
          description="${hdr.desc.replace(/"/g, '\\"')}"
          grid="three"
          items={[
${items.join(',\n')},
          ]}
        />`;
}

// ---------------------------------------------------------------------------
// Generate schema entries for converters (positions 11-22)
// ---------------------------------------------------------------------------
function genSchemaEntries(locale) {
  const cfg = LOCALE_CONFIG[locale];
  return CONVERTER_KEYS.map((key, i) => {
    const conv = CONVERTERS[key];
    const loc = conv.locales[locale];
    if (!loc) return null;
    const href = `${cfg.basePath}/${loc.slug}`;
    // Escape for JS string
    const name = loc.title.replace(/'/g, "\\'");
    const desc = loc.desc.replace(/'/g, "\\'");
    return `      {
        '@type': 'WebApplication',
        position: ${11 + i},
        name: '${name}',
        description: '${desc}',
        url: toAbsoluteUrl('${href}'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      }`;
  }).filter(Boolean);
}

// ---------------------------------------------------------------------------
// Main: process each hub
// ---------------------------------------------------------------------------
let updated = 0;
for (const { locale, file } of HUBS) {
  if (!fs.existsSync(file)) { console.log(`SKIP: ${file}`); continue; }
  let content = fs.readFileSync(file, 'utf8');
  const meta = META[locale];
  if (!meta) { console.log(`  NO META for ${locale}`); continue; }

  // --- 1. Add RiLoopLeftLine import if missing ---
  if (!content.includes('RiLoopLeftLine')) {
    content = content.replace(
      /} from 'react-icons\/ri';/,
      `  RiLoopLeftLine,\n} from 'react-icons/ri';`
    );
  }

  // --- 2. Update metadata title ---
  content = content.replace(
    /(export const metadata = \{\n\s*title: ')[^']*(')/,
    `$1${meta.title}$2`
  );

  // --- 3. Update metadata description ---
  content = content.replace(
    /(export const metadata = \{[^}]*?description: ')[^']*(')/s,
    `$1${meta.desc}$2`
  );

  // --- 4. Update openGraph title ---
  content = content.replace(
    /(openGraph: \{[^}]*?title: ')[^']*(')/s,
    `$1${meta.title}$2`
  );

  // --- 5. Update openGraph description ---
  content = content.replace(
    /(openGraph: \{[^}]*?description: ')[^']*(')/s,
    `$1${meta.desc}$2`
  );

  // --- 6. Update schema name ---
  content = content.replace(
    /(const schema = \{[^}]*?name: ')[^']*(')/s,
    `$1${meta.schemaName || meta.title}$2`
  );

  // --- 7. Update schema description ---
  // Handle both single-line and multi-line description in schema
  content = content.replace(
    /(const schema = \{[\s\S]*?name: '[^']*',\n\s*)description:[^,]*,/,
    `$1description: '${meta.desc}',`
  );

  // --- 8. Update schema numberOfItems ---
  content = content.replace(/numberOfItems: \d+/, 'numberOfItems: 22');

  // --- 9. Add converter schema entries before closing of itemListElement ---
  const schemaEntries = genSchemaEntries(locale);
  // Find the last schema entry (position 10) and add converters after it
  const lastSchemaEntry = content.match(/position: 10,[\s\S]*?\},\n(\s*\],)/);
  if (lastSchemaEntry) {
    const indent = lastSchemaEntry[1];
    const entriesStr = schemaEntries.join(',\n');
    content = content.replace(
      /(position: 10,[\s\S]*?\},)\n(\s*\],)/,
      `$1\n${entriesStr},\n$2`
    );
  }

  // --- 10. Update schema about ---
  if (meta.about) {
    const aboutStr = JSON.stringify(meta.about, null, 2).split('\n').map((l, i) => i === 0 ? l : '  ' + l).join('\n');
    content = content.replace(
      /about: \[[\s\S]*?\],/,
      `about: ${aboutStr},`
    );
  }

  // --- 11. Update HeroBanner description ---
  if (meta.heroDesc) {
    content = content.replace(
      /(<HeroBanner[\s\S]*?description=")[^"]*(")/,
      `$1${meta.heroDesc}$2`
    );
  }

  // --- 12. Remove old combined converter card from "Images" section ---
  // The old converter card starts with title containing "JPG" and "WebP" and icon RiImageEditLine
  // Pattern: the first SectionSteps item with RiImageEditLine icon
  const oldConverterPattern = /\s*\{\s*icon: <RiImageEditLine[^}]*\},[\s\S]*?<\/div>\s*\),\s*\},\n/;
  const match = content.match(oldConverterPattern);
  if (match) {
    content = content.replace(oldConverterPattern, '\n');
  }

  // --- 13. Insert converters section after Images section ---
  const converterTSX = genConverterSection(locale);
  // Find the closing of the first SectionSteps (Images section) and insert after Gap
  // Pattern: first </SectionSteps> + Gap
  const firstSectionEnd = content.indexOf('        <Gap size="sm" />', content.indexOf('grid="three"'));
  if (firstSectionEnd !== -1) {
    const insertPoint = firstSectionEnd;
    content = content.slice(0, insertPoint) +
      '        <Gap size="sm" />\n\n' + converterTSX + '\n\n' +
      content.slice(insertPoint);
  }

  // --- 14. Update "10" references in SectionInfo and other text ---
  // Replace "10 free" or "10 kostenlose" etc. with "22"
  content = content.replace(/(\b)10 free (online )?tools/gi, '$122 free $2tools');
  content = content.replace(/(\b)10 kostenlose/gi, '$122 kostenlose');
  content = content.replace(/(\b)10 outils/gi, '$122 outils');
  content = content.replace(/(\b)10 herramientas/gi, '$122 herramientas');
  content = content.replace(/(\b)10 ferramentas/gi, '$122 ferramentas');
  content = content.replace(/(\b)10 strumenti/gi, '$122 strumenti');
  content = content.replace(/(\b)10 instrumente/gi, '$122 instrumente');
  content = content.replace(/(\b)10 gratis online/gi, '$122 gratis online');
  content = content.replace(/(\b)10 ingyenes/gi, '$122 ingyenes');
  content = content.replace(/(\b)10 bezplatn/gi, '$122 bezplatn');
  content = content.replace(/(\b)10 gratis (online)?verktyg/gi, '$122 gratis $2verktyg');
  content = content.replace(/(\b)10 gratis (online)?værk/gi, '$122 gratis $2værk');
  content = content.replace(/(\b)10 gratis nett/gi, '$122 gratis nett');
  content = content.replace(/(\b)10 ilmaist/gi, '$122 ilmaist');
  content = content.replace(/(\b)10 δωρεάν/gi, '$122 δωρεάν');
  // Generic: "A set of 10" → "A set of 22"
  content = content.replace(/set of 10/gi, 'set of 22');
  content = content.replace(/sada 10/gi, 'sada 22');
  content = content.replace(/conjunto de 10/gi, 'conjunto de 22');
  content = content.replace(/serie di 10/gi, 'serie di 22');

  fs.writeFileSync(file, content, 'utf8');
  console.log(`  Updated: ${locale}`);
  updated++;
}

console.log(`\nTotal hub pages updated: ${updated}`);
