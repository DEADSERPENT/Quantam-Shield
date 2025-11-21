'use client';

import Header from '@/components/Header';
import PageHero from '@/components/PageHero';
import ExplodedViewSection from '@/components/ExplodedViewSection';
import Footer from '@/components/Footer';
import { LockIcon3D, QuantumIcon3D, ShieldIcon3D } from '@/components/Icons3D';
import { useScrollReveal } from '@/hooks/useScrollEffects';

const TechSection = ({ tech, index, icon }: { tech: any; index: number; icon: React.ReactNode }) => {
  const { ref: contentRef, isVisible: contentVisible } = useScrollReveal<HTMLDivElement>();
  const { ref: iconRef, isVisible: iconVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <div
      className={`grid lg:grid-cols-2 gap-12 items-center ${
        index % 2 === 1 ? 'lg:flex-row-reverse' : ''
      }`}
    >
      <div
        ref={contentRef}
        className={`${index % 2 === 1 ? 'lg:order-2' : ''} transition-all duration-700 ${
          contentVisible ? 'opacity-100 translate-x-0' : `opacity-0 ${index % 2 === 1 ? 'translate-x-12' : '-translate-x-12'}`
        }`}
      >
        <h3 className="text-3xl font-display font-bold mb-4">
          <span className="gradient-text">{tech.title}</span>
        </h3>
        <p className="text-lg text-gray-400 mb-6">{tech.description}</p>
        <ul className="space-y-3">
          {tech.details.map((detail: string, idx: number) => (
            <li
              key={detail}
              className="flex items-start gap-3 group/item"
              style={{
                transitionDelay: `${idx * 50}ms`,
                opacity: contentVisible ? 1 : 0,
                transform: contentVisible ? 'translateX(0)' : `translateX(${index % 2 === 1 ? '20px' : '-20px'})`,
                transition: 'all 0.5s ease-out'
              }}
            >
              <div className="w-6 h-6 rounded-full bg-quantum-cyan/10 border border-quantum-cyan/30 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform">
                <div className="w-2 h-2 rounded-full bg-quantum-cyan group-hover/item:shadow-neon-cyan transition-all" />
              </div>
              <span className="text-gray-300 group-hover/item:text-gray-200 transition-colors">{detail}</span>
            </li>
          ))}
        </ul>
      </div>
      <div
        ref={iconRef}
        className={`${index % 2 === 1 ? 'lg:order-1' : ''} transition-all duration-700 ${
          iconVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        <div className="glass-card p-12 aspect-square flex items-center justify-center group relative overflow-hidden hover:scale-105 transition-all duration-500">
          {/* Background gradient on hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-quantum-cyan/5 via-transparent to-quantum-violet/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Icon with animation */}
          <div className="relative z-10 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
            {icon}
          </div>

          {/* Icon glow effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-quantum-cyan/20 to-quantum-violet/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
      </div>
    </div>
  );
};

const SpecCard = ({ spec, index }: { spec: [string, string]; index: number }) => {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  const [label, value] = spec;

  return (
    <div
      ref={ref}
      className={`glass-card p-6 group hover:scale-105 transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 50}ms` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-quantum-cyan/5 via-transparent to-quantum-violet/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
      <div className="text-sm text-gray-500 mb-2 relative z-10 group-hover:text-gray-400 transition-colors">{label}</div>
      <div className="text-white font-mono text-sm relative z-10 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-quantum-cyan group-hover:to-quantum-violet transition-all duration-500">{value}</div>
    </div>
  );
};

export default function TechnologyPage() {
  const technologies = [
    {
      title: 'Post-Quantum Cryptography',
      description: 'NIST-standardized algorithms resistant to quantum attacks',
      details: [
        'ML-KEM (Module-Lattice-Based Key Encapsulation)',
        'ML-DSA (Module-Lattice-Based Digital Signature)',
        '256-bit equivalent security level',
        'Backward compatible with classical systems',
      ],
    },
    {
      title: 'Quantum Random Number Generator',
      description: 'True randomness from quantum vacuum fluctuations',
      details: [
        'Photonic quantum entropy source',
        '1 Gbps entropy generation rate',
        'NIST SP 800-90B compliant',
        'Continuous health monitoring',
      ],
    },
    {
      title: 'Secure Element',
      description: 'Tamper-resistant cryptographic processor',
      details: [
        'Common Criteria EAL6+ certified',
        'Physical tamper detection mesh',
        'Side-channel attack countermeasures',
        'Secure key storage and operations',
      ],
    },
  ];

  return (
    <main className="bg-quantum-black min-h-screen">
      <Header />
      <PageHero
        title="Technology"
        subtitle="Cutting-edge quantum security technology"
        badge="Technical Deep-Dive"
      />

      <ExplodedViewSection />

      {/* Technology Details */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="space-y-16">
            {technologies.map((tech, index) => (
              <TechSection
                key={tech.title}
                tech={tech}
                index={index}
                icon={
                  index === 0 ? <LockIcon3D className="w-32 h-32" /> :
                  index === 1 ? <QuantumIcon3D className="w-32 h-32" /> :
                  <ShieldIcon3D className="w-32 h-32" />
                }
              />
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="section-padding bg-quantum-charcoal/30">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-12 text-center">
            Technical Specifications
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              ['Cryptographic Algorithms', 'ML-KEM-1024, ML-DSA-87, AES-256'],
              ['Random Number Generation', 'Quantum TRNG, NIST SP 800-90B'],
              ['Secure Element', 'CC EAL6+, FIPS 140-3 Level 3'],
              ['Interface', 'USB-C 3.2, NFC Type-A, BLE 5.2'],
              ['Performance', '< 1ms authentication, 100K ops/sec'],
              ['Power', 'Bus-powered, < 100mA @ 5V'],
            ].map((spec, index) => (
              <SpecCard key={spec[0]} spec={spec as [string, string]} index={index} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
