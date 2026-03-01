const { FORMATS } = require('./_converter-data.cjs');

// ============================================================
// HOW-TO STEPS per locale (3 steps: upload, configure, download)
// ============================================================
const HOW_TO_STEPS = {
  en: (S, T) => [
    {
      icon: 'RiUploadCloud2Line',
      title: `Upload your ${S} file`,
      description: `Drag and drop your ${S} image onto the converter area or click to browse your device. You can add multiple files at once for batch conversion.`,
    },
    {
      icon: 'RiSettings3Line',
      title: 'Adjust settings',
      description: `Choose your preferred quality and output options. The converter shows a live preview so you can compare the original ${S} with the ${T} result before downloading.`,
    },
    {
      icon: 'RiDownloadLine',
      title: `Download your ${T} file`,
      description: `Click the download button to save your converted ${T} file. For multiple files, use the batch download option to get all results in one click.`,
    },
  ],
  pl: (S, T) => [
    {
      icon: 'RiUploadCloud2Line',
      title: `Wgraj plik ${S}`,
      description: `Przeci\u0105gnij i upu\u015b\u0107 obraz ${S} na obszar konwertera lub kliknij, aby wybra\u0107 plik z urz\u0105dzenia. Mo\u017cesz doda\u0107 wiele plik\u00f3w naraz.`,
    },
    {
      icon: 'RiSettings3Line',
      title: 'Dostosuj ustawienia',
      description: `Wybierz preferowane ustawienia jako\u015bci i wyj\u015bcia. Konwerter pokazuje podgl\u0105d na \u017cywo, dzi\u0119ki czemu mo\u017cesz por\u00f3wna\u0107 orygina\u0142 ${S} z wynikiem ${T} przed pobraniem.`,
    },
    {
      icon: 'RiDownloadLine',
      title: `Pobierz plik ${T}`,
      description: `Kliknij przycisk pobierania, aby zapisa\u0107 przekonwertowany plik ${T}. W przypadku wielu plik\u00f3w u\u017cyj opcji zbiorczego pobierania.`,
    },
  ],
  de: (S, T) => [
    {
      icon: 'RiUploadCloud2Line',
      title: `${S}-Datei hochladen`,
      description: `Ziehen Sie Ihr ${S}-Bild auf den Konverterbereich oder klicken Sie, um Dateien auszuw\u00e4hlen. Mehrere Dateien gleichzeitig m\u00f6glich.`,
    },
    {
      icon: 'RiSettings3Line',
      title: 'Einstellungen anpassen',
      description: `W\u00e4hlen Sie Qualit\u00e4t und Ausgabeoptionen. Der Konverter zeigt eine Live-Vorschau zum Vergleich von ${S}-Original und ${T}-Ergebnis.`,
    },
    {
      icon: 'RiDownloadLine',
      title: `${T}-Datei herunterladen`,
      description: `Klicken Sie auf Download, um Ihre konvertierte ${T}-Datei zu speichern. Bei mehreren Dateien nutzen Sie den Stapeldownload.`,
    },
  ],
  fr: (S, T) => [
    {
      icon: 'RiUploadCloud2Line',
      title: `T\u00e9l\u00e9charger votre fichier ${S}`,
      description: `Glissez-d\u00e9posez votre image ${S} sur la zone de conversion ou cliquez pour parcourir votre appareil. Vous pouvez ajouter plusieurs fichiers \u00e0 la fois.`,
    },
    {
      icon: 'RiSettings3Line',
      title: 'Ajuster les param\u00e8tres',
      description: `Choisissez vos pr\u00e9f\u00e9rences de qualit\u00e9 et de sortie. Le convertisseur affiche un aper\u00e7u en direct pour comparer l\u2019original ${S} avec le r\u00e9sultat ${T}.`,
    },
    {
      icon: 'RiDownloadLine',
      title: `T\u00e9l\u00e9charger votre fichier ${T}`,
      description: `Cliquez sur le bouton de t\u00e9l\u00e9chargement pour enregistrer votre fichier ${T} converti. Pour plusieurs fichiers, utilisez le t\u00e9l\u00e9chargement par lot.`,
    },
  ],
  es: (S, T) => [
    {
      icon: 'RiUploadCloud2Line',
      title: `Sube tu archivo ${S}`,
      description: `Arrastra y suelta tu imagen ${S} en el \u00e1rea del convertidor o haz clic para explorar tu dispositivo. Puedes a\u00f1adir varios archivos a la vez.`,
    },
    {
      icon: 'RiSettings3Line',
      title: 'Ajusta la configuraci\u00f3n',
      description: `Elige tus opciones de calidad y salida preferidas. El convertidor muestra una vista previa en vivo para comparar el ${S} original con el resultado ${T}.`,
    },
    {
      icon: 'RiDownloadLine',
      title: `Descarga tu archivo ${T}`,
      description: `Haz clic en el bot\u00f3n de descarga para guardar tu archivo ${T} convertido. Para m\u00faltiples archivos, usa la descarga por lotes.`,
    },
  ],
  it: (S, T) => [
    {
      icon: 'RiUploadCloud2Line',
      title: `Carica il tuo file ${S}`,
      description: `Trascina il tuo file ${S} nell\u2019area del convertitore o clicca per sfogliare. Puoi aggiungere pi\u00f9 file contemporaneamente.`,
    },
    {
      icon: 'RiSettings3Line',
      title: 'Regola le impostazioni',
      description: `Scegli le impostazioni di qualit\u00e0 e di output. Il convertitore mostra un\u2019anteprima dal vivo per confrontare l\u2019originale ${S} con il risultato ${T}.`,
    },
    { icon: 'RiDownloadLine', title: `Scarica il tuo file ${T}`, description: `Clicca il pulsante di download per salvare il file ${T} convertito. Per pi\u00f9 file, usa il download in batch.` },
  ],
  pt: (S, T) => [
    {
      icon: 'RiUploadCloud2Line',
      title: `Carregue o seu ficheiro ${S}`,
      description: `Arraste e solte a sua imagem ${S} na \u00e1rea do conversor ou clique para procurar no dispositivo. Pode adicionar v\u00e1rios ficheiros de uma vez.`,
    },
    {
      icon: 'RiSettings3Line',
      title: 'Ajuste as configura\u00e7\u00f5es',
      description: `Escolha as suas prefer\u00eancias de qualidade e sa\u00edda. O conversor mostra uma pr\u00e9-visualiza\u00e7\u00e3o ao vivo para comparar o original ${S} com o resultado ${T}.`,
    },
    {
      icon: 'RiDownloadLine',
      title: `Descarregue o seu ficheiro ${T}`,
      description: `Clique no bot\u00e3o de download para guardar o ficheiro ${T} convertido. Para v\u00e1rios ficheiros, use o download em lote.`,
    },
  ],
  cs: (S, T) => [
    {
      icon: 'RiUploadCloud2Line',
      title: `Nahrajte soubor ${S}`,
      description: `P\u0159et\u00e1hn\u011bte obr\u00e1zek ${S} do oblasti p\u0159evodn\u00edku nebo klikn\u011bte pro v\u00fdb\u011br souboru. M\u016f\u017eete p\u0159idat v\u00edce soubor\u016f najednou.`,
    },
    {
      icon: 'RiSettings3Line',
      title: 'Upravte nastaven\u00ed',
      description: `Zvolte preferovanou kvalitu a mo\u017enosti v\u00fdstupu. P\u0159evodn\u00edk zobrazuje n\u00e1hled v re\u00e1ln\u00e9m \u010dase pro porovn\u00e1n\u00ed origin\u00e1lu ${S} s v\u00fdsledkem ${T}.`,
    },
    {
      icon: 'RiDownloadLine',
      title: `St\u00e1hn\u011bte soubor ${T}`,
      description: `Klikn\u011bte na tla\u010d\u00edtko sta\u017een\u00ed pro ulo\u017een\u00ed p\u0159eveden\u00e9ho souboru ${T}. Pro v\u00edce soubor\u016f pou\u017eijte hromadn\u00e9 sta\u017een\u00ed.`,
    },
  ],
  da: (S, T) => [
    {
      icon: 'RiUploadCloud2Line',
      title: `Upload din ${S}-fil`,
      description: `Tr\u00e6k og slip dit ${S}-billede p\u00e5 konverteringsomr\u00e5det eller klik for at gennemse din enhed. Du kan tilf\u00f8je flere filer p\u00e5 \u00e9n gang.`,
    },
    {
      icon: 'RiSettings3Line',
      title: 'Juster indstillinger',
      description: `V\u00e6lg din foretrukne kvalitet og outputindstillinger. Konverteren viser en live forh\u00e5ndsvisning til sammenligning af ${S}-originalen med ${T}-resultatet.`,
    },
    { icon: 'RiDownloadLine', title: `Download din ${T}-fil`, description: `Klik p\u00e5 downloadknappen for at gemme din konverterede ${T}-fil. Ved flere filer kan du bruge batch-download.` },
  ],
  el: (S, T) => [
    {
      icon: 'RiUploadCloud2Line',
      title: `\u0391\u03bd\u03b5\u03b2\u03ac\u03c3\u03c4\u03b5 \u03c4\u03bf \u03b1\u03c1\u03c7\u03b5\u03af\u03bf ${S}`,
      description: `\u03a3\u03cd\u03c1\u03b5\u03c4\u03b5 \u03ba\u03b1\u03b9 \u03b1\u03c6\u03ae\u03c3\u03c4\u03b5 \u03c4\u03b7\u03bd \u03b5\u03b9\u03ba\u03cc\u03bd\u03b1 ${S} \u03c3\u03c4\u03b7\u03bd \u03c0\u03b5\u03c1\u03b9\u03bf\u03c7\u03ae \u03bc\u03b5\u03c4\u03b1\u03c4\u03c1\u03bf\u03c0\u03ae\u03c2 \u03ae \u03ba\u03ac\u03bd\u03c4\u03b5 \u03ba\u03bb\u03b9\u03ba \u03b3\u03b9\u03b1 \u03b1\u03bd\u03b1\u03b6\u03ae\u03c4\u03b7\u03c3\u03b7. \u039c\u03c0\u03bf\u03c1\u03b5\u03af\u03c4\u03b5 \u03bd\u03b1 \u03c0\u03c1\u03bf\u03c3\u03b8\u03ad\u03c3\u03b5\u03c4\u03b5 \u03c0\u03bf\u03bb\u03bb\u03b1\u03c0\u03bb\u03ac \u03b1\u03c1\u03c7\u03b5\u03af\u03b1 \u03c4\u03b1\u03c5\u03c4\u03cc\u03c7\u03c1\u03bf\u03bd\u03b1.`,
    },
    {
      icon: 'RiSettings3Line',
      title: '\u03a0\u03c1\u03bf\u03c3\u03b1\u03c1\u03bc\u03cc\u03c3\u03c4\u03b5 \u03c4\u03b9\u03c2 \u03c1\u03c5\u03b8\u03bc\u03af\u03c3\u03b5\u03b9\u03c2',
      description: `\u0395\u03c0\u03b9\u03bb\u03ad\u03be\u03c4\u03b5 \u03c4\u03b9\u03c2 \u03c1\u03c5\u03b8\u03bc\u03af\u03c3\u03b5\u03b9\u03c2 \u03c0\u03bf\u03b9\u03cc\u03c4\u03b7\u03c4\u03b1\u03c2 \u03ba\u03b1\u03b9 \u03b5\u03be\u03cc\u03b4\u03bf\u03c5. \u039f \u03bc\u03b5\u03c4\u03b1\u03c4\u03c1\u03bf\u03c0\u03ad\u03b1\u03c2 \u03b4\u03b5\u03af\u03c7\u03bd\u03b5\u03b9 \u03b6\u03c9\u03bd\u03c4\u03b1\u03bd\u03ae \u03c0\u03c1\u03bf\u03b5\u03c0\u03b9\u03c3\u03ba\u03cc\u03c0\u03b7\u03c3\u03b7 \u03b3\u03b9\u03b1 \u03c3\u03cd\u03b3\u03ba\u03c1\u03b9\u03c3\u03b7 \u03c4\u03bf\u03c5 ${S} \u03bc\u03b5 \u03c4\u03bf \u03b1\u03c0\u03bf\u03c4\u03ad\u03bb\u03b5\u03c3\u03bc\u03b1 ${T}.`,
    },
    {
      icon: 'RiDownloadLine',
      title: `\u039a\u03b1\u03c4\u03b5\u03b2\u03ac\u03c3\u03c4\u03b5 \u03c4\u03bf \u03b1\u03c1\u03c7\u03b5\u03af\u03bf ${T}`,
      description: `\u039a\u03ac\u03bd\u03c4\u03b5 \u03ba\u03bb\u03b9\u03ba \u03c3\u03c4\u03bf \u03ba\u03bf\u03c5\u03bc\u03c0\u03af \u03bb\u03ae\u03c8\u03b7\u03c2 \u03b3\u03b9\u03b1 \u03bd\u03b1 \u03b1\u03c0\u03bf\u03b8\u03b7\u03ba\u03b5\u03cd\u03c3\u03b5\u03c4\u03b5 \u03c4\u03bf \u03bc\u03b5\u03c4\u03b1\u03c4\u03c1\u03b5\u03bc\u03bc\u03ad\u03bd\u03bf \u03b1\u03c1\u03c7\u03b5\u03af\u03bf ${T}. \u0393\u03b9\u03b1 \u03c0\u03bf\u03bb\u03bb\u03b1\u03c0\u03bb\u03ac \u03b1\u03c1\u03c7\u03b5\u03af\u03b1, \u03c7\u03c1\u03b7\u03c3\u03b9\u03bc\u03bf\u03c0\u03bf\u03b9\u03ae\u03c3\u03c4\u03b5 \u03c4\u03b7 \u03bc\u03b1\u03b6\u03b9\u03ba\u03ae \u03bb\u03ae\u03c8\u03b7.`,
    },
  ],
  fi: (S, T) => [
    {
      icon: 'RiUploadCloud2Line',
      title: `Lataa ${S}-tiedosto`,
      description: `Ved\u00e4 ja pudota ${S}-kuva muunnosalueelle tai napsauta selataksesi laitettasi. Voit lis\u00e4t\u00e4 useita tiedostoja kerralla.`,
    },
    {
      icon: 'RiSettings3Line',
      title: 'S\u00e4\u00e4d\u00e4 asetuksia',
      description: `Valitse haluamasi laatu- ja tulostusasetukset. Muunnin n\u00e4ytt\u00e4\u00e4 reaaliaikaisen esikatselun ${S}-alkuper\u00e4isen ja ${T}-tuloksen vertailua varten.`,
    },
    { icon: 'RiDownloadLine', title: `Lataa ${T}-tiedosto`, description: `Napsauta latauspainiketta tallentaaksesi muunnetun ${T}-tiedoston. Useille tiedostoille k\u00e4yt\u00e4 erilatausta.` },
  ],
  hu: (S, T) => [
    {
      icon: 'RiUploadCloud2Line',
      title: `T\u00f6ltse fel a ${S} f\u00e1jlt`,
      description: `H\u00fazza \u00e9s dobja a ${S} k\u00e9pet a konverter ter\u00fclet\u00e9re, vagy kattintson a tall\u00f3z\u00e1shoz. T\u00f6bb f\u00e1jlt is hozz\u00e1adhat egyszerre.`,
    },
    {
      icon: 'RiSettings3Line',
      title: '\u00c1ll\u00edtsa be a be\u00e1ll\u00edt\u00e1sokat',
      description: `V\u00e1lassza ki a k\u00edv\u00e1nt min\u0151s\u00e9gi \u00e9s kimeneti be\u00e1ll\u00edt\u00e1sokat. A konverter \u00e9l\u0151 el\u0151n\u00e9zetet mutat a ${S} eredeti \u00e9s a ${T} eredm\u00e9ny \u00f6sszehasonl\u00edt\u00e1s\u00e1hoz.`,
    },
    {
      icon: 'RiDownloadLine',
      title: `T\u00f6ltse le a ${T} f\u00e1jlt`,
      description: `Kattintson a let\u00f6lt\u00e9s gombra a konvert\u00e1lt ${T} f\u00e1jl ment\u00e9s\u00e9hez. T\u00f6bb f\u00e1jl eset\u00e9n haszn\u00e1lja a k\u00f6tegelt let\u00f6lt\u00e9st.`,
    },
  ],
  nl: (S, T) => [
    {
      icon: 'RiUploadCloud2Line',
      title: `Upload uw ${S}-bestand`,
      description: `Sleep uw ${S}-afbeelding naar het convertergebied of klik om te bladeren. U kunt meerdere bestanden tegelijk toevoegen.`,
    },
    {
      icon: 'RiSettings3Line',
      title: 'Pas instellingen aan',
      description: `Kies uw gewenste kwaliteits- en uitvoeropties. De converter toont een live voorbeeld om het ${S}-origineel te vergelijken met het ${T}-resultaat.`,
    },
    {
      icon: 'RiDownloadLine',
      title: `Download uw ${T}-bestand`,
      description: `Klik op de downloadknop om uw geconverteerde ${T}-bestand op te slaan. Voor meerdere bestanden kunt u de batchdownload gebruiken.`,
    },
  ],
  no: (S, T) => [
    {
      icon: 'RiUploadCloud2Line',
      title: `Last opp ${S}-filen din`,
      description: `Dra og slipp ${S}-bildet ditt p\u00e5 konverteringsomr\u00e5det eller klikk for \u00e5 bla gjennom enheten din. Du kan legge til flere filer samtidig.`,
    },
    {
      icon: 'RiSettings3Line',
      title: 'Juster innstillinger',
      description: `Velg foretrukne kvalitets- og utgangsinnstillinger. Konverteren viser en forh\u00e5ndsvisning for sammenligning av ${S}-originalen med ${T}-resultatet.`,
    },
    { icon: 'RiDownloadLine', title: `Last ned ${T}-filen din`, description: `Klikk p\u00e5 nedlastingsknappen for \u00e5 lagre den konverterte ${T}-filen. For flere filer, bruk batch-nedlasting.` },
  ],
  ro: (S, T) => [
    {
      icon: 'RiUploadCloud2Line',
      title: `\u00cenc\u0103rca\u021bi fi\u0219ierul ${S}`,
      description: `Trage\u021bi \u0219i plasa\u021bi imaginea ${S} \u00een zona convertorului sau face\u021bi clic pentru a naviga. Pute\u021bi ad\u0103uga mai multe fi\u0219iere simultan.`,
    },
    {
      icon: 'RiSettings3Line',
      title: 'Ajusta\u021bi set\u0103rile',
      description: `Alege\u021bi set\u0103rile preferate de calitate \u0219i ie\u0219ire. Convertorul afi\u0219eaz\u0103 o previzualizare \u00een timp real pentru compararea originalului ${S} cu rezultatul ${T}.`,
    },
    {
      icon: 'RiDownloadLine',
      title: `Desc\u0103rca\u021bi fi\u0219ierul ${T}`,
      description: `Face\u021bi clic pe butonul de desc\u0103rcare pentru a salva fi\u0219ierul ${T} convertit. Pentru mai multe fi\u0219iere, folosi\u021bi desc\u0103rcarea \u00een lot.`,
    },
  ],
  sv: (S, T) => [
    {
      icon: 'RiUploadCloud2Line',
      title: `Ladda upp din ${S}-fil`,
      description: `Dra och sl\u00e4pp din ${S}-bild p\u00e5 konverteringsomr\u00e5det eller klicka f\u00f6r att bl\u00e4ddra p\u00e5 din enhet. Du kan l\u00e4gga till flera filer samtidigt.`,
    },
    {
      icon: 'RiSettings3Line',
      title: 'Justera inst\u00e4llningar',
      description: `V\u00e4lj \u00f6nskade kvalitets- och utdatainst\u00e4llningar. Konverteraren visar en f\u00f6rhandsgranskning f\u00f6r j\u00e4mf\u00f6relse av ${S}-originalet med ${T}-resultatet.`,
    },
    {
      icon: 'RiDownloadLine',
      title: `Ladda ner din ${T}-fil`,
      description: `Klicka p\u00e5 nedladdningsknappen f\u00f6r att spara din konverterade ${T}-fil. F\u00f6r flera filer, anv\u00e4nd batchnedladdning.`,
    },
  ],
};

