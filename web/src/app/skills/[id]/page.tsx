import type { Metadata } from 'next';
import SkillClient from './SkillClient';
import type { SkillsData } from '@/types/skill';
import skillsData from '@/skills-data.json';

export function generateStaticParams() {
  const { skills } = skillsData as SkillsData;
  return skills.map((skill) => ({
    id: skill.id,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { skills } = skillsData as SkillsData;
  const { id } = await params;
  const skill = skills.find(s => s.id === id);
  
  if (!skill) {
    return {
      title: '技能未找到',
    };
  }
  
  return {
    title: `${skill.name} - AI Skills`,
    description: skill.metadata.description,
  };
}

export default async function SkillDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { skills } = skillsData as SkillsData;
  const { id } = await params;
  const skill = skills.find(s => s.id === id);
  
  if (!skill) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="text-6xl mb-4">😕</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">技能未找到</h2>
          <a href="/skills" className="text-indigo-600 hover:text-indigo-700">
            返回技能列表
          </a>
        </div>
      </div>
    );
  }
  
  return <SkillClient skill={skill} />;
}
