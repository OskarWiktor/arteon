/**
 * Phase 4: Color Palette — expand content for 14 non-EN/non-PL locales.
 * Adds: cultural color context section, color psychology section, expanded FAQ.
 * Each locale gets UNIQUE content — no mirror translations.
 * Run: node scripts/_cp-locale-expand.cjs
 */
const fs = require('fs');

const LOCALES = ['cs','da','de','el','es','fi','fr','hu','it','nl','no','pt','ro','sv'];

// Cultural color sections — unique per locale
const CULTURAL = {
  cs: {
    title: "Barvy v \u010desk\u00e9m designu a um\u011bn\u00ed",
    html: '<p class="text-mid mb-4">St\u0159edn\u00ed Evropa m\u00e1 bohatou tradici pr\u00e1ce s barvou:</p><ul class="text-mid list-disc space-y-2 pl-5"><li><strong>\u010cesk\u00fd kubismus</strong> \u2014 unik\u00e1tn\u00ed architektonick\u00fd a designov\u00fd sm\u011br, kter\u00fd kombinoval geometrick\u00e9 formy s v\u00fdrazn\u00fdmi barvami. Pra\u017esk\u00e9 kubistick\u00e9 fas\u00e1dy pou\u017e\u00edvaj\u00ed hlubok\u00e9 okrov\u00e9, \u0161ed\u00e9 a terakotov\u00e9 t\u00f3ny.</li><li><strong>Alfons Mucha</strong> \u2014 jeho secesn\u00ed plak\u00e1ty vyu\u017e\u00edvaj\u00ed tlumen\u00e9 pastelky, zlat\u00e9 akcenty a organick\u00e9 p\u0159echody barev.</li><li><strong>\u010cesk\u00e9 sklo</strong> \u2014 tradi\u010dn\u00ed bohemsk\u00e9 k\u0159i\u0161\u0165\u00e1lov\u00e9 sklo je zn\u00e1m\u00e9 sv\u00fdmi syt\u00fdmi \u010derven\u00fdmi, modr\u00fdmi a zelen\u00fdmi odst\u00edny.</li></ul>'
  },
  da: {
    title: "Farver i dansk design og kultur",
    html: '<p class="text-mid mb-4">Dansk design er verdenskendt for sin brug af farver:</p><ul class="text-mid list-disc space-y-2 pl-5"><li><strong>Hygge-farver</strong> \u2014 varme, d\u00e6mpede t\u00f8ner som karamel, varm gr\u00e5 og bl\u00f8d hvid definerer den danske hygge-\u00e6stetik. Disse farver skaber tryghed og intimitet.</li><li><strong>Royal Copenhagen</strong> \u2014 det ikoniske bl\u00e5-hvide porcel\u00e6n har p\u00e5virket dansk farve\u00e6stetik i over 200 \u00e5r. Cobaltbl\u00e5t p\u00e5 hvidt er en dansk designklassiker.</li><li><strong>Nordisk minimalisme</strong> \u2014 skandinavisk design foretr\u00e6kker lyse, neutrale paletter med f\u00e5 kontrastfarver. Hvidt, lyst tr\u00e6 og accentfarver i bl\u00f8de pasteller.</li></ul>'
  },
  de: {
    title: "Farbtraditionen im deutschen Design",
    html: '<p class="text-mid mb-4">Deutschland hat die Farbtheorie und das Design ma\u00dfgeblich gepr\u00e4gt:</p><ul class="text-mid list-disc space-y-2 pl-5"><li><strong>Bauhaus</strong> \u2014 Johannes Itten entwickelte am Bauhaus seinen Farbkreis und die Lehre der Farbkontraste. Paul Klee und Wassily Kandinsky erforschten die Beziehung zwischen Farbe und Form. Diese Prinzipien flie\u00dfen bis heute in Designsysteme ein.</li><li><strong>RAL-Farbsystem</strong> \u2014 der deutsche Industriestandard f\u00fcr Farben. RAL-Nummern werden in Architektur, Fahrzeugbau und Produktdesign als verbindliche Referenz verwendet.</li><li><strong>Deutsche Flaggenfarben</strong> \u2014 Schwarz, Rot und Gold haben eine Geschichte, die bis zu den Befreiungskriegen zur\u00fcckreicht. Ihre Kombination wird im Markendesign bewusst oder als kulturelle Referenz eingesetzt.</li></ul>'
  },
  el: {
    title: "\u03a7\u03c1\u03ce\u03bc\u03b1\u03c4\u03b1 \u03c3\u03c4\u03b7\u03bd \u03b5\u03bb\u03bb\u03b7\u03bd\u03b9\u03ba\u03ae \u03c4\u03ad\u03c7\u03bd\u03b7 \u03ba\u03b1\u03b9 \u03c0\u03bf\u03bb\u03b9\u03c4\u03b9\u03c3\u03bc\u03cc",
    html: '<p class="text-mid mb-4">\u0397 \u0395\u03bb\u03bb\u03ac\u03b4\u03b1 \u03ad\u03c7\u03b5\u03b9 \u03bc\u03b1\u03ba\u03c1\u03ac \u03c0\u03b1\u03c1\u03ac\u03b4\u03bf\u03c3\u03b7 \u03c3\u03c4\u03b7 \u03c7\u03c1\u03ae\u03c3\u03b7 \u03c7\u03c1\u03c9\u03bc\u03ac\u03c4\u03c9\u03bd:</p><ul class="text-mid list-disc space-y-2 pl-5"><li><strong>\u03a3\u03b1\u03bd\u03c4\u03bf\u03c1\u03af\u03bd\u03b7</strong> \u2014 \u03c4\u03bf \u03b9\u03ba\u03bf\u03bd\u03b9\u03ba\u03cc \u03bc\u03c0\u03bb\u03b5-\u03bb\u03b5\u03c5\u03ba\u03cc \u03c4\u03b7\u03c2 \u03a3\u03b1\u03bd\u03c4\u03bf\u03c1\u03af\u03bd\u03b7\u03c2 \u03b5\u03af\u03bd\u03b1\u03b9 \u03ad\u03bd\u03b1 \u03b1\u03c0\u03cc \u03c4\u03b1 \u03c0\u03b9\u03bf \u03b1\u03bd\u03b1\u03b3\u03bd\u03c9\u03c1\u03af\u03c3\u03b9\u03bc\u03b1 \u03c7\u03c1\u03c9\u03bc\u03b1\u03c4\u03b9\u03ba\u03ac \u03c3\u03c7\u03ae\u03bc\u03b1\u03c4\u03b1 \u03c3\u03c4\u03bf\u03bd \u03ba\u03cc\u03c3\u03bc\u03bf. \u039b\u03b5\u03c5\u03ba\u03bf\u03af \u03c4\u03bf\u03af\u03c7\u03bf\u03b9 \u03ba\u03b1\u03b9 \u03bc\u03c0\u03bb\u03b5 \u03b8\u03cc\u03bb\u03bf\u03b9 \u2014 \u03bc\u03b9\u03b1 \u03ba\u03bf\u03bc\u03c0\u03bb\u03b5\u03bc\u03b5\u03bd\u03c4\u03b1\u03c1\u03ae \u03c0\u03b1\u03bb\u03ad\u03c4\u03b1 \u03bc\u03b5 \u03c6\u03c5\u03c3\u03b9\u03ba\u03cc \u03c5\u03c8\u03b7\u03bb\u03cc \u03ba\u03bf\u03bd\u03c4\u03c1\u03ac\u03c3\u03c4.</li><li><strong>\u0391\u03c1\u03c7\u03b1\u03af\u03b1 \u03b5\u03bb\u03bb\u03b7\u03bd\u03b9\u03ba\u03ae \u03ba\u03b5\u03c1\u03b1\u03bc\u03b9\u03ba\u03ae</strong> \u2014 \u03bc\u03b5\u03bb\u03b1\u03bd\u03cc\u03bc\u03bf\u03c1\u03c6\u03bf\u03b9 \u03ba\u03b1\u03b9 \u03b5\u03c1\u03c5\u03b8\u03c1\u03cc\u03bc\u03bf\u03c1\u03c6\u03bf\u03b9 \u03b1\u03bc\u03c6\u03bf\u03c1\u03b5\u03af\u03c2 \u03c7\u03c1\u03b7\u03c3\u03b9\u03bc\u03bf\u03c0\u03bf\u03b9\u03bf\u03cd\u03c3\u03b1\u03bd \u03bc\u03b1\u03cd\u03c1\u03bf \u03ba\u03b1\u03b9 \u03c4\u03b5\u03c1\u03b1\u03ba\u03cc\u03c4\u03b1 \u03c3\u03b5 \u03b1\u03c5\u03c3\u03c4\u03b7\u03c1\u03cc \u03b4\u03af\u03c7\u03c1\u03c9\u03bc\u03bf \u03c3\u03c7\u03ae\u03bc\u03b1 \u2014 \u03bc\u03b9\u03b1 \u03b1\u03c0\u03cc \u03c4\u03b9\u03c2 \u03c0\u03c1\u03ce\u03c4\u03b5\u03c2 \u03c3\u03c5\u03bd\u03b5\u03b9\u03b4\u03b7\u03c4\u03ad\u03c2 \u03c7\u03c1\u03ae\u03c3\u03b5\u03b9\u03c2 \u03c7\u03c1\u03c9\u03bc\u03b1\u03c4\u03b9\u03ba\u03bf\u03cd \u03ba\u03bf\u03bd\u03c4\u03c1\u03ac\u03c3\u03c4 \u03c3\u03c4\u03b7\u03bd \u03b9\u03c3\u03c4\u03bf\u03c1\u03af\u03b1.</li><li><strong>\u0392\u03c5\u03b6\u03b1\u03bd\u03c4\u03b9\u03bd\u03cc \u03c7\u03c1\u03c5\u03c3\u03cc</strong> \u2014 \u03c4\u03b1 \u03c8\u03b7\u03c6\u03b9\u03b4\u03c9\u03c4\u03ac \u03ba\u03b1\u03b9 \u03bf\u03b9 \u03b5\u03b9\u03ba\u03cc\u03bd\u03b5\u03c2 \u03c7\u03c1\u03b7\u03c3\u03b9\u03bc\u03bf\u03c0\u03bf\u03b9\u03bf\u03cd\u03c3\u03b1\u03bd \u03c7\u03c1\u03c5\u03c3\u03cc, \u03b2\u03b1\u03b8\u03cd \u03bc\u03c0\u03bb\u03b5 \u03ba\u03b1\u03b9 \u03ba\u03cc\u03ba\u03ba\u03b9\u03bd\u03bf \u2014 \u03c7\u03c1\u03ce\u03bc\u03b1\u03c4\u03b1 \u03c0\u03bf\u03c5 \u03c3\u03c5\u03bc\u03b2\u03bf\u03bb\u03af\u03b6\u03bf\u03c5\u03bd \u03b8\u03b5\u03ca\u03ba\u03cc \u03c6\u03c9\u03c2 \u03ba\u03b1\u03b9 \u03b2\u03b1\u03c3\u03b9\u03bb\u03b9\u03ba\u03ae \u03b5\u03be\u03bf\u03c5\u03c3\u03af\u03b1.</li></ul>'
  },
  es: {
    title: "El color en el arte y la cultura hisp\u00e1nica",
    html: '<p class="text-mid mb-4">El mundo hispanohablante tiene una relaci\u00f3n rica y diversa con el color:</p><ul class="text-mid list-disc space-y-2 pl-5"><li><strong>Gaud\u00ed y la polic\u00e1romia</strong> \u2014 los mosaicos del Park G\u00fcell y la Sagrada Familia combinan cientos de colores en patrones org\u00e1nicos. Este enfoque demuestra que paletas complejas pueden funcionar cuando existe un sistema de color coherente.</li><li><strong>Tradici\u00f3n mediterr\u00e1nea</strong> \u2014 los tonos c\u00e1lidos del sur de Espa\u00f1a (terracota, ocre, blanco encalado, azul cer\u00e1mico) forman una paleta reconocible en arquitectura y dise\u00f1o gr\u00e1fico.</li><li><strong>Textiles latinoamericanos</strong> \u2014 los tejidos mayas, aztecas y andinos utilizan combinaciones vibrantes de rojo, turquesa, amarillo y violeta que inspiran marcas contempor\u00e1neas.</li></ul>'
  },
  fi: {
    title: "V\u00e4rit suomalaisessa muotoilussa",
    html: '<p class="text-mid mb-4">Suomalainen muotoilu tunnetaan omintakeisesta v\u00e4rik\u00e4ytt\u00f6st\u00e4\u00e4n:</p><ul class="text-mid list-disc space-y-2 pl-5"><li><strong>Marimekko</strong> \u2014 rohkeat, suurikuvioiset printit k\u00e4ytt\u00e4v\u00e4t punaista, mustaa ja kirkkaita p\u00e4\u00e4v\u00e4rej\u00e4 tavalla, joka on tullut suomalaisen muotoilun tunnusmerkiksi.</li><li><strong>Saunakulttuurin puus\u00e4vyt</strong> \u2014 l\u00e4mpim\u00e4t koivun, m\u00e4nnyn ja tervan s\u00e4vyt muodostavat luonnollisen palatin, jota k\u00e4ytet\u00e4\u00e4n laajalti sis\u00e4arkkitehtuurissa ja tuotesuunnittelussa.</li><li><strong>Arktinen valo</strong> \u2014 Suomen pitk\u00e4t talvet ja kes\u00e4n ylipitkä p\u00e4iv\u00e4nvalo vaikuttavat v\u00e4rivalintoihin. Vaaleita, korkeakontrastisia paletteja suositaan luettavuuden vuoksi.</li></ul>'
  },
  fr: {
    title: "La couleur dans le design et l\u2019art fran\u00e7ais",
    html: '<p class="text-mid mb-4">La France a profond\u00e9ment influenc\u00e9 la th\u00e9orie et la pratique de la couleur :</p><ul class="text-mid list-disc space-y-2 pl-5"><li><strong>Impressionnisme</strong> \u2014 Monet, Renoir et Cézanne ont r\u00e9volutionn\u00e9 l\u2019usage de la couleur en peignant la lumi\u00e8re naturelle. Leurs palettes de bleus, violets et jaunes doux restent une r\u00e9f\u00e9rence en design graphique.</li><li><strong>Haute couture</strong> \u2014 les maisons de mode parisiennes lancent chaque saison des couleurs tendance qui influencent le design num\u00e9rique. Le \u00ab noir chic \u00bb, le \u00ab rose poudr\u00e9 \u00bb et le \u00ab bleu marine \u00bb sont des classiques fran\u00e7ais.</li><li><strong>Le tricolore</strong> \u2014 bleu, blanc, rouge. Cette combinaison est utilis\u00e9e en branding pour \u00e9voquer l\u2019identit\u00e9 fran\u00e7aise, la qualit\u00e9 et le savoir-faire.</li></ul>'
  },
  hu: {
    title: "Sz\u00ednek a magyar m\u0171v\u00e9szetben \u00e9s kult\u00far\u00e1ban",
    html: '<p class="text-mid mb-4">Magyarorsz\u00e1g sz\u00ednes kult\u00far\u00e1lis \u00f6r\u00f6ks\u00e9ggel rendelkezik:</p><ul class="text-mid list-disc space-y-2 pl-5"><li><strong>Magyar h\u00edmz\u00e9s</strong> \u2014 a kalocsai \u00e9s matyó h\u00edmz\u00e9sek \u00e9l\u00e9nk pirosakat, k\u00e9keket \u00e9s z\u00f6ldeket haszn\u00e1lnak, amelyek inspir\u00e1lj\u00e1k a kort\u00e1rs magyar m\u00e1rkaidentit\u00e1sokat.</li><li><strong>Herendi porcel\u00e1n</strong> \u2014 a vil\u00e1gh\u00edr\u0171 herendi porcel\u00e1n jellegzetes z\u00f6ld, k\u00e9k \u00e9s arany mint\u00e1zatai a prémium design szimbólumai.</li><li><strong>Magyar szecesszi\u00f3</strong> \u2014 Lechner \u00d6d\u00f6n \u00e9p\u00edtészete \u00e9s a Zsolnay ker\u00e1mi\u00e1k irizáló m\u00e1za egyedi sz\u00ednpalett\u00e1t teremtett, amely a modern magyar designban is megjelenik.</li></ul>'
  },
  it: {
    title: "Il colore nel design e nell\u2019arte italiana",
    html: '<p class="text-mid mb-4">L\u2019Italia ha una tradizione secolare nella padronanza del colore:</p><ul class="text-mid list-disc space-y-2 pl-5"><li><strong>Rinascimento</strong> \u2014 Leonardo, Tiziano e Raffaello svilupparono tecniche di sfumatura e velatura che sfruttano transizioni cromatiche graduali. Questi principi si ritrovano nei gradienti del design digitale.</li><li><strong>Vetro di Murano</strong> \u2014 i mastri vetrai veneziani creano colori unici da secoli. I rossi, i blu e gli ori di Murano sono diventati simboli di artigianato di lusso.</li><li><strong>Moda italiana</strong> \u2014 i cicli cromatici della moda milanese influenzano il design digitale globale. Il nero elegante, il rosso Ferrari e i neutri raffinati sono riferimenti costanti.</li></ul>'
  },
  nl: {
    title: "Kleur in het Nederlandse design en kunst",
    html: '<p class="text-mid mb-4">Nederland heeft een unieke kleurtraditie:</p><ul class="text-mid list-disc space-y-2 pl-5"><li><strong>Gouden Eeuw</strong> \u2014 Vermeer gebruikte ultramarijns blauw en warm geel in composities die tot de meest bestudeerde kleurcombinaties in de kunstgeschiedenis behoren. Rembrandt\u2019s chiaroscuro toont de kracht van extreem helderheidscontrast.</li><li><strong>De Stijl</strong> \u2014 Mondriaan reduceerde kleur tot de drie primaire kleuren (rood, geel, blauw) plus zwart en wit. Dit principe vormt de basis van veel moderne designsystemen.</li><li><strong>Delfts blauw</strong> \u2014 het iconische blauw-wit van Delfts aardewerk is een complementair kleurenschema dat al vier eeuwen lang herkenbaar is.</li></ul>'
  },
  no: {
    title: "Farger i norsk design og natur",
    html: '<p class="text-mid mb-4">Norges natur og kulturtradisjoner gir unike fargeinspirasjoner:</p><ul class="text-mid list-disc space-y-2 pl-5"><li><strong>Fjorder og nordlys</strong> \u2014 de dype bl\u00e5gr\u00f8nne fjordene og nordlysets gr\u00f8nne, lilla og rosa b\u00e5nd inspirerer k\u00f8lige, atmosf\u00e6riske paletter som brukes i norsk reiseliv- og naturbranding.</li><li><strong>Bunad-tekstiler</strong> \u2014 tradisjonelle norske bunader bruker rike r\u00f8de, bl\u00e5 og gr\u00f8nne farger i komplekse m\u00f8nstre som varierer fra region til region.</li><li><strong>Edvard Munch</strong> \u2014 Munchs ekspresjonistiske bruk av intens r\u00f8d, gul og bl\u00e5 viser at sterke fargekontraster kan kommunisere f\u00f8lelser direkte.</li></ul>'
  },
  pt: {
    title: "Cor no design e cultura portuguesa e brasileira",
    html: '<p class="text-mid mb-4">O mundo lus\u00f3fono tem uma rela\u00e7\u00e3o rica com a cor:</p><ul class="text-mid list-disc space-y-2 pl-5"><li><strong>Azulejo portugu\u00eas</strong> \u2014 os azulejos azuis e brancos s\u00e3o uma das express\u00f5es art\u00edsticas mais reconhec\u00edveis de Portugal. Este esquema complementar de alto contraste funciona tanto em fachadas como em interfaces digitais.</li><li><strong>Carnaval brasileiro</strong> \u2014 as cores vibrantes do Carnaval (amarelo, verde, roxo, laranja) representam energia e celebra\u00e7\u00e3o. Marcas brasileiras frequentemente incorporam estas paletas quentes.</li><li><strong>Tradi\u00e7\u00e3o tropical</strong> \u2014 a biodiversidade brasileira inspira paletas de verdes intensos, azuis oce\u00e2nicos e laranjas solares que s\u00e3o comuns no design gr\u00e1fico da regi\u00e3o.</li></ul>'
  },
  ro: {
    title: "Culori \u00een designul \u0219i arta rom\u00e2neasc\u0103",
    html: '<p class="text-mid mb-4">Rom\u00e2nia are o tradi\u021bie cromatic\u0103 bogat\u0103:</p><ul class="text-mid list-disc space-y-2 pl-5"><li><strong>Textile populare</strong> \u2014 ie-urile \u0219i covoarele rom\u00e2ne\u0219ti folosesc ro\u0219u, negru, alb \u0219i auriu \u00een modele geometrice transmise din genera\u021bie \u00een genera\u021bie. Aceste combina\u021bii inspir\u0103 branduri contemporane.</li><li><strong>Br\u00e2ncu\u0219i</strong> \u2014 sculptorul Constantin Br\u00e2ncu\u0219i a lucrat cu o palet\u0103 aproape monocrom\u0103 (bronz, piatr\u0103 alb\u0103, lemn) demonstr\u00e2nd puterea simplicit\u0103\u021bii cromatice.</li><li><strong>Transilvania</strong> \u2014 bisericile fortificate s\u0103se\u0219ti \u0219i casele colorate din Sighi\u0219oara folosesc pasteluri calde (roz, galben pal, verde \u0219alvie) care formeaz\u0103 o palet\u0103 vintage natural\u0103.</li></ul>'
  },
  sv: {
    title: "F\u00e4rg i svensk design och kultur",
    html: '<p class="text-mid mb-4">Sverige har en stark designtradition med distinkt f\u00e4rganv\u00e4ndning:</p><ul class="text-mid list-disc space-y-2 pl-5"><li><strong>Skandinavisk minimalism</strong> \u2014 svenska designm\u00e4rken anv\u00e4nder d\u00e4mpade, ljusa paletter med begr\u00e4nsade accentf\u00e4rger. Vitt, ljust tr\u00e4 och milda pasteller dominerar.</li><li><strong>Dalah\u00e4st</strong> \u2014 den ber\u00f6mda Dalah\u00e4sten med sin djupr\u00f6da f\u00e4rg och folkloristiska m\u00f6nster visar att traditionella f\u00e4rger kan bli kraftfulla varumärkessymboler.</li><li><strong>Nordiskt ljus</strong> \u2014 det l\u00e5ga vintervinklade ljuset och midnattssolen p\u00e5verkar svenska f\u00e4rgval. H\u00f6gkontrastpaletter \u00e4r popul\u00e4ra f\u00f6r l\u00e4sbarhet under m\u00f6rka vintrar.</li></ul>'
  }
};

