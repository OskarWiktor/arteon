import { describe, it, expect } from 'vitest';
import {
  generateLoremIpsum,
  type LoremOptions,
} from '@/lib/tools/text/loremIpsum';

const SEED = 42;

function buildOptions(overrides: Partial<LoremOptions> = {}): LoremOptions {
  return {
    mode: 'paragraphs',
    count: 3,
    paragraphLength: 'medium',
    startWithLorem: false,
    outputFormat: 'plain',
    style: 'classic',
    ...overrides,
  };
}

describe('generateLoremIpsum', () => {
  it('jest deterministyczne dla tego samego seeda (ważne dla testów i podglądu na żywo)', () => {
    const a = generateLoremIpsum(buildOptions(), SEED);
    const b = generateLoremIpsum(buildOptions(), SEED);
    expect(a).toBe(b);
  });

  it('daje różny wynik dla różnych seedów', () => {
    const a = generateLoremIpsum(buildOptions(), 1);
    const b = generateLoremIpsum(buildOptions(), 2);
    expect(a).not.toBe(b);
  });

  for (const mode of [
    'paragraphs',
    'sentences',
    'words',
    'lists',
    'headings',
    'links',
    'table',
    'blockquotes',
    'definitions',
  ] as const) {
    it(`generuje niepustą treść dla mode="${mode}" (plain)`, () => {
      const result = generateLoremIpsum(
        buildOptions({ mode, outputFormat: 'plain' }),
        SEED,
      );
      expect(result.length).toBeGreaterThan(0);
    });

    it(`generuje niepustą treść dla mode="${mode}" (html)`, () => {
      const result = generateLoremIpsum(
        buildOptions({ mode, outputFormat: 'html' }),
        SEED,
      );
      expect(result.length).toBeGreaterThan(0);
    });
  }

  it('startWithLorem dodaje klasyczny opener tylko dla stylu "classic"', () => {
    const withLorem = generateLoremIpsum(
      buildOptions({
        mode: 'sentences',
        startWithLorem: true,
        style: 'classic',
      }),
      SEED,
    );
    expect(withLorem.toLowerCase()).toContain('lorem ipsum');

    const withoutLoremStyle = generateLoremIpsum(
      buildOptions({
        mode: 'sentences',
        startWithLorem: true,
        style: 'business',
      }),
      SEED,
    );
    expect(withoutLoremStyle.toLowerCase()).not.toContain('lorem ipsum');
  });

  it('count=1 (minimalna sensowna wartość) nie wywala się i daje treść', () => {
    const result = generateLoremIpsum(
      buildOptions({ mode: 'words', count: 1 }),
      SEED,
    );
    expect(result.length).toBeGreaterThan(0);
  });

  it('count=0 lub ujemny (dziwne dane od użytkownika) jest przycinany do minimum 1', () => {
    const zero = generateLoremIpsum(
      buildOptions({ mode: 'words', count: 0 }),
      SEED,
    );
    const negative = generateLoremIpsum(
      buildOptions({ mode: 'words', count: -5 }),
      SEED,
    );
    expect(zero.length).toBeGreaterThan(0);
    expect(negative.length).toBeGreaterThan(0);
  });

  it('bardzo duże count (np. literówka użytkownika 999999) jest przycinane do 9999, nie zawiesza generatora', () => {
    const result = generateLoremIpsum(
      buildOptions({ mode: 'words', count: 999999 }),
      SEED,
    );
    const wordCount = result.trim().split(/\s+/).length;
    expect(wordCount).toBeLessThanOrEqual(9999);
  });

  it('startWithLorem dla mode="words" wymusza dokładnie "lorem ipsum" jako pierwsze dwa słowa', () => {
    const result = generateLoremIpsum(
      buildOptions({ mode: 'words', count: 5, startWithLorem: true }),
      SEED,
    );
    const words = result.trim().split(/\s+/);
    expect(words[0]).toBe('lorem');
    expect(words[1]).toBe('ipsum');
  });

  it('startWithLorem dla mode="words" z count=1 nie wywala się (brak miejsca na "lorem ipsum")', () => {
    const result = generateLoremIpsum(
      buildOptions({ mode: 'words', count: 1, startWithLorem: true }),
      SEED,
    );
    expect(result.trim().split(/\s+/).length).toBe(1);
  });

  it('html dla mode="table" generuje poprawnie zagnieżdżoną strukturę <table>', () => {
    const result = generateLoremIpsum(
      buildOptions({ mode: 'table', count: 2, outputFormat: 'html' }),
      SEED,
    );
    expect(result).toContain('<table>');
    expect(result).toContain('<thead>');
    expect(result).toContain('<tbody>');
    expect(result).toContain('</table>');
  });

  it('plain dla mode="table" generuje tabelę Markdown z separatorem nagłówka', () => {
    const result = generateLoremIpsum(
      buildOptions({ mode: 'table', count: 2, outputFormat: 'plain' }),
      SEED,
    );
    const lines = result.split('\n');
    expect(lines[0].startsWith('|')).toBe(true);
    expect(lines[1]).toMatch(/^\|(\s*---\s*\|)+$/);
  });

  it('mode="definitions" w HTML zawiera <dl>/<dt>/<dd>', () => {
    const result = generateLoremIpsum(
      buildOptions({ mode: 'definitions', count: 2, outputFormat: 'html' }),
      SEED,
    );
    expect(result).toContain('<dl>');
    expect(result).toContain('<dt>');
    expect(result).toContain('<dd>');
  });

  it('działa dla każdego dostępnego stylu (nie tylko classic)', () => {
    const styles: LoremOptions['style'][] = [
      'classic',
      'hipster',
      'business',
      'polish',
      'bacon',
      'cupcake',
      'pirate',
      'legal',
    ];
    for (const style of styles) {
      const result = generateLoremIpsum(
        buildOptions({ mode: 'paragraphs', style }),
        SEED,
      );
      expect(result.length).toBeGreaterThan(0);
    }
  });

  it('styl "polish" z podanym locale używa lokalnego słownika bez błędów', () => {
    const result = generateLoremIpsum(
      buildOptions({ mode: 'sentences', style: 'polish', locale: 'pl' }),
      SEED,
    );
    expect(result.length).toBeGreaterThan(0);
  });

  it('styl "polish" z nieznanym/brakującym locale nie wywala się (fallback na domyślny bank słów)', () => {
    const result = generateLoremIpsum(
      buildOptions({
        mode: 'sentences',
        style: 'polish',
        locale: 'xx-not-real',
      }),
      SEED,
    );
    expect(result.length).toBeGreaterThan(0);
  });

  it('bez podanego seeda generator nadal działa (czas systemowy jako fallback)', () => {
    const result = generateLoremIpsum(
      buildOptions({ mode: 'words', count: 5 }),
    );
    expect(result.trim().split(/\s+/).length).toBe(5);
  });
});
