/**
 * Differentiate "X-to-Y conversion in practice" sectionInfo in DE converter files.
 * Replaces the generic, near-identical "in practice" block with pair-specific content.
 */
const fs = require('fs');
const path = require('path');
const TOOLS = path.join(__dirname, '..', 'data', 'de', 'tools');

// Pair-specific "in practice" content — 3 paragraphs each:
// P1: real-world scenario for THIS specific conversion
// P2: technical/practical specifics
// P3: regional context + privacy
const PAIR = {
  'png-to-webp': {
    p1: 'Webdesigner und Shopbetreiber im DACH-Raum setzen PNG für Logos, Produktfreisteller und UI-Elemente mit Transparenz ein. Beim Wechsel zu WebP bleibt die Transparenz vollständig erhalten, während die Dateigröße um 25–35% sinkt – ein direkter Gewinn für Ladezeiten und Core Web Vitals.',
    p2: 'Besonders bei Grafiken mit großen einfarbigen Flächen (Logos, Icons) ist die Ersparnis enorm: Dateien von 200–500 KB schrumpfen oft auf unter 100 KB. Für Produktfreisteller auf Amazon.de, Otto.de oder Shopify-Shops bedeutet das schnellere Kategorieseiten und eine bessere Nutzererfahrung auf Mobilgeräten.',
    p3: 'Die gesamte Verarbeitung erfolgt lokal in Ihrem Browser – ideal für Agenturen und Unternehmen, die DSGVO-konform arbeiten müssen. Sensible Produktbilder oder Kundengrafiken verlassen niemals Ihr Gerät.',
  },
  'png-to-jpg': {
    p1: 'PNG-Dateien mit Transparenz sind oft mehrere Megabyte groß. Wenn Transparenz nicht benötigt wird – etwa für Bewerbungsfotos, Dokumentenscans oder Social-Media-Posts – reduziert die Konvertierung zu JPG die Dateigröße drastisch.',
    p2: 'Viele Plattformen wie XING, LinkedIn oder Bewerbungsportale akzeptieren ausschließlich JPG. Auch E-Mail-Anhänge profitieren: Ein 3 MB PNG-Screenshot wird als JPG oft nur noch 200–400 KB groß. Die Qualitätseinstellung von 85% bietet den besten Kompromiss zwischen Dateigröße und visueller Qualität.',
    p3: 'Gerade bei Bewerbungsunterlagen und vertraulichen Dokumenten ist die lokale Verarbeitung im Browser entscheidend – Ihre Dateien verlassen niemals Ihr Gerät. Vollständig DSGVO-konform.',
  },
  'png-to-avif': {
    p1: 'AVIF ist das effizienteste Bildformat der aktuellen Generation und kann PNG-Dateien um bis zu 50% verkleinern. Für leistungskritische Webprojekte, bei denen jedes Kilobyte zählt, ist PNG-zu-AVIF die optimale Konvertierung.',
    p2: 'AVIF unterstützt Transparenz, HDR und eine Farbtiefe von bis zu 12 Bit pro Kanal. Chrome, Firefox und Safari 16+ unterstützen AVIF nativ. Für ältere Browser empfiehlt sich ein Fallback über das HTML-Element <code>&lt;picture&gt;</code> mit PNG oder WebP als Alternative.',
    p3: 'Deutsche Unternehmen, die ihre PageSpeed-Insights-Werte optimieren möchten, profitieren besonders: AVIF verbessert den Largest Contentful Paint (LCP) messbar. Die lokale Verarbeitung gewährleistet DSGVO-Konformität.',
  },
  'png-to-gif': {
    p1: 'Einfache Grafiken wie Icons, Logos oder Diagramme mit begrenzter Farbpalette lassen sich als GIF oft kompakter speichern als als PNG. Die Konvertierung eignet sich besonders, wenn das Zielformat GIF vorgeschrieben ist.',
    p2: 'Beachten Sie: GIF unterstützt maximal 256 Farben. Fotorealistische PNG-Bilder verlieren bei der Konvertierung sichtbar an Qualität. Transparenz wird nur binär unterstützt (sichtbar/unsichtbar), nicht als stufenloser Alphakanal wie bei PNG.',
    p3: 'Für Präsentationen, Newsletter-Grafiken oder Systeme, die ausschließlich GIF akzeptieren, ist diese Konvertierung eine schnelle Lösung – vollständig lokal und ohne Dateiupload.',
  },
  'png-to-tiff': {
    p1: 'Druckereien, Verlage und Archivierungssysteme verlangen häufig TIFF statt PNG. Die Konvertierung bewahrt die volle Bildqualität und Transparenz und fügt professionelle Metadaten-Unterstützung hinzu.',
    p2: 'TIFF-Dateien sind größer als PNG, bieten aber Vorteile für professionelle Workflows: Ebenenunterstützung in Photoshop, CMYK-Farbräume für den Druck und lückenlose Metadaten. Für Langzeitarchivierung ist TIFF der Industriestandard.',
    p3: 'Druckdienstleister in Deutschland, Österreich und der Schweiz arbeiten häufig mit TIFF. Die lokale Konvertierung ermöglicht die Verarbeitung vertraulicher Entwürfe ohne Cloud-Upload.',
  },
  'jpg-to-webp': {
    p1: 'JPEG ist das Standardformat für digitale Fotos – doch für Webseiten sind die Dateigrößen oft zu hoch. WebP komprimiert JPEG-Bilder um weitere 25–35% ohne sichtbaren Qualitätsverlust und verbessert so Ladezeiten und Core Web Vitals direkt.',
    p2: 'Für E-Commerce-Shops auf Shopify, WooCommerce oder TYPO3 bedeutet die Umstellung von JPG auf WebP messbar schnellere Produktseiten. Google PageSpeed Insights empfiehlt WebP explizit als „Next-Gen-Format". Bei Qualitätsstufe 80–85% ist der Unterschied zum Original visuell nicht wahrnehmbar.',
    p3: 'Im DACH-Raum, wo strenge Datenschutzregeln gelten, ist die lokale Bildverarbeitung im Browser besonders wertvoll. Produktfotos und Kundenbilder verlassen Ihr Gerät nicht – vollständig DSGVO-konform.',
  },
  'jpg-to-png': {
    p1: 'Manchmal muss ein JPEG-Bild in ein Format mit Transparenz-Unterstützung oder verlustfreier Speicherung umgewandelt werden – etwa für die Weiterbearbeitung in Grafikprogrammen wie Photoshop, Figma oder Canva.',
    p2: 'Die Konvertierung von JPG zu PNG macht die durch JPEG-Komprimierung verlorenen Details nicht rückgängig, verhindert aber weitere Qualitätsverluste bei zukünftigen Bearbeitungen. PNG eignet sich besonders, wenn das Bild als Vorlage für Collagen, Overlays oder Print-Layouts dient.',
    p3: 'Für Grafiker und Agenturen in Deutschland ist die lokale Verarbeitung ideal: Kundenmaterial bleibt auf dem eigenen Rechner, ohne dass ein externer Dienst Zugriff erhält.',
  },
  'jpg-to-avif': {
    p1: 'AVIF erzielt bis zu 50% bessere Komprimierung als JPEG bei vergleichbarer visueller Qualität. Für Webseiten mit vielen Fotos – Reiseportale, Immobilienplattformen, Online-Magazine – bedeutet das erheblich schnellere Ladezeiten.',
    p2: 'Plattformen wie ImmoScout24, Booking.com oder Zalando setzen zunehmend auf AVIF, um die Nutzererfahrung auf Mobilgeräten zu verbessern. Chrome, Firefox und Safari 16+ unterstützen AVIF nativ. Für ältere Browser sollte ein WebP- oder JPG-Fallback bereitgestellt werden.',
    p3: 'Die lokale Konvertierung im Browser schützt Ihre Bilder: Ob Immobilienfotos, Produktbilder oder Portraitaufnahmen – nichts wird auf einen Server hochgeladen. Vollständig DSGVO-konform.',
  },
  'jpg-to-gif': {
    p1: 'Die Konvertierung von JPG zu GIF ist sinnvoll, wenn ein Foto als einfache Grafik mit begrenzter Farbpalette benötigt wird – etwa als Vorschaubild in älteren Systemen oder für Newsletter, die nur GIF unterstützen.',
    p2: 'Beachten Sie: GIF beschränkt die Farbpalette auf 256 Farben. Bei Fotos führt dies zu sichtbarem Qualitätsverlust durch Dithering und Farbabstufungen. Für die meisten Anwendungsfälle sind WebP oder PNG die bessere Wahl.',
    p3: 'Wenn Ihr Workflow ausschließlich GIF erfordert, bietet die lokale Konvertierung eine schnelle und datenschutzkonforme Lösung ohne externe Dienste.',
  },
  'jpg-to-tiff': {
    p1: 'Professionelle Druckereien und Bildagenturen verlangen häufig TIFF statt JPEG. Die Konvertierung bewahrt die aktuelle Bildqualität und speichert sie verlustfrei für die weitere Verarbeitung.',
    p2: 'Durch JPEG-Komprimierung bereits verlorene Details werden nicht wiederhergestellt, aber TIFF verhindert weitere Verluste bei Nachbearbeitungen. TIFF unterstützt CMYK-Farbräume, Ebenen und umfangreiche Metadaten – ideal für professionelle Print-Workflows.',
    p3: 'Fotografen und Agenturen im DACH-Raum profitieren von der lokalen Verarbeitung: Kundenfotos und Druckvorlagen bleiben auf dem eigenen Gerät – ohne Cloud-Upload.',
  },
  'heic-to-jpg': {
    p1: 'iPhone-Nutzer kennen das Problem: HEIC-Fotos lassen sich nicht überall öffnen. Windows-PCs, Android-Geräte, viele Webformulare und E-Mail-Clients unterstützen HEIC nicht. Die Konvertierung zu JPG löst dieses Kompatibilitätsproblem sofort.',
    p2: 'Bei Qualitätsstufe 85–90% ist der Unterschied zwischen HEIC-Original und JPG-Ergebnis visuell kaum wahrnehmbar. Die Dateigröße bleibt vergleichbar, da beide Formate verlustbehaftete Komprimierung nutzen. Besonders praktisch: Mehrere iPhone-Fotos gleichzeitig konvertieren.',
    p3: 'Für Bewerbungsfotos, Ausweisscans oder persönliche Dokumente ist die lokale Verarbeitung im Browser besonders wichtig – sensible Daten verlassen niemals Ihr Gerät.',
  },
  'heic-to-png': {
    p1: 'Wenn Sie iPhone-Fotos verlustfrei weiterverwenden möchten – etwa als Vorlagen in Photoshop, Figma oder für Druckprojekte – ist PNG das ideale Zielformat. Die Konvertierung bewahrt die volle Bildqualität des HEIC-Originals.',
    p2: 'PNG unterstützt im Gegensatz zu JPG Transparenz und verlustfreie Speicherung. Allerdings sind PNG-Dateien deutlich größer als HEIC oder JPG. Für die Weiterbearbeitung in Grafikprogrammen ist das kein Nachteil – für den Web-Einsatz empfiehlt sich anschließend eine Konvertierung zu WebP.',
    p3: 'Kreativagenturen und Fotografen profitieren von der lokalen Verarbeitung: iPhone-Fotos von Kunden oder Shootings bleiben vertraulich auf dem eigenen Rechner.',
  },
  'heic-to-webp': {
    p1: 'iPhone-Fotos im HEIC-Format direkt für Webseiten nutzen? WebP ist die ideale Brücke: Es kombiniert die effiziente Komprimierung von HEIC mit universeller Browserkompatibilität (Chrome, Firefox, Safari 14+, Edge).',
    p2: 'Die Konvertierung von HEIC zu WebP ist besonders effizient, da beide Formate moderne Komprimierungsalgorithmen nutzen. Die Dateigröße bleibt kompakt, die Bildqualität hoch. Für Blogs, Online-Shops und Portfolios ist dies der schnellste Weg, iPhone-Fotos weboptimiert zu veröffentlichen.',
    p3: 'Blogger, Shopbetreiber und Freelancer im DACH-Raum können ihre iPhone-Fotos lokal und DSGVO-konform konvertieren – ohne Cloud-Dienste oder externe Tools.',
  },
  'heic-to-avif': {
    p1: 'AVIF bietet ähnliche Komprimierungseffizienz wie HEIC, ist aber als offenes Format nicht an Apples Ökosystem gebunden. Die Konvertierung von HEIC zu AVIF ermöglicht modernste Komprimierung mit breiter Plattformunterstützung.',
    p2: 'Chrome, Firefox und Safari 16+ unterstützen AVIF nativ. Für leistungskritische Webprojekte – Fotogalerien, Portfolios, Immobilienportale – bietet AVIF die bestmögliche Balance aus Dateigröße und Qualität.',
    p3: 'Die lokale Konvertierung ist besonders für Fotografen und Kreative relevant: iPhone-Shootings lassen sich direkt im Browser in das effizienteste Webformat umwandeln – ohne Umweg über Cloud-Dienste.',
  },
  'heic-to-tiff': {
    p1: 'Professionelle Fotografen, die mit iPhones arbeiten, benötigen oft TIFF für die Nachbearbeitung in Lightroom, Capture One oder Photoshop. Die Konvertierung von HEIC zu TIFF bewahrt die volle Bildqualität in einem branchenüblichen Format.',
    p2: 'TIFF unterstützt 16-Bit-Farbtiefe, Ebenen und umfangreiche EXIF/IPTC-Metadaten. Für Druckprojekte, Bildarchivierung und professionelle Retouche ist TIFF das bevorzugte Ausgangsformat. Die Dateien werden allerdings erheblich größer als HEIC.',
    p3: 'Im DACH-Raum, wo viele Druckereien und Bildagenturen TIFF als Standard voraussetzen, bietet die lokale Konvertierung einen sicheren Workflow für vertrauliche Shootings und Kundenmaterial.',
  },
  'webp-to-jpg': {
    p1: 'WebP ist das optimale Webformat, doch viele Plattformen außerhalb des Browsers akzeptieren es noch nicht: Druckdienste, Microsoft Office, ältere Bildbearbeitungsprogramme und manche Social-Media-Plattformen erfordern JPG.',
    p2: 'Die Konvertierung von WebP zu JPG stellt maximale Kompatibilität sicher. Bei Qualitätsstufe 85–90% bleibt die visuelle Qualität nahezu identisch. Besonders praktisch für das Versenden von Bildern per E-Mail an Empfänger, die WebP nicht öffnen können.',
    p3: 'Für Agenturen, die Kunden Bilder in universell kompatiblen Formaten liefern müssen, ist die lokale Konvertierung ideal – schnell, sicher und DSGVO-konform.',
  },
  'webp-to-png': {
    p1: 'WebP-Bilder mit Transparenz müssen manchmal in PNG konvertiert werden – etwa für Grafikprogramme, die WebP nicht unterstützen, oder für Druckvorlagen, bei denen verlustfreie Qualität erforderlich ist.',
    p2: 'Die Konvertierung von WebP zu PNG bewahrt Transparenz und Bildqualität vollständig. PNG-Dateien sind zwar größer, eignen sich aber besser für die Weiterbearbeitung in Photoshop, Illustrator oder InDesign sowie für Plattformen ohne WebP-Unterstützung.',
    p3: 'Grafikdesigner im DACH-Raum können WebP-Assets lokal in druckfähige PNG-Dateien umwandeln – ohne externe Cloud-Dienste und vollständig DSGVO-konform.',
  },
  'webp-to-avif': {
    p1: 'AVIF bietet noch bessere Komprimierung als WebP – die Umstellung ist der nächste logische Schritt für Webseiten, die ihre Ladezeiten weiter optimieren möchten.',
    p2: 'Bei vergleichbarer visueller Qualität sind AVIF-Dateien 20–30% kleiner als WebP. Für Webseiten mit hunderten oder tausenden Bildern – Online-Shops, Fotogalerien, Nachrichtenportale – summiert sich die Ersparnis erheblich. Ein WebP-Fallback über <code>&lt;picture&gt;</code> deckt ältere Browser ab.',
    p3: 'Deutsche E-Commerce-Unternehmen, die ihre Core Web Vitals optimieren, profitieren besonders von AVIF. Die lokale Konvertierung ermöglicht den Formatwechsel ohne Cloud-Upload.',
  },
  'webp-to-gif': {
    p1: 'Manchmal wird das GIF-Format benötigt – für ältere Systeme, Newsletter-Tools oder Plattformen, die ausschließlich GIF akzeptieren. Die Konvertierung von WebP zu GIF ist in diesen Fällen die schnellste Lösung.',
    p2: 'Beachten Sie: GIF unterstützt maximal 256 Farben. Fotorealistische WebP-Bilder verlieren bei der Konvertierung sichtbar an Qualität. Die Konvertierung eignet sich am besten für einfache Grafiken, Icons oder Logos.',
    p3: 'Die lokale Verarbeitung im Browser bietet eine schnelle, sichere Alternative zu Cloud-basierten Konvertierungsdiensten.',
  },
  'webp-to-tiff': {
    p1: 'Professionelle Druckworkflows erfordern häufig TIFF als Eingangsformat. Die Konvertierung von WebP zu TIFF ermöglicht es, weboptimierte Bilder für den Druck aufzubereiten.',
    p2: 'TIFF speichert das Bild verlustfrei mit voller Metadaten-Unterstützung. Beachten Sie: Durch die vorherige WebP-Komprimierung bereits verlorene Details werden nicht wiederhergestellt. Für bestmögliche Druckqualität sollte idealerweise vom Originalbild ausgegangen werden.',
    p3: 'Für Agenturen und Druckdienstleister im DACH-Raum bietet die lokale Konvertierung einen sicheren Weg, Webassets für Print-Projekte aufzubereiten.',
  },
  'svg-to-jpg': {
    p1: 'SVG-Vektorgrafiken lassen sich nicht überall verwenden: Social-Media-Plattformen, Marktplätze und viele CMS akzeptieren nur Rasterformate. Die Konvertierung zu JPG erzeugt universell kompatible Bilddateien.',
    p2: 'Bei der Rasterisierung wird die Vektorgrafik in eine Pixelgrafik mit fester Auflösung umgewandelt. Transparente Bereiche werden mit einer Hintergrundfarbe (standardmäßig Weiß) gefüllt. Für Webnutzung empfiehlt sich eine Auflösung von 1200–2000px Breite.',
    p3: 'Besonders für Social-Media-Beiträge und Marktplatzlistings auf Amazon.de, eBay Kleinanzeigen oder Etsy ist die Konvertierung von SVG zu JPG eine gängige Anforderung.',
  },
  'svg-to-png': {
    p1: 'SVG-Vektorgrafiken werden für Social-Media-Posts, Messenger-Dienste und E-Mail-Signaturen oft in PNG umgewandelt, um Transparenz zu bewahren und breite Kompatibilität sicherzustellen.',
    p2: 'Die Rasterisierung zu PNG bewahrt transparente Bereiche vollständig – ideal für Logos und Icons auf verschiedenfarbigen Hintergründen. PNG eignet sich auch hervorragend für Screenshots von SVG-Illustrationen in Dokumentationen und Präsentationen.',
    p3: 'Für Agenturen, die Kunden Logos in verschiedenen Formaten liefern, ist die lokale SVG-zu-PNG-Konvertierung ein schneller und datenschutzkonformer Workflow.',
  },
  'svg-to-webp': {
    p1: 'Für Webseiten, die SVG nicht direkt einbinden können oder wollen – etwa in CMS mit eingeschränkter SVG-Unterstützung – bietet WebP eine kompakte Pixeldarstellung mit minimaler Dateigröße.',
    p2: 'WebP-Dateien aus SVG-Quellen sind typischerweise sehr klein (5–30 KB) und laden blitzschnell. Für Icons, Logos und UI-Elemente auf Webseiten ist dies oft die pragmatischste Lösung, wenn SVG nicht direkt verwendet werden kann.',
    p3: 'WordPress, Shopify und viele andere CMS im DACH-Raum unterstützen WebP nativ – die Konvertierung ermöglicht den Einsatz von Vektorgrafiken auch in diesen Umgebungen.',
  },
  'svg-to-avif': {
    p1: 'AVIF bietet die beste verfügbare Komprimierung für rasterisierte Vektorgrafiken. Für leistungskritische Webseiten ist SVG-zu-AVIF die optimale Wahl, wenn SVG nicht direkt eingebunden werden kann.',
    p2: 'AVIF-Dateien aus SVG-Quellen sind extrem kompakt – oft nur 3–15 KB. Für Core Web Vitals ist jedes Kilobyte relevant: Schnellere Ladezeiten verbessern den LCP-Wert und damit das Google-Ranking.',
    p3: 'Webentwickler und SEO-Spezialisten im DACH-Raum nutzen AVIF zunehmend als Standard für alle Rastergrafiken – die lokale Konvertierung macht den Umstieg einfach.',
  },
  'svg-to-gif': {
    p1: 'GIF wird gelegentlich für einfache Icons und Grafiken in älteren Systemen, E-Mail-Templates oder Foren benötigt. Die Konvertierung von SVG zu GIF erzeugt kompatible Dateien mit minimaler Dateigröße.',
    p2: 'GIF beschränkt die Farbpalette auf 256 Farben. Für einfarbige Logos und Icons ist das kein Problem, für komplexe Illustrationen mit Farbverläufen jedoch nicht ideal. Transparenz wird nur binär unterstützt.',
    p3: 'Für Newsletter-Templates und ältere Webplattformen, die nur GIF akzeptieren, bietet diese Konvertierung eine schnelle lokale Lösung.',
  },
  'svg-to-tiff': {
    p1: 'Druckereien benötigen für die Produktion häufig Pixelgrafiken in TIFF statt Vektordateien. Die Rasterisierung von SVG zu TIFF erzeugt hochauflösende, verlustfreie Bilddateien für den professionellen Druck.',
    p2: 'TIFF speichert die rasterisierte Grafik in höchster Qualität mit voller Farbtiefe und Metadaten-Unterstützung. Für Visitenkarten, Flyer und Plakate empfiehlt sich eine hohe Ausgangsauflösung (300 DPI oder mehr).',
    p3: 'Druckdienstleister in Deutschland, Österreich und der Schweiz akzeptieren TIFF als Standard-Pixelformat. Die lokale Konvertierung schützt vertrauliche Entwürfe und Markenlogos.',
  },
  'gif-to-jpg': {
    p1: 'Ältere GIF-Grafiken müssen manchmal in JPG konvertiert werden – für Plattformen, die nur JPEG akzeptieren, oder um die Dateigröße für E-Mail-Versand zu optimieren. Nur das erste Bild einer animierten GIF wird dabei konvertiert.',
    p2: 'JPG bietet volle 16,7 Millionen Farben statt der 256-Farben-Palette von GIF. Einfache Grafiken werden dadurch nicht besser, aber Fotos, die versehentlich als GIF gespeichert wurden, profitieren von der vollen Farbtiefe.',
    p3: 'Für das Archivieren älterer Grafiken in einem modernen, universell kompatiblen Format ist die lokale Konvertierung schnell und datenschutzkonform.',
  },
  'gif-to-png': {
    p1: 'GIF-Grafiken in PNG umzuwandeln ist sinnvoll, wenn die Grafik verlustfrei gespeichert oder in Grafikprogrammen weiterbearbeitet werden soll. PNG unterstützt volle 32-Bit-Farben und stufenlose Transparenz.',
    p2: 'Bei animierten GIF-Dateien wird nur das erste Bild konvertiert. Die Qualität bleibt verlustfrei erhalten. PNG eignet sich besonders als Zwischenformat für die Weiterbearbeitung in Photoshop, Figma oder Canva.',
    p3: 'Für die Aktualisierung älterer Webgrafiken und Icons bietet die lokale Konvertierung eine schnelle, sichere Lösung ohne externe Dienste.',
  },
  'gif-to-webp': {
    p1: 'WebP bietet deutlich bessere Komprimierung als GIF – sowohl für statische Bilder als auch für Animationen. Die Modernisierung älterer GIF-Grafiken zu WebP beschleunigt Webseiten spürbar.',
    p2: 'Statische GIF-Dateien werden als WebP typischerweise 30–60% kleiner. WebP unterstützt Millionen Farben statt nur 256, was die visuelle Qualität bei gleicher oder kleinerer Dateigröße deutlich verbessert.',
    p3: 'Für die Optimierung älterer Webseiten und Blogs im DACH-Raum ist die Umstellung von GIF auf WebP ein einfacher Weg, Core Web Vitals zu verbessern.',
  },
  'gif-to-avif': {
    p1: 'AVIF übertrifft GIF in jeder Hinsicht: bessere Komprimierung, Millionen Farben statt 256, und moderne Animationsunterstützung. Für die Modernisierung älterer Webinhalte ist GIF-zu-AVIF die effizienteste Wahl.',
    p2: 'AVIF-Dateien aus GIF-Quellen sind drastisch kleiner und visuell deutlich besser. Allerdings unterstützen ältere Browser AVIF noch nicht – ein GIF- oder WebP-Fallback über <code>&lt;picture&gt;</code> ist empfehlenswert.',
    p3: 'Für Webseiten, die ihre Ladezeiten maximieren möchten, bietet die Umstellung von GIF auf AVIF den größten Einzeleffekt aller Formatwechsel.',
  },
  'tiff-to-jpg': {
    p1: 'TIFF-Dateien aus professioneller Fotografie oder Scannerausgaben sind oft 20–100 MB groß. Die Konvertierung zu JPG erzeugt kompakte Dateien für Web, E-Mail und Social Media – mit einer typischen Größenreduktion von über 95%.',
    p2: 'Transparenz und Ebeneninformationen gehen bei der Konvertierung verloren. Für reine Fotografie ist das unproblematisch. Bei Qualitätsstufe 85–90% bleibt die visuelle Qualität hervorragend, während die Dateigröße auf wenige hundert Kilobyte sinkt.',
    p3: 'Fotografen und Scanner-Nutzer im DACH-Raum können ihre TIFF-Dateien lokal und DSGVO-konform in versandfähige JPGs umwandeln – ideal für Kundenpräsentationen und Online-Galerien.',
  },
  'tiff-to-png': {
    p1: 'Wenn TIFF-Dateien für die Weiterbearbeitung in Grafikprogrammen oder für Webseiten mit Transparenz-Anforderungen benötigt werden, ist PNG das passende Zielformat – verlustfrei und universell kompatibel.',
    p2: 'PNG bewahrt die volle Bildqualität und Transparenz des TIFF-Originals. Die Dateien sind deutlich kleiner als TIFF, aber größer als JPEG oder WebP. Für die Weiterbearbeitung in Figma, Canva oder Photoshop ist PNG ideal.',
    p3: 'Für die Aufbereitung von Scannerausgaben und Archivbildern zur Online-Nutzung bietet die lokale Konvertierung einen sicheren und schnellen Workflow.',
  },
  'tiff-to-webp': {
    p1: 'Die Konvertierung von TIFF zu WebP erzielt die größte Dateireduktion aller gängigen Formatwechsel: TIFF-Dateien von 20–100 MB schrumpfen oft auf 200 KB – 2 MB. Für die Veröffentlichung professioneller Fotos im Web ist dies der effizienteste Weg.',
    p2: 'WebP bewahrt bei Qualitätsstufe 80–85% eine hervorragende visuelle Qualität. Für Fotogalerien, Portfolio-Webseiten und Online-Magazine bedeutet das: Professionelle Bildqualität bei Bruchteilen der ursprünglichen Dateigröße.',
    p3: 'Fotografen und Agenturen im DACH-Raum können hochauflösende Shooting-Ergebnisse lokal in weboptimierte Formate umwandeln – ohne Cloud-Upload und vollständig DSGVO-konform.',
  },
  'tiff-to-avif': {
    p1: 'AVIF bietet die effizienteste Komprimierung für die Umwandlung großer TIFF-Dateien. Professionelle Fotos und hochauflösende Scans werden auf einen Bruchteil ihrer Originalgröße reduziert – bei minimaler Qualitätseinbuße.',
    p2: 'Für Fotogalerien und Portfolio-Webseiten, die Wert auf bestmögliche Ladezeiten legen, ist TIFF-zu-AVIF der optimale Workflow. Chrome, Firefox und Safari 16+ unterstützen AVIF nativ; ein WebP-Fallback empfiehlt sich für ältere Browser.',
    p3: 'Professionelle Fotografen und Bildagenturen im DACH-Raum profitieren von der lokalen Verarbeitung: Hochauflösende Kundenfotos werden sicher und DSGVO-konform optimiert.',
  },
  'bmp-to-jpg': {
    p1: 'BMP-Dateien stammen häufig aus älteren Windows-Anwendungen, Scannern oder Screenshot-Tools. Sie sind unkomprimiert und dadurch extrem groß – die Konvertierung zu JPG reduziert die Dateigröße um über 95%.',
    p2: 'Ein 10 MB BMP-Screenshot wird als JPG typischerweise nur 200–400 KB groß. Für E-Mail-Versand, Dokumentation und Archivierung ist die Konvertierung zu JPG der einfachste Weg, Speicherplatz zu sparen und die Kompatibilität sicherzustellen.',
    p3: 'Für die Migration älterer Bildarchive und die Aufbereitung von Scanner-Ausgaben bietet die lokale Konvertierung eine schnelle und datenschutzkonforme Lösung.',
  },
  'bmp-to-png': {
    p1: 'BMP-Dateien in PNG umzuwandeln reduziert die Dateigröße erheblich durch verlustfreie Komprimierung – die volle Bildqualität bleibt dabei erhalten. Ideal für Grafiken mit scharfen Kanten, Text oder Screenshots.',
    p2: 'Im Gegensatz zu JPG bewahrt PNG die exakte Pixelqualität ohne Komprimierungsartefakte. Für technische Dokumentationen, Screenshots und Grafiken mit Text ist PNG daher die bessere Wahl als JPG.',
    p3: 'Die lokale Konvertierung eignet sich besonders für vertrauliche Dokumente und interne Screenshots – nichts wird auf einen externen Server hochgeladen.',
  },
  'bmp-to-webp': {
    p1: 'BMP-Dateien sind für moderne Webnutzung völlig ungeeignet – unkomprimiert und riesig. WebP reduziert die Dateigröße um bis zu 97% bei guter visueller Qualität und macht ältere Bilder weboptimiert nutzbar.',
    p2: 'Die Konvertierung modernisiert Altbestände aus älteren Windows-Systemen für aktuelle Webseiten, CMS und Online-Shops. WebP wird von allen modernen Browsern unterstützt und verbessert Ladezeiten direkt.',
    p3: 'Für Unternehmen im DACH-Raum, die ältere Bildarchive für ihre Webpräsenz aufbereiten möchten, ist die lokale Konvertierung effizient und DSGVO-konform.',
  },
  'bmp-to-avif': {
    p1: 'AVIF bietet die bestmögliche Komprimierung für unkomprimierte BMP-Dateien: Größenreduktionen von über 98% sind realistisch. Für die Modernisierung älterer Bildarchive ist BMP-zu-AVIF die effizienteste Wahl.',
    p2: 'AVIF unterstützt HDR, breite Farbräume und eine Farbtiefe von bis zu 12 Bit – die ursprüngliche Bildqualität wird bestmöglich bewahrt. Chrome, Firefox und Safari 16+ unterstützen AVIF nativ.',
    p3: 'Die lokale Konvertierung im Browser ermöglicht die Migration ganzer Bildarchive ohne Cloud-Dienste – schnell, sicher und datenschutzkonform.',
  },
  'bmp-to-gif': {
    p1: 'Die Konvertierung von BMP zu GIF ist in Spezialfällen sinnvoll: für Systeme, die ausschließlich GIF akzeptieren, oder für einfache Grafiken mit wenigen Farben, bei denen GIF kompakter ist als BMP.',
    p2: 'Beachten Sie: GIF unterstützt maximal 256 Farben. Fotorealistische BMP-Bilder verlieren erheblich an Qualität. Für Fotos sind JPG oder WebP die bessere Wahl. GIF eignet sich nur für einfache Grafiken, Logos und Icons.',
    p3: 'Für spezielle Kompatibilitätsanforderungen älterer Systeme bietet die lokale Konvertierung eine schnelle und sichere Lösung.',
  },
  'bmp-to-tiff': {
    p1: 'BMP-Dateien in TIFF umzuwandeln ist sinnvoll, wenn eine professionelle Metadaten-Unterstützung benötigt wird – etwa für Archivierung, Druckvorstufe oder die Weiterverarbeitung in professionellen Bildbearbeitungsprogrammen.',
    p2: 'TIFF bewahrt die volle Bildqualität des BMP-Originals und ergänzt professionelle Funktionen: EXIF-Metadaten, CMYK-Farbräume und Ebenenunterstützung. Für Langzeitarchivierung ist TIFF dem BMP-Format deutlich überlegen.',
    p3: 'Archive, Bibliotheken und Unternehmen im DACH-Raum, die Altbestände digitalisieren, profitieren von der lokalen Konvertierung ohne Cloud-Abhängigkeit.',
  },
  'avif-to-jpg': {
    p1: 'AVIF wird von älteren Geräten, Bildbearbeitungsprogrammen und manchen Plattformen noch nicht unterstützt. Die Konvertierung zu JPG stellt maximale Kompatibilität sicher – JPEG wird von jedem Gerät und jeder Software unterstützt.',
    p2: 'Bei Qualitätsstufe 85–90% bleibt die visuelle Qualität nahezu identisch zum AVIF-Original. Besonders nützlich für den E-Mail-Versand an Empfänger mit älteren Systemen oder für Plattformen wie Druckdienste, die nur JPEG akzeptieren.',
    p3: 'Für Unternehmen im DACH-Raum, die Bilder sowohl weboptimiert (AVIF) als auch universell kompatibel (JPG) bereithalten müssen, ist die lokale Konvertierung ein effizienter Workflow.',
  },
  'avif-to-png': {
    p1: 'AVIF-Bilder mit Transparenz müssen manchmal in PNG umgewandelt werden – für die Weiterbearbeitung in Grafikprogrammen oder für Plattformen, die AVIF nicht unterstützen.',
    p2: 'PNG bewahrt Transparenz und Bildqualität verlustfrei. Die Dateien sind größer als AVIF, eignen sich aber für die Weiterbearbeitung in Photoshop, Figma oder Canva sowie für den Druck.',
    p3: 'Grafikdesigner und Agenturen im DACH-Raum nutzen die lokale Konvertierung, um AVIF-Assets sicher und datenschutzkonform für verschiedene Ausgabekanäle aufzubereiten.',
  },
  'avif-to-webp': {
    p1: 'WebP bietet breitere Browserunterstützung als AVIF (Safari 14+ vs. Safari 16+) bei guter Komprimierung. Wenn Ihre Zielgruppe ältere Browser nutzt, ist WebP die sicherere Wahl.',
    p2: 'Die Konvertierung von AVIF zu WebP ist besonders relevant für CMS und CDN, die AVIF noch nicht unterstützen. WebP wird von WordPress, Shopify, Cloudflare und allen modernen Browsern nativ unterstützt.',
    p3: 'Für Webprojekte im DACH-Raum, die maximale Browserabdeckung bei guter Komprimierung benötigen, ist WebP nach wie vor das zuverlässigste moderne Format.',
  },
};

