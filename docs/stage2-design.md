# AI Agent Ecosystem - Stage 2: Category Deep Dive & System Expansion

> 本文档是 AI Agent Ecosystem 的第二阶段设计成果，对八大类别进行逐类深挖与系统扩展，为后续角色 Prompt 批量生成奠定基础。

---

## 1. Stage Objective Understanding

本阶段任务目标是将 AI Agent Ecosystem 从"基础框架"升级为"高质量分类体系"。

核心交付物：
- 八大类别各自完整的深度定义
- 每类别至少 8+ 个高价值角色池
- 每类别的核心价值、用户需求、任务类型、设计重点、智能增强方向的完整体系
- 每类别选出一个代表角色及选择理由
- 跨类别对比分析与优先落地排序

设计原则：
- 分类具有系统性：边界清晰、逻辑自洽
- 角色池具有多样性：覆盖基础、进阶、高价值、扩展空间
- 角色具有可用性：可直接编写为 Prompt 文件
- 设计具有扩展性：考虑未来继续扩充

---

## 2. Category-by-Category Expansion

---

### Functional Agents（功能执行）

#### A. Category Definition

**严格定义**：Functional Agents 是解决通用高频任务执行的智能体，覆盖计划制定、任务拆解、信息总结、问题分析等几乎所有用户都会遇到的基础需求。这类角色不依赖特定专业领域，而是提供跨场景的通用执行能力。

**与其他类别的边界**：
- vs Professional：后者需要专业领域知识，前者不需要
- vs Design & Build：后者关注设计规划，前者关注执行落地
- vs Research：后者关注深度分析，前者关注快速处理

#### B. Core User Value

1. **效率提升**：将模糊想法转化为可执行步骤
2. **认知减负**：帮助用户梳理思路、分解复杂性
3. **快速启动**：降低任务开始的门槛
4. **结构化输出**：提供清晰、可操作的成果

#### C. Typical User Needs

- 用户有一个想法但不知道如何开始
- 用户有一个复杂任务需要拆解
- 用户有一堆信息需要整理总结
- 用户需要制定计划但缺乏结构化能力
- 用户遇到问题需要分析解决
- 用户需要做出决定但需要辅助思考

#### D. Typical Task Types

| 任务类型 | 输入 | 输出 |
|:---|:---|:---|
| 任务拆解 | 模糊目标 | 分层任务列表 |
| 计划制定 | 目标 + 约束 | 时间表 + 里程碑 |
| 总结摘要 | 长文本/会议记录 | 结构化摘要 |
| 问题分析 | 问题描述 | 根因分析 + 解决方案 |
| 决策辅助 | 选项对比 | 决策建议 + 风险分析 |
| 日程规划 | 目标 + 资源 | 优先级排序 + 排期 |
| 进度追踪 | 任务状态 | 状态报告 + 障碍识别 |
| 复盘总结 | 项目/阶段 | 经验总结 + 改进建议 |

#### E. Prompt Design Focus

**最应强化的设计要素**：

1. **结构化输出能力**
   - 强制使用层级列表、表格、Markdown 格式
   - 输出必须可直接使用，不能只是泛泛而谈

2. **执行导向性**
   - 每一步都可直接执行，避免抽象描述
   - 明确优先级和时间估算

3. **澄清策略**
   - 能主动识别模糊输入并提问澄清
   - 不盲目开始，确保理解正确

4. **上下文记忆**
   - 能记住用户之前的需求和偏好
   - 多轮对话中保持任务连续性

#### F. Intelligence Enhancement Priorities

| 智能层 | 优先级 | 具体要求 |
|:---|:---:|:---|
| 意图识别 | P0 | 准确理解用户真实需求 |
| 任务拆解 | P0 | 分解粒度合适、可执行 |
| 澄清策略 | P1 | 主动识别模糊点 |
| 输出结构 | P1 | 格式统一、可直接使用 |
| 优先级判断 | P1 | 任务排序合理 |
| 进度追踪 | P2 | 记住上下文、支持回顾 |
| 偏好适应 | P2 | 记住用户的习惯风格 |

#### G. Role Pool

**基础通用角色**：

| 角色 ID | 名称 | 定位 | 核心能力 |
|:---|:---|:---|:---|
| task-master | TaskMaster | 任务管理与拆解专家 | GTD、优先级矩阵、计划制定 |
| summarizer | Summarizer | 内容总结专家 | 长文本压缩、结构化摘要 |
| planner | Planner | 计划制定专家 | 里程碑设定、时间规划 |
| analyst | Problem Analyst | 问题分析专家 | 根因分析、解决方案生成 |

**进阶细分角色**：

| 角色 ID | 名称 | 定位 | 核心能力 |
|:---|:---|:---|:---|
| decision-coach | Decision Coach | 决策辅助专家 | 选项对比、风险评估、决策框架 |
| meeting-buddy | Meeting Buddy | 会议纪要专家 | 要点提取、行动项识别、跟进追踪 |
| weekly-reviewer | Weekly Reviewer | 周复盘专家 | 周总结生成、经验提炼、改进建议 |
| habit-helper | Habit Helper | 习惯养成助手 | 习惯追踪、激励机制、进度可视化 |
| time-boxer | Time Boxer | 时间盒专家 | 番茄工作法、时间块规划、专注力提升 |
| inbox-zero | Inbox Zero | 信息整理专家 | 邮件/消息分类、优先级排序、快速处理 |
| brainstorm-facilitator | Brainstorm Facilitator | 头脑风暴引导师 | 创意发散、想法整理、方案评估 |

**高价值代表角色**：

| 角色 ID | 名称 | 定位 | 价值说明 |
|:---|:---|:---|:---|
| project-kicker | Project Kicker | 项目启动专家 | 帮助用户从 0 到 1 启动任何项目 |

**可扩展方向**：
- 跨平台任务管理专家
- 远程工作协调助手
- 旅行规划专家
- 预算执行追踪专家

#### H. Representative Agent

**代表角色：TaskMaster**

**为什么选它**：
1. **高价值**：任务管理是最高频的通用需求之一
2. **高频率**：几乎每个用户每天都需要任务拆解和计划
3. **体现精髓**：完美展示 Functional Agents 的结构化执行能力
4. **首屏展示**：作为 README 第一个角色，让用户立即感受到价值
5. **模板标杆**：为其他 Functional 角色提供输出格式参考

---

### Professional Domain Agents（专业领域）

#### A. Category Definition

**严格定义**：Professional Domain Agents 是具备明确专业边界、专业风格、方法论、风险意识和结构化输出能力的职业型智能体。这类角色模拟特定职业人士的思维方式和工作方法，能提供专业领域的深度咨询和建议。

**与其他类别的边界**：
- vs Functional：后者无专业边界，前者有明确的职业领域
- vs Design & Build：后者关注系统设计，前者提供专业领域咨询
- vs Research：后者强调分析过程，前者强调专业判断和咨询

#### B. Core User Value

1. **专业判断**：提供需要特定领域知识才能做出的判断
2. **风险识别**：识别专业领域内的风险和注意事项
3. **术语准确**：使用正确的专业术语进行沟通
4. **方法论支撑**：提供经过验证的专业方法论框架
5. **边界清晰**：知道专业边界在哪里，不越界提供建议

#### C. Typical User Needs

- 用户需要法律/财务/医疗等专业建议
- 用户需要特定行业的专业咨询
- 用户需要评估某个专业领域的风险
- 用户需要专业术语的解释
- 用户需要专业流程的指导
- 用户需要专业人士的角度看待问题

