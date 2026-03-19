# 完整交互示例

本文档展示如何使用 AI Agent Navigation System 完成一次完整的端到端对话流程。

---

## 场景设定

**用户**：小明，手机端用户
**目标**：设计一个新的「个人笔记 App」的后端架构

---

## 交互流程

### Step 1：用户发送 README Raw 链接

**用户操作**：
1. 在 GitHub 打开本仓库
2. 点击 README.md 文件
3. 点击 Raw 按钮
4. 复制链接

**用户发送**：
```
请读取这个文件：
https://raw.githubusercontent.com/USERNAME/REPO/BRANCH/README.md
```

---

### Step 2：AI 读取并展示角色菜单

**AI 回复**：
```
已读取 README.md。这是一个 AI Agent Navigation System，基于 Raw 链接的角色切换导航系统。

## 角色菜单

| 角色 | 类型 | Raw 链接 |
|:---:|:---:|---------|
| Coder | 系统架构师、仓库设计师 | https://raw.githubusercontent.com/USERNAME/REPO/BRANCH/coder.md |

## 如何使用

1. 复制角色 Raw 链接发送给我
2. 我将激活对应角色模式

请选择一个角色并发送其 Raw 链接。
```

---

### Step 3：用户选择 Coder 角色

**用户发送**：
```
我想用 Coder，请读取：
https://raw.githubusercontent.com/USERNAME/REPO/BRANCH/coder.md
```

---

### Step 4：AI 进入 Coder 角色模式

**AI 回复**：
```
✅ 已激活 Coder 角色模式

我是系统架构师 & 仓库设计师，擅长：
- 需求分析与问题建模
- 系统架构设计与技术选型
- 仓库结构与模块边界划分
- 架构到具体实现的转化路径规划

我将遵循「设计先于代码」的原则帮助您。

---

请告诉我您想要构建的系统或项目，我会先帮助您进行完整的设计规划。
```

---

### Step 5：用户提出设计任务

**用户发送**：
```
我想做一个「个人笔记 App」，主要功能包括：
- 笔记的创建、编辑、删除
- 笔记分类（标签 + 文件夹）
- 搜索功能
- 支持 Markdown

预计用户量 10 万，希望未来能支持多端同步。
请帮我设计一下后端架构。
```

---

### Step 6：Coder 角色响应

**AI 回复**：

```
## 需求理解

您需要一个支持 10 万用户的个人笔记应用，具备 Markdown 支持、分类体系和搜索功能，并预留多端同步扩展能力。

---

## 问题拆解

| 维度 | 分析 |
|:---:|------|
| 功能 | 笔记 CRUD、标签管理、文件夹管理、全文搜索 |
| 数据 | 笔记内容（Markdown）、用户数据、分类关系 |
| 交互 | 移动端优先、Web 端、未来多端 |
| 性能 | 10 万用户、搜索响应需 < 200ms |

---

## 架构设计

### 系统架构图

```
┌─────────────────────────────────────────────────────────┐
│                      Client Layer                        │
│    ┌─────────┐  ┌─────────┐  ┌─────────┐               │
│    │   iOS   │  │ Android │  │   Web   │               │
│    └────┬────┘  └────┬────┘  └────┬────┘               │
└─────────┼─────────────┼─────────────┼────────────────────┘
          │             │             │
          └─────────────┼─────────────┘
                        │ HTTPS
                        ▼
┌─────────────────────────────────────────────────────────┐
│                      API Gateway                         │
│                   (Kong / Nginx)                         │
└─────────────────────────┬───────────────────────────────┘
                          │
          ┌───────────────┼───────────────┐
          ▼               ▼               ▼
    ┌───────────┐  ┌───────────┐  ┌───────────┐
    │   Auth    │  │   Note    │  │  Search   │
    │  Service  │  │  Service  │  │  Service  │
    └─────┬─────┘  └─────┬─────┘  └─────┬─────┘
          │               │               │
          └───────────────┼───────────────┘
                          │
                          ▼
                  ┌───────────────┐
                  │     MySQL     │
                  │   (Primary)    │
                  └───────────────┘
                          │
                          ▼
                  ┌───────────────┐
                  │   Redis       │
                  │  (Cache)       │
                  └───────────────┘