// Extra FAQ items per locale
const EXTRA_FAQ = {
  cs: [
    { question: "Jak\u00fd typ palety je nejlep\u0161\u00ed pro firemn\u00ed web?", answer: "Monochromatick\u00e9 nebo ton\u00e1ln\u00ed palety funguj\u00ed dob\u0159e pro firemn\u00ed str\u00e1nky, proto\u017ee poskytuj\u00ed jednotnou, klidnou vizu\u00e1ln\u00ed hierarchii. Pou\u017eijte ton\u00e1ln\u00ed paletu k vybudov\u00e1n\u00ed kompletnho syst\u00e9mu pozad\u00ed, textu, ohrani\u010den\u00ed a akcentn\u00edch odst\u00edn\u016f z jedin\u00e9 firemn\u00ed barvy.", answerSchemaText: "Monochromatick\u00e9 nebo ton\u00e1ln\u00ed palety pro jednotnou hierarchii." },
    { question: "Mohu generovan\u00e9 palety pou\u017e\u00edt komer\u010dn\u011b?", answer: "Ano. Generovan\u00e9 barevn\u00e9 palety m\u016f\u017eete pou\u017e\u00edt v jak\u00e9mkoli projektu \u2014 komer\u010dn\u00edm i nekomer\u010dn\u00edm, bez licen\u010dn\u00edch omezen\u00ed.", answerSchemaText: "Ano, bez omezen\u00ed." }
  ],
  da: [
    { question: "Hvilken palettetype er bedst til en virksomhedshjemmeside?", answer: "Monokromatiske eller tonale paletter fungerer godt til virksomhedssider, da de giver et ensartet, roligt visuelt hierarki. Brug den tonale palette til at bygge et komplet system af baggrund, tekst, kanter og accentfarver fra \u00e9n brandfarve.", answerSchemaText: "Monokromatiske eller tonale paletter for ensartet hierarki." },
    { question: "Kan jeg bruge de genererede paletter kommercielt?", answer: "Ja. Du kan bruge de genererede farvepaletter i ethvert projekt \u2014 kommercielt og ikke-kommercielt, uden licensbegr\u00e6nsninger.", answerSchemaText: "Ja, uden begr\u00e6nsninger." }
  ],
  de: [
    { question: "Welcher Palettentyp eignet sich am besten f\u00fcr eine Unternehmenswebsite?", answer: "Monochromatische oder tonale Paletten eignen sich gut f\u00fcr Unternehmensseiten, da sie eine einheitliche, ruhige visuelle Hierarchie bieten. Nutzen Sie die tonale Palette, um ein vollst\u00e4ndiges System aus Hintergrund, Text, Rand und Akzentfarben aus einer einzigen Markenfarbe aufzubauen.", answerSchemaText: "Monochromatische oder tonale Paletten f\u00fcr einheitliche Hierarchie." },
    { question: "Kann ich die HEX-Codes in RGB umrechnen?", answer: "Das Tool zeigt neben dem HEX-Code auch den HSL-Wert jeder Farbe an. F\u00fcr die Umrechnung in RGB k\u00f6nnen Sie die Entwicklertools Ihres Browsers verwenden \u2014 geben Sie den HEX-Code im Farbw\u00e4hler ein und der RGB-Wert wird automatisch angezeigt.", answerSchemaText: "Das Tool zeigt HEX und HSL. Entwicklertools f\u00fcr RGB-Umrechnung nutzen." }
  ],
  el: [
    { question: "\u03a0\u03bf\u03b9\u03bf\u03c2 \u03c4\u03cd\u03c0\u03bf\u03c2 \u03c0\u03b1\u03bb\u03ad\u03c4\u03b1\u03c2 \u03b5\u03af\u03bd\u03b1\u03b9 \u03ba\u03b1\u03bb\u03cd\u03c4\u03b5\u03c1\u03bf\u03c2 \u03b3\u03b9\u03b1 \u03b5\u03c4\u03b1\u03b9\u03c1\u03b9\u03ba\u03cc website;", answer: "\u039c\u03bf\u03bd\u03bf\u03c7\u03c1\u03c9\u03bc\u03b1\u03c4\u03b9\u03ba\u03ad\u03c2 \u03ae \u03c4\u03bf\u03bd\u03b9\u03ba\u03ad\u03c2 \u03c0\u03b1\u03bb\u03ad\u03c4\u03b5\u03c2. \u03a0\u03c1\u03bf\u03c3\u03c6\u03ad\u03c1\u03bf\u03c5\u03bd \u03b5\u03bd\u03b9\u03b1\u03af\u03b1 \u03b9\u03b5\u03c1\u03b1\u03c1\u03c7\u03af\u03b1 \u03ba\u03b1\u03c4\u03ac\u03bb\u03bb\u03b7\u03bb\u03b7 \u03b3\u03b9\u03b1 \u03b5\u03c4\u03b1\u03b9\u03c1\u03b9\u03ba\u03cc branding.", answerSchemaText: "\u039c\u03bf\u03bd\u03bf\u03c7\u03c1\u03c9\u03bc\u03b1\u03c4\u03b9\u03ba\u03ad\u03c2 \u03ae \u03c4\u03bf\u03bd\u03b9\u03ba\u03ad\u03c2." },
    { question: "\u039c\u03c0\u03bf\u03c1\u03ce \u03bd\u03b1 \u03c7\u03c1\u03b7\u03c3\u03b9\u03bc\u03bf\u03c0\u03bf\u03b9\u03ae\u03c3\u03c9 \u03c4\u03b9\u03c2 \u03c0\u03b1\u03bb\u03ad\u03c4\u03b5\u03c2 \u03b5\u03bc\u03c0\u03bf\u03c1\u03b9\u03ba\u03ac;", answer: "\u039d\u03b1\u03b9. \u039c\u03c0\u03bf\u03c1\u03b5\u03af\u03c4\u03b5 \u03bd\u03b1 \u03c7\u03c1\u03b7\u03c3\u03b9\u03bc\u03bf\u03c0\u03bf\u03b9\u03ae\u03c3\u03b5\u03c4\u03b5 \u03c4\u03b9\u03c2 \u03c0\u03b1\u03bb\u03ad\u03c4\u03b5\u03c2 \u03c3\u03b5 \u03bf\u03c0\u03bf\u03b9\u03bf\u03b4\u03ae\u03c0\u03bf\u03c4\u03b5 \u03ad\u03c1\u03b3\u03bf \u2014 \u03b5\u03bc\u03c0\u03bf\u03c1\u03b9\u03ba\u03cc \u03ba\u03b1\u03b9 \u03bc\u03b7, \u03c7\u03c9\u03c1\u03af\u03c2 \u03c0\u03b5\u03c1\u03b9\u03bf\u03c1\u03b9\u03c3\u03bc\u03bf\u03cd\u03c2.", answerSchemaText: "\u039d\u03b1\u03b9, \u03c7\u03c9\u03c1\u03af\u03c2 \u03c0\u03b5\u03c1\u03b9\u03bf\u03c1\u03b9\u03c3\u03bc\u03bf\u03cd\u03c2." }
  ],
  es: [
    { question: "\u00bfQu\u00e9 tipo de paleta es mejor para un sitio corporativo?", answer: "Las paletas monocrom\u00e1ticas o tonales funcionan bien para sitios corporativos porque proporcionan una jerarqu\u00eda visual unificada y tranquila. Usa la paleta tonal para construir un sistema completo de fondos, texto, bordes y acentos a partir de un solo color de marca.", answerSchemaText: "Monocrom\u00e1tica o tonal para jerarqu\u00eda unificada." },
    { question: "\u00bfPuedo usar las paletas generadas en proyectos comerciales?", answer: "S\u00ed. Puedes usar las paletas de colores generadas en cualquier proyecto \u2014 comercial y no comercial, sin restricciones de licencia.", answerSchemaText: "S\u00ed, sin restricciones." },
    { question: "\u00bfC\u00f3mo construyo una paleta de modo oscuro?", answer: "Comienza con la paleta tonal de tu color de marca. Usa los tonos m\u00e1s oscuros (baja luminosidad) como fondos y los m\u00e1s claros como texto. Verifica cada combinaci\u00f3n texto-fondo con un verificador de contraste para cumplir WCAG AA (4,5:1 para texto normal).", answerSchemaText: "Paleta tonal: oscuros para fondo, claros para texto. Verificar contraste." }
  ],
  fi: [
    { question: "Mik\u00e4 palettiTyyppi sopii parhaiten yrityssivustolle?", answer: "Monokromaattiset tai tonaaliset paletit toimivat hyvin yrityksille, koska ne tarjoavat yhten\u00e4isen, rauhallisen visuaalisen hierarkian. K\u00e4yt\u00e4 tonaalista palettia rakentaaksesi t\u00e4ydellisen j\u00e4rjestelm\u00e4n taustav\u00e4reist\u00e4, teksteist\u00e4, reunoista ja korostusv\u00e4reist\u00e4 yhdest\u00e4 br\u00e4ndiv\u00e4rist\u00e4.", answerSchemaText: "Monokromaattiset tai tonaaliset paletit yhten\u00e4iseen hierarkiaan." },
    { question: "Voinko k\u00e4ytt\u00e4\u00e4 paletteja kaupallisesti?", answer: "Kyll\u00e4. Voit k\u00e4ytt\u00e4\u00e4 generoituja v\u00e4ripaletteja miss\u00e4 tahansa projektissa \u2014 kaupallisessa ja ei-kaupallisessa, ilman lisenssirajoituksia.", answerSchemaText: "Kyll\u00e4, ilman rajoituksia." }
  ],
  fr: [
    { question: "Quel type de palette convient le mieux \u00e0 un site corporate ?", answer: "Les palettes monochromatiques ou tonales conviennent aux sites corporate car elles offrent une hi\u00e9rarchie visuelle unifi\u00e9e et apaisante. Utilisez la palette tonale pour construire un syst\u00e8me complet d\u2019arri\u00e8re-plans, de textes, de bordures et d\u2019accents \u00e0 partir d\u2019une seule couleur de marque.", answerSchemaText: "Monochromatique ou tonale pour une hi\u00e9rarchie unifi\u00e9e." },
    { question: "Comment convertir les codes HEX en RGB ?", answer: "L\u2019outil affiche le code HEX et la valeur HSL de chaque couleur. Pour convertir en RGB, utilisez les outils de d\u00e9veloppement de votre navigateur \u2014 entrez le code HEX dans le s\u00e9lecteur de couleur et la valeur RGB s\u2019affiche automatiquement.", answerSchemaText: "L\u2019outil montre HEX et HSL. Utilisez les outils navigateur pour RGB." }
  ],
  hu: [
    { question: "Melyik palettat\u00edpus a legjobb v\u00e1llalati weboldalhoz?", answer: "A monokromatikus vagy ton\u00e1lis paletta j\u00f3l m\u0171k\u00f6dik v\u00e1llalati oldalakhoz, mert egys\u00e9ges, nyugodt vizu\u00e1lis hierarchi\u00e1t biztos\u00edt. Haszn\u00e1lja a ton\u00e1lis palett\u00e1t h\u00e1tt\u00e9r, sz\u00f6veg, szeg\u00e9ly \u00e9s kiemelő sz\u00ednek teljes rendszer\u00e9nek fel\u00e9p\u00edt\u00e9s\u00e9hez egyetlen m\u00e1rkasz\u00ednb\u0151l.", answerSchemaText: "Monokromatikus vagy ton\u00e1lis paletta egys\u00e9ges hierarchi\u00e1hoz." },
    { question: "Haszn\u00e1lhatom a palett\u00e1kat kereskedelmi c\u00e9lra?", answer: "Igen. A gener\u00e1lt sz\u00ednpalett\u00e1kat b\u00e1rmely projektben haszn\u00e1lhatja \u2014 kereskedelmi \u00e9s nem kereskedelmi c\u00e9lra, licenckorl\u00e1toz\u00e1s n\u00e9lk\u00fcl.", answerSchemaText: "Igen, korl\u00e1toz\u00e1s n\u00e9lk\u00fcl." }
  ],
  it: [
    { question: "Quale tipo di palette è migliore per un sito aziendale?", answer: "Le palette monocromatiche o tonali funzionano bene per siti aziendali perch\u00e9 offrono una gerarchia visiva unificata e serena. Usa la palette tonale per costruire un sistema completo di sfondi, testi, bordi e accenti da un unico colore del brand.", answerSchemaText: "Monocromatica o tonale per gerarchia unificata." },
    { question: "Come costruire una palette per la modalit\u00e0 scura?", answer: "Inizia con la palette tonale del colore del tuo brand. Usa le tonalit\u00e0 pi\u00f9 scure come sfondi e le pi\u00f9 chiare come testo. Verifica ogni combinazione testo-sfondo con un verificatore di contrasto per garantire la conformit\u00e0 WCAG AA (4,5:1 per testo normale).", answerSchemaText: "Palette tonale: scuri per sfondo, chiari per testo. Verificare contrasto." }
  ],
  nl: [
    { question: "Welk palettetype is het beste voor een bedrijfswebsite?", answer: "Monochrome of tonale paletten werken goed voor bedrijfssites omdat ze een uniforme, rustige visuele hi\u00ebrarchie bieden. Gebruik het tonale palet om een compleet systeem van achtergrond, tekst, rand en accentkleuren op te bouwen vanuit \u00e9\u00e9n merkkleur.", answerSchemaText: "Monochroom of tonaal voor uniforme hi\u00ebrarchie." },
    { question: "Kan ik de gegenereerde paletten commercieel gebruiken?", answer: "Ja. U kunt de gegenereerde kleurenpaletten in elk project gebruiken \u2014 commercieel en niet-commercieel, zonder licentiebeperkingen.", answerSchemaText: "Ja, zonder beperkingen." }
  ],
  no: [
    { question: "Hvilken palettetype passer best for en bedriftsnettside?", answer: "Monokromatiske eller tonale paletter fungerer godt for bedriftssider fordi de gir et enhetlig, rolig visuelt hierarki. Bruk den tonale paletten til \u00e5 bygge et komplett system av bakgrunn, tekst, kanter og aksentfarger fra \u00e9n merkefarge.", answerSchemaText: "Monokromatisk eller tonal for enhetlig hierarki." },
    { question: "Kan jeg bruke de genererte palettene kommersielt?", answer: "Ja. Du kan bruke de genererte fargepalettene i et hvilket som helst prosjekt \u2014 kommersielt og ikke-kommersielt, uten lisensbegrensninger.", answerSchemaText: "Ja, uten begrensninger." }
  ],
  pt: [
    { question: "Qual tipo de paleta \u00e9 melhor para um site corporativo?", answer: "Paletas monocrom\u00e1ticas ou tonais funcionam bem para sites corporativos porque oferecem uma hierarquia visual unificada e serena. Use a paleta tonal para construir um sistema completo de fundos, textos, bordas e acentos a partir de uma \u00fanica cor da marca.", answerSchemaText: "Monocrom\u00e1tica ou tonal para hierarquia unificada." },
    { question: "Posso usar as paletas geradas em projetos comerciais?", answer: "Sim. Pode usar as paletas de cores geradas em qualquer projeto \u2014 comercial e n\u00e3o comercial, sem restri\u00e7\u00f5es de licen\u00e7a.", answerSchemaText: "Sim, sem restri\u00e7\u00f5es." }
  ],
  ro: [
    { question: "Ce tip de palet\u0103 este cel mai bun pentru un site corporativ?", answer: "Paletele monocromatice sau tonale func\u021bioneaz\u0103 bine pentru site-uri corporative deoarece ofer\u0103 o ierarhie vizual\u0103 unificat\u0103 \u0219i calm\u0103. Folosi\u021bi paleta tonal\u0103 pentru a construi un sistem complet de fundaluri, texte, borduri \u0219i accente dintr-o singur\u0103 culoare de brand.", answerSchemaText: "Monocromatic\u0103 sau tonal\u0103 pentru ierarhie unificat\u0103." },
    { question: "Pot folosi paletele generate comercial?", answer: "Da. Pute\u021bi folosi paletele de culori generate \u00een orice proiect \u2014 comercial \u0219i necomercial, f\u0103r\u0103 restric\u021bii de licen\u021b\u0103.", answerSchemaText: "Da, f\u0103r\u0103 restric\u021bii." }
  ],
  sv: [
    { question: "Vilken paletttyp \u00e4r b\u00e4st f\u00f6r en f\u00f6retagswebbplats?", answer: "Monokromatiska eller tonala paletter fungerar bra f\u00f6r f\u00f6retagssajter eftersom de ger en enhetlig, lugn visuell hierarki. Anv\u00e4nd den tonala paletten f\u00f6r att bygga ett komplett system av bakgrund, text, ramar och accentf\u00e4rger fr\u00e5n en enda varum\u00e4rkesf\u00e4rg.", answerSchemaText: "Monokromatisk eller tonal f\u00f6r enhetlig hierarki." },
    { question: "Kan jag anv\u00e4nda de genererade paletterna kommersiellt?", answer: "Ja. Du kan anv\u00e4nda de genererade f\u00e4rgpaletterna i vilket projekt som helst \u2014 kommersiellt och icke-kommersiellt, utan licensbegr\u00e4nsningar.", answerSchemaText: "Ja, utan begr\u00e4nsningar." }
  ]
};

