const fs = require('fs');
const p = require('path');
const dir = p.join(__dirname, 'data', 'fi', 'tools');
function fix(slug, t) {
  const fp = p.join(dir, 'unit-' + slug + '.json');
  const d = JSON.parse(fs.readFileSync(fp, 'utf8'));
  const cb = d.contentBlocks || [];
  let si = 0;
  for (const b of cb) {
    if (b.type === 'sectionBasic' && t.basic) {
      b.title = t.basic.title;
      b.html = t.basic.html;
      b.imageAlt = d.metadata.title + ' – Arteon';
    }
    if (b.type === 'sectionSteps') {
      si++;
      const src = si === 1 ? t.howTo : si === 2 ? t.when : si === 3 ? t.diff : null;
      if (src) {
        b.title = src.title;
        for (let i = 0; i < Math.min(b.items.length, src.items.length); i++) {
          b.items[i].title = src.items[i].t;
          b.items[i].description = src.items[i].d;
        }
      }
    }
    if (b.type === 'sectionInfo') {
      if (!b._d && t.info1) {
        b.title = t.info1.title;
        b.html = t.info1.html;
        b._d = true;
      } else if (t.info2) {
        b.title = t.info2.title;
        b.html = t.info2.html;
      }
    }
    if (b.type === 'sectionFeatureComparison' && t.cmp) {
      b.title = t.cmp.title;
      b.featureLabel = t.cmp.label;
      b.plans[0].name = t.cmp.u1;
      b.plans[1].name = t.cmp.u2;
      for (let i = 0; i < Math.min(b.features.length, t.cmp.f.length); i++) {
        b.features[i].name = t.cmp.f[i].n;
        b.features[i].values.unit1 = t.cmp.f[i].v1;
        b.features[i].values.unit2 = t.cmp.f[i].v2;
      }
    }
    if (b.type === 'faq' && t.faq) {
      b.title = 'Usein kysytyt kysymykset';
      b.items = t.faq.map((f) => ({ question: f.q, answer: f.a }));
    }
  }
  for (const b of cb) delete b._d;
  fs.writeFileSync(fp, JSON.stringify(d, null, 2) + '\n', 'utf8');
  console.log('OK', slug);
}
const H = {
  title: 'Miten muunninta käytetään?',
  items: [
    { t: '1. Syötä arvo', d: 'Kirjoita luku syöttökenttään.' },
    { t: '2. Lue tulos', d: 'Tulos näkyy välittömästi.' },
    { t: '3. Kopioi tai vaihda', d: 'Kopioi tulos tai vaihda muunnossuunta.' },
  ],
};
const D = {
  title: 'Mikä tekee tästä muuntimesta erityisen?',
  items: [
    { t: 'Täysi yksityisyys', d: 'Kaikki laskelmat suoritetaan paikallisesti selaimessasi.' },
    { t: 'Reaaliaikaiset tulokset', d: 'Tulos päivittyy kirjoittaessasi.' },
    { t: 'Kaksisuuntainen muunnos', d: 'Muunna molempiin suuntiin yhdellä napsautuksella.' },
    { t: 'Viitetaulukko', d: 'Taulukko yleisistä arvoista ja kontekstikuvauksista.' },
  ],
};
const L = 'Suoritetaanko laskelmat paikallisesti?';
const LA = 'Kyllä. Kaikki laskelmat suoritetaan selaimessasi.';

