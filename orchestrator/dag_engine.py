"""
Mobile-Skills DAG Workflow Engine
DAG工作流引擎

支持复杂技能编排和依赖管理
"""

from dataclasses import dataclass, field
from typing import Dict, List, Optional, Set, Callable, Any
from enum import Enum
from collections import defaultdict, deque
import json


class NodeStatus(Enum):
    PENDING = "pending"
    RUNNING = "running"
    COMPLETED = "completed"
    FAILED = "failed"
    SKIPPED = "skipped"


@dataclass
class WorkflowNode:
    """工作流节点"""
    id: str
    skill_id: str
    name: str = ""
    description: str = ""
    dependencies: List[str] = field(default_factory=list)
    parameters: Dict = field(default_factory=dict)
    status: NodeStatus = NodeStatus.PENDING
    result: Optional[Any] = None
    error: Optional[str] = None


@dataclass
class WorkflowEdge:
    """工作流边"""
    source: str
    target: str
    condition: Optional[Callable] = None


@dataclass
class WorkflowDefinition:
    """工作流定义"""
    id: str
    name: str
    description: str = ""
    nodes: Dict[str, WorkflowNode] = field(default_factory=dict)
    edges: List[WorkflowEdge] = field(default_factory=list)
    variables: Dict = field(default_factory=dict)
    metadata: Dict = field(default_factory=dict)


@dataclass
class WorkflowExecution:
    """工作流执行状态"""
    workflow_id: str
    execution_id: str
    status: str = "running"
    completed_nodes: Set[str] = field(default_factory=set)
    failed_nodes: Set[str] = field(default_factory=set)
    results: Dict[str, Any] = field(default_factory=dict)
    errors: Dict[str, str] = field(default_factory=dict)


class DAGValidator:
    """DAG验证器"""
    
    @staticmethod
    def validate(workflow: WorkflowDefinition) -> tuple[bool, List[str]]:
        """验证DAG有效性"""
        errors = []
        
        for node_id, node in workflow.nodes.items():
            for dep_id in node.dependencies:
                if dep_id not in workflow.nodes:
                    errors.append(f"Node {node_id} depends on non-existent node {dep_id}")
        
        visited = set()
        rec_stack = set()
        
        def has_cycle(node_id: str) -> bool:
            visited.add(node_id)
            rec_stack.add(node_id)
            
            node = workflow.nodes.get(node_id)
            if node:
                for dep_id in node.dependencies:
                    if dep_id not in visited:
                        if has_cycle(dep_id):
                            return True
                    elif dep_id in rec_stack:
                        return True
            
            rec_stack.remove(node_id)
            return False
        
        for node_id in workflow.nodes:
            if node_id not in visited:
                if has_cycle(node_id):
                    errors.append("Workflow contains a cycle")
                    break
        
        return len(errors) == 0, errors


class DAGExecutor:
    """DAG执行器"""
    
    def __init__(self, skill_executor: Callable):
        self.skill_executor = skill_executor
        self.validator = DAGValidator()
    
    def get_ready_nodes(self, workflow: WorkflowDefinition, execution: WorkflowExecution) -> List[str]:
        """获取可执行的节点"""
        ready = []
        
        for node_id, node in workflow.nodes.items():
            if node.status != NodeStatus.PENDING:
                continue
            
            all_deps_completed = all(
                workflow.nodes[dep_id].status == NodeStatus.COMPLETED
                for dep_id in node.dependencies
            )
            
            any_dep_failed = any(
                workflow.nodes[dep_id].status == NodeStatus.FAILED
                for dep_id in node.dependencies
            )
            
            if any_dep_failed:
                node.status = NodeStatus.SKIPPED
                continue
            
            if all_deps_completed or not node.dependencies:
                ready.append(node_id)
        
        return ready
    
    def execute_node(self, workflow: WorkflowDefinition, node_id: str, context: Dict) -> Any:
        """执行单个节点"""
        node = workflow.nodes[node_id]
        node.status = NodeStatus.RUNNING
        
        try:
            input_data = {
                **workflow.variables,
                **node.parameters
            }
            
            for dep_id in node.dependencies:
                if dep_id in workflow.nodes:
                    dep_result = workflow.nodes[dep_id].result
                    if dep_result:
                        input_data[f"_{dep_id}_output"] = dep_result
            
            result = self.skill_executor(node.skill_id, input_data, context)
            
            node.result = result
            node.status = NodeStatus.COMPLETED
            return result
            
        except Exception as e:
            node.status = NodeStatus.FAILED
            node.error = str(e)
            raise
    
    def execute(self, workflow: WorkflowDefinition, context: Dict) -> WorkflowExecution:
        """执行整个工作流"""
        is_valid, errors = self.validator.validate(workflow)
        
        if not is_valid:
            execution = WorkflowExecution(
                workflow_id=workflow.id,
                execution_id=f"exec_{workflow.id}"
            )
            execution.status = "failed"
            for error in errors:
                execution.errors["validation"] = error
            return execution
        
        execution = WorkflowExecution(
            workflow_id=workflow.id,
            execution_id=f"exec_{workflow.id}"
        )
        
        while True:
            ready_nodes = self.get_ready_nodes(workflow, execution)
            
            if not ready_nodes:
                break
            
            for node_id in ready_nodes:
                try:
                    self.execute_node(workflow, node_id, context)
                    execution.completed_nodes.add(node_id)
                    execution.results[node_id] = workflow.nodes[node_id].result
                except Exception as e:
                    execution.failed_nodes.add(node_id)
                    execution.errors[node_id] = str(e)
        
        if execution.failed_nodes:
            execution.status = "partial"
        else:
            execution.status = "completed"
        
        return execution


