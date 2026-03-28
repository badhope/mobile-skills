#!/usr/bin/env python3
"""
Agent to Skill Migration Tool
将Agent文件迁移到新的Skill架构格式

Usage:
    python migration/agent_to_skill.py --source agents/functional --target skills/functional
"""

import os
import re
import yaml
import json
from pathlib import Path
from typing import Dict, List, Optional, Tuple
from dataclasses import dataclass, field, asdict
from datetime import datetime


@dataclass
class SkillMetadata:
    author: str = "mobile-skills-team"
    created_at: str = ""
    updated_at: str = ""
    tags: List[str] = field(default_factory=list)
    rating: float = 4.5


@dataclass
class ActivationConfig:
    raw_url: str = ""
    prompt_template: str = ""
    min_context: int = 2000
    mobile_optimized: bool = True


@dataclass
class Capabilities:
    input_types: List[str] = field(default_factory=lambda: ["text/plain", "text/markdown"])
    output_types: List[str] = field(default_factory=lambda: ["text/markdown"])
    dependencies: List[str] = field(default_factory=list)
    conflicts: List[str] = field(default_factory=list)


@dataclass
class ExecutionConfig:
    mode: str = "atomic"
    timeout: int = 30000
    retry: int = 2


@dataclass
class Skill:
    id: str
    name: str
    version: str = "2.0.0"
    category: str = "functional"
    description: str = ""
    best_for: List[str] = field(default_factory=list)
    keywords: List[str] = field(default_factory=list)
    activation: ActivationConfig = field(default_factory=ActivationConfig)
    capabilities: Capabilities = field(default_factory=Capabilities)
    execution: ExecutionConfig = field(default_factory=ExecutionConfig)
    metadata: SkillMetadata = field(default_factory=SkillMetadata)
    instructions: str = ""


CATEGORY_MAP = {
    'functional': 'functional',
    'professional': 'professional',
    'creative-arts': 'creative',
    'entertainment-character': 'character',
    'healthcare': 'professional',
    'finance': 'professional',
    'psychology': 'professional',
    'design-build': 'functional',
    'research-analysis': 'functional',
    'writing-creative': 'creative',
    'learning-education': 'functional',
    'subject-tutoring': 'functional',
    'lifestyle-companion': 'character',
    'gaming': 'character',
    'historical-culture': 'character',
    'social-vocation': 'professional',
    'agriculture': 'professional',
    'aviation': 'professional',
    'energy': 'professional',
    'maritime': 'professional',
    'media': 'professional',
    'military': 'professional',
    'religious': 'character',
    'sports': 'functional',
    'telecom': 'professional',
}


def parse_front_matter(content: str) -> Dict:
    """解析YAML front matter"""
    match = re.match(r'^```yaml\n(.*?)\n```\n', content, re.DOTALL)
    if match:
        try:
            return yaml.safe_load(match.group(1))
        except yaml.YAMLError:
            return {}
    return {}


def parse_markdown_sections(content: str) -> Dict[str, str]:
    """解析Markdown章节"""
    sections = {}
    current_section = None
    current_content = []
    
    for line in content.split('\n'):
        if line.startswith('## '):
            if current_section:
                sections[current_section] = '\n'.join(current_content).strip()
            current_section = line[3:].strip()
            current_content = []
        else:
            current_content.append(line)
    
    if current_section:
        sections[current_section] = '\n'.join(current_content).strip()
    
    return sections


def extract_name(identity_section: str) -> str:
    """从Role/Identity提取名称"""
    lines = identity_section.split('\n')
    for line in lines:
        line = line.strip()
        if line and not line.startswith('#'):
            return line[:50] + '...' if len(line) > 50 else line
    return "Unknown Agent"


def extract_description(mission_section: str) -> str:
    """从Core Mission提取描述"""
    lines = mission_section.split('\n')
    for line in lines:
        line = line.strip()
        if line and not line.startswith('#') and not line.startswith('>'):
            return line[:100] + '...' if len(line) > 100 else line
    return "AI Agent"


