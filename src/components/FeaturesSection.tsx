'use client';

import React from 'react';
import { LockIcon3D, ChipIcon3D, QuantumIcon3D, ShieldIcon3D } from './Icons3D';
import { useScrollReveal } from '@/hooks/useScrollEffects';

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
  accentColor: 'cyan' | 'violet' | 'magenta';
}

const getAccentClasses = (color: Feature['accentColor']) => {
  switch (color) {
    case 'cyan':
      return {
        border: 'hover:border-quantum-cyan/50',
        icon: 'text-quantum-cyan',
        glow: 'group-hover:shadow-neon-cyan',
        bg: 'from-quantum-cyan/10 to-quantum-cyan/5',
      };
    case 'violet':
      return {
        border: 'hover:border-quantum-violet/50',
        icon: 'text-quantum-violet',
        glow: 'group-hover:shadow-neon-violet',
        bg: 'from-quantum-violet/10 to-quantum-violet/5',
      };
    case 'magenta':
      return {
        border: 'hover:border-quantum-magenta/50',
        icon: 'text-quantum-magenta',
        glow: 'group-hover:shadow-neon-magenta',
        bg: 'from-quantum-magenta/10 to-quantum-magenta/5',
      };
  }
};

const features: Feature[] = [
  {
    title: 'Quantum-Safe Encryption',
    description: 'Protected by NIST-approved ML-KEM and ML-DSA algorithms, immune to quantum computer attacks.',
    icon: <LockIcon3D className="w-16 h-16" />,
    accentColor: 'cyan',
  },
  {
    title: 'Hardware-Stored Keys',
    description: 'Private keys never leave the device. Secure element provides tamper-resistant storage.',
    icon: <ChipIcon3D className="w-16 h-16" />,
    accentColor: 'violet',
  },
  {
    title: 'Built-in QRNG',
    description: 'Quantum random number generator produces true randomness from quantum vacuum fluctuations.',
    icon: <QuantumIcon3D className="w-16 h-16" />,
    accentColor: 'cyan',
  },
  {
    title: 'Zero-Trust Auth',
    description: 'Passwordless authentication with FIDO2/WebAuthn. Works with all major platforms.',
    icon: <ShieldIcon3D className="w-16 h-16" />,
    accentColor: 'magenta',
  },
];

const FeatureCard = ({ feature, index }: { feature: Feature; index: number }) => {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  const accent = getAccentClasses(feature.accentColor);

  return (
    <div
      ref={ref}
      className={`group glass-card-hover p-8 ${accent.border} ${accent.glow} relative overflow-hidden transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${accent.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
      <div className="relative mb-6">
        <div className="relative z-10 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
          {feature.icon}
        </div>
        <div className={`absolute inset-0 bg-gradient-to-br ${accent.bg} rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
      </div>
      <h3 className="text-xl font-semibold text-white mb-3 font-display relative z-10 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-quantum-cyan group-hover:to-quantum-violet transition-all duration-500">
        {feature.title}
      </h3>
      <p className="text-gray-400 text-sm leading-relaxed relative z-10 group-hover:text-gray-300 transition-colors">
        {feature.description}
      </p>
      <div className="absolute top-0 right-0 w-24 h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className={`absolute top-4 right-4 w-12 h-px bg-gradient-to-l ${accent.icon === 'text-quantum-cyan' ? 'from-quantum-cyan' : accent.icon === 'text-quantum-violet' ? 'from-quantum-violet' : 'from-quantum-magenta'} to-transparent`} />
        <div className={`absolute top-4 right-4 h-12 w-px bg-gradient-to-b ${accent.icon === 'text-quantum-cyan' ? 'from-quantum-cyan' : accent.icon === 'text-quantum-violet' ? 'from-quantum-violet' : 'from-quantum-magenta'} to-transparent`} />
      </div>
    </div>
  );
};

const FeaturesSection: React.FC = () => {
  return (
    <section className="section-padding bg-quantum-black relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-glow opacity-20" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-glow opacity-20" />
      </div>
      <div className="relative z-10 container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            <span className="text-white">Advanced </span>
            <span className="gradient-text">Features</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Enterprise-grade security features designed for the quantum computing era
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-6 flex-wrap justify-center">
            {['FIDO2', 'WebAuthn', 'PKCS#11', 'OpenPGP'].map((standard) => (
              <span key={standard} className="text-sm font-mono text-gray-500 glass-card px-4 py-2 hover:text-quantum-cyan hover:border-quantum-cyan/30 transition-all duration-300">
                {standard}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
