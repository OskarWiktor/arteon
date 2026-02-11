'use client';

import { useRef, useMemo } from 'react';
import { CarouselDots } from '@/components/ui/carousel/CarouselDots';
import { CarouselNavButtons } from '@/components/ui/carousel/CarouselNavButtons';
import { CarouselCard } from '@/components/ui/carousel/CarouselCard';
import SectionHeaderWithAction from '../../ui/sections/SectionHeaderWithAction';
import { useCarouselScroller } from '@/hooks/useCarouselScroller';

import type { ArticlePreview } from '@/types/article';
import { slugify } from '@/utils/slugify';
import { getPrimaryCategorySlug } from '@/utils/blogCategory';

const AUTO_PLAY_INTERVAL_MS = 6000;

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

type Props = {
  articles?: ArticlePreview[];
  max?: number;
  title?: string;
  subtitle?: string;
  categorySlug?: string;
  slugs?: string | string[];
  excludeSlug?: string;
};

export default function ArticlesCarousel({ articles, max = 10, title = ui.pl.defaultTitle, subtitle, categorySlug, slugs, excludeSlug }: Props) {
  const t = ui.pl;
  const scrollRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLElement>(null);

  const sourceArticles = useMemo<ArticlePreview[]>(() => {
    return articles ?? [];
  }, [articles]);

  const finalArticles = useMemo(() => {
    const slugsArray = typeof slugs === 'string' ? [slugs] : slugs;
    let list: ArticlePreview[];

    if (slugsArray && slugsArray.length) {
      const map = new Map(sourceArticles.map((a) => [a.slug, a] as const));
      list = slugsArray.map((s) => map.get(s)).filter(Boolean) as ArticlePreview[];
    } else if (categorySlug) {
      list = sourceArticles.filter((a) => {
        const allCats = [a.primaryCategory, ...(a.category || [])].filter(Boolean) as string[];
        return allCats.some((c) => slugify(c) === categorySlug);
      });
    } else {
      list = sourceArticles;
    }

    if (excludeSlug) {
      list = list.filter((a) => a.slug !== excludeSlug);
    }

    return list.slice(0, max);
  }, [sourceArticles, slugs, categorySlug, excludeSlug, max]);

  const { currentSlide, maxSlides, isScrollable, scrollByCards, goToSlide, onKeyDown } = useCarouselScroller({
    itemCount: finalArticles.length,
    scrollRef,
    cardRef,
    autoPlay: true,
    autoPlayIntervalMs: AUTO_PLAY_INTERVAL_MS,
  });

  if (!finalArticles.length) return null;

  const allArticlesHref = categorySlug ? `${t.urls.education}/${categorySlug}` : t.urls.education;

  return (
    <section className="w-full" aria-labelledby="articles-heading">
      <SectionHeaderWithAction
        subtitle={subtitle}
        title={title}
        headingLevel="h2"
        headingClassName=""
        titleId="articles-heading"
        actionLabel={t.seeAllArticles}
        actionLink={allArticlesHref}
        actionAriaLabel={t.seeAllArticles}
      />

      <div className="relative">
        <div
          ref={scrollRef}
          className="no-scrollbar focus-visible:ring-primary flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-8 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
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
              <div
                key={a.slug}
                ref={
                  i === 0
                    ? (el: HTMLDivElement | null) => {
                        cardRef.current = el;
                      }
                    : null
                }
                className="w-[340px] shrink-0 snap-start md:w-[420px] lg:w-[520px]"
                aria-label={`${t.article} ${i + 1} ${t.of} ${finalArticles.length}`}
              >
                <CarouselCard variant="article" article={a} href={href} readingTimeLabel={t.readingTime} publicationDateLabel={t.publicationDate} />
              </div>
            );
          })}
        </div>

        <CarouselNavButtons isScrollable={isScrollable} onPrev={() => scrollByCards('left')} onNext={() => scrollByCards('right')} prevLabel={t.scrollLeft} nextLabel={t.scrollRight} />
      </div>

      <CarouselDots
        isScrollable={isScrollable}
        currentSlide={currentSlide}
        maxSlides={maxSlides}
        onDotClick={goToSlide}
        carouselNavigationLabel={t.carouselNavigation}
        goToSlideLabel={t.goToSlide}
        ofLabel={t.of}
        slideLabel={t.slide}
      />
    </section>
  );
}
