const { FORMATS } = require('./_converter-data.cjs');

// Generate FAQ items for a given converter pair and locale
function generateFaq(srcKey, tgtKey, locale) {
  const src = FORMATS[srcKey];
  const tgt = FORMATS[tgtKey];
  const S = src.name;
  const T = tgt.name;

  const faqSets = {
    en: () => {
      const items = [
        { question: `Is converting ${S} to ${T} free?`, answer: `Yes, this ${S} to ${T} converter is completely free with no limits. You can convert as many files as you need without registration or watermarks.` },
        { question: `Does the converter upload my files to a server?`, answer: `No. All processing happens locally in your browser using JavaScript and Canvas API. Your files never leave your device, ensuring complete privacy and security.` },
        { question: `Will I lose quality when converting ${S} to ${T}?`, answer: tgt.lossy && !tgt.lossless ? `${T} uses lossy compression, so there may be a slight reduction in quality depending on the compression level you choose. At higher quality settings (80-95%), the difference is typically imperceptible to the human eye.` : tgt.lossless ? `${T} supports lossless compression, so you can preserve the original image quality completely. If ${T} also supports lossy mode, you can choose lower quality for smaller files.` : `The quality depends on your chosen settings. Higher quality settings preserve more detail but result in larger files.` },
      ];

      if (src.transparency && !tgt.transparency) {
        items.push({ question: `What happens to transparent areas when converting ${S} to ${T}?`, answer: `Since ${T} does not support transparency, any transparent areas in your ${S} image will be filled with a solid background color (white by default). You can typically choose a different background color in the converter settings.` });
      }
      if (!src.transparency && tgt.transparency) {
        items.push({ question: `Can I add transparency when converting ${S} to ${T}?`, answer: `While ${T} supports transparency, the original ${S} file does not contain transparency data. The converted ${T} file will maintain the same appearance as the original without transparent areas.` });
      }

      items.push({ question: `Can I convert multiple ${S} files at once?`, answer: `Yes, the converter supports batch conversion. You can add multiple ${S} files and convert them all to ${T} simultaneously. Use the batch download option to save all converted files at once.` });

      if (srcKey === 'heic') {
        items.push({ question: `Why can't I open HEIC files on my Windows PC?`, answer: `HEIC is Apple's proprietary image format used by iPhones and iPads. Windows doesn't natively support HEIC without additional codecs. Converting HEIC to ${T} solves this compatibility issue, allowing you to view and share your photos on any device.` });
      }
      if (tgtKey === 'webp' || tgtKey === 'avif') {
        items.push({ question: `Do all browsers support ${T}?`, answer: `${T} is supported by ${tgt.browser}. For older browsers that don't support ${T}, you can use the HTML &lt;picture&gt; element to provide a fallback format like JPG or PNG.` });
      }

      items.push({ question: `What is the maximum file size I can convert?`, answer: `There is no hard file size limit since processing happens in your browser. However, very large files (over 50 MB) may take longer to process depending on your device's available memory and processing power.` });
      items.push({ question: `Does the converter work on mobile devices?`, answer: `Yes, the converter works on any device with a modern web browser, including smartphones and tablets. The interface adapts to your screen size for a comfortable experience on any device.` });

      return items.slice(0, 8);
    },
    pl: () => {
      const items = [
        { question: `Czy konwersja ${S} na ${T} jest darmowa?`, answer: `Tak, konwerter ${S} na ${T} jest ca\u0142kowicie darmowy i nie ma \u017cadnych limit\u00f3w. Mo\u017cesz konwertowa\u0107 dowoln\u0105 liczb\u0119 plik\u00f3w bez rejestracji i bez znak\u00f3w wodnych.` },
        { question: `Czy konwerter przesy\u0142a moje pliki na serwer?`, answer: `Nie. Ca\u0142e przetwarzanie odbywa si\u0119 lokalnie w Twojej przegl\u0105darce za pomoc\u0105 JavaScript i Canvas API. Pliki nigdy nie opuszczaj\u0105 Twojego urz\u0105dzenia, co gwarantuje pe\u0142n\u0105 prywatno\u015b\u0107 i bezpiecze\u0144stwo.` },
        { question: `Czy strac\u0119 jako\u015b\u0107 podczas konwersji ${S} na ${T}?`, answer: tgt.lossy && !tgt.lossless ? `${T} korzysta z kompresji stratnej, wi\u0119c mo\u017ce wyst\u0105pi\u0107 niewielkie obni\u017cenie jako\u015bci w zale\u017cno\u015bci od wybranego poziomu kompresji. Przy wy\u017cszych ustawieniach jako\u015bci (80-95%) r\u00f3\u017cnica jest zazwyczaj niezauwa\u017calna go\u0142ym okiem.` : tgt.lossless ? `${T} obs\u0142uguje kompresj\u0119 bezstratn\u0105, wi\u0119c mo\u017cesz zachowa\u0107 oryginaln\u0105 jako\u015b\u0107 obrazu w ca\u0142o\u015bci.` : `Jako\u015b\u0107 zale\u017cy od wybranych ustawie\u0144. Wy\u017csze ustawienia jako\u015bci zachowuj\u0105 wi\u0119cej szczeg\u00f3\u0142\u00f3w, ale daj\u0105 wi\u0119ksze pliki.` },
      ];

      if (src.transparency && !tgt.transparency) {
        items.push({ question: `Co si\u0119 dzieje z przezroczysto\u015bci\u0105 podczas konwersji ${S} na ${T}?`, answer: `Poniewa\u017c ${T} nie obs\u0142uguje przezroczysto\u015bci, przezroczyste obszary w obrazie ${S} zostan\u0105 wype\u0142nione jednolitym kolorem t\u0142a (domy\u015blnie bia\u0142ym).` });
      }

      items.push({ question: `Czy mog\u0119 konwertowa\u0107 wiele plik\u00f3w ${S} naraz?`, answer: `Tak, konwerter obs\u0142uguje konwersj\u0119 wsadow\u0105. Mo\u017cesz doda\u0107 wiele plik\u00f3w ${S} i przekonwertowa\u0107 je wszystkie na ${T} jednocze\u015bnie.` });

      if (srcKey === 'heic') {
        items.push({ question: `Dlaczego nie mog\u0119 otworzy\u0107 plik\u00f3w HEIC na komputerze z Windows?`, answer: `HEIC to w\u0142a\u015bciwo\u015bciowy format obraz\u00f3w Apple, u\u017cywany przez iPhone'y i iPady. System Windows nie obs\u0142uguje natywnie HEIC bez dodatkowych kodek\u00f3w. Konwersja HEIC na ${T} rozwi\u0105zuje ten problem kompatybilno\u015bci.` });
      }
      if (tgtKey === 'webp' || tgtKey === 'avif') {
        items.push({ question: `Czy wszystkie przegl\u0105darki obs\u0142uguj\u0105 ${T}?`, answer: `${T} jest obs\u0142ugiwany przez ${tgt.browser}. Dla starszych przegl\u0105darek mo\u017cna u\u017cy\u0107 elementu HTML &lt;picture&gt;, aby zapewni\u0107 zapasowy format, np. JPG lub PNG.` });
      }

      items.push({ question: `Jaki jest maksymalny rozmiar pliku do konwersji?`, answer: `Nie ma twardego limitu rozmiaru, poniewa\u017c przetwarzanie odbywa si\u0119 w przegl\u0105darce. Bardzo du\u017ce pliki (powy\u017cej 50 MB) mog\u0105 wymaga\u0107 wi\u0119cej czasu w zale\u017cno\u015bci od pami\u0119ci i mocy obliczeniowej urz\u0105dzenia.` });
      items.push({ question: `Czy konwerter dzia\u0142a na urz\u0105dzeniach mobilnych?`, answer: `Tak, konwerter dzia\u0142a na ka\u017cdym urz\u0105dzeniu z nowoczesn\u0105 przegl\u0105dark\u0105, w tym na smartfonach i tabletach. Interfejs dostosowuje si\u0119 do rozmiaru ekranu.` });

      return items.slice(0, 8);
    },
    de: () => [
      { question: `Ist die Konvertierung von ${S} in ${T} kostenlos?`, answer: `Ja, dieser ${S}-zu-${T}-Konverter ist vollst\u00e4ndig kostenlos, ohne Limits. Keine Registrierung, keine Wasserzeichen.` },
      { question: `Werden meine Dateien auf einen Server hochgeladen?`, answer: `Nein. Die gesamte Verarbeitung erfolgt lokal in Ihrem Browser. Ihre Dateien verlassen niemals Ihr Ger\u00e4t \u2013 vollst\u00e4ndig DSGVO-konform.` },
      { question: `Verliere ich Qualit\u00e4t bei der Konvertierung von ${S} in ${T}?`, answer: tgt.lossy ? `${T} verwendet verlustbehaftete Komprimierung. Bei h\u00f6heren Qualit\u00e4tseinstellungen (80-95%) ist der Unterschied f\u00fcr das menschliche Auge kaum wahrnehmbar.` : `${T} unterst\u00fctzt verlustfreie Komprimierung, sodass die Originalqualit\u00e4t vollst\u00e4ndig erhalten bleibt.` },
      { question: `Kann ich mehrere ${S}-Dateien gleichzeitig konvertieren?`, answer: `Ja, der Konverter unterst\u00fctzt Stapelkonvertierung. F\u00fcgen Sie mehrere ${S}-Dateien hinzu und konvertieren Sie alle gleichzeitig in ${T}.` },
      { question: `Wie gro\u00df d\u00fcrfen die Dateien maximal sein?`, answer: `Es gibt keine feste Gr\u00f6\u00dfenbegrenzung, da die Verarbeitung in Ihrem Browser stattfindet. Sehr gro\u00dfe Dateien (\u00fcber 50 MB) k\u00f6nnen je nach Ger\u00e4t l\u00e4nger dauern.` },
      { question: `Funktioniert der Konverter auf Mobilger\u00e4ten?`, answer: `Ja, der Konverter funktioniert auf jedem Ger\u00e4t mit einem modernen Webbrowser, einschlie\u00dflich Smartphones und Tablets.` },
    ],
    fr: () => [
      { question: `La conversion de ${S} en ${T} est-elle gratuite\u00a0?`, answer: `Oui, ce convertisseur ${S} vers ${T} est enti\u00e8rement gratuit, sans limites. Pas d\u2019inscription, pas de filigrane.` },
      { question: `Mes fichiers sont-ils envoy\u00e9s sur un serveur\u00a0?`, answer: `Non. Tout le traitement se fait localement dans votre navigateur. Vos fichiers ne quittent jamais votre appareil \u2013 conforme au RGPD.` },
      { question: `Vais-je perdre de la qualit\u00e9 en convertissant ${S} en ${T}\u00a0?`, answer: tgt.lossy ? `${T} utilise une compression avec perte. \u00c0 des param\u00e8tres de qualit\u00e9 \u00e9lev\u00e9s (80-95%), la diff\u00e9rence est imperceptible \u00e0 l\u2019\u0153il nu.` : `${T} prend en charge la compression sans perte, pr\u00e9servant la qualit\u00e9 originale.` },
      { question: `Puis-je convertir plusieurs fichiers ${S} \u00e0 la fois\u00a0?`, answer: `Oui, le convertisseur prend en charge la conversion par lots. Ajoutez plusieurs fichiers ${S} et convertissez-les tous en ${T} simultan\u00e9ment.` },
      { question: `Quelle est la taille maximale de fichier\u00a0?`, answer: `Il n\u2019y a pas de limite stricte puisque le traitement se fait dans votre navigateur. Les fichiers tr\u00e8s volumineux (plus de 50 Mo) peuvent \u00eatre plus lents.` },
      { question: `Le convertisseur fonctionne-t-il sur mobile\u00a0?`, answer: `Oui, il fonctionne sur tout appareil disposant d\u2019un navigateur web moderne, y compris smartphones et tablettes.` },
    ],
    es: () => [
      { question: `\u00bfEs gratuito convertir ${S} a ${T}?`, answer: `S\u00ed, este convertidor de ${S} a ${T} es completamente gratuito, sin l\u00edmites. Sin registro, sin marcas de agua.` },
      { question: `\u00bfSe suben mis archivos a un servidor?`, answer: `No. Todo el procesamiento ocurre localmente en tu navegador. Tus archivos nunca salen de tu dispositivo.` },
      { question: `\u00bfPerder\u00e9 calidad al convertir ${S} a ${T}?`, answer: tgt.lossy ? `${T} usa compresi\u00f3n con p\u00e9rdida. Con ajustes de calidad altos (80-95%), la diferencia es imperceptible al ojo humano.` : `${T} soporta compresi\u00f3n sin p\u00e9rdida, preservando la calidad original.` },
      { question: `\u00bfPuedo convertir varios archivos ${S} a la vez?`, answer: `S\u00ed, el convertidor soporta conversi\u00f3n por lotes. A\u00f1ade varios archivos ${S} y convi\u00e9rtelos todos a ${T} simult\u00e1neamente.` },
      { question: `\u00bfCu\u00e1l es el tama\u00f1o m\u00e1ximo de archivo?`, answer: `No hay l\u00edmite estricto ya que el procesamiento ocurre en tu navegador. Archivos muy grandes (m\u00e1s de 50 MB) pueden tardar m\u00e1s.` },
      { question: `\u00bfFunciona el convertidor en m\u00f3viles?`, answer: `S\u00ed, funciona en cualquier dispositivo con un navegador web moderno, incluyendo smartphones y tablets.` },
    ],
    it: () => [
      { question: `La conversione da ${S} a ${T} \u00e8 gratuita?`, answer: `S\u00ec, questo convertitore da ${S} a ${T} \u00e8 completamente gratuito, senza limiti. Nessuna registrazione, nessun watermark.` },
      { question: `I miei file vengono caricati su un server?`, answer: `No. L\u2019elaborazione avviene interamente nel tuo browser. I file non lasciano mai il tuo dispositivo \u2013 conforme al GDPR.` },
      { question: `Perder\u00f2 qualit\u00e0 convertendo ${S} in ${T}?`, answer: tgt.lossy ? `${T} utilizza compressione con perdita. A impostazioni di qualit\u00e0 elevate (80-95%), la differenza \u00e8 impercettibile.` : `${T} supporta la compressione senza perdita, preservando la qualit\u00e0 originale.` },
      { question: `Posso convertire pi\u00f9 file ${S} contemporaneamente?`, answer: `S\u00ec, il convertitore supporta la conversione in batch. Aggiungi pi\u00f9 file ${S} e convertili tutti in ${T} simultaneamente.` },
      { question: `Qual \u00e8 la dimensione massima del file?`, answer: `Non c\u2019\u00e8 un limite rigido poich\u00e9 l\u2019elaborazione avviene nel browser. File molto grandi (oltre 50 MB) possono richiedere pi\u00f9 tempo.` },
      { question: `Il convertitore funziona su dispositivi mobili?`, answer: `S\u00ec, funziona su qualsiasi dispositivo con un browser web moderno, inclusi smartphone e tablet.` },
    ],
    pt: () => [
      { question: `A convers\u00e3o de ${S} para ${T} \u00e9 gratuita?`, answer: `Sim, este conversor de ${S} para ${T} \u00e9 completamente gratuito, sem limites. Sem registo, sem marcas de \u00e1gua.` },
      { question: `Os meus ficheiros s\u00e3o enviados para um servidor?`, answer: `N\u00e3o. Todo o processamento acontece localmente no seu navegador. Os seus ficheiros nunca saem do seu dispositivo.` },
      { question: `Vou perder qualidade ao converter ${S} para ${T}?`, answer: tgt.lossy ? `${T} usa compress\u00e3o com perda. Em configura\u00e7\u00f5es de alta qualidade (80-95%), a diferen\u00e7a \u00e9 impercept\u00edvel.` : `${T} suporta compress\u00e3o sem perda, preservando a qualidade original.` },
      { question: `Posso converter v\u00e1rios ficheiros ${S} de uma vez?`, answer: `Sim, o conversor suporta convers\u00e3o em lote. Adicione v\u00e1rios ficheiros ${S} e converta-os todos para ${T} simultaneamente.` },
      { question: `O conversor funciona em dispositivos m\u00f3veis?`, answer: `Sim, funciona em qualquer dispositivo com um navegador web moderno, incluindo smartphones e tablets.` },
    ],
    cs: () => [
      { question: `Je p\u0159evod ${S} na ${T} zdarma?`, answer: `Ano, tento p\u0159evodn\u00edk ${S} na ${T} je zcela zdarma bez limit\u016f. Bez registrace, bez vodoznak\u016f.` },
      { question: `Jsou moje soubory nahr\u00e1v\u00e1ny na server?`, answer: `Ne. Ve\u0161ker\u00e9 zpracov\u00e1n\u00ed prob\u00edh\u00e1 lok\u00e1ln\u011b ve va\u0161em prohl\u00ed\u017ee\u010di. Soubory nikdy neopou\u0161t\u011bj\u00ed va\u0161e za\u0159\u00edzen\u00ed.` },
      { question: `P\u0159ijdu o kvalitu p\u0159i p\u0159evodu ${S} na ${T}?`, answer: tgt.lossy ? `${T} pou\u017e\u00edv\u00e1 ztr\u00e1tovou kompresi. P\u0159i vy\u0161\u0161\u00edch nastaven\u00edch kvality (80-95%) je rozd\u00edl lidsk\u00fdm okem nepost\u0159ehnuteln\u00fd.` : `${T} podporuje bezeztr\u00e1tovou kompresi, kter\u00e1 zachov\u00e1v\u00e1 p\u016fvodn\u00ed kvalitu.` },
      { question: `Mohu p\u0159ev\u00e9st v\u00edce ${S} soubor\u016f najednou?`, answer: `Ano, p\u0159evodn\u00edk podporuje d\u00e1vkov\u00fd p\u0159evod. P\u0159idejte v\u00edce ${S} soubor\u016f a p\u0159eve\u010fte je v\u0161echny na ${T} sou\u010dasn\u011b.` },
      { question: `Funguje p\u0159evodn\u00edk na mobiln\u00edch za\u0159\u00edzen\u00edch?`, answer: `Ano, funguje na jak\u00e9mkoli za\u0159\u00edzen\u00ed s modern\u00edm webov\u00fdm prohl\u00ed\u017ee\u010dem, v\u010detn\u011b smartphone\u016f a tablet\u016f.` },
    ],
    da: () => [
      { question: `Er det gratis at konvertere ${S} til ${T}?`, answer: `Ja, denne ${S}-til-${T}-konverter er helt gratis uden begr\u00e6nsninger. Ingen registrering, ingen vandm\u00e6rker.` },
      { question: `Uploades mine filer til en server?`, answer: `Nej. Al behandling sker lokalt i din browser. Dine filer forlader aldrig din enhed.` },
      { question: `Mister jeg kvalitet ved konvertering af ${S} til ${T}?`, answer: tgt.lossy ? `${T} bruger tabsgivende komprimering. Ved h\u00f8jere kvalitetsindstillinger (80-95%) er forskellen usynlig for det menneskelige \u00f8je.` : `${T} underst\u00f8tter tabsfri komprimering, der bevarer den originale kvalitet.` },
      { question: `Kan jeg konvertere flere ${S}-filer p\u00e5 \u00e9n gang?`, answer: `Ja, konverteren underst\u00f8tter batchkonvertering. Tilf\u00f8j flere ${S}-filer og konverter dem alle til ${T} samtidigt.` },
      { question: `Fungerer konverteren p\u00e5 mobilenheder?`, answer: `Ja, den fungerer p\u00e5 enhver enhed med en moderne webbrowser, herunder smartphones og tablets.` },
    ],
    el: () => [
      { question: `\u0395\u03af\u03bd\u03b1\u03b9 \u03b4\u03c9\u03c1\u03b5\u03ac\u03bd \u03b7 \u03bc\u03b5\u03c4\u03b1\u03c4\u03c1\u03bf\u03c0\u03ae ${S} \u03c3\u03b5 ${T};`, answer: `\u039d\u03b1\u03b9, \u03b1\u03c5\u03c4\u03cc\u03c2 \u03bf \u03bc\u03b5\u03c4\u03b1\u03c4\u03c1\u03bf\u03c0\u03ad\u03b1\u03c2 ${S} \u03c3\u03b5 ${T} \u03b5\u03af\u03bd\u03b1\u03b9 \u03b1\u03c0\u03bf\u03bb\u03cd\u03c4\u03c9\u03c2 \u03b4\u03c9\u03c1\u03b5\u03ac\u03bd \u03c7\u03c9\u03c1\u03af\u03c2 \u03cc\u03c1\u03b9\u03b1. \u0394\u03b5\u03bd \u03b1\u03c0\u03b1\u03b9\u03c4\u03b5\u03af\u03c4\u03b1\u03b9 \u03b5\u03b3\u03b3\u03c1\u03b1\u03c6\u03ae.` },
      { question: `\u0391\u03bd\u03b5\u03b2\u03b1\u03af\u03bd\u03bf\u03c5\u03bd \u03c4\u03b1 \u03b1\u03c1\u03c7\u03b5\u03af\u03b1 \u03bc\u03bf\u03c5 \u03c3\u03b5 \u03ba\u03ac\u03c0\u03bf\u03b9\u03bf\u03bd \u03b4\u03b9\u03b1\u03ba\u03bf\u03bc\u03b9\u03c3\u03c4\u03ae;`, answer: `\u038c\u03c7\u03b9. \u038c\u03bb\u03b7 \u03b7 \u03b5\u03c0\u03b5\u03be\u03b5\u03c1\u03b3\u03b1\u03c3\u03af\u03b1 \u03b3\u03af\u03bd\u03b5\u03c4\u03b1\u03b9 \u03c4\u03bf\u03c0\u03b9\u03ba\u03ac \u03c3\u03c4\u03bf\u03bd \u03c6\u03c5\u03bb\u03bb\u03bf\u03bc\u03b5\u03c4\u03c1\u03b7\u03c4\u03ae \u03c3\u03b1\u03c2. \u03a4\u03b1 \u03b1\u03c1\u03c7\u03b5\u03af\u03b1 \u03b4\u03b5\u03bd \u03c6\u03b5\u03cd\u03b3\u03bf\u03c5\u03bd \u03c0\u03bf\u03c4\u03ad \u03b1\u03c0\u03cc \u03c4\u03b7 \u03c3\u03c5\u03c3\u03ba\u03b5\u03c5\u03ae \u03c3\u03b1\u03c2.` },
      { question: `\u0398\u03b1 \u03c7\u03ac\u03c3\u03c9 \u03c0\u03bf\u03b9\u03cc\u03c4\u03b7\u03c4\u03b1;`, answer: tgt.lossy ? `\u03a4\u03bf ${T} \u03c7\u03c1\u03b7\u03c3\u03b9\u03bc\u03bf\u03c0\u03bf\u03b9\u03b5\u03af \u03c3\u03c5\u03bc\u03c0\u03af\u03b5\u03c3\u03b7 \u03bc\u03b5 \u03b1\u03c0\u03ce\u03bb\u03b5\u03b9\u03b5\u03c2. \u03a3\u03b5 \u03c5\u03c8\u03b7\u03bb\u03ad\u03c2 \u03c1\u03c5\u03b8\u03bc\u03af\u03c3\u03b5\u03b9\u03c2 (80-95%) \u03b7 \u03b4\u03b9\u03b1\u03c6\u03bf\u03c1\u03ac \u03b5\u03af\u03bd\u03b1\u03b9 \u03b1\u03b4\u03b9\u03cc\u03c1\u03b1\u03c4\u03b7.` : `\u03a4\u03bf ${T} \u03c5\u03c0\u03bf\u03c3\u03c4\u03b7\u03c1\u03af\u03b6\u03b5\u03b9 \u03c3\u03c5\u03bc\u03c0\u03af\u03b5\u03c3\u03b7 \u03c7\u03c9\u03c1\u03af\u03c2 \u03b1\u03c0\u03ce\u03bb\u03b5\u03b9\u03b5\u03c2, \u03b4\u03b9\u03b1\u03c4\u03b7\u03c1\u03ce\u03bd\u03c4\u03b1\u03c2 \u03c4\u03b7\u03bd \u03b1\u03c1\u03c7\u03b9\u03ba\u03ae \u03c0\u03bf\u03b9\u03cc\u03c4\u03b7\u03c4\u03b1.` },
      { question: `\u039c\u03c0\u03bf\u03c1\u03ce \u03bd\u03b1 \u03bc\u03b5\u03c4\u03b1\u03c4\u03c1\u03ad\u03c8\u03c9 \u03c0\u03bf\u03bb\u03bb\u03b1\u03c0\u03bb\u03ac \u03b1\u03c1\u03c7\u03b5\u03af\u03b1;`, answer: `\u039d\u03b1\u03b9, \u03c5\u03c0\u03bf\u03c3\u03c4\u03b7\u03c1\u03af\u03b6\u03b5\u03c4\u03b1\u03b9 \u03bc\u03b1\u03b6\u03b9\u03ba\u03ae \u03bc\u03b5\u03c4\u03b1\u03c4\u03c1\u03bf\u03c0\u03ae.` },
      { question: `\u039b\u03b5\u03b9\u03c4\u03bf\u03c5\u03c1\u03b3\u03b5\u03af \u03c3\u03b5 \u03ba\u03b9\u03bd\u03b7\u03c4\u03ac;`, answer: `\u039d\u03b1\u03b9, \u03bb\u03b5\u03b9\u03c4\u03bf\u03c5\u03c1\u03b3\u03b5\u03af \u03c3\u03b5 \u03ba\u03ac\u03b8\u03b5 \u03c3\u03c5\u03c3\u03ba\u03b5\u03c5\u03ae \u03bc\u03b5 \u03c3\u03cd\u03b3\u03c7\u03c1\u03bf\u03bd\u03bf \u03c6\u03c5\u03bb\u03bb\u03bf\u03bc\u03b5\u03c4\u03c1\u03b7\u03c4\u03ae.` },
    ],
    fi: () => [
      { question: `Onko ${S}:n muuntaminen ${T}:ksi ilmaista?`, answer: `Kyll\u00e4, t\u00e4m\u00e4 ${S}-${T}-muunnin on t\u00e4ysin ilmainen ilman rajoituksia. Ei rekister\u00f6inti\u00e4, ei vesileimoja.` },
      { question: `Ladataanko tiedostoni palvelimelle?`, answer: `Ei. K\u00e4sittely tapahtuu paikallisesti selaimessasi. Tiedostosi eiv\u00e4t koskaan poistu laitteeltasi.` },
      { question: `Menet\u00e4nk\u00f6 laatua muunnettaessa?`, answer: tgt.lossy ? `${T} k\u00e4ytt\u00e4\u00e4 h\u00e4vi\u00f6llist\u00e4 pakkausta. Korkeilla asetuksilla (80-95%) ero on silm\u00e4lle huomaamaton.` : `${T} tukee h\u00e4vi\u00f6t\u00f6nt\u00e4 pakkausta, joka s\u00e4ilytt\u00e4\u00e4 alkuper\u00e4isen laadun.` },
      { question: `Voinko muuntaa useita tiedostoja kerralla?`, answer: `Kyll\u00e4, muunnin tukee er\u00e4muunnosta. Lis\u00e4\u00e4 useita ${S}-tiedostoja ja muunna ne kaikki ${T}-muotoon samanaikaisesti.` },
      { question: `Toimiiko muunnin mobiililaitteilla?`, answer: `Kyll\u00e4, se toimii mill\u00e4 tahansa laitteella, jossa on moderni selain.` },
    ],
    hu: () => [
      { question: `Ingyenes a ${S} ${T}-re konvert\u00e1l\u00e1s?`, answer: `Igen, ez a ${S}-${T} konverter teljesen ingyenes, korl\u00e1tok n\u00e9lk\u00fcl. Nem sz\u00fcks\u00e9ges regisztr\u00e1ci\u00f3, nincsenek v\u00edzjelek.` },
      { question: `Felt\u00f6lt\u0151dnek a f\u00e1jljaim valamilyen szerverre?`, answer: `Nem. A teljes feldolgoz\u00e1s helyben, a b\u00f6ng\u00e9sz\u0151ben t\u00f6rt\u00e9nik. A f\u00e1jlok soha nem hagyj\u00e1k el az eszk\u00f6z\u00e9t.` },
      { question: `Vesztek min\u0151s\u00e9get a konvert\u00e1l\u00e1skor?`, answer: tgt.lossy ? `A ${T} vesztes\u00e9ges t\u00f6m\u00f6r\u00edt\u00e9st haszn\u00e1l. Magasabb min\u0151s\u00e9gi be\u00e1ll\u00edt\u00e1sokn\u00e1l (80-95%) a k\u00fcl\u00f6nbs\u00e9g szabad szemmel \u00e9szrevehetetlen.` : `A ${T} vesztes\u00e9gmentes t\u00f6m\u00f6r\u00edt\u00e9st t\u00e1mogat, meg\u0151rizve az eredeti min\u0151s\u00e9get.` },
      { question: `Konvert\u00e1lhatok t\u00f6bb f\u00e1jlt egyszerre?`, answer: `Igen, a konverter t\u00e1mogatja a k\u00f6tegelt konvert\u00e1l\u00e1st.` },
      { question: `M\u0171k\u00f6dik mobileszk\u00f6z\u00f6k\u00f6n?`, answer: `Igen, b\u00e1rmely modern b\u00f6ng\u00e9sz\u0151vel rendelkez\u0151 eszk\u00f6z\u00f6n m\u0171k\u00f6dik.` },
    ],
    nl: () => [
      { question: `Is het converteren van ${S} naar ${T} gratis?`, answer: `Ja, deze ${S}-naar-${T}-converter is volledig gratis, zonder limieten. Geen registratie, geen watermerken.` },
      { question: `Worden mijn bestanden naar een server ge\u00fcpload?`, answer: `Nee. Alle verwerking gebeurt lokaal in uw browser. Uw bestanden verlaten nooit uw apparaat.` },
      { question: `Verlies ik kwaliteit bij het converteren?`, answer: tgt.lossy ? `${T} gebruikt lossy compressie. Bij hogere kwaliteitsinstellingen (80-95%) is het verschil onzichtbaar voor het menselijk oog.` : `${T} ondersteunt lossless compressie, waardoor de originele kwaliteit behouden blijft.` },
      { question: `Kan ik meerdere bestanden tegelijk converteren?`, answer: `Ja, de converter ondersteunt batchconversie.` },
      { question: `Werkt de converter op mobiele apparaten?`, answer: `Ja, hij werkt op elk apparaat met een moderne webbrowser.` },
    ],
    no: () => [
      { question: `Er det gratis \u00e5 konvertere ${S} til ${T}?`, answer: `Ja, denne ${S}-til-${T}-konverteren er helt gratis uten begrensninger. Ingen registrering, ingen vannmerker.` },
      { question: `Lastes filene mine opp til en server?`, answer: `Nei. All behandling skjer lokalt i nettleseren din. Filene dine forlater aldri enheten din.` },
      { question: `Mister jeg kvalitet ved konvertering?`, answer: tgt.lossy ? `${T} bruker tapsbringende komprimering. Ved h\u00f8yere kvalitetsinnstillinger (80-95%) er forskjellen usynlig for det menneskelige \u00f8ye.` : `${T} st\u00f8tter tapsfri komprimering som bevarer den originale kvaliteten.` },
      { question: `Kan jeg konvertere flere filer samtidig?`, answer: `Ja, konverteren st\u00f8tter batchkonvertering.` },
      { question: `Fungerer konverteren p\u00e5 mobilenheter?`, answer: `Ja, den fungerer p\u00e5 enhver enhet med en moderne nettleser.` },
    ],
    ro: () => [
      { question: `Este gratuit\u0103 conversia ${S} \u00een ${T}?`, answer: `Da, acest convertor ${S} \u00een ${T} este complet gratuit, f\u0103r\u0103 limite. F\u0103r\u0103 \u00eenregistrare, f\u0103r\u0103 filigrane.` },
      { question: `Sunt fi\u0219ierele mele \u00eenc\u0103rcate pe un server?`, answer: `Nu. Toat\u0103 procesarea are loc local \u00een browserul dumneavoastr\u0103. Fi\u0219ierele nu p\u0103r\u0103sesc niciodat\u0103 dispozitivul.` },
      { question: `Voi pierde calitate la conversie?`, answer: tgt.lossy ? `${T} folose\u0219te compresie cu pierderi. La set\u0103ri de calitate ridicate (80-95%), diferen\u021ba este imperceptibil\u0103.` : `${T} suport\u0103 compresie f\u0103r\u0103 pierderi, p\u0103str\u00e2nd calitatea original\u0103.` },
      { question: `Pot converti mai multe fi\u0219iere simultan?`, answer: `Da, convertorul suport\u0103 conversia \u00een lot.` },
      { question: `Func\u021bioneaz\u0103 pe dispozitive mobile?`, answer: `Da, func\u021bioneaz\u0103 pe orice dispozitiv cu un browser web modern.` },
    ],
    sv: () => [
      { question: `\u00c4r det gratis att konvertera ${S} till ${T}?`, answer: `Ja, denna ${S}-till-${T}-konverterare \u00e4r helt gratis utan begr\u00e4nsningar. Ingen registrering, inga vattenm\u00e4rken.` },
      { question: `Laddas mina filer upp till en server?`, answer: `Nej. All bearbetning sker lokalt i din webbl\u00e4sare. Dina filer l\u00e4mnar aldrig din enhet.` },
      { question: `Tappar jag kvalitet vid konvertering?`, answer: tgt.lossy ? `${T} anv\u00e4nder f\u00f6rlustbringande komprimering. Vid h\u00f6gre kvalitetsinst\u00e4llningar (80-95%) \u00e4r skillnaden om\u00e4rkbar f\u00f6r \u00f6gat.` : `${T} st\u00f6djer f\u00f6rlustfri komprimering som bevarar originalkvaliteten.` },
      { question: `Kan jag konvertera flera filer samtidigt?`, answer: `Ja, konverteraren st\u00f6djer batchkonvertering.` },
      { question: `Fungerar konverteraren p\u00e5 mobila enheter?`, answer: `Ja, den fungerar p\u00e5 alla enheter med en modern webbl\u00e4sare.` },
    ],
  };

  const gen = faqSets[locale];
  return gen ? gen() : faqSets.en();
}

