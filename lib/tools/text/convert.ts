import type { TextConversionType } from '@/types/tools/text-format-converter';

/**
 * Stable, translatable failure reasons. The UI maps each `code` to a
 * locale-aware message, so users never see a raw engine error like
 * "Unexpected token o in JSON at position 1" or a DOMParser dump.
 */
export type ConversionErrorCode =
  | 'invalidJson'
  | 'invalidXml'
  | 'invalidYaml'
  | 'jsonNotArray'
  | 'csvNoHeaders'
  | 'emptyInput';

export class ConversionError extends Error {
  readonly code: ConversionErrorCode;
  constructor(code: ConversionErrorCode) {
    super(code);
    this.name = 'ConversionError';
    this.code = code;
  }
}

/** Parse JSON, re-throwing the raw SyntaxError as a translatable code. */
function parseJsonOrThrow(input: string): unknown {
  try {
    return JSON.parse(input);
  } catch {
    throw new ConversionError('invalidJson');
  }
}

/** Strip BOM that editors / Excel may prepend to files */
function stripBom(s: string): string {
  return s.charCodeAt(0) === 0xfeff ? s.slice(1) : s;
}

export async function convertText(
  raw: string,
  type: TextConversionType,
): Promise<string> {
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
      let parsed: unknown;
      try {
        parsed = jsYaml.load(input);
      } catch {
        throw new ConversionError('invalidYaml');
      }
      if (parsed === undefined || parsed === null) return '{}';
      return JSON.stringify(parsed, null, 2);
    }
    case 'jsonToYaml': {
      const jsYaml = await import('js-yaml');
      const obj = parseJsonOrThrow(input);
      return jsYaml.dump(obj, { indent: 2, lineWidth: 120 });
    }
    case 'markdownToHtml': {
      const { marked } = await import('marked');
      marked.setOptions({ gfm: true, breaks: false });
      return await marked(input);
    }
    case 'htmlToMarkdown': {
      const TurndownService = (await import('turndown')).default;
      const { gfm, tables, strikethrough } =
        await import('turndown-plugin-gfm');
      const td = new TurndownService({
        headingStyle: 'atx',
        codeBlockStyle: 'fenced',
        emDelimiter: '*',
      });
      td.use([gfm, tables, strikethrough]);

      // Preserve content from block-level container elements (div, section, etc.)
      // Without this, turndown silently drops content inside containers with classes
      td.addRule('blockContainers', {
        filter: [
          'div',
          'section',
          'article',
          'aside',
          'header',
          'footer',
          'main',
          'nav',
          'figure',
          'figcaption',
          'details',
          'summary',
        ],
        replacement: (content: string) => {
          return content ? `\n\n${content.trim()}\n\n` : '';
        },
      });

      // Preserve content from inline elements (span, abbr, mark, etc.)
      td.addRule('inlineElements', {
        filter: [
          'span',
          'abbr',
          'cite',
          'dfn',
          'kbd',
          'samp',
          'var',
          'mark',
          'small',
          'time',
          'data',
          'ins',
          'del',
          'sub',
          'sup',
        ],
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
  const trimmed = csv.trim();
  if (!trimmed) throw new ConversionError('emptyInput');
  const firstLine = trimmed.split(/\r?\n/, 1)[0];
  const sep = detectSeparator(firstLine);
  const rows = parseCsv(trimmed, sep);
  if (rows.length === 0) throw new ConversionError('emptyInput');

  const headers = rows[0];
  if (headers.length === 0 || headers.every(h => !h))
    throw new ConversionError('csvNoHeaders');

  const dataRows = rows.slice(1).filter(r => r.some(v => v !== ''));
  // Header-only CSV returns empty array
  if (dataRows.length === 0) return JSON.stringify([], null, 2);

  const result = dataRows.map(values => {
    const obj: Record<string, string> = {};
    headers.forEach((h, i) => {
      obj[h] = values[i] ?? '';
    });
    return obj;
  });
  return JSON.stringify(result, null, 2);
}

interface CsvParseState {
  rows: string[][];
  row: string[];
  current: string;
  inQuotes: boolean;
}

function endCsvField(state: CsvParseState): void {
  state.row.push(state.current.trim());
  state.current = '';
}

function endCsvRow(state: CsvParseState): void {
  endCsvField(state);
  state.rows.push(state.row);
  state.row = [];
}

/** Returns the number of extra characters consumed (0 or 1, for `""`). */
function consumeQuotedCsvChar(
  state: CsvParseState,
  ch: string,
  next: string | undefined,
): number {
  if (ch === '"' && next === '"') {
    state.current += '"';
    return 1;
  }
  if (ch === '"') {
    state.inQuotes = false;
  } else {
    state.current += ch;
  }
  return 0;
}

function consumeUnquotedCsvChar(
  state: CsvParseState,
  ch: string,
  next: string | undefined,
  sep: string,
): void {
  if (ch === '"') {
    state.inQuotes = true;
  } else if (ch === sep) {
    endCsvField(state);
  } else if (ch === '\r') {
    // Bare \r (old Mac line endings) ends the row; \r\n defers to \n below.
    if (next !== '\n') endCsvRow(state);
  } else if (ch === '\n') {
    endCsvRow(state);
  } else {
    state.current += ch;
  }
}

/**
 * Parse a full CSV document into rows of fields, honoring RFC4180 quoting
 * rules (including newlines and escaped `""` quotes embedded inside a
 * quoted field) instead of splitting on newlines before quotes are known.
 */
function parseCsv(csv: string, sep: string): string[][] {
  const state: CsvParseState = {
    rows: [],
    row: [],
    current: '',
    inQuotes: false,
  };

  let i = 0;
  while (i < csv.length) {
    const ch = csv[i];
    const next = csv[i + 1];
    if (state.inQuotes) {
      i += 1 + consumeQuotedCsvChar(state, ch, next);
    } else {
      consumeUnquotedCsvChar(state, ch, next, sep);
      i += 1;
    }
  }

  endCsvRow(state);
  return state.rows;
}

function jsonToCsv(json: string): string {
  const data = parseJsonOrThrow(json);
  if (!Array.isArray(data)) throw new ConversionError('jsonNotArray');
  if (data.length === 0) return '';
  const first = data[0];
  if (typeof first !== 'object' || first === null || Array.isArray(first)) {
    throw new ConversionError('jsonNotArray');
  }
  // Collect all unique keys from every row
  const headerSet = new Set<string>();
  for (const row of data) {
    if (typeof row === 'object' && row !== null && !Array.isArray(row)) {
      Object.keys(row).forEach(k => headerSet.add(k));
    }
  }
  const headers = Array.from(headerSet);
  const lines = [headers.map(escapeCsvField).join(',')];
  for (const row of data) {
    const isPlainObjectRow =
      typeof row === 'object' && row !== null && !Array.isArray(row);
    const values = headers.map(h => {
      const raw = isPlainObjectRow
        ? (row as Record<string, unknown>)[h]
        : undefined;
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
  if (
    v.includes(',') ||
    v.includes('"') ||
    v.includes('\n') ||
    v.includes('\r') ||
    v.includes(';')
  ) {
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
  if (errorNode) throw new ConversionError('invalidXml');
  const result = xmlNodeToObj(doc.documentElement);
  return JSON.stringify(result, null, 2);
}

function parseXmlAttributes(node: Element): Record<string, string> {
  const attrs: Record<string, string> = {};
  for (let i = 0; i < node.attributes.length; i++) {
    const attr = node.attributes[i];
    attrs[`@${attr.name}`] = attr.value;
  }
  return attrs;
}

function buildXmlChildMap(children: ChildNode[]): Record<string, unknown[]> {
  const childMap: Record<string, unknown[]> = {};
  for (const child of children) {
    if (child.nodeType !== Node.ELEMENT_NODE) continue;
    const childObj = xmlNodeToObj(child as Element);
    const key = (child as Element).tagName;
    const val = childObj[key];
    if (!childMap[key]) childMap[key] = [];
    childMap[key].push(val);
  }
  return childMap;
}

function xmlNodeToObj(node: Element): Record<string, unknown> {
  const obj: Record<string, unknown> = {};

  if (node.attributes.length > 0) {
    Object.assign(obj, parseXmlAttributes(node));
  }

  const children = Array.from(node.childNodes);
  const textOnly = children.every(
    c =>
      c.nodeType === Node.TEXT_NODE || c.nodeType === Node.CDATA_SECTION_NODE,
  );

  if (textOnly) {
    const text = node.textContent?.trim() ?? '';
    if (Object.keys(obj).length === 0) {
      return { [node.tagName]: text } as Record<string, unknown>;
    }
    if (text) obj['#text'] = text;
    return { [node.tagName]: obj };
  }

  const childMap = buildXmlChildMap(children);
  for (const [key, vals] of Object.entries(childMap)) {
    obj[key] = vals.length === 1 ? vals[0] : vals;
  }

  return { [node.tagName]: obj };
}

function escapeXml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function jsonToXml(json: string): string {
  const obj = parseJsonOrThrow(json);
  const xml = objToXml(obj, 0);
  return `<?xml version="1.0" encoding="UTF-8"?>\n${xml}`;
}

function xmlChildEntryToString(
  ck: string,
  cv: unknown,
  pad: string,
  indent: number,
): string {
  if (Array.isArray(cv)) {
    const lines: string[] = [];
    for (const item of cv) {
      lines.push(
        `${pad}  <${ck}>`,
        objToXml(item, indent + 2),
        `${pad}  </${ck}>`,
      );
    }
    return lines.join('\n');
  }
  if (typeof cv === 'object' && cv !== null) {
    return [
      `${pad}  <${ck}>`,
      objToXml(cv, indent + 2),
      `${pad}  </${ck}>`,
    ].join('\n');
  }
  return `${pad}  <${ck}>${escapeXml(String(cv))}</${ck}>`;
}

function xmlObjectEntryToString(
  key: string,
  value: Record<string, unknown>,
  pad: string,
  indent: number,
): string {
  const attrs = Object.entries(value)
    .filter(([k]) => k.startsWith('@'))
    .map(([k, v]) => ` ${k.slice(1)}="${String(v)}"`)
    .join('');
  const textContent = value['#text'];
  const childEntries = Object.entries(value).filter(
    ([k]) => !k.startsWith('@') && k !== '#text',
  );

  if (childEntries.length === 0) {
    return `${pad}<${key}${attrs}>${escapeXml(String(textContent ?? ''))}</${key}>`;
  }

  const lines = [`${pad}<${key}${attrs}>`];
  for (const [ck, cv] of childEntries) {
    lines.push(xmlChildEntryToString(ck, cv, pad, indent));
  }
  lines.push(`${pad}</${key}>`);
  return lines.join('\n');
}

function xmlArrayEntryToString(
  key: string,
  value: unknown[],
  pad: string,
  indent: number,
): string {
  const lines: string[] = [];
  for (const item of value) {
    if (typeof item === 'object' && item !== null) {
      lines.push(
        `${pad}<${key}>`,
        objToXml(item, indent + 1),
        `${pad}</${key}>`,
      );
    } else {
      lines.push(`${pad}<${key}>${escapeXml(String(item))}</${key}>`);
    }
  }
  return lines.join('\n');
}

function xmlEntryToString(
  key: string,
  value: unknown,
  pad: string,
  indent: number,
): string {
  if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
    return xmlObjectEntryToString(
      key,
      value as Record<string, unknown>,
      pad,
      indent,
    );
  }
  if (Array.isArray(value)) {
    return xmlArrayEntryToString(key, value, pad, indent);
  }
  return `${pad}<${key}>${escapeXml(String(value))}</${key}>`;
}

function objToXml(obj: unknown, indent: number): string {
  const pad = '  '.repeat(indent);
  if (typeof obj !== 'object' || obj === null)
    return `${pad}${escapeXml(String(obj))}`;
  if (Array.isArray(obj))
    return obj.map(item => objToXml(item, indent)).join('\n');

  const entries = Object.entries(obj as Record<string, unknown>);
  const lines: string[] = [];

  for (const [key, value] of entries) {
    if (key.startsWith('@') || key === '#text') continue;
    lines.push(xmlEntryToString(key, value, pad, indent));
  }

  return lines.join('\n');
}