class WorkflowBuilder:
    """工作流构建器"""
    
    def __init__(self, workflow_id: str, name: str):
        self.workflow = WorkflowDefinition(
            id=workflow_id,
            name=name
        )
    
    def add_node(self, node_id: str, skill_id: str, 
                 dependencies: Optional[List[str]] = None,
                 parameters: Optional[Dict] = None,
                 name: str = "",
                 description: str = "") -> 'WorkflowBuilder':
        """添加节点"""
        self.workflow.nodes[node_id] = WorkflowNode(
            id=node_id,
            skill_id=skill_id,
            name=name or node_id,
            description=description,
            dependencies=dependencies or [],
            parameters=parameters or {}
        )
        return self
    
    def add_edge(self, source: str, target: str, 
                 condition: Optional[Callable] = None) -> 'WorkflowBuilder':
        """添加边"""
        self.workflow.edges.append(WorkflowEdge(
            source=source,
            target=target,
            condition=condition
        ))
        
        if target in self.workflow.nodes:
            if source not in self.workflow.nodes[target].dependencies:
                self.workflow.nodes[target].dependencies.append(source)
        
        return self
    
    def set_variable(self, key: str, value: Any) -> 'WorkflowBuilder':
        """设置变量"""
        self.workflow.variables[key] = value
        return self
    
    def set_metadata(self, key: str, value: Any) -> 'WorkflowBuilder':
        """设置元数据"""
        self.workflow.metadata[key] = value
        return self
    
    def build(self) -> WorkflowDefinition:
        """构建工作流"""
        return self.workflow


class WorkflowRegistry:
    """工作流注册表"""
    
    def __init__(self):
        self.workflows: Dict[str, WorkflowDefinition] = {}
    
    def register(self, workflow: WorkflowDefinition):
        """注册工作流"""
        self.workflows[workflow.id] = workflow
    
    def get(self, workflow_id: str) -> Optional[WorkflowDefinition]:
        """获取工作流"""
        return self.workflows.get(workflow_id)
    
    def list(self) -> List[Dict]:
        """列出所有工作流"""
        return [
            {
                "id": wf.id,
                "name": wf.name,
                "description": wf.description,
                "nodes": len(wf.nodes),
                "metadata": wf.metadata
            }
            for wf in self.workflows.values()
        ]


def create_sample_workflow() -> WorkflowDefinition:
    """创建示例工作流"""
    builder = WorkflowBuilder("content-creation", "内容创作工作流")
    
    builder.add_node(
        "research", "data-analyst",
        name="主题研究",
        description="研究主题相关信息"
    )
    
    builder.add_node(
        "outline", "smart-planner",
        dependencies=["research"],
        name="大纲规划",
        description="基于研究结果规划内容大纲"
    )
    
    builder.add_node(
        "writing", "writer",
        dependencies=["outline"],
        name="内容撰写",
        description="根据大纲撰写内容"
    )
    
    builder.add_node(
        "review", "translator",
        dependencies=["writing"],
        name="润色审核",
        description="润色和审核内容"
    )
    
    builder.set_metadata("category", "creative")
    builder.set_metadata("estimated_time", "10min")
    
    return builder.build()


if __name__ == "__main__":
    workflow = create_sample_workflow()
    
    print("Workflow:", workflow.name)
    print("Nodes:", list(workflow.nodes.keys()))
    
    validator = DAGValidator()
    is_valid, errors = validator.validate(workflow)
    print("Valid:", is_valid, errors if errors else "")