// ============================================================
// REGIONAL / COMPARISON CONTENT (sectionInfo HTML)
// ============================================================
function generateComparisonHtml(srcKey, tgtKey, locale) {
  const src = FORMATS[srcKey];
  const tgt = FORMATS[tgtKey];
  const S = src.name;
  const T = tgt.name;

  const compLabel = { en: 'Feature', pl: 'Cecha', de: 'Eigenschaft', fr: 'Caract\u00e9ristique', es: 'Caracter\u00edstica', it: 'Caratteristica', pt: 'Carater\u00edstica', cs: 'Vlastnost', da: 'Egenskab', el: '\u03a7\u03b1\u03c1\u03b1\u03ba\u03c4\u03b7\u03c1\u03b9\u03c3\u03c4\u03b9\u03ba\u03cc', fi: 'Ominaisuus', hu: 'Jellemz\u0151', nl: 'Eigenschap', no: 'Egenskap', ro: 'Caracteristic\u0103', sv: 'Egenskap' }[locale] || 'Feature';
  const compYes = { en: 'Yes', pl: 'Tak', de: 'Ja', fr: 'Oui', es: 'S\u00ed', it: 'S\u00ec', pt: 'Sim', cs: 'Ano', da: 'Ja', el: '\u039d\u03b1\u03b9', fi: 'Kyll\u00e4', hu: 'Igen', nl: 'Ja', no: 'Ja', ro: 'Da', sv: 'Ja' }[locale] || 'Yes';
  const compNo = { en: 'No', pl: 'Nie', de: 'Nein', fr: 'Non', es: 'No', it: 'No', pt: 'N\u00e3o', cs: 'Ne', da: 'Nej', el: '\u038c\u03c7\u03b9', fi: 'Ei', hu: 'Nem', nl: 'Nee', no: 'Nei', ro: 'Nu', sv: 'Nej' }[locale] || 'No';

  const lossyL = { en: 'Lossy', pl: 'Stratna', de: 'Verlustbehaftet', fr: 'Avec perte', es: 'Con p\u00e9rdida', it: 'Con perdita', pt: 'Com perda', cs: 'Ztr\u00e1tov\u00e1', da: 'Tabsgivende', el: '\u039c\u03b5 \u03b1\u03c0\u03ce\u03bb\u03b5\u03b9\u03b5\u03c2', fi: 'H\u00e4vi\u00f6llinen', hu: 'Vesztes\u00e9ges', nl: 'Lossy', no: 'Tapsbringende', ro: 'Cu pierderi', sv: 'F\u00f6rlustbringande' }[locale] || 'Lossy';
  const losslessL = { en: 'Lossless', pl: 'Bezstratna', de: 'Verlustfrei', fr: 'Sans perte', es: 'Sin p\u00e9rdida', it: 'Senza perdita', pt: 'Sem perda', cs: 'Bezeztr\u00e1tov\u00e1', da: 'Tabsfri', el: '\u03a7\u03c9\u03c1\u03af\u03c2 \u03b1\u03c0\u03ce\u03bb\u03b5\u03b9\u03b5\u03c2', fi: 'H\u00e4vi\u00f6t\u00f6n', hu: 'Vesztes\u00e9gmentes', nl: 'Lossless', no: 'Tapsfri', ro: 'F\u0103r\u0103 pierderi', sv: 'F\u00f6rlustfri' }[locale] || 'Lossless';
  const bothL = { en: 'Both', pl: 'Obie', de: 'Beide', fr: 'Les deux', es: 'Ambas', it: 'Entrambe', pt: 'Ambas', cs: 'Ob\u011b', da: 'Begge', el: '\u039a\u03b1\u03b9 \u03c4\u03b1 \u03b4\u03cd\u03bf', fi: 'Molemmat', hu: 'Mindkett\u0151', nl: 'Beide', no: 'Begge', ro: 'Ambele', sv: 'B\u00e5da' }[locale] || 'Both';

  const compRow = { en: 'Compression', pl: 'Kompresja', de: 'Kompression', fr: 'Compression', es: 'Compresi\u00f3n', it: 'Compressione', pt: 'Compress\u00e3o', cs: 'Komprese', da: 'Komprimering', el: '\u03a3\u03c5\u03bc\u03c0\u03af\u03b5\u03c3\u03b7', fi: 'Pakkaus', hu: 'T\u00f6m\u00f6r\u00edt\u00e9s', nl: 'Compressie', no: 'Komprimering', ro: 'Compresie', sv: 'Komprimering' }[locale] || 'Compression';
  const transRow = { en: 'Transparency', pl: 'Przezroczysto\u015b\u0107', de: 'Transparenz', fr: 'Transparence', es: 'Transparencia', it: 'Trasparenza', pt: 'Transpar\u00eancia', cs: 'Pr\u016fhlednost', da: 'Gennemsigtighed', el: '\u0394\u03b9\u03b1\u03c6\u03ac\u03bd\u03b5\u03b9\u03b1', fi: 'L\u00e4pin\u00e4kyvyys', hu: '\u00c1tl\u00e1tsz\u00f3s\u00e1g', nl: 'Transparantie', no: 'Gjennomsiktighet', ro: 'Transparen\u021b\u0103', sv: 'Transparens' }[locale] || 'Transparency';
  const animRow = { en: 'Animation', pl: 'Animacja', de: 'Animation', fr: 'Animation', es: 'Animaci\u00f3n', it: 'Animazione', pt: 'Anima\u00e7\u00e3o', cs: 'Animace', da: 'Animation', el: 'Animation', fi: 'Animaatio', hu: 'Anim\u00e1ci\u00f3', nl: 'Animatie', no: 'Animasjon', ro: 'Anima\u021bie', sv: 'Animation' }[locale] || 'Animation';
  const browserRow = { en: 'Browser support', pl: 'Obs\u0142uga przegl\u0105darek', de: 'Browserunterst\u00fctzung', fr: 'Support navigateur', es: 'Soporte navegador', it: 'Supporto browser', pt: 'Suporte navegador', cs: 'Podpora prohl\u00ed\u017ee\u010d\u016f', da: 'Browserunderst\u00f8ttelse', el: '\u03a5\u03c0\u03bf\u03c3\u03c4\u03ae\u03c1\u03b9\u03be\u03b7 \u03c6\u03c5\u03bb\u03bb\u03bf\u03bc\u03b5\u03c4\u03c1\u03b7\u03c4\u03ae', fi: 'Selaintuki', hu: 'B\u00f6ng\u00e9sz\u0151t\u00e1mogat\u00e1s', nl: 'Browserondersteuning', no: 'Nettleserst\u00f8tte', ro: 'Suport browser', sv: 'Webbl\u00e4sarst\u00f6d' }[locale] || 'Browser support';

  function compType(f) {
    if (f.lossy && f.lossless) return bothL;
    if (f.lossy) return lossyL;
    return losslessL;
  }

  let html = `<div class="overflow-x-auto"><table class="w-full text-sm"><thead><tr class="border-b"><th class="py-2 text-left">${compLabel}</th><th class="py-2 text-center">${S}</th><th class="py-2 text-center">${T}</th></tr></thead><tbody>`;
  html += `<tr class="border-b"><td class="py-2">${compRow}</td><td class="py-2 text-center">${compType(src)}</td><td class="py-2 text-center">${compType(tgt)}</td></tr>`;
  html += `<tr class="border-b"><td class="py-2">${transRow}</td><td class="py-2 text-center">${src.transparency ? compYes : compNo}</td><td class="py-2 text-center">${tgt.transparency ? compYes : compNo}</td></tr>`;
  html += `<tr class="border-b"><td class="py-2">${animRow}</td><td class="py-2 text-center">${src.animation ? compYes : compNo}</td><td class="py-2 text-center">${tgt.animation ? compYes : compNo}</td></tr>`;
  html += `<tr><td class="py-2">${browserRow}</td><td class="py-2 text-center">${src.browser}</td><td class="py-2 text-center">${tgt.browser}</td></tr>`;
  html += `</tbody></table></div>`;

  return html;
}

