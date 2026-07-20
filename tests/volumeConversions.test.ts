import { describe, it, expect } from 'vitest';
import { getUnitLabel } from '@/lib/tools/unitLabels';
import {
  getUnitConversion,
  UNIT_CONVERSIONS,
} from '@/lib/tools/units/conversions';
import { parseLocaleNumber } from '@/lib/tools/units/parseLocaleNumber';

const LOCALES = ['pl', 'en', 'de', 'es', 'fr', 'pt', 'it', 'cs'];

const US_FL_OZ_IN_ML = 29.5735295625;
const UK_FL_OZ_IN_ML = 28.4130625;

const mlToOz = getUnitConversion('mlToOz')!;
const ozToMl = getUnitConversion('ozToMl')!;

const variantOf = (config: typeof mlToOz, value: 'us' | 'uk') =>
  config.variantField!.options.find(o => o.value === value)!;

describe('ml/oz converter config', () => {
  it('registers both directions as volume and points them at each other', () => {
    expect(mlToOz.category).toBe('volume');
    expect(ozToMl.category).toBe('volume');
    expect(mlToOz.reverseToolKey).toBe('ozToMl');
    expect(ozToMl.reverseToolKey).toBe('mlToOz');
  });

  it('defaults to the US ounce, which is the dominant search intent', () => {
    expect(mlToOz.variantField!.defaultValue).toBe('us');
    expect(ozToMl.variantField!.defaultValue).toBe('us');
  });

  it('puts the ounce suffix on the field that actually holds ounces', () => {
    expect(mlToOz.variantField!.appliesTo).toBe('target');
    expect(ozToMl.variantField!.appliesTo).toBe('source');
  });

  it('keeps config-level convert in sync with the default variant', () => {
    // The component falls back to config.convert before a variant is picked,
    // so a drift here would silently change the default result.
    for (const config of [mlToOz, ozToMl]) {
      const fallback = config.convert(100);
      const defaultVariant = variantOf(config, 'us').convert(100);
      expect(fallback).toBeCloseTo(defaultVariant, 10);
    }
  });
});

describe('US fluid ounce conversion', () => {
  it('converts 1 US fl oz to 29.57 ml, not 30', () => {
    // The single most-asked PAA question ("Is 1 oz equal to 30 ml?").
    const ml = variantOf(ozToMl, 'us').convert(1);
    expect(ml).toBeCloseTo(29.5735, 4);
    expect(ml).not.toBeCloseTo(30, 1);
  });

  it.each([
    [750, 25.36], // wine bottle
    [500, 16.91],
    [100, 3.38], // hand-luggage liquid limit
    [355, 12.0], // soda can
    [240, 8.12], // US cup
  ])('converts %i ml to %f US fl oz', (ml, expected) => {
    expect(variantOf(mlToOz, 'us').convert(ml)).toBeCloseTo(expected, 2);
  });

  it.each([
    [8, 236.59], // US cup
    [16, 473.18], // US pint
    [12, 354.88], // can
    [3, 88.72], // TSA carry-on limit
  ])('converts %i US fl oz to %f ml', (oz, expected) => {
    expect(variantOf(ozToMl, 'us').convert(oz)).toBeCloseTo(expected, 2);
  });
});

describe('UK (Imperial) fluid ounce conversion', () => {
  it('is a genuinely different number from the US ounce', () => {
    const us = variantOf(mlToOz, 'us').convert(750);
    const uk = variantOf(mlToOz, 'uk').convert(750);
    expect(uk).toBeCloseTo(26.4, 2);
    expect(us).toBeCloseTo(25.36, 2);
    // ~4% apart — the whole reason the selector exists.
    expect(Math.abs(uk - us)).toBeGreaterThan(1);
  });

  it.each([
    [100, 3.52],
    [500, 17.6],
    [750, 26.4],
  ])('converts %i ml to %f UK fl oz', (ml, expected) => {
    expect(variantOf(mlToOz, 'uk').convert(ml)).toBeCloseTo(expected, 2);
  });

  it('converts 1 UK fl oz to 28.41 ml', () => {
    expect(variantOf(ozToMl, 'uk').convert(1)).toBeCloseTo(28.4131, 4);
  });
});

