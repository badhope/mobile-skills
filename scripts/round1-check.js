const fs = require('fs');
const path = require('path');

const DATA_PATH = path.join(__dirname, '../web/src/skills-data.json');

function main() {
  console.log('=== 第1轮全面检查 ===\n');
  
  const data = JSON.parse(fs.readFileSync(DATA_PATH, 'utf-8'));
  
  let stats = {
    total: data.skills.length,
    emptyName: 0,
    emptyDesc: 0,
    emptyTags: 0,
    emptyContent: 0,
    missingSubcategory: 0,
    invalidCategory: 0,
    duplicateId: []
  };

  const validCategories = ['functional', 'professional', 'creative', 'character', 'fiction'];
  const idSet = new Set();

  data.skills.forEach((s) => {
    if (idSet.has(s.id)) {
      stats.duplicateId.push(s.id);
    }
    idSet.add(s.id);
    
    if (!s.name || s.name.trim() === '') stats.emptyName++;
    if (!s.metadata.description || s.metadata.description.trim() === '') stats.emptyDesc++;
    if (!s.categorization.tags || s.categorization.tags.length === 0) stats.emptyTags++;
    if (!s.content.content_markdown || s.content.content_markdown.trim() === '') stats.emptyContent++;
    if (!s.categorization.subcategory || s.categorization.subcategory === '') stats.missingSubcategory++;
    if (!validCategories.includes(s.categorization.primary_category)) stats.invalidCategory++;
  });

  console.log('【数据统计】');
  console.log('- 总技能数:', stats.total);
  console.log('- 空名称:', stats.emptyName);
  console.log('- 空描述:', stats.emptyDesc);
  console.log('- 空标签:', stats.emptyTags);
  console.log('- 空内容:', stats.emptyContent);
  console.log('- 缺少子分类:', stats.missingSubcategory);
  console.log('- 无效分类:', stats.invalidCategory);
  console.log('- 重复ID:', stats.duplicateId.length > 0 ? stats.duplicateId.join(', ') : '无');

  console.log('\n【分类分布】');
  const catDist = {};
  data.skills.forEach(s => {
    const c = s.categorization.primary_category;
    catDist[c] = (catDist[c] || 0) + 1;
  });
  Object.entries(catDist).sort((a,b) => b[1]-a[1]).forEach(([c, n]) => {
    console.log(`- ${c}: ${n}`);
  });

  console.log('\n【最短内容TOP10】');
  const contentLengths = data.skills.map(s => ({
    id: s.id,
    name: s.name.substring(0, 30),
    descLen: (s.metadata.description||'').length,
    contentLen: (s.content.content_markdown||'').length,
    tagsLen: (s.categorization.tags||[]).length
  })).sort((a,b) => a.contentLen - b.contentLen);

  contentLengths.slice(0, 10).forEach(c => {
    console.log(`- ${c.id}: 描述${c.descLen}字, 内容${c.contentLen}字, 标签${c.tagsLen}个`);
  });
}

main();