function generateRegionalHtml(srcKey, tgtKey, locale) {
  const src = FORMATS[srcKey];
  const tgt = FORMATS[tgtKey];
  const S = src.name;
  const T = tgt.name;
  const R = require('./_converter-data.cjs').REGIONAL[locale];

  const gens = {
    en: () => `<p class="text-mid mb-4">${R.focus} Whether you are preparing product images for ${R.platforms.join(', ')}, optimizing graphics for ${R.cms}, or converting photos for ${R.gov}, having the right format matters.</p><p class="text-mid mb-4">Modern web standards increasingly favor efficient formats. Google PageSpeed Insights and Core Web Vitals metrics reward pages that use optimized images. Converting ${S} to ${T} can directly improve your Largest Contentful Paint (LCP) score, which impacts both search rankings and user experience.</p><p class="text-mid">For email marketing campaigns and social media, ${T} ${tgt.browser === 'universal' ? 'offers maximum compatibility across all platforms' : 'provides excellent compression while maintaining visual quality'}. Whether you are a freelancer, small business owner, or enterprise user, this converter handles your image conversion needs reliably and securely.</p>`,
    pl: () => `<p class="text-mid mb-4">${R.focus} Niezale\u017cnie od tego, czy przygotowujesz zdj\u0119cia produkt\u00f3w na ${R.platforms.join(', ')}, optymalizujesz grafiki w ${R.cms}, czy konwertujesz zdj\u0119cia do ${R.gov} \u2013 odpowiedni format ma kluczowe znaczenie.</p><p class="text-mid mb-4">Wsp\u00f3\u0142czesne standardy webowe coraz bardziej faworyzuj\u0105 wydajne formaty. Google PageSpeed Insights i metryki Core Web Vitals nagradzaj\u0105 strony z zoptymalizowanymi obrazami. Konwersja ${S} na ${T} mo\u017ce bezpo\u015brednio poprawi\u0107 wska\u017anik Largest Contentful Paint (LCP), co wp\u0142ywa na pozycje w wyszukiwarce i do\u015bwiadczenie u\u017cytkownik\u00f3w.</p><p class="text-mid">W przypadku kampanii e-mail marketingowych i medi\u00f3w spo\u0142eczno\u015bciowych, ${T} ${tgt.browser === 'universal' ? 'zapewnia maksymaln\u0105 kompatybilno\u015b\u0107 ze wszystkimi platformami' : 'oferuje doskona\u0142\u0105 kompresj\u0119 przy zachowaniu jako\u015bci wizualnej'}. Niezale\u017cnie od tego, czy jeste\u015b freelancerem, w\u0142a\u015bcicielem ma\u0142ej firmy czy u\u017cytkownikiem korporacyjnym \u2013 ten konwerter niezawodnie obs\u0142u\u017cy Twoje potrzeby.</p>`,
    de: () => `<p class="text-mid mb-4">${R.focus} Ob Sie Produktbilder f\u00fcr ${R.platforms.join(', ')} vorbereiten, Grafiken in ${R.cms} optimieren oder Bilder f\u00fcr ${R.gov} konvertieren \u2013 das richtige Format ist entscheidend.</p><p class="text-mid mb-4">Moderne Webstandards bevorzugen zunehmend effiziente Formate. Google PageSpeed Insights und Core Web Vitals belohnen Seiten mit optimierten Bildern. Die Konvertierung von ${S} in ${T} kann Ihren Largest Contentful Paint (LCP) Wert direkt verbessern.</p><p class="text-mid">F\u00fcr E-Mail-Marketing und Social Media bietet ${T} ${tgt.browser === 'universal' ? 'maximale Kompatibilit\u00e4t' : 'hervorragende Kompression bei guter Qualit\u00e4t'}. Die lokale Verarbeitung gew\u00e4hrleistet dabei vollst\u00e4ndige DSGVO-Konformit\u00e4t.</p>`,
    fr: () => `<p class="text-mid mb-4">${R.focus} Que vous pr\u00e9pariez des images pour ${R.platforms.join(', ')}, optimisiez des graphiques dans ${R.cms} ou convertissiez des photos pour ${R.gov}, le bon format est essentiel.</p><p class="text-mid mb-4">Les standards web modernes favorisent de plus en plus les formats efficaces. La conversion de ${S} en ${T} peut directement am\u00e9liorer votre score Largest Contentful Paint (LCP).</p><p class="text-mid">Le traitement local garantit la conformit\u00e9 RGPD pour les utilisateurs en France, au Canada et en Belgique.</p>`,
    es: () => `<p class="text-mid mb-4">${R.focus} Ya sea que prepares im\u00e1genes de productos para ${R.platforms.join(', ')} u optimices gr\u00e1ficos en ${R.cms}, el formato correcto es esencial.</p><p class="text-mid mb-4">Los est\u00e1ndares web modernos favorecen cada vez m\u00e1s los formatos eficientes. Convertir ${S} a ${T} puede mejorar directamente tu puntuaci\u00f3n LCP.</p><p class="text-mid">El procesamiento local garantiza la privacidad total de tus datos.</p>`,
  };

  const gen = gens[locale];
  if (gen) return gen();

  // Fallback for other locales
  return `<p class="text-mid mb-4">${R.focus}</p><p class="text-mid">${R.platforms.join(', ')} \u2013 ${R.cms}.</p>`;
}

module.exports = { generateFaq, generateComparisonHtml, generateRegionalHtml };
