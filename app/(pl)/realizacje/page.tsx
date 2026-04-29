import HeroBanner from '@/components/sections/HeroBanner';
import CTABanner from '@/components/sections/CTABanner';
import ProjectWithFilters from '@/components/sections/projects/ProjectsWithFilters';
import Gap from '@/components/ui/Gap';
import Wrapper from '@/components/ui/Wrapper';

import projectsData from '@/data/pl/projects.json';
import type { ProjectPreview } from '@/types/project';
import { toAbsoluteUrl } from '@/utils/absoluteUrl';

type ProjectsData = {
  projects: ProjectPreview[];
};

const projects = (projectsData as ProjectsData).projects;

const schema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  '@id': `${toAbsoluteUrl('/realizacje')}#collection`,
  name: 'Realizacje - strony internetowe, sklepy i projekty graficzne - Arteon',
  description: 'Zobacz nasze realizacje: strony WWW, sklepy internetowe, identyfikacje wizualne i materiały reklamowe. Każdy projekt to konkretne rozwiązanie dopasowane do potrzeb klienta.',
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
  title: 'Realizacje - strony internetowe, sklepy i projekty graficzne - Arteon',
  description: 'Zobacz nasze realizacje: strony WWW, sklepy internetowe, identyfikacje wizualne i materiały reklamowe. Każdy projekt to konkretne rozwiązanie dopasowane do potrzeb klienta.',
  alternates: { canonical: toAbsoluteUrl('/realizacje') },
  openGraph: {
    title: 'Realizacje Arteon - strony, sklepy i projekty graficzne',
    description: 'Przejrzyj nasze portfolio: strony internetowe, sklepy online, identyfikacje wizualne i materiały drukowane. Sprawdź, jak pomagamy firmom budować obecność w sieci.',
    url: toAbsoluteUrl('/realizacje'),
    type: 'website',
    images: [
      {
        url: toAbsoluteUrl('/assets/projects/finish-masters/strona/moskup-strony-finish-masters.webp'),
        width: 1200,
        height: 630,
        alt: 'Portfolio realizacji Arteon - teczka ofertowa dla kancelarii',
      },
    ],
  },
} as const;

export default function ProjectsPage() {
  return (
    <>
      <HeroBanner
        title="Realizacje"
        description="Strony, sklepy, identyfikacje wizualne, materiały drukowane. Zobacz wybrane projekty."
        variant="center"
        backgroundImage="/assets/projects/finish-masters/strona/moskup-strony-finish-masters.webp"
        overlay="black"
      />

      <Wrapper>
        <Gap size="xs" />

        <ProjectWithFilters projects={projects} />

        <Gap size="sm" />
      </Wrapper>

      <CTABanner
        title="Twój projekt może być następny"
        description="Napisz czego potrzebujesz - przygotujemy dla Ciebie darmową wycenę"
        btnOne="Napisz do nas"
        btnOneLink="/kontakt"
        btnTwo="Poznaj usługi"
        btnTwoLink="/uslugi"
        backgroundImage="/assets/projects/simba-group/simba-group-folder-reklamowy-mockup.webp"
        overlay="black"
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </>
  );
}
