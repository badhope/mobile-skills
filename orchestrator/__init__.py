"""
Mobile-Skills Orchestrator Core
技能编排核心模块

基于混合架构设计，实现Commander/Coordinator/Skill三层编排
"""

from dataclasses import dataclass, field
from typing import Dict, List, Optional, Any, Callable
from enum import Enum
import json
import re
from datetime import datetime


class SkillCategory(Enum):
    FUNCTIONAL = "functional"
    PROFESSIONAL = "professional"
    CREATIVE = "creative"
    CHARACTER = "character"
    FICTION = "fiction"


class ExecutionMode(Enum):
    ATOMIC = "atomic"
    COMPOSITE = "composite"
    WORKFLOW = "workflow"


@dataclass
class SkillContext:
    """技能执行上下文"""
    user_request: str
    session_id: str = ""
    history: List[Dict] = field(default_factory=list)
    metadata: Dict = field(default_factory=dict)
    mobile_mode: bool = False


@dataclass
class SkillResult:
    """技能执行结果"""
    success: bool
    output: str
    skill_id: str
    execution_time: float = 0.0
    tokens_used: int = 0
    metadata: Dict = field(default_factory=dict)


@dataclass
class Task:
    """任务定义"""
    id: str
    description: str
    skill_id: Optional[str] = None
    dependencies: List[str] = field(default_factory=list)
    priority: int = 1
    status: str = "pending"


class Router:
    """路由器 - 识别用户意图并路由到合适的技能"""
    
    def __init__(self):
        self.skill_registry: Dict[str, Dict] = {}
        self.keyword_index: Dict[str, List[str]] = {}
    
    def register_skill(self, skill_id: str, metadata: Dict):
        """注册技能到路由器"""
        self.skill_registry[skill_id] = metadata
        
        for keyword in metadata.get('keywords', []):
            keyword = keyword.lower()
            if keyword not in self.keyword_index:
                self.keyword_index[keyword] = []
            self.keyword_index[keyword].append(skill_id)
    
    def route(self, user_request: str, context: SkillContext) -> List[str]:
        """路由用户请求到合适的技能"""
        candidates = {}
        request_lower = user_request.lower()
        
        for keyword, skill_ids in self.keyword_index.items():
            if keyword in request_lower:
                for skill_id in skill_ids:
                    candidates[skill_id] = candidates.get(skill_id, 0) + 1
        
        sorted_candidates = sorted(
            candidates.items(),
            key=lambda x: x[1],
            reverse=True
        )
        
        return [skill_id for skill_id, _ in sorted_candidates[:3]]


class Decomposer:
    """分解器 - 将复杂任务分解为子任务"""
    
    def __init__(self):
        self.decomposition_patterns = {
            'and': r'(.+?)\s+(?:和|以及|同时|并且)\s+(.+)',
            'then': r'(.+?)\s+(?:然后|接着|之后|再)\s+(.+)',
            'first_then': r'先(.+?)再(.+)',
        }
    
    def decompose(self, user_request: str) -> List[Task]:
        """分解任务"""
        tasks = []
        
        for pattern_name, pattern in self.decomposition_patterns.items():
            match = re.search(pattern, user_request)
            if match:
                for i, group in enumerate(match.groups()):
                    task = Task(
                        id=f"task_{i}",
                        description=group.strip(),
                        priority=i
                    )
                    if i > 0:
                        task.dependencies = [f"task_{i-1}"]
                    tasks.append(task)
                break
        
        if not tasks:
            tasks.append(Task(
                id="task_0",
                description=user_request
            ))
        
        return tasks


class Scheduler:
    """调度器 - 管理任务执行顺序"""
    
    def __init__(self):
        self.task_queue: List[Task] = []
        self.completed_tasks: Dict[str, SkillResult] = {}
    
    def schedule(self, tasks: List[Task]) -> List[Task]:
        """调度任务执行顺序"""
        sorted_tasks = sorted(tasks, key=lambda t: t.priority)
        
        ready_tasks = []
        for task in sorted_tasks:
            if all(dep in self.completed_tasks for dep in task.dependencies):
                ready_tasks.append(task)
        
        return ready_tasks
    
    def mark_completed(self, task_id: str, result: SkillResult):
        """标记任务完成"""
        self.completed_tasks[task_id] = result


class Aggregator:
    """聚合器 - 整合多个技能的执行结果"""
    
    def aggregate(self, results: List[SkillResult]) -> str:
        """聚合多个结果"""
        if len(results) == 1:
            return results[0].output
        
        sections = []
        for i, result in enumerate(results):
            sections.append(f"### 结果 {i+1}\n{result.output}")
        
        return "\n\n".join(sections)


