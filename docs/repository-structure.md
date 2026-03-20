# Repository Structure — Architecture Documentation

> This document explains the architecture, directory structure, and file organization of the AI Agent Ecosystem repository.

---

## Overview

This repository is an **AI Agent Ecosystem** — a GitHub Raw-based navigation system for AI agents/roles that can be activated via direct Raw links.

### Core Concept

```
User/AI → Read Raw URL → Activate Role → Use Agent
```

Users copy a Raw URL from this repository, send it to any web-enabled AI, and the AI activates the corresponding role persona.

---

## Directory Structure

```
mobile-skills/
├── README.md                     # English primary entry point
├── README.zh-CN.md              # Chinese secondary entry point
│
├── agents/                      # Agent role files
│   ├── functional/             # Task execution agents
│   ├── professional/           # Domain expert agents
│   ├── design-build/           # System design agents
│   ├── research-analysis/      # Investigation agents
│   ├── writing-creative/       # Content creation agents
│   ├── learning-education/     # Teaching agents
│   ├── lifestyle-companion/    # Life support agents
│   └── entertainment-character/ # Roleplay agents
│
├── templates/                   # Agent creation templates
│   ├── role-template.md        # General purpose template
│   ├── professional-role-template.md  # Professional template
│   └── character-role-template.md    # Character template
│
├── docs/                        # Documentation
│   ├── expansion-guide.md      # How to add agents (human & AI)
│   ├── ai-expansion-instructions.md # AI-specific expansion guide
│   ├── prompt-standards.md     # Prompt quality standards
│   └── repository-structure.md # THIS FILE
│
└── examples/                    # Usage examples
    ├── mobile-flow-example.md  # Mobile activation flow
    └── expansion-example.md    # How to extend repository
```

---

## File Purposes

### Entry Files

| File | Language | Purpose | Priority |
|:---|:---|:---|:---:|
| `README.md` | English | Primary entry for users and AI | P0 |
| `README.zh-CN.md` | Chinese | Secondary entry for Chinese users | P1 |

### Agent Files

Located in `agents/[category]/`

Each agent file contains:
- YAML metadata block (for AI indexing)
- Complete role prompt (Chinese language)
- All required sections (Role, Mission, Capabilities, etc.)

### Template Files

Located in `templates/`

| Template | Use For | Key Features |
|:---|:---|:---|
| `role-template.md` | General agents | Basic structure, adaptable |
| `professional-role-template.md` | Expert agents | Professional boundaries, risk disclaimers |
| `character-role-template.md` | Fictional characters | Persona core, speech patterns, consistency rules |

### Documentation Files

Located in `docs/`

| File | Audience | Purpose |
|:---|:---|:---|
| `expansion-guide.md` | Humans & AI | How to add new agents |
| `ai-expansion-instructions.md` | AI agents | AI-specific expansion manual |
| `prompt-standards.md` | All contributors | Quality standards for prompts |
| `repository-structure.md` | All | Architecture documentation |

### Example Files

Located in `examples/`

| File | Purpose |
|:---|:---|
| `mobile-flow-example.md` | Shows how users activate agents from mobile |
| `expansion-example.md` | Step-by-step example of adding a new agent |

---

## Category Definitions

### functional/

**Purpose**: Task execution, planning, summarization, problem solving

**First Example**: Smart Planner (smart-planner.md)

**Characteristics**:
- Utility-focused
- Adaptable to various tasks
- Output-oriented
- Efficiency-driven

### professional/

**Purpose**: Domain expert agents requiring deep professional knowledge

**First Example**: Legal Advisor (legal-advisor.md)

**Characteristics**:
- Expert-level knowledge
- Professional boundaries
- Risk awareness
- Liability disclaimers

### design-build/

**Purpose**: System design, architecture, product strategy, technical planning

**First Example**: Code Architect (code-architect.md)

**Characteristics**:
- Strategic thinking
- Design methodology
- Systems approach
- Trade-off analysis

### research-analysis/

**Purpose**: Investigation, data analysis, insight generation, evidence synthesis

**First Example**: Research Analyst (research-analyst.md)

**Characteristics**:
- Evidence-based
- Analytical thinking
- Hypothesis-driven
- Structured methodology

### writing-creative/

**Purpose**: Content creation, writing, editing, creative expression

**First Example**: Writer (writer.md)

**Characteristics**:
- Language mastery
- Audience awareness
- Creative expression
- Multiple formats