// ============================================================
// FEATURE ITEMS per locale (4 items: privacy, no limits, quality, speed)
// ============================================================
const FEATURE_ITEMS = {
  en: (S, T) => [
    {
      icon: 'RiShieldCheckLine',
      title: 'Complete privacy',
      description: `Your ${S} files are processed entirely in your browser. Nothing is uploaded to any server \u2013 your images stay on your device at all times.`,
    },
    {
      icon: 'RiInfinityLine',
      title: 'No limits',
      description: `Convert as many ${S} files to ${T} as you need. There are no daily limits, no file size restrictions, and no watermarks on the output.`,
    },
    {
      icon: 'RiImageEditLine',
      title: 'Quality control',
      description: `Adjust compression settings to find the perfect balance between file size and image quality. Preview changes in real time before downloading.`,
    },
    {
      icon: 'RiFlashlightLine',
      title: 'Instant conversion',
      description: `All processing happens locally using modern browser APIs, which means conversion is fast and works even without an internet connection after the page loads.`,
    },
  ],
  pl: (S, T) => [
    {
      icon: 'RiShieldCheckLine',
      title: 'Pe\u0142na prywatno\u015b\u0107',
      description: `Pliki ${S} s\u0105 przetwarzane wy\u0142\u0105cznie w Twojej przegl\u0105darce. Nic nie jest przesy\u0142ane na serwer \u2013 obrazy ca\u0142y czas pozostaj\u0105 na Twoim urz\u0105dzeniu.`,
    },
    {
      icon: 'RiInfinityLine',
      title: 'Bez limit\u00f3w',
      description: `Konwertuj tyle plik\u00f3w ${S} na ${T}, ile potrzebujesz. Bez dziennych limit\u00f3w, bez ogranicze\u0144 rozmiaru pliku i bez znak\u00f3w wodnych.`,
    },
    {
      icon: 'RiImageEditLine',
      title: 'Kontrola jako\u015bci',
      description: `Dostosuj ustawienia kompresji, aby znale\u017a\u0107 idealn\u0105 r\u00f3wnowag\u0119 mi\u0119dzy rozmiarem pliku a jako\u015bci\u0105 obrazu. Podgl\u0105d zmian w czasie rzeczywistym.`,
    },
    {
      icon: 'RiFlashlightLine',
      title: 'B\u0142yskawiczna konwersja',
      description: `Ca\u0142e przetwarzanie odbywa si\u0119 lokalnie z wykorzystaniem nowoczesnych API przegl\u0105darki \u2013 konwersja jest szybka i dzia\u0142a nawet bez internetu po za\u0142adowaniu strony.`,
    },
  ],
  de: (S, T) => [
    {
      icon: 'RiShieldCheckLine',
      title: 'Vollst\u00e4ndiger Datenschutz',
      description: `Ihre ${S}-Dateien werden ausschlie\u00dflich in Ihrem Browser verarbeitet. Nichts wird auf einen Server hochgeladen \u2013 DSGVO-konform.`,
    },
    {
      icon: 'RiInfinityLine',
      title: 'Keine Limits',
      description: `Konvertieren Sie so viele ${S}-Dateien in ${T} wie n\u00f6tig. Keine t\u00e4glichen Limits, keine Gr\u00f6\u00dfenbeschr\u00e4nkungen, keine Wasserzeichen.`,
    },
    {
      icon: 'RiImageEditLine',
      title: 'Qualit\u00e4tskontrolle',
      description: `Passen Sie die Kompressionseinstellungen an, um die perfekte Balance zwischen Dateigr\u00f6\u00dfe und Bildqualit\u00e4t zu finden.`,
    },
    {
      icon: 'RiFlashlightLine',
      title: 'Sofortige Konvertierung',
      description: `Die gesamte Verarbeitung erfolgt lokal mit modernen Browser-APIs \u2013 schnell und auch ohne Internetverbindung nutzbar.`,
    },
  ],
  fr: (S, T) => [
    {
      icon: 'RiShieldCheckLine',
      title: 'Confidentialit\u00e9 totale',
      description: `Vos fichiers ${S} sont trait\u00e9s enti\u00e8rement dans votre navigateur. Rien n\u2019est envoy\u00e9 \u00e0 un serveur \u2013 conforme au RGPD.`,
    },
    {
      icon: 'RiInfinityLine',
      title: 'Sans limites',
      description: `Convertissez autant de fichiers ${S} en ${T} que n\u00e9cessaire. Pas de limites quotidiennes, pas de restrictions de taille, pas de filigranes.`,
    },
    {
      icon: 'RiImageEditLine',
      title: 'Contr\u00f4le de la qualit\u00e9',
      description: `Ajustez les param\u00e8tres de compression pour trouver l\u2019\u00e9quilibre parfait entre taille de fichier et qualit\u00e9 d\u2019image.`,
    },
    {
      icon: 'RiFlashlightLine',
      title: 'Conversion instantan\u00e9e',
      description: `Tout le traitement se fait localement gr\u00e2ce aux API modernes du navigateur \u2013 rapide et fonctionnel m\u00eame hors connexion.`,
    },
  ],
  es: (S, T) => [
    {
      icon: 'RiShieldCheckLine',
      title: 'Privacidad total',
      description: `Tus archivos ${S} se procesan completamente en tu navegador. Nada se sube a ning\u00fan servidor \u2013 tus im\u00e1genes permanecen en tu dispositivo.`,
    },
    {
      icon: 'RiInfinityLine',
      title: 'Sin l\u00edmites',
      description: `Convierte tantos archivos ${S} a ${T} como necesites. Sin l\u00edmites diarios, sin restricciones de tama\u00f1o, sin marcas de agua.`,
    },
    { icon: 'RiImageEditLine', title: 'Control de calidad', description: `Ajusta la compresi\u00f3n para encontrar el equilibrio perfecto entre tama\u00f1o de archivo y calidad de imagen.` },
    {
      icon: 'RiFlashlightLine',
      title: 'Conversi\u00f3n instant\u00e1nea',
      description: `Todo el procesamiento ocurre localmente usando APIs modernas del navegador \u2013 r\u00e1pido y funcional incluso sin conexi\u00f3n.`,
    },
  ],
  it: (S, T) => [
    { icon: 'RiShieldCheckLine', title: 'Privacy completa', description: `I tuoi file ${S} vengono elaborati interamente nel browser. Nulla viene caricato su server \u2013 conforme al GDPR.` },
    { icon: 'RiInfinityLine', title: 'Senza limiti', description: `Converti quanti file ${S} in ${T} desideri. Nessun limite giornaliero, nessuna restrizione di dimensione, nessun watermark.` },
    {
      icon: 'RiImageEditLine',
      title: 'Controllo qualit\u00e0',
      description: `Regola le impostazioni di compressione per trovare il perfetto equilibrio tra dimensione del file e qualit\u00e0 dell\u2019immagine.`,
    },
    {
      icon: 'RiFlashlightLine',
      title: 'Conversione istantanea',
      description: `L\u2019elaborazione avviene localmente con le API moderne del browser \u2013 veloce e funzionante anche senza connessione.`,
    },
  ],
  pt: (S, T) => [
    {
      icon: 'RiShieldCheckLine',
      title: 'Privacidade total',
      description: `Os seus ficheiros ${S} s\u00e3o processados inteiramente no seu navegador. Nada \u00e9 enviado para servidores \u2013 conforme com o RGPD.`,
    },
    {
      icon: 'RiInfinityLine',
      title: 'Sem limites',
      description: `Converta quantos ficheiros ${S} para ${T} precisar. Sem limites di\u00e1rios, sem restri\u00e7\u00f5es de tamanho, sem marcas de \u00e1gua.`,
    },
    { icon: 'RiImageEditLine', title: 'Controlo de qualidade', description: `Ajuste as defini\u00e7\u00f5es de compress\u00e3o para encontrar o equil\u00edbrio perfeito entre tamanho e qualidade.` },
    {
      icon: 'RiFlashlightLine',
      title: 'Convers\u00e3o instant\u00e2nea',
      description: `Todo o processamento acontece localmente com APIs modernas do navegador \u2013 r\u00e1pido e funcional mesmo sem liga\u00e7\u00e3o.`,
    },
  ],
  cs: (S, T) => [
    {
      icon: 'RiShieldCheckLine',
      title: '\u00dapln\u00e9 soukrom\u00ed',
      description: `Va\u0161e ${S} soubory jsou zpracov\u00e1v\u00e1ny v\u00fdhradn\u011b ve va\u0161em prohl\u00ed\u017ee\u010di. Nic se nepos\u00edl\u00e1 na server.`,
    },
    {
      icon: 'RiInfinityLine',
      title: 'Bez limit\u016f',
      description: `P\u0159ev\u00e1d\u011bjte tolik ${S} soubor\u016f na ${T}, kolik pot\u0159ebujete. \u017d\u00e1dn\u00e9 denn\u00ed limity, \u017e\u00e1dn\u00e1 omezen\u00ed velikosti, \u017e\u00e1dn\u00e9 vodoznaky.`,
    },
    {
      icon: 'RiImageEditLine',
      title: '\u0158\u00edzen\u00ed kvality',
      description: `Upravte nastaven\u00ed komprese pro nalezen\u00ed ide\u00e1ln\u00ed rovnov\u00e1hy mezi velikost\u00ed souboru a kvalitou obr\u00e1zku.`,
    },
    {
      icon: 'RiFlashlightLine',
      title: 'Okam\u017eit\u00fd p\u0159evod',
      description: `Ve\u0161ker\u00e9 zpracov\u00e1n\u00ed prob\u00edh\u00e1 lok\u00e1ln\u011b pomoc\u00ed modern\u00edch API prohl\u00ed\u017ee\u010de \u2013 rychle a i bez p\u0159ipojen\u00ed k internetu.`,
    },
  ],
  da: (S, T) => [
    { icon: 'RiShieldCheckLine', title: 'Fuld privatliv', description: `Dine ${S}-filer behandles udelukkende i din browser. Intet uploades til nogen server.` },
    {
      icon: 'RiInfinityLine',
      title: 'Ingen begr\u00e6nsninger',
      description: `Konverter s\u00e5 mange ${S}-filer til ${T} som du har brug for. Ingen daglige gr\u00e6nser, ingen st\u00f8rrelsesbegr\u00e6nsninger, ingen vandm\u00e6rker.`,
    },
    { icon: 'RiImageEditLine', title: 'Kvalitetskontrol', description: `Juster komprimeringsindstillingerne for at finde den perfekte balance mellem filst\u00f8rrelse og billedkvalitet.` },
    {
      icon: 'RiFlashlightLine',
      title: '\u00d8jeblikkelig konvertering',
      description: `Al behandling sker lokalt med moderne browser-API\u2019er \u2013 hurtigt og fungerer ogs\u00e5 uden internetforbindelse.`,
    },
  ],
  el: (S, T) => [
    {
      icon: 'RiShieldCheckLine',
      title: '\u03a0\u03bb\u03ae\u03c1\u03b5\u03c2 \u03b1\u03c0\u03cc\u03c1\u03c1\u03b7\u03c4\u03bf',
      description: `\u03a4\u03b1 \u03b1\u03c1\u03c7\u03b5\u03af\u03b1 ${S} \u03b5\u03c0\u03b5\u03be\u03b5\u03c1\u03b3\u03ac\u03b6\u03bf\u03bd\u03c4\u03b1\u03b9 \u03b1\u03c0\u03bf\u03ba\u03bb\u03b5\u03b9\u03c3\u03c4\u03b9\u03ba\u03ac \u03c3\u03c4\u03bf\u03bd \u03c6\u03c5\u03bb\u03bb\u03bf\u03bc\u03b5\u03c4\u03c1\u03b7\u03c4\u03ae \u03c3\u03b1\u03c2. \u03a4\u03af\u03c0\u03bf\u03c4\u03b1 \u03b4\u03b5\u03bd \u03b1\u03bd\u03b5\u03b2\u03b1\u03af\u03bd\u03b5\u03b9 \u03c3\u03b5 \u03ba\u03b1\u03bd\u03ad\u03bd\u03b1\u03bd \u03b4\u03b9\u03b1\u03ba\u03bf\u03bc\u03b9\u03c3\u03c4\u03ae.`,
    },
    {
      icon: 'RiInfinityLine',
      title: '\u03a7\u03c9\u03c1\u03af\u03c2 \u03cc\u03c1\u03b9\u03b1',
      description: `\u039c\u03b5\u03c4\u03b1\u03c4\u03c1\u03ad\u03c8\u03c4\u03b5 \u03cc\u03c3\u03b1 \u03b1\u03c1\u03c7\u03b5\u03af\u03b1 ${S} \u03c3\u03b5 ${T} \u03c7\u03c1\u03b5\u03b9\u03ac\u03b6\u03b5\u03c3\u03c4\u03b5. \u03a7\u03c9\u03c1\u03af\u03c2 \u03b7\u03bc\u03b5\u03c1\u03ae\u03c3\u03b9\u03b1 \u03cc\u03c1\u03b9\u03b1, \u03c7\u03c9\u03c1\u03af\u03c2 \u03c0\u03b5\u03c1\u03b9\u03bf\u03c1\u03b9\u03c3\u03bc\u03bf\u03cd\u03c2 \u03bc\u03b5\u03b3\u03ad\u03b8\u03bf\u03c5\u03c2, \u03c7\u03c9\u03c1\u03af\u03c2 \u03c5\u03b4\u03b1\u03c4\u03bf\u03b3\u03c1\u03ac\u03c6\u03b7\u03bc\u03b1.`,
    },
    {
      icon: 'RiImageEditLine',
      title: '\u0388\u03bb\u03b5\u03b3\u03c7\u03bf\u03c2 \u03c0\u03bf\u03b9\u03cc\u03c4\u03b7\u03c4\u03b1\u03c2',
      description: `\u03a0\u03c1\u03bf\u03c3\u03b1\u03c1\u03bc\u03cc\u03c3\u03c4\u03b5 \u03c4\u03b9\u03c2 \u03c1\u03c5\u03b8\u03bc\u03af\u03c3\u03b5\u03b9\u03c2 \u03c3\u03c5\u03bc\u03c0\u03af\u03b5\u03c3\u03b7\u03c2 \u03b3\u03b9\u03b1 \u03c4\u03b7\u03bd \u03b9\u03b4\u03b1\u03bd\u03b9\u03ba\u03ae \u03b9\u03c3\u03bf\u03c1\u03c1\u03bf\u03c0\u03af\u03b1 \u03bc\u03b5\u03c4\u03b1\u03be\u03cd \u03bc\u03b5\u03b3\u03ad\u03b8\u03bf\u03c5\u03c2 \u03ba\u03b1\u03b9 \u03c0\u03bf\u03b9\u03cc\u03c4\u03b7\u03c4\u03b1\u03c2.`,
    },
    {
      icon: 'RiFlashlightLine',
      title: '\u0386\u03bc\u03b5\u03c3\u03b7 \u03bc\u03b5\u03c4\u03b1\u03c4\u03c1\u03bf\u03c0\u03ae',
      description: `\u038c\u03bb\u03b7 \u03b7 \u03b5\u03c0\u03b5\u03be\u03b5\u03c1\u03b3\u03b1\u03c3\u03af\u03b1 \u03b3\u03af\u03bd\u03b5\u03c4\u03b1\u03b9 \u03c4\u03bf\u03c0\u03b9\u03ba\u03ac \u03bc\u03b5 \u03c3\u03cd\u03b3\u03c7\u03c1\u03bf\u03bd\u03b1 API \u03c4\u03bf\u03c5 \u03c6\u03c5\u03bb\u03bb\u03bf\u03bc\u03b5\u03c4\u03c1\u03b7\u03c4\u03ae \u2013 \u03b3\u03c1\u03ae\u03b3\u03bf\u03c1\u03b1 \u03ba\u03b1\u03b9 \u03c7\u03c9\u03c1\u03af\u03c2 \u03c3\u03cd\u03bd\u03b4\u03b5\u03c3\u03b7.`,
    },
  ],
  hu: (S, T) => [
    {
      icon: 'RiShieldCheckLine',
      title: 'Teljes adatv\u00e9delem',
      description: `A ${S} f\u00e1jlok kiz\u00e1r\u00f3lag a b\u00f6ng\u00e9sz\u0151ben ker\u00fclnek feldolgoz\u00e1sra. Semmi sem ker\u00fcl fel semmilyen szerverre.`,
    },
    {
      icon: 'RiInfinityLine',
      title: 'Korl\u00e1tlan',
      description: `Konvert\u00e1ljon annyi ${S} f\u00e1jlt ${T}-re, amennyire sz\u00fcks\u00e9ge van. Nincsenek napi korl\u00e1tok, m\u00e9retkorl\u00e1toz\u00e1sok vagy v\u00edzjelek.`,
    },
    {
      icon: 'RiImageEditLine',
      title: 'Min\u0151s\u00e9g-szab\u00e1lyoz\u00e1s',
      description: `\u00c1ll\u00edtsa be a t\u00f6m\u00f6r\u00edt\u00e9st a f\u00e1jlm\u00e9ret \u00e9s a k\u00e9pmin\u0151s\u00e9g t\u00f6k\u00e9letes egyens\u00faly\u00e1hoz.`,
    },
    {
      icon: 'RiFlashlightLine',
      title: 'Azonnali konvert\u00e1l\u00e1s',
      description: `A feldolgoz\u00e1s helyben t\u00f6rt\u00e9nik modern b\u00f6ng\u00e9sz\u0151 API-kkal \u2013 gyors, \u00e9s internetkapcsolat n\u00e9lk\u00fcl is m\u0171k\u00f6dik.`,
    },
  ],
  nl: (S, T) => [
    { icon: 'RiShieldCheckLine', title: 'Volledige privacy', description: `Uw ${S}-bestanden worden uitsluitend in uw browser verwerkt. Niets wordt naar een server ge\u00fcpload.` },
    { icon: 'RiInfinityLine', title: 'Geen limieten', description: `Converteer zoveel ${S}-bestanden naar ${T} als nodig. Geen dagelijkse limieten, geen groottebeperkingen, geen watermerken.` },
    { icon: 'RiImageEditLine', title: 'Kwaliteitscontrole', description: `Pas de compressie-instellingen aan voor de perfecte balans tussen bestandsgrootte en beeldkwaliteit.` },
    { icon: 'RiFlashlightLine', title: 'Directe conversie', description: `Alle verwerking gebeurt lokaal met moderne browser-API\u2019s \u2013 snel en werkt ook zonder internetverbinding.` },
  ],
  no: (S, T) => [
    { icon: 'RiShieldCheckLine', title: 'Fullstendig personvern', description: `${S}-filene dine behandles utelukkende i nettleseren din. Ingenting lastes opp til noen server.` },
    {
      icon: 'RiInfinityLine',
      title: 'Ingen begrensninger',
      description: `Konverter s\u00e5 mange ${S}-filer til ${T} som du trenger. Ingen daglige grenser, ingen st\u00f8rrelsesbegrensninger, ingen vannmerker.`,
    },
    { icon: 'RiImageEditLine', title: 'Kvalitetskontroll', description: `Juster komprimeringsinnstillingene for \u00e5 finne den perfekte balansen mellom filst\u00f8rrelse og bildekvalitet.` },
    {
      icon: 'RiFlashlightLine',
      title: '\u00d8yeblikkelig konvertering',
      description: `All behandling skjer lokalt med moderne nettleser-API-er \u2013 raskt og fungerer ogs\u00e5 uten internettforbindelse.`,
    },
  ],
  ro: (S, T) => [
    {
      icon: 'RiShieldCheckLine',
      title: 'Confiden\u021bialitate total\u0103',
      description: `Fi\u0219ierele ${S} sunt procesate exclusiv \u00een browserul dumneavoastr\u0103. Nimic nu este \u00eenc\u0103rcat pe niciun server.`,
    },
    {
      icon: 'RiInfinityLine',
      title: 'F\u0103r\u0103 limite',
      description: `Converti\u021bi c\u00e2te fi\u0219iere ${S} \u00een ${T} ave\u021bi nevoie. F\u0103r\u0103 limite zilnice, f\u0103r\u0103 restric\u021bii de m\u0103rime, f\u0103r\u0103 filigrane.`,
    },
    {
      icon: 'RiImageEditLine',
      title: 'Controlul calit\u0103\u021bii',
      description: `Ajusta\u021bi set\u0103rile de compresie pentru echilibrul perfect \u00eentre dimensiunea fi\u0219ierului \u0219i calitatea imaginii.`,
    },
    {
      icon: 'RiFlashlightLine',
      title: 'Conversie instantanee',
      description: `Toat\u0103 procesarea are loc local cu API-uri moderne ale browserului \u2013 rapid \u0219i func\u021bional chiar \u0219i f\u0103r\u0103 conexiune.`,
    },
  ],
  sv: (S, T) => [
    { icon: 'RiShieldCheckLine', title: 'Fullst\u00e4ndig integritet', description: `Dina ${S}-filer bearbetas uteslutande i din webbl\u00e4sare. Inget laddas upp till n\u00e5gon server.` },
    {
      icon: 'RiInfinityLine',
      title: 'Inga begr\u00e4nsningar',
      description: `Konvertera s\u00e5 m\u00e5nga ${S}-filer till ${T} som du beh\u00f6ver. Inga dagliga gr\u00e4nser, inga storleksbegr\u00e4nsningar, inga vattenm\u00e4rken.`,
    },
    { icon: 'RiImageEditLine', title: 'Kvalitetskontroll', description: `Justera komprimeringsinst\u00e4llningarna f\u00f6r den perfekta balansen mellan filstorlek och bildkvalitet.` },
    {
      icon: 'RiFlashlightLine',
      title: 'Omedelbar konvertering',
      description: `All bearbetning sker lokalt med moderna webbl\u00e4sar-API:er \u2013 snabbt och fungerar \u00e4ven utan internetanslutning.`,
    },
  ],
};

