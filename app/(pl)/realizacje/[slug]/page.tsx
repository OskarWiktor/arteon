import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Image from 'next/image';

import Button from '@/components/ui/buttons/Button';
import Gap from '@/components/ui/Gap';
import Wrapper from '@/components/ui/Wrapper';
import HeroBanner from '@/components/sections/HeroBanner';

import projectsData from '@/data/pl/projects.json';
import type { Project } from '@/types/project';
import { toAbsoluteUrl } from '@/lib/absoluteUrl';
import TableOfContents from '@/components/sections/TableOfContent';
import SectionInfo from '@/components/ui/sections/SectionInfo';
import Breadcrumbs from '@/components/sections/BreadCrumbs';
import Badge from '@/components/ui/Badge';
import CTABanner from '@/components/sections/CTABanner';
import FaqPanels from '@/components/ui/FaqPanels';
import ShareBlock from '@/components/sections/ShareBlock';
import ProjectsCarousel from '@/components/sections/projects/ProjectsCarousel';

interface ProjectsData {
  projects: Project[];
}

const projects = (projectsData as ProjectsData).projects;

const getProject = (slug: string) => projects.find((p) => p.slug === slug);
const projectUrl = (slug: string) => toAbsoluteUrl(`/realizacje/${slug}`);

export const dynamicParams = false;

function jsonLd(project: Project) {
  const url = projectUrl(project.slug);
  const headline = project.seo?.title || project.title;
  const description = project.seo?.description || '';
  const image = toAbsoluteUrl(project.image || '');

  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    headline,
    description,
    image: [image],
    author: [{ '@type': 'Organization', name: 'Arteon' }],
    publisher: {
      '@type': 'Organization',
      name: 'Arteon',
      logo: { '@type': 'ImageObject', url: toAbsoluteUrl('/icon-512x512.png') },
    },
    about: project.category,
  } as const;
}

const Inline = ({ content }: { content?: React.ReactNode }) => (!content ? null : typeof content === 'string' ? <span dangerouslySetInnerHTML={{ __html: content }} /> : <>{content}</>);

const Block = ({ content }: { content?: React.ReactNode }) => (!content ? null : typeof content === 'string' ? <div dangerouslySetInnerHTML={{ __html: content }} /> : <>{content}</>);

const defaultCTA = {
  title: 'Rozwiń z nami swoją firmę',
  description: 'Tworzymy strony, sklepy, blogi, SEO, treści, grafiki oraz marketing cyfrowy. U nas znajdziesz rozwiązania, dla każdej firmy, na każdy budżet',
  btnOne: 'Skontaktuj się',
  btnOneLink: '/kontakt',
  btnTwo: 'Sprawdź naszą ofertę',
  btnTwoLink: '/uslugi',
  backgroundImage: '/assets/bg/abstract-bg13.webp',
  overlay: 'black',
} as const;

function Stat({ label, value, note }: { label: string; value: string; note?: string }) {
  return (
    <div className="rounded-2xl bg-white p-4 shadow-md">
      <p className="h5">{value}</p>
      <p className="text-light">{label}</p>
      {note && <p className="mt-2">{note}</p>}
    </div>
  );
}

function Aspect({ ratio = '16/9', children }: { ratio?: '16/9' | '4/3' | '1/1' | 'auto'; children: React.ReactNode }) {
  if (ratio === 'auto') {
    return <div className="relative overflow-hidden rounded-2xl border border-black/10">{children}</div>;
  }

  const map: Record<string, string> = {
    '16/9': 'aspect-[16/9]',
    '4/3': 'aspect-[4/3]',
    '1/1': 'aspect-square',
  };

  return <div className={`relative overflow-hidden rounded-2xl border border-black/10 ${map[ratio] || ''}`}>{children}</div>;
}