fix('wh-to-mah', {
  basic: {
    title: 'Milloin Wh muunnetaan mAh:ksi?',
    html: '<p class="text-mid mb-4">Wattitunnit (Wh) ja milliampeeritunnit (mAh) mittaavat akun kapasiteettia. Suhde riippuu jännitteestä: mAh = Wh × 1 000 / V.</p><p class="text-mid mb-4">Puhelimet mAh:ssa (esim. 5 000 mAh 3,7V:ssa = 18,5 Wh). Kannettavat ja varavirtalähteet Wh:ssa (lentoraja: 100 Wh).</p><p class="text-mid">Kaikki laskelmat suoritetaan paikallisesti selaimessasi.</p>',
  },
  howTo: H,
  diff: D,
  when: {
    title: 'Milloin tämä muunnin on hyödyllinen?',
    items: [
      { t: 'Varavirtalähteet', d: 'Lentoraja: 100 Wh. 20 000 mAh 3,7V:ssa = 74 Wh (sallittu).' },
      { t: 'Puhelimet', d: '5 000 mAh 3,7V:ssa = 18,5 Wh.' },
      { t: 'Kannettavat', d: 'Akut 40–99 Wh.' },
      { t: 'Aurinkoenergia', d: 'Paneelit tuottavat Wh, akut varastoivat mAh.' },
    ],
  },
  info1: {
    title: 'Miten muunnos toimii?',
    html: '<p class="text-mid mb-4">Energia (Wh) = Kapasiteetti (Ah) × Jännite (V). Siis: mAh = Wh × 1 000 / V.</p><p class="text-mid">Jännite on ratkaiseva! Sama Wh antaa eri mAh eri jännitteillä.</p>',
  },
  info2: {
    title: 'Käytännön vinkkejä',
    html: '<ul class="list-disc pl-5 space-y-2 text-mid"><li>Lentoraja: 100 Wh. 3,7V:ssa = 27 027 mAh.</li><li>Puhelin: 5 000 mAh × 3,7V = 18,5 Wh.</li><li>MacBook Air = 52,6 Wh. MacBook Pro 16" = 99,6 Wh.</li></ul>',
  },
  cmp: {
    title: 'Wh vs mAh',
    label: 'Ominaisuus',
    u1: 'Wh',
    u2: 'mAh',
    f: [
      { n: 'Mittaa', v1: 'Energiaa', v2: 'Varausta' },
      { n: 'Sisältää jännitteen', v1: 'Kyllä', v2: 'Ei (vaatii V)' },
      { n: 'Käyttö', v1: 'Kannettavat, EV', v2: 'Puhelimet, varavirta' },
      { n: 'Vertailu', v1: 'Suora kaikilla V', v2: 'Vain samalla V' },
      { n: 'Lentoraja', v1: '100 Wh', v2: '~27 000 mAh 3,7V:ssa' },
    ],
  },
  faq: [
    { q: 'Miten muunnan Wh mAh:ksi?', a: 'mAh = Wh × 1 000 / jännite. 100 Wh 3,7V:ssa = 27 027 mAh.' },
    { q: L, a: LA },
  ],
});

fix('em-to-px', {
  basic: {
    title: 'Milloin em muunnetaan pikseleiksi?',
    html: '<p class="text-mid mb-4">CSS-yksikkö em on suhteellinen isäntäelementin kirjasinkokoon. Oletuksella 16px: 1em = 16px, 1,5em = 24px, 2em = 32px.</p><p class="text-mid mb-4">Toisin kuin rem (suhteellinen juureen), em kaskadoi: 1,5em × 1,5em = 2,25× peruskoko.</p><p class="text-mid">Kaikki laskelmat suoritetaan paikallisesti selaimessasi.</p>',
  },
  howTo: H,
  diff: D,
  when: {
    title: 'Milloin tämä muunnin on hyödyllinen?',
    items: [
      { t: 'Verkkokehitys', d: 'Muunna em pikseleihin todellisten kokojen ymmärtämiseksi.' },
      { t: 'Typografia', d: 'body 1em = 16px, h1 2,5em = 40px.' },
      { t: 'Responsiivinen suunnittelu', d: 'em breakpointeille ja välyksille.' },
      { t: 'Saavutettavuus', d: 'em kunnioittaa käyttäjän kirjasinasetuksia.' },
    ],
  },
  info1: {
    title: 'Miten muunnos toimii?',
    html: '<p class="text-mid mb-4">px = em × isäntäelementin kirjasinkoko. Oletus: 16px.</p><p class="text-mid">Em kaskadoi: body 16px, div 1,5em (24px), p sen sisällä 1,5em:llä = 36px.</p>',
  },
  info2: {
    title: 'Käytännön vinkkejä',
    html: '<ul class="list-disc pl-5 space-y-2 text-mid"><li>Oletus: 16px. 0,875em = 14px, 1,25em = 20px.</li><li>Otsikot: h1 = 2em (32px), h2 = 1,5em (24px).</li><li>62,5%-temppu: html font-size 62,5% → 1em = 10px.</li></ul>',
  },
  cmp: {
    title: 'em vs px vs rem',
    label: 'Ominaisuus',
    u1: 'em',
    u2: 'px',
    f: [
      { n: 'Viite', v1: 'Isäntäelementin kirjasin', v2: 'Kiinteä pikseli' },
      { n: 'Kaskadoi', v1: 'Kyllä', v2: 'Ei' },
      { n: 'Responsiivinen', v1: 'Kyllä', v2: 'Ei' },
      { n: 'Saavutettavuus', v1: 'Kunnioittaa asetuksia', v2: 'Kiinteä koko' },
      { n: 'Ennakoitavuus', v1: 'Kontekstiriippuvainen', v2: 'Aina vakio' },
    ],
  },
  faq: [
    { q: 'Kuinka monta px on 1em?', a: 'Oletuksena 1em = 16px. Mutta em on suhteellinen isäntäelementtiin.' },
    { q: 'Mikä ero on em:llä ja rem:llä?', a: 'em viittaa isäntäelementtiin, rem juureen (html). rem on ennakoitavampi.' },
    { q: L, a: LA },
  ],
});

