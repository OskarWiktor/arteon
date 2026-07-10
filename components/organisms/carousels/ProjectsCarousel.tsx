import type { ReactNode } from 'react';
import { getAllProjectPreviews } from '@/lib/projectsDataService';
import type { ProjectCategory, ProjectPreview } from '@/types/project';
import ProjectsCarouselClient from './ProjectsCarouselClient';

type Props = {
  projects?: ProjectPreview[];
  max?: number;
  title?: string;
  subtitle?: string;
  secondaryTitle?: string;
  description?: ReactNode;
  category?: ProjectCategory;
  slugs?: string | string[];
  excludeSlug?: string;
};

export default function ProjectsCarousel({ projects, ...props }: Props) {
  const projectPreviews = projects ?? getAllProjectPreviews();
  return <ProjectsCarouselClient projects={projectPreviews} {...props} />;
}
