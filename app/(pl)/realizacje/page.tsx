import HeroBanner from '@/components/organisms/HeroBanner';
import CTABanner from '@/components/organisms/CTABanner';
import ProjectWithFilters from '@/components/organisms/ProjectsWithFilters';
import Divider from '@/components/atoms/Divider';
import Wrapper from '@/components/atoms/Wrapper';

import projectsData from '@/data/pl/projects.json';
import type { ProjectPreview } from '@/types/project';
import { toAbsoluteUrl } from '@/utils/absoluteUrl';
import { JsonLd } from '@/components/atoms/JsonLd';

type ProjectsData = {
  projects: ProjectPreview[];
};

const projects = (projectsData as ProjectsData).projects;

const schema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  '@id': `${toAbsoluteUrl('/realizacje')}#collection`,
  name: 'Realizacje - strony internetowe, sklepy i projekty graficzne - Arteon',
  description:
    'Zobacz nasze realizacje: strony WWW, sklepy internetowe, identyfikacje wizualne i materiały reklamowe. Każdy projekt to konkretne rozwiązanie dopasowane do potrzeb klienta.',
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
  title: 'Realizacje stron internetowych, sklepów oraz projektów graficznych - Arteon',
  description:
    'Specjalizujemy się na projektowaniu graficznym projektów do druku oraz stron internetowych wraz z realizacją. Sprawdź opisy realizacji i zobacz jakie dajemy efekty',
  alternates: { canonical: toAbsoluteUrl('/realizacje') },
  openGraph: {
    title: 'Realizacje stron internetowych, sklepów oraz projektów graficznych - Arteon',
    description:
      'Specjalizujemy się na projektowaniu graficznym projektów do druku oraz stron internetowych wraz z realizacją. Sprawdź opisy realizacji i zobacz jakie dajemy efekty',
    url: toAbsoluteUrl('/realizacje'),
    type: 'website',
    images: [
      {
        url: toAbsoluteUrl(
          '/assets/projects/finish-masters/strona/moskup-strony-finish-masters.webp',
        ),
        width: 1200,
        height: 630,
        alt: 'Realizacje realizacji Arteon - teczka ofertowa dla kancelarii',
      },
    ],
  },
} as const;

export default function ProjectsPage() {
  return (
    <>
      <HeroBanner
        title='Realizacje stron internetowych, sklepów oraz projektów graficznych'
        description='Specjalizujemy się na projektowaniu graficznym projektów do druku oraz stron internetowych wraz z realizacją. Sprawdź opisy realizacji i zobacz jakie dajemy efekty'
        backgroundImage='/assets/bg/arteon-zbior-realizacji.webp'
        overlay='black'
      />

      <Wrapper>
        <Divider size='xs' />

        <ProjectWithFilters projects={projects} />

        <Divider size='sm' />
      </Wrapper>

      <CTABanner
        title='Zrealizuj swój pomysł'
        description='Skontaktuj się z nami i opowiedz o tym co chcesz stworzyć w ramach swojej działalności. Powiemy co możemy dla Ciebie zrobić i doradzimy najlepsze rozwiązanie dla Twoich potrzeb i Twojego biznesu.'
        btnOne='Kontakt'
        btnOneHref='/kontakt'
        btnTwo='Poznaj wszystkie usługi'
        btnTwoHref='/uslugi'
        backgroundImage='/assets/projects/simba-group/simba-group-folder-reklamowy-mockup.webp'
        overlay='black'
      />

      <JsonLd schema={schema} id='schema-realizacje-collection' />
    </>
  );
}
