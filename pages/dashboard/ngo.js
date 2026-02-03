import { Layout, Card, Badge } from '../../components/ui';

export default function NGODashboard() {
  return (
    <Layout role="ngo" userName="Hope NGO Clinic">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-slate-900 mb-2">NGO/Clinic Dashboard</h1>
        <p className="text-slate-600">Manage workers, health camps, and vitals</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {[
          { label: 'Registered Workers', value: '342', icon: '👥', color: 'from-indigo-500 to-blue-600' },
          { label: 'Active Camps', value: '5', icon: '🏕', color: 'from-emerald-500 to-teal-600' },
          { label: 'Health Checks Today', value: '28', icon: '🩺', color: 'from-cyan-500 to-blue-500' },
          { label: 'Pending Records', value: '12', icon: '📋', color: 'from-amber-500 to-orange-600' }
        ].map((stat, i) => (
          <Card key={i} className={`bg-gradient-to-br ${stat.color} text-white border-0`}>
            <div className="flex items-start justify-between">
              <div>
                <p className="text-white/80 text-sm mb-2">{stat.label}</p>
                <div className="text-3xl font-bold">{stat.value}</div>
              </div>
              <span className="text-4xl opacity-50">{stat.icon}</span>
            </div>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-8 mb-8">
        {/* Quick Actions */}
        <Card className="bg-white border-slate-200">
          <h2 className="text-lg font-bold text-slate-900 mb-4">Quick Actions</h2>
          <div className="space-y-3">
            {[
              { icon: '➕', label: 'Register Worker', desc: 'Add new worker' },
              { icon: '🏕', label: 'Create Camp', desc: 'Schedule health camp' },
              { icon: '📊', label: 'Record Vitals', desc: 'Log health data' },
              { icon: '📱', label: 'QR Scanner', desc: 'Scan worker ID' }
            ].map((action, i) => (
              <button key={i} className="w-full flex items-center gap-3 p-3 bg-slate-50 hover:bg-slate-100 rounded-lg transition-colors text-left">
                <span className="text-2xl">{action.icon}</span>
                <div>
                  <p className="font-medium text-slate-900 text-sm">{action.label}</p>
                  <p className="text-xs text-slate-600">{action.desc}</p>
                </div>
              </button>
            ))}
          </div>
        </Card>

        {/* Recent Registrations */}
        <div className="col-span-2">
          <Card className="bg-white border-slate-200">
            <h2 className="text-lg font-bold text-slate-900 mb-4">Recent Registrations</h2>
            <div className="space-y-3">
              {[
                { name: 'Rajesh Kumar', date: '2h ago', status: 'Verified' },
                { name: 'Priya Singh', date: '4h ago', status: 'Verified' },
                { name: 'Ahmed Ali', date: '1d ago', status: 'Pending' },
                { name: 'Maria Santos', date: '1d ago', status: 'Verified' }
              ].map((worker, i) => (
                <div key={i} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-500"></div>
                    <div>
                      <p className="font-medium text-slate-900">{worker.name}</p>
                      <p className="text-xs text-slate-600">{worker.date}</p>
                    </div>
                  </div>
                  <Badge className={worker.status === 'Verified' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}>
                    {worker.status}
                  </Badge>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>

      {/* Camps & Vitals */}
      <div className="grid grid-cols-2 gap-8 mb-8">
        {/* Active Camps */}
        <Card className="bg-white border-slate-200">
          <h2 className="text-xl font-bold text-slate-900 mb-6">Active Health Camps</h2>
          <div className="space-y-4">
            {[
              { name: 'Industrial Zone Camp', location: 'Zone A', date: 'Today', workers: 45, status: 'Ongoing' },
              { name: 'Construction Site Camp', location: 'Site B', date: 'Tomorrow', workers: 30, status: 'Scheduled' },
              { name: 'Textile Factory Camp', location: 'Mill C', date: 'Mar 8', workers: 60, status: 'Scheduled' }
            ].map((camp, i) => (
              <div key={i} className="p-4 bg-slate-50 rounded-lg border border-slate-200 hover:border-indigo-200 transition-colors">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p className="font-semibold text-slate-900">{camp.name}</p>
                    <p className="text-sm text-slate-600 mt-1">{camp.location}</p>
                  </div>
                  <Badge className={camp.status === 'Ongoing' ? 'bg-emerald-100 text-emerald-700' : 'bg-blue-100 text-blue-700'}>
                    {camp.status}
                  </Badge>
                </div>
                <div className="grid grid-cols-2 gap-3 text-xs text-slate-600">
                  <div><span className="text-slate-500">Date:</span> {camp.date}</div>
                  <div><span className="text-slate-500">Workers:</span> {camp.workers}</div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Health Metrics */}
        <Card className="bg-white border-slate-200">
          <h2 className="text-xl font-bold text-slate-900 mb-6">Today's Health Metrics</h2>
          <div className="space-y-4">
            {[
              { metric: 'Average BP', value: '120/80', trend: 'Normal', icon: '❤️' },
              { metric: 'Avg Temperature', value: '37.1°C', trend: 'Normal', icon: '🌡️' },
              { metric: 'BMI Status', value: '22.5', trend: 'Healthy', icon: '⚖️' },
              { metric: 'Vaccination Rate', value: '95%', trend: 'Excellent', icon: '💉' }
            ].map((metric, i) => (
              <div key={i} className="p-4 bg-gradient-to-r from-slate-50 to-slate-100 rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-600">{metric.metric}</p>
                    <p className="text-2xl font-bold text-slate-900 mt-1">{metric.value}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-3xl">{metric.icon}</span>
                    <p className="text-xs text-slate-600 mt-1">{metric.trend}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Workers Table */}
      <Card className="bg-white border-slate-200">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-slate-900">Registered Workers</h2>
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
            Add Worker
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">Worker Name</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">Health ID</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">Registration</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">Status</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">Last Check</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {[
                { name: 'Rajesh Kumar', id: 'HID-001', reg: '2 weeks ago', status: 'Active', check: '2 days ago' },
                { name: 'Priya Singh', id: 'HID-002', reg: '1 week ago', status: 'Active', check: 'Today' },
                { name: 'Ahmed Ali', id: 'HID-003', reg: '3 days ago', status: 'Pending', check: '1 day ago' },
                { name: 'Maria Santos', id: 'HID-004', reg: '5 days ago', status: 'Active', check: '5 days ago' }
              ].map((worker, i) => (
                <tr key={i} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-500"></div>
                      <span className="font-medium text-slate-900">{worker.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 font-mono text-slate-600 text-sm">{worker.id}</td>
                  <td className="px-6 py-4 text-slate-600 text-sm">{worker.reg}</td>
                  <td className="px-6 py-4">
                    <Badge className={worker.status === 'Active' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}>
                      {worker.status}
                    </Badge>
                  </td>
                  <td className="px-6 py-4 text-slate-600 text-sm">{worker.check}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </Layout>
  );
}
