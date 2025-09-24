import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Image from 'next/image';

import Button from '@/components/ui/Button';
import Gap from '@/components/ui/Gap';
import Wrapper from '@/components/ui/Wrapper';
import HeroBanner from '@/components/sections/HeroBaner';

import projectsData from '@/data/pl/projects.json';
import type { Project } from '@/types/project';
import TableOfContents from '@/components/sections/TableOfContent';
import SectionInfo from '@/components/ui/sections/SectionInfo';
import Breadcrumbs from '@/components/sections/BreadCrumbs';
import Badge from '@/components/ui/Badge';

const projects = projectsData.projects as Project[];

const siteUrl = 'https://www.arteonagency.pl';
const getProject = (slug: string) => projects.find((p) => p.slug === slug);
const projectUrl = (slug: string) => `${siteUrl}/realizacje/${slug}`;

/* ── SEO/JSON-LD: opis tylko z SEO ── */
function jsonLd(project: Project) {
  const url = projectUrl(project.slug);
  const headline = project.seo?.title || project.title;
  const description = project.seo?.description || '';
  const image = project.image?.startsWith('http') ? project.image : `${siteUrl}${project.image}`;

  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    headline,
    description,
    image: [image],
    author: [{ '@type': 'Organization', name: 'Arteon' }],
    publisher: { '@type': 'Organization', name: 'Arteon', logo: { '@type': 'ImageObject', url: `${siteUrl}/icon-512x512.png` } },
    about: project.category,
  } as const;
}

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

type PageProps = { params: { slug: string } };

/* ── META: tylko z SEO ── */
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const project = getProject(params.slug);
  if (!project) return {};
  const title = project.seo?.title || `${project.title} - Case study`;
  const description = project.seo?.description || '';
  const url = projectUrl(project.slug);
  const image = project.image?.startsWith('http') ? project.image : `${siteUrl}${project.image}`;
  return {
    title,
    description,
    alternates: { canonical: project.seo?.canonical || url },
    openGraph: { type: 'article', url, title, description, images: [{ url: image, width: 1200, height: 630, alt: project.title }] },
    twitter: { card: 'summary_large_image', title, description, images: [image] },
  };
}

/* ── mini helpery do ReactNode/HTML-string ── */
const Inline = ({ content }: { content?: React.ReactNode }) =>
  !content ? null : typeof content === 'string' ? <span dangerouslySetInnerHTML={{ __html: content }} /> : <>{content}</>;

const Block = ({ content }: { content?: React.ReactNode }) =>
  !content ? null : typeof content === 'string' ? <div dangerouslySetInnerHTML={{ __html: content }} /> : <>{content}</>;

function Stat({ label, value, note }: { label: string; value: string; note?: string }) {
  return (
    <div className="rounded-xl bg-white p-4 shadow-md">
      <p className="h5">{value}</p>
      <p className=" text-[#5e5e5e]">{label}</p>
      {note && <p className="mt-2">{note}</p>}
    </div>
  );
}

