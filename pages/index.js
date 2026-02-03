import Link from 'next/link';
import { Button, Card, Badge } from '../components/ui';

const roles = [
  {
    id: 'worker',
    name: 'Migrant Worker',
    description: 'Access your health records, appointments, and prescriptions anytime',
    href: '/auth/worker',
    icon: '🏥',
    bgColor: 'bg-emerald-50',
    borderColor: 'border-emerald-200',
    gradientBg: 'from-emerald-500 to-teal-600'
  },
  {
    id: 'doctor',
    name: 'Healthcare Provider',
    description: 'Manage patient records, create prescriptions, track visits',
    href: '/auth/provider',
    icon: '👨‍⚕️',
    bgColor: 'bg-indigo-50',
    borderColor: 'border-indigo-200',
    gradientBg: 'from-indigo-500 to-blue-600'
  },
  {
    id: 'pharmacy',
    name: 'Pharmacy Manager',
    description: 'Scan QR IDs, manage prescriptions, track dispensing',
    href: '/auth/provider',
    icon: '💊',
    bgColor: 'bg-cyan-50',
    borderColor: 'border-cyan-200',
    gradientBg: 'from-cyan-500 to-blue-500'
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center gap-2">
              <div className="text-3xl">🏥</div>
              <div>
                <div className="text-xl font-bold text-indigo-600">HealthID</div>
                <div className="text-xs text-slate-500">Healthcare for Workers</div>
              </div>
            </Link>
            <Link href="/auth/worker">
              <Button size="sm">Sign In</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-6xl sm:text-7xl font-bold text-slate-900 mb-6 leading-tight">
            Your Health,
            <span className="block bg-gradient-to-r from-indigo-600 via-cyan-500 to-emerald-500 bg-clip-text text-transparent">Always in Your Hands</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            Secure, portable health records with QR scanning. One ID, lifetime healthcare access. Available in 5 languages for migrant workers worldwide.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200">Security First</Badge>
            <Badge className="bg-indigo-100 text-indigo-700 border-indigo-200">QR Scanning</Badge>
            <Badge className="bg-cyan-100 text-cyan-700 border-cyan-200">5 Languages</Badge>
          </div>
        </div>

        {/* Role Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {roles.map((role) => (
            <Link key={role.id} href={role.href}>
              <div className="group h-full cursor-pointer">
                <Card className={`${role.bgColor} border-2 ${role.borderColor} hover:shadow-card h-full flex flex-col transition-all duration-300`}>
                  <div className="text-6xl mb-4">{role.icon}</div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-2">{role.name}</h2>
                  <p className="text-slate-600 mb-6 flex-1 text-sm leading-relaxed">{role.description}</p>
                  <Button className={`w-full bg-gradient-to-r ${role.gradientBg} text-white border-0 hover:shadow-lg`}>
                    Get Started
                  </Button>
                </Card>
              </div>
            </Link>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {[
            { label: 'Health Records', value: '100K+', icon: '📊' },
            { label: 'Languages Supported', value: '5', icon: '🌍' },
            { label: 'Uptime Guarantee', value: '99.9%', icon: '⚡' }
          ].map((stat, i) => (
            <Card key={i} className="bg-white text-center py-8">
              <div className="text-4xl mb-3">{stat.icon}</div>
              <div className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text text-transparent">{stat.value}</div>
              <div className="text-sm text-slate-600 mt-2">{stat.label}</div>
            </Card>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gradient-to-r from-indigo-50 via-cyan-50 to-emerald-50 border-y border-slate-200 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Powerful Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🔐', title: 'Secure & Private', desc: 'End-to-end encrypted health records' },
              { icon: '📱', title: 'QR Health ID', desc: 'Instant access with a single scan' },
              { icon: '🌍', title: 'Multilingual', desc: 'English, Malayalam, Hindi, Bengali, Tamil' },
              { icon: '⚡', title: 'Real-time Sync', desc: 'Instant updates across all providers' },
              { icon: '👥', title: 'Role-Based', desc: 'Worker, Doctor, Pharmacy, Admin access' },
              { icon: '📋', title: 'Lab Reports', desc: 'Upload and manage medical documents' },
              { icon: '💬', title: 'AI Assistant', desc: 'Health advice 24/7 in your language' },
              { icon: '🏥', title: 'Provider Network', desc: 'Connect with trusted healthcare partners' }
            ].map((feat, i) => (
              <Card key={i} className="bg-white border-slate-200 hover:shadow-card">
                <div className="text-4xl mb-3">{feat.icon}</div>
                <h3 className="font-semibold text-slate-900 mb-2">{feat.title}</h3>
                <p className="text-sm text-slate-600">{feat.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Card className="bg-gradient-to-r from-indigo-600 via-cyan-600 to-emerald-600 border-0 text-center text-white py-16">
          <h2 className="text-4xl font-bold mb-4">Ready to Take Control?</h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">Join thousands of migrant workers managing their health with confidence and security.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/auth/worker">
              <Button size="lg" className="bg-white text-indigo-600 hover:bg-slate-100 border-0">
                Register as Worker
              </Button>
            </Link>
            <Link href="/auth/provider">
              <Button size="lg" variant="secondary" className="bg-slate-900/20 text-white hover:bg-slate-900/30 border-white/30">
                Sign in as Provider
              </Button>
            </Link>
          </div>
        </Card>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-slate-600 text-sm">
          <p>© 2026 HealthID. Secure health records for migrant workers worldwide.</p>
        </div>
      </footer>
    </div>
  );
}
