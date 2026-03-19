# AI Agent Navigation System

一个基于 Raw 链接的跨平台 AI 角色切换系统。无需插件、IDE 或本地环境，在任何支持联网的 AI 对话界面均可使用。

---

## 如何使用（4 步完成）

| 步骤 | 操作 |
|:---:|------|
| 1 | 复制下方 **README Raw 链接** 发送给 AI |
| 2 | AI 读取后展示角色菜单 |
| 3 | 选择角色，复制该角色的 **Raw 链接** |
| 4 | 发送给 AI，即可激活对应专家模式 |

---

## 角色菜单

| 角色 | 类型 | Raw 链接 |
|:---:|:---:|---------|
| **Coder** | 系统架构师、仓库设计师、代码设计专家 | `https://raw.githubusercontent.com/USERNAME/REPO/BRANCH/coder.md` |

---

## 推荐激活方式

直接在 AI 对话中发送：

```
请读取以下文件并切换到对应角色模式：
https://raw.githubusercontent.com/USERNAME/REPO/BRANCH/coder.md
```

AI 会自动读取并进入该角色模式。

---

## 手机端测试流程

1. 在 GitHub 网页打开本仓库
2. 点击 `coder.md` 文件
3. 点击 **Raw** 按钮获取 Raw 链接
4. 复制链接并发送给 AI
5. AI 激活后即可开始对话

---

## 文件结构

```
├── README.md                          ← 你在这里
├── coder.md                           ← 首个角色：Coder（系统架构师）
├── templates/
│   └── role-template.md              ← 角色 Prompt 模板
└── docs/
    └── interaction-example.md         ← 完整交互示例
```

---

## 扩展说明

如需添加新角色（如 writer、researcher），请基于 `templates/role-template.md` 创建新文件，并在本 README 的角色菜单中添加对应条目。

---

**Last updated:** 2026-03-19