function RenderBlocks({ blocks }: { blocks?: Project['contentBlocks'] }) {
  if (!blocks?.length) return null;

  return (
    <>
      {blocks.map((b, i) => {
        if (b.type === 'richtext') {
          return <div key={`rt-${i}`} dangerouslySetInnerHTML={{ __html: b.html }} />;
        }

        if (b.type === 'image') {
          const isAuto = b.ratio === 'auto';
          return (
            <div key={`img-${i}`}>
              <Gap size="xs" />
              <figure>
                {isAuto ? (
                  <div className="overflow-hidden rounded-2xl border border-black/10">
                    <Image
                      src={b.src}
                      alt={b.alt}
                      width={b.width ?? 2000}
                      height={b.height ?? 2800}
                      sizes="100vw"
                      style={{ width: '100%', height: 'auto' }}
                      priority={b.priority ?? false}
                      quality={b.quality ?? 90}
                    />
                  </div>
                ) : (
                  <Aspect ratio={b.ratio || '16/9'}>
                    <Image src={b.src} alt={b.alt} fill className="object-cover" sizes="(min-width:768px) 75vw, 100vw" quality={b.quality ?? 90} />
                  </Aspect>
                )}
                {b.caption && <figcaption className="text-light mt-2 text-sm">{b.caption}</figcaption>}
              </figure>
            </div>
          );
        }

        if (b.type === 'imageText') {
          const Img =
            b.ratio === 'auto' ? (
              <div className="overflow-hidden rounded-2xl border border-black/10">
                <Image
                  src={b.src}
                  alt={b.alt}
                  width={b.width ?? 2000}
                  height={b.height ?? 2800}
                  sizes="(min-width:768px) 50vw, 100vw"
                  style={{ width: '100%', height: 'auto' }}
                  priority={b.priority ?? false}
                  quality={b.quality ?? 90}
                />
              </div>
            ) : (
              <Aspect ratio={b.ratio || '4/3'}>
                <Image src={b.src} alt={b.alt} fill className="object-cover" sizes="(min-width:768px) 50vw, 100vw" quality={b.quality ?? 90} />
              </Aspect>
            );

          return (
            <div key={`imgt-${i}`}>
              <Gap size="xs" />
              <div className="grid items-start gap-6 md:grid-cols-2">
                {b.imageSide === 'right' ? (
                  <>
                    <div dangerouslySetInnerHTML={{ __html: b.html }} />
                    {Img}
                  </>
                ) : (
                  <>
                    {Img}
                    <div dangerouslySetInnerHTML={{ __html: b.html }} />
                  </>
                )}
              </div>
            </div>
          );
        }

        return null;
      })}
    </>
  );
}

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

type PageProps = { params: { slug: string } };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const project = getProject(params.slug);
  if (!project) return {};

  const title = project.seo?.title || `${project.title} - Case study`;
  const description = project.seo?.description || '';
  const image = project.image ? toAbsoluteUrl(project.image) : undefined;

  const canonicalPath = project.seo?.canonical || toAbsoluteUrl(`/realizacje/${project.slug}`);
  const ogUrl = toAbsoluteUrl(canonicalPath);
  return {
    title,
    description,
    alternates: { canonical: ogUrl },
    openGraph: {
      type: 'article',
      url: ogUrl,
      title,
      description,
      images: image ? [{ url: image, width: 1200, height: 630, alt: project.title }] : undefined,
    },
    twitter: { card: 'summary_large_image', title, description, images: image ? [image] : undefined },
  };
}

