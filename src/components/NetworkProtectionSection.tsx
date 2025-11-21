'use client';

import React from 'react';
import { useScrollReveal } from '@/hooks/useScrollEffects';

const StatCard = ({ stat, index }: { stat: { value: string; label: string }; index: number }) => {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`text-center group hover:scale-110 transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="text-2xl md:text-3xl font-display font-bold text-quantum-cyan group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-quantum-cyan group-hover:to-quantum-violet transition-all duration-500">
        {stat.value}
      </div>
      <div className="text-xs text-gray-500 mt-1 group-hover:text-gray-400 transition-colors">{stat.label}</div>
    </div>
  );
};

const LegendItem = ({ item, index }: { item: any; index: number }) => {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`flex items-center gap-3 transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {item.type === 'line-solid' && <div className="w-4 h-0.5 bg-quantum-cyan shadow-neon-cyan" />}
      {item.type === 'line-dashed' && (
        <div className="w-4 h-0.5 bg-red-500/50" style={{ background: 'repeating-linear-gradient(90deg, #ff4444 0, #ff4444 3px, transparent 3px, transparent 6px)' }} />
      )}
      {item.type === 'circle' && <div className="w-3 h-3 rounded-full bg-quantum-cyan shadow-neon-cyan" />}
      <span className="text-sm text-gray-400">{item.label}</span>
    </div>
  );
};

