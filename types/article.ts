import { ProjectCTA } from './project';

export type Article = {
  slug: string;
  title: string;
  excerpt?: string;
  cover?: string;
  category?: string[];
  tags?: string[];
  author?: { name: string; url?: string };
  readingTime?: number;
  datePublished?: string;
  dateModified?: string;
  faq?: { question: string; answer: string }[];
  contentBlocks: Array<
    | { type: 'richtext'; html: string; breakBefore?: boolean; breakAfter?: boolean }
    | { type: 'image'; src: string; alt: string; caption?: string; ratio?: '16/9' | '4/3' | '1/1' | 'auto'; width?: number; height?: number; quality?: number; priority?: boolean; breakBefore?: boolean; breakAfter?: boolean }
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
  >;
  seo?: { title?: string; description?: string; canonical?: string };

  cta?: ProjectCTA;
};
