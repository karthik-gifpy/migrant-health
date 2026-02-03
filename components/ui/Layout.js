import Sidebar from './Sidebar';
import Topbar from './Topbar';

export default function Layout({ children, role = 'worker', userName = 'User', sidebarItems = [] }) {
  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden">
      <Sidebar role={role} items={sidebarItems} />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Topbar role={role} userName={userName} />
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
