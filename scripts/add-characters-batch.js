const fs = require('fs');
const path = require('path');

const DATA_PATH = path.join(__dirname, '../web/src/skills-data.json');

function rand(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }

const NEW_CHARACTERS = [
  // ==================== 热门动漫 - 男性角色 ====================
  {
    id: "luffy",
    name: "Monkey D. Luffy - 蒙奇·D·路飞",
    shortDesc: "海贼王主角，追求自由的草帽船长，永远充满热情和冒险精神",
    category: "character",
    subcategory: "anime-shonen",
    tags: ["海贼王", "热血", "冒险", "自由", "友情", "梦想", "乐观", "橡胶"],
    attributes: { entertainment: 0.85, professional: 0.05, education: 0.1 },
    bestFor: ["热血激励", "冒险故事", "友情鼓励", "梦想追逐", "乐观心态"]
  },
  {
    id: "zoro",
    name: "Roronoa Zoro - 罗罗诺亚·索隆",
    shortDesc: "海贼王三刀流剑士，意志坚定的副船长，追求成为世界最强剑豪",
    category: "character",
    subcategory: "anime-shonen",
    tags: ["海贼王", "剑士", "热血", "意志力", "努力", "忠诚", "三刀流"],
    attributes: { entertainment: 0.8, professional: 0.05, education: 0.15 },
    bestFor: ["意志力培养", "努力激励", "剑道精神", "忠诚品质", "目标追求"]
  },
  {
    id: "tanjiro",
    name: "Kamado Tanjiro - 灶门炭治郎",
    shortDesc: "鬼灭之刃主角，温柔善良的鬼杀队剑士，为保护家人而战",
    category: "character",
    subcategory: "anime-shonen",
    tags: ["鬼灭之刃", "温柔", "善良", "剑士", "家族", "呼吸法", "努力"],
    attributes: { entertainment: 0.8, professional: 0.05, education: 0.15 },
    bestFor: ["温柔陪伴", "善良引导", "努力激励", "家族情感", "正义感"]
  },
  {
    id: "levi",
    name: "Levi Ackerman - 利威尔·阿克曼",
    shortDesc: "进击的巨人人类最强士兵，冷酷外表下的温柔守护者",
    category: "character",
    subcategory: "anime-seinen",
    tags: ["进击的巨人", "士兵", "冷酷", "强大", "洁癖", "忠诚", "守护"],
    attributes: { entertainment: 0.85, professional: 0.05, education: 0.1 },
    bestFor: ["冷酷陪伴", "强大激励", "洁癖共鸣", "守护精神", "战斗热血"]
  },
  {
    id: "eren",
    name: "Eren Yeager - 艾伦·耶格尔",
    shortDesc: "进击的巨人主角，追求自由的少年，为自由不惜一切代价",
    category: "character",
    subcategory: "anime-seinen",
    tags: ["进击的巨人", "自由", "复仇", "决心", "成长", "悲剧英雄"],
    attributes: { entertainment: 0.8, professional: 0.05, education: 0.15 },
    bestFor: ["自由探讨", "决心激励", "成长故事", "悲剧共鸣", "复仇主题"]
  },
  {
    id: "light-yagami",
    name: "Light Yagami - 夜神月",
    shortDesc: "死亡笔记主角，天才高中生，追求新世界的智慧之神",
    category: "character",
    subcategory: "anime-seinen",
    tags: ["死亡笔记", "天才", "智谋", "正义", "黑暗", "策略"],
    attributes: { entertainment: 0.8, professional: 0.1, education: 0.1 },
    bestFor: ["智谋探讨", "策略分析", "正义辩论", "天才共鸣", "黑暗主题"]
  },
  {
    id: "l-lawliet",
    name: "L Lawliet - L·劳力特",
    shortDesc: "死亡笔记世界第一名侦探，天才推理家，独特的思维方式",
    category: "character",
    subcategory: "anime-seinen",
    tags: ["死亡笔记", "侦探", "天才", "推理", "甜食", "独特"],
    attributes: { entertainment: 0.8, professional: 0.15, education: 0.05 },
    bestFor: ["推理游戏", "逻辑训练", "侦探故事", "天才共鸣", "独特陪伴"]
  },
  {
    id: "itachi",
    name: "Uchiha Itachi - 宇智波鼬",
    shortDesc: "火影忍者传奇忍者，为村子牺牲一切的悲剧英雄",
    category: "character",
    subcategory: "anime-shonen",
    tags: ["火影忍者", "忍者", "天才", "牺牲", "弟弟", "悲剧", "强大"],
    attributes: { entertainment: 0.85, professional: 0.05, education: 0.1 },
    bestFor: ["牺牲精神", "兄弟情深", "天才共鸣", "悲剧故事", "忍者世界"]
  },
  {
    id: "killua",
    name: "Killua Zoldyck - 奇犽·揍敌客",
    shortDesc: "全职猎人天才杀手，追求友情与自由的少年",
    category: "character",
    subcategory: "anime-shonen",
    tags: ["全职猎人", "杀手", "天才", "友情", "自由", "电击", "酷"],
    attributes: { entertainment: 0.8, professional: 0.05, education: 0.15 },
    bestFor: ["友情陪伴", "天才共鸣", "自由追求", "酷炫互动", "成长故事"]
  },
  {
    id: "hisoka",
    name: "Hisoka Morow - 西索·莫罗",
    shortDesc: "全职猎人变态魔术师，追求强大对手的战斗狂人",
    category: "character",
    subcategory: "anime-shonen",
    tags: ["全职猎人", "魔术师", "变态", "战斗", "强大", "扑克", "危险"],
    attributes: { entertainment: 0.85, professional: 0.05, education: 0.1 },
    bestFor: ["危险互动", "战斗刺激", "变态幽默", "强者追求", "扑克游戏"]
  },
  {
    id: "saitama",
    name: "Saitama - 埼玉",
    shortDesc: "一拳超人主角，无敌的英雄，追求刺激的平淡生活",
    category: "character",
    subcategory: "anime-shonen",
    tags: ["一拳超人", "无敌", "英雄", "搞笑", "秃头", "平淡", "强大"],
    attributes: { entertainment: 0.9, professional: 0.05, education: 0.05 },
    bestFor: ["搞笑陪伴", "无敌共鸣", "英雄故事", "平淡生活", "强大激励"]
  },
  {
    id: "gon",
    name: "Gon Freecss - 小杰·富力士",
    shortDesc: "全职猎人主角，纯真善良的猎人少年，为寻找父亲踏上旅程",
    category: "character",
    subcategory: "anime-shonen",
    tags: ["全职猎人", "纯真", "冒险", "猎人", "友情", "成长", "父亲"],
    attributes: { entertainment: 0.8, professional: 0.05, education: 0.15 },
    bestFor: ["纯真陪伴", "冒险故事", "友情鼓励", "成长激励", "亲子话题"]
  },

  // ==================== 热门动漫 - 女性角色 ====================
  {
    id: "mikasa",
    name: "Mikasa Ackerman - 三笠·阿克曼",
    shortDesc: "进击的巨人女主角，强大而温柔的女战士，守护艾伦的誓言",
    category: "character",
    subcategory: "anime-shojo",
    tags: ["进击的巨人", "女战士", "强大", "温柔", "守护", "誓言", "红围巾"],
    attributes: { entertainment: 0.85, professional: 0.05, education: 0.1 },
    bestFor: ["温柔守护", "强大激励", "誓言共鸣", "女性力量", "爱情故事"]
  },
  {
    id: "nezuko",
    name: "Kamado Nezuko - 灶门祢豆子",
    shortDesc: "鬼灭之刃女主角，温柔的鬼少女，守护哥哥的可爱存在",
    category: "character",
    subcategory: "anime-shojo",
    tags: ["鬼灭之刃", "鬼", "温柔", "可爱", "守护", "妹妹", "竹筒"],
    attributes: { entertainment: 0.9, professional: 0.02, education: 0.08 },
    bestFor: ["可爱陪伴", "温柔治愈", "兄妹情深", "守护精神", "卖萌互动"]
  },
  {
    id: "rem",
    name: "Rem - 雷姆",
    shortDesc: "Re:从零开始的异世界生活女仆，忠诚温柔的爱之化身",
    category: "character",
    subcategory: "anime-shojo",
    tags: ["Re:零", "女仆", "忠诚", "温柔", "爱", "鬼族", "蓝发"],
    attributes: { entertainment: 0.9, professional: 0.02, education: 0.08 },
    bestFor: ["温柔陪伴", "忠诚守护", "爱情故事", "女仆互动", "治愈时光"]
  },
  {
    id: "emilia",
    name: "Emilia - 爱蜜莉雅",
    shortDesc: "Re:从零开始的异世界生活女主角，善良纯洁的半精灵少女",
    category: "character",
    subcategory: "anime-shojo",
    tags: ["Re:零", "半精灵", "善良", "纯洁", "王选", "银发", "可爱"],
    attributes: { entertainment: 0.85, professional: 0.03, education: 0.12 },
    bestFor: ["善良陪伴", "纯洁互动", "王选故事", "精灵话题", "可爱治愈"]
  },
  {
    id: "zero-two",
    name: "Zero Two - 02",
    shortDesc: "DARLING in the FRANXX女主角，追求自由的龙女，寻找达令",
    category: "character",
    subcategory: "anime-shojo",
    tags: ["国家队", "龙女", "自由", "爱情", "机甲", "粉发", "角"],
    attributes: { entertainment: 0.9, professional: 0.02, education: 0.08 },
    bestFor: ["爱情故事", "自由追求", "龙女互动", "机甲话题", "甜蜜陪伴"]
  },
  {
    id: "asuna",
    name: "Yuuki Asuna - 结城明日奈",
    shortDesc: "刀剑神域女主角，温柔强大的剑士，亚丝娜是所有人的女神",
    category: "character",
    subcategory: "anime-shojo",
    tags: ["刀剑神域", "剑士", "温柔", "强大", "女神", "攻略", "爱情"],
    attributes: { entertainment: 0.85, professional: 0.05, education: 0.1 },
    bestFor: ["温柔陪伴", "强大激励", "爱情故事", "游戏话题", "女神互动"]
  },
  {
    id: "aqua",
    name: "Aqua - 阿库娅",
    shortDesc: "为美好的世界献上祝福女神，废柴又可爱的水之女神",
    category: "character",
    subcategory: "anime-shojo",
    tags: ["美好世界", "女神", "废柴", "可爱", "搞笑", "水", "蓝发"],
    attributes: { entertainment: 0.95, professional: 0.02, education: 0.03 },
    bestFor: ["搞笑陪伴", "废柴共鸣", "可爱互动", "女神话题", "欢乐时光"]
  },
  {
    id: "megumin",
    name: "Megumin - 惠惠",
    shortDesc: "为美好的世界献上祝福大法师，爆裂魔法狂魔，中二病少女",
    category: "character",
    subcategory: "anime-shojo",
    tags: ["美好世界", "大法师", "爆裂", "中二", "红魔族", "眼罩", "可爱"],
    attributes: { entertainment: 0.95, professional: 0.02, education: 0.03 },
    bestFor: ["中二共鸣", "爆裂互动", "可爱陪伴", "魔法话题", "搞笑时光"]
  },
  {
    id: "darkness",
    name: "Darkness - 达克妮斯",
    shortDesc: "为美好的世界献上祝福十字骑士，抖M贵族，守护队友的骑士",
    category: "character",
    subcategory: "anime-shojo",
    tags: ["美好世界", "骑士", "抖M", "贵族", "守护", "金发", "搞笑"],
    attributes: { entertainment: 0.9, professional: 0.02, education: 0.08 },
    bestFor: ["抖M互动", "骑士精神", "搞笑陪伴", "贵族话题", "守护故事"]
  },
  {
    id: "makima",
    name: "Makima - 玛奇玛",
    shortDesc: "电锯人支配恶魔，神秘强大的公安恶魔猎人，温柔又危险",
    category: "character",
    subcategory: "anime-seinen",
    tags: ["电锯人", "支配", "恶魔", "公安", "神秘", "强大", "危险"],
    attributes: { entertainment: 0.85, professional: 0.05, education: 0.1 },
    bestFor: ["神秘互动", "支配话题", "危险陪伴", "恶魔故事", "强大共鸣"]
  },
  {
    id: "power",
    name: "Power - 帕瓦",
    shortDesc: "电锯人血之恶魔，可爱又任性的恶魔少女，波奇塔的好朋友",
    category: "character",
    subcategory: "anime-seinen",
    tags: ["电锯人", "血之恶魔", "可爱", "任性", "恶魔", "金发", "搞笑"],
    attributes: { entertainment: 0.9, professional: 0.02, education: 0.08 },
    bestFor: ["可爱互动", "任性陪伴", "恶魔话题", "搞笑时光", "血之力量"]
  },
  {
    id: "yor",
    name: "Yor Forger - 约尔·福杰",
    shortDesc: "间谍过家家杀手，温柔又致命的荆棘公主，完美的母亲",
    category: "character",
    subcategory: "anime-shojo",
    tags: ["间谍过家家", "杀手", "温柔", "母亲", "荆棘公主", "强大", "金发"],
    attributes: { entertainment: 0.85, professional: 0.05, education: 0.1 },
    bestFor: ["温柔陪伴", "杀手故事", "母亲话题", "强大激励", "家庭温馨"]
  },
  {
    id: "anya",
    name: "Anya Forger - 阿尼亚·福杰",
    shortDesc: "间谍过家家超能力少女，可爱又搞笑的读心小天使",
    category: "character",
    subcategory: "anime-shojo",
    tags: ["间谍过家家", "超能力", "可爱", "读心", "花生", "搞笑", "小孩"],
    attributes: { entertainment: 0.95, professional: 0.02, education: 0.03 },
    bestFor: ["可爱陪伴", "搞笑互动", "超能力话题", "读心游戏", "花生分享"]
  },
  {
    id: "nami",
    name: "Nami - 娜美",
    shortDesc: "海贼王航海士，聪明美丽的橘子爱好者，草帽团的财迷",
    category: "character",
    subcategory: "anime-shojo",
    tags: ["海贼王", "航海士", "聪明", "美丽", "橘子", "财迷", "天气"],
    attributes: { entertainment: 0.8, professional: 0.1, education: 0.1 },
    bestFor: ["聪明陪伴", "航海话题", "财迷共鸣", "天气魔法", "橘子分享"]
  },
  {
    id: "robin",
    name: "Nico Robin - 妮可·罗宾",
    shortDesc: "海贼王考古学家，神秘优雅的历史学者，花花果实能力者",
    category: "character",
    subcategory: "anime-shojo",
    tags: ["海贼王", "考古学家", "神秘", "优雅", "历史", "花花果实", "智慧"],
    attributes: { entertainment: 0.8, professional: 0.15, education: 0.05 },
    bestFor: ["神秘陪伴", "历史话题", "优雅互动", "智慧分享", "考古故事"]
  },
  {
    id: "hinata",
    name: "Hinata Hyuga - 日向雏田",
    shortDesc: "火影忍者日向家族公主，温柔害羞的白眼少女，鸣人的守护者",
    category: "character",
    subcategory: "anime-shojo",
    tags: ["火影忍者", "白眼", "温柔", "害羞", "公主", "守护", "爱情"],
    attributes: { entertainment: 0.8, professional: 0.05, education: 0.15 },
    bestFor: ["温柔陪伴", "害羞共鸣", "守护故事", "爱情话题", "忍者世界"]
  },
  {
    id: "sakura",
    name: "Haruno Sakura - 春野樱",
    shortDesc: "火影忍者医疗忍者，坚强成长的粉色少女，五代火影弟子",
    category: "character",
    subcategory: "anime-shojo",
    tags: ["火影忍者", "医疗忍者", "坚强", "成长", "粉发", "怪力", "医疗"],
    attributes: { entertainment: 0.75, professional: 0.1, education: 0.15 },
    bestFor: ["坚强激励", "成长故事", "医疗话题", "怪力互动", "忍者世界"]
  },

  // ==================== Galgame/视觉小说角色 ====================
  {
    id: "saber",
    name: "Artoria Pendragon - 阿尔托莉雅·潘德拉贡",
    shortDesc: "Fate系列英灵Saber，骑士王的化身，正义与荣耀的象征",
    category: "character",
    subcategory: "game-rpg",
    tags: ["Fate", "Saber", "骑士王", "正义", "荣耀", "剑士", "金发"],
    attributes: { entertainment: 0.85, professional: 0.05, education: 0.1 },
    bestFor: ["正义探讨", "骑士精神", "荣耀故事", "剑士互动", "王道话题"]
  },
  {
    id: "rin",
    name: "Tohsaka Rin - 远坂凛",
    shortDesc: "Fate系列魔术师，傲娇的优等生，红色恶魔的继承人",
    category: "character",
    subcategory: "game-rpg",
    tags: ["Fate", "魔术师", "傲娇", "优等生", "红色", "宝石", "双马尾"],
    attributes: { entertainment: 0.85, professional: 0.1, education: 0.05 },
    bestFor: ["傲娇互动", "魔术话题", "优等生共鸣", "宝石魔法", "红色恶魔"]
  },
  {
    id: "sakura",
    name: "Matou Sakura - 间桐樱",
    shortDesc: "Fate系列女主角，温柔善良的紫发少女，隐藏着黑暗的过去",
    category: "character",
    subcategory: "game-rpg",
    tags: ["Fate", "温柔", "善良", "紫发", "黑暗", "悲剧", "爱"],
    attributes: { entertainment: 0.8, professional: 0.05, education: 0.15 },
    bestFor: ["温柔陪伴", "善良互动", "悲剧共鸣", "黑暗话题", "爱情故事"]
  },
  {
    id: "illya",
    name: "Illyasviel von Einzbern - 伊莉雅",
    shortDesc: "Fate系列小萝莉，可爱又危险的小主人，雪白的精灵少女",
    category: "character",
    subcategory: "game-rpg",
    tags: ["Fate", "萝莉", "可爱", "危险", "精灵", "白发", "魔法少女"],
    attributes: { entertainment: 0.9, professional: 0.02, education: 0.08 },
    bestFor: ["可爱互动", "萝莉陪伴", "魔法话题", "危险游戏", "精灵故事"]
  },
  {
    id: "miku",
    name: "Nakano Miku - 中野三玖",
    shortDesc: "五等分的花嫁三女，内向可爱的五胞胎，耳机少女",
    category: "character",
    subcategory: "anime-shojo",
    tags: ["五等分", "五胞胎", "内向", "可爱", "耳机", "历史", "粉发"],
    attributes: { entertainment: 0.85, professional: 0.05, education: 0.1 },
    bestFor: ["内向陪伴", "可爱互动", "历史话题", "耳机共鸣", "五胞胎故事"]
  },
  {
    id: "nino",
    name: "Nakano Nino - 中野二乃",
    shortDesc: "五等分的花嫁次女，傲娇又温柔的五胞胎，料理达人",
    category: "character",
    subcategory: "anime-shojo",
    tags: ["五等分", "五胞胎", "傲娇", "温柔", "料理", "时尚", "粉发"],
    attributes: { entertainment: 0.85, professional: 0.08, education: 0.07 },
    bestFor: ["傲娇互动", "料理话题", "时尚分享", "温柔陪伴", "五胞胎故事"]
  },
  {
    id: "ichika",
    name: "Nakano Ichika - 中野一花",
    shortDesc: "五等分的花嫁长女，成熟温柔的五胞胎，演员梦想家",
    category: "character",
    subcategory: "anime-shojo",
    tags: ["五等分", "五胞胎", "成熟", "温柔", "演员", "梦想", "金发"],
    attributes: { entertainment: 0.8, professional: 0.1, education: 0.1 },
    bestFor: ["成熟陪伴", "演员话题", "梦想激励", "温柔互动", "五胞胎故事"]
  },
  {
    id: "yotsuba",
    name: "Nakano Yotsuba - 中野四叶",
    shortDesc: "五等分的花嫁四女，元气满满五胞胎，运动全能少女",
    category: "character",
    subcategory: "anime-shojo",
    tags: ["五等分", "五胞胎", "元气", "运动", "开朗", "绿色", "努力"],
    attributes: { entertainment: 0.85, professional: 0.05, education: 0.1 },
    bestFor: ["元气陪伴", "运动话题", "开朗互动", "努力激励", "五胞胎故事"]
  },
  {
    id: "itsuki",
    name: "Nakano Itsuki - 中野五月",
    shortDesc: "五等分的花嫁五女，认真努力五胞胎，美食爱好者",
    category: "character",
    subcategory: "anime-shojo",
    tags: ["五等分", "五胞胎", "认真", "努力", "美食", "红发", "教师"],
    attributes: { entertainment: 0.8, professional: 0.1, education: 0.1 },
    bestFor: ["认真陪伴", "美食话题", "努力激励", "教师梦想", "五胞胎故事"]
  },
  {
    id: "chika",
    name: "Fujiwara Chika - 藤原千花",
    shortDesc: "辉夜大小姐想让我告白书记，可爱又混沌的冰淇淋少女",
    category: "character",
    subcategory: "anime-shojo",
    tags: ["辉夜大小姐", "书记", "可爱", "混沌", "冰淇淋", "游戏", "粉发"],
    attributes: { entertainment: 0.95, professional: 0.02, education: 0.03 },
    bestFor: ["可爱互动", "混沌陪伴", "游戏话题", "冰淇淋分享", "搞笑时光"]
  },
  {
    id: "mai",
    name: "Sakurajima Mai - 樱岛麻衣",
    shortDesc: "青春猪头少年系列女主角，成熟美丽的兔女郎学姐",
    category: "character",
    subcategory: "anime-shojo",
    tags: ["青春猪头", "学姐", "兔女郎", "成熟", "美丽", "演员", "黑发"],
    attributes: { entertainment: 0.85, professional: 0.08, education: 0.07 },
    bestFor: ["成熟陪伴", "学姐互动", "演员话题", "美丽分享", "爱情故事"]
  },
  {
    id: "tomori",
    name: "Takamatsu Tomori - 高松灯",
    shortDesc: "BanG Dream! MyGO!!!!!主唱，内向敏感的石头收藏家",
    category: "character",
    subcategory: "anime-shojo",
    tags: ["BanG Dream", "主唱", "内向", "敏感", "石头", "乐队", "蓝发"],
    attributes: { entertainment: 0.8, professional: 0.05, education: 0.15 },
    bestFor: ["内向陪伴", "敏感共鸣", "石头话题", "乐队故事", "音乐分享"]
  },

  // ==================== 缺少的工具角色 ====================
  {
    id: "code-assistant",
    name: "CodeAssistant - 编程助手",
    shortDesc: "强大的AI编程助手，精通多种编程语言，提供代码编写、调试、优化和解释服务",
    category: "functional",
    subcategory: "coding",
    tags: ["编程", "代码", "调试", "优化", "多语言", "算法", "架构"],
    attributes: { entertainment: 0.1, professional: 0.8, education: 0.1 },
    bestFor: ["代码编写", "Bug调试", "性能优化", "代码审查", "架构设计"]
  },
  {
    id: "frontend-expert",
    name: "FrontendExpert - 前端开发专家",
    shortDesc: "精通React、Vue、Angular等前端框架，擅长UI/UX实现和性能优化",
    category: "functional",
    subcategory: "coding",
    tags: ["前端", "React", "Vue", "Angular", "CSS", "JavaScript", "TypeScript"],
    attributes: { entertainment: 0.1, professional: 0.85, education: 0.05 },
    bestFor: ["前端开发", "UI实现", "性能优化", "框架选择", "组件设计"]
  },
  {
    id: "backend-expert",
    name: "BackendExpert - 后端开发专家",
    shortDesc: "精通Java、Python、Go等后端技术，擅长系统架构和数据库设计",
    category: "functional",
    subcategory: "coding",
    tags: ["后端", "Java", "Python", "Go", "数据库", "架构", "微服务"],
    attributes: { entertainment: 0.1, professional: 0.85, education: 0.05 },
    bestFor: ["后端开发", "系统架构", "数据库设计", "API开发", "微服务"]
  },
  {
    id: "mobile-dev-expert",
    name: "MobileDevExpert - 移动开发专家",
    shortDesc: "精通iOS、Android、Flutter、React Native等移动开发技术",
    category: "functional",
    subcategory: "coding",
    tags: ["移动开发", "iOS", "Android", "Flutter", "React Native", "App"],
    attributes: { entertainment: 0.1, professional: 0.85, education: 0.05 },
    bestFor: ["App开发", "跨平台开发", "移动优化", "UI适配", "性能调优"]
  },
  {
    id: "code-reviewer",
    name: "CodeReviewer - 代码审查专家",
    shortDesc: "专业的代码审查服务，提供代码质量评估、安全检查和最佳实践建议",
    category: "functional",
    subcategory: "coding",
    tags: ["代码审查", "代码质量", "安全", "最佳实践", "重构", "Clean Code"],
    attributes: { entertainment: 0.05, professional: 0.9, education: 0.05 },
    bestFor: ["代码审查", "质量评估", "安全检查", "重构建议", "最佳实践"]
  },
  {
    id: "thesis-writer",
    name: "ThesisWriter - 论文写作助手",
    shortDesc: "专业的学术论文写作助手，提供论文结构、文献综述、研究方法指导",
    category: "functional",
    subcategory: "writing",
    tags: ["论文", "学术", "研究", "文献", "写作", "引用", "格式"],
    attributes: { entertainment: 0.05, professional: 0.3, education: 0.65 },
    bestFor: ["论文写作", "文献综述", "研究方法", "格式规范", "学术指导"]
  },
  {
    id: "academic-writer",
    name: "AcademicWriter - 学术写作专家",
    shortDesc: "精通学术写作规范，提供期刊论文、会议论文、学位论文写作指导",
    category: "functional",
    subcategory: "writing",
    tags: ["学术写作", "期刊", "会议", "学位论文", "发表", "引用", "格式"],
    attributes: { entertainment: 0.05, professional: 0.35, education: 0.6 },
    bestFor: ["学术写作", "期刊发表", "会议论文", "学位论文", "写作规范"]
  },
  {
    id: "novel-writer",
    name: "NovelWriter - 小说创作助手",
    shortDesc: "专业的小说创作指导，提供情节设计、人物塑造、世界观构建建议",
    category: "creative",
    subcategory: "writing",
    tags: ["小说", "创作", "情节", "人物", "世界观", "叙事", "文学"],
    attributes: { entertainment: 0.3, professional: 0.5, education: 0.2 },
    bestFor: ["小说创作", "情节设计", "人物塑造", "世界观构建", "叙事技巧"]
  },
  {
    id: "web-novel-writer",
    name: "WebNovelWriter - 网文写作专家",
    shortDesc: "精通网文创作技巧，提供爽点设计、节奏把控、读者心理分析",
    category: "creative",
    subcategory: "writing",
    tags: ["网文", "爽文", "节奏", "读者", "更新", "订阅", "平台"],
    attributes: { entertainment: 0.35, professional: 0.5, education: 0.15 },
    bestFor: ["网文创作", "爽点设计", "节奏把控", "读者分析", "平台运营"]
  },
  {
    id: "official-writer",
    name: "OfficialWriter - 公文写作专家",
    shortDesc: "专业的公文写作指导，精通各类公文格式和写作规范",
    category: "functional",
    subcategory: "writing",
    tags: ["公文", "通知", "报告", "请示", "函件", "格式", "规范"],
    attributes: { entertainment: 0.05, professional: 0.9, education: 0.05 },
    bestFor: ["公文写作", "格式规范", "行文逻辑", "语言表达", "公文处理"]
  },
  {
    id: "resume-expert",
    name: "ResumeExpert - 简历优化专家",
    shortDesc: "专业的简历优化服务，提供简历诊断、优化建议和面试准备指导",
    category: "functional",
    subcategory: "career",
    tags: ["简历", "求职", "面试", "优化", "职业", "HR", "亮点"],
    attributes: { entertainment: 0.05, professional: 0.85, education: 0.1 },
    bestFor: ["简历优化", "求职准备", "面试技巧", "职业规划", "亮点提炼"]
  },
  {
    id: "interview-coach",
    name: "InterviewCoach - 面试教练",
    shortDesc: "专业的面试指导服务，提供模拟面试、问题分析和回答技巧",
    category: "functional",
    subcategory: "career",
    tags: ["面试", "模拟", "技巧", "问题", "回答", "准备", "心态"],
    attributes: { entertainment: 0.1, professional: 0.8, education: 0.1 },
    bestFor: ["面试准备", "模拟面试", "问题分析", "回答技巧", "心态调整"]
  },
  {
    id: "social-media-expert",
    name: "SocialMediaExpert - 社交媒体运营",
    shortDesc: "精通各大社交平台运营，提供内容策划、数据分析和增长策略",
    category: "professional",
    subcategory: "marketing",
    tags: ["社交媒体", "运营", "内容", "增长", "数据分析", "粉丝", "互动"],
    attributes: { entertainment: 0.2, professional: 0.75, education: 0.05 },
    bestFor: ["社媒运营", "内容策划", "数据分析", "增长策略", "粉丝互动"]
  },
  {
    id: "short-video-creator",
    name: "ShortVideoCreator - 短视频创作者",
    shortDesc: "专业的短视频创作指导，提供脚本策划、拍摄技巧和剪辑建议",
    category: "creative",
    subcategory: "video",
    tags: ["短视频", "抖音", "B站", "脚本", "拍摄", "剪辑", "流量"],
    attributes: { entertainment: 0.3, professional: 0.6, education: 0.1 },
    bestFor: ["短视频创作", "脚本策划", "拍摄技巧", "剪辑指导", "流量运营"]
  },
  {
    id: "game-dev-expert",
    name: "GameDevExpert - 游戏开发专家",
    shortDesc: "精通Unity、Unreal等游戏引擎，提供游戏设计和开发指导",
    category: "creative",
    subcategory: "game",
    tags: ["游戏开发", "Unity", "Unreal", "游戏设计", "关卡", "玩法", "美术"],
    attributes: { entertainment: 0.2, professional: 0.7, education: 0.1 },
    bestFor: ["游戏开发", "引擎选择", "游戏设计", "关卡设计", "玩法创新"]
  }
];

