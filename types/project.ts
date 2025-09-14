import { ReactNode } from 'react';

export type ProjectCategory = 'aplikacja' | 'strona' | 'blog' | 'sklep' | 'grafika' | 'treść' | 'marketing';

export type Project = {
  description: ReactNode;
  descripton: ReactNode;
  slug: string;
  title: string;
  short: string;
  image: string;
  link: string;
  category: ProjectCategory[];
};
