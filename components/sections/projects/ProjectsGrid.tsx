'use client';

import { useMemo } from 'react';
import allProjectsData from '@/data/pl/projects.json';
import type { Project, ProjectCategory } from '@/types/project';
import ProjectCard from '../../ui/ProjectCard';
import { AnimatePresence, motion } from 'framer-motion';

type Props = {
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

export default function ProjectsGrid({ selectedCategories }: Props) {
  const projects = allProjectsData.projects as Project[];

  const filteredProjects = useMemo(() => {
    if (!selectedCategories.length) return projects;
    return projects.filter((p) => {
      const cats = new Set(p.category ?? []);
      return selectedCategories.every((c) => cats.has(c));
    });
  }, [projects, selectedCategories]);

  if (!filteredProjects.length) {
    return <p className="mt-6 text-[#5e5e5e]">Brak projektów dla wybranych filtrów.</p>;
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
