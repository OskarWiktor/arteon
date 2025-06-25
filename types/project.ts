export type ProjectCategory = 'aplikacja' | 'strona' | 'blog' | 'sklep';

export type Project = {
  slug: string;
  title: string;
  short: string;
  image: string;
  link: string;
  category: ProjectCategory[];
};
