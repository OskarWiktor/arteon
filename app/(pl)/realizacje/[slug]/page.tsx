import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Image from 'next/image';
import {
  RiCheckLine,
  RiArrowRightSLine,
  RiFlashlightLine,
  RiFocus3Line,
  RiLineChartLine,
  RiShieldLine,
  RiUserLine,
  RiStarLine,
  RiTimeLine,
  RiAwardLine,
  RiBriefcaseLine,
  RiSettingsLine,
  RiFileTextLine,
  RiStackLine,
  RiPaletteLine,
  RiCodeLine,
  RiGlobalLine,
  RiShoppingCartLine,
  RiPencilLine,
  RiSearchLine,
  RiLayoutLine,
  RiEyeLine,
  RiBankCardLine,
  RiLinksLine,
  RiBookOpenLine,
  RiMessageLine,
} from 'react-icons/ri';

import ButtonLink from '@/components/atoms/buttons/ButtonLink';
import Divider from '@/components/atoms/Divider';
import Wrapper from '@/components/atoms/Wrapper';
import HeroBanner from '@/components/organisms/HeroBanner';

import projectsData from '@/data/pl/projects.json';
import type { Project, ContentBlock } from '@/types/project';
import { toAbsoluteUrl } from '@/utils/absoluteUrl';
import TableOfContents from '@/components/organisms/TableOfContent';
import SectionInfo from '@/components/organisms/sections/SectionInfo';
import Breadcrumbs from '@/components/molecules/BreadCrumbs';
import Badge from '@/components/atoms/Badge';
import CTABanner from '@/components/organisms/CTABanner';
import SectionFaqPanels from '@/components/organisms/sections/SectionFaqPanels';
import ShareBlock from '@/components/organisms/ShareBlock';
import ProjectsCarousel from '@/components/organisms/carousels/ProjectsCarousel';
import SectionSteps from '@/components/organisms/sections/SectionSteps';
import { JsonLd } from '@/components/atoms/JsonLd';
import SectionMetrics from '@/components/organisms/sections/SectionMetrics';
import SectionFeatureList from '@/components/organisms/sections/SectionFeatureList';
import SectionProcess from '@/components/organisms/sections/SectionProcess';
import SectionImageGallery from '@/components/organisms/sections/SectionImageGallery';
import { cn } from '@/lib/utils';
import { largeIconSizeClasses, normalIconSizeClasses } from '@/lib/ui-classes';
import Card from '@/components/organisms/Card';

interface ProjectsData {
  projects: Project[];
}

const projects = (projectsData as ProjectsData).projects;

const getProject = (slug: string) => projects.find(p => p.slug === slug);
const projectUrl = (slug: string) => toAbsoluteUrl(`/realizacje/${slug}`);

function jsonLd(project: Project) {
  const url = projectUrl(project.slug);
  const headline = project.seo?.title || project.title;
  const description = project.seo?.description || '';
  const imageUrl = project.image ? toAbsoluteUrl(project.image) : undefined;
  const imageObject = imageUrl
    ? {
        '@type': 'ImageObject' as const,
        url: imageUrl,
        width: 1200,
        height: 630,
      }
    : undefined;

  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    headline,
    description,
    image: imageObject ? [imageObject] : undefined,
    thumbnailUrl: imageUrl,
    author: [{ '@type': 'Organization', name: 'Arteon' }],
    publisher: {
      '@type': 'Organization',
      name: 'Arteon',
      logo: {
        '@type': 'ImageObject',
        url: toAbsoluteUrl('/icon-512x512.png'),
        width: 512,
        height: 512,
      },
    },
    about: project.category,
  } as const;
}

const Inline = ({ content }: { content?: React.ReactNode }) =>
  !content ? null : typeof content === 'string' ? (
    <span dangerouslySetInnerHTML={{ __html: content }} />
  ) : (
    <>{content}</>
  );

const Block = ({ content }: { content?: React.ReactNode }) =>
  !content ? null : typeof content === 'string' ? (
    <div dangerouslySetInnerHTML={{ __html: content }} />
  ) : (
    <>{content}</>
  );

