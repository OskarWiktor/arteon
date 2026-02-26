/**
 * Color palette full update for PL + all non-EN locales.
 * - Updates 9→17 in metadata, hero, schema, content blocks
 * - Adds 8 new palette description cards
 * - Adds new palette types to schema featureList
 * - Adds new FAQ entries for new palette types
 */
const fs = require('fs');
const path = require('path');

const newPalettes = {
  pl: [
    {
      icon: 'RiGridLine',
      title: 'Paleta tetradyczna (kwadratowa)',
      description:
        'Cztery odcienie rozmieszczone co 90\u00b0 na kole barw. Bogata i zr\u00f3wnowa\u017cona \u2013 idealna do z\u0142o\u017conych interfejs\u00f3w, dashboard\u00f3w i wizualizacji danych, gdzie potrzeba wielu odr\u00f3\u017cnialnych kolor\u00f3w.',
    },
    {
      icon: 'RiFireLine',
      title: 'Paleta ciep\u0142a',
      description:
        'Kolory przesuni\u0119te w stron\u0119 czerwieni, pomara\u0144czy i \u017c\u00f3\u0142ci. Wywo\u0142uje poczucie energii, ciep\u0142a i przyst\u0119pno\u015bci. \u015awietna do marek gastronomicznych, hotelarstwa i energetycznych kampanii marketingowych.',
    },
    {
      icon: 'RiSnowflakeLine',
      title: 'Paleta ch\u0142odna',
      description:
        'Kolory przesuni\u0119te w stron\u0119 b\u0142\u0119kit\u00f3w, morskich zieleni i fiolet\u00f3w. Komunikuje spok\u00f3j, profesjonalizm i zaufanie. Popularna w fintech, ochronie zdrowia i brandingu korporacyjnym.',
    },
    {
      icon: 'RiSeedlingLine',
      title: 'Paleta ziemista',
      description:
        'Nisko nasycone br\u0105zy, oliwki i ochry inspirowane naturalnymi krajobrazami. Idealna do marek ekologicznych, produkt\u00f3w organicznych, rzemie\u015blniczych biznes\u00f3w i rustykalnej estetyki.',
    },
    {
      icon: 'RiFlashlightLine',
      title: 'Paleta neonowa',
      description:
        'Kolory o maksymalnym nasyceniu z elektryczn\u0105 intensywno\u015bci\u0105. Zaprojektowana do odwa\u017cnego marketingu, interfejs\u00f3w gier, marek nocnego \u017cycia i projekt\u00f3w przyci\u0105gaj\u0105cych uwag\u0119.',
    },
    {
      icon: 'RiAncientGateLine',
      title: 'Paleta vintage',
      description:
        'Odbarwione, lekko ciep\u0142e tony przypominaj\u0105ce stare druki i fotografi\u0119 retro. Idealna do marek z tradycj\u0105, produkt\u00f3w rzemie\u015blniczych i nostalgicznej estetyki.',
    },
    {
      icon: 'RiContrastLine',
      title: 'Paleta wysokokontrastowa',
      description:
        'Ekstremalny zakres jasno\u015bci od prawie czarnego do prawie bia\u0142ego z odcieniem koloru bazowego. Doskona\u0142a do dost\u0119pnych projekt\u00f3w, silnej hierarchii wizualnej i interfejs\u00f3w zgodnych z WCAG.',
    },
    {
      icon: 'RiSunLine',
      title: 'Paleta gradientu zachodu s\u0142o\u0144ca',
      description:
        'P\u0142ynna rotacja odcieni od ciep\u0142ych do ch\u0142odnych, na\u015bladuj\u0105ca naturalny zach\u00f3d s\u0142o\u0144ca. \u015awietna do sekcji hero, te\u0142, kreatywnych projekt\u00f3w i brandingu festiwalowego.',
    },
  ],
  de: [
    {
      icon: 'RiGridLine',
      title: 'Tetradische (Quadrat-) Palette',
      description: 'Vier Farbt\u00f6ne im 90\u00b0-Abstand auf dem Farbkreis. Reich und ausgewogen \u2013 ideal f\u00fcr komplexe UI-Themes, Dashboards und Datenvisualisierung.',
    },
    {
      icon: 'RiFireLine',
      title: 'Warme Palette',
      description: 'Farben verschoben zu Rot, Orange und Gelb. Erzeugt Energie, W\u00e4rme und Zug\u00e4nglichkeit. Ideal f\u00fcr Gastronomie, Gastgewerbe und lebhafte Marketingkampagnen.',
    },
    {
      icon: 'RiSnowflakeLine',
      title: 'K\u00fchle Palette',
      description: 'Farben verschoben zu Blau, T\u00fcrkis und Violett. Vermittelt Ruhe, Professionalit\u00e4t und Vertrauen. Beliebt in Fintech, Gesundheitswesen und Unternehmensbranding.',
    },
    {
      icon: 'RiSeedlingLine',
      title: 'Erdtöne-Palette',
      description:
        'Gering ges\u00e4ttigte Braun-, Oliv- und Ockert\u00f6ne inspiriert von Naturlandschaften. Perfekt f\u00fcr \u00d6ko-Marken, Handwerksbetriebe und rustikale \u00c4sthetik. In der Bauhaus-Tradition steht die Verbindung von Funktion und Naturmaterial.',
    },
    {
      icon: 'RiFlashlightLine',
      title: 'Neon-Palette',
      description: 'Maximal ges\u00e4ttigte Farben mit elektrischer Intensit\u00e4t. F\u00fcr mutiges Marketing, Gaming-Interfaces, Nachtleben-Marken und aufmerksamkeitsstarke Designs.',
    },
    {
      icon: 'RiAncientGateLine',
      title: 'Vintage-Palette',
      description: 'Entsättigte, leicht warme T\u00f6ne, die an alte Drucke und Retro-Fotografie erinnern. Ideal f\u00fcr Traditionsmarken, handwerkliche Produkte und nostalgische Gestaltung.',
    },
    {
      icon: 'RiContrastLine',
      title: 'Hochkontrast-Palette',
      description:
        'Extremer Helligkeitsbereich von fast Schwarz bis fast Wei\u00df mit dem Basisfarbton. Hervorragend f\u00fcr barrierefreie Designs, starke visuelle Hierarchie und WCAG-konforme Interfaces.',
    },
    {
      icon: 'RiSunLine',
      title: 'Sonnenuntergang-Gradient',
      description: 'Sanfte Farbtonrotation von warm zu k\u00fchl, wie ein nat\u00fcrlicher Sonnenuntergang. Ideal f\u00fcr Hero-Sections, Hintergr\u00fcnde und kreative Projekte.',
    },
  ],
  es: [
    {
      icon: 'RiGridLine',
      title: 'Paleta tetr\u00e1dica (cuadrada)',
      description: 'Cuatro tonos separados 90\u00b0 en el c\u00edrculo crom\u00e1tico. Rica y equilibrada \u2013 ideal para interfaces complejas, dashboards y visualizaci\u00f3n de datos.',
    },
    {
      icon: 'RiFireLine',
      title: 'Paleta c\u00e1lida',
      description:
        'Colores desplazados hacia rojos, naranjas y amarillos. Evoca energ\u00eda, calidez y cercan\u00eda. Perfecta para marcas gastron\u00f3micas, hoteler\u00eda y campa\u00f1as de marketing.',
    },
    {
      icon: 'RiSnowflakeLine',
      title: 'Paleta fr\u00eda',
      description: 'Colores desplazados hacia azules, turquesas y violetas. Transmite calma, profesionalismo y confianza. Popular en fintech, salud y branding corporativo.',
    },
    {
      icon: 'RiSeedlingLine',
      title: 'Paleta de tonos tierra',
      description: 'Marrones, olivas y ocres de baja saturaci\u00f3n inspirados en paisajes naturales. Ideal para marcas ecol\u00f3gicas, productos artesanales y est\u00e9tica r\u00fastica.',
    },
    {
      icon: 'RiFlashlightLine',
      title: 'Paleta ne\u00f3n',
      description: 'Colores de m\u00e1xima saturaci\u00f3n con intensidad el\u00e9ctrica. Para marketing atrevido, interfaces de juegos, marcas de vida nocturna y dise\u00f1os llamativos.',
    },
    {
      icon: 'RiAncientGateLine',
      title: 'Paleta vintage',
      description: 'Tonos desaturados y ligeramente c\u00e1lidos que recuerdan impresiones antiguas y fotograf\u00eda retro. Ideal para marcas con tradici\u00f3n y est\u00e9tica nostálgica.',
    },
    {
      icon: 'RiContrastLine',
      title: 'Paleta de alto contraste',
      description: 'Rango extremo de luminosidad, desde casi negro hasta casi blanco. Excelente para dise\u00f1os accesibles, jerarqu\u00eda visual fuerte e interfaces WCAG.',
    },
    {
      icon: 'RiSunLine',
      title: 'Paleta degradado atardecer',
      description: 'Rotaci\u00f3n suave de tonos de c\u00e1lidos a fr\u00edos, imitando un atardecer natural. Ideal para secciones hero, fondos y proyectos creativos.',
    },
  ],
  fr: [
    {
      icon: 'RiGridLine',
      title: 'Palette t\u00e9tradique (carr\u00e9e)',
      description:
        'Quatre teintes espac\u00e9es de 90\u00b0 sur le cercle chromatique. Riche et \u00e9quilibr\u00e9e \u2013 id\u00e9ale pour les interfaces complexes, tableaux de bord et visualisation de donn\u00e9es.',
    },
    {
      icon: 'RiFireLine',
      title: 'Palette chaude',
      description:
        'Couleurs d\u00e9cal\u00e9es vers les rouges, oranges et jaunes. \u00c9voque l\u2019\u00e9nergie, la chaleur et l\u2019accessibilit\u00e9. Parfaite pour la gastronomie, l\u2019h\u00f4tellerie et les campagnes marketing. La tradition impressionniste fran\u00e7aise fait un usage magistral des teintes chaudes.',
    },
    {
      icon: 'RiSnowflakeLine',
      title: 'Palette froide',
      description:
        'Couleurs d\u00e9cal\u00e9es vers les bleus, turquoises et violets. Communique le calme, le professionnalisme et la confiance. Populaire en fintech, sant\u00e9 et branding corporate.',
    },
    {
      icon: 'RiSeedlingLine',
      title: 'Palette tons terre',
      description: 'Bruns, olives et ocres peu satur\u00e9s inspir\u00e9s des paysages naturels. Id\u00e9ale pour les marques bio, artisanales et l\u2019esth\u00e9tique rustique.',
    },
    {
      icon: 'RiFlashlightLine',
      title: 'Palette n\u00e9on',
      description: 'Couleurs \u00e0 saturation maximale avec intensit\u00e9 \u00e9lectrique. Pour le marketing audacieux, les interfaces de jeux et les designs accrocheurs.',
    },
    {
      icon: 'RiAncientGateLine',
      title: 'Palette vintage',
      description:
        'Tons d\u00e9satur\u00e9s et l\u00e9g\u00e8rement chauds rappelant les impressions anciennes et la photographie r\u00e9tro. Id\u00e9ale pour les marques patrimoniales et l\u2019esth\u00e9tique nostalgique.',
    },
    {
      icon: 'RiContrastLine',
      title: 'Palette haut contraste',
      description: 'Plage de luminosit\u00e9 extr\u00eame du presque noir au presque blanc. Excellente pour les designs accessibles, la hi\u00e9rarchie visuelle forte et les interfaces WCAG.',
    },
    {
      icon: 'RiSunLine',
      title: 'Palette d\u00e9grad\u00e9 coucher de soleil',
      description: 'Rotation douce des teintes du chaud au froid, imitant un coucher de soleil. Id\u00e9ale pour les sections hero, arri\u00e8re-plans et projets cr\u00e9atifs.',
    },
  ],
  pt: [
    {
      icon: 'RiGridLine',
      title: 'Paleta tetr\u00e1dica (quadrada)',
      description: 'Quatro tons espa\u00e7ados 90\u00b0 no c\u00edrculo crom\u00e1tico. Rica e equilibrada \u2013 ideal para interfaces complexas, dashboards e visualiza\u00e7\u00e3o de dados.',
    },
    {
      icon: 'RiFireLine',
      title: 'Paleta quente',
      description: 'Cores deslocadas para vermelhos, laranjas e amarelos. Evoca energia, calor e proximidade. Perfeita para marcas gastron\u00f3micas e campanhas de marketing.',
    },
    {
      icon: 'RiSnowflakeLine',
      title: 'Paleta fria',
      description: 'Cores deslocadas para azuis, turquesas e violetas. Transmite calma, profissionalismo e confian\u00e7a. Popular em fintech, sa\u00fade e branding corporativo.',
    },
    {
      icon: 'RiSeedlingLine',
      title: 'Paleta tons de terra',
      description: 'Castanhos, oliveiras e ocres de baixa satura\u00e7\u00e3o inspirados em paisagens naturais. Ideal para marcas ecol\u00f3gicas e est\u00e9tica r\u00fastica.',
    },
    {
      icon: 'RiFlashlightLine',
      title: 'Paleta n\u00e9on',
      description: 'Cores de satura\u00e7\u00e3o m\u00e1xima com intensidade el\u00e9trica. Para marketing ousado, interfaces de jogos e designs chamativos.',
    },
    {
      icon: 'RiAncientGateLine',
      title: 'Paleta vintage',
      description: 'Tons dessaturados e ligeiramente quentes que lembram impress\u00f5es antigas e fotografia retro. Ideal para marcas com tradi\u00e7\u00e3o.',
    },
    { icon: 'RiContrastLine', title: 'Paleta alto contraste', description: 'Gama extrema de luminosidade. Excelente para designs acess\u00edveis e interfaces WCAG.' },
    {
      icon: 'RiSunLine',
      title: 'Paleta gradiente p\u00f4r do sol',
      description: 'Rota\u00e7\u00e3o suave de tons quentes a frios, imitando um p\u00f4r do sol. Ideal para se\u00e7\u00f5es hero e fundos.',
    },
  ],
  it: [
    {
      icon: 'RiGridLine',
      title: 'Palette tetradica (quadrata)',
      description: 'Quattro tonalit\u00e0 distanziate di 90\u00b0 sul cerchio cromatico. Ricca e bilanciata \u2013 ideale per interfacce complesse, dashboard e visualizzazione dati.',
    },
    {
      icon: 'RiFireLine',
      title: 'Palette calda',
      description: 'Colori spostati verso rossi, arancioni e gialli. Evoca energia, calore e accessibilit\u00e0. Perfetta per brand gastronomici e campagne marketing.',
    },
    {
      icon: 'RiSnowflakeLine',
      title: 'Palette fredda',
      description: 'Colori spostati verso blu, turchesi e viola. Comunica calma, professionalit\u00e0 e fiducia. Popolare in fintech, sanit\u00e0 e branding aziendale.',
    },
    {
      icon: 'RiSeedlingLine',
      title: 'Palette toni terra',
      description: 'Marroni, olive e ocra a bassa saturazione ispirati ai paesaggi naturali. Ideale per marchi ecologici, prodotti artigianali ed estetica rustica.',
    },
    { icon: 'RiFlashlightLine', title: 'Palette neon', description: 'Colori a massima saturazione con intensit\u00e0 elettrica. Per marketing audace, interfacce gaming e design accattivanti.' },
    {
      icon: 'RiAncientGateLine',
      title: 'Palette vintage',
      description: 'Toni desaturati e leggermente caldi che ricordano stampe antiche e fotografia retr\u00f2. Ideale per marchi storici e estetica nostalgica.',
    },
    { icon: 'RiContrastLine', title: 'Palette alto contrasto', description: 'Gamma estrema di luminosit\u00e0. Eccellente per design accessibili, gerarchia visiva forte e interfacce WCAG.' },
    {
      icon: 'RiSunLine',
      title: 'Palette gradiente tramonto',
      description: 'Rotazione dolce di tonalit\u00e0 dal caldo al freddo, imitando un tramonto naturale. Ideale per sezioni hero, sfondi e progetti creativi.',
    },
  ],
  nl: [
    {
      icon: 'RiGridLine',
      title: 'Tetradisch (vierkant) palet',
      description: 'Vier tinten op 90\u00b0 afstand op het kleurenwiel. Rijk en evenwichtig \u2013 ideaal voor complexe interfaces, dashboards en datavisualisatie.',
    },
    {
      icon: 'RiFireLine',
      title: 'Warm palet',
      description: 'Kleuren verschoven naar rood, oranje en geel. Roept energie, warmte en toegankelijkheid op. Ideaal voor horecamerken en marketingcampagnes.',
    },
    {
      icon: 'RiSnowflakeLine',
      title: 'Koel palet',
      description: 'Kleuren verschoven naar blauw, turquoise en paars. Communiceert rust, professionaliteit en vertrouwen. Populair in fintech, gezondheidszorg en corporate branding.',
    },
    {
      icon: 'RiSeedlingLine',
      title: 'Aardetinten palet',
      description:
        'Laag verzadigde bruinen, olijven en okers ge\u00efnspireerd door natuurlandschappen. Ideaal voor eco-merken en ambachtelijke producten. De Nederlandse Stijl-traditie (De Stijl) maakte aardse tinten populair naast de primaire kleuren.',
    },
    { icon: 'RiFlashlightLine', title: 'Neon palet', description: 'Maximaal verzadigde kleuren met elektrische intensiteit. Voor gewaagde marketing, gaming-interfaces en opvallende ontwerpen.' },
    { icon: 'RiAncientGateLine', title: 'Vintage palet', description: 'Onverzadigde, licht warme tonen die doen denken aan oude drukken en retro-fotografie.' },
    {
      icon: 'RiContrastLine',
      title: 'Hoog contrast palet',
      description: 'Extreem helderheidsbereik van bijna zwart tot bijna wit. Uitstekend voor toegankelijke ontwerpen en WCAG-conforme interfaces.',
    },
    { icon: 'RiSunLine', title: 'Zonsondergang gradi\u00ebnt', description: 'Vloeiende tintrotatie van warm naar koel. Ideaal voor hero-secties, achtergronden en creatieve projecten.' },
  ],
  ro: [
    {
      icon: 'RiGridLine',
      title: 'Paleta tetradica (patrata)',
      description: 'Patru nuante la 90\u00b0 pe cercul cromatic. Bogata si echilibrata \u2013 ideala pentru interfete complexe si vizualizare date.',
    },
    { icon: 'RiFireLine', title: 'Paleta calda', description: 'Culori deplasate spre rosii, portocalii si galbene. Evoca energie si caldura.' },
    { icon: 'RiSnowflakeLine', title: 'Paleta rece', description: 'Culori deplasate spre albastru, turcoaz si violet. Comunica calm si profesionalism.' },
    { icon: 'RiSeedlingLine', title: 'Paleta tonuri pamant', description: 'Maro, maslin si ocru cu saturatie scazuta, inspirate de peisaje naturale.' },
    { icon: 'RiFlashlightLine', title: 'Paleta neon', description: 'Culori cu saturatie maxima si intensitate electrica.' },
    { icon: 'RiAncientGateLine', title: 'Paleta vintage', description: 'Tonuri desaturate si usor calde, amintind de tiparuri vechi si fotografie retro.' },
    { icon: 'RiContrastLine', title: 'Paleta contrast ridicat', description: 'Gama extrema de luminozitate. Excelenta pentru designuri accesibile si interfete WCAG.' },
    { icon: 'RiSunLine', title: 'Paleta gradient apus', description: 'Rotatie lina de nuante de la cald la rece, imitand un apus natural.' },
  ],
  hu: [
    {
      icon: 'RiGridLine',
      title: 'Tetradikus (negyzetes) paletta',
      description: 'Negy arnyalat 90\u00b0 tavols\u00e1gra a szinkereken. Gazdag es kiegyensulyozott \u2013 idealis osszetett feluletek es adatvizualizacio szamara.',
    },
    { icon: 'RiFireLine', title: 'Meleg paletta', description: 'Szinek a vorosok, narancssargak es sargak fele eltolva. Energiat es melegsaget idez.' },
    { icon: 'RiSnowflakeLine', title: 'Hideg paletta', description: 'Szinek a kekek, turkizek es lilaak fele eltolva. Nyugalmat es professzionalizmust kozvetit.' },
    { icon: 'RiSeedlingLine', title: 'Foldszinu paletta', description: 'Alacsony telitettsegu barnak, olivak es okkerek, termeszeti tajak altal inspiralva.' },
    { icon: 'RiFlashlightLine', title: 'Neon paletta', description: 'Maximalis telitettsegu szinek elektromos intenzitassal.' },
    { icon: 'RiAncientGateLine', title: 'Vintage paletta', description: 'Telitetlen, enyhon meleg tonusok, amelyek regi nyomatokra es retro fenykepezesre emlekeztetnek.' },
    { icon: 'RiContrastLine', title: 'Magas kontrasztu paletta', description: 'Extrem fenyerosseg-tartomany. Kituno akadalymentes tervezeshez es WCAG-kompatibilis feluletekhez.' },
    { icon: 'RiSunLine', title: 'Naplemente gradiens paletta', description: 'Finom arnyalat-rotacio melegtol hideig, termeszetes naplementet utanozva.' },
  ],
  cs: [
    { icon: 'RiGridLine', title: 'Tetradicky (ctvercovy) paleta', description: 'Ctyri odstiny v 90\u00b0 intervalech na barevnem kruhu. Bohata a vyvazena.' },
    { icon: 'RiFireLine', title: 'Tepla paleta', description: 'Barvy posunute k cervenym, oranzovym a zlutym. Vyvolava energii a teplo.' },
    { icon: 'RiSnowflakeLine', title: 'Studena paleta', description: 'Barvy posunute k modrym, tyrkysovym a fialovym. Sdeluje klid a profesionalitu.' },
    { icon: 'RiSeedlingLine', title: 'Zemite tony', description: 'Nizce nasycene hnede, olivove a okrove tony inspirovane prirodnimi krajinami.' },
    { icon: 'RiFlashlightLine', title: 'Neonova paleta', description: 'Maximalne nasycene barvy s elektrickou intenzitou.' },
    { icon: 'RiAncientGateLine', title: 'Vintage paleta', description: 'Odsycene, mirne teple tony pripominajici stare tisky a retro fotografii.' },
    { icon: 'RiContrastLine', title: 'Vysoky kontrast', description: 'Extremni rozsah jasu. Vynikajici pro pristupne designy a WCAG rozhrani.' },
    { icon: 'RiSunLine', title: 'Gradient zapadu slunce', description: 'Plynula rotace odstinu od teplych k studenym.' },
  ],
  sv: [
    {
      icon: 'RiGridLine',
      title: 'Tetradisk (kvadrat) palett',
      description: 'Fyra nyanser med 90\u00b0 mellanrum pa farhjulet. Rik och balanserad \u2013 ideal for komplexa grenssnitt och datavisualisering.',
    },
    { icon: 'RiFireLine', title: 'Varm palett', description: 'Farger forskjutna mot rott, orange och gult. Framkallar energi och varme.' },
    { icon: 'RiSnowflakeLine', title: 'Kall palett', description: 'Farger forskjutna mot blatt, turkos och lila. Kommunicerar lugn och professionalism.' },
    { icon: 'RiSeedlingLine', title: 'Jordtoner', description: 'Lagt mattade bruna, oliv- och ockratoner inspirerade av naturlandskap.' },
    { icon: 'RiFlashlightLine', title: 'Neonpalett', description: 'Maximalt mattade farger med elektrisk intensitet.' },
    { icon: 'RiAncientGateLine', title: 'Vintagepalett', description: 'Avmattade, svagt varma toner som paminner om gamla tryck och retrofotografi.' },
    { icon: 'RiContrastLine', title: 'Hogkontrastpalett', description: 'Extremt ljusstyrkeomfang. Utmarkt for tillgangliga designs och WCAG-kompatibla grenssnitt.' },
    { icon: 'RiSunLine', title: 'Solnedgangsgradiont', description: 'Mjuk nyansrotation fran varmt till kallt, som en naturlig solnedgang.' },
  ],
  da: [
    { icon: 'RiGridLine', title: 'Tetradisk (kvadrat) palet', description: 'Fire nuancer med 90\u00b0 mellemrum. Rig og afbalanceret \u2013 ideel til komplekse interfaces og datavisualisering.' },
    { icon: 'RiFireLine', title: 'Varm palet', description: 'Farver forskudt mod rodt, orange og gult. Fremkalder energi og varme.' },
    { icon: 'RiSnowflakeLine', title: 'Kold palet', description: 'Farver forskudt mod blat, turkis og violet. Kommunikerer ro og professionalisme.' },
    { icon: 'RiSeedlingLine', title: 'Jordtoner', description: 'Lavt maettede brune, oliven- og okker-toner inspireret af naturlandskaber.' },
    { icon: 'RiFlashlightLine', title: 'Neonpalet', description: 'Maksimalt maettede farver med elektrisk intensitet.' },
    { icon: 'RiAncientGateLine', title: 'Vintagepalet', description: 'Afmaettede, let varme toner der minder om gamle tryk og retro-fotografi.' },
    { icon: 'RiContrastLine', title: 'Hojkontrastpalet', description: 'Ekstremt lysstyrkeomrade. Fremragende til tilgaengelige designs og WCAG-graneflader.' },
    { icon: 'RiSunLine', title: 'Solnedgangsgradient', description: 'Blod nuancerotation fra varmt til koldt som en naturlig solnedgang.' },
  ],
  no: [
    { icon: 'RiGridLine', title: 'Tetradisk (kvadrat) palett', description: 'Fire nyanser med 90\u00b0 mellomrom. Rik og balansert \u2013 ideell for komplekse grensesnitt og datavisualisering.' },
    { icon: 'RiFireLine', title: 'Varm palett', description: 'Farger forskjovet mot rodt, oransje og gult. Fremkaller energi og varme.' },
    { icon: 'RiSnowflakeLine', title: 'Kald palett', description: 'Farger forskjovet mot blatt, turkis og fiolett. Kommuniserer ro og profesjonalisme.' },
    { icon: 'RiSeedlingLine', title: 'Jordtoner', description: 'Lavt mettede brune, oliven- og okkertoner inspirert av naturlandskap.' },
    { icon: 'RiFlashlightLine', title: 'Neonpalett', description: 'Maksimalt mettede farger med elektrisk intensitet.' },
    { icon: 'RiAncientGateLine', title: 'Vintagepalett', description: 'Avmettede, lett varme toner som minner om gamle trykk og retrofotografi.' },
    { icon: 'RiContrastLine', title: 'Hoykontrastpalett', description: 'Ekstremt lysstyrkespenn. Utmerket for tilgjengelige design og WCAG-kompatible grensesnitt.' },
    { icon: 'RiSunLine', title: 'Solnedgangsgradient', description: 'Myk nyanserotasjon fra varmt til kaldt, som en naturlig solnedgang.' },
  ],
  fi: [
    {
      icon: 'RiGridLine',
      title: 'Tetradinen (nelio) paletti',
      description: 'Nelja savya 90\u00b0 valein varipyoralla. Rikas ja tasapainoinen \u2013 ihanteellinen monimutkaisiin kayttoliittymiin ja datan visualisointiin.',
    },
    { icon: 'RiFireLine', title: 'Lammin paletti', description: 'Varit siirretty kohti punaisia, oransseja ja keltaisia. Herattaa energiaa ja lampoa.' },
    { icon: 'RiSnowflakeLine', title: 'Viilea paletti', description: 'Varit siirretty kohti sinisia, turkooseja ja violetteja. Viestii rauhaa ja ammattimaisuutta.' },
    { icon: 'RiSeedlingLine', title: 'Maanlaheinen paletti', description: 'Matalasti kyllastettyja ruskeita, oliiveja ja okroja luonnonmaisemien inspiroimana.' },
    { icon: 'RiFlashlightLine', title: 'Neonpaletti', description: 'Maksimaalisesti kyllastetyt varit sahkoisella intensiteetilla.' },
    { icon: 'RiAncientGateLine', title: 'Vintagepaletti', description: 'Haalistetut, lievästi lampimat savyt jotka muistuttavat vanhoja painatuksia ja retrovalokuvausta.' },
    { icon: 'RiContrastLine', title: 'Korkean kontrastin paletti', description: 'Aarimmäinen kirkkausjakauma. Erinomainen saavutettaviin suunnitelmiin ja WCAG-yhteensopiviin kayttoliittymiin.' },
    { icon: 'RiSunLine', title: 'Auringonlaskugradientti', description: 'Pehmea savyn kierto lampimasta viileaan, luonnollisen auringonlaskun tavoin.' },
  ],
  el: [
    {
      icon: 'RiGridLine',
      title: '\u03a4\u03b5\u03c4\u03c1\u03b1\u03b4\u03b9\u03ba\u03ae (\u03c4\u03b5\u03c4\u03c1\u03ac\u03b3\u03c9\u03bd\u03b7) \u03c0\u03b1\u03bb\u03ad\u03c4\u03b1',
      description:
        '\u03a4\u03ad\u03c3\u03c3\u03b5\u03c1\u03b5\u03b9\u03c2 \u03b1\u03c0\u03bf\u03c7\u03c1\u03ce\u03c3\u03b5\u03b9\u03c2 \u03c3\u03b5 90\u00b0 \u03c3\u03c4\u03bf\u03bd \u03c7\u03c1\u03c9\u03bc\u03b1\u03c4\u03b9\u03ba\u03cc \u03ba\u03cd\u03ba\u03bb\u03bf. \u03a0\u03bb\u03bf\u03cd\u03c3\u03b9\u03b1 \u03ba\u03b1\u03b9 \u03b9\u03c3\u03bf\u03c1\u03c1\u03bf\u03c0\u03b7\u03bc\u03ad\u03bd\u03b7.',
    },
    {
      icon: 'RiFireLine',
      title: '\u0398\u03b5\u03c1\u03bc\u03ae \u03c0\u03b1\u03bb\u03ad\u03c4\u03b1',
      description:
        '\u03a7\u03c1\u03ce\u03bc\u03b1\u03c4\u03b1 \u03bc\u03b5\u03c4\u03b1\u03c4\u03bf\u03c0\u03b9\u03c3\u03bc\u03ad\u03bd\u03b1 \u03c0\u03c1\u03bf\u03c2 \u03ba\u03cc\u03ba\u03ba\u03b9\u03bd\u03b1, \u03c0\u03bf\u03c1\u03c4\u03bf\u03ba\u03b1\u03bb\u03af \u03ba\u03b1\u03b9 \u03ba\u03af\u03c4\u03c1\u03b9\u03bd\u03b1. \u0395\u03ba\u03c0\u03ad\u03bc\u03c0\u03b5\u03b9 \u03b5\u03bd\u03ad\u03c1\u03b3\u03b5\u03b9\u03b1 \u03ba\u03b1\u03b9 \u03b6\u03b5\u03c3\u03c4\u03b1\u03c3\u03b9\u03ac.',
    },
    {
      icon: 'RiSnowflakeLine',
      title: '\u03a8\u03c5\u03c7\u03c1\u03ae \u03c0\u03b1\u03bb\u03ad\u03c4\u03b1',
      description:
        '\u03a7\u03c1\u03ce\u03bc\u03b1\u03c4\u03b1 \u03c0\u03c1\u03bf\u03c2 \u03bc\u03c0\u03bb\u03b5, \u03c4\u03b9\u03c1\u03ba\u03bf\u03c5\u03ac\u03b6 \u03ba\u03b1\u03b9 \u03bc\u03bf\u03b2. \u039c\u03b5\u03c4\u03b1\u03b4\u03af\u03b4\u03b5\u03b9 \u03b7\u03c1\u03b5\u03bc\u03af\u03b1 \u03ba\u03b1\u03b9 \u03b5\u03c0\u03b1\u03b3\u03b3\u03b5\u03bb\u03bc\u03b1\u03c4\u03b9\u03c3\u03bc\u03cc.',
    },
    {
      icon: 'RiSeedlingLine',
      title: '\u03a0\u03b1\u03bb\u03ad\u03c4\u03b1 \u03b3\u03ae\u03b9\u03bd\u03c9\u03bd \u03c4\u03cc\u03bd\u03c9\u03bd',
      description:
        '\u039a\u03b1\u03c6\u03ad, \u03b5\u03bb\u03b9\u03ac \u03ba\u03b1\u03b9 \u03ce\u03c7\u03c1\u03b1 \u03c7\u03b1\u03bc\u03b7\u03bb\u03bf\u03cd \u03ba\u03bf\u03c1\u03b5\u03c3\u03bc\u03bf\u03cd, \u03b5\u03bc\u03c0\u03bd\u03b5\u03c5\u03c3\u03bc\u03ad\u03bd\u03b1 \u03b1\u03c0\u03cc \u03c6\u03c5\u03c3\u03b9\u03ba\u03ac \u03c4\u03bf\u03c0\u03af\u03b1.',
    },
    {
      icon: 'RiFlashlightLine',
      title: '\u03a0\u03b1\u03bb\u03ad\u03c4\u03b1 \u03bd\u03ad\u03bf\u03bd',
      description:
        '\u03a7\u03c1\u03ce\u03bc\u03b1\u03c4\u03b1 \u03bc\u03ad\u03b3\u03b9\u03c3\u03c4\u03bf\u03c5 \u03ba\u03bf\u03c1\u03b5\u03c3\u03bc\u03bf\u03cd \u03bc\u03b5 \u03b7\u03bb\u03b5\u03ba\u03c4\u03c1\u03b9\u03ba\u03ae \u03ad\u03bd\u03c4\u03b1\u03c3\u03b7.',
    },
    {
      icon: 'RiAncientGateLine',
      title: '\u03a0\u03b1\u03bb\u03ad\u03c4\u03b1 vintage',
      description:
        '\u0391\u03c0\u03bf\u03ba\u03bf\u03c1\u03b5\u03c3\u03bc\u03ad\u03bd\u03bf\u03b9, \u03b5\u03bb\u03b1\u03c6\u03c1\u03ce\u03c2 \u03b8\u03b5\u03c1\u03bc\u03bf\u03af \u03c4\u03cc\u03bd\u03bf\u03b9 \u03c0\u03bf\u03c5 \u03b8\u03c5\u03bc\u03af\u03b6\u03bf\u03c5\u03bd \u03c0\u03b1\u03bb\u03b9\u03ac \u03b5\u03ba\u03c4\u03c5\u03c0\u03ce\u03c3\u03b5\u03b9\u03c2.',
    },
    {
      icon: 'RiContrastLine',
      title: '\u03a0\u03b1\u03bb\u03ad\u03c4\u03b1 \u03c5\u03c8\u03b7\u03bb\u03ae\u03c2 \u03b1\u03bd\u03c4\u03af\u03b8\u03b5\u03c3\u03b7\u03c2',
      description:
        '\u0395\u03be\u03b1\u03b9\u03c1\u03b5\u03c4\u03b9\u03ba\u03cc \u03b5\u03cd\u03c1\u03bf\u03c2 \u03c6\u03c9\u03c4\u03b5\u03b9\u03bd\u03cc\u03c4\u03b7\u03c4\u03b1\u03c2. \u0399\u03b4\u03b1\u03bd\u03b9\u03ba\u03ae \u03b3\u03b9\u03b1 \u03c0\u03c1\u03bf\u03c3\u03b2\u03ac\u03c3\u03b9\u03bc\u03bf \u03c3\u03c7\u03b5\u03b4\u03b9\u03b1\u03c3\u03bc\u03cc \u03ba\u03b1\u03b9 WCAG.',
    },
    {
      icon: 'RiSunLine',
      title: '\u03a0\u03b1\u03bb\u03ad\u03c4\u03b1 \u03b7\u03bb\u03b9\u03bf\u03b2\u03b1\u03c3\u03b9\u03bb\u03ad\u03bc\u03b1\u03c4\u03bf\u03c2',
      description:
        '\u039f\u03bc\u03b1\u03bb\u03ae \u03c0\u03b5\u03c1\u03b9\u03c3\u03c4\u03c1\u03bf\u03c6\u03ae \u03b1\u03c0\u03bf\u03c7\u03c1\u03ce\u03c3\u03b5\u03c9\u03bd \u03b1\u03c0\u03cc \u03b8\u03b5\u03c1\u03bc\u03ad\u03c2 \u03c3\u03b5 \u03c8\u03c5\u03c7\u03c1\u03ad\u03c2.',
    },
  ],
};

