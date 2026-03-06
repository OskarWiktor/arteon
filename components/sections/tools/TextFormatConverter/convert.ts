import type { TextConversionType } from './types';

/** Strip BOM that editors / Excel may prepend to files */
function stripBom(s: string): string {
  return s.charCodeAt(0) === 0xfeff ? s.slice(1) : s;
}

export async function convertText(raw: string, type: TextConversionType): Promise<string> {
  const input = stripBom(raw);

  switch (type) {
    case 'csvToJson': {
      return csvToJson(input);
    }
    case 'jsonToCsv': {
      return jsonToCsv(input);
    }
    case 'xmlToJson': {
      return xmlToJson(input);
    }
    case 'jsonToXml': {
      return jsonToXml(input);
    }
    case 'yamlToJson': {
      const jsYaml = await import('js-yaml');
      const parsed = jsYaml.load(input);
      if (parsed === undefined || parsed === null) return '{}';
      return JSON.stringify(parsed, null, 2);
    }
    case 'jsonToYaml': {
      const jsYaml = await import('js-yaml');
      const obj = JSON.parse(input);
      return jsYaml.dump(obj, { indent: 2, lineWidth: 120 });
    }
    case 'markdownToHtml': {
      const { marked } = await import('marked');
      marked.setOptions({ gfm: true, breaks: false });
      return await marked(input);
    }
    case 'htmlToMarkdown': {
      const TurndownService = (await import('turndown')).default;
      const { gfm, tables, strikethrough } = await import('turndown-plugin-gfm');
      const td = new TurndownService({
        headingStyle: 'atx',
        codeBlockStyle: 'fenced',
        emDelimiter: '*',
      });
      td.use([gfm, tables, strikethrough]);

      // Preserve content from block-level container elements (div, section, etc.)
      // Without this, turndown silently drops content inside containers with classes
      td.addRule('blockContainers', {
        filter: ['div', 'section', 'article', 'aside', 'header', 'footer', 'main', 'nav', 'figure', 'figcaption', 'details', 'summary'],
        replacement: (content: string) => {
          return content ? `\n\n${content.trim()}\n\n` : '';
        },
      });

      // Preserve content from inline elements (span, abbr, mark, etc.)
      td.addRule('inlineElements', {
        filter: ['span', 'abbr', 'cite', 'dfn', 'kbd', 'samp', 'var', 'mark', 'small', 'time', 'data', 'ins', 'del', 'sub', 'sup'],
        replacement: (content: string) => content,
      });

      return td.turndown(input);
    }
    default:
      throw new Error(`Unknown conversion type: ${type}`);
  }
}

// ---------------------------------------------------------------------------
// CSV ↔ JSON helpers (pure JS)
// ---------------------------------------------------------------------------

function detectSeparator(firstLine: string): string {
  const candidates = [',', ';', '\t', '|'];
  let best = ',';
  let bestCount = 0;
  for (const sep of candidates) {
    const count = firstLine.split(sep).length - 1;
    if (count > bestCount) {
      bestCount = count;
      best = sep;
    }
  }
  return best;
}

function csvToJson(csv: string): string {
  const lines = csv.trim().split(/\r?\n/);
  if (lines.length === 0 || !lines[0].trim()) throw new Error('CSV input is empty');
  const sep = detectSeparator(lines[0]);
  const headers = parseCsvLine(lines[0], sep);
  if (headers.length === 0 || headers.every((h) => !h)) throw new Error('CSV has no valid headers');
  const dataLines = lines.slice(1).filter((l) => l.trim());
  // Header-only CSV returns empty array
  if (dataLines.length === 0) return JSON.stringify([], null, 2);
  const result = dataLines.map((line) => {
    const values = parseCsvLine(line, sep);
    const obj: Record<string, string> = {};
    headers.forEach((h, i) => {
      obj[h] = values[i] ?? '';
    });
    return obj;
  });
  return JSON.stringify(result, null, 2);
}

function parseCsvLine(line: string, sep: string): string[] {
  const result: string[] = [];
  let current = '';
  let inQuotes = false;
  for (let i = 0; i < line.length; i++) {
    const ch = line[i];
    if (inQuotes) {
      if (ch === '"' && line[i + 1] === '"') {
        current += '"';
        i++;
      } else if (ch === '"') {
        inQuotes = false;
      } else {
        current += ch;
      }
    } else {
      if (ch === '"') {
        inQuotes = true;
      } else if (ch === sep) {
        result.push(current.trim());
        current = '';
      } else {
        current += ch;
      }
    }
  }
  result.push(current.trim());
  return result;
}

function jsonToCsv(json: string): string {
  const data = JSON.parse(json);
  if (!Array.isArray(data)) throw new Error('JSON must be an array of objects');
  if (data.length === 0) return '';
  const first = data[0];
  if (typeof first !== 'object' || first === null || Array.isArray(first)) {
    throw new Error('JSON must be an array of objects');
  }
  // Collect all unique keys from every row
  const headerSet = new Set<string>();
  for (const row of data) {
    if (typeof row === 'object' && row !== null && !Array.isArray(row)) {
      Object.keys(row).forEach((k) => headerSet.add(k));
    }
  }
  const headers = Array.from(headerSet);
  const lines = [headers.map(escapeCsvField).join(',')];
  for (const row of data) {
    const values = headers.map((h) => {
      const raw = row[h];
      // Nested objects/arrays → JSON string; null/undefined → empty
      let v: string;
      if (raw === null || raw === undefined) v = '';
      else if (typeof raw === 'object') v = JSON.stringify(raw);
      else v = String(raw);
      return escapeCsvField(v);
    });
    lines.push(values.join(','));
  }
  return lines.join('\n');
}