describe('round-tripping', () => {
  it.each(['us', 'uk'] as const)(
    'reverseConvert undoes convert exactly (%s)',
    variant => {
      for (const value of [1, 8, 16, 33.3, 750, 0.5]) {
        const there = variantOf(mlToOz, variant).convert(value);
        const back = variantOf(mlToOz, variant).reverseConvert(there);
        expect(back).toBeCloseTo(value, 8);
      }
    },
  );

  it('mlToOz and ozToMl are true inverses of one another', () => {
    for (const variant of ['us', 'uk'] as const) {
      const oz = variantOf(mlToOz, variant).convert(500);
      expect(variantOf(ozToMl, variant).convert(oz)).toBeCloseTo(500, 8);
    }
  });
});

describe('hostile / careless user input', () => {
  it('survives zero and negative numbers without exploding', () => {
    expect(variantOf(mlToOz, 'us').convert(0)).toBe(0);
    expect(Number.isFinite(variantOf(mlToOz, 'us').convert(-100))).toBe(true);
  });

  it('yields a non-finite result for non-numeric junk rather than a wrong number', () => {
    // The component guards with isNaN/isFinite before showing anything.
    const junk = parseLocaleNumber('abc', 'pl');
    expect(Number.isNaN(junk)).toBe(true);
    expect(Number.isNaN(variantOf(mlToOz, 'us').convert(junk))).toBe(true);
  });

  it('handles absurdly large volumes without losing precision to Infinity', () => {
    const huge = variantOf(mlToOz, 'us').convert(1e12);
    expect(Number.isFinite(huge)).toBe(true);
    expect(huge).toBeCloseTo(1e12 / US_FL_OZ_IN_ML, 0);
  });

  it('treats a comma decimal the same as a period, per locale', () => {
    // Regression guard: the comma-decimal bug that broke every unit converter.
    expect(parseLocaleNumber('33,3', 'pl')).toBeCloseTo(33.3, 10);
    expect(parseLocaleNumber('33.3', 'en')).toBeCloseTo(33.3, 10);
  });
});

describe('exact definitions are not silently rounded', () => {
  it('uses the exact ml definitions of both ounces', () => {
    expect(variantOf(ozToMl, 'us').convert(1)).toBe(US_FL_OZ_IN_ML);
    expect(variantOf(ozToMl, 'uk').convert(1)).toBe(UK_FL_OZ_IN_ML);
  });
});

describe('labels', () => {
  it('has every ml/oz label translated in all 8 locales', () => {
    const keys = [
      'milliliters',
      'fluidOunces',
      'ounceSystem',
      'ounceSystemUs',
      'ounceSystemUk',
    ];
    for (const key of keys) {
      for (const locale of LOCALES) {
        const label = getUnitLabel(key, locale);
        // getUnitLabel echoes the key back when a translation is missing.
        expect(label, `${key} missing for ${locale}`).not.toBe(key);
        expect(label.length).toBeGreaterThan(0);
      }
    }
  });

  it('spells out which ounce each variant means in its suffix', () => {
    expect(variantOf(mlToOz, 'us').suffix).toContain('US');
    expect(variantOf(mlToOz, 'uk').suffix).toContain('UK');
  });
});

