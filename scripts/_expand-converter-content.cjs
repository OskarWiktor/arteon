/**
 * Expand thin converter content — ALL locales.
 * Reads locale text from _expand-locale-data.json, adds missing sections.
 */
const fs = require('fs');
const path = require('path');
const DATA_DIR = path.join(__dirname, '..', 'data');
const LOCALES = ['pl','en','de','es','fr','pt','it','ro','nl','hu','cs','sv','da','no','fi','el'];
const THRESHOLD = 9500;

const FMT = {
  jpg:{n:'JPG',qd:85,tr:false,web:true}, png:{n:'PNG',qd:null,tr:true,web:true},
  webp:{n:'WebP',qd:80,tr:true,web:true}, avif:{n:'AVIF',qd:80,tr:true,web:true},
  gif:{n:'GIF',qd:null,tr:true,web:true}, bmp:{n:'BMP',qd:null,tr:false,web:false},
  tiff:{n:'TIFF',qd:null,tr:true,web:false}, svg:{n:'SVG',qd:null,tr:true,web:true},
  heic:{n:'HEIC',qd:null,tr:false,web:false}, pdf:{n:'PDF',qd:85,tr:false,web:false},
};
function N(f){return FMT[f]?.n||f.toUpperCase();}
function parseFormats(fn){const m=fn.match(/converter-(\w+)-to-(\w+)\.json/);return m?{src:m[1],tgt:m[2]}:null;}

// Load locale data
const LD = JSON.parse(fs.readFileSync(path.join(__dirname, '_expand-locale-data.json'), 'utf8'));

function rep(s, src, tgt, def) {
  return s.replace(/\{S\}/g, N(src)).replace(/\{T\}/g, N(tgt)).replace(/\{D\}/g, def||'');
}

// Savings card data by source format
function savingsCards(src) {
  if (src==='bmp'||src==='tiff') return [['12 MB','890 KB','~93%'],['5 MB','320 KB','~94%'],['3.5 MB','180 KB','~95%']];
  if (src==='png') return [['1.2 MB','280 KB','~77%'],['800 KB','210 KB','~74%'],['150 KB','45 KB','~70%']];
  if (src==='heic') return [['4 MB','680 KB','~83%'],['2.5 MB','420 KB','~83%'],['1.5 MB','280 KB','~81%']];
  if (src==='gif') return [['2 MB','120 KB','~94%'],['500 KB','40 KB','~92%'],['200 KB','25 KB','~88%']];
  return [['2.4 MB','890 KB','~63%'],['500 KB','185 KB','~63%'],['350 KB','230 KB','~34%']];
}

// Build quality guide section
function mkQuality(locale, src, tgt) {
  const def = FMT[tgt]?.qd;
  if (!def) return null;
  const L = LD[locale] || LD.en;
  const q = L.quality;
  return {
    type:'sectionInfo',
    title: rep(q.title, src, tgt, def),
    html: `<p class="text-mid">${rep(q.p1,src,tgt,def)}</p><ul class="text-mid mt-3 ml-6 list-disc space-y-2"><li><strong>${rep(q.li1,src,tgt,def)}</strong></li><li><strong>${rep(q.li2,src,tgt,def)}</strong></li><li><strong>${rep(q.li3,src,tgt,def)}</strong></li></ul><p class="text-mid mt-3">${rep(q.p2,src,tgt,def)}</p>`
  };
}

// Build savings section
function mkSavings(locale, src, tgt) {
  const L = LD[locale] || LD.en;
  const s = L.savings;
  const cards = savingsCards(src);
  const lbls = [s.c1, s.c2, s.c3];
  const ch = cards.map((c,i) =>
    `<div class="rounded-lg border border-neutral-200 bg-white p-4"><p class="text-dark mb-2 font-semibold">${lbls[i]}</p><p class="text-light text-sm">${c[0]} → ${c[1]}</p><p class="text-success-icon mt-1 text-sm font-medium">${s.sv}: ${c[2]}</p></div>`
  ).join('');
  return {
    type:'sectionInfo',
    title: rep(s.title, src, tgt),
    html: `<p class="text-mid mb-4">${rep(s.intro,src,tgt)}</p><div class="mt-6 grid gap-4 md:grid-cols-3">${ch}</div><p class="text-light mt-4 text-sm">${s.fn}</p>`
  };
}

// Build SEO section
function mkSeo(locale, src, tgt) {
  if (!FMT[tgt]?.web && tgt!=='jpg' && tgt!=='png') return null;
  const L = LD[locale] || LD.en;
  const s = L.seo;
  return { type:'sectionInfo', title: s.title, html: rep(s.html, src, tgt) };
}

// Build tips section
function mkTips(locale, src, tgt) {
  const L = LD[locale] || LD.en;
  const t = L.tips;
  const trSupport = FMT[tgt]?.tr;
  const trTip = trSupport ? { title: rep(t.trYesT,src,tgt), desc: rep(t.trYesD,src,tgt) }
                          : { title: rep(t.trNoT,src,tgt), desc: rep(t.trNoD,src,tgt) };
  return {
    type:'sectionSteps', title: rep(t.title, src, tgt),
    description: t.desc, grid:'two',
    items: [
      { icon:'RiFileImageLine', title: t.i1t, description: rep(t.i1d,src,tgt) },
      { icon:'RiFlashlightLine', title: t.i2t, description: rep(t.i2d,src,tgt) },
      { icon:'RiPaletteLine', title: trTip.title, description: trTip.desc },
      { icon:'RiStackLine', title: t.i4t, description: rep(t.i4d,src,tgt) },
    ]
  };
}

