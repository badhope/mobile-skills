'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavItem {
  href: string;
  label: string;
  icon: string;
  activeIcon?: string;
}

const NAV_ITEMS: NavItem[] = [
  { href: '/', label: '首页', icon: '🏠' },
  { href: '/skills', label: '技能', icon: '📚' },
  { href: '/search', label: '搜索', icon: '🔍' },
  { href: '/compare', label: '对比', icon: '⚖️' },
  { href: '/settings', label: '设置', icon: '⚙️' }
];

export default function MobileBottomNav() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <nav 
      className={`md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-t border-gray-200 dark:border-gray-700 transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="flex items-center justify-around h-16 px-2 safe-area-inset-bottom">
        {NAV_ITEMS.map((item) => {
          const active = isActive(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center justify-center flex-1 h-full transition-all duration-200 ${
                active 
                  ? 'text-indigo-600 dark:text-indigo-400' 
                  : 'text-gray-500 dark:text-gray-400'
              }`}
            >
              <span className={`text-xl mb-1 transition-transform duration-200 ${
                active ? 'scale-110' : ''
              }`}>
                {item.icon}
              </span>
              <span className={`text-xs font-medium ${
                active ? 'font-semibold' : ''
              }`}>
                {item.label}
              </span>
              {active && (
                <span className="absolute bottom-0 w-12 h-0.5 bg-indigo-600 dark:bg-indigo-400 rounded-t-full" />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
