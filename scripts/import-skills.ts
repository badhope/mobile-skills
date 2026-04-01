#!/usr/bin/env ts-node
import * as fs from 'fs';
import * as path from 'path';
import { parseSkill, type Skill } from './parse-skill';
import { categories } from './categories-config';

const SKILLS_DIR = path.join(__dirname, '..', 'skills');
const DATA_DIR = path.join(__dirname, '..', 'data');

function ensureDir(dir: string) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

async function scanSkillsDir(): Promise<string[]> {
  const skillPaths: string[] = [];
  const categoryDirs = ['functional', 'professional', 'creative', 'character', 'fiction'];
  
  for (const category of categoryDirs) {
    const categoryDir = path.join(SKILLS_DIR, category);
    if (!fs.existsSync(categoryDir)) continue;
    
    const skillDirs = fs.readdirSync(categoryDir, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory())
      .map(dirent => dirent.name);
    
    for (const skillDir of skillDirs) {
      const skillPath = path.join(categoryDir, skillDir, 'SKILL.md');
      if (fs.existsSync(skillPath)) {
        skillPaths.push(skillPath);
      }
    }
  }
  
  return skillPaths;
}

async function main() {
  console.log('🚀 开始导入技能...');
  
  ensureDir(DATA_DIR);
  
  const skillPaths = await scanSkillsDir();
  console.log(`📦 找到 ${skillPaths.length} 个技能`);
  
  const skills: Skill[] = [];
  for (const skillPath of skillPaths) {
    console.log(`📄 解析: ${path.relative(SKILLS_DIR, skillPath)}`);
    try {
      const skill = await parseSkill(skillPath);
      skills.push(skill);
    } catch (error) {
      console.error(`❌ 解析失败: ${skillPath}`, error);
    }
  }
  
  const skillsOutput = {
    schema_version: '1.0.0',
    generated_at: new Date().toISOString(),
    skills: skills,
    categories: categories
  };
  
  fs.writeFileSync(
    path.join(DATA_DIR, 'skills.json'),
    JSON.stringify(skillsOutput, null, 2),
    'utf-8'
  );
  
  console.log('✅ skills.json 已生成');
  console.log(`🎉 完成！导入了 ${skills.length} 个技能`);
}

main().catch(console.error);