const NetworkProtectionSection: React.FC = () => {
  const { ref: visualRef, isVisible: visualVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section className="section-padding bg-gradient-to-b from-quantum-black to-quantum-charcoal/30 relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 quantum-lattice opacity-30" />

      <div className="relative z-10 container mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            <span className="text-white">Global </span>
            <span className="gradient-text">Protection</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Visualize how QuantumShield creates quantum-safe connections across your network
          </p>
        </div>

        {/* Network visualization */}
        <div
          ref={visualRef}
          className={`relative max-w-5xl mx-auto transition-all duration-1000 ${
            visualVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <div className="relative h-[400px] md:h-[500px]">
            <svg viewBox="0 0 1000 500" className="w-full h-full">
              <defs>
                <filter id="nodeGlow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <linearGradient id="protectedGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#00f5ff" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.8" />
                </linearGradient>
              </defs>

              {/* World map outline (simplified) */}
              <ellipse cx="500" cy="250" rx="450" ry="200" fill="none" stroke="#1a1a2e" strokeWidth="1" opacity="0.5" />
              <ellipse cx="500" cy="250" rx="300" ry="130" fill="none" stroke="#1a1a2e" strokeWidth="0.5" opacity="0.3" />

              {/* Vulnerable paths (red, broken) */}
              <path d="M 150 200 Q 300 150 400 180" className="path-vulnerable" fill="none" />
              <path d="M 600 180 Q 700 150 850 200" className="path-vulnerable" fill="none" />
              <path d="M 200 350 Q 350 380 450 320" className="path-vulnerable" fill="none" />

              {/* Protected paths (cyan, animated) */}
              <path d="M 180 180 Q 350 100 500 150 Q 650 200 820 180" className="path-protected" fill="none">
                <animate attributeName="stroke-dashoffset" from="0" to="-20" dur="2s" repeatCount="indefinite" />
              </path>
              <path d="M 150 280 Q 300 350 500 300 Q 700 250 850 280" className="path-protected" fill="none">
                <animate attributeName="stroke-dashoffset" from="0" to="-20" dur="2.5s" repeatCount="indefinite" />
              </path>
              <path d="M 250 380 Q 400 420 500 380 Q 600 340 750 380" className="path-protected" fill="none">
                <animate attributeName="stroke-dashoffset" from="0" to="-20" dur="3s" repeatCount="indefinite" />
              </path>

              {/* Network nodes */}
              {[
                { x: 150, y: 180, type: 'protected', label: 'HQ' },
                { x: 820, y: 180, type: 'protected', label: 'DC' },
                { x: 500, y: 150, type: 'shield', label: 'QS' },
                { x: 500, y: 300, type: 'protected', label: 'Cloud' },
                { x: 150, y: 280, type: 'protected', label: 'EU' },
                { x: 850, y: 280, type: 'protected', label: 'APAC' },
                { x: 250, y: 380, type: 'protected', label: 'Edge' },
                { x: 750, y: 380, type: 'protected', label: 'IoT' },
                { x: 400, y: 180, type: 'vulnerable', label: '' },
                { x: 600, y: 180, type: 'vulnerable', label: '' },
              ].map((node, index) => (
                <g key={index}>
                  {node.type === 'shield' ? (
                    <>
                      {/* QuantumShield node */}
                      <circle cx={node.x} cy={node.y} r="20" fill="#0a0a0f" stroke="#00f5ff" strokeWidth="2" filter="url(#nodeGlow)" />
                      <circle cx={node.x} cy={node.y} r="25" fill="none" stroke="#00f5ff" strokeWidth="0.5" opacity="0.5">
                        <animate attributeName="r" values="25;30;25" dur="2s" repeatCount="indefinite" />
                        <animate attributeName="opacity" values="0.5;0.2;0.5" dur="2s" repeatCount="indefinite" />
                      </circle>
                      {/* Shield icon */}
                      <path d="M500 140 l-8 4 v8 c0 4 3 8 8 10 5-2 8-6 8-10 v-8 z" fill="#00f5ff" />
                    </>
                  ) : node.type === 'protected' ? (
                    <>
                      <circle cx={node.x} cy={node.y} r="12" fill="#1a1a2e" stroke="#00f5ff" strokeWidth="1.5" filter="url(#nodeGlow)" />
                      <circle cx={node.x} cy={node.y} r="4" fill="#00f5ff" />
                    </>
                  ) : (
                    <>
                      <circle cx={node.x} cy={node.y} r="8" fill="#1a1a2e" stroke="#ff4444" strokeWidth="1" opacity="0.5" />
                      <circle cx={node.x} cy={node.y} r="3" fill="#ff4444" opacity="0.5" />
                    </>
                  )}
                  {node.label && (
                    <text x={node.x} y={node.y + 30} textAnchor="middle" className="fill-gray-500 text-[10px] font-mono">
                      {node.label}
                    </text>
                  )}
                </g>
              ))}

              {/* Data streams */}
              {[500, 480, 520].map((y, i) => (
                <circle key={i} r="2" fill="#00f5ff" opacity="0.8">
                  <animateMotion dur={`${3 + i * 0.5}s`} repeatCount="indefinite">
                    <mpath href={`#protectedPath${i}`} />
                  </animateMotion>
                </circle>
              ))}

              {/* HUD elements */}
              <g opacity="0.5">
                {/* Top left HUD */}
                <rect x="50" y="50" width="120" height="60" fill="none" stroke="#00f5ff" strokeWidth="0.5" />
                <line x1="50" y1="50" x2="30" y2="30" stroke="#00f5ff" strokeWidth="0.5" />
                <text x="60" y="70" className="fill-quantum-cyan text-[10px] font-mono">CONNECTIONS</text>
                <text x="60" y="90" className="fill-white text-sm font-mono">847</text>
                <text x="95" y="90" className="fill-green-400 text-[8px] font-mono">SECURE</text>

                {/* Bottom right HUD */}
                <rect x="830" y="400" width="120" height="60" fill="none" stroke="#7c3aed" strokeWidth="0.5" />
                <text x="840" y="420" className="fill-quantum-violet text-[10px] font-mono">ENCRYPTION</text>
                <text x="840" y="440" className="fill-white text-sm font-mono">ML-KEM-1024</text>
              </g>
            </svg>
          </div>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap justify-center gap-8 mt-8">
          {[
            { type: 'line-solid', label: 'Quantum Protected' },
            { type: 'line-dashed', label: 'Vulnerable' },
            { type: 'circle', label: 'Secured Node' },
          ].map((item, index) => (
            <LegendItem key={item.label} item={item} index={index} />
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          {[
            { value: '256-bit', label: 'AES Equivalent Security' },
            { value: '<1ms', label: 'Authentication Time' },
            { value: '100K+', label: 'Auth/Second' },
            { value: '0', label: 'Known Vulnerabilities' },
          ].map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NetworkProtectionSection;
