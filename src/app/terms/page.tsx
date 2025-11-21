import Header from '@/components/Header';
import PageHero from '@/components/PageHero';
import Footer from '@/components/Footer';

export default function TermsPage() {
  return (
    <main className="bg-quantum-black min-h-screen">
      <Header />
      <PageHero
        title="Terms of Service"
        subtitle="Terms and conditions for using QuantumShield"
        badge="Last Updated: Jan 1, 2025"
      />

      <section className="section-padding">
        <div className="container mx-auto max-w-4xl">
          <div className="glass-card p-12 prose prose-invert prose-lg max-w-none">
            <h2 className="text-2xl font-display font-bold text-white mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-400 mb-6">
              By purchasing or using QuantumShield products, you agree to be bound by these Terms of Service.
              If you do not agree to these terms, do not use our products or services.
            </p>

            <h2 className="text-2xl font-display font-bold text-white mb-4">2. Product Use</h2>
            <p className="text-gray-400 mb-4">You agree to:</p>
            <ul className="list-disc list-inside text-gray-400 space-y-2 mb-6">
              <li>Use the product only for lawful purposes</li>
              <li>Not reverse engineer or modify the hardware or firmware</li>
              <li>Keep your device secure and not share access</li>
              <li>Comply with all applicable export control regulations</li>
            </ul>

            <h2 className="text-2xl font-display font-bold text-white mb-4">3. Warranty</h2>
            <p className="text-gray-400 mb-6">
              QuantumShield products come with a limited warranty as specified in your product documentation.
              The warranty covers manufacturing defects but does not cover misuse, unauthorized modifications,
              or normal wear and tear.
            </p>

            <h2 className="text-2xl font-display font-bold text-white mb-4">4. Limitation of Liability</h2>
            <p className="text-gray-400 mb-6">
              To the maximum extent permitted by law, QuantumShield shall not be liable for any indirect,
              incidental, special, consequential, or punitive damages arising from your use of our products.
            </p>

            <h2 className="text-2xl font-display font-bold text-white mb-4">5. Updates and Changes</h2>
            <p className="text-gray-400 mb-6">
              We reserve the right to modify these terms at any time. Continued use of our products after
              changes constitutes acceptance of the modified terms.
            </p>

            <h2 className="text-2xl font-display font-bold text-white mb-4">6. Governing Law</h2>
            <p className="text-gray-400">
              These terms are governed by the laws of the State of Karnataka, INDIA, without regard to
              its conflict of law provisions.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
