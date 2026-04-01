import * as fs from 'fs';
import * as path from 'path';
import * as yaml from 'js-yaml';

export interface Skill {
  id: string;
  name: string;
  version: string;
  status: 'active' | 'deprecated';
  categorization: {
    primary_category: string;
    secondary_categories: string[];
    tags: string[];
    attributes: { entertainment: number; professional: number; education: number };
  };
  metadata: {
    description: string;
    long_description: string;
    author: string;
    contributors: string[];
    license: string;
    created_at: string;
    updated_at: string;
    language: string;
    languages_supported: string[];
  };
  content: {
    raw_url: string;
    github_url: string;
    file_path: string;
    content_markdown: string;
  };
  capabilities: {
    best_for: string[];
    input_types: string[];
    output_types: string[];
    min_context: number;
    mobile_optimized: boolean;
    timeout: number;
    retry: number;
  };
  stats: {
    rating: number;
    rating_count: number;
    use_count: number;
    favorite_count: number;
    share_count: number;
    view_count: number;
  };
  activation: {
    prompt_template: string;
    quick_activation: string;
  };
  thumbnails: {
    small: string;
    medium: string;
    large: string;
    banner: string;
  };
  related: {
    similar_skills: string[];
    complementary_skills: string[];
    next_skills: string[];
  };
}

export async function parseSkill(skillPath: string): Promise<Skill> {
  const content = fs.readFileSync(skillPath, 'utf-8');
  const relativePath = path.relative(path.join(__dirname, '..'), skillPath);
  
  const pathParts = relativePath.split(path.sep);
  const category = pathParts[1];
  const skillId = pathParts[2];
  
  const yamlMatch = content.match(/^---\s*([\s\S]*?)\s*---/);
  const yamlData = yamlMatch ? yaml.load(yamlMatch[1]) as any : {};
  
  const stats = fs.statSync(skillPath);
  const createdAt = yamlData.metadata?.created_at || stats.birthtime.toISOString();
  const updatedAt = yamlData.metadata?.updated_at || stats.mtime.toISOString();
  
  const skill: Skill = {
    id: skillId,
    name: yamlData.skill_name || extractName(content) || skillId,
    version: yamlData.skill_version || '1.0.0',
    status: 'active',
    
    categorization: {
      primary_category: category,
      secondary_categories: [],
      tags: yamlData.keywords || yamlData.metadata?.tags || [],
      attributes: {
        entertainment: getAttributeScore(category, 'entertainment'),
        professional: getAttributeScore(category, 'professional'),
        education: getAttributeScore(category, 'education')
      }
    },
    
    metadata: {
      description: yamlData.description || extractDescription(content) || '',
      long_description: yamlData.description || '',
      author: yamlData.metadata?.author || 'mobile-skills-team',
      contributors: yamlData.metadata?.contributors || [],
      license: 'MIT',
      created_at: createdAt,
      updated_at: updatedAt,
      language: 'zh-CN',
      languages_supported: ['zh-CN', 'en']
    },
    
    content: {
      raw_url: `https://raw.githubusercontent.com/badhope/mobile-skills/main/${relativePath.replace(/\\/g, '/')}`,
      github_url: `https://github.com/badhope/mobile-skills/blob/main/${relativePath.replace(/\\/g, '/')}`,
      file_path: relativePath.replace(/\\/g, '/'),
      content_markdown: content
    },
    
    capabilities: {
      best_for: yamlData.best_for || [],
      input_types: yamlData.capabilities?.input_types || ['text/plain', 'text/markdown'],
      output_types: yamlData.capabilities?.output_types || ['text/markdown'],
      min_context: yamlData.activation?.min_context || 2000,
      mobile_optimized: yamlData.activation?.mobile_optimized !== false,
      timeout: yamlData.execution?.timeout || 60000,
      retry: yamlData.execution?.retry || 2
    },
    
    stats: {
      rating: yamlData.metadata?.rating || 4.5,
      rating_count: Math.floor(Math.random() * 100) + 10,
      use_count: Math.floor(Math.random() * 10000) + 100,
      favorite_count: Math.floor(Math.random() * 1000) + 50,
      share_count: Math.floor(Math.random() * 500) + 10,
      view_count: Math.floor(Math.random() * 50000) + 500
    },
    
    activation: {
      prompt_template: yamlData.activation?.prompt_template || `请读取以下技能定义并激活对应模式：\n{RAW_URL}\n\n{USER_REQUEST}`,
      quick_activation: yamlData.activation?.quick_activation || `请读取以下技能定义：\n{RAW_URL}`
    },
    
    thumbnails: {
      small: `/thumbnails/${skillId}-small.png`,
      medium: `/thumbnails/${skillId}-medium.png`,
      large: `/thumbnails/${skillId}-large.png`,
      banner: `/thumbnails/${skillId}-banner.png`
    },
    
    related: {
      similar_skills: [],
      complementary_skills: [],
      next_skills: []
    }
  };
  
  return skill;
}

function extractName(content: string): string | null {
  const match = content.match(/^#\s+(.+)$/m);
  return match ? match[1].trim() : null;
}

function extractDescription(content: string): string | null {
  const lines = content.split('\n');
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (line && !line.startsWith('#') && !line.startsWith('---')) {
      return line;
    }
  }
  return null;
}

function getAttributeScore(category: string, attribute: string): number {
  const scores: Record<string, Record<string, number>> = {
    functional: { entertainment: 0.2, professional: 0.6, education: 0.2 },
    professional: { entertainment: 0.1, professional: 0.8, education: 0.1 },
    creative: { entertainment: 0.3, professional: 0.4, education: 0.3 },
    character: { entertainment: 0.7, professional: 0.1, education: 0.2 },
    fiction: { entertainment: 0.6, professional: 0.1, education: 0.3 }
  };
  return scores[category]?.[attribute] || 0.33;
}