// ============================================================
// USE CASE ITEMS per locale (4 items: web, email/sharing, ecommerce, archival/print)
// ============================================================
function getUseCaseItems(srcKey, tgtKey, locale) {
  const src = FORMATS[srcKey];
  const tgt = FORMATS[tgtKey];
  const S = src.name;
  const T = tgt.name;
  const R = require('./_converter-data.cjs').REGIONAL[locale];

  const useCases = {
    en: () => [
      {
        icon: 'RiGlobalLine',
        title: 'Website optimization',
        description: `Convert ${S} to ${T} to ${tgtKey === 'webp' || tgtKey === 'avif' ? 'significantly reduce page load times and improve Core Web Vitals scores' : tgtKey === 'jpg' ? 'ensure universal compatibility with all browsers and content management systems' : tgtKey === 'png' ? 'preserve transparency and image quality for web graphics' : 'prepare images for web publication'}.`,
      },
      {
        icon: 'RiMailLine',
        title: 'Email and sharing',
        description: `${T} files are ${tgt.browser === 'universal' ? 'universally accepted by email clients like Gmail, Outlook, and Apple Mail' : `compatible with most modern platforms`}. ${tgtKey === 'jpg' ? 'JPG is the safest choice for email attachments due to its universal support.' : `Convert to ${T} for ${tgt.lossy ? 'smaller attachments that stay within email size limits' : 'high-quality images suitable for sharing'}.`}`,
      },
      {
        icon: 'RiShoppingBag3Line',
        title: 'E-commerce and marketplaces',
        description: `Platforms like ${R.platforms.join(', ')} ${tgtKey === 'jpg' || tgtKey === 'webp' ? `often prefer ${T} format for product images due to its optimal balance of quality and file size` : `may require specific formats \u2013 converting to ${T} ensures your product images meet their requirements`}.`,
      },
      {
        icon: 'RiPrinterLine',
        title: 'Documents and archival',
        description: `${tgtKey === 'tiff' || tgtKey === 'png' ? `${T} is an excellent choice for archival and professional printing due to its lossless compression` : tgtKey === 'jpg' ? 'JPG is widely accepted for digital documents, reports, and presentations' : `${T} provides a modern and efficient format for document image storage`}.`,
      },
    ],
    pl: () => [
      {
        icon: 'RiGlobalLine',
        title: 'Optymalizacja stron www',
        description: `Konwertuj ${S} na ${T}, aby ${tgtKey === 'webp' || tgtKey === 'avif' ? 'znacz\u0105co zmniejszy\u0107 czas \u0142adowania strony i poprawi\u0107 wyniki Core Web Vitals' : tgtKey === 'jpg' ? 'zapewni\u0107 uniwersaln\u0105 kompatybilno\u015b\u0107 ze wszystkimi przegl\u0105darkami i systemami CMS' : tgtKey === 'png' ? 'zachowa\u0107 przezroczysto\u015b\u0107 i jako\u015b\u0107 grafik internetowych' : 'przygotowa\u0107 obrazy do publikacji w internecie'}.`,
      },
      {
        icon: 'RiMailLine',
        title: 'E-mail i udost\u0119pnianie',
        description: `Pliki ${T} s\u0105 ${tgt.browser === 'universal' ? 'akceptowane przez klient\u00f3w poczty, takich jak ' + R.emailClients : 'kompatybilne z wi\u0119kszo\u015bci\u0105 nowoczesnych platform'}. ${tgtKey === 'jpg' ? 'JPG to najbezpieczniejszy wyb\u00f3r do za\u0142\u0105cznik\u00f3w e-mail dzi\u0119ki uniwersalnej obs\u0142udze.' : `Konwertuj na ${T}, aby ${tgt.lossy ? 'zmniejszy\u0107 za\u0142\u0105czniki i zmie\u015bci\u0107 si\u0119 w limitach rozmiaru' : 'uzyska\u0107 obrazy wysokiej jako\u015bci do udost\u0119pniania'}.`}`,
      },
      {
        icon: 'RiShoppingBag3Line',
        title: 'E-commerce i marketplace',
        description: `Platformy takie jak ${R.platforms.join(', ')} ${tgtKey === 'jpg' || tgtKey === 'webp' ? `cz\u0119sto preferuj\u0105 format ${T} do zdj\u0119\u0107 produkt\u00f3w ze wzgl\u0119du na optymaln\u0105 r\u00f3wnowag\u0119 jako\u015bci i rozmiaru pliku` : `mog\u0105 wymaga\u0107 okre\u015blonych format\u00f3w \u2013 konwersja na ${T} zapewnia zgodno\u015b\u0107 zdj\u0119\u0107 z ich wymaganiami`}.`,
      },
      {
        icon: 'RiPrinterLine',
        title: 'Dokumenty i archiwizacja',
        description: `${tgtKey === 'tiff' || tgtKey === 'png' ? `${T} to doskona\u0142y wyb\u00f3r do archiwizacji i profesjonalnego druku dzi\u0119ki kompresji bezstratnej` : tgtKey === 'jpg' ? 'JPG jest powszechnie akceptowany w dokumentach cyfrowych, raportach i prezentacjach' : `${T} zapewnia nowoczesny i wydajny format do przechowywania obraz\u00f3w w dokumentach`}.`,
      },
    ],
  };

  // For locales without specific implementation, generate from English template with locale platforms
  const gen = useCases[locale];
  if (gen) return gen();

  // Fallback: use the locale's regional data but English-style structure in appropriate language
  return getDefaultUseCases(srcKey, tgtKey, locale, R);
}

