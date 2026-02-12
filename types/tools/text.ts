export type LengthStatus = 'empty' | 'too-short' | 'ideal' | 'too-long';

export type PageType = 'product' | 'service' | 'homepage' | 'landing' | 'blog' | 'guide';

export interface PageTypeConfig {
  key: PageType;
  label: string;
  minWords: number;
  maxWords: number;
  description: string;
}

export interface TextMetrics {
  words: number;
  charsWithSpaces: number;
  charsWithoutSpaces: number;
  paragraphs: number;
  readingTimeMinutes: number;
}

export interface LengthEvaluation {
  status: LengthStatus;
  percentage: number;
  message: string;
}

export type FieldMetrics = {
  chars: number;
  words: number;
  pixels: number;
  status: LengthStatus;
};