const defaultCTA = {
  title: 'Rozwiń z nami swoją firmę',
  description:
    'Tworzymy strony, sklepy, blogi, SEO, treści, grafiki oraz marketing cyfrowy. U nas znajdziesz rozwiązania, dla każdej firmy, na każdy budżet',
  btnOne: 'Skontaktuj się',
  btnOneHref: '/kontakt',
  btnTwo: 'Sprawdź naszą ofertę',
  btnTwoHref: '/uslugi',
  backgroundImage: '/assets/bg/abstract-bg13.webp',
  overlay: 'black',
} as const;

function Stat({ label, value, note }: { label: string; value: string; note?: string }) {
  return (
    <Card>
      <p className='h5'>{value}</p>
      <p className='text-light'>{label}</p>
      {note && <p className='mt-2'>{note}</p>}
    </Card>
  );
}

function Aspect({
  ratio = '16/9',
  children,
}: {
  ratio?: '16/9' | '4/3' | '1/1' | 'auto';
  children: React.ReactNode;
}) {
  if (ratio === 'auto') {
    return (
      <div className='relative overflow-hidden rounded-lg border border-neutral-200'>
        {children}
      </div>
    );
  }

  const map: Record<string, string> = {
    '16/9': 'aspect-[16/9]',
    '4/3': 'aspect-[4/3]',
    '1/1': 'aspect-square',
  };

  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-lg border border-neutral-200',
        map[ratio] || '',
      )}
    >
      {children}
    </div>
  );
}

const ICON_MAP: Record<string, React.ElementType> = {
  zap: RiFlashlightLine,
  target: RiFocus3Line,
  trending: RiLineChartLine,
  shield: RiShieldLine,
  users: RiUserLine,
  star: RiStarLine,
  clock: RiTimeLine,
  award: RiAwardLine,
  briefcase: RiBriefcaseLine,
  settings: RiSettingsLine,
  file: RiFileTextLine,
  layers: RiStackLine,
  palette: RiPaletteLine,
  code: RiCodeLine,
  globe: RiGlobalLine,
  cart: RiShoppingCartLine,
  pen: RiPencilLine,
  check: RiCheckLine,
  arrow: RiArrowRightSLine,
  search: RiSearchLine,
  layout: RiLayoutLine,
  eye: RiEyeLine,
  'credit-card': RiBankCardLine,
  link: RiLinksLine,
  'book-open': RiBookOpenLine,
  'message-circle': RiMessageLine,
};

function getIcon(iconName?: string) {
  if (!iconName) return null;
  const IconComponent = ICON_MAP[iconName.toLowerCase()];
  return IconComponent && <IconComponent className={normalIconSizeClasses} />;
}

