const fs = require('fs');
const path = require('path');

const DATA_PATH = path.join(__dirname, '../web/src/skills-data.json');

function main() {
  console.log('=== 当前技能库状态 ===\n');
  
  const data = JSON.parse(fs.readFileSync(DATA_PATH, 'utf-8'));
  
  console.log(`总技能数: ${data.skills.length}`);
  console.log(`版本: ${data.version || 'N/A'}`);
  console.log(`生成时间: ${data.generated_at || 'N/A'}\n`);
  
  const categories = {};
  data.skills.forEach(s => {
    const cat = s.categorization.primary_category;
    if (!categories[cat]) {
      categories[cat] = { count: 0, subcategories: {} };
    }
    categories[cat].count++;
    
    const subcat = s.categorization.subcategory || 'unknown';
    if (!categories[cat].subcategories[subcat]) {
      categories[cat].subcategories[subcat] = 0;
    }
    categories[cat].subcategories[subcat]++;
  });
  
  console.log('【分类统计】');
  Object.entries(categories)
    .sort((a, b) => b[1].count - a[1].count)
    .forEach(([cat, info]) => {
      console.log(`\n${cat} (${info.count}个技能):`);
      Object.entries(info.subcategories)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5)
        .forEach(([sub, count]) => {
          console.log(`  - ${sub}: ${count}`);
        });
      if (Object.keys(info.subcategories).length > 5) {
        console.log(`  ... 还有 ${Object.keys(info.subcategories).length - 5} 个子分类`);
      }
    });
}

main();