// Build extra FAQ items
function mkFaq(locale, src, tgt) {
  const L = LD[locale] || LD.en;
  const f = L.faq;
  const items = [
    { question: rep(f.q1,src,tgt), answer: rep(f.a1,src,tgt) },
    { question: rep(f.q2,src,tgt), answer: rep(f.a2,src,tgt) },
    { question: rep(f.q3,src,tgt), answer: rep(f.a3,src,tgt) },
  ];
  return items;
}

// Expand short feature descriptions
function expandDescs(blocks, locale) {
  const L = LD[locale] || LD.en;
  const exp = L.featureExpansions || {};
  for (const b of blocks) {
    if (b.type !== 'sectionSteps' || !b.items) continue;
    for (const item of b.items) {
      for (const [short, long] of Object.entries(exp)) {
        if (item.description === short) { item.description = long; break; }
      }
    }
  }
}

// Main processing
function processFile(fp, locale) {
  const data = JSON.parse(fs.readFileSync(fp, 'utf8'));
  const blocks = data.contentBlocks || [];
  const len = JSON.stringify(blocks).length;
  if (len >= THRESHOLD) return false;

  const fmts = parseFormats(path.basename(fp));
  if (!fmts) return false;
  const {src, tgt} = fmts;

  const titles = new Set(blocks.map(b=>b.title||''));

  // Expand thin sectionBasic (1 paragraph → 3 paragraphs)
  const sbBlock = blocks.find(b => b.type === 'sectionBasic');
  if (sbBlock && sbBlock.html && (sbBlock.html.match(/<p /g) || []).length < 2) {
    const L = LD[locale] || LD.en;
    const sb = L.sectionBasicExpansion;
    if (sb) {
      sbBlock.html = rep(sb, src, tgt);
    }
  }
  const gap = {type:'gap',variant:'line'};
  const newBlocks = [];

  // Quality guide
  const qg = mkQuality(locale, src, tgt);
  if (qg && !Array.from(titles).some(t => t.includes(qg.title.split('—')[0]?.trim()))) {
    newBlocks.push(gap, qg);
  }

  // Savings — use full title prefix to avoid false positives (e.g. 'How' matching 'How to convert')
  const sv = mkSavings(locale, src, tgt);
  if (sv && !Array.from(titles).some(t => t === sv.title || t.includes('save') || t.includes('spar') || t.includes('zaoszczedzic') || t.includes('economis') || t.includes('risparmi') || t.includes('bespar') || t.includes('usetri') || t.includes('takarit') || t.includes('saast') || t.includes('exoikonomi'))) {
    newBlocks.push(gap, sv);
  }

  // SEO
  const seo = mkSeo(locale, src, tgt);
  if (seo && !Array.from(titles).some(t =>
    t.includes('Core Web Vitals') || t.includes('SEO') || t.includes('szybkosc') || t.includes('speed') || t.includes('Geschwindigkeit') || t.includes('velocidad') || t.includes('vitesse') || t.includes('velocidade') || t.includes('velocita') || t.includes('viteza') || t.includes('snelheid') || t.includes('sebesseg') || t.includes('rychlost') || t.includes('hastighet') || t.includes('nopeu')
  )) {
    newBlocks.push(gap, seo);
  }

  // Tips
  const tips = mkTips(locale, src, tgt);
  if (tips && !Array.from(titles).some(t =>
    t.includes('zwrocic uwage') || t.includes('Tips') || t.includes('Tipps') || t.includes('Consejos') || t.includes('Conseils') || t.includes('Dicas') || t.includes('Consigli') || t.includes('Sfaturi') || t.includes('Tipy') || t.includes('Vinkkeja') || t.includes('Symvoules')
  )) {
    newBlocks.push(gap, tips);
  }

  // Expand feature descriptions
  expandDescs(blocks, locale);

  // Insert before FAQ
  if (newBlocks.length > 0) {
    let faqIdx = blocks.findIndex(b => b.type === 'faq');
    if (faqIdx === -1) faqIdx = blocks.length - 4;
    const insertAt = faqIdx > 0 && blocks[faqIdx-1]?.type === 'gap' ? faqIdx - 1 : faqIdx;
    blocks.splice(insertAt, 0, ...newBlocks);
  }

  // Add extra FAQ items
  const faqBlock = blocks.find(b => b.type === 'faq');
  if (faqBlock && faqBlock.items && faqBlock.items.length < 7) {
    const extra = mkFaq(locale, src, tgt);
    const existQ = new Set(faqBlock.items.map(i => i.question));
    for (const item of extra) {
      if (!existQ.has(item.question) && faqBlock.items.length < 8) {
        faqBlock.items.push(item);
        existQ.add(item.question);
      }
    }
  }

  data.contentBlocks = blocks;
  fs.writeFileSync(fp, JSON.stringify(data, null, 2) + '\n');
  return true;
}

// Run
let totalFixed = 0;
for (const locale of LOCALES) {
  const dir = path.join(DATA_DIR, locale, 'tools');
  if (!fs.existsSync(dir)) continue;
  const files = fs.readdirSync(dir).filter(f => f.startsWith('converter-') && f.endsWith('.json'));
  let fixed = 0;
  for (const f of files) {
    if (processFile(path.join(dir, f), locale)) fixed++;
  }
  if (fixed > 0) console.log(`[${locale}] Expanded ${fixed}/${files.length} converter files`);
  totalFixed += fixed;
}
console.log(`\nTotal: ${totalFixed} files expanded across ${LOCALES.length} locales`);