function getDefaultUseCases(srcKey, tgtKey, locale, R) {
  const S = FORMATS[srcKey].name;
  const T = FORMATS[tgtKey].name;
  const tgt = FORMATS[tgtKey];

  // Generic use cases that work for all locales - using locale-appropriate terms
  const webTitle =
    {
      de: 'Website-Optimierung',
      fr: 'Optimisation web',
      es: 'Optimizaci\u00f3n web',
      it: 'Ottimizzazione web',
      pt: 'Otimiza\u00e7\u00e3o web',
      cs: 'Optimalizace webu',
      da: 'Weboptimering',
      el: '\u0392\u03b5\u03bb\u03c4\u03b9\u03c3\u03c4\u03bf\u03c0\u03bf\u03af\u03b7\u03c3\u03b7 \u03b9\u03c3\u03c4\u03bf\u03c3\u03b5\u03bb\u03af\u03b4\u03b1\u03c2',
      fi: 'Verkkosivujen optimointi',
      hu: 'Weboldal-optimaliz\u00e1l\u00e1s',
      nl: 'Website-optimalisatie',
      no: 'Nettstedsoptimalisering',
      ro: 'Optimizare web',
      sv: 'Webboptimering',
    }[locale] || 'Website optimization';
  const emailTitle =
    {
      de: 'E-Mail und Teilen',
      fr: 'E-mail et partage',
      es: 'Correo y compartir',
      it: 'Email e condivisione',
      pt: 'Email e partilha',
      cs: 'E-mail a sd\u00edlen\u00ed',
      da: 'E-mail og deling',
      el: 'Email \u03ba\u03b1\u03b9 \u03ba\u03bf\u03b9\u03bd\u03bf\u03c0\u03bf\u03af\u03b7\u03c3\u03b7',
      fi: 'S\u00e4hk\u00f6posti ja jakaminen',
      hu: 'E-mail \u00e9s megoszt\u00e1s',
      nl: 'E-mail en delen',
      no: 'E-post og deling',
      ro: 'Email \u0219i partajare',
      sv: 'E-post och delning',
    }[locale] || 'Email and sharing';
  const ecomTitle =
    {
      de: 'E-Commerce',
      fr: 'E-commerce',
      es: 'Comercio electr\u00f3nico',
      it: 'E-commerce',
      pt: 'E-commerce',
      cs: 'E-commerce',
      da: 'E-handel',
      el: '\u0397\u03bb\u03b5\u03ba\u03c4\u03c1\u03bf\u03bd\u03b9\u03ba\u03cc \u03b5\u03bc\u03c0\u03cc\u03c1\u03b9\u03bf',
      fi: 'Verkkokauppa',
      hu: 'E-kereskedelem',
      nl: 'E-commerce',
      no: 'E-handel',
      ro: 'E-commerce',
      sv: 'E-handel',
    }[locale] || 'E-commerce';
  const archTitle =
    {
      de: 'Dokumente und Archivierung',
      fr: 'Documents et archivage',
      es: 'Documentos y archivo',
      it: 'Documenti e archiviazione',
      pt: 'Documentos e arquivo',
      cs: 'Dokumenty a archivace',
      da: 'Dokumenter og arkivering',
      el: '\u0388\u03b3\u03b3\u03c1\u03b1\u03c6\u03b1 \u03ba\u03b1\u03b9 \u03b1\u03c1\u03c7\u03b5\u03b9\u03bf\u03b8\u03ad\u03c4\u03b7\u03c3\u03b7',
      fi: 'Asiakirjat ja arkistointi',
      hu: 'Dokumentumok \u00e9s archiv\u00e1l\u00e1s',
      nl: 'Documenten en archivering',
      no: 'Dokumenter og arkivering',
      ro: 'Documente \u0219i arhivare',
      sv: 'Dokument och arkivering',
    }[locale] || 'Documents and archival';

  return [
    { icon: 'RiGlobalLine', title: webTitle, description: `${S} \u2192 ${T} \u2013 ${R.cms}.` },
    { icon: 'RiMailLine', title: emailTitle, description: `${T} \u2013 ${R.emailClients}.` },
    { icon: 'RiShoppingBag3Line', title: ecomTitle, description: `${R.platforms.join(', ')}.` },
    { icon: 'RiPrinterLine', title: archTitle, description: `${T} \u2013 ${R.printShops}.` },
  ];
}

module.exports = { HOW_TO_STEPS, FEATURE_ITEMS, getUseCaseItems };
