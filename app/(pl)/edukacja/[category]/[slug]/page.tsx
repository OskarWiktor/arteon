import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound, permanentRedirect } from 'next/navigation';
import Badge from '@/components/atoms/Badge';
import ColorPalette from '@/components/atoms/ColorPalette';
import Divider from '@/components/atoms/Divider';
import { JsonLd } from '@/components/atoms/JsonLd';
import TableBlock from '@/components/atoms/TableBlock';
import Wrapper from '@/components/atoms/Wrapper';
import AdSense from '@/components/molecules/AdSense';
import Breadcrumbs from '@/components/molecules/BreadCrumbs';
import ArticlesCarousel from '@/components/organisms/carousels/ArticlesCarousel';
import CodeBlock from '@/components/organisms/CodeBlock';
import CTABanner from '@/components/organisms/CTABanner';
import HeroBanner from '@/components/organisms/HeroBanner';
import SectionFaqPanels from '@/components/organisms/sections/SectionFaqPanels';
import ShareBlock from '@/components/organisms/ShareBlock';
import TableOfContents from '@/components/organisms/TableOfContent';
import {
  getAllArticlePreviews,
  findArticleBySlug,
  getPrimaryCategorySlug,
} from '@/lib/blogDataService';
import { cn } from '@/lib/clsx';
import { columnGapClasses } from '@/lib/uiClasses';
import type { Article } from '@/types/article';
import { toAbsoluteUrl } from '@/utils/absoluteUrl';

const defaultCTA = {
  title: 'Rozwiń swoją firmę',
  description:
    'Tworzymy strony, sklepy, blogi, SEO, treści, grafiki oraz marketing cyfrowy.',
  btnOne: 'Skontaktuj się',
  btnOneHref: '/kontakt',
  btnTwo: 'Sprawdź naszą ofertę',
  btnTwoHref: '/uslugi',
  backgroundImage: '/assets/bg/abstract-bg13.webp',
  overlay: 'black',
} as const;

function articleUrl(category: string, slug: string) {
  return toAbsoluteUrl(`/edukacja/${category}/${slug}`);
}

function jsonLd(article: Article) {
  const canonicalCat = getPrimaryCategorySlug(article);
  const url = articleUrl(canonicalCat, article.slug);
  const headline = article.seo?.title || article.title;
  const description = article.seo?.description || article.excerpt || '';
  const imageUrl = article.cover ? toAbsoluteUrl(article.cover) : undefined;
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
    '@type': 'BlogPosting',
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    headline,
    description,
    image: imageObject ? [imageObject] : undefined,
    thumbnailUrl: imageUrl,
    author: [
      { '@type': 'Organization', name: article.author?.name || 'Arteon' },
    ],
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
    datePublished: article.datePublished,
    dateModified: article.dateModified || article.datePublished,
    articleSection: article.primaryCategory,
    keywords: '',
  } as const;
}

function Aspect({
  ratio = '16/9',
  children,
}: {
  ratio?: '16/9' | '4/3' | '1/1' | 'auto';
  children: React.ReactNode;
}) {
  if (ratio === 'auto')
    return (
      <div className='relative overflow-hidden border border-neutral-200'>
        {children}
      </div>
    );
  const map: Record<string, string> = {
    '16/9': 'aspect-square md:aspect-[16/9]',
    '4/3': 'aspect-[4/3]',
    '1/1': 'aspect-square',
  };
  return (
    <div
      className={cn(
        'relative overflow-hidden border border-neutral-200',
        map[ratio] || '',
      )}
    >
      {children}
    </div>
  );
}

type FlowBlock = Extract<
  Article['contentBlocks'][number],
  { type: 'richtext' | 'code' | 'table' | 'quote' | 'colorPalette' }
>;

function isFlowBlock(b: Article['contentBlocks'][number]): b is FlowBlock {
  return (
    b.type === 'richtext' ||
    b.type === 'code' ||
    b.type === 'table' ||
    b.type === 'quote' ||
    b.type === 'colorPalette'
  );
}

