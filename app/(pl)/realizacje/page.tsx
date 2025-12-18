import HeroBanner from '@/components/sections/HeroBanner';
import ProjectWithFilters from '@/components/sections/projects/ProjectsWithFilters';
import Gap from '@/components/ui/Gap';
import Wrapper from '@/components/ui/Wrapper';

import projectsData from '@/data/pl/projects.json';
import type { ProjectPreview } from '@/types/project';
import { toAbsoluteUrl } from '@/lib/url';

type ProjectsData = {
  projects: ProjectPreview[];
};

const projects = (projectsData as ProjectsData).projects;

const schema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  '@id': `${toAbsoluteUrl('/realizacje')}#collection`,
  name: 'Portfolio: strony, sklepy, Projekty graficzne i kampanie | Arteon',
  description: 'Zobacz wybrane realizacje: strony WWW, sklepy online, identyfikacje i kampanie. Projekty, które dowożą wynik.',
  url: toAbsoluteUrl('/realizacje'),
  mainEntity: {
    '@type': 'ItemList',
    '@id': `${toAbsoluteUrl('/realizacje')}#itemlist`,
    itemListOrder: 'https://schema.org/ItemListOrderAscending',
    itemListElement: projects.map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: toAbsoluteUrl(`/realizacje/${p.slug}`),
      name: p.title,
    })),
  },
};

export const metadata = {
  title: 'Portfolio: strony, sklepy, Projekty graficzne i kampanie | Arteon',
  description: 'Zobacz wybrane realizacje: strony WWW, sklepy online, identyfikacje i kampanie. Projekty, które dowożą wynik.',
  alternates: { canonical: toAbsoluteUrl('/realizacje') },
  openGraph: {
    title: 'Portfolio Arteon - projekty, które działają',
    description: 'Strony, sklepy, identyfikacje i kampanie. Konkretne efekty i przejrzysty proces.',
    url: toAbsoluteUrl('/realizacje'),
    type: 'website',
    // TODO: Add unique OpenGraph image for portfolio page: /assets/og/realizacje.webp (1200x630px)
    images: [
      {
        url: toAbsoluteUrl('/assets/bg/abstract-bg13.webp'),
        width: 1200,
        height: 630,
        alt: 'Portfolio Arteon',
      },
    ],
  },
} as const;

export default function ProjectsPage() {
  return (
    <>
      <HeroBanner title="Wybrane realizacje" variant="center" backgroundImage="/assets/bg/abstract-bg13.webp" overlay="black" />

      <Wrapper>
        <Gap size="sm" />

        <ProjectWithFilters projects={projects} />

        <Gap size="sm" />
      </Wrapper>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </>
  );
}
