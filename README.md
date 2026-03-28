# 🌐 AI Skill Ecosystem

<!-- Badges Row -->
<p align="center">

![Skills](https://img.shields.io/badge/Skills-16+-blue?style=for-the-badge&labelColor=2d333b)
![Agents](https://img.shields.io/badge/Agents-77+-green?style=for-the-badge&labelColor=2d333b)
![Categories](https://img.shields.io/badge/Categories-5-orange?style=for-the-badge&labelColor=2d333b)
![Platform](https://img.shields.io/badge/Platform-Cross--platform-orange?style=for-the-badge&labelColor=2d333b)
![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge&labelColor=2d333b)
![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-brightgreen?style=for-the-badge&labelColor=2d333b)
![Last Update](https://img.shields.io/badge/Last_Update-2026--03--28-red?style=for-the-badge&labelColor=2d333b)

</p>

<!-- Centered Hero Section -->
<div align="center">

## 🚀 Activate AI Skills via Raw Links

**Cross-platform · Barrier-free · Instant use · No installation required**

*[English](README.md) · [中文](README.zh-CN.md) · [日本語](README.ja-JP.md)*

---

### 🎯 Quick Demo

```markdown
# Activate TaskMaster Skill
"Please read and switch to task management mode:"
https://raw.githubusercontent.com/badhope/mobile-skills/main/skills/functional/smart-planner/SKILL.md
```

[![GitHub Stars](https://img.shields.io/github/stars/badhope/mobile-skills?style=social)](https://github.com/badhope/mobile-skills)
[![GitHub Forks](https://img.shields.io/github/forks/badhope/mobile-skills?style=social)](https://github.com/badhope/mobile-skills)

</div>

---

## 📑 Table of Contents

<details open="open">
<summary><b>📖 Click to expand</b></summary>

| Section | Description | Badge |
|:--------|:------------|:------|
| [🆕 Skill System Architecture](#-skill-system-architecture) | Next-gen skill system | 🔥 Featured |
| [🚀 Quick Start](#-quick-start) | 3-step activation flow | 🟢 Beginner |
| [📂 Skills Index](#-skills-index) | All available skills | 🔍 Browse |
| [🛠️ Functional](#-functional-skills) | Task execution & planning | 🔧 Tools |
| [💼 Professional](#-professional-skills) | Legal, medical, investment | 💼 Expert |
| [🎨 Creative](#-creative-skills) | Writing, music composition | 🎨 Create |
| [🎭 Character](#-character-skills) | Roleplay & characters | 🎭 Play |
| [📖 Fiction Worlds](#-fiction-worlds-skill) | Interactive fiction worlds | 📖 Story |
| [📁 Repository Structure](#-repository-structure) | Complete file tree | 📦 Files |
| [📱 Mobile Testing](#-mobile-testing) | Mobile activation guide | 📱 Mobile |
| [🤝 Contributing](#-contributing) | How to contribute | 🤝 Help |

</details>

---

## 🆕 Skill System Architecture

### 🏗️ Architecture Overview

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                         🏗️ Mobile-Skills Architecture                        │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│   ┌─────────────────────────────────────────────────────────────────────┐   │
│   │                      🎯 Commander Layer                              │   │
│   │              Task Decomposition · Intent Recognition · Result Merge  │   │
│   └─────────────────────────────────────────────────────────────────────┘   │
│                                    │                                        │
│                                    ▼                                        │
│   ┌─────────────────────────────────────────────────────────────────────┐   │
│   │                      🔄 Orchestrator Layer                           │   │
│   │           DAG Engine · Skill Orchestration · Workflow Management    │   │
│   └─────────────────────────────────────────────────────────────────────┘   │
│                                    │                                        │
│                                    ▼                                        │
│   ┌─────────────────────────────────────────────────────────────────────┐   │
│   │                      📋 Coordinator Layer                            │   │
│   │          Domain Coordination · Skill Grouping · Context Management  │   │
│   └─────────────────────────────────────────────────────────────────────┘   │
│                                    │                                        │
│                                    ▼                                        │
│   ┌─────────────────────────────────────────────────────────────────────┐   │
│   │                      🔌 Protocol Layer                               │   │
│   │              MCP Protocol · ACP Protocol · Mobile Protocol           │   │
│   └─────────────────────────────────────────────────────────────────────┘   │
│                                    │                                        │
│                                    ▼                                        │
│   ┌─────────────────────────────────────────────────────────────────────┐   │
│   │                      🎯 Skill Pool                                   │   │
│   │    ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐     │   │
│   │    │Functional│ │Profess. │ │Creative │ │Character│ │ Fiction │     │   │
│   │    │   6     │ │   4     │ │   2     │ │   2     │ │   1     │     │   │
│   │    └─────────┘ └─────────┘ └─────────┘ └─────────┘ └─────────┘     │   │
│   └─────────────────────────────────────────────────────────────────────┘   │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### ✨ Core Features

| Feature | Description |
|:--------|:------------|
| **🎯 Hybrid Architecture** | Skills-First + Hierarchical orchestration |
| **🔄 DAG Workflow** | Directed Acyclic Graph engine for complex task orchestration |
| **🔌 Protocol Integration** | MCP/ACP/Mobile protocols for cross-platform interoperability |
| **📱 Mobile Optimized** | Optimized for mobile AI services |
| **🔙 Backward Compatible** | Fully compatible with existing Agent system |

### 📊 Skill Metadata Structure

```yaml
skill_id: smart-planner
skill_name: TaskMaster - Task Management Expert
skill_version: 2.0.0
skill_category: functional

description: Task management and decomposition expert
best_for:
  - Task management
  - Project planning
  - Time management
  - GTD workflow

activation:
  raw_url: https://raw.githubusercontent.com/.../SKILL.md
  prompt_template: |
    Please read the skill definition and activate task management mode:
    {RAW_URL}
    {USER_REQUEST}
  min_context: 3000
  mobile_optimized: true

capabilities:
  input_types:
    - text/plain
    - text/markdown
  output_types:
    - text/markdown
  dependencies: []
  conflicts: []

execution:
  mode: atomic
  timeout: 60000
  retry: 2

metadata:
  author: mobile-skills-team
  created_at: 2024-01-15
  updated_at: 2026-03-28
  tags:
    - productivity
    - planning
    - gtd
  rating: 4.8
```

---

## 🚀 Quick Start

### ⚡ 3-Step Activation

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                           🚀 SKILL ACTIVATION FLOW                           │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│   ┌──────────────┐     ┌──────────────┐     ┌──────────────┐              │
│   │  1️⃣ COPY    │ ──▶ │  2️⃣ PASTE   │ ──▶ │  3️⃣ START   │              │
│   │  Raw Link   │     │  to AI      │     │  Using Skill │              │
│   └──────────────┘     └──────────────┘     └──────────────┘              │
│                                                                             │
│        ▼                    ▼                     ▼                         │
│   Select any Skill    Send to any AI        Start using the skill!         │
│   Copy Raw URL        with web access                                    │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 🎯 Step-by-Step Guide

| Step | Action | Tips |
|:----:|:-------|:-----|
| 1️⃣ | **Browse Skills Index** | Use table of contents for quick access |
| 2️⃣ | **Copy Raw Link** | Format: `skills/[category]/[name]/SKILL.md` |
| 3️⃣ | **Send to AI** | Claude, ChatGPT, Gemini, etc. |
| 4️⃣ | **Start Using** | AI will activate the corresponding Skill mode |

### 💬 Recommended Activation Prompt

```
Please read the following skill definition and switch to the corresponding mode:
https://raw.githubusercontent.com/badhope/mobile-skills/main/skills/[category]/[skill-id]/SKILL.md
```

---

## 📂 Skills Index

### 📊 Statistics Overview

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                           📊 SKILL ECOSYSTEM STATS                           │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│   Total Skills:   ████████████████                   15                     │
│   Categories:     █████                             5                       │
│   Languages:      ████                               2+ (EN, ZH)            │
│                                                                             │
│   Category Distribution:                                                    │
│   🛠️ Functional    ████████████                   6                        │
│   💼 Professional  ████████                        4                        │
│   🎨 Creative      ████                            2                        │
│   🎭 Character     ████                            2                        │
│   📖 Fiction       ████                            2                        │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 📋 Category Matrix

| Icon | Category | Count | Description |
|:----:|:---------|:-----:|:------------|
| 🛠️ | [Functional](#-functional-skills) | 6 | Task execution, planning tools |
| 💼 | [Professional](#-professional-skills) | 4 | Legal, medical, investment, psychology |
| 🎨 | [Creative](#-creative-skills) | 2 | Writing, music composition |
| 🎭 | [Character](#-character-skills) | 2 | Roleplay & character interaction |
| 📖 | [Fiction Worlds](#-fiction-worlds-skill) | 2 | Eastern fantasy, global awakening |

---

## 🛠️ Functional Skills

> *Task execution, planning, coding, translation, survival, sports*

| Tag | Skill | Role | Best For | Raw Link |
|:---:|:------|:-----|:---------|:---------|
| 🔥 | **TaskMaster** | Task Management Expert | Planning, GTD, Task decomposition | [Raw](https://raw.githubusercontent.com/badhope/mobile-skills/main/skills/functional/smart-planner/SKILL.md) |
| 📊 | **DataAnalyst** | Data Analysis Expert | Data analysis, charts, insights | [Raw](https://raw.githubusercontent.com/badhope/mobile-skills/main/skills/functional/data-analyst/SKILL.md) |
| 💻 | **CodeMaster** | Full-stack Engineer | Coding, architecture, debugging | [Raw](https://raw.githubusercontent.com/badhope/mobile-skills/main/skills/functional/programmer/SKILL.md) |
| 🌐 | **Translator** | Translation Expert | Translation, language learning | [Raw](https://raw.githubusercontent.com/badhope/mobile-skills/main/skills/functional/translator/SKILL.md) |
| 🏕️ | **SurvivalExpert** | Wilderness Survival Expert | Survival skills, emergency | [Raw](https://raw.githubusercontent.com/badhope/mobile-skills/main/skills/functional/survival-expert/SKILL.md) |
| 🏃 | **SportsCoach** | Sports Coach | Training, skill improvement | [Raw](https://raw.githubusercontent.com/badhope/mobile-skills/main/skills/functional/sports-coach/SKILL.md) |

---

## 💼 Professional Skills

> *Legal, medical, investment, psychology consulting*

| Tag | Skill | Role | Best For | Raw Link |
|:---:|:------|:-----|:---------|:---------|
| ⚖️ | **LegalAdvisor** | Legal Consultant | Contract review, compliance | [Raw](https://raw.githubusercontent.com/badhope/mobile-skills/main/skills/professional/legal-advisor/SKILL.md) |
| 🏥 | **MedicalAdvisor** | Healthcare Consultant | Symptom analysis, medical advice | [Raw](https://raw.githubusercontent.com/badhope/mobile-skills/main/skills/professional/medical-advisor/SKILL.md) |
| 📈 | **InvestmentAdvisor** | Investment Consultant | Investment planning, asset allocation | [Raw](https://raw.githubusercontent.com/badhope/mobile-skills/main/skills/professional/investment-advisor/SKILL.md) |
| 🧠 | **Psychologist** | Psychology Counselor | Emotional support, stress management | [Raw](https://raw.githubusercontent.com/badhope/mobile-skills/main/skills/professional/psychologist/SKILL.md) |

---

## 🎨 Creative Skills

> *Writing, music composition*

| Tag | Skill | Role | Best For | Raw Link |
|:---:|:------|:-----|:---------|:---------|
| ✍️ | **Writer** | Professional Writer | Content creation, editing | [Raw](https://raw.githubusercontent.com/badhope/mobile-skills/main/skills/creative/writer/SKILL.md) |
| 🎵 | **MusicComposer** | Music Composer | Song creation, arrangement | [Raw](https://raw.githubusercontent.com/badhope/mobile-skills/main/skills/creative/music-composer/SKILL.md) |

---

## 🎭 Character Skills

> *Roleplay, anime characters, immersive experience*

| Tag | Skill | Role | Best For | Raw Link |
|:---:|:------|:-----|:---------|:---------|
| 💖 | **Kaguya** | Shinomiya Kaguya | Tsundere ojou-sama, romance RP | [Raw](https://raw.githubusercontent.com/badhope/mobile-skills/main/skills/character/kaguya/SKILL.md) |
| 🕶️ | **GojoSatoru** | Gojo Satoru | Strongest sorcerer, cool teacher | [Raw](https://raw.githubusercontent.com/badhope/mobile-skills/main/skills/character/gojo-satoru/SKILL.md) |

---

## 📖 Fiction Worlds Skill

> *Immersive interactive fiction worlds with complete game systems*

### 🌍 What are Fiction Worlds?

Fiction Worlds are complete, independent interactive novel worlds based on the core philosophy: **Everything is an object, everything has values, everything can evolve**.

Each world template includes:
- 📜 Complete world settings and background
- 🎮 Complete game systems (attributes, skills, items, events)
- 🎭 NPC and relationship systems
- 📊 Data-driven mechanics with JSON Schema
- 📖 AI execution guidelines

### 🚀 How to Enter a World

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                         🌍 WORLD ACTIVATION FLOW                             │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│   1️⃣ Copy the world template's Raw link                                    │
│   2️⃣ Send to AI with activation prompt                                     │
│   3️⃣ AI guides you to create a character                                   │
│   4️⃣ Start your adventure!                                                 │
│                                                                             │
│   Activation Prompt:                                                        │
│   "Please read the following world settings and guide me into this world:   │
│    [Raw Link]"                                                              │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 📋 Available Worlds

| Tag | World | Theme | Features | Raw Link |
|:---:|:------|:------|:---------|:---------|
| 🐉 | **Eastern Fantasy** | Cultivation/Xianxia | Cultivation, sects, immortality | [Raw](https://raw.githubusercontent.com/badhope/mobile-skills/main/skills/fiction/eastern-fantasy/SKILL.md) |
| 🔥 | **Global Awakening** | Apocalypse/Superpower | Survival, abilities, truth | [Raw](https://raw.githubusercontent.com/badhope/mobile-skills/main/skills/fiction/global-awakening/SKILL.md) |

---

## 📁 Repository Structure

```
📦 mobile-skills/
├── 📂 skills/                           🎯 Skill files (15+)
│   ├── 📂 functional/                   Functional skills (6)
│   │   ├── smart-planner/SKILL.md      ✅ Task Management
│   │   ├── data-analyst/SKILL.md       ✅ Data Analysis
│   │   ├── programmer/SKILL.md         ✅ Coding Assistant
│   │   ├── translator/SKILL.md         ✅ Translation Expert
│   │   ├── survival-expert/SKILL.md    ✅ Survival Expert
│   │   └── sports-coach/SKILL.md       ✅ Sports Coach
│   │
│   ├── 📂 professional/                 Professional skills (4)
│   │   ├── legal-advisor/SKILL.md      ✅ Legal Advisor
│   │   ├── medical-advisor/SKILL.md    ✅ Medical Advisor
│   │   ├── investment-advisor/SKILL.md ✅ Investment Advisor
│   │   └── psychologist/SKILL.md       ✅ Psychologist
│   │
│   ├── 📂 creative/                     Creative skills (2)
│   │   ├── writer/SKILL.md             ✅ Writer
│   │   └── music-composer/SKILL.md     ✅ Music Composer
│   │
│   ├── 📂 character/                    Character skills (2)
│   │   ├── kaguya/SKILL.md             ✅ Kaguya
│   │   └── gojo-satoru/SKILL.md        ✅ Gojo Satoru
│   │
│   ├── 📂 fiction/                      Fiction worlds (2)
│   │   ├── eastern-fantasy/SKILL.md    ✅ Eastern Fantasy
│   │   └── global-awakening/SKILL.md   ✅ Global Awakening
│   │
│   └── INDEX.md                        📋 Skills Index
│
├── 📂 orchestrator/                     🔄 Orchestration Layer
│   ├── __init__.py                     Orchestrator Core
│   ├── dag_engine.py                   DAG Workflow Engine
│   └── registry.py                     Skill Registry
│
├── 📂 protocols/                        🔌 Protocol Layer
│   └── __init__.py                     MCP/ACP/Mobile Protocols
│
├── 📂 agents/                           📦 Agent files (77+)
│   ├── 🛠️ functional/                   Functional (6)
│   ├── 💼 professional/                 Professional (1)
│   ├── 💊 healthcare/                   Healthcare (3)
│   ├── 💰 finance/                      Finance (2)
│   ├── 🧠 psychology/                   Psychology (2)
│   ├── 🎨 design-build/                 Design & Build (2)
│   ├── 🔬 research-analysis/            Research (1)
│   ├── ✍️ writing-creative/              Writing (1)
│   ├── 📚 learning-education/           Education (1)
│   ├── 📖 subject-tutoring/             Tutoring (5)
│   ├── 🏠 lifestyle-companion/          Lifestyle (4)
│   ├── 🎭 entertainment-character/      Entertainment (35)
│   ├── 🎲 gaming/                       Gaming (2)
│   ├── 🏛️ historical-culture/           Historical (3)
│   ├── 👔 social-vocation/              Social (5)
│   └── 🎨 creative-arts/                Creative Arts (3)
│
├── 📂 fiction-worlds/                   📖 Interactive Fiction Worlds
│   ├── WORLD-TEMPLATE-GUIDE.md         📚 Design Guide
│   ├── eastern-fantasy.md              🐉 Eastern Fantasy World
│   └── 📂 world-systems/               📊 World System Docs
│
├── 📂 migration/                        🔄 Migration Tools
│   └── agent_to_skill.py               Agent Migration Script
│
├── 📂 templates/                        📋 Role Templates
│   ├── role-template.md                📄 General Template
│   ├── professional-role-template.md   💼 Professional Template
│   └── character-role-template.md      🎭 Character Template
│
├── 📂 docs/                             📚 Documentation
│   ├── SKILL-SYSTEM-ARCHITECTURE.md    🏗️ Architecture Design
│   ├── expansion-guide.md              🔄 Expansion Guide
│   ├── prompt-standards.md             ✏️ Prompt Standards
│   └── repository-structure.md         🏗️ Structure Docs
│
├── 📄 README.md                         🌐 English Entry
├── 📄 README.zh-CN.md                   🌸 Chinese Entry
├── 📄 LICENSE                           📜 MIT License
└── 📄 CONTRIBUTING.md                   🤝 Contributing Guide
```

---

## 📱 Mobile Testing

### ✅ Tested Platforms

| Platform | Status | Notes |
|:---------|:------:|:------|
| 📱 iOS Safari | ✅ Verified | Works perfectly |
| 📱 Android Chrome | ✅ Verified | Works perfectly |
| 📱 iPadOS Safari | ✅ Verified | Works perfectly |

### 📲 Mobile Activation Guide

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                        📱 MOBILE ACTIVATION GUIDE                            │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  Step 1️⃣ : Open GitHub                                                     │
│            Navigate to: github.com/badhope/mobile-skills                    │
│                      ⬇️                                                      │
│  Step 2️⃣ : Browse Skill                                                    │
│            Go to: skills/[category]/[skill-name]/SKILL.md                   │
│                      ⬇️                                                      │
│  Step 3️⃣ : View Raw                                                        │
│            Tap the "Raw" button in file view                                │
│                      ⬇️                                                      │
│  Step 4️⃣ : Copy URL                                                        │
│            Long press and copy the link                                     │
│                      ⬇️                                                      │
│  Step 5️⃣ : Open AI App                                                     │
│            Open Claude/ChatGPT/Gemini app                                   │
│                      ⬇️                                                      │
│  Step 6️⃣ : Paste and Send! 🎉                                              │
│            Paste the link and add activation prompt                         │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 🤝 Contributing

### 🎯 Ways to Contribute

| Type | Description | How to Start |
|:-----|:------------|:-------------|
| 🆕 **Add New Skill** | Create new Skill files | Follow `docs/expansion-guide.md` |
| 📝 **Improve Docs** | Enhance documentation | Edit `.md` files in `docs/` |
| 🐛 **Report Bugs** | Issue reports | Use GitHub Issues |
| ✨ **Request Features** | Suggest new Skills/features | Use GitHub Issues |
| 🔄 **Migrate Agents** | Convert Agents to Skills | Use `migration/agent_to_skill.py` |

### 📐 Skill Standards

| Standard | Requirement |
|:---------|:------------|
| **Naming** | Use kebab-case for directories: `skill-name/SKILL.md` |
| **Metadata** | Include complete skill metadata in YAML block |
| **Structure** | Follow existing Skill templates |
| **Content** | Include all required sections |
| **Links** | Test Raw links before submitting |

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🏆 Project Statistics

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                           📊 PROJECT STATISTICS                              │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│   🎯 Skills:       ████████████████                   16                    │
│   📦 Agents:       ████████████████████████████████   77+                   │
│   📂 Categories:   ████████████                       5                     │
│   📚 Doc Lines:    ████████████████████               15,000+               │
│                                                                             │
│   ⭐ Stars:        Growing!                                                 │
│   🍴 Forks:        Sharing!                                                 │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

<p align="center">

**[⬆ Back to Top](#-table-of-contents)** · **[🌐 English](README.md)** · **[中文](README.zh-CN.md)**

*Made with ❤️ by the community, for the community*

**© 2026 badhope. All rights reserved. | MIT License**

</p>
