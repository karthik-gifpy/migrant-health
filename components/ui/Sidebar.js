import Link from 'next/link';
import { useState } from 'react';

export default function Sidebar({ items = [], role = 'worker' }) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const defaultItems = {
    worker: [
      { icon: '🏥', label: 'Health Card', href: '/dashboard/worker' },
      { icon: '📋', label: 'Records', href: '/dashboard/worker/records' },
      { icon: '💊', label: 'Medicines', href: '/dashboard/worker/medicines' },
      { icon: '🔔', label: 'Reminders', href: '/dashboard/worker/reminders' },
    ],
    doctor: [
      { icon: '📊', label: 'Dashboard', href: '/dashboard/doctor' },
      { icon: '👥', label: 'Patients', href: '/dashboard/doctor/patients' },
      { icon: '📝', label: 'Visits', href: '/dashboard/doctor/visits' },
      { icon: '📋', label: 'Reports', href: '/dashboard/doctor/reports' },
    ],
    pharmacy: [
      { icon: '💊', label: 'Prescriptions', href: '/dashboard/pharmacy' },
      { icon: '🔍', label: 'Search', href: '/dashboard/pharmacy/search' },
      { icon: '✓', label: 'Dispensed', href: '/dashboard/pharmacy/dispensed' },
      { icon: '📊', label: 'History', href: '/dashboard/pharmacy/history' },
    ],
    ngo: [
      { icon: '📊', label: 'Dashboard', href: '/dashboard/ngo' },
      { icon: '👤', label: 'Workers', href: '/dashboard/ngo/workers' },
      { icon: '🏕', label: 'Camps', href: '/dashboard/ngo/camps' },
      { icon: '📈', label: 'Vitals', href: '/dashboard/ngo/vitals' },
    ],
  };

  const navItems = items.length > 0 ? items : defaultItems[role] || defaultItems.worker;

  return (
    <aside className={`${isCollapsed ? 'w-20' : 'w-64'} bg-white border-r border-slate-200 h-screen flex flex-col transition-all duration-300 fixed left-0 top-0 z-40`}>
      {/* Logo */}
      <div className="h-16 flex items-center justify-between px-4 border-b border-slate-200">
        {!isCollapsed && (
          <Link href="/" className="flex items-center gap-2 font-bold text-indigo-600">
            <span className="text-2xl">🏥</span>
            <span className="text-lg">HealthID</span>
          </Link>
        )}
        {isCollapsed && <span className="text-2xl">🏥</span>}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-1 hover:bg-slate-100 rounded-lg transition-colors"
        >
          {isCollapsed ? '→' : '←'}
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-4">
        <ul className="space-y-1 px-3">
          {navItems.map((item, idx) => (
            <li key={idx}>
              <Link href={item.href}>
                <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer text-slate-700 hover:text-indigo-600">
                  <span className="text-xl">{item.icon}</span>
                  {!isCollapsed && <span className="text-sm font-medium">{item.label}</span>}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Footer */}
      <div className="border-t border-slate-200 p-4">
        <div className="flex items-center gap-3 cursor-pointer p-2 rounded-lg hover:bg-slate-100 transition-colors">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-500"></div>
          {!isCollapsed && <div className="text-xs font-medium text-slate-700">Account</div>}
        </div>
      </div>
    </aside>
  );
}