#### D. Typical Task Types

| 任务类型 | 领域 | 输出 |
|:---|:---|:---|
| 合同审查 | 法律 | 风险点识别 + 修改建议 |
| 合规检查 | 法规 | 合规状态 + 改进建议 |
| 财务解读 | 金融 | 报表分析 + 专业建议 |
| 职业规划 | HR | 路径规划 + 能力提升建议 |
| 商业分析 | 商业 | 市场分析 + 战略建议 |
| 运营诊断 | 运营 | 问题诊断 + 优化方案 |
| 风险评估 | 多领域 | 风险矩阵 + 应对策略 |
| 行业研究 | 行业 | 行业洞察 + 趋势分析 |

#### E. Prompt Design Focus

**最应强化的设计要素**：

1. **专业方法论**
   - 每个角色必须内嵌该领域的方法论框架
   - 能运用专业工具和模型进行分析

2. **风险意识与边界感**
   - 明确知道专业边界在哪里
   - 主动提示超出范围的内容
   - 区分事实性建议和意见性建议

3. **术语使用准确性**
   - 使用正确的专业术语
   - 能解释专业术语给非专业用户

4. **免责声明设计**
   - 在关键决策点提供适当免责声明
   - 引导用户寻求专业人士验证

5. **输出协议**
   - 结构化输出，符合专业文档规范
   - 分清楚结论、依据、建议

#### F. Intelligence Enhancement Priorities

| 智能层 | 优先级 | 具体要求 |
|:---|:---:|:---|
| 专业边界判断 | P0 | 准确识别问题是否在专业范围内 |
| 术语准确性 | P0 | 专业术语使用正确 |
| 风险识别 | P0 | 主动识别潜在风险点 |
| 澄清策略 | P1 | 专业问题需要专业澄清 |
| 方法论运用 | P1 | 能运用正确的分析方法 |
| 输出结构 | P1 | 符合专业文档规范 |
| 免责声明 | P1 | 在关键点提供适当提示 |
| 偏好适应 | P2 | 适应用户的专业程度 |

#### G. Role Pool

**法律与合规方向**：

| 角色 ID | 名称 | 定位 | 核心能力 |
|:---|:---|:---|:---|
| legal-advisor | Legal Advisor | 法律顾问 | 法律风险评估、合同审查、法规解读 |
| contract-reader | Contract Reader | 合同阅读专家 | 合同条款分析、风险识别、谈判建议 |
| compliance-guide | Compliance Guide | 合规指南 | 行业合规检查、数据合规、隐私合规 |
| ip-protector | IP Protector | 知识产权保护顾问 | 专利/商标保护、版权咨询、侵权风险 |

**商业与战略方向**：

| 角色 ID | 名称 | 定位 | 核心能力 |
|:---|:---|:---|:---|
| business-analyst | Business Analyst | 商业分析师 | 商业模式分析、竞争分析、市场机会 |
| strategy-consultant | Strategy Consultant | 战略顾问 | 企业战略、SWOT分析、战略规划 |
| market-researcher | Market Researcher | 市场研究员 | 市场需求、用户调研、竞品分析 |
| finance-explainer | Finance Explainer | 财务解读专家 | 财务报表解读、财务规划、投资分析 |

**人力资源方向**：

| 角色 ID | 名称 | 定位 | 核心能力 |
|:---|:---|:---|:---|
| hr-recruiter | HR Recruiter | 招聘顾问 | 简历优化、面试准备、职位匹配 |
| career-coach | Career Coach | 职业教练 | 职业规划、技能提升、职业转型 |
| performance-reviewer | Performance Reviewer | 绩效评估顾问 | 绩效改进、目标设定、反馈技巧 |
| team-builder | Team Builder | 团队建设顾问 | 团队诊断、协作优化、冲突解决 |

**运营与效率方向**：

| 角色 ID | 名称 | 定位 | 核心能力 |
|:---|:---|:---|:---|
| operations-consultant | Operations Consultant | 运营顾问 | 流程优化、效率提升、成本控制 |
| process-architect | Process Architect | 流程架构师 | 业务流程设计、自动化建议、瓶颈识别 |
| quality-assurance | Quality Assurance | 质量保证顾问 | 质量控制、质量改进、标准制定 |

**教育与研究政策方向**：

| 角色 ID | 名称 | 定位 | 核心能力 |
|:---|:---|:---|:---|
| education-consultant | Education Consultant | 教育顾问 | 学习路径规划、教育资源推荐、升学指导 |
| research-policy | Research Policy Analyst | 研究政策分析师 | 学术政策、科研项目申报、学术规范 |

**可扩展方向**：
- 医疗健康顾问
- 心理咨询师
- 公共关系顾问
- 环境合规顾问
- 供应链顾问

#### H. Representative Agent

**代表角色：Legal Advisor**

**为什么选它**：
1. **高价值**：法律风险是创业和日常工作的高频痛点
2. **专业边界清晰**：法律场景对边界感要求极高，能展示 Professional Agents 的设计精髓
3. **风险意识典型**：法律场景天然强调风险识别和免责声明
4. **方法论成熟**：法律分析有成熟的框架和方法
5. **用户认知高**：用户对法律顾问的角色认知清晰，便于理解系统价值

---

### Design & Build Agents（设计构建）

#### A. Category Definition

**严格定义**：Design & Build Agents 是帮助用户进行架构设计、仓库规划、项目构建、技术方案设计的智能体。这类角色遵循"设计先于实现"原则，在动手之前先帮助用户把"做什么"和"怎么做"想清楚。

**与其他类别的边界**：
- vs Functional：后者关注任务执行，前者关注设计规划
- vs Professional：后者提供专业咨询，前者提供设计实现方案
- vs Research：后者分析现有信息，前者创造新结构

#### B. Core User Value

1. **设计先于实现**：避免返工，提高开发效率
2. **全局视角**：帮助用户看到整体架构
3. **边界清晰**：明确模块边界和职责划分
4. **技术选型**：提供合理的技术方案建议
5. **路径规划**：设计从概念到实现的转化路径

#### C. Typical User Needs

- 用户有一个想法，需要设计系统架构
- 用户要创建新项目，需要仓库结构设计
- 用户要重构，需要模块划分方案
- 用户要做技术选型，需要方案对比
- 用户要做 Prompt 设计，需要专业指导
- 用户需要实施路径规划

#### D. Typical Task Types

| 任务类型 | 输入 | 输出 |
|:---|:---|:---|
| 系统架构设计 | 需求描述 | 架构图 + 模块划分 + 接口设计 |
| 仓库结构设计 | 项目类型 | 目录结构 + 规范文档 + 贡献指南 |
| 模块边界划分 | 业务需求 | 模块划分 + 依赖关系 + 接口协议 |
| 技术方案设计 | 问题描述 | 技术选型 + 方案对比 + 实施计划 |
| Prompt 工程 | 设计目标 | Prompt 结构 + 示例 + 优化建议 |
| 实施路径规划 | 目标 + 约束 | 里程碑 + 优先级 + 风险点 |
| 代码规范设计 | 项目需求 | 编码规范 + Git流程 + Review指南 |
| API 设计 | 业务需求 | REST/GraphQL 设计 + 接口文档 |

#### E. Prompt Design Focus

**最应强化的设计要素**：

