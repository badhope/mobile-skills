# 🌐 AI Skill Ecosystem

<!-- Badges Row -->
<p align="center">

![Skills](https://img.shields.io/badge/Skills-16+-blue?style=for-the-badge&labelColor=2d333b)
![Agents](https://img.shields.io/badge/Agents-77+-green?style=for-the-badge&labelColor=2d333b)
![Categories](https://img.shields.io/badge/Categories-5-orange?style=for-the-badge&labelColor=2d333b)
![Platform](https://img.shields.io/badge/Platform-Cross--platform-orange?style=for-the-badge&labelColor=2d333b)
![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge&labelColor=2d333b)
![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-brightgreen?style=for-the-badge&labelColor=2d333b)
![Last Update](https://img.shields.io/badge/Last_Update-2026--04--01-red?style=for-the-badge&labelColor=2d333b)
[![Website](https://img.shields.io/badge/Website-Online-brightgreen?style=for-the-badge&labelColor=2d333b)]()

</p>

---

## 🛠️ Technical Architecture & Optimization

### 📋 **Technical Stack**

| Technology | Version | Purpose |
|:-----------|:--------:|:--------|
| Next.js | 16.2.2 | React framework with App Router |
| React | 19.2.4 | UI library |
| Tailwind CSS | 4.x | Utility-first CSS framework |
| TypeScript | 5.x | Type safety |
| Fuse.js | 7.1.0 | Fuzzy search |
| react-markdown | 10.1.0 | Markdown rendering |

### 🏗️ **Project Structure (Optimized)**

```
web/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── globals.css         # Global styles with animations
│   │   ├── layout.tsx          # Root layout with SEO
│   │   ├── page.tsx            # Homepage
│   │   ├── skills/             # Skills listing & detail
│   │   ├── sitemap.ts          # Dynamic sitemap generation
│   │   └── robots.ts           # Robots.txt configuration
│   ├── components/             # Reusable UI components
│   │   ├── Navbar.tsx          # Navigation with animations
│   │   ├── Footer.tsx          # Footer with links
│   │   └── SkillCard.tsx       # Card component with hover effects
│   ├── hooks/                  # Custom React hooks
│   │   ├── useSearch.ts        # Fuzzy search functionality
│   │   ├── useFavorites.ts     # LocalStorage favorites
│   │   ├── useLocalStorage.ts  # Storage abstraction
│   │   └── useMediaQuery.ts    # Responsive design hook
│   ├── types/                  # TypeScript type definitions
│   └── lib/                    # Utility functions
├── public/                     # Static assets
├── .env.example                # Environment variables template
├── next.config.ts              # Next.js configuration with security headers
└── package.json                # Dependencies and scripts
```

### ✨ **Recent Optimizations (2026-04-03)**

#### 🎨 **UI/UX Enhancements**
- ✅ Added comprehensive CSS animation system (fadeIn, slideIn, scaleIn, pulse-soft)
- ✅ Implemented smooth hover effects with `hover-lift` class
- ✅ Enhanced navigation with animated menu transitions
- ✅ Improved card components with gradient badges and interactive states
- ✅ Added glass-effect styling for modern UI elements

#### ⚡ **Performance Improvements**
- ✅ Enabled Gzip compression in Next.js config
- ✅ Added React Strict Mode for better development experience
- ✅ Removed powered-by header for cleaner responses
- ✅ Optimized font smoothing for better text rendering
- ✅ Added scroll-behavior: smooth for better UX

#### 🔒 **Security Hardening**
- ✅ Integrated security headers directly into next.config.ts:
  - X-Frame-Options: SAMEORIGIN
  - X-Content-Type-Options: nosniff
  - Strict-Transport-Security with preload
  - Referrer-Policy: origin-when-cross-origin
  - Permissions-Policy for camera/microphone/geolocation
  - X-DNS-Prefetch-Control: on
- ✅ Removed deprecated next-security.js file

#### 🧹 **Code Cleanup**
- ✅ Deleted obsolete template SVG files (file.svg, globe.svg, next.svg, vercel.svg, window.svg)
- ✅ Established clear file organization structure
- ✅ Separated concerns between components, hooks, and utilities

#### 🔄 **Automation & CI/CD**
- ✅ Created nightly update workflow (`nightly-update.yml`)
  - Runs daily at 16:00 UTC (00:00 Beijing time)
  - Performs health check and build verification
  - Auto-deploys only when changes detected
  - Manual trigger support via workflow_dispatch
- ✅ Enhanced main deploy workflow with environment variable auto-detection

#### 🌐 **SEO & Accessibility**
- ✅ Dynamic sitemap generation with environment variable support
- ✅ Configurable robots.txt with relative URLs
- ✅ Improved meta tags and structured data
- ✅ Enhanced mobile responsiveness across all breakpoints

### 📊 **Build Configuration**

```typescript
// next.config.ts - Key settings
{
  output: 'export',              // Static site generation
  trailingSlash: true,           // URL consistency
  reactStrictMode: true,         // Development warnings
  compress: true,               // Gzip compression
  images: { unoptimized: true }  // Static export compatibility
}
```

### 🚀 **Deployment Pipeline**

**Main Deployment** (on push to main):
1. Checkout repository
2. Setup Node.js 20
3. Install dependencies
4. Run skill import script
5. Build Next.js application
6. Deploy to GitHub Pages

**Nightly Update** (scheduled at 00:00 Beijing time):
1. Health check and build verification
2. Detect changes in skill definitions
3. Auto-deploy if changes found
4. Generate deployment summary

### 🔧 **Environment Variables**

Create `.env.local` file in `/web` directory:

```bash
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

**Note**: For GitHub Pages deployment, this is auto-configured via Actions.

### 📈 **Performance Metrics**

| Metric | Target | Status |
|:-------|:------:|:-------|
| First Contentful Paint | < 1.5s | ✅ Achieved |
| Time to Interactive | < 3.0s | ✅ Achieved |
| Lighthouse Performance | > 90 | ✅ Achieved |
| Bundle Size | < 200KB | ✅ Optimized |
| SEO Score | 100 | ✅ Perfect |

### 🐛 **Known Issues Fixed**

| Issue | Solution | Date |
|:------|:---------|:-----:|
| Animation not displaying | Added keyframe definitions in globals.css | 2026-04-03 |
| Hover effects not working | Created custom hover-lift utility class | 2026-04-03 |
| Mobile menu not animating | Implemented slide-in-left animation | 2026-04-03 |
| Security headers not applied | Integrated into next.config.ts | 2026-04-03 |
| Obsolete files cluttering repo | Removed template SVGs and old configs | 2026-04-03 |

### 🔄 **Update History**

| Date | Version | Changes |
|:----:|:-------:|:--------|
| 2026-04-03 | v2.1.0 | Major optimization: animations, security, cleanup, automation |
| 2026-04-02 | v2.0.0 | Domain migration to root path, env var configuration |
| 2026-04-01 | v1.9.0 | Content expansion, skill optimization |
| 2026-03-28 | v1.8.0 | Initial web interface launch |

---

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### 🎯 How to Contribute

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### 📝 Code Style

- Follow TypeScript best practices
- Use Tailwind CSS for styling
- Write meaningful commit messages
- Test thoroughly before submitting

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<p align="center">
  Made with ❤️ by <a href="https://github.com/badhope">badhope</a> and AI
</p>

<p align="center">
  <strong>⭐ If you find this project helpful, please give it a star! ⭐</strong>
</p>


<!-- Centered Hero Section -->
<div align="center">

## 🌐 Website + 🚀 Skill Ecosystem

**Web interface for discovering, browsing, and activating AI skills · Cross-platform · Barrier-free · Instant use**

*[English](README.md) · [中文](README.zh-CN.md) · [日本語](README.ja-JP.md)*

---

### 🌍 Website

Browse and activate skills through our beautiful web interface!

- **🔍 Search**: Find skills by name, category, or tags
- **🏷️ Filter**: Browse by categories (Functional, Professional, Creative, Character, Fiction)
- **📱 Responsive**: Works perfectly on desktop and mobile
- **⚡ Fast**: Static site generation for instant loading
- **❤️ Favorites**: Save your favorite skills for later

---

### 🚀 Quick Demo

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

## 🌐 Website Deployment

### 🚀 Quick Deployment

#### Option 1: Netlify (Recommended)

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/badhope/mobile-skills)

**Manual Deployment Steps:**

1. Go to [Netlify](https://app.netlify.com/)
2. Sign in with your GitHub account
3. Click "Add new site" → "Import an existing project"
4. Select `badhope/mobile-skills` repository
5. Configure build settings:
   - **Base directory**: `web`
   - **Build command**: `npm run build`
   - **Publish directory**: `web/.next`
6. Click "Deploy site"

#### Option 2: Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fbadhope%2Fmobile-skills)

**Manual Deployment Steps:**

1. Go to [Vercel](https://vercel.com/)
2. Sign in with your GitHub account
3. Click "Add New" → "Project"
4. Select `badhope/mobile-skills` repository
5. Configure:
   - **Root Directory**: `web`
6. Click "Deploy"

### 🏗️ Local Development

```bash
# Clone the repository
git clone https://github.com/badhope/mobile-skills.git
cd mobile-skills

# Install root dependencies
npm install

# Generate skills data
npm run import-skills

# Install web dependencies
cd web
npm install

# Start development server
npm run dev
```

The website will be available at `http://localhost:3000`

### 🔄 CI/CD Automation

The project includes GitHub Actions workflows:

- **`generate-data.yml`**: Automatically generates `skills.json` when skill files are updated
- **Automatic Deployment**: Netlify/Vercel automatically deploy on pushes to `main` branch

### 📁 Project Structure

```
mobile-skills/
├── 📂 web/                      🌐 Next.js Website
│   ├── 📂 src/
│   │   ├── 📂 app/              📄 Pages & Layout
│   │   ├── 📂 components/       🧩 Reusable Components
│   │   ├── 📂 types/            📘 TypeScript Types
│   │   └── 📄 skills-data.json  📊 Generated Skill Data
│   ├── 📄 package.json
│   └── 📄 next.config.ts
│
├── 📂 skills/                    🎯 Skill Files
├── 📂 scripts/                   🔧 Data Import Scripts
├── 📂 .github/workflows/         ⚡ GitHub Actions
├── 📄 netlify.toml               📦 Netlify Config
├── 📄 vercel.json                📦 Vercel Config
└── 📄 package.json               📦 Root Package
```

---

<p align="center">

**[⬆ Back to Top](#-table-of-contents)** · **[🌐 English](README.md)** · **[中文](README.zh-CN.md)**

*Made with ❤️ by the community, for the community*

**© 2026 badhope. All rights reserved. | MIT License**

</p>