// Feature list additions per locale
const newFeats = {
  pl: [
    'Schemat tetradyczny \u2013 4 kolory co 90\u00b0',
    'Paleta ciep\u0142a \u2013 czerwienie, pomara\u0144cze, \u017c\u00f3\u0142cie',
    'Paleta ch\u0142odna \u2013 b\u0142\u0119kity, morskie, fiolety',
    'Paleta ziemista \u2013 br\u0105zy, oliwki, ochry',
    'Paleta neonowa \u2013 maksymalne nasycenie',
    'Paleta vintage \u2013 stonowane tony retro',
    'Paleta wysokokontrastowa \u2013 od czerni do bieli',
    'Paleta gradientu zachodu s\u0142o\u0144ca',
  ],
  de: [
    'Tetradisches Schema \u2013 4 Farben in 90\u00b0',
    'Warme Verschiebung \u2013 Rot, Orange, Gelb',
    'K\u00fchle Verschiebung \u2013 Blau, T\u00fcrkis, Violett',
    'Erdt\u00f6ne \u2013 Braun, Oliv, Ocker',
    'Neon \u2013 maximale S\u00e4ttigung',
    'Vintage \u2013 ents\u00e4ttigte Retro-T\u00f6ne',
    'Hochkontrast \u2013 Schwarz bis Wei\u00df',
    'Sonnenuntergang-Gradient',
  ],
  es: [
    'Esquema tetr\u00e1dico \u2013 4 colores a 90\u00b0',
    'Desplazamiento c\u00e1lido \u2013 rojos, naranjas, amarillos',
    'Desplazamiento fr\u00edo \u2013 azules, turquesas, violetas',
    'Tonos tierra \u2013 marrones, olivas, ocres',
    'Ne\u00f3n \u2013 saturaci\u00f3n m\u00e1xima',
    'Vintage \u2013 tonos retro desaturados',
    'Alto contraste \u2013 negro a blanco',
    'Gradiente atardecer',
  ],
  fr: [
    'Sch\u00e9ma t\u00e9tradique \u2013 4 couleurs \u00e0 90\u00b0',
    'D\u00e9calage chaud \u2013 rouges, oranges, jaunes',
    'D\u00e9calage froid \u2013 bleus, turquoises, violets',
    'Tons terre \u2013 bruns, olives, ocres',
    'N\u00e9on \u2013 saturation maximale',
    'Vintage \u2013 tons r\u00e9tro d\u00e9satur\u00e9s',
    'Haut contraste \u2013 noir \u00e0 blanc',
    'D\u00e9grad\u00e9 coucher de soleil',
  ],
  pt: [
    'Esquema tetr\u00e1dico \u2013 4 cores a 90\u00b0',
    'Mudan\u00e7a quente \u2013 vermelhos, laranjas, amarelos',
    'Mudan\u00e7a fria \u2013 azuis, turquesas, violetas',
    'Tons de terra \u2013 castanhos, olivas, ocres',
    'N\u00e9on \u2013 satura\u00e7\u00e3o m\u00e1xima',
    'Vintage \u2013 tons retro dessaturados',
    'Alto contraste \u2013 preto a branco',
    'Gradiente p\u00f4r do sol',
  ],
  it: [
    'Schema tetradico \u2013 4 colori a 90\u00b0',
    'Spostamento caldo \u2013 rossi, arancioni, gialli',
    'Spostamento freddo \u2013 blu, turchesi, viola',
    'Toni terra \u2013 marroni, olive, ocra',
    'Neon \u2013 saturazione massima',
    'Vintage \u2013 toni retr\u00f2 desaturati',
    'Alto contrasto \u2013 nero a bianco',
    'Gradiente tramonto',
  ],
  nl: [
    'Tetradisch schema \u2013 4 kleuren op 90\u00b0',
    'Warme verschuiving \u2013 rood, oranje, geel',
    'Koele verschuiving \u2013 blauw, turquoise, paars',
    'Aardetinten \u2013 bruin, olijf, oker',
    'Neon \u2013 maximale verzadiging',
    'Vintage \u2013 desatureerde retrotinten',
    'Hoog contrast \u2013 zwart tot wit',
    'Zonsondergang-gradi\u00ebnt',
  ],
  ro: [
    'Schema tetradica \u2013 4 culori la 90\u00b0',
    'Deplasare calda \u2013 rosii, portocalii, galbene',
    'Deplasare rece \u2013 albastru, turcoaz, violet',
    'Tonuri pamant \u2013 maro, maslin, ocru',
    'Neon \u2013 saturatie maxima',
    'Vintage \u2013 tonuri retro desaturate',
    'Contrast ridicat \u2013 negru la alb',
    'Gradient apus',
  ],
  hu: [
    'Tetradikus sema \u2013 4 szin 90\u00b0-ra',
    'Meleg eltolas \u2013 vorosok, narancsok, sargak',
    'Hideg eltolas \u2013 kekek, turkizek, lilak',
    'Foldszinek \u2013 barnak, olivak, okkerek',
    'Neon \u2013 maximalis telitettseg',
    'Vintage \u2013 telitetlen retro tonusok',
    'Magas kontraszt \u2013 feketetol fehérig',
    'Naplemente gradiens',
  ],
  cs: [
    'Tetradicky schema \u2013 4 barvy po 90\u00b0',
    'Teply posun \u2013 cervene, oranzove, zlute',
    'Studeny posun \u2013 modre, tyrkysove, fialove',
    'Zemite tony \u2013 hnede, olivove, okrove',
    'Neon \u2013 maximalni nasyceni',
    'Vintage \u2013 odsycene retro tony',
    'Vysoky kontrast \u2013 cerna az bila',
    'Gradient zapadu slunce',
  ],
  sv: [
    'Tetradiskt schema \u2013 4 farger pa 90\u00b0',
    'Varm forskjutning \u2013 rott, orange, gult',
    'Kall forskjutning \u2013 blatt, turkos, lila',
    'Jordtoner \u2013 brunt, oliv, ockra',
    'Neon \u2013 maximal mattnad',
    'Vintage \u2013 avmattade retrotoner',
    'Hog kontrast \u2013 svart till vitt',
    'Solnedgangsgradient',
  ],
  da: [
    'Tetradisk skema \u2013 4 farver pa 90\u00b0',
    'Varm forskydning \u2013 rodt, orange, gult',
    'Kold forskydning \u2013 blat, turkis, violet',
    'Jordtoner \u2013 brun, oliven, okker',
    'Neon \u2013 maksimal maetning',
    'Vintage \u2013 afmaettede retrotoner',
    'Hoj kontrast \u2013 sort til hvid',
    'Solnedgangsgradient',
  ],
  no: [
    'Tetradisk skjema \u2013 4 farger pa 90\u00b0',
    'Varm forskyvning \u2013 rodt, oransje, gult',
    'Kald forskyvning \u2013 blatt, turkis, fiolett',
    'Jordtoner \u2013 brunt, oliven, okker',
    'Neon \u2013 maksimal metning',
    'Vintage \u2013 avmettede retrotoner',
    'Hoy kontrast \u2013 svart til hvitt',
    'Solnedgangsgradient',
  ],
  fi: [
    'Tetradinen kaava \u2013 4 varia 90\u00b0 valein',
    'Lammin siirtyma \u2013 punaiset, oranssit, keltaiset',
    'Viilea siirtyma \u2013 siniset, turkoosit, violetit',
    'Maanlaheisetsavyt \u2013 ruskeat, oliivit, okrat',
    'Neon \u2013 maksimaalinen kyllaisyys',
    'Vintage \u2013 haalistetut retrosavyt',
    'Korkea kontrasti \u2013 mustasta valkoiseen',
    'Auringonlaskugradientti',
  ],
  el: [
    '\u03a4\u03b5\u03c4\u03c1\u03b1\u03b4\u03b9\u03ba\u03cc \u03c3\u03c7\u03ae\u03bc\u03b1 \u2013 4 \u03c7\u03c1\u03ce\u03bc\u03b1\u03c4\u03b1 \u03c3\u03c4\u03b9\u03c2 90\u00b0',
    '\u0398\u03b5\u03c1\u03bc\u03ae \u03bc\u03b5\u03c4\u03b1\u03c4\u03cc\u03c0\u03b9\u03c3\u03b7 \u2013 \u03ba\u03cc\u03ba\u03ba\u03b9\u03bd\u03b1, \u03c0\u03bf\u03c1\u03c4\u03bf\u03ba\u03b1\u03bb\u03af, \u03ba\u03af\u03c4\u03c1\u03b9\u03bd\u03b1',
    '\u03a8\u03c5\u03c7\u03c1\u03ae \u03bc\u03b5\u03c4\u03b1\u03c4\u03cc\u03c0\u03b9\u03c3\u03b7 \u2013 \u03bc\u03c0\u03bb\u03b5, \u03c4\u03b9\u03c1\u03ba\u03bf\u03c5\u03ac\u03b6, \u03bc\u03bf\u03b2',
    '\u0393\u03ae\u03b9\u03bd\u03bf\u03b9 \u03c4\u03cc\u03bd\u03bf\u03b9 \u2013 \u03ba\u03b1\u03c6\u03ad, \u03b5\u03bb\u03b9\u03ac, \u03ce\u03c7\u03c1\u03b1',
    '\u039d\u03ad\u03bf\u03bd \u2013 \u03bc\u03ad\u03b3\u03b9\u03c3\u03c4\u03bf\u03c2 \u03ba\u03bf\u03c1\u03b5\u03c3\u03bc\u03cc\u03c2',
    'Vintage \u2013 \u03b1\u03c0\u03bf\u03ba\u03bf\u03c1\u03b5\u03c3\u03bc\u03ad\u03bd\u03bf\u03b9 \u03c1\u03b5\u03c4\u03c1\u03cc \u03c4\u03cc\u03bd\u03bf\u03b9',
    '\u03a5\u03c8\u03b7\u03bb\u03ae \u03b1\u03bd\u03c4\u03af\u03b8\u03b5\u03c3\u03b7 \u2013 \u03bc\u03b1\u03cd\u03c1\u03bf \u03c9\u03c2 \u03bb\u03b5\u03c5\u03ba\u03cc',
    '\u0397\u03bb\u03b9\u03bf\u03b2\u03b1\u03c3\u03af\u03bb\u03b5\u03bc\u03b1 gradient',
  ],
};

