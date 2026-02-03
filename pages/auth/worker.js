import { useState } from 'react';
import Link from 'next/link';
import { Button, Card, FormField } from '../../components/ui';

export default function WorkerAuth() {
  const [step, setStep] = useState('phone');
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [profile, setProfile] = useState({ name: '', languages: [] });
  const [loading, setLoading] = useState(false);

  const handlePhoneSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setStep('otp');
      setLoading(false);
    }, 1000);
  };

  const handleOTPSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setStep('profile');
      setLoading(false);
    }, 1000);
  };

  const handleProfileSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      alert('Registration successful!');
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-cyan-50 to-emerald-50 flex items-center justify-center p-4">
      {/* Decorative Background Elements */}
      <div className="absolute top-10 right-10 w-40 h-40 bg-emerald-200/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-indigo-200/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="w-full max-w-md relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 mb-6">
            <span className="text-4xl">🏥</span>
            <span className="text-2xl font-bold text-indigo-600">HealthID</span>
          </Link>
          <h1 className="text-3xl font-bold text-slate-900">Register as Worker</h1>
          <p className="text-slate-600 mt-2">Create your health profile in 3 simple steps</p>
        </div>

        {/* Progress Indicator */}
        <div className="flex gap-2 mb-8">
          {['phone', 'otp', 'profile'].map((s, i) => (
            <div
              key={s}
              className={`flex-1 h-2 rounded-full transition-all ${
                s === step || ['phone', 'otp', 'profile'].indexOf(step) > i
                  ? 'bg-gradient-to-r from-indigo-600 to-emerald-500'
                  : 'bg-slate-200'
              }`}
            ></div>
          ))}
        </div>

        {/* Form Card */}
        <Card className="bg-white border-slate-200">
          {step === 'phone' && (
            <form onSubmit={handlePhoneSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">Phone Number</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+1 (234) 567-8900"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all"
                  required
                />
                <p className="text-xs text-slate-500 mt-2">We'll send you a 6-digit code via SMS</p>
              </div>
              <Button type="submit" disabled={loading} className="w-full bg-gradient-to-r from-indigo-600 to-cyan-500 text-white">
                {loading ? '⏳ Sending...' : 'Send OTP Code'}
              </Button>
            </form>
          )}

          {step === 'otp' && (
            <form onSubmit={handleOTPSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">Verification Code</label>
                <p className="text-sm text-slate-600 mb-4">We sent a 6-digit code to {phone}</p>
                <input
                  type="text"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
                  placeholder="000000"
                  maxLength="6"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white text-center text-3xl tracking-widest font-mono transition-all"
                  required
                />
              </div>
              <Button type="submit" disabled={loading} className="w-full bg-gradient-to-r from-indigo-600 to-cyan-500 text-white">
                {loading ? '⏳ Verifying...' : 'Verify Code'}
              </Button>
              <button
                type="button"
                onClick={() => setStep('phone')}
                className="w-full text-indigo-600 hover:text-indigo-700 font-medium text-sm"
              >
                Change Phone Number
              </button>
            </form>
          )}

          {step === 'profile' && (
            <form onSubmit={handleProfileSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">Full Name</label>
                <input
                  type="text"
                  value={profile.name}
                  onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">Languages You Speak</label>
                <input
                  type="text"
                  value={profile.languages.join(', ')}
                  onChange={(e) => setProfile({ ...profile, languages: e.target.value.split(',').map(l => l.trim()) })}
                  placeholder="e.g., English, Malayalam, Hindi"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all"
                />
              </div>
              <Button type="submit" disabled={loading} className="w-full bg-gradient-to-r from-emerald-600 to-teal-500 text-white">
                {loading ? '⏳ Registering...' : 'Complete Registration'}
              </Button>
            </form>
          )}
        </Card>

        {/* Footer */}
        <p className="text-center text-sm text-slate-600 mt-6">
          Already have an account?{' '}
          <Link href="/" className="text-indigo-600 hover:text-indigo-700 font-semibold">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
