"""
Mobile-Skills Protocol Layer
协议层 - 支持MCP/ACP/Mobile协议

实现标准协议接口，支持跨平台技能调用
"""

from .mcp_protocol import MCPProtocol, MCPToolDefinition, MCPToolResult, MCPResource
from .acp_protocol import ACPProtocol, ACPAgentDefinition, ACPMessage, ACPTask
from .mobile_protocol import MobileProtocol, MobileActivationConfig, MobileSkillInfo, ActivationMode

from dataclasses import dataclass, field
from typing import Dict, List, Optional, Any, Union
from enum import Enum


class ProtocolType(Enum):
    MCP = "mcp"
    ACP = "acp"
    MOBILE = "mobile"


@dataclass
class ProtocolMessage:
    """协议消息基类"""
    protocol: ProtocolType
    version: str = "1.0"
    id: str = ""
    payload: Dict = field(default_factory=dict)
    metadata: Dict = field(default_factory=dict)


class ProtocolManager:
    """协议管理器 - 统一管理所有协议"""
    
    def __init__(self):
        self.mcp = MCPProtocol()
        self.acp = ACPProtocol()
        self.mobile = MobileProtocol()
    
    def register_skill(self, skill_id: str, metadata: Dict):
        """向所有协议注册技能"""
        self.mcp.register_skill_as_tool(skill_id, metadata)
        self.mcp.register_skill_as_resource(skill_id, metadata)
        self.acp.register_skill_as_agent(skill_id, metadata)
        self.mobile.register_skill_from_metadata(skill_id, metadata)
    
    def get_protocol(self, protocol_type: ProtocolType) -> Union[MCPProtocol, ACPProtocol, MobileProtocol]:
        """获取指定协议"""
        protocols = {
            ProtocolType.MCP: self.mcp,
            ProtocolType.ACP: self.acp,
            ProtocolType.MOBILE: self.mobile
        }
        return protocols.get(protocol_type)
    
    def quick_activate(self, skill_id: str, user_request: str) -> str:
        """快速激活技能"""
        return self.mobile.quick_activate(skill_id, user_request)
    
    def list_all_tools(self) -> List[Dict]:
        """列出所有MCP工具"""
        return self.mcp.list_tools()
    
    def list_all_agents(self) -> List[Dict]:
        """列出所有ACP Agent"""
        return self.acp.list_agents()
    
    def list_all_skills(self) -> List[Dict]:
        """列出所有移动端技能"""
        return [info.__dict__ for info in self.mobile.list_skills()]


def create_protocol_manager() -> ProtocolManager:
    """创建协议管理器"""
    return ProtocolManager()


__all__ = [
    'ProtocolType',
    'ProtocolMessage',
    'ProtocolManager',
    'create_protocol_manager',
    'MCPProtocol',
    'MCPToolDefinition',
    'MCPToolResult',
    'MCPResource',
    'ACPProtocol',
    'ACPAgentDefinition',
    'ACPMessage',
    'ACPTask',
    'MobileProtocol',
    'MobileActivationConfig',
    'MobileSkillInfo',
    'ActivationMode',
]


if __name__ == "__main__":
    manager = create_protocol_manager()
    
    skill_metadata = {
        "name": "TaskMaster",
        "description": "任务管理专家",
        "category": "functional",
        "keywords": ["任务", "计划", "GTD"],
        "best_for": ["任务管理", "计划制定"],
        "activation": {
            "prompt_template": "请读取：{RAW_URL}\n\n需求：{USER_REQUEST}",
            "min_context": 2000,
            "mobile_optimized": True
        }
    }
    
    manager.register_skill("smart-planner", skill_metadata)
    
    print("MCP Tools:", manager.list_all_tools())
    print("ACP Agents:", manager.list_all_agents())
    print("Mobile Skills:", len(manager.list_all_skills()))
    print("Quick Activate:", manager.quick_activate("smart-planner", "帮我制定计划"))
