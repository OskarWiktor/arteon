'use client';

import { useEffect, useMemo, useState } from 'react';

type Entry = { id: string; text: string; level: 2 | 3 };

export default function TableOfContents({ rootSelector = '#article-root' }: { rootSelector?: string }) {
  const [items, setItems] = useState<Entry[]>([]);
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const root = document.querySelector(rootSelector) || document;
    const hs = Array.from(root.querySelectorAll('h2, h3')) as HTMLElement[];

    hs.forEach((h) => {
      if (!h.id) {
        h.id =
          h.textContent
            ?.toLowerCase()
            .trim()
            .replace(/\s+/g, '-')
            .replace(/[^\w\-ąęćłńóśżź]/g, '') || '';
      }
    });

    setItems(
      hs.map((h) => ({
        id: h.id,
        text: h.textContent || '',
        level: h.tagName === 'H2' ? 2 : 3,
      })),
    );

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => (a.target as HTMLElement).offsetTop - (b.target as HTMLElement).offsetTop);
        if (visible[0]?.target instanceof HTMLElement) setActiveId(visible[0].target.id);
      },
      { rootMargin: '0px 0px -70% 0px', threshold: [0, 1] },
    );

    hs.forEach((h) => obs.observe(h));
    return () => obs.disconnect();
  }, [rootSelector]);

  const hasItems = useMemo(() => items.length > 0, [items]);
  if (!hasItems) return null;

  return (
    <aside className="sticky top-24 hidden w-52 self-start lg:block">
      <div className="rounded-xl bg-white p-4 shadow-md">
        <p className="mb-3 text-base tracking-wider text-[#5e5e5e] uppercase">Spis treści</p>
        <nav aria-label="Spis treści">
          <ul className="space-y-1 text-sm">
            {items.map((i) => (
              <li key={i.id} className={i.level === 3 ? 'pl-3' : ''}>
                <a href={`#${i.id}`} className={`block rounded-xl px-3 py-1 text-sm font-medium hover:underline md:text-base ${activeId === i.id ? 'bg-black/5' : ''}`}>
                  {i.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
}
