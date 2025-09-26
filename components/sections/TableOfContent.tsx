'use client';

import { useEffect, useMemo, useState } from 'react';

type Entry = { id: string; text: string; level: 2 | 3 };

type TableOfContentsProps = {
  rootSelector?: string;
  size?: 'small' | 'large';
};

export default function TableOfContents({ rootSelector = '#article-root', size = 'small' }: TableOfContentsProps) {
  const [items, setItems] = useState<Entry[]>([]);
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const root = document.querySelector(rootSelector) || document;

    const headings = Array.from(root.querySelectorAll('h2, h3')) as HTMLElement[];

    // nadawanie id gdy brak
    const seen = new Set<string>();
    const slugify = (t: string) =>
      t
        .toLowerCase()
        .trim()
        .replace(/\s+/g, '-')
        .replace(/[^\w\-ąęćłńóśżź]/g, '');

    headings.forEach((h) => {
      if (!h.id) {
        let base = slugify(h.textContent || '');
        let candidate = base;
        let i = 2;
        while (seen.has(candidate) || document.getElementById(candidate)) {
          candidate = `${base}-${i++}`;
        }
        h.id = candidate;
        seen.add(candidate);
      } else {
        seen.add(h.id);
      }
    });

    setItems(
      headings.map((h) => ({
        id: h.id,
        text: h.textContent || '',
        level: h.tagName === 'H2' ? 2 : 3,
      })),
    );

    const obs = new IntersectionObserver(
      (entries) => {
        // wybierz najbliższy nagłówek w widoku
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => (a.target as HTMLElement).getBoundingClientRect().top - (b.target as HTMLElement).getBoundingClientRect().top);
        const top = visible[0]?.target as HTMLElement | undefined;
        if (top?.id) setActiveId(top.id);
      },
      { rootMargin: '0px 0px -70% 0px', threshold: [0, 1] },
    );

    headings.forEach((h) => obs.observe(h));
    return () => obs.disconnect();
  }, [rootSelector]);

  const hasItems = useMemo(() => items.length > 0, [items]);
  if (!hasItems) return null;

  const widthClass = size === 'small' ? 'w-[208px]' : 'w-[300px]';

  return (
    <aside className={`sticky top-24 hidden ${widthClass} self-start lg:block`}>
      <div className="rounded-xl bg-white p-4 shadow-md">
        <p className="mb-3 text-base tracking-wider text-[#5e5e5e] uppercase">Spis treści</p>
        <nav aria-label="Spis treści">
          <ul className="space-y-1 text-sm">
            {items.map((i) => {
              const isActive = activeId === i.id;
              return (
                <li key={i.id} className={i.level === 3 ? 'pl-3' : ''}>
                  <a
                    href={`#${i.id}`}
                    aria-current={isActive ? 'location' : undefined}
                    className={`block rounded-xl px-3 py-1 text-sm font-medium hover:underline md:text-base ${isActive ? 'bg-black/5' : ''}`}
                  >
                    {i.text}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </aside>
  );
}
