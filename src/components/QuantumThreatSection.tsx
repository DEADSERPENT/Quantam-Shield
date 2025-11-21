'use client';

import React from 'react';
import { useScrollReveal } from '@/hooks/useScrollEffects';

const ThreatPanel = ({ isLeft }: { isLeft: boolean }) => {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  if (isLeft) {
    return (
      <div
        ref={ref}
        className={`glass-card p-8 relative group hover:scale-105 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
        }`}
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-500 to-orange-500" />

        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 rounded-full bg-yellow-500/10 border border-yellow-500/30 flex items-center justify-center group-hover:scale-110 transition-transform">
            <svg className="w-8 h-8 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-yellow-500 group-hover:to-orange-500 transition-all duration-500">Classical Encryption</h3>
        </div>

        <p className="text-gray-400 mb-6 group-hover:text-gray-300 transition-colors">
          Current RSA and ECC encryption relies on mathematical problems that are computationally hard for classical computers but trivial for quantum computers.
        </p>

        <div className="relative h-32 bg-quantum-black/50 rounded-lg overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              <svg className="w-12 h-12 text-yellow-500/60" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
              </svg>
              <div className="absolute inset-0 opacity-60">
                <div className="absolute top-1/4 left-1/2 w-8 h-0.5 bg-red-500 transform -rotate-45" />
                <div className="absolute top-1/2 left-1/3 w-6 h-0.5 bg-red-500 transform rotate-30" />
              </div>
            </div>
          </div>
          <div className="absolute bottom-4 left-4 right-4">
            <div className="text-xs text-gray-500 mb-1">Vulnerability Level</div>
            <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
              <div className="h-full w-3/4 bg-gradient-to-r from-yellow-500 to-red-500 rounded-full" />
            </div>
          </div>
        </div>

        <div className="mt-4 text-sm text-gray-500">
          <span className="text-yellow-500">Risk Level:</span> High (by 2030)
        </div>
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className={`glass-card p-8 relative group hover:scale-105 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
      }`}
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-quantum-magenta" />

      <div className="flex items-center gap-4 mb-6">
        <div className="w-16 h-16 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center animate-pulse group-hover:scale-110 transition-transform">
          <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-red-500 group-hover:to-quantum-magenta transition-all duration-500">Quantum Breaking</h3>
      </div>

      <p className="text-gray-400 mb-6 group-hover:text-gray-300 transition-colors">
        Quantum computers use Shor&apos;s algorithm to factor large numbers exponentially faster, breaking RSA-2048 in hours instead of billions of years.
      </p>

      <div className="relative h-32 bg-quantum-black/50 rounded-lg overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative">
            <svg className="w-16 h-16" viewBox="0 0 64 64">
              <defs>
                <linearGradient id="shatterGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ff4444" />
                  <stop offset="100%" stopColor="#ff006e" />
                </linearGradient>
              </defs>
              <polygon points="32,8 20,20 32,32" fill="url(#shatterGrad)" opacity="0.9" transform="translate(-2,-2)" />
              <polygon points="32,8 44,20 32,32" fill="url(#shatterGrad)" opacity="0.7" transform="translate(2,-1)" />
              <polygon points="20,20 12,40 32,32" fill="url(#shatterGrad)" opacity="0.8" transform="translate(-3,1)" />
              <polygon points="44,20 52,40 32,32" fill="url(#shatterGrad)" opacity="0.6" transform="translate(3,2)" />
              <polygon points="12,40 32,56 32,32" fill="url(#shatterGrad)" opacity="0.7" transform="translate(-1,3)" />
              <polygon points="52,40 32,56 32,32" fill="url(#shatterGrad)" opacity="0.5" transform="translate(1,3)" />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-8 h-8 bg-red-500/30 rounded-full animate-ping" />
            </div>
          </div>
        </div>
        <div className="absolute bottom-4 left-4 right-4">
          <div className="text-xs text-gray-500 mb-1">Threat Intensity</div>
          <div className="threat-meter">
            <div className="threat-meter-fill" />
          </div>
        </div>
      </div>

      <div className="mt-4 text-sm text-gray-500">
        <span className="text-red-500">Status:</span> Active Threat
      </div>
    </div>
  );
};

const QuantumThreatSection: React.FC = () => {
  const { ref: solutionRef, isVisible: solutionVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section className="section-padding bg-quantum-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-quantum-charcoal/50 to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            <span className="text-white">How </span>
            <span className="text-quantum-magenta">Quantum Attacks</span>
            <span className="text-white"> Work</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Understanding the threat landscape of quantum computing on current encryption standards
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <ThreatPanel isLeft={true} />
          <ThreatPanel isLeft={false} />
        </div>

        <div
          ref={solutionRef}
          className={`mt-12 text-center transition-all duration-700 ${
            solutionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-3 glass-card px-6 py-3 hover:scale-105 transition-all duration-300">
            <div className="w-3 h-3 bg-quantum-cyan rounded-full animate-pulse shadow-neon-cyan" />
            <span className="text-quantum-cyan font-mono text-sm">
              QuantumShield uses NIST-approved post-quantum algorithms immune to these attacks
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuantumThreatSection;