/**
 * Render a sequence of article "flow" content blocks (richtext, code, table, quote, color palette) inside a prose container.
 *
 * @param items - An ordered array of FlowBlock items to render
 * @returns A JSX element containing the rendered flow blocks
 */
function FlowGroup({ items }: { items: FlowBlock[] }) {
  return (
    <div className='prose prose-lg max-w-none'>
      {items.map((b, i) => {
        if (b.type === 'richtext') {
          return (
            <div
              key={`f-rt-${i}`}
              dangerouslySetInnerHTML={{ __html: b.html }}
            />
          );
        }
        if (b.type === 'code') {
          return (
            <div key={`f-code-${i}`} className='not-prose my-6'>
              <CodeBlock
                code={b.code}
                language={b.language}
                filename={b.filename}
                caption={b.caption}
                showLineNumbers={b.showLineNumbers ?? true}
                wrap={b.wrap ?? false}
                highlightLines={b.highlightLines ?? []}
              />
            </div>
          );
        }
        if (b.type === 'table') {
          return (
            <div key={`f-tbl-${i}`} className='not-prose my-6'>
              <TableBlock
                caption={b.caption}
                note={b.note}
                columns={b.columns}
                rows={b.rows}
                striped={b.striped ?? true}
                compact={b.compact ?? false}
                locale='pl'
              />
            </div>
          );
        }
        if (b.type === 'quote') {
          return (
            <div key={`f-q-${i}`} className='not-prose my-6'>
              <figure className='bg-white p-6 shadow-md'>
                <blockquote>
                  <p className='text-lg leading-relaxed'>“{b.text}”</p>
                </blockquote>
                {(b.author || b.role) && (
                  <figcaption className='mt-3 text-sm text-light'>
                    {b.author}
                    {b.role ? `, ${b.role}` : ''}
                  </figcaption>
                )}
              </figure>
            </div>
          );
        }
        if (b.type === 'colorPalette') {
          return (
            <div key={`f-cp-${i}`} className='not-prose mt-3 mb-1'>
              <ColorPalette colors={b.colors} locale='pl' />
            </div>
          );
        }
        return null;
      })}
    </div>
  );
}

/**
 * Render an article's content blocks, grouping consecutive flow blocks and rendering individual non-flow blocks.
 *
 * Renders supported block types: flow blocks (`richtext`, `code`, `table`, `quote`, `colorPalette`) are grouped and rendered together; single non-flow blocks such as `image`, `imageText`, and `ad` are rendered with their respective layout and captions. Unknown block types produce an empty placeholder.
 *
 * @param blocks - The article's content blocks; may be omitted or empty.
 * @returns A JSX fragment with the rendered blocks, or `null` if `blocks` is empty or not provided.
 */
