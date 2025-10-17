'use client';

import { useEffect, useMemo, useState } from 'react';

type Entry = { id: string; text: string; level: 2 | 3 };

type TableOfContentsProps = {
  rootSelector?: string;
  size?: 'small' | 'large';
  levels?: 'h2' | 'h2+h3';
};

export default function TableOfContents({ rootSelector = '#article-root', size = 'small', levels = 'h2+h3' }: TableOfContentsProps) {
  const [items, setItems] = useState<Entry[]>([]);
  const [activeId, setActiveId] = useState<string>('');
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const root = (document.querySelector(rootSelector) as Document | Element) || document;

    const selector = levels === 'h2' ? 'h2' : 'h2, h3';
    const headings = Array.from(root.querySelectorAll(selector)) as HTMLElement[];

    const seen = new Set<string>();
    const slugify = (t: string) =>
      t
        .toLowerCase()
        .trim()
        .replace(/\s+/g, '-')
        .replace(/[^\w\-ąęćłńóśżź]/g, '');

    headings.forEach((h) => {
      if (!h.id) {
        const base = slugify(h.textContent || '');
        let candidate = base || 'sekcja';
        let i = 2;
        while (!candidate || seen.has(candidate) || document.getElementById(candidate)) {
          candidate = `${base || 'sekcja'}-${i++}`;
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
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => (a.target as HTMLElement).getBoundingClientRect().top - (b.target as HTMLElement).getBoundingClientRect().top);
        const top = visible[0]?.target as HTMLElement | undefined;
        if (top?.id) setActiveId(top.id);
      },
      { rootMargin: '0px 0px -70% 0px', threshold: [0, 1] },
    );

    headings.forEach((h) => obs.observe(h));
    return () => obs.disconnect();
  }, [rootSelector, levels]);

  const hasItems = useMemo(() => items.length > 0, [items]);
  if (!hasItems) return null;

  const widthClass = size === 'small' ? 'lg:w-[208px]' : 'lg:w-[300px]';

  const LinkList = ({ dense = false }: { dense?: boolean }) => (
    <ul className={dense ? 'space-y-0.5 text-[13px] leading-tight' : 'space-y-0.5 text-sm'}>
      {items.map((i) => {
        const isActive = activeId === i.id;
        return (
          <li key={i.id} className={i.level === 3 ? 'border-l border-black/10 pl-3' : ''}>
            <a href={`#${i.id}`} aria-current={isActive ? 'location' : undefined} className={`flex items-center gap-1 rounded-xl px-2 py-1 hover:underline ${isActive ? 'bg-black/5' : ''}`}>
              <span className="line-clamp-1 text-[15px]">{i.text}</span>
            </a>
          </li>
        );
      })}
    </ul>
  );

  return (
    <>
      {/* Mobile */}
      <aside className={`block lg:hidden ${widthClass}`}>
        <div className="relative rounded-lg border border-black/10 bg-white/95 shadow-sm backdrop-blur">
          <div className="flex items-center justify-between px-3 py-2">
            <p className="text-xs font-medium tracking-wider text-[#5e5e5e] uppercase">
              Spis treści <span className="opacity-60">({items.length})</span>
            </p>
            <button type="button" aria-expanded={expanded} onClick={() => setExpanded((v) => !v)} className="text-xs underline">
              {expanded ? 'Zwiń' : 'Pokaż wszystko'}
            </button>
          </div>

          <nav aria-label="Spis treści" className="px-2 pb-2">
            <div className="relative">
              <div className={`overflow-y-auto ${expanded ? 'max-h-[70vh]' : 'max-h-40'} pr-1 pb-6`}>
                <LinkList dense />
              </div>
              {!expanded && <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-white/95 to-transparent" />}
            </div>
          </nav>
        </div>
      </aside>

      {/* Desktop */}
      <aside className={`sticky top-24 hidden ${widthClass} self-start lg:block`}>
        <div className="rounded-xl border border-black/10 bg-white p-3 shadow-sm">
          <p className="mb-2 text-xs tracking-wider text-[#5e5e5e] uppercase">Spis treści</p>
          <nav aria-label="Spis treści">
            <LinkList />
          </nav>
        </div>
      </aside>
    </>
  );
}
