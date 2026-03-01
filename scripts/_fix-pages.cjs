const fs = require('fs');
const path = require('path');

const base = path.join(__dirname, '..', 'app', '(pl)', 'narzedzia', '(tools)');
const dirs = fs.readdirSync(base).filter((d) => ['-na-avif', '-na-gif', '-na-tiff'].some((s) => d.includes(s)));

for (const d of dirs) {
  const p = path.join(base, d, 'page.tsx');
  if (!fs.existsSync(p)) continue;
  const c = fs.readFileSync(p, 'utf8');
  if (!c.includes('locale')) continue;

  const jsonMatch = c.match(/from '(@\/data\/pl\/tools\/[^']+)'/);
  if (!jsonMatch) {
    console.log('SKIP (no json match):', d);
    continue;
  }
  const jsonPath = jsonMatch[1];

  const fixed = `import ToolPageRenderer, { generateToolMetadata } from '@/components/sections/tools/ToolPageRenderer';
import data from '${jsonPath}';
import type { ToolPageData } from '@/types/tool-page';
import type { Metadata } from 'next';

const pageData = data as unknown as ToolPageData;

export const metadata: Metadata = generateToolMetadata(pageData);

export default function Page() {
  return <ToolPageRenderer data={pageData} />;
}
`;
  fs.writeFileSync(p, fixed, 'utf8');
  console.log('Fixed:', d);
}
