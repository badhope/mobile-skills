# AI Skill Ecosystem - Core Architecture Design

**Document**: Architecture Design
**Version**: 2.0
**Date**: 2026-03-28
**Status**: Active

> **Note**: This document provides an overview of the architecture. For detailed Skill System design, see [SKILL-SYSTEM-ARCHITECTURE.md](./SKILL-SYSTEM-ARCHITECTURE.md).

---

## 1. Architecture Overview

### 1.1 Hybrid Architecture

The Mobile-Skills project uses a **Hybrid Architecture** combining Skills-First and Hierarchical patterns:

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    Mobile-Skills 2.0 Hybrid Architecture                     │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│   ┌─────────────────────────────────────────────────────────────────────┐   │
│   │                     🎯 Layer 1: Commander                           │   │
│   │  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌───────────┐  │   │
│   │  │   Router    │  │  Decomposer │  │  Scheduler  │  │ Aggregator│  │   │
│   │  └─────────────┘  └─────────────┘  └─────────────┘  └───────────┘  │   │
│   └─────────────────────────────────────────────────────────────────────┘   │
│                              ↓ Task Dispatch ↓                              │
│   ┌─────────────────────────────────────────────────────────────────────┐   │
│   │                     🔄 Layer 2: Orchestrator                         │   │
│   │  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐ │   │
│   │  │DAG Engine│ │ Registry │ │ Workflow │ │ Context  │ │ Monitor  │ │   │
│   │  └──────────┘ └──────────┘ └──────────┘ └──────────┘ └──────────┘ │   │
│   └─────────────────────────────────────────────────────────────────────┘   │
│                              ↓ Skill Coordination ↓                         │
│   ┌─────────────────────────────────────────────────────────────────────┐   │
│   │                     📋 Layer 3: Coordinator                          │   │
│   │  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐ │   │
│   │  │Function  │ │Profess   │ │Creative  │ │Character │ │Fiction   │ │   │
│   │  │Coord     │ │Coord     │ │Coord     │ │Coord     │ │Coord     │ │   │
│   │  └──────────┘ └──────────┘ └──────────┘ └──────────┘ └──────────┘ │   │
│   └─────────────────────────────────────────────────────────────────────┘   │
│                              ↓ Protocol Integration ↓                       │
│   ┌─────────────────────────────────────────────────────────────────────┐   │
│   │                     🔌 Layer 4: Protocol                             │   │
│   │  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐                 │   │
│   │  │    MCP      │  │    ACP      │  │   Mobile    │                 │   │
│   │  └─────────────┘  └─────────────┘  └─────────────┘                 │   │
│   └─────────────────────────────────────────────────────────────────────┘   │
│                              ↓ Skill Execution ↓                            │
│   ┌─────────────────────────────────────────────────────────────────────┐   │
│   │                     🎯 Layer 5: Skill Pool                           │   │
│   │  ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐       │   │
│   │  │Function │ │Profess  │ │Creative │ │Character│ │ Fiction │       │   │
│   │  │   6     │ │   4     │ │   2     │ │   2     │ │   1     │       │   │
│   │  └─────────┘ └─────────┘ └─────────┘ └─────────┘ └─────────┘       │   │
│   └─────────────────────────────────────────────────────────────────────┘   │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 1.2 Layer Responsibilities

| Layer | Name | Responsibility | Input | Output |
|:------|:-----|:---------------|:------|:-------|
| L1 | Commander | Task routing, decomposition, scheduling, aggregation | User request | Final response |
| L2 | Orchestrator | DAG workflow, skill registry, context management | Sub-tasks | Execution plan |
| L3 | Coordinator | Domain coordination, skill grouping | Skill calls | Intermediate results |
| L4 | Protocol | MCP/ACP/Mobile protocol integration | Protocol messages | Standard format |
| L5 | Skill Pool | Skill storage, retrieval, execution | Skill activation | Execution results |

---

## 2. Design Principles

### 2.1 Core Principles

| Principle | Description | Implementation |
|:----------|:------------|:----------------|
| **Modularity** | Each skill is independent and reusable | Self-contained SKILL.md files |
| **Extensibility** | System easily accommodates new skills | Category-based organization |
| **Portability** | Skills work across platforms | GitHub Raw-based activation |
| **Backward Compatibility** | Existing agents continue to work | Legacy agent directory preserved |
| **Mobile-First** | Optimized for mobile AI services | Minimal context, quick activation |

### 2.2 Design Philosophy

