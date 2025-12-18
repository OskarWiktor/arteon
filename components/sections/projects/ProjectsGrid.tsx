'use client';

import { useMemo } from 'react';
import type { ProjectCategory, ProjectPreview } from '@/types/project';
import ProjectCard from '../../ui/ProjectCard';
import { AnimatePresence, motion } from 'framer-motion';

const ui = {
  pl: {
    noProjects: 'Brak projektów dla wybranych filtrów.',
  },
} as const;

type Props = {
  projects: ProjectPreview[];
  selectedCategories: ProjectCategory[];
};

const cardVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: i * 0.1 },
  }),
  exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
};

export default function ProjectsGrid({ projects, selectedCategories }: Props) {
  const filteredProjects = useMemo(() => {
    if (!selectedCategories.length) return projects;
    return projects.filter((p) => {
      const cats = new Set(p.category ?? []);
      return selectedCategories.every((c) => cats.has(c));
    });
  }, [projects, selectedCategories]);

  const t = ui.pl;

  if (!filteredProjects.length) {
    return <p className="text-light mt-6 text-base">{t.noProjects}</p>;
  }

  const animKey = JSON.stringify([...selectedCategories].sort());

  return (
    <section className="w-full">
      <div className="grid auto-rows-max grid-cols-1 gap-8 md:grid-cols-2">
        <AnimatePresence mode="wait" key={animKey}>
          {filteredProjects.map((project, i) => (
            <motion.div key={project.slug} variants={cardVariants} initial="hidden" animate="visible" exit="exit" custom={i}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
