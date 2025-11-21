import Header from '@/components/Header';
import PageHero from '@/components/PageHero';
import Footer from '@/components/Footer';

export default function PrivacyPage() {
  return (
    <main className="bg-quantum-black min-h-screen">
      <Header />
      <PageHero
        title="Privacy Policy"
        subtitle="How we protect your data"
        badge="Last Updated: Jan 1, 2025"
      />

      <section className="section-padding">
        <div className="container mx-auto max-w-4xl">
          <div className="glass-card p-12 prose prose-invert prose-lg max-w-none">
            <h2 className="text-2xl font-display font-bold text-white mb-4">1. Introduction</h2>
            <p className="text-gray-400 mb-6">
              QuantumShield is committed to protecting your privacy. This policy explains how we collect,
              use, and safeguard your information when you use our products and services.
            </p>

            <h2 className="text-2xl font-display font-bold text-white mb-4">2. Information We Collect</h2>
            <p className="text-gray-400 mb-4">We collect the following types of information:</p>
            <ul className="list-disc list-inside text-gray-400 space-y-2 mb-6">
              <li>Device registration and serial numbers</li>
              <li>Usage analytics (anonymous)</li>
              <li>Support tickets and communications</li>
              <li>Payment information (processed securely by third parties)</li>
            </ul>

            <h2 className="text-2xl font-display font-bold text-white mb-4">3. How We Use Your Data</h2>
            <p className="text-gray-400 mb-6">
              We use your information to provide and improve our services, process transactions,
              provide customer support, and comply with legal obligations.
            </p>

            <h2 className="text-2xl font-display font-bold text-white mb-4">4. Data Security</h2>
            <p className="text-gray-400 mb-6">
              We employ industry-leading security measures including encryption, access controls,
              and regular security audits to protect your data.
            </p>

            <h2 className="text-2xl font-display font-bold text-white mb-4">5. Your Rights</h2>
            <p className="text-gray-400 mb-4">You have the right to:</p>
            <ul className="list-disc list-inside text-gray-400 space-y-2 mb-6">
              <li>Access your personal data</li>
              <li>Request data deletion</li>
              <li>Opt-out of marketing communications</li>
              <li>Export your data</li>
            </ul>

            <h2 className="text-2xl font-display font-bold text-white mb-4">6. Contact Us</h2>
            <p className="text-gray-400">
              For privacy-related questions, contact us at{' '}
              <a href="mailto:privacy@quantumshield.io" className="text-quantum-cyan hover:underline">
                privacy@quantumshield.io
              </a>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
