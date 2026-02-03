import Link from 'next/link';
import { Button, Card, Badge } from '../components/ui';

const roles = [
  {
    id: 'worker',
    name: 'Migrant Worker',
    description: 'Access your health records, appointments, and prescriptions anytime',
    href: '/auth/worker',
    icon: '🏥',
    color: 'from-emerald-500 to-teal-600',
    light: 'bg-emerald-50'
  },
  {
    id: 'doctor',
    name: 'Healthcare Provider',
    description: 'Manage patient records, create prescriptions, track visits',
    href: '/auth/provider',
    icon: '👨‍⚕️',
    color: 'from-blue-500 to-indigo-600',
    light: 'bg-blue-50'
  },
  {
    id: 'pharmacy',
    name: 'Pharmacy Manager',
    description: 'Scan QR IDs, manage prescriptions, track dispensing',
    href: '/auth/provider',
    icon: '💊',
    color: 'from-violet-500 to-purple-600',
    light: 'bg-violet-50'
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800">
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 border-b border-slate-700/50 bg-slate-900/80 backdrop-blur-sm sticky top-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="text-3xl">🏥</div>
              <div>
                <div className="text-2xl font-bold bg-gradient-to-r from-emerald-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">HealthID</div>
                <div className="text-xs text-slate-400">Digital Health for Migrant Workers</div>
              </div>
            </div>
            <Link href="/auth/worker">
              <Button size="sm" variant="primary">Sign In</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        <div className="text-center mb-16">
          <h1 className="text-5xl sm:text-7xl font-bold text-white mb-6 leading-tight">
            Your Health,
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent block">Always in Your Hands</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8 leading-relaxed">
            Secure, portable health records with QR scanning. One ID, lifetime healthcare access. Available in 5 languages for migrant workers worldwide.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Badge variant="success" className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">✓ Secure & Private</Badge>
            <Badge variant="success" className="bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">✓ QR Scanning</Badge>
            <Badge variant="success" className="bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">✓ 5 Languages</Badge>
          </div>
        </div>

        {/* Role Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {roles.map((role) => (
            <Link key={role.id} href={role.href}>
              <div className="group relative h-full cursor-pointer">
                <div className={`absolute inset-0 bg-gradient-to-br ${role.color} rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl`}></div>
                <Card className="relative bg-slate-800/80 backdrop-blur border-slate-700/50 hover:border-slate-600 h-full flex flex-col">
                  <div className="text-6xl mb-4">{role.icon}</div>
                  <h2 className="text-2xl font-bold text-white mb-3">{role.name}</h2>
                  <p className="text-slate-300 mb-6 flex-1 text-sm leading-relaxed">{role.description}</p>
                  <Button variant="primary" className={`w-full bg-gradient-to-r ${role.color} border-0 hover:opacity-90`}>
                    Get Started →
                  </Button>
                </Card>
              </div>
            </Link>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-3 gap-4 mb-20">
          {[
            { label: 'Health Records', value: '100K+' },
            { label: 'Languages', value: '5' },
            { label: 'Uptime', value: '99.9%' }
          ].map((stat, i) => (
            <Card key={i} className="bg-slate-800/50 border-slate-700/50 text-center py-8">
              <div className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">{stat.value}</div>
              <div className="text-sm text-slate-400 mt-2">{stat.label}</div>
            </Card>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 bg-gradient-to-r from-indigo-900/40 via-slate-900 to-emerald-900/40 border-y border-slate-700/50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Powerful Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                icon: '🔐',
                title: 'End-to-End Encryption',
                desc: 'Your health data is encrypted and yours alone' 
              },
              { 
                icon: '📱',
                title: 'QR Health ID',
                desc: 'Instant record access with a single scan' 
              },
              { 
                icon: '🌍',
                title: 'Multilingual',
                desc: 'Available in English, Malayalam, Hindi, Bengali & Tamil' 
              },
              { 
                icon: '⚡',
                title: 'Instant Sync',
                desc: 'Real-time updates across all providers' 
              },
              { 
                icon: '👥',
                title: 'Role-Based Access',
                desc: 'Worker, Doctor, Pharmacy & Admin portals' 
              },
              { 
                icon: '📋',
                title: 'Lab Reports',
                desc: 'Upload and manage all medical documents' 
              },
              { 
                icon: '💬',
                title: 'AI Chatbot',
                desc: 'Get health advice 24/7 in your language' 
              },
              { 
                icon: '🏥',
                title: 'Provider Network',
                desc: 'Connect with trusted healthcare partners' 
              }
            ].map((feat, i) => (
              <Card key={i} className="bg-slate-800/50 border-slate-700/50 hover:border-slate-600 p-6">
                <div className="text-3xl mb-3">{feat.icon}</div>
                <h3 className="font-semibold text-white mb-2">{feat.title}</h3>
                <p className="text-sm text-slate-400">{feat.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-gradient-to-r from-emerald-600 via-cyan-600 to-indigo-600 rounded-3xl p-12 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Take Control of Your Health?</h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">Join thousands of migrant workers managing their health with confidence and security.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/auth/worker">
              <Button size="lg" variant="primary" className="bg-white text-indigo-600 hover:bg-slate-100 border-0">
                Register as Worker
              </Button>
            </Link>
            <Link href="/auth/provider">
              <Button size="lg" variant="secondary" className="bg-slate-900 text-white hover:bg-slate-800">
                Sign in as Provider
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-slate-700/50 bg-slate-900/50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-slate-400 text-sm">
          <p>© 2026 HealthID. Secure health records for migrant workers worldwide.</p>
        </div>
      </footer>
    </div>
  );
}
