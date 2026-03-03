/**
 * Add ad blocks to blog articles approximately every 500 words.
 * First ad placed after the first richtext block.
 * Subsequent ads every ~500 words of richtext/code/table/quote content.
 * Existing ad blocks are removed first to avoid duplicates.
 *
 * Source: data/pl/blog/{category}.json
 */
const fs = require('fs');
const path = require('path');

const BLOG_DIR = path.join(__dirname, '..', 'data', 'pl', 'blog');
const WORD_INTERVAL = 500;

function stripHtml(html) {
  return html
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&[a-z]+;/gi, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function countWords(text) {
  if (!text) return 0;
  return text.split(/\s+/).filter(Boolean).length;
}

function getBlockWordCount(block) {
  switch (block.type) {
    case 'richtext':
      return countWords(stripHtml(block.html || ''));
    case 'code':
      return countWords(block.code || '');
    case 'table': {
      let text = (block.caption || '') + ' ' + (block.note || '');
      for (const col of block.columns || []) text += ' ' + (col.header || '');
      for (const row of block.rows || []) {
        for (const cell of row) text += ' ' + String(cell);
      }
      return countWords(text);
    }
    case 'quote':
      return countWords((block.text || '') + ' ' + (block.author || ''));
    default:
      return 0;
  }
}

const AD_BLOCK = { type: 'ad', slot: '9459125335', breakAfter: true };

const catFiles = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith('.json') && f !== '_index.json');

let totalArticles = 0;
let totalAdsAdded = 0;

for (const file of catFiles) {
  const filePath = path.join(BLOG_DIR, file);
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

  for (const article of data.articles) {
    totalArticles++;

    // Remove existing ad blocks
    const blocks = article.contentBlocks.filter((b) => b.type !== 'ad');

    // Build new block list with ads inserted
    const newBlocks = [];
    let wordsSinceLastAd = 0;
    let firstRichtextSeen = false;
    let adsInserted = 0;

    for (let i = 0; i < blocks.length; i++) {
      const block = blocks[i];
      const words = getBlockWordCount(block);

      newBlocks.push(block);
      wordsSinceLastAd += words;

      // First ad: after the first richtext block
      if (!firstRichtextSeen && block.type === 'richtext') {
        firstRichtextSeen = true;
        newBlocks.push({ ...AD_BLOCK });
        wordsSinceLastAd = 0;
        adsInserted++;
        continue;
      }

      // Subsequent ads: after ~500 words accumulate
      if (firstRichtextSeen && wordsSinceLastAd >= WORD_INTERVAL) {
        // Don't add ad after the very last block
        if (i < blocks.length - 1) {
          newBlocks.push({ ...AD_BLOCK });
          wordsSinceLastAd = 0;
          adsInserted++;
        }
      }
    }

    article.contentBlocks = newBlocks;
    totalAdsAdded += adsInserted;
    console.log(`  ${file}/${article.slug}: ${adsInserted} ads (${blocks.length} blocks)`);
  }

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n', 'utf8');
}

console.log(`\nTotal: ${totalArticles} articles, ${totalAdsAdded} ads added`);
