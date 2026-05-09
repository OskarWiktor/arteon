/**
 * Removes useMemo/useCallback wrappers when React Compiler is active.
 * Stateful parser that handles balanced parens, strings, and template literals.
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const DIRS = ['app', 'components', 'hooks', 'lib'];
const SKIP_FILES = [
  'scripts/', 'node_modules/', '.next/',
  // Already manually processed:
  'components/sections/tools/ImageResizeTool.tsx',
  'components/sections/tools/UnitConverter/UnitConverter.tsx',
  'components/sections/tools/PdfToImageConverter/PdfToImageConverter.tsx',
  'components/sections/tools/LoremIpsumGenerator.tsx',
  'components/sections/tools/ImageToPdfConverter/ImageToPdfConverter.tsx',
  'components/ui/StarRating.tsx',
];

function* walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(p);
    else if (/\.(tsx?|jsx?)$/.test(entry.name)) yield p;
  }
}

function findMatchingParen(src, openIdx) {
  let depth = 0;
  let inSingle = false, inDouble = false, inTemplate = false, inLineComment = false, inBlockComment = false;
  for (let i = openIdx; i < src.length; i++) {
    const c = src[i];
    const next = src[i + 1];
    if (inLineComment) {
      if (c === '\n') inLineComment = false;
      continue;
    }
    if (inBlockComment) {
      if (c === '*' && next === '/') { inBlockComment = false; i++; }
      continue;
    }
    if (inSingle) {
      if (c === '\\') { i++; continue; }
      if (c === "'") inSingle = false;
      continue;
    }
    if (inDouble) {
      if (c === '\\') { i++; continue; }
      if (c === '"') inDouble = false;
      continue;
    }
    if (inTemplate) {
      if (c === '\\') { i++; continue; }
      if (c === '`') inTemplate = false;
      continue;
    }
    if (c === '/' && next === '/') { inLineComment = true; i++; continue; }
    if (c === '/' && next === '*') { inBlockComment = true; i++; continue; }
    if (c === "'") { inSingle = true; continue; }
    if (c === '"') { inDouble = true; continue; }
    if (c === '`') { inTemplate = true; continue; }
    if (c === '(') depth++;
    if (c === ')') {
      depth--;
      if (depth === 0) return i;
    }
  }
  return -1;
}

// Find the top-level comma in the args of `useCallback(arg1, arg2)` — splits callback from deps array
function findTopLevelComma(src, startIdx, endIdx) {
  let depth = 0;
  let bracketDepth = 0;
  let braceDepth = 0;
  let inSingle = false, inDouble = false, inTemplate = false, inLineComment = false, inBlockComment = false;
  for (let i = startIdx; i < endIdx; i++) {
    const c = src[i];
    const next = src[i + 1];
    if (inLineComment) { if (c === '\n') inLineComment = false; continue; }
    if (inBlockComment) { if (c === '*' && next === '/') { inBlockComment = false; i++; } continue; }
    if (inSingle) { if (c === '\\') { i++; continue; } if (c === "'") inSingle = false; continue; }
    if (inDouble) { if (c === '\\') { i++; continue; } if (c === '"') inDouble = false; continue; }
    if (inTemplate) { if (c === '\\') { i++; continue; } if (c === '`') inTemplate = false; continue; }
    if (c === '/' && next === '/') { inLineComment = true; i++; continue; }
    if (c === '/' && next === '*') { inBlockComment = true; i++; continue; }
    if (c === "'") { inSingle = true; continue; }
    if (c === '"') { inDouble = true; continue; }
    if (c === '`') { inTemplate = true; continue; }
    if (c === '(') depth++;
    if (c === ')') depth--;
    if (c === '[') bracketDepth++;
    if (c === ']') bracketDepth--;
    if (c === '{') braceDepth++;
    if (c === '}') braceDepth--;
    if (c === ',' && depth === 0 && bracketDepth === 0 && braceDepth === 0) return i;
  }
  return -1;
}

function transform(src) {
  let result = src;
  let removedUseCallback = 0;
  let removedUseMemo = 0;

  // 1. Strip wrappers, multiple passes until stable
  for (const hookName of ['useCallback', 'useMemo']) {
    let changed = true;
    while (changed) {
      changed = false;
      const pattern = new RegExp(`\\b${hookName}\\s*\\(`, 'g');
      let match;
      while ((match = pattern.exec(result)) !== null) {
        const openParen = match.index + match[0].length - 1;
        const closeParen = findMatchingParen(result, openParen);
        if (closeParen < 0) continue;
        const argsStart = openParen + 1;
        const argsEnd = closeParen;
        const commaIdx = findTopLevelComma(result, argsStart, argsEnd);
        if (commaIdx < 0) continue;
        let inner = result.slice(argsStart, commaIdx).trim();
        // Strip trailing whitespace; inner is the callback/factory
        // For useMemo: factory is `() => X` — extract X
        if (hookName === 'useMemo') {
          // Match `() => X` or `() => { ... return X; ... }`
          const arrowMatch = inner.match(/^\(\s*\)\s*=>\s*/);
          if (!arrowMatch) continue; // not the simple shape, skip
          let body = inner.slice(arrowMatch[0].length).trim();
          // If body is `{ return X; }` (block with single return), unwrap
          if (body.startsWith('{')) {
            const trimmed = body.replace(/^{\s*/, '').replace(/\s*}$/, '').trim();
            const retMatch = trimmed.match(/^return\s+([\s\S]+);?\s*$/);
            if (retMatch) {
              body = retMatch[1].trim().replace(/;$/, '');
            } else {
              // Block has more than just a return — wrap in IIFE
              body = `(() => { ${trimmed} })()`;
            }
          }
          inner = body;
          removedUseMemo++;
        } else {
          // useCallback: `(args) => body` — leave as plain function expression
          // Just keep `inner` as is; it's still valid as a function expression on RHS
          removedUseCallback++;
        }

        const before = result.slice(0, match.index);
        const after = result.slice(closeParen + 1);
        result = before + inner + after;
        changed = true;
        break; // restart pattern search from beginning
      }
    }
  }

  // 2. Clean React imports — remove useMemo/useCallback (and trailing commas/spaces)
  result = result.replace(/import\s*\{([^}]*)\}\s*from\s*['"]react['"]\s*;?/g, (full, names) => {
    const before = names;
    const items = names.split(',').map((s) => s.trim()).filter(Boolean);
    const filtered = items.filter((n) => n !== 'useMemo' && n !== 'useCallback');
    if (filtered.length === items.length) return full;
    if (filtered.length === 0) return '';
    return `import { ${filtered.join(', ')} } from 'react';`;
  });

  // 3. Clean memo() wrapping — `export default memo(Foo)` or `export const Foo = memo(function ...)`
  // (skip — only StarRating uses it, already done manually)

  return { result, removedUseCallback, removedUseMemo };
}

