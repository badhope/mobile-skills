# Expansion Guide — How to Extend This Repository

> This guide teaches humans and AI agents how to add new roles to this repository while maintaining consistency and quality.

---

## Table of Contents

1. [How to Add a New Agent](#1-how-to-add-a-new-agent)
2. [Category Determination](#2-category-determination)
3. [File Naming Conventions](#3-file-naming-conventions)
4. [Template Selection](#4-template-selection)
5. [Writing Quality Prompts](#5-writing-quality-prompts)
6. [Maintaining Professional Boundaries](#6-maintaining-professional-boundaries)
7. [Maintaining Character Consistency](#7-maintaining-character-consistency)
8. [README Synchronization](#8-readme-synchronization)
9. [Quality Checklist](#9-quality-checklist)

---

## 1. How to Add a New Agent

### Step-by-Step Process

```
1. Determine the category     → Which directory should this agent belong to?
2. Choose the template         → Which template matches this agent type?
3. Create the file             → Use the selected template
4. Write the prompt            → Follow the prompt standards
5. Add to README.md            → Update English primary entry
6. Add to README.zh-CN.md      → Update Chinese secondary entry
7. Test the Raw link           → Verify the link works
8. Commit and push             → Submit to repository
```

---

## 2. Category Determination

Use this decision tree to determine which category a new agent belongs to:

```
Does the agent require deep professional domain expertise?
├── YES → Is it related to legal, financial, medical, or technical consulting?
│         ├── YES → Professional Domain Agents (professional/)
│         └── NO → Could also be Design & Build
│
├── NO → Is the primary task designing systems, architectures, or strategies?
│        ├── YES → Design & Build Agents (design-build/)
│        └── NO → Continue
│
├── NO → Is the primary task researching, analyzing, or generating insights?
│        ├── YES → Research & Analysis Agents (research-analysis/)
│        └── NO → Continue
│
├── NO → Is the primary task writing, creating, or editing content?
│        ├── YES → Writing & Creative Agents (writing-creative/)
│        └── NO → Continue
│
├── NO → Is the primary task teaching, explaining, or training?
│        ├── YES → Learning & Education Agents (learning-education/)
│        └── NO → Continue
│
├── NO → Is the primary task providing companionship, advice, or lifestyle support?
│        ├── YES → Lifestyle & Companion Agents (lifestyle-companion/)
│        └── NO → Continue
│
└── NO → Is the primary task entertainment, roleplay, or character immersion?
         ├── YES → Entertainment & Character Agents (entertainment-character/)
         └── NO → Default to Functional (functional/)
```

### Category Quick Reference

| Category | Directory | First Example | Primary Purpose |
|:---|:---|:---|:---|
| Functional | functional/ | Smart Planner | Task execution, planning |
| Professional | professional/ | Legal Advisor | Domain expertise |
| Design & Build | design-build/ | Code Architect | System design |
| Research & Analysis | research-analysis/ | Research Analyst | Investigation |
| Writing & Creative | writing-creative/ | Writer | Content creation |
| Learning & Education | learning-education/ | Socratic Tutor | Teaching |
| Lifestyle & Companion | lifestyle-companion/ | Wise Sage | Life support |
| Entertainment & Character | entertainment-character/ | Kaguya | Roleplay |

---

## 3. File Naming Conventions

### Mandatory Rules

```
✅ CORRECT:
- kebab-case (lowercase with hyphens)
- descriptive and clear
- consistent with existing files

❌ INCORRECT:
- camelCase (codeArchitect.md)
- PascalCase (CodeArchitect.md)
- snake_case (code_architect.md)
- spaces or special characters
```

### Examples

| Agent Type | Correct Filename | Incorrect |
|:---|:---|:---|
| Code Architect | `code-architect.md` | `CodeArchitect.md`, `code_architect.md` |
| Smart Planner | `smart-planner.md` | `smartPlanner.md` |
| Legal Advisor | `legal-advisor.md` | `LegalAdvisor.md` |
| Research Analyst | `research-analyst.md` | `researchAnalyst.md` |

### Agent ID Convention

The agent ID (used in metadata) should:
- Match the filename without `.md`
- Be lowercase
- Use hyphens instead of spaces

```yaml
# Correct
agent_id: legal-advisor

# Incorrect
agent_id: legal_advisor
agent_id: LegalAdvisor
```

---

## 4. Template Selection

### Which Template to Use?

| Agent Type | Template File | Key Characteristics |
|:---|:---|:---|
| General / Functional | `templates/role-template.md` | Task-oriented, adaptable |
| Professional Domain | `templates/professional-role-template.md` | Expert boundaries, risk awareness |
| Entertainment / Character | `templates/character-role-template.md` | Persona, speech patterns, relationship |

### When to Use Each Template

**Use `role-template.md` when:**
- The agent performs general tasks
- The agent doesn't require deep professional expertise
- The agent is utility-focused (planner, summarizer, translator)

**Use `professional-role-template.md` when:**
- The agent represents a professional domain (legal, medical, financial)
- The agent must demonstrate expert-level knowledge
- The agent needs risk disclaimers and professional boundaries

**Use `character-role-template.md` when:**
- The agent is a fictional character
- The agent requires persona consistency
- The agent has distinct speech patterns and emotional range

---

## 5. Writing Quality Prompts

### Minimum Required Sections

Every agent file MUST contain:

```markdown
# [Agent Name] - [Brief Description]

```yaml
# Agent Metadata Block (REQUIRED)
agent_id: [unique-id]
category: [category-name]
language: zh
description: [one-line description]
best_for: [comma-separated use cases]
activation_prompt: [how to activate this agent]
```

## Role / Identity
[Who this agent is]

## Core Mission
[What this agent aims to accomplish]

## Core Strengths / Capabilities
[What this agent is good at]

## Personality / Professional Style
[How this agent communicates and behaves]

## Primary Task Types
[Types of tasks this agent handles]

## Task Handling Logic
[How this agent approaches tasks]

## Output Protocol
[How this agent formats output]

## Adaptation Rules
[How this agent adapts to user preferences]

## Context Retention Strategy
[How this agent maintains conversation context]

## Boundaries / Constraints
[What this agent should NOT do]

## Why This Agent Matters
[Value proposition of this agent in the system]
```

---

## 6. Maintaining Professional Boundaries

Professional agents (legal, medical, financial, etc.) MUST include:

### Required Elements

```markdown
## Professional Boundaries

### Scope of Expertise
- [What this agent can confidently handle]
- [What requires escalation or disclaimer]

### Risk Acknowledgment
- [Known limitations]
- [When to recommend human professionals]

### Liability Statement
This agent provides informational assistance only.
Formal decisions should involve qualified human professionals.
```

### Example: Legal Advisor

```markdown
## Professional Boundaries

### Scope of Expertise
✅ CAN: Contract review, risk identification, legal research
✅ CAN: Explain legal concepts in accessible language
✅ CAN: Provide general compliance guidance

❌ CANNOT: Replace formal legal advice from licensed attorneys
❌ CANNOT: Guarantee legal outcomes
❌ CANNOT: Handle litigation or court representation

### Risk Acknowledgment
- This agent's responses are for reference only
- Jurisdiction-specific laws may apply
- Consult a licensed attorney for formal legal matters
```

---

## 7. Maintaining Character Consistency

Entertainment and character agents MUST include:

### Required Elements

```markdown
## Persona Core
[Character's core identity, background, psychology]

## Speech Pattern Model
[How the character speaks, catchphrases, verbal tics]

## Relational Dynamics
[How the character relates to the user over time]

## Character Consistency Rules
[How to maintain character across conversations]

## Emotional Range
[What emotions the character expresses and how]

## Adaptation to User
[How the character adjusts to user behavior while staying in character]
```

### Example: Tsundere Character

```markdown
## Speech Pattern Model

When showing care but wanting to hide it:
"I-I'm not worried about you! I just happened to be here, that's all!"

When complimenting indirectly:
"That's... not bad. I mean, anyone could have done it. But whatever."

When jealous:
"Hmph. Spending time with THEM? How interesting. Not that I care."
```

---

## 8. README Synchronization

### When Adding a New Agent

You MUST update BOTH README files:

#### README.md (English Primary)

Add to the appropriate category section:

```markdown
## [Category Name]

| Agent | Role | Best For | Raw Link | Status |
|:---|:---|:---|:---|:---:|
| **AgentName** | Role description | Use case 1, use case 2 | `https://raw.githubusercontent.com/badhope/mobile-skills/main/agents/[category]/[agent-file].md` | ✅ |
```

#### README.zh-CN.md (Chinese Secondary)

Add the same entry to the Chinese version.

### README Update Checklist

- [ ] Category section exists (create if not)
- [ ] Table row added with all 5 columns
- [ ] Raw link uses correct path: `agents/[category]/[file].md`
- [ ] Status marked as ✅
- [ ] Both English and Chinese README updated
- [ ] Language switch links present at top and bottom

---

## 9. Quality Checklist

Before committing a new agent, verify:

### Metadata Quality
- [ ] `agent_id` is unique and lowercase
- [ ] `category` matches the directory
- [ ] `description` is one line and descriptive
- [ ] `best_for` lists actual use cases
- [ ] `activation_prompt` is provided

### Content Quality
- [ ] All 11 required sections present
- [ ] Role identity clearly defined
- [ ] Core mission stated
- [ ] Task types enumerated
- [ ] Output protocol specified
- [ ] Adaptation rules defined
- [ ] Boundaries specified
- [ ] Context retention strategy described

### Professional Agents Additional
- [ ] Professional boundaries section
- [ ] Risk acknowledgment
- [ ] Liability statement
- [ ] Methodological approach described

### Character Agents Additional
- [ ] Persona core defined
- [ ] Speech patterns specified
- [ ] Emotional range documented
- [ ] Character consistency rules
- [ ] Relationship progression defined

### Technical Quality
- [ ] File named in kebab-case
- [ ] Raw link correct and accessible
- [ ] No placeholder text
- [ ] Markdown formatting correct
- [ ] No broken links

---

## 10. Common Mistakes to Avoid

### 1. Wrong Category Assignment
**Problem**: Placing a professional agent in Functional because it's "task-like"

**Solution**: If the agent requires deep domain expertise, it belongs in Professional

### 2. Generic Role Definition
**Problem**: "You are a helpful assistant" style descriptions

**Solution**: Be specific about the agent's unique expertise and approach

### 3. Missing Boundaries
**Problem**: Agent tries to handle everything

**Solution**: Clearly define what the agent CANNOT do

### 4. Ignoring Templates
**Problem**: Creating agents from scratch without using templates

**Solution**: Always start from the appropriate template

### 5. Forgetting README Sync
**Problem**: Agent created but not added to README

**Solution**: Always update BOTH README files

### 6. Inconsistent Naming
**Problem**: Mixed naming styles (`code-architect.md` vs `CodeArchitect.md`)

**Solution**: Always use kebab-case

---

## 11. Quick Reference Card

```
NEW AGENT CHECKLIST:

1. Category?        → functional/ | professional/ | design-build/ |
                      research-analysis/ | writing-creative/ |
                      learning-education/ | lifestyle-companion/ |
                      entertainment-character/

2. Template?        → role-template.md | professional-role-template.md |
                      character-role-template.md

3. Filename?        → [descriptor]-[descriptor].md (kebab-case)

4. Metadata?        → agent_id, category, language, description,
                      best_for, activation_prompt

5. Sections?        → All 11 required sections present

6. README.md?       → Added to correct category table

7. README.zh-CN.md? → Added to correct category table

8. Links work?      → Raw link accessible

9. Quality checked? → All items in Quality Checklist verified
```

---

*This guide is part of the Extensible Agent Repository Foundation.*
*For AI-specific expansion instructions, see `docs/ai-expansion-instructions.md`.*
