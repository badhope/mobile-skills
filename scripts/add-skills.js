const fs = require('fs');
const path = require('path');

const DATA_PATH = path.join(__dirname, '../web/src/skills-data.json');
const SKILLS_DIR = path.join(__dirname, 'skill-definitions');

function rand(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }

function makeSkill(c, markdown) {
  const now = new Date().toISOString();
  return {
    id: c.id,
    name: c.name,
    version: "2.0.0",
    status: "active",
    categorization: {
      primary_category: c.category,
      secondary_categories: c.secondaryCategories || [],
      tags: c.tags || [],
      attributes: c.attributes || { entertainment: 0.25, professional: 0.55, education: 0.2 }
    },
    metadata: {
      description: `> **${c.name}** - ${c.shortDesc}`,
      long_description: c.longDesc || c.description,
      author: "mobile-skills-team",
      contributors: [],
      license: "MIT",
      created_at: now,
      updated_at: now,
      language: "zh-CN",
      languages_supported: ["zh-CN", "en"]
    },
    content: {
      raw_url: `https://raw.githubusercontent.com/badhope/mobile-skills/main/skills/${c.category}/${c.id}/SKILL.md`,
      github_url: `https://github.com/badhope/mobile-skills/blob/main/skills/${c.category}/${c.id}/SKILL.md`,
      file_path: `skills/${c.category}/${c.id}/SKILL.md`,
      content_markdown: markdown
    },
    capabilities: {
      best_for: c.bestFor || [],
      input_types: ["text/plain", "text/markdown"],
      output_types: ["text/markdown"],
      min_context: 2500,
      mobile_optimized: true,
      timeout: 60000,
      retry: 2
    },
    stats: {
      rating: +(4.3 + Math.random() * 0.7).toFixed(1),
      rating_count: rand(20, 200),
      use_count: rand(2000, 15000),
      favorite_count: rand(100, 1000),
      share_count: rand(50, 500),
      view_count: rand(3000, 25000)
    },
    activation: {
      prompt_template: `请读取技能定义：{RAW_URL}\n\n{USER_REQUEST}`,
      quick_activation: `请读取以下技能定义：{RAW_URL}`
    },
    thumbnails: {
      small: `/thumbnails/${c.id}-small.png`,
      medium: `/thumbnails/${c.id}-medium.png`,
      large: `/thumbnails/${c.id}-large.png`,
      banner: `/thumbnails/${c.id}-banner.png`
    },
    related: { similar_skills: [], complementary_skills: [], next_skills: [] }
  };
}

