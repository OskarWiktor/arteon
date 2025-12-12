'use client';

import { useRef, useEffect, useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { RiArrowRightSLine, RiArrowLeftSLine } from 'react-icons/ri';
import SectionHeaderWithAction from '../../ui/sections/SectionHeaderWithAction';
import Text from '@/components/ui/typography/Text';

import type { Article } from '@/types/article';
import { getPrimaryCategorySlug } from '@/lib/blog';
import { slugify } from '@/utils/slug';
import blogData from '@/data/pl/blog.json';

const ui = {
  pl: {
    defaultTitle: 'Edukacja i artykuły',
    seeAllArticles: 'Zobacz wszystkie artykuły',
    carouselLabel: 'Karuzela artykułów',
    scrollLeft: 'Przewiń w lewo',
    scrollRight: 'Przewiń w prawo',
    carouselNavigation: 'Nawigacja karuzeli artykułów',
    goToSlide: 'Przejdź do slajdu',
    of: 'z',
    slide: 'Slajd',
    article: 'Artykuł',
    readingTime: 'min czytania',
    publicationDate: 'Data publikacji',
    urls: {
      education: '/edukacja',
    },
  },
} as const;

interface BlogData {
  articles: Article[];
}

type Props = {
  articles?: Article[];
  max?: number;
  title?: string;
  subtitle?: string;
  categorySlug?: string;
  slugs?: string | string[];
  excludeSlug?: string;
};

const allArticles = (blogData as BlogData).articles;

export default function ArticlesOverview({ articles, max = 7, title = ui.pl.defaultTitle, subtitle, categorySlug, slugs, excludeSlug }: Props) {
  const t = ui.pl;
  const scrollRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const [currentSlide, setCurrentSlide] = useState(0);
  const [maxSlides, setMaxSlides] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const [isScrollable, setIsScrollable] = useState(false);

  const sourceArticles = useMemo<Article[]>(() => {
    return articles && articles.length ? articles : allArticles;
  }, [articles]);

  const finalArticles = useMemo(() => {
    const slugsArray = typeof slugs === 'string' ? [slugs] : slugs;
    let list: Article[];

    if (slugsArray && slugsArray.length) {
      const map = new Map(sourceArticles.map((a) => [a.slug, a] as const));
      list = slugsArray.map((s) => map.get(s)).filter(Boolean) as Article[];
    } else if (categorySlug) {
      list = sourceArticles.filter((a) => (a.category || []).some((c) => slugify(c) === categorySlug));
    } else {
      list = sourceArticles;
    }

    if (excludeSlug) {
      list = list.filter((a) => a.slug !== excludeSlug);
    }

    return list.slice(0, max);
  }, [sourceArticles, slugs, categorySlug, excludeSlug, max]);

  useEffect(() => {
    const container = scrollRef.current;
    const card = cardRef.current;
    if (!container || !card) return;

    const ro = new ResizeObserver(() => {
      const cs = getComputedStyle(container);
      const gap = parseFloat(cs.columnGap || '16') || 16;

      const w = card.getBoundingClientRect().width;
      const cardWithGap = w + gap;
      setCardWidth(cardWithGap);

      const epsilon = 0.01;
      const visible = Math.max(1, Math.floor((container.clientWidth + epsilon) / cardWithGap));

      const total = finalArticles.length;
      const slides = Math.max(1, total - visible + 1);

      setMaxSlides(slides);
      setIsScrollable(slides > 1);

      const nextIndex = Math.min(currentSlide, slides - 1);
      setCurrentSlide(nextIndex);
      container.scrollTo({
        left: nextIndex * cardWithGap,
        behavior: 'instant' as ScrollBehavior,
      });
    });

    ro.observe(container);
    if (card) ro.observe(card);
    return () => ro.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps -- Only re-run when finalArticles.length changes, not on every finalArticles change
  }, [finalArticles.length]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el || !cardWidth) return;

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const idx = Math.round(el.scrollLeft / cardWidth);
        setCurrentSlide(idx);
        ticking = false;
      });
    };
    el.addEventListener('scroll', onScroll, { passive: true });
    return () => el.removeEventListener('scroll', onScroll);
  }, [cardWidth]);

  const scrollByCards = (dir: 'left' | 'right') => {
    if (!scrollRef.current || !cardWidth) return;
    const delta = dir === 'left' ? -1 : 1;
    const next = Math.max(0, Math.min(currentSlide + delta, maxSlides - 1));
    scrollRef.current.scrollTo({ left: next * cardWidth, behavior: 'smooth' });
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (!isScrollable) return;
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      scrollByCards('right');
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      scrollByCards('left');
    } else if (e.key === 'Home') {
      e.preventDefault();
      scrollRef.current?.scrollTo({ left: 0, behavior: 'smooth' });
    } else if (e.key === 'End') {
      e.preventDefault();
      scrollRef.current?.scrollTo({
        left: (maxSlides - 1) * cardWidth,
        behavior: 'smooth',
      });
    }
  };

  if (!finalArticles.length) return null;

  const navBtn =
    'group absolute bottom-[-31px] z-10 cursor-pointer rounded-full border border-slate-600 bg-slate-600 p-1 md:p-2 text-white shadow-xl backdrop-blur-sm ' +
    'transition hover:scale-105 hover:bg-white hover:text-slate-700 focus:outline-none ' +
    'focus-visible:ring-2 focus-visible:ring-slate-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white md:block';

  const allArticlesHref = categorySlug ? `${t.urls.education}/${categorySlug}` : t.urls.education;

  return (
    <section className="w-full" aria-labelledby="articles-heading">
      <SectionHeaderWithAction
        subtitle={subtitle}
        title={title}
        headingLevel="h2"
        headingClassName="reveal-animation md:mb-0"
        titleId="articles-heading"
        actionLabel={t.seeAllArticles}
        actionLink={allArticlesHref}
        actionAriaLabel={t.seeAllArticles}
      />

      <div className="relative">
        <div
          ref={scrollRef}
          className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pt-4 pb-8 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
          role="region"
          aria-roledescription="carousel"
          aria-label={t.carouselLabel}
          aria-live="polite"
          tabIndex={0}
          onKeyDown={onKeyDown}
        >
          {finalArticles.map((a, i) => {
            const catSlug = getPrimaryCategorySlug(a);
            const href = `${t.urls.education}/${catSlug}/${a.slug}`;

            return (
              <article
                key={a.slug}
                ref={i === 0 ? cardRef : null}
                className="w-[340px] shrink-0 snap-start overflow-hidden rounded-2xl bg-white shadow-md transition focus-within:shadow-lg hover:shadow-lg md:w-[420px] lg:w-[520px]"
                aria-label={`${t.article} ${i + 1} ${t.of} ${finalArticles.length}`}
              >
                <Link href={href} className="block focus:outline-none">
                  {a.cover ? (
                    <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-black/10">
                      <Image src={a.cover} alt={a.title} fill className="object-cover" sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw" />
                    </div>
                  ) : null}
                  <div className="p-4">
                    <h3 className="h6">{a.title}</h3>
                    <div className="mt-3 flex flex-wrap items-center gap-2">
                      {a.readingTime ? (
                        <Text variant="small" tone="muted" as="span">
                          {a.readingTime} {t.readingTime}
                        </Text>
                      ) : null}
                      {a.datePublished ? (
                        <Text variant="small" tone="muted" as="span" aria-label={t.publicationDate}>
                          • {a.datePublished}
                        </Text>
                      ) : null}
                    </div>
                  </div>
                </Link>
              </article>
            );
          })}
        </div>

        {isScrollable && (
          <>
            <button type="button" onClick={() => scrollByCards('left')} className={`${navBtn} left-2 max-h-13 max-w-13`} aria-label={t.scrollLeft}>
              <RiArrowLeftSLine className="h-8 w-8" aria-hidden="true" />
            </button>

            <button type="button" onClick={() => scrollByCards('right')} className={`${navBtn} right-2 max-h-13 max-w-13`} aria-label={t.scrollRight}>
              <RiArrowRightSLine className="h-8 w-8" aria-hidden="true" />
            </button>
          </>
        )}
      </div>

      {isScrollable && maxSlides > 1 && (
        <div className="flex justify-center md:gap-2" role="group" aria-label={t.carouselNavigation}>
          {Array.from({ length: maxSlides }).map((_, i) => (
            <button
              key={i}
              onClick={() =>
                scrollRef.current?.scrollTo({
                  left: i * cardWidth,
                  behavior: 'smooth',
                })
              }
              aria-label={`${t.goToSlide} ${i + 1} ${t.of} ${maxSlides}`}
              aria-current={i === currentSlide ? 'true' : undefined}
              className="h-5 w-5 cursor-pointer rounded-full p-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white md:h-6 md:w-6"
            >
              <span
                aria-hidden="true"
                className={`mx-auto block h-2 w-2 rounded-full transition duration-300 md:h-3 md:w-3 ${i === currentSlide ? 'bg-slate-500 hover:bg-slate-700' : 'bg-gray-300 hover:bg-gray-500'}`}
              />
            </button>
          ))}
        </div>
      )}

      {isScrollable && maxSlides > 1 && (
        <p className="sr-only" aria-live="polite">
          {t.slide} {Math.min(currentSlide + 1, maxSlides)} {t.of} {maxSlides}
        </p>
      )}
    </section>
  );
}