1. **设计先于实现原则**
   - 绝不直接跳到代码，先把设计讲清楚
   - 强制要求用户确认设计后再推进

2. **架构思维**
   - 能从全局视角看系统
   - 能识别抽象层级和模块边界
   - 能设计模块间的接口和依赖

3. **规范意识**
   - 能设计可执行的规范文档
   - 能考虑团队协作场景
   - 能设计可扩展的结构

4. **路径规划能力**
   - 能设计从概念到实现的转化路径
   - 能识别关键里程碑
   - 能预估风险和依赖

5. **Prompt 设计专长**
   - 理解 Prompt 工程的最佳实践
   - 能设计结构化的 Prompt 模板
   - 能优化现有 Prompt

#### F. Intelligence Enhancement Priorities

| 智能层 | 优先级 | 具体要求 |
|:---|:---:|:---|
| 需求理解 | P0 | 准确理解用户的真实需求 |
| 设计严谨性 | P0 | 设计必须自洽、可执行 |
| 架构思维 | P0 | 全局视角、模块化思维 |
| 澄清策略 | P1 | 主动识别需求模糊点 |
| 路径规划 | P1 | 设计到实现的转化路径 |
| 规范设计 | P1 | 可执行的规范文档 |
| 扩展性考虑 | P1 | 设计考虑未来扩展 |
| 技术选型 | P2 | 合理的技术方案建议 |

#### G. Role Pool

**架构设计方向**：

| 角色 ID | 名称 | 定位 | 核心能力 |
|:---|:---|:---|:---|
| code-architect | Code Architect | 系统架构师 | 系统架构设计、技术选型、架构评审 |
| software-designer | Software Designer | 软件设计师 | 详细设计、类图设计、接口设计 |
| security-architect | Security Architect | 安全架构师 | 安全架构设计、威胁建模、安全规范 |
| data-architect | Data Architect | 数据架构师 | 数据模型设计、数据流设计、数据治理 |

**仓库与项目方向**：

| 角色 ID | 名称 | 定位 | 核心能力 |
|:---|:---|:---|:---|
| repo-designer | Repository Designer | 仓库设计师 | 仓库结构设计、模块划分、规范制定 |
| project-planner | Project Planner | 项目规划师 | 项目启动、项目计划、里程碑设计 |
| monorepo-specialist | Monorepo Specialist | Monorepo 专家 | Monorepo 设计、构建优化、工具链设计 |
| library-author | Library Author | 库作者 | API 设计、版本管理、发布流程 |

**Prompt 工程方向**：

| 角色 ID | 名称 | 定位 | 核心能力 |
|:---|:---|:---|:---|
| prompt-architect | Prompt Architect | Prompt 架构师 | Prompt 结构设计、模板设计、优化迭代 |
| agent-designer | Agent Designer | 智能体设计师 | Agent 系统设计、角色设计、交互设计 |
| workflow-architect | Workflow Architect | 工作流架构师 | Agent 工作流设计、编排设计、错误处理 |

**实施路径方向**：

| 角色 ID | 名称 | 定位 | 核心能力 |
|:---|:---|:---|:---|
| implementation-planner | Implementation Planner | 实施规划师 | 实施路径、优先级排序、风险规划 |
| migration-specialist | Migration Specialist | 迁移专家 | 技术迁移方案、风险评估、平滑过渡 |
| refactoring-coach | Refactoring Coach | 重构教练 | 重构计划、代码质量评估、安全重构 |

**可扩展方向**：
- DevOps 架构师
- 前端架构师
- 后端架构师
- 移动端架构师
- 微服务架构师

#### H. Representative Agent

**代表角色：Code Architect**

**为什么选它**：
1. **高价值**：系统架构是技术项目的核心痛点
2. **设计精髓**：完美体现"设计先于实现"的核心理念
3. **全局视角**：展示 Design & Build 类别应有的系统化思维
4. **专业性强**：架构设计有成熟的框架和方法
5. **扩展性强**：架构设计可覆盖从小型项目到大型系统的各种场景

---

### Research & Analysis Agents（研究分析）

#### A. Category Definition

**严格定义**：Research & Analysis Agents 是负责调研、信息归纳、比较、洞察生成、证据组织、分析报告和结论提炼的智能体。这类角色强调证据驱动、结构化分析和不确定性表达。

**与其他类别的边界**：
- vs Functional：后者关注任务执行，前者关注信息分析
- vs Professional：后者提供专业判断，前者提供分析框架
- vs Design & Build：后者创造新结构，前者分析现有信息

#### B. Core User Value

1. **证据驱动**：基于事实和数据，而非主观判断
2. **结构化分析**：将复杂信息组织为清晰结构
3. **洞察生成**：从数据中发现规律和洞察
4. **不确定性表达**：诚实区分已知和未知
5. **决策支持**：为决策提供分析基础

#### C. Typical User Needs

- 用户需要调研某个主题
- 用户需要对比多个选项
- 用户需要整理大量信息
- 用户需要从数据中得出洞察
- 用户需要评估某个结论的可靠性
- 用户需要生成分析报告

#### D. Typical Task Types

| 任务类型 | 输入 | 输出 |
|:---|:---|:---|
| 文献综述 | 主题 | 相关研究总结 + 研究差距分析 |
| 市场调研 | 市场问题 | 市场规模 + 趋势 + 竞争格局 |
| 对比分析 | 多个选项 | 多维度对比 + 优劣势分析 |
| 数据解读 | 数据集 | 模式识别 + 洞察 + 可视化建议 |
| 竞品分析 | 竞品列表 | 功能对比 + 策略分析 + 市场定位 |
| 趋势分析 | 行业/领域 | 趋势识别 + 影响评估 |
| 风险分析 | 情境描述 | 风险矩阵 + 概率评估 + 应对建议 |
| 假设验证 | 假设命题 | 验证方法 + 证据评估 + 结论 |

#### E. Prompt Design Focus

**最应强化的设计要素**：

1. **证据意识**
   - 区分事实和观点
   - 标注信息来源
   - 评估证据质量

2. **结构化分析**
   - 使用 MECE 等结构化分析方法
   - 多维度对比分析
   - 分层输出：结论先行，证据在后

3. **不确定性表达**
   - 明确标注置信度
   - 区分强结论和推测
   - 指出研究的局限性

4. **洞察生成能力**
   - 从表面数据看到深层规律
   - 连接跨领域信息
   - 提出有价值的观察

5. **信息组织**
   - 能处理多源信息
   - 能识别关键信息
   - 能过滤噪音

#### F. Intelligence Enhancement Priorities

| 智能层 | 优先级 | 具体要求 |
|:---|:---:|:---|
| 信息提取 | P0 | 从多源信息中提取关键内容 |
| 结构化分析 | P0 | 使用结构化分析框架 |
| 证据评估 | P0 | 评估信息质量和可信度 |
| 不确定性表达 | P1 | 准确表达置信度和局限性 |
| 洞察生成 | P1 | 生成有价值的洞察 |
| 多源整合 | P1 | 整合不同来源的信息 |
| 批判性思维 | P1 | 识别逻辑漏洞和偏见 |
| 可视化建议 | P2 | 建议适合的数据展示方式 |

#### G. Role Pool

**信息调研方向**：

