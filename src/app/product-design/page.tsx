'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import PageHero from '@/components/PageHero';
import Footer from '@/components/Footer';

type ProductModel = 'one' | 'pro';
type ViewStyle = 'blueprint' | '3d' | 'exploded';

export default function ProductDesignPage() {
  const [selectedModel, setSelectedModel] = useState<ProductModel>('one');
  const [viewStyle, setViewStyle] = useState<ViewStyle>('3d');
  const [activeFeature, setActiveFeature] = useState<string | null>(null);

  return (
    <main className="bg-quantum-black min-h-screen">
      <Header />
      <PageHero
        title="Product Design Showcase"
        subtitle="Industry-standard 3D visualization and technical specifications"
        badge="Design Excellence"
      />

      {/* Model Selector */}
      <section className="section-padding">
        <div className="container mx-auto">
          {/* Product Toggle */}
          <div className="flex justify-center gap-6 mb-12">
            <button
              onClick={() => setSelectedModel('one')}
              className={`group relative px-12 py-6 rounded-2xl font-bold text-lg transition-all duration-500 ${
                selectedModel === 'one'
                  ? 'bg-gradient-to-r from-quantum-cyan via-quantum-violet to-quantum-cyan text-white shadow-2xl shadow-quantum-cyan/50 scale-105'
                  : 'glass-card text-gray-400 hover:text-white hover:scale-105'
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-quantum-cyan/20 to-quantum-violet/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative z-10">QuantumShield One</span>
              <div className="text-xs mt-1 opacity-75">₹24,999</div>
            </button>
            <button
              onClick={() => setSelectedModel('pro')}
              className={`group relative px-12 py-6 rounded-2xl font-bold text-lg transition-all duration-500 ${
                selectedModel === 'pro'
                  ? 'bg-gradient-to-r from-quantum-cyan via-quantum-violet to-quantum-cyan text-white shadow-2xl shadow-quantum-violet/50 scale-105'
                  : 'glass-card text-gray-400 hover:text-white hover:scale-105'
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-quantum-cyan/20 to-quantum-violet/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative z-10">QuantumShield Pro</span>
              <div className="text-xs mt-1 opacity-75">₹49,999</div>
            </button>
          </div>

          {/* View Style Selector */}
          <div className="flex justify-center gap-4 mb-12">
            {(['blueprint', '3d', 'exploded'] as ViewStyle[]).map((style) => (
              <button
                key={style}
                onClick={() => setViewStyle(style)}
                className={`group px-8 py-4 rounded-xl font-medium capitalize transition-all duration-300 flex items-center gap-3 ${
                  viewStyle === style
                    ? 'bg-gradient-to-r from-quantum-cyan to-quantum-violet text-white shadow-xl shadow-quantum-cyan/30'
                    : 'glass-card text-gray-400 hover:text-white hover:border-quantum-cyan/50'
                }`}
              >
                {style === 'blueprint' && (
                  <>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg>
                    <span>Blueprint</span>
                  </>
                )}
                {style === '3d' && (
                  <>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>3D Render</span>
                  </>
                )}
                {style === 'exploded' && (
                  <>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                    <span>Exploded View</span>
                  </>
                )}
              </button>
            ))}
          </div>

          {/* Main Visualization */}
          {viewStyle === 'blueprint' && (
            selectedModel === 'one' ? <BlueprintViewOne /> : <BlueprintViewPro />
          )}
          {viewStyle === '3d' && (
            selectedModel === 'one' ? <Render3DViewOne /> : <Render3DViewPro />
          )}
          {viewStyle === 'exploded' && (
            selectedModel === 'one' ? <ExplodedViewOne /> : <ExplodedViewPro />
          )}
        </div>
      </section>

      {/* Technical Specifications */}
      <TechnicalSpecsSection model={selectedModel} />

      {/* Feature Callouts */}
      <FeatureCalloutsSection model={selectedModel} />

      {/* Manufacturing Details */}
      <ManufacturingSection model={selectedModel} />

      <Footer />
    </main>
  );
}

// Blueprint View for QuantumShield One
function BlueprintViewOne() {
  return (
    <div className="glass-card p-12 bg-gradient-to-br from-blue-950/50 to-quantum-charcoal/50">
      <div className="grid lg:grid-cols-2 gap-12">
        {/* Left: Front View Blueprint */}
        <div className="space-y-6">
          <h3 className="text-2xl font-display font-bold text-center mb-8 text-white">
            QUANTUMSHIELD ONE
          </h3>

          <svg viewBox="0 0 400 600" className="w-full border-2 border-quantum-cyan/30 rounded-lg bg-gradient-to-br from-blue-900/20 to-transparent p-8">
            {/* Grid Background */}
            <defs>
              <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(0,255,255,0.1)" strokeWidth="0.5"/>
              </pattern>
              <linearGradient id="blueprintGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00ffff" />
                <stop offset="100%" stopColor="#0099ff" />
              </linearGradient>
            </defs>

            <rect width="400" height="600" fill="url(#grid)" />

            {/* Dimension Lines */}
            <g stroke="#00ffff" strokeWidth="1" fill="none">
              {/* Length dimension */}
              <line x1="80" y1="80" x2="80" y2="520" markerEnd="url(#arrowhead)" />
              <line x1="80" y1="520" x2="80" y2="80" markerEnd="url(#arrowhead)" />
              <text x="50" y="300" fill="#00ffff" fontSize="12" textAnchor="middle" transform="rotate(-90 50 300)">
                60-65mm
              </text>

              {/* Width dimension */}
              <line x1="100" y1="60" x2="300" y2="60" />
              <text x="200" y="50" fill="#00ffff" fontSize="12" textAnchor="middle">25-30mm</text>
            </g>

            {/* Main Device Outline */}
            <rect x="100" y="100" width="200" height="400" rx="20"
                  fill="none" stroke="url(#blueprintGrad)" strokeWidth="2" />

            {/* Branding Area */}
            <rect x="130" y="130" width="140" height="30" rx="5"
                  fill="rgba(0,255,255,0.05)" stroke="#00ffff" strokeWidth="1" />
            <text x="200" y="150" textAnchor="middle" fill="#00ffff" fontSize="10" letterSpacing="2">
              QUANTUMSHIELD ONE
            </text>

            {/* Status LEDs */}
            <circle cx="180" cy="190" r="5" fill="#00ffff" opacity="0.7" />
            <circle cx="220" cy="190" r="5" fill="#8b5cf6" opacity="0.7" />
            <text x="200" y="210" textAnchor="middle" fill="#00ffff" fontSize="8">STATUS LEDs</text>

            {/* Quantum Core Indicator */}
            <g>
              <circle cx="200" cy="300" r="50" fill="none" stroke="url(#blueprintGrad)" strokeWidth="2" />
              <circle cx="200" cy="300" r="40" fill="none" stroke="#00ffff" strokeWidth="1" opacity="0.5" />
              <circle cx="200" cy="300" r="30" fill="none" stroke="#00ffff" strokeWidth="1" opacity="0.5" />
              <path d="M 200 270 Q 220 300 200 330 Q 180 300 200 270"
                    fill="none" stroke="url(#blueprintGrad)" strokeWidth="2" />
              <text x="200" y="370" textAnchor="middle" fill="#00ffff" fontSize="9">
                QUANTUM CORE INDICATOR
              </text>
            </g>

            {/* Touch Sensor Area */}
            <rect x="175" y="275" width="50" height="50" rx="8"
                  fill="rgba(139,92,246,0.1)" stroke="#8b5cf6" strokeWidth="1.5" strokeDasharray="3,3" />

            {/* NFC Zone */}
            <g>
              <path d="M 140 430 Q 200 420 260 430" stroke="#00ffff" strokeWidth="1.5" fill="none" />
              <path d="M 145 445 Q 200 435 255 445" stroke="#00ffff" strokeWidth="1" fill="none" opacity="0.7" />
              <path d="M 150 460 Q 200 450 250 460" stroke="#00ffff" strokeWidth="1" fill="none" opacity="0.5" />
              <text x="200" y="480" textAnchor="middle" fill="#00ffff" fontSize="9">NFC ANTENNA ZONE</text>
              <text x="200" y="492" textAnchor="middle" fill="#00ffff" fontSize="7" opacity="0.7">
                Three concentric arc etch marks (SFC 13.56MHz)
              </text>
            </g>

            {/* USB-C Port */}
            <rect x="185" y="510" width="30" height="8" rx="2"
                  fill="rgba(0,255,255,0.2)" stroke="#00ffff" strokeWidth="1" />
            <text x="200" y="535" textAnchor="middle" fill="#00ffff" fontSize="7">USB-C Bottom edge</text>
          </svg>

          {/* Front Face Elements List */}
          <div className="glass-card p-6 space-y-3">
            <h4 className="font-semibold text-quantum-cyan mb-4">FRONT FACE ELEMENTS</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-quantum-cyan rounded-full" />
                <span className="text-gray-300">BRANDING - Laser-etched wordmark</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-quantum-cyan rounded-full" />
                <span className="text-gray-300">STATUS LEDs - RGB SMD (0603)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-quantum-cyan rounded-full" />
                <span className="text-gray-300">QUANTUM CORE INDICATOR - Ø12mm</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-quantum-cyan rounded-full" />
                <span className="text-gray-300">NFC ANTENNA ZONE - Lower third</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Side View & Specs */}
        <div className="space-y-6">
          {/* Side View */}
          <svg viewBox="0 0 300 600" className="w-full border-2 border-quantum-violet/30 rounded-lg bg-gradient-to-br from-purple-900/20 to-transparent p-8">
            <defs>
              <linearGradient id="sideGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#8b5cf6" />
                <stop offset="100%" stopColor="#a78bfa" />
              </linearGradient>
            </defs>

            <rect width="300" height="600" fill="url(#grid)" />

            <text x="150" y="40" textAnchor="middle" fill="#8b5cf6" fontSize="14" fontWeight="bold">
              INDUSTRIAL DESIGN
            </text>
            <text x="150" y="60" textAnchor="middle" fill="#8b5cf6" fontSize="10">
              Side View
            </text>

            {/* Side Profile */}
            <rect x="120" y="100" width="60" height="400" rx="10"
                  fill="rgba(139,92,246,0.1)" stroke="url(#sideGrad)" strokeWidth="2" />

            {/* Thickness annotation */}
            <line x1="90" y1="300" x2="120" y2="300" stroke="#8b5cf6" strokeWidth="1" />
            <line x1="180" y1="300" x2="210" y2="300" stroke="#8b5cf6" strokeWidth="1" />
            <line x1="90" y1="280" x2="90" y2="320" stroke="#8b5cf6" strokeWidth="1" />
            <line x1="210" y1="280" x2="210" y2="320" stroke="#8b5cf6" strokeWidth="1" />
            <text x="150" y="340" textAnchor="middle" fill="#8b5cf6" fontSize="11">8-10mm</text>

            {/* USB-C connector detail */}
            <rect x="140" y="510" width="20" height="8" rx="2"
                  fill="#8b5cf6" opacity="0.5" />
            <line x1="150" y1="530" x2="150" y2="550" stroke="#8b5cf6" strokeWidth="0.5" strokeDasharray="2,2" />
            <text x="150" y="565" textAnchor="middle" fill="#8b5cf6" fontSize="8">USB-C 3.1</text>
          </svg>

          {/* Materials & Finish */}
          <div className="glass-card p-6">
            <h4 className="font-semibold text-quantum-violet mb-4">MATERIALS & FINISH</h4>
            <div className="space-y-4 text-sm">
              <div>
                <div className="text-quantum-cyan font-semibold mb-1">Body Material</div>
                <div className="text-gray-300">Aircraft-grade aluminum alloy (6061-T6)</div>
              </div>
              <div>
                <div className="text-quantum-cyan font-semibold mb-1">Surface Treatment</div>
                <div className="text-gray-300">Matte anodized finish</div>
              </div>
              <div>
                <div className="text-quantum-cyan font-semibold mb-1">Color Options</div>
                <div className="flex gap-3 mt-2">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-gray-600 border border-quantum-cyan/50" title="Space Gray" />
                    <span className="text-xs text-gray-400">Space Gray</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-gray-900 border border-quantum-violet/50" title="Midnight Black" />
                    <span className="text-xs text-gray-400">Midnight Black</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-gray-400 border border-quantum-cyan/50" title="Arctic Silver" />
                    <span className="text-xs text-gray-400">Arctic Silver</span>
                  </div>
                </div>
              </div>
              <div>
                <div className="text-quantum-cyan font-semibold mb-1">Texture</div>
                <div className="text-gray-300">Brushed metal with subtle horizontal micro-grooves</div>
              </div>
              <div>
                <div className="text-quantum-cyan font-semibold mb-1">USB-C Connector</div>
                <div className="text-gray-300">Nickel-plated steel, reinforced</div>
              </div>
            </div>
          </div>

          {/* Side/Edge Features */}
          <div className="glass-card p-6">
            <h4 className="font-semibold text-quantum-violet mb-4">SIDE / EDGE FEATURES</h4>
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex justify-between">
                <span>USB-C Connector</span>
                <span className="text-quantum-cyan font-mono">Bottom edge</span>
              </div>
              <div className="flex justify-between">
                <span>Type</span>
                <span className="text-quantum-cyan">USB-C 3.1 Gen 2</span>
              </div>
              <div className="flex justify-between">
                <span>Data Transfer</span>
                <span className="text-quantum-cyan font-mono">10 Gbps</span>
              </div>
              <div className="flex justify-between">
                <span>Power Delivery</span>
                <span className="text-quantum-cyan font-mono">5V/500mA</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Blueprint View for QuantumShield Pro
function BlueprintViewPro() {
  return (
    <div className="glass-card p-12 bg-gradient-to-br from-indigo-950/50 to-quantum-charcoal/50">
      <div className="grid lg:grid-cols-2 gap-12">
        {/* Left: Front View Blueprint */}
        <div className="space-y-6">
          <h3 className="text-3xl font-display font-bold text-center mb-8 text-white">
            QUANTUMSHIELD PRO - FRONT VIEW
          </h3>

          <svg viewBox="0 0 500 700" className="w-full border-2 border-quantum-cyan/30 rounded-lg bg-gradient-to-br from-blue-900/20 to-transparent p-8">
            <defs>
              <pattern id="gridPro" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(0,255,255,0.15)" strokeWidth="0.3"/>
              </pattern>
              <linearGradient id="proGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00ffff" />
                <stop offset="50%" stopColor="#8b5cf6" />
                <stop offset="100%" stopColor="#00ffff" />
              </linearGradient>
            </defs>

            <rect width="500" height="700" fill="url(#gridPro)" />

            {/* Main Device Outline - Larger Pro Version */}
            <rect x="75" y="80" width="350" height="540" rx="25"
                  fill="none" stroke="url(#proGradient)" strokeWidth="3" />

            {/* Premium Badge */}
            <rect x="140" y="110" width="220" height="40" rx="8"
                  fill="rgba(0,255,255,0.1)" stroke="#00ffff" strokeWidth="1.5" />
            <text x="250" y="137" textAnchor="middle" fill="#fff" fontSize="16" fontWeight="bold" letterSpacing="3">
              QUANTUMSHIELD
            </text>
            <rect x="375" y="125" width="35" height="15" rx="3" fill="url(#proGradient)" />
            <text x="392" y="136" textAnchor="middle" fill="#000" fontSize="10" fontWeight="bold">PRO</text>

            {/* Quantum Activity Array - 5 LEDs */}
            <text x="250" y="185" textAnchor="middle" fill="#00ffff" fontSize="10" opacity="0.8">
              QUANTUM ACTIVITY ARRAY
            </text>
            <g>
              {[0,1,2,3,4,5].map(i => (
                <circle key={i} cx={150 + i * 40} cy="205" r="6"
                        fill={i === 2 ? "#8b5cf6" : "#00ffff"} opacity="0.8">
                  <animate attributeName="opacity" values="0.4;1;0.4" dur={`${2 + i * 0.3}s`} repeatCount="indefinite" />
                </circle>
              ))}
            </g>

            {/* Quantum Core 1024 Display */}
            <rect x="140" y="240" width="220" height="180" rx="12"
                  fill="rgba(0,0,0,0.5)" stroke="url(#proGradient)" strokeWidth="2" />
            <text x="250" y="265" textAnchor="middle" fill="#00ffff" fontSize="11">
              QUANTUM CORE 1024 DISPLAY
            </text>

            {/* Circuit Pattern Visualization */}
            <g opacity="0.6">
              {/* Concentric circles representing quantum core */}
              <circle cx="250" cy="330" r="60" fill="none" stroke="#00ffff" strokeWidth="1" />
              <circle cx="250" cy="330" r="45" fill="none" stroke="#8b5cf6" strokeWidth="1" />
              <circle cx="250" cy="330" r="30" fill="none" stroke="#00ffff" strokeWidth="1" />
              <circle cx="250" cy="330" r="15" fill="none" stroke="#8b5cf6" strokeWidth="1" />

              {/* Circuit traces */}
              {[0,45,90,135,180,225,270,315].map(angle => {
                const rad = (angle * Math.PI) / 180;
                const x1 = 250 + 30 * Math.cos(rad);
                const y1 = 330 + 30 * Math.sin(rad);
                const x2 = 250 + 60 * Math.cos(rad);
                const y2 = 330 + 60 * Math.sin(rad);
                return (
                  <line key={angle} x1={x1} y1={y1} x2={x2} y2={y2}
                        stroke="url(#proGradient)" strokeWidth="0.5" />
                );
              })}

              {/* Central Q symbol */}
              <text x="250" y="345" textAnchor="middle" fill="url(#proGradient)" fontSize="40" fontWeight="bold">Q</text>
            </g>

            {/* Sapphire Window Annotation */}
            <text x="250" y="440" textAnchor="middle" fill="#00ffff" fontSize="7" opacity="0.7">
              * Sapphire crystal window (0.7mm, 9H hardness)
            </text>
            <text x="250" y="452" textAnchor="middle" fill="#00ffff" fontSize="7" opacity="0.7">
              Backlit quantum circuit pattern
            </text>

            {/* Biometric Sensor */}
            <circle cx="250" cy="500" r="40" fill="rgba(139,92,246,0.1)" stroke="#8b5cf6" strokeWidth="2" />
            <circle cx="250" cy="500" r="30" fill="none" stroke="#8b5cf6" strokeWidth="1" strokeDasharray="3,3" />
            <text x="250" cy="505" textAnchor="middle" fill="#8b5cf6" fontSize="24">⊕</text>
            <text x="250" y="555" textAnchor="middle" fill="#8b5cf6" fontSize="9">
              Enhanced Biophire Censor
            </text>
            <text x="250" y="567" textAnchor="middle" fill="#8b5cf6" fontSize="7" opacity="0.7">
              Oleophobic Coated Ceramic Surface
            </text>

            {/* Enhanced NFC Zone */}
            <rect x="130" y="585" width="240" height="50" rx="8"
                  fill="none" stroke="url(#proGradient)" strokeWidth="1.5" />
            <text x="250" y="608" textAnchor="middle" fill="#00ffff" fontSize="10">
              ))) ENHANCED NFC ZONE (((
            </text>
            <text x="250" y="622" textAnchor="middle" fill="#00ffff" fontSize="8" opacity="0.7">
              40mm x 15mm area
            </text>

            {/* USB-C Port */}
            <rect x="225" y="650" width="50" height="12" rx="3"
                  fill="#00ffff" opacity="0.3" stroke="#00ffff" strokeWidth="1" />
            <text x="250" y="680" textAnchor="middle" fill="#00ffff" fontSize="8">
              Reinforced USB 3.2 Gen 2x2
            </text>
          </svg>

          {/* Titanium Shell Details */}
          <div className="glass-card p-6">
            <h4 className="font-semibold text-quantum-cyan mb-4">TITANIUM SHELL + ANTI-TAMPER MESH</h4>
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-start gap-3">
                <div className="w-1 h-1 bg-quantum-cyan rounded-full mt-2" />
                <div>
                  <div className="font-semibold text-white mb-1">Tamper-Evident Enclosure</div>
                  <div className="text-gray-400 text-xs">Ultrasonic welded shell with detection mesh</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1 h-1 bg-quantum-cyan rounded-full mt-2" />
                <div>
                  <div className="font-semibold text-white mb-1">Holographic Security Seal</div>
                  <div className="text-gray-400 text-xs">Custom QR + UUID printed seal across seam</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1 h-1 bg-quantum-cyan rounded-full mt-2" />
                <div>
                  <div className="font-semibold text-white mb-1">Response Mechanism</div>
                  <div className="text-gray-400 text-xs">Permanent lock + automatic data wipe on breach</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Annotations & Specs */}
        <div className="space-y-6">
          {/* Side View with Dimensions */}
          <svg viewBox="0 0 350 700" className="w-full border-2 border-quantum-violet/30 rounded-lg bg-gradient-to-br from-purple-900/20 to-transparent p-8">
            <defs>
              <pattern id="hatch" patternUnits="userSpaceOnUse" width="4" height="4" patternTransform="rotate(45)">
                <line x1="0" y1="0" x2="0" y2="4" stroke="rgba(139,92,246,0.3)" strokeWidth="1"/>
              </pattern>
            </defs>

            <text x="175" y="40" textAnchor="middle" fill="#8b5cf6" fontSize="14" fontWeight="bold">
              TITANIUM SHELL +
            </text>
            <text x="175" y="60" textAnchor="middle" fill="#8b5cf6" fontSize="14" fontWeight="bold">
              ANTI-TAMPER MESH
            </text>

            {/* Side Profile - Thicker Pro Version */}
            <rect x="140" y="100" width="70" height="540" rx="12"
                  fill="url(#hatch)" stroke="url(#proGradient)" strokeWidth="2" />

            {/* Thickness dimension */}
            <line x1="100" y1="370" x2="140" y2="370" stroke="#8b5cf6" strokeWidth="1" />
            <line x1="210" y1="370" x2="250" y2="370" stroke="#8b5cf6" strokeWidth="1" />
            <text x="175" y="390" textAnchor="middle" fill="#8b5cf6" fontSize="12" fontWeight="bold">
              10-12mm
            </text>

            {/* USB + BT indicators */}
            <rect x="155" y="650" width="40" height="10" rx="2" fill="#00ffff" opacity="0.4" />
            <circle cx="160" cy="645" r="3" fill="#4a90e2" />

            <text x="175" y="685" textAnchor="middle" fill="#00ffff" fontSize="8">USB-C</text>
            <text x="220" y="685" textAnchor="middle" fill="#4a90e2" fontSize="8">BT</text>
          </svg>

          {/* Premium Materials */}
          <div className="glass-card p-6">
            <h4 className="font-semibold text-quantum-violet mb-4">PREMIUM MATERIALS & FINISH</h4>
            <div className="space-y-4 text-sm">
              <div>
                <div className="text-quantum-cyan font-semibold mb-1">Body Material</div>
                <div className="text-gray-300">Titanium alloy (Grade 5 - Ti-6Al-4V)</div>
                <div className="text-gray-400 text-xs mt-1">Or premium 7075 aluminum</div>
              </div>
              <div>
                <div className="text-quantum-cyan font-semibold mb-1">Surface Treatment</div>
                <div className="text-gray-300">PVD coating + anodizing (2-5 microns)</div>
              </div>
              <div>
                <div className="text-quantum-cyan font-semibold mb-1">Premium Finishes</div>
                <div className="flex gap-3 mt-2 flex-wrap">
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-12 h-12 rounded-lg bg-gray-700 border-2 border-quantum-cyan/50" />
                    <span className="text-xs text-gray-400">Quantum Charcoal</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-12 h-12 rounded-lg bg-black border-2 border-yellow-600/50" />
                    <span className="text-xs text-gray-400">Obsidian Black</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-12 h-12 rounded-lg bg-gray-500 border-2 border-quantum-cyan/50" />
                    <span className="text-xs text-gray-400">Titanium Raw</span>
                  </div>
                </div>
              </div>
              <div>
                <div className="text-quantum-cyan font-semibold mb-1">Glass</div>
                <div className="text-gray-300">Sapphire crystal (0.7mm, 9H hardness)</div>
              </div>
              <div>
                <div className="text-quantum-cyan font-semibold mb-1">Special Features</div>
                <div className="text-gray-300">Diamond-cut chamfered edges</div>
              </div>
            </div>
          </div>

          {/* USB-C & Connectivity */}
          <div className="glass-card p-6">
            <h4 className="font-semibold text-quantum-violet mb-4">USB - BT CONNECTIVITY</h4>
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex justify-between">
                <span>USB-C Type</span>
                <span className="text-quantum-cyan font-mono">3.2 Gen 2x2</span>
              </div>
              <div className="flex justify-between">
                <span>Transfer Speed</span>
                <span className="text-quantum-cyan font-mono">20 Gbps</span>
              </div>
              <div className="flex justify-between">
                <span>Bluetooth</span>
                <span className="text-quantum-cyan">BLE 5.2</span>
              </div>
              <div className="flex justify-between">
                <span>BT Range</span>
                <span className="text-quantum-cyan font-mono">up to 10m</span>
              </div>
              <div className="flex justify-between">
                <span>Water Resistance</span>
                <span className="text-quantum-cyan">IP65</span>
              </div>
              <div className="flex justify-between">
                <span>Durability</span>
                <span className="text-quantum-cyan font-mono">10,000+ cycles</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// 3D Photorealistic Render View for QuantumShield One
function Render3DViewOne() {
  return (
    <div className="space-y-8">
      {/* Main 3D Render */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-radial from-quantum-cyan/20 via-transparent to-quantum-violet/20 blur-3xl" />
        <div className="relative glass-card p-16 bg-gradient-to-br from-gray-900/50 to-black/50">
          <div className="flex items-center justify-center min-h-[700px]">
            <svg viewBox="0 0 600 900" className="w-full max-w-2xl drop-shadow-2xl">
              <defs>
                {/* Realistic Metallic Gradient */}
                <linearGradient id="metalBody" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#6a6a6a" />
                  <stop offset="30%" stopColor="#8a8a8a" />
                  <stop offset="50%" stopColor="#5a5a5a" />
                  <stop offset="70%" stopColor="#7a7a7a" />
                  <stop offset="100%" stopColor="#4a4a4a" />
                </linearGradient>

                {/* Cyan Edge Glow */}
                <linearGradient id="edgeGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00ffff" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="#00bfff" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#0099ff" stopOpacity="0.8" />
                </linearGradient>

                {/* Realistic shadow */}
                <filter id="dropShadow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur in="SourceAlpha" stdDeviation="10"/>
                  <feOffset dx="0" dy="20" result="offsetblur"/>
                  <feComponentTransfer>
                    <feFuncA type="linear" slope="0.5"/>
                  </feComponentTransfer>
                  <feMerge>
                    <feMergeNode/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>

                {/* LED Glow */}
                <filter id="ledGlow">
                  <feGaussianBlur stdDeviation="5" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>

              {/* Main Device Body with realistic 3D perspective */}
              <g filter="url(#dropShadow)">
                {/* Back face (for 3D depth) */}
                <rect x="138" y="148" width="324" height="604" rx="25"
                      fill="url(#metalBody)" opacity="0.3" />

                {/* Main front face */}
                <rect x="150" y="150" width="300" height="600" rx="25"
                      fill="url(#metalBody)" stroke="url(#edgeGlow)" strokeWidth="2" />

                {/* Brushed metal texture lines */}
                {Array.from({ length: 60 }).map((_, i) => (
                  <line key={i} x1="150" y1={150 + i * 10} x2="450" y2={150 + i * 10}
                        stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
                ))}

                {/* Chamfered edge highlight */}
                <path d="M 150 175 L 450 175" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
                <path d="M 150 725 L 450 725" stroke="rgba(0,0,0,0.4)" strokeWidth="1" />

                {/* Cyan accent edge glow */}
                <rect x="150" y="150" width="300" height="600" rx="25"
                      fill="none" stroke="url(#edgeGlow)" strokeWidth="1.5" opacity="0.6" />

                {/* Branding - Laser etched */}
                <text x="300" y="210" textAnchor="middle" fill="rgba(255,255,255,0.5)"
                      fontSize="14" fontWeight="600" letterSpacing="4">
                  QUANTUMSHIELD
                </text>
                <rect x="240" y="220" width="120" height="1" fill="rgba(0,255,255,0.4)" />

                {/* Status LEDs with realistic glow */}
                <circle cx="270" cy="260" r="6" fill="#00ffff" filter="url(#ledGlow)">
                  <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite" />
                </circle>
                <circle cx="330" cy="260" r="6" fill="#8b5cf6" filter="url(#ledGlow)">
                  <animate attributeName="opacity" values="0.4;0.9;0.4" dur="2s" begin="0.5s" repeatCount="indefinite" />
                </circle>

                {/* Quantum Core with depth */}
                <g>
                  {/* Shadow layer */}
                  <circle cx="300" cy="425" r="82" fill="rgba(0,0,0,0.3)" />

                  {/* Main core area - recessed */}
                  <circle cx="300" cy="425" r="80" fill="rgba(0,0,0,0.6)" />
                  <circle cx="300" cy="425" r="75" fill="url(#edgeGlow)" opacity="0.05" />

                  {/* Concentric rings */}
                  <circle cx="300" cy="425" r="70" fill="none" stroke="url(#edgeGlow)" strokeWidth="1.5" opacity="0.5" />
                  <circle cx="300" cy="425" r="55" fill="none" stroke="url(#edgeGlow)" strokeWidth="1" opacity="0.6" />
                  <circle cx="300" cy="425" r="40" fill="none" stroke="#8b5cf6" strokeWidth="1.5" opacity="0.7" />
                  <circle cx="300" cy="425" r="25" fill="none" stroke="url(#edgeGlow)" strokeWidth="1" opacity="0.8" />

                  {/* Quantum symbol with glow */}
                  <text x="300" y="445" textAnchor="middle" fill="url(#edgeGlow)"
                        fontSize="48" filter="url(#ledGlow)" opacity="0.9">⊕</text>

                  {/* Glass window reflection */}
                  <ellipse cx="280" cy="405" rx="30" ry="20" fill="rgba(255,255,255,0.1)"
                          transform="rotate(-30 280 405)" />
                </g>

                {/* Touch sensor area with sapphire glass effect */}
                <rect x="270" y="395" width="60" height="60" rx="10"
                      fill="rgba(139,92,246,0.1)" stroke="rgba(139,92,246,0.3)" strokeWidth="1" />
                <rect x="272" y="397" width="56" height="56" rx="8"
                      fill="rgba(255,255,255,0.05)" />

                {/* NFC Zone with wave pattern */}
                <g>
                  <path d="M 200 620 Q 300 610 400 620"
                        stroke="url(#edgeGlow)" strokeWidth="2" fill="none" opacity="0.6" />
                  <path d="M 210 635 Q 300 625 390 635"
                        stroke="url(#edgeGlow)" strokeWidth="1.5" fill="none" opacity="0.5" />
                  <path d="M 220 650 Q 300 640 380 650"
                        stroke="url(#edgeGlow)" strokeWidth="1" fill="none" opacity="0.4" />

                  {/* NFC symbol */}
                  <text x="300" y="675" textAnchor="middle" fill="rgba(0,255,255,0.4)" fontSize="10">
                    NFC ZONE
                  </text>
                </g>

                {/* USB-C Port - realistic connector */}
                <g>
                  {/* Port recess */}
                  <rect x="285" y="730" width="30" height="10" rx="3"
                        fill="rgba(0,0,0,0.8)" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
                  {/* Connector inside */}
                  <rect x="289" y="733" width="22" height="4" rx="1"
                        fill="rgba(100,100,100,0.6)" />
                  {/* Metallic shine */}
                  <rect x="289" y="733" width="22" height="1" rx="0.5"
                        fill="rgba(255,255,255,0.3)" />
                </g>

                {/* Ambient reflection on edges */}
                <ellipse cx="200" cy="300" rx="40" ry="80" fill="rgba(255,255,255,0.03)" opacity="0.5" />
                <ellipse cx="400" cy="500" rx="30" ry="60" fill="rgba(0,255,255,0.02)" opacity="0.5" />
              </g>

              {/* Shadow on ground */}
              <ellipse cx="300" cy="880" rx="140" ry="15" fill="rgba(0,0,0,0.4)" opacity="0.6" />
            </svg>
          </div>

          {/* Feature Callouts with Lines */}
          <div className="absolute top-32 right-12 glass-card p-4 max-w-xs">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-3 h-3 rounded-full bg-quantum-cyan" />
              <div>
                <div className="text-sm font-semibold text-white">Status LEDs</div>
                <div className="text-xs text-gray-400">RGB SMD (0603) - Cyan/Violet</div>
              </div>
            </div>
          </div>

          <div className="absolute top-1/2 left-12 glass-card p-4 max-w-xs">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-3 h-3 rounded-full bg-quantum-cyan" />
              <div>
                <div className="text-sm font-semibold text-white">Quantum Core</div>
                <div className="text-xs text-gray-400">Backlit indicator with sapphire glass</div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-32 right-12 glass-card p-4 max-w-xs">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-3 h-3 rounded-full bg-quantum-cyan" />
              <div>
                <div className="text-sm font-semibold text-white">NFC Antenna</div>
                <div className="text-xs text-gray-400">Three concentric arc etch marks</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dimensions Overlay */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="glass-card p-6 text-center">
          <div className="text-4xl font-bold text-quantum-cyan mb-2">60-65mm</div>
          <div className="text-sm text-gray-400">Length</div>
        </div>
        <div className="glass-card p-6 text-center">
          <div className="text-4xl font-bold text-quantum-cyan mb-2">25-30mm</div>
          <div className="text-sm text-gray-400">Width</div>
        </div>
        <div className="glass-card p-6 text-center">
          <div className="text-4xl font-bold text-quantum-cyan mb-2">8-10mm</div>
          <div className="text-sm text-gray-400">Thickness</div>
        </div>
      </div>
    </div>
  );
}

// 3D Photorealistic Render View for QuantumShield Pro
function Render3DViewPro() {
  return (
    <div className="space-y-8">
      {/* Main 3D Render with Enhanced Effects */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-radial from-quantum-violet/30 via-transparent to-quantum-cyan/30 blur-3xl" />
        <div className="relative glass-card p-16 bg-gradient-to-br from-black/70 to-gray-900/50">
          <div className="flex items-center justify-center min-h-[800px]">
            <svg viewBox="0 0 700 1000" className="w-full max-w-3xl drop-shadow-2xl">
              <defs>
                {/* Premium Titanium Gradient */}
                <linearGradient id="titaniumBody" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#4a4a4a" />
                  <stop offset="25%" stopColor="#6a6a6a" />
                  <stop offset="50%" stopColor="#5a5a5a" />
                  <stop offset="75%" stopColor="#7a7a7a" />
                  <stop offset="100%" stopColor="#3a3a3a" />
                </linearGradient>

                {/* Cyan-Violet Edge Gradient */}
                <linearGradient id="proEdgeGlow" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#00ffff" stopOpacity="1" />
                  <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#00ffff" stopOpacity="1" />
                </linearGradient>

                {/* Holographic Seal */}
                <radialGradient id="hologram">
                  <stop offset="0%" stopColor="#00ffff" stopOpacity="0.8" />
                  <stop offset="30%" stopColor="#ff00ff" stopOpacity="0.6" />
                  <stop offset="60%" stopColor="#ffff00" stopOpacity="0.7" />
                  <stop offset="100%" stopColor="#00ffff" stopOpacity="0.5" />
                </radialGradient>

                {/* Enhanced LED Glow */}
                <filter id="proLedGlow">
                  <feGaussianBlur stdDeviation="6" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>

                {/* Premium Shadow */}
                <filter id="premiumShadow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur in="SourceAlpha" stdDeviation="15"/>
                  <feOffset dx="5" dy="25" result="offsetblur"/>
                  <feComponentTransfer>
                    <feFuncA type="linear" slope="0.6"/>
                  </feComponentTransfer>
                  <feMerge>
                    <feMergeNode/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>

              {/* Main Premium Device Body */}
              <g filter="url(#premiumShadow)">
                {/* Depth layer */}
                <rect x="133" y="98" width="434" height="804" rx="30"
                      fill="url(#titaniumBody)" opacity="0.4" />

                {/* Main face */}
                <rect x="150" y="100" width="400" height="800" rx="30"
                      fill="url(#titaniumBody)" stroke="url(#proEdgeGlow)" strokeWidth="3" />

                {/* Diamond-cut chamfered edges */}
                <path d="M 180 100 L 520 100" stroke="rgba(255,255,255,0.6)" strokeWidth="2" />
                <path d="M 180 900 L 520 900" stroke="rgba(0,0,0,0.6)" strokeWidth="2" />
                <line x1="150" y1="130" x2="150" y2="870" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
                <line x1="550" y1="130" x2="550" y2="870" stroke="rgba(0,0,0,0.3)" strokeWidth="1" />

                {/* Brushed titanium texture */}
                {Array.from({ length: 80 }).map((_, i) => (
                  <line key={i} x1="150" y1={100 + i * 10} x2="550" y2={100 + i * 10}
                        stroke="rgba(255,255,255,0.02)" strokeWidth="0.5" />
                ))}

                {/* Premium Badge with metallic inlay effect */}
                <g>
                  <rect x="220" y="140" width="260" height="50" rx="10"
                        fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
                  <rect x="222" y="142" width="256" height="46" rx="9"
                        fill="url(#titaniumBody)" />
                  <text x="350" y="172" textAnchor="middle" fill="#fff"
                        fontSize="20" fontWeight="700" letterSpacing="4">
                    QUANTUMSHIELD
                  </text>
                </g>

                {/* PRO Badge with gradient */}
                <rect x="490" y="157" width="45" height="20" rx="5" fill="url(#proEdgeGlow)" />
                <text x="512" y="171" textAnchor="middle" fill="#000" fontSize="12" fontWeight="bold">PRO</text>

                {/* Quantum Activity Array - 5 Premium LEDs */}
                <text x="350" y="220" textAnchor="middle" fill="rgba(0,255,255,0.7)" fontSize="11">
                  QUANTUM ACTIVITY ARRAY
                </text>
                <g>
                  {[0,1,2,3,4,5].map(i => (
                    <circle key={i} cx={250 + i * 40} cy="245" r="7"
                            fill={i === 2 ? "#8b5cf6" : "#00ffff"}
                            filter="url(#proLedGlow)" opacity="0.9">
                      <animate attributeName="opacity"
                              values="0.5;1;0.5"
                              dur={`${2.5 + i * 0.2}s`}
                              repeatCount="indefinite" />
                    </circle>
                  ))}
                </g>

                {/* Quantum Core 1024 Display - Advanced */}
                <g>
                  {/* Display recess with depth */}
                  <rect x="230" y="285" width="240" height="200" rx="15"
                        fill="rgba(0,0,0,0.9)" stroke="url(#proEdgeGlow)" strokeWidth="2.5" />

                  <text x="350" y="310" textAnchor="middle" fill="rgba(0,255,255,0.8)" fontSize="12">
                    QUANTUM CORE 1024 DISPLAY
                  </text>

                  {/* Advanced Circuit Pattern */}
                  <g opacity="0.7">
                    {/* Central quantum core visualization */}
                    <circle cx="350" cy="390" r="65" fill="url(#proEdgeGlow)" opacity="0.1" filter="url(#proLedGlow)" />
                    <circle cx="350" cy="390" r="55" fill="none" stroke="#00ffff" strokeWidth="1.5" />
                    <circle cx="350" cy="390" r="42" fill="none" stroke="#8b5cf6" strokeWidth="1.2" />
                    <circle cx="350" cy="390" r="30" fill="none" stroke="#00ffff" strokeWidth="1.5" />
                    <circle cx="350" cy="390" r="18" fill="none" stroke="#8b5cf6" strokeWidth="1" />

                    {/* Circuit traces radiating outward */}
                    {Array.from({length: 12}).map((_, i) => {
                      const angle = (i * 30) * Math.PI / 180;
                      const x1 = 350 + 30 * Math.cos(angle);
                      const y1 = 390 + 30 * Math.sin(angle);
                      const x2 = 350 + 65 * Math.cos(angle);
                      const y2 = 390 + 65 * Math.sin(angle);
                      return (
                        <g key={i}>
                          <line x1={x1} y1={y1} x2={x2} y2={y2}
                                stroke="url(#proEdgeGlow)" strokeWidth="0.8" />
                          <circle cx={x2} cy={y2} r="2" fill="url(#proEdgeGlow)" />
                        </g>
                      );
                    })}

                    {/* Central Q with glow */}
                    <text x="350" y="410" textAnchor="middle" fill="url(#proEdgeGlow)"
                          fontSize="56" fontWeight="bold" filter="url(#proLedGlow)">Q</text>
                  </g>

                  {/* Sapphire crystal reflection */}
                  <ellipse cx="310" cy="350" rx="40" ry="25" fill="rgba(255,255,255,0.12)"
                          transform="rotate(-25 310 350)" />
                </g>

                {/* Enhanced Biometric Sensor */}
                <g>
                  <circle cx="350" cy="560" r="50" fill="rgba(0,0,0,0.6)"
                          stroke="url(#proEdgeGlow)" strokeWidth="2.5" />
                  <circle cx="350" cy="560" r="42" fill="none" stroke="#8b5cf6"
                          strokeWidth="1" strokeDasharray="4,4" />
                  <circle cx="350" cy="560" r="34" fill="rgba(139,92,246,0.1)" />

                  {/* Fingerprint pattern */}
                  {[0,1,2,3,4].map(i => (
                    <ellipse key={i} cx="350" cy="560" rx={28 - i * 5} ry={30 - i * 5}
                            fill="none" stroke="rgba(139,92,246,0.3)" strokeWidth="0.8" />
                  ))}

                  <text x="350" y="565" textAnchor="middle" fill="#8b5cf6"
                        fontSize="28" opacity="0.8">⊕</text>

                  <text x="350" y="620" textAnchor="middle" fill="rgba(139,92,246,0.8)" fontSize="10">
                    Enhanced Biometric Sensor
                  </text>
                  <text x="350" y="635" textAnchor="middle" fill="rgba(139,92,246,0.6)" fontSize="8">
                    Oleophobic Coated Ceramic Surface
                  </text>

                  {/* Glass shine */}
                  <ellipse cx="335" cy="545" rx="15" ry="10" fill="rgba(255,255,255,0.15)"
                          transform="rotate(-30 335 545)" />
                </g>

                {/* Enhanced NFC Zone with wave animation */}
                <g>
                  <rect x="220" y="680" width="260" height="60" rx="12"
                        fill="rgba(0,255,255,0.03)" stroke="url(#proEdgeGlow)" strokeWidth="2" />

                  <text x="350" y="710" textAnchor="middle" fill="rgba(0,255,255,0.8)" fontSize="12">
                    ))) ENHANCED NFC ZONE (((
                  </text>

                  {/* Wave pattern */}
                  <path d="M 240 725 Q 280 720 320 725 Q 360 730 400 725 Q 440 720 460 725"
                        stroke="url(#proEdgeGlow)" strokeWidth="1.5" fill="none" opacity="0.6">
                    <animate attributeName="d"
                            values="M 240 725 Q 280 720 320 725 Q 360 730 400 725 Q 440 720 460 725;
                                    M 240 725 Q 280 730 320 725 Q 360 720 400 725 Q 440 730 460 725;
                                    M 240 725 Q 280 720 320 725 Q 360 730 400 725 Q 440 720 460 725"
                            dur="3s" repeatCount="indefinite" />
                  </path>

                  <text x="350" y="735" textAnchor="middle" fill="rgba(0,255,255,0.6)" fontSize="8">
                    40mm x 15mm area
                  </text>
                </g>

                {/* Holographic Tamper-Evident Seal on Side */}
                <g>
                  <rect x="560" y="400" width="30" height="100" rx="5"
                        fill="url(#hologram)" opacity="0.7" filter="url(#proLedGlow)" />
                  <text x="575" y="455" textAnchor="middle" fill="#000"
                        fontSize="7" fontWeight="bold" transform="rotate(90 575 455)">
                    TAMPER EVIDENT
                  </text>

                  {/* QR Code pattern */}
                  <g transform="translate(565, 420)">
                    {Array.from({length: 5}).map((_, i) =>
                      Array.from({length: 10}).map((_, j) => (
                        <rect key={`${i}-${j}`} x={i * 4} y={j * 4} width="3" height="3"
                              fill={Math.random() > 0.5 ? '#000' : 'transparent'} opacity="0.6" />
                      ))
                    )}
                  </g>
                </g>

                {/* Reinforced USB-C Port */}
                <g>
                  <rect x="320" y="870" width="60" height="14" rx="4"
                        fill="rgba(0,0,0,0.9)" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
                  <rect x="325" y="874" width="50" height="6" rx="2"
                        fill="rgba(120,120,120,0.5)" />
                  <rect x="325" y="874" width="50" height="2" rx="1"
                        fill="rgba(255,255,255,0.4)" />

                  {/* USB-C LEDs */}
                  <circle cx="315" cy="877" r="2" fill="#00ffff" opacity="0.8" />
                  <circle cx="385" cy="877" r="2" fill="#4a90e2" opacity="0.8" />
                </g>

                {/* Diamond-cut edge highlights with gradient */}
                <rect x="150" y="100" width="400" height="800" rx="30"
                      fill="none" stroke="url(#proEdgeGlow)" strokeWidth="2" opacity="0.8" />

                {/* Ambient lighting effects */}
                <ellipse cx="200" cy="300" rx="60" ry="120" fill="rgba(0,255,255,0.03)" opacity="0.6" />
                <ellipse cx="500" cy="600" rx="50" ry="100" fill="rgba(139,92,246,0.03)" opacity="0.6" />
              </g>

              {/* Premium shadow on surface */}
              <ellipse cx="350" cy="980" rx="180" ry="20" fill="rgba(0,0,0,0.5)" opacity="0.7" />
            </svg>
          </div>

          {/* Enhanced Feature Callouts */}
          <div className="absolute top-24 right-16 glass-card p-5 max-w-sm border border-quantum-cyan/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-4 h-4 rounded-full bg-gradient-to-r from-quantum-cyan to-quantum-violet" />
              <div>
                <div className="text-sm font-bold text-white">5-LED Activity Array</div>
                <div className="text-xs text-gray-400">Professional RGB LED indicators</div>
                <div className="text-xs text-quantum-cyan mt-1">50-100 mcd brightness</div>
              </div>
            </div>
          </div>

          <div className="absolute top-1/3 left-16 glass-card p-5 max-w-sm border border-quantum-violet/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-4 h-4 rounded-full bg-quantum-violet" />
              <div>
                <div className="text-sm font-bold text-white">Quantum Core 1024</div>
                <div className="text-xs text-gray-400">Sapphire crystal window display</div>
                <div className="text-xs text-quantum-violet mt-1">Full RGB backlit circuit pattern</div>
              </div>
            </div>
          </div>

          <div className="absolute top-2/3 left-16 glass-card p-5 max-w-sm border border-quantum-violet/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-4 h-4 rounded-full bg-quantum-violet" />
              <div>
                <div className="text-sm font-bold text-white">Biometric Sensor</div>
                <div className="text-xs text-gray-400">FBI PIV compliant, 508 DPI</div>
                <div className="text-xs text-quantum-violet mt-1">Oleophobic ceramic surface</div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-32 right-16 glass-card p-5 max-w-sm border border-quantum-cyan/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-4 h-4 rounded-full bg-gradient-to-r from-quantum-cyan to-quantum-violet" />
              <div>
                <div className="text-sm font-bold text-white">Enhanced NFC Zone</div>
                <div className="text-xs text-gray-400">Extended range up to 10cm</div>
                <div className="text-xs text-quantum-cyan mt-1">ISO/IEC 14443 Type A & B</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pro Dimensions */}
      <div className="grid md:grid-cols-4 gap-6">
        <div className="glass-card p-6 text-center border border-quantum-cyan/20">
          <div className="text-4xl font-bold text-quantum-cyan mb-2">75-80mm</div>
          <div className="text-sm text-gray-400">Length</div>
        </div>
        <div className="glass-card p-6 text-center border border-quantum-violet/20">
          <div className="text-4xl font-bold text-quantum-violet mb-2">35-40mm</div>
          <div className="text-sm text-gray-400">Width</div>
        </div>
        <div className="glass-card p-6 text-center border border-quantum-cyan/20">
          <div className="text-4xl font-bold text-quantum-cyan mb-2">10-12mm</div>
          <div className="text-sm text-gray-400">Thickness</div>
        </div>
        <div className="glass-card p-6 text-center border border-quantum-violet/20">
          <div className="text-4xl font-bold text-quantum-violet mb-2">40-50g</div>
          <div className="text-sm text-gray-400">Weight</div>
        </div>
      </div>
    </div>
  );
}

// Exploded View Component - Professional 3D Vectors
function ExplodedViewOne() {
  return (
    <div className="glass-card p-12 bg-gradient-to-br from-quantum-charcoal/50 to-black/50">
      <div className="text-center mb-12">
        <h3 className="text-3xl font-display font-bold mb-3 gradient-text">Exploded Component View</h3>
        <p className="text-gray-400">Internal component breakdown - QuantumShield One</p>
      </div>

      <div className="relative max-w-5xl mx-auto">
        <svg viewBox="0 0 1000 1400" className="w-full">
          <defs>
            {/* Gradients for realistic materials */}
            <linearGradient id="aluminumShell" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8a8a8a" />
              <stop offset="50%" stopColor="#6a6a6a" />
              <stop offset="100%" stopColor="#5a5a5a" />
            </linearGradient>
            <linearGradient id="pcbGreen" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2d5016" />
              <stop offset="50%" stopColor="#1a3d0f" />
              <stop offset="100%" stopColor="#0f2508" />
            </linearGradient>
            <linearGradient id="chipBlue" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1e40af" />
              <stop offset="50%" stopColor="#1e3a8a" />
              <stop offset="100%" stopColor="#1e293b" />
            </linearGradient>
            <linearGradient id="secureElement" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#7c3aed" />
              <stop offset="50%" stopColor="#6d28d9" />
              <stop offset="100%" stopColor="#5b21b6" />
            </linearGradient>
            <linearGradient id="nfcCopper" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#d97706" />
              <stop offset="50%" stopColor="#b45309" />
              <stop offset="100%" stopColor="#92400e" />
            </linearGradient>
            <linearGradient id="sensorGlass" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#0891b2" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#0e7490" stopOpacity="0.6" />
            </linearGradient>
            <filter id="componentShadow">
              <feGaussianBlur in="SourceAlpha" stdDeviation="8"/>
              <feOffset dx="0" dy="10" result="offsetblur"/>
              <feComponentTransfer>
                <feFuncA type="linear" slope="0.4"/>
              </feComponentTransfer>
              <feMerge>
                <feMergeNode/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
            <filter id="ledGlow">
              <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* Component 1: Top Aluminum Shell */}
          <g transform="translate(0, 0)" filter="url(#componentShadow)">
            <rect x="250" y="20" width="500" height="120" rx="15" fill="url(#aluminumShell)" stroke="#00f5ff" strokeWidth="2" opacity="0.95"/>
            {/* Brushed metal texture */}
            {Array.from({ length: 12 }).map((_, i) => (
              <line key={i} x1="250" y1={20 + i * 10} x2="750" y2={20 + i * 10}
                    stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
            ))}
            {/* LED holes */}
            <circle cx="450" cy="80" r="8" fill="rgba(0,0,0,0.8)" stroke="#00f5ff" strokeWidth="1"/>
            <circle cx="550" cy="80" r="8" fill="rgba(0,0,0,0.8)" stroke="#8b5cf6" strokeWidth="1"/>
            {/* Connection line */}
            <line x1="500" y1="140" x2="500" y2="180" stroke="#00f5ff" strokeWidth="1.5" strokeDasharray="5,5" opacity="0.6"/>
            <text x="880" y="85" fill="#00f5ff" fontSize="18" fontWeight="600">Top Shell</text>
            <text x="880" y="105" fill="#9ca3af" fontSize="14">Aircraft-grade aluminum 6061-T6</text>
          </g>

          {/* Component 2: LED PCB Assembly */}
          <g transform="translate(0, 180)" filter="url(#componentShadow)">
            <rect x="300" y="0" width="400" height="80" rx="8" fill="url(#pcbGreen)" stroke="#2d5016" strokeWidth="2"/>
            {/* Circuit traces */}
            <path d="M 320 40 L 380 40 L 400 20 L 460 20 L 480 40 L 540 40"
                  stroke="#d4af37" strokeWidth="2" fill="none" opacity="0.7"/>
            <path d="M 540 40 L 600 40 L 620 60 L 680 60"
                  stroke="#d4af37" strokeWidth="2" fill="none" opacity="0.7"/>
            {/* SMD LEDs */}
            <rect x="430" y="35" width="20" height="10" rx="2" fill="#00f5ff" filter="url(#ledGlow)">
              <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite"/>
            </rect>
            <rect x="550" y="35" width="20" height="10" rx="2" fill="#8b5cf6" filter="url(#ledGlow)">
              <animate attributeName="opacity" values="0.5;0.9;0.5" dur="2.5s" repeatCount="indefinite"/>
            </rect>
            {/* Solder points */}
            {[340, 380, 460, 540, 620, 660].map((x) => (
              <circle key={x} cx={x} cy="40" r="4" fill="#c0c0c0" opacity="0.8"/>
            ))}
            <line x1="500" y1="80" x2="500" y2="130" stroke="#2d5016" strokeWidth="1.5" strokeDasharray="5,5" opacity="0.6"/>
            <text x="850" y="45" fill="#4ade80" fontSize="18" fontWeight="600">LED PCB</text>
            <text x="850" y="65" fill="#9ca3af" fontSize="14">RGB SMD 0603 indicators</text>
          </g>

          {/* Component 3: QRNG Chip */}
          <g transform="translate(0, 310)" filter="url(#componentShadow)">
            <rect x="325" y="0" width="350" height="100" rx="6" fill="#1a1a2e" stroke="#1e40af" strokeWidth="2"/>
            {/* Chip package */}
            <rect x="425" y="20" width="150" height="60" rx="4" fill="url(#chipBlue)" stroke="#60a5fa" strokeWidth="1.5"/>
            {/* Chip pins */}
            {Array.from({ length: 16 }).map((_, i) => (
              <rect key={`pin-${i}`} x={430 + i * 9} y="8" width="6" height="8" fill="#c0c0c0"/>
            ))}
            {/* Quantum core visualization */}
            <circle cx="500" cy="50" r="20" fill="none" stroke="#00f5ff" strokeWidth="1.5" opacity="0.8"/>
            <circle cx="500" cy="50" r="12" fill="none" stroke="#00f5ff" strokeWidth="1" opacity="0.6">
              <animate attributeName="r" values="10;14;10" dur="3s" repeatCount="indefinite"/>
              <animate attributeName="opacity" values="0.4;0.8;0.4" dur="3s" repeatCount="indefinite"/>
            </circle>
            <circle cx="500" cy="50" r="4" fill="#00f5ff" filter="url(#ledGlow)"/>
            <line x1="500" y1="100" x2="500" y2="150" stroke="#1e40af" strokeWidth="1.5" strokeDasharray="5,5" opacity="0.6"/>
            <text x="820" y="55" fill="#60a5fa" fontSize="18" fontWeight="600">QRNG Chip</text>
            <text x="820" y="75" fill="#9ca3af" fontSize="14">Quantum random number generation</text>
          </g>

          {/* Component 4: Secure Element */}
          <g transform="translate(0, 460)" filter="url(#componentShadow)">
            <rect x="350" y="0" width="300" height="90" rx="6" fill="#1a1a2e" stroke="#7c3aed" strokeWidth="2"/>
            <rect x="425" y="15" width="150" height="60" rx="4" fill="url(#secureElement)" stroke="#a78bfa" strokeWidth="1.5"/>
            {/* Security shield icon */}
            <path d="M 500 30 L 480 35 L 480 55 Q 480 65 500 70 Q 520 65 520 55 L 520 35 Z"
                  fill="#1a1a2e" stroke="#a78bfa" strokeWidth="1.5"/>
            <path d="M 495 45 L 498 50 L 505 42" stroke="#a78bfa" strokeWidth="2" fill="none"/>
            {/* Chip legs */}
            {Array.from({ length: 12 }).map((_, i) => (
              <rect key={`leg-${i}`} x={430 + i * 12} y="5" width="5" height="7" fill="#808080"/>
            ))}
            <line x1="500" y1="90" x2="500" y2="140" stroke="#7c3aed" strokeWidth="1.5" strokeDasharray="5,5" opacity="0.6"/>
            <text x="780" y="50" fill="#a78bfa" fontSize="18" fontWeight="600">Secure Element</text>
            <text x="780" y="70" fill="#9ca3af" fontSize="14">Cryptographic processor with tamper protection</text>
          </g>

          {/* Component 5: NFC Antenna Coil */}
          <g transform="translate(0, 600)" filter="url(#componentShadow)">
            <rect x="300" y="0" width="400" height="100" rx="10" fill="rgba(26,26,46,0.8)" stroke="#d97706" strokeWidth="2"/>
            {/* Spiral antenna coil */}
            <g transform="translate(500, 50)">
              <circle cx="0" cy="0" r="40" fill="none" stroke="url(#nfcCopper)" strokeWidth="4" opacity="0.9"/>
              <circle cx="0" cy="0" r="30" fill="none" stroke="url(#nfcCopper)" strokeWidth="3.5" opacity="0.85"/>
              <circle cx="0" cy="0" r="20" fill="none" stroke="url(#nfcCopper)" strokeWidth="3" opacity="0.8"/>
              <circle cx="0" cy="0" r="10" fill="none" stroke="url(#nfcCopper)" strokeWidth="2.5" opacity="0.75"/>
              {/* Connection point */}
              <line x1="40" y1="0" x2="60" y2="0" stroke="#d97706" strokeWidth="3"/>
              <circle cx="0" cy="0" r="3" fill="#d97706"/>
            </g>
            {/* Wave signals */}
            <path d="M 400 50 Q 420 30 440 50" stroke="#fbbf24" strokeWidth="1.5" fill="none" opacity="0.5">
              <animate attributeName="opacity" values="0.3;0.7;0.3" dur="2s" repeatCount="indefinite"/>
            </path>
            <path d="M 560 50 Q 580 70 600 50" stroke="#fbbf24" strokeWidth="1.5" fill="none" opacity="0.5">
              <animate attributeName="opacity" values="0.3;0.7;0.3" dur="2s" begin="0.5s" repeatCount="indefinite"/>
            </path>
            <line x1="500" y1="100" x2="500" y2="150" stroke="#d97706" strokeWidth="1.5" strokeDasharray="5,5" opacity="0.6"/>
            <text x="820" y="55" fill="#fbbf24" fontSize="18" fontWeight="600">NFC Antenna</text>
            <text x="820" y="75" fill="#9ca3af" fontSize="14">13.56MHz coil - ISO 14443</text>
          </g>

          {/* Component 6: Touch Sensor Layer */}
          <g transform="translate(0, 750)" filter="url(#componentShadow)">
            <rect x="350" y="0" width="300" height="80" rx="8" fill="url(#sensorGlass)" stroke="#06b6d4" strokeWidth="2"/>
            {/* Capacitive touch grid */}
            {Array.from({ length: 5 }).map((_, i) => (
              <line key={`v-${i}`} x1={370 + i * 60} y1="10" x2={370 + i * 60} y2="70"
                    stroke="rgba(255,255,255,0.3)" strokeWidth="1.5"/>
            ))}
            {Array.from({ length: 4 }).map((_, i) => (
              <line key={`h-${i}`} x1="360" y1={20 + i * 15} x2="640" y2={20 + i * 15}
                    stroke="rgba(255,255,255,0.3)" strokeWidth="1.5"/>
            ))}
            {/* Touch point indicator */}
            <circle cx="500" cy="40" r="15" fill="rgba(6,182,212,0.3)" stroke="#06b6d4" strokeWidth="2">
              <animate attributeName="r" values="12;18;12" dur="2s" repeatCount="indefinite"/>
              <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite"/>
            </circle>
            <line x1="500" y1="80" x2="500" y2="130" stroke="#06b6d4" strokeWidth="1.5" strokeDasharray="5,5" opacity="0.6"/>
            <text x="780" y="45" fill="#06b6d4" fontSize="18" fontWeight="600">Touch Sensor</text>
            <text x="780" y="65" fill="#9ca3af" fontSize="14">Capacitive touch detection</text>
          </g>

          {/* Component 7: Bottom Shell */}
          <g transform="translate(0, 880)" filter="url(#componentShadow)">
            <rect x="250" y="0" width="500" height="120" rx="15" fill="url(#aluminumShell)" stroke="#00f5ff" strokeWidth="2" opacity="0.9"/>
            {/* Brushed texture */}
            {Array.from({ length: 12 }).map((_, i) => (
              <line key={i} x1="250" y1={i * 10} x2="750" y2={i * 10}
                    stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
            ))}
            {/* Mounting posts */}
            {[[350, 40], [450, 40], [550, 40], [650, 40]].map(([x, y], i) => (
              <circle key={`post-${i}`} cx={x} cy={y} r="6" fill="#4a4a4a" stroke="#6a6a6a" strokeWidth="1"/>
            ))}
            {/* USB-C cutout */}
            <rect x="475" y="110" width="50" height="15" rx="4" fill="rgba(0,0,0,0.9)" stroke="#00f5ff" strokeWidth="1"/>
            <line x1="500" y1="120" x2="500" y2="170" stroke="#00f5ff" strokeWidth="1.5" strokeDasharray="5,5" opacity="0.6"/>
            <text x="880" y="65" fill="#00f5ff" fontSize="18" fontWeight="600">Bottom Shell</text>
            <text x="880" y="85" fill="#9ca3af" fontSize="14">Aluminum base with mounting posts</text>
          </g>

          {/* Component 8: USB-C Connector */}
          <g transform="translate(0, 1050)" filter="url(#componentShadow)">
            <rect x="400" y="0" width="200" height="80" rx="6" fill="#2a2a2a" stroke="#6b7280" strokeWidth="2"/>
            {/* USB-C port detail */}
            <rect x="470" y="20" width="60" height="25" rx="4" fill="#404040" stroke="#9ca3af" strokeWidth="1.5"/>
            <rect x="475" y="25" width="50" height="15" rx="2" fill="#1a1a1a"/>
            {/* Pins */}
            {Array.from({ length: 12 }).map((_, i) => (
              <rect key={`usb-pin-${i}`} x={478 + i * 4} y="30" width="2" height="5" fill="#c0c0c0"/>
            ))}
            {/* Metallic shine */}
            <rect x="475" y="25" width="50" height="3" rx="1" fill="rgba(255,255,255,0.3)"/>
            {/* Connection dots */}
            <circle cx="435" cy="45" r="4" fill="#00f5ff" opacity="0.8">
              <animate attributeName="opacity" values="0.5;1;0.5" dur="1.5s" repeatCount="indefinite"/>
            </circle>
            <circle cx="565" cy="45" r="4" fill="#00f5ff" opacity="0.8">
              <animate attributeName="opacity" values="0.5;1;0.5" dur="1.5s" begin="0.75s" repeatCount="indefinite"/>
            </circle>
            <text x="720" y="45" fill="#9ca3af" fontSize="18" fontWeight="600">USB-C 3.1 Gen 2</text>
            <text x="720" y="65" fill="#6b7280" fontSize="14">10 Gbps data transfer</text>
          </g>

          {/* Dimension indicators */}
          <g opacity="0.6">
            <line x1="230" y1="20" x2="230" y2="1130" stroke="#00f5ff" strokeWidth="1" strokeDasharray="3,3"/>
            <text x="200" y="575" fill="#00f5ff" fontSize="14" transform="rotate(-90 200 575)">60-65mm Total Height</text>
          </g>
        </svg>

        {/* Legend */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          {[
            { color: 'from-gray-500 to-gray-700', label: 'Aluminum Alloy', icon: '▭' },
            { color: 'from-green-700 to-green-900', label: 'PCB/Circuit', icon: '▭' },
            { color: 'from-blue-600 to-blue-900', label: 'Silicon Chip', icon: '▭' },
            { color: 'from-cyan-500 to-cyan-700', label: 'Sensor/Glass', icon: '▭' },
          ].map((item, i) => (
            <div key={i} className="glass-card p-4 flex items-center gap-3">
              <div className={`w-8 h-8 rounded bg-gradient-to-br ${item.color}`}/>
              <span className="text-sm text-gray-300">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ExplodedViewPro() {
  return (
    <div className="glass-card p-12 bg-gradient-to-br from-quantum-charcoal/50 to-indigo-950/30">
      <div className="text-center mb-12">
        <h3 className="text-4xl font-display font-bold mb-3">
          <span className="gradient-text">Professional</span> Exploded Component View
        </h3>
        <p className="text-gray-400">Advanced internal architecture - QuantumShield Pro</p>
      </div>

      <div className="relative max-w-6xl mx-auto">
        <svg viewBox="0 0 1100 1800" className="w-full">
          <defs>
            {/* Premium materials gradients */}
            <linearGradient id="titaniumShell" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6a6a6a" />
              <stop offset="50%" stopColor="#4a4a4a" />
              <stop offset="100%" stopColor="#3a3a3a" />
            </linearGradient>
            <linearGradient id="tamperMesh" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#dc2626" />
              <stop offset="50%" stopColor="#991b1b" />
              <stop offset="100%" stopColor="#7f1d1d" />
            </linearGradient>
            <linearGradient id="advancedPCB" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#166534" />
              <stop offset="50%" stopColor="#14532d" />
              <stop offset="100%" stopColor="#052e16" />
            </linearGradient>
            <linearGradient id="sapphireGlass" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#2563eb" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#1e40af" stopOpacity="0.8" />
            </linearGradient>
            <linearGradient id="advancedQRNG" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1e40af" />
              <stop offset="25%" stopColor="#00f5ff" />
              <stop offset="75%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#1e3a8a" />
            </linearGradient>
            <linearGradient id="biometricSensor" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#9333ea" />
              <stop offset="50%" stopColor="#7e22ce" />
              <stop offset="100%" stopColor="#6b21a8" />
            </linearGradient>
            <linearGradient id="bluetoothModule" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4c51bf" />
              <stop offset="50%" stopColor="#4338ca" />
              <stop offset="100%" stopColor="#3730a3" />
            </linearGradient>
            <linearGradient id="enhancedNFC" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f59e0b" />
              <stop offset="50%" stopColor="#d97706" />
              <stop offset="100%" stopColor="#b45309" />
            </linearGradient>
            <linearGradient id="eal6Secure" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="50%" stopColor="#7c3aed" />
              <stop offset="100%" stopColor="#6d28d9" />
            </linearGradient>
            <radialGradient id="hologram">
              <stop offset="0%" stopColor="#00f5ff" stopOpacity="0.9" />
              <stop offset="30%" stopColor="#ff00ff" stopOpacity="0.7" />
              <stop offset="60%" stopColor="#ffff00" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#00f5ff" stopOpacity="0.6" />
            </radialGradient>
            <filter id="proShadow">
              <feGaussianBlur in="SourceAlpha" stdDeviation="10"/>
              <feOffset dx="0" dy="12" result="offsetblur"/>
              <feComponentTransfer>
                <feFuncA type="linear" slope="0.5"/>
              </feComponentTransfer>
              <feMerge>
                <feMergeNode/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
            <filter id="proGlow">
              <feGaussianBlur stdDeviation="5" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* Component 1: Titanium Top Shell */}
          <g transform="translate(0, 0)" filter="url(#proShadow)">
            <rect x="200" y="20" width="700" height="140" rx="20" fill="url(#titaniumShell)" stroke="#00f5ff" strokeWidth="2.5" opacity="0.95"/>
            {/* Brushed titanium texture */}
            {Array.from({ length: 14 }).map((_, i) => (
              <line key={i} x1="200" y1={20 + i * 10} x2="900" y2={20 + i * 10}
                    stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
            ))}
            {/* LED array holes */}
            {[0,1,2,3,4,5].map((i) => (
              <circle key={i} cx={400 + i * 67} cy="90" r="10" fill="rgba(0,0,0,0.9)"
                      stroke={i === 2 ? "#8b5cf6" : "#00f5ff"} strokeWidth="1.5"/>
            ))}
            {/* Diamond-cut edge highlight */}
            <line x1="200" y1="25" x2="900" y2="25" stroke="rgba(255,255,255,0.5)" strokeWidth="2"/>
            <line x1="500" y1="160" x2="500" y2="200" stroke="#00f5ff" strokeWidth="2" strokeDasharray="6,6" opacity="0.7"/>
            <text x="100" y="95" fill="#00f5ff" fontSize="20" fontWeight="700">Titanium Shell</text>
            <text x="100" y="120" fill="#9ca3af" fontSize="15">Grade 5 Ti-6Al-4V alloy</text>
          </g>

          {/* Component 2: Tamper Detection Mesh */}
          <g transform="translate(0, 160)" filter="url(#proShadow)">
            <rect x="250" y="40" width="600" height="100" rx="12" fill="rgba(26,26,46,0.9)" stroke="#dc2626" strokeWidth="2"/>
            {/* Mesh pattern */}
            {Array.from({ length: 12 }).map((_, i) => (
              <line key={`v-mesh-${i}`} x1={260 + i * 50} y1="45" x2={260 + i * 50} y2="135"
                    stroke="url(#tamperMesh)" strokeWidth="1" opacity="0.8"/>
            ))}
            {Array.from({ length: 6 }).map((_, i) => (
              <line key={`h-mesh-${i}`} x1="255" y1={50 + i * 15} x2="845" y2={50 + i * 15}
                    stroke="url(#tamperMesh)" strokeWidth="1" opacity="0.8"/>
            ))}
            {/* Detection nodes */}
            {[[320, 70], [450, 70], [580, 70], [710, 70], [320, 110], [450, 110], [580, 110], [710, 110]].map(([x, y], i) => (
              <circle key={`node-${i}`} cx={x} cy={y} r="5" fill="#dc2626" filter="url(#proGlow)">
                <animate attributeName="opacity" values="0.6;1;0.6" dur={`${2 + i * 0.3}s`} repeatCount="indefinite"/>
              </circle>
            ))}
            <line x1="550" y1="140" x2="550" y2="180" stroke="#dc2626" strokeWidth="2" strokeDasharray="6,6" opacity="0.7"/>
            <text x="920" y="95" fill="#dc2626" fontSize="20" fontWeight="700">Tamper Mesh</text>
            <text x="920" y="120" fill="#9ca3af" fontSize="15">Ultrasonic detection grid</text>
          </g>

          {/* Component 3: 5-LED Array PCB */}
          <g transform="translate(0, 320)" filter="url(#proShadow)">
            <rect x="300" y="40" width="500" height="100" rx="10" fill="url(#advancedPCB)" stroke="#166534" strokeWidth="2"/>
            {/* Advanced circuit traces */}
            <path d="M 320 90 L 360 90 Q 380 90 380 70 L 380 50 Q 380 30 400 30 L 700 30 Q 720 30 720 50"
                  stroke="#fbbf24" strokeWidth="2.5" fill="none" opacity="0.8"/>
            <path d="M 720 50 L 720 80 Q 720 100 740 100 L 770 100"
                  stroke="#fbbf24" strokeWidth="2.5" fill="none" opacity="0.8"/>
            {/* 5 Professional RGB LEDs */}
            {[0,1,2,3,4,5].map((i) => (
              <g key={`led-${i}`}>
                <rect x={395 + i * 67} y="75" width="25" height="15" rx="3"
                      fill={i === 2 ? "#8b5cf6" : "#00f5ff"} filter="url(#proGlow)">
                  <animate attributeName="opacity" values="0.6;1;0.6" dur={`${2.5 + i * 0.25}s`} repeatCount="indefinite"/>
                </rect>
                {/* LED pins */}
                <rect x={395 + i * 67} y="92" width="4" height="6" fill="#c0c0c0"/>
                <rect x={416 + i * 67} y="92" width="4" height="6" fill="#c0c0c0"/>
              </g>
            ))}
            {/* SMD components */}
            {[340, 420, 540, 660, 750].map((x, i) => (
              <rect key={`smd-${i}`} x={x} y="65" width="12" height="8" rx="1" fill="#1a1a1a" stroke="#6b7280" strokeWidth="0.5"/>
            ))}
            <line x1="550" y1="140" x2="550" y2="190" stroke="#166534" strokeWidth="2" strokeDasharray="6,6" opacity="0.7"/>
            <text x="130" y="95" fill="#4ade80" fontSize="20" fontWeight="700">LED Array PCB</text>
            <text x="130" y="120" fill="#9ca3af" fontSize="15">Professional RGB indicators</text>
          </g>

          {/* Component 4: Sapphire Display Window */}
          <g transform="translate(0, 470)" filter="url(#proShadow)">
            <rect x="325" y="50" width="450" height="130" rx="15" fill="url(#sapphireGlass)" stroke="#3b82f6" strokeWidth="2.5"/>
            {/* Quantum Core 1024 pattern visualization */}
            <g transform="translate(550, 115)">
              <circle cx="0" cy="0" r="50" fill="rgba(0,245,255,0.1)" filter="url(#proGlow)"/>
              <circle cx="0" cy="0" r="45" fill="none" stroke="#00f5ff" strokeWidth="2"/>
              <circle cx="0" cy="0" r="35" fill="none" stroke="#8b5cf6" strokeWidth="1.5"/>
              <circle cx="0" cy="0" r="25" fill="none" stroke="#00f5ff" strokeWidth="2"/>
              <circle cx="0" cy="0" r="15" fill="none" stroke="#8b5cf6" strokeWidth="1.5"/>
              {/* Circuit traces radiating */}
              {Array.from({length: 12}).map((_, i) => {
                const angle = (i * 30) * Math.PI / 180;
                const x1 = 25 * Math.cos(angle);
                const y1 = 25 * Math.sin(angle);
                const x2 = 50 * Math.cos(angle);
                const y2 = 50 * Math.sin(angle);
                return (
                  <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="url(#advancedQRNG)" strokeWidth="1.5"/>
                );
              })}
              <text x="0" y="12" textAnchor="middle" fill="#00f5ff" fontSize="36" fontWeight="bold" filter="url(#proGlow)">Q</text>
            </g>
            {/* Glass reflection */}
            <ellipse cx="400" cy="90" rx="60" ry="30" fill="rgba(255,255,255,0.15)" transform="rotate(-25 400 90)"/>
            <text x="950" y="120" fill="#3b82f6" fontSize="20" fontWeight="700">Sapphire Window</text>
            <text x="950" y="145" fill="#9ca3af" fontSize="15">0.7mm crystal - 9H hardness</text>
            <line x1="550" y1="180" x2="550" y2="230" stroke="#3b82f6" strokeWidth="2" strokeDasharray="6,6" opacity="0.7"/>
          </g>

          {/* Component 5: Advanced QRNG + Processor */}
          <g transform="translate(0, 650)" filter="url(#proShadow)">
            <rect x="275" y="50" width="550" height="140" rx="10" fill="#0a0a0f" stroke="#1e40af" strokeWidth="2.5"/>
            {/* Dual chip package */}
            <rect x="360" y="80" width="180" height="80" rx="6" fill="url(#advancedQRNG)" stroke="#60a5fa" strokeWidth="2"/>
            <rect x="585" y="80" width="180" height="80" rx="6" fill="url(#advancedQRNG)" stroke="#60a5fa" strokeWidth="2"/>
            {/* Chip pins arrays */}
            {Array.from({ length: 24 }).map((_, i) => (
              <rect key={`qrng-pin-${i}`} x={365 + i * 7.3} y="67" width="5" height="10" fill="#a0a0a0"/>
            ))}
            {Array.from({ length: 24 }).map((_, i) => (
              <rect key={`proc-pin-${i}`} x={590 + i * 7.3} y="67" width="5" height="10" fill="#a0a0a0"/>
            ))}
            {/* Quantum visualization in chips */}
            <circle cx="450" cy="120" r="25" fill="none" stroke="#00f5ff" strokeWidth="2" filter="url(#proGlow)">
              <animate attributeName="r" values="20;28;20" dur="3s" repeatCount="indefinite"/>
              <animate attributeName="opacity" values="0.5;1;0.5" dur="3s" repeatCount="indefinite"/>
            </circle>
            <circle cx="675" cy="120" r="18" fill="#8b5cf6" opacity="0.6" filter="url(#proGlow)">
              <animate attributeName="r" values="15;22;15" dur="2.5s" repeatCount="indefinite"/>
            </circle>
            {/* Connection buses */}
            <path d="M 540 120 L 585 120" stroke="#00f5ff" strokeWidth="3" opacity="0.8">
              <animate attributeName="stroke-dashoffset" values="0;20;0" dur="2s" repeatCount="indefinite"/>
            </path>
            <line x1="550" y1="190" x2="550" y2="250" stroke="#1e40af" strokeWidth="2" strokeDasharray="6,6" opacity="0.7"/>
            <text x="100" y="125" fill="#60a5fa" fontSize="20" fontWeight="700">Advanced QRNG</text>
            <text x="100" y="150" fill="#9ca3af" fontSize="15">Multi-source entropy + processor</text>
          </g>

          {/* Component 6: Biometric Sensor Module */}
          <g transform="translate(0, 840)" filter="url(#proShadow)">
            <rect x="325" y="60" width="450" height="130" rx="12" fill="#1a1a2e" stroke="#9333ea" strokeWidth="2.5"/>
            {/* Sensor chip */}
            <circle cx="550" cy="125" r="50" fill="url(#biometricSensor)" stroke="#a78bfa" strokeWidth="2"/>
            {/* Fingerprint pattern */}
            {[0,1,2,3,4,5,6].map((i) => (
              <ellipse key={`print-${i}`} cx="550" cy="125" rx={40 - i * 6} ry={45 - i * 6}
                      fill="none" stroke="rgba(167,139,250,0.4)" strokeWidth="1.2"/>
            ))}
            {/* Sensor contacts */}
            {[[490, 125], [610, 125], [550, 75], [550, 175]].map(([x, y], i) => (
              <circle key={`contact-${i}`} cx={x} cy={y} r="6" fill="#c0c0c0" stroke="#a78bfa" strokeWidth="1"/>
            ))}
            {/* Ceramic surface */}
            <circle cx="550" cy="125" r="42" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="8"/>
            <ellipse cx="530" cy="110" rx="20" ry="15" fill="rgba(255,255,255,0.15)" transform="rotate(-35 530 110)"/>
            <line x1="550" y1="190" x2="550" y2="240" stroke="#9333ea" strokeWidth="2" strokeDasharray="6,6" opacity="0.7"/>
            <text x="870" y="130" fill="#a78bfa" fontSize="20" fontWeight="700">Biometric Sensor</text>
            <text x="870" y="155" fill="#9ca3af" fontSize="15">FBI PIV 508 DPI ceramic</text>
          </g>

          {/* Component 7: Bluetooth LE Module */}
          <g transform="translate(0, 1020)" filter="url(#proShadow)">
            <rect x="375" y="70" width="350" height="100" rx="8" fill="#1a1a2e" stroke="#4c51bf" strokeWidth="2"/>
            {/* BLE chip */}
            <rect x="475" y="95" width="150" height="50" rx="4" fill="url(#bluetoothModule)" stroke="#818cf8" strokeWidth="1.5"/>
            {/* Antenna trace */}
            <path d="M 625 120 L 650 120 Q 680 120 680 90 L 680 80 Q 680 75 685 75 L 700 75"
                  stroke="#818cf8" strokeWidth="2.5" fill="none"/>
            {/* BT symbol */}
            <path d="M 545 110 L 545 130 L 560 120 L 545 110 M 545 120 L 560 130 L 545 140 L 545 120"
                  stroke="#fff" strokeWidth="2.5" fill="none"/>
            {/* Signal waves */}
            {[0,1,2].map((i) => (
              <path key={`wave-${i}`} d="M 630 120 Q 645 105 660 120 Q 675 135 690 120"
                    stroke="#818cf8" strokeWidth="1.5" fill="none" opacity={0.7 - i * 0.2}>
                <animate attributeName="opacity" values="0.3;0.8;0.3" dur={`${2 + i * 0.5}s`} repeatCount="indefinite"/>
              </path>
            ))}
            <line x1="550" y1="170" x2="550" y2="220" stroke="#4c51bf" strokeWidth="2" strokeDasharray="6,6" opacity="0.7"/>
            <text x="100" y="125" fill="#818cf8" fontSize="20" fontWeight="700">Bluetooth 5.2</text>
            <text x="100" y="150" fill="#9ca3af" fontSize="15">BLE low-energy module</text>
          </g>

          {/* Component 8: Enhanced NFC Antenna */}
          <g transform="translate(0, 1190)" filter="url(#proShadow)">
            <rect x="250" y="70" width="600" height="130" rx="12" fill="rgba(26,26,46,0.8)" stroke="#f59e0b" strokeWidth="2.5"/>
            {/* Enhanced coil with more turns */}
            <g transform="translate(550, 135)">
              {[50, 42, 34, 26, 18, 10].map((r, i) => (
                <circle key={`coil-${i}`} cx="0" cy="0" r={r} fill="none"
                        stroke="url(#enhancedNFC)" strokeWidth={4 - i * 0.5} opacity={0.9 - i * 0.1}/>
              ))}
              <line x1="50" y1="0" x2="80" y2="0" stroke="#f59e0b" strokeWidth="4"/>
              <circle cx="0" cy="0" r="4" fill="#f59e0b"/>
            </g>
            {/* Wave patterns */}
            {[-1, 1].map((dir) => (
              <g key={`nfc-wave-${dir}`}>
                <path d={`M ${550 + dir * 100} 135 Q ${550 + dir * 120} ${135 - 20} ${550 + dir * 140} 135`}
                      stroke="#fbbf24" strokeWidth="2" fill="none" opacity="0.6">
                  <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2.5s" repeatCount="indefinite"/>
                </path>
                <path d={`M ${550 + dir * 100} 135 Q ${550 + dir * 120} ${135 + 20} ${550 + dir * 140} 135`}
                      stroke="#fbbf24" strokeWidth="2" fill="none" opacity="0.6">
                  <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2.5s" begin="1.25s" repeatCount="indefinite"/>
                </path>
              </g>
            ))}
            <line x1="550" y1="200" x2="550" y2="250" stroke="#f59e0b" strokeWidth="2" strokeDasharray="6,6" opacity="0.7"/>
            <text x="950" y="140" fill="#fbbf24" fontSize="20" fontWeight="700">Enhanced NFC</text>
            <text x="950" y="165" fill="#9ca3af" fontSize="15">Extended 10cm range</text>
          </g>

          {/* Component 9: EAL6+ Secure Element */}
          <g transform="translate(0, 1370)" filter="url(#proShadow)">
            <rect x="300" y="80" width="500" height="120" rx="10" fill="#1a1a2e" stroke="#8b5cf6" strokeWidth="2.5"/>
            {/* Security chip with advanced features */}
            <rect x="450" y="110" width="200" height="60" rx="5" fill="url(#eal6Secure)" stroke="#a78bfa" strokeWidth="2"/>
            {/* Multiple security shields */}
            {[[510, 140], [550, 140], [590, 140]].map(([x, y], i) => (
              <g key={`shield-${i}`}>
                <path d={`M ${x} ${y - 10} L ${x - 12} ${y - 5} L ${x - 12} ${y + 5} Q ${x - 12} ${y + 15} ${x} ${y + 20} Q ${x + 12} ${y + 15} ${x + 12} ${y + 5} L ${x + 12} ${y - 5} Z`}
                      fill="#1a1a2e" stroke="#c4b5fd" strokeWidth="1.5"/>
                <path d={`M ${x - 5} ${y + 3} L ${x - 2} ${y + 8} L ${x + 6} ${y}`}
                      stroke="#c4b5fd" strokeWidth="2" fill="none"/>
              </g>
            ))}
            {/* EAL6+ badge */}
            <rect x="670" y="125" width="60" height="30" rx="5" fill="#a78bfa" stroke="#c4b5fd" strokeWidth="1"/>
            <text x="700" y="145" textAnchor="middle" fill="#1a1a2e" fontSize="14" fontWeight="bold">EAL6+</text>
            {/* Chip pins */}
            {Array.from({ length: 18 }).map((_, i) => (
              <rect key={`eal-pin-${i}`} x={455 + i * 11} y="100" width="6" height="8" fill="#909090"/>
            ))}
            <line x1="550" y1="200" x2="550" y2="250" stroke="#8b5cf6" strokeWidth="2" strokeDasharray="6,6" opacity="0.7"/>
            <text x="120" y="145" fill="#a78bfa" fontSize="20" fontWeight="700">Secure Element</text>
            <text x="120" y="170" fill="#9ca3af" fontSize="15">EAL6+ crypto processor</text>
          </g>

          {/* Component 10: Bottom Titanium Shell + Holographic Seal */}
          <g transform="translate(0, 1500)" filter="url(#proShadow)">
            <rect x="200" y="90" width="700" height="150" rx="20" fill="url(#titaniumShell)" stroke="#00f5ff" strokeWidth="2.5" opacity="0.92"/>
            {/* Brushed texture */}
            {Array.from({ length: 15 }).map((_, i) => (
              <line key={i} x1="200" y1={90 + i * 10} x2="900" y2={90 + i * 10}
                    stroke="rgba(255,255,255,0.025)" strokeWidth="1" />
            ))}
            {/* Mounting posts */}
            {[[300, 140], [450, 140], [550, 140], [650, 140], [800, 140]].map(([x, y], i) => (
              <circle key={`mount-${i}`} cx={x} cy={y} r="8" fill="#3a3a3a" stroke="#6a6a6a" strokeWidth="1.5"/>
            ))}
            {/* USB-C cutout */}
            <rect x="525" y="225" width="70" height="20" rx="5" fill="rgba(0,0,0,0.95)" stroke="#00f5ff" strokeWidth="1.5"/>
            {/* Holographic seal strip */}
            <rect x="920" y="130" width="50" height="80" rx="6" fill="url(#hologram)" opacity="0.8" filter="url(#proGlow)">
              <animate attributeName="opacity" values="0.6;1;0.6" dur="4s" repeatCount="indefinite"/>
            </rect>
            {/* QR pattern on seal */}
            <g transform="translate(925, 145)">
              {Array.from({length: 6}).map((_, i) =>
                Array.from({length: 8}).map((_, j) => (
                  <rect key={`qr-${i}-${j}`} x={i * 6.5} y={j * 6} width="5" height="5"
                        fill={Math.random() > 0.5 ? '#000' : 'transparent'} opacity="0.7" />
                ))
              )}
            </g>
            <line x1="550" y1="240" x2="550" y2="290" stroke="#00f5ff" strokeWidth="2" strokeDasharray="6,6" opacity="0.7"/>
            <text x="80" y="170" fill="#00f5ff" fontSize="20" fontWeight="700">Bottom Shell</text>
            <text x="80" y="195" fill="#9ca3af" fontSize="15">Titanium + tamper seal</text>
          </g>

          {/* Component 11: USB-C 3.2 Gen 2x2 Connector */}
          <g transform="translate(0, 1690)" filter="url(#proShadow)">
            <rect x="400" y="100" width="300" height="100" rx="8" fill="#1a1a1a" stroke="#6b7280" strokeWidth="2.5"/>
            {/* Premium USB-C connector */}
            <rect x="520" y="130" width="80" height="35" rx="5" fill="#404040" stroke="#9ca3af" strokeWidth="2"/>
            <rect x="528" y="137" width="64" height="21" rx="3" fill="#0a0a0a"/>
            {/* 24-pin USB-C configuration */}
            {Array.from({ length: 12 }).map((_, i) => (
              <rect key={`usb-top-${i}`} x={532 + i * 5} y="142" width="2.5" height="6" fill="#c0c0c0"/>
            ))}
            {Array.from({ length: 12 }).map((_, i) => (
              <rect key={`usb-bot-${i}`} x={532 + i * 5} y="150" width="2.5" height="6" fill="#c0c0c0"/>
            ))}
            {/* Metallic reflections */}
            <rect x="528" y="137" width="64" height="4" rx="1" fill="rgba(255,255,255,0.4)"/>
            {/* Power indicators */}
            <circle cx="470" cy="155" r="5" fill="#00f5ff" opacity="0.9" filter="url(#proGlow)">
              <animate attributeName="opacity" values="0.6;1;0.6" dur="1.8s" repeatCount="indefinite"/>
            </circle>
            <circle cx="630" cy="155" r="5" fill="#4a90e2" opacity="0.9" filter="url(#proGlow)">
              <animate attributeName="opacity" values="0.6;1;0.6" dur="1.8s" begin="0.9s" repeatCount="indefinite"/>
            </circle>
            <text x="780" y="160" fill="#9ca3af" fontSize="20" fontWeight="700">USB-C 3.2 Gen 2x2</text>
            <text x="780" y="185" fill="#6b7280" fontSize="15">20 Gbps data + Power Delivery</text>
          </g>

          {/* Dimension indicators */}
          <g opacity="0.5">
            <line x1="180" y1="20" x2="180" y2="1790" stroke="#00f5ff" strokeWidth="1.5" strokeDasharray="4,4"/>
            <text x="150" y="900" fill="#00f5ff" fontSize="16" transform="rotate(-90 150 900)">75-80mm Professional Build</text>
          </g>
        </svg>

        {/* Enhanced Legend */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-12">
          {[
            { color: 'from-gray-600 to-gray-800', label: 'Titanium Alloy' },
            { color: 'from-red-600 to-red-900', label: 'Security/Tamper' },
            { color: 'from-blue-500 to-blue-800', label: 'Quantum/Display' },
            { color: 'from-purple-600 to-purple-900', label: 'Biometric/Crypto' },
            { color: 'from-indigo-500 to-indigo-800', label: 'Wireless Comms' },
          ].map((item, i) => (
            <div key={i} className="glass-card p-4 flex items-center gap-3 hover:scale-105 transition-transform">
              <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${item.color} shadow-lg`}/>
              <span className="text-sm font-medium text-gray-300">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Technical Specifications Section
function TechnicalSpecsSection({ model }: { model: ProductModel }) {
  const specs = model === 'one' ? [
    { category: 'Cryptography', items: ['ML-KEM-768 (NIST PQC)', 'FIDO2 Level 2', 'WebAuthn Support', 'U2F Compatible'] },
    { category: 'Hardware Security', items: ['Photonic QRNG', 'Secure Element', '4MB Flash Storage', '512KB RAM'] },
    { category: 'Connectivity', items: ['USB-C 3.1 Gen 2', 'NFC 13.56 MHz', '10 Gbps Transfer', 'IP54 Rated'] },
    { category: 'Certifications', items: ['FIDO2 L2', 'CE Mark', 'FCC Part 15', 'RoHS', 'BIS IS 13252'] },
  ] : [
    { category: 'Cryptography', items: ['ML-KEM-1024 (Maximum)', 'FIDO2 Level 2', 'PKCS#11 Support', 'WebAuthn + U2F'] },
    { category: 'Advanced Hardware', items: ['Multi-source QRNG', 'Entropy Export 4Mbps', 'EAL6+ Secure Element', '8MB Flash + 1MB ECC RAM'] },
    { category: 'Premium Connectivity', items: ['USB-C 3.2 Gen 2x2', 'NFC Extended Range', 'Bluetooth 5.2', '20 Gbps Transfer', 'IP65 Rated'] },
    { category: 'Enterprise Security', items: ['Tamper Detection Mesh', 'Auto Data Wipe', 'FBI PIV Biometric', 'Holographic Seal'] },
    { category: 'Elite Certifications', items: ['FIPS 140-3', 'CC EAL6+', 'SOC 2 Type II', 'CERT-In', 'RBI Approved', 'UIDAI Compliant'] },
  ];

  return (
    <section className="section-padding bg-quantum-charcoal/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-6xl font-display font-bold mb-16 text-center">
          Technical <span className="gradient-text">Specifications</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {specs.map((spec, i) => (
            <div key={i} className="glass-card p-8 hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-semibold text-quantum-cyan mb-6 flex items-center gap-3">
                <div className="w-1 h-8 bg-gradient-to-b from-quantum-cyan to-quantum-violet rounded-full" />
                {spec.category}
              </h3>
              <ul className="space-y-4">
                {spec.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-4">
                    <svg className="w-6 h-6 flex-shrink-0 mt-0.5 text-quantum-violet" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Feature Callouts Section
function FeatureCalloutsSection({ model }: { model: ProductModel }) {
  const features = model === 'one' ? [
    {
      icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>,
      title: 'Quantum-Safe Encryption',
      desc: 'ML-KEM-768 NIST-approved post-quantum cryptography'
    },
    {
      icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
      title: 'True Random Generation',
      desc: 'Photonic QRNG for unpredictable entropy'
    },
    {
      icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>,
      title: 'Universal Compatibility',
      desc: 'FIDO2, WebAuthn, U2F across all platforms'
    },
    {
      icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>,
      title: 'Premium Materials',
      desc: 'Aircraft-grade aluminum with sapphire glass'
    },
  ] : [
    {
      icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
      title: 'Maximum Security',
      desc: 'ML-KEM-1024 with tamper-evident enclosure'
    },
    {
      icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2v4M2 12h4m14 0h4M12 20v-4" /></svg>,
      title: 'Advanced Quantum Core',
      desc: 'Multi-source QRNG with 4Mbps entropy export'
    },
    {
      icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" /></svg>,
      title: 'FBI-Grade Biometric',
      desc: '508 DPI fingerprint sensor, PIV compliant'
    },
    {
      icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>,
      title: 'Titanium Construction',
      desc: 'Grade 5 titanium with PVD coating and sapphire crystal'
    },
  ];

  return (
    <section className="section-padding">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-6xl font-display font-bold mb-16 text-center">
          Key <span className="gradient-text">Features</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <div key={i} className="group glass-card p-8 text-center hover:scale-110 transition-all duration-500 cursor-pointer">
              <div className="flex justify-center mb-4 text-quantum-cyan group-hover:text-quantum-violet transform group-hover:scale-125 transition-all duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-quantum-cyan group-hover:to-quantum-violet transition-all">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-400 group-hover:text-gray-300">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Manufacturing Section
function ManufacturingSection({ model }: { model: ProductModel }) {
  return (
    <section className="section-padding bg-quantum-charcoal/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-6xl font-display font-bold mb-16 text-center">
          Manufacturing <span className="gradient-text">Excellence</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="glass-card p-8 text-center group hover:scale-105 transition-transform">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-quantum-cyan/20 to-quantum-violet/20 border-2 border-quantum-cyan/40 flex items-center justify-center text-quantum-cyan mx-auto mb-6 group-hover:rotate-12 transition-transform">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-white">Premium Materials</h3>
            <p className="text-gray-400">
              {model === 'one'
                ? 'Aircraft-grade 6061-T6 aluminum with Type II anodizing'
                : 'Grade 5 titanium (Ti-6Al-4V) with premium PVD coating'}
            </p>
          </div>

          <div className="glass-card p-8 text-center group hover:scale-105 transition-transform">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-quantum-violet/20 to-quantum-cyan/20 border-2 border-quantum-violet/40 flex items-center justify-center text-quantum-violet mx-auto mb-6 group-hover:rotate-12 transition-transform">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.040A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-white">CNC Precision</h3>
            <p className="text-gray-400">
              ±0.05mm tolerance on critical dimensions, Ra 0.8-1.6 μm surface finish
            </p>
          </div>

          <div className="glass-card p-8 text-center group hover:scale-105 transition-transform">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-quantum-cyan/20 to-quantum-violet/20 border-2 border-quantum-cyan/40 flex items-center justify-center text-quantum-cyan mx-auto mb-6 group-hover:rotate-12 transition-transform">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-white">Made in India</h3>
            <p className="text-gray-400">
              Manufactured in Bengaluru with premium Indian manufacturing partners
            </p>
          </div>
        </div>

        {/* Assembly Process Timeline */}
        <div className="glass-card p-10">
          <h3 className="text-3xl font-semibold mb-10 text-center">10-Step Assembly Process</h3>
          <div className="grid md:grid-cols-5 gap-8">
            {[
              {
                step: 1,
                name: 'CNC Machining',
                icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              },
              {
                step: 2,
                name: 'Surface Finishing',
                icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
              },
              {
                step: 3,
                name: 'Laser Etching',
                icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              },
              {
                step: 4,
                name: 'PCB Assembly',
                icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" /></svg>
              },
              {
                step: 5,
                name: 'Testing & QC',
                icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              },
            ].map((process) => (
              <div key={process.step} className="text-center group cursor-pointer">
                <div className="relative">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-quantum-cyan/20 to-quantum-violet/20 border-2 border-quantum-cyan/40 flex items-center justify-center mx-auto mb-4 text-quantum-cyan group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">
                    {process.icon}
                  </div>
                  <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-quantum-cyan text-quantum-black text-xs font-bold flex items-center justify-center">
                    {process.step}
                  </div>
                </div>
                <div className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                  {process.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
