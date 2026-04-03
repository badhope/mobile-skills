'use client';

import Link from 'next/link';
import type { Skill } from '@/types/skill';

interface SkillCardProps {
  skill: Skill;
}

const CATEGORY_ICONS: Record<string, string> = {
  functional: '🛠️',
  professional: '💼',
  creative: '🎨',
  character: '🎭',
  fiction: '📖'
};

const CATEGORY_COLORS: Record<string, string> = {
  functional: 'from-indigo-500 to-purple-600',
  professional: 'from-pink-400 to-rose-500',
  creative: 'from-cyan-400 to-cyan-500',
  character: 'from-pink-400 to-yellow-300',
  fiction: 'from-green-400 to-teal-400'
};

const CATEGORY_NAMES: Record<string, string> = {
  functional: '功能型',
  professional: '专业型',
  creative: '创意型',
  character: '角色型',
  fiction: '虚构世界'
};

export default function SkillCard({ skill }: SkillCardProps) {
  const category = skill.categorization.primary_category;
  const icon = CATEGORY_ICONS[category] || '🧩';
  const colorGradient = CATEGORY_COLORS[category] || 'from-gray-500 to-gray-600';
  const categoryName = CATEGORY_NAMES[category] || category;

  return (
    <Link href={`/skills/${skill.id}`} className="group block">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover-lift animate-scale-in cursor-pointer h-full">
        <div className={`h-32 bg-gradient-to-br ${colorGradient} flex items-center justify-center relative overflow-hidden`}>
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
          <span className="text-5xl group-hover:scale-110 transition-transform duration-300 relative z-10 drop-shadow-lg">
            {icon}
          </span>
        </div>
        <div className="p-5">
          <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-indigo-600 transition-colors duration-200">
            {skill.name}
          </h3>
          <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">
            {skill.metadata.description}
          </p>
          <div className="flex items-center justify-between pt-3 border-t border-gray-100">
            <div className="flex items-center gap-2">
              <span className="text-xs font-medium text-white bg-gradient-to-r px-2.5 py-1 rounded-full" style={{
                background: `linear-gradient(135deg, ${
                  category === 'functional' ? '#6366f1, #8b5cf6' :
                  category === 'professional' ? '#ec4899, #f43f5e' :
                  category === 'creative' ? '#06b6d4, #0891b2' :
                  category === 'character' ? '#ec4899, #fbbf24' :
                  '#10b981, #14b8a6'
                })`
              }}>
                {categoryName}
              </span>
              <span className="text-xs text-gray-500 flex items-center gap-1 font-medium">
                ⭐ {skill.stats.rating.toFixed(1)}
              </span>
            </div>
            <span className="text-xs text-gray-400 font-medium">
              {skill.stats.use_count.toLocaleString()} 使用
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
