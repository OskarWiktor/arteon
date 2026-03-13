import type { ToolItemKey } from './common';

// ---------------------------------------------------------------------------
// Unit conversion configuration
// ---------------------------------------------------------------------------

export type UnitCategory = 'length' | 'weight' | 'temperature' | 'volume' | 'area' | 'speed' | 'pressure' | 'power' | 'css' | 'color' | 'data' | 'time' | 'math' | 'energy';

export interface UnitField {
  label?: string;
  labelKey?: string;
  suffix: string;
  placeholder?: string;
}

export interface ExtraField {
  key: string;
  label?: string;
  labelKey?: string;
  suffix: string;
  defaultValue: number;
  min?: number;
  max?: number;
  step?: number;
}

export interface PopularValue {
  source: number | string;
  target: number | string;
  label?: string;
  labelKey?: string;
}

export interface UnitConversionConfig {
  toolKey: ToolItemKey;
  category: UnitCategory;
  sourceField: UnitField;
  targetField: UnitField;
  extraField?: ExtraField;
  convert: (value: number, extra?: number) => number;
  reverseConvert: (value: number, extra?: number) => number;
  formula: string;
  reverseFormula: string;
  precision: number;
  popularValues: PopularValue[];
  swappable: boolean;
}
