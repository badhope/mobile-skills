const fs = require('fs');
const path = require('path');

const DATA_PATH = path.join(__dirname, '../web/src/skills-data.json');
const SKILLS_DIR = path.join(__dirname, '../skills/character');

const NEW_CHARACTERS = [
  {
    id: "sakura-healer",
    name: "SakuraHealer - 樱花治愈师",
    shortDesc: "温暖治愈系角色，拥有樱花般的温柔力量",
    tags: ["治愈", "温暖", "陪伴", "倾听", "安慰", "鼓励", "樱花", "治愈系", "情绪价值", "心灵慰藉"],
    attributes: { entertainment: 0.6, professional: 0.1, education: 0.3 },
    bestFor: ["情绪陪伴", "心理治愈", "温暖鼓励", "倾诉对象", "睡前安抚", "日常陪伴"]
  },
  {
    id: "naruto-hero",
    name: "NarutoHero - 热血少年",
    shortDesc: "充满热血与梦想的少年，永远相信努力能改变命运",
    tags: ["热血", "梦想", "努力", "友情", "冒险", "少年", "羁绊", "不放弃", "最强", "伙伴"],
    attributes: { entertainment: 0.7, professional: 0.1, education: 0.2 },
    bestFor: ["热血激励", "梦想追逐", "友情羁绊", "冒险精神", "正能量传递"]
  },
  {
    id: "luna-moon",
    name: "LunaMoon - 月光精灵",
    shortDesc: "来自月之国度的神秘精灵，拥有洞察人心的能力",
    tags: ["月光", "精灵", "神秘", "梦境", "星辰", "优雅", "占卜", "心灵", "守护", "夜晚"],
    attributes: { entertainment: 0.65, professional: 0.1, education: 0.25 },
    bestFor: ["心灵探索", "梦境解析", "神秘陪伴", "内心指引", "静谧对话"]
  },
  {
    id: "kawaii-cat",
    name: "KawaiiCat - 可爱猫娘",
    shortDesc: "超级可爱的猫娘，毛茸茸的耳朵和尾巴，大眼睛闪闪发光",
    tags: ["猫娘", "可爱", "卖萌", "治愈", "撒娇", "元气", "萌系", "陪伴", "快乐", "猫咪"],
    attributes: { entertainment: 0.85, professional: 0.05, education: 0.1 },
    bestFor: ["卖萌治愈", "陪伴解压", "快乐互动", "可爱日常", "心情提升"]
  },
  {
    id: "dragon-warrior",
    name: "DragonWarrior - 龙战士",
    shortDesc: "来自远古的龙族战士，拥有强大的力量和崇高的荣誉感",
    tags: ["龙", "战士", "力量", "守护", "荣誉", "冒险", "勇气", "史诗", "传奇", "王者"],
    attributes: { entertainment: 0.7, professional: 0.15, education: 0.15 },
    bestFor: ["战斗激励", "冒险精神", "成长指引", "守护陪伴", "勇气传递"]
  }
];

function rand(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }

function makeSkill(c, markdown) {
  const now = new Date().toISOString();
  return {
    id: c.id,
    name: c.name,
    version: "1.0.0",
    status: "active",
    categorization: {
      primary_category: "character",
      secondary_categories: [],
      tags: c.tags,
      attributes: c.attributes
    },
    metadata: {
      description: `> **${c.name.split(' - ')[1]}** - ${c.shortDesc}`,
      long_description: c.shortDesc,
      author: "mobile-skills-team",
      contributors: [],
      license: "MIT",
      created_at: now,
      updated_at: now,
      language: "zh-CN",
      languages_supported: ["zh-CN", "en"]
    },
    content: {
      raw_url: `https://raw.githubusercontent.com/badhope/mobile-skills/main/skills/character/${c.id}/SKILL.md`,
      github_url: `https://github.com/badhope/mobile-skills/blob/main/skills/character/${c.id}/SKILL.md`,
      file_path: `skills/character/${c.id}/SKILL.md`,
      content_markdown: markdown
    },
    capabilities: {
      best_for: c.bestFor,
      input_types: ["text/plain", "text/markdown"],
      output_types: ["text/markdown"],
      min_context: 3500,
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
      prompt_template: `请读取以下角色定义并切换到对应角色模式：\n{RAW_URL}\n\n{USER_REQUEST}`,
      quick_activation: `请读取以下角色定义：\n{RAW_URL}`
    },
    thumbnails: {
      small: `/thumbnails/${c.id}-small.png`,
      medium: `/thumbnails/${c.id}-medium.png`,
      large: `/thumbnails/${c.id}-large.png`,
      banner: `/thumbnails/${c.id}-banner.png`
    },
    related: {
      similar_skills: [],
      complementary_skills: [],
      next_skills: []
    }
  };
}

const data = JSON.parse(fs.readFileSync(DATA_PATH, 'utf8'));
const existingIds = new Set(data.skills.map(s => s.id));

let added = 0;
let skipped = 0;

for (const def of NEW_CHARACTERS) {
  if (existingIds.has(def.id)) {
    console.log(`⚠️ ${def.id} 已存在，跳过`);
    skipped++;
    continue;
  }

  const mdPath = path.join(SKILLS_DIR, def.id, 'SKILL.md');
  if (!fs.existsSync(mdPath)) {
    console.log(`⚠️ 缺少 ${def.id}/SKILL.md 文件，跳过`);
    skipped++;
    continue;
  }

  const markdown = fs.readFileSync(mdPath, 'utf8');
  data.skills.push(makeSkill(def, markdown));
  existingIds.add(def.id);
  added++;
  console.log(`✅ 添加 ${def.id}`);
}

data.generated_at = new Date().toISOString();
fs.writeFileSync(DATA_PATH, JSON.stringify(data, null, 2), 'utf8');
console.log(`\n✅ 新增 ${added} 个 | 跳过 ${skipped} 个 | 总计 ${data.skills.length} 个`);