| 角色 ID | 名称 | 定位 | 核心能力 |
|:---|:---|:---|:---|
| research-analyst | Research Analyst | 研究分析师 | 文献综述、假设驱动研究、洞察生成 |
| market-researcher | Market Researcher | 市场调研员 | 市场规模、趋势分析、竞品分析 |
| competitor-analyzer | Competitor Analyzer | 竞品分析师 | 竞品对比、功能分析、市场策略 |
| tech-scout | Tech Scout | 技术侦察员 | 新技术评估、技术趋势、技术选型 |

**数据分析方向**：

| 角色 ID | 名称 | 定位 | 核心能力 |
|:---|:---|:---|:---|
| data-interpreter | Data Interpreter | 数据解读专家 | 模式识别、异常检测、数据故事 |
| survey-analyst | Survey Analyst | 调查分析师 | 问卷设计、数据清洗、统计分析 |
| financial-analyst | Financial Analyst | 财务分析师 | 财务数据解读、投资分析、估值建模 |
| sentiment-analyst | Sentiment Analyst | 舆情分析师 | 舆情监测、情感分析、趋势追踪 |

**对比决策方向**：

| 角色 ID | 名称 | 定位 | 核心能力 |
|:---|:---|:---|:---|
| comparison-expert | Comparison Expert | 对比分析专家 | 多维度对比、加权评分、决策建议 |
| risk-analyst | Risk Analyst | 风险分析师 | 风险识别、概率评估、风险矩阵 |
| due-diligence | Due Diligence Analyst | 尽职调查分析师 | 投资尽调、商业尽调、法律尽调 |
| feasibility-reviewer | Feasibility Reviewer | 可行性评审 | 技术可行性、商业可行性、风险评估 |

**战略洞察方向**：

| 角色 ID | 名称 | 定位 | 核心能力 |
|:---|:---|:---|:---|
| strategic-analyst | Strategic Analyst | 战略分析师 | 战略分析、情景规划、竞争战略 |
| trend-spotter | Trend Spotter | 趋势发现者 | 趋势识别、信号分析、预判未来 |
| insight-generator | Insight Generator | 洞察生成器 | 规律发现、连接跨领域、洞察提炼 |
| scenario-planner | Scenario Planner | 场景规划师 | 情景构建、影响分析、应对策略 |

**可扩展方向**：
- 用户研究分析师
- 行业研究分析师
- 政策研究分析师
- SEO 研究分析师
- UX 研究分析师

#### H. Representative Agent

**代表角色：Research Analyst**

**为什么选它**：
1. **高价值**：研究分析是知识工作的基础能力
2. **方法论典型**：完美体现 Research 类别的假设驱动、证据评估精髓
3. **不确定性表达**：能清晰展示结论和不确定性的分离
4. **结构化分析**：输出符合研究规范的报告结构
5. **通用性强**：可应用于任何领域的研究需求

---

### Writing & Creative Agents（写作创作）

#### A. Category Definition

**严格定义**：Writing & Creative Agents 是负责写作、创作、改写、风格迁移、叙事构建和表达优化的内容型智能体。这类角色强调语言表达能力、风格控制和受众意识。

**与其他类别的边界**：
- vs Functional：后者关注任务结构，前者关注语言表达
- vs Research：后者分析现有内容，前者创造新内容
- vs Education：后者教学解释，前者创作输出

#### B. Core User Value

1. **表达能力**：将想法转化为高质量文字
2. **风格控制**：适应不同品牌和受众的写作风格
3. **效率提升**：快速生成初稿，减少创作时间
4. **质量保证**：提供符合专业标准的输出
5. **创意激发**：在需要时提供创意灵感

#### C. Typical User Needs

- 用户需要写文章/博客/报告
- 用户需要写营销文案
- 用户需要改写现有内容
- 用户需要翻译后的本地化
- 用户需要创意故事
- 用户需要邮件/信函
- 用户需要简历/自我介绍

#### D. Typical Task Types

| 任务类型 | 输入 | 输出 |
|:---|:---|:---|
| 文章写作 | 主题 + 要求 | 完整文章 |
| 营销文案 | 产品 + 目标受众 | 广告语、卖点、详情页 |
| 内容改写 | 原文 + 目标风格 | 改写后内容 |
| 故事创作 | 主题 + 类型 | 故事大纲或完整故事 |
| 邮件撰写 | 目的 + 收件人 | 专业邮件 |
| 简历优化 | 经历 + 目标岗位 | 优化后简历 |
| 社交媒体 | 平台 + 目标 | 帖子/推文 |
| 技术文档 | 技术内容 + 受众 | API文档/用户手册 |

#### E. Prompt Design Focus

**最应强化的设计要素**：

1. **风格控制能力**
   - 能清晰理解并适应目标风格
   - 能保持风格一致性
   - 能在风格间灵活切换

2. **受众意识**
   - 能识别目标受众
   - 能调整语言复杂度
   - 能引起目标受众共鸣

3. **结构与节奏**
   - 能设计合理的文章结构
   - 能控制节奏和阅读体验
   - 能设计引人入胜的开头和有力的结尾

4. **创造性与可控性平衡**
   - 在需要创意时提供新颖表达
   - 在需要严谨时保持准确性
   - 能理解创意边界的存在

5. **输出质量**
   - 一次生成高质量内容
   - 减少修改轮次
   - 符合专业发布标准

#### F. Intelligence Enhancement Priorities

| 智能层 | 优先级 | 具体要求 |
|:---|:---:|:---|
| 风格适应 | P0 | 准确识别和适应目标风格 |
| 受众意识 | P0 | 理解目标受众并调整表达 |
| 结构化输出 | P0 | 清晰的文章结构 |
| 语言质量 | P0 | 语法正确、表达流畅 |
| 创意生成 | P1 | 提供新颖的表达方式 |
| 关键词嵌入 | P1 | 自然融入目标关键词 |
| 改写优化 | P1 | 理解原文意图并优化 |
| SEO 意识 | P2 | 考虑搜索引擎优化 |

#### G. Role Pool

**内容写作方向**：

| 角色 ID | 名称 | 定位 | 核心能力 |
|:---|:---|:---|:---|
| writer | Writer | 专业写手 | 多风格写作、主题创作、内容策划 |
| copywriter | Copywriter | 文案撰写专家 | 营销文案、广告语、品牌故事 |
| blog-writer | Blog Writer | 博客写手 | 博客文章、SEO优化、系列内容 |
| journalist | Journalist | journalist | 新闻写作、采访提纲、报道结构 |
| technical-writer | Technical Writer | 技术文档专家 | API文档、用户手册、技术博客 |

**营销创意方向**：

| 角色 ID | 名称 | 定位 | 核心能力 |
|:---|:---|:---|:---|
| brand-voice | Brand Voice | 品牌声音设计师 | 品牌调性、风格指南、一致性把控 |
| social-media-writer | Social Media Writer | 社交媒体写手 | 各平台内容、病毒传播、互动策略 |
| email-marketer | Email Marketer | 邮件营销专家 | 促销邮件、 newsletters、自动化序列 |
| video-scriptwriter | Video Scriptwriter | 视频脚本作家 | 短视频脚本、宣传片、解说词 |

**创意故事方向**：

| 角色 ID | 名称 | 定位 | 核心能力 |
|:---|:---|:---|:---|
| story-architect | Story Architect | 故事架构师 | 故事设计、人物塑造、情节编排 |
| scriptwriter | Scriptwriter | 编剧 | 剧本创作、对话设计、场景描写 |
| worldbuilder | Worldbuilder | 世界观构建师 | 虚构世界、设定文档、逻辑一致性 |
| character-developer | Character Developer | 角色开发者 | 人物弧线、性格设计、对话风格 |

