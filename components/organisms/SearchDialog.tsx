'use client';

import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { RiSearchLine, RiCloseLine, RiArrowRightSLine } from 'react-icons/ri';
import { createPortal } from 'react-dom';
import { useSearch } from '@/hooks/useSearch';
import { useEscapeKey } from '@/hooks/useEscapeKey';
import { useIsMounted } from '@/hooks/useIsMounted';
import { useDictionary, useLocale, useLocaleConfig } from '@/lib/LocaleContext';
import type { SearchCategory, SearchItem } from '@/lib/search/searchIndex';

import InlineLink from '../atoms/InlineLink';
import Input from '../atoms/form/Input';
type SearchDialogProps = {
  isOpen: boolean;
  onClose: () => void;
};

const CATEGORY_ORDER: SearchCategory[] = ['uslugi', 'narzedzia', 'edukacja', 'realizacje', 'inne'];

export default function SearchDialog({ isOpen, onClose }: SearchDialogProps) {
  const router = useRouter();
  const locale = useLocale();
  const dict = useDictionary();
  const t = dict.search;
  const localeConfig = useLocaleConfig();
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(-1);
  const mounted = useIsMounted();

  const CATEGORY_LABELS: Record<SearchCategory, string> = {
    uslugi: t.categoryServices,
    narzedzia: t.categoryTools,
    edukacja: t.categoryEducation,
    realizacje: t.categoryProjects,
    inne: t.categoryPages,
  };

  const { query, setQuery, results, groupedResults, hasResults, clearSearch } = useSearch({
    locale,
    debounceMs: 150,
    limit: 24,
  });

  const flatResults = results;

  useEscapeKey(onClose, isOpen);

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

  const handleNavigate = (href: string) => {
    router.push(href);
    onClose();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!hasResults) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIndex(prev => (prev < flatResults.length - 1 ? prev + 1 : 0));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIndex(prev => (prev > 0 ? prev - 1 : flatResults.length - 1));
    } else if (e.key === 'Enter' && activeIndex >= 0) {
      e.preventDefault();
      handleNavigate(flatResults[activeIndex].href);
    }
  };

  useEffect(() => {
    if (activeIndex >= 0 && listRef.current) {
      const activeElement = listRef.current.querySelector(
        `[data-index="${activeIndex}"]`,
      ) as HTMLElement;
      activeElement?.scrollIntoView({ block: 'nearest' });
    }
  }, [activeIndex]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const renderResults = () => {
    if (!query.trim()) {
      return <div className='text-light px-4 py-8 text-center text-sm'>{t.emptyHint}</div>;
    }

    if (!hasResults) {
      return (
        <div className='px-4 py-8 text-center'>
          <p className='text-light text-sm'>
            {t.noResults} „{query}”
          </p>
          <InlineLink
            href={localeConfig.contactHref ?? '/kontakt'}
            prefetch={false}
            onClick={onClose}
            className='text-dark inline-link mt-2 inline-block text-sm font-medium'
          >
            {t.contactUs}
          </InlineLink>
        </div>
      );
    }

    let globalIndex = 0;

    return (
      <div ref={listRef} className='max-h-[60vh] overflow-y-auto py-2'>
        {CATEGORY_ORDER.map(category => {
          const items = groupedResults[category];
          if (items.length === 0) return null;

          return (
            <div key={category} className='mb-2'>
              <div className='text-light px-4 py-1.5 text-xs font-semibold tracking-wide uppercase'>
                {CATEGORY_LABELS[category]}
              </div>
              {items.slice(0, 5).map(item => {
                const currentIndex = globalIndex++;
                return (
                  <SearchResultItem
                    key={item.href}
                    item={item}
                    isActive={currentIndex === activeIndex}
                    dataIndex={currentIndex}
                    onClick={() => handleNavigate(item.href)}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
    );
  };

  if (!mounted) return null;

  if (!isOpen) return null;

  return createPortal(
    <div
      className='animate-modal-backdrop fixed inset-0 z-[100] flex items-start justify-center bg-black/40 px-4 pt-[10vh]'
      onClick={handleBackdropClick}
      role='dialog'
      aria-modal='true'
      aria-label={t.ariaLabel}
    >
      <div className='animate-modal-content w-full max-w-xl overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black/5'>
        <div className='flex items-center gap-2 border-b border-neutral-200 px-4 py-1'>
          <RiSearchLine className='text-primary h-4 w-4 shrink-0' aria-hidden='true' />
          <Input
            ref={inputRef}
            type='text'
            value={query}
            onChange={e => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={t.placeholder}
            aria-label={t.ariaSearch}
          />
          <button
            type='button'
            onClick={onClose}
            className='text-primary hover:bg-primary-light rounded p-0.5'
            aria-label={t.ariaClose}
          >
            <RiCloseLine className='h-4 w-4' />
          </button>
        </div>

        {renderResults()}
      </div>
    </div>,
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
      type='button'
      data-index={dataIndex}
      onClick={onClick}
      className={`group flex w-full items-center gap-3 px-4 py-2 text-left transition ${isActive ? 'bg-neutral-100' : 'hover:bg-neutral-50'}`}
    >
      <div className='min-w-0 flex-1'>
        <div className='text-dark truncate text-sm font-medium'>{item.title}</div>
        {item.description && <div className='text-light truncate text-xs'>{item.description}</div>}
      </div>
      <RiArrowRightSLine
        className={`text-primary h-4 w-4 shrink-0 transition ${isActive ? 'translate-x-0.5 opacity-100' : 'opacity-0 group-hover:opacity-50'}`}
        aria-hidden='true'
      />
    </button>
  );
}
