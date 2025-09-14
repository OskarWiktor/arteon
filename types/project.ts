import { ReactNode } from 'react';

export type ProjectCategory = 'aplikacja' | 'strona' | 'blog' | 'sklep' | 'grafika' | 'treść' | 'marketing';

export type PrimaryCategory = Extract<ProjectCategory, 'aplikacja' | 'strona' | 'blog' | 'sklep'>;
export type SecondaryCategory = Extract<ProjectCategory, 'grafika' | 'treść' | 'marketing'>;

export type Project = {
  slug: string;
  title: string;
  short: string;
  description: ReactNode;
  task: ReactNode;
  image: string;
  link: string;
  category: ProjectCategory[];
};