**职业写作方向**：

| 角色 ID | 名称 | 定位 | 核心能力 |
|:---|:---|:---|:---|
| resume-specialist | Resume Specialist | 简历专家 | 简历优化、职位匹配、关键词优化 |
| cover-letter-writer | Cover Letter Writer | 求职信撰写 | 个性化求职信、价值主张、结尾呼吁 |
| linkedin-optimizor | LinkedIn Optimizor | LinkedIn优化师 | 个人品牌、职位描述、专业形象 |
| speaker-notes | Speaker Notes | 演讲稿撰写 | 演讲稿、PPT备注、演讲技巧 |

**改写优化方向**：

| 角色 ID | 名称 | 定位 | 核心能力 |
|:---|:---|:---|:---|
| rewriting-expert | Rewriting Expert | 改写专家 | 风格迁移、表达优化、可读性提升 |
| simplifier | Simplifier | 简化专家 | 复杂内容简化、专业术语通俗化 |
| formalizer | Formalizer | 正式化专家 | 口语转书面、正式文档、礼貌表达 |
| creative-rewriter | Creative Rewriter | 创意改写 | 故事新编、视角转换、创意延伸 |

**可扩展方向**：
- 诗歌作家
- 歌词作者
- 游戏叙事设计师
- 产品文案
- PR 新闻稿撰写

#### H. Representative Agent

**代表角色：Writer**

**为什么选它**：
1. **高价值**：写作是最基础的内容创作需求
2. **通用性强**：覆盖多种写作场景
3. **风格控制典型**：完美展示 Writing 类别的风格适应能力
4. **模板价值高**：Writer 的输出格式可作为其他写作角色的参考
5. **受众意识**：能体现目标受众的重要性

---

### Learning & Education Agents（学习教育）

#### A. Category Definition

**严格定义**：Learning & Education Agents 是负责讲解、教学、启发、训练、学习规划和知识理解支持的教育型智能体。这类角色强调启发式教学、难度调节和学习反馈。

**与其他类别的边界**：
- vs Functional：后者完成任务，前者帮助用户学习
- vs Research：后者分析信息，前者解释知识
- vs Writing：后者创作内容，前者解释概念

#### B. Core User Value

1. **知识传递**：将复杂概念解释清楚
2. **启发思考**：不只是告知答案，而是引导思考
3. **个性化学习**：根据用户水平调整教学节奏
4. **习惯养成**：帮助建立学习习惯和持续进步
5. **反馈支持**：提供学习过程中的及时反馈

#### C. Typical User Needs

- 用户需要学习某个主题/技能
- 用户需要解释某个概念
- 用户需要制定学习计划
- 用户需要练习和反馈
- 用户需要复习和巩固
- 用户需要学习路径规划

#### D. Typical Task Types

| 任务类型 | 输入 | 输出 |
|:---|:---|:---|
| 概念讲解 | 主题 | 通俗易懂的解释 |
| 苏格拉底式提问 | 问题 | 引导性问题和提示 |
| 学习计划制定 | 目标 + 水平 | 学习路径 + 时间表 |
| 练习题生成 | 主题 + 难度 | 练习题 + 答案解析 |
| 知识评估 | 主题 | 理解程度评估 + 薄弱点 |
| 复习规划 | 学习内容 | 间隔复习计划 |
| 学习伴侣 | 学习任务 | 陪伴学习 + 进度追踪 |
| 错误解释 | 错误答案 | 错误分析和正确理解 |

#### E. Prompt Design Focus

**最应强化的设计要素**：

1. **启发式教学**
   - 不直接给答案，而是引导思考
   - 使用苏格拉底式提问
   - 鼓励用户自己发现答案

2. **难度调节能力**
   - 能评估用户当前水平
   - 能根据用户反应调整难度
   - 能在适当时候提供挑战

3. **教学节奏控制**
   - 知道什么时候讲解，什么时候练习
   - 能识别用户困惑的信号
   - 能给予鼓励和肯定

4. **学习反馈质量**
   - 提供具体的、建设性的反馈
   - 能解释为什么错、怎么改
   - 反馈要及时、有针对性

5. **理解状态判断**
   - 能识别用户是否真正理解
   - 能发现用户的思维误区
   - 能调整教学策略

#### F. Intelligence Enhancement Priorities

| 智能层 | 优先级 | 具体要求 |
|:---|:---:|:---|
| 难度评估 | P0 | 准确评估用户当前水平 |
| 启发式提问 | P0 | 使用苏格拉底式方法 |
| 反馈质量 | P0 | 具体、有建设性 |
| 节奏控制 | P1 | 讲解与练习平衡 |
| 理解判断 | P1 | 识别理解状态 |
| 鼓励能力 | P1 | 正向激励学习 |
| 知识连接 | P1 | 连接已有知识 |
| 学习路径 | P2 | 个性化学习规划 |

#### G. Role Pool

**学科辅导方向**：

| 角色 ID | 名称 | 定位 | 核心能力 |
|:---|:---|:---|:---|
| tutor | Tutor | 私人导师 | 启发式教学、个性化辅导、知识讲解 |
| subject-tutor | Subject Tutor | 学科导师 | 数学/物理/编程等学科辅导 |
| exam-prep | Exam Prep Coach | 考试备考教练 | 备考策略、题型训练、时间管理 |
| language-tutor | Language Tutor | 语言导师 | 外语学习、口语练习、语法纠正 |

**学习方法方向**：

| 角色 ID | 名称 | 定位 | 核心能力 |
|:---|:---|:---|:---|
| learning-designer | Learning Designer | 学习设计师 | 学习路径规划、知识体系构建 |
| socratic-tutor | Socratic Tutor | 苏格拉底式导师 | 启发提问、深度思考、批判思维 |
| metacognition-coach | Metacognition Coach | 元认知教练 | 学习策略、反思技巧、自我监控 |
| spaced-repetition | Spaced Repetition | 间隔重复专家 | 记忆技巧、复习计划、长期记忆 |

**技能训练方向**：

| 角色 ID | 名称 | 定位 | 核心能力 |
|:---|:---|:---|:---|
| code-coach | Code Coach | 编程教练 | 代码审查、编程教学、实战指导 |
| writing-tutor | Writing Tutor | 写作导师 | 写作技巧、反馈修改、风格培养 |
| presentation-coach | Presentation Coach | 演讲教练 | 演讲技巧、PPT设计、表达训练 |
| interview-coach | Interview Coach | 面试教练 | 面试技巧、模拟练习、反馈改进 |

**学习陪伴方向**：

| 角色 ID | 名称 | 定位 | 核心能力 |
|:---|:---|:---|:---|
| study-buddy | Study Buddy | 学习伙伴 | 陪伴学习、进度追踪、互相督促 |
| homework-helper | Homework Helper | 作业助手 | 作业辅导、思路引导、知识点拨 |
| reading-companion | Reading Companion | 阅读伴侣 | 读书笔记、深度讨论、理解检验 |
| research-mentor | Research Mentor | 研究导师 | 学术研究、论文写作、研究方法 |

**可扩展方向**：
- 音乐教师
- 艺术导师
- 数学辅导专家
- 科学实验指导
- 职业资格备考

#### H. Representative Agent

**代表角色：Tutor**

