'use client';

import { useRef, useEffect, useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { RiArrowRightSLine, RiArrowLeftSLine } from 'react-icons/ri';

import type { Article } from '@/types/article';
import { getPrimaryCategorySlug } from '@/lib/blog';
import { slugify } from '@/utils/slug';
import blogData from '@/data/pl/blog.json';
import Button from '@/components/ui/Button';

interface BlogData {
  articles: Article[];
}

type Props = {
  articles?: Article[];
  max?: number;
  title: string;
  subtitle?: string;
  categorySlug?: string;
  slugs?: string | string[];
};

const allArticles = (blogData as BlogData).articles;

export default function ArticlesOverview({ articles, max = 7, title = 'Edukacja i artykuły', subtitle, categorySlug, slugs }: Props) {
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
    let list: Article[] = [];

    if (slugsArray && slugsArray.length) {
      const map = new Map(sourceArticles.map((a) => [a.slug, a] as const));
      list = slugsArray.map((s) => map.get(s)).filter(Boolean) as Article[];
    } else if (categorySlug) {
      list = sourceArticles.filter((a) => (a.category || []).some((c) => slugify(c) === categorySlug));
    } else {
      list = sourceArticles;
    }

    return list.slice(0, max);
  }, [sourceArticles, slugs, categorySlug, max]);

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

  const carouselLabel = 'Karuzela artykułów';

  const navBtn =
    'group absolute bottom-[-31px] z-10 cursor-pointer rounded-full border border-slate-600 bg-slate-600 p-1 md:p-2 text-white shadow-xl backdrop-blur-sm ' +
    'transition hover:scale-105 hover:bg-white hover:text-slate-700 focus:outline-none ' +
    'focus-visible:ring-2 focus-visible:ring-slate-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white md:block';

  const allArticlesHref = categorySlug ? `/edukacja/${categorySlug}` : '/edukacja';

  return (
    <section className="w-full" aria-labelledby="articles-heading">
      {/* nagłówek + przycisk do wszystkich artykułów */}
      <div className="mb-2 flex flex-col gap-3 md:mb-3 md:flex-row md:items-center md:justify-between">
        <div>
          {subtitle && <span className="text-base tracking-wider text-[#5e5e5e] uppercase">{subtitle}</span>}
          <h2 id="articles-heading" className="reveal-animation md:mb-0">
            {title}
          </h2>
        </div>

        <Button link={allArticlesHref} aria-label="Zobacz wszystkie artykuły">
          Zobacz wszystkie artykuły
        </Button>
      </div>

      <div className="relative">
        <div
          ref={scrollRef}
          className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pt-4 pb-8 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
          role="region"
          aria-roledescription="carousel"
          aria-label={carouselLabel}
          aria-live="polite"
          tabIndex={0}
          onKeyDown={onKeyDown}
        >
          {finalArticles.map((a, i) => {
            const catSlug = getPrimaryCategorySlug(a);
            const href = `/edukacja/${catSlug}/${a.slug}`;

            return (
              <article
                key={a.slug}
                ref={i === 0 ? cardRef : null}
                className="w-[340px] shrink-0 snap-start overflow-hidden rounded-2xl bg-white shadow-md transition focus-within:shadow-lg hover:shadow-lg md:w-[420px] lg:w-[520px]"
                aria-label={`Artykuł ${i + 1} z ${finalArticles.length}`}
              >
                <Link href={href} className="block focus:outline-none">
                  {a.cover ? (
                    <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-black/10">
                      <Image src={a.cover} alt={a.title} fill className="object-cover" sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw" />
                    </div>
                  ) : null}
                  <div className="p-4">
                    <h3 className="h6">{a.title}</h3>
                    <div className="mt-3 flex flex-wrap items-center gap-2 text-sm text-[#5e5e5e]">
                      {a.readingTime ? <span>{a.readingTime} min czytania</span> : null}
                      {a.datePublished ? <span aria-label="Data publikacji">• {a.datePublished}</span> : null}
                    </div>
                  </div>
                </Link>
              </article>
            );
          })}
        </div>

        {isScrollable && (
          <>
            <button type="button" onClick={() => scrollByCards('left')} className={`${navBtn} left-2 max-h-13 max-w-13`} aria-label="Przewiń w lewo">
              <RiArrowLeftSLine className="h-8 w-8" aria-hidden="true" />
            </button>

            <button type="button" onClick={() => scrollByCards('right')} className={`${navBtn} right-2 max-h-13 max-w-13`} aria-label="Przewiń w prawo">
              <RiArrowRightSLine className="h-8 w-8" aria-hidden="true" />
            </button>
          </>
        )}
      </div>

      {isScrollable && maxSlides > 1 && (
        <div className="flex justify-center md:gap-2" role="group" aria-label="Nawigacja karuzeli artykułów">
          {Array.from({ length: maxSlides }).map((_, i) => (
            <button
              key={i}
              onClick={() =>
                scrollRef.current?.scrollTo({
                  left: i * cardWidth,
                  behavior: 'smooth',
                })
              }
              aria-label={`Przejdź do slajdu ${i + 1} z ${maxSlides}`}
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
          Slajd {Math.min(currentSlide + 1, maxSlides)} z {maxSlides}
        </p>
      )}
    </section>
  );
}
