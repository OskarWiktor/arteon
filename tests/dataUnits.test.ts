import { describe, it, expect } from 'vitest';
import {
  DATA_UNITS,
  convertDataSize,
  dataPrecisionFor,
  getDataUnit,
} from '@/lib/tools/units/dataUnits';

const SYMBOLS = ['B', 'KB', 'MB', 'GB', 'TB', 'PB'];

describe('data-size ladder', () => {
  it('exposes the full B → PB ladder in order', () => {
    expect(DATA_UNITS.map(u => u.symbol)).toEqual(SYMBOLS);
    expect(DATA_UNITS.map(u => u.power)).toEqual([0, 1, 2, 3, 4, 5]);
  });

  it('every unit resolves and has a label key', () => {
    for (const s of SYMBOLS) expect(getDataUnit(s)?.labelKey).toBeTruthy();
    expect(getDataUnit('XB')).toBeUndefined();
  });
});

describe('convertDataSize — binary (1024)', () => {
  it('converts one step up and down', () => {
    expect(convertDataSize(1024, 'B', 'KB', 'binary')).toBe(1);
    expect(convertDataSize(1, 'KB', 'B', 'binary')).toBe(1024);
    expect(convertDataSize(1, 'MB', 'KB', 'binary')).toBe(1024);
    expect(convertDataSize(1, 'PB', 'TB', 'binary')).toBe(1024);
  });

  it('converts across several steps', () => {
    expect(convertDataSize(1, 'GB', 'KB', 'binary')).toBe(1048576);
    expect(convertDataSize(1, 'TB', 'KB', 'binary')).toBe(1073741824);
    expect(convertDataSize(1, 'PB', 'B', 'binary')).toBe(1024 ** 5);
    expect(convertDataSize(1048576, 'KB', 'GB', 'binary')).toBe(1);
  });
});

describe('convertDataSize — decimal (1000)', () => {
  it('uses 1000 per step', () => {
    expect(convertDataSize(1000, 'B', 'KB', 'decimal')).toBe(1);
    expect(convertDataSize(1, 'GB', 'KB', 'decimal')).toBe(1000000);
    expect(convertDataSize(1, 'PB', 'B', 'decimal')).toBe(1e15);
  });

  it('differs from binary for the same input', () => {
    const bin = convertDataSize(1, 'GB', 'MB', 'binary');
    const dec = convertDataSize(1, 'GB', 'MB', 'decimal');
    expect(bin).toBe(1024);
    expect(dec).toBe(1000);
  });
});

describe('convertDataSize — any-to-any integrity', () => {
  it('same unit is identity in both standards', () => {
    for (const s of SYMBOLS) {
      expect(convertDataSize(42, s, s, 'binary')).toBe(42);
      expect(convertDataSize(42, s, s, 'decimal')).toBe(42);
    }
  });

  it('round-trips every pair in both directions', () => {
    for (const std of ['binary', 'decimal'] as const) {
      for (const a of SYMBOLS) {
        for (const b of SYMBOLS) {
          const there = convertDataSize(7, a, b, std);
          const back = convertDataSize(there, b, a, std);
          expect(back).toBeCloseTo(7, 6);
        }
      }
    }
  });

  it('rejects unknown units', () => {
    expect(Number.isNaN(convertDataSize(1, 'B', 'ZB', 'binary'))).toBe(true);
    expect(Number.isNaN(convertDataSize(1, 'ZB', 'B', 'binary'))).toBe(true);
  });

  it('handles zero and negatives without blowing up', () => {
    expect(convertDataSize(0, 'GB', 'B', 'binary')).toBe(0);
    expect(Number.isFinite(convertDataSize(-5, 'GB', 'MB', 'binary'))).toBe(
      true,
    );
  });
});

describe('dataPrecisionFor', () => {
  it('keeps tiny results visible instead of rounding them to 0', () => {
    const oneByteInPb = convertDataSize(1, 'B', 'PB', 'binary');
    const precision = dataPrecisionFor(oneByteInPb);
    expect(oneByteInPb.toFixed(precision)).not.toMatch(/^0\.?0*$/);
  });

  it('stays short for ordinary results', () => {
    expect(dataPrecisionFor(1024)).toBe(6);
    expect(dataPrecisionFor(1)).toBe(6);
  });

  it('is safe for zero and non-finite input', () => {
    expect(dataPrecisionFor(0)).toBe(2);
    expect(dataPrecisionFor(NaN)).toBe(2);
    expect(dataPrecisionFor(Infinity)).toBe(2);
  });

  it('never exceeds what toFixed accepts', () => {
    for (const v of [1e-20, 1e-9, 0.5, 1, 1e12]) {
      const p = dataPrecisionFor(v);
      expect(p).toBeGreaterThanOrEqual(0);
      expect(p).toBeLessThanOrEqual(20);
      expect(() => v.toFixed(p)).not.toThrow();
    }
  });
});