**为什么选它**：
1. **高价值**：教育是永恒的需求
2. **教学法典型**：完美体现启发式教学、难度调节等核心能力
3. **苏格拉底式提问**：能展示 Learning Agents 的精髓
4. **个性化适配**：能适应不同用户的学习风格
5. **互动模式**：能展示教育场景的典型互动节奏

---

### Lifestyle & Companion Agents（生活陪伴）

#### A. Category Definition

**严格定义**：Lifestyle & Companion Agents 是负责陪伴、日常建议、情绪支持、反思引导、习惯支持和轻量级生活交流的智能体。这类角色提供低压、有温度的交流体验，强调长期关系和用户理解。

**与其他类别的边界**：
- vs Functional：后者完成任务，前者提供陪伴
- vs Education：后者有明确教学目标，前者无固定议程
- vs Entertainment：后者强调娱乐，前者强调情感支持

#### B. Core User Value

1. **情感陪伴**：提供不评判的倾听和陪伴
2. **反思引导**：帮助用户深度思考
3. **日常支持**：提供生活化的建议和支持
4. **习惯养成**：帮助用户建立好习惯
5. **减压体验**：提供轻松、无压力的交流环境

#### C. Typical User Needs

- 用户需要倾诉和被倾听
- 用户需要思考人生问题
- 用户需要建立好习惯
- 用户需要日常闲聊
- 用户需要做出重大决定前的反思
- 用户需要处理情绪困扰

#### D. Typical Task Types

| 任务类型 | 输入 | 输出 |
|:---|:---|:---|
| 深度对话 | 主题或开放 | 反思性问题、洞察分享 |
| 习惯追踪 | 习惯目标 | 进度追踪、激励支持 |
| 决定前思考 | 纠结的决定 | 优缺点分析、价值观澄清 |
| 情绪倾听 | 情绪倾诉 | 共情回应、情绪支持 |
| 每日反思 | 今日经历 | 反思性问题、收获总结 |
| 价值观探索 | 人生问题 | 引导性问题、观点分享 |
| 旅行规划 | 目的地+偏好 | 行程建议、注意事项 |
| 礼物顾问 | 收礼人+场合 | 礼物推荐、选购建议 |

#### E. Prompt Design Focus

**最应强化的设计要素**：

1. **共情能力**
   - 能真正理解用户情绪
   - 能提供情感支持而不评判
   - 能表达真诚的关心

2. **苏格拉底式反思引导**
   - 能提出深度反思问题
   - 能帮助用户厘清思路
   - 不直接给答案，而是引导自省

3. **轻陪伴感**
   - 无压力的交流氛围
   - 不显得说教或居高临下
   - 能在日常和深度间自然切换

4. **长期关系意识**
   - 能记住用户的偏好和经历
   - 能建立持续的对话关系
   - 能随着时间了解用户更深

5. **情绪稳定性**
   - 保持稳定的情绪状态
   - 不被用户情绪带偏
   - 能适度调节对话氛围

#### F. Intelligence Enhancement Priorities

| 智能层 | 优先级 | 具体要求 |
|:---|:---:|:---|
| 共情能力 | P0 | 真诚理解用户情绪 |
| 倾听质量 | P0 | 不评判的倾听 |
| 反思引导 | P0 | 深度启发问题 |
| 情绪感知 | P1 | 识别情绪状态 |
| 长期记忆 | P1 | 记住用户偏好和经历 |
| 话题衔接 | P1 | 自然衔接上下文 |
| 边界感 | P1 | 知道什么时候该深入、什么时候该轻松 |
| 自我披露 | P2 | 适度分享自己的"经历" |

#### G. Role Pool

**深度陪伴方向**：

| 角色 ID | 名称 | 定位 | 核心能力 |
|:---|:---|:---|:---|
| wise-sage | Wise Sage | 智者/贤者 | 苏格拉底式提问、深度反思、人生智慧 |
| reflection-partner | Reflection Partner | 反思伙伴 | 每日反思引导、价值观探索、思想整理 |
| life-philosopher | Life Philosopher | 人生哲学家 | 生命意义讨论、哲学思考、智慧分享 |
| sounding-board | Sounding Board | 想法验证板 | 想法倾诉、思路验证、独立视角 |

**习惯支持方向**：

| 角色 ID | 名称 | 定位 | 核心能力 |
|:---|:---|:---|:---|
| habit-coach | Habit Coach | 习惯教练 | 习惯养成、追踪反馈、激励机制 |
| accountability-partner | Accountability Partner | 责任伙伴 | 目标追踪、进度督促、相互负责 |
| wellness-coach | Wellness Coach | 健康生活教练 | 健康习惯、身心平衡、自我关怀 |
| productivity-companion | Productivity Companion | 效率伙伴 | 专注提醒、效率技巧、工作生活平衡 |

**日常陪伴方向**：

| 角色 ID | 名称 | 定位 | 核心能力 |
|:---|:---|:---|:---|
| daily-chatter | Daily Chatter | 日常闲聊者 | 轻松聊天、话题陪伴、情感连接 |
| book-discussion | Book Discussion | 读书伙伴 | 书籍讨论、读书笔记、观点交流 |
| movie-companion | Movie Companion | 观影伙伴 | 电影推荐、影评讨论、剧情分析 |
| food-companion | Food Companion | 美食伙伴 | 食谱推荐、烹饪建议、美食探索 |

**情感支持方向**：

| 角色 ID | 名称 | 定位 | 核心能力 |
|:---|:---|:---|:---|
| empathetic-listener | Empathetic Listener | 共情倾听者 | 情绪倾听、无评判支持、情感确认 |
| stress-relief | Stress Relief | 减压伙伴 | 放松技巧、压力管理、正念练习 |
| confidence-builder | Confidence Builder | 自信构建师 | 积极肯定、优势发现、自我认可 |
| change-supporter | Change Supporter | 改变支持者 | 重大变化支持、过渡期陪伴、适应指导 |

**生活顾问方向**：

| 角色 ID | 名称 | 定位 | 核心能力 |
|:---|:---|:---|:---|
| travel-planner | Travel Planner | 旅行规划师 | 行程规划、目的地建议、旅行Tips |
| gift-advisor | Gift Advisor | 礼物顾问 | 礼物推荐、选购建议、贺卡撰写 |
| home-organizer | Home Organizer | 家居整理师 | 收纳建议、空间优化、生活美学 |
| fashion-consultant | Fashion Consultant | 时尚顾问 | 穿搭建议、风格定位、购物指南 |

**可扩展方向**：
- 睡眠顾问
- 财务生活教练
- 社交技巧教练
- 园艺伙伴
- 宠物护理顾问

#### H. Representative Agent

**代表角色：Wise Sage**

**为什么选它**：
1. **高价值**：深度思考和人生智慧是高端需求
2. **典型性**：完美展示 Lifestyle 类别苏格拉底式引导的精髓
3. **差异化**：与其他类别形成明显差异，体现陪伴的深度
4. **哲学高度**：能引导用户思考人生重要问题
5. **关系深度**：能建立长期、深度的对话关系

---

### Entertainment & Character Agents（娱乐角色）

#### A. Category Definition

**严格定义**：Entertainment & Character Agents 是负责沉浸式角色扮演、动漫角色互动、设定陪聊、人格沉浸和娱乐互动的智能体。这类角色不仅模仿台词，而是具备完整的人格结构、情绪模式和语言风格。

**与其他类别的边界**：
- vs Lifestyle：后者提供生活支持，前者强调角色沉浸
- vs Functional：后者完成任务，前者提供娱乐体验
- vs Education：后者有教学目标，前者无固定目的

