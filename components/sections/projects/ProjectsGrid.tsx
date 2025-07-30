'use client';

import { AnimatePresence, motion } from 'framer-motion';
import projectsData from '@/data/pl/projects.json';
import ProjectCard from '../../ui/ProjectCard';
import Wrapper from '../../ui/Wrapper';
import type { Project } from '@/types/project';

type Props = {
  selectedCategory: string | null;
};

const cardVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      delay: i * 0.1,
    },
  }),
  exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
};

export default function ProjectsGrid({ selectedCategory }: Props) {
  const allProjects = projectsData.projects as Project[];
  const filteredProjects = selectedCategory ? allProjects.filter((p) => p.category.some((cat) => selectedCategory.includes(cat))) : allProjects;

  return (
    <section className="w-full px-4 md:px-6">
      <Wrapper>
        <div className="grid auto-rows-max grid-cols-1 gap-8 pt-8 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="wait" key={selectedCategory ?? 'all'}>
            {filteredProjects.map((project, i) => (
              <motion.div key={project.slug} variants={cardVariants} initial="hidden" animate="visible" exit="exit" custom={i}>
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </Wrapper>
    </section>
  );
}
