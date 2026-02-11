'use client';

import { useState, useCallback, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { createPortal } from 'react-dom';
import { RiCloseLine, RiCheckLine, RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';
import Button from '@/components/ui/buttons/Button';
import { useEscapeKey } from '@/hooks/useEscapeKey';

const ui = {
  pl: {
    filters: 'Filtry artykułów',
    categories: 'Kategorie artykułów',
    all: 'Wszystkie',
    chooseCategory: 'Wybierz kategorię',
    close: 'Zamknij',
    showMore: 'Więcej filtrów',
    showLess: 'Mniej filtrów',
    urls: {
      education: '/edukacja',
    },
  },
} as const;

type Cat = { label: string; slug: string; count: number };

// Height of one row of buttons (button height ~36px + gap 8px + padding for shadow)
const COLLAPSED_HEIGHT = 48;

export default function FilterBar({ cats, active }: { cats: Cat[]; active?: string }) {
  const t = ui.pl;
  const pathname = usePathname();
  const isRoot = pathname === t.urls.education;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [needsExpand, setNeedsExpand] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Check if content overflows one row
  useEffect(() => {
    const checkOverflow = () => {
      if (navRef.current) {
        const scrollHeight = navRef.current.scrollHeight;
        setNeedsExpand(scrollHeight > COLLAPSED_HEIGHT + 16);
      }
    };
    checkOverflow();
    window.addEventListener('resize', checkOverflow);
    return () => window.removeEventListener('resize', checkOverflow);
  }, [cats]);

  const openModal = useCallback(() => setIsModalOpen(true), []);
  const closeModal = useCallback(() => setIsModalOpen(false), []);
  const toggleExpand = useCallback(() => setIsExpanded((prev) => !prev), []);

  useEscapeKey(closeModal, isModalOpen);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isModalOpen]);

  // Get active category label for mobile button
  const activeLabel = active ? cats.find((c) => c.slug === active)?.label : null;
  const mobileButtonLabel = activeLabel || t.all;

  return (
    <>
      <h2 className="mb-4">{t.filters}</h2>

      {/* Mobile: Button that opens modal */}
      <div className="pb-6 md:hidden">
        <button
          type="button"
          onClick={openModal}
          className="inline-flex items-center gap-2 rounded-2xl border border-black/10 bg-white px-3 py-2 text-sm font-medium shadow-md transition hover:-translate-y-0.5 hover:shadow-lg"
          aria-haspopup="dialog"
          aria-expanded={isModalOpen}
        >
          <span>{mobileButtonLabel}</span>
          <span className="text-light">({cats.length + 1})</span>
        </button>
      </div>

      {/* Desktop/Tablet: Collapsible filter row */}
      <div className="hidden pb-6 md:block md:pb-8 lg:pb-10">
        <div className="flex flex-wrap items-start gap-2">
          {/* Filters container with collapse/expand */}
          <motion.nav
            ref={navRef}
            aria-label={t.categories}
            initial={false}
            animate={{ height: isExpanded ? 'auto' : COLLAPSED_HEIGHT }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="flex flex-1 flex-wrap gap-2 overflow-hidden"
          >
            <Button variant={isRoot ? 'accent' : 'normal'} link={t.urls.education} size="small" aria-current={isRoot ? 'page' : undefined}>
              {t.all}
            </Button>

            {cats.map((c) => {
              const isActive = active === c.slug;
              return (
                <Button size="small" key={c.slug} variant={isActive ? 'accent' : 'normal'} link={`${t.urls.education}/${c.slug}`} aria-current={isActive ? 'page' : undefined}>
                  {c.label} <span className="opacity-60">({c.count})</span>
                </Button>
              );
            })}
          </motion.nav>

          {/* Show more/less button - outside animated container, always visible */}
          {needsExpand && (
            <button
              type="button"
              onClick={toggleExpand}
              className="inline-flex shrink-0 items-center gap-1 rounded-2xl border border-black/10 bg-white px-3 py-1.5 text-sm font-medium shadow-md transition hover:-translate-y-0.5 hover:shadow-lg"
              aria-expanded={isExpanded}
            >
              <span>{isExpanded ? t.showLess : t.showMore}</span>
              {isExpanded ? <RiArrowUpSLine className="h-4 w-4" /> : <RiArrowDownSLine className="h-4 w-4" />}
            </button>
          )}
        </div>
      </div>

      {/* Mobile Modal */}
      {mounted && createPortal(<FilterModal isOpen={isModalOpen} onClose={closeModal} cats={cats} active={active} isRoot={isRoot} t={t} />, document.body)}
    </>
  );
}

type FilterModalProps = {
  isOpen: boolean;
  onClose: () => void;
  cats: Cat[];
  active?: string;
  isRoot: boolean;
  t: typeof ui.pl;
};

function FilterModal({ isOpen, onClose, cats, active, isRoot, t }: FilterModalProps) {
  const listRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(-1);

  // Reset active index when modal opens
  useEffect(() => {
    if (isOpen) {
      setActiveIndex(-1);
      // Focus first item after animation
      setTimeout(() => {
        listRef.current?.querySelector('a')?.focus();
      }, 100);
    }
  }, [isOpen]);

  const allItems = [{ label: t.all, slug: '', count: 0, isAll: true }, ...cats.map((c) => ({ ...c, isAll: false }))];

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setActiveIndex((prev) => (prev < allItems.length - 1 ? prev + 1 : 0));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setActiveIndex((prev) => (prev > 0 ? prev - 1 : allItems.length - 1));
      }
    },
    [allItems.length],
  );

  useEffect(() => {
    if (activeIndex >= 0 && listRef.current) {
      const el = listRef.current.querySelector(`[data-index="${activeIndex}"]`) as HTMLElement;
      el?.focus();
    }
  }, [activeIndex]);

  const handleBackdropClick = useCallback(
    (e: React.MouseEvent) => {
      if (e.target === e.currentTarget) onClose();
    },
    [onClose],
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          className="fixed inset-0 z-[100] flex items-start justify-center bg-black/30 px-4 pt-[10vh] backdrop-blur-[1px]"
          onClick={handleBackdropClick}
          role="dialog"
          aria-modal="true"
          aria-label={t.chooseCategory}
        >
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-xl"
            onKeyDown={handleKeyDown}
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-neutral-200 px-4 py-3">
              <h3 className="text-base font-semibold">{t.chooseCategory}</h3>
              <button type="button" onClick={onClose} className="text-primary hover:bg-primary-light rounded-full p-1.5" aria-label={t.close}>
                <RiCloseLine className="h-5 w-5" />
              </button>
            </div>

            {/* Category list */}
            <div ref={listRef} className="max-h-[60vh] overflow-y-auto py-2" role="listbox" aria-label={t.categories}>
              {allItems.map((item, index) => {
                const isActive = item.isAll ? isRoot : active === item.slug;
                const href = item.isAll ? t.urls.education : `${t.urls.education}/${item.slug}`;

                return (
                  <Link
                    key={item.slug || 'all'}
                    href={href}
                    data-index={index}
                    onClick={onClose}
                    role="option"
                    aria-selected={isActive}
                    className={`flex w-full items-center justify-between px-4 py-3 text-left transition ${isActive ? 'bg-primary-light' : 'hover:bg-neutral-50'}`}
                  >
                    <span className="flex items-center gap-2">
                      <span className="font-medium">{item.label}</span>
                      {!item.isAll && <span className="text-light text-sm">({item.count})</span>}
                    </span>
                    {isActive && <RiCheckLine className="text-primary h-5 w-5" aria-hidden="true" />}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
