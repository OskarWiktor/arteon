const fs = require('fs');
const path = require('path');
const { FORMATS, TITLES, REGIONAL } = require('./_converter-data.cjs');
const { generateIntroHtml } = require('./_converter-content-gen.cjs');
const { HOW_TO_STEPS, FEATURE_ITEMS, getUseCaseItems } = require('./_converter-features.cjs');
const { generateFaq, generateComparisonHtml, generateRegionalHtml } = require('./_converter-faq.cjs');

const targets = [
  ['pl', 'avif-to-png'], ['pl', 'bmp-to-webp'],
  ['de', 'jpg-to-png'], ['de', 'png-to-jpg'],
  ['fr', 'jpg-to-png'], ['fr', 'jpg-to-webp'], ['fr', 'png-to-jpg'],
  ['es', 'jpg-to-png'], ['es', 'png-to-jpg'],
];

for (const [locale, conv] of targets) {
  const parts = conv.split('-');
  const srcKey = parts[0];
  const tgtKey = parts[2];
  const fp = path.join(__dirname, '..', 'data', locale, 'tools', 'converter-' + conv + '.json');
  const d = JSON.parse(fs.readFileSync(fp, 'utf8'));
  const src = FORMATS[srcKey];
  const tgt = FORMATS[tgtKey];
  const S = src.name;
  const T = tgt.name;
  const t = TITLES[locale] || TITLES.en;
  const ogImage = d.metadata.ogImage;
  const gap = () => ({ type: 'gap', variant: 'line' });
  const stepsGen = HOW_TO_STEPS[locale] || HOW_TO_STEPS.en;
  const featGen = FEATURE_ITEMS[locale] || FEATURE_ITEMS.en;
  const existingContact = (d.contentBlocks || []).find(b => b.type === 'contactForm');
  const existingCarousel = (d.contentBlocks || []).find(b => b.type === 'toolsCarousel');

  const blocks = [
    { type: 'sectionBasic', title: t.why(S, T), html: generateIntroHtml(srcKey, tgtKey, locale), imageSrc: ogImage, imageAlt: S + ' to ' + T, variant: 'right' },
    gap(),
    { type: 'sectionSteps', title: t.how(S, T), grid: 'three', items: stepsGen(S, T) },
    gap(),
    { type: 'sectionInfo', title: t.comparison(S, T), html: generateComparisonHtml(srcKey, tgtKey, locale) },
    gap(),
    { type: 'sectionSteps', title: t.when(S, T), grid: 'two', items: getUseCaseItems(srcKey, tgtKey, locale) },
    gap(),
    { type: 'sectionSteps', title: t.features(S, T), grid: 'two', items: featGen(S, T) },
    gap(),
    { type: 'sectionInfo', title: t.regional(S, T), html: generateRegionalHtml(srcKey, tgtKey, locale) },
    gap(),
    { type: 'faq', title: t.faq(S, T), openByDefault: 0, items: generateFaq(srcKey, tgtKey, locale) },
    gap(),
    existingContact || { type: 'contactForm', title: t.contact, description: t.contactDesc, imageSrc: ogImage, imageAlt: 'Contact', defaultSubject: S + ' to ' + T },
    gap(),
    existingCarousel || { type: 'toolsCarousel', title: t.carousel },
  ];

  d.contentBlocks = blocks;
  fs.writeFileSync(fp, JSON.stringify(d, null, 2) + '\n', 'utf8');
  const secs = blocks.filter(b => b.type !== 'gap' && b.type !== 'toolsCarousel' && b.type !== 'contactForm').length;
  console.log('FIXED ' + locale.toUpperCase() + ' ' + conv + ': ' + secs + ' sections');
}
console.log('Done - ' + targets.length + ' files fixed');
