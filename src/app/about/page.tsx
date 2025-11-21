'use client';

import Header from '@/components/Header';
import PageHero from '@/components/PageHero';
import Footer from '@/components/Footer';

export default function AboutPage() {
  const team = [
    { name: 'Dr. Priya Sharma', role: 'CEO & Co-founder', expertise: 'Quantum Computing' },
    { name: 'Arjun Patel', role: 'CTO & Co-founder', expertise: 'Cryptography' },
    { name: 'Dr. Rajesh Kumar', role: 'Chief Scientist', expertise: 'Quantum Physics' },
    { name: 'Vikram Singh', role: 'VP Engineering', expertise: 'Hardware Security' },
  ];

  const timeline = [
    { year: '2022', event: 'Company founded by quantum computing researchers' },
    { year: '2023', event: 'Completed Series A funding, began product development' },
    { year: '2024', event: 'Achieved NIST PQC certification, launched beta program' },
    { year: '2025', event: 'Official product launch, available worldwide' },
  ];

  return (
    <main className="bg-quantum-black min-h-screen">
      <Header />
      <PageHero
        title="About QuantumShield"
        subtitle="Pioneering the future of digital security"
        badge="Our Story"
      />

      {/* Mission */}
      <section className="section-padding">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center space-y-6">
            <h2 className="text-3xl md:text-5xl font-display font-bold">
              <span className="gradient-text">Our Mission</span>
            </h2>
            <p className="text-xl text-gray-400 leading-relaxed">
              To protect the world&apos;s most sensitive data from the quantum computing revolution.
              We believe everyone deserves security that will last for decades, not just years.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-quantum-charcoal/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-12 text-center">
            Our Story
          </h2>
          <div className="space-y-6 text-lg text-gray-400 leading-relaxed">
            <p>
              QuantumShield was founded in 2022 by a team of quantum computing researchers who
              recognized an urgent threat: quantum computers would soon break all current encryption standards.
            </p>
            <p>
              While working at leading quantum computing labs, our founders witnessed firsthand
              the rapid advancement of quantum technology. They knew the world needed a solution
              before it was too late.
            </p>
            <p>
              Today, QuantumShield is the world&apos;s first commercially available quantum-safe
              hardware security key, protecting thousands of users and enterprises from future threats.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-16 text-center">
            Our Journey
          </h2>
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div key={item.year} className="flex gap-6 items-start group">
                <div className="flex-shrink-0 w-24 text-3xl font-display font-bold text-quantum-cyan">
                  {item.year}
                </div>
                <div className="glass-card p-6 flex-1 group-hover:scale-105 transition-transform">
                  <p className="text-gray-300">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-quantum-charcoal/30">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-16 text-center">
            Leadership Team
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={member.name} className="relative glass-card p-8 text-center group hover:scale-105 transition-all duration-500 overflow-hidden">
                {/* Vibrant gradient background */}
                <div className={`absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500 ${
                  index % 2 === 0
                    ? 'bg-gradient-to-br from-quantum-cyan/30 via-quantum-cyan/10 to-transparent'
                    : 'bg-gradient-to-br from-quantum-violet/30 via-quantum-violet/10 to-transparent'
                }`} />

                {/* Animated corner accents */}
                <div className={`absolute top-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                  index % 2 === 0 ? 'bg-cyan-glow' : 'bg-violet-glow'
                } blur-3xl`} />
                <div className={`absolute bottom-0 left-0 w-32 h-32 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                  index % 2 === 0 ? 'bg-violet-glow' : 'bg-cyan-glow'
                } blur-3xl`} />

                {/* Border glow on hover */}
                <div className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                  index % 2 === 0
                    ? 'shadow-[0_0_30px_rgba(0,255,255,0.3)]'
                    : 'shadow-[0_0_30px_rgba(139,92,246,0.3)]'
                }`} />

                {/* Realistic 3D Human Avatar */}
                <div className="w-40 h-40 mx-auto mb-6 relative z-10">
                  <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-2xl" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      {/* Realistic skin gradient with multi-tone shading */}
                      <radialGradient id={`skinGrad-${index}`}>
                        <stop offset="0%" stopColor="#f9dcc4" />
                        <stop offset="40%" stopColor="#f0c9a8" />
                        <stop offset="70%" stopColor="#daa882" />
                        <stop offset="100%" stopColor="#c4956f" />
                      </radialGradient>

                      {/* Face shadow gradient */}
                      <linearGradient id={`faceShadow-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#c4956f" stopOpacity="0.4" />
                        <stop offset="50%" stopColor="transparent" />
                        <stop offset="100%" stopColor="#c4956f" stopOpacity="0.3" />
                      </linearGradient>

                      {/* Professional attire gradient */}
                      <linearGradient id={`suitGrad-${index}`} x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#2c3e50" />
                        <stop offset="50%" stopColor="#1a252f" />
                        <stop offset="100%" stopColor="#0f1419" />
                      </linearGradient>

                      {/* Hair gradient */}
                      <radialGradient id={`hairGrad-${index}`}>
                        <stop offset="0%" stopColor="#1a1a1a" />
                        <stop offset="60%" stopColor="#0a0a0a" />
                        <stop offset="100%" stopColor="#000000" />
                      </radialGradient>

                      {/* Accent color */}
                      <linearGradient id={`accentGrad-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor={index % 2 === 0 ? "#00ffff" : "#8b5cf6"} />
                        <stop offset="100%" stopColor={index % 2 === 0 ? "#00bfff" : "#a78bfa"} />
                      </linearGradient>

                      {/* Glow effects */}
                      <filter id={`glow-${index}`}>
                        <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                        <feMerge>
                          <feMergeNode in="coloredBlur"/>
                          <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                      </filter>

                      {/* Subtle shadow */}
                      <filter id={`shadow-${index}`} x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
                        <feOffset dx="0" dy="4" result="offsetblur"/>
                        <feComponentTransfer>
                          <feFuncA type="linear" slope="0.3"/>
                        </feComponentTransfer>
                        <feMerge>
                          <feMergeNode/>
                          <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                      </filter>
                    </defs>

                    {/* Background glow circle */}
                    <circle cx="100" cy="100" r="90" fill={`url(#accentGrad-${index})`} opacity="0.15" filter={`url(#glow-${index})`} className="group-hover:opacity-25 transition-opacity" />
                    <circle cx="100" cy="100" r="85" fill="rgba(255,255,255,0.03)" />

                    {/* Animated orbital rings */}
                    <circle cx="100" cy="100" r="88" stroke={`url(#accentGrad-${index})`} strokeWidth="0.5" fill="none" opacity="0.3" className="animate-spin" style={{animationDuration: '20s'}} />

                    {/* === SHOULDERS & NECK === */}
                    {/* Professional suit shoulders with depth */}
                    <ellipse cx="100" cy="165" rx="55" ry="30" fill={`url(#suitGrad-${index})`} filter={`url(#shadow-${index})`} />
                    <path d="M 45 155 Q 100 145 155 155 L 155 195 L 45 195 Z" fill={`url(#suitGrad-${index})`} />

                    {/* Suit highlights for 3D effect */}
                    <path d="M 50 155 Q 100 147 150 155" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" fill="none" />

                    {/* White shirt collar */}
                    <path d="M 85 150 L 80 160 L 90 165 L 100 150" fill="white" opacity="0.95" stroke="rgba(0,0,0,0.1)" strokeWidth="0.5" />
                    <path d="M 115 150 L 120 160 L 110 165 L 100 150" fill="white" opacity="0.95" stroke="rgba(0,0,0,0.1)" strokeWidth="0.5" />

                    {/* Elegant tie */}
                    <path d="M 100 150 L 100 175 L 95 170 L 100 180 L 105 170 L 100 175" fill={`url(#accentGrad-${index})`} opacity="0.9" filter={`url(#glow-${index})`} />
                    <ellipse cx="100" cy="152" rx="4" ry="3" fill={`url(#accentGrad-${index})`} opacity="0.95" />

                    {/* Neck with realistic shading */}
                    <path d="M 85 135 Q 100 145 115 135 L 115 150 Q 100 155 85 150 Z" fill={`url(#skinGrad-${index})`} />
                    <path d="M 90 140 Q 100 147 110 140" stroke="rgba(0,0,0,0.1)" strokeWidth="1" fill="none" />

                    {/* === HEAD & FACE === */}
                    {/* Head base with realistic proportions */}
                    <ellipse cx="100" cy="95" rx="38" ry="45" fill={`url(#skinGrad-${index})`} filter={`url(#shadow-${index})`} />

                    {/* Face contour shadow */}
                    <ellipse cx="100" cy="95" rx="36" ry="43" fill={`url(#faceShadow-${index})`} />

                    {/* Cheekbone highlights */}
                    <ellipse cx="75" cy="95" rx="8" ry="12" fill="rgba(255,255,255,0.15)" opacity="0.6" />
                    <ellipse cx="125" cy="95" rx="8" ry="12" fill="rgba(255,255,255,0.15)" opacity="0.6" />

                    {/* Forehead highlight */}
                    <ellipse cx="100" cy="70" rx="20" ry="15" fill="rgba(255,255,255,0.12)" opacity="0.7" />

                    {/* === HAIR/HEADWEAR === */}
                    {index === 3 ? (
                      // Elegant Turban for Vikram Singh with realistic texture
                      <>
                        <ellipse cx="100" cy="55" rx="40" ry="25" fill={`url(#accentGrad-${index})`} opacity="0.95" filter={`url(#glow-${index})`} />
                        <ellipse cx="100" cy="55" rx="38" ry="23" fill={`url(#accentGrad-${index})`} opacity="0.8" />

                        {/* Turban folds and texture */}
                        <path d="M 62 55 Q 100 45 138 55" stroke="rgba(255,255,255,0.2)" strokeWidth="2" fill="none" />
                        <path d="M 65 60 Q 100 50 135 60" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" fill="none" />
                        <path d="M 70 65 Q 100 58 130 65" stroke="rgba(0,0,0,0.2)" strokeWidth="1" fill="none" />

                        {/* Premium golden brooch/jewel */}
                        <circle cx="100" cy="50" r="6" fill="#ffd700" filter={`url(#glow-${index})`} />
                        <circle cx="100" cy="50" r="5" fill="#ffed4e" opacity="0.9" />
                        <circle cx="100" cy="50" r="3" fill="#fff8dc" opacity="0.8" />
                        <path d="M 97 50 L 100 47 L 103 50 L 100 53 Z" fill="#ffaa00" opacity="0.6" />
                        <circle cx="98" cy="48" r="1" fill="white" opacity="0.9" />
                      </>
                    ) : index === 0 || index === 2 ? (
                      // Professional short hair for male executives
                      <>
                        <ellipse cx="100" cy="60" rx="40" ry="22" fill={`url(#hairGrad-${index})`} />
                        <path d="M 62 62 Q 80 55 100 60 Q 120 55 138 62" fill={`url(#hairGrad-${index})`} />

                        {/* Hair texture and highlights */}
                        <path d="M 70 58 Q 100 53 130 58" stroke="rgba(255,255,255,0.05)" strokeWidth="1" fill="none" />
                        <path d="M 75 62 Q 100 58 125 62" stroke="rgba(255,255,255,0.03)" strokeWidth="0.8" fill="none" />

                        {/* Side part */}
                        <path d="M 95 55 L 95 65" stroke="rgba(0,0,0,0.3)" strokeWidth="1.5" />

                        {/* Hair volume on sides */}
                        <ellipse cx="70" cy="68" rx="8" ry="12" fill={`url(#hairGrad-${index})`} opacity="0.9" />
                        <ellipse cx="130" cy="68" rx="8" ry="12" fill={`url(#hairGrad-${index})`} opacity="0.9" />
                      </>
                    ) : (
                      // Professional hairstyle with bun for female executive (index 1 - Arjun Patel)
                      <>
                        {/* Top hair */}
                        <ellipse cx="100" cy="58" rx="40" ry="20" fill={`url(#hairGrad-${index})`} />
                        <path d="M 62 60 Q 80 53 100 58 Q 120 53 138 60" fill={`url(#hairGrad-${index})`} />

                        {/* Hair pulled back styling */}
                        <ellipse cx="65" cy="70" rx="6" ry="15" fill={`url(#hairGrad-${index})`} opacity="0.95" />
                        <ellipse cx="135" cy="70" rx="6" ry="15" fill={`url(#hairGrad-${index})`} opacity="0.95" />

                        {/* Subtle hair shine */}
                        <path d="M 85 55 Q 100 52 115 55" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" fill="none" />

                        {/* Side swept look */}
                        <path d="M 70 65 Q 75 60 80 65" fill={`url(#hairGrad-${index})`} opacity="0.8" />
                        <path d="M 120 65 Q 125 60 130 65" fill={`url(#hairGrad-${index})`} opacity="0.8" />
                      </>
                    )}

                    {/* === FACIAL FEATURES === */}
                    {/* Realistic eyes with depth */}
                    <ellipse cx="80" cy="90" rx="8" ry="6" fill="white" opacity="0.95" />
                    <ellipse cx="120" cy="90" rx="8" ry="6" fill="white" opacity="0.95" />

                    {/* Eye shadows for depth */}
                    <ellipse cx="80" cy="88" rx="8" ry="3" fill="rgba(0,0,0,0.1)" />
                    <ellipse cx="120" cy="88" rx="8" ry="3" fill="rgba(0,0,0,0.1)" />

                    {/* Iris with realistic color */}
                    <circle cx="80" cy="90" r="4.5" fill="#4a3520" />
                    <circle cx="120" cy="90" r="4.5" fill="#4a3520" />

                    {/* Pupils */}
                    <circle cx="80" cy="90" r="2.5" fill="#1a1a1a" />
                    <circle cx="120" cy="90" r="2.5" fill="#1a1a1a" />

                    {/* Eye highlights for life */}
                    <circle cx="82" cy="88" r="1.5" fill="white" opacity="0.9" />
                    <circle cx="122" cy="88" r="1.5" fill="white" opacity="0.9" />
                    <ellipse cx="78" cy="92" rx="0.8" ry="0.6" fill="white" opacity="0.4" />
                    <ellipse cx="118" cy="92" rx="0.8" ry="0.6" fill="white" opacity="0.4" />

                    {/* Upper eyelids */}
                    <path d="M 72 87 Q 80 85 88 87" stroke="rgba(0,0,0,0.4)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                    <path d="M 112 87 Q 120 85 128 87" stroke="rgba(0,0,0,0.4)" strokeWidth="1.5" fill="none" strokeLinecap="round" />

                    {/* Lower eyelids */}
                    <path d="M 73 93 Q 80 94 87 93" stroke="rgba(0,0,0,0.2)" strokeWidth="0.8" fill="none" />
                    <path d="M 113 93 Q 120 94 127 93" stroke="rgba(0,0,0,0.2)" strokeWidth="0.8" fill="none" />

                    {/* Eyebrows with natural arch */}
                    <path d="M 68 80 Q 80 78 90 81" stroke="#2a2a2a" strokeWidth="2.5" fill="none" opacity="0.85" strokeLinecap="round" />
                    <path d="M 110 81 Q 120 78 132 80" stroke="#2a2a2a" strokeWidth="2.5" fill="none" opacity="0.85" strokeLinecap="round" />

                    {/* Nose bridge shadow */}
                    <path d="M 92 85 L 92 108" stroke="rgba(0,0,0,0.08)" strokeWidth="2" fill="none" />
                    <path d="M 108 85 L 108 108" stroke="rgba(0,0,0,0.08)" strokeWidth="2" fill="none" />

                    {/* Nose with 3D definition */}
                    <ellipse cx="100" cy="105" rx="10" ry="12" fill="rgba(0,0,0,0.05)" />
                    <path d="M 100 90 L 100 110" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" fill="none" strokeLinecap="round" />

                    {/* Nostrils */}
                    <ellipse cx="94" cy="110" rx="3" ry="2.5" fill="rgba(0,0,0,0.25)" />
                    <ellipse cx="106" cy="110" rx="3" ry="2.5" fill="rgba(0,0,0,0.25)" />

                    {/* Nose tip highlight */}
                    <ellipse cx="100" cy="108" rx="4" ry="3" fill="rgba(255,255,255,0.12)" />

                    {/* Warm, confident smile */}
                    <path d="M 82 118 Q 100 125 118 118" stroke="#c47b63" strokeWidth="2.5" fill="none" opacity="0.9" strokeLinecap="round" />
                    <path d="M 84 119 Q 100 123 116 119" stroke="rgba(255,255,255,0.25)" strokeWidth="1" fill="none" />

                    {/* Smile shadow below */}
                    <ellipse cx="100" cy="120" rx="14" ry="3" fill="rgba(0,0,0,0.08)" />

                    {/* Chin definition */}
                    <ellipse cx="100" cy="130" rx="18" ry="8" fill="rgba(0,0,0,0.06)" />
                    <ellipse cx="100" cy="128" rx="10" ry="4" fill="rgba(255,255,255,0.08)" />

                    {/* === SUIT DETAILS === */}
                    {/* Jacket lapels */}
                    <path d="M 70 150 L 75 165 L 80 150" fill="rgba(0,0,0,0.3)" stroke="rgba(255,255,255,0.08)" strokeWidth="0.8" />
                    <path d="M 130 150 L 125 165 L 120 150" fill="rgba(0,0,0,0.3)" stroke="rgba(255,255,255,0.08)" strokeWidth="0.8" />

                    {/* Pocket square with accent color */}
                    <rect x="68" y="162" width="8" height="8" fill="white" opacity="0.9" />
                    <rect x="69" y="163" width="6" height="6" fill={`url(#accentGrad-${index})`} opacity="0.7" />

                    {/* Jacket buttons */}
                    <circle cx="92" cy="170" r="2" fill="rgba(0,0,0,0.6)" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
                    <circle cx="92" cy="180" r="2" fill="rgba(0,0,0,0.6)" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />

                    {/* === QUANTUM/TECH ELEMENTS === */}
                    {/* Floating particles */}
                    <circle cx="30" cy="70" r="2.5" fill={`url(#accentGrad-${index})`} opacity="0.8" className="animate-pulse" filter={`url(#glow-${index})`} />
                    <circle cx="170" cy="90" r="2.5" fill={`url(#accentGrad-${index})`} opacity="0.8" className="animate-pulse" style={{animationDelay: '0.3s'}} filter={`url(#glow-${index})`} />
                    <circle cx="40" cy="130" r="2" fill={`url(#accentGrad-${index})`} opacity="0.7" className="animate-pulse" style={{animationDelay: '0.6s'}} />
                    <circle cx="160" cy="140" r="2" fill={`url(#accentGrad-${index})`} opacity="0.7" className="animate-pulse" style={{animationDelay: '0.9s'}} />
                    <circle cx="50" cy="170" r="1.5" fill={`url(#accentGrad-${index})`} opacity="0.6" className="animate-pulse" style={{animationDelay: '1.2s'}} />
                    <circle cx="150" cy="175" r="1.5" fill={`url(#accentGrad-${index})`} opacity="0.6" className="animate-pulse" style={{animationDelay: '1.5s'}} />

                    {/* Hexagonal tech elements */}
                    <path d="M 25 100 L 30 97 L 35 100 L 35 106 L 30 109 L 25 106 Z" fill="none" stroke={`url(#accentGrad-${index})`} strokeWidth="0.8" opacity="0.5" className="animate-pulse" />
                    <path d="M 165 110 L 170 107 L 175 110 L 175 116 L 170 119 L 165 116 Z" fill="none" stroke={`url(#accentGrad-${index})`} strokeWidth="0.8" opacity="0.5" className="animate-pulse" style={{animationDelay: '0.5s'}} />

                    {/* Circuit-like connections */}
                    <path d="M 30 70 L 40 85 M 170 90 L 160 105" stroke={`url(#accentGrad-${index})`} strokeWidth="0.5" opacity="0.3" strokeDasharray="2,2" className="animate-pulse" />

                    {/* Premium glowing border */}
                    <circle cx="100" cy="100" r="88" stroke={`url(#accentGrad-${index})`} strokeWidth="2" fill="none" opacity="0.7" filter={`url(#glow-${index})`} className="group-hover:opacity-100 transition-opacity duration-500" />
                    <circle cx="100" cy="100" r="90" stroke={`url(#accentGrad-${index})`} strokeWidth="0.5" fill="none" opacity="0.4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 relative z-10">{member.name}</h3>
                <p className={`text-sm font-semibold mb-2 relative z-10 ${
                  index % 2 === 0 ? 'text-quantum-cyan' : 'text-quantum-violet'
                }`}>{member.role}</p>
                <p className="text-xs text-gray-400 relative z-10">{member.expertise}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
