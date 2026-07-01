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
    convert: v => v / 1024,
    reverseConvert: v => v * 1024,
    precision: 4,
    swappable: true,
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
