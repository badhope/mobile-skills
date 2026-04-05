'use client';

import { useState, useCallback, useMemo } from 'react';

function getInitialFavorites(): string[] {
  if (typeof window === 'undefined') {
    return [];
  }
  const stored = localStorage.getItem('favorites');
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch {
      return [];
    }
  }
  return [];
}

export function useFavorites() {
  const [favorites, setFavorites] = useState<string[]>(() => getInitialFavorites());

  const toggleFavorite = useCallback((skillId: string) => {
    setFavorites(prev => {
      const newFavorites = prev.includes(skillId)
        ? prev.filter(id => id !== skillId)
        : [...prev, skillId];
      
      localStorage.setItem('favorites', JSON.stringify(newFavorites));
      return newFavorites;
    });
  }, []);

  const isFavorite = useCallback((skillId: string) => {
    return favorites.includes(skillId);
  }, [favorites]);

  const favoritesSet = useMemo(() => new Set(favorites), [favorites]);

  const isFavoriteOptimized = useCallback((skillId: string) => {
    return favoritesSet.has(skillId);
  }, [favoritesSet]);

  const clearFavorites = useCallback(() => {
    setFavorites([]);
    localStorage.removeItem('favorites');
  }, []);

  const favoritesCount = favorites.length;

  return { 
    favorites, 
    toggleFavorite, 
    isFavorite, 
    isFavoriteOptimized,
    clearFavorites,
    favoritesCount
  };
}
