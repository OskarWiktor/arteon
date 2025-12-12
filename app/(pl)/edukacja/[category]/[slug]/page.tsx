import { notFound, redirect } from 'next/navigation';
import type { Metadata } from 'next';
import Image from 'next/image';

import Gap from '@/components/ui/Gap';
import Wrapper from '@/components/ui/Wrapper';
import HeroBanner from '@/components/sections/HeroBanner';
import Breadcrumbs from '@/components/sections/BreadCrumbs';
import TableOfContents from '@/components/sections/TableOfContent';
import Badge from '@/components/ui/Badge';
import FaqPanels from '@/components/ui/FaqPanels';
import CTABanner from '@/components/sections/CTABanner';

import type { Article } from '@/types/article';
import { getAllArticles, findArticleBySlug, getPrimaryCategorySlug } from '@/lib/blog';
import { slugify } from '@/utils/slug';
import CodeBlock from '@/components/ui/CodeBlock';
import TableBlock from '@/components/ui/TableBlock';
import ArticlesOverview from '@/components/sections/blog/ArticlesOverview';
import ShareBlock from '@/components/sections/ShareBlock';

const siteUrl = 'https://www.arteonagency.pl';
const GAP: 'sm' | 'xs' | 'md' = 'sm';

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

function articleUrl(category: string, slug: string) {
  return `${siteUrl}/edukacja/${category}/${slug}`;
}

function jsonLd(article: Article) {
  const canonicalCat = getPrimaryCategorySlug(article);
  const url = articleUrl(canonicalCat, article.slug);
  const headline = article.seo?.title || article.title;
  const description = article.seo?.description || article.excerpt || '';
  const image = article.cover ? (article.cover.startsWith('http') ? article.cover : `${siteUrl}${article.cover}`) : undefined;

  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    headline,
    description,
    image: image ? [image] : undefined,
    author: [{ '@type': 'Organization', name: article.author?.name || 'Arteon' }],
    publisher: {
      '@type': 'Organization',
      name: 'Arteon',
      logo: { '@type': 'ImageObject', url: `${siteUrl}/icon-512x512.png` },
    },
    datePublished: article.datePublished,
    dateModified: article.dateModified || article.datePublished,
    articleSection: article.category,
    keywords: (article.tags || []).join(', '),
  } as const;
}

function Aspect({ ratio = '16/9', children }: { ratio?: '16/9' | '4/3' | '1/1' | 'auto'; children: React.ReactNode }) {
  if (ratio === 'auto') return <div className="relative overflow-hidden rounded-2xl border border-black/10">{children}</div>;
  const map: Record<string, string> = { '16/9': 'aspect-square md:aspect-[16/9]', '4/3': 'aspect-[4/3]', '1/1': 'aspect-square' };
  return <div className={`relative overflow-hidden rounded-2xl border border-black/10 ${map[ratio] || ''}`}>{children}</div>;
}

function FlowGroup({ items }: { items: any[] }) {
  return (
    <div className="prose prose-lg max-w-none">
      {items.map((b, i) => {
        if (b.type === 'richtext') {
          return <div key={`f-rt-${i}`} dangerouslySetInnerHTML={{ __html: b.html }} />;
        }
        if (b.type === 'code') {
          return (
            <div key={`f-code-${i}`} className="not-prose my-6">
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
            <div key={`f-tbl-${i}`} className="not-prose my-6">
              <TableBlock caption={b.caption} note={b.note} columns={b.columns} rows={b.rows} striped={b.striped ?? true} compact={b.compact ?? false} />
            </div>
          );
        }
        if (b.type === 'quote') {
          return (
            <div key={`f-q-${i}`} className="not-prose my-6">
              <figure className="rounded-2xl bg-white p-6 shadow-md">
                <blockquote>
                  <p className="text-lg leading-relaxed">“{b.text}”</p>
                </blockquote>
                {(b.author || b.role) && (
                  <figcaption className="mt-3 text-sm text-[#5e5e5e]">
                    {b.author}
                    {b.role ? `, ${b.role}` : ''}
                  </figcaption>
                )}
              </figure>
            </div>
          );
        }
        return null;
      })}
    </div>
  );
}

function RenderBlocks({ blocks }: { blocks?: Article['contentBlocks'] }) {
  if (!blocks?.length) return null;

  const FLOW_TYPES = new Set(['richtext', 'code', 'table', 'quote']);

  type Group = { kind: 'flow' | 'single'; items: Article['contentBlocks'] };
  const groups: Group[] = [];
  let buf: Article['contentBlocks'] = [];

  const flushFlow = () => {
    if (buf.length) {
      groups.push({ kind: 'flow', items: buf });
      buf = [];
    }
  };

  for (const b of blocks) {
    if (b.breakBefore) flushFlow();

    if (FLOW_TYPES.has(b.type)) {
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
              <Gap size={GAP} variant="line" />
            </div>
          );
        }

        const b = g.items[0];

        if (b.type === 'image') {
          const isAuto = b.ratio === 'auto';
          const hasCaption = Boolean(b.caption);

          return (
            <div key={`grp-img-${i}`}>
              <figure className={!hasCaption ? 'mb-6 md:mb-12 lg:mb-16' : undefined}>
                {isAuto ? (
                  <div className="overflow-hidden rounded-2xl border border-black/10">
                    <Image
                      src={b.src}
                      alt={b.alt}
                      width={b.width ?? 2000}
                      height={b.height ?? 1200}
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
                {hasCaption && <figcaption className="mt-2 mb-6 text-sm text-[#5e5e5e] md:mb-12 lg:mb-16">{b.caption}</figcaption>}
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
                  height={b.height ?? 1200}
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
            <div key={`grp-imgt-${i}`}>
              <div className="grid items-start gap-6 md:grid-cols-2">
                {b.imageSide === 'right' ? (
                  <>
                    <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: b.html }} />
                    {Img}
                  </>
                ) : (
                  <>
                    {Img}
                    <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: b.html }} />
                  </>
                )}
              </div>
              <Gap size={GAP} variant="line" />
            </div>
          );
        }

        return <div key={`grp-unknown-${i}`} />;
      })}
    </>
  );
}

