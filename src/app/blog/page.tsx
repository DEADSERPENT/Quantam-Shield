'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import PageHero from '@/components/PageHero';
import Footer from '@/components/Footer';

interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  author: string;
  content: string;
}

export default function BlogPage() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const posts: BlogPost[] = [
    {
      title: 'Understanding Post-Quantum Cryptography',
      excerpt: 'A deep dive into why we need quantum-safe encryption and how it works.',
      date: 'Jan 15, 2025',
      category: 'Technology',
      readTime: '8 min read',
      author: 'Dr. Priya Sharma',
      content: `# Understanding Post-Quantum Cryptography

The advent of quantum computing poses an unprecedented threat to modern cryptographic systems. Current encryption methods like RSA and ECC rely on mathematical problems that are computationally hard for classical computers but can be efficiently solved by quantum computers using algorithms like Shor's algorithm.

## The Quantum Threat

Quantum computers leverage quantum mechanical phenomena like superposition and entanglement to perform certain calculations exponentially faster than classical computers. This capability threatens:

- **RSA encryption** - Used in TLS/SSL certificates, digital signatures
- **Elliptic Curve Cryptography (ECC)** - Used in Bitcoin, secure messaging
- **Diffie-Hellman key exchange** - Foundation of secure communications

## NIST's Post-Quantum Standards

In 2024, NIST standardized three primary post-quantum algorithms:

### ML-KEM (Kyber)
- **Purpose**: Key encapsulation mechanism for encryption
- **Security levels**: ML-KEM-512, ML-KEM-768, ML-KEM-1024
- **Based on**: Module Learning With Errors (MLWE) problem

### ML-DSA (Dilithium)
- **Purpose**: Digital signatures
- **Security levels**: ML-DSA-44, ML-DSA-65, ML-DSA-87
- **Based on**: Module Learning With Errors and Module Short Integer Solution

### SLH-DSA (SPHINCS+)
- **Purpose**: Stateless hash-based signatures
- **Advantage**: Based only on hash function security

## Why Act Now?

The threat model includes "harvest now, decrypt later" attacks where adversaries collect encrypted data today to decrypt it once quantum computers become available. Organizations should begin transitioning to post-quantum cryptography immediately to protect long-term sensitive data.

## QuantumShield's Approach

QuantumShield implements all NIST-standardized algorithms in hardware, providing:

- Hardware-accelerated ML-KEM encryption
- Quantum-safe digital signatures with ML-DSA
- Hybrid classical-quantum security during transition
- FIPS 140-3 certified implementation

The future of digital security is quantum-safe, and that future is now.`,
    },
    {
      title: 'Quantum Computing Timeline: When Should You Worry?',
      excerpt: 'Expert predictions on when quantum computers will break current encryption.',
      date: 'Jan 10, 2025',
      category: 'Industry',
      readTime: '5 min read',
      author: 'Arjun Mehta',
      content: `# Quantum Computing Timeline: When Should You Worry?

The question isn't "if" quantum computers will break current encryption, but "when." Industry experts and government agencies provide varying timelines, but the consensus is clear: the threat is real and approaching.

## Expert Predictions

### Near-Term (2025-2028)
- 100-1,000 qubit systems with improved error correction
- Threat to specialized cryptographic systems
- Demonstration of quantum advantage in specific applications

### Mid-Term (2028-2033)
- 10,000+ qubit fault-tolerant systems
- Realistic threat to RSA-2048 and ECC-256
- Major tech companies likely to achieve cryptographically relevant quantum computers

### Long-Term (2033+)
- Large-scale, error-corrected quantum computers
- Capability to break all current public-key cryptography
- Widespread availability of quantum computing resources

## The "Harvest Now, Decrypt Later" Problem

Adversaries are already collecting encrypted data with the intent to decrypt it once quantum computers become available. This means:

- **Medical records** - Privacy violations decades into the future
- **Financial data** - Long-term fraud and manipulation risks
- **Government secrets** - National security implications
- **Trade secrets** - Competitive advantage loss

## What Organizations Should Do Now

### Immediate Actions (2025)
1. **Inventory cryptographic assets** - Identify what needs protection
2. **Assess data sensitivity lifespan** - How long must data remain secure?
3. **Begin pilot projects** - Test post-quantum solutions in non-critical systems

### Short-Term (2025-2027)
1. **Deploy hybrid solutions** - Combine classical and quantum-safe algorithms
2. **Update security policies** - Include PQC requirements
3. **Train staff** - Educate teams on quantum threats and solutions

### Long-Term (2027+)
1. **Full migration** - Complete transition to post-quantum cryptography
2. **Continuous monitoring** - Stay updated on quantum computing advances
3. **Regular audits** - Ensure all systems remain quantum-safe

## Regulatory Landscape

Government mandates are emerging:

- **CERT-In**: Indian Computer Emergency Response Team recommending quantum-safe cryptography adoption
- **NTRO**: National Technical Research Organisation working on quantum-safe standards
- **Ministry of Electronics & IT**: Proposed quantum-safe requirements for critical infrastructure

Don't wait for regulations to force your hand. The time to act is now.`,
    },
    {
      title: 'How to Migrate to Quantum-Safe Security',
      excerpt: 'Step-by-step guide for enterprises transitioning to post-quantum cryptography.',
      date: 'Jan 5, 2025',
      category: 'Guide',
      readTime: '12 min read',
      author: 'Dr. Priya Sharma',
      content: `# How to Migrate to Quantum-Safe Security

Transitioning to post-quantum cryptography (PQC) is a complex undertaking that requires careful planning, testing, and execution. This guide provides a comprehensive roadmap for enterprises.

## Phase 1: Discovery and Assessment (3-6 months)

### Step 1: Cryptographic Inventory
Create a comprehensive inventory of all cryptographic assets:

- TLS/SSL certificates
- Code signing certificates
- VPN connections
- Database encryption
- API authentication
- Digital signatures
- Key management systems

### Step 2: Risk Assessment
Evaluate each asset based on:

- **Data sensitivity** - How critical is the protected data?
- **Exposure timeframe** - How long must data remain secure?
- **Threat level** - What adversaries might target this data?
- **Compliance requirements** - What regulations apply?

### Step 3: Prioritization
Create a migration priority matrix:

**High Priority**: Long-term sensitive data, compliance requirements
**Medium Priority**: Moderate-term sensitive data, public-facing systems
**Low Priority**: Short-term data, internal systems

## Phase 2: Planning and Design (6-12 months)

### Architecture Design
Choose your migration strategy:

#### Hybrid Approach (Recommended)
Combine classical and quantum-safe algorithms during transition:
- Maintains backward compatibility
- Provides defense-in-depth
- Allows gradual migration

#### Direct Migration
Full replacement of classical with quantum-safe:
- Simpler architecture
- Requires breaking changes
- Faster once planned

### Technology Selection
Evaluate post-quantum solutions:

**Hardware Security Modules**
- QuantumShield devices
- Hardware-accelerated performance
- FIPS 140-3 certified

**Software Libraries**
- liboqs (Open Quantum Safe)
- BouncyCastle PQC
- Cloud provider PQC APIs

### Timeline and Budget
Typical enterprise migration:
- **Small (<100 endpoints)**: 6-12 months, $50K-$200K
- **Medium (100-1000)**: 12-24 months, $200K-$1M
- **Large (1000+)**: 24-36 months, $1M-$10M+

## Phase 3: Pilot and Testing (6-12 months)

### Select Pilot Systems
Choose non-critical systems for initial deployment:
- Internal development environments
- Test APIs
- Low-traffic services

### Performance Testing
Measure impact of PQC algorithms:
- **Throughput** - Transactions per second
- **Latency** - Response time increase
- **Bandwidth** - Certificate size impact
- **Computational overhead** - CPU/memory usage

### Compatibility Testing
Verify interoperability:
- Legacy system support
- Third-party integrations
- Client compatibility
- Protocol negotiation

## Phase 4: Staged Rollout (12-24 months)

### Phase 4.1: Internal Systems
Begin with systems under your control:
- Internal APIs
- Database connections
- File storage encryption

### Phase 4.2: Public-Facing Systems
Gradually expose quantum-safe systems:
- Enable hybrid TLS
- Monitor client compatibility
- Provide fallback options

### Phase 4.3: Critical Systems
Final migration of most sensitive systems:
- Payment processing
- Authentication services
- Key management infrastructure

## Phase 5: Monitoring and Maintenance (Ongoing)

### Continuous Monitoring
Track key metrics:
- Algorithm usage statistics
- Performance metrics
- Security incidents
- Compliance status

### Regular Updates
Stay current with developments:
- NIST standard updates
- New attack vectors
- Performance improvements
- Tool updates

## Common Challenges and Solutions

### Challenge: Large Certificate Sizes
**Solution**: Use certificate caching, compression, and hybrid schemes

### Challenge: Performance Overhead
**Solution**: Hardware acceleration, algorithm optimization, caching

### Challenge: Legacy System Support
**Solution**: Proxy layers, gradual sunsetting, extended support contracts

### Challenge: Skilled Personnel Shortage
**Solution**: Training programs, consultants, partnerships with IITs and NITs for talent

## Best Practices

1. **Start early** - Don't wait for quantum computers to become a reality
2. **Use hybrid schemes** - Maintain backward compatibility
3. **Test thoroughly** - Performance and security testing is critical
4. **Document everything** - Maintain detailed migration records
5. **Train staff** - Ensure your team understands PQC
6. **Stay informed** - Monitor NIST and industry developments
7. **Engage vendors** - Ensure your suppliers support PQC

## QuantumShield Integration Example

Using QuantumShield for hybrid TLS:

\`\`\`javascript
const device = await QuantumShield.init();

// Generate hybrid key pair
const keyPair = await device.generateKeyPair({
  algorithm: 'ML-KEM-768',
  hybrid: true,
  classicalAlgorithm: 'RSA-2048'
});

// Use in TLS handshake
const tlsConfig = {
  keyPair: keyPair,
  hybridMode: true,
  fallbackEnabled: true
};
\`\`\`

The journey to quantum-safe security is complex but achievable with proper planning and execution.`,
    },
    {
      title: 'NIST PQC Standards: What You Need to Know',
      excerpt: 'Breaking down the newly standardized post-quantum algorithms.',
      date: 'Dec 28, 2024',
      category: 'Standards',
      readTime: '6 min read',
      author: 'Arjun Mehta',
      content: `# NIST PQC Standards: What You Need to Know

After an eight-year evaluation process, NIST published the first set of post-quantum cryptographic standards in 2024. Understanding these standards is crucial for anyone responsible for cryptographic security.

## The NIST PQC Competition

The selection process:
- **2016**: Competition announced
- **2017**: 69 initial submissions
- **2020**: 15 finalists selected
- **2022**: 4 algorithms chosen
- **2024**: Final standards published

## The Three Core Standards

### FIPS 203: Module-Lattice-Based Key-Encapsulation Mechanism (ML-KEM)

Previously known as CRYSTALS-Kyber, ML-KEM is designed for general encryption purposes.

**Security Levels:**
- **ML-KEM-512**: Roughly equivalent to AES-128 (~2^170 security)
- **ML-KEM-768**: Roughly equivalent to AES-192 (~2^233 security)
- **ML-KEM-1024**: Roughly equivalent to AES-256 (~2^298 security)

**Key Sizes:**
- Public key: 800-1568 bytes
- Private key: 1632-3168 bytes
- Ciphertext: 768-1568 bytes

**Performance:**
- Key generation: <100μs
- Encapsulation: <150μs
- Decapsulation: <200μs

**Best For:**
- TLS/SSL encryption
- VPN tunnels
- File encryption
- Secure messaging

### FIPS 204: Module-Lattice-Based Digital Signature Algorithm (ML-DSA)

Previously known as CRYSTALS-Dilithium, ML-DSA provides quantum-safe digital signatures.

**Security Levels:**
- **ML-DSA-44**: Category 2 security (~2^134 security)
- **ML-DSA-65**: Category 3 security (~2^190 security)
- **ML-DSA-87**: Category 5 security (~2^272 security)

**Key Sizes:**
- Public key: 1312-2592 bytes
- Private key: 2528-4864 bytes
- Signature: 2420-4595 bytes

**Performance:**
- Key generation: <200μs
- Signing: <500μs
- Verification: <100μs

**Best For:**
- Code signing
- Document signing
- Certificate authority signatures
- Software updates
- Blockchain transactions

### FIPS 205: Stateless Hash-Based Digital Signature Algorithm (SLH-DSA)

Previously known as SPHINCS+, SLH-DSA provides conservative security based only on hash functions.

**Advantages:**
- Based solely on hash function security
- No mathematical assumptions
- Most conservative security

**Disadvantages:**
- Larger signatures (7-49 KB)
- Slower signature generation
- Higher computational cost

**Best For:**
- Long-term signatures (decades)
- Root certificate signing
- Firmware signing
- Critical infrastructure

## Implementation Guidelines

### Hybrid Schemes Recommended

NIST recommends combining classical and post-quantum algorithms during transition:

**For Encryption:**
\`\`\`
Combined = Classical-KEM + ML-KEM
Example: RSA-2048 + ML-KEM-768
\`\`\`

**For Signatures:**
\`\`\`
Dual Signature = Classical-Sig + ML-DSA
Example: ECDSA-P256 + ML-DSA-65
\`\`\`

### Migration Timeline

**Phase 1 (2024-2025):** Hybrid deployment
- Add PQC alongside classical
- Test compatibility
- Build expertise

**Phase 2 (2026-2030):** Transition period
- Increase PQC usage
- Reduce classical reliance
- Monitor quantum threat

**Phase 3 (2031+):** PQC-only
- Deprecate classical algorithms
- Full quantum-safe infrastructure
- Continuous updates

## Additional Algorithms Under Consideration

NIST continues to evaluate alternatives:

### Code-Based Cryptography
- **Classic McEliece**: Large keys but fast operations
- **BIKE**: Smaller keys, moderate performance

### Multivariate Cryptography
- **Rainbow**: Fast signatures (but broken in 2022)
- **GeMSS**: Conservative alternative

### Isogeny-Based Cryptography
- **SIKE**: Smallest keys (but broken in 2022)
- Research ongoing

## Compliance Requirements

### Government Mandates
- **CERT-In**: Recommending PQC for critical infrastructure
- **Ministry of Defence**: Quantum-safe requirements for defense systems
- **RBI**: Reserve Bank of India evaluating quantum-safe standards for banking

### Industry Standards
- **PCI DSS**: Evaluating PQC requirements
- **Data Protection Bill**: Indian data protection regulations adapting to quantum threats
- **UIDAI**: Aadhaar security standards considering quantum-safe measures

## Common Misconceptions

**Myth: "I can wait until quantum computers exist"**
Reality: Data collected now can be decrypted later

**Myth: "PQC is too slow for production"**
Reality: Hardware acceleration makes it practical

**Myth: "One algorithm is enough"**
Reality: Crypto-agility requires multiple algorithms

**Myth: "PQC is unproven"**
Reality: Years of cryptanalysis and real-world testing

## Getting Started

### For Developers
1. Use PQC-enabled libraries (liboqs, BouncyCastle)
2. Implement hybrid schemes
3. Test performance in your environment

### For Enterprises
1. Conduct cryptographic inventory
2. Assess migration timeline
3. Pilot PQC in non-critical systems

### For Decision Makers
1. Understand the quantum threat
2. Allocate budget for migration
3. Establish PQC policies

The NIST standards provide a solid foundation for the post-quantum era. Early adoption is key to staying ahead of the quantum threat.`,
    },
    {
      title: 'Hardware vs Software PQC: Why Hardware Wins',
      excerpt: 'Exploring the performance and security benefits of hardware-based post-quantum cryptography.',
      date: 'Dec 20, 2024',
      category: 'Technology',
      readTime: '7 min read',
      author: 'Dr. Priya Sharma',
      content: `# Hardware vs Software PQC: Why Hardware Wins

Post-quantum cryptography can be implemented in software libraries or dedicated hardware. While software implementations are easier to deploy, hardware solutions offer significant advantages in performance, security, and reliability.

## Performance Comparison

### ML-KEM-768 Encryption
- **Software (CPU)**: 150-300μs per operation
- **Hardware (QuantumShield)**: 15-30μs per operation
- **Speedup**: 10x faster

### ML-DSA-65 Signing
- **Software (CPU)**: 500-1000μs per signature
- **Hardware**: 50-100μs per signature
- **Speedup**: 10x faster

### Throughput
- **Software**: ~3,000 ops/sec
- **Hardware**: ~30,000 ops/sec
- **Scalability**: Hardware better for high-volume applications

## Security Advantages

### Protected Key Storage
- Keys never leave secure hardware
- Resistant to memory dumps
- Protection against malware

### Side-Channel Resistance
- Hardware implementations resist timing attacks
- Power analysis protection
- Electromagnetic emission shielding

### Tamper Detection
- Physical security mechanisms
- Self-destruct on intrusion attempts
- Audit trails for all operations

## Use Cases

**Choose Hardware When:**
- High-volume operations required
- Maximum security needed
- Long-term key storage
- Compliance requirements (FIPS 140-3)

**Software May Suffice When:**
- Low-volume operations
- Rapid prototyping
- Budget constraints
- Temporary deployments

The future of secure cryptography is hardware-accelerated and quantum-safe.`,
    },
    {
      title: 'Zero Trust Architecture in the Quantum Era',
      excerpt: 'How quantum-safe cryptography enables true zero trust security models.',
      date: 'Dec 12, 2024',
      category: 'Security',
      readTime: '6 min read',
      author: 'Arjun Mehta',
      content: `# Zero Trust Architecture in the Quantum Era

Zero trust security—the principle of "never trust, always verify"—becomes even more critical as quantum threats emerge. Post-quantum cryptography is essential for implementing true zero trust architectures.

## Zero Trust Fundamentals

### Core Principles
1. **Verify explicitly** - Always authenticate and authorize
2. **Least privilege access** - Minimal permissions required
3. **Assume breach** - Act as if compromised

### Implementation Pillars
- Strong authentication
- Microsegmentation
- Continuous verification
- Encrypted everything

## Quantum Threats to Zero Trust

Traditional zero trust relies on:
- **PKI certificates** - Vulnerable to quantum attacks
- **TLS encryption** - Breakable by quantum computers
- **VPN tunnels** - Based on vulnerable algorithms
- **API authentication** - Using soon-to-be-broken signatures

## Quantum-Safe Zero Trust

### Hardware Root of Trust
QuantumShield provides:
- Quantum-safe device authentication
- Hardware-backed credentials
- Tamper-resistant key storage

### Continuous Cryptographic Verification
- Every request authenticated with ML-DSA signatures
- All data encrypted with ML-KEM
- No implicit trust, even within network

### Microsegmentation with PQC
- Quantum-safe encryption between segments
- Hardware-enforced access controls
- Real-time threat detection

## Implementation Roadmap

### Phase 1: Identity Layer
1. Deploy hardware security keys (QuantumShield)
2. Enable quantum-safe authentication
3. Implement MFA with PQC

### Phase 2: Network Layer
1. Upgrade to PQC-enabled VPNs
2. Implement quantum-safe TLS
3. Deploy network microsegmentation

### Phase 3: Application Layer
1. API authentication with ML-DSA
2. Data encryption with ML-KEM
3. Secure service mesh with PQC

The quantum era demands quantum-safe zero trust. Start building your defense now.`,
    },
  ];

  if (selectedPost) {
    return (
      <main className="bg-quantum-black min-h-screen">
        <Header />
        <PageHero
          title={selectedPost.title}
          subtitle={`By ${selectedPost.author} • ${selectedPost.readTime}`}
          badge={selectedPost.category}
        />

        <section className="section-padding">
          <div className="container mx-auto max-w-4xl">
            <button
              onClick={() => setSelectedPost(null)}
              className="mb-8 flex items-center gap-2 text-quantum-cyan hover:text-quantum-cyan-glow transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to all posts
            </button>

            <div className="glass-card p-8 md:p-12">
              <div className="flex items-center gap-4 mb-6 text-sm text-gray-500">
                <span>{selectedPost.date}</span>
                <span>•</span>
                <span>{selectedPost.readTime}</span>
                <span>•</span>
                <span>{selectedPost.author}</span>
              </div>

              <div className="prose prose-invert prose-lg max-w-none">
                <div className="text-gray-300 leading-relaxed">
                  {(() => {
                    const lines = selectedPost.content.split('\n');
                    const elements: React.ReactElement[] = [];
                    let inCodeBlock = false;
                    let codeLines: string[] = [];
                    let codeLanguage = '';

                    lines.forEach((line, idx) => {
                      // Handle code blocks
                      if (line.startsWith('```')) {
                        if (!inCodeBlock) {
                          inCodeBlock = true;
                          codeLanguage = line.substring(3);
                          codeLines = [];
                        } else {
                          inCodeBlock = false;
                          elements.push(
                            <div key={`code-${idx}`} className="my-6">
                              <div className="bg-black/50 border border-white/10 rounded-lg overflow-hidden">
                                <div className="bg-white/5 px-4 py-2 border-b border-white/10 flex items-center justify-between">
                                  <span className="text-xs font-mono text-gray-400">{codeLanguage || 'code'}</span>
                                  <button className="text-xs text-quantum-cyan hover:text-quantum-cyan-glow transition-colors">
                                    Copy
                                  </button>
                                </div>
                                <pre className="p-5 overflow-x-auto">
                                  <code className="text-sm font-mono text-gray-300">{codeLines.join('\n')}</code>
                                </pre>
                              </div>
                            </div>
                          );
                        }
                        return;
                      }

                      if (inCodeBlock) {
                        codeLines.push(line);
                        return;
                      }

                      // Headings
                      if (line.startsWith('# ')) {
                        elements.push(<h1 key={idx} className="text-4xl font-bold text-white mt-10 mb-4 first:mt-0">{line.substring(2)}</h1>);
                      } else if (line.startsWith('## ')) {
                        elements.push(<h2 key={idx} className="text-3xl font-bold text-white mt-10 mb-4">{line.substring(3)}</h2>);
                      } else if (line.startsWith('### ')) {
                        elements.push(<h3 key={idx} className="text-2xl font-bold text-quantum-cyan mt-8 mb-3">{line.substring(4)}</h3>);
                      } else if (line.startsWith('#### ')) {
                        elements.push(<h4 key={idx} className="text-xl font-semibold text-white mt-6 mb-2">{line.substring(5)}</h4>);
                      }
                      // Bold list items
                      else if (line.startsWith('- **') && line.includes('**')) {
                        const match = line.match(/- \*\*(.+?)\*\*(.+)/);
                        if (match) {
                          elements.push(
                            <li key={idx} className="ml-6 mb-2.5 flex items-start gap-2">
                              <span className="text-quantum-cyan mt-1.5 text-xs">●</span>
                              <span>
                                <strong className="text-quantum-cyan font-semibold">{match[1]}</strong>
                                <span className="text-gray-300">{match[2]}</span>
                              </span>
                            </li>
                          );
                        }
                      }
                      // Regular list items
                      else if (line.startsWith('- ')) {
                        elements.push(
                          <li key={idx} className="ml-6 mb-2.5 flex items-start gap-2">
                            <span className="text-quantum-cyan mt-1.5 text-xs">●</span>
                            <span className="text-gray-300">{line.substring(2)}</span>
                          </li>
                        );
                      }
                      // Numbered lists
                      else if (line.match(/^\d+\. /)) {
                        const num = line.match(/^(\d+)\./)?.[1];
                        elements.push(
                          <li key={idx} className="ml-6 mb-2.5 flex items-start gap-3">
                            <span className="text-quantum-cyan font-semibold min-w-[1.5rem]">{num}.</span>
                            <span className="text-gray-300 flex-1">{line.substring(line.indexOf('. ') + 2)}</span>
                          </li>
                        );
                      }
                      // Bold standalone text
                      else if (line.startsWith('**') && line.endsWith('**')) {
                        elements.push(<p key={idx} className="font-bold text-white mt-6 mb-3 text-lg">{line.replace(/\*\*/g, '')}</p>);
                      }
                      // Empty lines
                      else if (line.trim() === '') {
                        elements.push(<div key={idx} className="h-4" />);
                      }
                      // Regular paragraphs
                      else if (line.trim()) {
                        elements.push(<p key={idx} className="mb-4 text-gray-300 leading-relaxed">{line}</p>);
                      }
                    });

                    return elements;
                  })()}
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-white/10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-quantum-cyan/20 to-quantum-violet/20 border border-quantum-cyan/30 flex items-center justify-center">
                      <span className="text-quantum-cyan font-bold">{selectedPost.author.split(' ').map(n => n[0]).join('')}</span>
                    </div>
                    <div>
                      <p className="text-white font-semibold">{selectedPost.author}</p>
                      <p className="text-sm text-gray-500">QuantumShield Team</p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button className="p-2 glass-card hover:border-quantum-cyan/50 transition-all">
                      <svg className="w-5 h-5 text-gray-400 hover:text-quantum-cyan transition-colors" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                      </svg>
                    </button>
                    <button className="p-2 glass-card hover:border-quantum-cyan/50 transition-all">
                      <svg className="w-5 h-5 text-gray-400 hover:text-quantum-cyan transition-colors" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    );
  }

  return (
    <main className="bg-quantum-black min-h-screen">
      <Header />
      <PageHero
        title="Blog"
        subtitle="Insights on quantum security and cryptography"
        badge="Latest Updates"
      />

      <section className="section-padding">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            {posts.map((post) => (
              <article
                key={post.title}
                onClick={() => setSelectedPost(post)}
                className="glass-card p-8 hover:scale-[1.02] hover:border-quantum-cyan/50 transition-all duration-300 cursor-pointer group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-quantum-cyan/10 text-quantum-cyan border border-quantum-cyan/30">
                    {post.category}
                  </span>
                  <span className="text-sm text-gray-500">{post.readTime}</span>
                </div>
                <h2 className="text-2xl font-display font-bold text-white mb-3 group-hover:text-quantum-cyan transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-400 mb-4 leading-relaxed">{post.excerpt}</p>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2 text-gray-500">
                    <div className="w-6 h-6 rounded-full bg-quantum-cyan/20 border border-quantum-cyan/30 flex items-center justify-center">
                      <span className="text-[10px] text-quantum-cyan font-bold">{post.author.split(' ').map(n => n[0]).join('')}</span>
                    </div>
                    <span>{post.author}</span>
                    <span>•</span>
                    <span>{post.date}</span>
                  </div>
                  <span className="text-quantum-cyan group-hover:translate-x-2 transition-transform inline-flex items-center gap-1">
                    Read more
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
