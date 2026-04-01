export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-2xl">🚀</span>
              <span className="text-xl font-bold text-gray-900">Mobile Skills</span>
            </div>
            <p className="text-gray-600 mb-4">
              AI Skill 生态系统，提供丰富的 AI 角色和技能，让 AI 变得更有用、更有趣。
            </p>
            <p className="text-gray-500 text-sm">
              © 2026 Mobile Skills. MIT License.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              快速链接
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-600 hover:text-gray-900">
                  首页
                </a>
              </li>
              <li>
                <a href="/skills" className="text-gray-600 hover:text-gray-900">
                  所有技能
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/badhope/mobile-skills"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              分类
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="/skills?category=functional" className="text-gray-600 hover:text-gray-900">
                  功能型
                </a>
              </li>
              <li>
                <a href="/skills?category=professional" className="text-gray-600 hover:text-gray-900">
                  专业型
                </a>
              </li>
              <li>
                <a href="/skills?category=creative" className="text-gray-600 hover:text-gray-900">
                  创意型
                </a>
              </li>
              <li>
                <a href="/skills?category=character" className="text-gray-600 hover:text-gray-900">
                  角色型
                </a>
              </li>
              <li>
                <a href="/skills?category=fiction" className="text-gray-600 hover:text-gray-900">
                  虚构世界
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
