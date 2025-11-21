'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import PageHero from '@/components/PageHero';
import Footer from '@/components/Footer';

interface APISection {
  id: string;
  title: string;
  content: {
    title: string;
    description: string;
    code: string;
    parameters?: Array<{ name: string; type: string; description: string; required?: boolean }>;
    returns?: string;
  }[];
}

export default function APIReferencePage() {
  const apiSections: APISection[] = [
    {
      id: 'authentication',
      title: 'Authentication',
      content: [
        {
          title: 'Initialize Device',
          description: 'Connect and initialize a QuantumShield device. This must be called before any other operations.',
          code: `import QuantumShield from '@quantumshield/sdk';

const device = await QuantumShield.init({
  transport: 'usb',
  timeout: 5000,
  debug: false
});

console.log('Device ID:', device.id);
console.log('Firmware:', device.version);`,
          parameters: [
            { name: 'transport', type: 'string', description: 'Connection type: "usb", "nfc", or "bluetooth"', required: true },
            { name: 'timeout', type: 'number', description: 'Connection timeout in milliseconds (default: 5000)', required: false },
            { name: 'debug', type: 'boolean', description: 'Enable debug logging (default: false)', required: false },
          ],
          returns: 'Promise<QuantumShieldDevice>',
        },
        {
          title: 'Authenticate User (FIDO2/WebAuthn)',
          description: 'Perform FIDO2 authentication with quantum-safe signatures.',
          code: `const result = await device.authenticate({
  challenge: challengeBytes,
  rpId: 'mycompany.in',
  userVerification: 'required',
  algorithm: 'ML-DSA-65'
});

console.log('Signature:', result.signature);
console.log('Public Key:', result.publicKey);
console.log('Credential ID:', result.credentialId);`,
          parameters: [
            { name: 'challenge', type: 'Uint8Array', description: 'Random challenge from server (32-64 bytes)', required: true },
            { name: 'rpId', type: 'string', description: 'Relying party identifier (domain)', required: true },
            { name: 'userVerification', type: 'string', description: '"required", "preferred", or "discouraged"', required: false },
            { name: 'algorithm', type: 'string', description: 'Signature algorithm: "ML-DSA-65" or "ML-DSA-87"', required: false },
          ],
          returns: 'Promise<AuthenticationResult>',
        },
        {
          title: 'Register New Credential',
          description: 'Create a new FIDO2 credential for user registration.',
          code: `const credential = await device.register({
  challenge: challengeBytes,
  rpId: 'mycompany.in',
  rpName: 'My Application',
  userId: userIdBytes,
  userName: 'rahul.sharma@mycompany.in',
  userDisplayName: 'Rahul Sharma',
  requireResidentKey: false
});

console.log('Credential ID:', credential.id);
console.log('Public Key:', credential.publicKey);`,
          parameters: [
            { name: 'challenge', type: 'Uint8Array', description: 'Random challenge from server', required: true },
            { name: 'rpId', type: 'string', description: 'Relying party identifier', required: true },
            { name: 'rpName', type: 'string', description: 'Human-readable RP name', required: true },
            { name: 'userId', type: 'Uint8Array', description: 'Unique user identifier', required: true },
            { name: 'userName', type: 'string', description: 'User account name', required: true },
            { name: 'userDisplayName', type: 'string', description: 'User display name', required: true },
            { name: 'requireResidentKey', type: 'boolean', description: 'Store credential on device', required: false },
          ],
          returns: 'Promise<RegistrationResult>',
        },
      ],
    },
    {
      id: 'encryption',
      title: 'Encryption',
      content: [
        {
          title: 'Generate Encryption Key Pair',
          description: 'Generate a quantum-safe encryption key pair using ML-KEM (Kyber).',
          code: `const keyPair = await device.generateKeyPair({
  algorithm: 'ML-KEM-768',
  keyUsage: 'encryption',
  exportable: false
});

console.log('Public Key:', keyPair.publicKey);
console.log('Key ID:', keyPair.id);`,
          parameters: [
            { name: 'algorithm', type: 'string', description: '"ML-KEM-512", "ML-KEM-768", or "ML-KEM-1024"', required: true },
            { name: 'keyUsage', type: 'string', description: '"encryption" or "keyAgreement"', required: true },
            { name: 'exportable', type: 'boolean', description: 'Allow private key export (default: false)', required: false },
          ],
          returns: 'Promise<KeyPair>',
        },
        {
          title: 'Encrypt Data',
          description: 'Encrypt data using quantum-safe KEM (Key Encapsulation Mechanism).',
          code: `const encrypted = await device.encrypt({
  data: plaintextBytes,
  publicKey: recipientPublicKey,
  algorithm: 'ML-KEM-768'
});

console.log('Ciphertext:', encrypted.ciphertext);
console.log('Encapsulated Key:', encrypted.encapsulatedKey);`,
          parameters: [
            { name: 'data', type: 'Uint8Array', description: 'Plaintext data to encrypt', required: true },
            { name: 'publicKey', type: 'Uint8Array', description: 'Recipient public key', required: true },
            { name: 'algorithm', type: 'string', description: 'Encryption algorithm matching key type', required: true },
          ],
          returns: 'Promise<EncryptionResult>',
        },
        {
          title: 'Decrypt Data',
          description: 'Decrypt data using private key stored on device.',
          code: `const decrypted = await device.decrypt({
  ciphertext: encryptedData.ciphertext,
  encapsulatedKey: encryptedData.encapsulatedKey,
  keyId: myPrivateKeyId
});

console.log('Plaintext:', decrypted.data);`,
          parameters: [
            { name: 'ciphertext', type: 'Uint8Array', description: 'Encrypted data', required: true },
            { name: 'encapsulatedKey', type: 'Uint8Array', description: 'KEM encapsulated key', required: true },
            { name: 'keyId', type: 'string', description: 'Private key identifier on device', required: true },
          ],
          returns: 'Promise<DecryptionResult>',
        },
      ],
    },
    {
      id: 'signatures',
      title: 'Digital Signatures',
      content: [
        {
          title: 'Generate Signing Key Pair',
          description: 'Generate a quantum-safe signing key pair using ML-DSA (Dilithium).',
          code: `const signingKey = await device.generateKeyPair({
  algorithm: 'ML-DSA-65',
  keyUsage: 'signing',
  exportable: false
});

console.log('Verification Key:', signingKey.publicKey);
console.log('Key ID:', signingKey.id);`,
          parameters: [
            { name: 'algorithm', type: 'string', description: '"ML-DSA-44", "ML-DSA-65", or "ML-DSA-87"', required: true },
            { name: 'keyUsage', type: 'string', description: 'Must be "signing"', required: true },
            { name: 'exportable', type: 'boolean', description: 'Allow private key export (default: false)', required: false },
          ],
          returns: 'Promise<KeyPair>',
        },
        {
          title: 'Sign Data',
          description: 'Create a quantum-safe digital signature.',
          code: `const signature = await device.sign({
  data: messageBytes,
  keyId: signingKeyId,
  algorithm: 'ML-DSA-65',
  hashAlgorithm: 'SHA3-256'
});

console.log('Signature:', signature.value);
console.log('Timestamp:', signature.timestamp);`,
          parameters: [
            { name: 'data', type: 'Uint8Array', description: 'Data to sign', required: true },
            { name: 'keyId', type: 'string', description: 'Signing key identifier', required: true },
            { name: 'algorithm', type: 'string', description: 'Signature algorithm', required: true },
            { name: 'hashAlgorithm', type: 'string', description: 'Hash function: "SHA3-256" or "SHA3-512"', required: false },
          ],
          returns: 'Promise<SignatureResult>',
        },
        {
          title: 'Verify Signature',
          description: 'Verify a quantum-safe digital signature.',
          code: `const isValid = await device.verifySignature({
  data: messageBytes,
  signature: signatureBytes,
  publicKey: verificationKey,
  algorithm: 'ML-DSA-65'
});

console.log('Signature valid:', isValid);`,
          parameters: [
            { name: 'data', type: 'Uint8Array', description: 'Original signed data', required: true },
            { name: 'signature', type: 'Uint8Array', description: 'Signature to verify', required: true },
            { name: 'publicKey', type: 'Uint8Array', description: 'Verification public key', required: true },
            { name: 'algorithm', type: 'string', description: 'Signature algorithm used', required: true },
          ],
          returns: 'Promise<boolean>',
        },
      ],
    },
    {
      id: 'key-management',
      title: 'Key Management',
      content: [
        {
          title: 'List Stored Keys',
          description: 'Retrieve all keys stored on the device.',
          code: `const keys = await device.listKeys({
  keyUsage: 'all', // 'signing', 'encryption', or 'all'
  includePublic: true
});

keys.forEach(key => {
  console.log('Key ID:', key.id);
  console.log('Algorithm:', key.algorithm);
  console.log('Created:', key.createdAt);
});`,
          parameters: [
            { name: 'keyUsage', type: 'string', description: 'Filter by usage: "signing", "encryption", or "all"', required: false },
            { name: 'includePublic', type: 'boolean', description: 'Include public key data (default: true)', required: false },
          ],
          returns: 'Promise<KeyInfo[]>',
        },
        {
          title: 'Delete Key',
          description: 'Permanently delete a key from the device.',
          code: `const result = await device.deleteKey({
  keyId: keyIdToDelete,
  confirmPin: true
});

console.log('Key deleted:', result.success);`,
          parameters: [
            { name: 'keyId', type: 'string', description: 'Key identifier to delete', required: true },
            { name: 'confirmPin', type: 'boolean', description: 'Require PIN confirmation (default: true)', required: false },
          ],
          returns: 'Promise<DeleteResult>',
        },
        {
          title: 'Export Public Key',
          description: 'Export a public key in various formats.',
          code: `const exportedKey = await device.exportPublicKey({
  keyId: myKeyId,
  format: 'pem' // 'pem', 'der', 'jwk', or 'raw'
});

console.log('Public Key PEM:', exportedKey.data);`,
          parameters: [
            { name: 'keyId', type: 'string', description: 'Key identifier to export', required: true },
            { name: 'format', type: 'string', description: 'Export format: "pem", "der", "jwk", or "raw"', required: true },
          ],
          returns: 'Promise<ExportedKey>',
        },
      ],
    },
    {
      id: 'entropy',
      title: 'Entropy & Random Numbers',
      content: [
        {
          title: 'Generate Random Bytes',
          description: 'Generate cryptographically secure random bytes using hardware QRNG.',
          code: `const randomBytes = await device.generateRandomBytes({
  length: 32,
  quality: 'quantum'
});

console.log('Random bytes:', randomBytes);
console.log('Entropy:', randomBytes.length * 8, 'bits');`,
          parameters: [
            { name: 'length', type: 'number', description: 'Number of random bytes to generate (1-4096)', required: true },
            { name: 'quality', type: 'string', description: '"quantum" or "hybrid" (default: "quantum")', required: false },
          ],
          returns: 'Promise<Uint8Array>',
        },
        {
          title: 'Seed External PRNG',
          description: 'Export high-quality entropy to seed external random number generators.',
          code: `const entropy = await device.exportEntropy({
  length: 256, // bytes
  continuous: false
});

// Use entropy to seed your PRNG
myPRNG.seed(entropy.data);
console.log('Entropy quality:', entropy.qualityScore);`,
          parameters: [
            { name: 'length', type: 'number', description: 'Entropy pool size in bytes', required: true },
            { name: 'continuous', type: 'boolean', description: 'Enable continuous entropy streaming', required: false },
          ],
          returns: 'Promise<EntropyResult>',
        },
      ],
    },
  ];

  const [selectedSection, setSelectedSection] = useState(apiSections[0]);

  return (
    <main className="bg-quantum-black min-h-screen">
      <Header />
      <PageHero
        title="API Reference"
        subtitle="Complete developer documentation"
        badge="v3.0"
      />

      <section className="section-padding">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="glass-card p-6 sticky top-24">
                <h3 className="text-sm font-semibold text-gray-400 mb-4">API Sections</h3>
                <ul className="space-y-3 text-sm">
                  {apiSections.map((section) => (
                    <li key={section.id}>
                      <button
                        onClick={() => setSelectedSection(section)}
                        className={`text-left hover:text-white transition-colors ${
                          selectedSection.id === section.id ? 'text-quantum-cyan' : 'text-gray-400'
                        }`}
                      >
                        {section.title}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-3 space-y-8">
              <h2 className="text-3xl font-display font-bold text-white mb-6">{selectedSection.title}</h2>

              {selectedSection.content.map((item, idx) => (
                <div key={idx} className="glass-card p-8">
                  <h3 className="text-xl font-semibold text-quantum-cyan mb-3">{item.title}</h3>
                  <p className="text-gray-400 mb-6">{item.description}</p>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-400 mb-3">Code Example</h4>
                    <div className="bg-black/50 border border-white/10 rounded-lg overflow-hidden">
                      <div className="bg-white/5 px-4 py-2 border-b border-white/10 flex items-center justify-between">
                        <span className="text-xs font-mono text-gray-400">JavaScript</span>
                        <button className="text-xs text-quantum-cyan hover:text-quantum-cyan-glow transition-colors flex items-center gap-1.5">
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                          </svg>
                          Copy
                        </button>
                      </div>
                      <pre className="p-5 overflow-x-auto">
                        <code className="text-sm text-gray-300 font-mono leading-relaxed">{item.code}</code>
                      </pre>
                    </div>
                  </div>

                  {item.parameters && (
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-400 mb-3">Parameters</h4>
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="border-b border-white/10">
                              <th className="py-2 text-left text-gray-400 font-semibold">Parameter</th>
                              <th className="py-2 text-left text-gray-400 font-semibold">Type</th>
                              <th className="py-2 text-left text-gray-400 font-semibold">Required</th>
                              <th className="py-2 text-left text-gray-400 font-semibold">Description</th>
                            </tr>
                          </thead>
                          <tbody className="font-mono">
                            {item.parameters.map((param, pidx) => (
                              <tr key={pidx} className="border-b border-white/5">
                                <td className="py-3 text-quantum-cyan">{param.name}</td>
                                <td className="py-3 text-quantum-violet">{param.type}</td>
                                <td className="py-3 text-gray-400">
                                  {param.required !== false ? (
                                    <span className="text-red-400">Yes</span>
                                  ) : (
                                    <span className="text-gray-500">No</span>
                                  )}
                                </td>
                                <td className="py-3 text-gray-400">{param.description}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}

                  {item.returns && (
                    <div>
                      <h4 className="text-sm font-semibold text-gray-400 mb-2">Returns</h4>
                      <code className="text-sm text-quantum-violet font-mono bg-black/30 px-3 py-1.5 rounded">
                        {item.returns}
                      </code>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
