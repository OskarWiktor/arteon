'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

type Cat = { label: string; slug: string; count: number };

export default function FilterBar({ cats, active }: { cats: Cat[]; active?: string }) {
  const pathname = usePathname();
  const isRoot = pathname === '/edukacja';

  return (
    <nav aria-label="Kategorie artykułów" className="mb-6 flex flex-wrap gap-2">
      <Link href="/edukacja" aria-current={isRoot ? 'page' : undefined} className={`rounded-full border px-3 py-1 text-sm hover:bg-black hover:text-white ${isRoot ? 'bg-black text-white' : ''}`}>
        Wszystko
      </Link>

      {cats.map((c) => {
        const activeCat = active === c.slug;
        return (
          <Link
            key={c.slug}
            href={`/edukacja/${c.slug}`}
            aria-current={activeCat ? 'page' : undefined}
            className={`rounded-full border px-3 py-1 text-sm hover:bg-black hover:text-white ${activeCat ? 'bg-black text-white' : ''}`}
          >
            {c.label} <span className="opacity-60">({c.count})</span>
          </Link>
        );
      })}
    </nav>
  );
}