function RenderBlocks({ blocks }: { blocks?: Article['contentBlocks'] }) {
  if (!blocks?.length) return null;

  type NonFlowBlock = Exclude<Article['contentBlocks'][number], FlowBlock>;
  type Group =
    | { kind: 'flow'; items: FlowBlock[] }
    | { kind: 'single'; items: NonFlowBlock[] };
  const groups: Group[] = [];
  let buf: FlowBlock[] = [];

  const flushFlow = () => {
    if (buf.length) {
      groups.push({ kind: 'flow', items: buf });
      buf = [];
    }
  };

  for (const b of blocks) {
    if (b.breakBefore) flushFlow();

    if (isFlowBlock(b)) {
      buf.push(b);
    } else {
      flushFlow();
      groups.push({ kind: 'single', items: [b] });
    }

    if (b.breakAfter) flushFlow();
  }
  flushFlow();

  return (
    <>
      {groups.map((g, i) => {
        if (g.kind === 'flow') {
          return (
            <div key={`grp-flow-${i}`}>
              <FlowGroup items={g.items} />
              <Divider size='sm' line />
            </div>
          );
        }

        const b = g.items[0];

        if (b.type === 'image') {
          const isAuto = b.ratio === 'auto';
          const hasCaption = Boolean(b.caption);

          return (
            <div key={`grp-img-${i}`}>
              <figure
                className={!hasCaption ? 'mb-6 md:mb-12 lg:mb-16' : undefined}
              >
                {isAuto ? (
                  <div className='overflow-hidden border border-neutral-200'>
                    <Image
                      src={b.src}
                      alt={b.alt}
                      width={b.width ?? 2000}
                      height={b.height ?? 1200}
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
                {hasCaption && (
                  <figcaption className='mt-2 mb-6 text-sm text-light md:mb-12 lg:mb-16'>
                    {b.caption}
                  </figcaption>
                )}
              </figure>
            </div>
          );
        }

        if (b.type === 'imageText') {
          const Img =
            b.ratio === 'auto' ? (
              <div className='overflow-hidden border border-neutral-200'>
                <Image
                  src={b.src}
                  alt={b.alt}
                  width={b.width ?? 2000}
                  height={b.height ?? 1200}
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
            <div key={`grp-imgt-${i}`}>
              <div className='sm-6 grid items-start md:grid-cols-2'>
                {b.imageSide === 'right' ? (
                  <>
                    <div
                      className='prose prose-lg max-w-none'
                      dangerouslySetInnerHTML={{ __html: b.html }}
                    />
                    {Img}
                  </>
                ) : (
                  <>
                    {Img}
                    <div
                      className='prose prose-lg max-w-none'
                      dangerouslySetInnerHTML={{ __html: b.html }}
                    />
                  </>
                )}
              </div>
              <Divider size='sm' line />
            </div>
          );
        }

        if (b.type === 'ad') {
          return (
            <>
              <div
                key={`grp-ad-${i}`}
                className='not-prose my-2 flex justify-center md:my-6'
              >
                <AdSense variant='responsive' />
              </div>
              <Divider size='sm' line />
            </>
          );
        }

        return <div key={`grp-unknown-${i}`} />;
      })}
    </>
  );
}

export async function generateStaticParams() {
  const items = getAllArticlePreviews();
  return items.map(a => {
    const category = getPrimaryCategorySlug(a);
    return { category, slug: a.slug };
  });
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = findArticleBySlug(slug);
  if (!article) return {};

  const canonicalCat = getPrimaryCategorySlug(article);
  const ogUrl = toAbsoluteUrl(
    article.seo?.canonical || `/edukacja/${canonicalCat}/${article.slug}`,
  );
  const title = article.seo?.title || article.title;
  const description = article.seo?.description || article.excerpt || '';
  const image = article.cover ? toAbsoluteUrl(article.cover) : undefined;

  return {
    title,
    description,
    alternates: { canonical: ogUrl },
    openGraph: {
      type: 'article',
      url: ogUrl,
      title,
      description,
      images: image
        ? [{ url: image, width: 1200, height: 630, alt: article.title }]
        : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: image ? [image] : undefined,
    },
  };
}

/**
 * Renders the article page for the given route parameters, including hero banner, breadcrumbs,
 * article content (blocks, FAQ, JSON-LD), sidebar (share and table of contents), related-articles
 * carousel, and CTA banner.
 *
 * @param params - A promise resolving to an object with `category` and `slug` route parameters
 * @returns The fully composed article page content for the specified `slug` and `category`. May cause a 404 when the article is not found or a permanent redirect to the canonical category URL when the provided `category` does not match the article's primary category.
 */
export default async function ArticlePage({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const { slug, category } = await params;
  const article = findArticleBySlug(slug);
  if (!article) return notFound();

  const articlePreviews = getAllArticlePreviews();

  const canonicalCat = getPrimaryCategorySlug(article);
  const categoryLabel =
    article.primaryCategory || canonicalCat.replace(/-/g, ' ').toUpperCase();

  const articlesCarouselTitle = `Sprawdź inne artykuły na temat: ${categoryLabel}`;
  if (category !== canonicalCat) {
    permanentRedirect(`/edukacja/${canonicalCat}/${article.slug}`);
  }

  const url = articleUrl(canonicalCat, article.slug);
  const cta = { ...defaultCTA, ...(article.cta ?? {}) };
  const shareTitle = article.seo?.title || article.title;

  return (
    <>
      <HeroBanner
        backgroundImage={article.cover || '/assets/bg/abstract-bg13.webp'}
      />

      <Breadcrumbs
        second={{ href: '/edukacja', label: 'Edukacja' }}
        third={{
          href: `/edukacja/${canonicalCat}`,
          label: categoryLabel,
        }}
        fourth={{
          href: `/edukacja/${canonicalCat}/${article.slug}`,
          label: article.title,
        }}
        includeJsonLd
      />

      <Wrapper
        as='article'
        id='article-root'
        itemScope
        itemType='https://schema.org/BlogPosting'
        className={cn(
          'flex flex-col lg:grid lg:grid-cols-[1fr_300px] lg:grid-rows-[auto_1fr]',
          columnGapClasses,
          'lg:gap-y-0',
        )}
      >
        <div className='order-2 lg:order-0 lg:col-start-1 lg:row-span-2 lg:row-start-1'>
          <header>
            <h1 className='h2 mb-1' itemProp='headline'>
              {article.title}
            </h1>
            <div className='sm-2 md:sm-4 mt-5 flex flex-wrap items-center text-sm text-light'>
              {article.author?.name && <Badge text={article.author.name} />}
              {article.datePublished && (
                <Badge>
                  Publikacja:{' '}
                  <time dateTime={article.datePublished}>
                    {article.datePublished}
                  </time>
                </Badge>
              )}
              {article.dateModified &&
                article.dateModified !== article.datePublished && (
                  <Badge>
                    Aktualizacja:{' '}
                    <time dateTime={article.dateModified}>
                      {article.dateModified}
                    </time>
                  </Badge>
                )}
              {article.readingTime && (
                <Badge text={`${article.readingTime} min czytania`} />
              )}
            </div>
          </header>

          <Divider size='xs' />

          <RenderBlocks blocks={article.contentBlocks} />

          {article.faq?.length && (
            <>
              <SectionFaqPanels
                defaultOpenIndex={1}
                title='Najczęstsze pytania'
                items={article.faq}
                pageUrl={url}
                halfWidth={false}
              />
            </>
          )}

          <JsonLd
            schema={jsonLd(article)}
            id={`schema-article-${article.slug}`}
          />
        </div>
        {/* Udostępnianie: na desktopie nad spisem treści, na mobile dopiero
            pod artykułem, żeby nie zasłaniało wejścia w treść. */}
        <div className='order-3 lg:order-0 lg:col-start-2 lg:row-start-1'>
          <ShareBlock url={url} title={shareTitle} />
        </div>

        <div className='order-1 lg:order-0 lg:col-start-2 lg:row-start-2'>
          <TableOfContents rootSelector='#article-root' size='large' />
        </div>
      </Wrapper>

      <Wrapper>
        <Divider />

        <ArticlesCarousel
          title={articlesCarouselTitle}
          categorySlug={canonicalCat}
          articles={articlePreviews}
          excludeSlug={article.slug}
        />
      </Wrapper>

      <Divider />

      <CTABanner
        title={cta.title}
        description={cta.description}
        btnOne={cta.btnOne}
        btnOneHref={cta.btnOneHref}
        btnTwo={cta.btnTwo}
        btnTwoHref={cta.btnTwoHref}
        backgroundImage={cta.backgroundImage}
        overlay={cta.overlay}
      />
    </>
  );
}
