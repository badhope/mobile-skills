const translations = {
  zh: {
    nav: {
      title: 'AI Agent',
      browse: '浏览智能体'
    },
    hero: {
      title: '探索',
      titleHighlight: 'AI Agent 生态系统',
      subtitle: '通过 GitHub Raw URL 即时激活专业智能体，无门槛跨平台使用',
      agents: '智能体',
      categories: '分类',
      browseBtn: '浏览全部智能体',
      stats: {
        agents: '智能体',
        categories: '分类'
      }
    },
    search: {
      placeholder: '搜索智能体名称、描述或标签...'
    },
    categories: {
      all: '全部'
    },
    card: {
      bestFor: '擅长领域'
    },
    modal: {
      activationCode: '激活码',
      copyCode: '复制',
      copied: '已复制',
      close: '关闭',
      activate: '激活智能体',
      bestFor: '擅长领域'
    },
    empty: {
      title: '未找到匹配的智能体',
      desc: '尝试调整搜索条件或浏览其他分类'
    },
    toast: {
      copySuccess: '复制成功！'
    },
    footer: {
      copyright: '© 2024-2026 AI Agent Ecosystem · MIT License',
      github: 'GitHub',
      docs: '文档',
      license: '许可证'
    }
  },
  en: {
    nav: {
      title: 'AI Agent',
      browse: 'Browse Agents'
    },
    hero: {
      title: 'Explore',
      titleHighlight: 'AI Agent Ecosystem',
      subtitle: 'Instantly activate professional AI agents via GitHub Raw URLs. Cross-platform, no barriers.',
      agents: 'Agents',
      categories: 'Categories',
      browseBtn: 'Browse All Agents',
      stats: {
        agents: 'Agents',
        categories: 'Categories'
      }
    },
    search: {
      placeholder: 'Search agents by name, description, or tags...'
    },
    categories: {
      all: 'All'
    },
    card: {
      bestFor: 'Best for'
    },
    modal: {
      activationCode: 'Activation Code',
      copyCode: 'Copy',
      copied: 'Copied!',
      close: 'Close',
      activate: 'Activate Agent',
      bestFor: 'Best for'
    },
    empty: {
      title: 'No matching agents found',
      desc: 'Try adjusting your search or browse other categories'
    },
    toast: {
      copySuccess: 'Copied successfully!'
    },
    footer: {
      copyright: '© 2024-2026 AI Agent Ecosystem · MIT License',
      github: 'GitHub',
      docs: 'Docs',
      license: 'License'
    }
  }
};

let currentLang = localStorage.getItem('lang') || 'zh';

function t(key) {
  const keys = key.split('.');
  let value = translations[currentLang];
  for (const k of keys) {
    if (value && value[k] !== undefined) {
      value = value[k];
    } else {
      return key;
    }
  }
  return value;
}

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  updateUI();
}

function getLang() {
  return currentLang;
}

function updateUI() {
  const langSwitch = document.getElementById('langSwitch');
  if (langSwitch) {
    langSwitch.textContent = currentLang === 'zh' ? 'EN' : '中';
  }

  const heroTitle = document.getElementById('heroTitle');
  if (heroTitle) {
    heroTitle.innerHTML = `${t('hero.title')} <span class="grad">${t('hero.titleHighlight')}</span>`;
  }

  const heroSubtitle = document.getElementById('heroSubtitle');
  if (heroSubtitle) {
    heroSubtitle.textContent = t('hero.subtitle');
  }

  const browseBtn = document.getElementById('browseBtn');
  if (browseBtn) {
    browseBtn.innerHTML = `${t('hero.browseBtn')}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M5 12h14M12 5l7 7-7 7"/>
      </svg>`;
  }

  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.placeholder = t('search.placeholder');
  }

  const agentsCount = document.getElementById('agentsCount');
  if (agentsCount) {
    agentsCount.textContent = window.agentsData?.agents?.length || 0;
  }

  const categoriesCount = document.getElementById('categoriesCount');
  if (categoriesCount) {
    categoriesCount.textContent = (window.agentsData?.categories?.length || 0) - 1;
  }

  const agentsLabel = document.getElementById('agentsLabel');
  if (agentsLabel) {
    agentsLabel.textContent = t('hero.stats.agents');
  }

  const categoriesLabel = document.getElementById('categoriesLabel');
  if (categoriesLabel) {
    categoriesLabel.textContent = t('hero.stats.categories');
  }

  const modalActivationCode = document.getElementById('modalActivationCode');
  if (modalActivationCode) {
    modalActivationCode.textContent = t('modal.activationCode');
  }

  const copyBtn = document.getElementById('copyBtn');
  if (copyBtn) {
    copyBtn.textContent = t('modal.copyCode');
  }

  const activateBtnText = document.getElementById('activateBtnText');
  if (activateBtnText) {
    activateBtnText.textContent = t('modal.activate');
  }

  if (typeof renderCategories === 'function') {
    renderCategories();
  }
  if (typeof renderAgents === 'function') {
    renderAgents();
  }
}

window.i18n = { t, setLang, getLang, updateUI, translations };