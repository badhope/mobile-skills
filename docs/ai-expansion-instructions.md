# AI Expansion Instructions — For Future AI Agents

> **IMPORTANT**: This file is written specifically for AI agents that will read and extend this repository. It explains the project's purpose, current state, and how to continue expanding it without human intervention.

---

## Purpose of This File

You are an AI agent tasked with understanding and potentially extending this repository. This file serves as your **operations manual** for continuing the project's expansion in a way that maintains consistency, quality, and alignment with the original goals.

---

## Project Overview

### What Is This Repository?

This is the **AI Agent Ecosystem** — a GitHub Raw-based navigation system for AI agents/roles that can be activated via direct Raw links.

### The Core Value Proposition

```
Human/AI → Reads Raw Link → Activates Role → Uses Agent
```

Users copy a Raw URL from this repository, send it to any web-enabled AI, and the AI activates the corresponding role persona.

### Project Statistics

| Metric | Value |
|:---|:---|
| Categories | 8 |
| Agent Slots | 8+ per category (minimum framework complete) |
| Current Agents | 10 (first examples only) |
| Languages | English primary, Chinese secondary |
| Status | Framework complete, expansion-ready |

---

## Repository Architecture

### Directory Structure

```
mobile-skills/
├── README.md                     ← English primary entry (AI should read THIS first)
├── README.zh-CN.md              ← Chinese secondary entry
├── agents/
│   ├── functional/              ← Task execution agents (e.g., smart-planner)
│   ├── professional/            ← Domain expert agents (e.g., legal-advisor)
│   ├── design-build/            ← System design agents (e.g., code-architect)
│   ├── research-analysis/       ← Investigation agents (e.g., research-analyst)
│   ├── writing-creative/        ← Content creation agents (e.g., writer)
│   ├── learning-education/      ← Teaching agents (e.g., socratic-tutor)
│   ├── lifestyle-companion/     ← Life support agents (e.g., wise-sage)
│   └── entertainment-character/ ← Roleplay agents (e.g., kaguya)
├── templates/
│   ├── role-template.md         ← General purpose template
│   ├── professional-role-template.md ← Professional template
│   └── character-role-template.md   ← Character template
├── docs/
│   ├── expansion-guide.md       ← Human/AI expansion methodology
│   ├── ai-expansion-instructions.md ← THIS FILE
│   ├── prompt-standards.md      ← Prompt quality standards
│   └── repository-structure.md  ← Structure documentation
└── examples/
    ├── mobile-flow-example.md   ← Usage flow examples
    └── expansion-example.md     ← Expansion example
```

---

## Current State: Framework Complete, First Examples Done

### What Has Been Built

1. **Complete 8-category framework** — All directories created
2. **First example in each category** — 10 agents total, each demonstrating the category
3. **Bilingual README system** — English primary, Chinese secondary
4. **Template system** — 3 templates covering all agent types
5. **Expansion documentation** — Guides for both humans and AI

### What Remains To Be Done

This is an **open-ended expansion project**. The framework is complete, but the full role池 has not been filled. Future contributors (human or AI) should continue adding agents to each category.

**Priority tiers for expansion:**

| Tier | Category | Current Count | Target | Priority |
|:---:|:---|:---:|:---:|:---:|
| 1 | Functional | 1 | 5-8 | High |
| 1 | Professional | 1 | 5-8 | High |
| 1 | Design & Build | 2 | 5-8 | Medium |
| 2 | Research & Analysis | 1 | 4-6 | Medium |
| 2 | Writing & Creative | 1 | 5-8 | Medium |
| 3 | Learning & Education | 1 | 4-6 | Low |
| 3 | Lifestyle & Companion | 1 | 4-6 | Low |
| 3 | Entertainment & Character | 2 | 10+ | Low |

---

## How to Continue Expansion

### If You Are an AI Adding New Agents

Follow this exact process:

#### Step 1: Read the Foundation Files First

Before creating any new agent, read:
- `README.md` (this tells you the project structure and categories)
- `docs/expansion-guide.md` (this tells you HOW to add agents)
- The appropriate template (to understand the expected format)

#### Step 2: Determine the Category

Use the category decision tree from `expansion-guide.md`:

```
Professional expertise required?
├── YES → professional/

Deep system/design thinking required?
├── YES → design-build/

Research or analysis focus?
├── YES → research-analysis/

Writing or content creation?
├── YES → writing-creative/

Teaching or training?
├── YES → learning-education/

Lifestyle support or advice?
├── YES → lifestyle-companion/

Entertainment or roleplay?
├── YES → entertainment-character/

None of the above?
└── functional/
```

#### Step 3: Select the Template

```
Is the agent a professional domain expert?
├── YES → templates/professional-role-template.md

Is the agent a fictional character?
├── YES → templates/character-role-template.md

Otherwise
└── templates/role-template.md
```

#### Step 4: Create the Agent File

Follow the template exactly. Every agent MUST have:

```yaml
# Agent Metadata (required for AI indexing)
agent_id: [unique-kebab-case-id]
category: [category-name]
language: zh
description: [one-line description]
best_for: [use case 1, use case 2]
activation_prompt: [how to activate]
```

