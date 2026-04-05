const fs = require('fs');
const path = require('path');

const DATA_PATH = path.join(__dirname, '../web/src/skills-data.json');

function main() {
  console.log('🔧 修复 categories 字段...');
  
  const data = JSON.parse(fs.readFileSync(DATA_PATH, 'utf-8'));
  
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
  
  console.log('\n=== 修复后的分类统计 ===');
  Object.entries(categories).forEach(([cat, info]) => {
    console.log(`[${cat}] ${info.count} 个技能`);
  });
  
  console.log(`\n✅ 修复完成！总技能数: ${data.skills.length}`);
}

main();
