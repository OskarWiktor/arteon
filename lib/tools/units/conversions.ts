import type { ToolItemKey } from '@/types/tools/common';

type UnitCategory =
  | 'length'
  | 'weight'
  | 'temperature'
  | 'volume'
  | 'area'
  | 'speed'
  | 'pressure'
  | 'power'
  | 'css'
  | 'color'
  | 'data'
  | 'time'
  | 'math'
  | 'energy';

interface UnitField {
  label?: string;
  labelKey?: string;
  suffix: string;
  placeholder?: string;
}

interface ExtraField {
  key: string;
  label?: string;
  labelKey?: string;
  suffix: string;
  defaultValue: number;
  min?: number;
  max?: number;
  step?: number;
}

/** One selectable measurement system, with the factor and unit suffix it implies. */
export interface UnitVariantOption {
  value: string;
  labelKey: string;
  suffix: string;
  convert: (value: number, extra?: number) => number;
  reverseConvert: (value: number, extra?: number) => number;
}

/**
 * A choice between alternative conversion factors for the same pair of units.
 * A US fluid ounce (29.5735 ml) and an Imperial one (28.4131 ml) differ by
 * about 4%, so a single factor would silently hand one audience a wrong
 * number. When this is set the converter renders a selector and uses the
 * active option's `convert`/`reverseConvert` and `suffix` in place of the
 * config-level ones.
 */
export interface UnitVariantField {
  labelKey: string;
  /** Which field carries the variant's unit, so its suffix lands on the right input. */
  appliesTo: 'source' | 'target';
  options: UnitVariantOption[];
  defaultValue: string;
  /**
   * Optional one-line explainer rendered right under the selector, so the user
   * sees what the choice means (and where each option is used) without hunting
   * through the article below. Used by the data-size toggle to explain the
   * binary/decimal split at the point of decision.
   */
  helpKey?: string;
}

/** Exact millilitre definitions of the two fluid ounces still in everyday use. */
const FLUID_OUNCE_IN_ML = {
  US: 29.5735295625,
  IMPERIAL: 28.4130625,
} as const;

const CSS_CONVERSION_FACTORS = {
  PT_TO_PX: 1.333333,
  PX_TO_PT: 0.75,
  DEFAULT_BASE_FONT_SIZE: 16,
  DEFAULT_PARENT_FONT_SIZE: 16,
} as const;

const CONVERSION_PRECISION = {
  DEFAULT: 2,
  HIGH_PRECISION: 4,
  LOW_PRECISION: 1,
} as const;

const RANGE_CONSTRAINTS = {
  BASE_FONT_SIZE: { min: 1, max: 100, step: 1 },
  PARENT_FONT_SIZE: { min: 1, max: 200, step: 1 },
} as const;

export interface UnitConversionConfig {
  toolKey: ToolItemKey;
  category: UnitCategory;
  sourceField: UnitField;
  targetField: UnitField;
  extraField?: ExtraField;
  /**
   * Optional measurement-system selector. When absent the converter behaves
   * exactly as before and uses `convert`/`reverseConvert` below, which stay
   * the source of truth for the default variant.
   */
  variantField?: UnitVariantField;
  convert: (value: number, extra?: number) => number;
  reverseConvert: (value: number, extra?: number) => number;
  precision: number;
  swappable: boolean;
  /**
   * Dedicated reciprocal tool (e.g. cmToPxDpi → pxToCmDpi). When set and a
   * page for it exists in the current locale, the swap button navigates
   * there instead of just flipping the fields in place — the reciprocal
   * page has its own slug/SEO content with the units in the opposite order.
   */
  reverseToolKey?: ToolItemKey;
}

/**
 * Data-size units carry two legitimate standards: the binary one (IEC, where
 * 1 KiB = 1024 B) that Windows and RAM use, and the decimal one (SI, where
 * 1 kB = 1000 B) that drive makers, macOS and Google's own converter use. The
 * field label stays KB/MB/GB — what people actually search and recognise — and
 * only the factor changes, so the same number can be read in whichever system
 * the user really needs instead of us silently picking one and calling a binary
 * value by an SI symbol.
 */