describe('no regression for converters without a variant', () => {
  it('gives a variantField to exactly the ml/oz pair and the data-size group', () => {
    const withVariant = UNIT_CONVERSIONS.filter(c => c.variantField).map(
      c => c.toolKey,
    );
    expect([...withVariant].sort((a, b) => a.localeCompare(b))).toEqual([
      'bytesConverter',
      'gbToKb',
      'gbToMb',
      'gbToTb',
      'kbToB',
      'kbToGb',
      'kbToMb',
      'kbToTb',
      'mbToGb',
      'mbToKb',
      'mlToOz',
      'ozToMl',
      'tbToGb',
      'tbToKb',
    ]);
  });

  it('keeps an untouched converter (metersToFeet) exact', () => {
    const m2f = getUnitConversion('metersToFeet')!;
    expect(m2f.variantField).toBeUndefined();
    expect(m2f.convert(1)).toBeCloseTo(3.280839895, 8);
  });
});

const DATA_TOOL_KEYS = [
  'bytesConverter',
  'kbToB',
  'kbToMb',
  'mbToKb',
  'mbToGb',
  'gbToMb',
  'kbToGb',
  'gbToKb',
  'gbToTb',
  'tbToGb',
  'kbToTb',
  'tbToKb',
] as const;

const dataVariantOf = (
  toolKey: (typeof DATA_TOOL_KEYS)[number],
  value: 'binary' | 'decimal',
) =>
  getUnitConversion(toolKey)!.variantField!.options.find(
    o => o.value === value,
  )!;

describe('data-size standard toggle (binary vs decimal)', () => {
  it('defaults every data converter to binary', () => {
    for (const key of DATA_TOOL_KEYS) {
      expect(getUnitConversion(key)!.variantField!.defaultValue).toBe('binary');
    }
  });

  it('keeps the config-level factor in sync with the binary variant', () => {
    for (const key of DATA_TOOL_KEYS) {
      const config = getUnitConversion(key)!;
      expect(dataVariantOf(key, 'binary').convert(1234)).toBeCloseTo(
        config.convert(1234),
        6,
      );
    }
  });

  it('uses 1024 for binary and 1000 for decimal, one step up (KB→MB)', () => {
    expect(dataVariantOf('kbToMb', 'binary').convert(1024)).toBeCloseTo(1, 10);
    expect(dataVariantOf('kbToMb', 'decimal').convert(1000)).toBeCloseTo(1, 10);
  });

  it('uses 1024² / 1000², two steps up (KB→GB)', () => {
    expect(dataVariantOf('kbToGb', 'binary').convert(1048576)).toBeCloseTo(
      1,
      10,
    );
    expect(dataVariantOf('kbToGb', 'decimal').convert(1000000)).toBeCloseTo(
      1,
      10,
    );
  });

  it('uses 1024³ / 1000³, three steps up (KB→TB)', () => {
    expect(dataVariantOf('kbToTb', 'binary').convert(1073741824)).toBeCloseTo(
      1,
      8,
    );
    expect(dataVariantOf('kbToTb', 'decimal').convert(1000000000)).toBeCloseTo(
      1,
      8,
    );
  });

  it('multiply direction gives 1024 (binary) vs 1000 (decimal) — GB→MB', () => {
    expect(dataVariantOf('gbToMb', 'binary').convert(1)).toBeCloseTo(1024, 10);
    expect(dataVariantOf('gbToMb', 'decimal').convert(1)).toBeCloseTo(1000, 10);
  });

  it('reverseConvert undoes convert for both standards', () => {
    for (const key of ['kbToMb', 'gbToKb', 'tbToKb'] as const) {
      for (const std of ['binary', 'decimal'] as const) {
        const variant = dataVariantOf(key, std);
        expect(variant.reverseConvert(variant.convert(500))).toBeCloseTo(
          500,
          6,
        );
      }
    }
  });

  it('keeps the recognisable KB/MB suffix in both standards (no KiB relabel)', () => {
    expect(dataVariantOf('kbToMb', 'binary').suffix).toBe('MB');
    expect(dataVariantOf('kbToMb', 'decimal').suffix).toBe('MB');
    expect(dataVariantOf('gbToKb', 'binary').suffix).toBe('KB');
    expect(dataVariantOf('gbToKb', 'decimal').suffix).toBe('KB');
  });
});
