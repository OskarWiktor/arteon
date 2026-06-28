export type LengthStatus = 'empty' | 'too-short' | 'ideal' | 'too-long';

export interface TextMetrics {
  words: number;
  charsWithSpaces: number;
  charsWithoutSpaces: number;
  sentences: number;
  readingTimeMinutes: number;
  syllables: number;
  fleschScore: number | null;
  fleschGrade: number | null;
  speakingTimeMinutes: number;
}

export type FieldMetrics = {
  chars: number;
  words: number;
  pixels: number;
  status: LengthStatus;
};
