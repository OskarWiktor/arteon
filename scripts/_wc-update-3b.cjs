// Word counter update: DA, NO, FI, EL
const fs = require('fs');
const path = require('path');

const L = {
  da: {
    metaTitle: 'Ordtaeller med Flesch-Kincaid laesbarhed & tekstvaerktojer',
    metaDesc: 'Gratis ord-, tegn- og stavelsest\u00e6ller med Flesch-Kincaid score, l\u00e6setid, taletid og 10 formateringsv\u00e6rkt\u00f8jer. Uden registrering.',
    heroTitle: 'T\u00e6l ord, tegn og l\u00e6sbarhed \u2013 Flesch-Kincaid, l\u00e6setid og tekstv\u00e6rkt\u00f8jer',
    heroDesc: 'Inds\u00e6t din tekst og v\u00e6rkt\u00f8jet t\u00e6ller ord, tegn, stavelser, s\u00e6tninger, afsnit, unikke ord, l\u00e6setid, taletid og beregner Flesch-Kincaid l\u00e6sbarhedsscore.',
    schemaAltAdd: ['Flesch-Kincaid l\u00e6sbarhedskontrol', 'Stavelsest\u00e6ller online', 'Taletidskalkulator', 'L\u00e6sbarheds\u2010v\u00e6rkt\u00f8j'],
    featAdd: ['Estimeret taletid', 'Stavelsest\u00e6lling', 'Flesch-Kincaid l\u00e6sbarhedsscore', 'Sprogspecifikke l\u00e6sbarheds formler (16 sprog)'],
    howToStep2: 'I venstre panel ser du 11 metrikker: ord, tegn med og uden mellemrum, s\u00e6tninger, afsnit, unikke ord, ordl\u00e6ngde, l\u00e6setid, taletid, stavelser og Flesch-Kincaid score.',
    sectionBasicHtml: '<p class="text-mid">Dette v\u00e6rkt\u00f8j kombinerer en ord- og tegnt\u00e6ller med Flesch-Kincaid l\u00e6sbarheds\u00adanalyse og tekstformateringsv\u00e6rkt\u00f8jer. Inds\u00e6t din tekst for at se ord, tegn, stavelser, s\u00e6tninger, afsnit, unikke ord, l\u00e6setid, taletid og en farvekodet l\u00e6sbarhedsscore.</p><p class="text-mid mt-3"><strong>Flesch-Kincaid l\u00e6sbarhedsscore</strong> (0\u2013100) viser, hvor let teksten er at l\u00e6se. Score over 70 betyder letl\u00e6selig tekst, under 30 akademisk niveau. V\u00e6rkt\u00f8jet tilpasser formlen efter tekstens sprog.</p><p class="text-mid mt-3">Under tekstfeltet finder du 10 v\u00e6rkt\u00f8jer: bogstavkonvertering, fjernelse af mellemrum, tomme linjer, duplikater og sortering. Alt k\u00f8rer lokalt i browseren.</p>',
    metricsTitle: '11 tekstmetrikker \u2013 hvad t\u00e6lleren m\u00e5ler',
    metricsDesc: 'T\u00e6lleren analyserer din tekst med elleve indikatorer:',
    speakingTitle: 'Taletid', speakingDesc: 'Estimeret taletid ved 130 ord per minut. Til pr\u00e6sentationer og taler.',
    syllablesTitle: 'Stavelser', syllablesDesc: 'Total stavelser med sprogspecifikke heuristikker.',
    readabilityTitle: 'L\u00e6sbarhed (Flesch-Kincaid)', readabilityDesc: 'Score 0\u2013100. Over 70 = let, 50\u201370 = middel, under 30 = akademisk. Farvekodet.',
    specialTitle: 'Hvad g\u00f8r denne ordt\u00e6ller speciel?', specialMetrics: '11 metrikker + l\u00e6sbarhedsscore', specialMetricsDesc: 'Ord, tegn, stavelser, s\u00e6tninger, afsnit, unikke ord, l\u00e6setid, taletid og Flesch-Kincaid.',
    faqNew: [
      { question: 'Hvad er Flesch-Kincaid score?', answer: 'Flesch Reading Ease (0\u2013100) viser l\u00e6sbarhed. 90\u2013100 = meget let, 70\u201389 = let, 50\u201369 = middel, 30\u201349 = sv\u00e6r, 0\u201329 = meget sv\u00e6r.', answerSchemaText: 'Flesch Reading Ease (0\u2013100).' },
      { question: 'Hvordan beregnes taletiden?', answer: 'Antal ord deles med 130 \u2013 gennemsnitlig talehastighed.', answerSchemaText: '130 ord per minut.' },
      { question: 'Hvor pr\u00e6cis er stavelsest\u00e6lleren?', answer: 'V\u00e6rkt\u00f8jet bruger sprogspecifikke heuristikker der genkender danske diftonger og lydm\u00f8nstre.', answerSchemaText: 'Sprogspecifikke heuristikker.' }
    ]
  },
  no: {
    metaTitle: 'Ordteller med Flesch-Kincaid lesbarhet & tekstverkty',
    metaDesc: 'Gratis ord-, tegn- og stavelsesteller med Flesch-Kincaid poeng, lesetid, taletid og 10 formateringsverkt\u00f8y. Uten registrering.',
    heroTitle: 'Tell ord, tegn og lesbarhet \u2013 Flesch-Kincaid, lesetid og tekstverkt\u00f8y',
    heroDesc: 'Lim inn teksten din og verkt\u00f8yet teller ord, tegn, stavelser, setninger, avsnitt, unike ord, lesetid, taletid og beregner Flesch-Kincaid lesbarhetspoeng.',
    schemaAltAdd: ['Flesch-Kincaid lesbarhetskontroll', 'Stavelsesteller online', 'Taletidskalkulator', 'Lesbarhetsverkt\u00f8y'],
    featAdd: ['Estimert taletid', 'Stavelsestelling', 'Flesch-Kincaid lesbarhetspoeng', 'Spr\u00e5kspesifikke lesbarhetsformler (16 spr\u00e5k)'],
    howToStep2: 'I venstre panel ser du 11 m\u00e5linger: ord, tegn med og uten mellomrom, setninger, avsnitt, unike ord, ordlengde, lesetid, taletid, stavelser og Flesch-Kincaid poeng.',
    sectionBasicHtml: '<p class="text-mid">Dette verkt\u00f8yet kombinerer en ord- og tegnteller med Flesch-Kincaid lesbarhetsanalyse og tekstformateringsverkt\u00f8y. Lim inn teksten for \u00e5 se ord, tegn, stavelser, setninger, avsnitt, unike ord, lesetid, taletid og en fargekodet lesbarhetspoeng.</p><p class="text-mid mt-3"><strong>Flesch-Kincaid lesbarhetspoeng</strong> (0\u2013100) viser hvor lett teksten er \u00e5 lese. Poeng over 70 betyr lettlest tekst, under 30 akademisk niv\u00e5. Norge har gjennom <strong>Forskrift om universell utforming av IKT</strong> strengere tilgjengelighetskrav enn EU \u2013 god lesbarhet er en del av universell utforming.</p><p class="text-mid mt-3">Under tekstfeltet finner du 10 verkt\u00f8y: bokstavkonvertering, fjerning av mellomrom, tomme linjer, duplikater og sortering. Alt kj\u00f8res lokalt i nettleseren.</p>',
    metricsTitle: '11 tekstm\u00e5linger \u2013 hva telleren m\u00e5ler',
    metricsDesc: 'Telleren analyserer teksten din med elleve indikatorer:',
    speakingTitle: 'Taletid', speakingDesc: 'Estimert taletid ved 130 ord per minutt. For presentasjoner og taler.',
    syllablesTitle: 'Stavelser', syllablesDesc: 'Totalt stavelser med spr\u00e5kspesifikke heuristikker.',
    readabilityTitle: 'Lesbarhet (Flesch-Kincaid)', readabilityDesc: 'Poeng 0\u2013100. Over 70 = lett, 50\u201370 = middels, under 30 = akademisk. Fargekodet.',
    specialTitle: 'Hva gj\u00f8r denne ordtelleren spesiell?', specialMetrics: '11 m\u00e5linger + lesbarhetspoeng', specialMetricsDesc: 'Ord, tegn, stavelser, setninger, avsnitt, unike ord, lesetid, taletid og Flesch-Kincaid.',
    faqNew: [
      { question: 'Hva er Flesch-Kincaid poeng?', answer: 'Flesch Reading Ease (0\u2013100) viser lesbarhet. 90\u2013100 = veldig lett, 70\u201389 = lett, 50\u201369 = middels, 30\u201349 = vanskelig, 0\u201329 = veldig vanskelig.', answerSchemaText: 'Flesch Reading Ease (0\u2013100).' },
      { question: 'Hvordan beregnes taletiden?', answer: 'Antall ord deles med 130 \u2013 gjennomsnittlig talehastighet.', answerSchemaText: '130 ord per minutt.' },
      { question: 'Hvor n\u00f8yaktig er stavelsestalleren?', answer: 'Verkt\u00f8yet bruker spr\u00e5kspesifikke heuristikker som gjenkjenner norske diftonger og lydm\u00f8nstre.', answerSchemaText: 'Spr\u00e5kspesifikke heuristikker.' }
    ]
  },
  fi: {
    metaTitle: 'Sanalaskuri Flesch-Kincaid-luettavuudella ja tekstity\u00f6kaluilla',
    metaDesc: 'Ilmainen sana-, merkki- ja tavulaskuri Flesch-Kincaid-pisteill\u00e4, lukuajalla, puheajalla ja 10 muotoiluty\u00f6kalulla. Ilman rekister\u00f6itymist\u00e4.',
    heroTitle: 'Laske sanat, merkit ja luettavuus \u2013 Flesch-Kincaid, lukuaika ja tekstity\u00f6kalut',
    heroDesc: 'Liit\u00e4 teksti ja ty\u00f6kalu laskee sanat, merkit, tavut, lauseet, kappaleet, uniikit sanat, lukuajan, puheajan ja Flesch-Kincaid-luettavuuspistem\u00e4\u00e4r\u00e4n.',
    schemaAltAdd: ['Flesch-Kincaid luettavuustarkistus', 'Tavulaskuri', 'Puheaikalaskin', 'Luettavuusty\u00f6kalu'],
    featAdd: ['Arvioitu puheaika', 'Tavulaskenta', 'Flesch-Kincaid-luettavuuspisteet', 'Kielikohtaiset luettavuuskaavat (16 kielt\u00e4)'],
    howToStep2: 'Vasemmassa paneelissa n\u00e4et 11 mittaria: sanat, merkit v\u00e4lily\u00f6nneill\u00e4 ja ilman, lauseet, kappaleet, uniikit sanat, sanan pituus, lukuaika, puheaika, tavut ja Flesch-Kincaid-pisteet.',
    sectionBasicHtml: '<p class="text-mid">T\u00e4m\u00e4 ty\u00f6kalu yhdist\u00e4\u00e4 sana- ja merkkilaskurin Flesch-Kincaid-luettavuusanalyysiin ja tekstin muotoiluty\u00f6kaluihin. Liit\u00e4 teksti n\u00e4hd\u00e4ksesi sanat, merkit, tavut, lauseet, kappaleet, uniikit sanat, lukuajan, puheajan ja v\u00e4rikoodatun luettavuuspistem\u00e4\u00e4r\u00e4n.</p><p class="text-mid mt-3"><strong>Flesch-Kincaid-luettavuuspistem\u00e4\u00e4r\u00e4</strong> (0\u2013100) kertoo, kuinka helppoa teksti on lukea. Yli 70 tarkoittaa helppoa, alle 30 akateemista tasoa. Suomen <strong>laki digitaalisten palvelujen tarjoamisesta (306/2019)</strong> edellytt\u00e4\u00e4 saavutettavuutta julkisilta palveluilta \u2013 hyv\u00e4 luettavuus on osa saavutettavuutta.</p><p class="text-mid mt-3">Tekstikent\u00e4n alla on 10 ty\u00f6kalua: kirjainkoon muunnos, v\u00e4lily\u00f6ntien, tyhjien rivien, kaksoiskappalerivien poisto ja lajittelu. Kaikki k\u00e4sittely tapahtuu paikallisesti selaimessa.</p>',
    metricsTitle: '11 tekstimittaria \u2013 mit\u00e4 laskuri mittaa',
    metricsDesc: 'Laskuri analysoi tekstin yhdell\u00e4toista mittarilla:',
    speakingTitle: 'Puheaika', speakingDesc: 'Arvioitu puheaika 130 sanalla minuutissa. Esityksiin ja puheisiin.',
    syllablesTitle: 'Tavut', syllablesDesc: 'Tavujen kokonaism\u00e4\u00e4r\u00e4 kielikohtaisilla heuristiikoilla.',
    readabilityTitle: 'Luettavuus (Flesch-Kincaid)', readabilityDesc: 'Pisteet 0\u2013100. Yli 70 = helppo, 50\u201370 = keskitaso, alle 30 = akateeminen. V\u00e4rikoodattu.',
    specialTitle: 'Mik\u00e4 tekee t\u00e4st\u00e4 sanalaskurista erityisen?', specialMetrics: '11 mittaria + luettavuuspisteet', specialMetricsDesc: 'Sanat, merkit, tavut, lauseet, kappaleet, uniikit sanat, lukuaika, puheaika ja Flesch-Kincaid.',
    faqNew: [
      { question: 'Mik\u00e4 on Flesch-Kincaid-pistem\u00e4\u00e4r\u00e4?', answer: 'Flesch Reading Ease (0\u2013100) kertoo luettavuuden. 90\u2013100 = eritt\u00e4in helppo, 70\u201389 = helppo, 50\u201369 = keskitaso, 30\u201349 = vaikea, 0\u201329 = eritt\u00e4in vaikea.', answerSchemaText: 'Flesch Reading Ease (0\u2013100).' },
      { question: 'Miten puheaika lasketaan?', answer: 'Sanojen m\u00e4\u00e4r\u00e4 jaetaan 130:ll\u00e4 \u2013 keskivertopuhenopeus esityksiss\u00e4.', answerSchemaText: '130 sanaa minuutissa.' },
      { question: 'Kuinka tarkka tavulaskuri on?', answer: 'Ty\u00f6kalu k\u00e4ytt\u00e4\u00e4 kielikohtaisia heuristiikkoja jotka tunnistavat suomen kielen diftongit ja vokaalis\u00e4\u00e4nn\u00f6t.', answerSchemaText: 'Kielikohtaiset heuristiikat.' }
    ]
  },
  el: {
    metaTitle: '\u039c\u03b5\u03c4\u03c1\u03b7\u03c4\u03ae\u03c2 \u03bb\u03ad\u03be\u03b5\u03c9\u03bd \u03bc\u03b5 \u03b1\u03bd\u03b1\u03b3\u03bd\u03c9\u03c3\u03b9\u03bc\u03cc\u03c4\u03b7\u03c4\u03b1 Flesch-Kincaid & \u03b5\u03c1\u03b3\u03b1\u03bb\u03b5\u03af\u03b1 \u03ba\u03b5\u03b9\u03bc\u03ad\u03bd\u03bf\u03c5',
    metaDesc: '\u0394\u03c9\u03c1\u03b5\u03ac\u03bd \u03bc\u03b5\u03c4\u03c1\u03b7\u03c4\u03ae\u03c2 \u03bb\u03ad\u03be\u03b5\u03c9\u03bd, \u03c7\u03b1\u03c1\u03b1\u03ba\u03c4\u03ae\u03c1\u03c9\u03bd & \u03c3\u03c5\u03bb\u03bb\u03b1\u03b2\u03ce\u03bd \u03bc\u03b5 \u03b2\u03b1\u03b8\u03bc\u03bf\u03bb\u03bf\u03b3\u03af\u03b1 Flesch-Kincaid, \u03c7\u03c1\u03cc\u03bd\u03bf \u03b1\u03bd\u03ac\u03b3\u03bd\u03c9\u03c3\u03b7\u03c2, \u03c7\u03c1\u03cc\u03bd\u03bf \u03bf\u03bc\u03b9\u03bb\u03af\u03b1\u03c2 & 10 \u03b5\u03c1\u03b3\u03b1\u03bb\u03b5\u03af\u03b1 \u03bc\u03bf\u03c1\u03c6\u03bf\u03c0\u03bf\u03af\u03b7\u03c3\u03b7\u03c2. \u03a7\u03c9\u03c1\u03af\u03c2 \u03b5\u03b3\u03b3\u03c1\u03b1\u03c6\u03ae.',
    heroTitle: '\u039c\u03b5\u03c4\u03c1\u03ae\u03c3\u03c4\u03b5 \u03bb\u03ad\u03be\u03b5\u03b9\u03c2, \u03c7\u03b1\u03c1\u03b1\u03ba\u03c4\u03ae\u03c1\u03b5\u03c2 & \u03b1\u03bd\u03b1\u03b3\u03bd\u03c9\u03c3\u03b9\u03bc\u03cc\u03c4\u03b7\u03c4\u03b1 \u2013 Flesch-Kincaid, \u03c7\u03c1\u03cc\u03bd\u03bf\u03c2 \u03b1\u03bd\u03ac\u03b3\u03bd\u03c9\u03c3\u03b7\u03c2 & \u03b5\u03c1\u03b3\u03b1\u03bb\u03b5\u03af\u03b1 \u03ba\u03b5\u03b9\u03bc\u03ad\u03bd\u03bf\u03c5',
    heroDesc: '\u0395\u03c0\u03b9\u03ba\u03bf\u03bb\u03bb\u03ae\u03c3\u03c4\u03b5 \u03c4\u03bf \u03ba\u03b5\u03af\u03bc\u03b5\u03bd\u03cc \u03c3\u03b1\u03c2 \u03ba\u03b1\u03b9 \u03c4\u03bf \u03b5\u03c1\u03b3\u03b1\u03bb\u03b5\u03af\u03bf \u03b8\u03b1 \u03bc\u03b5\u03c4\u03c1\u03ae\u03c3\u03b5\u03b9 \u03bb\u03ad\u03be\u03b5\u03b9\u03c2, \u03c7\u03b1\u03c1\u03b1\u03ba\u03c4\u03ae\u03c1\u03b5\u03c2, \u03c3\u03c5\u03bb\u03bb\u03b1\u03b2\u03ad\u03c2, \u03c0\u03c1\u03bf\u03c4\u03ac\u03c3\u03b5\u03b9\u03c2, \u03c0\u03b1\u03c1\u03b1\u03b3\u03c1\u03ac\u03c6\u03bf\u03c5\u03c2, \u03bc\u03bf\u03bd\u03b1\u03b4\u03b9\u03ba\u03ad\u03c2 \u03bb\u03ad\u03be\u03b5\u03b9\u03c2, \u03c7\u03c1\u03cc\u03bd\u03bf \u03b1\u03bd\u03ac\u03b3\u03bd\u03c9\u03c3\u03b7\u03c2, \u03c7\u03c1\u03cc\u03bd\u03bf \u03bf\u03bc\u03b9\u03bb\u03af\u03b1\u03c2 \u03ba\u03b1\u03b9 \u03b2\u03b1\u03b8\u03bc\u03bf\u03bb\u03bf\u03b3\u03af\u03b1 Flesch-Kincaid.',
    schemaAltAdd: ['\u0388\u03bb\u03b5\u03b3\u03c7\u03bf\u03c2 \u03b1\u03bd\u03b1\u03b3\u03bd\u03c9\u03c3\u03b9\u03bc\u03cc\u03c4\u03b7\u03c4\u03b1\u03c2 Flesch-Kincaid', '\u039c\u03b5\u03c4\u03c1\u03b7\u03c4\u03ae\u03c2 \u03c3\u03c5\u03bb\u03bb\u03b1\u03b2\u03ce\u03bd online', '\u03a5\u03c0\u03bf\u03bb\u03bf\u03b3\u03b9\u03c3\u03c4\u03ae\u03c2 \u03c7\u03c1\u03cc\u03bd\u03bf\u03c5 \u03bf\u03bc\u03b9\u03bb\u03af\u03b1\u03c2', '\u0395\u03c1\u03b3\u03b1\u03bb\u03b5\u03af\u03bf \u03b1\u03bd\u03b1\u03b3\u03bd\u03c9\u03c3\u03b9\u03bc\u03cc\u03c4\u03b7\u03c4\u03b1\u03c2'],
    featAdd: ['\u0395\u03ba\u03c4\u03b9\u03bc\u03ce\u03bc\u03b5\u03bd\u03bf\u03c2 \u03c7\u03c1\u03cc\u03bd\u03bf\u03c2 \u03bf\u03bc\u03b9\u03bb\u03af\u03b1\u03c2', '\u039c\u03ad\u03c4\u03c1\u03b7\u03c3\u03b7 \u03c3\u03c5\u03bb\u03bb\u03b1\u03b2\u03ce\u03bd', '\u0392\u03b1\u03b8\u03bc\u03bf\u03bb\u03bf\u03b3\u03af\u03b1 \u03b1\u03bd\u03b1\u03b3\u03bd\u03c9\u03c3\u03b9\u03bc\u03cc\u03c4\u03b7\u03c4\u03b1\u03c2 Flesch-Kincaid', '\u0393\u03bb\u03c9\u03c3\u03c3\u03b9\u03ba\u03ac \u03c0\u03c1\u03bf\u03c3\u03b1\u03c1\u03bc\u03bf\u03c3\u03bc\u03ad\u03bd\u03bf\u03b9 \u03c4\u03cd\u03c0\u03bf\u03b9 (16 \u03b3\u03bb\u03ce\u03c3\u03c3\u03b5\u03c2)'],
    howToStep2: '\u03a3\u03c4\u03bf \u03b1\u03c1\u03b9\u03c3\u03c4\u03b5\u03c1\u03cc \u03c0\u03ac\u03bd\u03b5\u03bb \u03b8\u03b1 \u03b4\u03b5\u03af\u03c4\u03b5 11 \u03bc\u03b5\u03c4\u03c1\u03b9\u03ba\u03ad\u03c2: \u03bb\u03ad\u03be\u03b5\u03b9\u03c2, \u03c7\u03b1\u03c1\u03b1\u03ba\u03c4\u03ae\u03c1\u03b5\u03c2 \u03bc\u03b5/\u03c7\u03c9\u03c1\u03af\u03c2 \u03ba\u03b5\u03bd\u03ac, \u03c0\u03c1\u03bf\u03c4\u03ac\u03c3\u03b5\u03b9\u03c2, \u03c0\u03b1\u03c1\u03b1\u03b3\u03c1\u03ac\u03c6\u03bf\u03c5\u03c2, \u03bc\u03bf\u03bd\u03b1\u03b4\u03b9\u03ba\u03ad\u03c2 \u03bb\u03ad\u03be\u03b5\u03b9\u03c2, \u03bc\u03ad\u03c3\u03bf \u03bc\u03ae\u03ba\u03bf\u03c2 \u03bb\u03ad\u03be\u03b7\u03c2, \u03c7\u03c1\u03cc\u03bd\u03bf \u03b1\u03bd\u03ac\u03b3\u03bd\u03c9\u03c3\u03b7\u03c2, \u03c7\u03c1\u03cc\u03bd\u03bf \u03bf\u03bc\u03b9\u03bb\u03af\u03b1\u03c2, \u03c3\u03c5\u03bb\u03bb\u03b1\u03b2\u03ad\u03c2 \u03ba\u03b1\u03b9 \u03b2\u03b1\u03b8\u03bc\u03bf\u03bb\u03bf\u03b3\u03af\u03b1 Flesch-Kincaid.',
    sectionBasicHtml: '<p class="text-mid">\u0391\u03c5\u03c4\u03cc \u03c4\u03bf \u03b5\u03c1\u03b3\u03b1\u03bb\u03b5\u03af\u03bf \u03c3\u03c5\u03bd\u03b4\u03c5\u03ac\u03b6\u03b5\u03b9 \u03bc\u03b5\u03c4\u03c1\u03b7\u03c4\u03ae \u03bb\u03ad\u03be\u03b5\u03c9\u03bd \u03ba\u03b1\u03b9 \u03c7\u03b1\u03c1\u03b1\u03ba\u03c4\u03ae\u03c1\u03c9\u03bd \u03bc\u03b5 \u03b1\u03bd\u03ac\u03bb\u03c5\u03c3\u03b7 \u03b1\u03bd\u03b1\u03b3\u03bd\u03c9\u03c3\u03b9\u03bc\u03cc\u03c4\u03b7\u03c4\u03b1\u03c2 Flesch-Kincaid \u03ba\u03b1\u03b9 \u03b5\u03c1\u03b3\u03b1\u03bb\u03b5\u03af\u03b1 \u03bc\u03bf\u03c1\u03c6\u03bf\u03c0\u03bf\u03af\u03b7\u03c3\u03b7\u03c2 \u03ba\u03b5\u03b9\u03bc\u03ad\u03bd\u03bf\u03c5. \u0395\u03c0\u03b9\u03ba\u03bf\u03bb\u03bb\u03ae\u03c3\u03c4\u03b5 \u03c4\u03bf \u03ba\u03b5\u03af\u03bc\u03b5\u03bd\u03cc \u03c3\u03b1\u03c2 \u03b3\u03b9\u03b1 \u03bd\u03b1 \u03b4\u03b5\u03af\u03c4\u03b5 \u03bb\u03ad\u03be\u03b5\u03b9\u03c2, \u03c7\u03b1\u03c1\u03b1\u03ba\u03c4\u03ae\u03c1\u03b5\u03c2, \u03c3\u03c5\u03bb\u03bb\u03b1\u03b2\u03ad\u03c2, \u03c0\u03c1\u03bf\u03c4\u03ac\u03c3\u03b5\u03b9\u03c2, \u03c0\u03b1\u03c1\u03b1\u03b3\u03c1\u03ac\u03c6\u03bf\u03c5\u03c2, \u03bc\u03bf\u03bd\u03b1\u03b4\u03b9\u03ba\u03ad\u03c2 \u03bb\u03ad\u03be\u03b5\u03b9\u03c2, \u03c7\u03c1\u03cc\u03bd\u03bf \u03b1\u03bd\u03ac\u03b3\u03bd\u03c9\u03c3\u03b7\u03c2, \u03c7\u03c1\u03cc\u03bd\u03bf \u03bf\u03bc\u03b9\u03bb\u03af\u03b1\u03c2 \u03ba\u03b1\u03b9 \u03c7\u03c1\u03c9\u03bc\u03b1\u03c4\u03b9\u03ba\u03ae \u03b2\u03b1\u03b8\u03bc\u03bf\u03bb\u03bf\u03b3\u03af\u03b1 \u03b1\u03bd\u03b1\u03b3\u03bd\u03c9\u03c3\u03b9\u03bc\u03cc\u03c4\u03b7\u03c4\u03b1\u03c2.</p><p class="text-mid mt-3">\u0397 <strong>\u03b2\u03b1\u03b8\u03bc\u03bf\u03bb\u03bf\u03b3\u03af\u03b1 Flesch-Kincaid</strong> (0\u2013100) \u03b4\u03b5\u03af\u03c7\u03bd\u03b5\u03b9 \u03c0\u03cc\u03c3\u03bf \u03b5\u03cd\u03ba\u03bf\u03bb\u03bf \u03b5\u03af\u03bd\u03b1\u03b9 \u03bd\u03b1 \u03b4\u03b9\u03b1\u03b2\u03b1\u03c3\u03c4\u03b5\u03af \u03c4\u03bf \u03ba\u03b5\u03af\u03bc\u03b5\u03bd\u03bf. \u03a0\u03ac\u03bd\u03c9 \u03b1\u03c0\u03cc 70 = \u03b5\u03cd\u03ba\u03bf\u03bb\u03bf, \u03ba\u03ac\u03c4\u03c9 \u03b1\u03c0\u03cc 30 = \u03b1\u03ba\u03b1\u03b4\u03b7\u03bc\u03b1\u03ca\u03ba\u03cc. \u0393\u03b9\u03b1 \u03c4\u03b1 \u03b5\u03bb\u03bb\u03b7\u03bd\u03b9\u03ba\u03ac, \u03c4\u03bf \u03b5\u03c1\u03b3\u03b1\u03bb\u03b5\u03af\u03bf \u03b1\u03bd\u03b1\u03b3\u03bd\u03c9\u03c1\u03af\u03b6\u03b5\u03b9 \u03b5\u03bb\u03bb\u03b7\u03bd\u03b9\u03ba\u03bf\u03cd\u03c2 \u03b4\u03b9\u03c6\u03b8\u03cc\u03b3\u03b3\u03bf\u03c5\u03c2 (\u03b1\u03b9, \u03b5\u03b9, \u03bf\u03b9, \u03bf\u03c5, \u03b1\u03c5, \u03b5\u03c5) \u03b3\u03b9\u03b1 \u03c3\u03c9\u03c3\u03c4\u03ae \u03bc\u03ad\u03c4\u03c1\u03b7\u03c3\u03b7 \u03c3\u03c5\u03bb\u03bb\u03b1\u03b2\u03ce\u03bd.</p><p class="text-mid mt-3">\u039a\u03ac\u03c4\u03c9 \u03b1\u03c0\u03cc \u03c4\u03bf \u03c0\u03b5\u03b4\u03af\u03bf \u03ba\u03b5\u03b9\u03bc\u03ad\u03bd\u03bf\u03c5 \u03c5\u03c0\u03ac\u03c1\u03c7\u03bf\u03c5\u03bd 10 \u03b5\u03c1\u03b3\u03b1\u03bb\u03b5\u03af\u03b1: \u03bc\u03b5\u03c4\u03b1\u03c4\u03c1\u03bf\u03c0\u03ae \u03ba\u03b5\u03c6\u03b1\u03bb\u03b1\u03af\u03c9\u03bd/\u03c0\u03b5\u03b6\u03ce\u03bd, \u03b1\u03c6\u03b1\u03af\u03c1\u03b5\u03c3\u03b7 \u03ba\u03b5\u03bd\u03ce\u03bd, \u03ba\u03b5\u03bd\u03ce\u03bd \u03b3\u03c1\u03b1\u03bc\u03bc\u03ce\u03bd, \u03b4\u03b9\u03c0\u03bb\u03bf\u03c4\u03cd\u03c0\u03c9\u03bd \u03ba\u03b1\u03b9 \u03c4\u03b1\u03be\u03b9\u03bd\u03cc\u03bc\u03b7\u03c3\u03b7. \u038c\u03bb\u03b1 \u03b5\u03ba\u03c4\u03b5\u03bb\u03bf\u03cd\u03bd\u03c4\u03b1\u03b9 \u03c4\u03bf\u03c0\u03b9\u03ba\u03ac \u03c3\u03c4\u03bf\u03bd \u03c0\u03b5\u03c1\u03b9\u03b7\u03b3\u03b7\u03c4\u03ae.</p>',
    metricsTitle: '11 \u03bc\u03b5\u03c4\u03c1\u03b9\u03ba\u03ad\u03c2 \u03ba\u03b5\u03b9\u03bc\u03ad\u03bd\u03bf\u03c5 \u2013 \u03c4\u03b9 \u03bc\u03b5\u03c4\u03c1\u03ac\u03b5\u03b9 \u03bf \u03bc\u03b5\u03c4\u03c1\u03b7\u03c4\u03ae\u03c2',
    metricsDesc: '\u039f \u03bc\u03b5\u03c4\u03c1\u03b7\u03c4\u03ae\u03c2 \u03b1\u03bd\u03b1\u03bb\u03cd\u03b5\u03b9 \u03c4\u03bf \u03ba\u03b5\u03af\u03bc\u03b5\u03bd\u03bf \u03bc\u03b5 \u03ad\u03bd\u03c4\u03b5\u03ba\u03b1 \u03b4\u03b5\u03af\u03ba\u03c4\u03b5\u03c2:',
    speakingTitle: '\u03a7\u03c1\u03cc\u03bd\u03bf\u03c2 \u03bf\u03bc\u03b9\u03bb\u03af\u03b1\u03c2', speakingDesc: '\u0395\u03ba\u03c4\u03b9\u03bc\u03ce\u03bc\u03b5\u03bd\u03bf\u03c2 \u03c7\u03c1\u03cc\u03bd\u03bf\u03c2 \u03bf\u03bc\u03b9\u03bb\u03af\u03b1\u03c2 \u03bc\u03b5 130 \u03bb\u03ad\u03be\u03b5\u03b9\u03c2/\u03bb\u03b5\u03c0\u03c4\u03cc. \u0393\u03b9\u03b1 \u03c0\u03b1\u03c1\u03bf\u03c5\u03c3\u03b9\u03ac\u03c3\u03b5\u03b9\u03c2 \u03ba\u03b1\u03b9 \u03bf\u03bc\u03b9\u03bb\u03af\u03b5\u03c2.',
    syllablesTitle: '\u03a3\u03c5\u03bb\u03bb\u03b1\u03b2\u03ad\u03c2', syllablesDesc: '\u03a3\u03cd\u03bd\u03bf\u03bb\u03bf \u03c3\u03c5\u03bb\u03bb\u03b1\u03b2\u03ce\u03bd \u03bc\u03b5 \u03b5\u03c5\u03c1\u03b5\u03c4\u03b9\u03ba\u03ad\u03c2 \u03b3\u03b9\u03b1 \u03b5\u03bb\u03bb\u03b7\u03bd\u03b9\u03ba\u03bf\u03cd\u03c2 \u03b4\u03b9\u03c6\u03b8\u03cc\u03b3\u03b3\u03bf\u03c5\u03c2 (\u03b1\u03b9, \u03b5\u03b9, \u03bf\u03b9, \u03bf\u03c5, \u03b1\u03c5, \u03b5\u03c5).',
    readabilityTitle: '\u0391\u03bd\u03b1\u03b3\u03bd\u03c9\u03c3\u03b9\u03bc\u03cc\u03c4\u03b7\u03c4\u03b1 (Flesch-Kincaid)', readabilityDesc: '\u0392\u03b1\u03b8\u03bc\u03bf\u03bb\u03bf\u03b3\u03af\u03b1 0\u2013100. \u03a0\u03ac\u03bd\u03c9 \u03b1\u03c0\u03cc 70 = \u03b5\u03cd\u03ba\u03bf\u03bb\u03bf, 50\u201370 = \u03bc\u03ad\u03c4\u03c1\u03b9\u03bf, \u03ba\u03ac\u03c4\u03c9 \u03b1\u03c0\u03cc 30 = \u03b1\u03ba\u03b1\u03b4\u03b7\u03bc\u03b1\u03ca\u03ba\u03cc. \u039c\u03b5 \u03c7\u03c1\u03c9\u03bc\u03b1\u03c4\u03b9\u03ba\u03ae \u03ba\u03c9\u03b4\u03b9\u03ba\u03bf\u03c0\u03bf\u03af\u03b7\u03c3\u03b7.',
    specialTitle: '\u03a4\u03b9 \u03ba\u03ac\u03bd\u03b5\u03b9 \u03b1\u03c5\u03c4\u03cc\u03bd \u03c4\u03bf\u03bd \u03bc\u03b5\u03c4\u03c1\u03b7\u03c4\u03ae \u03be\u03b5\u03c7\u03c9\u03c1\u03b9\u03c3\u03c4\u03cc;', specialMetrics: '11 \u03bc\u03b5\u03c4\u03c1\u03b9\u03ba\u03ad\u03c2 + \u03b2\u03b1\u03b8\u03bc\u03bf\u03bb\u03bf\u03b3\u03af\u03b1 \u03b1\u03bd\u03b1\u03b3\u03bd\u03c9\u03c3\u03b9\u03bc\u03cc\u03c4\u03b7\u03c4\u03b1\u03c2', specialMetricsDesc: '\u039b\u03ad\u03be\u03b5\u03b9\u03c2, \u03c7\u03b1\u03c1\u03b1\u03ba\u03c4\u03ae\u03c1\u03b5\u03c2, \u03c3\u03c5\u03bb\u03bb\u03b1\u03b2\u03ad\u03c2, \u03c0\u03c1\u03bf\u03c4\u03ac\u03c3\u03b5\u03b9\u03c2, \u03c0\u03b1\u03c1\u03b1\u03b3\u03c1\u03ac\u03c6\u03bf\u03b9, \u03bc\u03bf\u03bd\u03b1\u03b4\u03b9\u03ba\u03ad\u03c2 \u03bb\u03ad\u03be\u03b5\u03b9\u03c2, \u03c7\u03c1\u03cc\u03bd\u03bf\u03c2 \u03b1\u03bd\u03ac\u03b3\u03bd\u03c9\u03c3\u03b7\u03c2/\u03bf\u03bc\u03b9\u03bb\u03af\u03b1\u03c2 & Flesch-Kincaid.',
    faqNew: [
      { question: '\u03a4\u03b9 \u03b5\u03af\u03bd\u03b1\u03b9 \u03b7 \u03b2\u03b1\u03b8\u03bc\u03bf\u03bb\u03bf\u03b3\u03af\u03b1 Flesch-Kincaid;', answer: '\u03a4\u03bf Flesch Reading Ease (0\u2013100) \u03b4\u03b5\u03af\u03c7\u03bd\u03b5\u03b9 \u03c4\u03b7\u03bd \u03b1\u03bd\u03b1\u03b3\u03bd\u03c9\u03c3\u03b9\u03bc\u03cc\u03c4\u03b7\u03c4\u03b1. 90\u2013100 = \u03c0\u03bf\u03bb\u03cd \u03b5\u03cd\u03ba\u03bf\u03bb\u03bf, 70\u201389 = \u03b5\u03cd\u03ba\u03bf\u03bb\u03bf, 50\u201369 = \u03bc\u03ad\u03c4\u03c1\u03b9\u03bf, 30\u201349 = \u03b4\u03cd\u03c3\u03ba\u03bf\u03bb\u03bf, 0\u201329 = \u03c0\u03bf\u03bb\u03cd \u03b4\u03cd\u03c3\u03ba\u03bf\u03bb\u03bf.', answerSchemaText: 'Flesch Reading Ease (0\u2013100).' },
      { question: '\u03a0\u03ce\u03c2 \u03c5\u03c0\u03bf\u03bb\u03bf\u03b3\u03af\u03b6\u03b5\u03c4\u03b1\u03b9 \u03bf \u03c7\u03c1\u03cc\u03bd\u03bf\u03c2 \u03bf\u03bc\u03b9\u03bb\u03af\u03b1\u03c2;', answer: '\u039f\u03b9 \u03bb\u03ad\u03be\u03b5\u03b9\u03c2 \u03b4\u03b9\u03b1\u03b9\u03c1\u03bf\u03cd\u03bd\u03c4\u03b1\u03b9 \u03bc\u03b5 130 \u2013 \u03bc\u03ad\u03c3\u03b7 \u03c4\u03b1\u03c7\u03cd\u03c4\u03b7\u03c4\u03b1 \u03bf\u03bc\u03b9\u03bb\u03af\u03b1\u03c2 \u03c3\u03b5 \u03c0\u03b1\u03c1\u03bf\u03c5\u03c3\u03b9\u03ac\u03c3\u03b5\u03b9\u03c2.', answerSchemaText: '130 \u03bb\u03ad\u03be\u03b5\u03b9\u03c2/\u03bb\u03b5\u03c0\u03c4\u03cc.' },
      { question: '\u03a0\u03cc\u03c3\u03bf \u03b1\u03ba\u03c1\u03b9\u03b2\u03ae\u03c2 \u03b5\u03af\u03bd\u03b1\u03b9 \u03bf \u03bc\u03b5\u03c4\u03c1\u03b7\u03c4\u03ae\u03c2 \u03c3\u03c5\u03bb\u03bb\u03b1\u03b2\u03ce\u03bd;', answer: '\u03a4\u03bf \u03b5\u03c1\u03b3\u03b1\u03bb\u03b5\u03af\u03bf \u03c7\u03c1\u03b7\u03c3\u03b9\u03bc\u03bf\u03c0\u03bf\u03b9\u03b5\u03af \u03b5\u03c5\u03c1\u03b5\u03c4\u03b9\u03ba\u03ad\u03c2 \u03c0\u03bf\u03c5 \u03b1\u03bd\u03b1\u03b3\u03bd\u03c9\u03c1\u03af\u03b6\u03bf\u03c5\u03bd \u03b5\u03bb\u03bb\u03b7\u03bd\u03b9\u03ba\u03bf\u03cd\u03c2 \u03b4\u03b9\u03c6\u03b8\u03cc\u03b3\u03b3\u03bf\u03c5\u03c2 (\u03b1\u03b9, \u03b5\u03b9, \u03bf\u03b9, \u03bf\u03c5, \u03b1\u03c5, \u03b5\u03c5).', answerSchemaText: '\u0395\u03c5\u03c1\u03b5\u03c4\u03b9\u03ba\u03ad\u03c2 \u03b3\u03b9\u03b1 \u03b5\u03bb\u03bb\u03b7\u03bd\u03b9\u03ba\u03bf\u03cd\u03c2 \u03b4\u03b9\u03c6\u03b8\u03cc\u03b3\u03b3\u03bf\u03c5\u03c2.' }
    ]
  }
};

