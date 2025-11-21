import Header from '@/components/Header';
import PageHero from '@/components/PageHero';
import Footer from '@/components/Footer';

export default function CareersPage() {
  const openings = [
    {
      title: 'Senior Cryptography Engineer',
      department: 'Engineering',
      location: 'Bengaluru, IN / Remote',
      type: 'Full-time',
    },
    {
      title: 'Quantum Physics Researcher',
      department: 'R&D',
      location: 'Bengaluru, IN',
      type: 'Full-time',
    },
    {
      title: 'Hardware Security Engineer',
      department: 'Engineering',
      location: 'Bengaluru, IN / Remote',
      type: 'Full-time',
    },
    {
      title: 'Enterprise Account Executive',
      department: 'Sales',
      location: 'Remote',
      type: 'Full-time',
    },
  ];

  const benefits = [
    { icon: 'money', text: 'Competitive salary + equity' },
    { icon: 'health', text: 'Premium health, dental, vision' },
    { icon: 'vacation', text: 'Unlimited PTO' },
    { icon: 'tools', text: 'Latest hardware & tools' },
    { icon: 'learning', text: 'Learning & development budget' },
    { icon: 'remote', text: 'Remote-friendly' },
  ];

  const renderBenefitIcon = (type: string, index: number) => {
    const gradientId = `benefitGrad-${index}`;
    const glowId = `benefitGlow-${index}`;

    const baseProps = {
      viewBox: "0 0 64 64",
      className: "w-16 h-16 mx-auto mb-4",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    };

    const defs = (
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00ffff" />
          <stop offset="50%" stopColor="#8b5cf6" />
          <stop offset="100%" stopColor="#00ffff" />
        </linearGradient>
        <filter id={glowId}>
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
    );

    switch(type) {
      case 'money':
        return (
          <svg {...baseProps}>
            {defs}
            <circle cx="32" cy="32" r="28" fill={`url(#${gradientId})`} opacity="0.1" />
            <circle cx="32" cy="32" r="24" stroke={`url(#${gradientId})`} strokeWidth="2" fill="none" filter={`url(#${glowId})`} />
            <path d="M32 16 L36 20 L28 20 Z" fill={`url(#${gradientId})`} opacity="0.8" />
            <rect x="30" y="20" width="4" height="24" fill={`url(#${gradientId})`} opacity="0.8" />
            <path d="M32 44 L28 48 L36 48 Z" fill={`url(#${gradientId})`} opacity="0.8" />
            <text x="32" y="38" textAnchor="middle" fontSize="24" fontWeight="bold" fill={`url(#${gradientId})`} filter={`url(#${glowId})`}>₹</text>
          </svg>
        );
      case 'health':
        return (
          <svg {...baseProps}>
            {defs}
            <circle cx="32" cy="32" r="28" fill={`url(#${gradientId})`} opacity="0.1" />
            <path d="M32 20 L38 26 L38 38 L32 44 L26 38 L26 26 Z" stroke={`url(#${gradientId})`} strokeWidth="2" fill="none" filter={`url(#${glowId})`} />
            <path d="M32 26 V38 M26 32 H38" stroke={`url(#${gradientId})`} strokeWidth="2.5" strokeLinecap="round" filter={`url(#${glowId})`} />
            <circle cx="32" cy="32" r="2" fill={`url(#${gradientId})`} />
          </svg>
        );
      case 'vacation':
        return (
          <svg {...baseProps}>
            {defs}
            <circle cx="32" cy="32" r="28" fill={`url(#${gradientId})`} opacity="0.1" />
            <circle cx="32" cy="32" r="20" stroke={`url(#${gradientId})`} strokeWidth="2" fill="none" filter={`url(#${glowId})`} />
            <path d="M32 16 V32 L42 38" stroke={`url(#${gradientId})`} strokeWidth="2" strokeLinecap="round" filter={`url(#${glowId})`} />
            <circle cx="32" cy="32" r="2" fill={`url(#${gradientId})`} />
          </svg>
        );
      case 'tools':
        return (
          <svg {...baseProps}>
            {defs}
            <circle cx="32" cy="32" r="28" fill={`url(#${gradientId})`} opacity="0.1" />
            <path d="M20 32 L32 20 L44 32 L32 44 Z" stroke={`url(#${gradientId})`} strokeWidth="2" fill="none" filter={`url(#${glowId})`} />
            <circle cx="32" cy="26" r="3" fill={`url(#${gradientId})`} opacity="0.8" />
            <circle cx="32" cy="38" r="3" fill={`url(#${gradientId})`} opacity="0.8" />
            <path d="M32 20 V44 M20 32 H44" stroke={`url(#${gradientId})`} strokeWidth="1" opacity="0.3" />
          </svg>
        );
      case 'learning':
        return (
          <svg {...baseProps}>
            {defs}
            <circle cx="32" cy="32" r="28" fill={`url(#${gradientId})`} opacity="0.1" />
            <path d="M16 28 L32 20 L48 28 L32 36 Z" stroke={`url(#${gradientId})`} strokeWidth="2" fill="none" filter={`url(#${glowId})`} />
            <path d="M20 30 V38 L32 44 L44 38 V30" stroke={`url(#${gradientId})`} strokeWidth="2" fill="none" filter={`url(#${glowId})`} />
            <circle cx="32" cy="28" r="2" fill={`url(#${gradientId})`} />
          </svg>
        );
      case 'remote':
        return (
          <svg {...baseProps}>
            {defs}
            <circle cx="32" cy="32" r="28" fill={`url(#${gradientId})`} opacity="0.1" />
            <circle cx="32" cy="32" r="20" stroke={`url(#${gradientId})`} strokeWidth="2" fill="none" filter={`url(#${glowId})`} />
            <path d="M32 12 V20 M32 44 V52 M12 32 H20 M44 32 H52" stroke={`url(#${gradientId})`} strokeWidth="2" strokeLinecap="round" filter={`url(#${glowId})`} />
            <circle cx="32" cy="32" r="8" stroke={`url(#${gradientId})`} strokeWidth="2" fill={`url(#${gradientId})`} opacity="0.2" filter={`url(#${glowId})`} />
            <circle cx="32" cy="32" r="3" fill={`url(#${gradientId})`} />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <main className="bg-quantum-black min-h-screen">
      <Header />
      <PageHero
        title="Careers"
        subtitle="Join us in securing the quantum future"
        badge="We're Hiring"
      />

      {/* Culture */}
      <section className="section-padding">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            <span className="gradient-text">Work on What Matters</span>
          </h2>
          <p className="text-xl text-gray-400 leading-relaxed">
            We're a team of cryptographers, physicists, and engineers building the security
            infrastructure for the quantum age. Join us in protecting the world's most sensitive data.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-quantum-charcoal/30">
        <div className="container mx-auto">
          <h2 className="text-3xl font-display font-bold mb-12 text-center">
            Benefits & Perks
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={benefit.text} className="glass-card p-6 text-center">
                {renderBenefitIcon(benefit.icon, index)}
                <div className="text-gray-300">{benefit.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Openings */}
      <section className="section-padding">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-display font-bold mb-12 text-center">
            Open Positions
          </h2>
          <div className="space-y-4">
            {openings.map((job) => (
              <div key={job.title} className="glass-card p-8 hover:scale-105 transition-transform cursor-pointer group">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-quantum-cyan transition-colors">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                      <span>{job.department}</span>
                      <span>•</span>
                      <span>{job.location}</span>
                      <span>•</span>
                      <span>{job.type}</span>
                    </div>
                  </div>
                  <button className="btn-secondary !py-3 !px-8 whitespace-nowrap">
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
