'use client';

import { AnimatePresence, motion } from 'framer-motion';
import projectsData from '@/data/pl/projects.json';
import ProjectCard from '../../ui/ProjectCard';
import type { Project, ProjectCategory, PrimaryCategory, SecondaryCategory } from '@/types/project';

type Props = {
  selectedCategory?: ProjectCategory | null;
  selectedPrimary?: PrimaryCategory | null;
  selectedSecondary?: SecondaryCategory | null;
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

export default function ProjectsGrid({ selectedCategory = null, selectedPrimary = null, selectedSecondary = null }: Props) {
  const allProjects = projectsData.projects as Project[];

  const filteredProjects = allProjects.filter((p) => {
    const okSingle = selectedCategory ? p.category.includes(selectedCategory) : true;
    const okPrimary = selectedPrimary ? p.category.includes(selectedPrimary) : true;
    const okSecondary = selectedSecondary ? p.category.includes(selectedSecondary) : true;
    return okSingle && okPrimary && okSecondary;
  });

  if (!filteredProjects.length) return null;

  const animKey = `${selectedCategory ?? 'all'}|${selectedPrimary ?? 'all'}|${selectedSecondary ?? 'all'}`;

  return (
    <section className="w-full">
      <div className="grid auto-rows-max grid-cols-1 gap-8 pt-8 md:grid-cols-2">
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
