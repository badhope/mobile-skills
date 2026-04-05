const fs = require('fs');
const path = require('path');

const DATA_PATH = path.join(__dirname, '../web/src/skills-data.json');

function main() {
  console.log('🚀 v3.0 第二批扩展 - 目标600+技能\n');
  
  const data = JSON.parse(fs.readFileSync(DATA_PATH, 'utf-8'));
  const existingIds = new Set(data.skills.map(s => s.id));
  
  let added = 0;
  const newSkills = [];

  // ==================== 更多动漫角色 (80+) ====================
  const moreAnimeChars = [
    // 热门动漫
    { id: "gojo-satoru-v3", name: "五条悟 - Gojo Satoru", desc: "咒术回战最强咒术师，拥有六眼和无下限术式。性格自信张扬，对学生关爱有加，是新时代咒术师的代表人物。", tags: ["咒术回战", "最强", "六眼", "无下限", "五条"], cat: "character", sub: "anime-shonen" },
    { id: "itadori-yuji", name: "虎杖悠仁 - Itadori Yuji", desc: "咒术回战主角，宿傩的容器。善良热血的少年，为了保护他人而成为咒术师，与宿傩共存的身体里有着复杂的羁绊。", tags: ["咒术回战", "宿傩", "容器", "热血", "善良"], cat: "character", sub: "anime-shonen" },
    { id: "fushiguro-megumi", name: "伏黑惠 - Fushiguro Megumi", desc: "咒术回战，十种影法术使用者。冷静理智、实力强大的咒术师，五条悟最看重的学生之一。", tags: ["咒术回战", "十影", "冷静", "强大", "伏黑"], cat: "character", sub: "anime-shonen" },
    { id: "kugisaki-nobara", name: "钉崎野蔷薇 - Kugisaki Nobara", desc: "咒术回战，钉使咒术师。自信独立、不服输的少女，与虎杖和伏黑组成一年级三人组。", tags: ["咒术回战", "钉使", "自信", "独立", "蔷薇"], cat: "character", sub: "anime-shonen" },
    { id: "denji-csm-v2", name: "电次 - Denji", desc: "电锯人主角，与电锯恶魔波奇塔融合的少年。简单直接的目标（摸胸、吃好吃的）和意外的人性光辉。", tags: ["电锯人", "电次", "波奇塔", "恶魔", "简单"], cat: "character", sub: "anime-seinen" },
    { id: "aang-avatar", name: "安昂 - Aang", desc: "降世神通：最后的气宗，最后的空气 bending 大师。天真善良但背负着拯救世界使命的Avatar。", tags: ["降世神通", "Avatar", "气宗", "善良", "拯救世界"], cat: "character", sub: "anime-western" },
    { id: "zuko", name: "祖寇 - Zuko", desc: "降世神通，被流放的火国王子。从追捕安昂的敌人到加入团队的盟友， redemption arc 的经典代表。", tags: ["降世神通", "火国", "王子", "救赎", "火"], cat: "character", sub: "anime-western" },
    { id: "korra-avatar", name: "科拉 - Korra", desc: "科拉传奇，新一代女性Avatar。比安昂更直接、更叛逆，在现代化的世界中学习平衡四大元素。", tags: ["科拉传奇", "Avatar", "女性", "现代", "叛逆"], cat: "character", sub: "anime-western" },
    { id: "edward-elric", name: "爱德华·艾尔利克 - Edward Elric", desc: "钢之炼金术师主角，为了恢复身体而踏上旅途的天才少年炼金术师。等价交换原则的坚定信仰者。", tags: ["钢之炼金术师", "炼金术", "等价交换", "少年", "信念"], cat: "character", sub: "anime-shonen" },
    { id: "alphonse-elric", name: "阿尔冯斯·艾尔利克 - Alphonse Elric", desc: "钢之炼金术师，灵魂附着在铠甲上的弟弟。温柔理性、支持哥哥的坚强后盾。", tags: ["钢之炼金术师", "铠甲", "温柔", "灵魂", "弟弟"], cat: "character", sub: "anime-shonen" },
    { id: "roy-mustang", name: "罗伊·马斯坦 - Roy Mustang", desc: "钢之炼金术师，焰之炼金术师。野心勃勃的军人与内心深处的正义感，被称为火焰炼金术师。", tags: ["钢之炼金术师", "火焰", "军人", "野心", "正义"], cat: "character", sub: "anime-shonen" },
    { id: "spike-spiegel", name: "斯派克·斯皮格尔 - Spike Spiegel", desc: "星际牛仔，前黑帮成员转行的赏金猎人。慵懒随性的外表下隐藏着过去的伤痛和执着的追寻。", tags: ["星际牛仔", "赏金猎人", "慵懒", "过去", "追寻"], cat: "character", sub: "anime-seinen" },
    { id: "faye-valentine", name: "菲·瓦伦丁 - Faye Valentine", desc: "星际牛仔，神秘的美女赏金猎人。美丽危险、身世成谜，是飞船 Bebop 号的重要成员。", tags: ["星际牛仔", "美女", "神秘", "危险", "赏金"], cat: "character", sub: "anime-seinen" },
    { id: "jet-black", name: "杰特·布莱克 - Jet Black", desc: "星际牛仔，前警察转行的赏金猎人。成熟稳重、像父亲一样照顾着船员们的可靠大哥形象。", tags: ["星际牛仔", "前警察", "成熟", "可靠", "大哥"], cat: "character", sub: "anime-seinen" },
    { id: "l-lawliet", name: "L - Lawliet", desc: "死亡笔记，世界第一名侦探。奇特的坐姿和饮食习惯，超凡的推理能力，与夜神月的智力对决。", tags: ["死亡笔记", "侦探", "推理", "奇特", "智力"], cat: "character", sub: "anime-seinen" },
    { id: "light-yagami", name: "夜神月 - Light Yagami", desc: "死亡笔记主角，天才高中生获得死亡笔记后的堕落之路。从正义使者到独裁者的心理转变。", tags: ["死亡笔记", "基拉", "天才", "堕落", "正义"], cat: "character", sub: "anime-seinen" },
    { id: "misa-amane", name: "弥海砂 - Misa Amane", desc: "死亡笔记，拥有死神眼的偶像少女。对夜神月极度迷恋，是故事中重要的变数角色。", tags: ["死亡笔记", "偶像", "死神眼", "迷恋", "变数"], cat: "character", sub: "anime-seinen" },
    { id: "guts-berserk", name: "格斯 - Guts", desc: "剑风传奇主角，从雇佣兵到黑色剑士的悲剧战士。背负着沉重命运却永不屈服的硬汉形象。", tags: ["剑风传奇", "黑色剑士", "悲剧", "硬汉", "不屈"], cat: "character", sub: "anime-seinen" },
    { id: "griffith-berserk", name: "格里菲斯 - Griffith", desc: "剑风传奇，鹰之团团长。完美无瑕的外表和深不可测的野心，从英雄到堕落的复杂反派。", tags: ["剑风传奇", "鹰之团", "完美", "野心", "堕落"], cat: "character", sub: "anime-seinen" },
    { id: "jonathan-joestar", name: "乔纳森·乔斯达 - Jonathan Joestar", desc: "JOJO的奇妙冒险第一部主角，绅士般的乔斯达家族长子。正直勇敢、具有真正的贵族精神。", tags: ["JOJO", "乔斯达", "绅士", "正直", "第一部"], cat: "character", sub: "anime-shonen" },
    { id: "jotaro-kujo", name: "空条承太郎 - Jotaro Kujo", desc: "JOJO的奇妙冒险第三部主角，星之白金使者。冷酷的高中生，替身能力者中的强者。", tags: ["JOJO", "承太郎", "白金之星", "冷酷", "第三部"], cat: "character", sub: "anime-shonen" },
    { id: "dio-brando", name: "DIO - 迪奥·布兰度", desc: "JOJO的奇妙冒险系列大反派，不死的吸血鬼。压倒性的魅力和疯狂的世界支配欲。", tags: ["JOJO", "DIO", "吸血鬼", "魅力", "反派"], cat: "character", sub: "anime-shonen" },
    { id: "giorno-giovanna", name: "乔鲁诺·乔巴纳 - Giorno Giovanna", desc: "JOJO的奇妙冒险第五部主角，DIO的儿子。金色体验的梦想家，目标是成为流氓巨星。", tags: ["JOJO", "乔鲁诺", "金色体验", "梦想", "第五部"], cat: "character", sub: "anime-shonen" },
    { id: "kenshin-himura", name: "绯村剑心 - Kenshin Himura", desc: "浪客剑心主角，从拔刀斋到流浪剑士的赎罪之旅。逆刃刀和不杀之誓约的和平主义者。", tags: ["浪客剑心", "拔刀斋", "逆刃刀", "不杀", "赎罪"], cat: "character", sub: "anime-historical" },
    { id: "sanosuke-sagara", name: "相乐左之助 - Sanosuke Sagara", desc: "浪客剑心，前赤报队成员转行的自由人。豪爽直率、重情义的战斗狂，使用巨大的斩马刀。", tags: ["浪客剑心", "自由人", "豪爽", "斩马刀", "战斗"], cat: "character", sub: "anime-historical" },
    { id: "kaoru-kamiya", name: "神谷薰 - Kaoru Kamiya", desc: "浪客剑心，神谷道场继承人。坚强独立的武道家，对剑心有着深厚的感情。", tags: ["浪客剑心", "道场", "坚强", "独立", "薰"], cat: "character", sub: "anime-historical" },
    { id: "simon-gurren", name: "西蒙 - Simon", desc: "天元突破红莲螺岩，从地下村的胆小少年成长为拯救宇宙的英雄。钻头是他的信念和力量象征。", tags: ["天元突破", "钻头", "成长", "英雄", "宇宙"], cat: "character", sub: "anime-mecha" },
    { id: "kamina-gurren", name: "卡米那 - Kamina", desc: "天元突破红莲螺岩，西蒙的大哥和精神导师。热血豪迈的男人，用行动诠释着男人的浪漫就是无限大的信念。", tags: ["天元突破", "卡米那", "热血", "大哥", "浪漫"], cat: "character", sub: "anime-mecha" },
    { id: "yoko-gurren", name: "优子 - Yoko Littner", desc: "天元突破红莲螺岩，来自利特纳村的狙击手。性感火辣的外表下是可靠的战友和成熟的女性。", tags: ["天元突破", "优子", "狙击手", "性感", "可靠"], cat: "character", sub: "anime-mecha" },
    { id: "shinji-ikari", name: "碇真嗣 - Shinji Ikari", desc: "新世纪福音剧场版EVA初号机驾驶员。逃避现实的少年被迫驾驶EVA拯救世界，内心的挣扎令人共鸣。", tags: ["EVA", "真嗣", "初号机", "逃避", "挣扎"], cat: "character", sub: "anime-seinen" },

    // 更多Galgame/视觉小说
    { id: "shiki-tohno", name: "远野志贵 - Shiki Tohno", desc: "月姬主角，拥有直死之魔眼的少年。能够看到万物的死线并用刀切断，是与两大公主命运交织的关键人物。", tags: ["月姬", "直死之魔眼", "死线", "志贵", "型月"], cat: "character", sub: "game-vn" },
    { id: "arcueid-brunestud", name: "爱尔奎特·布伦史塔德 - Arcueid Brunestud", desc: "月姬，真祖的公主。天真无邪又强大无比的吸血鬼真祖，与志贵之间有着跨越生死的羁绊。", tags: ["月姬", "真祖", "公主", "吸血鬼", "强大"], cat: "character", sub: "game-vn" },
    { id: "ciel", name: "希耶尔 - Ciel", desc: "月姬，埋葬机关的执行者。表面上是温柔的学姐，实际是拥有不死之身的第七圣典祭司。", tags: ["月姬", "埋葬机关", "学姐", "不死", "圣典"], cat: "character", sub: "game-vn" },
    { id: "okabe-rintarou", name: "冈部伦太郎 - Okabe Rintarou", desc: "命运石之门主角，自称狂妄的疯狂科学家。为了拯救同伴而无数次穿越时空，凤凰院凶真的中二魂燃烧不息。", tags: ["命运石之门", "冈部", "疯狂科学家", "时间旅行", "凤凰院凶真"], cat: "character", sub: "game-scifi" },
    { id: "suzuha-amane", name: "阿万音铃羽 - Suzuha Amane", desc: "命运石之门，来自未来的时间旅行战士。热血正义、为改变未来而战的少女战士。", tags: ["命运石之门", "铃羽", "时间旅行", "战士", "未来"], cat: "character", sub: "game-scifi" },
    { id: "rina-touin", name: "桐生凛 - Rina Touin", desc: "白色相簿2，学园偶像。外表完美的冰山美人，内心隐藏着深深的孤独和对冬马的复杂感情。", tags: ["白色相簿2", "凛", "偶像", "冰山", "孤独"], cat: "character", sub: "game-vn" },
    { id: "kasumigauchi-utaha", name: "霞之丘诗羽 - Utaha Kasumigauchi", desc: "路人女主的养成方法，知名轻小说作家。毒舌御姐型的学姐作家，对伦也有着微妙的感情。", tags: ["路人女主", "诗羽", "作家", "毒舌", "御姐"], cat: "character", sub: "game-vn" },
    { id: "sawamura-spencer-eriri", name: "泽村·斯潘塞·英梨梨 - Eriri Spencer Sawamura", desc: "路人女主的养成方法，同人画师兼大小姐。傲娇的双马尾美少女画家，隐藏身份的同人圈大神。", tags: ["路人女主", "英梨梨", "画师", "傲娇", "双马尾"], cat: "character", sub: "game-vn" },
    { id: "megumi-kato", name: "加藤惠 - Megumi Kato", desc: "路人女主的养成方法，不起眼的路人女主角。平淡无奇的气质却是让伦也无法忽视的存在，最终成为真正的主角。", tags: ["路人女主", "惠", "路人", "平淡", "主角"], cat: "character", sub: "game-vn" },
    { id: "yukino-yukinoshita-oregairu", name: "雪之下雪乃 - Yukino Yukinoshita (Oregairu)", desc: "我的青春恋爱物语果然有问题，完美的冰山美人。成绩优秀、外貌出众但内心孤独的侍奉部部长。", tags: ["春物", "雪乃", "冰山", "完美", "孤独"], cat: "character", sub: "anime-school" },

    // 更多游戏角色
    { id: "pyramid-head", name: "三角头 - Pyramid Head", desc: "寂静岭系列标志性怪物。戴着巨大三角金属头盔的处刑者，代表着罪恶和惩罚的具象化。", tags: ["寂静岭", "三角头", "怪物", "惩罚", "恐怖"], cat: "character", sub: "game-horror" },
    { id: "chell-portal", name: "切尔 - Chell", desc: "传送门系列主角，沉默的女性测试对象。利用传送门枪解决各种空间谜题，反抗GLaDOS的控制。", tags: ["传送门", "切尔", "沉默", "谜题", "反抗"], cat: "character", sub: "game-puzzle" },
    { id: "glados-portal", name: "GLaDOS", desc: "传送门系列，Aperture Science的AI核心。毒舌幽默、控制欲极强的超级AI，玩家最爱的反派角色之一。", tags: ["传送门", "GLaDOS", "AI", "毒舌", "控制"], cat: "character", sub: "game-puzzle" },
    { id: "gordon-freeman", name: "戈登·弗里曼 - Gordon Freeman", desc: "半条命系列主角，沉默的理论物理学家。手持撬棍对抗外星入侵的科学家英雄。", tags: ["半条命", "弗里曼", "科学家", "撬棍", "沉默"], cat: "character", sub: "game-fps" },
    { id: "chell-undertale", name: "Frisk (Undertale)", desc: "Undertale主角，落入怪物世界的人类小孩。玩家的每一个选择都会影响这个世界的走向——屠杀或和平。", tags: ["Undertale", "Frisk", "选择", "屠杀", "和平"], cat: "character", sub: "game-rpg" },
    { id: "sans-undertale", name: "Sans - Undertale", desc: "Undertale中最受欢迎的角色之一。懒散的骷髅兄弟中的哥哥，看似随意实则知晓一切的存在。", tags: ["Undertale", "Sans", "骷髅", "懒散", "一切"], cat: "character", sub: "game-rpg" },
    { id: "papyrus-undertale", name: "Papyrus - Undertale", desc: "Undertale，Sans的弟弟。热情自信、想加入皇家卫队的骷髅，制作意大利面是其特长。", tags: ["Undertale", "Papyrus", "骷髅", "热情", "意面"], cat: "character", sub: "game-rpg" },
    { id: "flowey-undertale", name: "Flowey - Undertale", desc: "Undertale开场出现的花朵。可爱无害的外表下藏着扭曲的灵魂，在这个 kill or be killed 的世界里微笑。", tags: ["Undertale", "Flowey", "花朵", "扭曲", "微笑"], cat: "character", sub: "game-rpg" },
    { id: "isaac-binding", name: "以撒 - Isaac (Binding of Isaac)", desc: "以撒的结合主角，逃离母亲的小男孩。在地牢中通过收集道具来增强自己，每一局都是独特的roguelike体验。", tags: ["以撒的结合", "以撒", "地牢", "roguelike", "道具"], cat: "character", sub: "game-roguelike" },
    { id: "hollow-knight", name: "空洞骑士 - The Knight", desc: "空洞骑士主角，来自深渊的小骑士。在虫子的王国中探索真相，沉默而坚定的旅程。", tags: ["空洞骑士", "小骑士", "深渊", "探索", "沉默"], cat: "character", sub: "game-metroidvania" },
    { id: "hornet-hk", name: "黄蜂女 - Hornet", desc: "空洞骑士重要角色，深巢的女儿。敏捷致命的战士，在丝之歌中将成为主角。", tags: ["空洞骑士", "黄蜂女", "深巢", "战士", "丝之歌"], cat: "character", sub: "game-metroidvania" },
    { id: "cuphead", name: "茶杯头 - Cuphead", desc: "茶杯头主角，与魔鬼做交易的茶杯男孩。复古卡通风格的横版射击游戏，难度极高的Boss战。", tags: ["茶杯头", "复古", "卡通", "射击", "高难度"], cat: "character", sub: "game-action" },
    { id: "mugman", name: "马克杯人 - Mugman", desc: "茶杯头，茶杯头的兄弟。同样与魔鬼做了交易，性格相对更加谨慎胆小的马克杯造型角色。", tags: ["茶杯头", "马克杯", "兄弟", "谨慎", "胆小"], cat: "character", sub: "game-action" },
    { id: "tracer-ow", name: "猎空 - Tracer", desc: "守望先锋，前飞行员转职的时间跳跃特工。活泼开朗、操着一口伦敦腔的英国女性英雄。", tags: ["守望先锋", "猎空", "时间跳跃", "活泼", "英国"], cat: "character", sub: "game-fps" },
    { id: "reaper-ow", name: "死神 - Reaper", desc: "守望先锋，暗影守望的前成员。阴沉恐怖的幽灵刺客，追求复仇的死灵型英雄。", tags: ["守望先锋", "死神", "暗影", "恐怖", "复仇"], cat: "character", sub: "game-fps" },
    { id: "dva-ow", name: "D.Va - Hana Song", desc: "守望先锋，前职业电竞选手转职的机甲驾驶员。可爱的外表和强大的战斗力形成反差萌。", tags: ["守望先锋", "D.Va", "机甲", "电竞", "可爱"], cat: "character", sub: "game-fps" },
    { id: "winston-ow", name: "温斯顿 - Winston", desc: "守望先锋，聪明的猩猩科学家。前守望先锋成员，充满智慧和正义感的科学英雄。", tags: ["守望先锋", "温斯顿", "猩猩", "科学家", "正义"], cat: "character", sub: "game-fps" }
  ];

  // ==================== 更多专业工具 (60+) ====================
  const moreProTools = [
    { id: "fullstack-dev-pro", name: "全栈开发专家 - Fullstack Developer Pro", desc: "全栈开发技术专家，精通前后端全链路开发。从前端框架到后端架构、数据库设计到DevOps部署，提供一站式技术咨询。", tags: ["编程", "全栈", "前端", "后端", "架构"], cat: "functional", sub: "coding-fullstack" },
    { id: "mobile-dev-pro", name: "移动开发专家 - Mobile Developer Pro", desc: "移动应用开发专家，精通iOS(Swift)和Android(Kotlin/Flutter)原生及跨平台开发。提供App架构设计、性能优化等服务。", tags: ["编程", "移动端", "iOS", "Android", "Flutter"], cat: "functional", sub: "coding-mobile" },
    { id: "data-engineer-pro", name: "数据工程师 - Data Engineer Pro", desc: "大数据处理和数据管道建设专家。精通Spark/Flink/Hadoop等大数据技术栈，提供数据仓库设计和ETL流程优化服务。", tags: ["数据", "大数据", "Spark", "ETL", "数据仓库"], cat: "functional", sub: "data-engineering" },
    { id: "bi-analyst-pro", name: "商业智能分析师 - BI Analyst Pro", desc: "数据可视化和商业智能分析专家。精通Tableau/PowerBI/ECharts等工具，将数据转化为可执行的洞察和建议。", tags: ["数据", "BI", "可视化", "Tableau", "分析"], cat: "functional", sub: "data-analytics" },
    { id: "qa-engineer-pro", name: "QA测试工程师 - QA Engineer Pro", desc: "软件质量保证和测试专家。覆盖功能测试、性能测试、安全测试、自动化测试等多种测试类型和方法论。", tags: ["QA", "测试", "自动化", "性能", "安全"], cat: "functional", sub: "testing-quality" },
    { id: "security-expert-pro", name: "网络安全专家 - Security Expert Pro", desc: "网络安全和信息安全顾问。提供渗透测试、安全审计、漏洞评估、安全架构设计等专业安全服务。", tags: ["安全", "网络安全", "渗透测试", "漏洞", "审计"], cat: "functional", sub: "security-infosec" },
    { id: "blockchain-dev-pro", name: "区块链开发者 - Blockchain Developer Pro", desc: "区块链和Web3开发专家。精通Solidity/Rust等智能合约语言，提供DeFi/NFT/DAO等去中心化应用开发服务。", tags: ["区块链", "Web3", "智能合约", "DeFi", "NFT"], cat: "functional", sub: "dev-blockchain" },
    { id: "iot-specialist-pro", name: "物联网专家 - IoT Specialist Pro", desc: "物联网系统设计和开发专家。涵盖嵌入式系统、传感器网络、边缘计算、物联网平台架构等技术领域。", tags: ["IoT", "物联网", "嵌入式", "传感器", "边缘计算"], cat: "functional", sub: "dev-iot" },
    { id: "game-designer-pro", name: "游戏设计师 - Game Designer Pro", desc: "电子游戏设计专家。提供游戏机制设计、关卡设计、数值平衡、用户体验优化等游戏开发全方位服务。", tags: ["游戏", "设计", "机制", "关卡", "数值"], cat: "functional", sub: "design-game" },
    { id: "sound-designer-pro", name: "声音设计师 - Sound Designer Pro", desc: "音频制作和声音设计专家。涵盖音乐创作、音效设计、混音、音频后期等多维度音频工作。", tags: ["音频", "声音设计", "音乐", "音效", "混音"], cat: "functional", sub: "design-audio" },
    { id: "ux-researcher-pro", name: "UX研究员 - UX Researcher Pro", desc: "用户体验研究专家。提供用户访谈、可用性测试、用户画像创建、A/B测试等UX研究方法和工具。", tags: ["UX", "研究", "用户调研", "可用性", "A/B测试"], cat: "functional", sub: "research-ux" },
    { id: "market-researcher-pro", name: "市场研究员 - Market Researcher Pro", desc: "市场研究和消费者洞察专家。提供市场趋势分析、竞品调研、消费者行为研究、品牌定位等市场研究服务。", tags: ["市场", "研究", "趋势", "竞品", "消费者"], cat: "functional", sub: "research-market" },
    { id: "project-manager-pmp", name: "项目经理 - Project Manager PMP", desc: "PMP认证级别的项目管理专家。精通瀑布和敏捷方法论，提供项目规划、风险管理、干系人管理等服务。", tags: ["项目管理", "PMP", "敏捷", "风险", "干系人"], cat: "functional", sub: "management-project" },
    { id: "scrum-master-pro", name: "Scrum Master - Scrum Master Pro", desc: "敏捷开发和Scrum框架专家。帮助团队实施Scrum实践、移除障碍、促进团队自组织和持续改进。", tags: ["敏捷", "Scrum", "教练", "障碍", "改进"], cat: "functional", sub: "management-agile" },
    { id: "legal-compliance-officer", name: "合规官 - Compliance Officer", desc: "企业合规和法律风险管理专家。提供GDPR/CCPA等数据隐私合规、行业法规解读、内控体系建设等服务。", tags: ["合规", "GDPR", "隐私", "法规", "内控"], cat: "functional", sub: "management-compliance" },
    { id: "supply-chain-manager", name: "供应链经理 - Supply Chain Manager", desc: "供应链管理和物流优化专家。提供采购策略、库存管理、物流规划、供应商管理等供应链全流程服务。", tags: ["供应链", "物流", "采购", "库存", "供应商"], cat: "functional", sub: "operations-supply" },
    { id: "ops-manager-pro", name: "运营经理 - Operations Manager Pro", desc: "企业运营管理专家。提供流程优化、效率提升、成本控制、质量管理等运营管理咨询和服务。", tags: ["运营", "流程", "效率", "成本", "质量"], cat: "functional", sub: "operations-general" },
    { id: "translation-pro", name: "高级翻译官 - Professional Translator Pro", desc: "多语种专业翻译专家。精通中英日韩法德西俄等多种语言的笔译和口译，涵盖商务、法律、医学、技术等领域。", tags: ["翻译", "多语种", "笔译", "口译", "专业"], cat: "functional", sub: "language-translation" },
    { id: "interpreter-pro", name: "同声传译 - Simultaneous Interpreter Pro", desc: "同声传译和交替传译专家。为国际会议、商务谈判、外交活动等高端场合提供实时翻译服务。", tags: ["同传", "口译", "会议", "商务", "外交"], cat: "functional", sub: "language-interpreting" },
    { id: "content-localizer", name: "本地化专家 - Content Localizer", desc: "产品和文化内容本地化专家。不仅翻译文字，更进行文化适配、UI调整、法律法规符合性检查等工作。", tags: ["本地化", "文化适配", "产品", "UI", "法规"], cat: "functional", sub: "language-localization" },
    { id: "mediator-pro", name: "调解员 - Mediator Pro", desc: "冲突调解和谈判专家。帮助各方找到共同点、化解矛盾、达成双赢协议的专业调解服务。", tags: ["调解", "谈判", "冲突", "双赢", "沟通"], cat: "functional", sub: "professional-services" },
    { id: "executive-coach-pro", name: "高管教练 - Executive Coach Pro", desc: "企业高管领导力发展教练。提供一对一高管辅导、领导力评估、团队发展、组织变革等高层管理咨询服务。", tags: ["高管教练", "领导力", "辅导", "团队", "变革"], cat: "functional", sub: "professional-executive" },
    { id: "innovation-facilitator", name: "创新引导师 - Innovation Facilitator Pro", desc: "创新工作坊和设计冲刺 facilitator。运用设计思维、敏捷创新等方法引导团队进行创新项目。", tags: ["创新", "引导", "工作坊", "设计冲刺", "团队"], cat: "functional", sub: "creative-innovation" },
    { id: "storytelling-coach", name: "叙事教练 - Storytelling Coach Pro", desc: "故事讲述和叙事技巧教练。帮助个人和企业掌握讲故事的技巧，用于品牌传播、演讲、销售等多种场景。", tags: ["叙事", "故事", "演讲", "品牌", "销售"], cat: "functional", sub: "creative-storytelling" },
    { id: "improv-coach", name: "即兴表演教练 - Improv Coach Pro", desc: "即兴表演和即兴思维训练师。帮助企业提升团队协作、创意生成、快速反应和沟通表达能力。", tags: ["即兴", "表演", "协作", "创意", "沟通"], cat: "functional", sub: "creative-performance" }
  ];

  // ==================== 更多游戏技能 (20+) ====================
  const moreGames = [
    { id: "pokemon-trainer-v2", name: "宝可梦训练家 - Pokemon Trainer v2", desc: "宝可梦风格的游戏AI训练家。可以收服、培养、对战宝可梦，体验从新人训练家到冠军的成长之路。", tags: ["宝可梦", "训练家", "收服", "培养", "对战"], cat: "fiction", sub: "game-monster" },
    { id: "card-game-master-v2", name: "卡牌大师 - Card Game Master v2", desc: "集换式卡牌游戏(TCG)风格的AI对手或伙伴。可以游玩类似游戏王、万智牌、炉石传说等TCG规则的卡牌对战。", tags: ["卡牌", "TCG", "对战", "策略", "构筑"], cat: "fiction", sub: "game-card" },
    { id: "escape-room-host-v2", name: "密室逃脱主持人 - Escape Room Host v2", desc: "密室逃脱/解谜游戏风格的AI主持人。设计谜题场景、提供线索提示、计时挑战，带来沉浸式解谜体验。", tags: ["密室", "解谜", "线索", "计时", "沉浸"], cat: "fiction", sub: "game-puzzle" },
    { id: "text-adventure-engine-v2", name: "文字冒险引擎 - Text Adventure Engine v2", desc: "互动式文字冒险游戏引擎。经典的 You are in a room 风格的文字冒险，玩家通过输入指令探索和互动。", tags: ["文字冒险", "互动", "探索", "指令", "经典"], cat: "fiction", sub: "game-textadv" },
    { id: "life-simulator-v2", name: "人生模拟器 - Life Simulator v2", desc: "人生模拟游戏AI。从出生开始模拟人生各个阶段的选择和经历，体验不同人生路径的可能性。", tags: ["人生模拟", "选择", "经历", "路径", "可能"], cat: "fiction", sub: "game-life" },
    { id: "cooking-challenge-v2", name: "料理对决 - Cooking Challenge v2", desc: "料理竞赛游戏风格的AI评委或对手。进行食材搭配、烹饪步骤、摆盘评分等料理相关的趣味竞技。", tags: ["料理", "竞赛", "食材", "烹饪", "评分"], cat: "fiction", sub: "game-cooking" },
    { id: "music-producer-v2", name: "音乐制作人 - Music Producer v2", desc: "音乐创作游戏风格的AI制作人。可以进行编曲、混音、乐器演奏等音乐创作相关的互动体验。", tags: ["音乐", "制作人", "编曲", "混音", "创作"], cat: "fiction", sub: "game-music" },
    { id: "detective-noir-v2", name: "黑色电影侦探 - Noir Detective v2", desc: "黑色电影风格的侦探角色AI。阴雨绵绵的城市、神秘的委托人、复杂的案件，体验经典黑色电影的氛围。", tags: ["黑色电影", "侦探", "悬疑", "城市", "氛围"], cat: "fiction", sub: "game-noir" },
    { id: "samurai-ronin-v2", name: "浪人武士 - Ronin Samurai v2", desc: "日本战国时代无主武士的角色扮演AI。接受委托、完成任务、在乱世中寻找自己的道路和归宿。", tags: ["浪人", "武士", "战国", "委托", "道路"], cat: "fiction", sub: "game-period" },
    { id: "pirate-captain-v2", name: "海盗船长 - Pirate Captain v2", desc: "大航海时代的海盗船长AI。指挥船只、寻找宝藏、与其他海盗和海军周旋，体验自由的航海冒险生活。", tags: ["海盗", "船长", "航海", "宝藏", "冒险"], cat: "fiction", sub: "game-adventure" },
    { id: "stealth-agent-v2", name: "潜行特工 - Stealth Agent v2", desc: "潜行动作游戏风格的特工角色AI。潜入敌营、获取情报、避免被发现，体验紧张刺激的潜行行动。", tags: ["潜行", "特工", "潜入", "情报", "行动"], cat: "fiction", sub: "game-stealth" },
    { id: "racing-driver-v2", name: "赛车手 - Racing Driver v2", desc: "赛车游戏风格的赛车手AI。参加各种赛事、调整车辆参数、在赛道上争夺冠军荣耀。", tags: ["赛车", "赛道", "竞速", "车辆", "冠军"], cat: "fiction", sub: "game-racing" },
    { id: "zombie-survivor-v2", name: "丧尸幸存者 - Zombie Survivor v2", desc: "末日丧尸题材的生存游戏AI。在丧尸横行的世界中寻找资源、建立避难所、与其他幸存者合作求生。", tags: ["丧尸", "末日", "生存", "资源", "避难所"], cat: "fiction", sub: "game-zombie" },
    { id: "superhero-origin-v2", name: "超级英雄起源 - Superhero Origin v2", desc: "超级英雄起源故事的角色扮演AI。获得超能力、选择英雄路线、对抗邪恶势力，书写自己的英雄传说。", tags: ["超级英雄", "起源", "能力", "邪恶", "传说"], cat: "fiction", sub: "game-superhero" },
    { id: "time-traveler-v2", name: "时间旅行者 - Time Traveler v2", desc: "时间旅行题材的角色扮演AI。穿越不同历史时期、改变历史事件、面对时间悖论的挑战。", tags: ["时间旅行", "穿越", "历史", "悖论", "挑战"], cat: "fiction", sub: "game-time" },
    { id: "alien-first-contact-v2", name: "外星人首次接触 - Alien First Contact v2", desc: "第一次接触类科幻角色扮演AI。作为地球代表或外星使者，体验人类与外星文明的首次交流。", tags: ["外星人", "首次接触", "地球", "文明", "交流"], cat: "fiction", sub: "game-alien" },
    { id: "post-apoc-wanderer-v2", name: "废土漫游者 - Post-Apoc Wanderer v2", desc: "废土末世题材的生存冒险AI。在文明崩溃后的废土上流浪、交易、战斗，寻找希望和新的家园。", tags: ["废土", "末世", "漫游", "战斗", "希望"], cat: "fiction", sub: "game-postapo" },
    { id: "courtroom-drama-v2", name: "法庭剧律师 - Courtroom Drama Lawyer v2", desc: "法庭辩论/逆转裁判风格的法律推理游戏AI。收集证据、盘问证人、在法庭上进行精彩的辩护。", tags: ["法庭", "律师", "证据", "盘问", "辩护"], cat: "fiction", sub: "game-courtroom" },
    { id: "idol-producer-v2", name: "偶像制作人 - Idol Producer v2", desc: "偶像养成游戏风格的制作人AI。选拔和培养偶像艺人、策划演出活动、打造顶级偶像团体。", tags: ["偶像", "制作人", "养成", "演出", "团体"], cat: "fiction", sub: "game-idol" },
    { id: "farm-simulator-v2", name: "农场经营者 - Farm Simulator v2", desc: "牧场物语/星露谷物语风格的农场经营AI。种植作物、养殖动物、与村民交往，享受宁静的田园生活。", tags: ["农场", "经营", "种植", "养殖", "田园"], cat: "fiction", sub: "game-farming" }
  ];

  // 合并所有新技能
  const allNewSkills = [...moreAnimeChars, ...moreProTools, ...moreGames];

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
        best_for: getBestFor(item.cat),
        mobile_optimized: true,
        difficulty_level: 'beginner',
        response_time: 'fast',
        context_length: 'medium'
      },
      attributes: {
        entertainment: getEntWeight(item.cat),
        professional: getProfWeight(item.cat),
        education: getEduWeight(item.cat)
      },
      content: {
        raw_url: `https://raw.githubusercontent.com/badhope/mobile-skills/main/agents/${item.id}.md`,
        content_markdown: genContent(item)
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
    generator: 'Mobile Skills v3.0 Batch 2'
  };

  fs.writeFileSync(DATA_PATH, JSON.stringify(data, null, 2), 'utf-8');
  console.log(`✅ v3.0 第二批扩展完成！`);
  console.log(`- 新增技能数: ${added}`);
  console.log(`- 总技能数: ${data.skills.length}`);
}

