'use client';

import Button from '@/components/ui/Button';
import { usePathname } from 'next/navigation';

type Cat = { label: string; slug: string; count: number };

export default function FilterBar({ cats, active }: { cats: Cat[]; active?: string }) {
  const pathname = usePathname();
  const isRoot = pathname === '/edukacja';

  return (
    <>
      <h2 className="reveal-animation mb-4">Filtry artykułów</h2>
      <nav aria-label="Kategorie artykułów" className="flex flex-wrap gap-2 pb-6 md:pb-8 lg:pb-10">
        <Button variant={isRoot ? 'accent' : 'normal'} link="/edukacja" size="small" aria-current={isRoot ? 'page' : undefined}>
          Wszystko
        </Button>

        {cats.map((c) => {
          const isActive = active === c.slug;
          return (
            <Button size="small" key={c.slug} variant={isActive ? 'accent' : 'normal'} link={`/edukacja/${c.slug}`} aria-current={isActive ? 'page' : undefined}>
              {c.label} <span className="opacity-60">({c.count})</span>
            </Button>
          );
        })}
      </nav>
    </>
  );
}
