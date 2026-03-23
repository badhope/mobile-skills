# 🤝 Contributing to AI Agent Ecosystem

Welcome! We're excited that you're interested in contributing to the AI Agent Ecosystem project. This document provides guidelines and instructions for contributing.

---

## 📋 Table of Contents

| Section | Description |
|:--------|:------------|
| [🎯 Ways to Contribute](#-ways-to-contribute) | How you can help |
| [🚀 Getting Started](#-getting-started) | Quick start guide |
| [📐 Standards](#-standards) | Code and documentation standards |
| [🐛 Reporting Bugs](#-reporting-bugs) | Bug report guidelines |
| [✨ Requesting Features](#-requesting-features) | Feature request guidelines |
| [📝 Pull Request Process](#-pull-request-process) | How to submit PRs |
| [🏷️ Git Branch Strategy](#-git-branch-strategy) | Branch naming conventions |
| [✅ Checklist](#-checklist) | PR submission checklist |

---

## 🎯 Ways to Contribute

### 🆕 Add New Agents

| Category | Description | Template |
|:---------|:------------|:---------|
| Functional | Task execution, planning tools | [Template](./templates/role-template.md) |
| Professional | Legal, medical, financial experts | [Template](./templates/professional-role-template.md) |
| Entertainment | Anime characters, roleplay | [Template](./templates/character-role-template.md) |

**Steps to add a new agent:**

```
1. Create a new .md file in the appropriate category folder
2. Follow the template structure
3. Include YAML metadata header
4. Test the Raw link
5. Submit a PR
```

### 📝 Improve Documentation

| Document Type | Location | Priority |
|:--------------|:---------|:---------|
| README files | Root directory | High |
| Templates | `/templates/` | High |
| Guides | `/docs/` | Medium |
| Examples | `/examples/` | Medium |

### 🐛 Report Bugs

Please report bugs via [GitHub Issues](https://github.com/badhope/mobile-skills/issues) with the bug report template.

### ✨ Request Features

Feature requests are welcome! Please use [GitHub Discussions](https://github.com/badhope/mobile-skills/discussions) to propose new features.

### 🌍 Translate

Help us translate the project into more languages:

| Language | Status | Files to Translate |
|:----------|:-------|:-------------------|
| English | ✅ Complete | N/A |
| Chinese (Simplified) | ✅ Complete | N/A |
| Japanese | 🔄 In Progress | README.ja-JP.md |
| Korean | ❌ Needed | All docs |
| Spanish | ❌ Needed | All docs |

---

## 🚀 Getting Started

### Prerequisites

| Requirement | Version | Notes |
|:------------|:--------|:------|
| Git | Latest | For version control |
| Text Editor | Any | VS Code recommended |
| Browser | Modern | For testing Raw links |

### Setup Steps

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                           🚀 QUICK START                                    │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  1️⃣  FORK                                                                     │
│      ────────────────────────────────────────────                           │
│      Click the "Fork" button on GitHub                                       │
│                                                                             │
│                         ⬇️                                                  │
│                                                                             │
│  2️⃣  CLONE                                                                   │
│      ────────────────────────────────────────────                           │
│      git clone https://github.com/[your-username]/mobile-skills.git         │
│                                                                             │
│                         ⬇️                                                  │
│                                                                             │
│  3️⃣  CREATE BRANCH                                                          │
│      ────────────────────────────────────────────                           │
│      git checkout -b feature/add-new-agent                                  │
│                                                                             │
│                         ⬇️                                                  │
│                                                                             │
│  4️⃣  MAKE CHANGES                                                           │
│      ────────────────────────────────────────────                           │
│      Edit files following the guidelines                                    │
│                                                                             │
│                         ⬇️                                                  │
│                                                                             │
│  5️⃣  COMMIT & PUSH                                                          │
│      ────────────────────────────────────────────                           │
│      git commit -m "feat: add [agent-name]"                                 │
│      git push origin feature/add-new-agent                                   │
│                                                                             │
│                         ⬇️                                                  │
│                                                                             │
│  6️⃣  OPEN PR                                                                │
│      ────────────────────────────────────────────                           │
│      Create Pull Request on GitHub                                          │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 📐 Standards

### File Naming

| Type | Convention | Example |
|:-----|:-----------|:--------|
| Agent files | kebab-case | `smart-planner.md` |
| Category folders | kebab-case | `lifestyle-companion/` |
| Documentation | kebab-case | `contribution-guide.md` |

### YAML Metadata

Every agent file must include this metadata block:

```yaml
agent_id: unique-agent-id
category: category-folder-name
language: zh
description: Brief description in Chinese
best_for: Main use cases
activation_prompt: Please read and switch to [Role] mode:
```

### Required Sections

| Section | Description | Required |
|:--------|:------------|:---------|
| Role / Identity | Core identity description | ✅ |
| Core Mission | Primary responsibilities | ✅ |
| Strengths | Core capabilities | ✅ |
| Personality / Style | Communication style | ✅ |
| Task Handling Method | How tasks are processed | ✅ |
| Output Style | Output format guidelines | ✅ |
| Boundaries / Constraints | What the agent won't do | ✅ |
| Why This Role Is Valuable | Value proposition | ✅ |

---

## 🐛 Reporting Bugs

### Bug Report Template

```markdown
## 🐛 Bug Description
[Clear and concise description of the bug]

## 📍 Steps to Reproduce
1. Go to '...'
2. Click on '...'
3. See error

## ✅ Expected Behavior
[What should happen]

## ❌ Actual Behavior
[What actually happens]

## 🖥️ Environment
- OS: [e.g., iOS 16.5]
- Browser: [e.g., Safari]
- AI Assistant: [e.g., Claude App]
- Raw Link: [URL if applicable]

## 📸 Screenshots
[If applicable, add screenshots]

## 📎 Additional Context
[Any other relevant information]
```

### Bug Priority Levels

| Priority | Description | Response Time |
|:---------|:------------|:--------------|
| 🔴 Critical | Project doesn't load, major features broken | 24 hours |
| 🟠 High | Important feature not working | 48 hours |
| 🟡 Medium | Feature working but with issues | 1 week |
| 🟢 Low | Minor issues, cosmetic | Next release |

---

## ✨ Requesting Features

### Feature Request Template

```markdown
## ✨ Feature Description
[Clear description of the feature]

## 👤 Use Case
[Who would use this feature and why?]

## 💡 Proposed Solution
[Your idea for implementation]

## 🔄 Alternatives Considered
[Any alternative solutions you've considered]

## 📊 Impact
- [ ] New agents (how many?)
- [ ] Breaking changes
- [ ] Documentation updates needed
```

### Feature Categories

| Category | Description |
|:---------|:------------|
| 🆕 **New Agent** | Add a completely new agent |
| 🔄 **Agent Enhancement** | Improve an existing agent |
| 📝 **Documentation** | Add or improve docs |
| 🛠️ **Tooling** | Improve development tools |
| 🌍 **Internationalization** | Add new language support |

---

## 📝 Pull Request Process

### PR Title Convention

```
type(scope): description
```

| Type | Use Case |
|:-----|:---------|
| `feat` | New feature or agent |
| `fix` | Bug fix |
| `docs` | Documentation changes |
| `style` | Formatting, no code change |
| `refactor` | Code refactoring |
| `test` | Adding tests |
| `chore` | Maintenance tasks |

**Examples:**

```
feat(entertainment): add kaguya agent
fix(functional): update smart-planner template
docs: update contribution guidelines
```

### PR Description Template

```markdown
## 📝 Description
[Description of changes]

## 🐛 Related Issue
[Link to related issue, e.g., "Fixes #123"]

## 📋 Changes Made
- [ ] Added [new agent/files]
- [ ] Updated [existing files]
- [ ] Fixed [bugs]
- [ ] Updated documentation

## ✅ Testing
- [ ] Tested Raw links work
- [ ] Tested on mobile
- [ ] Verified YAML metadata
- [ ] Checked for broken links

## 📸 Screenshots
[If applicable]
```

### Code Review Standards

| Standard | Requirement |
|:---------|:------------|
| ✅ Title | Clear, descriptive |
| ✅ Description | Explains what and why |
| ✅ Tests | Changes tested |
| ✅ Documentation | Docs updated |
| ✅ Raw Links | All links work |
| ✅ No Conflicts | No merge conflicts |

---

## 🏷️ Git Branch Strategy

### Branch Naming

| Type | Pattern | Example |
|:-----|:--------|:--------|
| Feature | `feature/[name]` | `feature/add-kaguya-agent` |
| Bug Fix | `fix/[issue-id]-[name]` | `fix/123-update-template` |
| Documentation | `docs/[name]` | `docs/improve-readme` |
| Translation | `i18n/[language]` | `i18n/japanese-readme` |

### Branch Flow

```
main (production)
  │
  ├── feature/add-new-agent
  │     └── PR → main
  │
  ├── fix/bug-description
  │     └── PR → main
  │
  └── docs/update-guides
        └── PR → main
```

---

## ✅ Checklist

Before submitting a PR, please ensure:

### General

- [ ] Fork created from correct repository
- [ ] Branch name follows conventions
- [ ] Commits are atomic and descriptive
- [ ] No merge conflicts

### Agent Files

- [ ] YAML metadata complete and valid
- [ ] File name uses kebab-case
- [ ] All required sections included
- [ ] Content is well-formatted
- [ ] Raw link tested and works

### Documentation

- [ ] README updated if needed
- [ ] No broken links
- [ ] Consistent formatting
- [ ] Multi-language if applicable

### Quality

- [ ] No placeholder text
- [ ] No TODO comments
- [ ] Consistent style
- [ ] Clear and concise

---

## 📞 Getting Help

| Channel | Use Case | Link |
|:--------|:---------|:-----|
| 🐛 Issues | Bug reports | [GitHub Issues](https://github.com/badhope/mobile-skills/issues) |
| 💬 Discussions | Questions, ideas | [GitHub Discussions](https://github.com/badhope/mobile-skills/discussions) |
| 📖 Wiki | Documentation | [Wiki](https://github.com/badhope/mobile-skills/wiki) |

---

## 🙏 Thank You

Thank you for contributing to the AI Agent Ecosystem project! Every contribution helps make this project better for everyone.

---

<p align="center">

**🎉 Welcome aboard! We're looking forward to your contributions!**

*Built with ❤️ by the community, for the community*

</p>