import { useState } from 'react';
import Link from 'next/link';
import { Button, Card } from '../../components/ui';

const PROVIDER_ROLES = [
  { id: 'doctor', name: 'Doctor', icon: '👨‍⚕️', desc: 'Manage patients and prescriptions' },
  { id: 'ngo', name: 'NGO/Clinic', icon: '🏥', desc: 'Register workers and manage camps' },
  { id: 'pharmacy', name: 'Pharmacy', icon: '💊', desc: 'Dispense and track medicines' },
  { id: 'admin', name: 'Administrator', icon: '⚙️', desc: 'System administration' }
];

export default function ProviderAuth() {
  const [email, setEmail] = useState('');
  const [selectedRole, setSelectedRole] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGoogleSignIn = async () => {
    if (!email || !selectedRole) return;
    setLoading(true);
    setTimeout(() => {
      alert(`Signed in as ${selectedRole}`);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-cyan-50 to-emerald-50 flex items-center justify-center p-4">
      {/* Decorative Background */}
      <div className="absolute top-20 left-10 w-48 h-48 bg-indigo-200/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-20 w-48 h-48 bg-cyan-200/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="w-full max-w-lg relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 mb-6">
            <span className="text-4xl">🏥</span>
            <span className="text-2xl font-bold text-indigo-600">HealthID</span>
          </Link>
          <h1 className="text-3xl font-bold text-slate-900">Healthcare Provider</h1>
          <p className="text-slate-600 mt-2">Sign in to manage your patients and operations</p>
        </div>

        <Card className="bg-white border-slate-200 space-y-6">
          {/* Email Input */}
          <div>
            <label className="block text-sm font-semibold text-slate-900 mb-2">Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="provider@hospital.com"
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all"
              required
            />
          </div>

          {/* Google Sign In Button */}
          <Button 
            onClick={handleGoogleSignIn}
            disabled={!email || !selectedRole || loading}
            className="w-full bg-gradient-to-r from-indigo-600 to-cyan-500 text-white"
          >
            {loading ? '⏳ Signing in...' : '🔗 Sign in with Google'}
          </Button>

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="px-3 bg-white text-sm font-medium text-slate-600">Select Your Role</span>
            </div>
          </div>

          {/* Role Selection */}
          <div className="grid grid-cols-2 gap-3">
            {PROVIDER_ROLES.map((role) => (
              <button
                key={role.id}
                onClick={() => setSelectedRole(role.id)}
                className={`p-4 rounded-xl border-2 transition-all text-center ${
                  selectedRole === role.id
                    ? 'border-indigo-600 bg-indigo-50 shadow-md'
                    : 'border-slate-200 hover:border-slate-300 bg-slate-50'
                }`}
              >
                <div className="text-3xl mb-2">{role.icon}</div>
                <div className="text-sm font-semibold text-slate-900">{role.name}</div>
                <div className="text-xs text-slate-500 mt-1">{role.desc}</div>
              </button>
            ))}
          </div>

          {/* Continue Button */}
          {selectedRole && (
            <Button 
              onClick={handleGoogleSignIn}
              disabled={!email || loading}
              className="w-full bg-gradient-to-r from-emerald-600 to-teal-500 text-white"
            >
              Continue as {PROVIDER_ROLES.find(r => r.id === selectedRole)?.name}
            </Button>
          )}
        </Card>

        {/* Footer */}
        <p className="text-center text-sm text-slate-600 mt-6">
          New provider?{' '}
          <Link href="/" className="text-indigo-600 hover:text-indigo-700 font-semibold">
            Request access
          </Link>
        </p>
      </div>
    </div>
  );
}