function applyUpdate(loc, t) {
  const fp = path.join('data', loc, 'tools', 'word-counter.json');
  if (!fs.existsSync(fp)) { console.log('SKIP:', fp); return; }
  const data = JSON.parse(fs.readFileSync(fp, 'utf8'));

  data.metadata.title = t.metaTitle;
  data.metadata.description = t.metaDesc;
  data.hero.title = t.heroTitle;
  data.hero.description = t.heroDesc;

  const alt = data.schemas.software.alternateName || [];
  for (const n of t.schemaAltAdd) { if (!alt.includes(n)) alt.push(n); }
  data.schemas.software.alternateName = alt;

  const fl = data.schemas.software.featureList || [];
  const hasFK = fl.some(f => /Flesch/i.test(f));
  if (!hasFK) {
    const idx = fl.findIndex(f => /l\u00e6se|lese|luku|\u03b1\u03bd\u03ac\u03b3\u03bd\u03c9\u03c3/i.test(f));
    const ins = idx >= 0 ? idx + 1 : fl.length;
    fl.splice(ins, 0, ...t.featAdd);
  }

  if (data.schemas.howTo.steps && data.schemas.howTo.steps.length >= 2) {
    data.schemas.howTo.steps[1].text = t.howToStep2;
  }

  for (const block of data.contentBlocks) {
    if (block.type === 'sectionBasic' && block.html) {
      block.html = t.sectionBasicHtml;
    }
    if (block.type === 'sectionSteps' && block.items && block.items[0] && block.items[0].icon === 'RiText') {
      block.title = t.metricsTitle;
      block.description = t.metricsDesc;
      const hasSpk = block.items.some(i => i.icon === 'RiMicLine');
      if (!hasSpk) {
        block.items.push(
          { icon: 'RiMicLine', title: t.speakingTitle, description: t.speakingDesc },
          { icon: 'RiInputMethodLine', title: t.syllablesTitle, description: t.syllablesDesc },
          { icon: 'RiSpeedLine', title: t.readabilityTitle, description: t.readabilityDesc }
        );
      }
    }
    if (block.type === 'sectionSteps' && block.items && block.items[0] && block.items[0].icon === 'RiBarChartLine' && block.items.length === 6) {
      block.title = t.specialTitle;
      block.items[0].title = t.specialMetrics;
      block.items[0].description = t.specialMetricsDesc;
    }
    if (block.type === 'faq' && block.items) {
      const hasFK = block.items.some(i => /Flesch/i.test(i.question));
      if (!hasFK) block.items.push(...t.faqNew);
    }
    if (block.type === 'sectionSteps' && block.grid === 'four' && block.items && block.items.length === 4 && block.items[0] && block.items[0].icon === 'RiFileTextLine') {
      block.items[1].description = t.howToStep2;
    }
  }

  fs.writeFileSync(fp, JSON.stringify(data, null, 2) + '\n', 'utf8');
  console.log('Updated:', fp);
}

for (const [loc, t] of Object.entries(L)) { applyUpdate(loc, t); }
console.log('Done: da, no, fi, el');
