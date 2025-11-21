'use client';

import React from 'react';
import { useScrollReveal } from '@/hooks/useScrollEffects';

const PhotoCard = ({ photo, index }: { photo: { label: string; detail: string }; index: number }) => {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`group transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="relative glass-card overflow-hidden aspect-square group-hover:scale-105 transition-all duration-500">
        {/* Placeholder visualization */}
        <div className="absolute inset-0 bg-gradient-to-br from-quantum-charcoal to-quantum-black flex items-center justify-center">
          {index === 0 && (
            // Titanium texture close-up
            <div className="w-3/4 h-3/4 rounded-lg bg-gradient-to-br from-gray-600 to-gray-800 relative overflow-hidden">
              <div className="absolute inset-0" style={{
                background: 'repeating-linear-gradient(45deg, transparent, transparent 1px, rgba(255,255,255,0.02) 1px, rgba(255,255,255,0.02) 2px)'
              }} />
              <div className="absolute top-1/4 left-1/4 right-1/4 h-px bg-white/10" />
            </div>
          )}
          {index === 1 && (
            // Secure element chip
            <div className="relative">
              <div className="w-20 h-20 rounded-lg bg-quantum-black border border-quantum-violet/50 flex items-center justify-center">
                <div className="w-12 h-12 rounded bg-quantum-violet/20 flex items-center justify-center">
                  <div className="w-6 h-6 rounded-sm bg-quantum-violet animate-pulse" />
                </div>
              </div>
            </div>
          )}
          {index === 2 && (
            // USB-C connector
            <div className="relative">
              <div className="w-16 h-24 bg-gradient-to-b from-gray-700 to-gray-800 rounded">
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-10 h-4 bg-gray-900 rounded-sm">
                  <div className="absolute inset-1 bg-yellow-600/30" />
                </div>
              </div>
            </div>
          )}
          {index === 3 && (
            // LED indicator
            <div className="relative">
              <div className="w-8 h-8 rounded-full bg-quantum-cyan/80 shadow-neon-cyan animate-pulse" />
              <div className="absolute inset-0 w-12 h-12 -m-2 rounded-full bg-quantum-cyan/20 animate-ping" />
            </div>
          )}
        </div>

        {/* Photo info */}
        <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-quantum-black to-transparent">
          <div className="text-sm font-semibold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-quantum-cyan group-hover:to-quantum-violet transition-all duration-500">{photo.label}</div>
          <div className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors">{photo.detail}</div>
        </div>

        {/* Hover effect */}
        <div className="absolute inset-0 border border-transparent group-hover:border-quantum-cyan/30 transition-colors rounded-2xl" />
      </div>
    </div>
  );
};

const SpecItem = ({ spec, index }: { spec: { label: string; value: string }; index: number }) => {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`text-center group hover:scale-110 transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
      style={{ transitionDelay: `${index * 50}ms` }}
    >
      <div className="text-sm font-mono text-quantum-cyan group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-quantum-cyan group-hover:to-quantum-violet transition-all duration-500">{spec.value}</div>
      <div className="text-xs text-gray-500 mt-1 group-hover:text-gray-400 transition-colors">{spec.label}</div>
    </div>
  );
};

const ProductPhotographySection: React.FC = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section className="section-padding bg-quantum-black relative overflow-hidden">
      <div className="relative z-10 container mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            <span className="text-white">Precision </span>
            <span className="gradient-text">Crafted</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Aerospace-grade titanium meets quantum-age technology
          </p>
        </div>

        {/* Photo gallery */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Main large image */}
          <div
            ref={heroRef}
            className={`md:col-span-2 md:row-span-2 transition-all duration-1000 ${
              heroVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            <div className="group relative glass-card overflow-hidden aspect-[4/3] h-full hover:scale-[1.02] transition-all duration-500">
              {/* Placeholder for product photo */}
              <div className="absolute inset-0 bg-gradient-to-br from-quantum-charcoal to-quantum-black">
                {/* Device illustration */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-3/4 max-w-md">
                    {/* Main device body */}
                    <div className="relative w-full aspect-[3/1] rounded-2xl bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 shadow-2xl transform group-hover:scale-105 transition-transform duration-500">
                      {/* Titanium brushed texture effect */}
                      <div className="absolute inset-0 rounded-2xl opacity-30" style={{
                        background: 'repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)'
                      }} />

                      {/* Top edge highlight */}
                      <div className="absolute top-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

                      {/* Central LED indicator */}
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="w-4 h-4 rounded-full bg-quantum-cyan animate-pulse shadow-neon-cyan" />
                      </div>

                      {/* Product name */}
                      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 text-xs font-mono text-gray-500 tracking-[0.3em]">
                        QUANTUMSHIELD
                      </div>

                      {/* USB connector */}
                      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 w-8 h-12 bg-gradient-to-r from-gray-700 to-gray-800 rounded-r-sm">
                        <div className="absolute inset-1 bg-gray-900 rounded-r-sm" />
                      </div>
                    </div>

                    {/* Reflection */}
                    <div className="absolute -bottom-8 left-0 right-0 h-16 bg-gradient-to-b from-white/5 to-transparent blur-sm transform scale-y-[-0.3] opacity-30" />
                  </div>
                </div>
              </div>

              {/* Photo label */}
              <div className="absolute bottom-4 left-4 glass-card px-3 py-1.5">
                <span className="text-xs font-mono text-gray-400 group-hover:text-quantum-cyan transition-colors">Hero Shot</span>
              </div>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20">
                <div className="absolute top-4 right-4 w-8 h-px bg-quantum-cyan group-hover:w-12 transition-all" />
                <div className="absolute top-4 right-4 h-8 w-px bg-quantum-cyan group-hover:h-12 transition-all" />
              </div>
            </div>
          </div>

          {/* Detail shots */}
          {[
            { label: 'Titanium Finish', detail: 'Grade 5 Ti-6Al-4V' },
            { label: 'Secure Element', detail: 'CC EAL6+' },
            { label: 'USB-C Connector', detail: 'Gold-plated' },
            { label: 'LED Indicator', detail: 'Status feedback' },
          ].map((photo, index) => (
            <PhotoCard key={photo.label} photo={photo} index={index} />
          ))}
        </div>

        {/* Specifications bar */}
        <div className="mt-12 glass-card p-6 max-w-4xl mx-auto hover:scale-105 transition-all duration-500">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {[
              { label: 'Dimensions', value: '48×18×8mm' },
              { label: 'Weight', value: '12g' },
              { label: 'Interface', value: 'USB-C' },
              { label: 'Water Resistance', value: 'IP68' },
              { label: 'Operating Temp', value: '-20°C to 70°C' },
            ].map((spec, index) => (
              <SpecItem key={spec.label} spec={spec} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductPhotographySection;