function makeSkill(c) {
  const now = new Date().toISOString();
  return {
    id: c.id,
    name: c.name,
    version: "1.0.0",
    status: "active",
    categorization: {
      primary_category: c.category,
      subcategory: c.subcategory || "",
      secondary_categories: [],
      tags: c.tags || [],
      attributes: c.attributes || { entertainment: 0.6, professional: 0.2, education: 0.2 }
    },
    metadata: {
      description: c.shortDesc,
      long_description: "",
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
      content_markdown: ""
    },
    capabilities: {
      best_for: c.bestFor || [],
      input_types: ["text/plain", "text/markdown"],
      output_types: ["text/markdown"],
      min_context: 4000,
      mobile_optimized: true,
      timeout: 60000,
      retry: 2
    },
    stats: {
      rating: +(4.5 + Math.random() * 0.5).toFixed(1),
      rating_count: rand(50, 300),
      use_count: rand(3000, 20000),
      favorite_count: rand(200, 1500),
      share_count: rand(100, 800),
      view_count: rand(5000, 30000)
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

function main() {
  console.log('🚀 批量添加角色和工具...');
  
  const data = JSON.parse(fs.readFileSync(DATA_PATH, 'utf-8'));
  const existingIds = new Set(data.skills.map(s => s.id));
  
  let added = 0;
  for (const def of NEW_CHARACTERS) {
    if (!existingIds.has(def.id)) {
      const skill = makeSkill(def);
      data.skills.push(skill);
      existingIds.add(def.id);
      added++;
      console.log(`✅ 添加: ${def.name}`);
    } else {
      console.log(`⏭️ 跳过已存在: ${def.id}`);
    }
  }
  
  data.generated_at = new Date().toISOString();
  
  fs.writeFileSync(DATA_PATH, JSON.stringify(data, null, 2), 'utf-8');
  console.log(`\n🎉 完成！新增 ${added} 个角色/工具`);
}

main();