fix('rem-to-px', {
  basic: {
    title: 'Milloin rem muunnetaan pikseleiksi?',
    html: '<p class="text-mid mb-4">CSS-yksikkö rem on suhteellinen juurielementtiin (html). Oletus: 16px, joten 1rem = 16px. Toisin kuin em, rem ei kaskadoi.</p><p class="text-mid">Kaikki laskelmat suoritetaan paikallisesti selaimessasi.</p>',
  },
  howTo: H,
  diff: D,
  when: {
    title: 'Milloin tämä muunnin on hyödyllinen?',
    items: [
      { t: 'CSS-kehitys', d: 'Muunna rem pikseleihin virheiden selvittämiseen.' },
      { t: 'Suunnittelujärjestelmät', d: 'Määrittele väliasteikot rem:ssä.' },
      { t: 'Saavutettavuus', d: 'rem kunnioittaa käyttäjäasetuksia.' },
      { t: 'Tailwind CSS', d: 'p-4 = 1rem = 16px.' },
    ],
  },
  info1: { title: 'Miten muunnos toimii?', html: '<p class="text-mid mb-4">px = rem × juurikirjasinkoko. Oletus = 16px.</p><p class="text-mid">rem ei koskaan kaskadoi. 1rem on aina sama.</p>' },
  info2: {
    title: 'Käytännön vinkkejä',
    html: '<ul class="list-disc pl-5 space-y-2 text-mid"><li>Juurella 16px: 0,75rem = 12px, 1rem = 16px, 1,5rem = 24px, 2rem = 32px.</li><li>Tailwind: text-sm = 0,875rem (14px), text-base = 1rem (16px).</li><li>WCAG kosketusalue: 44×44px = 2,75rem.</li></ul>',
  },
  cmp: {
    title: 'rem vs em vs px',
    label: 'Ominaisuus',
    u1: 'rem',
    u2: 'px',
    f: [
      { n: 'Viite', v1: 'Juurikirjasin', v2: 'Kiinteä pikseli' },
      { n: 'Kaskadoi', v1: 'Ei', v2: 'Ei' },
      { n: 'Responsiivinen', v1: 'Kyllä', v2: 'Ei' },
      { n: 'Saavutettavuus', v1: 'Kunnioittaa asetuksia', v2: 'Kiinteä koko' },
      { n: 'Ennakoitavuus', v1: 'Aina johdonmukainen', v2: 'Aina vakio' },
    ],
  },
  faq: [
    { q: 'Kuinka monta px on 1rem?', a: 'Oletuksena 1rem = 16px. Säädettävissä juurikirjasinkoolla.' },
    { q: L, a: LA },
  ],
});