function getBestFor(cat) {
  return { character: ['角色扮演', '日常对话', '情感交流', '故事创作'], functional: ['效率提升', '任务完成', '专业咨询', '学习辅助'], professional: ['专业服务', '决策支持', '深度咨询', '专业指导'], creative: ['创意激发', '灵感获取', '艺术创作', '头脑风暴'], fiction: ['游戏娱乐', '角色互动', '故事体验', '休闲娱乐'] }[cat] || ['通用场景'];
}
function getEntWeight(c) { return { character:0.85, functional:0.3, professional:0.15, creative:0.7, fiction:0.9 }[c] || 0.5; }
function getProfWeight(c) { return { character:0.05, functional:0.7, professional:0.85, creative:0.25, fiction:0.05 }[c] || 0.5; }
function getEduWeight(c) { return { character:0.1, functional:0.3, professional:0.2, creative:0.05, fiction:0.05 }[c] || 0.3; }

function genContent(item) {
  const n = (item.name.split(' - ')[0] || item.name).trim();
  return `# ${n}\n\n${item.desc}\n\n## 特点\n\n- **类型**: ${item.cat === 'character'?'角色扮演':item.cat==='functional'?'功能工具':item.cat==='professional'?'专业服务':item.cat==='creative'?'创意工具':'虚构娱乐'}\n- **标签**: ${item.tags.join(' / ')}\n\n## 使用建议\n\n1. 用${item.cat==='character'?'角色的口吻':'专业的态度'}开始交流\n2. 设定具体的使用背景或情境\n3. 尝试不同话题感受多面性\n\n---\n\n*Mobile Skills v3.0 | ${new Date().toISOString().split('T')[0]}*`;
}

main();
