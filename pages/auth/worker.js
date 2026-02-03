import { useState } from 'react';
import { Button, Card, FormField } from '../../components/ui';

export default function WorkerAuth() {
  const [step, setStep] = useState('phone'); // phone, otp, profile
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [profile, setProfile] = useState({ name: '', languages: [] });
  const [loading, setLoading] = useState(false);

  const handlePhoneSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate OTP send
    setTimeout(() => {
      setStep('otp');
      setLoading(false);
    }, 1000);
  };

  const handleOTPSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Verify OTP
    setTimeout(() => {
      setStep('profile');
      setLoading(false);
    }, 1000);
  };

  const handleProfileSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Register worker
    setTimeout(() => {
      alert('Registration successful!');
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-cyan-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <h1 className="text-2xl font-bold text-slate-900 mb-6">Register as Migrant Worker</h1>

        {step === 'phone' && (
          <form onSubmit={handlePhoneSubmit} className="space-y-4">
            <FormField label="Phone Number" required>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+1234567890"
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </FormField>
            <Button type="submit" disabled={loading} className="w-full">
              {loading ? 'Sending...' : 'Send OTP'}
            </Button>
          </form>
        )}

        {step === 'otp' && (
          <form onSubmit={handleOTPSubmit} className="space-y-4">
            <p className="text-sm text-slate-600 mb-4">OTP sent to {phone}</p>
            <FormField label="Enter OTP" required>
              <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="000000"
                maxLength="6"
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-center text-2xl tracking-widest"
                required
              />
            </FormField>
            <Button type="submit" disabled={loading} className="w-full">
              {loading ? 'Verifying...' : 'Verify OTP'}
            </Button>
          </form>
        )}

        {step === 'profile' && (
          <form onSubmit={handleProfileSubmit} className="space-y-4">
            <FormField label="Full Name" required>
              <input
                type="text"
                value={profile.name}
                onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                placeholder="John Doe"
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </FormField>
            <FormField label="Languages (comma-separated)">
              <input
                type="text"
                value={profile.languages.join(', ')}
                onChange={(e) => setProfile({ ...profile, languages: e.target.value.split(',').map(l => l.trim()) })}
                placeholder="English, Malayalam, Hindi"
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </FormField>
            <Button type="submit" disabled={loading} className="w-full">
              {loading ? 'Registering...' : 'Complete Registration'}
            </Button>
          </form>
        )}
      </Card>
    </div>
  );
}