fix('pt-to-px', {
  basic: {
    title: 'Milloin pisteet muunnetaan pikseleiksi?',
    html: '<p class="text-mid mb-4">Piste (pt) on typografinen painoyksikkö: 1 pt = 1/72 tuumaa. Pikselit (px) ovat näyttöyksiköitä. 96 PPI:llä: 1 pt = 1,333 px.</p><p class="text-mid mb-4">12 pt = 16 px (selaimen oletus), 10 pt = 13,3 px.</p><p class="text-mid">Kaikki laskelmat suoritetaan paikallisesti selaimessasi.</p>',
  },
  howTo: H,
  diff: D,
  when: {
    title: 'Milloin tämä muunnin on hyödyllinen?',
    items: [
      { t: 'Verkkosuunnittelu', d: 'Muunna painokirjasinkoot CSS:ksi: 12 pt = 16 px.' },
      { t: 'Dokumenttimuunnos', d: 'Wordista/PDF:stä verkkoon.' },
      { t: 'Sähköpostimallit', d: 'Sähköpostiohjelmat renderöivät pt:n ja px:n eri tavalla.' },
      { t: 'Typografia', d: 'Ymmärrä painon (pt) ja näytön (px) suhde.' },
    ],
  },
  info1: { title: 'Miten muunnos toimii?', html: '<p class="text-mid mb-4">1 piste = 1/72 tuumaa. 96 PPI:llä: 1 pt = 96/72 = 1,333 px. Kaava: px = pt × PPI / 72.</p>' },
  info2: {
    title: 'Käytännön vinkkejä',
    html: '<ul class="list-disc pl-5 space-y-2 text-mid"><li>Selaimen oletus: 12 pt = 16 px = 1 rem.</li><li>8 pt = 10,7 px. 10 pt = 13,3 px. 11 pt = 14,7 px.</li><li>Word oletus: 11 pt = 14,7 px.</li></ul>',
  },
  cmp: {
    title: 'Piste (pt) vs Pikseli (px)',
    label: 'Ominaisuus',
    u1: 'Piste (pt)',
    u2: 'Pikseli (px)',
    f: [
      { n: 'Määritelmä', v1: '1/72 tuumaa', v2: '1/96 tuumaa (CSS)' },
      { n: 'Käytetään', v1: 'Paino, Word, PDF', v2: 'Verkko, CSS, näytöt' },
      { n: '12 pt =', v1: '12 pt', v2: '16 px' },
      { n: 'Leipäteksti', v1: '10–12 pt', v2: '14–18 px' },
      { n: 'Otsikko', v1: '18–24 pt', v2: '24–32 px' },
    ],
  },
  faq: [
    { q: 'Kuinka monta px on 12 pt?', a: '12 pt = 16 px 96 PPI:llä.' },
    { q: L, a: LA },
  ],
});

fix('tw-to-px', {
  basic: {
    title: 'Milloin Tailwind-yksiköt muunnetaan pikseleiksi?',
    html: '<p class="text-mid mb-4">Tailwind CSS käyttää väliasteikkoa, jossa jokainen yksikkö = 0,25 rem = 4 px (juurella 16px). p-4 = 1 rem = 16 px.</p><p class="text-mid">Kaikki laskelmat suoritetaan paikallisesti selaimessasi.</p>',
  },
  howTo: H,
  diff: D,
  when: {
    title: 'Milloin tämä muunnin on hyödyllinen?',
    items: [
      { t: 'CSS-virheiden selvitys', d: 'p-6 = 24 px, m-8 = 32 px, gap-4 = 16 px.' },
      { t: 'Suunnittelun luovutus', d: 'Käännä Tailwind-luokat pikseleiksi suunnittelijoille.' },
      { t: 'Responsiivinen suunnittelu', d: 'sm = 640px, md = 768px, lg = 1024px.' },
      { t: 'Konfigurointi', d: 'Suunnittele mukautettuja asteikkoja.' },
    ],
  },
  info1: { title: 'Miten Tailwind spacing toimii?', html: '<p class="text-mid mb-4">Tailwind spacing = arvo × 0,25 rem. Juurella 16px: spacing × 4 = px.</p>' },
  info2: {
    title: 'Käytännön vinkkejä',
    html: '<ul class="list-disc pl-5 space-y-2 text-mid"><li>p-1 = 4px, p-2 = 8px, p-4 = 16px, p-8 = 32px.</li><li>w-4 = 16px, w-12 = 48px, w-64 = 256px.</li><li>Breakpointit: sm ≥ 640px, md ≥ 768px, lg ≥ 1024px, xl ≥ 1280px.</li></ul>',
  },
  cmp: {
    title: 'Tailwind spacing-asteikko',
    label: 'Tailwind',
    u1: 'rem',
    u2: 'px (juuri 16px)',
    f: [
      { n: '1', v1: '0,25rem', v2: '4px' },
      { n: '4', v1: '1rem', v2: '16px' },
      { n: '8', v1: '2rem', v2: '32px' },
      { n: '16', v1: '4rem', v2: '64px' },
      { n: '64', v1: '16rem', v2: '256px' },
    ],
  },
  faq: [
    { q: 'Kuinka monta pikseliä on p-4?', a: 'p-4 = 1rem = 16px.' },
    { q: 'Mitkä ovat Tailwindin breakpointit?', a: 'sm = 640px, md = 768px, lg = 1024px, xl = 1280px, 2xl = 1536px.' },
    { q: L, a: LA },
  ],
});

