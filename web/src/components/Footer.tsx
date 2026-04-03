export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-50 to-gray-100 border-t border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-2xl">🚀</span>
              <span className="text-xl font-bold text-gray-900">Mobile Skills</span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              AI Skill 生态系统，提供丰富的 AI 角色和技能，让 AI 变得更有用、更有趣。
            </p>
            <p className="text-xs text-gray-500">
              © {new Date().getFullYear()} Mobile Skills. MIT License.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4 flex items-center gap-2">
              🔗 快速链接
            </h3>
            <ul className="space-y-2.5">
              <li>
                <a href="/" className="text-gray-600 hover:text-indigo-600 transition-colors duration-200 text-sm flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full group-hover:bg-indigo-600 transition-colors"></span>
                  首页
                </a>
              </li>
              <li>
                <a href="/skills" className="text-gray-600 hover:text-indigo-600 transition-colors duration-200 text-sm flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full group-hover:bg-indigo-600 transition-colors"></span>
                  所有技能
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/badhope/mobile-skills"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-indigo-600 transition-colors duration-200 text-sm flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full group-hover:bg-indigo-600 transition-colors"></span>
                  GitHub
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4 flex items-center gap-2">
              📂 技能分类
            </h3>
            <ul className="space-y-2.5">
              <li>
                <a href="/skills?category=functional" className="text-gray-600 hover:text-indigo-600 transition-colors duration-200 text-sm flex items-center gap-2 group">
                  <span>🛠️</span>
                  功能型
                </a>
              </li>
              <li>
                <a href="/skills?category=professional" className="text-gray-600 hover:text-indigo-600 transition-colors duration-200 text-sm flex items-center gap-2 group">
                  <span>💼</span>
                  专业型
                </a>
              </li>
              <li>
                <a href="/skills?category=creative" className="text-gray-600 hover:text-indigo-600 transition-colors duration-200 text-sm flex items-center gap-2 group">
                  <span>🎨</span>
                  创意型
                </a>
              </li>
              <li>
                <a href="/skills?category=character" className="text-gray-600 hover:text-indigo-600 transition-colors duration-200 text-sm flex items-center gap-2 group">
                  <span>🎭</span>
                  角色型
                </a>
              </li>
              <li>
                <a href="/skills?category=fiction" className="text-gray-600 hover:text-indigo-600 transition-colors duration-200 text-sm flex items-center gap-2 group">
                  <span>📖</span>
                  虚构世界
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-500">
            <p className="flex items-center gap-2">
              Made with ❤️ and AI
            </p>
            <div className="flex items-center gap-4">
              <a href="/sitemap.xml" className="hover:text-indigo-600 transition-colors">Sitemap</a>
              <span>|</span>
              <a href="/robots.txt" className="hover:text-indigo-600 transition-colors">Robots</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
