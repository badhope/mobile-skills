"""
Mobile-Skills Registry
技能注册表

统一管理所有技能的注册、发现和版本控制
"""

from dataclasses import dataclass, field
from typing import Dict, List, Optional, Set
from datetime import datetime
import json
import re


@dataclass
class SkillVersion:
    """技能版本信息"""
    version: str
    created_at: str
    changes: List[str] = field(default_factory=list)
    deprecated: bool = False


@dataclass
class SkillDependency:
    """技能依赖"""
    skill_id: str
    version_constraint: str = "*"
    optional: bool = False


@dataclass
class SkillRecord:
    """技能记录"""
    id: str
    name: str
    category: str
    description: str
    version: str
    raw_url: str
    keywords: List[str] = field(default_factory=list)
    best_for: List[str] = field(default_factory=list)
    dependencies: List[SkillDependency] = field(default_factory=list)
    conflicts: List[str] = field(default_factory=list)
    versions: List[SkillVersion] = field(default_factory=list)
    metadata: Dict = field(default_factory=dict)
    created_at: str = ""
    updated_at: str = ""
    rating: float = 4.5
    usage_count: int = 0


class SkillRegistry:
    """技能注册表"""
    
    def __init__(self):
        self.skills: Dict[str, SkillRecord] = {}
        self.category_index: Dict[str, Set[str]] = {}
        self.keyword_index: Dict[str, Set[str]] = {}
        self.dependency_graph: Dict[str, Set[str]] = {}
    
    def register(self, skill: SkillRecord) -> bool:
        """注册技能"""
        if skill.id in self.skills:
            return self._update_skill(skill)
        
        self.skills[skill.id] = skill
        
        if skill.category not in self.category_index:
            self.category_index[skill.category] = set()
        self.category_index[skill.category].add(skill.id)
        
        for keyword in skill.keywords:
            keyword_lower = keyword.lower()
            if keyword_lower not in self.keyword_index:
                self.keyword_index[keyword_lower] = set()
            self.keyword_index[keyword_lower].add(skill.id)
        
        self._update_dependency_graph(skill)
        
        return True
    
    def _update_skill(self, skill: SkillRecord) -> bool:
        """更新技能"""
        existing = self.skills[skill.id]
        
        if skill.version != existing.version:
            version_record = SkillVersion(
                version=existing.version,
                created_at=existing.updated_at,
                changes=[]
            )
            existing.versions.append(version_record)
        
        existing.name = skill.name
        existing.description = skill.description
        existing.version = skill.version
        existing.raw_url = skill.raw_url
        existing.keywords = skill.keywords
        existing.best_for = skill.best_for
        existing.dependencies = skill.dependencies
        existing.conflicts = skill.conflicts
        existing.metadata = skill.metadata
        existing.updated_at = datetime.now().strftime("%Y-%m-%d")
        existing.rating = skill.rating
        
        return True
    
    def _update_dependency_graph(self, skill: SkillRecord):
        """更新依赖图"""
        self.dependency_graph[skill.id] = set()
        for dep in skill.dependencies:
            self.dependency_graph[skill.id].add(dep.skill_id)
    
    def unregister(self, skill_id: str) -> bool:
        """注销技能"""
        if skill_id not in self.skills:
            return False
        
        skill = self.skills[skill_id]
        
        if skill.category in self.category_index:
            self.category_index[skill.category].discard(skill_id)
        
        for keyword in skill.keywords:
            keyword_lower = keyword.lower()
            if keyword_lower in self.keyword_index:
                self.keyword_index[keyword_lower].discard(skill_id)
        
        del self.skills[skill_id]
        del self.dependency_graph[skill_id]
        
        return True
    
    def get(self, skill_id: str) -> Optional[SkillRecord]:
        """获取技能"""
        return self.skills.get(skill_id)
    
    def get_by_category(self, category: str) -> List[SkillRecord]:
        """按分类获取技能"""
        skill_ids = self.category_index.get(category, set())
        return [self.skills[sid] for sid in skill_ids if sid in self.skills]
    
    def search(self, query: str) -> List[SkillRecord]:
        """搜索技能"""
        query_lower = query.lower()
        results = set()
        
        for keyword, skill_ids in self.keyword_index.items():
            if query_lower in keyword or keyword in query_lower:
                results.update(skill_ids)
        
        for skill_id, skill in self.skills.items():
            if query_lower in skill.name.lower():
                results.add(skill_id)
            if query_lower in skill.description.lower():
                results.add(skill_id)
        
        return [self.skills[sid] for sid in results if sid in self.skills]
    
    def get_dependencies(self, skill_id: str) -> List[SkillRecord]:
        """获取技能依赖"""
        skill = self.get(skill_id)
        if not skill:
            return []
        
        deps = []
        for dep in skill.dependencies:
            dep_skill = self.get(dep.skill_id)
            if dep_skill:
                deps.append(dep_skill)
        
        return deps
    
    def get_dependents(self, skill_id: str) -> List[SkillRecord]:
        """获取依赖此技能的其他技能"""
        dependents = []
        for sid, deps in self.dependency_graph.items():
            if skill_id in deps:
                skill = self.get(sid)
                if skill:
                    dependents.append(skill)
        return dependents
    
    def check_conflicts(self, skill_id: str, active_skills: List[str]) -> List[str]:
        """检查技能冲突"""
        skill = self.get(skill_id)
        if not skill:
            return []
        
        conflicts = []
        for conflict_id in skill.conflicts:
            if conflict_id in active_skills:
                conflicts.append(conflict_id)
        
        return conflicts
    
    def resolve_dependencies(self, skill_ids: List[str]) -> List[str]:
        """解析依赖顺序"""
        resolved = []
        visited = set()
        temp_visited = set()
        
        def visit(skill_id: str):
            if skill_id in temp_visited:
                raise ValueError(f"Circular dependency detected: {skill_id}")
            if skill_id in visited:
                return
            
            temp_visited.add(skill_id)
            
            skill = self.get(skill_id)
            if skill:
                for dep in skill.dependencies:
                    visit(dep.skill_id)
            
            temp_visited.remove(skill_id)
            visited.add(skill_id)
            resolved.append(skill_id)
        
        for skill_id in skill_ids:
            visit(skill_id)
        
        return resolved
    
    def get_stats(self) -> Dict:
        """获取统计信息"""
        categories = {}
        for category, skill_ids in self.category_index.items():
            categories[category] = len(skill_ids)
        
        return {
            "total_skills": len(self.skills),
            "categories": categories,
            "total_keywords": len(self.keyword_index),
            "avg_rating": sum(s.rating for s in self.skills.values()) / len(self.skills) if self.skills else 0
        }
    
    def export(self) -> Dict:
        """导出注册表"""
        return {
            "skills": {
                sid: {
                    "id": s.id,
                    "name": s.name,
                    "category": s.category,
                    "description": s.description,
                    "version": s.version,
                    "raw_url": s.raw_url,
                    "keywords": s.keywords,
                    "best_for": s.best_for,
                    "rating": s.rating,
                    "updated_at": s.updated_at
                }
                for sid, s in self.skills.items()
            },
            "stats": self.get_stats()
        }
    
    def to_index_markdown(self) -> str:
        """生成索引Markdown"""
        lines = ["# Skills Index\n"]
        lines.append("> Mobile-Skills 技能索引\n")
        lines.append("---\n")
        
        for category in sorted(self.category_index.keys()):
            skills = self.get_by_category(category)
            if not skills:
                continue
            
            lines.append(f"## {category.title()}\n")
            lines.append("| ID | Name | Description | Rating |")
            lines.append("|:---|:-----|:------------|:------:|")
            
            for skill in sorted(skills, key=lambda s: s.name):
                lines.append(f"| {skill.id} | {skill.name} | {skill.description[:50]}... | {skill.rating} |")
            
            lines.append("")
        
        return "\n".join(lines)


