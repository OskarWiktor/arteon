export type LengthStatus = 'empty' | 'too-short' | 'ideal' | 'too-long';

export interface TextMetrics {
  words: number;
  charsWithSpaces: number;
  charsWithoutSpaces: number;
  sentences: number;
  paragraphs: number;
  uniqueWords: number;
  avgWordLength: number;
  readingTimeMinutes: number;
}

export type FieldMetrics = {
  chars: number;
  words: number;
  pixels: number;
  status: LengthStatus;
};
