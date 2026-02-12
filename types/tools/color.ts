export type RGB = { r: number; g: number; b: number };
export type RGBA = { r: number; g: number; b: number; a: number };
export type HSL = { h: number; s: number; l: number };
export type HSLA = { h: number; s: number; l: number; a: number };

export type PaletteColor = {
  hex: string;
  hsl: HSL;
};

export type PaletteGroupId = 'monochromatic' | 'analogous' | 'complementary' | 'triadic' | 'split-complementary' | 'soft-pastel' | 'deep-dark' | 'material-tonal' | 'apple-minimal';

export type PaletteGroup = {
  id: PaletteGroupId;
  colors: PaletteColor[];
};

export type ExtractedColor = {
  hex: string;
  rgb: RGB;
  count: number;
};

export type ExtractPaletteOptions = {
  maxColors?: number;
  bucketSize?: number;
  alphaThreshold?: number;
  minDistance?: number;
};
