import { describe, expect, it } from 'vitest';
import { convertText } from '@/lib/tools/text/convert';

describe('csvToJson', () => {
  it('converts a simple CSV to JSON', async () => {
    const result = await convertText('name,age\nJohn,30\nJane,25', 'csvToJson');
    expect(JSON.parse(result)).toEqual([
      { name: 'John', age: '30' },
      { name: 'Jane', age: '25' },
    ]);
  });

  it('does not split a quoted field containing an embedded newline', async () => {
    const input = 'name,bio\nJohn,"Likes\nlong walks"\nJane,Simple';
    const result = await convertText(input, 'csvToJson');
    expect(JSON.parse(result)).toEqual([
      { name: 'John', bio: 'Likes\nlong walks' },
      { name: 'Jane', bio: 'Simple' },
    ]);
  });

  it('unescapes doubled quotes inside a quoted field', async () => {
    const input = 'quote\n"She said ""hi"" to me"';
    const result = await convertText(input, 'csvToJson');
    expect(JSON.parse(result)).toEqual([{ quote: 'She said "hi" to me' }]);
  });

  it('handles a quoted field containing the separator itself', async () => {
    const input = 'name,address\nJohn,"123 Main St, Apt 4"';
    const result = await convertText(input, 'csvToJson');
    expect(JSON.parse(result)).toEqual([
      { name: 'John', address: '123 Main St, Apt 4' },
    ]);
  });

  it('supports semicolon-separated CSV via auto-detection', async () => {
    const input = 'name;age\nJohn;30';
    const result = await convertText(input, 'csvToJson');
    expect(JSON.parse(result)).toEqual([{ name: 'John', age: '30' }]);
  });

  it('returns an empty array for a header-only CSV', async () => {
    const result = await convertText('name,age', 'csvToJson');
    expect(JSON.parse(result)).toEqual([]);
  });

  it('throws a typed emptyInput error for empty input', async () => {
    await expect(convertText('   ', 'csvToJson')).rejects.toMatchObject({
      code: 'emptyInput',
    });
  });

  it('handles CRLF line endings without losing rows', async () => {
    const input = 'name,age\r\nJohn,30\r\nJane,25';
    const result = await convertText(input, 'csvToJson');
    expect(JSON.parse(result)).toEqual([
      { name: 'John', age: '30' },
      { name: 'Jane', age: '25' },
    ]);
  });
});

describe('jsonToCsv', () => {
  it('converts a simple JSON array to CSV', async () => {
    const result = await convertText(
      '[{"name":"John","age":30},{"name":"Jane","age":25}]',
      'jsonToCsv',
    );
    expect(result).toBe('name,age\nJohn,30\nJane,25');
  });

  it('does not throw on a null element mixed into the array', async () => {
    const result = await convertText('[{"a":1},null,{"a":2}]', 'jsonToCsv');
    expect(result).toBe('a\n1\n\n2');
  });

  it('does not throw on a primitive element mixed into the array', async () => {
    const result = await convertText('[{"a":1},"oops",{"a":2}]', 'jsonToCsv');
    expect(result).toBe('a\n1\n\n2');
  });

  it('throws a typed jsonNotArray error for a top-level non-array value', async () => {
    await expect(convertText('{"a":1}', 'jsonToCsv')).rejects.toMatchObject({
      code: 'jsonNotArray',
    });
  });

  it('serializes nested objects/arrays as JSON strings within a cell', async () => {
    const result = await convertText('[{"a":1,"b":{"c":2}}]', 'jsonToCsv');
    expect(result).toBe('a,b\n1,"{""c"":2}"');
  });
});