function dataStandardVariant(
  op: 'divide' | 'multiply',
  binaryFactor: number,
  decimalFactor: number,
  suffix: string,
): UnitVariantField {
  const factorPair = (factor: number) =>
    op === 'divide'
      ? {
          convert: (v: number) => v / factor,
          reverseConvert: (v: number) => v * factor,
        }
      : {
          convert: (v: number) => v * factor,
          reverseConvert: (v: number) => v / factor,
        };
  return {
    labelKey: 'dataStandard',
    appliesTo: 'target',
    defaultValue: 'binary',
    helpKey: 'dataStandardHelp',
    options: [
      {
        value: 'binary',
        labelKey: 'dataStandardBinary',
        suffix,
        ...factorPair(binaryFactor),
      },
      {
        value: 'decimal',
        labelKey: 'dataStandardDecimal',
        suffix,
        ...factorPair(decimalFactor),
      },
    ],
  };
}

export const UNIT_CONVERSIONS: UnitConversionConfig[] = [
  {
    toolKey: 'ptToPx',
    category: 'css',
    sourceField: { labelKey: 'points', suffix: 'pt' },
    targetField: { labelKey: 'pixels', suffix: 'px' },
    convert: v => v * CSS_CONVERSION_FACTORS.PT_TO_PX,
    reverseConvert: v => v * CSS_CONVERSION_FACTORS.PX_TO_PT,
    precision: CONVERSION_PRECISION.DEFAULT,
    swappable: true,
  },

  {
    toolKey: 'remToPx',
    category: 'css',
    sourceField: { labelKey: 'rem', suffix: 'rem' },
    targetField: { labelKey: 'pixels', suffix: 'px' },
    extraField: {
      key: 'baseFontSize',
      labelKey: 'baseFontSize',
      suffix: 'px',
      defaultValue: CSS_CONVERSION_FACTORS.DEFAULT_BASE_FONT_SIZE,
      ...RANGE_CONSTRAINTS.BASE_FONT_SIZE,
    },
    convert: (v, extra) =>
      v * (extra ?? CSS_CONVERSION_FACTORS.DEFAULT_BASE_FONT_SIZE),
    reverseConvert: (v, extra) =>
      v / (extra ?? CSS_CONVERSION_FACTORS.DEFAULT_BASE_FONT_SIZE),
    precision: CONVERSION_PRECISION.DEFAULT,
    swappable: true,
  },

  {
    toolKey: 'emToPx',
    category: 'css',
    sourceField: { labelKey: 'em', suffix: 'em' },
    targetField: { labelKey: 'pixels', suffix: 'px' },
    extraField: {
      key: 'parentFontSize',
      labelKey: 'parentFontSize',
      suffix: 'px',
      defaultValue: CSS_CONVERSION_FACTORS.DEFAULT_PARENT_FONT_SIZE,
      ...RANGE_CONSTRAINTS.PARENT_FONT_SIZE,
    },
    convert: (v, extra) =>
      v * (extra ?? CSS_CONVERSION_FACTORS.DEFAULT_PARENT_FONT_SIZE),
    reverseConvert: (v, extra) =>
      v / (extra ?? CSS_CONVERSION_FACTORS.DEFAULT_PARENT_FONT_SIZE),
    precision: CONVERSION_PRECISION.DEFAULT,
    swappable: true,
  },

  {
    toolKey: 'cmToPxDpi',
    category: 'css',
    sourceField: { labelKey: 'centimeters', suffix: 'cm' },
    targetField: { labelKey: 'pixels', suffix: 'px' },
    extraField: {
      key: 'dpi',
      labelKey: 'dpiPpi',
      suffix: 'dpi',
      defaultValue: 96,
      min: 1,
      max: 2400,
      step: 1,
    },
    convert: (v, extra) => (v * (extra ?? 96)) / 2.54,
    reverseConvert: (v, extra) => (v * 2.54) / (extra ?? 96),
    precision: 0,
    swappable: true,
    reverseToolKey: 'pxToCmDpi',
  },

  {
    toolKey: 'pxToCmDpi',
    category: 'css',
    sourceField: { labelKey: 'pixels', suffix: 'px' },
    targetField: { labelKey: 'centimeters', suffix: 'cm' },
    extraField: {
      key: 'dpi',
      labelKey: 'dpiPpi',
      suffix: 'dpi',
      defaultValue: 96,
      min: 1,
      max: 2400,
      step: 1,
    },
    convert: (v, extra) => (v * 2.54) / (extra ?? 96),
    reverseConvert: (v, extra) => (v * (extra ?? 96)) / 2.54,
    precision: 2,
    swappable: true,
    reverseToolKey: 'cmToPxDpi',
  },

  {
    toolKey: 'mmToPxDpi',
    category: 'css',
    sourceField: { labelKey: 'millimeters', suffix: 'mm' },
    targetField: { labelKey: 'pixels', suffix: 'px' },
    extraField: {
      key: 'dpi',
      labelKey: 'dpiPpi',
      suffix: 'dpi',
      defaultValue: 96,
      min: 1,
      max: 2400,
      step: 1,
    },
    convert: (v, extra) => (v * (extra ?? 96)) / 25.4,
    reverseConvert: (v, extra) => (v * 25.4) / (extra ?? 96),
    precision: 0,
    swappable: true,
    reverseToolKey: 'pxToMmDpi',
  },

  {
    toolKey: 'pxToMmDpi',
    category: 'css',
    sourceField: { labelKey: 'pixels', suffix: 'px' },
    targetField: { labelKey: 'millimeters', suffix: 'mm' },
    extraField: {
      key: 'dpi',
      labelKey: 'dpiPpi',
      suffix: 'dpi',
      defaultValue: 96,
      min: 1,
      max: 2400,
      step: 1,
    },
    convert: (v, extra) => (v * 25.4) / (extra ?? 96),
    reverseConvert: (v, extra) => (v * (extra ?? 96)) / 25.4,
    precision: 2,
    swappable: true,
    reverseToolKey: 'mmToPxDpi',
  },

  {
    toolKey: 'cmToInches',
    category: 'length',
    sourceField: { labelKey: 'centimeters', suffix: 'cm' },
    targetField: { labelKey: 'inches', suffix: 'in' },
    convert: v => v / 2.54,
    reverseConvert: v => v * 2.54,
    precision: 4,
    swappable: true,
    reverseToolKey: 'inchesToCm',
  },

  {
    toolKey: 'inchesToCm',
    category: 'length',
    sourceField: { labelKey: 'inches', suffix: 'in' },
    targetField: { labelKey: 'centimeters', suffix: 'cm' },
    convert: v => v * 2.54,
    reverseConvert: v => v / 2.54,
    precision: 4,
    swappable: true,
    reverseToolKey: 'cmToInches',
  },

  {
    toolKey: 'mmToInches',
    category: 'length',
    sourceField: { labelKey: 'millimeters', suffix: 'mm' },
    targetField: { labelKey: 'inches', suffix: 'in' },
    convert: v => v / 25.4,
    reverseConvert: v => v * 25.4,
    precision: 4,
    swappable: true,
    reverseToolKey: 'inchesToMm',
  },

  {
    toolKey: 'inchesToMm',
    category: 'length',
    sourceField: { labelKey: 'inches', suffix: 'in' },
    targetField: { labelKey: 'millimeters', suffix: 'mm' },
    convert: v => v * 25.4,
    reverseConvert: v => v / 25.4,
    precision: 4,
    swappable: true,
    reverseToolKey: 'mmToInches',
  },

  {
    toolKey: 'milesToKm',
    category: 'length',
    sourceField: { labelKey: 'miles', suffix: 'mi' },
    targetField: { labelKey: 'kilometers', suffix: 'km' },
    convert: v => v * 1.609344,
    reverseConvert: v => v / 1.609344,
    precision: 4,
    swappable: true,
    reverseToolKey: 'kmToMiles',
  },

  {
    toolKey: 'kmToMiles',
    category: 'length',
    sourceField: { labelKey: 'kilometers', suffix: 'km' },
    targetField: { labelKey: 'miles', suffix: 'mi' },
    convert: v => v / 1.609344,
    reverseConvert: v => v * 1.609344,
    precision: 4,
    swappable: true,
    reverseToolKey: 'milesToKm',
  },

  {
    toolKey: 'metersToFeet',
    category: 'length',
    sourceField: { labelKey: 'meters', suffix: 'm' },
    targetField: { labelKey: 'feet', suffix: 'ft' },
    convert: v => v / 0.3048,
    reverseConvert: v => v * 0.3048,
    precision: 4,
    swappable: true,
    reverseToolKey: 'feetToMeters',
  },

  {
    toolKey: 'feetToMeters',
    category: 'length',
    sourceField: { labelKey: 'feet', suffix: 'ft' },
    targetField: { labelKey: 'meters', suffix: 'm' },
    convert: v => v * 0.3048,
    reverseConvert: v => v / 0.3048,
    precision: 4,
    swappable: true,
    reverseToolKey: 'metersToFeet',
  },

  {
    toolKey: 'inchesToFeet',
    category: 'length',
    sourceField: { labelKey: 'inches', suffix: 'in' },
    targetField: { labelKey: 'feet', suffix: 'ft' },
    convert: v => v / 12,
    reverseConvert: v => v * 12,
    precision: 4,
    swappable: true,
    reverseToolKey: 'feetToInches',
  },

  {
    toolKey: 'feetToInches',
    category: 'length',
    sourceField: { labelKey: 'feet', suffix: 'ft' },
    targetField: { labelKey: 'inches', suffix: 'in' },
    convert: v => v * 12,
    reverseConvert: v => v / 12,
    precision: 2,
    swappable: true,
    reverseToolKey: 'inchesToFeet',
  },

  {
    toolKey: 'lbsToOz',
    category: 'weight',
    sourceField: { labelKey: 'pounds', suffix: 'lb' },
    targetField: { labelKey: 'ounces', suffix: 'oz' },
    convert: v => v * 16,
    reverseConvert: v => v / 16,
    precision: 2,
    swappable: true,
    reverseToolKey: 'ozToLbs',
  },

  {
    toolKey: 'ozToLbs',
    category: 'weight',
    sourceField: { labelKey: 'ounces', suffix: 'oz' },
    targetField: { labelKey: 'pounds', suffix: 'lb' },
    convert: v => v / 16,
    reverseConvert: v => v * 16,
    precision: 4,
    swappable: true,
    reverseToolKey: 'lbsToOz',
  },

  {
    toolKey: 'mlToOz',
    category: 'volume',
    sourceField: { labelKey: 'milliliters', suffix: 'ml' },
    targetField: { labelKey: 'fluidOunces', suffix: 'US fl oz' },
    variantField: {
      labelKey: 'ounceSystem',
      appliesTo: 'target',
      defaultValue: 'us',
      options: [
        {
          value: 'us',
          labelKey: 'ounceSystemUs',
          suffix: 'US fl oz',
          convert: v => v / FLUID_OUNCE_IN_ML.US,
          reverseConvert: v => v * FLUID_OUNCE_IN_ML.US,
        },
        {
          value: 'uk',
          labelKey: 'ounceSystemUk',
          suffix: 'UK fl oz',
          convert: v => v / FLUID_OUNCE_IN_ML.IMPERIAL,
          reverseConvert: v => v * FLUID_OUNCE_IN_ML.IMPERIAL,
        },
      ],
    },
    convert: v => v / FLUID_OUNCE_IN_ML.US,
    reverseConvert: v => v * FLUID_OUNCE_IN_ML.US,
    precision: 2,
    swappable: true,
    reverseToolKey: 'ozToMl',
  },

  {
    toolKey: 'ozToMl',
    category: 'volume',
    sourceField: { labelKey: 'fluidOunces', suffix: 'US fl oz' },
    targetField: { labelKey: 'milliliters', suffix: 'ml' },
    variantField: {
      labelKey: 'ounceSystem',
      appliesTo: 'source',
      defaultValue: 'us',
      options: [
        {
          value: 'us',
          labelKey: 'ounceSystemUs',
          suffix: 'US fl oz',
          convert: v => v * FLUID_OUNCE_IN_ML.US,
          reverseConvert: v => v / FLUID_OUNCE_IN_ML.US,
        },
        {
          value: 'uk',
          labelKey: 'ounceSystemUk',
          suffix: 'UK fl oz',
          convert: v => v * FLUID_OUNCE_IN_ML.IMPERIAL,
          reverseConvert: v => v / FLUID_OUNCE_IN_ML.IMPERIAL,
        },
      ],
    },
    convert: v => v * FLUID_OUNCE_IN_ML.US,
    reverseConvert: v => v / FLUID_OUNCE_IN_ML.US,
    precision: 2,
    swappable: true,
    reverseToolKey: 'mlToOz',
  },

  {
    toolKey: 'kgToLb',
    category: 'weight',
    sourceField: { labelKey: 'kilograms', suffix: 'kg' },
    targetField: { labelKey: 'pounds', suffix: 'lb' },
    convert: v => v * 2.20462262185,
    reverseConvert: v => v * 0.45359237,
    precision: 2,
    swappable: true,
    reverseToolKey: 'lbToKg',
  },

  {
    toolKey: 'lbToKg',
    category: 'weight',
    sourceField: { labelKey: 'pounds', suffix: 'lb' },
    targetField: { labelKey: 'kilograms', suffix: 'kg' },
    convert: v => v * 0.45359237,
    reverseConvert: v => v * 2.20462262185,
    precision: 4,
    swappable: true,
    reverseToolKey: 'kgToLb',
  },

  {
    toolKey: 'inchesToPxDpi',
    category: 'css',
    sourceField: { labelKey: 'inches', suffix: 'in' },
    targetField: { labelKey: 'pixels', suffix: 'px' },
    extraField: {
      key: 'dpi',
      labelKey: 'dpiPpi',
      suffix: 'dpi',
      defaultValue: 96,
      min: 1,
      max: 2400,
      step: 1,
    },
    convert: (v, extra) => v * (extra ?? 96),
    reverseConvert: (v, extra) => v / (extra ?? 96),
    precision: 0,
    swappable: true,
  },

  {
    toolKey: 'hexToRgb',
    category: 'color',
    sourceField: { labelKey: 'hex', suffix: '', placeholder: '#3B82F6' },
    targetField: { labelKey: 'rgb', suffix: '' },
    convert: () => 0,
    reverseConvert: () => 0,
    precision: 0,
    swappable: true,
  },

  {
    toolKey: 'rgbToCmyk',
    category: 'color',
    sourceField: { labelKey: 'rgb', suffix: '', placeholder: '59, 130, 246' },
    targetField: { labelKey: 'cmyk', suffix: '' },
    convert: () => 0,
    reverseConvert: () => 0,
    precision: 0,
    swappable: true,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // B. Programming / technical (7)
  // ═══════════════════════════════════════════════════════════════════════════

  {
    toolKey: 'bytesConverter',
    category: 'data',
    sourceField: { labelKey: 'bytes', suffix: 'B' },
    targetField: { labelKey: 'kilobytes', suffix: 'KB' },
    variantField: dataStandardVariant('divide', 1024, 1000, 'KB'),
    convert: v => v / 1024,
    reverseConvert: v => v * 1024,
    precision: 4,
    swappable: true,
    reverseToolKey: 'kbToB',
  },

  {
    toolKey: 'kbToB',
    category: 'data',
    sourceField: { labelKey: 'kilobytes', suffix: 'KB' },
    targetField: { labelKey: 'bytes', suffix: 'B' },
    variantField: dataStandardVariant('multiply', 1024, 1000, 'B'),
    convert: v => v * 1024,
    reverseConvert: v => v / 1024,
    precision: 4,
    swappable: true,
    reverseToolKey: 'bytesConverter',
  },

  {
    toolKey: 'kbToMb',
    category: 'data',
    sourceField: { labelKey: 'kilobytes', suffix: 'KB' },
    targetField: { labelKey: 'megabytes', suffix: 'MB' },
    variantField: dataStandardVariant('divide', 1024, 1000, 'MB'),
    convert: v => v / 1024,
    reverseConvert: v => v * 1024,
    precision: 4,
    swappable: true,
    reverseToolKey: 'mbToKb',
  },

  {
    toolKey: 'mbToKb',
    category: 'data',
    sourceField: { labelKey: 'megabytes', suffix: 'MB' },
    targetField: { labelKey: 'kilobytes', suffix: 'KB' },
    variantField: dataStandardVariant('multiply', 1024, 1000, 'KB'),
    convert: v => v * 1024,
    reverseConvert: v => v / 1024,
    precision: 4,
    swappable: true,
    reverseToolKey: 'kbToMb',
  },

  {
    toolKey: 'mbToGb',
    category: 'data',
    sourceField: { labelKey: 'megabytes', suffix: 'MB' },
    targetField: { labelKey: 'gigabytes', suffix: 'GB' },
    variantField: dataStandardVariant('divide', 1024, 1000, 'GB'),
    convert: v => v / 1024,
    reverseConvert: v => v * 1024,
    precision: 4,
    swappable: true,
    reverseToolKey: 'gbToMb',
  },

  {
    toolKey: 'gbToMb',
    category: 'data',
    sourceField: { labelKey: 'gigabytes', suffix: 'GB' },
    targetField: { labelKey: 'megabytes', suffix: 'MB' },
    variantField: dataStandardVariant('multiply', 1024, 1000, 'MB'),
    convert: v => v * 1024,
    reverseConvert: v => v / 1024,
    precision: 4,
    swappable: true,
    reverseToolKey: 'mbToGb',
  },

  {
    toolKey: 'kbToGb',
    category: 'data',
    sourceField: { labelKey: 'kilobytes', suffix: 'KB' },
    targetField: { labelKey: 'gigabytes', suffix: 'GB' },
    variantField: dataStandardVariant('divide', 1048576, 1000000, 'GB'),
    convert: v => v / 1048576,
    reverseConvert: v => v * 1048576,
    precision: 6,
    swappable: true,
    reverseToolKey: 'gbToKb',
  },

  {
    toolKey: 'gbToKb',
    category: 'data',
    sourceField: { labelKey: 'gigabytes', suffix: 'GB' },
    targetField: { labelKey: 'kilobytes', suffix: 'KB' },
    variantField: dataStandardVariant('multiply', 1048576, 1000000, 'KB'),
    convert: v => v * 1048576,
    reverseConvert: v => v / 1048576,
    precision: 4,
    swappable: true,
    reverseToolKey: 'kbToGb',
  },

  {
    toolKey: 'gbToTb',
    category: 'data',
    sourceField: { labelKey: 'gigabytes', suffix: 'GB' },
    targetField: { labelKey: 'terabytes', suffix: 'TB' },
    variantField: dataStandardVariant('divide', 1024, 1000, 'TB'),
    convert: v => v / 1024,
    reverseConvert: v => v * 1024,
    precision: 4,
    swappable: true,
    reverseToolKey: 'tbToGb',
  },

  {
    toolKey: 'tbToGb',
    category: 'data',
    sourceField: { labelKey: 'terabytes', suffix: 'TB' },
    targetField: { labelKey: 'gigabytes', suffix: 'GB' },
    variantField: dataStandardVariant('multiply', 1024, 1000, 'GB'),
    convert: v => v * 1024,
    reverseConvert: v => v / 1024,
    precision: 4,
    swappable: true,
    reverseToolKey: 'gbToTb',
  },

  {
    toolKey: 'kbToTb',
    category: 'data',
    sourceField: { labelKey: 'kilobytes', suffix: 'KB' },
    targetField: { labelKey: 'terabytes', suffix: 'TB' },
    variantField: dataStandardVariant('divide', 1073741824, 1000000000, 'TB'),
    convert: v => v / 1073741824,
    reverseConvert: v => v * 1073741824,
    precision: 6,
    swappable: true,
    reverseToolKey: 'tbToKb',
  },

  {
    toolKey: 'tbToKb',
    category: 'data',
    sourceField: { labelKey: 'terabytes', suffix: 'TB' },
    targetField: { labelKey: 'kilobytes', suffix: 'KB' },
    variantField: dataStandardVariant('multiply', 1073741824, 1000000000, 'KB'),
    convert: v => v * 1073741824,
    reverseConvert: v => v / 1073741824,
    precision: 4,
    swappable: true,
    reverseToolKey: 'kbToTb',
  },

  {
    toolKey: 'unixTimestamp',
    category: 'time',
    sourceField: {
      labelKey: 'unixTimestamp',
      suffix: 's',
      placeholder: '1700000000',
    },
    targetField: { labelKey: 'dateTime', suffix: '' },
    convert: () => 0,
    reverseConvert: () => 0,
    precision: 0,
    swappable: false,
  },

  {
    toolKey: 'decToBin',
    category: 'math',
    sourceField: { labelKey: 'decimal', suffix: '', placeholder: '255' },
    targetField: { labelKey: 'binary', suffix: '' },
    convert: () => 0,
    reverseConvert: () => 0,
    precision: 0,
    swappable: true,
  },

  {
    toolKey: 'decToHex',
    category: 'math',
    sourceField: { labelKey: 'decimal', suffix: '', placeholder: '255' },
    targetField: { labelKey: 'hexadecimal', suffix: '' },
    convert: () => 0,
    reverseConvert: () => 0,
    precision: 0,
    swappable: true,
  },

  {
    toolKey: 'mbpsToMBs',
    category: 'data',
    sourceField: { labelKey: 'megabitsPerSec', suffix: 'Mbps' },
    targetField: { labelKey: 'megabytesPerSec', suffix: 'MB/s' },
    convert: v => v / 8,
    reverseConvert: v => v * 8,
    precision: 2,
    swappable: true,
  },
];

export function getUnitConversion(
  toolKey: string,
): UnitConversionConfig | undefined {
  return UNIT_CONVERSIONS.find(c => c.toolKey === toolKey);
}
