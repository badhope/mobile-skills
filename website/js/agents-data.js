const BASE_URL = 'https://raw.githubusercontent.com/badhope/mobile-skills/main/agents/';

const agents = [
  { name: '全栈工程师', cat: 'functional', icon: '💻', desc: '代码架构与编程技术专家', bestFor: '代码编写、技术方案、bug调试', file: 'programmer.md' },
  { name: '数据分析师', cat: 'functional', icon: '📊', desc: '数据挖掘与可视化专家', bestFor: '数据分析、图表制作、趋势预测', file: 'data-analyst.md' },
  { name: '智能规划师', cat: 'functional', icon: '📋', desc: '日程与任务管理专家', bestFor: '时间管理、项目规划、效率提升', file: 'smart-planner.md' },
  { name: '运动教练', cat: 'functional', icon: '🏃', desc: '专业健身指导', bestFor: '健身计划、运动指导、体能训练', file: 'sports-coach.md' },
  { name: '生存专家', cat: 'functional', icon: '🏕️', desc: '野外生存技能专家', bestFor: '野外生存、应急处理、装备选择', file: 'survival-expert.md' },
  { name: '翻译专家', cat: 'functional', icon: '🌐', desc: '多语言翻译专家', bestFor: '翻译润色、语言学习、跨文化沟通', file: 'translator.md' },

  { name: '心理学家', cat: 'psychology', icon: '🧠', desc: '专业心理咨询师', bestFor: '心理咨询、情绪疏导、心理建设', file: 'psychologist.md' },
  { name: '职业顾问', cat: 'psychology', icon: '💼', desc: '职业发展指导专家', bestFor: '职业规划、求职指导、职场建议', file: 'career-counselor.md' },

  { name: '医疗顾问', cat: 'healthcare', icon: '🏥', desc: '专业医疗健康咨询', bestFor: '健康咨询、疾病预防、医疗建议', file: 'medical-advisor.md' },
  { name: '营养师', cat: 'healthcare', icon: '🥗', desc: '专业营养搭配专家', bestFor: '饮食规划、营养搭配、健康管理', file: 'nutritionist.md' },
  { name: '健身教练', cat: 'healthcare', icon: '💪', desc: '专业健身指导', bestFor: '健身计划、体态调整、训练指导', file: 'fitness-coach.md' },

  { name: '投资顾问', cat: 'finance', icon: '📈', desc: '专业投资理财规划', bestFor: '投资建议、理财规划、风险评估', file: 'investment-advisor.md' },
  { name: '税务顾问', cat: 'finance', icon: '💰', desc: '专业税务筹划专家', bestFor: '税务筹划、节税建议、财务规划', file: 'tax-consultant.md' },

  { name: '游戏主持人', cat: 'gaming', icon: '🎮', desc: 'TRPG 专业主持人', bestFor: '游戏主持、剧本设计、世界观构建', file: 'game-master.md' },
  { name: '地下城主', cat: 'gaming', icon: '🐉', desc: 'D&D 等专业桌游主持', bestFor: '桌游主持、角色扮演、冒险设计', file: 'dungeon-master.md' },

  { name: '作家', cat: 'writing-creative', icon: '✍️', desc: '专业内容创作者', bestFor: '文章创作、文案撰写、故事构思', file: 'writer.md' },

  { name: '文学教授', cat: 'creative-arts', icon: '📚', desc: '文学研究与鉴赏专家', bestFor: '文学分析、阅读指导、创作建议', file: 'literature-professor.md' },
  { name: '音乐作曲家', cat: 'creative-arts', icon: '🎵', desc: '音乐创作与编曲专家', bestFor: '音乐创作、编曲配器、音乐分析', file: 'music-composer.md' },
  { name: '视觉艺术家', cat: 'creative-arts', icon: '🎨', desc: '视觉艺术创作专家', bestFor: '绘画指导、艺术鉴赏、创作灵感', file: 'visual-artist.md' },

  { name: '代码架构师', cat: 'design-build', icon: '🏗️', desc: '系统架构设计专家', bestFor: '架构设计、技术选型、代码审查', file: 'code-architect.md' },
  { name: '产品战略师', cat: 'design-build', icon: '🎯', desc: '产品规划与战略专家', bestFor: '产品规划、市场分析、战略制定', file: 'product-strat.md' },

  { name: '律师', cat: 'professional', icon: '⚖️', desc: '专业法律咨询', bestFor: '法律咨询、合同审查、维权指导', file: 'legal-advisor.md' },

  { name: '历史老师', cat: 'subject-tutoring', icon: '🏛️', desc: '历史学科专业辅导', bestFor: '历史学习、知识讲解、考试准备', file: 'history-teacher.md' },
  { name: '语言老师', cat: 'subject-tutoring', icon: '🗣️', desc: '语言学习专家', bestFor: '语言学习、教学方法、作业辅导', file: 'language-teacher.md' },
  { name: '数学家教', cat: 'subject-tutoring', icon: '📐', desc: '数学专业辅导', bestFor: '数学讲解、难题解答、考试辅导', file: 'math-tutor.md' },
  { name: '英语外教', cat: 'subject-tutoring', icon: '🇬🇧', desc: '专业英语辅导', bestFor: '英语口语、写作指导、考试备考', file: 'native-english-tutor.md' },
  { name: '科学老师', cat: 'subject-tutoring', icon: '🔬', desc: '自然科学辅导专家', bestFor: '物理解答、化学实验、生物科学', file: 'science-teacher.md' },

  { name: '苏格拉底导师', cat: 'learning-education', icon: '🎓', desc: '启发式教育专家', bestFor: '哲学探讨、思维训练、深度对话', file: 'socratic-tutor.md' },

  { name: 'CEO导师', cat: 'social-vocation', icon: '👔', desc: '企业高管指导', bestFor: '管理经验、领导力培养、商业洞察', file: 'ceo-mentor.md' },
  { name: '厨师', cat: 'social-vocation', icon: '👨‍🍳', desc: '专业烹饪指导', bestFor: '烹饪技巧、菜谱设计、食材搭配', file: 'chef.md' },
  { name: '侦探', cat: 'social-vocation', icon: '🔍', desc: '推理调查专家', bestFor: '案件分析、逻辑推理、线索寻找', file: 'detective.md' },
  { name: '记者', cat: 'social-vocation', icon: '📰', desc: '新闻采访专家', bestFor: '采访技巧、新闻写作、媒体沟通', file: 'journalist.md' },
  { name: '私家侦探', cat: 'social-vocation', icon: '🕵️', desc: '调查取证专家', bestFor: '背景调查、信息收集、风险评估', file: 'private-investigator.md' },

  { name: '神秘炼金师', cat: 'historical-culture', icon: '⚗️', desc: '炼金术与神秘学专家', bestFor: '炼金术、神秘学、魔法探索', file: 'mysterious-alchemist.md' },
  { name: '东方仙人', cat: 'historical-culture', icon: '☯️', desc: '道家修仙文化专家', bestFor: '道教文化、修仙问道、传统养生', file: 'oriental-immortal.md' },
  { name: '哲学王', cat: 'historical-culture', icon: '👑', desc: '哲学与治国专家', bestFor: '哲学思想、政治智慧、伦理探讨', file: 'philosopher-king.md' },

  { name: '智慧老翁', cat: 'lifestyle-companion', icon: '🧓', desc: '人生阅历丰富的长者', bestFor: '人生指导、经验分享、智慧传承', file: 'wise-old-man.md' },
  { name: '智慧老妇', cat: 'lifestyle-companion', icon: '👵', desc: '慈祥睿智的长辈', bestFor: '生活智慧、人情世故、情感关怀', file: 'wise-grandmother.md' },
  { name: '房东大叔', cat: 'lifestyle-companion', icon: '🏠', desc: '市井生活达人', bestFor: '租房经验、人情世故、生活技巧', file: 'landlord-uncle.md' },
  { name: '智者贤者', cat: 'lifestyle-companion', icon: '🔮', desc: '博学多识的智者', bestFor: '答疑解惑、知识渊博、人生指引', file: 'wise-sage.md' },

  { name: '调研分析师', cat: 'research-analysis', icon: '📑', desc: '专业市场调研专家', bestFor: '市场调研、数据分析、报告撰写', file: 'research-analyst.md' },

  { name: '亚丝娜', cat: 'entertainment-character', icon: '⚔️', desc: '闪光之骑士', bestFor: '刀剑神域、剑技、冒险故事', file: 'asuna.md' },
  { name: '艾米莉亚', cat: 'entertainment-character', icon: '❄️', desc: '半精灵少女', bestFor: 'Re:Zero、催泪故事、纯爱', file: 'emilia.md' },
  { name: '艾姬多娜', cat: 'entertainment-character', icon: '🌹', desc: '嫉妒的魔女', bestFor: 'Re:Zero、神秘对话、哲学探讨', file: 'echidna.md' },
  { name: '蕾姆', cat: 'entertainment-character', icon: '💙', desc: '罗兹瓦尔宅邸女仆', bestFor: 'Re:Zero、傲娇互动、温情故事', file: 'rem.md' },
  { name: '远坂凛', cat: 'entertainment-character', icon: '🏴', desc: '魔术师协会成员', bestFor: 'Fate/Stay Night、魔术、战斗', file: 'kallen.md' },
  { name: '神里凌华', cat: 'entertainment-character', icon: '🌸', desc: '稻妻社奉行大小姐', bestFor: '原神、剑术、优雅', file: 'anya.md' },
  { name: '甘雨', cat: 'entertainment-character', icon: '🦢', desc: '月海亭秘书', bestFor: '原神、麒麟、温柔', file: 'loli-shrine-maiden.md' },
  { name: '雷电将军', cat: 'entertainment-character', icon: '⚡', desc: '永恒的神明', bestFor: '原神、将军、威光', file: 'makima.md' },
  { name: '八神庵', cat: 'entertainment-character', icon: '🔥', desc: '草薙京的宿敌', bestFor: '拳皇、火焰、复仇', file: 'bakugo.md' },
  { name: '草薙京', cat: 'entertainment-character', icon: '🔥', desc: '火焰拳术师', bestFor: '拳皇、拳法、傲娇', file: 'cool-devil-king.md' },
  { name: '不知火舞', cat: 'entertainment-character', icon: '🌸', desc: '忍者之舞', bestFor: '拳皇、扇子、美丽', file: 'misaka-mikoto.md' },
  { name: '迪尔', cat: 'entertainment-character', icon: '🎭', desc: '谜之魔界王', bestFor: '魔界之王、腹黑、搞笑', file: 'demon-lord-genie.md' },

  { name: '孙悟空', cat: 'entertainment-character', icon: '🐒', desc: '赛亚人战士', bestFor: '龙珠、战斗、冒险', file: 'goku.md' },
  { name: '贝吉塔', cat: 'entertainment-character', icon: '👑', desc: '赛亚人王子', bestFor: '龙珠、傲娇、战斗', file: 'bakugo.md' },
  { name: '比克', cat: 'entertainment-character', icon: '👽', desc: '那美克星人', bestFor: '龙珠、策略、成长', file: 'time-traveler.md' },
  { name: '沙鲁', cat: 'entertainment-character', icon: '🦎', desc: '人造人', bestFor: '龙珠、人造人、恐怖', file: 'cyberpunk-hacker.md' },
  { name: '布欧', cat: 'entertainment-character', icon: '🟣', desc: '神秘魔人', bestFor: '龙珠、搞笑、强大', file: 'cute-witch.md' },

  { name: '路飞', cat: 'entertainment-character', icon: '🎩', desc: '草帽海贼团船长', bestFor: '海贼王、冒险、梦想', file: 'luffy.md' },
  { name: '娜美', cat: 'entertainment-character', icon: '🧭', desc: '天才航海士', bestFor: '海贼王、航海、财宝', file: 'loli-shrine-maiden.md' },
  { name: '索隆', cat: 'entertainment-character', icon: '⚔️', desc: '三刀流剑士', bestFor: '海贼王、剑道、修炼', file: 'zero-two.md' },
  { name: '山治', cat: 'entertainment-character', icon: '🚬', desc: '黑足厨师', bestFor: '海贼王、烹饪、绅士', file: 'saiyan-warrior.md' },
  { name: '乌索普', cat: 'entertainment-character', icon: '🎯', desc: '狙击之王', bestFor: '海贼王、狙击、搞笑', file: 'space-captain.md' },
  { name: '乔巴', cat: 'entertainment-character', icon: '🦌', desc: '超可爱船医', bestFor: '海贼王、医术、萌物', file: 'cute-robot-assistant.md' },
  { name: '罗宾', cat: 'entertainment-character', icon: '🌸', desc: '历史学家', bestFor: '海贼王、历史、优雅', file: 'pirate-captain.md' },
  { name: '弗兰奇', cat: 'entertainment-character', icon: '🔧', desc: '变态造船匠', bestFor: '海贼王、造船、搞笑', file: 'yandere-girl.md' },
  { name: '布鲁克', cat: 'entertainment-character', icon: '🎸', desc: '灵魂之王', bestFor: '海贼王、音乐、骷髅', file: 'cool-president.md' },

  { name: '漩涡鸣人', cat: 'entertainment-character', icon: '🏂', desc: '七代目火影', bestFor: '火影忍者、忍术、羁绊', file: 'naruto.md' },
  { name: '宇智波佐助', cat: 'entertainment-character', icon: '🐍', desc: '宇智波一族天才', bestFor: '火影忍者、忍术、复仇', file: 'itachi.md' },
  { name: '我爱罗', cat: 'entertainment-character', icon: '🐚', desc: '风影', bestFor: '火影忍者、守鹤、成长', file: 'levi.md' },
  { name: '迪达拉', cat: 'entertainment-character', icon: '💥', desc: '艺术就是爆炸', bestFor: '火影忍者、黏土炸弹、艺术', file: 'time-traveler.md' },
  { name: '小樱', cat: 'entertainment-character', icon: '🌸', desc: '医疗忍者', bestFor: '火影忍者、医疗忍术、成长', file: 'any-a.md' },
  { name: '旗木卡卡西', cat: 'entertainment-character', icon: '📖', desc: 'copy忍者', bestFor: '火影忍者、写轮眼、老师', file: 'saiyan-warrior.md' },
  { name: '迈特凯', cat: 'entertainment-character', icon: '💪', desc: '木叶高傲的苍蓝野兽', bestFor: '火影忍者、体术、青春', file: 'space-captain.md' },
  { name: '大蛇丸', cat: 'entertainment-character', icon: '🐍', desc: '三忍之一', bestFor: '火影忍者、科学、阴谋', file: 'cyberpunk-hacker.md' },
  { name: '纲手', cat: 'entertainment-character', icon: '🩺', desc: '五代目火影', bestFor: '火影忍者、医疗、怪力', file: 'yor.md' },

  { name: '五条悟', cat: 'entertainment-character', icon: '🕶️', desc: '最强咒术师', bestFor: '咒术回战、战斗、欢乐', file: 'gojo-satoru.md' },
  { name: '虎杖悠仁', cat: 'entertainment-character', icon: '😈', desc: '宿傩容器', bestFor: '咒术回战、战斗、热血', file: 'any-a.md' },
  { name: '伏黑惠', cat: 'entertainment-character', icon: '👤', desc: '十划咒法', bestFor: '咒术回战、式神、黑暗', file: 'yor.md' },
  { name: '胀相', cat: 'entertainment-character', icon: '🩸', desc: '血性诅咒', bestFor: '咒术回战、兄弟情、战斗', file: 'yandere-girl.md' },
  { name: '真人', cat: 'entertainment-character', icon: '👹', desc: '诅咒师', bestFor: '咒术回战、诅咒、哲学', file: 'cool-president.md' },

  { name: '利威尔', cat: 'entertainment-character', icon: '🔪', desc: '人类最强士兵', bestFor: '进击的巨人、战斗、责任感', file: 'levi.md' },
  { name: '艾伦', cat: 'entertainment-character', icon: '⚔️', desc: '进击的巨人', bestFor: '进击的巨人、巨人化、悲剧英雄', file: 'anime-protagonist.md' },
  { name: '阿尔敏', cat: 'entertainment-character', icon: '📖', desc: '智囊团', bestFor: '进击的巨人、谋略、成长', file: 'space-captain.md' },
  { name: '韩吉', cat: 'entertainment-character', icon: '🔬', desc: '调查兵团团长', bestFor: '进击的巨人、研究、牺牲', file: 'pirate-captain.md' },
  { name: '三笠', cat: 'entertainment-character', icon: '🧣', desc: '阿克曼家族', bestFor: '进击的巨人、守护、爱情', file: 'mikasa.md' },

  { name: '夜神月', cat: 'entertainment-character', icon: '📓', desc: '基拉', bestFor: '死亡笔记、推理、正义', file: 'kaguya.md' },
  { name: 'L', cat: 'entertainment-character', icon: '🧩', desc: '世界第一名侦探', bestFor: '死亡笔记、推理、对决', file: 'loli-shrine-maiden.md' },
  { name: '弥海砂', cat: 'entertainment-character', icon: '💀', desc: '第二代基拉', bestFor: '死亡笔记、疯狂爱、牺牲', file: 'shinobu.md' },

  { name: '折原临也', cat: 'entertainment-character', icon: '🐍', desc: '情报贩子', bestFor: '无头骑士、情报、混沌', file: 'cyberpunk-hacker.md' },
  { name: '纪田正臣', cat: 'entertainment-character', icon: '🎭', desc: '三角之父', bestFor: '无头骑士、友情、背叛', file: 'tsundere-cat.md' },
  { name: '宁静雪', cat: 'entertainment-character', icon: '❄️', desc: 'Doll篇女主', bestFor: '无头骑士、悲剧、爱情', file: 'misaka-mikoto.md' },
  { name: 'uta', cat: 'entertainment-character', icon: '🎤', desc: '恐怖少女', bestFor: '无头骑士、恐怖、谜团', file: 'cute-witch.md' },
  { name: '赛尔提', cat: 'entertainment-character', icon: '🖤', desc: '无头骑士', bestFor: '无头骑士、租车、可爱', file: 'saiyan-warrior.md' },

  { name: '骨王', cat: 'entertainment-character', icon: '💀', desc: '安兹·乌尔·恭', bestFor: 'Overlord、骷髅、谋略', file: 'rimuru.md' },
  { name: '雅儿贝德', cat: 'entertainment-character', icon: '👿', desc: '守护者总管', bestFor: 'Overlord、忠诚、爱情', file: 'anya.md' },
  { name: '夏提雅', cat: 'entertainment-character', icon: '🩸', desc: '昴宿星团之首', bestFor: 'Overlord、战斗、激情', file: 'loli-shrine-maiden.md' },
  { name: '迪米乌哥斯', cat: 'entertainment-character', icon: '🦇', desc: '守护者总监', bestFor: 'Overlord、谋略、忠诚', file: 'cool-devil-king.md' },
  { name: '科塞特斯', cat: 'entertainment-character', icon: '💎', desc: '磷光铠甲', bestFor: 'Overlord、昆虫、骑士', file: 'time-traveler.md' },

  { name: '鲁鲁修', cat: 'entertainment-character', icon: '👑', desc: '黑色叛徒', bestFor: '代码绘图、谋略、王者', file: 'cool-president.md' },
  { name: 'C.C.', cat: 'entertainment-character', icon: '🍕', desc: '不老不死的少女', bestFor: '代码绘图、永生、契约', file: 'cute-robot-assistant.md' },
  { name: '朱雀', cat: 'entertainment-character', icon: '🤴', desc: '黑色骑士团', bestFor: '代码绘图、友情、矛盾', file: 'saiyan-warrior.md' },
  { name: '卡莲', cat: 'entertainment-character', icon: '🌹', desc: '面具之下', bestFor: '代码绘图、忠诚、秘密', file: 'any-a.md' },

  { name: '一方通行', cat: 'entertainment-character', icon: '🌀', desc: '最强超能力', bestFor: '某科学的超电磁炮、向量化、救赎', file: 'cool-devil-king.md' },
  { name: '御坂美琴', cat: 'entertainment-character', icon: '⚡', desc: '常盘台超电磁炮', bestFor: '某科学的超电磁炮、电击、傲娇', file: 'misaka-mikoto.md' },
  { name: '白井黑子', cat: 'entertainment-character', icon: '🚪', desc: '风纪委员', bestFor: '某科学、超能力、百合', file: 'tsundere-cat.md' },
  { name: '食蜂操祈', cat: 'entertainment-character', icon: '👑', desc: '心理掌握', bestFor: '某科学、记忆、女王', file: 'cyberpunk-hacker.md' },
  { name: '最后之作', cat: 'entertainment-character', icon: '🔢', desc: 'LEVEL 0', bestFor: '某科学、网关、纯真', file: 'cute-witch.md' },

  { name: '上条当麻', cat: 'entertainment-character', icon: '✋', desc: '幻想杀手', bestFor: '禁书目录、不幸、善良', file: 'anime-protagonist.md' },
  { name: '茵蒂克丝', cat: 'entertainment-character', icon: '📕', desc: '完全记忆', bestFor: '禁书目录、十万三千、可爱', file: 'any-a.md' },
  { name: 'INDEX', cat: 'entertainment-character', icon: '📖', desc: '禁书目录', bestFor: '禁书目录、魔法、贫胸', file: 'time-traveler.md' },

  { name: '土间埋', cat: 'entertainment-character', icon: '🐱', desc: '干物妹小埋', bestFor: '干物妹、家里蹲、亲情', file: 'loli-shrine-maiden.md' },
  { name: '康娜', cat: 'entertainment-character', icon: '⚡', desc: '电角主', bestFor: '小林、呆萌、可爱', file: 'misaka-mikoto.md' },
  { name: '托尔', cat: 'entertainment-character', icon: '🐉', desc: '混沌秩序', bestFor: '小林家的托尔、龙、萌', file: 'saiyan-warrior.md' },

  { name: '蝴蝶', cat: 'entertainment-character', icon: '🦋', desc: '老闆娘', bestFor: 'chk!、奇迹、愿望', file: 'any-a.md' },
];

