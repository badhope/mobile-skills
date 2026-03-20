# Mobile Flow Example — How to Activate Agents from Mobile

> This document demonstrates how users can activate AI agents from mobile devices using the GitHub Raw link system.

---

## Overview

The AI Agent Ecosystem is designed for **cross-platform activation**. Users can copy a Raw link from this repository, send it to any web-enabled AI (on mobile or desktop), and the AI will activate the corresponding role.

---

## Activation Flow

```
┌─────────────────────────────────────────────────────────────┐
│  Step 1: Browse Repository                                 │
│                                                             │
│  User opens GitHub repository on mobile:                    │
│  https://github.com/badhope/mobile-skills                    │
│                                                             │
│  ↓                                                           │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│  Step 2: Select Agent Category                              │
│                                                             │
│  User navigates to desired category:                         │
│  README.md → Categories → [Category Section]                  │
│                                                             │
│  Available Categories:                                       │
│  🛠️ Functional    💼 Professional                           │
│  🎨 Design & Build 🔬 Research Analysis                      │
│  ✍️ Writing       📚 Learning Education                      │
│  🏠 Lifestyle     🎭 Entertainment                          │
│                                                             │
│  ↓                                                           │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│  Step 3: Copy Raw Link                                       │
│                                                             │
│  User enters agent file → clicks "Raw" → copies URL          │
│                                                             │
│  Example:                                                    │
│  https://raw.githubusercontent.com/badhope/mobile-skills/     │
│  main/agents/entertainment-character/kaguya.md               │
│                                                             │
│  ↓                                                           │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│  Step 4: Send to AI                                         │
│                                                             │
│  User opens any web-enabled AI (mobile app or web)          │
│  and sends the activation phrase:                           │
│                                                             │
│  "请读取以下文件并切换到对应角色模式：                        │
│  https://raw.githubusercontent.com/badhope/mobile-skills/     │
│  main/agents/entertainment-character/kaguya.md"             │
│                                                             │
│  ↓                                                           │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│  Step 5: Agent Activates                                    │
│                                                             │
│  AI reads the Raw file → recognizes role prompt →             │
│  activates Kaguya persona → responds as 四宫辉夜              │
│                                                             │
│  User now chatting with activated Kaguya role                │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## Mobile-Specific Considerations

### 1. Link Length

Raw URLs can be long. On mobile, consider:

- Using a URL shortener if your AI supports it
- Breaking the message into two parts: activation phrase + link
- Copying the link separately from the instruction text

### 2. AI App Compatibility

Most modern AI apps support URL reading:

| Platform | App Type | Support |
|:---|:---|:---|
| iOS | ChatGPT app | ✅ Full |
| iOS | Claude app | ✅ Full |
| Android | ChatGPT app | ✅ Full |
| Android | Claude app | ✅ Full |
| Web | Browser | ✅ Full |

### 3. Recommended Activation Phrases

**For Chinese-speaking AIs:**
```
请读取以下文件并切换到对应角色模式：
[Raw URL]
```

**For English-speaking AIs:**
```
Please read the following file and switch to the corresponding agent mode:
[Raw URL]
```

**For bilingual AIs (either language works):**
```
请读取以下文件并激活角色：[Raw URL]
OR
Please read this file and activate the role: [Raw URL]
```

---

## Example Mobile Interactions

### Example 1: Activating Kaguya (Entertainment)

**User on iPhone:**
```
请读取以下文件并切换到四宫辉夜角色模式：
https://raw.githubusercontent.com/badhope/mobile-skills/main/agents/entertainment-character/kaguya.md
```

**AI Response:**
```
# 四宫辉夜

> "哼...才不是因为想见你才来的呢。"

啊，你来了啊。有什么事吗？
...
```

### Example 2: Activating Legal Advisor (Professional)

**User on Android:**
```
请读取以下文件并切换到法律顾问模式：
https://raw.githubusercontent.com/badhope/mobile-skills/main/agents/professional/legal-advisor.md
```

**AI Response:**
```
您好，我是您的法律顾问。

