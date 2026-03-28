"""
Mobile-Skills ACP Protocol Implementation
Agent Communication Protocol (ACP) 协议实现

用于Agent间通信和协作的标准协议
"""

from dataclasses import dataclass, field
from typing import Dict, List, Optional, Any, Union
from enum import Enum
import json
import uuid
from datetime import datetime


class ACPMessageType(Enum):
    REQUEST = "request"
    RESPONSE = "response"
    NOTIFICATION = "notification"
    DELEGATION = "delegation"


class ACPAgentRole(Enum):
    COORDINATOR = "coordinator"
    WORKER = "worker"
    SUPERVISOR = "supervisor"


@dataclass
class ACPAgentDefinition:
    """ACP Agent定义"""
    agent_id: str
    name: str
    description: str
    capabilities: List[str]
    role: ACPAgentRole = ACPAgentRole.WORKER
    endpoint: Optional[str] = None


@dataclass
class ACPMessage:
    """ACP消息"""
    message_type: ACPMessageType
    sender_id: str
    receiver_id: str
    content: Dict
    conversation_id: str = ""
    message_id: str = ""
    timestamp: str = ""
    metadata: Dict = field(default_factory=dict)
    
    def __post_init__(self):
        if not self.message_id:
            self.message_id = str(uuid.uuid4())
        if not self.timestamp:
            self.timestamp = datetime.now().isoformat()
        if not self.conversation_id:
            self.conversation_id = str(uuid.uuid4())


@dataclass
class ACPTask:
    """ACP任务"""
    task_id: str
    description: str
    assigned_agent: str
    status: str = "pending"
    priority: int = 1
    dependencies: List[str] = field(default_factory=list)
    result: Optional[Dict] = None


class ACPProtocol:
    """
    Agent Communication Protocol (ACP) 实现
    
    ACP用于Agent间的通信、协作和任务委派。
    支持请求-响应模式、通知模式和任务委派模式。
    """
    
    PROTOCOL_VERSION = "1.0"
    
    def __init__(self, agent_id: str = "coordinator"):
        self.agent_id = agent_id
        self.agents: Dict[str, ACPAgentDefinition] = {}
        self.conversations: Dict[str, List[ACPMessage]] = {}
        self.tasks: Dict[str, ACPTask] = {}
        self._message_handlers: Dict[ACPMessageType, callable] = {}
    
    def register_agent(self, agent: ACPAgentDefinition):
        """注册Agent"""
        self.agents[agent.agent_id] = agent
    
    def register_skill_as_agent(self, skill_id: str, skill_metadata: Dict):
        """将技能注册为ACP Agent"""
        agent = ACPAgentDefinition(
            agent_id=skill_id,
            name=skill_metadata.get('name', skill_id),
            description=skill_metadata.get('description', ''),
            capabilities=skill_metadata.get('best_for', []),
            role=ACPAgentRole.WORKER
        )
        self.register_agent(agent)
    
    def list_agents(self) -> List[Dict]:
        """列出所有注册的Agent"""
        return [
            {
                "agent_id": agent.agent_id,
                "name": agent.name,
                "description": agent.description,
                "capabilities": agent.capabilities,
                "role": agent.role.value
            }
            for agent in self.agents.values()
        ]
    
    def send_message(self, message: ACPMessage) -> ACPMessage:
        """发送消息"""
        if message.conversation_id not in self.conversations:
            self.conversations[message.conversation_id] = []
        
        self.conversations[message.conversation_id].append(message)
        
        handler = self._message_handlers.get(message.message_type)
        if handler:
            return handler(message)
        
        return ACPMessage(
            message_type=ACPMessageType.RESPONSE,
            sender_id=self.agent_id,
            receiver_id=message.sender_id,
            content={"status": "received"},
            conversation_id=message.conversation_id
        )
    
    def delegate_task(self, task: ACPTask) -> Dict:
        """委派任务"""
        if task.assigned_agent not in self.agents:
            return {"error": f"Agent not found: {task.assigned_agent}"}
        
        task.status = "assigned"
        self.tasks[task.task_id] = task
        
        message = ACPMessage(
            message_type=ACPMessageType.DELEGATION,
            sender_id=self.agent_id,
            receiver_id=task.assigned_agent,
            content={
                "task_id": task.task_id,
                "description": task.description,
                "priority": task.priority
            }
        )
        
        return {
            "task_id": task.task_id,
            "status": "delegated",
            "assigned_to": task.assigned_agent
        }
    
    def get_task_status(self, task_id: str) -> Dict:
        """获取任务状态"""
        if task_id not in self.tasks:
            return {"error": f"Task not found: {task_id}"}
        
        task = self.tasks[task_id]
        return {
            "task_id": task.task_id,
            "status": task.status,
            "assigned_agent": task.assigned_agent,
            "result": task.result
        }
    
    def complete_task(self, task_id: str, result: Dict):
        """完成任务"""
        if task_id in self.tasks:
            self.tasks[task_id].status = "completed"
            self.tasks[task_id].result = result
    
    def get_capabilities(self) -> Dict:
        """获取协议能力"""
        return {
            "protocolVersion": self.PROTOCOL_VERSION,
            "agentId": self.agent_id,
            "capabilities": {
                "messaging": True,
                "taskDelegation": True,
                "multiAgent": True
            }
        }


if __name__ == "__main__":
    acp = ACPProtocol(agent_id="orchestrator")
    
    acp.register_skill_as_agent("smart-planner", {
        "name": "TaskMaster",
        "description": "任务管理专家",
        "best_for": ["任务管理", "计划制定"]
    })
    
    print("ACP Agents:", acp.list_agents())
    print("ACP Capabilities:", acp.get_capabilities())
