const fs = require('fs');
const path = require('path');

const DATA_PATH = path.join(__dirname, '../web/src/skills-data.json');

function main() {
  console.log('🔧 第3轮优化：内容增强 + 性能优化\n');
  
  const data = JSON.parse(fs.readFileSync(DATA_PATH, 'utf-8'));
  
  let enhanced = 0;
  let optimized = 0;

  // 1. 增强角色描述（添加更多细节）
  const characterEnhancements = {
    'luffy': { desc: '草帽海贼团船长，拥有橡胶果实能力，梦想是成为海贼王。性格开朗乐观，重视友情，永不放弃的精神感染着每一个人。' },
    'naruto-uzumaki': { desc: '木叶忍者村的吊车尾忍者，体内封印着九尾妖狐。通过努力和友情成长为火影，代表着"说到做到"的忍道精神。' },
    'sailor-moon': { desc: '月野兔变身的战士，爱与正义的化身。虽然平时迷糊爱哭，但在关键时刻会展现出强大的勇气和保护他人的决心。' },
    'goku-dragon': { desc: '赛亚人战士，纯真善良却拥有强大的战斗力。永远追求更强的对手，对战斗充满热情，同时珍视家人和朋友。' },
    'gojo-satoru': { desc: '咒术高专最强咒术师，拥有六眼和无下限术式。性格自信张扬，对学生关爱有加，是新时代咒术师的代表人物。' },
    'kaguya': { desc: '秀知院学园学生会副会长，冰之室家族的大小姐。外表高冷完美，内心却充满少女心思，与御行有着复杂的恋爱关系。' },
    'rem': { desc: '罗兹瓦尔宅邸的女仆，鬼族后裔。忠诚勇敢，为了主人可以付出一切，包括生命。拥有强大的战斗能力和治愈魔法。' },
    'link-hyrule': { desc: '海拉鲁王国的勇者，沉默寡言但行动力极强。背负着拯救公主和王国使命的骑士，在各种冒险中不断成长。' },
    'zhongli': { desc: '璃月的岩神摩拉克斯，活了六千多年的神明。喜欢听故事、喝茶，看似闲散实则深不可测，是璃月最可靠的守护者。' },
    'armin': { desc: '调查兵团的智囊，温柔聪明的战略家。虽然身体弱小但头脑敏锐，总是能在关键时刻想出制胜的策略。梦想是去看看外面的海洋世界。' }
  };

  data.skills.forEach(skill => {
    // 应用增强描述
    if (characterEnhancements[skill.id]) {
      if (skill.metadata.description.length < characterEnhancements[skill.id].length) {
        skill.metadata.description = characterEnhancements[skill.id].desc;
        enhanced++;
      }
    }

    // 2. 确保 best_for 有足够的内容
    if (skill.capabilities.best_for.length < 4) {
      const cat = skill.categorization.primary_category;
      const subcat = skill.categorization.subcategory || '';
      
      const additionalBestFor = [];
      
      if (cat === 'character') {
        additionalBestFor.push(
          '日常对话',
          '情感交流',
          '故事创作',
          '角色扮演体验'
        );
      } else if (cat === 'functional') {
        additionalBestFor.push(
          '效率提升',
          '任务自动化',
          '问题解决'
        );
      } else if (cat === 'professional') {
        additionalBestFor.push(
          '专业咨询',
          '知识获取',
          '决策支持'
        );
      } else if (cat === 'creative') {
        additionalBestFor.push(
          '创意激发',
          '艺术创作',
          '灵感获取'
        );
      } else if (cat === 'fiction') {
        additionalBestFor.push(
          '世界观探索',
          '故事沉浸',
          '幻想体验'
        );
      }

      // 合并并去重
      const existing = new Set(skill.capabilities.best_for);
      additionalBestFor.forEach(item => {
        if (!existing.has(item) && skill.capabilities.best_for.length < 6) {
          skill.capabilities.best_for.push(item);
          optimized++;
        }
      });
    }

    // 3. 确保标签丰富
    if (skill.categorization.tags.length < 5) {
      const cat = skill.categorization.primary_category;
      const extraTags = {
        'character': ['AI', '对话', '互动', '陪伴'],
        'functional': ['工具', '实用', '助手'],
        'professional': ['专家', '咨询', '指导'],
        'creative': ['创意', '艺术', '设计'],
        'fiction': ['故事', '冒险', '幻想']
      };

      const existingTags = new Set(skill.categorization.tags);
      (extraTags[cat] || []).forEach(tag => {
        if (!existingTags.has(tag)) {
          skill.categorization.tags.push(tag);
          optimized++;
        }
      });
    }

    // 4. 优化 content_markdown 结构
    if (skill.content.content_markdown) {
      const name = (skill.name.split(' - ')[0] || skill.name).trim();
      
      // 检查是否有完整的内容结构
      if (!skill.content.content_markdown.includes('## 使用建议')) {
        // 添加使用建议部分
        skill.content.content_markdown += `\n\n## 使用建议\n\n1. **初次对话**: 用角色的口吻开始交流\n2. **场景设定**: 可以设定具体的故事背景\n3. **深度体验**: 尝试不同话题感受角色多面性\n\n---\n\n*由 Mobile Skills 团队提供 | v2.3.0*`;
        enhanced++;
      }

      // 确保有激活方式
      if (!skill.content.content_markdown.includes('激活方式') && !skill.content.content_markdown.includes('激活指令')) {
        skill.content.content_markdown = skill.content.content_markdown.replace(
          /---\s*$/,
          `## 激活方式\n\n\`\`\`\n请读取技能定义：${skill.content.raw_url}\n\`\`\`\n\n---`
        );
        enhanced++;
      }
    }
  });

  // 5. 更新版本号
  data.version = "2.3.0";
  data.generated_at = new Date().toISOString();

  fs.writeFileSync(DATA_PATH, JSON.stringify(data, null, 2), 'utf-8');

  console.log(`✅ 第3轮优化完成！`);
  console.log(`- 增强描述: ${enhanced} 个`);
  console.log(`- 优化内容: ${optimized} 处`);
  console.log(`- 总技能数: ${data.skills.length}`);
}

main();
