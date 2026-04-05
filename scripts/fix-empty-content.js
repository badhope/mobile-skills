const fs = require('fs');
const path = require('path');

const DATA_PATH = path.join(__dirname, '../web/src/skills-data.json');

function generateContentMarkdown(skill) {
  const tags = skill.categorization.tags.join('、');
  const bestFor = skill.capabilities.best_for.map(f => `- ${f}`).join('\n');
  
  return `# ${skill.name}

## 简介

${skill.metadata.description}

## 标签

${tags}

## 适用场景

${bestFor}

## 激活方式

\`\`\`
请读取技能定义：${skill.content.raw_url}
\`\`\`

---

*由 Mobile Skills 团队提供*
`;
}

function main() {
  console.log('🔧 为空内容技能生成基础内容...');
  
  const data = JSON.parse(fs.readFileSync(DATA_PATH, 'utf-8'));
  
  let fixed = 0;
  data.skills.forEach(skill => {
    if (!skill.content.content_markdown || skill.content.content_markdown.trim() === '') {
      skill.content.content_markdown = generateContentMarkdown(skill);
      fixed++;
    }
  });
  
  data.generated_at = new Date().toISOString();
  
  fs.writeFileSync(DATA_PATH, JSON.stringify(data, null, 2), 'utf-8');
  
  console.log(`✅ 完成！修复了 ${fixed} 个技能的内容`);
  console.log(`总技能数: ${data.skills.length}`);
}

main();
