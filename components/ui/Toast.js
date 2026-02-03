import { useState, useEffect } from 'react';

export default function Toast({ 
  message = '', 
  type = 'success',
  duration = 3000,
  onClose = () => {}
}) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  if (!isVisible) return null;

  const colors = {
    success: 'bg-emerald-50 border-emerald-200 text-emerald-800',
    error: 'bg-red-50 border-red-200 text-red-800',
    warning: 'bg-amber-50 border-amber-200 text-amber-800',
    info: 'bg-blue-50 border-blue-200 text-blue-800'
  };

  const icons = {
    success: '✓',
    error: '✕',
    warning: '!',
    info: 'ℹ'
  };

  const bgColors = {
    success: 'bg-emerald-100',
    error: 'bg-red-100',
    warning: 'bg-amber-100',
    info: 'bg-blue-100'
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-slide-in">
      <div className={`${colors[type]} border rounded-xl p-4 shadow-lg flex items-center gap-3 min-w-96 backdrop-blur-sm bg-opacity-95`}>
        <div className={`${bgColors[type]} text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0`}>
          {icons[type]}
        </div>
        <p className="font-medium text-sm flex-1">{message}</p>
        <button
          onClick={() => {
            setIsVisible(false);
            onClose();
          }}
          className="text-slate-500 hover:text-slate-700 ml-2"
        >
          ✕
        </button>
      </div>
    </div>
  );
}

// Toast Manager Hook
export function useToast() {
  const [toasts, setToasts] = useState([]);

  const showToast = (message, type = 'success', duration = 3000) => {
    const id = Math.random();
    setToasts(prev => [...prev, { id, message, type, duration }]);
  };

  const removeToast = (id) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };

  return { toasts, showToast, removeToast };
}