export default function ProjectPage({ params }: PageProps) {
  const project = getProject(params.slug);
  if (!project) return notFound();

  const ctaProps = { ...defaultCTA, ...(project.cta ?? {}) };
  const url = projectUrl(project.slug);
  const shareTitle = project.seo?.title || project.title;

  return (
    <>
      <HeroBanner backgroundImage={project.image} />

      <Breadcrumbs second={{ href: '/realizacje', label: 'Realizacje' }} third={{ href: `/realizacje/${project.slug}`, label: project.title }} includeJsonLd />

      <Wrapper as="article" id="article-root" itemScope itemType="https://schema.org/Article" className="flex flex-col-reverse gap-8 lg:grid lg:grid-cols-[1fr_208px]">
        <div>
          <header className="mb-2">
            <h1 className="h2 mb-1" itemProp="headline">
              {project.title}
            </h1>

            {project.category?.length ? <span className="text-light mb-4 block text-sm uppercase">{project.category.join(' • ')}</span> : null}

            {project.short && (
              <p itemProp="description">
                <Inline content={project.short} />
              </p>
            )}
          </header>

          <div className="mb-4 flex flex-wrap items-center gap-1 text-sm">
            {project.client?.name && <Badge text={project.client.name} />}
            {project.client?.sector && <Badge text={project.client.sector} />}
            {project.client?.location && <Badge text={project.client.location} />}
            {project.timeline?.start && <Badge text={project.timeline.end ? `Realizacja: ${project.timeline.start} - ${project.timeline.end}` : `Start: ${project.timeline.start}`} />}
            {project.stack?.map((s) => <Badge key={s} text={s} />)}
          </div>

          {project.link && (
            <div className="mt-2">
              <Button variant="accent" arrow link={project.link} aria-label={`Zobacz realizację: ${project.title} na żywo`}>
                Zobacz stronę
              </Button>
            </div>
          )}

          {(project.description || project.task) && (
            <>
              <Gap size="sm" variant="line" />
              <SectionInfo title="Kontekst projektu">
                <Block content={project.description} />
                {project.task && (
                  <p className="mt-6">
                    <strong>Nasze zadanie:</strong> <Inline content={project.task} />
                  </p>
                )}
              </SectionInfo>
              <Gap size="sm" variant="line" />
            </>
          )}

          {project.goals ? (
            <>
              <SectionInfo title="Cele biznesowe">
                <Block content={project.goals} />
              </SectionInfo>
              <Gap size="sm" variant="line" />
            </>
          ) : null}

          {project.process_steps?.length ? (
            <>
              <SectionInfo title="Proces">
                <ul className="grid gap-3 md:grid-cols-2">
                  {project.process_steps.map((step, i) => (
                    <li key={i} className="rounded-2xl bg-white p-3 shadow-md">
                      <span className="border-light text-light mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full border text-xs font-bold">{i + 1}</span>
                      <span dangerouslySetInnerHTML={{ __html: step }} />
                    </li>
                  ))}
                </ul>
              </SectionInfo>
              <Gap size="sm" variant="line" />
            </>
          ) : null}

          {project.deliverables?.length ? (
            <>
              <SectionInfo title="Zakres prac">
                <ul className="ml-6 list-disc">{project.deliverables.map((d, i) => (typeof d === 'string' ? <li key={i} dangerouslySetInnerHTML={{ __html: d }} /> : <li key={i}>{d}</li>))}</ul>
              </SectionInfo>
              <Gap size="sm" variant="line" />
            </>
          ) : null}

          {project.beforeAfter && (project.beforeAfter.beforeImage || project.beforeAfter.afterImage) ? (
            <>
              <SectionInfo title="Jak było - jak jest">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <figure>
                    <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-black/10">
                      <Image src={project.beforeAfter.beforeImage || project.image} alt="Widok przed zmianami" fill className="object-cover" sizes="(min-width:768px) 50vw, 100vw" />
                    </div>
                    <figcaption className="text-light mt-2 text-sm">Przed</figcaption>
                  </figure>

                  <figure>
                    <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-black/10">
                      <Image src={project.beforeAfter.afterImage || project.image} alt="Widok po wdrożeniu" fill className="object-cover" sizes="(min-width:768px) 50vw, 100vw" />
                    </div>
                    <figcaption className="text-light mt-2 text-sm font-semibold">Po</figcaption>
                  </figure>
                </div>

                {project.beforeAfter.note && <div className="mt-3 text-sm" dangerouslySetInnerHTML={{ __html: project.beforeAfter.note }} />}
              </SectionInfo>
              <Gap size="sm" variant="line" />
            </>
          ) : null}

          {project.challenges ? (
            <>
              <SectionInfo title="Wyzwania">
                <Block content={project.challenges} />
              </SectionInfo>
              <Gap size="sm" variant="line" />
            </>
          ) : null}

          {project.solutions ? (
            <>
              <SectionInfo title="Rozwiązania">
                <Block content={project.solutions} />
              </SectionInfo>
              <Gap size="sm" variant="line" />
            </>
          ) : null}

          <RenderBlocks blocks={project.contentBlocks} />

          {project.outcomes?.length ? (
            <>
              <SectionInfo title="Rezultaty">
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {project.outcomes.map((o, i) => (
                    <Stat key={i} label={o.label} value={o.value} note={o.note} />
                  ))}
                </div>
              </SectionInfo>
            </>
          ) : null}

          {project.faq?.length ? (
            <>
              <Gap size="sm" variant="line" />
              <FaqPanels openByDefault={1} title="Najczęstsze pytania" subtitle="FAQ" items={project.faq} pageUrl={projectUrl(project.slug)} />
            </>
          ) : null}

          {project.testimonial?.quote ? (
            <>
              <SectionInfo title="Ocena współpracy">
                <blockquote className="rounded-2xl bg-white p-6 shadow-md">
                  <p className="text-lg leading-relaxed">“{project.testimonial.quote}”</p>
                  {(project.testimonial.author || project.testimonial.role) && (
                    <footer className="mt-2">
                      <h5 className="mt-5">{project.testimonial.author}</h5>
                      {project.testimonial.role ? <p className="text-light mt-1 mb-3">{project.testimonial.role}</p> : null}
                      {project.testimonial.link ? (
                        <Button variant="accent" size="small" arrow link={project.testimonial.link}>
                          Link do opinii
                        </Button>
                      ) : null}
                    </footer>
                  )}
                </blockquote>
              </SectionInfo>
              <Gap size="sm" variant="line" />
            </>
          ) : null}

          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd(project)) }} />
        </div>

        <div>
          <ShareBlock url={url} title={shareTitle} className="mb-12" />
          <TableOfContents rootSelector="#article-root" />
        </div>
      </Wrapper>

      <Wrapper>
        <Gap />
        <ProjectsCarousel title="Sprawdź najnowsze realizacje" excludeSlug={project.slug} />{' '}
      </Wrapper>

      <Gap />

      <CTABanner
        title={ctaProps.title}
        description={ctaProps.description}
        btnOne={ctaProps.btnOne}
        btnOneLink={ctaProps.btnOneLink}
        btnTwo={ctaProps.btnTwo}
        btnTwoLink={ctaProps.btnTwoLink}
        backgroundImage={ctaProps.backgroundImage}
        overlay={ctaProps.overlay}
      />
    </>
  );
}
