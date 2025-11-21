import React from 'react';
import Header from '@/components/Header';
import PageHero from '@/components/PageHero';
import Footer from '@/components/Footer';
import { KeyIcon3D, ChipIcon3D, DocumentIcon3D, TeamIcon3D } from '@/components/Icons3D';

export const metadata = {
  title: 'Help Center | QuantumShield',
  description: 'Get help with your QuantumShield security key. Find answers, troubleshooting guides, and support resources.',
};

export default function HelpPage() {
  const helpCategories = [
    {
      IconComponent: KeyIcon3D,
      title: 'Getting Started',
      description: 'New to QuantumShield? Start here for setup guides and tutorials.',
      links: [
        { label: 'Quick Start Guide', href: '/getting-started' },
        { label: 'Initial Setup', href: '/documentation/setup' },
        { label: 'First Time Configuration', href: '/documentation/configuration' },
        { label: 'System Requirements', href: '/documentation/requirements' },
      ],
    },
    {
      IconComponent: ChipIcon3D,
      title: 'Troubleshooting',
      description: 'Having issues? Find solutions to common problems.',
      links: [
        { label: 'Connection Issues', href: '/documentation/troubleshooting#connection' },
        { label: 'Authentication Problems', href: '/documentation/troubleshooting#auth' },
        { label: 'Firmware Updates', href: '/documentation/firmware' },
        { label: 'Reset & Recovery', href: '/documentation/recovery' },
      ],
    },
    {
      IconComponent: DocumentIcon3D,
      title: 'Documentation',
      description: 'Comprehensive guides and technical documentation.',
      links: [
        { label: 'User Manual', href: '/documentation' },
        { label: 'API Reference', href: '/api-reference' },
        { label: 'Security Best Practices', href: '/documentation/security' },
        { label: 'Integration Guides', href: '/documentation/integration' },
      ],
    },
    {
      IconComponent: TeamIcon3D,
      title: 'Contact Support',
      description: 'Can\'t find what you need? Reach out to our support team.',
      links: [
        { label: 'Submit a Ticket', href: '/contact?type=support' },
        { label: 'Email Support', href: 'mailto:support@quantumshield.com' },
        { label: 'Community Forum', href: '/community' },
        { label: 'Live Chat', href: '/contact#chat' },
      ],
    },
  ];

  const popularArticles = [
    {
      title: 'How to set up QuantumShield with your computer',
      category: 'Setup',
      readTime: '5 min read',
      href: '/documentation/setup',
    },
    {
      title: 'Understanding post-quantum cryptography',
      category: 'Security',
      readTime: '8 min read',
      href: '/technology',
    },
    {
      title: 'Troubleshooting connection issues',
      category: 'Troubleshooting',
      readTime: '6 min read',
      href: '/documentation/troubleshooting',
    },
    {
      title: 'How to update firmware',
      category: 'Maintenance',
      readTime: '4 min read',
      href: '/documentation/firmware',
    },
  ];

  return (
    <main className="bg-quantum-black min-h-screen">
      <Header />
      <PageHero
        title="Help Center"
        subtitle="Find answers, guides, and support resources"
        badge="24/7 Support Available"
      />

      {/* Search Section */}
      <section className="section-padding bg-quantum-charcoal/30">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-6 text-white">
            How can we help you?
          </h2>
          <div className="relative">
            <input
              type="text"
              placeholder="Search for help articles..."
              className="w-full px-6 py-4 pl-14 rounded-xl bg-glass-card border border-glass-border text-white placeholder-gray-500 focus:border-quantum-cyan focus:outline-none focus:ring-2 focus:ring-quantum-cyan/20 transition-all"
            />
            <svg
              className="w-6 h-6 absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* Help Categories */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {helpCategories.map((category, index) => {
              const IconComponent = category.IconComponent;
              return (
              <div
                key={index}
                className="glass-card p-8 hover:border-quantum-cyan/50 transition-all duration-300 group"
              >
                <div className="mb-4 flex justify-start">
                  <IconComponent className="w-16 h-16" />
                </div>
                <h3 className="text-xl font-display font-bold text-white mb-3 group-hover:text-quantum-cyan transition-colors">
                  {category.title}
                </h3>
                <p className="text-gray-400 mb-6">{category.description}</p>
                <ul className="space-y-3">
                  {category.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link.href}
                        className="text-sm text-gray-300 hover:text-quantum-cyan transition-colors flex items-center gap-2 group/link"
                      >
                        <svg
                          className="w-4 h-4 text-quantum-cyan opacity-0 group-hover/link:opacity-100 transition-opacity"
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
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            );
            })}
          </div>

          {/* Popular Articles */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-8 text-center">
              <span className="text-white">Popular </span>
              <span className="gradient-text">Articles</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {popularArticles.map((article, index) => (
                <a
                  key={index}
                  href={article.href}
                  className="glass-card p-6 hover:border-quantum-cyan/50 transition-all duration-300 group"
                >
                  <div className="flex items-start justify-between mb-3">
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-quantum-cyan/10 text-quantum-cyan border border-quantum-cyan/20">
                      {article.category}
                    </span>
                    <span className="text-xs text-gray-500">{article.readTime}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-quantum-cyan transition-colors">
                    {article.title}
                  </h3>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding bg-gradient-to-b from-quantum-charcoal/30 to-quantum-black">
        <div className="container mx-auto text-center max-w-2xl">
          <h2 className="text-2xl md:text-4xl font-display font-bold mb-6">
            <span className="text-white">Still need </span>
            <span className="gradient-text">help?</span>
          </h2>
          <p className="text-gray-400 mb-8">
            Our support team is available 24/7 to assist you with any questions or issues.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="/contact" className="btn-primary">
              Contact Support
            </a>
            <a href="/community" className="btn-secondary">
              Join Community
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
