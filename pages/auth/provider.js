import { useState } from 'react';
import { Button, Card, FormField, Badge } from '../../components/ui';

const PROVIDER_ROLES = ['doctor', 'ngo', 'pharmacy', 'admin'];

export default function ProviderAuth() {
  const [email, setEmail] = useState('');
  const [selectedRole, setSelectedRole] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGoogleSignIn = async () => {
    setLoading(true);
    // Simulate Google OAuth
    setTimeout(() => {
      if (email) {
        alert(`Signed in as ${email}`);
        setLoading(false);
      }
    }, 1000);
  };

  const handleRoleSelect = (role) => {
    setSelectedRole(role);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-cyan-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <h1 className="text-2xl font-bold text-slate-900 mb-6">Healthcare Provider Sign In</h1>

        <div className="space-y-4">
          <FormField label="Email Address" required>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="doctor@example.com"
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </FormField>

          <Button 
            onClick={handleGoogleSignIn} 
            disabled={loading || !email}
            variant="secondary"
            className="w-full"
          >
            {loading ? 'Signing in...' : '🔗 Sign in with Google'}
          </Button>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-slate-600">Select Your Role</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            {PROVIDER_ROLES.map((role) => (
              <button
                key={role}
                onClick={() => handleRoleSelect(role)}
                className={`p-3 rounded-lg border-2 transition-all ${
                  selectedRole === role
                    ? 'border-indigo-600 bg-indigo-50'
                    : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="text-sm font-medium capitalize text-slate-900">{role}</div>
              </button>
            ))}
          </div>

          {selectedRole && (
            <Button 
              onClick={() => alert(`Logged in as ${selectedRole}`)}
              disabled={loading}
              className="w-full"
            >
              Continue as {selectedRole}
            </Button>
          )}
        </div>
      </Card>
    </div>
  );
}
