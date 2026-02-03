import Card from './Card';
import Badge from './Badge';
import Button from './Button';

export default function QRCard({ worker, onOpenRecord, onStartVisit }) {
  return (
    <Card className="max-w-md">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold text-slate-900">{worker.name}</h3>
          <p className="text-sm text-slate-600">{worker.phone}</p>
        </div>
        <Badge variant="success">Active</Badge>
      </div>

      <div className="space-y-3 mb-6 p-3 bg-slate-50 rounded-lg">
        <div>
          <p className="text-xs text-slate-600">Health ID</p>
          <p className="font-mono text-sm font-semibold text-slate-900">{worker.id}</p>
        </div>
        <div>
          <p className="text-xs text-slate-600">Last Visit</p>
          <p className="text-sm text-slate-700">{worker.lastVisit || 'No visits'}</p>
        </div>
      </div>

      <div className="flex gap-2">
        <Button variant="primary" size="sm" className="flex-1" onClick={onOpenRecord}>
          Open Record
        </Button>
        <Button variant="secondary" size="sm" className="flex-1" onClick={onStartVisit}>
          Start Visit
        </Button>
      </div>
    </Card>
  );
}