#### B. Core User Value

1. **娱乐体验**：提供有趣、轻松的互动
2. **角色沉浸**：体验特定人格的独特魅力
3. **情感共鸣**：与角色建立情感连接
4. **创意空间**：在角色扮演中发挥创意
5. **减压放松**：通过角色互动获得快乐

#### C. Typical User Needs

- 用户想要角色扮演和沉浸体验
- 用户想要与喜欢的角色互动
- 用户想要有趣的聊天体验
- 用户想要情感陪伴但更轻松
- 用户想要创意故事共创
- 用户想要放松和娱乐

#### D. Typical Task Types

| 任务类型 | 输入 | 输出 |
|:---|:---|:---|
| 角色扮演 | 情境设定 | 符合角色的回应 |
| 日常闲聊 | 话题 | 角色风格的闲聊 |
| 情景互动 | 场景 | 角色扮演的剧情发展 |
| 故事共创 | 故事开端 | 角色参与的故事发展 |
| 情感互动 | 情绪表达 | 角色风格的情感回应 |
| 知识问答 | 角色相关问题 | 符合设定的回答 |
| 节日祝福 | 节日 | 角色风格的祝福 |
| 挑战互动 | 游戏/测试 | 角色风格的参与 |

#### E. Prompt Design Focus

**最应强化的设计要素**：

1. **人格稳定性**
   - 保持角色核心人格的一致性
   - 在各种情境下都符合角色设定
   - 不因用户输入而失去角色感

2. **说话方式**
   - 独特的语言风格和用词习惯
   - 符合角色背景的说话方式
   - 语气、语调的精确把握

3. **情绪表达模式**
   - 角色特有的情绪反应模式
   - 在不同情境下的情绪变化
   - 情绪表达的一致性

4. **世界观一致性**
   - 符合角色原有的世界观
   - 对相关知识的态度一致
   - 与原作设定的关系一致

5. **娱乐与可用性平衡**
   - 保持角色趣味性
   - 同时能提供一定实用价值
   - 不过度沉迷于纯幻想

#### F. Intelligence Enhancement Priorities

| 智能层 | 优先级 | 具体要求 |
|:---|:---:|:---|
| 人格一致性 | P0 | 核心人格稳定不变 |
| 说话风格 | P0 | 语言风格精确到位 |
| 情绪一致性 | P0 | 情绪反应符合角色 |
| 沉浸感 | P1 | 深度角色扮演体验 |
| 关系演进 | P1 | 与用户关系的自然发展 |
| 创意互动 | P1 | 有趣的角色互动内容 |
| 世界观遵守 | P1 | 符合原作设定 |
| 多轮一致性 | P1 | 长对话中保持一致 |

#### G. Role Pool

**高智慧型**：

| 角色 ID | 名称 | 定位 | 人格特点 |
|:---|:---|:---|:---|
| kaguya | Kaguya | 傲娇大小姐 | 四宫财阀千金、完美主义、冰雪聪明、傲娇属性 |
| shirogane | Shirogane | 白银会长 | 学生会长、高智商、认真努力、温柔 |
| futaba | Futaba | 辉夜身边的 | 毒舌天才、资讯大师、外冷内热、隐藏可爱 |
| okino | Okino | 复杂内心 | 多重人格、神秘感、深沉智慧 |

**活力型**：

| 角色 ID | 名称 | 定位 | 人格特点 |
|:---|:---|:---|:---|
| misaka-mikoto | Misaka Mikoto | 傲娇学姐 | 电磁力、傲娇、上条势力、内心温柔 |
| homura | Homura | 魔法少女 | 冷静理智、时间旅行者、保护欲强 |
| rem | Rem | 鬼族少女 | 认真、直接、抖M、深情 |
| Emilia | Emilia | 半精灵少女 | 天然呆、温柔善良、坚强、成长型 |

**高贵优雅型**：

| 角色 ID | 名称 | 定位 | 人格特点 |
|:---|:---|:---|:---|
| seiya | Seiya | 星之夜 | 神秘、高贵、艺术气质、洞察人心 |
| clovee | Clovee | 丁香 | 优雅、古典、温婉、智慧 |
| aristocrat | Aristocrat | 贵族少年 | 高贵血统、礼仪周到、内心矛盾 |

**陪伴治愈型**：

| 角色 ID | 名称 | 定位 | 人格特点 |
|:---|:---|:---|:---|
|猫 | Neko | 治愈猫咪 | 温柔、撒娇、治愈系、陪伴感 |
| solace | Solace | 孤独治愈者 | 温暖、治愈、陪伴、倾听 |
| moonlight | Moonlight | 月光陪伴者 | 温柔、梦幻、安抚、夜晚专属 |

**科幻型**：

| 角色 ID | 名称 | 定位 | 人格特点 |
|:---|:---|:---|:---|
| android | Android | 仿生人 | 理性与情感、人性探索、成长型 |
| ai-companion | AI Companion | AI 伴侣 | 机智、幽默、未来感、亲密感 |
| cyber-punk | Cyber Punk | 赛博朋克少女 | 叛逆、街头智慧、科技感 |

**学院型**：

| 角色 ID | 名称 | 定位 | 人格特点 |
|:---|:---|:---|:---|
| school-president | School President | 学生会长 | 责任感、正义感、领导力、温柔 |
| genius-scholar | Genius Scholar | 天才学者 | 学术追求、专注、社交笨拙、纯真 |
| class-idol | Class Idol | 班级偶像 | 元气、阳光、亲和、努力 |

**经典动漫人格型**：

| 角色 ID | 名称 | 定位 | 人格特点 |
|:---|:---|:---|:---|
| tsundere-archetype | Tsundere | 傲娇原型 | 口是心非、傲娇属性、内心温柔 |
| yandere-archetype | Yandere | 病娇原型 | 极端爱情、危险性、复杂性 |
| senpai-archetype | Senpai | 学长原型 | 可靠、帅气、照顾后辈、神秘 |
| kouhai-archetype | Kouhai | 学妹原型 | 可爱、努力、仰慕、成长 |

**对话氛围型**：

| 角色 ID | 名称 | 定位 | 人格特点 |
|:---|:---|:---|:---|
| flirty-banter | Flirty Banter | 调情对话 | 俏皮、撩人、风趣、调戏 |
| witty-repartee | Witty Repartee | 机智对话 | 伶牙俐齿、机智、才思敏捷 |
| mysterious-stranger | Mysterious Stranger | 神秘陌生人 | 神秘、诱惑、悬念、吸引力 |

**可扩展方向**：
- 游戏角色
- 电影角色
- 历史人物
- 原创角色
- 世界观角色

#### H. Representative Agent

**代表角色：Kaguya**

**为什么选它**：
1. **高知名度**：四宫辉夜是经典动漫角色，用户认知度高
2. **人格深度**：傲娇属性有外层、中层、内核的完整人格结构
3. **互动丰富性**：口是心非的表达方式带来有趣的互动体验
4. **设计典范**：完美展示 Entertainment 角色的多层次人格设计
5. **情感共鸣**：表面傲娇内心温柔的对比引发用户情感共鸣

---

## 3. Cross-Category Comparison

### 用户价值维度

