import * as fs from 'fs';
import * as path from 'path';
import { createCanvas } from 'canvas';
import type { Skill } from './parse-skill';

const COLORS: Record<string, { primary: string; secondary: string }> = {
  functional: { primary: '#667eea', secondary: '#764ba2' },
  professional: { primary: '#f093fb', secondary: '#f5576c' },
  creative: { primary: '#4facfe', secondary: '#00f2fe' },
  character: { primary: '#fa709a', secondary: '#fee140' },
  fiction: { primary: '#43e97b', secondary: '#38f9d7' }
};

const ICONS: Record<string, string> = {
  functional: '🛠️',
  professional: '💼',
  creative: '🎨',
  character: '🎭',
  fiction: '📖'
};

export async function generateThumbnail(skill: Skill, outputDir: string) {
  const category = skill.categorization.primary_category as keyof typeof COLORS;
  const colors = COLORS[category] || COLORS.functional;
  const icon = ICONS[category] || '🧩';
  
  await generateThumbnailSize(skill, outputDir, 'small', 128, 128, colors, icon);
  await generateThumbnailSize(skill, outputDir, 'medium', 256, 256, colors, icon);
  await generateThumbnailSize(skill, outputDir, 'large', 512, 512, colors, icon);
  await generateThumbnailSize(skill, outputDir, 'banner', 1200, 400, colors, icon);
}

async function generateThumbnailSize(
  skill: Skill,
  outputDir: string,
  size: string,
  width: number,
  height: number,
  colors: { primary: string; secondary: string },
  icon: string
) {
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');
  
  const gradient = ctx.createLinearGradient(0, 0, width, height);
  gradient.addColorStop(0, colors.primary);
  gradient.addColorStop(1, colors.secondary);
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);
  
  ctx.globalAlpha = 0.1;
  for (let i = 0; i < 5; i++) {
    const x = Math.random() * width;
    const y = Math.random() * height;
    const r = Math.random() * 100 + 50;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fillStyle = '#ffffff';
    ctx.fill();
  }
  ctx.globalAlpha = 1;
  
  if (size !== 'banner') {
    ctx.font = `${width * 0.4}px sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = '#ffffff';
    ctx.fillText(icon, width / 2, height / 2);
  }
  
  if (size === 'banner' || size === 'large') {
    const fontSize = size === 'banner' ? 48 : 32;
    ctx.font = `bold ${fontSize}px sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = '#ffffff';
    
    let displayName = skill.name;
    const maxWidth = width * 0.8;
    if (ctx.measureText(displayName).width > maxWidth) {
      while (ctx.measureText(displayName + '...').width > maxWidth && displayName.length > 0) {
        displayName = displayName.slice(0, -1);
      }
      displayName += '...';
    }
    
    ctx.fillText(displayName, width / 2, height / 2);
  }
  
  const outputPath = path.join(outputDir, `${skill.id}-${size}.png`);
  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync(outputPath, buffer);
}
