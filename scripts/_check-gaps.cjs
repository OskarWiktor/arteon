const fs = require('fs');
const path = require('path');

const dataDir = 'data';
const locales = fs.readdirSync(dataDir).filter(d => fs.statSync(path.join(dataDir, d)).isDirectory());
let issues = [];

for (const loc of locales) {
  const toolsDir = path.join(dataDir, loc, 'tools');
  if (!fs.existsSync(toolsDir)) continue;
  const files = fs.readdirSync(toolsDir).filter(f => f.endsWith('.json'));
  for (const f of files) {
    const fp = path.join(toolsDir, f);
    const j = JSON.parse(fs.readFileSync(fp, 'utf8'));
    const blocks = j.contentBlocks;
    if (!blocks || !Array.isArray(blocks)) continue;
    for (let i = 0; i < blocks.length - 1; i++) {
      const cur = blocks[i];
      const nxt = blocks[i + 1];
      if (cur.type !== 'gap' && nxt.type !== 'gap') {
        const curDesc = cur.type + (cur.title ? ' "' + cur.title + '"' : '');
        const nxtDesc = nxt.type + (nxt.title ? ' "' + nxt.title + '"' : '');
        issues.push(fp + ': missing gap between [' + i + '] ' + curDesc + ' and [' + (i + 1) + '] ' + nxtDesc);
      }
    }
  }
}

console.log('Total issues: ' + issues.length);
issues.forEach(x => console.log(x));
