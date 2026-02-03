import { Layout, Card, Badge, QRCard, Timeline } from '../../components/ui';

export default function WorkerDashboard() {
  return (
    <Layout role="worker" userName="John Doe" sidebarItems={[]}>
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-slate-900 mb-2">Welcome Back, John!</h1>
        <p className="text-slate-600">Your health profile at a glance</p>
      </div>

      {/* Top Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {[
          { icon: '❤️', label: 'Heart Rate', value: '72 bpm', status: 'Normal' },
          { icon: '🌡️', label: 'Temperature', value: '37°C', status: 'Normal' },
          { icon: '🩸', label: 'Blood Type', value: 'O+', status: 'Stored' },
          { icon: '💊', label: 'Active Meds', value: '2', status: 'Tracked' }
        ].map((stat, i) => (
          <Card key={i} className="bg-gradient-to-br from-slate-50 to-slate-100 border-slate-200">
            <div className="text-3xl mb-3">{stat.icon}</div>
            <p className="text-sm text-slate-600 mb-1">{stat.label}</p>
            <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
            <Badge className="mt-2 bg-emerald-100 text-emerald-700 text-xs">{stat.status}</Badge>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-8 mb-8">
        {/* Health Card with QR */}
        <div className="col-span-1">
          <Card className="bg-gradient-to-br from-indigo-600 via-cyan-500 to-emerald-500 text-white border-0 overflow-hidden">
            <div className="flex flex-col h-full">
              <div className="mb-6">
                <p className="text-sm opacity-90 mb-1">Health ID Card</p>
                <h3 className="text-xl font-bold">John Doe</h3>
                <p className="text-sm opacity-75">ID: HID-2026-001</p>
              </div>
              <div className="flex-1 flex items-center justify-center bg-white/20 rounded-lg p-4 mb-6">
                <div className="w-32 h-32 bg-white rounded-lg flex items-center justify-center text-slate-900 text-4xl">
                  📱 QR
                </div>
              </div>
              <div className="text-xs opacity-75">
                <p>Scan this card at any healthcare facility</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Recent Records */}
        <div className="col-span-2">
          <Card className="bg-white border-slate-200">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-slate-900">Recent Records</h2>
              <a href="#" className="text-indigo-600 hover:text-indigo-700 text-sm font-medium">View All</a>
            </div>
            <div className="space-y-4">
              {[
                { date: '3 days ago', type: 'Doctor Visit', facility: 'City Hospital', status: 'Completed' },
                { date: '1 week ago', type: 'Lab Test', facility: 'Pathology Lab', status: 'Completed' },
                { date: '2 weeks ago', type: 'Prescription', facility: 'City Hospital', status: 'Active' }
              ].map((record, i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                  <div>
                    <p className="font-semibold text-slate-900">{record.type}</p>
                    <p className="text-sm text-slate-600">{record.facility}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-slate-600 mb-1">{record.date}</p>
                    <Badge className={record.status === 'Completed' ? 'bg-emerald-100 text-emerald-700' : 'bg-indigo-100 text-indigo-700'}>
                      {record.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>

      {/* Active Medicines & Reminders */}
      <div className="grid grid-cols-2 gap-8">
        {/* Medicines */}
        <Card className="bg-white border-slate-200">
          <h2 className="text-xl font-bold text-slate-900 mb-6">Active Medicines</h2>
          <div className="space-y-4">
            {[
              { name: 'Aspirin', dose: '100mg', frequency: 'Once daily', end: 'Mar 15' },
              { name: 'Vitamins', dose: 'Tablet', frequency: 'Once daily', end: 'Dec 31' }
            ].map((med, i) => (
              <div key={i} className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                <p className="font-semibold text-slate-900">{med.name}</p>
                <div className="mt-2 grid grid-cols-2 gap-3 text-xs text-slate-600">
                  <div><span className="text-slate-500">Dose:</span> {med.dose}</div>
                  <div><span className="text-slate-500">Frequency:</span> {med.frequency}</div>
                </div>
                <p className="text-xs text-slate-500 mt-2">Ends: {med.end}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* Upcoming Reminders */}
        <Card className="bg-white border-slate-200">
          <h2 className="text-xl font-bold text-slate-900 mb-6">Upcoming Reminders</h2>
          <div className="space-y-4">
            {[
              { time: 'Today, 2:00 PM', event: 'Doctor Appointment', icon: '📅' },
              { time: 'Tomorrow, 8:00 AM', event: 'Take Aspirin', icon: '💊' },
              { time: 'Friday', event: 'Lab Test', icon: '🔬' }
            ].map((reminder, i) => (
              <div key={i} className="flex items-start gap-4 p-4 bg-gradient-to-r from-indigo-50 to-cyan-50 rounded-lg border border-indigo-200">
                <span className="text-2xl">{reminder.icon}</span>
                <div>
                  <p className="font-semibold text-slate-900">{reminder.event}</p>
                  <p className="text-sm text-slate-600 mt-1">{reminder.time}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </Layout>
  );
}
