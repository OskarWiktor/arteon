'use client';

import { useRef } from 'react';
import { CarouselDots } from '@/components/molecules/carousels/CarouselDots';
import { CarouselNavButtons } from '@/components/molecules/carousels/CarouselNavButtons';
import SectionHeader from '@/components/molecules/SectionHeader';
import CarouselCard from '@/components/organisms/carousels/CarouselCard';
import { useCarouselScroller } from '@/hooks/useCarouselScroller';
import { cn } from '@/lib/clsx';
import { focusRingClasses, noScrollbarClasses } from '@/lib/uiClasses';
import type { ArticlePreview } from '@/types/article';
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

/**
 * Renders a horizontally scrollable, snap-based carousel of article preview cards with a section header, navigation controls, and pagination dots.
 *
 * @param articles - Source list of article previews; defaults to an empty list when omitted.
 * @param max - Maximum number of articles to display.
 * @param title - Section title shown in the header.
 * @param subtitle - Optional section subtitle shown in the header.
 * @param categorySlug - When provided, filters articles to those whose primary category slug matches this value.
 * @param slugs - When provided (string or array), selects articles matching these slugs in the given order.
 * @param excludeSlug - When provided, excludes the article with this slug from the final list.
 * @returns The rendered carousel section element, or `null` if no articles are available to display.
 */
export default function ArticlesCarousel({
  articles,
  max = 10,
  title = 'Edukacja i artykuły',
  subtitle,
  categorySlug,
  slugs,
  excludeSlug,
}: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLElement>(null);

  const finalArticles = (() => {
    const source = articles ?? [];
    const slugsArray = typeof slugs === 'string' ? [slugs] : slugs;
    let list: ArticlePreview[];

    if (slugsArray && slugsArray.length) {
      const map = new Map(source.map(a => [a.slug, a] as const));
      list = slugsArray
        .map(s => map.get(s))
        .filter(Boolean) as ArticlePreview[];
    } else if (categorySlug) {
      list = source.filter(a => {
        return (
          typeof a.primaryCategory === 'string' &&
          a.primaryCategory
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/[^a-z0-9 -]/g, '')
            .replace(/\s+/g, '-')
            .trim() === categorySlug
        );
      });
    } else {
      list = source;
    }

    if (excludeSlug) {
      list = list.filter(a => a.slug !== excludeSlug);
    }

    return list.slice(0, max);
  })();

  const {
    currentSlide,
    maxSlides,
    isScrollable,
    scrollByCards,
    goToSlide,
    onKeyDown,
  } = useCarouselScroller({
    itemCount: finalArticles.length,
    scrollRef,
    cardRef,
    autoPlay: true,
    autoPlayIntervalMs: AUTO_PLAY_INTERVAL_MS,
  });

  if (!finalArticles.length) return null;

  const allArticlesHref = categorySlug
    ? `/edukacja/${categorySlug}`
    : '/edukacja';

  return (
    <section className='w-full' aria-labelledby='articles-heading'>
      <SectionHeader
        subtitle={subtitle}
        title={title}
        titleId='articles-heading'
        buttonText='Zobacz wszystkie artykuły'
        buttonLink={allArticlesHref}
      />

      <div className='relative'>
        <div
          ref={scrollRef}
          className={cn(
            'flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-8',
            noScrollbarClasses,
            focusRingClasses,
          )}
          role='region'
          aria-roledescription='carousel'
          aria-label='Karuzela artykułów'
          aria-live='polite'
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
                className='w-85 shrink-0 snap-start md:w-105 lg:w-130'
                role='group'
                aria-label={`Artykuł ${i + 1} z ${finalArticles.length}`}
              >
                <CarouselCard
                  variant='article'
                  article={a}
                  href={href}
                  readingTimeLabel='min czytania'
                />
              </div>
            );
          })}
        </div>

        <CarouselNavButtons
          isScrollable={isScrollable}
          onPrev={() => scrollByCards('left')}
          onNext={() => scrollByCards('right')}
          prevLabel='Przewiń w lewo'
          nextLabel='Przewiń w prawo'
        />
      </div>

      <CarouselDots
        isScrollable={isScrollable}
        currentSlide={currentSlide}
        maxSlides={maxSlides}
        onDotClick={goToSlide}
        carouselNavigationLabel='Nawigacja karuzeli artykułów'
        goToSlideLabel='Przejdź do slajdu'
        ofLabel='z'
        slideLabel='Slajd'
      />
    </section>
  );
}
