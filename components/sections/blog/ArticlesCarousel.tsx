'use client';

import { useRef, useMemo } from 'react';
import { CarouselDots } from '@/components/ui/carousel/CarouselDots';
import { CarouselNavButtons } from '@/components/ui/carousel/CarouselNavButtons';
import CarouselCard from '@/components/ui/carousel/CarouselCard';
import SectionHeaderWithAction from '../../ui/sections/SectionHeaderWithAction';
import { useCarouselScroller } from '@/hooks/useCarouselScroller';

import type { ArticlePreview } from '@/types/article';
import { slugify } from '@/utils/slugify';
import { getPrimaryCategorySlug } from '@/utils/blogCategory';

const AUTO_PLAY_INTERVAL_MS = 6000;

type Props = {
  articles?: ArticlePreview[];
  max?: number;
  title?: string;
  subtitle?: string;
  categorySlug?: string;
  slugs?: string | string[];
  excludeSlug?: string;
};

export default function ArticlesCarousel({ articles, max = 10, title = 'Edukacja i artykuły', subtitle, categorySlug, slugs, excludeSlug }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLElement>(null);

  const finalArticles = useMemo(() => {
    const source = articles ?? [];
    const slugsArray = typeof slugs === 'string' ? [slugs] : slugs;
    let list: ArticlePreview[];

    if (slugsArray && slugsArray.length) {
      const map = new Map(source.map((a) => [a.slug, a] as const));
      list = slugsArray.map((s) => map.get(s)).filter(Boolean) as ArticlePreview[];
    } else if (categorySlug) {
      list = source.filter((a) => {
        return a.primaryCategory && slugify(a.primaryCategory) === categorySlug;
      });
    } else {
      list = source;
    }

    if (excludeSlug) {
      list = list.filter((a) => a.slug !== excludeSlug);
    }

    return list.slice(0, max);
  }, [articles, slugs, categorySlug, excludeSlug, max]);

  const { currentSlide, maxSlides, isScrollable, scrollByCards, goToSlide, onKeyDown } = useCarouselScroller({
    itemCount: finalArticles.length,
    scrollRef,
    cardRef,
    autoPlay: true,
    autoPlayIntervalMs: AUTO_PLAY_INTERVAL_MS,
  });

  if (!finalArticles.length) return null;

  const allArticlesHref = categorySlug ? `/edukacja/${categorySlug}` : '/edukacja';

  return (
    <section className="w-full" aria-labelledby="articles-heading">
      <SectionHeaderWithAction
        subtitle={subtitle}
        title={title}
        headingLevel="h2"
        headingClassName=""
        titleId="articles-heading"
        actionLabel="Zobacz wszystkie artykuły"
        actionLink={allArticlesHref}
        actionAriaLabel="Zobacz wszystkie artykuły"
      />

      <div className="relative">
        <div
          ref={scrollRef}
          className="no-scrollbar focus-visible:ring-primary flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-8 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
          role="region"
          aria-roledescription="carousel"
          aria-label="Karuzela artykułów"
          aria-live="polite"
          tabIndex={0}
          onKeyDown={onKeyDown}
        >
          {finalArticles.map((a, i) => {
            const catSlug = getPrimaryCategorySlug(a);
            const href = `/edukacja/${catSlug}/${a.slug}`;

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
                role="group"
                aria-label={`Artykuł ${i + 1} z ${finalArticles.length}`}
              >
                <CarouselCard variant="article" article={a} href={href} readingTimeLabel="min czytania" />
              </div>
            );
          })}
        </div>

        <CarouselNavButtons isScrollable={isScrollable} onPrev={() => scrollByCards('left')} onNext={() => scrollByCards('right')} prevLabel="Przewiń w lewo" nextLabel="Przewiń w prawo" />
      </div>

      <CarouselDots
        isScrollable={isScrollable}
        currentSlide={currentSlide}
        maxSlides={maxSlides}
        onDotClick={goToSlide}
        carouselNavigationLabel="Nawigacja karuzeli artykułów"
        goToSlideLabel="Przejdź do slajdu"
        ofLabel="z"
        slideLabel="Slajd"
      />
    </section>
  );
}
