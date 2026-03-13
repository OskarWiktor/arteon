/**
 * Conversion constants and magic numbers
 * Centralized for better maintainability and type safety
 */

// CSS Unit Conversion Factors
export const CSS_CONVERSION_FACTORS = {
  PT_TO_PX: 1.333333,
  PX_TO_PT: 0.75,
  DEFAULT_BASE_FONT_SIZE: 16,
  DEFAULT_PARENT_FONT_SIZE: 16,
} as const;

// Common Precision Values
export const CONVERSION_PRECISION = {
  DEFAULT: 2,
  HIGH_PRECISION: 4,
  LOW_PRECISION: 1,
} as const;

// Popular Values for CSS Units
export const POPULAR_CSS_VALUES = {
  PT_TO_PX: [
    { source: 8, target: 10.67 },
    { source: 9, target: 12, label: 'Tekst podstawowy' },
    { source: 10, target: 13.33 },
    { source: 12, target: 16, label: '1rem domyślnie' },
    { source: 14, target: 18.67 },
    { source: 18, target: 24, label: 'Nagłówek' },
    { source: 24, target: 32 },
    { source: 36, target: 48 },
    { source: 48, target: 64 },
    { source: 72, target: 96, label: '1 cal na ekranie' },
  ],
  REM_TO_PX: [
    { source: 0.25, target: 4 },
    { source: 0.5, target: 8 },
    { source: 0.75, target: 12 },
    { source: 1, target: 16 },
    { source: 1.25, target: 20 },
    { source: 1.5, target: 24 },
    { source: 2, target: 32 },
    { source: 3, target: 48 },
    { source: 4, target: 64 },
    { source: 5, target: 80 },
  ],
  EM_TO_PX: [
    { source: 0.5, target: 8 },
    { source: 0.75, target: 12 },
    { source: 1, target: 16 },
    { source: 1.25, target: 20 },
    { source: 1.5, target: 24 },
    { source: 2, target: 32 },
    { source: 2.5, target: 40 },
    { source: 3, target: 48 },
  ],
};

// Range Validation Constants
export const RANGE_CONSTRAINTS = {
  BASE_FONT_SIZE: { min: 1, max: 100, step: 1 },
  PARENT_FONT_SIZE: { min: 1, max: 200, step: 1 },
} as const;

// Formula Templates
export const CONVERSION_FORMULAS = {
  PT_TO_PX: 'px = pt × 1.3 (96/72)',
  PX_TO_PT: 'pt = px × 0.75 (72/96)',
  REM_TO_PX: 'px = rem × bazowy font-size',
  PX_TO_REM: 'rem = px ÷ bazowy font-size',
  EM_TO_PX: 'px = em × font-size rodzica',
  PX_TO_EM: 'em = px ÷ font-size rodzica',
} as const;

// Validation Messages
export const VALIDATION_MESSAGES = {
  INVALID_CONVERSION: 'Nieprawidłowa konwersja',
  INVALID_RANGE: 'Wartość poza zakresem',
  REQUIRED_FIELD: 'Pole jest wymagane',
  INVALID_FORMAT: 'Nieprawidłowy format',
} as const;