function RenderBlocks({ blocks }: { blocks?: ContentBlock[] }) {
  if (!blocks?.length) return null;

  return (
    <>
      {blocks.map((b, i) => {
        const wrapperClass = b.breakBefore ? 'mt-8' : b.breakAfter ? 'mb-8' : '';

        if (b.type === 'richtext') {
          return (
            <div key={`rt-${i}`} className={wrapperClass}>
              <div dangerouslySetInnerHTML={{ __html: b.html }} />
              {b.breakAfter && <Divider size='sm' line />}
            </div>
          );
        }

        if (b.type === 'image') {
          const isAuto = b.ratio === 'auto';
          return (
            <div key={`img-${i}`} className={wrapperClass}>
              <Divider size='xs' />
              <figure>
                {isAuto ? (
                  <div className='overflow-hidden rounded-lg border border-neutral-200'>
                    <Image
                      src={b.src}
                      alt={b.alt}
                      width={b.width ?? 2000}
                      height={b.height ?? 2800}
                      sizes='100vw'
                      style={{ width: '100%', height: 'auto' }}
                      priority={b.priority ?? false}
                    />
                  </div>
                ) : (
                  <Aspect ratio={b.ratio || '16/9'}>
                    <Image
                      src={b.src}
                      alt={b.alt}
                      fill
                      className='object-cover'
                      sizes='(min-width:768px) 75vw, 100vw'
                    />
                  </Aspect>
                )}
                {b.caption && (
                  <figcaption className='mt-2 text-sm text-light'>{b.caption}</figcaption>
                )}
              </figure>
              {b.breakAfter && <Divider size='sm' line />}
            </div>
          );
        }

        if (b.type === 'imageText') {
          const Img =
            b.ratio === 'auto' ? (
              <div className='overflow-hidden rounded-lg border border-neutral-200'>
                <Image
                  src={b.src}
                  alt={b.alt}
                  width={b.width ?? 2000}
                  height={b.height ?? 2800}
                  sizes='(min-width:768px) 50vw, 100vw'
                  style={{ width: '100%', height: 'auto' }}
                  priority={b.priority ?? false}
                />
              </div>
            ) : (
              <Aspect ratio={b.ratio || '4/3'}>
                <Image
                  src={b.src}
                  alt={b.alt}
                  fill
                  className='object-cover'
                  sizes='(min-width:768px) 50vw, 100vw'
                />
              </Aspect>
            );

          return (
            <div key={`imgt-${i}`} className={wrapperClass}>
              <div className='grid items-center gap-6 md:grid-cols-2'>
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
              {b.breakAfter && <Divider size='sm' line />}
            </div>
          );
        }

        if (b.type === 'quote') {
          return (
            <div key={`quote-${i}`} className={wrapperClass}>
              <figure className='rounded-lg bg-white p-6 shadow-md'>
                <blockquote>
                  <p className='text-lg leading-relaxed'>"{b.text}"</p>
                </blockquote>
                {(b.author || b.role) && (
                  <figcaption className='mt-3 text-sm text-light'>
                    {b.author}
                    {b.role ? `, ${b.role}` : ''}
                  </figcaption>
                )}
              </figure>
              {b.breakAfter && <Divider size='sm' line />}
            </div>
          );
        }

        if (b.type === 'callout') {
          const calloutIcon = getIcon(b.icon);
          return (
            <div key={`callout-${i}`} className={wrapperClass}>
              <Card interactive={false} className='flex border-l-4 border-accent'>
                {calloutIcon && <div className='mt-1 shrink-0 text-accent'>{calloutIcon}</div>}
                <div>
                  {b.title && <h4 className='h5 mb-2'>{b.title}</h4>}
                  {b.html ? (
                    <div dangerouslySetInnerHTML={{ __html: b.html }} />
                  ) : (
                    b.text && <p>{b.text}</p>
                  )}
                </div>
              </Card>
              {b.breakAfter && <Divider size='sm' line />}
            </div>
          );
        }

        if (b.type === 'steps') {
          const stepsItems = b.items.map(item => ({
            icon: getIcon(item.icon),
            title: item.title,
            description: item.description,
          }));
          return (
            <div key={`steps-${i}`} className={wrapperClass}>
              <SectionSteps title={b.title} items={stepsItems} />
              {b.breakAfter && <Divider size='sm' line />}
            </div>
          );
        }

        if (b.type === 'metrics') {
          const metricsWithDefaults = b.items.map(m => ({
            label: m.label,
            value: m.value,
            unit: m.unit || '%',
            max: m.max || 100,
            color: m.color || 'bg-accent',
            inverse: m.inverse,
          }));
          return (
            <div key={`metrics-${i}`} className={wrapperClass}>
              <SectionMetrics title={b.title} metrics={metricsWithDefaults} />
              {b.breakAfter && <Divider size='sm' line />}
            </div>
          );
        }

        if (b.type === 'featureList') {
          return (
            <div key={`features-${i}`} className={wrapperClass}>
              <SectionFeatureList title={b.title} features={b.items} />
              {b.breakAfter && <Divider size='sm' line />}
            </div>
          );
        }

        if (b.type === 'process') {
          const processSteps = b.items.map(item => ({
            number: item.number,
            title: item.title,
            icon: getIcon(item.icon),
          }));
          return (
            <div key={`process-${i}`} className={wrapperClass}>
              <SectionProcess title={b.title} steps={processSteps} />
              {b.breakAfter && <Divider size='sm' line />}
            </div>
          );
        }

        if (b.type === 'deliverables') {
          return (
            <div key={`deliverables-${i}`} className={wrapperClass}>
              <SectionInfo title={b.title || 'Zakres prac'}>
                <ul className='ml-6 list-disc'>
                  {b.items.map((d, idx) => (
                    <li key={idx} dangerouslySetInnerHTML={{ __html: d }} />
                  ))}
                </ul>
              </SectionInfo>
              {b.breakAfter && <Divider size='sm' line />}
            </div>
          );
        }

        if (b.type === 'outcomes') {
          return (
            <div key={`outcomes-${i}`} className={wrapperClass}>
              <SectionInfo title={b.title || 'Rezultaty'}>
                <div className='grid gap-3 sm:grid-cols-2 lg:grid-cols-3'>
                  {b.items.map((o, idx) => (
                    <Stat key={idx} label={o.label} value={o.value} note={o.note} />
                  ))}
                </div>
              </SectionInfo>
              {b.breakAfter && <Divider size='sm' line />}
            </div>
          );
        }

        if (b.type === 'testimonial') {
          return (
            <div key={`testimonial-${i}`} className={wrapperClass}>
              <SectionInfo title='Ocena współpracy'>
                <blockquote className='rounded-lg bg-white p-6 shadow-md'>
                  <p className='text-lg leading-relaxed'>"{b.quote}"</p>
                  {(b.author || b.role) && (
                    <footer className='mt-2'>
                      <h5 className='mt-5'>{b.author}</h5>
                      {b.role && <p className='mt-1 mb-3 text-light'>{b.role}</p>}
                      {b.link && (
                        <ButtonLink variant='accent' arrow href={b.link}>
                          Link do opinii
                        </ButtonLink>
                      )}
                    </footer>
                  )}
                </blockquote>
              </SectionInfo>
              {b.breakAfter && <Divider size='sm' line />}
            </div>
          );
        }

        if (b.type === 'beforeAfter') {
          return (
            <div key={`beforeAfter-${i}`} className={wrapperClass}>
              <SectionInfo title={b.title || 'Jak było - jak jest'}>
                <div className='grid grid-cols-1 items-start gap-6 md:grid-cols-2'>
                  <figure>
                    <div className='overflow-hidden rounded-lg border border-neutral-200'>
                      <Image
                        src={b.beforeImage}
                        alt={b.beforeLabel || 'Widok przed zmianami'}
                        width={800}
                        height={1200}
                        className='h-auto w-full object-contain object-top'
                        sizes='(min-width:768px) 50vw, 100vw'
                      />
                    </div>
                    <figcaption className='mt-2 text-sm text-light'>
                      {b.beforeLabel || 'Przed'}
                    </figcaption>
                  </figure>
                  <figure>
                    <div className='overflow-hidden rounded-lg border border-neutral-200'>
                      <Image
                        src={b.afterImage}
                        alt={b.afterLabel || 'Widok po wdrożeniu'}
                        width={800}
                        height={1200}
                        className='h-auto w-full object-contain object-top'
                        sizes='(min-width:768px) 50vw, 100vw'
                      />
                    </div>
                    <figcaption className='mt-2 text-sm font-semibold text-light'>
                      {b.afterLabel || 'Po'}
                    </figcaption>
                  </figure>
                </div>
                {b.note && (
                  <div className='mt-3 text-sm' dangerouslySetInnerHTML={{ __html: b.note }} />
                )}
              </SectionInfo>
              {b.breakAfter && <Divider size='sm' line />}
            </div>
          );
        }

        if (b.type === 'imageGallery') {
          return (
            <div key={`gallery-${i}`} className={wrapperClass}>
              <SectionImageGallery title={b.title} images={b.images} grid={b.grid} noWrapper />
              {b.breakAfter && <Divider size='sm' line />}
            </div>
          );
        }

        if (b.type === 'imageGrid3') {
          return (
            <div key={`grid3-${i}`} className={wrapperClass}>
              {b.title && <h3 className='h5 mb-2'>{b.title}</h3>}
              {b.description && <p className='mb-4 text-mid'>{b.description}</p>}
              <div className='grid grid-cols-1 gap-4 sm:grid-cols-3'>
                {b.images.map((img, idx) => (
                  <figure key={idx}>
                    <div className='overflow-hidden rounded-lg border border-neutral-200'>
                      <Image
                        src={img.src}
                        alt={img.alt}
                        width={600}
                        height={800}
                        className='h-auto w-full object-cover'
                        sizes='(min-width:640px) 33vw, 100vw'
                      />
                    </div>
                    {img.label && (
                      <figcaption className='mt-2 text-center text-sm text-light'>
                        {img.label}
                      </figcaption>
                    )}
                  </figure>
                ))}
              </div>
              {b.breakAfter && <Divider size='sm' line />}
            </div>
          );
        }

        return null;
      })}
    </>
  );
}

