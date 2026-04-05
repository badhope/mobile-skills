const fs = require('fs');
const path = require('path');

const DATA_PATH = path.join(__dirname, '../web/src/skills-data.json');

function main() {
  console.log('🔧 第1轮优化：修复子分类 + 增强内容\n');
  
  const data = JSON.parse(fs.readFileSync(DATA_PATH, 'utf-8'));
  
  let fixedSubcategory = 0;
  let enhancedContent = 0;
  
  data.skills.forEach(skill => {
    const cat = skill.categorization.primary_category;
    
    // 1. 修复缺失的子分类
    if (!skill.categorization.subcategory || skill.categorization.subcategory === '') {
      if (cat === 'character') {
        // 根据标签推断子分类
        const tags = skill.categorization.tags.join(' ');
        
        if (tags.includes('动漫') || tags.includes('热血') || tags.includes('少年') || tags.includes('海贼') || tags.includes('火影') || tags.includes('鬼灭') || tags.includes('咒术') || tags.includes('英雄')) {
          skill.categorization.subcategory = 'anime-shonen';
        } else if (tags.includes('少女') || tags.includes('恋爱') || tags.includes('辉夜') || tags.includes('月') || tags.includes('偶像') || tags.includes('可爱') || tags.includes('萌') || tags.includes('治愈')) {
          skill.categorization.subcategory = 'anime-shojo';
        } else if (tags.includes('巨人') || tags.includes('死亡笔记') || tags.includes('电锯人') || tags.includes('间谍') || tags.includes('心理') || tags.includes('黑暗')) {
          skill.categorization.subcategory = 'anime-seinen';
        } else if (tags.includes('游戏') || tags.includes('原神') || tags.includes('明日方舟') || tags.includes('Fate') || tags.includes('东方') || tags.includes('RPG')) {
          skill.categorization.subcategory = 'game-rpg';
        } else if (tags.includes('历史') || tags.includes('科学家') || tags.includes('学者') || tags.includes('名人')) {
          skill.categorization.subcategory = 'historical';
        } else if (tags.includes('治愈') || tags.includes('温暖') || tags.includes('温柔') || tags.includes('陪伴') || tags.includes('宠物') || tags.includes('猫')) {
          skill.categorization.subcategory = 'healing-warm';
        } else if (tags.includes('导师') || tags.includes('老师') || tags.includes('指引') || tags.includes('智慧')) {
          skill.categorization.subcategory = 'mentor-guide';
        } else if (tags.includes('奇幻') || tags.includes('魔法') || tags.includes('精灵') || tags.includes('龙') || tags.includes('英雄')) {
          skill.categorization.subcategory = 'fantasy-hero';
        } else if (tags.includes('科幻') || tags.includes('赛博') || tags.includes('未来') || tags.includes('机器人') || tags.includes('黑客')) {
          skill.categorization.subcategory = 'scifi-cyber';
        } else if (tags.includes('明星') || tags.includes('偶像') || tags.includes('歌手') || tags.includes('演员')) {
          skill.categorization.subcategory = 'celebrity';
        } else {
          skill.categorization.subcategory = 'original-oc';
        }
      } else if (cat === 'functional') {
        const tags = skill.categorization.tags.join(' ');
        if (tags.includes('数据') || tags.includes('分析') || tags.includes('统计') || tags.includes('可视化')) {
          skill.categorization.subcategory = 'data-analysis';
        } else if (tags.includes('编程') || tags.includes('代码') || tags.includes('开发') || tags.includes('API') || tags.includes('架构')) {
          skill.categorization.subcategory = 'programming';
        } else if (tags.includes('效率') || tags.includes('工具') || tags.includes('自动化') || tags.includes('工作流')) {
          skill.categorization.subcategory = 'productivity';
        } else if (tags.includes('翻译') || tags.includes('语言') || tags.includes('多语言')) {
          skill.categorization.subcategory = 'translation';
        } else {
          skill.categorization.subcategory = 'automation';
        }
      } else if (cat === 'professional') {
        const tags = skill.categorization.tags.join(' ');
        if (tags.includes('法律') || tags.includes('合同') || tags.includes('知识产权')) {
          skill.categorization.subcategory = 'legal';
        } else if (tags.includes('医疗') || tags.includes('健康') || tags.includes('医生')) {
          skill.categorization.subcategory = 'medical';
        } else if (tags.includes('金融') || tags.includes('投资') || tags.includes('理财')) {
          skill.categorization.subcategory = 'finance';
        } else if (tags.includes('心理') || tags.includes('咨询') || tags.includes('情绪')) {
          skill.categorization.subcategory = 'psychology';
        } else {
          skill.categorization.subcategory = 'consulting';
        }
      } else if (cat === 'creative') {
        const tags = skill.categorization.tags.join(' ');
        if (tags.includes('设计') || tags.includes('UI') || tags.includes('UX') || tags.includes('视觉')) {
          skill.categorization.subcategory = 'design';
        } else if (tags.includes('写作') || tags.includes('文案') || tags.includes('小说') || tags.includes('剧本') || tags.includes('内容')) {
          skill.categorization.subcategory = 'writing';
        } else if (tags.includes('音乐') || tags.includes('作曲') || tags.includes('声音')) {
          skill.categorization.subcategory = 'music';
        } else if (tags.includes('视频') || tags.includes('影视') || tags.includes('剪辑') || tags.includes('动画')) {
          skill.categorization.subcategory = 'video';
        } else {
          skill.categorization.subcategory = 'photography';
        }
      } else if (cat === 'fiction') {
        const tags = skill.categorization.tags.join(' ');
        if (tags.includes('玄幻') || tags.includes('东方') || tags.includes('修真') || tags.includes('仙侠')) {
          skill.categorization.subcategory = 'eastern-fantasy';
        } else if (tags.includes('奇幻') || tags.includes('西方') || tags.includes('魔法') || tags.includes('王国')) {
          skill.categorization.subcategory = 'western-fantasy';
        } else if (tags.includes('科幻') || tags.includes('银河') || tags.includes('宇宙') || tags.includes('未来')) {
          skill.categorization.subcategory = 'scifi';
        } else if (tags.includes('悬疑') || tags.includes('侦探') || tags.includes('推理') || tags.includes('神秘')) {
          skill.categorization.subcategory = 'mystery';
        } else if (tags.includes('都市') || tags.includes('异能') || tags.includes('现代')) {
          skill.categorization.subcategory = 'urban';
        } else if (tags.includes('末世') || tags.includes('废土') || tags.includes('生存')) {
          skill.categorization.subcategory = 'apocalypse';
        } else if (tags.includes('武侠') || tags.includes('江湖')) {
          skill.categorization.subcategory = 'wuxia';
        } else if (tags.includes('仙侠') || tags.includes('修真') || tags.includes('仙界')) {
          skill.categorization.subcategory = 'xianxia';
        } else if (tags.includes('魔法') || tags.includes('学院') || tags.includes('魔法世界')) {
          skill.categorization.subcategory = 'magic';
        } else if (tags.includes('灵异') || tags.includes('恐怖') || tags.includes('鬼魂')) {
          skill.categorization.subcategory = 'horror';
        }
      }
      
      fixedSubcategory++;
    }

    // 2. 增强内容质量（针对短描述）
    if (skill.metadata.description && skill.metadata.description.length < 20) {
      const name = skill.name.split(' - ')[0] || skill.name;
      const shortDesc = skill.metadata.short_description || skill.metadata.description;
      
      skill.metadata.description = `${name}是一位${shortDesc}。拥有独特的性格和说话方式，能够带来沉浸式的角色体验。适合用于日常对话、故事创作、情感交流等多种场景。`;
      enhancedContent++;
    }

    // 3. 增强 content_markdown
    if (skill.content.content_markdown && skill.content.content_markdown.length < 400) {
      const name = skill.name.split(' - ')[0] || skill.name;
      const desc = skill.metadata.description || '';
      const tags = skill.categorization.tags.join('、');
      const bestFor = skill.capabilities.best_for.map(f => `- ${f}`).join('\n');
      const catName = skill.categorization.primary_category;
      const subcat = skill.categorization.subcategory || 'default';

      skill.content.content_markdown = `# ${name}

## 角色简介

${desc}

## 核心特征

- **分类**: ${catName} / ${subcat}
- **标签**: ${tags}
- **风格**: 独特个性与说话方式

## 适用场景

${bestFor}

## 激活方式

\`\`\`
请读取技能定义：${skill.content.raw_url}
\`\`\`

## 使用建议

1. **初次对话**: 可以直接用角色的口吻开始对话
2. **场景设定**: 可以设定具体的故事背景或场景
3. **互动方式**: 提问、闲聊、寻求建议等都可以
4. **深度体验**: 尝试不同的话题来感受角色的多面性

---

*由 Mobile Skills 团队提供 | 版本 v2.3.0*
`;
      enhancedContent++;
    }
  });

  // 更新 categories 统计
  const categories = {};
  data.skills.forEach(skill => {
    const cat = skill.categorization.primary_category;
    if (!categories[cat]) {
      categories[cat] = { count: 0, skills: [] };
    }
    categories[cat].count++;
    categories[cat].skills.push(skill.id);
  });
  data.categories = categories;

  data.generated_at = new Date().toISOString();
  
  fs.writeFileSync(DATA_PATH, JSON.stringify(data, null, 2), 'utf-8');

  console.log(`✅ 第1轮优化完成！`);
  console.log(`- 修复子分类: ${fixedSubcategory} 个`);
  console.log(`- 增强内容: ${enhancedContent} 个`);
  console.log(`- 总技能数: ${data.skills.length}`);
}

main();
