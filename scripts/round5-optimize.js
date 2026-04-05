const fs = require('fs');
const path = require('path');

const DATA_PATH = path.join(__dirname, '../web/src/skills-data.json');

function main() {
  console.log('🔧 第5轮优化：最终验证 + 数据清洗\n');
  
  const data = JSON.parse(fs.readFileSync(DATA_PATH, 'utf-8'));
  
  let cleaned = 0;
  let validated = 0;

  // 1. 最终数据验证
  console.log('【最终验证】\n');
  
  const validationResults = {
    total: data.skills.length,
    validId: 0,
    validName: 0,
    validDesc: 0,
    validTags: 0,
    validContent: 0,
    validCategory: 0,
    validSubcategory: 0,
    validMetadata: 0,
    issues: []
  };

  const validCategories = ['functional', 'professional', 'creative', 'character', 'fiction'];
  const idSet = new Set();

  data.skills.forEach((skill, index) => {
    let skillValid = true;
    
    // 验证ID
    if (skill.id && typeof skill.id === 'string' && !idSet.has(skill.id)) {
      validationResults.validId++;
      idSet.add(skill.id);
    } else {
      validationResults.issues.push(`技能${index}: ID无效或重复`);
      skillValid = false;
    }
    
    // 验证名称
    if (skill.name && typeof skill.name === 'string' && skill.name.trim().length > 0) {
      validationResults.validName++;
    } else {
      validationResults.issues.push(`${skill.id || index}: 名称无效`);
      skillValid = false;
    }
    
    // 验证描述
    if (skill.metadata && skill.metadata.description && skill.metadata.description.length >= 10) {
      validationResults.validDesc++;
    } else {
      validationResults.issues.push(`${skill.id}: 描述过短`);
      // 自动修复
      if (skill.metadata && skill.name) {
        skill.metadata.description = `${skill.name} - 一个独特的AI技能，提供专业的服务和体验。`;
        cleaned++;
      }
    }
    
    // 验证标签
    if (skill.categorization && Array.isArray(skill.categorization.tags) && skill.categorization.tags.length > 0) {
      validationResults.validTags++;
    } else {
      validationResults.issues.push(`${skill.id}: 标签为空`);
      if (!skill.categorization) skill.categorization = {};
      skill.categorization.tags = ['AI', 'Skill'];
      cleaned++;
    }
    
    // 验证内容
    if (skill.content && skill.content.content_markdown && skill.content.content_markdown.length > 100) {
      validationResults.validContent++;
    } else {
      validationResults.issues.push(`${skill.id}: 内容不完整`);
    }
    
    // 验证分类
    if (skill.categorization && validCategories.includes(skill.categorization.primary_category)) {
      validationResults.validCategory++;
    } else {
      validationResults.issues.push(`${skill.id}: 分类无效`);
      if (!skill.categorization) skill.categorization = {};
      skill.categorization.primary_category = 'character';
      cleaned++;
    }
    
    // 验证子分类
    if (skill.categorization && skill.categorization.subcategory && skill.categorization.subcategory !== '') {
      validationResults.validSubcategory++;
    } else {
      // 已经在第1轮修复过，这里只是统计
    }
    
    // 验证metadata完整性
    if (skill.metadata && 
        skill.metadata.author && 
        skill.metadata.created_at && 
        skill.metadata.updated_at &&
        skill.metadata.keywords &&
        skill.metadata.keywords.length > 0) {
      validationResults.validMetadata++;
    }

    if (skillValid) validated++;

    // 清洗文本内容
    if (typeof skill.name === 'string') {
      skill.name = skill.name.replace(/\s+/g, ' ').trim();
    }
    if (skill.metadata && typeof skill.metadata.description === 'string') {
      skill.metadata.description = skill.metadata.description
        .replace(/\s+/g, ' ')
        .replace(/[\x00-\x08\x0B\x0C\x0E-\x1F]/g, '')
        .trim();
    }
  });

  // 2. 输出验证结果
  console.log('=== 验证统计 ===');
  console.log(`总技能数: ${validationResults.total}`);
  console.log(`有效ID: ${validationResults.validId}/${validationResults.total}`);
  console.log(`有效名称: ${validationResults.validName}/${validationResults.total}`);
  console.log(`有效描述: ${validationResults.validDesc}/${validationResults.total}`);
  console.log(`有效标签: ${validationResults.validTags}/${validationResults.total}`);
  console.log(`有效内容: ${validationResults.validContent}/${validationResults.total}`);
  console.log(`有效分类: ${validationResults.validCategory}/${validationResults.total}`);
  console.log(`有效子分类: ${validationResults.validSubcategory}/${validationResults.total}`);
  console.log(`完整元数据: ${validationResults.validMetadata}/${validationResults.total}`);
  
  if (validationResults.issues.length > 0) {
    console.log(`\n⚠️ 发现 ${validationResults.issues.length} 个问题:`);
    validationResults.issues.slice(0, 10).forEach(i => console.log(`  - ${i}`));
    if (validationResults.issues.length > 10) {
      console.log(`  ... 还有 ${validationResults.issues.length - 10} 个问题`);
    }
  } else {
    console.log('\n✅ 所有验证通过！');
  }

  // 3. 更新统计信息
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

  // 4. 确保meta存在且正确
  data.meta = {
    ...data.meta,
    total_skills: data.skills.length,
    total_categories: Object.keys(categories).length,
    last_updated: new Date().toISOString(),
    version: '2.3.0',
    validation_passed: validationResults.issues.length === 0,
    optimized_rounds: 5
  };

  data.generated_at = new Date().toISOString();
  
  fs.writeFileSync(DATA_PATH, JSON.stringify(data, null, 2), 'utf-8');

  console.log('\n' + '='.repeat(50));
  console.log(`✅ 第5轮优化完成！`);
  console.log('- 清洗修复:', cleaned, '处');
  console.log('- 验证通过:', validated, '/', validationResults.total);
  console.log('- 总技能数:', data.skills.length);
  console.log('=' .repeat(50));

  // 5. 输出最终统计
  console.log('\n【最终分类分布】');
  Object.entries(data.categories).sort((a,b) => b[1].count - a[1].count).forEach(([cat, info]) => {
    console.log(`  ${cat}: ${info.count} 个技能`);
  });
}

main();
