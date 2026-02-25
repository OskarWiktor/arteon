// Word counter update: RO, HU, CS, SV
const fs = require('fs');
const path = require('path');

const newMetrics = [
  { icon: 'RiMicLine', title: '{speaking}', description: '{speakingDesc}' },
  { icon: 'RiInputMethodLine', title: '{syllables}', description: '{syllablesDesc}' },
  { icon: 'RiSpeedLine', title: '{readability}', description: '{readabilityDesc}' }
];

const L = {
  ro: {
    metaTitle: 'Contor de cuvinte cu scor Flesch-Kincaid si instrumente text',
    metaDesc: 'Contor gratuit de cuvinte, caractere si silabe cu scor Flesch-Kincaid, timp de citire, timp de vorbire si 10 instrumente de formatare. Fara inregistrare.',
    heroTitle: 'Numara cuvinte, caractere si lizibilitate \u2013 scor Flesch-Kincaid, timp de citire si instrumente text',
    heroDesc: 'Lipeste textul si instrumentul va numara cuvinte, caractere, silabe, propozitii, paragrafe, cuvinte unice, timp de citire, timp de vorbire si va calcula scorul de lizibilitate Flesch-Kincaid.',
    schemaAltAdd: ['Verificator lizibilitate Flesch-Kincaid', 'Contor de silabe online', 'Calculator timp de vorbire', 'Instrument lizibilitate text'],
    featAdd: ['Timp de vorbire estimat', 'Numarare silabe', 'Scor lizibilitate Flesch-Kincaid', 'Formule de lizibilitate adaptate (16 limbi)'],
    howToStep2: 'In panoul din stanga vei vedea 11 metrici: cuvinte, caractere cu si fara spatii, propozitii, paragrafe, cuvinte unice, lungime medie, timp de citire, timp de vorbire, silabe si scor Flesch-Kincaid.',
    sectionBasicHtml: '<p class="text-mid">Acest instrument combina un contor de cuvinte si caractere cu analiza lizibilitatii Flesch-Kincaid si functii de formatare text. Lipeste textul pentru a vedea cuvinte, caractere, silabe, propozitii, paragrafe, cuvinte unice, timp de citire, timp de vorbire si un scor de lizibilitate colorat.</p><p class="text-mid mt-3"><strong>Scorul Flesch-Kincaid</strong> (0\u2013100) arata cat de usor este de citit textul. Scoruri peste 70 inseamna text usor, sub 30 nivel academic. Instrumentul foloseste formule adaptate pentru 16 limbi.</p><p class="text-mid mt-3">Sub campul de text vei gasi 10 instrumente: conversie majuscule/minuscule, eliminare spatii, linii goale, duplicate si sortare. Toata procesarea are loc local in browser.</p>',
    metricsTitle: '11 metrici text \u2013 ce masoara contorul',
    metricsDesc: 'Contorul analizeaza textul cu unsprezece indicatori:',
    speakingTitle: 'Timp de vorbire', speakingDesc: 'Timp estimat la 130 cuvinte pe minut. Util pentru discursuri si prezentari.',
    syllablesTitle: 'Silabe', syllablesDesc: 'Total silabe cu euristici lingvistice. Parametru cheie pentru formulele de lizibilitate.',
    readabilityTitle: 'Lizibilitate (Flesch-Kincaid)', readabilityDesc: 'Scor 0\u2013100. Peste 70 = usor, 50\u201370 = moderat, sub 30 = academic. Codat prin culori.',
    specialTitle: 'Ce face acest contor special?', specialMetrics: '11 metrici + scor lizibilitate', specialMetricsDesc: 'Cuvinte, caractere, silabe, propozitii, paragrafe, cuvinte unice, timp citire, timp vorbire si Flesch-Kincaid.',
    faqNew: [
      { question: 'Ce este scorul Flesch-Kincaid?', answer: 'Scorul Flesch Reading Ease (0\u2013100) indica usurinta de citire. 90\u2013100 = foarte usor, 70\u201389 = usor, 50\u201369 = moderat, 30\u201349 = dificil, 0\u201329 = foarte dificil.', answerSchemaText: 'Flesch Reading Ease (0\u2013100) masoara lizibilitatea.' },
      { question: 'Cum se calculeaza timpul de vorbire?', answer: 'Timpul de vorbire imparte cuvintele la 130 \u2013 viteza medie la prezentari.', answerSchemaText: '130 cuvinte pe minut.' },
      { question: 'Cat de precis este contorul de silabe?', answer: 'Instrumentul foloseste euristici specifice limbii care recunosc diftongi si modele de vocale.', answerSchemaText: 'Euristici lingvistice cu diftongi si vocale.' }
    ]
  },
  hu: {
    metaTitle: 'Szoszamlalo Flesch-Kincaid olvashatosaggal es szovegeszközökkel',
    metaDesc: 'Ingyenes szo-, karakter- es szotagszamlalo Flesch-Kincaid olvashatosaggal, olvasasi idovel, beszedidovel es 10 formazoeszkozzel. Regisztracio nelkul.',
    heroTitle: 'Szamold meg a szavakat, karaktereket es olvashatosagot \u2013 Flesch-Kincaid, olvasasi ido es szovegeszközök',
    heroDesc: 'Illeszd be a szoveget, es az eszkoz megszamolja a szavakat, karaktereket, szotagokat, mondatokat, bekezdéseket, egyedi szavakat, olvasasi es beszedidot, es kiszamitja a Flesch-Kincaid olvashatosagi pontszamot.',
    schemaAltAdd: ['Flesch-Kincaid olvashatosag-ellenorzo', 'Szotagszamlalo online', 'Beszedido kalkulator', 'Szoveg olvashatosagi eszkoz'],
    featAdd: ['Becsult beszedido', 'Szotagszamlalas', 'Flesch-Kincaid olvashatosagi pontszam', 'Nyelvspecifikus olvashatosagi kepletek (16 nyelv)'],
    howToStep2: 'A bal oldali panelen 11 metrikat latsz: szavak, karakterek szokozokkel es nelkul, mondatok, bekezdések, egyedi szavak, atlagos szohossz, olvasasi ido, beszedido, szotagok es Flesch-Kincaid pontszam.',
    sectionBasicHtml: '<p class="text-mid">Ez az eszkoz otvozi a szo- es karakterszamlalot a Flesch-Kincaid olvashatosagi elemzessel es szovegformazo funkciokkal. Illeszd be a szoveget, es megjelenik a szavak, karakterek, szotagok, mondatok, bekezdések, egyedi szavak, olvasasi ido, beszedido es a szinkodolt olvashatosagi pontszam.</p><p class="text-mid mt-3">A <strong>Flesch-Kincaid olvashatosagi pontszam</strong> (0\u2013100) megmutatja, mennyire konnyu olvasni a szoveget. 70 feletti pontszam konnyu olvasast, 30 alatti akademiai szintet jelent.</p><p class="text-mid mt-3">A szovegmezo alatt 10 eszkozt talalsz: kis-nagybetu atalakitas, szokozok, ures sorok, duplikatumok eltavolitasa es rendezes. Minden feldolgozas helyben, a bongeszoben tortenik.</p>',
    metricsTitle: '11 szovegmetrika \u2013 mit mer a szamlalo?',
    metricsDesc: 'A szamlalo tizenegy mutatoval elemzi a szoveget:',
    speakingTitle: 'Beszedido', speakingDesc: 'Becsult beszedido 130 szo/perc sebesseggel. Eloadasokhoz es prezentaciokhoz.',
    syllablesTitle: 'Szotagok', syllablesDesc: 'Összesen szotagok szama nyelvspecifikus heurisztikakkal.',
    readabilityTitle: 'Olvashatosag (Flesch-Kincaid)', readabilityDesc: 'Pontszam 0\u2013100. 70 felett = konnyu, 50\u201370 = kozepes, 30 alatt = akademiai. Szinkodolt.',
    specialTitle: 'Mi teszi kulonlegesse ezt a szoszamlalot?', specialMetrics: '11 metrika + olvashatosagi pontszam', specialMetricsDesc: 'Szavak, karakterek, szotagok, mondatok, bekezdések, egyedi szavak, olvasasi ido, beszedido es Flesch-Kincaid.',
    faqNew: [
      { question: 'Mi az a Flesch-Kincaid pontszam?', answer: 'A Flesch Reading Ease (0\u2013100) azt mutatja, mennyire konnyu olvasni a szoveget. 90\u2013100 = nagyon konnyu, 70\u201389 = konnyu, 50\u201369 = kozepes, 30\u201349 = nehez, 0\u201329 = nagyon nehez.', answerSchemaText: 'Flesch Reading Ease (0\u2013100), magasabb = konnyebb.' },
      { question: 'Hogyan szamitja a beszedidot?', answer: 'A szavakat elosztja 130-cal \u2013 az atlagos prezentacios beszedsebességgel.', answerSchemaText: '130 szo/perc.' },
      { question: 'Mennyire pontos a szotagszamlalo?', answer: 'Nyelvspecifikus heurisztikakat hasznal. A magyar eseteban figyelembe veszi a maganhangzo-szabalyokat.', answerSchemaText: 'Nyelvspecifikus heurisztikak.' }
    ]
  },
  cs: {
    metaTitle: 'Pocitadlo slov s citelnosti Flesch-Kincaid a textovymi nastroji',
    metaDesc: 'Bezplatne pocitadlo slov, znaku a slabik s hodnocenim Flesch-Kincaid, dobou cteni, dobou mluveni a 10 formatovacimi nastroji. Bez registrace.',
    heroTitle: 'Pocitejte slova, znaky a citelnost \u2013 Flesch-Kincaid, doba cteni a textove nastroje',
    heroDesc: 'Vlozte text a nastroj spocita slova, znaky, slabiky, vety, odstavce, unikatni slova, dobu cteni, dobu mluveni a vypocita skore citelnosti Flesch-Kincaid.',
    schemaAltAdd: ['Kontrola citelnosti Flesch-Kincaid', 'Pocitadlo slabik online', 'Kalkulacka doby mluveni', 'Nastroj citelnosti textu'],
    featAdd: ['Odhadovana doba mluveni', 'Pocitani slabik', 'Flesch-Kincaid skore citelnosti', 'Jazykove specificke vzorce citelnosti (16 jazyku)'],
    howToStep2: 'V levem panelu uvidite 11 metrik: slova, znaky s mezerami a bez, vety, odstavce, unikatni slova, prumerna delka, doba cteni, doba mluveni, slabiky a skore Flesch-Kincaid.',
    sectionBasicHtml: '<p class="text-mid">Tento nastroj kombinuje pocitadlo slov a znaku s analyzou citelnosti Flesch-Kincaid a funkcemi formatovani textu. Vlozte text a uvidite pocet slov, znaku, slabik, vet, odstavcu, unikatnich slov, dobu cteni, dobu mluveni a barevne kodovane skore citelnosti.</p><p class="text-mid mt-3"><strong>Skore Flesch-Kincaid</strong> (0\u2013100) ukazuje, jak snadno se text cte. Hodnoty nad 70 znamenaji snadne cteni, pod 30 akademickou uroven.</p><p class="text-mid mt-3">Pod textovym polem najdete 10 nastroju: prevod velkych/malych pismen, odstraneni mezer, prazdnych radku, duplicit a razeni. Vse probiha lokalne v prohlizeci.</p>',
    metricsTitle: '11 textovych metrik \u2013 co pocitadlo meri',
    metricsDesc: 'Pocitadlo analyzuje text pomoci jedenacti ukazatelu:',
    speakingTitle: 'Doba mluveni', speakingDesc: 'Odhadovana doba mluveni pri 130 slovech za minutu. Pro prezentace a projevy.',
    syllablesTitle: 'Slabiky', syllablesDesc: 'Celkovy pocet slabik s jazykovymi heuristikami. Klicovy parametr pro vzorce citelnosti.',
    readabilityTitle: 'Citelnost (Flesch-Kincaid)', readabilityDesc: 'Skore 0\u2013100. Nad 70 = snadne, 50\u201370 = stredni, pod 30 = akademicke. Barevne kodovano.',
    specialTitle: 'Co dela toto pocitadlo vyjimecnym?', specialMetrics: '11 metrik + skore citelnosti', specialMetricsDesc: 'Slova, znaky, slabiky, vety, odstavce, unikatni slova, doba cteni, mluveni a Flesch-Kincaid.',
    faqNew: [
      { question: 'Co je skore Flesch-Kincaid?', answer: 'Flesch Reading Ease (0\u2013100) ukazuje snadnost cteni. 90\u2013100 = velmi snadne, 70\u201389 = snadne, 50\u201369 = stredni, 30\u201349 = obtizne, 0\u201329 = velmi obtizne.', answerSchemaText: 'Flesch Reading Ease (0\u2013100).' },
      { question: 'Jak se pocita doba mluveni?', answer: 'Pocet slov se deli 130 \u2013 prumernou rychlosti pri prezentacich.', answerSchemaText: '130 slov za minutu.' },
      { question: 'Jak presny je pocitadlo slabik?', answer: 'Nastroj pouziva heuristiky specificke pro dany jazyk. Pro cestinu rozpoznava souhlaskove skupiny a slabikotvorné souhlasky (r, l).', answerSchemaText: 'Jazykove heuristiky.' }
    ]
  },
  sv: {
    metaTitle: 'Ordraknare med Flesch-Kincaid lasbarhet & textverktyg',
    metaDesc: 'Gratis ord-, tecken- och stavelseraknare med Flesch-Kincaid poang, lastid, taltid och 10 formateringsverktyg. Utan registrering.',
    heroTitle: 'Rakna ord, tecken och lasbarhet \u2013 Flesch-Kincaid, lastid och textverktyg',
    heroDesc: 'Klistra in din text och verktyget raknar ord, tecken, stavelser, meningar, stycken, unika ord, lastid, taltid och beraknar Flesch-Kincaid lasbarhetspoang.',
    schemaAltAdd: ['Flesch-Kincaid lasbarhetskontroll', 'Stavelseraknare online', 'Taltidskalkylator', 'Lasbarhetsverktyg'],
    featAdd: ['Uppskattad taltid', 'Stavelserakning', 'Flesch-Kincaid lasbarhetspoang', 'Sprakspecifika lasbarhetsformler (16 sprak)'],
    howToStep2: 'I vansterpanelen ser du 11 matvarden: ord, tecken med och utan mellanslag, meningar, stycken, unika ord, ordlangd, lastid, taltid, stavelser och Flesch-Kincaid poang.',
    sectionBasicHtml: '<p class="text-mid">Det har verktyget kombinerar en ord- och teckenraknare med Flesch-Kincaid lasbarhetsanalys och textformateringsverktyg. Klistra in din text for att se ord, tecken, stavelser, meningar, stycken, unika ord, lastid, taltid och en fargkodad lasbarhetspoang.</p><p class="text-mid mt-3"><strong>Flesch-Kincaid lasbarhetspoang</strong> (0\u2013100) visar hur latt texten ar att lasa. Poang over 70 innebar lattlast text, under 30 akademisk niva.</p><p class="text-mid mt-3">Under textfaltet finns 10 verktyg: versalkonvertering, borttagning av mellanslag, tomma rader, dubbletter och sortering. All bearbetning sker lokalt i webblasaren.</p>',
    metricsTitle: '11 textmatvarden \u2013 vad raknaren mater',
    metricsDesc: 'Raknaren analyserar din text med elva indikatorer:',
    speakingTitle: 'Taltid', speakingDesc: 'Uppskattad taltid vid 130 ord per minut. For presentationer och tal.',
    syllablesTitle: 'Stavelser', syllablesDesc: 'Totalt antal stavelser med sprakspecifika heuristiker.',
    readabilityTitle: 'Lasbarhet (Flesch-Kincaid)', readabilityDesc: 'Poang 0\u2013100. Over 70 = latt, 50\u201370 = medel, under 30 = akademiskt. Fargkodad.',
    specialTitle: 'Vad gor denna ordraknare speciell?', specialMetrics: '11 matvarden + lasbarhetspoang', specialMetricsDesc: 'Ord, tecken, stavelser, meningar, stycken, unika ord, lastid, taltid och Flesch-Kincaid.',
    faqNew: [
      { question: 'Vad ar Flesch-Kincaid poang?', answer: 'Flesch Reading Ease (0\u2013100) visar lasbarhet. 90\u2013100 = mycket latt, 70\u201389 = latt, 50\u201369 = medel, 30\u201349 = svar, 0\u201329 = mycket svar.', answerSchemaText: 'Flesch Reading Ease (0\u2013100).' },
      { question: 'Hur beraknas taltiden?', answer: 'Antalet ord delas med 130 \u2013 genomsnittlig talhastighet vid presentationer.', answerSchemaText: '130 ord per minut.' },
      { question: 'Hur exakt ar stavelseraknaren?', answer: 'Verktyget anvander sprakspecifika heuristiker som kanner igen svenska diftonger och sammansatta ord.', answerSchemaText: 'Sprakspecifika heuristiker.' }
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

  // Schema alternateNames - add new ones
  const alt = data.schemas.software.alternateName || [];
  for (const n of t.schemaAltAdd) { if (!alt.includes(n)) alt.push(n); }
  data.schemas.software.alternateName = alt;

  // Schema features - add new ones after reading time
  const fl = data.schemas.software.featureList || [];
  const hasFK = fl.some(f => /Flesch/i.test(f));
  if (!hasFK) {
    const idx = fl.findIndex(f => /citire|olvasasi|cteni|lastid|lesetid|lukuaika/i.test(f));
    const ins = idx >= 0 ? idx + 1 : fl.length;
    fl.splice(ins, 0, ...t.featAdd);
  }

  // HowTo step 2
  if (data.schemas.howTo.steps && data.schemas.howTo.steps.length >= 2) {
    data.schemas.howTo.steps[1].text = t.howToStep2;
  }

  // ContentBlocks
  for (const block of data.contentBlocks) {
    if (block.type === 'sectionBasic' && block.html) {
      block.html = t.sectionBasicHtml;
    }

    // Metrics section - add 3 new cards
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

    // Special section
    if (block.type === 'sectionSteps' && block.items && block.items[0] && block.items[0].icon === 'RiBarChartLine' && block.items.length === 6) {
      block.title = t.specialTitle;
      block.items[0].title = t.specialMetrics;
      block.items[0].description = t.specialMetricsDesc;
    }

    // FAQ - add new items
    if (block.type === 'faq' && block.items) {
      const hasFK = block.items.some(i => /Flesch/i.test(i.question));
      if (!hasFK) {
        block.items.push(...t.faqNew);
      }
    }

    // How to steps - update step 2
    if (block.type === 'sectionSteps' && block.grid === 'four' && block.items && block.items.length === 4 && block.items[0] && block.items[0].icon === 'RiFileTextLine') {
      block.items[1].description = t.howToStep2;
    }
  }

  fs.writeFileSync(fp, JSON.stringify(data, null, 2) + '\n', 'utf8');
  console.log('Updated:', fp);
}

for (const [loc, t] of Object.entries(L)) { applyUpdate(loc, t); }
console.log('Done: ro, hu, cs, sv');