def create_registry_from_skills(skills_dir: str) -> SkillRegistry:
    """从技能目录创建注册表"""
    import os
    from pathlib import Path
    
    registry = SkillRegistry()
    skills_path = Path(skills_dir)
    
    for skill_file in skills_path.rglob("SKILL.md"):
        try:
            content = skill_file.read_text(encoding='utf-8')
            
            match = re.search(r'```yaml\n(.*?)\n```', content, re.DOTALL)
            if match:
                import yaml
                metadata = yaml.safe_load(match.group(1))
                
                relative_path = skill_file.relative_to(skills_path)
                parts = relative_path.parts
                
                if len(parts) >= 2:
                    category = parts[0]
                    skill_id = parts[1]
                else:
                    category = "functional"
                    skill_id = skill_file.parent.name
                
                skill = SkillRecord(
                    id=skill_id,
                    name=metadata.get('skill_name', skill_id),
                    category=metadata.get('skill_category', category),
                    description=metadata.get('description', ''),
                    version=metadata.get('skill_version', '2.0.0'),
                    raw_url=metadata.get('activation', {}).get('raw_url', ''),
                    keywords=metadata.get('keywords', []),
                    best_for=metadata.get('best_for', []),
                    rating=metadata.get('metadata', {}).get('rating', 4.5),
                    updated_at=metadata.get('metadata', {}).get('updated_at', '')
                )
                
                registry.register(skill)
        except Exception as e:
            print(f"Error loading {skill_file}: {e}")
    
    return registry


if __name__ == "__main__":
    registry = SkillRegistry()
    
    skill = SkillRecord(
        id="smart-planner",
        name="TaskMaster",
        category="functional",
        description="任务管理专家",
        version="2.0.0",
        raw_url="https://raw.githubusercontent.com/badhope/mobile-skills/main/skills/functional/smart-planner/SKILL.md",
        keywords=["任务", "计划", "GTD"],
        best_for=["任务管理", "计划制定"],
        rating=4.8
    )
    
    registry.register(skill)
    
    print("Stats:", registry.get_stats())
    print("Search '任务':", [s.name for s in registry.search("任务")])
