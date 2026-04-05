import { CATEGORY_CONFIG } from './constants';

export const CATEGORY_ICONS: Record<string, string> = Object.fromEntries(
  Object.entries(CATEGORY_CONFIG).map(([key, config]) => [key, config.icon])
);

export const CATEGORY_NAMES: Record<string, string> = Object.fromEntries(
  Object.entries(CATEGORY_CONFIG).map(([key, config]) => [key, config.name['zh-CN']])
);

export const CATEGORY_GRADIENTS: Record<string, string> = Object.fromEntries(
  Object.entries(CATEGORY_CONFIG).map(([key, config]) => [key, config.gradient])
);

export const CATEGORY_COLORS: Record<string, string> = Object.fromEntries(
  Object.entries(CATEGORY_CONFIG).map(([key, config]) => [key, config.color])
);

export function getCategoryIcon(category: string): string {
  return CATEGORY_ICONS[category] || '🧩';
}

export function getCategoryName(category: string, language: string = 'zh-CN'): string {
  const config = CATEGORY_CONFIG[category as keyof typeof CATEGORY_CONFIG];
  if (config) {
    return config.name[language as 'zh-CN' | 'en-US'] || config.name['zh-CN'];
  }
  return category;
}

export function getCategoryGradient(category: string): string {
  return CATEGORY_GRADIENTS[category] || 'from-gray-500 to-gray-600';
}

export function getCategoryColor(category: string): string {
  return CATEGORY_COLORS[category] || '#6b7280, #9ca3af';
}

export function getCategoryDescription(category: string, language: string = 'zh-CN'): string {
  const config = CATEGORY_CONFIG[category as keyof typeof CATEGORY_CONFIG];
  if (config) {
    return config.description[language as 'zh-CN' | 'en-US'] || config.description['zh-CN'];
  }
  return '';
}

export function getAllCategories(): string[] {
  return Object.keys(CATEGORY_CONFIG);
}

export function isValidCategory(category: string): boolean {
  return category in CATEGORY_CONFIG;
}

export function getCategoryConfig(category: string) {
  return CATEGORY_CONFIG[category as keyof typeof CATEGORY_CONFIG] || null;
}
