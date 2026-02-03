import { Layout, Card, Badge, Table } from '../../components/ui';

export default function DoctorDashboard() {
  const patients = [
    { id: 1, name: 'John Doe', age: 28, status: 'Active', lastVisit: '2 days ago', condition: 'Hypertension' },
    { id: 2, name: 'Jane Smith', age: 35, status: 'Active', lastVisit: '1 week ago', condition: 'Diabetes' },
    { id: 3, name: 'Ahmed Hassan', age: 42, status: 'Follow-up', lastVisit: '3 days ago', condition: 'Asthma' },
    { id: 4, name: 'Maria Garcia', age: 31, status: 'Active', lastVisit: '5 days ago', condition: 'Migraine' }
  ];

  return (
    <Layout role="doctor" userName="Dr. Sarah Johnson">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-slate-900 mb-2">Doctor Dashboard</h1>
        <p className="text-slate-600">Manage your patients and medical records</p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {[
          { label: 'Total Patients', value: '156', icon: '👥', color: 'from-indigo-500 to-blue-600' },
          { label: 'Today\'s Visits', value: '8', icon: '📅', color: 'from-cyan-500 to-blue-500' },
          { label: 'Pending Prescriptions', value: '5', icon: '📝', color: 'from-emerald-500 to-teal-600' },
          { label: 'Lab Results', value: '12', icon: '🔬', color: 'from-amber-500 to-orange-600' }
        ].map((stat, i) => (
          <Card key={i} className={`bg-gradient-to-br ${stat.color} text-white border-0 overflow-hidden`}>
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
              { icon: '➕', label: 'Add Patient', action: 'Add new patient record' },
              { icon: '📝', label: 'Write Prescription', action: 'Create new prescription' },
              { icon: '📊', label: 'View Reports', action: 'Check lab results' },
              { icon: '💬', label: 'Send Message', action: 'Contact patient' }
            ].map((action, i) => (
              <button key={i} className="w-full flex items-center gap-3 p-3 bg-slate-50 hover:bg-slate-100 rounded-lg transition-colors text-left">
                <span className="text-2xl">{action.icon}</span>
                <div>
                  <p className="font-medium text-slate-900 text-sm">{action.label}</p>
                  <p className="text-xs text-slate-600">{action.action}</p>
                </div>
              </button>
            ))}
          </div>
        </Card>

        {/* Recent Activity */}
        <div className="col-span-2">
          <Card className="bg-white border-slate-200">
            <h2 className="text-lg font-bold text-slate-900 mb-4">Recent Activity</h2>
            <div className="space-y-3">
              {[
                { time: '2h ago', action: 'Created prescription for John Doe', icon: '📝' },
                { time: '4h ago', action: 'Updated patient record - Jane Smith', icon: '✏️' },
                { time: '1d ago', action: 'Lab results received for Ahmed Hassan', icon: '🔬' },
                { time: '1d ago', action: 'Approved visit request from Maria Garcia', icon: '✓' }
              ].map((activity, i) => (
                <div key={i} className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                  <span className="text-xl">{activity.icon}</span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-slate-900">{activity.action}</p>
                  </div>
                  <p className="text-xs text-slate-500 whitespace-nowrap">{activity.time}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>

      {/* Patients Table */}
      <Card className="bg-white border-slate-200">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-slate-900">Your Patients</h2>
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
            Add Patient
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">Patient Name</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">Age</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">Condition</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">Last Visit</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">Status</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {patients.map((patient) => (
                <tr key={patient.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-500"></div>
                      <span className="font-medium text-slate-900">{patient.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-slate-600">{patient.age}</td>
                  <td className="px-6 py-4 text-slate-600">{patient.condition}</td>
                  <td className="px-6 py-4 text-slate-600 text-sm">{patient.lastVisit}</td>
                  <td className="px-6 py-4">
                    <Badge className={patient.status === 'Active' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}>
                      {patient.status}
                    </Badge>
                  </td>
                  <td className="px-6 py-4">
                    <button className="text-indigo-600 hover:text-indigo-700 font-medium text-sm">View</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </Layout>
  );
}
