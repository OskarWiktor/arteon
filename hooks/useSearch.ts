import { useState, useEffect, useMemo, useCallback } from 'react';
import { searchItems, groupSearchResults, type SearchItem, type SearchCategory } from '@/lib/search/searchIndex';

type UseSearchOptions = {
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

export function useSearch(options: UseSearchOptions = {}): UseSearchReturn {
  const { debounceMs = 150, limit = 20 } = options;

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
    const timer = setTimeout(() => {
      setDebouncedQuery(query);
      setIsSearching(false);
    }, debounceMs);

    return () => clearTimeout(timer);
  }, [query, debounceMs]);

  const results = useMemo(() => {
    if (!debouncedQuery.trim()) return [];
    return searchItems(debouncedQuery, limit);
  }, [debouncedQuery, limit]);

  const groupedResults = useMemo(() => groupSearchResults(results), [results]);

  const hasResults = results.length > 0;

  const clearSearch = useCallback(() => {
    setQuery('');
    setDebouncedQuery('');
  }, []);

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
