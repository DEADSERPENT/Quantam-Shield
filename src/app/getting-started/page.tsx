import React from 'react';
import Header from '@/components/Header';
import PageHero from '@/components/PageHero';
import Footer from '@/components/Footer';
import { BoxIcon3D, PlugIcon3D, DiskIcon3D, LockIcon3D, ShieldIcon3D, NetworkIcon3D, UploadIcon3D, WindowsIcon3D, AppleIcon3D, LinuxIcon3D, BrowserIcon3D } from '@/components/Icons3D';

export const metadata = {
  title: 'Getting Started | QuantumShield',
  description: 'Get started with your QuantumShield security key. Step-by-step setup guide and tutorials.',
};

export default function GettingStartedPage() {
  const setupSteps = [
    {
      number: '01',
      title: 'Unbox Your QuantumShield',
      description: 'Open the package and verify all components are included.',
      details: [
        'QuantumShield security key',
        'USB-C cable (for QuantumShield Pro)',
        'Quick start guide',
        'Warranty card',
      ],
      IconComponent: BoxIcon3D,
    },
    {
      number: '02',
      title: 'Connect to Your Device',
      description: 'Plug in your QuantumShield using USB-C or activate NFC mode.',
      details: [
        'Insert the key into a USB-C port',
        'For NFC: Hold near your device',
        'Wait for the device recognition',
        'LED will glow cyan when ready',
      ],
      IconComponent: PlugIcon3D,
    },
    {
      number: '03',
      title: 'Install Software',
      description: 'Download and install the QuantumShield management software.',
      details: [
        'Visit quantumshield.com/downloads',
        'Download for your OS (Windows/Mac/Linux)',
        'Run the installer',
        'Follow on-screen instructions',
      ],
      IconComponent: DiskIcon3D,
    },
    {
      number: '04',
      title: 'Initialize Your Key',
      description: 'Set up your security key with a unique PIN.',
      details: [
        'Launch QuantumShield Manager',
        'Click "Initialize New Key"',
        'Create a strong 6-8 digit PIN',
        'Confirm your PIN',
      ],
      IconComponent: LockIcon3D,
    },
    {
      number: '05',
      title: 'Register with Services',
      description: 'Add QuantumShield as a security key to your accounts.',
      details: [
        'Go to account security settings',
        'Select "Add Security Key"',
        'Follow the registration flow',
        'Test the authentication',
      ],
      IconComponent: ShieldIcon3D,
    },
  ];

  const quickTips = [
    {
      title: 'Keep Your PIN Secure',
      description: 'Never share your PIN. Store it in a secure password manager.',
      IconComponent: LockIcon3D,
    },
    {
      title: 'Register Multiple Services',
      description: 'Use QuantumShield for all your important accounts for maximum security.',
      IconComponent: NetworkIcon3D,
    },
    {
      title: 'Enable Backup',
      description: 'Set up a backup key or recovery method in case you lose access.',
      IconComponent: DiskIcon3D,
    },
    {
      title: 'Update Firmware',
      description: 'Keep your QuantumShield updated with the latest security patches.',
      IconComponent: UploadIcon3D,
    },
  ];

  const supportedPlatforms = [
    { name: 'Windows', version: '10 or later', IconComponent: WindowsIcon3D },
    { name: 'macOS', version: '11.0 or later', IconComponent: AppleIcon3D },
    { name: 'Linux', version: 'Ubuntu 20.04+', IconComponent: LinuxIcon3D },
    { name: 'Chrome OS', version: 'Latest', IconComponent: BrowserIcon3D },
  ];

  return (
    <main className="bg-quantum-black min-h-screen">
      <Header />
      <PageHero
        title="Getting Started"
        subtitle="Set up your QuantumShield security key in minutes"
        badge="Easy Setup Guide"
      />

      {/* System Requirements */}
      <section className="section-padding bg-quantum-charcoal/30">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-display font-bold mb-4">
              <span className="text-white">System </span>
              <span className="gradient-text">Requirements</span>
            </h2>
            <p className="text-gray-400">QuantumShield works with most modern devices</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {supportedPlatforms.map((platform, index) => {
              const IconComponent = platform.IconComponent;
              return (
              <div
                key={index}
                className="glass-card p-6 text-center hover:border-quantum-cyan/50 transition-all"
              >
                <div className="flex justify-center mb-3">
                  <IconComponent className="w-16 h-16" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{platform.name}</h3>
                <p className="text-sm text-gray-400">{platform.version}</p>
              </div>
              );
            })}
          </div>        </div>
      </section>

      {/* Setup Steps */}
      <section className="section-padding">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
              <span className="gradient-text">5-Step Setup</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Follow these simple steps to get your QuantumShield up and running
            </p>
          </div>

          <div className="space-y-8">
            {setupSteps.map((step, index) => {
              const IconComponent = step.IconComponent;
              return (
              <div
                key={index}
                className="glass-card p-8 hover:border-quantum-cyan/50 transition-all duration-300 group"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-quantum-cyan/20 to-quantum-violet/20 border border-quantum-cyan/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <IconComponent className="w-12 h-12" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="text-sm font-mono text-quantum-cyan font-bold">
                        STEP {step.number}
                      </span>
                      <div className="h-px flex-grow bg-gradient-to-r from-quantum-cyan/50 to-transparent" />
                    </div>
                    <h3 className="text-2xl font-display font-bold text-white mb-3 group-hover:text-quantum-cyan transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-gray-400 mb-4">{step.description}</p>
                    <ul className="space-y-2">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start gap-3">
                          <svg
                            className="w-5 h-5 flex-shrink-0 mt-0.5 text-quantum-cyan"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                          <span className="text-sm text-gray-300">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quick Tips */}
      <section className="section-padding bg-gradient-to-b from-quantum-charcoal/30 to-quantum-black">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-display font-bold mb-4">
              <span className="text-white">Quick </span>
              <span className="gradient-text">Tips</span>
            </h2>
            <p className="text-gray-400">Best practices for using your QuantumShield</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {quickTips.map((tip, index) => {
              const IconComponent = tip.IconComponent;
              return (
              <div
                key={index}
                className="glass-card p-6 hover:border-quantum-cyan/50 transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 group-hover:scale-110 transition-transform">
                    <IconComponent className="w-14 h-14" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-quantum-cyan transition-colors">
                      {tip.title}
                    </h3>
                    <p className="text-sm text-gray-400">{tip.description}</p>
                  </div>
                </div>
              </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="section-padding">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-2xl md:text-4xl font-display font-bold mb-6">
            <span className="text-white">Ready for </span>
            <span className="gradient-text">More?</span>
          </h2>
          <p className="text-gray-400 mb-8">
            Explore advanced features and learn how to get the most out of your QuantumShield
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="/documentation" className="btn-primary">
              Read Full Documentation
            </a>
            <a href="/help" className="btn-secondary">
              Visit Help Center
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
