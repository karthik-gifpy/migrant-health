import Badge from './Badge';

export default function Timeline({ items, className = '' }) {
  return (
    <div className={`space-y-6 ${className}`}>
      {items.map((item, idx) => (
        <div key={idx} className="flex gap-4">
          <div className="relative flex flex-col items-center">
            <div className="w-3 h-3 bg-indigo-600 rounded-full mt-2"></div>
            {idx < items.length - 1 && (
              <div className="w-0.5 h-12 bg-slate-200 my-2"></div>
            )}
          </div>
          <div className="pb-4">
            <h4 className="font-semibold text-slate-900">{item.title}</h4>
            <p className="text-sm text-slate-600 mt-1">{item.date}</p>
            {item.description && (
              <p className="text-sm text-slate-700 mt-2">{item.description}</p>
            )}
            {item.status && <Badge variant="secondary" className="mt-2">{item.status}</Badge>}
          </div>
        </div>
      ))}
    </div>
  );
}