export async function generateStaticParams() {
  return projects.map(project => ({ slug: project.slug }));
}

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  const title = project.seo?.title || `${project.title} - Case study`;
  const description = project.seo?.description || '';
  const image = project.image ? toAbsoluteUrl(project.image) : undefined;

  const ogUrl = toAbsoluteUrl(project.seo?.canonical || `/realizacje/${slug}`);
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
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: image ? [image] : undefined,
    },
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return notFound();

  const ctaProps = { ...defaultCTA, ...(project.cta ?? {}) };
  const url = projectUrl(project.slug);
  const shareTitle = project.seo?.title || project.title;

  return (
    <>
      <HeroBanner backgroundImage={project.image} />

      <Breadcrumbs
        second={{ href: '/realizacje', label: 'Realizacje' }}
        third={{ href: `/realizacje/${project.slug}`, label: project.title }}
        includeJsonLd
      />

      <Wrapper
        as='article'
        id='article-root'
        itemScope
        itemType='https://schema.org/Article'
        className='flex flex-col-reverse gap-8 lg:grid lg:grid-cols-[1fr_208px]'
      >
        <div>
          <header className='mb-2'>
            <h1 className='h2 mb-1' itemProp='headline'>
              {project.title}
            </h1>

            {project.category?.length ? (
              <span className='my-4 block text-sm text-light uppercase'>
                {project.category.join(' • ')}
              </span>
            ) : null}

            {project.short && (
              <p itemProp='description'>
                <Inline content={project.short} />
              </p>
            )}
          </header>

          <div className='mb-4 flex flex-wrap items-center gap-1 text-sm'>
            {project.client?.name && <Badge text={project.client.name} />}
            {project.client?.sector && <Badge text={project.client.sector} />}
            {project.client?.location && <Badge text={project.client.location} />}
            {project.timeline?.start && (
              <Badge
                text={
                  project.timeline.end
                    ? `Realizacja: ${project.timeline.start} - ${project.timeline.end}`
                    : `Start: ${project.timeline.start}`
                }
              />
            )}
            {project.stack?.map(s => (
              <Badge key={s} text={s} />
            ))}
          </div>

          {project.link && (
            <div className='mt-2'>
              <ButtonLink
                variant='accent'
                arrow
                href={project.link}
                aria-label={`Zobacz realizację: ${project.title} na żywo`}
              >
                Zobacz stronę
              </ButtonLink>
            </div>
          )}

          {(project.description || project.task) && (
            <>
              <Divider size='sm' line />
              <SectionInfo title='Kontekst projektu'>
                <Block content={project.description} />
                {project.task && (
                  <p className='mt-6'>
                    <strong>Nasze zadanie:</strong> <Inline content={project.task} />
                  </p>
                )}
              </SectionInfo>
            </>
          )}

          {project.goals ? (
            <>
              <Divider size='sm' line />

              <SectionInfo title='Cele biznesowe'>
                <Block content={project.goals} />
              </SectionInfo>
            </>
          ) : null}

          {project.process_steps?.length ? (
            <>
              <Divider size='sm' line />

              <SectionInfo title='Proces'>
                <ul className='grid gap-3 md:grid-cols-2'>
                  {project.process_steps.map((step, i) => (
                    <li key={i} className='rounded-lg bg-white p-3 shadow-md'>
                      <span
                        className={cn(
                          'mr-2 inline-flex items-center justify-center rounded-lg border border-light text-xs font-bold text-light',
                          largeIconSizeClasses,
                        )}
                      >
                        {i + 1}
                      </span>
                      <span dangerouslySetInnerHTML={{ __html: step }} />
                    </li>
                  ))}
                </ul>
              </SectionInfo>
            </>
          ) : null}

          {project.deliverables?.length ? (
            <>
              <Divider size='sm' line />

              <SectionInfo title='Zakres prac'>
                <ul className='ml-6 list-disc'>
                  {project.deliverables.map((d, i) =>
                    typeof d === 'string' ? (
                      <li key={i} dangerouslySetInnerHTML={{ __html: d }} />
                    ) : (
                      <li key={i}>{d}</li>
                    ),
                  )}
                </ul>
              </SectionInfo>
            </>
          ) : null}

          {project.beforeAfter &&
          (project.beforeAfter.beforeImage || project.beforeAfter.afterImage) ? (
            <>
              <Divider size='sm' line />

              <SectionInfo title='Jak było - jak jest'>
                <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
                  <figure>
                    <div className='relative aspect-[16/9] overflow-hidden rounded-lg border border-neutral-200'>
                      <Image
                        src={project.beforeAfter.beforeImage || project.image}
                        alt='Widok przed zmianami'
                        fill
                        className='object-cover'
                        sizes='(min-width:768px) 50vw, 100vw'
                      />
                    </div>
                    <figcaption className='mt-2 text-sm text-light'>Przed</figcaption>
                  </figure>

                  <figure>
                    <div className='relative aspect-[16/9] overflow-hidden rounded-lg border border-neutral-200'>
                      <Image
                        src={project.beforeAfter.afterImage || project.image}
                        alt='Widok po wdrożeniu'
                        fill
                        className='object-cover'
                        sizes='(min-width:768px) 50vw, 100vw'
                      />
                    </div>
                    <figcaption className='mt-2 text-sm font-semibold text-light'>Po</figcaption>
                  </figure>
                </div>

                {project.beforeAfter.note && (
                  <div
                    className='mt-3 text-sm'
                    dangerouslySetInnerHTML={{ __html: project.beforeAfter.note }}
                  />
                )}
              </SectionInfo>
            </>
          ) : null}

          {project.challenges ? (
            <>
              <Divider size='sm' line />

              <SectionInfo title='Wyzwania'>
                <Block content={project.challenges} />
              </SectionInfo>
            </>
          ) : null}

          {project.solutions ? (
            <>
              <Divider size='sm' line />

              <SectionInfo title='Rozwiązania'>
                <Block content={project.solutions} />
              </SectionInfo>
            </>
          ) : null}

          <RenderBlocks blocks={project.contentBlocks} />

          {project.outcomes?.length ? (
            <>
              <Divider size='sm' line />

              <SectionInfo title='Rezultaty'>
                <div className='grid gap-3 sm:grid-cols-2 lg:grid-cols-3'>
                  {project.outcomes.map((o, i) => (
                    <Stat key={i} label={o.label} value={o.value} note={o.note} />
                  ))}
                </div>
              </SectionInfo>
            </>
          ) : null}

          {project.testimonial?.quote ? (
            <>
              <Divider size='sm' line />
              <SectionInfo title='Ocena współpracy'>
                <blockquote className='rounded-lg bg-white p-6 shadow-md'>
                  <p className='text-lg leading-relaxed'>“{project.testimonial.quote}”</p>
                  {(project.testimonial.author || project.testimonial.role) && (
                    <footer className='mt-2'>
                      <h5 className='mt-5'>{project.testimonial.author}</h5>
                      {project.testimonial.role ? (
                        <p className='mt-1 mb-3 text-light'>{project.testimonial.role}</p>
                      ) : null}
                      {project.testimonial.link ? (
                        <ButtonLink variant='accent' arrow href={project.testimonial.link}>
                          Link do opinii
                        </ButtonLink>
                      ) : null}
                    </footer>
                  )}
                </blockquote>
              </SectionInfo>
            </>
          ) : null}

          {project.faq?.length ? (
            <>
              <Divider size='sm' line />
              <SectionFaqPanels
                defaultOpenIndex={1}
                title='Najczęstsze pytania dotyczące realizacji'
                items={project.faq}
                pageUrl={projectUrl(project.slug)}
              />
            </>
          ) : null}

          <JsonLd schema={jsonLd(project)} id={`schema-realizacja-${project.slug}`} />
        </div>

        <div>
          <ShareBlock url={url} title={shareTitle} />
          <TableOfContents rootSelector='#article-root' />
        </div>
      </Wrapper>

      <Wrapper>
        <Divider />
        <ProjectsCarousel title='Sprawdź najnowsze realizacje' excludeSlug={project.slug} />{' '}
      </Wrapper>

      <Divider />

      <CTABanner
        title={ctaProps.title}
        description={ctaProps.description}
        btnOne='Skontaktuj się'
        btnOneHref='/kontakt'
        btnTwo={ctaProps.btnTwo}
        btnTwoHref={ctaProps.btnTwoHref}
        backgroundImage={ctaProps.backgroundImage}
        overlay={ctaProps.overlay}
      />
    </>
  );
}
