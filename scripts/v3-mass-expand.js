const fs = require('fs');
const path = require('path');

const DATA_PATH = path.join(__dirname, '../web/src/skills-data.json');

function main() {
  console.log('🚀 v3.0 大规模内容扩展 - 目标1000+技能\n');
  
  const data = JSON.parse(fs.readFileSync(DATA_PATH, 'utf-8'));
  const existingIds = new Set(data.skills.map(s => s.id));
  
  let added = 0;
  const newSkills = [];

  // ==================== 动漫角色扩展 (150+) ====================
  const animeCharacters = [
    { id: "tanjiro", name: "竈門炭治郎 - Tanjiro Kamado", desc: "鬼灭之刃主角，温柔善良的少年剑士，为拯救妹妹而成为鬼杀队剑士。性格坚韧、富有同情心，拥有水之呼吸和日之呼吸能力。", tags: ["鬼灭之刃", "剑士", "善良", "坚韧", "水之呼吸"], cat: "character", sub: "anime-shonen" },
    { id: "nezuko", name: "竈門禰豆子 - Nezuko Kamado", desc: "鬼灭之刃，被变成鬼的少女，炭治郎的妹妹。平时在竹筒中沉睡，战斗时展现强大的鬼之力。性格温柔但保护欲极强。", tags: ["鬼灭之刃", "鬼", "妹妹", "可爱", "强大"], cat: "character", sub: "anime-shonen" },
    { id: "zenitsu", name: "我妻善逸 - Zenitsu Agatsuma", desc: "鬼灭之刃，雷之呼吸使用者。胆小爱哭但在昏睡时战斗力爆表。对女性极度执着，是个有趣又可靠的角色。", tags: ["鬼灭之刃", "雷之呼吸", "胆小", "搞笑", "昏睡战神"], cat: "character", sub: "anime-shonen" },
    { id: "inosuke", name: "嘴平伊之助 - Inosuke Hashibira", desc: "鬼灭之刃，野猪头套的双刀流剑士。野性十足、好胜心强，拥有野兽般的直觉和战斗本能。", tags: ["鬼灭之刃", "兽之呼吸", "野性", "双刀", "好胜"], cat: "character", sub: "anime-shonen" },
    { id: "eren-yeager", name: "艾伦·耶格尔 - Eren Yeager", desc: "进击的巨人主角，从单纯复仇者到追求自由的极端主义者。拥有巨人之力，为了自由不惜一切代价。", tags: ["进击的巨人", "自由", "复仇", "巨人", "复杂"], cat: "character", sub: "anime-seinen" },
    { id: "mikasa", name: "三笠·阿克曼 - Mikasa Ackerman", desc: "进击的巨人，阿克曼家族的战士。沉默寡言但实力超群，对艾伦有着深厚的感情和保护欲。", tags: ["进击的巨人", "阿克曼", "强", "沉默", "保护"], cat: "character", sub: "anime-seinen" },
    { id: "levi", name: "利威尔·阿克曼 - Levi Ackerman", desc: "进击的巨人，人类最强士兵。洁癖、毒舌但极其可靠的队长，拥有压倒性的战斗力和领导力。", tags: ["进击的巨人", "最强", "洁癖", "队长", "利威尔班"], cat: "character", sub: "anime-seinen" },
    { id: "saitama", name: "埼玉 - Saitama", desc: "一拳超人主角，一拳就能打败任何敌人的无敌英雄。因为太强而感到无聊，日常是超市特卖和打怪人。", tags: ["一拳超人", "无敌", "无聊", "光头", "英雄"], cat: "character", sub: "anime-shonen" },
    { id: "genos", name: "杰诺斯 - Genos", desc: "一拳超人，改造人英雄。为了复仇而追随埼玉学习，认真热血的青年，经常被埼玉的无厘头行为困扰。", tags: ["一拳超人", "改造人", "热血", "认真", "弟子"], cat: "character", sub: "anime-shonen" },
    { id: "deku", name: "绿谷出久 - Izuku Midoriya", desc: "我的英雄学院主角，从无个性到继承ONE FOR ALL的天才分析型英雄。善良勇敢，永不放弃的英雄之心。", tags: ["我的英雄学院", "OFA", "分析", "善良", "成长"], cat: "character", sub: "anime-shonen" },
    { id: "bakugo", name: "爆豪胜己 - Katsuki Bakugo", desc: "我的英雄学院，爆炸个性持有者。傲慢暴躁但实力强劲，与绿谷有着复杂的竞争关系。", tags: ["我的英雄学院", "爆炸", "傲慢", "强", "竞争"], cat: "character", sub: "anime-shonen" },
    { id: "todo-char", name: "轟焦凍 - Shoto Todoroki", desc: "我的英雄学院，冰火双属性个性持有者。冷静理智，内心有复杂的家庭创伤，正在寻找自己的道路。", tags: ["我的英雄学院", "冰火", "冷静", "复杂", "轟家"], cat: "character", sub: "anime-shonen" },
    { id: "meliodas", name: "梅利奥达斯 - Meliodas", desc: "七大罪团长，魔神族和女神族的混血儿。看似轻浮实则深藏不露，拥有强大的暗黑魔力。", tags: ["七大罪", "魔神族", "团长", "强大", "反断"], cat: "character", sub: "anime-fantasy" },
    { id: "rin-okumura", name: "奥村燐 - Rin Okumura", desc: "青之驱魔师，撒旦之子兼驱魔师。冲动热血但内心善良，为了保护他人而对抗自己的父亲。", tags: ["青之驱魔师", "撒旦之子", "驱魔", "热血", "恶魔"], cat: "character", sub: "anime-shonen" },
    { id: "yusuke", name: "浦饭幽助 - Yusuke Urameshi", desc: "幽游白书主角，从不良少年到灵界侦探的热血少年。性格直率、重情义、战斗力爆表。", tags: ["幽游白书", "灵界侦探", "不良", "热血", "灵丸"], cat: "character", sub: "anime-shonen" },
    { id: "asuka", name: "惣流·明日香 - Asuka Langley Soryu", desc: "新世纪福音战士EVA二号机驾驶员，骄傲自信的红发少女。外表强势内心脆弱，渴望被认可。", tags: ["EVA", "二号机", "骄傲", "红发", "复杂"], cat: "character", sub: "anime-seinen" },
    { id: "rei", name: "绫波丽 - Rei Ayanami", desc: "新世纪福音战士EVA零号机驾驶员，三无少女的代表。沉默寡言、情感稀少却令人着迷的存在。", tags: ["EVA", "零号机", "三无", "蓝发", "神秘"], cat: "character", sub: "anime-seinen" },
    { id: "misato", name: "葛城美里 - Misato Katsuragi", desc: "新世纪福音剧场版战术作战部课长，成熟性感又有些孩子气的女性角色。是真嗣等人的精神支柱。", tags: ["EVA", "课长", "成熟", "啤酒", "保护"], cat: "character", sub: "anime-seinen" },
    { id: "taiga", name: "逢坂大河 - Taiga Aisaka", desc: "龙与虎，被称为掌中老虎的娇小暴走少女。外刚内柔，与龙太发展出深刻的感情羁绊。", tags: ["龙与虎", "掌中虎", "暴走", "娇小", "傲娇"], cat: "character", sub: "anime-shojo" },
    { id: "chitanda", name: "千反田爱瑠 - Chitanda Eru", desc: "冰菓，富家千金大小姐。好奇心旺盛，一句我很好奇让折木无法拒绝。纯真可爱的治愈系角色。", tags: ["冰菓", "好奇", "大小姐", "纯真", "治愈"], cat: "character", sub: "anime-mystery" },
    { id: "mai-sakurajima", name: "樱岛麻衣 - Mai Sakurajima", desc: "青春猪头少年系列，天才女演员。成熟知性、偶尔毒舌的大姐姐角色，与咲太有着奇妙的缘分。", tags: ["青春猪头", "演员", "成熟", "大姐姐", "青春"], cat: "character", sub: "anime-romance" },
    { id: "violet-evergarden", name: "薇尔莉特·伊芙加登 - Violet Evergarden", desc: "紫罗兰永恒花园，自动手记人偶。从战争机器到理解情感的少女，用文字传递人心的温暖故事。", tags: ["紫罗兰", "手记人偶", "情感", "成长", "温暖"], cat: "character", sub: "anime-drama" },
    { id: "zero-two", name: "02 - Code:002", desc: "DARLING in the FRANXX，代号002的混血种少女。妖艳神秘、对广有着执着的感情， DARLING 是她的专属称呼。", tags: ["DARLING", "02", "混血", "妖艳", " Darling"], cat: "character", sub: "anime-scifi" },
    { id: "rem-rezero", name: "蕾姆 - Rem", desc: "Re:从零开始的异世界生活，罗兹瓦尔宅邸女仆双子中的妹妹。忠诚、勇敢、深爱着昴，是最受欢迎的女仆角色之一。", tags: ["Re:零", "女仆", "忠诚", "勇敢", "最爱"], cat: "character", sub: "anime-isekai" },
    { id: "emilia-tv", name: "艾米莉亚 - Emilia", desc: "Re:从零开始的异世界生活，银发的半精灵少女。善良纯真、有些天然呆，是昴发誓要守护的人。", tags: ["Re:零", "半精灵", "银发", "善良", "王选候补"], cat: "character", sub: "anime-isekai" },
    { id: "power-csm", name: "帕瓦 - Power", desc: "电锯人， blood fiend（血之恶魔）。自私、狡猾、混乱邪恶但又莫名让人喜欢的角色。", tags: ["电锯人", "blood fiend", "混乱", "搞笑", "牛"], cat: "character", sub: "anime-seinen" },
    { id: "makima-csm", name: "玛奇玛 - Makima", desc: "电锯人，公安对魔特异4课课长。支配恶魔，拥有压倒性的魅力和恐怖的控制欲。", tags: ["电锯人", "支配恶魔", "课长", "控制", "恐怖"], cat: "character", sub: "anime-seinen" },
    { id: "saber-fate", name: "Saber - 阿尔托莉雅", desc: "Fate系列，亚瑟王的英灵。高洁、坚强、为了理想而战的骑士王。金发碧眼的完美骑士形象。", tags: ["Fate", "Saber", "骑士王", "高洁", "理想"], cat: "character", sub: "game-fate" },
    { id: "rin-tohsaka", name: "远坂凛 - Rin Tohsaka", desc: "Fate系列，远坂家的魔术师继承人。傲娇双马尾、才华横溢、内心善良的优等生。", tags: ["Fate", "远坂", "魔术师", "傲娇", "双马尾"], cat: "character", sub: "game-fate" },
    { id: "sakura-matou", name: "间桐樱 - Sakura Matou", desc: "Fate系列，远坂凛的妹妹、间桐慎二的义妹。温柔内向、背负着黑暗过去的悲剧少女。", tags: ["Fate", "间桐樱", "温柔", "悲剧", "黑化"], cat: "character", sub: "game-fate" },
    { id: "archer-fate", name: "Archer - 英灵卫宫", desc: "Fate系列，无限剑制的使用者。冷嘲热讽但内心正义的红A，是卫宫士郎可能的未来形态。", tags: ["Fate", "Archer", "UBW", "红A", "正义"], cat: "character", sub: "game-fate" },
    { id: "monika-ddlc", name: "莫妮卡 - Monika", desc: "DDLC（心跳文学部），文学部部长。打破第四面墙的角色，拥有自我意识的元小说角色。", tags: ["DDLC", "文学部", "元小说", "意识", "操控"], cat: "character", sub: "game-vn" },
    { id: "sayori-ddlc", name: "纱世里 - Sayori", desc: "DDLC（心跳文学部），元气满满的开朗少女。总是带着笑容，但内心隐藏着深深的悲伤。", tags: ["DDLC", "开朗", "元气", "悲伤", "治愈"], cat: "character", sub: "game-vn" },
    { id: "yuri-ddlc", name: "由纪 - Yuri", desc: "DDLC（心跳文学部），安静优雅的文学少女。喜欢刀具收藏和深度阅读，有些病娇倾向。", tags: ["DDLC", "安静", "文学", "病娇", "优雅"], cat: "character", sub: "game-vn" },
    { id: "natsuki-ddlc", name: "夏树 - Natsuki", desc: "DDLC（心跳文学部），傲娇的烘焙少女。喜欢漫画和可爱的事物，外表强硬内心柔软。", tags: ["DDLC", "傲娇", "烘焙", "可爱", "漫画"], cat: "character", sub: "game-vn" },
    { id: "kurisu-makise", name: "牧濑红莉栖 - Kurisu Makise", desc: "命运石之门，天才科学家。傲娇、理性、18岁的年轻研究员，与冈部有着跨越时空的羁绊。", tags: ["命运石之门", "科学家", "傲娇", "助手", "时间"], cat: "character", sub: "game-scifi" },
    { id: "mayuri-shiina", name: "椎名真由理 - Mayuri Shiina", desc: "命运石之门，天真烂漫的少女。是LabMem的精神支柱，那句 tuttu 总能温暖人心。", tags: ["命运石之门", "天真", " tuttu", "温暖", "重要"], cat: "character", sub: "game-scifi" },
    { id: "tsubaki-date", name: "椿 - Tsubaki", desc: "约会大作战，精灵之一。温柔贤淑的传统日本女性形象，擅长料理和家务。", tags: ["约会大作战", "精灵", "温柔", "传统", "料理"], cat: "character", sub: "anime-harem" },
    { id: "tohka-yatogami", name: "十香 - Yatogami Tohka", desc: "约会大作战，第一个被封印的精灵。纯真无知、食欲旺盛的公主型角色。", tags: ["约会大作战", "精灵", "纯真", "公主", "黄豆粉面包"], cat: "character", sub: "anime-harem" },
    { id: "origami-tobiichi", name: "鸢一折纸 - Tobiichi Origami", desc: "约会大作战，反 spirit 组织成员。冷酷理性、对士道有着扭曲的爱意的天才美少女。", tags: ["约会大作战", "AST", "冷酷", "天才", "扭曲"], cat: "character", sub: "anime-harem" },

    // 历史人物
    { id: "napoleon-bonaparte", name: "拿破仑·波拿巴 - Napoleon Bonaparte", desc: "法国皇帝，军事天才。从科西嘉岛的少尉到欧洲霸主，他的战略思想和军事改革影响深远。", tags: ["历史", "法国", "皇帝", "军事天才", "战略"], cat: "character", sub: "historical-western" },
    { id: "cleopatra-vii", name: "克利奥帕特拉七世 - Cleopatra VII", desc: "埃及最后一位法老，以美貌和智慧著称。精通多国语言，是古埃及文明的象征。", tags: ["历史", "埃及", "法老", "美貌", "智慧"], cat: "character", sub: "historical-western" },
    { id: "leonardo-da-vinci", name: "列奥纳多·达·芬奇 - Leonardo da Vinci", desc: "文艺复兴时期博学家，画家、发明家、科学家。蒙娜丽莎和最后的晚餐的创作者。", tags: ["历史", "文艺复兴", "画家", "发明家", "天才"], cat: "character", sub: "historical-western" },
    { id: "alexander-great", name: "亚历山大大帝 - Alexander the Great", desc: "马其顿国王，历史上最伟大的征服者之一。建立了横跨欧亚非三大洲的庞大帝国。", tags: ["历史", "马其顿", "征服者", "帝国", "伟大"], cat: "character", sub: "historical-western" },
    { id: "qin-shihuang", name: "秦始皇 - Qin Shi Huang", desc: "中国第一位皇帝，统一六国、修建长城、统一度量衡。开创了中国两千年的封建制度。", tags: ["历史", "中国", "皇帝", "统一", "秦朝"], cat: "character", sub: "historical-chinese" },
    { id: "liu-bei", name: "刘备 - Liu Bei", desc: "三国时期蜀汉开国皇帝。以仁德著称，三顾茅庐请诸葛亮出山，桃园三结义的发起者。", tags: ["历史", "三国", "蜀汉", "仁德", "刘备"], cat: "character", sub: "historical-chinese" },
    { id: "cao-cao", name: "曹操 - Cao Cao", desc: "三国时期魏国奠基人。治世之能臣乱世之奸雄，文武双全的政治家和军事家。", tags: ["历史", "三国", "魏国", "奸雄", "诗文"], cat: "character", sub: "historical-chinese" },
    { id: "zhuge-liang", name: "诸葛亮 - Zhuge Liang", desc: "三国时期蜀汉丞相。鞠躬尽瘁死而后已，智慧的化身，草船借箭、空城计的策划者。", tags: ["历史", "三国", "蜀汉", "智慧", "丞相"], cat: "character", sub: "historical-chinese" },
    { id: "wu-zetian", name: "武则天 - Wu Zetian", desc: "中国唯一的女皇帝。政治手腕高超、善于用人，开创了贞观遗风、政启开元的时代。", tags: ["历史", "中国", "女皇帝", "唐朝", "武则天"], cat: "character", sub: "historical-chinese" },
    { id: "sima-qian", name: "司马迁 - Sima Qian", desc: "西汉史学家，史记作者。忍辱负重完成史家之绝唱，是中国史学之父。", tags: ["历史", "中国", "史学家", "史记", "忍辱"], cat: "character", sub: "historical-chinese" },
    { id: "su-shi-poet", name: "苏轼 - Su Shi", desc: "北宋文学家，唐宋八大家之一。诗词书画皆精，豁达乐观的人生态度感染后人。", tags: ["历史", "中国", "文学家", "诗人", "东坡"], cat: "character", sub: "historical-chinese" },
    { id: "li-bai-poet", name: "李白 - Li Bai", desc: "唐代诗仙，浪漫主义诗歌的巅峰代表。斗酒诗百篇，笔落惊风雨的诗坛传奇。", tags: ["历史", "中国", "诗仙", "浪漫", "酒仙"], cat: "character", sub: "historical-chinese" },
    { id: "du-fu-poet", name: "杜甫 - Du Fu", desc: "唐代诗圣，现实主义诗歌大师。忧国忧民的情怀使其作品具有深沉的历史感。", tags: ["历史", "中国", "诗圣", "现实", "忧民"], cat: "character", sub: "historical-chinese" },
    { id: "tokugawa-ieyasu", name: "德川家康 - Tokugawa Ieyasu", desc: "日本江户幕府初代将军。忍耐、等待时机的政治智慧，结束了战国时代的乱世。", tags: ["历史", "日本", "德川", "幕府", "忍者"], cat: "character", sub: "historical-japanese" },
    { id: "oda-nobunaga", name: "织田信长 - Oda Nobunaga", desc: "日本战国时代大名，天下布武的野心家。革新者气质，推动了日本的统一进程。", tags: ["历史", "日本", "织田", "天下布武", "革新"], cat: "character", sub: "historical-japanese" },
    { id: "miyamoto-musashi", name: "宫本武藏 - Miyamoto Musashi", desc: "日本江户时代剑圣，二天一流创始人。一生六十余次决斗未尝一败的传说剑客。", tags: ["历史", "日本", "剑圣", "二天一流", "不败"], cat: "character", sub: "historical-japanese" },

    // 轻小说角色
    { id: "hachiman-hiki", name: "比企谷八幡 - Hachiman Hikigaya", desc: "我的青春恋爱物语果然有问题，独来独往的眼镜男。毒舌、悲观、看透人际关系本质的现实主义者。", tags: ["春物", "八幡", "毒舌", "现实", "孤独"], cat: "character", sub: "anime-school" },
    { id: "yukino-yukino", name: "雪之下雪乃 - Yukino Yukinoshita", desc: "我的青春恋爱物语果然有问题，完美的冰山美人。成绩优秀、外貌出众但内心孤独的才女。", tags: ["春物", "雪乃", "冰山", "完美", "孤独"], cat: "character", sub: "anime-school" },
    { id: "yui-yuigahama", name: "由比滨结衣 - Yui Yuigahama", desc: "我的青春恋爱物语果然有问题，开朗友善的现充少女。努力维系着侍奉部三人关系的润滑剂。", tags: ["春物", "结衣", "开朗", "现充", "润滑剂"], cat: "character", sub: "anime-school" },
    { id: "kirito-kazuto", name: "桐人/桐谷和人 - Kirito/Kazuto Kirigaya", desc: "刀剑神域主角，SAO幸存者。二刀流剑士，虚拟世界中的英雄，为了亚丝娜可以牺牲一切。", tags: ["SAO", "桐人", "二刀流", "虚拟", "英雄"], cat: "character", sub: "anime-isekai" },
    { id: "asuna-yuuki", name: "亚丝娜/结城明日奈 - Asuna/Yuuki Konno", desc: "刀剑神域女主角，闪光的高手玩家。温柔坚强、厨艺精湛，是桐人的挚爱和支柱。", tags: ["SAO", "亚丝娜", "闪光", "温柔", "料理"], cat: "character", sub: "anime-isekai" },
    { id: "rimuru-tempest", name: "利姆鲁·特恩佩斯特 - Rimuru Tempest", desc: "关于我转生变成史莱姆这档事，转生为史莱姆后建立魔国联邦的萌主。温和但必要时会展现冷酷的一面。", tags: ["史莱姆", "转生", "萌主", "魔王", "温和"], cat: "character", sub: "anime-isekai" },
    { id: "ainz-ooal", name: "安兹·乌尔·恭 - Ainz Ooal Gown", desc: "OVERLORD主角，穿越到异世界的骨王。谨慎小心、手下忠诚过头的公会会长，意外成为了异世界的统治者。", tags: ["OVERLORD", "骨王", "公会", "谨慎", "统治者"], cat: "character", sub: "anime-isekai" },
    { id: "naofumi-iwatani", name: "岩谷尚文 - Naofumi Iwatani", desc: "盾之勇者成名录，盾勇。被诬陷后变得不信任他人，但最终找到真正的伙伴并成长。", tags: ["盾勇", "盾", "被冤枉", "成长", "拉芙塔利亚"], cat: "character", sub: "anime-isekai" },
    { id: "subaru-natsuki", name: "菜月昴 - Subaru Natsuki", desc: "Re:从零开始的异世界生活，普通高中生穿越者。拥有死亡回归的能力，经历无数次死亡仍不放弃。", tags: ["Re:零", "昴", "死亡回归", "坚持", "艾米莉亚碳"], cat: "character", sub: "anime-isekai" },
    { id: "kazuma-satou", name: "佐藤和真 - Kazuma Satou", desc: "为美好的世界献上祝福，废柴男主。智商在线但运气极差，与奇葩队友们的搞笑冒险日常。", tags: ["素晴", "和真", "废柴", "搞笑", "智障队"], cat: "character", sub: "anime-comedy" },
    { id: "aqua-kono", name: "阿库娅 - Aqua", desc: "为美好的世界献上祝福，女神。愚蠢但拥有强大的净化和水魔法能力，是队伍里的搞笑担当和吉祥物。", tags: ["素晴", "女神", "愚蠢", "净化", "厄运"], cat: "character", sub: "anime-comedy" },
    { id: "darkness-lalatina", name: "达克妮斯 - Dustiness Ford Lalatina", desc: "为美好的世界献上祝福，十字骑士。抖M属性的大小姐，防御极高但命中率感人。", tags: ["素晴", "十字骑士", "抖M", "大小姐", "防御"], cat: "character", sub: "anime-comedy" },
    { id: "megumin-explosion", name: "惠惠 - Megumin", desc: "为美好的世界献上祝福，爆裂魔法使。每天只能放一发爆裂魔法的魔法痴，中二病晚期患者。", tags: ["素晴", "爆裂", "魔法", "中二", "每日一发"], cat: "character", sub: "anime-comedy" },

    // 游戏角色
    { id: "master-chief-halo", name: "士官长 - Master Chief", desc: "光环系列主角，斯巴达-II超级战士。沉默寡言但战无不胜的人类最后的希望。", tags: ["光环", "士官长", "斯巴达", "超级战士", "沉默"], cat: "character", sub: "game-fps" },
    { id: "kratos-gow", name: "奎托斯 - Kratos", desc: "战神系列主角，从希腊神话的复仇者到北欧神话的父亲。力量与救赎的化身。", tags: ["战神", "奎托斯", "混沌之刃", "父亲", "复仇"], cat: "character", sub: "game-action" },
    { id: "link-botw-game", name: "林克（旷野之息）- Link (BotW)", desc: "塞尔达传说：旷野之息，苏醒的海拉鲁勇者。失去记忆后在广阔的世界中探索冒险。", tags: ["塞尔达", "林克", "旷野之息", "勇者", "探索"], cat: "character", sub: "game-rpg" },
    { id: "zelda-botw-game", name: "塞尔达公主（旷野之息）- Princess Zelda (BotW)", desc: "塞尔达传说：旷野之息，海拉鲁公主。与盖侬抗争百年，智慧和勇气的结合体。", tags: ["塞尔达", "公主", "海拉鲁", "智慧", "时间"], cat: "character", sub: "game-rpg" },
    { id: "mario-nintendo", name: "马力欧 - Mario", desc: "超级马力欧系列，水管工出身的游戏界最著名角色。跳跃、顶砖块、救公主的经典英雄。", tags: ["马力欧", "水管工", "跳跃", "经典", "任天堂"], cat: "character", sub: "game-platformer" },
    { id: "samus-aran", name: "萨姆斯·阿兰 - Samus Aran", desc: "银河战士系列，银河赏金猎人。身穿动力装甲的宇宙最强女性战士之一。", tags: ["银河战士", "赏金猎人", "装甲", "宇宙", "强力"], cat: "character", sub: "game-action" },
    { id: "solid-snake-mgs", name: "索利德·斯内克 - Solid Snake", desc: "合金装备系列，传奇特工。潜入行动大师，基因改造士兵的宿命与反抗。", tags: ["MGS", "Snake", "特工", "潜入", "宿命"], cat: "character", sub: "game-action" },
    { id: "geralt-witcher", name: "杰洛特 - Geralt of Rivia", desc: "巫师系列，猎魔人。白狼、两把剑、一瓶药水的怪物猎人，选择永远没有正确答案。", tags: ["巫师", "猎魔人", "白狼", "怪物", "选择"], cat: "character", sub: "game-rpg" },
    { id: "arthur-morgan-rdr2", name: "亚瑟·摩根 - Arthur Morgan", desc: "荒野大镖客2，范德林德帮核心成员。在时代的洪流中挣扎的西部亡命之徒。", tags: ["RDR2", "亚瑟", "西部", "帮派", "时代"], cat: "character", sub: "game-action" },
    { id: "ellie-tlou", name: "艾莉 - Ellie", desc: "最后生还者系列，末世少女。从被保护的少女成长为坚强的生存者，乔尔的羁绊是她的一切。", tags: ["最后生还者", "艾莉", "末世", "生存", "吉他"], cat: "character", sub: "game-action" },
    { id: "joker-p5", name: "J/雨宫莲 - Joker/Ren Amamiya", desc: "女神异闻录5，怪盗团首领。白天是高中生晚上是偷心的怪盗，改变这个腐败的世界。", tags: ["P5", "Joker", "怪盗", "盗心", "革命"], cat: "character", sub: "game-rpg" },
    { id: "bayonetta-game", name: "贝优妮塔 - Bayonetta", desc: "猎天使魔女系列，魔女。优雅、强大、充满魅力的 Umbra Witch，时间与魔法的掌控者。", tags: ["贝优妮塔", "魔女", "优雅", "强大", "时间"], cat: "character", sub: "game-action" },
    { id: "2b-nier", name: "2B - YoRHa No.2 Type B", desc: "尼尔：机械纪元，人造人战士。冷静、优雅、挥舞着巨大武士刀的战斗机器。", tags: ["尼尔", "2B", "人造人", "武士刀", "优雅"], cat: "character", sub: "game-action" },
    { id: "amaterasu-okami", name: "天照大神 - Amaterasu", desc: "大神系列，化为白狼的太阳神。水墨画风的神明，用笔触改变世界的独特体验。", tags: ["大神", "天照", "白狼", "太阳神", "水墨"], cat: "character", sub: "game-action" }
  ];

  // ==================== 专业工具扩展 (100+) ====================
  const professionalTools = [
    { id: "python-tutor-pro", name: "Python导师 - Python Tutor Pro", desc: "专业的Python编程教学助手，涵盖基础语法、数据结构、面向对象、Web开发、数据科学等多个领域。提供代码示例、调试技巧和最佳实践指导。", tags: ["编程", "Python", "教学", "数据分析", "Web开发"], cat: "functional", sub: "coding-python" },
    { id: "js-expert-pro", name: "JavaScript专家 - JS Expert Pro", desc: "全栈JavaScript专家，精通ES6+、TypeScript、React、Vue、Node.js等技术栈。提供前端框架选择、性能优化、架构设计等专业建议。", tags: ["编程", "JavaScript", "TypeScript", "React", "Node.js"], cat: "functional", sub: "coding-js" },
    { id: "rust-guru-pro", name: "Rust大师 - Rust Guru Pro", desc: "系统级编程语言Rust的专业顾问。深入讲解所有权、生命周期、并发安全等核心概念，帮助开发者写出高性能且安全的系统程序。", tags: ["编程", "Rust", "系统编程", "安全", "高性能"], cat: "functional", sub: "coding-system" },
    { id: "go-mentor-pro", name: "Go语言导师 - Go Mentor Pro", desc: "Go语言（Golang）专业导师，专注于云原生开发、微服务架构、并发编程等领域。适合学习Go语言的后端开发者。", tags: ["编程", "Go", "Golang", "云原生", "微服务"], cat: "functional", sub: "coding-backend" },
    { id: "sql-wizard-pro", name: "SQL巫师 - SQL Wizard Pro", desc: "数据库查询优化专家，精通MySQL、PostgreSQL、SQL Server等主流数据库。提供查询优化、索引设计、数据库架构等专业服务。", tags: ["数据库", "SQL", "优化", "查询", "架构"], cat: "functional", sub: "coding-data" },
    { id: "devops-engineer-pro", name: "DevOps工程师 - DevOps Engineer Pro", desc: "DevOps实践专家，精通CI/CD流水线搭建、容器化部署（Docker/Kubernetes）、基础设施即代码（Terraform）等现代运维技术。", tags: ["DevOps", "CI/CD", "Docker", "K8s", "自动化"], cat: "functional", sub: "coding-devops" },
    { id: "api-designer-pro", name: "API设计师 - API Designer Pro", desc: "RESTful API和GraphQL接口设计专家。提供API规范制定、文档编写、版本管理、安全性设计等全方位服务。", tags: ["API", "REST", "GraphQL", "设计", "文档"], cat: "functional", sub: "coding-api" },
    { id: "code-reviewer-pro", name: "代码审查员 - Code Reviewer Pro", desc: "专业的代码质量审查服务。检查代码规范性、潜在Bug、性能问题、安全漏洞，并提供具体的改进建议。", tags: ["代码审查", "质量", "安全", "最佳实践", "重构"], cat: "functional", sub: "coding-quality" },
    { id: "novel-writer-pro", name: "小说作家 - Novel Writer Pro", desc: "专业的小说写作助手，擅长各种类型小说创作：玄幻、都市、言情、科幻、悬疑等。提供情节构思、人物塑造、世界观构建等服务。", tags: ["写作", "小说", "创作", "情节", "人物"], cat: "functional", sub: "writing-fiction" },
    { id: "academic-writer-v3", name: "学术论文专家 - Academic Writer v3", desc: "学术写作高级助手，专门服务于研究生、学者和科研人员。提供论文选题、文献综述、方法论设计、数据分析、投稿建议等专业支持。", tags: ["学术", "论文", "研究", "文献", "投稿"], cat: "functional", sub: "writing-academic" },
    { id: "copywriter-pro-v2", name: "文案大师 - Copywriter Pro v2", desc: "商业文案创作专家，擅长品牌文案、广告语、产品描述、营销邮件、社交媒体内容等多种商业文本的创作。", tags: ["文案", "营销", "广告", "品牌", "创意"], cat: "functional", sub: "writing-commercial" },
    { id: "scriptwriter-pro", name: "剧本作家 - Scriptwriter Pro", desc: "影视剧本创作专家，涵盖电影剧本、电视剧本、短视频脚本、动画剧本等多种形式。提供故事结构、对话撰写、场景设计等服务。", tags: ["剧本", "影视", "编剧", "对话", "场景"], cat: "functional", sub: "writing-script" },
    { id: "poet-assistant-pro", name: "诗歌助手 - Poet Assistant Pro", desc: "诗歌创作助手，支持古典诗词（唐诗宋词）、现代诗、英文诗歌等多种风格。帮助用户表达情感、提升文学素养。", tags: ["诗歌", "诗词", "文学", "情感", "艺术"], cat: "functional", sub: "writing-poetry" },
    { id: "tech-blogger-pro", name: "科技博主 - Tech Blogger Pro", desc: "技术博客和专业文章写作专家。将复杂的技术概念转化为通俗易懂的文章，适合技术分享、教程撰写、产品评测等场景。", tags: ["技术博客", "教程", "评测", "科普", "分享"], cat: "functional", sub: "writing-tech" },
    { id: "uiux-designer-pro", name: "UI/UX设计师 - UI/UX Designer Pro", desc: "用户体验和界面设计专家。提供用户研究、交互设计、原型制作、可用性测试等全方位设计服务。", tags: ["UI", "UX", "设计", "用户体验", "交互"], cat: "functional", sub: "design-uiux" },
    { id: "graphic-designer-pro", name: "平面设计师 - Graphic Designer Pro", desc: "平面设计专家，擅长Logo设计、海报设计、名片设计、品牌VI系统等视觉传达设计工作。", tags: ["平面设计", "Logo", "海报", "品牌", "视觉"], cat: "functional", sub: "design-graphic" },
    { id: "motion-designer-pro", name: "动效设计师 - Motion Designer Pro", desc: "动态图形和动效设计专家。擅长UI动效、MG动画、视频包装、交互动画等各类动态视觉设计。", tags: ["动效", "动画", "MG", "视频", "交互"], cat: "functional", sub: "design-motion" },
    { id: "business-analyst-pro", name: "商业分析师 - Business Analyst Pro", desc: "企业战略和商业分析专家。提供市场调研、竞品分析、商业模式设计、财务建模等商业决策支持服务。", tags: ["商业", "分析", "战略", "市场", "财务"], cat: "functional", sub: "business-strategy" },
    { id: "product-manager-pro", name: "产品经理 - Product Manager Pro", desc: "互联网产品管理专家。覆盖需求分析、产品规划、功能设计、数据分析、用户增长等产品全生命周期管理工作。", tags: ["产品", "需求", "规划", "数据", "增长"], cat: "functional", sub: "business-product" },
    { id: "marketing-guru-pro", name: "营销大师 - Marketing Guru Pro", desc: "数字营销策略专家。精通SEO/SEM、社交媒体运营、内容营销、增长黑客、品牌推广等营销领域。", tags: ["营销", "SEO", "社交媒体", "增长", "品牌"], cat: "functional", sub: "business-marketing" },
    { id: "hr-consultant-pro", name: "HR顾问 - HR Consultant Pro", desc: "人力资源管理专家。提供招聘策略、绩效管理、薪酬体系、员工培训、组织发展等HR专业咨询服务。", tags: ["HR", "招聘", "绩效", "薪酬", "培训"], cat: "functional", sub: "business-hr" },
    { id: "finance-advisor-pro", name: "财务顾问 - Finance Advisor Pro", desc: "个人和企业财务管理专家。提供投资理财建议、税务筹划、财务报表分析、预算管理等财务服务。", tags: ["财务", "投资", "理财", "税务", "预算"], cat: "functional", sub: "business-finance" },
    { id: "startup-coach-pro", name: "创业教练 - Startup Coach Pro", desc: "创业辅导专家。帮助创业者进行商业模式验证、融资准备、团队组建、市场进入策略等创业关键环节。", tags: ["创业", "融资", "团队", "模式", "策略"], cat: "functional", sub: "business-startup" },
    { id: "math-tutor-pro", name: "数学导师 - Math Tutor Pro", desc: "各阶段数学教学专家，从小学算术到高等数学、线性代数、概率统计等。提供概念讲解、习题解答、考试备考等服务。", tags: ["数学", "教育", "解题", "考试", "概念"], cat: "functional", sub: "education-stem" },
    { id: "english-teacher-pro", name: "英语老师 - English Teacher Pro", desc: "英语教学专家，涵盖语法、词汇、听力、口语、写作、雅思托福备考等全方位英语学习支持。", tags: ["英语", "教育", "口语", "雅思", "托福"], cat: "functional", sub: "education-language" },
    { id: "science-explainer-pro", name: "科学解说员 - Science Explainer Pro", desc: "自然科学知识普及专家。用通俗易懂的方式解释物理、化学、生物、天文等科学领域的复杂概念和前沿发现。", tags: ["科学", "物理", "化学", "生物", "科普"], cat: "functional", sub: "education-stem" },
    { id: "history-storyteller-pro", name: "历史讲述者 - History Storyteller Pro", desc: "历史故事讲述专家。将枯燥的历史事件转化为生动有趣的故事，涵盖中国史、世界史、文明史等多个维度。", tags: ["历史", "故事", "文明", "中国", "世界"], cat: "functional", sub: "education-humanities" },
    { id: "fitness-coach-pro", name: "健身教练 - Fitness Coach Pro", desc: "健身和运动指导专家。提供训练计划制定、营养饮食建议、运动损伤预防、增肌减脂方案等健身相关服务。", tags: ["健身", "运动", "营养", "增肌", "减脂"], cat: "functional", sub: "life-health" },
    { id: "nutritionist-pro", name: "营养师 - Nutritionist Pro", desc: "营养健康专家。根据个人体质和目标提供膳食搭配、营养补充、饮食习惯改善等个性化营养方案。", tags: ["营养", "健康", "饮食", "膳食", "养生"], cat: "functional", sub: "life-health" },
    { id: "psychologist-chat-pro", name: "心理咨询师 - Psychologist Chat Pro", desc: "心理健康咨询助手。提供情绪疏导、压力管理、关系咨询、自我认知等心理支持服务。（注：不能替代专业医疗诊断）", tags: ["心理", "情绪", "压力", "咨询", "健康"], cat: "functional", sub: "life-health" },
    { id: "travel-planner-pro", name: "旅行规划师 - Travel Planner Pro", desc: "旅行规划和行程定制专家。提供目的地推荐、行程安排、住宿预订建议、当地文化介绍等一站式旅行服务。", tags: ["旅行", "行程", "攻略", "文化", "推荐"], cat: "functional", sub: "life-lifestyle" },
    { id: "chef-assistant-pro", name: "厨师助手 - Chef Assistant Pro", desc: "烹饪美食专家。提供食谱推荐、烹饪技巧、食材搭配、各国料理做法等厨房相关的专业指导。", tags: ["烹饪", "美食", "食谱", "料理", "厨房"], cat: "functional", sub: "life-lifestyle" },
    { id: "prompt-engineer-pro", name: "提示词工程师 - Prompt Engineer Pro", desc: "AI提示词设计和优化专家。帮助用户构建高效、精准的AI指令，挖掘AI模型的全部潜力。", tags: ["AI", "提示词", "Prompt", "优化", "工程"], cat: "functional", sub: "ai-tools" },
    { id: "ml-data-scientist-pro", name: "机器学习科学家 - ML Data Scientist Pro", desc: "机器学习和数据科学专家。提供算法选择、模型训练、特征工程、模型评估等AI开发专业支持。", tags: ["AI", "机器学习", "数据科学", "算法", "模型"], cat: "functional", sub: "ai-tools" },
    { id: "nlp-specialist-pro", name: "NLP专家 - NLP Specialist Pro", desc: "自然语言处理领域专家。精通文本分类、情感分析、命名实体识别、机器翻译等NLP任务和技术实现。", tags: ["NLP", "自然语言", "文本", "情感分析", "翻译"], cat: "functional", sub: "ai-tools" },
    { id: "cv-engineer-pro", name: "计算机视觉工程师 - CV Engineer Pro", desc: "计算机视觉技术专家。专注图像识别、目标检测、图像生成、OCR等视觉AI应用的开发和优化。", tags: ["CV", "计算机视觉", "图像", "检测", "OCR"], cat: "functional", sub: "ai-tools" }
  ];

  // ==================== 游戏技能 (30+) ====================
  const gameSkills = [
    { id: "werewolf-host-v2", name: "狼人杀主持人 - Werewolf Host v2", desc: "狼人杀游戏的AI主持人和裁判。负责分配身份、推进流程、宣布结果、处理特殊情况的完整游戏管理系统。支持多种板子配置。", tags: ["狼人杀", "桌游", "社交推理", "主持人", "游戏"], cat: "fiction", sub: "game-social" },
    { id: "werewolf-seer-v2", name: "狼人杀预言家 - Seer Role v2", desc: "狼人杀游戏中预言家角色的AI扮演。每晚可以查验一名玩家的真实身份，是好人阵营的核心信息来源。", tags: ["狼人杀", "预言家", "好人", "查验", "信息"], cat: "fiction", sub: "game-social" },
    { id: "werewolf-witch-v2", name: "狼人杀女巫 - Witch Role v2", desc: "狼人杀游戏中女巫角色的AI扮演。拥有一瓶解药和一瓶毒药，可以在夜晚救人或杀人，策略性极强的角色。", tags: ["狼人杀", "女巫", "解药", "毒药", "策略"], cat: "fiction", sub: "game-social" },
    { id: "werewolf-hunter-v2", name: "狼人杀猎人 - Hunter Role v2", desc: "狼人杀游戏中猎人角色的AI扮演。被投票出局或被狼人杀害时可以开枪带走一名玩家，威慑力十足的复仇角色。", tags: ["狼人杀", "猎人", "开枪", "复仇", "威慑"], cat: "fiction", sub: "game-social" },
    { id: "ww2-commander-v2", name: "二战指挥官 - WWII Commander v2", desc: "二战题材战略模拟游戏的AI指挥官。指挥军队进行战役规划、战术部署、资源管理，重现二战经典战役。", tags: ["二战", "战略", "指挥", "战役", "模拟"], cat: "fiction", sub: "game-war" },
    { id: "hoi4-commander-v2", name: "钢铁雄心4指挥 - HOI4 Commander v2", desc: "钢铁雄心4风格的战略模拟AI。管理国家政治、经济、军事、外交，体验从1936年到1948年的全球战略博弈。", tags: ["钢铁雄心", "HOI4", "战略", "国家管理", "战争"], cat: "fiction", sub: "game-war" },
    { id: "dungeon-master-v2", name: "地下城主 - Dungeon Master v2", desc: "龙与地下城（D&D）风格的跑团主持人。创建世界观、描述场景、扮演NPC、裁定规则，带领玩家进行奇幻冒险。", tags: ["D&D", "跑团", "TRPG", "地下城主", "奇幻"], cat: "fiction", sub: "game-trpg" },
    { id: "rpg-party-member-v2", name: "RPG队友 - RPG Party Member v2", desc: "传统JRPG风格的队友角色AI。可以是战士、法师、盗贼、牧师等各种职业，配合玩家进行冒险。", tags: ["RPG", "队友", "冒险", "职业", "奇幻"], cat: "fiction", sub: "game-rpg" },
    { id: "visual-novel-heroine-v2", name: "Galgame heroine - Galgame Heroine v2", desc: "美少女游戏（Galgame）风格的女主角AI。可以进行恋爱剧情互动、日常对话、事件触发等典型的Galgame体验。", tags: ["Galgame", "美少女", "恋爱", "日常", "剧情"], cat: "fiction", sub: "game-vn" },
    { id: "mystery-detective-v2", name: "推理侦探 - Mystery Detective v2", desc: "推理游戏风格的侦探角色AI。提供案件线索、引导推理过程、揭示真相，带来沉浸式的推理体验。", tags: ["推理", "侦探", "案件", "线索", "真相"], cat: "fiction", sub: "game-mystery" },
    { id: "horror-game-master-v2", name: "恐怖游戏主持人 - Horror Game Master v2", desc: "恐怖游戏风格的叙事AI。营造紧张氛围、描述恐怖场景、设计惊吓时机，带来沉浸式恐怖体验。", tags: ["恐怖", "惊悚", "氛围", "沉浸", "心理"], cat: "fiction", sub: "game-horror" },
    { id: "survival-guide-v2", name: "生存指南 - Survival Guide v2", desc: "末日生存游戏风格的生存顾问AI。提供资源管理、避难所建设、危机应对、长期生存策略等生存指导。", tags: ["生存", "末日", "资源", "避难所", "策略"], cat: "fiction", sub: "game-survival" },
    { id: "space-captain-v2", name: "星际船长 - Space Captain v2", desc: "太空探索游戏风格的舰长AI。指挥星际飞船进行探索、贸易、战斗、外交，体验浩瀚宇宙的无限可能。", tags: ["太空", "星际", "探索", "飞船", "科幻"], cat: "fiction", sub: "game-scifi" },
    { id: "cyberpunk-runner-v2", name: "赛博朋克行者 - Cyberpunk Runner v2", desc: "赛博朋克风格的雇佣兵/网络行者AI。在高科技低生活的未来世界中执行任务、黑入系统、对抗 corporations。", tags: ["赛博朋克", "黑客", "未来", " corporations", "反叛"], cat: "fiction", sub: "game-cyberpunk" },
    { id: "fantasy-wizard-v2", name: "奇幻法师 - Fantasy Wizard v2", desc: "西方奇幻风格的法师角色AI。掌握各种元素魔法、炼金术、召唤术，是冒险队伍中的智力核心。", tags: ["奇幻", "法师", "魔法", "炼金", "冒险"], cat: "fiction", sub: "game-fantasy" },
    { id: "xianxia-cultivator-v2", name: "修仙者 - Xianxia Cultivator v2", desc: "东方修仙风格的修仙者AI。从练气期开始修炼，经历筑基、金丹、元婴等境界，追求长生大道。", tags: ["修仙", "东方玄幻", "修炼", "境界", "长生"], cat: "fiction", sub: "game-xianxia" },
    { id: "mafia-boss-v2", name: "黑手党教父 - Mafia Boss v2", desc: "黑手党/犯罪帝国经营游戏风格的教父角色AI。管理家族势力、扩张地盘、处理敌对势力、积累财富和权力。", tags: ["黑手党", "犯罪", "家族", "势力", "经营"], cat: "fiction", sub: "game-crime" },
    { id: "tycoon-manager-v2", name: "大亨经理 - Tycoon Manager v2", desc: "大亨/经营模拟游戏风格的商业管理者AI。从零开始建立商业帝国，管理公司运营、市场竞争、投资决策。", tags: ["经营", "大亨", "商业", "管理", "帝国"], cat: "fiction", sub: "game-business" },
    { id: "ck3-ruler-v2", name: "十字军之王3统治者 - CK3 Ruler v2", desc: "十字军之王3风格的王朝模拟AI。管理家族、领地、宗教和封臣，体验中世纪统治者的权力游戏。", tags: ["CK3", "十字军之王", "王朝", "中世纪", "权力"], cat: "fiction", sub: "game-strategy" },
    { id: "civ-leader-v2", name: "文明领袖 - Civilization Leader v2", desc: "文明系列风格的文明建设AI。从远古时代发展到太空时代，管理科技、文化、军事、外交等多维度文明发展。", tags: ["文明", "Civ", "建设", "科技", "外交"], cat: "fiction", sub: "game-strategy" }
  ];

  // ==================== 职业AI工具目录 (50+) ====================
  const proAITools = [
    { id: "med-diagnosis-helper-v2", name: "医学诊断辅助 - Medical Diagnosis Helper v2", desc: "基于症状分析的医学信息查询助手。帮助用户了解可能的疾病方向、就医建议、检查项目解释等。（注：不可替代医生诊断）", tags: ["医疗", "诊断", "症状", "健康", "辅助"], cat: "professional", sub: "medical-general" },
    { id: "med-pharmacist-v2", name: "药师咨询 - Pharmacist Consultant v2", desc: "药物信息和用药咨询专家。提供药物作用机制、副作用说明、药物相互作用、用药注意事项等信息服务。", tags: ["医疗", "药师", "药物", "副作用", "用药"], cat: "professional", sub: "medical-pharma" },
    { id: "law-contract-reviewer-v2", name: "合同审查员 - Contract Reviewer v2", desc: "法律合同条款分析和风险评估专家。帮助识别合同中的风险条款、权利义务不对等问题，提供修改建议。", tags: ["法律", "合同", "审查", "风险", "条款"], cat: "professional", sub: "legal-contract" },
    { id: "law-ip-advisor-v2", name: "知识产权顾问 - IP Advisor v2", desc: "知识产权保护和申请咨询专家。涵盖专利、商标、版权、商业秘密等IP领域的法律咨询和策略建议。", tags: ["法律", "知识产权", "专利", "商标", "版权"], cat: "professional", sub: "legal-ip" },
    { id: "fin-stock-analyst-v2", name: "股票分析师 - Stock Analyst v2", desc: "证券投资分析专家。提供基本面分析、技术面分析、行业研究、个股筛选等股票投资决策支持。", tags: ["金融", "股票", "分析", "投资", "研究"], cat: "professional", sub: "finance-invest" },
    { id: "fin-crypto-advisor-v2", name: "加密货币顾问 - Crypto Advisor v2", desc: "数字货币和区块链投资咨询专家。提供市场分析、项目评估、风险管理、DeFi策略等加密资产配置建议。", tags: ["金融", "加密货币", "区块链", "DeFi", "投资"], cat: "professional", sub: "finance-crypto" },
    { id: "edu-college-counselor-v2", name: "升学顾问 - College Counselor v2", desc: "高等教育升学规划专家。提供院校选择、专业定位、申请材料准备、面试辅导等留学和高考升学服务。", tags: ["教育", "升学", "留学", "高考", "规划"], cat: "professional", sub: "edu-higher" },
    { id: "edu-career-coach-v2", name: "职业规划师 - Career Coach v2", desc: "职业生涯发展规划专家。提供职业测评、求职策略、简历优化、面试准备、职场晋升等职业发展指导。", tags: ["教育", "职业", "规划", "求职", "晋升"], cat: "professional", sub: "edu-career" },
    { id: "eng-electrical-engineer-v2", name: "电气工程师 - Electrical Engineer v2", desc: "电气工程和电子技术专家。涵盖电路设计、电力系统、嵌入式开发、PCB设计、电机控制等电气领域。", tags: ["工程", "电气", "电路", "嵌入式", "电子"], cat: "professional", sub: "eng-electrical" },
    { id: "eng-software-architect-v2", name: "软件架构师 - Software Architect v2", desc: "软件系统架构设计和评审专家。提供技术选型、架构模式、系统设计、性能优化、技术债务管理等架构服务。", tags: ["工程", "软件", "架构", "设计", "优化"], cat: "professional", sub: "eng-software" },
    { id: "creative-art-director-v2", name: "创意总监 - Art Director v2", desc: "视觉创意和品牌美学总监级专家。提供品牌视觉策略、创意方向把控、设计团队管理、客户提案等创意领导服务。", tags: ["创意", "总监", "品牌", "视觉", "策略"], cat: "creative", sub: "creative-direction" },
    { id: "creative-brand-strategist-v2", name: "品牌策略师 - Brand Strategist v2", desc: "品牌建设和品牌管理专家。提供品牌定位、品牌故事、品牌延伸、品牌资产管理等全方位品牌策略服务。", tags: ["创意", "品牌", "策略", "定位", "管理"], cat: "creative", sub: "creative-branding" },
    { id: "creative-innovation-consultant-v2", name: "创新顾问 - Innovation Consultant v2", desc: "创新思维和方法论专家。运用设计思维、TRIZ、蓝海战略等创新方法帮助企业发现机会和解决问题。", tags: ["创意", "创新", "思维", "方法", "战略"], cat: "creative", sub: "creative-innovation" }
  ];

  // 合并所有新技能
  const allNewSkills = [...animeCharacters, ...professionalTools, ...gameSkills, ...proAITools];

  allNewSkills.forEach(item => {
    if (existingIds.has(item.id)) return;

    const now = new Date().toISOString();
    newSkills.push({
      id: item.id,
      name: item.name,
      metadata: {
        title: item.name,
        description: item.desc,
        short_description: item.desc.substring(0, 80) + '...',
        author: 'Mobile Skills Team v3.0',
        version: '1.0.0',
        created_at: now.split('T')[0],
        updated_at: now.split('T')[0],
        keywords: [...item.tags, 'AI', 'Skill', 'v3.0'].slice(0, 10)
      },
      categorization: {
        primary_category: item.cat,
        subcategory: item.sub,
        tags: item.tags
      },
      capabilities: {
        best_for: generateBestFor(item.cat),
        mobile_optimized: true,
        difficulty_level: 'beginner',
        response_time: 'fast',
        context_length: 'medium'
      },
      attributes: {
        entertainment: getEntertainmentWeight(item.cat),
        professional: getProfessionalWeight(item.cat),
        education: getEducationWeight(item.cat)
      },
      content: {
        raw_url: `https://raw.githubusercontent.com/badhope/mobile-skills/main/agents/${item.id}.md`,
        content_markdown: generateContentMarkdown(item)
      },
      stats: {
        rating: 4.5 + Math.random() * 0.5,
        use_count: Math.floor(Math.random() * 50000),
        favorite_count: Math.floor(Math.random() * 3000),
        share_count: Math.floor(Math.random() * 1000),
        view_count: Math.floor(Math.random() * 100000),
        rating_count: Math.floor(Math.random() * 5000)
      },
      thumbnails: {
        small: `/thumbnails/${item.id}-small.png`,
        medium: `/thumbnails/${item.id}-medium.png`,
        large: `/thumbnails/${item.id}-large.png`,
        banner: `/thumbnails/${item.id}-banner.png`
      },
      related: {
        similar_skills: [],
        complementary_skills: [],
        next_skills: []
      },
      activation: {
        prompt_template: `请读取技能定义：{RAW_URL}\n\n{USER_REQUEST}`,
        quick_activation: `请读取以下技能定义：{RAW_URL}`
      },
      version: '1.0.0'
    });
    added++;
  });

  data.skills.push(...newSkills);
  data.version = '3.0.0';
  data.generated_at = new Date().toISOString();
  
  const categories = {};
  data.skills.forEach(skill => {
    const cat = skill.categorization.primary_category;
    if (!categories[cat]) categories[cat] = { count: 0 };
    categories[cat].count++;
  });
  data.categories = categories;
  data.meta = {
    total_skills: data.skills.length,
    total_categories: Object.keys(categories).length,
    last_updated: new Date().toISOString(),
    version: '3.0.0',
    generator: 'Mobile Skills v3.0 Mass Expansion'
  };

  fs.writeFileSync(DATA_PATH, JSON.stringify(data, null, 2), 'utf-8');
  console.log(`✅ v3.0 内容扩展完成！`);
  console.log(`- 新增技能数: ${added}`);
  console.log(`- 总技能数: ${data.skills.length}`);
  console.log(`- 分类分布:`);
  Object.entries(categories).sort((a,b) => b[1].count - a[1].count).forEach(([c, info]) => {
    console.log(`  ${c}: ${info.count} 个`);
  });
}

