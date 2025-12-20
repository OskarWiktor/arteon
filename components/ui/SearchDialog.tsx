'use client';

import { useEffect, useRef, useCallback, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { RiSearchLine, RiCloseLine, RiArrowRightLine } from 'react-icons/ri';
import { createPortal } from 'react-dom';
import { useSearch } from '@/hooks/useSearch';
import { useEscapeKey } from '@/hooks/useEscapeKey';
import type { SearchCategory, SearchItem } from '@/lib/search/searchIndex';

type SearchDialogProps = {
  isOpen: boolean;
  onClose: () => void;
};

const CATEGORY_ORDER: SearchCategory[] = ['uslugi', 'narzedzia', 'edukacja', 'realizacje', 'inne'];

const CATEGORY_LABELS: Record<SearchCategory, string> = {
  uslugi: 'Usługi',
  narzedzia: 'Narzędzia',
  edukacja: 'Edukacja',
  realizacje: 'Realizacje',
  inne: 'Strony',
};

export default function SearchDialog({ isOpen, onClose }: SearchDialogProps) {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [mounted, setMounted] = useState(false);

  const { query, setQuery, results, groupedResults, hasResults, clearSearch } = useSearch({ debounceMs: 150, limit: 24 });

  const flatResults = results;

  useEscapeKey(onClose, isOpen);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
      setActiveIndex(-1);
    } else {
      clearSearch();
    }
  }, [isOpen, clearSearch]);

  useEffect(() => {
    setActiveIndex(-1);
  }, [query]);

  const handleNavigate = useCallback(
    (href: string) => {
      router.push(href);
      onClose();
    },
    [router, onClose],
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (!hasResults) return;

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setActiveIndex((prev) => (prev < flatResults.length - 1 ? prev + 1 : 0));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setActiveIndex((prev) => (prev > 0 ? prev - 1 : flatResults.length - 1));
      } else if (e.key === 'Enter' && activeIndex >= 0) {
        e.preventDefault();
        handleNavigate(flatResults[activeIndex].href);
      }
    },
    [hasResults, flatResults, activeIndex, handleNavigate],
  );

  useEffect(() => {
    if (activeIndex >= 0 && listRef.current) {
      const activeElement = listRef.current.querySelector(`[data-index="${activeIndex}"]`) as HTMLElement;
      activeElement?.scrollIntoView({ block: 'nearest' });
    }
  }, [activeIndex]);

  const handleBackdropClick = useCallback(
    (e: React.MouseEvent) => {
      if (e.target === e.currentTarget) {
        onClose();
      }
    },
    [onClose],
  );

  const renderResults = () => {
    if (!query.trim()) {
      return <div className="text-light px-4 py-8 text-center text-sm">Wpisz frazę, np. „strony internetowe”, „generator favicon” albo „realizacje” a zobaczysz powiązaną z nią stronę.</div>;
    }

    if (!hasResults) {
      return (
        <div className="px-4 py-8 text-center">
          <p className="text-light text-sm">Brak wyników dla „{query}”</p>
          <Link href="/kontakt" onClick={onClose} className="text-dark inline-link mt-2 inline-block text-sm font-medium">
            Skontaktuj się z nami
          </Link>
        </div>
      );
    }

    let globalIndex = 0;

    return (
      <div ref={listRef} className="max-h-[60vh] overflow-y-auto py-2">
        {CATEGORY_ORDER.map((category) => {
          const items = groupedResults[category];
          if (items.length === 0) return null;

          return (
            <div key={category} className="mb-2">
              <div className="text-light px-4 py-1.5 text-xs font-semibold tracking-wide uppercase">{CATEGORY_LABELS[category]}</div>
              {items.slice(0, 5).map((item) => {
                const currentIndex = globalIndex++;
                return <SearchResultItem key={item.href} item={item} isActive={currentIndex === activeIndex} dataIndex={currentIndex} onClick={() => handleNavigate(item.href)} />;
              })}
            </div>
          );
        })}
      </div>
    );
  };

  if (!mounted) return null;

  return createPortal(
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
          aria-label="Wyszukiwarka"
        >
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="w-full max-w-xl overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-black/5"
          >
            <div className="flex items-center gap-2 border-b border-gray-200 px-4 py-1">
              <RiSearchLine className="h-4 w-4 shrink-0 text-slate-700" aria-hidden="true" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Szukaj usług, narzędzi, artykułów..."
                className="text-mid placeholder:text-light h-7 flex-1 bg-transparent text-sm placeholder:opacity-80 focus:outline-none"
                aria-label="Wyszukaj"
              />
              <button type="button" onClick={onClose} className="rounded p-0.5 text-slate-700 hover:bg-slate-100" aria-label="Zamknij">
                <RiCloseLine className="h-4 w-4" />
              </button>
            </div>

            {renderResults()}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}

type SearchResultItemProps = {
  item: SearchItem;
  isActive: boolean;
  dataIndex: number;
  onClick: () => void;
};

function SearchResultItem({ item, isActive, dataIndex, onClick }: SearchResultItemProps) {
  return (
    <button
      type="button"
      data-index={dataIndex}
      onClick={onClick}
      className={`group flex w-full items-center gap-3 px-4 py-2 text-left transition ${isActive ? 'bg-neutral-100' : 'hover:bg-neutral-50'}`}
    >
      <div className="min-w-0 flex-1">
        <div className="text-dark truncate text-sm font-medium">{item.title}</div>
        {item.description && <div className="text-light truncate text-xs">{item.description}</div>}
      </div>
      <RiArrowRightLine className={`h-4 w-4 shrink-0 text-slate-700 transition ${isActive ? 'translate-x-0.5 opacity-100' : 'opacity-0 group-hover:opacity-50'}`} aria-hidden="true" />
    </button>
  );
}