export default function ProjectPage({ params }: PageProps) {
  const project = getProject(params.slug);
  if (!project) return notFound();

  return (
    <>
      <HeroBanner backgroundImage={project.image} />

      <Breadcrumbs second={{ href: '/realizacje', label: 'Realizacje' }} third={{ href: `/realizacje/${project.slug}`, label: project.title }} includeJsonLd />

      <Gap size="xs" />

      <Wrapper as="article" id="article-root" itemScope itemType="https://schema.org/Article" className="grid gap-8 lg:grid-cols-[1fr_208px]">
        <div>
          <header className="mb-2">
            <h1 className="h2 mb-1" itemProp="headline">
              {project.title}
            </h1>

            {project.category?.length ? <span className="mb-4 block text-sm text-[#5e5e5e] uppercase">{project.category.join(' • ')}</span> : null}

            {project.short && (
              <p itemProp="description">
                <Inline content={project.short} />
              </p>
            )}
          </header>

          <div className="mb-6 flex flex-wrap items-center gap-1 text-sm">
            {project.client?.name && <Badge text={project.client.name} />}
            {project.client?.sector && <Badge text={project.client.sector} />}
            {project.client?.location && <Badge text={project.client.location} />}
            {project.timeline?.start && <Badge text={project.timeline.end ? `Realizacja: ${project.timeline.start} - ${project.timeline.end}` : `Start: ${project.timeline.start}`} />}
            {project.stack?.map((s) => <Badge key={s} text={s} />)}
          </div>

          {project.link && (
            <>
              <div className="mt-4">
                <Button variant="accent" arrow link={project.link} aria-label={`Zobacz realizację: ${project.title} na żywo`}>
                  Zobacz stronę
                </Button>
              </div>
              <Gap size="sm" />
            </>
          )}

          {(project.description || project.task) && (
            <>
              <SectionInfo title="Kontekst projektu">
                <Block content={project.description} />
                {project.task && (
                  <p className="mt-6">
                    <strong>Nasze zadanie:</strong> <Inline content={project.task} />
                  </p>
                )}
              </SectionInfo>
              <Gap size="sm" />
            </>
          )}

          {project.goals ? (
            <>
              <SectionInfo title="Cele biznesowe">
                <Block content={project.goals} />
              </SectionInfo>
              <Gap size="sm" />
            </>
          ) : null}

          {project.deliverables?.length ? (
            <>
              <SectionInfo title="Zakres prac">
                <ul className="ml-6 list-disc">
                  {project.deliverables.map((d, i) =>
                    typeof d === 'string' ? (
                      <li key={i} dangerouslySetInnerHTML={{ __html: d }} />
                    ) : (
                      <li key={i}>{d as any}</li>
                    )
                  )}
                </ul>
              </SectionInfo>
              <Gap size="sm" />
            </>
          ) : null}

          {project.challenges && (
            <>
              <SectionInfo title="Wyzwania">
                <Block content={project.challenges} />
              </SectionInfo>
              <Gap size="sm" />
            </>
          )}

          {project.solutions && (
            <>
              <SectionInfo title="Rozwiązania">
                <Block content={project.solutions} />
              </SectionInfo>
              <Gap size="sm" />
            </>
          )}

          {project.outcomes?.length ? (
            <>
              <SectionInfo title="Rezultaty">
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {project.outcomes.map((o, i) => (
                    <Stat key={i} label={o.label} value={o.value} note={o.note} />
                  ))}
                </div>
              </SectionInfo>
              <Gap size="sm" />
            </>
          ) : null}

          {project.beforeAfter && (project.beforeAfter.beforeImage || project.beforeAfter.afterImage) ? (
            <>
              <SectionInfo title="Jak było - jak jest">
                <div className="grid gap-6 md:grid-cols-2">
                  <figure>
                    <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-black/10">
                      <Image src={project.beforeAfter.beforeImage || project.image} alt="Widok przed zmianami" fill className="object-cover" sizes="(min-width: 768px) 50vw, 100vw" />
                    </div>
                    <figcaption className="mt-2 text-sm font-semibold text-[#5e5e5e]">Przed</figcaption>
                  </figure>
                  <figure>
                    <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-black/10">
                      <Image src={project.beforeAfter.afterImage || project.image} alt="Widok po wdrożeniu" fill className="object-cover" sizes="(min-width: 768px) 50vw, 100vw" />
                    </div>
                    <figcaption className="mt-2 text-sm font-semibold text-[#5e5e5e]">Po</figcaption>
                  </figure>
                </div>
                {project.beforeAfter.note && <div className="mt-3 text-sm" dangerouslySetInnerHTML={{ __html: project.beforeAfter.note }} />}
              </SectionInfo>
              <Gap size="sm" />
            </>
          ) : null}

          {project.process_steps?.length ? (
            <>
              <SectionInfo title="Proces">
                <ul className="grid gap-3 md:grid-cols-2">
                  {project.process_steps.map((step, i) => (
                    <li key={i} className="rounded-xl bg-white p-3 shadow-md">
                      <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full border-1 border-[#5e5e5e] text-xs font-bold text-[#5e5e5e]">{i + 1}</span>
                      <span dangerouslySetInnerHTML={{ __html: step }} />
                    </li>
                  ))}
                </ul>
              </SectionInfo>
              <Gap size="sm" />
            </>
          ) : null}

          {project.testimonial?.quote ? (
            <>
              <SectionInfo title="Opinia klienta">
                <blockquote className="rounded-xl bg-white p-6 shadow-md">
                  <p className="text-lg leading-relaxed">“{project.testimonial.quote}”</p>
                  {(project.testimonial.author || project.testimonial.role) && (
                    <footer className="mt-2 text-base text-[#5e5e5e]">
                      {project.testimonial.author}
                      {project.testimonial.role ? `, ${project.testimonial.role}` : ''}
                    </footer>
                  )}
                </blockquote>
              </SectionInfo>
              <Gap size="sm" />
            </>
          ) : null}

          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd(project)) }} />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'BreadcrumbList',
                itemListElement: [
                  { '@type': 'ListItem', position: 1, name: 'Strona główna', item: siteUrl },
                  { '@type': 'ListItem', position: 2, name: 'Realizacje', item: `${siteUrl}/realizacje` },
                  { '@type': 'ListItem', position: 3, name: project.title, item: projectUrl(project.slug) },
                ],
              }),
            }}
          />
        </div>

        <TableOfContents rootSelector="#article-root" />
      </Wrapper>
    </>
  );
}