fix('vw-to-px', {
  basic: {
    title: 'Milloin vw muunnetaan pikseleiksi?',
    html: '<p class="text-mid mb-4">CSS-yksikkö vw = 1% viewport-leveydestä. 1920px:llä: 1vw = 19,2px, 50vw = 960px, 100vw = 1920px.</p><p class="text-mid">Kaikki laskelmat suoritetaan paikallisesti selaimessasi.</p>',
  },
  howTo: H,
  diff: D,
  when: {
    title: 'Milloin tämä muunnin on hyödyllinen?',
    items: [
      { t: 'Responsiivinen suunnittelu', d: '50vw = 960px 1920px:llä.' },
      { t: 'Joustava typografia', d: 'font-size: 2,5vw = 48px 1920px:llä.' },
      { t: 'Asettelun virheiden selvitys', d: 'Tarkista vw-asettelut breakpointeilla.' },
      { t: 'Dokumentointi', d: 'Muunna vw pikseleiksi kohdenäytöille.' },
    ],
  },
  info1: { title: 'Miten muunnos toimii?', html: '<p class="text-mid mb-4">px = vw × viewport-leveys / 100.</p><p class="text-mid">1920px:llä: 1vw = 19,2px. 375px:llä (iPhone): 1vw = 3,75px.</p>' },
  info2: {
    title: 'Käytännön vinkkejä',
    html: '<ul class="list-disc pl-5 space-y-2 text-mid"><li>100vw sisältää vierityspalkin. Käytä width: 100% sisältöleveydeksi.</li><li>Joustava typografia: font-size: clamp(1rem, 2,5vw, 2rem).</li><li>Viewportit: 375px (iPhone), 768px (iPad), 1920px (työpöytä).</li></ul>',
  },
  cmp: {
    title: 'vw eri viewport-leveyksillä',
    label: 'vw',
    u1: '1920px:llä',
    u2: '375px:llä',
    f: [
      { n: '1vw', v1: '19,2px', v2: '3,75px' },
      { n: '10vw', v1: '192px', v2: '37,5px' },
      { n: '50vw', v1: '960px', v2: '187,5px' },
      { n: '100vw', v1: '1920px', v2: '375px' },
      { n: '2,5vw', v1: '48px', v2: '9,4px' },
    ],
  },
  faq: [
    { q: 'Kuinka monta px on 1vw?', a: '1vw = 1% viewport-leveydestä. 1920px:llä: 19,2px.' },
    { q: L, a: LA },
  ],
});

