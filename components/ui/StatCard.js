export default function StatCard({ 
  label = 'Stat', 
  value = '0', 
  icon = '📊',
  color = 'from-indigo-500 to-blue-600',
  trend = null,
  trendPositive = true,
  className = ''
}) {
  return (
    <div 
      className={`bg-gradient-to-br ${color} text-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${className}`}
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="text-white/80 text-sm font-medium mb-2">{label}</p>
          <div className="text-4xl font-bold">{value}</div>
          {trend && (
            <div className={`text-sm mt-2 font-medium flex items-center gap-1 ${
              trendPositive ? 'text-emerald-200' : 'text-red-200'
            }`}>
              <span>{trendPositive ? '↑' : '↓'}</span>
              <span>{trend}</span>
            </div>
          )}
        </div>
        <span className="text-5xl opacity-50">{icon}</span>
      </div>
      <div className="h-1 bg-white/20 rounded-full overflow-hidden">
        <div className="h-full w-3/4 bg-white/40 rounded-full"></div>
      </div>
    </div>
  );
}
