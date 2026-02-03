import { useState } from 'react';

export default function Topbar({ userName = 'User', role = 'Worker' }) {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showLanguage, setShowLanguage] = useState(false);
  const [language, setLanguage] = useState('en');

  const languages = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'hi', name: 'हिंदी', flag: '🇮🇳' },
    { code: 'ml', name: 'മലയാളം', flag: '🇰🇪' },
    { code: 'ta', name: 'தமிழ்', flag: '🇱🇰' },
    { code: 'bn', name: 'বাংলা', flag: '🇧🇩' },
  ];

  const notifications = [
    { id: 1, text: 'Appointment reminder tomorrow at 2 PM', time: '5m ago' },
    { id: 2, text: 'Prescription ready for pickup', time: '1h ago' },
    { id: 3, text: 'New health record uploaded', time: '2h ago' },
  ];

  return (
    <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6 ml-64 sticky top-0 z-30">
      {/* Search */}
      <div className="flex-1 max-w-md">
        <div className="relative">
          <input
            type="text"
            placeholder="Search records, patients, prescriptions..."
            className="w-full px-4 py-2 pl-10 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
          />
          <span className="absolute left-3 top-2.5 text-slate-400">🔍</span>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4 ml-6">
        {/* Language Selector */}
        <div className="relative">
          <button
            onClick={() => setShowLanguage(!showLanguage)}
            className="p-2 hover:bg-slate-100 rounded-lg transition-colors flex items-center gap-1"
          >
            <span className="text-lg">{languages.find(l => l.code === language)?.flag}</span>
            <span className="text-xs font-medium text-slate-600">{language.toUpperCase()}</span>
          </button>
          {showLanguage && (
            <div className="absolute right-0 mt-2 bg-white border border-slate-200 rounded-lg shadow-lg p-2 w-32 z-50">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    setLanguage(lang.code);
                    setShowLanguage(false);
                  }}
                  className="w-full text-left px-3 py-2 hover:bg-slate-100 rounded text-sm flex items-center gap-2"
                >
                  <span>{lang.flag}</span>
                  <span>{lang.name}</span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Notifications */}
        <div className="relative">
          <button
            onClick={() => setShowNotifications(!showNotifications)}
            className="p-2 hover:bg-slate-100 rounded-lg transition-colors relative"
          >
            <span className="text-xl">🔔</span>
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          {showNotifications && (
            <div className="absolute right-0 mt-2 bg-white border border-slate-200 rounded-lg shadow-lg w-80 z-50">
              <div className="p-4 border-b border-slate-200">
                <h3 className="font-semibold text-slate-900">Notifications</h3>
              </div>
              <div className="max-h-96 overflow-y-auto">
                {notifications.map((notif) => (
                  <div key={notif.id} className="px-4 py-3 border-b border-slate-100 hover:bg-slate-50 cursor-pointer transition-colors">
                    <p className="text-sm text-slate-700">{notif.text}</p>
                    <p className="text-xs text-slate-500 mt-1">{notif.time}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Chatbot */}
        <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
          <span className="text-xl">💬</span>
        </button>

        {/* Profile */}
        <div className="flex items-center gap-3 pl-4 border-l border-slate-200">
          <div className="text-right">
            <p className="text-sm font-semibold text-slate-900">{userName}</p>
            <p className="text-xs text-slate-500">{role}</p>
          </div>
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-500 cursor-pointer"></div>
        </div>
      </div>
    </header>
  );
}
