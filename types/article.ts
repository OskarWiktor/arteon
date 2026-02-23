import type { ProjectCTA } from './project';

/**
 * Typ artykułu blogowego
 *
 * ZASADY ZERO DOPISAŃ (docs/INSTRUCTIONS.md):
 * - Każda liczba/statystyka → źródło (nazwa, rok, URL)
 * - Zgodność z Omnibus (ceny), RODO (prywatność), WCAG (dostępność)
 * - Przykłady hipotetyczne muszą być oznaczone
 * - dateModified aktualizowane przy każdej zmianie treści
 */
export type Article = {
  slug: string;
  title: string;
  excerpt?: string;
  cover?: string;
  primaryCategory?: string;
  author?: { name: string; url?: string };
  readingTime?: number;
  datePublished?: string;
  dateModified?: string;
  faq?: { question: string; answer: string }[];
  contentBlocks: Array<
    | { type: 'richtext'; html: string; breakBefore?: boolean; breakAfter?: boolean }
    | {
        type: 'code';
        code: string;
        language?: string;
        filename?: string;
        caption?: string;
        showLineNumbers?: boolean;
        wrap?: boolean;
        highlightLines?: number[];
        breakBefore?: boolean;
        breakAfter?: boolean;
      }
    | {
        type: 'table';
        caption?: string;
        note?: string;
        columns: { header: string; align?: 'left' | 'center' | 'right' }[];
        rows: (string | number)[][];
        striped?: boolean;
        compact?: boolean;
        breakBefore?: boolean;
        breakAfter?: boolean;
      }
    | {
        type: 'image';
        src: string;
        alt: string;
        caption?: string;
        ratio?: '16/9' | '4/3' | '1/1' | 'auto';
        width?: number;
        height?: number;
        quality?: number;
        priority?: boolean;
        breakBefore?: boolean;
        breakAfter?: boolean;
      }
    | {
        type: 'imageText';
        src: string;
        alt: string;
        html: string;
        imageSide?: 'left' | 'right';
        ratio?: '16/9' | '4/3' | '1/1' | 'auto';
        width?: number;
        height?: number;
        quality?: number;
        priority?: boolean;
        breakBefore?: boolean;
        breakAfter?: boolean;
      }
    | { type: 'quote'; text: string; author?: string; role?: string; breakBefore?: boolean; breakAfter?: boolean }
    | { type: 'callout'; title?: string; html: string; breakBefore?: boolean; breakAfter?: boolean }
    | { type: 'colorPalette'; colors: string[]; breakBefore?: boolean; breakAfter?: boolean }
    | { type: 'ad'; slot?: string; breakBefore?: boolean; breakAfter?: boolean }
  >;
  seo?: { title?: string; description?: string; canonical?: string };

  cta?: ProjectCTA;
};

export type ArticlePreview = Pick<Article, 'slug' | 'title' | 'excerpt' | 'cover' | 'primaryCategory' | 'readingTime' | 'datePublished' | 'seo'>;
