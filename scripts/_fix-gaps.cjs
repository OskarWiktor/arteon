const fs = require('fs');
const path = require('path');

const dataDir = 'data';
const locales = fs.readdirSync(dataDir).filter(d => fs.statSync(path.join(dataDir, d)).isDirectory());
let fixed = 0;
let filesFixed = 0;

for (const loc of locales) {
  const toolsDir = path.join(dataDir, loc, 'tools');
  if (!fs.existsSync(toolsDir)) continue;
  const files = fs.readdirSync(toolsDir).filter(f => f.endsWith('.json'));
  for (const f of files) {
    const fp = path.join(toolsDir, f);
    const j = JSON.parse(fs.readFileSync(fp, 'utf8'));
    const blocks = j.contentBlocks;
    if (!blocks || !Array.isArray(blocks)) continue;

    let fileFixed = false;
    // Work backwards to avoid index shifting
    for (let i = blocks.length - 2; i >= 0; i--) {
      const cur = blocks[i];
      const nxt = blocks[i + 1];
      if (cur.type !== 'gap' && nxt.type !== 'gap') {
        // Insert gap with variant "line" between them
        blocks.splice(i + 1, 0, { type: 'gap', variant: 'line' });
        fixed++;
        fileFixed = true;
      }
    }

    if (fileFixed) {
      filesFixed++;
      fs.writeFileSync(fp, JSON.stringify(j, null, 2) + '\n', 'utf8');
      console.log('Fixed: ' + fp);
    }
  }
}

console.log('\nTotal gaps inserted: ' + fixed);
console.log('Files modified: ' + filesFixed);
