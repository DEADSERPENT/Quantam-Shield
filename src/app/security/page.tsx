import Header from '@/components/Header';
import PageHero from '@/components/PageHero';
import Footer from '@/components/Footer';

export default function SecurityPage() {
  const certifications = [
    {
      name: 'FIPS 140-3 Level 3',
      issuer: 'NIST',
      description: 'Cryptographic Module Validation Program certification for government use',
    },
    {
      name: 'Common Criteria EAL6+',
      issuer: 'ISO/IEC 15408',
      description: 'Highest practical level of security evaluation',
    },
    {
      name: 'NIST PQC Standard',
      issuer: 'NIST',
      description: 'Compliant with NIST post-quantum cryptography standards',
    },
    {
      name: 'FIDO2 Level 2',
      issuer: 'FIDO Alliance',
      description: 'Certified for passwordless authentication',
    },
  ];

  const securityFeatures = [
    {
      title: 'Physical Security',
      features: [
        'Tamper-evident enclosure',
        'Active tamper detection mesh',
        'Secure boot with signature verification',
        'Anti-probing coating',
      ],
    },
    {
      title: 'Side-Channel Protection',
      features: [
        'Power analysis countermeasures',
        'Timing attack mitigation',
        'EM emanation shielding',
        'Fault injection protection',
      ],
    },
    {
      title: 'Cryptographic Security',
      features: [
        'Quantum-resistant algorithms',
        'Perfect forward secrecy',
        'Secure key generation',
        'Hardware-backed attestation',
      ],
    },
  ];

  return (
    <main className="bg-quantum-black min-h-screen">
      <Header />
      <PageHero
        title="Security & Compliance"
        subtitle="Certified security you can trust"
        badge="Military Grade"
      />

      {/* Certifications */}
      <section className="section-padding">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-12 text-center">
            Certifications & Standards
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {certifications.map((cert) => (
              <div key={cert.name} className="glass-card p-8">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-quantum-cyan/20 to-quantum-violet/20 border border-quantum-cyan/30 flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-quantum-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{cert.name}</h3>
                <p className="text-sm text-quantum-cyan mb-3">{cert.issuer}</p>
                <p className="text-gray-400">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="section-padding bg-quantum-charcoal/30">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-12 text-center">
            Security Features
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {securityFeatures.map((category) => (
              <div key={category.title} className="glass-card p-8">
                <h3 className="text-xl font-semibold text-white mb-6">{category.title}</h3>
                <ul className="space-y-3">
                  {category.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-quantum-cyan mt-2 flex-shrink-0" />
                      <span className="text-gray-400">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Responsible Disclosure */}
      <section className="section-padding">
        <div className="container mx-auto max-w-3xl">
          <div className="glass-card p-12 text-center">
            <h2 className="text-2xl font-display font-bold mb-4">
              Responsible Disclosure Program
            </h2>
            <p className="text-gray-400 mb-6">
              We welcome security researchers to help us maintain the highest level of security.
              Report vulnerabilities to security@quantumshield.io for acknowledgment and rewards.
            </p>
            <a href="mailto:security@quantumshield.io" className="btn-secondary inline-block">
              Report Vulnerability
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
