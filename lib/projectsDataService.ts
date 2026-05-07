import 'server-only';

import projectsData from '@/data/pl/projects.json';
import type { Project, ProjectPreview } from '@/types/project';

interface ProjectsData {
  projects: Project[];
}

const projects = (projectsData as ProjectsData).projects;

export function getAllProjects(): Project[] {
  return projects;
}

export function findProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllProjectPreviews(): ProjectPreview[] {
  return projects.map((p) => ({
    slug: p.slug,
    title: p.title,
    short: typeof p.short === 'string' ? p.short : '',
    image: p.image,
    category: p.category,
    link: p.link,
  }));
}
