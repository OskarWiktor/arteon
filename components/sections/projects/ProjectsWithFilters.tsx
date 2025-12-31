import ProjectsWithFiltersClient from './ProjectsWithFiltersClient';
import { getAllProjectPreviews } from '@/lib/projectsDataService';
import type { ProjectPreview } from '@/types/project';

type Props = {
  projects?: ProjectPreview[];
};

export default function ProjectsWithFilters({ projects }: Props) {
  const projectPreviews = projects ?? getAllProjectPreviews();
  return <ProjectsWithFiltersClient projects={projectPreviews} />;
}