const ALL_NON_EN = ['pl', 'de', 'es', 'fr', 'pt', 'it', 'nl', 'ro', 'hu', 'cs', 'sv', 'da', 'no', 'fi', 'el'];

for (const loc of ALL_NON_EN) {
  const fp = path.join('data', loc, 'tools', 'color-palette.json');
  if (!fs.existsSync(fp)) {
    console.log('SKIP:', fp);
    continue;
  }
  const data = JSON.parse(fs.readFileSync(fp, 'utf8'));

  // 1. Replace "9" with "17" in metadata, hero, schema text fields
  const replace9 = (s) => {
    if (typeof s !== 'string') return s;
    return (
      s
        .replace(/\b9 schematów/g, '17 schematów')
        .replace(/\b9 Schemata/g, '17 Schemata')
        .replace(/\b9 Farbpaletten/g, '17 Farbpaletten')
        .replace(/\b9 Farbschemata/g, '17 Farbschemata')
        .replace(/\b9 esquemas/g, '17 esquemas')
        .replace(/\b9 paletas/g, '17 paletas')
        .replace(/\b9 sch[eé]mas/g, '17 schémas')
        .replace(/\b9 palettes/g, '17 palettes')
        .replace(/\b9 schemi/g, '17 schemi')
        .replace(/\b9 palette/g, '17 palette')
        .replace(/\b9 kleurenschema/g, '17 kleurenschema')
        .replace(/\b9 kleurenpaletten/g, '17 kleurenpaletten')
        .replace(/\b9 scheme/g, '17 scheme')
        .replace(/\b9 palett/g, '17 palett')
        .replace(/\b9 palet/g, '17 palet')
        .replace(/\b9 s[eé]mat/g, '17 sémat')
        .replace(/\b9 \u03c3\u03c7\u03ae\u03bc\u03b1\u03c4\u03b1/g, '17 \u03c3\u03c7\u03ae\u03bc\u03b1\u03c4\u03b1')
        .replace(/\b9 \u03c0\u03b1\u03bb\u03ad\u03c4/g, '17 \u03c0\u03b1\u03bb\u03ad\u03c4')
        .replace(/\b9 palet kolorów/g, '17 palet kolorów')
        .replace(/\b9 różnych palet/g, '17 różnych palet')
        .replace(/\b9 zestawów/g, '17 zestawów')
        .replace(/\b9 schematów kolorystycznych/g, '17 schematów kolorystycznych')
        // Generic fallbacks
        .replace(/ 9 /g, (m) => m.replace('9', '17'))
    );
  };

  data.metadata.title = replace9(data.metadata.title);
  data.metadata.description = replace9(data.metadata.description);
  data.hero.title = replace9(data.hero.title);
  data.hero.description = replace9(data.hero.description);
  if (data.schemas.software) {
    data.schemas.software.name = replace9(data.schemas.software.name);
    data.schemas.software.description = replace9(data.schemas.software.description);
  }
  if (data.schemas.howTo) {
    data.schemas.howTo.description = replace9(data.schemas.howTo.description);
    if (data.schemas.howTo.steps) {
      data.schemas.howTo.steps = data.schemas.howTo.steps.map((s) => ({ ...s, text: replace9(s.text) }));
    }
  }

  // 2. Add new featureList entries
  if (newFeats[loc]) {
    const fl = data.schemas.software.featureList || [];
    const hasTetra = fl.some((f) => /tetrad|tetradick|tetradisch|tetr[aá]dic|t[eé]tradique|tetradisk|tetradinen|\u03c4\u03b5\u03c4\u03c1\u03b1\u03b4/i.test(f));
    if (!hasTetra) {
      // Insert before "Kolor bazowy" / "Base color" type entries
      const baseIdx = fl.findIndex((f) => /bazow|basis|base|HEX|pr[oó]bnik|kleurenkiezer|farvev/i.test(f));
      const ins = baseIdx >= 0 ? baseIdx : fl.length;
      fl.splice(ins, 0, ...newFeats[loc]);
    }
    data.schemas.software.featureList = fl;
  }

  // 3. Add 8 new palette description cards to the "What schemes" section
  if (newPalettes[loc]) {
    for (const block of data.contentBlocks) {
      if (block.type === 'sectionSteps' && block.items && block.items[0] && block.items[0].icon === 'RiStackLine') {
        // This is the palette descriptions section
        const hasTetra = block.items.some((i) => i.icon === 'RiGridLine');
        if (!hasTetra) {
          block.items.push(...newPalettes[loc]);
        }
        block.description = replace9(block.description);
        break;
      }
    }
  }

  // 4. Replace 9→17 in content block texts
  for (const block of data.contentBlocks) {
    if (block.html) block.html = replace9(block.html);
    if (block.description) block.description = replace9(block.description);
    if (block.items) {
      block.items = block.items.map((item) => ({
        ...item,
        description: replace9(item.description || ''),
      }));
    }
  }

  fs.writeFileSync(fp, JSON.stringify(data, null, 2) + '\n', 'utf8');
  console.log('Updated:', fp);
}

console.log('Done: palette update for', ALL_NON_EN.join(', '));
