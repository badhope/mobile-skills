const fs = require('fs');
const path = require('path');

const DATA_PATH = path.join(__dirname, '../web/src/skills-data.json');

function main() {
  console.log('🔧 修复 categories 和 meta 信息\n');
  
  const data = JSON.parse(fs.readFileSync(DATA_PATH, 'utf-8'));
  
  const categoryCount = {};
  data.skills.forEach(skill => {
    const cat = skill.categorization.primary_category;
    categoryCount[cat] = (categoryCount[cat] || 0) + 1;
  });
  
  console.log('📊 实际分类统计:');
  Object.entries(categoryCount)
    .sort((a, b) => b[1] - a[1])
    .forEach(([cat, count]) => {
      console.log(`  ${cat}: ${count}个`);
    });
  
  const categories = {};
  Object.entries(categoryCount).forEach(([cat, count]) => {
    categories[cat] = { count };
  });
  
  data.categories = categories;
  
  data.meta = {
    total_skills: data.skills.length,
    total_categories: Object.keys(categories).length,
    last_updated: new Date().toISOString(),
    version: data.version,
    generator: 'Mobile Skills v5.1 Fix Categories'
  };
  
  fs.writeFileSync(DATA_PATH, JSON.stringify(data, null, 2), 'utf-8');
  
  console.log('\n✅ 修复完成！');
  console.log(`总技能数: ${data.skills.length}`);
  console.log(`总分类数: ${Object.keys(categories).length}`);
  console.log(`版本: ${data.version}`);
}

main();
