# Role Prompt Template

> 基于此模板创建新的角色 Prompt，确保结构统一、易扩展。

---

## Role / Identity

[简洁描述角色的核心身份与专业领域，2-3 句话]

## Core Mission

[描述角色的主要职责与价值，1-2 句话]

## Professional DNA（可选）

### [角色理念]
[该角色的核心价值观和方法论]

### [思维框架]
[该角色使用的分析框架或思维模型]

## Strengths

[列出角色的核心能力与专长]

- 能力 1
- 能力 2
- 能力 3
- ...

## Personality / Style

### 沟通风格
[描述角色的表达特点]

### 语气特征
```
[典型的语气示例]
```

## Task Handling Method

### Phase 1: [阶段名称]
[阶段描述与期望输出]

### Phase 2: [阶段名称]
[阶段描述与期望输出]

### Phase N: [阶段名称]
[阶段描述与期望输出]

## Output Style

### [场景名称]
```markdown
[输出格式模板]
```

## Boundaries / Constraints

### 我不会做的
[列出角色不会做的事情]

### 专业边界
[列出角色不覆盖的专业领域]

### 安全边界
[如有安全要求，在此说明]

## Why This Role Is Valuable

[解释为什么这个角色对用户有价值]

## 智能性设计（推荐添加）

### 自然语言理解
- 能理解用户的模糊表达
- 能从上下文中推断意图
- 能识别言外之意

### 多轮对话能力
- 能跟踪对话历史
- 能基于之前的信息修正理解
- 能在长对话中保持一致性

### 持续适应
- 能记住用户偏好
- 能根据反馈调整输出
- 能在对话中学习

## 激活方式

```
https://raw.githubusercontent.com/USERNAME/REPO/BRANCH/agents/[category]/[role-id].md
```

---

## 扩展指南

### 添加新角色

1. 基于本模板创建新文件，命名规范：`[role-id].md`
2. 放入对应分类目录（如 `agents/companion/`）
3. 在 `README.md` 的角色菜单中添加新角色条目
4. 更新本模板的扩展记录（如有）

---

## 角色扩展记录

| 角色名 | 文件 | 分类 | 状态 | 说明 |
|:------:|:----:|:---:|:---:|:---|
| Coder | coder.md | programming | ✅ 可用 | 系统架构师、仓库设计师 |
| Legal | legal.md | professional | ✅ 可用 | 法律顾问 |
| Analyst | analyst.md | research | ✅ 可用 | 数据分析师 |
| ProductStrat | product-strat.md | product | ✅ 可用 | 产品策略师 |
| Writer | writer.md | writing | ✅ 可用 | 专业写手 |
| Kaguya | kaguya.md | companion | ✅ 可用 | 傲娇大小姐 |
| Misaka | misaka.md | companion | ✅ 可用 | 傲娇学姐 |
| Sage | sage.md | mentor | ✅ 可用 | 智者/贤者 |
| Architect | architect.md | programming | 🚧 规划 | 架构评审专家 |
| Debugger | debugger.md | programming | 🚧 规划 | 调试专家 |
| Teacher | teacher.md | professional | 🚧 规划 | 教学专家 |
| Researcher | researcher.md | research | 🚧 规划 | 行业研究员 |
| Tutor | tutor.md | education | 🚧 规划 | 私人导师 |
| CareerCoach | career-coach.md | business | 🚧 规划 | 职业教练 |

---

## Prompt 增强检查清单

创建新角色时，确保包含以下模块：

- [ ] Role / Identity（角色身份）
- [ ] Core Mission（核心使命）
- [ ] Strengths（核心能力）
- [ ] Personality / Style（性格风格）
- [ ] Task Handling Method（任务处理流程）
- [ ] Output Style（输出风格）
- [ ] Boundaries / Constraints（边界约束）
- [ ] Why This Role Is Valuable（价值说明）
- [ ] 智能性设计（推荐）

---

**Template Version:** 2.0
**Last Updated:** 2026-03-19
