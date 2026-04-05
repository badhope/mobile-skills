export const CATEGORY_ICONS: Record<string, string> = {
  functional: '🛠️',
  professional: '💼',
  creative: '🎨',
  character: '🎭',
  fiction: '📖'
};

export const CATEGORY_NAMES: Record<string, string> = {
  functional: '功能型',
  professional: '专业型',
  creative: '创意型',
  character: '角色型',
  fiction: '虚构世界'
};

export const CATEGORY_GRADIENTS: Record<string, string> = {
  functional: 'from-indigo-500 to-purple-600',
  professional: 'from-pink-400 to-rose-500',
  creative: 'from-cyan-400 to-cyan-500',
  character: 'from-pink-400 to-yellow-300',
  fiction: 'from-green-400 to-teal-400'
};

export const CATEGORY_COLORS: Record<string, string> = {
  functional: '#6366f1, #8b5cf6',
  professional: '#ec4899, #f43f5e',
  creative: '#06b6d4, #0891b2',
  character: '#ec4899, #fbbf24',
  fiction: '#10b981, #14b8a6'
};

export function getCategoryIcon(category: string): string {
  return CATEGORY_ICONS[category] || '🧩';
}

export function getCategoryName(category: string): string {
  return CATEGORY_NAMES[category] || category;
}

export function getCategoryGradient(category: string): string {
  return CATEGORY_GRADIENTS[category] || 'from-gray-500 to-gray-600';
}

export function getCategoryColor(category: string): string {
  return CATEGORY_COLORS[category] || '#6b7280, #9ca3af';
}