function shouldSkip(rel) {
  return SKIP_FILES.some((s) => rel.replace(/\\/g, '/').includes(s));
}

let totalCb = 0, totalMm = 0, filesChanged = 0, filesScanned = 0;
const summary = [];
for (const dir of DIRS) {
  const full = path.join(ROOT, dir);
  if (!fs.existsSync(full)) continue;
  for (const file of walk(full)) {
    filesScanned++;
    const rel = path.relative(ROOT, file).replace(/\\/g, '/');
    if (shouldSkip(rel)) continue;
    const src = fs.readFileSync(file, 'utf8');
    if (!/use(Memo|Callback)\b/.test(src)) continue;
    try {
      const { result, removedUseCallback, removedUseMemo } = transform(src);
      if (result !== src) {
        fs.writeFileSync(file, result);
        totalCb += removedUseCallback;
        totalMm += removedUseMemo;
        filesChanged++;
        summary.push(`${rel}  -uC:${removedUseCallback}  -uM:${removedUseMemo}`);
      }
    } catch (e) {
      console.error(`SKIP (parse error): ${rel}: ${e.message}`);
    }
  }
}

summary.forEach((s) => console.log(s));
console.log(`\nFiles scanned: ${filesScanned}, changed: ${filesChanged}`);
console.log(`Removed useCallback: ${totalCb}, useMemo: ${totalMm}`);
