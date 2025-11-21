'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import PageHero from '@/components/PageHero';
import Footer from '@/components/Footer';
import { QuestionIcon3D, ChipIcon3D, SettingsIcon3D, ShieldIcon3D, CreditCardIcon3D } from '@/components/Icons3D';

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqCategories = [
    {
      category: 'General',
      IconComponent: QuestionIcon3D,
      questions: [
        {
          question: 'What is QuantumShield?',
          answer:
            'QuantumShield is the world\'s first quantum-safe security key that uses post-quantum cryptography (PQC) to protect your data from future quantum computer attacks. It combines NIST-approved ML-KEM encryption with quantum random number generation (QRNG) for maximum security.',
        },
        {
          question: 'Why do I need quantum-safe security?',
          answer:
            'Quantum computers pose a significant threat to current encryption methods. "Harvest now, decrypt later" attacks allow adversaries to collect encrypted data today and decrypt it once quantum computers become powerful enough. QuantumShield protects against these future threats.',
        },
        {
          question: 'How is QuantumShield different from traditional security keys?',
          answer:
            'Traditional security keys use RSA or ECC encryption, which will be vulnerable to quantum attacks. QuantumShield uses NIST-approved post-quantum cryptographic algorithms (ML-KEM and ML-DSA) that are resistant to both classical and quantum computer attacks.',
        },
        {
          question: 'Is QuantumShield compatible with my existing accounts?',
          answer:
            'Yes! QuantumShield supports FIDO2/WebAuthn standards, making it compatible with thousands of websites and services including Google, Microsoft, GitHub, Dropbox, and more. It works alongside your existing authentication methods.',
        },
      ],
    },
    {
      category: 'Technical',
      IconComponent: ChipIcon3D,
      questions: [
        {
          question: 'What cryptographic algorithms does QuantumShield use?',
          answer:
            'QuantumShield uses NIST-approved post-quantum cryptographic algorithms: ML-KEM-768 (QuantumShield One) or ML-KEM-1024 (QuantumShield Pro) for key encapsulation, and ML-DSA for digital signatures. It also includes a hardware quantum random number generator (QRNG).',
        },
        {
          question: 'What is the difference between QuantumShield One and Pro?',
          answer:
            'QuantumShield One uses ML-KEM-768 encryption and is designed for personal use with USB-C and NFC connectivity. QuantumShield Pro uses ML-KEM-1024 (higher security), adds Bluetooth, includes advanced QRNG with entropy export, tamper-evident enclosure, and offers enterprise features like PKCS#11 support.',
        },
        {
          question: 'Does it work offline?',
          answer:
            'Yes! QuantumShield performs all cryptographic operations locally on the device. It doesn\'t require internet connectivity for authentication. However, you\'ll need internet to register it with online services.',
        },
        {
          question: 'What happens if I lose my QuantumShield?',
          answer:
            'Your QuantumShield is PIN-protected and will lock after multiple failed attempts. We recommend setting up backup authentication methods on your accounts and storing recovery codes in a secure location. Consider purchasing a second key as a backup.',
        },
      ],
    },
    {
      category: 'Setup & Usage',
      IconComponent: SettingsIcon3D,
      questions: [
        {
          question: 'How do I set up my QuantumShield?',
          answer:
            'Setting up is easy: 1) Connect your QuantumShield to your device, 2) Download the QuantumShield Manager software, 3) Initialize your key with a PIN, 4) Register it with your accounts. See our Getting Started guide for detailed instructions.',
        },
        {
          question: 'What operating systems are supported?',
          answer:
            'QuantumShield works with Windows 10+, macOS 11.0+, Linux (Ubuntu 20.04+), Chrome OS, Android 8.0+, and iOS 14.0+. It supports all major browsers including Chrome, Firefox, Edge, and Safari.',
        },
        {
          question: 'Can I use QuantumShield on multiple devices?',
          answer:
            'Yes! You can use your QuantumShield with unlimited devices. Simply connect it to any compatible device and use it for authentication. Your security key is portable and works across all your devices.',
        },
        {
          question: 'How do I update the firmware?',
          answer:
            'Firmware updates are delivered through the QuantumShield Manager software. When an update is available, you\'ll see a notification. Simply click "Update" and follow the prompts. Your key will never lose data during updates.',
        },
      ],
    },
    {
      category: 'Security & Privacy',
      IconComponent: ShieldIcon3D,
      questions: [
        {
          question: 'Is my data stored on the QuantumShield?',
          answer:
            'QuantumShield stores cryptographic keys and credentials securely in its tamper-resistant chip. No personal information, passwords, or browsing data is stored. All data is encrypted and protected by your PIN.',
        },
        {
          question: 'Can QuantumShield be hacked?',
          answer:
            'QuantumShield is designed with multiple security layers: post-quantum encryption, secure element chip, PIN protection, and optional biometric verification. It meets FIPS 140-3 Level 3 and Common Criteria EAL6+ certifications. While no device is 100% unhackable, QuantumShield provides military-grade protection.',
        },
        {
          question: 'What certifications does QuantumShield have?',
          answer:
            'QuantumShield is certified with FIPS 140-3 Level 3, Common Criteria EAL6+, NIST PQC approval, SOC 2 Type II compliance, and meets industry standards for hardware security.',
        },
        {
          question: 'Does QuantumShield track my usage?',
          answer:
            'No. QuantumShield does not track, log, or transmit your usage data. All operations are performed locally on the device. We respect your privacy and do not collect any personal information.',
        },
      ],
    },
    {
      category: 'Purchasing & Support',
      IconComponent: CreditCardIcon3D,
      questions: [
        {
          question: 'What is included in the warranty?',
          answer:
            'QuantumShield One includes a 2-year warranty, and QuantumShield Pro includes a 5-year warranty. We cover manufacturing defects and hardware failures. Warranty does not cover physical damage, loss, or theft.',
        },
        {
          question: 'What is your return policy?',
          answer:
            'We offer a 30-day money-back guarantee. If you\'re not satisfied with your QuantumShield, return it within 30 days for a full refund, no questions asked.',
        },
        {
          question: 'Do you offer volume discounts?',
          answer:
            'Yes! We offer volume discounts for orders of 10+ units. Contact our sales team at sales@quantumshield.com for enterprise pricing and custom solutions.',
        },
        {
          question: 'How do I contact support?',
          answer:
            'Our support team is available 24/7. You can reach us via email at support@quantumshield.com, live chat on our website, or by submitting a ticket through your account dashboard. We typically respond within 2 hours.',
        },
      ],
    },
  ];

  const toggleQuestion = (categoryIndex: number, questionIndex: number) => {
    const index = categoryIndex * 100 + questionIndex;
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="bg-quantum-black min-h-screen">
      <Header />
      <PageHero
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about QuantumShield"
        badge="Quick Answers"
      />

      {/* FAQ Content */}
      <section className="section-padding">
        <div className="container mx-auto max-w-4xl">
          {faqCategories.map((category, categoryIndex) => {
            const IconComponent = category.IconComponent;
            return (
            <div key={categoryIndex} className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <IconComponent className="w-14 h-14" />
                <h2 className="text-2xl md:text-3xl font-display font-bold">
                  <span className="gradient-text">{category.category}</span>
                </h2>
              </div>

              <div className="space-y-4">
                {category.questions.map((faq, questionIndex) => {
                  const index = categoryIndex * 100 + questionIndex;
                  const isOpen = openIndex === index;

                  return (
                    <div
                      key={questionIndex}
                      className="glass-card overflow-hidden hover:border-quantum-cyan/50 transition-all"
                    >
                      <button
                        onClick={() => toggleQuestion(categoryIndex, questionIndex)}
                        className="w-full px-6 py-5 flex items-center justify-between text-left group"
                      >
                        <h3 className="text-lg font-semibold text-white group-hover:text-quantum-cyan transition-colors pr-4">
                          {faq.question}
                        </h3>
                        <svg
                          className={`w-6 h-6 flex-shrink-0 text-quantum-cyan transition-transform duration-300 ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          isOpen ? 'max-h-96' : 'max-h-0'
                        }`}
                      >
                        <div className="px-6 pb-5 pt-0">
                          <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            );
          })}
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="section-padding bg-gradient-to-b from-quantum-charcoal/30 to-quantum-black">
        <div className="container mx-auto text-center max-w-2xl">
          <h2 className="text-2xl md:text-4xl font-display font-bold mb-6">
            <span className="text-white">Still have </span>
            <span className="gradient-text">questions?</span>
          </h2>
          <p className="text-gray-400 mb-8">
            Can&apos;t find the answer you&apos;re looking for? Our support team is here to help.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="/contact" className="btn-primary">
              Contact Support
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
