/**
 * Fix: Insert legal sections for FI, IT, PT that were missed by the main script.
 * Run: node scripts/_cc-fix-missing-legal.cjs
 */
const fs = require('fs');

const LEGAL = {
  fi: {
    title: "Saavutettavuusvaatimukset Suomessa",
    html: '<p class="text-mid mb-4">Suomi on implementoinut EU:n saavutettavuusdirektiivin <strong>Lailla digitaalisten palvelujen tarjoamisesta (306/2019)</strong>. Laki edellyttää julkisen sektorin verkkopalveluilta WCAG 2.1 AA -tason noudattamista.</p><ul class="text-mid list-disc space-y-2 pl-5"><li><strong>Julkinen sektori</strong> — valtion, kuntien ja hyvinvointialueiden verkkopalvelujen on täytettävä WCAG 2.1 AA. Etelä-Suomen aluehallintovirasto (AVI) valvoo noudattamista.</li><li><strong>EU:n esteettömyysdirektiivi (EAA)</strong> — kesäkuusta 2025 alkaen vaatimukset laajenevat yksityiselle sektorille: verkkokaupat, pankit, liikennepalvelut ja mediapalvelut.</li><li><strong>Suomalainen erityispiirre</strong> — Suomen digitaalinen julkishallinto on Euroopan edistyneimpiä. Suurin osa viranomaispalveluista toimii verkossa, mikä tekee saavutettavuudesta erityisen tärkeää.</li></ul><p class="text-mid mt-3">Kontrastisuhde 4,5:1 tavalliselle tekstille ja 3:1 suurelle tekstille on lakisääteinen vaatimus.</p>'
  },
  it: {
    title: "Requisiti di accessibilit\u00e0 in Italia",
    html: '<p class="text-mid mb-4">L\u2019Italia ha una delle legislazioni sull\u2019accessibilit\u00e0 digitale pi\u00f9 consolidate d\u2019Europa:</p><ul class="text-mid list-disc space-y-2 pl-5"><li><strong>Legge Stanca (L. 4/2004)</strong> — impone l\u2019accessibilit\u00e0 dei siti web della pubblica amministrazione secondo le linee guida AgID, basate sulle WCAG 2.1 AA.</li><li><strong>Decreto Legislativo 106/2018</strong> — recepisce la direttiva UE sull\u2019accessibilit\u00e0 web, estendendo gli obblighi a enti pubblici e concessionari di servizi pubblici.</li><li><strong>Obbligo per il settore privato (2025)</strong> — dal giugno 2025 le aziende con fatturato superiore a 500 milioni di euro devono rendere accessibili i propri servizi digitali. L\u2019AgID \u00e8 l\u2019organismo di vigilanza.</li><li><strong>Legge Europea sull\u2019Accessibilit\u00e0 (EAA)</strong> — estende ulteriormente gli obblighi a e-commerce, servizi bancari, trasporti e piattaforme multimediali.</li></ul><p class="text-mid mt-3">Il rapporto di contrasto minimo di 4,5:1 per il testo normale e 3:1 per il testo grande \u00e8 richiesto da tutte le normative citate.</p>'
  },
  pt: {
    title: "Requisitos de acessibilidade em Portugal e no Brasil",
    html: '<p class="text-mid mb-4">Portugal e o Brasil possuem legisla\u00e7\u00f5es distintas mas convergentes em mat\u00e9ria de acessibilidade digital:</p><ul class="text-mid list-disc space-y-2 pl-5"><li><strong>Portugal — DL 83/2018</strong>: transp\u00f5e a diretiva europeia de acessibilidade web. Obriga organismos p\u00fablicos a cumprir a norma EN 301 549, que referencia as WCAG 2.1 n\u00edvel AA.</li><li><strong>Lei Europeia de Acessibilidade (EAA)</strong> — desde junho de 2025, as obriga\u00e7\u00f5es estendem-se ao setor privado: com\u00e9rcio eletr\u00f3nico, banca, transportes e plataformas de media.</li><li><strong>Brasil — Lei Brasileira de Inclus\u00e3o (13.146/2015)</strong>: exige que s\u00edtios web de organismos p\u00fablicos e de empresas com presen\u00e7a digital significativa sejam acess\u00edveis.</li><li><strong>Brasil — eMAG</strong> (Modelo de Acessibilidade em Governo Eletr\u00f4nico): referencia as WCAG e define diretrizes espec\u00edficas para portais governamentais brasileiros.</li></ul><p class="text-mid mt-3">O r\u00e1cio de contraste de 4,5:1 para texto normal e 3:1 para texto grande \u00e9 exigido por todas as regulamenta\u00e7\u00f5es acima.</p>'
  }
};

for (const locale of ['fi', 'it', 'pt']) {
  const filePath = `data/${locale}/tools/contrast-checker.json`;
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  const cb = data.contentBlocks;

  // Check if already has a legal section
  const hasLegal = cb.some(b => b.type === 'sectionInfo' && b.title === LEGAL[locale].title);
  if (hasLegal) {
    console.log(`${locale}: already has legal section, skipping`);
    continue;
  }

  // Find the color blindness section (index 19 for these locales)
  const blindIdx = cb.findIndex((b, i) => i >= 15 && b.type === 'sectionInfo' && b.html && b.html.includes('8 %'));
  const insertAfter = blindIdx !== -1 ? blindIdx + 1 : 20;

  cb.splice(insertAfter, 0,
    { type: "gap", variant: "line" },
    { type: "sectionInfo", title: LEGAL[locale].title, html: LEGAL[locale].html }
  );

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n', 'utf8');
  JSON.parse(fs.readFileSync(filePath, 'utf8'));
  console.log(`${locale}: OK — legal inserted at index ${insertAfter}`);
}