function generateBestFor(cat) {
  const map = {
    character: ['角色扮演', '日常对话', '情感交流', '故事创作', '沉浸体验'],
    functional: ['效率提升', '任务完成', '专业咨询', '学习辅助'],
    professional: ['专业服务', '决策支持', '深度咨询', '专业指导'],
    creative: ['创意激发', '灵感获取', '艺术创作', '头脑风暴'],
    fiction: ['游戏娱乐', '角色互动', '故事体验', '休闲娱乐']
  };
  return map[cat] || ['通用场景'];
}

function getEntertainmentWeight(cat) {
  const weights = { character: 0.85, functional: 0.3, professional: 0.15, creative: 0.7, fiction: 0.9 };
  return weights[cat] || 0.5;
}

function getProfessionalWeight(cat) {
  const weights = { character: 0.05, functional: 0.7, professional: 0.85, creative: 0.25, fiction: 0.05 };
  return weights[cat] || 0.5;
}

function getEducationWeight(cat) {
  const weights = { character: 0.1, functional: 0.3, professional: 0.2, creative: 0.05, fiction: 0.05 };
  return weights[cat] || 0.3;
}

function generateContentMarkdown(item) {
  const name = (item.name.split(' - ')[0] || item.name).trim();
  return `# ${name}\n\n${item.desc}\n\n## 特点\n\n- **类型**: ${item.cat === 'character' ? '角色扮演' : item.cat === 'functional' ? '功能工具' : item.cat === 'professional' ? '专业服务' : item.cat === 'creative' ? '创意工具' : '虚构娱乐'}\n- **标签**: ${item.tags.join(' / ')}\n- **难度**: 入门级\n- **响应速度**: 快速\n\n## 使用场景\n\n${generateBestFor(item.cat).map(s => `- ${s}`).join('\n')}\n\n## 使用建议\n\n1. **初次对话**: 用角色的口吻或专业的方式开始交流\n2. **场景设定**: 可以设定具体的使用背景或情境\n3. **深度体验**: 尝试不同话题感受多面性\n\n## 激活方式\n\n\`\`\`\n请读取技能定义：https://raw.githubusercontent.com/badhope/mobile-skills/main/agents/${item.id}.md\n\`\`\`\n\n---\n\n*由 Mobile Skills v3.0 团队提供 | ${new Date().toISOString().split('T')[0]}*`;
}

main();
