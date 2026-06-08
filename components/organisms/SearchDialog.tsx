'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { RiSearchLine, RiCloseLine, RiArrowRightSLine } from 'react-icons/ri';
import { useEscapeKey } from '@/hooks/useEscapeKey';
import { useIsMounted } from '@/hooks/useIsMounted';
import { useSearch } from '@/hooks/useSearch';
import { useDictionary, useLocale, useLocaleConfig } from '@/lib/LocaleContext';
import type { SearchCategory, SearchItem } from '@/lib/searchIndex';
import {
  largeIconSizeClasses,
  modalBackdropClasses,
  modalContentClasses,
  smallIconSizeClasses,
} from '@/lib/uiClasses';
import { cn } from '@/lib/clsx';
import Input from '../atoms/form/Input';
import InlineLink from '../atoms/InlineLink';

type SearchDialogProps = {
  isOpen: boolean;
  onClose: () => void;
};

const CATEGORY_ORDER: SearchCategory[] = [
  'uslugi',
  'narzedzia',
  'edukacja',
  'realizacje',
  'inne',
];

/**
 * Modal search dialog that queries and displays grouped results, supports keyboard navigation, and navigates to a selected result.
 *
 * Renders nothing until mounted or when `isOpen` is false. When open, focuses the search input, lists matching results grouped by category, allows navigation with ArrowUp/ArrowDown/Enter, closes on Escape or backdrop click, and calls `onClose` after navigation or when dismissed.
 *
 * @param isOpen - Whether the dialog is visible
 * @param onClose - Callback invoked to close the dialog
 * @returns The modal dialog element when open and mounted, otherwise `null`
 */
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

  const categoryLabels: Record<SearchCategory, string> = {
    uslugi: t.categoryServices,
    narzedzia: t.categoryTools,
    edukacja: t.categoryEducation,
    realizacje: t.categoryProjects,
    inne: t.categoryPages,
  };

  const { query, setQuery, results, groupedResults, hasResults, clearSearch } =
    useSearch({
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
      return (
        <div className='px-4 py-8 text-center text-sm text-light'>
          {t.emptyHint}
        </div>
      );
    }

    if (!hasResults) {
      return (
        <div className='px-4 py-8 text-center'>
          <p className='text-sm text-light'>
            {t.noResults} „{query}”
          </p>
          <InlineLink
            href={localeConfig.contactHref ?? '/kontakt'}
            onClick={onClose}
            className='inline-link mt-2 inline-block font-medium'
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
              <div className='px-4 py-3 text-xs font-semibold tracking-wide text-light uppercase'>
                {categoryLabels[category]}
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
      className={cn(
        'fixed inset-0 z-100 flex items-start justify-center bg-black/40 px-4 pt-[10vh]',
        modalBackdropClasses,
      )}
      onClick={handleBackdropClick}
      role='dialog'
      aria-modal='true'
      aria-label={t.ariaLabel}
    >
      <div
        className={cn(
          'w-full max-w-xl overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black/5',
          modalContentClasses,
        )}
      >
        <div className='relative flex items-center gap-2 border-b border-neutral-200 px-4 py-1'>
          <RiSearchLine
            className={cn(
              'absolute left-8 shrink-0 text-primary',
              smallIconSizeClasses,
            )}
            aria-hidden='true'
          />
          <Input
            ref={inputRef}
            type='text'
            value={query}
            onChange={e => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={t.placeholder}
            aria-label={t.ariaSearch}
            className={cn('py-2 pr-4 pl-10')}
          />
          <button
            type='button'
            onClick={onClose}
            className='rounded p-0.5 text-primary hover:bg-primary-light'
            aria-label={t.ariaClose}
          >
            <RiCloseLine className={largeIconSizeClasses} />
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

/**
 * Renders a single clickable search result row with active styling.
 *
 * Displays the item's title and optional description, shows an arrow icon whose visibility and transform reflect the active state,
 * and exposes a data-index attribute for keyboard navigation and scrolling.
 *
 * @param item - The search item to display; its `title` is required and `description` is optional.
 * @param isActive - If `true`, applies the active visual state to the row and arrow icon.
 * @param dataIndex - The flattened index of this item within the full results list (used for keyboard navigation/scrolling).
 * @param onClick - Callback invoked when the row is activated.
 * @returns The rendered result row element.
 */
function SearchResultItem({
  item,
  isActive,
  dataIndex,
  onClick,
}: SearchResultItemProps) {
  return (
    <button
      type='button'
      data-index={dataIndex}
      onClick={onClick}
      className={cn(
        'group flex w-full items-center gap-3 px-4 py-2 text-left transition',
        {
          'bg-neutral-100': isActive,
          'hover:bg-neutral-50': !isActive,
        },
      )}
    >
      <div className='min-w-0 flex-1'>
        <div className='truncate text-sm font-medium text-dark'>
          {item.title}
        </div>
        {item.description && (
          <div className='truncate text-xs text-light'>{item.description}</div>
        )}
      </div>
      <RiArrowRightSLine
        className={cn(
          'shrink-0 text-primary transition',
          smallIconSizeClasses,
          {
            'translate-x-0.5 opacity-100': isActive,
            'opacity-0 group-hover:opacity-50': !isActive,
          },
        )}
        aria-hidden='true'
      />
    </button>
  );
}
