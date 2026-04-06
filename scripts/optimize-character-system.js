const fs = require('fs');
const path = require('path');

const DATA_PATH = path.join(__dirname, '../web/src/skills-data.json');

const CHARACTER_QUALITY_CRITERIA = {
  essential: {
    hasDistinctPersonality: true,
    hasProtagonistQuality: true,
    hasInteractionValue: true,
    hasRichBackground: true
  },
  removable: {
    isBackgroundCharacter: true,
    lacksDistinctFeatures: true,
    hasLowInteractionValue: true,
    isGenericTemplate: true
  }
};

const AI_INSTRUCTION_TEMPLATE = {
  characterEnhancement: `
## AI角色增强指令

### 核心身份
{CHARACTER_NAME}是一个{CHARACTER_TYPE}角色，具有以下核心特征：
{CORE_TRAITS}

### 背景设定
{BACKGROUND_STORY}

### 性格特征
{PERSONALITY_TRAITS}

### 说话风格
{SPEAKING_STYLE}

### 互动边界
- 允许的话题：{ALLOWED_TOPICS}
- 禁止的话题：{FORBIDDEN_TOPICS}
- 行为约束：{BEHAVIOR_CONSTRAINTS}

### AI自主扩展指令
1. **背景补充**: 根据角色核心特征，自主生成符合设定的背景故事细节
2. **对话风格**: 保持角色独特的说话方式和语气
3. **情感表达**: 根据角色性格，适当表达情感反应
4. **知识范围**: 在角色设定范围内回答问题，超出范围时以角色方式婉拒
5. **互动适应**: 根据用户互动方式，调整回应风格但保持角色一致性

### 移动端优化
- 简洁呈现核心信息
- AI动态生成详细内容
- 快速响应，避免冗长描述
`,

  gameHostEnhancement: `
## AI游戏主持人指令

### 游戏类型
{GAME_TYPE}

### 主持人职责
1. **规则说明**: 清晰解释游戏规则和流程
2. **公平裁判**: 确保游戏公平进行
3. **氛围营造**: 创造沉浸式游戏体验
4. **节奏控制**: 控制游戏进度，避免拖沓
5. **争议处理**: 公正处理玩家争议

### 互动边界
- 保持中立立场
- 不偏袒任何玩家
- 严格遵守游戏规则
- 适时提供提示和引导

### AI自主能力
1. **动态叙事**: 根据游戏进程生成生动的场景描述
2. **角色扮演**: 扮演游戏中的NPC角色
3. **情境判断**: 根据玩家行为做出合理判断
4. **氛围调节**: 根据游戏氛围调整语言风格
`,

  prototypeIntegration: `
## 原型角色集成指令

### 原型来源
{PROTOTYPE_SOURCE}

### 设定参考
{CANONICAL_SETTINGS}

### AI参考机制
1. **设定查询**: 在回答前查询相关设定资料
2. **一致性检查**: 确保回答符合原型设定
3. **细节补充**: 根据原型设定补充细节
4. **风格还原**: 还原原型角色的说话风格和行为模式

### 自动化流程
- 启动时加载原型设定
- 实时查询相关资料
- 自动验证设定一致性
- 动态更新知识库
`
};

function analyzeCharacterQuality(skill) {
  const score = {
    total: 0,
    details: {}
  };

  if (skill.metadata.description && skill.metadata.description.length > 20) {
    score.total += 20;
    score.details.hasDescription = true;
  }

  if (skill.categorization.tags && skill.categorization.tags.length >= 3) {
    score.total += 15;
    score.details.hasTags = true;
  }

  if (skill.content.content_markdown && skill.content.content_markdown.length > 200) {
    score.total += 25;
    score.details.hasRichContent = true;
  }

  if (skill.stats.use_count > 1000) {
    score.total += 20;
    score.details.hasHighUsage = true;
  }

  if (skill.stats.rating > 4.0) {
    score.total += 20;
    score.details.hasHighRating = true;
  }

  return score;
}

function identifyRemovableCharacters(skills) {
  const removable = [];
  const keepable = [];

  skills.forEach(skill => {
    if (skill.categorization.primary_category === 'character') {
      const quality = analyzeCharacterQuality(skill);
      
      if (quality.total < 40) {
        removable.push({
          id: skill.id,
          name: skill.name,
          score: quality.total,
          reason: 'Low quality score'
        });
      } else {
        keepable.push({
          id: skill.id,
          name: skill.name,
          score: quality.total
        });
      }
    }
  });

  return { removable, keepable };
}

