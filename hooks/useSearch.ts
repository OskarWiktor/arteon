import { useState, useEffect } from 'react';
import { useDebouncedEffect } from '@/hooks/useDebouncedEffect';
import {
  searchItems,
  groupSearchResults,
  type SearchItem,
  type SearchCategory,
} from '@/lib/searchIndex';
import type { Locale } from '@/types/locale';

type UseSearchOptions = {
  locale: Locale;
  debounceMs?: number;
  limit?: number;
};

type UseSearchReturn = {
  query: string;
  setQuery: (query: string) => void;
  results: SearchItem[];
  groupedResults: Record<SearchCategory, SearchItem[]>;
  isSearching: boolean;
  hasResults: boolean;
  clearSearch: () => void;
};

export function useSearch(options: UseSearchOptions): UseSearchReturn {
  const { locale, debounceMs = 150, limit = 20 } = options;

  const [query, setQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    if (!query.trim()) {
      setDebouncedQuery('');
      setIsSearching(false);
      return;
    }

    setIsSearching(true);
  }, [query, debounceMs]);

  useDebouncedEffect(
    () => {
      setDebouncedQuery(query);
      setIsSearching(false);
    },
    debounceMs,
    [query],
    { enabled: Boolean(query.trim()) },
  );

  const results = (() => {
    if (!debouncedQuery.trim()) return [];
    return searchItems(debouncedQuery, locale, limit);
  })();

  const groupedResults = groupSearchResults(results);

  const hasResults = results.length > 0;

  const clearSearch = () => {
    setQuery('');
    setDebouncedQuery('');
  };

  return {
    query,
    setQuery,
    results,
    groupedResults,
    isSearching,
    hasResults,
    clearSearch,
  };
}
