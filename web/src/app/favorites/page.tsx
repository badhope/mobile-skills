'use client';

import { useState } from 'react';
import Link from 'next/link';
import SkillCard from '@/components/SkillCard';
import Breadcrumb from '@/components/Breadcrumb';
import type { SkillsData } from '@/types/skill';
import skillsData from '@/skills-data.json';

function getInitialFavoriteIds(): string[] {
  if (typeof window === 'undefined') return [];
  const stored = localStorage.getItem('favorite-skills');
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch {
      return [];
    }
  }
  return [];
}

export default function FavoritesPage() {
  const { skills } = skillsData as SkillsData;
  const [favoriteIds, setFavoriteIds] = useState<string[]>(() => getInitialFavoriteIds());

  const toggleFavorite = (skillId: string) => {
    const newFavorites = favoriteIds.includes(skillId)
      ? favoriteIds.filter(id => id !== skillId)
      : [...favoriteIds, skillId];
    setFavoriteIds(newFavorites);
    localStorage.setItem('favorite-skills', JSON.stringify(newFavorites));
  };

  const favoriteSkills = skills.filter(skill => favoriteIds.includes(skill.id));

  const clearAllFavorites = () => {
    if (confirm('确定要清空所有收藏吗？')) {
      setFavoriteIds([]);
      localStorage.setItem('favorite-skills', JSON.stringify([]));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="bg-gradient-to-r from-rose-500 to-pink-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[
            { label: '首页', href: '/' },
            { label: '我的收藏' }
          ]} />
          <div className="flex items-center gap-4 mt-4">
            <span className="text-5xl">❤️</span>
            <div>
              <h1 className="text-4xl font-bold">我的收藏</h1>
              <p className="text-white/80 mt-2">您收藏的技能将保存在本地浏览器中</p>
            </div>
          </div>
          <div className="mt-6 flex gap-6 text-sm">
            <div className="bg-white/20 rounded-lg px-4 py-2">
              <span className="font-bold text-lg">{favoriteSkills.length}</span> 个收藏
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {favoriteSkills.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">💔</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              还没有收藏任何技能
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              浏览技能列表，点击心形图标即可收藏
            </p>
            <Link 
              href="/skills" 
              className="inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
            >
              浏览技能
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                收藏的技能
              </h2>
              <button
                onClick={clearAllFavorites}
                className="text-red-600 hover:text-red-700 dark:text-red-400 font-medium flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
                清空收藏
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {favoriteSkills.map(skill => (
                <div key={skill.id} className="relative">
                  <SkillCard skill={skill} />
                  <button
                    onClick={() => toggleFavorite(skill.id)}
                    className="absolute top-4 right-4 p-2 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:scale-110 transition-transform"
                    title="取消收藏"
                  >
                    <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
