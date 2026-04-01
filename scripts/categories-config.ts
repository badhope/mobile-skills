export const categories = {
  functional: {
    id: 'functional',
    name: '功能型',
    name_en: 'Functional',
    description: '任务执行、规划工具',
    icon: '🛠️',
    color: '#667eea',
    subcategories: [
      { id: 'productivity', name: '生产力', skills: [] },
      { id: 'coding', name: '编程', skills: [] },
      { id: 'translation', name: '翻译', skills: [] },
      { id: 'sports', name: '体育', skills: [] },
      { id: 'survival', name: '生存', skills: [] }
    ]
  },
  professional: {
    id: 'professional',
    name: '专业型',
    name_en: 'Professional',
    description: '法律、医疗、投资、心理',
    icon: '💼',
    color: '#f093fb',
    subcategories: [
      { id: 'legal', name: '法律', skills: [] },
      { id: 'healthcare', name: '医疗', skills: [] },
      { id: 'finance', name: '金融', skills: [] },
      { id: 'psychology', name: '心理', skills: [] },
      { id: 'education', name: '教育', skills: [] },
      { id: 'design', name: '设计', skills: [] }
    ]
  },
  creative: {
    id: 'creative',
    name: '创意型',
    name_en: 'Creative',
    description: '写作、音乐创作',
    icon: '🎨',
    color: '#4facfe',
    subcategories: [
      { id: 'writing', name: '写作', skills: [] },
      { id: 'music', name: '音乐', skills: [] },
      { id: 'art', name: '艺术', skills: [] },
      { id: 'photography', name: '摄影', skills: [] }
    ]
  },
  character: {
    id: 'character',
    name: '角色型',
    name_en: 'Character',
    description: '角色扮演、动漫角色、沉浸式体验',
    icon: '🎭',
    color: '#fa709a',
    subcategories: [
      { id: 'anime', name: '动漫', skills: [] },
      { id: 'game', name: '游戏', skills: [] },
      { id: 'movie', name: '电影', skills: [] },
      { id: 'original', name: '原创', skills: [] },
      { id: 'historical', name: '历史', skills: [] }
    ]
  },
  fiction: {
    id: 'fiction',
    name: '虚构世界',
    name_en: 'Fiction Worlds',
    description: '沉浸式互动小说世界',
    icon: '📖',
    color: '#43e97b',
    subcategories: [
      { id: 'fantasy', name: '玄幻', skills: [] },
      { id: 'scifi', name: '科幻', skills: [] },
      { id: 'wuxia', name: '武侠', skills: [] },
      { id: 'urban', name: '都市', skills: [] },
      { id: 'mystery', name: '悬疑', skills: [] },
      { id: 'apocalypse', name: '末世', skills: [] }
    ]
  }
};
