import { slugify } from '@/utils/slug';

type HasBlogCategories = {
  primaryCategory?: string;
  category?: string[];
};

export function getPrimaryCategorySlug(a: HasBlogCategories): string {
  const primary = a.primaryCategory || (a.category && a.category[0]) || 'inne';
  return slugify(primary);
}
