"""
Mobile-Skills Mobile Protocol Implementation
移动端优化协议

专为移动端AI服务场景设计的轻量级协议
"""

from dataclasses import dataclass, field
from typing import Dict, List, Optional, Any
from enum import Enum
import json
import re


class ActivationMode(Enum):
    RAW_URL = "raw_url"
    PROMPT_TEMPLATE = "prompt_template"
    MINIMAL = "minimal"


@dataclass
class MobileActivationConfig:
    """移动端激活配置"""
    skill_id: str
    raw_url: str
    prompt_template: str
    min_context: int = 2000
    activation_mode: ActivationMode = ActivationMode.RAW_URL


@dataclass
class MobileSkillInfo:
    """移动端技能信息（精简版）"""
    skill_id: str
    name: str
    description: str
    raw_url: str
    keywords: List[str]


class MobileProtocol:
    """
    Mobile Protocol 实现
    
    专为移动端AI服务优化：
    - 最小化Token消耗
    - Raw URL快速激活
    - 简化的提示模板
    - 离线缓存支持
    """
    
    PROTOCOL_VERSION = "1.0"
    RAW_URL_BASE = "https://raw.githubusercontent.com/badhope/mobile-skills/main/skills"
    
    def __init__(self):
        self.skills: Dict[str, MobileActivationConfig] = {}
        self.skill_info: Dict[str, MobileSkillInfo] = {}
        self._activation_cache: Dict[str, str] = {}
    
    def register_skill(self, skill_id: str, config: MobileActivationConfig):
        """注册技能"""
        self.skills[skill_id] = config
    
    def register_skill_from_metadata(self, skill_id: str, metadata: Dict):
        """从元数据注册技能"""
        category = metadata.get('category', 'functional')
        raw_url = f"{self.RAW_URL_BASE}/{category}/{skill_id}/SKILL.md"
        
        config = MobileActivationConfig(
            skill_id=skill_id,
            raw_url=raw_url,
            prompt_template=metadata.get('activation', {}).get('prompt_template', 
                f"请读取以下技能定义并激活：{raw_url}\n\n我需要：{{USER_REQUEST}}"),
            min_context=metadata.get('activation', {}).get('min_context', 2000),
            activation_mode=ActivationMode.RAW_URL
        )
        
        info = MobileSkillInfo(
            skill_id=skill_id,
            name=metadata.get('name', skill_id),
            description=metadata.get('description', ''),
            raw_url=raw_url,
            keywords=metadata.get('keywords', [])
        )
        
        self.skills[skill_id] = config
        self.skill_info[skill_id] = info
    
    def quick_activate(self, skill_id: str, user_request: str) -> str:
        """快速激活技能 - 返回完整激活提示"""
        if skill_id not in self.skills:
            return f"Skill not found: {skill_id}"
        
        config = self.skills[skill_id]
        
        template = config.prompt_template
        if "{RAW_URL}" in template:
            template = template.replace("{RAW_URL}", config.raw_url)
        if "{USER_REQUEST}" in template:
            template = template.replace("{USER_REQUEST}", user_request)
        
        return template
    
    def get_raw_url(self, skill_id: str) -> str:
        """获取Raw URL"""
        if skill_id in self.skills:
            return self.skills[skill_id].raw_url
        
        category = self._guess_category(skill_id)
        return f"{self.RAW_URL_BASE}/{category}/{skill_id}/SKILL.md"
    
    def _guess_category(self, skill_id: str) -> str:
        """猜测技能分类"""
        if any(kw in skill_id for kw in ['planner', 'analyst', 'programmer', 'translator', 'survival', 'sports']):
            return 'functional'
        elif any(kw in skill_id for kw in ['legal', 'medical', 'investment', 'psychologist']):
            return 'professional'
        elif any(kw in skill_id for kw in ['writer', 'music', 'composer']):
            return 'creative'
        elif any(kw in skill_id for kw in ['kaguya', 'gojo', 'goku', 'naruto', 'luffy']):
            return 'character'
        elif any(kw in skill_id for kw in ['fantasy', 'world', 'eastern']):
            return 'fiction'
        return 'functional'
    
    def search_skills(self, query: str) -> List[MobileSkillInfo]:
        """搜索技能"""
        results = []
        query_lower = query.lower()
        
        for info in self.skill_info.values():
            if query_lower in info.name.lower() or \
               query_lower in info.description.lower() or \
               any(query_lower in kw.lower() for kw in info.keywords):
                results.append(info)
        
        return results
    
    def list_skills(self, category: str = None) -> List[MobileSkillInfo]:
        """列出技能"""
        if category:
            return [
                info for skill_id, info in self.skill_info.items()
                if self._guess_category(skill_id) == category
            ]
        return list(self.skill_info.values())
    
    def get_activation_prompt(self, skill_id: str, mode: ActivationMode = None) -> str:
        """获取激活提示（最小化版本）"""
        if skill_id not in self.skills:
            return f"Skill not found: {skill_id}"
        
        config = self.skills[skill_id]
        mode = mode or config.activation_mode
        
        if mode == ActivationMode.MINIMAL:
            return f"读取并激活：{config.raw_url}"
        elif mode == ActivationMode.RAW_URL:
            return f"请读取以下技能定义并激活：\n{config.raw_url}"
        else:
            return config.prompt_template
    
    def get_minimal_context(self, skill_id: str) -> Dict:
        """获取最小上下文（用于移动端预加载）"""
        if skill_id not in self.skill_info:
            return {}
        
        info = self.skill_info[skill_id]
        return {
            "skill_id": info.skill_id,
            "name": info.name,
            "raw_url": info.raw_url,
            "keywords": info.keywords[:5]
        }
    
    def get_capabilities(self) -> Dict:
        """获取协议能力"""
        return {
            "protocolVersion": self.PROTOCOL_VERSION,
            "capabilities": {
                "quickActivation": True,
                "rawUrlMode": True,
                "minimalContext": True,
                "offlineCache": True
            },
            "registeredSkills": len(self.skills)
        }


if __name__ == "__main__":
    mobile = MobileProtocol()
    
    mobile.register_skill_from_metadata("smart-planner", {
        "name": "TaskMaster",
        "description": "任务管理专家",
        "category": "functional",
        "keywords": ["任务", "计划", "GTD"],
        "activation": {
            "min_context": 2000,
            "prompt_template": "请读取以下技能定义并激活：{RAW_URL}\n\n我需要：{USER_REQUEST}"
        }
    })
    
    print("Quick Activate:", mobile.quick_activate("smart-planner", "制定学习计划"))
    print("Raw URL:", mobile.get_raw_url("smart-planner"))
    print("Capabilities:", mobile.get_capabilities())