let updated = 0;

for (const locale of LOCALES) {
  const filePath = `data/${locale}/tools/color-palette.json`;
  try {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    const cb = data.contentBlocks;

    // 1. Add cultural section after the HSL demo section
    const demoIdx = cb.findIndex(b => b.type === 'sectionDemo');
    const hasCultural = cb.some(b => b.type === 'sectionInfo' && b.title === CULTURAL[locale].title);

    if (!hasCultural && demoIdx !== -1) {
      cb.splice(demoIdx + 1, 0,
        { type: "gap", variant: "line" },
        { type: "sectionInfo", title: CULTURAL[locale].title, html: CULTURAL[locale].html }
      );
      console.log(`  + Cultural section added`);
    } else if (hasCultural) {
      console.log(`  ~ Cultural section exists`);
    }

    // 2. Add extra FAQ items
    const faqBlock = cb.find(b => b.type === 'faq');
    if (faqBlock && EXTRA_FAQ[locale]) {
      const before = faqBlock.items.length;
      for (const item of EXTRA_FAQ[locale]) {
        const exists = faqBlock.items.some(e => e.question.slice(0, 25) === item.question.slice(0, 25));
        if (!exists) faqBlock.items.push(item);
      }
      console.log(`  + FAQ: ${before} \u2192 ${faqBlock.items.length}`);
    }

    fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n', 'utf8');
    JSON.parse(fs.readFileSync(filePath, 'utf8'));
    console.log(`OK   ${locale}`);
    updated++;
  } catch (e) {
    console.error(`ERR  ${locale}: ${e.message.slice(0, 80)}`);
  }
}

console.log(`\nDone: ${updated} updated`);
