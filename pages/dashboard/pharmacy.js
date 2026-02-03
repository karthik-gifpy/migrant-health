import { Layout, Card, Badge } from '../../components/ui';

export default function PharmacyDashboard() {
  const prescriptions = [
    { id: 1, patient: 'John Doe', medication: 'Aspirin 100mg', qty: 30, status: 'Pending', date: '2h ago' },
    { id: 2, patient: 'Jane Smith', medication: 'Metformin 500mg', qty: 60, status: 'Dispensed', date: '4h ago' },
    { id: 3, patient: 'Ahmed Hassan', medication: 'Vitamin D3', qty: 90, status: 'Pending', date: '1d ago' },
    { id: 4, patient: 'Maria Garcia', medication: 'Ibuprofen 400mg', qty: 20, status: 'Ready', date: '3h ago' }
  ];

  return (
    <Layout role="pharmacy" userName="Raj Pharmacy">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-slate-900 mb-2">Pharmacy Dashboard</h1>
        <p className="text-slate-600">Manage prescriptions and inventory</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {[
          { label: 'Today\'s Prescriptions', value: '24', icon: '📋', color: 'from-indigo-500 to-blue-600' },
          { label: 'Ready to Dispense', value: '8', icon: '✓', color: 'from-emerald-500 to-teal-600' },
          { label: 'Low Stock Items', value: '5', icon: '⚠️', color: 'from-amber-500 to-orange-600' },
          { label: 'Revenue Today', value: '₹2,450', icon: '💰', color: 'from-cyan-500 to-blue-500' }
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
              { icon: '📱', label: 'Scan QR', desc: 'Scan worker ID' },
              { icon: '🔍', label: 'Search Patient', desc: 'Find prescription' },
              { icon: '✓', label: 'Mark Dispensed', desc: 'Complete order' },
              { icon: '📦', label: 'Manage Stock', desc: 'Update inventory' }
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

        {/* Low Stock Alert */}
        <div className="col-span-2">
          <Card className="bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-200">
            <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
              <span className="text-2xl">⚠️</span> Low Stock Items
            </h2>
            <div className="space-y-3">
              {[
                { med: 'Aspirin 100mg', stock: '5 units', reorder: 'Order now' },
                { med: 'Vitamin D3', stock: '8 units', reorder: 'Order soon' },
                { med: 'Paracetamol 500mg', stock: '3 units', reorder: 'Urgent' }
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between p-3 bg-white rounded-lg">
                  <div>
                    <p className="font-medium text-slate-900">{item.med}</p>
                    <p className="text-sm text-slate-600">{item.stock}</p>
                  </div>
                  <button className="px-3 py-1 bg-orange-500 text-white rounded text-xs hover:bg-orange-600">
                    {item.reorder}
                  </button>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>

      {/* Prescriptions Table */}
      <Card className="bg-white border-slate-200">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-slate-900">Today's Prescriptions</h2>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Search patient or medication..."
              className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
              Search
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">Patient</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">Medication</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">Quantity</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">Received</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">Status</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {prescriptions.map((rx) => (
                <tr key={rx.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-500"></div>
                      <span className="font-medium text-slate-900">{rx.patient}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-slate-600">{rx.medication}</td>
                  <td className="px-6 py-4 text-slate-600">{rx.qty}</td>
                  <td className="px-6 py-4 text-slate-600 text-sm">{rx.date}</td>
                  <td className="px-6 py-4">
                    <Badge className={
                      rx.status === 'Dispensed' ? 'bg-emerald-100 text-emerald-700' :
                      rx.status === 'Ready' ? 'bg-blue-100 text-blue-700' :
                      'bg-amber-100 text-amber-700'
                    }>
                      {rx.status}
                    </Badge>
                  </td>
                  <td className="px-6 py-4">
                    <button className="text-indigo-600 hover:text-indigo-700 font-medium text-sm">
                      {rx.status === 'Dispensed' ? 'View' : 'Dispense'}
                    </button>
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
