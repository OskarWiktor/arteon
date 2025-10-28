'use client';

import { useMemo } from 'react';
import Button from '../../ui/Button';
import allProjectsData from '@/data/pl/projects.json';
import type { Project, ProjectCategory } from '@/types/project';

type Props = {
  selected: ProjectCategory[];
  onToggle: (cat: ProjectCategory) => void;
  onClear: () => void;
};

const ORDER: readonly ProjectCategory[] = ['strona', 'sklep', 'blog', 'aplikacja', 'grafika', 'treść', 'marketing'] as const;

export default function Filters({ selected, onToggle, onClear }: Props) {
  const projects = allProjectsData.projects as Project[];

  const available = useMemo(() => {
    const present = new Set<ProjectCategory>();
    for (const p of projects) for (const c of p.category ?? []) present.add(c);
    return ORDER.filter((c) => present.has(c));
  }, [projects]);

  const isSelected = (c: ProjectCategory) => selected.includes(c);
  const hasSelection = selected.length > 0;

  return (
    <section className="w-full">
      <h2 className="reveal-animation mb-2">Filtry projektów</h2>

      <div role="toolbar" aria-label="Filtry realizacji" className="flex w-full flex-wrap items-center gap-2 overflow-x-auto rounded-2xl pt-1 pb-12">
        <Button variant={hasSelection ? 'normal' : 'accent'} size="small" onClick={onClear} aria-pressed={!hasSelection}>
          Wszystkie
        </Button>

        {available.map((c) => (
          <Button key={c} variant={isSelected(c) ? 'accent' : 'normal'} size="small" onClick={() => onToggle(c)} aria-pressed={isSelected(c)}>
            {c.charAt(0).toUpperCase() + c.slice(1)}
          </Button>
        ))}
      </div>
    </section>
  );
}
