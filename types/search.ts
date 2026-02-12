export type SearchCategory = 'uslugi' | 'narzedzia' | 'edukacja' | 'realizacje' | 'inne';

export type SearchItem = {
  title: string;
  description?: string;
  href: string;
  category: SearchCategory;
  categoryLabel: string;
  keywords?: string[];
};
