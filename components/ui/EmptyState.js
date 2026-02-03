export default function EmptyState({
  icon = '📭',
  title = 'No data found',
  description = 'There\'s nothing to show here yet',
  action = null,
  actionLabel = 'Get started',
  className = ''
}) {
  return (
    <div className={`flex flex-col items-center justify-center py-12 px-6 ${className}`}>
      <div className="text-6xl mb-4 opacity-50">{icon}</div>
      <h3 className="text-2xl font-bold text-slate-900 mb-2">{title}</h3>
      <p className="text-slate-600 text-center max-w-md mb-6">{description}</p>
      {action && (
        <button
          onClick={action}
          className="px-6 py-2.5 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium"
        >
          {actionLabel}
        </button>
      )}
    </div>
  );
}
