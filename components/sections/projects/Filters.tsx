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

export default function Filters({ selected, onChange }: Props) {
  const projects = allProjectsData.projects as Project[];

  const { primarycategorys, secondarycategorys } = useMemo(() => {
    const present = new Set<ProjectCategory>(projects.flatMap((p) => p.category));
    return {
      primarycategorys: PRIMARY_SET.filter((c) => present.has(c)),
      secondarycategorys: SECONDARY_SET.filter((c) => present.has(c)),
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
              {primarycategorys.map((category) => (
                <Button key={category} variant={selected.primary === category ? 'accent' : 'normal'} size="small" onClick={() => onChange({ ...selected, primary: category })}>
                  {category}
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
              {secondarycategorys.map((category) => (
                <Button key={category} variant={selected.secondary === category ? 'accent' : 'normal'} size="small" onClick={() => onChange({ ...selected, secondary: category })}>
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