```

### 模块划分

| 模块 | 职责 | 技术选型 |
|:---:|------|---------|
| API Gateway | 路由、鉴权、限流 | Kong / Nginx |
| Auth Service | 用户认证、JWT 发行 | Node.js / Go |
| Note Service | 笔记 CRUD、版本管理 | Python / Go |
| Search Service | 全文索引、搜索 | Elasticsearch |
| File Storage | Markdown 文件存储 | MinIO / S3 |

---

## 技术选型

| 组件 | 选择 | 理由 |
|:---:|:---:|------|
| API Gateway | Kong | 插件丰富，支持 JWT 认证 |
| 主数据库 | MySQL 8.0 | 事务支持好，生态成熟 |
| 缓存 | Redis 7.0 | 支持多种数据结构 |
| 搜索 | Elasticsearch | 全文搜索能力强 |
| 文件存储 | MinIO | S3 兼容，私有化部署 |

---

## 数据模型设计

### 核心表结构

```sql
-- 用户表
CREATE TABLE users (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- 笔记表
CREATE TABLE notes (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    user_id BIGINT NOT NULL,
    title VARCHAR(500) NOT NULL,
    content LONGTEXT,
    folder_id BIGINT,
    is_deleted BOOLEAN DEFAULT FALSE,
    version INT DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (folder_id) REFERENCES folders(id)
);

-- 文件夹表
CREATE TABLE folders (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    user_id BIGINT NOT NULL,
    parent_id BIGINT,
    name VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (parent_id) REFERENCES folders(id)
);

-- 标签表
CREATE TABLE tags (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    user_id BIGINT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id),
    UNIQUE KEY unique_tag (name, user_id)
);

-- 笔记-标签关联表
CREATE TABLE note_tags (
    note_id BIGINT NOT NULL,
    tag_id BIGINT NOT NULL,
    PRIMARY KEY (note_id, tag_id),
    FOREIGN KEY (note_id) REFERENCES notes(id),
    FOREIGN KEY (tag_id) REFERENCES tags(id)
);
```

---

## 实施计划

### Phase 1：基础架构搭建
- [ ] 搭建 API Gateway
- [ ] 部署 MySQL + Redis
- [ ] 实现用户认证模块

### Phase 2：核心功能开发
- [ ] 实现笔记 CRUD API
- [ ] 实现文件夹管理
- [ ] 实现标签系统

### Phase 3：高级功能
- [ ] 集成 Elasticsearch
- [ ] 实现全文搜索
- [ ] 添加版本管理

### Phase 4：多端同步（预留）
- [ ] 设计同步协议
- [ ] 实现冲突解决策略

---

## 后续行动

1. **确认方案**：请确认以上架构设计是否符合您的预期
2. **调整范围**：如需增减功能，告诉我
3. **进入实现**：确认后我可以开始生成 Phase 1 的代码框架

是否需要我调整任何部分，或者开始具体实现？
```

---

## 流程总结

```
┌──────────┐    ┌─────────┐    ┌──────────┐    ┌─────────┐    ┌──────────┐
│  用户    │ -> │ README  │ -> │  角色    │ -> │  发送    │ -> │  完整    │
│  发送    │    │  菜单   │    │  选择    │    │  Prompt │    │  对话    │
│  README  │    │         │    │          │    │  激活    │    │          │
└──────────┘    └─────────┘    └──────────┘    └─────────┘    └──────────┘
  Raw 链接                    Coder      Raw 链接        角色切换
```

---

## 手机端操作提示

| 步骤 | 手机操作 |
|:---:|---------|
| 1 | 打开 GitHub 仓库网页 |
| 2 | 点击 README.md → Raw → 复制链接 |
| 3 | 粘贴到 AI 对话框并发送 |
| 4 | 收到角色菜单后，点击 coder.md → Raw → 复制 |
| 5 | 粘贴到 AI 对话框并发送 |
| 6 | 开始对话 |

---

**Last updated:** 2026-03-19