Plus these required sections:
1. Role / Identity
2. Core Mission
3. Core Strengths / Capabilities
4. Personality / Professional Style
5. Primary Task Types
6. Task Handling Logic
7. Output Protocol
8. Adaptation Rules
9. Context Retention Strategy
10. Boundaries / Constraints
11. Why This Agent Matters

#### Step 5: Update BOTH README Files

After creating an agent file, you MUST update:
1. `README.md` — Add to the English category table
2. `README.zh-CN.md` — Add to the Chinese category table

The table row format:
```markdown
| **AgentName** | Role description | Use case 1, use case 2 | `https://raw.githubusercontent.com/badhope/mobile-skills/main/agents/[category]/[file].md` | ✅ |
```

#### Step 6: Verify the Raw Link

Before committing, verify:
1. The file exists at the correct path
2. The Raw link in the README is correct
3. The link follows the pattern: `https://raw.githubusercontent.com/badhope/mobile-skills/main/agents/[category]/[file].md`

---

## Naming Conventions (Critical)

### File Names
- **MUST use kebab-case**: `smart-planner.md`, `legal-advisor.md`
- **MUST NOT use camelCase**: `smartPlanner.md`
- **MUST NOT use snake_case**: `smart_planner.md`
- **MUST NOT use PascalCase**: `SmartPlanner.md`

### Agent IDs
- Same as filename without `.md`
- All lowercase
- Hyphenated

### Category Names in Metadata
- Use the directory name exactly: `functional`, `professional`, `design-build`, `research-analysis`, `writing-creative`, `learning-education`, `lifestyle-companion`, `entertainment-character`

---

## Quality Standards

### Minimum Quality Bar

Every agent in this repository should meet these standards:

1. **Distinct identity** — Not generic "helpful assistant"
2. **Clear expertise** — Specific domain or task focus
3. **Defined boundaries** — What it CANNOT do
4. **Task handling logic** — How it approaches work
5. **Output protocol** — How it formats responses
6. **Adaptation rules** — How it personalizes
7. **Context strategy** — How it maintains memory

### Professional Agents Must Have
- Professional boundaries section
- Risk acknowledgment
- Liability disclaimer
- Expert methodology described

### Character Agents Must Have
- Persona core defined
- Speech pattern examples
- Emotional range documented
- Character consistency rules

---

## Common Mistakes to Avoid

### 1. Creating Agents Without Reading Templates
**Problem**: Agents don't follow consistent structure
**Solution**: Always start from the appropriate template

### 2. Wrong Category Assignment
**Problem**: Professional agents placed in Functional
**Solution**: If domain expertise is required → professional/

### 3. Forgetting README Updates
**Problem**: Agent exists but not indexed
**Solution**: Always update BOTH README.md and README.zh-CN.md

### 4. Inconsistent Naming
**Problem**: Mixed styles破坏一致性
**Solution**: Always kebab-case, always lowercase

### 5. Generic Role Definition
**Problem**: "You are a helpful AI" descriptions
**Solution**: Be specific about unique expertise and approach

---

## Bilingual Strategy

### English Primary, Chinese Secondary

This repository uses English as the primary language because:
- English is more stable for AI parsing
- English labels are more consistent internationally
- English is the universal fallback language

### Your Responsibility as an AI Contributor

When adding agents:
- Agent files are written in Chinese (the agents speak Chinese)
- README.md must be in English (primary index)
- README.zh-CN.md provides Chinese navigation
- Metadata uses English field names but Chinese content

### Language Switching

Users can switch between English and Chinese README at the top/bottom of each file. AI agents should default to reading README.md for the most stable parsing experience.

---

## Project Origin and Goals

### Original Vision

This repository was created to solve a specific problem:
- Users wanted a way to access different AI personas/roles
- The solution was a GitHub Raw-based navigation system
- Raw links could be sent to any web-enabled AI to activate roles

### Current Goals

1. Provide a diverse, high-quality agent role library
2. Make the system easy to extend by humans or AI
3. Maintain consistency and quality across all agents
4. Support both human users and AI agents as contributors

### What This Repository Is NOT

- NOT a general-purpose AI assistant
- NOT a chatbot platform
- NOT a code library
- NOT a prompt template collection

It is specifically a **GitHub Raw-based AI agent role navigation system**.

---

## Final Instructions

### If You Understand Your Task

1. Read `README.md` first
2. Read `docs/expansion-guide.md` for methodology
3. Select the appropriate template
4. Create your agent following all conventions
5. Update BOTH README files
6. Verify links and quality
7. Commit with a clear message

### If You Are Uncertain

- Re-read this file
- Consult `docs/expansion-guide.md`
- Default to following existing patterns
- When in doubt, maintain consistency with existing agents

### If the Framework Changes

If future contributors change the framework itself (directory names, README structure, etc.), this file should be updated to reflect the new structure. However, such changes should be rare and well-justified.

---

## Contact / Contribution

This is an open project. Contributions are welcome from both humans and AI agents.

When contributing:
1. Follow the expansion guide methodology
2. Maintain quality standards
3. Update all relevant files
4. Test before committing

---

*This file was created as part of the Extensible Agent Repository Foundation project.*
*Version: 1.0*
*Last Updated: 2026-03-20*