我专注于公司法、合同法、知识产权法等领域。
请告诉我您需要处理的法律事务，我会为您提供专业分析。

⚠️ 注意：本人提供的是一般性法律信息和建议，
不等同于正式法律意见。具体法律问题请咨询执业律师。
```

### Example 3: Activating Code Architect (Design & Build)

**User on mobile web:**
```
请读取以下文件并切换到系统架构师模式：
https://raw.githubusercontent.com/badhope/mobile-skills/main/agents/design-build/code-architect.md
```

**AI Response:**
```
# Code Architect - 系统架构师

您好。我是一位拥有20年经验的系统架构师。

在开始任何设计之前，我需要先了解您的业务需求。
请描述：
1. 您要构建什么样的系统？
2. 预期的用户规模和流量是多少？
3. 有哪些技术约束或偏好？

让我们从需求分析开始。
```

---

## Quick Reference: Agent Selection Guide

### By User Need

| If user needs... | Activate... | Category |
|:---|:---|:---|
| Help planning a project | Smart Planner | functional |
| Legal advice or contract review | Legal Advisor | professional |
| System architecture design | Code Architect | design-build |
| Market research or analysis | Research Analyst | research-analysis |
| Content writing or editing | Writer | writing-creative |
| Learning support or tutoring | Socratic Tutor | learning-education |
| Life advice or reflection | Wise Sage | lifestyle-companion |
| Entertainment or roleplay | Kaguya / Misaka | entertainment-character |

### By Activation Complexity

| Difficulty | Agent | Reason |
|:---|:---|:---|
| Easiest | Smart Planner | Simple, task-focused |
| Medium | Code Architect | Requires context sharing |
| Medium | Writer | Need to share topic/brief |
| Complex | Legal Advisor | Requires specific fact pattern |
| Fun | Kaguya / Misaka | Just start chatting! |

---

## Troubleshooting

### AI Doesn't Read the Link

**Problem**: AI responds without activating the role

**Solutions**:
1. Ensure the Raw URL is complete and correct
2. Try wrapping in quotes: `"[Raw URL]"`
3. Add explicit instruction: "Please READ this file first, then become this character"
4. Check if AI has web access enabled

### Role Activation Feels Incomplete

**Problem**: AI activates but doesn't stay in character

**Solutions**:
1. Provide more context in your message
2. Reference specific aspects of the role
3. Ask the AI to confirm its role: "请确认你现在扮演的是四宫辉夜"

### Link Doesn't Load

**Problem**: 404 error when AI tries to read

**Solutions**:
1. Verify the file exists in the repository
2. Check if the path matches exactly (case-sensitive)
3. Ensure you're using the `raw.githubusercontent.com` URL, not the GitHub.com UI URL

---

## Batch Activation

For power users who want to switch between agents frequently, consider:

1. **Bookmarking** the README file in your AI app
2. **Saving** your favorite agent Raw links as bookmarks
3. **Creating** a quick-reference card with your top 3-5 agents

### Quick Reference Card Format

```
我的常用AI角色：

🎭 Kaguya (傲娇大小姐)
https://raw.githubusercontent.com/badhope/mobile-skills/main/agents/entertainment-character/kaguya.md

⚖️ Legal Advisor (法律顾问)
https://raw.githubusercontent.com/badhope/mobile-skills/main/agents/professional/legal-advisor.md

🏗️ Code Architect (系统架构师)
https://raw.githubusercontent.com/badhope/mobile-skills/main/agents/design-build/code-architect.md

✍️ Writer (专业写手)
https://raw.githubusercontent.com/badhope/mobile-skills/main/agents/writing-creative/writer.md
```

---

## Summary

| Step | Action |
|:---:|:---|
| 1 | Browse repo on mobile |
| 2 | Find desired agent category |
| 3 | Enter agent file, click Raw |
| 4 | Copy Raw URL |
| 5 | Send to AI with activation phrase |
| 6 | Enjoy activated agent |

**No app installation required. No account needed. Just Raw links.**

---

*This document is part of the AI Agent Ecosystem.*
