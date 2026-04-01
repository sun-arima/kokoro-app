'use client';

import { usePathname, useRouter } from 'next/navigation';
import { Home, BookOpen, BarChart3, Users } from 'lucide-react';

type NavItem = {
  label: string;
  path: string;
  icon: React.ReactNode;
};

const navItems: NavItem[] = [
  { label: 'ホーム', path: '/home', icon: <Home size={24} /> },
  { label: '振り返り', path: '/log', icon: <BookOpen size={24} /> },
  { label: '分析', path: '/report', icon: <BarChart3 size={24} /> },
  { label: '家族交流', path: '/family', icon: <Users size={24} /> },
];

export default function BottomNavigation() {
  const pathname = usePathname();
  const router = useRouter();

  const isActive = (path: string) => {
    const normalized = pathname.replace(/\/$/, '');
    return normalized === path;
  };

  return (
    <nav className="bg-card border-t border-gray-200 z-50">
      <div className="flex justify-around items-center" style={{ height: '70px' }}>
        {navItems.map((item) => (
          <button
            key={item.path}
            onClick={() => router.push(item.path)}
            className={`flex flex-col items-center justify-center gap-1 flex-1 h-full transition-colors ${
              isActive(item.path) ? 'text-primary' : 'text-gray-400'
            }`}
          >
            <div className={`flex items-center justify-center w-10 h-10 rounded-full transition-colors ${
              isActive(item.path) ? 'bg-primary/15' : ''
            }`}>
              {item.icon}
            </div>
            <span className={`text-xs font-medium ${isActive(item.path) ? 'text-primary font-bold' : ''}`}>{item.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}
