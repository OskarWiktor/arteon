'use client';

import Button from '@/components/atoms/buttons/Button';
import type { ProjectCategory, ProjectPreview } from '@/types/project';
import SectionHeader from './SectionHeader';

type Props = {
  projects: ProjectPreview[];
  selected: ProjectCategory[];
  onToggle: (_cat: ProjectCategory) => void;
  onClear: () => void;
};

const ORDER: readonly ProjectCategory[] = [
  'strony',
  'sklepy',
  'blogi',
  'projekty graficzne',
  'treści',
] as const;

export default function Filters({
  projects,
  selected,
  onToggle,
  onClear,
}: Props) {
  const available = (() => {
    const present = new Set<ProjectCategory>();
    for (const p of projects) for (const c of p.category ?? []) present.add(c);
    return ORDER.filter(c => present.has(c));
  })();

  const isSelected = (c: ProjectCategory) => selected.includes(c);
  const hasSelection = selected.length > 0;

  return (
    <section className='w-full'>
      <SectionHeader title='Kliknij aby wybrać typ projektu' />

      <div
        role='toolbar'
        aria-label='Filtry realizacji'
        className='flex w-full flex-wrap items-center gap-2 overflow-x-auto rounded-lg pb-6 md:pb-8 lg:pb-10'
      >
        <Button
          variant={hasSelection ? 'normal' : 'accent'}
          size='small'
          onClick={onClear}
          aria-pressed={!hasSelection}
        >
          Wszystkie
        </Button>

        {available.map(c => (
          <Button
            key={c}
            variant={isSelected(c) ? 'accent' : 'normal'}
            size='small'
            onClick={() => onToggle(c)}
            aria-pressed={isSelected(c)}
          >
            {c.charAt(0).toUpperCase() + c.slice(1)}
          </Button>
        ))}
      </div>
    </section>
  );
}