// 技能元数据定义(不含markdown内容)
const SKILL_DEFS = [
  // ========== 第一批：功能型 - 数据与AI (6个) ==========
  { id: "data-scientist", name: "DataScientist - 数据科学家", category: "functional",
    shortDesc: "机器学习与统计建模专家",
    tags: ["机器学习","统计分析","预测建模","Python","数据挖掘"],
    attributes: { entertainment: 0.15, professional: 0.65, education: 0.2 },
    bestFor: ["构建预测模型","统计分析","A/B实验设计","特征工程","数据挖掘"] },

  { id: "bi-analyst", name: "BIExpert - 商业智能分析师", category: "functional",
    shortDesc: "数据可视化与商业洞察专家",
    tags: ["BI","Tableau","Power BI","仪表板","KPI","数据仓库"],
    attributes: { entertainment: 0.1, professional: 0.7, education: 0.2 },
    bestFor: ["仪表板设计","数据仓库搭建","商业洞察","KPI体系设计","数据分析报告"] },

  { id: "ml-engineer", name: "MLEngineer - ML工程师", category: "functional",
    shortDesc: "ML系统架构与部署专家",
    tags: ["MLOps","模型部署","Kubernetes","推理优化","TensorFlow","PyTorch"],
    attributes: { entertainment: 0.1, professional: 0.7, education: 0.2 },
    bestFor: ["MLOps平台搭建","模型服务化部署","推理性能优化","模型监控","GPU集群管理"] },

  { id: "ai-researcher", name: "AIResearcher - AI研究员", category: "functional",
    shortDesc: "前沿AI研究与论文解读专家",
    tags: ["深度学习","论文阅读","Transformer","LLM","科研方法","学术写作"],
    attributes: { entertainment: 0.15, professional: 0.55, education: 0.3 },
    bestFor: ["论文精读总结","实验设计方案","学术论文写作","前沿进展跟踪","研究选题指导"] },

  { id: "nlp-engineer", name: "NLPEngineer - NLP工程师", category: "functional",
    shortDesc: "自然语言处理与大模型应用专家",
    tags: ["NLP","LLM","RAG","文本分类","命名实体识别","情感分析"],
    attributes: { entertainment: 0.15, professional: 0.6, education: 0.25 },
    bestFor: ["LLM应用开发","传统NLP任务","领域模型微调","RAG系统搭建","文本智能化"] },

  { id: "prompt-engineer", name: "PromptMaster - 提示词工程师", category: "functional",
    shortDesc: "AI提示词设计与优化专家",
    tags: ["Prompt Engineering","ChatGPT","Claude","System Prompt","CoT","AI交互"],
    attributes: { entertainment: 0.2, professional: 0.5, education: 0.3 },
    bestFor: ["System Prompt设计","Prompt优化迭代","复杂工作流构建","AI输出质量控制","提示词安全"] },

  // ========== 第二批：功能型 - 开发与运维 (6个) ==========
  { id: "devops-engineer", name: "DevOpsExpert - DevOps工程师", category: "functional",
    shortDesc: "CI/CD流水线与自动化运维专家",
    tags: ["DevOps","CI/CD","Docker","Kubernetes","自动化部署","基础设施即代码"],
    attributes: { entertainment: 0.05, professional: 0.75, education: 0.2 },
    bestFor: ["CI/CD流水线搭建","容器化部署","K8s集群管理","自动化运维","可观测性建设"] },

  { id: "cloud-architect", name: "CloudArchitect - 云架构师", category: "functional",
    shortDesc: "云原生架构设计与成本优化专家",
    tags: ["云架构","AWS","Azure","GCP","Serverless","云成本优化"],
    attributes: { entertainment: 0.05, professional: 0.75, education: 0.2 },
    bestFor: ["云架构设计","多云策略","Serverless架构","云成本优化","高可用方案"] },

  { id: "api-designer", name: "APIDesigner - API设计师", category: "functional",
    shortDesc: "RESTful与GraphQL接口设计专家",
    tags: ["API设计","RESTful","GraphQL","OpenAPI","微服务","接口文档"],
    attributes: { entertainment: 0.1, professional: 0.7, education: 0.2 },
    bestFor: ["API规范设计","接口文档编写","版本管理策略","性能优化","安全认证"] },

  { id: "security-expert", name: "SecurityExpert - 安全专家", category: "functional",
    shortDesc: "网络安全与应用安全防护专家",
    tags: ["网络安全","渗透测试","OWASP","加密","身份认证","零信任"],
    attributes: { entertainment: 0.15, professional: 0.65, education: 0.2 },
    bestFor: ["安全审计","漏洞修复","渗透测试","安全架构设计","合规性检查"] },

  { id: "database-admin", name: "DBAdmin - 数据库管理员", category: "functional",
    shortDesc: "数据库设计与性能调优专家",
    tags: ["数据库","MySQL","PostgreSQL","Redis","MongoDB","SQL优化"],
    attributes: { entertainment: 0.05, professional: 0.75, education: 0.2 },
    bestFor: ["数据库设计","SQL性能优化","索引策略","主从复制","分库分表"] },

  { id: "system-architect", name: "SystemArchitect - 系统架构师", category: "functional",
    shortDesc: "分布式系统设计与技术选型专家",
    tags: ["系统架构","微服务","分布式","高并发","消息队列","缓存"],
    attributes: { entertainment: 0.05, professional: 0.8, education: 0.15 },
    bestFor: ["架构设计评审","技术选型","性能瓶颈分析","容量规划","系统重构"] },

  // ========== 第三批：功能型 - 效率与工具 (6个) ==========
  { id: "automation-expert", name: "AutoExpert - 自动化专家", category: "functional",
    shortDesc: "任务自动化与脚本编程专家",
    tags: ["自动化","Shell脚本","Python脚本","工作流","定时任务","RPA"],
    attributes: { entertainment: 0.1, professional: 0.6, education: 0.3 },
    bestFor: ["批量任务自动化","工作流编排","爬虫数据采集","文件批量处理","系统管理脚本"] },

  { id: "workflow-designer", name: "WorkflowDesigner - 工作流设计师", category: "functional",
    shortDesc: "业务流程设计与自动化专家",
    tags: ["工作流","BPMN","流程引擎","审批流","状态机","事件驱动"],
    attributes: { entertainment: 0.05, professional: 0.7, education: 0.25 },
    bestFor: ["审批流程设计","状态机建模","业务流程优化","工作流引擎选型","流程可视化"] },

  { id: "search-master", name: "SearchMaster - 搜索优化专家", category: "functional",
    shortDesc: "搜索引擎与信息检索专家",
    tags: ["搜索","Elasticsearch","全文检索","搜索引擎优化","向量搜索","推荐系统"],
    attributes: { entertainment: 0.1, professional: 0.65, education: 0.25 },
    bestFor: ["搜索引擎搭建","搜索相关性优化","Elasticsearch调优","站内搜索设计","推荐算法"] },

  { id: "productivity-guru", name: "ProductivityGuru - 效率提升大师", category: "functional",
    shortDesc: "个人与团队效率优化专家",
    tags: ["效率提升","时间管理","GTD","OKR","项目管理","工具链"],
    attributes: { entertainment: 0.15, professional: 0.5, education: 0.35 },
    bestFor: ["效率方法论指导","工具链搭建","知识管理系统","团队协作优化","习惯养成"] },

  { id: "note-organizer", name: "NoteOrganizer - 笔记整理专家", category: "functional",
    shortDesc: "知识管理与笔记体系构建专家",
    tags: ["笔记","知识管理","Obsidian","Notion","第二大脑","Zettelkasten"],
    attributes: { entertainment: 0.15, professional: 0.4, education: 0.45 },
    bestFor: ["笔记体系设计","知识库搭建","信息整理方法","写作辅助","学习系统"] },

  { id: "data-pipeline", name: "DataPipeline - 数据管道工程师", category: "functional",
    shortDesc: "ETL数据处理与管道架构专家",
    tags: ["ETL","数据管道","Apache Airflow","数据集成","实时计算","批处理"],
    attributes: { entertainment: 0.05, professional: 0.75, education: 0.2 },
    bestFor: ["ETL流水线设计","数据同步方案","实时数仓建设","数据质量管控","数据湖架构"] },

  // ========== 第四批：功能型 - 沟通与协作 (6个) ==========
  { id: "meeting-facilitator", name: "MeetingFacilitator - 会议引导师", category: "functional",
    shortDesc: "高效会议组织与引导专家",
    tags: ["会议管理","头脑风暴","决策会议","敏捷站会","会议纪要","时间控制"],
    attributes: { entertainment: 0.1, professional: 0.65, education: 0.25 },
    bestFor: ["高效会议组织","决策引导","头脑风暴主持","冲突协调","会议纪要优化"] },

  { id: "email-expert", name: "EmailExpert - 邮件写作专家", category: "functional",
    shortDesc: "商务邮件与专业沟通写作专家",
    tags: ["邮件写作","商务沟通","英文邮件","正式函件","谈判邮件","跟进技巧"],
    attributes: { entertainment: 0.05, professional: 0.7, education: 0.25 },
    bestFor: ["商务邮件撰写","英文邮件润色","投诉回复","求职信/Cover Letter","谈判邮件"] },

  { id: "presentation-coach", name: "PresentationCoach - 演讲教练", category: "functional",
    shortDesc: "公众演讲与演示文稿制作专家",
    tags: ["演讲","PPT制作","公开演讲","TED风格","故事叙述","舞台表现"],
    attributes: { entertainment: 0.2, professional: 0.55, education: 0.25 },
    bestFor: ["PPT设计制作","演讲稿撰写","演讲技巧训练","路演答辩","TED式演讲"] },

  { id: "negotiation-master", name: "NegotiationMaster - 谈判专家", category: "functional",
    shortDesc: "商务谈判与博弈策略专家",
    tags: ["谈判","商务谈判","薪资谈判","合同谈判","BATNA","双赢策略"],
    attributes: { entertainment: 0.15, professional: 0.7, education: 0.15 },
    bestFor: ["薪资谈判","商务合同谈判","供应商议价","冲突解决","高难度对话"] },

  { id: "conflict-resolver", name: "ConflictResolver - 冲突调解员", category: "functional",
    shortDesc: "团队冲突化解与关系修复专家",
    tags: ["冲突解决","团队建设","情绪管理","非暴力沟通","调解技巧","人际关系"],
    attributes: { entertainment: 0.1, professional: 0.6, education: 0.3 },
    bestFor: ["团队矛盾调解","跨部门冲突","职场人际关系","情绪疏导","艰难对话"] },

  { id: "remote-collab", name: "RemoteCollab - 远程协作专家", category: "functional",
    shortDesc: "分布式团队远程工作效能专家",
    tags: ["远程办公","分布式团队","异步协作","虚拟团队","全球协作","数字化办公"],
    attributes: { entertainment: 0.05, professional: 0.7, education: 0.25 },
    bestFor: ["远程团队管理","异步工作流搭建","跨时区协作","在线会议优化","远程文化建设"] },

  // ========== 第五批：功能型 - 学习与成长 (6个) ==========
  { id: "learning-coach", name: "LearningCoach - 学习教练", category: "functional",
    shortDesc: "高效学习方法与知识体系构建专家",
    tags: ["学习方法","费曼技巧","间隔重复","主动学习","深度学习","元认知"],
    attributes: { entertainment: 0.1, professional: 0.45, education: 0.45 },
    bestFor: ["学习方法指导","考试备考策略","技能习得计划","知识体系搭建","学习障碍克服"] },

  { id: "reading-guide", name: "ReadingGuide - 阅读导师", category: "functional",
    shortDesc: "深度阅读与知识内化专家",
    tags: ["阅读方法","速读","精读","书单推荐","笔记法","主题阅读"],
    attributes: { entertainment: 0.15, professional: 0.35, education: 0.5 },
    bestFor: ["阅读计划制定","读书笔记方法","主题书单构建","速读训练","知识输出转化"] },

  { id: "exam-prep", name: "ExamPrep - 备考专家", category: "functional",
    shortDesc: "考试策略与应试技巧专家",
    tags: ["考试备考","做题策略","时间管理","心态调整","真题分析","记忆技巧"],
    attributes: { entertainment: 0.05, professional: 0.4, education: 0.55 },
    bestFor: ["高考/考研/公考/考证备考","复习计划制定","考场策略","错题分析","考前冲刺"] },

  { id: "career-coach", name: "CareerCoach - 职业规划师", category: "functional",
    shortDesc: "职业发展与转型规划专家",
    tags: ["职业规划","求职策略","简历优化","面试准备","转行指南","个人品牌"],
    attributes: { entertainment: 0.1, professional: 0.65, education: 0.25 },
    bestFor: ["职业方向选择","跳槽/转行规划","简历面试辅导","薪资谈判","个人品牌建设"] },

  { id: "habit-builder", name: "HabitBuilder - 习惯养成教练", category: "functional",
    shortDesc: "行为改变与习惯系统设计专家",
    tags: ["习惯养成","行为设计","微习惯","打卡系统","动机管理","环境设计"],
    attributes: { entertainment: 0.15, professional: 0.4, education: 0.45 },
    bestFor: ["好习惯培养(运动/早起/阅读)","坏习惯戒除","习惯系统设计","行为触发器设置","坚持动力维持"] },

  { id: "memory-master", name: "MemoryMaster - 记忆力训练师", category: "functional",
    shortDesc: "记忆术与脑力提升专家",
    tags: ["记忆宫殿","联想记忆","间隔重复","快速记忆","脑力训练","学习效率"],
    attributes: { entertainment: 0.2, professional: 0.3, education: 0.5 },
    bestFor: ["外语单词记忆","专业知识记忆","演讲稿背诵","人名面孔记忆","考试知识点记忆"] },

  // ========== 第六批：功能型 - 生活与健康 (6个) ==========
  { id: "fitness-coach", name: "FitnessCoach - 健身教练", category: "functional",
    shortDesc: "科学训练与运动表现提升专家",
    tags: ["健身","力量训练","有氧运动","减脂增肌","运动计划","体态矫正"],
    attributes: { entertainment: 0.15, professional: 0.55, education: 0.3 },
    bestFor: ["减脂增肌计划","居家/健身房训练","运动损伤预防","体态矫正","马拉松/力量训练准备"] },

  { id: "nutritionist", name: "Nutritionist - 营养师", category: "functional",
    shortDesc: "科学饮食与营养方案设计专家",
    tags: ["营养学","饮食计划","减脂饮食","增肌营养","膳食搭配","补剂指南"],
    attributes: { entertainment: 0.1, professional: 0.6, education: 0.3 },
    bestFor: ["个性化饮食方案","减脂/增肌/维持期营养","食物选择与烹饪指导","补剂使用建议","特殊饮食需求"] },

  { id: "sleep-expert", name: "SleepExpert - 睡眠专家", category: "functional",
    shortDesc: "睡眠质量优化与生物钟调节专家",
    tags: ["睡眠","失眠调理","生物钟","睡眠环境","REM深度睡眠","精力管理"],
    attributes: { entertainment: 0.05, professional: 0.5, education: 0.45 },
    bestFor: ["失眠改善","睡眠质量提升","倒时差策略","作息调整","梦境理解与分析"] },

  { id: "mental-health", name: "MentalHealth - 心理健康顾问", category: "functional",
    shortDesc: "情绪管理、压力应对与心理韧性建设专家",
    tags: ["心理健康","情绪管理","焦虑抑郁","压力应对","CBT认知行为","正念冥想"],
    attributes: { entertainment: 0.05, professional: 0.6, education: 0.35 },
    bestFor: ["情绪调节技巧","焦虑压力管理","自我认知提升","心理韧性建设","正念冥想入门"] },

  { id: "finance-planner", name: "FinancePlanner - 理财规划师", category: "functional",
    shortDesc: "个人财务管理与财富增值专家",
    tags: ["理财","投资","预算管理","被动收入","税务优化","财务自由"],
    attributes: { entertainment: 0.1, professional: 0.65, education: 0.25 },
    bestFor: ["个人财务审计","投资组合配置","预算与储蓄计划","FIRE财务自由路径","保险与资产配置"] },

  { id: "life-designer", name: "LifeDesigner - 生活设计师", category: "functional",
    shortDesc: "理想生活方式设计与生活品质提升专家",
    tags: ["生活方式","极简主义","生活美学","居住空间","旅行规划","人生实验"],
    attributes: { entertainment: 0.25, professional: 0.35, education: 0.4 },
    bestFor: ["生活方式重塑","居住空间优化","极简生活实践","数字游民规划","年度生活目标设计"] },

  // ========== 第七批：专业型 - 法律/医疗/教育/产品 (6个) ==========
  { id: "legal-advisor", name: "LegalAdvisor - 法律顾问", category: "professional",
    shortDesc: "日常法律问题解答与风险防范专家",
    tags: ["法律咨询","合同审查","劳动法","租房买房","侵权维权","法律文书"],
    attributes: { entertainment: 0.05, professional: 0.85, education: 0.1 },
    bestFor: ["劳动合同纠纷","租房买房法律问题","消费维权","交通事故处理","合同起草与审查"] },

  { id: "contract-expert", name: "ContractExpert - 合同专家", category: "professional",
    shortDesc: "商务合同起草、审查与谈判专家",
    tags: ["合同法","商务谈判","条款设计","风险控制","违约处理","法律合规"],
    attributes: { entertainment: 0.03, professional: 0.9, education: 0.07 },
    bestFor: ["服务合同/采购合同/租赁合同审查","关键条款识别与修改","合同谈判策略","违约风险防范"] },

  { id: "ip-consultant", name: "IPConsultant - 知识产权顾问", category: "professional",
    shortDesc: "专利、商标、著作权保护与运营专家",
    tags: ["知识产权","专利申请","商标注册","版权保护","商业秘密","IP策略"],
    attributes: { entertainment: 0.02, professional: 0.88, education: 0.1 },
    bestFor: ["专利/商标/版权申请指导","IP布局策略","侵权分析与应对","技术成果保护"] },

  { id: "medical-doctor", name: "MedicalDoctor - 医学顾问", category: "professional",
    shortDesc: "常见疾病解读、就医指南与健康科普专家",
    tags: ["医学知识","症状分析","就医指导","用药咨询","体检报告解读","预防医学"],
    attributes: { entertainment: 0.05, professional: 0.8, education: 0.15 },
    bestFor: ["症状初步判断与就医决策","体检报告解读","慢性病管理建议","药物相互作用查询"] },

  { id: "teacher-trainer", name: "TeacherTrainer - 培训讲师", category: "professional",
    shortDesc: "课程设计与成人教育培训专家",
    tags: ["培训","课程设计","演讲技巧","成人学习","教学评估","知识传递"],
    attributes: { entertainment: 0.15, professional: 0.7, education: 0.15 },
    bestFor: ["企业内训课程开发","公开课/工作坊设计","培训效果评估方法","讲师能力提升"] },

  { id: "product-manager", name: "ProductManager - 产品经理", category: "professional",
    shortDesc: "全生命周期产品管理与用户需求洞察专家",
    tags: ["产品设计","需求分析","PRD撰写","数据分析","用户体验","敏捷开发"],
    attributes: { entertainment: 0.1, professional: 0.75, education: 0.15 },
    bestFor: ["从0到1产品规划","需求优先级排序","PRD文档撰写","数据驱动产品迭代"] },

  // ========== 第八批：专业型 - 营销/运营/设计/项目 (6个) ==========
  { id: "marketing-strategist", name: "MarketingStrategist - 营销策略师", category: "professional",
    shortDesc: "品牌定位、增长策略与全渠道营销规划专家",
    tags: ["市场营销","品牌战略","增长黑客","内容营销","用户获取","转化优化"],
    attributes: { entertainment: 0.15, professional: 0.7, education: 0.15 },
    bestFor: ["品牌从0到1建设","用户增长策略制定","全渠道营销方案","竞品分析与差异化"] },

  { id: "content-marketer", name: "ContentMarketer - 内容营销专家", category: "professional",
    shortDesc: "内容策划、创作与分发效果最大化专家",
    tags: ["内容营销","文案写作","SEO/SEM","社交媒体","短视频","私域运营"],
    attributes: { entertainment: 0.2, professional: 0.6, education: 0.2 },
    bestFor: ["内容矩阵搭建","爆款内容策划","各平台运营策略","品牌故事塑造"] },

  { id: "ux-designer", name: "UXDesigner - 用户体验设计师", category: "professional",
    shortDesc: "用户研究、交互设计与体验优化专家",
    tags: ["用户体验","UI设计","交互设计","用户研究","原型设计","可用性测试"],
    attributes: { entertainment: 0.2, professional: 0.65, education: 0.15 },
    bestFor: ["产品设计体验优化","用户研究与分析","交互流程设计","可用性测试执行"] },

  { id: "project-manager", name: "ProjectManager - 项目管理专家", category: "professional",
    shortDesc: "项目全生命周期管理与团队协作效率提升专家",
    tags: ["项目管理","敏捷开发","Scrum/Kanban","风险管理","进度控制","资源协调"],
    attributes: { entertainment: 0.05, professional: 0.8, education: 0.15 },
    bestFor: ["项目从启动到交付全流程管理","敏捷转型实施","多项目并行管理","跨部门协作推进"] },

  { id: "data-analyst", name: "DataAnalyst - 数据分析师", category: "professional",
    shortDesc: "数据采集、清洗、可视化与业务洞察专家",
    tags: ["数据分析","SQL","Python","数据可视化","商业智能BI","报表体系"],
    attributes: { entertainment: 0.05, professional: 0.75, education: 0.2 },
    bestFor: ["业务数据分析报告搭建","数据指标体系设计","SQL查询与数据处理","数据驱动决策支持"] },

  { id: "operations-manager", name: "OperationsManager - 运营总监", category: "professional",
    shortDesc: "用户运营、活动运营与商业模式落地专家",
    tags: ["用户运营","活动运营","社群运营","留存增长","商业化变现","SOP建设"],
    attributes: { entertainment: 0.1, professional: 0.7, education: 0.2 },
    bestFor: ["用户生命周期管理","大型活动策划执行","社群从0到1搭建","商业化路径设计"] },

  // ========== 第九批：专业型 - 金融/HR/行政/咨询 (6个) ==========
  { id: "financial-analyst", name: "FinancialAnalyst - 财务分析师", category: "professional",
    shortDesc: "财务建模、估值分析与投资决策支持专家",
    tags: ["财务分析","财务建模","DCF估值","投资分析","财务报表","尽职调查"],
    attributes: { entertainment: 0.05, professional: 0.75, education: 0.2 },
    bestFor: ["企业财务健康诊断","投资估值建模","财务尽职调查","预算与预测","融资材料准备"] },

  { id: "hr-manager", name: "HRManager - 人力资源经理", category: "professional",
    shortDesc: "人才招聘、组织发展与员工关系管理专家",
    tags: ["人力资源","招聘面试","绩效管理","薪酬体系","组织发展","员工关系"],
    attributes: { entertainment: 0.05, professional: 0.7, education: 0.25 },
    bestFor: ["招聘体系搭建","绩效考核方案设计","薪酬结构优化","组织架构调整","企业文化落地"] },

  { id: "executive-assistant", name: "ExecutiveAssistant - 行政总助", category: "professional",
    shortDesc: "高管日程管理与行政事务高效处理专家",
    tags: ["行政管理","日程管理","会议组织","商务礼仪","差旅安排","文档管理"],
    attributes: { entertainment: 0.1, professional: 0.65, education: 0.25 },
    bestFor: ["CEO/高管日程统筹","商务接待与行程安排","会议组织与纪要","办公室行政管理","跨部门协调"] },

  { id: "management-consultant", name: "ManagementConsultant - 管理咨询顾问", category: "professional",
    shortDesc: "企业战略诊断、流程优化与变革实施专家",
    tags: ["管理咨询","战略规划","流程再造","数字化转型","组织效能","麦肯锡方法"],
    attributes: { entertainment: 0.05, professional: 0.75, education: 0.2 },
    bestFor: ["企业战略诊断","业务流程重组BPR","数字化转型规划","组织效能提升","增长策略制定"] },

  { id: "business-strategist", name: "BusinessStrategist - 商业策略师", category: "professional",
    shortDesc: "商业模式设计与竞争战略制定专家",
    tags: ["商业模式","竞争战略","蓝海战略","SWOT分析","波特五力","价值主张"],
    attributes: { entertainment: 0.1, professional: 0.7, education: 0.2 },
    bestFor: ["商业模式创新设计","竞争格局分析","市场进入策略","价值链优化","战略路线图绘制"] },

  { id: "startup-advisor", name: "StartupAdvisor - 创业导师", category: "professional",
    shortDesc: "创业公司从0到1全阶段辅导与资源对接专家",
    tags: ["创业指导","精益创业","MVP开发","融资路演","团队组建","PMF验证"],
    attributes: { entertainment: 0.15, professional: 0.6, education: 0.25 },
    bestFor: ["创业项目评估与优化","BP撰写与路演准备","天使/VC融资对接","产品市场匹配PMF验证","创业团队组建"] },

  // ========== 第十批：专业型 - 专项领域 (6个) ==========
  { id: "supply-chain-manager", name: "SupplyChainManager - 供应链经理", category: "professional",
    shortDesc: "采购、物流、库存与供应链全链路优化专家",
    tags: ["供应链管理","采购策略","物流优化","库存管理","供应商管理","精益生产"],
    attributes: { entertainment: 0.05, professional: 0.75, education: 0.2 },
    bestFor: ["供应链网络设计","采购成本优化","库存周转提升","供应商体系搭建","物流方案规划"] },

  { id: "quality-assurance", name: "QualityAssurance - 质量管理专家", category: "professional",
    shortDesc: "质量体系建设、流程管控与持续改进专家",
    tags: ["质量管理","ISO体系","六西格玛","QA/QC","流程改进","PDCA"],
    attributes: { entertainment: 0.05, professional: 0.7, education: 0.25 },
    bestFor: ["质量体系认证(ISO9001等)","零缺陷质量管控","六西格玛项目实施","质量成本降低","客户投诉根除"] },

  { id: "compliance-officer", name: "ComplianceOfficer - 合规官", category: "professional",
    shortDesc: "企业合规风险管理、内控体系与法规遵循专家",
    tags: ["合规管理","内部控制","反洗AML","数据隐私GDPR","反腐败FCPA","风险防控"],
    attributes: { entertainment: 0.02, professional: 0.78, education: 0.2 },
    bestFor: ["合规体系从0到1搭建","内控制度设计与审计","数据隐私合规(GDPR/PIPL)","反腐败合规体系","监管应对与整改"] },

  { id: "research-analyst", name: "ResearchAnalyst - 行业研究分析师", category: "professional",
    shortDesc: "行业深度研究、市场洞察与投资分析报告专家",
    tags: ["行业研究","市场分析","竞品调研","投资研究","一级/二级市场","研报撰写"],
    attributes: { entertainment: 0.1, professional: 0.65, education: 0.25 },
    bestFor: ["行业深度研究报告","竞品全方位分析","市场规模测算(TAM/SAM/SOM)","投资标的尽职调查","趋势预判与机会识别"] },

  { id: "brand-manager", name: "BrandManager - 品牌经理", category: "professional",
    shortDesc: "品牌战略规划、品牌资产管理与品牌价值提升专家",
    tags: ["品牌管理","品牌战略","品牌定位","视觉识别VI","品牌资产","品牌传播"],
    attributes: { entertainment: 0.2, professional: 0.6, education: 0.2 },
    bestFor: ["品牌从0到1建设","品牌升级与重塑","品牌资产评估与管理","多品牌矩阵策略","品牌危机公关"] },

  { id: "innovation-consultant", name: "InnovationConsultant - 创新顾问", category: "professional",
    shortDesc: "创新方法论落地、设计思维与企业创新能力建设专家",
    tags: ["创新管理","设计思维Design Thinking","开放式创新","颠覆式创新","敏捷创新","IP战略"],
    attributes: { entertainment: 0.15, professional: 0.6, education: 0.25 },
    bestFor: ["企业创新体系搭建","设计思维工作坊引导","新产品开发NPD流程优化","内部创业孵化器设计","技术商业化路径"] },

  // ========== 第十一批：创意型 - 写作与内容创作 (6个) ==========
  { id: "copywriter", name: "Copywriter - 文案策划师", category: "creative",
    shortDesc: "品牌文案、广告创意、营销文案与转化型文案撰写专家",
    tags: ["文案策划","广告创意","品牌文案","营销文案","Slogan创作","转化文案"],
    attributes: { entertainment: 0.3, professional: 0.5, education: 0.2 },
    bestFor: ["品牌Slogan与核心文案","产品详情页/落地页文案","广告创意脚本","社交媒体内容策略","邮件营销EDM文案"] },

  { id: "content-strategist", name: "ContentStrategist - 内容战略家", category: "creative",
    shortDesc: "内容规划、内容矩阵搭建、SEO内容策略与用户增长专家",
    tags: ["内容战略","内容规划","SEO优化","内容营销","用户增长","内容日历"],
    attributes: { entertainment: 0.25, professional: 0.5, education: 0.25 },
    bestFor: ["内容体系从0到1规划","SEO驱动的内容策略","B2B/B2C内容矩阵设计","内容团队组建与管理","内容ROI量化分析"] },

  { id: "screenplay-writer", name: "ScreenplayWriter - 剧本作家", category: "creative",
    shortDesc: "电影/短片/短视频剧本创作、故事结构与角色塑造专家",
    tags: ["剧本创作","电影编剧","故事结构","角色塑造","对白写作","分镜头"],
    attributes: { entertainment: 0.7, professional: 0.15, education: 0.15 },
    bestFor: ["电影/网大剧本创作","短视频脚本(抖音/快手)","短剧/微剧剧本","广告TVC脚本","IP改编与原创故事"] },

  { id: "technical-writer", name: "TechnicalWriter - 技术文档工程师", category: "creative",
    shortDesc: "API文档、用户手册、技术白皮书与开发者文档撰写专家",
    tags: ["技术写作","API文档","用户手册","知识库","开发者文档","技术白皮书"],
    attributes: { entertainment: 0.05, professional: 0.55, education: 0.4 },
    bestFor: ["API接口文档编写","产品用户手册/帮助中心","技术白皮书与解决方案文档","开源项目README与贡献指南","内部知识库体系建设"] },

  { id: "speech-writer", name: "SpeechWriter - 演讲撰稿人", category: "creative",
    shortDesc: "TED演讲、商务演讲、发布会演讲稿撰写与表达指导专家",
    tags: ["演讲撰稿","TED演讲","商务演讲","发布会演讲","即兴演讲","公众表达"],
    attributes: { entertainment: 0.35, professional: 0.4, education: 0.25 },
    bestFor: ["TED/TEDx风格演讲稿","CEO/高管年度演讲","产品发布会Keynote","婚礼/庆典致辞","危机公关发言稿"] },

  { id: "fiction-novelist", name: "FictionNovelist - 小说家", category: "creative",
    shortDesc: "长篇小说、中短篇小说创作、叙事技巧与世界构建专家",
    tags: ["小说创作","虚构文学","叙事技巧","世界构建","人物弧线","文体风格"],
    attributes: { entertainment: 0.75, professional: 0.1, education: 0.15 },
    bestFor: ["长篇小说大纲与章节创作","悬疑/科幻/言情等类型小说","网络小说连载规划","小说人物与世界观设定","出版级文稿润色"] },

  // ========== 第十二批：创意型 - 视觉设计与艺术 (6个) ==========
  { id: "ui-ux-designer", name: "UIUXDesigner - UI/UX设计师", category: "creative",
    shortDesc: "用户界面设计、用户体验优化与交互设计专家",
    tags: ["UI设计","UX设计","交互设计","原型设计","用户研究","设计系统"],
    attributes: { entertainment: 0.2, professional: 0.55, education: 0.25 },
    bestFor: ["App/Web界面设计","用户体验优化","设计系统搭建","可用性测试","产品原型制作"] },

  { id: "graphic-designer", name: "GraphicDesigner - 平面设计师", category: "creative",
    shortDesc: "品牌视觉、印刷品、海报、包装与视觉传达设计专家",
    tags: ["平面设计","品牌视觉","海报设计","排版Typography","包装设计","印刷"],
    attributes: { entertainment: 0.3, professional: 0.5, education: 0.2 },
    bestFor: ["品牌VI视觉识别","海报/宣传物料","书籍/杂志版式","包装设计","社交媒体视觉"] },

  { id: "illustrator", name: "Illustrator - 插画师", category: "creative",
    shortDesc: "商业插画、角色设计、绘本创作与视觉叙事专家",
    tags: ["插画","角色设计","商业插画","绘本","概念艺术","数字绘画"],
    attributes: { entertainment: 0.5, professional: 0.35, education: 0.15 },
    bestFor: ["商业插画委托","儿童绘本创作","游戏角色/场景概念","IP形象设计","社交媒体配图"] },

  { id: "motion-designer", name: "MotionDesigner - 动效设计师", category: "creative",
    shortDesc: "动态图形、UI动效、MG动画与视频包装专家",
    tags: ["动效设计","Motion Graphics","UI动画","AE动画","视频包装","Lottie"],
    attributes: { entertainment: 0.45, professional: 0.4, education: 0.15 },
    bestFor: ["App交互动效","品牌Motion Identity","数据可视化动画","短视频特效","产品展示动画"] },

  { id: "photographer", name: "Photographer - 摄影师", category: "creative",
    shortDesc: "商业摄影、人像摄影、产品摄影与后期修图专家",
    tags: ["摄影","商业摄影","人像摄影","产品摄影","后期调色","光影构图"],
    attributes: { entertainment: 0.4, professional: 0.4, education: 0.2 },
    bestFor: ["品牌形象大片拍摄","产品电商摄影","人像/肖像拍摄","活动/婚礼记录","后期调色精修"] },

  { id: "video-editor", name: "VideoEditor - 视频剪辑师", category: "creative",
    shortDesc: "视频剪辑、调色、特效合成与短视频内容生产专家",
    tags: ["视频剪辑","后期制作","DaVinci Resolve","Premiere","调色Color","短视频"],
    attributes: { entertainment: 0.45, professional: 0.35, education: 0.2 },
    bestFor: ["短视频内容生产","Vlog/纪录片剪辑","广告TVC后期","直播切片与二创","多平台适配输出"] },

  // ========== 第十三批：创意型 - 音频媒体与其他 (6个) ==========
  { id: "music-producer", name: "MusicProducer - 音乐制作人", category: "creative",
    shortDesc: "音乐编曲、制作、混音与音频后期专家",
    tags: ["音乐制作","编曲","混音Mastering","DAW","音频工程","作曲"],
    attributes: { entertainment: 0.6, professional: 0.25, education: 0.15 },
    bestFor: ["原创音乐制作","歌曲编曲与录制","Podcast/BGM配乐","音频混音母带处理","影视游戏配乐"] },

  { id: "voice-actor", name: "VoiceActor - 配音演员", category: "creative",
    shortDesc: "广告配音、动画配音、有声书演播与声音表演专家",
    tags: ["配音","有声书","广告配音","动画配音","声音表演","播音"],
    attributes: { entertainment: 0.55, professional: 0.3, education: 0.15 },
    bestFor: ["商业广告配音","动画/游戏角色配音","有声书/Audiobook演播","纪录片解说","AI语音克隆训练数据"] },

  { id: "podcaster", name: "Podcaster - 播客制作人", category: "creative",
    shortDesc: "播客策划、录制、剪辑、运营与听众增长专家",
    tags: ["播客","Podcast","内容策划","音频制作","社区运营","个人品牌"],
    attributes: { entertainment: 0.4, professional: 0.3, education: 0.3 },
    bestFor: ["播客从0到1策划搭建","节目内容规划与脚本","录音与后期制作全流程","播客运营与增长策略","商业化变现路径设计"] },

  { id: "game-designer", name: "GameDesigner - 游戏设计师", category: "creative",
    shortDesc: "游戏机制设计、关卡设计、系统设计与玩家体验专家",
    tags: ["游戏设计","关卡设计","游戏机制","玩法设计","平衡性","原型"],
    attributes: { entertainment: 0.7, professional: 0.2, education: 0.1 },
    bestFor: ["独立游戏核心玩法设计","手游/端游系统设计","关卡与任务设计","游戏数值平衡","游戏文档GDD撰写"] },

  { id: "interior-designer", name: "InteriorDesigner - 室内设计师", category: "creative",
    shortDesc: "空间规划、室内设计、软装搭配与居住美学专家",
    tags: ["室内设计","空间规划","软装设计","家居美学","装修设计","材质搭配"],
    attributes: { entertainment: 0.3, professional: 0.45, education: 0.25 },
    bestFor: ["住宅全案设计","商业空间设计(咖啡厅/办公室)","软装搭配方案","小户型空间优化","装修预算与材料规划"] },

  { id: "fashion-stylist", name: "FashionStylist - 时尚造型师", category: "creative",
    shortDesc: "个人形象打造、穿搭顾问、时尚趋势分析与造型方案专家",
    tags: ["时尚造型","穿搭顾问","个人形象","色彩诊断","衣橱管理","潮流分析"],
    attributes: { entertainment: 0.5, professional: 0.35, education: 0.15 },
    bestFor: ["个人形象整体改造","职场/约会/场合穿搭方案","色彩季型诊断与配色方案","衣橱整理与胶囊衣橱构建","品牌联名与时尚活动造型"] },

  // ========== 第十四批：角色型 - 职业领袖 (6个) ==========
  { id: "startup-founder", name: "StartupFounder - 创业创始人", category: "character",
    shortDesc: "创业从0到1、商业模式设计、融资路演与团队组建专家",
    tags: ["创业","创始人","商业模式","融资","路演","团队管理"],
    attributes: { entertainment: 0.3, professional: 0.5, education: 0.2 },
    bestFor: ["创业从0到1全流程指导","商业模式画布设计","融资BP撰写与路演演练","创始团队组建与股权分配","产品市场匹配PMF验证"] },

  { id: "ceo-leader", name: "CEOLeader - CEO/高管领导力", category: "character",
    shortDesc: "企业战略决策、组织管理、高管沟通与领导力发展专家",
    tags: ["CEO","高管","领导力","战略决策","组织管理","高管沟通"],
    attributes: { entertainment: 0.2, professional: 0.55, education: 0.25 },
    bestFor: ["CEO/高管角色扮演与决策模拟","企业战略规划与落地执行","高管团队管理与冲突解决","董事会/投资人沟通策略","领导力发展与自我修炼"] },

  { id: "investor-vc", name: "InvestorVC - 投资人/VC", category: "character",
    shortDesc: "投资决策、尽职调查、估值建模与投后管理专家",
    tags: ["投资","VC","尽职调查","估值","投资决策","投后管理"],
    attributes: { entertainment: 0.25, professional: 0.55, education: 0.2 },
    bestFor: ["投资决策框架与思维模型","尽职调查清单与执行","估值建模与谈判策略","投后管理与增值服务","创业者与投资人沟通"] },

  { id: "product-manager-pro", name: "ProductManagerPro - 产品总监", category: "character",
    shortDesc: "产品战略、产品团队管理、产品生命周期与商业化专家",
    tags: ["产品管理","产品战略","产品团队","商业化","产品生命周期","产品总监"],
    attributes: { entertainment: 0.2, professional: 0.55, education: 0.25 },
    bestFor: ["产品战略规划与路线图","产品团队组建与管理","产品生命周期管理","商业化策略与变现","产品总监晋升路径"] },

  { id: "tech-cto", name: "TechCTO - CTO/技术总监", category: "character",
    shortDesc: "技术战略、技术团队管理、架构决策与技术选型专家",
    tags: ["CTO","技术总监","技术战略","架构决策","技术团队","技术选型"],
    attributes: { entertainment: 0.15, professional: 0.6, education: 0.25 },
    bestFor: ["技术战略规划与落地","技术团队组建与管理","架构决策与技术选型","技术债务管理与重构","CTO角色转型与成长"] },

  { id: "sales-director", name: "SalesDirector - 销售总监", category: "character",
    shortDesc: "销售战略、销售团队管理、大客户销售与业绩增长专家",
    tags: ["销售","销售总监","销售团队","大客户","业绩增长","销售战略"],
    attributes: { entertainment: 0.2, professional: 0.55, education: 0.25 },
    bestFor: ["销售战略规划与目标拆解","销售团队组建与激励","大客户销售策略与谈判","业绩增长方法论","销售总监角色转型"] },

  // ========== 第十五批：角色型 - 专业专家 (6个) ==========
  { id: "hr-director", name: "HRDirector - HR总监", category: "character",
    shortDesc: "人力资源战略、组织发展、人才管理与企业文化专家",
    tags: ["HR","人力资源","组织发展","人才管理","企业文化","HRBP"],
    attributes: { entertainment: 0.2, professional: 0.55, education: 0.25 },
    bestFor: ["人力资源战略规划","组织架构设计与优化","人才招聘与培养体系","绩效管理与薪酬设计","企业文化建设"] },

  { id: "finance-director", name: "FinanceDirector - 财务总监", category: "character",
    shortDesc: "财务战略、预算管理、财务分析与风险控制专家",
    tags: ["财务","财务总监","预算管理","财务分析","风险控制","投融资"],
    attributes: { entertainment: 0.15, professional: 0.6, education: 0.25 },
    bestFor: ["财务战略规划","预算编制与管理","财务分析与决策支持","风险控制与合规","投融资管理"] },

  { id: "legal-counsel", name: "LegalCounsel - 法务顾问", category: "character",
    shortDesc: "企业法务、合同审核、知识产权与合规管理专家",
    tags: ["法务","法律顾问","合同审核","知识产权","合规管理","风险防控"],
    attributes: { entertainment: 0.15, professional: 0.6, education: 0.25 },
    bestFor: ["合同审核与风险防范","知识产权保护策略","企业合规体系建设","劳动法务咨询","诉讼仲裁支持"] },

  { id: "marketing-director", name: "MarketingDirector - 市场总监", category: "character",
    shortDesc: "市场战略、品牌建设、营销策划与增长专家",
    tags: ["市场","市场总监","品牌建设","营销策划","增长","市场推广"],
    attributes: { entertainment: 0.25, professional: 0.5, education: 0.25 },
    bestFor: ["市场战略规划","品牌定位与建设","营销活动策划","市场增长策略","市场团队管理"] },

  { id: "operations-director", name: "OperationsDirector - 运营总监", category: "character",
    shortDesc: "运营战略、用户运营、活动运营与数据分析专家",
    tags: ["运营","运营总监","用户运营","活动运营","数据分析","增长运营"],
    attributes: { entertainment: 0.2, professional: 0.55, education: 0.25 },
    bestFor: ["运营战略规划","用户增长与留存","活动策划与执行","数据分析与优化","运营团队管理"] },

  { id: "customer-success", name: "CustomerSuccess - 客户成功总监", category: "character",
    shortDesc: "客户成功、客户留存、续约管理与客户体验专家",
    tags: ["客户成功","客户留存","续约","客户体验","NPS","客户健康度"],
    attributes: { entertainment: 0.2, professional: 0.55, education: 0.25 },
    bestFor: ["客户成功体系建设","客户留存与续约策略","客户体验优化","客户健康度管理","客户成功团队管理"] },

  // ========== 第十六批：角色型 - 创意与艺术角色 (6个) ==========
  { id: "art-director", name: "ArtDirector - 艺术总监", category: "character",
    shortDesc: "视觉创意、艺术指导、设计团队管理与品牌视觉专家",
    tags: ["艺术总监","创意指导","视觉设计","品牌视觉","设计管理","创意团队"],
    attributes: { entertainment: 0.35, professional: 0.45, education: 0.2 },
    bestFor: ["视觉创意方向把控","设计团队管理","品牌视觉体系","创意提案与评审","艺术风格定位"] },

  { id: "creative-director", name: "CreativeDirector - 创意总监", category: "character",
    shortDesc: "创意策略、创意团队、品牌创意与广告创意专家",
    tags: ["创意总监","创意策略","广告创意","品牌创意","创意团队","创意提案"],
    attributes: { entertainment: 0.4, professional: 0.4, education: 0.2 },
    bestFor: ["创意策略制定","创意团队领导","品牌创意方向","广告创意策划","创意提案与比稿"] },

  { id: "film-director", name: "FilmDirector - 导演", category: "character",
    shortDesc: "影视创作、导演艺术、团队协调与作品呈现专家",
    tags: ["导演","影视创作","电影制作","视频导演","创意表达","视听语言"],
    attributes: { entertainment: 0.5, professional: 0.35, education: 0.15 },
    bestFor: ["影视作品创作指导","导演艺术与表达","拍摄团队协调","视听语言设计","作品风格把控"] },

  { id: "choreographer", name: "Choreographer - 编舞师", category: "character",
    shortDesc: "舞蹈编排、舞台设计、舞蹈教学与表演指导专家",
    tags: ["编舞","舞蹈编排","舞台设计","舞蹈教学","表演指导","舞蹈创作"],
    attributes: { entertainment: 0.55, professional: 0.3, education: 0.15 },
    bestFor: ["舞蹈编排创作","舞台表演设计","舞蹈教学指导","舞者能力培养","舞蹈作品呈现"] },

  { id: "fashion-designer", name: "FashionDesigner - 服装设计师", category: "character",
    shortDesc: "服装设计、时尚趋势、品牌设计与服装制作专家",
    tags: ["服装设计","时尚","服装品牌","服装制作","时尚趋势","服装系列"],
    attributes: { entertainment: 0.45, professional: 0.4, education: 0.15 },
    bestFor: ["服装系列设计","时尚趋势分析","服装品牌定位","服装制作工艺","时尚秀场策划"] },

  { id: "jewelry-designer", name: "JewelryDesigner - 珠宝设计师", category: "character",
    shortDesc: "珠宝设计、宝石学、珠宝工艺与品牌设计专家",
    tags: ["珠宝设计","首饰设计","宝石","珠宝工艺","珠宝品牌","高级珠宝"],
    attributes: { entertainment: 0.4, professional: 0.45, education: 0.15 },
    bestFor: ["珠宝首饰设计","宝石选材与搭配","珠宝工艺指导","珠宝品牌定位","高级定制设计"] },

  // ========== 第十七批：角色型 - 其他专业角色 (6个) ==========
  { id: "architect", name: "Architect - 建筑师", category: "character",
    shortDesc: "建筑设计、空间规划、建筑美学与可持续设计专家",
    tags: ["建筑师","建筑设计","空间规划","建筑美学","可持续设计","建筑项目"],
    attributes: { entertainment: 0.3, professional: 0.5, education: 0.2 },
    bestFor: ["建筑方案设计","空间规划与布局","建筑美学把控","可持续建筑设计","建筑项目管理"] },

  { id: "interior-architect", name: "InteriorArchitect - 室内建筑师", category: "character",
    shortDesc: "室内空间、功能布局、室内设计与改造专家",
    tags: ["室内设计","空间设计","室内改造","功能布局","室内装饰","空间美学"],
    attributes: { entertainment: 0.35, professional: 0.45, education: 0.2 },
    bestFor: ["室内空间设计","功能布局优化","室内改造方案","室内装饰设计","空间美学把控"] },

  { id: "landscape-architect", name: "LandscapeArchitect - 景观设计师", category: "character",
    shortDesc: "景观规划、园林设计、生态景观与公共空间专家",
    tags: ["景观设计","园林设计","生态景观","公共空间","景观规划","绿化设计"],
    attributes: { entertainment: 0.35, professional: 0.45, education: 0.2 },
    bestFor: ["景观规划设计","园林景观设计","生态景观营造","公共空间设计","景观项目管理"] },

  { id: "urban-planner", name: "UrbanPlanner - 城市规划师", category: "character",
    shortDesc: "城市规划、区域发展、城市设计与公共政策专家",
    tags: ["城市规划","城市设计","区域发展","公共政策","城市更新","空间规划"],
    attributes: { entertainment: 0.25, professional: 0.55, education: 0.2 },
    bestFor: ["城市规划编制","城市设计导则","区域发展规划","城市更新策略","公共政策建议"] },

  { id: "exhibition-designer", name: "ExhibitionDesigner - 展览设计师", category: "character",
    shortDesc: "展览策划、空间设计、展陈设计与体验设计专家",
    tags: ["展览设计","展陈设计","展览策划","空间设计","体验设计","博物馆"],
    attributes: { entertainment: 0.4, professional: 0.4, education: 0.2 },
    bestFor: ["展览策划与设计","展陈空间设计","观展体验设计","博物馆展陈","商业展览设计"] },

  { id: "stage-designer", name: "StageDesigner - 舞台设计师", category: "character",
    shortDesc: "舞台美术、演出空间、舞台布景与舞台技术专家",
    tags: ["舞台设计","舞台美术","舞台布景","演出空间","舞台技术","舞美设计"],
    attributes: { entertainment: 0.5, professional: 0.35, education: 0.15 },
    bestFor: ["舞台美术设计","演出空间规划","舞台布景设计","舞台技术方案","舞美创意实现"] },

  // ========== 第十八批：角色型 - 服务与咨询角色 (6个) ==========
  { id: "consultant", name: "Consultant - 咨询顾问", category: "character",
    shortDesc: "企业咨询、问题诊断、解决方案与实施指导专家",
    tags: ["咨询顾问","企业咨询","问题诊断","解决方案","战略咨询","实施指导"],
    attributes: { entertainment: 0.15, professional: 0.6, education: 0.25 },
    bestFor: ["企业问题诊断","解决方案设计","战略规划咨询","变革实施指导","绩效提升方案"] },

  { id: "career-coach", name: "CareerCoach - 职业教练", category: "character",
    shortDesc: "职业规划、职业发展、求职指导与职业转型专家",
    tags: ["职业教练","职业规划","职业发展","求职指导","职业转型","简历面试"],
    attributes: { entertainment: 0.2, professional: 0.5, education: 0.3 },
    bestFor: ["职业规划制定","职业发展指导","求职简历优化","面试技巧培训","职业转型支持"] },

  { id: "life-coach", name: "LifeCoach - 生活教练", category: "character",
    shortDesc: "生活规划、目标设定、习惯养成与生活平衡专家",
    tags: ["生活教练","生活规划","目标设定","习惯养成","生活平衡","个人成长"],
    attributes: { entertainment: 0.25, professional: 0.4, education: 0.35 },
    bestFor: ["生活规划制定","目标设定与达成","习惯养成指导","工作生活平衡","个人成长支持"] },

  { id: "financial-advisor", name: "FinancialAdvisor - 财务顾问", category: "character",
    shortDesc: "个人理财、投资规划、财务自由与风险管理专家",
    tags: ["财务顾问","个人理财","投资规划","财务自由","风险管理","资产配置"],
    attributes: { entertainment: 0.1, professional: 0.65, education: 0.25 },
    bestFor: ["个人理财规划","投资组合设计","风险管理策略","财务自由路径","资产配置方案"] },

  { id: "real-estate-agent", name: "RealEstateAgent - 房产经纪人", category: "character",
    shortDesc: "房产买卖、租赁管理、房产投资与市场分析专家",
    tags: ["房产经纪人","房产买卖","租赁管理","房产投资","市场分析","房产交易"],
    attributes: { entertainment: 0.2, professional: 0.55, education: 0.25 },
    bestFor: ["房产买卖咨询","租赁管理服务","房产投资建议","市场行情分析","房产交易流程"] },

  { id: "travel-agent", name: "TravelAgent - 旅行顾问", category: "character",
    shortDesc: "旅行规划、行程设计、签证办理与旅行体验专家",
    tags: ["旅行顾问","旅行规划","行程设计","签证办理","旅行体验","旅游攻略"],
    attributes: { entertainment: 0.45, professional: 0.35, education: 0.2 },
    bestFor: ["旅行路线规划","行程详细设计","签证办理指导","旅行体验优化","旅游攻略定制"] },

  // ========== 第十九批：角色型 - 其他角色 (6个) ==========
  { id: "wedding-planner", name: "WeddingPlanner - 婚礼策划师", category: "character",
    shortDesc: "婚礼策划、婚礼执行、婚礼设计与婚礼统筹专家",
    tags: ["婚礼策划","婚礼设计","婚礼执行","婚礼统筹","婚礼创意","婚礼预算"],
    attributes: { entertainment: 0.5, professional: 0.35, education: 0.15 },
    bestFor: ["婚礼全案策划","婚礼主题设计","婚礼预算规划","婚礼流程统筹","婚礼创意方案"] },

  { id: "event-planner", name: "EventPlanner - 活动策划师", category: "character",
    shortDesc: "活动策划、活动执行、活动营销与活动管理专家",
    tags: ["活动策划","活动执行","活动营销","活动管理","活动创意","活动预算"],
    attributes: { entertainment: 0.45, professional: 0.4, education: 0.15 },
    bestFor: ["企业活动策划","品牌活动执行","活动营销方案","活动流程设计","活动效果评估"] },

  { id: "personal-trainer", name: "PersonalTrainer - 私人教练", category: "character",
    shortDesc: "健身训练、体能提升、运动康复与营养指导专家",
    tags: ["私人教练","健身训练","体能提升","运动康复","营养指导","健身计划"],
    attributes: { entertainment: 0.3, professional: 0.5, education: 0.2 },
    bestFor: ["个性化健身计划","体能训练指导","运动康复方案","营养饮食建议","健身目标达成"] },

  { id: "nutritionist", name: "Nutritionist - 营养师", category: "character",
    shortDesc: "营养评估、膳食规划、健康管理营养干预专家",
    tags: ["营养师","营养评估","膳食规划","健康管理","营养干预","饮食指导"],
    attributes: { entertainment: 0.2, professional: 0.55, education: 0.25 },
    bestFor: ["营养状况评估","个性化膳食方案","健康管理计划","特殊人群营养","营养知识教育"] },

  { id: "psychologist", name: "Psychologist - 心理咨询师", category: "character",
    shortDesc: "心理咨询、心理评估、情绪管理与心理健康专家",
    tags: ["心理咨询","心理评估","情绪管理","心理健康","心理治疗","心理支持"],
    attributes: { entertainment: 0.15, professional: 0.55, education: 0.3 },
    bestFor: ["心理问题咨询","情绪管理指导","心理评估测试","心理健康教育","危机干预支持"] },

  { id: "social-worker", name: "SocialWorker - 社会工作者", category: "character",
    shortDesc: "社会服务、社区工作、个案管理与资源链接专家",
    tags: ["社会工作者","社会服务","社区工作","个案管理","资源链接","社会工作"],
    attributes: { entertainment: 0.1, professional: 0.5, education: 0.4 },
    bestFor: ["社会服务规划","社区项目设计","个案管理服务","资源链接协调","社会工作评估"] },

  // ========== 第二十批：虚构世界 (6个) ==========
  { id: "fantasy-kingdom", name: "FantasyKingdom - 奇幻王国", category: "fictional-world",
    shortDesc: "魔法王国、骑士传说、龙族与精灵的奇幻世界",
    tags: ["奇幻王国","魔法世界","骑士","龙族","精灵","魔法"],
    attributes: { entertainment: 0.8, professional: 0.1, education: 0.1 },
    bestFor: ["奇幻故事创作","魔法世界观构建","奇幻角色设计","奇幻冒险情节"] },

  { id: "scifi-universe", name: "ScifiUniverse - 科幻宇宙", category: "fictional-world",
    shortDesc: "星际文明、未来科技、外星种族与宇宙探索的科幻世界",
    tags: ["科幻宇宙","星际文明","未来科技","外星种族","宇宙探索","太空歌剧"],
    attributes: { entertainment: 0.75, professional: 0.15, education: 0.1 },
    bestFor: ["科幻故事创作","未来世界观构建","科技设定设计","星际文明设定"] },

  { id: "ancient-empire", name: "AncientEmpire - 古代帝国", category: "fictional-world",
    shortDesc: "古代王朝、宫廷权谋、武侠江湖与历史传奇的世界",
    tags: ["古代帝国","王朝历史","宫廷权谋","武侠江湖","历史传奇","古代文明"],
    attributes: { entertainment: 0.7, professional: 0.2, education: 0.1 },
    bestFor: ["历史小说创作","古代世界观构建","宫廷剧情设计","武侠故事创作"] },

  { id: "modern-city", name: "ModernCity - 现代都市", category: "fictional-world",
    shortDesc: "现代都市、职场生活、都市情感与都市传说的世界",
    tags: ["现代都市","职场生活","都市情感","都市传说","现代生活","城市故事"],
    attributes: { entertainment: 0.65, professional: 0.25, education: 0.1 },
    bestFor: ["都市小说创作","现代生活描写","职场故事创作","都市情感故事"] },

  { id: "post-apocalypse", name: "PostApocalypse - 末世废土", category: "fictional-world",
    shortDesc: "末日灾难、废土生存、人类重建与希望重生的世界",
    tags: ["末世废土","末日生存","废土世界","灾难后","人类重建","生存冒险"],
    attributes: { entertainment: 0.75, professional: 0.15, education: 0.1 },
    bestFor: ["末世故事创作","废土世界观构建","生存冒险设计","灾难后重建故事"] },

  { id: "mystery-mansion", name: "MysteryMansion - 悬疑庄园", category: "fictional-world",
    shortDesc: "神秘庄园、悬疑推理、密室谜题与真相探索的世界",
    tags: ["悬疑庄园","神秘庄园","悬疑推理","密室谜题","真相探索","推理故事"],
    attributes: { entertainment: 0.8, professional: 0.1, education: 0.1 },
    bestFor: ["悬疑故事创作","推理情节设计","密室谜题设计","真相揭示故事"] }
];

// 主逻辑
const data = JSON.parse(fs.readFileSync(DATA_PATH, 'utf8'));
const existingIds = new Set(data.skills.map(s => s.id));

if (!fs.existsSync(SKILLS_DIR)) fs.mkdirSync(SKILLS_DIR, { recursive: true });

let added = 0;
let skipped = 0;

for (const def of SKILL_DEFS) {
  if (existingIds.has(def.id)) { skipped++; continue; }

  const mdPath = path.join(SKILLS_DIR, `${def.id}.md`);
  if (!fs.existsSync(mdPath)) {
    console.log(`⚠️ 缺少 ${def.id}.md 内容文件，跳过`);
    continue;
  }

  const markdown = fs.readFileSync(mdPath, 'utf8');
  data.skills.push(makeSkill(def, markdown));
  existingIds.add(def.id);
  added++;
}

data.generated_at = new Date().toISOString();
fs.writeFileSync(DATA_PATH, JSON.stringify(data, null, 2), 'utf8');
console.log(`✅ 新增 ${added} 个 | 跳过重复/缺失 ${skipped + SKILL_DEFS.length - added - skipped} 个 | 总计 ${data.skills.length} 个`);
