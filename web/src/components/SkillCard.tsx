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
    <Link href={`/skills/${skill.id}`}>
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow cursor-pointer group">
        <div className={`h-32 bg-gradient-to-br ${colorGradient} flex items-center justify-center relative`}>
          <span className="text-5xl group-hover:scale-110 transition-transform">
            {icon}
          </span>
        </div>
        <div className="p-5">
          <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
            {skill.name}
          </h3>
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {skill.metadata.description}
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded">
                {categoryName}
              </span>
              <span className="text-xs text-gray-500 flex items-center gap-1">
                ⭐ {skill.stats.rating.toFixed(1)}
              </span>
            </div>
            <span className="text-xs text-gray-400">
              {skill.stats.use_count.toLocaleString()} 使用
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
