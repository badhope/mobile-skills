'use client';

import { useState, useMemo, useCallback } from 'react';
import Fuse from 'fuse.js';
import type { Skill } from '@/types/skill';

interface UseSearchOptions {
  threshold?: number;
  keys?: Array<string | { name: string; weight?: number }>;
}

export function useSearch(skills: Skill[], options: UseSearchOptions = {}) {
  const [query, setQuery] = useState('');

  const fuse = useMemo(() => {
    return new Fuse(skills, {
      keys: options.keys || [
        { name: 'name', weight: 0.4 },
        { name: 'metadata.description', weight: 0.3 },
        { name: 'categorization.tags', weight: 0.3 }
      ],
      threshold: options.threshold || 0.4,
      includeScore: true,
      minMatchCharLength: 2
    });
  }, [skills, options.keys, options.threshold]);

  const results = useMemo(() => {
    if (!query.trim()) {
      return skills;
    }

    const searchResults = fuse.search(query);
    return searchResults.map(result => result.item);
  }, [query, fuse, skills]);

  const clearSearch = useCallback(() => {
    setQuery('');
  }, []);

  return {
    query,
    setQuery,
    results,
    clearSearch,
    hasResults: results.length > 0,
    resultCount: results.length
  };
}