function escapeCsvField(v: string): string {
  if (v.includes(',') || v.includes('"') || v.includes('\n') || v.includes('\r') || v.includes(';')) {
    return `"${v.replace(/"/g, '""')}"`;
  }
  return v;
}

// ---------------------------------------------------------------------------
// XML ↔ JSON helpers (DOMParser-based)
// ---------------------------------------------------------------------------

function xmlToJson(xml: string): string {
  const parser = new DOMParser();
  const doc = parser.parseFromString(xml, 'text/xml');
  const errorNode = doc.querySelector('parsererror');
  if (errorNode) throw new Error('Invalid XML: ' + errorNode.textContent?.slice(0, 200));
  const result = xmlNodeToObj(doc.documentElement);
  return JSON.stringify(result, null, 2);
}

function xmlNodeToObj(node: Element): Record<string, unknown> {
  const obj: Record<string, unknown> = {};

  // Attributes
  if (node.attributes.length > 0) {
    const attrs: Record<string, string> = {};
    for (let i = 0; i < node.attributes.length; i++) {
      const attr = node.attributes[i];
      attrs[`@${attr.name}`] = attr.value;
    }
    Object.assign(obj, attrs);
  }

  // Children
  const children = Array.from(node.childNodes);
  const textOnly = children.every((c) => c.nodeType === Node.TEXT_NODE || c.nodeType === Node.CDATA_SECTION_NODE);

  if (textOnly) {
    const text = node.textContent?.trim() ?? '';
    if (Object.keys(obj).length > 0) {
      if (text) obj['#text'] = text;
    } else {
      return { [node.tagName]: text } as Record<string, unknown>;
    }
    return { [node.tagName]: obj };
  }

  const childMap: Record<string, unknown[]> = {};
  for (const child of children) {
    if (child.nodeType === Node.ELEMENT_NODE) {
      const childObj = xmlNodeToObj(child as Element);
      const key = (child as Element).tagName;
      const val = childObj[key];
      if (!childMap[key]) childMap[key] = [];
      childMap[key].push(val);
    }
  }

  for (const [key, vals] of Object.entries(childMap)) {
    obj[key] = vals.length === 1 ? vals[0] : vals;
  }

  return { [node.tagName]: obj };
}

function escapeXml(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');
}

function jsonToXml(json: string): string {
  const obj = JSON.parse(json);
  const xml = objToXml(obj, 0);
  return `<?xml version="1.0" encoding="UTF-8"?>\n${xml}`;
}

function objToXml(obj: unknown, indent: number): string {
  const pad = '  '.repeat(indent);
  if (typeof obj !== 'object' || obj === null) return `${pad}${escapeXml(String(obj))}`;
  if (Array.isArray(obj)) return obj.map((item) => objToXml(item, indent)).join('\n');

  const entries = Object.entries(obj as Record<string, unknown>);
  const lines: string[] = [];

  for (const [key, value] of entries) {
    if (key.startsWith('@')) continue;
    if (key === '#text') continue;

    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      const attrs = Object.entries(value as Record<string, unknown>)
        .filter(([k]) => k.startsWith('@'))
        .map(([k, v]) => ` ${k.slice(1)}="${String(v)}"`)
        .join('');
      const textContent = (value as Record<string, unknown>)['#text'];
      const childEntries = Object.entries(value as Record<string, unknown>).filter(([k]) => !k.startsWith('@') && k !== '#text');

      if (childEntries.length === 0) {
        lines.push(`${pad}<${key}${attrs}>${escapeXml(String(textContent ?? ''))}</${key}>`);
      } else {
        lines.push(`${pad}<${key}${attrs}>`);
        for (const [ck, cv] of childEntries) {
          if (Array.isArray(cv)) {
            for (const item of cv) {
              lines.push(`${pad}  <${ck}>`);
              lines.push(objToXml(item, indent + 2));
              lines.push(`${pad}  </${ck}>`);
            }
          } else if (typeof cv === 'object' && cv !== null) {
            lines.push(`${pad}  <${ck}>`);
            lines.push(objToXml(cv, indent + 2));
            lines.push(`${pad}  </${ck}>`);
          } else {
            lines.push(`${pad}  <${ck}>${escapeXml(String(cv))}</${ck}>`);
          }
        }
        lines.push(`${pad}</${key}>`);
      }
    } else if (Array.isArray(value)) {
      for (const item of value) {
        if (typeof item === 'object' && item !== null) {
          lines.push(`${pad}<${key}>`);
          lines.push(objToXml(item, indent + 1));
          lines.push(`${pad}</${key}>`);
        } else {
          lines.push(`${pad}<${key}>${escapeXml(String(item))}</${key}>`);
        }
      }
    } else {
      lines.push(`${pad}<${key}>${escapeXml(String(value))}</${key}>`);
    }
  }

  return lines.join('\n');
}
