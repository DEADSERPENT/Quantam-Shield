'use client';

import React from 'react';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  badge?: string;
}

const PageHero: React.FC<PageHeroProps> = ({ title, subtitle, badge }) => {
  return (
    <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-quantum-black pt-32 pb-20">
      {/* Background effects */}
      <div className="absolute inset-0 bg-mesh-gradient animate-pulse-slow" />
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="absolute inset-0 wave-bg opacity-40" />
      <div className="quantum-lattice opacity-50" />

      {/* Glow orbs */}
      <div className="glow-orb w-96 h-96 bg-quantum-violet/20 top-0 -left-48" />
      <div className="glow-orb w-80 h-80 bg-quantum-cyan/15 bottom-0 -right-40" style={{ animationDelay: '5s' }} />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 text-center">
        {badge && (
          <div className="inline-flex items-center gap-2 glass-card px-5 py-2.5 mb-6 animate-fade-in-down">
            <div className="w-1.5 h-1.5 rounded-full bg-quantum-cyan animate-pulse" />
            <span className="text-sm font-medium text-gray-300">{badge}</span>
          </div>
        )}

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6 animate-fade-in-up">
          <span className="gradient-text">{title}</span>
        </h1>

        {subtitle && (
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
};

export default PageHero;