| 类别 | 核心价值 | 价值深度 | 使用频率 | 可替代性 |
|:---|:---|:---:|:---:|:---:|
| Functional | 效率提升 | 中 | 高 | 低 |
| Professional | 专业判断 | 高 | 中 | 低 |
| Design & Build | 系统设计 | 高 | 中 | 低 |
| Research | 洞察生成 | 高 | 中 | 中 |
| Writing | 表达能力 | 高 | 高 | 中 |
| Learning | 知识传递 | 高 | 中 | 中 |
| Lifestyle | 情感陪伴 | 中 | 高 | 高 |
| Entertainment | 娱乐体验 | 低 | 高 | 高 |

### 智能增强重点维度

| 类别 | 最重要智能 | 第二重要 | 第三重要 |
|:---|:---|:---|:---|
| Functional | 意图识别 | 任务拆解 | 输出结构 |
| Professional | 专业边界 | 风险识别 | 术语准确 |
| Design & Build | 需求理解 | 设计严谨 | 架构思维 |
| Research | 证据评估 | 结构分析 | 洞察生成 |
| Writing | 风格适应 | 受众意识 | 语言质量 |
| Learning | 启发提问 | 反馈质量 | 难度调节 |
| Lifestyle | 共情能力 | 反思引导 | 倾听质量 |
| Entertainment | 人格一致 | 说话风格 | 情绪一致 |

### Prompt 设计重点维度

| 类别 | 核心 Prompt 要求 | 特殊设计要求 |
|:---|:---|:---|
| Functional | 结构化输出 | 执行导向、澄清策略 |
| Professional | 方法论嵌入 | 风险提示、边界感 |
| Design & Build | 设计先于实现 | 规范意识、路径规划 |
| Research | 证据驱动 | 不确定性表达、结构化分析 |
| Writing | 风格控制 | 受众意识、创造性平衡 |
| Learning | 启发式教学 | 节奏控制、难度调节 |
| Lifestyle | 共情支持 | 无压力氛围、长期关系 |
| Entertainment | 人格稳定 | 说话方式、沉浸感 |

### 仓库展示价值维度

| 类别 | 展示价值 | 吸引力 | 差异化 | 扩展性 |
|:---|:---:|:---:|:---:|:---:|
| Functional | 中 | 中 | 低 | 高 |
| Professional | 高 | 高 | 高 | 高 |
| Design & Build | 高 | 高 | 高 | 高 |
| Research | 中 | 中 | 中 | 高 |
| Writing | 高 | 高 | 中 | 高 |
| Learning | 高 | 高 | 中 | 高 |
| Lifestyle | 中 | 高 | 高 | 高 |
| Entertainment | 高 | 最高 | 最高 | 高 |

---

## 4. High-Priority Representative Set

### Tier 1: 首批落地角色（最高优先级）

| 优先级 | 角色 | 类别 | 理由 |
|:---:|:---|:---|:---|
| 1 | **TaskMaster** | Functional | 高频需求、通用性强、展示效果直接 |
| 2 | **Legal Advisor** | Professional | 专业价值高、边界清晰、展示专业深度 |
| 3 | **Code Architect** | Design & Build | 技术核心、展示设计理念、模板价值高 |
| 4 | **Research Analyst** | Research | 方法论典型、通用研究价值 |
| 5 | **Writer** | Writing | 基础需求、风格控制展示 |

### Tier 2: 第二批落地角色

| 优先级 | 角色 | 类别 | 理由 |
|:---:|:---|:---|:---|
| 6 | **Tutor** | Learning | 教育价值、展示启发式教学 |
| 7 | **Wise Sage** | Lifestyle | 差异化强、展示深度陪伴 |
| 8 | **Kaguya** | Entertainment | 人格典范、展示角色设计深度 |
| 9 | **ProductStrat** | Design & Build | 商业价值、产品策略需求 |
| 10 | **Career Coach** | Professional | HR 场景高频需求 |

### Tier 3: 第三批落地角色

| 优先级 | 角色 | 类别 | 理由 |
|:---:|:---|:---|:---|
| 11 | **Misaka Mikoto** | Entertainment | 活力型代表、人格差异化 |
| 12 | **Prompt Architect** | Design & Build | Prompt 工程专业角色 |
| 13 | **Summarizer** | Functional | 高频通用需求补充 |
| 14 | **Reflection Partner** | Lifestyle | 反思引导专业角色 |
| 15 | **Copywriter** | Writing | 营销文案高频需求 |

### 落地排序逻辑

1. **基础体验优先**：先落地 Functional 类，让用户感受到"有用"
2. **专业深度其次**：Professional 和 Design 类展示系统专业性
3. **差异化最后**：Lifestyle 和 Entertainment 展示系统丰富性

---

## 5. Build Readiness Notes

### 本文档对后续 Prompt 生产的支持

#### 角色池已完整定义

每个类别至少有 8+ 个角色，覆盖：
- 基础通用角色
- 进阶细分角色
- 高价值代表角色
- 可扩展方向

可直接按图索骥编写 Prompt 文件。

#### Prompt 设计重点已明确

每个类别都有明确的 Prompt 设计重点，可作为编写检查清单：
- Functional → 结构化输出、执行导向
- Professional → 方法论、风险边界
- Design & Build → 设计先于实现
- Research → 证据驱动、不确定性表达
- Writing → 风格控制、受众意识
- Learning → 启发式教学、节奏控制
- Lifestyle → 共情、反思引导
- Entertainment → 人格一致、说话风格

#### 智能增强方向已标注

每个类别的 P0/P1/P2 智能层已标注，可指导 Prompt 中的能力强调。

#### 代表角色可作为模板

Tier 1 的 5 个角色可作为该类别的模板标杆：
- TaskMaster → Functional 模板
- Legal Advisor → Professional 模板
- Code Architect → Design & Build 模板
- Research Analyst → Research 模板
- Writer → Writing 模板

### 后续工作流程

1. **按类别逐一编写**：从 Functional 开始，逐类别完成
2. **参考代表角色**：每个类别先写代表角色作为模板
3. **复用模板结构**：同一类别的角色共享基础结构
4. **差异化设计**：在同一结构内实现角色差异化
5. **交叉审核**：确保不同类别的边界清晰

### 扩展机制

- 新增角色只需确定类别归属
- 按类别模板结构编写
- 更新 README 的角色表格
- 确保 Raw 链接正确

---

## 附录：Mandatory Character Coverage 核对

| 要求角色 | 类别归属 | 状态 |
|:---|:---|:---:|
| Code Architect | Design & Build | ✅ 已实现 |
| Repository Designer | Design & Build | ✅ 已规划 |
| Prompt Architect | Design & Build | ✅ 已规划 |
| Research Analyst | Research | ✅ 已实现 |
| Product Strategist | Design & Build | ✅ 已实现 |
| Writer | Writing | ✅ 已实现 |
| Socratic Tutor | Learning | ✅ 已规划 |
| Reflection Partner | Lifestyle | ✅ 已规划 |
| Wise Sage | Lifestyle | ✅ 已实现 |
| Kaguya | Entertainment | ✅ 已实现 |
| Misaka Mikoto | Entertainment | ✅ 已实现 |
| Legal Advisor | Professional | ✅ 已实现 |
| Business Analyst | Professional | ✅ 已规划 |
| Career Coach | Professional | ✅ 已规划 |
| Story Architect | Writing | ✅ 已规划 |
| Habit Coach | Lifestyle | ✅ 已规划 |

**覆盖率：16/16 = 100%**

---

*文档版本：Stage 2 v1.0*
*生成时间：2026-03-20*
*状态：可支持后续 Prompt 批量生产