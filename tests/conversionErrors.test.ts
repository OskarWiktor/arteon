import { describe, expect, it } from 'vitest';
import { ConversionError, convertText } from '@/lib/tools/text/convert';

/**
 * The UI must never show a raw engine error (SyntaxError text, DOMParser
 * dump). Every known failure is thrown as a ConversionError with a stable
 * `code` the component maps to localized copy. XML failures use the same
 * mechanism but need a DOM, so they are covered by browser/E2E tests, not
 * this node-environment suite.
 */
describe('convertText typed errors', () => {
  async function codeOf(
    input: string,
    type: Parameters<typeof convertText>[1],
  ) {
    try {
      await convertText(input, type);
    } catch (err) {
      return err instanceof ConversionError ? err.code : `raw:${err}`;
    }
    return 'no-error';
  }

  it('throws invalidJson for malformed JSON instead of a raw SyntaxError', async () => {
    expect(await codeOf('{not json', 'jsonToCsv')).toBe('invalidJson');
    expect(await codeOf('{not json', 'jsonToXml')).toBe('invalidJson');
    expect(await codeOf('{not json', 'jsonToYaml')).toBe('invalidJson');
  });

  it('throws jsonNotArray when JSON→CSV input is not an array of objects', async () => {
    expect(await codeOf('{"a":1}', 'jsonToCsv')).toBe('jsonNotArray');
    expect(await codeOf('[1, 2, 3]', 'jsonToCsv')).toBe('jsonNotArray');
  });

  it('throws invalidYaml for malformed YAML', async () => {
    expect(await codeOf('a: b: c', 'yamlToJson')).toBe('invalidYaml');
  });

  it('throws emptyInput for blank CSV and csvNoHeaders for header-less CSV', async () => {
    expect(await codeOf('   ', 'csvToJson')).toBe('emptyInput');
    expect(await codeOf(',,\n1,2,3', 'csvToJson')).toBe('csvNoHeaders');
  });

  it('still converts valid input without throwing', async () => {
    expect(await codeOf('[{"a":1}]', 'jsonToCsv')).toBe('no-error');
  });
});
