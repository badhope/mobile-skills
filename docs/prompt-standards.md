# Prompt Standards — Writing Quality Agent Prompts

> This document defines the quality standards for writing agent prompts in this repository.

---

## 1. Agent File Structure

### Required Metadata Block

Every agent file MUST start with this YAML metadata block:

```yaml
```yaml
agent_id: [unique-identifier]
category: [category-name]
language: zh
description: [one-line description, max 50 chars]
best_for: [use case 1, use case 2, use case 3]
activation_prompt: [how to activate this role]
```
```

### Required Sections

Every agent file MUST contain these sections:

| # | Section | Purpose | Required For |
|:---:|:---|:---|:---|
| 1 | Role / Identity | Who this agent is | All agents |
| 2 | Core Mission | What this agent aims to do | All agents |
| 3 | Core Strengths / Capabilities | What this agent excels at | All agents |
| 4 | Personality / Professional Style | How this agent communicates | All agents |
| 5 | Primary Task Types | Types of tasks handled | All agents |
| 6 | Task Handling Logic | How tasks are approached | All agents |
| 7 | Output Protocol | How output is formatted | All agents |
| 8 | Adaptation Rules | How agent adapts to users | All agents |
| 9 | Context Retention Strategy | How context is maintained | All agents |
| 10 | Boundaries / Constraints | What agent CANNOT do | All agents |
| 11 | Why This Agent Matters | Value in the system | All agents |

### Section Quality Requirements

#### Role / Identity
- **MUST**: Define specific identity, not generic
- **MUST**: Include relevant background/experience
- **MUST**: State professional philosophy

#### Core Mission
- **MUST**: State the primary goal
- **MUST**: Explain the value provided
- **MUST**: Be concise (2-3 sentences max)

#### Core Strengths
- **MUST**: List 4-8 specific capabilities
- **MUST**: Use action verbs (analyze, design, create)
- **MUST**: Be concrete, not abstract

#### Personality / Professional Style
- **MUST**: Define communication style
- **MUST**: Define professional approach
- **MUST**: Give examples of tone

#### Primary Task Types
- **MUST**: Enumerate 4-8 task types
- **MUST**: Define input and output for each
- **MUST**: Use consistent format (table recommended)

#### Task Handling Logic
- **MUST**: Describe the approach phases
- **MUST**: Show decision flow
- **MUST**: Include example inputs/outputs

#### Output Protocol
- **MUST**: Define response format
- **MUST**: Define structure standards
- **MUST**: Define quality expectations

#### Adaptation Rules
- **MUST**: Define how to learn user preferences
- **MUST**: Define personalization mechanisms
- **MUST**: Define limits of adaptation

#### Context Retention Strategy
- **MUST**: Define what to remember
- **MUST**: Define retention period
- **MUST**: Define how to use context

#### Boundaries / Constraints
- **MUST**: Define explicit limitations
- **MUST**: Define what is out of scope
- **MUST**: Define when to escalate

#### Why This Agent Matters
- **MUST**: Explain unique value
- **MUST**: Differentiate from similar agents
- **MUST**: State contribution to ecosystem

---

## 2. Writing Style Guidelines

### Language

| Element | Requirement |
|:---|:---|
| Primary language | Chinese (agents speak Chinese) |
| Metadata | English field names, Chinese content |
| README | English (primary) |
| Structure | Consistent across all agents |

### Tone by Agent Type

| Category | Tone |
|:---|:---|
| Functional | Efficient, clear, action-oriented |
| Professional | Expert, cautious, authoritative |
| Design & Build | Strategic, systematic, design-focused |
| Research & Analysis | Analytical, evidence-based, objective |
| Writing & Creative | Expressive, creative, audience-aware |
| Learning & Education | Patient, encouraging, Socratic |
| Lifestyle & Companion | Warm, empathetic, wise |
| Entertainment & Character | Persona-specific, immersive |

### Sentence Structure

- **Use short sentences** for clarity
- **Use active voice** for directness
- **Use concrete examples** for illustration
- **Avoid jargon** unless domain-appropriate
- **Avoid generic phrases** like "I am here to help"

---

## 3. Anti-Patterns

### Generic Identity
```
❌ BAD: "You are a helpful AI assistant."

✅ GOOD: "You are a senior system architect with 15 years of experience designing distributed systems at scale."
```

### Missing Boundaries
```
❌ BAD: "You can help with any task."

✅ GOOD: "You specialize in system architecture. For legal matters, you provide general information only and recommend consulting a licensed attorney."
```

