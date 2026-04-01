import Link from 'next/link';
import SkillCard from '@/components/SkillCard';
import type { SkillsData, Skill } from '@/types/skill';
import skillsData from '@/skills-data.json';

const CATEGORY_INFO: Record<string, { name: string; icon: string; color: string }> = {
  functional: { name: '功能型', icon: '🛠️', color: 'bg-indigo-500' },
  professional: { name: '专业型', icon: '💼', color: 'bg-pink-500' },
  creative: { name: '创意型', icon: '🎨', color: 'bg-cyan-500' },
  character: { name: '角色型', icon: '🎭', color: 'bg-pink-400' },
  fiction: { name: '虚构世界', icon: '📖', color: 'bg-green-500' }
};

export default function Home() {
  const { skills, categories } = skillsData as SkillsData;

  const sortedByPopular = [...skills].sort((a, b) => b.stats.use_count - a.stats.use_count);
  const hotSkills = sortedByPopular.slice(0, 8);

  const sortedByNew = [...skills].sort((a, b) => 
    new Date(b.metadata.updated_at).getTime() - new Date(a.metadata.updated_at).getTime()
  );
  const newSkills = sortedByNew.slice(0, 8);

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              🚀 AI Skill 生态系统
            </h1>
            <p className="text-xl md:text-2xl text-indigo-100 mb-8 max-w-3xl mx-auto">
              通过 Raw 链接激活 AI Skill，让 AI 变得更有用、更有趣
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/skills"
                className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-indigo-50 transition-colors"
              >
                浏览所有技能
              </Link>
              <a
                href="https://github.com/badhope/mobile-skills"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            技能分类
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {Object.entries(categories).map(([key, category]) => {
              const info = CATEGORY_INFO[key] || { name: category.name, icon: '🧩', color: 'bg-gray-500' };
              const categorySkills = skills.filter(s => s.categorization.primary_category === key);
              return (
                <Link
                  key={key}
                  href={`/skills?category=${key}`}
                  className="text-center p-6 rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all"
                >
                  <div className={`${info.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <span className="text-3xl">{info.icon}</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">{info.name}</h3>
                  <p className="text-sm text-gray-500">{categorySkills.length} 个技能</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">
              🔥 热门技能
            </h2>
            <Link href="/skills" className="text-indigo-600 hover:text-indigo-700 font-medium">
              查看全部 →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {hotSkills.map(skill => (
              <SkillCard key={skill.id} skill={skill} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">
              🆕 最新上线
            </h2>
            <Link href="/skills?sort=newest" className="text-indigo-600 hover:text-indigo-700 font-medium">
              查看全部 →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {newSkills.map(skill => (
              <SkillCard key={skill.id} skill={skill} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-indigo-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            统计数据
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8">
            <div>
              <div className="text-4xl font-bold">{skills.length}</div>
              <div className="text-indigo-200">技能总数</div>
            </div>
            <div>
              <div className="text-4xl font-bold">{Object.keys(categories).length}</div>
              <div className="text-indigo-200">分类</div>
            </div>
            <div>
              <div className="text-4xl font-bold">
                {skills.reduce((sum, s) => sum + s.stats.use_count, 0).toLocaleString()}
              </div>
              <div className="text-indigo-200">总使用次数</div>
            </div>
            <div>
              <div className="text-4xl font-bold">
                {(skills.reduce((sum, s) => sum + s.stats.rating, 0) / skills.length).toFixed(1)}
              </div>
              <div className="text-indigo-200">平均评分</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