export async function generateStaticParams() {
  const items = getAllArticles();
  return items.map((a) => ({ category: getPrimaryCategorySlug(a), slug: a.slug }));
}

export async function generateMetadata({ params }: { params: { category: string; slug: string } }): Promise<Metadata> {
  const article = findArticleBySlug(params.slug);
  if (!article) return {};

  const canonicalCat = getPrimaryCategorySlug(article);
  const url = articleUrl(canonicalCat, article.slug);
  const canonicalPath = article.seo?.canonical || `/edukacja/${canonicalCat}/${article.slug}`;
  const title = article.seo?.title || article.title;
  const description = article.seo?.description || article.excerpt || '';
  const image = article.cover?.startsWith('http') ? article.cover : article.cover ? `${siteUrl}${article.cover}` : undefined;

  return {
    title,
    description,
    alternates: { canonical: canonicalPath.startsWith('/') ? canonicalPath : `/edukacja/${canonicalCat}/${article.slug}` },
    openGraph: {
      type: 'article',
      url,
      title,
      description,
      images: image ? [{ url: image, width: 1200, height: 630, alt: article.title }] : undefined,
    },
    twitter: { card: 'summary_large_image', title, description, images: image ? [image] : undefined },
  };
}

export default function ArticlePage({ params }: { params: { category: string; slug: string } }) {
  const article = findArticleBySlug(params.slug);
  if (!article) return notFound();

  const canonicalCat = getPrimaryCategorySlug(article);
  if (params.category !== canonicalCat) {
    redirect(`/edukacja/${canonicalCat}/${article.slug}`);
  }

  const url = articleUrl(canonicalCat, article.slug);
  const cta = { ...defaultCTA, ...(article.cta ?? {}) };
  const shareTitle = article.seo?.title || article.title;

  return (
    <>
      <HeroBanner backgroundImage={article.cover || '/assets/bg/abstract-bg13.webp'} />

      <Breadcrumbs
        second={{ href: '/edukacja', label: 'Edukacja' }}
        third={{ href: `/edukacja/${canonicalCat}`, label: article.category?.find((c) => slugify(c) === canonicalCat) || canonicalCat }}
        fourth={{ href: `/edukacja/${canonicalCat}/${article.slug}`, label: article.title }}
        includeJsonLd
      />

      <Wrapper as="article" id="article-root" itemScope itemType="https://schema.org/BlogPosting" className="flex flex-col-reverse gap-8 lg:grid lg:grid-cols-[1fr_300px]">
        <div>
          <header>
            <h1 className="h2 mb-1" itemProp="headline">
              {article.title}
            </h1>
            <div className="mt-5 flex flex-wrap items-center gap-2 text-sm text-[#5e5e5e] md:gap-4">
              {article.author?.name ? <Badge text={article.author.name} /> : null}
              {article.datePublished ? <Badge text={`Publikacja: ${article.datePublished}`} /> : null}
              {article.readingTime ? <Badge text={`${article.readingTime} min czytania`} /> : null}
              {article.category?.map((c) => <Badge key={c} text={c} />)}
            </div>
          </header>

          <Gap size="xs" />

          <RenderBlocks blocks={article.contentBlocks} />

          {article.faq?.length ? (
            <>
              <FaqPanels openByDefault={1} title="Najczęstsze pytania" subtitle="FAQ" items={article.faq} pageUrl={url} />
            </>
          ) : null}

          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd(article)) }} />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'BreadcrumbList',
                itemListElement: [
                  { '@type': 'ListItem', position: 1, name: 'Strona główna', item: siteUrl },
                  { '@type': 'ListItem', position: 2, name: 'Edukacja', item: `${siteUrl}/edukacja` },
                  { '@type': 'ListItem', position: 3, name: canonicalCat, item: `${siteUrl}/edukacja/${canonicalCat}` },
                  { '@type': 'ListItem', position: 4, name: article.title, item: url },
                ],
              }),
            }}
          />
        </div>
        <div>
          <ShareBlock url={url} title={shareTitle} className="mb-12" /> <TableOfContents rootSelector="#article-root" size="large" levels="h2" />
        </div>
      </Wrapper>

      <Wrapper>
        <Gap />

        <ArticlesOverview title="Sprawdź najnowsze artykuły i poradniki" excludeSlug={article.slug} />
      </Wrapper>

      <Gap />

      <CTABanner
        title={cta.title}
        description={cta.description}
        btnOne={cta.btnOne}
        btnOneLink={cta.btnOneLink}
        btnTwo={cta.btnTwo}
        btnTwoLink={cta.btnTwoLink}
        backgroundImage={cta.backgroundImage}
        overlay={cta.overlay}
      />
    </>
  );
}