class Commander:
    """指挥官 - 顶层编排控制器"""
    
    def __init__(self):
        self.router = Router()
        self.decomposer = Decomposer()
        self.scheduler = Scheduler()
        self.aggregator = Aggregator()
        self.coordinators: Dict[SkillCategory, 'Coordinator'] = {}
    
    def register_coordinator(self, category: SkillCategory, coordinator: 'Coordinator'):
        """注册协调器"""
        self.coordinators[category] = coordinator
    
    def execute(self, user_request: str, context: SkillContext) -> SkillResult:
        """执行用户请求"""
        start_time = datetime.now()
        
        skill_ids = self.router.route(user_request, context)
        
        if not skill_ids:
            return SkillResult(
                success=False,
                output="无法识别您的请求，请提供更多细节。",
                skill_id="unknown"
            )
        
        tasks = self.decomposer.decompose(user_request)
        
        results = []
        for task in tasks:
            task.skill_id = skill_ids[0] if skill_ids else None
            
            if task.skill_id:
                skill_metadata = self.router.skill_registry.get(task.skill_id, {})
                category = SkillCategory(skill_metadata.get('category', 'functional'))
                
                coordinator = self.coordinators.get(category)
                if coordinator:
                    result = coordinator.execute_skill(task.skill_id, task.description, context)
                    results.append(result)
                    self.scheduler.mark_completed(task.id, result)
        
        final_output = self.aggregator.aggregate(results) if results else "执行完成"
        
        execution_time = (datetime.now() - start_time).total_seconds()
        
        return SkillResult(
            success=True,
            output=final_output,
            skill_id=skill_ids[0] if skill_ids else "unknown",
            execution_time=execution_time,
            metadata={"tasks_completed": len(results)}
        )


class Coordinator:
    """协调器 - 领域技能协调"""
    
    def __init__(self, category: SkillCategory):
        self.category = category
        self.skills: Dict[str, Dict] = {}
    
    def register_skill(self, skill_id: str, skill_data: Dict):
        """注册技能"""
        self.skills[skill_id] = skill_data
    
    def execute_skill(self, skill_id: str, user_request: str, context: SkillContext) -> SkillResult:
        """执行技能"""
        skill = self.skills.get(skill_id)
        
        if not skill:
            return SkillResult(
                success=False,
                output=f"技能 {skill_id} 未找到",
                skill_id=skill_id
            )
        
        activation = skill.get('activation', {})
        prompt_template = activation.get('prompt_template', '')
        
        raw_url = activation.get('raw_url', '')
        prompt = prompt_template.format(
            RAW_URL=raw_url,
            USER_REQUEST=user_request
        )
        
        return SkillResult(
            success=True,
            output=prompt,
            skill_id=skill_id,
            metadata={"activation_prompt": prompt}
        )


class SkillOrchestrator:
    """技能编排器 - 主入口"""
    
    def __init__(self):
        self.commander = Commander()
        self._setup_coordinators()
    
    def _setup_coordinators(self):
        """设置协调器"""
        for category in SkillCategory:
            coordinator = Coordinator(category)
            self.commander.register_coordinator(category, coordinator)
    
    def register_skill(self, skill_id: str, metadata: Dict):
        """注册技能"""
        self.commander.router.register_skill(skill_id, metadata)
        
        category = SkillCategory(metadata.get('category', 'functional'))
        if category in self.commander.coordinators:
            self.commander.coordinators[category].register_skill(skill_id, metadata)
    
    def execute(self, user_request: str, context: Optional[SkillContext] = None) -> SkillResult:
        """执行用户请求"""
        if context is None:
            context = SkillContext(user_request=user_request)
        
        return self.commander.execute(user_request, context)


def create_orchestrator() -> SkillOrchestrator:
    """创建编排器实例"""
    return SkillOrchestrator()


if __name__ == "__main__":
    orchestrator = create_orchestrator()
    
    orchestrator.register_skill("smart-planner", {
        "keywords": ["任务", "计划", "管理", "GTD"],
        "category": "functional",
        "activation": {
            "raw_url": "https://raw.githubusercontent.com/badhope/mobile-skills/main/skills/functional/smart-planner/SKILL.md",
            "prompt_template": "请读取以下技能定义并激活：{RAW_URL}\n\n我需要：{USER_REQUEST}"
        }
    })
    
    result = orchestrator.execute("帮我制定一个学习计划")
    print(result.output)