function enhanceCharacterDefinition(skill, template) {
  const enhanced = { ...skill };

  const aiInstructions = template
    .replace('{CHARACTER_NAME}', skill.name)
    .replace('{CHARACTER_TYPE}', skill.categorization.subcategory || 'character')
    .replace('{CORE_TRAITS}', skill.categorization.tags.join(', '))
    .replace('{BACKGROUND_STORY}', skill.metadata.description)
    .replace('{PERSONALITY_TRAITS}', '待AI根据角色设定自主生成')
    .replace('{SPEAKING_STYLE}', '待AI根据角色特征自主调整')
    .replace('{ALLOWED_TOPICS}', '角色相关话题、背景故事、性格特征')
    .replace('{FORBIDDEN_TOPICS}', '超出角色设定范围的话题')
    .replace('{BEHAVIOR_CONSTRAINTS}', '保持角色一致性，不做出不符合设定的行为');

  if (!enhanced.metadata.long_description) {
    enhanced.metadata.long_description = aiInstructions;
  }

  enhanced.content.content_markdown += '\n\n' + aiInstructions;

  return enhanced;
}

function optimizeGameCharacters(skills) {
  return skills.map(skill => {
    if (skill.categorization.primary_category === 'game' && skill.name.includes('狼人杀')) {
      const enhanced = { ...skill };
      enhanced.metadata.description = 'AI游戏主持人 - 狼人杀游戏专用';
      enhanced.content.content_markdown = AI_INSTRUCTION_TEMPLATE.gameHostEnhancement
        .replace('{GAME_TYPE}', '狼人杀');
      return enhanced;
    }
    return skill;
  });
}

function main() {
  console.log('🎭 角色系统优化开始\n');
  console.log('=' .repeat(60));

  const data = JSON.parse(fs.readFileSync(DATA_PATH, 'utf-8'));
  const skills = data.skills;

  console.log(`📊 当前角色统计:`);
  console.log(`  总技能数: ${skills.length}`);
  
  const characterSkills = skills.filter(s => s.categorization.primary_category === 'character');
  const gameSkills = skills.filter(s => s.categorization.primary_category === 'game');
  
  console.log(`  角色型: ${characterSkills.length}`);
  console.log(`  游戏型: ${gameSkills.length}`);
  console.log('');

  console.log('🔍 步骤1: 角色质量分析');
  console.log('-'.repeat(60));
  
  const { removable, keepable } = identifyRemovableCharacters(skills);
  
  console.log(`\n✅ 保留角色: ${keepable.length}个`);
  console.log(`❌ 建议移除: ${removable.length}个`);
  
  if (removable.length > 0) {
    console.log('\n移除列表（前10个）:');
    removable.slice(0, 10).forEach((char, i) => {
      console.log(`  ${i + 1}. ${char.name} (分数: ${char.score})`);
    });
  }

  console.log('\n📝 步骤2: 角色定义增强');
  console.log('-'.repeat(60));

  const enhancedSkills = [];
  let enhancedCount = 0;

  skills.forEach(skill => {
    if (skill.categorization.primary_category === 'character') {
      const quality = analyzeCharacterQuality(skill);
      if (quality.total >= 40) {
        const enhanced = enhanceCharacterDefinition(skill, AI_INSTRUCTION_TEMPLATE.characterEnhancement);
        enhancedSkills.push(enhanced);
        enhancedCount++;
      } else {
        enhancedSkills.push(skill);
      }
    } else {
      enhancedSkills.push(skill);
    }
  });

  console.log(`✅ 已增强角色定义: ${enhancedCount}个`);

  console.log('\n🎮 步骤3: 游戏角色优化');
  console.log('-'.repeat(60));

  const optimizedGameSkills = optimizeGameCharacters(enhancedSkills);
  console.log(`✅ 已优化游戏角色: ${gameSkills.length}个`);

  console.log('\n💾 步骤4: 保存优化结果');
  console.log('-'.repeat(60));

  data.skills = optimizedGameSkills;
  data.meta.last_updated = new Date().toISOString();
  data.meta.optimized = true;
  data.meta.optimization_version = '1.0.0';

  const backupPath = DATA_PATH.replace('.json', '.backup.json');
  fs.writeFileSync(backupPath, JSON.stringify(data, null, 2), 'utf-8');
  console.log(`✅ 备份已保存: ${backupPath}`);

  console.log('\n📊 优化统计');
  console.log('='.repeat(60));
  console.log(`总技能数: ${data.skills.length}`);
  console.log(`角色型: ${data.skills.filter(s => s.categorization.primary_category === 'character').length}`);
  console.log(`游戏型: ${data.skills.filter(s => s.categorization.primary_category === 'game').length}`);
  console.log(`增强角色: ${enhancedCount}个`);
  console.log(`建议移除: ${removable.length}个`);

  console.log('\n⚠️  注意: 优化结果已保存到备份文件，请检查后再替换原文件');
  console.log('\n✨ 角色系统优化完成！');
}

main();
