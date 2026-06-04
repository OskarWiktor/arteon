'use client';

import { useEffect, useState } from 'react';
import { flexCenterBetweenClasses } from '@/lib/ui-classes';
import { cn } from '@/lib/utils';
import Card from './Card';

type Entry = { id: string; text: string; level: 2 | 3 };

type SizeClass = 'small' | 'large';

type TableOfContentsProps = {
  rootSelector?: string;
  size?: SizeClass;
};

const widthClass = {
  small: 'lg:w-[208px]',
  large: 'lg:w-[300px]',
};

export default function TableOfContents({
  rootSelector = '#article-root',
  size = 'small',
}: TableOfContentsProps) {
  const [items, setItems] = useState<Entry[]>([]);
  const [activeId, setActiveId] = useState<string>('');
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const sectionFallback = 'sekcja';
    const root = (document.querySelector(rootSelector) as Document | Element) || document;

    const headings = Array.from(root.querySelectorAll('h2')) as HTMLElement[];

    const seen = new Set<string>();
    const slugify = (t: string) =>
      t
        .toLowerCase()
        .trim()
        .replace(/\s+/g, '-')
        .replace(/[^\w\-ąęćłńóśżź]/g, '');

    headings.forEach(h => {
      if (!h.id) {
        const base = slugify(h.textContent || '');
        let candidate = base || sectionFallback;
        let i = 2;
        while (!candidate || seen.has(candidate) || document.getElementById(candidate)) {
          candidate = `${base || sectionFallback}-${i++}`;
        }
        h.id = candidate;
        seen.add(candidate);
      } else {
        seen.add(h.id);
      }
    });

    setItems(
      headings.map(h => ({
        id: h.id,
        text: h.textContent || '',
        level: h.tagName === 'H2' ? 2 : 3,
      })),
    );

    const obs = new IntersectionObserver(
      entries => {
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort(
            (a, b) =>
              (a.target as HTMLElement).getBoundingClientRect().top -
              (b.target as HTMLElement).getBoundingClientRect().top,
          );
        const top = visible[0]?.target as HTMLElement | undefined;
        if (top?.id) setActiveId(top.id);
      },
      { rootMargin: '0px 0px -70% 0px', threshold: [0, 1] },
    );

    headings.forEach(h => obs.observe(h));
    return () => obs.disconnect();
  }, [rootSelector]);

  const hasItems = items.length > 0;
  if (!hasItems) return null;

  const LinkList = ({ dense = false }: { dense?: boolean }) => (
    <ul className={cn(dense ? 'space-y-0.5 text-[13px] leading-tight' : 'space-y-0.5 text-sm')}>
      {items.map(i => {
        const isActive = activeId === i.id;
        return (
          <li key={i.id} className={i.level === 3 ? 'border-l border-neutral-200' : ''}>
            <a
              href={`#${i.id}`}
              aria-current={isActive ? 'location' : undefined}
              className={cn(
                'flex items-center gap-1 rounded-lg px-2 py-1 text-mid hover:underline',
                isActive ? 'bg-black/5' : '',
              )}
            >
              <span className='line-clamp-1 text-[14px]'>{i.text}</span>
            </a>
          </li>
        );
      })}
    </ul>
  );

  return (
    <>
      <aside className={cn('block lg:hidden', widthClass[size])}>
        <Card variant='outlined' className='relative' padding='md'>
          <div className={cn('p-2', flexCenterBetweenClasses)}>
            <p className='text-xs font-medium tracking-wider text-light uppercase'>
              Spis treści <span className='opacity-60'>({items.length})</span>
            </p>
            <button
              type='button'
              aria-expanded={expanded}
              onClick={() => setExpanded(v => !v)}
              className='text-xs underline'
            >
              {expanded ? 'Zwiń' : 'Pokaż wszystko'}
            </button>
          </div>

          <nav aria-label='Spis treści' className='px-2 pb-2'>
            <div className='relative'>
              <div
                className={cn(
                  'overflow-y-auto',
                  expanded ? 'max-h-[70vh]' : 'max-h-40',
                  'pr-1 pb-6',
                )}
              >
                <LinkList dense />
              </div>
              {!expanded && (
                <div
                  aria-hidden='true'
                  className='pointer-events-none absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-white/95 to-transparent'
                />
              )}
            </div>
          </nav>
        </Card>
      </aside>

      <aside className={cn('sticky top-24 hidden', 'self-start lg:block', widthClass[size])}>
        <Card variant='outlined'>
          <p className='mb-2 text-xs tracking-wider text-light uppercase'>Spis treści</p>
          <nav aria-label='Spis treści'>
            <LinkList />
          </nav>
        </Card>
      </aside>
    </>
  );
}