fix('cm-to-px-dpi', {
  basic: {
    title: 'Milloin cm muunnetaan pikseleiksi?',
    html: '<p class="text-mid mb-4">Painosuunnittelu käyttää senttimetrejä, digitaalikuvat pikseleitä. Muunnos riippuu DPI:stä: Pikselit = cm × DPI / 2,54.</p><p class="text-mid mb-4">300 DPI:llä: 10 cm = 1 181 px, A4-leveys (21 cm) = 2 480 px.</p><p class="text-mid">Kaikki laskelmat suoritetaan paikallisesti selaimessasi.</p>',
  },
  howTo: H,
  diff: D,
  when: {
    title: 'Milloin tämä muunnin on hyödyllinen?',
    items: [
      { t: 'Painosuunnittelu', d: 'A4 300 DPI:llä = 2 480 × 3 508 px.' },
      { t: 'Suurkuva', d: 'Banderollit ja julisteet: 150 DPI.' },
      { t: 'Verkkografiikka', d: 'Näyttöresoluutio 72–96 DPI.' },
      { t: 'Valokuvaus', d: 'Tarkista riittääkö kameran resoluutio painokokoon.' },
    ],
  },
  info1: {
    title: 'Miten muunnos toimii?',
    html: '<p class="text-mid mb-4">Pikselit = cm × DPI / 2,54. 300 DPI:llä: 1 cm = 118,11 px.</p><p class="text-mid">Enemmän DPI = enemmän px/cm = terävämpi paino.</p>',
  },
  info2: {
    title: 'Käytännön vinkkejä',
    html: '<ul class="list-disc pl-5 space-y-2 text-mid"><li>300 DPI: A4 = 2 480 × 3 508 px.</li><li>150 DPI: A2-juliste = 2 480 × 3 508 px.</li><li>72 DPI: 10 cm = 283 px.</li></ul>',
  },
  cmp: {
    title: 'DPI-resoluutiot vertailussa',
    label: 'Ominaisuus',
    u1: '300 DPI (paino)',
    u2: '72 DPI (näyttö)',
    f: [
      { n: '10 cm', v1: '1 181 px', v2: '283 px' },
      { n: 'A4 leveys', v1: '2 480 px', v2: '595 px' },
      { n: 'A4 korkeus', v1: '3 508 px', v2: '842 px' },
      { n: 'Käyttö', v1: 'Ammattimainen paino', v2: 'Verkkografiikka' },
      { n: 'Laatu', v1: 'Terävä kaikissa koissa', v2: 'Vain näytölle' },
    ],
  },
  faq: [
    { q: 'Kuinka monta px on 1 cm 300 DPI:llä?', a: '1 cm 300 DPI:llä = 118,11 px.' },
    { q: L, a: LA },
  ],
});

fix('mm-to-px-dpi', {
  basic: {
    title: 'Milloin mm muunnetaan pikseleiksi?',
    html: '<p class="text-mid mb-4">Tarkkuustyö mittaa millimetreissä. Digitaalikuville: Pikselit = mm × DPI / 25,4.</p><p class="text-mid mb-4">300 DPI:llä: 1 mm = 11,81 px, käyntikortin leveys (85 mm) = 1 004 px.</p><p class="text-mid">Kaikki laskelmat suoritetaan paikallisesti selaimessasi.</p>',
  },
  howTo: H,
  diff: D,
  when: {
    title: 'Milloin tämä muunnin on hyödyllinen?',
    items: [
      { t: 'Pakkaussuunnittelu', d: 'Pakkausmitat mm:ssä. Etiketti 100 mm = 1 181 px.' },
      { t: 'Käyntikortit', d: '85 × 55 mm 300 DPI:llä = 1 004 × 650 px (+ leikkausvara).' },
      { t: 'Etiketit', d: 'Tarkat muunnokset mm:stä px:iin.' },
      { t: '3D-tulostus', d: 'Muunna 3D-mitat (mm) tekstuuriresoluutioksi (px).' },
    ],
  },
  info1: {
    title: 'Miten muunnos toimii?',
    html: '<p class="text-mid mb-4">Pikselit = mm × DPI / 25,4. 300 DPI:llä: 1 mm = 11,811 px.</p><p class="text-mid">Leikkausvara: lisää 3 mm joka puolelle.</p>',
  },
  info2: {
    title: 'Käytännön vinkkejä',
    html: '<ul class="list-disc pl-5 space-y-2 text-mid"><li>Käyntikortti: 85 × 55 mm + 3 mm leikkausvara = 91 × 61 mm = 1 075 × 720 px.</li><li>Etiketti: 50 × 25 mm 300 DPI:llä = 591 × 295 px.</li></ul>',
  },
  cmp: {
    title: 'mm pikseleihin eri DPI:llä',
    label: 'Ominaisuus',
    u1: '300 DPI',
    u2: '600 DPI',
    f: [
      { n: '1 mm', v1: '11,81 px', v2: '23,62 px' },
      { n: '10 mm', v1: '118 px', v2: '236 px' },
      { n: '85 mm', v1: '1 004 px', v2: '2 008 px' },
      { n: 'Käyttö', v1: 'Normaali paino', v2: 'Taide / lääketiede' },
      { n: 'Tiedostokoko', v1: 'Normaali', v2: '4× suurempi' },
    ],
  },
  faq: [
    { q: 'Kuinka monta px on 1 mm 300 DPI:llä?', a: '1 mm 300 DPI:llä = 11,811 px.' },
    { q: L, a: LA },
  ],
});

console.log('\nFI Batch 2a: 8 tools translated to Finnish (total: 25/34)');
