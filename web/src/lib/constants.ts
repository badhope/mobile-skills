export const APP_CONFIG = {
  name: 'Mobile Skills',
  version: '1.0.0',
  description: 'AI Skill 生态系统',
  url: 'https://badhope.github.io/mobile-skills',
  github: 'https://github.com/badhope/mobile-skills',
  author: 'Mobile Skills Team',
} as const;

export const STORAGE_KEYS = {
  PREFERENCES: 'user-preferences',
  FAVORITES: 'skill-favorites',
  THEME: 'theme',
  LANGUAGE: 'language',
  RECENT_SEARCHES: 'recent-searches',
} as const;

export const CACHE_CONFIG = {
  SKILLS_DATA_TTL: 5 * 60 * 1000,
  SEARCH_RESULTS_TTL: 2 * 60 * 1000,
  MAX_RECENT_SEARCHES: 10,
} as const;

export const UI_CONFIG = {
  ITEMS_PER_PAGE_DEFAULT: 20,
  ITEMS_PER_PAGE_OPTIONS: [12, 20, 36, 48],
  DEBOUNCE_DELAY: 300,
  ANIMATION_DURATION: 300,
  TOAST_DURATION: 3000,
} as const;

export const CATEGORY_CONFIG = {
  functional: {
    icon: '🛠️',
    name: { 'zh-CN': '功能型', 'en-US': 'Functional' },
    gradient: 'from-indigo-500 to-purple-600',
    color: '#6366f1, #8b5cf6',
    description: { 'zh-CN': '实用工具与功能型技能', 'en-US': 'Utility and functional skills' }
  },
  professional: {
    icon: '💼',
    name: { 'zh-CN': '专业型', 'en-US': 'Professional' },
    gradient: 'from-pink-400 to-rose-500',
    color: '#ec4899, #f43f5e',
    description: { 'zh-CN': '专业领域专家技能', 'en-US': 'Professional domain expert skills' }
  },
  creative: {
    icon: '🎨',
    name: { 'zh-CN': '创意型', 'en-US': 'Creative' },
    gradient: 'from-cyan-400 to-cyan-500',
    color: '#06b6d4, #0891b2',
    description: { 'zh-CN': '创意与艺术类技能', 'en-US': 'Creative and artistic skills' }
  },
  character: {
    icon: '🎭',
    name: { 'zh-CN': '角色型', 'en-US': 'Character' },
    gradient: 'from-pink-400 to-yellow-300',
    color: '#ec4899, #fbbf24',
    description: { 'zh-CN': '角色扮演类技能', 'en-US': 'Role-playing skills' }
  },
  fiction: {
    icon: '📖',
    name: { 'zh-CN': '虚构世界', 'en-US': 'Fiction' },
    gradient: 'from-green-400 to-teal-400',
    color: '#10b981, #14b8a6',
    description: { 'zh-CN': '虚构世界与故事类技能', 'en-US': 'Fictional world and story skills' }
  }
} as const;

export const SORT_OPTIONS = [
  { value: 'popular', label: { 'zh-CN': '热门优先', 'en-US': 'Most Popular' } },
  { value: 'newest', label: { 'zh-CN': '最新发布', 'en-US': 'Newest' } },
  { value: 'rating', label: { 'zh-CN': '评分最高', 'en-US': 'Highest Rated' } },
  { value: 'name', label: { 'zh-CN': '名称排序', 'en-US': 'Name' } },
] as const;

export const VIEW_OPTIONS = [
  { value: 'grid', label: { 'zh-CN': '网格视图', 'en-US': 'Grid View' }, icon: '▦' },
  { value: 'list', label: { 'zh-CN': '列表视图', 'en-US': 'List View' }, icon: '☰' },
] as const;

export const LANGUAGE_OPTIONS = [
  { value: 'zh-CN', label: '简体中文', flag: '🇨🇳' },
  { value: 'en-US', label: 'English', flag: '🇺🇸' },
] as const;

export const THEME_OPTIONS = [
  { value: 'light', label: { 'zh-CN': '浅色模式', 'en-US': 'Light Mode' }, icon: '☀️' },
  { value: 'dark', label: { 'zh-CN': '深色模式', 'en-US': 'Dark Mode' }, icon: '🌙' },
  { value: 'system', label: { 'zh-CN': '跟随系统', 'en-US': 'System' }, icon: '💻' },
] as const;
