'use client';

import { useMemo } from 'react';
import Button from '../../ui/Button';
import Wrapper from '../../ui/Wrapper';
import allProjectsData from '@/data/pl/projects.json';
import type { Project, ProjectCategory, PrimaryCategory, SecondaryCategory } from '@/types/project';

type Selected = {
  primary: PrimaryCategory | null;
  secondary: SecondaryCategory | null;
};

type Props = {
  selected: Selected;
  onChange: (next: Selected) => void;
};

const PRIMARY_SET: readonly PrimaryCategory[] = ['strona', 'sklep', 'blog', 'aplikacja'] as const;
const SECONDARY_SET: readonly SecondaryCategory[] = ['grafika', 'treść', 'marketing'] as const;
const ALLOWED: readonly ProjectCategory[] = [...PRIMARY_SET, ...SECONDARY_SET];

export default function Filters({ selected, onChange }: Props) {
  const projects = allProjectsData.projects as Project[];

  const { primaryCategories, secondaryCategories } = useMemo(() => {
    const present = new Set<ProjectCategory>();
    for (const p of projects) {
      for (const c of p.category ?? []) {
        if (ALLOWED.includes(c as ProjectCategory)) {
          present.add(c as ProjectCategory);
        }
      }
    }
    return {
      primaryCategories: PRIMARY_SET.filter((c) => present.has(c)),
      secondaryCategories: SECONDARY_SET.filter((c) => present.has(c)),
    };
  }, [projects]);

  return (
    <section className="w-full">
      <Wrapper className="flex flex-col gap-4">
        <h2>Filtry projektów</h2>

        <div className="flex flex-col justify-between md:flex-row">
          <div>
            <p className="mb-1 text-sm font-medium">Typ projektu</p>
            <div role="group" aria-label="Filtr: Typ projektu" className="flex flex-wrap gap-2">
              <Button variant={!selected.primary ? 'accent' : 'normal'} size="small" onClick={() => onChange({ ...selected, primary: null })}>
                Wszystkie
              </Button>
              {primaryCategories.map((category) => (
                <Button key={category} variant={selected.primary === category ? 'accent' : 'normal'} size="small" onClick={() => onChange({ ...selected, primary: category })}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </Button>
              ))}
            </div>
          </div>

          <div>
            <p className="mt-4 mb-1 text-sm font-medium md:mt-0">Dodatkowe usługi</p>
            <div role="group" aria-label="Filtr: Usługi" className="flex flex-wrap gap-2">
              <Button variant={!selected.secondary ? 'accent' : 'normal'} size="small" onClick={() => onChange({ ...selected, secondary: null })}>
                Wszystkie
              </Button>
              {secondaryCategories.map((category) => (
                <Button key={category} variant={selected.secondary === category ? 'accent' : 'normal'} size="small" onClick={() => onChange({ ...selected, secondary: category })}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
