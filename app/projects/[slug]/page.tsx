import { notFound } from 'next/navigation';
import projectsData from '@/data/projects.json';
import type { Project } from '@/types/project';

const projects = projectsData.projects as Project[];

// ✅ 1. Generujemy ścieżki
export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

// ✅ 2. Komponent strony
export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) return notFound();

  return (
    <main className="px-6 py-8">
      <h1 className="text-3xl font-bold">{project.title}</h1>
      <img src={project.image} alt={project.title} className="mt-4 w-full max-w-xl" />
      <p className="mt-4 text-lg">{project.short}</p>
      <p className="mt-2 text-sm text-gray-600">Kategoria: {project.category}</p>
      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block text-blue-600 underline"
        >
          Zobacz stronę
        </a>
      )}
    </main>
  );
}
