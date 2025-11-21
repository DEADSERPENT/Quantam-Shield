'use client';

import React from 'react';
import { useScrollReveal } from '@/hooks/useScrollEffects';

const SpecCard = ({ spec, index }: { spec: any; index: number }) => {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`text-center glass-card p-4 group hover:scale-105 transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className={`text-sm font-mono ${spec.color === 'cyan' ? 'text-quantum-cyan' : spec.color === 'violet' ? 'text-quantum-violet' : 'text-gray-400'} group-hover:scale-110 transition-transform`}>
        {spec.value}
      </div>
      <div className="text-xs text-gray-500 mt-1 group-hover:text-gray-400 transition-colors">{spec.label}</div>
    </div>
  );
};

const ExplodedViewSection: React.FC = () => {
  const { ref: diagramRef, isVisible: diagramVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section className="section-padding bg-gradient-to-b from-quantum-black via-quantum-charcoal/30 to-quantum-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-glow opacity-30" />
      </div>

      <div className="relative z-10 container mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            <span className="text-white">Inside the </span>
            <span className="gradient-text">Technology</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore the quantum-grade components that make QuantumShield the most advanced security key ever created
          </p>
        </div>

        {/* Exploded view diagram */}
        <div
          ref={diagramRef}
          className={`relative max-w-4xl mx-auto transition-all duration-1000 ${
            diagramVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <div className="relative h-[600px] md:h-[700px]">
            {/* SVG Exploded View - Enhanced */}
            <svg viewBox="0 0 900 700" className="w-full h-full">
              <defs>
                <linearGradient id="titaniumGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#6a6a6a" />
                  <stop offset="50%" stopColor="#4a4a4a" />
                  <stop offset="100%" stopColor="#2a2a2a" />
                </linearGradient>
                <linearGradient id="pqcChipGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#9333ea" />
                  <stop offset="50%" stopColor="#7c3aed" />
                  <stop offset="100%" stopColor="#6d28d9" />
                </linearGradient>
                <linearGradient id="qrngGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00f5ff" />
                  <stop offset="50%" stopColor="#0ea5e9" />
                  <stop offset="100%" stopColor="#0284c7" />
                </linearGradient>
                <linearGradient id="circuitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#166534" />
                  <stop offset="50%" stopColor="#14532d" />
                  <stop offset="100%" stopColor="#052e16" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <filter id="shadow">
                  <feGaussianBlur in="SourceAlpha" stdDeviation="6"/>
                  <feOffset dx="0" dy="8" result="offsetblur"/>
                  <feComponentTransfer>
                    <feFuncA type="linear" slope="0.4"/>
                  </feComponentTransfer>
                  <feMerge>
                    <feMergeNode/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>

              {/* Layer 1: Titanium Shell */}
              <g transform="translate(300, 60)" filter="url(#shadow)">
                <rect x="0" y="0" width="300" height="80" rx="12" fill="url(#titaniumGrad)" opacity="0.95" stroke="#00f5ff" strokeWidth="1.5" />
                {/* Brushed metal texture */}
                {[...Array(8)].map((_, i) => (
                  <line key={i} x1="5" y1={5 + i * 10} x2="295" y2={5 + i * 10}
                        stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
                ))}
                {/* LED openings */}
                <circle cx="120" cy="40" r="8" fill="rgba(0,0,0,0.8)" stroke="#00f5ff" strokeWidth="1"/>
                <circle cx="180" cy="40" r="8" fill="rgba(0,0,0,0.8)" stroke="#8b5cf6" strokeWidth="1"/>
                {/* Engraving */}
                <text x="150" y="28" textAnchor="middle" className="fill-gray-400 text-[10px] font-mono tracking-wider">QUANTUMSHIELD</text>
                {/* Label */}
                <text x="150" y="100" textAnchor="middle" className="fill-cyan-400 text-sm font-semibold">Titanium Shell</text>
                <text x="150" y="115" textAnchor="middle" className="fill-gray-500 text-xs font-mono">Grade 5 Ti-6Al-4V</text>
              </g>

              {/* Connection line */}
              <line x1="450" y1="140" x2="450" y2="185" stroke="#00f5ff" strokeWidth="2" strokeDasharray="6,4" opacity="0.6"/>

              {/* Layer 2: PQC Encryption Chip */}
              <g transform="translate(250, 185)" filter="url(#shadow)">
                <rect x="0" y="0" width="400" height="110" rx="8" fill="#1a1a2e" stroke="#7c3aed" strokeWidth="2" />
                {/* Chip package */}
                <rect x="130" y="25" width="140" height="60" rx="5" fill="url(#pqcChipGrad)" stroke="#a78bfa" strokeWidth="1.5"/>
                {/* Chip pins */}
                {[...Array(18)].map((_, i) => (
                  <rect key={`pin-${i}`} x={135 + i * 7.5} y="12" width="5" height="10" fill="#808080"/>
                ))}
                {/* Security shield symbol */}
                <path d="M 200 45 L 185 50 L 185 65 Q 185 72 200 77 Q 215 72 215 65 L 215 50 Z"
                      fill="#1a1a2e" stroke="#c4b5fd" strokeWidth="1.5"/>
                <path d="M 195 58 L 198 63 L 205 55" stroke="#c4b5fd" strokeWidth="2" fill="none"/>
                {/* Quantum visualization */}
                <circle cx="200" cy="60" r="18" fill="none" stroke="#8b5cf6" strokeWidth="1.5" opacity="0.7" filter="url(#glow)">
                  <animate attributeName="r" values="15;22;15" dur="3s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.5;0.9;0.5" dur="3s" repeatCount="indefinite"/>
                </circle>
                {/* Connection points */}
                {[[90, 55], [310, 55]].map(([x, y], i) => (
                  <circle key={`conn-${i}`} cx={x} cy={y} r="5" fill="#7c3aed" opacity="0.8">
                    <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" begin={`${i * 0.5}s`} repeatCount="indefinite"/>
                  </circle>
                ))}
                {/* Label */}
                <text x="200" y="130" textAnchor="middle" className="fill-purple-400 text-sm font-semibold">PQC Encryption Chip</text>
                <text x="200" y="145" textAnchor="middle" className="fill-gray-500 text-xs font-mono">ML-KEM-1024 / ML-DSA</text>
              </g>

              {/* Connection line */}
              <line x1="450" y1="295" x2="450" y2="345" stroke="#7c3aed" strokeWidth="2" strokeDasharray="6,4" opacity="0.6"/>

              {/* Layer 3: QRNG Core (Enhanced) */}
              <g transform="translate(225, 345)" filter="url(#shadow)">
                <rect x="0" y="0" width="450" height="140" rx="8" fill="#0a0a0f" stroke="#00f5ff" strokeWidth="2" />
                {/* Central quantum core */}
                <g transform="translate(225, 70)">
                  <circle cx="0" cy="0" r="45" fill="rgba(0,245,255,0.1)" filter="url(#glow)"/>
                  <circle cx="0" cy="0" r="40" fill="none" stroke="#00f5ff" strokeWidth="2" filter="url(#glow)"/>
                  <circle cx="0" cy="0" r="30" fill="none" stroke="#0ea5e9" strokeWidth="1.5"/>
                  <circle cx="0" cy="0" r="20" fill="none" stroke="#00f5ff" strokeWidth="1.5"/>
                  <circle cx="0" cy="0" r="10" fill="none" stroke="#0ea5e9" strokeWidth="1"/>
                  {/* Pulsing center */}
                  <circle cx="0" cy="0" r="8" fill="url(#qrngGrad)" filter="url(#glow)">
                    <animate attributeName="r" values="6;12;6" dur="2.5s" repeatCount="indefinite"/>
                    <animate attributeName="opacity" values="0.6;1;0.6" dur="2.5s" repeatCount="indefinite"/>
                  </circle>
                  {/* Quantum particles orbiting */}
                  {[...Array(12)].map((_, i) => {
                    const angle = (i * 30) * Math.PI / 180;
                    const radius = 28;
                    // Round to 2 decimal places to avoid hydration mismatch
                    const cx = Math.round(Math.cos(angle) * radius * 100) / 100;
                    const cy = Math.round(Math.sin(angle) * radius * 100) / 100;
                    return (
                      <circle
                        key={i}
                        cx={cx}
                        cy={cy}
                        r="3"
                        fill="#00f5ff"
                        opacity="0.8"
                        filter="url(#glow)"
                      >
                        <animate
                          attributeName="opacity"
                          values="0.4;1;0.4"
                          dur={`${2 + i * 0.15}s`}
                          repeatCount="indefinite"
                        />
                      </circle>
                    );
                  })}
                  {/* Quantum symbol */}
                  <text x="0" y="8" textAnchor="middle" fill="#00f5ff" fontSize="24" fontWeight="bold" filter="url(#glow)">Q</text>
                </g>
                {/* Circuit connections */}
                <path d="M 60 70 L 140 70" stroke="#00f5ff" strokeWidth="2" opacity="0.6"/>
                <path d="M 310 70 L 390 70" stroke="#00f5ff" strokeWidth="2" opacity="0.6"/>
                {/* Label */}
                <text x="225" y="160" textAnchor="middle" className="fill-cyan-400 text-sm font-semibold">QRNG Core</text>
                <text x="225" y="175" textAnchor="middle" className="fill-gray-500 text-xs font-mono">Quantum Random Number Generator</text>
              </g>

              {/* Connection line */}
              <line x1="450" y1="485" x2="450" y2="535" stroke="#00f5ff" strokeWidth="2" strokeDasharray="6,4" opacity="0.6"/>

              {/* Layer 4: Quantum Circuitry PCB */}
              <g transform="translate(275, 535)" filter="url(#shadow)">
                <rect x="0" y="0" width="350" height="90" rx="8" fill="url(#circuitGrad)" stroke="#16a34a" strokeWidth="1.5" />
                {/* Circuit traces */}
                <path d="M 40 30 L 100 30 L 120 45 L 180 45"
                      stroke="#fbbf24" strokeWidth="2.5" fill="none" opacity="0.8"/>
                <path d="M 180 45 L 240 45 L 260 30 L 310 30"
                      stroke="#fbbf24" strokeWidth="2.5" fill="none" opacity="0.8"/>
                <path d="M 40 60 L 90 60 Q 110 60 110 45"
                      stroke="#fbbf24" strokeWidth="2" fill="none" opacity="0.7"/>
                <path d="M 240 60 Q 260 60 260 45 L 310 60"
                      stroke="#fbbf24" strokeWidth="2" fill="none" opacity="0.7"/>
                {/* SMD components */}
                {[80, 150, 220, 290].map((x, i) => (
                  <rect key={`smd-${i}`} x={x} y="40" width="15" height="10" rx="2"
                        fill="#1a1a1a" stroke="#6b7280" strokeWidth="0.5"/>
                ))}
                {/* Connection pads */}
                {[60, 120, 180, 240, 300].map((x) => (
                  <circle key={x} cx={x} cy="45" r="4" fill="#c0c0c0" opacity="0.7"/>
                ))}
                {/* Via holes */}
                {[[90, 25], [175, 70], [260, 25]].map(([x, y], i) => (
                  <circle key={`via-${i}`} cx={x} cy={y} r="3" fill="none" stroke="#808080" strokeWidth="1"/>
                ))}
                {/* Label */}
                <text x="175" y="110" textAnchor="middle" className="fill-green-400 text-sm font-semibold">Quantum Circuitry</text>
                <text x="175" y="125" textAnchor="middle" className="fill-gray-500 text-xs font-mono">Multi-layer PCB with quantum traces</text>
              </g>

              {/* Enhanced side annotations */}
              {/* Left side - Security */}
              <g>
                <line x1="250" y1="240" x2="120" y2="240" stroke="#7c3aed" strokeWidth="1.5" opacity="0.6" strokeDasharray="5,3" />
                <circle cx="120" cy="240" r="6" fill="#7c3aed" opacity="0.9" filter="url(#glow)"/>
                <text x="110" y="235" textAnchor="end" className="fill-purple-300 text-xs font-semibold">Post-Quantum</text>
                <text x="110" y="248" textAnchor="end" className="fill-gray-400 text-[10px]">Security</text>
              </g>

              {/* Right side - Randomness */}
              <g>
                <line x1="675" y1="415" x2="805" y2="415" stroke="#00f5ff" strokeWidth="1.5" opacity="0.6" strokeDasharray="5,3" />
                <circle cx="805" cy="415" r="6" fill="#00f5ff" opacity="0.9" filter="url(#glow)"/>
                <text x="815" y="410" textAnchor="start" className="fill-cyan-300 text-xs font-semibold">True Random</text>
                <text x="815" y="423" textAnchor="start" className="fill-gray-400 text-[10px]">Generation</text>
              </g>

              {/* Bottom annotation - Manufacturing */}
              <g>
                <line x1="450" y1="625" x2="450" y2="670" stroke="#16a34a" strokeWidth="1.5" opacity="0.6" strokeDasharray="5,3" />
                <circle cx="450" cy="670" r="6" fill="#16a34a" opacity="0.9" filter="url(#glow)"/>
                <text x="450" y="690" textAnchor="middle" className="fill-green-300 text-xs font-semibold">Made in India</text>
              </g>
            </svg>
          </div>
        </div>

        {/* Component specs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          {[
            { label: 'Encryption Standard', value: 'NIST PQC', color: 'violet' },
            { label: 'Key Generation', value: 'Quantum', color: 'cyan' },
            { label: 'Material', value: 'Grade 5 Ti', color: 'gray' },
            { label: 'Certifications', value: 'FIPS 140-3', color: 'cyan' },
          ].map((spec, index) => (
            <SpecCard key={spec.label} spec={spec} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExplodedViewSection;
