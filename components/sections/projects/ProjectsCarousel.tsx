import ProjectsCarouselClient from './ProjectsCarouselClient';
import { getAllProjectPreviews } from '@/lib/projects';
import type { ProjectCategory, ProjectPreview } from '@/types/project';

type Props = {
  projects?: ProjectPreview[];
  max?: number;
  title?: string;
  subtitle?: string;
  category?: ProjectCategory;
  slugs?: string | string[];
  excludeSlug?: string;
};

export default function ProjectsCarousel({ projects, ...props }: Props) {
  const projectPreviews = projects ?? getAllProjectPreviews();
  return <ProjectsCarouselClient projects={projectPreviews} {...props} />;
}