def extract_keywords(content: str) -> List[str]:
    """从内容中提取关键词"""
    keywords = []
    
    if 'best_for' in content:
        match = re.search(r'best_for:\s*(.+)', content)
        if match:
            keywords.extend([k.strip() for k in match.group(1).split(',')])
    
    section_keywords = ['任务管理', '计划', '分析', '翻译', '编程', '写作', 
                       '咨询', '健康', '金融', '心理', '教育', '游戏',
                       '修仙', '玄幻', '角色', '创意', '设计']
    
    for kw in section_keywords:
        if kw in content and kw not in keywords:
            keywords.append(kw)
    
    return keywords[:10]


def generate_raw_url(category: str, skill_id: str) -> str:
    """生成Raw URL"""
    return f"https://raw.githubusercontent.com/badhope/mobile-skills/main/skills/{category}/{skill_id}/SKILL.md"


def generate_prompt_template(metadata: Dict) -> str:
    """生成激活提示模板"""
    return """请读取以下技能定义并激活相应模式：
{RAW_URL}

我需要你帮助我：{USER_REQUEST}"""


def convert_agent_to_skill(agent_path: Path, target_category: str) -> Skill:
    """将Agent文件转换为Skill"""
    content = agent_path.read_text(encoding='utf-8')
    
    metadata = parse_front_matter(content)
    sections = parse_markdown_sections(content)
    
    agent_id = metadata.get('agent_id', agent_path.stem)
    category = CATEGORY_MAP.get(agent_path.parent.name, target_category)
    
    skill = Skill(
        id=agent_id,
        name=metadata.get('description', extract_name(sections.get('Role / Identity', ''))),
        version="2.0.0",
        category=category,
        description=extract_description(sections.get('Core Mission', '')),
        best_for=metadata.get('best_for', '').split(', ') if metadata.get('best_for') else [],
        keywords=extract_keywords(content),
        activation=ActivationConfig(
            raw_url=generate_raw_url(category, agent_id),
            prompt_template=generate_prompt_template(metadata),
            min_context=2000,
            mobile_optimized=True
        ),
        capabilities=Capabilities(),
        execution=ExecutionConfig(),
        metadata=SkillMetadata(
            author="mobile-skills-team",
            created_at="2024-01-15",
            updated_at=datetime.now().strftime("%Y-%m-%d"),
            tags=metadata.get('tags', []) if isinstance(metadata.get('tags', []), list) else [],
            rating=4.5
        ),
        instructions=content
    )
    
    return skill


def generate_skill_md(skill: Skill) -> str:
    """生成SKILL.md内容"""
    front_matter = {
        'skill_id': skill.id,
        'skill_name': skill.name,
        'skill_version': skill.version,
        'skill_category': skill.category,
        'description': skill.description,
        'best_for': skill.best_for,
        'keywords': skill.keywords,
        'activation': {
            'raw_url': skill.activation.raw_url,
            'prompt_template': skill.activation.prompt_template,
            'min_context': skill.activation.min_context,
            'mobile_optimized': skill.activation.mobile_optimized
        },
        'capabilities': {
            'input_types': skill.capabilities.input_types,
            'output_types': skill.capabilities.output_types,
            'dependencies': skill.capabilities.dependencies,
            'conflicts': skill.capabilities.conflicts
        },
        'execution': {
            'mode': skill.execution.mode,
            'timeout': skill.execution.timeout,
            'retry': skill.execution.retry
        },
        'metadata': {
            'author': skill.metadata.author,
            'created_at': skill.metadata.created_at,
            'updated_at': skill.metadata.updated_at,
            'tags': skill.metadata.tags,
            'rating': skill.metadata.rating
        }
    }
    
    yaml_str = yaml.dump(front_matter, allow_unicode=True, default_flow_style=False, sort_keys=False)
    
    return f"```yaml\n{yaml_str}```\n\n{skill.instructions}"