```
┌─────────────────────────────────────────────────────────────────────────┐
│                         DESIGN PHILOSOPHY                                │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│  "Everything is a Skill, Skills are Orchestratable"                     │
│                                                                         │
│  USER VIEW                    DEVELOPER VIEW                            │
│  ─────────                    ─────────────                            │
│  • One-click activation       • Modular architecture                    │
│  • Cross-platform access      • Protocol integration                    │
│  • Instant results            • DAG workflow engine                     │
│  • No technical knowledge     • Extensible skill pool                   │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## 3. Skill Categories

### 3.1 Category Definition

| Category ID | Directory | Purpose | Skill Count |
|:------------|:----------|:--------|:------------|
| functional | `skills/functional/` | Task execution tools | 6 |
| professional | `skills/professional/` | Domain experts | 4 |
| creative | `skills/creative/` | Content creation | 2 |
| character | `skills/character/` | Roleplay characters | 2 |
| fiction | `skills/fiction/` | Interactive worlds | 1 |

### 3.2 Skill File Structure

```
skills/
├── {skill-id}/
│   ├── SKILL.md              # Skill definition (required)
│   ├── README.md             # Human-readable docs (recommended)
│   └── prompts/              # Prompt templates (optional)
│       ├── system.md
│       └── user.md
```

---

## 4. Protocol Integration

### 4.1 Supported Protocols

| Protocol | Purpose | Use Case |
|:---------|:--------|:---------|
| **MCP** | Model Context Protocol | AI model tool integration |
| **ACP** | Agent Communication Protocol | Agent-to-agent communication |
| **Mobile** | Mobile-optimized protocol | Quick activation for mobile AI |

### 4.2 Protocol Layer Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    PROTOCOL LAYER                            │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│   ┌─────────────────────────────────────────────────────┐   │
│   │                  Protocol Manager                    │   │
│   │  ┌─────────┐  ┌─────────┐  ┌─────────────────────┐ │   │
│   │  │   MCP   │  │   ACP   │  │      Mobile         │ │   │
│   │  │Protocol │  │Protocol │  │     Protocol        │ │   │
│   │  └────┬────┘  └────┬────┘  └─────────┬───────────┘ │   │
│   │       │            │                 │              │   │
│   │       ▼            ▼                 ▼              │   │
│   │  ┌─────────────────────────────────────────────┐   │   │
│   │  │            Unified Skill Interface           │   │   │
│   │  └─────────────────────────────────────────────┘   │   │
│   └─────────────────────────────────────────────────────┘   │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## 5. Activation Flow

### 5.1 Standard Activation

```
┌─────────────────────────────────────────────────────────────┐
│                    ACTIVATION FLOW                           │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│   1. User copies Raw URL from GitHub                        │
│   2. User pastes URL into AI chat interface                 │
│   3. AI fetches and reads SKILL.md file                     │
│   4. Skill persona is activated                             │
│   5. User interacts with skill                              │
│                                                             │
│   Example:                                                  │
│   "请读取以下技能定义并激活："                               │
│   https://raw.githubusercontent.com/.../SKILL.md            │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### 5.2 Mobile-Optimized Activation

```
┌─────────────────────────────────────────────────────────────┐
│                 MOBILE ACTIVATION FLOW                       │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│   1. Mobile Protocol generates minimal prompt                │
│   2. Prompt includes Raw URL + user request                 │
│   3. AI activates skill with minimal context                │
│   4. Token usage optimized for mobile constraints           │
│                                                             │
│   Example:                                                  │
│   "读取并激活：{RAW_URL}\n需求：{USER_REQUEST}"             │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## 6. Backward Compatibility

### 6.1 Legacy Agent Support

The system maintains full backward compatibility with the original Agent system:

| Component | Status | Location |
|:----------|:-------|:---------|
| Agent files | ✅ Preserved | `agents/` directory |
| Activation method | ✅ Supported | Raw URL activation |
| YAML metadata | ✅ Compatible | Same format |
| README index | ✅ Updated | Links to both systems |

### 6.2 Migration Path

```
Legacy Agent → Skill Migration
──────────────────────────────
agents/{category}/{agent}.md
         ↓
skills/{category}/{skill}/SKILL.md
```

Migration tool available at: `migration/agent_to_skill.py`

---

## 7. Related Documentation

| Document | Description |
|:---------|:------------|
| [SKILL-SYSTEM-ARCHITECTURE.md](./SKILL-SYSTEM-ARCHITECTURE.md) | Detailed Skill System design |
| [PROJECT-ROADMAP.md](./PROJECT-ROADMAP.md) | Project roadmap and milestones |
| [DEPLOYMENT.md](./DEPLOYMENT.md) | Deployment guide |
| [contribution-guide.md](./contribution-guide.md) | Contribution guidelines |

---

**Document Version**: 2.0
**Last Updated**: 2026-03-28
