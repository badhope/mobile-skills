"""
Mobile-Skills MCP Protocol Implementation
Model Context Protocol (MCP) 协议实现

参考: https://modelcontextprotocol.io
"""

from dataclasses import dataclass, field
from typing import Dict, List, Optional, Any
from enum import Enum
import json


class MCPMessageType(Enum):
    REQUEST = "request"
    RESPONSE = "response"
    NOTIFICATION = "notification"


@dataclass
class MCPToolDefinition:
    """MCP工具定义"""
    name: str
    description: str
    input_schema: Dict
    output_schema: Optional[Dict] = None


@dataclass
class MCPToolResult:
    """MCP工具执行结果"""
    content: List[Dict]
    is_error: bool = False


@dataclass
class MCPResource:
    """MCP资源定义"""
    uri: str
    name: str
    description: str
    mime_type: str = "text/markdown"


class MCPProtocol:
    """
    Model Context Protocol (MCP) 实现
    
    MCP是一个标准协议，用于AI模型与外部工具/资源的交互。
    本实现将Skill封装为MCP工具，支持跨平台集成。
    """
    
    PROTOCOL_VERSION = "2024-11-05"
    
    def __init__(self):
        self.tools: Dict[str, MCPToolDefinition] = {}
        self.resources: Dict[str, MCPResource] = {}
        self._skill_handlers: Dict[str, callable] = {}
    
    def register_tool(self, tool: MCPToolDefinition, handler: callable = None):
        """注册MCP工具"""
        self.tools[tool.name] = tool
        if handler:
            self._skill_handlers[tool.name] = handler
    
    def register_skill_as_tool(self, skill_id: str, skill_metadata: Dict):
        """将技能注册为MCP工具"""
        tool = MCPToolDefinition(
            name=f"skill_{skill_id.replace('-', '_')}",
            description=skill_metadata.get('description', ''),
            input_schema={
                "type": "object",
                "properties": {
                    "request": {
                        "type": "string",
                        "description": "用户请求内容"
                    }
                },
                "required": ["request"]
            },
            output_schema={
                "type": "object",
                "properties": {
                    "output": {
                        "type": "string",
                        "description": "技能执行输出"
                    },
                    "success": {
                        "type": "boolean",
                        "description": "执行是否成功"
                    }
                }
            }
        )
        self.register_tool(tool)
    
    def register_resource(self, resource: MCPResource):
        """注册MCP资源"""
        self.resources[resource.uri] = resource
    
    def register_skill_as_resource(self, skill_id: str, skill_metadata: Dict):
        """将技能注册为MCP资源"""
        resource = MCPResource(
            uri=f"skill://{skill_id}",
            name=skill_metadata.get('name', skill_id),
            description=skill_metadata.get('description', ''),
            mime_type="text/markdown"
        )
        self.register_resource(resource)
    
    def list_tools(self) -> List[Dict]:
        """列出所有可用工具 (MCP tools/list)"""
        return [
            {
                "name": tool.name,
                "description": tool.description,
                "inputSchema": tool.input_schema
            }
            for tool in self.tools.values()
        ]
    
    def list_resources(self) -> List[Dict]:
        """列出所有可用资源 (MCP resources/list)"""
        return [
            {
                "uri": resource.uri,
                "name": resource.name,
                "description": resource.description,
                "mimeType": resource.mime_type
            }
            for resource in self.resources.values()
        ]
    
    def call_tool(self, tool_name: str, arguments: Dict) -> MCPToolResult:
        """调用工具 (MCP tools/call)"""
        if tool_name not in self.tools:
            return MCPToolResult(
                content=[{"type": "text", "text": f"Tool not found: {tool_name}"}],
                is_error=True
            )
        
        handler = self._skill_handlers.get(tool_name)
        if handler:
            try:
                result = handler(arguments)
                return MCPToolResult(
                    content=[{"type": "text", "text": result}]
                )
            except Exception as e:
                return MCPToolResult(
                    content=[{"type": "text", "text": str(e)}],
                    is_error=True
                )
        
        return MCPToolResult(
            content=[{"type": "text", "text": f"Tool {tool_name} called with {arguments}"}]
        )
    
    def read_resource(self, uri: str) -> Dict:
        """读取资源 (MCP resources/read)"""
        if uri not in self.resources:
            return {"error": f"Resource not found: {uri}"}
        
        resource = self.resources[uri]
        return {
            "contents": [
                {
                    "uri": uri,
                    "mimeType": resource.mime_type,
                    "text": f"Resource: {resource.name}\n{resource.description}"
                }
            ]
        }
    
    def get_capabilities(self) -> Dict:
        """获取服务器能力 (MCP initialize)"""
        return {
            "protocolVersion": self.PROTOCOL_VERSION,
            "capabilities": {
                "tools": {"listChanged": True},
                "resources": {"subscribe": False, "listChanged": True}
            },
            "serverInfo": {
                "name": "mobile-skills-mcp",
                "version": "2.0.0"
            }
        }


if __name__ == "__main__":
    mcp = MCPProtocol()
    
    mcp.register_skill_as_tool("smart-planner", {
        "name": "TaskMaster",
        "description": "任务管理与拆解专家"
    })
    
    print("MCP Tools:", mcp.list_tools())
    print("MCP Capabilities:", mcp.get_capabilities())
