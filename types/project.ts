export type ProjectCategory = 'aplikacja' | 'strona' | 'blog' | 'sklep' | 'grafika' | 'treść' | 'marketing';

export type Project = {
  slug: string;
  title: string;
  short: string;
  image: string;
  link: string;
  category: ProjectCategory[];
};