function extractFormats(f) {
  const m = f.match(/converter-(\w+)-to-(\w+)\.json/);
  return m ? { source: m[1], target: m[2], key: `${m[1]}-to-${m[2]}` } : null;
}

let updated = 0,
  skipped = 0;
const files = fs.readdirSync(TOOLS).filter((f) => f.startsWith('converter-') && f.endsWith('.json'));
for (const file of files) {
  const fmt = extractFormats(file);
  if (!fmt) {
    skipped++;
    continue;
  }
  const content = PAIR[fmt.key];
  if (!content) {
    console.log(`SKIP (no content): ${file}`);
    skipped++;
    continue;
  }
  const fp = path.join(TOOLS, file);
  const data = JSON.parse(fs.readFileSync(fp, 'utf-8'));
  // Find the "in practice" sectionInfo block (the one that is NOT a table)
  const block = data.contentBlocks.find((b) => b.type === 'sectionInfo' && !b.html.includes('<table') && (b.title.includes('Praxis') || b.title.includes('in der Praxis')));
  if (!block) {
    console.log(`SKIP (no block): ${file}`);
    skipped++;
    continue;
  }
  block.html = `<p class="text-mid mb-4">${content.p1}</p><p class="text-mid mb-4">${content.p2}</p><p class="text-mid">${content.p3}</p>`;
  fs.writeFileSync(fp, JSON.stringify(data, null, 2) + '\n', 'utf-8');
  updated++;
}
console.log(`DE sectionInfo: Updated: ${updated}, Skipped: ${skipped}`);
