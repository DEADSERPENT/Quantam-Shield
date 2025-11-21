'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import PageHero from '@/components/PageHero';
import Footer from '@/components/Footer';

interface Download {
  name: string;
  version: string;
  platforms: string[];
  size: string;
  description: string;
  category: string;
  releaseDate: string;
  changelog?: string[];
  installInstructions?: {
    platform: string;
    steps: string[];
  }[];
}

export default function DownloadsPage() {
  const [selectedDownload, setSelectedDownload] = useState<Download | null>(null);

  const downloads: Download[] = [
    {
      name: 'QuantumShield Desktop',
      version: '2.1.0',
      platforms: ['Windows', 'macOS', 'Linux'],
      size: '45 MB',
      description: 'Desktop management application for QuantumShield devices',
      category: 'Applications',
      releaseDate: '2025-01-15',
      changelog: [
        'Added support for ML-KEM-1024 encryption',
        'Improved device detection and connection reliability',
        'New key management interface with search and filtering',
        'Fixed memory leak in entropy export',
        'Updated to NIST PQC standardized algorithms',
      ],
      installInstructions: [
        {
          platform: 'Windows 10/11',
          steps: [
            'Download QuantumShield-Setup-2.1.0.exe',
            'Run the installer and follow the setup wizard',
            'Connect your QuantumShield device via USB',
            'Launch QuantumShield Desktop from Start Menu',
            'Complete device initialization wizard',
          ],
        },
        {
          platform: 'macOS 12+',
          steps: [
            'Download QuantumShield-2.1.0.dmg',
            'Open the DMG and drag QuantumShield to Applications',
            'Open System Settings > Privacy & Security > Allow QuantumShield',
            'Launch QuantumShield from Applications folder',
            'Grant USB device permissions when prompted',
          ],
        },
        {
          platform: 'Linux (Ubuntu/Debian)',
          steps: [
            'Download quantumshield_2.1.0_amd64.deb',
            'Install: sudo dpkg -i quantumshield_2.1.0_amd64.deb',
            'Add udev rules: sudo quantumshield-setup',
            'Reconnect your device',
            'Launch: quantumshield-desktop',
          ],
        },
      ],
    },
    {
      name: 'Mobile App',
      version: '1.5.2',
      platforms: ['iOS', 'Android'],
      size: '28 MB',
      description: 'Mobile companion app with NFC support',
      category: 'Applications',
      releaseDate: '2025-01-12',
      changelog: [
        'Added NFC tap-to-authenticate for supported devices',
        'Improved Bluetooth LE connection stability',
        'New dark mode theme',
        'Added biometric unlock for app access',
        'Support for iOS 17 and Android 14',
      ],
      installInstructions: [
        {
          platform: 'iOS 16+',
          steps: [
            'Open App Store on your iPhone or iPad',
            'Search for "QuantumShield"',
            'Tap Get to download and install',
            'Enable NFC in Settings > QuantumShield',
            'Tap your QuantumShield device to pair',
          ],
        },
        {
          platform: 'Android 12+',
          steps: [
            'Open Google Play Store',
            'Search for "QuantumShield"',
            'Tap Install',
            'Grant NFC and Bluetooth permissions',
            'Tap your device to the back of your phone to pair',
          ],
        },
      ],
    },
    {
      name: 'JavaScript SDK',
      version: '3.0.1',
      platforms: ['npm', 'Browser', 'Node.js'],
      size: '850 KB',
      description: 'Browser and Node.js integration library',
      category: 'SDKs',
      releaseDate: '2025-01-18',
      changelog: [
        'TypeScript definitions included',
        'WebUSB API support for browser integration',
        'Async/await support for all operations',
        'Tree-shakeable ES modules',
        'Reduced bundle size by 40%',
      ],
      installInstructions: [
        {
          platform: 'npm',
          steps: [
            'Install: npm install @quantumshield/sdk',
            'Import: import QuantumShield from "@quantumshield/sdk"',
            'Initialize: const device = await QuantumShield.init()',
            'Use the API methods as documented',
          ],
        },
        {
          platform: 'Browser (CDN)',
          steps: [
            'Add script tag: <script src="https://cdn.quantumshield.com/sdk/3.0.1/quantumshield.min.js"></script>',
            'Access global: window.QuantumShield',
            'Initialize: const device = await QuantumShield.init({ transport: "usb" })',
            'Ensure HTTPS for WebUSB support',
          ],
        },
      ],
    },
    {
      name: 'Python SDK',
      version: '2.4.0',
      platforms: ['PyPI', 'Python 3.8+'],
      size: '1.2 MB',
      description: 'Python library for QuantumShield integration',
      category: 'SDKs',
      releaseDate: '2025-01-10',
      changelog: [
        'Added async support with asyncio',
        'Type hints for all public APIs',
        'Support for Python 3.12',
        'New entropy streaming API',
        'Improved error messages and debugging',
      ],
      installInstructions: [
        {
          platform: 'pip',
          steps: [
            'Install: pip install quantumshield',
            'Import: from quantumshield import QuantumShield',
            'Initialize: device = QuantumShield.init()',
            'Use methods: signature = device.sign(data)',
          ],
        },
        {
          platform: 'Virtual Environment',
          steps: [
            'Create venv: python3 -m venv venv',
            'Activate: source venv/bin/activate (Linux/Mac) or venv\\Scripts\\activate (Windows)',
            'Install: pip install quantumshield',
            'Run your scripts within the activated environment',
          ],
        },
      ],
    },
    {
      name: 'Go SDK',
      version: '1.3.1',
      platforms: ['Go 1.20+'],
      size: '2.1 MB',
      description: 'Go library for high-performance QuantumShield integration',
      category: 'SDKs',
      releaseDate: '2025-01-08',
      changelog: [
        'Zero-copy data transfer optimizations',
        'Goroutine-safe device access',
        'Context support for cancellation',
        'Improved connection pooling',
      ],
      installInstructions: [
        {
          platform: 'go get',
          steps: [
            'Install: go get github.com/quantumshield/go-sdk',
            'Import: import "github.com/quantumshield/go-sdk/quantumshield"',
            'Initialize: device, err := quantumshield.Init()',
            'Handle errors appropriately',
          ],
        },
      ],
    },
    {
      name: 'Rust SDK',
      version: '0.8.0',
      platforms: ['Cargo', 'Rust 1.70+'],
      size: '1.8 MB',
      description: 'Safe, zero-cost Rust bindings for QuantumShield',
      category: 'SDKs',
      releaseDate: '2025-01-05',
      changelog: [
        'Memory-safe FFI bindings',
        'async/await support with tokio',
        'Zero-copy operations where possible',
        'Comprehensive error types',
      ],
      installInstructions: [
        {
          platform: 'Cargo',
          steps: [
            'Add to Cargo.toml: quantumshield = "0.8"',
            'Run: cargo build',
            'Import: use quantumshield::QuantumShield;',
            'Initialize: let device = QuantumShield::init()?;',
          ],
        },
      ],
    },
    {
      name: 'CLI Tools',
      version: '2.0.3',
      platforms: ['Windows', 'macOS', 'Linux'],
      size: '12 MB',
      description: 'Command-line utilities for device management and scripting',
      category: 'Tools',
      releaseDate: '2025-01-14',
      changelog: [
        'New qshield-keygen command',
        'Batch signing support',
        'JSON output mode for scripting',
        'Shell completion scripts (bash, zsh, fish)',
      ],
      installInstructions: [
        {
          platform: 'Linux/macOS',
          steps: [
            'Download qshield-cli-2.0.3.tar.gz',
            'Extract: tar xzf qshield-cli-2.0.3.tar.gz',
            'Install: sudo ./install.sh',
            'Verify: qshield --version',
          ],
        },
        {
          platform: 'Windows',
          steps: [
            'Download qshield-cli-2.0.3-win64.zip',
            'Extract to C:\\Program Files\\QuantumShield\\cli',
            'Add to PATH environment variable',
            'Verify: qshield --version',
          ],
        },
      ],
    },
    {
      name: 'Firmware Update Tool',
      version: '1.2.1',
      platforms: ['Windows', 'macOS', 'Linux'],
      size: '8 MB',
      description: 'Securely update your QuantumShield device firmware',
      category: 'Tools',
      releaseDate: '2025-01-16',
      installInstructions: [
        {
          platform: 'All Platforms',
          steps: [
            'Download the firmware update tool for your OS',
            'Connect your QuantumShield device',
            'Run the updater and follow on-screen instructions',
            'Do NOT disconnect during update process',
            'Device will restart automatically when complete',
          ],
        },
      ],
    },
  ];

  const categories = ['All', 'Applications', 'SDKs', 'Tools'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredDownloads = selectedCategory === 'All'
    ? downloads
    : downloads.filter(d => d.category === selectedCategory);

  return (
    <main className="bg-quantum-black min-h-screen">
      <Header />
      <PageHero
        title="Downloads"
        subtitle="Get the latest software and tools"
        badge="Always Free"
      />

      <section className="section-padding">
        <div className="container mx-auto max-w-6xl">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2.5 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-quantum-cyan text-quantum-black shadow-neon-cyan'
                    : 'glass-card text-gray-400 hover:text-white hover:border-quantum-cyan/50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Downloads Grid */}
          <div className="space-y-6">
            {filteredDownloads.map((item) => (
              <div key={item.name} className="glass-card p-8 hover:border-quantum-cyan/30 transition-all">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-quantum-cyan/20 to-quantum-violet/20 border border-quantum-cyan/30 flex items-center justify-center flex-shrink-0">
                        {item.category === 'Applications' ? (
                          <svg className="w-7 h-7 text-quantum-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                          </svg>
                        ) : item.category === 'SDKs' ? (
                          <svg className="w-7 h-7 text-quantum-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                          </svg>
                        ) : (
                          <svg className="w-7 h-7 text-quantum-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                          </svg>
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-2xl font-semibold text-white">{item.name}</h3>
                          <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-quantum-violet/20 text-quantum-violet border border-quantum-violet/30">
                            v{item.version}
                          </span>
                        </div>
                        <p className="text-gray-400 mb-4">{item.description}</p>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                          <span className="flex items-center gap-1.5">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 11H9v-2h2v2zm0-4H9V5h2v4z" />
                            </svg>
                            {item.size}
                          </span>
                          <span>•</span>
                          <span className="flex items-center gap-1.5">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                            </svg>
                            {item.releaseDate}
                          </span>
                          <span>•</span>
                          <span>{item.platforms.join(', ')}</span>
                        </div>
                      </div>
                    </div>

                    {/* Changelog */}
                    {item.changelog && item.changelog.length > 0 && (
                      <div className="mt-4 pl-[72px]">
                        <details className="group">
                          <summary className="cursor-pointer text-sm font-semibold text-quantum-cyan hover:text-quantum-cyan-glow transition-colors flex items-center gap-2">
                            <svg className="w-4 h-4 transform group-open:rotate-90 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                            </svg>
                            What&apos;s New
                          </summary>
                          <ul className="mt-3 space-y-2 text-sm text-gray-400">
                            {item.changelog.map((change, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <span className="text-quantum-cyan mt-1">•</span>
                                <span>{change}</span>
                              </li>
                            ))}
                          </ul>
                        </details>
                      </div>
                    )}

                    {/* Installation Instructions */}
                    {item.installInstructions && item.installInstructions.length > 0 && (
                      <div className="mt-4 pl-[72px]">
                        <button
                          onClick={() => setSelectedDownload(selectedDownload?.name === item.name ? null : item)}
                          className="text-sm font-semibold text-quantum-violet hover:text-quantum-violet-glow transition-colors flex items-center gap-2"
                        >
                          <svg className={`w-4 h-4 transform transition-transform ${selectedDownload?.name === item.name ? 'rotate-90' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                          </svg>
                          Installation Guide
                        </button>

                        {selectedDownload?.name === item.name && (
                          <div className="mt-4 space-y-4">
                            {item.installInstructions.map((instruction, idx) => (
                              <div key={idx} className="bg-black/30 rounded-lg border border-white/10 overflow-hidden">
                                <div className="bg-white/5 px-5 py-3 border-b border-white/10 flex items-center gap-2">
                                  <svg className="w-4 h-4 text-quantum-cyan" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd" />
                                  </svg>
                                  <h4 className="text-sm font-semibold text-white">{instruction.platform}</h4>
                                </div>
                                <div className="p-5">
                                  <ol className="space-y-3 text-sm">
                                    {instruction.steps.map((step, stepIdx) => {
                                      // Check if step contains a command (starts with common command patterns)
                                      const isCommand = step.match(/^(Install:|Download|Run|Extract:|Add|Verify:|Launch:|Open|Tap|Grant|Enable|Connect|Create|Activate|Import|Initialize|Use|Handle)/);
                                      const commandMatch = step.match(/^(.+?):\s*(.+)$/);

                                      if (commandMatch && isCommand) {
                                        const [, label, command] = commandMatch;
                                        return (
                                          <li key={stepIdx} className="flex gap-3">
                                            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-quantum-cyan/10 border border-quantum-cyan/30 flex items-center justify-center text-quantum-cyan font-semibold text-xs">
                                              {stepIdx + 1}
                                            </span>
                                            <div className="flex-1 pt-0.5">
                                              <span className="text-gray-400">{label}: </span>
                                              <code className="text-quantum-cyan bg-black/30 px-2 py-0.5 rounded font-mono text-xs">
                                                {command}
                                              </code>
                                            </div>
                                          </li>
                                        );
                                      }

                                      return (
                                        <li key={stepIdx} className="flex gap-3">
                                          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-quantum-cyan/10 border border-quantum-cyan/30 flex items-center justify-center text-quantum-cyan font-semibold text-xs">
                                            {stepIdx + 1}
                                          </span>
                                          <span className="flex-1 pt-0.5 text-gray-300">{step}</span>
                                        </li>
                                      );
                                    })}
                                  </ol>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col gap-3 lg:w-48">
                    <button className="btn-primary !py-3 !px-6 text-center whitespace-nowrap">
                      <svg className="w-5 h-5 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                      </svg>
                      Download
                    </button>
                    <a href="#" className="text-center text-sm text-gray-500 hover:text-quantum-cyan transition-colors">
                      View on GitHub →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