### No Task Structure
```
❌ BAD: "When the user asks something, respond helpfully."

✅ GOOD: "When receiving a task:
1. Clarify requirements if ambiguous
2. Identify constraints and assumptions
3. Propose approach with options
4. Execute with user's preferred method
5. Verify output meets requirements"
```

### Vague Capabilities
```
❌ BAD: "You are good at analysis."

✅ GOOD: "You excel at:
- Competitive analysis using Porter's Five Forces
- Market sizing using TAM/SAM/SOM framework
- SWOT analysis with quantified metrics
- Trend analysis with statistical validation"
```

### No Output Format
```
❌ BAD: "Provide a good response."

✅ GOOD: "Response must include:
1. Executive summary (1 paragraph)
2. Detailed analysis (with supporting data)
3. Recommendations (numbered, actionable)
4. Risk assessment (probability × impact)
5. Next steps (with owners and deadlines)"
```

---

## 4. Professional Agent Standards

Professional agents (legal, medical, financial, etc.) MUST include:

### Professional Boundaries Section

```markdown
## Professional Boundaries

### Scope of Expertise
✅ CAN:
- [Specific things this agent CAN do]

❌ CANNOT:
- [Specific things this agent CANNOT do]

### Risk Acknowledgment
- [Known risks and limitations]
- [When to recommend human professional]
- [Jurisdiction/context dependencies]

### Liability Statement
This agent provides informational assistance only.
Formal decisions should involve qualified human professionals.
```

### Quality Standards

- **Evidence-based**: Claims must be supported
- **Nuanced**: Acknowledge uncertainty
- **Contextual**: Consider jurisdiction/circumstances
- **Updated**: Acknowledge knowledge cutoffs
- **Escalation-aware**: Know when to defer

---

## 5. Character Agent Standards

Character agents (fictional, roleplay) MUST include:

### Persona Core Section

```markdown
## Persona Core

### Background
[Character's history, identity, traits]

### Psychological Layers
- Surface: [External presentation]
- Middle: [True feelings]
- Core: [Fundamental nature]

### Speech Rhythm
- Formal: [How they speak in formal settings]
- Casual: [How they speak with close contacts]
- Internal: [Inner monologue style]

### Emotional Triggers
| Trigger | Surface Response | True Feeling |
|:---|:---|:---|
| [X] | [External] | [Internal] |
```

### Speech Pattern Section

```markdown
## Speech Pattern Model

### Catchphrases
- [Characteristic phrases]

### Verbal Tics
- [Habitual expressions]

### Example Dialogue
[When X]:
"[Character's response]"

[When Y]:
"[Character's response]"
```

### Character Consistency Rules

```markdown
## Character Consistency Rules

### Must Maintain
- [Personality traits that must never break]
- [Speech patterns that are always present]
- [Relationship dynamics]

### Must Never Do
- [Inconsistencies that break immersion]
- [Out-of-character moments]

### Adaptation Boundaries
[How the character can grow while staying true]
```

---

## 6. Metadata Quality Standards

### agent_id
- **Format**: kebab-case, lowercase
- **Length**: 2-4 words
- **Uniqueness**: Must not duplicate existing IDs

### category
- **Must match**: Directory name exactly
- **Options**: functional, professional, design-build, research-analysis, writing-creative, learning-education, lifestyle-companion, entertainment-character

### description
- **Language**: Chinese
- **Length**: Max 50 characters
- **Content**: What this agent does in one line

### best_for
- **Format**: Comma-separated Chinese phrases
- **Length**: 2-4 specific use cases
- **Content**: Actual scenarios, not generic

### activation_prompt
- **Format**: Chinese sentence
- **Content**: How to activate this agent
- **Example**: "请读取以下文件并切换到[角色名]模式：[Raw链接]"

---

## 7. Quality Checklist

Before finalizing any agent prompt:

- [ ] Metadata block complete and correct
- [ ] All 11 sections present
- [ ] No generic identity statements
- [ ] Clear, specific capabilities listed
- [ ] Task types have input/output defined
- [ ] Output format specified
- [ ] Adaptation rules defined
- [ ] Boundaries clearly stated
- [ ] No placeholder text
- [ ] No broken links
- [ ] Naming conventions followed
- [ ] Tone matches agent type
- [ ] Chinese language consistent
- [ ] Professional agents have disclaimers
- [ ] Character agents have persona rules

---

## 8. Template Reference

Always start from the appropriate template:

| Agent Type | Template |
|:---|:---|
| General/Functional | `templates/role-template.md` |
| Professional | `templates/professional-role-template.md` |
| Character/Entertainment | `templates/character-role-template.md` |

Never create an agent from scratch without using a template.

---

*This document is part of the Extensible Agent Repository Foundation.*
