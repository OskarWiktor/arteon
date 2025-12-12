'use client';

import Button from '@/components/ui/Button';
import { usePathname } from 'next/navigation';
import Heading from '@/components/ui/typography/Heading';

const ui = {
  pl: {
    filters: 'Filtry artykułów',
    categories: 'Kategorie artykułów',
    all: 'Wszystko',
    urls: {
      education: '/edukacja',
    },
  },
} as const;

type Cat = { label: string; slug: string; count: number };

export default function FilterBar({ cats, active }: { cats: Cat[]; active?: string }) {
  const t = ui.pl;
  const pathname = usePathname();
  const isRoot = pathname === t.urls.education;

  return (
    <>
      <Heading as="h2" className="reveal-animation mb-4">
        {t.filters}
      </Heading>
      <nav aria-label={t.categories} className="flex flex-wrap gap-2 pb-6 md:pb-8 lg:pb-10">
        <Button variant={isRoot ? 'accent' : 'normal'} link={t.urls.education} size="small" aria-current={isRoot ? 'page' : undefined}>
          {t.all}
        </Button>

        {cats.map((c) => {
          const isActive = active === c.slug;
          return (
            <Button size="small" key={c.slug} variant={isActive ? 'accent' : 'normal'} link={`${t.urls.education}/${c.slug}`} aria-current={isActive ? 'page' : undefined}>
              {c.label} <span className="opacity-60">({c.count})</span>
            </Button>
          );
        })}
      </nav>
    </>
  );
}