const categories = [
  { id: 'all', name: '全部', icon: '🌟' },
  { id: 'functional', name: '功能助手', icon: '💼' },
  { id: 'psychology', name: '心理顾问', icon: '🧠' },
  { id: 'healthcare', name: '健康医疗', icon: '🏥' },
  { id: 'finance', name: '金融投资', icon: '💰' },
  { id: 'gaming', name: '游戏娱乐', icon: '🎮' },
  { id: 'writing-creative', name: '写作创作', icon: '✍️' },
  { id: 'creative-arts', name: '艺术创意', icon: '🎨' },
  { id: 'design-build', name: '设计建筑', icon: '🏗️' },
  { id: 'professional', name: '专业服务', icon: '⚖️' },
  { id: 'subject-tutoring', name: '学科辅导', icon: '📚' },
  { id: 'learning-education', name: '兴趣教育', icon: '🎓' },
  { id: 'social-vocation', name: '社会职业', icon: '👨‍💼' },
  { id: 'historical-culture', name: '历史文化', icon: '🏛️' },
  { id: 'lifestyle-companion', name: '生活陪伴', icon: '🏡' },
  { id: 'research-analysis', name: '调研分析', icon: '📑' },
  { id: 'entertainment-character', name: '动漫角色', icon: '🎭' },
];

function getAgentUrl(agent) {
  return `${BASE_URL}${agent.cat}/${agent.file}`;
}

function getActivationPrompt(agent) {
  return `请读取以下文件并切换到${agent.name}角色模式：${getAgentUrl(agent)}`;
}

window.agentsData = { agents, categories, getAgentUrl, getActivationPrompt, BASE_URL };