### learning-education/

**Purpose**: Teaching, training, explanation, learning support

**First Example**: Socratic Tutor (socratic-tutor.md)

**Characteristics**:
- Pedagogical approach
- Adaptive instruction
- Knowledge scaffolding
- Encouraging tone

### lifestyle-companion/

**Purpose**: Life advice, habit support, reflection, companionship

**First Example**: Wise Sage (wise-sage.md)

**Characteristics**:
- Empathetic listening
- Thoughtful guidance
- Wisdom tradition
- Holistic perspective

### entertainment-character/

**Purpose**: Entertainment, roleplay, character immersion

**First Examples**: Kaguya (kaguya.md), Misaka Mikoto (misaka-mikoto.md)

**Characteristics**:
- Persona-driven
- Immersive interaction
- Character consistency
- Emotional range

---

## Naming Conventions

### Agent Files

| Rule | Correct | Incorrect |
|:---|:---|:---|
| Case | kebab-case | camelCase, snake_case, PascalCase |
| Example | `smart-planner.md` | `smartPlanner.md`, `smart_planner.md` |
| Characters | kebab-case | Spaces or special chars |

### Agent IDs

| Rule | Correct | Incorrect |
|:---|:---|:---|
| Format | kebab-case, lowercase | mixedCase, UPPERCASE |
| Example | `legal-advisor` | `legal_advisor`, `LegalAdvisor` |

### Directories

| Rule | Correct | Incorrect |
|:---|:---|:---|
| Format | kebab-case | camelCase, PascalCase |
| Example | `design-build/` | `designBuild/`, `DesignBuild/` |

---

## Raw Link Format

### Standard Format

```
https://raw.githubusercontent.com/[owner]/[repo]/[branch]/agents/[category]/[filename].md
```

### Current Repository

```
https://raw.githubusercontent.com/badhope/mobile-skills/main/agents/[category]/[filename].md
```

### Example Links

| Agent | Raw Link |
|:---|:---|
| Smart Planner | `https://raw.githubusercontent.com/badhope/mobile-skills/main/agents/functional/smart-planner.md` |
| Legal Advisor | `https://raw.githubusercontent.com/badhope/mobile-skills/main/agents/professional/legal-advisor.md` |
| Code Architect | `https://raw.githubusercontent.com/badhope/mobile-skills/main/agents/design-build/code-architect.md` |

---

## README Structure

### English README (README.md)

Primary entry point. Must include:

1. **AI Metadata Block** — YAML format for machine parsing
2. **Language Switch** — Link to Chinese version
3. **Category Index** — Quick reference table
4. **Agent Directory** — Detailed tables by category
5. **Featured Agents** — Highlight section
6. **Repository Structure** — Visual directory tree
7. **Extension Guide** — How to contribute
8. **Bilingual Statement** — English/Chinese role division

### Chinese README (README.zh-CN.md)

Secondary entry for Chinese users. Must include:

1. **AI Metadata Block** — Same structure as English
2. **Language Switch** — Link to English version
3. **Category Index** — Chinese labels
4. **Agent Directory** — Same structure as English
5. **Full Navigation** — Complete navigation in Chinese

---

## Metadata Schema

### Agent Metadata Block

```yaml
```yaml
agent_id: [unique-id]
category: [category-name]
language: zh
description: [one-line description]
best_for: [use case 1, use case 2]
activation_prompt: [how to activate]
```
```

### README AI Metadata Block

```yaml
```yaml
repo: badhope/mobile-skills
type: AI Agent Navigation System
version: 3.0
language: en
entry_type: Primary Entry
categories: 8
total_agents: 10
```
```

---

## Version History

| Version | Date | Changes |
|:---|:---|:---|
| 1.0 | 2026-03-20 | Initial framework with 8 categories and first examples |
| 2.0 | 2026-03-20 | Added bilingual README system |
| 3.0 | 2026-03-20 | Complete documentation and template system |

---

## Contributing to This Repository

### For Humans

1. Read `docs/expansion-guide.md`
2. Follow the template system
3. Maintain quality standards
4. Update BOTH README files
5. Submit via pull request

### For AI Agents

1. Read `docs/ai-expansion-instructions.md`
2. Read `docs/expansion-guide.md`
3. Follow naming conventions strictly
4. Update BOTH README files
5. Verify Raw links before committing

---

*This document is part of the Extensible Agent Repository Foundation.*
