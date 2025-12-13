import type { ReactNode } from 'react';

export type ProjectCategory = 'aplikacja' | 'strona' | 'blog' | 'sklep' | 'grafika' | 'treść' | 'marketing';
export type PrimaryCategory = Extract<ProjectCategory, 'aplikacja' | 'strona' | 'blog' | 'sklep'>;
export type SecondaryCategory = Extract<ProjectCategory, 'grafika' | 'treść' | 'marketing'>;

export type Stat = { label: string; value: string; note?: string };
export type FaqItem = { question: string; answer: string };

export type ContentBlock =
  | { type: 'richtext'; html: string }
  | { type: 'image'; src: string; alt: string; caption?: string; ratio?: '16/9' | '4/3' | '1/1' | 'auto'; width?: number; height?: number; quality?: number; priority?: boolean }
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
    };

export type ProjectCTA = {
  title?: string;
  description?: string;
  btnOne?: string;
  btnOneLink?: string;
  btnTwo?: string;
  btnTwoLink?: string;
  backgroundImage?: string;
  overlay?: 'black' | 'white';
};

export type Project = {
  slug: string;
  title: string;
  short: ReactNode;
  description?: ReactNode;
  task?: ReactNode;
  image: string;
  link?: string;
  category: ProjectCategory[];

  client?: { name?: string; sector?: string; location?: string };
  timeline?: { start?: string; end?: string };
  stack?: string[];
  deliverables?: (string | ReactNode)[];
  goals?: ReactNode;
  challenges?: ReactNode;
  solutions?: ReactNode;
  outcomes?: Stat[];
  process_steps?: string[];
  testimonial?: { quote: string; author?: string; role?: string; link?: string };

  beforeAfter?: { beforeImage?: string; afterImage?: string; note?: string };

  faq?: FaqItem[];
  contentBlocks?: ContentBlock[];

  cta?: ProjectCTA;

  seo?: { title?: string; description?: string; canonical?: string };
};