def generate_readme(skill: Skill) -> str:
    """生成README.md内容"""
    return f"""# {skill.name}

> 技能ID: `{skill.id}` | 版本: {skill.version} | 分类: {skill.category}

## 简介

{skill.description}

## 最佳使用场景

{chr(10).join(f'- {bf}' for bf in skill.best_for) if skill.best_for else '- 通用AI助手'}

## 快速开始

### 方式一：Raw链接激活（推荐）

```
请读取以下技能定义并激活相应模式：
{skill.activation.raw_url}

我需要你帮助我：[描述你的需求]
```

### 方式二：直接对话

直接告诉AI你的需求即可。

## 技术细节

| 属性 | 值 |
|:-----|:-----|
| 模式 | {skill.execution.mode} |
| 超时 | {skill.execution.timeout}ms |
| 重试 | {skill.execution.retry}次 |

---

**Skill Version:** {skill.version}
**Last Updated:** {skill.metadata.updated_at}
"""


def save_skill(skill: Skill, target_dir: Path) -> Path:
    """保存Skill到目标目录"""
    skill_dir = target_dir / skill.category / skill.id
    skill_dir.mkdir(parents=True, exist_ok=True)
    
    skill_path = skill_dir / 'SKILL.md'
    skill_path.write_text(generate_skill_md(skill), encoding='utf-8')
    
    readme_path = skill_dir / 'README.md'
    readme_path.write_text(generate_readme(skill), encoding='utf-8')
    
    prompts_dir = skill_dir / 'prompts'
    prompts_dir.mkdir(exist_ok=True)
    
    return skill_path


def migrate_agent(agent_path: Path, target_dir: Path, target_category: str = "functional") -> Tuple[bool, str]:
    """迁移单个Agent"""
    try:
        skill = convert_agent_to_skill(agent_path, target_category)
        skill_path = save_skill(skill, target_dir)
        return True, str(skill_path)
    except Exception as e:
        return False, str(e)


def migrate_directory(source_dir: Path, target_dir: Path, target_category: str = "functional") -> Dict:
    """迁移整个目录"""
    results = {
        'success': [],
        'failed': [],
        'total': 0
    }
    
    for agent_file in source_dir.glob('*.md'):
        if agent_file.name.startswith('TEMPLATE') or agent_file.name.startswith('README'):
            continue
        
        results['total'] += 1
        success, message = migrate_agent(agent_file, target_dir, target_category)
        
        if success:
            results['success'].append({
                'agent': str(agent_file),
                'skill': message
            })
        else:
            results['failed'].append({
                'agent': str(agent_file),
                'error': message
            })
    
    return results


def main():
    import argparse
    
    parser = argparse.ArgumentParser(description='Migrate Agent files to Skill format')
    parser.add_argument('--source', type=str, required=True, help='Source directory')
    parser.add_argument('--target', type=str, required=True, help='Target directory')
    parser.add_argument('--category', type=str, default='functional', help='Target category')
    parser.add_argument('--single', type=str, help='Migrate single file')
    
    args = parser.parse_args()
    
    source_dir = Path(args.source)
    target_dir = Path(args.target)
    
    if args.single:
        agent_path = source_dir / args.single
        if agent_path.exists():
            success, message = migrate_agent(agent_path, target_dir, args.category)
            if success:
                print(f"✅ Migrated: {message}")
            else:
                print(f"❌ Failed: {message}")
        else:
            print(f"❌ File not found: {agent_path}")
    else:
        results = migrate_directory(source_dir, target_dir, args.category)
        print(f"\n📊 Migration Results:")
        print(f"   Total: {results['total']}")
        print(f"   Success: {len(results['success'])}")
        print(f"   Failed: {len(results['failed'])}")
        
        if results['failed']:
            print("\n❌ Failed migrations:")
            for f in results['failed']:
                print(f"   - {f['agent']}: {f['error']}")


if __name__ == '__main__':
    main()
